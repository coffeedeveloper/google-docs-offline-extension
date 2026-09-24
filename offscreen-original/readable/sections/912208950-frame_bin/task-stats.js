/**
 * 阅读切片：持久化任务统计。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../912208950-frame_bin.js，原位置 L29241。
 * TaskStatsStore（$N）：读取 docs-tasksStats_default；损坏时清空并报告。字段 5 表示曾经成功，不是最近结果。
 * getOrCreateTaskStats（Vva）：返回统计记录的 clone，避免调用方未保存就污染存储状态。
 * saveTaskStats（Wva）：写入 clone 后序列化全部任务统计到 localStorage。
 */
function TaskStatsStore(logger) {
  this.o = logger;
  logger = C.localStorage.getItem("docs-tasksStats_default") || "[]";
  try {
    var c = JSON.parse(logger);
  } catch (g) {
    {
      c = [];
      C.localStorage.removeItem("docs-tasksStats_default");
      this.o.ua(gF(g, "Detected task stats corruption, resetting"));
    }
  }
  logger = {};
  for (var e = 0; e < c.length; e++) {
    var f = new ZN(c[e]);
    logger[Q(f, 1)] = f;
  }
  this.j = logger;
}
function aO(a, c) {
  return (a = a.j[c]) ? a.clone() : null;
}
/** getOrCreateTaskStats（原 Vva）。
 * 返回统计记录的 clone，避免调用方未保存就污染存储状态。
 */
function getOrCreateTaskStats(statsStore, taskId) {
  var e = aO(statsStore, taskId);
  if (e) return e;
  e = new ZN();
  T(e, 1, taskId);
  Xi(e, 2, 0);
  Xi(e, 3, 0);
  statsStore.j[taskId] = e;
  return e.clone();
}
/** saveTaskStats（原 Wva）。
 * 写入 clone 后序列化全部任务统计到 localStorage。
 */
function saveTaskStats(statsStore, statsRecord) {
  statsStore.j[statsRecord.K()] = statsRecord.clone();
  statsRecord = [];
  for (var e in statsStore.j) statsRecord.push(Lg(statsStore.j[e]));
  C.localStorage.setItem("docs-tasksStats_default", JSON.stringify(statsRecord));
}
