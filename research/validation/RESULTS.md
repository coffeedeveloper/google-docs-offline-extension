# 模块化重构验证结果

日期：2026-09-18。当前版本是实际 ES modules 业务重构，不是上一版格式化输出。

## 静态与来源检查

`npm run verify` 通过，记录在 `modular-build.json`：

- 88 个原始文件的清单及 SHA-256 未变。
- 85 个非 JS 运行资源逐字节相同，manifest key 派生 ID 不变。
- 两个 vendor 文件的原始区间、哈希和可执行 token 验证通过（不含新增 export 声明）。
- 3 个业务入口可重新生成完全相同的 bundle 和 source map；输出可按经典 script 解析，map 中的源内容对应当前磁盘源码。

**业务源码已重命名、拆模块和调整表达方式，不再宣称与原版 token/AST 相同。** `research/history/formatting-v1/static-equivalence.json` 仅是旧版历史记录。

## 22 项差分行为测试

`npm test` 全部通过。20 项直接运行 `original/` 和当前 `extension/` 的实际输出；另 2 项（内部状态三态、MessageChannel 端口释放）用同一源码构建仅增加测试导出的入口，以便访问不公开的类/函数。

每个用例比较原版与重构版的回复、storage、Chrome/DOM API 调用轨迹和 console 错误，同时断言预期行为。假时钟用于可重复比较，不表示真实浏览器会精确按这些毫秒值执行。

覆盖：

- 网页能力探测、worker 启动同步监听、状态恢复。
- 开关三态、OUID 写入/移除、退出及 heartbeat 清理。
- 企业 allow / auto / deny；序列化布尔保持 `0/1`。
- 网页及内部握手、时间写入、双端口握手、连接超时取消。
- 账号不匹配只恢复一次；offscreen 配置只初始化一次。
- offscreen 创建、确保单例、移除、OUID URL 编码。
- 已有 heartbeat 不重建，force 才立即转发。
- 初始化通道断开后重建并重试；错误 envelope 向外传递。
- 未知网页/内部消息返回错误。
- 外部连接计数、60 秒空闲关闭和 1 小时关闭配置。
- MessageChannel 响应后的端口释放。

## 真实 Chromium 回归

`npm run test:browser` 已对原版、模块化构建版分别通过；浏览器版本及实测输出见 `browser-smoke.json`。

使用真实 MV3 worker、runtime 外部消息、web-accessible 探测脚本、offscreen document、storage 和 alarms。比较启用、查询、错误及退出清理的归一化结果。

两版使用独立临时 profile、合成页面和账号。Google 外部流量经不可用代理阻断，不登录、不触碰用户 Chrome profile。测试结束后浏览器关闭，临时 profile 路径保留在 JSON 便于核查。

## 未证明的部分

这些检查不是所有执行路径的形式化等价证明，也不是 Google 服务端的端到端测试。仍未覆盖所有并发/失败排列、库中全部遥测采样路径、企业部署、完整离线编辑、并发合并、重连上传和版本更新。

函数名称、词法作用域、堆栈、`Function.prototype.toString()` 和性能可能改变。协议字段、状态转移和已覆盖外部可见调用是当前对照验证的目标。测试通过不能写成“所有条件下绝对一致”。
