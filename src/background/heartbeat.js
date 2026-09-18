import { LegacyPromise, normalizeError } from "./runtime-api.js";
import { Timing } from "../shared/message-types.js";

export class HeartbeatScheduler {
  constructor(forwardAlarm, logger) {
    this.forwardAlarm = forwardAlarm;
    this.logger = logger;
  }

  start(force = false) {
    return new LegacyPromise((resolve) => {
      chrome.alarms.get("heartbeat", (existingAlarm) => {
        if (!existingAlarm)
          chrome.alarms.create("heartbeat", {
            periodInMinutes: Timing.HEARTBEAT_MINUTES,
          });
        if (!existingAlarm || force) {
          this.forwardAlarm("heartbeat").catch((error) =>
            this.logger.error(normalizeError(error), {
              context: "startHeartbeat_triggerAlarm",
            }),
          );
        }
        resolve();
      });
    });
  }

  stop() {
    return new LegacyPromise((resolve) =>
      chrome.alarms.clear("heartbeat", () => resolve()),
    );
  }
}
