import {
  Disposable,
  createDeferred,
  SampledLogger,
  Messages,
  createUrl,
  setPath,
  setQuery,
  setNumber,
  setString,
  setNested,
  readNumber,
  getFrameResponse,
  asLegacyPromise,
  rejectOptedOut,
  normalizeError,
  attachErrorContext,
  waitForOffscreenStartup,
} from "./runtime-api.js";
import { sendOffscreenRequest } from "./runtime-messaging.js";
import { getOptInStatus, getOptedInUserId } from "./offline-state.js";
import {
  OffscreenRequest,
  OptInStatus,
  Timing,
} from "../shared/message-types.js";

export function hasOffscreenDocument() {
  return self.clients
    .matchAll()
    .then((clients) =>
      clients.some((client) =>
        client.url.includes(chrome.runtime.getURL("offscreendocument.html")),
      ),
    );
}

export function isDisconnectedChannel(message) {
  return (
    message.includes(
      "Could not establish connection. Receiving end does not exist.",
    ) ||
    message.includes(
      "The message port closed before a response was received.",
    ) ||
    message.includes(
      "A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received",
    )
  );
}

function documentCheckContextKey(attempt) {
  if (attempt === 0) return "hasDocument_beforeCreatingOffscreenDoc_0";
  if (attempt === 1) return "hasDocument_beforeCreatingOffscreenDoc_1";
  throw Error("Cannot get error context key with retryAttempt " + attempt);
}

function rethrowWithContext(error, context) {
  error = normalizeError(error);
  for (const [key, value] of Object.entries(context))
    attachErrorContext(error, key, value);
  throw error;
}

/** Creates the hidden DOM context; the Google iframe owns document-side work. */
export class OffscreenManager extends Disposable {
  constructor(extensionVersion, sessionId, samplePercentage) {
    super();
    this.docsOrigin = null;
    this.extensionVersion = extensionVersion;
    this.sessionId = sessionId;
    this.samplePercentage = samplePercentage;
    this.frameReady = createDeferred();
    this.frameConnected = false;
    const url = createUrl();
    setPath(url, "offscreendocument.html");
    setQuery(url, "randomPercentageForSampling", samplePercentage);
    setQuery(url, "sessionId", sessionId);
    this.documentOptions = {
      url: url.toString(),
      reasons: ["IFRAME_SCRIPTING"],
      justification:
        "Use iframe to access user data under docs.google.com domain",
    };
    this.logger = new SampledLogger(samplePercentage);
  }

  markFrameConnected() {
    this.frameConnected = true;
    this.frameReady.resolve();
  }

  resetConnection() {
    this.frameReady = createDeferred();
    this.frameConnected = false;
  }

  close() {
    return hasOffscreenDocument()
      .then((exists) => {
        if (!exists) return Promise.resolve();
        const request = setNumber(
          new Messages.OffscreenRequest(),
          1,
          OffscreenRequest.REMOVE_FRAME,
        );
        return sendOffscreenRequest(request).then(() =>
          chrome.offscreen.closeDocument(),
        );
      })
      .then(() => this.resetConnection());
  }

  ensureFrame(userId) {
    return Promise.resolve(
      this.initializeDocument(
        this.configurationRequest(OffscreenRequest.ENSURE_FRAME, userId),
      ),
    );
  }

  recreateFrame(userId) {
    return Promise.resolve(
      this.initializeDocument(
        this.configurationRequest(OffscreenRequest.RECREATE_FRAME, userId),
      ),
    );
  }

  configurationRequest(type, userId) {
    const request = setNumber(new Messages.OffscreenRequest(), 1, type);
    const configuration = new Messages.FrameConfiguration();
    setString(configuration, 1, userId);
    setString(configuration, 2, this.docsOrigin.toString());
    setString(configuration, 3, this.extensionVersion);
    setString(configuration, 4, OptInStatus.ENABLED);
    return setNested(request, Messages.FrameConfiguration, 2, configuration);
  }

  ensureDocument(context) {
    return hasOffscreenDocument().then((exists) => {
      context[documentCheckContextKey(0)] = exists.toString();
      return exists ? Promise.resolve() : this.createDocument();
    });
  }

  createDocument() {
    return chrome.offscreen
      .createDocument(this.documentOptions)
      .catch((error) => {
        // Another event can win the singleton creation race.
        if (
          error instanceof Error &&
          error.message.includes(
            "Only a single offscreen document may be created",
          )
        ) {
          this.logger.info(error);
        } else return Promise.reject(error);
      });
  }

  forceRecreateDocument(context) {
    return chrome.offscreen
      .closeDocument()
      .catch((error) => {
        const message =
          error instanceof Error ? error.message : error.toString();
        this.logger.info(Error(message), context);
        context.errorWhenForceCloseOffscreenDoc = message;
      })
      .then(() => this.createDocument());
  }

  initializeDocument(request) {
    // Preserve the original decoder's validation reads.
    if (readNumber(request, 1) !== OffscreenRequest.ENSURE_FRAME)
      readNumber(request, 1);
    const context = {
      sendingOffscreenDocumentRequestType: readNumber(request, 1).toString(),
    };
    return asLegacyPromise(this.ensureDocument(context))
      .then(() => waitForOffscreenStartup())
      .then(() => sendOffscreenRequest(request))
      .catch((error) => {
        if (!(error instanceof Error && isDisconnectedChannel(error.message))) {
          return Promise.reject(error instanceof Error ? error : Error(error));
        }
        this.logger.info(error, context);
        return asLegacyPromise(hasOffscreenDocument())
          .then((exists) => {
            context[documentCheckContextKey(1)] = exists.toString();
          })
          .then(() => this.forceRecreateDocument(context))
          .then(() => waitForOffscreenStartup())
          .then(() => sendOffscreenRequest(request));
      })
      .catch((error) => rethrowWithContext(error, context));
  }

  requestFrame(frameRequest) {
    const context = { sendingFrameRequestType: readNumber(frameRequest, 1) };
    const request = setNumber(
      new Messages.OffscreenRequest(),
      1,
      OffscreenRequest.FORWARD_TO_FRAME,
    );
    setNested(request, Messages.FrameRequest, 5, frameRequest);
    return Promise.resolve(
      this.sendToConnectedFrame(request, context, 0),
    ).catch((error) => {
      if (error instanceof Error) {
        context.offlineFrameConnected_afterFirstError = this.frameConnected;
        if (isDisconnectedChannel(error.message)) {
          this.logger.info(error, context);
          return new Promise((resolve) =>
            setTimeout(
              () => resolve(this.sendToConnectedFrame(request, context, 1)),
              Timing.FRAME_RETRY_MS,
            ),
          );
        }
        if (
          error.message === "Requests cancelled because user has been opted out"
        ) {
          return Promise.resolve(new Messages.FrameResponse());
        }
      }
      return Promise.reject(error instanceof Error ? error : Error(error));
    });
  }

  sendToConnectedFrame(request, context, attempt) {
    return this.frameReady.promise
      .then(() => hasOffscreenDocument())
      .then((exists) => {
        context[documentCheckContextKey(attempt)] = exists.toString();
        return exists ? asLegacyPromise() : this.restoreFrame();
      })
      .then(() => this.frameReady.promise)
      .then(() => sendOffscreenRequest(request))
      .then((response) => getFrameResponse(response))
      .catch((error) => rethrowWithContext(error, context));
  }

  restoreFrame() {
    this.resetConnection();
    return getOptInStatus().then((status) =>
      status === OptInStatus.ENABLED
        ? getOptedInUserId().then((userId) => this.recreateFrame(userId))
        : rejectOptedOut(),
    );
  }

  // Closure Disposable invokes this hook. Keep its ABI name at this boundary.
  N() {
    this.close();
    super.N();
  }
}
