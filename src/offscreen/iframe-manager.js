import {
  Disposable,
  createDeferred,
  SampledLogger,
  setPath,
  createGoogleIframe,
  schedule,
  drainLogsAfterConnectionTimeout,
  Messages,
  serialize,
} from "./runtime-api.js";
import { Timing } from "../shared/message-types.js";

/** Owns the cross-origin Google iframe and the port supplied by its handshake. */
export class GoogleIframeManager extends Disposable {
  constructor(samplePercentage) {
    super();
    this.iframe = null;
    this.reporter = null;
    this.connection = createDeferred();
    this.connected = false;
    this.connectionTimeout = 0;
    this.docsOrigin = null;
    this.logger = new SampledLogger(samplePercentage);
  }

  buildFrameUrl(userId) {
    return (
      setPath(this.docsOrigin, "/offline/extension/frame").toString() +
      "?ouid=" +
      (userId ? encodeURIComponent(String(userId)) : "")
    );
  }

  remove() {
    self.clearTimeout(this.connectionTimeout);
    if (this.iframe) {
      if (this.connected) {
        this.connection = createDeferred();
        this.connected = false;
      }
      if (this.iframe.parentNode)
        this.iframe.parentNode.removeChild(this.iframe);
      this.iframe = null;
    }
    return Promise.resolve();
  }

  ensure(userId) {
    return this.iframe ? Promise.resolve() : this.recreate(userId);
  }

  recreate(userId) {
    if (!userId)
      this.logger.info(Error("Creating extension frame without an OUID."));
    const url = this.buildFrameUrl(userId);
    return this.remove().then(() => {
      this.iframe = createGoogleIframe(url);
      document.body.appendChild(this.iframe);
      this.connectionTimeout = schedule(() => {
        this.logger.error(Error("Timed out waiting for frame connection."));
        return drainLogsAfterConnectionTimeout(this.reporter).then(() => {
          self.close();
        });
      }, Timing.FRAME_CONNECT_TIMEOUT_MS);
      return Promise.resolve();
    });
  }

  acceptConnection(port) {
    this.connection.resolve(port);
    this.connected = true;
    self.clearTimeout(this.connectionTimeout);
  }

  request(request) {
    return Promise.resolve(this.connection.promise).then((connectionPort) => {
      const channel = new MessageChannel();
      return new Promise((resolve) => {
        channel.port1.onmessage = (event) =>
          resolve(new Messages.FrameResponse(event.data));
        connectionPort.postMessage(serialize(request), [channel.port2]);
      }).finally(() => {
        channel.port1.close();
      });
    });
  }

  N() {
    this.remove();
    super.N();
  }
}
