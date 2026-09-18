import test from 'node:test';
import assert from 'node:assert/strict';
import { harness, plain, flush } from './harness.mjs';

async function compare(file, scenario, initial) {
  const original = await harness('original', file, initial);
  const readable = await harness('readable', file, initial);
  const before = await scenario(original), after = await scenario(readable);
  assert.deepEqual(plain(after), plain(before));
  assert.deepEqual(readable.trace, original.trace);
  assert.deepEqual(readable.local, original.local);
  assert.deepEqual(readable.errors, original.errors);
  return after;
}
const worker = 'service_worker_bin_prod.js', offscreen = 'offscreendocument_main.js';

test('网页探测标记保持版本、权限和 MV3', async () => {
  const result = await compare('page_embed_script.js', h => h.run('({exists: window._docs_chrome_extension_exists, version: window._docs_chrome_extension_version, features: window._docs_chrome_extension_features_version, permissions: window._docs_chrome_extension_permissions, manifest: window._docs_chrome_extension_manifest_version})'));
  assert.equal(result.version, '1.110.1'); assert.equal(result.manifest, 3); assert.equal(result.exists, true);
});

test('worker 启动恢复及同步事件注册', async () => {
  const result = await compare(worker, h => ({ events: Object.keys(h.listeners).sort(), local: h.local }));
  assert.equal(result.local.docsDomain, 'docs.google.com');
  assert.ok(result.events.includes('externalMessage'));
});

test('三态开关、OUID 持久化及退出清理', async () => {
  const result = await compare(worker, async h => {
    const unknown = await h.run('tm()');
    await h.run('pm("test-ouid")');
    const enabled = await h.run('tm()'), ouid = await h.run('nm()');
    await h.run('rm()');
    return { unknown, enabled, ouid, disabled: await h.run('tm()'), removed: await h.run('nm()') };
  });
  assert.deepEqual(result, { unknown: 'unknown', enabled: 'opted_in', ouid: 'test-ouid', disabled: 'opted_out', removed: null });
});

test('外部协议 type 5：企业策略 allow / auto / deny', async () => {
  const responses = await compare(worker, async h => {
    const result = [];
    for (const domain of ['allowed.example', 'auto.example', 'denied.example']) {
      result.push(await h.message('externalMessage', [5, null, null, null, [domain]]));
    }
    return result;
  });
  for (const response of responses) assert.equal(response.keepAlive, true);
  assert.deepEqual(responses.map(x => x.response[3]), [[1, 0], [1, 1], [0, 0]]);
});

test('未知外部消息返回错误响应，不能静默成功', async () => {
  const result = await compare(worker, h => h.message('externalMessage', [999]));
  assert.match(JSON.stringify(result.response), /Dropped unknown message/);
});

test('外部启用请求创建 offscreen 并设置 heartbeat', async () => {
  await compare(worker, async h => {
    const message = [2, null, null, null, null, null, null, ['test-ouid', true]];
    const result = await h.message('externalMessage', message);
    assert.equal(h.local.offlineOptedIn, true);
    assert.equal(h.local.optedInUserOuid, 'test-ouid');
    assert.ok(h.trace.some(x => x[0] === 'offscreen.create' && x[1].reasons[0] === 'IFRAME_SCRIPTING'));
    assert.ok(h.trace.some(x => x[0] === 'alarm.create' && x[1] === 'heartbeat' && x[2].periodInMinutes === 5));
    return result;
  });
});

test('已启用状态在 worker 重启后重建隐藏页面', async () => {
  await compare(worker, h => {
    assert.ok(h.trace.some(x => x[0] === 'offscreen.create'));
    return h.local;
  }, { offlineOptedIn: true, optedInUserOuid: 'test-ouid' });
});

test('退出消息清除 OUID 与 heartbeat', async () => {
  await compare(worker, async h => {
    const response = await h.message('externalMessage', [3]);
    assert.equal(h.local.offlineOptedIn, false);
    assert.equal(h.local.optedInUserOuid, undefined);
    assert.ok(h.trace.some(x => x[0] === 'alarm.clear' && x[1] === 'heartbeat'));
    return response;
  }, { offlineOptedIn: true, optedInUserOuid: 'test-ouid' });
});

test('offscreen 初始化创建同源 iframe，并编码 OUID', async () => {
  await compare(offscreen, async h => {
    const response = await h.message('internalMessage', [1, ['user+a/b', 'https://docs.google.com', '1.110.1', 'opted_in']]);
    assert.equal(h.children.length, 1);
    assert.equal(h.children[0].src, 'https://docs.google.com/offline/extension/frame?ouid=user%2Ba%2Fb');
    assert.ok([...h.timers.values()].some(x => x.delay === 14000));
    return response;
  });
});

test('确保 iframe 不重复创建；显式移除可清理', async () => {
  await compare(offscreen, async h => {
    const message = [6, ['test-ouid', 'https://docs.google.com', '1.110.1', 'opted_in']];
    await h.message('internalMessage', message);
    await h.message('internalMessage', message);
    assert.equal(h.children.length, 1);
    const response = await h.message('internalMessage', [5]);
    assert.equal(h.children.length, 0);
    return response;
  });
});

test('offscreen 未知消息通过错误 envelope 返回', async () => {
  const response = await compare(offscreen, h => h.message('internalMessage', [999]));
  assert.match(JSON.stringify(response.response), /Dropped unknown message/);
});

test('offscreen 60 秒空闲关闭及 1 小时上限', async () => {
  await compare(offscreen, async h => {
    const idle = [...h.timers.values()].find(x => x.delay === 60000);
    const limit = [...h.timers.values()].find(x => x.delay === 3600000);
    assert.ok(idle); assert.ok(limit);
    idle.fn(); limit.fn(); await flush();
    assert.equal(h.trace.filter(x => x[0] === 'window.close').length, 2);
  });
});

test('MessageChannel 请求在响应后关闭端口', async () => {
  await compare(offscreen, async h => {
    h.context.replyPort = { postMessage(data, ports) { ports[0].postMessage([42]); } };
    const response = await h.run('(function(){var manager = new qm(50); manager.A.resolve(replyPort); return vm(manager, new bm([0]));})()');
    assert.ok(h.trace.some(x => x[0] === 'port.close'));
    return h.run('typeof vm') + String(response.constructor.name);
  });
});
