/**
 * 阅读切片：嵌入页握手与 SharedWorker/Worker 选择；不声称还原全部数据层。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../drive-cache-proxy.js，原位置 L65366。
 * startEmbeddedCacheProxy（hNa）：仅在嵌入页中启动；握手后优先 SharedWorker，否则 Worker，并连接消息桥。具体数据事务仍待研究。
 */
var fNa = function (a) {
    W8(a.h, "1.1", function () {
      var b = new sj(),
        c = {},
        d = b.get("SAPISID") || b.get("__Secure-3PAPISID");
      d && (c.__SAPISID = d);
      (b = b.get("APISID")) && (c.__APISID = b);
      return { ac: c, bl: p._DRIVE_buildLabel };
    });
    bNa(a.h, a.j);
    a.h.start();
  },
  gNa = function (a) {
    var b = S(a, 2);
    if ((a = Q(a, TK, 4))) {
      let c = oba() || "",
        d = jb(c, true);
      if (
        !ri(b, d) &&
        (a = Ia(wz(a, 1, B()), function (e) {
          return ri(e, d);
        }))
      )
        return a;
    }
    return b;
  },
  startEmbeddedCacheProxy = function () {
    if (window != window.top) {
      if (!("SharedWorker" in p || "Worker" in p)) throw Error("Ad");
      if (!p._DRIVE_cswic) throw Error("Bd");
      var a = uja(p._DRIVE_cswic),
        b = gNa(a),
        c = new X8(ZMa(b), true);
      c.send("2.0", {}, function (d) {
        var e = d.fds.sort(),
          f = ky(Q(a, CK, 5)) || jy(eNa),
          g = d.uid;
        d = C(a, 3);
        g = "#" + g + "_";
        var h = new By();
        h.update(e.join(","));
        g += ka(h.digest());
        d && (g += "&jobset=" + d);
        e = ji(f + "?" + g);
        "SharedWorker" in p
          ? ((f = new SharedWorker(ki(e), void 0)),
            (e = new RA(f.port)),
            UD(f.port, VD),
            f.port.start())
          : ((f = new Worker(ki(e), void 0)), (e = new RA(f)), Msa(f));
        e = new X8(e, true);
        new $8(c, e);
      });
    }
  };
