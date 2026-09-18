# 源码设计与维护约定

这里是实际构建输入，不是伪代码。所有业务模块的名称由研究重建，不宣称恢复 Google 的原始命名。

## 层次边界

| 层 | 负责什么 | 不负责什么 |
| --- | --- | --- |
| `background/extension-controller.js` | Chrome 事件、网页请求分发、账号恢复与退出编排 | DOM、文档正文存储 |
| `background/offline-state.js` | storage.local 中控制状态及写入顺序 | GoogleDocs IndexedDB |
| `background/domain-policy.js` | managed storage 企业域名策略 | 服务器访问权限判断 |
| `background/offscreen-manager.js` | 隐藏页单例、就绪门闩、通道失败恢复 | iframe DOM |
| `background/heartbeat.js` | alarm 注册/清除及触发回调 | 常驻保活 |
| `offscreen/offscreen-controller.js` | worker 与 Google frame 的协议编排、配置初始化 | 文档编辑及合并 |
| `offscreen/iframe-manager.js` | iframe 创建/移除、握手端口、每请求 MessageChannel | 网页导航缓存 |
| `offscreen/lifetime.js` | 外部连接计数、60 秒空闲、1 小时上限 | Service Worker 的浏览器生命周期 |
| `offscreen/frame-message-router.js` | window message 校验、请求分发与错误回复 | 新增来源权限策略 |
| 两个 `runtime-messaging.js` | runtime 消息序列化、异步回复、错误上下文 | 自动重试策略 |
| 两个 `runtime-api.js` | 给原始库提供语义名称、屏蔽短字段名 | 决定业务路径 |
| `vendor/` | Closure 基础库、wire codec、遥测、安全 URL | 账号状态和业务控制器 |

Google iframe 与扩展 origin 不同；它与 `docs.google.com` 网页属于相同 origin。“Google 同源 frame”不要理解为与扩展页同源。

## 为什么不把运行库全部手写掉

Google 编译产物的 Promise、数组消息内部标志、错误报告和 Trusted Types 辅助逻辑，不等价于随手替换成原生 Promise、JSON 对象和普通 `iframe.src`。本次优先让实际业务可读，同时保留这些兼容性敏感实现。

- 通用运行库由 `scripts/extract-vendor.mjs` 从基线精确区间提取，只有格式化和 export 声明；`research/vendor-provenance.json` 记录原始哈希与区间。
- 后台被编译器特化为企业策略读取的 `Eg()` 没有作为运行库保留；已显式重建为 `domain-policy.js`，避免遗漏业务和悬空引用。
- 两个 bundle 的短符号不是同一个命名空间，不能合并同名符号。兼容层分别映射。
- `N()` 是原始 Disposable 会调用的析构钩子，必须保持该 ABI 名；业务状态和方法使用清晰命名。
- `.ta` / `.Ra` 是 offscreen 原始 Promise 的恢复方法，现有调用保留其调度语义；它们不是业务状态名。

需要继续研究库内部时，从 `runtime-api.js` 的具体引用反查，不要从 vendor 第一行顺读。这里没有声称 vendor 内部已经全面反混淆。

## 三个构建入口

| 源码 | Chrome 运行文件 |
| --- | --- |
| `background/index.js` | `extension/service_worker_bin_prod.js` |
| `offscreen/index.js` | `extension/offscreendocument_main.js` |
| `page/extension-probe.js` | `extension/page_embed_script.js` |

esbuild 输出未压缩 IIFE，`keepNames: true`，保留函数名供调试，`treeShaking: false` 避免有意裁剪库代码。source map 是本项目新生成的，用于回到重构后的 `src/`，**不是找回 Google 原始 source map**。

仅运行 `npm run build` 不会重新提取 vendor；日常迭代不会覆盖 `src/`。只有明确执行 `node scripts/extract-vendor.mjs` 才重新生成 vendor 和来源记录。变更提取区间后，必须重新审阅边界、执行全部检查。

## 保持原版行为的约定

1. 协议 type 在 `shared/message-types.js` 集中命名；数组字段沿用原 codec，见 `docs/PROTOCOL.md`。
2. 账号启用先写开关再按需写 OUID；退出先写 false 再移除 OUID，不擅自合并存储调用。
3. `frameReady` 表示握手完成，不是隐藏页面已经创建。等待创建结束不能代替它。
4. 隐藏页配置只初始化一次；“重建 iframe”不等于“更新这一页的配置”。这是观测到的原版行为，已做对照测试。
5. 账号不匹配只恢复一次，之后关闭；不要在重构中变成无限重试。
6. heartbeat 的立即转发不阻塞启用请求，5 分钟配置不承诺精确定时。
7. 14 秒握手超时进入失败路径后，原版还等待额外 14 秒及日志排空，不能简化成第 14 秒直接关闭。
8. 不在等价重构中顺便更改消息来源校验、协议、安全策略或重试规则；面向自研文档系统的产品化改进应另行设计和测试。
