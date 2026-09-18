import { mkdir, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";
import { baseline, extension, files, jsFiles, root } from "./common.mjs";

export const entries = {
  "service_worker_bin_prod.js": "src/background/index.js",
  "offscreendocument_main.js": "src/offscreen/index.js",
  "page_embed_script.js": "src/page/extension-probe.js",
};

export async function compileEntry(file, overrides = {}) {
  return build({
    absWorkingDir: root,
    entryPoints: [entries[file]],
    outfile: path.join(extension, file),
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "chrome109",
    minify: false,
    keepNames: true,
    treeShaking: false,
    sourcemap: "linked",
    sourcesContent: true,
    charset: "utf8",
    write: false,
    logLevel: "silent",
    ...overrides,
  });
}

export async function buildExtension() {
  for (const relative of await files(baseline)) {
    if (jsFiles.includes(relative)) continue;
    const destination = path.join(extension, relative);
    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(path.join(baseline, relative), destination);
  }
  for (const file of jsFiles) {
    const result = await compileEntry(file);
    for (const output of result.outputFiles)
      await writeFile(output.path, output.contents);
  }
  console.log(
    "Built extension/ from src/ ES modules, with original manifest/assets and source maps.",
  );
}

if (process.argv[1] === path.join(root, "scripts/build.mjs"))
  await buildExtension();
