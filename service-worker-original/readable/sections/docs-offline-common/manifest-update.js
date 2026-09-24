/**
 * 阅读切片：版本准备、完成标记与失败处理入口。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../docs-offline-common.js，原位置 L17035。
 * ManifestCacheUpdater（JC）：准备单个版本缓存；成功写入完整标记后才可被完整版本选择器使用。
 * getManifestCacheName（KC）：从缓存类型、构建和清单信息计算目标缓存名。
 * populateAndMarkManifestComplete（LC）：先等待 NC 的资源准备链路成功，再写 //manifest_cache_is_complete；不是原生事务。
 * handleManifestUpdateFailure（OC）：是否保留旧完整缓存受功能开关和旧状态影响，不是无条件保留。
 */
function ManifestCacheUpdater(a, c, e, f, g, h) {
  var k = k === void 0 ? 3 : k;
  this.F = h;
  this.B = c;
  this.K = new xC(c, h);
  this.o = a;
  this.v = e;
  this.j = f;
  this.C = of(e, 1);
  this.A = g;
  this.D = k;
  this.H = new mC(f, g, h, k);
}
/** getManifestCacheName（原 KC）。
 * 从缓存类型、构建和清单信息计算目标缓存名。
 */
function getManifestCacheName(manifestUpdater) {
  return kB(manifestUpdater.B, manifestUpdater.C, rf(manifestUpdater.v, 2));
}
ManifestCacheUpdater.prototype.update = function () {
  var a = this;
  return this.o.open(getManifestCacheName(this)).then(function (c) {
    return AC(c)
      .then(function (e) {
        if (e) return CC(a.K, a.o, c, a.v, a.j);
      })
      .then(function (e) {
        if (e && e.Kd && e.Kc) rf(a.v, 2);
        else
          return populateAndMarkManifestComplete(a, c, e).then(function () {
            return MC(a);
          });
      });
  });
};
function MC(a) {
  return a.o
    .open(getManifestCacheName(a))
    .then(function (c) {
      return AC(c);
    })
    .then(function (c) {
      c || HB(a.j, Error("Uc"));
    })
    .catch(function (c) {
      HB(a.j, Error("Vc`" + c.message));
    });
}
/** populateAndMarkManifestComplete（原 LC）。
 * 先等待 NC 的资源准备链路成功，再写 //manifest_cache_is_complete；不是原生事务。
 */
function populateAndMarkManifestComplete(manifestUpdater, versionCache, previousState) {
  var f = {},
    g =
      ((f.serviceworker_updatingExistingCache = !!previousState),
      (f.serviceworker_cacheFullyPopulatedBeforeUpdate = previousState && previousState.na()),
      (f.serviceworker_cacheConsistentBeforeUpdate = previousState && previousState.Kc),
      f);
  return NC(manifestUpdater, versionCache)
    .then(function () {
      var h = manifestUpdater.v;
      return versionCache.put(new Request("//manifest_cache_is_complete"), new Response(bg(h)));
    })
    .catch(function (h) {
      return handleManifestUpdateFailure(manifestUpdater, h, g);
    });
}
/** handleManifestUpdateFailure（原 OC）。
 * 是否保留旧完整缓存受功能开关和旧状态影响，不是无条件保留。
 */
function handleManifestUpdateFailure(manifestUpdater, updateError, diagnostics) {
  return U(manifestUpdater.F, "docs-sw-eddfpc") &&
    diagnostics.serviceworker_cacheFullyPopulatedBeforeUpdate
    ? Promise.resolve()
    : manifestUpdater.o
        .delete(getManifestCacheName(manifestUpdater))
        .then(function () {
          return tB(manifestUpdater.B, manifestUpdater.o);
        })
        .then(function (f) {
          var g = U(manifestUpdater.F, "docs-sw-ernec");
          f.length === 0 &&
            g &&
            ((f = Error("Wc`" + updateError.message)),
            (diagnostics.serviceworker_fetchUrl = lc(updateError).serviceworker_fetchUrl),
            HB(manifestUpdater.j, f, diagnostics));
          throw Lk(updateError, { failedCacheName: manifestUpdater.C });
        });
}
