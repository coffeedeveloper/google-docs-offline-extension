# 人类可读的离线业务层

这一层把已确认的核心业务**手工重构为 ES modules**：具名状态对象、明确的类职责、提前返回、声明式任务目录，不再要求读者记忆 `a.D` 或一长串位置参数。这里包含实际可执行的决策代码，并通过原函数对照测试；不是只有接口的伪代码。

但它是**部分业务的结构化重构**，不是全部 Google 源码，也没有实现一套可替换线上 SW 的完整适配层。浏览器生命周期、Closure Promise、消息编码、数据库和真实任务执行器由显式依赖接口隔离。当前这些接口在测试中实现，尚未接到真实 Google 页面。

## 建议阅读顺序

1. [任务目录](frame/task-catalog.js)：15 类任务的 ID、优先级、周期配置、Worker/iframe 上下文与前置条件。实际样本的开关决定哪些启用。
2. [选择下一任务](frame/task-selection.js)：资格 → 有效周期 → 逾期计算 → 排序。变量不再混用为“失败次数或时间戳”。
3. [周期调度器](frame/periodic-scheduler.js)：记录开始 → 执行一个任务 → 记录结果 → 广播 → 再选一个。状态直接叫 `running`、`currentRunner`、`channel`。
4. [frame 请求](frame/frame-requests.js)：heartbeat 等待后重查账号；type 3 在等待窗口内立即回包；多文档同步走独立路径。
5. [扩展 RPC](frame/extension-rpc.js)：区分回复端口和业务端口，保持 target origin 和回复端口回收逻辑。
6. [Drive 路由](sw/drive-routes.js)：把不同列表 URL 映射到同账号 coldstart，不误认为修改了导航地址。
7. [清单更新](sw/manifest-update.js)：先准备资源，成功后写完整标记，失败时按条件保留旧缓存或删除不完整缓存。
8. [文档启动](sw/editor-launch.js)：先查首选/备选应用 shell，再检查文档需要 resync、缓存需要更新等状态；另含网络响应分类。

理解核心区别可从这两条链开始：

```text
FrameRequests → PeriodicTaskScheduler → selectNextDueTask → executor.execute
                          ↓                                     ↓
                     statsStore.save ← completion → publishResult

网络响应分类 / shell 查找 → 文档模型与缓存状态检查 → 离线启动结果
```

上面第二条不是所有请求必经同一流水线；Google 根据请求与开关选择策略。它与后台任务调度也不是同一层职责。

## 与前两层代码的关系

| 目录 | 用途 | 能否直接运行 |
| --- | --- | --- |
| `*/formatted/` | 未改符号的原 bundle 排版副本，查证据 | 需要原 Google 环境 |
| `*/readable/` | 保留完整结构的绑定重命名副本，查上下文 | 需要原环境；切片不可独立运行 |
| 本目录 | 小模块、具名数据结构、业务控制流，理解与单测 | 可在满足接口契约的宿主下运行；没有完整 Google 接线 |

本目录不由 `research:generate` 生成，不要用生成器覆盖。它不参与扩展/Demo 构建，不改变正在测试的扩展行为。前两层和脱敏样本保持不变。

## 数据结构：不把 wire 格式冒充普通对象

### TaskDefinition / TaskExecution

`task-catalog.js` 输出普通对象，供本目录消费。适配原对象时需作以下映射：

| 阅读层 | 原 scheduler frame |
| --- | --- |
| `task.id` | `D$a.B` / `K()` |
| `task.priority / periodMinutes` | `D$a.J / D` |
| `task.reportType / reportFlag` | `D$a.o / A` |
| `task.accelerateUntilFirstSuccess` | `D$a.F` |
| `task.execution` | `D$a.j`，一个 `p$` |
| `execution.context / executorUrl / taskType / timeoutMs` | `p$.A / j / o / D` |
| `execution.requiresNetwork / requiresAuth / requiresEligibility` | `p$.J / F / G` |
| `execution.parameters` | `p$.B` |

执行器的资格检查还可能受环境开关影响；`requires*` 不是完整的 `canExecute` 实现。这里不以 `navigator.onLine` 代替 Google 的资格检查。

### TaskStats

`statsStore.getOrCreate(id)` 返回可修改的独立记录，`save(record)` 保存副本。字段默认数值为 `0`、布尔为 `false`，不能省略后让运算产生 `NaN`。

| 阅读层字段 | 原 ZN 消息字段号 | 含义 |
| --- | --- | --- |
| `id` | 1 | 任务标识 |
| `lastStartedAt` | 2 | 最近开始时间 |
| `lastFinishedAt` | 3 | 最近结束时间 |
| `lastResultCode` | 4 | 最近结果码 |
| `everSucceeded` | 5 | 是否曾经成功；后续失败不清除 |
| `consecutiveFailures` | 6 | 连续失败次数 |
| `startedAttemptsSinceCompletion` | 7 | 启动时递增、正常结果返回时归零的计数 |

原字段访问还有数组消息 getter/clone 规则。本目录不直接实现 Google protobuf，也不声称普通对象可直接发给 Google。

## 必要依赖接口

这些是**本仓库设计的阅读边界**，不是 Google 对外 SDK。完整原实现的低层行为留在适配器责任内，不用空实现假装已还原。

### 调度与执行

- `executor.canExecute(execution)`：原分派器资格检查。`execute(execution, report)` 返回 `{ completion, stop() }`，对应原运行器的 `o.promise` 和 `stop()`；返回的状态码需解码为数字。
- `reports.createPeriodicContext(task, stats)`：对应 oab 中 `AL` 及其字段构造；发生在写开始时间之前。`readResultCode(result)` 对应 `Ti(result, 1)`。
- `events.createProvider()`、`createUserChannel(provider)`：原 Q9/T$ 装配。通道支持 `connect()`、`publishResult(taskId, resultCode)`；后者负责 U$/cQ 等消息封装。
- `lifecycle.onDispose/own/dispose`：对应原析构登记、子对象所有权和释放。这里没有另行简化浏览器生命周期。
- `now()`：毫秒时间源，允许测试固定时间。

### Promise 语义

`flow` 必须提供 `resolved(value)`、`rejected(error)`、`create(executor)` 和 `observeSettlement(promise, callback)`。

**`observeSettlement` 对应原 `tI`：登记成功/失败回调并返回输入 Promise 本身。** 不可直接用 `promise.finally(callback)` 替代。真正接回 Google 运行库时还须保留 Closure 的异常上报、取消与回调调度语义；测试中的原生 Promise 替身只验证当前业务链的行为，不覆盖这些兼容层细节。

### 请求、URL 与协议

- `users.get()` 返回 `{ status, optInTypes, optInTime }`，对应 `u$.xm/j/A`。保留 numeric status，别把其他账号状态误解为 enabled。
- `replies.create(request)`、`setMultiDocResult()` 与 RPC 的 `wire` 负责数组协议。错误字段并不一定意味着 Promise reject。
- `probe()` 对应 `bbb` 的条件探测，`delay(ms)` 对应 `zI`，`policy.enforceAfterBatch()` 对应 `I$a`，不是新增网络行为。
- `tasks.createMultiDocumentTask(options)` 负责请求唯一 ID、执行器 URL 和 `m$` 参数；`reports.createImmediateContext(18)`、`readMultiDocResult()` 负责 dbb 中的协议封装/读取。
- 任务目录的 URL resolver 分别对应 `dO`、`fO`、`gO`、`hO` 和 ODP URL 分支。ODP 必须保留账号索引以及两个同名 `origin` 参数；不要用普通对象合并查询参数。
- Drive 的 `createRequest` 对应 `Yo`，保留注册 scope 下的相对地址解析。`alwaysFetch/resolveImmediately` 对应原缓存规格 `Ia/Da`。

### 缓存与启动

- `ManifestUpdate.ports.populateResources()` 对应原 NC，**不是这里已经实现了全部清单下载**。完整标记的 Request/Response 构造由宿主提供，避免 Node 与浏览器相对 URL 解析差异。
- `preservePreviouslyComplete` 对应 `docs-sw-eddfpc`；`reportWhenNoCacheRemains` 对应 `docs-sw-ernec`。这两个值应来自同一轮配置快照。
- 编辑器的 `cache.find`、`buildShellUrl`、`modelNeedsResync`、`cacheNeedsUpdate`、结果包装分别对应 `iI`、`SK`、`Am`、`xf`、`FI/GI/yI/OK`。端口函数负责真实缓存和 wire 对象，业务层只改变可读结构。

## 原符号与验证方式

| 模块 | 原符号 | 当前验证 |
| --- | --- | --- |
| 目录 | G$a、E$a、F$a、r$、s$ | 15 类任务参数、顺序、开关和周期对照；URL 使用同等测试替身 |
| 任务选择 | pab、qab、xaa、yaa、hc | 500 组确定性输入与真实提取函数对照 |
| 调度批次 | oab、V$.start/stop | 持久化/执行/广播顺序对照；Promise 身份与通道释放契约测试 |
| frame 请求 | abb、cbb、ebb、fbb、dbb | ebb 边界对照；heartbeat/type 3/即时任务行为测试 |
| 扩展 RPC | $ab | 端口传递、错误响应和清理契约测试 |
| Drive 路由 | Lr、Mr.F、Nr、Or、Pr | Lr 典型/非典型路径对照；缓存键行为测试 |
| 清单提交 | LC、OC | 下载失败、标记失败、保留旧完整版本、删除失败的顺序及结果对照 |
| 编辑器启动 | YK、QK、NK | 状态码/响应头、首选/备选、模型需 resync、缓存更新、读取失败对照 |

所有原函数从已归档、哈希符合清单的 JS 中按作用域提取。测试不运行整个 bundle、不登录账号、不发请求、不读真实文档。明确区分“原函数对照测试”和“模块契约测试”，不将后者包装为全部线上行为已验证。

```sh
pnpm research:test:human  # 本层快速测试
pnpm research:check      # 前一层生成/静态一致性检查 + 两层测试
```

测试实现见 [human-readable.test.mjs](../../tests/human-readable.test.mjs)，包含可参考的依赖适配和合成输入。结构重构后 AST 不再同形，所以不能沿用“AST 一致”作为本层证明；这里依靠源码逐段对照及行为测试，仍有未覆盖分支。

## 尚未完成的部分

本层未重构整个 Closure 运行库、完整 frame 启动与身份握手、Worker/iframe 运行器全部消息协议、Docs root 入口、cache-proxy 数据事务，也没有实现文档冲突合并和上传 ACK。前一层的完整归档仍保留这些代码及上下文。不要将这些小模块拼接后直接替换 Google SW 或扩展。

重构没有新增账号样本；Google 来源代码的权利及许可证沿用原归档说明。所有名称、模块划分和接口是研究重构，不是 Google 官方源码结构。
