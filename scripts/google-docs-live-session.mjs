import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import readline from "node:readline";
import { chromium } from "playwright";
import { extension, jsFiles, sha256 } from "./common.mjs";

// Real Google pages, no route fixtures and no copied cookies. Authentication is manual.
const profile = await mkdtemp(path.join(os.tmpdir(), "docs-offline-live-"));
const browserContext = await chromium.launchPersistentContext(profile, {
  channel: "chromium",
  headless: false,
  args: [
    `--disable-extensions-except=${extension}`,
    `--load-extension=${extension}`,
    "--remote-debugging-port=0",
    "--remote-debugging-address=127.0.0.1",
  ],
});
const extensionId = "ghbmnnjooekpmoecnnnilnnbdlolhkhi";
const worker =
  browserContext
    .serviceWorkers()
    .find((item) => item.url().includes(extensionId)) ||
  (await browserContext.waitForEvent("serviceworker", { timeout: 15000 }));
const identity = await worker.evaluate(() => ({
  id: chrome.runtime.id,
  version: chrome.runtime.getManifest().version,
}));
if (identity.id !== extensionId) throw Error("Unexpected extension ID");
const page = browserContext.pages()[0] || (await browserContext.newPage());
await page.goto("https://docs.google.com/document/", {
  waitUntil: "domcontentloaded",
  timeout: 45000,
});
const [port] = (
  await readFile(path.join(profile, "DevToolsActivePort"), "utf8")
).split("\n");
const state = {
  startedAt: new Date().toISOString(),
  profile,
  debuggingEndpoint: `http://127.0.0.1:${port}`,
  browser: browserContext.browser().version(),
  extension: identity,
  testedJavaScript: Object.fromEntries(
    await Promise.all(
      jsFiles.map(async (file) => [
        file,
        sha256(await readFile(path.join(extension, file))),
      ]),
    ),
  ),
  scope:
    "Live Google session; manual sign-in; no original profile or credentials copied.",
};
await writeFile(
  path.join(profile, "investigation-session.json"),
  JSON.stringify(state, null, 2),
);
console.log(JSON.stringify(state));
console.log(
  "Session open. Commands: status, stop. No documents are created automatically.",
);
const input = readline.createInterface({ input: process.stdin });
input.on("line", async (line) => {
  if (line.trim() === "status") {
    console.log(
      JSON.stringify(
        await Promise.all(
          browserContext.pages().map(async (item) => ({
            title: await item.title(),
            origin: new URL(item.url()).origin,
          })),
        ),
      ),
    );
  } else if (line.trim() === "stop") {
    await browserContext.setOffline(false);
    await browserContext.close();
    input.close();
  }
});
