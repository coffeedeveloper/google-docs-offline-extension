# Google 网页离线代码：readable 阅读指南

**希望像读正常业务工程一样阅读，请先看新增的 [人类可读业务层](../research/human-readable/README.md)。** 那一层已手工改成具名状态、ES modules、声明式任务目录和明确的分支，并用原函数做行为对照。本页下面描述的仍是上一层“完整 bundle 保结构”的版本，二者保留用于互相查证；新的业务层不声称覆盖全部 Google 实现。

这份副本面向“理解 Google 如何分工、作决策和执行任务”，不是另写一套相似的伪代码，也不是只跑格式化工具。输入来自已经归档并校验哈希的公开 JS；入口 HTML 和账号配置不重新复制，继续使用原来的脱敏归档。

## 先从哪里看

| 想了解什么 | 建议入口 |
| --- | --- |
| heartbeat 如何触发、扩展如何握手、何时执行多文档同步 | [frame 控制器](../offscreen-original/readable/sections/912208950-frame_bin/frame-controller.js) |
| 哪些后台任务会被创建，各有什么执行条件 | [任务目录](../offscreen-original/readable/sections/912208950-frame_bin/task-catalog.js) |
| 如何判断到期、优先级和重试，为什么不会每次全量执行 | [周期调度器](../offscreen-original/readable/sections/912208950-frame_bin/periodic-scheduler.js) |
| Worker / iframe 的选择、握手、超时与回收 | [任务运行器](../offscreen-original/readable/sections/912208950-frame_bin/task-runner.js) |
| SW 如何离线加载 frame、公共脚本与页面 | [公共缓存路由](../service-worker-original/readable/sections/docs-offline-common/common-cache-routing.js) |
| 如何防止把缓存一半的资源当成完整版本 | [清单更新与完成标记](../service-worker-original/readable/sections/docs-offline-common/manifest-update.js) |
| 文档模型和编辑器 shell 为什么必须分别判断 | [本地文档启动](../service-worker-original/readable/sections/docs-editor/document-launch.js) |
| 网络慢时如何选择本地启动 | [网络/本地竞争](../service-worker-original/readable/sections/docs-editor/network-local-race.js) |
| 列表页的多个 URL 如何复用同一离线入口 | [Drive coldstart](../service-worker-original/readable/sections/drive-main/drive-coldstart.js) |
| cache-proxy 页面如何连接 Worker | [cache-proxy 启动边界](../service-worker-original/readable/sections/drive-cache-proxy/cache-proxy-bootstrap.js) |

配套原理分析：[SW 职责](GOOGLE-SERVICE-WORKERS.md)、[Scheduler frame](SCHEDULER-FRAME.md)。全部入口索引：[SW readable](../service-worker-original/readable/README.md)、[frame readable](../offscreen-original/readable/README.md)。

## 文件分层：完整副本与业务切片

```text
service-worker-original/ 或 offscreen-original/
  dependencies/       公开响应原件，不修改
  formatted/          原有格式化副本，不修改；旧报告行号继续有效
  readable/
    *.js              完整 bundle 的语义阅读版本，保留初始化顺序
    sections/         按职责提取的真实代码切片，不是独立运行模块
    symbols.json      原名、新名、行号、输入/输出哈希及绑定映射
    README.md         阅读入口
```

**完整 bundle 才保留完整的共享环境。** `sections/` 用于减少阅读噪音，包含对共享运行库、原型别名和其他业务函数的引用，不能直接 `import` 到 Demo，也不能依次拼接成可运行工程。每个切片都标出对应完整文件位置。

没有把 Google 的 Closure 公共运行库强拆为 ES modules：该变换会涉及全局初始化、短属性 ABI、动态导出及反射，需要额外工程与回归。本次没有给切片虚构可独立工作的依赖注入接口。

## 具体还原了什么

- 7 个完整 bundle 的阅读副本，覆盖 5 个 SW 实现、cache-proxy 与 scheduler frame。
- 已确认的业务类/函数使用语义名称，例如 `SchedulerFrameController`、`PeriodicTaskScheduler`、`TaskExecutionSpec`、`populateAndMarkManifestComplete`、`matchesDriveListRoute`。
- 关键函数参数、局部变量和部分 prototype 方法参数按照实际用途命名；同名局部变量按词法绑定分别处理。
- 添加中文职责、状态字段、前置条件、错误边界说明。安全展开 `!0/!1` 和独立逗号表达式语句；不改条件、返回值和循环中的复杂求值顺序。
- 提供 17 个业务切片及原符号映射，便于从“功能”回到“代码证据”。具体符号/绑定数量以 [生成校验记录](../research/validation/readable-research.json) 为准。

**这仍不是全量语义还原。** 大量未调查的共享库、消息类型与 cache-proxy 内部数据事务仍保留短名。不能将一个短名批量改成 `manager` 就声称理解了其职责；后续确认含义后再补充映射。

### 为什么还有 `this.D`、`Ti(...)`、`q.prototype` 一类写法

属性名、数组消息字段号与一些编译器别名涉及调用契约；未完成所有读写者的核实前不改它们。类声明的中文说明提供已确认的字段对应关系。例如：

| `PeriodicTaskScheduler` 字段 | 职责 |
| --- | --- |
| `D` | 任务目录 |
| `B` | 统计存储 |
| `G` | 执行器分派器 |
| `A` | 当前任务运行器 |
| `j` | 是否处于运行批次 |
| `o` | 账号事件通道 |

`selectNextDueTask()` 负责选择，`runNextDueTask()` 负责执行并记录；`runImmediateMultiDocumentSync()` 则是另一条即时任务链。名称是本仓库的阅读解释，不是 Google 公开 API，也不是其源码原名。

## 保持逻辑的方式与验证边界

生成器只对明确登记的绑定改名，不做全局字符串替换。控制流、属性名、外部全局名、协议数值、配置键与 URL 保留；不会再次引入个人启动配置。

验证包含：

1. 确认原始公开响应和格式化输入的哈希符合归档清单。
2. 完整副本经作用域解析后，比较绑定归一化 AST；只允许绑定改名、注释/排版，以及上述两个受限语法展开。
3. 重新生成并逐字节比较所有输出，防止人工修改后失去来源对应关系。
4. 测试遮蔽、闭包、`let` 循环与 switch 作用域、属性/协议值被误改的拒绝分支。
5. 对从原件及 readable 提取的 Drive 路由匹配、周期任务选择函数做合成输入对照。只执行这些决策函数，不执行整个 Google bundle。

两个公共库保留了旧版 JSON 解析的 `eval` 兜底：已检查其 JSON 格式约束，并用固定函数签名限制为当前实现；不修改该函数。其他直接 `eval`、未支持的作用域语法会让生成失败，要求人工审查。

**静态等价不等于真实 Google 环境的全功能运行证明。** 改名可能影响函数名反射和错误堆栈；任务 Worker/iframe 的部分下游脚本尚未采集。本轮未注册这些 SW、未替换线上资源，也未验证账号同步、权限或上传 ACK。扩展和 Demo 的运行代码不受这批阅读副本影响。

## 如何维护

```sh
pnpm research:generate
pnpm research:check
```

先修改 [语义名称与职责映射](../scripts/research-readable-names.mjs)，然后生成并检查，不直接改生成的 JS。生成器是 [readable-research.mjs](../scripts/readable-research.mjs)，作用域与安全变换实现是 [research-readable-model.mjs](../scripts/research-readable-model.mjs)。

新版本不能沿用短符号映射：必须重新校验来源、函数含义和测试结果。研究资料仍遵守 [脱敏规则](RESEARCH-PRIVACY.md)，Google 代码的权利和许可证沿用归档说明。
