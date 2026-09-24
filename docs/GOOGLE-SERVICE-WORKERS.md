# Google Docs / Drive Service Worker：职责、缓存与离线启动链路

## 1. 结论与调查边界

这些 Service Worker（下文简称 SW）是 Google 离线方案的**网页请求与启动层**：它们负责入口路由、离线页面与依赖资源的准备、缓存版本管理，以及部分本地文档的启动决策。它们并非只缓存 HTML/JS/CSS，但也不是完整的编辑器或协同同步引擎。

最重要的区分是：**SW 已安装 ≠ 应用资源已准备好 ≠ 某篇文档可以离线编辑 ≠ 修改已经同步到服务器。** 这些状态需要分开存储、判断和呈现。

本次依据用户提供的 5 个启动脚本，继续下载其直接 `importScripts` 的 5 个实现 bundle，并额外保留 Drive root 配置中的 cache-proxy bundle。原始文件、阅读副本、来源与校验值见 [样本目录](../service-worker-original/README.md) 和 [来源清单](../service-worker-original/sources.json)。

样本中的构建标签包括：

- Docs editor：`editors.documents-frontend_20260916.00_p3`。
- Docs common / root：`docs.docs-offline_20260907.00_p0`。
- Drive：`drive.web-frontend_20260910.12_p2`。

调查性质是**这些特定版本的静态源码分析**，不是 Google 内部设计文档，也没有完成这些网页 SW 的在线/离线运行回归。下文的 Google 短符号仅用于定位当前快照，不是稳定 API。此前扩展或 Demo 的测试不能替代这次 SW 的运行验证。

证据口径：

- **源码可确认**：可在所归档的入口、配置和函数控制流中直接找到。
- **架构推断**：结合 SW 和扩展的职责提出的解释，不等于已证明 Google 所有链路。
- **设计建议**：适合自研文档系统借鉴的方案，不是声称 Google 必然采用的实现。

## 2. 为什么有五个入口？

原始文件多数是配置与加载包装层：Docs 设置 `_docs_flag_initialData` 后导入版本化代码；Drive 设置 `__initData`，导入代码后执行 `drive.sw.main()`。真正的请求处理在后续 bundle 中。

| 入口样本 | 主要职责 | 不应误解为 |
| --- | --- | --- |
| `docs.google.com-offline-root-serviceworker.js` | Docs 通用入口识别、依据本地文档类型转到对应编辑器 | 所有编辑器的资源缓存中心 |
| `docs.google.com-offline-common-serviceworker.js` | 公共离线页面、iframe 与 worker 脚本的缓存和更新 | 所有同步任务都在这个 SW 内执行 |
| `docs.google.com-document-offline-serviceworker.js` | 文档编辑器离线资源、文档启动决策、离线入口跳转和部分创建初始化 | 单纯的静态资源缓存，或完整协同引擎 |
| `drive.google.com-drive-serviceworker.js` | Drive 列表应用冷启动、静态资源与模块缓存 | 缓存了所有文件列表与文件正文 |
| `drive.google.com-drive-serviceworker_root.js` | Drive 根入口网络/缓存/重定向处理 | 与 Docs root 的行为完全相同 |

### scope 的重要限制

文件 URL 不足以确定它实际控制哪些页面：还需要注册代码中的 `scope`、浏览器当前注册记录，以及 `Service-Worker-Allowed` 响应头。默认 scope 与脚本目录有关，但可以在规则允许范围内调整。[Chrome：SW scope](https://developer.chrome.com/docs/workbox/service-worker-lifecycle#scope)、[Service Worker 规范](https://w3c.github.io/ServiceWorker/)。

这些 SW **不是每次请求必定依次穿过的五层中间件**。注册匹配和客户端控制关系决定由哪个 SW 接收事件；一个受控页面的跨域子资源请求也不能简单按子资源 URL 的域名决定归哪个 SW。

本次没有注册代码、响应头和浏览器注册快照，因此文中的路径匹配只能证明“实现有这个分支”，不能证明线上当前页面必然受它控制。

2026-09-24 补充：继续分析既有公共 iframe API 样本后，已找到历史版本客户端构造 `/document/`、`/offline/`、`/` 等 scope 并调用 register 的静态代码，见 [frame 专题第 10 节](EXTENSION-FRAME.md#10-对前一轮-sw-调查的补充静态注册-scope-已有线索)。前述限制现收窄为尚无当前浏览器的实际注册、controller、响应头与开关快照，不能将历史静态配置直接当作现状。

## 3. 从职责看整体结构

```text
网页请求与启动层
  Docs 通用入口 ── 路由到对应产品编辑器
  Docs 文档编辑器 SW ── 在线/本地启动选择、离线入口、编辑器资源
  Docs 公共离线 SW ── 公共 iframe、worker 脚本与基础页面
  Drive 主 SW ── 列表应用 coldstart、静态资源和模块缓存
  Drive root SW ── 根入口兜底
          │
          ├── Cache Storage：离线 HTML、资源、清单与准备状态
          └── IndexedDB：本地文档/元信息；Drive 另有模块缓存库

编辑与同步层（不能由上述缓存直接替代）
  页面中的编辑器 ── 本地模型、操作持久化、用户交互
  Google 同源 iframe / worker ── 后台任务与数据服务的其他组成部分
  扩展 background + offscreen ── 协调隐藏页面、消息和任务生命周期
  服务端 ── 权限、版本、协同与同步确认
```

这是职责图，不是已确认的全部 SW 注册拓扑。下半部分结合本仓库已有扩展分析；这些 SW 样本不足以还原完整的数据同步协议。

## 4. Docs root：先找到该进入哪个编辑器

**源码可确认：** root 实现识别通用入口、创建入口与 `/open?id=…` 等请求。对于 `/open`，它能查询本地文档信息，依据 `kix`、`ritz`、`punch`、`drawing` 等类型选择目标产品，再构造重定向 URL，包含 `rswr=true`。

典型链路：

```text
/open?id=<doc-id>
  → 解析请求
  → 查询本地文档元信息
  → 选择文档/表格/演示等目标入口
  → 返回重定向；无法本地处理时走后续网络策略
```

它的重点是**离线时也能完成入口分发**，不是给所有产品缓存完整应用。当前组合是客户端重定向策略优先，网络策略随后。安装阶段还包含受条件控制的静态路由注册与 `skipWaiting()`；激活阶段禁用 navigation preload 后接管客户端。

证据：[请求与类型解析 `OA` / `SA` / `VA`](../service-worker-original/formatted/docs-offline-root.js#L15822)、[本地路由 `HC.fetch` / `IC` / `JC`](../service-worker-original/formatted/docs-offline-root.js#L16817)、[策略组合 `FD`](../service-worker-original/formatted/docs-offline-root.js#L17578)。

**可借鉴的设计：** 如果产品有通用分享链接或多种编辑器，入口路由信息也应有本地表示。仅缓存最终编辑页，可能仍无法从通用链接离线进入。

## 5. Docs common：让公共离线基础设施也能启动

公共实现识别的路径包括：

```text
/offline/eventbusworker.js
/offline/extension/frame
/offline/fallback
/offline/flags
/offline/iframeapi
/offline/synctaskworker.js
/offline/taskiframe
```

它读取带账号信息的 `/offline/common/cachemanifest`，准备公共离线入口与关联依赖。针对匹配的 GET 请求，最终策略组合是缓存处理器优先、网络处理器兜底；动作 URL 的缓存键会归一化，保留 `ouid`、`Debug` 等规定参数，而不是保留全部临时参数。

这解释了扩展方案的一个重要依赖：扩展可以创建隐藏页面，但 Google 同源 iframe 及其 JS 若无法离线加载，隐藏页面本身并不能凭空产生同步能力。公共 SW 为这些页面和脚本提供离线启动资源；**缓存 `synctaskworker.js` 不等于 SW 本身承担了其中全部同步任务**。

消息控制面包含缓存更新、删除、存活检查、版本信息及更新状态。更新前还有账号一致性检查。安装与缓存准备并非同一个状态，详见第 8 节。

证据：[路径表](../service-worker-original/formatted/docs-offline-common.js#L15838)、[清单请求 `FD`](../service-worker-original/formatted/docs-offline-common.js#L17638)、[缓存匹配与参数归一化 `JD` / `KD`](../service-worker-original/formatted/docs-offline-common.js#L17677)、[消息处理](../service-worker-original/formatted/docs-offline-common.js#L18660)、[缓存→网络组合 `QF`](../service-worker-original/formatted/docs-offline-common.js#L19076)。

## 6. Docs document：资源可用之外，还要判断文档能否启动

### 6.1 不是所有请求都用同一种缓存策略

实现区分普通导航、显式离线入口、创建请求、静态资源和其他请求。可看到网络优先、缓存优先、延迟离线兜底、网络与本地启动竞争等策略。选择受到请求类型、功能开关和本地状态影响。

网络兜底也不是“任何失败都打开旧缓存”：代码专门处理 500 / 502 / 503、`docs-offline-fallback-if-possible` 响应头、文档缺失和本地模型需要重新同步等情况。不能据此给权限错误一律返回缓存。

证据：[策略选择 `kL` / `oL`](../service-worker-original/formatted/docs-editor.js#L21621)、[延迟兜底 `lK` / `mK` 和竞争 `tK`](../service-worker-original/formatted/docs-editor.js#L20948)、[网络响应处理 `XK` / `YK`](../service-worker-original/formatted/docs-editor.js#L21411)。

### 6.2 打开已有文档的核心链路

```text
打开文档 URL
  → 解析文档 ID / 账号 / 请求模式
  → 根据条件尝试网络或本地启动
  → 本地分支读取文档及应用元信息
  → 检查对应离线入口资源、缓存状态、modelNeedsResync
  → 按权限/模式选择 offline/edit、view、comment、viewcomments 等入口
  → 返回 302，将 id、ouri 等启动信息带给离线页面
  → 离线编辑器页面继续加载本地模型并处理编辑
```

这里缓存的是可复用的编辑器入口与依赖；某篇文档的可用性还取决于本地数据。HTML 命中不能代替文档模型完整性检查。

源码构造的离线入口包含 `/document/offline/...`，并通过 URL fragment 携带部分启动信息。因此这不是“始终保留原 URL、把请求直接替换成同一份 HTML”的唯一实现模式。自研产品若要求 `/doc/123` 不变，可以另行设计为 `respondWith` 编辑器 shell，再由 shell 读取本地文档。

证据：[离线 URL 构造 `yE`](../service-worker-original/formatted/docs-editor.js#L18086)、[302 响应 `GI`](../service-worker-original/formatted/docs-editor.js#L20053)、[读取文档和检查缓存/模型 `KK` / `QK` / `NK`](../service-worker-original/formatted/docs-editor.js#L21262)。

### 6.3 SW 也参与部分业务数据初始化

“SW 完全不碰文档数据”并不符合这个样本。离线创建分支会取得预留的未使用文档 ID，初始化文档记录及待处理队列记录，涉及 `pendingCreation`、snapshot、pending queue state、ACL 等内容并持久化。

但它只能证明 SW 参与了**创建与启动所需的初始化**，不能由此推导出所有编辑操作、冲突合并和上传确认都在 SW 中完成。

证据：[创建记录与写入 `ds`](../service-worker-original/formatted/docs-editor.js#L8805)、[未使用 ID 的消费 `js`](../service-worker-original/formatted/docs-editor.js#L8895)、[启动侧创建入口 `JK`](../service-worker-original/formatted/docs-editor.js#L21244)。

### 6.4 静态路由是一项受条件控制的优化

代码存在 `addRoutes` / `registerRouter` 检测及功能开关，路由源包括网络、fetch event、指定缓存和网络/处理器竞争；网络探测资源还可被定向到网络。

这说明该样本在尝试让部分请求不必经过完整 JS 决策过程。但本次没有验证目标 Chrome 版本、开关和安装结果，不能认为所有用户都走这套优化，也不能把它当作离线功能成立的唯一前提。

证据：[静态路由构造 `dL`](../service-worker-original/formatted/docs-editor.js#L21489)、[最终配置与策略装配](../service-worker-original/formatted/docs-editor.js#L22957)。

## 7. Drive：列表页冷启动与模块缓存

### 7.1 多个列表路由复用一个离线入口

Drive 主实现识别配置允许的列表路由，例如 my-drive、recent、starred、folders 等；路径解析还处理 `/drive/u/{n}/` 和 mobile 前缀。缓存处理器把匹配请求映射为 `offline/coldstart?ouid=<account>` 的缓存键。

这是**缓存键映射**，不等于每次都让浏览器导航到 coldstart URL。它使多个列表 URL 能使用同一离线启动资源。配置允许时还会准备 `_/dataservice/cacheproxy?ouid=<account>`。

请求处理按顺序尝试：navigation preload → 普通网络请求 → ModuleSetFetchService → CacheFetchService。各处理器是否适用、是否返回结果决定是否进入下一项，不应把它理解为每次执行四遍完整请求。

证据：[路由匹配 `Kr` / `Lr`](../service-worker-original/formatted/drive-main.js#L13603)、[准备与缓存键映射 `Mr` / `Nr` / `Or`](../service-worker-original/formatted/drive-main.js#L13626)、[策略装配 `Qr`](../service-worker-original/formatted/drive-main.js#L13669)。

### 7.2 资源准备有优先级，不是所有资源同时阻塞安装

当前启动配置中有主要 CSS/JS、图片字体等资源和额外资源分组。处理器对这些组使用不同的 `failFast`、提前返回等选项；主要资源与 coldstart 属于关键准备链路，部分图片等资源按尽力完成处理。

版本缓存名组合了 `dfesw-<ouid>-` 前缀与构建信息，并有更新和清理逻辑。不要由“配置里列了资源”推导出“安装完成时全部资源必然下载成功”。

证据：[CacheFetchService `Oo`](../service-worker-original/formatted/drive-main.js#L10834)、[缓存配置 `Wo` 与分组](../service-worker-original/formatted/drive-main.js#L10918)、[预缓存执行 `Po` / `Xo`](../service-worker-original/formatted/drive-main.js#L11010)。

### 7.3 IndexedDB 也用于 JS/CSS 模块缓存

Drive 的 ModuleSetFetchService 不只是按完整 URL 保存响应。它还使用 IndexedDB 的 `modules`、`cssModules`、`versions` 对象仓库，保存模块和版本信息，根据请求的模块集合重新组装响应，并执行版本清理。

这类缓存服务于 Google 的模块资源协议。自研系统如果已有带内容哈希的 JS/CSS chunk，通常优先使用完整资源缓存即可，不必照搬模块拼装协议。

证据：[模块存储与 schema](../service-worker-original/formatted/drive-main.js#L12323)、[模块重组 `hr`](../service-worker-original/formatted/drive-main.js#L12545)、[ModuleSetFetchService `or`](../service-worker-original/formatted/drive-main.js#L12785)。

### 7.4 Drive root 的补充作用

Drive root 的组合为 navigation preload → 网络 → 资源缓存 → 根路径重定向。RootFetchService 匹配 `/` 或 `/drive` 的 GET 请求，依据配置生成重定向；不能仅凭函数名推断它负责整个 Drive 离线数据层。

它的预缓存配置还引用了本次归档的 `drive-cache-proxy.js`。该文件是资源依赖，不是第六个直接导入的 SW；本次也没有完成其整个业务实现的追踪。

证据：[RootFetchService `Ep` 与组合 `Fp`](../service-worker-original/formatted/drive-root.js#L11843)。

**边界：** 列表页面能够 coldstart，不证明所有文件列表、搜索结果或文档内容均已缓存。完整文件数据的供给需要继续分析 cache-proxy、页面数据层和本地数据库。

## 8. Docs 资源版本管理：清单、完整性与更新状态

这是最值得借鉴的部分：它不是“请求碰巧经过，就顺手全部缓存”，而是以清单描述可启动的资源集合。

### 8.1 清单驱动准备

公共层读取 `/offline/common/cachemanifest`；编辑器层结合本地应用/版本信息选择 `/document/offline/cachemanifest` 等入口。动作资源请求中还能看到 `x-include-cachemanifest`，响应侧解析 `x-cachemanifest`，用于取得关联资源信息。

存储层区分版本化 manifest cache 和共享静态资源 archive，例如 `document_static_resource_archive`、`offlinecommon_static_resource_archive`。不同层的缓存键和账号分区策略不同，不能概括为“每一份静态资源都按用户复制一份”。

证据：[common 缓存命名](../service-worker-original/formatted/docs-offline-common.js#L15944)、[清单关联请求头](../service-worker-original/formatted/docs-offline-common.js#L16474)、[editor 清单选择](../service-worker-original/formatted/docs-editor.js#L19945)。

### 8.2 完成标记防止把半成品当成可启动版本

```text
取得清单
  → 打开版本缓存
  → 准备动作入口及关联静态资源
  → 准备链路成功后写入 //manifest_cache_is_complete
  → 读取端结合完成标记和一致性状态选择缓存
  → 更新协调逻辑清理不再需要的版本/资源
```

更新代码把完成标记的写入放在准备 Promise 成功之后，并存在失败删除/保留的条件分支；缓存筛选检查完整性与版本分组。这是**应用层的提交标记协议**，不是 Cache Storage 原生提供了跨资源原子事务。

不要把任意一个 HTML 已存在当作准备完成；也不要把“总能无条件保留最后一个完整版本”当作已证明的不变量。样本包含功能开关和多种失败处理，仍需要故障注入验证。

证据：[更新与完成标记 `JC.update` / `LC` / `OC` / `NC`](../service-worker-original/formatted/docs-offline-common.js#L16829)、[完整缓存筛选 `ZC`](../service-worker-original/formatted/docs-offline-common.js#L17118)、[更新与清理协调](../service-worker-original/formatted/docs-offline-common.js#L17268)。

### 8.3 SW 安装成功和离线准备成功是两件事

Docs 安装逻辑中，某些首次安装缓存准备失败会被捕获，而后续生命周期仍可继续。因此仅观察 registration 为 activated，不能向用户展示“离线已就绪”。

需要独立的缓存准备结果、失败原因和重试通道。消息控制面承担了这部分协调；删除缓存、检查版本和检查存活也不是 fetch 请求本身的职责。

证据：[common 安装 `qF`](../service-worker-original/formatted/docs-offline-common.js#L18553)、[editor 安装 `KL`](../service-worker-original/formatted/docs-editor.js#L21895)、[common 更新状态消息](../service-worker-original/formatted/docs-offline-common.js#L18700)。

## 9. 一个具体案例：在线准备、关闭浏览器、离线再打开文档

下面是把已确认职责串起来的**解释性案例**，不是本次已录制的端到端请求日志。

1. 在线启用离线能力时，网站注册相应 SW，并通过安装或后续消息触发资源准备；清单控制需要取得的入口和依赖。
2. 应用资源准备完成后有对应状态；另一路数据层还必须将目标文档的模型、元信息等写入本地。仅有第一个条件不够。
3. 关闭浏览器后，SW 不必常驻；缓存与 IndexedDB 承担持久化。浏览器可在后续受控请求发生时启动 SW 处理事件。SW 生命周期是事件驱动的，不能保证任意异步工作永不被终止。[规范：Service Worker lifetime](https://w3c.github.io/ServiceWorker/#service-worker-lifetime)。
4. 离线重新打开文档 URL，若该导航处于正确注册的控制范围，SW 按策略进入本地启动分支。
5. 本地元信息存在、模型允许启动、对应版本入口可用时，SW 选择离线编辑入口；编辑器页面再读取模型。任意条件缺失，都不能用“有缓存”掩盖失败。
6. 编辑后的持久化、重连上传、服务端确认，需要编辑器和同步层继续处理。扩展的隐藏页协调可以帮助后台任务，但不替代网页资源缓存与文档模型。

在这 5 个 SW 实现中未发现顶层 `sync` / `periodicsync` / `push` 事件注册。这只说明当前样本没有展示通过这些事件完成后台同步，**不代表 Google 整个系统都不使用相关能力**。

扩展与网页 SW 的区别、offscreen 的案例，另见 [Offscreen 说明](OFFSCREEN.md)；不用网页 SW 保留原 URL 的边界，见 [替代方案研究](OFFLINE-WITHOUT-SERVICE-WORKER.md)。

## 10. 自研离线文档系统如何借鉴

不建议按五个文件机械搭建五个 SW。Google 的产品、历史部署和账号体系复杂；单一产品可先用一个网页 SW，在内部按职责拆模块。

| 模块 | 负责什么 | 不能混入的判断 |
| --- | --- | --- |
| 请求路由 | 区分导航、静态资源、API、探测请求；限定 GET 与允许范围 | 不把所有请求都塞进缓存 |
| 资源版本管理 | 清单、版本、下载、完整性标记、旧版本回退与清理 | 安装完成不等于准备完成 |
| 本地启动策略 | 检查账号、文档模型、schema/应用版本、权限模式，选离线 shell | HTML 命中不等于文档完整 |
| 本地文档仓库 | 文档快照、元信息、持久化操作、待创建状态 | 不和可删除的应用资源混为一类 |
| 同步引擎 | 重试、幂等、版本协商、冲突处理、服务端 ACK | 网络恢复不等于同步完成 |
| 控制与状态通道 | 准备进度、错误、重试、清理与登出协调 | 不只暴露一个 online 布尔值 |

建议至少向 UI 区分三种状态：应用可离线启动、当前文档可离线打开、当前修改已获服务器确认。

落地顺序建议：

1. 先打通 `/doc/123` → 缓存 shell → IndexedDB 文档的冷启动；若要保持原地址，使用响应替换而非 Google 样本中的离线入口重定向。
2. 增加清单驱动的资源版本准备及完成标记，验证下载中断时仍能使用旧完整版本。
3. 将文档快照与待同步操作的持久化做成可靠提交边界，明确“本地已保存”和“云端已确认”。
4. 增加账号隔离、登出清理、权限变化和 schema 升级；公共静态资源可共享，私有数据必须有明确归属。
5. 再考虑 offscreen 后台执行、复杂竞速、模块级缓存或静态路由优化。不要直接照搬 `skipWaiting()`，应先验证新旧页面和数据结构兼容性。

这些是从样本提炼的设计建议，**本次没有将这些能力新增到 Demo 中**。目前 Demo 的实现和边界应以 [Demo 文档](../demo/README.md) 为准。

## 11. 下一步运行验证清单

| 验证场景 | 需要观察的结果 |
| --- | --- |
| 在线准备后完全关闭页面，再断网冷启动 | 不是依赖旧页面内存；入口、资源与模型都可恢复 |
| SW 已 activated，但资源下载中断 | UI 不误报离线就绪；下次可重试 |
| 新版本下载部分失败 | 不把半成品用于启动；旧完整版本是否仍可用 |
| shell 存在而文档模型缺失 | 明确提示该文档未离线准备，不展示空白编辑器冒充成功 |
| 文档模型存在而资源缓存被清理 | 区分资源缺失与文档丢失，不误删用户未同步操作 |
| 弱网、5xx、权限错误和需 resync | 对不同错误采取不同策略，不统一返回旧数据 |
| 账号切换、登出、多账号页面 | 缓存匹配和模型读取不能串号；清理范围准确 |
| 新旧页面并存及 schema 升级 | SW 更新不破坏仍打开的编辑器；操作队列兼容 |
| 离线编辑、关页、联网恢复 | 操作持久化、重试与服务器 ACK 可单独证明 |

Google 侧应先在对应 origin 的开发者工具中只读采集实际注册信息，例如：

```js
(await navigator.serviceWorker.getRegistrations()).map((registration) => ({
  scope: registration.scope,
  script: registration.active?.scriptURL,
  state: registration.active?.state,
}));
```

然后记录实际页面 controller、入口脚本响应头、cachemanifest 响应、缓存键变化以及失败分支。多 SW 的控制关系需要在这一步确认，而非从文件名猜测。

仍待补全：公共 HTML 的执行逻辑、真实清单结构与资源覆盖、cache-proxy 数据链路、eventbus / synctask worker 实现、编辑器的操作持久化与协同协议。这些缺口意味着当前归档**不是可独立回放 Google Docs 的完整离线镜像**。

## 12. 归档、隐私与阅读方式

- 阅读本文中的源码链接会进入 `service-worker-original/formatted/`，其行号只适用于当前格式化快照；查原始响应请使用同名 `dependencies/` 文件。
- `sources.json` 记录原始文件和格式化文件的 SHA-256。只做了格式化的文件不能称为可维护源码还原，也不应替换本项目重构代码参与构建。
- 用户提供的启动脚本原含账号信息；提交前已按用户要求替换具体邮箱、OUID 和头像地址。入口哈希对应当前脱敏副本，公开依赖字节不变；详见 [脱敏说明](RESEARCH-PRIVACY.md)。
- 本次文档与归档不构成 Google 全功能等价验证，不改变当前扩展或 Demo 的运行逻辑。
