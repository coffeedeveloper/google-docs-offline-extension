import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import os from "node:os";
import { chromium } from "playwright";
import * as Y from "yjs";
import { testReactUI } from "./react-ui.mjs";
const origin = "http://localhost:4173";
const temporary = await mkdtemp(
  path.join(os.tmpdir(), "offline-docs-integration-"),
);
const { extensionId, runtimeHash } = JSON.parse(
  await readFile("extension/build-info.json", "utf8"),
);
const report = {
  startedAt: new Date().toISOString(),
  extensionId,
  checks: [],
  errors: [],
};
let server, context;
function startServer() {
  server = spawn(process.execPath, ["server/index.mjs"], {
    env: { ...process.env, DEMO_DATA_DIR: temporary },
    stdio: ["ignore", "pipe", "pipe"],
  });
  return new Promise((resolve, reject) => {
    server.stdout.on("data", (data) => {
      if (data.toString().includes("Offline Docs:")) resolve();
    });
    server.stderr.on("data", (data) => {
      if (data.toString().includes("EADDRINUSE"))
        reject(
          Error(
            "Stop pnpm start before integration tests: port 4173 must be free.",
          ),
        );
    });
    server.on("error", reject);
    server.on("exit", (code) => {
      if (code) reject(Error("Test server exited " + code));
    });
  });
}
const stopServer = () =>
  new Promise((resolve) => {
    if (!server || server.exitCode !== null) return resolve();
    server.once("exit", resolve);
    server.kill("SIGTERM");
  });
async function until(check, label, timeout = 20000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await check()) return;
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw Error("Timeout: " + label);
}
async function state(page) {
  return page.evaluate(async () => (await import("/app.js")).inspectState());
}
async function invoke(page, name, ...args) {
  return page.evaluate(
    async ({ name, args }) => (await import("/app.js"))[name](...args),
    { name, args },
  );
}
try {
  await mkdir("test-results", { recursive: true });
  await startServer();
  context = await chromium.launchPersistentContext(
    path.join(temporary, "profile"),
    {
      channel: "chromium",
      headless: true,
      args: [
        `--disable-extensions-except=${path.resolve("extension/dist")}`,
        `--load-extension=${path.resolve("extension/dist")}`,
      ],
    },
  );
  context.on("weberror", (error) => report.errors.push(error.error().message));
  const page = await context.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") report.errors.push(message.text());
  });
  await page.goto(origin);
  await until(
    async () => (await state(page)).extensionInstalled,
    "extension detection",
  );
  await invoke(page, "enableOffline");
  await until(
    async () => (await state(page)).frame,
    "real offscreen iframe handshake",
  );
  assert.ok((await state(page)).shellReady);
  report.checks.push(
    "real extension → offscreen → same-origin iframe handshake; web Service Worker installed",
  );
  const worker = context
    .serviceWorkers()
    .find((item) => item.url().includes(extensionId));
  const extensionState = await worker.evaluate(async () => ({
    storage: await chrome.storage.local.get(["demoSource", "offlineOptedIn"]),
    contexts: (
      await chrome.runtime.getContexts({ contextTypes: ["OFFSCREEN_DOCUMENT"] })
    ).length,
  }));
  assert.equal(extensionState.storage.demoSource, runtimeHash);
  assert.equal(extensionState.contexts, 1);
  await invoke(page, "openDocument", "welcome");
  await invoke(page, "setNetworkSimulation", true);
  const { id } = await invoke(
    page,
    "createDocument",
    "Integration offline document",
  );
  await invoke(page, "editDocument", "body", "OFFLINE_DURABLE_MARKER");
  assert.ok((await state(page)).pendingCount > 0);
  await page.reload();
  const saved = await page.evaluate(async () => {
    const request = indexedDB.open("OfflineDocsDemo-v1");
    const db = await new Promise(
      (resolve) => (request.onsuccess = () => resolve(request.result)),
    );
    const tx = db.transaction("documents");
    return new Promise((resolve) => {
      const item = tx
        .objectStore("documents")
        .get(location.pathname.split("/")[2]);
      item.onsuccess = () => resolve(item.result.body);
    });
  });
  assert.equal(saved, "OFFLINE_DURABLE_MARKER");
  report.checks.push(
    "offline create/edit and durable document+outbox survive reload",
  );
  await invoke(page, "setNetworkSimulation", false);
  await until(async () => {
    const response = await fetch(`${origin}/api/documents/${id}`);
    return (
      response.ok && (await response.json()).body === "OFFLINE_DURABLE_MARKER"
    );
  }, "extension-backed upload");
  await until(
    async () => (await state(page)).pendingCount === 0,
    "ACK removal",
  );
  report.checks.push(
    "iframe and foreground share IndexedDB; real server ACK drains durable outbox",
  );

  // Real transport failure, not just navigator.onLine or the UI simulation switch.
  await stopServer();
  await page.reload();
  await invoke(
    page,
    "editDocument",
    "body",
    "OFFLINE_DURABLE_MARKER\nSERVER_STOPPED_EDIT",
  );
  await page.reload();
  assert.ok((await state(page)).pendingCount > 0);
  await startServer();
  await invoke(page, "setNetworkSimulation", false);
  await until(async () => {
    const response = await fetch(`${origin}/api/documents/${id}`);
    return (
      response.ok &&
      (await response.json()).body.includes("SERVER_STOPPED_EDIT")
    );
  }, "cold offline shell and reconnect");
  report.checks.push(
    "server stopped: editor cold reload and editing work from SW/IndexedDB; restart sync succeeds",
  );

  const remote = await (await fetch(`${origin}/api/documents/${id}`)).json();
  const doc = new Y.Doc();
  Y.applyUpdate(doc, new Uint8Array(Buffer.from(remote.state, "base64")));
  doc.getText("body").insert(0, "ACK_LOSS\n");
  const operation = {
    id: crypto.randomUUID(),
    update: Buffer.from(Y.encodeStateAsUpdate(doc)).toString("base64"),
  };
  await fetch(`${origin}/api/documents/${id}/sync`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Demo-Drop-Ack": "1" },
    body: JSON.stringify({
      account: "local-demo-account",
      operations: [operation],
    }),
  }).catch(() => {});
  const retry = await (
    await fetch(`${origin}/api/documents/${id}/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        account: "local-demo-account",
        operations: [operation],
      }),
    })
  ).json();
  assert.equal(retry.body.split("ACK_LOSS").length - 1, 1);
  report.checks.push("server committed but ACK lost: retry is idempotent");

  // Queue a local update, close all application tabs, then wake original alarm listener.
  await invoke(page, "setNetworkSimulation", true);
  await invoke(page, "editDocument", "body", "BACKGROUND_ONLY_UPLOAD");
  // Remove the old background context so a BroadcastChannel notification cannot
  // do the upload. Only the extension's real alarm can recreate the frame now.
  await worker.evaluate(() => chrome.offscreen.closeDocument());
  await invoke(page, "setNetworkSimulation", false);
  await page.close();
  await worker.evaluate(() =>
    chrome.alarms.create("heartbeat", { when: Date.now() + 1000 }),
  );
  await until(async () => {
    const response = await fetch(`${origin}/api/documents/${id}`);
    return (
      response.ok &&
      (await response.json()).body.includes("BACKGROUND_ONLY_UPLOAD")
    );
  }, "background upload after all app tabs closed");
  report.checks.push(
    "application tabs closed: extension alarm/offscreen frame syncs pending operations",
  );

  const firstTab = await context.newPage();
  await firstTab.goto(`${origin}/document/${id}`);
  await state(firstTab);
  const secondTab = await context.newPage();
  await secondTab.goto(`${origin}/document/${id}`);
  await state(secondTab);
  await invoke(firstTab, "setNetworkSimulation", true);
  const shared = (await invoke(firstTab, "readLocalDocument", id)).body;
  await Promise.all([
    invoke(firstTab, "editDocument", "body", shared + "\nTAB_ALPHA"),
    invoke(secondTab, "editDocument", "body", shared + "\nTAB_BETA"),
  ]);
  const concurrent = await invoke(firstTab, "readLocalDocument", id);
  assert.match(concurrent.body, /TAB_ALPHA/);
  assert.match(concurrent.body, /TAB_BETA/);
  await invoke(firstTab, "setNetworkSimulation", false);
  await until(async () => {
    const remote = await (await fetch(`${origin}/api/documents/${id}`)).json();
    return (
      remote.body.includes("TAB_ALPHA") && remote.body.includes("TAB_BETA")
    );
  }, "multi-tab convergence");
  report.checks.push(
    "two tabs concurrently edit offline: atomic local merge and server CRDT convergence preserve both changes",
  );

  await invoke(firstTab, "setNetworkSimulation", true);
  const beforeFailure = await invoke(firstTab, "readLocalDocument", id);
  await firstTab.evaluate(() => {
    globalThis.originalIdbPut = IDBObjectStore.prototype.put;
    IDBObjectStore.prototype.put = function (...args) {
      if (this.name === "outbox")
        throw new DOMException(
          "Injected storage failure",
          "QuotaExceededError",
        );
      return globalThis.originalIdbPut.apply(this, args);
    };
  });
  await assert.rejects(
    invoke(
      firstTab,
      "editDocument",
      "body",
      beforeFailure.body + "\nQUOTA_RETRY",
    ),
    /Injected storage failure/,
  );
  const afterFailure = await invoke(firstTab, "readLocalDocument", id);
  assert.equal(afterFailure.body, beforeFailure.body);
  assert.ok((await state(firstTab)).localUnsaved > 0);
  await firstTab.evaluate(() => {
    IDBObjectStore.prototype.put = globalThis.originalIdbPut;
    delete globalThis.originalIdbPut;
  });
  await invoke(firstTab, "flushLocalWrites");
  assert.match(
    (await invoke(firstTab, "readLocalDocument", id)).body,
    /QUOTA_RETRY/,
  );
  await invoke(firstTab, "setNetworkSimulation", false);
  report.checks.push(
    "outbox write failure rolls back document transaction; unsaved editor data retained and explicit retry succeeds",
  );
  await firstTab.close();
  await secondTab.close();
  await testReactUI({ context, origin, report, state, until, invoke });
  report.expectedNetworkFailures = report.errors.filter((message) =>
    message.includes("ERR_CONNECTION_REFUSED"),
  );
  report.unexpectedErrors = report.errors.filter(
    (message) => !message.includes("ERR_CONNECTION_REFUSED"),
  );
  assert.deepEqual(
    report.unexpectedErrors,
    [],
    "Unexpected browser runtime error",
  );
  report.passed = true;
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  report.passed = false;
  report.failure = error.stack;
  console.error(JSON.stringify(report, null, 2));
  process.exitCode = 1;
} finally {
  await context?.close();
  await stopServer();
  await mkdir("test-results", { recursive: true });
  await writeFile(
    "test-results/integration.json",
    JSON.stringify(report, null, 2) + "\n",
  );
}
