# Google Docs Scheduler Frame：真正的任务调度与执行设计

研究日期：2026-09-24。依据用户提供的 `/offline/extension/frame` HTML，下载并分析其直接引用的 `912208950-frame_bin.js`。入口为 `_loadSchedulerFrame()`，构建标签 `docs.docs-offline_20260907.00_p0`。

入口的脱敏样本、公开 JS、阅读副本及校验值见 [offscreen-original](../offscreen-original/README.md)。个人配置已替换，任务开关、周期和版本保留，具体边界见 [脱敏说明](RESEARCH-PRIVACY.md)。本文是**真实入口对应版本的静态控制流分析**，不是已执行的任务日志；没有运行下载代码、修改 Google 文档或调用同步/清理指令。

本轮补齐了 [上一阶段 frame 调查](EXTENSION-FRAME.md) 中的主 bundle 缺口：可以确认握手发送方、FrameRequest 0 / 2 / 3、任务目录、调度算法和两种执行器。但具体文档上传协议、服务端 ACK 和待处理队列提交事务，仍需要执行器脚本与专用文档运行实验。

## 1. 核心结论

`/offline/extension/frame` 是 Google origin 下的**后台任务协调页**，不只是给扩展提供一个能访问 IndexedDB 的窗口。

它组合本地用户状态、认证与网络监测、任务目录、执行器、持久化任务统计、事件总线、策略检查，并把文档和维护任务分派到 Worker 或子 iframe 中执行。

三个容易误解的点：

- heartbeat 是调度入口，不是“每 5 分钟全量同步一次”；每类任务还有自己的周期和执行条件。
- 周期调度循环串行执行，但按文档的即时任务走另一条路径，不能据此声称系统全局串行。
- 调度任务结束、frame RPC 回包和文档修改已被服务器确认是三种不同语义。

## 2. 模块职责与源码入口

以下名称是阅读说明；短符号对应当前编译快照，不是 Google 稳定 API。

| 职责 | 符号 | 作用 |
| --- | --- | --- |
| 启动装配 | `_loadSchedulerFrame` | 初始化网络、策略、本地存储及下列组件 |
| Frame 控制器 | `Z$` | 账号检查、向扩展握手、接收指令、维持请求期间的外部连接 |
| 认证追踪 | `H9` | 检查认证状态并发出变化事件 |
| 任务目录 | `G$a` / `D$a` / `p$` | 定义任务类型、优先级、周期、上下文、超时和前置条件 |
| 周期调度 | `V$` / `pab` / `oab` | 选到期任务，逐个执行，记录结果并广播 |
| 执行器分派 | `S$` / `kab` | context 1 → Worker，context 2 → iframe |
| 单任务运行器 | `J$` | 请求协议、依赖服务、超时、取消与资源回收 |
| Worker 运行器 | `Q$` | 创建专用 Worker、接收结果、终止 Worker |
| iframe 运行器 | `O$` | 隐藏子 iframe、校验握手、发送任务、移除 iframe |
| 任务统计 | `$N` / `Vva` / `Wva` | `docs-tasksStats_default` 的读取和持久化 |
| 策略检查 | `H$a` / `I$a` / `K$a` | 一轮调度后检查企业策略及退出流程 |

阅读起点：[启动装配](../offscreen-original/formatted/912208950-frame_bin.js#L90854)、[控制器](../offscreen-original/formatted/912208950-frame_bin.js#L90644)、[任务目录](../offscreen-original/formatted/912208950-frame_bin.js#L89079)、[调度器](../offscreen-original/formatted/912208950-frame_bin.js#L90149)。

## 3. 启动不是直接上传：先建立运行环境与连接

HTML 包含扩展探测脚本、启动配置、版本化主脚本，最后执行：

```js
var scheduler = _loadSchedulerFrame();
```

启动装配得到网络监测、认证追踪、策略允许状态、本地存储会话、执行器和调度器。`Z$` 随后查询本地用户状态：

- 已为当前用户启用离线：初始化相关状态并启动认证追踪；完成该初始化后发送 WebsiteRequest type 1，携带 OUID 和业务连接端口。
- 检测到其他本地用户：发送 WebsiteRequest type 3，携带对应账号信息，交由扩展处理。
- 其他未启用状态：发送 type 3，不携带账号，进入扩展退出/关闭路径。

这里 `Yab` 中的 `a.F.start()` 指的是认证追踪器 `H9.start()`，**不是周期任务调度器启动**。这是仅按 `start` 方法名很容易看错的地方。

握手发送函数 `$ab` 使用一个新 MessageChannel 回复本次调用，并附加第二个端口作为后续业务连接；目标 origin 为配置中的扩展 origin。默认目标窗口是 `parent.parent`；在直接嵌入扩展顶层 offscreen 页时，父页与父页的父页是同一顶层窗口。

这与此前扩展侧解析 `ports[0]` / `ports[1]` 的控制流相互印证。它仍只是握手就绪，不承诺资源准备或全部文档同步完成。

证据：[状态判断、认证初始化与双端口握手](../offscreen-original/formatted/912208950-frame_bin.js#L90679)。

## 4. 三种 FrameRequest 现在可以确认

| type | 处理入口 | 当前源码中的语义 |
| --- | --- | --- |
| 0 | `cbb` | 接收 alarm 名；本版本明确处理 `heartbeat`，其他名称返回空完成 |
| 2 | `dbb` | 为指定文档 ID 列表构造并执行 `multi_doc_sync` 任务 |
| 3 | `ebb` / `fbb` | 检查初始化延迟条件，允许时启动一轮任务调度；不是直接“上传全部文档” |

### 4.1 heartbeat

```text
扩展 alarm
  → FrameRequest 0 / heartbeat
  → 必要时等待初次启用宽限时间
  → 重新查询本地离线用户状态
  → 尚未运行时启动一轮调度
  → 所有当前可执行的到期任务逐个完成
  → 策略检查
  → frame 回包
```

特定 opt-in reason 集合 `[3, 4, 5, 6, 9]` 且启用未满 5 分钟时，`ebb` 返回剩余等待时间。heartbeat 会等待；type 3 在剩余时间大于 0 时直接返回，而不是等待后立即启动。尚未还原这些数字对应的全部产品名称，不应泛化为所有用户都有 5 分钟延迟。

### 4.2 按文档请求

`dbb` 构造唯一的任务标识和文档 ID 列表，task type 为 `multi_doc_sync`、context 为 1，目标 `/offline/synctaskworker.js`。任务上限为：

```text
min(文档数量 × 120 秒, 600 秒)
```

它先检查执行条件，再直接调用执行器；并不先加入 `V$` 的周期任务列表。返回时提取任务结果中的子消息，交给公共 API 调用方。现有证据不能将该子消息直接命名为所有文档的服务端 ACK。

### 4.3 RPC 回包之前还有诊断收尾

`Z$.Ba` 在任务处理 Promise 完成后，还等待日志/遥测相关异步工作再回复。看到 RPC 耗时不能全部归因于文档上传；某些请求正常返回也可能没有实际启动任务。

证据：[分发与延迟](../offscreen-original/formatted/912208950-frame_bin.js#L90759)、[单批文档任务](../offscreen-original/formatted/912208950-frame_bin.js#L90830)。

## 5. 任务目录：周期、执行环境和首轮准备

下表周期取自用户提供的 HTML 配置；代码按分钟计算到期时间。它们是这个样本的配置，不是 Google 的永久契约，也不是精确执行定时保证。

| 任务 | 本样本周期（分钟） | 执行环境 / 目标 | 参与准备状态聚合 |
| --- | ---: | --- | --- |
| metadata-sync | 480 | Worker / synctaskworker.js | 是 |
| service-worker-update | 300 | iframe / taskiframe | 是 |
| drive-service-worker | 180 | iframe / Drive serviceworker/update | 是 |
| homescreen-cello-sync | 360 | iframe / document/backgroundsync | 是 |
| drive-cello-sync | 360 | iframe / Drive dataservice/backgroundsync | 是 |
| local-changes-sync | 5 | Worker / synctaskworker.js | 否 |
| auto-sync | 60 | Worker / synctaskworker.js | 否 |
| webfonts-sync | 1440 | Worker / synctaskworker.js | 是 |
| impression-sync | 360 | Worker / synctaskworker.js | 否 |
| document-deletion | 1440 | Worker / synctaskworker.js | 否 |
| update-unsaved-changes | 10 | iframe / taskiframe | 否 |
| cleanup-task | 1440 | iframe / taskiframe | 否 |
| report-task | 1440 | iframe / taskiframe | 否 |
| sync-objects-sync | 120 | Worker / synctaskworker.js | 是 |

这些 14 项在该 HTML 中对应开关为开启且周期大于 0。目录还定义了 `odp-service-worker`，但本样本开关为关闭，不能说它当前会运行。`multi_doc_sync` 是单独按请求构造的任务，不在上述周期目录中。

常规任务的运行上限配置为 300 秒。各任务的网络、认证和策略要求不同，例如清理类任务不都要求联网；首次 SW 准备尚未成功时，执行器还会加强网络/认证前置检查。

证据：[任务定义与参数](../offscreen-original/formatted/912208950-frame_bin.js#L89045)、[执行前置条件 `Z$a`](../offscreen-original/formatted/912208950-frame_bin.js#L89547)、[安全配置摘录](../offscreen-original/sources.json)。

## 6. 调度器：到期筛选、排序、串行循环和状态持久化

`V$.start()` 在已有调度进行时拒绝重复启动；控制器的 `fbb` 也会先检查运行状态。一次启动会创建事件总线连接，在本轮结束后清理。

每轮选任务的逻辑 `pab` 为：

1. 检查执行器是否允许任务运行：网络、认证、企业策略等。
2. 读取该任务的上次开始、结束、失败次数、曾成功标志等记录。
3. 以开始/结束时间中较晚者为基准，结合配置周期计算是否到期；从未执行的任务立即具备到期资格。
4. 部分带快速重试标记、尚未成功的任务，在前几次失败时使用更短间隔；不是所有任务统一指数退避。
5. 对候选按 `[任务优先级组, 曾成功标志, -超期时间]` 升序排序。
6. 取第一项执行；记录结果后重新计算候选，直到没有当前可运行的到期任务。

同优先级内尚未成功的任务优先，然后优先处理超期更久的任务。任务目录的优先级组取值为 0–4，具体顺序依赖候选是否到期和是否满足前置条件。

**串行范围只是一轮周期调度。** `multi_doc_sync` 可以直接调用执行器，不能据此推导全局没有并发；文档级锁和跨上下文互斥仍需向实际任务实现追踪。

每项完成后会广播包含任务名、结果状态的事件；这是任务状态通知，不是把正文或操作队列放进广播。

证据：[周期循环与持久化](../offscreen-original/formatted/912208950-frame_bin.js#L90149)、[到期选择与排序](../offscreen-original/formatted/912208950-frame_bin.js#L90218)。

### 6.1 任务统计字段的真实含义

`docs-tasksStats_default` 记录可由写入侧确认：

| 字段号 | 当前实现用途 |
| --- | --- |
| 1 | 任务名 |
| 2 / 3 | 最近开始 / 结束时间 |
| 4 | 最近结果代码 |
| 5 | 曾经成功标志，结果为 0 时设 true |
| 6 | 连续失败计数，成功时归零 |
| 7 | 启动时增加、结束时归零的运行尝试标记/计数 |

最关键的是字段 5：后续失败只增加失败计数，并不会在这段逻辑里把字段 5 重置为 false。因此准备状态聚合更接近“所需任务曾成功过”，不是“所有任务最近一次都成功”，更不是“当前无待上传操作”。

还需区分生产者与消费者：本 bundle 的 `M$a` 会计算聚合值，但 `u$` 构造器没有保存传入的该参数；不能把它说成 frame 启动的必过门槛。上一阶段公共 API bundle 的 `IF` / `DF` 则保留类似聚合值并用于状态响应。这些样本共同支持字段含义，不构成当前页面 UI 的运行验证。

字段 7 的跨崩溃使用语义还需进一步追踪，不能仅从加一/归零就称其为完整锁或事务日志。

证据：[统计存储](../offscreen-original/formatted/912208950-frame_bin.js#L28927)、[结果更新](../offscreen-original/formatted/912208950-frame_bin.js#L90186)、[准备状态聚合](../offscreen-original/formatted/912208950-frame_bin.js#L89365)。

## 7. 为什么既有 Worker，又有 task iframe？

源码明确分派 context 1 到 Worker，context 2 到 iframe：

- Worker 运行器创建专用 `new Worker(...)`，发送任务描述，监听消息与错误，任务结束后 `terminate()`。
- iframe 运行器创建隐藏 iframe，等待其消息端口握手后发送任务；验证 `event.origin` 和 `event.source === iframe.contentWindow`，结束后移除 iframe 并关闭端口。

任务本身运行在另一上下文，但可通过 RPC 向 frame 请求共享能力，例如事件总线端口、相关文档数据、按 ID 查询、认证变化通知、页面打开状态等。frame 不只是启动器，也提供这些公共服务。

解释性推断：Worker 适合无 DOM 的同步计算；iframe 可运行依赖 window/document 或产品页面环境的维护入口。**代码证明了映射和实现，未证明 Google 选择每一种环境的全部历史原因。**

同一个 `/offline/synctaskworker.js` 可以接收不同 task type；不能由 URL 相同推导它只会同步正文。`taskiframe` 也不是 `extension/frame` 本身，而是后者创建的下一层执行上下文。

证据：[执行器分派](../offscreen-original/formatted/912208950-frame_bin.js#L90043)、[iframe 运行器](../offscreen-original/formatted/912208950-frame_bin.js#L89841)、[Worker 运行器](../offscreen-original/formatted/912208950-frame_bin.js#L89939)、[子任务向 frame 请求服务](../offscreen-original/formatted/912208950-frame_bin.js#L89641)。

## 8. 超时、认证变化和连接生命周期

### 8.1 任务有独立的失败模型

运行器会在上限前 30 秒请求任务诊断信息，达到上限后以超时状态结束。运行期间按任务声明监听网络或认证丢失；执行器销毁也会停止其任务。

iframe 还有独立的初始化握手超时：默认 15 秒，但用户 HTML 的 `docs-offline-iteits` 配置为 30 秒。不能把默认值写成该样本的实际配置。

Worker 创建失败时还有只读诊断分支：重新获取 worker URL，检查是否意外返回 HTML、登录重定向或错误内容。源码存在这些分支不表示本轮已经触发过。

证据：[运行器、超时与状态结果](../offscreen-original/formatted/912208950-frame_bin.js#L89567)、[初始化超时](../offscreen-original/formatted/912208950-frame_bin.js#L89841)。

### 8.2 认证与网络不是一个布尔值

`H9` 维护认证状态及变化事件，通过 `/offline/authcheck` 等逻辑更新判断；不能把能连网直接视为有上传权限。它有定时检查、缓存新鲜度和重入控制，并非每分钟一定发送认证网络请求。

本轮仅分析公开代码中的身份判断逻辑，没有读取用户 Cookie、令牌或实际身份缓存值。

证据：[认证追踪](../offscreen-original/formatted/912208950-frame_bin.js#L87833)。

### 8.3 找到了此前 offscreen 连接计数的发送方

`$$` 在处理异步工作时调用 `chrome.runtime.connect(extensionId)`；该异步链结束就断开，并设置 30 分钟释放上限。

这与扩展侧 `OffscreenLifetime` 对外部 runtime 连接的计数相对应：存在活动连接时取消空闲关闭。但它不是“永不退出”保证，也不会替代操作持久化。扩展自身还有 1 小时生命周期上限，浏览器/进程结束也仍需恢复机制。

证据：[连接租用与释放](../offscreen-original/formatted/912208950-frame_bin.js#L90841)、[扩展连接计数](../src/offscreen/lifetime.js#L29)。

## 9. 企业策略失效路径：不要误读为“保证上传后清理”

一轮调度完成后，`I$a` 会检查策略。代码使用 `docs-lspa` 记录状态时间；超过 24 小时宽限条件时，尝试执行 `local-changes-sync`，随后进入退出离线流程；若任务执行条件不满足，也有直接进入退出流程的分支。

特别注意：该路径通过 `t$` 取得任务状态，但后续 `then` 没有以结果等于成功作为退出的条件。因此**不能把它概括为“确保所有修改已经上传才清理”**。其他层是否提供备份或保护仍需继续验证。

这只是源码风险边界分析，本轮没有触发策略变更、退出、数据清理。自研系统应明确产品规则：未同步修改如何保护、撤权后是否允许恢复/导出、清理是否需要用户确认，不能复制一个模糊的“先同步再删除”。

证据：[策略与宽限](../offscreen-original/formatted/912208950-frame_bin.js#L89285)、[同步尝试后退出](../offscreen-original/formatted/912208950-frame_bin.js#L89316)、[退出流程](../offscreen-original/formatted/912208950-frame_bin.js#L88926)。

## 10. 结合“设置为可离线使用”的完整已知链路

```text
产品页里的 /offline/iframeapi
  → 写入 pin / 占位文档记录
  → 条件满足时发送 WebsiteRequest 4，嵌套 FrameRequest 2
扩展 background → offscreen
  → 经已握手的端口转发给 /offline/extension/frame
Scheduler frame / dbb
  → 检查网络、认证、策略等执行条件
  → 创建 multi_doc_sync 任务与唯一标识
  → Worker 加载 /offline/synctaskworker.js
  → 发送 task type、文档 ID 等参数
  → 【仍待分析】任务内部下载/合并/存储/确认
  → 收到任务结果并回收 Worker
  → 结果经 frame、offscreen、background 回到产品 API
```

上一阶段只能追到扩展转发；本轮已经追到 Worker 创建与任务参数。最后一段数据处理不能靠外层函数名推断，需要真实 worker 实现。

## 11. 对自研方案最有价值的借鉴

1. 将调度触发、任务选择、具体执行拆开。alarm 是触发器；任务目录描述周期与前置条件；执行器负责超时和清理。
2. 将周期任务与用户直接请求分开，但共享运行器和结果模型；额外设计全局并发与文档级锁，不能假设单个调度循环已经解决它们。
3. 明确四个状态：离线已启用、必要资源曾准备成功、单篇文档当前完整、当前修改已获服务端确认。Google 的“曾成功”标志不适合作为全部就绪状态的唯一依据。
4. 把任务结果和通信成功分开。超时/跳过/未满足条件也可以以正常消息回包；UI 必须读取业务结果。
5. 网络、认证、企业策略分别建模，不要只看 `navigator.onLine`。
6. 通过持久化恢复工作，不通过无限保活隐藏页保证正确性；连接生命周期只用于协调执行窗口。
7. 更新与清理也是离线任务的一部分，但删除用户数据需要比资源缓存清理更严格的保护规则。

这些是派生设计建议；本轮未修改 Demo 或扩展运行代码。

## 12. 下一份最值得取得的样本

优先获取**实际 frame 启动的 `/offline/synctaskworker.js` 响应及它 importScripts 的版本化实现**，其次是 `/offline/taskiframe` HTML 和其引用脚本。

它们可以补齐：`multi_doc_sync` 与 `local_changes_sync` 的 handler、文档准备完成条件、操作上传、服务器 ACK、队列清理、崩溃重试和文档级锁。当前主 bundle 中包含大量共用数据库与数据服务代码，但没有据此把真正 worker 入口当成已分析完毕。

继续采集时只保存响应代码，不导出 Cookie、令牌、完整 HAR 或实际文档同步正文。本次 HTML 已脱敏；后续新增 HTML 和账号相关启动响应仍默认保持本地私有，公开前另行审查。
