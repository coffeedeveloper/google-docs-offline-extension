/**
 * 阅读切片：入口识别、本地文档查找与编辑器跳转。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../docs-offline-root.js，原位置 L17045。
 * LocalEditorRedirectHandler（HC）：读取本地文档类型并构造编辑器 302；不能处理时交给后续策略。
 * resolveRootRedirectUrl（IC）：区分 /open、创建和产品入口；规范化后未变化则返回 null。
 * resolveEditorUrlFromLocalDocument（JC）：本地文档类型决定编辑器；保留 resourcekey、usp、rswr 参数规则。
 * readLocalDocumentForRedirect（LC）：通过本地数据库回调取得文档元信息，不请求服务端正文。
 * EDITOR_PATH_BY_TYPE（KC）：编译快照中的 kix/ritz/punch/drawing 产品路由表。
 * RootFetchStrategyChain（NC）：依次组合本地重定向与网络处理；失败分类沿用原逻辑。
 */
function LocalEditorRedirectHandler(editorCatalog, flags) {
  this.v = xv;
  this.j = editorCatalog;
  this.o = flags;
}
LocalEditorRedirectHandler.prototype.fetch = function (a) {
  return resolveRootRedirectUrl(this, a)
    .then(function (c) {
      if (c) {
        var e = c.match(Mk);
        c = Lk(e[1], null, e[3], e[4]) ? c : K.location.origin + (c.startsWith("/") ? c : "/" + c);
        e = new Headers();
        e.set("Location", c);
        c = new Response("", { status: 302, headers: e });
        c = new DC(c, "client-redirect");
      } else c = new DC(null, "client-redirect", "redirect-skipped");
      return c;
    })
    .catch(function (c) {
      if (c instanceof $A) return new DC(null, "client-redirect", c.o);
      throw c;
    });
};
/** resolveRootRedirectUrl（原 IC）。
 * 区分 /open、创建和产品入口；规范化后未变化则返回 null。
 */
function resolveRootRedirectUrl(redirectHandler, requestContext_2) {
  if (!requestContext_2.j) return Promise.reject(new $A("missing-action-info"));
  var e = requestContext_2.j.D;
  if (requestContext_2.j.j === "unknown") {
    var f = requestContext_2.j.v;
    if (f) return resolveEditorUrlFromLocalDocument(redirectHandler, f, e || "drive_open");
  }
  redirectHandler = new gq(requestContext_2.o.url);
  if (redirectHandler.j) {
    var g = redirectHandler.j,
      h = Kp(g);
    g = Ip(g);
    f = requestContext_2.j.A
      ? requestContext_2.j && requestContext_2.j.j
        ? EDITOR_PATH_BY_TYPE[requestContext_2.j.j]
        : void 0
      : null;
    h &&
      f &&
      ((g = redirectHandler.o.get("authuser")),
      redirectHandler.o.remove("authuser"),
      redirectHandler.o.remove("ouid"),
      (g = f + "/u/" + (g || "0") + "/create"));
    jq(redirectHandler, g);
  }
  requestContext_2.j.B
    ? ((f =
        (requestContext_2.j && requestContext_2.j.j
          ? EDITOR_PATH_BY_TYPE[requestContext_2.j.j]
          : void 0) + "/"),
      (g = Nk(requestContext_2.o.url.match(Mk)[5] || null) || ""),
      g.startsWith(f)
        ? (f = null)
        : ((h = Lp(g)),
          (f =
            g !== h ? (h === "/" ? "/document" + g : h === "" ? "/document" + g + "/" : null) : f)))
    : (f = null);
  f
    ? (jq(redirectHandler, f), (e = e || "direct_url"))
    : redirectHandler.j === "/create" &&
      (jq(redirectHandler, "/document/create"), (e = e || "root_create"));
  requestContext_2 = new gq(requestContext_2.o.url).toString();
  if (redirectHandler.toString() === requestContext_2) return Promise.resolve(null);
  e && redirectHandler.o.set("usp", e);
  redirectHandler.o.set("rswr", "true");
  return Promise.resolve(redirectHandler.toString());
}
/** resolveEditorUrlFromLocalDocument（原 JC）。
 * 本地文档类型决定编辑器；保留 resourcekey、usp、rswr 参数规则。
 */
function resolveEditorUrlFromLocalDocument(redirectHandler, documentId_2, entrySource) {
  return Promise.resolve(Bz(redirectHandler.v))
    .then(function (f) {
      return readLocalDocumentForRedirect(documentId_2, f);
    })
    .then(function (f) {
      if (!f) return Promise.reject(new $A("cannot-determine-editor"));
      var g = f.getType(),
        h = redirectHandler.o,
        k = redirectHandler.j;
      k = k || ZA(h);
      h = k.get(g);
      if (!h) throw Error("Mc`" + g);
      k = f.ub();
      f = h.o.match(Mk);
      g = f[5];
      documentId_2 && h.v && (g += "/d/" + documentId_2);
      var l = U(h.A, "docs-erkpp");
      k != null && l && (g += "/r/" + k);
      g += "/edit";
      var p = {};
      documentId_2 && !h.v && (p.id = documentId_2);
      k == null || l || (p.resourcekey = k);
      entrySource != null && (p.usp = entrySource);
      h = aq(p) ? null : Sk(p);
      h = new gq(Lk(f[1], f[2], f[3], f[4], g, h));
      h.o.set("rswr", "true");
      return h.toString();
    });
}
/** readLocalDocumentForRedirect（原 LC）。
 * 通过本地数据库回调取得文档元信息，不请求服务端正文。
 */
function readLocalDocumentForRedirect(documentId_2, localStore) {
  return new Promise(function (e) {
    Vw(localStore.j.C, documentId_2, e);
  });
}
/** EDITOR_PATH_BY_TYPE（原 KC）。
 * 编译快照中的 kix/ritz/punch/drawing 产品路由表。
 */
var MC = {},
  EDITOR_PATH_BY_TYPE =
    ((MC.kix = "/document"),
    (MC.ritz = "/spreadsheets"),
    (MC.punch = "/presentation"),
    (MC.drawing = "/drawings"),
    MC);
/** RootFetchStrategyChain（原 NC）。
 * 依次组合本地重定向与网络处理；失败分类沿用原逻辑。
 */
function RootFetchStrategyChain(a, c, e) {
  this.o = a;
  this.v = c;
  this.j = e;
}
RootFetchStrategyChain.prototype.fetch = function (a) {
  var c = this;
  return OC(this.o, a).then(function (e) {
    return e.j != null
      ? OC(c.v, a).then(function (f) {
          var g = c.j;
          if (e.j == "document-not-available-locally") {
            var h = fC(g.o, a.j ? a.j.v : null, g.j, a.v, a.o.url);
            g = PC(g.v, a, h);
            vb() >= 60 && a.D(g);
          }
          g = f.kb == null || (f.j != null && e.j == null) ? true : false;
          g ? ((f = f.ab) && EC(e, f), (f = e)) : (g = e.ab) && EC(f, g);
          return f;
        })
      : e;
  });
};
