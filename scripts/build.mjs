import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import beautify from 'js-beautify';
import { baseline, extension, files, jsFiles, root } from './common.mjs';
import { annotations } from './annotations.mjs';

// Deterministic mechanical transformation. No execution, renaming or bundling.
const navigation = ['# 可读代码导航', '', '自动生成；名称为研究注释，不是 Google 原始符号名。', ''];
for (const relative of await files(baseline)) {
  const from = path.join(baseline, relative);
  const to = path.join(extension, relative);
  await mkdir(path.dirname(to), { recursive: true });
  if (!jsFiles.includes(relative)) {
    await copyFile(from, to);
    continue;
  }
  let formatted = beautify.js(await readFile(from, 'utf8'), {
    indent_size: 2, wrap_line_length: 100, end_with_newline: true,
    preserve_newlines: false, unescape_strings: false,
  });
  const entries = annotations[relative] || [];
  for (const [needle, comment] of entries) {
    if (formatted.split(needle).length !== 2) throw new Error(`Annotation target not unique: ${relative}: ${needle}`);
    formatted = formatted.replace(needle, `// ${comment}\n${needle}`);
  }
  formatted = `// Google Docs Offline 1.110.1 — 本机原始代码的可读副本。\n// 仅格式化及添加注释；不恢复未知符号，不改变协议、作用域和入口。\n${formatted}`;
  await writeFile(to, formatted);
  navigation.push(`## ${relative}`, '');
  for (const [needle, comment] of entries) {
    const line = formatted.slice(0, formatted.indexOf(needle)).split('\n').length;
    navigation.push(`- [\`${needle}\`](../extension/${relative}#L${line}) — ${comment}`);
  }
  navigation.push('');
}
await mkdir(path.join(root, 'docs'), { recursive: true });
await writeFile(path.join(root, 'docs/CODE_MAP.md'), navigation.join('\n'));
console.log('Generated extension/ and docs/CODE_MAP.md from original/.');
