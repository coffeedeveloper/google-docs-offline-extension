/**
 * 阅读切片：公共清单入口、缓存键与缓存读取。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../docs-offline-common.js，原位置 L17893。
 * CommonManifestUrlProvider（ED）：读取本地用户信息及调试开关，为公共资源清单提供入口。
 * getCommonManifestUrls（FD）：为当前账号构造 /offline/common/cachemanifest；无用户时返回空列表。
 * CommonCacheFetchHandler（JD）：优先读取公共离线资源；extension/frame 有独立的后处理例外。
 * normalizeCommonCacheKey（KD）：仅保留 ND 白名单参数；不能直接删除 ouid 或把账号缓存混用。
 * readCommonCachedResponse（LD）：区分未缓存、资源损坏与有效响应，不把任何命中都当成功。
 */
function CommonManifestUrlProvider() {
  var a = Hv;
  if (c === void 0) {
    var c = new oq(K.location.href);
    c =
      c.v.get("Debug") == "true" ||
      c.v.get("debug") == "true" ||
      c.v.get("debug") == "pretty" ||
      c.v.get("jsmode") == "DU";
  }
  this.j = a;
  this.o = c;
}
/** getCommonManifestUrls（原 FD）。
 * 为当前账号构造 /offline/common/cachemanifest；无用户时返回空列表。
 */
function getCommonManifestUrls(manifestProvider) {
  return Promise.resolve(Iv(manifestProvider.j)).then(function (c) {
    if (!c) return [];
    var e = new vq();
    e.add("ouid", c.o.X());
    manifestProvider.o && e.add("Debug", true);
    c = K.location.href.match(Rk);
    return [sq(rq(new oq(Qk(c[1], c[2], c[3], c[4])), "/offline/common/cachemanifest"), e)];
  });
}
function GD(a, c, e) {
  if (a == null && !e) throw Error("ld");
  this.Pa = a;
  this.j = c;
  this.Ua = e || null;
  this.gb = null;
}
function HD(a, c) {
  a.gb = a.gb ? Lk(c, { serviceworker_multipleFetchErrors: "true" }) : c;
}
function ID(a, c, e) {
  a = new GD(null, a, c);
  HD(a, e);
  return a;
}
/** CommonCacheFetchHandler（原 JD）。
 * 优先读取公共离线资源；extension/frame 有独立的后处理例外。
 */
function CommonCacheFetchHandler(a, c, e, f) {
  var g = mv;
  this.o = a;
  this.A = c;
  this.j = g;
  this.B = e || null;
  this.v = f || null;
}
CommonCacheFetchHandler.prototype.fetch = function (a) {
  var c = this;
  return normalizeCommonCacheKey(a)
    .then(function (e) {
      return readCommonCachedResponse(c, a, e);
    })
    .then(function (e) {
      return c.B == null || a.j == null || a.j.j == "/offline/extension/frame" || e.Ua != null
        ? e
        : MD(c, a, e, c.B);
    });
};
/** normalizeCommonCacheKey（原 KD）。
 * 仅保留 ND 白名单参数；不能直接删除 ouid 或把账号缓存混用。
 */
function normalizeCommonCacheKey(requestContext_2) {
  var c = requestContext_2.o.url;
  if (requestContext_2.j && requestContext_2.j.v) {
    c = COMMON_CACHE_QUERY_ALLOWLIST;
    requestContext_2 = Dq(requestContext_2.o.url);
    for (var e = requestContext_2.v, f = new vq(), g = 0; g < c.length; g++) {
      var h = c[g];
      Hq(e, h) && f.add(h, e.get(h, ""));
    }
    sq(requestContext_2, f);
    c = Promise.resolve(requestContext_2.toString());
  } else c = Promise.resolve(c);
  return c;
}
/** readCommonCachedResponse（原 LD）。
 * 区分未缓存、资源损坏与有效响应，不把任何命中都当成功。
 */
function readCommonCachedResponse(cacheHandler, requestContext_2, cacheKey) {
  return OD(cacheHandler, cacheKey, requestContext_2).then(function (f) {
    var g = requestContext_2.B;
    g.j || (g.j = false);
    if (!f && TB(requestContext_2)) return PD(cacheHandler, cacheKey, requestContext_2.j);
    if (!f) return new GD(null, "cache-storage", "resource-not-cached");
    try {
      pB(f, false);
    } catch (h) {
      return (
        (f = new GD(f, "cache-storage", "corrupted-resource")),
        (g = {}),
        HD(f, Lk(h, ((g.serviceworker_isResourceFromServer = "false"), g))),
        f
      );
    }
    return new GD(f, "cache-storage");
  });
}
