import { ACCOUNT, EXTENSION_ID } from "./core/config.js";
import { setMeta, recordEvent, events } from "./core/database.js";
import { syncAll } from "./core/sync-engine.js";
const extensionOrigin = `chrome-extension://${EXTENSION_ID}`;
// 这个脚本属于网站 origin，并非扩展页；仅接受指定演示账号的嵌入式运行方式。
if (window.parent === window)
  throw Error("This endpoint is only for the extension offscreen iframe");
if (new URL(location.href).searchParams.get("ouid") !== ACCOUNT)
  throw Error("Unexpected demo account");
const replies = new MessageChannel();
// 两个通道职责不同：replies 只完成握手；connection 保留给后续 RPC，各 RPC 另带回复端口。
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
    // [0] 是原 frame 通道的回复，不是“服务端已保存”的 ACK。
    // syncAll 的业务失败已记录到同源 IDB；队列保持不变，界面读取 syncStatus 展示错误。
    reply.postMessage([0]);
  } finally {
    reply.close();
  }
};
replies.port1.onmessage = async (event) => {
  // 收到握手回复才记录成功，不能用 iframe DOM 创建或 load 事件冒充协议连接完成。
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

// 扩展仍保留 5 分钟 alarm；活跃的 iframe 另以 600ms 合并本地写入/恢复通知。
// BroadcastChannel 只提示“去重读数据库”，不携带正文，也不能在 iframe 关闭后继续执行。
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
