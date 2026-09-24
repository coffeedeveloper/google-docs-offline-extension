/**
 * 阅读切片：策略宽限期与退出前同步。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../912208950-frame_bin.js，原位置 L90174。
 * OfflinePolicyCoordinator（H$a）：调度后检查企业策略及宽限期，不等同于网络状态。
 * enforceOfflinePolicyAfterBatch（I$a）：策略失效需考虑上次允许时间与宽限期；不能立即清空离线文档。
 * syncBeforePolicyOptOut（K$a）：若可执行则先尝试本地改动任务，再进入退出流程；不是上传 ACK 证明。
 */
function OfflinePolicyCoordinator(a, c, e, f, g) {
  this.D = a;
  this.A = c;
  this.B = e;
  this.j = f;
  this.o = g;
}
/** enforceOfflinePolicyAfterBatch（原 I$a）。
 * 策略失效需考虑上次允许时间与宽限期；不能立即清空离线文档。
 */
function enforceOfflinePolicyAfterBatch(policyCoordinator) {
  return new iI(function (c, e) {
    A$a(policyCoordinator.D, c, e);
  }).then(function (c) {
    var e = C.localStorage.getItem("docs-lspa");
    e = e != null ? Number(e) : null;
    var f = { lastSeenPolicyAllowed: e, policyAllows: c };
    if (c || e === null) Zva(Za());
    else {
      if (Za() - e > 864e5)
        return (
          J$a(
            policyCoordinator.o,
            Error("Save local changes and disable offline after grace period."),
            yK(policyCoordinator.j, "docs-offline-opllp"),
            f,
          ),
          syncBeforePolicyOptOut(policyCoordinator)
        );
      J$a(
        policyCoordinator.o,
        Error(
          "Offline not disabled during policy loss enforcement, since client is within grace period.",
        ),
        yK(policyCoordinator.j, "docs-offline-opllp"),
        f,
      );
    }
    return lI();
  });
}
/** syncBeforePolicyOptOut（原 K$a）。
 * 若可执行则先尝试本地改动任务，再进入退出流程；不是上传 ACK 证明。
 */
function syncBeforePolicyOptOut(policyCoordinator) {
  var c = createLocalChangesSyncTask(policyCoordinator.j),
    e = c.j;
  if (!policyCoordinator.A.o(e)) return s$a(policyCoordinator.B);
  c = CL(BL(new AL(), c.o), false);
  return getTaskCompletionCode(policyCoordinator.A.execute(e, c)).then(function () {
    return s$a(policyCoordinator.B);
  });
}
