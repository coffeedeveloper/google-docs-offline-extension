import test from "node:test";
import assert from "node:assert/strict";
import { harness, plain, flush } from "./harness.mjs";

async function compare(file, scenario, initial, testHooks = false) {
  const original = await harness("original", file, initial);
  const readable = await harness("readable", file, initial, testHooks);
  const before = await scenario(original),
    after = await scenario(readable);
  assert.deepEqual(plain(after), plain(before));
  assert.deepEqual(readable.trace, original.trace);
  assert.deepEqual(readable.local, original.local);
  assert.deepEqual(readable.errors, original.errors);
  return after;
}
const worker = "service_worker_bin_prod.js",
  offscreen = "offscreendocument_main.js";

test("网页握手保存账号及时间，重复握手仍可响应", async () => {
  await compare(worker, async (h) => {
    const request = [1, null, null, null, null, null, ["handshake-user"]];
    const responses = [
      await h.message("externalMessage", request),
      await h.message("externalMessage", request),
    ];
    assert.equal(h.local.lastSuccessfulFrameConnectTime, 1700000000000);
    assert.equal(h.local.optedInUserOuid, "handshake-user");
    return responses;
  });
});

test("offscreen 握手保存传入时间；内部退出通知清除账号", async () => {
  await compare(worker, async (h) => {
    const connected = await h.message("internalMessage", [
      3,
      null,
      null,
      ["internal-user", "123456"],
    ]);
    assert.equal(h.local.lastSuccessfulFrameConnectTime, 123456);
    assert.equal(h.local.optedInUserOuid, "internal-user");
    const removed = await h.message("internalMessage", [7]);
    assert.equal(h.local.offlineOptedIn, false);
    return [connected, removed];
  });
});

test("账号不匹配只重建一次，再次通知关闭隐藏页", async () => {
  await compare(worker, async (h) => {
    const first = await h.message("externalMessage", [3, null, ["next-user"]]);
    assert.equal(h.trace.filter((x) => x[0] === "offscreen.create").length, 1);
    const second = await h.message("externalMessage", [
      3,
      null,
      ["third-user"],
    ]);
    assert.equal(h.trace.filter((x) => x[0] === "offscreen.create").length, 1);
    assert.equal(h.trace.filter((x) => x[0] === "offscreen.close").length, 1);
    return [first, second];
  });
});

test("现有 heartbeat 不重复创建，仅 force 请求立即转发", async () => {
  await compare(worker, async (h) => {
    h.context.chrome.alarms.get = (name, callback) =>
      queueMicrotask(() => callback({ name }));
    await h.message("externalMessage", [
      1,
      null,
      null,
      null,
      null,
      null,
      ["test-user"],
    ]);
    const request = (force) => [
      2,
      null,
      null,
      null,
      null,
      null,
      null,
      ["test-user", force],
    ];
    await h.message("externalMessage", request(false));
    assert.equal(
      h.trace.filter((x) => x[0] === "sendMessage" && x[1][0] === 4).length,
      0,
    );
    const response = await h.message("externalMessage", request(true));
    assert.equal(h.trace.filter((x) => x[0] === "alarm.create").length, 0);
    assert.equal(
      h.trace.filter((x) => x[0] === "sendMessage" && x[1][0] === 4).length,
      1,
    );
    return response;
  });
});

test("offscreen 初始化断开通道时重建后重试一次", async () => {
  await compare(worker, async (h) => {
    const runtime = h.context.chrome.runtime,
      send = runtime.sendMessage;
    let attempts = 0;
    runtime.sendMessage = (request, options, callback) => {
      if (++attempts > 1) return send(request, options, callback);
      h.trace.push(["sendMessage", plain(request)]);
      queueMicrotask(() => {
        runtime.lastError = {
          message:
            "Could not establish connection. Receiving end does not exist.",
        };
        callback(undefined);
        delete runtime.lastError;
      });
    };
    const response = await h.message("externalMessage", [
      2,
      null,
      null,
      null,
      null,
      null,
      null,
      ["retry-user"],
    ]);
    assert.equal(attempts, 2);
    assert.equal(h.trace.filter((x) => x[0] === "offscreen.create").length, 2);
    assert.equal(h.trace.filter((x) => x[0] === "offscreen.close").length, 1);
    return response;
  });
});

test("offscreen 错误 envelope 向网页传递，不被当成成功", async () => {
  await compare(worker, async (h) => {
    h.context.chrome.runtime.sendMessage = (request, options, callback) => {
      h.trace.push(["sendMessage", plain(request)]);
      queueMicrotask(() => callback([request[0], null, ["synthetic failure"]]));
    };
    const response = await h.message("externalMessage", [
      2,
      null,
      null,
      null,
      null,
      null,
      null,
      ["error-user"],
    ]);
    assert.match(
      JSON.stringify(response),
      /Error from Offscreen page:synthetic failure/,
    );
    assert.equal(h.trace.filter((x) => x[0] === "alarm.create").length, 0);
    return response;
  });
});

test("offscreen 配置仅初始化一次，重建不悄悄改为第二个账号", async () => {
  await compare(offscreen, async (h) => {
    await h.message("internalMessage", [
      1,
      ["first-user", "https://docs.google.com", "1.110.1", "opted_in"],
    ]);
    const response = await h.message("internalMessage", [
      1,
      ["second-user", "https://docs.google.com", "1.110.1", "opted_in"],
    ]);
    assert.equal(h.children.length, 1);
    assert.match(h.children[0].src, /ouid=first-user$/);
    return response;
  });
});

test("外部连接阻止空闲关闭，全部断开才恢复计时", async () => {
  await compare(offscreen, async (h) => {
    const disconnect = [];
    const port = {
      onDisconnect: {
        addListener(fn) {
          disconnect.push(fn);
        },
      },
    };
    h.listeners.externalConnect[0](port);
    h.listeners.externalConnect[0](port);
    assert.equal(
      [...h.timers.values()].filter((x) => x.delay === 60000).length,
      0,
    );
    disconnect[0]();
    assert.equal(
      [...h.timers.values()].filter((x) => x.delay === 60000).length,
      0,
    );
    disconnect[1]();
    const idle = [...h.timers.values()].filter((x) => x.delay === 60000);
    assert.equal(idle.length, 1);
    idle[0].fn();
    return h.trace.filter((x) => x[0] === "window.close");
  });
});

test("iframe 经双端口握手通知 worker，并取消连接超时", async () => {
  await compare(offscreen, async (h) => {
    await h.message("internalMessage", [
      1,
      ["frame-user", "https://docs.google.com", "1.110.1", "opted_in"],
    ]);
    const replies = [];
    const event = {
      type: "message",
      data: [1, null, null, null, null, null, ["frame-user"]],
      ports: [
        {
          postMessage(data) {
            replies.push(plain(data));
          },
        },
        { postMessage() {} },
      ],
    };
    h.listeners["dom:message"][0](event);
    await flush();
    assert.deepEqual(replies, [[1]]);
    assert.ok(h.trace.some((x) => x[0] === "sendMessage" && x[1][0] === 3));
    assert.equal(
      [...h.timers.values()].filter((x) => x.delay === 14000).length,
      0,
    );
    return replies;
  });
});

test("网页探测标记保持版本、权限和 MV3", async () => {
  const result = await compare("page_embed_script.js", (h) =>
    h.run(
      "({exists: window._docs_chrome_extension_exists, version: window._docs_chrome_extension_version, features: window._docs_chrome_extension_features_version, permissions: window._docs_chrome_extension_permissions, manifest: window._docs_chrome_extension_manifest_version})",
    ),
  );
  assert.equal(result.version, "1.110.1");
  assert.equal(result.manifest, 3);
  assert.equal(result.exists, true);
});

test("worker 启动恢复及同步事件注册", async () => {
  const result = await compare(worker, (h) => ({
    events: Object.keys(h.listeners).sort(),
    local: h.local,
  }));
  assert.equal(result.local.docsDomain, "docs.google.com");
  assert.ok(result.events.includes("externalMessage"));
});

test("三态开关、OUID 持久化及退出清理", async () => {
  const result = await compare(
    worker,
    async (h) => {
      const names =
        h.variant === "original"
          ? { status: "tm", enable: "pm", user: "nm", disable: "rm" }
          : {
              status: "TestHooks.getOptInStatus",
              enable: "TestHooks.enableOffline",
              user: "TestHooks.getOptedInUserId",
              disable: "TestHooks.disableOffline",
            };
      const unknown = await h.run(`${names.status}()`);
      await h.run(`${names.enable}("test-ouid")`);
      const enabled = await h.run(`${names.status}()`),
        ouid = await h.run(`${names.user}()`);
      await h.run(`${names.disable}()`);
      return {
        unknown,
        enabled,
        ouid,
        disabled: await h.run(`${names.status}()`),
        removed: await h.run(`${names.user}()`),
      };
    },
    undefined,
    true,
  );
  assert.deepEqual(result, {
    unknown: "unknown",
    enabled: "opted_in",
    ouid: "test-ouid",
    disabled: "opted_out",
    removed: null,
  });
});

test("外部协议 type 5：企业策略 allow / auto / deny", async () => {
  const responses = await compare(worker, async (h) => {
    const result = [];
    for (const domain of [
      "allowed.example",
      "auto.example",
      "denied.example",
    ]) {
      result.push(
        await h.message("externalMessage", [5, null, null, null, [domain]]),
      );
    }
    return result;
  });
  for (const response of responses) assert.equal(response.keepAlive, true);
  assert.deepEqual(
    responses.map((x) => x.response[3]),
    [
      [1, 0],
      [1, 1],
      [0, 0],
    ],
  );
});

test("未知外部消息返回错误响应，不能静默成功", async () => {
  const result = await compare(worker, (h) =>
    h.message("externalMessage", [999]),
  );
  assert.match(JSON.stringify(result.response), /Dropped unknown message/);
});

test("外部启用请求创建 offscreen 并设置 heartbeat", async () => {
  await compare(worker, async (h) => {
    const message = [
      2,
      null,
      null,
      null,
      null,
      null,
      null,
      ["test-ouid", true],
    ];
    const result = await h.message("externalMessage", message);
    assert.equal(h.local.offlineOptedIn, true);
    assert.equal(h.local.optedInUserOuid, "test-ouid");
    assert.ok(
      h.trace.some(
        (x) =>
          x[0] === "offscreen.create" && x[1].reasons[0] === "IFRAME_SCRIPTING",
      ),
    );
    assert.ok(
      h.trace.some(
        (x) =>
          x[0] === "alarm.create" &&
          x[1] === "heartbeat" &&
          x[2].periodInMinutes === 5,
      ),
    );
    return result;
  });
});

test("已启用状态在 worker 重启后重建隐藏页面", async () => {
  await compare(
    worker,
    (h) => {
      assert.ok(h.trace.some((x) => x[0] === "offscreen.create"));
      return h.local;
    },
    { offlineOptedIn: true, optedInUserOuid: "test-ouid" },
  );
});

test("退出消息清除 OUID 与 heartbeat", async () => {
  await compare(
    worker,
    async (h) => {
      const response = await h.message("externalMessage", [3]);
      assert.equal(h.local.offlineOptedIn, false);
      assert.equal(h.local.optedInUserOuid, undefined);
      assert.ok(
        h.trace.some((x) => x[0] === "alarm.clear" && x[1] === "heartbeat"),
      );
      return response;
    },
    { offlineOptedIn: true, optedInUserOuid: "test-ouid" },
  );
});

test("offscreen 初始化创建 Google origin iframe，并编码 OUID", async () => {
  await compare(offscreen, async (h) => {
    const response = await h.message("internalMessage", [
      1,
      ["user+a/b", "https://docs.google.com", "1.110.1", "opted_in"],
    ]);
    assert.equal(h.children.length, 1);
    assert.equal(
      h.children[0].src,
      "https://docs.google.com/offline/extension/frame?ouid=user%2Ba%2Fb",
    );
    assert.ok([...h.timers.values()].some((x) => x.delay === 14000));
    return response;
  });
});

test("确保 iframe 不重复创建；显式移除可清理", async () => {
  await compare(offscreen, async (h) => {
    const message = [
      6,
      ["test-ouid", "https://docs.google.com", "1.110.1", "opted_in"],
    ];
    await h.message("internalMessage", message);
    await h.message("internalMessage", message);
    assert.equal(h.children.length, 1);
    const response = await h.message("internalMessage", [5]);
    assert.equal(h.children.length, 0);
    return response;
  });
});

test("offscreen 未知消息通过错误 envelope 返回", async () => {
  const response = await compare(offscreen, (h) =>
    h.message("internalMessage", [999]),
  );
  assert.match(JSON.stringify(response.response), /Dropped unknown message/);
});

test("offscreen 60 秒空闲关闭及 1 小时上限", async () => {
  await compare(offscreen, async (h) => {
    const idle = [...h.timers.values()].find((x) => x.delay === 60000);
    const limit = [...h.timers.values()].find((x) => x.delay === 3600000);
    assert.ok(idle);
    assert.ok(limit);
    idle.fn();
    limit.fn();
    await flush();
    assert.equal(h.trace.filter((x) => x[0] === "window.close").length, 2);
  });
});

test("MessageChannel 请求在响应后关闭端口", async () => {
  await compare(
    offscreen,
    async (h) => {
      h.context.replyPort = {
        postMessage(data, ports) {
          ports[0].postMessage([42]);
        },
      };
      await h.run(
        h.variant === "original"
          ? "(function(){var manager = new qm(50); manager.A.resolve(replyPort); return vm(manager, new bm([0]));})()"
          : "(function(){var manager = new TestHooks.GoogleIframeManager(50); manager.connection.resolve(replyPort); return manager.request(new TestHooks.Messages.FrameRequest([0]));})()",
      );
      assert.ok(h.trace.some((x) => x[0] === "port.close"));
      return h.trace.filter((x) => x[0] === "port.close").length;
    },
    undefined,
    true,
  );
});
