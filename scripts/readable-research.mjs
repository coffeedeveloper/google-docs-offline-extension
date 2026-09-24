import assert from "node:assert/strict";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { format } from "prettier";
import { root, sha256 } from "./common.mjs";
import {
  analyzeResearch,
  assertBindingEquivalent,
  renameResearch,
  expandResearchSyntax,
} from "./research-readable-model.mjs";
import { researchBundles } from "./research-readable-names.mjs";

const options = { parser: "babel", printWidth: 100 };
const header = `/**
 * 固定 Google 样本的语义阅读副本，不是 Google 原始源码。
 * 只重命名已确认的词法绑定并添加职责说明；保留属性 ABI、协议值和执行顺序。
 * 生成：pnpm research:generate；校验：pnpm research:check。
 * 未确认的运行库符号仍保留短名。不得作为自研实现或真实账号启动响应直接部署。
 */\n`;

function declarationStatement(model, binding) {
  let node = model.parentOf.get(binding.declarations[0]).node;
  if (node.type === "VariableDeclarator") node = model.parentOf.get(node).node;
  return node;
}

/** 切片只是阅读导航；完整 bundle 是保持初始化顺序的权威副本。 */
function extractSection(model, from, to, until) {
  const owner = model.scopes.reduce((best, s) =>
    s.bindings.size > best.bindings.size ? s : best,
  );
  const first = declarationStatement(model, owner.bindings.get(from));
  const last = declarationStatement(model, owner.bindings.get(to));
  const body = model.parentOf.get(first).node.body;
  const start = body.indexOf(first),
    end = body.indexOf(last);
  assert(start >= 0 && end >= start, `Invalid section ${from} → ${to}`);
  let stop = end + 1;
  // 结尾的 prototype 方法与导出调用也纳入，但不吞入下一模块的声明。
  while (
    stop < body.length &&
    !["FunctionDeclaration", "VariableDeclaration"].includes(body[stop].type)
  )
    stop++;
  if (until)
    stop = body.indexOf(declarationStatement(model, owner.bindings.get(until)));
  assert(stop > end);
  return { first, last: body[stop - 1] };
}

export async function generateReadableResearch({ check = false } = {}) {
  const pending = [],
    results = [];
  for (const config of researchBundles) {
    const input = `${config.archive}/formatted/${config.file}`;
    const source = await readFile(path.join(root, input), "utf8");
    const manifest = JSON.parse(
      await readFile(path.join(root, config.archive, "sources.json"), "utf8"),
    );
    const entry = manifest.dependencies.find(
      (d) => d.formatted.path === `formatted/${config.file}`,
    );
    assert(entry, `No provenance entry for ${input}`);
    assert.equal(
      sha256(source),
      entry.formatted.sha256,
      `Input archive changed: ${input}`,
    );
    const original = entry.original || entry;
    assert.equal(
      sha256(await readFile(path.join(root, config.archive, original.path))),
      original.sha256,
    );
    const transformed = renameResearch(analyzeResearch(source), config.names);
    const output = await format(
      header + expandResearchSyntax(transformed.source),
      options,
    );
    assertBindingEquivalent(source, output);
    const outputPath = `${config.archive}/readable/${config.file}`;
    const outputModel = analyzeResearch(output);
    const owner = outputModel.scopes.reduce((best, s) =>
      s.bindings.size > best.bindings.size ? s : best,
    );
    const lineOf = (offset) => output.slice(0, offset).split("\n").length;
    for (const entry of transformed.entries)
      entry.readableLine = lineOf(
        declarationStatement(outputModel, owner.bindings.get(entry.readable))
          .start,
      );
    pending.push([outputPath, output]);
    const sections = [];
    for (const section of config.sections) {
      const start = config.names[section.from].name,
        end = config.names[section.to].name;
      const { first, last } = extractSection(
        outputModel,
        start,
        end,
        section.until,
      );
      // 附上这一范围内的符号说明；声明前的注释不属于 AST 节点，单独补入。
      const notes = transformed.entries.filter(
        (e) =>
          e.readableLine >= lineOf(first.start) &&
          e.readableLine <= lineOf(last.end),
      );
      const relative = `sections/${config.file.replace(/\.js$/, "")}/${section.name}.js`;
      const content = await format(
        `/**\n * 阅读切片：${section.description}。\n * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。\n * 完整文件：../../${config.file}，原位置 L${lineOf(first.start)}。\n${notes.map((e) => ` * ${e.readable}（${e.original}）：${e.note}`).join("\n")}\n */\n${output.slice(first.start, last.end)}`,
        options,
      );
      // 即使是阅读切片也必须能语法解析；不把它当可加载的独立模块。
      analyzeResearch(content);
      pending.push([`${config.archive}/readable/${relative}`, content]);
      sections.push({
        ...section,
        path: relative,
        completeFileLine: lineOf(first.start),
      });
    }
    results.push({
      archive: config.archive,
      file: config.file,
      title: config.title,
      source: input,
      sourceSha256: sha256(source),
      readable: outputPath,
      readableSha256: sha256(output),
      semanticSymbols: transformed.entries,
      bindings: transformed.bindings,
      sections,
    });
  }
  for (const archive of [...new Set(results.map((r) => r.archive))]) {
    const entries = results.filter((r) => r.archive === archive);
    const lines = [
      "# 语义化阅读副本",
      "",
      "先看 [总阅读指南](../../docs/READABLE-RESEARCH.md)。这里不是仅格式化：已确认的业务符号和关键参数已重命名，并加入中文职责说明。未知运行库保留原名。",
      "",
      "完整 bundle 保留初始化顺序；`sections/` 是便于阅读的业务切片，**不能直接 import 或独立运行**。",
      "",
    ];
    for (const entry of entries) {
      lines.push(
        `## ${entry.title}`,
        "",
        `完整代码：[${entry.file}](${entry.file})。${entry.semanticSymbols.length} 个已确认业务符号；全部绑定映射见 [symbols.json](symbols.json)。`,
        "",
      );
      for (const section of entry.sections)
        lines.push(
          `- [${section.description}](${section.path}) · [完整上下文](${entry.file}#L${section.completeFileLine})`,
        );
      lines.push("");
    }
    lines.push(
      "来源代码的权利与许可证沿用归档说明；切片不是另行授权的独立实现。",
      "",
    );
    pending.push([`${archive}/readable/README.md`, lines.join("\n")]);
    pending.push([
      `${archive}/readable/symbols.json`,
      JSON.stringify(entries, null, 2) + "\n",
    ]);
  }
  const validation = {
    schemaVersion: 1,
    generationCommand: "pnpm research:generate",
    verificationCommand: "pnpm research:check",
    scope:
      "Pinned public research bundles only; no HTML, account config or extension/demo runtime changes.",
    completeBundles: results.length,
    semanticSymbols: results.reduce((n, r) => n + r.semanticSymbols.length, 0),
    renamedBindings: results.reduce((n, r) => n + r.bindings.length, 0),
    readingSections: results.reduce((n, r) => n + r.sections.length, 0),
    lexicalBindingNormalizedAstEqual: true,
    originalArchiveHashesVerified: true,
    reproducible: true,
    propertiesAndWireLiteralsUnchanged: true,
    runtimeEquivalenceClaimed: false,
    fullGoogleRuntimeExecuted: false,
    files: pending.map(([file, source]) => ({
      path: file,
      sha256: sha256(source),
      bytes: Buffer.byteLength(source),
    })),
  };
  pending.push([
    "research/validation/readable-research.json",
    JSON.stringify(validation, null, 2) + "\n",
  ]);
  // 所有输入与变换先校验成功，再写独立目录；不覆盖原归档或既有业务代码。
  for (const [file, content] of pending) {
    if (check)
      assert.equal(
        await readFile(path.join(root, file), "utf8"),
        content,
        `Generated file drifted: ${file}`,
      );
    else {
      await mkdir(path.dirname(path.join(root, file)), { recursive: true });
      await writeFile(path.join(root, file), content);
    }
  }
  return validation;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = await generateReadableResearch({
    check: process.argv.includes("--check"),
  });
  console.log(
    JSON.stringify({
      completeBundles: result.completeBundles,
      semanticSymbols: result.semanticSymbols,
      renamedBindings: result.renamedBindings,
      readingSections: result.readingSections,
      verified: true,
    }),
  );
}
