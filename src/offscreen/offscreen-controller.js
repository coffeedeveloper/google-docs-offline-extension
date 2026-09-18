import {
  Disposable,
  createUrl,
  queryParameter,
  createSessionId,
  initializeConsoleLogging,
  EventHandler,
  ownDisposable,
  SampledLogger,
  Messages,
  readEchoType,
  readType,
  readNested,
  readString,
  readOptionalValue,
  setString,
  setNumber,
  setNested,
  serialize,
  createErrorReporter,
  setPath,
} from "./runtime-api.js";
import { sendWorkerRequest } from "./runtime-messaging.js";
import { GoogleIframeManager } from "./iframe-manager.js";
import { OffscreenLifetime } from "./lifetime.js";
import { FrameMessageRouter } from "./frame-message-router.js";
import {
  WebsiteRequest,
  OffscreenRequest,
  OptInStatus,
} from "../shared/message-types.js";

export class OffscreenController extends Disposable {
  constructor() {
    super();
    const url = createUrl(self.location);
    this.sessionId = queryParameter(
      url,
      "sessionId",
      String,
      createSessionId(),
    );
    this.iframeManager = null;
    this.reporter = null;
    this.docsOriginString = null;
    this.lifetime = new OffscreenLifetime();
    this.lifetime.scheduleIdleClose();
    this.consoleLogger = initializeConsoleLogging();
    this.events = new EventHandler(this);
    ownDisposable(this, this.events);
    this.events.listen(self, "message", this.onWindowMessage);
    this.samplePercentage = queryParameter(
      url,
      "randomPercentageForSampling",
      Number,
      Math.random() * 100,
    );
    this.reportNonFatalErrors = this.samplePercentage < 1;
    this.logger = new SampledLogger(this.samplePercentage);
    this.optInStatus = OptInStatus.UNKNOWN;
    this.userId = null;
    this.extensionVersion = "unknown";
    this.frameRouter = new FrameMessageRouter(this.logger, (request, port) =>
      this.onFrameRequest(request, port),
    );
    chrome.runtime.onMessage.addListener(this.onWorkerMessage.bind(this));
  }

  onWindowMessage(event) {
    this.frameRouter.onMessage(event);
  }

  onFrameRequest(request, connectionPort) {
    const response = setNumber(
      new Messages.WebsiteResponse(),
      1,
      readEchoType(request),
    );
    switch (readType(request)) {
      case WebsiteRequest.FRAME_CONNECTED: {
        const connection = readNested(request, Messages.FrameConnection, 7);
        const userId = connection ? readString(connection, 1) : null;
        const information = setString(
          new Messages.FrameConnection(),
          2,
          Date.now().toString(),
        );
        if (userId) setString(information, 1, userId);
        else
          this.logger.info(
            Error("Scheduler frame connect request sent without an ouid."),
          );
        const notification = setNumber(
          new Messages.OffscreenRequest(),
          1,
          OffscreenRequest.FRAME_CONNECTED,
        );
        setNested(notification, Messages.FrameConnection, 4, information);
        return sendWorkerRequest(notification)
          .then(() => {
            this.iframeManager.acceptConnection(connectionPort);
          })
          .then(() => response);
      }
      case WebsiteRequest.USER_CHANGED: {
        const notification = setNumber(
          new Messages.OffscreenRequest(),
          1,
          OffscreenRequest.USER_CHANGED,
        );
        setNested(
          notification,
          Messages.UserChange,
          6,
          readNested(request, Messages.UserChange, 3),
        );
        return sendWorkerRequest(notification).then(() => response);
      }
      default:
        throw Error("Dropped unknown message " + request);
    }
  }

  onWorkerMessage(wireRequest, sender, reply) {
    this.lifetime.cancelIdleClose();
    const request = new Messages.OffscreenRequest(wireRequest);
    this.dispatch(request)
      .then((response) => {
        reply(serialize(response));
      })
      .catch((error) => {
        error = error instanceof Error ? error : Error(error);
        const payload = setString(new Messages.Error(), 1, error.message);
        const response = setNumber(
          new Messages.OffscreenResponse(),
          1,
          readEchoType(request),
        );
        setNested(response, Messages.Error, 3, payload);
        reply(serialize(response));
      })
      .finally(() => {
        this.lifetime.scheduleIdleClose();
      });
    return true;
  }

  dispatch(request) {
    const response = setNumber(
      new Messages.OffscreenResponse(),
      1,
      readEchoType(request),
    );
    try {
      switch (readType(request)) {
        case OffscreenRequest.RECREATE_FRAME:
          this.initialize(request);
          return this.iframeManager.recreate(this.userId).then(() => response);
        case OffscreenRequest.FORWARD_TO_FRAME:
          return this.iframeManager
            .request(readNested(request, Messages.FrameRequest, 5))
            .then((frameResponse) => {
              setNested(response, Messages.FrameResponse, 4, frameResponse);
              return response;
            });
        case OffscreenRequest.REMOVE_FRAME:
          return this.iframeManager.remove().then(() => response);
        case OffscreenRequest.ENSURE_FRAME:
          this.initialize(request);
          return this.iframeManager.ensure(this.userId).then(() => response);
        default:
          throw Error("Dropped unknown message");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  initialize(request) {
    if (this.iframeManager) return;
    const configuration = readNested(request, Messages.FrameConfiguration, 2);
    this.userId = readString(configuration, 1);
    this.docsOriginString = readString(configuration, 2);
    this.optInStatus = readOptionalValue(configuration, 4) ?? this.optInStatus;
    this.extensionVersion =
      readOptionalValue(configuration, 3) ?? this.extensionVersion;
    const docsOrigin = createUrl(this.docsOriginString);
    const errorUrl = setPath(docsOrigin, "/offline/jserror").toString();
    this.reporter = createErrorReporter(
      errorUrl,
      this.reportNonFatalErrors,
      this.sessionId,
      this.extensionVersion,
      this.optInStatus,
    );
    ownDisposable(this, this.reporter);
    this.logger.bind(this.reporter);
    this.lifetime.reporter = this.reporter;
    this.iframeManager = new GoogleIframeManager(this.samplePercentage);
    this.iframeManager.reporter = this.reporter;
    this.iframeManager.logger.bind(this.reporter);
    this.iframeManager.docsOrigin = docsOrigin;
    ownDisposable(this, this.iframeManager);
  }
}
