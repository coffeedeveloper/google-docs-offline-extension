# React 界面与离线应用分层

迁移日期：2026-09-20。React / React DOM 19.3.0，依赖固定在 pnpm 锁文件。页面视觉布局沿用原 Demo，文件列表、编辑页、扩展设置页都改为实际 JSX 组件；不使用 HTML 字符串包装 React，也不使用 `dangerouslySetInnerHTML`。

## 阅读顺序

| 文件 | 职责 |
| --- | --- |
| [app.jsx](../src/app.jsx) | `createRoot` 挂载、应用启动、保留自动化和可选 WebMCP 接口 |
| [react/App.jsx](../src/react/App.jsx) | 订阅应用状态，按路由渲染列表、编辑、设置、错误和加载状态 |
| [react/ListPage.jsx](../src/react/ListPage.jsx) | 搜索、筛选、文件行、离线状态和诊断面板 |
| [react/EditorPage.jsx](../src/react/EditorPage.jsx) | 文档布局、保存状态、同步与扩展侧栏 |
| [react/EditorField.jsx](../src/react/EditorField.jsx) | 受控标题/正文输入、Yjs 相对选区和组合输入 |
| [react/SetupPage.jsx](../src/react/SetupPage.jsx) | 扩展连接指引与启停控件 |
| [react/common.jsx](../src/react/common.jsx) | React 路由链接、异步按钮、断网开关、错误反馈 |
| [application.js](../src/application.js) | 应用状态、路由、编辑动作、本地写入、跨上下文刷新和扩展请求 |

应用层不查询或改写 DOM。React 使用 [`useSyncExternalStore`](https://react.dev/reference/react/useSyncExternalStore) 订阅稳定的快照和取消订阅函数；状态变更时生成新的快照，未变更时 `getSnapshot()` 返回同一引用。按钮禁用状态、断网开关提交状态、输入法临时文本使用组件自己的 state/ref。

`boot()` 使用单例 Promise，在 React effect 外初始化浏览器事件与定时器，不因组件重新渲染、订阅或 StrictMode 重挂载而重复启用扩展。路由链接使用应用动作，正常保留 Ctrl/Cmd 点击的新标签行为；浏览器 Back/Forward 通过 popstate 回到同一状态层。

## 持久化与输入边界

- 普通输入先修改 Y.Doc 并发布可见状态；`documents + outbox` 事务完成后才能显示“已保存到设备”。React state 本身不是持久化数据。
- 事务失败时仍保留 Y.Doc 中的编辑和待写队列，显示错误并允许重试；没有因为重渲染而丢掉未保存内容。
- 输入节点不因诊断或 ACK 刷新而重新创建。焦点选区保存为 Yjs relative position，远端更新进入本地模型后，在 React layout effect 中恢复选区。
- 中文等组合输入期间保留组件内草稿和起始 Y.Doc 分支，不让后台快照改写正在组合的文本。compositionend / blur 时只把分支新增的 CRDT update 合并回当前文档，保留同时到达的远端修改。
- 组合输入未提交时显示“正在输入”，beforeunload 会提示风险；尚未进入 IDB 的输入法草稿不能承诺刷新后恢复。
- React 默认文本转义用于文档标题、错误与日志，不把文档内容解释成 HTML。

## 哪些部分没有改变

`core/database.js` 的 schema 和事务、Yjs 合并、iframe 同步执行者、扩展数组协议、网页 Service Worker 及本地服务保持原有职责。React 不接管后台同步，不在前台偷偷上传；没有扩展时仍只能本地编辑和保存。

构建仍使用 esbuild，将 React、React DOM 和 JSX 一并打入 `/app.js`，并更新离线外壳版本。没有 CDN、在线 import map 或额外运行时下载；`/app.js` 继续位于 SW 预缓存列表。Chrome 加载目录不变：Demo 为 `demo/extension/dist/`，Google 目标为根目录 `extension/`。

旧 `src/app.js` 与 `src/ui.js` 已被新入口/状态层/组件取代。浏览器公开构建路径仍是 `/app.js`，原有测试和 WebMCP 调用的是同一套应用动作，无平行数据通路。

## 验证

运行命令保持不变，在仓库根目录执行：

```sh
pnpm install --frozen-lockfile
pnpm check
# 需先释放 4173 开发服务端口
pnpm test:integration
```

本次通过 22 项 Google 差分测试、7 项 Demo 单元/来源/构建检查，以及 12 条集成路径（原有 8 条核心离线链路 + 4 组 React 交互）。新增交互实际操作 DOM 控件，包括：

1. 点击创建、标题/正文输入、文本转义、断网刷新恢复。
2. 另一标签页编辑后，当前输入节点、焦点与相对光标保持。
3. composition 事件期间保留草稿，并与远端修改合并后持久化。
4. 搜索、离线筛选、固定切换、设置页、浏览器返回和重连 ACK。

证据：[React 集成结果](../../research/validation/react-demo-integration.json)。测试截图在本地 `demo/test-results/react-list.png` 和 `react-editor.png`，已检查桌面列表与编辑页布局；截图为合成测试内容，不纳入 Git。

composition 测试通过浏览器事件模拟，不是操作系统输入法候选窗口验收；仍需真实中文输入法、多浏览器、不同缩放和辅助技术人工验收。已有离线限制及真实 Google 后端未验收状态不因 React 迁移而改变。
