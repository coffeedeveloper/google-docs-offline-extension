import assert from "node:assert/strict";

// Interact with the rendered controls, not the exported mutation API. Database
// reads are used only as assertions that React events reached the durable model.
export async function testReactUI({
  context,
  origin,
  report,
  state,
  until,
  invoke,
}) {
  const page = await context.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") report.errors.push(message.text());
  });
  await page.goto(origin);
  await page.getByRole("heading", { name: "我的文档" }).waitFor();
  await page.getByLabel("演示断网").check();
  await until(
    async () => (await state(page)).simulated,
    "React offline switch",
  );
  await page.getByRole("button", { name: "＋ 新建文档" }).click();
  const title = page.getByRole("textbox", { name: "文档标题" });
  const body = page.getByRole("textbox", { name: "文档正文" });
  await title.fill("React UI <b>普通文本</b>");
  await body.fill("React 离线正文\nINPUT_MARKER");
  const id = new URL(page.url()).pathname.split("/")[2];
  await until(
    async () =>
      (await invoke(page, "readLocalDocument", id))?.body.includes(
        "INPUT_MARKER",
      ),
    "React input persisted",
  );
  assert.equal(
    await page.locator("#paper-title").textContent(),
    "React UI <b>普通文本</b>",
  );
  assert.equal(await page.locator("#paper-title b").count(), 0);
  await page.reload();
  await until(
    async () => (await body.inputValue()).includes("INPUT_MARKER"),
    "React controlled input restored offline",
  );
  report.checks.push(
    "React UI: click-create, controlled title/body input, escaped text, offline reload restores saved content",
  );

  await body.fill("LOCAL_BASE");
  await until(
    async () =>
      (await invoke(page, "readLocalDocument", id)).body === "LOCAL_BASE",
    "caret baseline saved",
  );
  await body.press("ArrowLeft");
  const caret = await body.evaluate((node) => {
    globalThis.reactEditorNode = node;
    return node.selectionStart;
  });
  const other = await context.newPage();
  await other.goto(`${origin}/document/${id}`);
  const otherBody = other.getByRole("textbox", { name: "文档正文" });
  await otherBody.fill("REMOTE_LOCAL_BASE");
  await until(
    async () => (await body.inputValue()) === "REMOTE_LOCAL_BASE",
    "remote merge rendered",
  );
  const selection = await body.evaluate((node) => ({
    start: node.selectionStart,
    same: node === globalThis.reactEditorNode,
    focused: document.activeElement === node,
  }));
  assert.deepEqual(selection, {
    start: caret + "REMOTE_".length,
    same: true,
    focused: true,
  });
  report.checks.push(
    "React UI: background merge preserves focused input identity and Yjs-relative caret position",
  );

  await body.fill("IME_BASE");
  await until(
    async () => (await otherBody.inputValue()) === "IME_BASE",
    "IME base converged",
  );
  await body.evaluate((node) => {
    node.dispatchEvent(
      new CompositionEvent("compositionstart", { bubbles: true, data: "" }),
    );
    Object.getOwnPropertyDescriptor(
      HTMLTextAreaElement.prototype,
      "value",
    ).set.call(node, "IME_BASE中文");
    node.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        data: "中文",
        inputType: "insertCompositionText",
        isComposing: true,
      }),
    );
  });
  await otherBody.fill("REMOTE_IME_BASE");
  await until(
    async () =>
      (await invoke(page, "readLocalDocument", id)).body === "REMOTE_IME_BASE",
    "remote persisted during IME",
  );
  assert.equal(await body.inputValue(), "IME_BASE中文");
  await body.evaluate((node) =>
    node.dispatchEvent(
      new CompositionEvent("compositionend", { bubbles: true, data: "中文" }),
    ),
  );
  await until(
    async () => (await body.inputValue()) === "REMOTE_IME_BASE中文",
    "composition and remote update merged",
  );
  await until(
    async () =>
      (await invoke(page, "readLocalDocument", id)).body ===
      "REMOTE_IME_BASE中文",
    "composition persisted",
  );
  await other.close();
  report.checks.push(
    "React UI: IME composition draft survives refresh and merges remote edits at compositionend",
  );

  await page.getByRole("link", { name: "返回文件列表" }).click();
  const search = page.getByRole("searchbox", { name: "搜索文档" });
  await search.fill("React UI");
  assert.equal(await page.locator("#document-rows .file-row").count(), 1);
  await search.press("ArrowLeft");
  const searchCaret = await search.evaluate((node) => {
    globalThis.reactSearchNode = node;
    return node.selectionStart;
  });
  await page.locator("#document-rows [data-action=pin]").click();
  await search.focus();
  await search.evaluate(
    (node, caret) => node.setSelectionRange(caret, caret),
    searchCaret,
  );
  // A real BroadcastChannel notification causes asynchronous state refresh.
  await page.evaluate(async () => {
    const channel = new BroadcastChannel("offline-docs-demo-events-v1");
    channel.postMessage({ type: "diagnostic" });
    channel.close();
  });
  await until(
    async () =>
      (await state(page)).documents.find((doc) => doc.id === id)?.pinned ===
      false,
    "React pin action",
  );
  assert.deepEqual(
    await search.evaluate((node) => ({
      same: node === globalThis.reactSearchNode,
      value: node.value,
    })),
    { same: true, value: "React UI" },
  );
  await page.getByRole("button", { name: "可离线使用", exact: true }).click();
  assert.equal(await page.locator("#document-rows .file-row").count(), 1);
  await page.getByRole("link", { name: "扩展设置", exact: true }).click();
  await page.getByRole("heading", { name: "连接反解析扩展" }).waitFor();
  await page.goBack();
  await page.getByRole("heading", { name: "我的文档" }).waitFor();
  assert.equal(await search.inputValue(), "React UI");
  await page.getByRole("link", { name: /React UI <b>/ }).click();
  await until(
    async () => (await body.inputValue()) === "REMOTE_IME_BASE中文",
    "React route preserved document",
  );
  await page.getByLabel("演示断网").uncheck();
  await until(
    async () => (await state(page)).pendingCount === 0,
    "React reconnect ACK",
  );
  report.checks.push(
    "React UI: search, offline filter, pin, setup navigation, browser Back, and reconnect ACK work through rendered controls",
  );
  await page.screenshot({
    path: "test-results/react-editor.png",
    fullPage: true,
  });
  await page.getByRole("link", { name: "返回文件列表" }).click();
  await page.screenshot({
    path: "test-results/react-list.png",
    fullPage: true,
  });
  await page.close();
}
