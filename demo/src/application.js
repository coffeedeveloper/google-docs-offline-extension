import { EXTENSION_ID } from "./core/config.js";
import { Y, fromState, decode, content, replaceText } from "./core/crdt.js";
import {
  events,
  listDocuments,
  getDocument,
  getOutbox,
  getMeta,
  setMeta,
  getEvents,
  mergeCatalog,
  cacheDocument,
  pinDocument,
  persistUpdate,
} from "./core/database.js";
import { api } from "./core/sync-engine.js";
import {
  detectExtension,
  connectExtension,
  disconnectExtension,
  requestSync,
} from "./core/extension-client.js";

// 应用会话独立于 React 生命周期：界面、自动化和可选 WebMCP 共用同一套动作。
// 前台只负责本地编辑/下载及请求调度；真正的上传始终由扩展持有的 iframe 执行。
const state = {
  filter: "all",
  search: "",
  simulated: false,
  offline: !navigator.onLine,
  extensionInstalled: false,
  extensionConnected: false,
  shellReady: false,
  cachedCount: 0,
  pendingCount: 0,
  frame: null,
  logs: [],
  error: "",
  serviceError: "",
  diagnosticsOpen: false,
  loading: true,
  fatalError: "",
  routeError: "",
  toast: "",
  pathname: location.pathname,
};
let documents = [],
  pending = [],
  editor = null,
  writePromise = null;
let syncTimer,
  toastTimer,
  routeEpoch = 0,
  readEpoch = 0,
  bootPromise;
// 两级队列不能混淆：unsaved 尚在内存，关闭页面可能丢失；IDB outbox 已提交，等待服务端 ACK。
const unsaved = [];
const compositions = new Set();
const listeners = new Set();
function snapshot() {
  // 对 React 暴露可读快照，不暴露可变 Y.Doc；正文只是模型的派生视图。
  return {
    ...state,
    documents,
    pending,
    localUnsaved: unsaved.length,
    composingCount: compositions.size,
    editor: editor
      ? { id: editor.id, pinned: editor.pinned, ...content(editor.doc) }
      : null,
  };
}
let currentSnapshot = snapshot();
// 仅发布变更时替换引用；getSnapshot 每次现造对象会破坏 useSyncExternalStore 的稳定性。
function publish() {
  currentSnapshot = snapshot();
  for (const listener of listeners) listener();
}
export const getSnapshot = () => currentSnapshot;
export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
export function showError(error) {
  state.error = error.message || String(error);
  publish();
}
function toast(message) {
  clearTimeout(toastTimer);
  state.toast = message;
  publish();
  toastTimer = setTimeout(() => {
    state.toast = "";
    publish();
  }, 4500);
}
export function setSearch(value) {
  state.search = value;
  publish();
}
export function setFilter(value) {
  state.filter = value;
  publish();
}
export function setDiagnosticsOpen(value) {
  if (state.diagnosticsOpen === value) return;
  state.diagnosticsOpen = value;
  publish();
}
function scheduleSync(reason = "edit") {
  // 700ms 合并前台的频繁请求，不直接上传，也不修改扩展原有的 5 分钟 alarm。
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    if (state.extensionConnected && !state.offline)
      void requestSync(reason).catch(showError);
  }, 700);
}
async function readState() {
  // 多个异步刷新可能交错完成；旧读取结果不能覆盖后发刷新获取的新状态。
  const epoch = ++readEpoch;
  const [rows, operations, simulated, frame, logs, sync, enabled] =
    await Promise.all([
      listDocuments(),
      getOutbox(),
      getMeta("simulateOffline"),
      getMeta("frameHandshake"),
      getEvents(),
      getMeta("syncStatus"),
      getMeta("extensionEnabled"),
    ]);
  if (epoch !== readEpoch) return;
  documents = rows;
  pending = operations;
  Object.assign(state, {
    simulated: Boolean(simulated),
    offline: Boolean(simulated) || !navigator.onLine,
    frame,
    logs,
    cachedCount: rows.filter((doc) => doc.cached).length,
    pendingCount: operations.length,
    serviceError: sync?.error || "",
    extensionConnected: state.extensionInstalled && Boolean(enabled),
  });
}
export async function refresh() {
  await readState();
  const active = editor;
  if (active) {
    const row = await getDocument(active.id);
    // 等待 IDB 时用户可能已经切换文档，先核对编辑会话，再把远端状态合入现有模型。
    if (editor === active && row) {
      Y.applyUpdate(active.doc, decode(row.state), "remote");
      active.pinned = row.pinned;
    }
  }
  publish();
}
export async function flushLocalWrites() {
  // 同一页面只有一个排队写入者；失败的队首不移除，允许在存储恢复后重试。
  if (writePromise) {
    await writePromise;
    if (unsaved.length) return flushLocalWrites();
    return;
  }
  writePromise = (async () => {
    while (unsaved.length) {
      const job = unsaved[0];
      await persistUpdate(job.id, job.update);
      // persistUpdate 已等待整个 IDB 事务完成，此时才能从内存待写队列删除。
      unsaved.shift();
    }
  })();
  try {
    await writePromise;
  } catch (error) {
    showError(
      Error(`本地写入失败，文字仍在当前页面，请勿关闭：${error.message}`),
    );
    throw error;
  } finally {
    writePromise = null;
  }
  if (unsaved.length) return flushLocalWrites();
  state.error = "";
  await readState();
  publish();
  scheduleSync();
}
async function ensureCached(id, pin = false) {
  // 文件列表可能只有云端元信息；首次打开须下载正文，已有本地快照则不依赖联网。
  let row = await getDocument(id);
  if (!row?.cached) {
    await cacheDocument(
      await api(`/api/documents/${encodeURIComponent(id)}`),
      pin,
    );
    row = await getDocument(id);
  } else if (pin && !row.pinned) {
    await pinDocument(id, true);
    row = await getDocument(id);
  }
  return row;
}
export async function openDocument(id) {
  // 路由版本避免较慢的旧打开请求切回旧文档；切换前先尝试保存内存中的修改。
  const epoch = ++routeEpoch;
  if (unsaved.length) await flushLocalWrites();
  const row = await ensureCached(id);
  if (epoch !== routeEpoch) return;
  editor?.doc.destroy();
  editor = { id, pinned: row.pinned, doc: fromState(row.state) };
  editor.doc.on("update", (update, origin) => {
    // 只把用户编辑入队；refresh 合入的 remote update 不能再被当成本地操作重复上传。
    if (origin !== "editor") return;
    unsaved.push({ id, update });
    publish();
    void flushLocalWrites().catch(() => {});
  });
  history.replaceState({}, "", `/document/${encodeURIComponent(id)}`);
  state.pathname = location.pathname;
  state.routeError = "";
  publish();
  await readState();
  publish();
  scheduleSync("open-document");
}
export async function createDocument(title = "未命名文档") {
  // 本地生成文档身份并提交初始更新，不需要先向服务端申请 ID，所以可以离线新建。
  if (typeof title !== "string" || !title.trim() || title.length > 200)
    throw Error("标题必须为 1–200 个字符");
  if (unsaved.length) await flushLocalWrites();
  const id = crypto.randomUUID(),
    doc = new Y.Doc();
  doc.getText("title").insert(0, title);
  await persistUpdate(id, Y.encodeStateAsUpdate(doc), { isNew: true });
  doc.destroy();
  history.pushState({}, "", `/document/${id}`);
  await openDocument(id);
  return { id };
}
function validateEdit(field, value) {
  if (
    !editor ||
    !["title", "body"].includes(field) ||
    typeof value !== "string"
  )
    throw Error("Invalid editor change");
  const limit = field === "title" ? 200 : 100000;
  if (value.length > limit)
    throw Error(
      `Demo ${field === "title" ? "标题" : "正文"}最多 ${limit} 字符`,
    );
}
export async function editDocument(field, value) {
  validateEdit(field, value);
  editor.doc.transact(
    () => replaceText(editor.doc.getText(field), value),
    "editor",
  );
  publish();
  await flushLocalWrites();
}

// DOM 由 React 管理；选区保存成 Yjs 相对位置，而不是容易被远端插入推偏的固定下标。
// 组件在模型合并后解析相对位置，恢复焦点输入框的光标，无需销毁/重建输入节点。
export function captureSelection(field, start, end) {
  if (!editor) return null;
  const text = editor.doc.getText(field);
  return {
    id: editor.id,
    anchors: [start, end].map((index) =>
      Y.createRelativePositionFromTypeIndex(text, Math.min(index, text.length)),
    ),
  };
}
export function resolveSelection(selection) {
  if (!selection || selection.id !== editor?.id) return null;
  return selection.anchors.map(
    (anchor) =>
      Y.createAbsolutePositionFromRelativePosition(anchor, editor.doc)?.index ??
      0,
  );
}
// 输入法组合期间保留起始文档分支与 state vector；候选文字只在组件草稿中展示。
// 结束时只合入此分支新增的 update，避免用整段候选文本覆盖期间到达的远端修改。
export function beginComposition(field) {
  if (!editor) return null;
  const doc = new Y.Doc();
  Y.applyUpdate(doc, Y.encodeStateAsUpdate(editor.doc));
  const session = {
    id: editor.id,
    field,
    doc,
    vector: Y.encodeStateVector(doc),
  };
  compositions.add(session);
  publish();
  return session;
}
export function cancelComposition(session) {
  if (!session || !compositions.delete(session)) return;
  session.doc.destroy();
  publish();
}
export async function commitComposition(session, value) {
  try {
    if (session.id !== editor?.id)
      throw Error("编辑文档已切换，请保留当前输入后重试");
    validateEdit(session.field, value);
    replaceText(session.doc.getText(session.field), value);
    Y.applyUpdate(
      editor.doc,
      Y.encodeStateAsUpdate(session.doc, session.vector),
      "editor",
    );
    publish();
    await flushLocalWrites();
  } finally {
    cancelComposition(session);
  }
}
export async function enableOffline() {
  state.extensionInstalled = await detectExtension();
  if (!state.extensionInstalled)
    throw Error(
      "找不到 Demo 适配扩展，请按配置指南加载 demo/extension/dist 后刷新。",
    );
  await connectExtension();
  state.extensionConnected = true;
  await navigator.storage?.persist?.();
  await refresh();
  scheduleSync("enable");
  return { extensionId: EXTENSION_ID };
}
export async function setNetworkSimulation(offline) {
  if (typeof offline !== "boolean") throw Error("offline must be boolean");
  // 开关先写同源 IDB，再通知其它上下文，确保隐藏 iframe 也遵守“演示断网”。
  await setMeta("simulateOffline", offline);
  state.simulated = offline;
  state.offline = offline || !navigator.onLine;
  events.postMessage({ type: "resume" });
  if (!offline) scheduleSync("network-restored");
  await refresh();
}
export async function inspectState() {
  await readState();
  return {
    ...state,
    documents: documents.map(({ id, title, cached, pinned }) => ({
      id,
      title,
      cached,
      pinned,
    })),
    pending: pending.map(({ id, documentId }) => ({ id, documentId })),
    localUnsaved: unsaved.length,
  };
}
export { getDocument as readLocalDocument };
export async function navigate(url) {
  // 本地写入失败就拒绝主动导航，避免销毁还持有未保存正文的编辑会话。
  if (unsaved.length) await flushLocalWrites();
  history.pushState({}, "", url);
  await route();
}
async function route() {
  if (unsaved.length) {
    try {
      await flushLocalWrites();
    } catch (error) {
      if (editor) history.replaceState({}, "", `/document/${editor.id}`);
      throw error;
    }
  }
  state.pathname = location.pathname;
  state.error = "";
  state.routeError = "";
  if (location.pathname.startsWith("/document/")) {
    try {
      await openDocument(decodeURIComponent(location.pathname.split("/")[2]));
    } catch (error) {
      editor?.doc.destroy();
      editor = null;
      state.routeError = error.message;
      publish();
    }
    return;
  }
  routeEpoch++;
  editor?.doc.destroy();
  editor = null;
  await readState();
  publish();
}
export async function performAction(action, id) {
  switch (action) {
    case "new":
      return createDocument();
    case "enable":
      await enableOffline();
      toast("已连接反解析扩展");
      break;
    case "disable":
      await disconnectExtension();
      await refresh();
      toast("后台同步已停用，本地数据保留");
      break;
    case "sync": {
      if (!state.extensionConnected) throw Error("请先启用 Demo 扩展");
      if (state.offline) throw Error("当前离线，修改已在设备上保留");
      await requestSync("manual");
      await refresh();
      // runtime RPC 回复只表示链路已处理；业务同步错误须从 iframe 写入的状态读取。
      const result = await getMeta("syncStatus");
      if (result?.error) throw Error(result.error);
      toast("同步检查完成");
      break;
    }
    case "pin": {
      const row = await getDocument(id);
      if (row?.pinned) await pinDocument(id, false);
      else await ensureCached(id, true);
      await refresh();
      toast(row?.pinned ? "已取消固定；本地副本暂时保留" : "文档已保存到设备");
      break;
    }
    case "retry":
      await flushLocalWrites();
      await refresh();
      scheduleSync("retry");
      break;
    default:
      throw Error("Unknown action");
  }
}
export function boot() {
  // 初始化幂等，不在 React effect 内重复注册消息监听、恢复扩展或启动定时器。
  return (bootPromise ||= initialize());
}
async function initialize() {
  window.addEventListener("popstate", () => {
    void route().catch(showError);
  });
  window.addEventListener("beforeunload", (event) => {
    // 已进入 outbox 的数据不需要靠页面存活；未提交的操作和输入法草稿才需要离页警告。
    if (unsaved.length || compositions.size) {
      event.preventDefault();
      event.returnValue = "";
    }
  });
  window.addEventListener("online", () => {
    void refresh().catch(showError);
    scheduleSync("online");
  });
  window.addEventListener("offline", () => {
    void refresh().catch(showError);
  });
  events.addEventListener("message", () => {
    void refresh().catch(showError);
  });
  try {
    await readState();
    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker
        .register("/sw.js")
        .then(() => navigator.serviceWorker.ready)
        .then(() => {
          state.shellReady = true;
          publish();
        })
        .catch((error) =>
          showError(Error("离线外壳安装失败：" + error.message)),
        );
    }
    await route();
    try {
      await mergeCatalog((await api("/api/documents")).documents);
      await refresh();
    } catch (error) {
      if (!documents.length)
        showError(Error("首次使用需要联网下载文件列表。" + error.message));
    }
    state.extensionInstalled = await detectExtension();
    if (state.extensionInstalled && (await getMeta("extensionEnabled"))) {
      try {
        await connectExtension();
      } catch (error) {
        showError(error);
      }
    }
    await refresh();
  } catch (error) {
    state.fatalError = error.message;
  } finally {
    state.loading = false;
    publish();
  }
  // 页面存在时的补充刷新/调度；关页后由扩展 alarm 提供执行机会，不承诺常驻或准时。
  setInterval(() => {
    void refresh().catch(showError);
    if (state.extensionConnected && !state.offline)
      void requestSync("page-open").catch(showError);
  }, 15000);
}
