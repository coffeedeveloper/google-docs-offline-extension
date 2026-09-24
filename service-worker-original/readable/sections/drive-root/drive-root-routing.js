/**
 * 阅读切片：根路径重定向与策略链。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../drive-root.js，原位置 L11958。
 * RootRedirectFetchService（Ep）：仅匹配 GET / 或 /drive，按配置生成重定向。
 * DriveRootWorker（Fp）：根入口装配：preload → network → cache → redirect。
 */
var RootRedirectFetchService = function (redirectPath) {
  this.j = redirectPath;
};
n = RootRedirectFetchService.prototype;
n.la = function () {
  return "RootFetchService";
};
n.install = function () {
  return Promise.resolve();
};
n.ha = function () {
  return Promise.resolve();
};
n.ga = function () {
  return Promise.resolve();
};
n.Y = function () {
  return Promise.resolve();
};
n.pa = function (a) {
  if (a.method !== "GET") return false;
  a = new Xc(a.url).j;
  return a === "/" || a === "/drive";
};
n.fetch = function (a, b, c) {
  var d = d === void 0 ? wo : d;
  var e = e === void 0 ? 848 : e;
  b = zo(c, 0, 91083, 2e4);
  try {
    d(b);
  } catch (f) {
    Bo(b, f, e);
  }
  Co(c, b);
  c = new Xc(a.url);
  d = c.j;
  return d === "/" || d === "/drive"
    ? ((a = $c(c, this.j)), Promise.resolve(Response.redirect(a.toString())))
    : Promise.reject(new Me("RootFetchService", a, "Invalid request path"));
};
/** DriveRootWorker（原 Fp）。
 * 根入口装配：preload → network → cache → redirect。
 */
var DriveRootWorker = function (a, b, c, d) {
  d = d === void 0 ? [] : d;
  var e = new Dn(H(c, ng, 2));
  c = cg(c, 1);
  e = new OrderedFetchServiceChain(a, [
    new NavigationPreloadFetchService(a),
    new NetworkFetchService(),
    new CacheFetchService(e),
    new RootRedirectFetchService(c),
  ]);
  tp.call(this, a, b, e, d);
};
K(DriveRootWorker, tp);
(function (a) {
  var b = a.JSON.parse;
  a.JSON.parse = function (c, d) {
    try {
      return b.call(this, c, d);
    } catch (e) {
      throw (
        (c = String(c)),
        Error(
          "ka`" +
            (c.length > 100
              ? '"' + c.substring(0, 100) + '"\u2026 (' + c.length + " chars)"
              : '"' + c + '"'),
          { cause: e },
        )
      );
    }
  };
})(globalThis);
