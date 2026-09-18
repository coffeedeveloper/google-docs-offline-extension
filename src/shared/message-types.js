/** Numeric values are part of Google's wire protocol. Keep channels separate. */
export const WebsiteRequest = Object.freeze({
  FRAME_CONNECTED: 1,
  ENSURE_OFFLINE: 2,
  USER_CHANGED: 3,
  FORWARD_TO_FRAME: 4,
  QUERY_DOMAIN_POLICY: 5,
});

export const OffscreenRequest = Object.freeze({
  RECREATE_FRAME: 1,
  FRAME_CONNECTED: 3,
  FORWARD_TO_FRAME: 4,
  REMOVE_FRAME: 5,
  ENSURE_FRAME: 6,
  USER_CHANGED: 7,
});

export const FrameRequest = Object.freeze({ ALARM: 0 });
export const OptInStatus = Object.freeze({
  UNKNOWN: "unknown",
  ENABLED: "opted_in",
  DISABLED: "opted_out",
});
export const Timing = Object.freeze({
  HEARTBEAT_MINUTES: 5,
  OFFSCREEN_STARTUP_MS: 2000,
  FRAME_RETRY_MS: 2000,
  FRAME_CONNECT_TIMEOUT_MS: 14000,
  OFFSCREEN_IDLE_MS: 60000,
  OFFSCREEN_MAX_AGE_MS: 3600000,
  WORKER_RECOVERY_MS: 25200000,
});
