import assert from "node:assert/strict";
import { parse } from "acorn";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { baseline, root, sha256 } from "./common.mjs";
import {
  backgroundNames,
  offscreenOverrides,
  parseNames,
} from "./vendor-names.mjs";

export function children(node) {
  return Object.entries(node).flatMap(([key, value]) => {
    if (key === "loc") return [];
    return Array.isArray(value)
      ? value.filter((item) => item?.type).map((item) => [key, item])
      : value?.type
        ? [[key, value]]
        : [];
  });
}

/** 两遍词法绑定分析：先登记全部声明，再解析引用；禁止用全局字符串替换改变量。 */
export function analyze(source) {
  const ast = parse(source, { ecmaVersion: "latest", sourceType: "module" });
  const scopes = [],
    scopeOf = new WeakMap(),
    bindingOf = new WeakMap();
  function scope(parent, node) {
    const result = { parent, node, bindings: new Map(), index: scopes.length };
    scopes.push(result);
    return result;
  }
  const global = scope(null, ast);
  let nextBinding = 0;
  function declare(node, current) {
    assert.equal(
      node.type,
      "Identifier",
      "Unexpected binding pattern: audit before adding syntax",
    );
    let binding = current.bindings.get(node.name);
    if (!binding) {
      binding = {
        name: node.name,
        scope: current,
        index: nextBinding++,
        declarations: [],
        references: [],
      };
      current.bindings.set(node.name, binding);
    }
    binding.declarations.push(node);
    bindingOf.set(node, binding);
  }
  function visit(node, current, parent) {
    scopeOf.set(node, current);
    assert.ok(
      !["ClassDeclaration", "ClassExpression", "ImportDeclaration"].includes(
        node.type,
      ),
      "Audit new scope syntax before adding it to the pinned runtime",
    );
    if (
      node.type === "FunctionDeclaration" ||
      node.type === "FunctionExpression" ||
      node.type === "ArrowFunctionExpression"
    ) {
      if (node.type === "FunctionDeclaration") {
        assert.ok(
          parent?.type === "Program" || parent === current.node.body,
          "Audit block-scoped function before renaming",
        );
        declare(node.id, current);
      }
      const inner = scope(current, node);
      if (node.type === "FunctionExpression" && node.id)
        declare(node.id, inner);
      for (const param of node.params) declare(param, inner);
      visit(node.body, inner, node);
      return;
    }
    if (node.type === "CatchClause") {
      const inner = scope(current, node);
      if (node.param) declare(node.param, inner);
      visit(node.body, inner, node);
      return;
    }
    if (node.type === "VariableDeclaration") {
      assert.equal(
        node.kind,
        "var",
        "Runtime scope analyzer only accepts original var declarations",
      );
      let owner = current;
      while (owner.node.type === "CatchClause") owner = owner.parent;
      for (const declaration of node.declarations)
        declare(declaration.id, owner);
    }
    for (const [, child] of children(node)) visit(child, current, node);
  }
  visit(ast, global);
  function references(node, parent, key) {
    if (node.type === "Identifier" && !bindingOf.has(node)) {
      const isKey =
        (parent?.type === "MemberExpression" &&
          key === "property" &&
          !parent.computed) ||
        (parent?.type === "Property" && key === "key" && !parent.computed) ||
        key === "label" ||
        (parent?.type === "ExportSpecifier" && key === "exported");
      if (!isKey) {
        let current = scopeOf.get(node);
        while (current && !current.bindings.has(node.name))
          current = current.parent;
        if (current) {
          const binding = current.bindings.get(node.name);
          bindingOf.set(node, binding);
          binding.references.push(node);
        }
      }
    }
    for (const [childKey, child] of children(node))
      references(child, node, childKey);
  }
  references(ast);
  return { source, ast, scopes, global, bindingOf, scopeOf };
}

/** 独立校验用正规形：只抹去词法绑定拼写，保留属性名、字面量、运算符和语句顺序。 */
export function bindingNormalForm(model, node = model.ast) {
  if (Array.isArray(node))
    return node.map((item) => bindingNormalForm(model, item));
  if (!node || typeof node !== "object") return node;
  // 两个局部、无求值副作用的展开：压缩布尔量；单条逗号表达式语句 -> 顺序表达式块。
  if (
    node.type === "UnaryExpression" &&
    node.operator === "!" &&
    node.argument.type === "Literal" &&
    [0, 1].includes(node.argument.value)
  )
    return { type: "Literal", value: !node.argument.value };
  if (
    node.type === "ExpressionStatement" &&
    node.expression.type === "SequenceExpression"
  )
    return bindingNormalForm(model, {
      type: "BlockStatement",
      body: node.expression.expressions.map((expression) => ({
        type: "ExpressionStatement",
        expression,
      })),
    });
  if (node.type === "Identifier" && model.bindingOf.has(node))
    return { type: "Identifier", binding: model.bindingOf.get(node).index };
  const result = {};
  for (const [key, value] of Object.entries(node)) {
    if (["start", "end", "raw", "loc"].includes(key)) continue;
    // 导出名字有意变为语义 API；导出的 binding 必须仍是同一个，名称另行检查。
    if (node.type === "ExportSpecifier" && key === "exported") continue;
    // Prettier removes redundant semicolons in statement lists, never a loop/if body.
    const statements =
      (key === "body" && ["Program", "BlockStatement"].includes(node.type)) ||
      (key === "consequent" && node.type === "SwitchCase");
    result[key] = bindingNormalForm(
      model,
      statements
        ? value.filter((item) => item.type !== "EmptyStatement")
        : value,
    );
  }
  return result;
}

function shape(node) {
  if (Array.isArray(node)) return node.map(shape);
  if (!node || typeof node !== "object") return node;
  if (node.type === "Identifier") return { type: "Identifier" };
  return Object.fromEntries(
    Object.entries(node)
      .filter(([key]) => !["start", "end", "raw", "loc"].includes(key))
      .map(([key, value]) => {
        // some/indexOf、then/catch 等标准属性必须区分；只忽略编译器分配的短 ABI 属性。
        const stableProperty =
          !node.computed &&
          ((node.type === "MemberExpression" && key === "property") ||
            (node.type === "Property" && key === "key")) &&
          value.type === "Identifier" &&
          value.name.length > 2;
        return [
          key,
          stableProperty
            ? { type: "Identifier", name: value.name }
            : shape(value),
        ];
      }),
  );
}

// 只用于给第二个编译产物推荐名称，不参与正确性证明；两个产物从不合并实现。
function pairGlobals(background, offscreen) {
  const left = background.ast.body,
    right = offscreen.ast.body;
  const signatures = (nodes) =>
    nodes.map((node) => JSON.stringify(shape(node)));
  const a = signatures(left),
    b = signatures(right);
  const lengths = Array.from(
    { length: a.length + 1 },
    () => new Uint16Array(b.length + 1),
  );
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      lengths[i][j] =
        a[i] === b[j]
          ? 1 + lengths[i + 1][j + 1]
          : Math.max(lengths[i + 1][j], lengths[i][j + 1]);
  const votes = new Map();
  function collect(x, y) {
    const bx = background.bindingOf.get(x),
      by = offscreen.bindingOf.get(y);
    if (bx?.scope === background.global && by?.scope === offscreen.global) {
      const key = `${by.name}:${bx.name}`;
      votes.set(key, (votes.get(key) || 0) + 1);
    }
    const xc = children(x),
      yc = children(y);
    assert.equal(xc.length, yc.length);
    for (let i = 0; i < xc.length; i++) collect(xc[i][1], yc[i][1]);
  }
  for (let i = 0, j = 0; i < a.length && j < b.length; ) {
    if (a[i] === b[j]) collect(left[i++], right[j++]);
    else if (lengths[i + 1][j] >= lengths[i][j + 1]) i++;
    else j++;
  }
  const result = {},
    used = new Set();
  for (const [key] of [...votes].sort((x, y) => y[1] - x[1])) {
    const [target, source] = key.split(":");
    if (!result[target] && !used.has(source)) {
      result[target] = source;
      used.add(source);
    }
  }
  return result;
}

function addJavaClassNames(model, names) {
  for (const node of model.ast.body) {
    const assignment = node.expression;
    const member = assignment?.left;
    if (
      assignment?.type !== "AssignmentExpression" ||
      member?.property?.name !== "F" ||
      member.object?.property?.name !== "prototype"
    )
      continue;
    const compiled = member.object.object.name;
    const type = assignment.right.elements?.[0]?.value;
    if (type && !names[compiled]) {
      const name = type.includes(".")
        ? type.split(".").at(-1).replaceAll("$", "")
        : `Native${type.replace(/[^a-zA-Z]/g, "")}Type`;
      names[compiled] = {
        name:
          type.startsWith("java.lang.") || name === "Disposable"
            ? `Java${name}`
            : name,
        params: [],
      };
    }
  }
}

export async function loadVendorModels() {
  const provenance = JSON.parse(
    await readFile(path.join(root, "research/vendor-provenance.json"), "utf8"),
  );
  const models = {};
  for (const target of ["background", "offscreen"]) {
    const record = provenance[`src/vendor/${target}-runtime.js`];
    const original = await readFile(
      path.join(baseline, record.original),
      "utf8",
    );
    assert.equal(sha256(original), record.originalSha256);
    const extracted = record.ranges
      .map((range) => {
        const text = original.slice(range.start, range.end);
        assert.equal(sha256(text), range.sha256);
        return text;
      })
      .join("\n");
    // 原导出列表固定在来源记录里；旧记录从现有提取脚本读取，迁移后不依赖可读源码反推。
    const exports = record.exports;
    assert.ok(exports, `Missing original export inventory: ${target}`);
    models[target] = analyze(`${extracted}\nexport { ${exports.join(", ")} };`);
  }
  const names = { background: parseNames(backgroundNames), offscreen: {} };
  addJavaClassNames(models.background, names.background);
  const pairs = pairGlobals(models.background, models.offscreen);
  for (const [target, source] of Object.entries(pairs))
    if (names.background[source])
      names.offscreen[target] = names.background[source];
  Object.assign(names.offscreen, parseNames(offscreenOverrides));
  addJavaClassNames(models.offscreen, names.offscreen);
  for (const target of Object.keys(models))
    assert.deepEqual(
      Object.keys(names[target]).sort(),
      [...models[target].global.bindings.keys()].sort(),
      `${target}: every global needs exactly one semantic mapping`,
    );
  return { models, names, provenance, pairs };
}
