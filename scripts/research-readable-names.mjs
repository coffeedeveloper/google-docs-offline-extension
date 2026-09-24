// 仅登记已沿控制流核实的名字。不同 bundle 的短符号不能互相套用。
const n = (name, note, params, locals) => ({ name, note, params, locals });

export const researchBundles = [
  {
    archive: "service-worker-original",
    file: "docs-offline-root.js",
    title: "Docs 通用入口路由",
    names: {
      OA: n(
        "RootRequestParser",
        "通用入口请求解析器；本地路由与网络策略共享解析结果。",
      ),
      HC: n(
        "LocalEditorRedirectHandler",
        "读取本地文档类型并构造编辑器 302；不能处理时交给后续策略。",
        ["editorCatalog", "flags"],
      ),
      IC: n(
        "resolveRootRedirectUrl",
        "区分 /open、创建和产品入口；规范化后未变化则返回 null。",
        ["redirectHandler", "requestContext"],
      ),
      JC: n(
        "resolveEditorUrlFromLocalDocument",
        "本地文档类型决定编辑器；保留 resourcekey、usp、rswr 参数规则。",
        ["redirectHandler", "documentId", "entrySource"],
      ),
      LC: n(
        "readLocalDocumentForRedirect",
        "通过本地数据库回调取得文档元信息，不请求服务端正文。",
        ["documentId", "localStore"],
      ),
      KC: n(
        "EDITOR_PATH_BY_TYPE",
        "编译快照中的 kix/ritz/punch/drawing 产品路由表。",
      ),
      NC: n(
        "RootFetchStrategyChain",
        "依次组合本地重定向与网络处理；失败分类沿用原逻辑。",
      ),
      FD: n(
        "rootWorkerServices",
        "根 SW 的最终服务装配；不代表实际注册 scope 已经确认。",
      ),
    },
    sections: [
      {
        name: "root-routing",
        from: "HC",
        to: "NC",
        description: "入口识别、本地文档查找与编辑器跳转",
      },
    ],
  },
  {
    archive: "service-worker-original",
    file: "docs-offline-common.js",
    title: "Docs 公共离线资源",
    names: {
      ED: n(
        "CommonManifestUrlProvider",
        "读取本地用户信息及调试开关，为公共资源清单提供入口。",
      ),
      FD: n(
        "getCommonManifestUrls",
        "为当前账号构造 /offline/common/cachemanifest；无用户时返回空列表。",
        ["manifestProvider"],
      ),
      JD: n(
        "CommonCacheFetchHandler",
        "优先读取公共离线资源；extension/frame 有独立的后处理例外。",
      ),
      KD: n(
        "normalizeCommonCacheKey",
        "仅保留 ND 白名单参数；不能直接删除 ouid 或把账号缓存混用。",
        ["requestContext"],
      ),
      ND: n(
        "COMMON_CACHE_QUERY_ALLOWLIST",
        "动作资源缓存键允许保留的查询参数。",
      ),
      LD: n(
        "readCommonCachedResponse",
        "区分未缓存、资源损坏与有效响应，不把任何命中都当成功。",
        ["cacheHandler", "requestContext", "cacheKey"],
      ),
      JC: n(
        "ManifestCacheUpdater",
        "准备单个版本缓存；成功写入完整标记后才可被完整版本选择器使用。",
      ),
      KC: n(
        "getManifestCacheName",
        "从缓存类型、构建和清单信息计算目标缓存名。",
        ["manifestUpdater"],
      ),
      LC: n(
        "populateAndMarkManifestComplete",
        "先等待 NC 的资源准备链路成功，再写 //manifest_cache_is_complete；不是原生事务。",
        ["manifestUpdater", "versionCache", "previousState"],
      ),
      OC: n(
        "handleManifestUpdateFailure",
        "是否保留旧完整缓存受功能开关和旧状态影响，不是无条件保留。",
        ["manifestUpdater", "updateError", "diagnostics"],
      ),
      kD: n(
        "checkCacheUpdateAccount",
        "更新前比对本地账号与启动配置，记录不一致状态。",
        ["cacheCoordinator", "updateState"],
      ),
      lD: n(
        "updateManifestBatchAndCleanup",
        "先等待各更新结束，处理版本/资源清理，再传播更新 Promise 的失败。",
        ["cacheCoordinator", "manifestGroup", "manifests", "updateState"],
      ),
      rD: n(
        "deleteManagedCaches",
        "删除受管理缓存；这是破坏性控制面操作，不应在真实账号中随意调用。",
        ["cacheCoordinator"],
      ),
      AF: n("registerCacheMessageHandler", "按协议类型登记唯一处理器。", [
        "messageRouter",
        "handler",
      ]),
      BF: n(
        "handleCommonWorkerMessage",
        "验证数组消息和回复端口，将异步处理纳入 waitUntil。",
        ["messageRouter", "messageEvent"],
      ),
      FF: n(
        "dispatchCacheControlRequest",
        "根据固定数字协议派发；不重命名 wire 字段或改变返回结构。",
        ["messageRouter", "controlRequest"],
      ),
      HF: n("CacheUpdateStatusHandler", "type 7：查询缓存更新状态。"),
      IF: n("DeleteCachesHandler", "type 1：删除缓存，不是普通缓存读取。"),
      JF: n("BuildLabelHandler", "type 8：返回当前构建标签。"),
      KF: n("CacheLivenessHandler", "type 2：返回存活响应；不证明缓存已完整。"),
      LF: n(
        "UpdateCachesHandler",
        "type 0：触发 cache_only_update 并包装失败。",
      ),
      PF: n(
        "CommonWorkerEventBindings",
        "连接浏览器生命周期、fetch 与 message 事件。",
      ),
      QF: n("commonWorkerServices", "最终装配缓存优先与网络兜底策略。"),
    },
    sections: [
      {
        name: "manifest-update",
        from: "JC",
        to: "OC",
        description: "版本准备、完成标记与失败处理入口",
      },
      {
        name: "common-cache-routing",
        from: "ED",
        to: "LD",
        description: "公共清单入口、缓存键与缓存读取",
      },
      {
        name: "cache-control-messages",
        from: "AF",
        to: "LF",
        description: "更新、删除、存活与版本查询控制面",
      },
    ],
  },
  {
    archive: "service-worker-original",
    file: "docs-editor.js",
    title: "Docs 编辑器离线启动",
    names: {
      ds: n(
        "initializeOfflineDocumentRecords",
        "离线创建涉及 snapshot、ACL、pendingCreation 与待处理队列；不是全部协同算法。",
      ),
      js: n(
        "consumeReservedDocumentId",
        "消费预留未使用文档 ID，用于离线创建。",
      ),
      yE: n(
        "buildOfflineEditorUrl",
        "构造 edit/view/comment 等离线入口及启动参数；保留原 fragment 编码。",
      ),
      GI: n("createOfflineRedirectResponse", "生成离线入口的 302 响应。", [
        "offlineUrl",
      ]),
      lK: n(
        "DelayedLocalFallback",
        "等待窗口与本地准备分离；cancel 不等于中断所有已启动操作。",
        ["logger", "localHandler", "requestContext", "flags"],
      ),
      mK: n(
        "waitForLocalFallbackWindow",
        "保留 4 秒及后续 18 秒分支和弱网检测，不能简单改为固定 timeout。",
        ["fallback"],
      ),
      nK: n(
        "prepareDelayedLocalFallback",
        "按请求模式和开关决定是否提前准备本地响应。",
        ["fallback"],
      ),
      oK: n(
        "getDelayedLocalFallback",
        "先检查取消状态；必要时创建并复用本地启动 Promise。",
        ["fallback"],
      ),
      tK: n(
        "NetworkLocalRaceHandler",
        "网络与延迟本地分支竞争；最终仍检查结果是否可用。",
      ),
      JK: n(
        "createDocumentForOfflineLaunch",
        "创建分支取得文档信息后复用离线启动校验。",
      ),
      KK: n(
        "readDocumentForOfflineLaunch",
        "先读本地文档，再检查可启动的应用资源。",
      ),
      QK: n(
        "validateDocumentAndCachedShell",
        "拒绝 modelNeedsResync、缓存需更新等状态；shell 存在不等于文档可用。",
        [
          "launchHandler",
          "requestContext",
          "userInfo",
          "actionInfo",
          "appInfo",
          "documentRecord",
          "variant",
        ],
      ),
      NK: n(
        "findPrimaryOrAlternateShell",
        "按原顺序查两个入口候选，不并行改变优先级。",
        ["launchHandler", "primaryUrl", "alternateUrl"],
      ),
      XK: n(
        "EditorNetworkFetchHandler",
        "先等待 navigation preload，再尝试网络；保留服务器状态和离线兜底条件。",
        ["networkHandler", "logger", "flags"],
      ),
      YK: n(
        "classifyEditorNetworkResponse",
        "包装成功响应，区分 404/410、指定服务端错误及服务器建议兜底；不能一律改为本地成功。",
        ["networkHandler", "requestContext", "networkResponse"],
      ),
      dL: n(
        "buildEditorStaticRoutes",
        "受开关与浏览器能力约束的静态路由优化，不是离线成立的唯一前提。",
      ),
      kL: n(
        "handleEditorFetchEvent",
        "只处理匹配的 GET；区分禁用资源、动作入口、离线导航和普通资源。",
        ["workerController", "fetchEvent"],
      ),
      oL: n(
        "chooseEditorActionStrategy",
        "依据请求模式、开关和客户端状态选择缓存/网络/竞争策略。",
        ["workerController", "requestContext", "actionInfo"],
      ),
      nL: n(
        "chooseOfflineNavigationStrategy",
        "已有离线入口仍需区分在线可恢复路径与本地状态。",
        ["workerController", "requestContext"],
      ),
    },
    sections: [
      {
        name: "network-local-race",
        from: "lK",
        to: "tK",
        description: "延迟本地兜底与网络竞争",
      },
      {
        name: "document-launch",
        from: "JK",
        to: "NK",
        description: "文档读取、模型状态与应用 shell 校验",
      },
      {
        name: "editor-fetch-routing",
        from: "kL",
        to: "nL",
        description: "fetch 入口和策略选择",
      },
    ],
  },
  {
    archive: "service-worker-original",
    file: "drive-main.js",
    title: "Drive 列表页冷启动",
    names: {
      Oo: n(
        "CacheFetchService",
        "浏览器缓存策略适配器：安装准备、读取和清理委托给配置服务。",
        ["cacheConfig"],
      ),
      Wo: n("DriveCacheConfig", "版本缓存名、预缓存组和资源匹配配置。"),
      Po: n(
        "precacheResourceGroup",
        "保留 failFast、alwaysFetch、resolveImmediately 等每资源选项。",
      ),
      or: n(
        "ModuleSetFetchService",
        "读取模块版本并组装响应；不是文档正文缓存。",
      ),
      hr: n(
        "assembleCachedModuleResponse",
        "根据请求模块集合重组资源响应，保留模块协议顺序。",
      ),
      ur: n(
        "NavigationPreloadFetchService",
        "尝试浏览器 navigation preload 的响应。",
      ),
      wr: n("NetworkFetchService", "普通网络请求处理器。"),
      xr: n(
        "OrderedFetchServiceChain",
        "按顺序尝试适用的 fetch service；并非无条件执行全部处理器。",
      ),
      zr: n(
        "DriveWorkerController",
        "协调 install/activate/fetch 生命周期及处理器链。",
      ),
      Kr: n("DriveListRouteMatcher", "保存允许离线 coldstart 的列表路由。", [
        "allowedRoutes",
      ]),
      Lr: n(
        "matchesDriveListRoute",
        "归一化 /drive/u/{n}/ 与 mobile 前缀后匹配路由；第二参数按原实现复用为路径数组和路由段。",
        ["routeMatcher", "urlOrRouteParts"],
        { c: "driveSegmentIndex" },
      ),
      Mr: n(
        "DriveColdstartCacheConfig",
        "将多个列表入口映射到同账号的 coldstart 缓存键。",
      ),
      Nr: n(
        "getCriticalDriveBootRequests",
        "coldstart 与可选 cacheproxy 作为关键准备请求。",
        ["coldstartConfig"],
      ),
      Or: n("getDriveCacheProxyRequest", "为当前账号构造 cacheproxy 请求。", [
        "coldstartConfig",
      ]),
      Pr: n(
        "matchesDriveCacheProxyRequest",
        "仅在配置允许时识别 cacheproxy 路径。",
        ["coldstartConfig", "request"],
      ),
      Rr: n("DriveMainWorker", "主 SW 控制器，使用列表应用的策略装配。"),
      Qr: n(
        "createDriveMainFetchChain",
        "preload → network → module set → cache；顺序不能随意调整。",
        ["logger", "coldstartConfig", "moduleConfig"],
      ),
      Sr: n(
        "startDriveMainWorker",
        "读取 __initData，初始化日志、配置与浏览器事件绑定。",
      ),
    },
    sections: [
      {
        name: "drive-coldstart",
        from: "Kr",
        to: "Qr",
        description: "列表路由、coldstart/cacheproxy 与策略装配",
      },
      {
        name: "drive-cache-service",
        from: "Oo",
        to: "Wo",
        description: "CacheFetchService 的资源准备与读取接口",
      },
    ],
  },
  {
    archive: "service-worker-original",
    file: "drive-root.js",
    title: "Drive 根入口兜底",
    names: {
      Ep: n(
        "RootRedirectFetchService",
        "仅匹配 GET / 或 /drive，按配置生成重定向。",
        ["redirectPath"],
      ),
      Fp: n(
        "DriveRootWorker",
        "根入口装配：preload → network → cache → redirect。",
      ),
      Gp: n("startDriveRootWorker", "读取根 SW 启动配置并注册控制器。"),
      pp: n(
        "NavigationPreloadFetchService",
        "根 SW 的 preload 处理器，与主 SW 属于不同编译快照。",
      ),
      qp: n("NetworkFetchService", "网络兜底处理器。"),
      sn: n("CacheFetchService", "使用根 SW 配置管理和读取资源缓存。"),
      rp: n(
        "OrderedFetchServiceChain",
        "保持各处理器顺序以及请求不适用的跳过规则。",
      ),
    },
    sections: [
      {
        name: "drive-root-routing",
        from: "Ep",
        to: "Fp",
        description: "根路径重定向与策略链",
      },
    ],
  },
  {
    archive: "service-worker-original",
    file: "drive-cache-proxy.js",
    title: "Drive cache-proxy 启动边界",
    names: {
      hNa: n(
        "startEmbeddedCacheProxy",
        "仅在嵌入页中启动；握手后优先 SharedWorker，否则 Worker，并连接消息桥。具体数据事务仍待研究。",
      ),
      zha: n(
        "initializeDedicatedDataWorker",
        "专用 Worker 的服务初始化链；保留原 await 顺序。",
      ),
      Aha: n(
        "initializeSharedDataWorker",
        "监听 connect，为每个端口装配数据服务会话。",
      ),
      tza: n("isDedicatedWorkerContext", "检测 DedicatedWorkerGlobalScope。"),
      uza: n("isSharedWorkerContext", "检测 SharedWorkerGlobalScope。"),
    },
    sections: [
      {
        name: "cache-proxy-bootstrap",
        from: "hNa",
        to: "hNa",
        description:
          "嵌入页握手与 SharedWorker/Worker 选择；不声称还原全部数据层",
      },
    ],
  },
  {
    archive: "offscreen-original",
    file: "912208950-frame_bin.js",
    title: "Scheduler frame 调度与执行",
    names: {
      $N: n(
        "TaskStatsStore",
        "读取 docs-tasksStats_default；损坏时清空并报告。字段 5 表示曾经成功，不是最近结果。",
        ["logger"],
      ),
      Vva: n(
        "getOrCreateTaskStats",
        "返回统计记录的 clone，避免调用方未保存就污染存储状态。",
        ["statsStore", "taskId"],
      ),
      Wva: n(
        "saveTaskStats",
        "写入 clone 后序列化全部任务统计到 localStorage。",
        ["statsStore", "statsRecord"],
      ),
      p$: n(
        "TaskExecutionSpec",
        "执行描述。A=context(1 Worker/2 iframe), j=URL, o=taskType, D=timeout, J=网络要求, F=认证要求, G=额外资格, B=参数。",
        [
          "executionContext",
          "executorUrl",
          "taskType",
          "timeoutMs",
          "requiresNetwork",
          "requiresAuth",
          "requiresEligibility",
          "taskParameters",
        ],
      ),
      D$a: n(
        "PeriodicTaskDefinition",
        "周期定义。B=任务 ID,o=遥测类型,J=优先级,D=分钟周期,j=执行描述,A=标记,F=首次成功前加速。",
        [
          "taskId",
          "reportType",
          "priority",
          "periodMinutes",
          "taskFlag",
          "accelerateBeforeSuccess",
          "executionSpec",
        ],
      ),
      G$a: n(
        "buildPeriodicTaskCatalog",
        "按功能开关及周期创建任务目录，不是每次 heartbeat 都执行所有任务。",
        ["flags"],
      ),
      r$: n(
        "createPeriodicTaskDefinition",
        "从配置读取分钟周期，再组合任务执行描述。",
        [
          "taskId",
          "reportType",
          "priority",
          "periodFlag",
          "taskFlag",
          "accelerateBeforeSuccess",
          "executionSpec",
          "flags",
        ],
      ),
      s$: n("isPeriodicTaskEnabled", "同时要求功能开关开启且周期大于零。", [
        "enabledFlag",
        "periodFlag",
        "flags",
      ]),
      E$a: n(
        "createDocsSwUpdateTask",
        "公共 Docs SW 资源更新任务；在 iframe 上下文执行。",
        ["flags"],
      ),
      F$a: n(
        "createLocalChangesSyncTask",
        "本地改动同步任务描述；真正上传实现位于未采集的执行器。",
        ["flags"],
      ),
      H$a: n(
        "OfflinePolicyCoordinator",
        "调度后检查企业策略及宽限期，不等同于网络状态。",
      ),
      I$a: n(
        "enforceOfflinePolicyAfterBatch",
        "策略失效需考虑上次允许时间与宽限期；不能立即清空离线文档。",
        ["policyCoordinator"],
      ),
      K$a: n(
        "syncBeforePolicyOptOut",
        "若可执行则先尝试本地改动任务，再进入退出流程；不是上传 ACK 证明。",
        ["policyCoordinator"],
      ),
      L$a: n(
        "LocalOfflineUserState",
        "查询当前离线启用状态、账号和 opt-in 时间。",
      ),
      I$: n(
        "TaskExecutorBase",
        "检查资格、创建运行器并跟踪进行中的任务；析构时停止任务。",
      ),
      Z$a: n(
        "getTaskIneligibilityReason",
        "网络、认证或额外资格不足返回原因码；null 才可执行。",
        ["executor", "executionSpec"],
      ),
      J$: n(
        "TaskRunner",
        "单任务生命周期：超时、取消、消息、成功/失败收口；o.promise 是完成结果。",
      ),
      t$: n(
        "getTaskCompletionCode",
        "从运行器结果中读取状态码，不代表服务端已确认全部修改。",
        ["taskRunner"],
      ),
      $$a: n(
        "sendTaskRunnerRequest",
        "每次请求使用 MessageChannel；运行器完成时关闭回复端口。",
        ["taskRunner", "taskRequest"],
      ),
      N$: n("IframeTaskExecutor", "创建 iframe 任务运行器。"),
      O$: n("IframeTaskRunner", "等待子 iframe 握手，完成或取消后释放子页面。"),
      P$: n("WorkerTaskExecutor", "创建专用 Worker 任务运行器。"),
      Q$: n("WorkerTaskRunner", "创建 Worker，传递请求并在结束时 terminate。"),
      S$: n(
        "TaskExecutorDispatcher",
        "context 1 分派 Worker，context 2 分派 iframe；属性 F/D 保留内部 ABI。",
      ),
      kab: n(
        "selectExecutorForContext",
        "不支持的 context 直接抛错，不能默默改用另一种执行器。",
        ["dispatcher", "executionContext"],
      ),
      T$: n("UserTaskEventChannel", "按账号命名的事件通道，用于广播任务结果。"),
      V$: n(
        "PeriodicTaskScheduler",
        "D=任务目录，B=统计存储，G=分派器，A=当前运行器，j=运行标记，o=事件通道。",
        ["statsStore", "dispatcher", "unusedLogger", "flags"],
      ),
      oab: n(
        "runNextDueTask",
        "周期批次串行执行；先记录开始，再执行、保存结果、广播，然后递归选择。",
        ["scheduler"],
        { c: "taskDefinition", e: "statsRecord", f: "reportContext" },
      ),
      pab: n(
        "selectNextDueTask",
        "按资格、分钟周期、曾成功标记及失败次数筛选；排序后只取一个，不与按文档即时任务互斥。",
        ["scheduler"],
        {
          c: "nowMs",
          e: "candidates",
          f: "taskIndex",
          g: "taskDefinition",
          h: "statsRecord",
          k: "failureCountOrLatestTime",
          l: "periodOrOverdueMinutes",
        },
      ),
      qab: n("DueTaskCandidate", "保存任务、统计和逾期分钟数供优先级排序。", [
        "taskDefinition",
        "statsRecord",
        "overdueMinutes",
      ]),
      Z$: n(
        "SchedulerFrameController",
        "与扩展握手并处理 FrameRequest；D=周期调度器,M=即时任务分派器,F=认证追踪器,B=用户状态。",
      ),
      Wab: n("installPeriodicTaskCatalog", "把启用的任务加入周期调度目录。", [
        "frameController",
      ]),
      Xab: n(
        "connectForLocalOfflineUser",
        "根据本地离线状态决定发送连接或未启用通知。",
        ["frameController"],
      ),
      Yab: n(
        "connectEnabledOfflineUser",
        "先启动认证追踪，再发送 WebsiteRequest type 1 和业务端口；不是启动周期调度。",
        ["frameController"],
      ),
      Zab: n(
        "notifyOfflineUserUnavailable",
        "发送 WebsiteRequest type 3，可携带其他本地账号。",
        ["frameController", "otherAccount"],
      ),
      $ab: n(
        "sendExtensionRequest",
        "回复端口与业务端口用途不同；目标 origin 和协议数组保持不变。",
        ["frameController", "extensionRequest", "businessPort"],
      ),
      abb: n(
        "dispatchFrameRequest",
        "type 0 命名事件，type 2 多文档同步，type 3 条件触发周期批次。",
        ["frameController", "frameRequest"],
      ),
      cbb: n(
        "handleNamedFrameEvent",
        "heartbeat 先处理宽限等待并核实启用状态，再启动批次。",
        ["frameController", "eventName"],
      ),
      ebb: n(
        "getRemainingOptInDelay",
        "根据本地 opt-in 时间与条件计算尚需等待的毫秒数。",
        ["frameController"],
      ),
      fbb: n(
        "startPeriodicBatchIfIdle",
        "批次已运行就返回；新批次完成后调用策略检查。",
        ["frameController"],
      ),
      dbb: n(
        "runImmediateMultiDocumentSync",
        "独立即时任务；超时 min(文档数×120秒,600秒)，不是周期目录中的一项。",
        ["frameController", "documentIds"],
      ),
      $$: n(
        "holdExtensionConnectionDuring",
        "任务 Promise 生命周期内连接扩展，完成后断开；另有最长连接计时。",
        ["frameController", "operation"],
      ),
    },
    sections: [
      {
        name: "task-stats",
        from: "$N",
        to: "Wva",
        description: "持久化任务统计",
      },
      {
        name: "task-catalog",
        from: "p$",
        to: "r$",
        description: "任务执行描述、开关与周期目录",
      },
      {
        name: "policy",
        from: "H$a",
        to: "K$a",
        description: "策略宽限期与退出前同步",
      },
      {
        name: "task-runner",
        from: "I$",
        to: "Q$",
        until: "jab",
        description: "执行资格、单任务生命周期、iframe 与 Worker 运行器",
      },
      {
        name: "periodic-scheduler",
        from: "S$",
        to: "qab",
        description: "执行器分派、广播、周期任务选择与执行",
      },
      {
        name: "frame-controller",
        from: "Z$",
        to: "$$",
        description: "扩展握手、heartbeat 与即时多文档同步",
      },
    ],
  },
];

const frame = researchBundles.at(-1).names;
frame["V$"].methods = {
  start: { locals: { a: "scheduler", c: "eventBusProvider" } },
};
frame["S$"].methods = {
  execute: {
    params: ["executionSpec", "reportContext"],
    locals: { e: "dispatcher", f: "reportSession", g: "taskRunner" },
  },
  o: { params: ["executionSpec"] },
};
frame["Z$"].methods = {
  Ba: {
    params: ["messageEvent"],
    locals: { c: "frameController", e: "frameRequest" },
  },
};
