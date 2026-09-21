# 不用网页 Service Worker，如何离线访问原网站 URL？

更新：2026-09-22。本文整理无网页 SW 的替代方案，重点讨论 `chrome.debugger + CDP` 的“首次在线录制、后续离线回放”。

**状态：设计研究，尚未实现或验证。** 本仓库现有 Demo 仍使用网页 SW 缓存外壳，现有测试通过不代表本文方案已通过。本文不主张 Google Docs 使用 debugger/CDP 实现离线。

## 1. 先明确目标：离线编辑，还是离线重新打开？

本文的严格目标是：

> 已在线准备资源和文档后，关闭页面，在断网状态重新访问 `https://docs.example.com/doc/123`，编辑器仍能启动；最终 URL 与网站 origin 保持不变，不跳转到扩展页面或 localhost。

假设只禁用网页 SW，扩展的 MV3 后台 worker、IndexedDB、必要权限仍可使用。“首次在线准备”不可省略；既未下载也未随安装包交付的资源，不能凭空离线取得。

| 能力 | 不用网页 SW 时的情况 |
| --- | --- |
| 已打开页面断网继续编辑 | 依赖已加载、本地编辑路径不依赖网络时，可以 |
| 将文档和操作队列保存到设备 | 可以直接用 IndexedDB，不依赖 SW |
| 断网后刷新或重新输入网站 URL | 需要另外解决 HTML 与全部启动资源的响应来源 |
| 恢复联网后同步 | 取决于同步执行环境和可靠协议，不由 HTML 缓存自动实现 |

关键问题不是“IDB 里有没有文档”，而是：**浏览器发起导航时，由谁把能够打开文档的程序返回给它？**

仅把 HTML 放进 Cache Storage 或 IDB，并不会自动让浏览器导航从那里读取。offscreen 也只是隐藏 DOM 容器，不会自动接管网站请求；其网站 iframe 在冷启动时仍需取得 HTML/JS。相关案例见 [Offscreen 专题](OFFSCREEN.md)。

## 2. 可选路径与代价

| 方案 | 能否保留原 URL | 执行位置 | 主要限制 |
| --- | --- | --- | --- |
| 浏览器 HTTP 缓存 | 缓存可复用时可以 | 普通 Chrome | 不保证资源完整、未被驱逐、过期后仍能复用 |
| 扩展 + debugger/CDP | 目标请求被提前接管时可以 | 普通 Chrome + 调试权限 | 会话生命周期、导航竞争、子目标和缓存一致性 |
| 本机 HTTPS 缓存代理或本地站点副本 | 路由和 TLS 信任正确时可以 | Chrome + 本机程序 | 部署、证书信任、敏感数据与代理配置 |
| 桌面客户端请求处理层 | 在客户端内可以 | Electron/WebView2 等容器 | 不是普通 Chrome 标签页，存储/profile 也不自动共享 |
| 编辑器打包为扩展页面 | 不满足原网站 URL 要求 | `chrome-extension://` | 可做离线客户端，但 origin、数据访问和认证设计改变 |

### 2.1 HTTP 缓存：可能可用，但不是完整离线承诺

已缓存且允许直接复用的 HTML、JS、CSS 可以避免联网。缓存过期、刷新触发验证、资源被清理或懒加载资源缺失，都可能使启动失败。缓存 `/doc/123` 也不等于能自动为 `/doc/456` 返回同一份应用入口。[HTTP 缓存说明](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

### 2.2 本机代理：HTTPS 不能只靠改 hosts

本机服务可以在线更新资源、离线返回资源。普通 HTTPS CONNECT 隧道只转发加密流量，不能直接替服务器生成 HTML；本地响应需要正确终止 TLS，并提供浏览器信任且匹配域名的证书。这要求用户/管理员明确授权及安全部署，不能分发生产网站私钥或简单忽略证书错误。[HTTPS 与代理缓存](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching#proxy_caches)

扩展的 `chrome.proxy` 只配置代理，不会实现缓存服务。域名指向本机也只解决寻址，不解决 HTTPS 身份验证。[Chrome Proxy API](https://developer.chrome.com/docs/extensions/reference/api/proxy)

### 2.3 桌面容器：在应用自己的网络处理层返回资源

Electron 的 `protocol.handle()` 可处理包括 HTTPS 在内的协议请求；WebView2 提供请求拦截和自定义响应。这可以在容器内保持网站 URL，但不会让用户普通 Chrome 中的同一网址自动支持离线。[Electron 协议 API](https://www.electronjs.org/docs/latest/api/protocol#protocolhandlescheme-handler)、[WebView2 请求管理](https://learn.microsoft.com/en-us/microsoft-edge/webview2/how-to/webresourcerequested)

若坚持普通 Chrome、原 URL、无网页 SW、可靠冷启动，且排除普通 HTTP 缓存兜底，值得继续研究的是 CDP 回放或本机代理。若连调试权限、本机程序和证书配置也不接受，普通 MV3 网络规则 API 没有通用的等价替代接口。

## 3. MV2 能返回缓存正文，而 MV3 不能吗？

**对 Chrome 的普通网络扩展 API，这个理解不成立：MV2 的 `webRequest` 也没有直接提供响应正文的接口。**

| 能力 | Chrome MV2 | Chrome MV3 普通扩展 |
| --- | --- | --- |
| 阻塞请求，让扩展 JS 动态决定处理方式 | `webRequestBlocking` | 大部分扩展不能使用，主要改用声明式规则 |
| 取消、重定向、修改头部 | `webRequest` 对应事件 | `declarativeNetRequest` 对应规则 |
| 在上述接口里返回自定义 HTML body | 不支持 | 不支持 |

MV2 `BlockingResponse` 包含 `cancel`、`redirectUrl`、请求/响应头和认证信息，没有 `body` 或 `responseBody`。MV3 对策略安装的扩展保留 blocking 例外，也不因此增加正文响应能力。[MV2 BlockingResponse](https://developer.chrome.com/docs/extensions/mv2/reference/webRequest#type-BlockingResponse)、[当前 webRequest 说明](https://developer.chrome.com/docs/extensions/reference/api/webRequest)

重定向到 `chrome-extension://.../app.html` 是切换文档地址与 origin，不是为原 HTTPS 文档返回缓存。把子资源重定向到扩展包，也不能解决原 HTML 导航缺少响应的问题。[DNR 重定向规则](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest)

Firefox 的 `webRequest.filterResponseData()` 是另一浏览器的响应流接口，不能当作 Chrome MV2 的能力；有响应流修改能力也不等于已经实现断网冷启动。[Mozilla 文档](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)

**需要单独区分的例外是 `chrome.debugger`。** 它是调试协议入口，不是 `webRequest` 或 DNR；MV3 可以通过它访问 CDP 的 `Network`、`Fetch` 等域。因此判断能否回放，要看采用哪一类 API，而不是只看 Manifest 版本。[Chrome Debugger API](https://developer.chrome.com/docs/extensions/reference/api/debugger)

## 4. CDP 方案：首次在线录制，后续离线回放

### 4.1 在线录制

以我们自己控制的网站为目标，先附加调试器和开启监听，再导航：

```text
建立目标标签页与 debugger 会话
  → Network.enable
  → 导航到 https://docs.example.com/doc/123
  → 记录请求、响应元数据和 requestId
  → Network.loadingFinished 后读取 Network.getResponseBody
  → 将正文与元数据写入扩展 IndexedDB
  → 检查必需资源清单，发布完整的离线版本
```

`Network.getResponseBody` 返回正文及是否为 Base64 的标志。实现必须按实际字节保存，不能把任意二进制当作 UTF-8；缓冲区限制、目标切换或正文读取失败都必须计为资源未准备好，不能静默漏录。[Network 协议定义](https://github.com/ChromeDevTools/devtools-protocol/blob/master/pdl/domains/Network.pdl)

另一条录制路径是 `Fetch` 的 Response 阶段拦截，再调用 `Fetch.getResponseBody`。它会暂停请求，必须在正文读取完成后正确继续或完成响应，并处理异常释放；不能把两条路径的 requestId 混用。[Fetch 协议定义](https://github.com/ChromeDevTools/devtools-protocol/blob/master/pdl/domains/Fetch.pdl)

这里保存的是网络响应正文，不是 `document.documentElement.outerHTML`。页面加载完成后才启用录制，不应假设能完整追溯之前的响应；可靠准备流程应重新加载或从一开始就受控导航。

### 4.2 离线回放

```text
建立 debugger 会话
  → Fetch.enable，选择 Request 阶段
  → 导航到原网站 URL
  → Fetch.requestPaused
  → 查询当前完整离线版本
  → Fetch.fulfillRequest：状态码 + 响应头 + Base64 正文
  → 浏览器解析 HTML，继续请求 JS / CSS
  → 对这些资源重复回放
```

Request 阶段允许在请求发送前暂停；`fulfillRequest` 可为该请求提供响应，不需要先等远端响应，也不需要跳转到扩展地址。这构成“保留原导航 URL、从本地提供正文”的 API 依据；具体网站的 origin、安全上下文与存储行为仍要由 PoC 断言验证。[Fetch 协议定义](https://github.com/ChromeDevTools/devtools-protocol/blob/master/pdl/domains/Fetch.pdl)

回放模式下，必需资源缺失应报告不可用并结束该请求，不能无限挂起或返回空白脚本冒充成功。联网模式下可选择正常放行并准备下一版本；不要只凭 `navigator.onLine` 决定服务是否可达。

## 5. 两个数据库，两类责任

```text
扩展 origin 的 IndexedDB
  └─ HTML / JS / CSS 等响应、版本清单、完整性信息
       ↓ CDP 在网站原请求上提供响应
网站 origin 的编辑器启动
  └─ 读取网站 IndexedDB：文档状态、outbox、同步元数据
```

CDP 回放不会把网站数据库复制成扩展数据库，也不会让扩展自身的 `indexedDB.open()` 自动读到网站数据库。在同一 profile 下按原 origin 加载，设计目标是继续使用网站既有文档数据；不同账号、隐私模式、存储分区和清理行为仍需要验证。[扩展存储与分区说明](https://developer.chrome.com/docs/extensions/develop/concepts/storage-and-cookies)

一份待验证的资源缓存模型可以包含：

| 对象 | 关键内容 |
| --- | --- |
| 离线版本清单 | 构建版本、必需 URL、预期哈希、准备状态、账号/配置作用域 |
| 响应记录 | URL（包含必要 query）、方法、响应变体、状态码、必要头部、正文、内容哈希 |
| 发布指针 | 当前完整版本、可回退的上一版本 |
| 诊断信息 | 漏录、读取失败、命中/缺失、会话断开与回放错误；不写入令牌或正文日志 |

这是设计建议，不是已实现的数据表。不能只用一个 URL 键覆盖所有账号或所有 `Vary` 变体，也不应把凭据明文写进缓存键。

## 6. 三个决定成败的工程问题

### 6.1 “首次访问过”不等于“资源完整”

初次访问可能只加载 `app.js`，使用表格时才加载 `table-editor.js`；Worker、WASM、字体、跨域 CDN 和子 frame 也可能有独立请求。

对于自研网站，应由构建产物提供离线资源清单，再录制或按受控流程预取。所有必要资源成功落盘、校验通过后，才展示“离线已就绪”。新版本准备失败时保留旧版本，不混用新 HTML 和旧 chunk。网站路由回退也必须明确配置，不能把任意未知 URL 都响应为同一 HTML。

### 6.2 新标签页的首次导航可能早于拦截生效

可靠 PoC 入口建议是“点击扩展打开文档”：

1. 创建可附加的空白标签页。
2. 完成 `debugger.attach` 和 `Fetch.enable`。
3. 再导航到原 HTTPS URL。

用户直接在任意新标签页输入 URL，则可能在扩展获知导航并完成 attach 前就发出请求。监听导航事件本身不保证暂停导航；需要单独验证竞争处理、必要时的受控重新导航以及用户体验。

关闭标签页后，会话不会自动转移到新标签页；浏览器重启、用户取消、DevTools 打开等也可能要求恢复处理。iframe/worker 可能属于独立调试目标，不能假设附加主标签页就覆盖所有请求。[Debugger 会话与目标说明](https://developer.chrome.com/docs/extensions/reference/api/debugger)

### 6.3 响应回放不是复制所有头部和 body

- 正文若已解压，原压缩传输对应的 `Content-Encoding`、长度和传输头需要重新处理，不能与保存字节矛盾。
- 正确保留内容类型和必要安全策略；不能靠删除 CSP、CORS 或完整性检查来宣称兼容。
- 重定向、304、206、登录页和错误响应不能都当作完整 200 文档保存。PoC 可先限制为白名单 GET 的完整成功响应，并显式排除其他类型。
- 个性化 HTML 可能包含用户数据、短期令牌或启动配置，需要限定账号、清理策略及允许持久化的内容；不能无条件缓存 `no-store` 或认证响应。
- 不回放 `Set-Cookie` 来恢复过期登录，不把离线内容可读等同于用户仍有服务器权限。
- 不回放 POST/写操作的旧成功响应，更不能用旧 ACK 清空当前 outbox。文档数据继续通过本地模型与可靠同步协议管理。

浏览器 HTTP 缓存的行为与我们自建的回放存储不是一回事。实现需明确隐私、更新和失效规则，而不是“录到什么就永久重放什么”。

## 7. 与当前 Demo 和 offscreen 如何衔接？

候选替换关系是：

| 当前职责 | 无网页 SW 候选方案 | 能否直接照搬 |
| --- | --- | --- |
| 网页 SW 返回前台 HTML/JS/CSS | CDP 资源回放 | 需新增 debugger、缓存与版本管理 |
| 网站 IDB 保存文档/outbox | 保持现有网站数据层 | 需验证原 origin 与同库访问 |
| 网站 frame 执行 Yjs 同步 | 保留或单独调整执行环境 | 不能因前台回放成功就宣称后台链路可用 |
| 服务端合并与 ACK | 保持现有语义 | 不纳入静态响应回放 |

尤其注意：当前同步入口在扩展 offscreen 中的网站 iframe，不在编辑标签页里。**附加前台 tab 的 debugger 会话，不自动覆盖这个独立隐藏环境。** 禁用网页 SW 后，隐藏 frame 的离线重建仍需单独设计资源供应与可附加目标验证；另一种边界是只在网络恢复后从服务器加载 frame，再执行同步。两者的能力不同，必须分别声明。

这些都属于独立实验目标，不应直接给 Google 替代验证版增加 debugger 权限或更改其共享语义。现有运行方式和已验证范围仍以 [Demo 设计](../demo/docs/DESIGN.md)与[验证记录](../demo/docs/VALIDATION.md)为准。

## 8. 建议的 PoC 验收清单（尚未执行）

| 实验 | 必须观察到的结果 |
| --- | --- |
| 在线录制自研站点 | 必需资源清单完整，正文已持久化，而非仅有 URL/响应头 |
| 禁用网站 SW、排除普通 HTTP 缓存兜底 | 页面启动确实依赖 CDP 回放；不能把页面刷新成功当作来源证据 |
| 真正停止目标服务或阻断目标网络 | 缓存命中由 `fulfillRequest` 完成；缺失资源明确失败 |
| 关闭页面，从扩展入口重新打开 | 最终 URL 与 `location.origin` 正确，编辑器和既有 IDB 数据可读 |
| 使用真实 HTTPS 测试域名/受信任测试环境 | 验证目标 HTTPS 行为，而不仅是 localhost HTTP；不忽略证书错误 |
| 任意新标签页直接输入地址 | 单独验证首导航竞争，不能用扩展按钮路径代替 |
| 断网编辑、关闭后重开 | 文档与 outbox 可恢复；恢复服务后真实 ACK 才删除操作 |
| 新版本只下载一半 | 不发布残缺版本，上一完整版本仍可启动 |
| 账号切换、缓存缺失、会话断开 | 不跨账号回放、不伪报保存、不无限挂起 |
| 隐藏 frame 重建和浏览器进程重启 | 分别测试，不从前台成功推导后台或重启成功 |

清理测试缓存或站点数据必须限定隔离测试 profile；测试需要保留的文档 IDB 不能被顺手清掉。回放日志只记录资源标识、版本、命中来源和错误，不采集真实用户敏感内容。

技术 PoC 可行不等于发布已获许可：后续还需评估 debugger 权限告知、组织策略、数据处理和商店审核。缓存网站代码并在网站 origin 回放，与把下载代码放进扩展上下文执行不是同一情况；不要把两者混用，也不要先假定具体产品一定符合发布要求。[Chrome 远程代码说明](https://developer.chrome.com/docs/extensions/develop/migrate/remote-hosted-code)

## 9. 结论

“首次在线缓存 HTML/JS/CSS，二次在原 URL 离线打开”有明确的 CDP API 实现路径，但需要自己实现资源完整性、响应语义、会话管理和冷启动恢复。它可以作为替代网页 SW 外壳加载职责的实验方案，不是普通 MV2/MV3 网络拦截 API 的直接能力，也不是当前 Demo 已实现的功能。

最小实验宜从自研页面、白名单静态 GET、明确的扩展打开入口开始；先证明“没有网站 SW 和 HTTP 缓存兜底时，原 URL 真正由本地响应启动”，再扩展到自动导航、隐藏同步环境和完整产品生命周期。
