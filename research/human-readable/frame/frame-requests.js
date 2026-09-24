/** 来源：abb / cbb / ebb / fbb。请求先由宿主解码，回复再交给宿主编码。 */
export const FrameRequestType = Object.freeze({
  NAMED_EVENT: 0,
  MULTI_DOC_SYNC: 2,
  TRY_BATCH: 3,
});
export const OfflineUserStatus = Object.freeze({ ENABLED: 1 });
const DELAYED_OPT_IN_TYPES = [3, 4, 5, 6, 9]; // 当前快照的 bva，不是公开 API。
const OPT_IN_DELAY_MS = 300_000;

export function remainingOptInDelay(userState, nowMs) {
  const firstOptInType = userState.optInTypes?.[0] || null;
  if (userState.status !== OfflineUserStatus.ENABLED) return 0;
  if (!firstOptInType || !DELAYED_OPT_IN_TYPES.includes(firstOptInType))
    return 0;
  if (!userState.optInTime) return 0;
  const remainingMs = OPT_IN_DELAY_MS - (nowMs - userState.optInTime);
  return remainingMs > 0 ? remainingMs : 0;
}

export class FrameRequests {
  constructor({
    users,
    scheduler,
    policy,
    syncDocuments,
    probe,
    replies,
    flow,
    now,
    delay,
    logger,
  }) {
    Object.assign(this, {
      users,
      scheduler,
      policy,
      syncDocuments,
      probe,
      replies,
      flow,
      now,
      delay,
      logger,
    });
  }

  getRemainingOptInDelay() {
    return this.users
      .get()
      .then((user) => remainingOptInDelay(user, this.now()));
  }

  startBatchIfIdle() {
    if (this.scheduler.running) return this.flow.resolved();
    return this.scheduler.start().then(() => this.policy.enforceAfterBatch());
  }

  handleNamedEvent(eventName) {
    if (eventName !== "heartbeat") return this.flow.resolved();
    return this.getRemainingOptInDelay()
      .then((delayMs) => this.delay(delayMs))
      .then(() => this.users.get())
      .then((user) => {
        if (user.status === OfflineUserStatus.ENABLED)
          return this.startBatchIfIdle();
        this.logger.error(
          Error(
            "Attempted to start task scheduler when user is not offline enabled.",
          ),
        );
      });
  }

  dispatch(request) {
    const response = this.replies.create(request);
    switch (request.type) {
      case FrameRequestType.NAMED_EVENT: {
        // probe 先启动，与命名事件处理并行；但事件失败时不继续等待 probe。
        const probing = this.probe();
        return this.handleNamedEvent(request.eventName)
          .then(() => probing)
          .then(() => response);
      }
      case FrameRequestType.MULTI_DOC_SYNC:
        return this.syncDocuments(request.documentIds).then((result) => {
          this.replies.setMultiDocResult(response, result);
          return response;
        });
      case FrameRequestType.TRY_BATCH:
        // 与 heartbeat 不同：还在延迟窗口内就立即回包，而不是等待窗口结束。
        return this.getRemainingOptInDelay().then((remainingMs) => {
          if (remainingMs > 0) return response;
          return this.startBatchIfIdle().then(() => response);
        });
      default:
        throw Error("Dropped unknown message " + request);
    }
  }
}

/** 来源 dbb：即时任务独立于周期目录，不能据此认为所有任务都串行。 */
export function syncDocumentsImmediately(
  documentIds,
  { tasks, executor, reports, flow },
) {
  const execution = tasks.createMultiDocumentTask({
    documentIds,
    context: 1,
    taskType: "multi_doc_sync",
    timeoutMs: Math.min(documentIds.length * 120_000, 600_000),
    requiresNetwork: true,
    requiresAuth: true,
    requiresEligibility: true,
  });
  if (!executor.canExecute(execution)) return flow.resolved();
  const report = reports.createImmediateContext(18);
  return executor
    .execute(execution, report)
    .completion.then((result) => reports.readMultiDocResult(result) || null);
}
