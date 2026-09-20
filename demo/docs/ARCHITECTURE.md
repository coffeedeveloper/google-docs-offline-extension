# 架构与代码阅读顺序

## 三个职责边界

| 层 | 本项目的实现 | 负责 | 不负责 |
| --- | --- | --- | --- |
| 网页离线应用 | `src/app.jsx`、`src/react/`、`src/application.js`、`core/database.js`、`service-worker.js` | React UI、文档本地状态、编辑事务、离线导航 | 页面关闭后持续执行 |
| 反解析 Chrome 扩展 | 共享 `../../src/` workspace 包 + adapter | 账号启用、offscreen 管理、握手、alarm、失败恢复 | 文档正文的 IndexedDB 与合并算法 |
| 网站同源 iframe / 服务端 | `src/frame.js`、`core/sync-engine.js`、`server/` | 读取本地队列、合并远端更新、持久化 ACK | 网页导航拦截、扩展生命周期控制 |

扩展 origin 是 `chrome-extension://ikiiibboenfblpmpholjlkmbbnkichpo`，正文所在 origin 是 `http://localhost:4173`。offscreen 中的 iframe 与文档页面同源，**与扩展页不同源**。不要把两种 Service Worker、两种 origin 或两种存储混在一起。

## 一次启用发生什么

1. 网页 `connectExtension()` 发送数组 `[2, null, null, null, null, null, null, [account, false]]`。
2. 原 `ExtensionController` 持久化开关与 OUID；原 `OffscreenManager` 创建隐藏页并发送 type 6。
3. 原 `OffscreenController` 创建 `http://localhost:4173/offline/extension/frame?ouid=local-demo-account`。
4. 本项目的 `frame.js` 准备两个 MessageChannel。`ports[0]` 回复本次握手；`ports[1]` 用作后续 frame RPC。
5. frame 发送原 WebsiteRequest type 1；原 offscreen 通知 worker type 3，worker 保存握手时间并解除 `frameReady`。
6. 原 heartbeat 调度以 FrameRequest type 0 进入 iframe；iframe 执行本地同步引擎。

显式同步发送 `[4, null, null, [0, [reason]]]`。这条路径实际经过原 `requestFrame()`、runtime 消息和每次 RPC 的 MessageChannel，没有用新的 side channel 冒充原协议。

`BroadcastChannel` 只做同源“本地状态改变”通知和界面更新。前台页面没有直接调用 `syncAll()`，所有上传在扩展持有的 iframe 中执行。没有扩展时，离线编辑仍可持久化，但同步不会伪装成成功。

## 一次编辑的可靠性顺序

React 页面通过 `useSyncExternalStore` 订阅应用层快照。DOM 元素由 React 维护，业务层不查询或改写 DOM；输入直接调用同一套编辑动作。应用初始化在 React effect 之外只执行一次，避免重复建立消息监听与定时器。光标采用 Yjs relative position，组合输入在独立起始快照上生成增量，再合并回当前文档。详见 [React 分层说明](REACT.md)。

编辑器维护 Y.Doc，按最小变化区间修改 Y.Text，产生二进制 update。`persistUpdate()` 开启一个同时覆盖 `documents`、`outbox` 的 **readwrite 事务**：

1. 读取数据库中最新 snapshot，避免另一标签页刚写入的内容被旧内存覆盖。
2. 应用当前 Yjs update，写入新 snapshot 和派生的标题/正文。
3. 写入带唯一 operation ID 的 outbox 条目。
4. 等待事务 `complete`，再显示「已保存到设备」。

任何一步失败，整个事务回滚。当前编辑器的待写更新仍保留在内存，页面关闭前提示风险；用户可以在恢复存储后重试。`quota` 故障注入集成测试验证这一点。

## 同步与 ACK

iframe 使用 `navigator.locks.request()` 获得固定账号的同步锁。只有持锁执行者取出队列并分批上传，避免多个 iframe/页面在同一时刻排空相同队列。

服务器串行处理写事务，检查 operation ID 与 payload 摘要，应用 Yjs update，先写临时 JSON 文件并 rename 成正式文件，再返回 ACK。重复的相同操作被确认但不重复改变版本；同一个 ID 被不同内容复用则拒绝。

客户端处理 ACK 时重新开启 `documents + outbox` 事务，先读取**此刻最新**的本地 snapshot 再合并远端状态；只删除这次请求被明确确认的 operation IDs。因此网络在途期间新产生的本地修改不会被覆盖或一起清空。

服务器已提交但 ACK 丢失时，客户端队列仍在，重试相同 ID 即可。没有使用“请求发出去就删除队列”或“最后写入覆盖整篇正文”。

## 两类离线验证

- UI 的「演示断网」：控制标记在 IDB 中，所有 API 请求（包括 iframe）先检查它；用来稳定观察队列和界面，不等于真实断网。
- 停止服务：HTTP 请求真正失败，导航从 SW 外壳缓存恢复，正文从 IDB 读取；这是自动集成测试实际执行的路径。

不能把 `navigator.onLine` 当作服务端可达性证明；请求错误会留下队列并进入诊断日志。生产系统还需指数退避、认证恢复、权限撤回、历史窗口超限和可导出恢复机制。

## 缓存与版本

构建对外壳资源计算版本哈希。网页 SW 安装成功时原子完成 precache；只清理旧版 `offline-docs-shell-*` Cache Storage，不触碰 IndexedDB。`/api/*` 从不进入 SW 缓存。编辑页路径统一回到缓存的应用入口，iframe 路径使用缓存的 frame 入口。

这个简化策略没有大型编辑器的渐进式资源缓存、老客户端兼容窗口或数据库迁移策略。生产化时不能直接沿用“立即 skipWaiting + 清理旧缓存”而不评估多个页面混用版本的风险。

## 与原扩展的差异清单

| 差异 | 原因 |
| --- | --- |
| 新的 manifest key / ID / 品牌名称 | 可与 Google 原版并存，不借用 Google 白名单 |
| `getDocsOrigin()` 返回 localhost HTTP | 本地安全上下文，无需域名劫持或伪造证书 |
| startup report 关闭；CSP 只允许本地连接 | Demo 不向 Google 发送遥测/数据 |
| external sender 精确 origin 校验 | manifest 的 localhost 匹配不限定端口，业务层缩窄到 4173 |
| frame origin + source 校验 | 只接受当前被管理 iframe 发来的消息 |
| 本地 `frame.js` | Google 原同源业务页面不在扩展包中，必须用本地等价职责实现补齐 |
| Yjs + 本地 JSON 服务 | 演示可收敛操作同步，不声称恢复 Google 服务端算法 |

适配位于 `scripts/build.mjs` 的有断言替换和单独 subclass 中，共享源码不被修改；构建直接通过 workspace 包解析，无复制步骤。构建时找不到预期原语句会直接报错，而不是悄悄绕过来源校验。
