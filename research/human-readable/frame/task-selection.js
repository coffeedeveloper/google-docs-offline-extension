/**
 * 来源：frame 的 pab / qab / xaa。手工结构化重构，不依赖 Google 全局变量。
 * task: { id, priority, periodMinutes, accelerateUntilFirstSuccess, execution }
 * stats: { lastStartedAt, lastFinishedAt, everSucceeded, consecutiveFailures }
 * 这些对象是阅读层接口，不是 Google 的 wire 格式；字段映射见 README。
 */

function comparePriority(left, right) {
  // 与原来的数组词典序一致：优先级小的在前、从未成功的在前、逾期久的在前。
  const leftKey = [
    left.task.priority,
    left.stats.everSucceeded,
    -left.overdueMinutes,
  ];
  const rightKey = [
    right.task.priority,
    right.stats.everSucceeded,
    -right.overdueMinutes,
  ];
  for (let index = 0; index < leftKey.length; index++) {
    if (leftKey[index] > rightKey[index]) return 1;
    if (leftKey[index] < rightKey[index]) return -1;
  }
  return 0;
}

export function getEffectivePeriod(task, stats) {
  const failures = stats.consecutiveFailures;
  if (
    !task.accelerateUntilFirstSuccess ||
    stats.everSucceeded ||
    failures >= 3
  ) {
    return task.periodMinutes;
  }
  // 首次成功之前：失败少于 2 次立即重试，第 3 次尝试最多等 5 分钟。
  // 达到 3 次失败后恢复正常周期；不是无限指数退避。
  const firstSuccessRetryMinutes = failures < 2 ? 0 : 5 * (failures - 1);
  return Math.min(task.periodMinutes, firstSuccessRetryMinutes);
}

export function selectNextDueTask({ tasks, statsStore, executor, now }) {
  const nowMs = now();
  const candidates = [];

  for (const task of tasks) {
    if (!executor.canExecute(task.execution)) continue;
    const stats = statsStore.getOrCreate(task.id);
    const periodMinutes = getEffectivePeriod(task, stats);
    const lastAttemptAt = Math.max(stats.lastStartedAt, stats.lastFinishedAt);
    // 从未执行的任务拥有最大的逾期值；保留原来的 MAX_SAFE_INTEGER。
    const overdueMinutes = lastAttemptAt
      ? (nowMs - lastAttemptAt) / 1000 / 60 - periodMinutes
      : Number.MAX_SAFE_INTEGER;

    if (overdueMinutes >= 0) candidates.push({ task, stats, overdueMinutes });
  }

  candidates.sort(comparePriority);
  return candidates.length ? candidates[0].task : null;
}
