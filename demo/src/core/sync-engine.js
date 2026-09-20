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
  return navigator.locks.request(
    `offline-docs-sync:${ACCOUNT}`,
    { ifAvailable: true },
    async (lock) => {
      if (!lock) return { skipped: true };
      if (await getMeta("simulateOffline")) return { offline: true };
      await setMeta("syncStatus", { running: true, reason, at: Date.now() });
      try {
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
