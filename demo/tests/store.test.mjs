import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import * as Y from "yjs";
import { DocumentStore } from "../server/store.mjs";
const make = async () =>
  new DocumentStore(
    path.join(
      await mkdtemp(path.join(os.tmpdir(), "offline-docs-store-")),
      "state.json",
    ),
  ).open();
const op = (id, doc) => ({
  id,
  update: Buffer.from(Y.encodeStateAsUpdate(doc)).toString("base64"),
});
test("React components and React DOM are bundled into the offline app shell", async () => {
  const map = JSON.parse(await readFile("dist/app.js.map", "utf8"));
  assert.ok(map.sources.some((file) => file.endsWith("src/app.jsx")));
  assert.ok(map.sources.some((file) => file.endsWith("react/EditorPage.jsx")));
  assert.ok(map.sources.some((file) => file.includes("react-dom")));
  const html = await readFile("dist/index.html", "utf8");
  assert.match(html, /src="\/app.js"/);
  assert.doesNotMatch(html, /https?:\/\//);
  const shell = await readFile("dist/sw.js", "utf8");
  assert.match(shell, /"\/app.js"/);
  const controller = await readFile("src/application.js", "utf8");
  assert.doesNotMatch(controller, /innerHTML|querySelector|createElement/);
});
test("durable ACK, idempotent retry and process restart", async () => {
  const store = await make(),
    doc = new Y.Doc();
  doc.getText("title").insert(0, "Test");
  doc.getText("body").insert(0, "one edit");
  const operation = op("stable-operation-id", doc);
  const first = await store.sync("new-doc", [operation]);
  const second = await store.sync("new-doc", [operation]);
  assert.equal(first.version, second.version);
  assert.equal(second.body, "one edit");
  assert.deepEqual(second.ack, ["stable-operation-id"]);
  const reopened = await new DocumentStore(store.file).open();
  assert.equal(reopened.get("new-doc").body, "one edit");
});
test("concurrent offline updates merge; reversed and duplicate updates converge", async () => {
  const store = await make(),
    base = store.get("welcome");
  const a = new Y.Doc(),
    b = new Y.Doc();
  for (const doc of [a, b])
    Y.applyUpdate(doc, new Uint8Array(Buffer.from(base.state, "base64")));
  a.getText("body").insert(0, "ALPHA\n");
  b.getText("body").insert(0, "BETA\n");
  await Promise.all([
    store.sync("welcome", [op("a", a)]),
    store.sync("welcome", [op("b", b)]),
  ]);
  const merged = store.get("welcome");
  assert.match(merged.body, /ALPHA/);
  assert.match(merged.body, /BETA/);
  Y.applyUpdate(a, Y.encodeStateAsUpdate(b));
  Y.applyUpdate(b, Y.encodeStateAsUpdate(a));
  assert.equal(a.getText("body").toString(), b.getText("body").toString());
  assert.equal(merged.body, a.getText("body").toString());
});
test("reused operation ID with different content fails without corrupting state", async () => {
  const store = await make(),
    doc = new Y.Doc();
  doc.getText("body").insert(0, "first");
  await store.sync("id-test", [op("same", doc)]);
  doc.getText("body").insert(0, "second");
  await assert.rejects(store.sync("id-test", [op("same", doc)]), /reused/);
  assert.equal(store.get("id-test").body, "first");
});
test("demo bundles consume the live workspace runtime, with matching source fingerprints", async () => {
  const record = JSON.parse(
    await readFile("extension/build-info.json", "utf8"),
  );
  const runtimeRoot = path.dirname(
    fileURLToPath(
      import.meta.resolve("@offline-docs/extension-runtime/package.json"),
    ),
  );
  assert.equal(runtimeRoot, path.resolve("../src"));
  assert.equal(path.resolve(record.runtimeSource), runtimeRoot);
  assert.equal(
    record.runtimeHash,
    createHash("sha256")
      .update(JSON.stringify(record.sourceHashes))
      .digest("hex"),
  );
  assert.deepEqual(
    Object.keys(record.sourceHashes).sort(),
    (await readdir(runtimeRoot, { recursive: true }))
      .filter(
        (file) =>
          file.endsWith(".js") &&
          !file.split(path.sep).includes("node_modules"),
      )
      .sort(),
  );
  for (const [file, hash] of Object.entries(record.sourceHashes))
    assert.equal(
      createHash("sha256")
        .update(await readFile(path.join(runtimeRoot, file)))
        .digest("hex"),
      hash,
      file,
    );
  for (const file of [
    "background/extension-controller.js",
    "background/offscreen-manager.js",
    "offscreen/offscreen-controller.js",
    "offscreen/iframe-manager.js",
    "vendor/background-runtime.js",
    "vendor/offscreen-runtime.js",
  ])
    assert.ok(
      record.extensionInputs.some(
        (input) => path.resolve(input) === path.join(runtimeRoot, file),
      ),
      `Shared runtime missing from build: ${file}`,
    );
  assert.ok(
    record.extensionInputs.every((input) => !input.includes("upstream/")),
  );
});
test("demo extension has a separate ID and grants no Google hosts or content_capabilities", async () => {
  const manifest = JSON.parse(
    await readFile("extension/dist/manifest.json", "utf8"),
  );
  const info = JSON.parse(await readFile("extension/build-info.json", "utf8"));
  assert.equal(info.extensionId, "ikiiibboenfblpmpholjlkmbbnkichpo");
  const derivedId = createHash("sha256")
    .update(Buffer.from(manifest.key, "base64"))
    .digest("hex")
    .slice(0, 32)
    .replace(/[0-9a-f]/g, (x) => String.fromCharCode(97 + parseInt(x, 16)));
  assert.equal(derivedId, info.extensionId);
  assert.deepEqual(manifest.host_permissions, ["http://localhost/*"]);
  assert.equal(manifest.content_capabilities, undefined);
});
test("demo safety adaptations are confined to demo bundles, never the shared source", async () => {
  const shared = await readFile(
    "../src/background/extension-controller.js",
    "utf8",
  );
  const demo = await readFile(
    "extension/dist/service_worker_bin_prod.js",
    "utf8",
  );
  const frame = await readFile(
    "extension/dist/offscreendocument_main.js",
    "utf8",
  );
  assert.ok(!shared.includes("DEMO_ORIGIN"));
  assert.match(shared, /this\.onWebsiteMessage\(request, reply\),/);
  assert.match(demo, /sender\.origin === "http:\/\/localhost:4173"/);
  assert.match(frame, /event\.origin !== "http:\/\/localhost:4173"/);
  assert.match(frame, /event\.source !== document\.querySelector/);
});
