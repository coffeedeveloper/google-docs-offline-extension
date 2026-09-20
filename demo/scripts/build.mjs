import { build } from "esbuild";
import { readFile, writeFile, mkdir, cp, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
const demoRoot = path.resolve(import.meta.dirname, "..");
process.chdir(demoRoot);
const runtimeRoot = path.dirname(
  fileURLToPath(
    import.meta.resolve("@offline-docs/extension-runtime/package.json"),
  ),
);
const sourceHashes = {};
async function recordSources(directory, prefix = "") {
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort(
    (a, b) => a.name.localeCompare(b.name),
  )) {
    if (entry.name === "node_modules") continue;
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory())
      await recordSources(path.join(directory, entry.name), relative);
    else if (relative.endsWith(".js"))
      sourceHashes[relative] = createHash("sha256")
        .update(await readFile(path.join(runtimeRoot, relative)))
        .digest("hex");
  }
}
await recordSources(runtimeRoot);
const runtimeHash = createHash("sha256")
  .update(JSON.stringify(sourceHashes))
  .digest("hex");
const origin = "http://localhost:4173";
await mkdir("extension/dist", { recursive: true });
await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });
// The checked-in public key is stable. A missing key must not silently change the ID.
const key = (await readFile("extension/demo-public-key.txt", "utf8")).trim();
const extensionId = createHash("sha256")
  .update(Buffer.from(key, "base64"))
  .digest("hex")
  .slice(0, 32)
  .replace(/[0-9a-f]/g, (x) => String.fromCharCode(97 + parseInt(x, 16)));
const define = {
  DEMO_ORIGIN: JSON.stringify(origin),
  DEMO_EXTENSION_ID: JSON.stringify(extensionId),
  DEMO_RUNTIME_HASH: JSON.stringify(runtimeHash),
};
const common = {
  bundle: true,
  target: "chrome120",
  sourcemap: true,
  define,
  logLevel: "warning",
  metafile: true,
};
const originGuards = {
  name: "demo-origin-guards",
  setup(builder) {
    builder.onLoad({ filter: /extension-controller\.js$/ }, async (args) => {
      let source = await readFile(args.path, "utf8");
      const needle = "this.onWebsiteMessage(request, reply),";
      if (!source.includes(needle))
        throw Error("Upstream external listener changed; review adapter.");
      source = source.replace(
        needle,
        "sender.origin === DEMO_ORIGIN ? this.onWebsiteMessage(request, reply) : false,",
      );
      return {
        contents: source,
        loader: "js",
        resolveDir: path.dirname(args.path),
      };
    });
    builder.onLoad({ filter: /frame-message-router\.js$/ }, async (args) => {
      let source = await readFile(args.path, "utf8");
      const needle = "const event = unwrapMessageEvent(wrappedEvent);";
      if (!source.includes(needle))
        throw Error("Upstream frame router changed; review adapter.");
      source = source.replace(
        needle,
        needle +
          '\n    if (event.origin !== DEMO_ORIGIN || event.source !== document.querySelector("iframe")?.contentWindow) return;',
      );
      return {
        contents: source,
        loader: "js",
        resolveDir: path.dirname(args.path),
      };
    });
  },
};
const backgroundBuild = await build({
  ...common,
  entryPoints: ["extension/adapter/background.js"],
  outfile: "extension/dist/service_worker_bin_prod.js",
  format: "iife",
  keepNames: true,
  treeShaking: false,
  plugins: [originGuards],
});
const offscreenBuild = await build({
  ...common,
  entryPoints: [
    fileURLToPath(
      import.meta.resolve("@offline-docs/extension-runtime/offscreen/index.js"),
    ),
  ],
  outfile: "extension/dist/offscreendocument_main.js",
  format: "iife",
  keepNames: true,
  treeShaking: false,
  plugins: [originGuards],
});
await writeFile(
  "extension/dist/offscreendocument.html",
  '<!doctype html><html><head><meta charset="utf-8"><title>Offline Docs offscreen</title></head><body><script src="offscreendocument_main.js"></script></body></html>',
);
await writeFile(
  "extension/dist/manifest.json",
  JSON.stringify(
    {
      manifest_version: 3,
      name: "Offline Docs Demo · reconstructed runtime",
      version: "0.1.0",
      minimum_chrome_version: "120",
      description:
        "Local research adapter of the reconstructed Google Docs Offline runtime. Not a Google product.",
      key,
      background: { service_worker: "service_worker_bin_prod.js" },
      permissions: ["storage", "alarms", "offscreen", "unlimitedStorage"],
      host_permissions: ["http://localhost/*"],
      externally_connectable: { matches: ["http://localhost/*"] },
      storage: { managed_schema: "managed-schema.json" },
      content_security_policy: {
        extension_pages:
          "script-src 'self'; object-src 'self'; connect-src 'self' http://localhost:4173; frame-src http://localhost:4173",
      },
    },
    null,
    2,
  ) + "\n",
);
await writeFile(
  "extension/dist/managed-schema.json",
  JSON.stringify(
    {
      type: "object",
      properties: {
        allowedDocsOfflineDomains: { type: "array", items: { type: "string" } },
        autoEnabledDocsOfflineDomains: {
          type: "array",
          items: { type: "string" },
        },
      },
    },
    null,
    2,
  ) + "\n",
);
await build({
  ...common,
  entryPoints: ["src/app.jsx"],
  outfile: "dist/app.js",
  format: "esm",
  jsx: "automatic",
  define: { ...define, "process.env.NODE_ENV": JSON.stringify("production") },
});
await build({
  ...common,
  entryPoints: ["src/frame.js"],
  outfile: "dist/frame.js",
  format: "esm",
});
const assets = [
  "/",
  "/index.html",
  "/app.js",
  "/frame.js",
  "/frame.html",
  "/offline/extension/frame",
  "/styles.css",
  "/fonts.css",
  "/icon.svg",
];
const hash = createHash("sha256");
for (const file of [
  "app.js",
  "frame.js",
  "index.html",
  "frame.html",
  "styles.css",
  "fonts.css",
  "icon.svg",
])
  hash.update(await readFile("dist/" + file));
const version = hash.digest("hex").slice(0, 12);
await build({
  entryPoints: ["src/service-worker.js"],
  outfile: "dist/sw.js",
  bundle: true,
  target: "chrome120",
  define: {
    ASSET_LIST: JSON.stringify(assets),
    SHELL_VERSION: JSON.stringify(version),
  },
});
await writeFile(
  "extension/build-info.json",
  JSON.stringify(
    {
      extensionId,
      origin,
      runtimePackage: "@offline-docs/extension-runtime",
      runtimeSource: path.relative(demoRoot, runtimeRoot),
      runtimeHash,
      sourceHashes,
      extensionInputs: [
        ...new Set([
          ...Object.keys(backgroundBuild.metafile.inputs),
          ...Object.keys(offscreenBuild.metafile.inputs),
        ]),
      ].sort(),
      shellVersion: version,
      adaptations: [
        "new public key, ID and local-only manifest/CSP; no Google connections",
        "getDocsOrigin override; startup telemetry disabled",
        "exact external sender origin check",
        "iframe message origin/source checks",
      ],
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `Built app + reconstructed extension adapter.\nOrigin: ${origin}\nExtension ID: ${extensionId}\nLoad unpacked: ${path.resolve("extension/dist")}`,
);
