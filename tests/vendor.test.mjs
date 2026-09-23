import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import {
  analyze,
  bindingNormalForm,
  loadVendorModels,
} from "../scripts/vendor-model.mjs";
import {
  renameRuntime,
  expandReadableSyntax,
} from "../scripts/readable-vendor.mjs";
import { harness, flush, plain } from "./harness.mjs";

const { models, names } = await loadVendorModels();

// 同一份浏览器模拟环境分别执行原始提取区间/可读源码；测试钩子不加入生产 exports。
async function runtime(target, variant) {
  const model =
    variant === "original"
      ? models[target]
      : analyze(
          await readFile(
            new URL(`../src/vendor/${target}-runtime.js`, import.meta.url),
            "utf8",
          ),
        );
  const exports = Object.entries(names[target])
    .filter(([compiled]) => models[target].global.bindings.has(compiled))
    .map(
      ([compiled, config]) =>
        `${JSON.stringify(config.name)}: ${variant === "original" ? compiled : config.name}`,
    );
  const source = `${model.source.slice(0, model.ast.body.at(-1).start)}\nglobalThis.Vendor = { ${exports.join(",")} };`;
  return harness(
    variant,
    target === "background"
      ? "service_worker_bin_prod.js"
      : "offscreendocument_main.js",
    {},
    false,
    source,
  );
}

async function compare(target, exercise) {
  const original = await exercise(await runtime(target, "original"));
  const readable = await exercise(await runtime(target, "readable"));
  assert.deepEqual(plain(readable), plain(original));
  return plain(readable);
}

test("作用域还原保留变量提升、闭包、catch 遮蔽和非计算属性", () => {
  const source =
    'var a = 3; function b(a) { var c = function () { return a; }; try { throw 4; } catch (a) { c = function () { return a; }; } return { a: c(), text: "a", member: globalThis.a, hoisted: d }; var d; } export { b };';
  const model = analyze(source);
  const renamed = renameRuntime(model, {
    a: { name: "seed", params: [] },
    b: { name: "readResult", params: ["input"] },
  }).source;
  assert.deepEqual(
    bindingNormalForm(analyze(renamed)),
    bindingNormalForm(model),
  );
  assert.match(renamed, /globalThis\.a/);
  assert.match(renamed, /text: "a"/);
  const changedProperty = renamed.replace("globalThis.a", "globalThis.seed");
  assert.notDeepEqual(
    bindingNormalForm(analyze(changedProperty)),
    bindingNormalForm(model),
  );
  const changedCapture = renamed.replace("return input", "return seed");
  assert.notDeepEqual(
    bindingNormalForm(analyze(changedCapture)),
    bindingNormalForm(model),
  );
});

test("布尔量/顺序语句展开不能吞 return，不能把循环空语句当作冗余分号", () => {
  const source =
    "function a(b) { if (b) return!0; for (;b;) ; (b=1,b+=2); return!1; }; export { a };";
  const model = analyze(source);
  const expanded = analyze(expandReadableSyntax(source));
  assert.deepEqual(bindingNormalForm(expanded), bindingNormalForm(model));
  assert.notDeepEqual(
    bindingNormalForm(analyze(source.replace("for (;b;) ;", "for (;b;) b++;"))),
    bindingNormalForm(model),
  );
});

for (const target of ["background", "offscreen"]) {
  test(`${target}: Promise 异步顺序、thenable 首次结果、自解析及抛错`, async () => {
    const result = await compare(target, async (env) => {
      env.run(`
        var events = [], P = Vendor.LegacyPromise;
        new P(function(resolve) { events.push("executor"); resolve(7); }).then(function(value) { events.push(value); });
        events.push("sync");
        new P(function(resolve) { resolve({ then: function(ok, fail) { ok("first"); fail("late"); throw Error("ignored"); } }); }).then(function(value) { events.push(value); });
        new P(function(resolve) { resolve({ get then() { throw Error("getter"); } }); }).then(null, function(error) { events.push(error.message); });
        var deferred = Vendor.createDeferred();
        deferred.promise.then(null, function(error) { events.push(error.message); });
        deferred.resolve(deferred.promise);
      `);
      await flush();
      return env.run("events");
    });
    assert.deepEqual(result.slice(0, 3), ["executor", "sync", 7]);
    assert.deepEqual(result.slice(3), [
      "first",
      "getter",
      "Promise cannot resolve to itself",
    ]);
  });

  test(`${target}: 取消只影响选中子链，其他订阅仍收到父结果`, async () => {
    const result = await compare(target, async (env) => {
      env.run(`
        var events = [], parent = Vendor.createDeferred();
        var child = parent.promise.then(function(value) { events.push("cancelled child ran"); });
        child.then(null, function(error) { events.push(error.name); return "handled"; });
        parent.promise.then(function(value) { events.push(value); });
        child.cancel("stop");
      `);
      await flush();
      env.run('parent.resolve("sibling survives")');
      await flush();
      return env.run("events");
    });
    assert.deepEqual(result, ["cancel", "sibling survives"]);
  });

  test(`${target}: 旧 Deferred 的 undefined 返回沿用旧值`, async () => {
    const result = await compare(target, async (env) => {
      env.run(`
        var events = [], d = new Vendor.LegacyDeferred();
        Vendor.addDeferredCallback(d, function(value) { events.push(value); });
        Vendor.addDeferredCallback(d, function(value) { events.push(value); return value + 1; });
        Vendor.addDeferredCallback(d, function(value) { events.push(value); });
        Vendor.settleDeferred(d, true, 4);
      `);
      await flush();
      return env.run("events");
    });
    assert.deepEqual(result, [4, 4, 5]);
  });

  test(`${target}: wire 编解码、稀疏字段和不可变消息 copy-on-write`, async () => {
    const result = await compare(target, async (env) =>
      env.run(`(function() {
      var message = new Vendor.WebsiteRequestMessage();
      Vendor.setNumberField(message, 1, 2);
      Vendor.setStringField(message, 99, "中文");
      var error = new Vendor.ErrorMessage();
      Vendor.setStringField(error, 1, "bad");
      Vendor.setNestedMessage(message, Vendor.ErrorMessage, 3, error);
      var before = JSON.stringify(Vendor.serializeMessage(message));
      var frozen = Vendor.createFrozenDefaultMessage(Vendor.ErrorMessage);
      var copy = Vendor.mutableMessageCopy(frozen);
      Vendor.setStringField(copy, 1, "copy");
      var rejectedMutation = false;
      try { Vendor.setStringField(frozen, 1, "illegal"); } catch (error) { rejectedMutation = true; }
      return {
        wire: before,
        sparse: Vendor.readStringField(message, 99),
        nested: Vendor.readStringField(Vendor.readNestedMessage(message, Vendor.ErrorMessage, 3), 1),
        frozen: Vendor.serializeMessage(frozen), copy: Vendor.serializeMessage(copy), rejectedMutation: rejectedMutation,
        stringNull: Vendor.coerceString(null), integer: Vendor.coerceInt32("12")
      };
    })()`),
    );
    assert.equal(result.sparse, "中文");
    assert.equal(result.nested, "bad");
    assert.equal(result.rejectedMutation, true);
    assert.deepEqual(result.copy, ["copy"]);
  });

  test(`${target}: Int64 极值、溢出、乘除法和移位`, async () => {
    const result = await compare(target, async (env) =>
      env.run(`(function() {
      var min = Vendor.INT64_MIN, max = Vendor.INT64_MAX, one = Vendor.INT64_ONE;
      return [min.toString(), max.toString(), max.add(one).toString(),
        Vendor.int64FromNumber(123456789).multiply(Vendor.int64FromNumber(98765)).toString(),
        min.div(Vendor.int64FromNumber(-1)).toString(),
        one.shiftLeft(63).toString(), max.div(Vendor.int64FromNumber(10)).toString()];
    })()`),
    );
    assert.deepEqual(result, [
      "-9223372036854775808",
      "9223372036854775807",
      "-9223372036854775808",
      "12193209765585",
      "-9223372036854775808",
      "-9223372036854775808",
      "922337203685477580",
    ]);
  });

  test(`${target}: URL 相对解析、多值参数、编码和 clone 共享行为`, async () => {
    const result = await compare(target, async (env) =>
      env.run(`(function() {
      var url = new Vendor.MutableUrl("https://example.com/a/b?x=1&x=2&space=a+b#frag");
      var query = new Vendor.QueryData("x=1&x=2", false);
      query.${target === "background" ? "xa" : "la"}("x");
      var copy = query.clone();
      copy.add("x", "3");
      return { original: url.toString(), resolved: url.resolve(new Vendor.MutableUrl("../doc/123?x=%E4%B8%AD#new")).toString(),
        values: url.o.${target === "background" ? "xa" : "la"}("x"), space: url.o.get("space"), sharedValues: query.${target === "background" ? "xa" : "la"}("x") };
    })()`),
    );
    assert.equal(
      result.resolved,
      "https://example.com/doc/123?x=%E4%B8%AD#new",
    );
    assert.deepEqual(result.values, ["1", "2"]);
    assert.equal(result.space, "a b");
    assert.deepEqual(result.sharedValues, ["1", "2", "3"]);
  });

  test(`${target}: Disposable 幂等销毁及销毁后的 child 立即释放`, async () => {
    const result = await compare(target, async (env) =>
      env.run(`(function() {
      var events = [], owner = new Vendor.Disposable();
      Vendor.ownDisposable(owner, { dispose: function() { events.push("first"); } });
      Vendor.ownDisposable(owner, { dispose: function() { events.push("second"); } });
      owner.dispose(); owner.dispose();
      Vendor.ownDisposable(owner, { dispose: function() { events.push("late"); } });
      return events;
    })()`),
    );
    assert.deepEqual(result, ["first", "second", "late"]);
  });

  test(`${target}: 错误 cause 循环保护、上下文与标准数组工具的真实语义`, async () => {
    const result = await compare(target, async (env) =>
      env.run(`(function() {
      var first = { stack: "first-stack" }, second = { stack: "second-stack" };
      first.cause = second; second.cause = first;
      var error = Vendor.normalizeError("failure");
      Vendor.attachErrorContext(error, "channel", "frame");
      return { stack: Vendor.formatErrorStack(first), context: Vendor.readErrorContext(error),
        hasMatch: Vendor.arraySome([1, 2], function(value) { return value === 2; }),
        missing: Vendor.arraySome([1, 2], function(value) { return value === 3; }) };
    })()`),
    );
    assert.match(result.stack, /second-stack/);
    assert.equal(result.hasMatch, true);
    assert.equal(result.missing, false);
  });
}

test("offscreen: race 先到先得、空输入兑现 undefined、特化 resolve 忽略实参", async () => {
  const result = await compare("offscreen", async (env) => {
    env.run(`
      var events = [], slow = Vendor.createDeferred(), fast = Vendor.createDeferred();
      Vendor.raceLegacyPromises([slow.promise, fast.promise]).then(function(value) { events.push(value); });
      Vendor.raceLegacyPromises([]).then(function(value) { events.push(value === undefined ? "empty" : "wrong"); });
      Vendor.resolvedLegacyPromise("ignored").then(function(value) { events.push(value === undefined ? "specialized" : "wrong"); });
      fast.resolve("fast");
    `);
    await flush();
    const beforeSlow = plain(env.run("events"));
    env.run('slow.resolve("late")');
    await flush();
    return { beforeSlow, afterSlow: env.run("events") };
  });
  assert.ok(result.beforeSlow.includes("fast"));
  assert.deepEqual(result.beforeSlow, result.afterSlow);
  assert.ok(result.beforeSlow.includes("empty"));
  assert.ok(result.beforeSlow.includes("specialized"));
});

test("offscreen: all-settled 保留原 kb 成功标志；安全 iframe URL 校验", async () => {
  const result = await compare("offscreen", async (env) => {
    env.run(`
      var results, iframe = Vendor.createDomElement("IFRAME");
      Vendor.setTrustedIframeSource(iframe, Vendor.createTrustedFrameUrl("https://docs.google.com/offline/frame"));
      var spoofRejected = false;
      try { Vendor.setTrustedIframeSource(iframe, { toString: function() { return "https://evil.example"; } }); } catch (error) { spoofRejected = true; }
      Vendor.settleAllLegacyPromises([1, new Vendor.LegacyPromise(function(resolve, reject) { reject("bad"); })]).then(function(value) { results = value; });
    `);
    await flush();
    return env.run(
      "({ results: results, src: iframe.src, spoofRejected: spoofRejected })",
    );
  });
  assert.deepEqual(result.results, [
    { kb: true, value: 1 },
    { kb: false, reason: "bad" },
  ]);
  assert.equal(result.src, "https://docs.google.com/offline/frame");
  assert.equal(result.spoofRejected, true);
});
