import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { baseline, extension } from '../scripts/common.mjs';

export const plain = value => value === undefined ? undefined : JSON.parse(JSON.stringify(value));
export async function flush() {
  for (let i = 0; i < 12; i++) await new Promise(resolve => setImmediate(resolve));
}
export async function harness(variant, file, initial = {}) {
  const trace = [], errors = [], listeners = {}, timers = new Map(), local = { ...initial };
  const managed = { allowedDocsOfflineDomains: ['allowed.example'], autoEnabledDocsOfflineDomains: ['auto.example'] };
  let timerId = 0;
  const event = name => ({ addListener(fn) { (listeners[name] ||= []).push(fn); trace.push(['listen', name]); } });
  const storage = (values, name) => ({
    get(keys, cb) { const result = {}; for (const key of keys) if (key in values) result[key] = values[key]; queueMicrotask(() => cb(result)); },
    set(valuesToSet, cb) { Object.assign(values, plain(valuesToSet)); trace.push(['set', name, plain(valuesToSet)]); queueMicrotask(() => cb?.()); },
    remove(key, cb) { delete values[key]; trace.push(['remove', name, key]); queueMicrotask(() => cb?.()); },
  });
  const children = [];
  const body = {
    getAttribute() { return null; }, setAttribute() {}, addEventListener() {}, removeEventListener() {},
    appendChild(element) { children.push(element); element.parentNode = body; trace.push(['append', element.tagName, element.id, element.src]); },
    removeChild(element) { children.splice(children.indexOf(element), 1); element.parentNode = null; trace.push(['removeFrame']); },
  };
  const fakeDate = class extends Date { constructor(...args) { super(...(args.length ? args : [1700000000000])); } static now() { return 1700000000000; } };
  const math = Object.create(Math); math.random = () => 0.5;
  let offscreenExists = false;
  const chrome = {
    runtime: {
      id: 'ghbmnnjooekpmoecnnnilnnbdlolhkhi',
      getManifest: () => ({ version: '1.110.1' }),
      getURL: file => `chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/${file}`,
      onMessageExternal: event('externalMessage'), onMessage: event('internalMessage'), onConnectExternal: event('externalConnect'),
      sendMessage(message, options, callback) { trace.push(['sendMessage', plain(message)]); queueMicrotask(() => callback([message[0]])); },
    },
    storage: { local: storage(local, 'local'), managed: storage(managed, 'managed') },
    alarms: {
      onAlarm: event('alarm'), get(name, cb) { queueMicrotask(() => cb(undefined)); },
      create(name, options) { trace.push(['alarm.create', name, plain(options)]); },
      clear(name, cb) { trace.push(['alarm.clear', name]); queueMicrotask(() => cb(true)); },
    },
    offscreen: {
      async createDocument(options) { offscreenExists = true; trace.push(['offscreen.create', plain(options)]); },
      async closeDocument() { offscreenExists = false; trace.push(['offscreen.close']); },
    },
  };
  const context = vm.createContext({
    console: { log() {}, warn() {}, error(...args) { errors.push(args.map(String)); }, debug() {} },
    URL, URLSearchParams, Request, Response, Headers, AbortController, TextDecoder, TextEncoder,
    setTimeout(fn, delay) { const id = ++timerId; timers.set(id, { fn, delay }); if (!delay) queueMicrotask(() => { if (timers.has(id)) { timers.delete(id); fn(); } }); return id; },
    clearTimeout(id) { timers.delete(id); }, setInterval() { return ++timerId; }, clearInterval() {},
    queueMicrotask, Date: fakeDate, Math: math,
    navigator: { userAgent: 'Mozilla/5.0 Chrome/140.0.0.0 Safari/537.36', language: 'en-US' },
    location: 'chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/offscreendocument.html?sessionId=test&randomPercentageForSampling=50',
    ...(file === 'service_worker_bin_prod.js' ? {} : { document: { body, documentElement: { getAttribute() { return null; }, setAttribute() {}, addEventListener() {}, removeEventListener() {} }, createElement(tagName) { return { tagName, style: {}, getAttribute(key) { return this[key] ?? null; }, setAttribute(key, value) { this[key] = value; } }; } } }),
    addEventListener(name, fn) { (listeners[`dom:${name}`] ||= []).push(fn); }, removeEventListener() {},
    close() { trace.push(['window.close']); },
    async fetch(request) { trace.push(['fetch', request.url]); return new Response('{}', { status: 200 }); },
    chrome,
    clients: { async matchAll() { return offscreenExists ? [{ url: chrome.runtime.getURL('offscreendocument.html') }] : []; } },
    MessageChannel: class { constructor() { this.port1 = { close() { trace.push(['port.close']); } }; this.port2 = { postMessage: data => queueMicrotask(() => this.port1.onmessage?.({ data })) }; } },
  });
  vm.runInContext('self = globalThis; window = globalThis;', context);
  vm.runInContext(await readFile(path.join(variant === 'original' ? baseline : extension, file), 'utf8'), context, { filename: file, timeout: 2000 });
  await flush();
  return {
    context, trace, errors, listeners, timers, local, children,
    run(expression) { return vm.runInContext(expression, context, { timeout: 2000 }); },
    async message(channel, data) {
      const fn = listeners[channel]?.[0];
      if (!fn) throw Error(`No ${channel} listener`);
      let replied = false, response;
      const keepAlive = fn(plain(data), { origin: 'https://docs.google.com', url: 'https://docs.google.com/document/test' }, value => { replied = true; response = plain(value); });
      await flush();
      for (let attempt = 0; !replied && attempt < 3; attempt++) {
        const pending = [...timers.entries()].find(([, timer]) => timer.delay === 2000);
        if (!pending) break;
        timers.delete(pending[0]); pending[1].fn(); await flush();
      }
      if (!replied) throw Error(`No reply for ${channel}: ${JSON.stringify(data)}`);
      return { keepAlive, response };
    },
  };
}
