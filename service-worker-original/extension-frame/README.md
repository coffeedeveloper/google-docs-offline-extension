# Extension frame 待补充样本

采集说明和当前分析：[Extension frame 专题](../../docs/EXTENSION-FRAME.md)。

此目录目前只有说明，没有取得或归档真实 frame HTML / 主 JS。已有公共 iframe API 样本位于 `research/downloads/`，不能作为该 frame 的主实现替代品。

后续更新：用户选择将真实 HTML 放在独立的 [offscreen-original/](../../offscreen-original/README.md)，对应主 JS 已下载到那里；HTML 已在提交前脱敏，本目录不重复复制。最新分析见 [Scheduler frame](../../docs/SCHEDULER-FRAME.md)。下方保留的是早期采集清单。

建议从扩展实际 offscreen 页的 DevTools 中保存：

1. `/offline/extension/frame` 的 HTML 响应。
2. 该 HTML 实际引用的主 JS 与来源 URL。
3. 后续实际引用的 worker / taskiframe 启动响应及其 JS。

不要附带请求 Cookie、Authorization、完整 HAR 或文档同步正文。HTML 可能有账号/令牌配置，请先保持本地私有，经过字段级检查再决定能否提交。取得文件后补充哈希与来源；父目录现有 `sources.json` 仅覆盖上一轮 SW 样本，不覆盖此目录未来文件。
