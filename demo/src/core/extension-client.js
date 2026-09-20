import { EXTENSION_ID, ACCOUNT } from "./config.js";
import { getMeta, setMeta, recordEvent } from "./database.js";
export async function request(message, timeout = 15000) {
  if (!globalThis.chrome?.runtime?.sendMessage)
    throw Error("尚未加载 Demo 适配扩展");
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(Error("扩展响应超时，请检查 offscreen 页面")),
      timeout,
    );
    try {
      chrome.runtime.sendMessage(EXTENSION_ID, message, (response) => {
        clearTimeout(timer);
        if (chrome.runtime.lastError)
          return reject(Error(chrome.runtime.lastError.message));
        if (response?.[4])
          return reject(Error(response[4][0] || "扩展返回错误"));
        resolve(response);
      });
    } catch (error) {
      clearTimeout(timer);
      reject(error);
    }
  });
}
export async function detectExtension() {
  try {
    const response = await request([5, null, null, null, ["localhost"]], 2500);
    return response?.[0] === 5;
  } catch {
    return false;
  }
}
export async function connectExtension() {
  await request([2, null, null, null, null, null, null, [ACCOUNT, false]]);
  await setMeta("extensionEnabled", true);
  await recordEvent("extension", "已启用：worker → offscreen → 同源 iframe");
}
export async function disconnectExtension() {
  await request([3]);
  await setMeta("extensionEnabled", false);
}
export async function requestSync(reason = "manual") {
  if (await getMeta("simulateOffline")) return;
  // Original WebsiteRequest.FORWARD_TO_FRAME + FrameRequest.ALARM wire shape.
  return request([4, null, null, [0, [reason]]]);
}
