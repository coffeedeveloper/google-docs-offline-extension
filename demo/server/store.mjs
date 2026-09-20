import { readFile, mkdir, writeFile, rename } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import * as Y from "yjs";
const seeds = [
  [
    "welcome",
    "离线文档工作原理",
    "文档先保存在你的设备上。\n\n1. 点击「启用离线」连接 Demo 适配扩展。\n2. 打开一份文档，它的内容会下载到 IndexedDB。\n3. 打开「演示断网」，继续修改并刷新页面。\n4. 恢复联网，扩展中的同源 iframe 会把待同步操作上传。\n\n网页 Service Worker 缓存应用外壳，扩展 worker 调度 offscreen 页面。文档正文不存放在 chrome.storage 中。\n\n这是纯文本 / Yjs 研究 Demo，不是 Google 的编辑器或同步协议。",
  ],
  [
    "notes",
    "产品讨论记录",
    "离线能力评审\n\n目标\n让用户在网络不稳定时仍然能够安心记录。\n\n必须守住的边界\n• 本地事务提交后，才能显示已存本机。\n• 服务端确认前，不删除待同步操作。\n• 多个标签页不能重复争抢同步队列。\n• 冲突合并不能用最后一次写入覆盖全文。",
  ],
  [
    "draft",
    "下一次没有网络时",
    "火车驶入隧道，网络断开。\n\n光标还在移动，想法不必等待。\n\n试着离线写下这一段的下一句。",
  ],
];
const encode = (doc) =>
  Buffer.from(Y.encodeStateAsUpdate(doc)).toString("base64");
const decode = (state) => new Uint8Array(Buffer.from(state, "base64"));
export class DocumentStore {
  constructor(file) {
    this.file = file;
    this.queue = Promise.resolve();
  }
  async open() {
    try {
      this.state = JSON.parse(await readFile(this.file, "utf8"));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      this.state = { documents: {} };
      for (const [id, title, body] of seeds) {
        const doc = new Y.Doc();
        doc.getText("title").insert(0, title);
        doc.getText("body").insert(0, body);
        this.state.documents[id] = {
          id,
          state: encode(doc),
          version: 1,
          updatedAt: Date.now(),
          receipts: {},
        };
        doc.destroy();
      }
      await this.persist(this.state);
    }
    return this;
  }
  async persist(next) {
    await mkdir(path.dirname(this.file), { recursive: true });
    await writeFile(this.file + ".tmp", JSON.stringify(next));
    await rename(this.file + ".tmp", this.file);
  }
  view(row) {
    const doc = new Y.Doc();
    Y.applyUpdate(doc, decode(row.state));
    const result = {
      id: row.id,
      title: doc.getText("title").toString(),
      body: doc.getText("body").toString(),
      state: row.state,
      version: row.version,
      updatedAt: row.updatedAt,
    };
    doc.destroy();
    return result;
  }
  list() {
    return Object.values(this.state.documents).map((row) => {
      const { state, body, ...metadata } = this.view(row);
      return metadata;
    });
  }
  get(id) {
    const row = Object.hasOwn(this.state.documents, id)
      ? this.state.documents[id]
      : null;
    return row ? this.view(row) : null;
  }
  sync(id, operations) {
    const run = async () => {
      const next = structuredClone(this.state);
      let row = Object.hasOwn(next.documents, id) ? next.documents[id] : null;
      if (!row && !operations.length)
        throw Object.assign(Error("Document not found"), { status: 404 });
      if (!row) {
        const empty = new Y.Doc();
        row = next.documents[id] = {
          id,
          state: encode(empty),
          version: 0,
          updatedAt: Date.now(),
          receipts: {},
        };
        empty.destroy();
      }
      const doc = new Y.Doc();
      Y.applyUpdate(doc, decode(row.state));
      const ack = [];
      let changed = false;
      try {
        for (const op of operations) {
          if (
            !op ||
            typeof op.id !== "string" ||
            op.id.length > 100 ||
            typeof op.update !== "string" ||
            op.update.length > 1500000 ||
            !op.update.length
          )
            throw Object.assign(Error("Invalid operation"), { status: 400 });
          const hash = createHash("sha256").update(op.update).digest("hex");
          if (
            Object.hasOwn(row.receipts, op.id) &&
            row.receipts[op.id] !== hash
          )
            throw Object.assign(
              Error("Operation ID reused with different payload"),
              { status: 409 },
            );
          if (!Object.hasOwn(row.receipts, op.id)) {
            Y.applyUpdate(doc, decode(op.update));
            Object.defineProperty(row.receipts, op.id, {
              value: hash,
              enumerable: true,
              writable: true,
              configurable: true,
            });
            changed = true;
          }
          ack.push(op.id);
        }
        if (changed) {
          row.state = encode(doc);
          row.version++;
          row.updatedAt = Date.now();
          await this.persist(next);
          this.state = next;
        }
        return { ...this.view(row), ack };
      } finally {
        doc.destroy();
      }
    };
    const pending = this.queue.then(run);
    this.queue = pending.catch(() => {});
    return pending;
  }
}
