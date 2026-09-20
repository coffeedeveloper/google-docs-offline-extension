# 实践与复现实验

2026-09-20 工程已合并为 pnpm workspace；下面的 Google 实验使用根目录 `extension/`，本地 Demo 使用 `demo/extension/dist/`，不可混用。构建、加载和恢复原版步骤见 [双目标指南](WORKSPACE.md)，迁移后自动化结果见 [验证记录](WORKSPACE-VALIDATION.md)。

最初在用户 Chrome 的原版扩展环境中确认文档离线就绪，并在原有 DevTools Offline 条件下重新加载，最终恢复了文档大纲、Working offline 和 Editing 状态。这不属于重构版验收。没有编辑用户已有文档正文；后续仅向新建专用文档写入合成测试内容。公开网页脚本中确认了 IndexedDB、待同步命令与锁、网页 Service Worker 逻辑；未成功读取该 profile 的 Application 详情，因此不报告数据库记录数量或实际 cache keys。

## 先复现扩展自身逻辑

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm exec playwright install chromium
pnpm test:browser
```

真实 Chromium 测试对原始与模块化构建版分别运行，使用合成的 Docs origin 页面和空白 profile。它证明扩展可加载及原生 API 链路正常，不证明 Google 文档上传成功。`pnpm test` 当前另有 22 项差分测试，覆盖账号恢复、双端口握手、断开重试与生命周期等分支。

调试时在 DevTools Sources 打开 source map 中的 `src/background/`、`src/offscreen/` 源文件。在 `ExtensionController.dispatch`、`OffscreenManager.initializeDocument`、`OffscreenController.onFrameRequest` 和 `GoogleIframeManager.request` 设置断点，可依次观察请求、隐藏页初始化、握手和 RPC。修改 `src/` 后重新构建并在扩展页 Reload；未构建的源码修改不会自动更新 Chrome。

## Google 账号下完整实验

2026-09-18 曾启动真实 Google 验证：独立 Chrome for Testing 加载当前 `extension/`，通过浏览器内读取资源并计算 SHA-256，确认三个实际加载的 JS 与重构产物完全相同。没有合成页面或网络路由替代。该轮停在 Google 登录页，随后按用户要求关闭隔离会话并切换到正常 Chrome；历史快照见 [`google-docs-live.json`](../research/validation/google-docs-live.json)，不表示该窗口当前仍在等待登录。登录页没有 Docs 的扩展探测标记不能据此判定扩展失败。

正常 Chrome 中确认原版开关为 Off，但尚未确认重构版已加载并启用。新建专用文档的在线基线已保存到 Drive，Docs 仍提示扩展缺失或未激活，因此没有继续离线写入和重连测试。见 [正常 Chrome 验证记录](../research/validation/normal-chrome-live.md)。这是测试前提尚未成立，不是重构扩展的运行失败结论。

可复用的启动与只读检查：

```sh
node scripts/google-docs-live-session.mjs
# 在弹出的隔离浏览器中手动登录；另一个终端使用启动输出的 loopback endpoint：
node scripts/google-docs-live-inspect.mjs http://127.0.0.1:<port>
```

启动器不复制正式 profile、Cookie 或登录凭据，也不自动创建文档。登录由用户手动完成。诊断报告只记录扩展状态、资源哈希和页面能力，不输出账号标识或文档正文。启动终端输入 `stop` 可恢复该测试 context 联网并关闭窗口；包含登录状态的临时 profile 保留在打印的路径，不纳入仓库。下列完整实验须先确认账号登录和重构扩展加载来源，再执行。

1. 使用专用 profile 和测试账号；只安装一个相同 ID 的扩展，加载 `extension/`。
2. 创建测试文档，输入 `online-baseline`，等到已保存到 Drive，再设为可离线。
3. Docs DevTools → Application：记录网页 worker 的 URL、scope、state；IndexedDB 只查看 schema 和记录计数；不要导出 Cookie/正文。
4. Network → Offline，普通重新加载，确认仍可编辑。`Disable cache` 针对 HTTP 缓存，不等同于清空 Service Worker 的 Cache Storage。
5. 输入唯一标记 `offline-test-<timestamp>`，等待“保存到设备”，刷新再查。进一步在专门实验环境中重启浏览器验证。
6. 恢复网络，等到云端保存完成；在另一客户端读取文档确认标记恰好一次。
7. 并发实验：A 离线，B 在另一 profile 在线修改相邻/重叠位置，A 重连，验证收敛。
8. 最后恢复实验网络设置，确认无未同步数据，再清理测试文档。

单标签 Offline 不保证扩展及隐藏页都断网；完整网络隔离测试应覆盖所有执行目标。不要在有未上传数据时清空 IndexedDB 或卸载扩展来“快速修复”。

## 自研文档系统验收重点

- 本地事务提交后才显示已存本机。
- ACK 丢失后重传不重复；客户端/服务端操作身份持久化。
- 多标签和 worker 终止后能恢复持锁及队列状态。
- 旧 schema、旧版本、长离线、远端撤权和账号切换不会导致数据串用或丢弃。
- 图片/字体/嵌入资源缺失时就绪状态准确。
- pending 操作不能被空间回收策略删除。

更详细的阶段计划、存储模型和故障矩阵见 [仓库研究报告](google-docs-offline-investigate.md) 第 7、8 节；第 12 节讨论无 Service Worker 的边界，第 13 节给出 Offline Docs Demo 的复现方法及已通过的 8 条集成测试路径。
