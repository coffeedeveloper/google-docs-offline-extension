import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { baseline, extension, root, files, jsFiles, sha256, normalizedAst, executableTokens, extensionId } from './common.mjs';

const inventory = JSON.parse(await readFile(path.join(root, 'research/baseline-sha256.json'), 'utf8'));
assert.deepEqual(await files(baseline), Object.keys(inventory).sort(), 'Baseline inventory changed');
assert.deepEqual(await files(extension), await files(baseline), 'Extension file inventory differs');
const result = [];
for (const relative of await files(baseline)) {
  const before = await readFile(path.join(baseline, relative));
  const after = await readFile(path.join(extension, relative));
  assert.equal(sha256(before), inventory[relative], `Baseline hash: ${relative}`);
  const mode = jsFiles.includes(relative) ? 'normalized AST and executable tokens equal' : 'byte identical';
  if (jsFiles.includes(relative)) {
    assert.equal(sha256(JSON.stringify(normalizedAst(before.toString()))), sha256(JSON.stringify(normalizedAst(after.toString()))), `AST mismatch: ${relative}`);
    assert.equal(sha256(JSON.stringify(executableTokens(before.toString()))), sha256(JSON.stringify(executableTokens(after.toString()))), `Executable token mismatch: ${relative}`);
  }
  else assert.deepEqual(before, after, relative);
  result.push({ file: relative, mode, originalSha256: sha256(before), readableSha256: sha256(after) });
}
const manifest = JSON.parse(await readFile(path.join(extension, 'manifest.json'), 'utf8'));
assert.equal(manifest.manifest_version, 3);
assert.equal(extensionId(manifest.key), 'ghbmnnjooekpmoecnnnilnnbdlolhkhi');
for (const relative of [manifest.background.service_worker, manifest.storage.managed_schema, ...Object.values(manifest.icons), ...manifest.web_accessible_resources.flatMap(x => x.resources), 'offscreendocument.html']) {
  await readFile(path.join(extension, relative));
}
const html = await readFile(path.join(extension, 'offscreendocument.html'), 'utf8');
assert.match(html, /src="offscreendocument_main\.js"/);
await mkdir(path.join(root, 'research/validation'), { recursive: true });
await writeFile(path.join(root, 'research/validation/static-equivalence.json'), JSON.stringify({
  extensionId: extensionId(manifest.key), version: manifest.version,
  claim: 'Executable token text/order equality and AST equality excluding positions and literal spelling; all non-JS files byte-identical. Not a Google end-to-end test.',
  files: result,
}, null, 2) + '\n');
console.log(`PASS: ${jsFiles.length} JavaScript ASTs equivalent; ${result.length - jsFiles.length} resources byte-identical; manifest ID preserved.`);
