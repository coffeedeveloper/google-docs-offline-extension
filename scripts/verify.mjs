import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { parse } from "acorn";
import {
  baseline,
  extension,
  root,
  files,
  jsFiles,
  sha256,
  executableTokens,
  extensionId,
} from "./common.mjs";
import { compileEntry } from "./build.mjs";

const inventory = JSON.parse(
  await readFile(path.join(root, "research/baseline-sha256.json"), "utf8"),
);
const baselineFiles = await files(baseline);
assert.deepEqual(
  baselineFiles,
  Object.keys(inventory).sort(),
  "Baseline inventory changed",
);
assert.deepEqual(
  await files(extension),
  [...baselineFiles, ...jsFiles.map((file) => file + ".map")].sort(),
);
const resources = [];
for (const relative of baselineFiles) {
  const before = await readFile(path.join(baseline, relative));
  assert.equal(
    sha256(before),
    inventory[relative],
    `Baseline hash: ${relative}`,
  );
  if (!jsFiles.includes(relative)) {
    assert.deepEqual(
      await readFile(path.join(extension, relative)),
      before,
      relative,
    );
    resources.push(relative);
  }
}

// Only extracted library code retains executable-token identity. Business modules do not.
const provenance = JSON.parse(
  await readFile(path.join(root, "research/vendor-provenance.json"), "utf8"),
);
for (const [file, record] of Object.entries(provenance)) {
  const original = await readFile(path.join(baseline, record.original), "utf8");
  assert.equal(sha256(original), record.originalSha256);
  const extracted = record.ranges
    .map((range) => {
      const chunk = original.slice(range.start, range.end);
      assert.equal(sha256(chunk), range.sha256, `Vendor source range: ${file}`);
      return chunk;
    })
    .join("\n");
  const generated = await readFile(path.join(root, file), "utf8");
  assert.equal(
    sha256(generated),
    record.sha256,
    `Vendor file changed: ${file}`,
  );
  const ast = parse(generated, { ecmaVersion: "latest", sourceType: "module" });
  const last = ast.body.at(-1);
  assert.equal(last.type, "ExportNamedDeclaration");
  assert.deepEqual(
    executableTokens(generated.slice(0, last.start)),
    executableTokens(extracted),
    `Vendor token drift: ${file}`,
  );
}

const bundles = [];
for (const file of jsFiles) {
  const build = await compileEntry(file);
  for (const output of build.outputFiles) {
    const actual = await readFile(output.path);
    assert.deepEqual(
      actual,
      Buffer.from(output.contents),
      `Stale build: ${output.path}`,
    );
    bundles.push({
      file: path.relative(extension, output.path),
      sha256: sha256(actual),
    });
  }
  parse(await readFile(path.join(extension, file), "utf8"), {
    ecmaVersion: "latest",
    sourceType: "script",
  });
  const map = JSON.parse(
    await readFile(path.join(extension, file + ".map"), "utf8"),
  );
  for (let i = 0; i < map.sources.length; i++) {
    assert.equal(
      map.sourcesContent[i],
      await readFile(path.resolve(extension, map.sources[i]), "utf8"),
      "Stale source map",
    );
  }
}
const manifest = JSON.parse(
  await readFile(path.join(extension, "manifest.json"), "utf8"),
);
assert.equal(manifest.manifest_version, 3);
assert.equal(extensionId(manifest.key), "ghbmnnjooekpmoecnnnilnnbdlolhkhi");
for (const relative of [
  manifest.background.service_worker,
  manifest.storage.managed_schema,
  ...Object.values(manifest.icons),
  ...manifest.web_accessible_resources.flatMap((x) => x.resources),
  "offscreendocument.html",
]) {
  await readFile(path.join(extension, relative));
}
assert.match(
  await readFile(path.join(extension, "offscreendocument.html"), "utf8"),
  /src="offscreendocument_main\.js"/,
);
await mkdir(path.join(root, "research/validation"), { recursive: true });
await writeFile(
  path.join(root, "research/validation/modular-build.json"),
  JSON.stringify(
    {
      extensionId: extensionId(manifest.key),
      version: manifest.version,
      claim:
        "Unchanged baseline/assets and extracted vendor tokens; deterministic modular bundles and matching source maps. Business behavior requires differential/browser tests; no business AST-equivalence claim.",
      baselineFiles: baselineFiles.length,
      byteIdenticalResources: resources.length,
      vendorFiles: Object.keys(provenance),
      bundles,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `PASS: baseline ${baselineFiles.length}; resources ${resources.length} byte-identical; vendor token provenance; 3 reproducible bundles/maps; manifest ID preserved.`,
);
