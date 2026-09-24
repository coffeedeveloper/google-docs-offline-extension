/** 来源 Docs editor 的 YK。输出包装交给原响应协议适配器。 */
export function classifyNetworkResponse({
  response,
  isDocumentAction,
  forceWeb,
  deletionFallbackEnabled,
  results,
}) {
  if (isDocumentAction) {
    if (response.status === 404)
      return results.unavailable(response, "server-document-not-found");
    if (response.status === 410 && deletionFallbackEnabled)
      return results.unavailable(response, "server-document-deleted");
    if (!forceWeb) {
      if ([500, 502, 503].includes(response.status))
        return results.unavailable(response, "server-error");
      if (response.headers.get("docs-offline-fallback-if-possible") === "true")
        return results.unavailable(response, "server-suggested");
    }
  }
  return results.network(response);
}

/** 来源 NK：只在首选没有匹配时读备选；首选读取失败不会自动吞错试备选。 */
export function findPrimaryOrAlternateShell(cache, primaryUrl, alternateUrl) {
  return cache
    .find(primaryUrl)
    .then((primary) => primary || cache.find(alternateUrl));
}

/**
 * 来源 QK。构造 URL、协议 getter、响应包装保留在 ports；此处表达启动决策。
 * timing 映射 request.j.U / J，不改变计时发生的位置。
 */
export function validateDocumentAndShell({ document, variant, timing, ports }) {
  const primaryUrl = ports.buildShellUrl(variant);
  const alternateUrl = ports.buildShellUrl(!variant);
  timing.lookupStartedAt = ports.now();
  return findPrimaryOrAlternateShell(
    ports.cache,
    primaryUrl,
    alternateUrl,
  ).then((match) => {
    timing.lookupDurationMs = ports.now() - timing.lookupStartedAt;
    if (!match) return ports.onMissingShell(primaryUrl, alternateUrl);
    // 严格比较 true：不能把任意 truthy 值都当成同一配置含义。
    if (ports.modelNeedsResync(document) === true)
      return ports.unavailable(
        match.request,
        document,
        "document-model-needs-resync",
      );
    if (ports.cacheNeedsUpdate(match.metadata))
      return ports.unavailable(match.request, document, "cache-needs-update");
    return ports.cachedLaunch(match.request, document);
  });
}
