# 正常 Chrome：真实 Google Docs 验证

日期：2026-09-18。根据用户指示，从隔离测试浏览器切换到正常 Chrome。

专用文档：[Offline reconstruction validation - 2026-09-18](https://docs.google.com/document/d/1GfQH-QTn2aZqbvXlcUuV8lXG8M8oq5c9amw1Pp8ZDqc/edit)。仅写入合成测试文字，没有编辑用户已有文档，也没有更改共享权限；界面显示 Private to only me。

## 当前已观察结果

| 检查 | 结果 |
| --- | --- |
| 原版关闭 | 扩展管理页 Google Docs Offline 1.110.1、ID ghbmnnjooekpmoecnnnilnnbdlolhkhi，开关 Off |
| 重构版加载/启用 | 尚未观察到；需由用户完成其提出的手动加载操作 |
| 新建专用文档 | 成功 |
| 在线基线 | 文档可见 `ONLINE_BASELINE_20260918` 与合成测试说明，状态 Saved to Drive |
| Docs 扩展检测 | 显示 The Google Docs Offline Chrome extension is missing or inactive |
| 断网、离线修改、刷新、重连同步 | 尚未执行，不应写成已通过 |

当前提示不能作为重构代码失败的证据：界面显示扩展尚未启用，代码没有进入待验证条件。待启用本工程 `extension/` 后，先确认加载来源并刷新测试文档，再继续验证。

未改变正常 Chrome 的网络条件、未清除缓存/数据库、未卸载扩展。原本账号和网页已有的离线数据将继续存在，因此后续测试属于既有 profile 上的兼容性回归，不是全新 profile 的首次离线准备测试。
