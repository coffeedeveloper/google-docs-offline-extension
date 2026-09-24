/**
 * 固定 Google 样本的语义阅读副本，不是 Google 原始源码。
 * 只重命名已确认的词法绑定并添加职责说明；保留属性 ABI、协议值和执行顺序。
 * 生成：pnpm research:generate；校验：pnpm research:check。
 * 未确认的运行库符号仍保留短名。不得作为自研实现或真实账号启动响应直接部署。
 */
function _F_toggles_initialize(a) {
  (typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
      ? self
      : this
  )._F_toggles = a || [];
}
_F_toggles_initialize([]);
function ba() {
  return function (a) {
    return a;
  };
}
function u() {
  return function () {};
}
function w(a) {
  return function () {
    return this[a];
  };
}
function A(a) {
  return function () {
    return a;
  };
}
var D,
  ca =
    typeof Object.create == "function"
      ? Object.create
      : function (a) {
          function c() {}
          c.prototype = a;
          return new c();
        },
  da =
    typeof Object.defineProperties == "function"
      ? Object.defineProperty
      : function (a, c, e) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[c] = e.value;
          return a;
        };
function ea(a) {
  a = [
    "object" == typeof globalThis && globalThis,
    a,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var c = 0; c < a.length; ++c) {
    var e = a[c];
    if (e && e.Math == Math) return e;
  }
  throw Error("a");
}
var fa = ea(this);
function E(a, c) {
  if (c)
    a: {
      var e = fa;
      a = a.split(".");
      for (var f = 0; f < a.length - 1; f++) {
        var g = a[f];
        if (!(g in e)) break a;
        e = e[g];
      }
      a = a[a.length - 1];
      f = e[a];
      c = c(f);
      c != f && c != null && da(e, a, { configurable: true, writable: true, value: c });
    }
}
var ha;
if (typeof Object.setPrototypeOf == "function") ha = Object.setPrototypeOf;
else {
  var ia;
  a: {
    var ja = { a: true },
      ka = {};
    try {
      ka.__proto__ = ja;
      ia = ka.a;
      break a;
    } catch (a) {}
    ia = false;
  }
  ha = ia
    ? function (a, c) {
        a.__proto__ = c;
        if (a.__proto__ !== c) throw new TypeError("b`" + a);
        return a;
      }
    : null;
}
var la = ha;
function F(a, c) {
  a.prototype = ca(c.prototype);
  a.prototype.constructor = a;
  if (la) la(a, c);
  else
    for (var e in c)
      if (e != "prototype")
        if (Object.defineProperties) {
          var f = Object.getOwnPropertyDescriptor(c, e);
          f && Object.defineProperty(a, e, f);
        } else a[e] = c[e];
  a.qa = c.prototype;
}
function ma(a) {
  var c = 0;
  return function () {
    return c < a.length ? { done: false, value: a[c++] } : { done: true };
  };
}
function I(a) {
  var c = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
  if (c) return c.call(a);
  if (typeof a.length == "number") return { next: ma(a) };
  throw Error("c`" + String(a));
}
function na(a) {
  for (var c, e = []; !(c = a.next()).done; ) e.push(c.value);
  return e;
}
function oa(a) {
  return a instanceof Array ? a : na(I(a));
}
function pa(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
}
var qa =
  typeof Object.assign == "function"
    ? Object.assign
    : function (a, c) {
        if (a == null) throw new TypeError("d");
        a = Object(a);
        for (var e = 1; e < arguments.length; e++) {
          var f = arguments[e];
          if (f) for (var g in f) pa(f, g) && (a[g] = f[g]);
        }
        return a;
      };
E("Object.assign", function (a) {
  return a || qa;
});
function ra(a) {
  if (!(a instanceof Object)) throw new TypeError("e`" + a);
}
function J() {
  this.D = false;
  this.v = null;
  this.C = void 0;
  this.j = 1;
  this.A = this.F = 0;
  this.J = this.o = null;
}
function sa(a) {
  if (a.D) throw new TypeError("f");
  a.D = true;
}
J.prototype.K = function (a) {
  this.C = a;
};
function ta(a, c) {
  a.o = { Dd: c, Ld: true };
  a.j = a.F || a.A;
}
J.prototype.getNextAddressJsc = w("j");
J.prototype.getYieldResultJsc = w("C");
J.prototype.return = function (a) {
  this.o = { return: a };
  this.j = this.A;
};
J.prototype["return"] = J.prototype.return;
J.prototype.R = function (a) {
  this.o = { Ba: a };
  this.A < a ? ((this.j = a), (this.o = null)) : (this.j = this.A);
};
J.prototype.jumpThroughFinallyBlocks = J.prototype.R;
J.prototype.B = function (a, c) {
  this.j = c;
  return { value: a };
};
J.prototype.yield = J.prototype.B;
J.prototype.W = function (a, c) {
  a = I(a);
  var e = a.next();
  ra(e);
  if (e.done) {
    this.C = e.value;
    this.j = c;
  } else return ((this.v = a), this.B(e.value, c));
};
J.prototype.yieldAll = J.prototype.W;
J.prototype.Ba = function (a) {
  this.j = a;
};
J.prototype.jumpTo = J.prototype.Ba;
J.prototype.S = function () {
  this.j = 0;
};
J.prototype.jumpToEnd = J.prototype.S;
J.prototype.N = function (a, c) {
  this.F = a;
  c != void 0 && (this.A = c);
};
J.prototype.setCatchFinallyBlocks = J.prototype.N;
J.prototype.T = function (a) {
  this.F = 0;
  this.A = a || 0;
};
J.prototype.setFinallyBlock = J.prototype.T;
J.prototype.U = function (a, c) {
  this.j = a;
  this.F = c || 0;
};
J.prototype.leaveTryBlock = J.prototype.U;
J.prototype.H = function (a) {
  this.F = a || 0;
  a = this.o.Dd;
  this.o = null;
  return a;
};
J.prototype.enterCatchBlock = J.prototype.H;
J.prototype.I = function (a, c, e) {
  e ? (this.J[e] = this.o) : (this.J = [this.o]);
  this.F = a || 0;
  this.A = c || 0;
  this.o = null;
};
J.prototype.enterFinallyBlock = J.prototype.I;
J.prototype.M = function (a, c) {
  c = this.J.splice(c || 0)[0];
  (c = this.o = this.o || c)
    ? c.Ld
      ? (this.j = this.F || this.A)
      : c.Ba != void 0 && this.A < c.Ba
        ? ((this.j = c.Ba), (this.o = null))
        : (this.j = this.A)
    : (this.j = a);
};
J.prototype.leaveFinallyBlock = J.prototype.M;
J.prototype.P = function (a) {
  return new ua(a);
};
J.prototype.forIn = J.prototype.P;
function ua(a) {
  this.v = a;
  this.j = [];
  for (var c in a) this.j.push(c);
  this.j.reverse();
}
ua.prototype.o = function () {
  for (; this.j.length > 0; ) {
    var a = this.j.pop();
    if (a in this.v) return a;
  }
  return null;
};
ua.prototype.getNext = ua.prototype.o;
function va(a) {
  this.j = new J();
  this.o = a;
}
function wa(a, c) {
  sa(a.j);
  var e = a.j.v;
  if (e)
    return xa(
      a,
      "return" in e
        ? e["return"]
        : function (f) {
            return { value: f, done: true };
          },
      c,
      a.j.return,
    );
  a.j.return(c);
  return ya(a);
}
function xa(a, c, e, f) {
  try {
    var g = c.call(a.j.v, e);
    ra(g);
    if (!g.done) return ((a.j.D = false), g);
    var h = g.value;
  } catch (k) {
    return ((a.j.v = null), ta(a.j, k), ya(a));
  }
  a.j.v = null;
  f.call(a.j, h);
  return ya(a);
}
function ya(a) {
  for (; a.j.j; )
    try {
      var c = a.o(a.j);
      if (c) return ((a.j.D = false), { value: c.value, done: false });
    } catch (e) {
      {
        a.j.C = void 0;
        ta(a.j, e);
      }
    }
  a.j.D = false;
  if (a.j.o) {
    c = a.j.o;
    a.j.o = null;
    if (c.Ld) throw c.Dd;
    return { value: c.return, done: true };
  }
  return { value: void 0, done: true };
}
function za(a) {
  this.next = function (c) {
    sa(a.j);
    a.j.v ? (c = xa(a, a.j.v.next, c, a.j.K)) : (a.j.K(c), (c = ya(a)));
    return c;
  };
  this.throw = function (c) {
    sa(a.j);
    if (a.j.v) {
      var e = a.j.v["throw"];
      if (e) var f = xa(a, e, c, a.j.K);
      else {
        c = a.j.v;
        a.j.v = null;
        try {
          {
            c["return"] && ((f = c["return"]()), ra(f));
            ta(a.j, new TypeError("g"));
          }
        } catch (g) {
          ta(a.j, g);
        }
        f = ya(a);
      }
    } else {
      ta(a.j, c);
      f = ya(a);
    }
    return f;
  };
  this.return = function (c) {
    return wa(a, c);
  };
  this[Symbol.iterator] = function () {
    return this;
  };
}
function Aa(a) {
  function c(f) {
    return a.next(f);
  }
  function e(f) {
    return a.throw(f);
  }
  return new Promise(function (f, g) {
    function h(k) {
      k.done ? f(k.value) : Promise.resolve(k.value).then(c, e).then(h, g);
    }
    h(a.next());
  });
}
function Ba(a) {
  return Aa(new za(new va(a)));
}
function Ca() {
  for (var a = Number(this), c = [], e = a; e < arguments.length; e++) c[e - a] = arguments[e];
  return c;
}
E("globalThis", function (a) {
  return a || fa;
});
E("Reflect.setPrototypeOf", function (a) {
  return a
    ? a
    : la
      ? function (c, e) {
          try {
            return (la(c, e), true);
          } catch (f) {
            return false;
          }
        }
      : null;
});
E("Symbol", function (a) {
  function c(h) {
    if (this instanceof c) throw new TypeError("h");
    return new e(f + (h || "") + "_" + g++, h);
  }
  function e(h, k) {
    this.j = h;
    da(this, "description", { configurable: true, writable: true, value: k });
  }
  if (a) return a;
  e.prototype.toString = w("j");
  var f = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
    g = 0;
  return c;
});
E("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("i");
  da(Array.prototype, a, {
    configurable: true,
    writable: true,
    value: function () {
      return Da(ma(this));
    },
  });
  return a;
});
function Da(a) {
  a = { next: a };
  a[Symbol.iterator] = function () {
    return this;
  };
  return a;
}
E("Promise", function (a) {
  function c(k) {
    this.j = 0;
    this.v = void 0;
    this.o = [];
    this.C = false;
    var l = this.A();
    try {
      k(l.resolve, l.reject);
    } catch (p) {
      l.reject(p);
    }
  }
  function e() {
    this.j = null;
  }
  function f(k) {
    return k instanceof c
      ? k
      : new c(function (l) {
          l(k);
        });
  }
  if (a) return a;
  e.prototype.o = function (k) {
    if (this.j == null) {
      this.j = [];
      var l = this;
      this.v(function () {
        l.B();
      });
    }
    this.j.push(k);
  };
  var g = fa.setTimeout;
  e.prototype.v = function (k) {
    g(k, 0);
  };
  e.prototype.B = function () {
    for (; this.j && this.j.length; ) {
      var k = this.j;
      this.j = [];
      for (var l = 0; l < k.length; ++l) {
        var p = k[l];
        k[l] = null;
        try {
          p();
        } catch (q) {
          this.A(q);
        }
      }
    }
    this.j = null;
  };
  e.prototype.A = function (k) {
    this.v(function () {
      throw k;
    });
  };
  c.prototype.A = function () {
    function k(q) {
      return function (r) {
        p || ((p = true), q.call(l, r));
      };
    }
    var l = this,
      p = false;
    return { resolve: k(this.J), reject: k(this.B) };
  };
  c.prototype.J = function (k) {
    if (k === this) this.B(new TypeError("j"));
    else if (k instanceof c) this.N(k);
    else {
      a: switch (typeof k) {
        case "object":
          var l = k != null;
          break a;
        case "function":
          l = true;
          break a;
        default:
          l = false;
      }
      l ? this.I(k) : this.F(k);
    }
  };
  c.prototype.I = function (k) {
    var l = void 0;
    try {
      l = k.then;
    } catch (p) {
      this.B(p);
      return;
    }
    typeof l == "function" ? this.P(l, k) : this.F(k);
  };
  c.prototype.B = function (k) {
    this.D(2, k);
  };
  c.prototype.F = function (k) {
    this.D(1, k);
  };
  c.prototype.D = function (k, l) {
    if (this.j != 0) throw Error("k`" + k + "`" + l + "`" + this.j);
    this.j = k;
    this.v = l;
    this.j === 2 && this.M();
    this.K();
  };
  c.prototype.M = function () {
    var k = this;
    g(function () {
      if (k.H()) {
        var l = fa.console;
        typeof l !== "undefined" && l.error(k.v);
      }
    }, 1);
  };
  c.prototype.H = function () {
    if (this.C) return false;
    var k = fa.CustomEvent,
      l = fa.Event,
      p = fa.dispatchEvent;
    if (typeof p === "undefined") return true;
    typeof k === "function"
      ? (k = new k("unhandledrejection", { cancelable: true }))
      : typeof l === "function"
        ? (k = new l("unhandledrejection", { cancelable: true }))
        : ((k = fa.document.createEvent("CustomEvent")),
          k.initCustomEvent("unhandledrejection", false, true, k));
    k.promise = this;
    k.reason = this.v;
    return p(k);
  };
  c.prototype.K = function () {
    if (this.o != null) {
      for (var k = 0; k < this.o.length; ++k) h.o(this.o[k]);
      this.o = null;
    }
  };
  var h = new e();
  c.prototype.N = function (k) {
    var l = this.A();
    k.wb(l.resolve, l.reject);
  };
  c.prototype.P = function (k, l) {
    var p = this.A();
    try {
      k.call(l, p.resolve, p.reject);
    } catch (q) {
      p.reject(q);
    }
  };
  c.prototype.then = function (k, l) {
    function p(y, z) {
      return typeof y == "function"
        ? function (B) {
            try {
              q(y(B));
            } catch (G) {
              r(G);
            }
          }
        : z;
    }
    var q,
      r,
      x = new c(function (y, z) {
        q = y;
        r = z;
      });
    this.wb(p(k, q), p(l, r));
    return x;
  };
  c.prototype.catch = function (k) {
    return this.then(void 0, k);
  };
  c.prototype.wb = function (k, l) {
    function p() {
      switch (q.j) {
        case 1:
          k(q.v);
          break;
        case 2:
          l(q.v);
          break;
        default:
          throw Error("l`" + q.j);
      }
    }
    var q = this;
    this.o == null ? h.o(p) : this.o.push(p);
    this.C = true;
  };
  c.resolve = f;
  c.reject = function (k) {
    return new c(function (l, p) {
      p(k);
    });
  };
  c.race = function (k) {
    return new c(function (l, p) {
      for (var q = I(k), r = q.next(); !r.done; r = q.next()) f(r.value).wb(l, p);
    });
  };
  c.all = function (k) {
    var l = I(k),
      p = l.next();
    return p.done
      ? f([])
      : new c(function (q, r) {
          function x(B) {
            return function (G) {
              y[B] = G;
              z--;
              z == 0 && q(y);
            };
          }
          var y = [],
            z = 0;
          do {
            y.push(void 0);
            z++;
            f(p.value).wb(x(y.length - 1), r);
            p = l.next();
          } while (!p.done);
        });
  };
  return c;
});
function Ea(a, c, e) {
  if (a == null) throw new TypeError("m`" + e);
  if (c instanceof RegExp) throw new TypeError("n`" + e);
  return a + "";
}
E("String.prototype.startsWith", function (a) {
  return a
    ? a
    : function (c, e) {
        var f = Ea(this, c, "startsWith"),
          g = f.length,
          h = c.length;
        e = Math.max(0, Math.min(e | 0, f.length));
        for (var k = 0; k < h && e < g; ) if (f[e++] != c[k++]) return false;
        return k >= h;
      };
});
E("Object.setPrototypeOf", function (a) {
  return a || la;
});
E("Symbol.dispose", function (a) {
  return a ? a : Symbol("o");
});
E("Array.prototype.find", function (a) {
  return a
    ? a
    : function (c, e) {
        a: {
          var f = this;
          f instanceof String && (f = String(f));
          for (var g = f.length, h = 0; h < g; h++) {
            var k = f[h];
            if (c.call(e, k, h, f)) {
              c = k;
              break a;
            }
          }
          c = void 0;
        }
        return c;
      };
});
E("WeakMap", function (a) {
  function c(p) {
    this.j = (l += Math.random() + 1).toString();
    if (p) {
      p = I(p);
      for (var q; !(q = p.next()).done; ) {
        q = q.value;
        this.set(q[0], q[1]);
      }
    }
  }
  function e() {}
  function f(p) {
    var q = typeof p;
    return (q === "object" && p !== null) || q === "function";
  }
  function g(p) {
    if (!pa(p, k)) {
      var q = new e();
      da(p, k, { value: q });
    }
  }
  function h(p) {
    var q = Object[p];
    q &&
      (Object[p] = function (r) {
        if (r instanceof e) return r;
        Object.isExtensible(r) && g(r);
        return q(r);
      });
  }
  if (
    (function () {
      if (!a || !Object.seal) return false;
      try {
        var p = Object.seal({}),
          q = Object.seal({}),
          r = new a([
            [p, 2],
            [q, 3],
          ]);
        if (r.get(p) != 2 || r.get(q) != 3) return false;
        r.delete(p);
        r.set(q, 4);
        return !r.has(p) && r.get(q) == 4;
      } catch (x) {
        return false;
      }
    })()
  )
    return a;
  var k = "$jscomp_hidden_" + Math.random();
  h("freeze");
  h("preventExtensions");
  h("seal");
  var l = 0;
  c.prototype.set = function (p, q) {
    if (!f(p)) throw Error("p");
    g(p);
    if (!pa(p, k)) throw Error("q`" + p);
    p[k][this.j] = q;
    return this;
  };
  c.prototype.get = function (p) {
    return f(p) && pa(p, k) ? p[k][this.j] : void 0;
  };
  c.prototype.has = function (p) {
    return f(p) && pa(p, k) && pa(p[k], this.j);
  };
  c.prototype.delete = function (p) {
    return f(p) && pa(p, k) && pa(p[k], this.j) ? delete p[k][this.j] : false;
  };
  return c;
});
E("Map", function (a) {
  function c() {
    var l = {};
    return (l.Ca = l.next = l.head = l);
  }
  function e(l, p) {
    var q = l[1];
    return Da(function () {
      if (q) {
        for (; q.head != l[1]; ) q = q.Ca;
        for (; q.next != q.head; ) return ((q = q.next), { done: false, value: p(q) });
        q = null;
      }
      return { done: true, value: void 0 };
    });
  }
  function f(l, p) {
    var q = p && typeof p;
    q == "object" || q == "function"
      ? h.has(p)
        ? (q = h.get(p))
        : ((q = "" + ++k), h.set(p, q))
      : (q = "p_" + p);
    var r = l[0][q];
    if (r && pa(l[0], q))
      for (l = 0; l < r.length; l++) {
        var x = r[l];
        if ((p !== p && x.key !== x.key) || p === x.key)
          return { id: q, list: r, index: l, entry: x };
      }
    return { id: q, list: r, index: -1, entry: void 0 };
  }
  function g(l) {
    this[0] = {};
    this[1] = c();
    this.size = 0;
    if (l) {
      l = I(l);
      for (var p; !(p = l.next()).done; ) {
        p = p.value;
        this.set(p[0], p[1]);
      }
    }
  }
  if (
    (function () {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
        return false;
      try {
        var l = Object.seal({ x: 4 }),
          p = new a(I([[l, "s"]]));
        if (
          p.get(l) != "s" ||
          p.size != 1 ||
          p.get({ x: 4 }) ||
          p.set({ x: 4 }, "t") != p ||
          p.size != 2
        )
          return false;
        var q = p.entries(),
          r = q.next();
        if (r.done || r.value[0] != l || r.value[1] != "s") return false;
        r = q.next();
        return r.done || r.value[0].x != 4 || r.value[1] != "t" || !q.next().done ? false : true;
      } catch (x) {
        return false;
      }
    })()
  )
    return a;
  var h = new WeakMap();
  g.prototype.set = function (l, p) {
    l = l === 0 ? 0 : l;
    var q = f(this, l);
    q.list || (q.list = this[0][q.id] = []);
    q.entry
      ? (q.entry.value = p)
      : ((q.entry = { next: this[1], Ca: this[1].Ca, head: this[1], key: l, value: p }),
        q.list.push(q.entry),
        (this[1].Ca.next = q.entry),
        (this[1].Ca = q.entry),
        this.size++);
    return this;
  };
  g.prototype.delete = function (l) {
    l = f(this, l);
    return l.entry && l.list
      ? (l.list.splice(l.index, 1),
        l.list.length || delete this[0][l.id],
        (l.entry.Ca.next = l.entry.next),
        (l.entry.next.Ca = l.entry.Ca),
        (l.entry.head = null),
        this.size--,
        true)
      : false;
  };
  g.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].Ca = c();
    this.size = 0;
  };
  g.prototype.has = function (l) {
    return !!f(this, l).entry;
  };
  g.prototype.get = function (l) {
    return (l = f(this, l).entry) && l.value;
  };
  g.prototype.entries = function () {
    return e(this, function (l) {
      return [l.key, l.value];
    });
  };
  g.prototype.keys = function () {
    return e(this, function (l) {
      return l.key;
    });
  };
  g.prototype.values = function () {
    return e(this, function (l) {
      return l.value;
    });
  };
  g.prototype.forEach = function (l, p) {
    for (var q = this.entries(), r; !(r = q.next()).done; ) {
      r = r.value;
      l.call(p, r[1], r[0], this);
    }
  };
  g.prototype[Symbol.iterator] = g.prototype.entries;
  var k = 0;
  return g;
});
E("Set", function (a) {
  function c(e) {
    this.j = new Map();
    if (e) {
      e = I(e);
      for (var f; !(f = e.next()).done; ) this.add(f.value);
    }
    this.size = this.j.size;
  }
  if (
    (function () {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
        return false;
      try {
        var e = Object.seal({ x: 4 }),
          f = new a(I([e]));
        if (
          !f.has(e) ||
          f.size != 1 ||
          f.add(e) != f ||
          f.size != 1 ||
          f.add({ x: 4 }) != f ||
          f.size != 2
        )
          return false;
        var g = f.entries(),
          h = g.next();
        if (h.done || h.value[0] != e || h.value[1] != e) return false;
        h = g.next();
        return h.done || h.value[0] == e || h.value[0].x != 4 || h.value[1] != h.value[0]
          ? false
          : g.next().done;
      } catch (k) {
        return false;
      }
    })()
  )
    return a;
  c.prototype.add = function (e) {
    e = e === 0 ? 0 : e;
    this.j.set(e, e);
    this.size = this.j.size;
    return this;
  };
  c.prototype.delete = function (e) {
    e = this.j.delete(e);
    this.size = this.j.size;
    return e;
  };
  c.prototype.clear = function () {
    this.j.clear();
    this.size = 0;
  };
  c.prototype.has = function (e) {
    return this.j.has(e);
  };
  c.prototype.entries = function () {
    return this.j.entries();
  };
  c.prototype.values = function () {
    return this.j.values();
  };
  c.prototype.keys = c.prototype.values;
  c.prototype[Symbol.iterator] = c.prototype.values;
  c.prototype.forEach = function (e, f) {
    var g = this;
    this.j.forEach(function (h) {
      return e.call(f, h, h, g);
    });
  };
  return c;
});
E("Object.values", function (a) {
  return a
    ? a
    : function (c) {
        var e = [],
          f;
        for (f in c) pa(c, f) && e.push(c[f]);
        return e;
      };
});
E("Object.is", function (a) {
  return a
    ? a
    : function (c, e) {
        return c === e ? c !== 0 || 1 / c === 1 / e : c !== c && e !== e;
      };
});
E("Array.prototype.includes", function (a) {
  return a
    ? a
    : function (c, e) {
        var f = this;
        f instanceof String && (f = String(f));
        var g = f.length;
        e = e || 0;
        for (e < 0 && (e = Math.max(e + g, 0)); e < g; e++) {
          var h = f[e];
          if (h === c || Object.is(h, c)) return true;
        }
        return false;
      };
});
E("String.prototype.includes", function (a) {
  return a
    ? a
    : function (c, e) {
        return Ea(this, c, "includes").indexOf(c, e || 0) !== -1;
      };
});
E("Array.from", function (a) {
  return a
    ? a
    : function (c, e, f) {
        e = e != null ? e : ba();
        var g = [],
          h = typeof Symbol != "undefined" && Symbol.iterator && c[Symbol.iterator];
        if (typeof h == "function") {
          c = h.call(c);
          for (var k = 0; !(h = c.next()).done; ) g.push(e.call(f, h.value, k++));
        } else for (h = c.length, k = 0; k < h; k++) g.push(e.call(f, c[k], k));
        return g;
      };
});
E("Object.entries", function (a) {
  return a
    ? a
    : function (c) {
        var e = [],
          f;
        for (f in c) pa(c, f) && e.push([f, c[f]]);
        return e;
      };
});
E("Number.isFinite", function (a) {
  return a
    ? a
    : function (c) {
        return typeof c !== "number" ? false : !isNaN(c) && c !== Infinity && c !== -Infinity;
      };
});
E("Number.MAX_SAFE_INTEGER", A(9007199254740991));
E("Number.MIN_SAFE_INTEGER", A(-9007199254740991));
E("Number.isInteger", function (a) {
  return a
    ? a
    : function (c) {
        return Number.isFinite(c) ? c === Math.floor(c) : false;
      };
});
E("Number.isSafeInteger", function (a) {
  return a
    ? a
    : function (c) {
        return Number.isInteger(c) && Math.abs(c) <= Number.MAX_SAFE_INTEGER;
      };
});
E("String.prototype.endsWith", function (a) {
  return a
    ? a
    : function (c, e) {
        var f = Ea(this, c, "endsWith");
        e === void 0 && (e = f.length);
        e = Math.max(0, Math.min(e | 0, f.length));
        for (var g = c.length; g > 0 && e > 0; ) if (f[--e] != c[--g]) return false;
        return g <= 0;
      };
});
function Fa(a, c) {
  a instanceof String && (a += "");
  var e = 0,
    f = false,
    g = {
      next: function () {
        if (!f && e < a.length) {
          var h = e++;
          return { value: c(h, a[h]), done: false };
        }
        f = true;
        return { done: true, value: void 0 };
      },
    };
  g[Symbol.iterator] = function () {
    return g;
  };
  return g;
}
E("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return Fa(this, function (c, e) {
          return [c, e];
        });
      };
});
E("Math.trunc", function (a) {
  return a
    ? a
    : function (c) {
        c = Number(c);
        if (isNaN(c) || c === Infinity || c === -Infinity || c === 0) return c;
        var e = Math.floor(Math.abs(c));
        return c < 0 ? -e : e;
      };
});
E("Number.isNaN", function (a) {
  return a
    ? a
    : function (c) {
        return typeof c === "number" && isNaN(c);
      };
});
E("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return Fa(this, ba());
      };
});
E("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return Fa(this, function (c, e) {
          return e;
        });
      };
});
E("Math.imul", function (a) {
  return a
    ? a
    : function (c, e) {
        c = Number(c);
        e = Number(e);
        var f = c & 65535,
          g = e & 65535;
        return (f * g + (((((c >>> 16) & 65535) * g + f * ((e >>> 16) & 65535)) << 16) >>> 0)) | 0;
      };
});
E("String.fromCodePoint", function (a) {
  return a
    ? a
    : function (c) {
        for (var e = "", f = 0; f < arguments.length; f++) {
          var g = Number(arguments[f]);
          if (g < 0 || g > 1114111 || g !== Math.floor(g)) throw new RangeError("r`" + g);
          g <= 65535
            ? (e += String.fromCharCode(g))
            : ((g -= 65536),
              (e += String.fromCharCode(((g >>> 10) & 1023) | 55296)),
              (e += String.fromCharCode((g & 1023) | 56320)));
        }
        return e;
      };
});
E("String.prototype.repeat", function (a) {
  return a
    ? a
    : function (c) {
        var e = Ea(this, null, "repeat");
        if (c < 0 || c > 1342177279) throw new RangeError("s");
        c |= 0;
        for (var f = ""; c; ) if ((c & 1 && (f += e), (c >>>= 1))) e += e;
        return f;
      };
});
E("Object.hasOwn", function (a) {
  return a
    ? a
    : function (c, e) {
        return Object.prototype.hasOwnProperty.call(c, e);
      };
});
E("Promise.allSettled", function (a) {
  function c(f) {
    return { status: "fulfilled", value: f };
  }
  function e(f) {
    return { status: "rejected", reason: f };
  }
  return a
    ? a
    : function (f) {
        var g = this;
        f = Array.from(f, function (h) {
          return g.resolve(h).then(c, e);
        });
        return g.all(f);
      };
});
E("String.prototype.matchAll", function (a) {
  return a
    ? a
    : function (c) {
        if (c instanceof RegExp && !c.global) throw new TypeError("t");
        var e = new RegExp(c, c instanceof RegExp ? void 0 : "g");
        c instanceof RegExp && (e.lastIndex = c.lastIndex);
        var f = this,
          g = false,
          h = {
            next: function () {
              if (g) return { value: void 0, done: true };
              var k = e.exec(f);
              if (!k) return ((g = true), { value: void 0, done: true });
              k[0] === "" && (e.lastIndex += 1);
              return { value: k, done: false };
            },
          };
        h[Symbol.iterator] = function () {
          return h;
        };
        return h;
      };
});
E("Array.prototype.flatMap", function (a) {
  return a
    ? a
    : function (c, e) {
        var f = [];
        Array.prototype.forEach.call(this, function (g, h, k) {
          g = c.call(e, g, h, k);
          Array.isArray(g) ? f.push.apply(f, g) : f.push(g);
        });
        return f;
      };
});
E("Promise.prototype.finally", function (a) {
  return a
    ? a
    : function (c) {
        return this.then(
          function (e) {
            return Promise.resolve(c()).then(function () {
              return e;
            });
          },
          function (e) {
            return Promise.resolve(c()).then(function () {
              throw e;
            });
          },
        );
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ga = Ga || {},
  K = this || self;
function Ha(a, c) {
  var e = Ia("WIZ_global_data.oxN3nb");
  a = e && e[a];
  return a != null ? a : c;
}
var Ja = K._F_toggles || [];
function Ia(a) {
  a = a.split(".");
  for (var c = K, e = 0; e < a.length; e++) if (((c = c[a[e]]), c == null)) return null;
  return c;
}
function Ka(a) {
  var c = typeof a;
  return c != "object" ? c : a ? (Array.isArray(a) ? "array" : c) : "null";
}
function La(a) {
  var c = Ka(a);
  return c == "array" || (c == "object" && typeof a.length == "number");
}
function Ma(a) {
  var c = typeof a;
  return (c == "object" && a != null) || c == "function";
}
function Na(a) {
  return (Object.prototype.hasOwnProperty.call(a, Oa) && a[Oa]) || (a[Oa] = ++Pa);
}
var Oa = "closure_uid_" + ((Math.random() * 1e9) >>> 0),
  Pa = 0;
function Qa(a, c, e) {
  return a.call.apply(a.bind, arguments);
}
function Ra(a, c, e) {
  if (!a) throw Error();
  if (arguments.length > 2) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function () {
      var g = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(g, f);
      return a.apply(c, g);
    };
  }
  return function () {
    return a.apply(c, arguments);
  };
}
function Sa(a, c, e) {
  Sa =
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1
      ? Qa
      : Ra;
  return Sa.apply(null, arguments);
}
function Ta(a, c) {
  var e = Array.prototype.slice.call(arguments, 1);
  return function () {
    var f = e.slice();
    f.push.apply(f, arguments);
    return a.apply(this, f);
  };
}
function Ua(a) {
  (0, eval)(a);
}
function Wa(a) {
  return a;
}
function Xa(a, c) {
  function e() {}
  e.prototype = c.prototype;
  a.qa = c.prototype;
  a.prototype = new e();
  a.prototype.constructor = a;
  a.Pf = function (f, g, h) {
    for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++)
      k[l - 2] = arguments[l];
    return c.prototype[g].apply(f, k);
  };
}
function Ya(a, c) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Ya);
  else {
    var e = Error().stack;
    e && (this.stack = e);
  }
  a && (this.message = String(a));
  c !== void 0 && (this.cause = c);
  this.v = true;
}
Xa(Ya, Error);
Ya.prototype.name = "CustomError";
var Za;
function $a(a) {
  K.setTimeout(function () {
    throw a;
  }, 0);
}
var ab = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
function bb() {
  for (
    var a = 0,
      c = ab(String(cb)).split("."),
      e = ab("58.0.3029.52").split("."),
      f = Math.max(c.length, e.length),
      g = 0;
    a == 0 && g < f;
    g++
  ) {
    var h = c[g] || "",
      k = e[g] || "";
    do {
      h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
      k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
      if (h[0].length == 0 && k[0].length == 0) break;
      a =
        db(h[1].length == 0 ? 0 : parseInt(h[1], 10), k[1].length == 0 ? 0 : parseInt(k[1], 10)) ||
        db(h[2].length == 0, k[2].length == 0) ||
        db(h[2], k[2]);
      h = h[3];
      k = k[3];
    } while (a == 0);
  }
  return a;
}
function db(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
}
var eb = !!((Ja[0] >> 24) & 1),
  fb = !!((Ja[0] >> 19) & 1),
  gb = !!((Ja[0] >> 26) & 1),
  hb = !!(Ja[0] & 4096);
var ib = eb ? gb : Ha(610401301, false),
  jb = eb ? fb || !hb : Ha(748402147, true);
function kb() {
  var a = K.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var lb,
  mb = K.navigator;
lb = mb ? mb.userAgentData || null : null;
function nb(a) {
  if (!ib || !lb) return false;
  for (var c = 0; c < lb.brands.length; c++) {
    var e = lb.brands[c].brand;
    if (e && e.indexOf(a) != -1) return true;
  }
  return false;
}
function ob(a) {
  return kb().indexOf(a) != -1;
}
function pb() {
  return ib ? !!lb && lb.brands.length > 0 : false;
}
function qb() {
  return ob("Firefox") || ob("FxiOS");
}
function rb() {
  return pb()
    ? nb("Chromium")
    : ((ob("Chrome") || ob("CriOS")) && !(pb() ? 0 : ob("Edge"))) || ob("Silk");
}
function sb(a) {
  var c = {};
  a.forEach(function (e) {
    c[e[0]] = e[1];
  });
  return function (e) {
    return (
      c[
        e.find(function (f) {
          return f in c;
        })
      ] || ""
    );
  };
}
function tb() {
  for (
    var a = kb(), c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), e = [], f;
    (f = c.exec(a));

  )
    e.push([f[1], f[2], f[3] || void 0]);
  a = sb(e);
  return rb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : "";
}
function ub() {
  if (pb()) {
    var a = lb.brands.find(function (c) {
      return c.brand === "Chromium";
    });
    if (!a || !a.version) return NaN;
    a = a.version.split(".");
  } else {
    a = tb();
    if (a === "") return NaN;
    a = a.split(".");
  }
  return a.length === 0 ? NaN : Number(a[0]);
}
function vb() {
  return ob("iPhone") && !ob("iPod") && !ob("iPad");
}
function wb() {
  return vb() || ob("iPad") || ob("iPod");
}
function xb(a, c) {
  return Array.prototype.indexOf.call(a, c, void 0);
}
function yb(a, c) {
  Array.prototype.forEach.call(a, c, void 0);
}
function zb(a, c) {
  return Array.prototype.some.call(a, c, void 0);
}
function Ab(a, c) {
  c = xb(a, c);
  var e;
  (e = c >= 0) && Array.prototype.splice.call(a, c, 1);
  return e;
}
function Bb(a, c) {
  for (var e = 1; e < arguments.length; e++) {
    var f = arguments[e];
    if (La(f)) {
      var g = a.length || 0,
        h = f.length || 0;
      a.length = g + h;
      for (var k = 0; k < h; k++) a[g + k] = f[k];
    } else a.push(f);
  }
}
function Cb(a, c) {
  function e(p) {
    return Ma(p) ? "o" + Na(p) : (typeof p).charAt(0) + p;
  }
  c = c || e;
  for (var f = 0, g = 0, h = {}; g < a.length; ) {
    var k = a[g++],
      l = c(k);
    Object.prototype.hasOwnProperty.call(h, l) || ((h[l] = true), (a[f++] = k));
  }
  a.length = f;
}
function Db(a, c) {
  if (!La(a) || !La(c) || a.length != c.length) return false;
  for (var e = a.length, f = Eb, g = 0; g < e; g++) if (!f(a[g], c[g])) return false;
  return true;
}
function Eb(a, c) {
  return a === c;
}
function Fb(a) {
  Fb[" "](a);
  return a;
}
Fb[" "] = u();
var Gb = qb(),
  Hb = vb() || ob("iPod"),
  Ib = ob("iPad"),
  Jb = ob("Android") && !(rb() || qb() || (pb() ? 0 : ob("Opera")) || ob("Silk")),
  Kb = rb(),
  Lb =
    ob("Safari") &&
    !(
      rb() ||
      (pb() ? 0 : ob("Coast")) ||
      (pb() ? 0 : ob("Opera")) ||
      (pb() ? 0 : ob("Edge")) ||
      (pb() ? nb("Microsoft Edge") : ob("Edg/")) ||
      (pb() ? nb("Opera") : ob("OPR")) ||
      qb() ||
      ob("Silk") ||
      ob("Android")
    ) &&
    !wb();
var Mb = {},
  Nb = null;
function Ob(a) {
  var c = [];
  Pb(a, function (e) {
    c.push(e);
  });
  return c;
}
function Qb(a) {
  var c = a.length,
    e = (c * 3) / 4;
  e % 3
    ? (e = Math.floor(e))
    : "=.".indexOf(a[c - 1]) != -1 && (e = "=.".indexOf(a[c - 2]) != -1 ? e - 2 : e - 1);
  var f = new Uint8Array(e),
    g = 0;
  Pb(a, function (h) {
    f[g++] = h;
  });
  return g !== e ? f.subarray(0, g) : f;
}
function Pb(a, c) {
  function e(p) {
    for (; f < a.length; ) {
      var q = a.charAt(f++),
        r = Nb[q];
      if (r != null) return r;
      if (!/^[\s\xa0]*$/.test(q)) throw Error("w`" + q);
    }
    return p;
  }
  Rb();
  for (var f = 0; ; ) {
    var g = e(-1),
      h = e(0),
      k = e(64),
      l = e(64);
    if (l === 64 && g === -1) break;
    c((g << 2) | (h >> 4));
    k != 64 && (c(((h << 4) & 240) | (k >> 2)), l != 64 && c(((k << 6) & 192) | l));
  }
}
function Rb() {
  if (!Nb) {
    Nb = {};
    for (
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
        c = ["+/=", "+/", "-_=", "-_.", "-_"],
        e = 0;
      e < 5;
      e++
    ) {
      var f = a.concat(c[e].split(""));
      Mb[e] = f;
      for (var g = 0; g < f.length; g++) {
        var h = f[g];
        Nb[h] === void 0 && (Nb[h] = g);
      }
    }
  }
}
var Sb = typeof Uint8Array !== "undefined",
  Tb = typeof btoa === "function",
  Ub = /[-_.]/g,
  Vb = { "-": "+", _: "/", ".": "=" };
function Wb(a) {
  return Vb[a] || "";
}
function Xb(a) {
  if (!Tb) return Qb(a);
  a = Ub.test(a) ? a.replace(Ub, Wb) : a;
  a = atob(a);
  for (var c = new Uint8Array(a.length), e = 0; e < a.length; e++) c[e] = a.charCodeAt(e);
  return c;
}
function Yb(a) {
  return Sb && a != null && a instanceof Uint8Array;
}
function Zb(a, c) {
  var e = a.length;
  if (e !== c.length) return false;
  for (var f = 0; f < e; f++) if (a[f] !== c[f]) return false;
  return true;
}
var $b = {},
  ac = typeof structuredClone != "undefined";
function bc(a, c) {
  if (c !== $b) throw Error("y");
  this.j = a;
  if (a != null && a.length === 0) throw Error("x");
}
function cc() {
  return dc || (dc = new bc(null, $b));
}
function ec(a) {
  var c = a.j;
  if (c == null) a = "";
  else if (typeof c === "string") a = c;
  else {
    if (Tb) {
      for (var e = "", f = 0, g = c.length - 10240; f < g; )
        e += String.fromCharCode.apply(null, c.subarray(f, (f += 10240)));
      e += String.fromCharCode.apply(null, f ? c.subarray(f) : c);
      c = btoa(e);
    } else {
      e === void 0 && (e = 0);
      Rb();
      e = Mb[e];
      f = Array(Math.floor(c.length / 3));
      g = e[64] || "";
      for (var h = 0, k = 0; h < c.length - 2; h += 3) {
        var l = c[h],
          p = c[h + 1],
          q = c[h + 2],
          r = e[l >> 2];
        l = e[((l & 3) << 4) | (p >> 4)];
        p = e[((p & 15) << 2) | (q >> 6)];
        q = e[q & 63];
        f[k++] = r + l + p + q;
      }
      r = 0;
      q = g;
      switch (c.length - h) {
        case 2: {
          r = c[h + 1];
          q = e[(r & 15) << 2] || g;
        }
        case 1: {
          c = c[h];
          f[k] = e[c >> 2] + e[((c & 3) << 4) | (r >> 4)] + q + g;
        }
      }
      c = f.join("");
    }
    a = a.j = c;
  }
  return a;
}
function fc(a, c) {
  if (!a.j || !c.j || a.j === c.j) return a.j === c.j;
  if (typeof a.j === "string" && typeof c.j === "string") {
    var e = a.j,
      f = c.j;
    c.j.length > a.j.length && ((f = a.j), (e = c.j));
    if (e.lastIndexOf(f, 0) !== 0) return false;
    for (c = f.length; c < e.length; c++) if (e[c] !== "=") return false;
    return true;
  }
  e = hc(a);
  c = hc(c);
  return Zb(e, c);
}
function hc(a) {
  if ($b !== $b) throw Error("y");
  var c = a.j;
  c = c == null || Yb(c) ? c : typeof c === "string" ? Xb(c) : null;
  return c == null ? c : (a.j = c);
}
function ic(a, c) {
  if (typeof c === "string") c = c ? new bc(c, $b) : cc();
  else if (c instanceof Uint8Array) c = new bc(c, $b);
  else if (!(c instanceof bc)) return false;
  return fc(a, c);
}
var dc;
function kc(a, c, e) {
  a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
  a.__closure__error__context__984382[c] = e;
}
function lc(a) {
  return a.__closure__error__context__984382 || {};
}
var mc = void 0;
function nc(a) {
  a = Error(a);
  kc(a, "severity", "warning");
  return a;
}
function oc(a, c) {
  if (a != null) {
    var e;
    var f = (e = mc) != null ? e : (mc = {});
    e = f[a] || 0;
    e >= c || ((f[a] = e + 1), (a = Error()), kc(a, "severity", "incident"), $a(a));
  }
}
function pc() {
  return typeof BigInt === "function";
}
var qc = typeof Symbol === "function" && typeof Symbol() === "symbol";
function rc(a, c, e) {
  return typeof Symbol === "function" && typeof Symbol() === "symbol"
    ? (e === void 0 ? 0 : e) && Symbol.for && a
      ? Symbol.for(a)
      : a != null
        ? Symbol(a)
        : Symbol()
    : c;
}
var tc = rc("jas", void 0, true),
  vc = rc(void 0, "0di"),
  wc = rc(void 0, "1oa"),
  xc = rc(void 0, "ijhc"),
  yc = rc(void 0, Symbol()),
  zc = rc(void 0, "0ub"),
  Ac = rc(void 0, "0ubs"),
  Bc = rc(void 0, "0actk"),
  Cc = rc("m_m", "Uf", true),
  Dc = rc();
Math.max.apply(
  Math,
  oa(
    Object.values({
      sf: 1,
      pf: 2,
      lf: 4,
      Bf: 8,
      Lf: 16,
      xf: 32,
      Ve: 64,
      jf: 128,
      gf: 256,
      If: 512,
      hf: 1024,
      kf: 2048,
      yf: 4096,
      tf: 8192,
    }),
  ),
);
var Ec = { ue: { value: 0, configurable: true, writable: true, enumerable: false } },
  Fc = Object.defineProperties,
  L = qc ? tc : "ue",
  Gc,
  Hc = [];
Ic(Hc, 7);
Gc = Object.freeze(Hc);
function Jc(a, c) {
  qc || L in a || Fc(a, Ec);
  a[L] |= c;
}
function Ic(a, c) {
  qc || L in a || Fc(a, Ec);
  a[L] = c;
}
function Kc(a) {
  Jc(a, 34);
  return a;
}
var Lc = {};
function Mc(a) {
  return a[Cc] === Lc;
}
var Nc = {};
function Oc(a, c) {
  return c === void 0 ? a.j !== Pc && !!(2 & (a.G[L] | 0)) : !!(2 & c) && a.j !== Pc;
}
var Pc = {};
function Qc(a) {
  return !Array.isArray(a) || a.length ? false : (a[L] | 0) & 1 ? true : false;
}
var Rc = Object.freeze({}),
  Sc = Object.freeze({});
function Tc(a, c, e) {
  var f = c & 128 ? 0 : -1,
    g = a.length,
    h;
  if ((h = !!g)) {
    h = a[g - 1];
    h = h != null && typeof h === "object" && h.constructor === Object;
  }
  var k = g + (h ? -1 : 0);
  for (c = c & 128 ? 1 : 0; c < k; c++) e(c - f, a[c]);
  if (h) {
    a = a[g - 1];
    for (var l in a) !isNaN(l) && e(+l, a[l]);
  }
}
var Uc = {};
function Vc(a) {
  return a & 128 ? Uc : void 0;
}
function Wc(a) {
  a.Sf = true;
  return a;
}
var Xc = Wc(function (a) {
    return typeof a === "number";
  }),
  Yc = Wc(function (a) {
    return typeof a === "string";
  }),
  Zc = Wc(function (a) {
    return typeof a === "boolean";
  }),
  $c = Wc(function (a) {
    return typeof a === "bigint";
  });
var ad = typeof K.BigInt === "function" && typeof K.BigInt(0) === "bigint";
function bd(a) {
  var c = a;
  if (Yc(c)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(c)) throw Error(String(c));
  } else if (Xc(c) && !Number.isSafeInteger(c)) throw Error(String(c));
  return ad ? BigInt(a) : (a = Zc(a) ? (a ? "1" : "0") : Yc(a) ? a.trim() || "0" : String(a));
}
var cd = Wc(function (a) {
    return ad ? $c(a) : Yc(a) && /^(?:-?[1-9]\d*|0)$/.test(a);
  }),
  id = Wc(function (a) {
    return ad ? a >= dd && a <= ed : a[0] === "-" ? fd(a, gd) : fd(a, hd);
  }),
  gd = Number.MIN_SAFE_INTEGER.toString(),
  dd = ad ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
  hd = Number.MAX_SAFE_INTEGER.toString(),
  ed = ad ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function fd(a, c) {
  if (a.length > c.length) return false;
  if (a.length < c.length || a === c) return true;
  for (var e = 0; e < a.length; e++) {
    var f = a[e],
      g = c[e];
    if (f > g) return false;
    if (f < g) return true;
  }
}
var jd = typeof Uint8Array.prototype.slice === "function",
  kd = 0,
  ld = 0;
function md(a) {
  var c = a >>> 0;
  kd = c;
  ld = ((a - c) / 4294967296) >>> 0;
}
function nd(a) {
  if (a < 0) {
    md(-a);
    var c = I(od(kd, ld));
    a = c.next().value;
    c = c.next().value;
    kd = a >>> 0;
    ld = c >>> 0;
  } else md(a);
}
function pd(a, c) {
  c >>>= 0;
  a >>>= 0;
  if (c <= 2097151) var e = "" + (4294967296 * c + a);
  else
    pc()
      ? (e = "" + ((BigInt(c) << BigInt(32)) | BigInt(a)))
      : ((e = ((a >>> 24) | (c << 8)) & 16777215),
        (c = (c >> 16) & 65535),
        (a = (a & 16777215) + e * 6777216 + c * 6710656),
        (e += c * 8147497),
        (c *= 2),
        a >= 1e7 && ((e += (a / 1e7) >>> 0), (a %= 1e7)),
        e >= 1e7 && ((c += (e / 1e7) >>> 0), (e %= 1e7)),
        (e = c + qd(e) + qd(a)));
  return e;
}
function qd(a) {
  a = String(a);
  return "0000000".slice(a.length) + a;
}
function rd() {
  var a = kd,
    c = ld;
  c & 2147483648
    ? pc()
      ? (a = "" + ((BigInt(c | 0) << BigInt(32)) | BigInt(a >>> 0)))
      : ((c = I(od(a, c))), (a = c.next().value), (c = c.next().value), (a = "-" + pd(a, c)))
    : (a = pd(a, c));
  return a;
}
function od(a, c) {
  c = ~c;
  a ? (a = ~a + 1) : (c += 1);
  return [a, c];
}
function sd(a) {
  return Array.prototype.slice.call(a);
}
var td = typeof BigInt === "function" ? BigInt.asIntN : void 0,
  ud = Number.isSafeInteger,
  vd = Number.isFinite,
  wd = Math.trunc;
function xd(a) {
  if (a == null || typeof a === "number") return a;
  if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a);
}
function zd(a) {
  return a.displayName || a.name || "unknown type name";
}
function Ad(a) {
  if (a == null || typeof a === "boolean") return a;
  if (typeof a === "number") return !!a;
}
var Bd = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Cd(a) {
  switch (typeof a) {
    case "bigint":
      return true;
    case "number":
      return vd(a);
    case "string":
      return Bd.test(a);
    default:
      return false;
  }
}
function Dd(a) {
  if (!vd(a)) throw nc("enum");
  return a | 0;
}
function Ed(a) {
  return a == null ? a : vd(a) ? a | 0 : void 0;
}
function Fd(a) {
  if (typeof a !== "number") throw nc("int32");
  if (!vd(a)) throw nc("int32");
  return a | 0;
}
function Gd(a) {
  if (a == null) return a;
  if (typeof a === "string" && a) a = +a;
  else if (typeof a !== "number") return;
  return vd(a) ? a | 0 : void 0;
}
function Hd(a) {
  var c = void 0;
  c != null || (c = 1024);
  if (!Cd(a)) throw nc("int64");
  var e = typeof a;
  switch (c) {
    case 512:
      switch (e) {
        case "string":
          return Id(a);
        case "bigint":
          return String(td(64, a));
        default:
          return Jd(a);
      }
    case 1024:
      switch (e) {
        case "string":
          return Kd(a);
        case "bigint":
          return bd(td(64, a));
        default:
          return Ld(a);
      }
    case 0:
      switch (e) {
        case "string":
          return Id(a);
        case "bigint":
          return bd(td(64, a));
        default:
          return Md(a);
      }
    default:
      throw Error("Unknown format requested type for int64");
  }
}
function Nd(a) {
  var c = a.length;
  if (
    a[0] === "-"
      ? c < 20 || (c === 20 && a <= "-9223372036854775808")
      : c < 19 || (c === 19 && a <= "9223372036854775807")
  )
    return a;
  if (a.length < 16) nd(Number(a));
  else if (pc()) {
    a = BigInt(a);
    kd = Number(a & BigInt(4294967295)) >>> 0;
    ld = Number((a >> BigInt(32)) & BigInt(4294967295));
  } else {
    c = +(a[0] === "-");
    ld = kd = 0;
    for (var e = a.length, f = c, g = ((e - c) % 6) + c; g <= e; f = g, g += 6) {
      f = Number(a.slice(f, g));
      ld *= 1e6;
      kd = kd * 1e6 + f;
      kd >= 4294967296 && ((ld += Math.trunc(kd / 4294967296)), (ld >>>= 0), (kd >>>= 0));
    }
    c && ((c = I(od(kd, ld))), (a = c.next().value), (c = c.next().value), (kd = a), (ld = c));
  }
  return rd();
}
function Md(a) {
  Cd(a);
  a = wd(a);
  if (!ud(a)) {
    nd(a);
    var c = kd,
      e = ld;
    if ((a = e & 2147483648)) {
      c = (~c + 1) >>> 0;
      e = ~e >>> 0;
      c == 0 && (e = (e + 1) >>> 0);
    }
    var f = e * 4294967296 + (c >>> 0);
    c = Number.isSafeInteger(f) ? f : pd(c, e);
    a = typeof c === "number" ? (a ? -c : c) : a ? "-" + c : c;
  }
  return a;
}
function Jd(a) {
  Cd(a);
  a = wd(a);
  ud(a) ? (a = String(a)) : (nd(a), (a = rd()));
  return a;
}
function Id(a) {
  Cd(a);
  var c = wd(Number(a));
  if (ud(c)) return String(c);
  c = a.indexOf(".");
  c !== -1 && (a = a.substring(0, c));
  return Nd(a);
}
function Kd(a) {
  var c = wd(Number(a));
  if (ud(c)) return bd(c);
  c = a.indexOf(".");
  c !== -1 && (a = a.substring(0, c));
  return pc() ? bd(td(64, BigInt(a))) : bd(Nd(a));
}
function Ld(a) {
  return ud(a) ? bd(Md(a)) : bd(Jd(a));
}
function Od(a) {
  var c = c === void 0 ? false : c;
  var e = typeof a;
  if (a == null) return a;
  if (e === "bigint") return String(td(64, a));
  if (Cd(a)) return e === "string" ? Id(a) : c ? Jd(a) : Md(a);
}
function Pd(a) {
  var c = typeof a;
  if (a == null) return a;
  if (c === "bigint") return bd(td(64, a));
  if (Cd(a)) return c === "string" ? Kd(a) : Ld(a);
}
function Qd(a) {
  return a == null || typeof a === "string" ? a : void 0;
}
function Rd(a, c) {
  if (!(a instanceof c)) throw Error("B`" + zd(c) + "`" + (a && zd(a.constructor)));
  return a;
}
function Sd(a, c, e, f) {
  if (a != null && Mc(a)) return a;
  if (!Array.isArray(a)) return e ? (f & 2 ? c[vc] || (c[vc] = Td(c)) : new c()) : void 0;
  e = a[L] | 0;
  f = e | (f & 32) | (f & 2);
  f !== e && Ic(a, f);
  return new c(a);
}
function Td(a) {
  a = new a();
  Kc(a.G);
  return a;
}
function Ud(a) {
  return a;
}
function Vd(a, c) {
  if (typeof c === "string")
    try {
      c = Xb(c);
    } catch (e) {
      return false;
    }
  return Yb(c) && Zb(a, c);
}
function Wd(a) {
  switch (a) {
    case "bigint":
    case "string":
    case "number":
      return true;
    default:
      return false;
  }
}
function Xd(a, c) {
  if (Mc(a)) a = a.G;
  else if (!Array.isArray(a)) return false;
  if (Mc(c)) c = c.G;
  else if (!Array.isArray(c)) return false;
  return Yd(a, c, void 0, 2);
}
function Zd(a, c, e) {
  return Yd(a, c, e, 0);
}
function Yd(a, c, e, f) {
  if (a === c || (a == null && c == null)) return true;
  if (a instanceof Map) return a.ve(c, e);
  if (c instanceof Map) return c.ve(a, e);
  if (a == null || c == null) return false;
  if (a instanceof bc) return ic(a, c);
  if (c instanceof bc) return ic(c, a);
  if (Yb(a)) return Vd(a, c);
  if (Yb(c)) return Vd(c, a);
  var g = typeof a,
    h = typeof c;
  if (g !== "object" || h !== "object")
    return Number.isNaN(a) || Number.isNaN(c)
      ? String(a) === String(c)
      : Wd(g) && Wd(h)
        ? "" + a === "" + c
        : (g === "boolean" && h === "number") || (g === "number" && h === "boolean")
          ? !a === !c
          : false;
  if (Mc(a) || Mc(c)) return Xd(a, c);
  if (a.constructor != c.constructor) return false;
  if (a.constructor === Array) {
    h = a[L] | 0;
    var k = c[L] | 0,
      l = a.length,
      p = c.length,
      q = Math.max(l, p);
    g = (h | k | 64) & 128 ? 0 : -1;
    if (f === 1 || (h | k) & 1) f = 1;
    else if ((h | k) & 8192) return $d(a, c);
    h = l && a[l - 1];
    k = p && c[p - 1];
    (h != null && typeof h === "object" && h.constructor === Object) || (h = null);
    (k != null && typeof k === "object" && k.constructor === Object) || (k = null);
    l = l - g - +!!h;
    p = p - g - +!!k;
    for (var r = 0; r < q; r++) if (!ae(r - g, a, h, l, c, k, p, g, e, f)) return false;
    if (h)
      for (var x in h) {
        f = a;
        q = h;
        r = l;
        var y = c,
          z = k,
          B = p,
          G = g,
          C = e,
          X = +x;
        if (!(!Number.isFinite(X) || X < r || X < B || ae(X, f, q, r, y, z, B, G, C, 2)))
          return false;
      }
    if (k)
      for (var aa in k)
        if (
          ((x = h && aa in h) ||
            ((x = a),
            (f = h),
            (q = l),
            (r = c),
            (y = k),
            (z = p),
            (B = g),
            (G = e),
            (C = +aa),
            (x = !Number.isFinite(C) || C < q || C < z ? true : ae(C, x, f, q, r, y, z, B, G, 2))),
          !x)
        )
          return false;
    return true;
  }
  if (a.constructor === Object) return Zd([a], [c]);
  throw Error();
}
function ae(a, c, e, f, g, h, k, l, p, q) {
  c = be(a, c, e, f, l);
  g = be(a, g, h, k, l);
  q = q === 1;
  if ((g == null && Qc(c)) || (c == null && Qc(g))) return true;
  a = q ? p : p == null ? void 0 : p.j(a);
  return Yd(c, g, a, 0);
}
function be(a, c, e, f, g) {
  var h;
  return (h = a < f ? c[a + g] : void 0) != null ? h : e == null ? void 0 : e[a];
}
function ce(a, c) {
  if (!Array.isArray(a) || !Array.isArray(c)) return 0;
  a = "" + a[0];
  c = "" + c[0];
  return a === c ? 0 : a < c ? -1 : 1;
}
function $d(a, c) {
  if (!Array.isArray(a) || !Array.isArray(c)) return false;
  a = sd(a);
  c = sd(c);
  Array.prototype.sort.call(a, ce);
  Array.prototype.sort.call(c, ce);
  var e = a.length,
    f = c.length;
  if (e === 0 && f === 0) return true;
  for (var g = 0, h = 0; g < e && h < f; ) {
    var k = void 0,
      l = a[g];
    if (!Array.isArray(l)) return false;
    for (var p = l[0]; g < e - 1 && Zd((k = a[g + 1])[0], p); ) {
      g++;
      l = k;
    }
    var q = void 0;
    k = c[h];
    if (!Array.isArray(k)) return false;
    for (var r = k[0]; h < f - 1 && Zd((q = c[h + 1])[0], r); ) {
      h++;
      k = q;
    }
    if (!Zd(p, r)) return false;
    p = void 0;
    if (!Zd(l[1], k[1], (p = void 0) == null ? void 0 : p.j(2))) return false;
    g++;
    h++;
  }
  return g >= e && h >= f;
}
function de(a) {
  var c = Wa(yc);
  return c ? a[c] : void 0;
}
function ee() {}
function fe(a, c) {
  for (var e in a) !isNaN(e) && c(a, +e, a[e]);
}
function ge(a) {
  var c = new ee();
  fe(a, function (e, f, g) {
    c[f] = sd(g);
  });
  c.dd = a.dd;
  return c;
}
function he(a, c) {
  a = a.G;
  var e = Wa(yc);
  e && e in a && (a = a[e]) && delete a[c];
}
var ie = { He: true };
function je(a, c) {
  c < 100 || oc(Ac, 1);
}
function ke(a, c, e, f) {
  var g = f !== void 0;
  f = !!f;
  var h = Wa(yc),
    k;
  !g && qc && h && (k = a[h]) && fe(k, je);
  h = [];
  var l = a.length;
  k = 4294967295;
  var p = false,
    q = !!(c & 64),
    r = q ? (c & 128 ? 0 : -1) : void 0;
  if (!(c & 1)) {
    var x = l && a[l - 1];
    x != null && typeof x === "object" && x.constructor === Object ? (l--, (k = l)) : (x = void 0);
    if (q && !(c & 128) && !g) {
      p = true;
      var y;
      k = ((y = me) != null ? y : Ud)(k - r, r, a, x, void 0) + r;
    }
  }
  c = void 0;
  for (y = 0; y < l; y++) {
    var z = a[y];
    if (z != null && (z = e(z, f)) != null)
      if (q && y >= k) {
        var B = y - r,
          G = void 0;
        ((G = c) != null ? G : (c = {}))[B] = z;
      } else h[y] = z;
  }
  if (x)
    for (var C in x) {
      l = x[C];
      l != null &&
        (l = e(l, f)) != null &&
        ((y = +C),
        (z = void 0),
        q && !Number.isNaN(y) && (z = y + r) < k
          ? (h[z] = l)
          : ((y = void 0), (((y = c) != null ? y : (c = {}))[C] = l)));
    }
  c && (p ? h.push(c) : (h[k] = c));
  g && Wa(yc) && (a = de(a)) && a instanceof ee && (h[yc] = ge(a));
  return h;
}
function ne(a) {
  switch (typeof a) {
    case "number":
      return Number.isFinite(a) ? a : "" + a;
    case "bigint":
      return id(a) ? Number(a) : "" + a;
    case "boolean":
      return a ? 1 : 0;
    case "object":
      if (Array.isArray(a)) {
        var c = a[L] | 0;
        return a.length === 0 && c & 1 ? void 0 : ke(a, c, ne);
      }
      if (a != null && Mc(a)) return oe(a);
      if (a instanceof bc) return ec(a);
      return;
  }
  return a;
}
var pe = ac
    ? structuredClone
    : function (a) {
        return ke(a, 0, ne);
      },
  me;
function oe(a) {
  a = a.G;
  return ke(a, a[L] | 0, ne);
}
var qe, re;
function se(a) {
  switch (typeof a) {
    case "boolean":
      return qe || (qe = [0, void 0, true]);
    case "number":
      return a > 0 ? void 0 : a === 0 ? re || (re = [0, void 0]) : [-a, void 0];
    case "string":
      return [0, a];
    case "object":
      return a;
  }
}
function te(a, c) {
  return ue(a, c[0], c[1]);
}
function M(a, c, e) {
  return ue(a, c, e, 2048);
}
function ue(a, c, e, f) {
  f = f === void 0 ? 0 : f;
  if (a == null) {
    var g = 32;
    e ? ((a = [e]), (g |= 128)) : (a = []);
    c && (g = (g & -16760833) | ((c & 1023) << 14));
  } else {
    if (!Array.isArray(a)) throw Error("C");
    g = a[L] | 0;
    if (jb && 1 & g) throw Error("D");
    2048 & g && !(2 & g) && ve();
    if (g & 256) throw Error("E");
    if (g & 64) return ((g | f) !== g && Ic(a, g | f), a);
    if (e && ((g |= 128), e !== a[0])) throw Error("F");
    a: {
      e = a;
      g |= 64;
      var h = e.length;
      if (h) {
        var k = h - 1,
          l = e[k];
        if (l != null && typeof l === "object" && l.constructor === Object) {
          c = g & 128 ? 0 : -1;
          k -= c;
          if (k >= 1024) throw Error("H");
          for (var p in l) {
            h = +p;
            h < k && ((e[h + c] = l[p]), delete l[p]);
          }
          g = (g & -16760833) | ((k & 1023) << 14);
          break a;
        }
      }
      if (c) {
        p = Math.max(c, h - (g & 128 ? 0 : -1));
        if (p > 1024) throw Error("I");
        g = (g & -16760833) | ((p & 1023) << 14);
      }
    }
  }
  Ic(a, g | 64 | f);
  return a;
}
function ve() {
  if (jb) throw Error("G");
  oc(Bc, 5);
}
function we(a, c) {
  if (typeof a !== "object") return a;
  if (Array.isArray(a)) {
    var e = a[L] | 0;
    a.length === 0 && e & 1
      ? (a = void 0)
      : e & 2 ||
        (!c || 4096 & e || 16 & e
          ? (a = xe(a, e, false, c && !(e & 16)))
          : (Jc(a, 34), e & 4 && Object.freeze(a)));
    return a;
  }
  if (a != null && Mc(a))
    return ((c = a.G), (e = c[L] | 0), Oc(a, e) ? a : ye(a, c, e) ? ze(a, c) : xe(c, e));
  if (a instanceof bc) return a;
}
function ze(a, c, e) {
  a = new a.constructor(c);
  e && (a.j = Pc);
  a.o = Pc;
  return a;
}
function xe(a, c, e, f) {
  f != null || (f = !!(34 & c));
  a = ke(a, c, we, f);
  f = 32;
  e && (f |= 2);
  c = (c & 16769217) | f;
  Ic(a, c);
  return a;
}
function Ae(a) {
  var c = a.G,
    e = c[L] | 0;
  return Oc(a, e) ? (ye(a, c, e) ? ze(a, c, true) : new a.constructor(xe(c, e, false))) : a;
}
function Be(a) {
  if (a.j !== Pc) return false;
  var c = a.G;
  c = xe(c, c[L] | 0);
  Jc(c, 2048);
  a.G = c;
  a.j = void 0;
  a.o = void 0;
  return true;
}
function Ce(a) {
  if (!Be(a) && Oc(a, a.G[L] | 0)) throw Error();
}
function De(a, c) {
  c === void 0 && (c = a[L] | 0);
  c & 32 && !(c & 4096) && Ic(a, c | 4096);
}
function ye(a, c, e) {
  return e & 2 ? true : e & 32 && !(e & 4096) ? (Ic(c, e | 2), (a.j = Pc), true) : false;
}
var Ee = bd(0),
  Fe = {};
function Ge(a, c, e, f, g) {
  Object.isExtensible(a);
  c = He(a.G, c, e, g);
  if (c !== null || (f && a.o !== Pc)) return c;
}
function He(a, c, e, f) {
  if (c === -1) return null;
  var g = c + (e ? 0 : -1),
    h = a.length - 1;
  if (!(h < 1 + (e ? 0 : -1))) {
    if (g >= h) {
      var k = a[h];
      if (k != null && typeof k === "object" && k.constructor === Object) {
        e = k[c];
        var l = true;
      } else if (g === h) e = k;
      else return;
    } else e = a[g];
    if (f && e != null) {
      f = f(e);
      if (f == null) return f;
      if (!Object.is(f, e)) return (l ? (k[c] = f) : (a[g] = f), f);
    }
    return e;
  }
}
function Ie(a, c, e, f) {
  Ce(a);
  var g = a.G;
  Je(g, g[L] | 0, c, e, f);
  return a;
}
function Je(a, c, e, f, g) {
  var h = e + (g ? 0 : -1),
    k = a.length - 1;
  if (k >= 1 + (g ? 0 : -1) && h >= k) {
    var l = a[k];
    if (l != null && typeof l === "object" && l.constructor === Object) return ((l[e] = f), c);
  }
  if (h <= k) return ((a[h] = f), c);
  if (f !== void 0) {
    var p;
    k = (((p = c) != null ? p : (c = a[L] | 0)) >> 14) & 1023 || 536870912;
    e >= k ? f != null && ((h = {}), (a[k + (g ? 0 : -1)] = ((h[e] = f), h))) : (a[h] = f);
  }
  return c;
}
function Ke(a, c, e) {
  a = a.G;
  return Le(a, a[L] | 0, c, e) !== void 0;
}
function Me(a, c, e, f, g) {
  var h = a.G,
    k = h[L] | 0;
  f = Oc(a, k) ? 1 : f;
  g = !!g || f === 3;
  f === 2 && Be(a) && ((h = a.G), (k = h[L] | 0));
  a = Ne(h, c);
  var l = a === Gc ? 7 : a[L] | 0,
    p = Oe(l, k);
  var q = 4 & p ? false : true;
  if (q) {
    4 & p && ((a = sd(a)), (l = 0), (p = Pe(p, k)), (k = Je(h, k, c, a)));
    for (var r = 0, x = 0; r < a.length; r++) {
      var y = e(a[r]);
      y != null && (a[x++] = y);
    }
    x < r && (a.length = x);
    e = (p | 4) & -513;
    p = e &= -1025;
    p &= -4097;
  }
  p !== l && (Ic(a, p), 2 & p && Object.freeze(a));
  return (a = Qe(a, p, h, k, c, f, q, g));
}
function Qe(a, c, e, f, g, h, k, l) {
  var p = c;
  h === 1 || (h !== 4 ? 0 : 2 & c || (!(16 & c) && 32 & f))
    ? Re(c) ||
      ((c |= !a.length || (k && !(4096 & c)) || (32 & f && !(4096 & c || 16 & c)) ? 2 : 256),
      c !== p && Ic(a, c),
      Object.freeze(a))
    : (h === 2 && Re(c) && ((a = sd(a)), (p = 0), (c = Pe(c, f)), (f = Je(e, f, g, a, void 0))),
      Re(c) || (l || (c |= 16), c !== p && Ic(a, c)));
  2 & c || !(4096 & c || 16 & c) || De(e, f);
  return a;
}
function Ne(a, c, e) {
  a = He(a, c, e);
  return Array.isArray(a) ? a : Gc;
}
function Oe(a, c) {
  2 & c && (a |= 2);
  return a | 1;
}
function Re(a) {
  return (!!(2 & a) && !!(4 & a)) || !!(256 & a);
}
function Se(a) {
  if (a != null)
    if (typeof a === "string") a = a ? new bc(a, $b) : cc();
    else if (a.constructor !== bc) {
      var c;
      Yb(a) ? (c = a.length ? new bc(new Uint8Array(a), $b) : cc()) : (c = void 0);
      a = c;
    }
  return a;
}
function Te(a, c) {
  Ce(a);
  var e = a.G;
  Ue(e, e[L] | 0, c, 0);
  return a;
}
function Ve(a, c, e) {
  if (c & 2) throw Error();
  var f = Vc(c),
    g = Ne(a, e, f),
    h = g === Gc ? 7 : g[L] | 0,
    k = Oe(h, c);
  if (2 & k || Re(k) || 16 & k) {
    k === h || Re(k) || Ic(g, k);
    g = sd(g);
    h = 0;
    k = Pe(k, c);
    Je(a, c, e, g, f);
  }
  k &= -13;
  k !== h && Ic(g, k);
  return g;
}
function We(a, c, e) {
  return Xe(a, c) === e ? e : -1;
}
function Xe(a, c) {
  a = a.G;
  return Ye(Ze(a), a, void 0, c);
}
function Ze(a) {
  if (qc) {
    var c;
    return (c = a[wc]) != null ? c : (a[wc] = new Map());
  }
  if (wc in a) return a[wc];
  c = new Map();
  Object.defineProperty(a, wc, { value: c });
  return c;
}
function Ue(a, c, e, f) {
  f === 0 || e.includes(f);
  var g = Ze(a),
    h = Ye(g, a, c, e);
  h !== f && (h && (c = Je(a, c, h)), g.set(e, f));
}
function Ye(a, c, e, f) {
  var g = a.get(f);
  if (g != null) return g;
  for (var h = (g = 0); h < f.length; h++) {
    var k = f[h];
    He(c, k) != null && (g !== 0 && (e = Je(c, e, g)), (g = k));
  }
  a.set(f, g);
  return g;
}
function $e(a, c, e) {
  Ce(a);
  a = a.G;
  var f = a[L] | 0,
    g = He(a, e),
    h = void 0 === Sc;
  c = Sd(g, c, !h, f);
  if (!h || c) return ((c = Ae(c)), g !== c && ((f = Je(a, f, e, c)), De(a, f)), c);
}
function af(a, c, e) {
  var f = a[L] | 0,
    g = Vc(f),
    h = He(a, e, g);
  if (h != null && Mc(h)) {
    if (!Oc(h)) return (Be(h), h.G);
    var k = h.G;
  } else Array.isArray(h) && (k = h);
  if (k) {
    var l = k[L] | 0;
    l & 2 && (k = xe(k, l));
  }
  k = te(k, c);
  k !== h && Je(a, f, e, k, g);
  return k;
}
function Le(a, c, e, f, g) {
  var h = false;
  f = He(a, f, g, function (k) {
    var l = Sd(k, e, false, c);
    h = l !== k && l != null;
    return l;
  });
  if (f != null) return (h && !Oc(f) && De(a, c), f);
}
function bf(a, c, e) {
  a = a.G;
  return Le(a, a[L] | 0, c, e) || c[vc] || (c[vc] = Td(c));
}
function cf(a, c, e, f) {
  var g = a.G,
    h = g[L] | 0;
  c = Le(g, h, c, e, f);
  if (c == null) return c;
  h = g[L] | 0;
  if (!Oc(a, h)) {
    var k = Ae(c);
    k !== c && (Be(a) && ((g = a.G), (h = g[L] | 0)), (c = k), (h = Je(g, h, e, c, f)), De(g, h));
  }
  return c;
}
function df(a, c, e, f, g, h, k, l) {
  var p = Oc(a, e);
  h = p ? 1 : h;
  k = !!k || h === 3;
  p = l && !p;
  (h === 2 || p) && Be(a) && ((c = a.G), (e = c[L] | 0));
  a = Ne(c, g);
  var q = a === Gc ? 7 : a[L] | 0,
    r = Oe(q, e);
  if ((l = !(4 & r))) {
    var x = a,
      y = e,
      z = !!(2 & r);
    z && (y |= 2);
    for (var B = !z, G = true, C = 0, X = 0; C < x.length; C++) {
      var aa = Sd(x[C], f, false, y);
      if (aa instanceof f) {
        if (!z) {
          var Va = Oc(aa);
          B && (B = !Va);
          G && (G = Va);
        }
        x[X++] = aa;
      }
    }
    X < C && (x.length = X);
    r |= 4;
    r = G ? r & -4097 : r | 4096;
    r = B ? r | 8 : r & -9;
  }
  r !== q && (Ic(a, r), 2 & r && Object.freeze(a));
  if (p && !(8 & r || (!a.length && (h === 1 || (h !== 4 ? 0 : 2 & r || (!(16 & r) && 32 & e)))))) {
    Re(r) && ((a = sd(a)), (r = Pe(r, e)), (e = Je(c, e, g, a)));
    f = a;
    p = r;
    for (q = 0; q < f.length; q++) {
      x = f[q];
      r = Ae(x);
      x !== r && (f[q] = r);
    }
    p |= 8;
    r = p = f.length ? p | 4096 : p & -4097;
    Ic(a, r);
  }
  return (a = Qe(a, r, c, e, g, h, l, k));
}
function ef(a, c, e) {
  var f = a.G;
  return df(a, f, f[L] | 0, c, e, void 0 === Rc ? 2 : 4, false, true);
}
function N(a, c, e, f, g) {
  f != null ? Rd(f, c) : (f = void 0);
  Ie(a, e, f, g);
  f && !Oc(f) && De(a.G);
  return a;
}
function ff(a, c, e, f) {
  Ce(a);
  var g = a.G,
    h = g[L] | 0;
  if (f == null) return (Je(g, h, e), a);
  if (!Array.isArray(f)) throw nc();
  for (
    var k = f === Gc ? 7 : f[L] | 0,
      l = k,
      p = Re(k),
      q = p || Object.isFrozen(f),
      r = true,
      x = true,
      y = 0;
    y < f.length;
    y++
  ) {
    var z = f[y];
    Rd(z, c);
    p || ((z = Oc(z)), r && (r = !z), x && (x = z));
  }
  p || ((k = r ? 13 : 5), (k = x ? k & -4097 : k | 4096));
  (q && k === l) || ((f = sd(f)), (l = 0), (k = Pe(k, h)));
  k !== l && Ic(f, k);
  h = Je(g, h, e, f);
  2 & k || !(4096 & k || 16 & k) || De(g, h);
  return a;
}
function Pe(a, c) {
  return (a = (2 & c ? a | 2 : a & -3) & -273);
}
function gf(a, c, e) {
  Ce(a);
  c = Me(a, c, Gd, 2, true);
  if (Array.isArray(e)) for (var f = e.length, g = 0; g < f; g++) c.push(Fd(e[g]));
  else {
    e = I(e);
    g = e.next();
    try {
      for (; !g.done; g = e.next()) c.push(Fd(g.value));
    } finally {
      g && !g.done && (f = e.return) && f.call(e);
    }
  }
  return a;
}
function hf(a, c, e, f) {
  Ce(a);
  var g = a.G;
  a = df(a, g, g[L] | 0, e, c, 2, true);
  var h = (c = 0);
  if (Array.isArray(f))
    for (var k = f.length, l = 0; l < k; l++) {
      var p = Rd(f[l], e);
      a.push(p);
      (p = Oc(p)) && !c++ && (a[L] &= -9);
      p || h++ || Jc(a, 4096);
    }
  else {
    f = I(f);
    var q = f.next();
    try {
      for (; !q.done; q = f.next()) {
        l = Rd(q.value, e);
        a.push(l);
        (p = Oc(l)) && !c++ && (a[L] &= -9);
        p || h++ || Jc(a, 4096);
      }
    } finally {
      q && !q.done && (k = f.return) && k.call(f);
    }
  }
  h && De(g);
}
function jf(a, c) {
  a = Ge(a, c, void 0, void 0, Pd);
  a != null &&
    (typeof a === "bigint"
      ? id(a)
        ? (a = Number(a))
        : ((a = td(64, a)), (a = id(a) ? Number(a) : String(a)))
      : (a = Cd(a) ? (typeof a === "number" ? Md(a) : Id(a)) : void 0));
  return a;
}
function kf(a, c, e) {
  return Ed(Ge(a, c, void 0, e));
}
function lf(a, c) {
  var e = e === void 0 ? false : e;
  var f;
  return (f = Ad(Ge(a, c))) != null ? f : e;
}
function mf(a, c, e) {
  e = e === void 0 ? 0 : e;
  var f;
  return (f = Gd(Ge(a, c))) != null ? f : e;
}
function nf(a, c, e) {
  e = e === void 0 ? Ee : e;
  var f;
  return (f = Ge(a, c, void 0, void 0, Pd)) != null ? f : e;
}
function of(a, c) {
  var e = e === void 0 ? "" : e;
  var f;
  return (f = Qd(Ge(a, c, void 0, void 0))) != null ? f : e;
}
function pf(a, c) {
  var e = e === void 0 ? 0 : e;
  var f;
  return (f = kf(a, c)) != null ? f : e;
}
function qf(a, c) {
  return Gd(Ge(a, c, void 0, Fe));
}
function rf(a, c) {
  return Qd(Ge(a, c, void 0, Fe));
}
function sf(a, c, e) {
  if (e != null && typeof e !== "boolean") throw Error("A`" + Ka(e) + "`" + e);
  return Ie(a, c, e);
}
function tf(a, c, e) {
  return Ie(a, c, e == null ? e : Fd(e));
}
function uf(a, c, e) {
  return Ie(a, c, e == null ? e : Hd(e));
}
function vf(a, c, e) {
  if (e != null && typeof e !== "string") throw Error();
  return Ie(a, c, e);
}
function wf(a, c, e) {
  return Ie(a, c, e == null ? e : Dd(e));
}
function xf(a, c, e) {
  this.buffer = a;
  if (e && !c) throw Error();
  this.j = c;
}
function yf(a, c) {
  if (typeof a === "string") return new xf(Xb(a), c);
  if (Array.isArray(a)) return new xf(new Uint8Array(a), c);
  if (a.constructor === Uint8Array) return new xf(a, false);
  if (a.constructor === ArrayBuffer) return ((a = new Uint8Array(a)), new xf(a, false));
  if (a.constructor === bc) return ((c = hc(a) || new Uint8Array(0)), new xf(c, true, a));
  if (a instanceof Uint8Array)
    return (
      (a = a.constructor === Uint8Array ? a : new Uint8Array(a.buffer, a.byteOffset, a.byteLength)),
      new xf(a, false)
    );
  throw Error();
}
function zf(a, c, e, f) {
  this.v = null;
  this.B = false;
  this.j = this.o = this.A = 0;
  this.init(a, c, e, f);
}
zf.prototype.init = function (a, c, e, f) {
  var g = f === void 0 ? {} : f;
  f = g.qc;
  g = g.hd;
  g = g === void 0 ? false : g;
  this.qc = f === void 0 ? false : f;
  this.hd = g;
  a &&
    ((a = yf(a, this.hd)),
    (this.v = a.buffer),
    (this.B = a.j),
    (this.A = c || 0),
    (this.o = e !== void 0 ? this.A + e : this.v.length),
    (this.j = this.A));
};
zf.prototype.clear = function () {
  this.v = null;
  this.B = false;
  this.j = this.o = this.A = 0;
  this.qc = false;
};
zf.prototype.reset = function () {
  this.j = this.A;
};
function Af(a, c) {
  a.j = c;
  if (c > a.o) throw Error();
}
function Bf(a) {
  var c = a.v,
    e = a.j,
    f = c[e++],
    g = f & 127;
  if (
    f & 128 &&
    ((f = c[e++]),
    (g |= (f & 127) << 7),
    f & 128 &&
      ((f = c[e++]),
      (g |= (f & 127) << 14),
      f & 128 &&
        ((f = c[e++]),
        (g |= (f & 127) << 21),
        f & 128 &&
          ((f = c[e++]),
          (g |= f << 28),
          f & 128 &&
            c[e++] & 128 &&
            c[e++] & 128 &&
            c[e++] & 128 &&
            c[e++] & 128 &&
            c[e++] & 128))))
  )
    throw Error();
  Af(a, e);
  return g;
}
var Cf = [];
var Df = 0;
function Ef(a, c, e, f) {
  if (Cf.length) {
    var g = Cf.pop();
    g.init(a, c, e, f);
    a = g;
  } else a = new zf(a, c, e, f);
  this.j = a;
  this.A = this.j.j;
  this.o = this.v = -1;
  Ff(this, f);
}
function Ff(a, c) {
  c = (c === void 0 ? {} : c).Bd;
  a.Bd = c === void 0 ? false : c;
}
function Gf(a, c, e, f) {
  if (Hf.length) {
    var g = Hf.pop();
    Ff(g, f);
    g.j.init(a, c, e, f);
    return g;
  }
  return new Ef(a, c, e, f);
}
function If(a) {
  a.j.clear();
  a.v = -1;
  a.o = -1;
  Hf.length < 100 && Hf.push(a);
}
Ef.prototype.reset = function () {
  this.j.reset();
  this.A = this.j.j;
  this.o = this.v = -1;
};
function Jf(a) {
  var c = a.j;
  if (c.j == c.o) return false;
  a.A = a.j.j;
  var e = Bf(a.j) >>> 0;
  c = e >>> 3;
  e &= 7;
  if (!(e >= 0 && e <= 5)) throw Error();
  if (c < 1) throw Error();
  a.v = c;
  a.o = e;
  return true;
}
function Kf() {
  if (Df >= 100) throw new SyntaxError();
  Df++;
}
function Lf(a) {
  try {
    switch (a.o) {
      case 0:
        if (a.o != 0) Lf(a);
        else
          a: {
            var c = a.j,
              e = c.j;
            a = e + 10;
            for (var f = c.v; e < a; )
              if ((f[e++] & 128) === 0) {
                Af(c, e);
                break a;
              }
            throw Error();
          }
        break;
      case 1:
        var g = a.j;
        Af(g, g.j + 8);
        break;
      case 2:
        if (a.o != 2) Lf(a);
        else {
          var h = Bf(a.j) >>> 0,
            k = a.j;
          Af(k, k.j + h);
        }
        break;
      case 5:
        var l = a.j;
        Af(l, l.j + 4);
        break;
      case 3:
        Kf();
        var p = a.v;
        try {
          do {
            if (!Jf(a)) throw Error();
            if (a.o == 4) {
              if (a.v != p) throw Error();
              break;
            }
            Lf(a);
          } while (1);
        } catch (q) {
          if (q instanceof RangeError) throw new SyntaxError();
          throw q;
        } finally {
          Df > 0 && Df--;
        }
        break;
      default:
        throw Error();
    }
  } catch (q) {
    if (q instanceof RangeError) throw new SyntaxError();
    throw q;
  }
}
function Mf(a, c, e) {
  var f = a.j.o,
    g = Bf(a.j) >>> 0;
  g = a.j.j + g;
  var h = g - f;
  h <= 0 && ((a.j.o = g), e(c, a, void 0, void 0, void 0), (h = g - a.j.j));
  if (h) throw Error();
  a.j.j = g;
  a.j.o = f;
}
var Hf = [];
function Nf() {
  function a() {
    throw Error();
  }
  Object.setPrototypeOf(a, a.prototype);
  return a;
}
var Of = Nf(),
  Pf = Nf(),
  Qf = Nf();
var Rf;
function Sf() {
  var a;
  return (a = Rf) != null ? a : (Rf = 1);
}
function Tf(a, c) {
  var e;
  return (e = a[xc]) != null ? e : (a[xc] = c(a));
}
function Uf(a) {
  for (var c = 1, e = a.length, f = a[e - 1]; f === "=" || f === "."; f = a[--e - 1]);
  f = e - 4;
  for (var g = 0; g < f; ) {
    c = (a.charCodeAt(g) + 31 * c) | 0;
    c = (a.charCodeAt(g + 1) + 31 * c) | 0;
    c = (a.charCodeAt(g + 2) + 31 * c) | 0;
    c = (a.charCodeAt(g + 3) + 31 * c) | 0;
    g += 4;
  }
  for (; g < e; ) c = (a.charCodeAt(g++) + 31 * c) | 0;
  return c;
}
function Vf(a) {
  for (var c = 0, e = a.length, f = 0; f < e; f++) {
    var g = a[f];
    if (f === e - 1 && g != null && typeof g === "object" && g.constructor === Object)
      for (var h in g) !Number.isNaN(+h) && (c = (c + Wf(g[h])) | 0);
    else c = (c + Wf(g)) | 0;
  }
  return (c * 17) | 0;
}
function Xf(a) {
  return Uf(ec(a));
}
function Yf(a) {
  return Vf(a.G);
}
function Zf(a) {
  return Vf([].concat(oa(a.entries())));
}
var $f = Uf("1"),
  ag = Uf("0");
function Wf(a) {
  if (a == null) return 0;
  switch (typeof a) {
    case "boolean":
      return a ? $f : ag;
    case "string":
      return Uf(a);
    case "object":
      if (Array.isArray(a)) return Vf(a);
      if (Mc(a)) return Oc(a) ? Tf(a, Yf) : Yf(a);
      if (a && typeof a === "object" && a.v === Nc) return a.j & 2 ? Tf(a, Zf) : Zf(a);
      if (a instanceof bc) return Tf(a, Xf);
  }
  return Uf(String(a));
}
function Q(a, c, e) {
  this.G = M(a, c, e);
}
Q.prototype.toJSON = function () {
  return oe(this);
};
function bg(a) {
  return JSON.stringify(oe(a));
}
function cg(a, c) {
  if (c == null || c == "") return new a();
  c = JSON.parse(c);
  if (!Array.isArray(c)) throw Error("J");
  Jc(c, 32);
  return new a(c);
}
Q.prototype.clone = function () {
  var a = this.G,
    c = a[L] | 0;
  return ye(this, a, c) ? ze(this, a, true) : new this.constructor(xe(a, c, false));
};
function dg(a) {
  var c = a.G,
    e = c[L] | 0;
  return Oc(a, e) ? a : ye(a, c, e) ? ze(a, c) : new a.constructor(xe(c, e, true));
}
function eg(a, c, e) {
  he(a, c.j);
  c.ctor ? c.A(a, c.ctor, c.j, e, c.o) : c.A(a, c.j, e, c.o);
}
Q.prototype[Cc] = Lc;
Q.prototype.toString = function () {
  return this.G.toString();
};
function fg(a, c) {
  if (c == null) {
    c = a.constructor;
    c = c[vc] || (c[vc] = Td(c));
  } else {
    a = a.constructor;
    if (!Array.isArray(c)) throw Error();
    if (Object.isFrozen(c) || Object.isSealed(c) || !Object.isExtensible(c)) throw Error();
    c = new a(Kc(c));
  }
  return c;
}
function gg(a, c) {
  this.Ib = a;
  a = Wa(Of);
  this.j = (!!a && c === a) || false;
}
function hg(a) {
  var c = c === void 0 ? Of : c;
  return new gg(a, c);
}
var ig = hg(function (a, c, e, f, g) {
    if (a.o !== 2) return false;
    Mf(a, af(c, f, e), g);
    return true;
  }),
  jg = hg(function (a, c, e, f, g) {
    if (a.o !== 2) return false;
    Mf(a, af(c, f, e), g);
    return true;
  }),
  kg = Symbol(),
  lg = Symbol(),
  mg = Symbol(),
  ng,
  og;
function pg(a) {
  var c = qg,
    e = rg,
    f = a[kg];
  if (f) return f;
  f = {};
  f.Xd = a;
  f.Tc = se(a[0]);
  var g = a[1],
    h = 1;
  g &&
    g.constructor === Object &&
    ((f.Ed = g),
    (g = a[++h]),
    typeof g === "function" &&
      ((f.we = true), ng != null || (ng = g), og != null || (og = a[h + 1]), (g = a[(h += 2)])));
  for (var k = {}; g && Array.isArray(g) && g.length && typeof g[0] === "number" && g[0] > 0; ) {
    for (var l = 0; l < g.length; l++) k[g[l]] = g;
    g = a[++h];
  }
  for (l = 1; g !== void 0; ) {
    typeof g === "number" && ((l += g), (g = a[++h]));
    var p = void 0;
    if (g instanceof gg) var q = g;
    else {
      q = ig;
      h--;
    }
    g = void 0;
    if ((g = q) == null ? 0 : g.j) {
      g = a[++h];
      p = a;
      var r = h;
      typeof g === "function" && ((g = g()), (p[r] = g));
      p = g;
    }
    g = a[++h];
    r = l + 1;
    typeof g === "number" && g < 0 && ((r -= g), (g = a[++h]));
    for (; l < r; l++) {
      var x = k[l];
      p ? e(f, l, q, p, x) : c(f, l, q, x);
    }
  }
  return (a[kg] = f);
}
function qg(a, c, e, f) {
  var g = e.Ib;
  a[c] = f
    ? function (h, k, l) {
        return g(h, k, l, f);
      }
    : g;
}
function rg(a, c, e, f, g) {
  var h = e.Ib,
    k,
    l;
  a[c] = function (p, q, r) {
    return h(p, q, r, l || (l = pg(f).Tc), k || (k = sg(f)), g);
  };
}
function sg(a) {
  var c = a[lg];
  if (c != null) return c;
  var e = pg(a);
  c = e.we
    ? function (f, g) {
        return ng(f, g, e);
      }
    : function (f, g) {
        a: {
          Kf();
          try {
            for (; Jf(g) && g.o != 4; ) {
              var h = g.v,
                k = e[h];
              if (k == null) {
                var l = e.Ed;
                if (l) {
                  var p = l[h];
                  if (p) {
                    var q = tg(p);
                    q != null && (k = e[h] = q);
                  }
                }
              }
              if (k == null || !k(g, f, h)) {
                var r = g,
                  x = r.A;
                Lf(r);
                var y = r;
                if (y.Bd) var z = void 0;
                else {
                  var B = y.j.j - x;
                  y.j.j = x;
                  r = void 0;
                  var G = y.j;
                  y = B;
                  if (y == 0) z = cc();
                  else {
                    if (y < 0) throw Error();
                    var C = G.j,
                      X = C + y;
                    if (X > G.o) throw Error();
                    G.j = X;
                    var aa = C;
                    if (G.qc && G.B) r = G.v.subarray(aa, aa + y);
                    else {
                      var Va = G.v;
                      y = aa + y;
                      r =
                        aa === y
                          ? new Uint8Array(0)
                          : jd
                            ? Va.slice(aa, y)
                            : new Uint8Array(Va.subarray(aa, y));
                    }
                    z = r.length == 0 ? cc() : new bc(r, $b);
                  }
                }
                X = y = r = void 0;
                var yd = f,
                  uc = h,
                  Jg = z;
                Jg &&
                  ((r = (y = (X = yd[yc]) != null ? X : (yd[yc] = new ee()))[uc]) != null
                    ? r
                    : (y[uc] = [])
                  ).push(Jg);
              }
            }
            var Kg = de(f);
            Kg && (Kg.dd = e.Xd[mg]);
            var Lg = true;
            break a;
          } catch (Mg) {
            if (Mg instanceof RangeError) throw new SyntaxError();
            throw Mg;
          } finally {
            Df > 0 && Df--;
          }
          Lg = void 0;
        }
        return Lg;
      };
  a[lg] = c;
  a[mg] = ug.bind(a);
  return c;
}
function ug(a, c, e, f) {
  var g = this[kg],
    h = this[lg],
    k = te(void 0, g.Tc),
    l = de(a);
  if (l) {
    var p = false,
      q = g.Ed;
    if (q) {
      g = function (B, G, C) {
        if (C.length !== 0)
          if (q[G]) {
            B = I(C);
            G = B.next();
            var X;
            try {
              for (; !G.done; G = B.next()) {
                var aa = Gf(G.value);
                try {
                  {
                    p = true;
                    h(k, aa);
                  }
                } finally {
                  If(aa);
                }
              }
            } finally {
              G && !G.done && (X = B.return) && X.call(B);
            }
          } else f == null || f(a, G, C);
      };
      if (c == null) fe(l, g);
      else if (l != null) {
        var r = l[c];
        r && g(l, c, r);
      }
      if (p) {
        var x = a[L] | 0;
        if (x & 2 && x & 2048 && (e == null || !e.He)) throw Error();
        var y = Vc(x),
          z = function (B, G) {
            if (He(a, B, y) != null)
              switch (e == null ? void 0 : e.Xf) {
                case 1:
                  return;
                default:
                  throw Error();
              }
            G != null && (x = Je(a, x, B, G, y));
            delete l[B];
          };
        c == null
          ? Tc(k, k[L] | 0, function (B, G) {
              z(B, G);
            })
          : z(c, He(k, c, y));
      }
    }
  }
}
function tg(a) {
  a = Array.isArray(a) ? (a[0] instanceof gg ? a : [jg, a]) : [a, void 0];
  var c = a[0].Ib;
  if ((a = a[1])) {
    var e = sg(a),
      f = pg(a).Tc;
    return function (g, h, k) {
      return c(g, h, k, f, e);
    };
  }
  return c;
}
var vg;
vg = new gg(function (a, c, e) {
  if (a.o !== 0) return false;
  a = Bf(a.j);
  Je(c, c[L] | 0, e, a, Vc(c[L] | 0));
  return true;
}, Pf);
var wg,
  xg = void 0;
xg = xg === void 0 ? Of : xg;
wg = new gg(function (a, c, e, f, g) {
  if (a.o !== 2) return false;
  f = te(void 0, f);
  Ve(c, c[L] | 0, e).push(f);
  Mf(a, f, g);
  return true;
}, xg);
var yg;
yg = new gg(function (a, c, e) {
  if (a.o !== 0) return false;
  a = Bf(a.j);
  Je(c, c[L] | 0, e, a, Vc(c[L] | 0));
  return true;
}, Qf);
var zg;
zg = new gg(function (a, c, e) {
  if (a.o !== 0 && a.o !== 2) return false;
  c = Ve(c, c[L] | 0, e);
  if (a.o == 2) for (e = Bf(a.j) >>> 0, e = a.j.j + e; a.j.j < e; ) c.push(Bf(a.j));
  else c.push(Bf(a.j));
  return true;
}, Qf);
function Ag(a, c, e) {
  this.j = a;
  this.ctor = e;
  this.v = cf;
  this.A = N;
  this.defaultValue = void 0;
  this.o = c.Tf != null ? Uc : void 0;
}
Ag.prototype.register = function () {
  Fb(this);
};
function Bg(a) {
  return function (c) {
    return cg(a, c);
  };
}
Object.create(null);
function Cg(a) {
  if (a.prototype.hasOwnProperty("$$generatedClassName")) return a.prototype.$$generatedClassName;
  var c = a.name,
    e,
    f = (e = Dg.get(c)) != null ? e : 0;
  Dg.set(c, f + 1);
  c = "Class$obf_" + c + "_" + f;
  return (a.prototype.$$generatedClassName = c);
}
var Dg = new Map();
function R() {}
R.prototype.equals = function (a) {
  return Eg(this, a);
};
R.prototype.va = function () {
  return Fg(this);
};
R.prototype.toString = function () {
  return S(Gg(Hg(this.constructor))) + "@" + S((this.va() >>> 0).toString(16));
};
function Ig() {}
var Ng;
F(Ig, R);
function Og() {}
F(Og, Ig);
var Pg;
function Qg() {
  Qg = u();
  for (var a = Rg([256], Sg, Tg), c = 0; c < 256; c = (c + 1) | 0) a[c] = Ug((c - 128) | 0);
  Pg = a;
}
function Vg() {}
F(Vg, R);
function Wg(a, c) {
  a.j = c;
  Xg(a);
}
function Yg(a, c) {
  a.L = c;
  Zg(c, a);
}
function Xg(a) {
  a.L instanceof Error &&
    (Error.captureStackTrace ? Error.captureStackTrace(a.L) : (a.L.stack = Error().stack));
}
Vg.prototype.B = w("j");
Vg.prototype.toString = function () {
  var a = Gg(Hg(this.constructor)),
    c = this.j;
  return c == null ? a : S(a) + ": " + S(c);
};
function $g(a) {
  if (a != null) {
    var c = a.Vd;
    if (c) return c;
  }
  a instanceof TypeError ? (c = ah()) : ((c = new bh()), Xg(c), Yg(c, Error(c)));
  c.j = a == null ? "null" : a.toString();
  Yg(c, a);
  return c;
}
function ch(a) {
  return a instanceof Vg;
}
function dh() {}
F(dh, Vg);
function eh() {}
F(eh, dh);
function fh(a) {
  var c = new eh();
  Wg(c, a);
  Yg(c, Error(c));
  return c;
}
function gh() {}
F(gh, eh);
function Eg(a, c) {
  return Object.is(a, c) || (a == null && c == null);
}
function hh() {}
F(hh, eh);
function ih() {
  var a = new hh();
  Xg(a);
  Yg(a, Error(a));
  return a;
}
function jh(a) {
  var c = new hh();
  Wg(c, a);
  Yg(c, Error(c));
  return c;
}
function kh(a, c) {
  var e = new hh();
  e.o = c;
  e.j = a;
  Xg(e);
  Yg(e, Error(e));
  return e;
}
function lh(a, c) {
  this.Y = a | 0;
  this.V = c | 0;
}
function mh(a) {
  return a.V * 4294967296 + (a.Y >>> 0);
}
D = lh.prototype;
D.isSafeInteger = function () {
  var a = this.V >> 21;
  return a == 0 || (a == -1 && !(this.Y == 0 && this.V == -2097152));
};
D.toString = function (a) {
  a = a || 10;
  if (a < 2 || 36 < a) throw Error("M`" + a);
  if (this.isSafeInteger()) {
    var c = mh(this);
    return a == 10 ? "" + c : c.toString(a);
  }
  c = 14 - (a >> 2);
  var e = Math.pow(a, c),
    f = nh(e, e / 4294967296);
  e = this.div(f);
  var g = Math,
    h = g.abs;
  f = e.multiply(f);
  f = this.add(oh(f));
  g = h.call(g, mh(f));
  h = a == 10 ? "" + g : g.toString(a);
  h.length < c && (h = "0000000000000".slice(h.length - c) + h);
  g = mh(e);
  return (a == 10 ? g : g.toString(a)) + h;
};
function ph(a) {
  return a.Y == 0 && a.V == 0;
}
D.va = function () {
  return this.Y ^ this.V;
};
D.equals = function (a) {
  return a == null ? false : this.Y == a.Y && this.V == a.V;
};
D.compare = function (a) {
  return this.V == a.V
    ? this.Y == a.Y
      ? 0
      : this.Y >>> 0 > a.Y >>> 0
        ? 1
        : -1
    : this.V > a.V
      ? 1
      : -1;
};
function oh(a) {
  var c = (~a.Y + 1) | 0;
  return nh(c, (~a.V + !c) | 0);
}
D.add = function (a) {
  var c = this.V >>> 16,
    e = this.V & 65535,
    f = this.Y >>> 16,
    g = a.V >>> 16,
    h = a.V & 65535,
    k = a.Y >>> 16;
  a = (this.Y & 65535) + (a.Y & 65535);
  k = (a >>> 16) + (f + k);
  f = k >>> 16;
  f += e + h;
  return nh(
    ((k & 65535) << 16) | (a & 65535),
    ((((f >>> 16) + (c + g)) & 65535) << 16) | (f & 65535),
  );
};
D.multiply = function (a) {
  if (ph(this)) return this;
  if (ph(a)) return a;
  var c = this.V >>> 16,
    e = this.V & 65535,
    f = this.Y >>> 16,
    g = this.Y & 65535,
    h = a.V >>> 16,
    k = a.V & 65535,
    l = a.Y >>> 16;
  a = a.Y & 65535;
  var p = g * a;
  var q = (p >>> 16) + f * a;
  var r = q >>> 16;
  q = (q & 65535) + g * l;
  r += q >>> 16;
  r += e * a;
  var x = r >>> 16;
  r = (r & 65535) + f * l;
  x += r >>> 16;
  r = (r & 65535) + g * k;
  x = (x + (r >>> 16) + (c * a + e * l + f * k + g * h)) & 65535;
  return nh(((q & 65535) << 16) | (p & 65535), (x << 16) | (r & 65535));
};
D.div = function (a) {
  if (ph(a)) throw Error("N");
  if (this.V < 0) {
    if (this.equals(qh)) {
      if (a.equals(rh) || a.equals(sh)) return qh;
      if (a.equals(qh)) return rh;
      var c = this.V;
      c = nh((this.Y >>> 1) | (c << 31), c >> 1);
      c = c.div(a).shiftLeft(1);
      if (c.equals(th)) return a.V < 0 ? rh : sh;
      var e = a.multiply(c);
      e = this.add(oh(e));
      return c.add(e.div(a));
    }
    return a.V < 0 ? oh(this).div(oh(a)) : oh(oh(this).div(a));
  }
  if (ph(this)) return th;
  if (a.V < 0) return a.equals(qh) ? th : oh(this.div(oh(a)));
  c = th;
  for (e = this; e.compare(a) >= 0; ) {
    var f = Math.max(1, Math.floor(mh(e) / mh(a))),
      g = Math.ceil(Math.log(f) / Math.LN2);
    g = g <= 48 ? 1 : Math.pow(2, g - 48);
    for (var h = uh(f), k = h.multiply(a); k.V < 0 || k.compare(e) > 0; ) {
      f -= g;
      h = uh(f);
      k = h.multiply(a);
    }
    ph(h) && (h = rh);
    c = c.add(h);
    e = e.add(oh(k));
  }
  return c;
};
D.and = function (a) {
  return nh(this.Y & a.Y, this.V & a.V);
};
D.or = function (a) {
  return nh(this.Y | a.Y, this.V | a.V);
};
D.xor = function (a) {
  return nh(this.Y ^ a.Y, this.V ^ a.V);
};
D.shiftLeft = function (a) {
  a &= 63;
  if (a == 0) return this;
  var c = this.Y;
  return a < 32 ? nh(c << a, (this.V << a) | (c >>> (32 - a))) : nh(0, c << (a - 32));
};
function uh(a) {
  return a > 0
    ? a >= 0x7fffffffffffffff
      ? vh
      : new lh(a, a / 4294967296)
    : a < 0
      ? a <= -0x7fffffffffffffff
        ? qh
        : oh(new lh(-a, -a / 4294967296))
      : th;
}
function nh(a, c) {
  return new lh(a, c);
}
var th = nh(0, 0),
  rh = nh(1, 0),
  sh = nh(-1, -1),
  vh = nh(4294967295, 2147483647),
  qh = nh(0, 2147483648);
function wh(a, c, e) {
  if (Object.prototype.hasOwnProperty.call(a.prototype, c)) return a.prototype[c];
  e = e();
  return (a.prototype[c] = e);
}
function xh() {}
F(xh, R);
function yh(a) {
  return mh(a);
}
function zh(a) {
  return Math.max(Math.min(a, 2147483647), -2147483648) | 0;
}
function bh() {}
F(bh, eh);
function Ah() {}
F(Ah, bh);
function ah() {
  var a = new Ah();
  Xg(a);
  Yg(a, new TypeError(a));
  return a;
}
function Bh(a, c) {
  return Eg(a, c) || (a != null && Ch(a, c));
}
function Dh(a) {
  return a >= 56320 && a <= 57343;
}
function Sg() {
  this.j = 0;
}
F(Sg, Ig);
function Eh(a) {
  a > -129 && a < 128 ? (Qg(), (a = Pg[(a + 128) | 0])) : (a = Ug(a));
  return a;
}
function Ug(a) {
  var c = new Sg();
  c.j = a;
  return c;
}
Sg.prototype.equals = function (a) {
  return Tg(a) && a.j == this.j;
};
Sg.prototype.va = w("j");
Sg.prototype.toString = function () {
  return "" + this.j;
};
Sg.prototype.ta = w("j");
function Tg(a) {
  return a instanceof Sg;
}
function Fh() {}
F(Fh, Ig);
function Gh() {}
F(Gh, R);
Gh.prototype.toString = w("j");
function Hh() {}
F(Hh, Gh);
function Ih(a, c) {
  a.j = S(a.j) + S(c);
}
function Jh() {}
F(Jh, R);
Jh.prototype.toString = function () {
  return this.j
    ? this.o.length == 0
      ? this.j.toString()
      : S(this.j.toString()) + S(this.o)
    : this.B;
};
function Kh() {
  this.j = 0;
}
F(Kh, R);
Kh.prototype.name = function () {
  return this.o != null ? this.o : "" + this.j;
};
Kh.prototype.equals = function (a) {
  return Eg(this, a);
};
Kh.prototype.va = function () {
  return R.prototype.va.call(this);
};
Kh.prototype.toString = function () {
  return this.name();
};
function Lh() {}
F(Lh, eh);
function Mh(a) {
  var c = new Lh();
  Wg(c, a);
  Yg(c, Error(c));
  return c;
}
function Nh() {}
F(Nh, Lh);
function Oh(a) {
  switch (typeof a) {
    case "string":
      for (var c = 0, e = 0; e < a.length; e = (e + 1) | 0)
        c = ((c << 5) - c + a.charCodeAt(e)) | 0;
      return c;
    case "number":
      return zh(a);
    case "boolean":
      return a ? 1231 : 1237;
    default:
      return a == null ? 0 : Fg(a);
  }
}
var Ph = 0;
function Fg(a) {
  return (
    a.pd ||
    (Object.defineProperties(a, { pd: { value: (Ph = (Ph + 1) | 0), enumerable: false } }), a.pd)
  );
}
function Ch(a, c) {
  return a.equals ? a.equals(c) : Object.is(a, c);
}
function Qh(a) {
  return a.va ? a.va() : Oh(a);
}
function Rh(a) {
  switch (typeof a) {
    case "number":
      return Hg(Og);
    case "boolean":
      return Hg(xh);
    case "string":
      return Hg(Sh);
    case "function":
      return Hg(Th);
  }
  if (a instanceof lh) a = Hg(Fh);
  else if (a instanceof R) a = Hg(a.constructor);
  else if (Array.isArray(a)) a = (a = a.Pd) ? Hg(a.Eb, a.yc) : Hg(R, 1);
  else if (a != null) a = Hg(Uh);
  else throw new TypeError("P");
  return a;
}
function Th() {}
function Uh() {}
F(Uh, R);
function Sh() {}
F(Sh, R);
function S(a) {
  return a == null ? "null" : a.toString();
}
function Vh(a, c) {
  var e = a.length,
    f,
    g = ((f = c), (c = (c + 1) | 0), f);
  f = "string" === typeof a ? a.charCodeAt(g) : a.j.charCodeAt(g);
  var h;
  return f >= 55296 &&
    f <= 56319 &&
    c < e &&
    Dh((h = "string" === typeof a ? a.charCodeAt(c) : a.j.charCodeAt(c)))
    ? (65536 + ((f & 1023) << 10) + (h & 1023)) | 0
    : f;
}
function Wh(a, c) {
  return Eg(a, c);
}
function Zg(a, c) {
  if (a instanceof Object)
    try {
      {
        a.Vd = c;
        Object.defineProperties(a, {
          cause: {
            get: function () {
              return c.o && c.o.L;
            },
          },
        });
      }
    } catch (e) {}
}
function Rg(a, c, e) {
  return Xh(a, { Eb: c, Md: e, yc: a.length });
}
function Xh(a, c) {
  var e = a[0];
  if (e == null) return null;
  var f = new globalThis.Array(e);
  c && (f.Pd = c);
  if (a.length > 1) {
    a = a.slice(1);
    c = c && { Eb: c.Eb, Md: c.Md, yc: c.yc - 1 };
    for (var g = 0; g < e; g++) f[g] = Xh(a, c);
  } else if (c && ((a = c.Eb.Se), a !== void 0)) for (c = 0; c < e; c++) f[c] = a;
  return f;
}
function Yh(a, c) {
  this.j = 0;
  this.o = a;
  this.j = c;
}
F(Yh, R);
function Hg(a, c) {
  var e = c || 0;
  return wh(a, "$$class/" + e, function () {
    return new Yh(a, e);
  });
}
function Gg(a) {
  return a.j != 0 ? S(Zh("[", a.j)) + String("L" + S(Cg(a.o)) + ";") : Cg(a.o);
}
function $h(a, c) {
  return a.substr((a.lastIndexOf(c) + 1) | 0);
}
Yh.prototype.toString = function () {
  return "class " + S(Gg(this));
};
function Zh(a, c) {
  for (var e = "", f = 0; f < c; f = (f + 1) | 0) e = S(e) + S(a);
  return e;
}
function ai(a) {
  this.G = M(a);
}
F(ai, Q);
ai.prototype.getTypeName = function () {
  return of(this, 1).split("/").pop();
};
var bi = (function (a) {
  return Wc(function (c) {
    return c instanceof a && !Oc(c);
  });
})(ai);
function ci(a) {
  var c = 2;
  c = c === void 0 ? 2 : c;
  this.key = a;
  this.defaultValue = false;
  this.phase = c;
  this.flagNameForDebugging = void 0;
}
ci.prototype.ctor = function (a) {
  return typeof a === "boolean" ? a : this.defaultValue;
};
function di() {
  var a = ei(
      '[["feature named `pageObserver` was not found","feature named `hover` was not found"]]',
    ),
    c = fi,
    e = 2;
  e = e === void 0 ? 2 : e;
  this.key = "45696263";
  this.defaultValue = a;
  this.j = c;
  this.phase = e;
  this.flagNameForDebugging = void 0;
}
di.prototype.ctor = function (a) {
  if (typeof a === "string" && a) return cg(this.j, a);
  if (!bi(a)) return this.defaultValue.clone();
  var c;
  try {
    var e,
      f = this.j,
      g = (e = a.getTypeName()) != null ? e : "";
    if (of(a, 1).split("/").pop() != g) var h = null;
    else {
      var k = typeof f === "function" ? f : f.constructor,
        l = a.G,
        p = l[L] | 0,
        q = He(l, 2);
      Be(a) && ((l = a.G), (p = l[L] | 0));
      a = l;
      if (q != null && !(Array.isArray(q) || (q != null && Mc(q)))) throw Error("K`" + Ka(q));
      var r = Sd(q, k, true, p);
      if (!(r instanceof k)) throw Error("L`" + r.constructor.displayName + "`" + k.displayName);
      (k = !!(2 & p)) || (r = Ae(r));
      q !== r && (Je(a, p, 2, r), k || De(a));
      h = r;
    }
  } catch (x) {
    h = null;
  }
  return (c = h) != null ? c : this.defaultValue.clone();
};
function gi(a) {
  this.G = M(a);
}
F(gi, Q);
gi.prototype.clearValue = function () {
  return Te(this, hi);
};
var hi = [1, 2];
function ii(a) {
  this.G = M(a);
}
F(ii, Q);
ii.prototype.clearValue = function () {
  return Te(this, ji);
};
var ji = [2, 3, 4, 5, 6, 8];
function ki(a) {
  this.G = M(a);
}
F(ki, Q);
ki.prototype.Id = function () {
  var a = Ge(this, 3, void 0, void 0, Se);
  return a == null ? cc() : a;
};
function li(a) {
  this.G = M(a);
}
F(li, Q);
var mi = Bg(li);
function fi(a) {
  this.G = M(a);
}
F(fi, Q);
var ei = Bg(fi);
function ni(a) {
  a == null || cd(a);
  return a == null ? null : oi(a);
}
function oi(a) {
  cd(a);
  id(a);
  return id(a) ? Number(a) : String(a);
}
function pi(a, c) {
  c = c === void 0 ? window : c;
  c = c === void 0 ? window : c;
  return (c = c.WIZ_global_data) && a in c ? c[a] : null;
}
var qi;
function ri() {
  return (qi = qi || new si());
}
function si() {
  this.o = false;
  var a = null;
  this.o = true;
  var c = pi("TSDtV", window);
  if ((c = typeof c !== "string" ? null : c)) {
    a = mi("[" + c.substring(4));
    a = ef(a, ki, 1)[0];
  }
  if (a) {
    c = I(ef(a, ii, 2));
    var e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next()) {
        var g = e.value,
          h = g.G;
        if (Le(h, h[L] | 0, ai, We(g, ji, 6)) !== void 0) throw Error();
      }
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  }
  var k;
  if (a) {
    f = {};
    g = I(ef(a, ii, 2));
    h = g.next();
    try {
      for (; !h.done; h = g.next()) {
        var l = h.value,
          p = nf(l, 1).toString();
        switch (Xe(l, ji)) {
          case 3:
            f[p] = lf(l, We(l, ji, 3));
            break;
          case 2:
            f[p] = oi(nf(l, We(l, ji, 2)));
            break;
          case 4:
            c = void 0;
            e = l;
            var q = We(l, ji, 4),
              r = void 0;
            r = r === void 0 ? 0 : r;
            var x = (c = Ge(e, q, void 0, void 0, xd)) != null ? c : r;
            f[p] = x;
            break;
          case 5:
            f[p] = of(l, We(l, ji, 5));
            break;
          case 6:
            f[p] = cf(l, ai, We(l, ji, 6), void 0);
            break;
          case 8:
            var y = bf(l, gi, We(l, ji, 8));
            switch (Xe(y, hi)) {
              case 1:
                f[p] = of(y, We(y, hi, 1));
                break;
              default:
                throw Error("V`" + Xe(y, hi));
            }
            break;
          default:
            throw Error("V`" + Xe(l, ji));
        }
      }
    } finally {
      h && !h.done && (k = g.return) && k.call(g);
    }
    k = f;
  } else k = {};
  this.j = k;
  this.v = a ? a.Id() : null;
}
function ti(a, c) {
  return c.phase === 1 || (a.o && !(c.key in a.j)) ? c.defaultValue : c.ctor(a.j[c.key]);
}
si.prototype.Id = w("v");
function ui(a) {
  this.G = M(a);
}
F(ui, Q);
var vi = new di();
var wi = new ci("45723104");
var xi = new ci("45765314");
function yi(a) {
  if (!a) return "";
  if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
  a.indexOf("blob:") === 0 && (a = a.substring(5));
  a = a.split("#")[0].split("?")[0];
  a = a.toLowerCase();
  a.indexOf("//") == 0 && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var c = a.substring(a.indexOf("://") + 3),
    e = c.indexOf("/");
  e != -1 && (c = c.substring(0, e));
  e = a.substring(0, a.indexOf("://"));
  if (!e) throw Error("W`" + a);
  if (
    e !== "http" &&
    e !== "https" &&
    e !== "chrome-extension" &&
    e !== "moz-extension" &&
    e !== "file" &&
    e !== "android-app" &&
    e !== "chrome-search" &&
    e !== "chrome-untrusted" &&
    e !== "chrome" &&
    e !== "app" &&
    e !== "devtools"
  )
    throw Error("X`" + e);
  a = "";
  var f = c.indexOf(":");
  if (f != -1) {
    var g = c.substring(f + 1);
    c = c.substring(0, f);
    if ((e === "http" && g !== "80") || (e === "https" && g !== "443")) a = ":" + g;
  }
  return e + "://" + c + a;
}
function zi(a) {
  this.G = M(a);
}
F(zi, Q);
var Ai = (function (a) {
  return function () {
    return a[vc] || (a[vc] = Td(a));
  };
})(zi);
var Bi =
  typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function"
    ? function (a) {
        return a && AsyncContext.Snapshot.wrap(a);
      }
    : ba();
function Ci(a, c) {
  this.v = a;
  this.A = c;
  this.o = 0;
  this.j = null;
}
Ci.prototype.get = function () {
  if (this.o > 0) {
    this.o--;
    var a = this.j;
    this.j = a.next;
    a.next = null;
  } else a = this.v();
  return a;
};
function Di(a, c) {
  a.A(c);
  a.o < 100 && (a.o++, (c.next = a.j), (a.j = c));
}
var Ei = [],
  Fi = [],
  Gi = false;
function Hi(a) {
  Ei[Ei.length] = a;
  if (Gi) for (var c = 0; c < Fi.length; c++) a(Sa(Fi[c].j, Fi[c]));
}
function Ii(a) {
  a = Ji(a);
  a = Bi(a);
  Ki || (Ki = Li());
  Ki(a);
}
var Ki;
function Li() {
  if (typeof MessageChannel !== "undefined") {
    var a = new MessageChannel(),
      c = {},
      e = c;
    a.port1.onmessage = function () {
      if (c.next !== void 0) {
        c = c.next;
        var f = c.xb;
        c.xb = null;
        f();
      }
    };
    return function (f) {
      e.next = { xb: f };
      e = e.next;
      a.port2.postMessage(0);
    };
  }
  return function (f) {
    K.setTimeout(f, 0);
  };
}
function Ji(a) {
  return a;
}
Hi(function (a) {
  Ji = a;
});
function Mi() {
  this.o = this.j = null;
}
Mi.prototype.add = function (a, c) {
  var e = Ni.get();
  e.set(a, c);
  this.o ? (this.o.next = e) : (this.j = e);
  this.o = e;
};
Mi.prototype.remove = function () {
  var a = null;
  this.j && ((a = this.j), (this.j = this.j.next), this.j || (this.o = null), (a.next = null));
  return a;
};
var Ni = new Ci(
  function () {
    return new Oi();
  },
  function (a) {
    return a.reset();
  },
);
function Oi() {
  this.next = this.scope = this.j = null;
}
Oi.prototype.set = function (a, c) {
  this.j = a;
  this.scope = c;
  this.next = null;
};
Oi.prototype.reset = function () {
  this.next = this.scope = this.j = null;
};
var Pi,
  Qi = false,
  Ri = new Mi();
function Si(a, c) {
  Pi || Ti();
  Qi || (Pi(), (Qi = true));
  Ri.add(a, c);
}
function Ti() {
  var a = Promise.resolve(void 0);
  Pi = function () {
    a.then(Ui);
  };
}
function Ui() {
  for (var a; (a = Ri.remove()); ) {
    try {
      a.j.call(a.scope);
    } catch (c) {
      $a(c);
    }
    Di(Ni, a);
  }
  Qi = false;
}
function Vi() {}
function Wi(a) {
  var c = c || 0;
  return function () {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
}
function Xi(a) {
  if (!a) return false;
  try {
    return !!a.$goog_Thenable;
  } catch (c) {
    return false;
  }
}
function Yi(a) {
  this.j = 0;
  this.C = void 0;
  this.A = this.o = this.v = null;
  this.B = this.F = false;
  if (a != Vi)
    try {
      var c = this;
      a.call(
        void 0,
        function (e) {
          Zi(c, 2, e);
        },
        function (e) {
          Zi(c, 3, e);
        },
      );
    } catch (e) {
      Zi(this, 3, e);
    }
}
function $i() {
  this.next = this.v = this.o = this.B = this.j = null;
  this.A = false;
}
$i.prototype.reset = function () {
  this.v = this.o = this.B = this.j = null;
  this.A = false;
};
var aj = new Ci(
  function () {
    return new $i();
  },
  function (a) {
    a.reset();
  },
);
function bj(a, c, e) {
  var f = aj.get();
  f.B = a;
  f.o = c;
  f.v = e;
  return f;
}
function cj(a) {
  if (a instanceof Yi) return a;
  var c = new Yi(Vi);
  Zi(c, 2, a);
  return c;
}
function dj() {
  var a = Error("Db");
  return new Yi(function (c, e) {
    e(a);
  });
}
function ej(a, c, e) {
  fj(a, c, e, null) || Si(Ta(c, a));
}
function gj(a) {
  return new Yi(function (c) {
    var e = a.length,
      f = [];
    if (e)
      for (
        var g = function (l, p, q) {
            e--;
            f[l] = p ? { ke: true, value: q } : { ke: false, reason: q };
            e == 0 && c(f);
          },
          h,
          k = 0;
        k < a.length;
        k++
      ) {
        h = a[k];
        ej(h, Ta(g, k, true), Ta(g, k, false));
      }
    else c(f);
  });
}
Yi.prototype.then = function (a, c, e) {
  return hj(
    this,
    Bi(typeof a === "function" ? a : null),
    Bi(typeof c === "function" ? c : null),
    e,
  );
};
Yi.prototype.$goog_Thenable = true;
function ij(a, c) {
  c = Bi(c);
  c = bj(c, c);
  c.A = true;
  jj(a, c);
}
D = Yi.prototype;
D.Sa = function (a, c) {
  return hj(this, null, Bi(a), c);
};
D.catch = Yi.prototype.Sa;
D.cancel = function (a) {
  if (this.j == 0) {
    var c = new kj(a);
    Si(function () {
      lj(this, c);
    }, this);
  }
};
function lj(a, c) {
  if (a.j == 0)
    if (a.v) {
      var e = a.v;
      if (e.o) {
        for (
          var f = 0, g = null, h = null, k = e.o;
          k && (k.A || (f++, k.j == a && (g = k), !(g && f > 1)));
          k = k.next
        )
          g || (h = k);
        g &&
          (e.j == 0 && f == 1
            ? lj(e, c)
            : (h ? ((f = h), f.next == e.A && (e.A = f), (f.next = f.next.next)) : mj(e),
              nj(e, g, 3, c)));
      }
      a.v = null;
    } else Zi(a, 3, c);
}
function jj(a, c) {
  a.o || (a.j != 2 && a.j != 3) || oj(a);
  a.A ? (a.A.next = c) : (a.o = c);
  a.A = c;
}
function hj(a, c, e, f) {
  var g = bj(null, null, null);
  g.j = new Yi(function (h, k) {
    g.B = c
      ? function (l) {
          try {
            var p = c.call(f, l);
            h(p);
          } catch (q) {
            k(q);
          }
        }
      : h;
    g.o = e
      ? function (l) {
          try {
            var p = e.call(f, l);
            p === void 0 && l instanceof kj ? k(l) : h(p);
          } catch (q) {
            k(q);
          }
        }
      : k;
  });
  g.j.v = a;
  jj(a, g);
  return g.j;
}
D.Ne = function (a) {
  this.j = 0;
  Zi(this, 2, a);
};
D.Oe = function (a) {
  this.j = 0;
  Zi(this, 3, a);
};
function Zi(a, c, e) {
  a.j == 0 &&
    (a === e && ((c = 3), (e = new TypeError("Y"))),
    (a.j = 1),
    fj(e, a.Ne, a.Oe, a) ||
      ((a.C = e), (a.j = c), (a.v = null), oj(a), c != 3 || e instanceof kj || pj(a, e)));
}
function fj(a, c, e, f) {
  if (a instanceof Yi) return (jj(a, bj(c || Vi, e || null, f)), true);
  if (Xi(a)) return (a.then(c, e, f), true);
  if (Ma(a))
    try {
      var g = a.then;
      if (typeof g === "function") return (qj(a, g, c, e, f), true);
    } catch (h) {
      return (e.call(f, h), true);
    }
  return false;
}
function qj(a, c, e, f, g) {
  function h(p) {
    l || ((l = true), f.call(g, p));
  }
  function k(p) {
    l || ((l = true), e.call(g, p));
  }
  var l = false;
  try {
    c.call(a, k, h);
  } catch (p) {
    h(p);
  }
}
function oj(a) {
  a.F || ((a.F = true), Si(a.de, a));
}
function mj(a) {
  var c = null;
  a.o && ((c = a.o), (a.o = c.next), (c.next = null));
  a.o || (a.A = null);
  return c;
}
D.de = function () {
  for (var a; (a = mj(this)); ) nj(this, a, this.j, this.C);
  this.F = false;
};
function nj(a, c, e, f) {
  if (e == 3 && c.o && !c.A) for (; a && a.B; a = a.v) a.B = false;
  if (c.j) {
    c.j.v = null;
    rj(c, e, f);
  } else
    try {
      c.A ? c.B.call(c.v) : rj(c, e, f);
    } catch (g) {
      sj.call(null, g);
    }
  Di(aj, c);
}
function rj(a, c, e) {
  c == 2 ? a.B.call(a.v, e) : a.o && a.o.call(a.v, e);
}
function pj(a, c) {
  a.B = true;
  Si(function () {
    a.B && sj.call(null, c);
  });
}
var sj = $a;
function kj(a) {
  Ya.call(this, a);
  this.v = false;
}
Xa(kj, Ya);
kj.prototype.name = "cancel"; /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
function tj(a, c) {
  this.B = [];
  this.R = a;
  this.J = c || null;
  this.A = this.j = false;
  this.v = void 0;
  this.I = this.S = this.C = false;
  this.F = 0;
  this.o = null;
  this.D = 0;
}
D = tj.prototype;
D.cancel = function (a) {
  if (this.j) this.v instanceof tj && this.v.cancel();
  else {
    if (this.o) {
      var c = this.o;
      delete this.o;
      a ? c.cancel(a) : (c.D--, c.D <= 0 && c.cancel());
    }
    this.R ? this.R.call(this.J, this) : (this.I = true);
    this.j || this.hb(new uj(this));
  }
};
D.xd = function (a, c) {
  this.C = false;
  vj(this, a, c);
};
function vj(a, c, e) {
  a.j = true;
  a.v = e;
  a.A = !c;
  wj(a);
}
function xj(a) {
  if (a.j) {
    if (!a.I) throw new yj(a);
    a.I = false;
  }
}
D.ma = function (a) {
  xj(this);
  vj(this, true, a);
};
D.hb = function (a) {
  xj(this);
  vj(this, false, a);
};
function zj(a) {
  throw a;
}
function Aj(a, c, e) {
  return Bj(a, c, null, e);
}
function Cj(a, c) {
  return Bj(a, null, c);
}
function Dj(a, c, e) {
  Bj(
    a,
    c,
    function (f) {
      var g = c.call(this, f);
      if (g === void 0) throw f;
      return g;
    },
    e,
  );
}
function Bj(a, c, e, f) {
  var g = a.j;
  g || (c === e ? (c = e = Bi(c)) : ((c = Bi(c)), (e = Bi(e))));
  a.B.push([c, e, f]);
  g && wj(a);
  return a;
}
D.then = function (a, c, e) {
  var f,
    g,
    h = new Yi(function (k, l) {
      g = k;
      f = l;
    });
  Bj(
    this,
    g,
    function (k) {
      k instanceof uj ? h.cancel() : f(k);
      return Ej;
    },
    this,
  );
  return h.then(a, c, e);
};
tj.prototype.$goog_Thenable = true;
function Fj(a) {
  return zb(a.B, function (c) {
    return typeof c[1] === "function";
  });
}
var Ej = {};
function wj(a) {
  if (a.F && a.j && Fj(a)) {
    var c = a.F,
      e = Gj[c];
    e && (K.clearTimeout(e.j), delete Gj[c]);
    a.F = 0;
  }
  a.o && (a.o.D--, delete a.o);
  c = a.v;
  for (var f = (e = false); a.B.length && !a.C; ) {
    var g = a.B.shift(),
      h = g[0],
      k = g[1];
    g = g[2];
    if ((h = a.A ? k : h))
      try {
        var l = h.call(g || a.J, c);
        l === Ej && (l = void 0);
        l !== void 0 && ((a.A = a.A && (l == c || l instanceof Error)), (a.v = c = l));
        if (Xi(c) || (typeof K.Promise === "function" && c instanceof K.Promise)) {
          f = true;
          a.C = true;
        }
      } catch (p) {
        {
          c = p;
          a.A = true;
          Fj(a) || (e = true);
        }
      }
  }
  a.v = c;
  f &&
    ((l = Sa(a.xd, a, true)),
    (f = Sa(a.xd, a, false)),
    c instanceof tj ? (Bj(c, l, f), (c.S = true)) : c.then(l, f));
  e && ((c = new Hj(c)), (Gj[c.j] = c), (a.F = c.j));
}
function Ij(a) {
  var c = new tj();
  c.ma(a);
  return c;
}
function Jj(a) {
  var c = new tj();
  a.then(
    function (e) {
      c.ma(e);
    },
    function (e) {
      c.hb(e);
    },
  );
  return c;
}
function yj() {
  Ya.call(this);
}
Xa(yj, Ya);
yj.prototype.message = "Deferred has already fired";
yj.prototype.name = "AlreadyCalledError";
function uj() {
  Ya.call(this);
}
Xa(uj, Ya);
uj.prototype.message = "Deferred was canceled";
uj.prototype.name = "CanceledError";
function Hj(a) {
  this.j = K.setTimeout(Sa(this.v, this), 0);
  this.o = a;
}
Hj.prototype.v = function () {
  delete Gj[this.j];
  zj(this.o);
};
var Gj = {};
function Kj(a, c) {
  this.o = c;
  this.j = a;
  Xg(this);
  Yg(this, Error(this));
}
F(Kj, eh);
fa.Object.defineProperties(Kj.prototype, {
  error: {
    configurable: true,
    enumerable: true,
    get: function () {
      var a = Error(),
        c = this.L;
      a.fileName = c.fileName;
      a.lineNumber = c.lineNumber;
      a.columnNumber = c.columnNumber;
      a.message = c.message;
      a.name = c.name;
      a.stack = c.stack;
      a.toSource = c.toSource;
      a.cause = c.cause;
      for (var e in c) e.indexOf("__java$") != 0 && (a[e] = c[e]);
      return a;
    },
  },
});
function Lj(a) {
  return new Yi(function (c, e) {
    Mj(
      a,
      function (f) {
        c(f);
      },
      function (f) {
        f || ((f = new Kj("Z", null)), Yg(f, Error(f)));
        e(f);
      },
    );
  });
}
function Nj(a, c) {
  if (!a) throw jh(S(c)).L;
}
function Oj(a) {
  if (a == null) throw ah().L;
  return a;
}
function Pj(a) {
  if (a == null) return "null";
  try {
    return a.toString();
  } catch (q) {
    var c = $g(q);
    if (c instanceof dh) {
      a = S(Gg(Rh(a))) + String.fromCharCode(64) + S((Oh(a) >>> 0).toString(16));
      var e = new Qj(),
        f = (Rj(), Sj),
        g;
      Tj ? (g = false) : (g = false);
      if (g) {
        var h = "Exception during lenientFormat for " + S(a);
        g = new Uj();
        g.j = null;
        g.o = f;
        g.v = h;
        for (g.j = c; e; ) {
          e = Rg([0], Vj, Wj);
          for (f = 0; f < e.length; f++) {
            var k = e[f];
            h = g;
            var l = typeof console === "undefined" ? null : new Xj(),
              p;
            if ((p = l)) {
              p = h;
              p = (k.j ? k.j : (Rj(), Yj)).ta() <= p.o.ta();
            }
            p &&
              ((k = h.o.ta()),
              (k =
                k >= (Rj(), Zj).ta()
                  ? "error"
                  : k >= (Rj(), Sj).ta()
                    ? "warn"
                    : k >= (Rj(), ak).ta()
                      ? "info"
                      : "log"),
              console[k].call(console, h.v),
              h.j && bk(l, k, h.j, "Exception: ", true));
          }
          e = null;
        }
      }
      return "<" + S(a) + " threw " + S(Gg(Rh(c))) + ">";
    }
    throw c.L;
  }
}
function ck() {}
var Yj, ak, Zj, Sj;
F(ck, R);
ck.prototype.j = A("DUMMY");
ck.prototype.ta = A(-1);
ck.prototype.toString = function () {
  return this.j();
};
function Rj() {
  Rj = u();
  Yj = new dk();
  ak = new ek();
  Zj = new fk();
  Sj = new gk();
}
function dk() {}
F(dk, ck);
dk.prototype.j = A("ALL");
dk.prototype.ta = A(-2147483648);
function ek() {}
F(ek, ck);
ek.prototype.j = A("INFO");
ek.prototype.ta = A(800);
function fk() {}
F(fk, ck);
fk.prototype.j = A("SEVERE");
fk.prototype.ta = A(1e3);
function gk() {}
F(gk, ck);
gk.prototype.j = A("WARNING");
gk.prototype.ta = A(900);
function Uj() {}
F(Uj, R);
function Vj() {}
F(Vj, R);
function Wj(a) {
  return a instanceof Vj;
}
function Xj() {}
F(Xj, R);
function bk(a, c, e, f, g) {
  (!g && console.groupCollapsed
    ? console.groupCollapsed
    : console.group
      ? console.group
      : console.log
  ).call(console, S(f) + S(e.toString()));
  f = e.L;
  console[c].call(console, (f && f.stack) || "");
  (f = e.o) && bk(a, c, f, "Caused by: ", false);
  var h;
  e.F ? (h = e.F.j(Rg([0], Vg, ch))) : (h = Rg([0], Vg, ch));
  e = h;
  for (h = 0; h < e.length; h++) bk(a, c, e[h], "Suppressed: ", false);
  console.groupEnd && console.groupEnd.call(console);
}
function Qj() {}
F(Qj, R);
var Tj = false;
function hk() {
  hk = u();
  ik = Error.stackTraceLimit;
}
var ik = 0;
function jk(a) {
  Ii(function () {
    a.C && !a.H && kk && kk(new Kj("XDeferred swallowed an error that was never read.", a.C));
  });
}
function lk() {}
F(lk, R);
function mk() {
  this.aa = this.F = false;
}
var nk = [];
F(mk, R);
mk.prototype.dispose = function () {
  if (this.F) var a = null;
  else {
    this.F = true;
    a = this.D ? this.D : nk;
    this.D = null;
  }
  if (a && (this.O(), a.length != 0)) for (var c = 0; c < a.length; c++) a[c].dispose();
};
mk.prototype.Oa = w("F");
function ok(a, c) {
  !c || c.Oa() ? (a = null) : a.F ? (a = c) : (a.D || (a.D = []), a.D.push(c), (a = null));
  a && a.dispose();
}
mk.prototype.O = function () {
  this.aa = true;
};
mk.prototype.toString = function () {
  return R.prototype.toString.call(this) || "";
};
function pk(a) {
  a.F = false;
  a.aa = false;
}
function qk() {
  rk();
  mk.call(this);
  this.j = 0;
  this.H = this.v = this.o = false;
  pk(this);
  this.j = 1;
  this.v = this.o = false;
  this.K = [];
  this.B = [];
}
var kk;
F(qk, mk);
function sk(a, c) {
  hk();
  100 > Error.stackTraceLimit && (Error.stackTraceLimit = 100);
  Nj(a.j != 4, "$");
  Nj(a.j == 1, "aa");
  Error.stackTraceLimit = ik;
  var e = new lk();
  e.j = c;
  a.I = e;
  a.j = 2;
  tk(a, true);
}
function uk(a, c) {
  Nj(a.j != 4, "$");
  Nj(a.j == 1, "aa");
  a.C = c;
  a.j = 3;
  jk(a);
  tk(a, false);
}
function Mj(a, c, e) {
  Nj(a.j != 4, "ba");
  if (a.j != 1 && a.j != 2 && a.j != 3) throw jh("ca`" + S(vk(a))).L;
  if (a.j == 1) {
    c && a.K.push(c);
    e && a.B.push(e);
  } else {
    if (a.j != 2 && a.j != 3) throw jh("da`" + S(vk(a))).L;
    if (a.o) {
      if (a.v) throw kh("ea`" + S(vk(a)), a.A).L;
      throw kh("fa`" + S(vk(a)), a.A).L;
    }
    a.o = true;
    a.v = true;
    try {
      a.j == 2 && c ? c(a.I.j) : a.j == 3 && e && ((a.H = true), e(a.C));
    } catch (g) {
      var f = $g(g);
      wk(f);
      a.A || (a.A = f);
      throw f.L;
    } finally {
      a.v = false;
    }
    a.o = false;
  }
}
function vk(a) {
  if (a.A) {
    var c = new Hh();
    c.j = "";
    for (var e = a.A; e; e = e.o)
      e.L && (c.j.length > 0 && Ih(c, "\nCaused by: "), Ih(c, e.L.stack));
    c = c.toString();
  } else c = "<none>";
  return "[" + a.j + ", " + a.v + ", " + a.o + ", " + S(c) + "]";
}
qk.prototype.transform = function (a) {
  var c = new qk();
  Mj(
    this,
    function (e) {
      try {
        var f = a(e);
      } catch (g) {
        e = $g(g);
        uk(c, e);
        return;
      }
      sk(c, f);
    },
    function (e) {
      uk(c, e);
    },
  );
  return c;
};
function xk(a, c) {
  var e = new qk();
  Mj(
    a.transform(c),
    function (f) {
      Mj(
        f,
        function (g) {
          sk(e, g);
        },
        function (g) {
          uk(e, g);
        },
      );
    },
    function (f) {
      uk(e, f);
    },
  );
  return e;
}
qk.prototype.O = function () {
  this.C = this.I = null;
  this.j = 4;
  this.K.length = 0;
  this.B.length = 0;
  mk.prototype.O.call(this);
};
function tk(a, c) {
  a.o = true;
  a.v = true;
  try {
    if (c) for (var e = a.K, f = 0; f < e.length; f++) (0, e[f])(a.I.j);
    else for (a.B.length != 0 && (a.H = true), f = a.B, e = 0; e < f.length; e++) (0, f[e])(a.C);
  } catch (h) {
    var g = $g(h);
    wk(g);
    a.A || (a.A = g);
    throw g.L;
  } finally {
    a.v = false;
  }
  a.o = false;
  a.K.length = 0;
  a.B.length = 0;
}
function yk(a) {
  rk();
  kk = a;
}
function rk() {
  rk = u();
  kk = u();
}
function zk(a) {
  if (a == null) return ((a = new Vg()), Xg(a), Yg(a, Error(a)), a);
  if (ch(a)) return a;
  if (a instanceof Error) return $g(a);
  throw Mh("ha").L;
}
function Ak(a, c) {
  if (c == null)
    for (c = 0; c < a.length; c = (c + 1) | 0) {
      if (a[c] == null) return c;
    }
  else for (var e = 0; e < a.length; e = (e + 1) | 0) if (Ch(c, a[e])) return e;
  return -1;
}
function Bk(a) {
  if (a == null)
    throw ((a = new Ah()), Wg(a, "can't identity hash null"), Yg(a, new TypeError(a)), a.L);
  return ":" + Oh(a);
}
function Ck(a) {
  if ("number" === typeof a) a = zh(a);
  else {
    var c;
    a instanceof lh ? (c = a.Y) : (c = a.ta());
    a = c;
  }
  return a;
}
function Dk(a, c) {
  for (var e = 0, f = c.length; e < f; e = (e + 1) | 0) a.push(c[e]);
}
function Ek(a) {
  var c = K.onerror;
  K.onerror = function (e, f, g, h, k) {
    c && c(e, f, g, h, k);
    a({ message: e, fileName: f, line: g, lineNumber: g, Qf: h, error: k });
    return true;
  };
}
function Fk(a) {
  var c = Ia("window.location.href");
  a == null && (a = 'Unknown Error of type "null/undefined"');
  if (typeof a === "string")
    return {
      message: a,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: c,
      stack: "Not available",
    };
  var e = false;
  try {
    var f = a.lineNumber || a.line || "Not available";
  } catch (h) {
    {
      f = "Not available";
      e = true;
    }
  }
  try {
    var g = a.fileName || a.filename || a.sourceURL || K.$googDebugFname || c;
  } catch (h) {
    {
      g = "Not available";
      e = true;
    }
  }
  c = Gk(a);
  return !e && a.lineNumber && a.fileName && a.stack && a.message && a.name
    ? { message: a.message, name: a.name, lineNumber: a.lineNumber, fileName: a.fileName, stack: c }
    : ((e = a.message),
      e == null &&
        ((e =
          a.constructor && a.constructor instanceof Function
            ? 'Unknown Error of type "' +
              (a.constructor.name ? a.constructor.name : Hk(a.constructor)) +
              '"'
            : "Unknown Error of unknown type"),
        typeof a.toString === "function" &&
          Object.prototype.toString !== a.toString &&
          (e += ": " + a.toString())),
      {
        message: e,
        name: a.name || "UnknownError",
        lineNumber: f,
        fileName: g,
        stack: c || "Not available",
      });
}
function Gk(a, c) {
  c || (c = {});
  c[Ik(a)] = true;
  var e = a.stack || "",
    f = a.cause;
  f &&
    !c[Ik(f)] &&
    ((e += "\nCaused by: "),
    (f.stack && f.stack.indexOf(f.toString()) == 0) ||
      (e += typeof f === "string" ? f : f.message + "\n"),
    (e += Gk(f, c)));
  a = a.errors;
  if (Array.isArray(a)) {
    f = 1;
    var g;
    for (g = 0; g < a.length && !(f > 4); g++)
      c[Ik(a[g])] ||
        ((e += "\nInner error " + f++ + ": "),
        (a[g].stack && a[g].stack.indexOf(a[g].toString()) == 0) ||
          (e += typeof a[g] === "string" ? a[g] : a[g].message + "\n"),
        (e += Gk(a[g], c)));
    g < a.length && (e += "\n... " + (a.length - g) + " more inner errors");
  }
  return e;
}
function Ik(a) {
  var c = "";
  typeof a.toString === "function" && (c = "" + a);
  return c + a.stack;
}
function Jk(a, c) {
  a instanceof Error || ((a = Error(a)), Error.captureStackTrace && Error.captureStackTrace(a, Jk));
  a.stack || (a.stack = Kk(Jk));
  if (c) {
    for (var e = 0; a["message" + e]; ) ++e;
    a["message" + e] = String(c);
  }
  return a;
}
function Lk(a, c) {
  a = Jk(a);
  if (c) for (var e in c) kc(a, e, c[e]);
  return a;
}
function Kk(a) {
  var c = Error();
  if (Error.captureStackTrace) {
    Error.captureStackTrace(c, a || Kk);
    c = String(c.stack);
  } else {
    try {
      throw c;
    } catch (e) {
      c = e;
    }
    c = (c = c.stack) ? String(c) : null;
  }
  c || (c = Mk(a || arguments.callee.caller, []));
  return c;
}
function Mk(a, c) {
  var e = [];
  if (xb(c, a) >= 0) e.push("[...circular reference...]");
  else if (a && c.length < 50) {
    e.push(Hk(a) + "(");
    for (var f = a.arguments, g = 0; f && g < f.length; g++) {
      g > 0 && e.push(", ");
      var h = f[g];
      switch (typeof h) {
        case "object":
          h = h ? "object" : "null";
          break;
        case "string":
          break;
        case "number":
          h = String(h);
          break;
        case "boolean":
          h = h ? "true" : "false";
          break;
        case "function":
          h = (h = Hk(h)) ? h : "[fn]";
          break;
        default:
          h = typeof h;
      }
      h.length > 40 && (h = h.slice(0, 40) + "...");
      e.push(h);
    }
    c.push(a);
    e.push(")\n");
    try {
      e.push(Mk(a.caller, c));
    } catch (k) {
      e.push("[exception trying to get caller]\n");
    }
  } else a ? e.push("[...long stack...]") : e.push("[end]");
  return e.join("");
}
function Hk(a) {
  if (Nk[a]) return Nk[a];
  a = String(a);
  if (!Nk[a]) {
    var c = /function\s+([^\(]+)/m.exec(a);
    Nk[a] = c ? c[1] : "[Anonymous]";
  }
  return Nk[a];
}
var Nk = {};
function Ok(a) {
  var c;
  c && a.length > 30
    ? (c > 30 && (c = 30), (a = a.substring(0, 30 - c) + "..." + a.substring(a.length - c)))
    : a.length > 30 && (a = a.substring(0, 15) + "..." + a.substring(a.length - 15));
  return a;
}
function Pk(a) {
  return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (c, e, f) {
    return e + f.toUpperCase();
  });
}
function Qk(a, c, e, f, g, h, k) {
  var l = "";
  a && (l += a + ":");
  e && ((l += "//"), c && (l += c + "@"), (l += e), f && (l += ":" + f));
  g && (l += g);
  h && (l += "?" + h);
  k && (l += "#" + k);
  return l;
}
var Rk = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
);
function Sk(a) {
  return a ? decodeURI(a) : a;
}
function Tk(a, c) {
  if (a) {
    a = a.split("&");
    for (var e = 0; e < a.length; e++) {
      var f = a[e].indexOf("="),
        g = null;
      if (f >= 0) {
        var h = a[e].substring(0, f);
        g = a[e].substring(f + 1);
      } else h = a[e];
      c(h, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "");
    }
  }
}
function Uk(a, c) {
  if (!c) return a;
  var e = a.indexOf("#");
  e < 0 && (e = a.length);
  var f = a.indexOf("?");
  if (f < 0 || f > e) {
    f = e;
    var g = "";
  } else g = a.substring(f + 1, e);
  a = [a.slice(0, f), g, a.slice(e)];
  e = a[1];
  a[1] = c ? (e ? e + "&" + c : c) : e;
  return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
}
function Vk(a, c, e) {
  if (Array.isArray(c)) for (var f = 0; f < c.length; f++) Vk(a, String(c[f]), e);
  else c != null && e.push(a + (c === "" ? "" : "=" + encodeURIComponent(String(c))));
}
function Wk(a, c) {
  var e = [];
  for (c = c || 0; c < a.length; c += 2) Vk(a[c], a[c + 1], e);
  return e.join("&");
}
function Xk(a) {
  var c = [],
    e;
  for (e in a) Vk(e, a[e], c);
  return c.join("&");
}
function Yk(a, c) {
  var e = arguments.length == 2 ? Wk(arguments[1], 0) : Wk(arguments, 1);
  return Uk(a, e);
}
function Zk(a, c, e) {
  e = e != null ? "=" + encodeURIComponent(String(e)) : "";
  return Uk(a, c + e);
}
function $k(a, c, e, f) {
  for (var g = e.length; (c = a.indexOf(e, c)) >= 0 && c < f; ) {
    var h = a.charCodeAt(c - 1);
    if (h == 38 || h == 63)
      if (((h = a.charCodeAt(c + g)), !h || h == 61 || h == 38 || h == 35)) return c;
    c += g + 1;
  }
  return -1;
}
var al = /#|$/;
function bl(a, c) {
  var e = a.search(al),
    f = $k(a, 0, c, e);
  if (f < 0) return null;
  var g = a.indexOf("&", f);
  if (g < 0 || g > e) g = e;
  f += c.length + 1;
  return decodeURIComponent(a.slice(f, g !== -1 ? g : 0).replace(/\+/g, " "));
}
var cl = /[?&]($|#)/;
function dl(a, c) {
  for (var e = a.search(al), f = 0, g, h = []; (g = $k(a, f, c, e)) >= 0; ) {
    h.push(a.substring(f, g));
    f = Math.min(a.indexOf("&", g) + 1 || e, e);
  }
  h.push(a.slice(f));
  return h.join("").replace(cl, "$1");
}
var fl;
fl = function (a) {
  if (!a) return a;
  a = (typeof a === "object" ? a.href : a).match(Rk);
  var c = a[1];
  return c !== "http" && c !== "https" ? c || "" : Qk(a[1], "", a[3], a[4], a[5], a[6], "");
};
function gl(a) {
  a && typeof a.dispose == "function" && a.dispose();
}
function hl(a) {
  for (var c = 0, e = arguments.length; c < e; ++c) {
    var f = arguments[c];
    La(f) ? hl.apply(null, f) : gl(f);
  }
}
function T() {
  this.K = this.K;
  this.F = this.F;
}
T.prototype.K = false;
T.prototype.Oa = w("K");
T.prototype.dispose = function () {
  this.K || ((this.K = true), this.O());
};
T.prototype[Symbol.dispose] = function () {
  this.dispose();
};
function il(a, c) {
  c = Ta(gl, c);
  a.K ? c() : (a.F || (a.F = []), a.F.push(c));
}
T.prototype.O = function () {
  if (this.F) for (; this.F.length; ) this.F.shift()();
};
function jl() {
  T.call(this);
  this.o = 0;
  this.j = null;
}
F(jl, T);
jl.prototype.init = function () {
  this.j = [];
};
var kl = new jl();
function ll(a) {
  this.e = a;
}
function wk(a) {
  if (a) {
    var c = a.j;
    a = a.L;
    if (a instanceof Object && !Object.isFrozen(a)) {
      var e = fl(a.fileName || a.filename || a.sourceURL || K.$googDebugFname || location.href);
      try {
        a.fileName = e;
      } catch (f) {}
    }
    if (kl.o >= 3) throw Error("ka`" + c);
    kl.o++;
    try {
      kl.Oa() ||
        a instanceof uj ||
        a instanceof kj ||
        (a == null ? void 0 : a.name) === "CanceledError" ||
        (kl.j && kl.j.length < 10 && kl.j.push(new ll(a)));
    } finally {
      kl.o--;
    }
  }
}
function ml(a) {
  if (a == null) return "null";
  var c = typeof a;
  return c === "object" ? (Array.isArray(a) ? "array" : c) : c;
}
function nl(a, c, e) {
  a[c] = e !== void 0 ? e : null;
}
function ol(a) {
  for (var c in a) return false;
  return true;
}
function pl(a, c, e) {
  a[c] = Tg(e) ? e.j : e != null ? e : null;
}
function ql(a, c) {
  for (var e in c) {
    var f = c[e];
    a[e] = f != null ? f : null;
  }
}
function rl(a) {
  var c = {},
    e;
  for (e in a) c[e] = a[e];
  return c;
}
function sl(a) {
  var c = new qk();
  sk(c, a);
  return c;
}
var tl;
function ul() {
  if (!tl) {
    var a = new vl(null);
    tl = function () {
      return a;
    };
  }
  var c;
  return ((c = tl), c());
}
function wl() {}
F(wl, R);
function xl(a, c) {
  if (Eg(a, c)) return true;
  if (!a || !c) return false;
  var e = a.length;
  if (e != c.length) return false;
  for (var f = 0; f < e; f = (f + 1) | 0) if (!yl(a, c, f)) return false;
  return true;
}
function yl(a, c, e) {
  var f = ml(a[e]),
    g = ml(c[e]);
  if (!Eg(f, g)) return false;
  switch (f) {
    case "null":
      return true;
    case "boolean":
      return a[e] == c[e];
    case "number":
      return a[e] == c[e];
    case "string":
      return Eg(a[e], c[e]);
    case "array":
      return xl(a[e], c[e]);
    case "object":
      return zl(a[e], c[e]);
    default:
      throw fh("ma`" + S(f)).L;
  }
}
function Al(a) {
  var c = new wl();
  c.j = [];
  for (var e = 0; e < a.length; e++) {
    var f = c.j,
      g = a[e];
    Tg(g) ? f.push(g.j) : f.push(g);
  }
  a = c.j;
  c.j = null;
  return a.concat([]);
}
function Bl(a) {
  for (var c = Array(a.length), e = 0; e < a.length; e = (e + 1) | 0) c[e] = a[e];
  return c;
}
function Cl(a, c, e) {
  var f = ml(a[e]),
    g = ml(c[e]);
  if (!Eg(f, g)) return false;
  switch (f) {
    case "null":
      return true;
    case "boolean":
      return a[e] == c[e];
    case "number":
      return a[e] == c[e];
    case "string":
      return Eg(a[e], c[e]);
    case "object":
      return zl(a[e], c[e]);
    case "array":
      return xl(a[e], c[e]);
    default:
      throw fh("na`" + S(f) + "`" + S(e)).L;
  }
}
function zl(a, c) {
  if (Eg(a, c)) return true;
  if (a == null || c == null) return false;
  var e = Object.keys(a).length,
    f = Object.keys(c).length;
  if (e != f) return false;
  for (f = 0; f < e; f = (f + 1) | 0) {
    var g = Object.keys(a)[f];
    if (!Cl(a, c, g)) return false;
  }
  return true;
}
function Dl() {}
F(Dl, R);
Dl.prototype.get = function () {
  if (this.o == null) {
    var a = K._docs_flag_initialData;
    this.o = a != null ? a : {};
  }
  return this.o;
};
Dl.prototype.j = function () {
  return this.get();
};
function vl(a) {
  this.j = new Dl();
  this.o = null;
  if (a != null)
    for (var c in a) {
      var e = c,
        f = a[c];
      if (this.o) throw jh("oa").L;
      var g = this.j.j();
      pl(g, e, f);
    }
}
F(vl, R);
vl.prototype.clear = function () {
  this.j = new Dl();
  this.o = null;
};
vl.prototype.get = function (a) {
  El(this, a);
  return this.j.j()[a];
};
function Fl(a, c) {
  a = a.j.j();
  return c in a;
}
function U(a, c) {
  a = a.get(c);
  return typeof a == "string" ? a == "true" || a == "1" : !!a;
}
function Gl(a, c) {
  El(a, c);
  if (!Fl(a, c) || a.get(c) == null) return NaN;
  try {
    var e = S(a.get(c));
    Ng ||
      (Ng = RegExp(
        "^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$",
      ));
    if (!Ng.test(e)) {
      var f = new Nh();
      Wg(f, "O`" + S(e));
      Yg(f, Error(f));
      throw f.L;
    }
    return parseFloat(e);
  } catch (h) {
    var g = $g(h);
    if (g instanceof Nh) return NaN;
    throw g.L;
  }
}
function Hl(a, c) {
  El(a, c);
  if (!Fl(a, c)) return "";
  a = a.get(c);
  if (a == null) return "";
  var e;
  if ((c = "number" === typeof a && ((e = a), true))) c = uh(e).equals(uh(e));
  var f;
  c ? (f = "" + uh(e)) : (f = S(a));
  return f;
}
function El(a, c) {
  if (a.o) {
    try {
      var e = a.j.j()[c];
    } catch (k) {
      var f = $g(k);
      if (f instanceof eh) e = "injection-failed";
      else throw f.L;
    }
    try {
      var g = Oj(a.o).j()[c];
    } catch (k) {
      var h = $g(k);
      if (h instanceof eh) g = "injection-failed";
      else throw h.L;
    }
    if (!Bh(e, g)) throw jh("pa").L;
  }
}
function Il(a, c, e) {
  this.o = this.C = false;
  this.v = a;
  this.j = {};
  this.A = {};
  this.C = true === e;
  this.o = !this.C;
  this.H = c;
}
F(Il, R);
Il.prototype.F = function () {
  return this.C || !ol(this.A);
};
function Jl(a, c) {
  a = Kl(a, c);
  if (a == null) return null;
  Wh(ml(a), "object");
  var e;
  return a instanceof Array && ((e = a), true) ? e.concat() : rl(a);
}
function Ll(a, c) {
  a = Ml(a, c);
  return a == null || a == 0 ? null : a;
}
function Ml(a, c) {
  a = Kl(a, c);
  return a == null ? null : a;
}
function Nl(a, c) {
  a = Kl(a, c);
  return a == null ? null : a.concat();
}
function Kl(a, c) {
  a = a.j[c];
  return a != null ? a : null;
}
function Ol(a, c, e, f) {
  if (e instanceof Array)
    return (
      U(a.H, "docs-anlpfdo") || Pl(e, [], U(a.H, "docs-anlpfdo")),
      Ql(e, [], U(a.H, "docs-anlpfdo")),
      Rl(e),
      (a.j[c] != null && xl(a.j[c], e)) ||
        ((e = true === f ? e : e.concat()),
        (a.j[c] = e ? e : null),
        a.o || (a.A[c] = e ? e : null)),
      a
    );
  if (
    Tg(e) || "string" === typeof e || "number" === typeof e || "boolean" === typeof e
      ? 0
      : Wh(ml(e), "object")
  )
    return (
      Ql(e, [], U(a.H, "docs-anlpfdo")),
      Sl(e),
      (a.j[c] != null && zl(a.j[c], e)) ||
        ((e = true === f ? e : rl(e)),
        (a.j[c] = e != null ? e : null),
        a.o || (a.A[c] = e != null ? e : null)),
      a
    );
  var g = a.j[c];
  if (g == null) f = e == null;
  else {
    var h;
    f = Tg(e) && ((h = e), true) ? Ch(g, h.j) : Ch(g, e);
  }
  f || (pl(a.j, c, e), a.o || pl(a.A, c, e));
  return a;
}
function V(a, c, e) {
  Ol(a, c, e, false);
}
Il.prototype.D = function () {
  this.A = {};
  this.C = false;
};
Il.prototype.I = A(null);
function Tl(a, c) {
  this.j = 0;
  this.o = a;
  this.j = c;
}
F(Tl, R);
function Sl(a) {
  for (var c in a) {
    if (!a.hasOwnProperty(c) || typeof c === "function") return false;
    var e = a[c];
    if (Ma(e) && !Array.isArray(e)) return Sl(e);
    if (Array.isArray(e)) return Rl(e);
  }
  return true;
}
function Rl(a) {
  for (var c = 0; c < a.length; c++) {
    if (Ma(a[c]) && !Array.isArray(a[c])) return Sl(a[c]);
    if (Array.isArray(a[c])) return Rl(a[c]);
  }
  return true;
}
function Pl(a, c, e) {
  c.push(a);
  for (var f = 0; f < a.length; f = (f + 1) | 0)
    if (Array.isArray(a[f])) {
      if (e) Ak(c, a[f]);
      else if (Ak(c, a[f]) >= 0) throw fh("ra").L;
      Pl(a[f], c, e);
    }
  Eg(a, c.pop());
}
function Ql(a, c, e) {
  c.push(a);
  var f;
  if (a instanceof Array && ((f = a), true)) {
    var g = f;
    for (f = 0; f < g.length; f++) {
      var h = g[f];
      if (h != null) {
        if (e) Ak(c, h);
        else if (Ak(c, h) >= 0) throw fh("ra").L;
        Ql(h, c, e);
      }
    }
  } else if (a instanceof Object && ((g = a), true))
    for (f = Object.keys(g), h = 0; h < f.length; h++) {
      var k = f[h];
      if (g[k] != null) {
        if (e) Ak(c, g[k]);
        else if (Ak(c, g[k]) >= 0) throw fh("ra").L;
        Ql(g[k], c, e);
      }
    }
  Eg(a, c.pop());
}
function Ul() {
  var a = a
    ? a
    : function (e) {
        return zh(Math.floor(Math.random() * e));
      };
  var c = (a(2147483647) >>> 0).toString(16);
  c = S("0".repeat(Math.max(0, (8 - c.length) | 0))) + S(c);
  a = (a(2147483647) >>> 0).toString(16);
  return S(a) + S(c);
}
function Vl(a) {
  this.j = a;
}
F(Vl, R);
Vl.prototype.getType = w("j");
var Wl = {
  uf: "build-label",
  Te: "buildLabel",
  Ue: "clientLog",
  Ye: "docId",
  wf: "mobile-app-version",
  Hf: "severity",
  Ff: "reportSeverity",
  Mf: "severity-unprefixed",
  mf: "isArrayPrototypeIntact",
  nf: "isEditorElementAttached",
  ef: "documentCharacterSet",
  qf: "isModuleLoadFailure",
  Ef: "reportName",
  vf: "locale",
  We: "createdOnServer",
  Af: "numUnsavedCommands",
  Xe: "cspViolationContext",
  Df: "relatedToBrowserExtension",
  Of: "workerError",
  Ze: "docosPostLimitExceeded",
  af: "docosPostLimitType",
  bf: "docosReactionLimitExceeded",
  df: "docosReactionLimitType",
  Cf: "origin",
  Gf: "saveTakingTooLongOnClient",
  Jf: "truncatedCommentNotificationsCount",
  Kf: "truncatedCommentNotificationsFromPayload",
  zf: "nonfatalReason",
  Nf: "usesModuleSetsServing",
  rf: "isNestedDrawingsEnabled",
  ff: "embeddedDrawingState",
};
function Xl(a) {
  this.j = a;
}
F(Xl, R);
Xl.prototype.info = function (a, c, e) {
  this.j.info(a.L, c, e);
};
Xl.prototype.log = function (a, c, e) {
  this.j.log(a.L, c, e);
};
function Yl(
  a,
  c,
  e,
  f,
  g,
  h,
  k,
  l,
  p,
  q,
  r,
  x,
  y,
  z,
  B,
  G,
  C,
  X,
  aa,
  Va,
  yd,
  uc,
  Jg,
  Kg,
  Lg,
  Mg,
  pz,
  qz,
  rz,
  sz,
  tz,
  uz,
  vz,
  wz,
  xz,
  yz,
  zz,
  Az,
  Bz,
  Cz,
  Dz,
  Ez,
  Fz,
  Gz,
  Hz,
  Iz,
  Jz,
  Kz,
  Lz,
  Mz,
  Nz,
  Oz,
  Pz,
  Qz,
  Rz,
  Sz,
  Tz,
  Uz,
  Vz,
  Wz,
  Xz,
  Yz,
  Zz,
  $z,
  aA,
  bA,
  cA,
  dA,
  eA,
  fA,
  gA,
  hA,
  iA,
  jA,
  kA,
  lA,
  mA,
  nA,
  oA,
  pA,
  qA,
  rA,
  sA,
  tA,
  uA,
  vA,
  wA,
  xA,
  yA,
) {
  this.Ma = a;
  this.Mb = e;
  this.ia = c;
  this.Wb = f;
  this.ja = g;
  this.Lb = h;
  this.N = k;
  this.Ac = l;
  this.hc = p;
  this.ec = q;
  this.nd = r;
  this.Dc = x;
  this.fc = y;
  this.kc = z;
  this.j = B;
  this.Ha = G;
  this.Ic = C;
  this.C = X;
  this.Qc = aa;
  this.pa = Va;
  this.Zb = yd;
  this.ac = Iz;
  this.Pb = kA;
  this.Uc = uc;
  this.Wc = Jz;
  this.oc = Kz;
  this.M = Jg;
  this.Yb = Kg;
  this.jc = Lg;
  this.rc = Mg;
  this.nc = pz;
  this.Cc = qz;
  this.Na = rz;
  this.Yc = sz;
  this.T = tz;
  this.S = uz;
  this.I = vz;
  this.U = wz;
  this.W = xz;
  this.H = yz;
  this.aa = zz;
  this.Kb = Az;
  this.Lc = Bz;
  this.kd = Cz;
  this.ld = Dz;
  this.md = Ez;
  this.gd = Fz;
  this.ed = Gz;
  this.jd = Hz;
  this.o = Lz;
  this.v = Mz;
  this.Ja = Nz;
  this.Ob = Oz;
  this.wa = Pz;
  this.P = Qz;
  this.od = Rz;
  this.Rc = Sz;
  this.Nb = Tz;
  this.Jb = Uz;
  this.cc = Vz;
  this.bc = Wz;
  this.oa = Xz;
  this.Sc = Yz;
  this.Fc = Zz;
  this.Vb = $z;
  this.La = aA;
  this.Rb = bA;
  this.D = cA;
  this.A = dA;
  this.K = eA;
  this.lc = fA;
  this.mc = gA;
  this.Nc = hA;
  this.Hc = iA;
  this.dc = jA;
  this.fa = lA;
  this.Qb = mA;
  this.R = nA;
  this.Oc = oA;
  this.Vc = pA;
  this.Xb = qA;
  this.ad = rA;
  this.Mc = sA;
  this.Gc = tA;
  this.F = uA;
  this.Pc = vA;
  this.B = wA;
  this.J = xA;
  this.Ia = yA;
}
F(Yl, R);
function Zl(a) {
  this.G = M(a);
}
F(Zl, Q);
function $l(a) {
  this.G = M(a);
}
F($l, Q);
function am(a) {
  this.G = M(a);
}
F(am, Q);
function bm(a) {
  this.G = M(a);
}
F(bm, Q);
var cm = [0, wg, [0, yg, vg], yg, zg];
function dm(a) {
  this.G = M(a);
}
F(dm, Q);
var em = [0, cm];
function fm(a) {
  this.G = M(a);
}
F(fm, Q);
function gm(a) {
  this.G = M(a);
}
F(gm, Q);
function hm(a) {
  this.G = M(a);
}
F(hm, Q);
function im(a) {
  this.G = M(a);
}
F(im, Q);
function jm(a) {
  this.G = M(a);
}
F(jm, Q);
function km(a) {
  this.G = M(a);
}
F(km, Q);
function lm(a) {
  this.G = M(a);
}
F(lm, Q);
function mm(a) {
  this.G = M(a);
}
F(mm, Q);
function nm(a) {
  this.G = M(a);
}
F(nm, Q);
function om(a) {
  this.G = M(a);
}
F(om, Q);
om.prototype.Xa = function () {
  return of(this, 7);
};
function pm(a) {
  this.G = M(a);
}
F(pm, Q);
function qm(a) {
  this.G = M(a);
}
F(qm, Q);
function rm(a) {
  this.G = M(a);
}
F(rm, Q);
function sm(a) {
  this.G = M(a);
}
F(sm, Q);
function tm(a) {
  this.G = M(a);
}
F(tm, Q);
function um(a) {
  this.G = M(a);
}
F(um, Q);
function vm(a) {
  this.G = M(a);
}
F(vm, Q);
function wm(a) {
  this.G = M(a);
}
F(wm, Q);
function xm() {}
F(xm, R);
function ym(a) {
  var c = new xm();
  c.Hc = a;
  return c;
}
function zm(a) {
  a.v && (a.j || (a.j = new bm()), N(a.j, Zl, 4, a.v));
  return new Yl(
    a.Hc,
    a.wa,
    a.o,
    a.Xb,
    a.j,
    a.Ob,
    a.U,
    a.Cc,
    a.jc,
    a.fc,
    a.Kb,
    a.Gc,
    a.hc,
    a.lc,
    a.B,
    a.La,
    a.Mc,
    a.I,
    a.Sc,
    a.Ia,
    a.ac,
    a.ad,
    a.S,
    a.Zb,
    a.kc,
    a.Ac,
    a.oc,
    a.Dc,
    a.Lc,
    a.gd,
    a.ia,
    a.aa,
    a.P,
    a.fa,
    a.ja,
    a.N,
    a.oa,
    a.Nb,
    a.Rc,
    a.nd,
    a.od,
    a.Jb,
    a.ld,
    a.kd,
    a.md,
    a.bc,
    a.ed,
    a.rc,
    a.F,
    a.C,
    a.Na,
    a.Qb,
    a.Ja,
    a.T,
    a.Lb,
    a.Yc,
    a.Pb,
    a.Mb,
    a.dc,
    a.cc,
    a.Ha,
    a.Vc,
    a.Nc,
    a.Wb,
    a.Fc,
    a.Vb,
    a.J,
    a.D,
    a.M,
    a.mc,
    a.nc,
    a.Uc,
    a.Pc,
    a.ec,
    a.A,
    a.pa,
    a.Rb,
    a.W,
    a.Qc,
    a.Be,
    a.Yb,
    a.jd,
    a.Oc,
    a.Ic,
    a.H,
    a.Wc,
    a.K,
    a.R,
    a.Ma,
  );
}
function Am(a) {
  var c = ym(a.Ma);
  c.wa = a.ia;
  c.o = a.Mb;
  c.Xb = a.Wb;
  c.j = a.ja;
  c.v && c.j && Ke(c.j, Zl, 4);
  c.C = a.v;
  c.Ob = a.Lb;
  c.Cc = a.Ac;
  c.jc = a.hc;
  c.Ha = a.oa;
  c.fc = a.ec;
  c.Kb = a.nd;
  c.Gc = a.Dc;
  c.hc = a.fc;
  c.lc = a.kc;
  c.B = a.j;
  c.La = a.Ha;
  c.Mc = a.Ic;
  c.I = a.C;
  c.Sc = a.Qc;
  c.Ia = a.pa;
  c.ac = a.Zb;
  c.bc = a.ac;
  c.ad = a.Uc;
  c.ed = a.Wc;
  c.rc = a.oc;
  c.S = a.M;
  c.Zb = a.Yb;
  c.kc = a.jc;
  c.Ac = a.rc;
  c.oc = a.nc;
  c.Dc = a.Cc;
  c.Lc = a.Na;
  c.gd = a.Yc;
  c.ia = a.T;
  c.aa = a.S;
  c.P = a.I;
  c.fa = a.U;
  c.ja = a.W;
  c.N = a.H;
  c.oa = a.aa;
  c.Nb = a.Kb;
  c.Rc = a.Lc;
  c.nd = a.kd;
  c.od = a.ld;
  c.Jb = a.md;
  c.ld = a.gd;
  c.kd = a.ed;
  c.md = a.jd;
  c.Na = a.Ja;
  c.F = a.o;
  c.Qb = a.Ob;
  c.Ja = a.wa;
  c.T = a.P;
  c.Lb = a.od;
  c.Yc = a.Rc;
  c.Mb = a.Jb;
  c.dc = a.cc;
  c.cc = a.bc;
  c.Pb = a.Nb;
  c.Vc = a.Sc;
  c.Nc = a.Fc;
  c.Wb = a.Vb;
  c.Fc = a.La;
  c.Vb = a.Rb;
  c.J = a.D;
  c.D = a.A;
  c.M = a.K;
  c.mc = a.lc;
  c.nc = a.mc;
  c.Uc = a.Nc;
  c.Pc = a.Hc;
  c.ec = a.dc;
  c.A = a.Pb;
  c.pa = a.fa;
  c.Rb = a.Qb;
  c.W = a.R;
  c.Qc = a.Oc;
  c.Be = a.Vc;
  c.Yb = a.Xb;
  c.jd = a.ad;
  c.Ic = a.Gc;
  c.H = a.F;
  c.Wc = a.Pc;
  c.K = a.B;
  c.Oc = a.Mc;
  c.U = a.N;
  c.R = a.J;
  c.Ma = a.Ia;
  return c;
}
function Bm() {
  mk.call(this);
  pk(this);
}
F(Bm, mk);
Bm.prototype.clear = u();
Bm.prototype.log = u();
function Cm(a, c) {
  this.A = false;
  this.v = a ? a : Dm();
  this.j = {};
  this.F = new Bm();
  this.o = {};
  this.A = Bh(c, true);
}
F(Cm, R);
Cm.prototype.D = function (a, c, e) {
  e = Date.now() - e;
  c[29031] = e !== void 0 ? e : null;
  this.o = rl(a);
  ql(this.o, c);
};
Cm.prototype.C = function () {
  return JSON.stringify(this.o);
};
function Em(a, c) {
  var e = (Fm(), Gm);
  Gm = (Gm + 1) | 0;
  e = "goog_" + e;
  var f = a.j;
  a = Hm(a, c, void 0, void 0, false);
  nl(f, e, a);
  return e;
}
function Hm(a, c, e, f, g) {
  a.B && a.B.j(c);
  var h = new Im(),
    k = a.v,
    l = a.v.j ? performance.now() : Date.now(),
    p = a.A,
    q = a.K,
    r = a.B;
  h.v = false;
  h.D = 0;
  h.N = a;
  h.C = k;
  h.o = l;
  h.j = c;
  h.K = p;
  h.I = true === e;
  h.M = f;
  h.H = true === g;
  h.A = q;
  h.B = r;
  h.F = null;
  return h;
}
Cm.prototype.saveInitialLoadStats = Cm.prototype.D;
Cm.prototype.getInitialLoadStats = Cm.prototype.C;
function Fm() {
  Fm = u();
  Gm = Math.floor(Math.random() * -2147483648) | 0;
}
var Gm = 0;
function Im() {
  this.v = this.H = this.K = this.I = false;
  this.D = 0;
}
F(Im, R);
Im.prototype.complete = function (a) {
  if (this.v) throw jh("ta`" + S(this.j)).L;
  this.v = true;
  this.J = this.D + (this.o != null ? (this.C.j ? performance.now() : Date.now()) - this.o : 0);
  this.o = null;
  a == null && (a = this.M);
  this.K
    ? ((a = a == null ? ym(21) : Am(a)), this.A && this.A.o(a), Jm(this, a), (a = zm(a)))
    : (this.A && (a = this.A.j(a)),
      this.F != null && ((a = a ? Am(a) : ym(21)), Jm(this, a), (a = zm(a))));
  this.N.F.log(this.j, this.J, this.I, a, this.H);
  this.B && this.B.o(this.j, this.J, a);
};
Im.prototype.start = function () {
  if (this.v) throw jh("va`" + S(this.j)).L;
  if (this.o != null) throw jh("wa`" + S(this.j)).L;
  this.o = this.C.j ? performance.now() : Date.now();
  this.B && this.B.j(this.j);
};
function Jm(a, c) {
  if (a.F != null) {
    var e = c.o;
    e || ((e = new lm()), (c.o = e));
    wf(e, 7, a.F);
  }
}
function Km() {
  this.j = false;
}
var Lm;
F(Km, R);
function Dm() {
  Mm();
  return Lm;
}
function Nm() {
  var a = new Km();
  a.j = "performance" in K && !!performance.now;
  return a;
}
function Mm() {
  Mm = u();
  Lm = Nm();
}
function Om(a) {
  this.v = false;
  this.j = {};
  a || Dm();
}
var Pm = { cov: "mark_fully_visible", coe: "mark_interactive", fcoe: "mark_fully_loaded" };
F(Om, R);
function Qm(a, c) {
  a.v && delete a.F[c];
}
Om.prototype.o = function (a) {
  Rm(this, a, Date.now());
  Qm(this, a);
  this.A && (this.A.j(a), (a = Pm[a]), a != null && this.A.j(a));
};
Om.prototype.C = function (a, c) {
  a in this.j || nl(this.j, a, 0);
  nl(this.j, a, this.j[a] + c);
  Qm(this, a);
};
function Rm(a, c, e) {
  if (c in a.j) throw fh("Aa`" + S(c)).L;
  nl(a.j, c, e);
}
Om.prototype.D = function (a) {
  if (!U(ul(), "icso")) {
    if (a != null)
      for (var c in a) {
        var e = c;
        Rm(this, e, a[c]);
        Qm(this, e);
      }
    Rm(this, "sldummy", 0);
    Qm(this, "sldummy");
  }
};
Om.prototype.initialize = function (a, c, e, f, g) {
  if (this.v) throw fh("xa").L;
  for (var h in this.j) {
    if (h in a) throw fh("ya`" + S(h)).L;
    nl(a, h, this.j[h]);
  }
  this.j = a;
  a = {};
  for (c = 0; c < e.length; c = (c + 1) | 0) a[e[c]] = true;
  this.F = a;
  this.B = g;
  for (var k in this.j) delete this.F[k];
  this.B.j();
  this.B.o();
  this.v = true;
};
Om.prototype.setTime = Om.prototype.o;
Om.prototype.incrementTime = Om.prototype.C;
Om.prototype.setServerValues = Om.prototype.D;
var Sm;
function Tm() {
  Tm = u();
  Sm = new Om(null);
}
var Um;
function Vm() {
  Vm = u();
  Um = "";
  Wm = false;
}
var Wm = false;
function Xm() {}
F(Xm, R);
Xm.prototype.equals = function (a) {
  return Ym(this, a);
};
Xm.prototype.va = function () {
  for (var a = 1, c = Zm(this), e = 0; e < c.length; e++) {
    var f = this[c[e]];
    f != null && (a = Math.imul(1000003, a) ^ Qh(f));
  }
  return a;
};
Xm.prototype.toString = function () {
  var a = Rh(this);
  a = $h($h(S(Cg(a.o)) + S(Zh("[]", a.j)), "."), "$");
  a = a.substr((a.lastIndexOf("AutoValue_") + 1) | 0);
  var c = S(a) + "{";
  a = new Jh();
  a.A = ", ".toString();
  a.v = c.toString();
  a.o = "}".toString();
  a.B = S(a.v) + S(a.o);
  c = Zm(this);
  for (var e = 0; e < c.length; e++) {
    var f = c[e],
      g = this[f];
    Array.isArray(g) && (g = "[" + S(g) + "]");
    var h = a;
    f = S(f) + "=" + S(g);
    h.j ? Ih(h.j, h.A) : ((g = new Hh()), (g.j = h.v), (h.j = g));
    h = h.j;
    h.j = S(h.j) + S(f);
  }
  return a.toString();
};
function Ym(a, c) {
  if (c == null || !Eg(Rh(c), Rh(a))) return false;
  var e = Zm(a);
  if (e.length != Zm(c).length) return false;
  for (var f = 0; f < e.length; f++) {
    var g = e[f];
    if (!Bh(a[g], c[g])) return false;
  }
  return true;
}
function Zm(a) {
  var c = Object.keys(a),
    e = a.C;
  return e
    ? c.filter(function (f) {
        return !e.includes(f);
      })
    : c;
}
function $m() {
  mk.call(this);
  pk(this);
}
F($m, mk);
function an() {
  $m.call(this);
  this.o = {};
  this.j = null;
}
F(an, $m);
an.prototype.O = function () {
  $m.prototype.O.call(this);
  var a = this.o,
    c;
  for (c in a) delete a[c];
  this.j = null;
};
an.prototype.dispatchEvent = function (a) {
  bn(this, a);
};
function bn(a, c) {
  if (!a.j) {
    var e = a.o,
      f = [],
      g;
    for (g in e) f.push(e[g]);
    a.j = f;
  }
  a = a.j;
  for (e = 0; e < a.length; e = (e + 1) | 0) (0, a[e])(c);
}
function cn() {}
F(cn, R);
function dn() {
  mk.call(this);
  pk(this);
  this.j = [];
}
F(dn, mk);
function en(a, c, e) {
  var f;
  a: {
    for (f = 0; f < a.j.length; f = (f + 1) | 0) {
      var g = a.j[f];
      if (Eg(g.o, e) && Eg(g.j, c)) {
        f = true;
        break a;
      }
    }
    f = false;
  }
  if (!f) {
    a = a.j;
    Oj(e);
    f = c.o;
    if (Bk(e) in f) {
      c = [e];
      e = new Hh();
      e.j = "";
      for (a = g = 0; a < c.length; ) {
        f = "Observer %s previously registered.".indexOf("%s", g);
        if (f == -1) break;
        e.j = S(e.j) + S("Observer %s previously registered.".substr(g, (f - g) | 0));
        g = void 0;
        Ih(e, Pj(c[((g = a), (a = (a + 1) | 0), g)]));
        g = (f + 2) | 0;
      }
      e.j = S(e.j) + S("Observer %s previously registered.".substr(g, (34 - g) | 0));
      if (a < c.length) {
        for (f = " ["; a < c.length; a = (a + 1) | 0) {
          Ih(e, f);
          Ih(e, Pj(c[a]));
          f = ", ";
        }
        e.j = S(e.j) + String.fromCharCode(93);
      }
      throw jh(e.toString()).L;
    }
    nl(c.o, Bk(e), e);
    c.j = null;
    f = new cn();
    f.j = c;
    f.o = e;
    a.push(f);
  }
}
dn.prototype.O = function () {
  var a;
  for (a = this.j.pop(); a; ) {
    var c = a.j;
    a = a.o;
    var e = c.o;
    Bk(a) in e && ((e = c.o), (a = Bk(a)), delete e[a], (c.j = null));
    a = this.j.pop();
  }
  mk.prototype.O.call(this);
};
function W() {
  mk.call(this);
  pk(this);
}
F(W, mk);
D = W.prototype;
D.wc = function (a) {
  if (!(Ak(this.ca(), a.v) >= 0)) throw fh("Ca`" + S(a.v)).L;
  return this.bb(a);
};
D.sa = function (a, c) {
  var e = this.ga(a),
    f = [];
  a = new gn(e, a, c, null);
  f.push(a);
  return f;
};
D.bb = function (a) {
  return this.sa(a, null);
};
D.ga = function (a) {
  throw fh("Da`" + S(a.v)).L;
};
D.Z = function (a) {
  return hn(a) ? Ak(this.ca(), a.B) >= 0 : false;
};
function jn(a) {
  this.v = a;
}
F(jn, R);
jn.prototype.getType = w("v");
function hn(a) {
  a = a.getType();
  return a === "update-record" || a === "delete-record";
}
function kn(a, c, e) {
  this.v = a;
  this.C = c;
  this.B = e;
}
F(kn, jn);
function ln(a) {
  if (a.C == null) throw fh("Ea").L;
  return a.C;
}
function gn(a, c, e, f) {
  kn.call(this, f ? f : "update-record", a, c.v);
  this.o = false;
  a = e;
  this.o = c.C;
  this.j = {};
  e = c.A;
  a = a ? a : [];
  for (var g in e) pl(this.j, g, Ak(a, g) >= 0 ? Kl(c, g) : c.j[g]);
}
F(gn, kn);
function mn(a, c) {
  nn();
  this.j = c;
}
var on;
F(mn, R);
mn.prototype.Zc = function (a, c) {
  for (var e = yh(on.j()), f = [], g = 0; g < a.length; g = (g + 1) | 0) f.push(new pn(a[g]));
  true === c && ((a = yh(on.j()) - e), this.j.C("md", a));
  return f;
};
function nn() {
  nn = u();
  on = new qn();
}
function qn() {}
F(qn, R);
qn.prototype.j = function () {
  return uh(Date.now());
};
function rn(a) {
  this.o = a;
}
F(rn, R);
rn.prototype.j = function () {
  var a;
  return ((a = this.o), a());
};
function sn() {
  this.o = false;
  this.j = [];
}
F(sn, R);
function tn(a) {
  var c = a.j;
  a.j = [];
  a.o = false;
  return c;
}
function un(a, c, e, f) {
  Il.call(this, "document", f, e);
  this.K = this.K = false;
  this.B = new sn();
  V(this, "id", a);
  V(this, "documentType", c);
}
F(un, Il);
un.prototype.X = function () {
  return this.j.id;
};
un.prototype.getType = function () {
  return this.j.documentType;
};
un.prototype.I = function () {
  var a,
    c = this.B.j.length == 0;
  c ? (a = Il.prototype.I.call(this)) : (a = new Tl(this.X(), c ? 1 : 2));
  return a;
};
un.prototype.F = function () {
  return Il.prototype.F.call(this) || this.B.j.length != 0;
};
function vn(a, c, e) {
  this.v = a;
  this.F = c;
  this.C = e;
}
F(vn, jn);
function wn(a, c, e, f) {
  vn.call(this, "append-commands", a, c);
  this.A = false;
  this.B = e;
  this.A = f;
}
F(wn, vn);
function xn(a, c, e) {
  mk.call(this);
  pk(this);
  this.ge = a;
  this.ie = c;
  this.ee = new mn(this.ie, e);
}
F(xn, mk);
xn.prototype.za = w("ge");
xn.prototype.Zc = function (a, c) {
  return this.ee.Zc(a, c);
};
xn.prototype.vc = function (a) {
  for (var c = new sn(), e = a.B, f = 0; f < e.j.length; f = (f + 1) | 0) {
    var g = c,
      h = e.j[f];
    true === e.o && ((g.j = []), (g.o = true));
    g.j.push(h);
    e.o = false;
  }
  e.j = [];
  if (c.j.length == 0) return [];
  e = c.o;
  return [new wn(a.X(), a.getType(), tn(c), e)];
};
function yn(a, c) {
  Kj.call(this, a, c);
  this.A = {};
  Yg(this, Error(this));
}
F(yn, Kj);
function zn(a, c, e, f, g) {
  yn.call(
    this,
    "Local storage error: " + S(c) + String(f != null ? " (" + S(An(f)) + ")" : ""),
    ch(e) ? e : null,
  );
  this.type = 0;
  this.v = false;
  this.type = a;
  this.cause = e;
  this.v = g != null && g;
  Yg(this, Error(this));
}
F(zn, yn);
function Bn(a) {
  return "Failed to write to localstore (" + a.type + "): " + S(yn.prototype.B.call(a));
}
function An(a) {
  switch (a) {
    case 45:
      return "app metadata read";
    case 46:
      return "app metadata read all";
    case 1:
      return "app metadata fetcher";
    case 57:
      return "blob metadata delete";
    case 58:
      return "blob metadata read";
    case 2:
      return "blob metadata";
    case 78:
      return "cache update stats read";
    case 79:
      return "cache update stats write";
    case 33:
      return "commands read";
    case 74:
      return "commands read all";
    case 3:
      return "init comms manager";
    case 34:
      return "docos read";
    case 4:
      return "docos";
    case 39:
      return "documents with pending changes read";
    case 40:
      return "documents with pending comments read";
    case 48:
      return "document entity read";
    case 49:
      return "document entity read all";
    case 50:
      return "document entity read multi";
    case 35:
      return "document read";
    case 37:
      return "document read all";
    case 36:
      return "document read multi";
    case 5:
      return "doc syncer; mark failed";
    case 6:
      return "document writer; delete";
    case 75:
      return "document writer; doc";
    case 7:
      return "document writer; doc & pending queue";
    case 8:
      return "document writer; entities";
    case 77:
      return "document writer; noop; not expected";
    case 76:
      return "document writer; pending queue";
    case 9:
      return "drawing revision access token";
    case 10:
      return "font deletion";
    case 72:
      return "font metadata read";
    case 73:
      return "font metadata read all";
    case 11:
      return "font offline storage";
    case 12:
      return "web fonts deleter";
    case 51:
      return "impressions delete";
    case 52:
      return "impressions read";
    case 13:
      return "impressions";
    case 14:
      return "local loader timestamp";
    case 53:
      return "latency report delete";
    case 15:
      return "local doc create";
    case 16:
      return "local doc delete";
    case 17:
      return "doc syncer; delete local doc";
    case 18:
      return "client snapshot scheduler";
    case 54:
      return "lock acquisition";
    case 55:
      return "lock cleanup";
    case 56:
      return "lock refresh";
    case 19:
      return "model fonts";
    case 42:
      return "new doc ids count";
    case 43:
      return "new doc ids pop";
    case 44:
      return "new doc ids write";
    case 20:
      return "offline doc entity";
    case 59:
      return "pending queue read";
    case 80:
      return "profile data pinned docs read";
    case 82:
      return "profile data pinned docs removal";
    case 21:
      return "update pinned docs";
    case 60:
      return "profile data docs delete";
    case 38:
      return "profile data docs read";
    case 61:
      return "profile data docs write";
    case 81:
      return "reconciliation pinned docs write";
    case 22:
      return "relevancy ranks";
    case 23:
      return "ritz remove external data";
    case 24:
      return "ritz save external data";
    case 62:
      return "sync hints read";
    case 63:
      return "sync hints read all";
    case 25:
      return "update sync hints";
    case 64:
      return "local store sync objects read";
    case 26:
      return "local store sync objects";
    case 32:
      return "doc sync stats read";
    case 27:
      return "doc sync stats";
    case 65:
      return "template commands read";
    case 66:
      return "template commands write";
    case 67:
      return "template creation metadata read";
    case 68:
      return "template delete";
    case 69:
      return "template metadata read";
    case 70:
      return "template metadata read all";
    case 28:
      return "template metadata";
    case 29:
      return "template not ready";
    case 30:
      return "test only";
    case 41:
      return "trix doc force delete";
    case 47:
      return "unsaved changes bit read";
    case 71:
      return "users read";
    case 31:
      return "opt-in user info";
    case 0:
      return "unspecified";
    default:
      return "unknown";
  }
}
function Cn(a, c, e, f) {
  this.v = "append-template-commands";
  this.A = false;
  this.B = a;
  this.C = c;
  this.F = e;
  this.A = f;
}
F(Cn, jn);
Cn.prototype.za = w("C");
function Dn(a, c, e) {
  Il.call(this, "applicationMetadata", e, c);
  this.B = false;
  V(this, "dt", a);
  this.K = [];
}
F(Dn, Il);
Dn.prototype.za = function () {
  return this.j.dt;
};
Dn.prototype.D = function () {
  Il.prototype.D.call(this);
  this.B = false;
};
Dn.prototype.F = function () {
  return this.B || Il.prototype.F.call(this);
};
function En() {
  this.j = this.v = this.B = this.A = this.F = this.C = 0;
}
F(En, R);
function Fn(a) {
  var c = new En();
  if (a == null) throw ah().L;
  c.o = a;
  return c;
}
function Gn(a, c) {
  a.C = c;
  a.j = ((a.j | 1) << 24) >> 24;
  return a;
}
function Hn(a, c) {
  a.F = c;
  a.j = ((a.j | 2) << 24) >> 24;
  return a;
}
function In(a, c) {
  a.A = c;
  a.j = ((a.j | 4) << 24) >> 24;
  return a;
}
function Jn(a, c) {
  a.B = c;
  a.j = ((a.j | 8) << 24) >> 24;
  return a;
}
function Kn(a, c) {
  a.v = c;
  a.j = ((a.j | 16) << 24) >> 24;
  return a;
}
function Ln(a) {
  if (a.j != 31 || a.o == null) throw ih().L;
  var c = new Mn(),
    e = a.o,
    f = a.C,
    g = a.F,
    h = a.A,
    k = a.B;
  a = a.v;
  c.F = e;
  c.B = f;
  c.A = g;
  c.o = h;
  c.v = k;
  c.j = a;
  return c;
}
function Mn() {
  this.j = this.v = this.o = this.A = this.B = 0;
}
F(Mn, Xm);
var Nn = "c oc ol otv op ou ppu ppe pwu u emm".split(" ");
function On(a, c, e, f) {
  Il.call(this, a, f, e);
  V(this, "dataType", c);
}
F(On, Il);
function Pn(a, c) {
  On.call(this, "cacheUpdateStats", "cacheupdatestats", a, c);
}
F(Pn, On);
function Qn() {
  return ["document", "spreadsheets", "presentation", "drawings", "offlinecommon"];
}
function Rn(a) {
  if (!(Ak(Qn(), a) >= 0)) throw Mh("Ia`" + S(a)).L;
}
function Sn(a, c, e, f) {
  Rn(c);
  var g = Tn(a, c),
    h = {};
  e = Al(e);
  h.completeCacheNames = e ? e : null;
  f = Al(f);
  h.incompleteCacheNames = f ? f : null;
  g.lastSeenCacheState = h != null ? h : null;
  V(a, c, g);
}
function Tn(a, c) {
  Rn(c);
  a = Jl(a, c);
  return a == null ? {} : a;
}
function Un(a, c) {
  var e = Date.now();
  Rn(c);
  var f = Tn(a, c);
  f.lastAttemptStartTimestamp = e;
  V(a, c, f);
}
function Vn(a, c, e) {
  var f = Date.now();
  Rn(c);
  var g = Tn(a, c);
  g.lastAttemptEndTimestamp = f;
  e
    ? ((g.lastSuccessTimestamp = f), (g.consecutiveFailureCount = 0))
    : ((e = g.consecutiveFailureCount),
      (e = e != null ? Eh(e) : null),
      (g.consecutiveFailureCount = e ? (e.j + 1) | 0 : 1));
  V(a, c, g);
}
function Wn(a) {
  W.call(this);
  this.ha = a;
}
F(Wn, W);
Wn.prototype.ca = function () {
  return ["cacheUpdateStats"];
};
Wn.prototype.ga = A(null);
Wn.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) && !Wh(a.getType(), "delete-record");
};
function Xn() {
  W.call(this);
}
F(Xn, W);
D = Xn.prototype;
D.ca = function () {
  return [];
};
D.sa = function () {
  throw fh("Ja").L;
};
D.bb = function (a) {
  return this.sa(a, null);
};
D.ga = function () {
  throw fh("Ka").L;
};
D.Z = A(false);
function Yn() {
  W.call(this);
}
F(Yn, W);
Yn.prototype.ca = function () {
  return ["comment"];
};
Yn.prototype.ga = function (a) {
  return [a.j.di, a.X()];
};
function Zn(a, c) {
  W.call(this);
  this.Fd = a;
  this.he = c;
}
F(Zn, W);
D = Zn.prototype;
D.ca = function () {
  return ["document"];
};
D.Da = function (a) {
  var c = this.Fd[a];
  if (!c) throw fh("La`" + S(a)).L;
  return c;
};
D.createDocument = function (a, c, e) {
  a = new un(a, c, true, this.he, this.Fd[c]);
  e == null || (Ml(a, "initialSyncReason") == null && V(a, "initialSyncReason", e));
  return a;
};
D.Z = function (a) {
  var c = a.getType();
  return c === "append-commands" || c === "write-trix" ? true : W.prototype.Z.call(this, a);
};
D.sa = function (a) {
  var c = this.Da(a.getType()).vc(a);
  return a.K
    ? (a.D(), c)
    : W.prototype.sa
        .call(
          this,
          a,
          "approvalMetadataStatus contentLockType lastModifiedClientTimestamp lastWarmStartedTimestamp ic odocid relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber fileLockedReason mimeType resourceKey initialPinSourceApp quotaStatus".split(
            " ",
          ),
        )
        .concat(c);
};
D.ga = function (a) {
  return a.X();
};
function $n(a, c) {
  W.call(this);
  this.fe = a;
  this.ha = c;
}
F($n, W);
D = $n.prototype;
D.ca = function () {
  return ["applicationMetadata"];
};
D.ga = function (a) {
  return a.za();
};
D.Z = function (a) {
  return Wh(a.getType(), "update-application-metadata");
};
D.sa = function (a) {
  var c = this.ga(a);
  return [new ao(c, a, a.B ? a.K.slice(0) : null)];
};
D.Da = function (a) {
  var c = this.fe[a];
  if (!c) throw fh("La`" + S(a)).L;
  return c;
};
function ao(a, c, e) {
  gn.call(this, a, c, null, "update-application-metadata");
  this.A = e;
}
F(ao, gn);
function bo() {
  W.call(this);
}
F(bo, W);
bo.prototype.ca = function () {
  return ["documentEntity"];
};
bo.prototype.ga = function (a) {
  return [a.j.documentId, a.getType(), a.X()];
};
function co() {
  W.call(this);
}
F(co, W);
co.prototype.ca = function () {
  return [];
};
function eo(a, c) {
  this.v = "document-lock";
  this.B = 0;
  this.A = a;
  this.B = c;
}
F(eo, jn);
function fo(a, c, e, f, g, h) {
  Il.call(this, "impressionBatch", h, g);
  V(this, "di", a);
  V(this, "dt", c);
  V(this, "ibt", e);
  V(this, "iba", f);
}
F(fo, Il);
function go() {
  W.call(this);
}
F(go, W);
go.prototype.ca = function () {
  return ["impressionBatch"];
};
go.prototype.ga = function (a) {
  var c = [],
    e = Kl(a, "di");
  c.push(e == null ? null : e);
  c.push(a.j.ibt);
  return c;
};
go.prototype.Z = function (a) {
  return (
    W.prototype.Z.call(this, a) &&
    ((Wh(a.getType(), "update-record") && a.o) || Wh(a.getType(), "delete-record"))
  );
};
function ho() {
  W.call(this);
}
F(ho, W);
ho.prototype.ca = function () {
  return [];
};
function io(a, c, e) {
  this.j = a;
  this.o = c;
  this.v = e;
}
F(io, R);
function jo(a) {
  this.j = a;
}
F(jo, R);
function ko(a, c) {
  mk.call(this);
  this.v = this.o = false;
  pk(this);
  this.j = a;
  this.A = new an();
  this.v = Bh(c, true);
}
F(ko, mk);
function lo(a) {
  if (a.o) throw fh("Na").L;
  a.o = true;
}
ko.prototype.pb = function () {
  return this.j.pb();
};
ko.prototype.write = function (a, c, e, f, g, h) {
  var k = this;
  if (!this.o) throw fh("Oa").L;
  var l = mo(a);
  a = no(this, a);
  a.length == 0
    ? e()
    : oo(
        this.j,
        a,
        c,
        function () {
          bn(k.A, l);
          e();
        },
        f,
        g,
        h,
      );
};
function mo(a) {
  for (var c = [], e = 0; e < a.length; e++) {
    var f = a[e];
    c.push(new io(f, f.C ? "new" : "update", f.A));
  }
  return new jo(c, null);
}
function no(a, c) {
  for (var e = [], f = null, g = 0; g < c.length; g++) {
    var h = c[g];
    if (h.F()) {
      var k = a.j;
      var l = h.v;
      if ((l = l in k.B ? k.B[l] : null)) {
        k = h.I();
        l = l.wc(h);
        Dk(e, l);
        if (f) {
          if (k) {
            if (!Eg(f.o, k.o)) throw fh("qa").L;
            f = f.j > k.j ? f : k;
          }
        } else f = k;
        h.D();
      } else throw fh("Pa`" + S(h.v)).L;
    }
  }
  f && !a.v && e.unshift(new eo(f.o, f.j));
  return e;
}
ko.prototype.toString = A("[LocalStore]");
function po() {
  W.call(this);
}
F(po, W);
po.prototype.ca = function () {
  return [];
};
function qo() {
  W.call(this);
}
F(qo, W);
qo.prototype.ca = function () {
  return ["blobMetadata"];
};
qo.prototype.sa = function (a) {
  return W.prototype.sa.call(this, a, Nn);
};
qo.prototype.bb = function (a) {
  return this.sa(a, null);
};
qo.prototype.ga = function (a) {
  return [a.j.d, a.j.p];
};
var ro = [
  "revisionAccessInfo",
  "unsentBundleMetadata",
  "selection",
  "sentBundlesSavedRevision",
  "snapshotBundleIndex",
];
function so(a) {
  return a.j.docId;
}
function to(a, c) {
  V(a, "unsentBundleMetadata", c);
}
function uo(a, c, e) {
  this.o = this.j = 0;
  this.j = a;
  this.sessionId = c;
  this.o = e;
}
F(uo, R);
function vo(a, c, e) {
  this.A = false;
  this.B = a;
  this.F = c;
  this.A = U(e, "docs-rmcl");
}
F(vo, R);
vo.prototype.ca = function () {
  return ["pendingQueue"];
};
vo.prototype.ga = function (a) {
  return so(a);
};
vo.prototype.wc = function (a) {
  var c = a.getType();
  if (!this.B[c]) throw fh("Ua`" + S(c)).L;
  var e = a.N;
  c = [];
  switch (e) {
    case 7:
      c = so(a);
      var f = a.K;
      e = [];
      for (var g, h = a.J, k = 0; k < h.length; k++) {
        g = h[k];
        f = (f + 1) | 0;
        g = wo(this, g.j(), so(a), f, true);
        if (!g) throw fh("Ya").L;
        e.push(g);
      }
      h = (a.K + e.length) | 0;
      k = [];
      f = [];
      g = a.M ? a.M : [];
      for (var l = 0; l < g.length; l++) {
        var p = g[l];
        var q = p.j();
        if ((q = wo(this, q, c, (h + 1) | 0, null))) {
          f.push(q);
          q = k;
          p = new uo(p.o(), p.v(), (h + 1) | 0);
          q.push(p);
          h = (h + 1) | 0;
        }
      }
      to(a, xo(k));
      h = new yo(a);
      e.push(h);
      Dk(e, f);
      a.K >= 0 && e.push(new zo(c, a.K));
      c = e;
      break;
    case 1:
      e = (a.K + 1) | 0;
      f = so(a);
      c = [];
      h = a.P;
      k = a.B ? Eh(a.B.j) : null;
      g = a.B ? a.B.sessionId : null;
      if ((l = Jl(a, "unsentBundleMetadata"))) {
        p = [];
        for (q = 0; q < l.length; q = (q + 1) | 0) p.push(new uo(l[q].rid, l[q].sid, l[q].lei));
        l = p;
      } else l = [];
      if (k && g != null) l.push(new uo(k.j, g, e));
      else {
        if (l.length == 0) throw fh("Xa").L;
        k = l[(l.length - 1) | 0];
        l[(l.length - 1) | 0] = new uo(k.j, k.sessionId, e);
      }
      h && to(a, xo(l));
      ol(a.A) || ((a = new gn(f, a, ro, null)), c.push(a));
      (a = wo(this, h, f, e, null)) && c.push(a);
      break;
    case 5:
      to(a, null);
      e = c;
      a = new yo(a);
      e.push(a);
      break;
    case 2:
      to(a, null);
      e = c;
      a = new Ao(a);
      e.push(a);
      break;
    case 3:
      e = c;
      a = new Bo(a);
      e.push(a);
      break;
    case 4:
      e = c;
      a = new Co(a);
      e.push(a);
      break;
    case 6:
      e = c;
      a = new gn(so(a), a, ro, null);
      e.push(a);
      break;
    default:
      throw fh("Wa`" + e).L;
  }
  return c;
};
function wo(a, c, e, f, g) {
  if (!(true === g || (c && c.length != 0))) return null;
  g = [];
  if (c) {
    for (var h = [], k = 0; k < c.length; k++) {
      var l = Do(c[k]);
      g.push(l);
      if (!a.A) {
        for (var p = JSON.stringify(l), q = [], r = 0; r < p.length; r = (r + 1) | 0) {
          l = Vh(p, r);
          var x = false,
            y = p.charCodeAt(r),
            z = Dh(p.charCodeAt(r));
          y >= 55296 && y <= 56319
            ? (x = !(l >= 65536 && l <= 1114111))
            : z &&
              (r > 0
                ? ((x = Vh(p, (r - 1) | 0)), (x = !(x >= 65536 && x <= 1114111)))
                : (x = true));
          x &&
            q.push(
              new Eo(
                "\\u" + S((l >>> 0).toString(16)),
                r,
                p.length,
                Fo(p, (r - 1) | 0),
                Fo(p, (r + 1) | 0),
              ),
            );
        }
        Dk(h, q);
      }
    }
    h.length > 0 &&
      ((c = {}),
      (h = "{" + S(h.join("; ")) + "}"),
      (c.command_malformedCharacterContext = h != null ? h : null),
      (a = a.F),
      (h = new dh()),
      Wg(h, "Serializing commands containing malformed surrogate characters."),
      Yg(h, Error(h)),
      a.info(h, c, null));
  }
  return new Go(e, g, f);
}
function xo(a) {
  if (a.length == 0) return null;
  for (var c = [], e = 0; e < a.length; e++) {
    var f = c,
      g = f.push,
      h = a[e],
      k = {};
    k.rid = h.j;
    var l = h.sessionId;
    k.sid = l != null ? l : null;
    k.lei = h.o;
    g.call(f, k);
  }
  return c;
}
function Ao(a) {
  gn.call(this, so(a), a, ro, "pq-clear");
}
F(Ao, gn);
function Co(a) {
  gn.call(this, so(a), a, ro, "pq-clear-sent-bundle");
}
F(Co, gn);
function Bo(a) {
  gn.call(this, so(a), a, ro, "pq-clear-sent");
}
F(Bo, gn);
function zo(a, c) {
  this.v = "pq-delete-commands";
  this.A = 0;
  this.B = a;
  this.A = c;
}
F(zo, jn);
function Ho(a, c, e) {
  this.j = this.o = 0;
  this.sessionId = a;
  this.o = c;
  this.j = e;
}
F(Ho, R);
function yo(a) {
  gn.call(this, so(a), a, ro, "pq-mark-sent");
  this.F = false;
  this.A = [];
  var c = a.K;
  if (a.N == 7) {
    this.F = true;
    for (var e = a.J, f = 0; f < e.length; f++) {
      var g = e[f];
      c = (c + 1) | 0;
      a = this.A;
      var h = g.v();
      g = new Ho(h, g.o(), c);
      a.push(g);
    }
  } else {
    this.F = false;
    e = this.A;
    f = a.B ? a.B.sessionId : null;
    a = a.B ? Eh(a.B.j) : null;
    e.push(new Ho(f, a.j, c));
  }
}
F(yo, gn);
function Go(a, c, e) {
  this.v = "pq-write-commands";
  this.A = 0;
  this.F = a;
  this.B = c;
  this.A = e;
}
F(Go, jn);
function Eo(a, c, e, f, g) {
  this.o = this.j = 0;
  this.B = a;
  this.j = c;
  this.o = e;
  this.A = f;
  this.v = g;
}
F(Eo, R);
Eo.prototype.toString = function () {
  var a =
    "MalformedCharacterContext(unicodeChar: " +
    S(this.B) +
    ", index: " +
    this.j +
    ", textLength: " +
    this.o;
  this.A != null && (a = S(a) + (", prev: " + S(this.A)));
  this.v != null && (a = S(a) + (", next: " + S(this.v)));
  return S(a) + ")";
};
Eo.prototype.equals = function (a) {
  return a instanceof Eo && Eg(this.toString(), a.toString());
};
Eo.prototype.va = function () {
  for (var a = [this.B, Eh(this.j), Eh(this.o), this.A, this.v], c = 1, e = 0; e < a.length; e++) {
    c = Math.imul(31, c);
    var f = a[e];
    f = f != null ? Qh(f) : 0;
    c = (c + f) | 0;
  }
  return c;
};
function Fo(a, c) {
  return c < 0 || c >= a.length ? null : "\\u" + S((Vh(a, c) >>> 0).toString(16));
}
function Io() {}
F(Io, R);
function Jo() {
  return new Io();
}
function Ko() {
  var a = Jo();
  a.o = null;
  return a;
}
function Lo() {
  this.j = 0;
}
F(Lo, Kh);
function Mo(a, c) {
  var e = new Lo();
  e.o = a;
  e.j = c;
  return e;
}
var No = Mo("PIN", 0),
  Oo = Mo("UNPIN", 1),
  Po = Mo("REMOVE", 2),
  Qo = Mo("MARK_INITIAL_MIGRATION_STARTED", 3);
function Ro() {}
F(Ro, Xm);
Ro.prototype.X = w("v");
function So(a, c) {
  On.call(this, "pinneddocuments", "pinneddocuments", a, c);
  this.B = [];
}
F(So, On);
So.prototype.F = function () {
  return (!!this.B && this.B.length != 0) || On.prototype.F.call(this);
};
So.prototype.D = function () {
  On.prototype.D.call(this);
  this.B = [];
};
function To(a) {
  a = Jl(a, "pinnedDocs");
  return a != null ? a : {};
}
function Uo(a) {
  W.call(this);
  this.ha = a;
}
F(Uo, W);
Uo.prototype.ca = function () {
  return ["pinneddocuments"];
};
Uo.prototype.ga = A(null);
Uo.prototype.Z = function (a) {
  return Wh(a.getType(), "update-pinned-docs")
    ? true
    : W.prototype.Z.call(this, a) && !Wh(a.getType(), "delete-record");
};
function Vo(a) {
  this.newVersion = 0;
  this.newVersion = a;
}
F(Vo, R);
function Wo() {
  mk.call(this);
  pk(this);
  this.fa = new an();
  this.B = {};
}
F(Wo, mk);
function Xo(a, c) {
  for (var e = c.ca(), f = 0; f < e.length; f++) {
    var g = e[f];
    if (a.B[g]) throw fh("Za`" + S(g)).L;
    nl(a.B, g, c);
  }
}
D = Wo.prototype;
D.sd = A(null);
D.Sb = A(null);
D.Tb = A(null);
D.td = A(null);
D.rd = A(null);
D.qd = A(null);
function Yo(a, c, e) {
  this.j = this.o = 0;
  this.o = a;
  this.v = c;
  this.j = e;
}
F(Yo, R);
function Zo(a, c) {
  this.j = a;
  this.o = c;
}
F(Zo, R);
function $o(a) {
  return new Zo(a.docId, a.resourceKey);
}
function ap(a, c, e) {
  On.call(this, "syncHints", ["synchints", "" + c], a, e);
  V(this, "docIds", []);
  V(this, "sourceApp", Eh(c));
  V(this, "docIdentifiers", []);
}
F(ap, On);
function bp(a, c) {
  for (var e = [], f = 0; f < c.length; f = (f + 1) | 0) {
    var g = e,
      h = g.push,
      k = c[f],
      l = {},
      p = k.j;
    l.docId = p != null ? p : null;
    k = k.o;
    l.resourceKey = k != null ? k : null;
    h.call(g, l);
  }
  V(a, "docIdentifiers", e);
  V(a, "docIds", []);
}
function cp(a, c) {
  c = Al(c);
  V(a, "docIds", c);
  V(a, "docIdentifiers", []);
}
function dp(a) {
  a = Ml(a, "sourceApp");
  return a == null ? 0 : zh(a);
}
function ep() {
  W.call(this);
}
F(ep, W);
ep.prototype.ca = function () {
  return ["syncHints"];
};
function fp(a, c) {
  var e = new qk();
  gp(
    a,
    function (f) {
      sk(e, f);
    },
    function (f) {
      uk(e, f);
    },
  );
  return xk(e, function (f) {
    for (var g = [], h = 0; h < f.length; h++) {
      var k = f[h];
      var l = dp(k);
      var p = [];
      var q = Nl(k, "docIdentifiers");
      if (q) {
        for (var r = [], x = 0; x < q.length; x = (x + 1) | 0) {
          var y = r;
          y.push($o(q[x]));
        }
        y = r;
      } else y = [];
      if (y.length == 0)
        for (k = (k = Nl(k, "docIds")) ? Bl(k) : [], y = 0; y < k.length; y = (y + 1) | 0)
          p.push(new Yo(l, k[y], y, null));
      else
        for (q = 0; q < y.length; q = (q + 1) | 0) {
          k = y[q];
          p.push(new Yo(l, k.j, q, k.o));
        }
      l = p;
      for (p = 0; p < l.length; p++)
        if (((k = l[p]), Eg(c, k.v))) {
          g.push(k);
          break;
        }
    }
    return sl(g);
  });
}
ep.prototype.ga = function (a) {
  return ["synchints", "" + dp(a)];
};
ep.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) && Wh(a.getType(), "update-record");
};
function hp() {
  W.call(this);
}
F(hp, W);
hp.prototype.ca = function () {
  return ["syncObject"];
};
hp.prototype.ga = function (a) {
  return Bl(a.j.keyPath.concat());
};
hp.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) && Wh(a.getType(), "update-record") && a.o;
};
function ip(a, c) {
  On.call(this, "syncStats", "syncstats", a, c);
  V(this, "syncVersion", 0);
  V(this, "lastDailyRunTime", 0);
  V(this, "maxSpaceQuota", 0);
  V(this, "webfontsSyncVersion", 0);
  V(this, "lastStartedSyncDocs", []);
  V(this, "backgroundSyncDenylist", {});
}
F(ip, On);
function jp(a, c, e) {
  var f = {};
  f.documentId = c != null ? c : null;
  f.timestamp = e;
  c = (c = Nl(a, "lastStartedSyncDocs")) ? c : [];
  c.push(f);
  f = (c.length - 10) | 0;
  f > 0 && c.splice(0, f);
  V(a, "lastStartedSyncDocs", c);
}
function kp(a, c) {
  var e = Jl(a, "backgroundSyncDenylist");
  e = e == null ? {} : e;
  var f = c.F,
    g = {};
  g.retryCount = c.B;
  g.nextSyncTimestampMillis = c.A;
  g.firstFailTimestampMillis = c.o;
  g.lastFailTimestampMillis = c.v;
  g.documentDiskSize = c.j;
  e[f] = g != null ? g : null;
  V(a, "backgroundSyncDenylist", e);
}
function lp(a, c, e, f, g, h, k, l) {
  var p = {};
  p.count = e;
  p.modelSyncFailCount = f;
  p.serverTime = g;
  p.lastSyncErrorType = h ? h.j : null;
  p.nextSyncTimestampMillis = k;
  p.backoffRetryConsecutiveFailCount = l;
  e = mp(a);
  e[c] = p != null ? p : null;
  V(a, "failedToSyncDocs", e);
}
function mp(a) {
  a = Jl(a, "failedToSyncDocs");
  return a == null ? {} : a;
}
function np(a) {
  W.call(this);
  this.ha = a;
}
F(np, W);
np.prototype.ca = function () {
  return ["syncStats"];
};
function op(a, c) {
  var e = new qk();
  qp(
    a,
    function (f) {
      sk(e, f);
    },
    function (f) {
      uk(e, f);
    },
  );
  return xk(e, function (f) {
    f
      ? ((f = mp(f)[c]),
        (f = f != null ? f : null),
        (f = f == null || f.lastSyncErrorType == null ? null : Eh(f.lastSyncErrorType)))
      : (f = null);
    return sl(f);
  });
}
np.prototype.ga = A(null);
np.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) && !Wh(a.getType(), "delete-record");
};
function rp(a) {
  mk.call(this);
  pk(this);
  this.j = a;
}
F(rp, mk);
rp.prototype.vc = function (a) {
  var c = tn(a.B);
  return c.length == 0 ? [] : [new Cn(a.X(), a.za(), c, true)];
};
rp.prototype.za = w("j");
function sp(a, c) {
  W.call(this);
  this.je = a;
  this.ha = c;
}
F(sp, W);
D = sp.prototype;
D.ca = function () {
  return ["templateCreationMetadata", "templateMetadata"];
};
D.ga = function (a) {
  return a.v === "templateCreationMetadata" ? [a.X()] : [a.X()];
};
D.bb = function (a) {
  var c = W.prototype.bb.call(this, a);
  a.v === "templateCreationMetadata" && ((a = this.Da(a.za()).vc(a)), Dk(c, a));
  return c;
};
D.Da = function (a) {
  var c = this.je[a];
  if (!c) throw fh("La`" + S(a)).L;
  return c;
};
D.Z = function (a) {
  return a.getType() === "append-template-commands" ? true : W.prototype.Z.call(this, a);
};
function tp(a, c, e) {
  Il.call(this, "user", e, c);
  V(this, "id", a);
  V(this, "fastTrack", "true");
}
F(tp, Il);
tp.prototype.X = function () {
  return this.j.id;
};
function up(a) {
  W.call(this);
  this.ha = a;
}
F(up, W);
D = up.prototype;
D.ca = function () {
  return ["user"];
};
D.sa = function (a, c) {
  return W.prototype.sa.call(this, a, c);
};
D.bb = function (a) {
  return this.sa(a, null);
};
D.ga = function (a) {
  return a.X();
};
D.Z = function (a) {
  return W.prototype.Z.call(this, a) && !Wh(a.getType(), "delete-record");
};
function vp() {
  W.call(this);
}
F(vp, W);
vp.prototype.ca = function () {
  return ["fontMetadata"];
};
vp.prototype.ga = function (a) {
  return a.j.fontFamily;
};
vp.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) ? (Wh(a.getType(), "update-record") ? a.o : true) : false;
};
function wp(a, c) {
  kn.call(this, "update-pinned-docs", null, "pinneddocuments");
  this.A = 0;
  this.F = a;
  this.A = c;
}
F(wp, kn);
function xp(a) {
  Kj.call(this, a, null);
  Yg(this, Error(this));
}
F(xp, Kj);
function yp(a, c, e, f) {
  mk.call(this);
  this.j = 0;
  pk(this);
  this.v = a;
  this.j = c;
  this.o = new zp(Math.imul(e, 1e3), f);
}
F(yp, mk);
function Ap(a) {
  if (!(((a.o.get(null) + 1) | 0) / (a.o.v / 1e3) <= a.j))
    throw new xp("Query would cause " + S(a.v) + " to exceed " + a.j + " qps.").L;
  a = a.o;
  var c = yh(a.A.j());
  Bp(a, c);
  var e = Cp(a.o);
  if (!e || c >= e.o) {
    e = new Dp();
    e.o = a.j * Math.floor(c / a.j + 1);
    e.j = 0;
    e.A = 2147483647;
    e.v = -2147483648;
    a.o.add(e);
  }
  e.j = (e.j + 1) | 0;
  e.A = Math.min(1, e.A);
  e.v = Math.max(1, e.v);
}
function Dp() {
  this.v = this.A = this.j = 0;
}
F(Dp, R);
function zp(a, c) {
  this.j = this.v = 0;
  this.A = c ? c : new qn();
  this.v = a;
  this.j = (a / 50) | 0;
  this.o = new Ep(Eh(50));
}
F(zp, R);
zp.prototype.get = function (a) {
  return Fp(this, a, function (c, e) {
    return Eh((c.j + e.j) | 0);
  });
};
function Fp(a, c, e) {
  c = c != null ? c : yh(a.A.j());
  Bp(a, c);
  var f = 0;
  c = a.j * Math.floor(c / a.j + 1) - a.v;
  for (var g = (a.o.j.length - 1) | 0; g >= 0; g = (g - 1) | 0) {
    var h = a.o.get(g);
    if (h.o <= c) break;
    f = e(Eh(f), h).j;
  }
  return f;
}
function Bp(a, c) {
  var e;
  (e = Cp(a.o)) && c < e.o - a.j && a.o.clear();
}
function Ep(a) {
  this.o = this.v = this.o = 0;
  this.v = a != null ? Ck(a) : 100;
  this.j = [];
}
F(Ep, R);
D = Ep.prototype;
D.add = function (a) {
  var c = this.j[this.o];
  this.j[this.o] = a;
  this.o = ((this.o + 1) | 0) % this.v | 0;
  return c;
};
D.get = function (a) {
  a = Gp(this, a);
  return this.j[a];
};
D.set = function (a, c) {
  a = Gp(this, a);
  this.j[a] = c;
};
D.clear = function () {
  this.o = this.j.length = 0;
};
D.Cb = function () {
  for (
    var a = this.j.length, c = [], e = (this.j.length - this.j.length) | 0;
    e < a;
    e = (e + 1) | 0
  ) {
    var f = c,
      g = this.get(e);
    f.push(g);
  }
  return c;
};
function Cp(a) {
  return a.j.length == 0 ? null : a.get((a.j.length - 1) | 0);
}
function Gp(a, c) {
  if (c >= a.j.length) throw ((a = new gh()), Xg(a), Yg(a, Error(a)), a.L);
  return a.j.length < a.v ? c : ((a.o + c) | 0) % a.v | 0;
}
bc.prototype.equals = function (a) {
  return fc(this, a);
};
bc.prototype.va = function () {
  return (Wf(this) + Sf()) | 0;
};
Q.prototype.equals = function (a) {
  return (
    this === a ||
    (this == null && a == null) ||
    (!(!this || !a) && this instanceof a.constructor && Xd(this, a))
  );
};
Q.prototype.va = function () {
  return (Wf(this) + Sf()) | 0;
};
function Hp() {
  this.j = 0;
}
var Ip = {},
  Jp;
F(Hp, R);
function Kp(a, c) {
  var e = new Hp();
  e.o = a;
  e.j = c;
  nl(Ip, a, e);
  return e;
}
Hp.prototype.toString = w("o");
function Lp() {
  Lp = u();
  Kp("IDLE", 1);
  Kp("BUSY", 1);
  Kp("RECOVERING", 2);
  Jp = Kp("OFFLINE", 3);
  Kp("SERVER_DOWN", 3);
  Kp("FORBIDDEN", 4);
  Kp("AUTH_REQUIRED", 4);
  Kp("DELTA_STALE_CLIENT", 4);
  Kp("SESSION_LIMIT_EXCEEDED", 5);
  Kp("LOCKED", 5);
  Kp("INCOMPATIBLE_SERVER", 5);
  Kp("CLIENT_ERROR", 5);
  Kp("CLIENT_FATAL_ERROR", 5);
  Kp("CLIENT_FATAL_ERROR_PENDING_CHANGES", 5);
  Kp("BATCH_CLIENT_ERROR", 3);
  Kp("SAVE_ERROR", 5);
  Kp("DOCUMENT_TOO_LARGE", 5);
  Kp("CSE_BLOCKED_REQUEST", 5);
  Kp("BATCH_SAVE_ERROR", 3);
  Kp("DOCS_EVERYWHERE_IMPORT_ERROR", 5);
  Kp("POST_LIMIT_EXCEEDED_ERROR", 5);
  Kp("DOCS_QUOTA_EXCEEDED_ERROR", 5);
}
function pn(a) {
  this.j = "offline-oc";
  this.o = a;
}
F(pn, Vl);
function Mp() {}
F(Mp, R);
function Do(a) {
  if (!Wh(a.getType(), "offline-oc")) throw fh("ab").L;
  return a.o;
}
var Np;
function Op(a) {
  Pp();
  if (!Qp(a)) return a;
  var c = String.fromCodePoint(47);
  c = a.indexOf(c, 3);
  return c < 0 ? "" : a.substr(c);
}
function Qp(a) {
  Pp();
  return a.substr(0, 3) === "/a/";
}
function Rp(a) {
  Pp();
  return a.replace(Np, "$1");
}
function Pp() {
  Pp = u();
  Np = RegExp("\\/u\\/[0-9]+($|\\/)");
}
function Sp(a) {
  return new rn(function () {
    var c = a();
    return uh(c);
  });
}
function Tp() {
  function a() {
    g[0] = 1732584193;
    g[1] = 4023233417;
    g[2] = 2562383102;
    g[3] = 271733878;
    g[4] = 3285377520;
    r = q = 0;
  }
  function c(x) {
    for (var y = k, z = 0; z < 64; z += 4)
      y[z / 4] = (x[z] << 24) | (x[z + 1] << 16) | (x[z + 2] << 8) | x[z + 3];
    for (z = 16; z < 80; z++) {
      x = y[z - 3] ^ y[z - 8] ^ y[z - 14] ^ y[z - 16];
      y[z] = ((x << 1) | (x >>> 31)) & 4294967295;
    }
    x = g[0];
    var B = g[1],
      G = g[2],
      C = g[3],
      X = g[4];
    for (z = 0; z < 80; z++) {
      if (z < 40)
        if (z < 20) {
          var aa = C ^ (B & (G ^ C));
          var Va = 1518500249;
        } else {
          aa = B ^ G ^ C;
          Va = 1859775393;
        }
      else
        z < 60
          ? ((aa = (B & G) | (C & (B | G))), (Va = 2400959708))
          : ((aa = B ^ G ^ C), (Va = 3395469782));
      aa = ((((x << 5) | (x >>> 27)) & 4294967295) + aa + X + Va + y[z]) & 4294967295;
      X = C;
      C = G;
      G = ((B << 30) | (B >>> 2)) & 4294967295;
      B = x;
      x = aa;
    }
    g[0] = (g[0] + x) & 4294967295;
    g[1] = (g[1] + B) & 4294967295;
    g[2] = (g[2] + G) & 4294967295;
    g[3] = (g[3] + C) & 4294967295;
    g[4] = (g[4] + X) & 4294967295;
  }
  function e(x, y) {
    if (typeof x === "string") {
      x = unescape(encodeURIComponent(x));
      for (var z = [], B = 0, G = x.length; B < G; ++B) z.push(x.charCodeAt(B));
      x = z;
    }
    y || (y = x.length);
    z = 0;
    if (q == 0)
      for (; z + 64 < y; ) {
        c(x.slice(z, z + 64));
        z += 64;
        r += 64;
      }
    for (; z < y; )
      if (((h[q++] = x[z++]), r++, q == 64))
        for (q = 0, c(h); z + 64 < y; ) {
          c(x.slice(z, z + 64));
          z += 64;
          r += 64;
        }
  }
  function f() {
    var x = [],
      y = r * 8;
    q < 56 ? e(l, 56 - q) : e(l, 64 - (q - 56));
    for (var z = 63; z >= 56; z--) {
      h[z] = y & 255;
      y >>>= 8;
    }
    c(h);
    for (z = y = 0; z < 5; z++) for (var B = 24; B >= 0; B -= 8) x[y++] = (g[z] >> B) & 255;
    return x;
  }
  for (var g = [], h = [], k = [], l = [128], p = 1; p < 64; ++p) l[p] = 0;
  var q, r;
  a();
  return {
    reset: a,
    update: e,
    digest: f,
    ce: function () {
      for (var x = f(), y = "", z = 0; z < x.length; z++)
        y +=
          "0123456789ABCDEF".charAt(Math.floor(x[z] / 16)) + "0123456789ABCDEF".charAt(x[z] % 16);
      return y;
    },
  };
}
function Up(a, c, e) {
  var f = String(K.location.href);
  return f && a && c ? [c, Vp(yi(f), a, e || null)].join(" ") : null;
}
function Vp(a, c, e) {
  var f = [],
    g = [];
  if ((Array.isArray(e) ? 2 : 1) == 1)
    return (
      (g = [c, a]),
      yb(f, function (l) {
        g.push(l);
      }),
      Wp(g.join(" "))
    );
  var h = [],
    k = [];
  yb(e, function (l) {
    k.push(l.key);
    h.push(l.value);
  });
  e = Math.floor(new Date().getTime() / 1e3);
  g = h.length == 0 ? [e, c, a] : [h.join(":"), e, c, a];
  yb(f, function (l) {
    g.push(l);
  });
  a = Wp(g.join(" "));
  a = [e, a];
  k.length == 0 || a.push(k.join(""));
  return a.join("_");
}
function Wp(a) {
  var c = Tp();
  c.update(a);
  return c.ce().toLowerCase();
}
function Xp() {
  this.j = document || { cookie: "" };
}
D = Xp.prototype;
D.set = function (a, c, e) {
  var f = false;
  if (typeof e === "object") {
    var g = e.sameSite;
    f = e.secure || false;
    var h = e.domain || void 0;
    var k = e.path || void 0;
    var l = e.ye;
  }
  if (/[;=\s]/.test(a)) throw Error("bb`" + a);
  if (/[;\r\n]/.test(c)) throw Error("cb`" + c);
  l === void 0 && (l = -1);
  this.j.cookie =
    a +
    "=" +
    c +
    (h ? ";domain=" + h : "") +
    (k ? ";path=" + k : "") +
    (l < 0
      ? ""
      : l == 0
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + l * 1e3).toUTCString()) +
    (f ? ";secure" : "") +
    (g != null ? ";samesite=" + g : "");
};
D.get = function (a, c) {
  for (var e = a + "=", f = (this.j.cookie || "").split(";"), g = 0, h; g < f.length; g++) {
    h = ab(f[g]);
    if (h.lastIndexOf(e, 0) == 0) return h.slice(e.length);
    if (h == a) return "";
  }
  return c;
};
D.remove = function (a, c, e) {
  var f = this.get(a) !== void 0;
  this.set(a, "", { ye: 0, path: c, domain: e });
  return f;
};
D.Cb = function () {
  return Yp(this).values;
};
D.clear = function () {
  for (var a = Yp(this).keys, c = a.length - 1; c >= 0; c--) this.remove(a[c]);
};
function Yp(a) {
  a = (a.j.cookie || "").split(";");
  for (var c = [], e = [], f, g, h = 0; h < a.length; h++) {
    g = ab(a[h]);
    f = g.indexOf("=");
    f == -1 ? (c.push(""), e.push(g)) : (c.push(g.substring(0, f)), e.push(g.substring(f + 1)));
  }
  return { keys: c, values: e };
}
function Zp(a, c, e, f) {
  (a = K[a]) || typeof document === "undefined" || (a = new Xp().get(c));
  return a ? Up(a, e, f) : null;
}
function $p(a) {
  var c = yi(K == null ? void 0 : K.location.href),
    e = [],
    f;
  (f = K.__SAPISID || K.__APISID || K.__3PSAPISID || K.__1PSAPISID || K.__OVERRIDE_SID)
    ? (f = true)
    : (typeof document !== "undefined" &&
        ((f = new Xp()),
        (f =
          f.get("SAPISID") ||
          f.get("APISID") ||
          f.get("__Secure-3PAPISID") ||
          f.get("__Secure-1PAPISID"))),
      (f = !!f));
  f &&
    ((f = (c =
      c.indexOf("https:") == 0 ||
      c.indexOf("chrome-extension:") == 0 ||
      c.indexOf("chrome-untrusted://new-tab-page") == 0 ||
      c.indexOf("moz-extension:") == 0)
      ? K.__SAPISID
      : K.__APISID),
    f ||
      typeof document === "undefined" ||
      ((f = new Xp()), (f = f.get(c ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID"))),
    (f = f ? Up(f, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && e.push(f),
    c &&
      ((c = Zp("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && e.push(c),
      (a = Zp("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && e.push(a)));
  return e.length == 0 ? null : e.join(" ");
}
function aq(a) {
  if (!a) return null;
  try {
    var c = parseInt(a, 10);
    return isNaN(c) ? null : c;
  } catch (e) {
    return null;
  }
}
function bq(a) {
  return (a = bl(a, "gxids"))
    ? a
        .split(",")
        .map(function (c) {
          return aq(c);
        })
        .filter(function (c) {
          return c != null && c > 0;
        })
    : [];
}
function cq(a, c) {
  this.v = a.slice();
  this.A = c;
  this.j = [];
  this.o = false;
}
function dq(a) {
  if (a.o) throw Error("db");
  a.o = true;
  return new Promise(function (c) {
    for (var e = 0; e < a.A; e++) eq(a, c);
  }).then(function () {
    return Promise.allSettled(a.j).then(function () {
      return Promise.all(a.j);
    });
  });
}
function eq(a, c) {
  if (a.v.length == 0) c();
  else {
    var e = a.v.shift(),
      f = Promise.resolve().then(function () {
        return e();
      });
    a.j.push(f);
    var g = function () {
      eq(a, c);
    };
    f.then(g, g);
  }
}
function fq(a, c, e) {
  for (var f in a) c.call(e, a[f], f, a);
}
function gq(a) {
  var c = [],
    e = 0,
    f;
  for (f in a) c[e++] = a[f];
  return c;
}
function hq(a, c) {
  return a !== null && c in a;
}
function iq(a) {
  var c = {},
    e;
  for (e in a) c[e] = a[e];
  return c;
}
var jq =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " ",
  );
function kq(a, c) {
  for (var e, f, g = 1; g < arguments.length; g++) {
    f = arguments[g];
    for (e in f) a[e] = f[e];
    for (var h = 0; h < jq.length; h++) {
      e = jq[h];
      Object.prototype.hasOwnProperty.call(f, e) && (a[e] = f[e]);
    }
  }
}
function lq(a) {
  var c = arguments.length;
  if (c == 1 && Array.isArray(arguments[0])) return lq.apply(null, arguments[0]);
  for (var e = {}, f = 0; f < c; f++) e[arguments[f]] = true;
  return e;
}
function mq() {
  try {
    return K.localStorage.getItem("docs-oiouid") || null;
  } catch (a) {
    return null;
  }
}
function nq(a) {
  var c = mq();
  return Hl(a, "docs-offline-lsuid") == c;
}
function oq(a) {
  this.j = this.C = this.A = "";
  this.F = null;
  this.D = this.o = "";
  this.B = false;
  var c;
  a instanceof oq
    ? ((this.B = a.B),
      pq(this, a.A),
      (this.C = a.C),
      (this.j = a.j),
      qq(this, a.F),
      rq(this, a.o),
      sq(this, a.v.clone()),
      tq(this, a.D))
    : a && (c = String(a).match(Rk))
      ? ((this.B = false),
        pq(this, c[1] || "", true),
        (this.C = uq(c[2] || "")),
        (this.j = uq(c[3] || "", true)),
        qq(this, c[4]),
        rq(this, c[5] || "", true),
        sq(this, c[6] || "", true),
        tq(this, c[7] || "", true))
      : ((this.B = false), (this.v = new vq(null, this.B)));
}
oq.prototype.toString = function () {
  var a = [],
    c = this.A;
  c && a.push(wq(c, xq, true), ":");
  var e = this.j;
  if (e || c == "file") {
    a.push("//");
    (c = this.C) && a.push(wq(c, xq, true), "@");
    a.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    e = this.F;
    e != null && a.push(":", String(e));
  }
  if ((e = this.o)) {
    this.j && e.charAt(0) != "/" && a.push("/");
    a.push(wq(e, e.charAt(0) == "/" ? yq : zq, true));
  }
  (e = this.v.toString()) && a.push("?", e);
  (e = this.D) && a.push("#", wq(e, Aq));
  return a.join("");
};
oq.prototype.resolve = function (a) {
  var c = this.clone(),
    e = !!a.A;
  e ? pq(c, a.A) : (e = !!a.C);
  e ? (c.C = a.C) : (e = !!a.j);
  e ? (c.j = a.j) : (e = a.F != null);
  var f = a.o;
  if (e) qq(c, a.F);
  else if ((e = !!a.o)) {
    if (f.charAt(0) != "/")
      if (this.j && !this.o) f = "/" + f;
      else {
        var g = c.o.lastIndexOf("/");
        g != -1 && (f = c.o.slice(0, g + 1) + f);
      }
    g = f;
    if (g == ".." || g == ".") f = "";
    else if (g.indexOf("./") != -1 || g.indexOf("/.") != -1) {
      f = g.lastIndexOf("/", 0) == 0;
      g = g.split("/");
      for (var h = [], k = 0; k < g.length; ) {
        var l = g[k++];
        l == "."
          ? f && k == g.length && h.push("")
          : l == ".."
            ? ((h.length > 1 || (h.length == 1 && h[0] != "")) && h.pop(),
              f && k == g.length && h.push(""))
            : (h.push(l), (f = true));
      }
      f = h.join("/");
    } else f = g;
  }
  e ? rq(c, f) : (e = a.v.toString() !== "");
  e ? sq(c, a.v.clone()) : (e = !!a.D);
  e && tq(c, a.D);
  return c;
};
oq.prototype.clone = function () {
  return new oq(this);
};
function pq(a, c, e) {
  a.A = e ? uq(c, true) : c;
  a.A && (a.A = a.A.replace(/:$/, ""));
}
function qq(a, c) {
  if (c) {
    c = Number(c);
    if (isNaN(c) || c < 0) throw Error("fb`" + c);
    a.F = c;
  } else a.F = null;
}
function rq(a, c, e) {
  a.o = e ? uq(c, true) : c;
  return a;
}
function sq(a, c, e) {
  c instanceof vq ? ((a.v = c), Bq(a.v, a.B)) : (e || (c = wq(c, Cq)), (a.v = new vq(c, a.B)));
  return a;
}
function tq(a, c, e) {
  a.D = e ? uq(c) : c;
  return a;
}
function Dq(a) {
  return a instanceof oq ? a.clone() : new oq(a);
}
function uq(a, c) {
  return a ? (c ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
}
function wq(a, c, e) {
  return typeof a === "string"
    ? ((a = encodeURI(a).replace(c, Eq)), e && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a)
    : null;
}
function Eq(a) {
  a = a.charCodeAt(0);
  return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
}
var xq = /[#\/\?@]/g,
  zq = /[#\?:]/g,
  yq = /[#\?]/g,
  Cq = /[#\?@]/g,
  Aq = /#/g;
function vq(a, c) {
  this.o = this.j = null;
  this.v = a || null;
  this.A = !!c;
}
function Fq(a) {
  a.j ||
    ((a.j = new Map()),
    (a.o = 0),
    a.v &&
      Tk(a.v, function (c, e) {
        a.add(decodeURIComponent(c.replace(/\+/g, " ")), e);
      }));
}
D = vq.prototype;
D.add = function (a, c) {
  Fq(this);
  this.v = null;
  a = Gq(this, a);
  var e = this.j.get(a);
  e || this.j.set(a, (e = []));
  e.push(c);
  this.o = this.o + 1;
  return this;
};
D.remove = function (a) {
  Fq(this);
  a = Gq(this, a);
  return this.j.has(a)
    ? ((this.v = null), (this.o = this.o - this.j.get(a).length), this.j.delete(a))
    : false;
};
D.clear = function () {
  this.j = this.v = null;
  this.o = 0;
};
function Hq(a, c) {
  Fq(a);
  c = Gq(a, c);
  return a.j.has(c);
}
D.forEach = function (a, c) {
  Fq(this);
  this.j.forEach(function (e, f) {
    e.forEach(function (g) {
      a.call(c, g, f, this);
    }, this);
  }, this);
};
D.Cb = function (a) {
  Fq(this);
  var c = [];
  if (typeof a === "string") Hq(this, a) && (c = c.concat(this.j.get(Gq(this, a))));
  else {
    a = Array.from(this.j.values());
    for (var e = 0; e < a.length; e++) c = c.concat(a[e]);
  }
  return c;
};
D.set = function (a, c) {
  Fq(this);
  this.v = null;
  a = Gq(this, a);
  Hq(this, a) && (this.o = this.o - this.j.get(a).length);
  this.j.set(a, [c]);
  this.o = this.o + 1;
  return this;
};
D.get = function (a, c) {
  if (!a) return c;
  a = this.Cb(a);
  return a.length > 0 ? String(a[0]) : c;
};
D.toString = function () {
  if (this.v) return this.v;
  if (!this.j) return "";
  for (var a = [], c = Array.from(this.j.keys()), e = 0; e < c.length; e++) {
    var f = c[e],
      g = encodeURIComponent(String(f));
    f = this.Cb(f);
    for (var h = 0; h < f.length; h++) {
      var k = g;
      f[h] !== "" && (k += "=" + encodeURIComponent(String(f[h])));
      a.push(k);
    }
  }
  return (this.v = a.join("&"));
};
D.clone = function () {
  var a = new vq();
  a.v = this.v;
  this.j && ((a.j = new Map(this.j)), (a.o = this.o));
  return a;
};
function Gq(a, c) {
  c = String(c);
  a.A && (c = c.toLowerCase());
  return c;
}
function Bq(a, c) {
  c &&
    !a.A &&
    (Fq(a),
    (a.v = null),
    a.j.forEach(function (e, f) {
      var g = f.toLowerCase();
      if (f != g && (this.remove(f), this.remove(g), e.length > 0)) {
        this.v = null;
        f = this.j;
        var h = f.set;
        g = Gq(this, g);
        var k = e.length;
        if (k > 0) {
          for (var l = Array(k), p = 0; p < k; p++) l[p] = e[p];
          k = l;
        } else k = [];
        h.call(f, g, k);
        this.o = this.o + e.length;
      }
    }, a));
  a.A = c;
}
function Iq() {
  var a = K.window;
  a.onbeforeunload = u();
  a.location.reload();
}
function Jq() {
  this.j = function () {
    Iq();
  };
}
Jq.prototype.notify = function () {
  window.confirm(
    "This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.",
  ) && this.j();
};
function Kq(a, c, e, f) {
  f =
    f === void 0
      ? function () {
          return Ij();
        }
      : f;
  return Cj(
    Jj(
      K.navigator.locks.request(a, { signal: e.signal }, function () {
        return c();
      }),
    ),
    function (g) {
      if (g.name === "AbortError") return f ? f() : Ij();
    },
  );
}
function Lq(a, c) {
  this.type = a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.o = false;
}
Lq.prototype.stopPropagation = function () {
  this.o = true;
};
Lq.prototype.preventDefault = function () {
  this.defaultPrevented = true;
};
var Mq = (function () {
  if (!K.addEventListener || !Object.defineProperty) return false;
  var a = false,
    c = Object.defineProperty({}, "passive", {
      get: function () {
        a = true;
      },
    });
  try {
    var e = u();
    K.addEventListener("test", e, c);
    K.removeEventListener("test", e, c);
  } catch (f) {}
  return a;
})();
function Nq(a, c) {
  Lq.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button =
    this.screenY =
    this.screenX =
    this.clientY =
    this.clientX =
    this.offsetY =
    this.offsetX =
      0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.timeStamp = 0;
  this.j = null;
  a && this.init(a, c);
}
Xa(Nq, Lq);
Nq.prototype.init = function (a, c) {
  var e = (this.type = a.type),
    f = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  c = a.relatedTarget;
  c || (e == "mouseover" ? (c = a.fromElement) : e == "mouseout" && (c = a.toElement));
  this.relatedTarget = c;
  f
    ? ((this.clientX = f.clientX !== void 0 ? f.clientX : f.pageX),
      (this.clientY = f.clientY !== void 0 ? f.clientY : f.pageY),
      (this.screenX = f.screenX || 0),
      (this.screenY = f.screenY || 0))
    : ((this.offsetX = a.offsetX),
      (this.offsetY = a.offsetY),
      (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
      (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
      (this.screenX = a.screenX || 0),
      (this.screenY = a.screenY || 0));
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.key = a.key || "";
  this.charCode = a.charCode || (e == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.pointerId = a.pointerId || 0;
  this.pointerType = a.pointerType;
  this.state = a.state;
  this.timeStamp = a.timeStamp;
  this.j = a;
  a.defaultPrevented && Nq.qa.preventDefault.call(this);
};
Nq.prototype.stopPropagation = function () {
  Nq.qa.stopPropagation.call(this);
  this.j.stopPropagation ? this.j.stopPropagation() : (this.j.cancelBubble = true);
};
Nq.prototype.preventDefault = function () {
  Nq.qa.preventDefault.call(this);
  var a = this.j;
  a.preventDefault ? a.preventDefault() : (a.returnValue = false);
};
var Oq = "closure_listenable_" + ((Math.random() * 1e6) | 0);
var Pq = 0;
function Qq(a, c, e, f, g) {
  this.listener = a;
  this.proxy = null;
  this.src = c;
  this.type = e;
  this.capture = !!f;
  this.handler = g;
  this.key = ++Pq;
  this.sb = this.Ta = false;
}
function Rq(a) {
  a.sb = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.handler = null;
}
function Sq(a) {
  this.src = a;
  this.j = {};
  this.o = 0;
}
Sq.prototype.add = function (a, c, e, f, g) {
  var h = a.toString();
  a = this.j[h];
  a || ((a = this.j[h] = []), this.o++);
  var k = Tq(a, c, f, g);
  k > -1
    ? ((c = a[k]), e || (c.Ta = false))
    : ((c = new Qq(c, this.src, h, !!f, g)), (c.Ta = e), a.push(c));
  return c;
};
Sq.prototype.remove = function (a, c, e, f) {
  a = a.toString();
  if (!(a in this.j)) return false;
  var g = this.j[a];
  c = Tq(g, c, e, f);
  return c > -1
    ? (Rq(g[c]),
      Array.prototype.splice.call(g, c, 1),
      g.length == 0 && (delete this.j[a], this.o--),
      true)
    : false;
};
function Uq(a, c) {
  var e = c.type;
  e in a.j && Ab(a.j[e], c) && (Rq(c), a.j[e].length == 0 && (delete a.j[e], a.o--));
}
function Tq(a, c, e, f) {
  for (var g = 0; g < a.length; ++g) {
    var h = a[g];
    if (!h.sb && h.listener == c && h.capture == !!e && h.handler == f) return g;
  }
  return -1;
}
var Vq = "closure_lm_" + ((Math.random() * 1e6) | 0),
  Wq = {},
  Xq = 0;
function Yq(a, c, e, f, g) {
  if (f && f.once) return Zq(a, c, e, f, g);
  if (Array.isArray(c)) {
    for (var h = 0; h < c.length; h++) Yq(a, c[h], e, f, g);
    return null;
  }
  e = $q(e);
  return a && a[Oq]
    ? a.v.add(String(c), e, false, Ma(f) ? !!f.capture : !!f, g)
    : ar(a, c, e, false, f, g);
}
function ar(a, c, e, f, g, h) {
  if (!c) throw Error("hb");
  var k = Ma(g) ? !!g.capture : !!g,
    l = br(a);
  l || (a[Vq] = l = new Sq(a));
  e = l.add(c, e, f, k, h);
  if (e.proxy) return e;
  f = cr();
  e.proxy = f;
  f.src = a;
  f.listener = e;
  if (a.addEventListener) {
    Mq || (g = k);
    g === void 0 && (g = false);
    a.addEventListener(c.toString(), f, g);
  } else if (a.attachEvent) a.attachEvent(dr(c.toString()), f);
  else if (a.addListener && a.removeListener) a.addListener(f);
  else throw Error("ib");
  Xq++;
  return e;
}
function cr() {
  function a(e) {
    return c.call(a.src, a.listener, e);
  }
  var c = er;
  return a;
}
function Zq(a, c, e, f, g) {
  if (Array.isArray(c)) {
    for (var h = 0; h < c.length; h++) Zq(a, c[h], e, f, g);
    return null;
  }
  e = $q(e);
  return a && a[Oq]
    ? a.v.add(String(c), e, true, Ma(f) ? !!f.capture : !!f, g)
    : ar(a, c, e, true, f, g);
}
function fr(a, c, e, f, g) {
  if (Array.isArray(c)) for (var h = 0; h < c.length; h++) fr(a, c[h], e, f, g);
  else
    ((f = Ma(f) ? !!f.capture : !!f), (e = $q(e)), a && a[Oq])
      ? a.v.remove(String(c), e, f, g)
      : a &&
        (a = br(a)) &&
        ((c = a.j[c.toString()]),
        (a = -1),
        c && (a = Tq(c, e, f, g)),
        (e = a > -1 ? c[a] : null) && gr(e));
}
function gr(a) {
  if (typeof a !== "number" && a && !a.sb) {
    var c = a.src;
    if (c && c[Oq]) Uq(c.v, a);
    else {
      var e = a.type,
        f = a.proxy;
      c.removeEventListener
        ? c.removeEventListener(e, f, a.capture)
        : c.detachEvent
          ? c.detachEvent(dr(e), f)
          : c.addListener && c.removeListener && c.removeListener(f);
      Xq--;
      (e = br(c)) ? (Uq(e, a), e.o == 0 && ((e.src = null), (c[Vq] = null))) : Rq(a);
    }
  }
}
function dr(a) {
  return a in Wq ? Wq[a] : (Wq[a] = "on" + a);
}
function er(a, c) {
  if (a.sb) a = true;
  else {
    c = new Nq(c, this);
    var e = a.listener,
      f = a.handler || a.src;
    a.Ta && gr(a);
    a = e.call(f, c);
  }
  return a;
}
function br(a) {
  a = a[Vq];
  return a instanceof Sq ? a : null;
}
var hr = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
function $q(a) {
  if (typeof a === "function") return a;
  a[hr] ||
    (a[hr] = function (c) {
      return a.handleEvent(c);
    });
  return a[hr];
}
Hi(function (a) {
  er = a(er);
});
function ir(a, c) {
  Lq.call(this, a);
  this.error = c;
}
F(ir, Lq);
var jr = /\/d\/([^\/]+)/,
  kr = /\/r\/([^\/]+)/;
function lr(a) {
  a = a.match(Rk)[5] || null;
  return jr.test(a);
}
function mr(a, c) {
  if (lr(a)) {
    lr(a);
    a = a.match(Rk);
    var e = a[5];
    e = e.replace(c, "");
    c = Qk(a[1], a[2], a[3], a[4], e, a[6], a[7]);
  } else c = a;
  return c;
}
function nr() {
  T.call(this);
  this.v = new Sq(this);
  this.fa = this;
  this.P = null;
}
Xa(nr, T);
nr.prototype[Oq] = true;
nr.prototype.addEventListener = function (a, c, e, f) {
  Yq(this, a, c, e, f);
};
nr.prototype.removeEventListener = function (a, c, e, f) {
  fr(this, a, c, e, f);
};
nr.prototype.dispatchEvent = function (a) {
  var c = this.P;
  if (c) {
    var e = [];
    for (var f = 1; c; c = c.P) {
      e.push(c);
      ++f;
    }
  }
  c = this.fa;
  f = a.type || a;
  if (typeof a === "string") a = new Lq(a, c);
  else if (a instanceof Lq) a.target = a.target || c;
  else {
    var g = a;
    a = new Lq(f, c);
    kq(a, g);
  }
  g = true;
  var h;
  if (e)
    for (h = e.length - 1; !a.o && h >= 0; h--) {
      var k = (a.currentTarget = e[h]);
      g = or(k, f, true, a) && g;
    }
  a.o ||
    ((k = a.currentTarget = c), (g = or(k, f, true, a) && g), a.o || (g = or(k, f, false, a) && g));
  if (e)
    for (h = 0; !a.o && h < e.length; h++) {
      k = a.currentTarget = e[h];
      g = or(k, f, false, a) && g;
    }
  return g;
};
nr.prototype.O = function () {
  nr.qa.O.call(this);
  if (this.v) {
    var a = this.v,
      c = 0,
      e;
    for (e in a.j) {
      for (var f = a.j[e], g = 0; g < f.length; g++) {
        ++c;
        Rq(f[g]);
      }
      delete a.j[e];
      a.o--;
    }
  }
  this.P = null;
};
function or(a, c, e, f) {
  c = a.v.j[String(c)];
  if (!c) return true;
  c = c.concat();
  for (var g = true, h = 0; h < c.length; ++h) {
    var k = c[h];
    if (k && !k.sb && k.capture == e) {
      var l = k.listener,
        p = k.handler || k.src;
      k.Ta && Uq(a.v, k);
      g = l.call(p, f) !== false && g;
    }
  }
  return g && !f.defaultPrevented;
}
function pr(a, c) {
  nr.call(this);
  this.o = a || 1;
  this.j = c || K;
  this.A = Sa(this.Me, this);
  this.B = Date.now();
}
Xa(pr, nr);
D = pr.prototype;
D.ib = false;
D.ua = null;
D.setInterval = function (a) {
  this.o = a;
  this.ua && this.ib ? (this.stop(), this.start()) : this.ua && this.stop();
};
D.Me = function () {
  if (this.ib) {
    var a = Date.now() - this.B;
    a > 0 && a < this.o * 0.8
      ? (this.ua = this.j.setTimeout(this.A, this.o - a))
      : (this.ua && (this.j.clearTimeout(this.ua), (this.ua = null)),
        this.dispatchEvent("tick"),
        this.ib && (this.stop(), this.start()));
  }
};
D.start = function () {
  this.ib = true;
  this.ua || ((this.ua = this.j.setTimeout(this.A, this.o)), (this.B = Date.now()));
};
D.stop = function () {
  this.ib = false;
  this.ua && (this.j.clearTimeout(this.ua), (this.ua = null));
};
D.O = function () {
  pr.qa.O.call(this);
  this.stop();
  delete this.j;
};
function qr(a, c, e) {
  if (typeof a === "function") e && (a = Sa(a, e));
  else if (a && typeof a.handleEvent == "function") a = Sa(a.handleEvent, a);
  else throw Error("jb");
  return Number(c) > 2147483647 ? -1 : K.setTimeout(a, c || 0);
}
function rr(a) {
  var c = null;
  return new Yi(function (e, f) {
    c = qr(function () {
      e(void 0);
    }, a);
    c == -1 && f(Error("kb"));
  }).Sa(function (e) {
    K.clearTimeout(c);
    throw e;
  });
}
function sr(a, c, e) {
  T.call(this);
  this.j = a;
  this.v = c || 0;
  this.o = e;
  this.A = Sa(this.Qd, this);
}
Xa(sr, T);
D = sr.prototype;
D.jb = 0;
D.O = function () {
  sr.qa.O.call(this);
  this.stop();
  delete this.j;
  delete this.o;
};
D.start = function (a) {
  this.stop();
  this.jb = qr(this.A, a !== void 0 ? a : this.v);
};
D.stop = function () {
  this.isActive() && K.clearTimeout(this.jb);
  this.jb = 0;
};
D.isActive = function () {
  return this.jb != 0;
};
D.Qd = function () {
  this.jb = 0;
  this.j && this.j.call(this.o);
};
function tr(a, c, e, f) {
  T.call(this);
  this.v = f != null ? f : 0.15;
  this.B = a;
  this.A = c;
  this.D = e;
  this.j = new sr(this.Ie, void 0, this);
  this.C = Number.NEGATIVE_INFINITY;
  this.o = 0;
}
F(tr, T);
D = tr.prototype;
D.isActive = function () {
  return this.j.isActive();
};
D.start = function () {
  ur(this, false, false);
};
function ur(a, c, e) {
  c && (a.j.stop(), vr(a, a.A));
  a.isActive() ||
    ((c = Math.max(0, a.C + a.o - Date.now())),
    c == 0 && (e ? (c = vr(a, a.A)) : (a.o = 0)),
    a.j.start(c));
}
D.stop = function () {
  this.j.stop();
};
function vr(a, c) {
  c > 0 && a.v != 0 && (c = Math.floor(c * (1 - a.v + Math.random() * a.v * 2)));
  return (a.o = c);
}
D.Ie = function () {
  this.C = Date.now();
  vr(this, Math.min(Math.max(this.o * 2, this.A), this.D));
  this.B();
};
D.O = function () {
  this.j.dispose();
  delete this.j;
  delete this.B;
  T.prototype.O.call(this);
};
function wr(a) {
  T.call(this);
  this.o = a;
  this.j = {};
}
Xa(wr, T);
var xr = [];
function yr(a, c, e, f) {
  Array.isArray(e) || (e && (xr[0] = e.toString()), (e = xr));
  for (var g = 0; g < e.length; g++) {
    var h = Yq(c, e[g], f || a.handleEvent, false, a.o || a);
    if (!h) break;
    a.j[h.key] = h;
  }
  return a;
}
function zr(a) {
  fq(
    a.j,
    function (c, e) {
      this.j.hasOwnProperty(e) && gr(c);
    },
    a,
  );
  a.j = {};
}
wr.prototype.O = function () {
  wr.qa.O.call(this);
  zr(this);
};
wr.prototype.handleEvent = function () {
  throw Error("lb");
};
function Ar(a, c, e, f, g, h, k) {
  k = k === void 0 ? true : k;
  T.call(this);
  var l = this;
  this.o = a;
  this.o.M = 1e4;
  this.ha = c;
  this.H = h;
  this.A = new tr(
    function () {
      return l.cb();
    },
    3e4,
    36e5,
  );
  this.I = 0;
  this.R = null;
  this.aa = new yp("errorsender", 1, 8, f);
  il(this, this.aa);
  this.W = false;
  this.S = null;
  this.P = new Set();
  this.N = new wr(this);
  this.wa = e || 10;
  this.oa = g || null;
  yr(this.N, this.o, "complete", this.te);
  yr(this.N, this.o, "ready", this.cb);
  this.ja = null;
  this.U = new dn();
  il(this, this.U);
  this.H &&
    en(this.U, this.H.o(), function () {
      l.H.j().j >= 3 && (l.ja = (Lp(), Jp));
      l.H.j().j >= 3 || l.ja !== (Lp(), Jp) || Br(l);
    });
  this.ia = k;
  this.pa = {};
}
F(Ar, T);
D = Ar.prototype;
D.send = function (a, c, e, f) {
  U(this.ha, "docs-dafjera") && (a = mr(mr(a, kr), jr));
  var g = Aj(
    Aj(
      this.Za(),
      function (h) {
        if (!(h >= this.wa))
          return (
            this.ia && (a = Yk(a, "errorSender_enqueueTimeMs", Date.now().toString())),
            (h = {}),
            (h.u = a),
            (h.m = c),
            (h.c = e),
            (h.h = f),
            this.kb(h)
          );
      },
      this,
    ),
    this.cb,
    this,
  );
  Dj(
    g,
    function () {
      this.P.delete(g);
    },
    this,
  );
  this.P.add(g);
};
function Cr(a) {
  return gj(Array.from(a.P.values())).then(u());
}
D.cb = function () {
  var a = this.H && this.H.j().j >= 3,
    c = this.Oa() || this.o.isActive() || this.A.isActive() || this.W;
  return a || c ? Ij() : Dr(this);
};
function Dr(a) {
  return a.ub(function () {
    return Aj(a.Ya(), function (c) {
      return Er(a, c);
    });
  });
}
function Er(a, c) {
  if (a.A.isActive() || a.o.isActive() || a.W) return Ij();
  if (!c) return (a.A.stop(), Ij());
  if (c.u.length > 4e3) return a.Ka();
  try {
    Ap(a.aa);
    a.S = new tj();
    var e = c.u;
    a.oa != null && (e = Yk(e, "reportingSessionId", a.oa));
    a.I > 0 && (e = Yk(e, "retryCount", a.I));
    a.R != null && (e = Yk(e, "previousErrorSendStatus", a.R));
    a.ia &&
      ((e = Yk(e, "errorSender_sendTimeMs", Date.now().toString())),
      (e = Yk(e, "errorSenderType", a.Ab())),
      c.errorSender_frontIndex && (e = Yk(e, "errorSender_frontIndex", c.errorSender_frontIndex)),
      c.errorSender_nextIndex && (e = Yk(e, "errorSender_nextIndex", c.errorSender_nextIndex)),
      c.errorSender_queueSize && (e = Yk(e, "errorSender_queueSize", c.errorSender_queueSize)));
    a.pa = c;
    var f = c.m,
      g = c.c,
      h = c.h;
    return Aj(
      Aj(a.Ka(), function () {
        a.o.send(e, f, g, h);
      }),
      function () {
        return a.S;
      },
    );
  } catch (k) {
    if (zk(k) instanceof xp) a.W = true;
    else throw Lk(k, { "docs-origin-class": "docs.debug.ErrorSender" });
  }
  return Ij();
}
D.te = function () {
  var a = Fr(this.o),
    c = this.S,
    e = Gr(this.o) || (a >= 400 && a <= 500),
    f = this.I > 3;
  e || f
    ? ((this.I = 0),
      (this.R = null),
      this.A.stop(),
      Aj(Ij(), function () {
        c.ma();
      }))
    : (this.I++, (this.R = a === -1 ? this.o.C : a), Br(this), this.kb(this.pa), c.ma());
};
function Br(a) {
  a.I != 1 || a.A.isActive() ? a.A.start() : ur(a.A, true, true);
}
D.O = function () {
  hl(this.N, this.A, this.o, this.U);
  this.P.clear();
  T.prototype.O.call(this);
};
D.Ab = A("BaseErrorSender");
function Hr(a, c, e, f, g) {
  Ar.call(this, a, c, e, void 0, f, g, void 0);
  this.j = [];
}
F(Hr, Ar);
D = Hr.prototype;
D.ub = function (a) {
  return a();
};
D.kb = function (a) {
  this.j.push(a);
  return Ij();
};
D.Ka = function () {
  this.j.shift();
  return Ij();
};
D.Ya = function () {
  return Ij(this.j[0] !== void 0 ? this.j[0] : null);
};
D.Za = function () {
  return Ij(this.j.length);
};
D.Ab = A("MemoryErrorSender");
D.O = function () {
  delete this.j;
  Ar.prototype.O.call(this);
};
function Ir() {
  var a = a === void 0 ? false : a;
  if (a === void 0 ? 0 : a) throw Error("mb`a");
}
Ir.prototype.toString = A("a");
new Ir();
function Jr(a) {
  this.j = fg(Ai(), pe(a));
  a = mf(this.j, 1);
  this.o = Math.floor(Math.random() * 100) < a;
}
Jr.prototype.toString = function () {
  var a = "{bool=" + !(this.o ? !lf(this.j, 5) : !lf(this.j, 2)) + ', string="',
    c = this.o ? rf(this.j, 6) : of(this.j, 3);
  a = a + (c != null ? String(c) : "") + '", int=';
  c = this.o ? qf(this.j, 7) : mf(this.j, 4, -1);
  return a + (c != null ? Number(c) : -1) + "}";
};
function Kr(a) {
  this.j = new Map();
  this.o = [];
  if ((a = a.get("docs-cei"))) {
    var c = a.i;
    c && Bb(this.o, c);
    a = a.cf || {};
    for (var e in a) this.j.set(e, new Jr(a[e]));
  }
}
Kr.prototype.get = function (a) {
  return this.j.get(a) || null;
};
function Lr() {
  for (var a in Array.prototype) return false;
  return true;
}
var Mr = [
    'window[("_callback_" + expid)] is not a function',
    "Cannot read properties of null (reading 'readyState')",
    "request failed on client side",
  ],
  Nr = [/(undefined|constructor).*YT|YT.*(undefined|constructor)/];
function Or(a) {
  this.j = a;
}
function Pr(a) {
  var c = a.j;
  if (c == null) return null;
  if (typeof c === "string") return c;
  throw new TypeError("ob`string`K1cgmc`" + a.j + "`" + typeof a.j);
}
Or.prototype.toString = function () {
  var a = Pr(this);
  if (a === null) throw Error("nb`K1cgmc");
  return a;
};
function Qr() {
  var a = K;
  a = a === void 0 ? window : a;
  var c = new Or(pi("K1cgmc", a));
  a = Rr;
  var e = new Rr();
  c = Pr(c);
  return c === null ? e : cg(a, "[" + c.substring(4));
}
function Sr(a) {
  this.G = M(a);
}
F(Sr, Q);
Sr.prototype.ya = function (a) {
  return vf(this, 7, a);
};
function Tr(a) {
  this.G = M(a);
}
F(Tr, Q);
function Ur(a) {
  return bf(a, Sr, We(a, Vr, 4));
}
var Vr = [4, 5];
function Wr(a) {
  this.G = M(a);
}
F(Wr, Q);
function Xr(a) {
  this.G = M(a);
}
F(Xr, Q);
function Rr(a) {
  this.G = M(a);
}
F(Rr, Q);
function Yr(a) {
  return bf(a, Tr, 1);
}
function Zr() {
  this.j = dg(Qr());
}
Zr.prototype.Va = function () {
  var a = new Map(),
    c,
    e = (c = this.j) == null ? void 0 : Ur(Yr(c));
  if (e == null ? 0 : kf(e, 2) != null) {
    var f;
    (c = (f = pf(e, 2)) == null ? void 0 : f.toString()) &&
      a.set("canaryanalysisservertestgroup", c);
    if (e == null) var g = void 0;
    else if ((e = cf(e, ui, 3)) == null) g = void 0;
    else {
      f = Number;
      g = g === void 0 ? "0" : g;
      var h;
      c = (h = Od(Ge(e, 1, void 0, void 0, Pd))) != null ? h : g;
      g = f(c);
      h = mf(e, 2);
      g = new Date(g * 1e3 + h / 1e6).valueOf().toString();
    }
    g && a.set("serverstarttimemillis", g);
  }
  var k, l;
  (g = (k = this.j) == null ? void 0 : (l = cf(k, Tr, 1)) == null ? void 0 : pf(l, 6)) &&
    a.set("clientApp", String(g));
  return a;
};
function $r(a, c) {
  this.width = a;
  this.height = c;
}
D = $r.prototype;
D.clone = function () {
  return new $r(this.width, this.height);
};
D.aspectRatio = function () {
  return this.width / this.height;
};
D.ceil = function () {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
D.floor = function () {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
D.round = function () {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function as() {
  this.j = K.document || document;
}
function bs() {
  function a() {}
  this.j = a.call.bind(a.toString);
}
bs.prototype.Va = function () {
  var a = new Map();
  cs() && a.set("apps_telemetry.screen_tampered", "true");
  a: {
    var c = I(Array.prototype),
      e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next()) {
        var g = true;
        break a;
      }
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
    g = false;
  }
  g && a.set("apps_telemetry.array_prototype_tampered", "true");
  ds() || a.set("apps_telemetry.canvas_creation_broken", "true");
  !es() && K.navigator && K.navigator.webdriver && a.set("apps_telemetry.webdriver", "true");
  g = false;
  c = I(fs);
  e = c.next();
  var h;
  try {
    for (; !e.done; e = c.next()) {
      var k = e.value,
        l = gs(k.key);
      l === 0
        ? (a.set("apps_telemetry.automation_property_present." + k.ka, "true"), (g = true))
        : l === 2 && a.set("apps_telemetry.automation_property_check_failed." + k.ka, "true");
    }
  } finally {
    e && !e.done && (h = c.return) && h.call(c);
  }
  g && a.set("apps_telemetry.automation_detected", "true");
  h = false;
  k = I(hs);
  l = k.next();
  var p;
  try {
    for (; !l.done; l = k.next()) {
      var q = l.value,
        r = q.ka,
        x = is(this, q.name, q.Gd);
      if (!x.Qa) {
        var y = x.reason;
        a.set("apps_telemetry.native_function_tampering." + r + ".reason", y);
        y === "non_function_type" &&
          a.set("apps_telemetry.native_function_tampering." + r + ".type", x.type);
        h = true;
      }
    }
  } finally {
    l && !l.done && (p = k.return) && p.call(k);
  }
  h && a.set("apps_telemetry.native_function_tampering_detected", "true");
  return a;
};
function cs() {
  if (es()) return false;
  var a = K.screen,
    c = !(a instanceof Screen);
  if (Lb || Gb) return c;
  try {
    var e = u();
    a.addEventListener("change", e);
    a.removeEventListener("change", e);
  } catch (f) {
    c = true;
  }
  return c;
}
function ds() {
  function a(c) {
    try {
      var e = new $r(1, 500);
      if (c) {
        c = "CANVAS";
        e = document;
        c = String(c);
        e.contentType === "application/xhtml+xml" && (c = c.toLowerCase());
        var f = e.createElement(c);
      } else f = new OffscreenCanvas(e.width, e.height);
      return f.getContext("2d") != null;
    } catch (g) {
      return false;
    }
  }
  return a(false) && (es() || a(true));
}
function es() {
  return (
    "WorkerGlobalScope" in K &&
    typeof K.WorkerGlobalScope === "function" &&
    self instanceof K.WorkerGlobalScope
  );
}
function gs(a) {
  if (es() || !K) return 1;
  try {
    if (a in K || (K.document && a in K.document)) return 0;
  } catch (c) {
    return 2;
  }
  return 1;
}
function is(a, c, e) {
  try {
    var f = e();
  } catch (h) {
    return { Qa: false, reason: "not_reachable" };
  }
  e = js(f);
  if (e !== "function") return { Qa: false, reason: "non_function_type", type: e };
  try {
    var g = a.j(f);
  } catch (h) {
    return { Qa: false, reason: "to_string_failed" };
  }
  a = ks.exec(g);
  return a
    ? (a = a[1])
      ? a !== c
        ? { Qa: false, reason: "likely_wrong_native_function" }
        : { Qa: true }
      : { Qa: false, reason: "likely_bound_function" }
    : { Qa: false, reason: "likely_non_native_source" };
}
function js(a) {
  switch (typeof a) {
    case "function":
      return "function";
    case "undefined":
      return "undefined";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object":
      return a === null ? "null" : "object";
    case "symbol":
      return "symbol";
    case "bigint":
      return "bigint";
    default:
      return "unknown";
  }
}
var fs = [
    { key: "Cypress", ka: "cypress" },
    { key: "$cdc_asdjflasutopfhvcZLmcfl_", ka: "selenium" },
    { key: "$wdc_", ka: "chrome_driver" },
    { key: "domAutomationController", ka: "chromium_automation" },
    { key: "callPhantom", ka: "phantomjs" },
    { key: "windmill", ka: "windmill" },
    { key: "____LocationIntercept", ka: "awesomium" },
    { key: "awesomium", ka: "awesomium" },
    { key: "ubot", ka: "ubot" },
    { key: "cefsharp_CreatePromise", ka: "cefsharp" },
    { key: "__nightmare", ka: "nightmare" },
  ],
  hs = [
    {
      name: "getOwnPropertyDescriptor",
      Gd: function () {
        return Object.getOwnPropertyDescriptor;
      },
      ka: "Object.getOwnPropertyDescriptor",
    },
    {
      name: "addEventListener",
      Gd: function () {
        return K.addEventListener;
      },
      ka: "global.addEventListener",
    },
  ],
  ks = /^function\s*(?:\s([a-zA-Z_$][\w$]+))?\(\) \{\s+\[native code\]\s+\}$/;
var ls = [],
  ms = [],
  ns = [
    RegExp("^_0x[a-f0-9]{6} is not defined$"),
    RegExp("[Zz]otero"),
    RegExp('^Not found$|^Unknown Error of type "string": Not found$'),
  ],
  os =
    "egfdjlfmgnehecnclamagfafdccgfndp mndnfokpggljbaajbnioimlmbfngpief mlkejohendkgipaomdopolhpbihbhfnf kgonammgkackdilhodbgbmodpepjocdp klbcgckkldhdhonijdbnhhaiedfkllef pmehocpgjmkenlokgjfkaichfjdhpeol cjlaeehoipngghikfjogbdkpbdgebppb ghbmnnjooekpmoecnnnilnnbdlolhkhi lmjegmlicamnimmfhcmpkclmigmmcbeh gmbmikajjgmnabiglmofipeabaddhgne lpcaedmchfhocbbapmcbpinfpgnhiddi gbkeegbaiigmenfmjfclcdgdpimamgkj adokjfanaflbkibffcbhihgihpgijcei iklnnbgdcppplombffihcijanngoeifm".split(
      " ",
    ),
  ps = [
    RegExp("chrome-extension://([^/]+)", "g"),
    RegExp("moz-extension://([^/]+)", "g"),
    RegExp("ms-browser-extension://([^/]+)", "g"),
    RegExp("webkit-masked-url://([^/]+)", "g"),
    RegExp("safari-web-extension://([^/]+)", "g"),
  ],
  qs = [
    RegExp("^Permission denied$"),
    RegExp("index out of range: \\d+ \\+ \\d+ > \\d+"),
    RegExp("getReadMode(Config|Render|Extract)"),
  ],
  rs = [
    RegExp("at file:///|@file:///|phantomjs|node:electron|py-scrap|eval code|Program Files"),
    RegExp("_0x[a-f0-9]+.*anonymous"),
  ],
  ss = [
    RegExp("Script https://meet\\.google\\.com/.*meetsw.*load failed"),
    RegExp("A bad HTTP response code \\(\\d+\\) was received when fetching the script"),
  ],
  ts = [
    RegExp("Error loading.*Consecutive load failures"),
    RegExp("Failed to load module.*Consecutive load failures"),
  ];
function us(a, c) {
  this.tc = a;
  this.yb = c;
}
function vs(a, c) {
  return (c = a.j(c)) ? { tc: a.tc, yb: a.yb, bd: c.toUpperCase() } : null;
}
function ws() {
  us.call(this, 1, 1);
}
F(ws, us);
ws.prototype.j = function (a) {
  a: {
    a = xs(a);
    var c = false,
      e = I(ps),
      f = e.next(),
      g;
    try {
      for (; !f.done; f = e.next()) {
        var h = a.matchAll(f.value),
          k = I(h),
          l = k.next(),
          p;
        try {
          for (; !l.done; l = k.next()) {
            var q = l.value[1];
            if (q) {
              if (os.includes(q)) {
                var r = false;
                break a;
              }
              c = true;
            }
          }
        } finally {
          l && !l.done && (p = k.return) && p.call(k);
        }
      }
    } finally {
      f && !f.done && (g = e.return) && g.call(e);
    }
    r = c;
  }
  return r ? "warning" : null;
};
function ys(a, c, e) {
  e = e === void 0 ? zs : e;
  us.call(this, a, c);
  this.o = e;
}
F(ys, us);
ys.prototype.j = function (a) {
  var c =
      typeof a.o.get("apps_telemetry.cross_origin_scripts") === "string"
        ? a.o.get("apps_telemetry.cross_origin_scripts")
        : "",
    e = a.o.get("apps_telemetry.native_function_tampering_detected") === "true",
    f = xs(a),
    g = f.includes("blob:"),
    h = I(this.o),
    k = h.next(),
    l;
  try {
    for (; !k.done; k = h.next()) {
      var p = k.value,
        q = p.errorMessage,
        r = p.fd,
        x = r === void 0 ? [] : r,
        y = p.Fa,
        z = y === void 0 ? [] : y,
        B = p.Gb,
        G = B === void 0 ? false : B,
        C = p.Cd,
        X = p.xe,
        aa = X === void 0 ? false : X;
      if ((C === void 0 ? 0 : C) ? a.message === q : f.includes(q)) {
        var Va = x.some(function (uc) {
            return c.includes(uc);
          }),
          yd = z.some(function (uc) {
            return a.j.includes(uc);
          });
        x = G && g;
        aa = aa && e;
        if (Va || yd || x || aa) return "warning";
      }
    }
  } finally {
    k && !k.done && (l = h.return) && l.call(h);
  }
  return null;
};
var zs = [
  {
    errorMessage: "Cannot read properties of undefined (reading 'addListener')",
    Gb: true,
    fd: ["infird.com"],
  },
  {
    errorMessage: "browser_polyfill_default(...).runtime.getManifest is not a function",
    Gb: true,
    fd: ["infird.com"],
  },
  { errorMessage: 'fileName":', fd: ["walkme.com"] },
  { errorMessage: "] is not a function", Gb: true },
  { errorMessage: "(reading 'toLowerCase')", Gb: true, Fa: ["__aiNetCmd__"] },
  { errorMessage: "Cannot read properties of undefined", Fa: ["recaptcha"] },
  { errorMessage: "a is not defined", Cd: true, Fa: ["<anonymous>"] },
  { errorMessage: "i is not defined", Cd: true, Fa: ["<anonymous>"] },
  { errorMessage: "Failed to fetch", Fa: ["__DLD__", "frontend.min.js"] },
  { errorMessage: "Maximum call stack size exceeded", xe: true },
  { errorMessage: "Unexpected end of JSON input", Fa: ["facebook.net"] },
];
function As(a, c, e, f, g) {
  g = g === void 0 ? new Map() : g;
  this.message = a;
  this.j = c;
  this.cause = e;
  this.v = f;
  this.o = g;
}
function Bs(a) {
  return (a = a.cause) ? a.message + "\n" + a.j + "\n" + Bs(a) : "";
}
function xs(a) {
  return a.message + "\n" + a.j + "\n" + Bs(a);
}
function Cs() {
  this.v = this.j = this.message = "";
  this.o = new Map();
}
function Ds(a, c) {
  a.message = c;
  return a;
}
function Es(a) {
  return new As(a.message, a.j, a.cause, a.v, a.o);
}
function Fs(a) {
  return a instanceof Error || (a && a.message !== void 0) ? a.message : Gs(a);
}
function Hs(a) {
  return a instanceof Error || (a && a.stack !== void 0) ? a.stack || "" : "";
}
function Is(a, c) {
  var e = a && a.cause !== void 0;
  if (c >= 3 || !e) return null;
  e = new Cs();
  a = a.cause;
  if (Js(a)) {
    if ((Ds(e, Fs(a)), (e.j = Hs(a)), (c = Is(a, c + 1)))) e.cause = c;
  } else Ds(e, Gs(a));
  return Es(e);
}
function Js(a) {
  return a instanceof Error || (!!a && a.message !== void 0 && a.stack !== void 0);
}
function Gs(a) {
  try {
    return Js(a)
      ? a.message + "\n" + a.stack
      : a && a instanceof Object
        ? JSON.stringify(a)
        : String(a);
  } catch (c) {
    return String(a);
  }
}
function Ks(a, c, e) {
  e = e === void 0 ? new Map() : e;
  var f = Ds(new Cs(), Fs(a));
  f.j = Hs(a);
  f.o = e;
  if ((a = Is(a, 0))) f.cause = a;
  c && (f.v = c);
  return Es(f);
}
function Ls(a, c, e, f) {
  us.call(this, e, f);
  this.o = a;
  this.v = c;
}
F(Ls, us);
Ls.prototype.j = function (a) {
  var c = Bs(a);
  return Ms(a.message, this.o) || Ms(a.j, this.v) || Ms(c, this.o) || Ms(c, this.v)
    ? "warning"
    : null;
};
function Ms(a, c) {
  c = I(c);
  var e = c.next(),
    f;
  try {
    for (; !e.done; e = c.next()) if (e.value.test(a)) return true;
  } finally {
    e && !e.done && (f = c.return) && f.call(c);
  }
  return false;
}
function Ns(a, c, e, f, g) {
  us.call(this, e, f);
  this.o = a;
  this.Fa = c;
  this.matchType = g;
}
F(Ns, us);
Ns.prototype.j = function (a) {
  switch (this.matchType) {
    case 0:
      a: {
        var c = a.message,
          e = I(this.o);
        a = e.next();
        var f;
        try {
          for (; !a.done; a = e.next())
            if (c === a.value) {
              var g = true;
              break a;
            }
        } finally {
          a && !a.done && (f = e.return) && f.call(e);
        }
        g = false;
      }
      return g ? "warning" : null;
    case 1:
      a: {
        g = a.message;
        f = I(this.o);
        a = f.next();
        try {
          for (; !a.done; a = f.next())
            if (g.startsWith(a.value)) {
              c = true;
              break a;
            }
        } finally {
          a && !a.done && (e = f.return) && e.call(f);
        }
        c = false;
      }
      return c ? "warning" : null;
    case 2:
      return ((g = xs(a)), Os(g, this.o) || Os(g, this.Fa) ? "warning" : null);
    default:
      return null;
  }
};
function Os(a, c) {
  c = I(c);
  var e = c.next(),
    f;
  try {
    for (; !e.done; e = c.next()) if (a.includes(e.value)) return true;
  } finally {
    e && !e.done && (f = c.return) && f.call(c);
  }
  return false;
}
function Ps(a, c, e) {
  return new Ns(a, c, e, 0, 2);
}
function Qs(a, c, e) {
  us.call(this, a, c);
  this.o = e();
}
F(Qs, us);
Qs.prototype.j = function () {
  return this.o ? null : "unsupported_severe";
};
var Rs = [
    new ws(),
    Ps(
      "Trusted Type;TrustedHTML;TrustedScript;cannot communicate with background;zaloJSV2;kaspersky-labs;@user-script;Object Not Found Matching Id;contextChanged;Not implemented on this platform;Extension context invalidated;neurosurgeonundergo;realTimeClData;Failed to execute 'querySelectorAll' on 'Document';Promise.all(...).then(...).catch(...).finally is not a function;Error executing Chrome API, chrome.tabs;Identifier 'originalPrompt' has already been declared;User rejected the request;Could not inject ethereum provider because it's not your default extension;Cannot redefine property: googletag;Can't find variable: HTMLDialogElement;Identifier 'listenerName' has already been declared;Cannot read properties of undefined (reading 'info');Permission denied to access property \"type\";Error: Promise timed out;Request timeout ToolbarStatus;Can't find variable: nc;imtgo;ton is not a function;__renderMessageNode is not defined;Cannot redefine property: ethereum;unknown action:;Receiving end does not exist;get-frame-manager-configuration;Key not found;'isAWS';Identifier 'contentScriptListenerRegistered' has already been declared;window.ethereum.selectedAddress;extDomain is not defined;No Listener: tabs:outgoing.message.ready;This script should only be loaded in a browser extension;Identifier 'initCoreHelpers' has already been declared;undefined is not an object (evaluating 't.tab.customFillData');No tab with id:;The browser is shutting down.;User mapping loading timeout;Internal JSON-RPC error;TOKEN_EXPIRED;A listener indicated an asynchronous response by returning true;You must authenticate your request with an API key".split(
        ";",
      ),
      "puppeteer;kaspersky-labs;@user-script;jsQuilting;linkbolic;neurosurgeonundergo;tlscdn;https://cdnjs.cloudflare.com/ajax/libs/mathjax/;secured-pixel.com;Can't find variable: nc;imtgo;_simulateEvent;goguardian".split(
        ";",
      ),
      1,
    ),
    new Ls(ns, ms, 1, 0),
    Ps(
      "status is 0, navigator.onLine =;Network sync is disabled. Aborting a network request of int type;The service is currently unavailable.;Internal error encountered.;data does not exist in AF cache;There was an error during the transport or processing of this request;Failed to load gapi;Rpc failed due to xhr error. error code: 6, error:  [0];An interceptor has requested that the request be retried;8,\"generic\";A network error occurred;NetworkError: Connection failure due to HTTP 401;NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope';Load failed".split(
        ";",
      ),
      ls,
      2,
    ),
    new Ls([], ms, 2, 0),
    new Ls(qs, rs, 3, 0),
    Ps(
      "Kg is not defined;uncaught error;The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.;Illegal invocation;Script error;zCommon;can't access dead object;Java exception was raised during method invocation;pauseVideo is not a function;ResizeObserver loop;wallet must has at least one account;xbrowser is not defined;jQuery is not defined;Cannot read properties of null (reading 'requestAnimationFrame');Class extends value undefined is not a constructor or null;GM3TooltipService: No tooltip with id;Mole was disposed;getInitialTopicListResponse is missing for stream rendering;getPeopleById call preempted;The operation is insecure;class heritage;The play() request was interrupted;args.site.enabledFeatures is undefined;frappe is not defined;Cannot set properties of undefined (setting 'hidden');Identifier 'checkOngoingMeeting' has already been declared;AutofillCallbackHandler;invalid wire type;zp_token;isReCreate;HTMLOUT is not defined;Shopify root is null;CanvasMaskingStrategy_Redact;_chromeNamespace;feature named `performanceMetrics`;feature named `webCompat`;Cannot redefine property: webdriver;reCAPTCHA Timeout;feature named `pageObserver` was not found;feature named `hover` was not found;Request timeout appSettingsDistributor.getValue;TimeoutError: operation timed out;Sink type mismatch violation blocked by CSP;__firefox__;: Java object is gone;Cannot read properties of undefined (reading 'domInteractive');: t is not defined;sendMessage(). Tab not found.;Can't find variable: __gCrWeb;WKWebView API client did not respond to this postMessage;The provider is disconnected from all chains;The user aborted a request.;Task was cancelled.;lettersVoicesDistributor".split(
        ";",
      ),
      ["postUserData", "inline.cdn.mcas.ms", "evaluating 'n.standardSelectors'"],
      3,
    ),
    new Ls(ss, ms, 5, 0),
    Ps(
      "Service worker registration is disabled by MDA;An unknown error occurred when fetching the script;Operation has been aborted;Timed out while trying to start the Service Worker;The Service Worker system has shutdown;The user denied permission to use Service Worker;The script resource is behind a redirect, which is disallowed;The document is in an invalid state;ServiceWorker script evaluation failed;ServiceWorker cannot be started;Failed to access storage;Worker disallowed;encountered an error during installation".split(
        ";",
      ),
      ls,
      5,
    ),
    new Ls(ts, ts, 4, 0),
    Ps(
      [
        "Timeout reached for loading script https://www.gstatic.com/_/apps-fileview/_/js/",
        "Error while loading script https://www.gstatic.com/_/apps-fileview/_/js/",
      ],
      ls,
      4,
    ),
  ],
  Ss = new Set(["SEVERE", "SEVERE_AFTER_INITIAL", "UNKNOWN", "FATAL", ""]);
function Ts(a) {
  this.o = a;
  this.j = false;
}
function Us(a, c, e, f) {
  var g = [Error("pb").message];
  e = e === void 0 ? false : e;
  f = f === void 0 ? A(true) : f;
  var h = [];
  c.length > 0 && h.push(Vs(c));
  h.push.apply(h, oa(Rs));
  a = I(a);
  c = a.next();
  var k;
  try {
    for (; !c.done; c = a.next()) h.push(c.value);
  } finally {
    c && !c.done && (k = a.return) && k.call(a);
  }
  g.length > 0 && h.push(new Ns(g, [], 3, 5, 0));
  h.push(new ys(3, 0));
  e && h.push(new Qs(8, 0, f));
  return new Ts(h);
}
function Ws(a, c) {
  var e = "missing",
    f = new Map(),
    g = true;
  try {
    e = c.v;
    a.j && f.set("apps_telemetry.after_downgraded_severe", "true");
    var h = I(a.o),
      k = h.next(),
      l;
    try {
      for (; !k.done; k = h.next()) {
        var p = k.value;
        try {
          var q = vs(p, c);
          if (q) {
            var r = e,
              x = Xs(a, e) ? q.bd : e;
            Ys(q, r, x).forEach(function (z, B) {
              f.set(B, z);
            });
            e = x;
            break;
          }
        } catch (z) {
          g = false;
          var y = Ks(z, e);
          f.set("apps_telemetry.handling_error", xs(y) + "\n\nclassifier: " + p.constructor.name);
        }
      }
    } finally {
      k && !k.done && (l = h.return) && l.call(h);
    }
  } catch (z) {
    {
      g = false;
      a = Ks(z, e);
      f.set("apps_telemetry.handling_error", xs(a));
    }
  }
  f.set("apps_telemetry.processed", String(g));
  return { bd: e, Bc: f };
}
function Ys(a, c, e) {
  var f = new Map();
  f.set("apps_telemetry.classification", a.tc.toString());
  f.set("apps_telemetry.classification_code", a.yb ? a.yb.toString() : "");
  f.set("apps_telemetry.incoming_severity", c);
  f.set("apps_telemetry.outgoing_severity", e);
  return f;
}
function Xs(a, c) {
  return Ss.has(c.toUpperCase()) ? (a.j = true) : false;
}
function Vs(a) {
  var c = [];
  a = I(a);
  var e = a.next(),
    f;
  try {
    for (; !e.done; e = a.next()) c.push(new RegExp(e.value));
  } finally {
    e && !e.done && (f = a.return) && f.call(a);
  }
  return new Ls(c, c, 7, 0);
}
function Zs() {}
Zs.prototype.Va = function () {
  if (
    "WorkerGlobalScope" in K &&
    typeof K.WorkerGlobalScope === "function" &&
    self instanceof K.WorkerGlobalScope
  )
    return new Map();
  try {
    var a = Array.from(document.querySelectorAll("script"))
      .filter(this.o)
      .slice(0, 30)
      .map(this.j)
      .join("\n");
  } catch (c) {
    a = "Error getting cross-origin scripts";
  }
  return new Map().set("apps_telemetry.cross_origin_scripts", a);
};
Zs.prototype.o = function (a) {
  var c = new RegExp(/^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)*google\.com(?:$|[\/#?])/);
  return (a = a.getAttribute("src")) ? !(a.startsWith("/") || c.test(a)) : false;
};
Zs.prototype.j = function (a) {
  return a.innerHTML ? a.outerHTML.slice(0, a.outerHTML.indexOf(a.innerHTML)) : a.outerHTML;
};
function $s() {}
$s.prototype.Va = function () {
  try {
    var a = performance
      .getEntriesByType("resource")
      .slice(-5)
      .map(function (c) {
        return fl(c.name);
      })
      .join("\n");
  } catch (c) {
    a = "Error getting last 5 resources";
  }
  return new Map().set("apps_telemetry.resources", a);
}; /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var at = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
function bt() {
  var a = [],
    c;
  a[8] = a[13] = a[18] = a[23] = "-";
  a[14] = "4";
  for (c = 0; c < 36; c++)
    if (!a[c]) {
      var e = 0 | (Math.random() * 16);
      a[c] = at[c == 19 ? (e & 3) | 8 : e];
    }
  return a.join("");
}
function ct(a, c) {
  var e = c === void 0 ? {} : c;
  c = e.xc;
  c = c === void 0 ? [] : c;
  var f = e.Ee;
  f = f === void 0 ? [] : f;
  var g = e.yd;
  g = g === void 0 ? [] : g;
  var h = e.Qe;
  var k = e.sessionId;
  k = k === void 0 ? bt() : k;
  e = e.Le;
  this.v = Us(c, f, h === void 0 ? false : h, e === void 0 ? A(true) : e);
  this.j = [new bs(), new Zs(), new $s()];
  this.j.push.apply(this.j, oa(g));
  this.sessionId = k;
  var l;
  this.A = (l = K.performance) == null ? void 0 : l.timeOrigin;
  this.o = a;
  this.o.ya(k);
}
function et(a, c, e, f) {
  f["apps_telemetry.session_id"] = a.sessionId;
  f["apps_telemetry.session_start_time_ms"] = String(a.A);
  "apps_telemetry.processed" in f && (f["apps_telemetry.multi_processed"] = "true");
  var g = a.Va();
  (a = ft(a, c, e, g)) && gt(g, a.Bc);
  g.forEach(function (k, l) {
    f[l] = k;
  });
  var h;
  return (h = a == null ? void 0 : a.bd) != null ? h : e;
}
function ft(a, c, e, f) {
  var g = null,
    h = null;
  try {
    {
      g = Ks(c, e, f);
      h = Ws(a.v, g);
    }
  } catch (k) {
    return (ht(f, k, "apps_telemetry.processed"), null);
  }
  a.o.Nd(g, h);
  return h;
}
ct.prototype.Va = function () {
  var a = new Map();
  try {
    var c = I(this.j),
      e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next())
        e.value.Va().forEach(function (g, h) {
          a.set(h, g);
        });
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  } catch (g) {
    ht(a, g, "apps_telemetry.annotated");
  }
  return a;
};
function gt(a, c) {
  c.forEach(function (e, f) {
    a.set(f, e);
  });
}
function ht(a, c, e) {
  a.set(e, "false");
  a.set("apps_telemetry.handling_error", Gs(c));
}
var it = new Set([1, 6, 7, 2, 0]);
function jt() {
  var a = Ur(Yr(dg(Qr()))),
    c = pf(a, 1),
    e = pf(a, 5);
  return [c, e].every(function (f) {
    return it.has(f);
  });
}
function kt(a) {
  try {
    return ti(ri(), a);
  } catch (c) {
    return false;
  }
}
function lt(a, c) {
  var e = (a = a === void 0 ? {} : a);
  a = e.yd;
  a = a === void 0 ? [] : a;
  var f = e.xc;
  f = f === void 0 ? [] : f;
  var g = e.Ke;
  g = g === void 0 ? [] : g;
  var h = e.Fe;
  h = h === void 0 ? [] : h;
  var k = e.Vf;
  k = k === void 0 ? [] : k;
  var l = e.Wf;
  l = l === void 0 ? [] : l;
  e = e.sessionId;
  e = e === void 0 ? void 0 : e;
  try {
    var p = ti(ri(), vi);
    var q = Me(p, 1, Qd, void 0 === Rc ? 2 : 4);
  } catch (z) {
    q = [];
  }
  p = kt(xi);
  var r = [],
    x = r.concat,
    y = [];
  g.length > 0 && y.push(Ps(g, [], 6));
  h.length > 0 && y.push(new Ls(h, [], 6, 0));
  k.length > 0 && y.push(new Ns(k, [], 6, 5, 0));
  l.length > 0 && y.push(new Ns(l, [], 6, 5, 1));
  return new ct(c, {
    xc: x.call(r, oa(y), oa(f)),
    Ee: q,
    yd: [new Zr()].concat(oa(a)),
    Qe: p,
    sessionId: e,
    Le: jt,
  });
}
function mt() {}
mt.prototype.Nd = u();
mt.prototype.ya = u();
function nt(a) {
  a = a === void 0 ? {} : a;
  return lt(a, new mt());
}
function ot(a) {
  return a
    ? a.split("\n").filter(function (c) {
        return c.trim() && !c.includes("signal is aborted without reason");
      }).length
    : 0;
}
function pt() {
  us.call(this, 3, 0);
}
F(pt, us);
pt.prototype.j = function (a) {
  a: {
    for (; a; ) {
      var c = a.message.includes("signal is aborted without reason"),
        e = ot(a.j) === 2;
      if (!c || !e) {
        a = false;
        break a;
      }
      a = a.cause;
    }
    a = true;
  }
  return a ? "warning" : null;
};
try {
  var qt,
    rt,
    st = (rt = (qt = window) == null ? void 0 : qt.top) != null ? rt : K;
  st.U3bHHf != null || (st.U3bHHf = 0);
  st.U3bHHf++;
} catch (a) {
  {
    K.U3bHHf != null || (K.U3bHHf = 0);
    K.U3bHHf++;
  }
}
var tt;
if (K == null ? 0 : (tt = K.Symbol) == null ? 0 : tt.for) {
  var ut = Symbol.for("google.goem");
  K[ut] || (K[ut] = new WeakMap());
}
function vt(a, c) {
  var e = a.__wiz;
  e || (e = a.__wiz = {});
  return e[c.toString()];
} /*

 Copyright 2024 Google, Inc
 SPDX-License-Identifier: MIT
*/
var wt = {};
var xt = {};
function yt(a) {
  var c = document.body,
    e = ab(c.getAttribute("jsaction") || "");
  var f = ["u0pjoe"];
  var g = I(f),
    h = g.next(),
    k;
  try {
    for (; !h.done; h = g.next()) {
      var l = h.value;
      var p = e;
      if (p) {
        var q = wt[p];
        if (q) var r = !!q[l.toString()];
        else {
          var x = xt[l.toString()];
          x ||
            ((x = new RegExp("(^\\s*" + l + "\\s*:|[\\s;]" + l + "\\s*:)")),
            (xt[l.toString()] = x));
          r = x.test(p);
        }
      } else r = false;
      r || (e && !/;$/.test(e) && (e += ";"), (e += l + ":.CLIENT"), zt(c, e));
      var y = vt(c, l);
      y ? y.push(a) : (c.__wiz[l.toString()] = [a]);
    }
  } finally {
    h && !h.done && (k = g.return) && k.call(g);
  }
  return { et: f, xb: a, el: c };
}
function zt(a, c) {
  a.setAttribute("jsaction", c);
  "__jsaction" in a && delete a.__jsaction;
}
function At(a) {
  T.call(this);
  this.o = a;
}
Xa(At, T);
At.prototype.j = function (a) {
  return Bt(this, a);
};
function Ct(a, c) {
  return (c ? "__wrapper_" : "__protected_") + Na(a) + "__";
}
function Bt(a, c) {
  var e = Ct(a, true);
  c[e] || ((c[e] = Dt(a, c))[Ct(a, false)] = c);
  return c[e];
}
function Dt(a, c) {
  function e() {
    if (a.Oa()) return c.apply(this, arguments);
    try {
      return c.apply(this, arguments);
    } catch (f) {
      Et(a, f);
    }
  }
  e[Ct(a, false)] = c;
  return e;
}
function Et(a, c) {
  if (
    !(
      (c &&
        typeof c === "object" &&
        typeof c.message === "string" &&
        c.message.indexOf("Error in protected function: ") == 0) ||
      (typeof c === "string" && c.indexOf("Error in protected function: ") == 0)
    )
  )
    throw (a.o(c), new Ft(c));
}
function Gt(a) {
  var c = c || K.window || K.globalThis;
  "onunhandledrejection" in c &&
    (c.onunhandledrejection = function (e) {
      Et(a, e && e.reason ? e.reason : Error("pb"));
    });
}
function Ht(a, c) {
  var e = K.window || K.globalThis,
    f = e[c];
  if (!f) throw Error("qb`" + c);
  e[c] = function (g, h) {
    typeof g === "string" && (g = Ta(Ua, g));
    g && (arguments[0] = g = Bt(a, g));
    if (f.apply) return f.apply(this, arguments);
    var k = g;
    if (arguments.length > 2) {
      var l = Array.prototype.slice.call(arguments, 2);
      k = function () {
        g.apply(this, l);
      };
    }
    return f(k, h);
  };
  e[c][Ct(a, false)] = f;
}
At.prototype.O = function () {
  var a = K.window || K.globalThis;
  var c = a.setTimeout;
  c = c[Ct(this, false)] || c;
  a.setTimeout = c;
  c = a.setInterval;
  c = c[Ct(this, false)] || c;
  a.setInterval = c;
  At.qa.O.call(this);
};
function Ft(a) {
  Ya.call(
    this,
    "Error in protected function: " + (a && a.message ? String(a.message) : String(a)),
    a,
  );
  (a = a && a.stack) && typeof a === "string" && (this.stack = a);
}
Xa(Ft, Ya);
function It() {}
function Jt(a) {
  this.B = a.Re || null;
  this.v = a.Yf || false;
  this.A = a.Zf || false;
  if (this.v && this.A) throw Error();
  this.j = void 0;
}
Xa(Jt, It);
Jt.prototype.o = function () {
  var a = new Kt(this.B, this.v, this.A);
  this.j && (a.H = this.j);
  return a;
};
function Kt(a, c, e) {
  nr.call(this);
  this.W = a;
  this.I = c;
  this.N = e || false;
  this.H = void 0;
  this.status = this.readyState = 0;
  this.responseType = this.A = this.o = this.statusText = "";
  this.onreadystatechange = null;
  this.R = new Headers();
  this.C = null;
  this.U = "GET";
  this.T = "";
  this.j = false;
  this.S = this.D = this.J = null;
  this.M = new AbortController();
  this.B = void 0;
}
Xa(Kt, nr);
D = Kt.prototype;
D.open = function (a, c) {
  if (this.readyState != 0) throw (this.abort(), Error("rb"));
  this.U = a;
  this.T = c;
  this.readyState = 1;
  Lt(this);
};
D.send = function (a) {
  if (this.readyState != 1) throw (this.abort(), Error("sb"));
  var c,
    e = ((c = this.B) == null ? 0 : c.signal)
      ? AbortSignal.any([this.B.signal, this.M.signal])
      : this.M.signal;
  if (e.aborted) throw (this.abort(), Error("tb"));
  this.j = true;
  var f, g, h, k;
  c = Object.assign({}, this.B, {
    headers: this.R,
    method: this.U,
    credentials: (h = (f = this.B) == null ? void 0 : f.credentials) != null ? h : this.H,
    cache: (k = (g = this.B) == null ? void 0 : g.cache) != null ? k : void 0,
    signal: e,
  });
  a && (c.body = a);
  (this.W || K).fetch(new Request(this.T, c)).then(this.se.bind(this), this.Db.bind(this));
};
D.abort = function () {
  this.o = this.I || this.N ? [] : "";
  this.A = "";
  this.R = new Headers();
  this.status = 0;
  this.M.abort("Request was aborted.");
  this.D && this.D.cancel("Request was aborted.").catch(A(null));
  this.readyState >= 1 && this.j && this.readyState != 4 && ((this.j = false), Mt(this));
  this.readyState = 0;
};
D.se = function (a) {
  if (
    this.j &&
    ((this.J = a),
    this.C ||
      ((this.status = this.J.status),
      (this.statusText = this.J.statusText),
      (this.C = a.headers),
      (this.readyState = 2),
      Lt(this)),
    this.j && ((this.readyState = 3), Lt(this), this.j))
  )
    if (this.responseType === "arraybuffer")
      a.arrayBuffer().then(this.qe.bind(this), this.Db.bind(this));
    else if (a.body && K.ReadableStream) {
      this.D = a.body.getReader();
      if (this.I || this.N) {
        if (this.responseType) throw Error("ub");
        this.o = [];
      } else this.o = this.A = "";
      this.I || (this.S = new TextDecoder());
      Nt(this);
    } else a.text().then(this.re.bind(this), this.Db.bind(this));
};
function Nt(a) {
  a.D.read().then(a.oe.bind(a)).catch(a.Db.bind(a));
}
D.oe = function (a) {
  if (this.j) {
    var c = a.value;
    if (this.I) a.value && this.o.push(c || new Uint8Array(0));
    else if ((c = c ? this.S.decode(c, { stream: !a.done }) : ""))
      this.N ? this.o.push(c) : (this.o = this.A += c);
    a.done ? Mt(this) : Lt(this);
    this.readyState == 3 && Nt(this);
  }
};
D.re = function (a) {
  this.j && ((this.o = this.A = a), Mt(this));
};
D.qe = function (a) {
  this.j && ((this.o = a), Mt(this));
};
D.Db = function () {
  this.j && Mt(this);
};
function Mt(a) {
  a.readyState = 4;
  a.J = null;
  a.D = null;
  a.S = null;
  Lt(a);
}
D.setRequestHeader = function (a, c) {
  this.R.append(a, c);
};
D.getResponseHeader = function (a) {
  return this.C ? this.C.get(a.toLowerCase()) || "" : "";
};
D.getAllResponseHeaders = function () {
  if (!this.C) return "";
  for (var a = [], c = this.C.entries(), e = c.next(); !e.done; ) {
    e = e.value;
    a.push(e[0] + ": " + e[1]);
    e = c.next();
  }
  return a.join("\r\n");
};
function Lt(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(Kt.prototype, "withCredentials", {
  get: function () {
    return this.H === "include";
  },
  set: function (a) {
    this.H = a ? "include" : "same-origin";
  },
});
var Ot;
function Pt() {}
Xa(Pt, It);
Pt.prototype.o = function () {
  return new XMLHttpRequest();
};
Ot = new Pt();
function Qt(a) {
  nr.call(this);
  this.headers = new Map();
  this.S = a || null;
  this.o = false;
  this.j = null;
  this.J = "";
  this.C = 0;
  this.A = this.I = this.D = this.H = false;
  this.M = 0;
  this.B = null;
  this.R = "";
  this.N = false;
}
Xa(Qt, nr);
var Rt = /^https?$/i,
  St = ["POST", "PUT"],
  Tt = [];
D = Qt.prototype;
D.Zd = function () {
  this.dispose();
  Ab(Tt, this);
};
D.send = function (a, c, e, f) {
  if (this.j) throw Error("vb`" + this.J + "`" + a);
  if (typeof c === "string") var g = c;
  else if (c) {
    var h = c;
    g = h.method;
    e != null || (e = h.body);
    f != null || (f = h.headers);
  }
  g = g ? g.toUpperCase() : "GET";
  this.J = a;
  this.C = 0;
  this.H = false;
  this.o = true;
  this.j = this.S ? this.S.o() : Ot.o();
  this.j.onreadystatechange = Bi(Sa(this.Od, this));
  try {
    {
      this.I = true;
      this.j.open(g, String(a), true);
      this.I = false;
    }
  } catch (z) {
    Ut(this);
    return;
  }
  a = e || "";
  c = new Map(this.headers);
  if (f)
    if (Object.getPrototypeOf(f) === Object.prototype) for (var k in f) c.set(k, f[k]);
    else if (typeof f.keys === "function" && typeof f.get === "function") {
      k = I(f.keys());
      e = k.next();
      var l;
      try {
        for (; !e.done; e = k.next()) {
          var p = e.value;
          c.set(p, f.get(p));
        }
      } finally {
        e && !e.done && (l = k.return) && l.call(k);
      }
    } else throw Error("wb`" + String(f));
  f = Array.from(c.keys()).find(function (z) {
    return "content-type" == z.toLowerCase();
  });
  l = K.FormData && a instanceof K.FormData;
  !(xb(St, g) >= 0) ||
    f ||
    l ||
    c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  g = I(c);
  f = g.next();
  var q;
  try {
    for (; !f.done; f = g.next()) {
      var r = I(f.value),
        x = r.next().value,
        y = r.next().value;
      this.j.setRequestHeader(x, y);
    }
  } finally {
    f && !f.done && (q = g.return) && q.call(g);
  }
  this.R && (this.j.responseType = this.R);
  "withCredentials" in this.j &&
    this.j.withCredentials !== this.N &&
    (this.j.withCredentials = this.N);
  h && this.j instanceof Kt && (this.j.B = h);
  try {
    {
      this.B && (clearTimeout(this.B), (this.B = null));
      this.M > 0 && (this.B = setTimeout(this.Rd.bind(this), this.M));
      this.D = true;
      this.j.send(a);
      this.D = false;
    }
  } catch (z) {
    Ut(this);
  }
};
D.Rd = function () {
  typeof Ga != "undefined" &&
    this.j &&
    ((this.C = 8), this.dispatchEvent("timeout"), this.abort(8));
};
function Ut(a) {
  a.o = false;
  a.j && ((a.A = true), a.j.abort(), (a.A = false));
  a.C = 5;
  Vt(a);
  Wt(a);
}
function Vt(a) {
  a.H || ((a.H = true), a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
D.abort = function (a) {
  this.j &&
    this.o &&
    ((this.o = false),
    (this.A = true),
    this.j.abort(),
    (this.A = false),
    (this.C = a || 7),
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    Wt(this));
};
D.O = function () {
  this.j &&
    (this.o && ((this.o = false), (this.A = true), this.j.abort(), (this.A = false)),
    Wt(this, true));
  Qt.qa.O.call(this);
};
D.Od = function () {
  this.Oa() || (this.I || this.D || this.A ? Xt(this) : this.Xc());
};
D.Xc = function () {
  Xt(this);
};
function Xt(a) {
  if (a.o && typeof Ga != "undefined")
    if (a.D && (a.j ? a.j.readyState : 0) == 4) setTimeout(a.Od.bind(a), 0);
    else if ((a.dispatchEvent("readystatechange"), a.na())) {
      a.o = false;
      try {
        Gr(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : ((a.C = 6), Vt(a));
      } finally {
        Wt(a);
      }
    }
}
function Wt(a, c) {
  if (a.j) {
    a.B && (clearTimeout(a.B), (a.B = null));
    var e = a.j;
    a.j = null;
    c || a.dispatchEvent("ready");
    try {
      e.onreadystatechange = null;
    } catch (f) {}
  }
}
D.isActive = function () {
  return !!this.j;
};
D.na = function () {
  return (this.j ? this.j.readyState : 0) == 4;
};
function Gr(a) {
  var c = Fr(a);
  a: switch (c) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      var e = true;
      break a;
    default:
      e = false;
  }
  if (!e) {
    if ((c = c === 0)) {
      a = String(a.J).match(Rk)[1] || null;
      !a && K.self && K.self.location && (a = K.self.location.protocol.slice(0, -1));
      c = !Rt.test(a ? a.toLowerCase() : "");
    }
    e = c;
  }
  return e;
}
function Fr(a) {
  try {
    return (a.j ? a.j.readyState : 0) > 2 ? a.j.status : -1;
  } catch (c) {
    return -1;
  }
}
Hi(function (a) {
  Qt.prototype.Xc = a(Qt.prototype.Xc);
});
function Yt(a, c, e) {
  nr.call(this);
  this.B = c || null;
  this.A = {};
  this.C = Zt;
  this.H = a;
  if (!e) {
    this.j = null;
    this.j = new At(Sa(this.o, this));
    Ht(this.j, "setTimeout");
    Ht(this.j, "setInterval");
    a = this.j;
    c = K.window || K.globalThis;
    e = [
      "requestAnimationFrame",
      "mozRequestAnimationFrame",
      "webkitAnimationFrame",
      "msRequestAnimationFrame",
    ];
    for (var f = 0; f < e.length; f++) {
      var g = e[f];
      e[f] in c && Ht(a, g);
    }
    a = this.j;
    Gi = true;
    c = Sa(a.j, a);
    for (e = 0; e < Ei.length; e++) Ei[e](c);
    Fi.push(a);
  }
}
Xa(Yt, nr);
function $t(a, c) {
  Lq.call(this, "c");
  this.error = a;
  this.Ga = c;
}
Xa($t, Lq);
function au(a, c) {
  return new Yt(a, c, void 0);
}
function Zt(a, c, e, f) {
  if (f instanceof Map) {
    var g = {};
    f = I(f);
    var h = f.next(),
      k;
    try {
      for (; !h.done; h = f.next()) {
        var l = I(h.value),
          p = l.next().value,
          q = l.next().value;
        g[p] = q;
      }
    } finally {
      h && !h.done && (k = f.return) && k.call(f);
    }
  } else g = f;
  k = new Qt();
  Tt.push(k);
  k.v.add("ready", k.Zd, true, void 0, void 0);
  k.send(a, c, e, g);
}
function bu(a, c) {
  a.C = c;
}
Yt.prototype.o = function (a, c) {
  a = a.error || a;
  c = c ? iq(c) : {};
  a instanceof Error && kq(c, lc(a));
  var e = Fk(a);
  if (this.B)
    try {
      this.B(e, c, a);
    } catch (y) {}
  var f = e.message.substring(0, 1900);
  if (!(a instanceof Ya) || a.v) {
    var g = e.fileName,
      h = e.lineNumber;
    a = e.stack;
    try {
      var k = Yk(this.H, "script", g, "error", f, "line", h);
      a: {
        for (var l in this.A) {
          var p = false;
          break a;
        }
        p = true;
      }
      if (!p) {
        p = k;
        var q = Xk(this.A);
        k = Uk(p, q);
      }
      q = {};
      q.trace = a;
      if (c) for (var r in c) q["context." + r] = c[r];
      var x = Xk(q);
      this.C(k, "POST", x, this.D);
    } catch (y) {}
  }
  try {
    this.dispatchEvent(new $t(e, c));
  } catch (y) {}
};
Yt.prototype.O = function () {
  gl(this.j);
  Yt.qa.O.call(this);
};
function cu(a) {
  a = a === void 0 ? new du() : a;
  nr.call(this);
  var c = this;
  this.H = {};
  this.j = null;
  this.o = {};
  this.M = new wr(this);
  this.Na = a.C;
  this.R = a.I;
  this.pa = a.H;
  this.Ma = a.F;
  this.wa = a.J;
  var e = a.ha;
  this.ja = (a.A || nt)({ Ke: Mr, Fe: Nr, xc: [new pt()] });
  this.La = a.M;
  this.S = new Jq();
  var f = a.o ? a.o.create(this, void 0, a.j, void 0) : null,
    g = new Qt();
  eu(this, e);
  this.C = f || new Hr(g, e, void 0, a.j, void 0);
  il(this, this.C);
  this.A = Hl(e, "docs-sup") + Hl(e, "docs-jepp") + "/jserror";
  if ((f = Hl(e, "jobset"))) this.A = Yk(this.A, "jobset", f);
  if ((f = Hl(e, "docs-ci"))) this.A = Yk(this.A, "id", f);
  f = Hl(e, "docs-pid");
  U(e, "docs-eaotx") && f && (this.A = Yk(this.A, "ouid", f));
  this.W = Gl(e, "docs-srmoe") || 0;
  this.Ia = U(e, "docs-oesf");
  this.aa = Gl(e, "docs-srmour") || 0;
  this.Ja = U(e, "docs-oursf");
  f = a.B || (this.aa > 0 && Math.random() < this.aa);
  this.Ha = U(e, "docs-wesf");
  fu(this);
  sj = function (l) {
    return gu(c, l, "promise rejection");
  };
  g = Gl(e, "docs-srmdue") || 0;
  if (g > 0 && Math.random() < g) {
    var h = U(e, "docs-duesf");
    zj = function (l) {
      gu(c, l, "deferred error", h, "isDeferredUnhandledErrback");
    };
  } else zj = u();
  g = Gl(e, "docs-srmxue") || 0;
  g = g > 0 && Math.random() < g;
  var k = U(e, "docs-xduesf");
  g &&
    yk(function (l) {
      if (l) {
        var p = {};
        p = ((p.isXDeferredUnhandledErrback = "true"), p);
        k ? hu(c, l, p) : c.info(l, p);
      }
    });
  f &&
    ((f = new At(function (l) {
      l = iu(l, "native promise rejection");
      var p = {};
      p = ((p.isUnhandledRejection = "true"), p);
      c.Ja ? hu(c, l, p) : c.info(l, p);
    })),
    Gt(f),
    il(this, f));
  this.J = null;
  typeof document !== "undefined" &&
    document.body &&
    (this.J = yt(function (l) {
      var p = {};
      p = ((p.isWizError = "true"), p);
      l = I(l.data.errors);
      var q = l.next(),
        r;
      try {
        for (; !q.done; q = l.next()) {
          var x = q.value.error;
          c.Ha ? hu(c, x, p) : c.info(x, p);
        }
      } finally {
        q && !q.done && (r = l.return) && r.call(l);
      }
    }));
  this.N = a.v;
  this.D = false;
  this.I = true;
  this.B = false;
  this.T = Hl(e, "docs-jern");
  this.oa = a.K;
  this.ia = a.D.concat(Object.values(Wl));
}
F(cu, nr);
function fu(a) {
  var c = c === void 0 ? false : c;
  if (ju) {
    if (ku != null) throw Error("xb`" + ku.stack);
    throw Error("yb");
  }
  ju = true;
  ku = Error();
  a.j = au(a.A, function (g, h, k) {
    return lu(a, g, h, k);
  });
  var e = {};
  a.pa && (e["X-No-Abort"] = "1");
  a.j.D = e;
  bu(a.j, function (g, h, k, l) {
    a.I && a.C.send(g, h, k, l);
  });
  if (a.W > 0 && Math.random() < a.W) {
    e = {};
    var f = ((e.isWindowOnError = "true"), e);
    a.Ia
      ? Ek(function (g) {
          hu(a, g.error instanceof Error ? g.error : Error(g.message), f);
        })
      : Ek(function (g) {
          a.log(g.error instanceof Error ? g.error : Error(g.message), f);
        });
  }
  yr(a.M, a.j, "c", function (g) {
    var h = c;
    h = h === void 0 ? false : h;
    g.Ga.severity = g.Ga["severity-unprefixed"] || g.Ga.severity;
    var k = g.Ga.severity;
    (k = k == "fatal" || k == "postmortem") &&
      !a.Ma &&
      (a.Na && !h ? a.S.notify(g, g.Ga) : a.S.notify(void 0, g.Ga));
    a.dispatchEvent(new ir(k ? "a" : "b", g.error, g.Ga));
  });
}
function eu(a, c) {
  c = new Kr(c);
  var e = c.j,
    f;
  for (f in e) {
    var g = e[f];
    g && (a.o["expflag-" + f] = g.toString());
  }
  a.o.experimentIds = c.o.join(",");
}
function mu(a, c) {
  a.H.errorReportTimeMs = c;
}
function hu(a, c, e, f) {
  a.B = f || false;
  nu(c, "fatal");
  if (!a.j) {
    if (c instanceof Kj) throw c.L;
    throw Lk(c);
  }
  a.j.o(c, ou(a, c, e));
  if (a.wa)
    throw (
      (e = ou(a, c, e)),
      (e.is_forceFatal = 1),
      (f = c instanceof Kj ? c.L : c),
      lu(a, f, e),
      (c = Lk(f)),
      (a = ", context:" + JSON.stringify(ou(a, f, e))),
      (c.message += a),
      c
    );
}
function pu(a, c, e, f) {
  a.B = f || false;
  nu(c, "warning");
  a.j && a.j.o(c, ou(a, c, e));
}
cu.prototype.info = function (a, c, e) {
  this.B = e || false;
  nu(a, "incident");
  this.j && this.j.o(a, ou(this, a, c));
};
cu.prototype.log = function (a, c, e) {
  this.B = !!e;
  nu(a, "incident");
  this.j && this.j.o(a, ou(this, a, c));
};
function iu(a, c) {
  if (a && typeof a === "object" && a.type === "error") {
    var e = a.error;
    a = JSON.stringify({
      error: e && e.message ? e.message : "Missing error cause.",
      stack: e && e.stack ? e.stack : "Missing error cause.",
      message: a.message,
      filename: a.filename,
      lineno: a.lineno,
      colno: a.colno,
      type: a.type,
    });
    c = Error("zb`" + c + "`" + a);
  } else
    c =
      typeof a === "string"
        ? Error("Ab`" + c + "`" + a)
        : typeof a === "number"
          ? Error("Bb`" + c + "`" + a)
          : a == null
            ? Error("Cb`" + c)
            : a;
  return c;
}
function gu(a, c, e, f, g) {
  f = f === void 0 ? true : f;
  c = iu(c, e);
  e = {};
  g && (e[g] = "true");
  f ? $a(c) : a.info(c, e);
}
function qu(a, c, e, f) {
  return function () {
    a: {
      var g = !!f,
        h = Ca.apply(0, arguments);
      if (a.j) {
        try {
          var k = c.apply(e, h);
          break a;
        } catch (l) {
          if ((hu(a, l), g)) throw Lk(l);
        }
        k = void 0;
      } else k = c.apply(e, h);
    }
    return k;
  };
}
function ru(a, c) {
  a.j &&
    c.then(void 0, function (e) {
      hu(a, e instanceof Error ? e : Error(e));
    });
  return c;
}
function ou(a, c, e) {
  c instanceof Kj && (c = c.L);
  e = e ? iq(e) : {};
  e.severity = lc(c).severity;
  (c = c && c.reportSeverity) && (e.reportSeverity = c);
  a.R && (e.errorGroupId = a.R);
  return e;
}
function su(a, c) {
  if (
    a &&
    typeof a === "object" &&
    !a.message &&
    a.constructor &&
    a.constructor instanceof Function &&
    (a.constructor.name ? a.constructor.name : Hk(a.constructor)) === "Object"
  ) {
    c.unknownErrorToStringResult = Object.prototype.toString.call(a);
    for (
      var e = JSON, f = e.stringify, g = {}, h = Object.keys(a), k = 0, l = 0;
      l < h.length && k < 10;
      l++
    ) {
      var p = h[l];
      try {
        typeof a[p] !== "function" && ((g[p] = String(a[p]).substring(0, 100)), k++);
      } catch (q) {}
    }
    c.unknownErrorContent = f.call(e, g);
  }
}
function lu(a, c, e, f) {
  var g = a.D;
  try {
    a.U(c, e, f);
  } catch (k) {
    throw (
      g && !a.N && (a.I = false),
      (a.D = true),
      (e.provideLogDataError = k.message),
      e.severity || (e.severity = "fatal"),
      Lk(k)
    );
  } finally {
    if (
      ((e["severity-unprefixed"] = e.severity || "fatal"),
      (e.severity = "" + e["severity-unprefixed"]),
      !a.oa)
    )
      for (var h in e)
        typeof e[h] === "number" ||
          e[h] instanceof Number ||
          typeof e[h] === "boolean" ||
          e[h] instanceof Boolean ||
          a.ia.includes(h) ||
          (h in e && delete e[h]);
  }
}
cu.prototype.U = function (a, c, e) {
  su(e || a, c);
  for (var f in this.H)
    try {
      c[f] = this.H[f](a);
    } catch (h) {}
  c.errorReportTimeMs || (c.errorReportTimeMs = Date.now().toString());
  Object.assign(c, this.o);
  e = c.severity || "fatal";
  (f = c.reportSeverity || (a && a.reportSeverity)) && (f = tu(f.toLowerCase())) && (e = f);
  this.La || (e = et(this.ja, a, e, c));
  this.T && (c.reportName = this.T + "_" + e);
  c.isArrayPrototypeIntact = Lr().toString();
  if (!("WorkerGlobalScope" in K && self instanceof K.WorkerGlobalScope)) {
    try {
      var g = !!document.getElementById("docs-editor");
    } catch (h) {
      g = false;
    }
    c.isEditorElementAttached = g.toString();
  }
  c.documentCharacterSet = document.characterSet;
  c.origin = String(K.origin);
  g = a.stack || "";
  if (g.trim().length == 0 || g == "Not available") {
    c["stacklessError-reportingStack"] = Kk(cu.prototype.U);
    [a.message].concat(oa(Object.keys(c)), oa(Object.values(c))).some(function (h) {
      return h && h.includes("<eye3");
    }) || (c.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>");
  }
  this.D && !this.N
    ? ((this.I = this.B),
      e == "fatal" ? (e = "postmortem") : e == "incident" && (e = "warningafterdeath"))
    : e == "fatal" && (this.D = true);
  this.B = false;
  c.severity = e;
};
cu.prototype.O = function () {
  ju = false;
  if (this.J) {
    var a = this.J,
      c = I(a.et),
      e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next()) {
        var g = e.value,
          h = vt(a.el, g);
        if (h && (Ab(h, a.xb), !h.length)) {
          var k = a.el,
            l = ab(k.getAttribute("jsaction") || ""),
            p = g + ":.CLIENT";
          l = l.replace(p + ";", "");
          l = l.replace(p, "");
          zt(k, l);
        }
      }
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  }
  hl(this.M, this.j, this.C);
  nr.prototype.O.call(this);
};
var ju = false,
  ku = null;
function du() {
  this.I = this.ha = void 0;
  this.F = this.J = this.C = false;
  this.o = void 0;
  this.H = this.v = false;
  this.K = true;
  this.D = [];
  this.B = false;
  this.j = void 0;
  this.M = false;
  this.A = void 0;
}
function uu(a, c) {
  a.ha = c;
  return a;
}
function vu(a) {
  a.A = wu;
  return a;
}
function xu(a) {
  var c = new du();
  c.C = false;
  c.F = true;
  c.o = a;
  return c;
}
function yu(a, c) {
  a.v = c;
  return a;
}
function zu(a, c) {
  a.B = c;
  return a;
}
function nu(a, c) {
  a instanceof Kj && (a = a.L);
  kc(a, "severity", c);
}
function tu(a) {
  if (!a) return null;
  switch (a) {
    case "severe":
    case "fatal":
      return "fatal";
    case "warning":
      return "warning";
    case "info":
    case "unknown":
    case "incident":
      return "incident";
    case "postmortem":
      return "postmortem";
    case "warningafterdeath":
      return "warningafterdeath";
    default:
      return null;
  }
}
function Au(a, c, e, f, g, h) {
  f = f === void 0 ? {} : f;
  g = g === void 0 ? false : g;
  h = h === void 0 ? 0 : h;
  e > Math.floor(Math.random() * 100) &&
    ((f.sampling_samplePercentage = String(e)),
    (f.sampling_sampledBy = "random"),
    h == 0 ? a.info(c, f, g) : h == 1 ? pu(a, c, f, g) : h == 2 && hu(a, c, f, g));
}
function Bu(a, c, e, f) {
  this.o = a;
  this.j = c;
  this.v = e;
  this.A = f;
}
function Cu(a) {
  var c = ub() >= 75,
    e = ub() >= 96;
  if (!c || e) return a.o;
  if (a.v) return (c = a.v.applicationCache) ? a.o - c + 104857600 : a.o;
  a: switch (Hl(a.A, "jobset")) {
    case "scary":
    case "canary":
      c = 12884901888;
      break a;
    default:
      c = 6442450944;
  }
  return Math.max(a.o - c, 0);
}
function Du(a) {
  return Ia("navigator.storage.estimate")
    ? cj(
        K.navigator.storage.estimate().then(function (c) {
          return new Bu(c.usage, c.quota - c.usage, c.usageDetails || null, a);
        }),
      )
    : dj();
}
function Eu(a, c, e) {
  return cj(Du(a))
    .then(function (f) {
      c.storageAvailable = f.j;
      c.storageUsage = Cu(f);
    })
    .catch(function (f) {
      e.info(Error("Eb`" + (f instanceof Error ? f.message : String(f))));
    });
}
function Fu(a) {
  var c = a.target.error,
    e = c && c.name;
  c = (c && c.message) || a.target.webkitErrorMessage;
  a.target.docs_internalAbort && (c = "Internal abort: " + c);
  return e + " (" + c + ")";
}
function Gu(a) {
  for (var c = [], e = 0; e < a.length; e++) c.push(a.item(e));
  return c.toString();
}
function Hu(a, c) {
  if (Iu(c))
    if ((c = K.localStorage))
      try {
        a.idbConnClosingUserOptedOut = c.getItem("docs-uoo");
        var e = c.getItem("docs-oiouid");
        a.idbConnClosingHasOptInOuid = e != null;
        a.idbConnClosingHasNonEmptyOptInOuid = !!e;
      } catch (f) {
        a.idbConnClosingIssue = "error accessing localStorage";
      }
    else a.idbConnClosingIssue = "localStorage not available";
}
function Ju(a, c, e) {
  return Iu(c)
    ? Promise.resolve(Du(e))
        .then(function (f) {
          a.storageAvailable = f.j;
          a.storageUsage = Cu(f);
        })
        .catch(A(null))
    : Promise.resolve();
}
function Iu(a) {
  return (
    a &&
    (a.includes("Connection is closing.") ||
      a.includes("The database connection is closing.") ||
      a.includes("Connection is closing because of"))
  );
}
function Ku(a, c, e, f, g, h) {
  tj.call(this, g, h);
  this.H = a;
  this.K = [];
  this.M = !!c;
  this.T = !!e;
  this.U = !!f;
  for (c = this.P = 0; c < a.length; c++)
    Bj(a[c], Sa(this.N, this, c, true), Sa(this.N, this, c, false));
  a.length != 0 || this.M || this.ma(this.K);
}
Xa(Ku, tj);
Ku.prototype.N = function (a, c, e) {
  this.P++;
  this.K[a] = [c, e];
  this.j ||
    (this.M && c
      ? this.ma([a, e])
      : this.T && !c
        ? this.hb(e)
        : this.P == this.H.length && this.ma(this.K));
  this.U && !c && (e = null);
  return e;
};
Ku.prototype.hb = function (a) {
  Ku.qa.hb.call(this, a);
  for (a = 0; a < this.H.length; a++) this.H[a].cancel();
};
function Lu(a, c, e, f, g, h, k, l, p) {
  Ar.call(this, f, g, k, void 0, l, p);
  this.J = c;
  this.B = c + "-f";
  this.v = c + "-n";
  this.D = e;
  this.M = a;
  this.j = null;
  this.T = h || K.indexedDB || K.webkitIndexedDB;
  this.C = null;
  Mu(this);
}
F(Lu, Ar);
function Mu(a) {
  var c = a.T.open("DocsErrors", 1);
  c.onsuccess = function (e) {
    return void Nu(a, e);
  };
  c.onupgradeneeded = function (e) {
    e.target.transaction.db.createObjectStore("Errors", { keyPath: "key" });
  };
  c.onerror = function (e) {
    Ou(a);
    pu(a.M, Error("Gb`" + Fu(e)));
  };
  c.onblocked = function (e) {
    Ou(a);
    pu(a.M, Error("Fb`" + Fu(e)));
  };
}
function Nu(a, c) {
  var e = c.target.result,
    f = Pu(e, "readwrite");
  Aj(
    new Ku([Qu(a.B, f), Qu(a.v, f)]),
    function (g) {
      g[0][1] == null || g[1][1] == null
        ? ((g = f.objectStore("Errors")),
          g.put({ key: this.B, value: "1" }),
          g.put({ key: this.v, value: "1" }),
          (f.oncomplete = Sa(this.zd, this, e)))
        : this.zd(e);
    },
    a,
  );
}
D = Lu.prototype;
D.zd = function (a) {
  this.j = a;
  this.cb();
};
D.ub = function (a) {
  if (!this.j) return this.D.ub(a);
  if (!K.navigator.locks) return a();
  this.C || (this.C = new AbortController());
  return Kq("idb-es-send-lock-" + this.J, a, this.C);
};
D.kb = function (a) {
  if (!this.j) return this.D.kb(a);
  var c = Pu(this.j, "readwrite"),
    e = new tj();
  Aj(
    Qu(this.v, c),
    function (f) {
      if (f) {
        var g = c.objectStore("Errors");
        g.put({ key: this.v, value: String(f + 1) });
        g.put({ key: this.J + "-e-" + f, value: JSON.stringify(a) });
        c.oncomplete = Sa(e.ma, e);
      } else e.ma();
    },
    this,
  );
  return e;
};
D.Ka = function () {
  if (!this.j) return this.D.Ka();
  var a = Pu(this.j, "readwrite"),
    c = new tj();
  Aj(
    new Ku([Qu(this.B, a), Qu(this.v, a)]),
    function (e) {
      var f = e[0][1];
      e = e[1][1];
      if (!f || e <= f) c.ma();
      else {
        var g = a.objectStore("Errors");
        g["delete"](this.J + "-e-" + f);
        f++;
        g.put({ key: this.B, value: String(f) });
        Aj(
          Ru(this, a),
          function (h) {
            h == 0 && (g.put({ key: this.B, value: "1" }), g.put({ key: this.v, value: "1" }));
            a.oncomplete = Sa(c.ma, c);
          },
          this,
        );
      }
    },
    this,
  );
  return c;
};
D.Ya = function () {
  if (!this.j) return this.D.Ya();
  var a = Pu(this.j, "readonly");
  return Aj(
    new Ku([Qu(this.B, a), Qu(this.v, a)]),
    function (c) {
      var e = c[0][1],
        f = c[1][1];
      if (!e) return null;
      var g = f - e;
      return g < 1
        ? null
        : Aj(
            Su(this.J + "-e-" + e, a),
            function (h) {
              return h && (h = JSON.parse(h))
                ? ((h.errorSender_frontIndex = e),
                  (h.errorSender_nextIndex = f),
                  (h.errorSender_queueSize = g),
                  h)
                : Aj(this.Ka(), this.Ya, this);
            },
            this,
          );
    },
    this,
  );
};
D.Za = function () {
  if (!this.j) return this.D.Za();
  var a = Pu(this.j, "readonly");
  return Ru(this, a);
};
function Ou(a) {
  a.j && (a.j.close(), (a.j = null));
}
function Ru(a, c) {
  return Aj(new Ku([Qu(a.B, c), Qu(a.v, c)]), function (e) {
    return e[1][1] - e[0][1];
  });
}
function Qu(a, c) {
  return Aj(Su(a, c), function (e) {
    e = parseInt(e, 10);
    return e < 0 || isNaN(e) ? null : e;
  });
}
function Su(a, c) {
  c = c.objectStore("Errors");
  var e = new tj();
  c.get(a).onsuccess = function (f) {
    f.target.result ? e.ma(f.target.result.value) : e.ma(null);
  };
  return e;
}
function Pu(a, c) {
  var e = ["Errors"];
  try {
    return a.transaction(e, c);
  } catch (f) {
    throw (
      (c = Gu(a.objectStoreNames)),
      Lk(f, {
        databaseName: a.name,
        databaseObjectStores: c,
        databaseVersion: a.version.toString(),
        transactionObjectStores: e.toString(),
      })
    );
  }
}
D.Ab = A("IdbErrorSender");
D.O = function () {
  this.C && this.C.abort();
  Ou(this);
  Ar.prototype.O.call(this);
};
function Tu(a) {
  try {
    var c = a.get("docs-lfuls"),
      e = K.localStorage;
    if (
      e &&
      (c || Kb || Lb) &&
      (e.setItem("test", "test"),
      e.getItem("test") == "test" && (e.removeItem("test"), e.getItem("test") == null))
    )
      return true;
  } catch (f) {}
  return false;
}
function Uu() {
  T.call(this);
  this.j = {};
}
F(Uu, T);
Uu.prototype.Ta = function (a, c, e) {
  var f = this;
  if (typeof a === "function") e && (a = Sa(a, e));
  else if (a && typeof a.handleEvent == "function") a = Sa(a.handleEvent, a);
  else throw Error("jb");
  var g = new Vu();
  c = qr(function () {
    var h = a,
      k = g.X();
    k !== null && delete f.j[k];
    h();
  }, c);
  this.j[c] = true;
  return (g.j = c);
};
Uu.prototype.clear = function (a) {
  a !== null && delete this.j[a];
  K.clearTimeout(a);
};
Uu.prototype.O = function () {
  for (var a in this.j) this.clear(Number(a));
  T.prototype.O.call(this);
};
function Vu() {
  this.j = null;
}
Vu.prototype.X = w("j");
function Wu(a, c, e, f, g, h, k, l) {
  Ar.call(this, a, e, f, g, h, k, l === void 0 ? true : l);
  var p = this;
  this.M = c || "default";
  this.J = c + "-v";
  this.D = c + "-f";
  this.v = c + "-n";
  this.j = K.localStorage;
  Tu(e);
  a = Xu(this, this.J);
  if (!a || a < 1) {
    this.j.setItem(this.J, "1");
    this.j.setItem(this.D, "1");
    this.j.setItem(this.v, "1");
  }
  this.T = false;
  this.C = this.B = null;
  yr(
    yr(this.N, K.window, "beforeprint", function () {
      return Yu(p);
    }),
    K.window,
    "afterprint",
    function () {
      p.T = false;
      p.B && (p.B.ma(), (p.B = null));
    },
  );
  this.cb();
  this.fa = new Uu();
  il(this, this.fa);
  this.fa.Ta(this.ae, 3e4, this);
}
F(Wu, Ar);
function Yu(a) {
  a.T = true;
  a.C && (a.C.abort(), (a.C = null));
  a.B = new tj();
  Aj(a.B, function () {
    return a.cb();
  });
}
D = Wu.prototype;
D.ub = function (a) {
  var c = this;
  if (!K.navigator.locks) return a();
  if (this.T) return this.B;
  this.C || (this.C = new AbortController());
  return Kq("lses-send-lock-" + (this.M + "-e-"), a, this.C, function () {
    return c.B || Ij();
  });
};
D.kb = function (a) {
  var c = Xu(this, this.v);
  if (!c || Xu(this, this.J) != 1) return Ij();
  try {
    {
      this.j.setItem(this.v, String(c + 1));
      this.j.setItem(this.M + "-e-" + c, JSON.stringify(a));
    }
  } catch (e) {}
  return Ij();
};
D.Ka = function () {
  var a = Xu(this, this.D);
  if (!a || Xu(this, this.J) != 1) return Ij();
  this.j.removeItem(this.M + "-e-" + a);
  a++;
  this.j.setItem(this.D, String(a));
  return Aj(
    this.Za(),
    function (c) {
      c == 0 && (this.j.setItem(this.D, "1"), this.j.setItem(this.v, "1"));
    },
    this,
  );
};
D.Ya = function () {
  var a = Xu(this, this.D);
  return a && Xu(this, this.J) == 1
    ? Aj(
        this.Za(),
        function (c) {
          if (c < 1) return null;
          try {
            var e = this.j.getItem(this.M + "-e-" + a);
            if (e) {
              var f = JSON.parse(e);
              if (f)
                return (
                  (f.errorSender_frontIndex = a),
                  (f.errorSender_nextIndex = Xu(this, this.v)),
                  (f.errorSender_queueSize = c),
                  f
                );
            }
          } catch (g) {}
          return Aj(this.Ka(), this.Ya, this);
        },
        this,
      )
    : Ij(null);
};
D.Za = function () {
  return Ij(Xu(this, this.v) - Xu(this, this.D));
};
function Xu(a, c) {
  return (a = a.j.getItem(c)) ? Zu(a) : null;
}
function Zu(a) {
  a = parseInt(a, 10);
  return a < 0 || isNaN(a) ? null : a;
}
D.ae = function () {
  if (Xu(this, this.v) && Xu(this, this.J) == 1)
    for (var a = this.M + "-e-", c = 0, e = this.j.length; c < e; ++c) {
      var f = this.j.key(c);
      if (f && f.lastIndexOf(a, 0) == 0) {
        var g = Zu(f.substring(a.length)),
          h = Xu(this, this.v);
        h && g && g >= h && this.j.removeItem(f);
      }
    }
};
D.Ab = A("LocalStorageErrorSender");
D.O = function () {
  Ar.prototype.O.call(this);
};
function $u(a, c) {
  this.o = a;
  this.j = c;
}
$u.prototype.create = function (a, c, e, f) {
  return Tu(this.j) ? new Wu(new Qt(), this.o, this.j, c, void 0, e, f) : null;
};
function av(a, c) {
  this.o = a;
  this.j = c;
}
av.prototype.create = function (a, c, e, f) {
  var g = new $u(this.o, this.j).create(a, c, e, f) || new Hr(new Qt(), this.j, c, e, f),
    h = U(this.j, "docs-offline-edose");
  return (Kb || h) && (K.indexedDB || K.webkitIndexedDB)
    ? new Lu(a, this.o, g, new Qt(), this.j, void 0, c, e, f)
    : g;
};
function bv(a) {
  switch (a) {
    case "2g":
      return 2;
    case "3g":
      return 3;
    case "4g":
      return 4;
    case "slow-2g":
      return 1;
    default:
      return 5;
  }
}
function cv(a) {
  Ya.call(this);
  this.B = a;
}
F(cv, Ya);
function dv(a) {
  var c = c === void 0 ? 3e4 : c;
  this.B = a;
  this.j = this.A = this.v = 0;
  this.o = c;
  for (a = ev; a < this.o; ) a *= 2;
  this.F = a;
}
function fv(a, c) {
  if (U(a.B, "docs-irbfes"))
    if (a.j !== 0 && c !== 2)
      if (c === 1) c = a.v < 4 ? ev : a.j < a.o ? a.j * 2 : a.F;
      else if (c === 3) c = a.j < Math.max(a.o, 18e4) ? a.j * 2 : a.j;
      else throw Error("Ib");
    else c = ev;
  else {
    var e = c != 2 && !(a.v < 4);
    c = ev;
    e && a.j != 0 && (c = a.j < a.o ? a.j * 2 : a.j);
  }
  a.j = c;
  return Math.max(0, c - (Date.now() - a.A));
}
var ev = 5e3 * (0.75 + Math.random() * 0.5);
function gv(a) {
  this.G = M(a);
}
F(gv, Q);
function hv(a) {
  this.G = M(a);
}
F(hv, Q);
function iv(a) {
  this.G = M(a, 4);
}
F(iv, Q);
function jv(a) {
  this.G = M(a, 37);
}
F(jv, Q);
function kv(a, c) {
  return vf(a, 8, c);
}
function lv() {
  var a = mv,
    c = nv;
  this.o = ov;
  this.j = a;
  this.v = c || null;
  a = this.o;
  c = Gl(this.j, "docs-clibs");
  a.M = c;
  this.o.fb = 2e4;
}
function pv(a, c) {
  if (U(a.j, "docs-ecir")) return qv(a, c, new dv(a.j));
  c = kv(new jv(), bg(c));
  rv(a.o, c);
  return new Yi(function (e, f) {
    sv(a, e, f);
  });
}
function qv(a, c, e) {
  var f = kv(new jv(), bg(c));
  rv(a.o, f);
  return new Yi(function (g, h) {
    var k = Date.now();
    e.v++;
    e.A = k;
    sv(a, g, h);
  }).Sa(function (g) {
    if (typeof g === "number" && ((500 <= g && g < 600) || g == 401 || g == 0) && e.v < 4)
      return (
        (g = fv(e, g === 0 ? 1 : 3)),
        rr(g).then(function () {
          return qv(a, c, e);
        })
      );
    throw tv(g);
  });
}
lv.prototype.Fb = function (a, c) {
  var e = Error("Jb`" + a + "`" + c);
  this.v && U(this.j, "docs-ecer") && pu(this.v, e, { failureType: a, errorCode: "" + c });
};
function sv(a, c, e) {
  a.o.flush(c, function (f, g) {
    a.Fb(f, g);
    f = U(a.j, "docs-ecir") ? g : tv(g);
    e(f);
  });
}
function tv(a) {
  return typeof a === "number" ? new cv(!((500 <= a && a < 600) || a == 401 || a == 0)) : a;
}
function uv() {
  var a = vv;
  this.o = wv;
  this.j = a;
}
uv.prototype.Xa = w("j");
function xv() {
  this.o = new yv();
}
xv.prototype.j = function (a) {
  return this.o.j(a);
};
function yv() {
  var a = new zv();
  this.v = Av;
  this.o = a;
}
yv.prototype.j = function (a) {
  return pv(this.v, a).Sa(function (c) {
    if (!(c instanceof cv && c.B)) {
      c = ef(a, Bv, 1);
      c = I(c);
      var e = c.next(),
        f;
      try {
        for (; !e.done; e = c.next()) {
          var g = e.value;
          if (!Ke(g, wm, 5)) {
            var h = g,
              k = new wm();
            N(h, wm, 5, k);
          }
          var l = cf(g, wm, 5);
          if (!Ke(l, om, 34)) {
            var p = cf(g, wm, 5),
              q = new om();
            N(p, om, 34, q);
          }
          var r = cf(g, wm, 5);
          var x = cf(r, om, 34);
          sf(x, 26, true);
        }
      } finally {
        e && !e.done && (f = c.return) && f.call(c);
      }
      return Cv(this, a);
    }
  }, this);
};
function Cv(a, c) {
  return new Yi(function (e, f) {
    a.o.j(c, e, f);
  });
}
function Dv(a, c) {
  a: {
    var e = { hd: true };
    c && Object.assign(e, c);
    a = Gf(a, void 0, void 0, e);
    try {
      var f = new dm(),
        g = f.G;
      sg(em)(g, a);
      var h = f;
      break a;
    } catch (k) {
      if (k instanceof RangeError) throw new SyntaxError();
      throw k;
    } finally {
      If(a);
    }
    h = void 0;
  }
  return h;
}
function Ev(a) {
  var c = c === void 0 ? false : c;
  this.j = new oq(a);
  this.v = c;
  c = this.j.v;
  var e = c.get("usp"),
    f = c.get("urp"),
    g = c.get("cros_files", ""),
    h = Fv(e, this.v);
  a = c.get("dl");
  var k = Qp(this.j.o),
    l = c.get("rtpof", ""),
    p = c.get("pli");
  c = new im();
  var q = new hm();
  N(c, hm, 1, q);
  var r = new gm();
  k = sf(r, 3, k);
  N(q, gm, 1, k);
  e && vf(k, 1, e);
  f && vf(k, 2, f);
  h !== null && wf(q, 5, h);
  p === "1" && sf(k, 6, true);
  sf(k, 7, g == "true");
  sf(k, 4, l == "true");
  e = null;
  if (a)
    try {
      e = Dv(Ob(a));
    } catch (x) {
      e = null;
    }
  e && ((a = new fm()), N(c, fm, 2, a), N(a, dm, 1, e));
  this.o = c;
}
function Fv(a, c) {
  var e = K;
  e = e.window || e;
  if (e.parent == e && e.frameElement == null) return null;
  if (c) return 1;
  if (a)
    switch (a) {
      case "mole":
        return 2;
    }
  return 3;
}
function Gv(a, c, e) {
  this.B = a;
  this.A = "offline";
  this.v = c;
  this.o = e;
}
Gv.prototype.j = function (a, c, e) {
  var f = this;
  a = new fo(null, this.A, Date.now(), oe(a), true, this.v);
  this.B.write(
    [a],
    13,
    c,
    function (g) {
      var h;
      if ((h = !g.v))
        h =
          g.j != null &&
          (g.j.indexOf("Connection is closing.".toString()) != -1 ||
            g.j.indexOf("The database connection is closing.".toString()) != -1 ||
            g.j.indexOf("Connection is closing because of".toString()) != -1);
      h
        ? ((h = {}),
          pu(f.o, g, ((h.nonfatalReason = "suspected cache clearing or offline opt-out"), h)),
          c())
        : e(g);
    },
    1337524,
    true,
  );
};
function zv() {
  var a = mv,
    c = nv;
  this.A = Hv;
  this.v = a;
  this.o = c;
}
zv.prototype.j = function (a, c, e) {
  var f = this;
  Iv(this.A).then(function (g) {
    g ? new Gv(g.j, f.v, f.o).j(a, c, e) : c();
  });
};
function Jv(a) {
  this.G = M(a, 1);
}
F(Jv, Q);
function Kv(a) {
  this.G = M(a, 1);
}
F(Kv, Q);
function Lv(a) {
  this.G = M(a);
}
F(Lv, Q);
var Mv = new Ag(113007630, Jv, Lv);
function Nv(a) {
  this.G = M(a);
}
F(Nv, Q);
var Ov = new Ag(112987886, Kv, Nv);
function Pv(a, c) {
  T.call(this);
  var e = this;
  this.o = c;
  this.j = new dn();
  il(this, this.j);
  en(this.j, a.A, function (f) {
    var g = [];
    f = f.j;
    for (var h = 0; h < f.length; h++) {
      var k = f[h];
      switch (k.j.v) {
        case "document":
          var l = new Nv();
          vf(l, 1, k.j.X());
          a: {
            var p = k.o;
            switch (p) {
              case "new":
                p = 1;
                break a;
              case "update":
                p = 2;
                break a;
              case "delete":
                p = 3;
                break a;
              default:
                throw Error("Kb`" + p);
            }
          }
          wf(l, 2, p);
          p = [];
          k = k.v;
          hq(k, "ip") && p.push(1);
          hq(k, "pendingQueueState") && p.push(6);
          hq(k, "lastModifiedClientTimestamp") && p.push(2);
          (hq(k, "lsst") || hq(k, "lsft") || hq(k, "lss")) && p.push(3);
          hq(k, "pendingCreation") && p.push(4);
          hq(k, "title") && p.push(5);
          var q = void 0;
          q = void 0;
          k = l;
          Ce(k);
          k = k.G;
          var r = k[L] | 0;
          if (p == null) Je(k, r, 3);
          else {
            if (!Array.isArray(p)) throw nc();
            var x = p === Gc ? 7 : p[L] | 0,
              y = x,
              z = Re(x),
              B = z || Object.isFrozen(p);
            z || (x = 0);
            B || ((p = sd(p)), (y = 0), (x = Pe(x, r)), (B = false));
            x |= 5;
            z = 4 & x ? (512 & x ? 512 : 1024 & x ? 1024 : 0) : void 0;
            z = (q = z) != null ? q : 1024;
            x |= z;
            for (z = 0; z < p.length; z++) {
              q = p[z];
              var G = Dd(q);
              Object.is(q, G) ||
                (B && ((p = sd(p)), (y = 0), (x = Pe(x, r)), (B = false)), (p[z] = G));
            }
            x !== y && (B && ((p = sd(p)), (x = Pe(x, r))), Ic(p, x));
            Je(k, r, 3, p);
          }
          (p = kf(l, 2, Fe) != 2) || ((p = Me(l, 3, Ed, void 0 === Rc ? 2 : 4)), (p = p.length));
          p && ((p = new Kv()), eg(p, Ov, l), g.push(p));
      }
    }
    g.length && ((f = new Lv()), ff(f, Kv, 1, g), (g = new Jv()), eg(g, Mv, f), e.o.j(g));
  });
}
F(Pv, T);
function Qv(a, c, e) {
  Wn.call(this, e);
  this.j = a;
  this.o = c;
}
F(Qv, Wn);
function Rv(a, c) {
  var e = Sv(a.j, ["ProfileData"], 78);
  Tv(Y(e, "ProfileData").get("cacheupdatestats"), function (f) {
    Uv(e);
    if ((f = f.target.result)) {
      if (f.dataType != "cacheupdatestats") throw Error("Lb");
      var g = new Pn(false, a.ha),
        h = I(Qn()),
        k = h.next(),
        l;
      try {
        for (; !k.done; k = h.next()) {
          var p = k.value,
            q = f[p];
          if (q != null) {
            var r = g,
              x = p,
              y = q.lastAttemptStartTimestamp,
              z = q.lastAttemptEndTimestamp,
              B = q.consecutiveFailureCount,
              G = q.lastSuccessTimestamp;
            Rn(x);
            var C = {};
            y != null && (C.lastAttemptStartTimestamp = y);
            z != null && (C.lastAttemptEndTimestamp = z);
            B != null && (C.consecutiveFailureCount = Ck(B));
            G != null && (C.lastSuccessTimestamp = G);
            V(r, x, C);
            var X = q.lastSeenCacheState;
            X && Sn(g, p, X.completeCacheNames, X.incompleteCacheNames);
          }
        }
      } finally {
        k && !k.done && (l = h.return) && l.call(h);
      }
      g.o = false;
      c(g);
    } else c(null);
  });
}
Qv.prototype.ea = function () {
  return ["ProfileData"];
};
Qv.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Y(c, "ProfileData");
      a.o ? (Vv(c, a.j), Z(e)) : Wv(this.o, "cacheupdatestats", a.j, c, e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function Xv() {}
function Yv(a, c, e, f, g, h) {
  g = g === void 0 ? false : g;
  h = h === void 0 ? false : h;
  c = c !== void 0 ? Zv(c, e) : null;
  g = g ? "prev" : "next";
  if (f)
    return (
      (a = $v(a, f)),
      h
        ? ((h =
            (h = c !== void 0) && g !== void 0
              ? a.j.openKeyCursor(c, g)
              : h
                ? a.j.openKeyCursor(c)
                : a.j.openKeyCursor()),
          (c = new aw(
            h,
            "read",
            a.o,
            a.j.name + ".openKeyCursor(" + (c ? c.lower + ", " + c.upper : c) + ", " + g + ")",
            a.B,
            a.A,
            a.v,
          )))
        : ((h =
            (h = c !== void 0) && g !== void 0
              ? a.j.openCursor(c, g)
              : h
                ? a.j.openCursor(c)
                : a.j.openCursor()),
          (c = new aw(
            h,
            "read",
            a.o,
            a.j.name + ".openCursor(" + (c ? c.lower + ", " + c.upper : c) + ", " + g + ")",
            a.B,
            a.A,
            a.v,
          ))),
      c
    );
  h = bw(a, "openCursor", (c ? c.lower + ", " + c.upper : c) + ", " + g);
  cw(a, h);
  c =
    (f = c !== void 0) && g !== void 0
      ? a.j.openCursor(c, g)
      : f
        ? a.j.openCursor(c)
        : a.j.openCursor();
  return new aw(c, "read", a.v, h, a.o, a.B, a.A);
}
function dw(a, c, e) {
  c = Zv(c, e);
  ew(a, c);
}
function fw(a, c, e) {
  var f = void 0,
    g = void 0,
    h = true;
  f = f === void 0 ? false : f;
  g = g === void 0 ? false : g;
  h = h === void 0 ? false : h;
  var k = Y(a, "ApplicationMetadata"),
    l = [];
  Tv(Yv(k, void 0, void 0, void 0, f, g), function (p) {
    if ((p = p.target.result)) {
      var q = p.value !== void 0 ? p.value : p.key;
      try {
        q = c(q);
      } catch (r) {
        throw r;
      }
      q && l.push(q);
      p["continue"]();
    } else {
      h && Uv(a);
      e && e(l);
    }
  });
}
function gw(a, c) {
  return function (e) {
    e.stopPropagation();
    c(new zn(1, a + " (" + Fu(e) + ")", e));
  };
}
function Zv(a, c) {
  return c === void 0 || a == c ? hw.only(a) : hw.bound(a, c, void 0, void 0);
}
var hw = K.IDBKeyRange || K.webkitIDBKeyRange;
function iw(a, c, e, f, g, h) {
  xn.call(this, a, f, h);
  this.ze = c;
  this.Sd = e;
}
F(iw, xn);
iw.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "append-commands":
      if (a.A) {
        var f = a.F,
          g = Y(c, "DocumentCommands");
        dw(g, [f], [f, []]);
      }
      Y(c, "DocumentCommands");
      a = a.B;
      for (c = 0; c < a.length; ++c) throw Error("Ob`" + typeof a[c]);
      Z(e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function jw(a) {
  this.j = a;
}
function Z(a) {
  a.j(a);
}
function kw(a, c, e, f) {
  T.call(this);
  this.H = a;
  this.C = c;
  this.o = e;
  this.B = f || Date.now;
  this.A = this.j = 0;
  this.v = [];
}
F(kw, T);
kw.prototype.start = function () {
  if (this.A) throw Error("Pb");
  this.A = this.B() + this.C;
  this.j = qr(this.D, this.C, this);
};
kw.prototype.D = function () {
  this.j = 0;
  var a = this.B() - this.A;
  this.v.push(a);
  var c = this.o.hidden || this.o.webkitHidden || this.o.mozHidden || this.o.msHidden ? 1020 : 20;
  this.v.length < 10 && a > c
    ? ((this.A = this.B() + 1e3), (this.j = qr(this.D, 1e3, this)))
    : this.H(this);
};
kw.prototype.O = function () {
  this.j && K.clearTimeout(this.j);
};
function aw(a, c, e, f, g, h, k, l, p, q, r) {
  var x = this;
  this.P = a;
  this.v = e;
  this.J = f;
  this.M = g;
  this.C = h;
  this.R = lw(h, f);
  this.B = this.K = null;
  this.A = l || null;
  this.F = k;
  this.o = r ? Em(this.F, r) : null;
  this.I = q || 0;
  this.j = null;
  this.I > 0 &&
    (this.A || p) &&
    ((this.j = new kw(
      function () {
        if (x.o) {
          var y = x.F,
            z = x.o;
          z in y.j && delete y.j[z];
        }
        x.v.info(Error("Sb"), {
          documentHidden: document.hidden || document.webkitHidden,
          request: x.J,
          requestTimeoutMs: x.I,
          timeoutCallbackSet: !!x.A,
          timeoutDelays: x.j.v.concat().toString(),
        });
        gl(x.j);
        !x.M.j && x.A && (x.N(x.P), x.A());
      },
      this.I,
      document,
    )),
    this.j.start());
  this.P.onsuccess = qu(this.v, this.W, this, true);
  this.P.onerror = qu(this.v, this.S, this, true);
  switch (c) {
    case "read":
      this.C.F++;
      break;
    case "write":
      this.C.C++;
  }
}
function Tv(a, c) {
  if (a.K) throw Error("Qb");
  a.K = c;
}
aw.prototype.W = function (a) {
  gl(this.j);
  if (this.o) {
    var c = this.F,
      e = this.o,
      f = c.j[e];
    f && (f.complete(void 0), delete c.j[e]);
  }
  c = this.C;
  f = this.R;
  c.v = performance.now();
  c.K = a.timeStamp == null ? -1 : c.v - a.timeStamp;
  c.I++;
  e = c.j[f];
  delete c.j[f];
  e && ((f = c.v), (e.o = true), (e.j = f), mw(c, e));
  this.M.j || (this.K && this.K(a));
};
function nw(a, c) {
  if (a.B) throw Error("Rb");
  a.B = c;
}
aw.prototype.S = function (a) {
  gl(this.j);
  if (this.o) {
    var c = this.F,
      e = this.o;
    e in c.j && delete c.j[e];
  }
  c = this.C;
  var f = this.R;
  c.o = performance.now();
  c.D = a.timeStamp == null ? -1 : c.o - a.timeStamp;
  c.H++;
  e = c.j[f];
  delete c.j[f];
  e && ((f = c.o), (e.o = false), (e.j = f), mw(c, e));
  a.target.docs_requestContext = this.J;
  this.M.j || ((c = a.target.error) && c.name == "AbortError") || (this.B && this.B(a));
};
aw.prototype.N = function (a) {
  a.onsuccess = u();
  a.onerror = u();
};
function ow(a, c, e) {
  this.v = a;
  this.A = c;
  this.B = e;
  this.j = this.o = null;
}
function pw() {
  this.j = {};
  this.B = [];
  this.I = this.H = 0;
  this.D = this.o = this.K = this.v = this.A = -1;
  this.C = this.F = this.J = 0;
}
function lw(a, c) {
  a.A = performance.now();
  var e = a.J++;
  a.j[e] = new ow(e, c, a.A);
  return e;
}
function mw(a, c) {
  for (a.B.push(c); a.B.length > 5; ) a.B.shift();
}
function qw(a) {
  return (
    "[" +
    a
      .map(function (c) {
        if (c) {
          var e = "id: " + c.v + ", desc: '" + c.A + "', requestTime: " + c.B;
          c.o !== null && (e += ", success: " + c.o);
          c.j !== null && (e += ", resultTime: " + c.j);
          c = "{" + e + "}";
        } else c = "{}";
        return c;
      })
      .join("; ") +
    "]"
  );
}
function rw(a) {
  this.B = a;
  this.A = this.o = this.v = this.j = false;
}
function sw(a, c, e) {
  a.A && pu(a.B, Error("Tb`" + c), e);
}
function tw(a) {
  try {
    var c = K.localStorage.getItem("docs-ucb");
  } catch (e) {
    return (a.info(Error("Vb`" + e.message)), "e");
  }
  switch (c) {
    case "1":
      return "t";
    case "0":
      return "f";
    default:
      return "u";
  }
}
function uw(a, c, e, f, g, h, k, l) {
  aw.call(this, a, "open", c, e, new rw(c), new pw(), f, h, true, k, l);
  this.H = this.D = null;
  this.U = g;
  a.onblocked = qu(c, this.T, this, true);
  a.onupgradeneeded = qu(c, this.aa, this, true);
}
F(uw, aw);
uw.prototype.T = function (a) {
  gl(this.j);
  this.D && this.D(a);
};
uw.prototype.aa = function (a) {
  gl(this.j);
  if (a.dataLoss && a.dataLoss != "none") {
    var c = {};
    c.dataLoss = a.dataLoss;
    c.dataLossMessage = a.dataLossMessage;
    c.optinBackup = nq(this.U);
    c.requestContext = this.J;
    c.unsavedChanges = tw(this.v);
    this.v.info(Error("Wb"), c);
  }
  this.H && this.H(a);
};
uw.prototype.N = function (a) {
  aw.prototype.N.call(this, a);
  a.onblocked = Vi;
  a.onupgradeneeded = Vi;
};
function vw(a, c) {
  if (a.D) throw Error("Xb");
  a.D = c;
}
function ww(a, c) {
  if (a.H) throw Error("Yb");
  a.H = c;
}
function xw(a, c, e, f, g) {
  this.j = a;
  this.B = c;
  this.A = e;
  this.o = f;
  this.v = g;
}
xw.prototype.get = function (a) {
  return new aw(
    this.j.get(a),
    "read",
    this.o,
    this.j.name + ".get(" + a + ")",
    this.B,
    this.A,
    this.v,
  );
};
function yw(a, c, e, f, g) {
  this.j = a;
  this.o = c;
  this.B = e;
  this.v = f;
  this.A = g;
}
D = yw.prototype;
D.get = function (a) {
  var c = bw(this, "get", a instanceof IDBKeyRange ? a.lower + ", " + a.upper : a);
  cw(this, c);
  return new aw(this.j.get(a), "read", this.v, c, this.o, this.B, this.A);
};
D.getAll = function (a) {
  var c = bw(this, "getAll", a instanceof IDBKeyRange ? a.lower + ", " + a.upper : a);
  cw(this, c);
  return new aw(this.j.getAll(a), "read", this.v, c, this.o, this.B, this.A);
};
function Vv(a, c) {
  var e = bw(a, "put");
  cw(a, e);
  c = a.j.put(c);
  return new aw(c, "write", a.v, e, a.o, a.B, a.A);
}
D.add = function (a, c) {
  var e = bw(this, "add", c);
  cw(this, e);
  a = c !== void 0 ? this.j.add(a, c) : this.j.add(a);
  return new aw(a, "write", this.v, e, this.o, this.B, this.A);
};
function ew(a, c) {
  var e = bw(a, "delete", c instanceof IDBKeyRange ? c.lower + ", " + c.upper : c);
  cw(a, e);
  new aw(a.j["delete"](c), "delete", a.v, e, a.o, a.B, a.A);
}
D.clear = function () {
  var a = bw(this, "clear");
  cw(this, a);
  return new aw(this.j.clear(), "clear", this.v, a, this.o, this.B, this.A);
};
D.count = function (a) {
  var c = bw(this, "count", a);
  cw(this, c);
  a = a !== void 0 ? this.j.count(a) : this.j.count();
  return new aw(a, "read", this.v, c, this.o, this.B, this.A);
};
function $v(a, c) {
  cw(a, bw(a, "getIndex", c));
  return new xw(a.j.index(c), a.o, a.B, a.v, a.A);
}
function bw(a, c, e) {
  return a.j.name + "." + c + "(" + (e !== void 0 ? e : "") + ")";
}
function cw(a, c) {
  sw(a.o, "request: " + c);
}
function zw(a) {
  this.v = a;
  this.j = [];
  this.o = false;
}
function Aw(a) {
  var c = new jw(function (e) {
    Ab(a.j, e) && a.j.length === 0 && !a.o && ((a.o = true), a.v());
  });
  a.j.push(c);
  return c;
}
function Bw(a, c, e, f, g, h, k, l, p, q, r, x, y, z, B) {
  function G() {}
  var C = this;
  p = p === void 0 ? false : p;
  x = x === void 0 ? null : x;
  z = z === void 0 ? false : z;
  this.I = a;
  this.fa = c;
  this.o = e;
  this.T = f;
  this.J = false;
  this.B = p;
  this.F = this.K = null;
  this.j = new rw(this.o);
  this.H = new pw();
  this.U = r || 6e4;
  this.A = new kw(
    function () {
      if (!C.j.o) {
        var X = Cw(C);
        X.transactionTimeout = C.U;
        X.timeoutDelays = C.A.v.concat().toString();
        X.documentHidden = document.hidden || document.webkitHidden;
        C.o.info(Error("ac`" + C.P), X);
        C.A.dispose();
        C.S && (Dw(C, true), C.S(), (C.F.oncomplete = null));
      }
    },
    this.U,
    document,
  );
  this.S = x;
  this.W = h;
  this.D = k;
  this.M = l;
  a = U(this.D, "docs-eaiturd");
  this.ia = B != null ? B : a;
  this.P = q || An(l);
  this.v = null;
  this.R = Ew++;
  this.C = g;
  this.aa = y !== void 0 ? y : this.B ? 29030 : 29029;
  this.ja = z || false;
  g = U(this.D, "docs-eiec");
  l = U(this.D, "docs-esiec");
  g
    ? (G = function () {
        C.F.commit !== void 0 && (Fw(C), sw(C.j, "commit", Cw(C)), C.F.commit());
      })
    : l &&
      (G = function () {
        sw(C.j, "simulated commit", Cw(C));
        C.j.A = true;
      });
  this.N = new zw(G);
}
D = Bw.prototype;
D.open = function () {
  if (this.aa != null) {
    var a = U(this.D, "docs-intli") ? this.ja : true;
    this.v = Hm(this.W, this.aa, a);
  }
  a = this.B ? "readwrite" : "readonly";
  var c = { durability: this.ia ? "relaxed" : "strict" };
  this.A.start();
  try {
    var e = this.I.transaction(this.fa, a, c);
  } catch (f) {
    throw ((e = Cw(this)), (e.transactionStage = "open"), Hu(e, f.message), Lk(f, e));
  }
  e.onabort = qu(this.o, this.Ce, this);
  e.oncomplete = qu(this.o, this.Td, this);
  e.onerror = qu(this.o, this.Ud, this, true);
  this.F = e;
  this.C.add(this);
};
function Uv(a) {
  sw(a.j, "abandon", Cw(a));
  a.j.o = true;
  a.A.dispose();
  a.v = null;
  a.C.remove(a);
}
D.abort = function (a) {
  sw(this.j, "abort", Cw(this));
  Dw(this, false, a);
};
function Dw(a, c, e) {
  var f = a.j;
  if (!f.v && !f.j) {
    Fw(a);
    f.j = true;
    try {
      a.F.abort();
    } catch (g) {
      (g.name == "InvalidStateError" && c) ||
        ((f = Cw(a)), (f.abortFromTimeout = c), a.o.info(g, f));
    }
    e && !a.J && (a.T(e), (a.J = true));
    a.A.dispose();
    a.C.remove(a);
  }
}
function Y(a, c) {
  Fw(a);
  return new yw(a.F.objectStore(c), a.j, a.H, a.o, a.W);
}
function Gw(a, c) {
  if (a.K) throw Error("Zb");
  a.K = c;
}
function Fw(a) {
  if (!a.F) throw Error("$b");
}
D.Ce = function (a) {
  if (this.j.o) return Promise.resolve();
  var c = true;
  this.j.j
    ? (c = false)
    : ((a.target.docs_internalAbort = true),
      !this.B &&
        a.target.error &&
        a.target.error.name == "QuotaExceededError" &&
        (this.K && this.K(), (c = false)));
  this.j.v = true;
  this.C.remove(this);
  this.A.dispose();
  var e = Promise.resolve();
  c && (e = Hw(this, "LocalStore IndexedDB transaction abort", Cw(this), a));
  this.v = null;
  return e;
};
D.Td = function () {
  if (!this.j.o) {
    this.C.remove(this);
    if (this.v) {
      var a = new mm();
      wf(a, 1, this.M);
      tf(a, 2, this.H.F);
      tf(a, 3, this.H.C);
      var c = ym(41);
      c.A = a;
      a = zm(c);
      this.v.complete(a);
      this.v = null;
    }
    this.A.dispose();
    this.K && this.K();
  }
};
D.Ud = function (a) {
  a.stopPropagation();
  var c = this.j;
  if (
    !(c.o || c.v || c.j || ((c = a.target.error), c && c.name == "AbortError")) &&
    ((c = Cw(this)),
    (c.request = a.target.docs_requestContext),
    Hw(this, "LocalStore IndexedDB error", c, a),
    (a = this.C),
    U(this.D, "docs-ewtaoe") && this.B)
  ) {
    delete a.j[this.X()];
    c = 0;
    for (var e in a.j) {
      var f = Number(e),
        g = a.j[f];
      g.B && (g.abort(), delete a.j[f], c++);
    }
    a.o = true;
    a.v.info(Error("bc`" + this.X() + "`" + c));
  }
};
function Hw(a, c, e, f) {
  var g = Fu(f),
    h = c + " (" + a.P + "): " + g;
  e.transactionStage = "processError";
  Hu(e, g);
  return Ju(e, g, a.D).then(function () {
    a.o.info(Error(h), e);
    var k = new zn(1, h, f, a.M, !!mq());
    ql(k.A, e);
    Lk(k.L, e);
    a.J || (a.T(k), (a.J = true));
  });
}
D.X = w("R");
function Cw(a) {
  var c = Gu(a.I.objectStoreNames),
    e = a.v ? a.v.o : null;
  c = {
    databaseName: a.I.name,
    databaseObjectStores: c,
    databaseVersion: a.I.version,
    transactionAllowWrite: a.B,
    transactionContext: a.P,
    transactionId: a.R,
    transactionObjectStores: a.fa.toString(),
    transactionStartTimeMs: e,
    transactionAgeMs: e ? performance.now() - e : null,
  };
  a = a.H;
  e = gq(a.j);
  c.pendingRequestCount = e.length;
  c.pendingRequests = qw(e);
  c.idbRecentlyCompletedRequests = qw(a.B);
  c.requestErrorCount = a.H;
  c.requestSuccessCount = a.I;
  c.idbLastSuccessCallbackClientTimeMs = a.v;
  c.idbLastErrorCallbackClientTimeMs = a.o;
  if (a.A == -1) e = "no requests";
  else if (((e = Math.max(a.v, a.o)), e == -1)) e = "request creation";
  else {
    var f = a.v >= a.o ? "success" : "error";
    e = a.A >= e ? "request creation (after " + f + " callback)" : f + " callback";
  }
  c.idbLastEventDesc = e;
  c.idbLastSuccessEventCallbackTimeDiffMs = a.K;
  c.idbLastErrorEventCallbackTimeDiffMs = a.D;
  c.idbReadOperationCount = a.F;
  c.idbWriteOperationCount = a.C;
  return c;
}
function Iw(a) {
  this.v = a;
  this.j = {};
  this.o = false;
}
Iw.prototype.add = function (a) {
  if (a.B || !this.o) this.j[a.X()] = a;
};
Iw.prototype.remove = function (a) {
  delete this.j[a.X()];
};
var Ew = 0;
function Jw(a, c) {
  Lq.call(this, "j", c);
  this.newVersion = a;
}
F(Jw, Lq);
function Kw(a, c, e, f) {
  T.call(this);
  this.J = a;
  this.v = c;
  this.M = e;
  this.A = f;
  this.D = this.C = this.j = null;
  this.N = {};
  this.H = false;
  this.I = new Iw(c);
  this.B = new an();
  il(this, this.B);
  this.o = new an();
  il(this, this.o);
  this.P = K.indexedDB || K.webkitIndexedDB;
}
F(Kw, T);
Kw.prototype.close = function (a) {
  this.j && ((this.j.onversionchange = null), this.j.close(), (this.j = null), (this.C = a));
};
Kw.prototype.initialize = function (a) {
  var c = this;
  if (this.j) throw Error("cc");
  if (a.onversionchange != null) throw Error("dc");
  a.onclose = function () {
    var e = {};
    e.optinBackup = nq(c.A);
    c.v.info(Error("ec"), e);
    c.B.dispatchEvent(null);
  };
  a.onerror = gw("Database error.", this.J);
  a.onversionchange = function (e) {
    c.H = true;
    e = Number(e.version) || e.newVersion || 0;
    c.close("Version change detected " + e);
    c.o.dispatchEvent(new Jw(e));
  };
  this.j = a;
};
function Lw(a) {
  if (!a.j) return -1;
  a = parseInt(a.j.version, 10);
  return a >= 0 ? a : -1;
}
function Sv(a, c, e, f, g, h, k, l, p, q, r) {
  q = q === void 0 ? false : q;
  if (!a.j) {
    if (a.C != null) throw Lk(Error("fc`" + a.C), a.N);
    throw Error("gc");
  }
  if (g && a.I.o) throw Error("hc");
  a = new Bw(a.j, c, a.v, f || a.J, a.I, a.M, a.A, e, g, h, k, l, p, q, r);
  a.open();
  return a;
}
function Mw(a, c, e, f, g) {
  if (Lw(a) >= c) throw Error("ic`" + c + "`" + Lw(a));
  var h = a.j.name;
  a.close("Setting version to " + c);
  var k = a.v;
  c = new uw(a.P.open(h, c), k, "setVersion database.open", a.M, a.A);
  ww(c, function (l) {
    l = l.target.transaction;
    l.onabort = l.onerror = qu(k, f, {}, true);
    e(l);
  });
  nw(c, f);
  vw(c, function (l) {
    k.info(Error("jc"), { "Old version": l.oldVersion, "New version": l.newVersion });
  });
  Tv(c, function (l) {
    a.initialize(l.target.result);
    g(l);
  });
}
Kw.prototype.O = function () {
  this.close(this.D ? "DocsDatabase was disposed due to " + this.D : "DocsDatabase was disposed");
  T.prototype.O.call(this);
};
function Nw(a, c, e, f, g, h, k, l, p) {
  g = g
    ? function () {
        f(new zn(6, "Timeout opening database."));
      }
    : void 0;
  p && k.o("odbs");
  g = new uw(
    (K.indexedDB || K.webkitIndexedDB).open("GoogleDocs"),
    e,
    "database.open",
    h,
    l,
    g,
    Gl(l, "docs-localstore-iort"),
    "idbodb",
  );
  Tv(g, function (q) {
    p && k.o("odbc");
    var r = new Kw(c, e, h, l);
    r.initialize(q.target.result);
    a(r);
  });
  nw(g, gw("Error opening database.", f));
}
function Ow() {
  W.call(this);
}
F(Ow, Xn);
Ow.prototype.ea = function () {
  throw Error("kc");
};
Ow.prototype.ba = function (a) {
  throw Error("Mb`" + a.getType());
};
function Pw(a, c, e) {
  W.call(this);
  this.j = e;
}
F(Pw, Yn);
Pw.prototype.ea = function () {
  return ["Comments"];
};
Pw.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Y(c, "Comments");
      ln(a);
      if (a.o) {
        var f = a.j,
          g = {};
        g.cmtKey = ln(a);
        g.stateIndex = [f.s, f.di];
        g.da = f.da;
        Vv(c, g);
        Z(e);
      } else {
        g = a.j;
        a = ln(a);
        var h = {};
        "s" in g && ((h.stateIndex = [g.s, a[0]]), delete g.s);
        for (f in g) h[f] = g[f];
        Wv(this.j, a, h, c, e);
      }
      break;
    case "delete-record":
      c = Y(c, "Comments");
      a = ln(a);
      ew(c, a);
      Z(e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function Qw(a, c) {
  this.A = a;
  this.o = c || {};
  this.j = this.v = null;
}
function Rw(a, c, e) {
  this.D = a;
  this.J = c;
  this.A = e;
  this.j = null;
  this.B = {};
  this.v = this.H = this.o = this.C = this.I = null;
  this.K = this.F = false;
}
function Sw(a) {
  return a.j != null ? Tw(a.j) : null;
}
function Uw(a, c) {
  a.j == null && (a.H = Date.now());
  a.j = Tw(c);
  a.o = Date.now();
  a.v = a.o;
}
function Vw(a, c, e) {
  for (var f in c) {
    var g = Tw(a.j[f]),
      h = Tw(c[f]);
    a.B[f] = new Ww(g, h, true);
    e.includes(f) ? (a.j[f] = h != null ? h : null) : (a.j[f] = h);
  }
}
function Xw(a, c, e) {
  c = Tw(c);
  e.j = Date.now();
  var f = e.o,
    g = [],
    h = [],
    k = {};
  for (z in c) {
    var l = JSON.stringify(c[z]),
      p = JSON.stringify(a.j[z]),
      q = JSON.stringify(f[z]);
    if (l != p && l != q) {
      var r = Tw(a.j[z]),
        x = Tw(c[z]);
      a.j[z] = x;
      var y = a.B[z];
      a.B[z] = new Ww(r, x, false);
      z != "relevancyRank" &&
        (Object.hasOwn(f, z) ? h.push(z) : g.push(z),
        Yw.includes(z) &&
          ((k["docCapability_propertyDiffs_" + z] =
            "storage: [" + l + "], cache: [" + p + "], modifications: [" + q + "]"),
          (k["docCapability_cacheUpdates_" + z] = y
            ? "updateTime: [" +
              y.o +
              "], beforeUpdate: [" +
              JSON.stringify(y.A) +
              "], afterUpdate: [" +
              JSON.stringify(y.v) +
              "], isApplyingModifications: [" +
              y.j +
              "]"
            : "null")));
    }
  }
  if (g.length + h.length > 0) {
    g.sort();
    h.sort();
    k.docCapability_cachedProperties = g.join(",");
    k.docCapability_updatedProperties = h.join(",");
    var z = Object.keys(e.o);
    z.sort();
    k.docCapability_modificationKeys = z.join(",");
    k.docCapability_operationTiming =
      "operationStartTime: [" +
      e.A +
      "], readComplete: [" +
      e.v +
      "], comparePropertyDiffs: [" +
      e.j +
      "]";
    k.docCapability_lastSyncFinishTimestamp = c.lsft;
    k.docCapability_lastSyncStartTimestamp = c.lsst;
    Object.assign(k, Zw(a));
    pu(a.D, Error("mc"), k);
  }
  a.o = Date.now();
}
function Zw(a) {
  var c = {};
  c.cache_recordType = a.J;
  c.docCapability_lastCachedTimestamp = a.o;
  c.docCapability_initialCacheStartTimeMs = a.I;
  c.docCapability_initialCachedTimestamp = a.H;
  c.docCapability_lastFullCacheStartTimeMs = a.C;
  c.docCapability_lastFullCachedTimestamp = a.v;
  c.docCapability_isNewDocumentInSession = a.F;
  return c;
}
function Tw(a) {
  return a == null
    ? a
    : typeof structuredClone === "function"
      ? structuredClone(a)
      : JSON.parse(JSON.stringify(a));
}
function Ww(a, c, e) {
  this.o = Date.now();
  this.A = a;
  this.v = c;
  this.j = e;
}
var Yw =
  "acjf acl rev lastSyncedTimestamp startupHints initialPinSourceApp lsft lsst ips lss isFastTrack hpmdo modelNeedsResync approvalMetadataStatus pendingQueueState pendingCreation lastModifiedClientTimestamp title inc quotaStatus isOwner ind mimeType lastModifiedServerTimestamp featureBitSetModelVersion r s uc".split(
    " ",
  );
function $w() {
  W.call(this);
}
F($w, po);
function ax(a, c, e, f, g, h, k) {
  k = k === void 0 ? false : k;
  Zn.call(this, f, h);
  this.A = e;
  this.v = h;
  this.K = U(h, "docs-eiwot");
  this.B = U(this.v, "docs-eiwotv2dl");
  this.C = U(this.v, "docs-eiwotv2");
  this.j = k || this.K || this.B || this.C ? new Rw(g, "Document", this.v) : null;
}
F(ax, Zn);
ax.prototype.ea = function (a) {
  if (!this.Z(a)) throw Error("nc`" + a.getType());
  var c = ["DocumentCommands", "Documents"];
  a.getType() == "delete-record" &&
    (c = c.concat([
      "Comments",
      "DocumentEntities",
      "PendingQueueCommands",
      "PendingQueues",
      "ProfileData",
    ]));
  return c;
};
ax.prototype.ba = function (a, c, e) {
  var f = Y(c, "Documents");
  switch (a.getType()) {
    case "update-record":
      a.o
        ? ((a = a.j),
          f.add(a),
          (this.C || this.B) && this.j && ((f = this.j), Uw(f, a), (f.F = true)),
          Z(e))
        : ((c = this.j) == null
            ? (c = 0)
            : c.j != null
              ? U(c.A, "docs-eiwotv2") || (U(c.A, "docs-eiwot") && !c.F)
                ? (c = true)
                : (U(c.A, "docs-eiwotv2dl"), (c = false))
              : (c = false),
          c
            ? (Vw(this.j, a.j, bx), Vv(f, this.j.j), Z(e))
            : (this.j &&
                this.j.j == null &&
                ((c = this.j),
                c.C != null &&
                  c.K != 1 &&
                  (c.v == null || c.v < c.C) &&
                  ((c.K = true), pu(c.D, Error("lc"), Zw(c)))),
              this.j && this.j.j != null
                ? ((c = new Qw(Date.now(), Tw(a.j))), Wv(this.A, ln(a), a.j, f, e, bx, this.j, c))
                : Wv(this.A, ln(a), a.j, f, e, bx)));
      break;
    case "delete-record":
      cx(this, a, c, e);
      break;
    default:
      this.Da(a.C).ba(a, c, e);
  }
};
function cx(a, c, e, f) {
  c.A
    ? a.o(c, e, f)
    : dx(ln(c), e, function (g) {
        g ? e.abort(new zn(5, "Pending changes found")) : a.o(c, e, f);
      });
}
function dx(a, c, e) {
  Tv(Yv(Y(c, "PendingQueueCommands"), [a], [a, []]), function (f) {
    f.target.result ? e(true) : fx(a, c, e);
  });
}
function fx(a, c, e) {
  Tv($v(Y(c, "Comments"), "StateIndex").get([2, a]), function (f) {
    e(!!f.target.result);
  });
}
ax.prototype.o = function (a, c, e) {
  a = ln(a);
  var f = Y(c, "DocumentCommands");
  dw(f, [a], [a, []]);
  f = Y(c, "PendingQueueCommands");
  dw(f, [a], [a, []]);
  f = Y(c, "PendingQueues");
  dw(f, a);
  f = Y(c, "Documents");
  dw(f, a);
  f = Y(c, "DocumentLocks");
  dw(f, [a]);
  f = Y(c, "Comments");
  dw(f, [a], [a, []]);
  f = Y(c, "DocumentEntities");
  dw(f, [a], [a, []]);
  f = Aw(c.N);
  gx(c, "nonsnapshottedocumentids", [a], f);
  f = Aw(c.N);
  gx(c, "missingdocosdocumentids", [a], f);
  Z(e);
};
var bx =
  "approvalMetadataStatus contentLockType externalityState initialPinSourceApp lastModifiedClientTimestamp lastWarmStartedTimestamp quotaStatus relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber odocid".split(
    " ",
  );
function hx() {}
hx.prototype.j = function (a, c, e, f, g, h, k) {
  return new ax(a, c, e, f, g, h, k === void 0 ? false : k);
};
function ix(a, c, e, f, g) {
  $n.call(this, e, g);
  this.j = a;
  this.o = f;
}
F(ix, $n);
function jx(a, c, e) {
  e = Sv(a.j, ["ApplicationMetadata"], 46, e);
  fw(
    e,
    function (f) {
      var g = f.dt;
      if (g == null) throw Error("oc");
      var h = new Dn(g, false, a.ha);
      g = a.Da(g);
      var k = f.jobset;
      k != null && V(h, "jobset", k);
      k = f.ic;
      k != null && ((g = g.Zc(k)), (h.K = g.slice(0)), (h.B = true));
      (g = f.docosKeyData) && V(h, "docosKeyData", g);
      f = f.version;
      V(h, "version", Eh(f !== void 0 ? f : 0));
      h.o = false;
      return h;
    },
    c,
  );
}
ix.prototype.ea = function (a) {
  if (!this.Z(a)) throw Error("nc`" + a.getType());
  return ["ApplicationMetadata"];
};
ix.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-application-metadata":
      this.Da(ln(a));
      var f = a.j;
      if (a.A) {
        if (a.A) var g = a.A;
        else throw fh("Ma").L;
        for (var h = [], k = 0; k < g.length; k++) h.push(Do(g[k]));
        f.ic = h;
      }
      c = Y(c, "ApplicationMetadata");
      a.o ? (Vv(c, f), Z(e)) : Wv(this.o, ln(a), f, c, e);
      break;
    default:
      throw Error("pc`" + a.getType());
  }
};
function kx(a, c, e) {
  W.call(this);
  this.j = e;
}
F(kx, bo);
kx.prototype.ea = function () {
  return ["DocumentEntities"];
};
kx.prototype.ba = function (a, c, e) {
  c = Y(c, "DocumentEntities");
  switch (a.getType()) {
    case "update-record":
      if (a.o) {
        var f = {};
        f.deKey = ln(a);
        f.data = a.j.data;
        Vv(c, f);
        Z(e);
      } else {
        f = {};
        f.data = a.j.data;
        a = ln(a);
        Wv(this.j, a, f, c, e);
      }
      break;
    case "delete-record":
      dw(c, ln(a));
      Z(e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function lx(a, c, e, f) {
  this.o = a;
  this.A = c;
  this.j = e;
  this.v = f;
}
function mx(a) {
  W.call(this);
  this.j = a;
}
F(mx, co);
mx.prototype.B = function () {
  this.j.B();
};
mx.prototype.ea = function () {
  return ["DocumentLocks"];
};
mx.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "document-lock":
      switch (a.B) {
        case 2:
          nx(this.j, a.A, c, e);
          break;
        case 1:
          ox(this.j, a.A, c, e);
      }
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
mx.prototype.O = function () {
  co.prototype.O.call(this);
  this.j.dispose();
};
function px() {}
function qx() {
  this.j = {};
}
function rx(a, c, e, f, g) {
  T.call(this);
  var h = this;
  this.o = a;
  this.v = c;
  this.C = g;
  this.A = 0;
  this.I = f;
  this.D = new dn();
  il(this, this.D);
  en(this.D, e.o, function () {
    h.B();
  });
  this.J = new wr(this);
  this.M = new an();
  il(this, this.M);
  this.H = U(this.C, "docs-offline-ebsml") ? new qx() : null;
  this.N = false;
  this.j = this.P = null;
}
F(rx, T);
function ox(a, c, e, f) {
  sx(a, c, e, function (g, h) {
    if (g == "unavailable") {
      tx(a, h, "ensureDocumentLockAvailable");
      var k = new zn(2, "Lock not available", null, e.M);
      h = ux(a, h, "ensureDocumentLockAvailable");
      if (a.H) {
        var l = a.H;
        if (l.j[c]) {
          l = l.j[c];
          var p = {};
          p.lastAcquisitionAttemptedTime = l.j;
          p.webLockHasBeenAcquiredForDoc = l.C;
          p.lastWebLockCheckTime = l.F;
          p.lastWebLockCheckAvailable = l.B;
          p.lastLockAcquisitionCompletedTime = l.o;
          p.lastLockAcquisitionResult = l.v;
          p.lastLockWrittenTimeMs = l.A;
          l = p;
        } else l = {};
        Object.assign(h, l);
      }
      h.currentLockSession = a.o;
      h.lockState = g;
      ql(k.A, h);
      Lk(k.L, h);
      e.abort(k);
    } else Z(f);
  });
}
function nx(a, c, e, f) {
  if (K.navigator.locks) vx(a, c, e, f);
  else {
    a.j && a.j.stop();
    var g = function () {
      gl(a.j);
      a.j = null;
      e.abort(new zn(2, "Lock could not be refreshed"));
    };
    wx(
      a,
      c,
      e,
      function (h) {
        h && h.j == a.o
          ? xx(
              a,
              c,
              e,
              h,
              function () {
                a.j && a.j.start();
                Z(f);
              },
              g,
            )
          : (tx(a, h, "refreshDocumentLock"), g());
      },
      g,
    );
  }
}
function vx(a, c, e, f) {
  wx(
    a,
    c,
    e,
    function (g) {
      g && g.j == a.o
        ? Z(f)
        : (tx(a, g, "ensureDocumentLockOwner"),
          e.abort(new zn(2, "Lock not available: session is not the current lock-holder")));
    },
    function (g) {
      e.abort(g);
    },
  );
}
function wx(a, c, e, f, g) {
  c = Y(e, "DocumentLocks").get([c]);
  Tv(c, function (h) {
    a.Oa() || ((h = h.target.result), f(h ? new lx(h.e, h.dlKey[0], h.sId, h.cId || null) : null));
  });
  g && nw(c, Wi(g));
}
function sx(a, c, e, f) {
  wx(a, c, e, function (g) {
    if (g) {
      var h = a.o;
      var k = a.v == 0;
      var l = U(a.C, "docs-offline-ebsml");
      l = l === void 0 ? false : l;
      var p = Date.now();
      k =
        g.j == h
          ? "available"
          : (h = window.localStorage) && h.getItem("dcl_" + g.j)
            ? "available"
            : (l && g.o == 0 ? 0 : g.o + (k ? 6e4 : 0) <= p || g.o > p + 36e4)
              ? "expiredOtherSid"
              : "unavailable";
    } else k = "available";
    f(k, g);
  });
}
function tx(a, c, e) {
  if (!(a.v <= 0)) {
    var f = ux(a, c, e),
      g = "IndexedDB document lock not available";
    c
      ? K.navigator.locks &&
        e == "acquireDocumentLock" &&
        (g = "IndexedDB document lock not available after Web Locks API fallback")
      : (g = "IndexedDB document lock not available because the lock does not exist");
    a.I.info(Error(g), f);
  }
}
function ux(a, c, e) {
  var f = Date.now(),
    g = {};
  g.lockReadReason = e;
  g.lockDuration = a.v;
  a.A && (g.lastWrittenValidUntil = a.A - f);
  g.webLocksApiAvailable = !!K.navigator.locks;
  c &&
    ((g.lockHoldingSessionId = c.j),
    (g.validUntil = c.o - f),
    K.navigator.locks &&
      ((c = (e = window.localStorage) && e.getItem("dcl_" + c.j)),
      (g.lockReleased = !!c),
      (g.webLockHasBeenAcquired = a.N),
      (g.webLockReleaseReason = a.P)));
  return g;
}
function xx(a, c, e, f, g, h) {
  var k = Date.now(),
    l = 0;
  f && a.o == f.j && (l = f.o);
  f = Math.min(Math.max(k + a.v, l), k + 6e4);
  a.A = f;
  e = Y(e, "DocumentLocks");
  a = new lx(f, c, a.o, null);
  c = {};
  c.e = a.o;
  c.dlKey = [a.A];
  c.sId = a.j;
  c.cId = a.v;
  a = Vv(e, c);
  Tv(a, Wi(g));
  h && nw(a, Wi(h));
}
rx.prototype.B = function () {
  if (!K.navigator.locks) {
    gl(this.j);
    this.j = null;
    var a = window.localStorage;
    if (a)
      try {
        a.setItem("dcl_" + this.o, String(Date.now()));
      } catch (f) {
        for (var c = 0, e = 0; e < a.length; e++) a.key(e).lastIndexOf("dcl_", 0) == 0 && c++;
        throw Lk(f, { keysTotal: String(a.length), locksTotal: String(c) });
      }
  }
  Promise.resolve();
};
rx.prototype.O = function () {
  this.J.dispose();
  gl(this.j);
  this.j = null;
  T.prototype.O.call(this);
};
function yx() {
  W.call(this);
}
F(yx, go);
yx.prototype.ea = function () {
  return ["Impressions"];
};
yx.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      if (a.o) {
        c = Y(c, "Impressions");
        a = a.j;
        var f = {};
        f.iKey = [a.di || "", a.ibt];
        f.dt = a.dt;
        f.iba = a.iba;
        Vv(c, f);
        Z(e);
      } else throw Error("qc");
      break;
    case "delete-record":
      dw(Y(c, "Impressions"), ln(a));
      Z(e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function zx() {
  W.call(this);
}
F(zx, ho);
function Ax(a, c) {
  Uo.call(this, c);
}
F(Ax, Uo);
Ax.prototype.wc = function (a) {
  return [new wp(a.B, Date.now())];
};
Ax.prototype.ea = function () {
  return ["ProfileData"];
};
Ax.prototype.ba = function (a, c, e) {
  if (a.getType() == "update-pinned-docs") Bx(this, a, c, e);
  else throw Error("Mb`" + a.getType());
};
function Bx(a, c, e, f) {
  var g = Y(e, "ProfileData");
  Tv(g.get("pinneddocuments"), function (h) {
    var k = h.target.result;
    if (k) {
      if (k.dataType != "pinneddocuments") throw Error("Lb");
      h = new So(false, a.ha);
      Ol(h, "pinnedDocs", k.pinnedDocs);
      k = k.imt;
      k != null && Ol(h, "imt", k);
      h.o = false;
    } else h = new So(true, a.ha);
    k = h;
    Cx(c, k);
    h = { dataType: "pinneddocuments" };
    h.pinnedDocs = To(k);
    k = Ll(k, "imt");
    k !== null && (h.imt = k);
    Vv(g, h);
    Z(f);
  });
}
function Cx(a, c) {
  var e = a.F,
    f = a.A,
    g = To(c);
  e.forEach(function (h) {
    if (h.j === Qo) {
      if (Ll(c, "imt") == null) {
        V(c, "imt", f);
        var k = c.B,
          l = Ko();
        l.v = null;
        l.A = null;
        if (Qo == null) throw ah().L;
        l.j = Qo;
        if (!l.j) throw ih().L;
        var p = l.o;
        h = l.v;
        var q = l.A;
        l = l.j;
        var r = new Ro();
        r.v = p;
        r.A = h;
        r.o = q;
        r.j = l;
        k.push(r);
      }
    } else if (
      ((k = h.X()),
      (p = g[k]),
      (q = (l = p == null ? void 0 : p.lrt) != null ? l : null),
      !h.o || !q || h.o == q)
    )
      switch (h.j) {
        case No:
          h = h.A;
          q = {};
          h = ((q.ip = true), (q.lrt = f), (q.initSource = h != null ? h : 0), q);
          p && p.ip && p.initSource != null && (h.initSource = p.initSource);
          g[k] = h;
          break;
        case Oo:
          p = {};
          p = ((p.ip = false), (p.lrt = f), p);
          g[k] = p;
          break;
        case Po:
          delete g[k];
      }
  });
  Ol(c, "pinnedDocs", g);
}
function Dx(a) {
  this.j = a;
}
Dx.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      e = Y(e, "ProfileData");
      a.o ? (Vv(e, a.j), Z()) : Wv(this.j, c, a.j, e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function Ex(a, c, e, f, g) {
  vo.call(this, e, new Xl(f), g);
  this.v = f;
  this.o = U(g, "docs-eiwot") || U(g, "docs-eiwotv2");
  this.j = U(g, "docs-eiwotdl") || this.o ? new Rw(f, "PendingQueue", g) : null;
}
F(Ex, vo);
Ex.prototype.ea = function () {
  return ["PendingQueueCommands", "PendingQueues"];
};
Ex.prototype.ba = function (a, c, e) {
  var f = this;
  if (a instanceof gn && !a.o) {
    var g = this.j != null ? new Qw(Date.now(), Tw(a.j)) : null;
    if (this.j != null)
      if (this.j.j == null) Fx(this, a, c);
      else if (this.o) {
        Gx(this, a, c, e, Sw(this.j));
        return;
      }
    Tv(Y(c, "PendingQueues").get(ln(a)), function (h) {
      h = h.target.result;
      if (!h) throw Error("sc");
      f.j != null && g != null && Xw(f.j, h, g);
      Gx(f, a, c, e, h);
    });
  } else Gx(this, a, c, e);
};
function Fx(a, c, e) {
  c = { pendingQueueCap_operationType: c.getType(), pendingQueueCap_trackedOperation: An(e.M) };
  a.v.info(Error("rc"), c);
}
function Gx(a, c, e, f, g) {
  if (g) {
    var h = c.j,
      k = h.revision,
      l = h.revisionAccessInfo;
    k != null && (g.r = k);
    l !== void 0 && (g.ra = l);
    k = h.selection;
    k != null && (g.s = k);
    k = h.accessLevel;
    k != null && (g.a = k);
    k = h.undeliverable;
    k !== void 0 && (g.u = !!k);
    k = h.unsavedChanges;
    k !== void 0 && (g.uc = !!k);
    l = h.sentBundlesSavedRevision;
    l !== void 0 && (g.sbsr = l);
    l = h.unsentBundleMetadata;
    l !== void 0 && (g.ubm = l);
    h = h.snapshotBundleIndex;
    h !== void 0 && (g.sbi = h);
    if (k) {
      h = a.v;
      try {
        K.localStorage.setItem("docs-ucb", "1");
      } catch (p) {
        h.info(Error("Ub`" + p.message));
      }
    }
  }
  switch (c.getType()) {
    case "pq-clear":
      g = g || Hx(c);
      c = ln(c);
      h = Y(e, "PendingQueueCommands");
      dw(h, [c], [c, []]);
      g.b = [];
      Ix(a, g, e, f);
      break;
    case "pq-clear-sent":
      g = g || Hx(c);
      h = g.b;
      h.length > 0 &&
        ((h = h[h.length - 1].l),
        (k = Y(e, "PendingQueueCommands")),
        (c = ln(c)),
        dw(k, [c], [c, h]),
        (g.b = []));
      Ix(a, g, e, f);
      break;
    case "pq-clear-sent-bundle":
      g = g || Hx(c);
      h = g.b.shift().l;
      k = Y(e, "PendingQueueCommands");
      c = ln(c);
      dw(k, [c], [c, h]);
      Ix(a, g, e, f);
      break;
    case "pq-mark-sent":
      g = g || Hx(c);
      h = c.A;
      c.F && (g.b = []);
      for (c = 0; c < h.length; c++) {
        k = h[c];
        l = {};
        l.l = k.j;
        l.s = k.sessionId;
        l.r = k.o;
        g.b.push(l);
      }
      Ix(a, g, e, f);
      break;
    case "update-record":
      Ix(a, g || Hx(c), e, f);
      break;
    case "pq-write-commands":
      a = c.B;
      g = {};
      g.pqcKey = [c.F, c.A];
      g.c = a;
      Vv(Y(e, "PendingQueueCommands"), g);
      Z(f);
      break;
    case "pq-delete-commands":
      e = Y(e, "PendingQueueCommands");
      a = c.B;
      dw(e, [a], [a, c.A]);
      Z(f);
      break;
    default:
      throw Error("tc`" + c.getType());
  }
}
function Ix(a, c, e, f) {
  a.j && Uw(a.j, c);
  Vv(Y(e, "PendingQueues"), c);
  Z(f);
}
function Hx(a) {
  var c = a.j;
  a = {};
  var e = c.accessLevel;
  e !== void 0 && (a.a = e);
  a.docId = c.docId;
  a.r = c.revision;
  a.ra = c.revisionAccessInfo;
  a.ubm = c.unsentBundleMetadata;
  a.s = c.selection;
  a.b = [];
  a.t = c.documentType;
  a.u = !!c.undeliverable;
  a.uc = !!c.unsavedChanges;
  e = c.sentBundlesSavedRevision;
  e != null && (a.sbsr = e);
  c = c.snapshotBundleIndex;
  c !== void 0 && (a.sbi = c);
  return a;
}
function Jx() {}
function Wv(a, c, e, f, g, h, k, l) {
  e ? Tv(f.get(c), Sa(a.j, a, f, e, h || [], g, k || null, l || null)) : Z(g);
}
Jx.prototype.j = function (a, c, e, f, g, h, k) {
  k = k.target.result;
  g != null && h != null && ((h.v = Date.now()), Xw(g, k, h));
  if (k !== void 0) {
    for (var l in c) {
      h = c[l];
      xb(e, l) >= 0 ? (k[l] = h != null ? h : null) : (k[l] = h);
    }
    Vv(a, k);
    Z(f);
    g != null && Vw(g, c, e);
  } else throw Error("uc");
};
function gx(a, c, e, f) {
  Kx(
    c,
    function (g) {
      for (var h = 0; h < e.length; h++) Ab(g, e[h]);
      h = {};
      h.dataType = c;
      h.documentIds = g;
      Vv(Y(a, "ProfileData"), h);
      Z(f);
    },
    a,
  );
}
function Kx(a, c, e) {
  Tv(Y(e, "ProfileData").get(a), function (f) {
    f = f.target.result;
    c(f && f.documentIds ? f.documentIds : []);
  });
}
function Lx(a, c, e, f, g) {
  up.call(this, g);
  this.j = a;
  this.v = e;
  this.o = f;
}
F(Lx, up);
function Mx(a, c, e) {
  if (a.j.H) qr(Ta(c, []));
  else if (xb(a.j.j.objectStoreNames, "Users") >= 0) {
    e = Sv(a.j, ["Users"], 71, e, false, void 0, void 0, void 0, 1337522, true);
    var f = [];
    Tv(Y(e, "Users").get(hw.lowerBound(-Infinity)), function (g) {
      if ((g = g.target.result)) {
        var h = new tp(g.id, false, a.ha);
        V(h, "emailAddress", g.emailAddress);
        V(h, "locale", g.locale);
        g.fastTrack != null && V(h, "fastTrack", g.fastTrack ? "true" : "");
        g.internal != null && V(h, "internal", g.internal ? "true" : "");
        g.optInReasons != null && V(h, "optInReasons", g.optInReasons);
        g.optInTime != null && V(h, "optInTime", g.optInTime);
        h.o = false;
        f = [h];
      }
    });
    Gw(e, function () {
      return c(f);
    });
  } else {
    a.o.log(Error("vc"));
    qr(Ta(c, []));
  }
}
Lx.prototype.ea = function (a) {
  if (!this.Z(a)) throw Error("nc`" + a.getType());
  return ["Users"];
};
Lx.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Y(c, "Users");
      a.o ? (c.add(a.j), Z(e)) : Wv(this.v, ln(a), a.j, c, e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function Nx(a, c, e, f, g, h, k, l, p, q) {
  q = q === void 0 ? false : q;
  Wo.call(this);
  var r = this;
  this.S = f;
  this.Ha = new wr(this);
  this.A = new Xv();
  this.v = h;
  this.o = new Jx();
  this.P = new dn();
  ok(this, this.P);
  this.j = a;
  en(this.P, this.j.o, function (x) {
    r.fa.dispatchEvent(new Vo(x.newVersion));
  });
  this.Ia = q || false;
  this.R = c;
  this.I = new Ex(this.j, this.A, this.R, this.S, h);
  Xo(this, this.I);
  this.K = Ox(this, this.R, k);
  Xo(this, this.K);
  this.W = new mx(e);
  this.N = new Lx(a, this.A, this.o, f, h);
  Xo(this, this.N);
  this.Ja = new Ow(a);
}
F(Nx, Wo);
Nx.prototype.pb = w("N");
function Ox(a, c, e) {
  e = e === void 0 ? new hx() : e;
  return e.j(a.j, a.A, a.o, c, a.S, a.v, a.Ia);
}
function oo(a, c, e, f, g, h, k) {
  k = k === void 0 ? false : k;
  if (a.j.H) qr(f);
  else {
    for (var l = {}, p = 0; p < c.length; p++) {
      var q = c[p];
      q = Px(a, q).ea(q);
      for (var r = 0; r < q.length; r++) l[q[r]] = true;
    }
    p = "Error writing records (" + An(e) + ")";
    q = [];
    r = 0;
    for (var x in l) q[r++] = x;
    l = U(a.v, "docs-eaiturd") || (U(a.v, "docs-eirdfi") && Db(q, ["Impressions"])) ? true : false;
    e = Sv(a.j, q, e, g, true, p, void 0, void 0, h, k, l);
    Gw(e, f);
    f = [];
    for (g = 0; g < c.length; g++) f.push(Aw(e.N));
    for (g = 0; g < c.length; g++) {
      h = c[g];
      Px(a, h).ba(h, e, f[g]);
    }
  }
}
function Px(a, c) {
  if (hn(c)) {
    c = c.B;
    a = c in a.B ? a.B[c] : null;
    if (!a) throw Error("wc`" + c);
    return a;
  }
  c = c.getType();
  if (
    c == "pq-clear" ||
    c == "pq-clear-sent" ||
    c == "pq-clear-sent-bundle" ||
    c == "pq-delete-commands" ||
    c == "pq-mark-sent" ||
    c == "pq-write-commands"
  )
    return a.I;
  if (c == "document-lock") return a.W;
  if (c == "append-commands" || c == "write-trix") return a.K;
  if (c == "update-application-metadata") {
    if ((a = a.Tb())) return a;
  } else if (c == "append-template-commands") {
    if ((a = a.td())) return a;
  } else if (c == "update-pinned-docs") return a.qd();
  throw Error("xc`" + c);
}
Nx.prototype.initialize = function (a, c) {
  var e = this,
    f = this.ob();
  if (Lw(this.j) >= f) throw Error("yc");
  Mw(
    this.j,
    f,
    function (g) {
      return Qx(e, c, g);
    },
    gw("Error initializing the database.", c),
    a,
  );
};
function Qx(a, c, e) {
  try {
    a.nb(e);
  } catch (f) {
    qr(function () {
      return c(new zn(1, "Failed to initialize database.", f));
    });
  }
}
function Rx(a, c, e) {
  Mw(
    a.j,
    a.ob(),
    function (f) {
      return Sx(a, e, f);
    },
    gw("Error upgrading the database.", e),
    c,
  );
}
function Sx(a, c, e) {
  try {
    a.zc(e);
  } catch (f) {
    qr(function () {
      return c(new zn(1, "Failed to upgrade database.", f));
    });
  }
}
Nx.prototype.O = function () {
  hl(this.Ha, this.W, this.I, this.K, this.N, this.Ja);
  Wo.prototype.O.call(this);
};
function Tx(a, c, e, f) {
  W.call(this);
  this.j = a;
  this.v = f;
  this.o = e;
}
F(Tx, ep);
function gp(a, c, e) {
  var f = Sv(a.j, ["ProfileData"], 63, e),
    g = [];
  Tv(Yv(Y(f, "ProfileData"), ["synchints"], ["synchints", []]), function (h) {
    (h = h.target.result) ? (g.push(Ux(a, h.value)), h.continue()) : (Uv(f), c(g));
  });
}
Tx.prototype.ea = function () {
  return ["ProfileData"];
};
Tx.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Y(c, "ProfileData");
      a.o ? (Vv(c, a.j), Z(e)) : Wv(this.o, ln(a), a.j, c, e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function Ux(a, c) {
  var e = c.sourceApp;
  if (!Db(c.dataType, ["synchints", "" + e])) throw Error("Lb");
  var f = c.docIds,
    g = c.lastUpdatedTimestamp;
  c = c.docIdentifiers;
  a = new ap(false, e, a.v);
  c && c.length > 0
    ? bp(
        a,
        c.map(function (h) {
          return $o(h);
        }),
      )
    : f && f.length > 0 && cp(a, f);
  V(a, "lastUpdatedTimestamp", g);
  a.o = false;
  return a;
}
function Vx() {
  W.call(this);
}
F(Vx, hp);
Vx.prototype.ea = function () {
  return ["SyncObjects"];
};
Vx.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Y(c, "SyncObjects");
      if (a.o) Vv(c, a.j);
      else throw Error("zc");
      Z(e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function Wx(a, c, e) {
  np.call(this, e);
  this.j = a;
  this.o = c;
}
F(Wx, np);
function qp(a, c, e) {
  var f = Sv(a.j, ["ProfileData"], 32, e);
  Tv(Y(f, "ProfileData").get("syncstats"), function (g) {
    Uv(f);
    (g = g.target.result) ? c(Xx(a, g)) : c(null);
  });
}
function Xx(a, c) {
  if (c.dataType != "syncstats") throw Error("Lb");
  a = new ip(
    false,
    a.ha,
    Sp(function () {
      return Date.now();
    }),
  );
  var e = c.docsToDelete;
  e != null && V(a, "docsToDelete", e);
  e = c.enabledMimeTypes;
  e != null && V(a, "enabledMimeTypes", e);
  e = c.lastLocalStoreProfileTimestamp;
  e != null && V(a, "lastLocalStoreProfileTimestamp", e);
  e = c.lastSyncTimestamp;
  e != null && V(a, "lastSyncTimestamp", e);
  e = c.syncStartTimestamp;
  e != null && V(a, "syncStartTimestamp", e);
  e = c.syncVersion;
  e != null && V(a, "syncVersion", e);
  e = c.failedToSyncDocs;
  if (e != null)
    for (var f in e) {
      var g = e[f],
        h = g.lastSyncErrorType;
      lp(
        a,
        f,
        g.count,
        g.modelSyncFailCount || 0,
        g.serverTime,
        h != null ? Eh(h) : null,
        g.nextSyncTimestampMillis || Date.now(),
        g.backoffRetryConsecutiveFailCount || 0,
      );
    }
  f = c.lastDailyRunTime;
  f != null && V(a, "lastDailyRunTime", f);
  f = c.maxSpaceQuota;
  f != null && V(a, "maxSpaceQuota", f);
  f = c.webfontsSyncVersion;
  f != null && V(a, "webfontsSyncVersion", f);
  f = c.lastStartedSyncDocs;
  if (f != null) for (e = 0; e < f.length; e++) jp(a, f[e].documentId, f[e].timestamp);
  f = c.relevantDocuments;
  f != null && V(a, "relevantDocuments", f);
  c = c.backgroundSyncDenylist;
  if (c != null)
    for (var k in c) {
      f = c[k];
      f = Ln(
        Kn(
          Jn(
            In(
              Hn(Gn(Fn(k), f.retryCount || 0), f.nextSyncTimestampMillis || Date.now()),
              f.firstFailTimestampMillis,
            ),
            f.lastFailTimestampMillis,
          ),
          f.documentDiskSize,
        ),
      );
      kp(a, f);
    }
  a.o = false;
  return a;
}
Wx.prototype.ea = function () {
  return ["ProfileData"];
};
Wx.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Y(c, "ProfileData");
      a.o ? (Vv(c, a.j), Z(e)) : Wv(this.o, "syncstats", a.j, c, e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function Yx() {
  W.call(this);
}
F(Yx, vp);
Yx.prototype.ea = function () {
  return ["FontMetadata"];
};
Yx.prototype.ba = function (a, c, e) {
  c = Y(c, "FontMetadata");
  switch (a.getType()) {
    case "update-record":
      if (a.o) {
        Vv(c, a.j);
        Z(e);
      } else throw Error("Ac");
      break;
    case "delete-record":
      dw(c, ln(a));
      Z(e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function Zx(a, c, e, f, g, h, k, l, p, q) {
  Nx.call(this, a, c, e, f, g, h, k, l, p, q === void 0 ? false : q);
  a = this.j;
  e = this.A;
  this.T = new kx(a, e, this.o, this.v);
  Xo(this, this.T);
  this.wa = new Yx(a, e, this.v);
  Xo(this, this.wa);
  this.oa = new Vx(a, e, this.v);
  Xo(this, this.oa);
  this.La = new zx(a);
  this.Ma = new $w(a, this.o, h);
  this.M = new Wx(a, this.o, this.v);
  Xo(this, this.M);
  this.C = new Qv(a, this.o, this.v);
  Xo(this, this.C);
  this.ja = new Tx(a, e, this.o, h);
  Xo(this, this.ja);
  this.J = new Ax(new Dx(this.o), h);
  Xo(this, this.J);
  this.U = new Pw(this.j, this.A, this.o, this.v);
  Xo(this, this.U);
  this.H = new ix(a, e, c, this.o, this.v);
  Xo(this, this.H);
  this.ia = new yx(a, e, h);
  Xo(this, this.ia);
}
F(Zx, Nx);
D = Zx.prototype;
D.ob = A(6);
D.Tb = w("H");
D.sd = w("M");
D.Sb = w("C");
D.rd = w("ja");
D.qd = w("J");
D.sc = A(false);
D.zc = u();
D.nb = function (a) {
  a = a.db;
  a.createObjectStore("FontMetadata", { keyPath: "fontFamily" });
  a.createObjectStore("DocumentEntities", { keyPath: "deKey" });
  a.createObjectStore("SyncObjects", { keyPath: "keyPath" });
  a.createObjectStore("ProfileData", { keyPath: "dataType" });
  a.createObjectStore("ApplicationMetadata", { keyPath: "dt" });
  a.createObjectStore("NewDocumentIds", { keyPath: "dtKey" });
  a.createObjectStore("Comments", { keyPath: "cmtKey" }).createIndex("StateIndex", "stateIndex");
  a.createObjectStore("Users", { keyPath: "id" });
  a.createObjectStore("Documents", { keyPath: "id" });
  a.createObjectStore("DocumentCommands", { keyPath: "dcKey" });
  a.createObjectStore("DocumentCommandsStaging", { keyPath: "dcKey" });
  a.createObjectStore("DocumentCommandsMetadata", { keyPath: "dcmKey" });
  a.createObjectStore("DocumentCommandsMetadataStaging", { keyPath: "dcmKey" });
  a.createObjectStore("DocumentLocks", { keyPath: "dlKey" });
  a.createObjectStore("Impressions", { keyPath: "iKey" });
  a.createObjectStore("PendingQueues", { keyPath: "docId" });
  a.createObjectStore("PendingQueueCommands", { keyPath: "pqcKey" });
  a.createObjectStore("FileEntities", { keyPath: "id" }).createIndex(
    "DocIdEntityTypeIndex",
    "docIdEntityTypeIndex",
  );
};
D.O = function () {
  hl(this.T, this.wa, this.oa, this.La, this.Ma, this.M, this.C, this.U, this.H, this.ia, this.J);
  Nx.prototype.O.call(this);
};
"ApplicationMetadata Comments DocumentCommandsMetadataStaging DocumentCommandsMetadata DocumentCommandsStaging DocumentCommands DocumentEntities DocumentLocks Documents FileEntities FontMetadata Impressions NewDocumentIds PendingQueueCommands PendingQueues ProfileData SyncObjects Users"
  .split(" ")
  .sort(function (a, c) {
    return a > c ? 1 : a < c ? -1 : 0;
  });
function $x(a, c, e) {
  W.call(this);
  this.j = e;
}
F($x, qo);
$x.prototype.ea = function () {
  return ["BlobMetadata"];
};
$x.prototype.ba = function (a, c, e) {
  c = Y(c, "BlobMetadata");
  switch (a.getType()) {
    case "update-record":
      a.o ? (c.add(a.j), Z(e)) : Wv(this.j, ln(a), a.j, c, e);
      break;
    case "delete-record":
      dw(c, ln(a));
      Z(e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function ay(a, c, e, f, g, h, k) {
  ax.call(this, a, c, e, f, g, h, k === void 0 ? false : k);
}
F(ay, ax);
ay.prototype.ea = function (a) {
  var c = ax.prototype.ea.call(this, a);
  a.getType() == "delete-record" && c.push("BlobMetadata");
  return c;
};
ay.prototype.o = function (a, c, e) {
  var f = Aw(c.N);
  ax.prototype.o.call(this, a, c, e);
  a = ln(a);
  dw(Y(c, "BlobMetadata"), [a], [a, []]);
  Z(f);
};
function by() {}
F(by, hx);
by.prototype.j = function (a, c, e, f, g, h, k) {
  return new ay(a, c, e, f, g, h, k === void 0 ? false : k);
};
function cy(a, c, e, f, g, h, k, l, p, q) {
  k = k === void 0 ? new by() : k;
  Zx.call(this, a, c, e, f, g, h, k, l, p, q === void 0 ? false : q);
  this.Na = new $x(this.j, this.A, this.o, h);
  Xo(this, this.Na);
}
F(cy, Zx);
cy.prototype.ob = A(7);
cy.prototype.sc = A(true);
cy.prototype.nb = function (a) {
  Zx.prototype.nb.call(this, a);
  dy(a);
};
cy.prototype.zc = function (a) {
  dy(a);
};
function dy(a) {
  a.db.createObjectStore("BlobMetadata", { keyPath: ["d", "p"] });
}
function ey(a, c, e, f) {
  rp.call(this, a, c);
  new mn(c, f);
}
F(ey, rp);
ey.prototype.ba = function (a, c, e) {
  switch (a.getType()) {
    case "append-template-commands":
      c = Y(c, "TemplateCommands");
      a.A && dw(c, [a.B], [a.B, []]);
      a = a.F;
      for (c = 0; c < a.length; ++c) throw Error("Ob`" + typeof a[c]);
      Z(e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function fy(a, c, e, f) {
  sp.call(this, e, f);
  this.j = new Jx();
}
F(fy, sp);
fy.prototype.ea = function () {
  return ["TemplateCommands", "TemplateCreationMetadata", "TemplateMetadata"];
};
fy.prototype.ba = function (a, c, e) {
  var f = a.B;
  switch (f) {
    case "templateMetadata":
      f = "TemplateMetadata";
      break;
    case "templateCreationMetadata":
      f = "TemplateCreationMetadata";
      break;
    default:
      throw Error("Bc`" + f);
  }
  f = Y(c, f);
  switch (a.getType()) {
    case "update-record":
      a.o ? (Vv(f, a.j), Z(e)) : Wv(this.j, ln(a), a.j, f, e);
      break;
    case "delete-record":
      dw(f, ln(a));
      Z(e);
      break;
    case "append-template-commands":
      this.Da(a.za()).ba(a, c, e);
      break;
    default:
      throw Error("Mb`" + a.getType());
  }
};
function gy(a, c, e, f, g, h, k, l, p, q, r) {
  cy.call(this, a, c, f, g, h, l, void 0, p, q, r === void 0 ? false : r);
  a = ["kix", "punch", "ritz"];
  c = this.j;
  if (!e) for (e = {}, f = new Mp(), g = 0; g < a.length; g++) e[a[g]] = new ey(a[g], f, c, k);
  this.pa = new fy(c, this.A, e, l);
  Xo(this, this.pa);
}
F(gy, cy);
D = gy.prototype;
D.ob = A(8);
D.td = w("pa");
D.sc = A(true);
D.nb = function (a) {
  cy.prototype.nb.call(this, a);
  hy(a);
};
D.zc = function (a) {
  var c = a.db;
  xb(c.objectStoreNames, "DocumentCommandsStaging") >= 0 &&
    c.deleteObjectStore("DocumentCommandsStaging");
  xb(c.objectStoreNames, "DocumentCommandsMetadata") >= 0 &&
    c.deleteObjectStore("DocumentCommandsMetadata");
  xb(c.objectStoreNames, "DocumentCommandsMetadataStaging") >= 0 &&
    c.deleteObjectStore("DocumentCommandsMetadataStaging");
  hy(a);
};
function hy(a) {
  a = a.db;
  a.createObjectStore("TemplateMetadata", { keyPath: ["id"] });
  a.createObjectStore("TemplateCreationMetadata", { keyPath: ["id"] });
  a.createObjectStore("TemplateCommands", { keyPath: "dcKey" });
}
function iy(a) {
  var c = window.isSecureContext == void 0 ? true : window.isSecureContext;
  return (
    (Kb || (Lb && U(a, "docs-offline-edose"))) &&
    !(!K.indexedDB && !K.webkitIndexedDB) &&
    (!!K.BroadcastChannel || !!K.SharedWorker) &&
    c
  );
}
function jy(a, c, e, f, g, h, k, l, p, q, r, x, y, z, B, G, C) {
  z = z === void 0 ? false : z;
  B = B === void 0 ? null : B;
  C = C === void 0 ? false : C;
  T.call(this);
  this.B = a;
  this.oa = c;
  this.aa = e;
  this.S = f;
  this.fa = l;
  this.T = g;
  this.I = p;
  this.U = h;
  this.ja = z;
  this.j = B;
  this.o = {};
  this.v = {};
  this.D = -1;
  this.C = new qk();
  this.R = false;
  this.J = k;
  this.pa = r;
  this.P = x;
  this.N = y;
  this.W = G;
  this.A = q;
  this.H = C || false;
}
F(jy, T);
function ky(a, c) {
  var e = c.ob();
  a.D = Math.max(a.D, e);
  a.o[e] = c;
}
jy.prototype.create = function (a, c) {
  var e = this;
  if (this.R) throw Error("Cc");
  this.R = true;
  if (isNaN(this.T)) throw Error("Dc");
  if (this.j) ly(this, this.j);
  else {
    if (!iy(this.A)) throw Error("Ec");
    Nw(
      function (f) {
        return ly(e, f);
      },
      a,
      this.B,
      function (f) {
        Lk(f.L, { databaseOpenFailure: "true" });
        uk(e.C, f);
        my(e, "Unable to open Docs IDB instance.", Bn(f));
      },
      this.ja,
      this.fa,
      this.I,
      this.A,
      c || void 0,
    );
  }
  return this.C;
};
function ly(a, c) {
  a.j = c;
  if (a.S)
    for (var e = a.S(c, a.I), f = 0; f < e.length; f++)
      for (var g, h = a, k = e[f], l = k.Sd, p = k.za(), q = k.ze; q <= l; ++q) {
        (g = h.v[q]) || (g = h.v[q] = {});
        g[p] = k;
      }
  e = new rx(a.oa, a.aa, c, a.B, a.A, void 0, a.W);
  a.D == -1 &&
    (ky(a, new Zx(c, a.v[6] || {}, e, a.B, a.J, a.A, void 0, a.P, a.N, a.H)),
    ky(a, new cy(c, a.v[7] || {}, e, a.B, a.J, a.A, a.pa, a.P, a.N, a.H)),
    ky(a, new gy(c, a.v[8] || {}, null, e, a.B, a.J, a.I, a.A, a.P, a.N, a.H)));
  ny(a);
}
function ny(a) {
  var c = Math.min(a.T, a.D),
    e = oy(a);
  !a.U && e <= 0
    ? py(
        a,
        new zn(4, "Schema initialization cannot be performed when schema updates are prevented."),
      )
    : !a.U || e >= c
      ? a.M()
      : qy(a, e, c)
        ? ry(a, e + 1, c, Sa(a.M, a, null), function (f) {
            uk(a.C, f);
            my(a, "Unable to upgrade the Docs IDB database.", Bn(f));
          })
        : a.o[c].initialize(
            function () {
              return a.M();
            },
            function (f) {
              return py(a, f);
            },
          );
}
function py(a, c) {
  uk(a.C, c);
  my(a, "Unable to initialize the storage adapter.", Bn(c));
}
function qy(a, c, e) {
  for (c += 1; c <= e; ++c) if (a.o[c] == null || !a.o[c].sc()) return false;
  return true;
}
function ry(a, c, e, f, g) {
  Rx(a.o[c], Sa(a.ia, a, c, e, f, g), g);
}
jy.prototype.ia = function (a, c, e, f) {
  a = oy(this);
  a == c ? e() : ry(this, a + 1, c, e, f);
};
jy.prototype.M = function () {
  var a = oy(this);
  if ((a = this.o[a])) {
    a = new ko(a, U(this.A, "docs-eiwot") || U(this.A, "docs-eiwotv2"));
    this.j && ok(a, this.j);
    for (var c in this.o) ok(a, this.o[c]);
    for (var e in this.v) {
      c = this.v[e];
      for (var f in c) ok(a, c[f]);
    }
    sk(this.C, a);
  } else {
    this.B.info(Error("Fc`" + (this.j ? Lw(this.j) : -1)));
    sk(this.C, null);
  }
};
function oy(a) {
  var c = a.j ? Lw(a.j) : -1;
  c > 1 && c < 6 && a.B.info(Error("Gc`" + c));
  return c < 6 ? -1 : c;
}
function my(a, c, e) {
  for (var f in a.o) a.o[f].dispose();
  for (var g in a.v) {
    f = a.v[g];
    for (var h in f) f[h].dispose();
  }
  a.j && ((g = a.j), (g.D = c), e && (g.N.docsDBDisposeContext_LocalStoreErrorMessage = e));
  gl(a.j);
}
function sy(a, c) {
  c = c === void 0 ? false : c;
  Ya.call(this, a);
  this.A = c;
}
F(sy, Ya);
function ty(a, c) {
  this.j = a;
  this.o = c;
}
function uy(a, c, e, f, g, h, k, l) {
  T.call(this);
  this.B = a;
  this.C = c;
  this.o = e;
  this.I = f;
  this.J = h ? h : "DefaultLocalStoreSessionId";
  this.M = k || new Mp();
  this.D = g;
  this.H = !!l;
  this.v = null;
  this.A = new dn();
  il(this, this.A);
  this.j = vy(this);
}
F(uy, T);
function vy(a) {
  a.j && gl(a.j);
  var c = Gl(a.o, "lssv");
  return new jy(a.B, a.J, 0, a.be.bind(a), c, true, new px(), a.I, a.D, a.o);
}
function wy(a) {
  if (a.v) return a.v;
  a.v = xy(a);
  return a.v.Sa(function (c) {
    a.Hb();
    throw c;
  });
}
function Iv(a) {
  return wy(a).then(function (c) {
    return new Yi(function (e, f) {
      Mx(c.pb(), e, f);
    }).then(function (e) {
      return yy(a, e) ? new ty(c, e[0]) : null;
    });
  });
}
function zy(a) {
  return wy(a).then(function (c) {
    return new Yi(function (e, f) {
      Mx(c.pb(), e, f);
    }).then(function (e) {
      if (!yy(a, e)) {
        var f = {
          usersLength: e.length,
          allowNonOfflineEnabledUser: a.H,
          storedUserMatchesFlag:
            e.length == 0 ? "no users" : e[0].X() == Hl(a.o, "docs-offline-lsuid"),
        };
        return cj()
          .then(function () {
            return Eu(a.o, f, a.B);
          })
          .then(function () {
            return new Yi(function (g, h) {
              jx(c.j.Tb(), g, h);
            });
          })
          .Sa(function (g) {
            var h = a.B,
              k = h.info;
            if (ch(g)) g = g.L;
            else if (!(g instanceof Error)) throw fh("ga").L;
            k.call(h, g);
          })
          .then(function (g) {
            f.applicationMetadataLength = g ? g.length : null;
            throw Lk(
              new sy("Failed to read LocalStore due to invalid user", !g || g.length == 0),
              f,
            );
          });
      }
      return new ty(c, e[0]);
    });
  });
}
function yy(a, c) {
  return c.length == 1 && (a.H || c[0].X() == Hl(a.o, "docs-offline-lsuid"));
}
D = uy.prototype;
D.get = function () {
  return zy(this).then(function (a) {
    return a.j;
  });
};
function xy(a) {
  return new Yi(function (c, e) {
    Mj(a.j.create(a.Hb.bind(a)), c, e);
  }).then(a.pe.bind(a));
}
D.pe = function (a) {
  var c = this;
  if (!a) throw Error("Hc");
  if (this.C) {
    var e = new Pv(a, this.C);
    il(this, e);
  }
  lo(a);
  en(this.A, a.j.j.B, function () {
    c.Hb();
  });
  en(this.A, a.j.fa, function () {
    c.Hb();
  });
  return a;
};
D.Hb = function () {
  gl(this.j);
  this.j = vy(this);
  this.v = null;
};
D.be = function (a) {
  var c = this.M,
    e = this.D,
    f = new iw("kix", 6, 8, c, a, e),
    g = new iw("punch", 6, 8, c, a, e),
    h = new iw("ritz", 6, 8, c, a, e);
  a = new iw("drawing", 6, 8, c, a, e);
  return [h, f, g, a];
};
D.O = function () {
  gl(this.j);
  T.prototype.O.call(this);
};
typeof Blob === "function" && Blob.prototype.hasOwnProperty("size");
new (function () {
  this.j = {};
  this.j["X-Same-Domain"] = "1";
})();
function Ay(a, c) {
  Ya.call(this, c);
  this.B = a;
}
F(Ay, Ya);
function By(a) {
  Ya.call(this, "Binary not cached.");
  this.o = this.j = null;
  var c = a.indexOf("#");
  a = Cy(c < 0 ? a : a.slice(0, c));
  c = {};
  Lk(
    this,
    ((c.serviceworker_fetchEvent_failReason = "binary_not_cached"),
    (c.serviceworker_fetchUrl = a),
    c),
  );
}
F(By, Ya);
function Dy(a, c) {
  var e = c && c.o ? Ll(c.o, "optInTime") : void 0,
    f = e ? Date.now() - e : void 0;
  a.o = e;
  e = {};
  Lk(
    a,
    ((e.serviceworker_hasOfflineEnabledUser = String(!!c)),
    (e.serviceworker_timeSinceOptInMs = f),
    e),
  );
}
function Ey(a, c) {
  var e = c
      .filter(function (h) {
        return h.na();
      })
      .map(function (h) {
        return h.xa;
      })
      .sort()
      .join(","),
    f = c
      .filter(function (h) {
        return !h.na();
      })
      .map(function (h) {
        return h.xa;
      })
      .sort()
      .join(","),
    g = {};
  Lk(
    a,
    ((g.serviceworker_completeCacheNames = e),
    (g.serviceworker_incompleteCacheNames = f),
    (g.serviceworker_managedCacheInfosLength = c.length),
    g),
  );
}
function Fy(a, c, e) {
  var f;
  e = e == null ? void 0 : (f = e.j) == null ? void 0 : f.j.Sb();
  return e
    ? Gy(c, e).then(function (g) {
        var h = Date.now(),
          k = g.lastAttemptStartTimestamp,
          l = g.lastAttemptEndTimestamp,
          p = g.lastSuccessTimestamp,
          q = g.consecutiveFailureCount,
          r = g.lastSeenCacheState;
        g = r == null ? void 0 : r.completeCacheNames;
        r = r == null ? void 0 : r.incompleteCacheNames;
        var x = l ? h - l : void 0;
        h = p ? h - p : void 0;
        k = l && l > k;
        p = !!p;
        a.j = p;
        l = {};
        return Lk(
          a,
          ((l.serviceworker_lastAttemptFinished = k),
          (l.serviceworker_timeSinceLastAttemptMs = x),
          (l.serviceworker_timeSinceLastSuccessMs = h),
          (l.serviceworker_consecutiveFailureCount = q),
          (l.serviceworker_hadSuccessfulCacheUpdate = p),
          (l.serviceworker_lastSeenCompleteCacheNames = g),
          (l.serviceworker_lastSeenIncompleteCacheNames = r),
          l),
        );
      })
    : ((c = {}),
      Lk(a, ((c.serviceworker_cacheUpdateStatsUnavailable = "true"), c)),
      Promise.resolve(a));
}
function Hy(a, c) {
  var e = {};
  Lk(a, ((e.storageAvailable = c.j), (e.storageUsage = Cu(c)), e));
}
function Gy(a, c) {
  return new Promise(function (e) {
    Rv(c, e);
  }).then(function (e) {
    return e ? Tn(e, a) : {};
  });
}
function Cy(a) {
  var c = a;
  $k(a, 0, "ouid", a.search(al)) >= 0 && bl(a, "ouid") && (c = Zk(dl(c, "ouid"), "ouid", "{OUID}"));
  $k(a, 0, "key", a.search(al)) >= 0 && bl(a, "key") && (c = Zk(dl(c, "key"), "key", "REDACTED"));
  return c;
}
function Iy(a) {
  return (a = a.exec(kb())) ? a[1] : "";
}
var cb = (function () {
  if (Gb) return Iy(/Firefox\/([0-9.]+)/);
  if (Kb) {
    if (wb() || (ib && lb && lb.platform ? lb.platform === "macOS" : ob("Macintosh"))) {
      var a = Iy(/CriOS\/([0-9.]+)/);
      if (a) return a;
    }
    return Iy(/Chrome\/([0-9.]+)/);
  }
  if (Lb && !wb()) return Iy(/Version\/([0-9.]+)/);
  if (Hb || Ib) {
    if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(kb()))) return a[1] + "." + a[2];
  } else if (Jb) return (a = Iy(/Android\s+([0-9.]+)/)) ? a : Iy(/Version\/([0-9.]+)/);
  return "";
})();
function Jy() {
  var a = this;
  this.promise = new Promise(function (c, e) {
    a.resolve = c;
    a.reject = e;
  });
}
function Ky(a) {
  this.v = window.crashReport;
  this.B = a;
  this.A = new Jy();
  this.j = 0;
  this.o = new Map();
}
Ky.prototype.initialize = function (a) {
  a = a === void 0 ? 10240 : a;
  var c = this,
    e,
    f,
    g,
    h,
    k,
    l,
    p,
    q,
    r,
    x,
    y,
    z;
  return Ba(function (B) {
    switch (B.j) {
      case 1:
        if (c.j !== 0) return B.return(c.A.promise);
        c.j = 1;
        B.N(2, 3);
        return B.B(c.v.initialize(a), 5);
      case 5:
        c.A.resolve();
        c.j = 2;
        e = I(c.o);
        f = e.next();
        try {
          for (; !f.done; f = e.next()) {
            h = f.value;
            k = I(h);
            l = k.next().value;
            p = k.next().value;
            q = l;
            r = p;
            x = void 0;
            c.set(q, (x = r) != null ? x : "");
          }
        } finally {
          f && !f.done && (g = e.return) && g.call(e);
        }
      case 3:
        B.I();
        c.o.clear();
        B.M(4);
        break;
      case 2:
        y = B.H();
        c.j = 3;
        z = Error("Ic", { cause: y });
        z.reportSeverity = "warning";
        c.A.reject(z);
        B.Ba(3);
        break;
      case 4:
        return B.return(c.A.promise);
    }
  });
};
Ky.prototype.Jd = function () {
  return this.j !== 0;
};
Ky.prototype.set = function (a, c) {
  if (this.j !== 3)
    if (this.j !== 2)
      this.o.size < 100 || this.o.has(a) ? this.o.set(a, c) : this.o.set("cache_full", "true");
    else
      try {
        this.v.set(a, c);
      } catch (e) {
        this.B.Fb("Failed to set key " + a, e instanceof Error ? e : Error(String(e)));
      }
};
Ky.prototype.delete = function (a) {
  if (this.j !== 3)
    if (this.j !== 2) this.o.delete(a);
    else
      try {
        typeof this.v.delete === "function" ? this.v.delete(a) : this.v.remove(a);
      } catch (c) {
        this.B.Fb("Failed to delete key " + a, c instanceof Error ? c : Error(String(c)));
      }
};
function Ly() {
  this.j = false;
}
Ly.prototype.initialize = function () {
  this.j = true;
  return Promise.resolve();
};
Ly.prototype.Jd = w("j");
Ly.prototype.set = u();
Ly.prototype.delete = u();
function My() {}
My.prototype.Fb = u();
var Ny = new Ly();
var Oy = ["SEVERE", "FATAL"];
function Py() {
  this.o = this.v = 1;
  this.j = new Rr();
}
Py.prototype.Nd = function (a, c) {
  var e = c == null ? void 0 : c.Bc.get("apps_telemetry.outgoing_severity");
  a = e != null ? e : a.v;
  if ((a = this.v === 1 && !!a && Oy.includes(a.toUpperCase()))) this.v = 2;
  c = c == null ? void 0 : c.Bc.get("apps_telemetry.incoming_severity");
  if ((e = this.o === 1 && !!c && !!e && c.toUpperCase() !== e.toUpperCase())) this.o = 2;
  if (a || e) {
    e = $e(this.j, Xr, 3);
    c = new Wr();
    c = wf(c, 1, this.v);
    c = wf(c, 2, this.o);
    N(e, Wr, 5, c);
    Qy(this);
  }
};
Py.prototype.ya = function (a) {
  a: {
    var c = $e(this.j, Tr, 1);
    var e = Vr;
    Ce(c);
    if (void 0 === Sc) {
      if (We(c, e, 4) !== 4) {
        c = void 0;
        break a;
      }
    } else Ue(c.G, void 0, e, 4);
    c = $e(c, Sr, 4);
  }
  c.ya(a);
  Qy(this);
};
function Qy(a) {
  Ny.set("appsTelemetryCrashReportData", bg(a.j));
}
function wu(a) {
  a = a === void 0 ? {} : a;
  if (!Ny.Jd()) {
    var c = void 0;
    c = c === void 0 ? new My() : c;
    try {
      var e = kt(wi);
    } catch (f) {
      e = false;
    }
    Ny = e && window.crashReport ? new Ky(c) : new Ly();
    Ny.initialize();
  }
  return lt(a, new Py());
}
function Ry(a, c) {
  this.v = a;
  this.F = c;
  this.o = false;
  this.A = function () {
    return Date.now();
  };
  this.B = this.A();
}
Ry.prototype.setInterval = function (a) {
  this.v = a;
  this.j && this.o ? (this.stop(), this.start()) : this.j && this.stop();
};
Ry.prototype.start = function () {
  var a = this;
  this.o = true;
  this.j ||
    ((this.j = setTimeout(function () {
      Sy(a);
    }, this.v)),
    (this.B = this.A()));
};
Ry.prototype.stop = function () {
  this.o = false;
  this.j && (clearTimeout(this.j), (this.j = void 0));
};
function Sy(a) {
  if (a.o) {
    var c = Math.max(a.A() - a.B, 0);
    c < a.v * 0.8
      ? (a.j = setTimeout(function () {
          Sy(a);
        }, a.v - c))
      : (a.j && (clearTimeout(a.j), (a.j = void 0)), a.F(), a.o && (a.stop(), a.start()));
  } else a.j = void 0;
}
function Ty(a) {
  this.G = M(a);
}
F(Ty, Q);
Ty.prototype.Ec = function () {
  return pf(this, 1);
};
function Uy(a) {
  this.G = M(a);
}
F(Uy, Q);
function Vy(a) {
  this.G = M(a);
}
F(Vy, Q);
function Wy(a) {
  ff(Xy, Uy, 1, a);
}
var Yy = Bg(Vy);
function Zy(a) {
  this.G = M(a);
}
F(Zy, Q);
Zy.prototype.Xa = function () {
  return of(this, 7);
};
var $y = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"],
  Xy = new Vy(),
  az = null;
function bz(a, c) {
  c = c === void 0 ? $y : c;
  if (!az) {
    var e;
    a = (e = a.navigator) == null ? void 0 : e.userAgentData;
    if (
      !a ||
      typeof a.getHighEntropyValues !== "function" ||
      (a.brands && typeof a.brands.map !== "function")
    )
      return Promise.reject(Error("Jc"));
    Wy(
      (a.brands || []).map(function (g) {
        var h = new Uy();
        h = vf(h, 1, g.brand);
        return vf(h, 2, g.version);
      }),
    );
    typeof a.mobile === "boolean" && sf(Xy, 2, a.mobile);
    az = a.getHighEntropyValues(c);
  }
  var f = new Set(c);
  return az
    .then(function (g) {
      var h = Xy.clone();
      f.has("platform") && vf(h, 3, g.platform);
      f.has("platformVersion") && vf(h, 4, g.platformVersion);
      f.has("architecture") && vf(h, 5, g.architecture);
      f.has("model") && vf(h, 6, g.model);
      f.has("uaFullVersion") && vf(h, 7, g.uaFullVersion);
      return bg(h);
    })
    .catch(function () {
      return bg(Xy);
    });
}
function cz(a) {
  this.G = M(a);
}
F(cz, Q);
function dz(a) {
  return wf(a, 1, 1);
}
function ez(a) {
  this.G = M(a, 19);
}
F(ez, Q);
ez.prototype.tb = function (a) {
  return wf(this, 2, a);
};
function fz(a, c) {
  this.Ea = c = c === void 0 ? false : c;
  this.o = this.locale = null;
  this.A = 0;
  this.v = false;
  this.j = new ez();
  Number.isInteger(a) && this.j.tb(a);
  c || (this.locale = document.documentElement.getAttribute("lang"));
  gz(this, new cz());
}
fz.prototype.tb = function (a) {
  this.j.tb(a);
  return this;
};
function gz(a, c) {
  N(a.j, cz, 1, c);
  pf(c, 1) || dz(c);
  a.Ea || ((c = hz(a)), of(c, 5) || vf(c, 5, a.locale));
  a.o && ((c = hz(a)), cf(c, Vy, 9) || N(c, Vy, 9, a.o));
}
function iz(a, c) {
  a.A = c;
}
fz.prototype.Xa = function () {
  var a = hz(this);
  return Qd(Ge(a, 7, void 0, void 0));
};
function jz(a) {
  var c = c === void 0 ? $y : c;
  var e = a.Ea ? void 0 : window;
  e
    ? bz(e, c)
        .then(function (f) {
          a.o = Yy(f != null ? f : "[]");
          f = hz(a);
          N(f, Vy, 9, a.o);
          return true;
        })
        .catch(A(false))
    : Promise.resolve(false);
}
function hz(a) {
  var c = cf(a.j, cz, 1);
  c || ((c = new cz()), gz(a, c));
  a = c;
  c = cf(a, Zy, 11);
  c || ((c = new Zy()), N(a, Zy, 11, c));
  return c;
}
function kz(a, c, e, f, g, h, k) {
  e = e === void 0 ? 0 : e;
  f = f === void 0 ? 0 : f;
  g = g === void 0 ? null : g;
  h = h === void 0 ? 0 : h;
  k = k === void 0 ? 0 : k;
  if (!a.Ea) {
    var l = hz(a);
    var p = new Ty();
    p = wf(p, 1, a.A);
    p = sf(p, 2, a.v);
    f = tf(p, 3, f > 0 ? f : void 0);
    f = tf(f, 4, h > 0 ? h : void 0);
    f = tf(f, 5, k > 0 ? k : void 0);
    f = dg(f);
    N(l, Ty, 10, f);
  }
  a = a.j.clone();
  l = Date.now().toString();
  a = Ie(a, 4, l == null ? l : Hd(l));
  c = ff(a, jv, 3, c.slice());
  g &&
    ((a = new gv()),
    (g = tf(a, 13, g)),
    (a = new hv()),
    (g = N(a, gv, 2, g)),
    (a = new iv()),
    (g = N(a, hv, 1, g)),
    (g = wf(g, 2, 9)),
    N(c, iv, 18, g));
  e && uf(c, 14, e);
  return c;
}
function lz(a) {
  this.o = this.j = this.v = a;
}
lz.prototype.reset = function () {
  this.o = this.j = this.v;
};
function mz(a) {
  this.G = M(a, 8);
}
F(mz, Q);
var nz = Bg(mz);
function oz(a) {
  this.G = M(a);
}
F(oz, Q);
var zA = new Ag(175237375, mz, oz);
function AA(a) {
  T.call(this);
  var c = this;
  this.o = [];
  this.R = "";
  this.S = this.J = -1;
  this.D = null;
  this.I = this.B = 0;
  this.H = null;
  this.U = this.T = 0;
  this.W = 1;
  this.fb = 0;
  this.ab = a.ab;
  this.Wa = a.Wa || u();
  this.A = new fz(a.ab, a.Ea);
  this.la = a.la || null;
  this.eb = a.eb || null;
  this.M = 1e3;
  this.C = a.Pe || null;
  this.Ra = a.Ra || null;
  this.mb = a.mb || false;
  this.withCredentials = !a.Ad;
  this.Ea = a.Ea || false;
  this.P =
    typeof URLSearchParams !== "undefined" &&
    !!new URL(BA()).searchParams &&
    !!new URL(BA()).searchParams.set;
  var e = dz(new cz());
  gz(this.A, e);
  this.v = new lz(1e4);
  a = CA(this, a.wd);
  this.j = new Ry(this.v.j, a);
  this.N = new Ry(6e5, a);
  this.mb || this.N.start();
  if (!this.Ea) {
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        DA(c);
        var h;
        (h = c.H) == null || h.flush();
      }
    });
    var f, g;
    (f = window) == null ||
      (g = f.addEventListener) == null ||
      g.call(f, "pagehide", function () {
        DA(c);
        var h;
        (h = c.H) == null || h.flush();
      });
  }
}
F(AA, T);
function CA(a, c) {
  function e() {
    a.flush();
  }
  return a.P
    ? c
      ? function () {
          c().then(e);
        }
      : e
    : u();
}
AA.prototype.O = function () {
  DA(this);
  this.j.stop();
  this.N.stop();
  T.prototype.O.call(this);
};
function rv(a, c) {
  if (c instanceof jv) a.log(c);
  else
    try {
      var e = kv(new jv(), bg(c));
      a.log(e);
    } catch (f) {
      EA(a, 4, 1);
    }
}
function EA(a, c, e) {
  var f;
  (f = a.H) == null || f.Rf(c, e);
}
AA.prototype.log = function (a) {
  EA(this, 2, 1);
  if (this.P) {
    a = a.clone();
    var c = this.W++;
    c = a = uf(a, 21, c);
    if (Od(Ge(c, 1)) == null) {
      var e = Date.now();
      e = Number.isFinite(e) ? e.toString() : "0";
      Ie(c, 1, e == null ? e : Hd(e));
    }
    jf(c, 15) != null || uf(c, 15, new Date().getTimezoneOffset() * 60);
    EA(this, 1, 1);
    c = this.o.length - this.M + 1;
    c > 0 && (this.o.splice(0, c), (this.B += c), EA(this, 3, c));
    this.o.push(a);
    this.mb || this.j.o || this.j.start();
  }
};
AA.prototype.flush = function (a, c) {
  var e = this;
  if (this.o.length === 0) a && a();
  else {
    var f = Date.now();
    if (this.S > f && this.J < f) c && c("throttled");
    else {
      this.la && (typeof this.la.Ec === "function" ? iz(this.A, this.la.Ec()) : (this.A.A = 0));
      var g = this.o.length,
        h = kz(this.A, this.o, this.B, this.I, this.eb, this.T, this.U),
        k = this.Wa();
      if (k && this.R === k) c && c("stale-auth-token");
      else {
        this.o = [];
        this.j.o && this.j.stop();
        this.B = 0;
        f = bg(h);
        var l;
        this.D && this.D.qb(f.length) && (l = FA(f));
        var p = GA(this, f, k),
          q = function (y) {
            e.v.reset();
            e.j.setInterval(e.v.j);
            if (y) {
              var z = null;
              try {
                var B = JSON.stringify(JSON.parse(y.replace(")]}'\n", "")));
                z = nz(B);
              } catch (X) {}
              if (z) {
                y = Number(nf(z, 1, bd("-1")));
                y > 0 && ((e.J = Date.now()), (e.S = e.J + y));
                y = zA.j;
                B = Wa(yc);
                var G;
                qc && B && ((G = z.G[B]) == null ? void 0 : G[y]) != null && oc(zc, 3);
                a: {
                  G = zA.j;
                  var C = C === void 0 ? false : C;
                  if (Wa(Dc) && Wa(yc) && void 0 === Dc) {
                    y = z.G;
                    B = y[yc];
                    if (!B) break a;
                    if ((B = B.dd))
                      try {
                        B(y, G, ie);
                        break a;
                      } catch (X) {
                        $a(X);
                      }
                  }
                  C && he(z, G);
                }
                C = zA.ctor ? zA.v(z, zA.ctor, zA.j, zA.o) : zA.v(z, zA.j, null, zA.o);
                if ((C = C === null ? void 0 : C)) {
                  C = mf(C, 1, -1);
                  C !== -1 && ((e.v = new lz(C < 1 ? 1 : C)), e.j.setInterval(e.v.j));
                }
              }
            }
            a && a();
            e.I = 0;
          },
          r = function (y, z) {
            var B = ef(h, jv, 3);
            var G = Number(nf(h, 14)),
              C = e.v;
            C.o = Math.min(3e5, C.o * 2);
            C.j = Math.min(3e5, C.o + Math.round(0.1 * (Math.random() - 0.5) * 2 * C.o));
            e.j.setInterval(e.v.j);
            y === 401 && k && (e.R = k);
            G && (e.B += G);
            z === void 0 && (z = (500 <= y && y < 600) || y === 401 || y === 0);
            z && ((e.o = B.concat(e.o)), e.mb || e.j.o || e.j.start());
            EA(e, 7, 1);
            c && c("net-send-failed", y);
            ++e.I;
          },
          x = function () {
            e.la && e.la.send(p, q, r);
          };
        l
          ? l.then(
              function (y) {
                EA(e, 5, g);
                p.cd["Content-Encoding"] = "gzip";
                p.cd["Content-Type"] = "application/binary";
                p.body = y;
                p.Yd = 2;
                x();
              },
              function () {
                EA(e, 6, g);
                x();
              },
            )
          : x();
      }
    }
  }
};
function GA(a, c, e) {
  e = e === void 0 ? null : e;
  var f = f === void 0 ? a.withCredentials : f;
  var g = {};
  a.C || (a.C = BA());
  try {
    var h = new URL(a.C).toString();
  } catch (k) {
    h = new URL(a.C, window.location.origin).toString();
  }
  h = new URL(h);
  e && (g.Authorization = e);
  a.Ra && ((g["X-Goog-AuthUser"] = a.Ra), h.searchParams.set("authuser", a.Ra));
  return { url: h.toString(), body: c, Yd: 1, cd: g, Ge: "POST", withCredentials: f, fb: a.fb };
}
function DA(a) {
  a.A.v = true;
  a.flush();
  a.A.v = false;
}
function BA() {
  return "https://play.google.com/log?format=json&hasfast=true";
}
function HA() {}
function FA(a) {
  var c, e, f, g;
  return Ba(function (h) {
    switch (h.j) {
      case 1:
        return (
          (c = new CompressionStream("gzip")),
          (e = new Response(c.readable).arrayBuffer()),
          (f = c.writable.getWriter()),
          h.B(f.write(new TextEncoder().encode(a)), 2)
        );
      case 2:
        return h.B(f.close(), 3);
      case 3:
        return ((g = Uint8Array), h.B(e, 4));
      case 4:
        return h.return(new g(h.C));
    }
  });
}
HA.prototype.qb = function (a) {
  return a < 1024 ? false : typeof CompressionStream !== "undefined";
};
function IA() {
  this.Wd = typeof AbortController !== "undefined";
}
IA.prototype.send = function (a, c, e) {
  var f = this,
    g,
    h,
    k,
    l,
    p,
    q,
    r,
    x,
    y,
    z;
  return Ba(function (B) {
    switch (B.j) {
      case 1:
        return (
          (h =
            (g = f.Wd ? new AbortController() : void 0) && a.fb > 0
              ? setTimeout(function () {
                  g.abort();
                }, a.fb)
              : void 0),
          B.N(2, 3),
          (k = Object.assign(
            {},
            { method: a.Ge, headers: Object.assign({}, a.cd) },
            a.body && { body: a.body },
            a.withCredentials && { credentials: "include" },
            { signal: a.fb && g ? g.signal : null },
          )),
          B.B(fetch(a.url, k), 5)
        );
      case 5:
        l = B.C;
        if (l.status !== 200) {
          (p = e) == null || p(l.status);
          B.Ba(3);
          break;
        }
        if ((q = c) == null) {
          B.Ba(7);
          break;
        }
        return B.B(l.text(), 8);
      case 8:
        q(B.C);
      case 7:
      case 3:
        B.I();
        clearTimeout(h);
        B.M(0);
        break;
      case 2:
        r = B.H();
        switch ((x = r) == null ? void 0 : x.name) {
          case "AbortError":
            (y = e) == null || y(408);
            break;
          default:
            (z = e) == null || z(400);
        }
        B.Ba(3);
    }
  });
};
IA.prototype.Ec = A(4);
function JA(a, c) {
  c = c === void 0 ? "0" : c;
  T.call(this);
  this.ab = a;
  this.Ra = c;
  this.o = "https://play.google.com/log?format=json&hasfast=true";
  this.v = this.j = false;
  this.eb = this.la = null;
}
F(JA, T);
function KA(a) {
  a.j = true;
  return a;
}
function LA(a, c) {
  a.Wa = c;
  return a;
}
JA.prototype.Ad = function () {
  this.A = true;
  return this;
};
function MA(a) {
  a.la || (a.la = new IA());
  var c = new AA({
    ab: a.ab,
    Wa: a.Wa ? a.Wa : $p,
    Ra: a.Ra,
    Pe: a.o,
    Ea: a.v,
    mb: a.j,
    Ad: a.A,
    wd: a.wd,
    la: a.la,
  });
  il(a, c);
  c.D = new HA();
  a.eb && (c.eb = a.eb);
  jz(c.A);
  a.la.tb && a.la.tb(a.ab);
  a.la.Je && a.la.Je(c);
  return c;
}
function NA(a) {
  this.j = a;
  this.o = null;
  this.v = this.o == null;
}
var OA =
  "/offline/eventbusworker.js /offline/extension/frame /offline/fallback /offline/flags /offline/iframeapi /offline/synctaskworker.js /offline/taskiframe".split(
    " ",
  );
function PA() {}
function QA(a) {
  return (a = RA(a)) ? new NA(a) : null;
}
function RA(a) {
  var c = Rp(Op(Sk(a.match(Rk)[5] || null)));
  return OA.some(function (e) {
    return c.startsWith(e);
  })
    ? c
    : null;
}
function SA(a) {
  a = Dq(a);
  a.A || pq(a, TA.A);
  a.j || ((a.j = TA.j), qq(a, TA.F));
  return a.toString();
}
var TA = new oq(K.location.href);
function UA(a, c, e) {
  this.xa = a;
  this.j = c;
  if (c === null && e !== null) throw Error("Kc");
  this.o = e;
}
UA.prototype.na = function () {
  return this.j !== null;
};
function VA(a) {
  if (!a.j) throw Error("Mc");
  return a.j;
}
UA.prototype.za = function () {
  return this.xa.split("_")[0];
};
function WA(a) {
  a = VA(a);
  a = Qd(Ge(a, 1, void 0, void 0));
  return (a = a == null ? void 0 : a.split("_")) ? a[a.length - 1] : "";
}
function XA(a) {
  this.G = M(a);
}
F(XA, Q);
XA.prototype.Aa = function () {
  return of(this, 1);
};
function YA(a) {
  this.G = M(a);
}
F(YA, Q);
var ZA = Bg(YA);
function $A(a) {
  this.j = a
    ? ef(a, XA, 1).reduce(function (c, e) {
        var f = rf(e, 1);
        c[f] = e;
        return c;
      }, {})
    : {};
}
function aB(a, c) {
  var e = false;
  c = lq(c);
  for (var f in a.j) c[f] || (delete a.j[f], (e = true));
  return e;
}
function bB(a) {
  this.G = M(a);
}
F(bB, Q);
bB.prototype.getType = function () {
  return pf(this, 1);
};
bB.prototype.Aa = function () {
  return of(this, 2);
};
function cB(a) {
  this.G = M(a);
}
F(cB, Q);
cB.prototype.Xa = function () {
  return of(this, 4);
};
var dB = Bg(cB);
function eB(a) {
  this.G = M(a);
}
F(eB, Q);
var fB = Bg(eB);
function gB(a) {
  this.G = M(a);
}
F(gB, Q);
gB.prototype.Aa = function () {
  return of(this, 2);
};
function hB(a) {
  this.G = M(a);
}
F(hB, Q);
var iB = Bg(hB);
function jB(a, c) {
  this.j = a;
  this.o = c;
}
function kB(a, c, e) {
  a = a.j + "_" + c;
  return e ? a + "_" + e : a;
}
function lB(a) {
  return a.j + "_static_resource_archive";
}
function mB(a) {
  var c = new Request("//resource_archive_metadata");
  return a.match(c).then(function (e) {
    return e
      ? e.text().then(function (f) {
          return f ? new $A(ZA(f)) : null;
        })
      : null;
  });
}
function nB(a, c) {
  var e = a.put,
    f = new Request("//resource_archive_metadata"),
    g = Response,
    h = new YA();
  ff(h, XA, 1, gq(c.j));
  return e.call(a, f, new g(bg(h)));
}
function oB(a) {
  a.set("docs-lfth", String(Date.now()));
}
function pB(a, c) {
  var e = {};
  var f = !a.headers || a.headers.entries().next().done;
  e.serviceworker_fetchUrl = a.url;
  e.serviceworker_isUrlMissing = String(!a.url);
  e.serviceworker_isBodyMissing = String(!a.body);
  e.serviceworker_headersMissing = String(f);
  f = !a.url || !a.body || f;
  a = c && qB(a, e) == null;
  if (f || a) throw Lk(Error("Nc"), e);
}
function qB(a, c) {
  c = c === void 0 ? {} : c;
  a = a.headers.get("cache-control");
  c.serviceworker_cacheControlHeader = a;
  c.serviceworker_isCacheControlHeaderMissing = String(!a);
  if (!a) return null;
  a = a.toLowerCase();
  if (a.indexOf("no-cache") != -1) return 0;
  a = rB.exec(a);
  c.serviceworker_isMaxAgeMissing = String(!a);
  return a ? parseInt(a[1], 10) * 1e3 : null;
}
function sB(a, c) {
  return Promise.resolve().then(function () {
    return c.keys().then(function (e) {
      return e.filter(function (f) {
        return f.startsWith(a.j);
      });
    });
  });
}
function tB(a, c) {
  var e = lB(a);
  return sB(a, c).then(function (f) {
    return f.filter(function (g) {
      return g != e;
    });
  });
}
function uB(a, c, e, f) {
  f = f === void 0 ? false : f;
  return vB(c).then(function (g) {
    return g === null
      ? new UA(e, null, null)
      : f
        ? wB(a, g, c).then(function (h) {
            return new UA(e, g, h);
          })
        : new UA(e, g, null);
  });
}
function xB(a, c, e) {
  e = e === void 0 ? false : e;
  return tB(a, c).then(function (f) {
    f = f.map(function (g) {
      return c.open(g).then(function (h) {
        return uB(a, h, g, e);
      });
    });
    return Promise.all(f);
  });
}
function wB(a, c, e) {
  c = ef(c, bB, 3)
    .filter(function (f) {
      return kf(f, 1, Fe) == 1;
    })
    .map(function (f) {
      f = U(a.o, "docs-sw-eol") ? of(f, 6) : f.Aa();
      return yB(e, f);
    });
  return Promise.all(c).then(function (f) {
    return f.filter(function (g) {
      return !!g;
    });
  });
}
function zB(a, c) {
  return xB(a, c, true).then(function (e) {
    e = e
      .filter(function (f) {
        return f.na();
      })
      .flatMap(function (f) {
        if (!f.o) throw Error("Lc");
        return f.o.flatMap(function (g) {
          return ef(g, gB, 1);
        });
      })
      .map(function (f) {
        return SA(f.Aa());
      });
    return lq(e);
  });
}
function AB(a) {
  return a.match(new Request("//cache_metadata")).then(function (c) {
    return c
      ? c.text().then(function (e) {
          return e ? fB(e) : null;
        })
      : null;
  });
}
function vB(a) {
  return a.match(new Request("//manifest_cache_is_complete")).then(function (c) {
    return c
      ? c.text().then(function (e) {
          return e ? dB(e) : null;
        })
      : null;
  });
}
function yB(a, c) {
  c = SA(c);
  return a.match(new Request(c)).then(function (e) {
    return e ? BB(e) : null;
  });
}
function CB(a) {
  switch (a) {
    case "kix":
      return "document";
    case "ritz":
      return "spreadsheets";
    case "punch":
      return "presentation";
    case "drawing":
      return "drawings";
    case "test":
      return "test";
    default:
      throw Error("Oc`" + a);
  }
}
function DB() {
  var a = K.caches;
  return EB(a).then(function (c) {
    return c.length ? FB(a, c[0]) : Promise.resolve(null);
  });
}
function EB(a) {
  return a.keys().then(function (c) {
    return c.filter(function (e) {
      return GB.test(e);
    });
  });
}
function BB(a, c) {
  a = new Map(a.headers.entries());
  if (!a.has("x-cachemanifest")) return null;
  try {
    return iB(a.get("x-cachemanifest"));
  } catch (e) {
    return (c && HB(c, Lk(Error("Pc`" + e))), null);
  }
}
function IB(a) {
  return Promise.resolve()
    .then(function () {
      return wy(a);
    })
    .then(function (c) {
      return new Promise(function (e, f) {
        Mx(c.pb(), e, f);
      });
    });
}
function JB(a, c) {
  return a.length == 1 && a[0].X() == c;
}
function FB(a, c) {
  return a
    .open(c)
    .then(function (e) {
      return vB(e);
    })
    .then(function (e) {
      return e ? e.Xa() : null;
    });
}
var rB = /max-age=([0-9]+)/,
  GB = RegExp("^offlinecommon_offlinecommon");
function KB(a) {
  a = new oq(a);
  return a.j === "fonts.googleapis.com" && a.o === "/css";
}
function LB(a) {
  a = new oq(a).j;
  return a.endsWith(".ggpht.com") || a.endsWith(".googleusercontent.com");
}
function MB(a) {
  a = new oq(a);
  var c = a.o.split("/").pop();
  return a.j.endsWith(".google.com") && a.o.includes("/ac/") && c.startsWith("logo.");
}
function NB(a) {
  var c = new oq(a);
  (c =
    ((c.j.startsWith("photos-image-dev.") && c.j.endsWith(".google.com")) ||
      c.j.endsWith(".googleusercontent.com") ||
      c.j.endsWith(".ggpht.com")) &&
    c.o.includes("/ogw/")) ||
    ((a = new oq(a)),
    (c =
      !a.j.startsWith("photos-image-dev.") &&
      a.j.endsWith(".google.com") &&
      a.o.includes("/ogw/")));
  return c;
}
function OB(a, c, e) {
  a = PB(a);
  return K.fetch(a, c).then(function (f) {
    var g,
      h = (g = f.headers.get("content-type")) == null ? void 0 : g.includes("text/plain");
    if (e < 2 && h)
      return f.text().then(function (k) {
        return OB(k, c, e + 1);
      });
    if (h) throw Error("Qc");
    return f;
  });
}
function PB(a) {
  a = new URL(a);
  var c = a.searchParams;
  c.set("alr", "yes");
  a.search = c.toString();
  return a.toString();
}
var QB =
    /\/_\/[^/]+\/_\/js\/|\.gstatic\.|\/doclist\/|\/static\/|googleusercontent\.com\/|google\.com\/images\/errors\/|apis\.google\.com/,
  RB = ["/cleardot.gif", "/netcheck.gif", "//csi.gstatic.com/csi"];
function SB(a) {
  return NB(a) || MB(a) || KB(a)
    ? true
    : QB.test(a) &&
        RB.every(function (c) {
          return !a.includes(c);
        });
}
function TB(a) {
  return a.j ? (a.j && a.j.j.includes("offline/iframeapi") ? false : true) : false;
}
function UB(a) {
  switch (a) {
    case "cache-needs-update":
      return "The cache needs to be updated.";
    case "document-model-needs-resync":
      return "The document model needs to be resynced.";
    case "document-not-available-locally":
      return "The document was not available locally.";
    case "undefined-cold-start-reason":
      return "Cold start occurred for an undefined reason.";
    case "offline":
      return "Server was unreachable or network was unavailable.";
    case "server-error":
      return "Server responded with an error.";
    case "flaky-connection-pre-response":
      return "Client detected a slow network or slow server.";
    case "direct-cold-start":
      return "Client generated cold-start url directly.";
    case "server-document-not-found":
      return "The document exists locally but does not exist on server yet.";
    case "server-document-deleted":
      return "The docuement was deleted from the server.";
    case "server-suggested":
      return "The server suggested that cold-start is preferred here.";
    case "missing-application-metadata":
      return "The application metadata was not available.";
    case "missing-action-info":
      return "The request did not contain the requisite action information.";
    case "cannot-determine-editor":
      return "Unable to determine the editor to redirect to based on url.";
    case "redirect-skipped":
      return "No redirect was necessary based on url.";
    case "resource-not-cached":
      return "The resource was not found in cache.";
    case "corrupted-resource":
      return "The resource was found in cache but was corrupted or improperly configured.";
    case "unexpected-error-from-fetcher":
      return "The fetcher returned an unexpected error.";
    case "local-store-error":
      return "The local store returned an error.";
    default:
      return "Fetcher did not provide a Response object.";
  }
}
function VB(a, c) {
  a.v.push(c);
}
function WB(a, c, e, f) {
  f = f === void 0 ? {} : f;
  f.serviceworker_isNullResponse = "false";
  XB(a, c, f, e);
  YB(a, e, f);
}
function ZB(a, c, e) {
  e = e === void 0 ? {} : e;
  qu(
    a.j,
    function () {
      var f = e;
      f = f === void 0 ? {} : f;
      f.serviceworker_codePath = "install";
      $B(a, c, f);
    },
    a,
  )();
}
function aC(a, c, e, f, g) {
  f = f === void 0 ? "info" : f;
  g = g === void 0 ? {} : g;
  g.serviceworker_cacheUpdateError = "true";
  g.serviceworker_codePath = e;
  f === "warning" ? $B(a, c, g) : f === "fatal" ? bC(a, c, g) : YB(a, c, g);
}
function HB(a, c, e, f) {
  e = e === void 0 ? {} : e;
  aC(a, c, "internalCacheUpdate", f === void 0 ? "info" : f, e);
}
function cC(a, c) {
  var e = e === void 0 ? {} : e;
  e.serviceworker_codePath = "activate";
  YB(a, c, e);
}
function dC(a, c, e) {
  var f = f === void 0 ? {} : f;
  f.serviceworker_codePath = "messageHandler";
  e && (f.serviceworker_messageHandler_requestType = kf(e, 1, Fe));
  YB(a, c, f);
}
function eC(a, c, e, f) {
  f = f === void 0 ? null : f;
  var g = g === void 0 ? {} : g;
  var h = e.gb,
    k = TB(c);
  g.serviceworker_isCritical = String(k);
  XB(a, c, g, h);
  c = !e.Pa;
  g.serviceworker_isNullResponse = String(c);
  g.serviceworker_fetchMethod = e.j;
  g.fetch_handling_recovery = c ? (f && f.type != "error" ? "error_page" : "none") : "fallback";
  if (c && k) {
    U(a.A, "docs-sw-erdcbnc");
    if ((f = h && h instanceof By)) {
      f = Gl(a.A, "docs-sw-edubnc");
      f != 0 && h.j == 0
        ? (h.o > f
            ? (g.nonfatalReason = "user has never succeeded a cache update")
            : ((g.nonfatalReason =
                "no record of any successful cache update but opted-in before tracking"),
              (g["apps_telemetry.classification"] = (6).toString()),
              (g["apps_telemetry.classification_code"] = (8).toString())),
          (f = true))
        : (f = false);
    }
    f = f || (h && h instanceof sy && h.A) ? false : true;
  } else f = false;
  f ? bC(a, h || Error(UB(e.Ua)), g) : h && $B(a, h, g);
}
function fC(a) {
  kc(a, "__INTERNAL_errorShouldBeSampled", "true");
}
function gC(a) {
  return a instanceof TypeError && a.message == "Failed to fetch";
}
function XB(a, c, e, f) {
  f = f === void 0 ? null : f;
  e.serviceworker_navigatorIsOnline = String(K.navigator.onLine);
  f instanceof TypeError && (e.serviceworker_fetchErrorReason = "type_error");
  f = c.j ? (c.j.v ? "offlineCommonAction" : "editorAction") : c.v ? "staticContent" : null;
  f != null && (e.serviceworker_requestType = f);
  c.j && c.j.o != null && (e.sw_docType = c.j.o);
  e.serviceworker_resourceCategory = "null";
  f = c.o;
  var g = Sk(f.url.match(Rk)[5] || null);
  g = g.substring(g.lastIndexOf("/"));
  hC.indexOf(g) > -1 && (e.serviceworker_actionPath = g);
  e.serviceworker_fetchError_fullUrl = Cy(f.url);
  e.serviceworker_codePath = "fetch";
  e.serviceworker_requestMode = f.mode;
  e.serviceworker_requestDestination = f.destination;
  e.serviceworker_requestRedirectMode = f.redirect;
  e.serviceworker_clientId = c.A || "";
  (g = bl(f.url, "usp")) && (e.serviceworker_fetchUsp = g);
  f = Dq(f.referrer);
  f = tq(f, "");
  f = sq(f, "");
  e.serviceworker_referrer = f.toString();
  for (f = 0; f < a.v.length; f++) {
    g = (0, a.v[f])(c);
    for (var h in g) e[h] = g[h];
  }
}
function bC(a, c, e) {
  a.o != null ? Au(a.j, c, a.o, e, false, 2) : hu(a.j, c, e);
}
function $B(a, c, e) {
  a.o != null ? Au(a.j, c, a.o, e, false, 1) : pu(a.j, c, e);
}
function YB(a, c, e) {
  a.o != null
    ? Au(a.j, c, a.o, e, false, 0)
    : lc(c).__INTERNAL_errorShouldBeSampled === "true"
      ? Au(a.j, c, 2, e)
      : a.j.info(c, e);
}
var hC = "/comment /create /edit /hs /view /preview /viewcomments /open".split(" ");
function iC(a, c, e, f) {
  a = new Request(a, c);
  return jC(a, e, 0, f === void 0 ? null : f, true, false).catch(function (g) {
    g = Jk(g);
    gC(g) && fC(g);
    throw g;
  });
}
function jC(a, c, e, f, g, h) {
  var k = {};
  g && (k.redirect = "error");
  h && (k.cache = "no-store");
  kC(a.url) && (k.credentials = "include");
  return (NB(a.url) ? OB(a.url, k, 0) : K.fetch(a.clone(), k))
    .then(function (l) {
      if (l.status !== 200) {
        var p = { serviceworker_fetchErrorReason: "failure_response_status" };
        p.serviceworker_responseStatus = String(l.status);
        throw Lk(new Ay(l.status, "Invalid response status."), p);
      }
      return l;
    })
    .catch(function (l) {
      e += 1;
      if (e >= c) {
        var p = {};
        p.serviceworker_fetchUrl = a.url;
        l instanceof TypeError && (p.serviceworker_fetchErrorReason = "type_error");
        K.navigator &&
          K.navigator.onLine != null &&
          (p.serviceworker_navigatorIsOnline = String(K.navigator.onLine));
        throw Lk(l, p);
      }
      f && e === 1 && f();
      return jC(a, c, e, f, g, true);
    });
}
var lC = [MB, NB];
function kC(a) {
  return lC.some(function (c) {
    return c(a);
  });
}
function mC(a, c, e, f) {
  f = f === void 0 ? 3 : f;
  this.o = a;
  this.j = c;
  this.A = e;
  this.v = f;
}
function nC(a, c, e) {
  oC(a.j, c.length);
  c = c.map(function (f) {
    return function () {
      return pC(a, e, f);
    };
  });
  return dq(new cq(c, 5)).then(function (f) {
    var g = f
      .filter(function (h) {
        return !h.Jc;
      })
      .map(function (h) {
        return function () {
          return pC(a, e, h.entry, true);
        };
      });
    return dq(new cq(g, 1)).then(function (h) {
      return qC(a, f.concat(h));
    });
  });
}
function qC(a, c) {
  var e = rC(c),
    f = e.De;
  sC(a, e.Ae, c.length);
  a = f.flatMap(function (g) {
    return ef(g.Jc, gB, 1);
  });
  Cb(a, function (g) {
    return g.Aa();
  });
  return a;
}
function pC(a, c, e, f) {
  f = f === void 0 ? false : f;
  var g = e.Aa();
  return iC(
    g,
    { headers: { "x-include-cachemanifest": "true" }, credentials: "include" },
    a.v,
    function () {
      a.j.H++;
    },
  )
    .then(function (h) {
      var k = BB(h, a.o);
      try {
        pB(h, true);
      } catch (p) {
        var l = {};
        HB(
          a.o,
          p,
          ((l.serviceworker_fetchUrl = g), (l.serviceworker_isResourceFromServer = "true"), l),
        );
      }
      k == null && tC(a, g, h, f || false);
      l = U(a.A, "docs-sw-eol")
        ? new Request(Qd(Ge(e, 6, void 0, void 0)) != null ? of(e, 6) : g)
        : new Request(g);
      oB(l.headers);
      return c.put(l, h).then(function () {
        uC(a.j, false, true, false);
        return new vC(e, k);
      });
    })
    .catch(function (h) {
      uC(a.j, false, false, false);
      throw h;
    });
}
function rC(a) {
  var c = [],
    e = [];
  a.forEach(function (f) {
    f.Jc ? c.push(f) : e.push(f);
  });
  return { De: c, Ae: e };
}
function sC(a, c, e) {
  if (c.length !== 0) {
    var f = c.length,
      g = (c = f === e)
        ? "Inline cache manifests are missing from all actions."
        : "Inline cache manifests are missing from some actions.",
      h = {};
    e =
      ((h.serviceworker_inlineManifestMissingFromAllActions = String(c)),
      (h.serviceworker_inlineManifestMissingCount = String(f)),
      (h.serviceworker_inlineManifestTotalCount = String(e)),
      h);
    HB(a.o, Error(g), e, c ? "warning" : "info");
  }
}
function tC(a, c, e, f) {
  var g = "";
  var h = I(e.headers.entries()),
    k = h.next(),
    l;
  try {
    for (; !k.done; k = h.next()) {
      var p = k.value;
      g += p[0] + ": [" + Ok(p[1]) + "]; ";
    }
  } finally {
    k && !k.done && (l = h.return) && l.call(h);
  }
  h = e.headers.has("x-cachemanifest") ? e.headers.get("x-cachemanifest") : "";
  k = e.headers.has("reporting-endpoints") ? e.headers.get("reporting-endpoints") : "";
  l = e.headers.has("x-l2-request-path") ? e.headers.get("x-l2-request-path") : "";
  p = {};
  HB(
    a.o,
    Error(
      f
        ? "Inline manifest is missing from response after retry."
        : "Inline manifest is missing from response.",
    ),
    ((p.serviceworker_fetchUrl = c),
    (p.serviceworker_responseHeadersSnapshot = g),
    (p.serviceworker_responseHeaderCacheManifestRelease = e.headers.get("x-cachemanifest-release")),
    (p.serviceworker_responseHeaderInlineCacheManifest = Ok(h)),
    (p.serviceworker_responseHeaderReportingEndpoints = Ok(k)),
    (p.serviceworker_responseHeaderL2RequestPath = Ok(l)),
    p),
  );
}
function vC(a, c) {
  this.entry = a;
  this.Jc = c;
}
function wC(a, c) {
  c = c === void 0 ? false : c;
  this.Kd = a === void 0 ? false : a;
  this.Kc = c;
}
wC.prototype.na = w("Kd");
function xC(a, c) {
  this.o = a;
  this.j = c;
}
function yC(a, c) {
  return c.open(lB(a.o)).then(function (e) {
    return e.keys();
  });
}
function zC(a, c) {
  return a
    .map(function (e) {
      return SA(e);
    })
    .filter(function (e) {
      return !(e in c);
    });
}
function AC(a) {
  return a.match(new Request("//manifest_cache_is_complete")).then(function (c) {
    return !!c;
  });
}
function BC(a, c, e) {
  var f = U(a.j, "docs-sw-eol");
  a = c.map(function (g) {
    return f ? rf(g, 2) : rf(g, 6);
  });
  return zC(a, e).length == 0;
}
function CC(a, c, e, f, g) {
  var h = U(a.j, "docs-sw-eol"),
    k = ef(f, bB, 3).filter(function (l) {
      return kf(l, 1, Fe) === 1;
    });
  return e.keys().then(function (l) {
    return yC(a, c).then(function (p) {
      if (l.length > 0 && p.length == 0 && g) {
        var q = {};
        HB(g, Error("Rc"), ((q.serviceworker_invalidCacheType = "chrome_corruption_recovery"), q));
        return new wC();
      }
      q = lq(
        l.map(function (x) {
          return x.url;
        }),
      );
      var r = k.map(function (x) {
        return h ? rf(x, 6) : rf(x, 2);
      });
      r = zC(r, q);
      if (r.length != 0 && g)
        return (
          (p = {}),
          (p =
            ((p.serviceworker_invalidCacheType = "missing_action_resource"),
            (p.serviceworker_fetchUrl = r.sort().toString()),
            p)),
          BC(a, k, q) &&
            ((p.serviceworker_invalidCacheType = "stale_locale_flag"), (p.locale_flag_enabled = h)),
          HB(g, Error("Rc"), p),
          new wC()
        );
      q = DC(e, f, k, p, h, g);
      return Promise.allSettled(q).then(function (x) {
        var y = x.map(function (z) {
          return z.value;
        });
        x = y.every(function (z) {
          return z.na();
        });
        y = y.every(function (z) {
          return z.Kc;
        });
        return new wC(x, y);
      });
    });
  });
}
function DC(a, c, e, f, g, h) {
  var k = lq(
    f.map(function (l) {
      return l.url;
    }),
  );
  return e.map(function (l) {
    l = g ? of(l, 6) : l.Aa();
    var p = SA(l);
    return a.match(new Request(p)).then(function (q) {
      if (q == null)
        return (
          h &&
            ((q = {}),
            HB(
              h,
              Error("Sc"),
              ((q.serviceworker_invalidCacheType = "unexpected_internal_error"), q),
            )),
          new wC()
        );
      q = BB(q, h);
      if (q == null)
        return (
          h &&
            ((q = {}),
            HB(
              h,
              Error("Tc"),
              ((q.serviceworker_invalidCacheType = "unexpected_internal_error"),
              (q.serviceworker_fetchUrl = p),
              q),
            )),
          new wC()
        );
      var r = ef(q, gB, 1).map(function (x) {
        return rf(x, 2);
      });
      r = zC(r, k);
      if (r.length != 0 && h)
        return (
          (q = {}),
          HB(
            h,
            Error("Rc"),
            ((q.serviceworker_invalidCacheType = "missing_static_resource"),
            (q.serviceworker_fetchUrl = r.sort().toString()),
            q),
          ),
          new wC()
        );
      r = true;
      qf(q, 2) != qf(c, 5) && (r = false);
      return new wC(true, r);
    });
  });
}
function EC(a, c, e) {
  this.request = a;
  this.j = c;
  this.metadata = e;
}
function FC(a) {
  this.o = a;
  this.j = this.v = 0;
}
D = FC.prototype;
D.match = function (a, c) {
  var e = this;
  this.v++;
  return this.o.match(a, c).finally(function () {
    e.v--;
  });
};
D.matchAll = function (a, c) {
  var e = this;
  this.v++;
  return this.o.matchAll(a, c).finally(function () {
    e.v--;
  });
};
D.add = function (a) {
  var c = this;
  this.j++;
  return this.o.add(a).finally(function () {
    c.j--;
  });
};
D.addAll = function (a) {
  var c = this;
  this.j++;
  return this.o.addAll(a).finally(function () {
    c.j--;
  });
};
D.put = function (a, c) {
  var e = this;
  this.j++;
  return this.o.put(a, c).finally(function () {
    e.j--;
  });
};
D.delete = function (a, c) {
  var e = this;
  this.j++;
  return this.o.delete(a, c).finally(function () {
    e.j--;
  });
};
D.keys = function (a, c) {
  var e = this;
  this.v++;
  return this.o.keys(a, c).finally(function () {
    e.v--;
  });
};
function GC(a, c, e) {
  this.j = a;
  this.B = c;
  this.o = e;
  this.v = Promise.resolve(null);
  this.A = null;
}
function HC(a) {
  return IC(a)
    .then(u())
    .catch(function (c) {
      var e = a.B;
      c = Jk(c);
      $B(e, c);
    });
}
D = GC.prototype;
D.match = function (a, c) {
  return this.j.match(a, c);
};
D.has = function (a) {
  return this.j.has(a);
};
D.open = function (a) {
  var c = this;
  return a == this.o
    ? this.v.then(function (e) {
        return e != null ? e : IC(c);
      })
    : this.j.open(a);
};
function IC(a) {
  var c = a.j.open(a.o).then(function (e) {
    a.A = new FC(e);
    return a.A;
  });
  a.v = c.catch(A(null));
  return c;
}
D.delete = function (a) {
  a == this.o && ((this.v = Promise.resolve(null)), (this.A = null));
  return this.j.delete(a);
};
D.keys = function () {
  return this.j.keys();
};
/** ManifestCacheUpdater（原 JC）。
 * 准备单个版本缓存；成功写入完整标记后才可被完整版本选择器使用。
 */
function ManifestCacheUpdater(a, c, e, f, g, h) {
  var k = k === void 0 ? 3 : k;
  this.F = h;
  this.B = c;
  this.K = new xC(c, h);
  this.o = a;
  this.v = e;
  this.j = f;
  this.C = of(e, 1);
  this.A = g;
  this.D = k;
  this.H = new mC(f, g, h, k);
}
/** getManifestCacheName（原 KC）。
 * 从缓存类型、构建和清单信息计算目标缓存名。
 */
function getManifestCacheName(manifestUpdater) {
  return kB(manifestUpdater.B, manifestUpdater.C, rf(manifestUpdater.v, 2));
}
ManifestCacheUpdater.prototype.update = function () {
  var a = this;
  return this.o.open(getManifestCacheName(this)).then(function (c) {
    return AC(c)
      .then(function (e) {
        if (e) return CC(a.K, a.o, c, a.v, a.j);
      })
      .then(function (e) {
        if (e && e.Kd && e.Kc) rf(a.v, 2);
        else
          return populateAndMarkManifestComplete(a, c, e).then(function () {
            return MC(a);
          });
      });
  });
};
function MC(a) {
  return a.o
    .open(getManifestCacheName(a))
    .then(function (c) {
      return AC(c);
    })
    .then(function (c) {
      c || HB(a.j, Error("Uc"));
    })
    .catch(function (c) {
      HB(a.j, Error("Vc`" + c.message));
    });
}
/** populateAndMarkManifestComplete（原 LC）。
 * 先等待 NC 的资源准备链路成功，再写 //manifest_cache_is_complete；不是原生事务。
 */
function populateAndMarkManifestComplete(manifestUpdater, versionCache, previousState) {
  var f = {},
    g =
      ((f.serviceworker_updatingExistingCache = !!previousState),
      (f.serviceworker_cacheFullyPopulatedBeforeUpdate = previousState && previousState.na()),
      (f.serviceworker_cacheConsistentBeforeUpdate = previousState && previousState.Kc),
      f);
  return NC(manifestUpdater, versionCache)
    .then(function () {
      var h = manifestUpdater.v;
      return versionCache.put(new Request("//manifest_cache_is_complete"), new Response(bg(h)));
    })
    .catch(function (h) {
      return handleManifestUpdateFailure(manifestUpdater, h, g);
    });
}
/** handleManifestUpdateFailure（原 OC）。
 * 是否保留旧完整缓存受功能开关和旧状态影响，不是无条件保留。
 */
function handleManifestUpdateFailure(manifestUpdater, updateError, diagnostics) {
  return U(manifestUpdater.F, "docs-sw-eddfpc") &&
    diagnostics.serviceworker_cacheFullyPopulatedBeforeUpdate
    ? Promise.resolve()
    : manifestUpdater.o
        .delete(getManifestCacheName(manifestUpdater))
        .then(function () {
          return tB(manifestUpdater.B, manifestUpdater.o);
        })
        .then(function (f) {
          var g = U(manifestUpdater.F, "docs-sw-ernec");
          f.length === 0 &&
            g &&
            ((f = Error("Wc`" + updateError.message)),
            (diagnostics.serviceworker_fetchUrl = lc(updateError).serviceworker_fetchUrl),
            HB(manifestUpdater.j, f, diagnostics));
          throw Lk(updateError, { failedCacheName: manifestUpdater.C });
        });
}
function NC(a, c) {
  return a.o
    .open(lB(a.B))
    .then(function (e) {
      return mB(e).then(function (f) {
        var g = f || new $A();
        f = ef(a.v, bB, 3).filter(function (h) {
          return kf(h, 1, Fe) === 1;
        });
        return nC(a.H, f, c).then(function (h) {
          return PC(a, e, h, g);
        });
      });
    })
    .catch(function (e) {
      e instanceof Ay && e.B == 412 && fC(e);
      throw e;
    });
}
function PC(a, c, e, f) {
  QC(a.A, e.length);
  e = e.map(function (g) {
    return function () {
      return RC(a, c, g, f);
    };
  });
  return dq(new cq(e, 5)).finally(function () {
    return nB(c, f).catch(u());
  });
}
function RC(a, c, e, f) {
  var g = e.Aa(),
    h = Date.now(),
    k = false,
    l = { headers: {} };
  return SC(a, c, e)
    .then(function (p) {
      if (p) k = true;
      else
        return iC(g, l, a.D, function () {
          a.A.N++;
        }).then(function (q) {
          try {
            pB(q, true);
          } catch (x) {
            var r = {};
            HB(
              a.j,
              Jk(x),
              ((r.serviceworker_manifestUrl = g),
              (r.serviceworker_isResourceFromServer = "true"),
              r),
            );
          }
          r = new Request(g);
          oB(r.headers);
          return c.put(r, q);
        });
    })
    .then(function () {
      var p = SA(g),
        q = f.j[p];
      q || ((q = new XA()), vf(q, 1, p), (f.j[p] = q));
      uf(q, 2, h);
      uC(a.A, true, true, k);
    })
    .catch(function (p) {
      uC(a.A, true, false, k);
      if (U(a.F, "docs-edclcf") && (MB(g) || NB(g))) {
        var q = {};
        HB(a.j, p, ((q.serviceworker_isOptionalResource = "true"), q));
        return Promise.resolve();
      }
      throw p;
    });
}
function SC(a, c, e) {
  var f = e.Aa();
  return TC(a, c, f).then(function (g) {
    if (!g) return null;
    var h = g.request;
    g = g.j;
    try {
      pB(g, true);
    } catch (p) {
      return (
        fC(p),
        (h = {}),
        HB(
          a.j,
          p,
          ((h.serviceworker_manifestUrl = f), (h.serviceworker_isResourceFromServer = "false"), h),
        ),
        null
      );
    }
    var k = h.headers.get("docs-lfth");
    k = parseInt(k, 10);
    k = isNaN(k) ? null : k;
    var l = qB(g) || 0;
    return k === null || Date.now() > k + l ? null : new UC(h, g);
  });
}
function TC(a, c, e) {
  return c.keys(e).then(function (f) {
    return f.length == 0
      ? null
      : c.match(e).then(function (g) {
          var h = new Request(e).url,
            k = f.some(function (r) {
              return r.url != h;
            }),
            l = !!g && sq(Dq(h), null).toString() != sq(Dq(g.url), null).toString(),
            p = !!g && NB(h) && LB(g.url);
          if (f.length > 1 || !g || ((k || l) && !p)) {
            p = Error("Xc");
            fC(p);
            var q = {};
            l =
              ((q.serviceworker_manifestUrl = e),
              (q.sw_expectedUrl = h),
              (q.sw_cacheKeysLength = String(f.length)),
              (q.sw_hasMismatchingUrls = String(k)),
              (q.sw_hasMismatchingResponseUrl = String(l)),
              (q.sw_responseMissing = String(!g)),
              q);
            g && g.url && (l.sw_responseUrl = g.url);
            k &&
              (l.sw_allMatchedUrls = f
                .map(function (r) {
                  return r.url;
                })
                .join());
            HB(a.j, p, l);
          }
          return (k =
            f.length == 1
              ? f[0]
              : f.find(function (r) {
                  return r.url == h;
                })) && g
            ? new UC(k, g)
            : null;
        });
  });
}
function UC(a, c) {
  this.request = a;
  this.j = c;
}
function VC(a, c) {
  this.C = a;
  this.fa = c;
  this.F = null;
  this.B = false;
  this.j = this.A = this.R = null;
  this.aa = this.U = false;
  this.N = this.H = this.D = this.K = this.P = this.J = this.M = this.o = this.v = this.I = 0;
  this.W = this.T = this.S = null;
}
function WC(a, c) {
  var e = Date.now() - a.F,
    f = new rm();
  a: switch (a.fa) {
    case "new_install":
      var g = 1;
      break a;
    case "reinstall":
      g = 2;
      break a;
    case "cache_only_update":
      g = 3;
      break a;
    default:
      throw Error("Zc");
  }
  f = wf(f, 1, g);
  c = sf(f, 2, c);
  c = sf(c, 3, a.aa);
  e = uf(c, 4, e * 1e3);
  e = tf(e, 5, a.I);
  e = tf(e, 6, a.v);
  e = tf(e, 7, a.o);
  e = tf(e, 8, a.M);
  e = tf(e, 9, a.J);
  e = tf(e, 10, a.P);
  e = tf(e, 11, a.K);
  e = tf(e, 12, a.D);
  e = sf(e, 13, a.B);
  e = sf(e, 14, a.U);
  e = tf(e, 16, a.H);
  e = tf(e, 17, a.N);
  e = tf(e, 18, a.S);
  e = tf(e, 19, a.T);
  c = tf(e, 20, a.W);
  e = new vm();
  N(e, rm, 6, c);
  a.B &&
    ((c = new nm()), tf(c, 1, a.R), a.j && vf(c, 3, a.j), a.A && vf(c, 2, a.A), N(e, nm, 8, c));
  c = a.C.lb(100007, 0);
  f = XC(c);
  N(f, vm, 50, e);
  a.C.rb(c);
}
function oC(a, c) {
  a.I++;
  a.o += c;
}
function QC(a, c) {
  a.v += c;
}
function uC(a, c, e, f) {
  c ? (a.M++, e || a.J++, f && a.P++) : (a.K++, e || a.D++);
}
function YC(a, c, e, f, g) {
  c = Tn(c, e);
  a.S = c.consecutiveFailureCount;
  c = c.lastSuccessTimestamp;
  e = Date.now();
  var h;
  g = g == null ? void 0 : (h = g.o) == null ? void 0 : Ll(h, "optInTime");
  f = f && !c;
  c && (a.T = e - c);
  if (!g) throw Error("Yc");
  f && (a.W = e - g);
}
function ZC(a) {
  this.v = a;
  this.j = a.filter(function (c) {
    return c.na();
  });
  this.o = $C(this);
}
function aD(a, c) {
  return (
    a.j.find(function (e) {
      return e.xa === c;
    }) || null
  );
}
function $C(a) {
  var c = new Map();
  a = I(a.j);
  var e = a.next(),
    f;
  try {
    for (; !e.done; e = a.next()) {
      var g = e.value,
        h = WA(g),
        k = c.get(h);
      (!k || bD(g) > bD(k)) && c.set(h, g);
    }
  } finally {
    e && !e.done && (f = a.return) && f.call(a);
  }
  return c;
}
function bD(a) {
  if (!a.na()) return -1;
  a = VA(a);
  a = qf(a, 6);
  return a == null ? -1 : a;
}
function cD(a, c) {
  var e = this;
  this.v = a;
  this.o = c;
  this.j = this.v.map(function (f) {
    var g = kB(e.o, of(f, 1), rf(f, 2));
    return new UA(g, f, null);
  });
  this.j.map(function (f) {
    return WA(f);
  });
}
function dD(a, c, e, f) {
  this.o = a;
  this.j = c;
  this.v = e;
  this.A = f;
}
function eD(a, c, e) {
  e = e === void 0 ? null : e;
  if (e != null && e.length == 0) throw Error("$c");
  return xB(a.j, a.o).then(function (f) {
    if (f.length != 0) {
      f = new ZC(f);
      if (e) {
        var g = new cD(e, a.j);
        g = fD(f, g);
      } else g = Array.from(f.o.values());
      var h = gD(a, f, g, c, e).map(function (k) {
        return a.o.delete(k);
      });
      return Promise.allSettled(h).then(function () {
        return Promise.all(h);
      });
    }
  });
}
function fD(a, c) {
  var e = [];
  c = I(c.j);
  var f = c.next(),
    g;
  try {
    for (; !f.done; f = c.next()) {
      var h = f.value,
        k = aD(a, h.xa);
      if (k) e.push(k);
      else {
        var l = WA(h),
          p = a.o.get(l) || null;
        p && e.push(p);
      }
    }
  } finally {
    f && !f.done && (g = c.return) && g.call(c);
  }
  return e;
}
function gD(a, c, e, f, g) {
  var h = e.map(function (q) {
      return q.xa;
    }),
    k = new Set(h),
    l = c.v;
  e = l
    .map(function (q) {
      return q.xa;
    })
    .filter(function (q) {
      return !k.has(q);
    });
  var p = e.filter(function (q) {
    return k.has(q);
  });
  p.length != 0 && e.length == k.size && p.length == k.size && (HB(a.v, Error("ad")), (e = []));
  e.length != 0 &&
    e.length == l.length &&
    ((l = c.j),
    (p = U(a.A, "docs-sw-epcc")),
    (c =
      l.length == 0
        ? "Cleaning up all manifest caches (all incomplete)"
        : p
          ? "Preventing deletion of all manifest caches."
          : "Cleaning up all manifest caches"),
    l.length != 0 &&
      p &&
      (e = e.filter(function (q) {
        return !k.has(q);
      })),
    (l = l.map(function (q) {
      return q.xa;
    })),
    (p = {}),
    (f =
      ((p.serviceworker_cacheCleanupErrorReason =
        g == null ? "pre_update_manifest_cleanup" : "post_update_manifest_cleanup"),
      (p.serviceworker_cacheUpdateReason = f),
      (p.serviceworker_cacheCleanupNewestCompleteCacheNames = h.join(",")),
      (p.serviceworker_cacheCleanupDeletedCacheNames = e.join(",")),
      (p.serviceworker_cacheCleanupCacheNamesToKeep = Array.from(k).join(",")),
      (p.serviceworker_cacheCleanupCompleteCacheNames = l.join(",")),
      p)),
    g != null &&
      (f.serviceworker_manifestNamesFromServer = g
        .map(function (q) {
          return kB(a.j, of(q, 1), rf(q, 2));
        })
        .join(",")),
    HB(a.v, Error(c), f));
  return e;
}
function hD(a, c, e, f, g, h, k) {
  T.call(this);
  this.C = e;
  this.v = new jB(e, k);
  this.B = k;
  this.j = new GC(a.caches, g, lB(this.v));
  this.N = c;
  this.D = f;
  this.o = g;
  this.I = a;
  this.H = h;
  this.M = new dD(this.j, this.v, this.o, k);
  this.A = null;
  this.J = false;
}
F(hD, T);
hD.prototype.start = function () {
  HC(this.j);
};
function iD(a, c) {
  var e = new VC(a.H, c),
    f = jD(a, e)
      .then(function () {
        return checkCacheUpdateAccount(a, e);
      })
      .then(function (h) {
        if (h)
          return a.N.get(c).then(function (k) {
            return HC(a.j)
              .then(function () {
                return eD(a.M, c);
              })
              .catch(function (l) {
                var p = {};
                throw Lk(
                  l,
                  ((p.serviceworker_cacheCleanupErrorReason = "pre_update_manifest_cleanup"), p),
                );
              })
              .then(function () {
                return updateManifestBatchAndCleanup(a, c, k, e);
              })
              .catch(function (l) {
                if (l instanceof Error && mD(a, l))
                  return nD(a, l).then(function () {
                    return updateManifestBatchAndCleanup(a, c, k, e);
                  });
                throw l;
              });
          });
      }),
    g = rr(27e4).then(function () {
      e.aa = true;
      var h = Error("bd");
      fC(h);
      throw h;
    });
  return Promise.race([f, g])
    .then(function () {
      a.A = null;
    })
    .catch(function (h) {
      a.A = Jk(h);
    })
    .then(function () {
      return oD(a, !a.A, e);
    })
    .then(function () {
      return Promise.resolve(a.H.zb())
        .catch(function (h) {
          HB(a.o, Jk(h));
        })
        .then(function () {
          if (a.A) throw a.A;
        });
    });
}
/** updateManifestBatchAndCleanup（原 lD）。
 * 先等待各更新结束，处理版本/资源清理，再传播更新 Promise 的失败。
 */
function updateManifestBatchAndCleanup(cacheCoordinator, manifestGroup, manifests, updateState) {
  updateState.U = true;
  for (var g = [], h = 0; h < manifests.length; h++) {
    var k = new ManifestCacheUpdater(
      cacheCoordinator.j,
      cacheCoordinator.v,
      manifests[h],
      cacheCoordinator.o,
      updateState,
      cacheCoordinator.B,
    );
    g.push(k.update());
  }
  return Promise.allSettled(g)
    .then(function () {
      if (manifests.length) return eD(cacheCoordinator.M, manifestGroup, manifests);
    })
    .catch(function (l) {
      var p = {};
      HB(
        cacheCoordinator.o,
        Jk(l),
        ((p.serviceworker_cacheCleanupErrorReason = "post_update_manifest_cleanup"), p),
      );
    })
    .then(function () {
      return pD(cacheCoordinator);
    })
    .catch(function (l) {
      var p = {};
      HB(
        cacheCoordinator.o,
        Jk(l),
        ((p.serviceworker_cacheCleanupErrorReason = "archive_cleanup"), p),
      );
    })
    .then(function () {
      return Promise.all(g);
    });
}
function mD(a, c) {
  return U(a.B, "docs-sw-efcr")
    ? c.message.includes("Unexpected internal error.")
    : c.message == "Unexpected internal error.";
}
/** checkCacheUpdateAccount（原 kD）。
 * 更新前比对本地账号与启动配置，记录不一致状态。
 */
function checkCacheUpdateAccount(cacheCoordinator, updateState) {
  return IB(cacheCoordinator.D).then(function (e) {
    var f = JB(e, Hl(cacheCoordinator.B, "docs-offline-lsuid"));
    if (!f) {
      var g = Hl(cacheCoordinator.B, "docs-offline-lsuid");
      updateState.B = true;
      updateState.R = e.length;
      e.length > 0 && ((updateState.j = g), (updateState.A = e[0].X()));
    }
    return f;
  });
}
function nD(a, c) {
  return qD(a, c).then(function () {
    return deleteManagedCaches(a);
  });
}
function qD(a, c) {
  var e = {},
    f =
      ((e.serviceworker_invalidCacheType = "unexpected_internal_error"),
      (e.serviceworker_runDeleteAll = true),
      e);
  e = Du(a.B).then(function (h) {
    f.storageAvailable = h.j;
    f.storageUsage = Cu(h);
  });
  var g = sD(a).then(function (h) {
    f.serviceworker_numCompleteCaches = h.filter(function (k) {
      return k.na();
    }).length;
    f.serviceworker_numIncompleteCaches = h.filter(function (k) {
      return !k.na();
    }).length;
  });
  return Promise.allSettled([e, g]).then(function () {
    HB(a.o, c, f);
  });
}
/** deleteManagedCaches（原 rD）。
 * 删除受管理缓存；这是破坏性控制面操作，不应在真实账号中随意调用。
 */
function deleteManagedCaches(cacheCoordinator) {
  return sB(cacheCoordinator.v, cacheCoordinator.j).then(function (c) {
    c = c.map(function (e) {
      return cacheCoordinator.j.delete(e);
    });
    return tD(c);
  });
}
function uD(a, c) {
  return a.j
    .open(lB(a.v))
    .then(function (e) {
      return e.match(c);
    })
    .then(function (e) {
      return e || null;
    });
}
function vD(a, c) {
  return sB(a.v, a.j).then(function (e) {
    e = e.map(function (f) {
      return a.j.open(f).then(function (g) {
        return wD(g, c);
      });
    });
    return xD(e);
  });
}
function yD(a, c) {
  return sB(a.v, a.j).then(function (e) {
    e = e.map(function (f) {
      return a.j.open(f).then(function (g) {
        return g.match(c);
      });
    });
    return xD(e);
  });
}
function pD(a) {
  return zB(a.v, a.j).then(function (c) {
    return a.j.open(lB(a.v)).then(function (e) {
      return mB(e).then(function (f) {
        var g = f || new $A();
        return e
          .keys()
          .then(function (h) {
            return zD(e, h, g).then(function () {
              return AD(a, e, h, g, c);
            });
          })
          .then(function () {
            return nB(e, g);
          });
      });
    });
  });
}
function zD(a, c, e) {
  c = c.map(function (f) {
    return f.url;
  });
  return aB(e, c) ? nB(a, e) : Promise.resolve();
}
function AD(a, c, e, f, g) {
  return a.I.clients.matchAll({ includeUncontrolled: true }).then(function (h) {
    h =
      h.filter(function (k) {
        return k.url.startsWith(a.I.registration.scope);
      }).length == 0;
    return BD(c, e, f, g, h);
  });
}
function BD(a, c, e, f, g) {
  return tD(
    c.map(function (h) {
      var k = e.j[h.url] || null;
      k = k && ni(Ge(k, 2, void 0, void 0, Pd));
      if ((k == null || k + 18144e5 < Date.now() || g) && !f[h.url])
        return (delete e.j[h.url], a.delete(h));
    }),
  ).then(u());
}
function xD(a) {
  return new Promise(function (c, e) {
    var f = false;
    Promise.all(
      a.map(function (g) {
        return g.then(function (h) {
          h && !f && ((f = true), c(h));
        });
      }),
    )
      .then(function () {
        f || c(null);
      })
      .catch(function (g) {
        g instanceof Error ? e(Error("dd`" + g.message, { cause: g })) : e(Error("ed"));
      });
  });
}
function tD(a) {
  return Promise.allSettled(a).then(function () {
    return Promise.all(a);
  });
}
function wD(a, c) {
  return Promise.all([AC(a), AB(a), a.match(c, void 0)]).then(function (e) {
    var f = e[1],
      g = e[2];
    return e[0] && g ? new EC(c instanceof Request ? c.url : c, g, f || new eB()) : null;
  });
}
function sD(a) {
  return xB(a.v, a.j, false);
}
function jD(a, c) {
  c.F = Date.now();
  return U(a.B, "docs-sw-ecus")
    ? Promise.resolve(Iv(a.D))
        .then(function (e) {
          if (e) {
            var f = e.j;
            return CD(f).then(function (g) {
              var h = Tn(g, a.C),
                k = h.lastAttemptStartTimestamp;
              h = h.lastAttemptEndTimestamp;
              k && (!h || k > h) && HB(a.o, Error("fd"));
              Un(g, a.C);
              return new Promise(function (l) {
                f.write([g], 79, l);
              });
            });
          }
          HB(a.o, Error("gd"));
        })
        .catch(function (e) {
          Jk(e);
          HB(a.o, Error("hd", { cause: e }));
        })
    : Promise.resolve();
}
function oD(a, c, e) {
  a.J = true;
  return U(a.B, "docs-sw-ecus")
    ? Promise.resolve(Iv(a.D))
        .then(function (f) {
          if (f) {
            var g = f.j;
            return Promise.all([CD(g), sD(a)]).then(function (h) {
              h = I(h);
              var k = h.next().value;
              var l = h.next().value;
              YC(e, k, a.C, c, f);
              h = l
                .filter(function (p) {
                  return p.na();
                })
                .map(function (p) {
                  return p.xa;
                })
                .sort();
              l = l
                .filter(function (p) {
                  return !p.na();
                })
                .map(function (p) {
                  return p.xa;
                })
                .sort();
              Vn(k, a.C, c);
              Sn(k, a.C, h, l);
              return new Promise(function (p) {
                g.write([k], 79, p);
              });
            });
          }
          HB(a.o, Error("gd"));
        })
        .catch(function (f) {
          Jk(f);
          HB(a.o, Error("id", { cause: f }));
        })
        .then(function () {
          return WC(e, !a.A);
        })
    : (WC(e, !a.A), Promise.resolve());
}
function CD(a) {
  var c = a.j.Sb();
  return new Promise(function (e) {
    Rv(c, function (f) {
      e(f != null ? f : new Pn(true, c.ha));
    });
  });
}
function DD() {
  this.j = new CommonManifestUrlProvider();
}
DD.prototype.get = function (a) {
  return getCommonManifestUrls(this.j).then(function (c) {
    c = c.map(function (e) {
      e.v.set("reason", a);
      e = new Request(e.toString(), { credentials: "include" });
      return jC(e, 3, 0, null, false, false)
        .then(function (f) {
          return f.text();
        })
        .then(function (f) {
          if (!f) throw Error("jd");
          if (f.lastIndexOf(")]}'\n", 0) != 0) throw Error("kd");
          return dB(f.substr(5));
        })
        .catch(function (f) {
          f = Jk(f);
          gC(f) && fC(f);
          throw f;
        });
    });
    return Promise.all(c);
  });
};
/** CommonManifestUrlProvider（原 ED）。
 * 读取本地用户信息及调试开关，为公共资源清单提供入口。
 */
function CommonManifestUrlProvider() {
  var a = Hv;
  if (c === void 0) {
    var c = new oq(K.location.href);
    c =
      c.v.get("Debug") == "true" ||
      c.v.get("debug") == "true" ||
      c.v.get("debug") == "pretty" ||
      c.v.get("jsmode") == "DU";
  }
  this.j = a;
  this.o = c;
}
/** getCommonManifestUrls（原 FD）。
 * 为当前账号构造 /offline/common/cachemanifest；无用户时返回空列表。
 */
function getCommonManifestUrls(manifestProvider) {
  return Promise.resolve(Iv(manifestProvider.j)).then(function (c) {
    if (!c) return [];
    var e = new vq();
    e.add("ouid", c.o.X());
    manifestProvider.o && e.add("Debug", true);
    c = K.location.href.match(Rk);
    return [sq(rq(new oq(Qk(c[1], c[2], c[3], c[4])), "/offline/common/cachemanifest"), e)];
  });
}
function GD(a, c, e) {
  if (a == null && !e) throw Error("ld");
  this.Pa = a;
  this.j = c;
  this.Ua = e || null;
  this.gb = null;
}
function HD(a, c) {
  a.gb = a.gb ? Lk(c, { serviceworker_multipleFetchErrors: "true" }) : c;
}
function ID(a, c, e) {
  a = new GD(null, a, c);
  HD(a, e);
  return a;
}
/** CommonCacheFetchHandler（原 JD）。
 * 优先读取公共离线资源；extension/frame 有独立的后处理例外。
 */
function CommonCacheFetchHandler(a, c, e, f) {
  var g = mv;
  this.o = a;
  this.A = c;
  this.j = g;
  this.B = e || null;
  this.v = f || null;
}
CommonCacheFetchHandler.prototype.fetch = function (a) {
  var c = this;
  return normalizeCommonCacheKey(a)
    .then(function (e) {
      return readCommonCachedResponse(c, a, e);
    })
    .then(function (e) {
      return c.B == null || a.j == null || a.j.j == "/offline/extension/frame" || e.Ua != null
        ? e
        : MD(c, a, e, c.B);
    });
};
/** normalizeCommonCacheKey（原 KD）。
 * 仅保留 ND 白名单参数；不能直接删除 ouid 或把账号缓存混用。
 */
function normalizeCommonCacheKey(requestContext_2) {
  var c = requestContext_2.o.url;
  if (requestContext_2.j && requestContext_2.j.v) {
    c = COMMON_CACHE_QUERY_ALLOWLIST;
    requestContext_2 = Dq(requestContext_2.o.url);
    for (var e = requestContext_2.v, f = new vq(), g = 0; g < c.length; g++) {
      var h = c[g];
      Hq(e, h) && f.add(h, e.get(h, ""));
    }
    sq(requestContext_2, f);
    c = Promise.resolve(requestContext_2.toString());
  } else c = Promise.resolve(c);
  return c;
}
/** readCommonCachedResponse（原 LD）。
 * 区分未缓存、资源损坏与有效响应，不把任何命中都当成功。
 */
function readCommonCachedResponse(cacheHandler, requestContext_2, cacheKey) {
  return OD(cacheHandler, cacheKey, requestContext_2).then(function (f) {
    var g = requestContext_2.B;
    g.j || (g.j = false);
    if (!f && TB(requestContext_2)) return PD(cacheHandler, cacheKey, requestContext_2.j);
    if (!f) return new GD(null, "cache-storage", "resource-not-cached");
    try {
      pB(f, false);
    } catch (h) {
      return (
        (f = new GD(f, "cache-storage", "corrupted-resource")),
        (g = {}),
        HD(f, Lk(h, ((g.serviceworker_isResourceFromServer = "false"), g))),
        f
      );
    }
    return new GD(f, "cache-storage");
  });
}
function OD(a, c, e) {
  return e.v
    ? uD(a.o, c)
    : vD(a.o, c).then(function (f) {
        return f ? f.j : null;
      });
}
function MD(a, c, e, f) {
  if (e.Pa == null) return Promise.resolve(e);
  var g = Hl(a.j, "buildLabel");
  return DB().then(function (h) {
    if (h && h === g) return e;
    var k = e.Pa.headers.get("Date");
    return k && new Date().getTime() - new Date(k).getTime() < f
      ? e
      : QD(a, c, h, k, f).then(function () {
          return e;
        });
  });
}
function QD(a, c, e, f, g) {
  var h = c.j;
  return a.v && h.j == "/offline/iframeapi"
    ? IB(a.A)
        .then(function (k) {
          var l = {};
          l.actionPath = h.j;
          l.numUsers = k.length;
          k.length == 1 && (l.storageUser = k[0]);
          k = JB(k, Hl(a.j, "docs-offline-lsuid"));
          l.userAuthenticated = k;
          k || ((l.currentOuid = Hl(a.j, "docs-offline-lsuid")), (l.nativeUrl = c.o.url));
          l.cacheBuildLabel = e;
          l.dateHeader = f;
          l.maxAgeMs = g;
          a.v.info(Error("md"), l);
        })
        .catch(function (k) {
          a.v.info(Error("nd"), { cause: String(k) });
        })
    : Promise.resolve();
}
function PD(a, c, e) {
  var f = yD(a.o, c),
    g = sD(a.o),
    h = Promise.resolve(Iv(a.A)),
    k = Du(a.j).catch(A(null)),
    l = U(a.j, "docs-sw-ecus"),
    p = Gl(a.j, "docs-sw-edubnc");
  a = K.caches.keys();
  return Promise.all([f, g, h, k, a]).then(function (q) {
    var r = I(q);
    var x = r.next().value;
    var y = r.next().value;
    q = r.next().value;
    var z = r.next().value;
    var B = r.next().value;
    r = new By(c);
    Dy(r, q);
    Ey(r, y);
    y = {};
    Lk(
      r,
      ((y.trackingRolloutTimestamp = p),
      (y.serviceworker_hadAnyCacheMatch = !!x),
      (y.serviceworker_cacheKeys = B.join(",")),
      (y.serviceworker_cacheKeysLength = B.length),
      y),
    );
    z && Hy(r, z);
    x = null;
    if (e == null ? 0 : e.o) x = CB(e.o);
    else if (e == null ? 0 : e.v) x = "offlinecommon";
    return l && x
      ? Fy(r, x, q).then(function (G) {
          return ID("cache-storage", "resource-not-cached", G);
        })
      : ID("cache-storage", "resource-not-cached", r);
  });
}
/** COMMON_CACHE_QUERY_ALLOWLIST（原 ND）。
 * 动作资源缓存键允许保留的查询参数。
 */
var COMMON_CACHE_QUERY_ALLOWLIST = ["ouid", "Debug"];
function RD(a) {
  this.j = a;
}
RD.prototype.X = w("j");
function SD(a) {
  this.G = M(a);
}
F(SD, Q);
function TD(a) {
  this.G = M(a);
}
F(TD, Q);
function UD(a) {
  this.G = M(a);
}
F(UD, Q);
function VD(a) {
  return kf(a, 3, Fe);
}
function WD() {
  this.o = this.j = null;
}
WD.prototype.initialize = function (a, c) {
  this.j = a;
  this.o = c;
  return this;
};
function XC(a) {
  var c = cf(a.j, wm, 5);
  c == null && ((c = new wm()), N(a.j, wm, 5, c));
  return c;
}
function XD(a) {
  jf(a.j, 10);
  jf(a.j, 6) != null || ni(Ge(a.j, 10, void 0, void 0, Pd));
  if (VD(cf(a.j, UD, 8)) == 2 && jf(a.j, 13) != null) {
    var c = cf(a.j, UD, 8);
    c = cf(c, SD, 2);
    jf(c, 2);
  }
  var e = cf(a.j, wm, 5);
  e != null && ((c = a.j), (e = e.clone()), N(c, wm, 5, e));
  return a.j;
}
function YD() {
  this.j = {};
  this.v = {};
  this.o = null;
}
function ZD(a) {
  this.G = M(a);
}
F(ZD, Q);
function $D(a) {
  this.G = M(a);
}
F($D, Q);
function aE(a) {
  this.G = M(a);
}
F(aE, Q);
function bE(a) {
  this.G = M(a);
}
F(bE, Q);
bE.prototype.ya = function (a) {
  return vf(this, 1, a);
};
function cE(a) {
  this.G = M(a);
}
F(cE, Q);
function dE(a) {
  this.G = M(a);
}
F(dE, Q);
function eE(a) {
  this.G = M(a);
}
F(eE, Q);
function fE(a) {
  this.G = M(a);
}
F(fE, Q);
function gE(a) {
  return cf(a, dE, 1);
}
function hE() {
  this.j = new bE();
  this.A = null;
  this.B = new aE();
  wf(this.B, 1, 6);
  this.v = this.o = null;
}
hE.prototype.ya = function (a) {
  Ge(this.j, 1, void 0, void 0);
  this.j.ya(a);
  return this;
};
function iE(a) {
  a.A == null && (a.A = new fE());
  return a.A;
}
function jE(a) {
  a.v == null && (a.v = new $D());
  return a.v;
}
function kE(a) {
  Qd(Ge(a.j, 1, void 0, void 0)) != null && kf(a.j, 6) != null && pf(a.j, 6);
}
function Bv(a) {
  this.G = M(a);
}
F(Bv, Q);
function lE() {
  T.apply(this, arguments);
}
F(lE, T);
D = lE.prototype;
D.rb = u();
D.lb = function () {
  var a = new WD(),
    c = new Bv();
  a.initialize(c, new YD());
  return a;
};
D.Ub = function () {
  return new hE();
};
D.vd = u();
D.zb = function () {
  return cj();
};
D.ud = A(false);
function mE() {}
mE.prototype.j = u();
function nE() {
  WD.call(this);
}
F(nE, WD);
var oE = new RD("high_frequency_builder");
function pE(a, c, e) {
  a = new pr(a);
  il(e, a);
  var f = new wr(e);
  il(e, f);
  yr(f, a, "tick", c);
  a.start();
}
function qE() {
  WD.call(this);
}
F(qE, WD);
function rE(a, c, e) {
  var f = Date.now() * 1e3;
  if (0 == c) {
    c = new UD();
    var g = new TD();
    g = uf(g, 1, f);
    N(c, TD, 1, g);
    wf(c, 3, 1);
    N(a.j, UD, 8, c);
    uf(a.j, 12, e);
    uf(a.j, 13, e);
    uf(a.j, 4, f);
    uf(a.j, 3, e);
  } else
    1 == c &&
      ((c = new UD()),
      (g = new SD()),
      (f = uf(g, 1, f)),
      N(c, SD, 2, f),
      wf(c, 3, 2),
      N(a.j, UD, 8, c),
      uf(a.j, 12, e),
      uf(a.j, 3, e));
  return a;
}
var sE = new RD("system_builder");
function tE(a, c) {
  if (c && a in c) return a;
  a = "webkit" + Pk(a);
  return c === void 0 || a in c ? a : null;
}
function uE() {
  Lq.call(this, "visibilitychange");
}
F(uE, Lq);
var vE = new WeakMap();
function wE(a) {
  function c(g) {
    g = I(g);
    g.next();
    g = na(g);
    return e(f, g);
  }
  var e = e === void 0 ? xE : e;
  var f = Na(a);
  return function () {
    var g = Ca.apply(0, arguments),
      h = this || K,
      k = vE.get(h);
    k || ((k = {}), vE.set(h, k));
    h = k;
    k = [this].concat(oa(g));
    g = c ? c(k) : k;
    if (Object.prototype.hasOwnProperty.call(h, g)) h = h[g];
    else {
      var l = I(k);
      k = l.next().value;
      l = na(l);
      k = a.apply(k, l);
      h = h[g] = k;
    }
    return h;
  };
}
function xE(a, c) {
  a = [a];
  for (var e = c.length - 1; e >= 0; --e) a.push(typeof c[e], c[e]);
  return a.join("\v");
}
function yE(a) {
  nr.call(this);
  a || (a = Za || (Za = new as()));
  this.j = a;
  if ((this.o = this.le())) this.A = Yq(this.j.j, this.o, Sa(this.ne, this));
}
Xa(yE, nr);
D = yE.prototype;
D.le = wE(function () {
  var a = this.qb(),
    c = this.Bb() != "hidden";
  if (a) {
    var e;
    c ? (e = "webkitvisibilitychange") : (e = "visibilitychange");
    a = e;
  } else a = null;
  return a;
});
D.Bb = wE(function () {
  return tE("hidden", this.j.j);
});
D.me = wE(function () {
  return tE("visibilityState", this.j.j);
});
D.qb = function () {
  return !!this.Bb();
};
D.ne = function () {
  var a = this.qb() ? this.j.j[this.me()] : null;
  a = new uE(!!this.j.j[this.Bb()], a);
  this.dispatchEvent(a);
};
D.O = function () {
  gr(this.A);
  yE.qa.O.call(this);
};
function zE(a, c) {
  T.call(this);
  this.o = a;
  this.j = new yE(c);
  il(this, this.j);
  this.v = new wr(this);
  il(this, this.v);
  this.j.qb() && yr(this.v, this.j, "visibilitychange", this.A);
}
F(zE, T);
zE.prototype.A = function () {
  if (this.o.ud()) {
    var a = this.j;
    a = !!a.j.j[a.Bb()];
    a = this.o.lb(a ? 102001 : 102e3, 0);
    this.o.rb(a);
  }
};
function AE(a, c, e) {
  e = e === void 0 ? false : e;
  T.call(this);
  this.j = a;
  this.o = c;
  il(this, this.o);
  this.v = e;
}
F(AE, T);
D = AE.prototype;
D.rb = function (a) {
  var c = this.j;
  uf(a.j, 6, c.v);
  c.A = true;
  a = XD(a);
  c.j.add(a);
  c = this.o;
  c.j.j.j.length >= 3 && c.o.o();
};
D.lb = function (a, c) {
  a = rE(BE(this.j, a), c, this.j.F++);
  c == 1 && ((c = this.j), VD(cf(a.j, UD, 8)), c.C.add(a));
  return a;
};
D.Ub = function () {
  return this.j.o;
};
D.vd = function () {
  var a = this.j,
    c = CE(a, 716);
  DE(a, c);
  c = XD(c);
  a.j.add(c);
  a.K = true;
  a.D = true;
  this.o.initialize();
  this.o.o.o();
  this.v && new zE(this);
};
D.zb = function () {
  this.o.A();
  return gj(Array.from(this.o.v)).then();
};
D.ud = function () {
  var a = this.j;
  return a.K && a.D && true;
};
function EE(a, c, e) {
  T.call(this);
  this.C = e != null ? a.bind(e) : a;
  this.B = c;
  this.v = null;
  this.A = false;
  this.j = null;
}
F(EE, T);
EE.prototype.o = function (a) {
  this.v = arguments;
  this.j ? (this.A = true) : FE(this);
};
EE.prototype.stop = function () {
  this.j && (K.clearTimeout(this.j), (this.j = null), (this.A = false), (this.v = null));
};
EE.prototype.O = function () {
  T.prototype.O.call(this);
  this.stop();
};
function FE(a) {
  a.j = qr(function () {
    a.j = null;
    a.A && ((a.A = false), FE(a));
  }, a.B);
  var c = a.v;
  a.v = null;
  a.C.apply(null, c);
}
function GE(a, c, e, f, g) {
  T.call(this);
  this.j = a;
  this.D = c;
  this.o = new EE(this.A, 3e3, this);
  this.v = new Set();
  this.B = f;
  this.C = g || 6e4;
}
F(GE, T);
GE.prototype.initialize = function () {
  pE(this.C, this.o.o, this.o);
  pE(36e5, this.H, this);
};
GE.prototype.A = function () {
  var a = this;
  if (this.j.j.j.length != 0 && (!this.B || this.j.A)) {
    var c = HE(this.j),
      e = this.D.j(c);
    e &&
      (ij(e, function () {
        return void a.v.delete(e);
      }),
      this.v.add(e));
  }
};
GE.prototype.H = function () {
  var a = this.j,
    c = CE(a, 1153);
  c = XD(c);
  a.j.add(c);
  this.o.o();
};
function IE() {}
IE.prototype.Hd = function () {
  return new nE();
};
function JE() {
  this.j = [];
}
JE.prototype.add = function (a) {
  this.j.push(a);
};
function KE() {
  this.j = {};
}
KE.prototype.add = function (a) {
  VD(cf(a.j, UD, 8));
  var c = oi(nf(a.j, 12));
  this.j[c] = a;
};
KE.prototype.remove = function (a) {
  delete this.j[a];
};
function LE(a) {
  this.G = M(a, 500);
}
F(LE, Q);
function ME() {
  var a = NE.j;
  this.o = NE.o;
  this.H = a;
  this.F = 1;
  this.B = this.v = null;
  this.C = new KE();
  this.j = new JE();
  this.D = this.K = this.A = false;
}
function BE(a, c) {
  a = new WD().initialize(new Bv(), a.H);
  var e = a.o.j[sE.X()].Hd();
  e.initialize(a.j, a.o);
  uf(e.j, 10, c);
  return e;
}
function HE(a) {
  var c = a.j,
    e = c.j;
  c.j = [];
  c = new LE();
  var f = a.o.j.clone();
  c = N(c, bE, 2, f);
  f = a.o;
  kE(f);
  (f = f.A ? f.A.clone() : null) && N(c, fE, 5, f);
  var g;
  f = a.o;
  for (var h, k = e.length - 1; k >= 0; k--) {
    var l = cf(e[k], wm, 5);
    if (l && cf(l, bm, 1)) {
      l = cf(l, bm, 1);
      Ad(Ge(l, 12)) != null && g === void 0 && (g = lf(l, 12));
      l = cf(l, $l, 20);
      if (l !== void 0 && h === void 0) {
        h = new ZD();
        var p = Ad(Ge(l, 2, void 0, Fe));
        p !== void 0 && sf(h, 2, p);
        l = Ad(Ge(l, 1, void 0, Fe));
        l !== void 0 && sf(h, 1, l);
      }
      if (g !== void 0 && h !== void 0) break;
    }
  }
  f = f.v ? f.v.clone() : null;
  if (g !== void 0 || h !== void 0) {
    f || (f = new $D());
    g !== void 0 && sf(f, 6, g);
    h !== void 0 && N(f, ZD, 13, h);
  }
  (g = f) && N(c, $D, 3, g);
  a = a.o.B.clone();
  N(c, aE, 4, a);
  ff(c, Bv, 1, e);
  return c;
}
function CE(a, c) {
  var e = rE(BE(a, c), 0, a.F++);
  var f = a.C;
  var g = Object.keys(f.j);
  if (g.length == 0) f = null;
  else {
    for (var h = [], k = 0; k < g.length; k++) {
      var l = Number(g[k]),
        p = f.j[l],
        q = new jm();
      l = uf(q, 1, l);
      p = Ge(p.j, 10, void 0, void 0, Pd);
      p = uf(l, 2, p);
      h.push(p);
    }
    f = h;
  }
  c != 716 &&
    ((c = a.B),
    uf(e.j, 6, a.v),
    (g = new km()),
    (c = uf(g, 1, c)),
    f && hf(c, 2, jm, f),
    (f = XC(e)),
    N(f, km, 3, c));
  DE(a, e);
  return e;
}
function DE(a, c) {
  a.v = ni(Ge(c.j, 12, void 0, void 0, Pd));
  c = cf(c.j, UD, 8);
  c = cf(c, TD, 1);
  c = Ge(c, 1, void 0, void 0, Pd);
  a.B = ni(c);
}
function OE() {}
OE.prototype.Hd = function () {
  return new qE();
};
function PE() {
  this.j = this.o = null;
}
function QE() {
  this.v = this.A = null;
  this.j = new hE();
  this.o = false;
}
QE.prototype.ya = function (a) {
  this.j.ya(a);
  return this;
};
function RE(a, c, e, f, g) {
  var h = Promise.resolve(null),
    k = Promise.resolve(null);
  c &&
    ((a = Promise.resolve(wy(a))),
    (h = a.then(function (l) {
      return SE(l, c);
    })),
    (k = a.then(function (l) {
      return TE(l, c);
    })));
  return Promise.all([h, k]).then(function (l) {
    l = I(l);
    var p = l.next().value;
    var q = l.next().value;
    l = e.lb(100003, 0);
    var r = new vm(),
      x = new um();
    N(r, um, 1, x);
    var y = XC(l);
    N(y, vm, 50, r);
    vf(x, 1, f);
    x = new qm();
    N(r, qm, 2, x);
    (r = K.navigator.connection) && r.effectiveType && wf(x, 3, bv(r.effectiveType));
    r = new sm();
    g != null &&
      ((x = new Ev(g)),
      N(r, im, 1, x.o),
      (x = bl(g, "dods")),
      (x = aq(x)) && wf(r, 2, x),
      (x = bl(g, "eops")),
      (x = !x || (x != "1" && x != "0") ? null : x == "1"),
      x != null && sf(r, 6, x),
      (x = bq(g)),
      x.length && gf(r, 4, x),
      p != null && wf(r, 3, p),
      q != null && q.length && hf(r, 5, am, q));
    p = XC(l);
    p = cf(p, vm, 50);
    N(p, sm, 5, r);
    e.rb(l);
    return e.zb();
  });
}
function SE(a, c) {
  return Promise.resolve(Lj(op(a.j.sd(), c))).then(function (e) {
    return e != null ? e.j : null;
  });
}
function TE(a, c) {
  return Promise.resolve(Lj(fp(a.j.rd(), c))).then(function (e) {
    return e.map(function (f) {
      var g = new am();
      g = tf(g, 2, f.j);
      return wf(g, 1, f.o);
    });
  });
}
function UE(a) {
  var c = VE;
  this.j = new lE();
  this.v = c;
  this.o = a;
}
function WE() {
  this.j = this.o = null;
}
WE.prototype.start = u();
function XE(a, c, e, f, g, h, k) {
  this.o = a;
  this.D = c;
  this.A = f;
  this.C = g;
  this.v = h;
  this.B = new WE();
  this.F = Promise.resolve(k);
  this.j = e;
}
function YE(a) {
  return (a = a.o.headers.get("Sec-Purpose")) ? a.split(";").includes("prefetch") : false;
}
function ZE(a) {
  var c = new PA(),
    e = false,
    f = true;
  c = c === void 0 ? null : c;
  e = e === void 0 ? false : e;
  f = f === void 0 ? false : f;
  this.j = a;
  this.o = c;
  this.A = e;
  this.v = f;
}
function $E(a, c) {
  var e = c.request,
    f = e.mode == "navigate",
    g = a.o && (f || a.v) ? QA(e.url) : null,
    h = SB(e.url);
  h = new XE(
    e,
    function (p) {
      return c.waitUntil(p);
    },
    g,
    c.resultingClientId || c.clientId || null,
    f,
    h,
    a.A && Kb && bb() >= 0 ? c.preloadResponse : void 0,
  );
  var k = !!c.resultingClientId,
    l = ub() >= 72 && !k;
  !g ||
    g.v ||
    YE(h) ||
    (f && !l) ||
    ((f = Error("pd")),
    fC(f),
    WB(a.j, h, f, {
      serviceworker_hasResultingClientId: String(k),
      serviceworker_resultingClientId: String(c.resultingClientId),
      serviceworker_requestDestination: String(e.destination),
    }));
  return h;
}
function aF(a, c, e) {
  this.o = a;
  this.v = c;
  this.j = e;
}
aF.prototype.fetch = function (a) {
  var c = this;
  return bF(this.o, a).then(function (e) {
    return e.Ua != null
      ? bF(c.v, a).then(function (f) {
          var g = c.j;
          if (e.Ua == "document-not-available-locally") {
            var h = RE(g.o, a.j ? "" : null, g.j, a.A, a.o.url);
            g = cF(g.v, a, h);
            ub() >= 60 && a.D(g);
          }
          g = f.Pa == null || (f.Ua != null && e.Ua == null) ? true : false;
          g ? ((f = f.gb) && HD(e, f), (f = e)) : (g = e.gb) && HD(f, g);
          return f;
        })
      : e;
  });
};
function dF(a, c) {
  this.o = a;
  this.j = c;
}
dF.prototype.fetch = function (a) {
  var c = this,
    e = a.o;
  return a.F.then(function (f) {
    return f ? f : c.o.fetch(e);
  })
    .catch(function (f) {
      f = Jk(f);
      if (
        a.j &&
        K.navigator.onLine &&
        !f.message.includes(
          "The service worker navigation preload request was cancelled before 'preloadResponse' settled.",
        )
      ) {
        var g = {};
        WB(c.j, a, f, ((g.serviceworker_nativeFetchOrPreloadError = "true"), g));
      }
      return null;
    })
    .then(function (f) {
      var g = a.B;
      g.o || (g.o = false);
      f && K.performance.getEntriesByName(a.o.url);
      return f ? new GD(f, "network") : new GD(null, "network", "offline");
    });
};
function eF(a, c) {
  if (c.request.method == "GET") {
    var e = $E(a.v, c);
    if (e.j || e.v) {
      var f = a.o.fetch(e),
        g = c.respondWith;
      a = a.j;
      e = fF(a, e, f);
      e = Promise.resolve(ru(a.o, e));
      g.call(c, e);
    }
  }
}
function gF() {
  var a = nv,
    c = hF,
    e = iF;
  this.v = jF;
  this.o = a;
  this.j = c;
  this.A = e;
}
function kF(a, c) {
  lF(a.A);
  var e = Promise.resolve()
    .then(function () {
      var f = a.v.registration.navigationPreload;
      if (f)
        return f.disable().catch(function (g) {
          return cC(a.j, Jk(g));
        });
    })
    .then(function () {
      return a.v.clients.claim();
    })
    .catch(function (f) {
      return cC(a.j, Jk(f));
    })
    .finally(function () {
      return Cr(a.o.C);
    });
  c.waitUntil(Promise.resolve(ru(a.o, e)));
}
function mF() {
  var a = nv,
    c = nF,
    e = hF,
    f = oF,
    g = pF;
  this.v = jF;
  this.B = a;
  this.A = c;
  this.o = e;
  this.j = f;
  this.F = g;
}
function qF(a, c) {
  var e = a.v.registration.active ? "reinstall" : "new_install",
    f = {},
    g = ((f.serviceworker_cacheUpdateReason = e), f),
    h = true,
    k = false;
  f = Promise.resolve()
    .then(u())
    .then(function () {
      if (a.F || e !== "reinstall")
        return (
          (g.serviceworker_cacheUpdateDuringSwInstall = "true"),
          iD(a.A, e).catch(function (l) {
            e === "new_install" && aC(a.o, Jk(l), "install", "info", g);
          })
        );
      g.serviceworker_cacheUpdateDuringSwInstall = "false";
      k = true;
    })
    .then(function () {
      return a.v.skipWaiting();
    })
    .catch(function (l) {
      ZB(a.o, Jk(l), g);
      h = false;
    })
    .then(function () {
      var l = a.j.lb(100008, 0),
        p = XC(l),
        q = new vm();
      var r = new tm();
      r = sf(r, 1, h);
      r = sf(r, 2, k);
      r = sf(r, 3, false);
      q = N(q, tm, 7, r);
      N(p, vm, 50, q);
      a.j.rb(l);
      if (!h) return Promise.reject(Error("qd"));
    });
  c.waitUntil(
    Promise.resolve(f).finally(function () {
      return Promise.all([Cr(a.B.C), a.j.zb()]);
    }),
  );
}
function rF(a) {
  this.j = a;
}
function sF(a) {
  this.G = M(a);
}
F(sF, Q);
sF.prototype.clearValue = function () {
  return Ie(this, 2);
};
function tF(a) {
  this.G = M(a);
}
F(tF, Q);
function uF(a, c) {
  return vf(a, 1, c);
}
function vF(a, c) {
  return ff(a, sF, 2, c);
}
function wF(a) {
  this.G = M(a);
}
F(wF, Q);
wF.prototype.getType = function () {
  return pf(this, 1);
};
function xF(a) {
  this.G = M(a);
}
F(xF, Q);
xF.prototype.Xa = function () {
  return of(this, 1);
};
function yF(a) {
  this.G = M(a);
}
F(yF, Q);
function zF(a) {
  this.G = M(a);
}
F(zF, Q);
/** registerCacheMessageHandler（原 AF）。
 * 按协议类型登记唯一处理器。
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
function MF(a, c) {
  VB(c, function (e) {
    var f = {},
      g;
    g = (g = e.A) ? ((g = a.o[g]) ? g.j : null) : null;
    g &&
      ((f.serviceworker_isColdStart = String(g.o())),
      (g = g.j().j),
      !e.C && g && (f.serviceworker_sourceActionPath = g.j));
    return f;
  });
}
function EF(a, c) {
  a.j || (a.j = c == 2 ? 3 : 4);
}
function lF(a) {
  a.j || (a.j = 5);
}
function fF(a, c, e) {
  return NF(e, c)
    .catch(function (f) {
      var g = {};
      g = ((g.error_at_top_level_fetch_handling = "true"), g);
      return ID("none", "redirect-skipped", Lk(f, g));
    })
    .then(function (f) {
      var g = f.Pa;
      if (g) {
        var h = f.gb;
        !h || (h instanceof By && c.v) || eC(a.j, c, f);
        return g;
      }
      return OF().then(function (k) {
        eC(a.j, c, f, k);
        return k;
      });
    });
}
function OF() {
  return Promise.resolve()
    .then(function () {
      return Promise.resolve(Response.error());
    })
    .catch(function () {
      return Response.error();
    });
}
function DF(a, c, e) {
  e = e.catch(function (f) {
    dC(a.j, Jk(f), c);
  });
  return Promise.resolve(ru(a.o, e));
}
function cF(a, c, e) {
  e = e.catch(function (f) {
    WB(a.j, c, Jk(f));
  });
  return Promise.resolve(ru(a.o, e));
}
function bF(a, c) {
  return a.fetch(c).catch(function (e) {
    return ID("none", "unexpected-error-from-fetcher", Jk(e));
  });
}
function NF(a, c) {
  return a.then(function (e) {
    if (e.Pa && e.Pa.redirected && c.o.redirect != "follow") throw Error("wd");
    return e;
  });
}
/** CommonWorkerEventBindings（原 PF）。
 * 连接浏览器生命周期、fetch 与 message 事件。
 */
function CommonWorkerEventBindings() {
  var a = jF,
    c = commonWorkerServices,
    e = new mF(),
    f = new gF(),
    g = RF,
    h = hF,
    k = iF;
  this.j = nv;
  this.o = a;
  this.B = c;
  this.H = e;
  this.A = f;
  this.I = g;
  this.v = k;
  MF(this.v, h);
  this.o.addEventListener("install", qu(this.j, this.D, this), false);
  this.o.addEventListener("fetch", qu(this.j, this.C, this), false);
  this.o.addEventListener("activate", qu(this.j, this.F, this), false);
  this.o.addEventListener("message", qu(this.j, this.K, this), false);
}
CommonWorkerEventBindings.prototype.D = function (a) {
  qF(this.H, a);
};
CommonWorkerEventBindings.prototype.F = function (a) {
  kF(this.A, a);
};
CommonWorkerEventBindings.prototype.K = function (a) {
  handleCommonWorkerMessage(this.I, a);
};
CommonWorkerEventBindings.prototype.C = function (a) {
  a.preloadResponse && a.preloadResponse.catch(u());
  eF(this.B, a);
};
var jF = self,
  SF = new Jt({ Re: jF });
SF.j = "same-origin";
Ot = SF;
var mv = ul(),
  TF = Hl(mv, "docs-sw-cache-prefix");
if (!TF) throw Error("xd");
var UF = Ul(),
  VF = (function (a, c, e, f) {
    var g = true;
    g = g === void 0 ? false : g;
    e = e === void 0 ? false : e;
    a = vu(uu(zu(yu(xu(new av(a, c)), g), e), c));
    f && (a.j = f);
    f = new cu(a);
    c = Hl(c, "buildLabel");
    /^[\s\xa0]*$/.test(c) || ((f.o.buildLabel = c), (f.o["build-label"] = c));
    f.o.locale = "en";
    mu(f, function () {
      return Date.now().toString();
    });
    return f;
  })("offline-sw", mv, U(mv, "docs-sw-ehnur"), UF);
VF.o.serviceworker_isServiceWorkerError = "true";
VF.o.serviceworker_type = "offlineCommonSW";
jF.registration &&
  ((VF.o.serviceworker_activeAtStart = jF.registration.active ? "true" : "false"),
  jF.registration.scope && (VF.o.serviceworker_scope = jF.registration.scope));
var nv = VF,
  WF = new Cm(),
  XF = Gl(mv, "docs-sw-ocswsr"),
  hF = new (function () {
    var a = nv,
      c = isNaN(XF) ? 1 : XF;
    c = c === void 0 ? null : c;
    this.j = a;
    this.v = [];
    this.A = mv;
    this.o = c;
  })(),
  VE = new (function () {
    this.j = hF;
    this.o = this.j.j;
  })(),
  YF = U(mv, "docs-eilttw"),
  ZF;
if (U(mv, "docs-eiltdw")) ZF = new Om();
else {
  var $F = new Xl(nv);
  Vm();
  var aG;
  aG = (Tm(), Sm);
  Um.length == 0 && (Um = "offlinemain.js");
  if (YF && Wm && (aG || Um !== "offlinemain.js") && $F) {
    var bG = fh("Ba`offlinemain.js`" + S(Um));
    pu($F.j, bG.L, null, false);
  }
  Wm = true;
  ZF = aG;
}
var Hv = new uy(nv, null, mv, WF, ZF, void 0, void 0, true),
  cG = new DD();
nv.o.sid = UF;
var dG,
  Av,
  ov = (function (a) {
    var c = U(a, "docs-offline-ecpl"),
      e = Hl(a, "docs-offline-ue");
    a = Hl(a, "gaia_session_id") ? Hl(a, "gaia_session_id") : "0";
    a = KA(
      LA(new JA(306, a), function () {
        return e ? $p([{ key: "e", value: e }]) : null;
      }),
    );
    a.v = true;
    c && (a.o = "https://jmt17.google.com/log");
    return MA(a);
  })(mv);
Av = new lv();
if (U(mv, "docs-eil")) {
  nv.o.impression_sid = UF;
  var eG;
  eG = new xv();
  var fG = new QE();
  fG.A = eG;
  fG.v = new mE();
  fG.o = true;
  var gG = fG.ya(UF),
    hG = gG.j;
  kf(hG.j, 6);
  wf(hG.j, 6, 128);
  var iG;
  kE(gG.j);
  var jG,
    NE,
    kG = new PE();
  kG.o = gG.j;
  NE = kG;
  NE.j == null && (NE.j = new YD());
  NE.j.j[sE.X()] = new OE();
  NE.j.j[oE.X()] = new IE();
  var lG = NE.j,
    mG,
    nG = NE.o,
    oG = iE(nG);
  if (!Ke(oG, dE, 1)) {
    var pG = iE(nG),
      qG = new dE();
    N(pG, dE, 1, qG);
  }
  mG = gE(iE(nG));
  lG.o = mG;
  for (var rG = gq(lG.v), sG = 0; sG < rG.length; sG++) rG[sG].j(lG.o);
  jG = new ME();
  iG = new AE(jG, new GE(jG, gG.A, gG.v, gG.o, null), false);
  var tG = iG.Ub(),
    uG = Hl(mv, "buildLabel");
  if (tG.o == null) {
    tG.o = new eE();
    var vG = iE(tG);
    N(vG, eE, 2, tG.o);
  }
  Ge(tG.o, 1, void 0, void 0);
  vf(tG.o, 1, uG);
  var wG = (function (a) {
      switch (a) {
        case "scary":
          return 3;
        case "canary":
          return 2;
        case "prod":
          return 1;
        default:
          return 0;
      }
    })(Hl(mv, "jobset")),
    xG = iE(tG);
  kf(xG, 4);
  var yG = iE(tG);
  wf(yG, 4, wG);
  var zG = kb(),
    AG = jE(tG);
  Ge(AG, 2, void 0, void 0);
  var BG = jE(tG);
  vf(BG, 2, zG);
  var CG = jE(tG);
  Ge(CG, 1, void 0, void 0);
  var DG = jE(tG);
  vf(DG, 1, "en");
  var EG = Date.now() * 1e3;
  jf(tG.j, 2);
  uf(tG.j, 2, EG);
  var FG,
    GG = new cE(),
    HG = !!Hl(mv, "docs-offline-lsuid");
  FG = sf(GG, 1, HG);
  var IG = gE(iE(tG));
  Ke(IG, cE, 20);
  var JG = gE(iE(tG));
  N(JG, cE, 20, FG);
  var KG;
  var LG = ul(),
    MG = LG.get("ilcm");
  if (MG == null) KG = null;
  else {
    var NG = ul();
    NG.get("ilcm") != null && U(NG, "icso") && Ul();
    var wv = MG.ei,
      vv = LG.get("buildLabel");
    KG = new uv();
  }
  var OG = KG;
  if (OG) {
    var PG,
      QG,
      RG = new pm(),
      SG = (PG = OG.o) != null ? PG : [];
    QG = gf(RG, 1, SG);
    var TG = iG.Ub(),
      UG = jE(TG);
    Ke(UG, pm, 10);
    var VG = jE(TG);
    N(VG, pm, 10, QG);
  }
  iG.vd();
  dG = iG;
} else dG = new lE();
var oF = dG,
  nF = new hD(jF, cG, TF, Hv, hF, oF, mv);
nF.start();
var iF = new (function () {
    Hl(mv, "buildLabel");
    Hl(mv, "jobset");
    this.o = {};
    this.j = null;
  })(),
  RF = new (function () {
    var a = iF;
    this.j = hF;
    this.v = VE;
    this.A = a;
    this.o = {};
  })(),
  WG = new UpdateCachesHandler(hF, nF);
registerCacheMessageHandler(
  registerCacheMessageHandler(
    registerCacheMessageHandler(
      registerCacheMessageHandler(registerCacheMessageHandler(RF, WG), new DeleteCachesHandler(nF)),
      new CacheUpdateStatusHandler(hF, nF, WG),
    ),
    new CacheLivenessHandler(),
  ),
  new BuildLabelHandler(mv),
);
/** commonWorkerServices（原 QF）。
 * 最终装配缓存优先与网络兜底策略。
 */
var commonWorkerServices = new (function () {
    var a = jF,
      c = hF,
      e = nF,
      f = Hv,
      g = nv;
    this.j = VE;
    var h = new UE(f),
      k = U(mv, "docs-sw-effts") ? 2592e6 : null;
    this.o = new aF(new CommonCacheFetchHandler(e, f, k, g), new dF(a, c), h);
    this.v = new ZE(c);
  })(),
  pF = bl(window.location.href, "oucvi") == "true";
new CommonWorkerEventBindings();
function _ModuleManager_initialize() {}
// Google Inc.

//# sourceMappingURL=offline_sw_bin_offline_main.sourcemap
