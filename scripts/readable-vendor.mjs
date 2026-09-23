import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { format } from "prettier";
import { root, sha256 } from "./common.mjs";
import {
  analyze,
  bindingNormalForm,
  children,
  loadVendorModels,
} from "./vendor-model.mjs";
import { coreLocals, coreMethods } from "./vendor-names.mjs";

const chapterStarts = {
  createIdentityFunction:
    "编译器兼容层：继承、迭代器、generator 状态机与内建 polyfill。保留特性探测及初始化顺序。",
  readClosureFlag:
    "基础工具与环境能力：Closure flags、类型判断、绑定、浏览器识别。",
  ByteString:
    "数组消息运行时：字节串、64 位整数转换、内部 flags、copy-on-write、oneof 与 JSON。数值位掩码不是业务枚举。",
  ArrayMessage:
    "消息基类与配置消息：数组索引和字段类型是 wire 契约，不能改为普通对象覆盖。",
  Int64: "64 位整数：以两个 32 位字运算，保留溢出、符号扩展和十进制转换路径。",
  JavaObject: "Java 转译兼容层：类型元数据、装箱整数、异常与数组类型检查。",
  installGlobalErrorListener:
    "错误与日志基础设施：错误归一化、cause 链、堆栈与日志等级。",
  buildUrl: "URL 编解码工具：保留重复参数、编码和 fragment 行为。",
  Disposable:
    "生命周期与微任务：析构钩子、对象池、回调队列、AsyncContext 传播。",
  LegacyPromise:
    "Closure Promise：thenable 同化、取消传播、回调对象池和未处理拒绝。不是原生 Promise 的简单别名。",
  LegacyDeferred:
    "旧 Deferred：回调/错误链和取消；与上面的 Promise 是两套独立状态机。",
  getFlagService:
    "客户端 flags 与统计：Java 兼容对象、限流、时间窗口与环形队列。",
  MutableUrl:
    "可变 URL 与 QueryData：延迟解析、多值参数、大小写策略和相对路径解析。",
  BaseEvent: "事件系统：原生事件包装、监听器索引、once/capture 与资源释放。",
  schedule:
    "计时与日志发送：延迟、抖动退避、缓冲队列和错误重试。不是文档 outbox。",
  EnvironmentInspector:
    "遥测环境检查与错误分类：保留原有检测、规则及采样，不增加新的数据收集。",
  ErrorRecord: "错误记录与分类流水线：cause 深度限制、元数据和严重程度调整。",
  EntryPointProtector:
    "错误保护与网络传输：全局回调保护、XHR 状态机、错误报告。",
  ErrorReporter:
    "错误报告编排：上下文、实验信息、采样、受保护回调及 crash storage。",
  FetchXhrFactory:
    "Fetch 到 XHR 的兼容适配：readyState、流式正文、AbortController 和事件通知。",
  SampledLogger: "扩展专用运行库：采样日志、跨上下文数组消息和控制台输出。",
};

const explanations = {
  getMessageField:
    "字段号从 1 开始；尾部普通对象可承载稀疏字段。保留 null/undefined 与读取时转换的差异。",
  setMessageField:
    "先检查可变性/分离共享数组，再写字段；不能绕过 copy-on-write 直接给 backing array 赋值。",
  readRepeatedMessages:
    "遍历并转换子消息，同时维护数组 flags；不能用 map() 替换而丢掉冻结/共享状态。",
  serializeMessage:
    "导出 wire 数组副本；非有限数、BigInt、字节串与嵌套消息按原规则转换。",
  createDeferred:
    "返回自定义 Promise 和它的 resolve/reject，保留原微任务及取消语义。",
  settlePromise:
    "只允许 pending 状态推进；拒绝自解析，再同化 thenable，最后排队执行回调。",
  callThenSafely:
    "恶意/异常 thenable 可能多次调用或抛错；共享完成标记保证只采纳第一次结果。",
  cancelPromise:
    "取消向父 Promise 传播受有效订阅数量约束，不能直接把父链全部拒绝。",
  runDeferredCallbacks:
    "保留 Deferred 的特殊规则：回调返回 undefined 通常沿用旧值，不能等同于原生 then。",
  raceLegacyPromises:
    "编译产物实际是竞速：任一输入兑现即兑现，任一拒绝即拒绝；不是 Promise.all。空输入兑现 undefined。",
  resolvedLegacyPromise:
    "这个 offscreen 特化版本只产生已兑现 undefined 的 Promise；传入参数也不作为返回值。",
  settleAllLegacyPromises:
    "等待全部输入结束，输出原有的成功标记/value 或失败标记/reason 数组。",
  ownDisposable:
    "已销毁的 owner 立即释放 child，否则按原顺序登记析构回调。N 是保留的内部析构 ABI。",
  createTrustedTypesPolicy:
    "保留 goog#html 策略及创建失败后的行为；不能为了可读性改成绕过 Trusted Types。",
  setTrustedIframeSource:
    "只接受原 TrustedScriptUrl 包装类型，保持原校验和 iframe.src 写入顺序。",
  createTrustedFrameUrl:
    "URL 包装沿用原 Trusted Types 分支，不额外扩大可嵌入来源。",
  logSampledInfo:
    "采样阈值来自原实现（0.01），不是按百分数再除以 100；保持调用条件与上下文字段。",
  logSampledError:
    "采样阈值来自原实现（1）；报告通道是 telemetry，不是文档上传通道。",
  NativeCrashStorage:
    "等待原生 crashReport 初始化期间暂存少量元数据；这不是文档正文数据库。",
};

const fields = {
  GeneratorContext:
    "j=下一状态地址，A=执行中，o=委托迭代器，J=yield 返回值；不同编译目标字段布局以原样本为准。",
  LegacyPromise:
    "j=状态(0 pending/1 同化中/2 fulfilled/3 rejected)，J=结果，o=父链，l/v=回调队首/队尾，A=回调已排程，D=未处理拒绝。",
  Disposable: "J=已销毁，D=析构回调队列，N=析构钩子，na=已销毁查询。",
  QueryData: "j=参数 Map，l=值总数，o=编码字符串缓存，v=忽略键大小写。",
  MutableUrl:
    "v=scheme，J=userInfo，j=host，C=port，l=path，o=QueryData，A=fragment，D=参数忽略大小写。",
  ObjectPool: "o=创建函数，v=重置函数，j=空闲链表，l=空闲数量。",
  ArrayMessage:
    "后台 B / offscreen C 是 backing array；j/l 是共享和可变性标记，不是用户数据字段名。",
  SampledLogger: "j=ErrorReporter，l=错误采样命中，o=信息采样命中。",
};

function lowerFirst(name) {
  return name ? name[0].toLowerCase() + name.slice(1) : "value";
}
function safeName(name) {
  return name?.replace(/[^a-zA-Z0-9_$]/g, "") || "value";
}
const reservedWords = new Set(
  "await break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import in instanceof interface let new null package private protected public return static super switch this throw true try typeof var void while with yield arguments eval".split(
    " ",
  ),
);

export function renameRuntime(model, globalNames, target = "background") {
  const parentOf = new WeakMap();
  function index(node) {
    for (const [key, child] of children(node)) {
      parentOf.set(child, { node, key });
      index(child);
    }
  }
  index(model.ast);
  const methods = new WeakMap(),
    methodNotes = [],
    prototypeOwners = new Map();
  function prototypeOwner(node) {
    if (node?.type === "Identifier") return prototypeOwners.get(node.name);
    if (node?.type === "MemberExpression" && node.property.name === "prototype")
      return globalNames[node.object.name]?.name;
  }
  for (const statement of model.ast.body) {
    const expression = statement.expression;
    if (
      expression?.type !== "AssignmentExpression" ||
      expression.operator !== "="
    )
      continue;
    const { left, right } = expression;
    if (left.type === "Identifier")
      prototypeOwners.set(left.name, prototypeOwner(right));
    if (
      left.type === "MemberExpression" &&
      !left.computed &&
      right.type === "FunctionExpression"
    ) {
      const config =
        coreMethods[`${prototypeOwner(left.object)}.${left.property.name}`];
      if (config) {
        methods.set(right, config);
        if (config.note)
          methodNotes.push({ node: statement, note: config.note });
      }
    }
  }
  const assigned = new Map(),
    freeNames = new Set();
  function collectFree(node) {
    const parent = parentOf.get(node);
    const isKey =
      parent?.key === "label" ||
      (parent?.node.type === "MemberExpression" &&
        parent.key === "property" &&
        !parent.node.computed) ||
      (parent?.node.type === "Property" &&
        parent.key === "key" &&
        !parent.node.computed) ||
      (parent?.node.type === "ExportSpecifier" && parent.key === "exported");
    if (node.type === "Identifier" && !model.bindingOf.has(node) && !isKey)
      freeNames.add(node.name);
    for (const [, child] of children(node)) collectFree(child);
  }
  collectFree(model.ast);
  function description(node) {
    if (!node) return null;
    if (node.type === "Identifier")
      return (
        assigned.get(model.bindingOf.get(node)) ||
        globalNames[node.name]?.name ||
        (node.name.length > 2 ? node.name : null)
      );
    if (node.type === "ThisExpression") return "instance";
    if (node.type === "ArrayExpression") return "values";
    if (node.type === "ObjectExpression") return "record";
    if (node.type === "FunctionExpression") return "callback";
    if (node.type === "NewExpression")
      return lowerFirst(description(node.callee) || "instance");
    if (node.type === "MemberExpression" && !node.computed) {
      const property = node.property.name;
      if (property === "length") return "length";
      if (property === "prototype") return "prototype";
      if (["B", "C"].includes(property)) return "backingOrStateValue";
      if (property.length > 2) return safeName(property);
    }
    if (node.type === "CallExpression") {
      const method =
        node.callee.type === "MemberExpression"
          ? node.callee.property.name
          : description(node.callee);
      if (method === "getIterator") return "iterator";
      if (method === "next") return "iteration";
      if (["slice", "concat", "split"].includes(method)) return "values";
      if (method === "bindFunction") return "boundCallback";
      if (method === "Object") return "object";
      if (
        method &&
        /^(read|get|create|compute|normalize|coerce|clone|parse)/.test(method)
      )
        return (
          lowerFirst(
            method.replace(
              /^(read|get|create|compute|normalize|coerce|clone|parse)/,
              "",
            ),
          ) || "value"
        );
      if (method && /^(is|has|supports)/.test(method)) return method;
    }
    return null;
  }
  for (const scope of model.scopes) {
    const reserved = new Set([...freeNames, ...reservedWords]);
    for (let outer = scope.parent; outer; outer = outer.parent)
      for (const binding of outer.bindings.values())
        reserved.add(assigned.get(binding));
    const functionConfig =
      (scope.node.id && globalNames[scope.node.id.name]) ||
      methods.get(scope.node);
    let owner = scope;
    while (owner.parent && owner.parent !== model.global) owner = owner.parent;
    const ownerName = owner.node.id && globalNames[owner.node.id.name]?.name;
    for (const binding of scope.bindings.values()) {
      let proposed;
      if (scope === model.global) {
        assert.ok(
          globalNames[binding.name],
          `Missing semantic name: ${binding.name}`,
        );
        proposed = globalNames[binding.name].name;
      } else {
        const paramIndex =
          scope.node.params?.findIndex(
            (param) => model.bindingOf.get(param) === binding,
          ) ?? -1;
        if (scope.node.type === "CatchClause") proposed = "caughtError";
        else
          proposed =
            (paramIndex >= 0 && functionConfig?.params?.[paramIndex]) ||
            functionConfig?.locals?.[binding.name] ||
            coreLocals[ownerName]?.[binding.name];
        if (!proposed) {
          const declaration = binding.declarations[0];
          const parent = parentOf.get(declaration)?.node;
          const initial =
            parent?.type === "VariableDeclarator" ? parent.init : null;
          proposed = description(initial);
          if (!proposed && parent?.type === "FunctionDeclaration")
            proposed = "helper";
          if (
            !proposed &&
            binding.references.some(
              (ref) => parentOf.get(ref)?.node.type === "UpdateExpression",
            )
          )
            proposed = "index";
          if (
            !proposed &&
            binding.references.some((ref) => {
              const p = parentOf.get(ref)?.node;
              return (
                p?.type === "MemberExpression" &&
                p.object === ref &&
                ["next", "return"].includes(p.property.name)
              );
            })
          )
            proposed = "iterator";
          if (
            !proposed &&
            binding.references.some((ref) => {
              const p = parentOf.get(ref)?.node;
              return p?.type === "CallExpression" && p.callee === ref;
            })
          )
            proposed = "callback";
          proposed ||=
            paramIndex >= 0
              ? ["value", "other", "options", "context", "extra"][paramIndex] ||
                "argument"
              : "intermediate";
        }
      }
      proposed = safeName(proposed);
      let name = proposed,
        suffix = 2;
      while (reserved.has(name)) name = `${proposed}${suffix++}`;
      if (scope === model.global)
        assert.equal(
          name,
          proposed,
          `Global name collides with an external/property name: ${proposed}`,
        );
      reserved.add(name);
      assigned.set(binding, name);
    }
  }
  const edits = [],
    seenPositions = new Set(),
    records = [];
  for (const { node, note } of methodNotes)
    edits.push({
      start: node.start,
      end: node.start,
      text: `\n/** ${note} */\n`,
    });
  for (const scope of model.scopes)
    for (const binding of scope.bindings.values()) {
      const name = assigned.get(binding);
      records.push({
        scope: scope.index,
        original: binding.name,
        readable: name,
      });
      for (const node of [...binding.declarations, ...binding.references]) {
        if (seenPositions.has(node.start)) continue;
        seenPositions.add(node.start);
        const parent = parentOf.get(node)?.node;
        assert.ok(
          !(parent?.type === "Property" && parent.shorthand),
          "Audit shorthand property before renaming",
        );
        edits.push({ start: node.start, end: node.end, text: name });
      }
    }
  for (const specifier of model.ast.body.at(-1).specifiers)
    if (!seenPositions.has(specifier.exported.start))
      edits.push({
        start: specifier.exported.start,
        end: specifier.exported.end,
        text: globalNames[specifier.local.name].name,
      });
  for (const node of model.ast.body) {
    if (node.type !== "FunctionDeclaration") continue;
    const name = globalNames[node.id.name].name;
    const offscreenFields = {
      GeneratorContext:
        "j=下一状态地址，G=执行中，o=委托迭代器，I=yield 返回值。",
      LegacyPromise:
        "j=状态(0 pending/1 同化中/2 fulfilled/3 rejected)，I=结果，o=父链，l/v=回调队首/队尾，G=回调已排程，A=未处理拒绝。",
      Disposable: "I=已销毁，G=析构回调队列，N=析构钩子，na=已销毁查询。",
      MutableUrl:
        "v=scheme，I=userInfo，j=host，B=port，l=path，o=QueryData，G=fragment，A=参数忽略大小写。",
    };
    const fieldNote =
      target === "offscreen"
        ? offscreenFields[name] || fields[name]
        : fields[name];
    const notes = [
      chapterStarts[name],
      explanations[name],
      fieldNote && `保留字段 ABI：${fieldNote}`,
    ].filter(Boolean);
    if (notes.length)
      edits.push({
        start: node.start,
        end: node.start,
        text: `\n/**\n${notes.map((note) => ` * ${note}`).join("\n")}\n */\n`,
      });
  }
  let output = model.source;
  for (const edit of edits.sort((a, b) => b.start - a.start || b.end - a.end))
    output = output.slice(0, edit.start) + edit.text + output.slice(edit.end);
  return { source: output, records };
}

/** 展开不会改变求值次数/顺序的编译写法。条件、return、for 中的逗号表达式不动。 */
export function expandReadableSyntax(source) {
  const { ast } = analyze(source);
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
      if (child.start < cursor) continue; // shorthand/export 的共享位置，不重复输出。
      output += source.slice(cursor, child.start) + render(child);
      cursor = child.end;
    }
    return output + source.slice(cursor, node.end);
  }
  // 保留首尾许可证、尾注释；AST Program 包含语句间的全部原文。
  return render(ast);
}

export async function generateReadableVendors({ write = false } = {}) {
  const { models, names, provenance } = await loadVendorModels();
  const results = {};
  for (const target of ["background", "offscreen"]) {
    const transformed = renameRuntime(models[target], names[target], target);
    const output = await format(
      `/**\n * ${target} 运行库：从固定样本按词法绑定语义化还原。\n * 维护入口：src/vendor/README.md；重新生成：pnpm vendor:generate。\n * 保留原算法、执行顺序、短属性 ABI 和许可证；名称不是 Google 原始源码。\n */\n${expandReadableSyntax(transformed.source)}`,
      { parser: "babel", printWidth: 100 },
    );
    assert.deepEqual(
      bindingNormalForm(analyze(output)),
      bindingNormalForm(models[target]),
      `${target}: lexical binding/control-flow changed`,
    );
    const file = `src/vendor/${target}-runtime.js`;
    results[target] = {
      output,
      records: transformed.records,
      names: names[target],
    };
  }
  if (write) {
    // 两个目标全部校验成功才开始写文件，避免第二个目标失败时先覆盖第一个。
    for (const [target, result] of Object.entries(results)) {
      const file = `src/vendor/${target}-runtime.js`;
      await writeFile(path.join(root, file), result.output);
      provenance[file].sha256 = sha256(result.output);
      provenance[file].transformation =
        "scope-aware semantic renaming; binding-normalized AST equivalence with boolean/sequence-statement expansion; ABI properties unchanged";
      provenance[file].bindingCount = result.records.length;
    }
    await writeFile(
      path.join(root, "research/vendor-provenance.json"),
      JSON.stringify(provenance, null, 2) + "\n",
    );
    await writeFile(
      path.join(root, "research/vendor-symbol-map.json"),
      JSON.stringify(
        Object.fromEntries(
          Object.entries(results).map(([target, result]) => [
            target,
            result.records,
          ]),
        ),
        null,
        2,
      ) + "\n",
    );
  }
  return results;
}

if (process.argv[1] === path.join(root, "scripts/readable-vendor.mjs")) {
  const results = await generateReadableVendors({
    write: !process.argv.includes("--check"),
  });
  if (process.argv.includes("--check")) {
    const provenance = JSON.parse(
      await readFile(
        path.join(root, "research/vendor-provenance.json"),
        "utf8",
      ),
    );
    for (const [target, result] of Object.entries(results)) {
      const file = `src/vendor/${target}-runtime.js`;
      assert.equal(
        await readFile(path.join(root, file), "utf8"),
        result.output,
      );
      assert.equal(provenance[file].sha256, sha256(result.output));
      assert.equal(provenance[file].bindingCount, result.records.length);
    }
    assert.deepEqual(
      JSON.parse(
        await readFile(
          path.join(root, "research/vendor-symbol-map.json"),
          "utf8",
        ),
      ),
      Object.fromEntries(
        Object.entries(results).map(([target, result]) => [
          target,
          result.records,
        ]),
      ),
    );
  }
  console.log(
    `PASS: readable vendor generation and binding-equivalence (${Object.values(results).reduce((count, result) => count + result.records.length, 0)} lexical bindings).`,
  );
}
