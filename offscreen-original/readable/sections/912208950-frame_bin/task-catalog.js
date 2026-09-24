/**
 * 阅读切片：任务执行描述、开关与周期目录。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../912208950-frame_bin.js，原位置 L89847。
 * TaskExecutionSpec（p$）：执行描述。A=context(1 Worker/2 iframe), j=URL, o=taskType, D=timeout, J=网络要求, F=认证要求, G=额外资格, B=参数。
 * PeriodicTaskDefinition（D$a）：周期定义。B=任务 ID,o=遥测类型,J=优先级,D=分钟周期,j=执行描述,A=标记,F=首次成功前加速。
 * buildPeriodicTaskCatalog（G$a）：按功能开关及周期创建任务目录，不是每次 heartbeat 都执行所有任务。
 * createPeriodicTaskDefinition（r$）：从配置读取分钟周期，再组合任务执行描述。
 * isPeriodicTaskEnabled（s$）：同时要求功能开关开启且周期大于零。
 * createDocsSwUpdateTask（E$a）：公共 Docs SW 资源更新任务；在 iframe 上下文执行。
 * createLocalChangesSyncTask（F$a）：本地改动同步任务描述；真正上传实现位于未采集的执行器。
 */
function TaskExecutionSpec(
  executionContext,
  executorUrl,
  taskType_2,
  timeoutMs,
  requiresNetwork,
  requiresAuth,
  requiresEligibility,
  taskParameters,
) {
  this.A = executionContext;
  this.j = executorUrl;
  this.o = taskType_2;
  this.D = timeoutMs;
  this.J = requiresNetwork;
  this.F = requiresAuth;
  this.G = requiresEligibility;
  this.B = taskParameters || null;
}
TaskExecutionSpec.prototype.getContext = ea("A");
function q$(a) {
  var c = new YF(a.j);
  c.A.remove("ouid");
  return "context: " + a.A + ", url: " + c.toString() + ", taskType: " + a.o;
}
function C$a(a, c, e) {
  var f = new o$();
  T(f, 1, a.o);
  c && T(f, 4, c);
  e && T(f, 5, e);
  if (a.B)
    if (((a = a.B.clone()), a instanceof n$)) K(f, n$, 2, a);
    else if (a instanceof m$) K(f, m$, 3, a);
    else throw Error("Unhandled parameter type.");
  return f;
}
/** PeriodicTaskDefinition（原 D$a）。
 * 周期定义。B=任务 ID,o=遥测类型,J=优先级,D=分钟周期,j=执行描述,A=标记,F=首次成功前加速。
 */
function PeriodicTaskDefinition(
  taskId,
  reportType,
  priority,
  periodMinutes,
  taskFlag,
  accelerateBeforeSuccess,
  executionSpec,
) {
  this.B = taskId;
  this.o = reportType;
  this.J = priority;
  this.D = periodMinutes;
  this.j = executionSpec;
  this.A = taskFlag;
  this.F = accelerateBeforeSuccess;
}
PeriodicTaskDefinition.prototype.K = ea("B");
/** createDocsSwUpdateTask（原 E$a）。
 * 公共 Docs SW 资源更新任务；在 iframe 上下文执行。
 */
function createDocsSwUpdateTask(flags) {
  return createPeriodicTaskDefinition(
    "service-worker-update",
    16,
    1,
    "docs-offline-swutpim",
    true,
    false,
    new TaskExecutionSpec(2, fO(flags), "service_worker_update", 3e5, true, false, false),
    flags,
  );
}
/** createLocalChangesSyncTask（原 F$a）。
 * 本地改动同步任务描述；真正上传实现位于未采集的执行器。
 */
function createLocalChangesSyncTask(flags) {
  return createPeriodicTaskDefinition(
    "local-changes-sync",
    5,
    1,
    "docs-offline-lcstpim",
    false,
    true,
    new TaskExecutionSpec(1, dO(flags), "local_changes_sync", 3e5, true, true, false),
    flags,
  );
}
/** buildPeriodicTaskCatalog（原 G$a）。
 * 按功能开关及周期创建任务目录，不是每次 heartbeat 都执行所有任务。
 */
function buildPeriodicTaskCatalog(flags) {
  var c = [];
  if (isPeriodicTaskEnabled("docs-offline-esmst", "docs-offline-mstpim", flags)) {
    var e = c.push;
    var f = createPeriodicTaskDefinition(
      "metadata-sync",
      4,
      0,
      "docs-offline-mstpim",
      true,
      true,
      new TaskExecutionSpec(1, dO(flags), "metadata", 3e5, true, true, true),
      flags,
    );
    e.call(c, f);
  }
  isPeriodicTaskEnabled("docs-offline-esbst", "docs-offline-swutpim", flags) &&
    c.push(createDocsSwUpdateTask(flags));
  isPeriodicTaskEnabled("docs-offline-edswut", "docs-offline-dswutpim", flags) &&
    ((e = c.push),
    (f = gO("/drive/serviceworker/update", flags)),
    (f = createPeriodicTaskDefinition(
      "drive-service-worker",
      13,
      1,
      "docs-offline-dswutpim",
      true,
      false,
      new TaskExecutionSpec(2, f, "drive_service_worker_update", 3e5, true, true, true),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-eshcst", "docs-offline-hcstpim", flags) &&
    ((e = c.push),
    (f = hO($va(), "/document/backgroundsync", flags)),
    (f = createPeriodicTaskDefinition(
      "homescreen-cello-sync",
      2,
      2,
      "docs-offline-hcstpim",
      true,
      false,
      new TaskExecutionSpec(2, f, "homescreen_cello_sync", 3e5, true, true, true),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-esdcst", "docs-offline-dcstpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "drive-cello-sync",
      1,
      2,
      "docs-offline-dcstpim",
      true,
      false,
      new TaskExecutionSpec(
        2,
        gO("/drive/_/dataservice/backgroundsync", flags),
        "drive_cello_sync",
        3e5,
        true,
        true,
        true,
      ),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-eslcst", "docs-offline-lcstpim", flags) &&
    c.push(createLocalChangesSyncTask(flags));
  isPeriodicTaskEnabled("docs-offline-esast", "docs-offline-astpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "auto-sync",
      6,
      3,
      "docs-offline-astpim",
      false,
      false,
      new TaskExecutionSpec(1, dO(flags), "auto_sync", 3e5, true, true, true),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-eswst", "docs-offline-wstpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "webfonts-sync",
      8,
      2,
      "docs-offline-wstpim",
      true,
      true,
      new TaskExecutionSpec(1, dO(flags), "webfonts_sync", 3e5, true, true, true),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-esist", "docs-offline-istpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "impression-sync",
      7,
      4,
      "docs-offline-istpim",
      false,
      true,
      new TaskExecutionSpec(1, dO(flags), "impressionSync", 3e5, true, true, false),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-esddt", "docs-offline-ddtpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "document-deletion",
      9,
      4,
      "docs-offline-ddtpim",
      false,
      true,
      new TaskExecutionSpec(1, dO(flags), "doc_deletion", 3e5, false, false, false),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-esuuct", "docs-offline-uuctpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "update-unsaved-changes",
      10,
      4,
      "docs-offline-uuctpim",
      false,
      true,
      new TaskExecutionSpec(2, fO(flags), "update_unsaved_changes", 3e5, false, false, false),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-esct", "docs-offline-ctpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "cleanup-task",
      11,
      4,
      "docs-offline-ctpim",
      false,
      true,
      new TaskExecutionSpec(2, fO(flags), "cleanup", 3e5, false, false, false),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-esrt", "docs-offline-rtpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "report-task",
      14,
      4,
      "docs-offline-rtpim",
      false,
      false,
      new TaskExecutionSpec(2, fO(flags), "report", 3e5, false, false, false),
      flags,
    )),
    e.call(c, f));
  isPeriodicTaskEnabled("docs-offline-esost", "docs-offline-sostpim", flags) &&
    ((e = c.push),
    (f = createPeriodicTaskDefinition(
      "sync-objects-sync",
      15,
      2,
      "docs-offline-sostpim",
      true,
      true,
      new TaskExecutionSpec(1, dO(flags), "sync_objects_sync", 3e5, true, true, true),
      flags,
    )),
    e.call(c, f));
  if (isPeriodicTaskEnabled("docs-offline-eodpswut", "docs-offline-odpswutpim", flags)) {
    e = c.push;
    f = YN.o();
    f = f.j == void 0 ? zK(flags, "gaia_session_id") : f.j;
    f = new YF(gO(f && f != "0" ? "/u/" + f + "/odp/serviceworker" : "/odp/serviceworker", flags));
    var g = zK(flags, "drive-host");
    f.A.add("origin", g);
    f.A.add("origin", window.origin);
    flags = createPeriodicTaskDefinition(
      "odp-service-worker",
      19,
      1,
      "docs-offline-odpswutpim",
      true,
      false,
      new TaskExecutionSpec(
        2,
        f.toString(),
        "one_details_pane_service_worker_update",
        3e5,
        true,
        true,
        true,
      ),
      flags,
    );
    e.call(c, flags);
  }
  return c;
}
/** isPeriodicTaskEnabled（原 s$）。
 * 同时要求功能开关开启且周期大于零。
 */
function isPeriodicTaskEnabled(enabledFlag, periodFlag, flags) {
  return xK(flags, enabledFlag) && yK(flags, periodFlag) > 0;
}
/** createPeriodicTaskDefinition（原 r$）。
 * 从配置读取分钟周期，再组合任务执行描述。
 */
function createPeriodicTaskDefinition(
  taskId,
  reportType,
  priority,
  periodFlag,
  taskFlag,
  accelerateBeforeSuccess,
  executionSpec,
  flags,
) {
  return new PeriodicTaskDefinition(
    taskId,
    reportType,
    priority,
    yK(flags, periodFlag),
    taskFlag,
    accelerateBeforeSuccess,
    executionSpec,
  );
}
