# `/offline/extension/frame`：连接协议、公共 API 与后台任务边界

研究日期：2026-09-24。本文保留的是**取得 frame HTML 之前**的阶段调查：扩展连接侧与公共 API iframe。随后用户已提供 HTML，主 bundle 也已下载分析，最新结论见 [Scheduler frame 主实现](SCHEDULER-FRAME.md)。下文“待取得”描述该较早阶段，不再代表主 bundle 的当前状态；具体任务 worker 与服务端 ACK 仍待研究。

本文结合扩展 1.110.1 的重构源码及其原始基线、已归档的 `3035349842-docs_offline_iframe_api_bin.js`、本轮用户 Chrome 的只读 DOM 观察。公共 API bundle 是 2026-09-17 的历史样本，尚未证明与当前网页加载的版本相同。

## 1. 先区分三个名字相近的页面

| 页面 | 所属 origin / 容器 | 已确认职责 |
| --- | --- | --- |
| `offscreendocument.html` | 扩展 origin，隐藏 DOM 页 | 创建 Google iframe、接收握手、转发请求、管理生命周期 |
| `/offline/extension/frame?ouid=…` | `docs.google.com`，嵌在上述隐藏页中 | 扩展向其传递 alarm 和业务请求；扩展代码称其 scheduler frame。内部如何调度仍待主 bundle |
| `/offline/iframeapi?ouid=…&sa=…` | `docs.google.com`，嵌在 Docs / Drive 等产品页中 | 向产品页提供离线查询、固定文档、启用/退出、事件总线等 API，并可调用扩展 |

```text
Docs 编辑页 / Drive 列表页
  └─ /offline/iframeapi             产品侧离线 API
       ├─ Google origin 本地存储与事件总线
       └─ chrome.runtime 请求扩展
            ↓
扩展 background service worker      账号、alarm、隐藏页协调
  └─ offscreendocument.html         DOM 容器与消息转发
       └─ /offline/extension/frame  Google origin 后台业务入口
            └─ 任务执行器/worker    当前尚未取得完整内部调用链
```

这是已知连接关系与未知边界的职责图。**不能把公共 iframe API 的全部实现直接归为 extension frame 的代码。**

## 2. 本轮 Chrome 里实际看到了什么？

在用户已打开的 Docs 编辑页和 Drive 首页中，只读检查了 script / iframe 的 DOM 引用：

- 两个页面都含 `chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/page_embed_script.js` 引用。
- 两个页面都嵌入 `https://docs.google.com/offline/iframeapi`，查询参数键包括 `ouid` 和 `sa`；未保存这些值。
- 这只能证明页面存在对应引用，不能证明当前启用的是官方版还是重构版、初始化已成功，或后台上传已完成。
- 没有在这些页面的顶层 iframe 列表中看到 `/offline/extension/frame`；这与它属于扩展隐藏页的设计一致，但不能据此判断隐藏页当时是否存在。

工具边界：当前调试连接的页面清单只有空白页，未连接用户普通 Chrome；另通过普通 Chrome 浏览器连接完成上述 DOM 观察。浏览器安全策略阻止打开源码视图，隐藏 iframe 的内部 DOM 检查也不可用。本轮没有绕过这些限制，没有取得目标 frame 的 HTML、实际消息流或网络响应。

未改变离线开关、网络条件、账号、扩展启停状态，未写入文档内容，未调用同步、退出或清理协议。原始观察摘要见 [只读观察记录](../research/validation/extension-frame-observation-2026-09-24.json)。

## 3. 在 Chrome 哪里能找到目标 frame？

### 3.1 从扩展隐藏页找，而不是编辑器页

1. 打开 `chrome://extensions`，定位 Google Docs Offline，ID 为 `ghbmnnjooekpmoecnnnilnnbdlolhkhi`。如果要显示调试入口，用户可开启该页的开发者模式；本轮没有代为修改该设置。
2. 在扩展的「检查视图 / Inspect views」区域，隐藏页存在时寻找 `offscreendocument.html`，打开它的 DevTools。名称和展开位置随 Chrome UI 版本可能不同。
3. 在 **Elements** 中搜索 `/offline/extension/frame`，确认它确实是该 offscreen 页的子 iframe。
4. 在 **Sources → Page** 中展开对应的 `docs.google.com` frame，查找已加载文档及静态 JS。不要将外层 `offscreendocument_main.js` 当成 Google frame 主 bundle。
5. Network 只有在开始记录后才捕获请求。如果没有历史请求，不能据此断言资源没有加载；先查看 Sources 中已有的资源，不必为了抓包立刻重载或关闭扩展。

扩展调试入口与隐藏页背景见 [Chrome 调试文档](https://developer.chrome.com/docs/extensions/get-started/tutorial/debug)、[Offscreen API](https://developer.chrome.com/docs/extensions/reference/api/offscreen)。

### 3.2 如果只有 service worker，没有隐藏页

可在**该扩展 service worker 的 Console** 执行只读查询，而不是在 Docs 页的 Console 执行：

```js
await chrome.runtime.getContexts({
  contextTypes: ['OFFSCREEN_DOCUMENT']
});
```

空数组只表示当时没有该上下文。本版源码有 60 秒空闲关闭、1 小时上限，以及 5 分钟 heartbeat 配置；这些是应用策略，不是 Chrome 对所有 offscreen 页的通用时限，也不保证定时器精确触发。打开调试器会影响某些生命周期观察，正式验收时需另做无调试器对照。

不要直接在普通标签页打开 `/offline/extension/frame` 来证明正常工作：缺少原有父窗口、端口与账号握手环境，结果不能代表扩展嵌入场景。也不应在真实账号中发送任意数字协议来强制启动或同步。

### 3.3 希望补充的文件

将已有响应/资源保存到 `service-worker-original/extension-frame/`：

- frame HTML 响应（可能含个人信息，先保持本地私有）。
- HTML 引用的主 JS；尽量保留完整静态来源 URL 和版本。
- 若实际出现，再提供 `synctaskworker.js` / `taskiframe` 等启动响应及其导入脚本。

不要导出 Cookie、Authorization、完整 HAR、文档同步正文或私人数据。对 HTML 内嵌配置先做字段级隐私检查，再决定可否进 Git。此步骤仍待用户提供；本轮没有新增这些下载。

## 4. 扩展侧如何启动 frame？

源码能够确认以下顺序：

1. background 恢复保存的离线启用状态，或收到网页的启用/确保离线请求。
2. `OffscreenManager` 创建或复用 offscreen document，创建理由为 `IFRAME_SCRIPTING`，说明文字为访问 Docs origin 用户数据。
3. background 向 offscreen 发送配置：OUID、Docs origin、扩展版本、opt-in 状态。
4. `GoogleIframeManager` 在隐藏页内创建 `/offline/extension/frame?ouid=<encoded-user>` 的 iframe。
5. iframe 插入 DOM 不等于业务就绪；连接侧等待后续带端口的握手，并设置 14 秒连接计时。

证据：[offscreen 创建与配置](../src/background/offscreen-manager.js#L66)、[URL、创建与连接超时](../src/offscreen/iframe-manager.js#L27)。超时后还会执行日志排空与后续关闭逻辑，不应把 14 秒简化为整个关闭流程的精确总时长。

## 5. 两个 ready 门闩与两类端口

### 5.1 握手端口不等于单次请求回包端口

扩展连接侧接收的 window message 中：

- `event.ports[0]` 用于回复这次握手/请求。
- `event.ports[1]`（若存在）作为后续向 Google frame 发业务请求的连接端口。
- 消息本体按 WebsiteRequest 解析，type 1 带 FrameConnection 信息。

offscreen 收到 type 1 后，先把账号及连接时间通知 background；background 保存状态、解除自身 `frameReady`，并回包。随后 offscreen 才将连接端口交给 `GoogleIframeManager.acceptConnection()`，最后回应最初的握手。

因此存在两个不同的等待点：

| 等待点 | 所属上下文 | 保护什么 |
| --- | --- | --- |
| `frameReady.promise` | background | 业务请求等待 frame 连接报告；恢复隐藏页后再次等待 |
| `connection.promise` | offscreen 的 iframe manager | 真正发送时等待可用的 MessagePort |

background 就绪通知和 offscreen 接收端口并非同一时刻；第二个等待点会阻止请求在端口尚未交付时发送。这是读控制流得到的解释，尚未录制真实 frame 握手。

证据：[窗口消息与端口解析](../src/offscreen/frame-message-router.js#L16)、[握手通知与接收端口](../src/offscreen/offscreen-controller.js#L73)、[background 保存状态](../src/background/extension-controller.js#L237)、[发送前门闩](../src/background/offscreen-manager.js#L233)。

### 5.2 每个业务请求再附带独立回包通道

连接完成后，`GoogleIframeManager.request()` 每次新建 MessageChannel，将请求与 `port2` 发给长期连接端口；在 `port1` 接到响应后解析 FrameResponse，最后关闭该本地端口。

这相当于用每次调用的独立回包端口关联请求与响应，避免所有响应都挤在一个无区分的回调里。但这个函数本身没有显式的逐请求超时；不能因此声称整个系统没有超时，公共调用侧和上下文销毁还有其他边界。

证据：[单次请求/回包](../src/offscreen/iframe-manager.js#L76)。

## 6. FrameRequest 不只是“上传正文”

不同通道的数字必须分开解读。扩展的 WebsiteRequest type 4 和 OffscreenRequest type 4 都属于转发包装；其中的 FrameRequest 有自己的类型空间。

| FrameRequest 类型 | 本轮可确认的构造来源 | 不宜超出的结论 |
| --- | --- | --- |
| 0 | 扩展将 alarm 名装进 Alarm payload 后转发，例如 heartbeat | 收到 heartbeat 不证明每次都上传、下载或全量扫描 |
| 2 | 公共 API 的 `Jx` 携带一组文档 ID，出现在 pin 后处理链中 | 尚未取得 frame 内 handler，不能精确命名为“下载已完成” |
| 3 | 公共 API 的 `Hx` 构造；API handler `Be` 会调用 | 本轮未确认具体任务语义，不应武断写成强制全量同步 |

证据：[alarm 转换](../src/background/extension-controller.js#L390)、[公共 API `Hx` / `Jx`](../research/readable/docs_offline_iframe_api_bin.js#L13251)。

网页到扩展的通用 `hx` 有超时和错误响应解析；`Jx` 最后只提取嵌套返回结果。**RPC 回包不等于服务端已确认文档修改。** 后者需要同步执行器与网络协议的证据。

## 7. 新发现：固定离线是“写入意图 + 后续处理”

在历史公共 API bundle 中，`rG` 为 API type 5 注册 `Re`。读取其完整调用链可确认：

1. 检查扩展是否存在；缺失会产生明确错误。
2. `CG` 查询给定 ID 的本地 Documents 记录。
3. 固定某个尚不存在的文档时，创建本地记录并设 `hpmdo=true`；已有相同标记的文档也可进入后处理列表。这里尚无证据说明正文已下载。
4. 将固定状态写到 `ip`，并记录 `initialPinSourceApp`；在相关开关下，`DG` 还在同一次 `write` 中写入 profile pin 元信息。
5. `CG` 返回需要后处理的一组文档 ID；满足条件时 `Re` 调用 `Jx`，经扩展发送 FrameRequest type 2。
6. 调用参数决定是否把 `Jx` Promise 纳入本次 API 的等待链；另有 source app / feature flag 分支会跳过该请求。

```text
产品发起 pin
  → 公共 iframe API
  → 写本地 pin / 占位记录
  → 条件满足时请求扩展处理这些 ID
  → offscreen 将请求转给 extension frame
  → 【待分析】后台调度、下载模型、资源与最终就绪判定
```

另外，公共列表响应分别计算 pin 状态、权限、`hpmdo`、title 是否存在、同步时间、pending queue 状态等字段；不是只有一个“offline=true”。不能在没有调用侧类型名时，将每个数字字段擅自命名为产品最终 ready 状态。

证据：[API 请求与 `CG`](../research/readable/docs_offline_iframe_api_bin.js#L20007)、[合并写入 `DG`](../research/readable/docs_offline_iframe_api_bin.js#L20093)、[`ip` setter](../research/readable/docs_offline_iframe_api_bin.js#L6312)、[列表状态组装](../research/readable/docs_offline_iframe_api_bin.js#L20350)。

设计启示：自研系统应将“用户希望保留”与“数据已经准备好”分开；后台处理可以重试，而 pin 操作本身不应虚假承诺下载完成。

## 8. 新发现：公共状态查询包含一组任务状态

`IF.get()` 不仅查询本地用户，还调用 `JF` 生成一个附加状态。`JF` 根据 feature flag 与配置值筛选任务，读取 `docs-tasksStats_default` 的任务记录，对其中选中的一组检查字段 5。

样本中的任务名包括：

| 类别 | 源码任务名 |
| --- | --- |
| 元信息、列表与同步对象 | `metadata-sync`、`homescreen-cello-sync`、`drive-cello-sync`、`sync-objects-sync` |
| SW 资源维护 | `service-worker-update`、`drive-service-worker`、`odp-service-worker` |
| 文档与资源处理 | `local-changes-sync`、`auto-sync`、`webfonts-sync` |
| 状态、清理与诊断 | `update-unsaved-changes`、`document-deletion`、`cleanup-task`、`report-task`、`impression-sync` |

其中 `local-changes-sync` 等并未被标为这次聚合检查的必选项。这进一步说明：某种公共离线准备状态不能等同于所有本地改动已经上传。

**重要限制：** 这里只拿到了状态消费侧。在本 bundle 中 `EF` 是空构造器，`HF` / `FF` 只保留了部分描述信息；即使表达式中出现 `/synctaskworker.js` 和 `/taskiframe` URL，也不能证明实际执行器的实例化、调度顺序或并发策略。它们是追踪主 bundle 的线索，不是运行时任务日志。

证据：[任务状态读取 `sr`](../research/readable/docs_offline_iframe_api_bin.js#L8985)、[裁剪后的描述类型](../research/readable/docs_offline_iframe_api_bin.js#L19032)、[状态与任务清单 `IF` / `JF`](../research/readable/docs_offline_iframe_api_bin.js#L19044)。

## 9. 新发现：公共事件总线有两种传输实现

公共 API 的 `UB` 优先使用 `BroadcastChannel("DocsEventBus")`；不支持时尝试 SharedWorker，并构造 `/offline/eventbusworker.js` URL。再通过 MessageChannel 适配成统一的端口接口，管理消息与清理。

这意味着不能把“公共 SW 会缓存 eventbusworker.js”理解成“每个用户当前都使用 SharedWorker”。资源被准备、代码分支存在和分支实际运行，是三类不同证据。

API handler `Fe` 还会把事件总线端口作为响应的一部分交给调用方。它解释了不同产品页面如何订阅同一套离线事件接口，但不能证明所有事件包含什么内容或具有何种交付保证。

证据：[事件总线适配 `UB`](../research/readable/docs_offline_iframe_api_bin.js#L16998)、[API 注册与端口返回](../research/readable/docs_offline_iframe_api_bin.js#L19604)。

## 10. 对前一轮 SW 调查的补充：静态注册 scope 已有线索

重新追踪历史公共 API bundle 后，找到了静态注册构造：

- `gG` 为编辑器构造 `/document/` 等产品 scope。
- `mG` 对 common SW 使用 `/offline/`。
- `nG` 对 root SW 使用 `/`。
- `XD.register()` 传入 `{ scope: this.j, updateViaCache: "all" }`。

这些是历史版本客户端注册代码的证据，比只看 SW 文件名更强；**仍不是当前浏览器实际 registration、controller、响应头或开关配置的快照**。相关逻辑也受产品与 feature flag 影响。

证据：[注册调用](../research/readable/docs_offline_iframe_api_bin.js#L18155)、[各 scope 构造](../research/readable/docs_offline_iframe_api_bin.js#L19484)。

## 11. 生命周期和故障恢复能确认到哪里？

扩展侧有状态恢复、单例隐藏页创建、连接失败重建、断开的 Chrome 消息通道重试、账号变化处理及空闲关闭。账号恢复有一次尝试的保护，重复失败会关闭隐藏页。

但并不能据此宣称 frame 内的文档任务有断点恢复、幂等重试或正确 ACK 提交。Chrome runtime Port、MessagePort、网络上传请求分别属于不同层的生命周期；`OffscreenLifetime.activeConnections` 统计的是外部 runtime 连接，不是未上传文档数量。

证据：[重试与恢复](../src/background/offscreen-manager.js#L196)、[账号恢复](../src/background/extension-controller.js#L372)、[连接计数与空闲关闭](../src/offscreen/lifetime.js#L29)。

自研实现应把“容器可以重建”和“业务任务可以恢复”设计成两个独立保证；不能依赖保持隐藏页永远存活来保护用户修改。

## 12. 下一轮最有价值的证据

拿到 extension frame HTML 与主 JS 后，优先沿下列边界向内追踪，而不是先还原整个 bundle：

1. 启动函数、OUID 检查，以及发出握手 type 1 的位置。
2. 连接端口的 `onmessage`，FrameRequest 0 / 2 / 3 的分发与返回值语义。
3. heartbeat 如何选任务，任务状态字段在哪里写入，失败如何影响后续调度。
4. `/synctaskworker.js`、`/taskiframe` 的实际创建点和责任分配。
5. pin 占位记录怎样变成完整文档；最终可离线状态由谁更新。
6. 本地待处理操作怎样被上传、确认和清理；RPC 回包与服务端确认是否同一步。

运行观察只使用专用测试文档。优先记录事件类型、耗时、状态和计数；不把原始同步 payload、账号标识和登录凭据入库。

本轮新增的是连接侧、公共 API 调用链与静态任务状态证据，没有完成以上六项。总体路线见 [后续研究计划](OFFLINE-RESEARCH-ROADMAP.md)。
