import {
  asLegacyPromise,
  unwrapMessageEvent,
  parseWebsiteRequest,
  Messages,
  serialize,
  setNested,
  setString,
} from "./runtime-api.js";

/** Window messages use port[0] for replies and optional port[1] for the handshake. */
export class FrameMessageRouter {
  constructor(logger, dispatch) {
    this.logger = logger;
    this.dispatch = dispatch;
  }

  onMessage(wrappedEvent) {
    const event = unwrapMessageEvent(wrappedEvent);
    if (!(event && event.data && event.ports && event.ports.length)) {
      this.logger.error(Error("Dropped invalid event."), {
        event: String(wrappedEvent),
      });
      return;
    }
    const request = event.data
      ? parseWebsiteRequest(JSON.stringify(event.data))
      : new Messages.WebsiteRequest();
    this.dispatchSafely(
      request,
      event.ports.length > 1 ? event.ports[1] : undefined,
    ).then((response) => {
      event.ports[0].postMessage(serialize(response));
    });
  }

  dispatchSafely(request, connectionPort) {
    return asLegacyPromise()
      .then(() => this.dispatch(request, connectionPort))
      .ta((error) => {
        error = error instanceof Error ? error : Error(error);
        const response = new Messages.WebsiteResponse();
        const payload = new Messages.Error();
        setNested(response, Messages.Error, 5, payload);
        setString(payload, 1, error.message);
        return response;
      });
  }
}
