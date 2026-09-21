import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./react/App.jsx";
import { boot, createDocument, inspectState } from "./application.js";

// 保留浏览器自动化入口，调用的就是 React 使用的动作，不建立另一条保存/同步通路。
export { createDocument, inspectState };
export {
  openDocument,
  editDocument,
  enableOffline,
  setNetworkSimulation,
  flushLocalWrites,
  readLocalDocument,
} from "./application.js";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
// 初始化放在组件 effect 之外且内部幂等，避免 StrictMode 或重挂载造成重复监听/调度。
await boot();

if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const tools = [
    {
      name: "list_local_documents",
      description: "读取本地文件列表与离线同步状态，不修改数据。",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
      execute: async () => inspectState(),
    },
    {
      name: "create_local_document",
      description: "创建本地文档并打开编辑页，扩展启用时同步到本地演示服务。",
      inputSchema: {
        type: "object",
        properties: { title: { type: "string", minLength: 1, maxLength: 200 } },
        required: ["title"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: (input) => {
        if (typeof input?.title !== "string") throw Error("title is required");
        return createDocument(input.title);
      },
    },
  ];
  for (const tool of tools) {
    try {
      Promise.resolve(
        document.modelContext.registerTool(tool, { signal: lifecycle.signal }),
      ).catch(() => {});
    } catch {}
  }
  window.addEventListener("pagehide", () => lifecycle.abort(), { once: true });
}
