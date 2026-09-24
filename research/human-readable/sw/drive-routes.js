/** 来源 Drive main 的 Lr / Nr / Or / Pr / Mr.F，保留原路径接受范围。 */
export function matchesDriveListRoute(url, allowedRoutes) {
  const pathParts = new URL(url).pathname.split("/");
  const driveIndex = pathParts.indexOf("drive");
  if (driveIndex === -1) return false;
  if (pathParts.at(-1) === "") pathParts.pop();
  let routeParts = pathParts.slice(driveIndex + 1);

  // 保留原 /[^0-9]/ 规则（包括空索引的原有行为），不顺手收紧 URL 策略。
  const hasAccountPrefix =
    routeParts.length >= 2 &&
    routeParts[0] === "u" &&
    !/[^0-9]/.test(routeParts[1]);
  if (hasAccountPrefix) routeParts = routeParts.slice(2);
  if (routeParts[0] === "mobile") routeParts = routeParts.slice(1);
  const routeName = routeParts[0] || "";
  return !routeName || allowedRoutes.indexOf(routeName) !== -1;
}

export class DriveBootRequests {
  constructor({ allowedRoutes, accountId, cacheProxyEnabled, createRequest }) {
    Object.assign(this, {
      allowedRoutes,
      accountId,
      cacheProxyEnabled,
      createRequest,
    });
  }

  coldstart() {
    return this.createRequest("offline/coldstart?ouid=" + this.accountId);
  }

  cacheProxy() {
    return this.createRequest(
      "_/dataservice/cacheproxy?ouid=" + this.accountId,
    );
  }

  matchesCacheProxy(request) {
    if (!this.cacheProxyEnabled) return false;
    return new URL(request.url).pathname.endsWith("_/dataservice/cacheproxy");
  }

  cacheKeyFor(request) {
    if (matchesDriveListRoute(request.url, this.allowedRoutes))
      return this.coldstart();
    if (this.matchesCacheProxy(request)) return this.cacheProxy();
    return request; // 保留对象身份；不 clone 所有请求。
  }

  criticalPrecacheRequests() {
    const requests = [this.coldstart()];
    if (this.cacheProxyEnabled) requests.push(this.cacheProxy());
    // alwaysFetch / resolveImmediately 是 Ia / Da 的阅读层名称。
    return requests.map((request) => ({
      request,
      failFast: true,
      alwaysFetch: true,
      resolveImmediately: false,
    }));
  }
}
