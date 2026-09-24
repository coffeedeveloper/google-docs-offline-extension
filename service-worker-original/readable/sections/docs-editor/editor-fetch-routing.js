/**
 * 阅读切片：fetch 入口和策略选择。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../docs-editor.js，原位置 L21959。
 * handleEditorFetchEvent（kL）：只处理匹配的 GET；区分禁用资源、动作入口、离线导航和普通资源。
 * chooseEditorActionStrategy（oL）：依据请求模式、开关和客户端状态选择缓存/网络/竞争策略。
 * chooseOfflineNavigationStrategy（nL）：已有离线入口仍需区分在线可恢复路径与本地状态。
 */
function handleEditorFetchEvent(workerController, fetchEvent) {
  var e = fetchEvent.request;
  if (e.method == "GET") {
    var f = FK(workerController.T, fetchEvent),
      g = e.url;
    e.destination !== "worker" ||
      g.includes(new Ws(Ql(workerController.B.ib, "/")).toString()) ||
      g.includes("/offline/synctaskworker.js") ||
      g.includes("/offline/eventbusworker.js") ||
      ((g = Error("Qd")), TG(g), jE(workerController.A, f, g, { target_url: e.url }));
    if (lL(workerController, f))
      fetchEvent.respondWith(
        new Response(null, { status: 204, statusText: "Disabled By Service Worker" }),
      );
    else {
      mL(workerController.o, f);
      f.j.start();
      if (f.A) e = chooseOfflineNavigationStrategy(workerController, f);
      else if (f.W) e = chooseEditorActionStrategy(workerController, f, f.W);
      else if (f.v) e = qK(workerController.j, f);
      else return;
      fetchEvent.respondWith(
        pL(
          workerController.C,
          f,
          e.then(function (h) {
            qL(workerController, f, h);
            rL(
              workerController,
              f,
              Promise.resolve(eu(0)).then(function () {
                return sL(workerController, f, h);
              }),
            );
            return h;
          }),
          workerController.J,
        ),
      );
    }
  }
}
/** chooseEditorActionStrategy（原 oL）。
 * 依据请求模式、开关和客户端状态选择缓存/网络/竞争策略。
 */
function chooseEditorActionStrategy(workerController, requestContext_2, actionInfo) {
  if (actionInfo.B) return workerController.I.fetch(requestContext_2);
  var f = requestContext_2.ea.url,
    g = Nl(f, "fws") == "true";
  f = !g && (workerController.M || Nl(f, "fcs") == "true");
  if (actionInfo.I && requestContext_2.v) {
    var h = wK(workerController.o, requestContext_2.o);
    UJ(workerController.v, requestContext_2.o, actionInfo.o, g, actionInfo.v || null, !!h);
    h &&
      !h.C &&
      (h.start(),
      tL(h, actionInfo.o),
      rL(
        workerController,
        requestContext_2,
        uL(h).then(function () {
          return workerController.v.kb();
        }),
      ));
  }
  var k =
    workerController.K && requestContext_2.ea.destination === "iframe"
      ? workerController.j
      : f
        ? workerController.R
        : (actionInfo.D ? 0 : !actionInfo.I) || g
          ? workerController.U
          : workerController.O;
  return workerController.N.clients
    .matchAll()
    .then(function (l) {
      requestContext_2.j.K = l.length;
    })
    .then(function () {
      return k.fetch(requestContext_2);
    });
}
/** chooseOfflineNavigationStrategy（原 nL）。
 * 已有离线入口仍需区分在线可恢复路径与本地状态。
 */
function chooseOfflineNavigationStrategy(workerController, requestContext_2) {
  var e = fK(requestContext_2.ea.url);
  e && (requestContext_2.j.A = e);
  e = wK(workerController.o, requestContext_2.o);
  var f;
  if ((f = I.navigator.onLine)) {
    f = requestContext_2.ea.url;
    f = wG(f) || uG(f) || yG(f);
  }
  return f
    ? workerController.S.fetch(requestContext_2)
    : e && e.D
      ? workerController.I.fetch(requestContext_2)
      : workerController.H.fetch(requestContext_2);
}
