/**
 * 阅读切片：CacheFetchService 的资源准备与读取接口。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../drive-main.js，原位置 L10951。
 * CacheFetchService（Oo）：浏览器缓存策略适配器：安装准备、读取和清理委托给配置服务。
 * DriveCacheConfig（Wo）：版本缓存名、预缓存组和资源匹配配置。
 */
var CacheFetchService = function (cacheConfig) {
  this.j = cacheConfig;
};
p = CacheFetchService.prototype;
p.ja = function () {
  return "CacheFetchService";
};
p.install = function (a) {
  a = Z(a, 91077, 500);
  var b = this.j;
  var c = b.eb();
  b = precacheResourceGroup(b, c, b.cacheName);
  Qo(a, b);
  return b;
};
p.ha = function (a) {
  return this.Xa(a);
};
p.da = function (a) {
  var b = this,
    c = Z(a, 91078, 0),
    d = this.j.da();
  Qo(c, d);
  return d.then(function () {
    return b.Xa(a);
  });
};
p.W = function () {
  return this.j.W();
};
p.ia = function (a) {
  return this.j.Db(a);
};
p.fetch = function (a, b, c) {
  b = Z(c, 91081, 2e4);
  c = Ro(this.j, a.clone()).catch(function (d) {
    throw new Ef(d, "CacheFetchService", a);
  });
  Qo(b, c);
  return c;
};
p.Xa = function (a) {
  a = Z(a, 91079, 500);
  var b = this.j.Xa();
  Qo(a, b);
  return b;
};
var So = function (a, b) {
  Y.call(this, 291, "Unable to cache asset", { ca: a });
  V(this, {
    "cacheSpec.request": No(b.request),
    "cacheSpec.failFast": String(b.failFast),
    "cacheSpec.alwaysFetch": String(b.Ia),
    "cacheSpec.resolveImmediately": String(b.Da),
  });
  !b.failFast || b.Da
    ? ((a = {}), V(this, ((a.severity = "info"), a)))
    : ((a = {}), V(this, ((a.severity = "severe"), a)));
};
M(So, Y);
var To = function () {
    this.j = [];
    this.l = 0;
  },
  Vo = function (a, b) {
    return new Promise(function (c, d) {
      a.j.push(function () {
        return Promise.resolve().then(b).then(c, d);
      });
      Uo(a);
    });
  },
  Uo = function (a) {
    if (a.l < 50 && a.j.length > 0) {
      let b = a.j.shift();
      a.l++;
      b().finally(function () {
        a.l--;
        Uo(a);
      });
      Uo(a);
    }
  };
var Af = self;
/** DriveCacheConfig（原 Wo）。
 * 版本缓存名、预缓存组和资源匹配配置。
 */
var DriveCacheConfig = function (a) {
  var b = this;
  this.j = Af.caches;
  var c = Wg(a, 4);
  this.o = new Jo(this.j, c);
  this.C = Rd(a, 3);
  this.cacheName = c + Wg(a, 1);
  this.O = Rd(a, 2);
  this.G = new To();
  this.H = Ej(function () {
    var d = new Set(),
      e = x(b.C.concat(b.O)),
      f = e.next(),
      g;
    try {
      for (; !f.done; f = e.next()) d.add(new Request(f.value).url);
    } finally {
      f && !f.done && (g = e.return) && g.call(e);
    }
    return d;
  });
};
p = DriveCacheConfig.prototype;
p.da = function () {
  var a = this,
    b = this.eb(),
    c = this.cacheName;
  return this.j
    .open(c)
    .then(function (d) {
      return Promise.all(
        b.map(function (e) {
          return d.match(e.request).then(
            function (f) {
              if (!f) return Xo(a, e, d, c);
            },
            function () {
              return Xo(a, e, d, c);
            },
          );
        }),
      );
    })
    .then(function () {});
};
p.eb = function () {
  return []
    .concat(
      this.C.map(function (a) {
        return { request: Yo(a), failFast: false, Ia: false, Da: true };
      }),
    )
    .concat(
      this.O.map(function (a) {
        return { request: Yo(a), failFast: true, Ia: true, Da: false };
      }),
    );
};
p.Xa = function () {
  return this.o.W([this.cacheName]);
};
p.W = function () {
  return this.o.W();
};
p.Db = function (a) {
  return a.method === "GET" && this.H().has(a.url);
};
