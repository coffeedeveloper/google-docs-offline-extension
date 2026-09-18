import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { parse, tokenizer } from 'acorn';

export const root = path.resolve(import.meta.dirname, '..');
export const baseline = path.join(root, 'original');
export const extension = path.join(root, 'extension');
export const jsFiles = ['page_embed_script.js', 'service_worker_bin_prod.js', 'offscreendocument_main.js'];
export const sha256 = data => createHash('sha256').update(data).digest('hex');
export async function files(dir, prefix = '') {
  const result = [];
  for (const entry of await readdir(path.join(dir, prefix), { withFileTypes: true })) {
    const relative = path.join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Unexpected symlink: ${relative}`);
    if (entry.isDirectory()) result.push(...await files(dir, relative));
    else result.push(relative);
  }
  return result.sort();
}
export function normalizedAst(source) {
  const ast = parse(source, { ecmaVersion: 'latest', sourceType: 'script' });
  return JSON.parse(JSON.stringify(ast, (key, value) =>
    ['start', 'end', 'loc', 'raw'].includes(key) ? undefined : value));
}
export function executableTokens(source) {
  return Array.from(tokenizer(source, { ecmaVersion: 'latest', sourceType: 'script' }), token =>
    [token.type.label, source.slice(token.start, token.end)]);
}
export async function source(relative, base = baseline) {
  return readFile(path.join(base, relative), 'utf8');
}
export function extensionId(key) {
  return createHash('sha256').update(Buffer.from(key, 'base64')).digest('hex')
    .slice(0, 32).replace(/[0-9a-f]/g, x => String.fromCharCode(97 + parseInt(x, 16)));
}
