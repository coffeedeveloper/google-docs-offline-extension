# 验证结果

日期：2026-09-17。

## 静态检查

`npm run verify` 已通过：3 个 JavaScript 文件的可执行 token 文本/顺序相同，AST 在只忽略源位置和 literal raw 字段后相同；85 个非 JS 文件字节相同。EmptyStatement 没有被删除；作用域、指令序言、函数名、入口及消息字段不变。公钥派生的 ID 符合原扩展 ID。

初次试用 Prettier 会移除编译输出中独立的空语句，因此运行工程改用 js-beautify，并保持严格 AST 检查。研究用 `research/readable/` 可以有格式化差异，它不是可加载入口。

## 13 项差分行为测试

`npm test` 已全部通过：

1. 网页版本/权限标记。
2. worker 启动与事件注册。
3. 开关三态、账号写入及退出。
4. 企业域名 allow / auto / deny，序列化 `0/1`。
5. 未知外部消息错误。
6. 启用时 offscreen 与 heartbeat。
7. 从已启用持久化状态重启恢复。
8. 退出时清除 OUID 与 heartbeat。
9. iframe 地址、OUID URL 编码、握手超时。
10. 确保 iframe 单例及移除。
11. 未知内部消息错误。
12. 60 秒空闲关闭和 1 小时关闭配置。
13. MessageChannel RPC 的端口释放。

测试执行原始及可读 bundle，在相同假时钟、API 和输入下比较回复、storage、Chrome 调用与错误输出，同时断言预期行为。模拟器不执行 Google 同源 iframe 业务，也不模拟文档同步服务。

## 原生 Chromium 测试

`npm run test:browser` 已对两个版本分别通过。Chrome for Testing 的实际版本与输出见 `browser-smoke.json`。

- 原始 manifest 与 ID 正常加载，MV3 worker 正常启动。
- Docs origin 合成页面能加载 web-accessible 探测脚本。
- 外部消息由真实 Chrome runtime 传递，策略和未知消息响应正确。
- 启用请求创建真实 offscreen document、保存测试状态、注册 5 分钟 heartbeat。
- 退出请求移除账号、清除 alarm、关闭 offscreen document。
- 原始版和可读版上述归一化结果相同。

每版使用独立临时 profile，Google 外部流量经不可用代理阻断，页面由本地测试夹具响应。测试浏览器均已关闭，profile 路径保留在 JSON 以便核查，不包含用户账号或文档。

## 保证边界

没有宣称逐字节程序输出的形式化等价：源文本、函数 toString、错误堆栈行列和时序性能可能因格式化不同。未覆盖所有错误重试排列、Google 企业部署、用户端完整离线编辑和服务器冲突合并。没有替换用户正式安装的扩展。
