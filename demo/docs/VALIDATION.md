# 验证记录

本页说明迁移后的测试范围。`validation-result.json` 保留 2026-09-18 独立 Demo 的历史结果；2026-09-20 合并工程的运行结果见 [迁移验证记录](../../docs/WORKSPACE-VALIDATION.md)。测试目标是本地 Demo，不是 Google 服务端。

## 来源与单元检查

仓库根目录 `pnpm check` 包含的 7 项 Demo 检查：

1. 服务端 ACK 后落盘、相同 operation ID 幂等重试、进程重新打开存储。
2. 两个独立 Y.Doc 离线操作的并发合并、乱序/重复应用收敛。
3. 相同 operation ID 携带不同 payload 被拒绝且不破坏已有数据。
4. workspace 解析到共享 `src/`；当前源码 SHA-256 与构建指纹一致，esbuild 输入包含真实共享模块。
5. Demo 保留独立 ID、仅 localhost host permission，不含 Google `content_capabilities`。
6. Demo 的 origin/source 校验只进入 Demo bundle，不改写共享源码。
7. React 页面和 React DOM 随应用打包，应用入口纳入离线缓存；应用状态层不查询/拼接 DOM。

## 真实扩展集成

仓库根目录 `pnpm test:integration` 自动创建临时服务端数据和隔离 Chromium profile，实际加载 `demo/extension/dist`。不模拟 Chrome runtime、offscreen、MessageChannel、IndexedDB、Web Locks、Service Worker 或本地 HTTP 服务。

8 条核心验证路径：

| 路径 | 断言 |
| --- | --- |
| 真正的扩展握手 | 原 worker → offscreen → 本地 iframe，网站读到同源 IDB 握手记录；网页 SW 已安装 |
| 离线创建/编辑 | 演示断网后新增与修改，刷新仍读到正文和待同步队列 |
| 重连 ACK | 真实服务端收到正文；outbox 仅在 ACK 后归零，证明 iframe 实际访问网站同一数据库 |
| 真正的服务不可达 | 停止 HTTP 服务，冷刷新页面、修改、再刷新；恢复服务后上传成功 |
| ACK 丢失 | 服务端提交后主动断开连接；相同 ID 重试不重复插入文字 |
| 全部标签页关闭 | 先销毁旧 offscreen、关闭应用页面，再触发真实 Chrome alarm；原控制器重建 frame 并上传队列 |
| 两标签并发离线 | 两页基于同一文档分别添加标记，本地事务和服务端合并都保留两个标记 |
| 本地存储失败 | 在测试 profile 注入 outbox put 的 QuotaExceededError；文档事务回滚，未保存编辑仍留在内存，恢复后显式重试成功 |

故意停止服务期间的 `ERR_CONNECTION_REFUSED` 是预期结果，不计为脚本异常。其它浏览器运行错误会导致测试失败。机器可读报告在 `demo/test-results/integration.json`，包含通过标记和每条路径；该目录不纳入 Git。

核心路径通过应用公开模块和真实浏览器 API 驱动。React 迁移另增加 4 组渲染控件交互回归：点击创建与标题/正文输入、文本转义与离线刷新；后台合并时的节点/焦点/相对光标；中文 composition 事件与远端更新合并；搜索、离线筛选、固定、设置页、浏览器返回及重连 ACK。代码在 `tests/react-ui.mjs`，由同一集成测试运行。

截图生成于 `demo/test-results/react-list.png` 与 `react-editor.png`。这些检查不等同于逐浏览器、辅助技术、不同缩放比例或操作系统真实输入法验收。当前 React 运行记录见 [REACT.md](REACT.md)。

## 没有证明的内容

- Google 私有协议或 Google Docs 产品行为完全等价。
- Chrome 浏览器进程重启、操作系统断电、磁盘损坏后的完整恢复。
- 真实多账号权限、撤权、附件、富文本、超大文档和长期 CRDT/回执压缩。
- 生产级数据迁移、自动配额淘汰、跨版本客户端兼容性。
- 未在可用的 WebMCP 客户端上下文中验证工具注册与调用；仅保留 feature-detect 的可选实现。
