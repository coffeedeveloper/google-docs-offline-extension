import { selectNextDueTask } from "./task-selection.js";

/**
 * 来源：V$.start / stop、oab。周期批次协调，不是上传引擎。
 * deps 的协议/Promise/生命周期适配由宿主提供，见 README 的契约。
 * 不使用 async/await：保留原实现先持久化、再执行、再持久化/广播的顺序。
 */
export class PeriodicTaskScheduler {
  constructor({
    tasks,
    statsStore,
    executor,
    now,
    flow,
    lifecycle,
    events,
    reports,
  }) {
    this.tasks = tasks;
    this.statsStore = statsStore;
    this.executor = executor;
    this.now = now;
    this.flow = flow;
    this.lifecycle = lifecycle;
    this.events = events;
    this.reports = reports;
    this.currentRunner = null;
    this.running = false;
    this.channel = null;
    lifecycle.onDispose(() => this.stop());
  }

  start() {
    if (this.running)
      return this.flow.rejected(Error("The scheduler is already started."));
    this.running = true;
    const provider = this.events.createProvider();
    this.lifecycle.own(provider);
    this.channel = this.events.createUserChannel(provider);
    this.lifecycle.own(this.channel);
    this.channel.connect();

    const batch = this.flow.resolved().then(() => this.runNextTask());
    // 原 tI 是观察完成状态并返回原 Promise，不是产生新 Promise 的 finally。
    return this.flow.observeSettlement(batch, () => {
      this.lifecycle.dispose(this.channel);
      this.lifecycle.dispose(provider);
      this.channel = null;
      this.running = false;
    });
  }

  stop() {
    if (this.currentRunner) {
      this.currentRunner.stop();
      this.currentRunner = null;
    }
    this.running = false;
    // 通道在批次完成回调中清理；这里不提前关闭它。
  }

  runNextTask() {
    if (!this.running) return this.flow.resolved();
    const task = selectNextDueTask(this);
    if (!task) return this.flow.resolved();

    // 原实现选择时读一次、实际启动时再读一次，不能偷偷复用旧快照。
    const stats = this.statsStore.getOrCreate(task.id);
    const reportContext = this.reports.createPeriodicContext(task, stats);
    stats.lastStartedAt = this.now();
    stats.startedAttemptsSinceCompletion += 1;
    this.statsStore.save(stats);
    this.currentRunner = this.executor.execute(task.execution, reportContext);

    return this.currentRunner.completion.then((result) => {
      this.currentRunner = null;
      const resultCode = this.reports.readResultCode(result);
      stats.lastResultCode = resultCode;
      stats.lastFinishedAt = this.now();
      stats.startedAttemptsSinceCompletion = 0;

      if (resultCode === 0) {
        stats.everSucceeded = true;
        stats.consecutiveFailures = 0;
      } else {
        stats.consecutiveFailures += 1;
        // 失败不清除 everSucceeded：它记录“曾经成功”，不是最后一次成功。
      }

      this.statsStore.save(stats);
      this.channel.publishResult(stats.id, resultCode);
      return this.runNextTask();
    });
    // 原函数没有 catch：Promise 拒绝不伪装成普通 resultCode；由外层处理。
  }
}
