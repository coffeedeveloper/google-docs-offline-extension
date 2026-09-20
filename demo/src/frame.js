import { ACCOUNT, EXTENSION_ID } from "./core/config.js";
import { setMeta, recordEvent, events } from "./core/database.js";
import { syncAll } from "./core/sync-engine.js";
const extensionOrigin = `chrome-extension://${EXTENSION_ID}`;
if (window.parent === window)
  throw Error("This endpoint is only for the extension offscreen iframe");
if (new URL(location.href).searchParams.get("ouid") !== ACCOUNT)
  throw Error("Unexpected demo account");
const replies = new MessageChannel();
const connection = new MessageChannel();
connection.port1.onmessage = async (event) => {
  const reply = event.ports[0];
  if (!reply) return;
  const request = event.data;
  try {
    if (request?.[0] !== 0) throw Error("Unsupported frame request");
    await syncAll(request[1]?.[0] || "alarm");
    reply.postMessage([0]);
  } catch (error) {
    // Keep pending operations durable. Frame response uses the original codec,
    // while rich demo diagnostic state lives in the same-origin IndexedDB.
    reply.postMessage([0]);
  } finally {
    reply.close();
  }
};
replies.port1.onmessage = async (event) => {
  if (event.data?.[0] !== 1) return;
  await setMeta("frameHandshake", { at: Date.now(), origin: location.origin });
  await recordEvent(
    "handshake",
    "Google 协议 type 1 → offscreen type 3 → worker ready",
  );
  replies.port1.close();
  void syncAll("frame-start").catch(() => {});
};
window.parent.postMessage(
  [1, null, null, null, null, null, [ACCOUNT]],
  extensionOrigin,
  [replies.port2, connection.port2],
);

// Original extension alarm remains 5 minutes. An awake iframe also responds to
// same-origin local writes; it cannot run after the extension closes the page.
let timer;
events.addEventListener("message", (event) => {
  if (!["document", "resume"].includes(event.data?.type)) return;
  clearTimeout(timer);
  timer = setTimeout(() => {
    void syncAll("local-change").catch(() => {});
  }, 600);
});
window.addEventListener("online", () => {
  void syncAll("online").catch(() => {});
});
