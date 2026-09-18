import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { chromium } from 'playwright';
import { baseline, extension, root } from './common.mjs';

// Actual Chromium extension APIs, isolated profiles, synthetic data only.
// A dead proxy prevents any traffic to Google, including service workers.
const id = 'ghbmnnjooekpmoecnnnilnnbdlolhkhi';
const results = [];
for (const [variant, directory] of [['original', baseline], ['readable', extension]]) {
  const profile = await mkdtemp(path.join(os.tmpdir(), 'docs-offline-investigation-'));
  const context = await chromium.launchPersistentContext(profile, {
    channel: 'chromium', headless: true,
    proxy: { server: 'http://127.0.0.1:9' },
    args: [`--disable-extensions-except=${directory}`, `--load-extension=${directory}`],
  });
  try {
    const worker = context.serviceWorkers().find(w => w.url().includes(id)) ||
      await context.waitForEvent('serviceworker', { predicate: w => w.url().includes(id), timeout: 15000 });
    const manifest = await worker.evaluate(() => chrome.runtime.getManifest());
    assert.equal(manifest.version, '1.110.1');
    assert.equal(await worker.evaluate(() => chrome.runtime.id), id);
    await context.route('https://docs.google.com/**', route => route.fulfill({
      contentType: 'text/html', body: '<!doctype html><title>Synthetic offline investigation fixture</title>',
    }));
    const page = await context.newPage();
    await page.goto('https://docs.google.com/offline-investigation-fixture', { waitUntil: 'domcontentloaded' });
    await page.addScriptTag({ url: `chrome-extension://${id}/page_embed_script.js` });
    const probe = await page.evaluate(() => ({
      exists: window._docs_chrome_extension_exists,
      version: window._docs_chrome_extension_version,
      manifest: window._docs_chrome_extension_manifest_version,
    }));
    assert.deepEqual(probe, { exists: true, version: '1.110.1', manifest: 3 });
    async function send(message) {
      return page.evaluate(async ({ id, message }) => {
        return Promise.race([
          new Promise((resolve, reject) => chrome.runtime.sendMessage(id, message, reply =>
            chrome.runtime.lastError ? reject(new Error(chrome.runtime.lastError.message)) : resolve(reply))),
          new Promise((_, reject) => setTimeout(() => reject(new Error('External message timeout')), 12000)),
        ]);
      }, { id, message });
    }
    const policy = await send([5, null, null, null, ['synthetic.example']]);
    assert.deepEqual(policy[3], [0, 0]);
    const unknown = await send([999]);
    assert.match(JSON.stringify(unknown), /Dropped unknown message/);
    const optIn = await send([2, null, null, null, null, null, null, ['offline-investigation-synthetic-user', true]]);
    assert.equal(optIn[0], 2);
    const nativeState = await worker.evaluate(async () => ({
      storage: await chrome.storage.local.get(['offlineOptedIn', 'optedInUserOuid']),
      heartbeat: await chrome.alarms.get('heartbeat'),
      offscreen: (await chrome.runtime.getContexts({ contextTypes: ['OFFSCREEN_DOCUMENT'] })).map(c => new URL(c.documentUrl).pathname),
    }));
    assert.equal(nativeState.storage.offlineOptedIn, true);
    assert.equal(nativeState.heartbeat.periodInMinutes, 5);
    assert.deepEqual(nativeState.offscreen, ['/offscreendocument.html']);
    await send([3]);
    const exited = await worker.evaluate(async () => ({
      storage: await chrome.storage.local.get(['offlineOptedIn', 'optedInUserOuid']),
      heartbeat: await chrome.alarms.get('heartbeat') ?? null,
      offscreenCount: (await chrome.runtime.getContexts({ contextTypes: ['OFFSCREEN_DOCUMENT'] })).length,
    }));
    assert.deepEqual(exited, { storage: { offlineOptedIn: false }, heartbeat: null, offscreenCount: 0 });
    results.push({ variant, browser: context.browser().version(), extensionId: id, probe, policy,
      nativeState: { ...nativeState, heartbeat: { name: nativeState.heartbeat.name, periodInMinutes: nativeState.heartbeat.periodInMinutes } },
      exited, profile, passed: true });
    console.log(`PASS Chromium ${variant}: native worker, external messages, probe, offscreen, heartbeat, opt-out.`);
  } finally { await context.close(); }
}
const comparable = ({ variant, profile, ...rest }) => rest;
assert.deepEqual(comparable(results[0]), comparable(results[1]));
await mkdir(path.join(root, 'research/validation'), { recursive: true });
await writeFile(path.join(root, 'research/validation/browser-smoke.json'), JSON.stringify({
  scope: 'Native Chrome extension API comparison in separate synthetic profiles. Google traffic blocked; no Google backend or real document sync tested.',
  results,
}, null, 2) + '\n');
