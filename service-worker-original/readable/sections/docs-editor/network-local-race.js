/**
 * 阅读切片：延迟本地兜底与网络竞争。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../docs-editor.js，原位置 L21208。
 * DelayedLocalFallback（lK）：等待窗口与本地准备分离；cancel 不等于中断所有已启动操作。
 * waitForLocalFallbackWindow（mK）：保留 4 秒及后续 18 秒分支和弱网检测，不能简单改为固定 timeout。
 * prepareDelayedLocalFallback（nK）：按请求模式和开关决定是否提前准备本地响应。
 * getDelayedLocalFallback（oK）：先检查取消状态；必要时创建并复用本地启动 Promise。
 * NetworkLocalRaceHandler（tK）：网络与延迟本地分支竞争；最终仍检查结果是否可用。
 */
function DelayedLocalFallback(logger, localHandler, requestContext_2, flags) {
  this.B = logger;
  this.o = requestContext_2;
  this.D = localHandler;
  this.F = waitForLocalFallbackWindow(this);
  this.v = false;
  this.C = flags;
}
DelayedLocalFallback.prototype.fetch = function () {
  var a = this;
  prepareDelayedLocalFallback(this);
  return this.F.then(function () {
    return getDelayedLocalFallback(a);
  });
};
DelayedLocalFallback.prototype.cancel = function () {
  this.v = true;
};
/** prepareDelayedLocalFallback（原 nK）。
 * 按请求模式和开关决定是否提前准备本地响应。
 */
function prepareDelayedLocalFallback(fallback) {
  var c = fallback.o.W,
    e = V(fallback.C, "docs-edfc");
  (c.C && e) || (fallback.j = pK(fallback));
}
/** getDelayedLocalFallback（原 oK）。
 * 先检查取消状态；必要时创建并复用本地启动 Promise。
 */
function getDelayedLocalFallback(fallback) {
  if (fallback.v) return Promise.resolve(new yI(null, "none", "fallback-canceled"));
  fallback.j || (fallback.j = pK(fallback));
  return fallback.j;
}
function pK(a) {
  a.j = qK(a.D, a.o).then(function (c) {
    var e = c.hb;
    e && jE(a.B, a.o, e, { serviceworker_localResponseFlakyConnectionError: "true" });
    return (a.I = c);
  });
  return a.j;
}
/** waitForLocalFallbackWindow（原 mK）。
 * 保留 4 秒及后续 18 秒分支和弱网检测，不能简单改为固定 timeout。
 */
function waitForLocalFallbackWindow(fallback) {
  function c(e) {
    return new Promise(function (f) {
      return setTimeout(f, e);
    });
  }
  return c(4e3)
    .then(function () {
      return rK() ? 1 : I.navigator.onLine ? c(18e3).then(x(3)) : 2;
    })
    .then(function (e) {
      fallback.A = e;
    });
}
function rK() {
  if (!(Fb() >= 61)) return false;
  var a = I.navigator.connection;
  a = sK.indexOf(a && a.effectiveType ? a.effectiveType : "4g");
  var c = sK.indexOf("2g");
  return a >= 0 && a <= c;
}
var sK = ["slow-2g", "2g", "3g", "4g"];
/** NetworkLocalRaceHandler（原 tK）。
 * 网络与延迟本地分支竞争；最终仍检查结果是否可用。
 */
function NetworkLocalRaceHandler(a, c, e, f, g, h, k) {
  this.D = a;
  this.v = c;
  this.A = e;
  this.o = f;
  this.j = g;
  this.C = h;
  this.B = k;
}
NetworkLocalRaceHandler.prototype.fetch = function (a) {
  var c = this,
    e = I.performance.now(),
    f = qK(this.D, a),
    g = new DelayedLocalFallback(this.A, this.v, a, this.B),
    h = g.fetch();
  return Promise.race([f, h]).then(function (k) {
    var l,
      p = ((l = g.I) == null ? void 0 : l.ya != null) === false;
    if (k.Na === "network") {
      l = c.o;
      var q = I.performance.now() - e,
        r = VJ(l, 100011, a.o),
        w = Cn(En(KH(r)));
      Ff(w, 2, q * 1e3);
      Q(w, 3, p);
      l.pa(r);
      return uK(c, a, k, g);
    }
    l = g.A;
    q = c.o;
    r = a.W.o;
    w = VJ(q, 100002, a.o);
    var y = Cn(En(KH(w)));
    Q(y, 3, p);
    wn(y);
    xn(y, r);
    Hf(y, 9, l);
    q.pa(w);
    return vK(c, a, f, k, l);
  });
};
