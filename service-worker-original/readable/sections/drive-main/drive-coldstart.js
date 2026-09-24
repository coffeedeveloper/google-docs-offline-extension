/**
 * 阅读切片：列表路由、coldstart/cacheproxy 与策略装配。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../drive-main.js，原位置 L13771。
 * DriveListRouteMatcher（Kr）：保存允许离线 coldstart 的列表路由。
 * matchesDriveListRoute（Lr）：归一化 /drive/u/{n}/ 与 mobile 前缀后匹配路由；第二参数按原实现复用为路径数组和路由段。
 * DriveColdstartCacheConfig（Mr）：将多个列表入口映射到同账号的 coldstart 缓存键。
 * getCriticalDriveBootRequests（Nr）：coldstart 与可选 cacheproxy 作为关键准备请求。
 * getDriveCacheProxyRequest（Or）：为当前账号构造 cacheproxy 请求。
 * matchesDriveCacheProxyRequest（Pr）：仅在配置允许时识别 cacheproxy 路径。
 * DriveMainWorker（Rr）：主 SW 控制器，使用列表应用的策略装配。
 * createDriveMainFetchChain（Qr）：preload → network → module set → cache；顺序不能随意调整。
 */
var DriveListRouteMatcher = function (allowedRoutes) {
    this.j = allowedRoutes;
  },
  matchesDriveListRoute = function (routeMatcher, urlOrRouteParts) {
    urlOrRouteParts = new URL(urlOrRouteParts).pathname.split("/");
    var driveSegmentIndex = urlOrRouteParts.indexOf("drive");
    if (driveSegmentIndex === -1) return false;
    urlOrRouteParts[urlOrRouteParts.length - 1] === "" && urlOrRouteParts.pop();
    urlOrRouteParts = urlOrRouteParts.slice(driveSegmentIndex + 1);
    urlOrRouteParts.length >= 2 &&
      urlOrRouteParts[0] === "u" &&
      !/[^0-9]/.test(urlOrRouteParts[1]) &&
      (urlOrRouteParts = urlOrRouteParts.slice(2));
    urlOrRouteParts[0] === "mobile" && (urlOrRouteParts = urlOrRouteParts.slice(1));
    urlOrRouteParts = urlOrRouteParts[0] || "";
    return !urlOrRouteParts || routeMatcher.j.indexOf(urlOrRouteParts) !== -1;
  };
/** DriveColdstartCacheConfig（原 Mr）。
 * 将多个列表入口映射到同账号的 coldstart 缓存键。
 */
var DriveColdstartCacheConfig = function (a) {
  var b = I(a, mh, 1);
  DriveCacheConfig.call(this, b);
  var c = jh(I(a, ih, 2)).map(function (d) {
    return ib(J(d, 2, void 0, ze));
  });
  this.D = new DriveListRouteMatcher(c);
  this.A = Rd(b, 5);
  this.l = wh(I(a, vh, 3));
  this.v = uh(I(a, th, 4));
};
M(DriveColdstartCacheConfig, DriveCacheConfig);
DriveColdstartCacheConfig.prototype.eb = function () {
  return DriveCacheConfig.prototype.eb
    .call(this)
    .concat(
      this.A.map(function (a) {
        return { request: Yo(a), failFast: false, Ia: true, Da: false };
      }),
    )
    .concat(getCriticalDriveBootRequests(this));
};
/** getCriticalDriveBootRequests（原 Nr）。
 * coldstart 与可选 cacheproxy 作为关键准备请求。
 */
var getCriticalDriveBootRequests = function (coldstartConfig) {
  var b = [Yo("offline/coldstart?ouid=" + coldstartConfig.l)];
  coldstartConfig.v && b.push(getDriveCacheProxyRequest(coldstartConfig));
  return b.map(function (c) {
    return { request: c, failFast: true, Ia: true, Da: false };
  });
};
DriveColdstartCacheConfig.prototype.F = function (a) {
  return matchesDriveListRoute(this.D, a.url)
    ? Yo("offline/coldstart?ouid=" + this.l)
    : matchesDriveCacheProxyRequest(this, a)
      ? getDriveCacheProxyRequest(this)
      : a;
};
DriveColdstartCacheConfig.prototype.Db = function (a) {
  return (
    DriveCacheConfig.prototype.Db.call(this, a) ||
    matchesDriveListRoute(this.D, a.url) ||
    matchesDriveCacheProxyRequest(this, a) ||
    this.A.includes(a.url)
  );
};
/** matchesDriveCacheProxyRequest（原 Pr）。
 * 仅在配置允许时识别 cacheproxy 路径。
 */
/** getDriveCacheProxyRequest（原 Or）。
 * 为当前账号构造 cacheproxy 请求。
 */
var getDriveCacheProxyRequest = function (coldstartConfig) {
    return Yo("_/dataservice/cacheproxy?ouid=" + coldstartConfig.l);
  },
  matchesDriveCacheProxyRequest = function (coldstartConfig, request_2) {
    return coldstartConfig.v
      ? new URL(request_2.url).pathname.endsWith("_/dataservice/cacheproxy")
      : false;
  };
/** DriveMainWorker（原 Rr）。
 * 主 SW 控制器，使用列表应用的策略装配。
 */
var DriveMainWorker = function (a, b, c, d) {
  d = d === void 0 ? [] : d;
  var e = new DriveColdstartCacheConfig(c);
  DriveWorkerController.call(this, a, b, createDriveMainFetchChain(a, e, I(c, mh, 1)), d);
};
M(DriveMainWorker, DriveWorkerController);
/** createDriveMainFetchChain（原 Qr）。
 * preload → network → module set → cache；顺序不能随意调整。
 */
var createDriveMainFetchChain = function (logger, coldstartConfig, moduleConfig) {
  return new OrderedFetchServiceChain(logger, [
    new NavigationPreloadFetchService(logger),
    new NetworkFetchService(),
    new ModuleSetFetchService(logger, moduleConfig),
    new CacheFetchService(coldstartConfig),
  ]);
};
(function (a) {
  var b = a.JSON.parse;
  a.JSON.parse = function (c, d) {
    try {
      return b.call(this, c, d);
    } catch (e) {
      throw (
        (c = String(c)),
        Error(
          "va`" +
            (c.length > 100
              ? '"' + c.substring(0, 100) + '"\u2026 (' + c.length + " chars)"
              : '"' + c + '"'),
          { cause: e },
        )
      );
    }
  };
})(globalThis);
