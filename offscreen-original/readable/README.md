# 语义化阅读副本

先看 [总阅读指南](../../docs/READABLE-RESEARCH.md)。这里不是仅格式化：已确认的业务符号和关键参数已重命名，并加入中文职责说明。未知运行库保留原名。

完整 bundle 保留初始化顺序；`sections/` 是便于阅读的业务切片，**不能直接 import 或独立运行**。

## Scheduler frame 调度与执行

完整代码：[912208950-frame_bin.js](912208950-frame_bin.js)。42 个已确认业务符号；全部绑定映射见 [symbols.json](symbols.json)。

- [持久化任务统计](sections/912208950-frame_bin/task-stats.js) · [完整上下文](912208950-frame_bin.js#L29241)
- [任务执行描述、开关与周期目录](sections/912208950-frame_bin/task-catalog.js) · [完整上下文](912208950-frame_bin.js#L89847)
- [策略宽限期与退出前同步](sections/912208950-frame_bin/policy.js) · [完整上下文](912208950-frame_bin.js#L90174)
- [执行资格、单任务生命周期、iframe 与 Worker 运行器](sections/912208950-frame_bin/task-runner.js) · [完整上下文](912208950-frame_bin.js#L90421)
- [执行器分派、广播、周期任务选择与执行](sections/912208950-frame_bin/periodic-scheduler.js) · [完整上下文](912208950-frame_bin.js#L90995)
- [扩展握手、heartbeat 与即时多文档同步](sections/912208950-frame_bin/frame-controller.js) · [完整上下文](912208950-frame_bin.js#L91640)

来源代码的权利与许可证沿用归档说明；切片不是另行授权的独立实现。
