import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { parse } from "acorn";
import { children, bindingNormalForm } from "./vendor-model.mjs";

/**
 * 研究样本专用的两遍绑定分析。和扩展 vendor 不同，Drive 使用 let 和块作用域。
 * 未覆盖的语法直接拒绝；不将 let 改成 var，也不按文本替换同名变量。
 */
export function analyzeResearch(source) {
  const ast = parse(source, { ecmaVersion: "latest", sourceType: "script" });
  const scopes = [],
    scopeOf = new WeakMap(),
    bindingOf = new WeakMap();
  const parentOf = new WeakMap();
  let nextBinding = 0;
  function scope(parent, node, kind) {
    const value = {
      parent,
      node,
      kind,
      index: scopes.length,
      bindings: new Map(),
    };
    scopes.push(value);
    return value;
  }
  const global = scope(null, ast, "program");
  function declare(node, owner) {
    assert.equal(
      node.type,
      "Identifier",
      "Audit destructuring before renaming",
    );
    let binding = owner.bindings.get(node.name);
    if (!binding) {
      binding = {
        name: node.name,
        scope: owner,
        index: nextBinding++,
        declarations: [],
        references: [],
      };
      owner.bindings.set(node.name, binding);
    }
    binding.declarations.push(node);
    bindingOf.set(node, binding);
  }
  function varOwner(current) {
    while (!["program", "function"].includes(current.kind))
      current = current.parent;
    return current;
  }
  function visit(node, current, parent, key) {
    if (parent) parentOf.set(node, { node: parent, key });
    assert(
      ![
        "ClassDeclaration",
        "ClassExpression",
        "WithStatement",
        "ImportDeclaration",
      ].includes(node.type),
      "Audit unsupported scope syntax",
    );
    // eval 可以从字符串引用局部名字，不能用 AST 绑定等价来证明其安全性。
    if (
      node.type === "CallExpression" &&
      node.callee.type === "Identifier" &&
      node.callee.name === "eval"
    ) {
      let owner = current;
      while (owner && owner.kind !== "function") owner = owner.parent;
      const signature = createHash("sha256")
        .update(
          source.slice(owner?.node.start, owner?.node.end).replace(/\s+/g, ""),
        )
        .digest("hex");
      assert(
        REVIEWED_JSON_PARSERS.has(signature),
        "Direct eval requires manual review",
      );
    }
    if (
      [
        "FunctionDeclaration",
        "FunctionExpression",
        "ArrowFunctionExpression",
      ].includes(node.type)
    ) {
      if (node.type === "FunctionDeclaration") {
        assert(
          ["program", "function"].includes(current.kind),
          "Audit Annex B block function",
        );
        declare(node.id, current);
      }
      const inner = scope(current, node, "function");
      scopeOf.set(node, inner);
      if (node.type === "FunctionExpression" && node.id)
        declare(node.id, inner);
      for (const param of node.params) declare(param, inner);
      for (const [childKey, child] of children(node))
        visit(child, inner, node, childKey);
      return;
    }
    if (node.type === "CatchClause") {
      current = scope(current, node, "catch");
      if (node.param) declare(node.param, current);
    } else if (node.type === "BlockStatement") {
      if (!(parent && /Function/.test(parent.type) && parent.body === node))
        current = scope(current, node, "block");
    } else if (
      [
        "ForStatement",
        "ForInStatement",
        "ForOfStatement",
        "SwitchStatement",
      ].includes(node.type)
    ) {
      // Switch 的 discriminant 在外层求值，不能被 case 中的 let 遮蔽。
      const outer = current;
      current = scope(current, node, "block");
      scopeOf.set(node, current);
      for (const [childKey, child] of children(node))
        visit(
          child,
          node.type === "SwitchStatement" && childKey === "discriminant"
            ? outer
            : current,
          node,
          childKey,
        );
      return;
    }
    scopeOf.set(node, current);
    if (node.type === "VariableDeclaration") {
      for (const declaration of node.declarations) {
        if (node.kind === "var") {
          // catch(e) 内 var e 的特殊初始化语义不在此变换支持范围内。
          for (let s = current; s && s !== varOwner(current); s = s.parent) {
            assert(
              !(s.kind === "catch" && s.bindings.has(declaration.id.name)),
              "Audit catch/var name collision",
            );
          }
        }
        declare(
          declaration.id,
          node.kind === "var" ? varOwner(current) : current,
        );
      }
    }
    for (const [childKey, child] of children(node))
      visit(child, current, node, childKey);
  }
  visit(ast, global);
  function references(node, parent, key) {
    if (node.type === "Identifier" && !bindingOf.has(node)) {
      const isKey =
        key === "label" ||
        (parent?.type === "MemberExpression" &&
          key === "property" &&
          !parent.computed) ||
        (parent?.type === "Property" && key === "key" && !parent.computed);
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
  return { source, ast, scopes, global, scopeOf, bindingOf, parentOf };
}

// 两个固定快照的 JSON.parse 兼容兜底：正则先约束为 JSON，再 eval。
// 保持整个函数不变；任何代码变化均要求重新审查，不能借此放行任意 eval。
const REVIEWED_JSON_PARSERS = new Set([
  "1336a24577fe8efc1aa6774443ea10c818081b7cd17ed9c814f612b085068e80",
  "5b2d881d3884fb35182b24d68d76b7558b9d7c4656482fd00e0aa7c566512eb8",
]);

export function assertBindingEquivalent(before, after) {
  assert.deepEqual(
    bindingNormalForm(analyzeResearch(after)),
    bindingNormalForm(analyzeResearch(before)),
  );
}

/** 仅展开无副作用常量及独立的逗号表达式语句；条件/return/for 中的逗号不动。 */
export function expandResearchSyntax(source) {
  const { ast } = analyzeResearch(source);
  function render(node) {
    if (
      node.type === "UnaryExpression" &&
      node.operator === "!" &&
      node.argument.type === "Literal" &&
      [0, 1].includes(node.argument.value)
    )
      return `(${!node.argument.value})`;
    if (
      node.type === "ExpressionStatement" &&
      node.expression.type === "SequenceExpression"
    )
      return `{\n${node.expression.expressions.map((expression) => `(${render(expression)});`).join("\n")}\n}`;
    let output = "",
      cursor = node.start;
    for (const [, child] of children(node).sort(
      (a, b) => a[1].start - b[1].start,
    )) {
      if (child.start < cursor) continue;
      output += source.slice(cursor, child.start) + render(child);
      cursor = child.end;
    }
    return output + source.slice(cursor, node.end);
  }
  return render(ast);
}

/** 只改已确认的绑定；ABI 属性、对象键、字符串、数值和语句顺序保持原样。 */
export function renameResearch(model, definitions) {
  const owner = model.scopes.reduce((best, current) =>
    current.bindings.size > best.bindings.size ? current : best,
  );
  const edits = [],
    names = new Map(),
    entries = [],
    reserved = new Set();
  function collect(node) {
    if (node.type === "Identifier") reserved.add(node.name);
    for (const [, child] of children(node)) collect(child);
  }
  collect(model.ast);
  const related = (left, right) => {
    for (let s = left; s; s = s.parent) if (s === right) return true;
    for (let s = right; s; s = s.parent) if (s === left) return true;
    return false;
  };
  function assign(binding, wanted, exact = false) {
    assert(binding, `Missing binding for ${wanted}`);
    assert(/^[A-Za-z_$][\w$]*$/.test(wanted), "Invalid readable name");
    let name = wanted,
      suffix = 2;
    const conflicts = (value) =>
      reserved.has(value) ||
      [...names].some(
        ([other, assigned]) =>
          assigned === value && related(binding.scope, other.scope),
      );
    while (conflicts(name)) name = `${wanted}_${suffix++}`;
    if (exact) assert.equal(name, wanted, `Readable name collision: ${wanted}`);
    names.set(binding, name);
  }
  for (const [original, definition] of Object.entries(definitions))
    assign(owner.bindings.get(original), definition.name, true);
  for (const [original, definition] of Object.entries(definitions)) {
    const binding = owner.bindings.get(original),
      id = binding.declarations[0];
    const parent = model.parentOf.get(id)?.node;
    const fn =
      parent?.type === "FunctionDeclaration"
        ? parent
        : parent?.type === "VariableDeclarator"
          ? parent.init
          : null;
    if (definition.params || definition.locals) {
      assert(fn && /Function/.test(fn.type), `Not a function: ${original}`);
      const scope = model.scopeOf.get(fn);
      for (const [i, wanted] of (definition.params || []).entries()) {
        if (wanted) assign(model.bindingOf.get(fn.params[i]), wanted);
      }
      for (const [short, wanted] of Object.entries(definition.locals || {}))
        assign(scope.bindings.get(short), wanted);
    }
    // 注释插在声明之前；变量声明可有多个 declarator，保留整个声明及求值顺序。
    const statement =
      parent?.type === "VariableDeclarator"
        ? model.parentOf.get(parent).node
        : parent;
    assert(statement, `Missing declaration statement: ${original}`);
    const line = model.source.slice(0, statement.start).split("\n").length;
    edits.push({
      start: statement.start,
      end: statement.start,
      text: `/** ${definition.name}（原 ${original}）。\n * ${definition.note}\n */\n`,
    });
    entries.push({
      original,
      readable: definition.name,
      sourceLine: line,
      note: definition.note,
    });
  }
  // 已确认类的直接 prototype 方法：只改参数/局部绑定，不改方法名及字段 ABI。
  function methods(node) {
    if (
      node.type === "AssignmentExpression" &&
      node.left.type === "MemberExpression" &&
      !node.left.computed &&
      /Function/.test(node.right.type)
    ) {
      const object = node.left.object;
      if (
        object.type === "MemberExpression" &&
        !object.computed &&
        object.property.name === "prototype" &&
        object.object.type === "Identifier" &&
        model.bindingOf.get(object.object)?.scope === owner
      ) {
        const definition =
          definitions[object.object.name]?.methods?.[node.left.property.name];
        if (definition) {
          const scope = model.scopeOf.get(node.right);
          for (const [i, wanted] of (definition.params || []).entries())
            if (wanted)
              assign(model.bindingOf.get(node.right.params[i]), wanted);
          for (const [short, wanted] of Object.entries(definition.locals || {}))
            assign(scope.bindings.get(short), wanted);
        }
      }
    }
    for (const [, child] of children(node)) methods(child);
  }
  methods(model.ast);
  const positions = new Set();
  for (const [binding, name] of names) {
    for (const node of [...binding.declarations, ...binding.references]) {
      if (positions.has(node.start)) continue;
      positions.add(node.start);
      const parent = model.parentOf.get(node)?.node;
      assert(
        !(parent?.type === "Property" && parent.shorthand),
        "Audit shorthand before renaming",
      );
      edits.push({ start: node.start, end: node.end, text: name });
    }
  }
  let source = model.source;
  for (const edit of edits.sort((a, b) => b.start - a.start || b.end - a.end))
    source = source.slice(0, edit.start) + edit.text + source.slice(edit.end);
  return {
    source,
    entries,
    bindings: [...names].map(([b, readable]) => ({
      scope: b.scope.index,
      original: b.name,
      readable,
    })),
  };
}
