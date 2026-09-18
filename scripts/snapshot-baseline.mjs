import { mkdir, cp, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { baseline, root, files, sha256 } from './common.mjs';

const origin = '/Users/ellison/Projects/google-docs-offline-origin-extension';
await mkdir(baseline); // Refuse to overwrite an existing baseline.
await cp(origin, baseline, { recursive: true, errorOnExist: true, force: false,
  filter: candidate => !['.DS_Store', '_metadata'].includes(path.basename(candidate)) });
const inventory = {};
for (const file of await files(baseline)) inventory[file] = sha256(await readFile(path.join(baseline, file)));
await mkdir(path.join(root, 'research'), { recursive: true });
await writeFile(path.join(root, 'research/baseline-sha256.json'), JSON.stringify(inventory, null, 2) + '\n');
console.log(`Snapshotted ${Object.keys(inventory).length} runtime files; excluded Finder metadata and Web Store install verification metadata.`);
