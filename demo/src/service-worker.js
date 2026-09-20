const CACHE = `offline-docs-shell-${SHELL_VERSION}`;
const assets = new Set(ASSET_LIST);
self.addEventListener("install", (event) =>
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll([...assets]);
      await self.skipWaiting();
    })(),
  ),
);
self.addEventListener("activate", (event) =>
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys())
        if (key.startsWith("offline-docs-shell-") && key !== CACHE)
          await caches.delete(key);
      await self.clients.claim();
    })(),
  ),
);
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (
    url.origin !== self.location.origin ||
    event.request.method !== "GET" ||
    url.pathname.startsWith("/api/")
  )
    return;
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
