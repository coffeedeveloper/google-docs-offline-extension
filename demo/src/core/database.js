import { CHANNEL } from "./config.js";
import { Y, fromState, snapshot, content, encode, decode } from "./crdt.js";
const DB_NAME = "OfflineDocsDemo-v1";
let databasePromise;
export const events = new BroadcastChannel(CHANNEL);
export function database() {
  return (databasePromise ||= new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
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
  await transaction(["documents"], "readwrite", async (tx) => {
    const store = tx.objectStore("documents");
    const row = await result(store.get(id));
    if (!row?.cached) throw Error("文档尚未下载");
    store.put({ ...row, pinned });
  });
  events.postMessage({ type: "document", id });
}

// Document update and durable outbox entry commit together, before any "saved" UI.
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
      id: crypto.randomUUID(),
      documentId: id,
      update: encode(update),
      createdAt: Date.now(),
    });
    doc.destroy();
  });
  events.postMessage({ type: "document", id });
}

// Merge against the latest local state inside this transaction. An ACK must not
// overwrite edits made while the request was in flight or remove new outbox items.
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
