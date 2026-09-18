import {
  Disposable,
  createDeferred,
  asLegacyPromise,
  ownDisposable,
  EventHandler,
  createSessionId,
  initializeConsoleLogging,
  SampledLogger,
  createErrorReporter,
  reporterContext,
  reportError,
  protectCallback,
  monitorPromise,
  normalizeError,
  schedule,
  createUrl,
  setPath,
  setQuery,
  setScheme,
  Messages,
  serialize,
  readType,
  readString,
  readOptionalString,
  hasStringField,
  readEchoType,
  readNested,
  readBoolean,
  setString,
  setNumber,
  setNested,
  unwrapMessageEvent,
} from "./runtime-api.js";
import {
  enableOffline,
  disableOffline,
  getOptInStatus,
  getOptedInUserId,
  getLastFrameConnectionTime,
  writeLocalState,
} from "./offline-state.js";
import { queryDomainPolicy } from "./domain-policy.js";
import { OffscreenManager } from "./offscreen-manager.js";
import { HeartbeatScheduler } from "./heartbeat.js";
import {
  WebsiteRequest,
  OffscreenRequest,
  FrameRequest,
  OptInStatus,
  Timing,
} from "../shared/message-types.js";

export function getExtensionVersion() {
  return chrome.runtime.getManifest().version || "unknown";
}

/** Extension events and account state. All document operations remain in the Google frame. */
export class ExtensionController extends Disposable {
  constructor() {
    super();
    this.sessionId = createSessionId();
    this.reporter = null;
    this.docsDomain = null;
    this.accountRecoveryAttempted = false;
    this.consoleLogger = initializeConsoleLogging();
    this.initialized = createDeferred();

    chrome.alarms.onAlarm.addListener((alarm) =>
      this.initialized.promise
        .then(() =>
          monitorPromise(
            this.reporter,
            protectCallback(this.reporter, this.onAlarm, this)(alarm),
          ),
        )
        .catch((error) =>
          this.logger.error(normalizeError(error), {
            extension_codePath: "onAlarm_listener",
          }),
        ),
    );
    chrome.runtime.onMessageExternal.addListener((request, sender, reply) =>
      this.onWebsiteMessage(request, reply),
    );
    chrome.runtime.onMessage.addListener(this.onOffscreenMessage.bind(this));
    this.events = new EventHandler(this);
    ownDisposable(this, this.events);
    this.events.listen(self, "message", this.onWindowMessage);
    this.samplePercentage = Math.random() * 100;
    this.reportNonFatalErrors = this.samplePercentage < 1;
    this.logger = new SampledLogger(this.samplePercentage);
    this.offscreen = new OffscreenManager(
      getExtensionVersion(),
      this.sessionId,
      this.samplePercentage,
    );
    this.heartbeat = new HeartbeatScheduler(
      (name) => this.forwardAlarm(name),
      this.logger,
    );
    chrome.runtime.onConnectExternal.addListener(() => {});
    schedule(this.scheduleRecoveryAlarm, Timing.WORKER_RECOVERY_MS, this);
  }

  getDocsOrigin() {
    return setScheme(createUrl("//" + this.docsDomain), "https");
  }

  load() {
    this.docsDomain = "docs.google.com";
    return writeLocalState({ docsDomain: this.docsDomain })
      .then(() => {
        const errorUrl = setPath(
          this.getDocsOrigin(),
          "/offline/jserror",
        ).toString();
        this.reporter = createErrorReporter(
          errorUrl,
          this.reportNonFatalErrors,
          this.sessionId,
        );
        this.initialized.resolve();
        ownDisposable(this, this.reporter);
        this.logger.bind(this.reporter);
        this.offscreen.logger.bind(this.reporter);
        this.offscreen.docsOrigin = this.getDocsOrigin();
        ownDisposable(this, this.offscreen);
        const restore = protectCallback(
          this.reporter,
          this.restoreSavedState,
          this,
        );
        return asLegacyPromise(
          monitorPromise(
            this.reporter,
            asLegacyPromise().then(() => restore()),
          ),
        );
      })
      .catch((error) => {
        normalizeError(error);
      });
  }

  restoreSavedState() {
    return getLastFrameConnectionTime()
      .then((timestamp) => {
        reporterContext(this.reporter).lastSuccessfulFrameConnectTime =
          timestamp?.toString() || "null";
      })
      .then(() => getOptInStatus())
      .then((status) => {
        const version = getExtensionVersion();
        reporterContext(this.reporter).extensionVersion = version;
        reporterContext(this.reporter).optInStatus = String(status);
        this.reportStartup(String(status), version);
        switch (status) {
          case OptInStatus.UNKNOWN:
            break;
          case OptInStatus.ENABLED:
            return getOptedInUserId().then((userId) =>
              this.offscreen.recreateFrame(userId),
            );
          case OptInStatus.DISABLED:
            break;
          default:
            throw Error("Could not handle opt in status " + status);
        }
      });
  }

  reportStartup(status, version) {
    if (!this.reportNonFatalErrors) return;
    const url = setPath(this.getDocsOrigin(), "/offline/extension/report");
    setQuery(url, "v", version);
    setQuery(url, "optin", status);
    self
      .fetch(new Request(url.toString(), { method: "post", mode: "cors" }))
      .then(() => {})
      .catch((error) => {
        reportError(this.reporter, normalizeError(error));
      });
  }

  scheduleRecoveryAlarm() {
    chrome.alarms.create("open", { delayInMinutes: 1 });
    this.logger.info(Error("Called unsafeClose_"));
  }

  onWindowMessage(wrappedEvent) {
    const event = unwrapMessageEvent(wrappedEvent);
    if (!(event && event.data && event.ports && event.ports.length)) {
      this.logger.error(Error("Dropped invalid event."), {
        event: String(wrappedEvent),
      });
      return;
    }
    const request = new Messages.WebsiteRequest(event.data);
    this.dispatchSafely(
      request,
      event.ports.length > 1 ? event.ports[1] : undefined,
    )
      .then((response) => {
        event.ports[0].postMessage(serialize(response));
      })
      .catch((error) =>
        this.logger.error(normalizeError(error), {
          context: "onMessageFromOfflineFrame_postMessage",
        }),
      );
  }

  onWebsiteMessage(wireRequest, reply) {
    const request = new Messages.WebsiteRequest(wireRequest);
    this.dispatchSafely(request)
      .then((response) => {
        reply(serialize(response));
      })
      .catch((error) => {
        if (
          error instanceof Error &&
          error.message === "Attempting to use a disconnected port object"
        ) {
          error = Error(
            "Failed to reply to request because listen port was disconnected.",
          );
        } else error = normalizeError(error);
        this.logger.error(error, { requestType: readType(request) });
      });
    return true;
  }

  onOffscreenMessage(wireRequest, sender, reply) {
    const request = new Messages.OffscreenRequest(wireRequest);
    switch (readType(request)) {
      case OffscreenRequest.FRAME_CONNECTED: {
        const connection = readNested(request, Messages.FrameConnection, 4);
        const userId = hasStringField(connection, 1)
          ? readOptionalString(connection, 1)
          : null;
        const timestamp = readString(connection, 2);
        enableOffline(userId)
          .then(() =>
            writeLocalState({
              lastSuccessfulFrameConnectTime: parseInt(timestamp, 10),
            }),
          )
          .then(() => {
            this.offscreen.markFrameConnected();
          })
          .then(() => {
            reply(
              serialize(
                setNumber(
                  new Messages.OffscreenResponse(),
                  1,
                  OffscreenRequest.FRAME_CONNECTED,
                ),
              ),
            );
          })
          .catch((error) =>
            this.logger.error(normalizeError(error), {
              context: "saveFrameConnectInfo",
            }),
          );
        break;
      }
      case OffscreenRequest.USER_CHANGED: {
        const response = setNumber(
          new Messages.OffscreenResponse(),
          1,
          OffscreenRequest.USER_CHANGED,
        );
        const change = readNested(request, Messages.UserChange, 6);
        const userId =
          change == null ? undefined : readOptionalString(change, 1);
        (userId ? this.recoverAccount(userId) : this.optOut())
          .then(() => reply(serialize(response)))
          .catch((error) =>
            this.logger.error(normalizeError(error), {
              context: "detectUserIsOptedOut",
            }),
          );
        break;
      }
      default:
        throw Error("Unsupported OffscreenDocumentRequestType.");
    }
    return true;
  }

  dispatchSafely(request, connectionPort) {
    return asLegacyPromise()
      .then(this.dispatch.bind(this, request, connectionPort))
      .catch((error) => {
        error = error instanceof Error ? error : Error(error);
        const response = new Messages.WebsiteResponse();
        const payload = new Messages.Error();
        setNested(response, Messages.Error, 5, payload);
        setString(payload, 1, error.message);
        return response;
      });
  }

  dispatch(request) {
    const response = setNumber(
      new Messages.WebsiteResponse(),
      1,
      readEchoType(request),
    );
    switch (readType(request)) {
      case WebsiteRequest.FRAME_CONNECTED: {
        const connection = readNested(request, Messages.FrameConnection, 7);
        const userId = connection ? readString(connection, 1) : null;
        if (!userId)
          this.logger.info(
            Error("Scheduler frame connect request sent without an ouid."),
          );
        return enableOffline(userId)
          .then(() =>
            writeLocalState({ lastSuccessfulFrameConnectTime: Date.now() }),
          )
          .then(() => {
            this.offscreen.markFrameConnected();
          })
          .then(() => response);
      }
      case WebsiteRequest.ENSURE_OFFLINE: {
        const options = readNested(request, Messages.EnableOffline, 8);
        const userId = options ? readString(options, 1) : null;
        const forceHeartbeat = options ? readBoolean(options) : false;
        return enableOffline(userId)
          .then(() => userId || getOptedInUserId())
          .then((savedUserId) =>
            this.offscreen
              .ensureFrame(savedUserId)
              .then(() => this.heartbeat.start(forceHeartbeat)),
          )
          .then(() => response);
      }
      case WebsiteRequest.USER_CHANGED: {
        const change = readNested(request, Messages.UserChange, 3);
        return (
          change && readOptionalString(change, 1)
            ? this.recoverAccount(readOptionalString(change, 1))
            : this.optOut()
        ).then(() => response);
      }
      case WebsiteRequest.QUERY_DOMAIN_POLICY:
        return queryDomainPolicy(
          readNested(request, Messages.DomainPolicyRequest, 5),
        ).then((policy) => {
          setNested(response, Messages.DomainPolicyResponse, 4, policy);
          return response;
        });
      case WebsiteRequest.FORWARD_TO_FRAME:
        return asLegacyPromise(
          this.offscreen.requestFrame(
            readNested(request, Messages.FrameRequest, 4),
          ),
        ).then((frameResponse) => {
          setNested(response, Messages.FrameResponse, 3, frameResponse);
          return response;
        });
      default:
        throw Error("Dropped unknown message " + request);
    }
  }

  recoverAccount(userId) {
    if (this.accountRecoveryAttempted)
      return asLegacyPromise(this.offscreen.close());
    this.logger.info(Error("Extension frame connected with the wrong OUID."));
    this.accountRecoveryAttempted = true;
    return asLegacyPromise(this.offscreen.recreateFrame(userId));
  }

  optOut() {
    return disableOffline()
      .then(() => this.heartbeat.stop())
      .then(() => this.offscreen.close());
  }

  onAlarm(alarm) {
    return this.forwardAlarm(alarm.name);
  }

  forwardAlarm(name) {
    const request = setNumber(
      new Messages.FrameRequest(),
      1,
      FrameRequest.ALARM,
    );
    const alarm = setString(new Messages.Alarm(), 1, name);
    setNested(request, Messages.Alarm, 2, alarm);
    return asLegacyPromise(this.offscreen.requestFrame(request));
  }
}
