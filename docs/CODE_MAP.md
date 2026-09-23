# 可读源码导航

当前应阅读 `src/`。`extension/` 是这些源码的实际构建产物；`research/readable/` 仍是调查用格式化样本，不要混淆。

## 按用例读调用链

### 启用离线

从 [ExtensionController.dispatch](../src/background/extension-controller.js) 的 `WebsiteRequest.ENSURE_OFFLINE` 开始：

1. [enableOffline](../src/background/offline-state.js) 写开关，可选写 OUID；请求未传账号时读取上次账号。
2. [OffscreenManager.ensureFrame](../src/background/offscreen-manager.js) 构造 type 6 配置，确保隐藏页存在，等待原版的启动缓冲时间并发送消息。
3. [OffscreenController.dispatch](../src/offscreen/offscreen-controller.js) 初始化配置，再调用 [GoogleIframeManager.ensure](../src/offscreen/iframe-manager.js)。
4. iframe 已存在则不重复创建，否则打开 Google 的 `/offline/extension/frame?ouid=...`。
5. worker 调用 [HeartbeatScheduler.start](../src/background/heartbeat.js)，缺失 alarm 才创建；新建或 force 时立即发起一次异步转发。

此链路没有下载或编辑文档正文；这些职责在包外的 Google 网页代码中。

### 握手与转发

Google frame 的 window message 经 [FrameMessageRouter](../src/offscreen/frame-message-router.js) 分发。`ports[0]` 是本次回复端口，`ports[1]` 是后续通信端口。

`OffscreenController.onFrameRequest` 先通知 worker 保存账号/连接时间；worker 的 `onOffscreenMessage` 调用 `markFrameConnected()` 解除 `frameReady` 等待。回复之后 iframe manager 接受长期通信端口并清除超时。

后续网页 type 4 进入 `OffscreenManager.requestFrame()`，经过隐藏页存在性和握手检查，转到 `GoogleIframeManager.request()`；每次请求创建独立 MessageChannel，在响应或发送异常后关闭本地端口。

### 退出与恢复

- 正常退出：`ExtensionController.optOut()` → `disableOffline()` → `heartbeat.stop()` → `offscreen.close()`。
- 关闭隐藏页：先发 type 5 移除 iframe，再调用 `chrome.offscreen.closeDocument()`，最后重置握手状态。
- 账号不匹配：`recoverAccount()` 第一次重建；后续通知关闭，`accountRecoveryAttempted` 不被重置成无限循环。
- 消息通道失效：`initializeDocument()` 或 `requestFrame()` 的已知断开错误分支，各按原版规则恢复/重试。
- worker 重启：`load()` 注册报告上下文，`restoreSavedState()` 根据持久化三态决定是否恢复 iframe。

## 原始符号 → 现在的真实模块/方法

“worker”指原始 `service_worker_bin_prod.js`；“offscreen”指原始 `offscreendocument_main.js`。同名压缩符号在两文件中含义不同。

| 原始位置与符号 | 重构后的实际实现 |
| --- | --- |
| worker `dn` | `ExtensionController` |
| worker `en` / `dn.prototype.wb` | `onWebsiteMessage` / `dispatch` |
| worker `dn.prototype.tb` | `onOffscreenMessage` |
| worker `dn.prototype.pb` | `restoreSavedState` |
| worker `nm / pm / rm / tm` | `getOptedInUserId / enableOffline / disableOffline / getOptInStatus` |
| worker `Fg / Gg / rn` | `domain-policy.js` 中的策略读取和 `queryDomainPolicy` |
| worker `Dm` | `OffscreenManager` |
| worker `Fm / Pm / Km / Rm / Gm` | `close / createDocument / initializeDocument / requestFrame / hasOffscreenDocument` |
| worker `kn / qn` | `HeartbeatScheduler.start / ExtensionController.optOut` |
| offscreen `Jm` | `OffscreenController` |
| offscreen `Lm / Mm / Nm` | `onFrameRequest / dispatch / initialize` |
| offscreen `nm` | `sendWorkerRequest` |
| offscreen `qm` | `GoogleIframeManager` |
| offscreen `rm / tm / um / vm` | `remove / recreate / buildFrameUrl / request` |
| offscreen `Bm / Em / Dm` | `OffscreenLifetime / scheduleIdleClose / 构造器中的一小时关闭计时` |
| page 自执行函数 | `page/extension-probe.js` 中的能力声明入口 |

## 状态命名

| 可读状态 | 含义 |
| --- | --- |
| `frameReady` | worker 等待 Google frame 握手的 deferred，不是 iframe DOM 创建完成 |
| `frameConnected` | worker 侧握手记录，用于恢复和错误上下文 |
| `connection` / `connected` | iframe manager 持有的通信端口 deferred / 已连接状态 |
| `accountRecoveryAttempted` | 当前 worker 生命周期内是否已尝试账号恢复 |
| `activeConnections` | 隐藏页外部连接数，非正在同步的文档数量 |
| `idleTimeout` / `connectionTimeout` | 空闲关闭 / iframe 握手超时的 timer ID |
| `userId` / `docsOrigin` / `extensionVersion` | 当前配置的账号 OUID、Google origin、扩展版本 |

兼容层仍有短字段名和 codec 访问器，集中在两个 `runtime-api.js`。这是已知的库边界，不是把旧的业务函数换个名称再藏回原始 bundle。

## 运行库内部也可以按语义阅读

两个 vendor 已按词法作用域还原函数和变量名，并加入章节/状态机说明。阅读入口是 [运行库设计与维护指南](../src/vendor/README.md)，例如 `createDeferred → LegacyPromise → settlePromise` 和 `setNestedMessage → setMessageField → serializeMessage`。

全局与局部的原符号映射位于 [vendor-symbol-map.json](../research/vendor-symbol-map.json)。需同时选择 background/offscreen 和 scope，不能把两个 bundle 的同字母符号当成同一实现。短属性 ABI 仍保留，并在构造器旁解释；后台 `QueryData.xa` 与隐藏页 `QueryData.la` 就是不同属性布局的例子。
