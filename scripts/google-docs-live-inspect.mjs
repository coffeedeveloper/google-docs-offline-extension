import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { extension, root, jsFiles, sha256 } from "./common.mjs";

// Read-only metadata. Does not dump cookies, account IDs, document text or request bodies.
const endpoint = process.argv[2];
if (!endpoint || new URL(endpoint).hostname !== "127.0.0.1") {
  throw Error(
    "Pass the loopback debugging endpoint printed by google-docs-live-session.mjs",
  );
}
const browser = await chromium.connectOverCDP(endpoint);
try {
  const context = browser.contexts()[0];
  const worker = context
    .serviceWorkers()
    .find((item) =>
      item
        .url()
        .startsWith("chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/"),
    );
  if (!worker) throw Error("Reconstructed extension worker is not active");
  const loadedHashes = await worker.evaluate(async (files) => {
    const result = {};
    for (const file of files) {
      const bytes = await (
        await fetch(chrome.runtime.getURL(file))
      ).arrayBuffer();
      const digest = new Uint8Array(
        await crypto.subtle.digest("SHA-256", bytes),
      );
      result[file] = [...digest]
        .map((value) => value.toString(16).padStart(2, "0"))
        .join("");
    }
    return result;
  }, jsFiles);
  const expectedHashes = Object.fromEntries(
    await Promise.all(
      jsFiles.map(async (file) => [
        file,
        sha256(await readFile(path.join(extension, file))),
      ]),
    ),
  );
  assert.deepEqual(
    loadedHashes,
    expectedHashes,
    "Loaded extension is not the current reconstruction",
  );
  const extensionState = await worker.evaluate(async () => {
    const storage = await chrome.storage.local.get([
      "offlineOptedIn",
      "optedInUserOuid",
      "lastSuccessfulFrameConnectTime",
    ]);
    const alarm = await chrome.alarms.get("heartbeat");
    return {
      id: chrome.runtime.id,
      version: chrome.runtime.getManifest().version,
      optedIn: storage.offlineOptedIn ?? null,
      hasAccountIdentifier: Boolean(storage.optedInUserOuid),
      lastSuccessfulFrameConnectTime:
        storage.lastSuccessfulFrameConnectTime ?? null,
      heartbeat: alarm
        ? { name: alarm.name, periodInMinutes: alarm.periodInMinutes }
        : null,
      contexts: (await chrome.runtime.getContexts({})).map((item) => ({
        type: item.contextType,
        pathname: item.documentUrl ? new URL(item.documentUrl).pathname : null,
      })),
    };
  });
  const pages = [];
  for (const page of context.pages()) {
    const url = new URL(page.url());
    if (
      ![
        "https://docs.google.com",
        "https://drive.google.com",
        "https://accounts.google.com",
      ].includes(url.origin)
    )
      continue;
    const state = await page.evaluate(() => ({
      origin: location.origin,
      isDocumentEditor: /^\/document\/d\//.test(location.pathname),
      authenticationPage: location.origin === "https://accounts.google.com",
      extensionDetected: window._docs_chrome_extension_exists === true,
      extensionVersion: window._docs_chrome_extension_version ?? null,
      online: navigator.onLine,
      webServiceWorkerControlled: Boolean(navigator.serviceWorker?.controller),
    }));
    pages.push(state);
  }
  const report = {
    inspectedAt: new Date().toISOString(),
    browser: browser.version(),
    fixtureRouting: false,
    loadedJavaScriptMatchesReconstruction: true,
    loadedHashes,
    extensionState,
    pages,
    authenticationRequired: pages.some((page) => page.authenticationPage),
    limitations:
      "Metadata snapshot only. Does not establish offline editing, restart persistence or server synchronization.",
  };
  await mkdir(path.join(root, "research/validation"), { recursive: true });
  await writeFile(
    path.join(root, "research/validation/google-docs-live.json"),
    JSON.stringify(report, null, 2) + "\n",
  );
  console.log(JSON.stringify(report, null, 2));
} finally {
  // Disconnect this CDP client; the owning live-session process keeps the browser open.
  await browser.close();
}
