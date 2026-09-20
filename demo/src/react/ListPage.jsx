import { setFilter, setSearch, setDiagnosticsOpen } from "../application.js";
import {
  ActionButton,
  Brand,
  ErrorBox,
  Icon,
  NetworkTag,
  OfflineSwitch,
  RouteLink,
  time,
} from "./common.jsx";

function ConnectionCard({ state }) {
  const active = state.extensionConnected;
  return (
    <section className={`connection-card ${active ? "" : "warning"}`}>
      <div>
        <h2>{active ? "离线调度已连接" : "连接 Demo 离线扩展"}</h2>
        <p>
          {active
            ? "本地保存始终可用；后台 iframe 负责同步，离线修改不会丢进网络请求。"
            : state.extensionInstalled
              ? "已找到适配扩展，启用后开始握手和后台同步。"
              : "请加载 Demo 的适配扩展。原 Google 扩展不能连接 localhost。"}
        </p>
      </div>
      <div className="actions">
        {active ? (
          <ActionButton action="sync">立即同步</ActionButton>
        ) : (
          <ActionButton action="enable" className="primary small">
            启用离线
          </ActionButton>
        )}{" "}
        <RouteLink className="small" href="/setup">
          配置指南
        </RouteLink>
      </div>
    </section>
  );
}
function Diagnostics({ state }) {
  return (
    <details
      className="diagnostics"
      open={state.diagnosticsOpen}
      onToggle={(event) => setDiagnosticsOpen(event.currentTarget.open)}
    >
      <summary>运行链路与本地状态</summary>
      <div className="metrics">
        <div className="metric">
          <b>{state.cachedCount}</b>
          <span>已缓存文档</span>
        </div>
        <div className="metric">
          <b>{state.pendingCount}</b>
          <span>待服务端确认的操作</span>
        </div>
        <div className="metric">
          <b>{state.shellReady ? "已就绪" : "准备中"}</b>
          <span>网页离线外壳</span>
        </div>
        <div className="metric">
          <b>{state.frame ? "握手完成" : "未连接"}</b>
          <span>offscreen → iframe</span>
        </div>
      </div>
      <p className="subtle">
        页面 → 反解析扩展 worker → offscreen → localhost iframe → IndexedDB →
        同步服务
      </p>
      <div className="log">
        {state.logs.length
          ? state.logs
              .slice(-8)
              .reverse()
              .map((log) => (
                <div key={log.id}>
                  {time(log.at)} · {log.type} · {log.detail}
                </div>
              ))
          : "暂无事件"}
      </div>
    </details>
  );
}
function DocumentRow({ doc, pending }) {
  const count = pending.filter((op) => op.documentId === doc.id).length;
  return (
    <div className="file-row">
      <RouteLink
        className="doc-cell"
        href={`/document/${encodeURIComponent(doc.id)}`}
      >
        <Icon />
        <div>
          <span className="doc-title">{doc.title || "未命名文档"}</span>
          <div className="doc-detail">
            {doc.cached ? "已存储在设备" : "仅云端 · 打开后下载"}
            {doc.pinned ? " · 已固定" : ""}
          </div>
        </div>
      </RouteLink>
      <div>
        <span className={`tag ${count ? "warn" : doc.cached ? "good" : ""}`}>
          {count ? `${count} 条待同步` : doc.cached ? "本地可用" : "未下载"}
        </span>
      </div>
      <div className="subtle">{time(doc.updatedAt)}</div>
      <div>
        <ActionButton action="pin" id={doc.id}>
          {doc.pinned ? "取消固定" : "保存到设备"}
        </ActionButton>
      </div>
    </div>
  );
}
export function ListPage({ state }) {
  const documents = state.documents
    .filter(
      (doc) =>
        (state.filter !== "offline" || doc.cached) &&
        doc.title.toLowerCase().includes(state.search.toLowerCase()),
    )
    .sort((a, b) => b.updatedAt - a.updatedAt);
  return (
    <>
      <header className="topbar">
        <Brand />
        <div className="top-actions">
          <NetworkTag state={state} />
          <OfflineSwitch state={state} />
          <RouteLink className="quiet small" href="/setup">
            扩展设置
          </RouteLink>
        </div>
      </header>
      <div className="workspace">
        <aside className="sidebar">
          <ActionButton action="new" className="primary">
            ＋ 新建文档
          </ActionButton>
          <button
            data-filter="all"
            className={`nav-item ${state.filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            所有文档
          </button>
          <button
            data-filter="offline"
            className={`nav-item ${state.filter === "offline" ? "active" : ""}`}
            onClick={() => setFilter("offline")}
          >
            可离线使用
          </button>
          <div className="sidebar-note">
            本地优先，继续书写。
            <br />
            纯文本 · Yjs 合并
            <br />
            React · 研究用途 Demo
          </div>
        </aside>
        <main className="content">
          <div className="heading-row">
            <div>
              <h1>我的文档</h1>
              <div className="subtle">断网也能继续，连接后自动同步。</div>
            </div>
            <span className="tag">个人演示空间</span>
          </div>
          <ErrorBox error={state.error} />
          <ConnectionCard state={state} />
          <div className="list-tools">
            <h2>{state.filter === "offline" ? "设备上的文档" : "所有文档"}</h2>
            <input
              id="search"
              className="search"
              type="search"
              placeholder="搜索文档"
              aria-label="搜索文档"
              value={state.search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <section className="file-table">
            <div className="file-row head">
              <div>名称</div>
              <div>同步状态</div>
              <div>最近修改</div>
              <div>离线使用</div>
            </div>
            <div id="document-rows">
              {documents.length ? (
                documents.map((doc) => (
                  <DocumentRow key={doc.id} doc={doc} pending={state.pending} />
                ))
              ) : (
                <div className="empty">
                  没有匹配的文档。你也可以离线创建一份。
                </div>
              )}
            </div>
          </section>
          <div className="footer-note">
            <span>本地写入完成后才显示已保存；收到 ACK 后才清理队列。</span>
            <span>{state.cachedCount} 份本地文档</span>
          </div>
          <Diagnostics state={state} />
        </main>
      </div>
    </>
  );
}
