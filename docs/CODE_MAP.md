# 可读代码导航

自动生成；名称为研究注释，不是 Google 原始符号名。

## offscreendocument_main.js

- [`function nm(a)`](../extension/offscreendocument_main.js#L7392) — offscreen → extension worker 的 runtime RPC，使用原始数组消息格式。
- [`function qm(a)`](../extension/offscreendocument_main.js#L7423) — GoogleIframeManager（研究命名）：维护 iframe、握手门闩、超时与消息端口。
- [`function rm(a)`](../extension/offscreendocument_main.js#L7435) — 移除 iframe 并清理超时，必要时重置握手状态。
- [`function tm(a, b)`](../extension/offscreendocument_main.js#L7447) — 创建 extensionFrame iframe；14 秒未握手进入关闭路径。
- [`function um(a, b)`](../extension/offscreendocument_main.js#L7466) — 构造 Google 同源后台页面 /offline/extension/frame?ouid=...，账号值做 URL 编码。
- [`function vm(a, b)`](../extension/offscreendocument_main.js#L7472) — 每次 frame RPC 使用 MessageChannel；响应后关闭本地回复端口。
- [`function Bm()`](../extension/offscreendocument_main.js#L7515) — OffscreenLifetime（研究命名）：跟踪外部连接数，避免无界后台常驻。
- [`function Em(a)`](../extension/offscreendocument_main.js#L7537) — 连接归零后的空闲关闭：60 秒。
- [`function Dm(a)`](../extension/offscreendocument_main.js#L7544) — offscreen 从启动起 1 小时关闭；这不是永久保活机制。
- [`function Jm()`](../extension/offscreendocument_main.js#L7589) — OffscreenController（研究命名）：解析启动参数、注册消息监听和生命周期。
- [`function Lm(a, b, c)`](../extension/offscreendocument_main.js#L7623) — Google frame → offscreen：type 1 完成握手，type 3 回传账号状态；继续转给 worker。
- [`function Mm(a, b)`](../extension/offscreendocument_main.js#L7666) — worker → offscreen：1 重建 iframe；4 frame RPC；5 移除 iframe；6 确保 iframe 存在。
- [`function Nm(a, b)`](../extension/offscreendocument_main.js#L7696) — 惰性初始化：账号、Google origin、版本、状态及日志上下文。
- [`new Jm;`](../extension/offscreendocument_main.js#L7745) — 原始 offscreen 入口。完整 Docs 编辑器与 Google 同源业务脚本不在此包中。

## page_embed_script.js

- [`(function()`](../extension/page_embed_script.js#L4) — 网页能力探测：由 Google 网页加载，写入版本/权限标记。不是 manifest content_scripts 自动注入。

## service_worker_bin_prod.js

- [`function nm()`](../extension/service_worker_bin_prod.js#L7391) — 状态层：读取已启用离线的账号 OUID。以下 storage.local 函数只保存控制状态。
- [`function pm(a)`](../extension/service_worker_bin_prod.js#L7398) — 启用离线并可选保存 OUID；保持原始 Promise 顺序。
- [`function rm()`](../extension/service_worker_bin_prod.js#L7410) — 退出离线：写入 false，再清理账号标识。
- [`function tm()`](../extension/service_worker_bin_prod.js#L7419) — 三态开关：unknown / opted_in / opted_out；异常值会抛错。
- [`function Fg()`](../extension/service_worker_bin_prod.js#L7436) — 企业策略：允许离线的域名列表。autoEnabled 列表也会隐含允许。
- [`function Dm(a, b, c)`](../extension/service_worker_bin_prod.js#L7517) — OffscreenDocumentManager（研究命名）：创建隐藏 DOM 页的配置、就绪门闩和恢复状态。
- [`function Fm(a)`](../extension/service_worker_bin_prod.js#L7543) — 关闭链路：先请求 offscreen 移除 iframe，再关闭 offscreen document 并重置门闩。
- [`function Pm(a)`](../extension/service_worker_bin_prod.js#L7570) — Chrome offscreen 创建入口；处理并发创建单例时的特定错误。
- [`function Rm(a, b)`](../extension/service_worker_bin_prod.js#L7599) — 向 Google iframe 发起业务 RPC；特定端口错误允许一次延迟重试。
- [`function Km(a, b)`](../extension/service_worker_bin_prod.js#L7646) — 确保 offscreen 存在并发送初始化消息；连接失败时重建再重试。
- [`function Gm()`](../extension/service_worker_bin_prod.js#L7678) — 通过 self.clients.matchAll 检查 offscreen 页面是否存在；不是网页 Service Worker 注册检查。
- [`function dn()`](../extension/service_worker_bin_prod.js#L7786) — OfflineExtensionController（研究命名）：同步注册 Chrome 事件，随后 load() 恢复持久化状态。
- [`function kn(a, b)`](../extension/service_worker_bin_prod.js#L7853) — 后台调度：heartbeat alarm 的配置周期为 5 分钟，实际触发受浏览器调度影响。
- [`p.pb = function()`](../extension/service_worker_bin_prod.js#L7878) — Worker 启动恢复：读取开关及账号，已启用时重新创建 Google iframe。
- [`function en(a, b, c)`](../extension/service_worker_bin_prod.js#L7928) — 外部网页消息入口：返回 true 保持异步回复通道；允许来源由 manifest 限制。
- [`p.tb = function(a, b, c)`](../extension/service_worker_bin_prod.js#L7943) — offscreen → worker：type 3 保存握手信息，type 7 汇报账号/退出状态。
- [`p.wb = function(a)`](../extension/service_worker_bin_prod.js#L7996) — 网页请求分发：1 握手；2 确保离线；3 账号/退出；4 frame RPC；5 企业策略。
- [`function rn(a)`](../extension/service_worker_bin_prod.js#L8046) — 企业策略查询：autoEnabled 域名同时视为 allowed。
- [`function qn(a)`](../extension/service_worker_bin_prod.js#L8067) — 完整退出：持久化关闭状态 → 清除 heartbeat → 关闭隐藏页面。
- [`self.window = self;`](../extension/service_worker_bin_prod.js#L8119) — 保留原始入口与全局兼容别名；此 bundle 不负责网页导航缓存。
