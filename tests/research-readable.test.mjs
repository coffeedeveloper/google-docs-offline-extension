import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { root } from "../scripts/common.mjs";
import {
  analyzeResearch,
  assertBindingEquivalent,
  renameResearch,
  expandResearchSyntax,
} from "../scripts/research-readable-model.mjs";

test("rename follows lexical bindings, preserving shadowing, closures and property keys", () => {
  const input = `var a=2,b=3,c={a:9};
    function d(x){let a=x;return ()=>a+b+c.a;}
    function e(){return d(4)();}
    var result=[a,e(),c.a];`;
  const output = renameResearch(analyzeResearch(input), {
    a: { name: "outerValue", note: "outer" },
    d: { name: "makeReader", note: "closure", params: ["seed"] },
  }).source;
  assertBindingEquivalent(input, output);
  assert.match(output, /c\.a/);
  const run = (s) =>
    JSON.stringify(vm.runInNewContext(s + ";result", {}, { timeout: 1000 }));
  assert.equal(run(input), run(output));
  assert.equal(run(output), "[2,16,9]");
});

test("let loop bindings remain per-iteration and switch discriminant uses outer scope", () => {
  const input = `var a=2,b=[],c=0,d=0;
    for(let a=0;a<3;a++) b.push(()=>a);
    switch(a){case 2: let a=7;c=a;break;}
    var result=[a,c,b.map(f=>f())];`;
  const output = renameResearch(analyzeResearch(input), {
    a: { name: "outerSelector", note: "outer" },
  }).source;
  assertBindingEquivalent(input, output);
  assert.equal(
    JSON.stringify(
      vm.runInNewContext(output + ";result", {}, { timeout: 1000 }),
    ),
    "[2,7,[0,1,2]]",
  );
});

test("equivalence checker rejects changed wire values, properties and captured bindings", () => {
  assert.throws(() =>
    assertBindingEquivalent("var a={x:1};a.x;", "var a={x:2};a.x;"),
  );
  assert.throws(() =>
    assertBindingEquivalent("var a={x:1};a.x;", "var a={x:1};a.y;"),
  );
  assert.throws(() =>
    assertBindingEquivalent(
      "var a=1;function b(c){return a;}",
      "var a=1;function b(c){return c;}",
    ),
  );
});

test("unsupported dynamic or declaration syntax fails closed", () => {
  assert.throws(
    () => analyzeResearch('function a(){return eval("a")}'),
    /eval/,
  );
  assert.throws(() => analyzeResearch("class A {}"), /unsupported/);
  assert.throws(() => analyzeResearch("var {x}=a"), /destructuring/);
  assert.throws(() => analyzeResearch("try{}catch(e){var e=1}"), /collision/);
  assert.throws(
    () =>
      renameResearch(analyzeResearch("var a=1,b={a};"), {
        a: { name: "value", note: "test" },
      }),
    /shorthand/,
  );
});

test("syntax expansion preserves sequence ordering and conditional execution", () => {
  const input =
    "var a=[];if(!0)(a.push(1),a.push(2));if(!1)(a.push(3),a.push(4));var result=a;";
  const output = expandResearchSyntax(input);
  assertBindingEquivalent(input, output);
  assert.equal(
    JSON.stringify(
      vm.runInNewContext(output + ";result", {}, { timeout: 1000 }),
    ),
    "[1,2]",
  );
});

// 只加载已提取的纯决策函数，不执行 Google bundle 的初始化、联网或存储操作。
function loadFunction(file, name, globals = {}) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const model = analyzeResearch(source);
  const owner = model.scopes.reduce((best, s) =>
    s.bindings.size > best.bindings.size ? s : best,
  );
  const binding = owner.bindings.get(name);
  assert(binding, name);
  const parent = model.parentOf.get(binding.declarations[0]).node;
  const fn = parent.type === "FunctionDeclaration" ? parent : parent.init;
  return vm.runInNewContext(`(${source.slice(fn.start, fn.end)})`, globals, {
    timeout: 1000,
  });
}

test("Drive route matcher: readable and archived functions agree on representative paths", () => {
  const before = loadFunction(
    "service-worker-original/formatted/drive-main.js",
    "Lr",
    { URL },
  );
  const after = loadFunction(
    "service-worker-original/readable/drive-main.js",
    "matchesDriveListRoute",
    { URL },
  );
  for (const [suffix, expected] of [
    ["/drive", true],
    ["/drive/u/0/my-drive", true],
    ["/drive/u/12/mobile/recent/", true],
    ["/drive/starred", true],
    ["/drive/not-allowed", false],
    ["/document/d/example", false],
    ["/drive/u/invalid/recent", false],
  ]) {
    const config = { j: ["my-drive", "recent", "starred"] };
    const url = "https://example.invalid" + suffix;
    assert.equal(before(config, url), expected, suffix);
    assert.equal(after(config, url), expected, suffix);
  }
});

test("periodic scheduler: due time, eligibility, first success and priority are preserved", () => {
  const now = 1_000_000;
  const getStats = (store, id) => store[id] || {};
  const candidate = function (task, stats, overdue) {
    this.j = task;
    this.A = stats;
    this.o = overdue;
  };
  const helpers = {
    Za: () => now,
    Vva: getStats,
    getOrCreateTaskStats: getStats,
    XB: (value) => value || 0,
    si: (record, field) => record[field],
    N: (record, field) => !!record[field],
    qab: candidate,
    DueTaskCandidate: candidate,
    xaa: (items, key) =>
      items.sort((left, right) => {
        const a = key(left),
          b = key(right);
        for (let i = 0; i < a.length; i++)
          if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
        return 0;
      }),
  };
  const before = loadFunction(
    "offscreen-original/formatted/912208950-frame_bin.js",
    "pab",
    helpers,
  );
  const after = loadFunction(
    "offscreen-original/readable/912208950-frame_bin.js",
    "selectNextDueTask",
    helpers,
  );
  const task = (
    id,
    priority = 1,
    period = 10,
    accelerate = false,
    blocked = false,
  ) => ({ K: () => id, J: priority, D: period, F: accelerate, j: { blocked } });
  const scenarios = [
    { tasks: [], stats: {}, expected: null },
    { tasks: [task("first")], stats: {}, expected: "first" },
    { tasks: [task("blocked", 1, 10, false, true)], stats: {}, expected: null },
    {
      tasks: [task("recent")],
      stats: { recent: { 2: now - 60000, 3: now - 60000, 5: true } },
      expected: null,
    },
    {
      tasks: [task("old")],
      stats: { old: { 2: now - 660000, 3: now - 660000, 5: true } },
      expected: "old",
    },
    { tasks: [task("low", 2), task("high", 0)], stats: {}, expected: "high" },
    {
      tasks: [task("early", 1, 60, true)],
      stats: { early: { 2: now - 1000, 6: 0 } },
      expected: "early",
    },
    {
      tasks: [task("retry", 1, 60, true)],
      stats: { retry: { 2: now - 1000, 6: 2 } },
      expected: null,
    },
  ];
  for (const scenario of scenarios) {
    const make = () => ({
      D: scenario.tasks,
      B: scenario.stats,
      G: { o: (spec) => !spec.blocked },
    });
    assert.equal(before(make())?.K() ?? null, scenario.expected);
    assert.equal(after(make())?.K() ?? null, scenario.expected);
  }
});
