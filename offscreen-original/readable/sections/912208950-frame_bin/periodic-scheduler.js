/**
 * 阅读切片：执行器分派、广播、周期任务选择与执行。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../912208950-frame_bin.js，原位置 L90995。
 * TaskExecutorDispatcher（S$）：context 1 分派 Worker，context 2 分派 iframe；属性 F/D 保留内部 ABI。
 * selectExecutorForContext（kab）：不支持的 context 直接抛错，不能默默改用另一种执行器。
 * UserTaskEventChannel（T$）：按账号命名的事件通道，用于广播任务结果。
 * PeriodicTaskScheduler（V$）：D=任务目录，B=统计存储，G=分派器，A=当前运行器，j=运行标记，o=事件通道。
 * runNextDueTask（oab）：周期批次串行执行；先记录开始，再执行、保存结果、广播，然后递归选择。
 * selectNextDueTask（pab）：按资格、分钟周期、曾成功标记及失败次数筛选；排序后只取一个，不与按文档即时任务互斥。
 * DueTaskCandidate（qab）：保存任务、统计和逾期分钟数供优先级排序。
 */
function TaskExecutorDispatcher(a, c, e, f, g, h, k, l, p, r, u) {
  uE.call(this);
  this.j = r || new R$();
  this.B = l;
  (this.A = Math.floor(Math.random() * 100) < yK(this.B, "docs-offline-teirr")) &&
    (a.j.executorReportingEnabled = "true");
  this.F = new WorkerTaskExecutor(a, c, e, f, g, h, k, p, this.B, u);
  this.qa(this.F);
  this.D = new IframeTaskExecutor(a, c, e, f, g, h, k, p, l, u);
  this.qa(this.D);
}
w(TaskExecutorDispatcher, uE);
/** selectExecutorForContext（原 kab）。
 * 不支持的 context 直接抛错，不能默默改用另一种执行器。
 */
function selectExecutorForContext(dispatcher, executionContext) {
  switch (executionContext) {
    case 1:
      return dispatcher.F;
    case 2:
      return dispatcher.D;
    default:
      throw Error("Not supported execution context:" + executionContext);
  }
}
TaskExecutorDispatcher.prototype.execute = function (executionSpec, reportContext) {
  var dispatcher = this,
    reportSession = lab(this, reportContext),
    taskRunner = selectExecutorForContext(this, executionSpec.getContext()).execute(
      executionSpec,
      reportContext,
    );
  getTaskCompletionCode(taskRunner).then(function (h) {
    var k = taskRunner.ja;
    if (dispatcher.A) {
      var l = new DL();
      U(l, 1, jab(h));
      S(l, 2, k);
      h = new EL();
      K(h, AL, 23, reportContext);
      K(h, DL, 24, l);
      l = g8(reportSession);
      K(l, EL, 34, h);
      dispatcher.j.ym(reportSession);
      dispatcher.j.sf(reportSession);
    }
  });
  return taskRunner;
};
TaskExecutorDispatcher.prototype.o = function (executionSpec) {
  return selectExecutorForContext(this, executionSpec.getContext()).o(executionSpec);
};
function lab(a, c) {
  if (!a.A) return null;
  var e = new EL();
  K(e, AL, 23, c);
  c = a.j.Qe(81008, 0);
  var f = g8(c);
  K(f, EL, 34, e);
  a.j.sf(c);
  return a.j.Qe(81009, 1);
}
function mab(a, c, e) {
  xE.call(this, "broadcast-message", a);
  this.channel = c;
  this.data = e;
}
w(mab, xE);
/** UserTaskEventChannel（原 T$）。
 * 按账号命名的事件通道，用于广播任务结果。
 */
function UserTaskEventChannel(a, c) {
  ZE.call(this);
  this.o = false;
  this.j = null;
  this.B = new mG(this);
  this.qa(this.B);
  this.F = a;
  this.D = c;
}
w(UserTaskEventChannel, ZE);
UserTaskEventChannel.prototype.connect = function () {
  this.o ||
    ((this.o = true),
    (this.j = C9a(this.F)),
    this.B.ia(this.j, "message", this.G.bind(this)),
    this.j.start());
};
UserTaskEventChannel.prototype.Ie = function (a, c) {
  if (!this.o) throw Error("Trying to publish without connecting first.");
  var e = A9a(1);
  a = K(e, cQ, 2, a);
  T(a, 3, c || this.D);
  this.j.postMessage(Lg(a));
};
UserTaskEventChannel.prototype.G = function (a) {
  var c = a.Kc;
  c.data[1] != null
    ? ((c = B9a(JSON.stringify(c.data))), Ti(c, 1), (a = vi(c, 3)), (c = I(c, cQ, 2)))
    : ((a = this.D), (c = sza(JSON.stringify(c.data))));
  this.dispatchEvent(new mab(this, a, c));
};
UserTaskEventChannel.prototype.ha = function () {
  if (this.j) {
    var a = A9a(0);
    this.j.postMessage(Lg(a));
    this.j.close();
  }
  ZE.prototype.ha.call(this);
};
function U$(a) {
  this.C = D(a);
}
w(U$, W);
var nab = new cl(122453513, cQ, U$);
/** PeriodicTaskScheduler（原 V$）。
 * D=任务目录，B=统计存储，G=分派器，A=当前运行器，j=运行标记，o=事件通道。
 */
function PeriodicTaskScheduler(statsStore, dispatcher, unusedLogger, flags) {
  uE.call(this);
  this.D = [];
  this.G = dispatcher;
  this.B = statsStore;
  this.A = null;
  this.j = false;
  this.o = null;
  this.F = flags;
  vE(this, this.stop, this);
}
w(PeriodicTaskScheduler, uE);
PeriodicTaskScheduler.prototype.start = function () {
  var scheduler = this;
  if (this.j) return mI(Error("The scheduler is already started."));
  this.j = true;
  var eventBusProvider = new Q9(this.F);
  this.qa(eventBusProvider);
  this.o = new UserTaskEventChannel(eventBusProvider, "user_" + zK(this.F, "docs-offline-lsuid"));
  this.qa(this.o);
  this.o.connect();
  return tI(
    lI().then(function () {
      return runNextDueTask(scheduler);
    }),
    function () {
      sE(scheduler.o);
      sE(eventBusProvider);
      scheduler.o = null;
      scheduler.j = false;
    },
  );
};
PeriodicTaskScheduler.prototype.stop = function () {
  this.A && (this.A.stop(), (this.A = null));
  this.j = false;
};
/** runNextDueTask（原 oab）。
 * 周期批次串行执行；先记录开始，再执行、保存结果、广播，然后递归选择。
 */
function runNextDueTask(scheduler) {
  if (!scheduler.j) return lI();
  var taskDefinition = selectNextDueTask(scheduler);
  if (!taskDefinition) return lI();
  var statsRecord = getOrCreateTaskStats(scheduler.B, taskDefinition.K()),
    reportContext = Zta(
      Yta(Xta(CL(BL(new AL(), taskDefinition.o), true), taskDefinition.A), !jj(statsRecord, 4)),
    );
  Xi(statsRecord, 2, Za());
  Uva(statsRecord, XB(si(statsRecord, 7)) + 1);
  saveTaskStats(scheduler.B, statsRecord);
  scheduler.A = scheduler.G.execute(taskDefinition.j, reportContext);
  return scheduler.A.o.promise.then(function (g) {
    scheduler.A = null;
    g = Ti(g, 1);
    U(statsRecord, 4, g);
    Xi(statsRecord, 3, Za());
    Uva(statsRecord, 0);
    if (g == 0) {
      S(statsRecord, 5, true);
      Xi(statsRecord, 6, 0);
    } else {
      var h = XB(si(statsRecord, 6)) + 1;
      Xi(statsRecord, 6, h);
    }
    saveTaskStats(scheduler.B, statsRecord);
    h = new U$();
    var k = statsRecord.O();
    T(h, 1, k);
    U(h, 2, g);
    g = new cQ();
    rk(g, nab, h);
    scheduler.o.Ie(g);
    return runNextDueTask(scheduler);
  });
}
/** selectNextDueTask（原 pab）。
 * 按资格、分钟周期、曾成功标记及失败次数筛选；排序后只取一个，不与按文档即时任务互斥。
 */
function selectNextDueTask(scheduler) {
  for (
    var nowMs = Za(), candidates = [], taskIndex = 0;
    taskIndex < scheduler.D.length;
    taskIndex++
  ) {
    var taskDefinition = scheduler.D[taskIndex];
    if (scheduler.G.o(taskDefinition.j)) {
      var statsRecord = getOrCreateTaskStats(scheduler.B, taskDefinition.K()),
        failureCountOrLatestTime = XB(si(statsRecord, 6)),
        periodOrOverdueMinutes = taskDefinition.D;
      taskDefinition.F &&
        !N(statsRecord, 5) &&
        failureCountOrLatestTime < 3 &&
        (periodOrOverdueMinutes = Math.min(
          periodOrOverdueMinutes,
          failureCountOrLatestTime < 2 ? 0 : 5 * (failureCountOrLatestTime - 1),
        ));
      periodOrOverdueMinutes = (failureCountOrLatestTime = Math.max(
        XB(si(statsRecord, 3)),
        XB(si(statsRecord, 2)),
      ))
        ? (nowMs - failureCountOrLatestTime) / 1e3 / 60 - periodOrOverdueMinutes
        : Number.MAX_SAFE_INTEGER;
      periodOrOverdueMinutes >= 0 &&
        candidates.push(new DueTaskCandidate(taskDefinition, statsRecord, periodOrOverdueMinutes));
    }
  }
  xaa(candidates, function (p) {
    return [p.j.J, N(p.A, 5), -p.o];
  });
  return candidates.length ? candidates[0].j : null;
}
/** DueTaskCandidate（原 qab）。
 * 保存任务、统计和逾期分钟数供优先级排序。
 */
function DueTaskCandidate(taskDefinition, statsRecord, overdueMinutes) {
  this.j = taskDefinition;
  this.A = statsRecord;
  this.o = overdueMinutes;
}
new YF(C.location.href);
