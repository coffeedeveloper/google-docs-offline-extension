import { ACCOUNT } from "./config.js";
import {
  getMeta,
  setMeta,
  listDocuments,
  getOutbox,
  acknowledge,
  recordEvent,
} from "./database.js";
export async function api(path, options = {}) {
  // 前台下载和 iframe 同步共用入口；检查 IDB 开关，而不是只依赖当前页面的在线状态。
  if (await getMeta("simulateOffline")) throw Error("演示断网：请求未发出");
  const response = await fetch(path, {
    ...options,
    cache: "no-store",
    headers: { "Content-Type": "application/json", ...options.headers },
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw Error(`服务端请求失败 (${response.status})`);
  return response.json();
}
export async function syncAll(reason = "heartbeat") {
  // 锁协调同源执行者；ifAvailable 避免一次次心跳堆积等待者，下一次触发仍可重试。
  // 锁不是服务端幂等机制，也不是跨设备协同合并算法。
  return navigator.locks.request(
    `offline-docs-sync:${ACCOUNT}`,
    { ifAvailable: true },
    async (lock) => {
      if (!lock) return { skipped: true };
      if (await getMeta("simulateOffline")) return { offline: true };
      await setMeta("syncStatus", { running: true, reason, at: Date.now() });
      try {
        // 只处理本轮读取到的队列快照；网络期间新产生的操作留给后续轮次。
        const pending = await getOutbox();
        const documents = (await listDocuments()).filter((doc) => doc.cached);
        let ackCount = 0;
        for (const document of documents) {
          const operations = pending.filter(
            (op) => op.documentId === document.id,
          );
          const batches = [];
          let batch = [],
            bytes = 0;
          for (const operation of operations) {
            // 按操作数量与 Base64 长度近似分批；不是含 JSON 开销的精确请求字节上限。
            if (
              batch.length &&
              (batch.length >= 200 ||
                bytes + operation.update.length > 1_500_000)
            ) {
              batches.push(batch);
              batch = [];
              bytes = 0;
            }
            batch.push(operation);
            bytes += operation.update.length;
          }
          // 即使没有待传操作也发送空批次，借同一接口取得服务端的最新 CRDT 状态。
          if (batch.length || !batches.length) batches.push(batch);
          for (const batch of batches) {
            const remote = await api(
              `/api/documents/${encodeURIComponent(document.id)}/sync`,
              {
                method: "POST",
                body: JSON.stringify({
                  account: ACCOUNT,
                  operations: batch.map(({ id, update }) => ({ id, update })),
                }),
              },
            );
            const sent = new Set(batch.map((op) => op.id));
            // ACK 只能引用本批实际发出的 ID；不能允许响应顺便删除其它文档/新产生的操作。
            if (
              !Array.isArray(remote.ack) ||
              remote.ack.some((id) => !sent.has(id))
            )
              throw Error("服务端 ACK 不匹配");
            await acknowledge(document.id, remote, remote.ack);
            ackCount += remote.ack.length;
          }
        }
        await setMeta("syncStatus", {
          running: false,
          reason,
          at: Date.now(),
          ackCount,
        });
        await recordEvent("sync", `${reason}: ${ackCount} 条操作已确认`);
        return { ackCount };
      } catch (error) {
        // 失败只更新诊断状态，不清除 outbox；再次触发时以原 ID 重试。
        await setMeta("syncStatus", {
          running: false,
          reason,
          error: error.message,
          at: Date.now(),
        });
        await recordEvent("retry", error.message);
        throw error;
      }
    },
  );
}
