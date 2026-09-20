# 合并与 pnpm 迁移验证

日期：2026-09-20（Asia/Singapore）。Node.js 24、pnpm 10.28.1、Chrome for Testing 153.0.8010.12。

## 已通过

| 检查 | 结果 | 覆盖范围 |
| --- | --- | --- |
| `pnpm install --frozen-lockfile` | 通过 | 根、共享运行库、Demo 三个 workspace；统一锁文件 |
| `pnpm check` | 通过 | 两个目标构建、Google 来源校验、22 项差分 + 6 项 Demo 单元/来源/隔离测试 |
| Google 静态完整性 | 通过 | 88 个原始文件哈希、85 个原始非 JS 资源、vendor 来源、3 个确定性 bundle 与 source map、原扩展 ID |
| `pnpm test:browser` | 原版和重构版均通过 | 真实 worker、网页探测、外部消息、offscreen、heartbeat、退出清理；合成 Docs origin |
| `pnpm test:integration` | 8 条路径通过 | Demo 真扩展握手、离线创建/编辑/刷新、重连 ACK、停服务冷刷新、ACK 丢失、多标签、关页重建、存储故障 |
| 无旧依赖/产物的独立安装 | 通过 | 临时目录仅复制源码/配置/原始基线；未复制 node_modules、扩展产物、用户数据或旧 Demo 仓库 |
| 独立目录的离线锁定安装 | 通过 | 使用已下载 pnpm store，`--offline --frozen-lockfile` 重建依赖，再运行全部 `pnpm check` |
| 跨目录构建一致性 | 11 个产物字节一致 | 两目标 manifest、主要 JS、Demo 构建信息与网页 JS；不依赖旧相邻仓库路径 |

独立安装实验验证的是用已有包缓存重建依赖，不是“没有任何包缓存仍能断网安装”。首次安装依赖仍需网络或已准备好的 store。

## 证据文件

- [Google 构建校验](../research/validation/modular-build.json)：迁移后重新生成，内容与原模块化结果相同。
- [Google 原生浏览器回归](../research/validation/browser-smoke.json)：2026-09-20 重新运行。
- [Demo 集成结果快照](../research/validation/workspace-demo-integration.json)：8 条检查，`passed: true`，`unexpectedErrors: []`。
- [Demo 构建来源快照](../research/validation/workspace-demo-build.json)：共享包、源码逐文件哈希、汇总指纹、实际 bundle 输入及适配清单。

Demo 报告中的两条 `ERR_CONNECTION_REFUSED` 来自刻意停止 HTTP 服务，是预期网络失败。首次在工具沙箱内启动 Chrome/监听端口被系统限制；获准在沙箱外重跑后完成上述浏览器验证，仍使用隔离 profile 与合成数据。

## 双目标隔离

- Google 目标的 ID 仍为 `ghbmnnjooekpmoecnnnilnnbdlolhkhi`，原始 manifest 和资源不变。
- Demo ID 仍为 `ikiiibboenfblpmpholjlkmbbnkichpo`，只开放 localhost，不包含 Google `content_capabilities`。
- Demo 构建实际引用共享 `src/` 的控制器、管理器、offscreen 和 vendor；不存在复制运行库。
- Demo origin/source 适配仅出现在派生 bundle，共享业务源码没有被修改。Google 的三个 JS 及 source maps 本次没有发生 Git 差异。
- 没有迁移原 Demo 的 `.data`、profile、Git 元数据；没有改变正常 Chrome 的官方扩展安装状态。

## 尚未证明

本次没有重新登录真实 Google 账号，也没有完成 Google 服务端的离线写入与重连验收。Google 同 ID 构建适合继续执行替代验证，但原生 API 回归不能证明其所有 Google 后端交互等价。真实账号下的历史状态仍以 [正常 Chrome 记录](../research/validation/normal-chrome-live.md) 为准。

Demo 仍不包含真实多账号权限、富文本、附件、生产级迁移/配额回收，也未完成浏览器进程重启、系统断电、磁盘故障与全套 UI/辅助技术验收。此次合并不扩大这些能力声明。
