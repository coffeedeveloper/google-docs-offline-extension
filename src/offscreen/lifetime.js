import {
  Disposable,
  schedule,
  reportError,
  normalizeError,
} from "./runtime-api.js";
import { Timing } from "../shared/message-types.js";

/** Port count, idle shutdown and hard age limit are separate conditions. */
export class OffscreenLifetime extends Disposable {
  constructor() {
    super();
    this.reporter = null;
    this.activeConnections = 0;
    this.idleTimeout = 0;
    chrome.runtime.onConnectExternal.addListener((port) =>
      this.trackConnection(port),
    );
    schedule(() => {
      if (this.reporter)
        reportError(
          this.reporter,
          normalizeError("Force closed the offscreen document after one hour."),
        );
      self.close();
    }, Timing.OFFSCREEN_MAX_AGE_MS);
  }

  trackConnection(port) {
    this.activeConnections++;
    this.cancelIdleClose();
    port.onDisconnect.addListener(() => {
      this.activeConnections--;
      if (this.activeConnections === 0) this.scheduleIdleClose();
    });
  }

  cancelIdleClose() {
    self.clearTimeout(this.idleTimeout);
  }

  scheduleIdleClose() {
    if (this.activeConnections !== 0) return;
    this.cancelIdleClose();
    this.idleTimeout = schedule(() => {
      if (this.activeConnections === 0) self.close();
    }, Timing.OFFSCREEN_IDLE_MS);
  }
}
