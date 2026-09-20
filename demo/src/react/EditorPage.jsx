import {
  ActionButton,
  ErrorBox,
  Icon,
  NetworkTag,
  OfflineSwitch,
  RouteLink,
} from "./common.jsx";
import { EditorField } from "./EditorField.jsx";

export function EditorPage({ state }) {
  const doc = state.editor;
  const count = state.pending.filter((op) => op.documentId === doc.id).length;
  const saveStatus = state.composingCount
    ? "正在输入，完成后保存到设备…"
    : state.error
      ? "本地保存或同步需要检查"
      : state.localUnsaved
        ? "正在保存到设备…"
        : count
          ? `已保存到设备 · ${count} 条操作待同步`
          : "已保存到设备 · 已与服务端同步";
  return (
    <>
      <header className="editor-header">
        <RouteLink href="/" aria-label="返回文件列表">
          <Icon />
        </RouteLink>
        <div className="editor-heading">
          <EditorField field="title" value={doc.title} />
          <div className="save-label" id="save-status" role="status">
            {saveStatus}
          </div>
        </div>
        <div className="top-actions">
          <NetworkTag state={state} />
          <ActionButton action="sync">同步</ActionButton>
          <ActionButton action="pin" id={doc.id}>
            {doc.pinned ? "已固定到设备" : "固定到设备"}
          </ActionButton>
        </div>
      </header>
      <div className="toolbar">
        <RouteLink href="/">← 所有文档</RouteLink>
        <span>纯文本</span>
        <span>100%</span>
        <span>自动本地保存</span>
        <OfflineSwitch state={state} className="right" />
      </div>
      <div className="editor-layout">
        <aside className="outline">
          <strong>文档</strong>
          <a href="#document-body">正文</a>
          <p>
            先写入本地事务
            <br />
            再等待服务端确认
          </p>
        </aside>
        <main>
          <ErrorBox error={state.error} />
          <div className="ruler">
            1　　　　　2　　　　　3　　　　　4　　　　　5　　　　　6
          </div>
          <article className="page">
            <div id="paper-title" className="paper-title">
              {doc.title}
            </div>
            <EditorField field="body" value={doc.body} />
          </article>
        </main>
        <aside className="editor-inspector">
          <section className="inspector-block">
            <h2>同步状态</h2>
            <div id="editor-sync">
              <span className={`tag ${count ? "warn" : "good"}`}>
                {count ? `${count} 条待确认` : "所有操作已确认"}
              </span>
              <div>
                {state.offline
                  ? "当前离线，队列会保留。"
                  : state.serviceError
                    ? "同步服务暂不可达，队列已保留并会重试。"
                    : "联网时由扩展提交操作。"}
              </div>
            </div>
            <p>
              修改先进入 IndexedDB
              与持久化队列。关闭页面后，未确认的操作仍保留。
            </p>
          </section>
          <section className="inspector-block">
            <h2>扩展链路</h2>
            <div id="editor-extension">
              <span
                className={`tag ${state.extensionConnected ? "good" : "warn"}`}
              >
                {state.extensionConnected ? "扩展已连接" : "扩展未连接"}
              </span>
              <p>
                {state.frame ? "已观察到 iframe 握手" : "等待 iframe 握手"}
                <br />
                {state.shellReady ? "离线外壳已缓存" : "离线外壳尚未就绪"}
              </p>
            </div>
            <RouteLink href="/setup">查看连接方式 →</RouteLink>
          </section>
          <section className="inspector-block">
            <h2>验证离线</h2>
            <p>打开演示断网 → 修改正文 → 刷新 → 恢复联网。</p>
            <p>演示开关只阻止 Demo API；完整断网可停止本地服务再刷新。</p>
          </section>
        </aside>
      </div>
    </>
  );
}
