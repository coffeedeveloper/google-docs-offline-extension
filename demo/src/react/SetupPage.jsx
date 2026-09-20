import { EXTENSION_ID } from "../core/config.js";
import { ActionButton, Brand, ErrorBox, RouteLink } from "./common.jsx";

export function SetupPage({ state }) {
  return (
    <>
      <header className="topbar">
        <Brand />
        <RouteLink href="/">返回文档</RouteLink>
      </header>
      <main className="setup">
        <h1>连接反解析扩展</h1>
        <p className="subtle">
          Demo 使用原有控制器和协议，适配本地 origin。新的扩展 ID 可与 Google
          原版同时安装。
        </p>
        <ol>
          <li>
            在仓库根目录运行 <code>pnpm build:demo</code>。
          </li>
          <li>
            Chrome 打开 <code>chrome://extensions</code>
            ，开启开发者模式，选择「加载已解压的扩展程序」。
          </li>
          <li>
            选择目录 <code>demo/extension/dist</code>，不是 Google 验证版的{" "}
            <code>extension/</code>。
          </li>
          <li>
            回到 <code>http://localhost:4173</code>，点击下方启用离线。
          </li>
        </ol>
        <p>预期扩展 ID</p>
        <p className="code-path">{EXTENSION_ID}</p>
        <p>
          <span className={`tag ${state.extensionInstalled ? "good" : "warn"}`}>
            {state.extensionInstalled
              ? "已检测到适配扩展"
              : "尚未检测到适配扩展"}
          </span>
        </p>
        <ErrorBox error={state.error} />
        <ActionButton action="enable" className="primary">
          检测并启用离线
        </ActionButton>{" "}
        <ActionButton action="disable" className="quiet">
          停用后台同步
        </ActionButton>
        <hr />
        <p className="subtle">
          Google 原版仅允许 Google 网页连接，本 Demo 不能原封不动地复用它的
          manifest。适配层只放开 localhost，并校验精确 origin；不复用 Google
          的公钥、品牌或白名单能力。
        </p>
        <p className="subtle">
          没有扩展时仍可本地编辑，但不会偷偷使用前台同步替代扩展；界面会明确提示未连接。
        </p>
      </main>
    </>
  );
}
