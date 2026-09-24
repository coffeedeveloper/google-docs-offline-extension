/**
 * 阅读切片：执行资格、单任务生命周期、iframe 与 Worker 运行器。
 * 不可单独运行：依赖完整 bundle 的共享符号和初始化顺序。
 * 完整文件：../../912208950-frame_bin.js，原位置 L90421。
 * TaskExecutorBase（I$）：检查资格、创建运行器并跟踪进行中的任务；析构时停止任务。
 * getTaskIneligibilityReason（Z$a）：网络、认证或额外资格不足返回原因码；null 才可执行。
 * TaskRunner（J$）：单任务生命周期：超时、取消、消息、成功/失败收口；o.promise 是完成结果。
 * getTaskCompletionCode（t$）：从运行器结果中读取状态码，不代表服务端已确认全部修改。
 * sendTaskRunnerRequest（$$a）：每次请求使用 MessageChannel；运行器完成时关闭回复端口。
 * IframeTaskExecutor（N$）：创建 iframe 任务运行器。
 * IframeTaskRunner（O$）：等待子 iframe 握手，完成或取消后释放子页面。
 * WorkerTaskExecutor（P$）：创建专用 Worker 任务运行器。
 * WorkerTaskRunner（Q$）：创建 Worker，传递请求并在结束时 terminate。
 */
function TaskExecutorBase(a, c, e, f, g, h, k, l, p) {
  uE.call(this);
  this.D = a;
  this.P = c;
  this.Ba = 0;
  this.j = {};
  this.B = e;
  this.A = f;
  this.F = g;
  this.G = p || null;
  this.va = h;
  this.I = k;
  this.V = l;
}
w(TaskExecutorBase, uE);
TaskExecutorBase.prototype.execute = function (a, c) {
  var e = this.M(a);
  a = getTaskIneligibilityReason(this, a);
  if (a != null) return (e.stop("The task cannot be executed: " + a, a), e);
  var f = ++this.Ba;
  this.j[f] = e;
  e.start(this.V, Q(c, 5));
  tI(
    e.o.promise,
    function () {
      delete this.j[f];
    },
    this,
  );
  return e;
};
TaskExecutorBase.prototype.o = function (a) {
  return getTaskIneligibilityReason(this, a) == null;
};
/** getTaskIneligibilityReason（原 Z$a）。
 * 网络、认证或额外资格不足返回原因码；null 才可执行。
 */
function getTaskIneligibilityReason(executor, executionSpec) {
  var e = executionSpec.J || !O$a(executor.F),
    f = executionSpec.F || !O$a(executor.F);
  return e && !executor.A.j()
    ? 5
    : f && !executor.B.Pq()
      ? 4
      : executionSpec.G && !executor.va
        ? 6
        : null;
}
TaskExecutorBase.prototype.ha = function () {
  var a = z(Object.values(this.j)),
    c = a.next(),
    e;
  try {
    for (; !c.done; c = a.next()) {
      var f = c.value;
      f.stop("The task executor was disposed.", 7);
    }
  } finally {
    c && !c.done && (e = a.return) && e.call(a);
  }
  this.j = {};
  uE.prototype.ha.call(this);
};
/** TaskRunner（原 J$）。
 * 单任务生命周期：超时、取消、消息、成功/失败收口；o.promise 是完成结果。
 */
function TaskRunner(a, c, e, f, g, h, k, l) {
  var p = this;
  this.J = a;
  this.o = rI();
  this.j = c;
  this.Fa = e;
  this.P = f;
  this.I = l || null;
  this.va = k;
  this.B = null;
  this.za = h;
  this.V = new vM();
  this.D = new mG(this);
  a = this.j.D;
  this.R = xI(this.Au, Math.max(0, a - 3e4), this);
  this.M = xI(this.Ss, a, this);
  tI(this.o.promise, function () {
    yI(p.R);
    yI(p.M);
  });
  this.ja = false;
  this.G = null;
  c.J &&
    wM(this.V, g.B, function () {
      return p.stop("Network connection lost.", 5);
    });
  c.F &&
    this.D.ia(this.P, "R", function () {
      return p.stop("Authentication lost.", 4);
    });
}
q = TaskRunner.prototype;
q.stop = function (a, c) {
  K$(this, c != null ? c : 3, a);
};
/** getTaskCompletionCode（原 t$）。
 * 从运行器结果中读取状态码，不代表服务端已确认全部修改。
 */
function getTaskCompletionCode(taskRunner) {
  return taskRunner.o.promise.then(function (c) {
    return lI(Ti(c, 1));
  });
}
q.start = function (a, c) {
  var e = this,
    f = new E$();
  U(f, 1, 0);
  X$a(f, C$a(this.j, a, c));
  sendTaskRunnerRequest(this, f).then(function (g) {
    g = I(g, D$, 2);
    Ti(g, 1) == 1 &&
      aab(e, Error(vi(g, 3) || "Unknown failure message."), { isExplicitError: "true" });
    e.resolve(g);
  });
};
/** sendTaskRunnerRequest（原 $$a）。
 * 每次请求使用 MessageChannel；运行器完成时关闭回复端口。
 */
function sendTaskRunnerRequest(taskRunner, taskRequest) {
  return new iI(function (e) {
    var f = new MessageChannel();
    f.port1.onmessage = function (g) {
      g = new H$(g.data);
      e(g);
    };
    tI(taskRunner.o.promise, function () {
      f.port1.close();
    });
    taskRunner.postMessage(Lg(taskRequest), [f.port2]);
  });
}
q.zq = function (a) {
  var c = a.Kc;
  if (!(c && c.data && c.ports && c.ports.length))
    throw Error("Dropped invalid message from the task.");
  a = c.ports[0];
  var e = c.ports.slice(1);
  c = new y$(c.data);
  this.tl(c, a, e);
};
q.tl = function (a, c) {
  switch (Ti(a, 1)) {
    case 1:
      a = C9a(this.Fa);
      var e = new C$();
      c.postMessage(Lg(e), [a]);
      break;
    case 2:
      bab(this, c);
      break;
    case 4:
      a = new C$();
      c.postMessage(Lg(a));
      c = this.P;
      if (!c.B) throw Error("Cannot notifyPossibleAuthChange before initialization");
      I9(c, true);
      break;
    case 5:
      cab(this, c);
      break;
    case 6:
      c = I(a, T$a, 3);
      L$(this, Error(vi(c, 1) || "Unknown error from task"));
      break;
    case 7:
      dab(this, a, c);
      break;
    case 8:
      eab(this, a, c);
      break;
    case 9:
      fab(this, c);
      break;
    default:
      throw Error("Dropped unknown message " + a);
  }
};
function bab(a, c) {
  var e = new C$();
  kP(a.va).then(
    function (f) {
      var g = new A$();
      K(e, A$, 3, g);
      Xi(g, 1, f.j);
      Xi(g, 2, f.o);
      c.postMessage(Lg(e));
    },
    function (f) {
      f = gF(f);
      T(e, 1, f.message);
      c.postMessage(Lg(e));
    },
  );
}
function cab(a, c) {
  a.I
    ? Z8a(M$(a)).then(function (e) {
        var f = new B$();
        ii(f, sR, 1, e);
        e = new C$();
        K(e, B$, 4, f);
        c.postMessage(Lg(e));
      })
    : ((a = new C$()),
      T(a, 1, "No dataservice available to handle the relevant docs request."),
      c.postMessage(Lg(a)));
}
function dab(a, c, e) {
  if (a.I) {
    var f = I(c, x$, 4).Ca(de),
      g = S$a(I(c, x$, 4));
    c = R$a(I(c, x$, 4)) || false;
    M$(a)
      .Fm(f, g, c)
      .then(function (h) {
        var k = new z$();
        ii(k, sR, 1, h.j);
        bj(k, 2, h.o);
        h = new C$();
        K(h, z$, 5, k);
        e.postMessage(Lg(h));
      });
  } else {
    a = new C$();
    T(a, 1, "No dataservice available to handle the find by ids request.");
    e.postMessage(Lg(a));
  }
}
function eab(a, c, e) {
  c = Q$a(I(c, P$a, 5));
  gab(a.za, c).then(function (f) {
    var g = new w$();
    U(g, 1, f);
    f = new C$();
    K(f, w$, 6, g);
    e.postMessage(Lg(f));
  });
}
function fab(a, c) {
  M$(a)
    .getState()
    .then(function (e) {
      var f = new v$();
      T(f, 1, e);
      a: {
        try {
          var g = s9a();
          if (g) {
            var h = YB(ni(g, 2));
            break a;
          }
        } catch (k) {}
        h = null;
      }
      e = h;
      e != null ? Xi(f, 2, Za() - e) : S(f, 3, true);
      e = new C$();
      K(e, v$, 7, f);
      c.postMessage(Lg(e));
    });
}
function M$(a) {
  a.B || (a.B = a.I.get());
  return a.B;
}
q.handleError = function (a) {
  a = a.Kc;
  L$(
    this,
    Error(
      a instanceof ErrorEvent
        ? a.message
        : "event of type " + a.type + (a.message ? " with message " + a.message : ""),
    ),
  );
};
function L$(a, c, e) {
  e = e === void 0 ? {} : e;
  e.isUnexpectedTaskFailure = true;
  aab(a, c, e);
  K$(a, 1, c.message);
}
function aab(a, c, e) {
  e = e === void 0 ? {} : e;
  e.taskType = a.j.o;
  a.J.ua(Error("Detected error from task (" + q$(a.j) + "). errorMessage:" + c.message), e);
}
q.Au = function () {
  var a = this;
  this.ja = true;
  var c = new E$();
  U(c, 1, 1);
  sendTaskRunnerRequest(this, c).then(function (e) {
    e = I(e, G$, 3);
    a.G = e.cd();
  });
};
q.Ss = function () {
  var a = { taskType: this.j.o };
  this.G &&
    fi(this.G, F$, 1, G()).forEach(function (c) {
      a["taskTimeoutDebug_" + Q(c, 1)] = Q(c, 2);
    });
  this.J.ua(
    Error("Detected timeout from task (" + q$(this.j) + "). timeout: " + this.j.D + " ms)"),
    a,
  );
  K$(this, 2);
};
function K$(a, c, e) {
  var f = new D$();
  U(f, 1, c);
  e && T(f, 3, e);
  a.resolve(f);
}
q.resolve = function (a) {
  function c() {
    e.close();
    e.o.resolve(a);
  }
  var e = this;
  this.D.dispose();
  this.V.dispose();
  yI(this.R);
  this.R = 0;
  yI(this.M);
  this.M = 0;
  this.B ? tI(this.B.Rb(1e4), c) : c();
};
q.close = function () {
  sE(this.B);
};
/** IframeTaskExecutor（原 N$）。
 * 创建 iframe 任务运行器。
 */
function IframeTaskExecutor(a, c, e, f, g, h, k, l, p, r, u) {
  TaskExecutorBase.call(this, a, c, e, f, g, h, k, l, r);
  this.aa = u || db || (db = new yO());
  this.ja = p;
}
w(IframeTaskExecutor, TaskExecutorBase);
IframeTaskExecutor.prototype.M = function (a) {
  return new IframeTaskRunner(this.D, a, this.P, this.aa, this.B, this.A, this.I, this.ja, this.G);
};
/** IframeTaskRunner（原 O$）。
 * 等待子 iframe 握手，完成或取消后释放子页面。
 */
function IframeTaskRunner(a, c, e, f, g, h, k, l, p) {
  TaskRunner.call(this, a, c, e, g, h, k, l, p);
  var r = this;
  this.aa = f;
  this.Oa = hab(c);
  this.A = this.aa.A("IFRAME", { style: "display:none" });
  c = bQ(c.j);
  this.A.src = uF(c).toString();
  this.aa.j.body.appendChild(this.A);
  this.F = rI();
  this.D.ia(C, "message", jP(a, this.fw, this));
  this.Ba = 1e3 * (yK(l, "docs-offline-iteits") || 15);
  this.Va = xI(this.Fu, this.Ba, this);
  tI(oI([getTaskCompletionCode(this), this.F.promise]), function () {
    yI(r.Va);
  });
}
w(IframeTaskRunner, TaskRunner);
q = IframeTaskRunner.prototype;
q.Fu = function () {
  var a = {};
  try {
    a.iframeHref = this.A.contentWindow.location.href;
    var c = this.A.contentDocument.body;
    if (c) {
      for (var e = false, f = c.getElementsByTagName("script"), g = 0; g < f.length; g++)
        if (f[g].src.indexOf("offline_task_iframe_bin") >= 0) {
          e = true;
          break;
        }
      a.hasExpectedContent = e.toString();
      if (e) a.iframeInitProgress = this.A.contentWindow._iframeTaskInitProgress || "null";
      else {
        var h = c.getElementsByTagName("h2"),
          k = h.length == 1 ? h[0].textContent : null;
        k != null && k.indexOf("Error") == 0 && (a.iframeErrorMessage = k);
      }
    }
  } catch (l) {
    a.iframeHref = "N/A";
  }
  this.J.ua(
    Error(
      "Detected timeout during initialization of task (" +
        q$(this.j) +
        "). timeout: " +
        this.Ba +
        " ms)",
    ),
    a,
  );
  K$(this, 2);
};
function hab(a) {
  a = new YF(a.j);
  var c = new YF();
  ZF(c, a.B || C.location.protocol);
  $F(c, a.j || C.location.hostname);
  a.o != null
    ? aG(c, a.o)
    : C.location.port != null && C.location.port != "" && aG(c, C.location.port);
  return c.toString();
}
q.fw = function (a) {
  var c = a.Kc;
  c && c.origin == this.Oa && c.source == this.A.contentWindow && this.zq(a);
};
q.tl = function (a, c, e) {
  var f = new C$();
  switch (Ti(a, 1)) {
    case 3:
      this.F.resolve(e[0]);
      c.postMessage(Lg(f));
      break;
    default:
      TaskRunner.prototype.tl.call(this, a, c, e);
  }
};
q.postMessage = function (a, c) {
  this.F.promise.then(function (e) {
    e.postMessage(a, c);
  });
};
q.close = function () {
  TaskRunner.prototype.close.call(this);
  Mwa(this.A);
  this.F.promise.then(function (a) {
    a.close();
  });
};
/** WorkerTaskExecutor（原 P$）。
 * 创建专用 Worker 任务运行器。
 */
function WorkerTaskExecutor(a, c, e, f, g, h, k, l, p, r) {
  TaskExecutorBase.call(this, a, c, e, f, g, h, k, l, r);
  this.aa = p;
}
w(WorkerTaskExecutor, TaskExecutorBase);
WorkerTaskExecutor.prototype.M = function (a) {
  return new WorkerTaskRunner(this.D, a, this.P, this.B, this.A, this.I, this.aa, this.G);
};
/** WorkerTaskRunner（原 Q$）。
 * 创建 Worker，传递请求并在结束时 terminate。
 */
function WorkerTaskRunner(a, c, e, f, g, h, k, l) {
  TaskRunner.call(this, a, c, e, f, g, h, k, l);
  this.F = c.j;
  this.A = xF(bQ(this.F));
  this.D.ia(this.A, "message", jP(a, this.zq, this)).ia(
    this.A,
    "error",
    jP(a, this.handleError, this),
  );
}
w(WorkerTaskRunner, TaskRunner);
WorkerTaskRunner.prototype.handleError = function (a) {
  var c = this,
    e = a.Kc;
  e instanceof ErrorEvent && ub(e.message, "Unexpected token <")
    ? iab(this)
        .then(function (f) {
          return f.text().then(function (g) {
            var h = { workerUrlStatus: f.status };
            g && (h.workerContentIsHtml = rb(g, "<"));
            L$(c, Error("Worker init error: " + e.message), h);
          });
        })
        .Lc(function (f) {
          L$(c, gF(f));
        })
    : e instanceof Event && e.type == "error" && !e.message
      ? iab(this)
          .then(function (f) {
            return f.text().then(function (g) {
              var h = { workerUrlStatus: f.status };
              g &&
                ((h.isSyncTaskWorkerJs = ub(g, "_docs_worker_handler_resolve")),
                (h.workerContentIsHtml = rb(g, "<")),
                (h.workerRedirected = f.redirected),
                (h.isClientRedirect = ub(g, "Redirecting...")),
                (g = g.match(/var url = '([^\?]+)/)) && (h.clientRedirectUrl = g[1]));
              L$(c, Error("Worker create error"), h);
            });
          })
          .Lc(function (f) {
            L$(c, gF(f));
          })
      : TaskRunner.prototype.handleError.call(this, a);
};
function iab(a) {
  return oI([
    C.fetch(a.F, { credentials: "same-origin" }),
    zI(5e3).then(function () {
      throw Error("Timed out trying to fetch worker URL");
    }),
  ]);
}
WorkerTaskRunner.prototype.postMessage = function (a, c) {
  this.A.postMessage(a, c);
};
WorkerTaskRunner.prototype.close = function () {
  TaskRunner.prototype.close.call(this);
  this.A.terminate();
};
