/**
 * 阅读切片：扩展握手、heartbeat 与即时多文档同步。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../912208950-frame_bin.js，原位置 L91640。
 * SchedulerFrameController（Z$）：与扩展握手并处理 FrameRequest；D=周期调度器,M=即时任务分派器,F=认证追踪器,B=用户状态。
 * installPeriodicTaskCatalog（Wab）：把启用的任务加入周期调度目录。
 * connectForLocalOfflineUser（Xab）：根据本地离线状态决定发送连接或未启用通知。
 * connectEnabledOfflineUser（Yab）：先启动认证追踪，再发送 WebsiteRequest type 1 和业务端口；不是启动周期调度。
 * notifyOfflineUserUnavailable（Zab）：发送 WebsiteRequest type 3，可携带其他本地账号。
 * sendExtensionRequest（$ab）：回复端口与业务端口用途不同；目标 origin 和协议数组保持不变。
 * dispatchFrameRequest（abb）：type 0 命名事件，type 2 多文档同步，type 3 条件触发周期批次。
 * handleNamedFrameEvent（cbb）：heartbeat 先处理宽限等待并核实启用状态，再启动批次。
 * getRemainingOptInDelay（ebb）：根据本地 opt-in 时间与条件计算尚需等待的毫秒数。
 * startPeriodicBatchIfIdle（fbb）：批次已运行就返回；新批次完成后调用策略检查。
 * runImmediateMultiDocumentSync（dbb）：独立即时任务；超时 min(文档数×120秒,600秒)，不是周期目录中的一项。
 * holdExtensionConnectionDuring（$$）：任务 Promise 生命周期内连接扩展，完成后断开；另有最长连接计时。
 */
function SchedulerFrameController(a, c, e, f, g, h, k, l, p, r, u) {
  uE.call(this);
  this.I = zK(r, "docs-extension-id");
  this.za = u || C.parent.parent;
  this.j = a;
  this.va = u ? u.location.origin : "chrome-extension://" + this.I;
  this.G = new mG(this);
  this.qa(this.G);
  this.B = new LocalOfflineUserState(e, a, r);
  c = new MessageChannel();
  this.V = c.port1;
  this.V.onmessage = jP(a, this.Ba, this);
  this.Fa = c.port2;
  this.F = f;
  this.G.ia(
    this.F,
    "S",
    function (x) {
      holdExtensionConnectionDuring(this, x.Zw);
    }.bind(this),
  );
  this.M = g;
  this.o = r;
  this.D = h;
  installPeriodicTaskCatalog(this);
  this.ja = k;
  this.P = l;
  this.A = new rP();
  this.qa(this.A);
  H9a(G9a(p));
  holdExtensionConnectionDuring(this, connectForLocalOfflineUser(this));
}
w(SchedulerFrameController, uE);
/** installPeriodicTaskCatalog（原 Wab）。
 * 把启用的任务加入周期调度目录。
 */
function installPeriodicTaskCatalog(frameController) {
  for (var c = buildPeriodicTaskCatalog(frameController.o), e = 0; e < c.length; e++)
    frameController.D.D.push(c[e]);
}
/** connectForLocalOfflineUser（原 Xab）。
 * 根据本地离线状态决定发送连接或未启用通知。
 */
function connectForLocalOfflineUser(frameController) {
  return frameController.B.get().then(function (c) {
    switch (c.xm) {
      case 1:
        return connectEnabledOfflineUser(frameController);
      case 4:
        return notifyOfflineUserUnavailable(frameController, c.o);
      default:
        return notifyOfflineUserUnavailable(frameController, null);
    }
  });
}
/** connectEnabledOfflineUser（原 Yab）。
 * 先启动认证追踪，再发送 WebsiteRequest type 1 和业务端口；不是启动周期调度。
 */
function connectEnabledOfflineUser(frameController) {
  e9a(frameController.o);
  Yva(frameController.j, frameController.o);
  var c = zK(frameController.o, "docs-offline-lsuid");
  return frameController.F.start()
    .then(
      function () {
        var e = ZP(1);
        var f = new QP();
        f = T(f, 1, c);
        K(e, QP, 7, f);
        return sendExtensionRequest(this, e, this.Fa).then();
      }.bind(frameController),
    )
    .Lc(function (e) {
      e = e instanceof Error ? e : Error(e);
      frameController.j.ua(Error("Failed to send FrameConnectRequest"), { reason: e.message });
      throw e;
    });
}
/** notifyOfflineUserUnavailable（原 Zab）。
 * 发送 WebsiteRequest type 3，可携带其他本地账号。
 */
function notifyOfflineUserUnavailable(frameController, otherAccount) {
  frameController.j.info(Error("SchedulerFrame: Current user is not opted in"), {
    localStorageOuidExists: !!bO(),
  });
  var e = new WP();
  otherAccount && T(e, 1, otherAccount);
  otherAccount = ZP(3);
  e = K(otherAccount, WP, 3, e);
  return sendExtensionRequest(frameController, e).then();
}
/** sendExtensionRequest（原 $ab）。
 * 回复端口与业务端口用途不同；目标 origin 和协议数组保持不变。
 */
function sendExtensionRequest(frameController, extensionRequest, businessPort) {
  var f = new MessageChannel();
  return tI(
    new iI(function (g) {
      var h = [f.port2];
      businessPort && h.push(businessPort);
      frameController.za.postMessage(Lg(extensionRequest), frameController.va, h);
      f.port1.onmessage = g;
    }).then(function (g) {
      g = new PP(g.data);
      var h = qi(extensionRequest, 1);
      g = U(g, 1, h);
      if (kh(g, LP, 5)) {
        h = frameController.j;
        var k = h.ua,
          l = Error("Error data from extension response.");
        var p = g.ri();
        p = vi(p, 1);
        k.call(h, l, { reason: p, requestType: g.getType() });
      }
      return g;
    }),
    Wa(f.port1.close, f.port1),
  );
}
SchedulerFrameController.prototype.Ba = function (messageEvent) {
  var frameController = this,
    frameRequest = new SP(messageEvent.data);
  holdExtensionConnectionDuring(
    this,
    dispatchFrameRequest(this, frameRequest).then(function (f) {
      return qI([kwa(frameController.j.F), frameController.P.Hm()]).then(function () {
        messageEvent.ports.length && messageEvent.ports[0].postMessage(Lg(f));
      });
    }),
  );
};
/** dispatchFrameRequest（原 abb）。
 * type 0 命名事件，type 2 多文档同步，type 3 条件触发周期批次。
 */
function dispatchFrameRequest(frameController, frameRequest) {
  var e = cza(new OP(), qi(frameRequest, 1));
  switch (Ti(frameRequest, 1)) {
    case 0:
      var f = bbb(frameController);
      return handleNamedFrameEvent(frameController, I(frameRequest, RP, 2).getName())
        .then(function () {
          return f;
        })
        .then(function () {
          return e;
        });
    case 2:
      return (
        (frameRequest = hza(I(frameRequest, gza, 3))),
        runImmediateMultiDocumentSync(frameController, frameRequest).then(function (g) {
          var h = new NP();
          g = K(h, MP, 1, g);
          K(e, NP, 2, g);
          return e;
        })
      );
    case 3:
      return getRemainingOptInDelay(frameController).then(function (g) {
        return g > 0
          ? e
          : startPeriodicBatchIfIdle(frameController).then(function () {
              return e;
            });
      });
    default:
      throw Error("Dropped unknown message " + frameRequest);
  }
}
function bbb(a) {
  return xK(a.o, "docs-iirhmt") && !L9() ? uab(a.j) : Promise.resolve();
}
/** handleNamedFrameEvent（原 cbb）。
 * heartbeat 先处理宽限等待并核实启用状态，再启动批次。
 */
function handleNamedFrameEvent(frameController, eventName) {
  switch (eventName) {
    case "heartbeat":
      return gbb(frameController)
        .then(function () {
          return frameController.B.get();
        })
        .then(function (e) {
          if (e.xm == 1) return startPeriodicBatchIfIdle(frameController);
          frameController.j.ua(
            Error("Attempted to start task scheduler when user is not offline enabled."),
          );
        });
    default:
      return lI();
  }
}
function gbb(a) {
  return getRemainingOptInDelay(a).then(function (c) {
    return zI(c);
  });
}
/** getRemainingOptInDelay（原 ebb）。
 * 根据本地 opt-in 时间与条件计算尚需等待的毫秒数。
 */
function getRemainingOptInDelay(frameController) {
  return frameController.B.get().then(function (c) {
    var e = c.j && c.j[0] ? c.j[0] : null;
    return c.xm == 1 && e && RJ(bva, e) >= 0 && (c = c.A) && ((c = 3e5 - (Date.now() - c)), c > 0)
      ? c
      : 0;
  });
}
/** startPeriodicBatchIfIdle（原 fbb）。
 * 批次已运行就返回；新批次完成后调用策略检查。
 */
function startPeriodicBatchIfIdle(frameController) {
  return frameController.D.j
    ? lI()
    : frameController.D.start().then(frameController.aa.bind(frameController));
}
SchedulerFrameController.prototype.aa = function () {
  return enforceOfflinePolicyAfterBatch(this.ja);
};
/** runImmediateMultiDocumentSync（原 dbb）。
 * 独立即时任务；超时 min(文档数×120秒,600秒)，不是周期目录中的一项。
 */
function runImmediateMultiDocumentSync(frameController, documentIds_2) {
  var e = "multi_doc_sync_" + DF(),
    f = dO(qK());
  e = B$a(new m$().Yb(e), documentIds_2);
  documentIds_2 = new TaskExecutionSpec(
    1,
    f,
    "multi_doc_sync",
    Math.min(documentIds_2.length * 12e4, 6e5),
    true,
    true,
    true,
    e,
  );
  if (!frameController.M.o(documentIds_2)) return lI();
  f = Zta(CL(BL(new AL(), 18), false));
  return frameController.M.execute(documentIds_2, f).o.promise.then(function (g) {
    return ((g = (g = I(g, V$a, 5)) && Ii(g, U$a, 1, W$a)) && I(g, MP, 1)) || null;
  });
}
/** holdExtensionConnectionDuring（原 $$）。
 * 任务 Promise 生命周期内连接扩展，完成后断开；另有最长连接计时。
 */
function holdExtensionConnectionDuring(frameController, operation) {
  var e = chrome.runtime.connect(frameController.I),
    f = frameController.A.Jf(function () {
      e.disconnect();
    }, 18e5);
  tI(
    operation,
    function () {
      e.disconnect();
      this.A.clear(f);
    }.bind(frameController),
  );
}
$a("_loadSchedulerFrame", function (a) {
  var c = qK(),
    e = y9a(),
    f = new KL(),
    g = $9a(e, c),
    h = new xab(g, e);
  g = zK(c, "docs-obsImUrl");
  var k = new aZ(g, 9e5, false);
  g = xK(c, "docs-eilttw");
  var l;
  xK(c, "docs-eiltdw") ? (l = new PL()) : (l = mua(g, new QK(e)));
  var p = new qR(e, null, c, f, l),
    r = new H9(k, e, c),
    u = new lza(e),
    x = new z$a(u, c);
  return pya(
    e,
    zJ(k.A)
      .then(function () {
        return new iI(function (y, B) {
          A$a(x, y, B);
        });
      })
      .then(function (y) {
        var B = new Q9(c),
          E = new TaskStatsStore(e),
          J = new N$a(E, c),
          R = JK(),
          V = new D9a(),
          Y = k$a(j$a(i$a(h$a(new g$a(e), p), V), R), c).build();
        Y.ul();
        e.j.sid = R;
        var ca = new TaskExecutorDispatcher(e, B, r, k, J, y, h, c, R, Y, new d9a(c)),
          na = new PeriodicTaskScheduler(E, ca, e, c);
        return rR(p).then(function (la) {
          var Ga = new m$a(c);
          la = new SchedulerFrameController(
            e,
            k,
            p,
            r,
            ca,
            na,
            new OfflinePolicyCoordinator(
              x,
              ca,
              new l$(la, e, u, Ga, Y, new Lab(e, la, Y, c)),
              c,
              e,
            ),
            Y,
            V,
            c,
            a,
          );
          la.qa(e);
          la.qa(k);
          la.qa(p);
          la.qa(r);
          la.qa(na);
          la.qa(B);
          return la;
        });
      }),
  );
});
