import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { DocumentStore } from "./store.mjs";
const port = 4173,
  origin = `http://localhost:${port}`,
  root = path.resolve("dist");
const store = await new DocumentStore(
  path.resolve(process.env.DEMO_DATA_DIR || ".data", "server-documents.json"),
).open();
const { extensionId } = JSON.parse(
  await readFile("extension/build-info.json", "utf8"),
);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".map": "application/json",
};
function json(res, status, value) {
  res
    .writeHead(status, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    })
    .end(JSON.stringify(value));
}
async function body(req) {
  let data = "";
  for await (const chunk of req) {
    data += chunk;
    if (Buffer.byteLength(data) > 2_000_000)
      throw Object.assign(Error("Request too large"), { status: 413 });
  }
  return JSON.parse(data || "{}");
}
const server = http.createServer(async (req, res) => {
  try {
    if (
      req.headers.host !== `localhost:${port}` &&
      req.headers.host !== `127.0.0.1:${port}`
    ) {
      json(res, 403, { error: "Invalid Host" });
      return;
    }
    const url = new URL(req.url, origin);
    if (req.headers.origin && req.headers.origin !== origin) {
      json(res, 403, {
        error: "Origin not allowed; open http://localhost:4173",
      });
      return;
    }
    res.setHeader("X-Content-Type-Options", "nosniff");
    if (url.pathname === "/api/health") {
      json(res, 200, { ok: true });
      return;
    }
    if (url.pathname === "/api/config") {
      json(res, 200, { origin, extensionId });
      return;
    }
    if (url.pathname === "/api/documents" && req.method === "GET") {
      json(res, 200, { documents: store.list() });
      return;
    }
    const match = url.pathname.match(
      /^\/api\/documents\/([a-zA-Z0-9-]{1,80})(\/sync)?$/,
    );
    if (match) {
      if (!match[2] && req.method === "GET") {
        const doc = store.get(match[1]);
        json(res, doc ? 200 : 404, doc || { error: "Not found" });
        return;
      }
      if (match[2] && req.method === "POST") {
        const payload = await body(req);
        if (
          payload.account !== "local-demo-account" ||
          !Array.isArray(payload.operations) ||
          payload.operations.length > 1000
        ) {
          json(res, 400, { error: "Invalid sync request" });
          return;
        }
        const response = await store.sync(match[1], payload.operations);
        if (req.headers["x-demo-drop-ack"] === "1") {
          req.socket.destroy();
          return;
        }
        json(res, 200, response);
        return;
      }
      json(res, 405, { error: "Method not allowed" });
      return;
    }
    if (
      url.pathname === "/offline/jserror" ||
      url.pathname === "/offline/extension/report"
    ) {
      res.writeHead(204).end();
      return;
    }
    if (url.pathname.startsWith("/api/")) {
      json(res, 404, { error: "Not found" });
      return;
    }
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405).end();
      return;
    }
    const requested =
      url.pathname === "/offline/extension/frame"
        ? "/frame.html"
        : url.pathname === "/" ||
            url.pathname === "/setup" ||
            url.pathname.startsWith("/document/")
          ? "/index.html"
          : url.pathname;
    const file = path.resolve(root, "." + decodeURIComponent(requested));
    if (!file.startsWith(root + path.sep)) {
      res.writeHead(403).end();
      return;
    }
    res.setHeader(
      "Content-Security-Policy",
      `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; frame-ancestors 'self' chrome-extension://${extensionId}`,
    );
    const data = await readFile(file);
    res
      .writeHead(200, {
        "Content-Type": mime[path.extname(file)] || "application/octet-stream",
        "Cache-Control": "no-cache",
      })
      .end(req.method === "HEAD" ? undefined : data);
  } catch (error) {
    if (res.headersSent) return;
    json(res, error.status || (error.code === "ENOENT" ? 404 : 400), {
      error: error.message,
    });
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(
    `Offline Docs: ${origin}\nDemo extension: ${extensionId}\nLocal data: .data/server-documents.json`,
  ),
);
