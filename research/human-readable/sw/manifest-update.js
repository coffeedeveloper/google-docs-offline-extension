/** 来源 Docs common 的 LC / OC。资源下载、错误格式与协议序列化由 ports 适配。 */
export class ManifestUpdate {
  constructor({ caches, cacheName, failedCacheLabel, manifest, flags, ports }) {
    Object.assign(this, {
      caches,
      cacheName,
      failedCacheLabel,
      manifest,
      flags,
      ports,
    });
  }

  populateAndCommit(versionCache, previousState) {
    const diagnostics = {
      serviceworker_updatingExistingCache: !!previousState,
      serviceworker_cacheFullyPopulatedBeforeUpdate:
        previousState && previousState.isComplete(),
      serviceworker_cacheConsistentBeforeUpdate:
        previousState && previousState.consistent,
    };
    return this.ports
      .populateResources(versionCache)
      .then(() => {
        // 标记请求是原 "//manifest_cache_is_complete"，其 URL 解析依赖网页 origin。
        // 宿主提供实际 Request/Response；这里不以 Node URL 行为代替浏览器行为。
        return versionCache.put(
          this.ports.createCompleteMarkerRequest(),
          this.ports.createManifestResponse(this.manifest),
        );
      })
      .catch((error) => this.handleFailure(error, diagnostics));
  }

  handleFailure(error, diagnostics) {
    if (
      this.flags.preservePreviouslyComplete &&
      diagnostics.serviceworker_cacheFullyPopulatedBeforeUpdate
    ) {
      // 这一分支吞掉本次更新失败，保留旧缓存；不能擅自改成 throw。
      return Promise.resolve();
    }
    return this.caches
      .delete(this.cacheName)
      .then(() => this.ports.listManagedCaches())
      .then((remainingCaches) => {
        if (
          remainingCaches.length === 0 &&
          this.flags.reportWhenNoCacheRemains
        ) {
          diagnostics.serviceworker_fetchUrl = this.ports.getFetchUrl(error);
          this.ports.report(Error("Wc`" + error.message), diagnostics);
        }
        throw this.ports.annotateError(error, {
          failedCacheName: this.failedCacheLabel,
        });
      });
    // delete/list 的失败仍原样传播，不会再包成资源下载错误。
  }
}
