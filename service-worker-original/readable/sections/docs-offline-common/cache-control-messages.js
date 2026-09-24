/**
 * 阅读切片：更新、删除、存活与版本查询控制面。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../docs-offline-common.js，原位置 L18923。
 * registerCacheMessageHandler（AF）：按协议类型登记唯一处理器。
 * handleCommonWorkerMessage（BF）：验证数组消息和回复端口，将异步处理纳入 waitUntil。
 * dispatchCacheControlRequest（FF）：根据固定数字协议派发；不重命名 wire 字段或改变返回结构。
 * CacheUpdateStatusHandler（HF）：type 7：查询缓存更新状态。
 * DeleteCachesHandler（IF）：type 1：删除缓存，不是普通缓存读取。
 * BuildLabelHandler（JF）：type 8：返回当前构建标签。
 * CacheLivenessHandler（KF）：type 2：返回存活响应；不证明缓存已完整。
 * UpdateCachesHandler（LF）：type 0：触发 cache_only_update 并包装失败。
 */
function registerCacheMessageHandler(messageRouter, handler_2) {
  var e = handler_2.j;
  if (messageRouter.o[e]) throw Error("sd`" + e);
  messageRouter.o[e] = handler_2;
  return messageRouter;
}
/** handleCommonWorkerMessage（原 BF）。
 * 验证数组消息和回复端口，将异步处理纳入 waitUntil。
 */
function handleCommonWorkerMessage(messageRouter, messageEvent) {
  if (messageEvent && messageEvent.data && messageEvent.ports.length)
    if (Array.isArray(messageEvent.data)) {
      var e = new wF(messageEvent.data),
        f = messageEvent.ports[0],
        g = Promise.resolve(CF(messageRouter, e)).then(function (h) {
          return f.postMessage(oe(h));
        });
      messageRouter = DF(messageRouter.v, e, g);
      typeof messageEvent.waitUntil === "function" && messageEvent.waitUntil(messageRouter);
    } else
      dC(
        messageRouter.j,
        Error("td`" + JSON.stringify(messageEvent.data) + "`" + Ka(messageEvent.data)),
      );
  else dC(messageRouter.j, Error("ud"));
}
function CF(a, c) {
  EF(a.A, kf(c, 1, Fe));
  return dispatchCacheControlRequest(a, c).catch(function (e) {
    e = Jk(e);
    dC(a.j, e, c);
    return GF(e);
  });
}
function GF(a) {
  var c = c === void 0 ? {} : c;
  var e = new zF(),
    f = Object.keys(c).map(function (g) {
      var h = new sF();
      h = vf(h, 1, g);
      return vf(h, 2, c[g]);
    });
  f = vF(uF(new tF(), a.message), f);
  a.message === "cache update timed out" && wf(f, 3, 1);
  N(e, tF, 3, f);
  return e;
}
/** dispatchCacheControlRequest（原 FF）。
 * 根据固定数字协议派发；不重命名 wire 字段或改变返回结构。
 */
function dispatchCacheControlRequest(messageRouter, controlRequest) {
  var e = kf(controlRequest, 1, Fe);
  messageRouter = messageRouter.o[e];
  return messageRouter
    ? kf(controlRequest, 1, Fe) !== messageRouter.j
      ? Promise.reject(Error("rd`" + messageRouter.j))
      : messageRouter.o()
    : ((controlRequest = Error("vd`" + e)), fC(controlRequest), Promise.reject(controlRequest));
}
/** CacheUpdateStatusHandler（原 HF）。
 * type 7：查询缓存更新状态。
 */
function CacheUpdateStatusHandler(a, c) {
  this.j = 7;
  this.A = a;
  this.v = c;
}
F(CacheUpdateStatusHandler, rF);
CacheUpdateStatusHandler.prototype.o = function () {
  var a = this.v;
  if ((a = a.J ? a.A : Error("cd"))) {
    var c = {};
    aC(this.A, a, "messageHandler", "info", ((c.serviceworker_messageHandler_requestType = 0), c));
    return Promise.resolve(GF(a));
  }
  return Promise.resolve(new zF());
};
/** DeleteCachesHandler（原 IF）。
 * type 1：删除缓存，不是普通缓存读取。
 */
function DeleteCachesHandler(a) {
  this.j = 1;
  this.v = a;
}
F(DeleteCachesHandler, rF);
DeleteCachesHandler.prototype.o = function () {
  return deleteManagedCaches(this.v).then(function () {
    return new zF();
  });
};
/** BuildLabelHandler（原 JF）。
 * type 8：返回当前构建标签。
 */
function BuildLabelHandler(a) {
  this.j = 8;
  this.v = a;
}
F(BuildLabelHandler, rF);
BuildLabelHandler.prototype.o = function () {
  var a = Hl(this.v, "buildLabel"),
    c = new zF(),
    e = new xF();
  a = vf(e, 1, a);
  e = new yF();
  a = N(e, xF, 1, a);
  N(c, yF, 7, a);
  return Promise.resolve(c);
};
/** CacheLivenessHandler（原 KF）。
 * type 2：返回存活响应；不证明缓存已完整。
 */
function CacheLivenessHandler() {
  this.j = 2;
}
F(CacheLivenessHandler, rF);
CacheLivenessHandler.prototype.o = function () {
  return Promise.resolve(new zF());
};
/** UpdateCachesHandler（原 LF）。
 * type 0：触发 cache_only_update 并包装失败。
 */
function UpdateCachesHandler(a, c) {
  this.j = 0;
  this.A = a;
  this.v = c;
}
F(UpdateCachesHandler, rF);
UpdateCachesHandler.prototype.o = function () {
  var a = this;
  return Promise.resolve()
    .then(function () {
      return iD(a.v, "cache_only_update");
    })
    .then(function () {
      return new zF();
    })
    .catch(function (c) {
      c = Jk(c);
      var e = {};
      aC(a.A, c, "messageHandler", "info", ((e.serviceworker_messageHandler_requestType = 0), e));
      return GF(c);
    });
};
