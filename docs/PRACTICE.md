# 实践与复现实验

本次已在用户 Chrome 中确认文档离线就绪，并在原有 DevTools Offline 条件下重新加载，最终恢复了文档大纲、Working offline 和 Editing 状态。没有编辑用户正文。公开网页脚本中确认了 IndexedDB、待同步命令与锁、网页 Service Worker 逻辑；未成功读取该 profile 的 Application 详情，因此不报告数据库记录数量或实际 cache keys。

## 先复现扩展自身逻辑

```sh
npm ci --ignore-scripts
npm run check
npx playwright install chromium
npm run test:browser
```

真实 Chromium 测试对原始与可读版分别运行，使用合成的 Docs origin 页面和空白 profile。它证明扩展可加载及原生 API 链路正常，不证明 Google 文档上传成功。

## Google 账号下完整实验

1. 使用专用 profile 和测试账号；只安装一个相同 ID 的扩展，加载 `extension/`。
2. 创建测试文档，输入 `online-baseline`，等到已保存到 Drive，再设为可离线。
3. Docs DevTools → Application：记录网页 worker 的 URL、scope、state；IndexedDB 只查看 schema 和记录计数；不要导出 Cookie/正文。
4. Network → Offline，普通重新加载，确认仍可编辑。`Disable cache` 针对 HTTP 缓存，不等同于清空 Service Worker 的 Cache Storage。
5. 输入唯一标记 `offline-test-<timestamp>`，等待“保存到设备”，刷新再查。进一步在专门实验环境中重启浏览器验证。
6. 恢复网络，等到云端保存完成；在另一客户端读取文档确认标记恰好一次。
7. 并发实验：A 离线，B 在另一 profile 在线修改相邻/重叠位置，A 重连，验证收敛。
8. 最后恢复实验网络设置，确认无未同步数据，再清理测试文档。

单标签 Offline 不保证扩展及隐藏页都断网；完整网络隔离测试应覆盖所有执行目标。不要在有未上传数据时清空 IndexedDB 或卸载扩展来“快速修复”。

## Zoom Docs 验收重点

- 本地事务提交后才显示已存本机。
- ACK 丢失后重传不重复；客户端/服务端操作身份持久化。
- 多标签和 worker 终止后能恢复持锁及队列状态。
- 旧 schema、旧版本、长离线、远端撤权和账号切换不会导致数据串用或丢弃。
- 图片/字体/嵌入资源缺失时就绪状态准确。
- pending 操作不能被空间回收策略删除。

更详细的阶段计划、存储模型和故障矩阵见 Obsidian 报告第 7、8 节。
