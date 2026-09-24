/**
 * 阅读切片：文档读取、模型状态与应用 shell 校验。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../docs-editor.js，原位置 L21522。
 * createDocumentForOfflineLaunch（JK）：创建分支取得文档信息后复用离线启动校验。
 * readDocumentForOfflineLaunch（KK）：先读本地文档，再检查可启动的应用资源。
 * validateDocumentAndCachedShell（QK）：拒绝 modelNeedsResync、缓存需更新等状态；shell 存在不等于文档可用。
 * findPrimaryOrAlternateShell（NK）：按原顺序查两个入口候选，不并行改变优先级。
 */
function createDocumentForOfflineLaunch(a, c, e, f, g, h) {
  var k = new bs(f, e, new Tm(a.C), a.o);
  if (g.A) return Promise.reject(Error("Nd"));
  var l = consumeReservedDocumentId(k, g.j);
  return new Promise(function (p, q) {
    mk(l, p, q);
  }).then(
    function (p) {
      return validateDocumentAndCachedShell(a, c, f, g, h, p, a.j);
    },
    function (p) {
      if (p instanceof To && p.type === 10) return RK(a, e, f, g, c.ea.url);
      throw p;
    },
  );
}
/** readDocumentForOfflineLaunch（原 KK）。
 * 先读本地文档，再检查可启动的应用资源。
 */
function readDocumentForOfflineLaunch(a, c, e, f, g, h) {
  c.j.O = Date.now();
  return new Promise(function (k) {
    oA(e.j.B, g.v, k);
  }).then(function (k) {
    var l = c.j;
    l.H = Date.now() - l.O;
    return k ? validateDocumentAndCachedShell(a, c, f, g, h, k, a.j) : PK(a, e, f, g, c.ea.url);
  });
}
/** validateDocumentAndCachedShell（原 QK）。
 * 拒绝 modelNeedsResync、缓存需更新等状态；shell 存在不等于文档可用。
 */
function validateDocumentAndCachedShell(
  launchHandler,
  requestContext_2,
  userInfo,
  actionInfo,
  appInfo,
  documentRecord,
  variant,
) {
  var l = SK(requestContext_2, userInfo, actionInfo, appInfo, documentRecord, variant),
    p = SK(requestContext_2, userInfo, actionInfo, appInfo, documentRecord, !variant);
  requestContext_2.j.U = Date.now();
  return findPrimaryOrAlternateShell(launchHandler, l, p).then(function (q) {
    var r = requestContext_2.j;
    r.J = Date.now() - r.U;
    if (q)
      if (true === Am(documentRecord, "modelNeedsResync"))
        q = FI(q.request, documentRecord, "document-model-needs-resync");
      else {
        var w;
        xf(q.metadata, 1)
          ? (w = FI(q.request, documentRecord, "cache-needs-update"))
          : (w = new yI(
              createOfflineRedirectResponse(q.request),
              "cache-storage",
              void 0,
              documentRecord,
            ));
        q = w;
      }
    else q = OK(launchHandler, l, p, actionInfo.j);
    return q;
  });
}
/** findPrimaryOrAlternateShell（原 NK）。
 * 按原顺序查两个入口候选，不并行改变优先级。
 */
function findPrimaryOrAlternateShell(launchHandler, primaryUrl, alternateUrl) {
  return iI(launchHandler.v, primaryUrl).then(function (f) {
    return f ? f : iI(launchHandler.v, alternateUrl);
  });
}
