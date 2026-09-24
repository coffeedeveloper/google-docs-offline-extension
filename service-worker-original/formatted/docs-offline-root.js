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
var C,
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
      c != f && c != null && da(e, a, { configurable: !0, writable: !0, value: c });
    }
}
var ha;
if (typeof Object.setPrototypeOf == "function") ha = Object.setPrototypeOf;
else {
  var ia;
  a: {
    var ja = { a: !0 },
      ka = {};
    try {
      ka.__proto__ = ja;
      ia = ka.a;
      break a;
    } catch (a) {}
    ia = !1;
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
  a.pa = c.prototype;
}
function ma(a) {
  var c = 0;
  return function () {
    return c < a.length ? { done: !1, value: a[c++] } : { done: !0 };
  };
}
function G(a) {
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
  return a instanceof Array ? a : na(G(a));
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
  this.D = !1;
  this.v = null;
  this.C = void 0;
  this.j = 1;
  this.A = this.F = 0;
  this.K = this.o = null;
}
function sa(a) {
  if (a.D) throw new TypeError("f");
  a.D = !0;
}
J.prototype.L = function (a) {
  this.C = a;
};
function ta(a, c) {
  a.o = { zd: c, Fd: !0 };
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
  this.o = { xa: a };
  this.A < a ? ((this.j = a), (this.o = null)) : (this.j = this.A);
};
J.prototype.jumpThroughFinallyBlocks = J.prototype.R;
J.prototype.B = function (a, c) {
  this.j = c;
  return { value: a };
};
J.prototype.yield = J.prototype.B;
J.prototype.Y = function (a, c) {
  a = G(a);
  var e = a.next();
  ra(e);
  if (e.done) ((this.C = e.value), (this.j = c));
  else return ((this.v = a), this.B(e.value, c));
};
J.prototype.yieldAll = J.prototype.Y;
J.prototype.xa = function (a) {
  this.j = a;
};
J.prototype.jumpTo = J.prototype.xa;
J.prototype.S = function () {
  this.j = 0;
};
J.prototype.jumpToEnd = J.prototype.S;
J.prototype.O = function (a, c) {
  this.F = a;
  c != void 0 && (this.A = c);
};
J.prototype.setCatchFinallyBlocks = J.prototype.O;
J.prototype.U = function (a) {
  this.F = 0;
  this.A = a || 0;
};
J.prototype.setFinallyBlock = J.prototype.U;
J.prototype.V = function (a, c) {
  this.j = a;
  this.F = c || 0;
};
J.prototype.leaveTryBlock = J.prototype.V;
J.prototype.H = function (a) {
  this.F = a || 0;
  a = this.o.zd;
  this.o = null;
  return a;
};
J.prototype.enterCatchBlock = J.prototype.H;
J.prototype.I = function (a, c, e) {
  e ? (this.K[e] = this.o) : (this.K = [this.o]);
  this.F = a || 0;
  this.A = c || 0;
  this.o = null;
};
J.prototype.enterFinallyBlock = J.prototype.I;
J.prototype.M = function (a, c) {
  c = this.K.splice(c || 0)[0];
  (c = this.o = this.o || c)
    ? c.Fd
      ? (this.j = this.F || this.A)
      : c.xa != void 0 && this.A < c.xa
        ? ((this.j = c.xa), (this.o = null))
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
            return { value: f, done: !0 };
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
    if (!g.done) return ((a.j.D = !1), g);
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
      if (c) return ((a.j.D = !1), { value: c.value, done: !1 });
    } catch (e) {
      ((a.j.C = void 0), ta(a.j, e));
    }
  a.j.D = !1;
  if (a.j.o) {
    c = a.j.o;
    a.j.o = null;
    if (c.Fd) throw c.zd;
    return { value: c.return, done: !0 };
  }
  return { value: void 0, done: !0 };
}
function za(a) {
  this.next = function (c) {
    sa(a.j);
    a.j.v ? (c = xa(a, a.j.v.next, c, a.j.L)) : (a.j.L(c), (c = ya(a)));
    return c;
  };
  this.throw = function (c) {
    sa(a.j);
    if (a.j.v) {
      var e = a.j.v["throw"];
      if (e) var f = xa(a, e, c, a.j.L);
      else {
        c = a.j.v;
        a.j.v = null;
        try {
          (c["return"] && ((f = c["return"]()), ra(f)), ta(a.j, new TypeError("g")));
        } catch (g) {
          ta(a.j, g);
        }
        f = ya(a);
      }
    } else (ta(a.j, c), (f = ya(a)));
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
            return (la(c, e), !0);
          } catch (f) {
            return !1;
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
    da(this, "description", { configurable: !0, writable: !0, value: k });
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
    configurable: !0,
    writable: !0,
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
    this.C = !1;
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
        p || ((p = !0), q.call(l, r));
      };
    }
    var l = this,
      p = !1;
    return { resolve: k(this.K), reject: k(this.B) };
  };
  c.prototype.K = function (k) {
    if (k === this) this.B(new TypeError("j"));
    else if (k instanceof c) this.O(k);
    else {
      a: switch (typeof k) {
        case "object":
          var l = k != null;
          break a;
        case "function":
          l = !0;
          break a;
        default:
          l = !1;
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
    this.L();
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
    if (this.C) return !1;
    var k = fa.CustomEvent,
      l = fa.Event,
      p = fa.dispatchEvent;
    if (typeof p === "undefined") return !0;
    typeof k === "function"
      ? (k = new k("unhandledrejection", { cancelable: !0 }))
      : typeof l === "function"
        ? (k = new l("unhandledrejection", { cancelable: !0 }))
        : ((k = fa.document.createEvent("CustomEvent")),
          k.initCustomEvent("unhandledrejection", !1, !0, k));
    k.promise = this;
    k.reason = this.v;
    return p(k);
  };
  c.prototype.L = function () {
    if (this.o != null) {
      for (var k = 0; k < this.o.length; ++k) h.o(this.o[k]);
      this.o = null;
    }
  };
  var h = new e();
  c.prototype.O = function (k) {
    var l = this.A();
    k.pb(l.resolve, l.reject);
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
            } catch (I) {
              r(I);
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
    this.pb(p(k, q), p(l, r));
    return x;
  };
  c.prototype.catch = function (k) {
    return this.then(void 0, k);
  };
  c.prototype.pb = function (k, l) {
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
    this.C = !0;
  };
  c.resolve = f;
  c.reject = function (k) {
    return new c(function (l, p) {
      p(k);
    });
  };
  c.race = function (k) {
    return new c(function (l, p) {
      for (var q = G(k), r = q.next(); !r.done; r = q.next()) f(r.value).pb(l, p);
    });
  };
  c.all = function (k) {
    var l = G(k),
      p = l.next();
    return p.done
      ? f([])
      : new c(function (q, r) {
          function x(B) {
            return function (I) {
              y[B] = I;
              z--;
              z == 0 && q(y);
            };
          }
          var y = [],
            z = 0;
          do (y.push(void 0), z++, f(p.value).pb(x(y.length - 1), r), (p = l.next()));
          while (!p.done);
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
        for (var k = 0; k < h && e < g; ) if (f[e++] != c[k++]) return !1;
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
      p = G(p);
      for (var q; !(q = p.next()).done; ) ((q = q.value), this.set(q[0], q[1]));
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
      if (!a || !Object.seal) return !1;
      try {
        var p = Object.seal({}),
          q = Object.seal({}),
          r = new a([
            [p, 2],
            [q, 3],
          ]);
        if (r.get(p) != 2 || r.get(q) != 3) return !1;
        r.delete(p);
        r.set(q, 4);
        return !r.has(p) && r.get(q) == 4;
      } catch (x) {
        return !1;
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
    return f(p) && pa(p, k) && pa(p[k], this.j) ? delete p[k][this.j] : !1;
  };
  return c;
});
E("Map", function (a) {
  function c() {
    var l = {};
    return (l.ya = l.next = l.head = l);
  }
  function e(l, p) {
    var q = l[1];
    return Da(function () {
      if (q) {
        for (; q.head != l[1]; ) q = q.ya;
        for (; q.next != q.head; ) return ((q = q.next), { done: !1, value: p(q) });
        q = null;
      }
      return { done: !0, value: void 0 };
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
      l = G(l);
      for (var p; !(p = l.next()).done; ) ((p = p.value), this.set(p[0], p[1]));
    }
  }
  if (
    (function () {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
        return !1;
      try {
        var l = Object.seal({ x: 4 }),
          p = new a(G([[l, "s"]]));
        if (
          p.get(l) != "s" ||
          p.size != 1 ||
          p.get({ x: 4 }) ||
          p.set({ x: 4 }, "t") != p ||
          p.size != 2
        )
          return !1;
        var q = p.entries(),
          r = q.next();
        if (r.done || r.value[0] != l || r.value[1] != "s") return !1;
        r = q.next();
        return r.done || r.value[0].x != 4 || r.value[1] != "t" || !q.next().done ? !1 : !0;
      } catch (x) {
        return !1;
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
      : ((q.entry = { next: this[1], ya: this[1].ya, head: this[1], key: l, value: p }),
        q.list.push(q.entry),
        (this[1].ya.next = q.entry),
        (this[1].ya = q.entry),
        this.size++);
    return this;
  };
  g.prototype.delete = function (l) {
    l = f(this, l);
    return l.entry && l.list
      ? (l.list.splice(l.index, 1),
        l.list.length || delete this[0][l.id],
        (l.entry.ya.next = l.entry.next),
        (l.entry.next.ya = l.entry.ya),
        (l.entry.head = null),
        this.size--,
        !0)
      : !1;
  };
  g.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].ya = c();
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
    for (var q = this.entries(), r; !(r = q.next()).done; )
      ((r = r.value), l.call(p, r[1], r[0], this));
  };
  g.prototype[Symbol.iterator] = g.prototype.entries;
  var k = 0;
  return g;
});
E("Set", function (a) {
  function c(e) {
    this.j = new Map();
    if (e) {
      e = G(e);
      for (var f; !(f = e.next()).done; ) this.add(f.value);
    }
    this.size = this.j.size;
  }
  if (
    (function () {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
        return !1;
      try {
        var e = Object.seal({ x: 4 }),
          f = new a(G([e]));
        if (
          !f.has(e) ||
          f.size != 1 ||
          f.add(e) != f ||
          f.size != 1 ||
          f.add({ x: 4 }) != f ||
          f.size != 2
        )
          return !1;
        var g = f.entries(),
          h = g.next();
        if (h.done || h.value[0] != e || h.value[1] != e) return !1;
        h = g.next();
        return h.done || h.value[0] == e || h.value[0].x != 4 || h.value[1] != h.value[0]
          ? !1
          : g.next().done;
      } catch (k) {
        return !1;
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
          if (h === c || Object.is(h, c)) return !0;
        }
        return !1;
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
        return typeof c !== "number" ? !1 : !isNaN(c) && c !== Infinity && c !== -Infinity;
      };
});
E("Number.MAX_SAFE_INTEGER", A(9007199254740991));
E("Number.MIN_SAFE_INTEGER", A(-9007199254740991));
E("Number.isInteger", function (a) {
  return a
    ? a
    : function (c) {
        return Number.isFinite(c) ? c === Math.floor(c) : !1;
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
        for (var g = c.length; g > 0 && e > 0; ) if (f[--e] != c[--g]) return !1;
        return g <= 0;
      };
});
function Fa(a, c) {
  a instanceof String && (a += "");
  var e = 0,
    f = !1,
    g = {
      next: function () {
        if (!f && e < a.length) {
          var h = e++;
          return { value: c(h, a[h]), done: !1 };
        }
        f = !0;
        return { done: !0, value: void 0 };
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
E("String.prototype.matchAll", function (a) {
  return a
    ? a
    : function (c) {
        if (c instanceof RegExp && !c.global) throw new TypeError("t");
        var e = new RegExp(c, c instanceof RegExp ? void 0 : "g");
        c instanceof RegExp && (e.lastIndex = c.lastIndex);
        var f = this,
          g = !1,
          h = {
            next: function () {
              if (g) return { value: void 0, done: !0 };
              var k = e.exec(f);
              if (!k) return ((g = !0), { value: void 0, done: !0 });
              k[0] === "" && (e.lastIndex += 1);
              return { value: k, done: !1 };
            },
          };
        h[Symbol.iterator] = function () {
          return h;
        };
        return h;
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
  a.pa = c.prototype;
  a.prototype = new e();
  a.prototype.constructor = a;
  a.If = function (f, g, h) {
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
  this.j = !0;
}
Xa(Ya, Error);
Ya.prototype.name = "CustomError";
var Za;
function $a(a) {
  K.setTimeout(function () {
    throw a;
  }, 0);
}
function ab(a, c) {
  return a.lastIndexOf(c, 0) == 0;
}
var bb = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
function cb() {
  for (
    var a = 0,
      c = bb(String(db)).split("."),
      e = bb("58.0.3029.52").split("."),
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
        eb(h[1].length == 0 ? 0 : parseInt(h[1], 10), k[1].length == 0 ? 0 : parseInt(k[1], 10)) ||
        eb(h[2].length == 0, k[2].length == 0) ||
        eb(h[2], k[2]);
      h = h[3];
      k = k[3];
    } while (a == 0);
  }
  return a;
}
function eb(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
}
var fb = !!((Ja[0] >> 24) & 1),
  gb = !!((Ja[0] >> 19) & 1),
  hb = !!((Ja[0] >> 26) & 1),
  ib = !!(Ja[0] & 4096);
var jb = fb ? hb : Ha(610401301, !1),
  kb = fb ? gb || !ib : Ha(748402147, !0);
function lb() {
  var a = K.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var mb,
  nb = K.navigator;
mb = nb ? nb.userAgentData || null : null;
function ob(a) {
  if (!jb || !mb) return !1;
  for (var c = 0; c < mb.brands.length; c++) {
    var e = mb.brands[c].brand;
    if (e && e.indexOf(a) != -1) return !0;
  }
  return !1;
}
function pb(a) {
  return lb().indexOf(a) != -1;
}
function qb() {
  return jb ? !!mb && mb.brands.length > 0 : !1;
}
function rb() {
  return pb("Firefox") || pb("FxiOS");
}
function sb() {
  return qb()
    ? ob("Chromium")
    : ((pb("Chrome") || pb("CriOS")) && !(qb() ? 0 : pb("Edge"))) || pb("Silk");
}
function tb(a) {
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
function ub() {
  for (
    var a = lb(), c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), e = [], f;
    (f = c.exec(a));

  )
    e.push([f[1], f[2], f[3] || void 0]);
  a = tb(e);
  return sb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : "";
}
function vb() {
  if (qb()) {
    var a = mb.brands.find(function (c) {
      return c.brand === "Chromium";
    });
    if (!a || !a.version) return NaN;
    a = a.version.split(".");
  } else {
    a = ub();
    if (a === "") return NaN;
    a = a.split(".");
  }
  return a.length === 0 ? NaN : Number(a[0]);
}
function wb() {
  return pb("iPhone") && !pb("iPod") && !pb("iPad");
}
function xb() {
  return wb() || pb("iPad") || pb("iPod");
}
function yb(a, c) {
  return Array.prototype.indexOf.call(a, c, void 0);
}
function zb(a, c) {
  Array.prototype.forEach.call(a, c, void 0);
}
function Ab(a, c) {
  return Array.prototype.some.call(a, c, void 0);
}
function Bb(a, c) {
  c = yb(a, c);
  var e;
  (e = c >= 0) && Array.prototype.splice.call(a, c, 1);
  return e;
}
function Cb(a, c) {
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
function Db(a, c) {
  if (!La(a) || !La(c) || a.length != c.length) return !1;
  for (var e = a.length, f = Eb, g = 0; g < e; g++) if (!f(a[g], c[g])) return !1;
  return !0;
}
function Eb(a, c) {
  return a === c;
}
function Fb(a) {
  Fb[" "](a);
  return a;
}
Fb[" "] = u();
var Gb = rb(),
  Hb = wb() || pb("iPod"),
  Ib = pb("iPad"),
  Jb = pb("Android") && !(sb() || rb() || (qb() ? 0 : pb("Opera")) || pb("Silk")),
  Kb = sb(),
  Lb =
    pb("Safari") &&
    !(
      sb() ||
      (qb() ? 0 : pb("Coast")) ||
      (qb() ? 0 : pb("Opera")) ||
      (qb() ? 0 : pb("Edge")) ||
      (qb() ? ob("Microsoft Edge") : pb("Edg/")) ||
      (qb() ? ob("Opera") : pb("OPR")) ||
      rb() ||
      pb("Silk") ||
      pb("Android")
    ) &&
    !xb();
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
  if (e !== c.length) return !1;
  for (var f = 0; f < e; f++) if (a[f] !== c[f]) return !1;
  return !0;
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
        case 2:
          ((r = c[h + 1]), (q = e[(r & 15) << 2] || g));
        case 1:
          ((c = c[h]), (f[k] = e[c >> 2] + e[((c & 3) << 4) | (r >> 4)] + q + g));
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
    if (e.lastIndexOf(f, 0) !== 0) return !1;
    for (c = f.length; c < e.length; c++) if (e[c] !== "=") return !1;
    return !0;
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
  else if (!(c instanceof bc)) return !1;
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
var uc = rc("jas", void 0, !0),
  vc = rc(void 0, "0di"),
  wc = rc(void 0, "1oa"),
  xc = rc(void 0, "ijhc"),
  yc = rc(void 0, Symbol()),
  zc = rc(void 0, "0ub"),
  Ac = rc(void 0, "0ubs"),
  Bc = rc(void 0, "0actk"),
  Cc = rc("m_m", "Mf", !0),
  Dc = rc();
Math.max.apply(
  Math,
  oa(
    Object.values({
      kf: 1,
      gf: 2,
      df: 4,
      uf: 8,
      Ef: 16,
      qf: 32,
      Oe: 64,
      af: 128,
      Ye: 256,
      Bf: 512,
      Ze: 1024,
      bf: 2048,
      rf: 4096,
      lf: 8192,
    }),
  ),
);
var Ec = { oe: { value: 0, configurable: !0, writable: !0, enumerable: !1 } },
  Fc = Object.defineProperties,
  L = qc ? uc : "oe",
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
  return !Array.isArray(a) || a.length ? !1 : (a[L] | 0) & 1 ? !0 : !1;
}
var Rc = Object.freeze({}),
  Sc = Object.freeze({});
function Tc(a, c, e) {
  var f = c & 128 ? 0 : -1,
    g = a.length,
    h;
  if ((h = !!g))
    ((h = a[g - 1]), (h = h != null && typeof h === "object" && h.constructor === Object));
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
  a.Lf = !0;
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
  if (a.length > c.length) return !1;
  if (a.length < c.length || a === c) return !0;
  for (var e = 0; e < a.length; e++) {
    var f = a[e],
      g = c[e];
    if (f > g) return !1;
    if (f < g) return !0;
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
    var c = G(od(kd, ld));
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
      : ((c = G(od(a, c))), (a = c.next().value), (c = c.next().value), (a = "-" + pd(a, c)))
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
var ud = typeof BigInt === "function" ? BigInt.asIntN : void 0,
  vd = Number.isSafeInteger,
  wd = Number.isFinite,
  xd = Math.trunc;
function yd(a) {
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
      return !0;
    case "number":
      return wd(a);
    case "string":
      return Bd.test(a);
    default:
      return !1;
  }
}
function Dd(a) {
  if (!wd(a)) throw nc("enum");
  return a | 0;
}
function Ed(a) {
  return a == null ? a : wd(a) ? a | 0 : void 0;
}
function Fd(a) {
  if (typeof a !== "number") throw nc("int32");
  if (!wd(a)) throw nc("int32");
  return a | 0;
}
function Gd(a) {
  if (a == null) return a;
  if (typeof a === "string" && a) a = +a;
  else if (typeof a !== "number") return;
  return wd(a) ? a | 0 : void 0;
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
          return String(ud(64, a));
        default:
          return Jd(a);
      }
    case 1024:
      switch (e) {
        case "string":
          return Kd(a);
        case "bigint":
          return bd(ud(64, a));
        default:
          return Ld(a);
      }
    case 0:
      switch (e) {
        case "string":
          return Id(a);
        case "bigint":
          return bd(ud(64, a));
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
  else if (pc())
    ((a = BigInt(a)),
      (kd = Number(a & BigInt(4294967295)) >>> 0),
      (ld = Number((a >> BigInt(32)) & BigInt(4294967295))));
  else {
    c = +(a[0] === "-");
    ld = kd = 0;
    for (var e = a.length, f = c, g = ((e - c) % 6) + c; g <= e; f = g, g += 6)
      ((f = Number(a.slice(f, g))),
        (ld *= 1e6),
        (kd = kd * 1e6 + f),
        kd >= 4294967296 && ((ld += Math.trunc(kd / 4294967296)), (ld >>>= 0), (kd >>>= 0)));
    c && ((c = G(od(kd, ld))), (a = c.next().value), (c = c.next().value), (kd = a), (ld = c));
  }
  return rd();
}
function Md(a) {
  Cd(a);
  a = xd(a);
  if (!vd(a)) {
    nd(a);
    var c = kd,
      e = ld;
    if ((a = e & 2147483648)) ((c = (~c + 1) >>> 0), (e = ~e >>> 0), c == 0 && (e = (e + 1) >>> 0));
    var f = e * 4294967296 + (c >>> 0);
    c = Number.isSafeInteger(f) ? f : pd(c, e);
    a = typeof c === "number" ? (a ? -c : c) : a ? "-" + c : c;
  }
  return a;
}
function Jd(a) {
  Cd(a);
  a = xd(a);
  vd(a) ? (a = String(a)) : (nd(a), (a = rd()));
  return a;
}
function Id(a) {
  Cd(a);
  var c = xd(Number(a));
  if (vd(c)) return String(c);
  c = a.indexOf(".");
  c !== -1 && (a = a.substring(0, c));
  return Nd(a);
}
function Kd(a) {
  var c = xd(Number(a));
  if (vd(c)) return bd(c);
  c = a.indexOf(".");
  c !== -1 && (a = a.substring(0, c));
  return pc() ? bd(ud(64, BigInt(a))) : bd(Nd(a));
}
function Ld(a) {
  return vd(a) ? bd(Md(a)) : bd(Jd(a));
}
function Od(a) {
  var c = c === void 0 ? !1 : c;
  var e = typeof a;
  if (a == null) return a;
  if (e === "bigint") return String(ud(64, a));
  if (Cd(a)) return e === "string" ? Id(a) : c ? Jd(a) : Md(a);
}
function Pd(a) {
  var c = typeof a;
  if (a == null) return a;
  if (c === "bigint") return bd(ud(64, a));
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
      return !1;
    }
  return Yb(c) && Zb(a, c);
}
function Wd(a) {
  switch (a) {
    case "bigint":
    case "string":
    case "number":
      return !0;
    default:
      return !1;
  }
}
function Xd(a, c) {
  if (Mc(a)) a = a.G;
  else if (!Array.isArray(a)) return !1;
  if (Mc(c)) c = c.G;
  else if (!Array.isArray(c)) return !1;
  return Yd(a, c, void 0, 2);
}
function Zd(a, c, e) {
  return Yd(a, c, e, 0);
}
function Yd(a, c, e, f) {
  if (a === c || (a == null && c == null)) return !0;
  if (a instanceof Map) return a.pe(c, e);
  if (c instanceof Map) return c.pe(a, e);
  if (a == null || c == null) return !1;
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
          : !1;
  if (Mc(a) || Mc(c)) return Xd(a, c);
  if (a.constructor != c.constructor) return !1;
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
    for (var r = 0; r < q; r++) if (!ae(r - g, a, h, l, c, k, p, g, e, f)) return !1;
    if (h)
      for (var x in h) {
        f = a;
        q = h;
        r = l;
        var y = c,
          z = k,
          B = p,
          I = g,
          D = e,
          Y = +x;
        if (!(!Number.isFinite(Y) || Y < r || Y < B || ae(Y, f, q, r, y, z, B, I, D, 2))) return !1;
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
            (I = e),
            (D = +aa),
            (x = !Number.isFinite(D) || D < q || D < z ? !0 : ae(D, x, f, q, r, y, z, B, I, 2))),
          !x)
        )
          return !1;
    return !0;
  }
  if (a.constructor === Object) return Zd([a], [c]);
  throw Error();
}
function ae(a, c, e, f, g, h, k, l, p, q) {
  c = be(a, c, e, f, l);
  g = be(a, g, h, k, l);
  q = q === 1;
  if ((g == null && Qc(c)) || (c == null && Qc(g))) return !0;
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
  if (!Array.isArray(a) || !Array.isArray(c)) return !1;
  a = sd(a);
  c = sd(c);
  Array.prototype.sort.call(a, ce);
  Array.prototype.sort.call(c, ce);
  var e = a.length,
    f = c.length;
  if (e === 0 && f === 0) return !0;
  for (var g = 0, h = 0; g < e && h < f; ) {
    var k = void 0,
      l = a[g];
    if (!Array.isArray(l)) return !1;
    for (var p = l[0]; g < e - 1 && Zd((k = a[g + 1])[0], p); ) (g++, (l = k));
    var q = void 0;
    k = c[h];
    if (!Array.isArray(k)) return !1;
    for (var r = k[0]; h < f - 1 && Zd((q = c[h + 1])[0], r); ) (h++, (k = q));
    if (!Zd(p, r)) return !1;
    p = void 0;
    if (!Zd(l[1], k[1], (p = void 0) == null ? void 0 : p.j(2))) return !1;
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
  c.Zc = a.Zc;
  return c;
}
function he(a, c) {
  a = a.G;
  var e = Wa(yc);
  e && e in a && (a = a[e]) && delete a[c];
}
var ie = { Ae: !0 };
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
  var p = !1,
    q = !!(c & 64),
    r = q ? (c & 128 ? 0 : -1) : void 0;
  if (!(c & 1)) {
    var x = l && a[l - 1];
    x != null && typeof x === "object" && x.constructor === Object ? (l--, (k = l)) : (x = void 0);
    if (q && !(c & 128) && !g) {
      p = !0;
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
          I = void 0;
        ((I = c) != null ? I : (c = {}))[B] = z;
      } else h[y] = z;
  }
  if (x)
    for (var D in x)
      ((l = x[D]),
        l != null &&
          (l = e(l, f)) != null &&
          ((y = +D),
          (z = void 0),
          q && !Number.isNaN(y) && (z = y + r) < k
            ? (h[z] = l)
            : ((y = void 0), (((y = c) != null ? y : (c = {}))[D] = l))));
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
      return qe || (qe = [0, void 0, !0]);
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
    if (kb && 1 & g) throw Error("D");
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
          for (var p in l) ((h = +p), h < k && ((e[h + c] = l[p]), delete l[p]));
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
  if (kb) throw Error("G");
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
          ? (a = xe(a, e, !1, c && !(e & 16)))
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
  return Oc(a, e) ? (ye(a, c, e) ? ze(a, c, !0) : new a.constructor(xe(c, e, !1))) : a;
}
function Be(a) {
  if (a.j !== Pc) return !1;
  var c = a.G;
  c = xe(c, c[L] | 0);
  Jc(c, 2048);
  a.G = c;
  a.j = void 0;
  a.o = void 0;
  return !0;
}
function Ce(a) {
  if (!Be(a) && Oc(a, a.G[L] | 0)) throw Error();
}
function De(a, c) {
  c === void 0 && (c = a[L] | 0);
  c & 32 && !(c & 4096) && Ic(a, c | 4096);
}
function ye(a, c, e) {
  return e & 2 ? !0 : e & 32 && !(e & 4096) ? (Ic(c, e | 2), (a.j = Pc), !0) : !1;
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
        var l = !0;
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
  var q = 4 & p ? !1 : !0;
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
  if (2 & k || Re(k) || 16 & k)
    (k === h || Re(k) || Ic(g, k), (g = sd(g)), (h = 0), (k = Pe(k, c)), Je(a, c, e, g, f));
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
  var h = !1;
  f = He(a, f, g, function (k) {
    var l = Sd(k, e, !1, c);
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
    for (var B = !z, I = !0, D = 0, Y = 0; D < x.length; D++) {
      var aa = Sd(x[D], f, !1, y);
      if (aa instanceof f) {
        if (!z) {
          var Va = Oc(aa);
          B && (B = !Va);
          I && (I = Va);
        }
        x[Y++] = aa;
      }
    }
    Y < D && (x.length = Y);
    r |= 4;
    r = I ? r & -4097 : r | 4096;
    r = B ? r | 8 : r & -9;
  }
  r !== q && (Ic(a, r), 2 & r && Object.freeze(a));
  if (p && !(8 & r || (!a.length && (h === 1 || (h !== 4 ? 0 : 2 & r || (!(16 & r) && 32 & e)))))) {
    Re(r) && ((a = sd(a)), (r = Pe(r, e)), (e = Je(c, e, g, a)));
    f = a;
    p = r;
    for (q = 0; q < f.length; q++) ((x = f[q]), (r = Ae(x)), x !== r && (f[q] = r));
    p |= 8;
    r = p = f.length ? p | 4096 : p & -4097;
    Ic(a, r);
  }
  return (a = Qe(a, r, c, e, g, h, l, k));
}
function ef(a, c, e) {
  var f = a.G;
  return df(a, f, f[L] | 0, c, e, void 0 === Rc ? 2 : 4, !1, !0);
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
      r = !0,
      x = !0,
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
  c = Me(a, c, Gd, 2, !0);
  if (Array.isArray(e)) for (var f = e.length, g = 0; g < f; g++) c.push(Fd(e[g]));
  else {
    e = G(e);
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
  a = df(a, g, g[L] | 0, e, c, 2, !0);
  var h = (c = 0);
  if (Array.isArray(f))
    for (var k = f.length, l = 0; l < k; l++) {
      var p = Rd(f[l], e);
      a.push(p);
      (p = Oc(p)) && !c++ && (a[L] &= -9);
      p || h++ || Jc(a, 4096);
    }
  else {
    f = G(f);
    var q = f.next();
    try {
      for (; !q.done; q = f.next())
        ((l = Rd(q.value, e)),
          a.push(l),
          (p = Oc(l)) && !c++ && (a[L] &= -9),
          p || h++ || Jc(a, 4096));
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
        : ((a = ud(64, a)), (a = id(a) ? Number(a) : String(a)))
      : (a = Cd(a) ? (typeof a === "number" ? Md(a) : Id(a)) : void 0));
  return a;
}
function kf(a, c, e) {
  return Ed(Ge(a, c, void 0, e));
}
function lf(a, c) {
  var e = e === void 0 ? !1 : e;
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
function qf(a, c, e) {
  if (e != null && typeof e !== "boolean") throw Error("A`" + Ka(e) + "`" + e);
  return Ie(a, c, e);
}
function rf(a, c, e) {
  return Ie(a, c, e == null ? e : Fd(e));
}
function sf(a, c, e) {
  return Ie(a, c, e == null ? e : Hd(e));
}
function tf(a, c, e) {
  if (e != null && typeof e !== "string") throw Error();
  return Ie(a, c, e);
}
function uf(a, c, e) {
  return Ie(a, c, e == null ? e : Dd(e));
}
function vf(a, c, e) {
  this.buffer = a;
  if (e && !c) throw Error();
  this.j = c;
}
function wf(a, c) {
  if (typeof a === "string") return new vf(Xb(a), c);
  if (Array.isArray(a)) return new vf(new Uint8Array(a), c);
  if (a.constructor === Uint8Array) return new vf(a, !1);
  if (a.constructor === ArrayBuffer) return ((a = new Uint8Array(a)), new vf(a, !1));
  if (a.constructor === bc) return ((c = hc(a) || new Uint8Array(0)), new vf(c, !0, a));
  if (a instanceof Uint8Array)
    return (
      (a = a.constructor === Uint8Array ? a : new Uint8Array(a.buffer, a.byteOffset, a.byteLength)),
      new vf(a, !1)
    );
  throw Error();
}
function xf(a, c, e, f) {
  this.v = null;
  this.B = !1;
  this.j = this.o = this.A = 0;
  this.init(a, c, e, f);
}
xf.prototype.init = function (a, c, e, f) {
  var g = f === void 0 ? {} : f;
  f = g.jc;
  g = g.dd;
  g = g === void 0 ? !1 : g;
  this.jc = f === void 0 ? !1 : f;
  this.dd = g;
  a &&
    ((a = wf(a, this.dd)),
    (this.v = a.buffer),
    (this.B = a.j),
    (this.A = c || 0),
    (this.o = e !== void 0 ? this.A + e : this.v.length),
    (this.j = this.A));
};
xf.prototype.clear = function () {
  this.v = null;
  this.B = !1;
  this.j = this.o = this.A = 0;
  this.jc = !1;
};
xf.prototype.reset = function () {
  this.j = this.A;
};
function yf(a, c) {
  a.j = c;
  if (c > a.o) throw Error();
}
function zf(a) {
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
  yf(a, e);
  return g;
}
var Af = [];
var Bf = 0;
function Cf(a, c, e, f) {
  if (Af.length) {
    var g = Af.pop();
    g.init(a, c, e, f);
    a = g;
  } else a = new xf(a, c, e, f);
  this.j = a;
  this.A = this.j.j;
  this.o = this.v = -1;
  Df(this, f);
}
function Df(a, c) {
  c = (c === void 0 ? {} : c).xd;
  a.xd = c === void 0 ? !1 : c;
}
function Ef(a, c, e, f) {
  if (Ff.length) {
    var g = Ff.pop();
    Df(g, f);
    g.j.init(a, c, e, f);
    return g;
  }
  return new Cf(a, c, e, f);
}
function Gf(a) {
  a.j.clear();
  a.v = -1;
  a.o = -1;
  Ff.length < 100 && Ff.push(a);
}
Cf.prototype.reset = function () {
  this.j.reset();
  this.A = this.j.j;
  this.o = this.v = -1;
};
function Hf(a) {
  var c = a.j;
  if (c.j == c.o) return !1;
  a.A = a.j.j;
  var e = zf(a.j) >>> 0;
  c = e >>> 3;
  e &= 7;
  if (!(e >= 0 && e <= 5)) throw Error();
  if (c < 1) throw Error();
  a.v = c;
  a.o = e;
  return !0;
}
function If() {
  if (Bf >= 100) throw new SyntaxError();
  Bf++;
}
function Jf(a) {
  try {
    switch (a.o) {
      case 0:
        if (a.o != 0) Jf(a);
        else
          a: {
            var c = a.j,
              e = c.j;
            a = e + 10;
            for (var f = c.v; e < a; )
              if ((f[e++] & 128) === 0) {
                yf(c, e);
                break a;
              }
            throw Error();
          }
        break;
      case 1:
        var g = a.j;
        yf(g, g.j + 8);
        break;
      case 2:
        if (a.o != 2) Jf(a);
        else {
          var h = zf(a.j) >>> 0,
            k = a.j;
          yf(k, k.j + h);
        }
        break;
      case 5:
        var l = a.j;
        yf(l, l.j + 4);
        break;
      case 3:
        If();
        var p = a.v;
        try {
          do {
            if (!Hf(a)) throw Error();
            if (a.o == 4) {
              if (a.v != p) throw Error();
              break;
            }
            Jf(a);
          } while (1);
        } catch (q) {
          if (q instanceof RangeError) throw new SyntaxError();
          throw q;
        } finally {
          Bf > 0 && Bf--;
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
function Kf(a, c, e) {
  var f = a.j.o,
    g = zf(a.j) >>> 0;
  g = a.j.j + g;
  var h = g - f;
  h <= 0 && ((a.j.o = g), e(c, a, void 0, void 0, void 0), (h = g - a.j.j));
  if (h) throw Error();
  a.j.j = g;
  a.j.o = f;
}
var Ff = [];
function Lf() {
  function a() {
    throw Error();
  }
  Object.setPrototypeOf(a, a.prototype);
  return a;
}
var Mf = Lf(),
  Nf = Lf(),
  Of = Lf();
var Pf;
function Qf() {
  var a;
  return (a = Pf) != null ? a : (Pf = 1);
}
function Rf(a, c) {
  var e;
  return (e = a[xc]) != null ? e : (a[xc] = c(a));
}
function Sf(a) {
  for (var c = 1, e = a.length, f = a[e - 1]; f === "=" || f === "."; f = a[--e - 1]);
  f = e - 4;
  for (var g = 0; g < f; )
    ((c = (a.charCodeAt(g) + 31 * c) | 0),
      (c = (a.charCodeAt(g + 1) + 31 * c) | 0),
      (c = (a.charCodeAt(g + 2) + 31 * c) | 0),
      (c = (a.charCodeAt(g + 3) + 31 * c) | 0),
      (g += 4));
  for (; g < e; ) c = (a.charCodeAt(g++) + 31 * c) | 0;
  return c;
}
function Tf(a) {
  for (var c = 0, e = a.length, f = 0; f < e; f++) {
    var g = a[f];
    if (f === e - 1 && g != null && typeof g === "object" && g.constructor === Object)
      for (var h in g) !Number.isNaN(+h) && (c = (c + Uf(g[h])) | 0);
    else c = (c + Uf(g)) | 0;
  }
  return (c * 17) | 0;
}
function Vf(a) {
  return Sf(ec(a));
}
function Wf(a) {
  return Tf(a.G);
}
function Xf(a) {
  return Tf([].concat(oa(a.entries())));
}
var Yf = Sf("1"),
  Zf = Sf("0");
function Uf(a) {
  if (a == null) return 0;
  switch (typeof a) {
    case "boolean":
      return a ? Yf : Zf;
    case "string":
      return Sf(a);
    case "object":
      if (Array.isArray(a)) return Tf(a);
      if (Mc(a)) return Oc(a) ? Rf(a, Wf) : Wf(a);
      if (a && typeof a === "object" && a.v === Nc) return a.j & 2 ? Rf(a, Xf) : Xf(a);
      if (a instanceof bc) return Rf(a, Vf);
  }
  return Sf(String(a));
}
function Q(a, c, e) {
  this.G = M(a, c, e);
}
Q.prototype.toJSON = function () {
  return oe(this);
};
function $f(a) {
  return JSON.stringify(oe(a));
}
function ag(a, c) {
  if (c == null || c == "") return new a();
  c = JSON.parse(c);
  if (!Array.isArray(c)) throw Error("J");
  Jc(c, 32);
  return new a(c);
}
Q.prototype.clone = function () {
  var a = this.G,
    c = a[L] | 0;
  return ye(this, a, c) ? ze(this, a, !0) : new this.constructor(xe(a, c, !1));
};
function bg(a) {
  var c = a.G,
    e = c[L] | 0;
  return Oc(a, e) ? a : ye(a, c, e) ? ze(a, c) : new a.constructor(xe(c, e, !0));
}
function cg(a, c, e) {
  he(a, c.j);
  c.ctor ? c.A(a, c.ctor, c.j, e, c.o) : c.A(a, c.j, e, c.o);
}
Q.prototype[Cc] = Lc;
Q.prototype.toString = function () {
  return this.G.toString();
};
function dg(a, c) {
  if (c == null) ((c = a.constructor), (c = c[vc] || (c[vc] = Td(c))));
  else {
    a = a.constructor;
    if (!Array.isArray(c)) throw Error();
    if (Object.isFrozen(c) || Object.isSealed(c) || !Object.isExtensible(c)) throw Error();
    c = new a(Kc(c));
  }
  return c;
}
function eg(a, c) {
  this.Db = a;
  a = Wa(Mf);
  this.j = (!!a && c === a) || !1;
}
function fg(a) {
  var c = c === void 0 ? Mf : c;
  return new eg(a, c);
}
var gg = fg(function (a, c, e, f, g) {
    if (a.o !== 2) return !1;
    Kf(a, af(c, f, e), g);
    return !0;
  }),
  hg = fg(function (a, c, e, f, g) {
    if (a.o !== 2) return !1;
    Kf(a, af(c, f, e), g);
    return !0;
  }),
  ig = Symbol(),
  jg = Symbol(),
  kg = Symbol(),
  lg,
  mg;
function ng(a) {
  var c = og,
    e = pg,
    f = a[ig];
  if (f) return f;
  f = {};
  f.Rd = a;
  f.Pc = se(a[0]);
  var g = a[1],
    h = 1;
  g &&
    g.constructor === Object &&
    ((f.Ad = g),
    (g = a[++h]),
    typeof g === "function" &&
      ((f.qe = !0), lg != null || (lg = g), mg != null || (mg = a[h + 1]), (g = a[(h += 2)])));
  for (var k = {}; g && Array.isArray(g) && g.length && typeof g[0] === "number" && g[0] > 0; ) {
    for (var l = 0; l < g.length; l++) k[g[l]] = g;
    g = a[++h];
  }
  for (l = 1; g !== void 0; ) {
    typeof g === "number" && ((l += g), (g = a[++h]));
    var p = void 0;
    if (g instanceof eg) var q = g;
    else ((q = gg), h--);
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
  return (a[ig] = f);
}
function og(a, c, e, f) {
  var g = e.Db;
  a[c] = f
    ? function (h, k, l) {
        return g(h, k, l, f);
      }
    : g;
}
function pg(a, c, e, f, g) {
  var h = e.Db,
    k,
    l;
  a[c] = function (p, q, r) {
    return h(p, q, r, l || (l = ng(f).Pc), k || (k = qg(f)), g);
  };
}
function qg(a) {
  var c = a[jg];
  if (c != null) return c;
  var e = ng(a);
  c = e.qe
    ? function (f, g) {
        return lg(f, g, e);
      }
    : function (f, g) {
        a: {
          If();
          try {
            for (; Hf(g) && g.o != 4; ) {
              var h = g.v,
                k = e[h];
              if (k == null) {
                var l = e.Ad;
                if (l) {
                  var p = l[h];
                  if (p) {
                    var q = rg(p);
                    q != null && (k = e[h] = q);
                  }
                }
              }
              if (k == null || !k(g, f, h)) {
                var r = g,
                  x = r.A;
                Jf(r);
                var y = r;
                if (y.xd) var z = void 0;
                else {
                  var B = y.j.j - x;
                  y.j.j = x;
                  r = void 0;
                  var I = y.j;
                  y = B;
                  if (y == 0) z = cc();
                  else {
                    if (y < 0) throw Error();
                    var D = I.j,
                      Y = D + y;
                    if (Y > I.o) throw Error();
                    I.j = Y;
                    var aa = D;
                    if (I.jc && I.B) r = I.v.subarray(aa, aa + y);
                    else {
                      var Va = I.v;
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
                Y = y = r = void 0;
                var td = f,
                  tc = h,
                  ug = z;
                ug &&
                  ((r = (y = (Y = td[yc]) != null ? Y : (td[yc] = new ee()))[tc]) != null
                    ? r
                    : (y[tc] = [])
                  ).push(ug);
              }
            }
            var vg = de(f);
            vg && (vg.Zc = e.Rd[kg]);
            var wg = !0;
            break a;
          } catch (xg) {
            if (xg instanceof RangeError) throw new SyntaxError();
            throw xg;
          } finally {
            Bf > 0 && Bf--;
          }
          wg = void 0;
        }
        return wg;
      };
  a[jg] = c;
  a[kg] = sg.bind(a);
  return c;
}
function sg(a, c, e, f) {
  var g = this[ig],
    h = this[jg],
    k = te(void 0, g.Pc),
    l = de(a);
  if (l) {
    var p = !1,
      q = g.Ad;
    if (q) {
      g = function (B, I, D) {
        if (D.length !== 0)
          if (q[I]) {
            B = G(D);
            I = B.next();
            var Y;
            try {
              for (; !I.done; I = B.next()) {
                var aa = Ef(I.value);
                try {
                  ((p = !0), h(k, aa));
                } finally {
                  Gf(aa);
                }
              }
            } finally {
              I && !I.done && (Y = B.return) && Y.call(B);
            }
          } else f == null || f(a, I, D);
      };
      if (c == null) fe(l, g);
      else if (l != null) {
        var r = l[c];
        r && g(l, c, r);
      }
      if (p) {
        var x = a[L] | 0;
        if (x & 2 && x & 2048 && (e == null || !e.Ae)) throw Error();
        var y = Vc(x),
          z = function (B, I) {
            if (He(a, B, y) != null)
              switch (e == null ? void 0 : e.Pf) {
                case 1:
                  return;
                default:
                  throw Error();
              }
            I != null && (x = Je(a, x, B, I, y));
            delete l[B];
          };
        c == null
          ? Tc(k, k[L] | 0, function (B, I) {
              z(B, I);
            })
          : z(c, He(k, c, y));
      }
    }
  }
}
function rg(a) {
  a = Array.isArray(a) ? (a[0] instanceof eg ? a : [hg, a]) : [a, void 0];
  var c = a[0].Db;
  if ((a = a[1])) {
    var e = qg(a),
      f = ng(a).Pc;
    return function (g, h, k) {
      return c(g, h, k, f, e);
    };
  }
  return c;
}
var tg;
tg = new eg(function (a, c, e) {
  if (a.o !== 0) return !1;
  a = zf(a.j);
  Je(c, c[L] | 0, e, a, Vc(c[L] | 0));
  return !0;
}, Nf);
var yg,
  zg = void 0;
zg = zg === void 0 ? Mf : zg;
yg = new eg(function (a, c, e, f, g) {
  if (a.o !== 2) return !1;
  f = te(void 0, f);
  Ve(c, c[L] | 0, e).push(f);
  Kf(a, f, g);
  return !0;
}, zg);
var Ag;
Ag = new eg(function (a, c, e) {
  if (a.o !== 0) return !1;
  a = zf(a.j);
  Je(c, c[L] | 0, e, a, Vc(c[L] | 0));
  return !0;
}, Of);
var Bg;
Bg = new eg(function (a, c, e) {
  if (a.o !== 0 && a.o !== 2) return !1;
  c = Ve(c, c[L] | 0, e);
  if (a.o == 2) for (e = zf(a.j) >>> 0, e = a.j.j + e; a.j.j < e; ) c.push(zf(a.j));
  else c.push(zf(a.j));
  return !0;
}, Of);
function Cg(a, c, e) {
  this.j = a;
  this.ctor = e;
  this.v = cf;
  this.A = N;
  this.defaultValue = void 0;
  this.o = c.te != null ? Uc : void 0;
}
Cg.prototype.register = function () {
  Fb(this);
};
function Dg(a) {
  return function (c) {
    return ag(a, c);
  };
}
Object.create(null);
function Eg(a) {
  if (a.prototype.hasOwnProperty("$$generatedClassName")) return a.prototype.$$generatedClassName;
  var c = a.name,
    e,
    f = (e = Fg.get(c)) != null ? e : 0;
  Fg.set(c, f + 1);
  c = "Class$obf_" + c + "_" + f;
  return (a.prototype.$$generatedClassName = c);
}
var Fg = new Map();
function R() {}
R.prototype.equals = function (a) {
  return Gg(this, a);
};
R.prototype.ua = function () {
  return Hg(this);
};
R.prototype.toString = function () {
  return S(Ig(Jg(this.constructor))) + "@" + S((this.ua() >>> 0).toString(16));
};
function Kg() {}
var Lg;
F(Kg, R);
function Mg() {}
F(Mg, Kg);
var Ng;
function Og() {
  Og = u();
  for (var a = Pg([256], Qg, Rg), c = 0; c < 256; c = (c + 1) | 0) a[c] = Sg((c - 128) | 0);
  Ng = a;
}
function Tg() {}
F(Tg, R);
function Ug(a, c) {
  a.j = c;
  Vg(a);
}
function Wg(a, c) {
  a.J = c;
  Xg(c, a);
}
function Vg(a) {
  a.J instanceof Error &&
    (Error.captureStackTrace ? Error.captureStackTrace(a.J) : (a.J.stack = Error().stack));
}
Tg.prototype.B = w("j");
Tg.prototype.toString = function () {
  var a = Ig(Jg(this.constructor)),
    c = this.j;
  return c == null ? a : S(a) + ": " + S(c);
};
function Yg(a) {
  if (a != null) {
    var c = a.Pd;
    if (c) return c;
  }
  a instanceof TypeError ? (c = Zg()) : ((c = new $g()), Vg(c), Wg(c, Error(c)));
  c.j = a == null ? "null" : a.toString();
  Wg(c, a);
  return c;
}
function ah(a) {
  return a instanceof Tg;
}
function bh() {}
F(bh, Tg);
function ch() {}
F(ch, bh);
function dh(a) {
  var c = new ch();
  Ug(c, a);
  Wg(c, Error(c));
  return c;
}
function eh() {}
F(eh, ch);
function Gg(a, c) {
  return Object.is(a, c) || (a == null && c == null);
}
function fh() {}
F(fh, ch);
function gh() {
  var a = new fh();
  Vg(a);
  Wg(a, Error(a));
  return a;
}
function hh(a) {
  var c = new fh();
  Ug(c, a);
  Wg(c, Error(c));
  return c;
}
function ih(a, c) {
  var e = new fh();
  e.o = c;
  e.j = a;
  Vg(e);
  Wg(e, Error(e));
  return e;
}
function jh(a, c) {
  this.W = a | 0;
  this.T = c | 0;
}
function kh(a) {
  return a.T * 4294967296 + (a.W >>> 0);
}
C = jh.prototype;
C.isSafeInteger = function () {
  var a = this.T >> 21;
  return a == 0 || (a == -1 && !(this.W == 0 && this.T == -2097152));
};
C.toString = function (a) {
  a = a || 10;
  if (a < 2 || 36 < a) throw Error("M`" + a);
  if (this.isSafeInteger()) {
    var c = kh(this);
    return a == 10 ? "" + c : c.toString(a);
  }
  c = 14 - (a >> 2);
  var e = Math.pow(a, c),
    f = lh(e, e / 4294967296);
  e = this.div(f);
  var g = Math,
    h = g.abs;
  f = e.multiply(f);
  f = this.add(mh(f));
  g = h.call(g, kh(f));
  h = a == 10 ? "" + g : g.toString(a);
  h.length < c && (h = "0000000000000".slice(h.length - c) + h);
  g = kh(e);
  return (a == 10 ? g : g.toString(a)) + h;
};
function nh(a) {
  return a.W == 0 && a.T == 0;
}
C.ua = function () {
  return this.W ^ this.T;
};
C.equals = function (a) {
  return a == null ? !1 : this.W == a.W && this.T == a.T;
};
C.compare = function (a) {
  return this.T == a.T
    ? this.W == a.W
      ? 0
      : this.W >>> 0 > a.W >>> 0
        ? 1
        : -1
    : this.T > a.T
      ? 1
      : -1;
};
function mh(a) {
  var c = (~a.W + 1) | 0;
  return lh(c, (~a.T + !c) | 0);
}
C.add = function (a) {
  var c = this.T >>> 16,
    e = this.T & 65535,
    f = this.W >>> 16,
    g = a.T >>> 16,
    h = a.T & 65535,
    k = a.W >>> 16;
  a = (this.W & 65535) + (a.W & 65535);
  k = (a >>> 16) + (f + k);
  f = k >>> 16;
  f += e + h;
  return lh(
    ((k & 65535) << 16) | (a & 65535),
    ((((f >>> 16) + (c + g)) & 65535) << 16) | (f & 65535),
  );
};
C.multiply = function (a) {
  if (nh(this)) return this;
  if (nh(a)) return a;
  var c = this.T >>> 16,
    e = this.T & 65535,
    f = this.W >>> 16,
    g = this.W & 65535,
    h = a.T >>> 16,
    k = a.T & 65535,
    l = a.W >>> 16;
  a = a.W & 65535;
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
  return lh(((q & 65535) << 16) | (p & 65535), (x << 16) | (r & 65535));
};
C.div = function (a) {
  if (nh(a)) throw Error("N");
  if (this.T < 0) {
    if (this.equals(oh)) {
      if (a.equals(ph) || a.equals(qh)) return oh;
      if (a.equals(oh)) return ph;
      var c = this.T;
      c = lh((this.W >>> 1) | (c << 31), c >> 1);
      c = c.div(a).shiftLeft(1);
      if (c.equals(rh)) return a.T < 0 ? ph : qh;
      var e = a.multiply(c);
      e = this.add(mh(e));
      return c.add(e.div(a));
    }
    return a.T < 0 ? mh(this).div(mh(a)) : mh(mh(this).div(a));
  }
  if (nh(this)) return rh;
  if (a.T < 0) return a.equals(oh) ? rh : mh(this.div(mh(a)));
  c = rh;
  for (e = this; e.compare(a) >= 0; ) {
    var f = Math.max(1, Math.floor(kh(e) / kh(a))),
      g = Math.ceil(Math.log(f) / Math.LN2);
    g = g <= 48 ? 1 : Math.pow(2, g - 48);
    for (var h = sh(f), k = h.multiply(a); k.T < 0 || k.compare(e) > 0; )
      ((f -= g), (h = sh(f)), (k = h.multiply(a)));
    nh(h) && (h = ph);
    c = c.add(h);
    e = e.add(mh(k));
  }
  return c;
};
C.and = function (a) {
  return lh(this.W & a.W, this.T & a.T);
};
C.or = function (a) {
  return lh(this.W | a.W, this.T | a.T);
};
C.xor = function (a) {
  return lh(this.W ^ a.W, this.T ^ a.T);
};
C.shiftLeft = function (a) {
  a &= 63;
  if (a == 0) return this;
  var c = this.W;
  return a < 32 ? lh(c << a, (this.T << a) | (c >>> (32 - a))) : lh(0, c << (a - 32));
};
function sh(a) {
  return a > 0
    ? a >= 0x7fffffffffffffff
      ? th
      : new jh(a, a / 4294967296)
    : a < 0
      ? a <= -0x7fffffffffffffff
        ? oh
        : mh(new jh(-a, -a / 4294967296))
      : rh;
}
function lh(a, c) {
  return new jh(a, c);
}
var rh = lh(0, 0),
  ph = lh(1, 0),
  qh = lh(-1, -1),
  th = lh(4294967295, 2147483647),
  oh = lh(0, 2147483648);
function uh(a, c, e) {
  if (Object.prototype.hasOwnProperty.call(a.prototype, c)) return a.prototype[c];
  e = e();
  return (a.prototype[c] = e);
}
function vh() {}
F(vh, R);
function wh(a) {
  return kh(a);
}
function xh(a) {
  return Math.max(Math.min(a, 2147483647), -2147483648) | 0;
}
function $g() {}
F($g, ch);
function yh() {}
F(yh, $g);
function Zg() {
  var a = new yh();
  Vg(a);
  Wg(a, new TypeError(a));
  return a;
}
function zh(a, c) {
  return Gg(a, c) || (a != null && Ah(a, c));
}
function Bh(a) {
  return a >= 56320 && a <= 57343;
}
function Qg() {
  this.j = 0;
}
F(Qg, Kg);
function Ch(a) {
  a > -129 && a < 128 ? (Og(), (a = Ng[(a + 128) | 0])) : (a = Sg(a));
  return a;
}
function Sg(a) {
  var c = new Qg();
  c.j = a;
  return c;
}
Qg.prototype.equals = function (a) {
  return Rg(a) && a.j == this.j;
};
Qg.prototype.ua = w("j");
Qg.prototype.toString = function () {
  return "" + this.j;
};
Qg.prototype.sa = w("j");
function Rg(a) {
  return a instanceof Qg;
}
function Dh() {}
F(Dh, Kg);
function Eh() {}
F(Eh, R);
Eh.prototype.toString = w("j");
function Fh() {}
F(Fh, Eh);
function Gh(a, c) {
  a.j = S(a.j) + S(c);
}
function Hh() {}
F(Hh, R);
Hh.prototype.toString = function () {
  return this.j
    ? this.o.length == 0
      ? this.j.toString()
      : S(this.j.toString()) + S(this.o)
    : this.B;
};
function Ih() {
  this.j = 0;
}
F(Ih, R);
Ih.prototype.name = function () {
  return this.o != null ? this.o : "" + this.j;
};
Ih.prototype.equals = function (a) {
  return Gg(this, a);
};
Ih.prototype.ua = function () {
  return R.prototype.ua.call(this);
};
Ih.prototype.toString = function () {
  return this.name();
};
function Jh() {}
F(Jh, ch);
function Kh() {}
F(Kh, Jh);
function Lh(a) {
  switch (typeof a) {
    case "string":
      for (var c = 0, e = 0; e < a.length; e = (e + 1) | 0)
        c = ((c << 5) - c + a.charCodeAt(e)) | 0;
      return c;
    case "number":
      return xh(a);
    case "boolean":
      return a ? 1231 : 1237;
    default:
      return a == null ? 0 : Hg(a);
  }
}
var Mh = 0;
function Hg(a) {
  return (
    a.ld ||
    (Object.defineProperties(a, { ld: { value: (Mh = (Mh + 1) | 0), enumerable: !1 } }), a.ld)
  );
}
function Ah(a, c) {
  return a.equals ? a.equals(c) : Object.is(a, c);
}
function Nh(a) {
  return a.ua ? a.ua() : Lh(a);
}
function Oh(a) {
  switch (typeof a) {
    case "number":
      return Jg(Mg);
    case "boolean":
      return Jg(vh);
    case "string":
      return Jg(Ph);
    case "function":
      return Jg(Qh);
  }
  if (a instanceof jh) a = Jg(Dh);
  else if (a instanceof R) a = Jg(a.constructor);
  else if (Array.isArray(a)) a = (a = a.Jd) ? Jg(a.yb, a.rc) : Jg(R, 1);
  else if (a != null) a = Jg(Rh);
  else throw new TypeError("P");
  return a;
}
function Qh() {}
function Rh() {}
F(Rh, R);
function Ph() {}
F(Ph, R);
function S(a) {
  return a == null ? "null" : a.toString();
}
function Sh(a, c) {
  var e = a.length,
    f,
    g = ((f = c), (c = (c + 1) | 0), f);
  f = "string" === typeof a ? a.charCodeAt(g) : a.j.charCodeAt(g);
  var h;
  return f >= 55296 &&
    f <= 56319 &&
    c < e &&
    Bh((h = "string" === typeof a ? a.charCodeAt(c) : a.j.charCodeAt(c)))
    ? (65536 + ((f & 1023) << 10) + (h & 1023)) | 0
    : f;
}
function Th(a, c) {
  return Gg(a, c);
}
function Xg(a, c) {
  if (a instanceof Object)
    try {
      ((a.Pd = c),
        Object.defineProperties(a, {
          cause: {
            get: function () {
              return c.o && c.o.J;
            },
          },
        }));
    } catch (e) {}
}
function Pg(a, c, e) {
  return Uh(a, { yb: c, Gd: e, rc: a.length });
}
function Uh(a, c) {
  var e = a[0];
  if (e == null) return null;
  var f = new globalThis.Array(e);
  c && (f.Jd = c);
  if (a.length > 1) {
    a = a.slice(1);
    c = c && { yb: c.yb, Gd: c.Gd, rc: c.rc - 1 };
    for (var g = 0; g < e; g++) f[g] = Uh(a, c);
  } else if (c && ((a = c.yb.Le), a !== void 0)) for (c = 0; c < e; c++) f[c] = a;
  return f;
}
function Vh(a, c) {
  this.j = 0;
  this.o = a;
  this.j = c;
}
F(Vh, R);
function Jg(a, c) {
  var e = c || 0;
  return uh(a, "$$class/" + e, function () {
    return new Vh(a, e);
  });
}
function Ig(a) {
  return a.j != 0 ? S(Wh("[", a.j)) + String("L" + S(Eg(a.o)) + ";") : Eg(a.o);
}
function Xh(a, c) {
  return a.substr((a.lastIndexOf(c) + 1) | 0);
}
Vh.prototype.toString = function () {
  return "class " + S(Ig(this));
};
function Wh(a, c) {
  for (var e = "", f = 0; f < c; f = (f + 1) | 0) e = S(e) + S(a);
  return e;
}
function Yh(a) {
  this.G = M(a);
}
F(Yh, Q);
Yh.prototype.getTypeName = function () {
  return of(this, 1).split("/").pop();
};
var Zh = (function (a) {
  return Wc(function (c) {
    return c instanceof a && !Oc(c);
  });
})(Yh);
function $h(a) {
  var c = 2;
  c = c === void 0 ? 2 : c;
  this.key = a;
  this.defaultValue = !1;
  this.phase = c;
  this.flagNameForDebugging = void 0;
}
$h.prototype.ctor = function (a) {
  return typeof a === "boolean" ? a : this.defaultValue;
};
function ai() {
  var a = bi(
      '[["feature named `pageObserver` was not found","feature named `hover` was not found"]]',
    ),
    c = ci,
    e = 2;
  e = e === void 0 ? 2 : e;
  this.key = "45696263";
  this.defaultValue = a;
  this.j = c;
  this.phase = e;
  this.flagNameForDebugging = void 0;
}
ai.prototype.ctor = function (a) {
  if (typeof a === "string" && a) return ag(this.j, a);
  if (!Zh(a)) return this.defaultValue.clone();
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
      var r = Sd(q, k, !0, p);
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
function di(a) {
  this.G = M(a);
}
F(di, Q);
di.prototype.clearValue = function () {
  return Te(this, ei);
};
var ei = [1, 2];
function fi(a) {
  this.G = M(a);
}
F(fi, Q);
fi.prototype.clearValue = function () {
  return Te(this, gi);
};
var gi = [2, 3, 4, 5, 6, 8];
function hi(a) {
  this.G = M(a);
}
F(hi, Q);
hi.prototype.Dd = function () {
  var a = Ge(this, 3, void 0, void 0, Se);
  return a == null ? cc() : a;
};
function ii(a) {
  this.G = M(a);
}
F(ii, Q);
var ji = Dg(ii);
function ci(a) {
  this.G = M(a);
}
F(ci, Q);
var bi = Dg(ci);
function ki(a) {
  a == null || cd(a);
  return a == null ? null : li(a);
}
function li(a) {
  cd(a);
  id(a);
  return id(a) ? Number(a) : String(a);
}
function mi(a, c) {
  c = c === void 0 ? window : c;
  c = c === void 0 ? window : c;
  return (c = c.WIZ_global_data) && a in c ? c[a] : null;
}
var ni;
function oi() {
  return (ni = ni || new pi());
}
function pi() {
  this.o = !1;
  var a = null;
  this.o = !0;
  var c = mi("TSDtV", window);
  if ((c = typeof c !== "string" ? null : c))
    ((a = ji("[" + c.substring(4))), (a = ef(a, hi, 1)[0]));
  if (a) {
    c = G(ef(a, fi, 2));
    var e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next()) {
        var g = e.value,
          h = g.G;
        if (Le(h, h[L] | 0, Yh, We(g, gi, 6)) !== void 0) throw Error();
      }
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  }
  var k;
  if (a) {
    f = {};
    g = G(ef(a, fi, 2));
    h = g.next();
    try {
      for (; !h.done; h = g.next()) {
        var l = h.value,
          p = nf(l, 1).toString();
        switch (Xe(l, gi)) {
          case 3:
            f[p] = lf(l, We(l, gi, 3));
            break;
          case 2:
            f[p] = li(nf(l, We(l, gi, 2)));
            break;
          case 4:
            c = void 0;
            e = l;
            var q = We(l, gi, 4),
              r = void 0;
            r = r === void 0 ? 0 : r;
            var x = (c = Ge(e, q, void 0, void 0, yd)) != null ? c : r;
            f[p] = x;
            break;
          case 5:
            f[p] = of(l, We(l, gi, 5));
            break;
          case 6:
            f[p] = cf(l, Yh, We(l, gi, 6), void 0);
            break;
          case 8:
            var y = bf(l, di, We(l, gi, 8));
            switch (Xe(y, ei)) {
              case 1:
                f[p] = of(y, We(y, ei, 1));
                break;
              default:
                throw Error("V`" + Xe(y, ei));
            }
            break;
          default:
            throw Error("V`" + Xe(l, gi));
        }
      }
    } finally {
      h && !h.done && (k = g.return) && k.call(g);
    }
    k = f;
  } else k = {};
  this.j = k;
  this.v = a ? a.Dd() : null;
}
function qi(a, c) {
  return c.phase === 1 || (a.o && !(c.key in a.j)) ? c.defaultValue : c.ctor(a.j[c.key]);
}
pi.prototype.Dd = w("v");
function ri(a) {
  this.G = M(a);
}
F(ri, Q);
var si = new ai();
var ti = new $h("45723104");
var ui = new $h("45765314");
function vi(a) {
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
function wi(a) {
  this.G = M(a);
}
F(wi, Q);
var xi = (function (a) {
  return function () {
    return a[vc] || (a[vc] = Td(a));
  };
})(wi);
var yi =
  typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function"
    ? function (a) {
        return a && AsyncContext.Snapshot.wrap(a);
      }
    : ba();
function zi(a, c) {
  this.v = a;
  this.A = c;
  this.o = 0;
  this.j = null;
}
zi.prototype.get = function () {
  if (this.o > 0) {
    this.o--;
    var a = this.j;
    this.j = a.next;
    a.next = null;
  } else a = this.v();
  return a;
};
function Ai(a, c) {
  a.A(c);
  a.o < 100 && (a.o++, (c.next = a.j), (a.j = c));
}
var Bi = [],
  Ci = [],
  Di = !1;
function Ei(a) {
  Bi[Bi.length] = a;
  if (Di) for (var c = 0; c < Ci.length; c++) a(Sa(Ci[c].j, Ci[c]));
}
function Fi(a) {
  a = Gi(a);
  a = yi(a);
  Hi || (Hi = Ii());
  Hi(a);
}
var Hi;
function Ii() {
  if (typeof MessageChannel !== "undefined") {
    var a = new MessageChannel(),
      c = {},
      e = c;
    a.port1.onmessage = function () {
      if (c.next !== void 0) {
        c = c.next;
        var f = c.qb;
        c.qb = null;
        f();
      }
    };
    return function (f) {
      e.next = { qb: f };
      e = e.next;
      a.port2.postMessage(0);
    };
  }
  return function (f) {
    K.setTimeout(f, 0);
  };
}
function Gi(a) {
  return a;
}
Ei(function (a) {
  Gi = a;
});
function Ji() {
  this.o = this.j = null;
}
Ji.prototype.add = function (a, c) {
  var e = Ki.get();
  e.set(a, c);
  this.o ? (this.o.next = e) : (this.j = e);
  this.o = e;
};
Ji.prototype.remove = function () {
  var a = null;
  this.j && ((a = this.j), (this.j = this.j.next), this.j || (this.o = null), (a.next = null));
  return a;
};
var Ki = new zi(
  function () {
    return new Li();
  },
  function (a) {
    return a.reset();
  },
);
function Li() {
  this.next = this.scope = this.j = null;
}
Li.prototype.set = function (a, c) {
  this.j = a;
  this.scope = c;
  this.next = null;
};
Li.prototype.reset = function () {
  this.next = this.scope = this.j = null;
};
var Mi,
  Ni = !1,
  Oi = new Ji();
function Pi(a, c) {
  Mi || Qi();
  Ni || (Mi(), (Ni = !0));
  Oi.add(a, c);
}
function Qi() {
  var a = Promise.resolve(void 0);
  Mi = function () {
    a.then(Ri);
  };
}
function Ri() {
  for (var a; (a = Oi.remove()); ) {
    try {
      a.j.call(a.scope);
    } catch (c) {
      $a(c);
    }
    Ai(Ki, a);
  }
  Ni = !1;
}
function Si() {}
function Ti(a) {
  var c = c || 0;
  return function () {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
}
function Ui(a) {
  if (!a) return !1;
  try {
    return !!a.$goog_Thenable;
  } catch (c) {
    return !1;
  }
}
function Vi(a) {
  this.j = 0;
  this.C = void 0;
  this.A = this.o = this.v = null;
  this.B = this.F = !1;
  if (a != Si)
    try {
      var c = this;
      a.call(
        void 0,
        function (e) {
          Wi(c, 2, e);
        },
        function (e) {
          Wi(c, 3, e);
        },
      );
    } catch (e) {
      Wi(this, 3, e);
    }
}
function Xi() {
  this.next = this.v = this.o = this.B = this.j = null;
  this.A = !1;
}
Xi.prototype.reset = function () {
  this.v = this.o = this.B = this.j = null;
  this.A = !1;
};
var Yi = new zi(
  function () {
    return new Xi();
  },
  function (a) {
    a.reset();
  },
);
function Zi(a, c, e) {
  var f = Yi.get();
  f.B = a;
  f.o = c;
  f.v = e;
  return f;
}
function $i(a) {
  if (a instanceof Vi) return a;
  var c = new Vi(Si);
  Wi(c, 2, a);
  return c;
}
function aj() {
  var a = Error("Cb");
  return new Vi(function (c, e) {
    e(a);
  });
}
function bj(a, c, e) {
  cj(a, c, e, null) || Pi(Ta(c, a));
}
function dj(a) {
  return new Vi(function (c) {
    var e = a.length,
      f = [];
    if (e)
      for (
        var g = function (l, p, q) {
            e--;
            f[l] = p ? { ee: !0, value: q } : { ee: !1, reason: q };
            e == 0 && c(f);
          },
          h,
          k = 0;
        k < a.length;
        k++
      )
        ((h = a[k]), bj(h, Ta(g, k, !0), Ta(g, k, !1)));
    else c(f);
  });
}
Vi.prototype.then = function (a, c, e) {
  return ej(
    this,
    yi(typeof a === "function" ? a : null),
    yi(typeof c === "function" ? c : null),
    e,
  );
};
Vi.prototype.$goog_Thenable = !0;
function fj(a, c) {
  c = yi(c);
  c = Zi(c, c);
  c.A = !0;
  gj(a, c);
}
C = Vi.prototype;
C.Pa = function (a, c) {
  return ej(this, null, yi(a), c);
};
C.catch = Vi.prototype.Pa;
C.cancel = function (a) {
  if (this.j == 0) {
    var c = new hj(a);
    Pi(function () {
      ij(this, c);
    }, this);
  }
};
function ij(a, c) {
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
            ? ij(e, c)
            : (h ? ((f = h), f.next == e.A && (e.A = f), (f.next = f.next.next)) : jj(e),
              kj(e, g, 3, c)));
      }
      a.v = null;
    } else Wi(a, 3, c);
}
function gj(a, c) {
  a.o || (a.j != 2 && a.j != 3) || lj(a);
  a.A ? (a.A.next = c) : (a.o = c);
  a.A = c;
}
function ej(a, c, e, f) {
  var g = Zi(null, null, null);
  g.j = new Vi(function (h, k) {
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
            p === void 0 && l instanceof hj ? k(l) : h(p);
          } catch (q) {
            k(q);
          }
        }
      : k;
  });
  g.j.v = a;
  gj(a, g);
  return g.j;
}
C.Ge = function (a) {
  this.j = 0;
  Wi(this, 2, a);
};
C.He = function (a) {
  this.j = 0;
  Wi(this, 3, a);
};
function Wi(a, c, e) {
  a.j == 0 &&
    (a === e && ((c = 3), (e = new TypeError("Y"))),
    (a.j = 1),
    cj(e, a.Ge, a.He, a) ||
      ((a.C = e), (a.j = c), (a.v = null), lj(a), c != 3 || e instanceof hj || mj(a, e)));
}
function cj(a, c, e, f) {
  if (a instanceof Vi) return (gj(a, Zi(c || Si, e || null, f)), !0);
  if (Ui(a)) return (a.then(c, e, f), !0);
  if (Ma(a))
    try {
      var g = a.then;
      if (typeof g === "function") return (nj(a, g, c, e, f), !0);
    } catch (h) {
      return (e.call(f, h), !0);
    }
  return !1;
}
function nj(a, c, e, f, g) {
  function h(p) {
    l || ((l = !0), f.call(g, p));
  }
  function k(p) {
    l || ((l = !0), e.call(g, p));
  }
  var l = !1;
  try {
    c.call(a, k, h);
  } catch (p) {
    h(p);
  }
}
function lj(a) {
  a.F || ((a.F = !0), Pi(a.Xd, a));
}
function jj(a) {
  var c = null;
  a.o && ((c = a.o), (a.o = c.next), (c.next = null));
  a.o || (a.A = null);
  return c;
}
C.Xd = function () {
  for (var a; (a = jj(this)); ) kj(this, a, this.j, this.C);
  this.F = !1;
};
function kj(a, c, e, f) {
  if (e == 3 && c.o && !c.A) for (; a && a.B; a = a.v) a.B = !1;
  if (c.j) ((c.j.v = null), oj(c, e, f));
  else
    try {
      c.A ? c.B.call(c.v) : oj(c, e, f);
    } catch (g) {
      pj.call(null, g);
    }
  Ai(Yi, c);
}
function oj(a, c, e) {
  c == 2 ? a.B.call(a.v, e) : a.o && a.o.call(a.v, e);
}
function mj(a, c) {
  a.B = !0;
  Pi(function () {
    a.B && pj.call(null, c);
  });
}
var pj = $a;
function hj(a) {
  Ya.call(this, a);
  this.j = !1;
}
Xa(hj, Ya);
hj.prototype.name = "cancel"; /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
function qj(a, c) {
  this.B = [];
  this.R = a;
  this.K = c || null;
  this.A = this.j = !1;
  this.v = void 0;
  this.I = this.S = this.C = !1;
  this.F = 0;
  this.o = null;
  this.D = 0;
}
C = qj.prototype;
C.cancel = function (a) {
  if (this.j) this.v instanceof qj && this.v.cancel();
  else {
    if (this.o) {
      var c = this.o;
      delete this.o;
      a ? c.cancel(a) : (c.D--, c.D <= 0 && c.cancel());
    }
    this.R ? this.R.call(this.K, this) : (this.I = !0);
    this.j || this.bb(new rj(this));
  }
};
C.td = function (a, c) {
  this.C = !1;
  sj(this, a, c);
};
function sj(a, c, e) {
  a.j = !0;
  a.v = e;
  a.A = !c;
  tj(a);
}
function uj(a) {
  if (a.j) {
    if (!a.I) throw new vj(a);
    a.I = !1;
  }
}
C.ma = function (a) {
  uj(this);
  sj(this, !0, a);
};
C.bb = function (a) {
  uj(this);
  sj(this, !1, a);
};
function wj(a) {
  throw a;
}
function xj(a, c, e) {
  return yj(a, c, null, e);
}
function zj(a, c) {
  return yj(a, null, c);
}
function Aj(a, c, e) {
  yj(
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
function yj(a, c, e, f) {
  var g = a.j;
  g || (c === e ? (c = e = yi(c)) : ((c = yi(c)), (e = yi(e))));
  a.B.push([c, e, f]);
  g && tj(a);
  return a;
}
C.then = function (a, c, e) {
  var f,
    g,
    h = new Vi(function (k, l) {
      g = k;
      f = l;
    });
  yj(
    this,
    g,
    function (k) {
      k instanceof rj ? h.cancel() : f(k);
      return Bj;
    },
    this,
  );
  return h.then(a, c, e);
};
qj.prototype.$goog_Thenable = !0;
function Cj(a) {
  return Ab(a.B, function (c) {
    return typeof c[1] === "function";
  });
}
var Bj = {};
function tj(a) {
  if (a.F && a.j && Cj(a)) {
    var c = a.F,
      e = Dj[c];
    e && (K.clearTimeout(e.j), delete Dj[c]);
    a.F = 0;
  }
  a.o && (a.o.D--, delete a.o);
  c = a.v;
  for (var f = (e = !1); a.B.length && !a.C; ) {
    var g = a.B.shift(),
      h = g[0],
      k = g[1];
    g = g[2];
    if ((h = a.A ? k : h))
      try {
        var l = h.call(g || a.K, c);
        l === Bj && (l = void 0);
        l !== void 0 && ((a.A = a.A && (l == c || l instanceof Error)), (a.v = c = l));
        if (Ui(c) || (typeof K.Promise === "function" && c instanceof K.Promise))
          ((f = !0), (a.C = !0));
      } catch (p) {
        ((c = p), (a.A = !0), Cj(a) || (e = !0));
      }
  }
  a.v = c;
  f &&
    ((l = Sa(a.td, a, !0)),
    (f = Sa(a.td, a, !1)),
    c instanceof qj ? (yj(c, l, f), (c.S = !0)) : c.then(l, f));
  e && ((c = new Ej(c)), (Dj[c.j] = c), (a.F = c.j));
}
function Fj(a) {
  var c = new qj();
  c.ma(a);
  return c;
}
function Gj(a) {
  var c = new qj();
  a.then(
    function (e) {
      c.ma(e);
    },
    function (e) {
      c.bb(e);
    },
  );
  return c;
}
function vj() {
  Ya.call(this);
}
Xa(vj, Ya);
vj.prototype.message = "Deferred has already fired";
vj.prototype.name = "AlreadyCalledError";
function rj() {
  Ya.call(this);
}
Xa(rj, Ya);
rj.prototype.message = "Deferred was canceled";
rj.prototype.name = "CanceledError";
function Ej(a) {
  this.j = K.setTimeout(Sa(this.v, this), 0);
  this.o = a;
}
Ej.prototype.v = function () {
  delete Dj[this.j];
  wj(this.o);
};
var Dj = {};
function Hj(a, c) {
  this.o = c;
  this.j = a;
  Vg(this);
  Wg(this, Error(this));
}
F(Hj, ch);
fa.Object.defineProperties(Hj.prototype, {
  error: {
    configurable: !0,
    enumerable: !0,
    get: function () {
      var a = Error(),
        c = this.J;
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
function Ij(a) {
  return new Vi(function (c, e) {
    Jj(
      a,
      function (f) {
        c(f);
      },
      function (f) {
        f || ((f = new Hj("Z", null)), Wg(f, Error(f)));
        e(f);
      },
    );
  });
}
function Kj(a, c) {
  if (!a) throw hh(S(c)).J;
}
function Lj(a) {
  if (a == null) throw Zg().J;
  return a;
}
function Mj(a) {
  if (a == null) return "null";
  try {
    return a.toString();
  } catch (q) {
    var c = Yg(q);
    if (c instanceof bh) {
      a = S(Ig(Oh(a))) + String.fromCharCode(64) + S((Lh(a) >>> 0).toString(16));
      var e = new Nj(),
        f = (Oj(), Pj),
        g;
      Qj ? (g = !1) : (g = !1);
      if (g) {
        var h = "Exception during lenientFormat for " + S(a);
        g = new Rj();
        g.j = null;
        g.o = f;
        g.v = h;
        for (g.j = c; e; ) {
          e = Pg([0], Sj, Tj);
          for (f = 0; f < e.length; f++) {
            var k = e[f];
            h = g;
            var l = typeof console === "undefined" ? null : new Uj(),
              p;
            if ((p = l)) ((p = h), (p = (k.j ? k.j : (Oj(), Vj)).sa() <= p.o.sa()));
            p &&
              ((k = h.o.sa()),
              (k =
                k >= (Oj(), Wj).sa()
                  ? "error"
                  : k >= (Oj(), Pj).sa()
                    ? "warn"
                    : k >= (Oj(), Xj).sa()
                      ? "info"
                      : "log"),
              console[k].call(console, h.v),
              h.j && Yj(l, k, h.j, "Exception: ", !0));
          }
          e = null;
        }
      }
      return "<" + S(a) + " threw " + S(Ig(Oh(c))) + ">";
    }
    throw c.J;
  }
}
function Zj() {}
var Vj, Xj, Wj, Pj;
F(Zj, R);
Zj.prototype.j = A("DUMMY");
Zj.prototype.sa = A(-1);
Zj.prototype.toString = function () {
  return this.j();
};
function Oj() {
  Oj = u();
  Vj = new ak();
  Xj = new bk();
  Wj = new ck();
  Pj = new dk();
}
function ak() {}
F(ak, Zj);
ak.prototype.j = A("ALL");
ak.prototype.sa = A(-2147483648);
function bk() {}
F(bk, Zj);
bk.prototype.j = A("INFO");
bk.prototype.sa = A(800);
function ck() {}
F(ck, Zj);
ck.prototype.j = A("SEVERE");
ck.prototype.sa = A(1e3);
function dk() {}
F(dk, Zj);
dk.prototype.j = A("WARNING");
dk.prototype.sa = A(900);
function Rj() {}
F(Rj, R);
function Sj() {}
F(Sj, R);
function Tj(a) {
  return a instanceof Sj;
}
function Uj() {}
F(Uj, R);
function Yj(a, c, e, f, g) {
  (!g && console.groupCollapsed
    ? console.groupCollapsed
    : console.group
      ? console.group
      : console.log
  ).call(console, S(f) + S(e.toString()));
  f = e.J;
  console[c].call(console, (f && f.stack) || "");
  (f = e.o) && Yj(a, c, f, "Caused by: ", !1);
  var h;
  e.F ? (h = e.F.j(Pg([0], Tg, ah))) : (h = Pg([0], Tg, ah));
  e = h;
  for (h = 0; h < e.length; h++) Yj(a, c, e[h], "Suppressed: ", !1);
  console.groupEnd && console.groupEnd.call(console);
}
function Nj() {}
F(Nj, R);
var Qj = !1;
function ek() {
  ek = u();
  fk = Error.stackTraceLimit;
}
var fk = 0;
function gk(a) {
  Fi(function () {
    a.C && !a.H && hk && hk(new Hj("XDeferred swallowed an error that was never read.", a.C));
  });
}
function ik() {}
F(ik, R);
function jk() {
  this.ca = this.F = !1;
}
var kk = [];
F(jk, R);
jk.prototype.dispose = function () {
  if (this.F) var a = null;
  else ((this.F = !0), (a = this.D ? this.D : kk), (this.D = null));
  if (a && (this.N(), a.length != 0)) for (var c = 0; c < a.length; c++) a[c].dispose();
};
jk.prototype.La = w("F");
function lk(a, c) {
  !c || c.La() ? (a = null) : a.F ? (a = c) : (a.D || (a.D = []), a.D.push(c), (a = null));
  a && a.dispose();
}
jk.prototype.N = function () {
  this.ca = !0;
};
jk.prototype.toString = function () {
  return R.prototype.toString.call(this) || "";
};
function mk(a) {
  a.F = !1;
  a.ca = !1;
}
function nk() {
  ok();
  jk.call(this);
  this.j = 0;
  this.H = this.v = this.o = !1;
  mk(this);
  this.j = 1;
  this.v = this.o = !1;
  this.L = [];
  this.B = [];
}
var hk;
F(nk, jk);
function pk(a, c) {
  ek();
  100 > Error.stackTraceLimit && (Error.stackTraceLimit = 100);
  Kj(a.j != 4, "$");
  Kj(a.j == 1, "aa");
  Error.stackTraceLimit = fk;
  var e = new ik();
  e.j = c;
  a.I = e;
  a.j = 2;
  qk(a, !0);
}
function rk(a, c) {
  Kj(a.j != 4, "$");
  Kj(a.j == 1, "aa");
  a.C = c;
  a.j = 3;
  gk(a);
  qk(a, !1);
}
function Jj(a, c, e) {
  Kj(a.j != 4, "ba");
  if (a.j != 1 && a.j != 2 && a.j != 3) throw hh("ca`" + S(sk(a))).J;
  if (a.j == 1) (c && a.L.push(c), e && a.B.push(e));
  else {
    if (a.j != 2 && a.j != 3) throw hh("da`" + S(sk(a))).J;
    if (a.o) {
      if (a.v) throw ih("ea`" + S(sk(a)), a.A).J;
      throw ih("fa`" + S(sk(a)), a.A).J;
    }
    a.o = !0;
    a.v = !0;
    try {
      a.j == 2 && c ? c(a.I.j) : a.j == 3 && e && ((a.H = !0), e(a.C));
    } catch (g) {
      var f = Yg(g);
      tk(f);
      a.A || (a.A = f);
      throw f.J;
    } finally {
      a.v = !1;
    }
    a.o = !1;
  }
}
function sk(a) {
  if (a.A) {
    var c = new Fh();
    c.j = "";
    for (var e = a.A; e; e = e.o)
      e.J && (c.j.length > 0 && Gh(c, "\nCaused by: "), Gh(c, e.J.stack));
    c = c.toString();
  } else c = "<none>";
  return "[" + a.j + ", " + a.v + ", " + a.o + ", " + S(c) + "]";
}
nk.prototype.transform = function (a) {
  var c = new nk();
  Jj(
    this,
    function (e) {
      try {
        var f = a(e);
      } catch (g) {
        e = Yg(g);
        rk(c, e);
        return;
      }
      pk(c, f);
    },
    function (e) {
      rk(c, e);
    },
  );
  return c;
};
function uk(a, c) {
  var e = new nk();
  Jj(
    a.transform(c),
    function (f) {
      Jj(
        f,
        function (g) {
          pk(e, g);
        },
        function (g) {
          rk(e, g);
        },
      );
    },
    function (f) {
      rk(e, f);
    },
  );
  return e;
}
nk.prototype.N = function () {
  this.C = this.I = null;
  this.j = 4;
  this.L.length = 0;
  this.B.length = 0;
  jk.prototype.N.call(this);
};
function qk(a, c) {
  a.o = !0;
  a.v = !0;
  try {
    if (c) for (var e = a.L, f = 0; f < e.length; f++) (0, e[f])(a.I.j);
    else for (a.B.length != 0 && (a.H = !0), f = a.B, e = 0; e < f.length; e++) (0, f[e])(a.C);
  } catch (h) {
    var g = Yg(h);
    tk(g);
    a.A || (a.A = g);
    throw g.J;
  } finally {
    a.v = !1;
  }
  a.o = !1;
  a.L.length = 0;
  a.B.length = 0;
}
function vk(a) {
  ok();
  hk = a;
}
function ok() {
  ok = u();
  hk = u();
}
function wk(a) {
  if (a == null) return ((a = new Tg()), Vg(a), Wg(a, Error(a)), a);
  if (ah(a)) return a;
  if (a instanceof Error) return Yg(a);
  a = new Jh();
  Ug(a, "ha");
  Wg(a, Error(a));
  throw a.J;
}
function xk(a, c) {
  if (c == null)
    for (c = 0; c < a.length; c = (c + 1) | 0) {
      if (a[c] == null) return c;
    }
  else for (var e = 0; e < a.length; e = (e + 1) | 0) if (Ah(c, a[e])) return e;
  return -1;
}
function yk(a) {
  if (a == null)
    throw ((a = new yh()), Ug(a, "can't identity hash null"), Wg(a, new TypeError(a)), a.J);
  return ":" + Lh(a);
}
function zk(a, c) {
  for (var e = 0, f = c.length; e < f; e = (e + 1) | 0) a.push(c[e]);
}
function Ak(a) {
  var c = K.onerror;
  K.onerror = function (e, f, g, h, k) {
    c && c(e, f, g, h, k);
    a({ message: e, fileName: f, line: g, lineNumber: g, Jf: h, error: k });
    return !0;
  };
}
function Bk(a) {
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
  var e = !1;
  try {
    var f = a.lineNumber || a.line || "Not available";
  } catch (h) {
    ((f = "Not available"), (e = !0));
  }
  try {
    var g = a.fileName || a.filename || a.sourceURL || K.$googDebugFname || c;
  } catch (h) {
    ((g = "Not available"), (e = !0));
  }
  c = Ck(a);
  return !e && a.lineNumber && a.fileName && a.stack && a.message && a.name
    ? { message: a.message, name: a.name, lineNumber: a.lineNumber, fileName: a.fileName, stack: c }
    : ((e = a.message),
      e == null &&
        ((e =
          a.constructor && a.constructor instanceof Function
            ? 'Unknown Error of type "' +
              (a.constructor.name ? a.constructor.name : Dk(a.constructor)) +
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
function Ck(a, c) {
  c || (c = {});
  c[Ek(a)] = !0;
  var e = a.stack || "",
    f = a.cause;
  f &&
    !c[Ek(f)] &&
    ((e += "\nCaused by: "),
    (f.stack && f.stack.indexOf(f.toString()) == 0) ||
      (e += typeof f === "string" ? f : f.message + "\n"),
    (e += Ck(f, c)));
  a = a.errors;
  if (Array.isArray(a)) {
    f = 1;
    var g;
    for (g = 0; g < a.length && !(f > 4); g++)
      c[Ek(a[g])] ||
        ((e += "\nInner error " + f++ + ": "),
        (a[g].stack && a[g].stack.indexOf(a[g].toString()) == 0) ||
          (e += typeof a[g] === "string" ? a[g] : a[g].message + "\n"),
        (e += Ck(a[g], c)));
    g < a.length && (e += "\n... " + (a.length - g) + " more inner errors");
  }
  return e;
}
function Ek(a) {
  var c = "";
  typeof a.toString === "function" && (c = "" + a);
  return c + a.stack;
}
function Fk(a, c) {
  a instanceof Error || ((a = Error(a)), Error.captureStackTrace && Error.captureStackTrace(a, Fk));
  a.stack || (a.stack = Gk(Fk));
  if (c) {
    for (var e = 0; a["message" + e]; ) ++e;
    a["message" + e] = String(c);
  }
  return a;
}
function Hk(a, c) {
  a = Fk(a);
  if (c) for (var e in c) kc(a, e, c[e]);
  return a;
}
function Gk(a) {
  var c = Error();
  if (Error.captureStackTrace) (Error.captureStackTrace(c, a || Gk), (c = String(c.stack)));
  else {
    try {
      throw c;
    } catch (e) {
      c = e;
    }
    c = (c = c.stack) ? String(c) : null;
  }
  c || (c = Ik(a || arguments.callee.caller, []));
  return c;
}
function Ik(a, c) {
  var e = [];
  if (yb(c, a) >= 0) e.push("[...circular reference...]");
  else if (a && c.length < 50) {
    e.push(Dk(a) + "(");
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
          h = (h = Dk(h)) ? h : "[fn]";
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
      e.push(Ik(a.caller, c));
    } catch (k) {
      e.push("[exception trying to get caller]\n");
    }
  } else a ? e.push("[...long stack...]") : e.push("[end]");
  return e.join("");
}
function Dk(a) {
  if (Jk[a]) return Jk[a];
  a = String(a);
  if (!Jk[a]) {
    var c = /function\s+([^\(]+)/m.exec(a);
    Jk[a] = c ? c[1] : "[Anonymous]";
  }
  return Jk[a];
}
var Jk = {};
function Kk(a) {
  return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (c, e, f) {
    return e + f.toUpperCase();
  });
}
function Lk(a, c, e, f, g, h, k) {
  var l = "";
  a && (l += a + ":");
  e && ((l += "//"), c && (l += c + "@"), (l += e), f && (l += ":" + f));
  g && (l += g);
  h && (l += "?" + h);
  k && (l += "#" + k);
  return l;
}
var Mk = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
);
function Nk(a) {
  return a ? decodeURI(a) : a;
}
function Ok(a, c) {
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
function Pk(a, c) {
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
function Qk(a, c, e) {
  if (Array.isArray(c)) for (var f = 0; f < c.length; f++) Qk(a, String(c[f]), e);
  else c != null && e.push(a + (c === "" ? "" : "=" + encodeURIComponent(String(c))));
}
function Rk(a, c) {
  var e = [];
  for (c = c || 0; c < a.length; c += 2) Qk(a[c], a[c + 1], e);
  return e.join("&");
}
function Sk(a) {
  var c = [],
    e;
  for (e in a) Qk(e, a[e], c);
  return c.join("&");
}
function Tk(a, c) {
  var e = arguments.length == 2 ? Rk(arguments[1], 0) : Rk(arguments, 1);
  return Pk(a, e);
}
function Uk(a, c, e) {
  e = e != null ? "=" + encodeURIComponent(String(e)) : "";
  return Pk(a, c + e);
}
function Vk(a, c, e, f) {
  for (var g = e.length; (c = a.indexOf(e, c)) >= 0 && c < f; ) {
    var h = a.charCodeAt(c - 1);
    if (h == 38 || h == 63)
      if (((h = a.charCodeAt(c + g)), !h || h == 61 || h == 38 || h == 35)) return c;
    c += g + 1;
  }
  return -1;
}
var Wk = /#|$/;
function Xk(a, c) {
  var e = a.search(Wk),
    f = Vk(a, 0, c, e);
  if (f < 0) return null;
  var g = a.indexOf("&", f);
  if (g < 0 || g > e) g = e;
  f += c.length + 1;
  return decodeURIComponent(a.slice(f, g !== -1 ? g : 0).replace(/\+/g, " "));
}
var Yk = /[?&]($|#)/;
function Zk(a, c) {
  for (var e = a.search(Wk), f = 0, g, h = []; (g = Vk(a, f, c, e)) >= 0; )
    (h.push(a.substring(f, g)), (f = Math.min(a.indexOf("&", g) + 1 || e, e)));
  h.push(a.slice(f));
  return h.join("").replace(Yk, "$1");
}
var $k;
$k = function (a) {
  if (!a) return a;
  a = (typeof a === "object" ? a.href : a).match(Mk);
  var c = a[1];
  return c !== "http" && c !== "https" ? c || "" : Lk(a[1], "", a[3], a[4], a[5], a[6], "");
};
function al(a) {
  a && typeof a.dispose == "function" && a.dispose();
}
function bl(a) {
  for (var c = 0, e = arguments.length; c < e; ++c) {
    var f = arguments[c];
    La(f) ? bl.apply(null, f) : al(f);
  }
}
function T() {
  this.L = this.L;
  this.F = this.F;
}
T.prototype.L = !1;
T.prototype.La = w("L");
T.prototype.dispose = function () {
  this.L || ((this.L = !0), this.N());
};
T.prototype[Symbol.dispose] = function () {
  this.dispose();
};
function cl(a, c) {
  c = Ta(al, c);
  a.L ? c() : (a.F || (a.F = []), a.F.push(c));
}
T.prototype.N = function () {
  if (this.F) for (; this.F.length; ) this.F.shift()();
};
function dl() {
  T.call(this);
  this.o = 0;
  this.j = null;
}
F(dl, T);
dl.prototype.init = function () {
  this.j = [];
};
var fl = new dl();
function gl(a) {
  this.e = a;
}
function tk(a) {
  if (a) {
    var c = a.j;
    a = a.J;
    if (a instanceof Object && !Object.isFrozen(a)) {
      var e = $k(a.fileName || a.filename || a.sourceURL || K.$googDebugFname || location.href);
      try {
        a.fileName = e;
      } catch (f) {}
    }
    if (fl.o >= 3) throw Error("ja`" + c);
    fl.o++;
    try {
      fl.La() ||
        a instanceof rj ||
        a instanceof hj ||
        (a == null ? void 0 : a.name) === "CanceledError" ||
        (fl.j && fl.j.length < 10 && fl.j.push(new gl(a)));
    } finally {
      fl.o--;
    }
  }
}
function hl(a) {
  if (a == null) return "null";
  var c = typeof a;
  return c === "object" ? (Array.isArray(a) ? "array" : c) : c;
}
function il(a, c, e) {
  a[c] = e !== void 0 ? e : null;
}
function jl(a) {
  for (var c in a) return !1;
  return !0;
}
function kl(a, c, e) {
  a[c] = Rg(e) ? e.j : e != null ? e : null;
}
function ll(a, c) {
  for (var e in c) {
    var f = c[e];
    a[e] = f != null ? f : null;
  }
}
function ml(a) {
  var c = {},
    e;
  for (e in a) c[e] = a[e];
  return c;
}
function nl(a, c) {
  a = a[c];
  return a != null ? a : null;
}
function ol(a) {
  var c = new nk();
  pk(c, a);
  return c;
}
var pl;
function ql() {
  if (!pl) {
    var a = new rl(null);
    pl = function () {
      return a;
    };
  }
  var c;
  return ((c = pl), c());
}
function sl() {}
F(sl, R);
function tl(a, c) {
  if (Gg(a, c)) return !0;
  if (!a || !c) return !1;
  var e = a.length;
  if (e != c.length) return !1;
  for (var f = 0; f < e; f = (f + 1) | 0) if (!ul(a, c, f)) return !1;
  return !0;
}
function ul(a, c, e) {
  var f = hl(a[e]),
    g = hl(c[e]);
  if (!Gg(f, g)) return !1;
  switch (f) {
    case "null":
      return !0;
    case "boolean":
      return a[e] == c[e];
    case "number":
      return a[e] == c[e];
    case "string":
      return Gg(a[e], c[e]);
    case "array":
      return tl(a[e], c[e]);
    case "object":
      return vl(a[e], c[e]);
    default:
      throw dh("la`" + S(f)).J;
  }
}
function wl(a) {
  for (var c = Array(a.length), e = 0; e < a.length; e = (e + 1) | 0) c[e] = a[e];
  return c;
}
function xl(a, c, e) {
  var f = hl(a[e]),
    g = hl(c[e]);
  if (!Gg(f, g)) return !1;
  switch (f) {
    case "null":
      return !0;
    case "boolean":
      return a[e] == c[e];
    case "number":
      return a[e] == c[e];
    case "string":
      return Gg(a[e], c[e]);
    case "object":
      return vl(a[e], c[e]);
    case "array":
      return tl(a[e], c[e]);
    default:
      throw dh("ma`" + S(f) + "`" + S(e)).J;
  }
}
function vl(a, c) {
  if (Gg(a, c)) return !0;
  if (a == null || c == null) return !1;
  var e = Object.keys(a).length,
    f = Object.keys(c).length;
  if (e != f) return !1;
  for (f = 0; f < e; f = (f + 1) | 0) {
    var g = Object.keys(a)[f];
    if (!xl(a, c, g)) return !1;
  }
  return !0;
}
function yl() {}
F(yl, R);
yl.prototype.get = function () {
  if (this.o == null) {
    var a = K._docs_flag_initialData;
    this.o = a != null ? a : {};
  }
  return this.o;
};
yl.prototype.j = function () {
  return this.get();
};
function rl(a) {
  this.j = new yl();
  this.o = null;
  if (a != null)
    for (var c in a) {
      var e = c,
        f = a[c];
      if (this.o) throw hh("na").J;
      var g = this.j.j();
      kl(g, e, f);
    }
}
F(rl, R);
rl.prototype.clear = function () {
  this.j = new yl();
  this.o = null;
};
rl.prototype.get = function (a) {
  zl(this, a);
  return this.j.j()[a];
};
function Al(a, c) {
  a = a.j.j();
  return c in a;
}
function U(a, c) {
  a = a.get(c);
  return typeof a == "string" ? a == "true" || a == "1" : !!a;
}
function Bl(a, c) {
  zl(a, c);
  if (!Al(a, c) || a.get(c) == null) return NaN;
  try {
    var e = S(a.get(c));
    Lg ||
      (Lg = RegExp(
        "^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$",
      ));
    if (!Lg.test(e)) {
      var f = new Kh();
      Ug(f, "O`" + S(e));
      Wg(f, Error(f));
      throw f.J;
    }
    return parseFloat(e);
  } catch (h) {
    var g = Yg(h);
    if (g instanceof Kh) return NaN;
    throw g.J;
  }
}
function Cl(a, c) {
  zl(a, c);
  if (!Al(a, c)) return "";
  a = a.get(c);
  if (a == null) return "";
  var e;
  if ((c = "number" === typeof a && ((e = a), !0))) c = sh(e).equals(sh(e));
  var f;
  c ? (f = "" + sh(e)) : (f = S(a));
  return f;
}
function zl(a, c) {
  if (a.o) {
    try {
      var e = a.j.j()[c];
    } catch (k) {
      var f = Yg(k);
      if (f instanceof ch) e = "injection-failed";
      else throw f.J;
    }
    try {
      var g = Lj(a.o).j()[c];
    } catch (k) {
      var h = Yg(k);
      if (h instanceof ch) g = "injection-failed";
      else throw h.J;
    }
    if (!zh(e, g)) throw hh("oa").J;
  }
}
function Dl(a, c, e) {
  this.o = this.F = !1;
  this.A = a;
  this.j = {};
  this.v = {};
  this.F = !0 === e;
  this.o = !this.F;
  this.L = c;
}
F(Dl, R);
Dl.prototype.Ma = function () {
  return this.F || !jl(this.v);
};
function El(a, c) {
  a = Fl(a, c);
  if (a == null) return null;
  Th(hl(a), "object");
  var e;
  return a instanceof Array && ((e = a), !0) ? e.concat() : ml(a);
}
function Gl(a, c) {
  a = Hl(a, c);
  return a == null || a == 0 ? null : a;
}
function Hl(a, c) {
  a = Fl(a, c);
  return a == null ? null : a;
}
function Il(a, c) {
  a = Fl(a, c);
  return a == null ? null : a;
}
function Jl(a, c, e) {
  V(a, c, e ? "true" : "");
}
function Kl(a, c) {
  a = Fl(a, c);
  return a == null ? null : a.concat();
}
function Fl(a, c) {
  a = a.j[c];
  return a != null ? a : null;
}
function Ll(a, c, e, f) {
  if (e instanceof Array)
    return (
      U(a.L, "docs-anlpfdo") || Ml(e, [], U(a.L, "docs-anlpfdo")),
      Nl(e, [], U(a.L, "docs-anlpfdo")),
      Ol(e),
      (a.j[c] != null && tl(a.j[c], e)) ||
        ((e = !0 === f ? e : e.concat()), (a.j[c] = e ? e : null), a.o || (a.v[c] = e ? e : null)),
      a
    );
  if (
    Rg(e) || "string" === typeof e || "number" === typeof e || "boolean" === typeof e
      ? 0
      : Th(hl(e), "object")
  )
    return (
      Nl(e, [], U(a.L, "docs-anlpfdo")),
      Pl(e),
      (a.j[c] != null && vl(a.j[c], e)) ||
        ((e = !0 === f ? e : ml(e)),
        (a.j[c] = e != null ? e : null),
        a.o || (a.v[c] = e != null ? e : null)),
      a
    );
  var g = a.j[c];
  if (g == null) f = e == null;
  else {
    var h;
    f = Rg(e) && ((h = e), !0) ? Ah(g, h.j) : Ah(g, e);
  }
  f || (kl(a.j, c, e), a.o || kl(a.v, c, e));
  return a;
}
function V(a, c, e) {
  Ll(a, c, e, !1);
}
function Ql(a, c, e, f) {
  Rl(a.j, c, e, f);
  a.o || Rl(a.v, c, e, f);
}
function Rl(a, c, e, f) {
  var g = nl(a, c);
  if (g == null) {
    var h = (g = {});
    a[c] = h != null ? h : null;
  }
  Th(hl(g), "object");
  f == null ? (g[e] = null) : kl(g, e, f);
}
Dl.prototype.C = function () {
  this.v = {};
  this.F = !1;
};
Dl.prototype.Bc = A(null);
function Sl(a, c) {
  this.j = 0;
  this.o = a;
  this.j = c;
}
F(Sl, R);
function Pl(a) {
  for (var c in a) {
    if (!a.hasOwnProperty(c) || typeof c === "function") return !1;
    var e = a[c];
    if (Ma(e) && !Array.isArray(e)) return Pl(e);
    if (Array.isArray(e)) return Ol(e);
  }
  return !0;
}
function Ol(a) {
  for (var c = 0; c < a.length; c++) {
    if (Ma(a[c]) && !Array.isArray(a[c])) return Pl(a[c]);
    if (Array.isArray(a[c])) return Ol(a[c]);
  }
  return !0;
}
function Ml(a, c, e) {
  c.push(a);
  for (var f = 0; f < a.length; f = (f + 1) | 0)
    if (Array.isArray(a[f])) {
      if (e) xk(c, a[f]);
      else if (xk(c, a[f]) >= 0) throw dh("qa").J;
      Ml(a[f], c, e);
    }
  Gg(a, c.pop());
}
function Nl(a, c, e) {
  c.push(a);
  var f;
  if (a instanceof Array && ((f = a), !0)) {
    var g = f;
    for (f = 0; f < g.length; f++) {
      var h = g[f];
      if (h != null) {
        if (e) xk(c, h);
        else if (xk(c, h) >= 0) throw dh("qa").J;
        Nl(h, c, e);
      }
    }
  } else if (a instanceof Object && ((g = a), !0))
    for (f = Object.keys(g), h = 0; h < f.length; h++) {
      var k = f[h];
      if (g[k] != null) {
        if (e) xk(c, g[k]);
        else if (xk(c, g[k]) >= 0) throw dh("qa").J;
        Nl(g[k], c, e);
      }
    }
  Gg(a, c.pop());
}
function Tl(a) {
  this.G = M(a, 0, "docs.security.access_capabilities");
}
F(Tl, Q);
var Ul = Dg(Tl);
Tl.te = "docs.security.access_capabilities";
function Vl() {
  var a = a
    ? a
    : function (e) {
        return xh(Math.floor(Math.random() * e));
      };
  var c = (a(2147483647) >>> 0).toString(16);
  c = S("0".repeat(Math.max(0, (8 - c.length) | 0))) + S(c);
  a = (a(2147483647) >>> 0).toString(16);
  return S(a) + S(c);
}
function Wl(a) {
  this.j = a;
}
F(Wl, R);
Wl.prototype.getType = w("j");
var Xl = {
  mf: "build-label",
  Me: "buildLabel",
  Ne: "clientLog",
  Re: "docId",
  pf: "mobile-app-version",
  Af: "severity",
  yf: "reportSeverity",
  Ff: "severity-unprefixed",
  ef: "isArrayPrototypeIntact",
  ff: "isEditorElementAttached",
  We: "documentCharacterSet",
  hf: "isModuleLoadFailure",
  xf: "reportName",
  nf: "locale",
  Pe: "createdOnServer",
  tf: "numUnsavedCommands",
  Qe: "cspViolationContext",
  wf: "relatedToBrowserExtension",
  Hf: "workerError",
  Se: "docosPostLimitExceeded",
  Te: "docosPostLimitType",
  Ue: "docosReactionLimitExceeded",
  Ve: "docosReactionLimitType",
  vf: "origin",
  zf: "saveTakingTooLongOnClient",
  Cf: "truncatedCommentNotificationsCount",
  Df: "truncatedCommentNotificationsFromPayload",
  sf: "nonfatalReason",
  Gf: "usesModuleSetsServing",
  jf: "isNestedDrawingsEnabled",
  Xe: "embeddedDrawingState",
};
function Yl(a) {
  this.j = a;
}
F(Yl, R);
Yl.prototype.info = function (a, c, e) {
  this.j.info(a.J, c, e);
};
Yl.prototype.log = function (a, c, e) {
  this.j.log(a.J, c, e);
};
function Zl(
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
  I,
  D,
  Y,
  aa,
  Va,
  td,
  tc,
  ug,
  vg,
  wg,
  xg,
  gy,
  hy,
  iy,
  jy,
  ky,
  ly,
  my,
  ny,
  oy,
  py,
  qy,
  ry,
  sy,
  ty,
  uy,
  vy,
  wy,
  xy,
  yy,
  zy,
  Ay,
  By,
  Cy,
  Dy,
  Ey,
  Fy,
  Gy,
  Hy,
  Iy,
  Jy,
  Ky,
  Ly,
  My,
  Ny,
  Oy,
  Py,
  Qy,
  Ry,
  Sy,
  Ty,
  Uy,
  Vy,
  Wy,
  Xy,
  Yy,
  Zy,
  $y,
  az,
  bz,
  cz,
  dz,
  ez,
  fz,
  gz,
  hz,
  iz,
  jz,
  kz,
  lz,
  mz,
  nz,
  oz,
  pz,
) {
  this.Ja = a;
  this.Hb = e;
  this.ha = c;
  this.Qb = f;
  this.ia = g;
  this.Gb = h;
  this.O = k;
  this.tc = l;
  this.ac = p;
  this.Yb = q;
  this.jd = r;
  this.zc = x;
  this.Zb = y;
  this.cc = z;
  this.j = B;
  this.Ea = I;
  this.Gc = D;
  this.C = Y;
  this.Mc = aa;
  this.oa = Va;
  this.Tb = td;
  this.Ub = zy;
  this.Kb = bz;
  this.Qc = tc;
  this.Sc = Ay;
  this.hc = By;
  this.M = ug;
  this.Sb = vg;
  this.bc = wg;
  this.kc = xg;
  this.fc = gy;
  this.xc = hy;
  this.Ka = iy;
  this.Uc = jy;
  this.U = ky;
  this.S = ly;
  this.I = my;
  this.V = ny;
  this.Y = oy;
  this.H = py;
  this.ca = qy;
  this.Fb = ry;
  this.Hc = sy;
  this.fd = ty;
  this.gd = uy;
  this.hd = vy;
  this.cd = wy;
  this.ad = xy;
  this.ed = yy;
  this.o = Cy;
  this.v = Dy;
  this.Ga = Ey;
  this.Jb = Fy;
  this.va = Gy;
  this.P = Hy;
  this.kd = Iy;
  this.Nc = Jy;
  this.Ib = Ky;
  this.Eb = Ly;
  this.Wb = My;
  this.Vb = Ny;
  this.na = Oy;
  this.Oc = Py;
  this.Dc = Qy;
  this.Pb = Ry;
  this.Ia = Sy;
  this.Mb = Ty;
  this.D = Uy;
  this.A = Vy;
  this.L = Wy;
  this.dc = Xy;
  this.ec = Yy;
  this.Jc = Zy;
  this.Fc = $y;
  this.Xb = az;
  this.ga = cz;
  this.Lb = dz;
  this.R = ez;
  this.Kc = fz;
  this.Rc = gz;
  this.Rb = hz;
  this.Wc = iz;
  this.Ic = jz;
  this.Ec = kz;
  this.F = lz;
  this.Lc = mz;
  this.B = nz;
  this.K = oz;
  this.Fa = pz;
}
F(Zl, R);
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
function cm(a) {
  this.G = M(a);
}
F(cm, Q);
var dm = [0, yg, [0, Ag, tg], Ag, Bg];
function em(a) {
  this.G = M(a);
}
F(em, Q);
var fm = [0, dm];
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
function wm() {}
F(wm, R);
function xm(a) {
  var c = new wm();
  c.Fc = a;
  return c;
}
function ym(a) {
  a.v && (a.j || (a.j = new cm()), N(a.j, $l, 4, a.v));
  return new Zl(
    a.Fc,
    a.va,
    a.o,
    a.Rb,
    a.j,
    a.Jb,
    a.V,
    a.xc,
    a.bc,
    a.Zb,
    a.Fb,
    a.Ec,
    a.ac,
    a.dc,
    a.B,
    a.Ia,
    a.Ic,
    a.I,
    a.Oc,
    a.Fa,
    a.Ub,
    a.Wc,
    a.S,
    a.Tb,
    a.cc,
    a.tc,
    a.hc,
    a.zc,
    a.Hc,
    a.cd,
    a.ha,
    a.ca,
    a.P,
    a.ga,
    a.ia,
    a.O,
    a.na,
    a.Ib,
    a.Nc,
    a.jd,
    a.kd,
    a.Eb,
    a.gd,
    a.fd,
    a.hd,
    a.Vb,
    a.ad,
    a.kc,
    a.F,
    a.C,
    a.Ka,
    a.Lb,
    a.Ga,
    a.U,
    a.Gb,
    a.Uc,
    a.Kb,
    a.Hb,
    a.Xb,
    a.Wb,
    a.Ea,
    a.Rc,
    a.Jc,
    a.Qb,
    a.Dc,
    a.Pb,
    a.K,
    a.D,
    a.M,
    a.ec,
    a.fc,
    a.Qc,
    a.Lc,
    a.Yb,
    a.A,
    a.oa,
    a.Mb,
    a.Y,
    a.Mc,
    a.ve,
    a.Sb,
    a.ed,
    a.Kc,
    a.Gc,
    a.H,
    a.Sc,
    a.L,
    a.R,
    a.Ja,
  );
}
function zm(a) {
  var c = xm(a.Ja);
  c.va = a.ha;
  c.o = a.Hb;
  c.Rb = a.Qb;
  c.j = a.ia;
  c.v && c.j && Ke(c.j, $l, 4);
  c.C = a.v;
  c.Jb = a.Gb;
  c.xc = a.tc;
  c.bc = a.ac;
  c.Ea = a.na;
  c.Zb = a.Yb;
  c.Fb = a.jd;
  c.Ec = a.zc;
  c.ac = a.Zb;
  c.dc = a.cc;
  c.B = a.j;
  c.Ia = a.Ea;
  c.Ic = a.Gc;
  c.I = a.C;
  c.Oc = a.Mc;
  c.Fa = a.oa;
  c.Ub = a.Tb;
  c.Vb = a.Ub;
  c.Wc = a.Qc;
  c.ad = a.Sc;
  c.kc = a.hc;
  c.S = a.M;
  c.Tb = a.Sb;
  c.cc = a.bc;
  c.tc = a.kc;
  c.hc = a.fc;
  c.zc = a.xc;
  c.Hc = a.Ka;
  c.cd = a.Uc;
  c.ha = a.U;
  c.ca = a.S;
  c.P = a.I;
  c.ga = a.V;
  c.ia = a.Y;
  c.O = a.H;
  c.na = a.ca;
  c.Ib = a.Fb;
  c.Nc = a.Hc;
  c.jd = a.fd;
  c.kd = a.gd;
  c.Eb = a.hd;
  c.gd = a.cd;
  c.fd = a.ad;
  c.hd = a.ed;
  c.Ka = a.Ga;
  c.F = a.o;
  c.Lb = a.Jb;
  c.Ga = a.va;
  c.U = a.P;
  c.Gb = a.kd;
  c.Uc = a.Nc;
  c.Hb = a.Eb;
  c.Xb = a.Wb;
  c.Wb = a.Vb;
  c.Kb = a.Ib;
  c.Rc = a.Oc;
  c.Jc = a.Dc;
  c.Qb = a.Pb;
  c.Dc = a.Ia;
  c.Pb = a.Mb;
  c.K = a.D;
  c.D = a.A;
  c.M = a.L;
  c.ec = a.dc;
  c.fc = a.ec;
  c.Qc = a.Jc;
  c.Lc = a.Fc;
  c.Yb = a.Xb;
  c.A = a.Kb;
  c.oa = a.ga;
  c.Mb = a.Lb;
  c.Y = a.R;
  c.Mc = a.Kc;
  c.ve = a.Rc;
  c.Sb = a.Rb;
  c.ed = a.Wc;
  c.Gc = a.Ec;
  c.H = a.F;
  c.Sc = a.Lc;
  c.L = a.B;
  c.Kc = a.Ic;
  c.V = a.O;
  c.R = a.K;
  c.Ja = a.Fa;
  return c;
}
function Am() {
  jk.call(this);
  mk(this);
}
F(Am, jk);
Am.prototype.clear = u();
Am.prototype.log = u();
function Bm(a, c) {
  this.A = !1;
  this.v = a ? a : Cm();
  this.j = {};
  this.F = new Am();
  this.o = {};
  this.A = zh(c, !0);
}
F(Bm, R);
Bm.prototype.D = function (a, c, e) {
  e = Date.now() - e;
  c[29031] = e !== void 0 ? e : null;
  this.o = ml(a);
  ll(this.o, c);
};
Bm.prototype.C = function () {
  return JSON.stringify(this.o);
};
function Dm(a, c) {
  var e = (Em(), Fm);
  Fm = (Fm + 1) | 0;
  e = "goog_" + e;
  var f = a.j;
  a = Gm(a, c, void 0, void 0, !1);
  il(f, e, a);
  return e;
}
function Gm(a, c, e, f, g) {
  a.B && a.B.j(c);
  var h = new Hm(),
    k = a.v,
    l = a.v.j ? performance.now() : Date.now(),
    p = a.A,
    q = a.L,
    r = a.B;
  h.v = !1;
  h.D = 0;
  h.O = a;
  h.C = k;
  h.o = l;
  h.j = c;
  h.L = p;
  h.I = !0 === e;
  h.M = f;
  h.H = !0 === g;
  h.A = q;
  h.B = r;
  h.F = null;
  return h;
}
Bm.prototype.saveInitialLoadStats = Bm.prototype.D;
Bm.prototype.getInitialLoadStats = Bm.prototype.C;
function Em() {
  Em = u();
  Fm = Math.floor(Math.random() * -2147483648) | 0;
}
var Fm = 0;
function Hm() {
  this.v = this.H = this.L = this.I = !1;
  this.D = 0;
}
F(Hm, R);
Hm.prototype.complete = function (a) {
  if (this.v) throw hh("sa`" + S(this.j)).J;
  this.v = !0;
  this.K = this.D + (this.o != null ? (this.C.j ? performance.now() : Date.now()) - this.o : 0);
  this.o = null;
  a == null && (a = this.M);
  this.L
    ? ((a = a == null ? xm(21) : zm(a)), this.A && this.A.o(a), Im(this, a), (a = ym(a)))
    : (this.A && (a = this.A.j(a)),
      this.F != null && ((a = a ? zm(a) : xm(21)), Im(this, a), (a = ym(a))));
  this.O.F.log(this.j, this.K, this.I, a, this.H);
  this.B && this.B.o(this.j, this.K, a);
};
Hm.prototype.start = function () {
  if (this.v) throw hh("ua`" + S(this.j)).J;
  if (this.o != null) throw hh("va`" + S(this.j)).J;
  this.o = this.C.j ? performance.now() : Date.now();
  this.B && this.B.j(this.j);
};
function Im(a, c) {
  if (a.F != null) {
    var e = c.o;
    e || ((e = new mm()), (c.o = e));
    uf(e, 7, a.F);
  }
}
function Jm() {
  this.j = !1;
}
var Km;
F(Jm, R);
function Cm() {
  Lm();
  return Km;
}
function Mm() {
  var a = new Jm();
  a.j = "performance" in K && !!performance.now;
  return a;
}
function Lm() {
  Lm = u();
  Km = Mm();
}
function Nm(a) {
  this.v = !1;
  this.j = {};
  a || Cm();
}
var Om = { cov: "mark_fully_visible", coe: "mark_interactive", fcoe: "mark_fully_loaded" };
F(Nm, R);
function Pm(a, c) {
  a.v && delete a.F[c];
}
Nm.prototype.o = function (a) {
  Qm(this, a, Date.now());
  Pm(this, a);
  this.A && (this.A.j(a), (a = Om[a]), a != null && this.A.j(a));
};
Nm.prototype.C = function (a, c) {
  a in this.j || il(this.j, a, 0);
  il(this.j, a, this.j[a] + c);
  Pm(this, a);
};
function Qm(a, c, e) {
  if (c in a.j) throw dh("za`" + S(c)).J;
  il(a.j, c, e);
}
Nm.prototype.D = function (a) {
  if (!U(ql(), "icso")) {
    if (a != null)
      for (var c in a) {
        var e = c;
        Qm(this, e, a[c]);
        Pm(this, e);
      }
    Qm(this, "sldummy", 0);
    Pm(this, "sldummy");
  }
};
Nm.prototype.initialize = function (a, c, e, f, g) {
  if (this.v) throw dh("wa").J;
  for (var h in this.j) {
    if (h in a) throw dh("xa`" + S(h)).J;
    il(a, h, this.j[h]);
  }
  this.j = a;
  a = {};
  for (c = 0; c < e.length; c = (c + 1) | 0) a[e[c]] = !0;
  this.F = a;
  this.B = g;
  for (var k in this.j) delete this.F[k];
  this.B.j();
  this.B.o();
  this.v = !0;
};
Nm.prototype.setTime = Nm.prototype.o;
Nm.prototype.incrementTime = Nm.prototype.C;
Nm.prototype.setServerValues = Nm.prototype.D;
var Rm;
function Sm() {
  Sm = u();
  Rm = new Nm(null);
}
var Tm;
function Um() {
  Um = u();
  Tm = "";
  Vm = !1;
}
var Vm = !1;
function Wm() {}
F(Wm, R);
Wm.prototype.equals = function (a) {
  return Xm(this, a);
};
Wm.prototype.ua = function () {
  for (var a = 1, c = Ym(this), e = 0; e < c.length; e++) {
    var f = this[c[e]];
    f != null && (a = Math.imul(1000003, a) ^ Nh(f));
  }
  return a;
};
Wm.prototype.toString = function () {
  var a = Oh(this);
  a = Xh(Xh(S(Eg(a.o)) + S(Wh("[]", a.j)), "."), "$");
  a = a.substr((a.lastIndexOf("AutoValue_") + 1) | 0);
  var c = S(a) + "{";
  a = new Hh();
  a.A = ", ".toString();
  a.v = c.toString();
  a.o = "}".toString();
  a.B = S(a.v) + S(a.o);
  c = Ym(this);
  for (var e = 0; e < c.length; e++) {
    var f = c[e],
      g = this[f];
    Array.isArray(g) && (g = "[" + S(g) + "]");
    var h = a;
    f = S(f) + "=" + S(g);
    h.j ? Gh(h.j, h.A) : ((g = new Fh()), (g.j = h.v), (h.j = g));
    h = h.j;
    h.j = S(h.j) + S(f);
  }
  return a.toString();
};
function Xm(a, c) {
  if (c == null || !Gg(Oh(c), Oh(a))) return !1;
  var e = Ym(a);
  if (e.length != Ym(c).length) return !1;
  for (var f = 0; f < e.length; f++) {
    var g = e[f];
    if (!zh(a[g], c[g])) return !1;
  }
  return !0;
}
function Ym(a) {
  var c = Object.keys(a),
    e = a.C;
  return e
    ? c.filter(function (f) {
        return !e.includes(f);
      })
    : c;
}
function Zm() {
  jk.call(this);
  mk(this);
}
F(Zm, jk);
function $m() {
  Zm.call(this);
  this.o = {};
  this.j = null;
}
F($m, Zm);
$m.prototype.N = function () {
  Zm.prototype.N.call(this);
  var a = this.o,
    c;
  for (c in a) delete a[c];
  this.j = null;
};
$m.prototype.dispatchEvent = function (a) {
  an(this, a);
};
function an(a, c) {
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
function bn() {}
F(bn, R);
function cn() {
  jk.call(this);
  mk(this);
  this.j = [];
}
F(cn, jk);
function dn(a, c, e) {
  var f;
  a: {
    for (f = 0; f < a.j.length; f = (f + 1) | 0) {
      var g = a.j[f];
      if (Gg(g.o, e) && Gg(g.j, c)) {
        f = !0;
        break a;
      }
    }
    f = !1;
  }
  if (!f) {
    a = a.j;
    Lj(e);
    f = c.o;
    if (yk(e) in f) {
      c = [e];
      e = new Fh();
      e.j = "";
      for (a = g = 0; a < c.length; ) {
        f = "Observer %s previously registered.".indexOf("%s", g);
        if (f == -1) break;
        e.j = S(e.j) + S("Observer %s previously registered.".substr(g, (f - g) | 0));
        g = void 0;
        Gh(e, Mj(c[((g = a), (a = (a + 1) | 0), g)]));
        g = (f + 2) | 0;
      }
      e.j = S(e.j) + S("Observer %s previously registered.".substr(g, (34 - g) | 0));
      if (a < c.length) {
        for (f = " ["; a < c.length; a = (a + 1) | 0) (Gh(e, f), Gh(e, Mj(c[a])), (f = ", "));
        e.j = S(e.j) + String.fromCharCode(93);
      }
      throw hh(e.toString()).J;
    }
    il(c.o, yk(e), e);
    c.j = null;
    f = new bn();
    f.j = c;
    f.o = e;
    a.push(f);
  }
}
cn.prototype.N = function () {
  var a;
  for (a = this.j.pop(); a; ) {
    var c = a.j;
    a = a.o;
    var e = c.o;
    yk(a) in e && ((e = c.o), (a = yk(a)), delete e[a], (c.j = null));
    a = this.j.pop();
  }
  jk.prototype.N.call(this);
};
function W() {
  jk.call(this);
  mk(this);
}
F(W, jk);
C = W.prototype;
C.oc = function (a) {
  if (!(xk(this.ba(), a.A) >= 0)) throw dh("Ba`" + S(a.A)).J;
  return this.Wa(a);
};
C.qa = function (a, c) {
  var e = this.fa(a),
    f = [];
  a = new en(e, a, c, null);
  f.push(a);
  return f;
};
C.Wa = function (a) {
  return this.qa(a, null);
};
C.fa = function (a) {
  throw dh("Ca`" + S(a.A)).J;
};
C.Z = function (a) {
  return gn(a) ? xk(this.ba(), a.B) >= 0 : !1;
};
function hn(a) {
  this.v = a;
}
F(hn, R);
hn.prototype.getType = w("v");
function gn(a) {
  a = a.getType();
  return a === "update-record" || a === "delete-record";
}
function jn(a, c, e) {
  this.v = a;
  this.C = c;
  this.B = e;
}
F(jn, hn);
function kn(a) {
  if (a.C == null) throw dh("Da").J;
  return a.C;
}
function en(a, c, e, f) {
  jn.call(this, f ? f : "update-record", a, c.A);
  this.o = !1;
  a = e;
  this.o = c.F;
  this.j = {};
  e = c.v;
  a = a ? a : [];
  for (var g in e) kl(this.j, g, xk(a, g) >= 0 ? Fl(c, g) : c.j[g]);
}
F(en, jn);
function ln(a, c) {
  mn();
  this.j = c;
}
var nn;
F(ln, R);
ln.prototype.Vc = function (a, c) {
  for (var e = wh(nn.j()), f = [], g = 0; g < a.length; g = (g + 1) | 0) f.push(new on(a[g]));
  !0 === c && ((a = wh(nn.j()) - e), this.j.C("md", a));
  return f;
};
function mn() {
  mn = u();
  nn = new pn();
}
function pn() {}
F(pn, R);
pn.prototype.j = function () {
  return sh(Date.now());
};
function qn(a) {
  this.o = a;
}
F(qn, R);
qn.prototype.j = function () {
  var a;
  return ((a = this.o), a());
};
function rn() {
  this.o = !1;
  this.j = [];
}
F(rn, R);
function sn(a) {
  var c = a.j;
  a.j = [];
  a.o = !1;
  return c;
}
function tn(a, c, e, f) {
  Dl.call(this, "document", f, e);
  this.D = this.D = !1;
  this.B = new rn();
  V(this, "id", a);
  V(this, "documentType", c);
}
var un = [0, 1, 5, 4, 2, 3];
F(tn, Dl);
C = tn.prototype;
C.X = function () {
  return this.j.id;
};
C.getType = function () {
  return this.j.documentType;
};
C.Bc = function () {
  var a,
    c = this.B.j.length == 0;
  c ? (a = Dl.prototype.Bc.call(this)) : (a = new Sl(this.X(), c ? 1 : 2));
  return a;
};
C.ub = function () {
  return Il(this, "resourceKey");
};
C.Ma = function () {
  return Dl.prototype.Ma.call(this) || this.B.j.length != 0;
};
function vn(a, c, e) {
  this.v = a;
  this.F = c;
  this.C = e;
}
F(vn, hn);
function wn(a, c, e, f) {
  vn.call(this, "append-commands", a, c);
  this.A = !1;
  this.B = e;
  this.A = f;
}
F(wn, vn);
function xn(a, c, e) {
  jk.call(this);
  mk(this);
  this.ae = a;
  this.ce = c;
  this.Yd = new ln(this.ce, e);
}
F(xn, jk);
xn.prototype.Aa = w("ae");
xn.prototype.Vc = function (a, c) {
  return this.Yd.Vc(a, c);
};
xn.prototype.nc = function (a) {
  for (var c = new rn(), e = a.B, f = 0; f < e.j.length; f = (f + 1) | 0) {
    var g = c,
      h = e.j[f];
    !0 === e.o && ((g.j = []), (g.o = !0));
    g.j.push(h);
    e.o = !1;
  }
  e.j = [];
  if (c.j.length == 0) return [];
  e = c.o;
  return [new wn(a.X(), a.getType(), sn(c), e)];
};
function yn(a, c) {
  Hj.call(this, a, c);
  this.A = {};
  Wg(this, Error(this));
}
F(yn, Hj);
function zn(a, c, e, f, g) {
  yn.call(
    this,
    "Local storage error: " + S(c) + String(f != null ? " (" + S(An(f)) + ")" : ""),
    ah(e) ? e : null,
  );
  this.type = 0;
  this.v = !1;
  this.type = a;
  this.cause = e;
  this.v = g != null && g;
  Wg(this, Error(this));
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
function Cn(a) {
  this.j = a;
}
F(Cn, R);
function Dn(a, c, e, f) {
  this.v = "append-template-commands";
  this.A = !1;
  this.B = a;
  this.C = c;
  this.F = e;
  this.A = f;
}
F(Dn, hn);
Dn.prototype.Aa = w("C");
function En(a, c, e) {
  Dl.call(this, "applicationMetadata", e, c);
  this.B = !1;
  V(this, "dt", a);
  this.D = [];
}
F(En, Dl);
En.prototype.Aa = function () {
  return this.j.dt;
};
En.prototype.C = function () {
  Dl.prototype.C.call(this);
  this.B = !1;
};
En.prototype.Ma = function () {
  return this.B || Dl.prototype.Ma.call(this);
};
function Fn() {
  this.j = this.v = this.B = this.A = this.F = this.C = 0;
}
F(Fn, R);
function Gn(a) {
  var c = new Fn();
  if (a == null) throw Zg().J;
  c.o = a;
  return c;
}
function Hn(a, c) {
  a.C = c;
  a.j = ((a.j | 1) << 24) >> 24;
  return a;
}
function In(a, c) {
  a.F = c;
  a.j = ((a.j | 2) << 24) >> 24;
  return a;
}
function Jn(a, c) {
  a.A = c;
  a.j = ((a.j | 4) << 24) >> 24;
  return a;
}
function Kn(a, c) {
  a.B = c;
  a.j = ((a.j | 8) << 24) >> 24;
  return a;
}
function Ln(a, c) {
  a.v = c;
  a.j = ((a.j | 16) << 24) >> 24;
  return a;
}
function Mn(a) {
  if (a.j != 31 || a.o == null) throw gh().J;
  var c = new Nn(),
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
function Nn() {
  this.j = this.v = this.o = this.A = this.B = 0;
}
F(Nn, Wm);
var On = "c oc ol otv op ou ppu ppe pwu u emm".split(" ");
function Pn(a, c, e, f) {
  Dl.call(this, a, f, e);
  V(this, "dataType", c);
}
F(Pn, Dl);
function Qn(a) {
  W.call(this);
  this.ja = a;
}
F(Qn, W);
Qn.prototype.ba = function () {
  return ["cacheUpdateStats"];
};
Qn.prototype.fa = A(null);
Qn.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) && !Th(a.getType(), "delete-record");
};
function Rn() {
  W.call(this);
}
F(Rn, W);
C = Rn.prototype;
C.ba = function () {
  return [];
};
C.qa = function () {
  throw dh("Ja").J;
};
C.Wa = function (a) {
  return this.qa(a, null);
};
C.fa = function () {
  throw dh("Ka").J;
};
C.Z = A(!1);
function Sn() {
  W.call(this);
}
F(Sn, W);
Sn.prototype.ba = function () {
  return ["comment"];
};
Sn.prototype.fa = function (a) {
  return [a.j.di, a.X()];
};
function Tn(a, c) {
  W.call(this);
  this.wc = a;
  this.be = c;
}
F(Tn, W);
C = Tn.prototype;
C.ba = function () {
  return ["document"];
};
C.za = function (a) {
  var c = this.wc[a];
  if (!c) throw dh("La`" + S(a)).J;
  return c;
};
C.createDocument = function (a, c, e) {
  a = new tn(a, c, !0, this.be, this.wc[c]);
  e == null || (Hl(a, "initialSyncReason") == null && V(a, "initialSyncReason", e));
  return a;
};
C.Z = function (a) {
  var c = a.getType();
  return c === "append-commands" || c === "write-trix" ? !0 : W.prototype.Z.call(this, a);
};
C.qa = function (a) {
  var c = this.za(a.getType()).nc(a);
  return a.D
    ? (a.C(), c)
    : W.prototype.qa
        .call(
          this,
          a,
          "approvalMetadataStatus contentLockType lastModifiedClientTimestamp lastWarmStartedTimestamp ic odocid relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber fileLockedReason mimeType resourceKey initialPinSourceApp quotaStatus".split(
            " ",
          ),
        )
        .concat(c);
};
C.fa = function (a) {
  return a.X();
};
function Un(a, c) {
  W.call(this);
  this.Zd = a;
  this.ja = c;
}
F(Un, W);
C = Un.prototype;
C.ba = function () {
  return ["applicationMetadata"];
};
C.fa = function (a) {
  return a.Aa();
};
C.Z = function (a) {
  return Th(a.getType(), "update-application-metadata");
};
C.qa = function (a) {
  var c = this.fa(a);
  return [new Vn(c, a, a.B ? a.D.slice(0) : null)];
};
C.za = function (a) {
  var c = this.Zd[a];
  if (!c) throw dh("La`" + S(a)).J;
  return c;
};
function Vn(a, c, e) {
  en.call(this, a, c, null, "update-application-metadata");
  this.A = e;
}
F(Vn, en);
function Wn() {
  W.call(this);
}
F(Wn, W);
Wn.prototype.ba = function () {
  return ["documentEntity"];
};
Wn.prototype.fa = function (a) {
  return [a.j.documentId, a.getType(), a.X()];
};
function Xn() {
  W.call(this);
}
F(Xn, W);
Xn.prototype.ba = function () {
  return [];
};
function Yn(a, c) {
  this.v = "document-lock";
  this.B = 0;
  this.A = a;
  this.B = c;
}
F(Yn, hn);
function Zn(a, c, e, f, g, h) {
  Dl.call(this, "impressionBatch", h, g);
  V(this, "di", a);
  V(this, "dt", c);
  V(this, "ibt", e);
  V(this, "iba", f);
}
F(Zn, Dl);
function $n() {
  W.call(this);
}
F($n, W);
$n.prototype.ba = function () {
  return ["impressionBatch"];
};
$n.prototype.fa = function (a) {
  var c = [];
  c.push(Il(a, "di"));
  c.push(a.j.ibt);
  return c;
};
$n.prototype.Z = function (a) {
  return (
    W.prototype.Z.call(this, a) &&
    ((Th(a.getType(), "update-record") && a.o) || Th(a.getType(), "delete-record"))
  );
};
function ao() {
  W.call(this);
}
F(ao, W);
ao.prototype.ba = function () {
  return [];
};
function bo(a, c, e) {
  this.j = a;
  this.o = c;
  this.v = e;
}
F(bo, R);
function co(a) {
  this.j = a;
}
F(co, R);
function eo(a, c) {
  jk.call(this);
  this.v = this.o = !1;
  mk(this);
  this.j = a;
  this.A = new $m();
  this.v = zh(c, !0);
}
F(eo, jk);
function fo(a) {
  if (a.o) throw dh("Na").J;
  a.o = !0;
}
eo.prototype.write = function (a, c, e, f, g, h) {
  var k = this;
  if (!this.o) throw dh("Oa").J;
  var l = go(a);
  a = ho(this, a);
  a.length == 0
    ? e()
    : io(
        this.j,
        a,
        c,
        function () {
          an(k.A, l);
          e();
        },
        f,
        g,
        h,
      );
};
function go(a) {
  for (var c = [], e = 0; e < a.length; e++) {
    var f = a[e];
    c.push(new bo(f, f.F ? "new" : "update", f.v));
  }
  return new co(c, null);
}
function ho(a, c) {
  for (var e = [], f = null, g = 0; g < c.length; g++) {
    var h = c[g];
    if (h.Ma()) {
      var k = a.j;
      var l = h.A;
      if ((l = l in k.B ? k.B[l] : null)) {
        k = h.Bc();
        l = l.oc(h);
        zk(e, l);
        if (f) {
          if (k) {
            if (!Gg(f.o, k.o)) throw dh("pa").J;
            f = f.j > k.j ? f : k;
          }
        } else f = k;
        h.C();
      } else throw dh("Pa`" + S(h.A)).J;
    }
  }
  f && !a.v && e.unshift(new Yn(f.o, f.j));
  return e;
}
eo.prototype.toString = A("[LocalStore]");
function jo() {
  W.call(this);
}
F(jo, W);
jo.prototype.ba = function () {
  return [];
};
function ko() {
  W.call(this);
}
F(ko, W);
ko.prototype.ba = function () {
  return ["blobMetadata"];
};
ko.prototype.qa = function (a) {
  return W.prototype.qa.call(this, a, On);
};
ko.prototype.Wa = function (a) {
  return this.qa(a, null);
};
ko.prototype.fa = function (a) {
  return [a.j.d, a.j.p];
};
var lo = [
  "revisionAccessInfo",
  "unsentBundleMetadata",
  "selection",
  "sentBundlesSavedRevision",
  "snapshotBundleIndex",
];
function mo(a) {
  return a.j.docId;
}
function no(a, c) {
  V(a, "unsentBundleMetadata", c);
}
function oo(a, c, e) {
  this.o = this.j = 0;
  this.j = a;
  this.sessionId = c;
  this.o = e;
}
F(oo, R);
function po(a, c, e) {
  this.A = !1;
  this.B = a;
  this.F = c;
  this.A = U(e, "docs-rmcl");
}
F(po, R);
po.prototype.ba = function () {
  return ["pendingQueue"];
};
po.prototype.fa = function (a) {
  return mo(a);
};
po.prototype.oc = function (a) {
  var c = a.getType();
  if (!this.B[c]) throw dh("Ua`" + S(c)).J;
  var e = a.K;
  c = [];
  switch (e) {
    case 7:
      c = mo(a);
      var f = a.D;
      e = [];
      for (var g, h = a.H, k = 0; k < h.length; k++) {
        g = h[k];
        f = (f + 1) | 0;
        g = qo(this, g.j(), mo(a), f, !0);
        if (!g) throw dh("Ya").J;
        e.push(g);
      }
      h = (a.D + e.length) | 0;
      k = [];
      f = [];
      g = a.I ? a.I : [];
      for (var l = 0; l < g.length; l++) {
        var p = g[l];
        var q = p.j();
        if ((q = qo(this, q, c, (h + 1) | 0, null)))
          (f.push(q),
            (q = k),
            (p = new oo(p.o(), p.v(), (h + 1) | 0)),
            q.push(p),
            (h = (h + 1) | 0));
      }
      no(a, ro(k));
      h = new so(a);
      e.push(h);
      zk(e, f);
      a.D >= 0 && e.push(new to(c, a.D));
      c = e;
      break;
    case 1:
      e = (a.D + 1) | 0;
      f = mo(a);
      c = [];
      h = a.M;
      k = a.B ? Ch(a.B.j) : null;
      g = a.B ? a.B.sessionId : null;
      if ((l = El(a, "unsentBundleMetadata"))) {
        p = [];
        for (q = 0; q < l.length; q = (q + 1) | 0) p.push(new oo(l[q].rid, l[q].sid, l[q].lei));
        l = p;
      } else l = [];
      if (k && g != null) l.push(new oo(k.j, g, e));
      else {
        if (l.length == 0) throw dh("Xa").J;
        k = l[(l.length - 1) | 0];
        l[(l.length - 1) | 0] = new oo(k.j, k.sessionId, e);
      }
      h && no(a, ro(l));
      jl(a.v) || ((a = new en(f, a, lo, null)), c.push(a));
      (a = qo(this, h, f, e, null)) && c.push(a);
      break;
    case 5:
      no(a, null);
      e = c;
      a = new so(a);
      e.push(a);
      break;
    case 2:
      no(a, null);
      e = c;
      a = new uo(a);
      e.push(a);
      break;
    case 3:
      e = c;
      a = new vo(a);
      e.push(a);
      break;
    case 4:
      e = c;
      a = new wo(a);
      e.push(a);
      break;
    case 6:
      e = c;
      a = new en(mo(a), a, lo, null);
      e.push(a);
      break;
    default:
      throw dh("Wa`" + e).J;
  }
  return c;
};
function qo(a, c, e, f, g) {
  if (!(!0 === g || (c && c.length != 0))) return null;
  g = [];
  if (c) {
    for (var h = [], k = 0; k < c.length; k++) {
      var l = xo(c[k]);
      g.push(l);
      if (!a.A) {
        for (var p = JSON.stringify(l), q = [], r = 0; r < p.length; r = (r + 1) | 0) {
          l = Sh(p, r);
          var x = !1,
            y = p.charCodeAt(r),
            z = Bh(p.charCodeAt(r));
          y >= 55296 && y <= 56319
            ? (x = !(l >= 65536 && l <= 1114111))
            : z &&
              (r > 0 ? ((x = Sh(p, (r - 1) | 0)), (x = !(x >= 65536 && x <= 1114111))) : (x = !0));
          x &&
            q.push(
              new yo(
                "\\u" + S((l >>> 0).toString(16)),
                r,
                p.length,
                zo(p, (r - 1) | 0),
                zo(p, (r + 1) | 0),
              ),
            );
        }
        zk(h, q);
      }
    }
    h.length > 0 &&
      ((c = {}),
      (h = "{" + S(h.join("; ")) + "}"),
      (c.command_malformedCharacterContext = h != null ? h : null),
      (a = a.F),
      (h = new bh()),
      Ug(h, "Serializing commands containing malformed surrogate characters."),
      Wg(h, Error(h)),
      a.info(h, c, null));
  }
  return new Ao(e, g, f);
}
function ro(a) {
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
function uo(a) {
  en.call(this, mo(a), a, lo, "pq-clear");
}
F(uo, en);
function wo(a) {
  en.call(this, mo(a), a, lo, "pq-clear-sent-bundle");
}
F(wo, en);
function vo(a) {
  en.call(this, mo(a), a, lo, "pq-clear-sent");
}
F(vo, en);
function to(a, c) {
  this.v = "pq-delete-commands";
  this.A = 0;
  this.B = a;
  this.A = c;
}
F(to, hn);
function Bo(a, c, e) {
  this.j = this.o = 0;
  this.sessionId = a;
  this.o = c;
  this.j = e;
}
F(Bo, R);
function so(a) {
  en.call(this, mo(a), a, lo, "pq-mark-sent");
  this.F = !1;
  this.A = [];
  var c = a.D;
  if (a.K == 7) {
    this.F = !0;
    for (var e = a.H, f = 0; f < e.length; f++) {
      var g = e[f];
      c = (c + 1) | 0;
      a = this.A;
      var h = g.v();
      g = new Bo(h, g.o(), c);
      a.push(g);
    }
  } else
    ((this.F = !1),
      (e = this.A),
      (f = a.B ? a.B.sessionId : null),
      (a = a.B ? Ch(a.B.j) : null),
      e.push(new Bo(f, a.j, c)));
}
F(so, en);
function Ao(a, c, e) {
  this.v = "pq-write-commands";
  this.A = 0;
  this.F = a;
  this.B = c;
  this.A = e;
}
F(Ao, hn);
function yo(a, c, e, f, g) {
  this.o = this.j = 0;
  this.B = a;
  this.j = c;
  this.o = e;
  this.A = f;
  this.v = g;
}
F(yo, R);
yo.prototype.toString = function () {
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
yo.prototype.equals = function (a) {
  return a instanceof yo && Gg(this.toString(), a.toString());
};
yo.prototype.ua = function () {
  for (var a = [this.B, Ch(this.j), Ch(this.o), this.A, this.v], c = 1, e = 0; e < a.length; e++) {
    c = Math.imul(31, c);
    var f = a[e];
    f = f != null ? Nh(f) : 0;
    c = (c + f) | 0;
  }
  return c;
};
function zo(a, c) {
  return c < 0 || c >= a.length ? null : "\\u" + S((Sh(a, c) >>> 0).toString(16));
}
function Co() {}
F(Co, R);
function Do() {
  return new Co();
}
function Eo() {
  var a = Do();
  a.o = null;
  return a;
}
function Fo() {
  this.j = 0;
}
F(Fo, Ih);
function Go(a, c) {
  var e = new Fo();
  e.o = a;
  e.j = c;
  return e;
}
var Ho = Go("PIN", 0),
  Io = Go("UNPIN", 1),
  Jo = Go("REMOVE", 2),
  Ko = Go("MARK_INITIAL_MIGRATION_STARTED", 3);
function Lo() {}
F(Lo, Wm);
Lo.prototype.X = w("v");
function Mo(a, c) {
  Pn.call(this, "pinneddocuments", "pinneddocuments", a, c);
  this.B = [];
}
F(Mo, Pn);
Mo.prototype.Ma = function () {
  return (!!this.B && this.B.length != 0) || Pn.prototype.Ma.call(this);
};
Mo.prototype.C = function () {
  Pn.prototype.C.call(this);
  this.B = [];
};
function No(a) {
  a = El(a, "pinnedDocs");
  return a != null ? a : {};
}
function Oo(a) {
  W.call(this);
  this.ja = a;
}
F(Oo, W);
Oo.prototype.ba = function () {
  return ["pinneddocuments"];
};
Oo.prototype.fa = A(null);
Oo.prototype.Z = function (a) {
  return Th(a.getType(), "update-pinned-docs")
    ? !0
    : W.prototype.Z.call(this, a) && !Th(a.getType(), "delete-record");
};
function Po(a) {
  this.newVersion = 0;
  this.newVersion = a;
}
F(Po, R);
function Qo() {
  jk.call(this);
  mk(this);
  this.ga = new $m();
  this.B = {};
}
F(Qo, jk);
function Ro(a, c) {
  for (var e = c.ba(), f = 0; f < e.length; f++) {
    var g = e[f];
    if (a.B[g]) throw dh("Za`" + S(g)).J;
    il(a.B, g, c);
  }
}
C = Qo.prototype;
C.od = A(null);
C.Nb = A(null);
C.pd = A(null);
C.nd = A(null);
C.md = A(null);
function So(a, c, e, f) {
  this.j = this.o = 0;
  this.o = a;
  this.v = c;
  this.j = e;
  this.A = f;
}
F(So, R);
So.prototype.ub = w("A");
function To(a, c) {
  this.j = a;
  this.o = c;
}
F(To, R);
To.prototype.ub = w("o");
function Uo(a) {
  return new To(a.docId, a.resourceKey);
}
function Vo(a, c, e) {
  Pn.call(this, "syncHints", ["synchints", "" + c], a, e);
  V(this, "docIds", []);
  V(this, "sourceApp", Ch(c));
  V(this, "docIdentifiers", []);
}
F(Vo, Pn);
function Wo(a, c) {
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
function Xo(a, c) {
  var e = new sl();
  e.j = [];
  for (var f = 0; f < c.length; f++) {
    var g = e.j,
      h = c[f];
    Rg(h) ? g.push(h.j) : g.push(h);
  }
  c = e.j;
  e.j = null;
  V(a, "docIds", c.concat([]));
  V(a, "docIdentifiers", []);
}
function Yo(a) {
  a = Hl(a, "sourceApp");
  return a == null ? 0 : xh(a);
}
function Zo() {
  W.call(this);
}
F(Zo, W);
Zo.prototype.ba = function () {
  return ["syncHints"];
};
function $o(a, c) {
  var e = new nk();
  ap(
    a,
    function (f) {
      pk(e, f);
    },
    function (f) {
      rk(e, f);
    },
  );
  return uk(e, function (f) {
    for (var g = [], h = 0; h < f.length; h++) {
      var k = f[h];
      var l = Yo(k);
      var p = [];
      var q = Kl(k, "docIdentifiers");
      if (q) {
        for (var r = [], x = 0; x < q.length; x = (x + 1) | 0) {
          var y = r;
          y.push(Uo(q[x]));
        }
        y = r;
      } else y = [];
      if (y.length == 0)
        for (k = (k = Kl(k, "docIds")) ? wl(k) : [], y = 0; y < k.length; y = (y + 1) | 0)
          p.push(new So(l, k[y], y, null));
      else
        for (q = 0; q < y.length; q = (q + 1) | 0) ((k = y[q]), p.push(new So(l, k.j, q, k.ub())));
      l = p;
      for (p = 0; p < l.length; p++)
        if (((k = l[p]), Gg(c, k.v))) {
          g.push(k);
          break;
        }
    }
    return ol(g);
  });
}
Zo.prototype.fa = function (a) {
  return ["synchints", "" + Yo(a)];
};
Zo.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) && Th(a.getType(), "update-record");
};
function bp() {
  W.call(this);
}
F(bp, W);
bp.prototype.ba = function () {
  return ["syncObject"];
};
bp.prototype.fa = function (a) {
  return wl(a.j.keyPath.concat());
};
bp.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) && Th(a.getType(), "update-record") && a.o;
};
function cp(a, c) {
  Pn.call(this, "syncStats", "syncstats", a, c);
  V(this, "syncVersion", 0);
  V(this, "lastDailyRunTime", 0);
  V(this, "maxSpaceQuota", 0);
  V(this, "webfontsSyncVersion", 0);
  V(this, "lastStartedSyncDocs", []);
  V(this, "backgroundSyncDenylist", {});
}
F(cp, Pn);
function dp(a, c, e) {
  var f = {};
  f.documentId = c != null ? c : null;
  f.timestamp = e;
  c = (c = Kl(a, "lastStartedSyncDocs")) ? c : [];
  c.push(f);
  f = (c.length - 10) | 0;
  f > 0 && c.splice(0, f);
  V(a, "lastStartedSyncDocs", c);
}
function ep(a, c) {
  var e = El(a, "backgroundSyncDenylist");
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
function fp(a, c, e, f, g, h, k, l) {
  var p = {};
  p.count = e;
  p.modelSyncFailCount = f;
  p.serverTime = g;
  p.lastSyncErrorType = h ? h.j : null;
  p.nextSyncTimestampMillis = k;
  p.backoffRetryConsecutiveFailCount = l;
  e = gp(a);
  e[c] = p != null ? p : null;
  V(a, "failedToSyncDocs", e);
}
function gp(a) {
  a = El(a, "failedToSyncDocs");
  return a == null ? {} : a;
}
function hp(a) {
  W.call(this);
  this.ja = a;
}
F(hp, W);
hp.prototype.ba = function () {
  return ["syncStats"];
};
function ip(a, c) {
  var e = new nk();
  jp(
    a,
    function (f) {
      pk(e, f);
    },
    function (f) {
      rk(e, f);
    },
  );
  return uk(e, function (f) {
    f
      ? ((f = gp(f)),
        (f = nl(f, c)),
        (f = f == null || f.lastSyncErrorType == null ? null : Ch(f.lastSyncErrorType)))
      : (f = null);
    return ol(f);
  });
}
hp.prototype.fa = A(null);
hp.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) && !Th(a.getType(), "delete-record");
};
function kp(a) {
  jk.call(this);
  mk(this);
  this.j = a;
}
F(kp, jk);
kp.prototype.nc = function (a) {
  var c = sn(a.B);
  return c.length == 0 ? [] : [new Dn(a.X(), a.Aa(), c, !0)];
};
kp.prototype.Aa = w("j");
function lp(a, c) {
  W.call(this);
  this.de = a;
  this.ja = c;
}
F(lp, W);
C = lp.prototype;
C.ba = function () {
  return ["templateCreationMetadata", "templateMetadata"];
};
C.fa = function (a) {
  return a.A === "templateCreationMetadata" ? [a.X()] : [a.X()];
};
C.Wa = function (a) {
  var c = W.prototype.Wa.call(this, a);
  a.A === "templateCreationMetadata" && ((a = this.za(a.Aa()).nc(a)), zk(c, a));
  return c;
};
C.za = function (a) {
  var c = this.de[a];
  if (!c) throw dh("La`" + S(a)).J;
  return c;
};
C.Z = function (a) {
  return a.getType() === "append-template-commands" ? !0 : W.prototype.Z.call(this, a);
};
function mp(a, c, e) {
  Dl.call(this, "user", e, c);
  V(this, "id", a);
  Jl(this, "fastTrack", !0);
}
F(mp, Dl);
mp.prototype.X = function () {
  return this.j.id;
};
function np(a) {
  W.call(this);
  this.ja = a;
}
F(np, W);
C = np.prototype;
C.ba = function () {
  return ["user"];
};
C.qa = function (a, c) {
  return W.prototype.qa.call(this, a, c);
};
C.Wa = function (a) {
  return this.qa(a, null);
};
C.fa = function (a) {
  return a.X();
};
C.Z = function (a) {
  return W.prototype.Z.call(this, a) && !Th(a.getType(), "delete-record");
};
function op() {
  W.call(this);
}
F(op, W);
op.prototype.ba = function () {
  return ["fontMetadata"];
};
op.prototype.fa = function (a) {
  return a.j.fontFamily;
};
op.prototype.Z = function (a) {
  return W.prototype.Z.call(this, a) ? (Th(a.getType(), "update-record") ? a.o : !0) : !1;
};
function qp(a, c) {
  jn.call(this, "update-pinned-docs", null, "pinneddocuments");
  this.A = 0;
  this.F = a;
  this.A = c;
}
F(qp, jn);
function rp(a) {
  Hj.call(this, a, null);
  Wg(this, Error(this));
}
F(rp, Hj);
function sp(a, c, e, f) {
  jk.call(this);
  this.j = 0;
  mk(this);
  this.v = a;
  this.j = c;
  this.o = new tp(Math.imul(e, 1e3), f);
}
F(sp, jk);
function up(a) {
  if (!(((a.o.get(null) + 1) | 0) / (a.o.v / 1e3) <= a.j))
    throw new rp("Query would cause " + S(a.v) + " to exceed " + a.j + " qps.").J;
  a = a.o;
  var c = wh(a.A.j());
  vp(a, c);
  var e = wp(a.o);
  if (!e || c >= e.o)
    ((e = new xp()),
      (e.o = a.j * Math.floor(c / a.j + 1)),
      (e.j = 0),
      (e.A = 2147483647),
      (e.v = -2147483648),
      a.o.add(e));
  e.j = (e.j + 1) | 0;
  e.A = Math.min(1, e.A);
  e.v = Math.max(1, e.v);
}
function xp() {
  this.v = this.A = this.j = 0;
}
F(xp, R);
function tp(a, c) {
  this.j = this.v = 0;
  this.A = c ? c : new pn();
  this.v = a;
  this.j = (a / 50) | 0;
  this.o = new yp(Ch(50));
}
F(tp, R);
tp.prototype.get = function (a) {
  return zp(this, a, function (c, e) {
    return Ch((c.j + e.j) | 0);
  });
};
function zp(a, c, e) {
  c = c != null ? c : wh(a.A.j());
  vp(a, c);
  var f = 0;
  c = a.j * Math.floor(c / a.j + 1) - a.v;
  for (var g = (a.o.j.length - 1) | 0; g >= 0; g = (g - 1) | 0) {
    var h = a.o.get(g);
    if (h.o <= c) break;
    f = e(Ch(f), h).j;
  }
  return f;
}
function vp(a, c) {
  var e;
  (e = wp(a.o)) && c < e.o - a.j && a.o.clear();
}
function yp(a) {
  this.o = this.v = this.o = 0;
  var c;
  a != null ? (c = "number" === typeof a ? xh(a) : a instanceof jh ? a.W : a.sa()) : (c = 100);
  this.v = c;
  this.j = [];
}
F(yp, R);
C = yp.prototype;
C.add = function (a) {
  var c = this.j[this.o];
  this.j[this.o] = a;
  this.o = ((this.o + 1) | 0) % this.v | 0;
  return c;
};
C.get = function (a) {
  a = Ap(this, a);
  return this.j[a];
};
C.set = function (a, c) {
  a = Ap(this, a);
  this.j[a] = c;
};
C.clear = function () {
  this.o = this.j.length = 0;
};
C.wb = function () {
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
function wp(a) {
  return a.j.length == 0 ? null : a.get((a.j.length - 1) | 0);
}
function Ap(a, c) {
  if (c >= a.j.length) throw ((a = new eh()), Vg(a), Wg(a, Error(a)), a.J);
  return a.j.length < a.v ? c : ((a.o + c) | 0) % a.v | 0;
}
bc.prototype.equals = function (a) {
  return fc(this, a);
};
bc.prototype.ua = function () {
  return (Uf(this) + Qf()) | 0;
};
Q.prototype.equals = function (a) {
  return (
    this === a ||
    (this == null && a == null) ||
    (!(!this || !a) && this instanceof a.constructor && Xd(this, a))
  );
};
Q.prototype.ua = function () {
  return (Uf(this) + Qf()) | 0;
};
function Bp() {
  this.j = 0;
}
var Cp = {},
  Dp;
F(Bp, R);
function Ep(a, c) {
  var e = new Bp();
  e.o = a;
  e.j = c;
  il(Cp, a, e);
  return e;
}
Bp.prototype.toString = w("o");
function Fp() {
  Fp = u();
  Ep("IDLE", 1);
  Ep("BUSY", 1);
  Ep("RECOVERING", 2);
  Dp = Ep("OFFLINE", 3);
  Ep("SERVER_DOWN", 3);
  Ep("FORBIDDEN", 4);
  Ep("AUTH_REQUIRED", 4);
  Ep("DELTA_STALE_CLIENT", 4);
  Ep("SESSION_LIMIT_EXCEEDED", 5);
  Ep("LOCKED", 5);
  Ep("INCOMPATIBLE_SERVER", 5);
  Ep("CLIENT_ERROR", 5);
  Ep("CLIENT_FATAL_ERROR", 5);
  Ep("CLIENT_FATAL_ERROR_PENDING_CHANGES", 5);
  Ep("BATCH_CLIENT_ERROR", 3);
  Ep("SAVE_ERROR", 5);
  Ep("DOCUMENT_TOO_LARGE", 5);
  Ep("CSE_BLOCKED_REQUEST", 5);
  Ep("BATCH_SAVE_ERROR", 3);
  Ep("DOCS_EVERYWHERE_IMPORT_ERROR", 5);
  Ep("POST_LIMIT_EXCEEDED_ERROR", 5);
  Ep("DOCS_QUOTA_EXCEEDED_ERROR", 5);
}
function on(a) {
  this.j = "offline-oc";
  this.o = a;
}
F(on, Wl);
function Gp() {}
F(Gp, R);
function xo(a) {
  if (!Th(a.getType(), "offline-oc")) throw dh("ab").J;
  return a.o;
}
var Hp;
function Ip(a) {
  Jp();
  if (!Kp(a)) return a;
  var c = String.fromCodePoint(47);
  c = a.indexOf(c, 3);
  return c < 0 ? "" : a.substr(c);
}
function Kp(a) {
  Jp();
  return a.substr(0, 3) === "/a/";
}
function Lp(a) {
  Jp();
  return a.replace(Hp, "$1");
}
function Jp() {
  Jp = u();
  Hp = RegExp("\\/u\\/[0-9]+($|\\/)");
}
function Mp(a) {
  try {
    return decodeURIComponent(a);
  } catch (e) {
    var c = Yg(e);
    if (c instanceof ch) return null;
    throw c.J;
  }
}
function Np(a) {
  return new qn(function () {
    var c = a();
    return sh(c);
  });
}
function Op() {
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
    for (z = 16; z < 80; z++)
      ((x = y[z - 3] ^ y[z - 8] ^ y[z - 14] ^ y[z - 16]),
        (y[z] = ((x << 1) | (x >>> 31)) & 4294967295));
    x = g[0];
    var B = g[1],
      I = g[2],
      D = g[3],
      Y = g[4];
    for (z = 0; z < 80; z++) {
      if (z < 40)
        if (z < 20) {
          var aa = D ^ (B & (I ^ D));
          var Va = 1518500249;
        } else ((aa = B ^ I ^ D), (Va = 1859775393));
      else
        z < 60
          ? ((aa = (B & I) | (D & (B | I))), (Va = 2400959708))
          : ((aa = B ^ I ^ D), (Va = 3395469782));
      aa = ((((x << 5) | (x >>> 27)) & 4294967295) + aa + Y + Va + y[z]) & 4294967295;
      Y = D;
      D = I;
      I = ((B << 30) | (B >>> 2)) & 4294967295;
      B = x;
      x = aa;
    }
    g[0] = (g[0] + x) & 4294967295;
    g[1] = (g[1] + B) & 4294967295;
    g[2] = (g[2] + I) & 4294967295;
    g[3] = (g[3] + D) & 4294967295;
    g[4] = (g[4] + Y) & 4294967295;
  }
  function e(x, y) {
    if (typeof x === "string") {
      x = unescape(encodeURIComponent(x));
      for (var z = [], B = 0, I = x.length; B < I; ++B) z.push(x.charCodeAt(B));
      x = z;
    }
    y || (y = x.length);
    z = 0;
    if (q == 0) for (; z + 64 < y; ) (c(x.slice(z, z + 64)), (z += 64), (r += 64));
    for (; z < y; )
      if (((h[q++] = x[z++]), r++, q == 64))
        for (q = 0, c(h); z + 64 < y; ) (c(x.slice(z, z + 64)), (z += 64), (r += 64));
  }
  function f() {
    var x = [],
      y = r * 8;
    q < 56 ? e(l, 56 - q) : e(l, 64 - (q - 56));
    for (var z = 63; z >= 56; z--) ((h[z] = y & 255), (y >>>= 8));
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
    Wd: function () {
      for (var x = f(), y = "", z = 0; z < x.length; z++)
        y +=
          "0123456789ABCDEF".charAt(Math.floor(x[z] / 16)) + "0123456789ABCDEF".charAt(x[z] % 16);
      return y;
    },
  };
}
function Pp(a, c, e) {
  var f = String(K.location.href);
  return f && a && c ? [c, Qp(vi(f), a, e || null)].join(" ") : null;
}
function Qp(a, c, e) {
  var f = [],
    g = [];
  if ((Array.isArray(e) ? 2 : 1) == 1)
    return (
      (g = [c, a]),
      zb(f, function (l) {
        g.push(l);
      }),
      Rp(g.join(" "))
    );
  var h = [],
    k = [];
  zb(e, function (l) {
    k.push(l.key);
    h.push(l.value);
  });
  e = Math.floor(new Date().getTime() / 1e3);
  g = h.length == 0 ? [e, c, a] : [h.join(":"), e, c, a];
  zb(f, function (l) {
    g.push(l);
  });
  a = Rp(g.join(" "));
  a = [e, a];
  k.length == 0 || a.push(k.join(""));
  return a.join("_");
}
function Rp(a) {
  var c = Op();
  c.update(a);
  return c.Wd().toLowerCase();
}
function Sp() {
  this.j = document || { cookie: "" };
}
C = Sp.prototype;
C.set = function (a, c, e) {
  var f = !1;
  if (typeof e === "object") {
    var g = e.sameSite;
    f = e.secure || !1;
    var h = e.domain || void 0;
    var k = e.path || void 0;
    var l = e.se;
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
C.get = function (a, c) {
  for (var e = a + "=", f = (this.j.cookie || "").split(";"), g = 0, h; g < f.length; g++) {
    h = bb(f[g]);
    if (h.lastIndexOf(e, 0) == 0) return h.slice(e.length);
    if (h == a) return "";
  }
  return c;
};
C.remove = function (a, c, e) {
  var f = this.get(a) !== void 0;
  this.set(a, "", { se: 0, path: c, domain: e });
  return f;
};
C.wb = function () {
  return Tp(this).values;
};
C.clear = function () {
  for (var a = Tp(this).keys, c = a.length - 1; c >= 0; c--) this.remove(a[c]);
};
function Tp(a) {
  a = (a.j.cookie || "").split(";");
  for (var c = [], e = [], f, g, h = 0; h < a.length; h++)
    ((g = bb(a[h])),
      (f = g.indexOf("=")),
      f == -1 ? (c.push(""), e.push(g)) : (c.push(g.substring(0, f)), e.push(g.substring(f + 1))));
  return { keys: c, values: e };
}
function Up(a, c, e, f) {
  (a = K[a]) || typeof document === "undefined" || (a = new Sp().get(c));
  return a ? Pp(a, e, f) : null;
}
function Vp(a) {
  var c = vi(K == null ? void 0 : K.location.href),
    e = [],
    f;
  (f = K.__SAPISID || K.__APISID || K.__3PSAPISID || K.__1PSAPISID || K.__OVERRIDE_SID)
    ? (f = !0)
    : (typeof document !== "undefined" &&
        ((f = new Sp()),
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
      ((f = new Sp()), (f = f.get(c ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID"))),
    (f = f ? Pp(f, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && e.push(f),
    c &&
      ((c = Up("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && e.push(c),
      (a = Up("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && e.push(a)));
  return e.length == 0 ? null : e.join(" ");
}
function Wp(a) {
  if (!a) return null;
  try {
    var c = parseInt(a, 10);
    return isNaN(c) ? null : c;
  } catch (e) {
    return null;
  }
}
function Xp(a) {
  return (a = Xk(a, "gxids"))
    ? a
        .split(",")
        .map(function (c) {
          return Wp(c);
        })
        .filter(function (c) {
          return c != null && c > 0;
        })
    : [];
}
function Yp(a, c, e) {
  for (var f in a) c.call(e, a[f], f, a);
}
function Zp(a) {
  var c = [],
    e = 0,
    f;
  for (f in a) c[e++] = a[f];
  return c;
}
function $p(a, c) {
  return a !== null && c in a;
}
function aq(a) {
  for (var c in a) return !1;
  return !0;
}
function bq(a) {
  var c = {},
    e;
  for (e in a) c[e] = a[e];
  return c;
}
var cq =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " ",
  );
function dq(a, c) {
  for (var e, f, g = 1; g < arguments.length; g++) {
    f = arguments[g];
    for (e in f) a[e] = f[e];
    for (var h = 0; h < cq.length; h++)
      ((e = cq[h]), Object.prototype.hasOwnProperty.call(f, e) && (a[e] = f[e]));
  }
}
function eq() {
  try {
    return K.localStorage.getItem("docs-oiouid") || null;
  } catch (a) {
    return null;
  }
}
function fq(a) {
  var c = eq();
  return Cl(a, "docs-offline-lsuid") == c;
}
function gq(a) {
  this.v = this.F = this.A = "";
  this.C = null;
  this.D = this.j = "";
  this.B = !1;
  var c;
  a instanceof gq
    ? ((this.B = a.B),
      hq(this, a.A),
      (this.F = a.F),
      (this.v = a.v),
      iq(this, a.C),
      jq(this, a.j),
      kq(this, a.o.clone()),
      lq(this, a.D))
    : a && (c = String(a).match(Mk))
      ? ((this.B = !1),
        hq(this, c[1] || "", !0),
        (this.F = mq(c[2] || "")),
        (this.v = mq(c[3] || "", !0)),
        iq(this, c[4]),
        jq(this, c[5] || "", !0),
        kq(this, c[6] || "", !0),
        lq(this, c[7] || "", !0))
      : ((this.B = !1), (this.o = new nq(null, this.B)));
}
gq.prototype.toString = function () {
  var a = [],
    c = this.A;
  c && a.push(oq(c, pq, !0), ":");
  var e = this.v;
  if (e || c == "file")
    (a.push("//"),
      (c = this.F) && a.push(oq(c, pq, !0), "@"),
      a.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (e = this.C),
      e != null && a.push(":", String(e)));
  if ((e = this.j))
    (this.v && e.charAt(0) != "/" && a.push("/"), a.push(oq(e, e.charAt(0) == "/" ? qq : rq, !0)));
  (e = this.o.toString()) && a.push("?", e);
  (e = this.D) && a.push("#", oq(e, sq));
  return a.join("");
};
gq.prototype.resolve = function (a) {
  var c = this.clone(),
    e = !!a.A;
  e ? hq(c, a.A) : (e = !!a.F);
  e ? (c.F = a.F) : (e = !!a.v);
  e ? (c.v = a.v) : (e = a.C != null);
  var f = a.j;
  if (e) iq(c, a.C);
  else if ((e = !!a.j)) {
    if (f.charAt(0) != "/")
      if (this.v && !this.j) f = "/" + f;
      else {
        var g = c.j.lastIndexOf("/");
        g != -1 && (f = c.j.slice(0, g + 1) + f);
      }
    g = f;
    if (g == ".." || g == ".") f = "";
    else if (g.indexOf("./") != -1 || g.indexOf("/.") != -1) {
      f = ab(g, "/");
      g = g.split("/");
      for (var h = [], k = 0; k < g.length; ) {
        var l = g[k++];
        l == "."
          ? f && k == g.length && h.push("")
          : l == ".."
            ? ((h.length > 1 || (h.length == 1 && h[0] != "")) && h.pop(),
              f && k == g.length && h.push(""))
            : (h.push(l), (f = !0));
      }
      f = h.join("/");
    } else f = g;
  }
  e ? jq(c, f) : (e = a.o.toString() !== "");
  e ? kq(c, a.o.clone()) : (e = !!a.D);
  e && lq(c, a.D);
  return c;
};
gq.prototype.clone = function () {
  return new gq(this);
};
function hq(a, c, e) {
  a.A = e ? mq(c, !0) : c;
  a.A && (a.A = a.A.replace(/:$/, ""));
}
function iq(a, c) {
  if (c) {
    c = Number(c);
    if (isNaN(c) || c < 0) throw Error("eb`" + c);
    a.C = c;
  } else a.C = null;
}
function jq(a, c, e) {
  a.j = e ? mq(c, !0) : c;
}
function kq(a, c, e) {
  c instanceof nq ? ((a.o = c), tq(a.o, a.B)) : (e || (c = oq(c, uq)), (a.o = new nq(c, a.B)));
  return a;
}
function lq(a, c, e) {
  a.D = e ? mq(c) : c;
  return a;
}
function mq(a, c) {
  return a ? (c ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
}
function oq(a, c, e) {
  return typeof a === "string"
    ? ((a = encodeURI(a).replace(c, vq)), e && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a)
    : null;
}
function vq(a) {
  a = a.charCodeAt(0);
  return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
}
var pq = /[#\/\?@]/g,
  rq = /[#\?:]/g,
  qq = /[#\?]/g,
  uq = /[#\?@]/g,
  sq = /#/g;
function nq(a, c) {
  this.o = this.j = null;
  this.v = a || null;
  this.A = !!c;
}
function wq(a) {
  a.j ||
    ((a.j = new Map()),
    (a.o = 0),
    a.v &&
      Ok(a.v, function (c, e) {
        a.add(decodeURIComponent(c.replace(/\+/g, " ")), e);
      }));
}
C = nq.prototype;
C.add = function (a, c) {
  wq(this);
  this.v = null;
  a = xq(this, a);
  var e = this.j.get(a);
  e || this.j.set(a, (e = []));
  e.push(c);
  this.o = this.o + 1;
  return this;
};
C.remove = function (a) {
  wq(this);
  a = xq(this, a);
  return this.j.has(a)
    ? ((this.v = null), (this.o = this.o - this.j.get(a).length), this.j.delete(a))
    : !1;
};
C.clear = function () {
  this.j = this.v = null;
  this.o = 0;
};
function yq(a, c) {
  wq(a);
  c = xq(a, c);
  return a.j.has(c);
}
C.forEach = function (a, c) {
  wq(this);
  this.j.forEach(function (e, f) {
    e.forEach(function (g) {
      a.call(c, g, f, this);
    }, this);
  }, this);
};
C.wb = function (a) {
  wq(this);
  var c = [];
  if (typeof a === "string") yq(this, a) && (c = c.concat(this.j.get(xq(this, a))));
  else {
    a = Array.from(this.j.values());
    for (var e = 0; e < a.length; e++) c = c.concat(a[e]);
  }
  return c;
};
C.set = function (a, c) {
  wq(this);
  this.v = null;
  a = xq(this, a);
  yq(this, a) && (this.o = this.o - this.j.get(a).length);
  this.j.set(a, [c]);
  this.o = this.o + 1;
  return this;
};
C.get = function (a, c) {
  if (!a) return c;
  a = this.wb(a);
  return a.length > 0 ? String(a[0]) : c;
};
C.toString = function () {
  if (this.v) return this.v;
  if (!this.j) return "";
  for (var a = [], c = Array.from(this.j.keys()), e = 0; e < c.length; e++) {
    var f = c[e],
      g = encodeURIComponent(String(f));
    f = this.wb(f);
    for (var h = 0; h < f.length; h++) {
      var k = g;
      f[h] !== "" && (k += "=" + encodeURIComponent(String(f[h])));
      a.push(k);
    }
  }
  return (this.v = a.join("&"));
};
C.clone = function () {
  var a = new nq();
  a.v = this.v;
  this.j && ((a.j = new Map(this.j)), (a.o = this.o));
  return a;
};
function xq(a, c) {
  c = String(c);
  a.A && (c = c.toLowerCase());
  return c;
}
function tq(a, c) {
  c &&
    !a.A &&
    (wq(a),
    (a.v = null),
    a.j.forEach(function (e, f) {
      var g = f.toLowerCase();
      if (f != g && (this.remove(f), this.remove(g), e.length > 0)) {
        this.v = null;
        f = this.j;
        var h = f.set;
        g = xq(this, g);
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
function zq() {
  var a = K.window;
  a.onbeforeunload = u();
  a.location.reload();
}
function Aq() {
  this.j = function () {
    zq();
  };
}
Aq.prototype.notify = function () {
  window.confirm(
    "This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.",
  ) && this.j();
};
function Bq(a, c, e, f) {
  f =
    f === void 0
      ? function () {
          return Fj();
        }
      : f;
  return zj(
    Gj(
      K.navigator.locks.request(a, { signal: e.signal }, function () {
        return c();
      }),
    ),
    function (g) {
      if (g.name === "AbortError") return f ? f() : Fj();
    },
  );
}
function Cq(a, c) {
  this.type = a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.o = !1;
}
Cq.prototype.stopPropagation = function () {
  this.o = !0;
};
Cq.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var Dq = (function () {
  if (!K.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
    c = Object.defineProperty({}, "passive", {
      get: function () {
        a = !0;
      },
    });
  try {
    var e = u();
    K.addEventListener("test", e, c);
    K.removeEventListener("test", e, c);
  } catch (f) {}
  return a;
})();
function Eq(a, c) {
  Cq.call(this, a ? a.type : "");
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
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.timeStamp = 0;
  this.j = null;
  a && this.init(a, c);
}
Xa(Eq, Cq);
Eq.prototype.init = function (a, c) {
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
  a.defaultPrevented && Eq.pa.preventDefault.call(this);
};
Eq.prototype.stopPropagation = function () {
  Eq.pa.stopPropagation.call(this);
  this.j.stopPropagation ? this.j.stopPropagation() : (this.j.cancelBubble = !0);
};
Eq.prototype.preventDefault = function () {
  Eq.pa.preventDefault.call(this);
  var a = this.j;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
var Fq = "closure_listenable_" + ((Math.random() * 1e6) | 0);
var Gq = 0;
function Hq(a, c, e, f, g) {
  this.listener = a;
  this.proxy = null;
  this.src = c;
  this.type = e;
  this.capture = !!f;
  this.handler = g;
  this.key = ++Gq;
  this.lb = this.Qa = !1;
}
function Iq(a) {
  a.lb = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.handler = null;
}
function Jq(a) {
  this.src = a;
  this.j = {};
  this.o = 0;
}
Jq.prototype.add = function (a, c, e, f, g) {
  var h = a.toString();
  a = this.j[h];
  a || ((a = this.j[h] = []), this.o++);
  var k = Kq(a, c, f, g);
  k > -1
    ? ((c = a[k]), e || (c.Qa = !1))
    : ((c = new Hq(c, this.src, h, !!f, g)), (c.Qa = e), a.push(c));
  return c;
};
Jq.prototype.remove = function (a, c, e, f) {
  a = a.toString();
  if (!(a in this.j)) return !1;
  var g = this.j[a];
  c = Kq(g, c, e, f);
  return c > -1
    ? (Iq(g[c]),
      Array.prototype.splice.call(g, c, 1),
      g.length == 0 && (delete this.j[a], this.o--),
      !0)
    : !1;
};
function Lq(a, c) {
  var e = c.type;
  e in a.j && Bb(a.j[e], c) && (Iq(c), a.j[e].length == 0 && (delete a.j[e], a.o--));
}
function Kq(a, c, e, f) {
  for (var g = 0; g < a.length; ++g) {
    var h = a[g];
    if (!h.lb && h.listener == c && h.capture == !!e && h.handler == f) return g;
  }
  return -1;
}
var Mq = "closure_lm_" + ((Math.random() * 1e6) | 0),
  Nq = {},
  Oq = 0;
function Pq(a, c, e, f, g) {
  if (f && f.once) return Qq(a, c, e, f, g);
  if (Array.isArray(c)) {
    for (var h = 0; h < c.length; h++) Pq(a, c[h], e, f, g);
    return null;
  }
  e = Rq(e);
  return a && a[Fq]
    ? a.v.add(String(c), e, !1, Ma(f) ? !!f.capture : !!f, g)
    : Sq(a, c, e, !1, f, g);
}
function Sq(a, c, e, f, g, h) {
  if (!c) throw Error("gb");
  var k = Ma(g) ? !!g.capture : !!g,
    l = Tq(a);
  l || (a[Mq] = l = new Jq(a));
  e = l.add(c, e, f, k, h);
  if (e.proxy) return e;
  f = Uq();
  e.proxy = f;
  f.src = a;
  f.listener = e;
  if (a.addEventListener)
    (Dq || (g = k), g === void 0 && (g = !1), a.addEventListener(c.toString(), f, g));
  else if (a.attachEvent) a.attachEvent(Vq(c.toString()), f);
  else if (a.addListener && a.removeListener) a.addListener(f);
  else throw Error("hb");
  Oq++;
  return e;
}
function Uq() {
  function a(e) {
    return c.call(a.src, a.listener, e);
  }
  var c = Wq;
  return a;
}
function Qq(a, c, e, f, g) {
  if (Array.isArray(c)) {
    for (var h = 0; h < c.length; h++) Qq(a, c[h], e, f, g);
    return null;
  }
  e = Rq(e);
  return a && a[Fq]
    ? a.v.add(String(c), e, !0, Ma(f) ? !!f.capture : !!f, g)
    : Sq(a, c, e, !0, f, g);
}
function Xq(a, c, e, f, g) {
  if (Array.isArray(c)) for (var h = 0; h < c.length; h++) Xq(a, c[h], e, f, g);
  else
    ((f = Ma(f) ? !!f.capture : !!f), (e = Rq(e)), a && a[Fq])
      ? a.v.remove(String(c), e, f, g)
      : a &&
        (a = Tq(a)) &&
        ((c = a.j[c.toString()]),
        (a = -1),
        c && (a = Kq(c, e, f, g)),
        (e = a > -1 ? c[a] : null) && Yq(e));
}
function Yq(a) {
  if (typeof a !== "number" && a && !a.lb) {
    var c = a.src;
    if (c && c[Fq]) Lq(c.v, a);
    else {
      var e = a.type,
        f = a.proxy;
      c.removeEventListener
        ? c.removeEventListener(e, f, a.capture)
        : c.detachEvent
          ? c.detachEvent(Vq(e), f)
          : c.addListener && c.removeListener && c.removeListener(f);
      Oq--;
      (e = Tq(c)) ? (Lq(e, a), e.o == 0 && ((e.src = null), (c[Mq] = null))) : Iq(a);
    }
  }
}
function Vq(a) {
  return a in Nq ? Nq[a] : (Nq[a] = "on" + a);
}
function Wq(a, c) {
  if (a.lb) a = !0;
  else {
    c = new Eq(c, this);
    var e = a.listener,
      f = a.handler || a.src;
    a.Qa && Yq(a);
    a = e.call(f, c);
  }
  return a;
}
function Tq(a) {
  a = a[Mq];
  return a instanceof Jq ? a : null;
}
var Zq = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
function Rq(a) {
  if (typeof a === "function") return a;
  a[Zq] ||
    (a[Zq] = function (c) {
      return a.handleEvent(c);
    });
  return a[Zq];
}
Ei(function (a) {
  Wq = a(Wq);
});
function $q(a, c) {
  Cq.call(this, a);
  this.error = c;
}
F($q, Cq);
var ar = /\/d\/([^\/]+)/,
  br = /\/r\/([^\/]+)/;
function cr(a) {
  a = a.match(Mk)[5] || null;
  return ar.test(a);
}
function dr(a, c) {
  if (cr(a)) {
    cr(a);
    a = a.match(Mk);
    var e = a[5];
    e = e.replace(c, "");
    c = Lk(a[1], a[2], a[3], a[4], e, a[6], a[7]);
  } else c = a;
  return c;
}
function er() {
  T.call(this);
  this.v = new Jq(this);
  this.ga = this;
  this.P = null;
}
Xa(er, T);
er.prototype[Fq] = !0;
er.prototype.addEventListener = function (a, c, e, f) {
  Pq(this, a, c, e, f);
};
er.prototype.removeEventListener = function (a, c, e, f) {
  Xq(this, a, c, e, f);
};
er.prototype.dispatchEvent = function (a) {
  var c = this.P;
  if (c) {
    var e = [];
    for (var f = 1; c; c = c.P) (e.push(c), ++f);
  }
  c = this.ga;
  f = a.type || a;
  if (typeof a === "string") a = new Cq(a, c);
  else if (a instanceof Cq) a.target = a.target || c;
  else {
    var g = a;
    a = new Cq(f, c);
    dq(a, g);
  }
  g = !0;
  var h;
  if (e)
    for (h = e.length - 1; !a.o && h >= 0; h--) {
      var k = (a.currentTarget = e[h]);
      g = fr(k, f, !0, a) && g;
    }
  a.o || ((k = a.currentTarget = c), (g = fr(k, f, !0, a) && g), a.o || (g = fr(k, f, !1, a) && g));
  if (e)
    for (h = 0; !a.o && h < e.length; h++)
      ((k = a.currentTarget = e[h]), (g = fr(k, f, !1, a) && g));
  return g;
};
er.prototype.N = function () {
  er.pa.N.call(this);
  if (this.v) {
    var a = this.v,
      c = 0,
      e;
    for (e in a.j) {
      for (var f = a.j[e], g = 0; g < f.length; g++) (++c, Iq(f[g]));
      delete a.j[e];
      a.o--;
    }
  }
  this.P = null;
};
function fr(a, c, e, f) {
  c = a.v.j[String(c)];
  if (!c) return !0;
  c = c.concat();
  for (var g = !0, h = 0; h < c.length; ++h) {
    var k = c[h];
    if (k && !k.lb && k.capture == e) {
      var l = k.listener,
        p = k.handler || k.src;
      k.Qa && Lq(a.v, k);
      g = l.call(p, f) !== !1 && g;
    }
  }
  return g && !f.defaultPrevented;
}
function gr(a, c) {
  er.call(this);
  this.o = a || 1;
  this.j = c || K;
  this.A = Sa(this.Fe, this);
  this.B = Date.now();
}
Xa(gr, er);
C = gr.prototype;
C.cb = !1;
C.ta = null;
C.setInterval = function (a) {
  this.o = a;
  this.ta && this.cb ? (this.stop(), this.start()) : this.ta && this.stop();
};
C.Fe = function () {
  if (this.cb) {
    var a = Date.now() - this.B;
    a > 0 && a < this.o * 0.8
      ? (this.ta = this.j.setTimeout(this.A, this.o - a))
      : (this.ta && (this.j.clearTimeout(this.ta), (this.ta = null)),
        this.dispatchEvent("tick"),
        this.cb && (this.stop(), this.start()));
  }
};
C.start = function () {
  this.cb = !0;
  this.ta || ((this.ta = this.j.setTimeout(this.A, this.o)), (this.B = Date.now()));
};
C.stop = function () {
  this.cb = !1;
  this.ta && (this.j.clearTimeout(this.ta), (this.ta = null));
};
C.N = function () {
  gr.pa.N.call(this);
  this.stop();
  delete this.j;
};
function hr(a, c, e) {
  if (typeof a === "function") e && (a = Sa(a, e));
  else if (a && typeof a.handleEvent == "function") a = Sa(a.handleEvent, a);
  else throw Error("ib");
  return Number(c) > 2147483647 ? -1 : K.setTimeout(a, c || 0);
}
function ir(a) {
  var c = null;
  return new Vi(function (e, f) {
    c = hr(function () {
      e(void 0);
    }, a);
    c == -1 && f(Error("jb"));
  }).Pa(function (e) {
    K.clearTimeout(c);
    throw e;
  });
}
function jr(a, c, e) {
  T.call(this);
  this.j = a;
  this.v = c || 0;
  this.o = e;
  this.A = Sa(this.Kd, this);
}
Xa(jr, T);
C = jr.prototype;
C.eb = 0;
C.N = function () {
  jr.pa.N.call(this);
  this.stop();
  delete this.j;
  delete this.o;
};
C.start = function (a) {
  this.stop();
  this.eb = hr(this.A, a !== void 0 ? a : this.v);
};
C.stop = function () {
  this.isActive() && K.clearTimeout(this.eb);
  this.eb = 0;
};
C.isActive = function () {
  return this.eb != 0;
};
C.Kd = function () {
  this.eb = 0;
  this.j && this.j.call(this.o);
};
function kr(a, c, e, f) {
  T.call(this);
  this.v = f != null ? f : 0.15;
  this.B = a;
  this.A = c;
  this.D = e;
  this.j = new jr(this.Be, void 0, this);
  this.C = Number.NEGATIVE_INFINITY;
  this.o = 0;
}
F(kr, T);
C = kr.prototype;
C.isActive = function () {
  return this.j.isActive();
};
C.start = function () {
  lr(this, !1, !1);
};
function lr(a, c, e) {
  c && (a.j.stop(), mr(a, a.A));
  a.isActive() ||
    ((c = Math.max(0, a.C + a.o - Date.now())),
    c == 0 && (e ? (c = mr(a, a.A)) : (a.o = 0)),
    a.j.start(c));
}
C.stop = function () {
  this.j.stop();
};
function mr(a, c) {
  c > 0 && a.v != 0 && (c = Math.floor(c * (1 - a.v + Math.random() * a.v * 2)));
  return (a.o = c);
}
C.Be = function () {
  this.C = Date.now();
  mr(this, Math.min(Math.max(this.o * 2, this.A), this.D));
  this.B();
};
C.N = function () {
  this.j.dispose();
  delete this.j;
  delete this.B;
  T.prototype.N.call(this);
};
function nr(a) {
  T.call(this);
  this.o = a;
  this.j = {};
}
Xa(nr, T);
var or = [];
function pr(a, c, e, f) {
  Array.isArray(e) || (e && (or[0] = e.toString()), (e = or));
  for (var g = 0; g < e.length; g++) {
    var h = Pq(c, e[g], f || a.handleEvent, !1, a.o || a);
    if (!h) break;
    a.j[h.key] = h;
  }
  return a;
}
function qr(a) {
  Yp(
    a.j,
    function (c, e) {
      this.j.hasOwnProperty(e) && Yq(c);
    },
    a,
  );
  a.j = {};
}
nr.prototype.N = function () {
  nr.pa.N.call(this);
  qr(this);
};
nr.prototype.handleEvent = function () {
  throw Error("kb");
};
function rr(a, c, e, f, g, h, k) {
  k = k === void 0 ? !0 : k;
  T.call(this);
  var l = this;
  this.o = a;
  this.o.M = 1e4;
  this.ja = c;
  this.H = h;
  this.A = new kr(
    function () {
      return l.Xa();
    },
    3e4,
    36e5,
  );
  this.I = 0;
  this.R = null;
  this.ca = new sp("errorsender", 1, 8, f);
  cl(this, this.ca);
  this.Y = !1;
  this.S = null;
  this.P = new Set();
  this.O = new nr(this);
  this.va = e || 10;
  this.na = g || null;
  pr(this.O, this.o, "complete", this.ne);
  pr(this.O, this.o, "ready", this.Xa);
  this.ia = null;
  this.V = new cn();
  cl(this, this.V);
  this.H &&
    dn(this.V, this.H.o(), function () {
      l.H.j().j >= 3 && (l.ia = (Fp(), Dp));
      l.H.j().j >= 3 || l.ia !== (Fp(), Dp) || sr(l);
    });
  this.ha = k;
  this.oa = {};
}
F(rr, T);
C = rr.prototype;
C.send = function (a, c, e, f) {
  U(this.ja, "docs-dafjera") && (a = dr(dr(a, br), ar));
  var g = xj(
    xj(
      this.Ua(),
      function (h) {
        if (!(h >= this.va))
          return (
            this.ha && (a = Tk(a, "errorSender_enqueueTimeMs", Date.now().toString())),
            (h = {}),
            (h.u = a),
            (h.m = c),
            (h.c = e),
            (h.h = f),
            this.fb(h)
          );
      },
      this,
    ),
    this.Xa,
    this,
  );
  Aj(
    g,
    function () {
      this.P.delete(g);
    },
    this,
  );
  this.P.add(g);
};
function tr(a) {
  return dj(Array.from(a.P.values())).then(u());
}
C.Xa = function () {
  var a = this.H && this.H.j().j >= 3,
    c = this.La() || this.o.isActive() || this.A.isActive() || this.Y;
  return a || c ? Fj() : ur(this);
};
function ur(a) {
  return a.ob(function () {
    return xj(a.Ta(), function (c) {
      return vr(a, c);
    });
  });
}
function vr(a, c) {
  if (a.A.isActive() || a.o.isActive() || a.Y) return Fj();
  if (!c) return (a.A.stop(), Fj());
  if (c.u.length > 4e3) return a.Ha();
  try {
    up(a.ca);
    a.S = new qj();
    var e = c.u;
    a.na != null && (e = Tk(e, "reportingSessionId", a.na));
    a.I > 0 && (e = Tk(e, "retryCount", a.I));
    a.R != null && (e = Tk(e, "previousErrorSendStatus", a.R));
    a.ha &&
      ((e = Tk(e, "errorSender_sendTimeMs", Date.now().toString())),
      (e = Tk(e, "errorSenderType", a.sb())),
      c.errorSender_frontIndex && (e = Tk(e, "errorSender_frontIndex", c.errorSender_frontIndex)),
      c.errorSender_nextIndex && (e = Tk(e, "errorSender_nextIndex", c.errorSender_nextIndex)),
      c.errorSender_queueSize && (e = Tk(e, "errorSender_queueSize", c.errorSender_queueSize)));
    a.oa = c;
    var f = c.m,
      g = c.c,
      h = c.h;
    return xj(
      xj(a.Ha(), function () {
        a.o.send(e, f, g, h);
      }),
      function () {
        return a.S;
      },
    );
  } catch (k) {
    if (wk(k) instanceof rp) a.Y = !0;
    else throw Hk(k, { "docs-origin-class": "docs.debug.ErrorSender" });
  }
  return Fj();
}
C.ne = function () {
  var a = wr(this.o),
    c = this.S,
    e = xr(this.o) || (a >= 400 && a <= 500),
    f = this.I > 3;
  e || f
    ? ((this.I = 0),
      (this.R = null),
      this.A.stop(),
      xj(Fj(), function () {
        c.ma();
      }))
    : (this.I++, (this.R = a === -1 ? this.o.C : a), sr(this), this.fb(this.oa), c.ma());
};
function sr(a) {
  a.I != 1 || a.A.isActive() ? a.A.start() : lr(a.A, !0, !0);
}
C.N = function () {
  bl(this.O, this.A, this.o, this.V);
  this.P.clear();
  T.prototype.N.call(this);
};
C.sb = A("BaseErrorSender");
function yr(a, c, e, f, g) {
  rr.call(this, a, c, e, void 0, f, g, void 0);
  this.j = [];
}
F(yr, rr);
C = yr.prototype;
C.ob = function (a) {
  return a();
};
C.fb = function (a) {
  this.j.push(a);
  return Fj();
};
C.Ha = function () {
  this.j.shift();
  return Fj();
};
C.Ta = function () {
  return Fj(this.j[0] !== void 0 ? this.j[0] : null);
};
C.Ua = function () {
  return Fj(this.j.length);
};
C.sb = A("MemoryErrorSender");
C.N = function () {
  delete this.j;
  rr.prototype.N.call(this);
};
function zr() {
  var a = a === void 0 ? !1 : a;
  if (a === void 0 ? 0 : a) throw Error("lb`a");
}
zr.prototype.toString = A("a");
new zr();
function Ar(a) {
  this.j = dg(xi(), pe(a));
  a = mf(this.j, 1);
  this.o = Math.floor(Math.random() * 100) < a;
}
Ar.prototype.toString = function () {
  var a = "{bool=" + !(this.o ? !lf(this.j, 5) : !lf(this.j, 2)) + ', string="',
    c = this.o ? Qd(Ge(this.j, 6, void 0, Fe)) : of(this.j, 3);
  a = a + (c != null ? String(c) : "") + '", int=';
  c = this.o ? Gd(Ge(this.j, 7, void 0, Fe)) : mf(this.j, 4, -1);
  return a + (c != null ? Number(c) : -1) + "}";
};
function Br(a) {
  this.j = new Map();
  this.o = [];
  if ((a = a.get("docs-cei"))) {
    var c = a.i;
    c && Cb(this.o, c);
    a = a.cf || {};
    for (var e in a) this.j.set(e, new Ar(a[e]));
  }
}
Br.prototype.get = function (a) {
  return this.j.get(a) || null;
};
function Cr() {
  for (var a in Array.prototype) return !1;
  return !0;
}
var Dr = [
    'window[("_callback_" + expid)] is not a function',
    "Cannot read properties of null (reading 'readyState')",
    "request failed on client side",
  ],
  Er = [/(undefined|constructor).*YT|YT.*(undefined|constructor)/];
function Fr(a) {
  this.j = a;
}
function Gr(a) {
  var c = a.j;
  if (c == null) return null;
  if (typeof c === "string") return c;
  throw new TypeError("nb`string`K1cgmc`" + a.j + "`" + typeof a.j);
}
Fr.prototype.toString = function () {
  var a = Gr(this);
  if (a === null) throw Error("mb`K1cgmc");
  return a;
};
function Hr() {
  var a = K;
  a = a === void 0 ? window : a;
  var c = new Fr(mi("K1cgmc", a));
  a = Ir;
  var e = new Ir();
  c = Gr(c);
  return c === null ? e : ag(a, "[" + c.substring(4));
}
function Jr(a) {
  this.G = M(a);
}
F(Jr, Q);
Jr.prototype.wa = function (a) {
  return tf(this, 7, a);
};
function Kr(a) {
  this.G = M(a);
}
F(Kr, Q);
function Lr(a) {
  return bf(a, Jr, We(a, Mr, 4));
}
var Mr = [4, 5];
function Nr(a) {
  this.G = M(a);
}
F(Nr, Q);
function Or(a) {
  this.G = M(a);
}
F(Or, Q);
function Ir(a) {
  this.G = M(a);
}
F(Ir, Q);
function Pr(a) {
  return bf(a, Kr, 1);
}
function Qr() {
  this.j = bg(Hr());
}
Qr.prototype.Ra = function () {
  var a = new Map(),
    c,
    e = (c = this.j) == null ? void 0 : Lr(Pr(c));
  if (e == null ? 0 : kf(e, 2) != null) {
    var f;
    (c = (f = pf(e, 2)) == null ? void 0 : f.toString()) &&
      a.set("canaryanalysisservertestgroup", c);
    if (e == null) var g = void 0;
    else if ((e = cf(e, ri, 3)) == null) g = void 0;
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
  (g = (k = this.j) == null ? void 0 : (l = cf(k, Kr, 1)) == null ? void 0 : pf(l, 6)) &&
    a.set("clientApp", String(g));
  return a;
};
function Rr(a, c) {
  this.width = a;
  this.height = c;
}
C = Rr.prototype;
C.clone = function () {
  return new Rr(this.width, this.height);
};
C.aspectRatio = function () {
  return this.width / this.height;
};
C.ceil = function () {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
C.floor = function () {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
C.round = function () {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Sr() {
  this.j = K.document || document;
}
function Tr() {
  function a() {}
  this.j = a.call.bind(a.toString);
}
Tr.prototype.Ra = function () {
  var a = new Map();
  Ur() && a.set("apps_telemetry.screen_tampered", "true");
  a: {
    var c = G(Array.prototype),
      e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next()) {
        var g = !0;
        break a;
      }
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
    g = !1;
  }
  g && a.set("apps_telemetry.array_prototype_tampered", "true");
  Vr() || a.set("apps_telemetry.canvas_creation_broken", "true");
  !Wr() && K.navigator && K.navigator.webdriver && a.set("apps_telemetry.webdriver", "true");
  g = !1;
  c = G(Xr);
  e = c.next();
  var h;
  try {
    for (; !e.done; e = c.next()) {
      var k = e.value,
        l = Yr(k.key);
      l === 0
        ? (a.set("apps_telemetry.automation_property_present." + k.ka, "true"), (g = !0))
        : l === 2 && a.set("apps_telemetry.automation_property_check_failed." + k.ka, "true");
    }
  } finally {
    e && !e.done && (h = c.return) && h.call(c);
  }
  g && a.set("apps_telemetry.automation_detected", "true");
  h = !1;
  k = G(Zr);
  l = k.next();
  var p;
  try {
    for (; !l.done; l = k.next()) {
      var q = l.value,
        r = q.ka,
        x = $r(this, q.name, q.Bd);
      if (!x.Na) {
        var y = x.reason;
        a.set("apps_telemetry.native_function_tampering." + r + ".reason", y);
        y === "non_function_type" &&
          a.set("apps_telemetry.native_function_tampering." + r + ".type", x.type);
        h = !0;
      }
    }
  } finally {
    l && !l.done && (p = k.return) && p.call(k);
  }
  h && a.set("apps_telemetry.native_function_tampering_detected", "true");
  return a;
};
function Ur() {
  if (Wr()) return !1;
  var a = K.screen,
    c = !(a instanceof Screen);
  if (Lb || Gb) return c;
  try {
    var e = u();
    a.addEventListener("change", e);
    a.removeEventListener("change", e);
  } catch (f) {
    c = !0;
  }
  return c;
}
function Vr() {
  function a(c) {
    try {
      var e = new Rr(1, 500);
      if (c) {
        c = "CANVAS";
        e = document;
        c = String(c);
        e.contentType === "application/xhtml+xml" && (c = c.toLowerCase());
        var f = e.createElement(c);
      } else f = new OffscreenCanvas(e.width, e.height);
      return f.getContext("2d") != null;
    } catch (g) {
      return !1;
    }
  }
  return a(!1) && (Wr() || a(!0));
}
function Wr() {
  return (
    "WorkerGlobalScope" in K &&
    typeof K.WorkerGlobalScope === "function" &&
    self instanceof K.WorkerGlobalScope
  );
}
function Yr(a) {
  if (Wr() || !K) return 1;
  try {
    if (a in K || (K.document && a in K.document)) return 0;
  } catch (c) {
    return 2;
  }
  return 1;
}
function $r(a, c, e) {
  try {
    var f = e();
  } catch (h) {
    return { Na: !1, reason: "not_reachable" };
  }
  e = as(f);
  if (e !== "function") return { Na: !1, reason: "non_function_type", type: e };
  try {
    var g = a.j(f);
  } catch (h) {
    return { Na: !1, reason: "to_string_failed" };
  }
  a = bs.exec(g);
  return a
    ? (a = a[1])
      ? a !== c
        ? { Na: !1, reason: "likely_wrong_native_function" }
        : { Na: !0 }
      : { Na: !1, reason: "likely_bound_function" }
    : { Na: !1, reason: "likely_non_native_source" };
}
function as(a) {
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
var Xr = [
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
  Zr = [
    {
      name: "getOwnPropertyDescriptor",
      Bd: function () {
        return Object.getOwnPropertyDescriptor;
      },
      ka: "Object.getOwnPropertyDescriptor",
    },
    {
      name: "addEventListener",
      Bd: function () {
        return K.addEventListener;
      },
      ka: "global.addEventListener",
    },
  ],
  bs = /^function\s*(?:\s([a-zA-Z_$][\w$]+))?\(\) \{\s+\[native code\]\s+\}$/;
var cs = [],
  ds = [],
  es = [
    RegExp("^_0x[a-f0-9]{6} is not defined$"),
    RegExp("[Zz]otero"),
    RegExp('^Not found$|^Unknown Error of type "string": Not found$'),
  ],
  fs =
    "egfdjlfmgnehecnclamagfafdccgfndp mndnfokpggljbaajbnioimlmbfngpief mlkejohendkgipaomdopolhpbihbhfnf kgonammgkackdilhodbgbmodpepjocdp klbcgckkldhdhonijdbnhhaiedfkllef pmehocpgjmkenlokgjfkaichfjdhpeol cjlaeehoipngghikfjogbdkpbdgebppb ghbmnnjooekpmoecnnnilnnbdlolhkhi lmjegmlicamnimmfhcmpkclmigmmcbeh gmbmikajjgmnabiglmofipeabaddhgne lpcaedmchfhocbbapmcbpinfpgnhiddi gbkeegbaiigmenfmjfclcdgdpimamgkj adokjfanaflbkibffcbhihgihpgijcei iklnnbgdcppplombffihcijanngoeifm".split(
      " ",
    ),
  gs = [
    RegExp("chrome-extension://([^/]+)", "g"),
    RegExp("moz-extension://([^/]+)", "g"),
    RegExp("ms-browser-extension://([^/]+)", "g"),
    RegExp("webkit-masked-url://([^/]+)", "g"),
    RegExp("safari-web-extension://([^/]+)", "g"),
  ],
  hs = [
    RegExp("^Permission denied$"),
    RegExp("index out of range: \\d+ \\+ \\d+ > \\d+"),
    RegExp("getReadMode(Config|Render|Extract)"),
  ],
  is = [
    RegExp("at file:///|@file:///|phantomjs|node:electron|py-scrap|eval code|Program Files"),
    RegExp("_0x[a-f0-9]+.*anonymous"),
  ],
  js = [
    RegExp("Script https://meet\\.google\\.com/.*meetsw.*load failed"),
    RegExp("A bad HTTP response code \\(\\d+\\) was received when fetching the script"),
  ],
  ks = [
    RegExp("Error loading.*Consecutive load failures"),
    RegExp("Failed to load module.*Consecutive load failures"),
  ];
function ls(a, c) {
  this.mc = a;
  this.rb = c;
}
function ms(a, c) {
  return (c = a.j(c)) ? { mc: a.mc, rb: a.rb, Xc: c.toUpperCase() } : null;
}
function ns() {
  ls.call(this, 1, 1);
}
F(ns, ls);
ns.prototype.j = function (a) {
  a: {
    a = os(a);
    var c = !1,
      e = G(gs),
      f = e.next(),
      g;
    try {
      for (; !f.done; f = e.next()) {
        var h = a.matchAll(f.value),
          k = G(h),
          l = k.next(),
          p;
        try {
          for (; !l.done; l = k.next()) {
            var q = l.value[1];
            if (q) {
              if (fs.includes(q)) {
                var r = !1;
                break a;
              }
              c = !0;
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
function ps(a, c, e) {
  e = e === void 0 ? qs : e;
  ls.call(this, a, c);
  this.o = e;
}
F(ps, ls);
ps.prototype.j = function (a) {
  var c =
      typeof a.o.get("apps_telemetry.cross_origin_scripts") === "string"
        ? a.o.get("apps_telemetry.cross_origin_scripts")
        : "",
    e = a.o.get("apps_telemetry.native_function_tampering_detected") === "true",
    f = os(a),
    g = f.includes("blob:"),
    h = G(this.o),
    k = h.next(),
    l;
  try {
    for (; !k.done; k = h.next()) {
      var p = k.value,
        q = p.errorMessage,
        r = p.bd,
        x = r === void 0 ? [] : r,
        y = p.Ca,
        z = y === void 0 ? [] : y,
        B = p.Ab,
        I = B === void 0 ? !1 : B,
        D = p.yd,
        Y = p.re,
        aa = Y === void 0 ? !1 : Y;
      if ((D === void 0 ? 0 : D) ? a.message === q : f.includes(q)) {
        var Va = x.some(function (tc) {
            return c.includes(tc);
          }),
          td = z.some(function (tc) {
            return a.j.includes(tc);
          });
        x = I && g;
        aa = aa && e;
        if (Va || td || x || aa) return "warning";
      }
    }
  } finally {
    k && !k.done && (l = h.return) && l.call(h);
  }
  return null;
};
var qs = [
  {
    errorMessage: "Cannot read properties of undefined (reading 'addListener')",
    Ab: !0,
    bd: ["infird.com"],
  },
  {
    errorMessage: "browser_polyfill_default(...).runtime.getManifest is not a function",
    Ab: !0,
    bd: ["infird.com"],
  },
  { errorMessage: 'fileName":', bd: ["walkme.com"] },
  { errorMessage: "] is not a function", Ab: !0 },
  { errorMessage: "(reading 'toLowerCase')", Ab: !0, Ca: ["__aiNetCmd__"] },
  { errorMessage: "Cannot read properties of undefined", Ca: ["recaptcha"] },
  { errorMessage: "a is not defined", yd: !0, Ca: ["<anonymous>"] },
  { errorMessage: "i is not defined", yd: !0, Ca: ["<anonymous>"] },
  { errorMessage: "Failed to fetch", Ca: ["__DLD__", "frontend.min.js"] },
  { errorMessage: "Maximum call stack size exceeded", re: !0 },
  { errorMessage: "Unexpected end of JSON input", Ca: ["facebook.net"] },
];
function rs(a, c, e, f, g) {
  g = g === void 0 ? new Map() : g;
  this.message = a;
  this.j = c;
  this.cause = e;
  this.v = f;
  this.o = g;
}
function ss(a) {
  return (a = a.cause) ? a.message + "\n" + a.j + "\n" + ss(a) : "";
}
function os(a) {
  return a.message + "\n" + a.j + "\n" + ss(a);
}
function ts() {
  this.v = this.j = this.message = "";
  this.o = new Map();
}
function us(a, c) {
  a.message = c;
  return a;
}
function vs(a) {
  return new rs(a.message, a.j, a.cause, a.v, a.o);
}
function ws(a) {
  return a instanceof Error || (a && a.message !== void 0) ? a.message : xs(a);
}
function ys(a) {
  return a instanceof Error || (a && a.stack !== void 0) ? a.stack || "" : "";
}
function zs(a, c) {
  var e = a && a.cause !== void 0;
  if (c >= 3 || !e) return null;
  e = new ts();
  a = a.cause;
  if (As(a)) {
    if ((us(e, ws(a)), (e.j = ys(a)), (c = zs(a, c + 1)))) e.cause = c;
  } else us(e, xs(a));
  return vs(e);
}
function As(a) {
  return a instanceof Error || (!!a && a.message !== void 0 && a.stack !== void 0);
}
function xs(a) {
  try {
    return As(a)
      ? a.message + "\n" + a.stack
      : a && a instanceof Object
        ? JSON.stringify(a)
        : String(a);
  } catch (c) {
    return String(a);
  }
}
function Bs(a, c, e) {
  e = e === void 0 ? new Map() : e;
  var f = us(new ts(), ws(a));
  f.j = ys(a);
  f.o = e;
  if ((a = zs(a, 0))) f.cause = a;
  c && (f.v = c);
  return vs(f);
}
function Cs(a, c, e, f) {
  ls.call(this, e, f);
  this.o = a;
  this.v = c;
}
F(Cs, ls);
Cs.prototype.j = function (a) {
  var c = ss(a);
  return Ds(a.message, this.o) || Ds(a.j, this.v) || Ds(c, this.o) || Ds(c, this.v)
    ? "warning"
    : null;
};
function Ds(a, c) {
  c = G(c);
  var e = c.next(),
    f;
  try {
    for (; !e.done; e = c.next()) if (e.value.test(a)) return !0;
  } finally {
    e && !e.done && (f = c.return) && f.call(c);
  }
  return !1;
}
function Es(a, c, e, f, g) {
  ls.call(this, e, f);
  this.o = a;
  this.Ca = c;
  this.matchType = g;
}
F(Es, ls);
Es.prototype.j = function (a) {
  switch (this.matchType) {
    case 0:
      a: {
        var c = a.message,
          e = G(this.o);
        a = e.next();
        var f;
        try {
          for (; !a.done; a = e.next())
            if (c === a.value) {
              var g = !0;
              break a;
            }
        } finally {
          a && !a.done && (f = e.return) && f.call(e);
        }
        g = !1;
      }
      return g ? "warning" : null;
    case 1:
      a: {
        g = a.message;
        f = G(this.o);
        a = f.next();
        try {
          for (; !a.done; a = f.next())
            if (g.startsWith(a.value)) {
              c = !0;
              break a;
            }
        } finally {
          a && !a.done && (e = f.return) && e.call(f);
        }
        c = !1;
      }
      return c ? "warning" : null;
    case 2:
      return ((g = os(a)), Fs(g, this.o) || Fs(g, this.Ca) ? "warning" : null);
    default:
      return null;
  }
};
function Fs(a, c) {
  c = G(c);
  var e = c.next(),
    f;
  try {
    for (; !e.done; e = c.next()) if (a.includes(e.value)) return !0;
  } finally {
    e && !e.done && (f = c.return) && f.call(c);
  }
  return !1;
}
function Gs(a, c, e) {
  return new Es(a, c, e, 0, 2);
}
function Hs(a, c, e) {
  ls.call(this, a, c);
  this.o = e();
}
F(Hs, ls);
Hs.prototype.j = function () {
  return this.o ? null : "unsupported_severe";
};
var Is = [
    new ns(),
    Gs(
      "Trusted Type;TrustedHTML;TrustedScript;cannot communicate with background;zaloJSV2;kaspersky-labs;@user-script;Object Not Found Matching Id;contextChanged;Not implemented on this platform;Extension context invalidated;neurosurgeonundergo;realTimeClData;Failed to execute 'querySelectorAll' on 'Document';Promise.all(...).then(...).catch(...).finally is not a function;Error executing Chrome API, chrome.tabs;Identifier 'originalPrompt' has already been declared;User rejected the request;Could not inject ethereum provider because it's not your default extension;Cannot redefine property: googletag;Can't find variable: HTMLDialogElement;Identifier 'listenerName' has already been declared;Cannot read properties of undefined (reading 'info');Permission denied to access property \"type\";Error: Promise timed out;Request timeout ToolbarStatus;Can't find variable: nc;imtgo;ton is not a function;__renderMessageNode is not defined;Cannot redefine property: ethereum;unknown action:;Receiving end does not exist;get-frame-manager-configuration;Key not found;'isAWS';Identifier 'contentScriptListenerRegistered' has already been declared;window.ethereum.selectedAddress;extDomain is not defined;No Listener: tabs:outgoing.message.ready;This script should only be loaded in a browser extension;Identifier 'initCoreHelpers' has already been declared;undefined is not an object (evaluating 't.tab.customFillData');No tab with id:;The browser is shutting down.;User mapping loading timeout;Internal JSON-RPC error;TOKEN_EXPIRED;A listener indicated an asynchronous response by returning true;You must authenticate your request with an API key".split(
        ";",
      ),
      "puppeteer;kaspersky-labs;@user-script;jsQuilting;linkbolic;neurosurgeonundergo;tlscdn;https://cdnjs.cloudflare.com/ajax/libs/mathjax/;secured-pixel.com;Can't find variable: nc;imtgo;_simulateEvent;goguardian".split(
        ";",
      ),
      1,
    ),
    new Cs(es, ds, 1, 0),
    Gs(
      "status is 0, navigator.onLine =;Network sync is disabled. Aborting a network request of int type;The service is currently unavailable.;Internal error encountered.;data does not exist in AF cache;There was an error during the transport or processing of this request;Failed to load gapi;Rpc failed due to xhr error. error code: 6, error:  [0];An interceptor has requested that the request be retried;8,\"generic\";A network error occurred;NetworkError: Connection failure due to HTTP 401;NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope';Load failed".split(
        ";",
      ),
      cs,
      2,
    ),
    new Cs([], ds, 2, 0),
    new Cs(hs, is, 3, 0),
    Gs(
      "Kg is not defined;uncaught error;The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.;Illegal invocation;Script error;zCommon;can't access dead object;Java exception was raised during method invocation;pauseVideo is not a function;ResizeObserver loop;wallet must has at least one account;xbrowser is not defined;jQuery is not defined;Cannot read properties of null (reading 'requestAnimationFrame');Class extends value undefined is not a constructor or null;GM3TooltipService: No tooltip with id;Mole was disposed;getInitialTopicListResponse is missing for stream rendering;getPeopleById call preempted;The operation is insecure;class heritage;The play() request was interrupted;args.site.enabledFeatures is undefined;frappe is not defined;Cannot set properties of undefined (setting 'hidden');Identifier 'checkOngoingMeeting' has already been declared;AutofillCallbackHandler;invalid wire type;zp_token;isReCreate;HTMLOUT is not defined;Shopify root is null;CanvasMaskingStrategy_Redact;_chromeNamespace;feature named `performanceMetrics`;feature named `webCompat`;Cannot redefine property: webdriver;reCAPTCHA Timeout;feature named `pageObserver` was not found;feature named `hover` was not found;Request timeout appSettingsDistributor.getValue;TimeoutError: operation timed out;Sink type mismatch violation blocked by CSP;__firefox__;: Java object is gone;Cannot read properties of undefined (reading 'domInteractive');: t is not defined;sendMessage(). Tab not found.;Can't find variable: __gCrWeb;WKWebView API client did not respond to this postMessage;The provider is disconnected from all chains;The user aborted a request.;Task was cancelled.;lettersVoicesDistributor".split(
        ";",
      ),
      ["postUserData", "inline.cdn.mcas.ms", "evaluating 'n.standardSelectors'"],
      3,
    ),
    new Cs(js, ds, 5, 0),
    Gs(
      "Service worker registration is disabled by MDA;An unknown error occurred when fetching the script;Operation has been aborted;Timed out while trying to start the Service Worker;The Service Worker system has shutdown;The user denied permission to use Service Worker;The script resource is behind a redirect, which is disallowed;The document is in an invalid state;ServiceWorker script evaluation failed;ServiceWorker cannot be started;Failed to access storage;Worker disallowed;encountered an error during installation".split(
        ";",
      ),
      cs,
      5,
    ),
    new Cs(ks, ks, 4, 0),
    Gs(
      [
        "Timeout reached for loading script https://www.gstatic.com/_/apps-fileview/_/js/",
        "Error while loading script https://www.gstatic.com/_/apps-fileview/_/js/",
      ],
      cs,
      4,
    ),
  ],
  Js = new Set(["SEVERE", "SEVERE_AFTER_INITIAL", "UNKNOWN", "FATAL", ""]);
function Ks(a) {
  this.o = a;
  this.j = !1;
}
function Ls(a, c, e, f) {
  var g = [Error("ob").message];
  e = e === void 0 ? !1 : e;
  f = f === void 0 ? A(!0) : f;
  var h = [];
  c.length > 0 && h.push(Ms(c));
  h.push.apply(h, oa(Is));
  a = G(a);
  c = a.next();
  var k;
  try {
    for (; !c.done; c = a.next()) h.push(c.value);
  } finally {
    c && !c.done && (k = a.return) && k.call(a);
  }
  g.length > 0 && h.push(new Es(g, [], 3, 5, 0));
  h.push(new ps(3, 0));
  e && h.push(new Hs(8, 0, f));
  return new Ks(h);
}
function Ns(a, c) {
  var e = "missing",
    f = new Map(),
    g = !0;
  try {
    e = c.v;
    a.j && f.set("apps_telemetry.after_downgraded_severe", "true");
    var h = G(a.o),
      k = h.next(),
      l;
    try {
      for (; !k.done; k = h.next()) {
        var p = k.value;
        try {
          var q = ms(p, c);
          if (q) {
            var r = e,
              x = Os(a, e) ? q.Xc : e;
            Ps(q, r, x).forEach(function (z, B) {
              f.set(B, z);
            });
            e = x;
            break;
          }
        } catch (z) {
          g = !1;
          var y = Bs(z, e);
          f.set("apps_telemetry.handling_error", os(y) + "\n\nclassifier: " + p.constructor.name);
        }
      }
    } finally {
      k && !k.done && (l = h.return) && l.call(h);
    }
  } catch (z) {
    ((g = !1), (a = Bs(z, e)), f.set("apps_telemetry.handling_error", os(a)));
  }
  f.set("apps_telemetry.processed", String(g));
  return { Xc: e, vc: f };
}
function Ps(a, c, e) {
  var f = new Map();
  f.set("apps_telemetry.classification", a.mc.toString());
  f.set("apps_telemetry.classification_code", a.rb ? a.rb.toString() : "");
  f.set("apps_telemetry.incoming_severity", c);
  f.set("apps_telemetry.outgoing_severity", e);
  return f;
}
function Os(a, c) {
  return Js.has(c.toUpperCase()) ? (a.j = !0) : !1;
}
function Ms(a) {
  var c = [];
  a = G(a);
  var e = a.next(),
    f;
  try {
    for (; !e.done; e = a.next()) c.push(new RegExp(e.value));
  } finally {
    e && !e.done && (f = a.return) && f.call(a);
  }
  return new Cs(c, c, 7, 0);
}
function Qs() {}
Qs.prototype.Ra = function () {
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
Qs.prototype.o = function (a) {
  var c = new RegExp(/^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)*google\.com(?:$|[\/#?])/);
  return (a = a.getAttribute("src")) ? !(a.startsWith("/") || c.test(a)) : !1;
};
Qs.prototype.j = function (a) {
  return a.innerHTML ? a.outerHTML.slice(0, a.outerHTML.indexOf(a.innerHTML)) : a.outerHTML;
};
function Rs() {}
Rs.prototype.Ra = function () {
  try {
    var a = performance
      .getEntriesByType("resource")
      .slice(-5)
      .map(function (c) {
        return $k(c.name);
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
var Ss = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
function Ts() {
  var a = [],
    c;
  a[8] = a[13] = a[18] = a[23] = "-";
  a[14] = "4";
  for (c = 0; c < 36; c++)
    if (!a[c]) {
      var e = 0 | (Math.random() * 16);
      a[c] = Ss[c == 19 ? (e & 3) | 8 : e];
    }
  return a.join("");
}
function Us(a, c) {
  var e = c === void 0 ? {} : c;
  c = e.qc;
  c = c === void 0 ? [] : c;
  var f = e.xe;
  f = f === void 0 ? [] : f;
  var g = e.ud;
  g = g === void 0 ? [] : g;
  var h = e.Je;
  var k = e.sessionId;
  k = k === void 0 ? Ts() : k;
  e = e.Ee;
  this.v = Ls(c, f, h === void 0 ? !1 : h, e === void 0 ? A(!0) : e);
  this.j = [new Tr(), new Qs(), new Rs()];
  this.j.push.apply(this.j, oa(g));
  this.sessionId = k;
  var l;
  this.A = (l = K.performance) == null ? void 0 : l.timeOrigin;
  this.o = a;
  this.o.wa(k);
}
function Vs(a, c, e, f) {
  f["apps_telemetry.session_id"] = a.sessionId;
  f["apps_telemetry.session_start_time_ms"] = String(a.A);
  "apps_telemetry.processed" in f && (f["apps_telemetry.multi_processed"] = "true");
  var g = a.Ra();
  (a = Ws(a, c, e, g)) && Xs(g, a.vc);
  g.forEach(function (k, l) {
    f[l] = k;
  });
  var h;
  return (h = a == null ? void 0 : a.Xc) != null ? h : e;
}
function Ws(a, c, e, f) {
  var g = null,
    h = null;
  try {
    ((g = Bs(c, e, f)), (h = Ns(a.v, g)));
  } catch (k) {
    return (Ys(f, k, "apps_telemetry.processed"), null);
  }
  a.o.Hd(g, h);
  return h;
}
Us.prototype.Ra = function () {
  var a = new Map();
  try {
    var c = G(this.j),
      e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next())
        e.value.Ra().forEach(function (g, h) {
          a.set(h, g);
        });
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  } catch (g) {
    Ys(a, g, "apps_telemetry.annotated");
  }
  return a;
};
function Xs(a, c) {
  c.forEach(function (e, f) {
    a.set(f, e);
  });
}
function Ys(a, c, e) {
  a.set(e, "false");
  a.set("apps_telemetry.handling_error", xs(c));
}
var Zs = new Set([1, 6, 7, 2, 0]);
function $s() {
  var a = Lr(Pr(bg(Hr()))),
    c = pf(a, 1),
    e = pf(a, 5);
  return [c, e].every(function (f) {
    return Zs.has(f);
  });
}
function at(a) {
  try {
    return qi(oi(), a);
  } catch (c) {
    return !1;
  }
}
function bt(a, c) {
  var e = (a = a === void 0 ? {} : a);
  a = e.ud;
  a = a === void 0 ? [] : a;
  var f = e.qc;
  f = f === void 0 ? [] : f;
  var g = e.De;
  g = g === void 0 ? [] : g;
  var h = e.ye;
  h = h === void 0 ? [] : h;
  var k = e.Nf;
  k = k === void 0 ? [] : k;
  var l = e.Of;
  l = l === void 0 ? [] : l;
  e = e.sessionId;
  e = e === void 0 ? void 0 : e;
  try {
    var p = qi(oi(), si);
    var q = Me(p, 1, Qd, void 0 === Rc ? 2 : 4);
  } catch (z) {
    q = [];
  }
  p = at(ui);
  var r = [],
    x = r.concat,
    y = [];
  g.length > 0 && y.push(Gs(g, [], 6));
  h.length > 0 && y.push(new Cs(h, [], 6, 0));
  k.length > 0 && y.push(new Es(k, [], 6, 5, 0));
  l.length > 0 && y.push(new Es(l, [], 6, 5, 1));
  return new Us(c, {
    qc: x.call(r, oa(y), oa(f)),
    xe: q,
    ud: [new Qr()].concat(oa(a)),
    Je: p,
    sessionId: e,
    Ee: $s,
  });
}
function ct() {}
ct.prototype.Hd = u();
ct.prototype.wa = u();
function et(a) {
  a = a === void 0 ? {} : a;
  return bt(a, new ct());
}
function ft(a) {
  return a
    ? a.split("\n").filter(function (c) {
        return c.trim() && !c.includes("signal is aborted without reason");
      }).length
    : 0;
}
function gt() {
  ls.call(this, 3, 0);
}
F(gt, ls);
gt.prototype.j = function (a) {
  a: {
    for (; a; ) {
      var c = a.message.includes("signal is aborted without reason"),
        e = ft(a.j) === 2;
      if (!c || !e) {
        a = !1;
        break a;
      }
      a = a.cause;
    }
    a = !0;
  }
  return a ? "warning" : null;
};
try {
  var ht,
    it,
    jt = (it = (ht = window) == null ? void 0 : ht.top) != null ? it : K;
  jt.U3bHHf != null || (jt.U3bHHf = 0);
  jt.U3bHHf++;
} catch (a) {
  (K.U3bHHf != null || (K.U3bHHf = 0), K.U3bHHf++);
}
var kt;
if (K == null ? 0 : (kt = K.Symbol) == null ? 0 : kt.for) {
  var lt = Symbol.for("google.goem");
  K[lt] || (K[lt] = new WeakMap());
}
function mt(a, c) {
  var e = a.__wiz;
  e || (e = a.__wiz = {});
  return e[c.toString()];
} /*

 Copyright 2024 Google, Inc
 SPDX-License-Identifier: MIT
*/
var nt = {};
var ot = {};
function pt(a) {
  var c = document.body,
    e = bb(c.getAttribute("jsaction") || "");
  var f = ["u0pjoe"];
  var g = G(f),
    h = g.next(),
    k;
  try {
    for (; !h.done; h = g.next()) {
      var l = h.value;
      var p = e;
      if (p) {
        var q = nt[p];
        if (q) var r = !!q[l.toString()];
        else {
          var x = ot[l.toString()];
          x ||
            ((x = new RegExp("(^\\s*" + l + "\\s*:|[\\s;]" + l + "\\s*:)")),
            (ot[l.toString()] = x));
          r = x.test(p);
        }
      } else r = !1;
      r || (e && !/;$/.test(e) && (e += ";"), (e += l + ":.CLIENT"), qt(c, e));
      var y = mt(c, l);
      y ? y.push(a) : (c.__wiz[l.toString()] = [a]);
    }
  } finally {
    h && !h.done && (k = g.return) && k.call(g);
  }
  return { et: f, qb: a, el: c };
}
function qt(a, c) {
  a.setAttribute("jsaction", c);
  "__jsaction" in a && delete a.__jsaction;
}
function rt(a) {
  T.call(this);
  this.o = a;
}
Xa(rt, T);
rt.prototype.j = function (a) {
  return st(this, a);
};
function tt(a, c) {
  return (c ? "__wrapper_" : "__protected_") + Na(a) + "__";
}
function st(a, c) {
  var e = tt(a, !0);
  c[e] || ((c[e] = ut(a, c))[tt(a, !1)] = c);
  return c[e];
}
function ut(a, c) {
  function e() {
    if (a.La()) return c.apply(this, arguments);
    try {
      return c.apply(this, arguments);
    } catch (f) {
      vt(a, f);
    }
  }
  e[tt(a, !1)] = c;
  return e;
}
function vt(a, c) {
  if (
    !(
      (c &&
        typeof c === "object" &&
        typeof c.message === "string" &&
        c.message.indexOf("Error in protected function: ") == 0) ||
      (typeof c === "string" && c.indexOf("Error in protected function: ") == 0)
    )
  )
    throw (a.o(c), new wt(c));
}
function xt(a) {
  var c = c || K.window || K.globalThis;
  "onunhandledrejection" in c &&
    (c.onunhandledrejection = function (e) {
      vt(a, e && e.reason ? e.reason : Error("ob"));
    });
}
function yt(a, c) {
  var e = K.window || K.globalThis,
    f = e[c];
  if (!f) throw Error("pb`" + c);
  e[c] = function (g, h) {
    typeof g === "string" && (g = Ta(Ua, g));
    g && (arguments[0] = g = st(a, g));
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
  e[c][tt(a, !1)] = f;
}
rt.prototype.N = function () {
  var a = K.window || K.globalThis;
  var c = a.setTimeout;
  c = c[tt(this, !1)] || c;
  a.setTimeout = c;
  c = a.setInterval;
  c = c[tt(this, !1)] || c;
  a.setInterval = c;
  rt.pa.N.call(this);
};
function wt(a) {
  Ya.call(
    this,
    "Error in protected function: " + (a && a.message ? String(a.message) : String(a)),
    a,
  );
  (a = a && a.stack) && typeof a === "string" && (this.stack = a);
}
Xa(wt, Ya);
function zt() {}
function At(a) {
  this.B = a.Ke || null;
  this.v = a.Qf || !1;
  this.A = a.Rf || !1;
  if (this.v && this.A) throw Error();
  this.j = void 0;
}
Xa(At, zt);
At.prototype.o = function () {
  var a = new Bt(this.B, this.v, this.A);
  this.j && (a.H = this.j);
  return a;
};
function Bt(a, c, e) {
  er.call(this);
  this.Y = a;
  this.I = c;
  this.O = e || !1;
  this.H = void 0;
  this.status = this.readyState = 0;
  this.responseType = this.A = this.o = this.statusText = "";
  this.onreadystatechange = null;
  this.R = new Headers();
  this.C = null;
  this.V = "GET";
  this.U = "";
  this.j = !1;
  this.S = this.D = this.K = null;
  this.M = new AbortController();
  this.B = void 0;
}
Xa(Bt, er);
C = Bt.prototype;
C.open = function (a, c) {
  if (this.readyState != 0) throw (this.abort(), Error("qb"));
  this.V = a;
  this.U = c;
  this.readyState = 1;
  Ct(this);
};
C.send = function (a) {
  if (this.readyState != 1) throw (this.abort(), Error("rb"));
  var c,
    e = ((c = this.B) == null ? 0 : c.signal)
      ? AbortSignal.any([this.B.signal, this.M.signal])
      : this.M.signal;
  if (e.aborted) throw (this.abort(), Error("sb"));
  this.j = !0;
  var f, g, h, k;
  c = Object.assign({}, this.B, {
    headers: this.R,
    method: this.V,
    credentials: (h = (f = this.B) == null ? void 0 : f.credentials) != null ? h : this.H,
    cache: (k = (g = this.B) == null ? void 0 : g.cache) != null ? k : void 0,
    signal: e,
  });
  a && (c.body = a);
  (this.Y || K).fetch(new Request(this.U, c)).then(this.me.bind(this), this.xb.bind(this));
};
C.abort = function () {
  this.o = this.I || this.O ? [] : "";
  this.A = "";
  this.R = new Headers();
  this.status = 0;
  this.M.abort("Request was aborted.");
  this.D && this.D.cancel("Request was aborted.").catch(A(null));
  this.readyState >= 1 && this.j && this.readyState != 4 && ((this.j = !1), Dt(this));
  this.readyState = 0;
};
C.me = function (a) {
  if (
    this.j &&
    ((this.K = a),
    this.C ||
      ((this.status = this.K.status),
      (this.statusText = this.K.statusText),
      (this.C = a.headers),
      (this.readyState = 2),
      Ct(this)),
    this.j && ((this.readyState = 3), Ct(this), this.j))
  )
    if (this.responseType === "arraybuffer")
      a.arrayBuffer().then(this.ke.bind(this), this.xb.bind(this));
    else if (a.body && K.ReadableStream) {
      this.D = a.body.getReader();
      if (this.I || this.O) {
        if (this.responseType) throw Error("tb");
        this.o = [];
      } else this.o = this.A = "";
      this.I || (this.S = new TextDecoder());
      Et(this);
    } else a.text().then(this.le.bind(this), this.xb.bind(this));
};
function Et(a) {
  a.D.read().then(a.ie.bind(a)).catch(a.xb.bind(a));
}
C.ie = function (a) {
  if (this.j) {
    var c = a.value;
    if (this.I) a.value && this.o.push(c || new Uint8Array(0));
    else if ((c = c ? this.S.decode(c, { stream: !a.done }) : ""))
      this.O ? this.o.push(c) : (this.o = this.A += c);
    a.done ? Dt(this) : Ct(this);
    this.readyState == 3 && Et(this);
  }
};
C.le = function (a) {
  this.j && ((this.o = this.A = a), Dt(this));
};
C.ke = function (a) {
  this.j && ((this.o = a), Dt(this));
};
C.xb = function () {
  this.j && Dt(this);
};
function Dt(a) {
  a.readyState = 4;
  a.K = null;
  a.D = null;
  a.S = null;
  Ct(a);
}
C.setRequestHeader = function (a, c) {
  this.R.append(a, c);
};
C.getResponseHeader = function (a) {
  return this.C ? this.C.get(a.toLowerCase()) || "" : "";
};
C.getAllResponseHeaders = function () {
  if (!this.C) return "";
  for (var a = [], c = this.C.entries(), e = c.next(); !e.done; )
    ((e = e.value), a.push(e[0] + ": " + e[1]), (e = c.next()));
  return a.join("\r\n");
};
function Ct(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(Bt.prototype, "withCredentials", {
  get: function () {
    return this.H === "include";
  },
  set: function (a) {
    this.H = a ? "include" : "same-origin";
  },
});
var Ft;
function Gt() {}
Xa(Gt, zt);
Gt.prototype.o = function () {
  return new XMLHttpRequest();
};
Ft = new Gt();
function Ht(a) {
  er.call(this);
  this.headers = new Map();
  this.S = a || null;
  this.o = !1;
  this.j = null;
  this.K = "";
  this.C = 0;
  this.A = this.I = this.D = this.H = !1;
  this.M = 0;
  this.B = null;
  this.R = "";
  this.O = !1;
}
Xa(Ht, er);
var It = /^https?$/i,
  Jt = ["POST", "PUT"],
  Kt = [];
C = Ht.prototype;
C.Td = function () {
  this.dispose();
  Bb(Kt, this);
};
C.send = function (a, c, e, f) {
  if (this.j) throw Error("ub`" + this.K + "`" + a);
  if (typeof c === "string") var g = c;
  else if (c) {
    var h = c;
    g = h.method;
    e != null || (e = h.body);
    f != null || (f = h.headers);
  }
  g = g ? g.toUpperCase() : "GET";
  this.K = a;
  this.C = 0;
  this.H = !1;
  this.o = !0;
  this.j = this.S ? this.S.o() : Ft.o();
  this.j.onreadystatechange = yi(Sa(this.Id, this));
  try {
    ((this.I = !0), this.j.open(g, String(a), !0), (this.I = !1));
  } catch (z) {
    Lt(this);
    return;
  }
  a = e || "";
  c = new Map(this.headers);
  if (f)
    if (Object.getPrototypeOf(f) === Object.prototype) for (var k in f) c.set(k, f[k]);
    else if (typeof f.keys === "function" && typeof f.get === "function") {
      k = G(f.keys());
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
    } else throw Error("vb`" + String(f));
  f = Array.from(c.keys()).find(function (z) {
    return "content-type" == z.toLowerCase();
  });
  l = K.FormData && a instanceof K.FormData;
  !(yb(Jt, g) >= 0) ||
    f ||
    l ||
    c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  g = G(c);
  f = g.next();
  var q;
  try {
    for (; !f.done; f = g.next()) {
      var r = G(f.value),
        x = r.next().value,
        y = r.next().value;
      this.j.setRequestHeader(x, y);
    }
  } finally {
    f && !f.done && (q = g.return) && q.call(g);
  }
  this.R && (this.j.responseType = this.R);
  "withCredentials" in this.j &&
    this.j.withCredentials !== this.O &&
    (this.j.withCredentials = this.O);
  h && this.j instanceof Bt && (this.j.B = h);
  try {
    (this.B && (clearTimeout(this.B), (this.B = null)),
      this.M > 0 && (this.B = setTimeout(this.Ld.bind(this), this.M)),
      (this.D = !0),
      this.j.send(a),
      (this.D = !1));
  } catch (z) {
    Lt(this);
  }
};
C.Ld = function () {
  typeof Ga != "undefined" &&
    this.j &&
    ((this.C = 8), this.dispatchEvent("timeout"), this.abort(8));
};
function Lt(a) {
  a.o = !1;
  a.j && ((a.A = !0), a.j.abort(), (a.A = !1));
  a.C = 5;
  Mt(a);
  Nt(a);
}
function Mt(a) {
  a.H || ((a.H = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
C.abort = function (a) {
  this.j &&
    this.o &&
    ((this.o = !1),
    (this.A = !0),
    this.j.abort(),
    (this.A = !1),
    (this.C = a || 7),
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    Nt(this));
};
C.N = function () {
  this.j && (this.o && ((this.o = !1), (this.A = !0), this.j.abort(), (this.A = !1)), Nt(this, !0));
  Ht.pa.N.call(this);
};
C.Id = function () {
  this.La() || (this.I || this.D || this.A ? Ot(this) : this.Tc());
};
C.Tc = function () {
  Ot(this);
};
function Ot(a) {
  if (a.o && typeof Ga != "undefined")
    if (a.D && (a.j ? a.j.readyState : 0) == 4) setTimeout(a.Id.bind(a), 0);
    else if ((a.dispatchEvent("readystatechange"), (a.j ? a.j.readyState : 0) == 4)) {
      a.o = !1;
      try {
        xr(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : ((a.C = 6), Mt(a));
      } finally {
        Nt(a);
      }
    }
}
function Nt(a, c) {
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
C.isActive = function () {
  return !!this.j;
};
function xr(a) {
  var c = wr(a);
  a: switch (c) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      var e = !0;
      break a;
    default:
      e = !1;
  }
  if (!e) {
    if ((c = c === 0))
      ((a = String(a.K).match(Mk)[1] || null),
        !a && K.self && K.self.location && (a = K.self.location.protocol.slice(0, -1)),
        (c = !It.test(a ? a.toLowerCase() : "")));
    e = c;
  }
  return e;
}
function wr(a) {
  try {
    return (a.j ? a.j.readyState : 0) > 2 ? a.j.status : -1;
  } catch (c) {
    return -1;
  }
}
Ei(function (a) {
  Ht.prototype.Tc = a(Ht.prototype.Tc);
});
function Pt(a, c, e) {
  er.call(this);
  this.B = c || null;
  this.A = {};
  this.C = Qt;
  this.H = a;
  if (!e) {
    this.j = null;
    this.j = new rt(Sa(this.o, this));
    yt(this.j, "setTimeout");
    yt(this.j, "setInterval");
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
      e[f] in c && yt(a, g);
    }
    a = this.j;
    Di = !0;
    c = Sa(a.j, a);
    for (e = 0; e < Bi.length; e++) Bi[e](c);
    Ci.push(a);
  }
}
Xa(Pt, er);
function Rt(a, c) {
  Cq.call(this, "c");
  this.error = a;
  this.Da = c;
}
Xa(Rt, Cq);
function St(a, c) {
  return new Pt(a, c, void 0);
}
function Qt(a, c, e, f) {
  if (f instanceof Map) {
    var g = {};
    f = G(f);
    var h = f.next(),
      k;
    try {
      for (; !h.done; h = f.next()) {
        var l = G(h.value),
          p = l.next().value,
          q = l.next().value;
        g[p] = q;
      }
    } finally {
      h && !h.done && (k = f.return) && k.call(f);
    }
  } else g = f;
  k = new Ht();
  Kt.push(k);
  k.v.add("ready", k.Td, !0, void 0, void 0);
  k.send(a, c, e, g);
}
function Tt(a, c) {
  a.C = c;
}
Pt.prototype.o = function (a, c) {
  a = a.error || a;
  c = c ? bq(c) : {};
  a instanceof Error && dq(c, lc(a));
  var e = Bk(a);
  if (this.B)
    try {
      this.B(e, c, a);
    } catch (r) {}
  var f = e.message.substring(0, 1900);
  if (!(a instanceof Ya) || a.j) {
    var g = e.fileName,
      h = e.lineNumber;
    a = e.stack;
    try {
      var k = Tk(this.H, "script", g, "error", f, "line", h);
      if (!aq(this.A)) {
        f = k;
        var l = Sk(this.A);
        k = Pk(f, l);
      }
      l = {};
      l.trace = a;
      if (c) for (var p in c) l["context." + p] = c[p];
      var q = Sk(l);
      this.C(k, "POST", q, this.D);
    } catch (r) {}
  }
  try {
    this.dispatchEvent(new Rt(e, c));
  } catch (r) {}
};
Pt.prototype.N = function () {
  al(this.j);
  Pt.pa.N.call(this);
};
function Ut(a) {
  a = a === void 0 ? new Vt() : a;
  er.call(this);
  var c = this;
  this.H = {};
  this.j = null;
  this.o = {};
  this.M = new nr(this);
  this.Ka = a.C;
  this.R = a.I;
  this.oa = a.H;
  this.Ja = a.F;
  this.va = a.K;
  var e = a.ja;
  this.ia = (a.A || et)({ De: Dr, ye: Er, qc: [new gt()] });
  this.Ia = a.M;
  this.S = new Aq();
  var f = a.o ? a.o.create(this, void 0, a.j, void 0) : null,
    g = new Ht();
  Wt(this, e);
  this.C = f || new yr(g, e, void 0, a.j, void 0);
  cl(this, this.C);
  this.A = Cl(e, "docs-sup") + Cl(e, "docs-jepp") + "/jserror";
  if ((f = Cl(e, "jobset"))) this.A = Tk(this.A, "jobset", f);
  if ((f = Cl(e, "docs-ci"))) this.A = Tk(this.A, "id", f);
  f = Cl(e, "docs-pid");
  U(e, "docs-eaotx") && f && (this.A = Tk(this.A, "ouid", f));
  this.Y = Bl(e, "docs-srmoe") || 0;
  this.Fa = U(e, "docs-oesf");
  this.ca = Bl(e, "docs-srmour") || 0;
  this.Ga = U(e, "docs-oursf");
  f = a.B || (this.ca > 0 && Math.random() < this.ca);
  this.Ea = U(e, "docs-wesf");
  Xt(this);
  pj = function (l) {
    return Yt(c, l, "promise rejection");
  };
  g = Bl(e, "docs-srmdue") || 0;
  if (g > 0 && Math.random() < g) {
    var h = U(e, "docs-duesf");
    wj = function (l) {
      Yt(c, l, "deferred error", h, "isDeferredUnhandledErrback");
    };
  } else wj = u();
  g = Bl(e, "docs-srmxue") || 0;
  g = g > 0 && Math.random() < g;
  var k = U(e, "docs-xduesf");
  g &&
    vk(function (l) {
      if (l) {
        var p = {};
        p = ((p.isXDeferredUnhandledErrback = "true"), p);
        k ? Zt(c, l, p) : c.info(l, p);
      }
    });
  f &&
    ((f = new rt(function (l) {
      l = $t(l, "native promise rejection");
      var p = {};
      p = ((p.isUnhandledRejection = "true"), p);
      c.Ga ? Zt(c, l, p) : c.info(l, p);
    })),
    xt(f),
    cl(this, f));
  this.K = null;
  typeof document !== "undefined" &&
    document.body &&
    (this.K = pt(function (l) {
      var p = {};
      p = ((p.isWizError = "true"), p);
      l = G(l.data.errors);
      var q = l.next(),
        r;
      try {
        for (; !q.done; q = l.next()) {
          var x = q.value.error;
          c.Ea ? Zt(c, x, p) : c.info(x, p);
        }
      } finally {
        q && !q.done && (r = l.return) && r.call(l);
      }
    }));
  this.O = a.v;
  this.D = !1;
  this.I = !0;
  this.B = !1;
  this.U = Cl(e, "docs-jern");
  this.na = a.L;
  this.ha = a.D.concat(Object.values(Xl));
}
F(Ut, er);
function Xt(a) {
  var c = c === void 0 ? !1 : c;
  if (au) {
    if (bu != null) throw Error("wb`" + bu.stack);
    throw Error("xb");
  }
  au = !0;
  bu = Error();
  a.j = St(a.A, function (g, h, k) {
    return cu(a, g, h, k);
  });
  var e = {};
  a.oa && (e["X-No-Abort"] = "1");
  a.j.D = e;
  Tt(a.j, function (g, h, k, l) {
    a.I && a.C.send(g, h, k, l);
  });
  if (a.Y > 0 && Math.random() < a.Y) {
    e = {};
    var f = ((e.isWindowOnError = "true"), e);
    a.Fa
      ? Ak(function (g) {
          Zt(a, g.error instanceof Error ? g.error : Error(g.message), f);
        })
      : Ak(function (g) {
          a.log(g.error instanceof Error ? g.error : Error(g.message), f);
        });
  }
  pr(a.M, a.j, "c", function (g) {
    var h = c;
    h = h === void 0 ? !1 : h;
    g.Da.severity = g.Da["severity-unprefixed"] || g.Da.severity;
    var k = g.Da.severity;
    (k = k == "fatal" || k == "postmortem") &&
      !a.Ja &&
      (a.Ka && !h ? a.S.notify(g, g.Da) : a.S.notify(void 0, g.Da));
    a.dispatchEvent(new $q(k ? "a" : "b", g.error, g.Da));
  });
}
function Wt(a, c) {
  c = new Br(c);
  var e = c.j,
    f;
  for (f in e) {
    var g = e[f];
    g && (a.o["expflag-" + f] = g.toString());
  }
  a.o.experimentIds = c.o.join(",");
}
function du(a, c) {
  a.H.errorReportTimeMs = c;
}
function Zt(a, c, e, f) {
  a.B = f || !1;
  eu(c, "fatal");
  if (!a.j) {
    if (c instanceof Hj) throw c.J;
    throw Hk(c);
  }
  a.j.o(c, fu(a, c, e));
  if (a.va)
    throw (
      (e = fu(a, c, e)),
      (e.is_forceFatal = 1),
      (f = c instanceof Hj ? c.J : c),
      cu(a, f, e),
      (c = Hk(f)),
      (a = ", context:" + JSON.stringify(fu(a, f, e))),
      (c.message += a),
      c
    );
}
function gu(a, c, e, f) {
  a.B = f || !1;
  eu(c, "warning");
  a.j && a.j.o(c, fu(a, c, e));
}
Ut.prototype.info = function (a, c, e) {
  this.B = e || !1;
  eu(a, "incident");
  this.j && this.j.o(a, fu(this, a, c));
};
Ut.prototype.log = function (a, c, e) {
  this.B = !!e;
  eu(a, "incident");
  this.j && this.j.o(a, fu(this, a, c));
};
function $t(a, c) {
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
    c = Error("yb`" + c + "`" + a);
  } else
    c =
      typeof a === "string"
        ? Error("zb`" + c + "`" + a)
        : typeof a === "number"
          ? Error("Ab`" + c + "`" + a)
          : a == null
            ? Error("Bb`" + c)
            : a;
  return c;
}
function Yt(a, c, e, f, g) {
  f = f === void 0 ? !0 : f;
  c = $t(c, e);
  e = {};
  g && (e[g] = "true");
  f ? $a(c) : a.info(c, e);
}
function hu(a, c, e, f) {
  return function () {
    a: {
      var g = !!f,
        h = Ca.apply(0, arguments);
      if (a.j) {
        try {
          var k = c.apply(e, h);
          break a;
        } catch (l) {
          if ((Zt(a, l), g)) throw Hk(l);
        }
        k = void 0;
      } else k = c.apply(e, h);
    }
    return k;
  };
}
function iu(a, c) {
  a.j &&
    c.then(void 0, function (e) {
      Zt(a, e instanceof Error ? e : Error(e));
    });
  return c;
}
function fu(a, c, e) {
  c instanceof Hj && (c = c.J);
  e = e ? bq(e) : {};
  e.severity = lc(c).severity;
  (c = c && c.reportSeverity) && (e.reportSeverity = c);
  a.R && (e.errorGroupId = a.R);
  return e;
}
function ju(a, c) {
  if (
    a &&
    typeof a === "object" &&
    !a.message &&
    a.constructor &&
    a.constructor instanceof Function &&
    (a.constructor.name ? a.constructor.name : Dk(a.constructor)) === "Object"
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
function cu(a, c, e, f) {
  var g = a.D;
  try {
    a.V(c, e, f);
  } catch (k) {
    throw (
      g && !a.O && (a.I = !1),
      (a.D = !0),
      (e.provideLogDataError = k.message),
      e.severity || (e.severity = "fatal"),
      Hk(k)
    );
  } finally {
    if (
      ((e["severity-unprefixed"] = e.severity || "fatal"),
      (e.severity = "" + e["severity-unprefixed"]),
      !a.na)
    )
      for (var h in e)
        typeof e[h] === "number" ||
          e[h] instanceof Number ||
          typeof e[h] === "boolean" ||
          e[h] instanceof Boolean ||
          a.ha.includes(h) ||
          (h in e && delete e[h]);
  }
}
Ut.prototype.V = function (a, c, e) {
  ju(e || a, c);
  for (var f in this.H)
    try {
      c[f] = this.H[f](a);
    } catch (h) {}
  c.errorReportTimeMs || (c.errorReportTimeMs = Date.now().toString());
  Object.assign(c, this.o);
  e = c.severity || "fatal";
  (f = c.reportSeverity || (a && a.reportSeverity)) && (f = ku(f.toLowerCase())) && (e = f);
  this.Ia || (e = Vs(this.ia, a, e, c));
  this.U && (c.reportName = this.U + "_" + e);
  c.isArrayPrototypeIntact = Cr().toString();
  if (!("WorkerGlobalScope" in K && self instanceof K.WorkerGlobalScope)) {
    try {
      var g = !!document.getElementById("docs-editor");
    } catch (h) {
      g = !1;
    }
    c.isEditorElementAttached = g.toString();
  }
  c.documentCharacterSet = document.characterSet;
  c.origin = String(K.origin);
  g = a.stack || "";
  if (g.trim().length == 0 || g == "Not available")
    ((c["stacklessError-reportingStack"] = Gk(Ut.prototype.V)),
      [a.message].concat(oa(Object.keys(c)), oa(Object.values(c))).some(function (h) {
        return h && h.includes("<eye3");
      }) || (c.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>"));
  this.D && !this.O
    ? ((this.I = this.B),
      e == "fatal" ? (e = "postmortem") : e == "incident" && (e = "warningafterdeath"))
    : e == "fatal" && (this.D = !0);
  this.B = !1;
  c.severity = e;
};
Ut.prototype.N = function () {
  au = !1;
  if (this.K) {
    var a = this.K,
      c = G(a.et),
      e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next()) {
        var g = e.value,
          h = mt(a.el, g);
        if (h && (Bb(h, a.qb), !h.length)) {
          var k = a.el,
            l = bb(k.getAttribute("jsaction") || ""),
            p = g + ":.CLIENT";
          l = l.replace(p + ";", "");
          l = l.replace(p, "");
          qt(k, l);
        }
      }
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  }
  bl(this.M, this.j, this.C);
  er.prototype.N.call(this);
};
var au = !1,
  bu = null;
function Vt() {
  this.I = this.ja = void 0;
  this.F = this.K = this.C = !1;
  this.o = void 0;
  this.H = this.v = !1;
  this.L = !0;
  this.D = [];
  this.B = !1;
  this.j = void 0;
  this.M = !1;
  this.A = void 0;
}
function lu(a, c) {
  a.ja = c;
  return a;
}
function mu(a) {
  a.A = nu;
  return a;
}
function ou(a) {
  var c = new Vt();
  c.C = !1;
  c.F = !0;
  c.o = a;
  return c;
}
function pu(a, c) {
  a.v = c;
  return a;
}
function qu(a, c) {
  a.B = c;
  return a;
}
function eu(a, c) {
  a instanceof Hj && (a = a.J);
  kc(a, "severity", c);
}
function ku(a) {
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
function ru(a, c, e, f, g, h) {
  f = f === void 0 ? {} : f;
  g = g === void 0 ? !1 : g;
  h = h === void 0 ? 0 : h;
  e > Math.floor(Math.random() * 100) &&
    ((f.sampling_samplePercentage = String(e)),
    (f.sampling_sampledBy = "random"),
    h == 0 ? a.info(c, f, g) : h == 1 ? gu(a, c, f, g) : h == 2 && Zt(a, c, f, g));
}
function su(a, c, e, f) {
  this.j = a;
  this.o = c;
  this.v = e;
  this.A = f;
}
function tu(a) {
  var c = vb() >= 75,
    e = vb() >= 96;
  if (!c || e) return a.j;
  if (a.v) return (c = a.v.applicationCache) ? a.j - c + 104857600 : a.j;
  a: switch (Cl(a.A, "jobset")) {
    case "scary":
    case "canary":
      c = 12884901888;
      break a;
    default:
      c = 6442450944;
  }
  return Math.max(a.j - c, 0);
}
function uu(a) {
  return Ia("navigator.storage.estimate")
    ? $i(
        K.navigator.storage.estimate().then(function (c) {
          return new su(c.usage, c.quota - c.usage, c.usageDetails || null, a);
        }),
      )
    : aj();
}
function vu(a, c, e) {
  return $i(uu(a))
    .then(function (f) {
      c.storageAvailable = f.o;
      c.storageUsage = tu(f);
    })
    .catch(function (f) {
      e.info(Error("Db`" + (f instanceof Error ? f.message : String(f))));
    });
}
function wu(a) {
  var c = a.target.error,
    e = c && c.name;
  c = (c && c.message) || a.target.webkitErrorMessage;
  a.target.docs_internalAbort && (c = "Internal abort: " + c);
  return e + " (" + c + ")";
}
function xu(a) {
  for (var c = [], e = 0; e < a.length; e++) c.push(a.item(e));
  return c.toString();
}
function yu(a, c) {
  if (zu(c))
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
function Au(a, c, e) {
  return zu(c)
    ? Promise.resolve(uu(e))
        .then(function (f) {
          a.storageAvailable = f.o;
          a.storageUsage = tu(f);
        })
        .catch(A(null))
    : Promise.resolve();
}
function zu(a) {
  return (
    a &&
    (a.includes("Connection is closing.") ||
      a.includes("The database connection is closing.") ||
      a.includes("Connection is closing because of"))
  );
}
function Bu(a, c, e, f, g, h) {
  qj.call(this, g, h);
  this.H = a;
  this.L = [];
  this.M = !!c;
  this.U = !!e;
  this.V = !!f;
  for (c = this.P = 0; c < a.length; c++)
    yj(a[c], Sa(this.O, this, c, !0), Sa(this.O, this, c, !1));
  a.length != 0 || this.M || this.ma(this.L);
}
Xa(Bu, qj);
Bu.prototype.O = function (a, c, e) {
  this.P++;
  this.L[a] = [c, e];
  this.j ||
    (this.M && c
      ? this.ma([a, e])
      : this.U && !c
        ? this.bb(e)
        : this.P == this.H.length && this.ma(this.L));
  this.V && !c && (e = null);
  return e;
};
Bu.prototype.bb = function (a) {
  Bu.pa.bb.call(this, a);
  for (a = 0; a < this.H.length; a++) this.H[a].cancel();
};
function Cu(a, c, e, f, g, h, k, l, p) {
  rr.call(this, f, g, k, void 0, l, p);
  this.K = c;
  this.B = c + "-f";
  this.v = c + "-n";
  this.D = e;
  this.M = a;
  this.j = null;
  this.U = h || K.indexedDB || K.webkitIndexedDB;
  this.C = null;
  Du(this);
}
F(Cu, rr);
function Du(a) {
  var c = a.U.open("DocsErrors", 1);
  c.onsuccess = function (e) {
    return void Eu(a, e);
  };
  c.onupgradeneeded = function (e) {
    e.target.transaction.db.createObjectStore("Errors", { keyPath: "key" });
  };
  c.onerror = function (e) {
    Fu(a);
    gu(a.M, Error("Fb`" + wu(e)));
  };
  c.onblocked = function (e) {
    Fu(a);
    gu(a.M, Error("Eb`" + wu(e)));
  };
}
function Eu(a, c) {
  var e = c.target.result,
    f = Gu(e, "readwrite");
  xj(
    new Bu([Hu(a.B, f), Hu(a.v, f)]),
    function (g) {
      g[0][1] == null || g[1][1] == null
        ? ((g = f.objectStore("Errors")),
          g.put({ key: this.B, value: "1" }),
          g.put({ key: this.v, value: "1" }),
          (f.oncomplete = Sa(this.vd, this, e)))
        : this.vd(e);
    },
    a,
  );
}
C = Cu.prototype;
C.vd = function (a) {
  this.j = a;
  this.Xa();
};
C.ob = function (a) {
  if (!this.j) return this.D.ob(a);
  if (!K.navigator.locks) return a();
  this.C || (this.C = new AbortController());
  return Bq("idb-es-send-lock-" + this.K, a, this.C);
};
C.fb = function (a) {
  if (!this.j) return this.D.fb(a);
  var c = Gu(this.j, "readwrite"),
    e = new qj();
  xj(
    Hu(this.v, c),
    function (f) {
      if (f) {
        var g = c.objectStore("Errors");
        g.put({ key: this.v, value: String(f + 1) });
        g.put({ key: this.K + "-e-" + f, value: JSON.stringify(a) });
        c.oncomplete = Sa(e.ma, e);
      } else e.ma();
    },
    this,
  );
  return e;
};
C.Ha = function () {
  if (!this.j) return this.D.Ha();
  var a = Gu(this.j, "readwrite"),
    c = new qj();
  xj(
    new Bu([Hu(this.B, a), Hu(this.v, a)]),
    function (e) {
      var f = e[0][1];
      e = e[1][1];
      if (!f || e <= f) c.ma();
      else {
        var g = a.objectStore("Errors");
        g["delete"](this.K + "-e-" + f);
        f++;
        g.put({ key: this.B, value: String(f) });
        xj(
          Iu(this, a),
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
C.Ta = function () {
  if (!this.j) return this.D.Ta();
  var a = Gu(this.j, "readonly");
  return xj(
    new Bu([Hu(this.B, a), Hu(this.v, a)]),
    function (c) {
      var e = c[0][1],
        f = c[1][1];
      if (!e) return null;
      var g = f - e;
      return g < 1
        ? null
        : xj(
            Ju(this.K + "-e-" + e, a),
            function (h) {
              return h && (h = JSON.parse(h))
                ? ((h.errorSender_frontIndex = e),
                  (h.errorSender_nextIndex = f),
                  (h.errorSender_queueSize = g),
                  h)
                : xj(this.Ha(), this.Ta, this);
            },
            this,
          );
    },
    this,
  );
};
C.Ua = function () {
  if (!this.j) return this.D.Ua();
  var a = Gu(this.j, "readonly");
  return Iu(this, a);
};
function Fu(a) {
  a.j && (a.j.close(), (a.j = null));
}
function Iu(a, c) {
  return xj(new Bu([Hu(a.B, c), Hu(a.v, c)]), function (e) {
    return e[1][1] - e[0][1];
  });
}
function Hu(a, c) {
  return xj(Ju(a, c), function (e) {
    e = parseInt(e, 10);
    return e < 0 || isNaN(e) ? null : e;
  });
}
function Ju(a, c) {
  c = c.objectStore("Errors");
  var e = new qj();
  c.get(a).onsuccess = function (f) {
    f.target.result ? e.ma(f.target.result.value) : e.ma(null);
  };
  return e;
}
function Gu(a, c) {
  var e = ["Errors"];
  try {
    return a.transaction(e, c);
  } catch (f) {
    throw (
      (c = xu(a.objectStoreNames)),
      Hk(f, {
        databaseName: a.name,
        databaseObjectStores: c,
        databaseVersion: a.version.toString(),
        transactionObjectStores: e.toString(),
      })
    );
  }
}
C.sb = A("IdbErrorSender");
C.N = function () {
  this.C && this.C.abort();
  Fu(this);
  rr.prototype.N.call(this);
};
function Ku(a) {
  try {
    var c = a.get("docs-lfuls"),
      e = K.localStorage;
    if (
      e &&
      (c || Kb || Lb) &&
      (e.setItem("test", "test"),
      e.getItem("test") == "test" && (e.removeItem("test"), e.getItem("test") == null))
    )
      return !0;
  } catch (f) {}
  return !1;
}
function Lu() {
  T.call(this);
  this.j = {};
}
F(Lu, T);
Lu.prototype.Qa = function (a, c, e) {
  var f = this;
  if (typeof a === "function") e && (a = Sa(a, e));
  else if (a && typeof a.handleEvent == "function") a = Sa(a.handleEvent, a);
  else throw Error("ib");
  var g = new Mu();
  c = hr(function () {
    var h = a,
      k = g.X();
    k !== null && delete f.j[k];
    h();
  }, c);
  this.j[c] = !0;
  return (g.j = c);
};
Lu.prototype.clear = function (a) {
  a !== null && delete this.j[a];
  K.clearTimeout(a);
};
Lu.prototype.N = function () {
  for (var a in this.j) this.clear(Number(a));
  T.prototype.N.call(this);
};
function Mu() {
  this.j = null;
}
Mu.prototype.X = w("j");
function Nu(a, c, e, f, g, h, k, l) {
  rr.call(this, a, e, f, g, h, k, l === void 0 ? !0 : l);
  var p = this;
  this.M = c || "default";
  this.K = c + "-v";
  this.D = c + "-f";
  this.v = c + "-n";
  this.j = K.localStorage;
  Ku(e);
  a = Ou(this, this.K);
  if (!a || a < 1)
    (this.j.setItem(this.K, "1"), this.j.setItem(this.D, "1"), this.j.setItem(this.v, "1"));
  this.U = !1;
  this.C = this.B = null;
  pr(
    pr(this.O, K.window, "beforeprint", function () {
      return Pu(p);
    }),
    K.window,
    "afterprint",
    function () {
      p.U = !1;
      p.B && (p.B.ma(), (p.B = null));
    },
  );
  this.Xa();
  this.ga = new Lu();
  cl(this, this.ga);
  this.ga.Qa(this.Ud, 3e4, this);
}
F(Nu, rr);
function Pu(a) {
  a.U = !0;
  a.C && (a.C.abort(), (a.C = null));
  a.B = new qj();
  xj(a.B, function () {
    return a.Xa();
  });
}
C = Nu.prototype;
C.ob = function (a) {
  var c = this;
  if (!K.navigator.locks) return a();
  if (this.U) return this.B;
  this.C || (this.C = new AbortController());
  return Bq("lses-send-lock-" + (this.M + "-e-"), a, this.C, function () {
    return c.B || Fj();
  });
};
C.fb = function (a) {
  var c = Ou(this, this.v);
  if (!c || Ou(this, this.K) != 1) return Fj();
  try {
    (this.j.setItem(this.v, String(c + 1)), this.j.setItem(this.M + "-e-" + c, JSON.stringify(a)));
  } catch (e) {}
  return Fj();
};
C.Ha = function () {
  var a = Ou(this, this.D);
  if (!a || Ou(this, this.K) != 1) return Fj();
  this.j.removeItem(this.M + "-e-" + a);
  a++;
  this.j.setItem(this.D, String(a));
  return xj(
    this.Ua(),
    function (c) {
      c == 0 && (this.j.setItem(this.D, "1"), this.j.setItem(this.v, "1"));
    },
    this,
  );
};
C.Ta = function () {
  var a = Ou(this, this.D);
  return a && Ou(this, this.K) == 1
    ? xj(
        this.Ua(),
        function (c) {
          if (c < 1) return null;
          try {
            var e = this.j.getItem(this.M + "-e-" + a);
            if (e) {
              var f = JSON.parse(e);
              if (f)
                return (
                  (f.errorSender_frontIndex = a),
                  (f.errorSender_nextIndex = Ou(this, this.v)),
                  (f.errorSender_queueSize = c),
                  f
                );
            }
          } catch (g) {}
          return xj(this.Ha(), this.Ta, this);
        },
        this,
      )
    : Fj(null);
};
C.Ua = function () {
  return Fj(Ou(this, this.v) - Ou(this, this.D));
};
function Ou(a, c) {
  return (a = a.j.getItem(c)) ? Qu(a) : null;
}
function Qu(a) {
  a = parseInt(a, 10);
  return a < 0 || isNaN(a) ? null : a;
}
C.Ud = function () {
  if (Ou(this, this.v) && Ou(this, this.K) == 1)
    for (var a = this.M + "-e-", c = 0, e = this.j.length; c < e; ++c) {
      var f = this.j.key(c);
      if (f && ab(f, a)) {
        var g = Qu(f.substring(a.length)),
          h = Ou(this, this.v);
        h && g && g >= h && this.j.removeItem(f);
      }
    }
};
C.sb = A("LocalStorageErrorSender");
C.N = function () {
  rr.prototype.N.call(this);
};
function Ru(a, c) {
  this.o = a;
  this.j = c;
}
Ru.prototype.create = function (a, c, e, f) {
  return Ku(this.j) ? new Nu(new Ht(), this.o, this.j, c, void 0, e, f) : null;
};
function Su(a, c) {
  this.o = a;
  this.j = c;
}
Su.prototype.create = function (a, c, e, f) {
  var g = new Ru(this.o, this.j).create(a, c, e, f) || new yr(new Ht(), this.j, c, e, f),
    h = U(this.j, "docs-offline-edose");
  return (Kb || h) && (K.indexedDB || K.webkitIndexedDB)
    ? new Cu(a, this.o, g, new Ht(), this.j, void 0, c, e, f)
    : g;
};
function Tu(a) {
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
function Uu(a) {
  Ya.call(this);
  this.o = a;
}
F(Uu, Ya);
function Vu(a) {
  var c = c === void 0 ? 3e4 : c;
  this.B = a;
  this.j = this.A = this.v = 0;
  this.o = c;
  for (a = Wu; a < this.o; ) a *= 2;
  this.F = a;
}
function Xu(a, c) {
  if (U(a.B, "docs-irbfes"))
    if (a.j !== 0 && c !== 2)
      if (c === 1) c = a.v < 4 ? Wu : a.j < a.o ? a.j * 2 : a.F;
      else if (c === 3) c = a.j < Math.max(a.o, 18e4) ? a.j * 2 : a.j;
      else throw Error("Hb");
    else c = Wu;
  else {
    var e = c != 2 && !(a.v < 4);
    c = Wu;
    e && a.j != 0 && (c = a.j < a.o ? a.j * 2 : a.j);
  }
  a.j = c;
  return Math.max(0, c - (Date.now() - a.A));
}
var Wu = 5e3 * (0.75 + Math.random() * 0.5);
function Yu(a) {
  this.G = M(a);
}
F(Yu, Q);
function Zu(a) {
  this.G = M(a);
}
F(Zu, Q);
function $u(a) {
  this.G = M(a, 4);
}
F($u, Q);
function av(a) {
  this.G = M(a, 37);
}
F(av, Q);
function bv(a, c) {
  return tf(a, 8, c);
}
function cv() {
  var a = dv,
    c = ev;
  this.o = fv;
  this.j = a;
  this.v = c || null;
  a = this.o;
  c = Bl(this.j, "docs-clibs");
  a.M = c;
  this.o.Za = 2e4;
}
function gv(a, c) {
  if (U(a.j, "docs-ecir")) return hv(a, c, new Vu(a.j));
  c = bv(new av(), $f(c));
  iv(a.o, c);
  return new Vi(function (e, f) {
    jv(a, e, f);
  });
}
function hv(a, c, e) {
  var f = bv(new av(), $f(c));
  iv(a.o, f);
  return new Vi(function (g, h) {
    var k = Date.now();
    e.v++;
    e.A = k;
    jv(a, g, h);
  }).Pa(function (g) {
    if (typeof g === "number" && ((500 <= g && g < 600) || g == 401 || g == 0) && e.v < 4)
      return (
        (g = Xu(e, g === 0 ? 1 : 3)),
        ir(g).then(function () {
          return hv(a, c, e);
        })
      );
    throw kv(g);
  });
}
cv.prototype.zb = function (a, c) {
  var e = Error("Ib`" + a + "`" + c);
  this.v && U(this.j, "docs-ecer") && gu(this.v, e, { failureType: a, errorCode: "" + c });
};
function jv(a, c, e) {
  a.o.flush(c, function (f, g) {
    a.zb(f, g);
    f = U(a.j, "docs-ecir") ? g : kv(g);
    e(f);
  });
}
function kv(a) {
  return typeof a === "number" ? new Uu(!((500 <= a && a < 600) || a == 401 || a == 0)) : a;
}
function lv() {
  this.j = mv;
}
function nv() {
  this.o = new ov();
}
nv.prototype.j = function (a) {
  return this.o.j(a);
};
function ov() {
  var a = new pv();
  this.v = qv;
  this.o = a;
}
ov.prototype.j = function (a) {
  return gv(this.v, a).Pa(function (c) {
    if (!(c instanceof Uu && c.o)) {
      c = ef(a, rv, 1);
      c = G(c);
      var e = c.next(),
        f;
      try {
        for (; !e.done; e = c.next()) {
          var g = e.value;
          if (!Ke(g, vm, 5)) {
            var h = g,
              k = new vm();
            N(h, vm, 5, k);
          }
          var l = cf(g, vm, 5);
          if (!Ke(l, om, 34)) {
            var p = cf(g, vm, 5),
              q = new om();
            N(p, om, 34, q);
          }
          var r = cf(g, vm, 5);
          var x = cf(r, om, 34);
          qf(x, 26, !0);
        }
      } finally {
        e && !e.done && (f = c.return) && f.call(c);
      }
      return sv(this, a);
    }
  }, this);
};
function sv(a, c) {
  return new Vi(function (e, f) {
    a.o.j(c, e, f);
  });
}
function tv(a, c) {
  a: {
    var e = { dd: !0 };
    c && Object.assign(e, c);
    a = Ef(a, void 0, void 0, e);
    try {
      var f = new em(),
        g = f.G;
      qg(fm)(g, a);
      var h = f;
      break a;
    } catch (k) {
      if (k instanceof RangeError) throw new SyntaxError();
      throw k;
    } finally {
      Gf(a);
    }
    h = void 0;
  }
  return h;
}
function uv(a) {
  var c = c === void 0 ? !1 : c;
  this.j = new gq(a);
  this.v = c;
  c = this.j.o;
  var e = c.get("usp"),
    f = c.get("urp"),
    g = c.get("cros_files", ""),
    h = vv(e, this.v);
  a = c.get("dl");
  var k = Kp(this.j.j),
    l = c.get("rtpof", ""),
    p = c.get("pli");
  c = new jm();
  var q = new im();
  N(c, im, 1, q);
  var r = new hm();
  k = qf(r, 3, k);
  N(q, hm, 1, k);
  e && tf(k, 1, e);
  f && tf(k, 2, f);
  h !== null && uf(q, 5, h);
  p === "1" && qf(k, 6, !0);
  qf(k, 7, g == "true");
  qf(k, 4, l == "true");
  e = null;
  if (a)
    try {
      e = tv(Ob(a));
    } catch (x) {
      e = null;
    }
  e && ((a = new gm()), N(c, gm, 2, a), N(a, em, 1, e));
  this.o = c;
}
function vv(a, c) {
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
function wv(a, c, e) {
  this.B = a;
  this.A = "offline";
  this.v = c;
  this.o = e;
}
wv.prototype.j = function (a, c, e) {
  var f = this;
  a = new Zn(null, this.A, Date.now(), oe(a), !0, this.v);
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
          gu(f.o, g, ((h.nonfatalReason = "suspected cache clearing or offline opt-out"), h)),
          c())
        : e(g);
    },
    1337524,
    !0,
  );
};
function pv() {
  var a = dv,
    c = ev;
  this.A = xv;
  this.v = a;
  this.o = c;
}
pv.prototype.j = function (a, c, e) {
  var f = this;
  yv(this.A).then(function (g) {
    g ? new wv(g.j, f.v, f.o).j(a, c, e) : c();
  });
};
function zv(a) {
  this.G = M(a, 1);
}
F(zv, Q);
function Av(a) {
  this.G = M(a, 1);
}
F(Av, Q);
function Bv(a) {
  this.G = M(a);
}
F(Bv, Q);
var Cv = new Cg(113007630, zv, Bv);
function Dv(a) {
  this.G = M(a);
}
F(Dv, Q);
var Ev = new Cg(112987886, Av, Dv);
function Fv(a, c) {
  T.call(this);
  var e = this;
  this.o = c;
  this.j = new cn();
  cl(this, this.j);
  dn(this.j, a.A, function (f) {
    var g = [];
    f = f.j;
    for (var h = 0; h < f.length; h++) {
      var k = f[h];
      switch (k.j.A) {
        case "document":
          var l = new Dv();
          tf(l, 1, k.j.X());
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
                throw Error("Jb`" + p);
            }
          }
          uf(l, 2, p);
          p = [];
          k = k.v;
          $p(k, "ip") && p.push(1);
          $p(k, "pendingQueueState") && p.push(6);
          $p(k, "lastModifiedClientTimestamp") && p.push(2);
          ($p(k, "lsst") || $p(k, "lsft") || $p(k, "lss")) && p.push(3);
          $p(k, "pendingCreation") && p.push(4);
          $p(k, "title") && p.push(5);
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
            B || ((p = sd(p)), (y = 0), (x = Pe(x, r)), (B = !1));
            x |= 5;
            z = 4 & x ? (512 & x ? 512 : 1024 & x ? 1024 : 0) : void 0;
            z = (q = z) != null ? q : 1024;
            x |= z;
            for (z = 0; z < p.length; z++) {
              q = p[z];
              var I = Dd(q);
              Object.is(q, I) ||
                (B && ((p = sd(p)), (y = 0), (x = Pe(x, r)), (B = !1)), (p[z] = I));
            }
            x !== y && (B && ((p = sd(p)), (x = Pe(x, r))), Ic(p, x));
            Je(k, r, 3, p);
          }
          (p = kf(l, 2, Fe) != 2) || ((p = Me(l, 3, Ed, void 0 === Rc ? 2 : 4)), (p = p.length));
          p && ((p = new Av()), cg(p, Ev, l), g.push(p));
      }
    }
    g.length && ((f = new Bv()), ff(f, Av, 1, g), (g = new zv()), cg(g, Cv, f), e.o.j(g));
  });
}
F(Fv, T);
function Gv(a, c, e) {
  Qn.call(this, e);
  this.j = c;
}
F(Gv, Qn);
Gv.prototype.ea = function () {
  return ["ProfileData"];
};
Gv.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = X(c, "ProfileData");
      a.o ? (Hv(c, a.j), Z(e)) : Iv(this.j, "cacheupdatestats", a.j, c, e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function Jv(a) {
  a = Error.call(this, a);
  this.message = a.message;
  "stack" in a && (this.stack = a.stack);
}
F(Jv, Error);
function Kv() {}
function Lv(a, c, e, f, g, h) {
  g = g === void 0 ? !1 : g;
  h = h === void 0 ? !1 : h;
  c = c !== void 0 ? Mv(c, e) : null;
  g = g ? "prev" : "next";
  if (f)
    return (
      (a = Nv(a, f)),
      h
        ? ((h =
            (h = c !== void 0) && g !== void 0
              ? a.j.openKeyCursor(c, g)
              : h
                ? a.j.openKeyCursor(c)
                : a.j.openKeyCursor()),
          (c = new Ov(
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
          (c = new Ov(
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
  h = Pv(a, "openCursor", (c ? c.lower + ", " + c.upper : c) + ", " + g);
  Qv(a, h);
  c =
    (f = c !== void 0) && g !== void 0
      ? a.j.openCursor(c, g)
      : f
        ? a.j.openCursor(c)
        : a.j.openCursor();
  return new Ov(c, "read", a.v, h, a.o, a.B, a.A);
}
function Rv(a, c, e) {
  c = Mv(c, e);
  Sv(a, c);
}
function Tv(a, c, e, f, g, h, k, l, p) {
  k = k === void 0 ? !1 : k;
  l = l === void 0 ? !1 : l;
  p = p === void 0 ? !1 : p;
  c = X(a, c);
  var q = [];
  Uv(Lv(c, void 0, g, h, k, l), function (r) {
    if ((r = r.target.result)) {
      var x = r.value !== void 0 ? r.value : r.key;
      try {
        x = e(x);
      } catch (y) {
        if (y instanceof Jv) {
          a.abort(new zn(9, y.message));
          return;
        }
        throw y;
      }
      x && q.push(x);
      r["continue"]();
    } else (p && Vv(a), f && f(q));
  });
}
function Wv(a, c) {
  return function (e) {
    e.stopPropagation();
    c(new zn(1, a + " (" + wu(e) + ")", e));
  };
}
function Mv(a, c) {
  return c === void 0 || a == c ? Xv.only(a) : Xv.bound(a, c, void 0, void 0);
}
var Xv = K.IDBKeyRange || K.webkitIDBKeyRange;
function Yv(a, c, e, f, g, h) {
  xn.call(this, a, f, h);
  this.ue = c;
  this.Md = e;
}
F(Yv, xn);
Yv.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "append-commands":
      if (a.A) {
        var f = a.F,
          g = X(c, "DocumentCommands");
        Rv(g, [f], [f, []]);
      }
      X(c, "DocumentCommands");
      a = a.B;
      for (c = 0; c < a.length; ++c) throw Error("Mb`" + typeof a[c]);
      Z(e);
      break;
    default:
      throw Error("Lb`" + a.getType());
  }
};
function Zv(a) {
  this.j = a;
}
function Z(a) {
  a.j(a);
}
function $v(a, c, e, f) {
  T.call(this);
  this.H = a;
  this.C = c;
  this.o = e;
  this.B = f || Date.now;
  this.A = this.j = 0;
  this.v = [];
}
F($v, T);
$v.prototype.start = function () {
  if (this.A) throw Error("Nb");
  this.A = this.B() + this.C;
  this.j = hr(this.D, this.C, this);
};
$v.prototype.D = function () {
  this.j = 0;
  var a = this.B() - this.A;
  this.v.push(a);
  var c = this.o.hidden || this.o.webkitHidden || this.o.mozHidden || this.o.msHidden ? 1020 : 20;
  this.v.length < 10 && a > c
    ? ((this.A = this.B() + 1e3), (this.j = hr(this.D, 1e3, this)))
    : this.H(this);
};
$v.prototype.N = function () {
  this.j && K.clearTimeout(this.j);
};
function Ov(a, c, e, f, g, h, k, l, p, q, r) {
  var x = this;
  this.P = a;
  this.v = e;
  this.K = f;
  this.M = g;
  this.C = h;
  this.R = aw(h, f);
  this.B = this.L = null;
  this.A = l || null;
  this.F = k;
  this.o = r ? Dm(this.F, r) : null;
  this.I = q || 0;
  this.j = null;
  this.I > 0 &&
    (this.A || p) &&
    ((this.j = new $v(
      function () {
        if (x.o) {
          var y = x.F,
            z = x.o;
          z in y.j && delete y.j[z];
        }
        x.v.info(Error("Qb"), {
          documentHidden: document.hidden || document.webkitHidden,
          request: x.K,
          requestTimeoutMs: x.I,
          timeoutCallbackSet: !!x.A,
          timeoutDelays: x.j.v.concat().toString(),
        });
        al(x.j);
        !x.M.j && x.A && (x.O(x.P), x.A());
      },
      this.I,
      document,
    )),
    this.j.start());
  this.P.onsuccess = hu(this.v, this.Y, this, !0);
  this.P.onerror = hu(this.v, this.S, this, !0);
  switch (c) {
    case "read":
      this.C.F++;
      break;
    case "write":
      this.C.C++;
  }
}
function Uv(a, c) {
  if (a.L) throw Error("Ob");
  a.L = c;
}
Ov.prototype.Y = function (a) {
  al(this.j);
  if (this.o) {
    var c = this.F,
      e = this.o,
      f = c.j[e];
    f && (f.complete(void 0), delete c.j[e]);
  }
  c = this.C;
  f = this.R;
  c.v = performance.now();
  c.L = a.timeStamp == null ? -1 : c.v - a.timeStamp;
  c.I++;
  e = c.j[f];
  delete c.j[f];
  e && ((f = c.v), (e.o = !0), (e.j = f), bw(c, e));
  this.M.j || (this.L && this.L(a));
};
function cw(a, c) {
  if (a.B) throw Error("Pb");
  a.B = c;
}
Ov.prototype.S = function (a) {
  al(this.j);
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
  e && ((f = c.o), (e.o = !1), (e.j = f), bw(c, e));
  a.target.docs_requestContext = this.K;
  this.M.j || ((c = a.target.error) && c.name == "AbortError") || (this.B && this.B(a));
};
Ov.prototype.O = function (a) {
  a.onsuccess = u();
  a.onerror = u();
};
function dw(a, c, e) {
  this.v = a;
  this.A = c;
  this.B = e;
  this.j = this.o = null;
}
function ew() {
  this.j = {};
  this.B = [];
  this.I = this.H = 0;
  this.D = this.o = this.L = this.v = this.A = -1;
  this.C = this.F = this.K = 0;
}
function aw(a, c) {
  a.A = performance.now();
  var e = a.K++;
  a.j[e] = new dw(e, c, a.A);
  return e;
}
function bw(a, c) {
  for (a.B.push(c); a.B.length > 5; ) a.B.shift();
}
function fw(a) {
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
function gw(a) {
  this.B = a;
  this.A = this.o = this.v = this.j = !1;
}
function hw(a, c, e) {
  a.A && gu(a.B, Error("Rb`" + c), e);
}
function iw(a) {
  try {
    var c = K.localStorage.getItem("docs-ucb");
  } catch (e) {
    return (a.info(Error("Tb`" + e.message)), "e");
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
function jw(a, c, e, f, g, h, k, l) {
  Ov.call(this, a, "open", c, e, new gw(c), new ew(), f, h, !0, k, l);
  this.H = this.D = null;
  this.V = g;
  a.onblocked = hu(c, this.U, this, !0);
  a.onupgradeneeded = hu(c, this.ca, this, !0);
}
F(jw, Ov);
jw.prototype.U = function (a) {
  al(this.j);
  this.D && this.D(a);
};
jw.prototype.ca = function (a) {
  al(this.j);
  if (a.dataLoss && a.dataLoss != "none") {
    var c = {};
    c.dataLoss = a.dataLoss;
    c.dataLossMessage = a.dataLossMessage;
    c.optinBackup = fq(this.V);
    c.requestContext = this.K;
    c.unsavedChanges = iw(this.v);
    this.v.info(Error("Ub"), c);
  }
  this.H && this.H(a);
};
jw.prototype.O = function (a) {
  Ov.prototype.O.call(this, a);
  a.onblocked = Si;
  a.onupgradeneeded = Si;
};
function kw(a, c) {
  if (a.D) throw Error("Vb");
  a.D = c;
}
function lw(a, c) {
  if (a.H) throw Error("Wb");
  a.H = c;
}
function mw(a, c, e, f, g) {
  this.j = a;
  this.B = c;
  this.A = e;
  this.o = f;
  this.v = g;
}
mw.prototype.get = function (a) {
  return new Ov(
    this.j.get(a),
    "read",
    this.o,
    this.j.name + ".get(" + a + ")",
    this.B,
    this.A,
    this.v,
  );
};
function nw(a, c, e, f, g) {
  this.j = a;
  this.o = c;
  this.B = e;
  this.v = f;
  this.A = g;
}
C = nw.prototype;
C.get = function (a) {
  var c = Pv(this, "get", a instanceof IDBKeyRange ? a.lower + ", " + a.upper : a);
  Qv(this, c);
  return new Ov(this.j.get(a), "read", this.v, c, this.o, this.B, this.A);
};
C.getAll = function (a) {
  var c = Pv(this, "getAll", a instanceof IDBKeyRange ? a.lower + ", " + a.upper : a);
  Qv(this, c);
  return new Ov(this.j.getAll(a), "read", this.v, c, this.o, this.B, this.A);
};
function Hv(a, c) {
  var e = Pv(a, "put");
  Qv(a, e);
  c = a.j.put(c);
  return new Ov(c, "write", a.v, e, a.o, a.B, a.A);
}
C.add = function (a, c) {
  var e = Pv(this, "add", c);
  Qv(this, e);
  a = c !== void 0 ? this.j.add(a, c) : this.j.add(a);
  return new Ov(a, "write", this.v, e, this.o, this.B, this.A);
};
function Sv(a, c) {
  var e = Pv(a, "delete", c instanceof IDBKeyRange ? c.lower + ", " + c.upper : c);
  Qv(a, e);
  new Ov(a.j["delete"](c), "delete", a.v, e, a.o, a.B, a.A);
}
C.clear = function () {
  var a = Pv(this, "clear");
  Qv(this, a);
  return new Ov(this.j.clear(), "clear", this.v, a, this.o, this.B, this.A);
};
C.count = function (a) {
  var c = Pv(this, "count", a);
  Qv(this, c);
  a = a !== void 0 ? this.j.count(a) : this.j.count();
  return new Ov(a, "read", this.v, c, this.o, this.B, this.A);
};
function Nv(a, c) {
  Qv(a, Pv(a, "getIndex", c));
  return new mw(a.j.index(c), a.o, a.B, a.v, a.A);
}
function Pv(a, c, e) {
  return a.j.name + "." + c + "(" + (e !== void 0 ? e : "") + ")";
}
function Qv(a, c) {
  hw(a.o, "request: " + c);
}
function ow(a) {
  this.v = a;
  this.j = [];
  this.o = !1;
}
function pw(a) {
  var c = new Zv(function (e) {
    Bb(a.j, e) && a.j.length === 0 && !a.o && ((a.o = !0), a.v());
  });
  a.j.push(c);
  return c;
}
function qw(a, c, e, f, g, h, k, l, p, q, r, x, y, z, B) {
  function I() {}
  var D = this;
  p = p === void 0 ? !1 : p;
  x = x === void 0 ? null : x;
  z = z === void 0 ? !1 : z;
  this.I = a;
  this.ga = c;
  this.o = e;
  this.U = f;
  this.K = !1;
  this.B = p;
  this.F = this.L = null;
  this.j = new gw(this.o);
  this.H = new ew();
  this.V = r || 6e4;
  this.A = new $v(
    function () {
      if (!D.j.o) {
        var Y = rw(D);
        Y.transactionTimeout = D.V;
        Y.timeoutDelays = D.A.v.concat().toString();
        Y.documentHidden = document.hidden || document.webkitHidden;
        D.o.info(Error("Zb`" + D.P), Y);
        D.A.dispose();
        D.S && (sw(D, !0), D.S(), (D.F.oncomplete = null));
      }
    },
    this.V,
    document,
  );
  this.S = x;
  this.Y = h;
  this.D = k;
  this.M = l;
  a = U(this.D, "docs-eaiturd");
  this.ha = B != null ? B : a;
  this.P = q || An(l);
  this.v = null;
  this.R = tw++;
  this.C = g;
  this.ca = y !== void 0 ? y : this.B ? 29030 : 29029;
  this.ia = z || !1;
  g = U(this.D, "docs-eiec");
  l = U(this.D, "docs-esiec");
  g
    ? (I = function () {
        D.F.commit !== void 0 && (uw(D), hw(D.j, "commit", rw(D)), D.F.commit());
      })
    : l &&
      (I = function () {
        hw(D.j, "simulated commit", rw(D));
        D.j.A = !0;
      });
  this.O = new ow(I);
}
C = qw.prototype;
C.open = function () {
  if (this.ca != null) {
    var a = U(this.D, "docs-intli") ? this.ia : !0;
    this.v = Gm(this.Y, this.ca, a);
  }
  a = this.B ? "readwrite" : "readonly";
  var c = { durability: this.ha ? "relaxed" : "strict" };
  this.A.start();
  try {
    var e = this.I.transaction(this.ga, a, c);
  } catch (f) {
    throw ((e = rw(this)), (e.transactionStage = "open"), yu(e, f.message), Hk(f, e));
  }
  e.onabort = hu(this.o, this.we, this);
  e.oncomplete = hu(this.o, this.Nd, this);
  e.onerror = hu(this.o, this.Od, this, !0);
  this.F = e;
  this.C.add(this);
};
function Vv(a) {
  hw(a.j, "abandon", rw(a));
  a.j.o = !0;
  a.A.dispose();
  a.v = null;
  a.C.remove(a);
}
C.abort = function (a) {
  hw(this.j, "abort", rw(this));
  sw(this, !1, a);
};
function sw(a, c, e) {
  var f = a.j;
  if (!f.v && !f.j) {
    uw(a);
    f.j = !0;
    try {
      a.F.abort();
    } catch (g) {
      (g.name == "InvalidStateError" && c) ||
        ((f = rw(a)), (f.abortFromTimeout = c), a.o.info(g, f));
    }
    e && !a.K && (a.U(e), (a.K = !0));
    a.A.dispose();
    a.C.remove(a);
  }
}
function X(a, c) {
  uw(a);
  return new nw(a.F.objectStore(c), a.j, a.H, a.o, a.Y);
}
function vw(a, c) {
  if (a.L) throw Error("Xb");
  a.L = c;
}
function uw(a) {
  if (!a.F) throw Error("Yb");
}
C.we = function (a) {
  if (this.j.o) return Promise.resolve();
  var c = !0;
  this.j.j
    ? (c = !1)
    : ((a.target.docs_internalAbort = !0),
      !this.B &&
        a.target.error &&
        a.target.error.name == "QuotaExceededError" &&
        (this.L && this.L(), (c = !1)));
  this.j.v = !0;
  this.C.remove(this);
  this.A.dispose();
  var e = Promise.resolve();
  c && (e = ww(this, "LocalStore IndexedDB transaction abort", rw(this), a));
  this.v = null;
  return e;
};
C.Nd = function () {
  if (!this.j.o) {
    this.C.remove(this);
    if (this.v) {
      var a = new nm();
      uf(a, 1, this.M);
      rf(a, 2, this.H.F);
      rf(a, 3, this.H.C);
      var c = xm(41);
      c.A = a;
      a = ym(c);
      this.v.complete(a);
      this.v = null;
    }
    this.A.dispose();
    this.L && this.L();
  }
};
C.Od = function (a) {
  a.stopPropagation();
  var c = this.j;
  if (
    !(c.o || c.v || c.j || ((c = a.target.error), c && c.name == "AbortError")) &&
    ((c = rw(this)),
    (c.request = a.target.docs_requestContext),
    ww(this, "LocalStore IndexedDB error", c, a),
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
    a.o = !0;
    a.v.info(Error("$b`" + this.X() + "`" + c));
  }
};
function ww(a, c, e, f) {
  var g = wu(f),
    h = c + " (" + a.P + "): " + g;
  e.transactionStage = "processError";
  yu(e, g);
  return Au(e, g, a.D).then(function () {
    a.o.info(Error(h), e);
    var k = new zn(1, h, f, a.M, !!eq());
    ll(k.A, e);
    Hk(k.J, e);
    a.K || (a.U(k), (a.K = !0));
  });
}
C.X = w("R");
function rw(a) {
  var c = xu(a.I.objectStoreNames),
    e = a.v ? a.v.o : null;
  c = {
    databaseName: a.I.name,
    databaseObjectStores: c,
    databaseVersion: a.I.version,
    transactionAllowWrite: a.B,
    transactionContext: a.P,
    transactionId: a.R,
    transactionObjectStores: a.ga.toString(),
    transactionStartTimeMs: e,
    transactionAgeMs: e ? performance.now() - e : null,
  };
  a = a.H;
  e = Zp(a.j);
  c.pendingRequestCount = e.length;
  c.pendingRequests = fw(e);
  c.idbRecentlyCompletedRequests = fw(a.B);
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
  c.idbLastSuccessEventCallbackTimeDiffMs = a.L;
  c.idbLastErrorEventCallbackTimeDiffMs = a.D;
  c.idbReadOperationCount = a.F;
  c.idbWriteOperationCount = a.C;
  return c;
}
function xw(a) {
  this.v = a;
  this.j = {};
  this.o = !1;
}
xw.prototype.add = function (a) {
  if (a.B || !this.o) this.j[a.X()] = a;
};
xw.prototype.remove = function (a) {
  delete this.j[a.X()];
};
var tw = 0;
function yw(a, c) {
  Cq.call(this, "j", c);
  this.newVersion = a;
}
F(yw, Cq);
function zw(a, c, e, f) {
  T.call(this);
  this.K = a;
  this.A = c;
  this.M = e;
  this.B = f;
  this.H = this.D = this.j = null;
  this.O = {};
  this.v = !1;
  this.I = new xw(c);
  this.C = new $m();
  cl(this, this.C);
  this.o = new $m();
  cl(this, this.o);
  this.P = K.indexedDB || K.webkitIndexedDB;
}
F(zw, T);
zw.prototype.close = function (a) {
  this.j && ((this.j.onversionchange = null), this.j.close(), (this.j = null), (this.D = a));
};
zw.prototype.initialize = function (a) {
  var c = this;
  if (this.j) throw Error("ac");
  if (a.onversionchange != null) throw Error("bc");
  a.onclose = function () {
    var e = {};
    e.optinBackup = fq(c.B);
    c.A.info(Error("cc"), e);
    c.C.dispatchEvent(null);
  };
  a.onerror = Wv("Database error.", this.K);
  a.onversionchange = function (e) {
    c.v = !0;
    e = Number(e.version) || e.newVersion || 0;
    c.close("Version change detected " + e);
    c.o.dispatchEvent(new yw(e));
  };
  this.j = a;
};
function Aw(a) {
  if (!a.j) return -1;
  a = parseInt(a.j.version, 10);
  return a >= 0 ? a : -1;
}
function Bw(a, c, e, f, g, h, k, l, p, q, r) {
  q = q === void 0 ? !1 : q;
  if (!a.j) {
    if (a.D != null) throw Hk(Error("dc`" + a.D), a.O);
    throw Error("ec");
  }
  if (g && a.I.o) throw Error("fc");
  a = new qw(a.j, c, a.A, f || a.K, a.I, a.M, a.B, e, g, h, k, l, p, q, r);
  a.open();
  return a;
}
function Cw(a, c, e, f, g) {
  if (Aw(a) >= c) throw Error("gc`" + c + "`" + Aw(a));
  var h = a.j.name;
  a.close("Setting version to " + c);
  var k = a.A;
  c = new jw(a.P.open(h, c), k, "setVersion database.open", a.M, a.B);
  lw(c, function (l) {
    l = l.target.transaction;
    l.onabort = l.onerror = hu(k, f, {}, !0);
    e(l);
  });
  cw(c, f);
  kw(c, function (l) {
    k.info(Error("hc"), { "Old version": l.oldVersion, "New version": l.newVersion });
  });
  Uv(c, function (l) {
    a.initialize(l.target.result);
    g(l);
  });
}
zw.prototype.N = function () {
  this.close(this.H ? "DocsDatabase was disposed due to " + this.H : "DocsDatabase was disposed");
  T.prototype.N.call(this);
};
function Dw(a, c, e, f, g, h, k, l, p) {
  g = g
    ? function () {
        f(new zn(6, "Timeout opening database."));
      }
    : void 0;
  p && k.o("odbs");
  g = new jw(
    (K.indexedDB || K.webkitIndexedDB).open("GoogleDocs"),
    e,
    "database.open",
    h,
    l,
    g,
    Bl(l, "docs-localstore-iort"),
    "idbodb",
  );
  Uv(g, function (q) {
    p && k.o("odbc");
    var r = new zw(c, e, h, l);
    r.initialize(q.target.result);
    a(r);
  });
  cw(g, Wv("Error opening database.", f));
}
function Ew() {
  W.call(this);
}
F(Ew, Rn);
Ew.prototype.ea = function () {
  throw Error("ic");
};
Ew.prototype.aa = function (a) {
  throw Error("Kb`" + a.getType());
};
function Fw(a, c, e) {
  W.call(this);
  this.j = e;
}
F(Fw, Sn);
Fw.prototype.ea = function () {
  return ["Comments"];
};
Fw.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = X(c, "Comments");
      kn(a);
      if (a.o) {
        var f = a.j,
          g = {};
        g.cmtKey = kn(a);
        g.stateIndex = [f.s, f.di];
        g.da = f.da;
        Hv(c, g);
        Z(e);
      } else {
        g = a.j;
        a = kn(a);
        var h = {};
        "s" in g && ((h.stateIndex = [g.s, a[0]]), delete g.s);
        for (f in g) h[f] = g[f];
        Iv(this.j, a, h, c, e);
      }
      break;
    case "delete-record":
      c = X(c, "Comments");
      a = kn(a);
      Sv(c, a);
      Z(e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function Gw(a, c) {
  this.A = a;
  this.o = c || {};
  this.j = this.v = null;
}
function Hw(a, c, e) {
  this.L = a;
  this.K = c;
  this.B = e;
  this.j = null;
  this.F = {};
  this.A = this.I = this.o = this.v = this.C = null;
  this.H = this.D = !1;
}
function Iw(a) {
  return a.j != null ? Jw(a.j) : null;
}
function Kw(a) {
  a.C != null && (a.C = Date.now());
  a.v = Date.now();
}
function Lw(a, c) {
  a.j == null && (a.I = Date.now());
  a.j = Jw(c);
  a.o = Date.now();
  a.A = a.o;
}
function Mw(a, c, e) {
  for (var f in c) {
    var g = Jw(a.j[f]),
      h = Jw(c[f]);
    a.F[f] = new Nw(g, h, !0);
    e.includes(f) ? (a.j[f] = h != null ? h : null) : (a.j[f] = h);
  }
}
function Ow(a, c, e) {
  c = Jw(c);
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
      var r = Jw(a.j[z]),
        x = Jw(c[z]);
      a.j[z] = x;
      var y = a.F[z];
      a.F[z] = new Nw(r, x, !1);
      z != "relevancyRank" &&
        (Object.hasOwn(f, z) ? h.push(z) : g.push(z),
        Pw.includes(z) &&
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
    Object.assign(k, Qw(a));
    gu(a.L, Error("kc"), k);
  }
  a.o = Date.now();
}
function Qw(a) {
  var c = {};
  c.cache_recordType = a.K;
  c.docCapability_lastCachedTimestamp = a.o;
  c.docCapability_initialCacheStartTimeMs = a.C;
  c.docCapability_initialCachedTimestamp = a.I;
  c.docCapability_lastFullCacheStartTimeMs = a.v;
  c.docCapability_lastFullCachedTimestamp = a.A;
  c.docCapability_isNewDocumentInSession = a.D;
  return c;
}
function Jw(a) {
  return a == null
    ? a
    : typeof structuredClone === "function"
      ? structuredClone(a)
      : JSON.parse(JSON.stringify(a));
}
function Nw(a, c, e) {
  this.o = Date.now();
  this.A = a;
  this.v = c;
  this.j = e;
}
var Pw =
  "acjf acl rev lastSyncedTimestamp startupHints initialPinSourceApp lsft lsst ips lss isFastTrack hpmdo modelNeedsResync approvalMetadataStatus pendingQueueState pendingCreation lastModifiedClientTimestamp title inc quotaStatus isOwner ind mimeType lastModifiedServerTimestamp featureBitSetModelVersion r s uc".split(
    " ",
  );
function Rw() {
  W.call(this);
}
F(Rw, jo);
function Sw(a, c, e, f, g, h, k) {
  k = k === void 0 ? !1 : k;
  Tn.call(this, f, h);
  this.A = a;
  this.B = e;
  this.o = h;
  this.H = U(h, "docs-eiwot");
  this.C = U(this.o, "docs-eiwotv2dl");
  this.L = U(this.o, "docs-eiwotv2");
  this.j = k || this.H || this.C || this.L ? new Hw(g, "Document", this.o) : null;
  this.I = g;
}
F(Sw, Tn);
function Tw(a, c, e) {
  var f = f === void 0 ? !1 : f;
  if (a.A.v)
    hr(function () {
      return e([]);
    });
  else {
    var g = Bw(a.A, ["Documents"], c ? 35 : 37);
    Uw(
      a,
      c,
      function (h) {
        Vv(g);
        e(h);
      },
      g,
      f,
    );
  }
}
function Vw(a, c, e) {
  a.j && Kw(a.j);
  Tw(a, c, function (f) {
    f.length == 1 ? e(f[0]) : e(null);
  });
}
function Uw(a, c, e, f, g) {
  c
    ? Uv(X(f, "Documents").get(c), function (h) {
        (h = h.target.result) ? (a.j && Lw(a.j, h), e([Ww(a, h)])) : e([]);
      })
    : Tv(
        f,
        "Documents",
        function (h) {
          if (g && h === null) return (gu(a.I, Error("lc")), null);
          if (h === null) throw new Jv("Received unexpected null document from localstore");
          return Ww(a, h);
        },
        e,
      );
}
function Ww(a, c) {
  var e = new tn(c.id, c.documentType, !1, a.o);
  V(e, "title", c.title);
  V(e, "lastSyncedTimestamp", c.lastSyncedTimestamp);
  V(e, "jobset", c.jobset);
  Jl(e, "isFastTrack", !!c.isFastTrack);
  V(e, "lastModifiedServerTimestamp", c.lastModifiedServerTimestamp);
  V(e, "lastColdStartedTimestamp", c.lastColdStartedTimestamp);
  V(e, "lastWarmStartedTimestamp", c.lastWarmStartedTimestamp);
  var f = c.acl;
  for (h in f) Ql(e, "acl", h, Ch(f[h]));
  f = c.acjf;
  for (var g in f) {
    var h = Ul(f[g]);
    h = $f(h);
    Ql(e, "acjf", g, h);
  }
  V(e, "docosKeyData", c.docosKeyData || null);
  Jl(e, "inc", !!c.inc);
  g = c.docCreationTimestamp;
  g != null && V(e, "docCreationTimestamp", g);
  g = c.lastModifiedClientTimestamp;
  g != null && V(e, "lastModifiedClientTimestamp", g);
  if ((g = c.startupHints)) for (var k in g) Ql(e, "startupHints", k, g[k]);
  (k = c.ic) && V(e, "ic", k);
  Jl(e, "hpmdo", !!c.hpmdo);
  Jl(e, "ips", !!c.ips);
  Jl(e, "ip", !!c.ip);
  Jl(e, "pendingCreation", !!c.pendingCreation);
  k = c.fact;
  k != null && V(e, "fact", k);
  Jl(e, "modelNeedsResync", !!c.modelNeedsResync);
  Jl(e, "ind", !!c.ind);
  Jl(e, "isd", !!c.isd);
  Jl(e, "ist", !!c.ist);
  k = c.embeddedDrawingState;
  k != null && V(e, "embeddedDrawingState", Ch(k));
  Jl(e, "ende", !!c.ende);
  k = c.mimeType;
  k != null && V(e, "mimeType", k);
  Jl(e, "ibup", !!c.ibup);
  k = c.modelVersion;
  k != null && V(e, "modelVersion", k);
  k = c.featureVersion;
  k != null && V(e, "featureVersion", k);
  k = c.featureBitSetModelVersion;
  k != null && V(e, "featureBitSetModelVersion", k);
  k = c.featureBitSetBase64String;
  k != null && V(e, "featureBitSetBase64String", k);
  k = c.rev;
  k != null &&
    ((g = c.rai),
    g != null ? (g = g ? new Cn(g[0]) : null) : (g = null),
    V(e, "rev", k),
    V(e, "rai", g ? [g.j] : null));
  k = c.lsst;
  k != null && V(e, "lsst", k);
  k = c.lss;
  k != null && Jl(e, "lss", !!k);
  k = c.lsft;
  k != null && V(e, "lsft", k);
  k = c.odocid;
  k != null && V(e, "odocid", k);
  k = c.relevancyRank;
  k != null && V(e, "relevancyRank", k);
  k = c.lastServerSnapshotTimestamp;
  k != null && V(e, "lastServerSnapshotTimestamp", k);
  k = c.snapshotState;
  k != null && V(e, "snapshotState", Ch(k));
  k = c.snapshotProtocolNumber;
  k !== void 0 && (Kj(k == null || k >= 0, "Ea"), V(e, "snapshotProtocolNumber", k));
  k = c.snapshotVersionNumber;
  k !== void 0 && (Kj(k == null || k >= 0, "Fa"), V(e, "snapshotVersionNumber", k));
  k = c.pendingQueueState;
  k != null && V(e, "pendingQueueState", Ch(k));
  k = c.fileLockedReason;
  k != null && V(e, "fileLockedReason", k);
  k = c.quotaStatus;
  k != null && V(e, "quotaStatus", Ch(k));
  k = c.isOwner;
  k != null && Jl(e, "isOwner", !!k);
  k = c.approvalMetadataStatus;
  k != null && V(e, "approvalMetadataStatus", k);
  k = c.contentLockType;
  k != null && V(e, "contentLockType", k);
  k = c.initialSyncReason;
  k == null || (Hl(e, "initialSyncReason") == null && V(e, "initialSyncReason", k));
  k = c.resourceKey;
  k != null && V(e, "resourceKey", k);
  k = c.initialPinSourceApp;
  k != null && V(e, "initialPinSourceApp", k);
  k = c.chaptersRolloutTimestamp;
  k != null && V(e, "chaptersRolloutTimestamp", k);
  c = c.externalityState;
  c != null && V(e, "externalityState", c == null ? null : Ch(c));
  if (!e || e.getType() == "trix" || e.getType() == "syncstats") return null;
  if (!a.wc[e.getType()]) {
    a = Error("mc`" + e.getType());
    c = !!Il(e, "title");
    k = e.X();
    var l;
    Fl(e, "inc") == null ? (l = null) : (l = e.j.inc.length != 0);
    throw Hk(a, {
      localStoreDoc_hasTitle: c,
      localStoreDoc_id: k,
      localStoreDoc_isCreated: (!0 !== l).toString(),
      localStoreDoc_lastModifiedClientTimestamp: Gl(e, "lastModifiedClientTimestamp").toString(),
      localStoreDoc_lastModifiedServerTimestamp: Gl(e, "lastModifiedServerTimestamp").toString(),
      localStoreDoc_lastSyncedTimestamp: Gl(e, "lastSyncedTimestamp").toString(),
      localStoreDoc_revision: Hl(e, "rev").toString(),
    });
  }
  e.o = !1;
  return e;
}
Sw.prototype.ea = function (a) {
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
Sw.prototype.aa = function (a, c, e) {
  var f = X(c, "Documents");
  switch (a.getType()) {
    case "update-record":
      a.o
        ? ((a = a.j),
          f.add(a),
          (this.L || this.C) && this.j && ((f = this.j), Lw(f, a), (f.D = !0)),
          Z(e))
        : ((c = this.j) == null
            ? (c = 0)
            : c.j != null
              ? U(c.B, "docs-eiwotv2") || (U(c.B, "docs-eiwot") && !c.D)
                ? (c = !0)
                : (U(c.B, "docs-eiwotv2dl"), (c = !1))
              : (c = !1),
          c
            ? (Mw(this.j, a.j, Xw), Hv(f, this.j.j), Z(e))
            : (this.j &&
                this.j.j == null &&
                ((c = this.j),
                c.v != null &&
                  c.H != 1 &&
                  (c.A == null || c.A < c.v) &&
                  ((c.H = !0), gu(c.L, Error("jc"), Qw(c)))),
              this.j && this.j.j != null
                ? ((c = new Gw(Date.now(), Jw(a.j))), Iv(this.B, kn(a), a.j, f, e, Xw, this.j, c))
                : Iv(this.B, kn(a), a.j, f, e, Xw)));
      break;
    case "delete-record":
      Yw(this, a, c, e);
      break;
    default:
      this.za(a.C).aa(a, c, e);
  }
};
function Yw(a, c, e, f) {
  c.A
    ? a.v(c, e, f)
    : Zw(kn(c), e, function (g) {
        g ? e.abort(new zn(5, "Pending changes found")) : a.v(c, e, f);
      });
}
function Zw(a, c, e) {
  Uv(Lv(X(c, "PendingQueueCommands"), [a], [a, []]), function (f) {
    f.target.result ? e(!0) : $w(a, c, e);
  });
}
function $w(a, c, e) {
  Uv(Nv(X(c, "Comments"), "StateIndex").get([2, a]), function (f) {
    e(!!f.target.result);
  });
}
Sw.prototype.v = function (a, c, e) {
  a = kn(a);
  var f = X(c, "DocumentCommands");
  Rv(f, [a], [a, []]);
  f = X(c, "PendingQueueCommands");
  Rv(f, [a], [a, []]);
  f = X(c, "PendingQueues");
  Rv(f, a);
  f = X(c, "Documents");
  Rv(f, a);
  f = X(c, "DocumentLocks");
  Rv(f, [a]);
  f = X(c, "Comments");
  Rv(f, [a], [a, []]);
  f = X(c, "DocumentEntities");
  Rv(f, [a], [a, []]);
  f = pw(c.O);
  ax(c, "nonsnapshottedocumentids", [a], f);
  f = pw(c.O);
  ax(c, "missingdocosdocumentids", [a], f);
  Z(e);
};
var Xw =
  "approvalMetadataStatus contentLockType externalityState initialPinSourceApp lastModifiedClientTimestamp lastWarmStartedTimestamp quotaStatus relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber odocid".split(
    " ",
  );
function bx() {}
bx.prototype.j = function (a, c, e, f, g, h, k) {
  return new Sw(a, c, e, f, g, h, k === void 0 ? !1 : k);
};
function cx(a, c, e, f, g) {
  Un.call(this, e, g);
  this.j = a;
  this.o = f;
}
F(cx, Un);
function dx(a, c, e) {
  e = Bw(a.j, ["ApplicationMetadata"], 46, e);
  Tv(
    e,
    "ApplicationMetadata",
    function (f) {
      var g = f.dt;
      if (g == null) throw Error("oc");
      var h = new En(g, !1, a.ja);
      g = a.za(g);
      var k = f.jobset;
      k != null && V(h, "jobset", k);
      k = f.ic;
      k != null && ((g = g.Vc(k)), (h.D = g.slice(0)), (h.B = !0));
      (g = f.docosKeyData) && V(h, "docosKeyData", g);
      f = f.version;
      V(h, "version", Ch(f !== void 0 ? f : 0));
      h.o = !1;
      return h;
    },
    c,
    void 0,
    void 0,
    void 0,
    void 0,
    !0,
  );
}
cx.prototype.ea = function (a) {
  if (!this.Z(a)) throw Error("nc`" + a.getType());
  return ["ApplicationMetadata"];
};
cx.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-application-metadata":
      this.za(kn(a));
      var f = a.j;
      if (a.A) {
        if (a.A) var g = a.A;
        else throw dh("Ma").J;
        for (var h = [], k = 0; k < g.length; k++) h.push(xo(g[k]));
        f.ic = h;
      }
      c = X(c, "ApplicationMetadata");
      a.o ? (Hv(c, f), Z(e)) : Iv(this.o, kn(a), f, c, e);
      break;
    default:
      throw Error("pc`" + a.getType());
  }
};
function fx(a, c, e) {
  W.call(this);
  this.j = e;
}
F(fx, Wn);
fx.prototype.ea = function () {
  return ["DocumentEntities"];
};
fx.prototype.aa = function (a, c, e) {
  c = X(c, "DocumentEntities");
  switch (a.getType()) {
    case "update-record":
      if (a.o) {
        var f = {};
        f.deKey = kn(a);
        f.data = a.j.data;
        Hv(c, f);
        Z(e);
      } else ((f = {}), (f.data = a.j.data), (a = kn(a)), Iv(this.j, a, f, c, e));
      break;
    case "delete-record":
      Rv(c, kn(a));
      Z(e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function gx(a, c, e, f) {
  this.o = a;
  this.A = c;
  this.j = e;
  this.v = f;
}
function hx(a) {
  W.call(this);
  this.j = a;
}
F(hx, Xn);
hx.prototype.B = function () {
  this.j.B();
};
hx.prototype.ea = function () {
  return ["DocumentLocks"];
};
hx.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "document-lock":
      switch (a.B) {
        case 2:
          ix(this.j, a.A, c, e);
          break;
        case 1:
          jx(this.j, a.A, c, e);
      }
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
hx.prototype.N = function () {
  Xn.prototype.N.call(this);
  this.j.dispose();
};
function kx() {}
function lx() {
  this.j = {};
}
function mx(a, c, e, f, g) {
  T.call(this);
  var h = this;
  this.o = a;
  this.v = c;
  this.C = g;
  this.A = 0;
  this.I = f;
  this.D = new cn();
  cl(this, this.D);
  dn(this.D, e.o, function () {
    h.B();
  });
  this.K = new nr(this);
  this.M = new $m();
  cl(this, this.M);
  this.H = U(this.C, "docs-offline-ebsml") ? new lx() : null;
  this.O = !1;
  this.j = this.P = null;
}
F(mx, T);
function jx(a, c, e, f) {
  nx(a, c, e, function (g, h) {
    if (g == "unavailable") {
      ox(a, h, "ensureDocumentLockAvailable");
      var k = new zn(2, "Lock not available", null, e.M);
      h = px(a, h, "ensureDocumentLockAvailable");
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
      ll(k.A, h);
      Hk(k.J, h);
      e.abort(k);
    } else Z(f);
  });
}
function ix(a, c, e, f) {
  if (K.navigator.locks) qx(a, c, e, f);
  else {
    a.j && a.j.stop();
    var g = function () {
      al(a.j);
      a.j = null;
      e.abort(new zn(2, "Lock could not be refreshed"));
    };
    rx(
      a,
      c,
      e,
      function (h) {
        h && h.j == a.o
          ? sx(
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
          : (ox(a, h, "refreshDocumentLock"), g());
      },
      g,
    );
  }
}
function qx(a, c, e, f) {
  rx(
    a,
    c,
    e,
    function (g) {
      g && g.j == a.o
        ? Z(f)
        : (ox(a, g, "ensureDocumentLockOwner"),
          e.abort(new zn(2, "Lock not available: session is not the current lock-holder")));
    },
    function (g) {
      e.abort(g);
    },
  );
}
function rx(a, c, e, f, g) {
  c = X(e, "DocumentLocks").get([c]);
  Uv(c, function (h) {
    a.La() || ((h = h.target.result), f(h ? new gx(h.e, h.dlKey[0], h.sId, h.cId || null) : null));
  });
  g && cw(c, Ti(g));
}
function nx(a, c, e, f) {
  rx(a, c, e, function (g) {
    if (g) {
      var h = a.o;
      var k = a.v == 0;
      var l = U(a.C, "docs-offline-ebsml");
      l = l === void 0 ? !1 : l;
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
function ox(a, c, e) {
  if (!(a.v <= 0)) {
    var f = px(a, c, e),
      g = "IndexedDB document lock not available";
    c
      ? K.navigator.locks &&
        e == "acquireDocumentLock" &&
        (g = "IndexedDB document lock not available after Web Locks API fallback")
      : (g = "IndexedDB document lock not available because the lock does not exist");
    a.I.info(Error(g), f);
  }
}
function px(a, c, e) {
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
      (g.webLockHasBeenAcquired = a.O),
      (g.webLockReleaseReason = a.P)));
  return g;
}
function sx(a, c, e, f, g, h) {
  var k = Date.now(),
    l = 0;
  f && a.o == f.j && (l = f.o);
  f = Math.min(Math.max(k + a.v, l), k + 6e4);
  a.A = f;
  e = X(e, "DocumentLocks");
  a = new gx(f, c, a.o, null);
  c = {};
  c.e = a.o;
  c.dlKey = [a.A];
  c.sId = a.j;
  c.cId = a.v;
  a = Hv(e, c);
  Uv(a, Ti(g));
  h && cw(a, Ti(h));
}
mx.prototype.B = function () {
  if (!K.navigator.locks) {
    al(this.j);
    this.j = null;
    var a = window.localStorage;
    if (a)
      try {
        a.setItem("dcl_" + this.o, String(Date.now()));
      } catch (f) {
        for (var c = 0, e = 0; e < a.length; e++) ab(a.key(e), "dcl_") && c++;
        throw Hk(f, { keysTotal: String(a.length), locksTotal: String(c) });
      }
  }
  Promise.resolve();
};
mx.prototype.N = function () {
  this.K.dispose();
  al(this.j);
  this.j = null;
  T.prototype.N.call(this);
};
function tx() {
  W.call(this);
}
F(tx, $n);
tx.prototype.ea = function () {
  return ["Impressions"];
};
tx.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      if (a.o) {
        c = X(c, "Impressions");
        a = a.j;
        var f = {};
        f.iKey = [a.di || "", a.ibt];
        f.dt = a.dt;
        f.iba = a.iba;
        Hv(c, f);
        Z(e);
      } else throw Error("qc");
      break;
    case "delete-record":
      Rv(X(c, "Impressions"), kn(a));
      Z(e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function ux() {
  W.call(this);
}
F(ux, ao);
function vx(a, c) {
  Oo.call(this, c);
}
F(vx, Oo);
vx.prototype.oc = function (a) {
  return [new qp(a.B, Date.now())];
};
vx.prototype.ea = function () {
  return ["ProfileData"];
};
vx.prototype.aa = function (a, c, e) {
  if (a.getType() == "update-pinned-docs") wx(this, a, c, e);
  else throw Error("Kb`" + a.getType());
};
function wx(a, c, e, f) {
  var g = X(e, "ProfileData");
  Uv(g.get("pinneddocuments"), function (h) {
    var k = h.target.result;
    if (k) {
      if (k.dataType != "pinneddocuments") throw Error("rc");
      h = new Mo(!1, a.ja);
      Ll(h, "pinnedDocs", k.pinnedDocs);
      k = k.imt;
      k != null && Ll(h, "imt", k);
      h.o = !1;
    } else h = new Mo(!0, a.ja);
    k = h;
    xx(c, k);
    h = { dataType: "pinneddocuments" };
    h.pinnedDocs = No(k);
    k = Gl(k, "imt");
    k !== null && (h.imt = k);
    Hv(g, h);
    Z(f);
  });
}
function xx(a, c) {
  var e = a.F,
    f = a.A,
    g = No(c);
  e.forEach(function (h) {
    if (h.j === Ko) {
      if (Gl(c, "imt") == null) {
        V(c, "imt", f);
        var k = c.B,
          l = Eo();
        l.v = null;
        l.A = null;
        if (Ko == null) throw Zg().J;
        l.j = Ko;
        if (!l.j) throw gh().J;
        var p = l.o;
        h = l.v;
        var q = l.A;
        l = l.j;
        var r = new Lo();
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
        case Ho:
          h = h.A;
          q = {};
          h = ((q.ip = !0), (q.lrt = f), (q.initSource = h != null ? h : 0), q);
          p && p.ip && p.initSource != null && (h.initSource = p.initSource);
          g[k] = h;
          break;
        case Io:
          p = {};
          p = ((p.ip = !1), (p.lrt = f), p);
          g[k] = p;
          break;
        case Jo:
          delete g[k];
      }
  });
  Ll(c, "pinnedDocs", g);
}
function yx(a) {
  this.j = a;
}
yx.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      e = X(e, "ProfileData");
      a.o ? (Hv(e, a.j), Z()) : Iv(this.j, c, a.j, e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function zx(a, c, e, f, g) {
  po.call(this, e, new Yl(f), g);
  this.v = f;
  this.o = U(g, "docs-eiwot") || U(g, "docs-eiwotv2");
  this.j = U(g, "docs-eiwotdl") || this.o ? new Hw(f, "PendingQueue", g) : null;
}
F(zx, po);
zx.prototype.ea = function () {
  return ["PendingQueueCommands", "PendingQueues"];
};
zx.prototype.aa = function (a, c, e) {
  var f = this;
  if (a instanceof en && !a.o) {
    var g = this.j != null ? new Gw(Date.now(), Jw(a.j)) : null;
    if (this.j != null)
      if (this.j.j == null) Ax(this, a, c);
      else if (this.o) {
        Bx(this, a, c, e, Iw(this.j));
        return;
      }
    Uv(X(c, "PendingQueues").get(kn(a)), function (h) {
      h = h.target.result;
      if (!h) throw Error("tc");
      f.j != null && g != null && Ow(f.j, h, g);
      Bx(f, a, c, e, h);
    });
  } else Bx(this, a, c, e);
};
function Ax(a, c, e) {
  c = { pendingQueueCap_operationType: c.getType(), pendingQueueCap_trackedOperation: An(e.M) };
  a.v.info(Error("sc"), c);
}
function Bx(a, c, e, f, g) {
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
        h.info(Error("Sb`" + p.message));
      }
    }
  }
  switch (c.getType()) {
    case "pq-clear":
      g = g || Cx(c);
      c = kn(c);
      h = X(e, "PendingQueueCommands");
      Rv(h, [c], [c, []]);
      g.b = [];
      Dx(a, g, e, f);
      break;
    case "pq-clear-sent":
      g = g || Cx(c);
      h = g.b;
      h.length > 0 &&
        ((h = h[h.length - 1].l),
        (k = X(e, "PendingQueueCommands")),
        (c = kn(c)),
        Rv(k, [c], [c, h]),
        (g.b = []));
      Dx(a, g, e, f);
      break;
    case "pq-clear-sent-bundle":
      g = g || Cx(c);
      h = g.b.shift().l;
      k = X(e, "PendingQueueCommands");
      c = kn(c);
      Rv(k, [c], [c, h]);
      Dx(a, g, e, f);
      break;
    case "pq-mark-sent":
      g = g || Cx(c);
      h = c.A;
      c.F && (g.b = []);
      for (c = 0; c < h.length; c++)
        ((k = h[c]), (l = {}), (l.l = k.j), (l.s = k.sessionId), (l.r = k.o), g.b.push(l));
      Dx(a, g, e, f);
      break;
    case "update-record":
      Dx(a, g || Cx(c), e, f);
      break;
    case "pq-write-commands":
      a = c.B;
      g = {};
      g.pqcKey = [c.F, c.A];
      g.c = a;
      Hv(X(e, "PendingQueueCommands"), g);
      Z(f);
      break;
    case "pq-delete-commands":
      e = X(e, "PendingQueueCommands");
      a = c.B;
      Rv(e, [a], [a, c.A]);
      Z(f);
      break;
    default:
      throw Error("uc`" + c.getType());
  }
}
function Dx(a, c, e, f) {
  a.j && Lw(a.j, c);
  Hv(X(e, "PendingQueues"), c);
  Z(f);
}
function Cx(a) {
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
function Ex() {}
function Iv(a, c, e, f, g, h, k, l) {
  e ? Uv(f.get(c), Sa(a.j, a, f, e, h || [], g, k || null, l || null)) : Z(g);
}
Ex.prototype.j = function (a, c, e, f, g, h, k) {
  k = k.target.result;
  g != null && h != null && ((h.v = Date.now()), Ow(g, k, h));
  if (k !== void 0) {
    for (var l in c) ((h = c[l]), yb(e, l) >= 0 ? (k[l] = h != null ? h : null) : (k[l] = h));
    Hv(a, k);
    Z(f);
    g != null && Mw(g, c, e);
  } else throw Error("vc");
};
function ax(a, c, e, f) {
  Fx(
    c,
    function (g) {
      for (var h = 0; h < e.length; h++) Bb(g, e[h]);
      h = {};
      h.dataType = c;
      h.documentIds = g;
      Hv(X(a, "ProfileData"), h);
      Z(f);
    },
    a,
  );
}
function Fx(a, c, e) {
  Uv(X(e, "ProfileData").get(a), function (f) {
    f = f.target.result;
    c(f && f.documentIds ? f.documentIds : []);
  });
}
function Gx(a, c, e, f, g) {
  np.call(this, g);
  this.j = a;
  this.v = e;
  this.o = f;
}
F(Gx, np);
function Hx(a, c, e) {
  if (a.j.v) hr(Ta(c, []));
  else if (yb(a.j.j.objectStoreNames, "Users") >= 0) {
    e = Bw(a.j, ["Users"], 71, e, !1, void 0, void 0, void 0, 1337522, !0);
    var f = [];
    Uv(X(e, "Users").get(Xv.lowerBound(-Infinity)), function (g) {
      if ((g = g.target.result)) {
        var h = new mp(g.id, !1, a.ja);
        V(h, "emailAddress", g.emailAddress);
        V(h, "locale", g.locale);
        g.fastTrack != null && Jl(h, "fastTrack", !!g.fastTrack);
        g.internal != null && Jl(h, "internal", !!g.internal);
        g.optInReasons != null && V(h, "optInReasons", g.optInReasons);
        g.optInTime != null && V(h, "optInTime", g.optInTime);
        h.o = !1;
        f = [h];
      }
    });
    vw(e, function () {
      return c(f);
    });
  } else (a.o.log(Error("wc")), hr(Ta(c, [])));
}
Gx.prototype.ea = function (a) {
  if (!this.Z(a)) throw Error("nc`" + a.getType());
  return ["Users"];
};
Gx.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = X(c, "Users");
      a.o ? (c.add(a.j), Z(e)) : Iv(this.v, kn(a), a.j, c, e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function Ix(a, c, e, f, g, h, k, l, p, q) {
  q = q === void 0 ? !1 : q;
  Qo.call(this);
  var r = this;
  this.R = f;
  this.Ea = new nr(this);
  this.A = new Kv();
  this.v = h;
  this.o = new Ex();
  this.O = new cn();
  lk(this, this.O);
  this.j = a;
  dn(this.O, this.j.o, function (x) {
    r.ga.dispatchEvent(new Po(x.newVersion));
  });
  this.Fa = q || !1;
  this.P = c;
  this.I = new zx(this.j, this.A, this.P, this.R, h);
  Ro(this, this.I);
  this.C = Jx(this, this.P, k);
  Ro(this, this.C);
  this.Y = new hx(e);
  this.L = new Gx(a, this.A, this.o, f, h);
  Ro(this, this.L);
  this.Ga = new Ew(a);
}
F(Ix, Qo);
function Jx(a, c, e) {
  e = e === void 0 ? new bx() : e;
  return e.j(a.j, a.A, a.o, c, a.R, a.v, a.Fa);
}
function io(a, c, e, f, g, h, k) {
  k = k === void 0 ? !1 : k;
  if (a.j.v) hr(f);
  else {
    for (var l = {}, p = 0; p < c.length; p++) {
      var q = c[p];
      q = Kx(a, q).ea(q);
      for (var r = 0; r < q.length; r++) l[q[r]] = !0;
    }
    p = "Error writing records (" + An(e) + ")";
    q = [];
    r = 0;
    for (var x in l) q[r++] = x;
    l = U(a.v, "docs-eaiturd") || (U(a.v, "docs-eirdfi") && Db(q, ["Impressions"])) ? !0 : !1;
    e = Bw(a.j, q, e, g, !0, p, void 0, void 0, h, k, l);
    vw(e, f);
    f = [];
    for (g = 0; g < c.length; g++) f.push(pw(e.O));
    for (g = 0; g < c.length; g++) ((h = c[g]), Kx(a, h).aa(h, e, f[g]));
  }
}
function Kx(a, c) {
  if (gn(c)) {
    c = c.B;
    a = c in a.B ? a.B[c] : null;
    if (!a) throw Error("xc`" + c);
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
  if (c == "document-lock") return a.Y;
  if (c == "append-commands" || c == "write-trix") return a.C;
  if (c == "update-application-metadata") {
    if ((a = a.Nb())) return a;
  } else if (c == "append-template-commands") {
    if ((a = a.pd())) return a;
  } else if (c == "update-pinned-docs") return a.md();
  throw Error("yc`" + c);
}
Ix.prototype.initialize = function (a, c) {
  var e = this,
    f = this.ib();
  if (Aw(this.j) >= f) throw Error("zc");
  Cw(
    this.j,
    f,
    function (g) {
      return Lx(e, c, g);
    },
    Wv("Error initializing the database.", c),
    a,
  );
};
function Lx(a, c, e) {
  try {
    a.hb(e);
  } catch (f) {
    hr(function () {
      return c(new zn(1, "Failed to initialize database.", f));
    });
  }
}
function Mx(a, c, e) {
  Cw(
    a.j,
    a.ib(),
    function (f) {
      return Nx(a, e, f);
    },
    Wv("Error upgrading the database.", e),
    c,
  );
}
function Nx(a, c, e) {
  try {
    a.sc(e);
  } catch (f) {
    hr(function () {
      return c(new zn(1, "Failed to upgrade database.", f));
    });
  }
}
Ix.prototype.N = function () {
  bl(this.Ea, this.Y, this.I, this.C, this.L, this.Ga);
  Qo.prototype.N.call(this);
};
function Ox(a, c, e, f) {
  W.call(this);
  this.j = a;
  this.v = f;
  this.o = e;
}
F(Ox, Zo);
function ap(a, c, e) {
  var f = Bw(a.j, ["ProfileData"], 63, e),
    g = [];
  Uv(Lv(X(f, "ProfileData"), ["synchints"], ["synchints", []]), function (h) {
    (h = h.target.result) ? (g.push(Px(a, h.value)), h.continue()) : (Vv(f), c(g));
  });
}
Ox.prototype.ea = function () {
  return ["ProfileData"];
};
Ox.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = X(c, "ProfileData");
      a.o ? (Hv(c, a.j), Z(e)) : Iv(this.o, kn(a), a.j, c, e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function Px(a, c) {
  var e = c.sourceApp;
  if (!Db(c.dataType, ["synchints", "" + e])) throw Error("rc");
  var f = c.docIds,
    g = c.lastUpdatedTimestamp;
  c = c.docIdentifiers;
  a = new Vo(!1, e, a.v);
  c && c.length > 0
    ? Wo(
        a,
        c.map(function (h) {
          return Uo(h);
        }),
      )
    : f && f.length > 0 && Xo(a, f);
  V(a, "lastUpdatedTimestamp", g);
  a.o = !1;
  return a;
}
function Qx() {
  W.call(this);
}
F(Qx, bp);
Qx.prototype.ea = function () {
  return ["SyncObjects"];
};
Qx.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = X(c, "SyncObjects");
      if (a.o) Hv(c, a.j);
      else throw Error("Ac");
      Z(e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function Rx(a, c, e) {
  hp.call(this, e);
  this.j = a;
  this.o = c;
}
F(Rx, hp);
function jp(a, c, e) {
  var f = Bw(a.j, ["ProfileData"], 32, e);
  Uv(X(f, "ProfileData").get("syncstats"), function (g) {
    Vv(f);
    (g = g.target.result) ? c(Sx(a, g)) : c(null);
  });
}
function Sx(a, c) {
  if (c.dataType != "syncstats") throw Error("rc");
  a = new cp(
    !1,
    a.ja,
    Np(function () {
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
      fp(
        a,
        f,
        g.count,
        g.modelSyncFailCount || 0,
        g.serverTime,
        h != null ? Ch(h) : null,
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
  if (f != null) for (e = 0; e < f.length; e++) dp(a, f[e].documentId, f[e].timestamp);
  f = c.relevantDocuments;
  f != null && V(a, "relevantDocuments", f);
  c = c.backgroundSyncDenylist;
  if (c != null)
    for (var k in c)
      ((f = c[k]),
        (f = Mn(
          Ln(
            Kn(
              Jn(
                In(Hn(Gn(k), f.retryCount || 0), f.nextSyncTimestampMillis || Date.now()),
                f.firstFailTimestampMillis,
              ),
              f.lastFailTimestampMillis,
            ),
            f.documentDiskSize,
          ),
        )),
        ep(a, f));
  a.o = !1;
  return a;
}
Rx.prototype.ea = function () {
  return ["ProfileData"];
};
Rx.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = X(c, "ProfileData");
      a.o ? (Hv(c, a.j), Z(e)) : Iv(this.o, "syncstats", a.j, c, e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function Tx() {
  W.call(this);
}
F(Tx, op);
Tx.prototype.ea = function () {
  return ["FontMetadata"];
};
Tx.prototype.aa = function (a, c, e) {
  c = X(c, "FontMetadata");
  switch (a.getType()) {
    case "update-record":
      if (a.o) (Hv(c, a.j), Z(e));
      else throw Error("Bc");
      break;
    case "delete-record":
      Rv(c, kn(a));
      Z(e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function Ux(a, c, e, f, g, h, k, l, p, q) {
  Ix.call(this, a, c, e, f, g, h, k, l, p, q === void 0 ? !1 : q);
  a = this.j;
  e = this.A;
  this.U = new fx(a, e, this.o, this.v);
  Ro(this, this.U);
  this.va = new Tx(a, e, this.v);
  Ro(this, this.va);
  this.na = new Qx(a, e, this.v);
  Ro(this, this.na);
  this.Ia = new ux(a);
  this.Ja = new Rw(a, this.o, h);
  this.M = new Rx(a, this.o, this.v);
  Ro(this, this.M);
  this.S = new Gv(a, this.o, this.v);
  Ro(this, this.S);
  this.ia = new Ox(a, e, this.o, h);
  Ro(this, this.ia);
  this.K = new vx(new yx(this.o), h);
  Ro(this, this.K);
  this.V = new Fw(this.j, this.A, this.o, this.v);
  Ro(this, this.V);
  this.H = new cx(a, e, c, this.o, this.v);
  Ro(this, this.H);
  this.ha = new tx(a, e, h);
  Ro(this, this.ha);
}
F(Ux, Ix);
C = Ux.prototype;
C.ib = A(6);
C.Nb = w("H");
C.od = w("M");
C.nd = w("ia");
C.md = w("K");
C.lc = A(!1);
C.sc = u();
C.hb = function (a) {
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
C.N = function () {
  bl(this.U, this.va, this.na, this.Ia, this.Ja, this.M, this.S, this.V, this.H, this.ha, this.K);
  Ix.prototype.N.call(this);
};
"ApplicationMetadata Comments DocumentCommandsMetadataStaging DocumentCommandsMetadata DocumentCommandsStaging DocumentCommands DocumentEntities DocumentLocks Documents FileEntities FontMetadata Impressions NewDocumentIds PendingQueueCommands PendingQueues ProfileData SyncObjects Users"
  .split(" ")
  .sort(function (a, c) {
    return a > c ? 1 : a < c ? -1 : 0;
  });
function Vx(a, c, e) {
  W.call(this);
  this.j = e;
}
F(Vx, ko);
Vx.prototype.ea = function () {
  return ["BlobMetadata"];
};
Vx.prototype.aa = function (a, c, e) {
  c = X(c, "BlobMetadata");
  switch (a.getType()) {
    case "update-record":
      a.o ? (c.add(a.j), Z(e)) : Iv(this.j, kn(a), a.j, c, e);
      break;
    case "delete-record":
      Rv(c, kn(a));
      Z(e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function Wx(a, c, e, f, g, h, k) {
  Sw.call(this, a, c, e, f, g, h, k === void 0 ? !1 : k);
}
F(Wx, Sw);
Wx.prototype.ea = function (a) {
  var c = Sw.prototype.ea.call(this, a);
  a.getType() == "delete-record" && c.push("BlobMetadata");
  return c;
};
Wx.prototype.v = function (a, c, e) {
  var f = pw(c.O);
  Sw.prototype.v.call(this, a, c, e);
  a = kn(a);
  Rv(X(c, "BlobMetadata"), [a], [a, []]);
  Z(f);
};
function Xx() {}
F(Xx, bx);
Xx.prototype.j = function (a, c, e, f, g, h, k) {
  return new Wx(a, c, e, f, g, h, k === void 0 ? !1 : k);
};
function Yx(a, c, e, f, g, h, k, l, p, q) {
  k = k === void 0 ? new Xx() : k;
  Ux.call(this, a, c, e, f, g, h, k, l, p, q === void 0 ? !1 : q);
  this.Ka = new Vx(this.j, this.A, this.o, h);
  Ro(this, this.Ka);
}
F(Yx, Ux);
Yx.prototype.ib = A(7);
Yx.prototype.lc = A(!0);
Yx.prototype.hb = function (a) {
  Ux.prototype.hb.call(this, a);
  Zx(a);
};
Yx.prototype.sc = function (a) {
  Zx(a);
};
function Zx(a) {
  a.db.createObjectStore("BlobMetadata", { keyPath: ["d", "p"] });
}
function $x(a, c, e, f) {
  kp.call(this, a, c);
  new ln(c, f);
}
F($x, kp);
$x.prototype.aa = function (a, c, e) {
  switch (a.getType()) {
    case "append-template-commands":
      c = X(c, "TemplateCommands");
      a.A && Rv(c, [a.B], [a.B, []]);
      a = a.F;
      for (c = 0; c < a.length; ++c) throw Error("Mb`" + typeof a[c]);
      Z(e);
      break;
    default:
      throw Error("Lb`" + a.getType());
  }
};
function ay(a, c, e, f) {
  lp.call(this, e, f);
  this.j = new Ex();
}
F(ay, lp);
ay.prototype.ea = function () {
  return ["TemplateCommands", "TemplateCreationMetadata", "TemplateMetadata"];
};
ay.prototype.aa = function (a, c, e) {
  var f = a.B;
  switch (f) {
    case "templateMetadata":
      f = "TemplateMetadata";
      break;
    case "templateCreationMetadata":
      f = "TemplateCreationMetadata";
      break;
    default:
      throw Error("Cc`" + f);
  }
  f = X(c, f);
  switch (a.getType()) {
    case "update-record":
      a.o ? (Hv(f, a.j), Z(e)) : Iv(this.j, kn(a), a.j, f, e);
      break;
    case "delete-record":
      Rv(f, kn(a));
      Z(e);
      break;
    case "append-template-commands":
      this.za(a.Aa()).aa(a, c, e);
      break;
    default:
      throw Error("Kb`" + a.getType());
  }
};
function by(a, c, e, f, g, h, k, l, p, q, r) {
  Yx.call(this, a, c, f, g, h, l, void 0, p, q, r === void 0 ? !1 : r);
  a = ["kix", "punch", "ritz"];
  c = this.j;
  if (!e) for (e = {}, f = new Gp(), g = 0; g < a.length; g++) e[a[g]] = new $x(a[g], f, c, k);
  this.oa = new ay(c, this.A, e, l);
  Ro(this, this.oa);
}
F(by, Yx);
C = by.prototype;
C.ib = A(8);
C.pd = w("oa");
C.lc = A(!0);
C.hb = function (a) {
  Yx.prototype.hb.call(this, a);
  cy(a);
};
C.sc = function (a) {
  var c = a.db;
  yb(c.objectStoreNames, "DocumentCommandsStaging") >= 0 &&
    c.deleteObjectStore("DocumentCommandsStaging");
  yb(c.objectStoreNames, "DocumentCommandsMetadata") >= 0 &&
    c.deleteObjectStore("DocumentCommandsMetadata");
  yb(c.objectStoreNames, "DocumentCommandsMetadataStaging") >= 0 &&
    c.deleteObjectStore("DocumentCommandsMetadataStaging");
  cy(a);
};
function cy(a) {
  a = a.db;
  a.createObjectStore("TemplateMetadata", { keyPath: ["id"] });
  a.createObjectStore("TemplateCreationMetadata", { keyPath: ["id"] });
  a.createObjectStore("TemplateCommands", { keyPath: "dcKey" });
}
function dy(a) {
  var c = window.isSecureContext == void 0 ? !0 : window.isSecureContext;
  return (
    (Kb || (Lb && U(a, "docs-offline-edose"))) &&
    !(!K.indexedDB && !K.webkitIndexedDB) &&
    (!!K.BroadcastChannel || !!K.SharedWorker) &&
    c
  );
}
function ey(a, c, e, f, g, h, k, l, p, q, r, x, y, z, B, I, D) {
  z = z === void 0 ? !1 : z;
  B = B === void 0 ? null : B;
  D = D === void 0 ? !1 : D;
  T.call(this);
  this.B = a;
  this.na = c;
  this.ca = e;
  this.S = f;
  this.ga = l;
  this.U = g;
  this.I = p;
  this.V = h;
  this.ia = z;
  this.j = B;
  this.o = {};
  this.v = {};
  this.D = -1;
  this.C = new nk();
  this.R = !1;
  this.K = k;
  this.oa = r;
  this.P = x;
  this.O = y;
  this.Y = I;
  this.A = q;
  this.H = D || !1;
}
F(ey, T);
function fy(a, c) {
  var e = c.ib();
  a.D = Math.max(a.D, e);
  a.o[e] = c;
}
ey.prototype.create = function (a, c) {
  var e = this;
  if (this.R) throw Error("Dc");
  this.R = !0;
  if (isNaN(this.U)) throw Error("Ec");
  if (this.j) qz(this, this.j);
  else {
    if (!dy(this.A)) throw Error("Fc");
    Dw(
      function (f) {
        return qz(e, f);
      },
      a,
      this.B,
      function (f) {
        Hk(f.J, { databaseOpenFailure: "true" });
        rk(e.C, f);
        rz(e, "Unable to open Docs IDB instance.", Bn(f));
      },
      this.ia,
      this.ga,
      this.I,
      this.A,
      c || void 0,
    );
  }
  return this.C;
};
function qz(a, c) {
  a.j = c;
  if (a.S)
    for (var e = a.S(c, a.I), f = 0; f < e.length; f++)
      for (var g, h = a, k = e[f], l = k.Md, p = k.Aa(), q = k.ue; q <= l; ++q)
        ((g = h.v[q]) || (g = h.v[q] = {}), (g[p] = k));
  e = new mx(a.na, a.ca, c, a.B, a.A, void 0, a.Y);
  a.D == -1 &&
    (fy(a, new Ux(c, a.v[6] || {}, e, a.B, a.K, a.A, void 0, a.P, a.O, a.H)),
    fy(a, new Yx(c, a.v[7] || {}, e, a.B, a.K, a.A, a.oa, a.P, a.O, a.H)),
    fy(a, new by(c, a.v[8] || {}, null, e, a.B, a.K, a.I, a.A, a.P, a.O, a.H)));
  sz(a);
}
function sz(a) {
  var c = Math.min(a.U, a.D),
    e = tz(a);
  !a.V && e <= 0
    ? uz(
        a,
        new zn(4, "Schema initialization cannot be performed when schema updates are prevented."),
      )
    : !a.V || e >= c
      ? a.M()
      : vz(a, e, c)
        ? wz(a, e + 1, c, Sa(a.M, a, null), function (f) {
            rk(a.C, f);
            rz(a, "Unable to upgrade the Docs IDB database.", Bn(f));
          })
        : a.o[c].initialize(
            function () {
              return a.M();
            },
            function (f) {
              return uz(a, f);
            },
          );
}
function uz(a, c) {
  rk(a.C, c);
  rz(a, "Unable to initialize the storage adapter.", Bn(c));
}
function vz(a, c, e) {
  for (c += 1; c <= e; ++c) if (a.o[c] == null || !a.o[c].lc()) return !1;
  return !0;
}
function wz(a, c, e, f, g) {
  Mx(a.o[c], Sa(a.ha, a, c, e, f, g), g);
}
ey.prototype.ha = function (a, c, e, f) {
  a = tz(this);
  a == c ? e() : wz(this, a + 1, c, e, f);
};
ey.prototype.M = function () {
  var a = tz(this);
  if ((a = this.o[a])) {
    a = new eo(a, U(this.A, "docs-eiwot") || U(this.A, "docs-eiwotv2"));
    this.j && lk(a, this.j);
    for (var c in this.o) lk(a, this.o[c]);
    for (var e in this.v) {
      c = this.v[e];
      for (var f in c) lk(a, c[f]);
    }
    pk(this.C, a);
  } else (this.B.info(Error("Gc`" + (this.j ? Aw(this.j) : -1))), pk(this.C, null));
};
function tz(a) {
  var c = a.j ? Aw(a.j) : -1;
  c > 1 && c < 6 && a.B.info(Error("Hc`" + c));
  return c < 6 ? -1 : c;
}
function rz(a, c, e) {
  for (var f in a.o) a.o[f].dispose();
  for (var g in a.v) {
    f = a.v[g];
    for (var h in f) f[h].dispose();
  }
  a.j && ((g = a.j), (g.H = c), e && (g.O.docsDBDisposeContext_LocalStoreErrorMessage = e));
  al(a.j);
}
function xz(a, c) {
  c = c === void 0 ? !1 : c;
  Ya.call(this, a);
  this.v = c;
}
F(xz, Ya);
function yz(a) {
  this.j = a;
}
function zz(a, c, e, f, g, h, k, l) {
  T.call(this);
  this.B = a;
  this.C = c;
  this.o = e;
  this.I = f;
  this.K = h ? h : "DefaultLocalStoreSessionId";
  this.M = k || new Gp();
  this.D = g;
  this.H = !!l;
  this.v = null;
  this.A = new cn();
  cl(this, this.A);
  this.j = Az(this);
}
F(zz, T);
function Az(a) {
  a.j && al(a.j);
  var c = Bl(a.o, "lssv");
  return new ey(a.B, a.K, 0, a.Vd.bind(a), c, !0, new kx(), a.I, a.D, a.o);
}
function Bz(a) {
  if (a.v) return a.v;
  a.v = Cz(a);
  return a.v.Pa(function (c) {
    a.Cb();
    throw c;
  });
}
function yv(a) {
  return Bz(a).then(function (c) {
    return new Vi(function (e, f) {
      Hx(c.j.L, e, f);
    }).then(function (e) {
      return Dz(a, e) ? new yz(c) : null;
    });
  });
}
function Ez(a) {
  return Bz(a).then(function (c) {
    return new Vi(function (e, f) {
      Hx(c.j.L, e, f);
    }).then(function (e) {
      if (!Dz(a, e)) {
        var f = {
          usersLength: e.length,
          allowNonOfflineEnabledUser: a.H,
          storedUserMatchesFlag:
            e.length == 0 ? "no users" : e[0].X() == Cl(a.o, "docs-offline-lsuid"),
        };
        return $i()
          .then(function () {
            return vu(a.o, f, a.B);
          })
          .then(function () {
            return new Vi(function (g, h) {
              dx(c.j.Nb(), g, h);
            });
          })
          .Pa(function (g) {
            var h = a.B,
              k = h.info;
            if (ah(g)) g = g.J;
            else if (!(g instanceof Error)) throw dh("ga").J;
            k.call(h, g);
          })
          .then(function (g) {
            f.applicationMetadataLength = g ? g.length : null;
            throw Hk(
              new xz("Failed to read LocalStore due to invalid user", !g || g.length == 0),
              f,
            );
          });
      }
      return new yz(c);
    });
  });
}
function Dz(a, c) {
  return c.length == 1 && (a.H || c[0].X() == Cl(a.o, "docs-offline-lsuid"));
}
C = zz.prototype;
C.get = function () {
  return Ez(this).then(function (a) {
    return a.j;
  });
};
function Cz(a) {
  return new Vi(function (c, e) {
    Jj(a.j.create(a.Cb.bind(a)), c, e);
  }).then(a.je.bind(a));
}
C.je = function (a) {
  var c = this;
  if (!a) throw Error("Ic");
  if (this.C) {
    var e = new Fv(a, this.C);
    cl(this, e);
  }
  fo(a);
  dn(this.A, a.j.j.C, function () {
    c.Cb();
  });
  dn(this.A, a.j.ga, function () {
    c.Cb();
  });
  return a;
};
C.Cb = function () {
  al(this.j);
  this.j = Az(this);
  this.v = null;
};
C.Vd = function (a) {
  var c = this.M,
    e = this.D,
    f = new Yv("kix", 6, 8, c, a, e),
    g = new Yv("punch", 6, 8, c, a, e),
    h = new Yv("ritz", 6, 8, c, a, e);
  a = new Yv("drawing", 6, 8, c, a, e);
  return [h, f, g, a];
};
C.N = function () {
  al(this.j);
  T.prototype.N.call(this);
};
typeof Blob === "function" && Blob.prototype.hasOwnProperty("size");
new (function () {
  this.j = {};
  this.j["X-Same-Domain"] = "1";
})();
function Fz(a) {
  return (a = a.exec(lb())) ? a[1] : "";
}
var db = (function () {
  if (Gb) return Fz(/Firefox\/([0-9.]+)/);
  if (Kb) {
    if (xb() || (jb && mb && mb.platform ? mb.platform === "macOS" : pb("Macintosh"))) {
      var a = Fz(/CriOS\/([0-9.]+)/);
      if (a) return a;
    }
    return Fz(/Chrome\/([0-9.]+)/);
  }
  if (Lb && !xb()) return Fz(/Version\/([0-9.]+)/);
  if (Hb || Ib) {
    if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(lb()))) return a[1] + "." + a[2];
  } else if (Jb) return (a = Fz(/Android\s+([0-9.]+)/)) ? a : Fz(/Version\/([0-9.]+)/);
  return "";
})();
function Gz() {
  var a = this;
  this.promise = new Promise(function (c, e) {
    a.resolve = c;
    a.reject = e;
  });
}
function Hz(a) {
  this.v = window.crashReport;
  this.B = a;
  this.A = new Gz();
  this.j = 0;
  this.o = new Map();
}
Hz.prototype.initialize = function (a) {
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
        B.O(2, 3);
        return B.B(c.v.initialize(a), 5);
      case 5:
        c.A.resolve();
        c.j = 2;
        e = G(c.o);
        f = e.next();
        try {
          for (; !f.done; f = e.next())
            ((h = f.value),
              (k = G(h)),
              (l = k.next().value),
              (p = k.next().value),
              (q = l),
              (r = p),
              (x = void 0),
              c.set(q, (x = r) != null ? x : ""));
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
        z = Error("Jc", { cause: y });
        z.reportSeverity = "warning";
        c.A.reject(z);
        B.xa(3);
        break;
      case 4:
        return B.return(c.A.promise);
    }
  });
};
Hz.prototype.Ed = function () {
  return this.j !== 0;
};
Hz.prototype.set = function (a, c) {
  if (this.j !== 3)
    if (this.j !== 2)
      this.o.size < 100 || this.o.has(a) ? this.o.set(a, c) : this.o.set("cache_full", "true");
    else
      try {
        this.v.set(a, c);
      } catch (e) {
        this.B.zb("Failed to set key " + a, e instanceof Error ? e : Error(String(e)));
      }
};
Hz.prototype.delete = function (a) {
  if (this.j !== 3)
    if (this.j !== 2) this.o.delete(a);
    else
      try {
        typeof this.v.delete === "function" ? this.v.delete(a) : this.v.remove(a);
      } catch (c) {
        this.B.zb("Failed to delete key " + a, c instanceof Error ? c : Error(String(c)));
      }
};
function Iz() {
  this.j = !1;
}
Iz.prototype.initialize = function () {
  this.j = !0;
  return Promise.resolve();
};
Iz.prototype.Ed = w("j");
Iz.prototype.set = u();
Iz.prototype.delete = u();
function Jz() {}
Jz.prototype.zb = u();
var Kz = new Iz();
var Lz = ["SEVERE", "FATAL"];
function Mz() {
  this.o = this.v = 1;
  this.j = new Ir();
}
Mz.prototype.Hd = function (a, c) {
  var e = c == null ? void 0 : c.vc.get("apps_telemetry.outgoing_severity");
  a = e != null ? e : a.v;
  if ((a = this.v === 1 && !!a && Lz.includes(a.toUpperCase()))) this.v = 2;
  c = c == null ? void 0 : c.vc.get("apps_telemetry.incoming_severity");
  if ((e = this.o === 1 && !!c && !!e && c.toUpperCase() !== e.toUpperCase())) this.o = 2;
  if (a || e)
    ((e = $e(this.j, Or, 3)),
      (c = new Nr()),
      (c = uf(c, 1, this.v)),
      (c = uf(c, 2, this.o)),
      N(e, Nr, 5, c),
      Nz(this));
};
Mz.prototype.wa = function (a) {
  a: {
    var c = $e(this.j, Kr, 1);
    var e = Mr;
    Ce(c);
    if (void 0 === Sc) {
      if (We(c, e, 4) !== 4) {
        c = void 0;
        break a;
      }
    } else Ue(c.G, void 0, e, 4);
    c = $e(c, Jr, 4);
  }
  c.wa(a);
  Nz(this);
};
function Nz(a) {
  Kz.set("appsTelemetryCrashReportData", $f(a.j));
}
function nu(a) {
  a = a === void 0 ? {} : a;
  if (!Kz.Ed()) {
    var c = void 0;
    c = c === void 0 ? new Jz() : c;
    try {
      var e = at(ti);
    } catch (f) {
      e = !1;
    }
    Kz = e && window.crashReport ? new Hz(c) : new Iz();
    Kz.initialize();
  }
  return bt(a, new Mz());
}
function Oz(a, c) {
  this.v = a;
  this.F = c;
  this.o = !1;
  this.A = function () {
    return Date.now();
  };
  this.B = this.A();
}
Oz.prototype.setInterval = function (a) {
  this.v = a;
  this.j && this.o ? (this.stop(), this.start()) : this.j && this.stop();
};
Oz.prototype.start = function () {
  var a = this;
  this.o = !0;
  this.j ||
    ((this.j = setTimeout(function () {
      Pz(a);
    }, this.v)),
    (this.B = this.A()));
};
Oz.prototype.stop = function () {
  this.o = !1;
  this.j && (clearTimeout(this.j), (this.j = void 0));
};
function Pz(a) {
  if (a.o) {
    var c = Math.max(a.A() - a.B, 0);
    c < a.v * 0.8
      ? (a.j = setTimeout(function () {
          Pz(a);
        }, a.v - c))
      : (a.j && (clearTimeout(a.j), (a.j = void 0)), a.F(), a.o && (a.stop(), a.start()));
  } else a.j = void 0;
}
function Qz(a) {
  this.G = M(a);
}
F(Qz, Q);
Qz.prototype.Cc = function () {
  return pf(this, 1);
};
function Rz(a) {
  this.G = M(a);
}
F(Rz, Q);
function Sz(a) {
  this.G = M(a);
}
F(Sz, Q);
function Tz(a) {
  ff(Uz, Rz, 1, a);
}
var Vz = Dg(Sz);
function Wz(a) {
  this.G = M(a);
}
F(Wz, Q);
var Xz = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"],
  Uz = new Sz(),
  Yz = null;
function Zz(a, c) {
  c = c === void 0 ? Xz : c;
  if (!Yz) {
    var e;
    a = (e = a.navigator) == null ? void 0 : e.userAgentData;
    if (
      !a ||
      typeof a.getHighEntropyValues !== "function" ||
      (a.brands && typeof a.brands.map !== "function")
    )
      return Promise.reject(Error("Kc"));
    Tz(
      (a.brands || []).map(function (g) {
        var h = new Rz();
        h = tf(h, 1, g.brand);
        return tf(h, 2, g.version);
      }),
    );
    typeof a.mobile === "boolean" && qf(Uz, 2, a.mobile);
    Yz = a.getHighEntropyValues(c);
  }
  var f = new Set(c);
  return Yz.then(function (g) {
    var h = Uz.clone();
    f.has("platform") && tf(h, 3, g.platform);
    f.has("platformVersion") && tf(h, 4, g.platformVersion);
    f.has("architecture") && tf(h, 5, g.architecture);
    f.has("model") && tf(h, 6, g.model);
    f.has("uaFullVersion") && tf(h, 7, g.uaFullVersion);
    return $f(h);
  }).catch(function () {
    return $f(Uz);
  });
}
function $z(a) {
  this.G = M(a);
}
F($z, Q);
function aA(a) {
  return uf(a, 1, 1);
}
function bA(a) {
  this.G = M(a, 19);
}
F(bA, Q);
bA.prototype.mb = function (a) {
  return uf(this, 2, a);
};
function cA(a, c) {
  this.Ba = c = c === void 0 ? !1 : c;
  this.o = this.locale = null;
  this.A = 0;
  this.v = !1;
  this.j = new bA();
  Number.isInteger(a) && this.j.mb(a);
  c || (this.locale = document.documentElement.getAttribute("lang"));
  dA(this, new $z());
}
cA.prototype.mb = function (a) {
  this.j.mb(a);
  return this;
};
function dA(a, c) {
  N(a.j, $z, 1, c);
  pf(c, 1) || aA(c);
  a.Ba || ((c = eA(a)), of(c, 5) || tf(c, 5, a.locale));
  a.o && ((c = eA(a)), cf(c, Sz, 9) || N(c, Sz, 9, a.o));
}
function fA(a, c) {
  a.A = c;
}
function gA(a) {
  var c = c === void 0 ? Xz : c;
  var e = a.Ba ? void 0 : window;
  e
    ? Zz(e, c)
        .then(function (f) {
          a.o = Vz(f != null ? f : "[]");
          f = eA(a);
          N(f, Sz, 9, a.o);
          return !0;
        })
        .catch(A(!1))
    : Promise.resolve(!1);
}
function eA(a) {
  var c = cf(a.j, $z, 1);
  c || ((c = new $z()), dA(a, c));
  a = c;
  c = cf(a, Wz, 11);
  c || ((c = new Wz()), N(a, Wz, 11, c));
  return c;
}
function hA(a, c, e, f, g, h, k) {
  e = e === void 0 ? 0 : e;
  f = f === void 0 ? 0 : f;
  g = g === void 0 ? null : g;
  h = h === void 0 ? 0 : h;
  k = k === void 0 ? 0 : k;
  if (!a.Ba) {
    var l = eA(a);
    var p = new Qz();
    p = uf(p, 1, a.A);
    p = qf(p, 2, a.v);
    f = rf(p, 3, f > 0 ? f : void 0);
    f = rf(f, 4, h > 0 ? h : void 0);
    f = rf(f, 5, k > 0 ? k : void 0);
    f = bg(f);
    N(l, Qz, 10, f);
  }
  a = a.j.clone();
  l = Date.now().toString();
  a = Ie(a, 4, l == null ? l : Hd(l));
  c = ff(a, av, 3, c.slice());
  g &&
    ((a = new Yu()),
    (g = rf(a, 13, g)),
    (a = new Zu()),
    (g = N(a, Yu, 2, g)),
    (a = new $u()),
    (g = N(a, Zu, 1, g)),
    (g = uf(g, 2, 9)),
    N(c, $u, 18, g));
  e && sf(c, 14, e);
  return c;
}
function iA(a) {
  this.o = this.j = this.v = a;
}
iA.prototype.reset = function () {
  this.o = this.j = this.v;
};
function jA(a) {
  this.G = M(a, 8);
}
F(jA, Q);
var kA = Dg(jA);
function lA(a) {
  this.G = M(a);
}
F(lA, Q);
var mA = new Cg(175237375, jA, lA);
function nA(a) {
  T.call(this);
  var c = this;
  this.o = [];
  this.R = "";
  this.S = this.K = -1;
  this.D = null;
  this.I = this.B = 0;
  this.H = null;
  this.V = this.U = 0;
  this.Y = 1;
  this.Za = 0;
  this.Va = a.Va;
  this.Sa = a.Sa || u();
  this.A = new cA(a.Va, a.Ba);
  this.la = a.la || null;
  this.Ya = a.Ya || null;
  this.M = 1e3;
  this.C = a.Ie || null;
  this.Oa = a.Oa || null;
  this.gb = a.gb || !1;
  this.withCredentials = !a.wd;
  this.Ba = a.Ba || !1;
  this.P =
    typeof URLSearchParams !== "undefined" &&
    !!new URL(oA()).searchParams &&
    !!new URL(oA()).searchParams.set;
  var e = aA(new $z());
  dA(this.A, e);
  this.v = new iA(1e4);
  a = pA(this, a.sd);
  this.j = new Oz(this.v.j, a);
  this.O = new Oz(6e5, a);
  this.gb || this.O.start();
  if (!this.Ba) {
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        qA(c);
        var h;
        (h = c.H) == null || h.flush();
      }
    });
    var f, g;
    (f = window) == null ||
      (g = f.addEventListener) == null ||
      g.call(f, "pagehide", function () {
        qA(c);
        var h;
        (h = c.H) == null || h.flush();
      });
  }
}
F(nA, T);
function pA(a, c) {
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
nA.prototype.N = function () {
  qA(this);
  this.j.stop();
  this.O.stop();
  T.prototype.N.call(this);
};
function iv(a, c) {
  if (c instanceof av) a.log(c);
  else
    try {
      var e = bv(new av(), $f(c));
      a.log(e);
    } catch (f) {
      rA(a, 4, 1);
    }
}
function rA(a, c, e) {
  var f;
  (f = a.H) == null || f.Kf(c, e);
}
nA.prototype.log = function (a) {
  rA(this, 2, 1);
  if (this.P) {
    a = a.clone();
    var c = this.Y++;
    c = a = sf(a, 21, c);
    if (Od(Ge(c, 1)) == null) {
      var e = Date.now();
      e = Number.isFinite(e) ? e.toString() : "0";
      Ie(c, 1, e == null ? e : Hd(e));
    }
    jf(c, 15) != null || sf(c, 15, new Date().getTimezoneOffset() * 60);
    rA(this, 1, 1);
    c = this.o.length - this.M + 1;
    c > 0 && (this.o.splice(0, c), (this.B += c), rA(this, 3, c));
    this.o.push(a);
    this.gb || this.j.o || this.j.start();
  }
};
nA.prototype.flush = function (a, c) {
  var e = this;
  if (this.o.length === 0) a && a();
  else {
    var f = Date.now();
    if (this.S > f && this.K < f) c && c("throttled");
    else {
      this.la && (typeof this.la.Cc === "function" ? fA(this.A, this.la.Cc()) : (this.A.A = 0));
      var g = this.o.length,
        h = hA(this.A, this.o, this.B, this.I, this.Ya, this.U, this.V),
        k = this.Sa();
      if (k && this.R === k) c && c("stale-auth-token");
      else {
        this.o = [];
        this.j.o && this.j.stop();
        this.B = 0;
        f = $f(h);
        var l;
        this.D && this.D.jb(f.length) && (l = sA(f));
        var p = tA(this, f, k),
          q = function (y) {
            e.v.reset();
            e.j.setInterval(e.v.j);
            if (y) {
              var z = null;
              try {
                var B = JSON.stringify(JSON.parse(y.replace(")]}'\n", "")));
                z = kA(B);
              } catch (Y) {}
              if (z) {
                y = Number(nf(z, 1, bd("-1")));
                y > 0 && ((e.K = Date.now()), (e.S = e.K + y));
                y = mA.j;
                B = Wa(yc);
                var I;
                qc && B && ((I = z.G[B]) == null ? void 0 : I[y]) != null && oc(zc, 3);
                a: {
                  I = mA.j;
                  var D = D === void 0 ? !1 : D;
                  if (Wa(Dc) && Wa(yc) && void 0 === Dc) {
                    y = z.G;
                    B = y[yc];
                    if (!B) break a;
                    if ((B = B.Zc))
                      try {
                        B(y, I, ie);
                        break a;
                      } catch (Y) {
                        $a(Y);
                      }
                  }
                  D && he(z, I);
                }
                D = mA.ctor ? mA.v(z, mA.ctor, mA.j, mA.o) : mA.v(z, mA.j, null, mA.o);
                if ((D = D === null ? void 0 : D))
                  ((D = mf(D, 1, -1)),
                    D !== -1 && ((e.v = new iA(D < 1 ? 1 : D)), e.j.setInterval(e.v.j)));
              }
            }
            a && a();
            e.I = 0;
          },
          r = function (y, z) {
            var B = ef(h, av, 3);
            var I = Number(nf(h, 14)),
              D = e.v;
            D.o = Math.min(3e5, D.o * 2);
            D.j = Math.min(3e5, D.o + Math.round(0.1 * (Math.random() - 0.5) * 2 * D.o));
            e.j.setInterval(e.v.j);
            y === 401 && k && (e.R = k);
            I && (e.B += I);
            z === void 0 && (z = (500 <= y && y < 600) || y === 401 || y === 0);
            z && ((e.o = B.concat(e.o)), e.gb || e.j.o || e.j.start());
            rA(e, 7, 1);
            c && c("net-send-failed", y);
            ++e.I;
          },
          x = function () {
            e.la && e.la.send(p, q, r);
          };
        l
          ? l.then(
              function (y) {
                rA(e, 5, g);
                p.Yc["Content-Encoding"] = "gzip";
                p.Yc["Content-Type"] = "application/binary";
                p.body = y;
                p.Sd = 2;
                x();
              },
              function () {
                rA(e, 6, g);
                x();
              },
            )
          : x();
      }
    }
  }
};
function tA(a, c, e) {
  e = e === void 0 ? null : e;
  var f = f === void 0 ? a.withCredentials : f;
  var g = {};
  a.C || (a.C = oA());
  try {
    var h = new URL(a.C).toString();
  } catch (k) {
    h = new URL(a.C, window.location.origin).toString();
  }
  h = new URL(h);
  e && (g.Authorization = e);
  a.Oa && ((g["X-Goog-AuthUser"] = a.Oa), h.searchParams.set("authuser", a.Oa));
  return { url: h.toString(), body: c, Sd: 1, Yc: g, ze: "POST", withCredentials: f, Za: a.Za };
}
function qA(a) {
  a.A.v = !0;
  a.flush();
  a.A.v = !1;
}
function oA() {
  return "https://play.google.com/log?format=json&hasfast=true";
}
function uA() {}
function sA(a) {
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
uA.prototype.jb = function (a) {
  return a < 1024 ? !1 : typeof CompressionStream !== "undefined";
};
function vA() {
  this.Qd = typeof AbortController !== "undefined";
}
vA.prototype.send = function (a, c, e) {
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
            (g = f.Qd ? new AbortController() : void 0) && a.Za > 0
              ? setTimeout(function () {
                  g.abort();
                }, a.Za)
              : void 0),
          B.O(2, 3),
          (k = Object.assign(
            {},
            { method: a.ze, headers: Object.assign({}, a.Yc) },
            a.body && { body: a.body },
            a.withCredentials && { credentials: "include" },
            { signal: a.Za && g ? g.signal : null },
          )),
          B.B(fetch(a.url, k), 5)
        );
      case 5:
        l = B.C;
        if (l.status !== 200) {
          (p = e) == null || p(l.status);
          B.xa(3);
          break;
        }
        if ((q = c) == null) {
          B.xa(7);
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
        B.xa(3);
    }
  });
};
vA.prototype.Cc = A(4);
function wA(a, c) {
  c = c === void 0 ? "0" : c;
  T.call(this);
  this.Va = a;
  this.Oa = c;
  this.o = "https://play.google.com/log?format=json&hasfast=true";
  this.v = this.j = !1;
  this.Ya = this.la = null;
}
F(wA, T);
function xA(a) {
  a.j = !0;
  return a;
}
function yA(a, c) {
  a.Sa = c;
  return a;
}
wA.prototype.wd = function () {
  this.A = !0;
  return this;
};
function zA(a) {
  a.la || (a.la = new vA());
  var c = new nA({
    Va: a.Va,
    Sa: a.Sa ? a.Sa : Vp,
    Oa: a.Oa,
    Ie: a.o,
    Ba: a.v,
    gb: a.j,
    wd: a.A,
    sd: a.sd,
    la: a.la,
  });
  cl(a, c);
  c.D = new uA();
  a.Ya && (c.Ya = a.Ya);
  gA(c.A);
  a.la.mb && a.la.mb(a.Va);
  a.la.Ce && a.la.Ce(c);
  return c;
}
function AA(a, c) {
  a = a === void 0 ? null : a;
  c = c === void 0 ? null : c;
  this.j = [];
  this.o = [];
  this.v = [];
  this.A = [];
  this.F = a;
  this.B = c;
}
function BA(a, c, e, f) {
  a.j.push(new CA(c, e, f));
}
function DA(a) {
  var c = ["/"];
  c.every(function (e) {
    return ab(e, "/");
  });
  Cb(a.v, c);
}
function EA(a) {
  var c = FA;
  c.every(function (e) {
    return ab(e, "/");
  });
  Cb(a.o, c);
}
function GA(a) {
  var c = ["/offline/blank"];
  c.every(function (e) {
    return ab(e, "/");
  });
  Cb(a.A, c);
}
function HA(a, c) {
  return (
    a.j.some(function (e) {
      return e.o == c;
    }) || yb(a.A, c) >= 0
  );
}
function CA(a, c, e) {
  this.v = a;
  this.o = c;
  this.j = e;
}
function IA(a, c, e, f, g, h, k) {
  this.o = a;
  this.j = c || null;
  this.v = e || "";
  this.A = !!f;
  this.B = !!g;
  this.C = !!h;
  this.F = this.j == null;
  this.D = k || null;
}
function JA(a, c) {
  this.o = a;
  this.j = [a];
  c && (this.j = this.j.concat(c));
}
function KA(a, c) {
  return a.j.some(function (e) {
    a: {
      for (var f = 0; f < e.j.length; f++)
        if (yb(e.j[f].v, c) >= 0) {
          e = e.j[f];
          break a;
        }
      if (yb(e.o, c) >= 0)
        b: {
          f = yb(un, 3);
          if (f == -1) throw Error("Lc");
          for (; f >= 0; f--)
            for (var g = 0; g < e.j.length; g++)
              if (e.j[g].j == un[f]) {
                e = e.j[g];
                break b;
              }
          e = null;
        }
      else e = null;
    }
    return !!e;
  });
}
function LA(a, c) {
  return a.j.some(function (e) {
    return yb(e.o, c) >= 0;
  });
}
function MA(a, c) {
  return a.j.some(function (e) {
    return yb(e.v, c) >= 0;
  });
}
function NA(a, c) {
  return a.j.some(function (e) {
    return HA(e, c);
  });
}
function OA(a) {
  this.j = a;
}
OA.prototype.Ac = function (a) {
  var c = Array.from(this.j.values()).map(function (f) {
      return f.Ac(a);
    }),
    e = new gq(a);
  c.push(PA(e));
  c.push(QA(e));
  c.push(RA(e));
  c = c.filter(function (f) {
    return !!f;
  });
  return c.length == 0 ? null : c[0];
};
function PA(a) {
  var c = Lp(Ip(a.j)),
    e = a.o.get("usp");
  return (a = c === "/open" ? a.o.get("id") : null)
    ? new IA("/edit", "unknown", a, !1, !1, !1, e)
    : null;
}
function QA(a) {
  var c = Lp(Ip(a.j));
  a = a.o.get("usp");
  return (c = SA[c]) ? new IA("/", c, void 0, !1, !0, !1, a) : null;
}
function RA(a) {
  var c = a.o.get("usp");
  return a.j === "/create" ? new IA("/create", "kix", void 0, !0, !1, !1, c) : null;
}
var SA = { "": "kix", "/": "kix", "/docs": "kix", "/sheets": "ritz", "/slides": "punch" };
function TA(a, c, e, f, g) {
  this.B = a;
  this.o = c;
  this.j = e;
  this.v = f;
  this.A = g;
}
TA.prototype.getType = w("B");
TA.prototype.Ac = function (a) {
  if (a) {
    var c = Lp(Ip(Nk(a.match(Mk)[5] || null) || ""));
    var e = Nk(this.o.match(Mk)[5] || null) || "/";
    ab(c, e) ? ((c = c.substring(e.length)), (e = ab(c, "/") ? c : "/" + c)) : (e = null);
  } else e = null;
  if (!e) return null;
  c = this.getType();
  var f = Xk(a, "usp");
  if (LA(this.j, e)) return new IA(e, c, void 0, !0, !1, !1, f);
  if (MA(this.j, e)) return new IA(e, c, void 0, !1, !0, !1, f);
  if (this.j.o.F == e) return new IA(e, c, void 0, !1, !0, !0);
  if (this.j.o.B == e) return new IA(e, c, void 0, !1, !1, !0);
  if (NA(this.j, e)) {
    b: {
      try {
        var g = String.fromCodePoint(35);
        var h = a.indexOf(g);
        var k = h < 0 ? null : a.substr((h + 1) | 0);
        var l = k == null ? null : decodeURIComponent(k);
      } catch (p) {
        a = Yg(p);
        if (a instanceof ch) {
          a = {};
          break b;
        }
        throw a.J;
      }
      a = {};
      if (l)
        for (l = l.split("&"), k = 0; k < l.length; k++)
          ((g = l[k].split("=")),
            g.length == 2 && ((h = Mp(g[0])), (g = Mp(g[1])), h && g && il(a, h, g)));
    }
    a = a && a.id ? a.id : void 0;
    return new IA(e, c, a, !1, !1, !0);
  }
  l = e;
  k = new gq(a);
  e = k.o.get("usp");
  a = l;
  ab(a, "/d/")
    ? ((l = a.indexOf("/", 3)),
      l < 0 && ((a += "/"), (l = a.indexOf("/", 3))),
      (k = a.substring(3, l)),
      (a = a.substring(l)),
      ab(a, "/r/") && ((l = a.indexOf("/", 3)), (a = l < 0 ? "/" : a.substring(l))),
      (c = new IA(a, c, k, !1, !1, !1, e)))
    : (c = (l = k.o.get("id")) ? new IA(a, c, l, !1, !1, !1, e) : null);
  return c && KA(this.j, c.o) ? c : null;
};
var FA = ["/create"],
  UA = "/comment /edit /htmlview /preview /view /".split(" ");
function VA(a) {
  var c = new AA("/offline/hs", "/offline/error");
  BA(c, UA, "/offline/edit", 2);
  BA(c, [], "/offline/view", 1);
  BA(c, [], "/offline/comment", 4);
  BA(c, [], "/offline/viewcomments", 5);
  DA(c);
  EA(c);
  return new TA("kix", "/document", new JA(c), U(a, "udurls"), a);
}
function WA(a) {
  var c = new AA(void 0, "/offline/error");
  BA(c, UA, "/offline/edit", 2);
  BA(c, [], "/offline/view", 1);
  BA(c, [], "/offline/comment", 4);
  BA(c, [], "/offline/viewcomments", 5);
  EA(c);
  return new TA("drawing", "/drawings", new JA(c), U(a, "udurls"), a);
}
function XA(a) {
  var c = new AA("/offline/hs", "/offline/error");
  BA(c, UA, "/offline/edit", 2);
  BA(c, [], "/offline/view", 1);
  BA(c, [], "/offline/comment", 4);
  BA(c, [], "/offline/viewcomments", 5);
  EA(c);
  DA(c);
  var e = new AA();
  BA(e, ["/localpresent"], "/offline/localpresent", 1);
  return new TA("punch", "/presentation", new JA(c, [e]), U(a, "udurls"), a);
}
function YA(a) {
  var c = new AA("/offline/hs", "/offline/error");
  BA(c, UA, "/offline/edit", 2);
  BA(c, [], "/offline/view", 1);
  BA(c, [], "/offline/comment", 4);
  BA(c, [], "/offline/viewcomments", 5);
  EA(c);
  DA(c);
  GA(c);
  return new TA("ritz", "/spreadsheets", new JA(c), U(a, "udurls"), a);
}
function ZA(a) {
  var c = [];
  c.push(VA(a));
  c.push(WA(a));
  c.push(XA(a));
  c.push(YA(a));
  return new Map(
    c.map(function (e) {
      return [e.getType(), e];
    }),
  );
}
function $A(a) {
  Ya.call(this, a);
  this.o = a;
}
F($A, Ya);
function aB(a) {
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
function bB(a) {
  a = new gq(a);
  return a.v === "fonts.googleapis.com" && a.j === "/css";
}
function cB(a) {
  a = new gq(a);
  var c = a.j.split("/").pop();
  return a.v.endsWith(".google.com") && a.j.includes("/ac/") && c.startsWith("logo.");
}
function dB(a) {
  var c = new gq(a);
  (c =
    ((c.v.startsWith("photos-image-dev.") && c.v.endsWith(".google.com")) ||
      c.v.endsWith(".googleusercontent.com") ||
      c.v.endsWith(".ggpht.com")) &&
    c.j.includes("/ogw/")) ||
    ((a = new gq(a)),
    (c =
      !a.v.startsWith("photos-image-dev.") &&
      a.v.endsWith(".google.com") &&
      a.j.includes("/ogw/")));
  return c;
}
function eB(a) {
  this.j = a;
}
eB.prototype.X = w("j");
function fB(a) {
  this.G = M(a);
}
F(fB, Q);
function gB(a) {
  this.G = M(a);
}
F(gB, Q);
function hB(a) {
  this.G = M(a);
}
F(hB, Q);
function iB(a) {
  return kf(a, 3, Fe);
}
function jB() {
  this.o = this.j = null;
}
jB.prototype.initialize = function (a, c) {
  this.j = a;
  this.o = c;
  return this;
};
function kB(a) {
  var c = cf(a.j, vm, 5);
  c == null && ((c = new vm()), N(a.j, vm, 5, c));
  return c;
}
function lB(a) {
  jf(a.j, 10);
  jf(a.j, 6) != null || ki(Ge(a.j, 10, void 0, void 0, Pd));
  if (iB(cf(a.j, hB, 8)) == 2 && jf(a.j, 13) != null) {
    var c = cf(a.j, hB, 8);
    c = cf(c, fB, 2);
    jf(c, 2);
  }
  var e = cf(a.j, vm, 5);
  e != null && ((c = a.j), (e = e.clone()), N(c, vm, 5, e));
  return a.j;
}
function mB() {
  this.j = {};
  this.v = {};
  this.o = null;
}
function nB(a) {
  this.G = M(a);
}
F(nB, Q);
function oB(a) {
  this.G = M(a);
}
F(oB, Q);
function pB(a) {
  this.G = M(a);
}
F(pB, Q);
function qB(a) {
  this.G = M(a);
}
F(qB, Q);
qB.prototype.wa = function (a) {
  return tf(this, 1, a);
};
function rB(a) {
  this.G = M(a);
}
F(rB, Q);
function sB(a) {
  this.G = M(a);
}
F(sB, Q);
function tB(a) {
  this.G = M(a);
}
F(tB, Q);
function uB(a) {
  this.G = M(a);
}
F(uB, Q);
function vB(a) {
  return cf(a, sB, 1);
}
function wB() {
  this.j = new qB();
  this.A = null;
  this.B = new pB();
  uf(this.B, 1, 6);
  this.v = this.o = null;
}
wB.prototype.wa = function (a) {
  Ge(this.j, 1, void 0, void 0);
  this.j.wa(a);
  return this;
};
function xB(a) {
  a.A == null && (a.A = new uB());
  return a.A;
}
function yB(a) {
  a.v == null && (a.v = new oB());
  return a.v;
}
function zB(a) {
  Qd(Ge(a.j, 1, void 0, void 0)) != null && kf(a.j, 6) != null && pf(a.j, 6);
}
function rv(a) {
  this.G = M(a);
}
F(rv, Q);
function AB() {
  T.apply(this, arguments);
}
F(AB, T);
C = AB.prototype;
C.Bb = u();
C.nb = function () {
  var a = new jB(),
    c = new rv();
  a.initialize(c, new mB());
  return a;
};
C.Ob = function () {
  return new wB();
};
C.rd = u();
C.yc = function () {
  return $i();
};
C.qd = A(!1);
function BB() {}
BB.prototype.j = u();
function CB() {
  jB.call(this);
}
F(CB, jB);
var DB = new eB("high_frequency_builder");
function EB(a, c, e) {
  a = new gr(a);
  cl(e, a);
  var f = new nr(e);
  cl(e, f);
  pr(f, a, "tick", c);
  a.start();
}
function FB() {
  jB.call(this);
}
F(FB, jB);
function GB(a, c, e) {
  var f = Date.now() * 1e3;
  if (0 == c) {
    c = new hB();
    var g = new gB();
    g = sf(g, 1, f);
    N(c, gB, 1, g);
    uf(c, 3, 1);
    N(a.j, hB, 8, c);
    sf(a.j, 12, e);
    sf(a.j, 13, e);
    sf(a.j, 4, f);
    sf(a.j, 3, e);
  } else
    1 == c &&
      ((c = new hB()),
      (g = new fB()),
      (f = sf(g, 1, f)),
      N(c, fB, 2, f),
      uf(c, 3, 2),
      N(a.j, hB, 8, c),
      sf(a.j, 12, e),
      sf(a.j, 3, e));
  return a;
}
var HB = new eB("system_builder");
function IB(a, c) {
  if (c && a in c) return a;
  a = "webkit" + Kk(a);
  return c === void 0 || a in c ? a : null;
}
function JB() {
  Cq.call(this, "visibilitychange");
}
F(JB, Cq);
var KB = new WeakMap();
function LB(a) {
  function c(g) {
    g = G(g);
    g.next();
    g = na(g);
    return e(f, g);
  }
  var e = e === void 0 ? MB : e;
  var f = Na(a);
  return function () {
    var g = Ca.apply(0, arguments),
      h = this || K,
      k = KB.get(h);
    k || ((k = {}), KB.set(h, k));
    h = k;
    k = [this].concat(oa(g));
    g = c ? c(k) : k;
    if (Object.prototype.hasOwnProperty.call(h, g)) h = h[g];
    else {
      var l = G(k);
      k = l.next().value;
      l = na(l);
      k = a.apply(k, l);
      h = h[g] = k;
    }
    return h;
  };
}
function MB(a, c) {
  a = [a];
  for (var e = c.length - 1; e >= 0; --e) a.push(typeof c[e], c[e]);
  return a.join("\v");
}
function NB(a) {
  er.call(this);
  a || (a = Za || (Za = new Sr()));
  this.j = a;
  if ((this.o = this.fe())) this.A = Pq(this.j.j, this.o, Sa(this.he, this));
}
Xa(NB, er);
C = NB.prototype;
C.fe = LB(function () {
  var a = this.jb(),
    c = this.tb() != "hidden";
  if (a) {
    var e;
    c ? (e = "webkitvisibilitychange") : (e = "visibilitychange");
    a = e;
  } else a = null;
  return a;
});
C.tb = LB(function () {
  return IB("hidden", this.j.j);
});
C.ge = LB(function () {
  return IB("visibilityState", this.j.j);
});
C.jb = function () {
  return !!this.tb();
};
C.he = function () {
  var a = this.jb() ? this.j.j[this.ge()] : null;
  a = new JB(!!this.j.j[this.tb()], a);
  this.dispatchEvent(a);
};
C.N = function () {
  Yq(this.A);
  NB.pa.N.call(this);
};
function OB(a, c) {
  T.call(this);
  this.o = a;
  this.j = new NB(c);
  cl(this, this.j);
  this.v = new nr(this);
  cl(this, this.v);
  this.j.jb() && pr(this.v, this.j, "visibilitychange", this.A);
}
F(OB, T);
OB.prototype.A = function () {
  if (this.o.qd()) {
    var a = this.j;
    a = !!a.j.j[a.tb()];
    a = this.o.nb(a ? 102001 : 102e3, 0);
    this.o.Bb(a);
  }
};
function PB(a, c, e) {
  e = e === void 0 ? !1 : e;
  T.call(this);
  this.j = a;
  this.o = c;
  cl(this, this.o);
  this.v = e;
}
F(PB, T);
C = PB.prototype;
C.Bb = function (a) {
  var c = this.j;
  sf(a.j, 6, c.v);
  c.A = !0;
  a = lB(a);
  c.j.add(a);
  c = this.o;
  c.j.j.j.length >= 3 && c.o.o();
};
C.nb = function (a, c) {
  a = GB(QB(this.j, a), c, this.j.F++);
  c == 1 && ((c = this.j), iB(cf(a.j, hB, 8)), c.C.add(a));
  return a;
};
C.Ob = function () {
  return this.j.o;
};
C.rd = function () {
  var a = this.j,
    c = RB(a, 716);
  SB(a, c);
  c = lB(c);
  a.j.add(c);
  a.L = !0;
  a.D = !0;
  this.o.initialize();
  this.o.o.o();
  this.v && new OB(this);
};
C.yc = function () {
  this.o.A();
  return dj(Array.from(this.o.v)).then();
};
C.qd = function () {
  var a = this.j;
  return a.L && a.D && !0;
};
function TB(a, c, e) {
  T.call(this);
  this.C = e != null ? a.bind(e) : a;
  this.B = c;
  this.v = null;
  this.A = !1;
  this.j = null;
}
F(TB, T);
TB.prototype.o = function (a) {
  this.v = arguments;
  this.j ? (this.A = !0) : UB(this);
};
TB.prototype.stop = function () {
  this.j && (K.clearTimeout(this.j), (this.j = null), (this.A = !1), (this.v = null));
};
TB.prototype.N = function () {
  T.prototype.N.call(this);
  this.stop();
};
function UB(a) {
  a.j = hr(function () {
    a.j = null;
    a.A && ((a.A = !1), UB(a));
  }, a.B);
  var c = a.v;
  a.v = null;
  a.C.apply(null, c);
}
function VB(a, c, e, f, g) {
  T.call(this);
  this.j = a;
  this.D = c;
  this.o = new TB(this.A, 3e3, this);
  this.v = new Set();
  this.B = f;
  this.C = g || 6e4;
}
F(VB, T);
VB.prototype.initialize = function () {
  EB(this.C, this.o.o, this.o);
  EB(36e5, this.H, this);
};
VB.prototype.A = function () {
  var a = this;
  if (this.j.j.j.length != 0 && (!this.B || this.j.A)) {
    var c = WB(this.j),
      e = this.D.j(c);
    e &&
      (fj(e, function () {
        return void a.v.delete(e);
      }),
      this.v.add(e));
  }
};
VB.prototype.H = function () {
  var a = this.j,
    c = RB(a, 1153);
  c = lB(c);
  a.j.add(c);
  this.o.o();
};
function XB() {}
XB.prototype.Cd = function () {
  return new CB();
};
function YB() {
  this.j = [];
}
YB.prototype.add = function (a) {
  this.j.push(a);
};
function ZB() {
  this.j = {};
}
ZB.prototype.add = function (a) {
  iB(cf(a.j, hB, 8));
  var c = li(nf(a.j, 12));
  this.j[c] = a;
};
ZB.prototype.remove = function (a) {
  delete this.j[a];
};
function $B(a) {
  this.G = M(a, 500);
}
F($B, Q);
function aC() {
  var a = bC.j;
  this.o = bC.o;
  this.H = a;
  this.F = 1;
  this.B = this.v = null;
  this.C = new ZB();
  this.j = new YB();
  this.D = this.L = this.A = !1;
}
function QB(a, c) {
  a = new jB().initialize(new rv(), a.H);
  var e = a.o.j[HB.X()].Cd();
  e.initialize(a.j, a.o);
  sf(e.j, 10, c);
  return e;
}
function WB(a) {
  var c = a.j,
    e = c.j;
  c.j = [];
  c = new $B();
  var f = a.o.j.clone();
  c = N(c, qB, 2, f);
  f = a.o;
  zB(f);
  (f = f.A ? f.A.clone() : null) && N(c, uB, 5, f);
  var g;
  f = a.o;
  for (var h, k = e.length - 1; k >= 0; k--) {
    var l = cf(e[k], vm, 5);
    if (l && cf(l, cm, 1)) {
      l = cf(l, cm, 1);
      Ad(Ge(l, 12)) != null && g === void 0 && (g = lf(l, 12));
      l = cf(l, am, 20);
      if (l !== void 0 && h === void 0) {
        h = new nB();
        var p = Ad(Ge(l, 2, void 0, Fe));
        p !== void 0 && qf(h, 2, p);
        l = Ad(Ge(l, 1, void 0, Fe));
        l !== void 0 && qf(h, 1, l);
      }
      if (g !== void 0 && h !== void 0) break;
    }
  }
  f = f.v ? f.v.clone() : null;
  if (g !== void 0 || h !== void 0)
    (f || (f = new oB()), g !== void 0 && qf(f, 6, g), h !== void 0 && N(f, nB, 13, h));
  (g = f) && N(c, oB, 3, g);
  a = a.o.B.clone();
  N(c, pB, 4, a);
  ff(c, rv, 1, e);
  return c;
}
function RB(a, c) {
  var e = GB(QB(a, c), 0, a.F++);
  var f = a.C;
  var g = Object.keys(f.j);
  if (g.length == 0) f = null;
  else {
    for (var h = [], k = 0; k < g.length; k++) {
      var l = Number(g[k]),
        p = f.j[l],
        q = new km();
      l = sf(q, 1, l);
      p = Ge(p.j, 10, void 0, void 0, Pd);
      p = sf(l, 2, p);
      h.push(p);
    }
    f = h;
  }
  c != 716 &&
    ((c = a.B),
    sf(e.j, 6, a.v),
    (g = new lm()),
    (c = sf(g, 1, c)),
    f && hf(c, 2, km, f),
    (f = kB(e)),
    N(f, lm, 3, c));
  SB(a, e);
  return e;
}
function SB(a, c) {
  a.v = ki(Ge(c.j, 12, void 0, void 0, Pd));
  c = cf(c.j, hB, 8);
  c = cf(c, gB, 1);
  c = Ge(c, 1, void 0, void 0, Pd);
  a.B = ki(c);
}
function cC() {}
cC.prototype.Cd = function () {
  return new FB();
};
function dC() {
  this.j = this.o = null;
}
function eC() {
  this.v = this.A = null;
  this.j = new wB();
  this.o = !1;
}
eC.prototype.wa = function (a) {
  this.j.wa(a);
  return this;
};
function fC(a, c, e, f, g) {
  var h = Promise.resolve(null),
    k = Promise.resolve(null);
  c &&
    ((a = Promise.resolve(Bz(a))),
    (h = a.then(function (l) {
      return gC(l, c);
    })),
    (k = a.then(function (l) {
      return hC(l, c);
    })));
  return Promise.all([h, k]).then(function (l) {
    l = G(l);
    var p = l.next().value;
    var q = l.next().value;
    l = e.nb(100003, 0);
    var r = new um(),
      x = new tm();
    N(r, tm, 1, x);
    var y = kB(l);
    N(y, um, 50, r);
    tf(x, 1, f);
    x = new qm();
    N(r, qm, 2, x);
    (r = K.navigator.connection) && r.effectiveType && uf(x, 3, Tu(r.effectiveType));
    r = new rm();
    g != null &&
      ((x = new uv(g)),
      N(r, jm, 1, x.o),
      (x = Xk(g, "dods")),
      (x = Wp(x)) && uf(r, 2, x),
      (x = Xk(g, "eops")),
      (x = !x || (x != "1" && x != "0") ? null : x == "1"),
      x != null && qf(r, 6, x),
      (x = Xp(g)),
      x.length && gf(r, 4, x),
      p != null && uf(r, 3, p),
      q != null && q.length && hf(r, 5, bm, q));
    p = kB(l);
    p = cf(p, um, 50);
    N(p, rm, 5, r);
    e.Bb(l);
    return e.yc();
  });
}
function gC(a, c) {
  return Promise.resolve(Ij(ip(a.j.od(), c))).then(function (e) {
    return e != null ? e.j : null;
  });
}
function hC(a, c) {
  return Promise.resolve(Ij($o(a.j.nd(), c))).then(function (e) {
    return e.map(function (f) {
      var g = new bm();
      g = rf(g, 2, f.j);
      return uf(g, 1, f.o);
    });
  });
}
var iC =
    /\/_\/[^/]+\/_\/js\/|\.gstatic\.|\/doclist\/|\/static\/|googleusercontent\.com\/|google\.com\/images\/errors\/|apis\.google\.com/,
  jC = ["/cleardot.gif", "/netcheck.gif", "//csi.gstatic.com/csi"];
function kC(a) {
  return dB(a) || cB(a) || bB(a)
    ? !0
    : iC.test(a) &&
        jC.every(function (c) {
          return !a.includes(c);
        });
}
function lC(a) {
  var c = mC,
    e = xv;
  this.j = a;
  this.v = c;
  this.o = e;
}
function nC() {
  this.j = null;
}
nC.prototype.start = u();
function oC(a, c, e, f, g, h, k) {
  this.o = a;
  this.D = c;
  this.v = f;
  this.C = g;
  this.A = h;
  this.F = new nC();
  this.B = Promise.resolve(k);
  this.j = e;
}
function pC(a) {
  return (a = a.o.headers.get("Sec-Purpose")) ? a.split(";").includes("prefetch") : !1;
}
function qC(a, c) {
  a.v.push(c);
}
function rC(a, c, e, f) {
  f = f === void 0 ? {} : f;
  f.serviceworker_isNullResponse = "false";
  sC(a, c, f, e);
  tC(a, e, f);
}
function uC(a, c) {
  var e = e === void 0 ? {} : e;
  hu(
    a.j,
    function () {
      var f = e;
      f = f === void 0 ? {} : f;
      f.serviceworker_codePath = "install";
      vC(a, c, f);
    },
    a,
  )();
}
function wC(a, c) {
  var e = e === void 0 ? {} : e;
  e.serviceworker_codePath = "activate";
  tC(a, c, e);
}
function xC(a, c, e) {
  var f = f === void 0 ? {} : f;
  f.serviceworker_codePath = "messageHandler";
  e && (f.serviceworker_messageHandler_requestType = kf(e, 1, Fe));
  tC(a, c, f);
}
function yC(a, c, e, f) {
  f = f === void 0 ? null : f;
  var g = g === void 0 ? {} : g;
  var h = e.ab;
  var k = c.j ? (c.j && c.j.o.includes("offline/iframeapi") ? !1 : !0) : !1;
  g.serviceworker_isCritical = String(k);
  sC(a, c, g, h);
  c = !e.kb;
  g.serviceworker_isNullResponse = String(c);
  g.serviceworker_fetchMethod = e.o;
  g.fetch_handling_recovery = c ? (f && f.type != "error" ? "error_page" : "none") : "fallback";
  c && k ? (U(a.A, "docs-sw-erdcbnc"), (f = h && h instanceof xz && h.v ? !1 : !0)) : (f = !1);
  f
    ? ((e = h || Error(aB(e.j))), a.o != null ? ru(a.j, e, a.o, g, !1, 2) : Zt(a.j, e, g))
    : h && vC(a, h, g);
}
function zC(a) {
  kc(a, "__INTERNAL_errorShouldBeSampled", "true");
}
function sC(a, c, e, f) {
  f = f === void 0 ? null : f;
  e.serviceworker_navigatorIsOnline = String(K.navigator.onLine);
  f instanceof TypeError && (e.serviceworker_fetchErrorReason = "type_error");
  f = c.j
    ? c.j.C
      ? "coldStartUrl"
      : c.j.B
        ? "homescreenAction"
        : c.j.A
          ? "editorCreateAction"
          : c.j.F
            ? "offlineCommonAction"
            : "editorAction"
    : c.A
      ? "staticContent"
      : null;
  f != null && (e.serviceworker_requestType = f);
  c.j && c.j.j != null && (e.sw_docType = c.j.j);
  e.serviceworker_resourceCategory = "null";
  f = c.o;
  var g = Nk(f.url.match(Mk)[5] || null);
  g = g.substring(g.lastIndexOf("/"));
  AC.indexOf(g) > -1 && (e.serviceworker_actionPath = g);
  var h = (g = f.url);
  Vk(g, 0, "ouid", g.search(Wk)) >= 0 && Xk(g, "ouid") && (h = Uk(Zk(h, "ouid"), "ouid", "{OUID}"));
  Vk(g, 0, "key", g.search(Wk)) >= 0 && Xk(g, "key") && (h = Uk(Zk(h, "key"), "key", "REDACTED"));
  e.serviceworker_fetchError_fullUrl = h;
  e.serviceworker_codePath = "fetch";
  e.serviceworker_requestMode = f.mode;
  e.serviceworker_requestDestination = f.destination;
  e.serviceworker_requestRedirectMode = f.redirect;
  e.serviceworker_clientId = c.v || "";
  (g = Xk(f.url, "usp")) && (e.serviceworker_fetchUsp = g);
  f = f.referrer;
  f = f instanceof gq ? f.clone() : new gq(f);
  f = lq(f, "");
  f = kq(f, "");
  e.serviceworker_referrer = f.toString();
  for (f = 0; f < a.v.length; f++) {
    g = (0, a.v[f])(c);
    for (var k in g) e[k] = g[k];
  }
}
function vC(a, c, e) {
  a.o != null ? ru(a.j, c, a.o, e, !1, 1) : gu(a.j, c, e);
}
function tC(a, c, e) {
  a.o != null
    ? ru(a.j, c, a.o, e, !1, 0)
    : lc(c).__INTERNAL_errorShouldBeSampled === "true"
      ? ru(a.j, c, 2, e)
      : a.j.info(c, e);
}
var AC = "/comment /create /edit /hs /view /preview /viewcomments /open".split(" ");
function BC(a, c) {
  var e = !1;
  c = c === void 0 ? null : c;
  e = e === void 0 ? !1 : e;
  var f = f === void 0 ? !1 : f;
  this.o = a;
  this.j = c;
  this.A = e;
  this.v = f;
}
function CC(a, c) {
  var e = c.request,
    f = e.mode == "navigate",
    g = a.j && (f || a.v) ? a.j.Ac(e.url) : null,
    h = kC(e.url);
  h = new oC(
    e,
    function (p) {
      return c.waitUntil(p);
    },
    g,
    c.resultingClientId || c.clientId || null,
    f,
    h,
    a.A && Kb && cb() >= 0 ? c.preloadResponse : void 0,
  );
  var k = !!c.resultingClientId,
    l = vb() >= 72 && !k;
  !g ||
    g.F ||
    pC(h) ||
    (f && !l) ||
    ((f = Error("Oc")),
    zC(f),
    rC(a.o, h, f, {
      serviceworker_hasResultingClientId: String(k),
      serviceworker_resultingClientId: String(c.resultingClientId),
      serviceworker_requestDestination: String(e.destination),
    }));
  return h;
}
function DC(a, c, e) {
  if (a == null && !e) throw Error("Pc");
  this.kb = a;
  this.o = c;
  this.j = e || null;
  this.ab = null;
}
function EC(a, c) {
  a.ab = a.ab ? Hk(c, { serviceworker_multipleFetchErrors: "true" }) : c;
}
function FC(a, c) {
  a = new DC(null, "none", a);
  EC(a, c);
  return a;
}
function GC(a, c) {
  return new DC(a, "network", c);
}
function HC(a, c) {
  this.v = xv;
  this.j = a;
  this.o = c;
}
HC.prototype.fetch = function (a) {
  return IC(this, a)
    .then(function (c) {
      if (c) {
        var e = c.match(Mk);
        c = Lk(e[1], null, e[3], e[4]) ? c : K.location.origin + (c.startsWith("/") ? c : "/" + c);
        e = new Headers();
        e.set("Location", c);
        c = new Response("", { status: 302, headers: e });
        c = new DC(c, "client-redirect");
      } else c = new DC(null, "client-redirect", "redirect-skipped");
      return c;
    })
    .catch(function (c) {
      if (c instanceof $A) return new DC(null, "client-redirect", c.o);
      throw c;
    });
};
function IC(a, c) {
  if (!c.j) return Promise.reject(new $A("missing-action-info"));
  var e = c.j.D;
  if (c.j.j === "unknown") {
    var f = c.j.v;
    if (f) return JC(a, f, e || "drive_open");
  }
  a = new gq(c.o.url);
  if (a.j) {
    var g = a.j,
      h = Kp(g);
    g = Ip(g);
    f = c.j.A ? (c.j && c.j.j ? KC[c.j.j] : void 0) : null;
    h &&
      f &&
      ((g = a.o.get("authuser")),
      a.o.remove("authuser"),
      a.o.remove("ouid"),
      (g = f + "/u/" + (g || "0") + "/create"));
    jq(a, g);
  }
  c.j.B
    ? ((f = (c.j && c.j.j ? KC[c.j.j] : void 0) + "/"),
      (g = Nk(c.o.url.match(Mk)[5] || null) || ""),
      g.startsWith(f)
        ? (f = null)
        : ((h = Lp(g)),
          (f =
            g !== h ? (h === "/" ? "/document" + g : h === "" ? "/document" + g + "/" : null) : f)))
    : (f = null);
  f
    ? (jq(a, f), (e = e || "direct_url"))
    : a.j === "/create" && (jq(a, "/document/create"), (e = e || "root_create"));
  c = new gq(c.o.url).toString();
  if (a.toString() === c) return Promise.resolve(null);
  e && a.o.set("usp", e);
  a.o.set("rswr", "true");
  return Promise.resolve(a.toString());
}
function JC(a, c, e) {
  return Promise.resolve(Bz(a.v))
    .then(function (f) {
      return LC(c, f);
    })
    .then(function (f) {
      if (!f) return Promise.reject(new $A("cannot-determine-editor"));
      var g = f.getType(),
        h = a.o,
        k = a.j;
      k = k || ZA(h);
      h = k.get(g);
      if (!h) throw Error("Mc`" + g);
      k = f.ub();
      f = h.o.match(Mk);
      g = f[5];
      c && h.v && (g += "/d/" + c);
      var l = U(h.A, "docs-erkpp");
      k != null && l && (g += "/r/" + k);
      g += "/edit";
      var p = {};
      c && !h.v && (p.id = c);
      k == null || l || (p.resourcekey = k);
      e != null && (p.usp = e);
      h = aq(p) ? null : Sk(p);
      h = new gq(Lk(f[1], f[2], f[3], f[4], g, h));
      h.o.set("rswr", "true");
      return h.toString();
    });
}
function LC(a, c) {
  return new Promise(function (e) {
    Vw(c.j.C, a, e);
  });
}
var MC = {},
  KC =
    ((MC.kix = "/document"),
    (MC.ritz = "/spreadsheets"),
    (MC.punch = "/presentation"),
    (MC.drawing = "/drawings"),
    MC);
function NC(a, c, e) {
  this.o = a;
  this.v = c;
  this.j = e;
}
NC.prototype.fetch = function (a) {
  var c = this;
  return OC(this.o, a).then(function (e) {
    return e.j != null
      ? OC(c.v, a).then(function (f) {
          var g = c.j;
          if (e.j == "document-not-available-locally") {
            var h = fC(g.o, a.j ? a.j.v : null, g.j, a.v, a.o.url);
            g = PC(g.v, a, h);
            vb() >= 60 && a.D(g);
          }
          g = f.kb == null || (f.j != null && e.j == null) ? !0 : !1;
          g ? ((f = f.ab) && EC(e, f), (f = e)) : (g = e.ab) && EC(f, g);
          return f;
        })
      : e;
  });
};
function QC(a, c) {
  this.v = RC;
  this.j = a;
  this.o = c;
}
QC.prototype.fetch = function (a) {
  var c = this,
    e = a.o;
  return a.B.then(function (f) {
    return f ? f : c.v.fetch(e);
  })
    .catch(function (f) {
      f = Fk(f);
      if (
        a.j &&
        K.navigator.onLine &&
        !f.message.includes(
          "The service worker navigation preload request was cancelled before 'preloadResponse' settled.",
        )
      ) {
        var g = {};
        rC(c.j, a, f, ((g.serviceworker_nativeFetchOrPreloadError = "true"), g));
      }
      return null;
    })
    .then(function (f) {
      var g = a.F;
      g.j || (g.j = !1);
      f && K.performance.getEntriesByName(a.o.url);
      var h;
      f ? (h = SC(c, a, f)) : (h = new DC(null, "network", "offline"));
      return h;
    });
};
function SC(a, c, e) {
  if (c.j && c.j.v) {
    var f = e.status,
      g = e.headers;
    c = Xk(c.o.url, "fws");
    if (f == 404) return GC(e, "server-document-not-found");
    if (f == 410 && U(a.o, "docs-sw-eddf")) return GC(e, "server-document-deleted");
    if (c != "true") {
      if (TC.includes(f)) return GC(e, "server-error");
      if (g.get("docs-offline-fallback-if-possible") == "true") return GC(e, "server-suggested");
    }
  }
  return new DC(e, "network");
}
var TC = [500, 502, 503];
function UC(a, c) {
  if (c.request.method == "GET") {
    var e = CC(a.o, c);
    if (e.j && !e.A) {
      var f = a.v.fetch(e),
        g = c.respondWith;
      a = a.j;
      e = VC(a, e, f);
      e = Promise.resolve(iu(a.o, e));
      g.call(c, e);
    }
  }
}
function WC() {
  var a = ev,
    c = XC,
    e = YC;
  this.v = RC;
  this.o = a;
  this.j = c;
  this.A = e;
}
function ZC(a, c) {
  $C(a.A);
  var e = Promise.resolve()
    .then(function () {
      var f = a.v.registration.navigationPreload;
      if (f)
        return f.disable().catch(function (g) {
          return wC(a.j, Fk(g));
        });
    })
    .then(function () {
      return a.v.clients.claim();
    })
    .catch(function (f) {
      return wC(a.j, Fk(f));
    })
    .finally(function () {
      return tr(a.o.C);
    });
  c.waitUntil(Promise.resolve(iu(a.o, e)));
}
function aD() {
  this.o = [];
  this.j = !1;
}
function bD(a, c) {
  c = {
    condition: {
      urlPattern: new URLPattern(c, "https://" + K.location.hostname),
      requestMethod: "GET",
      requestMode: "navigate",
    },
    source: "fetch-event",
  };
  if (a.j) throw Error("Rc");
  a.o.push(c);
  return a;
}
function cD(a) {
  this.j = a;
}
function dD(a) {
  if (!(vb() >= 117)) return null;
  var c = a.addRoutes || a.registerRouter;
  if (!c) return null;
  var e = c.bind(a);
  return new cD(function (f) {
    return e(f);
  });
}
cD.prototype.register = function (a) {
  return this.j(a.o);
};
function eD() {
  var a = ev,
    c = XC,
    e = fD,
    f = dv,
    g = gD;
  this.F = RC;
  this.A = a;
  this.v = c;
  this.j = e;
  this.B = f;
  this.o = g;
}
function hD(a, c) {
  var e = !0,
    f = !1,
    g = Promise.resolve()
      .then(function () {
        return iD(a, c).then(function (h) {
          f = h;
        });
      })
      .then(function () {
        return a.F.skipWaiting();
      })
      .catch(function (h) {
        uC(a.v, Fk(h));
        e = !1;
      })
      .then(function () {
        var h = e,
          k = f,
          l = a.j.nb(100008, 0),
          p = kB(l),
          q = new um(),
          r = new sm();
        h = qf(r, 1, h);
        k = qf(h, 3, k);
        q = N(q, sm, 7, k);
        N(p, um, 50, q);
        a.j.Bb(l);
        if (!e) throw Error("Sc");
      });
  c.waitUntil(
    Promise.resolve(g).finally(function () {
      return Promise.all([tr(a.A.C), a.j.yc()]);
    }),
  );
}
function iD(a, c) {
  return (c = dD(c))
    ? U(a.B, "docs-sw-ersssr") && a.o != null
      ? c.register(a.o).then(A(!0))
      : Promise.resolve(!1)
    : Promise.resolve(!1);
}
function jD(a) {
  this.j = a;
}
function kD(a) {
  this.G = M(a);
}
F(kD, Q);
function lD(a) {
  this.G = M(a);
}
F(lD, Q);
function mD(a) {
  this.G = M(a);
}
F(mD, Q);
mD.prototype.clearValue = function () {
  return Ie(this, 2);
};
function nD(a) {
  this.G = M(a);
}
F(nD, Q);
function oD(a, c) {
  return tf(a, 1, c);
}
function pD(a, c) {
  return ff(a, mD, 2, c);
}
function qD(a) {
  this.G = M(a);
}
F(qD, Q);
function rD(a) {
  this.j = 8;
  this.v = a;
}
F(rD, jD);
rD.prototype.o = function () {
  var a = Cl(this.v, "buildLabel"),
    c = new qD(),
    e = new kD();
  a = tf(e, 1, a);
  e = new lD();
  a = N(e, kD, 1, a);
  N(c, lD, 7, a);
  return Promise.resolve(c);
};
function sD() {
  this.j = 2;
}
F(sD, jD);
sD.prototype.o = function () {
  return Promise.resolve(new qD());
};
function tD(a) {
  this.G = M(a);
}
F(tD, Q);
tD.prototype.getType = function () {
  return pf(this, 1);
};
function uD(a, c) {
  var e = c.j;
  if (a.o[e]) throw Error("Uc`" + e);
  a.o[e] = c;
  return a;
}
function vD(a, c) {
  if (c && c.data && c.ports.length)
    if (Array.isArray(c.data)) {
      var e = new tD(c.data),
        f = c.ports[0],
        g = Promise.resolve(wD(a, e)).then(function (h) {
          return f.postMessage(oe(h));
        });
      a = xD(a.v, e, g);
      typeof c.waitUntil === "function" && c.waitUntil(a);
    } else xC(a.j, Error("Vc`" + JSON.stringify(c.data) + "`" + Ka(c.data)));
  else xC(a.j, Error("Wc"));
}
function wD(a, c) {
  yD(a.A, kf(c, 1, Fe));
  return zD(a, c).catch(function (e) {
    e = Fk(e);
    xC(a.j, e, c);
    return AD(e);
  });
}
function AD(a) {
  var c = c === void 0 ? {} : c;
  var e = new qD(),
    f = Object.keys(c).map(function (g) {
      var h = new mD();
      h = tf(h, 1, g);
      return tf(h, 2, c[g]);
    });
  f = pD(oD(new nD(), a.message), f);
  a.message === "cache update timed out" && uf(f, 3, 1);
  N(e, nD, 3, f);
  return e;
}
function zD(a, c) {
  var e = kf(c, 1, Fe);
  a = a.o[e];
  return a
    ? kf(c, 1, Fe) !== a.j
      ? Promise.reject(Error("Tc`" + a.j))
      : a.o()
    : ((c = Error("Xc`" + e)), zC(c), Promise.reject(c));
}
function BD(a, c) {
  qC(c, function (e) {
    var f = {},
      g;
    g = (g = e.v) ? ((g = a.o[g]) ? g.j : null) : null;
    g &&
      ((f.serviceworker_isColdStart = String(g.o())),
      (g = g.j().j),
      !e.C && g && (f.serviceworker_sourceActionPath = g.o));
    return f;
  });
}
function yD(a, c) {
  a.j || (a.j = c == 2 ? 3 : 4);
}
function $C(a) {
  a.j || (a.j = 5);
}
function VC(a, c, e) {
  return CD(e, c)
    .catch(function (f) {
      var g = {};
      g = ((g.error_at_top_level_fetch_handling = "true"), g);
      return FC("redirect-skipped", Hk(f, g));
    })
    .then(function (f) {
      var g = f.kb;
      return g
        ? (f.ab && yC(a.j, c, f), g)
        : DD().then(function (h) {
            yC(a.j, c, f, h);
            return h;
          });
    });
}
function DD() {
  return Promise.resolve()
    .then(function () {
      return Promise.resolve(Response.error());
    })
    .catch(function () {
      return Response.error();
    });
}
function xD(a, c, e) {
  e = e.catch(function (f) {
    xC(a.j, Fk(f), c);
  });
  return Promise.resolve(iu(a.o, e));
}
function PC(a, c, e) {
  e = e.catch(function (f) {
    rC(a.j, c, Fk(f));
  });
  return Promise.resolve(iu(a.o, e));
}
function OC(a, c) {
  return a.fetch(c).catch(function (e) {
    return FC("unexpected-error-from-fetcher", Fk(e));
  });
}
function CD(a, c) {
  return a.then(function (e) {
    if (e.kb && e.kb.redirected && c.o.redirect != "follow") throw Error("Yc");
    return e;
  });
}
function ED() {
  var a = RC,
    c = FD,
    e = new eD(),
    f = new WC(),
    g = GD,
    h = XC,
    k = YC;
  this.j = ev;
  this.o = a;
  this.B = c;
  this.H = e;
  this.A = f;
  this.I = g;
  this.v = k;
  BD(this.v, h);
  this.o.addEventListener("install", hu(this.j, this.D, this), !1);
  this.o.addEventListener("fetch", hu(this.j, this.C, this), !1);
  this.o.addEventListener("activate", hu(this.j, this.F, this), !1);
  this.o.addEventListener("message", hu(this.j, this.L, this), !1);
}
ED.prototype.D = function (a) {
  hD(this.H, a);
};
ED.prototype.F = function (a) {
  ZC(this.A, a);
};
ED.prototype.L = function (a) {
  vD(this.I, a);
};
ED.prototype.C = function (a) {
  a.preloadResponse && a.preloadResponse.catch(u());
  UC(this.B, a);
};
var RC = self,
  HD = new At({ Ke: RC });
HD.j = "same-origin";
Ft = HD;
var dv = ql(),
  ID = Vl(),
  JD = (function (a, c, e, f) {
    var g = !0;
    g = g === void 0 ? !1 : g;
    e = e === void 0 ? !1 : e;
    a = mu(lu(qu(pu(ou(new Su(a, c)), g), e), c));
    f && (a.j = f);
    f = new Ut(a);
    c = Cl(c, "buildLabel");
    /^[\s\xa0]*$/.test(c) || ((f.o.buildLabel = c), (f.o["build-label"] = c));
    f.o.locale = "en";
    du(f, function () {
      return Date.now().toString();
    });
    return f;
  })("root-sw", dv, U(dv, "docs-sw-ehnur"), ID);
JD.o.serviceworker_isServiceWorkerError = "true";
JD.o.serviceworker_type = "rootSW";
RC.registration &&
  ((JD.o.serviceworker_activeAtStart = RC.registration.active ? "true" : "false"),
  RC.registration.scope && (JD.o.serviceworker_scope = RC.registration.scope));
var ev = JD,
  KD = new Bm(),
  XC = new (function () {
    var a = ev,
      c = dv;
    var e = e === void 0 ? null : e;
    this.j = a;
    this.v = [];
    this.A = c;
    this.o = e;
  })(),
  mC = new (function () {
    this.j = XC;
    this.o = this.j.j;
  })(),
  LD = U(dv, "docs-eilttw"),
  MD;
if (U(dv, "docs-eiltdw")) MD = new Nm();
else {
  var ND = new Yl(ev);
  Um();
  var OD;
  OD = (Sm(), Rm);
  Tm.length == 0 && (Tm = "rootmain.js");
  if (LD && Vm && (OD || Tm !== "rootmain.js") && ND) {
    var PD = dh("Aa`rootmain.js`" + S(Tm));
    gu(ND.j, PD.J, null, !1);
  }
  Vm = !0;
  MD = OD;
}
var xv = new zz(ev, null, dv, KD, MD, void 0, void 0, !0);
ev.o.sid = ID;
var QD,
  qv,
  fv = (function (a) {
    var c = U(a, "docs-offline-ecpl"),
      e = Cl(a, "docs-offline-ue");
    a = Cl(a, "gaia_session_id") ? Cl(a, "gaia_session_id") : "0";
    a = xA(
      yA(new wA(306, a), function () {
        return e ? Vp([{ key: "e", value: e }]) : null;
      }),
    );
    a.v = !0;
    c && (a.o = "https://jmt17.google.com/log");
    return zA(a);
  })(dv);
qv = new cv();
if (U(dv, "docs-eil")) {
  ev.o.impression_sid = ID;
  var RD;
  RD = new nv();
  var SD = new eC();
  SD.A = RD;
  SD.v = new BB();
  SD.o = !0;
  var TD = SD.wa(ID),
    UD = TD.j;
  kf(UD.j, 6);
  uf(UD.j, 6, 135);
  var VD;
  zB(TD.j);
  var WD,
    bC,
    XD = new dC();
  XD.o = TD.j;
  bC = XD;
  bC.j == null && (bC.j = new mB());
  bC.j.j[HB.X()] = new cC();
  bC.j.j[DB.X()] = new XB();
  var YD = bC.j,
    ZD,
    $D = bC.o,
    aE = xB($D);
  if (!Ke(aE, sB, 1)) {
    var bE = xB($D),
      cE = new sB();
    N(bE, sB, 1, cE);
  }
  ZD = vB(xB($D));
  YD.o = ZD;
  for (var dE = Zp(YD.v), eE = 0; eE < dE.length; eE++) dE[eE].j(YD.o);
  WD = new aC();
  VD = new PB(WD, new VB(WD, TD.A, TD.v, TD.o, null), !1);
  var fE = VD.Ob(),
    gE = Cl(dv, "buildLabel");
  if (fE.o == null) {
    fE.o = new tB();
    var hE = xB(fE);
    N(hE, tB, 2, fE.o);
  }
  Ge(fE.o, 1, void 0, void 0);
  tf(fE.o, 1, gE);
  var iE = (function (a) {
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
    })(Cl(dv, "jobset")),
    jE = xB(fE);
  kf(jE, 4);
  var kE = xB(fE);
  uf(kE, 4, iE);
  var lE = lb(),
    mE = yB(fE);
  Ge(mE, 2, void 0, void 0);
  var nE = yB(fE);
  tf(nE, 2, lE);
  var oE = yB(fE);
  Ge(oE, 1, void 0, void 0);
  var pE = yB(fE);
  tf(pE, 1, "en");
  var qE = Date.now() * 1e3;
  jf(fE.j, 2);
  sf(fE.j, 2, qE);
  var rE,
    sE = new rB(),
    tE = !!Cl(dv, "docs-offline-lsuid");
  rE = qf(sE, 1, tE);
  var uE = vB(xB(fE));
  Ke(uE, rB, 20);
  var vE = vB(xB(fE));
  N(vE, rB, 20, rE);
  var wE;
  var xE = ql(),
    yE = xE.get("ilcm");
  if (yE == null) wE = null;
  else {
    var zE = ql();
    zE.get("ilcm") != null && U(zE, "icso") && Vl();
    var mv = yE.ei;
    xE.get("buildLabel");
    wE = new lv();
  }
  var AE = wE;
  if (AE) {
    var BE,
      CE,
      DE = new pm(),
      EE = (BE = AE.j) != null ? BE : [];
    CE = gf(DE, 1, EE);
    var FE = VD.Ob(),
      GE = yB(FE);
    Ke(GE, pm, 10);
    var HE = yB(FE);
    N(HE, pm, 10, CE);
  }
  VD.rd();
  QD = VD;
} else QD = new AB();
var fD = QD,
  YC = new (function () {
    var a = dv;
    Cl(a, "buildLabel");
    Cl(a, "jobset");
    this.o = {};
    this.j = null;
  })(),
  GD = uD(
    uD(
      new (function () {
        var a = YC;
        this.j = XC;
        this.v = mC;
        this.A = a;
        this.o = {};
      })(),
      new rD(dv),
    ),
    new sD(),
  ),
  IE;
if (vb() >= 117) {
  var JE = bD(
    bD(
      bD(
        bD(
          bD(
            bD(
              bD(
                bD(
                  bD(
                    bD(bD(bD(bD(new aD(), "/"), "/u/:useridx"), "/u/:useridx/"), "/document"),
                    "/spreadsheets",
                  ),
                  "/presentation",
                ),
                "/docs",
              ),
              "/sheets",
            ),
            "/slides",
          ),
          "/create",
        ),
        "/open",
      ),
      "/u/:useridx/open",
    ),
    "/a/*",
  );
  if (JE.j) throw Error("Qc");
  var KE = {
    condition: { urlPattern: new URLPattern({ protocol: "*", hostname: "*", pathname: "*" }) },
    source: "network",
  };
  if (JE.j) throw Error("Rc");
  JE.o.push(KE);
  JE.j = !0;
  IE = JE;
} else IE = null;
var gD = IE,
  FD = new (function () {
    var a = XC,
      c = fD,
      e = dv,
      f = new QC(a, e),
      g = ZA(e);
    e = new HC(g, e);
    this.o = new BC(a, new OA(g));
    this.j = mC;
    this.v = new NC(e, f, new lC(c));
  })();
new ED();
function _ModuleManager_initialize() {}
// Google Inc.

//# sourceMappingURL=root_sw_bin_root_main.sourcemap
