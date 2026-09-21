import { CHANNEL } from "./config.js";
import { Y, fromState, snapshot, content, encode, decode } from "./crdt.js";
const DB_NAME = "OfflineDocsDemo-v1";
// 前台页面和 localhost iframe 共用站点数据库，扩展的 chrome.storage 不保存正文。
let databasePromise;
export const events = new BroadcastChannel(CHANNEL);
export function database() {
  return (databasePromise ||= new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      // documents：快照/元数据；outbox：未确认更新；meta：控制状态；events：诊断事件。
      const db = request.result;
      db.createObjectStore("documents", { keyPath: "id" });
      db.createObjectStore("outbox", { keyPath: "id" });
      db.createObjectStore("meta", { keyPath: "key" });
      db.createObjectStore("events", { keyPath: "id", autoIncrement: true });
    };
    request.onsuccess = () => {
      request.result.onversionchange = () => request.result.close();
      resolve(request.result);
    };
    request.onerror = () => reject(request.error);
    request.onblocked = () =>
      reject(Error("数据库升级被其它标签页阻塞，请关闭旧版页面。"));
  }));
}
const result = (request) =>
  new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
async function transaction(stores, mode, action) {
  // 单个 put 成功不代表事务成功；必须等待 oncomplete，后续任何一步失败都应回滚。
  // action 只执行本事务内的 IDB 操作，不在事务中等待网络请求，以免事务提前结束。
  const db = await database();
  const tx = db.transaction(stores, mode);
  const completed = new Promise((resolve, reject) => {
    tx.oncomplete = resolve;
    tx.onabort = () => reject(tx.error || Error("本地事务未提交"));
    tx.onerror = () => {};
  });
  try {
    const value = await action(tx);
    await completed;
    return value;
  } catch (error) {
    try {
      tx.abort();
    } catch {}
    await completed.catch(() => {});
    throw error;
  }
}
export const listDocuments = () =>
  transaction(["documents"], "readonly", (tx) =>
    result(tx.objectStore("documents").getAll()),
  );
export const getDocument = (id) =>
  transaction(["documents"], "readonly", (tx) =>
    result(tx.objectStore("documents").get(id)),
  );
export const getOutbox = () =>
  transaction(["outbox"], "readonly", (tx) =>
    result(tx.objectStore("outbox").getAll()),
  );
export const getMeta = (key) =>
  transaction(
    ["meta"],
    "readonly",
    async (tx) => (await result(tx.objectStore("meta").get(key)))?.value,
  );
export const setMeta = (key, value) =>
  transaction(["meta"], "readwrite", (tx) => {
    tx.objectStore("meta").put({ key, value });
  });
export async function recordEvent(type, detail) {
  await transaction(["events"], "readwrite", async (tx) => {
    const store = tx.objectStore("events");
    store.add({ at: Date.now(), type, detail });
    const keys = await result(store.getAllKeys());
    for (const key of keys.slice(0, -80)) store.delete(key);
  });
  events.postMessage({ type: "diagnostic" });
}
export const getEvents = () =>
  transaction(["events"], "readonly", (tx) =>
    result(tx.objectStore("events").getAll()),
  );
export async function mergeCatalog(items) {
  // 云端列表只刷新未缓存文档的元信息，不能覆盖已缓存文档及本地未上传编辑。
  await transaction(["documents"], "readwrite", async (tx) => {
    const store = tx.objectStore("documents");
    for (const item of items) {
      const local = await result(store.get(item.id));
      if (!local) store.put({ ...item, cached: false, pinned: false });
      else if (!local.cached) store.put({ ...local, ...item });
    }
  });
  events.postMessage({ type: "catalog" });
}
export async function cacheDocument(remote, pinned = false) {
  // 下载的快照也需与当前本地 CRDT 合并；下载期间另一标签可能已经产生修改。
  await transaction(["documents"], "readwrite", async (tx) => {
    const store = tx.objectStore("documents");
    const existing = await result(store.get(remote.id));
    const doc = fromState(existing?.state);
    Y.applyUpdate(doc, decode(remote.state));
    store.put({
      ...existing,
      ...remote,
      ...content(doc),
      state: snapshot(doc),
      cached: true,
      pinned: pinned || existing?.pinned || false,
    });
    doc.destroy();
  });
  events.postMessage({ type: "document", id: remote.id });
}
export async function pinDocument(id, pinned) {
  // pin 仅表达本地保留意图；取消固定不删除正文或队列，本 Demo 尚无自动淘汰算法。
  await transaction(["documents"], "readwrite", async (tx) => {
    const store = tx.objectStore("documents");
    const row = await result(store.get(id));
    if (!row?.cached) throw Error("文档尚未下载");
    store.put({ ...row, pinned });
  });
  events.postMessage({ type: "document", id });
}

// 文档快照与 outbox 更新必须同事务提交：不能出现“正文已保存，但上传操作丢了”。
// 事务内先读取最新快照再合并，避免两个标签页用各自的旧内存覆盖彼此。
export async function persistUpdate(id, update, { isNew = false } = {}) {
  await transaction(["documents", "outbox"], "readwrite", async (tx) => {
    const store = tx.objectStore("documents");
    const previous = await result(store.get(id));
    if (!previous && !isNew) throw Error("本地文档不存在");
    const doc = fromState(previous?.state);
    Y.applyUpdate(doc, update);
    store.put({
      ...previous,
      id,
      ...content(doc),
      state: snapshot(doc),
      cached: true,
      pinned: previous?.pinned ?? true,
      updatedAt: Date.now(),
    });
    tx.objectStore("outbox").put({
      // ID 随操作持久化；网络重试读取此记录并复用 ID，不为每次请求另生成身份。
      id: crypto.randomUUID(),
      documentId: id,
      update: encode(update),
      createdAt: Date.now(),
    });
    doc.destroy();
  });
  events.postMessage({ type: "document", id });
}

// ACK 到达时必须重新读取最新本地状态，合并服务端快照并删除“明确确认”的操作。
// 请求在途期间的新编辑不应被覆盖或随整队 clear；快照推进与队列移除同事务提交。
export async function acknowledge(documentId, remote, operationIds) {
  await transaction(["documents", "outbox"], "readwrite", async (tx) => {
    const store = tx.objectStore("documents");
    const row = await result(store.get(documentId));
    if (!row) return;
    const doc = fromState(row.state);
    Y.applyUpdate(doc, decode(remote.state));
    store.put({
      ...row,
      ...content(doc),
      state: snapshot(doc),
      serverVersion: remote.version,
      syncedAt: Date.now(),
    });
    for (const id of operationIds) tx.objectStore("outbox").delete(id);
    doc.destroy();
  });
  events.postMessage({ type: "remote", id: documentId });
}
