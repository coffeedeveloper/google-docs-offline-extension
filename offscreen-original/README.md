# Google 离线 scheduler frame 样本

分析：[Scheduler frame 主实现](../docs/SCHEDULER-FRAME.md)。

| 文件 | 来源与作用 |
| --- | --- |
| `docs.google.com-offline-extension-frame.html` | 用户保存的实际 HTML 的脱敏研究副本；不是原始响应字节 |
| `dependencies/912208950-frame_bin.js` | 从 HTML 的 script src 解码得到的公开版本 URL 下载的原始 JS |
| `formatted/912208950-frame_bin.js` | Prettier 3.6.2 阅读副本；仅格式化，未语义重命名或参与构建 |
| `readable/` | 语义阅读副本、中文职责说明、任务/调度/控制器等业务切片及符号映射；[阅读入口](readable/README.md) |
| `sources.json` | 来源、SHA-256、大小、格式化参数、允许列表筛选后的非个人配置 |
| `validation.json` | 哈希、语法、格式化可复现、归一化 AST 和本地链接检查结果 |

入口为 `_loadSchedulerFrame()`，构建标签为 `docs.docs-offline_20260907.00_p0`。主 bundle 约 1.37 MB，阅读副本约 9.1 万行，包含调度器及大量共享库，不应将整个 bundle 都称作调度业务逻辑。

**HTML 已按用户要求脱敏。** 账号、邮箱、启动 token、客户端 key、遥测标识和时间、CSP nonce、输入偏好已替换；公开扩展 ID、资源 URL、构建版本及任务配置保留。`sources.json` 的入口哈希对应当前脱敏字节，公开 JS 及阅读副本没有修改。该 HTML 不是可用于真实账号的启动响应，不应直接运行。详见 [研究资料脱敏说明](../docs/RESEARCH-PRIVACY.md)。

配置来自静态 AST 读取，不执行 HTML 或脚本。HTML 的真实请求头、响应头和完整 URL 未提供，来源 URL 只记录脱敏模板。

本轮只下载了 HTML 直接引用的 frame 主脚本。它构造的 `/offline/synctaskworker.js`、`/offline/taskiframe` 等执行器启动响应及其版本化脚本仍待采集；没有伪装成完整依赖镜像。

原始文件与格式化副本均可语法解析；格式化可重现；忽略位置、字面量原始拼写及列表中的独立空语句后 AST 一致。这是静态归档校验，不是 Google 在线/离线运行验证。

Google 原始代码的权利归原权利人，本归档未为其新增开源许可。
