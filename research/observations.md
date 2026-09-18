# 调查证据记录（已去除账号与文档标识）

2026-09-17，用户 Chrome Default profile，Google Docs Offline 1.110.1。

## 样本

- 用户复制的扩展：`/Users/ellison/Projects/google-docs-offline-origin-extension`。
- 官方更新 CRX：SHA-256 `e03138d37406c2bedec93e5a7c44a457a6b19cf4fee5dfe5a46450fcea1bf85e`。
- 官方页面脚本 `3035349842-docs_offline_iframe_api_bin.js`：SHA-256 `a900c7fa43ea578456e378ab79789db26a9c7aca4a472a1e4b590041d2a61fe8`。
- Chromium manifest feature 页面 blob：`25048a69b96e21b225cef743a0ba4e630f351457`，下载的原始 base64 在 downloads 中。
- 扩展 ID 字符串的 SHA-1 是 `4895B1DBB92D52488F8D9FFDF9CC7B95C7258C9A`，与 Chromium stable content_capabilities allowlist 的一项匹配。
- 本机/官方三个 JS 字节一致；本机 manifest 含 key，图标与官方 CRX 存在差别。

## 用户页面可见证据

- 保存状态弹层：已保存到 Drive，并已准备好离线使用。
- DevTools 打开时已有 Network Offline 和 Disable cache；本次未修改这两个选项。
- `https://ssl.gstatic.com/docs/common/netcheck.gif` 请求失败，错误为 `net::ERR_INTERNET_DISCONNECTED`。
- `chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/page_embed_script.js` 请求成功，339 B；initiator 为上面的 Google 离线 iframe API 脚本。
- 普通重新加载后，先出现 Trying to connect，再进入 Working offline，Editing 菜单和文档大纲恢复。
- 未向现有文档输入内容；未验证新改动的持久化或同步。
- Application 侧栏可见，worker / database 详情未稳定返回。没有把公开脚本 schema 当作本机 DB 实测。

## 公开脚本索引

位于 `research/readable/docs_offline_iframe_api_bin.js`：

- `indexedDB.open("GoogleDocs")`：约 14563 行。
- 删除前待同步改动保护：`$z`、`aA`、`bA`，约 15069 行。
- `DocumentLocks`、Web Locks API 与租约：约 15230 行起。
- `PendingQueueCommands` 操作：约 15600 行起。
- Store 初始化：约 16200 行起。
- 网页 Service Worker 生命周期与多 scope 更新：约 19320 行起。

精确定位建议用 rg 搜索符号或字符串。格式化版本是研究辅助文件，不是 extension/ 运行文件。
