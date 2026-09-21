const CACHE = `offline-docs-shell-${SHELL_VERSION}`;
// 这是网站 SW，不是扩展后台 worker：只负责离线启动所需响应，不上传文档或维护 outbox。
const assets = new Set(ASSET_LIST);
self.addEventListener("install", (event) =>
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // 全部外壳资源准备成功才结束 install；构建哈希区分资源版本。
      await cache.addAll([...assets]);
      await self.skipWaiting();
    })(),
  ),
);
self.addEventListener("activate", (event) =>
  event.waitUntil(
    (async () => {
      // 只回收本 Demo 的旧外壳缓存，绝不能顺便清理含未上传修改的 IndexedDB。
      // 立即激活/清旧壳是 Demo 简化，生产环境还需评估旧标签页的兼容窗口。
      for (const key of await caches.keys())
        if (key.startsWith("offline-docs-shell-") && key !== CACHE)
          await caches.delete(key);
      await self.clients.claim();
    })(),
  ),
);
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // API 响应不进入外壳缓存，避免旧 ACK 或旧业务数据被误当成一次真实服务端响应。
  if (
    url.origin !== self.location.origin ||
    event.request.method !== "GET" ||
    url.pathname.startsWith("/api/")
  )
    return;
  // 编辑路由回退到应用入口；隐藏 iframe 单独回退到 frame 入口，才能离线重建后台链路。
  const key =
    url.pathname === "/offline/extension/frame"
      ? "/frame.html"
      : event.request.mode === "navigate"
        ? "/index.html"
        : url.pathname;
  if (!assets.has(key)) return;
  event.respondWith(
    (async () => {
      const cached = await (await caches.open(CACHE)).match(key);
      return cached || fetch(event.request);
    })(),
  );
});
