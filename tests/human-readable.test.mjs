import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { root, sha256 } from "../scripts/common.mjs";
import { analyzeResearch } from "../scripts/research-readable-model.mjs";
import { selectNextDueTask } from "../research/human-readable/frame/task-selection.js";
import {
  buildTaskCatalog,
  TASK_DEFINITIONS,
} from "../research/human-readable/frame/task-catalog.js";
import { PeriodicTaskScheduler } from "../research/human-readable/frame/periodic-scheduler.js";
import {
  FrameRequests,
  remainingOptInDelay,
  syncDocumentsImmediately,
} from "../research/human-readable/frame/frame-requests.js";
import { sendExtensionRequest } from "../research/human-readable/frame/extension-rpc.js";
import {
  matchesDriveListRoute,
  DriveBootRequests,
} from "../research/human-readable/sw/drive-routes.js";
import { ManifestUpdate } from "../research/human-readable/sw/manifest-update.js";
import {
  classifyNetworkResponse,
  validateDocumentAndShell,
} from "../research/human-readable/sw/editor-launch.js";

// 只提取被测函数；不运行整个下载脚本，也不使用真实账号/浏览器/网络。
const sourceFunctions = new Map();
function original(file, names, globals = {}) {
  if (!sourceFunctions.has(file)) {
    const source = fs.readFileSync(path.join(root, file), "utf8");
    const archive = file.split("/")[0];
    const manifest = JSON.parse(
      fs.readFileSync(path.join(root, archive, "sources.json")),
    );
    const expected = manifest.dependencies.find((d) =>
      file.endsWith(d.formatted.path),
    ).formatted.sha256;
    assert.equal(sha256(source), expected, "原研究样本变化后必须重新审查重构");
    const model = analyzeResearch(source);
    const owner = model.scopes.reduce((best, scope) =>
      scope.bindings.size > best.bindings.size ? scope : best,
    );
    const functions = new Map();
    for (const [name, binding] of owner.bindings) {
      const parent = model.parentOf.get(binding.declarations[0])?.node;
      const fn = parent?.type === "FunctionDeclaration" ? parent : parent?.init;
      if (fn && /Function/.test(fn.type))
        functions.set(name, source.slice(fn.start, fn.end));
    }
    sourceFunctions.set(file, functions);
  }
  const definitions = names
    .map((name) => {
      const source = sourceFunctions.get(file).get(name);
      assert(source, name);
      return `var ${name}=(${source});`;
    })
    .join("\n");
  return vm.runInNewContext(`${definitions}\n({${names.join(",")}})`, globals, {
    timeout: 1000,
  });
}
const FRAME = "offscreen-original/formatted/912208950-frame_bin.js";
const COMMON = "service-worker-original/formatted/docs-offline-common.js";
const EDITOR = "service-worker-original/formatted/docs-editor.js";
const DRIVE = "service-worker-original/formatted/drive-main.js";
const plain = (value) => JSON.parse(JSON.stringify(value));
const freshStats = (id) => ({
  id,
  lastStartedAt: 0,
  lastFinishedAt: 0,
  lastResultCode: 0,
  everSucceeded: false,
  consecutiveFailures: 0,
  startedAttemptsSinceCompletion: 0,
});
const field = {
  2: "lastStartedAt",
  3: "lastFinishedAt",
  4: "lastResultCode",
  5: "everSucceeded",
  6: "consecutiveFailures",
  7: "startedAttemptsSinceCompletion",
};
function task(id, extra = {}) {
  return {
    id,
    priority: 1,
    periodMinutes: 5,
    accelerateUntilFirstSuccess: false,
    execution: { id },
    ...extra,
  };
}
const oldTask = (task) => ({
  K: () => task.id,
  J: task.priority,
  D: task.periodMinutes,
  F: task.accelerateUntilFirstSuccess,
  j: task.execution,
  o: task.reportType,
  A: task.reportFlag,
});

// 测试替身只保证此处 then 链的结果与身份；不声称实现了 Closure 取消/微任务语义。
const flow = {
  resolved: (value) => Promise.resolve(value),
  rejected: (error) => Promise.reject(error),
  create: (executor) => new Promise(executor),
  observeSettlement(promise, cleanup) {
    promise.then(cleanup, cleanup);
    return promise;
  },
};

test("声明式目录与原 G$a 的 15 类任务字段、顺序、开关和周期一致", () => {
  const originalCatalog = original(
    FRAME,
    ["G$a", "E$a", "F$a", "s$", "r$", "p$", "D$a"],
    {
      xK: (flags, key) => flags[key],
      yK: (flags, key) => flags[key],
      dO: () => "syncWorker",
      fO: () => "taskIframe",
      gO: (path) =>
        path === "/drive/serviceworker/update"
          ? "driveSwUpdate"
          : path === "/drive/_/dataservice/backgroundsync"
            ? "driveBackgroundSync"
            : "odpWorker",
      hO: () => "documentBackgroundSync",
      $va: () => "unused",
      YN: { o: () => ({ j: "0" }) },
      zK: () => "synthetic",
      YF: function (url) {
        this.A = { add() {} };
        this.toString = () => url;
      },
      window: { origin: "https://example.invalid" },
    },
  ).G$a;
  for (const disabledIndex of [-1, 0, 5, 14])
    for (const period of [0, 1, 60]) {
      const values = {};
      TASK_DEFINITIONS.forEach((d, i) => {
        values["docs-offline-" + d.enabledFlag] = i !== disabledIndex;
        values["docs-offline-" + d.periodFlag] = period;
      });
      const urls = Object.fromEntries(
        TASK_DEFINITIONS.map((d) => [d.target, () => d.target]),
      );
      const modern = buildTaskCatalog(
        { boolean: (k) => values[k], number: (k) => values[k] },
        urls,
      );
      const before = originalCatalog(values).map((t) => ({
        id: t.B,
        priority: t.J,
        periodMinutes: t.D,
        reportType: t.o,
        reportFlag: t.A,
        accelerateUntilFirstSuccess: t.F,
        execution: {
          context: t.j.A,
          executorUrl: t.j.j,
          taskType: t.j.o,
          timeoutMs: t.j.D,
          requiresNetwork: t.j.J,
          requiresAuth: t.j.F,
          requiresEligibility: t.j.G,
          parameters: t.j.B,
        },
      }));
      assert.deepEqual(modern, plain(before));
    }
});

test("任务选择：500 组输入与原 pab 的排序、失败重试和资格判断一致", () => {
  let clock = 2_000_000,
    seed = 7;
  const random = (max) => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed % max;
  };
  const globals = {
    Za: () => clock,
    Vva: (store, id) => ({ ...store[id] }),
    XB: (x) => x || 0,
    si: (s, n) => s[field[n]],
    N: (s, n) => !!s[field[n]],
  };
  const { pab } = original(
    FRAME,
    ["pab", "qab", "xaa", "fc", "yaa", "hc"],
    globals,
  );
  for (let sample = 0; sample < 500; sample++) {
    const stats = {},
      tasks = Array.from({ length: random(15) }, (_, i) => {
        const id = String(i);
        stats[id] = {
          ...freshStats(id),
          lastStartedAt: random(2) ? clock - random(900000) : 0,
          lastFinishedAt: random(2) ? clock - random(900000) : 0,
          everSucceeded: !!random(2),
          consecutiveFailures: random(5),
        };
        return task(id, {
          priority: random(4),
          periodMinutes: random(20),
          accelerateUntilFirstSuccess: !!random(2),
          execution: { id, blocked: !random(4) },
        });
      });
    const canExecute = (spec) => !spec.blocked;
    const before =
      pab({ D: tasks.map(oldTask), B: stats, G: { o: canExecute } })?.K() ??
      null;
    const after =
      selectNextDueTask({
        tasks,
        statsStore: { getOrCreate: (id) => ({ ...stats[id] }) },
        executor: { canExecute },
        now: () => clock,
      })?.id ?? null;
    assert.equal(after, before, `sample ${sample}`);
  }
});

function batchFixture(outcomes, useOriginal, alreadySucceeded = false) {
  let time = 1_000_000;
  const log = [],
    tasks = [
      task("first", { reportType: 1 }),
      task("second", { reportType: 2 }),
    ],
    stored = {
      first: { ...freshStats("first"), everSucceeded: alreadySucceeded },
    };
  const statsStore = {
    getOrCreate(id) {
      log.push(["read", id]);
      return { ...(stored[id] || freshStats(id)) };
    },
    save(stats) {
      stored[stats.id] = { ...stats };
      log.push(["save", plain(stats)]);
    },
  };
  const executor = {
    canExecute: () => true,
    execute(spec) {
      log.push(["execute", spec.id]);
      const result = outcomes[spec.id];
      return {
        completion:
          result instanceof Error
            ? Promise.reject(result)
            : Promise.resolve({ code: result }),
      };
    },
  };
  const now = () => time++;
  const channel = {
    publishResult: (id, code) => log.push(["publish", id, code]),
  };
  if (!useOriginal) {
    const scheduler = new PeriodicTaskScheduler({
      tasks,
      statsStore,
      executor,
      now,
      flow,
      lifecycle: { onDispose() {} },
      events: {},
      reports: {
        createPeriodicContext(t) {
          log.push(["report", t.id]);
          return {};
        },
        readResultCode: (r) => r.code,
      },
    });
    scheduler.running = true;
    scheduler.channel = channel;
    return { run: () => scheduler.runNextTask(), log };
  }
  const rawStats = (id) => {
    const value = statsStore.getOrCreate(id);
    value.O = () => id;
    return value;
  };
  const globals = {
    Za: now,
    lI: flow.resolved,
    Vva: (_store, id) => rawStats(id),
    Wva: (_store, s) => statsStore.save(s),
    XB: (x) => x || 0,
    si: (s, n) => s[field[n]],
    N: (s, n) => !!s[field[n]],
    jj: (s, n) => s[field[n]],
    Xi: (s, n, v) => {
      s[field[n]] = v;
    },
    Uva: (s, v) => {
      s.startedAttemptsSinceCompletion = v;
    },
    S: (s, n, v) => {
      s[field[n]] = v;
    },
    AL: function () {},
    BL: (r, type) => {
      r.taskId = type === 1 ? "first" : "second";
      return r;
    },
    CL: (r) => r,
    Xta: (r) => r,
    Yta: (r) => r,
    Zta: (r) => {
      log.push(["report", r.taskId]);
      return r;
    },
    Ti: (r) => r.code,
    U: (s, n, v) => {
      if (n === 4) s.lastResultCode = v;
      else s[n] = v;
    },
    T: (s, n, v) => {
      s[n] = v;
    },
    U$: function () {},
    cQ: function () {},
    nab: {},
    rk: (event, _id, message) => {
      event.message = message;
    },
  };
  const fns = original(
    FRAME,
    ["oab", "pab", "qab", "xaa", "fc", "yaa", "hc"],
    globals,
  );
  const scheduler = {
    j: true,
    D: tasks.map(oldTask),
    B: {},
    G: {
      o: executor.canExecute,
      execute(spec) {
        const runner = executor.execute(spec);
        return { o: { promise: runner.completion } };
      },
    },
    o: {
      Ie: (event) => channel.publishResult(event.message[1], event.message[2]),
    },
  };
  return { run: () => fns.oab(scheduler), log };
}

test("批次执行：成功/业务失败的持久化与广播顺序和原 oab 一致", async () => {
  for (const outcomes of [
    { first: 0, second: 0 },
    { first: 4, second: 0 },
  ]) {
    const before = batchFixture(outcomes, true),
      after = batchFixture(outcomes, false);
    await before.run();
    await after.run();
    assert.deepEqual(plain(after.log), plain(before.log));
    assert.deepEqual(
      after.log.filter((x) => x[0] === "execute").map((x) => x[1]),
      ["first", "second"],
    );
  }
});

test("批次异常：拒绝不伪造成 resultCode，不广播也不继续下个任务", async () => {
  const error = Error("executor failed");
  const before = batchFixture({ first: error }, true),
    after = batchFixture({ first: error }, false);
  await assert.rejects(before.run(), (e) => e === error);
  await assert.rejects(after.run(), (e) => e === error);
  assert.deepEqual(plain(after.log), plain(before.log));
});

test("曾成功的任务随后失败，不清除 everSucceeded", async () => {
  const before = batchFixture({ first: 4, second: 0 }, true, true);
  const after = batchFixture({ first: 4, second: 0 }, false, true);
  await before.run();
  await after.run();
  assert.deepEqual(plain(after.log), plain(before.log));
  const saved = after.log
    .filter(([event, record]) => event === "save" && record.id === "first")
    .at(-1)[1];
  assert.equal(saved.everSucceeded, true);
  assert.equal(saved.lastResultCode, 4);
});

test("stop 取消当前运行器；已返回结果仍持久化，但不再调度下一任务", async () => {
  let finish;
  const log = [];
  const scheduler = new PeriodicTaskScheduler({
    tasks: [task("first"), task("second")],
    now: () => 1000000,
    flow,
    lifecycle: { onDispose() {} },
    events: {},
    statsStore: {
      getOrCreate: freshStats,
      save: (stats) => log.push(["save", stats.id, stats.lastResultCode]),
    },
    reports: {
      createPeriodicContext: () => ({}),
      readResultCode: (result) => result.code,
    },
    executor: {
      canExecute: () => true,
      execute: (spec) => {
        log.push(["execute", spec.id]);
        return {
          completion: new Promise((resolve) => {
            finish = resolve;
          }),
          stop: () => log.push(["stop"]),
        };
      },
    },
  });
  scheduler.running = true;
  scheduler.channel = {
    publishResult: (id, code) => log.push(["publish", id, code]),
  };
  const completion = scheduler.runNextTask();
  scheduler.stop();
  finish({ code: 7 });
  await completion;
  assert.deepEqual(log, [
    ["save", "first", 0],
    ["execute", "first"],
    ["stop"],
    ["save", "first", 7],
    ["publish", "first", 7],
  ]);
  assert.equal(scheduler.currentRunner, null);
});

test("start 保留观察器 Promise 身份；重复 start 拒绝，结束释放通道", async () => {
  let observed;
  const calls = [];
  const scheduler = new PeriodicTaskScheduler({
    tasks: [],
    statsStore: {},
    executor: {},
    now: () => 0,
    flow: {
      ...flow,
      observeSettlement(p, cleanup) {
        observed = p;
        return flow.observeSettlement(p, cleanup);
      },
    },
    lifecycle: {
      onDispose() {},
      own: (o) => calls.push(["own", o.name]),
      dispose: (o) => calls.push(["dispose", o.name]),
    },
    events: {
      createProvider: () => ({ name: "provider" }),
      createUserChannel: () => ({
        name: "channel",
        connect: () => calls.push(["connect"]),
      }),
    },
    reports: {},
  });
  const completion = scheduler.start();
  assert.equal(completion, observed);
  await assert.rejects(scheduler.start(), /already started/);
  await completion;
  assert.equal(scheduler.running, false);
  assert.equal(scheduler.channel, null);
  assert.deepEqual(calls, [
    ["own", "provider"],
    ["own", "channel"],
    ["connect"],
    ["dispose", "channel"],
    ["dispose", "provider"],
  ]);
});

test("opt-in 延迟：类型、空时间戳、边界及未来时间与原 ebb 一致", async () => {
  const now = 1_000_000;
  const { ebb } = original(FRAME, ["ebb"], {
    bva: [3, 4, 5, 6, 9],
    RJ: (a, x) => a.indexOf(x),
    Date: { now: () => now },
  });
  for (const status of [1, 4])
    for (const type of [null, 0, 3, 5, 8])
      for (const time of [0, now - 300001, now - 300000, now - 1, now + 1]) {
        const user = { status, optInTypes: [type], optInTime: time };
        const before = await ebb({
          B: { get: () => Promise.resolve({ xm: status, j: [type], A: time }) },
        });
        assert.equal(remainingOptInDelay(user, now), before);
      }
});

test("heartbeat 等待并重新读账号；type 3 在延迟窗口内立即返回", async () => {
  const log = [];
  const deps = {
    users: {
      get: () => {
        log.push("user");
        return Promise.resolve({
          status: 1,
          optInTypes: [3],
          optInTime: 900000,
        });
      },
    },
    scheduler: {
      running: false,
      start: () => {
        log.push("start");
        return Promise.resolve();
      },
    },
    policy: { enforceAfterBatch: () => log.push("policy") },
    syncDocuments: () => Promise.resolve(null),
    probe: () => {
      log.push("probe");
      return Promise.resolve();
    },
    replies: { create: (r) => ({ type: r.type }) },
    flow,
    now: () => 1000000,
    delay: (ms) => {
      log.push(["delay", ms]);
      return Promise.resolve();
    },
    logger: { error: () => log.push("error") },
  };
  const controller = new FrameRequests(deps);
  await controller.dispatch({ type: 3 });
  assert.deepEqual(log, ["user"]);
  log.length = 0;
  await controller.dispatch({ type: 0, eventName: "heartbeat" });
  assert.deepEqual(log, [
    "probe",
    "user",
    ["delay", 200000],
    "user",
    "start",
    "policy",
  ]);
  assert.throws(() => controller.dispatch({ type: 99 }), /Dropped unknown/);
});

test("即时同步超时上限和资格失败；无资格不调用 execute", async () => {
  for (const count of [0, 1, 5, 10]) {
    let spec;
    let executions = 0;
    const result = await syncDocumentsImmediately(
      Array(count).fill("synthetic-document"),
      {
        tasks: {
          createMultiDocumentTask: (s) => {
            spec = s;
            return s;
          },
        },
        executor: { canExecute: () => false, execute: () => executions++ },
        reports: {},
        flow,
      },
    );
    assert.equal(spec.timeoutMs, Math.min(count * 120000, 600000));
    assert.equal(executions, 0);
    assert.equal(result, undefined);
  }
});

test("扩展 RPC：回复/业务端口分别转移，错误响应记录后返回，结束关闭回复端口", async () => {
  const log = [];
  let resolveReply;
  const channel = {
    port1: { close: () => log.push("close") },
    port2: { name: "reply-transfer" },
  };
  const business = { name: "business" };
  const request = { type: 2 };
  const promise = sendExtensionRequest(request, business, {
    createChannel: () => channel,
    flow,
    wire: {
      encode: (x) => x,
      decodeResponse: (x) => x,
      getRequestType: (x) => x.type,
      setRequestType: (x, type) => {
        x.type = type;
      },
      hasError: (x) => !!x.error,
      getErrorReason: (x) => x.error,
    },
    targetWindow: {
      postMessage(data, origin, ports) {
        log.push([data, origin, ports]);
        resolveReply = () =>
          channel.port1.onmessage({ data: { error: "synthetic" } });
      },
    },
    targetOrigin: "chrome-extension://synthetic",
    logger: { error: () => log.push("error") },
  });
  resolveReply();
  const result = await promise;
  assert.equal(result.type, 2);
  assert.equal(log[0][2][0], channel.port2);
  assert.equal(log[0][2][1], business);
  assert.deepEqual(log.slice(1), ["error", "close"]);
});

test("Drive 路由：保留原 Lr 的非典型路径接受范围", () => {
  const { Lr } = original(DRIVE, ["Lr"], { URL });
  const allowed = ["my-drive", "recent", "starred"];
  for (const suffix of [
    "/drive",
    "/drive/",
    "/drive/u/0/recent",
    "/drive/u//recent",
    "/prefix/drive/recent",
    "/drive/mobile/starred/",
    "/drive/u/not-number/recent",
    "/document/example",
    "/drive/not-allowed",
  ]) {
    const url = "https://example.invalid" + suffix;
    assert.equal(
      matchesDriveListRoute(url, allowed),
      Lr({ j: allowed }, url),
      suffix,
    );
  }
  const requests = new DriveBootRequests({
    allowedRoutes: allowed,
    accountId: "REDACTED_OUID",
    cacheProxyEnabled: true,
    createRequest: (url) => ({ url }),
  });
  const other = { url: "https://example.invalid/asset.js" };
  assert.equal(requests.cacheKeyFor(other), other);
  assert.equal(
    requests.cacheKeyFor({ url: "https://example.invalid/drive/recent" }).url,
    "offline/coldstart?ouid=REDACTED_OUID",
  );
  assert.equal(requests.criticalPrecacheRequests().length, 2);
});

function manifestFixture(
  { fail, complete, preserve, deleteFails = false, markerFails = false },
  old,
) {
  const log = [],
    error = Error("synthetic failure"),
    flags = {
      preservePreviouslyComplete: preserve,
      reportWhenNoCacheRemains: true,
    };
  const cache = {
    put: () => {
      log.push("marker");
      return markerFails ? Promise.reject(error) : Promise.resolve();
    },
  };
  const caches = {
    delete: () => {
      log.push("delete");
      return deleteFails
        ? Promise.reject(Error("delete failed"))
        : Promise.resolve(true);
    },
  };
  const ports = {
    populateResources: () => {
      log.push("populate");
      return fail ? Promise.reject(error) : Promise.resolve();
    },
    createCompleteMarkerRequest: () => "marker",
    createManifestResponse: () => "manifest",
    listManagedCaches: () => {
      log.push("list");
      return Promise.resolve([]);
    },
    getFetchUrl: () => "synthetic",
    report: () => log.push("report"),
    annotateError: (e) => e,
  };
  if (!old)
    return {
      run: () =>
        new ManifestUpdate({
          caches,
          cacheName: "version",
          failedCacheLabel: "label",
          manifest: {},
          flags,
          ports,
        }).populateAndCommit(cache, {
          isComplete: () => complete,
          consistent: true,
        }),
      log,
    };
  const { LC } = original(COMMON, ["LC", "OC"], {
    NC: ports.populateResources,
    U: (_flags, key) => (key === "docs-sw-eddfpc" ? preserve : true),
    KC: () => "version",
    Request: function () {},
    Response: function () {},
    bg: () => "manifest",
    tB: ports.listManagedCaches,
    lc: () => ({ serviceworker_fetchUrl: "synthetic" }),
    HB: ports.report,
    Lk: ports.annotateError,
  });
  return {
    run: () =>
      LC({ o: caches, v: {}, F: {}, B: {}, C: "label", j: {} }, cache, {
        na: () => complete,
        Kc: true,
      }),
    log,
  };
}

test("清单更新：成功、下载失败、标记失败、保留旧完整版本、删除失败与原 LC/OC 一致", async () => {
  for (const config of [
    {},
    { fail: true },
    { fail: true, complete: true, preserve: true },
    { fail: true, complete: false, preserve: true },
    { markerFails: true },
    { fail: true, deleteFails: true },
  ]) {
    const old = manifestFixture(config, true),
      modern = manifestFixture(config, false);
    const settle = async (fn) => {
      try {
        await fn();
        return "fulfilled";
      } catch (e) {
        return e.message;
      }
    };
    assert.equal(await settle(modern.run), await settle(old.run));
    assert.deepEqual(modern.log, old.log);
  }
});

test("网络分类：404/410、强制在线、5xx 和建议离线头与原 YK 一致", () => {
  const wrap = (response, reason) => ({
    status: response.status,
    reason: reason || "network",
  });
  const { YK } = original(EDITOR, ["YK"], {
    Nl: () => "false",
    V: () => true,
    ZK: [500, 502, 503],
    EI: wrap,
    yI: function (response) {
      Object.assign(this, wrap(response));
    },
  });
  for (const status of [200, 401, 403, 404, 410, 500, 502, 503, 504])
    for (const suggested of [false, true]) {
      const response = {
        status,
        headers: { get: () => (suggested ? "true" : null) },
      };
      assert.deepEqual(
        classifyNetworkResponse({
          response,
          isDocumentAction: true,
          forceWeb: false,
          deletionFallbackEnabled: true,
          results: { network: (r) => wrap(r), unavailable: wrap },
        }),
        plain(
          YK({ o: {} }, { W: { v: true }, ea: { url: "synthetic" } }, response),
        ),
      );
    }
  const forced = classifyNetworkResponse({
    response: { status: 500, headers: { get: () => "true" } },
    isDocumentAction: true,
    forceWeb: true,
    deletionFallbackEnabled: true,
    results: { network: (r) => wrap(r), unavailable: wrap },
  });
  assert.equal(forced.reason, "network");
});

test("本地启动：首选/备选、严格 resync、缓存更新与未命中同原 QK/NK", async () => {
  for (const mode of [
    "primary",
    "alternate",
    "missing",
    "resync",
    "truthy-resync",
    "stale",
    "lookup-error",
  ]) {
    const run = async (old) => {
      const trace = [],
        timing = {},
        document = {};
      let tick = 0;
      const match = { request: "shell", metadata: { stale: mode === "stale" } };
      const lookup = (url) => {
        trace.push(["lookup", url]);
        if (mode === "lookup-error")
          return Promise.reject(Error("read failed"));
        return Promise.resolve(
          mode === "missing"
            ? null
            : mode === "alternate" && url === "primary"
              ? null
              : match,
        );
      };
      const resync =
        mode === "resync" ? true : mode === "truthy-resync" ? 1 : false;
      const unavailable = (_request, _doc, reason) => reason;
      let operation;
      if (old) {
        const { QK } = original(EDITOR, ["QK", "NK"], {
          SK: (_c, _u, _a, _app, _doc, variant) =>
            variant ? "primary" : "alternate",
          Date: { now: () => tick++ },
          iI: (_store, url) => lookup(url),
          Am: () => resync,
          xf: (m) => m.stale,
          FI: unavailable,
          GI: () => "redirect",
          yI: function () {
            return { result: "cached" };
          },
          OK: () => "missing",
        });
        const raw = { j: {} };
        operation = QK(
          { v: {}, j: true },
          raw,
          {},
          { j: "document" },
          {},
          document,
          true,
        ).then((result) => {
          Object.assign(timing, {
            lookupStartedAt: raw.j.U,
            lookupDurationMs: raw.j.J,
          });
          return result;
        });
      } else
        operation = validateDocumentAndShell({
          document,
          variant: true,
          timing,
          ports: {
            buildShellUrl: (v) => (v ? "primary" : "alternate"),
            now: () => tick++,
            cache: { find: lookup },
            onMissingShell: () => "missing",
            modelNeedsResync: () => resync,
            cacheNeedsUpdate: (m) => m.stale,
            unavailable,
            cachedLaunch: () => ({ result: "cached" }),
          },
        });
      try {
        return { result: plain(await operation), trace, timing };
      } catch (e) {
        return { error: e.message, trace };
      }
    };
    assert.deepEqual(await run(false), await run(true), mode);
  }
});
