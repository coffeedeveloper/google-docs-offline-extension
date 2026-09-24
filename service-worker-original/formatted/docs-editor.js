function _F_toggles_initialize(a) {
  (typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
      ? self
      : this
  )._F_toggles = a || [];
}
_F_toggles_initialize([]);
function aa() {
  return function (a) {
    return a;
  };
}
function u() {
  return function () {};
}
function ba(a) {
  return function () {
    return this[a];
  };
}
function x(a) {
  return function () {
    return a;
  };
}
var A,
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
function C(a, c) {
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
var ia;
if (typeof Object.setPrototypeOf == "function") ia = Object.setPrototypeOf;
else {
  var ja;
  a: {
    var ka = { a: !0 },
      la = {};
    try {
      la.__proto__ = ka;
      ja = la.a;
      break a;
    } catch (a) {}
    ja = !1;
  }
  ia = ja
    ? function (a, c) {
        a.__proto__ = c;
        if (a.__proto__ !== c) throw new TypeError("b`" + a);
        return a;
      }
    : null;
}
var ma = ia;
function D(a, c) {
  a.prototype = ca(c.prototype);
  a.prototype.constructor = a;
  if (ma) ma(a, c);
  else
    for (var e in c)
      if (e != "prototype")
        if (Object.defineProperties) {
          var f = Object.getOwnPropertyDescriptor(c, e);
          f && Object.defineProperty(a, e, f);
        } else a[e] = c[e];
  a.xa = c.prototype;
}
function na(a) {
  var c = 0;
  return function () {
    return c < a.length ? { done: !1, value: a[c++] } : { done: !0 };
  };
}
function E(a) {
  var c = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
  if (c) return c.call(a);
  if (typeof a.length == "number") return { next: na(a) };
  throw Error("c`" + String(a));
}
function oa(a) {
  for (var c, e = []; !(c = a.next()).done; ) e.push(c.value);
  return e;
}
function pa(a) {
  return a instanceof Array ? a : oa(E(a));
}
function qa(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
}
var ra =
  typeof Object.assign == "function"
    ? Object.assign
    : function (a, c) {
        if (a == null) throw new TypeError("d");
        a = Object(a);
        for (var e = 1; e < arguments.length; e++) {
          var f = arguments[e];
          if (f) for (var g in f) qa(f, g) && (a[g] = f[g]);
        }
        return a;
      };
C("Object.assign", function (a) {
  return a || ra;
});
function sa(a) {
  if (!(a instanceof Object)) throw new TypeError("e`" + a);
}
function G() {
  this.I = !1;
  this.v = null;
  this.D = void 0;
  this.j = 1;
  this.A = this.C = 0;
  this.J = this.o = null;
}
function ta(a) {
  if (a.I) throw new TypeError("f");
  a.I = !0;
}
G.prototype.F = function (a) {
  this.D = a;
};
function ua(a, c) {
  a.o = { Pd: c, Wd: !0 };
  a.j = a.C || a.A;
}
G.prototype.getNextAddressJsc = ba("j");
G.prototype.getYieldResultJsc = ba("D");
G.prototype.return = function (a) {
  this.o = { return: a };
  this.j = this.A;
};
G.prototype["return"] = G.prototype.return;
G.prototype.T = function (a) {
  this.o = { Ka: a };
  this.A < a ? ((this.j = a), (this.o = null)) : (this.j = this.A);
};
G.prototype.jumpThroughFinallyBlocks = G.prototype.T;
G.prototype.B = function (a, c) {
  this.j = c;
  return { value: a };
};
G.prototype.yield = G.prototype.B;
G.prototype.X = function (a, c) {
  a = E(a);
  var e = a.next();
  sa(e);
  if (e.done) ((this.D = e.value), (this.j = c));
  else return ((this.v = a), this.B(e.value, c));
};
G.prototype.yieldAll = G.prototype.X;
G.prototype.Ka = function (a) {
  this.j = a;
};
G.prototype.jumpTo = G.prototype.Ka;
G.prototype.R = function () {
  this.j = 0;
};
G.prototype.jumpToEnd = G.prototype.R;
G.prototype.M = function (a, c) {
  this.C = a;
  c != void 0 && (this.A = c);
};
G.prototype.setCatchFinallyBlocks = G.prototype.M;
G.prototype.U = function (a) {
  this.C = 0;
  this.A = a || 0;
};
G.prototype.setFinallyBlock = G.prototype.U;
G.prototype.S = function (a, c) {
  this.j = a;
  this.C = c || 0;
};
G.prototype.leaveTryBlock = G.prototype.S;
G.prototype.N = function (a) {
  this.C = a || 0;
  a = this.o.Pd;
  this.o = null;
  return a;
};
G.prototype.enterCatchBlock = G.prototype.N;
G.prototype.H = function (a, c, e) {
  e ? (this.J[e] = this.o) : (this.J = [this.o]);
  this.C = a || 0;
  this.A = c || 0;
  this.o = null;
};
G.prototype.enterFinallyBlock = G.prototype.H;
G.prototype.K = function (a, c) {
  c = this.J.splice(c || 0)[0];
  (c = this.o = this.o || c)
    ? c.Wd
      ? (this.j = this.C || this.A)
      : c.Ka != void 0 && this.A < c.Ka
        ? ((this.j = c.Ka), (this.o = null))
        : (this.j = this.A)
    : (this.j = a);
};
G.prototype.leaveFinallyBlock = G.prototype.K;
G.prototype.O = function (a) {
  return new va(a);
};
G.prototype.forIn = G.prototype.O;
function va(a) {
  this.v = a;
  this.j = [];
  for (var c in a) this.j.push(c);
  this.j.reverse();
}
va.prototype.o = function () {
  for (; this.j.length > 0; ) {
    var a = this.j.pop();
    if (a in this.v) return a;
  }
  return null;
};
va.prototype.getNext = va.prototype.o;
function wa(a) {
  this.j = new G();
  this.o = a;
}
function xa(a, c) {
  ta(a.j);
  var e = a.j.v;
  if (e)
    return ya(
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
  return za(a);
}
function ya(a, c, e, f) {
  try {
    var g = c.call(a.j.v, e);
    sa(g);
    if (!g.done) return ((a.j.I = !1), g);
    var h = g.value;
  } catch (k) {
    return ((a.j.v = null), ua(a.j, k), za(a));
  }
  a.j.v = null;
  f.call(a.j, h);
  return za(a);
}
function za(a) {
  for (; a.j.j; )
    try {
      var c = a.o(a.j);
      if (c) return ((a.j.I = !1), { value: c.value, done: !1 });
    } catch (e) {
      ((a.j.D = void 0), ua(a.j, e));
    }
  a.j.I = !1;
  if (a.j.o) {
    c = a.j.o;
    a.j.o = null;
    if (c.Wd) throw c.Pd;
    return { value: c.return, done: !0 };
  }
  return { value: void 0, done: !0 };
}
function Aa(a) {
  this.next = function (c) {
    ta(a.j);
    a.j.v ? (c = ya(a, a.j.v.next, c, a.j.F)) : (a.j.F(c), (c = za(a)));
    return c;
  };
  this.throw = function (c) {
    ta(a.j);
    if (a.j.v) {
      var e = a.j.v["throw"];
      if (e) var f = ya(a, e, c, a.j.F);
      else {
        c = a.j.v;
        a.j.v = null;
        try {
          (c["return"] && ((f = c["return"]()), sa(f)), ua(a.j, new TypeError("g")));
        } catch (g) {
          ua(a.j, g);
        }
        f = za(a);
      }
    } else (ua(a.j, c), (f = za(a)));
    return f;
  };
  this.return = function (c) {
    return xa(a, c);
  };
  this[Symbol.iterator] = function () {
    return this;
  };
}
function Ba(a) {
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
function Ca(a) {
  return Ba(new Aa(new wa(a)));
}
function Da() {
  for (var a = Number(this), c = [], e = a; e < arguments.length; e++) c[e - a] = arguments[e];
  return c;
}
C("globalThis", function (a) {
  return a || fa;
});
C("Reflect.setPrototypeOf", function (a) {
  return a
    ? a
    : ma
      ? function (c, e) {
          try {
            return (ma(c, e), !0);
          } catch (f) {
            return !1;
          }
        }
      : null;
});
C("Symbol", function (a) {
  function c(h) {
    if (this instanceof c) throw new TypeError("h");
    return new e(f + (h || "") + "_" + g++, h);
  }
  function e(h, k) {
    this.j = h;
    da(this, "description", { configurable: !0, writable: !0, value: k });
  }
  if (a) return a;
  e.prototype.toString = ba("j");
  var f = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
    g = 0;
  return c;
});
C("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("i");
  da(Array.prototype, a, {
    configurable: !0,
    writable: !0,
    value: function () {
      return Ea(na(this));
    },
  });
  return a;
});
function Ea(a) {
  a = { next: a };
  a[Symbol.iterator] = function () {
    return this;
  };
  return a;
}
C("Promise", function (a) {
  function c(k) {
    this.j = 0;
    this.v = void 0;
    this.o = [];
    this.D = !1;
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
    return { resolve: k(this.J), reject: k(this.B) };
  };
  c.prototype.J = function (k) {
    if (k === this) this.B(new TypeError("j"));
    else if (k instanceof c) this.M(k);
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
      l ? this.H(k) : this.C(k);
    }
  };
  c.prototype.H = function (k) {
    var l = void 0;
    try {
      l = k.then;
    } catch (p) {
      this.B(p);
      return;
    }
    typeof l == "function" ? this.O(l, k) : this.C(k);
  };
  c.prototype.B = function (k) {
    this.I(2, k);
  };
  c.prototype.C = function (k) {
    this.I(1, k);
  };
  c.prototype.I = function (k, l) {
    if (this.j != 0) throw Error("k`" + k + "`" + l + "`" + this.j);
    this.j = k;
    this.v = l;
    this.j === 2 && this.K();
    this.F();
  };
  c.prototype.K = function () {
    var k = this;
    g(function () {
      if (k.N()) {
        var l = fa.console;
        typeof l !== "undefined" && l.error(k.v);
      }
    }, 1);
  };
  c.prototype.N = function () {
    if (this.D) return !1;
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
  c.prototype.F = function () {
    if (this.o != null) {
      for (var k = 0; k < this.o.length; ++k) h.o(this.o[k]);
      this.o = null;
    }
  };
  var h = new e();
  c.prototype.M = function (k) {
    var l = this.A();
    k.Hb(l.resolve, l.reject);
  };
  c.prototype.O = function (k, l) {
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
            } catch (F) {
              r(F);
            }
          }
        : z;
    }
    var q,
      r,
      w = new c(function (y, z) {
        q = y;
        r = z;
      });
    this.Hb(p(k, q), p(l, r));
    return w;
  };
  c.prototype.catch = function (k) {
    return this.then(void 0, k);
  };
  c.prototype.Hb = function (k, l) {
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
    this.D = !0;
  };
  c.resolve = f;
  c.reject = function (k) {
    return new c(function (l, p) {
      p(k);
    });
  };
  c.race = function (k) {
    return new c(function (l, p) {
      for (var q = E(k), r = q.next(); !r.done; r = q.next()) f(r.value).Hb(l, p);
    });
  };
  c.all = function (k) {
    var l = E(k),
      p = l.next();
    return p.done
      ? f([])
      : new c(function (q, r) {
          function w(B) {
            return function (F) {
              y[B] = F;
              z--;
              z == 0 && q(y);
            };
          }
          var y = [],
            z = 0;
          do (y.push(void 0), z++, f(p.value).Hb(w(y.length - 1), r), (p = l.next()));
          while (!p.done);
        });
  };
  return c;
});
function Fa(a, c, e) {
  if (a == null) throw new TypeError("m`" + e);
  if (c instanceof RegExp) throw new TypeError("n`" + e);
  return a + "";
}
C("String.prototype.startsWith", function (a) {
  return a
    ? a
    : function (c, e) {
        var f = Fa(this, c, "startsWith"),
          g = f.length,
          h = c.length;
        e = Math.max(0, Math.min(e | 0, f.length));
        for (var k = 0; k < h && e < g; ) if (f[e++] != c[k++]) return !1;
        return k >= h;
      };
});
C("Object.setPrototypeOf", function (a) {
  return a || ma;
});
C("Symbol.dispose", function (a) {
  return a ? a : Symbol("o");
});
C("Array.prototype.find", function (a) {
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
C("WeakMap", function (a) {
  function c(p) {
    this.j = (l += Math.random() + 1).toString();
    if (p) {
      p = E(p);
      for (var q; !(q = p.next()).done; ) ((q = q.value), this.set(q[0], q[1]));
    }
  }
  function e() {}
  function f(p) {
    var q = typeof p;
    return (q === "object" && p !== null) || q === "function";
  }
  function g(p) {
    if (!qa(p, k)) {
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
      } catch (w) {
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
    if (!qa(p, k)) throw Error("q`" + p);
    p[k][this.j] = q;
    return this;
  };
  c.prototype.get = function (p) {
    return f(p) && qa(p, k) ? p[k][this.j] : void 0;
  };
  c.prototype.has = function (p) {
    return f(p) && qa(p, k) && qa(p[k], this.j);
  };
  c.prototype.delete = function (p) {
    return f(p) && qa(p, k) && qa(p[k], this.j) ? delete p[k][this.j] : !1;
  };
  return c;
});
C("Map", function (a) {
  function c() {
    var l = {};
    return (l.La = l.next = l.head = l);
  }
  function e(l, p) {
    var q = l[1];
    return Ea(function () {
      if (q) {
        for (; q.head != l[1]; ) q = q.La;
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
    if (r && qa(l[0], q))
      for (l = 0; l < r.length; l++) {
        var w = r[l];
        if ((p !== p && w.key !== w.key) || p === w.key)
          return { id: q, list: r, index: l, entry: w };
      }
    return { id: q, list: r, index: -1, entry: void 0 };
  }
  function g(l) {
    this[0] = {};
    this[1] = c();
    this.size = 0;
    if (l) {
      l = E(l);
      for (var p; !(p = l.next()).done; ) ((p = p.value), this.set(p[0], p[1]));
    }
  }
  if (
    (function () {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
        return !1;
      try {
        var l = Object.seal({ x: 4 }),
          p = new a(E([[l, "s"]]));
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
      } catch (w) {
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
      : ((q.entry = { next: this[1], La: this[1].La, head: this[1], key: l, value: p }),
        q.list.push(q.entry),
        (this[1].La.next = q.entry),
        (this[1].La = q.entry),
        this.size++);
    return this;
  };
  g.prototype.delete = function (l) {
    l = f(this, l);
    return l.entry && l.list
      ? (l.list.splice(l.index, 1),
        l.list.length || delete this[0][l.id],
        (l.entry.La.next = l.entry.next),
        (l.entry.next.La = l.entry.La),
        (l.entry.head = null),
        this.size--,
        !0)
      : !1;
  };
  g.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].La = c();
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
C("Set", function (a) {
  function c(e) {
    this.j = new Map();
    if (e) {
      e = E(e);
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
          f = new a(E([e]));
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
C("Object.values", function (a) {
  return a
    ? a
    : function (c) {
        var e = [],
          f;
        for (f in c) qa(c, f) && e.push(c[f]);
        return e;
      };
});
C("Object.is", function (a) {
  return a
    ? a
    : function (c, e) {
        return c === e ? c !== 0 || 1 / c === 1 / e : c !== c && e !== e;
      };
});
C("Array.prototype.includes", function (a) {
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
C("String.prototype.includes", function (a) {
  return a
    ? a
    : function (c, e) {
        return Fa(this, c, "includes").indexOf(c, e || 0) !== -1;
      };
});
C("Array.from", function (a) {
  return a
    ? a
    : function (c, e, f) {
        e = e != null ? e : aa();
        var g = [],
          h = typeof Symbol != "undefined" && Symbol.iterator && c[Symbol.iterator];
        if (typeof h == "function") {
          c = h.call(c);
          for (var k = 0; !(h = c.next()).done; ) g.push(e.call(f, h.value, k++));
        } else for (h = c.length, k = 0; k < h; k++) g.push(e.call(f, c[k], k));
        return g;
      };
});
C("Object.entries", function (a) {
  return a
    ? a
    : function (c) {
        var e = [],
          f;
        for (f in c) qa(c, f) && e.push([f, c[f]]);
        return e;
      };
});
C("Number.isFinite", function (a) {
  return a
    ? a
    : function (c) {
        return typeof c !== "number" ? !1 : !isNaN(c) && c !== Infinity && c !== -Infinity;
      };
});
C("Number.MAX_SAFE_INTEGER", x(9007199254740991));
C("Number.MIN_SAFE_INTEGER", x(-9007199254740991));
C("Number.isInteger", function (a) {
  return a
    ? a
    : function (c) {
        return Number.isFinite(c) ? c === Math.floor(c) : !1;
      };
});
C("Number.isSafeInteger", function (a) {
  return a
    ? a
    : function (c) {
        return Number.isInteger(c) && Math.abs(c) <= Number.MAX_SAFE_INTEGER;
      };
});
C("String.prototype.endsWith", function (a) {
  return a
    ? a
    : function (c, e) {
        var f = Fa(this, c, "endsWith");
        e === void 0 && (e = f.length);
        e = Math.max(0, Math.min(e | 0, f.length));
        for (var g = c.length; g > 0 && e > 0; ) if (f[--e] != c[--g]) return !1;
        return g <= 0;
      };
});
function Ga(a, c) {
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
C("Array.prototype.entries", function (a) {
  return a
    ? a
    : function () {
        return Ga(this, function (c, e) {
          return [c, e];
        });
      };
});
C("Math.trunc", function (a) {
  return a
    ? a
    : function (c) {
        c = Number(c);
        if (isNaN(c) || c === Infinity || c === -Infinity || c === 0) return c;
        var e = Math.floor(Math.abs(c));
        return c < 0 ? -e : e;
      };
});
C("Number.isNaN", function (a) {
  return a
    ? a
    : function (c) {
        return typeof c === "number" && isNaN(c);
      };
});
C("Array.prototype.keys", function (a) {
  return a
    ? a
    : function () {
        return Ga(this, aa());
      };
});
C("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return Ga(this, function (c, e) {
          return e;
        });
      };
});
C("Math.imul", function (a) {
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
C("String.fromCodePoint", function (a) {
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
C("String.prototype.repeat", function (a) {
  return a
    ? a
    : function (c) {
        var e = Fa(this, null, "repeat");
        if (c < 0 || c > 1342177279) throw new RangeError("s");
        c |= 0;
        for (var f = ""; c; ) if ((c & 1 && (f += e), (c >>>= 1))) e += e;
        return f;
      };
});
C("Object.hasOwn", function (a) {
  return a
    ? a
    : function (c, e) {
        return Object.prototype.hasOwnProperty.call(c, e);
      };
});
C("Promise.allSettled", function (a) {
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
C("String.prototype.matchAll", function (a) {
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
C("Array.prototype.flatMap", function (a) {
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
C("Promise.prototype.finally", function (a) {
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
var Ha = Ha || {},
  I = this || self;
function Ja(a, c) {
  var e = Ka("WIZ_global_data.oxN3nb");
  a = e && e[a];
  return a != null ? a : c;
}
var La = I._F_toggles || [];
function Ka(a) {
  a = a.split(".");
  for (var c = I, e = 0; e < a.length; e++) if (((c = c[a[e]]), c == null)) return null;
  return c;
}
function Ma(a) {
  var c = typeof a;
  return c != "object" ? c : a ? (Array.isArray(a) ? "array" : c) : "null";
}
function Na(a) {
  var c = Ma(a);
  return c == "array" || (c == "object" && typeof a.length == "number");
}
function Oa(a) {
  var c = typeof a;
  return (c == "object" && a != null) || c == "function";
}
function Qa(a) {
  return (Object.prototype.hasOwnProperty.call(a, Ra) && a[Ra]) || (a[Ra] = ++Sa);
}
var Ra = "closure_uid_" + ((Math.random() * 1e9) >>> 0),
  Sa = 0;
function Ta(a, c, e) {
  return a.call.apply(a.bind, arguments);
}
function Ua(a, c, e) {
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
function Va(a, c, e) {
  Va =
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1
      ? Ta
      : Ua;
  return Va.apply(null, arguments);
}
function Wa(a, c) {
  var e = Array.prototype.slice.call(arguments, 1);
  return function () {
    var f = e.slice();
    f.push.apply(f, arguments);
    return a.apply(this, f);
  };
}
function Xa(a) {
  (0, eval)(a);
}
function Ya(a) {
  return a;
}
function Za(a, c) {
  function e() {}
  e.prototype = c.prototype;
  a.xa = c.prototype;
  a.prototype = new e();
  a.prototype.constructor = a;
  a.Pf = function (f, g, h) {
    for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++)
      k[l - 2] = arguments[l];
    return c.prototype[g].apply(f, k);
  };
}
function $a(a, c) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, $a);
  else {
    var e = Error().stack;
    e && (this.stack = e);
  }
  a && (this.message = String(a));
  c !== void 0 && (this.cause = c);
  this.v = !0;
}
Za($a, Error);
$a.prototype.name = "CustomError";
var ab;
function bb(a) {
  I.setTimeout(function () {
    throw a;
  }, 0);
}
function cb(a, c) {
  return a.lastIndexOf(c, 0) == 0;
}
function db(a) {
  return /^[\s\xa0]*$/.test(a);
}
var eb = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      },
  fb = /&/g,
  gb = /</g,
  hb = />/g,
  ib = /"/g,
  jb = /'/g,
  kb = /\x00/g,
  lb = /[\x00&<>"']/;
function mb() {
  for (
    var a = 0,
      c = eb(String(nb)).split("."),
      e = eb("58.0.3029.52").split("."),
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
        ob(h[1].length == 0 ? 0 : parseInt(h[1], 10), k[1].length == 0 ? 0 : parseInt(k[1], 10)) ||
        ob(h[2].length == 0, k[2].length == 0) ||
        ob(h[2], k[2]);
      h = h[3];
      k = k[3];
    } while (a == 0);
  }
  return a;
}
function ob(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
}
var pb = !!((La[0] >> 24) & 1),
  qb = !!((La[0] >> 19) & 1),
  rb = !!((La[0] >> 26) & 1),
  sb = !!(La[0] & 4096);
var tb = pb ? rb : Ja(610401301, !1),
  ub = pb ? qb || !sb : Ja(748402147, !0);
function vb() {
  var a = I.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var wb,
  xb = I.navigator;
wb = xb ? xb.userAgentData || null : null;
function yb(a) {
  if (!tb || !wb) return !1;
  for (var c = 0; c < wb.brands.length; c++) {
    var e = wb.brands[c].brand;
    if (e && e.indexOf(a) != -1) return !0;
  }
  return !1;
}
function zb(a) {
  return vb().indexOf(a) != -1;
}
function Ab() {
  return tb ? !!wb && wb.brands.length > 0 : !1;
}
function Bb() {
  return zb("Firefox") || zb("FxiOS");
}
function Cb() {
  return Ab()
    ? yb("Chromium")
    : ((zb("Chrome") || zb("CriOS")) && !(Ab() ? 0 : zb("Edge"))) || zb("Silk");
}
function Db(a) {
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
function Eb() {
  for (
    var a = vb(), c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), e = [], f;
    (f = c.exec(a));

  )
    e.push([f[1], f[2], f[3] || void 0]);
  a = Db(e);
  return Cb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : "";
}
function Fb() {
  if (Ab()) {
    var a = wb.brands.find(function (c) {
      return c.brand === "Chromium";
    });
    if (!a || !a.version) return NaN;
    a = a.version.split(".");
  } else {
    a = Eb();
    if (a === "") return NaN;
    a = a.split(".");
  }
  return a.length === 0 ? NaN : Number(a[0]);
}
function Gb() {
  return zb("iPhone") && !zb("iPod") && !zb("iPad");
}
function Hb() {
  return Gb() || zb("iPad") || zb("iPod");
}
function Ib(a, c) {
  return Array.prototype.indexOf.call(a, c, void 0);
}
function Jb(a, c) {
  Array.prototype.forEach.call(a, c, void 0);
}
function Kb(a, c) {
  return Array.prototype.some.call(a, c, void 0);
}
function Lb(a, c) {
  return Ib(a, c) >= 0;
}
function Mb(a, c) {
  c = Ib(a, c);
  var e;
  (e = c >= 0) && Array.prototype.splice.call(a, c, 1);
  return e;
}
function Nb(a, c) {
  for (var e = 1; e < arguments.length; e++) {
    var f = arguments[e];
    if (Na(f)) {
      var g = a.length || 0,
        h = f.length || 0;
      a.length = g + h;
      for (var k = 0; k < h; k++) a[g + k] = f[k];
    } else a.push(f);
  }
}
function Ob(a, c) {
  function e(p) {
    return Oa(p) ? "o" + Qa(p) : (typeof p).charAt(0) + p;
  }
  c = c || e;
  for (var f = 0, g = 0, h = {}; g < a.length; ) {
    var k = a[g++],
      l = c(k);
    Object.prototype.hasOwnProperty.call(h, l) || ((h[l] = !0), (a[f++] = k));
  }
  a.length = f;
}
function Pb(a, c) {
  if (!Na(a) || !Na(c) || a.length != c.length) return !1;
  for (var e = a.length, f = Qb, g = 0; g < e; g++) if (!f(a[g], c[g])) return !1;
  return !0;
}
function Qb(a, c) {
  return a === c;
}
function Rb(a) {
  Rb[" "](a);
  return a;
}
Rb[" "] = u();
var Sb = Bb(),
  Tb = Gb() || zb("iPod"),
  Ub = zb("iPad"),
  Vb = zb("Android") && !(Cb() || Bb() || (Ab() ? 0 : zb("Opera")) || zb("Silk")),
  Wb = Cb(),
  Xb =
    zb("Safari") &&
    !(
      Cb() ||
      (Ab() ? 0 : zb("Coast")) ||
      (Ab() ? 0 : zb("Opera")) ||
      (Ab() ? 0 : zb("Edge")) ||
      (Ab() ? yb("Microsoft Edge") : zb("Edg/")) ||
      (Ab() ? yb("Opera") : zb("OPR")) ||
      Bb() ||
      zb("Silk") ||
      zb("Android")
    ) &&
    !Hb();
var Yb = {},
  Zb = null;
function $b(a) {
  var c = [];
  ac(a, function (e) {
    c.push(e);
  });
  return c;
}
function bc(a) {
  var c = a.length,
    e = (c * 3) / 4;
  e % 3
    ? (e = Math.floor(e))
    : "=.".indexOf(a[c - 1]) != -1 && (e = "=.".indexOf(a[c - 2]) != -1 ? e - 2 : e - 1);
  var f = new Uint8Array(e),
    g = 0;
  ac(a, function (h) {
    f[g++] = h;
  });
  return g !== e ? f.subarray(0, g) : f;
}
function ac(a, c) {
  function e(p) {
    for (; f < a.length; ) {
      var q = a.charAt(f++),
        r = Zb[q];
      if (r != null) return r;
      if (!db(q)) throw Error("w`" + q);
    }
    return p;
  }
  cc();
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
function cc() {
  if (!Zb) {
    Zb = {};
    for (
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
        c = ["+/=", "+/", "-_=", "-_.", "-_"],
        e = 0;
      e < 5;
      e++
    ) {
      var f = a.concat(c[e].split(""));
      Yb[e] = f;
      for (var g = 0; g < f.length; g++) {
        var h = f[g];
        Zb[h] === void 0 && (Zb[h] = g);
      }
    }
  }
}
var dc = typeof Uint8Array !== "undefined",
  ec = typeof btoa === "function",
  fc = /[-_.]/g,
  hc = { "-": "+", _: "/", ".": "=" };
function ic(a) {
  return hc[a] || "";
}
function kc(a) {
  if (!ec) return bc(a);
  a = fc.test(a) ? a.replace(fc, ic) : a;
  a = atob(a);
  for (var c = new Uint8Array(a.length), e = 0; e < a.length; e++) c[e] = a.charCodeAt(e);
  return c;
}
function lc(a) {
  return dc && a != null && a instanceof Uint8Array;
}
function mc(a, c) {
  var e = a.length;
  if (e !== c.length) return !1;
  for (var f = 0; f < e; f++) if (a[f] !== c[f]) return !1;
  return !0;
}
var nc = {},
  oc = typeof structuredClone != "undefined";
function pc(a, c) {
  if (c !== nc) throw Error("y");
  this.j = a;
  if (a != null && a.length === 0) throw Error("x");
}
function qc() {
  return rc || (rc = new pc(null, nc));
}
function tc(a) {
  var c = a.j;
  if (c == null) a = "";
  else if (typeof c === "string") a = c;
  else {
    if (ec) {
      for (var e = "", f = 0, g = c.length - 10240; f < g; )
        e += String.fromCharCode.apply(null, c.subarray(f, (f += 10240)));
      e += String.fromCharCode.apply(null, f ? c.subarray(f) : c);
      c = btoa(e);
    } else {
      e === void 0 && (e = 0);
      cc();
      e = Yb[e];
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
function uc(a, c) {
  if (!a.j || !c.j || a.j === c.j) return a.j === c.j;
  if (typeof a.j === "string" && typeof c.j === "string") {
    var e = a.j,
      f = c.j;
    c.j.length > a.j.length && ((f = a.j), (e = c.j));
    if (e.lastIndexOf(f, 0) !== 0) return !1;
    for (c = f.length; c < e.length; c++) if (e[c] !== "=") return !1;
    return !0;
  }
  e = vc(a);
  c = vc(c);
  return mc(e, c);
}
function vc(a) {
  if (nc !== nc) throw Error("y");
  var c = a.j;
  c = c == null || lc(c) ? c : typeof c === "string" ? kc(c) : null;
  return c == null ? c : (a.j = c);
}
function wc(a, c) {
  if (typeof c === "string") c = c ? new pc(c, nc) : qc();
  else if (c instanceof Uint8Array) c = new pc(c, nc);
  else if (!(c instanceof pc)) return !1;
  return uc(a, c);
}
var rc;
function xc(a, c, e) {
  a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
  a.__closure__error__context__984382[c] = e;
}
function yc(a) {
  return a.__closure__error__context__984382 || {};
}
var zc = void 0;
function Ac(a) {
  a = Error(a);
  xc(a, "severity", "warning");
  return a;
}
function Bc(a, c) {
  if (a != null) {
    var e;
    var f = (e = zc) != null ? e : (zc = {});
    e = f[a] || 0;
    e >= c || ((f[a] = e + 1), (a = Error()), xc(a, "severity", "incident"), bb(a));
  }
}
function Cc() {
  return typeof BigInt === "function";
}
var Dc = typeof Symbol === "function" && typeof Symbol() === "symbol";
function Ec(a, c, e) {
  return typeof Symbol === "function" && typeof Symbol() === "symbol"
    ? (e === void 0 ? 0 : e) && Symbol.for && a
      ? Symbol.for(a)
      : a != null
        ? Symbol(a)
        : Symbol()
    : c;
}
var Fc = Ec("jas", void 0, !0),
  Gc = Ec(void 0, "0di"),
  Hc = Ec(void 0, "1oa"),
  Ic = Ec(void 0, "ijhc"),
  Jc = Ec(void 0, Symbol()),
  Kc = Ec(void 0, "0ub"),
  Lc = Ec(void 0, "0ubs"),
  Mc = Ec(void 0, "0actk"),
  Nc = Ec("m_m", "Tf", !0),
  Oc = Ec();
var Pc = { He: { value: 0, configurable: !0, writable: !0, enumerable: !1 } },
  Qc = Object.defineProperties,
  K = Dc ? Fc : "He",
  Rc,
  Sc = [];
Tc(Sc, 7);
Rc = Object.freeze(Sc);
function Uc(a, c) {
  Dc || K in a || Qc(a, Pc);
  a[K] |= c;
}
function Tc(a, c) {
  Dc || K in a || Qc(a, Pc);
  a[K] = c;
}
function Vc(a) {
  Uc(a, 34);
  return a;
}
function Wc(a) {
  Uc(a, 32);
  return a;
}
var Xc = {};
function Yc(a) {
  return a[Nc] === Xc;
}
var Zc = {};
function $c(a, c) {
  return c === void 0 ? a.j !== ad && !!(2 & (a.G[K] | 0)) : !!(2 & c) && a.j !== ad;
}
var ad = {};
function bd(a) {
  return !Array.isArray(a) || a.length ? !1 : (a[K] | 0) & 1 ? !0 : !1;
}
var cd = Object.freeze({}),
  ed = Object.freeze({});
function fd(a, c, e) {
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
var L = {};
function gd(a) {
  return a & 128 ? L : void 0;
}
function hd(a) {
  a.Sf = !0;
  return a;
}
var id = hd(function (a) {
    return typeof a === "number";
  }),
  jd = hd(function (a) {
    return typeof a === "string";
  }),
  kd = hd(function (a) {
    return typeof a === "boolean";
  }),
  ld = hd(function (a) {
    return typeof a === "bigint";
  });
var md = typeof I.BigInt === "function" && typeof I.BigInt(0) === "bigint";
function nd(a) {
  var c = a;
  if (jd(c)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(c)) throw Error(String(c));
  } else if (id(c) && !Number.isSafeInteger(c)) throw Error(String(c));
  return md ? BigInt(a) : (a = kd(a) ? (a ? "1" : "0") : jd(a) ? a.trim() || "0" : String(a));
}
var od = hd(function (a) {
    return md ? ld(a) : jd(a) && /^(?:-?[1-9]\d*|0)$/.test(a);
  }),
  ud = hd(function (a) {
    return md ? a >= pd && a <= qd : a[0] === "-" ? rd(a, sd) : rd(a, td);
  }),
  sd = Number.MIN_SAFE_INTEGER.toString(),
  pd = md ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
  td = Number.MAX_SAFE_INTEGER.toString(),
  qd = md ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function rd(a, c) {
  if (a.length > c.length) return !1;
  if (a.length < c.length || a === c) return !0;
  for (var e = 0; e < a.length; e++) {
    var f = a[e],
      g = c[e];
    if (f > g) return !1;
    if (f < g) return !0;
  }
}
var vd = typeof Uint8Array.prototype.slice === "function",
  wd = 0,
  xd = 0;
function yd(a) {
  var c = a >>> 0;
  wd = c;
  xd = ((a - c) / 4294967296) >>> 0;
}
function zd(a) {
  if (a < 0) {
    yd(-a);
    var c = E(Ad(wd, xd));
    a = c.next().value;
    c = c.next().value;
    wd = a >>> 0;
    xd = c >>> 0;
  } else yd(a);
}
function Bd(a, c) {
  c >>>= 0;
  a >>>= 0;
  if (c <= 2097151) var e = "" + (4294967296 * c + a);
  else
    Cc()
      ? (e = "" + ((BigInt(c) << BigInt(32)) | BigInt(a)))
      : ((e = ((a >>> 24) | (c << 8)) & 16777215),
        (c = (c >> 16) & 65535),
        (a = (a & 16777215) + e * 6777216 + c * 6710656),
        (e += c * 8147497),
        (c *= 2),
        a >= 1e7 && ((e += (a / 1e7) >>> 0), (a %= 1e7)),
        e >= 1e7 && ((c += (e / 1e7) >>> 0), (e %= 1e7)),
        (e = c + Cd(e) + Cd(a)));
  return e;
}
function Cd(a) {
  a = String(a);
  return "0000000".slice(a.length) + a;
}
function Dd() {
  var a = wd,
    c = xd;
  c & 2147483648
    ? Cc()
      ? (a = "" + ((BigInt(c | 0) << BigInt(32)) | BigInt(a >>> 0)))
      : ((c = E(Ad(a, c))), (a = c.next().value), (c = c.next().value), (a = "-" + Bd(a, c)))
    : (a = Bd(a, c));
  return a;
}
function Ad(a, c) {
  c = ~c;
  a ? (a = ~a + 1) : (c += 1);
  return [a, c];
}
function Ed(a) {
  return Array.prototype.slice.call(a);
}
var Fd = typeof BigInt === "function" ? BigInt.asIntN : void 0,
  Gd = Number.isSafeInteger,
  Hd = Number.isFinite,
  Id = Math.trunc;
function Jd(a) {
  if (a == null || typeof a === "number") return a;
  if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a);
}
function Kd(a) {
  return a.displayName || a.name || "unknown type name";
}
function Ld(a) {
  if (a == null || typeof a === "boolean") return a;
  if (typeof a === "number") return !!a;
}
var Md = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Nd(a) {
  switch (typeof a) {
    case "bigint":
      return !0;
    case "number":
      return Hd(a);
    case "string":
      return Md.test(a);
    default:
      return !1;
  }
}
function Od(a) {
  if (!Hd(a)) throw Ac("enum");
  return a | 0;
}
function Pd(a) {
  return a == null ? a : Hd(a) ? a | 0 : void 0;
}
function Qd(a) {
  if (typeof a !== "number") throw Ac("int32");
  if (!Hd(a)) throw Ac("int32");
  return a | 0;
}
function Rd(a) {
  if (a == null) return a;
  if (typeof a === "string" && a) a = +a;
  else if (typeof a !== "number") return;
  return Hd(a) ? a | 0 : void 0;
}
function Sd(a) {
  var c = void 0;
  c != null || (c = 1024);
  if (!Nd(a)) throw Ac("int64");
  var e = typeof a;
  switch (c) {
    case 512:
      switch (e) {
        case "string":
          return Td(a);
        case "bigint":
          return String(Fd(64, a));
        default:
          return Ud(a);
      }
    case 1024:
      switch (e) {
        case "string":
          return Vd(a);
        case "bigint":
          return nd(Fd(64, a));
        default:
          return Wd(a);
      }
    case 0:
      switch (e) {
        case "string":
          return Td(a);
        case "bigint":
          return nd(Fd(64, a));
        default:
          return Xd(a);
      }
    default:
      throw Error("Unknown format requested type for int64");
  }
}
function Yd(a) {
  var c = a.length;
  if (
    a[0] === "-"
      ? c < 20 || (c === 20 && a <= "-9223372036854775808")
      : c < 19 || (c === 19 && a <= "9223372036854775807")
  )
    return a;
  if (a.length < 16) zd(Number(a));
  else if (Cc())
    ((a = BigInt(a)),
      (wd = Number(a & BigInt(4294967295)) >>> 0),
      (xd = Number((a >> BigInt(32)) & BigInt(4294967295))));
  else {
    c = +(a[0] === "-");
    xd = wd = 0;
    for (var e = a.length, f = c, g = ((e - c) % 6) + c; g <= e; f = g, g += 6)
      ((f = Number(a.slice(f, g))),
        (xd *= 1e6),
        (wd = wd * 1e6 + f),
        wd >= 4294967296 && ((xd += Math.trunc(wd / 4294967296)), (xd >>>= 0), (wd >>>= 0)));
    c && ((c = E(Ad(wd, xd))), (a = c.next().value), (c = c.next().value), (wd = a), (xd = c));
  }
  return Dd();
}
function Xd(a) {
  Nd(a);
  a = Id(a);
  if (!Gd(a)) {
    zd(a);
    var c = wd,
      e = xd;
    if ((a = e & 2147483648)) ((c = (~c + 1) >>> 0), (e = ~e >>> 0), c == 0 && (e = (e + 1) >>> 0));
    var f = e * 4294967296 + (c >>> 0);
    c = Number.isSafeInteger(f) ? f : Bd(c, e);
    a = typeof c === "number" ? (a ? -c : c) : a ? "-" + c : c;
  }
  return a;
}
function Ud(a) {
  Nd(a);
  a = Id(a);
  Gd(a) ? (a = String(a)) : (zd(a), (a = Dd()));
  return a;
}
function Td(a) {
  Nd(a);
  var c = Id(Number(a));
  if (Gd(c)) return String(c);
  c = a.indexOf(".");
  c !== -1 && (a = a.substring(0, c));
  return Yd(a);
}
function Vd(a) {
  var c = Id(Number(a));
  if (Gd(c)) return nd(c);
  c = a.indexOf(".");
  c !== -1 && (a = a.substring(0, c));
  return Cc() ? nd(Fd(64, BigInt(a))) : nd(Yd(a));
}
function Wd(a) {
  return Gd(a) ? nd(Xd(a)) : nd(Ud(a));
}
function Zd(a) {
  var c = c === void 0 ? !1 : c;
  var e = typeof a;
  if (a == null) return a;
  if (e === "bigint") return String(Fd(64, a));
  if (Nd(a)) return e === "string" ? Td(a) : c ? Ud(a) : Xd(a);
}
function $d(a) {
  var c = typeof a;
  if (a == null) return a;
  if (c === "bigint") return nd(Fd(64, a));
  if (Nd(a)) return c === "string" ? Vd(a) : Wd(a);
}
function ae(a) {
  return a == null || typeof a === "string" ? a : void 0;
}
function be(a, c) {
  if (!(a instanceof c)) throw Error("B`" + Kd(c) + "`" + (a && Kd(a.constructor)));
  return a;
}
function ce(a, c, e, f) {
  if (a != null && Yc(a)) return a;
  if (!Array.isArray(a)) return e ? (f & 2 ? c[Gc] || (c[Gc] = de(c)) : new c()) : void 0;
  e = a[K] | 0;
  f = e | (f & 32) | (f & 2);
  f !== e && Tc(a, f);
  return new c(a);
}
function de(a) {
  a = new a();
  Vc(a.G);
  return a;
}
function ee(a) {
  return a;
}
function fe(a, c) {
  if (typeof c === "string")
    try {
      c = kc(c);
    } catch (e) {
      return !1;
    }
  return lc(c) && mc(a, c);
}
function ge(a) {
  switch (a) {
    case "bigint":
    case "string":
    case "number":
      return !0;
    default:
      return !1;
  }
}
function he(a, c) {
  if (Yc(a)) a = a.G;
  else if (!Array.isArray(a)) return !1;
  if (Yc(c)) c = c.G;
  else if (!Array.isArray(c)) return !1;
  return ie(a, c, void 0, 2);
}
function je(a, c, e) {
  return ie(a, c, e, 0);
}
function ie(a, c, e, f) {
  if (a === c || (a == null && c == null)) return !0;
  if (a instanceof Map) return a.Ie(c, e);
  if (c instanceof Map) return c.Ie(a, e);
  if (a == null || c == null) return !1;
  if (a instanceof pc) return wc(a, c);
  if (c instanceof pc) return wc(c, a);
  if (lc(a)) return fe(a, c);
  if (lc(c)) return fe(c, a);
  var g = typeof a,
    h = typeof c;
  if (g !== "object" || h !== "object")
    return Number.isNaN(a) || Number.isNaN(c)
      ? String(a) === String(c)
      : ge(g) && ge(h)
        ? "" + a === "" + c
        : (g === "boolean" && h === "number") || (g === "number" && h === "boolean")
          ? !a === !c
          : !1;
  if (Yc(a) || Yc(c)) return he(a, c);
  if (a.constructor != c.constructor) return !1;
  if (a.constructor === Array) {
    h = a[K] | 0;
    var k = c[K] | 0,
      l = a.length,
      p = c.length,
      q = Math.max(l, p);
    g = (h | k | 64) & 128 ? 0 : -1;
    if (f === 1 || (h | k) & 1) f = 1;
    else if ((h | k) & 8192) return ke(a, c);
    h = l && a[l - 1];
    k = p && c[p - 1];
    (h != null && typeof h === "object" && h.constructor === Object) || (h = null);
    (k != null && typeof k === "object" && k.constructor === Object) || (k = null);
    l = l - g - +!!h;
    p = p - g - +!!k;
    for (var r = 0; r < q; r++) if (!me(r - g, a, h, l, c, k, p, g, e, f)) return !1;
    if (h)
      for (var w in h) {
        f = a;
        q = h;
        r = l;
        var y = c,
          z = k,
          B = p,
          F = g,
          J = e,
          W = +w;
        if (!(!Number.isFinite(W) || W < r || W < B || me(W, f, q, r, y, z, B, F, J, 2))) return !1;
      }
    if (k)
      for (var ha in k)
        if (
          ((w = h && ha in h) ||
            ((w = a),
            (f = h),
            (q = l),
            (r = c),
            (y = k),
            (z = p),
            (B = g),
            (F = e),
            (J = +ha),
            (w = !Number.isFinite(J) || J < q || J < z ? !0 : me(J, w, f, q, r, y, z, B, F, 2))),
          !w)
        )
          return !1;
    return !0;
  }
  if (a.constructor === Object) return je([a], [c]);
  throw Error();
}
function me(a, c, e, f, g, h, k, l, p, q) {
  c = ne(a, c, e, f, l);
  g = ne(a, g, h, k, l);
  q = q === 1;
  if ((g == null && bd(c)) || (c == null && bd(g))) return !0;
  a = q ? p : p == null ? void 0 : p.j(a);
  return ie(c, g, a, 0);
}
function ne(a, c, e, f, g) {
  var h;
  return (h = a < f ? c[a + g] : void 0) != null ? h : e == null ? void 0 : e[a];
}
function oe(a, c) {
  if (!Array.isArray(a) || !Array.isArray(c)) return 0;
  a = "" + a[0];
  c = "" + c[0];
  return a === c ? 0 : a < c ? -1 : 1;
}
function ke(a, c) {
  if (!Array.isArray(a) || !Array.isArray(c)) return !1;
  a = Ed(a);
  c = Ed(c);
  Array.prototype.sort.call(a, oe);
  Array.prototype.sort.call(c, oe);
  var e = a.length,
    f = c.length;
  if (e === 0 && f === 0) return !0;
  for (var g = 0, h = 0; g < e && h < f; ) {
    var k = void 0,
      l = a[g];
    if (!Array.isArray(l)) return !1;
    for (var p = l[0]; g < e - 1 && je((k = a[g + 1])[0], p); ) (g++, (l = k));
    var q = void 0;
    k = c[h];
    if (!Array.isArray(k)) return !1;
    for (var r = k[0]; h < f - 1 && je((q = c[h + 1])[0], r); ) (h++, (k = q));
    if (!je(p, r)) return !1;
    p = void 0;
    if (!je(l[1], k[1], (p = void 0) == null ? void 0 : p.j(2))) return !1;
    g++;
    h++;
  }
  return g >= e && h >= f;
}
function pe(a) {
  var c = Ya(Jc);
  return c ? a[c] : void 0;
}
function qe() {}
function re(a, c) {
  for (var e in a) !isNaN(e) && c(a, +e, a[e]);
}
function se(a) {
  var c = new qe();
  re(a, function (e, f, g) {
    c[f] = Ed(g);
  });
  c.pd = a.pd;
  return c;
}
function te(a, c) {
  a = a.G;
  var e = Ya(Jc);
  e && e in a && (a = a[e]) && delete a[c];
}
var ue = { Ve: !0 };
function ve(a, c) {
  c < 100 || Bc(Lc, 1);
}
function we(a, c, e, f) {
  var g = f !== void 0;
  f = !!f;
  var h = Ya(Jc),
    k;
  !g && Dc && h && (k = a[h]) && re(k, ve);
  h = [];
  var l = a.length;
  k = 4294967295;
  var p = !1,
    q = !!(c & 64),
    r = q ? (c & 128 ? 0 : -1) : void 0;
  if (!(c & 1)) {
    var w = l && a[l - 1];
    w != null && typeof w === "object" && w.constructor === Object ? (l--, (k = l)) : (w = void 0);
    if (q && !(c & 128) && !g) {
      p = !0;
      var y;
      k = ((y = xe) != null ? y : ee)(k - r, r, a, w, void 0) + r;
    }
  }
  c = void 0;
  for (y = 0; y < l; y++) {
    var z = a[y];
    if (z != null && (z = e(z, f)) != null)
      if (q && y >= k) {
        var B = y - r,
          F = void 0;
        ((F = c) != null ? F : (c = {}))[B] = z;
      } else h[y] = z;
  }
  if (w)
    for (var J in w)
      ((l = w[J]),
        l != null &&
          (l = e(l, f)) != null &&
          ((y = +J),
          (z = void 0),
          q && !Number.isNaN(y) && (z = y + r) < k
            ? (h[z] = l)
            : ((y = void 0), (((y = c) != null ? y : (c = {}))[J] = l))));
  c && (p ? h.push(c) : (h[k] = c));
  g && Ya(Jc) && (a = pe(a)) && a instanceof qe && (h[Jc] = se(a));
  return h;
}
function ye(a) {
  switch (typeof a) {
    case "number":
      return Number.isFinite(a) ? a : "" + a;
    case "bigint":
      return ud(a) ? Number(a) : "" + a;
    case "boolean":
      return a ? 1 : 0;
    case "object":
      if (Array.isArray(a)) {
        var c = a[K] | 0;
        return a.length === 0 && c & 1 ? void 0 : we(a, c, ye);
      }
      if (a != null && Yc(a)) return ze(a);
      if (a instanceof pc) return tc(a);
      return;
  }
  return a;
}
var Ae = oc
    ? structuredClone
    : function (a) {
        return we(a, 0, ye);
      },
  xe;
function ze(a) {
  a = a.G;
  return we(a, a[K] | 0, ye);
}
function Be(a) {
  if (!Array.isArray(a)) throw Error();
  if (Object.isFrozen(a) || Object.isSealed(a) || !Object.isExtensible(a)) throw Error();
  return a;
}
var Ce, De;
function Ee(a) {
  switch (typeof a) {
    case "boolean":
      return Ce || (Ce = [0, void 0, !0]);
    case "number":
      return a > 0 ? void 0 : a === 0 ? De || (De = [0, void 0]) : [-a, void 0];
    case "string":
      return [0, a];
    case "object":
      return a;
  }
}
function Fe(a, c) {
  return Ge(a, c[0], c[1]);
}
function M(a, c, e) {
  return Ge(a, c, e, 2048);
}
function Ge(a, c, e, f) {
  f = f === void 0 ? 0 : f;
  if (a == null) {
    var g = 32;
    e ? ((a = [e]), (g |= 128)) : (a = []);
    c && (g = (g & -16760833) | ((c & 1023) << 14));
  } else {
    if (!Array.isArray(a)) throw Error("C");
    g = a[K] | 0;
    if (ub && 1 & g) throw Error("D");
    2048 & g && !(2 & g) && He();
    if (g & 256) throw Error("E");
    if (g & 64) return ((g | f) !== g && Tc(a, g | f), a);
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
  Tc(a, g | 64 | f);
  return a;
}
function He() {
  if (ub) throw Error("G");
  Bc(Mc, 5);
}
function Ie(a, c) {
  if (typeof a !== "object") return a;
  if (Array.isArray(a)) {
    var e = a[K] | 0;
    a.length === 0 && e & 1
      ? (a = void 0)
      : e & 2 ||
        (!c || 4096 & e || 16 & e
          ? (a = Je(a, e, !1, c && !(e & 16)))
          : (Uc(a, 34), e & 4 && Object.freeze(a)));
    return a;
  }
  if (a != null && Yc(a))
    return ((c = a.G), (e = c[K] | 0), $c(a, e) ? a : Ke(a, c, e) ? Le(a, c) : Je(c, e));
  if (a instanceof pc) return a;
}
function Le(a, c, e) {
  a = new a.constructor(c);
  e && (a.j = ad);
  a.o = ad;
  return a;
}
function Je(a, c, e, f) {
  f != null || (f = !!(34 & c));
  a = we(a, c, Ie, f);
  f = 32;
  e && (f |= 2);
  c = (c & 16769217) | f;
  Tc(a, c);
  return a;
}
function Me(a) {
  var c = a.G,
    e = c[K] | 0;
  return $c(a, e) ? (Ke(a, c, e) ? Le(a, c, !0) : new a.constructor(Je(c, e, !1))) : a;
}
function Ne(a) {
  if (a.j !== ad) return !1;
  var c = a.G;
  c = Je(c, c[K] | 0);
  Uc(c, 2048);
  a.G = c;
  a.j = void 0;
  a.o = void 0;
  return !0;
}
function Oe(a) {
  if (!Ne(a) && $c(a, a.G[K] | 0)) throw Error();
}
function Pe(a, c) {
  c === void 0 && (c = a[K] | 0);
  c & 32 && !(c & 4096) && Tc(a, c | 4096);
}
function Ke(a, c, e) {
  return e & 2 ? !0 : e & 32 && !(e & 4096) ? (Tc(c, e | 2), (a.j = ad), !0) : !1;
}
var Qe = nd(0),
  Re = {};
function Se(a, c, e, f, g) {
  Object.isExtensible(a);
  c = Te(a.G, c, e, g);
  if (c !== null || (f && a.o !== ad)) return c;
}
function Te(a, c, e, f) {
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
function Ue(a, c, e, f) {
  Oe(a);
  var g = a.G;
  Ve(g, g[K] | 0, c, e, f);
  return a;
}
function Ve(a, c, e, f, g) {
  var h = e + (g ? 0 : -1),
    k = a.length - 1;
  if (k >= 1 + (g ? 0 : -1) && h >= k) {
    var l = a[k];
    if (l != null && typeof l === "object" && l.constructor === Object) return ((l[e] = f), c);
  }
  if (h <= k) return ((a[h] = f), c);
  if (f !== void 0) {
    var p;
    k = (((p = c) != null ? p : (c = a[K] | 0)) >> 14) & 1023 || 536870912;
    e >= k ? f != null && ((h = {}), (a[k + (g ? 0 : -1)] = ((h[e] = f), h))) : (a[h] = f);
  }
  return c;
}
function We(a, c, e) {
  a = a.G;
  return Xe(a, a[K] | 0, c, e) !== void 0;
}
function Ye(a, c, e, f, g) {
  var h = a.G,
    k = h[K] | 0;
  f = $c(a, k) ? 1 : f;
  g = !!g || f === 3;
  f === 2 && Ne(a) && ((h = a.G), (k = h[K] | 0));
  a = Ze(h, c);
  var l = a === Rc ? 7 : a[K] | 0,
    p = $e(l, k);
  var q = 4 & p ? !1 : !0;
  if (q) {
    4 & p && ((a = Ed(a)), (l = 0), (p = af(p, k)), (k = Ve(h, k, c, a)));
    for (var r = 0, w = 0; r < a.length; r++) {
      var y = e(a[r]);
      y != null && (a[w++] = y);
    }
    w < r && (a.length = w);
    e = (p | 4) & -513;
    p = e &= -1025;
    p &= -4097;
  }
  p !== l && (Tc(a, p), 2 & p && Object.freeze(a));
  return (a = bf(a, p, h, k, c, f, q, g));
}
function bf(a, c, e, f, g, h, k, l) {
  var p = c;
  h === 1 || (h !== 4 ? 0 : 2 & c || (!(16 & c) && 32 & f))
    ? cf(c) ||
      ((c |= !a.length || (k && !(4096 & c)) || (32 & f && !(4096 & c || 16 & c)) ? 2 : 256),
      c !== p && Tc(a, c),
      Object.freeze(a))
    : (h === 2 && cf(c) && ((a = Ed(a)), (p = 0), (c = af(c, f)), (f = Ve(e, f, g, a, void 0))),
      cf(c) || (l || (c |= 16), c !== p && Tc(a, c)));
  2 & c || !(4096 & c || 16 & c) || Pe(e, f);
  return a;
}
function Ze(a, c, e) {
  a = Te(a, c, e);
  return Array.isArray(a) ? a : Rc;
}
function $e(a, c) {
  2 & c && (a |= 2);
  return a | 1;
}
function cf(a) {
  return (!!(2 & a) && !!(4 & a)) || !!(256 & a);
}
function df(a) {
  if (a != null)
    if (typeof a === "string") a = a ? new pc(a, nc) : qc();
    else if (a.constructor !== pc) {
      var c;
      lc(a) ? (c = a.length ? new pc(new Uint8Array(a), nc) : qc()) : (c = void 0);
      a = c;
    }
  return a;
}
function ef(a, c) {
  Oe(a);
  var e = a.G;
  ff(e, e[K] | 0, c, 0);
  return a;
}
function gf(a, c, e) {
  if (c & 2) throw Error();
  var f = gd(c),
    g = Ze(a, e, f),
    h = g === Rc ? 7 : g[K] | 0,
    k = $e(h, c);
  if (2 & k || cf(k) || 16 & k)
    (k === h || cf(k) || Tc(g, k), (g = Ed(g)), (h = 0), (k = af(k, c)), Ve(a, c, e, g, f));
  k &= -13;
  k !== h && Tc(g, k);
  return g;
}
function hf(a, c, e) {
  return jf(a, c) === e ? e : -1;
}
function jf(a, c) {
  a = a.G;
  return kf(lf(a), a, void 0, c);
}
function lf(a) {
  if (Dc) {
    var c;
    return (c = a[Hc]) != null ? c : (a[Hc] = new Map());
  }
  if (Hc in a) return a[Hc];
  c = new Map();
  Object.defineProperty(a, Hc, { value: c });
  return c;
}
function ff(a, c, e, f) {
  f === 0 || e.includes(f);
  var g = lf(a),
    h = kf(g, a, c, e);
  h !== f && (h && (c = Ve(a, c, h)), g.set(e, f));
}
function kf(a, c, e, f) {
  var g = a.get(f);
  if (g != null) return g;
  for (var h = (g = 0); h < f.length; h++) {
    var k = f[h];
    Te(c, k) != null && (g !== 0 && (e = Ve(c, e, g)), (g = k));
  }
  a.set(f, g);
  return g;
}
function mf(a, c, e) {
  Oe(a);
  a = a.G;
  var f = a[K] | 0,
    g = Te(a, e),
    h = void 0 === ed;
  c = ce(g, c, !h, f);
  if (!h || c) return ((c = Me(c)), g !== c && ((f = Ve(a, f, e, c)), Pe(a, f)), c);
}
function nf(a, c, e) {
  var f = a[K] | 0,
    g = gd(f),
    h = Te(a, e, g);
  if (h != null && Yc(h)) {
    if (!$c(h)) return (Ne(h), h.G);
    var k = h.G;
  } else Array.isArray(h) && (k = h);
  if (k) {
    var l = k[K] | 0;
    l & 2 && (k = Je(k, l));
  }
  k = Fe(k, c);
  k !== h && Ve(a, f, e, k, g);
  return k;
}
function Xe(a, c, e, f, g) {
  var h = !1;
  f = Te(a, f, g, function (k) {
    var l = ce(k, e, !1, c);
    h = l !== k && l != null;
    return l;
  });
  if (f != null) return (h && !$c(f) && Pe(a, c), f);
}
function of(a, c, e, f) {
  a = a.G;
  return Xe(a, a[K] | 0, c, e, f) || c[Gc] || (c[Gc] = de(c));
}
function pf(a, c, e, f) {
  var g = a.G,
    h = g[K] | 0;
  c = Xe(g, h, c, e, f);
  if (c == null) return c;
  h = g[K] | 0;
  if (!$c(a, h)) {
    var k = Me(c);
    k !== c && (Ne(a) && ((g = a.G), (h = g[K] | 0)), (c = k), (h = Ve(g, h, e, c, f)), Pe(g, h));
  }
  return c;
}
function qf(a, c, e, f, g, h, k, l) {
  var p = $c(a, e);
  h = p ? 1 : h;
  k = !!k || h === 3;
  p = l && !p;
  (h === 2 || p) && Ne(a) && ((c = a.G), (e = c[K] | 0));
  a = Ze(c, g);
  var q = a === Rc ? 7 : a[K] | 0,
    r = $e(q, e);
  if ((l = !(4 & r))) {
    var w = a,
      y = e,
      z = !!(2 & r);
    z && (y |= 2);
    for (var B = !z, F = !0, J = 0, W = 0; J < w.length; J++) {
      var ha = ce(w[J], f, !1, y);
      if (ha instanceof f) {
        if (!z) {
          var Pa = $c(ha);
          B && (B = !Pa);
          F && (F = Pa);
        }
        w[W++] = ha;
      }
    }
    W < J && (w.length = W);
    r |= 4;
    r = F ? r & -4097 : r | 4096;
    r = B ? r | 8 : r & -9;
  }
  r !== q && (Tc(a, r), 2 & r && Object.freeze(a));
  if (p && !(8 & r || (!a.length && (h === 1 || (h !== 4 ? 0 : 2 & r || (!(16 & r) && 32 & e)))))) {
    cf(r) && ((a = Ed(a)), (r = af(r, e)), (e = Ve(c, e, g, a)));
    f = a;
    p = r;
    for (q = 0; q < f.length; q++) ((w = f[q]), (r = Me(w)), w !== r && (f[q] = r));
    p |= 8;
    r = p = f.length ? p | 4096 : p & -4097;
    Tc(a, r);
  }
  return (a = bf(a, r, c, e, g, h, l, k));
}
function rf(a, c, e) {
  var f = a.G;
  return qf(a, f, f[K] | 0, c, e, void 0 === cd ? 2 : 4, !1, !0);
}
function N(a, c, e, f, g) {
  f != null ? be(f, c) : (f = void 0);
  Ue(a, e, f, g);
  f && !$c(f) && Pe(a.G);
  return a;
}
function sf(a, c, e, f) {
  Oe(a);
  var g = a.G,
    h = g[K] | 0;
  if (f == null) return (Ve(g, h, e), a);
  if (!Array.isArray(f)) throw Ac();
  for (
    var k = f === Rc ? 7 : f[K] | 0,
      l = k,
      p = cf(k),
      q = p || Object.isFrozen(f),
      r = !0,
      w = !0,
      y = 0;
    y < f.length;
    y++
  ) {
    var z = f[y];
    be(z, c);
    p || ((z = $c(z)), r && (r = !z), w && (w = z));
  }
  p || ((k = r ? 13 : 5), (k = w ? k & -4097 : k | 4096));
  (q && k === l) || ((f = Ed(f)), (l = 0), (k = af(k, h)));
  k !== l && Tc(f, k);
  h = Ve(g, h, e, f);
  2 & k || !(4096 & k || 16 & k) || Pe(g, h);
  return a;
}
function af(a, c) {
  return (a = (2 & c ? a | 2 : a & -3) & -273);
}
function tf(a, c, e) {
  Oe(a);
  c = Ye(a, c, Rd, 2, !0);
  if (Array.isArray(e)) for (var f = e.length, g = 0; g < f; g++) c.push(Qd(e[g]));
  else {
    e = E(e);
    g = e.next();
    try {
      for (; !g.done; g = e.next()) c.push(Qd(g.value));
    } finally {
      g && !g.done && (f = e.return) && f.call(e);
    }
  }
  return a;
}
function uf(a, c, e, f) {
  Oe(a);
  var g = a.G;
  a = qf(a, g, g[K] | 0, e, c, 2, !0);
  var h = (c = 0);
  if (Array.isArray(f))
    for (var k = f.length, l = 0; l < k; l++) {
      var p = be(f[l], e);
      a.push(p);
      (p = $c(p)) && !c++ && (a[K] &= -9);
      p || h++ || Uc(a, 4096);
    }
  else {
    f = E(f);
    var q = f.next();
    try {
      for (; !q.done; q = f.next())
        ((l = be(q.value, e)),
          a.push(l),
          (p = $c(l)) && !c++ && (a[K] &= -9),
          p || h++ || Uc(a, 4096));
    } finally {
      q && !q.done && (k = f.return) && k.call(f);
    }
  }
  h && Pe(g);
}
function vf(a, c) {
  a = Se(a, c, void 0, void 0, $d);
  a != null &&
    (typeof a === "bigint"
      ? ud(a)
        ? (a = Number(a))
        : ((a = Fd(64, a)), (a = ud(a) ? Number(a) : String(a)))
      : (a = Nd(a) ? (typeof a === "number" ? Xd(a) : Td(a)) : void 0));
  return a;
}
function wf(a, c, e) {
  return Pd(Se(a, c, void 0, e));
}
function xf(a, c) {
  var e = e === void 0 ? !1 : e;
  var f;
  return (f = Ld(Se(a, c))) != null ? f : e;
}
function yf(a, c, e) {
  e = e === void 0 ? 0 : e;
  var f;
  return (f = Rd(Se(a, c))) != null ? f : e;
}
function zf(a, c, e) {
  e = e === void 0 ? Qe : e;
  var f;
  return (f = Se(a, c, void 0, void 0, $d)) != null ? f : e;
}
function Af(a, c) {
  var e = e === void 0 ? "" : e;
  var f;
  return (f = ae(Se(a, c, void 0, void 0))) != null ? f : e;
}
function Bf(a, c) {
  var e = e === void 0 ? 0 : e;
  var f;
  return (f = wf(a, c)) != null ? f : e;
}
function Cf(a, c) {
  return Rd(Se(a, c, void 0, Re));
}
function Df(a, c, e) {
  return ae(Se(a, c, e, Re));
}
function Q(a, c, e, f) {
  if (e != null && typeof e !== "boolean") throw Error("A`" + Ma(e) + "`" + e);
  return Ue(a, c, e, f);
}
function Ef(a, c, e) {
  return Ue(a, c, e == null ? e : Qd(e));
}
function Ff(a, c, e) {
  return Ue(a, c, e == null ? e : Sd(e));
}
function Gf(a, c, e) {
  if (e != null && typeof e !== "string") throw Error();
  return Ue(a, c, e);
}
function Hf(a, c, e) {
  return Ue(a, c, e == null ? e : Od(e));
}
function If(a, c, e) {
  this.buffer = a;
  if (e && !c) throw Error();
  this.j = c;
}
function Jf(a, c) {
  if (typeof a === "string") return new If(kc(a), c);
  if (Array.isArray(a)) return new If(new Uint8Array(a), c);
  if (a.constructor === Uint8Array) return new If(a, !1);
  if (a.constructor === ArrayBuffer) return ((a = new Uint8Array(a)), new If(a, !1));
  if (a.constructor === pc) return ((c = vc(a) || new Uint8Array(0)), new If(c, !0, a));
  if (a instanceof Uint8Array)
    return (
      (a = a.constructor === Uint8Array ? a : new Uint8Array(a.buffer, a.byteOffset, a.byteLength)),
      new If(a, !1)
    );
  throw Error();
}
function Kf(a, c, e, f) {
  this.v = null;
  this.B = !1;
  this.j = this.o = this.A = 0;
  this.init(a, c, e, f);
}
Kf.prototype.init = function (a, c, e, f) {
  var g = f === void 0 ? {} : f;
  f = g.Cc;
  g = g.sd;
  g = g === void 0 ? !1 : g;
  this.Cc = f === void 0 ? !1 : f;
  this.sd = g;
  a &&
    ((a = Jf(a, this.sd)),
    (this.v = a.buffer),
    (this.B = a.j),
    (this.A = c || 0),
    (this.o = e !== void 0 ? this.A + e : this.v.length),
    (this.j = this.A));
};
Kf.prototype.clear = function () {
  this.v = null;
  this.B = !1;
  this.j = this.o = this.A = 0;
  this.Cc = !1;
};
Kf.prototype.reset = function () {
  this.j = this.A;
};
function Lf(a, c) {
  a.j = c;
  if (c > a.o) throw Error();
}
function Mf(a) {
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
  Lf(a, e);
  return g;
}
var Nf = [];
var Of = 0;
function Pf(a, c, e, f) {
  if (Nf.length) {
    var g = Nf.pop();
    g.init(a, c, e, f);
    a = g;
  } else a = new Kf(a, c, e, f);
  this.j = a;
  this.A = this.j.j;
  this.o = this.v = -1;
  Qf(this, f);
}
function Qf(a, c) {
  c = (c === void 0 ? {} : c).Nd;
  a.Nd = c === void 0 ? !1 : c;
}
function Rf(a, c, e, f) {
  if (Sf.length) {
    var g = Sf.pop();
    Qf(g, f);
    g.j.init(a, c, e, f);
    return g;
  }
  return new Pf(a, c, e, f);
}
function Tf(a) {
  a.j.clear();
  a.v = -1;
  a.o = -1;
  Sf.length < 100 && Sf.push(a);
}
Pf.prototype.reset = function () {
  this.j.reset();
  this.A = this.j.j;
  this.o = this.v = -1;
};
function Uf(a) {
  var c = a.j;
  if (c.j == c.o) return !1;
  a.A = a.j.j;
  var e = Mf(a.j) >>> 0;
  c = e >>> 3;
  e &= 7;
  if (!(e >= 0 && e <= 5)) throw Error();
  if (c < 1) throw Error();
  a.v = c;
  a.o = e;
  return !0;
}
function Vf() {
  if (Of >= 100) throw new SyntaxError();
  Of++;
}
function Wf(a) {
  try {
    switch (a.o) {
      case 0:
        if (a.o != 0) Wf(a);
        else
          a: {
            var c = a.j,
              e = c.j;
            a = e + 10;
            for (var f = c.v; e < a; )
              if ((f[e++] & 128) === 0) {
                Lf(c, e);
                break a;
              }
            throw Error();
          }
        break;
      case 1:
        var g = a.j;
        Lf(g, g.j + 8);
        break;
      case 2:
        if (a.o != 2) Wf(a);
        else {
          var h = Mf(a.j) >>> 0,
            k = a.j;
          Lf(k, k.j + h);
        }
        break;
      case 5:
        var l = a.j;
        Lf(l, l.j + 4);
        break;
      case 3:
        Vf();
        var p = a.v;
        try {
          do {
            if (!Uf(a)) throw Error();
            if (a.o == 4) {
              if (a.v != p) throw Error();
              break;
            }
            Wf(a);
          } while (1);
        } catch (q) {
          if (q instanceof RangeError) throw new SyntaxError();
          throw q;
        } finally {
          Of > 0 && Of--;
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
function Xf(a, c, e) {
  var f = a.j.o,
    g = Mf(a.j) >>> 0;
  g = a.j.j + g;
  var h = g - f;
  h <= 0 && ((a.j.o = g), e(c, a, void 0, void 0, void 0), (h = g - a.j.j));
  if (h) throw Error();
  a.j.j = g;
  a.j.o = f;
}
var Sf = [];
function Yf() {
  function a() {
    throw Error();
  }
  Object.setPrototypeOf(a, a.prototype);
  return a;
}
var Zf = Yf(),
  $f = Yf(),
  ag = Yf();
var bg;
function cg() {
  var a;
  return (a = bg) != null ? a : (bg = 1);
}
function dg(a, c) {
  var e;
  return (e = a[Ic]) != null ? e : (a[Ic] = c(a));
}
function eg(a) {
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
function fg(a) {
  for (var c = 0, e = a.length, f = 0; f < e; f++) {
    var g = a[f];
    if (f === e - 1 && g != null && typeof g === "object" && g.constructor === Object)
      for (var h in g) !Number.isNaN(+h) && (c = (c + gg(g[h])) | 0);
    else c = (c + gg(g)) | 0;
  }
  return (c * 17) | 0;
}
function hg(a) {
  return eg(tc(a));
}
function ig(a) {
  return fg(a.G);
}
function jg(a) {
  return fg([].concat(pa(a.entries())));
}
var kg = eg("1"),
  lg = eg("0");
function gg(a) {
  if (a == null) return 0;
  switch (typeof a) {
    case "boolean":
      return a ? kg : lg;
    case "string":
      return eg(a);
    case "object":
      if (Array.isArray(a)) return fg(a);
      if (Yc(a)) return $c(a) ? dg(a, ig) : ig(a);
      if (a && typeof a === "object" && a.v === Zc) return a.j & 2 ? dg(a, jg) : jg(a);
      if (a instanceof pc) return dg(a, hg);
  }
  return eg(String(a));
}
function R(a, c, e) {
  this.G = M(a, c, e);
}
R.prototype.toJSON = function () {
  return ze(this);
};
function mg(a) {
  return JSON.stringify(ze(a));
}
function ng(a, c) {
  if (c == null || c == "") return new a();
  c = JSON.parse(c);
  if (!Array.isArray(c)) throw Error("J");
  return new a(Wc(c));
}
function og(a, c) {
  var e = a.G,
    f = c.j,
    g = Ya(Jc),
    h;
  Dc && g && ((h = e[g]) == null ? void 0 : h[f]) != null && Bc(Kc, 3);
  a: {
    e = c.j;
    var k = k === void 0 ? !1 : k;
    if (Ya(Oc) && Ya(Jc) && void 0 === Oc) {
      f = a.G;
      g = f[Jc];
      if (!g) break a;
      if ((g = g.pd))
        try {
          g(f, e, ue);
          break a;
        } catch (l) {
          bb(l);
        }
    }
    k && te(a, e);
  }
  a = c.ctor ? c.v(a, c.ctor, c.j, c.o) : c.v(a, c.j, null, c.o);
  return a === null ? void 0 : a;
}
R.prototype.clone = function () {
  var a = this.G,
    c = a[K] | 0;
  return Ke(this, a, c) ? Le(this, a, !0) : new this.constructor(Je(a, c, !1));
};
function pg(a) {
  var c = a.G,
    e = c[K] | 0;
  return $c(a, e) ? a : Ke(a, c, e) ? Le(a, c) : new a.constructor(Je(c, e, !0));
}
function qg(a, c, e) {
  te(a, c.j);
  c.ctor ? c.A(a, c.ctor, c.j, e, c.o) : c.A(a, c.j, e, c.o);
}
R.prototype[Nc] = Xc;
R.prototype.toString = function () {
  return this.G.toString();
};
function rg(a, c) {
  if (c == null) return new a();
  c = Be(c);
  return new a(Wc(c));
}
function sg(a, c) {
  c == null
    ? ((a = a.constructor), (a = a[Gc] || (a[Gc] = de(a))))
    : (a = new a.constructor(Vc(Be(c))));
  return a;
}
function tg(a, c) {
  this.Tb = a;
  a = Ya(Zf);
  this.j = (!!a && c === a) || !1;
}
function ug(a) {
  var c = c === void 0 ? Zf : c;
  return new tg(a, c);
}
var vg = ug(function (a, c, e, f, g) {
    if (a.o !== 2) return !1;
    Xf(a, nf(c, f, e), g);
    return !0;
  }),
  wg = ug(function (a, c, e, f, g) {
    if (a.o !== 2) return !1;
    Xf(a, nf(c, f, e), g);
    return !0;
  }),
  xg = Symbol(),
  yg = Symbol(),
  zg = Symbol(),
  Ag,
  Bg;
function Cg(a) {
  var c = Dg,
    e = Eg,
    f = a[xg];
  if (f) return f;
  f = {};
  f.ge = a;
  f.ed = Ee(a[0]);
  var g = a[1],
    h = 1;
  g &&
    g.constructor === Object &&
    ((f.Qd = g),
    (g = a[++h]),
    typeof g === "function" &&
      ((f.Je = !0), Ag != null || (Ag = g), Bg != null || (Bg = a[h + 1]), (g = a[(h += 2)])));
  for (var k = {}; g && Array.isArray(g) && g.length && typeof g[0] === "number" && g[0] > 0; ) {
    for (var l = 0; l < g.length; l++) k[g[l]] = g;
    g = a[++h];
  }
  for (l = 1; g !== void 0; ) {
    typeof g === "number" && ((l += g), (g = a[++h]));
    var p = void 0;
    if (g instanceof tg) var q = g;
    else ((q = vg), h--);
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
      var w = k[l];
      p ? e(f, l, q, p, w) : c(f, l, q, w);
    }
  }
  return (a[xg] = f);
}
function Dg(a, c, e, f) {
  var g = e.Tb;
  a[c] = f
    ? function (h, k, l) {
        return g(h, k, l, f);
      }
    : g;
}
function Eg(a, c, e, f, g) {
  var h = e.Tb,
    k,
    l;
  a[c] = function (p, q, r) {
    return h(p, q, r, l || (l = Cg(f).ed), k || (k = Fg(f)), g);
  };
}
function Fg(a) {
  var c = a[yg];
  if (c != null) return c;
  var e = Cg(a);
  c = e.Je
    ? function (f, g) {
        return Ag(f, g, e);
      }
    : function (f, g) {
        a: {
          Vf();
          try {
            for (; Uf(g) && g.o != 4; ) {
              var h = g.v,
                k = e[h];
              if (k == null) {
                var l = e.Qd;
                if (l) {
                  var p = l[h];
                  if (p) {
                    var q = Gg(p);
                    q != null && (k = e[h] = q);
                  }
                }
              }
              if (k == null || !k(g, f, h)) {
                var r = g,
                  w = r.A;
                Wf(r);
                var y = r;
                if (y.Nd) var z = void 0;
                else {
                  var B = y.j.j - w;
                  y.j.j = w;
                  r = void 0;
                  var F = y.j;
                  y = B;
                  if (y == 0) z = qc();
                  else {
                    if (y < 0) throw Error();
                    var J = F.j,
                      W = J + y;
                    if (W > F.o) throw Error();
                    F.j = W;
                    var ha = J;
                    if (F.Cc && F.B) r = F.v.subarray(ha, ha + y);
                    else {
                      var Pa = F.v;
                      y = ha + y;
                      r =
                        ha === y
                          ? new Uint8Array(0)
                          : vd
                            ? Pa.slice(ha, y)
                            : new Uint8Array(Pa.subarray(ha, y));
                    }
                    z = r.length == 0 ? qc() : new pc(r, nc);
                  }
                }
                W = y = r = void 0;
                var Ia = f,
                  dd = h,
                  oi = z;
                oi &&
                  ((r = (y = (W = Ia[Jc]) != null ? W : (Ia[Jc] = new qe()))[dd]) != null
                    ? r
                    : (y[dd] = [])
                  ).push(oi);
              }
            }
            var pi = pe(f);
            pi && (pi.pd = e.ge[zg]);
            var qi = !0;
            break a;
          } catch (ri) {
            if (ri instanceof RangeError) throw new SyntaxError();
            throw ri;
          } finally {
            Of > 0 && Of--;
          }
          qi = void 0;
        }
        return qi;
      };
  a[yg] = c;
  a[zg] = Hg.bind(a);
  return c;
}
function Hg(a, c, e, f) {
  var g = this[xg],
    h = this[yg],
    k = Fe(void 0, g.ed),
    l = pe(a);
  if (l) {
    var p = !1,
      q = g.Qd;
    if (q) {
      g = function (B, F, J) {
        if (J.length !== 0)
          if (q[F]) {
            B = E(J);
            F = B.next();
            var W;
            try {
              for (; !F.done; F = B.next()) {
                var ha = Rf(F.value);
                try {
                  ((p = !0), h(k, ha));
                } finally {
                  Tf(ha);
                }
              }
            } finally {
              F && !F.done && (W = B.return) && W.call(B);
            }
          } else f == null || f(a, F, J);
      };
      if (c == null) re(l, g);
      else if (l != null) {
        var r = l[c];
        r && g(l, c, r);
      }
      if (p) {
        var w = a[K] | 0;
        if (w & 2 && w & 2048 && (e == null || !e.Ve)) throw Error();
        var y = gd(w),
          z = function (B, F) {
            if (Te(a, B, y) != null)
              switch (e == null ? void 0 : e.Wf) {
                case 1:
                  return;
                default:
                  throw Error();
              }
            F != null && (w = Ve(a, w, B, F, y));
            delete l[B];
          };
        c == null
          ? fd(k, k[K] | 0, function (B, F) {
              z(B, F);
            })
          : z(c, Te(k, c, y));
      }
    }
  }
}
function Gg(a) {
  a = Array.isArray(a) ? (a[0] instanceof tg ? a : [wg, a]) : [a, void 0];
  var c = a[0].Tb;
  if ((a = a[1])) {
    var e = Fg(a),
      f = Cg(a).ed;
    return function (g, h, k) {
      return c(g, h, k, f, e);
    };
  }
  return c;
}
var Ig;
Ig = new tg(function (a, c, e) {
  if (a.o !== 0) return !1;
  a = Mf(a.j);
  Ve(c, c[K] | 0, e, a, gd(c[K] | 0));
  return !0;
}, $f);
var Jg,
  Kg = void 0;
Kg = Kg === void 0 ? Zf : Kg;
Jg = new tg(function (a, c, e, f, g) {
  if (a.o !== 2) return !1;
  f = Fe(void 0, f);
  gf(c, c[K] | 0, e).push(f);
  Xf(a, f, g);
  return !0;
}, Kg);
var Lg;
Lg = new tg(function (a, c, e) {
  if (a.o !== 0) return !1;
  a = Mf(a.j);
  Ve(c, c[K] | 0, e, a, gd(c[K] | 0));
  return !0;
}, ag);
var Mg;
Mg = new tg(function (a, c, e) {
  if (a.o !== 0 && a.o !== 2) return !1;
  c = gf(c, c[K] | 0, e);
  if (a.o == 2) for (e = Mf(a.j) >>> 0, e = a.j.j + e; a.j.j < e; ) c.push(Mf(a.j));
  else c.push(Mf(a.j));
  return !0;
}, ag);
function Ng(a, c, e) {
  this.j = a;
  this.ctor = e;
  this.v = pf;
  this.A = N;
  this.defaultValue = void 0;
  this.o = c.eb != null ? L : void 0;
}
Ng.prototype.register = function () {
  Rb(this);
};
function Og(a) {
  return function (c) {
    return ng(a, c);
  };
}
Object.create(null);
function Pg(a) {
  if (a.prototype.hasOwnProperty("$$generatedClassName")) return a.prototype.$$generatedClassName;
  var c = a.name,
    e,
    f = (e = Qg.get(c)) != null ? e : 0;
  Qg.set(c, f + 1);
  c = "Class$obf_" + c + "_" + f;
  return (a.prototype.$$generatedClassName = c);
}
var Qg = new Map();
function S() {}
S.prototype.equals = function (a) {
  return Rg(this, a);
};
S.prototype.Ea = function () {
  return Sg(this);
};
S.prototype.toString = function () {
  return T(Tg(Ug(this.constructor))) + "@" + T((this.Ea() >>> 0).toString(16));
};
function Vg() {}
var Wg;
D(Vg, S);
function Xg() {}
D(Xg, Vg);
var Yg;
function Zg() {
  Zg = u();
  for (var a = $g([256], ah, bh), c = 0; c < 256; c = (c + 1) | 0) a[c] = ch((c - 128) | 0);
  Yg = a;
}
function dh() {}
D(dh, S);
function eh(a, c) {
  a.j = c;
  fh(a);
}
function gh(a, c, e) {
  a.o = e;
  a.j = c;
  fh(a);
}
function hh(a, c) {
  a.L = c;
  ih(c, a);
}
function fh(a) {
  a.L instanceof Error &&
    (Error.captureStackTrace ? Error.captureStackTrace(a.L) : (a.L.stack = Error().stack));
}
dh.prototype.B = ba("j");
dh.prototype.toString = function () {
  var a = Tg(Ug(this.constructor)),
    c = this.j;
  return c == null ? a : T(a) + ": " + T(c);
};
function jh(a) {
  if (a != null) {
    var c = a.ee;
    if (c) return c;
  }
  a instanceof TypeError ? (c = kh()) : ((c = new lh()), fh(c), hh(c, Error(c)));
  c.j = a == null ? "null" : a.toString();
  hh(c, a);
  return c;
}
function mh(a) {
  return a instanceof dh;
}
function nh() {}
D(nh, dh);
function oh() {}
D(oh, nh);
function ph(a) {
  var c = new oh();
  eh(c, a);
  hh(c, Error(c));
  return c;
}
function qh(a) {
  return a instanceof oh;
}
function rh() {}
D(rh, oh);
function Rg(a, c) {
  return Object.is(a, c) || (a == null && c == null);
}
function sh() {}
D(sh, oh);
function th() {
  var a = new sh();
  fh(a);
  hh(a, Error(a));
  return a;
}
function uh(a) {
  var c = new sh();
  eh(c, a);
  hh(c, Error(c));
  return c;
}
function vh(a, c) {
  var e = new sh();
  gh(e, a, c);
  hh(e, Error(e));
  return e;
}
function wh(a, c) {
  this.aa = a | 0;
  this.Y = c | 0;
}
function xh(a) {
  return a.Y * 4294967296 + (a.aa >>> 0);
}
A = wh.prototype;
A.isSafeInteger = function () {
  var a = this.Y >> 21;
  return a == 0 || (a == -1 && !(this.aa == 0 && this.Y == -2097152));
};
A.toString = function (a) {
  a = a || 10;
  if (a < 2 || 36 < a) throw Error("M`" + a);
  if (this.isSafeInteger()) {
    var c = xh(this);
    return a == 10 ? "" + c : c.toString(a);
  }
  c = 14 - (a >> 2);
  var e = Math.pow(a, c),
    f = yh(e, e / 4294967296);
  e = this.div(f);
  var g = Math,
    h = g.abs;
  f = e.multiply(f);
  f = this.add(zh(f));
  g = h.call(g, xh(f));
  h = a == 10 ? "" + g : g.toString(a);
  h.length < c && (h = "0000000000000".slice(h.length - c) + h);
  g = xh(e);
  return (a == 10 ? g : g.toString(a)) + h;
};
function Ah(a) {
  return a.aa == 0 && a.Y == 0;
}
A.Ea = function () {
  return this.aa ^ this.Y;
};
A.equals = function (a) {
  return a == null ? !1 : this.aa == a.aa && this.Y == a.Y;
};
A.compare = function (a) {
  return this.Y == a.Y
    ? this.aa == a.aa
      ? 0
      : this.aa >>> 0 > a.aa >>> 0
        ? 1
        : -1
    : this.Y > a.Y
      ? 1
      : -1;
};
function zh(a) {
  var c = (~a.aa + 1) | 0;
  return yh(c, (~a.Y + !c) | 0);
}
A.add = function (a) {
  var c = this.Y >>> 16,
    e = this.Y & 65535,
    f = this.aa >>> 16,
    g = a.Y >>> 16,
    h = a.Y & 65535,
    k = a.aa >>> 16;
  a = (this.aa & 65535) + (a.aa & 65535);
  k = (a >>> 16) + (f + k);
  f = k >>> 16;
  f += e + h;
  return yh(
    ((k & 65535) << 16) | (a & 65535),
    ((((f >>> 16) + (c + g)) & 65535) << 16) | (f & 65535),
  );
};
A.multiply = function (a) {
  if (Ah(this)) return this;
  if (Ah(a)) return a;
  var c = this.Y >>> 16,
    e = this.Y & 65535,
    f = this.aa >>> 16,
    g = this.aa & 65535,
    h = a.Y >>> 16,
    k = a.Y & 65535,
    l = a.aa >>> 16;
  a = a.aa & 65535;
  var p = g * a;
  var q = (p >>> 16) + f * a;
  var r = q >>> 16;
  q = (q & 65535) + g * l;
  r += q >>> 16;
  r += e * a;
  var w = r >>> 16;
  r = (r & 65535) + f * l;
  w += r >>> 16;
  r = (r & 65535) + g * k;
  w = (w + (r >>> 16) + (c * a + e * l + f * k + g * h)) & 65535;
  return yh(((q & 65535) << 16) | (p & 65535), (w << 16) | (r & 65535));
};
A.div = function (a) {
  if (Ah(a)) throw Error("N");
  if (this.Y < 0) {
    if (this.equals(Bh)) {
      if (a.equals(Ch) || a.equals(Dh)) return Bh;
      if (a.equals(Bh)) return Ch;
      var c = this.Y;
      c = yh((this.aa >>> 1) | (c << 31), c >> 1);
      c = c.div(a).shiftLeft(1);
      if (c.equals(Eh)) return a.Y < 0 ? Ch : Dh;
      var e = a.multiply(c);
      e = this.add(zh(e));
      return c.add(e.div(a));
    }
    return a.Y < 0 ? zh(this).div(zh(a)) : zh(zh(this).div(a));
  }
  if (Ah(this)) return Eh;
  if (a.Y < 0) return a.equals(Bh) ? Eh : zh(this.div(zh(a)));
  c = Eh;
  for (e = this; e.compare(a) >= 0; ) {
    var f = Math.max(1, Math.floor(xh(e) / xh(a))),
      g = Math.ceil(Math.log(f) / Math.LN2);
    g = g <= 48 ? 1 : Math.pow(2, g - 48);
    for (var h = Fh(f), k = h.multiply(a); k.Y < 0 || k.compare(e) > 0; )
      ((f -= g), (h = Fh(f)), (k = h.multiply(a)));
    Ah(h) && (h = Ch);
    c = c.add(h);
    e = e.add(zh(k));
  }
  return c;
};
A.and = function (a) {
  return yh(this.aa & a.aa, this.Y & a.Y);
};
A.or = function (a) {
  return yh(this.aa | a.aa, this.Y | a.Y);
};
A.xor = function (a) {
  return yh(this.aa ^ a.aa, this.Y ^ a.Y);
};
A.shiftLeft = function (a) {
  a &= 63;
  if (a == 0) return this;
  var c = this.aa;
  return a < 32 ? yh(c << a, (this.Y << a) | (c >>> (32 - a))) : yh(0, c << (a - 32));
};
function Fh(a) {
  return a > 0
    ? a >= 0x7fffffffffffffff
      ? Gh
      : new wh(a, a / 4294967296)
    : a < 0
      ? a <= -0x7fffffffffffffff
        ? Bh
        : zh(new wh(-a, -a / 4294967296))
      : Eh;
}
function yh(a, c) {
  return new wh(a, c);
}
var Eh = yh(0, 0),
  Ch = yh(1, 0),
  Dh = yh(-1, -1),
  Gh = yh(4294967295, 2147483647),
  Bh = yh(0, 2147483648);
function Hh(a, c, e) {
  if (Object.prototype.hasOwnProperty.call(a.prototype, c)) return a.prototype[c];
  e = e();
  return (a.prototype[c] = e);
}
function Ih() {}
D(Ih, S);
function Jh(a) {
  return xh(a);
}
function Kh(a) {
  return Math.max(Math.min(a, 2147483647), -2147483648) | 0;
}
function lh() {}
D(lh, oh);
function Lh() {}
D(Lh, lh);
function kh() {
  var a = new Lh();
  fh(a);
  hh(a, new TypeError(a));
  return a;
}
function Mh(a, c) {
  return Rg(a, c) || (a != null && Nh(a, c));
}
function Oh(a) {
  return a >= 56320 && a <= 57343;
}
function ah() {
  this.j = 0;
}
D(ah, Vg);
function Ph(a) {
  a > -129 && a < 128 ? (Zg(), (a = Yg[(a + 128) | 0])) : (a = ch(a));
  return a;
}
function ch(a) {
  var c = new ah();
  c.j = a;
  return c;
}
ah.prototype.equals = function (a) {
  return bh(a) && a.j == this.j;
};
ah.prototype.Ea = ba("j");
ah.prototype.toString = function () {
  return "" + this.j;
};
ah.prototype.Ba = ba("j");
function bh(a) {
  return a instanceof ah;
}
function Qh() {}
D(Qh, Vg);
function Rh() {}
D(Rh, S);
Rh.prototype.toString = ba("j");
function Sh() {}
D(Sh, Rh);
function Th() {
  var a = new Sh();
  a.j = "";
  return a;
}
function Uh(a, c) {
  a.j = T(a.j) + T(c);
  return a;
}
function Vh() {}
D(Vh, S);
Vh.prototype.toString = function () {
  return this.j
    ? this.o.length == 0
      ? this.j.toString()
      : T(this.j.toString()) + T(this.o)
    : this.B;
};
function Wh() {
  this.j = 0;
}
D(Wh, S);
Wh.prototype.name = function () {
  return this.o != null ? this.o : "" + this.j;
};
Wh.prototype.equals = function (a) {
  return Rg(this, a);
};
Wh.prototype.Ea = function () {
  return S.prototype.Ea.call(this);
};
Wh.prototype.toString = function () {
  return this.name();
};
function Xh() {}
D(Xh, oh);
function Yh(a) {
  var c = new Xh();
  eh(c, a);
  hh(c, Error(c));
  return c;
}
function Zh() {}
D(Zh, Xh);
function $h(a) {
  switch (typeof a) {
    case "string":
      for (var c = 0, e = 0; e < a.length; e = (e + 1) | 0)
        c = ((c << 5) - c + a.charCodeAt(e)) | 0;
      return c;
    case "number":
      return Kh(a);
    case "boolean":
      return a ? 1231 : 1237;
    default:
      return a == null ? 0 : Sg(a);
  }
}
var ai = 0;
function Sg(a) {
  return (
    a.Ad ||
    (Object.defineProperties(a, { Ad: { value: (ai = (ai + 1) | 0), enumerable: !1 } }), a.Ad)
  );
}
function Nh(a, c) {
  return a.equals ? a.equals(c) : Object.is(a, c);
}
function bi(a) {
  return a.Ea ? a.Ea() : $h(a);
}
function ci(a) {
  switch (typeof a) {
    case "number":
      return Ug(Xg);
    case "boolean":
      return Ug(Ih);
    case "string":
      return Ug(di);
    case "function":
      return Ug(ei);
  }
  if (a instanceof wh) a = Ug(Qh);
  else if (a instanceof S) a = Ug(a.constructor);
  else if (Array.isArray(a)) a = (a = a.zd) ? Ug(a.cd, a.Ld) : Ug(S, 1);
  else if (a != null) a = Ug(fi);
  else throw new TypeError("P");
  return a;
}
function ei() {}
function fi() {}
D(fi, S);
function di() {}
D(di, S);
function T(a) {
  return a == null ? "null" : a.toString();
}
function gi(a, c) {
  var e = a.length,
    f,
    g = ((f = c), (c = (c + 1) | 0), f);
  f = "string" === typeof a ? a.charCodeAt(g) : a.j.charCodeAt(g);
  var h;
  return f >= 55296 &&
    f <= 56319 &&
    c < e &&
    Oh((h = "string" === typeof a ? a.charCodeAt(c) : a.j.charCodeAt(c)))
    ? (65536 + ((f & 1023) << 10) + (h & 1023)) | 0
    : f;
}
function hi(a, c) {
  return Rg(a, c);
}
function ii(a) {
  var c = String.fromCodePoint(35);
  return a.indexOf(c);
}
function ji(a, c) {
  return Rg(a.substr(0, c.length), c);
}
function ih(a, c) {
  if (a instanceof Object)
    try {
      ((a.ee = c),
        Object.defineProperties(a, {
          cause: {
            get: function () {
              return c.o && c.o.L;
            },
          },
        }));
    } catch (e) {}
}
function $g(a, c, e) {
  return ki(a, li(c, e, a.length));
}
function ki(a, c) {
  var e = a[0];
  if (e == null) return null;
  var f = new globalThis.Array(e);
  c && (f.zd = c);
  if (a.length > 1) {
    a = a.slice(1);
    c = c && li(c.cd, c.Le, c.Ld - 1);
    for (var g = 0; g < e; g++) f[g] = ki(a, c);
  } else if (c && ((a = c.cd.hf), a !== void 0)) for (c = 0; c < e; c++) f[c] = a;
  return f;
}
function li(a, c, e) {
  return { cd: a, Le: c, Ld: e };
}
function mi(a, c) {
  this.j = 0;
  this.o = a;
  this.j = c;
}
D(mi, S);
function Ug(a, c) {
  var e = c || 0;
  return Hh(a, "$$class/" + e, function () {
    return new mi(a, e);
  });
}
function Tg(a) {
  return a.j != 0 ? T(ni("[", a.j)) + String("L" + T(Pg(a.o)) + ";") : Pg(a.o);
}
function si(a, c) {
  return a.substr((a.lastIndexOf(c) + 1) | 0);
}
mi.prototype.toString = function () {
  return "class " + T(Tg(this));
};
function ni(a, c) {
  for (var e = "", f = 0; f < c; f = (f + 1) | 0) e = T(e) + T(a);
  return e;
}
pc.prototype.equals = function (a) {
  return uc(this, a);
};
pc.prototype.Ea = function () {
  return (gg(this) + cg()) | 0;
};
R.prototype.equals = function (a) {
  return (
    this === a ||
    (this == null && a == null) ||
    (!(!this || !a) && this instanceof a.constructor && he(this, a))
  );
};
R.prototype.Ea = function () {
  return (gg(this) + cg()) | 0;
};
function ti(a) {
  a == null || od(a);
  return a == null ? null : ui(a);
}
function ui(a) {
  od(a);
  ud(a);
  return ud(a) ? Number(a) : String(a);
}
function vi(a) {
  this.G = M(a);
}
D(vi, R);
function wi(a) {
  this.G = M(a, 0, wi.eb);
}
D(wi, R);
wi.prototype.Ia = function () {
  return Df(this, 1, L);
};
wi.eb = "xsrf";
function xi(a) {
  this.G = M(a, 1);
}
D(xi, R);
var yi = new Ng(48448350, xi, wi);
function zi(a) {
  this.G = M(a);
}
D(zi, R);
zi.prototype.getTypeName = function () {
  return Af(this, 1).split("/").pop();
};
var Ai = (function (a) {
  return hd(function (c) {
    return c instanceof a && !$c(c);
  });
})(zi);
function Bi(a) {
  var c = 2;
  c = c === void 0 ? 2 : c;
  this.key = a;
  this.defaultValue = !1;
  this.phase = c;
  this.flagNameForDebugging = void 0;
}
Bi.prototype.ctor = function (a) {
  return typeof a === "boolean" ? a : this.defaultValue;
};
function Ci() {
  var a = Di(
      '[["feature named `pageObserver` was not found","feature named `hover` was not found"]]',
    ),
    c = Ei,
    e = 2;
  e = e === void 0 ? 2 : e;
  this.key = "45696263";
  this.defaultValue = a;
  this.j = c;
  this.phase = e;
  this.flagNameForDebugging = void 0;
}
Ci.prototype.ctor = function (a) {
  if (typeof a === "string" && a) return ng(this.j, a);
  if (!Ai(a)) return this.defaultValue.clone();
  var c;
  try {
    var e,
      f = this.j,
      g = (e = a.getTypeName()) != null ? e : "";
    if (Af(a, 1).split("/").pop() != g) var h = null;
    else {
      var k = typeof f === "function" ? f : f.constructor,
        l = a.G,
        p = l[K] | 0,
        q = Te(l, 2);
      Ne(a) && ((l = a.G), (p = l[K] | 0));
      a = l;
      if (q != null && !(Array.isArray(q) || (q != null && Yc(q)))) throw Error("K`" + Ma(q));
      var r = ce(q, k, !0, p);
      if (!(r instanceof k)) throw Error("L`" + r.constructor.displayName + "`" + k.displayName);
      (k = !!(2 & p)) || (r = Me(r));
      q !== r && (Ve(a, p, 2, r), k || Pe(a));
      h = r;
    }
  } catch (w) {
    h = null;
  }
  return (c = h) != null ? c : this.defaultValue.clone();
};
function Fi(a) {
  this.G = M(a);
}
D(Fi, R);
Fi.prototype.clearValue = function () {
  return ef(this, Gi);
};
var Gi = [1, 2];
function Hi(a) {
  this.G = M(a);
}
D(Hi, R);
Hi.prototype.clearValue = function () {
  return ef(this, Ii);
};
var Ii = [2, 3, 4, 5, 6, 8];
function Ji(a) {
  this.G = M(a);
}
D(Ji, R);
Ji.prototype.Sd = function () {
  var a = Se(this, 3, void 0, void 0, df);
  return a == null ? qc() : a;
};
function Ki(a) {
  this.G = M(a);
}
D(Ki, R);
var Li = Og(Ki);
function Ei(a) {
  this.G = M(a);
}
D(Ei, R);
var Di = Og(Ei);
function Mi(a, c) {
  c = c === void 0 ? window : c;
  c = c === void 0 ? window : c;
  return (c = c.WIZ_global_data) && a in c ? c[a] : null;
}
var Ni;
function Oi() {
  return (Ni = Ni || new Pi());
}
function Pi() {
  this.o = !1;
  var a = null;
  this.o = !0;
  var c = Mi("TSDtV", window);
  if ((c = typeof c !== "string" ? null : c))
    ((a = Li("[" + c.substring(4))), (a = rf(a, Ji, 1)[0]));
  if (a) {
    c = E(rf(a, Hi, 2));
    var e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next()) {
        var g = e.value,
          h = g.G;
        if (Xe(h, h[K] | 0, zi, hf(g, Ii, 6)) !== void 0) throw Error();
      }
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  }
  var k;
  if (a) {
    f = {};
    g = E(rf(a, Hi, 2));
    h = g.next();
    try {
      for (; !h.done; h = g.next()) {
        var l = h.value,
          p = zf(l, 1).toString();
        switch (jf(l, Ii)) {
          case 3:
            f[p] = xf(l, hf(l, Ii, 3));
            break;
          case 2:
            f[p] = ui(zf(l, hf(l, Ii, 2)));
            break;
          case 4:
            c = void 0;
            e = l;
            var q = hf(l, Ii, 4),
              r = void 0;
            r = r === void 0 ? 0 : r;
            var w = (c = Se(e, q, void 0, void 0, Jd)) != null ? c : r;
            f[p] = w;
            break;
          case 5:
            f[p] = Af(l, hf(l, Ii, 5));
            break;
          case 6:
            f[p] = pf(l, zi, hf(l, Ii, 6), void 0);
            break;
          case 8:
            var y = of(l, Fi, hf(l, Ii, 8));
            switch (jf(y, Gi)) {
              case 1:
                f[p] = Af(y, hf(y, Gi, 1));
                break;
              default:
                throw Error("V`" + jf(y, Gi));
            }
            break;
          default:
            throw Error("V`" + jf(l, Ii));
        }
      }
    } finally {
      h && !h.done && (k = g.return) && k.call(g);
    }
    k = f;
  } else k = {};
  this.j = k;
  this.v = a ? a.Sd() : null;
}
function Qi(a, c) {
  return c.phase === 1 || (a.o && !(c.key in a.j)) ? c.defaultValue : c.ctor(a.j[c.key]);
}
Pi.prototype.Sd = ba("v");
function Ri(a) {
  this.G = M(a);
}
D(Ri, R);
var Si = new Ci();
var Ti = new Bi("45723104");
var Ui = new Bi("45765314");
function Vi(a) {
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
function Wi(a) {
  this.G = M(a);
}
D(Wi, R);
var Xi = (function (a) {
  return function () {
    return a[Gc] || (a[Gc] = de(a));
  };
})(Wi);
var Yi =
  typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function"
    ? function (a) {
        return a && AsyncContext.Snapshot.wrap(a);
      }
    : aa();
function Zi(a, c) {
  this.v = a;
  this.A = c;
  this.o = 0;
  this.j = null;
}
Zi.prototype.get = function () {
  if (this.o > 0) {
    this.o--;
    var a = this.j;
    this.j = a.next;
    a.next = null;
  } else a = this.v();
  return a;
};
function $i(a, c) {
  a.A(c);
  a.o < 100 && (a.o++, (c.next = a.j), (a.j = c));
}
var aj = [],
  bj = [],
  cj = !1;
function dj(a) {
  aj[aj.length] = a;
  if (cj) for (var c = 0; c < bj.length; c++) a(Va(bj[c].j, bj[c]));
}
function ej(a) {
  a = fj(a);
  a = Yi(a);
  gj || (gj = hj());
  gj(a);
}
var gj;
function hj() {
  if (typeof MessageChannel !== "undefined") {
    var a = new MessageChannel(),
      c = {},
      e = c;
    a.port1.onmessage = function () {
      if (c.next !== void 0) {
        c = c.next;
        var f = c.Ib;
        c.Ib = null;
        f();
      }
    };
    return function (f) {
      e.next = { Ib: f };
      e = e.next;
      a.port2.postMessage(0);
    };
  }
  return function (f) {
    I.setTimeout(f, 0);
  };
}
function fj(a) {
  return a;
}
dj(function (a) {
  fj = a;
});
function ij() {
  this.o = this.j = null;
}
ij.prototype.add = function (a, c) {
  var e = jj.get();
  e.set(a, c);
  this.o ? (this.o.next = e) : (this.j = e);
  this.o = e;
};
ij.prototype.remove = function () {
  var a = null;
  this.j && ((a = this.j), (this.j = this.j.next), this.j || (this.o = null), (a.next = null));
  return a;
};
var jj = new Zi(
  function () {
    return new kj();
  },
  function (a) {
    return a.reset();
  },
);
function kj() {
  this.next = this.scope = this.j = null;
}
kj.prototype.set = function (a, c) {
  this.j = a;
  this.scope = c;
  this.next = null;
};
kj.prototype.reset = function () {
  this.next = this.scope = this.j = null;
};
var lj,
  mj = !1,
  nj = new ij();
function oj(a, c) {
  lj || pj();
  mj || (lj(), (mj = !0));
  nj.add(a, c);
}
function pj() {
  var a = Promise.resolve(void 0);
  lj = function () {
    a.then(qj);
  };
}
function qj() {
  for (var a; (a = nj.remove()); ) {
    try {
      a.j.call(a.scope);
    } catch (c) {
      bb(c);
    }
    $i(jj, a);
  }
  mj = !1;
}
function rj() {
  return null;
}
function sj() {}
function tj(a) {
  var c = c || 0;
  return function () {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
}
function uj(a) {
  if (!a) return !1;
  try {
    return !!a.$goog_Thenable;
  } catch (c) {
    return !1;
  }
}
function vj(a, c) {
  this.j = 0;
  this.D = void 0;
  this.A = this.o = this.v = null;
  this.B = this.C = !1;
  if (a != sj)
    try {
      var e = this;
      a.call(
        c,
        function (f) {
          wj(e, 2, f);
        },
        function (f) {
          wj(e, 3, f);
        },
      );
    } catch (f) {
      wj(this, 3, f);
    }
}
function xj() {
  this.next = this.v = this.o = this.B = this.j = null;
  this.A = !1;
}
xj.prototype.reset = function () {
  this.v = this.o = this.B = this.j = null;
  this.A = !1;
};
var yj = new Zi(
  function () {
    return new xj();
  },
  function (a) {
    a.reset();
  },
);
function zj(a, c, e) {
  var f = yj.get();
  f.B = a;
  f.o = c;
  f.v = e;
  return f;
}
function Aj(a) {
  if (a instanceof vj) return a;
  var c = new vj(sj);
  wj(c, 2, a);
  return c;
}
function Bj() {
  var a = Error("Db");
  return new vj(function (c, e) {
    e(a);
  });
}
function Cj(a, c, e) {
  Dj(a, c, e, null) || oj(Wa(c, a));
}
function Ej(a) {
  return new vj(function (c) {
    var e = a.length,
      f = [];
    if (e)
      for (
        var g = function (l, p, q) {
            e--;
            f[l] = p ? { ue: !0, value: q } : { ue: !1, reason: q };
            e == 0 && c(f);
          },
          h,
          k = 0;
        k < a.length;
        k++
      )
        ((h = a[k]), Cj(h, Wa(g, k, !0), Wa(g, k, !1)));
    else c(f);
  });
}
function Fj() {
  var a,
    c,
    e = new vj(function (f, g) {
      a = f;
      c = g;
    });
  return new Gj(e, a, c);
}
vj.prototype.then = function (a, c, e) {
  return Hj(
    this,
    Yi(typeof a === "function" ? a : null),
    Yi(typeof c === "function" ? c : null),
    e,
  );
};
vj.prototype.$goog_Thenable = !0;
function Ij(a, c) {
  c = Yi(c);
  c = zj(c, c);
  c.A = !0;
  Jj(a, c);
}
A = vj.prototype;
A.Ta = function (a, c) {
  return Hj(this, null, Yi(a), c);
};
A.catch = vj.prototype.Ta;
A.cancel = function (a) {
  if (this.j == 0) {
    var c = new Kj(a);
    oj(function () {
      Lj(this, c);
    }, this);
  }
};
function Lj(a, c) {
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
            ? Lj(e, c)
            : (h ? ((f = h), f.next == e.A && (e.A = f), (f.next = f.next.next)) : Mj(e),
              Nj(e, g, 3, c)));
      }
      a.v = null;
    } else wj(a, 3, c);
}
function Jj(a, c) {
  a.o || (a.j != 2 && a.j != 3) || Oj(a);
  a.A ? (a.A.next = c) : (a.o = c);
  a.A = c;
}
function Hj(a, c, e, f) {
  var g = zj(null, null, null);
  g.j = new vj(function (h, k) {
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
            p === void 0 && l instanceof Kj ? k(l) : h(p);
          } catch (q) {
            k(q);
          }
        }
      : k;
  });
  g.j.v = a;
  Jj(a, g);
  return g.j;
}
A.bf = function (a) {
  this.j = 0;
  wj(this, 2, a);
};
A.df = function (a) {
  this.j = 0;
  wj(this, 3, a);
};
function wj(a, c, e) {
  a.j == 0 &&
    (a === e && ((c = 3), (e = new TypeError("Y"))),
    (a.j = 1),
    Dj(e, a.bf, a.df, a) ||
      ((a.D = e), (a.j = c), (a.v = null), Oj(a), c != 3 || e instanceof Kj || Pj(a, e)));
}
function Dj(a, c, e, f) {
  if (a instanceof vj) return (Jj(a, zj(c || sj, e || null, f)), !0);
  if (uj(a)) return (a.then(c, e, f), !0);
  if (Oa(a))
    try {
      var g = a.then;
      if (typeof g === "function") return (Qj(a, g, c, e, f), !0);
    } catch (h) {
      return (e.call(f, h), !0);
    }
  return !1;
}
function Qj(a, c, e, f, g) {
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
function Oj(a) {
  a.C || ((a.C = !0), oj(a.ne, a));
}
function Mj(a) {
  var c = null;
  a.o && ((c = a.o), (a.o = c.next), (c.next = null));
  a.o || (a.A = null);
  return c;
}
A.ne = function () {
  for (var a; (a = Mj(this)); ) Nj(this, a, this.j, this.D);
  this.C = !1;
};
function Nj(a, c, e, f) {
  if (e == 3 && c.o && !c.A) for (; a && a.B; a = a.v) a.B = !1;
  if (c.j) ((c.j.v = null), Rj(c, e, f));
  else
    try {
      c.A ? c.B.call(c.v) : Rj(c, e, f);
    } catch (g) {
      Sj.call(null, g);
    }
  $i(yj, c);
}
function Rj(a, c, e) {
  c == 2 ? a.B.call(a.v, e) : a.o && a.o.call(a.v, e);
}
function Pj(a, c) {
  a.B = !0;
  oj(function () {
    a.B && Sj.call(null, c);
  });
}
var Sj = bb;
function Kj(a) {
  $a.call(this, a);
  this.v = !1;
}
Za(Kj, $a);
Kj.prototype.name = "cancel";
function Gj(a, c, e) {
  this.promise = a;
  this.resolve = c;
  this.reject = e;
} /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
function Tj(a, c) {
  this.B = [];
  this.T = a;
  this.J = c || null;
  this.A = this.j = !1;
  this.v = void 0;
  this.H = this.R = this.D = !1;
  this.C = 0;
  this.o = null;
  this.I = 0;
}
A = Tj.prototype;
A.cancel = function (a) {
  if (this.j) this.v instanceof Tj && this.v.cancel();
  else {
    if (this.o) {
      var c = this.o;
      delete this.o;
      a ? c.cancel(a) : (c.I--, c.I <= 0 && c.cancel());
    }
    this.T ? this.T.call(this.J, this) : (this.H = !0);
    this.j || this.tb(new Uj(this));
  }
};
A.Id = function (a, c) {
  this.D = !1;
  Vj(this, a, c);
};
function Vj(a, c, e) {
  a.j = !0;
  a.v = e;
  a.A = !c;
  Wj(a);
}
function Xj(a) {
  if (a.j) {
    if (!a.H) throw new Yj(a);
    a.H = !1;
  }
}
A.qa = function (a) {
  Xj(this);
  Vj(this, !0, a);
};
A.tb = function (a) {
  Xj(this);
  Vj(this, !1, a);
};
function Zj(a) {
  throw a;
}
function ak(a, c, e) {
  return bk(a, c, null, e);
}
function ck(a, c) {
  return bk(a, null, c);
}
function dk(a, c, e) {
  bk(
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
function bk(a, c, e, f) {
  var g = a.j;
  g || (c === e ? (c = e = Yi(c)) : ((c = Yi(c)), (e = Yi(e))));
  a.B.push([c, e, f]);
  g && Wj(a);
  return a;
}
A.then = function (a, c, e) {
  var f,
    g,
    h = new vj(function (k, l) {
      g = k;
      f = l;
    });
  bk(
    this,
    g,
    function (k) {
      k instanceof Uj ? h.cancel() : f(k);
      return ek;
    },
    this,
  );
  return h.then(a, c, e);
};
Tj.prototype.$goog_Thenable = !0;
function fk(a) {
  return Kb(a.B, function (c) {
    return typeof c[1] === "function";
  });
}
var ek = {};
function Wj(a) {
  if (a.C && a.j && fk(a)) {
    var c = a.C,
      e = gk[c];
    e && (I.clearTimeout(e.j), delete gk[c]);
    a.C = 0;
  }
  a.o && (a.o.I--, delete a.o);
  c = a.v;
  for (var f = (e = !1); a.B.length && !a.D; ) {
    var g = a.B.shift(),
      h = g[0],
      k = g[1];
    g = g[2];
    if ((h = a.A ? k : h))
      try {
        var l = h.call(g || a.J, c);
        l === ek && (l = void 0);
        l !== void 0 && ((a.A = a.A && (l == c || l instanceof Error)), (a.v = c = l));
        if (uj(c) || (typeof I.Promise === "function" && c instanceof I.Promise))
          ((f = !0), (a.D = !0));
      } catch (p) {
        ((c = p), (a.A = !0), fk(a) || (e = !0));
      }
  }
  a.v = c;
  f &&
    ((l = Va(a.Id, a, !0)),
    (f = Va(a.Id, a, !1)),
    c instanceof Tj ? (bk(c, l, f), (c.R = !0)) : c.then(l, f));
  e && ((c = new hk(c)), (gk[c.j] = c), (a.C = c.j));
}
function ik(a) {
  var c = new Tj();
  c.qa(a);
  return c;
}
function jk(a) {
  var c = new Tj();
  a.then(
    function (e) {
      c.qa(e);
    },
    function (e) {
      c.tb(e);
    },
  );
  return c;
}
function Yj() {
  $a.call(this);
}
Za(Yj, $a);
Yj.prototype.message = "Deferred has already fired";
Yj.prototype.name = "AlreadyCalledError";
function Uj() {
  $a.call(this);
}
Za(Uj, $a);
Uj.prototype.message = "Deferred was canceled";
Uj.prototype.name = "CanceledError";
function hk(a) {
  this.j = I.setTimeout(Va(this.v, this), 0);
  this.o = a;
}
hk.prototype.v = function () {
  delete gk[this.j];
  Zj(this.o);
};
var gk = {};
function kk(a, c) {
  gh(this, a, c);
  hh(this, Error(this));
}
D(kk, oh);
fa.Object.defineProperties(kk.prototype, {
  error: {
    configurable: !0,
    enumerable: !0,
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
function lk(a) {
  return new vj(function (c, e) {
    mk(
      a,
      function (f) {
        c(f);
      },
      function (f) {
        f || ((f = new kk("Z", null)), hh(f, Error(f)));
        e(f);
      },
    );
  });
}
function nk(a, c) {
  if (!a) throw uh(T(c)).L;
}
function ok(a) {
  if (a == null) throw kh().L;
  return a;
}
function pk(a) {
  if (a == null) return "null";
  try {
    return a.toString();
  } catch (q) {
    var c = jh(q);
    if (c instanceof nh) {
      a = T(Tg(ci(a))) + String.fromCharCode(64) + T(($h(a) >>> 0).toString(16));
      var e = new qk();
      var f = (rk(), sk),
        g;
      tk ? (g = !1) : (g = !1);
      if (g) {
        var h = "Exception during lenientFormat for " + T(a);
        g = new uk();
        g.j = null;
        g.o = f;
        g.v = h;
        for (g.j = c; e; ) {
          e = $g([0], vk, wk);
          for (f = 0; f < e.length; f++) {
            var k = e[f];
            h = g;
            var l = typeof console === "undefined" ? null : new xk(),
              p;
            if ((p = l)) ((p = h), (p = (k.j ? k.j : (rk(), yk)).Ba() <= p.o.Ba()));
            p &&
              ((k = h.o.Ba()),
              (k =
                k >= (rk(), zk).Ba()
                  ? "error"
                  : k >= (rk(), sk).Ba()
                    ? "warn"
                    : k >= (rk(), Ak).Ba()
                      ? "info"
                      : "log"),
              console[k].call(console, h.v),
              h.j && Bk(l, k, h.j, "Exception: ", !0));
          }
          e = null;
        }
      }
      return "<" + T(a) + " threw " + T(Tg(ci(c))) + ">";
    }
    throw c.L;
  }
}
function Ck() {}
var yk, Ak, zk, sk;
D(Ck, S);
Ck.prototype.j = x("DUMMY");
Ck.prototype.Ba = x(-1);
Ck.prototype.toString = function () {
  return this.j();
};
function rk() {
  rk = u();
  yk = new Dk();
  Ak = new Ek();
  zk = new Fk();
  sk = new Gk();
}
function Dk() {}
D(Dk, Ck);
Dk.prototype.j = x("ALL");
Dk.prototype.Ba = x(-2147483648);
function Ek() {}
D(Ek, Ck);
Ek.prototype.j = x("INFO");
Ek.prototype.Ba = x(800);
function Fk() {}
D(Fk, Ck);
Fk.prototype.j = x("SEVERE");
Fk.prototype.Ba = x(1e3);
function Gk() {}
D(Gk, Ck);
Gk.prototype.j = x("WARNING");
Gk.prototype.Ba = x(900);
function uk() {}
D(uk, S);
function vk() {}
D(vk, S);
function wk(a) {
  return a instanceof vk;
}
function xk() {}
D(xk, S);
function Bk(a, c, e, f, g) {
  (!g && console.groupCollapsed
    ? console.groupCollapsed
    : console.group
      ? console.group
      : console.log
  ).call(console, T(f) + T(e.toString()));
  f = e.L;
  console[c].call(console, (f && f.stack) || "");
  (f = e.o) && Bk(a, c, f, "Caused by: ", !1);
  var h;
  e.C ? (h = e.C.j($g([0], dh, mh))) : (h = $g([0], dh, mh));
  e = h;
  for (h = 0; h < e.length; h++) Bk(a, c, e[h], "Suppressed: ", !1);
  console.groupEnd && console.groupEnd.call(console);
}
function qk() {}
D(qk, S);
var tk = !1;
function Hk() {
  Hk = u();
  Ik = Error.stackTraceLimit;
}
var Ik = 0;
function Jk(a) {
  ej(function () {
    a.C && !a.N && Kk && Kk(new kk("XDeferred swallowed an error that was never read.", a.C));
  });
}
function Lk() {}
D(Lk, S);
function Mk() {
  this.Z = this.D = !1;
}
var Nk = [];
D(Mk, S);
Mk.prototype.dispose = function () {
  if (this.D) var a = null;
  else ((this.D = !0), (a = this.I ? this.I : Nk), (this.I = null));
  if (a && (this.P(), a.length != 0)) for (var c = 0; c < a.length; c++) a[c].dispose();
};
Mk.prototype.Aa = ba("D");
function Ok(a, c) {
  !c || c.Aa() ? (a = null) : a.D ? (a = c) : (a.I || (a.I = []), a.I.push(c), (a = null));
  a && a.dispose();
}
Mk.prototype.P = function () {
  this.Z = !0;
};
Mk.prototype.toString = function () {
  return S.prototype.toString.call(this) || "";
};
function Pk(a) {
  a.D = !1;
  a.Z = !1;
}
function Qk() {
  Rk();
  Mk.call(this);
  this.j = 0;
  this.N = this.v = this.o = !1;
  Pk(this);
  this.j = 1;
  this.v = this.o = !1;
  this.F = [];
  this.B = [];
}
var Kk;
D(Qk, Mk);
function Sk(a, c) {
  Hk();
  100 > Error.stackTraceLimit && (Error.stackTraceLimit = 100);
  nk(a.j != 4, "$");
  nk(a.j == 1, "aa");
  Error.stackTraceLimit = Ik;
  var e = new Lk();
  e.j = c;
  a.H = e;
  a.j = 2;
  Tk(a, !0);
}
function Uk(a, c) {
  nk(a.j != 4, "$");
  nk(a.j == 1, "aa");
  a.C = c;
  a.j = 3;
  Jk(a);
  Tk(a, !1);
}
function mk(a, c, e) {
  nk(a.j != 4, "ba");
  if (a.j != 1 && a.j != 2 && a.j != 3) throw uh("ca`" + T(Vk(a))).L;
  if (a.j == 1) (c && a.F.push(c), e && a.B.push(e));
  else {
    if (a.j != 2 && a.j != 3) throw uh("da`" + T(Vk(a))).L;
    if (a.o) {
      if (a.v) throw vh("ea`" + T(Vk(a)), a.A).L;
      throw vh("fa`" + T(Vk(a)), a.A).L;
    }
    a.o = !0;
    a.v = !0;
    try {
      a.j == 2 && c ? c(a.H.j) : a.j == 3 && e && ((a.N = !0), e(a.C));
    } catch (g) {
      var f = jh(g);
      Wk(f);
      a.A || (a.A = f);
      throw f.L;
    } finally {
      a.v = !1;
    }
    a.o = !1;
  }
}
function Vk(a) {
  if (a.A) {
    var c = Th();
    for (var e = a.A; e; e = e.o)
      e.L && (c.j.length > 0 && Uh(c, "\nCaused by: "), Uh(c, e.L.stack));
    c = c.toString();
  } else c = "<none>";
  return "[" + a.j + ", " + a.v + ", " + a.o + ", " + T(c) + "]";
}
Qk.prototype.transform = function (a) {
  var c = new Qk();
  mk(
    this,
    function (e) {
      try {
        var f = a(e);
      } catch (g) {
        e = jh(g);
        Uk(c, e);
        return;
      }
      Sk(c, f);
    },
    function (e) {
      Uk(c, e);
    },
  );
  return c;
};
function Xk(a, c) {
  var e = new Qk();
  mk(
    a.transform(c),
    function (f) {
      mk(
        f,
        function (g) {
          Sk(e, g);
        },
        function (g) {
          Uk(e, g);
        },
      );
    },
    function (f) {
      Uk(e, f);
    },
  );
  return e;
}
Qk.prototype.P = function () {
  this.C = this.H = null;
  this.j = 4;
  this.F.length = 0;
  this.B.length = 0;
  Mk.prototype.P.call(this);
};
function Tk(a, c) {
  a.o = !0;
  a.v = !0;
  try {
    if (c) for (var e = a.F, f = 0; f < e.length; f++) (0, e[f])(a.H.j);
    else for (a.B.length != 0 && (a.N = !0), f = a.B, e = 0; e < f.length; e++) (0, f[e])(a.C);
  } catch (h) {
    var g = jh(h);
    Wk(g);
    a.A || (a.A = g);
    throw g.L;
  } finally {
    a.v = !1;
  }
  a.o = !1;
  a.F.length = 0;
  a.B.length = 0;
}
function Yk(a) {
  Rk();
  Kk = a;
}
function Rk() {
  Rk = u();
  Kk = u();
}
function Zk(a) {
  if (a == null) return ((a = new dh()), fh(a), hh(a, Error(a)), a);
  if (mh(a)) return a;
  if (a instanceof Error) return jh(a);
  throw Yh("ha").L;
}
function $k(a, c) {
  if (c == null)
    for (c = 0; c < a.length; c = (c + 1) | 0) {
      if (a[c] == null) return c;
    }
  else for (var e = 0; e < a.length; e = (e + 1) | 0) if (Nh(c, a[e])) return e;
  return -1;
}
function al(a) {
  if (a == null)
    throw ((a = new Lh()), eh(a, "can't identity hash null"), hh(a, new TypeError(a)), a.L);
  return ":" + $h(a);
}
function bl(a) {
  if ("number" === typeof a) a = Kh(a);
  else {
    var c;
    a instanceof wh ? (c = a.aa) : (c = a.Ba());
    a = c;
  }
  return a;
}
function cl(a, c) {
  for (var e = 0, f = c.length; e < f; e = (e + 1) | 0) a.push(c[e]);
} /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var dl = globalThis.trustedTypes,
  fl;
function gl() {
  var a = null;
  if (!dl) return a;
  try {
    var c = aa();
    a = dl.createPolicy("goog#html", { createHTML: c, createScript: c, createScriptURL: c });
  } catch (e) {}
  return a;
}
function hl(a) {
  this.j = a;
}
hl.prototype.toString = function () {
  return this.j + "";
};
function il(a) {
  var c = I.onerror;
  I.onerror = function (e, f, g, h, k) {
    c && c(e, f, g, h, k);
    a({ message: e, fileName: f, line: g, lineNumber: g, Qf: h, error: k });
    return !0;
  };
}
function jl(a) {
  var c = Ka("window.location.href");
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
    var g = a.fileName || a.filename || a.sourceURL || I.$googDebugFname || c;
  } catch (h) {
    ((g = "Not available"), (e = !0));
  }
  c = kl(a);
  return !e && a.lineNumber && a.fileName && a.stack && a.message && a.name
    ? { message: a.message, name: a.name, lineNumber: a.lineNumber, fileName: a.fileName, stack: c }
    : ((e = a.message),
      e == null &&
        ((e =
          a.constructor && a.constructor instanceof Function
            ? 'Unknown Error of type "' +
              (a.constructor.name ? a.constructor.name : ll(a.constructor)) +
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
function kl(a, c) {
  c || (c = {});
  c[ml(a)] = !0;
  var e = a.stack || "",
    f = a.cause;
  f &&
    !c[ml(f)] &&
    ((e += "\nCaused by: "),
    (f.stack && f.stack.indexOf(f.toString()) == 0) ||
      (e += typeof f === "string" ? f : f.message + "\n"),
    (e += kl(f, c)));
  a = a.errors;
  if (Array.isArray(a)) {
    f = 1;
    var g;
    for (g = 0; g < a.length && !(f > 4); g++)
      c[ml(a[g])] ||
        ((e += "\nInner error " + f++ + ": "),
        (a[g].stack && a[g].stack.indexOf(a[g].toString()) == 0) ||
          (e += typeof a[g] === "string" ? a[g] : a[g].message + "\n"),
        (e += kl(a[g], c)));
    g < a.length && (e += "\n... " + (a.length - g) + " more inner errors");
  }
  return e;
}
function ml(a) {
  var c = "";
  typeof a.toString === "function" && (c = "" + a);
  return c + a.stack;
}
function nl(a, c) {
  a instanceof Error || ((a = Error(a)), Error.captureStackTrace && Error.captureStackTrace(a, nl));
  a.stack || (a.stack = ol(nl));
  if (c) {
    for (var e = 0; a["message" + e]; ) ++e;
    a["message" + e] = String(c);
  }
  return a;
}
function pl(a, c) {
  a = nl(a);
  if (c) for (var e in c) xc(a, e, c[e]);
  return a;
}
function ol(a) {
  var c = Error();
  if (Error.captureStackTrace) (Error.captureStackTrace(c, a || ol), (c = String(c.stack)));
  else {
    try {
      throw c;
    } catch (e) {
      c = e;
    }
    c = (c = c.stack) ? String(c) : null;
  }
  c || (c = ql(a || arguments.callee.caller, []));
  return c;
}
function ql(a, c) {
  var e = [];
  if (Lb(c, a)) e.push("[...circular reference...]");
  else if (a && c.length < 50) {
    e.push(ll(a) + "(");
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
          h = (h = ll(h)) ? h : "[fn]";
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
      e.push(ql(a.caller, c));
    } catch (k) {
      e.push("[exception trying to get caller]\n");
    }
  } else a ? e.push("[...long stack...]") : e.push("[end]");
  return e.join("");
}
function ll(a) {
  if (rl[a]) return rl[a];
  a = String(a);
  if (!rl[a]) {
    var c = /function\s+([^\(]+)/m.exec(a);
    rl[a] = c ? c[1] : "[Anonymous]";
  }
  return rl[a];
}
var rl = {};
function sl(a) {
  var c = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
  var e = I.document.createElement("div");
  return a.replace(tl, function (f, g) {
    var h = c[f];
    if (h) return h;
    g.charAt(0) == "#" &&
      ((g = Number("0" + g.slice(1))), isNaN(g) || (h = String.fromCharCode(g)));
    if (!h) {
      h = f + " ";
      fl === void 0 && (fl = gl());
      h = (g = fl) ? g.createHTML(h) : h;
      h = new hl(h);
      if (e.nodeType === 1 && /^(script|style)$/i.test(e.tagName)) throw Error("ia");
      if (h instanceof hl) h = h.j;
      else throw Error("ia");
      e.innerHTML = h;
      h = e.firstChild.nodeValue.slice(0, -1);
    }
    return (c[f] = h);
  });
}
function ul(a) {
  return a.replace(/&([^;]+);/g, function (c, e) {
    switch (e) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        return e.charAt(0) != "#" || ((e = Number("0" + e.slice(1))), isNaN(e))
          ? c
          : String.fromCharCode(e);
    }
  });
}
var tl = /&([^;\s<&]+);?/g;
function vl(a) {
  var c;
  c && a.length > 30
    ? (c > 30 && (c = 30), (a = a.substring(0, 30 - c) + "..." + a.substring(a.length - c)))
    : a.length > 30 && (a = a.substring(0, 15) + "..." + a.substring(a.length - 15));
  return a;
}
function wl(a) {
  return a == null ? "" : String(a);
}
function xl(a) {
  return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (c, e, f) {
    return e + f.toUpperCase();
  });
}
function yl(a, c, e, f, g, h, k) {
  var l = "";
  a && (l += a + ":");
  e && ((l += "//"), c && (l += c + "@"), (l += e), f && (l += ":" + f));
  g && (l += g);
  h && (l += "?" + h);
  k && (l += "#" + k);
  return l;
}
var zl = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
);
function Al(a) {
  return a.match(zl);
}
function Bl(a) {
  return a ? decodeURI(a) : a;
}
function Cl(a) {
  var c = a.indexOf("#");
  return c < 0 ? a : a.slice(0, c);
}
function Dl(a, c) {
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
function El(a, c) {
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
function Fl(a, c, e) {
  if (Array.isArray(c)) for (var f = 0; f < c.length; f++) Fl(a, String(c[f]), e);
  else c != null && e.push(a + (c === "" ? "" : "=" + encodeURIComponent(String(c))));
}
function Gl(a, c) {
  var e = [];
  for (c = c || 0; c < a.length; c += 2) Fl(a[c], a[c + 1], e);
  return e.join("&");
}
function Hl(a) {
  var c = [],
    e;
  for (e in a) Fl(e, a[e], c);
  return c.join("&");
}
function Il(a, c) {
  var e = arguments.length == 2 ? Gl(arguments[1], 0) : Gl(arguments, 1);
  return El(a, e);
}
function Jl(a, c) {
  c = Hl(c);
  return El(a, c);
}
function Kl(a, c, e) {
  e = e != null ? "=" + encodeURIComponent(String(e)) : "";
  return El(a, c + e);
}
function Ll(a, c, e, f) {
  for (var g = e.length; (c = a.indexOf(e, c)) >= 0 && c < f; ) {
    var h = a.charCodeAt(c - 1);
    if (h == 38 || h == 63)
      if (((h = a.charCodeAt(c + g)), !h || h == 61 || h == 38 || h == 35)) return c;
    c += g + 1;
  }
  return -1;
}
var Ml = /#|$/;
function Nl(a, c) {
  var e = a.search(Ml),
    f = Ll(a, 0, c, e);
  if (f < 0) return null;
  var g = a.indexOf("&", f);
  if (g < 0 || g > e) g = e;
  f += c.length + 1;
  return decodeURIComponent(a.slice(f, g !== -1 ? g : 0).replace(/\+/g, " "));
}
var Ol = /[?&]($|#)/;
function Pl(a, c) {
  for (var e = a.search(Ml), f = 0, g, h = []; (g = Ll(a, f, c, e)) >= 0; )
    (h.push(a.substring(f, g)), (f = Math.min(a.indexOf("&", g) + 1 || e, e)));
  h.push(a.slice(f));
  return h.join("").replace(Ol, "$1");
}
function Ql(a, c) {
  var e = a.length - 1;
  e >= 0 && a.indexOf("/", e) == e && (a = a.slice(0, -1));
  cb(c, "/") && (c = c.slice(1));
  return a + "/" + c;
}
var Rl;
Rl = function (a) {
  if (!a) return a;
  a = Al(typeof a === "object" ? a.href : a);
  var c = a[1];
  return c !== "http" && c !== "https" ? c || "" : yl(a[1], "", a[3], a[4], a[5], a[6], "");
};
function Sl(a) {
  a && typeof a.dispose == "function" && a.dispose();
}
function Tl(a) {
  for (var c = 0, e = arguments.length; c < e; ++c) {
    var f = arguments[c];
    Na(f) ? Tl.apply(null, f) : Sl(f);
  }
}
function U() {
  this.N = this.N;
  this.I = this.I;
}
U.prototype.N = !1;
U.prototype.Aa = ba("N");
U.prototype.dispose = function () {
  this.N || ((this.N = !0), this.P());
};
U.prototype[Symbol.dispose] = function () {
  this.dispose();
};
function Ul(a, c) {
  c = Wa(Sl, c);
  a.N ? c() : (a.I || (a.I = []), a.I.push(c));
}
U.prototype.P = function () {
  if (this.I) for (; this.I.length; ) this.I.shift()();
};
function Vl() {
  U.call(this);
  this.o = 0;
  this.j = null;
}
D(Vl, U);
Vl.prototype.init = function () {
  this.j = [];
};
var Wl = new Vl();
function Xl(a) {
  this.e = a;
}
function Wk(a) {
  if (a) {
    var c = a.j;
    a = a.L;
    if (a instanceof Object && !Object.isFrozen(a)) {
      var e = Rl(a.fileName || a.filename || a.sourceURL || I.$googDebugFname || location.href);
      try {
        a.fileName = e;
      } catch (f) {}
    }
    if (Wl.o >= 3) throw Error("ka`" + c);
    Wl.o++;
    try {
      Wl.Aa() ||
        a instanceof Uj ||
        a instanceof Kj ||
        (a == null ? void 0 : a.name) === "CanceledError" ||
        (Wl.j && Wl.j.length < 10 && Wl.j.push(new Xl(a)));
    } finally {
      Wl.o--;
    }
  }
}
function Yl(a) {
  if (a == null) return "null";
  var c = typeof a;
  return c === "object" ? (Array.isArray(a) ? "array" : c) : c;
}
function Zl(a, c, e) {
  a[c] = e !== void 0 ? e : null;
}
function $l(a) {
  for (var c in a) return !1;
  return !0;
}
function am(a, c, e) {
  a[c] = bh(e) ? e.j : e != null ? e : null;
}
function bm(a, c) {
  for (var e in c) {
    var f = c[e];
    a[e] = f != null ? f : null;
  }
}
function cm(a) {
  var c = {},
    e;
  for (e in a) c[e] = a[e];
  return c;
}
function dm(a, c) {
  a = a[c];
  return a != null ? a : null;
}
function em(a) {
  var c = new Qk();
  Sk(c, a);
  return c;
}
var fm;
function gm() {
  if (!fm) {
    var a = new hm(null);
    fm = function () {
      return a;
    };
  }
  var c;
  return ((c = fm), c());
}
function im() {}
D(im, S);
function jm(a, c) {
  if (Rg(a, c)) return !0;
  if (!a || !c) return !1;
  var e = a.length;
  if (e != c.length) return !1;
  for (var f = 0; f < e; f = (f + 1) | 0) if (!km(a, c, f)) return !1;
  return !0;
}
function km(a, c, e) {
  var f = Yl(a[e]),
    g = Yl(c[e]);
  if (!Rg(f, g)) return !1;
  switch (f) {
    case "null":
      return !0;
    case "boolean":
      return a[e] == c[e];
    case "number":
      return a[e] == c[e];
    case "string":
      return Rg(a[e], c[e]);
    case "array":
      return jm(a[e], c[e]);
    case "object":
      return lm(a[e], c[e]);
    default:
      throw ph("ma`" + T(f)).L;
  }
}
function mm(a) {
  var c = new im();
  c.j = [];
  for (var e = 0; e < a.length; e++) {
    var f = c.j,
      g = a[e];
    bh(g) ? f.push(g.j) : f.push(g);
  }
  a = c.j;
  c.j = null;
  return a.concat([]);
}
function nm(a) {
  for (var c = Array(a.length), e = 0; e < a.length; e = (e + 1) | 0) c[e] = a[e];
  return c;
}
function om(a, c, e) {
  var f = Yl(a[e]),
    g = Yl(c[e]);
  if (!Rg(f, g)) return !1;
  switch (f) {
    case "null":
      return !0;
    case "boolean":
      return a[e] == c[e];
    case "number":
      return a[e] == c[e];
    case "string":
      return Rg(a[e], c[e]);
    case "object":
      return lm(a[e], c[e]);
    case "array":
      return jm(a[e], c[e]);
    default:
      throw ph("na`" + T(f) + "`" + T(e)).L;
  }
}
function lm(a, c) {
  if (Rg(a, c)) return !0;
  if (a == null || c == null) return !1;
  var e = Object.keys(a).length,
    f = Object.keys(c).length;
  if (e != f) return !1;
  for (f = 0; f < e; f = (f + 1) | 0) {
    var g = Object.keys(a)[f];
    if (!om(a, c, g)) return !1;
  }
  return !0;
}
function pm() {}
D(pm, S);
pm.prototype.get = function () {
  if (this.o == null) {
    var a = I._docs_flag_initialData;
    this.o = a != null ? a : {};
  }
  return this.o;
};
pm.prototype.j = function () {
  return this.get();
};
function hm(a) {
  this.j = new pm();
  this.o = null;
  if (a != null)
    for (var c in a) {
      var e = c,
        f = a[c];
      if (this.o) throw uh("oa").L;
      var g = this.j.j();
      am(g, e, f);
    }
}
D(hm, S);
hm.prototype.clear = function () {
  this.j = new pm();
  this.o = null;
};
hm.prototype.get = function (a) {
  qm(this, a);
  return this.j.j()[a];
};
function rm(a, c) {
  a = a.j.j();
  return c in a;
}
function V(a, c) {
  a = a.get(c);
  return typeof a == "string" ? a == "true" || a == "1" : !!a;
}
function sm(a, c) {
  qm(a, c);
  if (!rm(a, c) || a.get(c) == null) return NaN;
  try {
    var e = T(a.get(c));
    Wg ||
      (Wg = RegExp(
        "^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$",
      ));
    if (!Wg.test(e)) {
      var f = new Zh();
      eh(f, "O`" + T(e));
      hh(f, Error(f));
      throw f.L;
    }
    return parseFloat(e);
  } catch (h) {
    var g = jh(h);
    if (g instanceof Zh) return NaN;
    throw g.L;
  }
}
function tm(a, c) {
  qm(a, c);
  if (!rm(a, c)) return "";
  a = a.get(c);
  if (a == null) return "";
  var e;
  if ((c = "number" === typeof a && ((e = a), !0))) c = Fh(e).equals(Fh(e));
  var f;
  c ? (f = "" + Fh(e)) : (f = T(a));
  return f;
}
function qm(a, c) {
  if (a.o) {
    try {
      var e = a.j.j()[c];
    } catch (k) {
      var f = jh(k);
      if (qh(f)) e = "injection-failed";
      else throw f.L;
    }
    try {
      var g = ok(a.o).j()[c];
    } catch (k) {
      var h = jh(k);
      if (qh(h)) g = "injection-failed";
      else throw h.L;
    }
    if (!Mh(e, g)) throw uh("pa").L;
  }
}
function um(a, c, e) {
  this.v = this.I = !1;
  this.B = a;
  this.j = {};
  this.A = {};
  this.I = !0 === e;
  this.v = !this.I;
  this.F = c;
}
D(um, S);
um.prototype.Ja = function () {
  return this.I || !$l(this.A);
};
function vm(a, c) {
  a = wm(a, c);
  if (a == null) return null;
  hi(Yl(a), "object");
  var e;
  return a instanceof Array && ((e = a), !0) ? e.concat() : cm(a);
}
function xm(a, c) {
  a = ym(a, c);
  return a == null || a == 0 ? null : a;
}
function ym(a, c) {
  a = wm(a, c);
  return a == null ? null : a;
}
function zm(a, c) {
  a = wm(a, c);
  return a == null ? null : a;
}
function Am(a, c) {
  return wm(a, c) == null ? null : a.j[c].length != 0;
}
function Bm(a, c, e) {
  X(a, c, e ? "true" : "");
}
function Cm(a, c) {
  a = wm(a, c);
  return a == null ? null : a.concat();
}
function wm(a, c) {
  a = a.j[c];
  return a != null ? a : null;
}
function Dm(a, c, e, f) {
  if (e instanceof Array)
    return (
      V(a.F, "docs-anlpfdo") || Em(e, [], V(a.F, "docs-anlpfdo")),
      Fm(e, [], V(a.F, "docs-anlpfdo")),
      Gm(e),
      (a.j[c] != null && jm(a.j[c], e)) ||
        ((e = !0 === f ? e : e.concat()), (a.j[c] = e ? e : null), a.v || (a.A[c] = e ? e : null)),
      a
    );
  if (
    bh(e) || "string" === typeof e || "number" === typeof e || "boolean" === typeof e
      ? 0
      : hi(Yl(e), "object")
  )
    return (
      Fm(e, [], V(a.F, "docs-anlpfdo")),
      Hm(e),
      (a.j[c] != null && lm(a.j[c], e)) ||
        ((e = !0 === f ? e : cm(e)),
        (a.j[c] = e != null ? e : null),
        a.v || (a.A[c] = e != null ? e : null)),
      a
    );
  var g = a.j[c];
  if (g == null) f = e == null;
  else {
    var h;
    f = bh(e) && ((h = e), !0) ? Nh(g, h.j) : Nh(g, e);
  }
  f || (am(a.j, c, e), a.v || am(a.A, c, e));
  return a;
}
function X(a, c, e) {
  Dm(a, c, e, !1);
}
function Im(a, c, e, f) {
  Jm(a.j, c, e, f);
  a.v || Jm(a.A, c, e, f);
}
function Km(a, c, e) {
  a = wm(a, c);
  return a != null ? (e in a ? a[e] : null) : null;
}
function Jm(a, c, e, f) {
  var g = dm(a, c);
  if (g == null) {
    var h = (g = {});
    a[c] = h != null ? h : null;
  }
  hi(Yl(g), "object");
  f == null ? (g[e] = null) : am(g, e, f);
}
um.prototype.Qa = function () {
  this.A = {};
  this.I = !1;
};
um.prototype.Kb = x(null);
function Lm(a, c) {
  this.j = 0;
  this.o = a;
  this.j = c;
}
D(Lm, S);
function Hm(a) {
  for (var c in a) {
    if (!a.hasOwnProperty(c) || typeof c === "function") return !1;
    var e = a[c];
    if (Oa(e) && !Array.isArray(e)) return Hm(e);
    if (Array.isArray(e)) return Gm(e);
  }
  return !0;
}
function Gm(a) {
  for (var c = 0; c < a.length; c++) {
    if (Oa(a[c]) && !Array.isArray(a[c])) return Hm(a[c]);
    if (Array.isArray(a[c])) return Gm(a[c]);
  }
  return !0;
}
function Em(a, c, e) {
  c.push(a);
  for (var f = 0; f < a.length; f = (f + 1) | 0)
    if (Array.isArray(a[f])) {
      if (e) $k(c, a[f]);
      else if ($k(c, a[f]) >= 0) throw ph("ra").L;
      Em(a[f], c, e);
    }
  Rg(a, c.pop());
}
function Fm(a, c, e) {
  c.push(a);
  var f;
  if (a instanceof Array && ((f = a), !0)) {
    var g = f;
    for (f = 0; f < g.length; f++) {
      var h = g[f];
      if (h != null) {
        if (e) $k(c, h);
        else if ($k(c, h) >= 0) throw ph("ra").L;
        Fm(h, c, e);
      }
    }
  } else if (a instanceof Object && ((g = a), !0))
    for (f = Object.keys(g), h = 0; h < f.length; h++) {
      var k = f[h];
      if (g[k] != null) {
        if (e) $k(c, g[k]);
        else if ($k(c, g[k]) >= 0) throw ph("ra").L;
        Fm(g[k], c, e);
      }
    }
  Rg(a, c.pop());
}
function Mm(a) {
  this.G = M(a, 0, Mm.eb);
}
D(Mm, R);
var Nm = Og(Mm);
Mm.eb = "docs.security.access_capabilities";
function Om() {
  var a = a
    ? a
    : function (e) {
        return Kh(Math.floor(Math.random() * e));
      };
  var c = (a(2147483647) >>> 0).toString(16);
  c = T("0".repeat(Math.max(0, (8 - c.length) | 0))) + T(c);
  a = (a(2147483647) >>> 0).toString(16);
  return T(a) + T(c);
}
function Pm(a) {
  this.j = a;
}
D(Pm, S);
Pm.prototype.getType = ba("j");
function Qm(a) {
  for (var c = [], e = 0; e < a.length; e++) c.push(Rm(a[e]));
  return c;
}
var Sm = {
  zf: "build-label",
  jf: "buildLabel",
  kf: "clientLog",
  nf: "docId",
  Bf: "mobile-app-version",
  Jf: "severity",
  Hf: "reportSeverity",
  Mf: "severity-unprefixed",
  vf: "isArrayPrototypeIntact",
  wf: "isEditorElementAttached",
  tf: "documentCharacterSet",
  xf: "isModuleLoadFailure",
  Gf: "reportName",
  Af: "locale",
  lf: "createdOnServer",
  Df: "numUnsavedCommands",
  mf: "cspViolationContext",
  Ff: "relatedToBrowserExtension",
  Of: "workerError",
  pf: "docosPostLimitExceeded",
  qf: "docosPostLimitType",
  rf: "docosReactionLimitExceeded",
  sf: "docosReactionLimitType",
  Ef: "origin",
  If: "saveTakingTooLongOnClient",
  Kf: "truncatedCommentNotificationsCount",
  Lf: "truncatedCommentNotificationsFromPayload",
  Cf: "nonfatalReason",
  Nf: "usesModuleSetsServing",
  yf: "isNestedDrawingsEnabled",
  uf: "embeddedDrawingState",
};
function Tm(a) {
  this.j = a;
}
D(Tm, S);
Tm.prototype.info = function (a, c, e) {
  this.j.info(a.L, c, e);
};
Tm.prototype.log = function (a, c, e) {
  this.j.log(a.L, c, e);
};
function Um(
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
  w,
  y,
  z,
  B,
  F,
  J,
  W,
  ha,
  Pa,
  Ia,
  dd,
  oi,
  pi,
  qi,
  ri,
  IE,
  JE,
  KE,
  LE,
  ME,
  NE,
  OE,
  PE,
  QE,
  RE,
  SE,
  TE,
  UE,
  VE,
  WE,
  XE,
  YE,
  ZE,
  $E,
  aF,
  bF,
  cF,
  dF,
  eF,
  fF,
  gF,
  hF,
  iF,
  jF,
  kF,
  lF,
  mF,
  nF,
  oF,
  pF,
  qF,
  rF,
  sF,
  tF,
  uF,
  vF,
  wF,
  xF,
  yF,
  zF,
  AF,
  BF,
  CF,
  DF,
  EF,
  FF,
  GF,
  HF,
  IF,
  JF,
  KF,
  LF,
  MF,
  NF,
  OF,
) {
  this.ab = a;
  this.Vb = e;
  this.ha = c;
  this.bc = f;
  this.la = g;
  this.Ub = h;
  this.K = k;
  this.yc = l;
  this.qc = p;
  this.nc = q;
  this.vd = r;
  this.Dc = w;
  this.oc = y;
  this.rc = z;
  this.j = B;
  this.Fa = F;
  this.Nc = J;
  this.C = W;
  this.Uc = ha;
  this.va = Pa;
  this.hc = Ia;
  this.jc = ZE;
  this.Xb = AF;
  this.dd = dd;
  this.fd = $E;
  this.wc = aF;
  this.J = oi;
  this.fc = pi;
  this.xc = qi;
  this.vc = ri;
  this.zc = IE;
  this.bb = JE;
  this.gd = KE;
  this.S = LE;
  this.T = ME;
  this.N = NE;
  this.R = OE;
  this.U = PE;
  this.F = QE;
  this.X = RE;
  this.yd = SE;
  this.Tc = TE;
  this.td = UE;
  this.ud = VE;
  this.qd = WE;
  this.ld = XE;
  this.rd = YE;
  this.o = bF;
  this.v = cF;
  this.Wa = dF;
  this.wa = eF;
  this.M = fF;
  this.wd = gF;
  this.bd = hF;
  this.Wb = iF;
  this.xd = jF;
  this.lc = kF;
  this.kc = lF;
  this.ma = mF;
  this.Yc = nF;
  this.cb = oF;
  this.ac = pF;
  this.Xa = qF;
  this.Zb = rF;
  this.D = sF;
  this.A = tF;
  this.I = uF;
  this.sc = vF;
  this.tc = wF;
  this.Xc = xF;
  this.Rc = yF;
  this.mc = zF;
  this.Z = BF;
  this.Yb = CF;
  this.O = DF;
  this.Sc = EF;
  this.ad = FF;
  this.cc = GF;
  this.jd = HF;
  this.Pc = IF;
  this.Kc = JF;
  this.B = KF;
  this.Zc = LF;
  this.H = MF;
  this.Va = NF;
  this.Ac = OF;
}
D(Um, S);
function Vm(a) {
  this.G = M(a);
}
D(Vm, R);
function Wm(a) {
  this.G = M(a);
}
D(Wm, R);
function Xm(a) {
  this.G = M(a);
}
D(Xm, R);
function Ym(a) {
  this.G = M(a);
}
D(Ym, R);
var Zm = [0, Jg, [0, Lg, Ig], Lg, Mg];
function $m(a) {
  this.G = M(a);
}
D($m, R);
var an = [0, Zm];
function bn(a) {
  this.G = M(a);
}
D(bn, R);
function cn(a) {
  this.G = M(a);
}
D(cn, R);
function dn(a) {
  this.G = M(a);
}
D(dn, R);
function en(a) {
  this.G = M(a);
}
D(en, R);
function gn(a) {
  this.G = M(a);
}
D(gn, R);
function hn(a) {
  this.G = M(a);
}
D(hn, R);
function jn(a) {
  this.G = M(a);
}
D(jn, R);
function kn(a) {
  this.G = M(a);
}
D(kn, R);
function ln(a) {
  this.G = M(a);
}
D(ln, R);
function mn(a) {
  this.G = M(a);
}
D(mn, R);
function nn(a) {
  this.G = M(a);
}
D(nn, R);
function on(a) {
  this.G = M(a);
}
D(on, R);
function pn(a) {
  this.G = M(a);
}
D(pn, R);
function qn(a) {
  this.G = M(a);
}
D(qn, R);
function rn(a) {
  this.G = M(a);
}
D(rn, R);
function sn(a) {
  this.G = M(a);
}
D(sn, R);
function tn(a) {
  this.G = M(a);
}
D(tn, R);
function un(a) {
  this.G = M(a);
}
D(un, R);
function vn(a) {
  this.G = M(a);
}
D(vn, R);
function wn(a) {
  return Q(a, 4, !0);
}
function xn(a, c) {
  return Gf(a, 6, c);
}
function yn(a, c) {
  return Q(a, 13, c);
}
function zn(a) {
  this.G = M(a);
}
D(zn, R);
function An(a) {
  this.G = M(a);
}
D(An, R);
function Bn(a) {
  this.G = M(a);
}
D(Bn, R);
function Cn(a) {
  return pf(a, vn, 1);
}
function Dn(a) {
  this.G = M(a);
}
D(Dn, R);
function En(a) {
  return pf(a, Bn, 50);
}
function Fn() {}
D(Fn, S);
function Gn(a) {
  var c = new Fn();
  c.Rc = a;
  return c;
}
function Hn(a) {
  a.v && (a.j || (a.j = new Ym()), N(a.j, Vm, 4, a.v));
  return new Um(
    a.Rc,
    a.wa,
    a.o,
    a.cc,
    a.j,
    a.Xb,
    a.R,
    a.zc,
    a.rc,
    a.oc,
    a.yd,
    a.Kc,
    a.qc,
    a.sc,
    a.B,
    a.Xa,
    a.Pc,
    a.N,
    a.Yc,
    a.Va,
    a.jc,
    a.jd,
    a.T,
    a.hc,
    a.yc,
    a.wc,
    a.Ac,
    a.Tc,
    a.qd,
    a.ha,
    a.X,
    a.M,
    a.Z,
    a.la,
    a.K,
    a.ma,
    a.Wb,
    a.bd,
    a.wd,
    a.xd,
    a.ud,
    a.td,
    a.vd,
    a.kc,
    a.ld,
    a.xc,
    a.C,
    a.D,
    a.bb,
    a.Wa,
    a.S,
    a.Ub,
    a.gd,
    a.Yb,
    a.Vb,
    a.mc,
    a.lc,
    a.Fa,
    a.ad,
    a.Xc,
    a.bc,
    a.cb,
    a.ac,
    a.H,
    a.I,
    a.J,
    a.tc,
    a.vc,
    a.dd,
    a.Zc,
    a.nc,
    a.A,
    a.va,
    a.Zb,
    a.U,
    a.Uc,
    a.Ke,
    a.fc,
    a.rd,
    a.Sc,
    a.Nc,
    a.F,
    a.fd,
    a.O,
    a.ab,
    a.Dc,
  );
}
function In(a) {
  var c = Gn(a.ab);
  c.wa = a.ha;
  c.o = a.Vb;
  c.cc = a.bc;
  c.j = a.la;
  c.v && c.j && We(c.j, Vm, 4);
  c.D = a.v;
  c.Xb = a.Ub;
  c.zc = a.yc;
  c.rc = a.qc;
  c.Fa = a.ma;
  c.oc = a.nc;
  c.yd = a.vd;
  c.Kc = a.Dc;
  c.qc = a.oc;
  c.sc = a.rc;
  c.B = a.j;
  c.Xa = a.Fa;
  c.Pc = a.Nc;
  c.N = a.C;
  c.Yc = a.Uc;
  c.Va = a.va;
  c.jc = a.hc;
  c.kc = a.jc;
  c.jd = a.dd;
  c.ld = a.fd;
  c.xc = a.wc;
  c.T = a.J;
  c.hc = a.fc;
  c.yc = a.xc;
  c.wc = a.vc;
  c.Ac = a.zc;
  c.Tc = a.bb;
  c.qd = a.gd;
  c.ha = a.S;
  c.X = a.T;
  c.M = a.N;
  c.Z = a.R;
  c.la = a.U;
  c.K = a.F;
  c.ma = a.X;
  c.Wb = a.yd;
  c.bd = a.Tc;
  c.wd = a.td;
  c.xd = a.ud;
  c.ud = a.qd;
  c.td = a.ld;
  c.vd = a.rd;
  c.bb = a.Wa;
  c.C = a.o;
  c.Wa = a.wa;
  c.S = a.M;
  c.Ub = a.wd;
  c.gd = a.bd;
  c.Vb = a.xd;
  c.mc = a.lc;
  c.lc = a.kc;
  c.Yb = a.Wb;
  c.ad = a.Yc;
  c.Xc = a.cb;
  c.bc = a.ac;
  c.cb = a.Xa;
  c.ac = a.Zb;
  c.H = a.D;
  c.I = a.A;
  c.J = a.I;
  c.tc = a.sc;
  c.vc = a.tc;
  c.dd = a.Xc;
  c.Zc = a.Rc;
  c.nc = a.mc;
  c.A = a.Xb;
  c.va = a.Z;
  c.Zb = a.Yb;
  c.U = a.O;
  c.Uc = a.Sc;
  c.Ke = a.ad;
  c.fc = a.cc;
  c.rd = a.jd;
  c.Nc = a.Kc;
  c.F = a.B;
  c.fd = a.Zc;
  c.Sc = a.Pc;
  c.R = a.K;
  c.O = a.H;
  c.ab = a.Va;
  c.Dc = a.Ac;
  return c;
}
function Jn() {
  Mk.call(this);
  Pk(this);
}
D(Jn, Mk);
Jn.prototype.clear = u();
Jn.prototype.log = u();
function Kn(a, c) {
  this.A = !1;
  this.v = a ? a : Ln();
  this.j = {};
  this.C = new Jn();
  this.o = {};
  this.A = Mh(c, !0);
}
D(Kn, S);
Kn.prototype.I = function (a, c, e) {
  e = Date.now() - e;
  c[29031] = e !== void 0 ? e : null;
  this.o = cm(a);
  bm(this.o, c);
};
Kn.prototype.D = function () {
  return JSON.stringify(this.o);
};
function Mn(a, c) {
  var e = (Nn(), On);
  On = (On + 1) | 0;
  e = "goog_" + e;
  var f = a.j;
  a = Pn(a, c, void 0, void 0, !1);
  Zl(f, e, a);
  return e;
}
function Pn(a, c, e, f, g) {
  a.B && a.B.j(c);
  var h = new Qn(),
    k = a.v,
    l = a.v.j ? performance.now() : Date.now(),
    p = a.A,
    q = a.F,
    r = a.B;
  h.v = !1;
  h.I = 0;
  h.M = a;
  h.D = k;
  h.o = l;
  h.j = c;
  h.F = p;
  h.H = !0 === e;
  h.K = f;
  h.N = !0 === g;
  h.A = q;
  h.B = r;
  h.C = null;
  return h;
}
Kn.prototype.saveInitialLoadStats = Kn.prototype.I;
Kn.prototype.getInitialLoadStats = Kn.prototype.D;
function Nn() {
  Nn = u();
  On = Math.floor(Math.random() * -2147483648) | 0;
}
var On = 0;
function Qn() {
  this.v = this.N = this.F = this.H = !1;
  this.I = 0;
}
D(Qn, S);
Qn.prototype.complete = function (a) {
  if (this.v) throw uh("ta`" + T(this.j)).L;
  this.v = !0;
  this.J = this.I + (this.o != null ? (this.D.j ? performance.now() : Date.now()) - this.o : 0);
  this.o = null;
  a == null && (a = this.K);
  this.F
    ? ((a = a == null ? Gn(21) : In(a)), this.A && this.A.o(a), Rn(this, a), (a = Hn(a)))
    : (this.A && (a = this.A.j(a)),
      this.C != null && ((a = a ? In(a) : Gn(21)), Rn(this, a), (a = Hn(a))));
  this.M.C.log(this.j, this.J, this.H, a, this.N);
  this.B && this.B.o(this.j, this.J, a);
};
Qn.prototype.start = function () {
  if (this.v) throw uh("va`" + T(this.j)).L;
  if (this.o != null) throw uh("wa`" + T(this.j)).L;
  this.o = this.D.j ? performance.now() : Date.now();
  this.B && this.B.j(this.j);
};
function Rn(a, c) {
  if (a.C != null) {
    var e = c.o;
    e || ((e = new jn()), (c.o = e));
    Hf(e, 7, a.C);
  }
}
function Sn() {
  this.j = !1;
}
var Tn;
D(Sn, S);
function Ln() {
  Un();
  return Tn;
}
function Vn() {
  var a = new Sn();
  a.j = "performance" in I && !!performance.now;
  return a;
}
function Un() {
  Un = u();
  Tn = Vn();
}
function Wn(a) {
  this.v = !1;
  this.j = {};
  a || Ln();
}
var Xn = { cov: "mark_fully_visible", coe: "mark_interactive", fcoe: "mark_fully_loaded" };
D(Wn, S);
function Yn(a, c) {
  a.v && delete a.C[c];
}
Wn.prototype.o = function (a) {
  Zn(this, a, Date.now());
  Yn(this, a);
  this.A && (this.A.j(a), (a = Xn[a]), a != null && this.A.j(a));
};
Wn.prototype.D = function (a, c) {
  a in this.j || Zl(this.j, a, 0);
  Zl(this.j, a, this.j[a] + c);
  Yn(this, a);
};
function Zn(a, c, e) {
  if (c in a.j) throw ph("Aa`" + T(c)).L;
  Zl(a.j, c, e);
}
Wn.prototype.I = function (a) {
  if (!V(gm(), "icso")) {
    if (a != null)
      for (var c in a) {
        var e = c;
        Zn(this, e, a[c]);
        Yn(this, e);
      }
    Zn(this, "sldummy", 0);
    Yn(this, "sldummy");
  }
};
Wn.prototype.initialize = function (a, c, e, f, g) {
  if (this.v) throw ph("xa").L;
  for (var h in this.j) {
    if (h in a) throw ph("ya`" + T(h)).L;
    Zl(a, h, this.j[h]);
  }
  this.j = a;
  a = {};
  for (c = 0; c < e.length; c = (c + 1) | 0) a[e[c]] = !0;
  this.C = a;
  this.B = g;
  for (var k in this.j) delete this.C[k];
  this.B.j();
  this.B.o();
  this.v = !0;
};
Wn.prototype.setTime = Wn.prototype.o;
Wn.prototype.incrementTime = Wn.prototype.D;
Wn.prototype.setServerValues = Wn.prototype.I;
var $n;
function ao() {
  ao = u();
  $n = new Wn(null);
}
var bo;
function co() {
  co = u();
  bo = "";
  eo = !1;
}
var eo = !1;
function fo() {}
D(fo, S);
fo.prototype.equals = function (a) {
  return go(this, a);
};
fo.prototype.Ea = function () {
  for (var a = 1, c = ho(this), e = 0; e < c.length; e++) {
    var f = this[c[e]];
    f != null && (a = Math.imul(1000003, a) ^ bi(f));
  }
  return a;
};
fo.prototype.toString = function () {
  var a = ci(this);
  a = si(si(T(Pg(a.o)) + T(ni("[]", a.j)), "."), "$");
  a = a.substr((a.lastIndexOf("AutoValue_") + 1) | 0);
  var c = T(a) + "{";
  a = new Vh();
  a.A = ", ".toString();
  a.v = c.toString();
  a.o = "}".toString();
  a.B = T(a.v) + T(a.o);
  c = ho(this);
  for (var e = 0; e < c.length; e++) {
    var f = c[e],
      g = this[f];
    Array.isArray(g) && (g = "[" + T(g) + "]");
    var h = a;
    f = T(f) + "=" + T(g);
    h.j ? Uh(h.j, h.A) : ((g = new Sh()), (g.j = h.v), (h.j = g));
    h = h.j;
    h.j = T(h.j) + T(f);
  }
  return a.toString();
};
function go(a, c) {
  if (c == null || !Rg(ci(c), ci(a))) return !1;
  var e = ho(a);
  if (e.length != ho(c).length) return !1;
  for (var f = 0; f < e.length; f++) {
    var g = e[f];
    if (!Mh(a[g], c[g])) return !1;
  }
  return !0;
}
function ho(a) {
  var c = Object.keys(a),
    e = a.D;
  return e
    ? c.filter(function (f) {
        return !e.includes(f);
      })
    : c;
}
function io() {
  Mk.call(this);
  Pk(this);
}
D(io, Mk);
function jo() {
  io.call(this);
  this.o = {};
  this.j = null;
}
D(jo, io);
jo.prototype.P = function () {
  io.prototype.P.call(this);
  var a = this.o,
    c;
  for (c in a) delete a[c];
  this.j = null;
};
jo.prototype.dispatchEvent = function (a) {
  ko(this, a);
};
function ko(a, c) {
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
function lo() {}
D(lo, S);
function mo() {
  Mk.call(this);
  Pk(this);
  this.j = [];
}
D(mo, Mk);
function no(a, c, e) {
  var f;
  a: {
    for (f = 0; f < a.j.length; f = (f + 1) | 0) {
      var g = a.j[f];
      if (Rg(g.o, e) && Rg(g.j, c)) {
        f = !0;
        break a;
      }
    }
    f = !1;
  }
  if (!f) {
    a = a.j;
    ok(e);
    f = c.o;
    if (al(e) in f) {
      c = [e];
      e = new Sh();
      e.j = "";
      for (a = g = 0; a < c.length; ) {
        f = "Observer %s previously registered.".indexOf("%s", g);
        if (f == -1) break;
        e.j = T(e.j) + T("Observer %s previously registered.".substr(g, (f - g) | 0));
        g = void 0;
        Uh(e, pk(c[((g = a), (a = (a + 1) | 0), g)]));
        g = (f + 2) | 0;
      }
      e.j = T(e.j) + T("Observer %s previously registered.".substr(g, (34 - g) | 0));
      if (a < c.length) {
        for (f = " ["; a < c.length; a = (a + 1) | 0) (Uh(e, f), Uh(e, pk(c[a])), (f = ", "));
        e.j = T(e.j) + String.fromCharCode(93);
      }
      throw uh(e.toString()).L;
    }
    Zl(c.o, al(e), e);
    c.j = null;
    f = new lo();
    f.j = c;
    f.o = e;
    a.push(f);
  }
}
mo.prototype.P = function () {
  var a;
  for (a = this.j.pop(); a; ) {
    var c = a.j;
    a = a.o;
    var e = c.o;
    al(a) in e && ((e = c.o), (a = al(a)), delete e[a], (c.j = null));
    a = this.j.pop();
  }
  Mk.prototype.P.call(this);
};
function Y() {
  Mk.call(this);
  Pk(this);
}
D(Y, Mk);
A = Y.prototype;
A.Hc = function (a) {
  if (!($k(this.ga(), a.B) >= 0)) throw ph("Da`" + T(a.B)).L;
  return this.pb(a);
};
A.za = function (a, c) {
  var e = this.ka(a),
    f = [];
  a = new oo(e, a, c, null);
  f.push(a);
  return f;
};
A.pb = function (a) {
  return this.za(a, null);
};
A.ka = function (a) {
  throw ph("Ea`" + T(a.B)).L;
};
A.ba = function (a) {
  return po(a) ? $k(this.ga(), a.B) >= 0 : !1;
};
function qo(a) {
  this.v = a;
}
D(qo, S);
qo.prototype.getType = ba("v");
function po(a) {
  a = a.getType();
  return a === "update-record" || a === "delete-record";
}
function ro(a, c, e) {
  this.v = a;
  this.D = c;
  this.B = e;
}
D(ro, qo);
function so(a) {
  if (a.D == null) throw ph("Fa").L;
  return a.D;
}
function oo(a, c, e, f) {
  ro.call(this, f ? f : "update-record", a, c.B);
  this.o = !1;
  a = e;
  this.o = c.I;
  this.j = {};
  e = c.A;
  a = a ? a : [];
  for (var g in e) am(this.j, g, $k(a, g) >= 0 ? wm(c, g) : c.j[g]);
}
D(oo, ro);
function to(a) {
  var c = new Mm();
  a = uo.indexOf(a);
  var e = a >= uo.indexOf(5),
    f = a >= uo.indexOf(4),
    g = a >= uo.indexOf(2),
    h = a >= uo.indexOf(3);
  Q(c, 1, a >= uo.indexOf(1), L);
  Q(c, 2, e, L);
  Q(c, 3, f, L);
  Q(c, 4, g, L);
  Q(c, 8, g, L);
  Q(c, 5, h, L);
  Q(c, 7, h, L);
  Q(c, 6, h, L);
  Q(c, 9, g, L);
  Q(c, 10, g, L);
  Q(c, 11, g, L);
  Q(c, 12, g, L);
  Q(c, 13, g, L);
  Q(c, 14, h, L);
  Q(c, 15, h, L);
  Q(c, 17, h, L);
  Q(c, 18, f, L);
  Q(c, 20, h, L);
  Q(c, 25, !1, L);
  Q(c, 16, !1, L);
  Q(c, 19, !1, L);
  Q(c, 21, h, L);
  Q(c, 22, h, L);
  Q(c, 23, g, L);
  Q(c, 24, !1, L);
  Q(c, 26, !1, L);
  Q(c, 27, !1, L);
  Q(c, 28, !1, L);
  return c;
}
function vo(a, c) {
  wo();
  this.j = c;
}
var xo;
D(vo, S);
vo.prototype.kd = function (a, c) {
  for (var e = Jh(xo.j()), f = [], g = 0; g < a.length; g = (g + 1) | 0) f.push(new yo(a[g]));
  !0 === c && ((a = Jh(xo.j()) - e), this.j.D("md", a));
  return f;
};
function wo() {
  wo = u();
  xo = new zo();
}
function zo() {}
D(zo, S);
zo.prototype.j = function () {
  return Fh(Date.now());
};
function Ao(a) {
  this.o = a;
}
D(Ao, S);
Ao.prototype.j = function () {
  var a;
  return ((a = this.o), a());
};
function Bo() {
  this.o = !1;
  this.j = [];
}
D(Bo, S);
function Co(a, c, e) {
  !0 === e && ((a.j = []), (a.o = !0));
  a.j.push(c);
}
function Do(a) {
  var c = a.j;
  a.j = [];
  a.o = !1;
  return c;
}
function Eo() {
  this.j = this.o = 0;
}
D(Eo, S);
function Fo(a, c, e, f, g, h) {
  Eo.call(this);
  this.o = c;
  this.B = g;
  this.A = a;
  this.j = e;
  this.v = h;
}
D(Fo, Eo);
function Go(a, c, e, f) {
  um.call(this, "document", f, e);
  this.C = this.C = !1;
  this.o = new Bo();
  X(this, "id", a);
  X(this, "documentType", c);
}
var uo = [0, 1, 5, 4, 2, 3];
D(Go, um);
A = Go.prototype;
A.V = function () {
  return this.j.id;
};
A.getType = function () {
  return this.j.documentType;
};
function Ho(a, c) {
  X(a, "jobset", c);
}
A.ia = function () {
  return zm(this, "jobset");
};
function Io(a, c, e) {
  X(a, "rev", c);
  X(a, "rai", e ? [e.j] : null);
}
function Jo(a, c, e) {
  e = mg(e);
  Im(a, "acjf", c, e);
}
function Ko(a, c) {
  X(a, "lastModifiedClientTimestamp", c);
}
A.Kb = function () {
  var a,
    c = this.o.j.length == 0;
  c ? (a = um.prototype.Kb.call(this)) : (a = new Lm(this.V(), c ? 1 : 2));
  return a;
};
function Lo(a) {
  var c = a.getType(),
    e = a.ia();
  return new Mo(c, e, wm(a, "isFastTrack") == null ? !1 : a.j.isFastTrack.length != 0);
}
function No(a, c) {
  X(a, "ic", c);
}
function Oo(a, c) {
  X(a, "embeddedDrawingState", Ph(c));
}
A.Ja = function () {
  return um.prototype.Ja.call(this) || this.o.j.length != 0;
};
function Po(a, c, e) {
  this.v = a;
  this.A = c;
  this.D = e;
}
D(Po, qo);
function Qo(a, c, e, f) {
  Po.call(this, "append-commands", a, c);
  this.B = !1;
  this.C = e;
  this.B = f;
}
D(Qo, Po);
function Ro(a, c, e) {
  Mk.call(this);
  Pk(this);
  this.qe = a;
  this.se = c;
  this.oe = new vo(this.se, e);
}
D(Ro, Mk);
Ro.prototype.Ha = ba("qe");
Ro.prototype.kd = function (a, c) {
  return this.oe.kd(a, c);
};
Ro.prototype.Gc = function (a) {
  for (var c = new Bo(), e = a.o, f = 0; f < e.j.length; f = (f + 1) | 0)
    (Co(c, e.j[f], e.o), (e.o = !1));
  e.j = [];
  if (c.j.length == 0) return [];
  e = c.o;
  return [new Qo(a.V(), a.getType(), Do(c), e)];
};
function So(a, c) {
  kk.call(this, a, c);
  this.A = {};
  hh(this, Error(this));
}
D(So, kk);
function To(a, c, e, f, g) {
  So.call(
    this,
    "Local storage error: " + T(c) + String(f != null ? " (" + T(Uo(f)) + ")" : ""),
    mh(e) ? e : null,
  );
  this.type = 0;
  this.v = !1;
  this.type = a;
  this.cause = e;
  this.v = g != null && g;
  hh(this, Error(this));
}
D(To, So);
function Vo(a, c) {
  a = new To(a, c, null, null, null);
  hh(a, Error(a));
  return a;
}
function Wo(a) {
  return "Failed to write to localstore (" + a.type + "): " + T(So.prototype.B.call(a));
}
function Uo(a) {
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
function Mo(a, c, e) {
  this.j = !1;
  this.v = a;
  this.o = c;
  this.j = e;
}
D(Mo, S);
Mo.prototype.getType = ba("v");
Mo.prototype.ia = ba("o");
function Xo(a) {
  this.j = a;
}
D(Xo, S);
function Yo(a, c, e, f) {
  this.v = "append-template-commands";
  this.B = !1;
  this.A = a;
  this.D = c;
  this.C = e;
  this.B = f;
}
D(Yo, qo);
Yo.prototype.Ha = ba("D");
function Zo(a, c, e) {
  um.call(this, "applicationMetadata", e, c);
  this.o = !1;
  X(this, "dt", a);
  this.C = [];
}
D(Zo, um);
Zo.prototype.Ha = function () {
  return this.j.dt;
};
Zo.prototype.ia = function () {
  return zm(this, "jobset");
};
function $o(a) {
  a = ym(a, "version");
  a == null && (a = 0);
  return Kh(a);
}
Zo.prototype.Qa = function () {
  um.prototype.Qa.call(this);
  this.o = !1;
};
Zo.prototype.Ja = function () {
  return this.o || um.prototype.Ja.call(this);
};
function ap() {
  this.j = this.v = this.B = this.A = this.C = this.D = 0;
}
D(ap, S);
function bp(a) {
  var c = new ap();
  if (a == null) throw kh().L;
  c.o = a;
  return c;
}
function cp(a, c) {
  a.D = c;
  a.j = ((a.j | 1) << 24) >> 24;
  return a;
}
function dp(a, c) {
  a.C = c;
  a.j = ((a.j | 2) << 24) >> 24;
  return a;
}
function ep(a, c) {
  a.A = c;
  a.j = ((a.j | 4) << 24) >> 24;
  return a;
}
function fp(a, c) {
  a.B = c;
  a.j = ((a.j | 8) << 24) >> 24;
  return a;
}
function gp(a, c) {
  a.v = c;
  a.j = ((a.j | 16) << 24) >> 24;
  return a;
}
function hp(a) {
  if (a.j != 31 || a.o == null) throw th().L;
  var c = new ip(),
    e = a.o,
    f = a.D,
    g = a.C,
    h = a.A,
    k = a.B;
  a = a.v;
  c.C = e;
  c.B = f;
  c.A = g;
  c.o = h;
  c.v = k;
  c.j = a;
  return c;
}
function ip() {
  this.j = this.v = this.o = this.A = this.B = 0;
}
D(ip, fo);
var jp = "c oc ol otv op ou ppu ppe pwu u emm".split(" ");
function kp(a, c, e, f) {
  um.call(this, a, f, e);
  X(this, "dataType", c);
}
D(kp, um);
function lp(a, c) {
  kp.call(this, "cacheUpdateStats", "cacheupdatestats", a, c);
}
D(lp, kp);
function mp() {
  return ["document", "spreadsheets", "presentation", "drawings", "offlinecommon"];
}
function np(a) {
  if (!($k(mp(), a) >= 0)) throw Yh("La`" + T(a)).L;
}
function op(a, c, e, f) {
  np(c);
  var g = qp(a, c),
    h = {};
  e = mm(e);
  h.completeCacheNames = e ? e : null;
  f = mm(f);
  h.incompleteCacheNames = f ? f : null;
  g.lastSeenCacheState = h != null ? h : null;
  X(a, c, g);
}
function qp(a, c) {
  np(c);
  a = vm(a, c);
  return a == null ? {} : a;
}
function rp(a, c) {
  var e = Date.now();
  np(c);
  var f = qp(a, c);
  f.lastAttemptStartTimestamp = e;
  X(a, c, f);
}
function sp(a, c, e) {
  var f = Date.now();
  np(c);
  var g = qp(a, c);
  g.lastAttemptEndTimestamp = f;
  e
    ? ((g.lastSuccessTimestamp = f), (g.consecutiveFailureCount = 0))
    : ((e = g.consecutiveFailureCount),
      (e = e != null ? Ph(e) : null),
      (g.consecutiveFailureCount = e ? (e.j + 1) | 0 : 1));
  X(a, c, g);
}
function tp(a) {
  Y.call(this);
  this.na = a;
}
D(tp, Y);
tp.prototype.ga = function () {
  return ["cacheUpdateStats"];
};
tp.prototype.ka = x(null);
tp.prototype.ba = function (a) {
  return Y.prototype.ba.call(this, a) && !hi(a.getType(), "delete-record");
};
function up() {
  Y.call(this);
}
D(up, Y);
A = up.prototype;
A.ga = function () {
  return [];
};
A.za = function () {
  throw ph("Ma").L;
};
A.pb = function (a) {
  return this.za(a, null);
};
A.ka = function () {
  throw ph("Na").L;
};
A.ba = x(!1);
function vp() {
  Y.call(this);
}
D(vp, Y);
vp.prototype.ga = function () {
  return ["comment"];
};
vp.prototype.ka = function (a) {
  return [a.j.di, a.V()];
};
function wp(a, c) {
  Y.call(this);
  this.Mc = a;
  this.re = c;
}
D(wp, Y);
A = wp.prototype;
A.ga = function () {
  return ["document"];
};
A.Oa = function (a) {
  var c = this.Mc[a];
  if (!c) throw ph("Oa`" + T(a)).L;
  return c;
};
A.createDocument = function (a, c, e) {
  a = new Go(a, c, !0, this.re, this.Mc[c]);
  e == null || (ym(a, "initialSyncReason") == null && X(a, "initialSyncReason", e));
  return a;
};
A.ba = function (a) {
  var c = a.getType();
  return c === "append-commands" || c === "write-trix" ? !0 : Y.prototype.ba.call(this, a);
};
A.za = function (a) {
  var c = this.Oa(a.getType()).Gc(a);
  return a.C
    ? (a.Qa(), c)
    : Y.prototype.za
        .call(
          this,
          a,
          "approvalMetadataStatus contentLockType lastModifiedClientTimestamp lastWarmStartedTimestamp ic odocid relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber fileLockedReason mimeType resourceKey initialPinSourceApp quotaStatus".split(
            " ",
          ),
        )
        .concat(c);
};
A.ka = function (a) {
  return a.V();
};
function xp(a, c) {
  Y.call(this);
  this.pe = a;
  this.na = c;
}
D(xp, Y);
A = xp.prototype;
A.ga = function () {
  return ["applicationMetadata"];
};
A.ka = function (a) {
  return a.Ha();
};
A.ba = function (a) {
  return hi(a.getType(), "update-application-metadata");
};
A.za = function (a) {
  var c = this.ka(a);
  return [new yp(c, a, a.o ? a.C.slice(0) : null)];
};
A.Oa = function (a) {
  var c = this.pe[a];
  if (!c) throw ph("Oa`" + T(a)).L;
  return c;
};
function yp(a, c, e) {
  oo.call(this, a, c, null, "update-application-metadata");
  this.A = e;
}
D(yp, oo);
function zp() {
  Y.call(this);
}
D(zp, Y);
zp.prototype.ga = function () {
  return ["documentEntity"];
};
zp.prototype.ka = function (a) {
  return [a.j.documentId, a.getType(), a.V()];
};
function Ap() {
  Y.call(this);
}
D(Ap, Y);
Ap.prototype.ga = function () {
  return [];
};
function Bp(a, c) {
  this.v = "document-lock";
  this.B = 0;
  this.A = a;
  this.B = c;
}
D(Bp, qo);
function Cp(a, c) {
  if (V(c, "docs-offline-ercidep") && !V(c, "docs-localstore-cide")) return !1;
  switch (a) {
    case "kix":
    case "punch":
    case "drawing":
    case "ritz":
    case "test":
      return !V(c, "docs-localstore-dom");
    default:
      return !1;
  }
}
function Dp(a, c) {
  switch (a) {
    case "kix":
      a = tm(c, "docs-localstore-eegfnd");
      try {
        if (a.length == 0) var e = Ep;
        else {
          if (!Fp) {
            c = [Ep, Gp, Hp];
            c.zd = li(Ip, Jp, 1);
            for (var f = new Map(), g = 0; g < c.length; g = (g + 1) | 0) {
              var h = c[g].name();
              f.set(h, c[g]);
            }
            Fp = f;
          }
          f = Fp;
          if (a == null) throw kh().L;
          var k = f.get(a);
          if (k == null) {
            var l = new Xh();
            fh(l);
            hh(l, Error(l));
            throw l.L;
          }
          e = k;
        }
        return e;
      } catch (q) {
        var p = jh(q);
        if (p instanceof Xh) return Ep;
        throw p.L;
      }
    default:
      return Ep;
  }
}
function Ip() {
  this.j = 0;
}
var Fp;
D(Ip, Wh);
function Kp(a, c) {
  var e = new Ip();
  e.o = a;
  e.j = c;
  return e;
}
function Jp(a) {
  return a instanceof Ip;
}
var Ep = Kp("UNKNOWN", 0),
  Gp = Kp("LEGACY_CONTROL", 1),
  Hp = Kp("ESCHER_TREATMENT", 2);
function Lp(a, c, e, f, g, h) {
  um.call(this, "impressionBatch", h, g);
  X(this, "di", a);
  X(this, "dt", c);
  X(this, "ibt", e);
  X(this, "iba", f);
}
D(Lp, um);
function Mp() {
  Y.call(this);
}
D(Mp, Y);
Mp.prototype.ga = function () {
  return ["impressionBatch"];
};
Mp.prototype.ka = function (a) {
  var c = [];
  c.push(zm(a, "di"));
  c.push(a.j.ibt);
  return c;
};
Mp.prototype.ba = function (a) {
  return (
    Y.prototype.ba.call(this, a) &&
    ((hi(a.getType(), "update-record") && a.o) || hi(a.getType(), "delete-record"))
  );
};
function Np() {
  Y.call(this);
}
D(Np, Y);
Np.prototype.ga = function () {
  return [];
};
function Op(a, c, e) {
  this.j = a;
  this.o = c;
  this.v = e;
}
D(Op, S);
function Pp(a) {
  this.j = a;
}
D(Pp, S);
function Qp(a, c) {
  Mk.call(this);
  this.v = this.o = !1;
  Pk(this);
  this.j = a;
  this.A = new jo();
  this.v = Mh(c, !0);
}
D(Qp, Mk);
function Rp(a) {
  if (a.o) throw ph("Qa").L;
  a.o = !0;
}
Qp.prototype.Cb = function () {
  return this.j.Cb();
};
Qp.prototype.write = function (a, c, e, f, g, h) {
  var k = this;
  if (!this.o) throw ph("Ra").L;
  var l = Sp(a);
  a = Tp(this, a);
  a.length == 0
    ? e()
    : Up(
        this.j,
        a,
        c,
        function () {
          ko(k.A, l);
          e();
        },
        f,
        g,
        h,
      );
};
function Sp(a) {
  for (var c = [], e = 0; e < a.length; e++) {
    var f = a[e];
    c.push(new Op(f, f.I ? "new" : "update", f.A));
  }
  return new Pp(c, null);
}
function Tp(a, c) {
  for (var e = [], f = null, g = 0; g < c.length; g++) {
    var h = c[g];
    if (h.Ja()) {
      var k = a.j;
      var l = h.B;
      if ((l = l in k.C ? k.C[l] : null)) {
        k = h.Kb();
        l = l.Hc(h);
        cl(e, l);
        if (f) {
          if (k) {
            if (!Rg(f.o, k.o)) throw ph("qa").L;
            f = f.j > k.j ? f : k;
          }
        } else f = k;
        h.Qa();
      } else throw ph("Sa`" + T(h.B)).L;
    }
  }
  f && !a.v && e.unshift(new Bp(f.o, f.j));
  return e;
}
Qp.prototype.toString = x("[LocalStore]");
function Vp() {
  Y.call(this);
}
D(Vp, Y);
Vp.prototype.ga = function () {
  return [];
};
function Wp() {
  Y.call(this);
}
D(Wp, Y);
Wp.prototype.ga = function () {
  return ["blobMetadata"];
};
Wp.prototype.za = function (a) {
  return Y.prototype.za.call(this, a, jp);
};
Wp.prototype.pb = function (a) {
  return this.za(a, null);
};
Wp.prototype.ka = function (a) {
  return [a.j.d, a.j.p];
};
function Xp(a, c, e, f, g, h, k) {
  um.call(this, "pendingQueue", k, e);
  this.D = this.o = 0;
  this.O = !1;
  this.D = 6;
  this.o = f;
  this.K = g.slice(0);
  this.M = h.slice(0);
  X(this, "docId", a);
  X(this, "documentType", c);
  X(this, "revision", -1);
  Bm(this, "undeliverable", !1);
  Bm(this, "unsavedChanges", !1);
}
var Yp = [
  "revisionAccessInfo",
  "unsentBundleMetadata",
  "selection",
  "sentBundlesSavedRevision",
  "snapshotBundleIndex",
];
D(Xp, um);
function Zp(a) {
  return a.j.docId;
}
function $p(a) {
  X(a, "revision", Ph(1));
  X(a, "revisionAccessInfo", null);
}
A = Xp.prototype;
A.getType = function () {
  return this.j.documentType;
};
function aq(a, c) {
  X(a, "unsentBundleMetadata", c);
}
A.clear = function () {
  Bm(this, "undeliverable", !1);
  Bm(this, "unsavedChanges", !1);
  X(this, "sentBundlesSavedRevision", null);
  X(this, "selection", null);
  X(this, "snapshotBundleIndex", null);
  for (var a = this.K, c = 0; c < a.length; c++)
    for (var e = a[c].j(), f = 0; f < e.length; f++) e[f].dispose();
  this.K = [];
  a = this.M;
  for (c = 0; c < a.length; c++) for (e = a[c].j(), f = 0; f < e.length; f++) e[f].dispose();
  this.M = [];
  if (this.D != 6) throw uh("Wa`" + this.D + "`2").L;
  this.D = 2;
};
A.Ja = function () {
  return this.D != 6 || um.prototype.Ja.call(this);
};
A.Qa = function () {
  um.prototype.Qa.call(this);
  this.J && this.J.length != 0 && (this.o = (this.o + 1) | 0);
  this.N && (this.o = (this.o + this.N.length) | 0);
  this.H && (this.o = (this.o + this.H.length) | 0);
  this.D = 6;
  this.C = this.H = this.N = this.J = null;
};
A.Kb = function () {
  return new Lm(Zp(this), 2);
};
A.dispose = function () {
  this.O = !0;
  for (var a = this.K, c = 0; c < a.length; c++)
    for (var e = a[c].j(), f = 0; f < e.length; f++) {
      var g = e[f];
      g && g.dispose();
    }
  a = this.M;
  for (c = 0; c < a.length; c++)
    for (e = a[c].j(), f = 0; f < e.length; f++) (g = e[f]) && g.dispose();
};
A.Aa = ba("O");
function bq(a, c, e) {
  this.o = this.j = 0;
  this.j = a;
  this.sessionId = c;
  this.o = e;
}
D(bq, S);
function cq(a, c, e) {
  this.A = !1;
  this.B = a;
  this.C = c;
  this.D = e;
  this.A = V(e, "docs-rmcl");
}
D(cq, S);
cq.prototype.ga = function () {
  return ["pendingQueue"];
};
cq.prototype.ka = function (a) {
  return Zp(a);
};
cq.prototype.Hc = function (a) {
  var c = a.getType();
  if (!this.B[c]) throw ph("Xa`" + T(c)).L;
  var e = a.D;
  c = [];
  switch (e) {
    case 7:
      c = Zp(a);
      var f = a.o;
      e = [];
      for (var g, h = a.N, k = 0; k < h.length; k++) {
        g = h[k];
        f = (f + 1) | 0;
        g = dq(this, g.o(), Zp(a), f, !0);
        if (!g) throw ph("ab").L;
        e.push(g);
      }
      h = (a.o + e.length) | 0;
      k = [];
      f = [];
      g = a.H ? a.H : [];
      for (var l = 0; l < g.length; l++) {
        var p = g[l];
        var q = p.o();
        if ((q = dq(this, q, c, (h + 1) | 0, null)))
          (f.push(q),
            (q = k),
            (p = new bq(p.v(), p.A(), (h + 1) | 0)),
            q.push(p),
            (h = (h + 1) | 0));
      }
      aq(a, eq(k));
      h = new fq(a);
      e.push(h);
      cl(e, f);
      a.o >= 0 && e.push(new gq(c, a.o));
      c = e;
      break;
    case 1:
      e = (a.o + 1) | 0;
      f = Zp(a);
      c = [];
      h = a.J;
      k = a.C ? Ph(a.C.j) : null;
      g = a.C ? a.C.sessionId : null;
      if ((l = vm(a, "unsentBundleMetadata"))) {
        p = [];
        for (q = 0; q < l.length; q = (q + 1) | 0) p.push(new bq(l[q].rid, l[q].sid, l[q].lei));
        l = p;
      } else l = [];
      if (k && g != null) l.push(new bq(k.j, g, e));
      else {
        if (l.length == 0) throw ph("$a").L;
        k = l[(l.length - 1) | 0];
        l[(l.length - 1) | 0] = new bq(k.j, k.sessionId, e);
      }
      h && aq(a, eq(l));
      $l(a.A) || ((a = new oo(f, a, Yp, null)), c.push(a));
      (a = dq(this, h, f, e, null)) && c.push(a);
      break;
    case 5:
      aq(a, null);
      e = c;
      a = new fq(a);
      e.push(a);
      break;
    case 2:
      aq(a, null);
      e = c;
      a = new hq(a);
      e.push(a);
      break;
    case 3:
      e = c;
      a = new iq(a);
      e.push(a);
      break;
    case 4:
      e = c;
      a = new jq(a);
      e.push(a);
      break;
    case 6:
      e = c;
      a = new oo(Zp(a), a, Yp, null);
      e.push(a);
      break;
    default:
      throw ph("Za`" + e).L;
  }
  return c;
};
function dq(a, c, e, f, g) {
  if (!(!0 === g || (c && c.length != 0))) return null;
  g = [];
  if (c) {
    for (var h = [], k = 0; k < c.length; k++) {
      var l = Rm(c[k]);
      g.push(l);
      if (!a.A) {
        var p = h;
        l = kq(JSON.stringify(l));
        cl(p, l);
      }
    }
    h.length > 0 &&
      ((c = {}),
      (h = "{" + T(h.join("; ")) + "}"),
      (c.command_malformedCharacterContext = h != null ? h : null),
      (a = a.C),
      (h = new nh()),
      eh(h, "Serializing commands containing malformed surrogate characters."),
      hh(h, Error(h)),
      a.info(h, c, null));
  }
  return new lq(e, g, f);
}
function eq(a) {
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
function hq(a) {
  oo.call(this, Zp(a), a, Yp, "pq-clear");
}
D(hq, oo);
function jq(a) {
  oo.call(this, Zp(a), a, Yp, "pq-clear-sent-bundle");
}
D(jq, oo);
function iq(a) {
  oo.call(this, Zp(a), a, Yp, "pq-clear-sent");
}
D(iq, oo);
function gq(a, c) {
  this.v = "pq-delete-commands";
  this.A = 0;
  this.B = a;
  this.A = c;
}
D(gq, qo);
function mq(a, c, e) {
  this.j = this.o = 0;
  this.sessionId = a;
  this.o = c;
  this.j = e;
}
D(mq, S);
function fq(a) {
  oo.call(this, Zp(a), a, Yp, "pq-mark-sent");
  this.C = !1;
  this.A = [];
  var c = a.o;
  if (a.D == 7) {
    this.C = !0;
    for (var e = a.N, f = 0; f < e.length; f++) {
      var g = e[f];
      c = (c + 1) | 0;
      a = this.A;
      var h = g.A();
      g = new mq(h, g.v(), c);
      a.push(g);
    }
  } else
    ((this.C = !1),
      (e = this.A),
      (f = a.C ? a.C.sessionId : null),
      (a = a.C ? Ph(a.C.j) : null),
      e.push(new mq(f, a.j, c)));
}
D(fq, oo);
function lq(a, c, e) {
  this.v = "pq-write-commands";
  this.A = 0;
  this.C = a;
  this.B = c;
  this.A = e;
}
D(lq, qo);
function nq(a, c, e, f, g) {
  this.o = this.j = 0;
  this.B = a;
  this.j = c;
  this.o = e;
  this.A = f;
  this.v = g;
}
D(nq, S);
nq.prototype.toString = function () {
  var a =
    "MalformedCharacterContext(unicodeChar: " +
    T(this.B) +
    ", index: " +
    this.j +
    ", textLength: " +
    this.o;
  this.A != null && (a = T(a) + (", prev: " + T(this.A)));
  this.v != null && (a = T(a) + (", next: " + T(this.v)));
  return T(a) + ")";
};
nq.prototype.equals = function (a) {
  return a instanceof nq && Rg(this.toString(), a.toString());
};
nq.prototype.Ea = function () {
  for (var a = [this.B, Ph(this.j), Ph(this.o), this.A, this.v], c = 1, e = 0; e < a.length; e++) {
    c = Math.imul(31, c);
    var f = a[e];
    f = f != null ? bi(f) : 0;
    c = (c + f) | 0;
  }
  return c;
};
function kq(a) {
  for (var c = [], e = 0; e < a.length; e = (e + 1) | 0) {
    var f = gi(a, e),
      g = !1,
      h = a.charCodeAt(e),
      k = Oh(a.charCodeAt(e));
    h >= 55296 && h <= 56319
      ? (g = !(f >= 65536 && f <= 1114111))
      : k && (e > 0 ? ((g = gi(a, (e - 1) | 0)), (g = !(g >= 65536 && g <= 1114111))) : (g = !0));
    g &&
      c.push(
        new nq(
          "\\u" + T((f >>> 0).toString(16)),
          e,
          a.length,
          oq(a, (e - 1) | 0),
          oq(a, (e + 1) | 0),
        ),
      );
  }
  return c;
}
function oq(a, c) {
  return c < 0 || c >= a.length ? null : "\\u" + T((gi(a, c) >>> 0).toString(16));
}
function pq() {}
D(pq, S);
function qq() {
  return new pq();
}
function rq() {
  var a = qq();
  a.o = null;
  return a;
}
function sq() {
  this.j = 0;
}
D(sq, Wh);
function tq(a, c) {
  var e = new sq();
  e.o = a;
  e.j = c;
  return e;
}
var uq = tq("PIN", 0),
  vq = tq("UNPIN", 1),
  wq = tq("REMOVE", 2),
  xq = tq("MARK_INITIAL_MIGRATION_STARTED", 3);
function yq() {}
D(yq, fo);
yq.prototype.V = ba("v");
function zq(a, c) {
  kp.call(this, "pinneddocuments", "pinneddocuments", a, c);
  this.o = [];
}
D(zq, kp);
zq.prototype.Ja = function () {
  return (!!this.o && this.o.length != 0) || kp.prototype.Ja.call(this);
};
zq.prototype.Qa = function () {
  kp.prototype.Qa.call(this);
  this.o = [];
};
function Aq(a) {
  a = vm(a, "pinnedDocs");
  return a != null ? a : {};
}
function Bq(a) {
  Y.call(this);
  this.na = a;
}
D(Bq, Y);
Bq.prototype.ga = function () {
  return ["pinneddocuments"];
};
Bq.prototype.ka = x(null);
Bq.prototype.ba = function (a) {
  return hi(a.getType(), "update-pinned-docs")
    ? !0
    : Y.prototype.ba.call(this, a) && !hi(a.getType(), "delete-record");
};
function Cq(a) {
  this.newVersion = 0;
  this.newVersion = a;
}
D(Cq, S);
function Dq() {
  Mk.call(this);
  Pk(this);
  this.ha = new jo();
  this.C = {};
}
D(Dq, Mk);
function Eq(a, c) {
  for (var e = c.ga(), f = 0; f < e.length; f++) {
    var g = e[f];
    if (a.C[g]) throw ph("bb`" + T(g)).L;
    Zl(a.C, g, c);
  }
}
A = Dq.prototype;
A.Dd = x(null);
A.dc = x(null);
A.Ua = x(null);
A.Ed = x(null);
A.Cd = x(null);
A.Bd = x(null);
function Fq(a, c, e) {
  this.j = this.o = 0;
  this.o = a;
  this.v = c;
  this.j = e;
}
D(Fq, S);
function Gq(a, c) {
  this.j = a;
  this.o = c;
}
D(Gq, S);
function Hq(a) {
  return new Gq(a.docId, a.resourceKey);
}
function Iq(a, c, e) {
  kp.call(this, "syncHints", ["synchints", "" + c], a, e);
  X(this, "docIds", []);
  X(this, "sourceApp", Ph(c));
  X(this, "docIdentifiers", []);
}
D(Iq, kp);
function Jq(a, c) {
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
  X(a, "docIdentifiers", e);
  X(a, "docIds", []);
}
function Kq(a, c) {
  c = mm(c);
  X(a, "docIds", c);
  X(a, "docIdentifiers", []);
}
function Lq(a) {
  a = ym(a, "sourceApp");
  return a == null ? 0 : Kh(a);
}
function Mq() {
  Y.call(this);
}
D(Mq, Y);
Mq.prototype.ga = function () {
  return ["syncHints"];
};
function Nq(a, c) {
  var e = new Qk();
  Oq(
    a,
    function (f) {
      Sk(e, f);
    },
    function (f) {
      Uk(e, f);
    },
  );
  return Xk(e, function (f) {
    for (var g = [], h = 0; h < f.length; h++) {
      var k = f[h];
      var l = Lq(k);
      var p = [];
      var q = Cm(k, "docIdentifiers");
      if (q) {
        for (var r = [], w = 0; w < q.length; w = (w + 1) | 0) {
          var y = r;
          y.push(Hq(q[w]));
        }
        y = r;
      } else y = [];
      if (y.length == 0)
        for (k = (k = Cm(k, "docIds")) ? nm(k) : [], y = 0; y < k.length; y = (y + 1) | 0)
          p.push(new Fq(l, k[y], y, null));
      else for (q = 0; q < y.length; q = (q + 1) | 0) ((k = y[q]), p.push(new Fq(l, k.j, q, k.o)));
      l = p;
      for (p = 0; p < l.length; p++)
        if (((k = l[p]), Rg(c, k.v))) {
          g.push(k);
          break;
        }
    }
    return em(g);
  });
}
Mq.prototype.ka = function (a) {
  return ["synchints", "" + Lq(a)];
};
Mq.prototype.ba = function (a) {
  return Y.prototype.ba.call(this, a) && hi(a.getType(), "update-record");
};
function Pq() {
  Y.call(this);
}
D(Pq, Y);
Pq.prototype.ga = function () {
  return ["syncObject"];
};
Pq.prototype.ka = function (a) {
  return nm(a.j.keyPath.concat());
};
Pq.prototype.ba = function (a) {
  return Y.prototype.ba.call(this, a) && hi(a.getType(), "update-record") && a.o;
};
function Qq(a, c) {
  kp.call(this, "syncStats", "syncstats", a, c);
  X(this, "syncVersion", 0);
  X(this, "lastDailyRunTime", 0);
  X(this, "maxSpaceQuota", 0);
  X(this, "webfontsSyncVersion", 0);
  X(this, "lastStartedSyncDocs", []);
  X(this, "backgroundSyncDenylist", {});
}
D(Qq, kp);
function Rq(a, c, e) {
  var f = {};
  f.documentId = c != null ? c : null;
  f.timestamp = e;
  c = (c = Cm(a, "lastStartedSyncDocs")) ? c : [];
  c.push(f);
  f = (c.length - 10) | 0;
  f > 0 && c.splice(0, f);
  X(a, "lastStartedSyncDocs", c);
}
function Sq(a, c) {
  var e = vm(a, "backgroundSyncDenylist");
  e = e == null ? {} : e;
  var f = c.C,
    g = {};
  g.retryCount = c.B;
  g.nextSyncTimestampMillis = c.A;
  g.firstFailTimestampMillis = c.o;
  g.lastFailTimestampMillis = c.v;
  g.documentDiskSize = c.j;
  e[f] = g != null ? g : null;
  X(a, "backgroundSyncDenylist", e);
}
function Tq(a, c, e, f, g, h, k, l) {
  var p = {};
  p.count = e;
  p.modelSyncFailCount = f;
  p.serverTime = g;
  p.lastSyncErrorType = h ? h.j : null;
  p.nextSyncTimestampMillis = k;
  p.backoffRetryConsecutiveFailCount = l;
  e = Uq(a);
  e[c] = p != null ? p : null;
  X(a, "failedToSyncDocs", e);
}
function Uq(a) {
  a = vm(a, "failedToSyncDocs");
  return a == null ? {} : a;
}
function Vq(a) {
  Y.call(this);
  this.na = a;
}
D(Vq, Y);
Vq.prototype.ga = function () {
  return ["syncStats"];
};
function Wq(a, c) {
  var e = new Qk();
  Xq(
    a,
    function (f) {
      Sk(e, f);
    },
    function (f) {
      Uk(e, f);
    },
  );
  return Xk(e, function (f) {
    f
      ? ((f = Uq(f)),
        (f = dm(f, c)),
        (f = f == null || f.lastSyncErrorType == null ? null : Ph(f.lastSyncErrorType)))
      : (f = null);
    return em(f);
  });
}
Vq.prototype.ka = x(null);
Vq.prototype.ba = function (a) {
  return Y.prototype.ba.call(this, a) && !hi(a.getType(), "delete-record");
};
function Yq(a) {
  Mk.call(this);
  Pk(this);
  this.j = a;
}
D(Yq, Mk);
Yq.prototype.Gc = function (a) {
  var c = Do(a.o);
  return c.length == 0 ? [] : [new Yo(a.V(), a.Ha(), c, !0)];
};
Yq.prototype.Ha = ba("j");
function Zq(a, c) {
  Y.call(this);
  this.te = a;
  this.na = c;
}
D(Zq, Y);
A = Zq.prototype;
A.ga = function () {
  return ["templateCreationMetadata", "templateMetadata"];
};
A.ka = function (a) {
  return a.B === "templateCreationMetadata" ? [a.V()] : [a.V()];
};
A.pb = function (a) {
  var c = Y.prototype.pb.call(this, a);
  a.B === "templateCreationMetadata" && ((a = this.Oa(a.Ha()).Gc(a)), cl(c, a));
  return c;
};
A.Oa = function (a) {
  var c = this.te[a];
  if (!c) throw ph("Oa`" + T(a)).L;
  return c;
};
A.ba = function (a) {
  return a.getType() === "append-template-commands" ? !0 : Y.prototype.ba.call(this, a);
};
function $q(a, c, e) {
  um.call(this, "user", e, c);
  X(this, "id", a);
  Bm(this, "fastTrack", !0);
}
D($q, um);
$q.prototype.V = function () {
  return this.j.id;
};
function ar(a) {
  return zm(a, "locale");
}
function br(a) {
  return a.j.fastTrack.length != 0;
}
function cr(a) {
  Y.call(this);
  this.na = a;
}
D(cr, Y);
A = cr.prototype;
A.ga = function () {
  return ["user"];
};
A.za = function (a, c) {
  return Y.prototype.za.call(this, a, c);
};
A.pb = function (a) {
  return this.za(a, null);
};
A.ka = function (a) {
  return a.V();
};
A.ba = function (a) {
  return Y.prototype.ba.call(this, a) && !hi(a.getType(), "delete-record");
};
function dr() {
  Y.call(this);
}
D(dr, Y);
dr.prototype.ga = function () {
  return ["fontMetadata"];
};
dr.prototype.ka = function (a) {
  return a.j.fontFamily;
};
dr.prototype.ba = function (a) {
  return Y.prototype.ba.call(this, a) ? (hi(a.getType(), "update-record") ? a.o : !0) : !1;
};
function er(a, c) {
  ro.call(this, "update-pinned-docs", null, "pinneddocuments");
  this.A = 0;
  this.C = a;
  this.A = c;
}
D(er, ro);
function fr(a) {
  kk.call(this, a, null);
  hh(this, Error(this));
}
D(fr, kk);
function gr() {}
var hr, ir, jr, kr, lr;
D(gr, S);
function mr() {
  mr = u();
  hr = new gr();
  ir = new gr();
  jr = new gr();
  kr = new gr();
  lr = new gr();
}
function nr(a, c, e, f) {
  Mk.call(this);
  this.j = 0;
  Pk(this);
  this.v = a;
  this.j = c;
  this.o = new or(Math.imul(e, 1e3), f);
}
D(nr, Mk);
function pr(a) {
  return ((a.o.get(null) + 1) | 0) / (a.o.v / 1e3) <= a.j;
}
function qr(a) {
  if (!pr(a)) throw new fr("Query would cause " + T(a.v) + " to exceed " + a.j + " qps.").L;
  a = a.o;
  var c = Jh(a.A.j());
  rr(a, c);
  var e = sr(a.o);
  if (!e || c >= e.o)
    ((e = new tr()),
      (e.o = a.j * Math.floor(c / a.j + 1)),
      (e.j = 0),
      (e.A = 2147483647),
      (e.v = -2147483648),
      a.o.add(e));
  e.j = (e.j + 1) | 0;
  e.A = Math.min(1, e.A);
  e.v = Math.max(1, e.v);
}
function tr() {
  this.v = this.A = this.j = 0;
}
D(tr, S);
function or(a, c) {
  this.j = this.v = 0;
  this.A = c ? c : new zo();
  this.v = a;
  this.j = (a / 50) | 0;
  this.o = new ur(Ph(50));
}
D(or, S);
or.prototype.get = function (a) {
  return vr(this, a, function (c, e) {
    return Ph((c.j + e.j) | 0);
  });
};
function vr(a, c, e) {
  c = c != null ? c : Jh(a.A.j());
  rr(a, c);
  var f = 0;
  c = a.j * Math.floor(c / a.j + 1) - a.v;
  for (var g = (a.o.j.length - 1) | 0; g >= 0; g = (g - 1) | 0) {
    var h = a.o.get(g);
    if (h.o <= c) break;
    f = e(Ph(f), h).j;
  }
  return f;
}
function rr(a, c) {
  var e;
  (e = sr(a.o)) && c < e.o - a.j && a.o.clear();
}
function ur(a) {
  this.o = this.v = this.o = 0;
  this.v = a != null ? bl(a) : 100;
  this.j = [];
}
D(ur, S);
A = ur.prototype;
A.add = function (a) {
  var c = this.j[this.o];
  this.j[this.o] = a;
  this.o = ((this.o + 1) | 0) % this.v | 0;
  return c;
};
A.get = function (a) {
  a = wr(this, a);
  return this.j[a];
};
A.set = function (a, c) {
  a = wr(this, a);
  this.j[a] = c;
};
A.clear = function () {
  this.o = this.j.length = 0;
};
A.Nb = function () {
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
function sr(a) {
  return a.j.length == 0 ? null : a.get((a.j.length - 1) | 0);
}
function wr(a, c) {
  if (c >= a.j.length) throw ((a = new rh()), fh(a), hh(a, Error(a)), a.L);
  return a.j.length < a.v ? c : ((a.o + c) | 0) % a.v | 0;
}
function xr() {
  this.j = 0;
}
var yr = {},
  zr,
  Ar,
  Br,
  Cr,
  Dr,
  Er,
  Fr,
  Gr,
  Hr,
  Ir,
  Jr,
  Kr,
  Lr,
  Mr,
  Nr,
  Or,
  Pr,
  Qr;
D(xr, S);
function Rr(a, c) {
  var e = new xr();
  e.o = a;
  e.j = c;
  Zl(yr, a, e);
  return e;
}
xr.prototype.toString = ba("o");
function Sr() {
  Sr = u();
  Cr = Rr("IDLE", 1);
  Dr = Rr("BUSY", 1);
  Er = Rr("RECOVERING", 2);
  Fr = Rr("OFFLINE", 3);
  Gr = Rr("SERVER_DOWN", 3);
  Ar = Rr("FORBIDDEN", 4);
  Br = Rr("AUTH_REQUIRED", 4);
  Rr("DELTA_STALE_CLIENT", 4);
  Hr = Rr("SESSION_LIMIT_EXCEEDED", 5);
  Ir = Rr("LOCKED", 5);
  Jr = Rr("INCOMPATIBLE_SERVER", 5);
  Kr = Rr("CLIENT_ERROR", 5);
  Lr = Rr("CLIENT_FATAL_ERROR", 5);
  Mr = Rr("CLIENT_FATAL_ERROR_PENDING_CHANGES", 5);
  Rr("BATCH_CLIENT_ERROR", 3);
  Rr("SAVE_ERROR", 5);
  Nr = Rr("DOCUMENT_TOO_LARGE", 5);
  Or = Rr("CSE_BLOCKED_REQUEST", 5);
  Rr("BATCH_SAVE_ERROR", 3);
  Pr = Rr("DOCS_EVERYWHERE_IMPORT_ERROR", 5);
  zr = Rr("POST_LIMIT_EXCEEDED_ERROR", 5);
  Qr = Rr("DOCS_QUOTA_EXCEEDED_ERROR", 5);
}
var Tr;
function Ur() {
  Ur = u();
  Tr = RegExp("^[^\\[\\{]+");
}
function Vr() {
  Mk.call(this);
  Pk(this);
  this.o = new jo();
  this.A = new jo();
  var a = (mr(), hr);
  this.v = new Wr(a, null);
  this.j = (Sr(), Cr);
  Ok(this, this.o);
  Ok(this, this.A);
  Ok(this, this.v);
}
D(Vr, Mk);
function Xr(a, c) {
  c = c ? c : (Sr(), Kr);
  return a == 401
    ? (Sr(), Br)
    : a == 403
      ? (Sr(), Ar)
      : a == 421
        ? (Sr(), Hr)
        : a == 423
          ? (Sr(), Ir)
          : a == 512 || a == 432
            ? (Sr(), Pr)
            : a == 433
              ? (Sr(), zr)
              : a == 434
                ? (Sr(), Qr)
                : a == 445
                  ? (Sr(), Or)
                  : a == 202 ||
                      a == 405 ||
                      a == 409 ||
                      a == 429 ||
                      (a >= 500 && a <= 599 && a != 550)
                    ? (Sr(), Gr)
                    : a == 413
                      ? (Sr(), Nr)
                      : (a >= 400 && a <= 499) || a == 550
                        ? c
                        : (Sr(), Fr);
}
function Yr(a, c, e, f, g) {
  var h = a.j;
  if (!Rg(c, h)) {
    a.j = c;
    var k = a.v;
    var l = c.equals(Ar)
      ? (mr(), kr)
      : c.equals(Br)
        ? (mr(), jr)
        : c.j >= 5
          ? (mr(), lr)
          : c.j != 1
            ? (mr(), ir)
            : (mr(), hr);
    if (!Rg(k.value, l)) {
      var p = k.value;
      k.value = l;
      ko(k, new Zr(p, l));
      k.v && Sl(p);
    }
    ko(a.o, new $r(h, c, e, f, g));
  }
}
function $r(a, c) {
  this.oldState = a;
  this.newState = c;
}
D($r, S);
function as(a) {
  jo.call(this);
  this.value = a;
}
D(as, jo);
function Wr(a, c) {
  as.call(this, a);
  this.v = !1;
  this.v = !0 === c;
}
D(Wr, as);
Wr.prototype.P = function () {
  this.v && Sl(this.value);
  as.prototype.P.call(this);
};
function Zr(a, c) {
  this.oldValue = a;
  this.newValue = c;
}
D(Zr, S);
function bs(a, c, e, f) {
  this.v = a;
  this.j = c;
  this.A = e;
  this.o = f;
}
D(bs, S);
function cs(a, c, e) {
  var f = e.o;
  f
    ? a.A.log(f, null, !1)
    : ((a = a.A),
      (f = new oh()),
      gh(f, "db`" + e.type + "`" + T(e.j), e),
      hh(f, Error(f)),
      a.log(f, null, !1));
  Uk(c, e);
}
function ds(a, c, e, f, g) {
  var h = a.j.j.B.createDocument(f, c, 1);
  Ho(h, g.ia());
  Bm(h, "isFastTrack", br(a.v));
  Im(h, "acl", a.v.V(), Ph(3));
  var k = to(3);
  Jo(h, a.v.V(), k);
  Ko(h, Jh(new zo().j()));
  if ((k = Cm(g, "docosKeyData"))) ((k[10] = f), X(h, "docosKeyData", k));
  Bm(h, "inc", !0);
  Bm(h, "hpmdo", !1);
  Bm(h, "pendingCreation", !0);
  X(h, "snapshotState", Ph(3));
  a: switch (c) {
    case "kix":
      k = V(a.o, "docs-localstore-endfnd");
      break a;
    default:
      k = !1;
  }
  var l = Dp(c, a.o);
  es(h, l, k);
  c = new Xp(f, c, !0, -1, [], [], a.j.j.F.D);
  f = zm(h, "odocid") ? [] : g.C ? g.C : [];
  No(h, Qm(f));
  fs(h, f, $o(g));
  Io(h, 1, null);
  X(h, "pendingQueueState", Ph(1));
  $p(c);
  a.j.write(
    [h, c],
    15,
    function () {
      Sk(e, h);
    },
    function (p) {
      cs(a, e, p);
    },
    null,
    null,
  );
}
function es(a, c, e) {
  if (e) (Oo(a, 2), Bm(a, "ende", !0));
  else
    switch (c.j) {
      case 2:
        Oo(a, 2);
        Bm(a, "ende", !0);
        break;
      case 1:
        Oo(a, 3);
        Bm(a, "ende", !1);
        break;
      case 0:
        (Oo(a, 1), Bm(a, "ende", !1));
    }
}
function fs(a, c, e) {
  if (e >= 1)
    for (e = 0; e < c.length; e = (e + 1) | 0) Co(a.o, new Fo(0, 1, e, null, null, [c[e]]), null);
  else Co(a.o, new Fo(0, 1, 0, null, null, c), null);
}
function gs(a, c, e, f) {
  hs(
    a.j.j.Ua(),
    c,
    function (g) {
      g
        ? is(a, c, e, f, g)
        : cs(a, e, Vo(9, "Missing ApplicationMetadata for " + T(f) + " of type " + T(c)));
    },
    function (g) {
      cs(a, e, g);
    },
  );
}
function is(a, c, e, f, g) {
  a.j.j.J.Bc(
    f,
    function () {
      ds(a, c, e, f, g);
    },
    function (h) {
      cs(a, e, h);
    },
  );
}
function js(a, c) {
  var e = new Qk();
  if (!Cp(c, a.o)) return (Uk(e, Vo(8, "Create disabled.")), e);
  var f = a.j.j.Ua();
  f
    ? ks(
        f,
        c,
        function (g) {
          gs(a, c, e, g);
        },
        function (g) {
          cs(a, e, g);
        },
      )
    : Uk(e, Vo(3, "popUnusedDocumentId not supported."));
  return e;
}
function yo(a) {
  this.j = "offline-oc";
  this.o = a;
}
D(yo, Pm);
function ls() {}
D(ls, S);
function Rm(a) {
  if (!hi(a.getType(), "offline-oc")) throw ph("eb").L;
  return a.o;
}
var ms;
function ns(a) {
  os();
  if (!ps(a)) return a;
  var c = String.fromCodePoint(47);
  c = a.indexOf(c, 3);
  return c < 0 ? "" : a.substr(c);
}
function ps(a) {
  os();
  return ji(a, "/a/");
}
function qs(a) {
  os();
  return a.replace(ms, "$1");
}
function os() {
  os = u();
  ms = RegExp("\\/u\\/[0-9]+($|\\/)");
}
function rs(a) {
  try {
    var c = ii(a);
    var e = c < 0 ? null : a.substr((c + 1) | 0);
    var f = e == null ? null : decodeURIComponent(e);
  } catch (k) {
    var g = jh(k);
    if (qh(g)) return {};
    throw g.L;
  }
  a = {};
  if (f)
    for (f = f.split("&"), e = 0; e < f.length; e++) {
      var h = f[e].split("=");
      h.length == 2 && ((c = ss(h[0])), (h = ss(h[1])), c && h && Zl(a, c, h));
    }
  return a;
}
function ss(a) {
  try {
    return decodeURIComponent(a);
  } catch (e) {
    var c = jh(e);
    if (qh(c)) return null;
    throw c.L;
  }
}
function ts(a, c) {
  var e = Th(),
    f;
  for (f in c)
    (e.j.length > 0 && Uh(e, "&"),
      Uh(Uh(Uh(e, encodeURIComponent(f)), "="), encodeURIComponent(T(c[f]))));
  c = encodeURIComponent(e.toString());
  e = ii(a);
  return T(e < 0 ? a : a.substr(0, e | 0)) + String(c ? "#" + T(c) : "");
}
function us(a) {
  this.G = M(a, 0, us.eb);
}
D(us, R);
us.prototype.getData = function () {
  return Df(this, 4, L);
};
var vs = Og(us);
us.eb = "er";
function ws(a) {
  return new Ao(function () {
    var c = a();
    return Fh(c);
  });
}
function xs() {
  function a() {
    g[0] = 1732584193;
    g[1] = 4023233417;
    g[2] = 2562383102;
    g[3] = 271733878;
    g[4] = 3285377520;
    r = q = 0;
  }
  function c(w) {
    for (var y = k, z = 0; z < 64; z += 4)
      y[z / 4] = (w[z] << 24) | (w[z + 1] << 16) | (w[z + 2] << 8) | w[z + 3];
    for (z = 16; z < 80; z++)
      ((w = y[z - 3] ^ y[z - 8] ^ y[z - 14] ^ y[z - 16]),
        (y[z] = ((w << 1) | (w >>> 31)) & 4294967295));
    w = g[0];
    var B = g[1],
      F = g[2],
      J = g[3],
      W = g[4];
    for (z = 0; z < 80; z++) {
      if (z < 40)
        if (z < 20) {
          var ha = J ^ (B & (F ^ J));
          var Pa = 1518500249;
        } else ((ha = B ^ F ^ J), (Pa = 1859775393));
      else
        z < 60
          ? ((ha = (B & F) | (J & (B | F))), (Pa = 2400959708))
          : ((ha = B ^ F ^ J), (Pa = 3395469782));
      ha = ((((w << 5) | (w >>> 27)) & 4294967295) + ha + W + Pa + y[z]) & 4294967295;
      W = J;
      J = F;
      F = ((B << 30) | (B >>> 2)) & 4294967295;
      B = w;
      w = ha;
    }
    g[0] = (g[0] + w) & 4294967295;
    g[1] = (g[1] + B) & 4294967295;
    g[2] = (g[2] + F) & 4294967295;
    g[3] = (g[3] + J) & 4294967295;
    g[4] = (g[4] + W) & 4294967295;
  }
  function e(w, y) {
    if (typeof w === "string") {
      w = unescape(encodeURIComponent(w));
      for (var z = [], B = 0, F = w.length; B < F; ++B) z.push(w.charCodeAt(B));
      w = z;
    }
    y || (y = w.length);
    z = 0;
    if (q == 0) for (; z + 64 < y; ) (c(w.slice(z, z + 64)), (z += 64), (r += 64));
    for (; z < y; )
      if (((h[q++] = w[z++]), r++, q == 64))
        for (q = 0, c(h); z + 64 < y; ) (c(w.slice(z, z + 64)), (z += 64), (r += 64));
  }
  function f() {
    var w = [],
      y = r * 8;
    q < 56 ? e(l, 56 - q) : e(l, 64 - (q - 56));
    for (var z = 63; z >= 56; z--) ((h[z] = y & 255), (y >>>= 8));
    c(h);
    for (z = y = 0; z < 5; z++) for (var B = 24; B >= 0; B -= 8) w[y++] = (g[z] >> B) & 255;
    return w;
  }
  for (var g = [], h = [], k = [], l = [128], p = 1; p < 64; ++p) l[p] = 0;
  var q, r;
  a();
  return {
    reset: a,
    update: e,
    digest: f,
    me: function () {
      for (var w = f(), y = "", z = 0; z < w.length; z++)
        y +=
          "0123456789ABCDEF".charAt(Math.floor(w[z] / 16)) + "0123456789ABCDEF".charAt(w[z] % 16);
      return y;
    },
  };
}
function ys(a, c, e) {
  var f = String(I.location.href);
  return f && a && c ? [c, zs(Vi(f), a, e || null)].join(" ") : null;
}
function zs(a, c, e) {
  var f = [],
    g = [];
  if ((Array.isArray(e) ? 2 : 1) == 1)
    return (
      (g = [c, a]),
      Jb(f, function (l) {
        g.push(l);
      }),
      As(g.join(" "))
    );
  var h = [],
    k = [];
  Jb(e, function (l) {
    k.push(l.key);
    h.push(l.value);
  });
  e = Math.floor(new Date().getTime() / 1e3);
  g = h.length == 0 ? [e, c, a] : [h.join(":"), e, c, a];
  Jb(f, function (l) {
    g.push(l);
  });
  a = As(g.join(" "));
  a = [e, a];
  k.length == 0 || a.push(k.join(""));
  return a.join("_");
}
function As(a) {
  var c = xs();
  c.update(a);
  return c.me().toLowerCase();
}
function Bs() {
  this.j = document || { cookie: "" };
}
A = Bs.prototype;
A.set = function (a, c, e) {
  var f = !1;
  if (typeof e === "object") {
    var g = e.sameSite;
    f = e.secure || !1;
    var h = e.domain || void 0;
    var k = e.path || void 0;
    var l = e.Ne;
  }
  if (/[;=\s]/.test(a)) throw Error("fb`" + a);
  if (/[;\r\n]/.test(c)) throw Error("gb`" + c);
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
A.get = function (a, c) {
  for (var e = a + "=", f = (this.j.cookie || "").split(";"), g = 0, h; g < f.length; g++) {
    h = eb(f[g]);
    if (h.lastIndexOf(e, 0) == 0) return h.slice(e.length);
    if (h == a) return "";
  }
  return c;
};
A.remove = function (a, c, e) {
  var f = this.get(a) !== void 0;
  this.set(a, "", { Ne: 0, path: c, domain: e });
  return f;
};
A.Nb = function () {
  return Cs(this).values;
};
A.clear = function () {
  for (var a = Cs(this).keys, c = a.length - 1; c >= 0; c--) this.remove(a[c]);
};
function Cs(a) {
  a = (a.j.cookie || "").split(";");
  for (var c = [], e = [], f, g, h = 0; h < a.length; h++)
    ((g = eb(a[h])),
      (f = g.indexOf("=")),
      f == -1 ? (c.push(""), e.push(g)) : (c.push(g.substring(0, f)), e.push(g.substring(f + 1))));
  return { keys: c, values: e };
}
function Ds(a, c, e, f) {
  (a = I[a]) || typeof document === "undefined" || (a = new Bs().get(c));
  return a ? ys(a, e, f) : null;
}
function Es(a) {
  var c = Vi(I == null ? void 0 : I.location.href),
    e = [],
    f;
  (f = I.__SAPISID || I.__APISID || I.__3PSAPISID || I.__1PSAPISID || I.__OVERRIDE_SID)
    ? (f = !0)
    : (typeof document !== "undefined" &&
        ((f = new Bs()),
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
      ? I.__SAPISID
      : I.__APISID),
    f ||
      typeof document === "undefined" ||
      ((f = new Bs()), (f = f.get(c ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID"))),
    (f = f ? ys(f, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && e.push(f),
    c &&
      ((c = Ds("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && e.push(c),
      (a = Ds("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && e.push(a)));
  return e.length == 0 ? null : e.join(" ");
}
function Fs(a) {
  if (!a) return null;
  try {
    var c = parseInt(a, 10);
    return isNaN(c) ? null : c;
  } catch (e) {
    return null;
  }
}
function Gs(a) {
  return (a = Nl(a, "gxids"))
    ? a
        .split(",")
        .map(function (c) {
          return Fs(c);
        })
        .filter(function (c) {
          return c != null && c > 0;
        })
    : [];
}
function Hs(a, c) {
  this.v = a.slice();
  this.A = c;
  this.j = [];
  this.o = !1;
}
function Is(a) {
  if (a.o) throw Error("hb");
  a.o = !0;
  return new Promise(function (c) {
    for (var e = 0; e < a.A; e++) Js(a, c);
  }).then(function () {
    return Promise.allSettled(a.j).then(function () {
      return Promise.all(a.j);
    });
  });
}
function Js(a, c) {
  if (a.v.length == 0) c();
  else {
    var e = a.v.shift(),
      f = Promise.resolve().then(function () {
        return e();
      });
    a.j.push(f);
    var g = function () {
      Js(a, c);
    };
    f.then(g, g);
  }
}
function Ks(a, c, e) {
  for (var f in a) c.call(e, a[f], f, a);
}
function Ls(a, c) {
  var e = {},
    f;
  for (f in a) e[f] = c.call(void 0, a[f], f, a);
  return e;
}
function Ms(a) {
  var c = [],
    e = 0,
    f;
  for (f in a) c[e++] = a[f];
  return c;
}
function Ns(a) {
  var c = [],
    e = 0,
    f;
  for (f in a) c[e++] = f;
  return c;
}
function Os(a, c) {
  return a !== null && c in a;
}
function Ps(a) {
  for (var c in a) return !1;
  return !0;
}
function Qs(a) {
  var c = {},
    e;
  for (e in a) c[e] = a[e];
  return c;
}
var Rs =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " ",
  );
function Ss(a, c) {
  for (var e, f, g = 1; g < arguments.length; g++) {
    f = arguments[g];
    for (e in f) a[e] = f[e];
    for (var h = 0; h < Rs.length; h++)
      ((e = Rs[h]), Object.prototype.hasOwnProperty.call(f, e) && (a[e] = f[e]));
  }
}
function Ts(a) {
  var c = arguments.length;
  if (c == 1 && Array.isArray(arguments[0])) return Ts.apply(null, arguments[0]);
  for (var e = {}, f = 0; f < c; f++) e[arguments[f]] = !0;
  return e;
}
function Us() {
  try {
    return I.localStorage.getItem("docs-oiouid") || null;
  } catch (a) {
    return null;
  }
}
function Vs(a) {
  var c = Us();
  return tm(a, "docs-offline-lsuid") == c;
}
function Ws(a) {
  this.o = this.D = this.A = "";
  this.C = null;
  this.I = this.v = "";
  this.B = !1;
  var c;
  a instanceof Ws
    ? ((this.B = a.B),
      Xs(this, a.A),
      (this.D = a.D),
      (this.o = a.o),
      Ys(this, a.C),
      Zs(this, a.v),
      $s(this, a.j.clone()),
      at(this, a.I))
    : a && (c = Al(String(a)))
      ? ((this.B = !1),
        Xs(this, c[1] || "", !0),
        (this.D = bt(c[2] || "")),
        (this.o = bt(c[3] || "", !0)),
        Ys(this, c[4]),
        Zs(this, c[5] || "", !0),
        $s(this, c[6] || "", !0),
        at(this, c[7] || "", !0))
      : ((this.B = !1), (this.j = new ct(null, this.B)));
}
Ws.prototype.toString = function () {
  var a = [],
    c = this.A;
  c && a.push(et(c, ft, !0), ":");
  var e = this.o;
  if (e || c == "file")
    (a.push("//"),
      (c = this.D) && a.push(et(c, ft, !0), "@"),
      a.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (e = this.C),
      e != null && a.push(":", String(e)));
  if ((e = this.v))
    (this.o && e.charAt(0) != "/" && a.push("/"), a.push(et(e, e.charAt(0) == "/" ? gt : ht, !0)));
  (e = this.j.toString()) && a.push("?", e);
  (e = this.I) && a.push("#", et(e, it));
  return a.join("");
};
Ws.prototype.resolve = function (a) {
  var c = this.clone(),
    e = !!a.A;
  e ? Xs(c, a.A) : (e = !!a.D);
  e ? (c.D = a.D) : (e = !!a.o);
  e ? (c.o = a.o) : (e = a.C != null);
  var f = a.v;
  if (e) Ys(c, a.C);
  else if ((e = !!a.v)) {
    if (f.charAt(0) != "/")
      if (this.o && !this.v) f = "/" + f;
      else {
        var g = c.v.lastIndexOf("/");
        g != -1 && (f = c.v.slice(0, g + 1) + f);
      }
    g = f;
    if (g == ".." || g == ".") f = "";
    else if (g.indexOf("./") != -1 || g.indexOf("/.") != -1) {
      f = cb(g, "/");
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
  e ? Zs(c, f) : (e = a.j.toString() !== "");
  e ? $s(c, a.j.clone()) : (e = !!a.I);
  e && at(c, a.I);
  return c;
};
Ws.prototype.clone = function () {
  return new Ws(this);
};
function Xs(a, c, e) {
  a.A = e ? bt(c, !0) : c;
  a.A && (a.A = a.A.replace(/:$/, ""));
}
function Ys(a, c) {
  if (c) {
    c = Number(c);
    if (isNaN(c) || c < 0) throw Error("jb`" + c);
    a.C = c;
  } else a.C = null;
}
function Zs(a, c, e) {
  a.v = e ? bt(c, !0) : c;
  return a;
}
function $s(a, c, e) {
  c instanceof ct ? ((a.j = c), jt(a.j, a.B)) : (e || (c = et(c, kt)), (a.j = new ct(c, a.B)));
  return a;
}
function at(a, c, e) {
  a.I = e ? bt(c) : c;
  return a;
}
function lt(a) {
  return a instanceof Ws ? a.clone() : new Ws(a);
}
function bt(a, c) {
  return a ? (c ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
}
function et(a, c, e) {
  return typeof a === "string"
    ? ((a = encodeURI(a).replace(c, mt)), e && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a)
    : null;
}
function mt(a) {
  a = a.charCodeAt(0);
  return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
}
var ft = /[#\/\?@]/g,
  ht = /[#\?:]/g,
  gt = /[#\?]/g,
  kt = /[#\?@]/g,
  it = /#/g;
function ct(a, c) {
  this.o = this.j = null;
  this.v = a || null;
  this.A = !!c;
}
function nt(a) {
  a.j ||
    ((a.j = new Map()),
    (a.o = 0),
    a.v &&
      Dl(a.v, function (c, e) {
        a.add(decodeURIComponent(c.replace(/\+/g, " ")), e);
      }));
}
A = ct.prototype;
A.add = function (a, c) {
  nt(this);
  this.v = null;
  a = ot(this, a);
  var e = this.j.get(a);
  e || this.j.set(a, (e = []));
  e.push(c);
  this.o = this.o + 1;
  return this;
};
A.remove = function (a) {
  nt(this);
  a = ot(this, a);
  return this.j.has(a)
    ? ((this.v = null), (this.o = this.o - this.j.get(a).length), this.j.delete(a))
    : !1;
};
A.clear = function () {
  this.j = this.v = null;
  this.o = 0;
};
function pt(a, c) {
  nt(a);
  c = ot(a, c);
  return a.j.has(c);
}
A.forEach = function (a, c) {
  nt(this);
  this.j.forEach(function (e, f) {
    e.forEach(function (g) {
      a.call(c, g, f, this);
    }, this);
  }, this);
};
A.Nb = function (a) {
  nt(this);
  var c = [];
  if (typeof a === "string") pt(this, a) && (c = c.concat(this.j.get(ot(this, a))));
  else {
    a = Array.from(this.j.values());
    for (var e = 0; e < a.length; e++) c = c.concat(a[e]);
  }
  return c;
};
A.set = function (a, c) {
  nt(this);
  this.v = null;
  a = ot(this, a);
  pt(this, a) && (this.o = this.o - this.j.get(a).length);
  this.j.set(a, [c]);
  this.o = this.o + 1;
  return this;
};
A.get = function (a, c) {
  if (!a) return c;
  a = this.Nb(a);
  return a.length > 0 ? String(a[0]) : c;
};
A.toString = function () {
  if (this.v) return this.v;
  if (!this.j) return "";
  for (var a = [], c = Array.from(this.j.keys()), e = 0; e < c.length; e++) {
    var f = c[e],
      g = encodeURIComponent(String(f));
    f = this.Nb(f);
    for (var h = 0; h < f.length; h++) {
      var k = g;
      f[h] !== "" && (k += "=" + encodeURIComponent(String(f[h])));
      a.push(k);
    }
  }
  return (this.v = a.join("&"));
};
A.clone = function () {
  var a = new ct();
  a.v = this.v;
  this.j && ((a.j = new Map(this.j)), (a.o = this.o));
  return a;
};
function ot(a, c) {
  c = String(c);
  a.A && (c = c.toLowerCase());
  return c;
}
function jt(a, c) {
  c &&
    !a.A &&
    (nt(a),
    (a.v = null),
    a.j.forEach(function (e, f) {
      var g = f.toLowerCase();
      if (f != g && (this.remove(f), this.remove(g), e.length > 0)) {
        this.v = null;
        f = this.j;
        var h = f.set;
        g = ot(this, g);
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
function qt() {
  var a = new Ws(I.location.href);
  return (
    a.j.get("Debug") == "true" ||
    a.j.get("debug") == "true" ||
    a.j.get("debug") == "pretty" ||
    a.j.get("jsmode") == "DU"
  );
}
function rt(a, c) {
  var e = a.indexOf("#");
  e = e < 0 ? null : a.slice(e + 1);
  a = Pl(Cl(a), c);
  return Cl(a) + (e ? "#" + e : "");
}
var st = ["/preview", "/htmlview"];
function tt() {
  var a = I.window;
  a.onbeforeunload = u();
  a.location.reload();
}
function ut() {
  this.j = function () {
    tt();
  };
}
ut.prototype.notify = function () {
  window.confirm(
    "This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.",
  ) && this.j();
};
function vt(a, c, e, f) {
  f =
    f === void 0
      ? function () {
          return ik();
        }
      : f;
  return ck(
    jk(
      I.navigator.locks.request(a, { signal: e.signal }, function () {
        return c();
      }),
    ),
    function (g) {
      if (g.name === "AbortError") return f ? f() : ik();
    },
  );
}
function wt(a, c) {
  this.type = a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.v = !1;
}
wt.prototype.stopPropagation = function () {
  this.v = !0;
};
wt.prototype.preventDefault = function () {
  this.defaultPrevented = !0;
};
var xt = (function () {
  if (!I.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
    c = Object.defineProperty({}, "passive", {
      get: function () {
        a = !0;
      },
    });
  try {
    var e = u();
    I.addEventListener("test", e, c);
    I.removeEventListener("test", e, c);
  } catch (f) {}
  return a;
})();
function yt(a, c) {
  wt.call(this, a ? a.type : "");
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
Za(yt, wt);
yt.prototype.init = function (a, c) {
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
  a.defaultPrevented && yt.xa.preventDefault.call(this);
};
yt.prototype.stopPropagation = function () {
  yt.xa.stopPropagation.call(this);
  this.j.stopPropagation ? this.j.stopPropagation() : (this.j.cancelBubble = !0);
};
yt.prototype.preventDefault = function () {
  yt.xa.preventDefault.call(this);
  var a = this.j;
  a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
};
var zt = "closure_listenable_" + ((Math.random() * 1e6) | 0);
function At(a) {
  return !(!a || !a[zt]);
}
var Bt = 0;
function Ct(a, c, e, f, g) {
  this.listener = a;
  this.proxy = null;
  this.src = c;
  this.type = e;
  this.capture = !!f;
  this.handler = g;
  this.key = ++Bt;
  this.Eb = this.Ya = !1;
}
function Dt(a) {
  a.Eb = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.handler = null;
}
function Et(a) {
  this.src = a;
  this.j = {};
  this.o = 0;
}
Et.prototype.add = function (a, c, e, f, g) {
  var h = a.toString();
  a = this.j[h];
  a || ((a = this.j[h] = []), this.o++);
  var k = Ft(a, c, f, g);
  k > -1
    ? ((c = a[k]), e || (c.Ya = !1))
    : ((c = new Ct(c, this.src, h, !!f, g)), (c.Ya = e), a.push(c));
  return c;
};
Et.prototype.remove = function (a, c, e, f) {
  a = a.toString();
  if (!(a in this.j)) return !1;
  var g = this.j[a];
  c = Ft(g, c, e, f);
  return c > -1
    ? (Dt(g[c]),
      Array.prototype.splice.call(g, c, 1),
      g.length == 0 && (delete this.j[a], this.o--),
      !0)
    : !1;
};
function Gt(a, c) {
  var e = c.type;
  e in a.j && Mb(a.j[e], c) && (Dt(c), a.j[e].length == 0 && (delete a.j[e], a.o--));
}
function Ht(a, c, e, f, g) {
  a = a.j[c.toString()];
  c = -1;
  a && (c = Ft(a, e, f, g));
  return c > -1 ? a[c] : null;
}
function Ft(a, c, e, f) {
  for (var g = 0; g < a.length; ++g) {
    var h = a[g];
    if (!h.Eb && h.listener == c && h.capture == !!e && h.handler == f) return g;
  }
  return -1;
}
var It = "closure_lm_" + ((Math.random() * 1e6) | 0),
  Jt = {},
  Kt = 0;
function Lt(a, c, e, f, g) {
  if (f && f.once) return Mt(a, c, e, f, g);
  if (Array.isArray(c)) {
    for (var h = 0; h < c.length; h++) Lt(a, c[h], e, f, g);
    return null;
  }
  e = Nt(e);
  return At(a) ? a.A.add(String(c), e, !1, Oa(f) ? !!f.capture : !!f, g) : Ot(a, c, e, !1, f, g);
}
function Ot(a, c, e, f, g, h) {
  if (!c) throw Error("lb");
  var k = Oa(g) ? !!g.capture : !!g,
    l = Pt(a);
  l || (a[It] = l = new Et(a));
  e = l.add(c, e, f, k, h);
  if (e.proxy) return e;
  f = Qt();
  e.proxy = f;
  f.src = a;
  f.listener = e;
  if (a.addEventListener)
    (xt || (g = k), g === void 0 && (g = !1), a.addEventListener(c.toString(), f, g));
  else if (a.attachEvent) a.attachEvent(Rt(c.toString()), f);
  else if (a.addListener && a.removeListener) a.addListener(f);
  else throw Error("mb");
  Kt++;
  return e;
}
function Qt() {
  function a(e) {
    return c.call(a.src, a.listener, e);
  }
  var c = St;
  return a;
}
function Mt(a, c, e, f, g) {
  if (Array.isArray(c)) {
    for (var h = 0; h < c.length; h++) Mt(a, c[h], e, f, g);
    return null;
  }
  e = Nt(e);
  return At(a) ? a.A.add(String(c), e, !0, Oa(f) ? !!f.capture : !!f, g) : Ot(a, c, e, !0, f, g);
}
function Tt(a, c, e, f, g) {
  if (Array.isArray(c)) for (var h = 0; h < c.length; h++) Tt(a, c[h], e, f, g);
  else
    ((f = Oa(f) ? !!f.capture : !!f),
      (e = Nt(e)),
      At(a)
        ? a.A.remove(String(c), e, f, g)
        : a && (a = Pt(a)) && (c = Ht(a, c, e, f, g)) && Ut(c));
}
function Ut(a) {
  if (typeof a !== "number" && a && !a.Eb) {
    var c = a.src;
    if (At(c)) Gt(c.A, a);
    else {
      var e = a.type,
        f = a.proxy;
      c.removeEventListener
        ? c.removeEventListener(e, f, a.capture)
        : c.detachEvent
          ? c.detachEvent(Rt(e), f)
          : c.addListener && c.removeListener && c.removeListener(f);
      Kt--;
      (e = Pt(c)) ? (Gt(e, a), e.o == 0 && ((e.src = null), (c[It] = null))) : Dt(a);
    }
  }
}
function Rt(a) {
  return a in Jt ? Jt[a] : (Jt[a] = "on" + a);
}
function St(a, c) {
  if (a.Eb) a = !0;
  else {
    c = new yt(c, this);
    var e = a.listener,
      f = a.handler || a.src;
    a.Ya && Ut(a);
    a = e.call(f, c);
  }
  return a;
}
function Pt(a) {
  a = a[It];
  return a instanceof Et ? a : null;
}
var Vt = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
function Nt(a) {
  if (typeof a === "function") return a;
  a[Vt] ||
    (a[Vt] = function (c) {
      return a.handleEvent(c);
    });
  return a[Vt];
}
dj(function (a) {
  St = a(St);
});
function Wt(a, c) {
  wt.call(this, a);
  this.error = c;
}
D(Wt, wt);
var Xt = /\/d\/([^\/]+)/,
  Yt = /\/r\/([^\/]+)/;
function Zt(a) {
  a = Al(a)[5] || null;
  return Xt.test(a);
}
function $t(a, c) {
  if (Zt(a)) {
    Zt(a);
    a = Al(a);
    var e = a[5];
    e = e.replace(c, "");
    c = yl(a[1], a[2], a[3], a[4], e, a[6], a[7]);
  } else c = a;
  return c;
}
function au() {
  U.call(this);
  this.A = new Et(this);
  this.ha = this;
  this.T = null;
}
Za(au, U);
au.prototype[zt] = !0;
au.prototype.addEventListener = function (a, c, e, f) {
  Lt(this, a, c, e, f);
};
au.prototype.removeEventListener = function (a, c, e, f) {
  Tt(this, a, c, e, f);
};
au.prototype.dispatchEvent = function (a) {
  var c = this.T;
  if (c) {
    var e = [];
    for (var f = 1; c; c = c.T) (e.push(c), ++f);
  }
  c = this.ha;
  f = a.type || a;
  if (typeof a === "string") a = new wt(a, c);
  else if (a instanceof wt) a.target = a.target || c;
  else {
    var g = a;
    a = new wt(f, c);
    Ss(a, g);
  }
  g = !0;
  var h;
  if (e)
    for (h = e.length - 1; !a.v && h >= 0; h--) {
      var k = (a.currentTarget = e[h]);
      g = bu(k, f, !0, a) && g;
    }
  a.v || ((k = a.currentTarget = c), (g = bu(k, f, !0, a) && g), a.v || (g = bu(k, f, !1, a) && g));
  if (e)
    for (h = 0; !a.v && h < e.length; h++)
      ((k = a.currentTarget = e[h]), (g = bu(k, f, !1, a) && g));
  return g;
};
au.prototype.P = function () {
  au.xa.P.call(this);
  if (this.A) {
    var a = this.A,
      c = 0,
      e;
    for (e in a.j) {
      for (var f = a.j[e], g = 0; g < f.length; g++) (++c, Dt(f[g]));
      delete a.j[e];
      a.o--;
    }
  }
  this.T = null;
};
function bu(a, c, e, f) {
  c = a.A.j[String(c)];
  if (!c) return !0;
  c = c.concat();
  for (var g = !0, h = 0; h < c.length; ++h) {
    var k = c[h];
    if (k && !k.Eb && k.capture == e) {
      var l = k.listener,
        p = k.handler || k.src;
      k.Ya && Gt(a.A, k);
      g = l.call(p, f) !== !1 && g;
    }
  }
  return g && !f.defaultPrevented;
}
function cu(a, c) {
  au.call(this);
  this.o = a || 1;
  this.j = c || I;
  this.v = Va(this.af, this);
  this.B = Date.now();
}
Za(cu, au);
A = cu.prototype;
A.enabled = !1;
A.Da = null;
A.setInterval = function (a) {
  this.o = a;
  this.Da && this.enabled ? (this.stop(), this.start()) : this.Da && this.stop();
};
A.af = function () {
  if (this.enabled) {
    var a = Date.now() - this.B;
    a > 0 && a < this.o * 0.8
      ? (this.Da = this.j.setTimeout(this.v, this.o - a))
      : (this.Da && (this.j.clearTimeout(this.Da), (this.Da = null)),
        this.dispatchEvent("tick"),
        this.enabled && (this.stop(), this.start()));
  }
};
A.start = function () {
  this.enabled = !0;
  this.Da || ((this.Da = this.j.setTimeout(this.v, this.o)), (this.B = Date.now()));
};
A.stop = function () {
  this.enabled = !1;
  this.Da && (this.j.clearTimeout(this.Da), (this.Da = null));
};
A.P = function () {
  cu.xa.P.call(this);
  this.stop();
  delete this.j;
};
function du(a, c, e) {
  if (typeof a === "function") e && (a = Va(a, e));
  else if (a && typeof a.handleEvent == "function") a = Va(a.handleEvent, a);
  else throw Error("nb");
  return Number(c) > 2147483647 ? -1 : I.setTimeout(a, c || 0);
}
function eu(a) {
  var c = null;
  return new vj(function (e, f) {
    c = du(function () {
      e(void 0);
    }, a);
    c == -1 && f(Error("ob"));
  }).Ta(function (e) {
    I.clearTimeout(c);
    throw e;
  });
}
function fu(a, c, e) {
  U.call(this);
  this.j = a;
  this.v = c || 0;
  this.o = e;
  this.A = Va(this.Zd, this);
}
Za(fu, U);
A = fu.prototype;
A.ub = 0;
A.P = function () {
  fu.xa.P.call(this);
  this.stop();
  delete this.j;
  delete this.o;
};
A.start = function (a) {
  this.stop();
  this.ub = du(this.A, a !== void 0 ? a : this.v);
};
A.stop = function () {
  this.isActive() && I.clearTimeout(this.ub);
  this.ub = 0;
};
A.isActive = function () {
  return this.ub != 0;
};
A.Zd = function () {
  this.ub = 0;
  this.j && this.j.call(this.o);
};
function gu(a, c, e, f) {
  U.call(this);
  this.v = f != null ? f : 0.15;
  this.B = a;
  this.A = c;
  this.D = e;
  this.j = new fu(this.We, void 0, this);
  this.C = Number.NEGATIVE_INFINITY;
  this.o = 0;
}
D(gu, U);
A = gu.prototype;
A.isActive = function () {
  return this.j.isActive();
};
A.start = function () {
  hu(this, !1, !1);
};
function hu(a, c, e) {
  c && (a.j.stop(), iu(a, a.A));
  a.isActive() ||
    ((c = Math.max(0, a.C + a.o - Date.now())),
    c == 0 && (e ? (c = iu(a, a.A)) : (a.o = 0)),
    a.j.start(c));
}
A.stop = function () {
  this.j.stop();
};
function iu(a, c) {
  c > 0 && a.v != 0 && (c = Math.floor(c * (1 - a.v + Math.random() * a.v * 2)));
  return (a.o = c);
}
A.We = function () {
  this.C = Date.now();
  iu(this, Math.min(Math.max(this.o * 2, this.A), this.D));
  this.B();
};
A.P = function () {
  this.j.dispose();
  delete this.j;
  delete this.B;
  U.prototype.P.call(this);
};
function ju(a) {
  U.call(this);
  this.o = a;
  this.j = {};
}
Za(ju, U);
var ku = [];
function lu(a, c, e, f) {
  Array.isArray(e) || (e && (ku[0] = e.toString()), (e = ku));
  for (var g = 0; g < e.length; g++) {
    var h = Lt(c, e[g], f || a.handleEvent, !1, a.o || a);
    if (!h) break;
    a.j[h.key] = h;
  }
  return a;
}
function mu(a, c, e) {
  nu(a, c, "complete", e);
}
function nu(a, c, e, f, g, h) {
  if (Array.isArray(e)) for (var k = 0; k < e.length; k++) nu(a, c, e[k], f, g, h);
  else (c = Mt(c, e, f || a.handleEvent, g, h || a.o || a)) && (a.j[c.key] = c);
}
function ou(a, c, e, f, g, h) {
  if (Array.isArray(e)) for (var k = 0; k < e.length; k++) ou(a, c, e[k], f, g, h);
  else
    ((f = f || a.handleEvent),
      (g = Oa(g) ? !!g.capture : !!g),
      (h = h || a.o || a),
      (f = Nt(f)),
      (g = !!g),
      (e = At(c)
        ? Ht(c.A, String(e), f, g, h)
        : c
          ? (c = Pt(c))
            ? Ht(c, e, f, g, h)
            : null
          : null),
      e && (Ut(e), delete a.j[e.key]));
}
function pu(a) {
  Ks(
    a.j,
    function (c, e) {
      this.j.hasOwnProperty(e) && Ut(c);
    },
    a,
  );
  a.j = {};
}
ju.prototype.P = function () {
  ju.xa.P.call(this);
  pu(this);
};
ju.prototype.handleEvent = function () {
  throw Error("pb");
};
function qu(a, c, e, f, g, h, k) {
  k = k === void 0 ? !0 : k;
  U.call(this);
  var l = this;
  this.o = a;
  this.o.H = 1e4;
  this.na = c;
  this.F = h;
  this.A = new gu(
    function () {
      return l.qb();
    },
    3e4,
    36e5,
  );
  this.H = 0;
  this.T = null;
  this.Z = new nr("errorsender", 1, 8, f);
  Ul(this, this.Z);
  this.X = !1;
  this.R = null;
  this.O = new Set();
  this.M = new ju(this);
  this.Fa = e || 10;
  this.va = g || null;
  lu(this.M, this.o, "complete", this.Ge);
  lu(this.M, this.o, "ready", this.qb);
  this.ma = null;
  this.S = new mo();
  Ul(this, this.S);
  this.F &&
    no(this.S, this.F.o, function () {
      l.F.j.j >= 3 && (l.ma = (Sr(), Fr));
      l.F.j.j >= 3 || l.ma !== (Sr(), Fr) || ru(l);
    });
  this.la = k;
  this.wa = {};
}
D(qu, U);
A = qu.prototype;
A.send = function (a, c, e, f) {
  V(this.na, "docs-dafjera") && (a = $t($t(a, Yt), Xt));
  var g = ak(
    ak(
      this.nb(),
      function (h) {
        if (!(h >= this.Fa))
          return (
            this.la && (a = Il(a, "errorSender_enqueueTimeMs", Date.now().toString())),
            (h = {}),
            (h.u = a),
            (h.m = c),
            (h.c = e),
            (h.h = f),
            this.wb(h)
          );
      },
      this,
    ),
    this.qb,
    this,
  );
  dk(
    g,
    function () {
      this.O.delete(g);
    },
    this,
  );
  this.O.add(g);
};
function su(a) {
  return Ej(Array.from(a.O.values())).then(u());
}
A.qb = function () {
  var a = this.F && this.F.j.j >= 3,
    c = this.Aa() || this.o.isActive() || this.A.isActive() || this.X;
  return a || c ? ik() : tu(this);
};
function tu(a) {
  return a.Gb(function () {
    return ak(a.mb(), function (c) {
      return uu(a, c);
    });
  });
}
function uu(a, c) {
  if (a.A.isActive() || a.o.isActive() || a.X) return ik();
  if (!c) return (a.A.stop(), ik());
  if (c.u.length > 4e3) return a.Za();
  try {
    qr(a.Z);
    a.R = new Tj();
    var e = c.u;
    a.va != null && (e = Il(e, "reportingSessionId", a.va));
    a.H > 0 && (e = Il(e, "retryCount", a.H));
    a.T != null && (e = Il(e, "previousErrorSendStatus", a.T));
    a.la &&
      ((e = Il(e, "errorSender_sendTimeMs", Date.now().toString())),
      (e = Il(e, "errorSenderType", a.Lb())),
      c.errorSender_frontIndex && (e = Il(e, "errorSender_frontIndex", c.errorSender_frontIndex)),
      c.errorSender_nextIndex && (e = Il(e, "errorSender_nextIndex", c.errorSender_nextIndex)),
      c.errorSender_queueSize && (e = Il(e, "errorSender_queueSize", c.errorSender_queueSize)));
    a.wa = c;
    var f = c.m,
      g = c.c,
      h = c.h;
    return ak(
      ak(a.Za(), function () {
        a.o.send(e, f, g, h);
      }),
      function () {
        return a.R;
      },
    );
  } catch (k) {
    if (Zk(k) instanceof fr) a.X = !0;
    else throw pl(k, { "docs-origin-class": "docs.debug.ErrorSender" });
  }
  return ik();
}
A.Ge = function () {
  var a = vu(this.o),
    c = this.R,
    e = wu(this.o) || (a >= 400 && a <= 500),
    f = this.H > 3;
  e || f
    ? ((this.H = 0),
      (this.T = null),
      this.A.stop(),
      ak(ik(), function () {
        c.qa();
      }))
    : (this.H++, (this.T = a === -1 ? this.o.B : a), ru(this), this.wb(this.wa), c.qa());
};
function ru(a) {
  a.H != 1 || a.A.isActive() ? a.A.start() : hu(a.A, !0, !0);
}
A.P = function () {
  Tl(this.M, this.A, this.o, this.S);
  this.O.clear();
  U.prototype.P.call(this);
};
A.Lb = x("BaseErrorSender");
function xu(a, c, e, f, g) {
  qu.call(this, a, c, e, void 0, f, g, void 0);
  this.j = [];
}
D(xu, qu);
A = xu.prototype;
A.Gb = function (a) {
  return a();
};
A.wb = function (a) {
  this.j.push(a);
  return ik();
};
A.Za = function () {
  this.j.shift();
  return ik();
};
A.mb = function () {
  return ik(this.j[0] !== void 0 ? this.j[0] : null);
};
A.nb = function () {
  return ik(this.j.length);
};
A.Lb = x("MemoryErrorSender");
A.P = function () {
  delete this.j;
  qu.prototype.P.call(this);
};
function yu() {
  var a = a === void 0 ? !1 : a;
  if (a === void 0 ? 0 : a) throw Error("qb`a");
}
yu.prototype.toString = x("a");
new yu();
function zu(a) {
  this.j = sg(Xi(), Ae(a));
  a = yf(this.j, 1);
  this.o = Math.floor(Math.random() * 100) < a;
}
zu.prototype.toString = function () {
  var a = "{bool=" + !(this.o ? !xf(this.j, 5) : !xf(this.j, 2)) + ', string="',
    c = this.o ? Df(this.j, 6) : Af(this.j, 3);
  a = a + (c != null ? String(c) : "") + '", int=';
  c = this.o ? Cf(this.j, 7) : yf(this.j, 4, -1);
  return a + (c != null ? Number(c) : -1) + "}";
};
function Au(a) {
  this.j = new Map();
  this.o = [];
  if ((a = a.get("docs-cei"))) {
    var c = a.i;
    c && Nb(this.o, c);
    a = a.cf || {};
    for (var e in a) this.j.set(e, new zu(a[e]));
  }
}
Au.prototype.get = function (a) {
  return this.j.get(a) || null;
};
function Bu() {
  for (var a in Array.prototype) return !1;
  return !0;
}
var Cu = [
    'window[("_callback_" + expid)] is not a function',
    "Cannot read properties of null (reading 'readyState')",
    "request failed on client side",
  ],
  Du = [/(undefined|constructor).*YT|YT.*(undefined|constructor)/];
function Eu(a) {
  this.j = a;
}
function Fu(a) {
  var c = a.j;
  if (c == null) return null;
  if (typeof c === "string") return c;
  throw new TypeError("sb`string`K1cgmc`" + a.j + "`" + typeof a.j);
}
Eu.prototype.toString = function () {
  var a = Fu(this);
  if (a === null) throw Error("rb`K1cgmc");
  return a;
};
function Gu() {
  var a = I;
  a = a === void 0 ? window : a;
  var c = new Eu(Mi("K1cgmc", a));
  a = Hu;
  var e = new Hu();
  c = Fu(c);
  return c === null ? e : ng(a, "[" + c.substring(4));
}
function Iu(a) {
  this.G = M(a);
}
D(Iu, R);
Iu.prototype.Ca = function (a) {
  return Gf(this, 7, a);
};
function Ju(a) {
  this.G = M(a);
}
D(Ju, R);
function Ku(a) {
  return of(a, Iu, hf(a, Lu, 4));
}
var Lu = [4, 5];
function Mu(a) {
  this.G = M(a);
}
D(Mu, R);
function Nu(a) {
  this.G = M(a);
}
D(Nu, R);
function Hu(a) {
  this.G = M(a);
}
D(Hu, R);
function Ou(a) {
  return of(a, Ju, 1);
}
function Pu() {
  this.j = pg(Gu());
}
Pu.prototype.lb = function () {
  var a = new Map(),
    c,
    e = (c = this.j) == null ? void 0 : Ku(Ou(c));
  if (e == null ? 0 : wf(e, 2) != null) {
    var f;
    (c = (f = Bf(e, 2)) == null ? void 0 : f.toString()) &&
      a.set("canaryanalysisservertestgroup", c);
    if (e == null) var g = void 0;
    else if ((e = pf(e, Ri, 3)) == null) g = void 0;
    else {
      f = Number;
      g = g === void 0 ? "0" : g;
      var h;
      c = (h = Zd(Se(e, 1, void 0, void 0, $d))) != null ? h : g;
      g = f(c);
      h = yf(e, 2);
      g = new Date(g * 1e3 + h / 1e6).valueOf().toString();
    }
    g && a.set("serverstarttimemillis", g);
  }
  var k, l;
  (g = (k = this.j) == null ? void 0 : (l = pf(k, Ju, 1)) == null ? void 0 : Bf(l, 6)) &&
    a.set("clientApp", String(g));
  return a;
};
function Qu(a, c) {
  this.width = a;
  this.height = c;
}
A = Qu.prototype;
A.clone = function () {
  return new Qu(this.width, this.height);
};
A.aspectRatio = function () {
  return this.width / this.height;
};
A.ceil = function () {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
A.floor = function () {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
A.round = function () {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Ru() {
  this.j = I.document || document;
}
function Su() {
  function a() {}
  this.j = a.call.bind(a.toString);
}
Su.prototype.lb = function () {
  var a = new Map();
  Tu() && a.set("apps_telemetry.screen_tampered", "true");
  a: {
    var c = E(Array.prototype),
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
  Uu() || a.set("apps_telemetry.canvas_creation_broken", "true");
  !Vu() && I.navigator && I.navigator.webdriver && a.set("apps_telemetry.webdriver", "true");
  g = !1;
  c = E(Wu);
  e = c.next();
  var h;
  try {
    for (; !e.done; e = c.next()) {
      var k = e.value,
        l = Xu(k.key);
      l === 0
        ? (a.set("apps_telemetry.automation_property_present." + k.oa, "true"), (g = !0))
        : l === 2 && a.set("apps_telemetry.automation_property_check_failed." + k.oa, "true");
    }
  } finally {
    e && !e.done && (h = c.return) && h.call(c);
  }
  g && a.set("apps_telemetry.automation_detected", "true");
  h = !1;
  k = E(Yu);
  l = k.next();
  var p;
  try {
    for (; !l.done; l = k.next()) {
      var q = l.value,
        r = q.oa,
        w = Zu(this, q.name, q.Oc);
      if (!w.fb) {
        var y = w.reason;
        a.set("apps_telemetry.native_function_tampering." + r + ".reason", y);
        y === "non_function_type" &&
          a.set("apps_telemetry.native_function_tampering." + r + ".type", w.type);
        h = !0;
      }
    }
  } finally {
    l && !l.done && (p = k.return) && p.call(k);
  }
  h && a.set("apps_telemetry.native_function_tampering_detected", "true");
  return a;
};
function Tu() {
  if (Vu()) return !1;
  var a = I.screen,
    c = !(a instanceof Screen);
  if (Xb || Sb) return c;
  try {
    var e = u();
    a.addEventListener("change", e);
    a.removeEventListener("change", e);
  } catch (f) {
    c = !0;
  }
  return c;
}
function Uu() {
  function a(c) {
    try {
      var e = new Qu(1, 500);
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
  return a(!1) && (Vu() || a(!0));
}
function Vu() {
  return (
    "WorkerGlobalScope" in I &&
    typeof I.WorkerGlobalScope === "function" &&
    self instanceof I.WorkerGlobalScope
  );
}
function Xu(a) {
  if (Vu() || !I) return 1;
  try {
    if (a in I || (I.document && a in I.document)) return 0;
  } catch (c) {
    return 2;
  }
  return 1;
}
function Zu(a, c, e) {
  try {
    var f = e();
  } catch (h) {
    return { fb: !1, reason: "not_reachable" };
  }
  e = $u(f);
  if (e !== "function") return { fb: !1, reason: "non_function_type", type: e };
  try {
    var g = a.j(f);
  } catch (h) {
    return { fb: !1, reason: "to_string_failed" };
  }
  a = av.exec(g);
  return a
    ? (a = a[1])
      ? a !== c
        ? { fb: !1, reason: "likely_wrong_native_function" }
        : { fb: !0 }
      : { fb: !1, reason: "likely_bound_function" }
    : { fb: !1, reason: "likely_non_native_source" };
}
function $u(a) {
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
var Wu = [
    { key: "Cypress", oa: "cypress" },
    { key: "$cdc_asdjflasutopfhvcZLmcfl_", oa: "selenium" },
    { key: "$wdc_", oa: "chrome_driver" },
    { key: "domAutomationController", oa: "chromium_automation" },
    { key: "callPhantom", oa: "phantomjs" },
    { key: "windmill", oa: "windmill" },
    { key: "____LocationIntercept", oa: "awesomium" },
    { key: "awesomium", oa: "awesomium" },
    { key: "ubot", oa: "ubot" },
    { key: "cefsharp_CreatePromise", oa: "cefsharp" },
    { key: "__nightmare", oa: "nightmare" },
  ],
  Yu = [
    {
      oa: "Object.getOwnPropertyDescriptor",
      name: "getOwnPropertyDescriptor",
      Oc: function () {
        return Object.getOwnPropertyDescriptor;
      },
    },
    {
      oa: "global.addEventListener",
      name: "addEventListener",
      Oc: function () {
        return I.addEventListener;
      },
    },
    {
      oa: "global.fetch",
      name: "fetch",
      Oc: function () {
        return I.fetch;
      },
    },
  ],
  av = /^function\s*(?:\s([a-zA-Z_$][\w$]+))?\(\) \{\s+\[native code\]\s+\}$/;
var bv = [],
  cv = [],
  dv = [
    RegExp("^_0x[a-f0-9]{6} is not defined$"),
    RegExp("[Zz]otero"),
    RegExp('^Not found$|^Unknown Error of type "string": Not found$'),
  ],
  ev =
    "egfdjlfmgnehecnclamagfafdccgfndp mndnfokpggljbaajbnioimlmbfngpief mlkejohendkgipaomdopolhpbihbhfnf kgonammgkackdilhodbgbmodpepjocdp klbcgckkldhdhonijdbnhhaiedfkllef pmehocpgjmkenlokgjfkaichfjdhpeol cjlaeehoipngghikfjogbdkpbdgebppb ghbmnnjooekpmoecnnnilnnbdlolhkhi lmjegmlicamnimmfhcmpkclmigmmcbeh gmbmikajjgmnabiglmofipeabaddhgne lpcaedmchfhocbbapmcbpinfpgnhiddi gbkeegbaiigmenfmjfclcdgdpimamgkj adokjfanaflbkibffcbhihgihpgijcei iklnnbgdcppplombffihcijanngoeifm".split(
      " ",
    ),
  fv = [
    RegExp("chrome-extension://([^/]+)", "g"),
    RegExp("moz-extension://([^/]+)", "g"),
    RegExp("ms-browser-extension://([^/]+)", "g"),
    RegExp("webkit-masked-url://([^/]+)", "g"),
    RegExp("safari-web-extension://([^/]+)", "g"),
  ],
  gv = [
    RegExp("^Permission denied$"),
    RegExp("index out of range: \\d+ \\+ \\d+ > \\d+"),
    RegExp("getReadMode(Config|Render|Extract)"),
  ],
  hv = [
    RegExp("at file:///|@file:///|phantomjs|node:electron|py-scrap|eval code|Program Files"),
    RegExp("_0x[a-f0-9]+.*anonymous"),
  ],
  iv = [
    RegExp("Script https://meet\\.google\\.com/.*meetsw.*load failed"),
    RegExp("A bad HTTP response code \\(\\d+\\) was received when fetching the script"),
  ],
  jv = [
    RegExp("Error loading.*Consecutive load failures"),
    RegExp("Failed to load module.*Consecutive load failures"),
  ];
function kv(a, c) {
  this.Fc = a;
  this.Jb = c;
}
function lv(a, c) {
  return (c = a.j(c)) ? { Fc: a.Fc, Jb: a.Jb, md: c.toUpperCase() } : null;
}
function mv() {
  kv.call(this, 1, 1);
}
D(mv, kv);
mv.prototype.j = function (a) {
  a: {
    a = nv(a);
    var c = !1,
      e = E(fv),
      f = e.next(),
      g;
    try {
      for (; !f.done; f = e.next()) {
        var h = a.matchAll(f.value),
          k = E(h),
          l = k.next(),
          p;
        try {
          for (; !l.done; l = k.next()) {
            var q = l.value[1];
            if (q) {
              if (ev.includes(q)) {
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
function ov(a, c, e) {
  e = e === void 0 ? pv : e;
  kv.call(this, a, c);
  this.o = e;
}
D(ov, kv);
ov.prototype.j = function (a) {
  var c =
      typeof a.o.get("apps_telemetry.cross_origin_scripts") === "string"
        ? a.o.get("apps_telemetry.cross_origin_scripts")
        : "",
    e = a.o.get("apps_telemetry.native_function_tampering_detected") === "true",
    f = nv(a),
    g = f.includes("blob:"),
    h = E(this.o),
    k = h.next(),
    l;
  try {
    for (; !k.done; k = h.next()) {
      var p = k.value,
        q = p.errorMessage,
        r = p.Sb,
        w = r === void 0 ? [] : r,
        y = p.Ra,
        z = y === void 0 ? [] : y,
        B = p.Qb,
        F = B === void 0 ? !1 : B,
        J = p.Od,
        W = p.Me,
        ha = W === void 0 ? !1 : W;
      if ((J === void 0 ? 0 : J) ? a.message === q : f.includes(q)) {
        var Pa = w.some(function (dd) {
            return c.includes(dd);
          }),
          Ia = z.some(function (dd) {
            return a.j.includes(dd);
          });
        w = F && g;
        ha = ha && e;
        if (Pa || Ia || w || ha) return "warning";
      }
    }
  } finally {
    k && !k.done && (l = h.return) && l.call(h);
  }
  return null;
};
var pv = [
  {
    errorMessage: "Cannot read properties of undefined (reading 'addListener')",
    Qb: !0,
    Sb: ["infird.com"],
  },
  {
    errorMessage: "browser_polyfill_default(...).runtime.getManifest is not a function",
    Qb: !0,
    Sb: ["infird.com"],
  },
  { errorMessage: 'fileName":', Sb: ["walkme.com"] },
  { errorMessage: "] is not a function", Qb: !0 },
  { errorMessage: "(reading 'toLowerCase')", Qb: !0, Ra: ["__aiNetCmd__"] },
  { errorMessage: "Cannot read properties of undefined", Ra: ["recaptcha"] },
  { errorMessage: "a is not defined", Od: !0, Ra: ["<anonymous>"] },
  { errorMessage: "i is not defined", Od: !0, Ra: ["<anonymous>"] },
  { errorMessage: "Failed to fetch", Ra: ["__DLD__", "frontend.min.js"] },
  { errorMessage: "Maximum call stack size exceeded", Me: !0 },
  { errorMessage: "Unexpected end of JSON input", Ra: ["facebook.net"] },
  { errorMessage: "Unexpected token ':'", Sb: ["bpdocajohhnfgbohbmfjeienbcihjlcg"] },
];
function qv(a, c, e, f, g) {
  g = g === void 0 ? new Map() : g;
  this.message = a;
  this.j = c;
  this.cause = e;
  this.v = f;
  this.o = g;
}
function rv(a) {
  return (a = a.cause) ? a.message + "\n" + a.j + "\n" + rv(a) : "";
}
function nv(a) {
  return a.message + "\n" + a.j + "\n" + rv(a);
}
function sv() {
  this.v = this.j = this.message = "";
  this.o = new Map();
}
function tv(a, c) {
  a.message = c;
  return a;
}
function uv(a) {
  return new qv(a.message, a.j, a.cause, a.v, a.o);
}
function vv(a) {
  return a instanceof Error || (a && a.message !== void 0) ? a.message : wv(a);
}
function xv(a) {
  return a instanceof Error || (a && a.stack !== void 0) ? a.stack || "" : "";
}
function yv(a, c) {
  var e = a && a.cause !== void 0;
  if (c >= 3 || !e) return null;
  e = new sv();
  a = a.cause;
  if (zv(a)) {
    if ((tv(e, vv(a)), (e.j = xv(a)), (c = yv(a, c + 1)))) e.cause = c;
  } else tv(e, wv(a));
  return uv(e);
}
function zv(a) {
  return a instanceof Error || (!!a && a.message !== void 0 && a.stack !== void 0);
}
function wv(a) {
  try {
    return zv(a)
      ? a.message + "\n" + a.stack
      : a && a instanceof Object
        ? JSON.stringify(a)
        : String(a);
  } catch (c) {
    return String(a);
  }
}
function Av(a, c, e) {
  e = e === void 0 ? new Map() : e;
  var f = tv(new sv(), vv(a));
  f.j = xv(a);
  f.o = e;
  if ((a = yv(a, 0))) f.cause = a;
  c && (f.v = c);
  return uv(f);
}
function Bv(a, c, e, f) {
  kv.call(this, e, f);
  this.o = a;
  this.v = c;
}
D(Bv, kv);
Bv.prototype.j = function (a) {
  var c = rv(a);
  return Cv(a.message, this.o) || Cv(a.j, this.v) || Cv(c, this.o) || Cv(c, this.v)
    ? "warning"
    : null;
};
function Cv(a, c) {
  c = E(c);
  var e = c.next(),
    f;
  try {
    for (; !e.done; e = c.next()) if (e.value.test(a)) return !0;
  } finally {
    e && !e.done && (f = c.return) && f.call(c);
  }
  return !1;
}
function Dv(a, c, e, f, g) {
  kv.call(this, e, f);
  this.o = a;
  this.Ra = c;
  this.matchType = g;
}
D(Dv, kv);
Dv.prototype.j = function (a) {
  switch (this.matchType) {
    case 0:
      a: {
        var c = a.message,
          e = E(this.o);
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
        f = E(this.o);
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
      return ((g = nv(a)), Ev(g, this.o) || Ev(g, this.Ra) ? "warning" : null);
    default:
      return null;
  }
};
function Ev(a, c) {
  c = E(c);
  var e = c.next(),
    f;
  try {
    for (; !e.done; e = c.next()) if (a.includes(e.value)) return !0;
  } finally {
    e && !e.done && (f = c.return) && f.call(c);
  }
  return !1;
}
function Fv(a, c, e) {
  return new Dv(a, c, e, 0, 2);
}
function Gv(a, c, e) {
  kv.call(this, a, c);
  this.o = e();
}
D(Gv, kv);
Gv.prototype.j = function () {
  return this.o ? null : "unsupported_severe";
};
var Hv = [
    new mv(),
    Fv(
      "Trusted Type;TrustedHTML;TrustedScript;cannot communicate with background;zaloJSV2;kaspersky-labs;@user-script;Object Not Found Matching Id;contextChanged;Not implemented on this platform;Extension context invalidated;neurosurgeonundergo;realTimeClData;Failed to execute 'querySelectorAll' on 'Document';Promise.all(...).then(...).catch(...).finally is not a function;Error executing Chrome API, chrome.tabs;Identifier 'originalPrompt' has already been declared;User rejected the request;Could not inject ethereum provider because it's not your default extension;Cannot redefine property: googletag;Can't find variable: HTMLDialogElement;Identifier 'listenerName' has already been declared;Cannot read properties of undefined (reading 'info');Permission denied to access property \"type\";Error: Promise timed out;Request timeout ToolbarStatus;Can't find variable: nc;imtgo;ton is not a function;__renderMessageNode is not defined;Cannot redefine property: ethereum;unknown action:;Receiving end does not exist;get-frame-manager-configuration;Key not found;'isAWS';Identifier 'contentScriptListenerRegistered' has already been declared;window.ethereum.selectedAddress;extDomain is not defined;No Listener: tabs:outgoing.message.ready;This script should only be loaded in a browser extension;Identifier 'initCoreHelpers' has already been declared;undefined is not an object (evaluating 't.tab.customFillData');No tab with id:;The browser is shutting down.;User mapping loading timeout;Internal JSON-RPC error;TOKEN_EXPIRED;A listener indicated an asynchronous response by returning true;You must authenticate your request with an API key;Could not inject tron provider".split(
        ";",
      ),
      "puppeteer;kaspersky-labs;@user-script;jsQuilting;linkbolic;neurosurgeonundergo;tlscdn;https://cdnjs.cloudflare.com/ajax/libs/mathjax/;secured-pixel.com;Can't find variable: nc;imtgo;_simulateEvent;goguardian".split(
        ";",
      ),
      1,
    ),
    new Bv(dv, cv, 1, 0),
    Fv(
      "status is 0, navigator.onLine =;Network sync is disabled. Aborting a network request of int type;The service is currently unavailable.;Internal error encountered.;data does not exist in AF cache;There was an error during the transport or processing of this request;Failed to load gapi;Rpc failed due to xhr error. error code: 6, error:  [0];An interceptor has requested that the request be retried;8,\"generic\";A network error occurred;NetworkError: Connection failure due to HTTP 401;NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope';Load failed".split(
        ";",
      ),
      bv,
      2,
    ),
    new Bv([], cv, 2, 0),
    new Bv(gv, hv, 3, 0),
    Fv(
      "Kg is not defined;uncaught error;The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.;Illegal invocation;Script error;zCommon;can't access dead object;Java exception was raised during method invocation;pauseVideo is not a function;ResizeObserver loop;wallet must has at least one account;xbrowser is not defined;jQuery is not defined;Cannot read properties of null (reading 'requestAnimationFrame');Class extends value undefined is not a constructor or null;GM3TooltipService: No tooltip with id;Mole was disposed;getInitialTopicListResponse is missing for stream rendering;getPeopleById call preempted;The operation is insecure;class heritage;The play() request was interrupted;args.site.enabledFeatures is undefined;frappe is not defined;Cannot set properties of undefined (setting 'hidden');Identifier 'checkOngoingMeeting' has already been declared;AutofillCallbackHandler;invalid wire type;zp_token;isReCreate;HTMLOUT is not defined;Shopify root is null;CanvasMaskingStrategy_Redact;_chromeNamespace;feature named `performanceMetrics`;feature named `webCompat`;Cannot redefine property: webdriver;reCAPTCHA Timeout;feature named `pageObserver` was not found;feature named `hover` was not found;Request timeout appSettingsDistributor.getValue;TimeoutError: operation timed out;Sink type mismatch violation blocked by CSP;__firefox__;: Java object is gone;Cannot read properties of undefined (reading 'domInteractive');: t is not defined;sendMessage(). Tab not found.;Can't find variable: __gCrWeb;WKWebView API client did not respond to this postMessage;The provider is disconnected from all chains;The user aborted a request.;Task was cancelled.;lettersVoicesDistributor".split(
        ";",
      ),
      ["postUserData", "inline.cdn.mcas.ms", "evaluating 'n.standardSelectors'"],
      3,
    ),
    new Bv(iv, cv, 5, 0),
    Fv(
      "Service worker registration is disabled by MDA;An unknown error occurred when fetching the script;Operation has been aborted;Timed out while trying to start the Service Worker;The Service Worker system has shutdown;The user denied permission to use Service Worker;The script resource is behind a redirect, which is disallowed;The document is in an invalid state;ServiceWorker script evaluation failed;ServiceWorker cannot be started;Failed to access storage;Worker disallowed;encountered an error during installation".split(
        ";",
      ),
      bv,
      5,
    ),
    new Bv(jv, jv, 4, 0),
    Fv(
      [
        "Timeout reached for loading script https://www.gstatic.com/_/apps-fileview/_/js/",
        "Error while loading script https://www.gstatic.com/_/apps-fileview/_/js/",
      ],
      bv,
      4,
    ),
  ],
  Iv = new Set(["SEVERE", "SEVERE_AFTER_INITIAL", "UNKNOWN", "FATAL", ""]);
function Jv(a) {
  this.o = a;
  this.j = !1;
}
function Kv(a, c, e, f) {
  var g = [Error("tb").message];
  e = e === void 0 ? !1 : e;
  f = f === void 0 ? x(!0) : f;
  var h = [];
  c.length > 0 && h.push(Lv(c));
  h.push.apply(h, pa(Hv));
  a = E(a);
  c = a.next();
  var k;
  try {
    for (; !c.done; c = a.next()) h.push(c.value);
  } finally {
    c && !c.done && (k = a.return) && k.call(a);
  }
  g.length > 0 && h.push(new Dv(g, [], 3, 5, 0));
  h.push(new ov(3, 0));
  e && h.push(new Gv(8, 0, f));
  return new Jv(h);
}
function Mv(a, c) {
  var e = "missing",
    f = new Map(),
    g = !0;
  try {
    e = c.v;
    a.j && f.set("apps_telemetry.after_downgraded_severe", "true");
    var h = E(a.o),
      k = h.next(),
      l;
    try {
      for (; !k.done; k = h.next()) {
        var p = k.value;
        try {
          var q = lv(p, c);
          if (q) {
            var r = e,
              w = Nv(a, e) ? q.md : e;
            Ov(q, r, w).forEach(function (z, B) {
              f.set(B, z);
            });
            e = w;
            break;
          }
        } catch (z) {
          g = !1;
          var y = Av(z, e);
          f.set("apps_telemetry.handling_error", nv(y) + "\n\nclassifier: " + p.constructor.name);
        }
      }
    } finally {
      k && !k.done && (l = h.return) && l.call(h);
    }
  } catch (z) {
    ((g = !1), (a = Av(z, e)), f.set("apps_telemetry.handling_error", nv(a)));
  }
  f.set("apps_telemetry.processed", String(g));
  return { md: e, Lc: f };
}
function Ov(a, c, e) {
  var f = new Map();
  f.set("apps_telemetry.classification", a.Fc.toString());
  f.set("apps_telemetry.classification_code", a.Jb ? a.Jb.toString() : "");
  f.set("apps_telemetry.incoming_severity", c);
  f.set("apps_telemetry.outgoing_severity", e);
  return f;
}
function Nv(a, c) {
  return Iv.has(c.toUpperCase()) ? (a.j = !0) : !1;
}
function Lv(a) {
  var c = [];
  a = E(a);
  var e = a.next(),
    f;
  try {
    for (; !e.done; e = a.next()) c.push(new RegExp(e.value));
  } finally {
    e && !e.done && (f = a.return) && f.call(a);
  }
  return new Bv(c, c, 7, 0);
}
function Pv() {}
Pv.prototype.lb = function () {
  if (
    "WorkerGlobalScope" in I &&
    typeof I.WorkerGlobalScope === "function" &&
    self instanceof I.WorkerGlobalScope
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
Pv.prototype.o = function (a) {
  var c = new RegExp(/^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)*google\.com(?:$|[\/#?])/);
  return (a = a.getAttribute("src")) ? !(a.startsWith("/") || c.test(a)) : !1;
};
Pv.prototype.j = function (a) {
  return a.innerHTML ? a.outerHTML.slice(0, a.outerHTML.indexOf(a.innerHTML)) : a.outerHTML;
};
function Qv() {}
Qv.prototype.lb = function () {
  try {
    var a = performance
      .getEntriesByType("resource")
      .slice(-5)
      .map(function (c) {
        return Rl(c.name);
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
var Rv = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
function Sv() {
  var a = [],
    c;
  a[8] = a[13] = a[18] = a[23] = "-";
  a[14] = "4";
  for (c = 0; c < 36; c++)
    if (!a[c]) {
      var e = 0 | (Math.random() * 16);
      a[c] = Rv[c == 19 ? (e & 3) | 8 : e];
    }
  return a.join("");
}
function Tv(a, c) {
  var e = c === void 0 ? {} : c;
  c = e.Ic;
  c = c === void 0 ? [] : c;
  var f = e.Se;
  f = f === void 0 ? [] : f;
  var g = e.Jd;
  g = g === void 0 ? [] : g;
  var h = e.ff;
  var k = e.sessionId;
  k = k === void 0 ? Sv() : k;
  e = e.Ze;
  this.v = Kv(c, f, h === void 0 ? !1 : h, e === void 0 ? x(!0) : e);
  this.j = [new Su(), new Pv(), new Qv()];
  this.j.push.apply(this.j, pa(g));
  this.sessionId = k;
  var l;
  this.A = (l = I.performance) == null ? void 0 : l.timeOrigin;
  this.o = a;
  this.o.Ca(k);
}
function Uv(a, c, e, f) {
  f["apps_telemetry.session_id"] = a.sessionId;
  f["apps_telemetry.session_start_time_ms"] = String(a.A);
  "apps_telemetry.processed" in f && (f["apps_telemetry.multi_processed"] = "true");
  var g = a.lb();
  (a = Vv(a, c, e, g)) && Wv(g, a.Lc);
  g.forEach(function (k, l) {
    f[l] = k;
  });
  var h;
  return (h = a == null ? void 0 : a.md) != null ? h : e;
}
function Vv(a, c, e, f) {
  var g = null,
    h = null;
  try {
    ((g = Av(c, e, f)), (h = Mv(a.v, g)));
  } catch (k) {
    return (Xv(f, k, "apps_telemetry.processed"), null);
  }
  a.o.Xd(g, h);
  return h;
}
Tv.prototype.lb = function () {
  var a = new Map();
  try {
    var c = E(this.j),
      e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next())
        e.value.lb().forEach(function (g, h) {
          a.set(h, g);
        });
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  } catch (g) {
    Xv(a, g, "apps_telemetry.annotated");
  }
  return a;
};
function Wv(a, c) {
  c.forEach(function (e, f) {
    a.set(f, e);
  });
}
function Xv(a, c, e) {
  a.set(e, "false");
  a.set("apps_telemetry.handling_error", wv(c));
}
var Yv = new Set([1, 6, 7, 2, 0]);
function Zv() {
  var a = Ku(Ou(pg(Gu()))),
    c = Bf(a, 1),
    e = Bf(a, 5);
  return [c, e].every(function (f) {
    return Yv.has(f);
  });
}
function $v(a) {
  try {
    return Qi(Oi(), a);
  } catch (c) {
    return !1;
  }
}
function aw(a, c) {
  var e = (a = a === void 0 ? {} : a);
  a = e.Jd;
  a = a === void 0 ? [] : a;
  var f = e.Ic;
  f = f === void 0 ? [] : f;
  var g = e.Ye;
  g = g === void 0 ? [] : g;
  var h = e.Te;
  h = h === void 0 ? [] : h;
  var k = e.Uf;
  k = k === void 0 ? [] : k;
  var l = e.Vf;
  l = l === void 0 ? [] : l;
  e = e.sessionId;
  e = e === void 0 ? void 0 : e;
  try {
    var p = Qi(Oi(), Si);
    var q = Ye(p, 1, ae, void 0 === cd ? 2 : 4);
  } catch (z) {
    q = [];
  }
  p = $v(Ui);
  var r = [],
    w = r.concat,
    y = [];
  g.length > 0 && y.push(Fv(g, [], 6));
  h.length > 0 && y.push(new Bv(h, [], 6, 0));
  k.length > 0 && y.push(new Dv(k, [], 6, 5, 0));
  l.length > 0 && y.push(new Dv(l, [], 6, 5, 1));
  return new Tv(c, {
    Ic: w.call(r, pa(y), pa(f)),
    Se: q,
    Jd: [new Pu()].concat(pa(a)),
    ff: p,
    sessionId: e,
    Ze: Zv,
  });
}
function bw() {}
bw.prototype.Xd = u();
bw.prototype.Ca = u();
function cw(a) {
  a = a === void 0 ? {} : a;
  return aw(a, new bw());
}
function dw(a) {
  return a
    ? a.split("\n").filter(function (c) {
        return c.trim() && !c.includes("signal is aborted without reason");
      }).length
    : 0;
}
function ew() {
  kv.call(this, 3, 0);
}
D(ew, kv);
ew.prototype.j = function (a) {
  a: {
    for (; a; ) {
      var c = a.message.includes("signal is aborted without reason"),
        e = dw(a.j) === 2;
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
  var fw,
    gw,
    hw = (gw = (fw = window) == null ? void 0 : fw.top) != null ? gw : I;
  hw.U3bHHf != null || (hw.U3bHHf = 0);
  hw.U3bHHf++;
} catch (a) {
  (I.U3bHHf != null || (I.U3bHHf = 0), I.U3bHHf++);
}
var iw;
if (I == null ? 0 : (iw = I.Symbol) == null ? 0 : iw.for) {
  var jw = Symbol.for("google.goem");
  I[jw] || (I[jw] = new WeakMap());
}
function kw(a, c) {
  var e = a.__wiz;
  e || (e = a.__wiz = {});
  return e[c.toString()];
} /*

 Copyright 2024 Google, Inc
 SPDX-License-Identifier: MIT
*/
var lw = {};
var mw = {};
function nw(a) {
  var c = document.body,
    e = eb(c.getAttribute("jsaction") || "");
  var f = ["u0pjoe"];
  var g = E(f),
    h = g.next(),
    k;
  try {
    for (; !h.done; h = g.next()) {
      var l = h.value;
      var p = e;
      if (p) {
        var q = lw[p];
        if (q) var r = !!q[l.toString()];
        else {
          var w = mw[l.toString()];
          w ||
            ((w = new RegExp("(^\\s*" + l + "\\s*:|[\\s;]" + l + "\\s*:)")),
            (mw[l.toString()] = w));
          r = w.test(p);
        }
      } else r = !1;
      r || (e && !/;$/.test(e) && (e += ";"), (e += l + ":.CLIENT"), ow(c, e));
      var y = kw(c, l);
      y ? y.push(a) : (c.__wiz[l.toString()] = [a]);
    }
  } finally {
    h && !h.done && (k = g.return) && k.call(g);
  }
  return { et: f, Ib: a, el: c };
}
function ow(a, c) {
  a.setAttribute("jsaction", c);
  "__jsaction" in a && delete a.__jsaction;
}
function pw(a) {
  U.call(this);
  this.o = a;
}
Za(pw, U);
pw.prototype.j = function (a) {
  return qw(this, a);
};
function rw(a, c) {
  return (c ? "__wrapper_" : "__protected_") + Qa(a) + "__";
}
function qw(a, c) {
  var e = rw(a, !0);
  c[e] || ((c[e] = sw(a, c))[rw(a, !1)] = c);
  return c[e];
}
function sw(a, c) {
  function e() {
    if (a.Aa()) return c.apply(this, arguments);
    try {
      return c.apply(this, arguments);
    } catch (f) {
      tw(a, f);
    }
  }
  e[rw(a, !1)] = c;
  return e;
}
function tw(a, c) {
  if (
    !(
      (c &&
        typeof c === "object" &&
        typeof c.message === "string" &&
        c.message.indexOf("Error in protected function: ") == 0) ||
      (typeof c === "string" && c.indexOf("Error in protected function: ") == 0)
    )
  )
    throw (a.o(c), new uw(c));
}
function vw(a) {
  var c = c || I.window || I.globalThis;
  "onunhandledrejection" in c &&
    (c.onunhandledrejection = function (e) {
      tw(a, e && e.reason ? e.reason : Error("tb"));
    });
}
function ww(a, c) {
  var e = I.window || I.globalThis,
    f = e[c];
  if (!f) throw Error("ub`" + c);
  e[c] = function (g, h) {
    typeof g === "string" && (g = Wa(Xa, g));
    g && (arguments[0] = g = qw(a, g));
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
  e[c][rw(a, !1)] = f;
}
pw.prototype.P = function () {
  var a = I.window || I.globalThis;
  var c = a.setTimeout;
  c = c[rw(this, !1)] || c;
  a.setTimeout = c;
  c = a.setInterval;
  c = c[rw(this, !1)] || c;
  a.setInterval = c;
  pw.xa.P.call(this);
};
function uw(a) {
  $a.call(
    this,
    "Error in protected function: " + (a && a.message ? String(a.message) : String(a)),
    a,
  );
  (a = a && a.stack) && typeof a === "string" && (this.stack = a);
}
Za(uw, $a);
function xw() {}
var yw;
function zw() {}
Za(zw, xw);
zw.prototype.o = function () {
  return new XMLHttpRequest();
};
yw = new zw();
function Aw(a) {
  au.call(this);
  this.headers = new Map();
  this.R = a || null;
  this.o = !1;
  this.j = null;
  this.O = "";
  this.B = 0;
  this.v = this.M = this.F = this.K = !1;
  this.H = 0;
  this.C = null;
  this.D = "";
  this.J = !1;
}
Za(Aw, au);
var Bw = /^https?$/i,
  Cw = ["POST", "PUT"],
  Dw = [];
A = Aw.prototype;
A.ie = function () {
  this.dispose();
  Mb(Dw, this);
};
A.send = function (a, c, e, f) {
  if (this.j) throw Error("vb`" + this.O + "`" + a);
  if (typeof c === "string") var g = c;
  else if (c) {
    var h = c;
    g = h.method;
    e != null || (e = h.body);
    f != null || (f = h.headers);
  }
  g = g ? g.toUpperCase() : "GET";
  this.O = a;
  this.B = 0;
  this.K = !1;
  this.o = !0;
  this.j = this.R ? this.R.o(h) : yw.o();
  this.j.onreadystatechange = Yi(Va(this.Yd, this));
  try {
    ((this.M = !0), this.j.open(g, String(a), !0), (this.M = !1));
  } catch (z) {
    Ew(this);
    return;
  }
  a = e || "";
  c = new Map(this.headers);
  if (f)
    if (Object.getPrototypeOf(f) === Object.prototype) for (var k in f) c.set(k, f[k]);
    else if (typeof f.keys === "function" && typeof f.get === "function") {
      k = E(f.keys());
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
  l = I.FormData && a instanceof I.FormData;
  !Lb(Cw, g) || f || l || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  g = E(c);
  f = g.next();
  var q;
  try {
    for (; !f.done; f = g.next()) {
      var r = E(f.value),
        w = r.next().value,
        y = r.next().value;
      this.j.setRequestHeader(w, y);
    }
  } finally {
    f && !f.done && (q = g.return) && q.call(g);
  }
  this.D && (this.j.responseType = this.D);
  "withCredentials" in this.j &&
    this.j.withCredentials !== this.J &&
    (this.j.withCredentials = this.J);
  try {
    (this.C && (clearTimeout(this.C), (this.C = null)),
      this.H > 0 && (this.C = setTimeout(this.ae.bind(this), this.H)),
      (this.F = !0),
      this.j.send(a),
      (this.F = !1));
  } catch (z) {
    Ew(this);
  }
};
A.ae = function () {
  typeof Ha != "undefined" &&
    this.j &&
    ((this.B = 8), this.dispatchEvent("timeout"), this.abort(8));
};
function Ew(a) {
  a.o = !1;
  a.j && ((a.v = !0), a.j.abort(), (a.v = !1));
  a.B = 5;
  Fw(a);
  Gw(a);
}
function Fw(a) {
  a.K || ((a.K = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
A.abort = function (a) {
  this.j &&
    this.o &&
    ((this.o = !1),
    (this.v = !0),
    this.j.abort(),
    (this.v = !1),
    (this.B = a || 7),
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    Gw(this));
};
A.P = function () {
  this.j && (this.o && ((this.o = !1), (this.v = !0), this.j.abort(), (this.v = !1)), Gw(this, !0));
  Aw.xa.P.call(this);
};
A.Yd = function () {
  this.Aa() || (this.M || this.F || this.v ? Hw(this) : this.hd());
};
A.hd = function () {
  Hw(this);
};
function Hw(a) {
  if (a.o && typeof Ha != "undefined")
    if (a.F && (a.j ? a.j.readyState : 0) == 4) setTimeout(a.Yd.bind(a), 0);
    else if ((a.dispatchEvent("readystatechange"), a.sa())) {
      a.o = !1;
      try {
        wu(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : ((a.B = 6), Fw(a));
      } finally {
        Gw(a);
      }
    }
}
function Gw(a, c) {
  if (a.j) {
    a.C && (clearTimeout(a.C), (a.C = null));
    var e = a.j;
    a.j = null;
    c || a.dispatchEvent("ready");
    try {
      e.onreadystatechange = null;
    } catch (f) {}
  }
}
A.isActive = function () {
  return !!this.j;
};
A.sa = function () {
  return (this.j ? this.j.readyState : 0) == 4;
};
function wu(a) {
  var c = vu(a);
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
      ((a = Al(String(a.O))[1] || null),
        !a && I.self && I.self.location && (a = I.self.location.protocol.slice(0, -1)),
        (c = !Bw.test(a ? a.toLowerCase() : "")));
    e = c;
  }
  return e;
}
function vu(a) {
  try {
    return (a.j ? a.j.readyState : 0) > 2 ? a.j.status : -1;
  } catch (c) {
    return -1;
  }
}
function Iw(a) {
  try {
    if (!a.j) return null;
    if ("response" in a.j) return a.j.response;
    switch (a.D) {
      case "":
      case "text":
        return a.j.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in a.j) return a.j.mozResponseArrayBuffer;
    }
    return null;
  } catch (c) {
    return null;
  }
}
dj(function (a) {
  Aw.prototype.hd = a(Aw.prototype.hd);
});
function Jw(a, c, e) {
  au.call(this);
  this.B = c || null;
  this.v = {};
  this.C = Kw;
  this.F = a;
  if (!e) {
    this.j = null;
    this.j = new pw(Va(this.o, this));
    ww(this.j, "setTimeout");
    ww(this.j, "setInterval");
    a = this.j;
    c = I.window || I.globalThis;
    e = [
      "requestAnimationFrame",
      "mozRequestAnimationFrame",
      "webkitAnimationFrame",
      "msRequestAnimationFrame",
    ];
    for (var f = 0; f < e.length; f++) {
      var g = e[f];
      e[f] in c && ww(a, g);
    }
    a = this.j;
    cj = !0;
    c = Va(a.j, a);
    for (e = 0; e < aj.length; e++) aj[e](c);
    bj.push(a);
  }
}
Za(Jw, au);
function Lw(a, c) {
  wt.call(this, "c");
  this.error = a;
  this.Sa = c;
}
Za(Lw, wt);
function Mw(a, c) {
  return new Jw(a, c, void 0);
}
function Kw(a, c, e, f) {
  if (f instanceof Map) {
    var g = {};
    f = E(f);
    var h = f.next(),
      k;
    try {
      for (; !h.done; h = f.next()) {
        var l = E(h.value),
          p = l.next().value,
          q = l.next().value;
        g[p] = q;
      }
    } finally {
      h && !h.done && (k = f.return) && k.call(f);
    }
  } else g = f;
  k = new Aw();
  Dw.push(k);
  k.A.add("ready", k.ie, !0, void 0, void 0);
  k.send(a, c, e, g);
}
function Nw(a, c) {
  a.C = c;
}
Jw.prototype.o = function (a, c) {
  a = a.error || a;
  c = c ? Qs(c) : {};
  a instanceof Error && Ss(c, yc(a));
  var e = jl(a);
  if (this.B)
    try {
      this.B(e, c, a);
    } catch (q) {}
  var f = e.message.substring(0, 1900);
  if (!(a instanceof $a) || a.v) {
    var g = e.fileName,
      h = e.lineNumber;
    a = e.stack;
    try {
      var k = Il(this.F, "script", g, "error", f, "line", h);
      Ps(this.v) || (k = Jl(k, this.v));
      f = {};
      f.trace = a;
      if (c) for (var l in c) f["context." + l] = c[l];
      var p = Hl(f);
      this.C(k, "POST", p, this.D);
    } catch (q) {}
  }
  try {
    this.dispatchEvent(new Lw(e, c));
  } catch (q) {}
};
Jw.prototype.P = function () {
  Sl(this.j);
  Jw.xa.P.call(this);
};
function Ow(a) {
  a = a === void 0 ? new Pw() : a;
  au.call(this);
  var c = this;
  this.H = {};
  this.j = null;
  this.o = {};
  this.M = new ju(this);
  this.cb = a.D;
  this.R = a.H;
  this.wa = a.N;
  this.bb = a.C;
  this.Fa = a.J;
  var e = a.na;
  this.ma = (a.A || cw)({ Ye: Cu, Te: Du, Ic: [new ew()] });
  this.ab = a.K;
  this.D = new ut();
  var f = a.o ? a.o.create(this, void 0, a.j, void 0) : null,
    g = new Aw();
  Qw(this, e);
  this.C = f || new xu(g, e, void 0, a.j, void 0);
  Ul(this, this.C);
  this.v = tm(e, "docs-sup") + tm(e, "docs-jepp") + "/jserror";
  if ((f = tm(e, "jobset"))) this.v = Il(this.v, "jobset", f);
  if ((f = tm(e, "docs-ci"))) this.v = Il(this.v, "id", f);
  f = tm(e, "docs-pid");
  V(e, "docs-eaotx") && f && (this.v = Il(this.v, "ouid", f));
  this.X = sm(e, "docs-srmoe") || 0;
  this.Wa = V(e, "docs-oesf");
  this.Z = sm(e, "docs-srmour") || 0;
  this.Xa = V(e, "docs-oursf");
  f = a.B || (this.Z > 0 && Math.random() < this.Z);
  this.Va = V(e, "docs-wesf");
  Rw(this);
  Sj = function (l) {
    return Sw(c, l, "promise rejection");
  };
  g = sm(e, "docs-srmdue") || 0;
  if (g > 0 && Math.random() < g) {
    var h = V(e, "docs-duesf");
    Zj = function (l) {
      Sw(c, l, "deferred error", h, "isDeferredUnhandledErrback");
    };
  } else Zj = u();
  g = sm(e, "docs-srmxue") || 0;
  g = g > 0 && Math.random() < g;
  var k = V(e, "docs-xduesf");
  g &&
    Yk(function (l) {
      if (l) {
        var p = {};
        p = ((p.isXDeferredUnhandledErrback = "true"), p);
        k ? Tw(c, l, p) : c.info(l, p);
      }
    });
  f &&
    ((f = new pw(function (l) {
      l = Uw(l, "native promise rejection");
      var p = {};
      p = ((p.isUnhandledRejection = "true"), p);
      c.Xa ? Tw(c, l, p) : c.info(l, p);
    })),
    vw(f),
    Ul(this, f));
  this.K = null;
  typeof document !== "undefined" &&
    document.body &&
    (this.K = nw(function (l) {
      var p = {};
      p = ((p.isWizError = "true"), p);
      l = E(l.data.errors);
      var q = l.next(),
        r;
      try {
        for (; !q.done; q = l.next()) {
          var w = q.value.error;
          c.Va ? Tw(c, w, p) : c.info(w, p);
        }
      } finally {
        q && !q.done && (r = l.return) && r.call(l);
      }
    }));
  this.O = a.v;
  this.F = !1;
  this.J = !0;
  this.B = !1;
  this.U = tm(e, "docs-jern");
  this.va = a.F;
  this.la = a.I.concat(Object.values(Sm));
}
D(Ow, au);
function Rw(a) {
  var c = c === void 0 ? !1 : c;
  if (Vw) {
    if (Ww != null) throw Error("xb`" + Ww.stack);
    throw Error("yb");
  }
  Vw = !0;
  Ww = Error();
  a.j = Mw(a.v, function (g, h, k) {
    return Xw(a, g, h, k);
  });
  var e = {};
  a.wa && (e["X-No-Abort"] = "1");
  a.j.D = e;
  Nw(a.j, function (g, h, k, l) {
    a.J && a.C.send(g, h, k, l);
  });
  if (a.X > 0 && Math.random() < a.X) {
    e = {};
    var f = ((e.isWindowOnError = "true"), e);
    a.Wa
      ? il(function (g) {
          Tw(a, g.error instanceof Error ? g.error : Error(g.message), f);
        })
      : il(function (g) {
          a.log(g.error instanceof Error ? g.error : Error(g.message), f);
        });
  }
  lu(a.M, a.j, "c", function (g) {
    var h = c;
    h = h === void 0 ? !1 : h;
    g.Sa.severity = g.Sa["severity-unprefixed"] || g.Sa.severity;
    var k = g.Sa.severity;
    (k = k == "fatal" || k == "postmortem") &&
      !a.bb &&
      (a.cb && !h ? a.D.notify(g, g.Sa) : a.D.notify(void 0, g.Sa));
    a.dispatchEvent(new Wt(k ? "a" : "b", g.error, g.Sa));
  });
}
function Qw(a, c) {
  c = new Au(c);
  var e = c.j,
    f;
  for (f in e) {
    var g = e[f];
    g && (a.o["expflag-" + f] = g.toString());
  }
  a.o.experimentIds = c.o.join(",");
}
function Yw(a, c) {
  a.D = c;
}
function Zw(a, c, e) {
  a.H[c] = e;
}
function Tw(a, c, e, f) {
  a.B = f || !1;
  $w(c, "fatal");
  if (!a.j) {
    if (c instanceof kk) throw c.L;
    throw pl(c);
  }
  a.j.o(c, ax(a, c, e));
  if (a.Fa)
    throw (
      (e = ax(a, c, e)),
      (e.is_forceFatal = 1),
      (f = c instanceof kk ? c.L : c),
      Xw(a, f, e),
      (c = pl(f)),
      (a = ", context:" + JSON.stringify(ax(a, f, e))),
      (c.message += a),
      c
    );
}
function bx(a, c, e, f) {
  a.B = f || !1;
  $w(c, "warning");
  a.j && a.j.o(c, ax(a, c, e));
}
Ow.prototype.info = function (a, c, e) {
  this.B = e || !1;
  $w(a, "incident");
  this.j && this.j.o(a, ax(this, a, c));
};
Ow.prototype.log = function (a, c, e) {
  this.B = !!e;
  $w(a, "incident");
  this.j && this.j.o(a, ax(this, a, c));
};
function Uw(a, c) {
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
function Sw(a, c, e, f, g) {
  f = f === void 0 ? !0 : f;
  c = Uw(c, e);
  e = {};
  g && (e[g] = "true");
  f ? bb(c) : a.info(c, e);
}
function cx(a, c, e, f) {
  return function () {
    a: {
      var g = !!f,
        h = Da.apply(0, arguments);
      if (a.j) {
        try {
          var k = c.apply(e, h);
          break a;
        } catch (l) {
          if ((Tw(a, l), g)) throw pl(l);
        }
        k = void 0;
      } else k = c.apply(e, h);
    }
    return k;
  };
}
function dx(a, c) {
  a.j &&
    c.then(void 0, function (e) {
      Tw(a, e instanceof Error ? e : Error(e));
    });
  return c;
}
function ax(a, c, e) {
  c instanceof kk && (c = c.L);
  e = e ? Qs(e) : {};
  e.severity = yc(c).severity;
  (c = c && c.reportSeverity) && (e.reportSeverity = c);
  a.R && (e.errorGroupId = a.R);
  return e;
}
function fx(a, c) {
  if (
    a &&
    typeof a === "object" &&
    !a.message &&
    a.constructor &&
    a.constructor instanceof Function &&
    (a.constructor.name ? a.constructor.name : ll(a.constructor)) === "Object"
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
function Xw(a, c, e, f) {
  var g = a.F;
  try {
    a.S(c, e, f);
  } catch (k) {
    throw (
      g && !a.O && (a.J = !1),
      (a.F = !0),
      (e.provideLogDataError = k.message),
      e.severity || (e.severity = "fatal"),
      pl(k)
    );
  } finally {
    if (
      ((e["severity-unprefixed"] = e.severity || "fatal"),
      (e.severity = "" + e["severity-unprefixed"]),
      !a.va)
    )
      for (var h in e)
        typeof e[h] === "number" ||
          e[h] instanceof Number ||
          typeof e[h] === "boolean" ||
          e[h] instanceof Boolean ||
          a.la.includes(h) ||
          (h in e && delete e[h]);
  }
}
Ow.prototype.S = function (a, c, e) {
  fx(e || a, c);
  for (var f in this.H)
    try {
      c[f] = this.H[f](a);
    } catch (h) {}
  c.errorReportTimeMs || (c.errorReportTimeMs = Date.now().toString());
  Object.assign(c, this.o);
  e = c.severity || "fatal";
  (f = c.reportSeverity || (a && a.reportSeverity)) && (f = gx(f.toLowerCase())) && (e = f);
  this.ab || (e = Uv(this.ma, a, e, c));
  this.U && (c.reportName = this.U + "_" + e);
  c.isArrayPrototypeIntact = Bu().toString();
  if (!("WorkerGlobalScope" in I && self instanceof I.WorkerGlobalScope)) {
    try {
      var g = !!document.getElementById("docs-editor");
    } catch (h) {
      g = !1;
    }
    c.isEditorElementAttached = g.toString();
  }
  c.documentCharacterSet = document.characterSet;
  c.origin = String(I.origin);
  g = a.stack || "";
  if (g.trim().length == 0 || g == "Not available")
    ((c["stacklessError-reportingStack"] = ol(Ow.prototype.S)),
      [a.message].concat(pa(Object.keys(c)), pa(Object.values(c))).some(function (h) {
        return h && h.includes("<eye3");
      }) || (c.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>"));
  this.F && !this.O
    ? ((this.J = this.B),
      e == "fatal" ? (e = "postmortem") : e == "incident" && (e = "warningafterdeath"))
    : e == "fatal" && (this.F = !0);
  this.B = !1;
  c.severity = e;
};
Ow.prototype.P = function () {
  Vw = !1;
  if (this.K) {
    var a = this.K,
      c = E(a.et),
      e = c.next(),
      f;
    try {
      for (; !e.done; e = c.next()) {
        var g = e.value,
          h = kw(a.el, g);
        if (h && (Mb(h, a.Ib), !h.length)) {
          var k = a.el,
            l = eb(k.getAttribute("jsaction") || ""),
            p = g + ":.CLIENT";
          l = l.replace(p + ";", "");
          l = l.replace(p, "");
          ow(k, l);
        }
      }
    } finally {
      e && !e.done && (f = c.return) && f.call(c);
    }
  }
  Tl(this.M, this.j, this.C);
  au.prototype.P.call(this);
};
var Vw = !1,
  Ww = null;
function Pw() {
  this.H = this.na = void 0;
  this.C = this.J = this.D = !1;
  this.o = void 0;
  this.N = this.v = !1;
  this.F = !0;
  this.I = [];
  this.B = !1;
  this.j = void 0;
  this.K = !1;
  this.A = void 0;
}
function hx(a, c) {
  a.na = c;
  return a;
}
function ix(a) {
  a.A = jx;
  return a;
}
function kx(a) {
  var c = new Pw();
  c.D = !1;
  c.C = !0;
  c.o = a;
  return c;
}
function lx(a, c) {
  a.v = c;
  return a;
}
function mx(a, c) {
  a.B = c;
  return a;
}
function $w(a, c) {
  a instanceof kk && (a = a.L);
  xc(a, "severity", c);
}
function gx(a) {
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
function nx(a, c, e, f, g, h) {
  f = f === void 0 ? {} : f;
  g = g === void 0 ? !1 : g;
  h = h === void 0 ? 0 : h;
  e > Math.floor(Math.random() * 100) &&
    ((f.sampling_samplePercentage = String(e)),
    (f.sampling_sampledBy = "random"),
    h == 0 ? a.info(c, f, g) : h == 1 ? bx(a, c, f, g) : h == 2 && Tw(a, c, f, g));
}
function ox(a, c, e, f) {
  this.o = a;
  this.j = c;
  this.v = e;
  this.A = f;
}
function px(a) {
  var c = Fb() >= 75,
    e = Fb() >= 96;
  if (!c || e) return a.o;
  if (a.v) return (c = a.v.applicationCache) ? a.o - c + 104857600 : a.o;
  a: switch (tm(a.A, "jobset")) {
    case "scary":
    case "canary":
      c = 12884901888;
      break a;
    default:
      c = 6442450944;
  }
  return Math.max(a.o - c, 0);
}
function qx(a) {
  return Ka("navigator.storage.estimate")
    ? Aj(
        I.navigator.storage.estimate().then(function (c) {
          return new ox(c.usage, c.quota - c.usage, c.usageDetails || null, a);
        }),
      )
    : Bj();
}
function rx(a, c, e) {
  return Aj(qx(a))
    .then(function (f) {
      c.storageAvailable = f.j;
      c.storageUsage = px(f);
    })
    .catch(function (f) {
      e.info(Error("Eb`" + (f instanceof Error ? f.message : String(f))));
    });
}
function sx(a) {
  var c = a.target.error,
    e = c && c.name;
  c = (c && c.message) || a.target.webkitErrorMessage;
  a.target.docs_internalAbort && (c = "Internal abort: " + c);
  return e + " (" + c + ")";
}
function tx(a) {
  for (var c = [], e = 0; e < a.length; e++) c.push(a.item(e));
  return c.toString();
}
function ux(a, c) {
  if (vx(c))
    if ((c = I.localStorage))
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
function wx(a, c, e) {
  return vx(c)
    ? Promise.resolve(qx(e))
        .then(function (f) {
          a.storageAvailable = f.j;
          a.storageUsage = px(f);
        })
        .catch(x(null))
    : Promise.resolve();
}
function vx(a) {
  return (
    a &&
    (a.includes("Connection is closing.") ||
      a.includes("The database connection is closing.") ||
      a.includes("Connection is closing because of"))
  );
}
function xx(a, c, e, f, g, h) {
  Tj.call(this, g, h);
  this.N = a;
  this.F = [];
  this.K = !!c;
  this.U = !!e;
  this.S = !!f;
  for (c = this.O = 0; c < a.length; c++)
    bk(a[c], Va(this.M, this, c, !0), Va(this.M, this, c, !1));
  a.length != 0 || this.K || this.qa(this.F);
}
Za(xx, Tj);
xx.prototype.M = function (a, c, e) {
  this.O++;
  this.F[a] = [c, e];
  this.j ||
    (this.K && c
      ? this.qa([a, e])
      : this.U && !c
        ? this.tb(e)
        : this.O == this.N.length && this.qa(this.F));
  this.S && !c && (e = null);
  return e;
};
xx.prototype.tb = function (a) {
  xx.xa.tb.call(this, a);
  for (a = 0; a < this.N.length; a++) this.N[a].cancel();
};
function yx(a, c, e, f, g, h, k, l, p) {
  qu.call(this, f, g, k, void 0, l, p);
  this.J = c;
  this.B = c + "-f";
  this.v = c + "-n";
  this.D = e;
  this.K = a;
  this.j = null;
  this.U = h || I.indexedDB || I.webkitIndexedDB;
  this.C = null;
  zx(this);
}
D(yx, qu);
function zx(a) {
  var c = a.U.open("DocsErrors", 1);
  c.onsuccess = function (e) {
    return void Ax(a, e);
  };
  c.onupgradeneeded = function (e) {
    e.target.transaction.db.createObjectStore("Errors", { keyPath: "key" });
  };
  c.onerror = function (e) {
    Bx(a);
    bx(a.K, Error("Gb`" + sx(e)));
  };
  c.onblocked = function (e) {
    Bx(a);
    bx(a.K, Error("Fb`" + sx(e)));
  };
}
function Ax(a, c) {
  var e = c.target.result,
    f = Cx(e, "readwrite");
  ak(
    new xx([Dx(a.B, f), Dx(a.v, f)]),
    function (g) {
      g[0][1] == null || g[1][1] == null
        ? ((g = f.objectStore("Errors")),
          g.put({ key: this.B, value: "1" }),
          g.put({ key: this.v, value: "1" }),
          (f.oncomplete = Va(this.Kd, this, e)))
        : this.Kd(e);
    },
    a,
  );
}
A = yx.prototype;
A.Kd = function (a) {
  this.j = a;
  this.qb();
};
A.Gb = function (a) {
  if (!this.j) return this.D.Gb(a);
  if (!I.navigator.locks) return a();
  this.C || (this.C = new AbortController());
  return vt("idb-es-send-lock-" + this.J, a, this.C);
};
A.wb = function (a) {
  if (!this.j) return this.D.wb(a);
  var c = Cx(this.j, "readwrite"),
    e = new Tj();
  ak(
    Dx(this.v, c),
    function (f) {
      if (f) {
        var g = c.objectStore("Errors");
        g.put({ key: this.v, value: String(f + 1) });
        g.put({ key: this.J + "-e-" + f, value: JSON.stringify(a) });
        c.oncomplete = Va(e.qa, e);
      } else e.qa();
    },
    this,
  );
  return e;
};
A.Za = function () {
  if (!this.j) return this.D.Za();
  var a = Cx(this.j, "readwrite"),
    c = new Tj();
  ak(
    new xx([Dx(this.B, a), Dx(this.v, a)]),
    function (e) {
      var f = e[0][1];
      e = e[1][1];
      if (!f || e <= f) c.qa();
      else {
        var g = a.objectStore("Errors");
        g["delete"](this.J + "-e-" + f);
        f++;
        g.put({ key: this.B, value: String(f) });
        ak(
          Ex(this, a),
          function (h) {
            h == 0 && (g.put({ key: this.B, value: "1" }), g.put({ key: this.v, value: "1" }));
            a.oncomplete = Va(c.qa, c);
          },
          this,
        );
      }
    },
    this,
  );
  return c;
};
A.mb = function () {
  if (!this.j) return this.D.mb();
  var a = Cx(this.j, "readonly");
  return ak(
    new xx([Dx(this.B, a), Dx(this.v, a)]),
    function (c) {
      var e = c[0][1],
        f = c[1][1];
      if (!e) return null;
      var g = f - e;
      return g < 1
        ? null
        : ak(
            Fx(this.J + "-e-" + e, a),
            function (h) {
              return h && (h = JSON.parse(h))
                ? ((h.errorSender_frontIndex = e),
                  (h.errorSender_nextIndex = f),
                  (h.errorSender_queueSize = g),
                  h)
                : ak(this.Za(), this.mb, this);
            },
            this,
          );
    },
    this,
  );
};
A.nb = function () {
  if (!this.j) return this.D.nb();
  var a = Cx(this.j, "readonly");
  return Ex(this, a);
};
function Bx(a) {
  a.j && (a.j.close(), (a.j = null));
}
function Ex(a, c) {
  return ak(new xx([Dx(a.B, c), Dx(a.v, c)]), function (e) {
    return e[1][1] - e[0][1];
  });
}
function Dx(a, c) {
  return ak(Fx(a, c), function (e) {
    e = parseInt(e, 10);
    return e < 0 || isNaN(e) ? null : e;
  });
}
function Fx(a, c) {
  c = c.objectStore("Errors");
  var e = new Tj();
  c.get(a).onsuccess = function (f) {
    f.target.result ? e.qa(f.target.result.value) : e.qa(null);
  };
  return e;
}
function Cx(a, c) {
  var e = ["Errors"];
  try {
    return a.transaction(e, c);
  } catch (f) {
    throw (
      (c = tx(a.objectStoreNames)),
      pl(f, {
        databaseName: a.name,
        databaseObjectStores: c,
        databaseVersion: a.version.toString(),
        transactionObjectStores: e.toString(),
      })
    );
  }
}
A.Lb = x("IdbErrorSender");
A.P = function () {
  this.C && this.C.abort();
  Bx(this);
  qu.prototype.P.call(this);
};
function Gx(a) {
  try {
    var c = a.get("docs-lfuls"),
      e = I.localStorage;
    if (
      e &&
      (c || Wb || Xb) &&
      (e.setItem("test", "test"),
      e.getItem("test") == "test" && (e.removeItem("test"), e.getItem("test") == null))
    )
      return !0;
  } catch (f) {}
  return !1;
}
function Hx() {
  U.call(this);
  this.j = {};
}
D(Hx, U);
Hx.prototype.Ya = function (a, c, e) {
  var f = this;
  if (typeof a === "function") e && (a = Va(a, e));
  else if (a && typeof a.handleEvent == "function") a = Va(a.handleEvent, a);
  else throw Error("nb");
  var g = new Ix();
  c = du(function () {
    var h = a,
      k = g.V();
    k !== null && delete f.j[k];
    h();
  }, c);
  this.j[c] = !0;
  return (g.j = c);
};
Hx.prototype.clear = function (a) {
  a !== null && delete this.j[a];
  I.clearTimeout(a);
};
Hx.prototype.P = function () {
  for (var a in this.j) this.clear(Number(a));
  U.prototype.P.call(this);
};
function Ix() {
  this.j = null;
}
Ix.prototype.V = ba("j");
function Jx(a, c, e, f, g, h, k, l) {
  qu.call(this, a, e, f, g, h, k, l === void 0 ? !0 : l);
  var p = this;
  this.K = c || "default";
  this.J = c + "-v";
  this.D = c + "-f";
  this.v = c + "-n";
  this.j = I.localStorage;
  Gx(e);
  a = Kx(this, this.J);
  if (!a || a < 1)
    (this.j.setItem(this.J, "1"), this.j.setItem(this.D, "1"), this.j.setItem(this.v, "1"));
  this.U = !1;
  this.C = this.B = null;
  lu(
    lu(this.M, I.window, "beforeprint", function () {
      return Lx(p);
    }),
    I.window,
    "afterprint",
    function () {
      p.U = !1;
      p.B && (p.B.qa(), (p.B = null));
    },
  );
  this.qb();
  this.ha = new Hx();
  Ul(this, this.ha);
  this.ha.Ya(this.ke, 3e4, this);
}
D(Jx, qu);
function Lx(a) {
  a.U = !0;
  a.C && (a.C.abort(), (a.C = null));
  a.B = new Tj();
  ak(a.B, function () {
    return a.qb();
  });
}
A = Jx.prototype;
A.Gb = function (a) {
  var c = this;
  if (!I.navigator.locks) return a();
  if (this.U) return this.B;
  this.C || (this.C = new AbortController());
  return vt("lses-send-lock-" + (this.K + "-e-"), a, this.C, function () {
    return c.B || ik();
  });
};
A.wb = function (a) {
  var c = Kx(this, this.v);
  if (!c || Kx(this, this.J) != 1) return ik();
  try {
    (this.j.setItem(this.v, String(c + 1)), this.j.setItem(this.K + "-e-" + c, JSON.stringify(a)));
  } catch (e) {}
  return ik();
};
A.Za = function () {
  var a = Kx(this, this.D);
  if (!a || Kx(this, this.J) != 1) return ik();
  this.j.removeItem(this.K + "-e-" + a);
  a++;
  this.j.setItem(this.D, String(a));
  return ak(
    this.nb(),
    function (c) {
      c == 0 && (this.j.setItem(this.D, "1"), this.j.setItem(this.v, "1"));
    },
    this,
  );
};
A.mb = function () {
  var a = Kx(this, this.D);
  return a && Kx(this, this.J) == 1
    ? ak(
        this.nb(),
        function (c) {
          if (c < 1) return null;
          try {
            var e = this.j.getItem(this.K + "-e-" + a);
            if (e) {
              var f = JSON.parse(e);
              if (f)
                return (
                  (f.errorSender_frontIndex = a),
                  (f.errorSender_nextIndex = Kx(this, this.v)),
                  (f.errorSender_queueSize = c),
                  f
                );
            }
          } catch (g) {}
          return ak(this.Za(), this.mb, this);
        },
        this,
      )
    : ik(null);
};
A.nb = function () {
  return ik(Kx(this, this.v) - Kx(this, this.D));
};
function Kx(a, c) {
  return (a = a.j.getItem(c)) ? Mx(a) : null;
}
function Mx(a) {
  a = parseInt(a, 10);
  return a < 0 || isNaN(a) ? null : a;
}
A.ke = function () {
  if (Kx(this, this.v) && Kx(this, this.J) == 1)
    for (var a = this.K + "-e-", c = 0, e = this.j.length; c < e; ++c) {
      var f = this.j.key(c);
      if (f && cb(f, a)) {
        var g = Mx(f.substring(a.length)),
          h = Kx(this, this.v);
        h && g && g >= h && this.j.removeItem(f);
      }
    }
};
A.Lb = x("LocalStorageErrorSender");
A.P = function () {
  qu.prototype.P.call(this);
};
function Nx(a, c) {
  this.o = a;
  this.j = c;
}
Nx.prototype.create = function (a, c, e, f) {
  return Gx(this.j) ? new Jx(new Aw(), this.o, this.j, c, void 0, e, f) : null;
};
function Ox(a, c) {
  this.o = a;
  this.j = c;
}
Ox.prototype.create = function (a, c, e, f) {
  var g = new Nx(this.o, this.j).create(a, c, e, f) || new xu(new Aw(), this.j, c, e, f),
    h = V(this.j, "docs-offline-edose");
  return (Wb || h) && (I.indexedDB || I.webkitIndexedDB)
    ? new yx(a, this.o, g, new Aw(), this.j, void 0, c, e, f)
    : g;
};
function Px(a, c) {
  this.o = a;
  this.j = c;
}
Px.prototype.notify = function (a, c) {
  (this.j != null && this.j.o() && this.j.j()) || this.o.notify(a, c);
};
function Qx(a) {
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
function Rx(a) {
  $a.call(this);
  this.B = a;
}
D(Rx, $a);
function Sx(a, c) {
  c = c === void 0 ? 3e4 : c;
  this.B = a;
  this.j = this.A = this.o = 0;
  this.v = c;
  for (a = Tx; a < this.v; ) a *= 2;
  this.C = a;
}
function Ux(a, c) {
  if (V(a.B, "docs-irbfes"))
    if (a.j !== 0 && c !== 2)
      if (c === 1) c = a.o < 4 ? Tx : a.j < a.v ? a.j * 2 : a.C;
      else if (c === 3) c = a.j < Math.max(a.v, 18e4) ? a.j * 2 : a.j;
      else throw Error("Ib");
    else c = Tx;
  else {
    var e = c != 2 && !(a.o < 4);
    c = Tx;
    e && a.j != 0 && (c = a.j < a.v ? a.j * 2 : a.j);
  }
  a.j = c;
  return Math.max(0, c - (Date.now() - a.A));
}
function Vx(a) {
  var c = Date.now();
  a.o++;
  a.A = c;
}
var Tx = 5e3 * (0.75 + Math.random() * 0.5);
function Wx(a) {
  this.G = M(a);
}
D(Wx, R);
function Xx(a) {
  this.G = M(a);
}
D(Xx, R);
function Yx(a) {
  this.G = M(a, 4);
}
D(Yx, R);
function Zx(a) {
  this.G = M(a, 37);
}
D(Zx, R);
function $x(a, c) {
  return Gf(a, 8, c);
}
function ay() {
  var a = by,
    c = sm(a, "docs-cclt");
  a = tm(a, "gaia_session_id") ? tm(a, "gaia_session_id") : "0";
  a = new cy(c, a);
  a.o = !0;
  a.j = !0;
  a.ua || (a.ua = new dy());
  c = new ey({
    ob: a.ob,
    Ab: a.Ab ? a.Ab : Es,
    gb: a.gb,
    ef: "https://play.google.com/log?format=json&hasfast=true",
    Pa: a.o,
    xb: a.j,
    Md: a.v,
    Hd: a.Hd,
    ua: a.ua,
  });
  Ul(a, c);
  c.D = new fy();
  a.rb && (c.rb = a.rb);
  gy(c.A);
  a.ua.Fb && a.ua.Fb(a.ob);
  a.ua.Xe && a.ua.Xe(c);
  a = by;
  var e = hy;
  this.v = c;
  this.j = a;
  this.A = e || null;
  c = this.v;
  a = sm(this.j, "docs-clibs");
  c.K = a;
  this.v.sb = 2e4;
}
ay.prototype.o = function (a) {
  var c = this;
  if (V(this.j, "docs-ecir")) return iy(this, a, new Sx(this.j));
  a = $x(new Zx(), mg(a));
  jy(this.v, a);
  return new vj(function (e, f) {
    ky(c, e, f);
  });
};
function iy(a, c, e) {
  var f = $x(new Zx(), mg(c));
  jy(a.v, f);
  return new vj(function (g, h) {
    Vx(e);
    ky(a, g, h);
  }).Ta(function (g) {
    if (typeof g === "number" && ((500 <= g && g < 600) || g == 401 || g == 0) && e.o < 4)
      return (
        (g = Ux(e, g === 0 ? 1 : 3)),
        eu(g).then(function () {
          return iy(a, c, e);
        })
      );
    throw ly(g);
  });
}
ay.prototype.Pb = function (a, c) {
  var e = Error("Jb`" + a + "`" + c);
  this.A && V(this.j, "docs-ecer") && bx(this.A, e, { failureType: a, errorCode: "" + c });
};
function ky(a, c, e) {
  a.v.flush(c, function (f, g) {
    a.Pb(f, g);
    f = V(a.j, "docs-ecir") ? g : ly(g);
    e(f);
  });
}
function ly(a) {
  return typeof a === "number" ? new Rx(!((500 <= a && a < 600) || a == 401 || a == 0)) : a;
}
function my() {
  var a = ny;
  this.j = oy;
  this.o = a;
}
my.prototype.ia = ba("j");
function py(a, c, e, f, g) {
  wt.call(this, a);
  this.o = this.cause = null;
  this.B = c;
  this.j = e;
  this.A = g;
}
D(py, wt);
py.prototype.getType = ba("type");
function qy() {
  var a = ry,
    c = by,
    e = !0;
  e = e === void 0 ? !1 : e;
  this.v = a;
  this.j = c;
  this.A = tm(this.j, "docs-liap") || "/logImpressions";
  this.B = e;
}
qy.prototype.o = function (a, c) {
  V(this.j, "docs-ecssl") && sy(a, mg(a));
  return new vj(function (e, f) {
    var g = V(this.j, "docs-daflia"),
      h = tm(this.j, "docs-sup"),
      k = ty(this.v, this.A);
    g && (k.A = h);
    uy(k, c ? ["id", c] : []);
    g = vy;
    k.D = 2;
    wy(xy(g(k, { impressionBatch: ze(a) }), e), function (l) {
      l = l.getType() == "d" && (!l.o || l.o == "d");
      f(new Rx(l));
    }).C = !0;
    this.B && k.setTimeout(5e3);
    yy(k);
  }, this);
};
function zy() {
  var a = Ay,
    c = [new ay()];
  this.v = a;
  this.j = c;
}
zy.prototype.o = function (a, c) {
  for (var e = 0; e < this.j.length; e++) this.j[e].o(a, c).Ta(u());
  return this.v.o(a, c);
};
function By() {
  this.o = new Cy();
}
By.prototype.j = function (a) {
  return this.o.j(a);
};
function Cy() {
  var a = new Dy();
  this.v = Ey;
  this.o = a;
}
Cy.prototype.j = function (a) {
  return this.v.o(a, null).Ta(function (c) {
    if (!(c instanceof Rx && c.B)) {
      c = rf(a, Fy, 1);
      c = E(c);
      var e = c.next(),
        f;
      try {
        for (; !e.done; e = c.next()) {
          var g = e.value;
          if (!We(g, Dn, 5)) {
            var h = g,
              k = new Dn();
            N(h, Dn, 5, k);
          }
          var l = pf(g, Dn, 5);
          if (!We(l, mn, 34)) {
            var p = pf(g, Dn, 5),
              q = new mn();
            N(p, mn, 34, q);
          }
          var r = pf(g, Dn, 5);
          var w = pf(r, mn, 34);
          Q(w, 26, !0);
        }
      } finally {
        e && !e.done && (f = c.return) && f.call(c);
      }
      return Gy(this, a);
    }
  }, this);
};
function Gy(a, c) {
  return new vj(function (e, f) {
    a.o.j(c, e, f);
  });
}
function Hy(a, c) {
  a: {
    var e = { sd: !0 };
    c && Object.assign(e, c);
    a = Rf(a, void 0, void 0, e);
    try {
      var f = new $m(),
        g = f.G;
      Fg(an)(g, a);
      var h = f;
      break a;
    } catch (k) {
      if (k instanceof RangeError) throw new SyntaxError();
      throw k;
    } finally {
      Tf(a);
    }
    h = void 0;
  }
  return h;
}
function Iy(a) {
  var c = c === void 0 ? !1 : c;
  this.j = new Ws(a);
  this.v = c;
  c = this.j.j;
  var e = c.get("usp"),
    f = c.get("urp"),
    g = c.get("cros_files", ""),
    h = Jy(e, this.v);
  a = c.get("dl");
  var k = ps(this.j.v),
    l = c.get("rtpof", ""),
    p = c.get("pli");
  c = new en();
  var q = new dn();
  N(c, dn, 1, q);
  var r = new cn();
  k = Q(r, 3, k);
  N(q, cn, 1, k);
  e && Gf(k, 1, e);
  f && Gf(k, 2, f);
  h !== null && Hf(q, 5, h);
  p === "1" && Q(k, 6, !0);
  Q(k, 7, g == "true");
  Q(k, 4, l == "true");
  e = null;
  if (a)
    try {
      e = Hy($b(a));
    } catch (w) {
      e = null;
    }
  e && ((a = new bn()), N(c, bn, 2, a), N(a, $m, 1, e));
  this.o = c;
}
function Jy(a, c) {
  var e = I;
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
function Ky(a, c, e, f) {
  this.B = a;
  this.A = c;
  this.v = e;
  this.o = f;
}
Ky.prototype.j = function (a, c, e) {
  var f = this;
  a = new Lp(null, this.A, Date.now(), ze(a), !0, this.v);
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
          bx(f.o, g, ((h.nonfatalReason = "suspected cache clearing or offline opt-out"), h)),
          c())
        : e(g);
    },
    1337524,
    !0,
  );
};
function Dy() {
  var a = Ly,
    c = by,
    e = My;
  this.A = Ny;
  this.B = a;
  this.v = c;
  this.o = e;
}
Dy.prototype.j = function (a, c, e) {
  var f = this;
  Oy(this.A).then(function (g) {
    g ? new Ky(g.j, f.B, f.v, f.o).j(a, c, e) : c();
  });
};
function Py(a) {
  this.G = M(a, 1);
}
D(Py, R);
function Qy(a) {
  this.G = M(a, 1);
}
D(Qy, R);
function Ry(a) {
  this.G = M(a);
}
D(Ry, R);
var Sy = new Ng(113007630, Py, Ry);
function Ty(a) {
  this.G = M(a);
}
D(Ty, R);
var Uy = new Ng(112987886, Qy, Ty);
function Vy(a, c) {
  U.call(this);
  var e = this;
  this.o = c;
  this.j = new mo();
  Ul(this, this.j);
  no(this.j, a.A, function (f) {
    var g = [];
    f = f.j;
    for (var h = 0; h < f.length; h++) {
      var k = f[h];
      switch (k.j.B) {
        case "document":
          var l = new Ty();
          Gf(l, 1, k.j.V());
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
                throw Error("Lb`" + p);
            }
          }
          Hf(l, 2, p);
          p = [];
          k = k.v;
          Os(k, "ip") && p.push(1);
          Os(k, "pendingQueueState") && p.push(6);
          Os(k, "lastModifiedClientTimestamp") && p.push(2);
          (Os(k, "lsst") || Os(k, "lsft") || Os(k, "lss")) && p.push(3);
          Os(k, "pendingCreation") && p.push(4);
          Os(k, "title") && p.push(5);
          var q = void 0;
          q = void 0;
          k = l;
          Oe(k);
          k = k.G;
          var r = k[K] | 0;
          if (p == null) Ve(k, r, 3);
          else {
            if (!Array.isArray(p)) throw Ac();
            var w = p === Rc ? 7 : p[K] | 0,
              y = w,
              z = cf(w),
              B = z || Object.isFrozen(p);
            z || (w = 0);
            B || ((p = Ed(p)), (y = 0), (w = af(w, r)), (B = !1));
            w |= 5;
            z = 4 & w ? (512 & w ? 512 : 1024 & w ? 1024 : 0) : void 0;
            z = (q = z) != null ? q : 1024;
            w |= z;
            for (z = 0; z < p.length; z++) {
              q = p[z];
              var F = Od(q);
              Object.is(q, F) ||
                (B && ((p = Ed(p)), (y = 0), (w = af(w, r)), (B = !1)), (p[z] = F));
            }
            w !== y && (B && ((p = Ed(p)), (w = af(w, r))), Tc(p, w));
            Ve(k, r, 3, p);
          }
          (p = wf(l, 2, Re) != 2) || ((p = Ye(l, 3, Pd, void 0 === cd ? 2 : 4)), (p = p.length));
          p && ((p = new Qy()), qg(p, Uy, l), g.push(p));
      }
    }
    g.length && ((f = new Ry()), sf(f, Qy, 1, g), (g = new Py()), qg(g, Sy, f), e.o.j(g));
  });
}
D(Vy, U);
function Wy(a, c, e) {
  tp.call(this, e);
  this.j = a;
  this.o = c;
}
D(Wy, tp);
function Xy(a, c) {
  var e = Yy(a.j, ["ProfileData"], 78);
  Zy(Z(e, "ProfileData").get("cacheupdatestats"), function (f) {
    $y(e);
    if ((f = f.target.result)) {
      if (f.dataType != "cacheupdatestats") throw Error("Mb");
      var g = new lp(!1, a.na),
        h = E(mp()),
        k = h.next(),
        l;
      try {
        for (; !k.done; k = h.next()) {
          var p = k.value,
            q = f[p];
          if (q != null) {
            var r = g,
              w = p,
              y = q.lastAttemptStartTimestamp,
              z = q.lastAttemptEndTimestamp,
              B = q.consecutiveFailureCount,
              F = q.lastSuccessTimestamp;
            np(w);
            var J = {};
            y != null && (J.lastAttemptStartTimestamp = y);
            z != null && (J.lastAttemptEndTimestamp = z);
            B != null && (J.consecutiveFailureCount = bl(B));
            F != null && (J.lastSuccessTimestamp = F);
            X(r, w, J);
            var W = q.lastSeenCacheState;
            W && op(g, p, W.completeCacheNames, W.incompleteCacheNames);
          }
        }
      } finally {
        k && !k.done && (l = h.return) && l.call(h);
      }
      g.v = !1;
      c(g);
    } else c(null);
  });
}
Wy.prototype.ja = function () {
  return ["ProfileData"];
};
Wy.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Z(c, "ProfileData");
      a.o ? (az(c, a.j), bz(e)) : cz(this.o, "cacheupdatestats", a.j, c, e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function dz(a) {
  a = Error.call(this, a);
  this.message = a.message;
  "stack" in a && (this.stack = a.stack);
}
D(dz, Error);
function ez() {}
function fz(a, c, e, f, g, h) {
  g = g === void 0 ? !1 : g;
  h = h === void 0 ? !1 : h;
  c = c !== void 0 ? gz(c, e) : null;
  g = g ? "prev" : "next";
  if (f)
    return (
      (a = hz(a, f)),
      h
        ? ((h =
            (h = c !== void 0) && g !== void 0
              ? a.j.openKeyCursor(c, g)
              : h
                ? a.j.openKeyCursor(c)
                : a.j.openKeyCursor()),
          (c = new iz(
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
          (c = new iz(
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
  h = jz(a, "openCursor", (c ? c.lower + ", " + c.upper : c) + ", " + g);
  kz(a, h);
  c =
    (f = c !== void 0) && g !== void 0
      ? a.j.openCursor(c, g)
      : f
        ? a.j.openCursor(c)
        : a.j.openCursor();
  return new iz(c, "read", a.v, h, a.o, a.B, a.A);
}
function lz(a, c, e) {
  c = gz(c, e);
  mz(a, c);
}
function nz(a, c, e, f, g, h, k, l, p) {
  k = k === void 0 ? !1 : k;
  l = l === void 0 ? !1 : l;
  p = p === void 0 ? !1 : p;
  c = Z(a, c);
  var q = [];
  Zy(fz(c, void 0, g, h, k, l), function (r) {
    if ((r = r.target.result)) {
      var w = r.value !== void 0 ? r.value : r.key;
      try {
        w = e(w);
      } catch (y) {
        if (y instanceof dz) {
          a.abort(new To(9, y.message));
          return;
        }
        throw y;
      }
      w && q.push(w);
      r["continue"]();
    } else (p && $y(a), f && f(q));
  });
}
function oz(a, c) {
  return function (e) {
    e.stopPropagation();
    c(new To(1, a + " (" + sx(e) + ")", e));
  };
}
function gz(a, c) {
  return c === void 0 || a == c ? pz.only(a) : pz.bound(a, c, void 0, void 0);
}
var pz = I.IDBKeyRange || I.webkitIDBKeyRange;
function qz(a) {
  U.call(this);
  this.j = a;
}
D(qz, U);
function rz(a, c, e, f, g, h) {
  var k = {};
  k.dcKey = [a, c, e, f];
  k.t = g;
  h && (k.c = h);
  return new qz(k);
}
qz.prototype.P = function () {
  delete this.j;
  U.prototype.P.call(this);
};
function sz(a, c, e, f, g, h) {
  Ro.call(this, a, f, h);
  this.Oe = c;
  this.be = e;
}
D(sz, Ro);
sz.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "append-commands":
      if (a.B) {
        var f = a.A,
          g = Z(c, "DocumentCommands");
        lz(g, [f], [f, []]);
      }
      c = Z(c, "DocumentCommands");
      f = a.C;
      for (g = 0; g < f.length; ++g) {
        var h = c,
          k = a.A,
          l = f[g];
        var p = l;
        if (p instanceof Fo) p = Qm(p.v);
        else throw Error("Pb`" + typeof p);
        az(h, rz(k, l.A, l.o, l.j, l.B, p).j);
      }
      bz(e);
      break;
    default:
      throw Error("Ob`" + a.getType());
  }
};
function tz(a) {
  this.j = a;
}
function bz(a) {
  a.j(a);
}
function uz(a, c, e, f) {
  U.call(this);
  this.F = a;
  this.C = c;
  this.o = e;
  this.B = f || Date.now;
  this.A = this.j = 0;
  this.v = [];
}
D(uz, U);
uz.prototype.start = function () {
  if (this.A) throw Error("Qb");
  this.A = this.B() + this.C;
  this.j = du(this.D, this.C, this);
};
uz.prototype.D = function () {
  this.j = 0;
  var a = this.B() - this.A;
  this.v.push(a);
  var c = this.o.hidden || this.o.webkitHidden || this.o.mozHidden || this.o.msHidden ? 1020 : 20;
  this.v.length < 10 && a > c
    ? ((this.A = this.B() + 1e3), (this.j = du(this.D, 1e3, this)))
    : this.F(this);
};
uz.prototype.P = function () {
  this.j && I.clearTimeout(this.j);
};
function iz(a, c, e, f, g, h, k, l, p, q, r) {
  var w = this;
  this.H = a;
  this.v = e;
  this.K = f;
  this.M = g;
  this.D = h;
  this.T = vz(h, f);
  this.B = this.F = null;
  this.A = l || null;
  this.C = k;
  this.o = r ? Mn(this.C, r) : null;
  this.J = q || 0;
  this.j = null;
  this.J > 0 &&
    (this.A || p) &&
    ((this.j = new uz(
      function () {
        if (w.o) {
          var y = w.C,
            z = w.o;
          z in y.j && delete y.j[z];
        }
        w.v.info(Error("Tb"), {
          documentHidden: document.hidden || document.webkitHidden,
          request: w.K,
          requestTimeoutMs: w.J,
          timeoutCallbackSet: !!w.A,
          timeoutDelays: w.j.v.concat().toString(),
        });
        Sl(w.j);
        !w.M.j && w.A && (w.O(w.H), w.A());
      },
      this.J,
      document,
    )),
    this.j.start());
  this.H.onsuccess = cx(this.v, this.X, this, !0);
  this.H.onerror = cx(this.v, this.R, this, !0);
  switch (c) {
    case "read":
      this.D.C++;
      break;
    case "write":
      this.D.D++;
  }
}
function Zy(a, c) {
  if (a.F) throw Error("Rb");
  a.F = c;
}
iz.prototype.X = function (a) {
  Sl(this.j);
  if (this.o) {
    var c = this.C,
      e = this.o,
      f = c.j[e];
    f && (f.complete(void 0), delete c.j[e]);
  }
  c = this.D;
  f = this.T;
  c.v = performance.now();
  c.F = a.timeStamp == null ? -1 : c.v - a.timeStamp;
  c.H++;
  e = c.j[f];
  delete c.j[f];
  e && ((f = c.v), (e.o = !0), (e.j = f), wz(c, e));
  this.M.j || (this.F && this.F(a));
};
function xz(a, c) {
  if (a.B) throw Error("Sb");
  a.B = c;
}
iz.prototype.R = function (a) {
  Sl(this.j);
  if (this.o) {
    var c = this.C,
      e = this.o;
    e in c.j && delete c.j[e];
  }
  c = this.D;
  var f = this.T;
  c.o = performance.now();
  c.I = a.timeStamp == null ? -1 : c.o - a.timeStamp;
  c.N++;
  e = c.j[f];
  delete c.j[f];
  e && ((f = c.o), (e.o = !1), (e.j = f), wz(c, e));
  a.target.docs_requestContext = this.K;
  this.M.j || ((c = a.target.error) && c.name == "AbortError") || (this.B && this.B(a));
};
iz.prototype.O = function (a) {
  a.onsuccess = u();
  a.onerror = u();
};
function yz(a, c, e) {
  this.v = a;
  this.A = c;
  this.B = e;
  this.j = this.o = null;
}
function zz() {
  this.j = {};
  this.B = [];
  this.H = this.N = 0;
  this.I = this.o = this.F = this.v = this.A = -1;
  this.D = this.C = this.J = 0;
}
function vz(a, c) {
  a.A = performance.now();
  var e = a.J++;
  a.j[e] = new yz(e, c, a.A);
  return e;
}
function wz(a, c) {
  for (a.B.push(c); a.B.length > 5; ) a.B.shift();
}
function Az(a) {
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
function Bz(a) {
  this.B = a;
  this.A = this.o = this.v = this.j = !1;
}
function Cz(a, c, e) {
  a.A && bx(a.B, Error("Ub`" + c), e);
}
function Dz(a) {
  try {
    var c = I.localStorage.getItem("docs-ucb");
  } catch (e) {
    return (a.info(Error("Wb`" + e.message)), "e");
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
function Ez(a, c, e, f, g, h, k, l) {
  iz.call(this, a, "open", c, e, new Bz(c), new zz(), f, h, !0, k, l);
  this.N = this.I = null;
  this.S = g;
  a.onblocked = cx(c, this.U, this, !0);
  a.onupgradeneeded = cx(c, this.Z, this, !0);
}
D(Ez, iz);
Ez.prototype.U = function (a) {
  Sl(this.j);
  this.I && this.I(a);
};
Ez.prototype.Z = function (a) {
  Sl(this.j);
  if (a.dataLoss && a.dataLoss != "none") {
    var c = {};
    c.dataLoss = a.dataLoss;
    c.dataLossMessage = a.dataLossMessage;
    c.optinBackup = Vs(this.S);
    c.requestContext = this.K;
    c.unsavedChanges = Dz(this.v);
    this.v.info(Error("Xb"), c);
  }
  this.N && this.N(a);
};
Ez.prototype.O = function (a) {
  iz.prototype.O.call(this, a);
  a.onblocked = sj;
  a.onupgradeneeded = sj;
};
function Fz(a, c) {
  if (a.I) throw Error("Yb");
  a.I = c;
}
function Gz(a, c) {
  if (a.N) throw Error("Zb");
  a.N = c;
}
function Hz(a, c, e, f, g) {
  this.j = a;
  this.B = c;
  this.A = e;
  this.o = f;
  this.v = g;
}
Hz.prototype.get = function (a) {
  return new iz(
    this.j.get(a),
    "read",
    this.o,
    this.j.name + ".get(" + a + ")",
    this.B,
    this.A,
    this.v,
  );
};
function Iz(a, c, e, f, g) {
  this.j = a;
  this.o = c;
  this.B = e;
  this.v = f;
  this.A = g;
}
A = Iz.prototype;
A.get = function (a) {
  var c = jz(this, "get", a instanceof IDBKeyRange ? a.lower + ", " + a.upper : a);
  kz(this, c);
  return new iz(this.j.get(a), "read", this.v, c, this.o, this.B, this.A);
};
A.getAll = function (a) {
  var c = jz(this, "getAll", a instanceof IDBKeyRange ? a.lower + ", " + a.upper : a);
  kz(this, c);
  return new iz(this.j.getAll(a), "read", this.v, c, this.o, this.B, this.A);
};
function az(a, c) {
  var e = jz(a, "put");
  kz(a, e);
  c = a.j.put(c);
  return new iz(c, "write", a.v, e, a.o, a.B, a.A);
}
A.add = function (a, c) {
  var e = jz(this, "add", c);
  kz(this, e);
  a = c !== void 0 ? this.j.add(a, c) : this.j.add(a);
  return new iz(a, "write", this.v, e, this.o, this.B, this.A);
};
function mz(a, c) {
  var e = jz(a, "delete", c instanceof IDBKeyRange ? c.lower + ", " + c.upper : c);
  kz(a, e);
  new iz(a.j["delete"](c), "delete", a.v, e, a.o, a.B, a.A);
}
A.clear = function () {
  var a = jz(this, "clear");
  kz(this, a);
  return new iz(this.j.clear(), "clear", this.v, a, this.o, this.B, this.A);
};
A.count = function (a) {
  var c = jz(this, "count", a);
  kz(this, c);
  a = a !== void 0 ? this.j.count(a) : this.j.count();
  return new iz(a, "read", this.v, c, this.o, this.B, this.A);
};
function hz(a, c) {
  kz(a, jz(a, "getIndex", c));
  return new Hz(a.j.index(c), a.o, a.B, a.v, a.A);
}
function jz(a, c, e) {
  return a.j.name + "." + c + "(" + (e !== void 0 ? e : "") + ")";
}
function kz(a, c) {
  Cz(a.o, "request: " + c);
}
function Jz(a) {
  this.v = a;
  this.j = [];
  this.o = !1;
}
function Kz(a) {
  var c = new tz(function (e) {
    Mb(a.j, e) && a.j.length === 0 && !a.o && ((a.o = !0), a.v());
  });
  a.j.push(c);
  return c;
}
function Lz(a, c, e, f, g, h, k, l, p, q, r, w, y, z, B) {
  function F() {}
  var J = this;
  p = p === void 0 ? !1 : p;
  w = w === void 0 ? null : w;
  z = z === void 0 ? !1 : z;
  this.J = a;
  this.ha = c;
  this.o = e;
  this.U = f;
  this.K = !1;
  this.B = p;
  this.C = this.F = null;
  this.j = new Bz(this.o);
  this.H = new zz();
  this.S = r || 6e4;
  this.A = new uz(
    function () {
      if (!J.j.o) {
        var W = Mz(J);
        W.transactionTimeout = J.S;
        W.timeoutDelays = J.A.v.concat().toString();
        W.documentHidden = document.hidden || document.webkitHidden;
        J.o.info(Error("bc`" + J.T), W);
        J.A.dispose();
        J.O && (Nz(J, !0), J.O(), (J.C.oncomplete = null));
      }
    },
    this.S,
    document,
  );
  this.O = w;
  this.X = h;
  this.I = k;
  this.M = l;
  a = V(this.I, "docs-eaiturd");
  this.la = B != null ? B : a;
  this.T = q || Uo(l);
  this.v = null;
  this.R = Oz++;
  this.D = g;
  this.Z = y !== void 0 ? y : this.B ? 29030 : 29029;
  this.ma = z || !1;
  g = V(this.I, "docs-eiec");
  l = V(this.I, "docs-esiec");
  g
    ? (F = function () {
        J.C.commit !== void 0 && (Pz(J), Cz(J.j, "commit", Mz(J)), J.C.commit());
      })
    : l &&
      (F = function () {
        Cz(J.j, "simulated commit", Mz(J));
        J.j.A = !0;
      });
  this.N = new Jz(F);
}
A = Lz.prototype;
A.open = function () {
  if (this.Z != null) {
    var a = V(this.I, "docs-intli") ? this.ma : !0;
    this.v = Pn(this.X, this.Z, a);
  }
  a = this.B ? "readwrite" : "readonly";
  var c = { durability: this.la ? "relaxed" : "strict" };
  this.A.start();
  try {
    var e = this.J.transaction(this.ha, a, c);
  } catch (f) {
    throw ((e = Mz(this)), (e.transactionStage = "open"), ux(e, f.message), pl(f, e));
  }
  e.onabort = cx(this.o, this.Qe, this);
  e.oncomplete = cx(this.o, this.ce, this);
  e.onerror = cx(this.o, this.de, this, !0);
  this.C = e;
  this.D.add(this);
};
function $y(a) {
  Cz(a.j, "abandon", Mz(a));
  a.j.o = !0;
  a.A.dispose();
  a.v = null;
  a.D.remove(a);
}
A.abort = function (a) {
  Cz(this.j, "abort", Mz(this));
  Nz(this, !1, a);
};
function Nz(a, c, e) {
  var f = a.j;
  if (!f.v && !f.j) {
    Pz(a);
    f.j = !0;
    try {
      a.C.abort();
    } catch (g) {
      (g.name == "InvalidStateError" && c) ||
        ((f = Mz(a)), (f.abortFromTimeout = c), a.o.info(g, f));
    }
    e && !a.K && (a.U(e), (a.K = !0));
    a.A.dispose();
    a.D.remove(a);
  }
}
function Z(a, c) {
  Pz(a);
  return new Iz(a.C.objectStore(c), a.j, a.H, a.o, a.X);
}
function Qz(a, c) {
  if (a.F) throw Error("$b");
  a.F = c;
}
function Pz(a) {
  if (!a.C) throw Error("ac");
}
A.Qe = function (a) {
  if (this.j.o) return Promise.resolve();
  var c = !0;
  this.j.j
    ? (c = !1)
    : ((a.target.docs_internalAbort = !0),
      !this.B &&
        a.target.error &&
        a.target.error.name == "QuotaExceededError" &&
        (this.F && this.F(), (c = !1)));
  this.j.v = !0;
  this.D.remove(this);
  this.A.dispose();
  var e = Promise.resolve();
  c && (e = Rz(this, "LocalStore IndexedDB transaction abort", Mz(this), a));
  this.v = null;
  return e;
};
A.ce = function () {
  if (!this.j.o) {
    this.D.remove(this);
    if (this.v) {
      var a = new kn();
      Hf(a, 1, this.M);
      Ef(a, 2, this.H.C);
      Ef(a, 3, this.H.D);
      var c = Gn(41);
      c.A = a;
      a = Hn(c);
      this.v.complete(a);
      this.v = null;
    }
    this.A.dispose();
    this.F && this.F();
  }
};
A.de = function (a) {
  a.stopPropagation();
  var c = this.j;
  if (
    !(c.o || c.v || c.j || ((c = a.target.error), c && c.name == "AbortError")) &&
    ((c = Mz(this)),
    (c.request = a.target.docs_requestContext),
    Rz(this, "LocalStore IndexedDB error", c, a),
    (a = this.D),
    V(this.I, "docs-ewtaoe") && this.B)
  ) {
    delete a.j[this.V()];
    c = 0;
    for (var e in a.j) {
      var f = Number(e),
        g = a.j[f];
      g.B && (g.abort(), delete a.j[f], c++);
    }
    a.o = !0;
    a.v.info(Error("cc`" + this.V() + "`" + c));
  }
};
function Rz(a, c, e, f) {
  var g = sx(f),
    h = c + " (" + a.T + "): " + g;
  e.transactionStage = "processError";
  ux(e, g);
  return wx(e, g, a.I).then(function () {
    a.o.info(Error(h), e);
    var k = new To(1, h, f, a.M, !!Us());
    bm(k.A, e);
    pl(k.L, e);
    a.K || (a.U(k), (a.K = !0));
  });
}
A.V = ba("R");
function Mz(a) {
  var c = tx(a.J.objectStoreNames),
    e = a.v ? a.v.o : null;
  c = {
    databaseName: a.J.name,
    databaseObjectStores: c,
    databaseVersion: a.J.version,
    transactionAllowWrite: a.B,
    transactionContext: a.T,
    transactionId: a.R,
    transactionObjectStores: a.ha.toString(),
    transactionStartTimeMs: e,
    transactionAgeMs: e ? performance.now() - e : null,
  };
  a = a.H;
  e = Ms(a.j);
  c.pendingRequestCount = e.length;
  c.pendingRequests = Az(e);
  c.idbRecentlyCompletedRequests = Az(a.B);
  c.requestErrorCount = a.N;
  c.requestSuccessCount = a.H;
  c.idbLastSuccessCallbackClientTimeMs = a.v;
  c.idbLastErrorCallbackClientTimeMs = a.o;
  if (a.A == -1) e = "no requests";
  else if (((e = Math.max(a.v, a.o)), e == -1)) e = "request creation";
  else {
    var f = a.v >= a.o ? "success" : "error";
    e = a.A >= e ? "request creation (after " + f + " callback)" : f + " callback";
  }
  c.idbLastEventDesc = e;
  c.idbLastSuccessEventCallbackTimeDiffMs = a.F;
  c.idbLastErrorEventCallbackTimeDiffMs = a.I;
  c.idbReadOperationCount = a.C;
  c.idbWriteOperationCount = a.D;
  return c;
}
function Sz(a) {
  this.v = a;
  this.j = {};
  this.o = !1;
}
Sz.prototype.add = function (a) {
  if (a.B || !this.o) this.j[a.V()] = a;
};
Sz.prototype.remove = function (a) {
  delete this.j[a.V()];
};
var Oz = 0;
function Tz(a, c) {
  wt.call(this, "j", c);
  this.newVersion = a;
}
D(Tz, wt);
function Uz(a, c, e, f) {
  U.call(this);
  this.o = a;
  this.B = c;
  this.K = e;
  this.C = f;
  this.H = this.F = this.j = null;
  this.M = {};
  this.A = !1;
  this.J = new Sz(c);
  this.D = new jo();
  Ul(this, this.D);
  this.v = new jo();
  Ul(this, this.v);
  this.O = I.indexedDB || I.webkitIndexedDB;
}
D(Uz, U);
Uz.prototype.close = function (a) {
  this.j && ((this.j.onversionchange = null), this.j.close(), (this.j = null), (this.F = a));
};
Uz.prototype.initialize = function (a) {
  var c = this;
  if (this.j) throw Error("dc");
  if (a.onversionchange != null) throw Error("ec");
  a.onclose = function () {
    var e = {};
    e.optinBackup = Vs(c.C);
    c.B.info(Error("fc"), e);
    c.D.dispatchEvent(null);
  };
  a.onerror = oz("Database error.", this.o);
  a.onversionchange = function (e) {
    c.A = !0;
    e = Number(e.version) || e.newVersion || 0;
    c.close("Version change detected " + e);
    c.v.dispatchEvent(new Tz(e));
  };
  this.j = a;
};
function Vz(a) {
  if (!a.j) return -1;
  a = parseInt(a.j.version, 10);
  return a >= 0 ? a : -1;
}
function Yy(a, c, e, f, g, h, k, l, p, q, r) {
  q = q === void 0 ? !1 : q;
  if (!a.j) {
    if (a.F != null) throw pl(Error("gc`" + a.F), a.M);
    throw Error("hc");
  }
  if (g && a.J.o) throw Error("ic");
  a = new Lz(a.j, c, a.B, f || a.o, a.J, a.K, a.C, e, g, h, k, l, p, q, r);
  a.open();
  return a;
}
function Wz(a, c, e, f, g) {
  if (Vz(a) >= c) throw Error("jc`" + c + "`" + Vz(a));
  var h = a.j.name;
  a.close("Setting version to " + c);
  var k = a.B;
  c = new Ez(a.O.open(h, c), k, "setVersion database.open", a.K, a.C);
  Gz(c, function (l) {
    l = l.target.transaction;
    l.onabort = l.onerror = cx(k, f, {}, !0);
    e(l);
  });
  xz(c, f);
  Fz(c, function (l) {
    k.info(Error("kc"), { "Old version": l.oldVersion, "New version": l.newVersion });
  });
  Zy(c, function (l) {
    a.initialize(l.target.result);
    g(l);
  });
}
Uz.prototype.P = function () {
  this.close(this.H ? "DocsDatabase was disposed due to " + this.H : "DocsDatabase was disposed");
  U.prototype.P.call(this);
};
function Xz(a, c, e, f, g, h, k, l, p) {
  g = g
    ? function () {
        f(new To(6, "Timeout opening database."));
      }
    : void 0;
  p && k.o("odbs");
  g = new Ez(
    (I.indexedDB || I.webkitIndexedDB).open("GoogleDocs"),
    e,
    "database.open",
    h,
    l,
    g,
    sm(l, "docs-localstore-iort"),
    "idbodb",
  );
  Zy(g, function (q) {
    p && k.o("odbc");
    var r = new Uz(c, e, h, l);
    r.initialize(q.target.result);
    a(r);
  });
  xz(g, oz("Error opening database.", f));
}
function Yz() {
  Y.call(this);
}
D(Yz, up);
Yz.prototype.ja = function () {
  throw Error("lc");
};
Yz.prototype.fa = function (a) {
  throw Error("Nb`" + a.getType());
};
function Zz(a, c, e) {
  Y.call(this);
  this.j = e;
}
D(Zz, vp);
Zz.prototype.ja = function () {
  return ["Comments"];
};
Zz.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Z(c, "Comments");
      so(a);
      if (a.o) {
        var f = a.j,
          g = {};
        g.cmtKey = so(a);
        g.stateIndex = [f.s, f.di];
        g.da = f.da;
        az(c, g);
        bz(e);
      } else {
        g = a.j;
        a = so(a);
        var h = {};
        "s" in g && ((h.stateIndex = [g.s, a[0]]), delete g.s);
        for (f in g) h[f] = g[f];
        cz(this.j, a, h, c, e);
      }
      break;
    case "delete-record":
      c = Z(c, "Comments");
      a = so(a);
      mz(c, a);
      bz(e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function $z(a, c) {
  this.A = a;
  this.o = c || {};
  this.j = this.v = null;
}
function aA(a, c, e) {
  this.F = a;
  this.J = c;
  this.B = e;
  this.j = null;
  this.C = {};
  this.A = this.H = this.o = this.v = this.D = null;
  this.N = this.I = !1;
}
function bA(a) {
  return a.j != null ? cA(a.j) : null;
}
function dA(a) {
  a.D != null && (a.D = Date.now());
  a.v = Date.now();
}
function eA(a, c) {
  a.j == null && (a.H = Date.now());
  a.j = cA(c);
  a.o = Date.now();
  a.A = a.o;
}
function fA(a, c, e) {
  for (var f in c) {
    var g = cA(a.j[f]),
      h = cA(c[f]);
    a.C[f] = new gA(g, h, !0);
    e.includes(f) ? (a.j[f] = h != null ? h : null) : (a.j[f] = h);
  }
}
function hA(a, c, e) {
  c = cA(c);
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
      var r = cA(a.j[z]),
        w = cA(c[z]);
      a.j[z] = w;
      var y = a.C[z];
      a.C[z] = new gA(r, w, !1);
      z != "relevancyRank" &&
        (Object.hasOwn(f, z) ? h.push(z) : g.push(z),
        iA.includes(z) &&
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
    Object.assign(k, jA(a));
    bx(a.F, Error("nc"), k);
  }
  a.o = Date.now();
}
function jA(a) {
  var c = {};
  c.cache_recordType = a.J;
  c.docCapability_lastCachedTimestamp = a.o;
  c.docCapability_initialCacheStartTimeMs = a.D;
  c.docCapability_initialCachedTimestamp = a.H;
  c.docCapability_lastFullCacheStartTimeMs = a.v;
  c.docCapability_lastFullCachedTimestamp = a.A;
  c.docCapability_isNewDocumentInSession = a.I;
  return c;
}
function cA(a) {
  return a == null
    ? a
    : typeof structuredClone === "function"
      ? structuredClone(a)
      : JSON.parse(JSON.stringify(a));
}
function gA(a, c, e) {
  this.o = Date.now();
  this.A = a;
  this.v = c;
  this.j = e;
}
var iA =
  "acjf acl rev lastSyncedTimestamp startupHints initialPinSourceApp lsft lsst ips lss isFastTrack hpmdo modelNeedsResync approvalMetadataStatus pendingQueueState pendingCreation lastModifiedClientTimestamp title inc quotaStatus isOwner ind mimeType lastModifiedServerTimestamp featureBitSetModelVersion r s uc".split(
    " ",
  );
function kA() {
  Y.call(this);
}
D(kA, Vp);
function lA(a, c, e, f, g, h, k) {
  k = k === void 0 ? !1 : k;
  wp.call(this, f, h);
  this.A = a;
  this.B = e;
  this.o = h;
  this.N = V(h, "docs-eiwot");
  this.C = V(this.o, "docs-eiwotv2dl");
  this.F = V(this.o, "docs-eiwotv2");
  this.j = k || this.N || this.C || this.F ? new aA(g, "Document", this.o) : null;
  this.H = g;
}
D(lA, wp);
function mA(a, c, e, f) {
  var g = g === void 0 ? !1 : g;
  if (a.A.A)
    du(function () {
      return e([]);
    });
  else {
    var h = Yy(a.A, ["Documents"], c ? 35 : 37, f);
    nA(
      a,
      c,
      function (k) {
        $y(h);
        e(k);
      },
      h,
      g,
    );
  }
}
function oA(a, c, e) {
  a.j && dA(a.j);
  mA(a, c, function (f) {
    f.length == 1 ? e(f[0]) : e(null);
  });
}
function nA(a, c, e, f, g) {
  c
    ? Zy(Z(f, "Documents").get(c), function (h) {
        (h = h.target.result) ? (a.j && eA(a.j, h), e([pA(a, h)])) : e([]);
      })
    : nz(
        f,
        "Documents",
        function (h) {
          if (g && h === null) return (bx(a.H, Error("oc")), null);
          if (h === null) throw new dz("Received unexpected null document from localstore");
          return pA(a, h);
        },
        e,
      );
}
function pA(a, c) {
  if (c.hpmdo) return null;
  var e = new Go(c.id, c.documentType, !1, a.o);
  X(e, "title", c.title);
  X(e, "lastSyncedTimestamp", c.lastSyncedTimestamp);
  Ho(e, c.jobset);
  Bm(e, "isFastTrack", !!c.isFastTrack);
  X(e, "lastModifiedServerTimestamp", c.lastModifiedServerTimestamp);
  X(e, "lastColdStartedTimestamp", c.lastColdStartedTimestamp);
  X(e, "lastWarmStartedTimestamp", c.lastWarmStartedTimestamp);
  var f = c.acl;
  for (h in f) Im(e, "acl", h, Ph(f[h]));
  f = c.acjf;
  for (var g in f) {
    var h = Nm(f[g]);
    Jo(e, g, h);
  }
  X(e, "docosKeyData", c.docosKeyData || null);
  Bm(e, "inc", !!c.inc);
  g = c.docCreationTimestamp;
  g != null && X(e, "docCreationTimestamp", g);
  g = c.lastModifiedClientTimestamp;
  g != null && Ko(e, g);
  if ((g = c.startupHints)) for (var k in g) Im(e, "startupHints", k, g[k]);
  (k = c.ic) && No(e, k);
  Bm(e, "hpmdo", !!c.hpmdo);
  Bm(e, "ips", !!c.ips);
  Bm(e, "ip", !!c.ip);
  Bm(e, "pendingCreation", !!c.pendingCreation);
  k = c.fact;
  k != null && X(e, "fact", k);
  Bm(e, "modelNeedsResync", !!c.modelNeedsResync);
  Bm(e, "ind", !!c.ind);
  Bm(e, "isd", !!c.isd);
  Bm(e, "ist", !!c.ist);
  k = c.embeddedDrawingState;
  k != null && Oo(e, k);
  Bm(e, "ende", !!c.ende);
  k = c.mimeType;
  k != null && X(e, "mimeType", k);
  Bm(e, "ibup", !!c.ibup);
  k = c.modelVersion;
  k != null && X(e, "modelVersion", k);
  k = c.featureVersion;
  k != null && X(e, "featureVersion", k);
  k = c.featureBitSetModelVersion;
  k != null && X(e, "featureBitSetModelVersion", k);
  k = c.featureBitSetBase64String;
  k != null && X(e, "featureBitSetBase64String", k);
  k = c.rev;
  k != null && ((g = c.rai), g != null ? (g = g ? new Xo(g[0]) : null) : (g = null), Io(e, k, g));
  k = c.lsst;
  k != null && X(e, "lsst", k);
  k = c.lss;
  k != null && Bm(e, "lss", !!k);
  k = c.lsft;
  k != null && X(e, "lsft", k);
  k = c.odocid;
  k != null && X(e, "odocid", k);
  k = c.relevancyRank;
  k != null && X(e, "relevancyRank", k);
  k = c.lastServerSnapshotTimestamp;
  k != null && X(e, "lastServerSnapshotTimestamp", k);
  k = c.snapshotState;
  k != null && X(e, "snapshotState", Ph(k));
  k = c.snapshotProtocolNumber;
  k !== void 0 && (nk(k == null || k >= 0, "Ga"), X(e, "snapshotProtocolNumber", k));
  k = c.snapshotVersionNumber;
  k !== void 0 && (nk(k == null || k >= 0, "Ha"), X(e, "snapshotVersionNumber", k));
  k = c.pendingQueueState;
  k != null && X(e, "pendingQueueState", Ph(k));
  k = c.fileLockedReason;
  k != null && X(e, "fileLockedReason", k);
  k = c.quotaStatus;
  k != null && X(e, "quotaStatus", Ph(k));
  k = c.isOwner;
  k != null && Bm(e, "isOwner", !!k);
  k = c.approvalMetadataStatus;
  k != null && X(e, "approvalMetadataStatus", k);
  k = c.contentLockType;
  k != null && X(e, "contentLockType", k);
  k = c.initialSyncReason;
  k == null || (ym(e, "initialSyncReason") == null && X(e, "initialSyncReason", k));
  k = c.resourceKey;
  k != null && X(e, "resourceKey", k);
  k = c.initialPinSourceApp;
  k != null && X(e, "initialPinSourceApp", k);
  k = c.chaptersRolloutTimestamp;
  k != null && X(e, "chaptersRolloutTimestamp", k);
  c = c.externalityState;
  c != null && X(e, "externalityState", c == null ? null : Ph(c));
  if (!e || e.getType() == "trix" || e.getType() == "syncstats") return null;
  if (!a.Mc[e.getType()])
    throw (
      (a = Error("pc`" + e.getType())),
      pl(a, {
        localStoreDoc_hasTitle: !!zm(e, "title"),
        localStoreDoc_id: e.V(),
        localStoreDoc_isCreated: (!0 !== Am(e, "inc")).toString(),
        localStoreDoc_lastModifiedClientTimestamp: xm(e, "lastModifiedClientTimestamp").toString(),
        localStoreDoc_lastModifiedServerTimestamp: xm(e, "lastModifiedServerTimestamp").toString(),
        localStoreDoc_lastSyncedTimestamp: xm(e, "lastSyncedTimestamp").toString(),
        localStoreDoc_revision: ym(e, "rev").toString(),
      })
    );
  e.v = !1;
  return e;
}
lA.prototype.ja = function (a) {
  if (!this.ba(a)) throw Error("qc`" + a.getType());
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
lA.prototype.fa = function (a, c, e) {
  var f = Z(c, "Documents");
  switch (a.getType()) {
    case "update-record":
      a.o
        ? ((a = a.j),
          f.add(a),
          (this.F || this.C) && this.j && ((f = this.j), eA(f, a), (f.I = !0)),
          bz(e))
        : ((c = this.j) == null
            ? (c = 0)
            : c.j != null
              ? V(c.B, "docs-eiwotv2") || (V(c.B, "docs-eiwot") && !c.I)
                ? (c = !0)
                : (V(c.B, "docs-eiwotv2dl"), (c = !1))
              : (c = !1),
          c
            ? (fA(this.j, a.j, qA), az(f, this.j.j), bz(e))
            : (this.j &&
                this.j.j == null &&
                ((c = this.j),
                c.v != null &&
                  c.N != 1 &&
                  (c.A == null || c.A < c.v) &&
                  ((c.N = !0), bx(c.F, Error("mc"), jA(c)))),
              this.j && this.j.j != null
                ? ((c = new $z(Date.now(), cA(a.j))), cz(this.B, so(a), a.j, f, e, qA, this.j, c))
                : cz(this.B, so(a), a.j, f, e, qA)));
      break;
    case "delete-record":
      rA(this, a, c, e);
      break;
    default:
      this.Oa(a.D).fa(a, c, e);
  }
};
function rA(a, c, e, f) {
  c.A
    ? a.v(c, e, f)
    : sA(so(c), e, function (g) {
        g ? e.abort(new To(5, "Pending changes found")) : a.v(c, e, f);
      });
}
function sA(a, c, e) {
  Zy(fz(Z(c, "PendingQueueCommands"), [a], [a, []]), function (f) {
    f.target.result ? e(!0) : tA(a, c, e);
  });
}
function tA(a, c, e) {
  Zy(hz(Z(c, "Comments"), "StateIndex").get([2, a]), function (f) {
    e(!!f.target.result);
  });
}
lA.prototype.v = function (a, c, e) {
  a = so(a);
  var f = Z(c, "DocumentCommands");
  lz(f, [a], [a, []]);
  f = Z(c, "PendingQueueCommands");
  lz(f, [a], [a, []]);
  f = Z(c, "PendingQueues");
  lz(f, a);
  f = Z(c, "Documents");
  lz(f, a);
  f = Z(c, "DocumentLocks");
  lz(f, [a]);
  f = Z(c, "Comments");
  lz(f, [a], [a, []]);
  f = Z(c, "DocumentEntities");
  lz(f, [a], [a, []]);
  f = Kz(c.N);
  uA(c, "nonsnapshottedocumentids", [a], f);
  f = Kz(c.N);
  uA(c, "missingdocosdocumentids", [a], f);
  bz(e);
};
var qA =
  "approvalMetadataStatus contentLockType externalityState initialPinSourceApp lastModifiedClientTimestamp lastWarmStartedTimestamp quotaStatus relevancyRank rev rai snapshotProtocolNumber snapshotVersionNumber odocid".split(
    " ",
  );
function vA() {}
vA.prototype.j = function (a, c, e, f, g, h, k) {
  return new lA(a, c, e, f, g, h, k === void 0 ? !1 : k);
};
function wA(a, c, e, f, g) {
  xp.call(this, e, g);
  this.j = a;
  this.o = f;
}
D(wA, xp);
function ks(a, c, e, f) {
  var g = Yy(a.j, ["NewDocumentIds"], 43, f, !0),
    h = Z(g, "NewDocumentIds").get(c),
    k = f || a.j.o;
  Zy(h, function (l) {
    return xA(c, g, e, k, l);
  });
}
function xA(a, c, e, f, g) {
  if ((g = g.target.result) && g.documentIds && g.documentIds.length != 0) {
    f = g.documentIds;
    var h = f.pop();
    a = yA(a, f);
    az(Z(c, "NewDocumentIds"), a);
    Qz(c, function () {
      e(h);
    });
  } else f(new To(10, "No document IDs in storage."));
}
function yA(a, c) {
  var e = {};
  e.dtKey = a;
  e.documentIds = c;
  return e;
}
function hs(a, c, e, f) {
  var g = Yy(a.j, ["ApplicationMetadata"], 45, f);
  Zy(Z(g, "ApplicationMetadata").get(c), function (h) {
    $y(g);
    (h = h.target.result) ? e(zA(a, h)) : e(null);
  });
}
function AA(a, c, e) {
  e = Yy(a.j, ["ApplicationMetadata"], 46, e);
  nz(
    e,
    "ApplicationMetadata",
    function (f) {
      return zA(a, f);
    },
    c,
    void 0,
    void 0,
    void 0,
    void 0,
    !0,
  );
}
function zA(a, c) {
  var e = c.dt;
  if (e == null) throw Error("rc");
  var f = new Zo(e, !1, a.na);
  a = a.Oa(e);
  e = c.jobset;
  e != null && X(f, "jobset", e);
  e = c.ic;
  e != null && ((a = a.kd(e)), (f.C = a.slice(0)), (f.o = !0));
  (a = c.docosKeyData) && X(f, "docosKeyData", a);
  c = c.version;
  X(f, "version", Ph(c !== void 0 ? c : 0));
  f.v = !1;
  return f;
}
wA.prototype.ja = function (a) {
  if (!this.ba(a)) throw Error("qc`" + a.getType());
  return ["ApplicationMetadata"];
};
wA.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-application-metadata":
      this.Oa(so(a));
      var f = a.j;
      if (a.A) {
        if (a.A) var g = a.A;
        else throw ph("Pa").L;
        for (var h = [], k = 0; k < g.length; k++) h.push(Rm(g[k]));
        f.ic = h;
      }
      c = Z(c, "ApplicationMetadata");
      a.o ? (az(c, f), bz(e)) : cz(this.o, so(a), f, c, e);
      break;
    default:
      throw Error("sc`" + a.getType());
  }
};
function BA(a, c, e) {
  Y.call(this);
  this.j = e;
}
D(BA, zp);
BA.prototype.ja = function () {
  return ["DocumentEntities"];
};
BA.prototype.fa = function (a, c, e) {
  c = Z(c, "DocumentEntities");
  switch (a.getType()) {
    case "update-record":
      if (a.o) {
        var f = {};
        f.deKey = so(a);
        f.data = a.j.data;
        az(c, f);
        bz(e);
      } else ((f = {}), (f.data = a.j.data), (a = so(a)), cz(this.j, a, f, c, e));
      break;
    case "delete-record":
      lz(c, so(a));
      bz(e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function CA(a, c, e, f) {
  this.o = a;
  this.A = c;
  this.j = e;
  this.v = f;
}
function DA(a) {
  Y.call(this);
  this.j = a;
}
D(DA, Ap);
A = DA.prototype;
A.Bc = function (a, c, e) {
  this.j.Bc(a, c, e);
};
A.nd = function () {
  this.j.nd();
};
A.ja = function () {
  return ["DocumentLocks"];
};
A.fa = function (a, c, e) {
  switch (a.getType()) {
    case "document-lock":
      switch (a.B) {
        case 2:
          EA(this.j, a.A, c, e);
          break;
        case 1:
          FA(this.j, a.A, c, e);
      }
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
A.P = function () {
  Ap.prototype.P.call(this);
  this.j.dispose();
};
function GA() {}
function HA() {
  this.j = {};
}
function IA(a, c) {
  a.j[c] || (a.j[c] = new JA());
  return a.j[c];
}
function JA() {
  this.v = null;
  this.B = !1;
  this.A = this.o = this.j = this.C = this.D = null;
}
function KA(a, c, e, f, g, h, k) {
  U.call(this);
  var l = this;
  this.B = a;
  this.v = c;
  this.C = e;
  this.D = g;
  this.X = h || this.C.o;
  this.H = 0;
  this.M = f;
  this.T = new mo();
  Ul(this, this.T);
  no(this.T, e.v, function () {
    l.nd();
  });
  this.O = new ju(this);
  this.F = new jo();
  Ul(this, this.F);
  this.o = V(this.D, "docs-offline-ebsml") ? new HA() : null;
  this.U = this.J = null;
  this.R = !1;
  this.j = this.K = null;
  this.A = k;
}
D(KA, U);
KA.prototype.Bc = function (a, c, e) {
  I.navigator.locks ? LA(this, a, c, e) : MA(this, a, c, e);
};
function LA(a, c, e, f) {
  function g(l) {
    h = !0;
    if (a.A && (NA(a, l), a.A))
      switch (l) {
        case 1:
          a.A.j(1);
          break;
        case 2:
          a.A.j(2);
          break;
        case 3:
          a.A.j(3);
          break;
        case 4:
          a.A.j(4);
          break;
        default:
          a.A.j(0);
      }
    if (a.o) {
      var p = IA(a.o, c);
      p.j = Date.now();
      p.o = l;
    }
    e(l);
  }
  a.o && (IA(a.o, c).v = Date.now());
  var h = !1,
    k = !1;
  a.S = !1;
  a.U = I.navigator.locks
    .request("GoogleDocs:document:" + c, { ifAvailable: !0 }, function (l) {
      if (!l || a.S) return Promise.resolve(2);
      a.v != 0 && (a.R = !0);
      a.o && (IA(a.o, c).B = !0);
      return new Promise(function (p, q) {
        var r = OA(
          a,
          function () {
            p(4);
          },
          function (w) {
            k = !0;
            q(w);
          },
        );
        a.F.dispatchEvent(null);
        PA(a, c, r, p);
      }).then(function (p) {
        if (a.v == 0) return p;
        if (p != 1) g(p);
        else {
          var q = Fj();
          a.J = q.resolve;
          g(p);
          return q.promise;
        }
      });
    })
    .then(
      function (l) {
        h ? a.K || QA(a, "databaseLockNotAcquired") : (QA(a, "transientRelease"), g(l));
      },
      cx(
        a.M,
        function (l) {
          QA(a, "acquisitionRejected");
          if (k) {
            if (a.o) {
              var p = IA(a.o, c);
              p.j = Date.now();
              p.o = -1;
            }
            f(l);
          } else throw pl(l, { "docs-origin-class": "docs.localstore.idb.LockManager" });
        },
        a,
      ),
    );
}
function NA(a, c) {
  I.navigator.locks &&
    I.navigator.locks.query().then(function (e) {
      a.A.o(e.held.length - (c == 1 ? 1 : 0));
    });
}
function MA(a, c, e, f) {
  var g = OA(
    a,
    function () {
      e(4);
    },
    f,
  );
  RA(
    a,
    c,
    g,
    function (h, k) {
      h == "unavailable" && SA(a, k, "acquireDocumentLock");
      h == "available" || h == "expiredOtherSid"
        ? (a.F.dispatchEvent(null),
          TA(a, c, g, k, function () {
            Qz(g, function () {
              UA(a, c);
              e(1);
            });
          }))
        : ((g.O = null), e(2));
    },
    f,
  );
}
function OA(a, c, e) {
  return Yy(a.C, ["DocumentLocks"], 54, e, !0, void 0, sm(a.D, "docs-localstore-ilat"), c, 29027);
}
function UA(a, c) {
  if (a.j) throw Error("tc");
  a.Aa() ||
    a.v == 0 ||
    ((a.j = new cu(Math.max(a.v - 1e4, 0))),
    lu(a.O, a.j, "tick", function () {
      VA(a, c, 0);
    }),
    a.j.start());
}
function FA(a, c, e, f) {
  RA(a, c, e, function (g, h) {
    if (g == "unavailable") {
      SA(a, h, "ensureDocumentLockAvailable");
      var k = new To(2, "Lock not available", null, e.M);
      h = WA(a, h, "ensureDocumentLockAvailable");
      if (a.o) {
        var l = a.o;
        if (l.j[c]) {
          l = l.j[c];
          var p = {};
          p.lastAcquisitionAttemptedTime = l.v;
          p.webLockHasBeenAcquiredForDoc = l.B;
          p.lastWebLockCheckTime = l.D;
          p.lastWebLockCheckAvailable = l.C;
          p.lastLockAcquisitionCompletedTime = l.j;
          p.lastLockAcquisitionResult = l.o;
          p.lastLockWrittenTimeMs = l.A;
          l = p;
        } else l = {};
        Object.assign(h, l);
      }
      h.currentLockSession = a.B;
      h.lockState = g;
      bm(k.A, h);
      pl(k.L, h);
      e.abort(k);
    } else bz(f);
  });
}
function EA(a, c, e, f) {
  if (I.navigator.locks) XA(a, c, e, f);
  else {
    a.j && a.j.stop();
    var g = function () {
      Sl(a.j);
      a.j = null;
      e.abort(new To(2, "Lock could not be refreshed"));
    };
    YA(
      a,
      c,
      e,
      function (h) {
        h && h.j == a.B
          ? TA(
              a,
              c,
              e,
              h,
              function () {
                a.j && a.j.start();
                bz(f);
              },
              g,
            )
          : (SA(a, h, "refreshDocumentLock"), g());
      },
      g,
    );
  }
}
function XA(a, c, e, f) {
  YA(
    a,
    c,
    e,
    function (g) {
      g && g.j == a.B
        ? bz(f)
        : (SA(a, g, "ensureDocumentLockOwner"),
          e.abort(new To(2, "Lock not available: session is not the current lock-holder")));
    },
    function (g) {
      e.abort(g);
    },
  );
}
function YA(a, c, e, f, g) {
  c = Z(e, "DocumentLocks").get([c]);
  Zy(c, function (h) {
    a.Aa() || ((h = h.target.result), f(h ? new CA(h.e, h.dlKey[0], h.sId, h.cId || null) : null));
  });
  g && xz(c, tj(g));
}
function RA(a, c, e, f, g) {
  YA(
    a,
    c,
    e,
    function (h) {
      if (h) {
        var k = a.B;
        var l = a.v == 0;
        var p = V(a.D, "docs-offline-ebsml");
        p = p === void 0 ? !1 : p;
        var q = Date.now();
        l =
          h.j == k
            ? "available"
            : (k = window.localStorage) && k.getItem("dcl_" + h.j)
              ? "available"
              : (p && h.o == 0 ? 0 : h.o + (l ? 6e4 : 0) <= q || h.o > q + 36e4)
                ? "expiredOtherSid"
                : "unavailable";
      } else l = "available";
      f(l, h);
    },
    g,
  );
}
function SA(a, c, e) {
  if (!(a.v <= 0)) {
    var f = WA(a, c, e),
      g = "IndexedDB document lock not available";
    c
      ? I.navigator.locks &&
        e == "acquireDocumentLock" &&
        (g = "IndexedDB document lock not available after Web Locks API fallback")
      : (g = "IndexedDB document lock not available because the lock does not exist");
    a.M.info(Error(g), f);
  }
}
function WA(a, c, e) {
  var f = Date.now(),
    g = {};
  g.lockReadReason = e;
  g.lockDuration = a.v;
  a.H && (g.lastWrittenValidUntil = a.H - f);
  g.webLocksApiAvailable = !!I.navigator.locks;
  c &&
    ((g.lockHoldingSessionId = c.j),
    (g.validUntil = c.o - f),
    I.navigator.locks &&
      ((c = (e = window.localStorage) && e.getItem("dcl_" + c.j)),
      (g.lockReleased = !!c),
      (g.webLockHasBeenAcquired = a.R),
      (g.webLockReleaseReason = a.K)));
  return g;
}
function QA(a, c) {
  a.v != 0 && (a.K = c);
}
function TA(a, c, e, f, g, h) {
  var k = Date.now(),
    l = 0;
  f && a.B == f.j && (l = f.o);
  f = Math.min(Math.max(k + a.v, l), k + 6e4);
  a.H = f;
  ZA(a, c, e, f, g, h);
}
function PA(a, c, e, f) {
  ZA(a, c, e, 0, function () {
    Qz(e, function () {
      a.o && (IA(a.o, c).A = Date.now());
      f(1);
    });
  });
}
function ZA(a, c, e, f, g, h) {
  e = Z(e, "DocumentLocks");
  a = new CA(f, c, a.B, null);
  c = {};
  c.e = a.o;
  c.dlKey = [a.A];
  c.sId = a.j;
  c.cId = a.v;
  e = az(e, c);
  Zy(e, tj(g));
  h && xz(e, tj(h));
}
function VA(a, c, e) {
  var f = Yy(
      a.C,
      ["DocumentLocks"],
      56,
      function (h) {
        a.Aa() || (h.type == 2 || e >= 2 ? (Sl(a.j), (a.j = null), a.X(h)) : VA(a, c, e + 1));
      },
      !0,
    ),
    g = Kz(f.N);
  EA(a, c, f, g);
}
KA.prototype.nd = function () {
  if (I.navigator.locks)
    ((this.S = !0), this.J && (this.J(), QA(this, "releaseAllLocks")), this.U || Promise.resolve());
  else {
    Sl(this.j);
    this.j = null;
    var a = window.localStorage;
    if (a)
      try {
        a.setItem("dcl_" + this.B, String(Date.now()));
      } catch (f) {
        for (var c = 0, e = 0; e < a.length; e++) cb(a.key(e), "dcl_") && c++;
        throw pl(f, { keysTotal: String(a.length), locksTotal: String(c) });
      }
    Promise.resolve();
  }
};
KA.prototype.P = function () {
  this.O.dispose();
  Sl(this.j);
  this.j = null;
  U.prototype.P.call(this);
};
function $A() {
  Y.call(this);
}
D($A, Mp);
$A.prototype.ja = function () {
  return ["Impressions"];
};
$A.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      if (a.o) {
        c = Z(c, "Impressions");
        a = a.j;
        var f = {};
        f.iKey = [a.di || "", a.ibt];
        f.dt = a.dt;
        f.iba = a.iba;
        az(c, f);
        bz(e);
      } else throw Error("uc");
      break;
    case "delete-record":
      lz(Z(c, "Impressions"), so(a));
      bz(e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function aB() {
  Y.call(this);
}
D(aB, Np);
function bB(a, c) {
  Bq.call(this, c);
}
D(bB, Bq);
bB.prototype.Hc = function (a) {
  return [new er(a.o, Date.now())];
};
bB.prototype.ja = function () {
  return ["ProfileData"];
};
bB.prototype.fa = function (a, c, e) {
  if (a.getType() == "update-pinned-docs") cB(this, a, c, e);
  else throw Error("Nb`" + a.getType());
};
function cB(a, c, e, f) {
  var g = Z(e, "ProfileData");
  Zy(g.get("pinneddocuments"), function (h) {
    var k = h.target.result;
    if (k) {
      if (k.dataType != "pinneddocuments") throw Error("Mb");
      h = new zq(!1, a.na);
      Dm(h, "pinnedDocs", k.pinnedDocs);
      k = k.imt;
      k != null && Dm(h, "imt", k);
      h.v = !1;
    } else h = new zq(!0, a.na);
    k = h;
    dB(c, k);
    h = { dataType: "pinneddocuments" };
    h.pinnedDocs = Aq(k);
    k = xm(k, "imt");
    k !== null && (h.imt = k);
    az(g, h);
    bz(f);
  });
}
function dB(a, c) {
  var e = a.C,
    f = a.A,
    g = Aq(c);
  e.forEach(function (h) {
    if (h.j === xq) {
      if (xm(c, "imt") == null) {
        X(c, "imt", f);
        var k = c.o,
          l = rq();
        l.v = null;
        l.A = null;
        if (xq == null) throw kh().L;
        l.j = xq;
        if (!l.j) throw th().L;
        var p = l.o;
        h = l.v;
        var q = l.A;
        l = l.j;
        var r = new yq();
        r.v = p;
        r.A = h;
        r.o = q;
        r.j = l;
        k.push(r);
      }
    } else if (
      ((k = h.V()),
      (p = g[k]),
      (q = (l = p == null ? void 0 : p.lrt) != null ? l : null),
      !h.o || !q || h.o == q)
    )
      switch (h.j) {
        case uq:
          h = h.A;
          q = {};
          h = ((q.ip = !0), (q.lrt = f), (q.initSource = h != null ? h : 0), q);
          p && p.ip && p.initSource != null && (h.initSource = p.initSource);
          g[k] = h;
          break;
        case vq:
          p = {};
          p = ((p.ip = !1), (p.lrt = f), p);
          g[k] = p;
          break;
        case wq:
          delete g[k];
      }
  });
  Dm(c, "pinnedDocs", g);
}
function eB(a) {
  this.j = a;
}
eB.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      e = Z(e, "ProfileData");
      a.o ? (az(e, a.j), bz()) : cz(this.j, c, a.j, e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function fB(a, c, e, f, g) {
  cq.call(this, e, new Tm(f), g);
  this.v = f;
  this.o = V(g, "docs-eiwot") || V(g, "docs-eiwotv2");
  this.j = V(g, "docs-eiwotdl") || this.o ? new aA(f, "PendingQueue", g) : null;
}
D(fB, cq);
fB.prototype.ja = function () {
  return ["PendingQueueCommands", "PendingQueues"];
};
fB.prototype.fa = function (a, c, e) {
  var f = this;
  if (a instanceof oo && !a.o) {
    var g = this.j != null ? new $z(Date.now(), cA(a.j)) : null;
    if (this.j != null)
      if (this.j.j == null) gB(this, a, c);
      else if (this.o) {
        hB(this, a, c, e, bA(this.j));
        return;
      }
    Zy(Z(c, "PendingQueues").get(so(a)), function (h) {
      h = h.target.result;
      if (!h) throw Error("wc");
      f.j != null && g != null && hA(f.j, h, g);
      hB(f, a, c, e, h);
    });
  } else hB(this, a, c, e);
};
function gB(a, c, e) {
  c = { pendingQueueCap_operationType: c.getType(), pendingQueueCap_trackedOperation: Uo(e.M) };
  a.v.info(Error("vc"), c);
}
function hB(a, c, e, f, g) {
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
        I.localStorage.setItem("docs-ucb", "1");
      } catch (p) {
        h.info(Error("Vb`" + p.message));
      }
    }
  }
  switch (c.getType()) {
    case "pq-clear":
      g = g || iB(c);
      c = so(c);
      h = Z(e, "PendingQueueCommands");
      lz(h, [c], [c, []]);
      g.b = [];
      jB(a, g, e, f);
      break;
    case "pq-clear-sent":
      g = g || iB(c);
      h = g.b;
      h.length > 0 &&
        ((h = h[h.length - 1].l),
        (k = Z(e, "PendingQueueCommands")),
        (c = so(c)),
        lz(k, [c], [c, h]),
        (g.b = []));
      jB(a, g, e, f);
      break;
    case "pq-clear-sent-bundle":
      g = g || iB(c);
      h = g.b.shift().l;
      k = Z(e, "PendingQueueCommands");
      c = so(c);
      lz(k, [c], [c, h]);
      jB(a, g, e, f);
      break;
    case "pq-mark-sent":
      g = g || iB(c);
      h = c.A;
      c.C && (g.b = []);
      for (c = 0; c < h.length; c++)
        ((k = h[c]), (l = {}), (l.l = k.j), (l.s = k.sessionId), (l.r = k.o), g.b.push(l));
      jB(a, g, e, f);
      break;
    case "update-record":
      jB(a, g || iB(c), e, f);
      break;
    case "pq-write-commands":
      a = c.B;
      g = {};
      g.pqcKey = [c.C, c.A];
      g.c = a;
      az(Z(e, "PendingQueueCommands"), g);
      bz(f);
      break;
    case "pq-delete-commands":
      e = Z(e, "PendingQueueCommands");
      a = c.B;
      lz(e, [a], [a, c.A]);
      bz(f);
      break;
    default:
      throw Error("xc`" + c.getType());
  }
}
function jB(a, c, e, f) {
  a.j && eA(a.j, c);
  az(Z(e, "PendingQueues"), c);
  bz(f);
}
function iB(a) {
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
function kB() {}
function cz(a, c, e, f, g, h, k, l) {
  e ? Zy(f.get(c), Va(a.j, a, f, e, h || [], g, k || null, l || null)) : bz(g);
}
kB.prototype.j = function (a, c, e, f, g, h, k) {
  k = k.target.result;
  g != null && h != null && ((h.v = Date.now()), hA(g, k, h));
  if (k !== void 0) {
    for (var l in c) ((h = c[l]), Lb(e, l) ? (k[l] = h != null ? h : null) : (k[l] = h));
    az(a, k);
    bz(f);
    g != null && fA(g, c, e);
  } else throw Error("yc");
};
function uA(a, c, e, f) {
  lB(
    c,
    function (g) {
      for (var h = 0; h < e.length; h++) Mb(g, e[h]);
      h = {};
      h.dataType = c;
      h.documentIds = g;
      az(Z(a, "ProfileData"), h);
      bz(f);
    },
    a,
  );
}
function lB(a, c, e) {
  Zy(Z(e, "ProfileData").get(a), function (f) {
    f = f.target.result;
    c(f && f.documentIds ? f.documentIds : []);
  });
}
function mB(a, c, e, f, g) {
  cr.call(this, g);
  this.j = a;
  this.v = e;
  this.o = f;
}
D(mB, cr);
function nB(a, c, e) {
  if (a.j.A) du(Wa(c, []));
  else if (Lb(a.j.j.objectStoreNames, "Users")) {
    e = Yy(a.j, ["Users"], 71, e, !1, void 0, void 0, void 0, 1337522, !0);
    var f = [];
    Zy(Z(e, "Users").get(pz.lowerBound(-Infinity)), function (g) {
      if ((g = g.target.result)) {
        var h = new $q(g.id, !1, a.na);
        X(h, "emailAddress", g.emailAddress);
        X(h, "locale", g.locale);
        g.fastTrack != null && Bm(h, "fastTrack", !!g.fastTrack);
        g.internal != null && Bm(h, "internal", !!g.internal);
        g.optInReasons != null && X(h, "optInReasons", g.optInReasons);
        g.optInTime != null && X(h, "optInTime", g.optInTime);
        h.v = !1;
        f = [h];
      }
    });
    Qz(e, function () {
      return c(f);
    });
  } else (a.o.log(Error("zc")), du(Wa(c, [])));
}
mB.prototype.ja = function (a) {
  if (!this.ba(a)) throw Error("qc`" + a.getType());
  return ["Users"];
};
mB.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Z(c, "Users");
      a.o ? (c.add(a.j), bz(e)) : cz(this.v, so(a), a.j, c, e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function oB(a, c, e, f, g, h, k, l, p, q) {
  q = q === void 0 ? !1 : q;
  Dq.call(this);
  var r = this;
  this.S = f;
  this.Va = new ju(this);
  this.A = new ez();
  this.v = h;
  this.o = new kB();
  this.T = new mo();
  Ok(this, this.T);
  this.j = a;
  no(this.T, this.j.v, function (w) {
    r.ha.dispatchEvent(new Cq(w.newVersion));
  });
  this.Wa = q || !1;
  this.R = c;
  this.F = new fB(this.j, this.A, this.R, this.S, h);
  Eq(this, this.F);
  this.B = pB(this, this.R, k);
  Eq(this, this.B);
  this.J = new DA(e);
  this.O = new mB(a, this.A, this.o, f, h);
  Eq(this, this.O);
  this.Xa = new Yz(a);
}
D(oB, Dq);
oB.prototype.Cb = ba("O");
function pB(a, c, e) {
  e = e === void 0 ? new vA() : e;
  return e.j(a.j, a.A, a.o, c, a.S, a.v, a.Wa);
}
function Up(a, c, e, f, g, h, k) {
  k = k === void 0 ? !1 : k;
  if (a.j.A) du(f);
  else {
    for (var l = {}, p = 0; p < c.length; p++) {
      var q = c[p];
      q = qB(a, q).ja(q);
      for (var r = 0; r < q.length; r++) l[q[r]] = !0;
    }
    p = "Error writing records (" + Uo(e) + ")";
    l = Ns(l);
    q = V(a.v, "docs-eaiturd") || (V(a.v, "docs-eirdfi") && Pb(l, ["Impressions"])) ? !0 : !1;
    e = Yy(a.j, l, e, g, !0, p, void 0, void 0, h, k, q);
    Qz(e, f);
    f = [];
    for (g = 0; g < c.length; g++) f.push(Kz(e.N));
    for (g = 0; g < c.length; g++) ((h = c[g]), qB(a, h).fa(h, e, f[g]));
  }
}
function qB(a, c) {
  if (po(c)) {
    c = c.B;
    a = c in a.C ? a.C[c] : null;
    if (!a) throw Error("Ac`" + c);
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
    return a.F;
  if (c == "document-lock") return a.J;
  if (c == "append-commands" || c == "write-trix") return a.B;
  if (c == "update-application-metadata") {
    if ((a = a.Ua())) return a;
  } else if (c == "append-template-commands") {
    if ((a = a.Ed())) return a;
  } else if (c == "update-pinned-docs") return a.Bd();
  throw Error("Bc`" + c);
}
oB.prototype.initialize = function (a, c) {
  var e = this,
    f = this.Bb();
  if (Vz(this.j) >= f) throw Error("Cc");
  Wz(
    this.j,
    f,
    function (g) {
      return rB(e, c, g);
    },
    oz("Error initializing the database.", c),
    a,
  );
};
function rB(a, c, e) {
  try {
    a.yb(e);
  } catch (f) {
    du(function () {
      return c(new To(1, "Failed to initialize database.", f));
    });
  }
}
function sB(a, c, e) {
  Wz(
    a.j,
    a.Bb(),
    function (f) {
      return tB(a, e, f);
    },
    oz("Error upgrading the database.", e),
    c,
  );
}
function tB(a, c, e) {
  try {
    a.Jc(e);
  } catch (f) {
    du(function () {
      return c(new To(1, "Failed to upgrade database.", f));
    });
  }
}
oB.prototype.P = function () {
  Tl(this.Va, this.J, this.F, this.B, this.O, this.Xa);
  Dq.prototype.P.call(this);
};
function uB(a, c, e, f) {
  Y.call(this);
  this.j = a;
  this.v = f;
  this.o = e;
}
D(uB, Mq);
function Oq(a, c, e) {
  var f = Yy(a.j, ["ProfileData"], 63, e),
    g = [];
  Zy(fz(Z(f, "ProfileData"), ["synchints"], ["synchints", []]), function (h) {
    (h = h.target.result) ? (g.push(vB(a, h.value)), h.continue()) : ($y(f), c(g));
  });
}
uB.prototype.ja = function () {
  return ["ProfileData"];
};
uB.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Z(c, "ProfileData");
      a.o ? (az(c, a.j), bz(e)) : cz(this.o, so(a), a.j, c, e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function vB(a, c) {
  var e = c.sourceApp;
  if (!Pb(c.dataType, ["synchints", "" + e])) throw Error("Mb");
  var f = c.docIds,
    g = c.lastUpdatedTimestamp;
  c = c.docIdentifiers;
  a = new Iq(!1, e, a.v);
  c && c.length > 0
    ? Jq(
        a,
        c.map(function (h) {
          return Hq(h);
        }),
      )
    : f && f.length > 0 && Kq(a, f);
  X(a, "lastUpdatedTimestamp", g);
  a.v = !1;
  return a;
}
function wB() {
  Y.call(this);
}
D(wB, Pq);
wB.prototype.ja = function () {
  return ["SyncObjects"];
};
wB.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Z(c, "SyncObjects");
      if (a.o) az(c, a.j);
      else throw Error("Dc");
      bz(e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function xB(a, c, e) {
  Vq.call(this, e);
  this.j = a;
  this.o = c;
}
D(xB, Vq);
function Xq(a, c, e) {
  var f = Yy(a.j, ["ProfileData"], 32, e);
  Zy(Z(f, "ProfileData").get("syncstats"), function (g) {
    $y(f);
    (g = g.target.result) ? c(yB(a, g)) : c(null);
  });
}
function yB(a, c) {
  if (c.dataType != "syncstats") throw Error("Mb");
  a = new Qq(
    !1,
    a.na,
    ws(function () {
      return Date.now();
    }),
  );
  var e = c.docsToDelete;
  e != null && X(a, "docsToDelete", e);
  e = c.enabledMimeTypes;
  e != null && X(a, "enabledMimeTypes", e);
  e = c.lastLocalStoreProfileTimestamp;
  e != null && X(a, "lastLocalStoreProfileTimestamp", e);
  e = c.lastSyncTimestamp;
  e != null && X(a, "lastSyncTimestamp", e);
  e = c.syncStartTimestamp;
  e != null && X(a, "syncStartTimestamp", e);
  e = c.syncVersion;
  e != null && X(a, "syncVersion", e);
  e = c.failedToSyncDocs;
  if (e != null)
    for (var f in e) {
      var g = e[f],
        h = g.lastSyncErrorType;
      Tq(
        a,
        f,
        g.count,
        g.modelSyncFailCount || 0,
        g.serverTime,
        h != null ? Ph(h) : null,
        g.nextSyncTimestampMillis || Date.now(),
        g.backoffRetryConsecutiveFailCount || 0,
      );
    }
  f = c.lastDailyRunTime;
  f != null && X(a, "lastDailyRunTime", f);
  f = c.maxSpaceQuota;
  f != null && X(a, "maxSpaceQuota", f);
  f = c.webfontsSyncVersion;
  f != null && X(a, "webfontsSyncVersion", f);
  f = c.lastStartedSyncDocs;
  if (f != null) for (e = 0; e < f.length; e++) Rq(a, f[e].documentId, f[e].timestamp);
  f = c.relevantDocuments;
  f != null && X(a, "relevantDocuments", f);
  c = c.backgroundSyncDenylist;
  if (c != null)
    for (var k in c)
      ((f = c[k]),
        (f = hp(
          gp(
            fp(
              ep(
                dp(cp(bp(k), f.retryCount || 0), f.nextSyncTimestampMillis || Date.now()),
                f.firstFailTimestampMillis,
              ),
              f.lastFailTimestampMillis,
            ),
            f.documentDiskSize,
          ),
        )),
        Sq(a, f));
  a.v = !1;
  return a;
}
xB.prototype.ja = function () {
  return ["ProfileData"];
};
xB.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "update-record":
      c = Z(c, "ProfileData");
      a.o ? (az(c, a.j), bz(e)) : cz(this.o, "syncstats", a.j, c, e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function zB() {
  Y.call(this);
}
D(zB, dr);
zB.prototype.ja = function () {
  return ["FontMetadata"];
};
zB.prototype.fa = function (a, c, e) {
  c = Z(c, "FontMetadata");
  switch (a.getType()) {
    case "update-record":
      if (a.o) (az(c, a.j), bz(e));
      else throw Error("Ec");
      break;
    case "delete-record":
      lz(c, so(a));
      bz(e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function AB(a, c, e, f, g, h, k, l, p, q) {
  oB.call(this, a, c, e, f, g, h, k, l, p, q === void 0 ? !1 : q);
  a = this.j;
  e = this.A;
  this.X = new BA(a, e, this.o, this.v);
  Eq(this, this.X);
  this.Fa = new zB(a, e, this.v);
  Eq(this, this.Fa);
  this.va = new wB(a, e, this.v);
  Eq(this, this.va);
  this.ab = new aB(a);
  this.bb = new kA(a, this.o, h);
  this.M = new xB(a, this.o, this.v);
  Eq(this, this.M);
  this.N = new Wy(a, this.o, this.v);
  Eq(this, this.N);
  this.ma = new uB(a, e, this.o, h);
  Eq(this, this.ma);
  this.K = new bB(new eB(this.o), h);
  Eq(this, this.K);
  this.U = new Zz(this.j, this.A, this.o, this.v);
  Eq(this, this.U);
  this.H = new wA(a, e, c, this.o, this.v);
  Eq(this, this.H);
  this.la = new $A(a, e, h);
  Eq(this, this.la);
}
D(AB, oB);
A = AB.prototype;
A.Bb = x(6);
A.Ua = ba("H");
A.Dd = ba("M");
A.dc = ba("N");
A.Cd = ba("ma");
A.Bd = ba("K");
A.Ec = x(!1);
A.Jc = u();
A.yb = function (a) {
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
A.P = function () {
  Tl(this.X, this.Fa, this.va, this.ab, this.bb, this.M, this.N, this.U, this.H, this.la, this.K);
  oB.prototype.P.call(this);
};
"ApplicationMetadata Comments DocumentCommandsMetadataStaging DocumentCommandsMetadata DocumentCommandsStaging DocumentCommands DocumentEntities DocumentLocks Documents FileEntities FontMetadata Impressions NewDocumentIds PendingQueueCommands PendingQueues ProfileData SyncObjects Users"
  .split(" ")
  .sort(function (a, c) {
    return a > c ? 1 : a < c ? -1 : 0;
  });
function BB(a, c, e) {
  Y.call(this);
  this.j = e;
}
D(BB, Wp);
BB.prototype.ja = function () {
  return ["BlobMetadata"];
};
BB.prototype.fa = function (a, c, e) {
  c = Z(c, "BlobMetadata");
  switch (a.getType()) {
    case "update-record":
      a.o ? (c.add(a.j), bz(e)) : cz(this.j, so(a), a.j, c, e);
      break;
    case "delete-record":
      lz(c, so(a));
      bz(e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function CB(a, c, e, f, g, h, k) {
  lA.call(this, a, c, e, f, g, h, k === void 0 ? !1 : k);
}
D(CB, lA);
CB.prototype.ja = function (a) {
  var c = lA.prototype.ja.call(this, a);
  a.getType() == "delete-record" && c.push("BlobMetadata");
  return c;
};
CB.prototype.v = function (a, c, e) {
  var f = Kz(c.N);
  lA.prototype.v.call(this, a, c, e);
  a = so(a);
  lz(Z(c, "BlobMetadata"), [a], [a, []]);
  bz(f);
};
function DB() {}
D(DB, vA);
DB.prototype.j = function (a, c, e, f, g, h, k) {
  return new CB(a, c, e, f, g, h, k === void 0 ? !1 : k);
};
function EB(a, c, e, f, g, h, k, l, p, q) {
  k = k === void 0 ? new DB() : k;
  AB.call(this, a, c, e, f, g, h, k, l, p, q === void 0 ? !1 : q);
  this.cb = new BB(this.j, this.A, this.o, h);
  Eq(this, this.cb);
}
D(EB, AB);
EB.prototype.Bb = x(7);
EB.prototype.Ec = x(!0);
EB.prototype.yb = function (a) {
  AB.prototype.yb.call(this, a);
  FB(a);
};
EB.prototype.Jc = function (a) {
  FB(a);
};
function FB(a) {
  a.db.createObjectStore("BlobMetadata", { keyPath: ["d", "p"] });
}
function GB(a, c, e, f) {
  Yq.call(this, a, c);
  new vo(c, f);
}
D(GB, Yq);
GB.prototype.fa = function (a, c, e) {
  switch (a.getType()) {
    case "append-template-commands":
      c = Z(c, "TemplateCommands");
      a.B && lz(c, [a.A], [a.A, []]);
      for (var f = a.C, g = 0; g < f.length; ++g) {
        var h = c,
          k = a.A,
          l = f[g];
        var p = l;
        if (p instanceof Fo) p = Qm(p.v);
        else throw Error("Pb`" + typeof p);
        az(h, rz(k, l.A, l.o, l.j, l.B, p).j);
      }
      bz(e);
      break;
    default:
      throw Error("Ob`" + a.getType());
  }
};
function HB(a, c, e, f) {
  Zq.call(this, e, f);
  this.j = new kB();
}
D(HB, Zq);
HB.prototype.ja = function () {
  return ["TemplateCommands", "TemplateCreationMetadata", "TemplateMetadata"];
};
HB.prototype.fa = function (a, c, e) {
  var f = a.B;
  switch (f) {
    case "templateMetadata":
      f = "TemplateMetadata";
      break;
    case "templateCreationMetadata":
      f = "TemplateCreationMetadata";
      break;
    default:
      throw Error("Fc`" + f);
  }
  f = Z(c, f);
  switch (a.getType()) {
    case "update-record":
      a.o ? (az(f, a.j), bz(e)) : cz(this.j, so(a), a.j, f, e);
      break;
    case "delete-record":
      lz(f, so(a));
      bz(e);
      break;
    case "append-template-commands":
      this.Oa(a.Ha()).fa(a, c, e);
      break;
    default:
      throw Error("Nb`" + a.getType());
  }
};
function IB(a, c, e, f, g, h, k, l, p, q, r) {
  EB.call(this, a, c, f, g, h, l, void 0, p, q, r === void 0 ? !1 : r);
  a = ["kix", "punch", "ritz"];
  c = this.j;
  if (!e) for (e = {}, f = new ls(), g = 0; g < a.length; g++) e[a[g]] = new GB(a[g], f, c, k);
  this.wa = new HB(c, this.A, e, l);
  Eq(this, this.wa);
}
D(IB, EB);
A = IB.prototype;
A.Bb = x(8);
A.Ed = ba("wa");
A.Ec = x(!0);
A.yb = function (a) {
  EB.prototype.yb.call(this, a);
  JB(a);
};
A.Jc = function (a) {
  var c = a.db;
  Lb(c.objectStoreNames, "DocumentCommandsStaging") &&
    c.deleteObjectStore("DocumentCommandsStaging");
  Lb(c.objectStoreNames, "DocumentCommandsMetadata") &&
    c.deleteObjectStore("DocumentCommandsMetadata");
  Lb(c.objectStoreNames, "DocumentCommandsMetadataStaging") &&
    c.deleteObjectStore("DocumentCommandsMetadataStaging");
  JB(a);
};
function JB(a) {
  a = a.db;
  a.createObjectStore("TemplateMetadata", { keyPath: ["id"] });
  a.createObjectStore("TemplateCreationMetadata", { keyPath: ["id"] });
  a.createObjectStore("TemplateCommands", { keyPath: "dcKey" });
}
function KB(a) {
  var c = window.isSecureContext == void 0 ? !0 : window.isSecureContext;
  return (
    (Wb || (Xb && V(a, "docs-offline-edose"))) &&
    !(!I.indexedDB && !I.webkitIndexedDB) &&
    (!!I.BroadcastChannel || !!I.SharedWorker) &&
    c
  );
}
function LB(a, c, e, f, g, h, k, l, p, q, r, w, y, z, B, F, J) {
  z = z === void 0 ? !1 : z;
  B = B === void 0 ? null : B;
  J = J === void 0 ? !1 : J;
  U.call(this);
  this.B = a;
  this.va = c;
  this.Z = e;
  this.R = f;
  this.ha = l;
  this.U = g;
  this.H = p;
  this.S = h;
  this.ma = z;
  this.j = B;
  this.o = {};
  this.v = {};
  this.D = -1;
  this.C = new Qk();
  this.T = !1;
  this.J = k;
  this.wa = r;
  this.O = w;
  this.M = y;
  this.X = F;
  this.A = q;
  this.F = J || !1;
}
D(LB, U);
function MB(a, c) {
  var e = c.Bb();
  a.D = Math.max(a.D, e);
  a.o[e] = c;
}
LB.prototype.create = function (a, c) {
  var e = this;
  if (this.T) throw Error("Gc");
  this.T = !0;
  if (isNaN(this.U)) throw Error("Hc");
  if (this.j) NB(this, this.j);
  else {
    if (!KB(this.A)) throw Error("Ic");
    Xz(
      function (f) {
        return NB(e, f);
      },
      a,
      this.B,
      function (f) {
        pl(f.L, { databaseOpenFailure: "true" });
        Uk(e.C, f);
        OB(e, "Unable to open Docs IDB instance.", Wo(f));
      },
      this.ma,
      this.ha,
      this.H,
      this.A,
      c || void 0,
    );
  }
  return this.C;
};
function NB(a, c) {
  a.j = c;
  if (a.R)
    for (var e = a.R(c, a.H), f = 0; f < e.length; f++)
      for (var g, h = a, k = e[f], l = k.be, p = k.Ha(), q = k.Oe; q <= l; ++q)
        ((g = h.v[q]) || (g = h.v[q] = {}), (g[p] = k));
  e = new KA(a.va, a.Z, c, a.B, a.A, void 0, a.X);
  a.D == -1 &&
    (MB(a, new AB(c, a.v[6] || {}, e, a.B, a.J, a.A, void 0, a.O, a.M, a.F)),
    MB(a, new EB(c, a.v[7] || {}, e, a.B, a.J, a.A, a.wa, a.O, a.M, a.F)),
    MB(a, new IB(c, a.v[8] || {}, null, e, a.B, a.J, a.H, a.A, a.O, a.M, a.F)));
  PB(a);
}
function PB(a) {
  var c = Math.min(a.U, a.D),
    e = QB(a);
  !a.S && e <= 0
    ? RB(
        a,
        new To(4, "Schema initialization cannot be performed when schema updates are prevented."),
      )
    : !a.S || e >= c
      ? a.K()
      : SB(a, e, c)
        ? TB(a, e + 1, c, Va(a.K, a, null), function (f) {
            Uk(a.C, f);
            OB(a, "Unable to upgrade the Docs IDB database.", Wo(f));
          })
        : a.o[c].initialize(
            function () {
              return a.K();
            },
            function (f) {
              return RB(a, f);
            },
          );
}
function RB(a, c) {
  Uk(a.C, c);
  OB(a, "Unable to initialize the storage adapter.", Wo(c));
}
function SB(a, c, e) {
  for (c += 1; c <= e; ++c) if (a.o[c] == null || !a.o[c].Ec()) return !1;
  return !0;
}
function TB(a, c, e, f, g) {
  sB(a.o[c], Va(a.la, a, c, e, f, g), g);
}
LB.prototype.la = function (a, c, e, f) {
  a = QB(this);
  a == c ? e() : TB(this, a + 1, c, e, f);
};
LB.prototype.K = function () {
  var a = QB(this);
  if ((a = this.o[a])) {
    a = new Qp(a, V(this.A, "docs-eiwot") || V(this.A, "docs-eiwotv2"));
    this.j && Ok(a, this.j);
    for (var c in this.o) Ok(a, this.o[c]);
    for (var e in this.v) {
      c = this.v[e];
      for (var f in c) Ok(a, c[f]);
    }
    Sk(this.C, a);
  } else (this.B.info(Error("Jc`" + (this.j ? Vz(this.j) : -1))), Sk(this.C, null));
};
function QB(a) {
  var c = a.j ? Vz(a.j) : -1;
  c > 1 && c < 6 && a.B.info(Error("Kc`" + c));
  return c < 6 ? -1 : c;
}
function OB(a, c, e) {
  for (var f in a.o) a.o[f].dispose();
  for (var g in a.v) {
    f = a.v[g];
    for (var h in f) f[h].dispose();
  }
  a.j && ((g = a.j), (g.H = c), e && (g.M.docsDBDisposeContext_LocalStoreErrorMessage = e));
  Sl(a.j);
}
function UB(a, c) {
  c = c === void 0 ? !1 : c;
  $a.call(this, a);
  this.A = c;
}
D(UB, $a);
function VB(a, c) {
  this.j = a;
  this.o = c;
}
function WB(a, c, e, f, g, h, k, l) {
  U.call(this);
  this.B = a;
  this.C = c;
  this.o = e;
  this.H = f;
  this.J = h ? h : "DefaultLocalStoreSessionId";
  this.K = k || new ls();
  this.D = g;
  this.F = !!l;
  this.v = null;
  this.A = new mo();
  Ul(this, this.A);
  this.j = XB(this);
}
D(WB, U);
function XB(a) {
  a.j && Sl(a.j);
  var c = sm(a.o, "lssv");
  return new LB(a.B, a.J, 0, a.le.bind(a), c, !0, new GA(), a.H, a.D, a.o);
}
function YB(a) {
  if (a.v) return a.v;
  a.v = ZB(a);
  return a.v.Ta(function (c) {
    a.Rb();
    throw c;
  });
}
function Oy(a) {
  return YB(a).then(function (c) {
    return new vj(function (e, f) {
      nB(c.Cb(), e, f);
    }).then(function (e) {
      return $B(a, e) ? new VB(c, e[0]) : null;
    });
  });
}
function aC(a) {
  return YB(a).then(function (c) {
    return new vj(function (e, f) {
      nB(c.Cb(), e, f);
    }).then(function (e) {
      if (!$B(a, e)) {
        var f = {
          usersLength: e.length,
          allowNonOfflineEnabledUser: a.F,
          storedUserMatchesFlag:
            e.length == 0 ? "no users" : e[0].V() == tm(a.o, "docs-offline-lsuid"),
        };
        return Aj()
          .then(function () {
            return rx(a.o, f, a.B);
          })
          .then(function () {
            return new vj(function (g, h) {
              AA(c.j.Ua(), g, h);
            });
          })
          .Ta(function (g) {
            var h = a.B,
              k = h.info;
            if (mh(g)) g = g.L;
            else if (!(g instanceof Error)) throw ph("ga").L;
            k.call(h, g);
          })
          .then(function (g) {
            f.applicationMetadataLength = g ? g.length : null;
            throw pl(
              new UB("Failed to read LocalStore due to invalid user", !g || g.length == 0),
              f,
            );
          });
      }
      return new VB(c, e[0]);
    });
  });
}
function $B(a, c) {
  return c.length == 1 && (a.F || c[0].V() == tm(a.o, "docs-offline-lsuid"));
}
A = WB.prototype;
A.get = function () {
  return aC(this).then(function (a) {
    return a.j;
  });
};
function ZB(a) {
  return new vj(function (c, e) {
    mk(a.j.create(a.Rb.bind(a)), c, e);
  }).then(a.Be.bind(a));
}
A.Be = function (a) {
  var c = this;
  if (!a) throw Error("Lc");
  if (this.C) {
    var e = new Vy(a, this.C);
    Ul(this, e);
  }
  Rp(a);
  no(this.A, a.j.j.D, function () {
    c.Rb();
  });
  no(this.A, a.j.ha, function () {
    c.Rb();
  });
  return a;
};
A.Rb = function () {
  Sl(this.j);
  this.j = XB(this);
  this.v = null;
};
A.le = function (a) {
  var c = this.K,
    e = this.D,
    f = new sz("kix", 6, 8, c, a, e),
    g = new sz("punch", 6, 8, c, a, e),
    h = new sz("ritz", 6, 8, c, a, e);
  a = new sz("drawing", 6, 8, c, a, e);
  return [h, f, g, a];
};
A.P = function () {
  Sl(this.j);
  U.prototype.P.call(this);
};
function bC(a, c, e) {
  this.o = a;
  this.v = e;
  this.A = "";
  this.j = void 0;
  this.M = {};
  this.D = 3;
  this.B = sj;
  this.F = !1;
  this.K = rj;
  this.C = !1;
  this.I = sj;
  this.N = -1;
  this.H = !1;
}
function uy(a, c) {
  var e = [a.o];
  Nb(e, c);
  a.o = Il.apply(null, e);
}
function cC(a, c) {
  a.j = c;
  return a;
}
function vy(a, c) {
  c = Ls(c, function (e) {
    return typeof e === "string" ? e : JSON.stringify(e);
  });
  return cC(a, Hl(c));
}
function wy(a, c) {
  a.B = c;
  a.F = !1;
  return a;
}
function xy(a, c) {
  a.I = c;
  return a;
}
bC.prototype.setTimeout = function (a) {
  this.N = a;
  return this;
};
bC.prototype.withCredentials = function () {
  this.H = !0;
  return this;
};
function yy(a) {
  var c = dC(a);
  if (!a.J) throw Error("Uc`" + a.ca());
  a.J.send(c);
}
bC.prototype.validate = u();
function eC(a) {
  var c = a.A;
  tm(a.v, "docs-ucd");
  return c;
}
bC.prototype.ca = function () {
  return eC(this) + this.o;
};
function fC(a) {
  if (Array.isArray(a.j)) {
    var c = a.j;
    try {
      if (V(a.v, "docs-net-cbfd") && I.FormData) {
        for (var e = new I.FormData(), f = 0; f < c.length; f += 2) e.append(c[f], c[f + 1]);
        var g = e;
      } else g = Gl(c);
      return g;
    } catch (h) {
      if (h instanceof URIError && h.message == "URI malformed") {
        g = [];
        for (e = 1; e < c.length; e += 2) ((f = kq("" + c[e])), (g = g.concat(f)));
        c = "{" + T(g.join("; ")) + "}";
        a = a.ca().substr(0, 100);
        throw pl(h, { illegal_request_content: c, request_uri: a });
      }
      throw pl(h, { "docs-origin-class": "docs.net.AbstractRequestBuilder" });
    }
  }
  return a.j;
}
typeof Blob === "function" && Blob.prototype.hasOwnProperty("size");
function gC(a) {
  this.j = a ? Qs(a) : {};
  this.o = null;
}
gC.prototype.Ia = function () {
  return this.j.token || null;
};
function hC(a, c, e, f) {
  au.call(this);
  this.v = f ? Qs(f) : iC;
  this.o = "";
  e ||
    ((e = a.get("info_params")),
    typeof e === "string"
      ? (a = JSON.parse(e))
      : ((e = {}),
        qm(a, "info_params"),
        rm(a, "info_params") ? ((a = a.get("info_params")), (a = a != null ? a : e)) : (a = e)),
    (e = a),
    (a = Ls(e, String)),
    (f = (f = I._docs_coldstart_url) ? rs(f).resourcekey : null)
      ? (a.resourcekey = f)
      : e.resourcekey &&
        ((e = rg(vi, Ae(e.resourcekey))), (e = Df(e, 2)), e != null && (a.resourcekey = e)),
    (e = new gC(a)));
  this.j = e;
  (c = Nl((c || I).location.href, "authkey")) && jC(this, "authkey", c);
}
D(hC, au);
function jC(a, c, e) {
  var f = a.j;
  if (e) {
    if (((f.j[c] = e), f.o && (c = f.Ia()))) (f.o.qa(c), (f.o = null));
  } else delete f.j[c];
  a.dispatchEvent("l");
}
hC.prototype.Ia = function () {
  return this.j.Ia();
};
var kC = new (function () {
    this.j = {};
    this.j["X-Same-Domain"] = "1";
  })(),
  iC = Qs(kC.j);
function lC(a, c, e) {
  au.call(this);
  var f = this;
  this.v = a;
  this.C = function (g) {
    jC(f.v, "tfe", g);
  };
  this.j = null;
  this.B = new ju(this);
  lu(this.B, this.v, "l", this.D);
  if ((this.o = e))
    (Zw(this.o, "browserChannel_lastStatusCode", function () {
      return f.j ? String(f.j.C()) : "null";
    }),
      Zw(this.o, "browserChannel_currentError", function () {
        return f.j ? String(f.j.B()) : "null";
      }),
      Zw(this.o, "browserChannel_channel_id", function () {
        return f.j ? String(f.j.o()) : "null";
      }));
  e == null || V(c, "icso");
}
D(lC, au);
lC.prototype.D = function () {
  this.j && this.j.D(this.v.j.j);
};
lC.prototype.P = function () {
  this.j && !this.j.Aa() && (this.j.unsubscribe("tfe_changed", this.C), this.j.j(), this.j.I());
  this.j = null;
  Sl(this.B);
  au.prototype.P.call(this);
};
function mC(a, c) {
  U.call(this);
  this.o = [];
  this.B = a;
  (this.j = c || null) && Ul(this, this.j);
  this.v = this.A = null;
  this.j && ((this.v = new cu(500)), (this.A = new ju(this)), lu(this.A, this.v, "tick", this.C));
}
D(mC, U);
mC.prototype.reset = function () {
  this.o = [];
  this.v && this.v.stop();
};
mC.prototype.remove = function (a) {
  Mb(this.o, a);
  nC(this);
};
mC.prototype.C = function () {
  for (; this.o.length > 0 && pr(this.j); ) (qr(this.j), this.B(this.o.shift()));
  nC(this);
};
function nC(a) {
  a.o.length == 0 && a.v && a.v.stop();
}
mC.prototype.P = function () {
  Sl(this.A);
  Sl(this.v);
  U.prototype.P.call(this);
};
function oC(a, c) {
  wt.call(this, "m", a);
  this.j = c;
}
D(oC, wt);
function pC(a, c, e, f, g, h, k, l, p, q, r, w, y, z, B, F) {
  au.call(this);
  this.M = a;
  this.X = c;
  this.D = e;
  this.o = f;
  this.F = y || (e ? "POST" : "GET");
  this.H = q;
  this.J = g;
  this.B = h;
  this.K = k;
  this.R = l;
  this.U = p;
  this.C = w;
  this.S = Qs(z);
  this.Z = B;
  this.v = new Sx(gm(), F);
}
D(pC, au);
pC.prototype.ca = ba("M");
pC.prototype.send = function (a) {
  Vx(this.v);
  qC(this, a);
};
pC.prototype.reset = u();
pC.prototype.P = function () {
  this.dispatchEvent("n");
  this.reset();
  delete this.B;
  delete this.J;
  au.prototype.P.call(this);
};
function rC(a) {
  if (sC(a) && a.v != null && cb(a.v || "", ")]}'\n")) {
    try {
      var c = tC(a);
    } catch (e) {
      return null;
    }
    if (Array.isArray(c) && ((a = c[0]), Array.isArray(a) && a[0] == us.eb))
      return vs(JSON.stringify(a));
  }
  return null;
}
function uC(a) {
  a = rC(a);
  if (!a) return null;
  var c;
  return (a = (c = pf(a, xi, 10, L)) == null ? void 0 : og(c, yi)) ? a : null;
}
function vC(a, c, e, f, g, h, k, l, p, q, r, w) {
  au.call(this);
  var y = this;
  this.O = c;
  this.H = q || null;
  this.C = new hC(c, e, h, l);
  Ul(this, this.C);
  this.F = new ju(this);
  Ul(this, this.F);
  this.j = f || null;
  f && ((a = this.j), Yw(a, new Px(a.D, this.H)), lu(this.F, a, "a", this.Ae));
  this.D = r || new lC(this.C, this.O, this.j);
  Ul(this, this.D);
  this.o = g || new Vr();
  this.X = p || null;
  this.R = w || null;
  this.M = new Hx();
  Ul(this, this.M);
  this.B = [];
  this.K = [];
  this.J = new mC(function (z) {
    y.o.j.j >= 5 ||
      (y.o.j == (Sr(), Cr) && Yr(y.o, (Sr(), Dr)), nu(y.F, z, "m", y.Td), wC(z), z.send(y.C));
  }, k);
  Ul(this, this.J);
  this.v = (Sr(), Kr);
  this.Z = new jo();
  Ul(this, this.Z);
  this.S = new jo();
  Ul(this, this.S);
  this.U = new mo();
  Ul(this, this.U);
  lu(this.F, this.D, "k", this.xe);
}
D(vC, au);
function ty(a, c) {
  c = new xC(a, c, a, a.O, a.X, !1);
  c.A = a.C.o;
  return c;
}
A = vC.prototype;
A.send = function (a) {
  if (a.Aa()) this.j && this.j.log(Error("Nc"));
  else {
    wC(a);
    var c = this.B;
    Lb(c, a) || c.push(a);
    a: {
      c = this.J;
      if (c.j) {
        if (!pr(c.j) || c.o.length != 0) {
          c.o.push(a);
          c.v.start();
          break a;
        }
        qr(c.j);
      }
      c.B(a);
    }
    nu(this.F, a, "n", this.Ce);
  }
};
A.Td = function (a) {
  var c = a.target;
  wC(c);
  var e = a.j;
  e.Ma["x-restart"] == "SOON" && this.o.A.dispatchEvent(null);
  yC(this, e);
  this.j &&
    zC(e) &&
    c.o != 1 &&
    (c.ca().startsWith("/logImpressions") ||
      c.ca().startsWith("/naLogImpressions") ||
      this.j.log(Error("Qc"), AC(e)));
  if ((a = BC(e))) {
    var f = !0,
      g = !1;
    if (a.type == "e") {
      try {
        (c.J(e), CC(this, c));
      } catch (q) {
        try {
          var h = {
            XhrNetEvent_requestUri: c.ca(),
            XhrNetEvent_contentType: e.A,
            XhrNetEvent_responseType: e.B,
            XhrNetEvent_errorCode: e.j,
            XhrNetEvent_statusCode: e.o,
            XhrNetEvent_isStringResponseType: sC(e),
            XhrNetEvent_responseServerHeader: e.Ma.server || e.Ma.server,
            XhrNetEvent_mobileNativeResponseUrl:
              e.Ma.mobilenativeredirectresponseurl || "(not set)",
            XhrNetEvent_certificateChains: e.Ma.certificatechains || "(not set)",
            XhrNetEvent_responseObjectLength: (e.v || "").length,
            XhrNetEvent_responseObject: sC(e) ? DC(e.v || "") : "responseObject",
          };
        } catch (r) {
          h = { XhrNetEvent_contextObjectError: r.toString() };
        }
        var k;
        if (a.type == "e" && ((k = e.A) == null ? 0 : k.includes("text/html")) && e.o == 200) {
          a = new py("d", 5, a.j, x(null), h);
          this.j && bx(this.j, q, h, null);
          c.B(a);
          !c.K == 0 && (f = !1);
          CC(this, c);
          c.dispose();
          f && this.dispatchEvent(a);
          return;
        }
        a = new py(
          "h",
          a.B,
          a.j,
          function () {
            return tC(e);
          },
          h,
        );
        a.cause = q;
        a.o = "e";
        CC(this, c, this.v);
      }
      c.dispose();
    } else if (a.type == "f" || a.type == "g")
      switch (EC(this, a, c, e)) {
        case 4:
          g = !0;
          a.o = a.type;
          a.type = "d";
          break;
        case 1:
          a.o = a.type;
          a.type = "d";
          break;
        case 3:
          f = !1;
          break;
        case 2:
          a.A instanceof us && Df(a.A, 2, L);
      }
    else a.type == "i" && (this.j && this.j.info(Error("Oc")), CC(this, c, (Sr(), Jr)), (f = !1));
    if (a.type == "d") {
      a.A instanceof us && Df(a.A, 2, L);
      try {
        if ((c.B(a), !c.K == 0 && (f = !1), c.U)) CC(this, c);
        else {
          var l = c.R(a);
          if (l || g) CC(this, c, l || (Sr(), Kr));
          else {
            var p = Xr(a.j, this.v);
            ((this.v && p == this.v) || p == (Sr(), Kr)) &&
              this.j &&
              this.j.log(Error("Pc"), {
                XhrNetEvent_type: "ERROR",
                XhrNetEvent_httpStatus: a.j.toString(),
                shouldDispatch: f,
              });
            CC(this, c, p);
          }
        }
      } catch (q) {
        ((a = new py("h", a.B, a.j, function () {
          return tC(e);
        })),
          (a.cause = q),
          (a.o = "d"),
          CC(this, c, this.v));
      }
      c.dispose();
    }
    f && this.dispatchEvent(a);
  }
};
A.Ce = function (a) {
  a = a.target;
  wC(a);
  Lb(this.J.o, a) ? this.J.remove(a) : Lb(this.B, a) && (ou(this.F, a, "m", this.Td), CC(this, a));
  Mb(this.B, a);
  Mb(this.K, a);
};
function CC(a, c, e) {
  var f = a.o.j,
    g = f,
    h = e || (Sr(), Fr);
  e = !e;
  Mb(a.B, c);
  Mb(a.K, c);
  Sr();
  if (!(f.j >= 5))
    if (h.j >= 5) Yr(a.o, h, c.ca());
    else {
      var k =
        a.D.j != null ||
        Kb(a.B, function (l) {
          return l.o == 3;
        });
      if (f == Dr) e || !k ? a.B.length == 0 && (g = Cr) : (FC(a), (g = h));
      else if (e)
        if (a.B.length > 0) ((g = Er), GC(a));
        else {
          if (a.D.j == null || a.D.j.v()) g = Cr;
        }
      else g = h;
      Yr(a.o, g, c.ca());
    }
}
function EC(a, c, e, f) {
  var g = !1;
  if (c.j == 200) {
    var h = rC(f);
    if (h) {
      var k;
      if ((h = (k = og(of(h, xi, 10, L), yi)) == null ? void 0 : k.Ia())) (HC(a, h), (g = !0));
    }
  }
  c.j == 400 && (f = uC(f)) && f.Ia() && (HC(a, f.Ia()), (g = !0));
  c.j == 409 && jC(a.C, "tfe", null);
  f = a.o.j.j >= 5;
  k = c.type == "g";
  if (!f && g && e.v.o <= 1) return (IC(a, e, 2), 3);
  h = c.j === 0 ? 1 : 3;
  if (!f && e.o != 1 && e.v.o < 4) return (IC(a, e, h), 3);
  if (e.o == 3) {
    if (f) return 2;
    a.D.j == null || k ? IC(a, e, h) : a.K.push(e);
  } else return g ? 4 : 1;
  FC(a);
  g = Xr(c.j, a.v);
  ((a.v && g == a.v) || g == (Sr(), Kr)) &&
    a.j &&
    ((c = {
      XhrNetEvent_type: (function (l) {
        switch (l) {
          case "e":
            return "SUCCESS";
          case "d":
            return "ERROR";
          case "f":
            return "NETWORK_WARNING";
          case "g":
            return "SERVER_WARNING";
          case "h":
            return "CLIENT_ERROR";
          case "i":
            return "RESTART_NOW";
          default:
            return "UNKNOWN";
        }
      })(c.getType()),
      XhrNetEvent_httpStatus: c.j.toString(),
    }),
    a.j.log(Error("Rc"), c));
  Yr(a.o, g, e.ca(), null, !(e.o != 1 && e.v.o < 4));
  return 2;
}
function FC(a) {
  a.D.j != null && a.o.j.j == 1 && ((a = a.D), a.j.j(), a.j.A());
}
function IC(a, c, e) {
  e = Ux(c.v, e);
  a.M.Ya(function () {
    return a.send(c);
  }, e);
}
A.xe = function (a) {
  var c = this.o.j;
  c.j >= 5 ||
    (a.o
      ? c.j != 1 &&
        (this.B.length > 0 ? (Yr(this.o, (Sr(), Er)), GC(this)) : Yr(this.o, (Sr(), Cr)))
      : ((c = Xr(a.j, this.v)),
        ((this.v && c == this.v) || c == (Sr(), Kr)) &&
          this.j &&
          this.j.log(Error("Sc"), { XhrNetEvent_httpStatus: a.j.toString() }),
        Yr(this.o, c, null, a.j)));
};
function yC(a, c) {
  if (a.R) {
    var e;
    ((e = c.Ma["x-reload"]) == null ? void 0 : e.toLowerCase()) === "true" && a.R.j(!0);
  }
}
function GC(a) {
  var c = a.K.shift();
  c && a.send(c);
}
function HC(a, c) {
  var e = a.C;
  e.j.j.at && jC(e, "at", c);
  jC(e, "token", c);
  a.S.dispatchEvent(null);
}
A.Ia = function () {
  return this.C.Ia();
};
A.Ae = function () {
  var a = this.H != null && this.H.o() && this.H.j() ? (Sr(), Mr) : (Sr(), Lr);
  Yr(this.o, a);
};
A.P = function () {
  Tl(this.B);
  au.prototype.P.call(this);
};
function JC(a) {
  return a.replace(/[0-9a-zA-Z]/g, "a").replace(/[^\u0000-\u007F]/g, "b");
}
function DC(a) {
  return a.length <= 100
    ? JC(a)
    : JC(a.substring(0, 50)) + " (truncated) " + JC(a.substring(a.length - 50));
}
function wC(a) {
  a.ca().includes("/save");
}
function KC(a, c, e, f, g, h, k) {
  this.v = a;
  this.B = c || "text";
  this.A = db(wl(e)) ? null : e;
  this.o = f !== void 0 ? f : 200;
  this.Ma = {};
  if (h) for (var l in h) this.Ma[l.toLowerCase()] = h[l];
  this.j = g !== void 0 ? g : 0;
  this.D = k || {};
  this.C = void 0;
}
function LC(a) {
  switch (a) {
    case "arraybuffer":
      return "arraybuffer";
    case "blob":
      return "blob";
    case "document":
      return "document";
    case "text":
      return "text";
    case "":
      return "text";
    default:
      throw Error("Tc`" + a);
  }
}
function sC(a) {
  return a.B == "text";
}
function tC(a) {
  if (a.C === void 0) {
    var c = a.v || "";
    Ur();
    c = c.replace(Tr, "");
    if (c)
      if (c === "null") var e = null;
      else {
        for (var f = c.length, g = 0; g < f && c.charCodeAt(g) <= 32; ) g = (g + 1) | 0;
        for (var h = f; h > g && c.charCodeAt((h - 1) | 0) <= 32; ) h = (h - 1) | 0;
        c = g > 0 || h < f ? c.substr(g, (h - g) | 0) : c;
        try {
          e = JSON.parse(c);
        } catch (k) {
          a = jh(k);
          if (qh(a)) throw ((e = new Xh()), gh(e, "Ca`" + T(a.j), a), hh(e, Error(e)), e.L);
          throw a.L;
        }
        if (!(e instanceof Object)) throw th().L;
      }
    else e = null;
    a.C = e;
  }
  return a.C;
}
function AC(a) {
  var c = a.o,
    e = a.j,
    f = a.B,
    g = a.A;
  if (sC(a)) {
    var h = a.v || "";
    h = h.indexOf("&") != -1 ? ("document" in I ? sl(h) : ul(h)) : h;
    h.length > 50 && (h = h.substring(0, 47) + "...");
    lb.test(h) &&
      (h.indexOf("&") != -1 && (h = h.replace(fb, "&amp;")),
      h.indexOf("<") != -1 && (h = h.replace(gb, "&lt;")),
      h.indexOf(">") != -1 && (h = h.replace(hb, "&gt;")),
      h.indexOf('"') != -1 && (h = h.replace(ib, "&quot;")),
      h.indexOf("'") != -1 && (h = h.replace(jb, "&#39;")),
      h.indexOf("\x00") != -1 && (h = h.replace(kb, "&#0;")));
    h += "   (truncated)";
  } else h = "responseObject";
  c = { RespStatus: c, RespErr: e, RespType: f, RespContentType: g, RespString: h };
  Object.assign(c, a.D);
  return c;
}
function BC(a) {
  if (a.Ma["x-restart"] == "NOW")
    return new py("i", a.j, a.o, function () {
      return tC(a);
    });
  if (a.j == 7) return null;
  var c = MC(a) ? "f" : NC(a) ? "g" : a.j == 0 ? "e" : "d";
  return new py(
    c,
    a.j,
    a.o,
    function () {
      return tC(a);
    },
    a.j == 6 && a.o == 500 ? rC(a) : null,
  );
}
function MC(a) {
  var c = a.j,
    e = a.o;
  return a.j == 0
    ? c != 0 || e != 0 || (sC(a) && a.v != null)
      ? !1
      : !0
    : c == 8 || c == 5 || (c == 6 && (e <= 0 || e == 503 || e == 405))
      ? !0
      : !1;
}
function NC(a) {
  var c = a.o;
  return (a.j == 6 &&
    (c == 202 ||
      c == 401 ||
      c == 403 ||
      c == 409 ||
      c == 429 ||
      c == 433 ||
      (c >= 500 && c <= 599 && c != 503 && c != 512 && c != 550))) ||
    (c == 400 && uC(a) != null)
    ? !0
    : c == 200
      ? a.A == null || rC(a)
        ? !0
        : zC(a)
      : !1;
}
function zC(a) {
  if (a.o == 200 && a.A != null && !rC(a) && sC(a)) {
    if (db(wl(a.v))) return !0;
    if (cb(a.v || "", ")]}'\n"))
      try {
        return tC(a) == null;
      } catch (c) {}
  }
  return !1;
}
function OC(a, c, e, f, g, h) {
  this.B = a;
  this.A = c;
  this.j = e;
  this.v = f;
  this.o = g;
  this.C = h;
}
function PC(a, c, e, f, g, h, k, l, p, q, r, w, y, z, B, F, J, W) {
  pC.call(this, a, c, e, f, g, h, k, l, p, q, r, w, y, z, B, W);
  this.ma = F;
  this.j = null;
  this.O = new ju(this);
  this.la = J;
}
D(PC, pC);
function qC(a, c) {
  a.j = a.ma();
  mu(a.O, a.j, function () {
    a.ca().includes("/save");
    var g,
      h = a.j;
    a: {
      try {
        if (h.D == "")
          try {
            var k = h.j ? h.j.responseText : "";
          } catch (J) {
            k = "";
          }
        else k = Iw(h);
        var l = k;
        break a;
      } catch (J) {
        l = "";
        break a;
      }
      l = void 0;
    }
    k = h.D;
    a: {
      try {
        if (h.j && h.sa()) {
          var p = h.j.getResponseHeader("Content-Type");
          var q = p === null ? void 0 : p;
        } else q = void 0;
        var r = q;
        break a;
      } catch (J) {
        r = null;
        break a;
      }
      r = void 0;
    }
    var w = new OC(
      l,
      k,
      r,
      vu(h),
      h.B,
      h.j && (h.j ? h.j.readyState : 0) >= 2 ? h.j.getAllResponseHeaders() || "" : "",
    );
    h = { ReqUri: a.M, ReqContent: a.D, ReqMethod: a.F };
    r = w.B;
    q = LC(w.A);
    p = w.j;
    l = w.v;
    k = w.o;
    var y = {};
    w = E(w.C.split("\r\n"));
    var z = w.next();
    try {
      for (; !z.done; z = w.next()) {
        var B = z.value;
        if (!db(wl(B))) {
          var F = B.indexOf(": ");
          F != -1 && (y[B.substr(0, F)] = B.substr(F + 2));
        }
      }
    } finally {
      z && !z.done && (g = w.return) && g.call(w);
    }
    g = new KC(r, q, p, l, k, y, h);
    a.reset();
    a.dispatchEvent(new oC(a, g));
  });
  a.j.H = Math.max(0, a.C);
  a.H != "text" && (a.j.D = QC(a.H));
  a.j.J = a.Z;
  var e = Jl(a.X + a.ca(), c.j.j),
    f = {};
  Object.assign(f, a.S, Qs(c.v));
  a.la && a.C > 0 && (f["X-Client-Deadline-Ms"] = a.C + (e.includes("/delta") ? 5e3 : 0));
  a.ca().includes("/save");
  a.j.send(e, a.F, a.D, f);
}
PC.prototype.reset = function () {
  this.j && (this.j.dispose(), (this.j = null));
};
PC.prototype.P = function () {
  Sl(this.O);
  pC.prototype.P.call(this);
};
function QC(a) {
  switch (a) {
    case "arraybuffer":
      return "arraybuffer";
    case "blob":
      return "blob";
    case "document":
      return "document";
    default:
      return "";
  }
}
function xC(a, c, e, f, g, h) {
  bC.call(this, c, e, f, g);
  this.J = a;
  this.O = !!h;
}
D(xC, bC);
function dC(a) {
  var c = a.N;
  c < 0 && (c = a.O ? 4e4 : 2e4);
  return new PC(
    a.o,
    eC(a),
    fC(a),
    a.D,
    a.I,
    a.B,
    a.F,
    a.K,
    a.C,
    "text",
    !1,
    c,
    null,
    a.M,
    a.H,
    function () {
      return new Aw();
    },
    V(a.v, "docs-ecdh") && !0,
    void 0,
  );
}
function RC(a, c) {
  $a.call(this, c);
  this.B = a;
}
D(RC, $a);
function SC(a) {
  $a.call(this, "Binary not cached.");
  this.o = this.j = null;
  a = TC(Cl(a));
  var c = {};
  pl(
    this,
    ((c.serviceworker_fetchEvent_failReason = "binary_not_cached"),
    (c.serviceworker_fetchUrl = a),
    c),
  );
}
D(SC, $a);
function UC(a, c) {
  var e = c && c.o ? xm(c.o, "optInTime") : void 0,
    f = e ? Date.now() - e : void 0;
  a.o = e;
  e = {};
  pl(
    a,
    ((e.serviceworker_hasOfflineEnabledUser = String(!!c)),
    (e.serviceworker_timeSinceOptInMs = f),
    e),
  );
}
function VC(a, c) {
  var e = c
      .filter(function (h) {
        return h.sa();
      })
      .map(function (h) {
        return h.Ga;
      })
      .sort()
      .join(","),
    f = c
      .filter(function (h) {
        return !h.sa();
      })
      .map(function (h) {
        return h.Ga;
      })
      .sort()
      .join(","),
    g = {};
  pl(
    a,
    ((g.serviceworker_completeCacheNames = e),
    (g.serviceworker_incompleteCacheNames = f),
    (g.serviceworker_managedCacheInfosLength = c.length),
    g),
  );
}
function WC(a, c, e) {
  var f;
  e = e == null ? void 0 : (f = e.j) == null ? void 0 : f.j.dc();
  return e
    ? XC(c, e).then(function (g) {
        var h = Date.now(),
          k = g.lastAttemptStartTimestamp,
          l = g.lastAttemptEndTimestamp,
          p = g.lastSuccessTimestamp,
          q = g.consecutiveFailureCount,
          r = g.lastSeenCacheState;
        g = r == null ? void 0 : r.completeCacheNames;
        r = r == null ? void 0 : r.incompleteCacheNames;
        var w = l ? h - l : void 0;
        h = p ? h - p : void 0;
        k = l && l > k;
        p = !!p;
        a.j = p;
        l = {};
        return pl(
          a,
          ((l.serviceworker_lastAttemptFinished = k),
          (l.serviceworker_timeSinceLastAttemptMs = w),
          (l.serviceworker_timeSinceLastSuccessMs = h),
          (l.serviceworker_consecutiveFailureCount = q),
          (l.serviceworker_hadSuccessfulCacheUpdate = p),
          (l.serviceworker_lastSeenCompleteCacheNames = g),
          (l.serviceworker_lastSeenIncompleteCacheNames = r),
          l),
        );
      })
    : ((c = {}),
      pl(a, ((c.serviceworker_cacheUpdateStatsUnavailable = "true"), c)),
      Promise.resolve(a));
}
function YC(a, c) {
  var e = {};
  pl(a, ((e.storageAvailable = c.j), (e.storageUsage = px(c)), e));
}
function XC(a, c) {
  return new Promise(function (e) {
    Xy(c, e);
  }).then(function (e) {
    return e ? qp(e, a) : {};
  });
}
function TC(a) {
  var c = a;
  Ll(a, 0, "ouid", a.search(Ml)) >= 0 && Nl(a, "ouid") && (c = Kl(Pl(c, "ouid"), "ouid", "{OUID}"));
  Ll(a, 0, "key", a.search(Ml)) >= 0 && Nl(a, "key") && (c = Kl(Pl(c, "key"), "key", "REDACTED"));
  return c;
}
function ZC(a) {
  return (a = a.exec(vb())) ? a[1] : "";
}
var nb = (function () {
  if (Sb) return ZC(/Firefox\/([0-9.]+)/);
  if (Wb) {
    if (Hb() || (tb && wb && wb.platform ? wb.platform === "macOS" : zb("Macintosh"))) {
      var a = ZC(/CriOS\/([0-9.]+)/);
      if (a) return a;
    }
    return ZC(/Chrome\/([0-9.]+)/);
  }
  if (Xb && !Hb()) return ZC(/Version\/([0-9.]+)/);
  if (Tb || Ub) {
    if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(vb()))) return a[1] + "." + a[2];
  } else if (Vb) return (a = ZC(/Android\s+([0-9.]+)/)) ? a : ZC(/Version\/([0-9.]+)/);
  return "";
})();
function $C() {
  var a = this;
  this.promise = new Promise(function (c, e) {
    a.resolve = c;
    a.reject = e;
  });
}
function aD(a) {
  this.v = window.crashReport;
  this.B = a;
  this.A = new $C();
  this.j = 0;
  this.o = new Map();
}
aD.prototype.initialize = function (a) {
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
    w,
    y,
    z;
  return Ca(function (B) {
    switch (B.j) {
      case 1:
        if (c.j !== 0) return B.return(c.A.promise);
        c.j = 1;
        B.M(2, 3);
        return B.B(c.v.initialize(a), 5);
      case 5:
        c.A.resolve();
        c.j = 2;
        e = E(c.o);
        f = e.next();
        try {
          for (; !f.done; f = e.next())
            ((h = f.value),
              (k = E(h)),
              (l = k.next().value),
              (p = k.next().value),
              (q = l),
              (r = p),
              (w = void 0),
              c.set(q, (w = r) != null ? w : ""));
        } finally {
          f && !f.done && (g = e.return) && g.call(e);
        }
      case 3:
        B.H();
        c.o.clear();
        B.K(4);
        break;
      case 2:
        y = B.N();
        c.j = 3;
        z = Error("Vc", { cause: y });
        z.reportSeverity = "warning";
        c.A.reject(z);
        B.Ka(3);
        break;
      case 4:
        return B.return(c.A.promise);
    }
  });
};
aD.prototype.Ud = function () {
  return this.j !== 0;
};
aD.prototype.set = function (a, c) {
  if (this.j !== 3)
    if (this.j !== 2)
      this.o.size < 100 || this.o.has(a) ? this.o.set(a, c) : this.o.set("cache_full", "true");
    else
      try {
        this.v.set(a, c);
      } catch (e) {
        this.B.Pb("Failed to set key " + a, e instanceof Error ? e : Error(String(e)));
      }
};
aD.prototype.delete = function (a) {
  if (this.j !== 3)
    if (this.j !== 2) this.o.delete(a);
    else
      try {
        typeof this.v.delete === "function" ? this.v.delete(a) : this.v.remove(a);
      } catch (c) {
        this.B.Pb("Failed to delete key " + a, c instanceof Error ? c : Error(String(c)));
      }
};
function bD() {
  this.j = !1;
}
bD.prototype.initialize = function () {
  this.j = !0;
  return Promise.resolve();
};
bD.prototype.Ud = ba("j");
bD.prototype.set = u();
bD.prototype.delete = u();
function cD() {}
cD.prototype.Pb = u();
var dD = new bD();
var eD = ["SEVERE", "FATAL"];
function fD() {
  this.o = this.v = 1;
  this.j = new Hu();
}
fD.prototype.Xd = function (a, c) {
  var e = c == null ? void 0 : c.Lc.get("apps_telemetry.outgoing_severity");
  a = e != null ? e : a.v;
  if ((a = this.v === 1 && !!a && eD.includes(a.toUpperCase()))) this.v = 2;
  c = c == null ? void 0 : c.Lc.get("apps_telemetry.incoming_severity");
  if ((e = this.o === 1 && !!c && !!e && c.toUpperCase() !== e.toUpperCase())) this.o = 2;
  if (a || e)
    ((e = mf(this.j, Nu, 3)),
      (c = new Mu()),
      (c = Hf(c, 1, this.v)),
      (c = Hf(c, 2, this.o)),
      N(e, Mu, 5, c),
      gD(this));
};
fD.prototype.Ca = function (a) {
  a: {
    var c = mf(this.j, Ju, 1);
    var e = Lu;
    Oe(c);
    if (void 0 === ed) {
      if (hf(c, e, 4) !== 4) {
        c = void 0;
        break a;
      }
    } else ff(c.G, void 0, e, 4);
    c = mf(c, Iu, 4);
  }
  c.Ca(a);
  gD(this);
};
function gD(a) {
  dD.set("appsTelemetryCrashReportData", mg(a.j));
}
function jx(a) {
  a = a === void 0 ? {} : a;
  if (!dD.Ud()) {
    var c = void 0;
    c = c === void 0 ? new cD() : c;
    try {
      var e = $v(Ti);
    } catch (f) {
      e = !1;
    }
    dD = e && window.crashReport ? new aD(c) : new bD();
    dD.initialize();
  }
  return aw(a, new fD());
}
function hD(a, c) {
  this.o = a;
  this.B = c;
  this.enabled = !1;
  this.v = function () {
    return Date.now();
  };
  this.A = this.v();
}
hD.prototype.setInterval = function (a) {
  this.o = a;
  this.j && this.enabled ? (this.stop(), this.start()) : this.j && this.stop();
};
hD.prototype.start = function () {
  var a = this;
  this.enabled = !0;
  this.j ||
    ((this.j = setTimeout(function () {
      iD(a);
    }, this.o)),
    (this.A = this.v()));
};
hD.prototype.stop = function () {
  this.enabled = !1;
  this.j && (clearTimeout(this.j), (this.j = void 0));
};
function iD(a) {
  if (a.enabled) {
    var c = Math.max(a.v() - a.A, 0);
    c < a.o * 0.8
      ? (a.j = setTimeout(function () {
          iD(a);
        }, a.o - c))
      : (a.j && (clearTimeout(a.j), (a.j = void 0)), a.B(), a.enabled && (a.stop(), a.start()));
  } else a.j = void 0;
}
function jD(a) {
  this.G = M(a);
}
D(jD, R);
jD.prototype.Qc = function () {
  return Bf(this, 1);
};
function kD(a) {
  this.G = M(a);
}
D(kD, R);
function lD(a) {
  this.G = M(a);
}
D(lD, R);
function mD(a) {
  sf(nD, kD, 1, a);
}
var oD = Og(lD);
function pD(a) {
  this.G = M(a);
}
D(pD, R);
var qD = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"],
  nD = new lD(),
  rD = null;
function sD(a, c) {
  c = c === void 0 ? qD : c;
  if (!rD) {
    var e;
    a = (e = a.navigator) == null ? void 0 : e.userAgentData;
    if (
      !a ||
      typeof a.getHighEntropyValues !== "function" ||
      (a.brands && typeof a.brands.map !== "function")
    )
      return Promise.reject(Error("Wc"));
    mD(
      (a.brands || []).map(function (g) {
        var h = new kD();
        h = Gf(h, 1, g.brand);
        return Gf(h, 2, g.version);
      }),
    );
    typeof a.mobile === "boolean" && Q(nD, 2, a.mobile);
    rD = a.getHighEntropyValues(c);
  }
  var f = new Set(c);
  return rD
    .then(function (g) {
      var h = nD.clone();
      f.has("platform") && Gf(h, 3, g.platform);
      f.has("platformVersion") && Gf(h, 4, g.platformVersion);
      f.has("architecture") && Gf(h, 5, g.architecture);
      f.has("model") && Gf(h, 6, g.model);
      f.has("uaFullVersion") && Gf(h, 7, g.uaFullVersion);
      return mg(h);
    })
    .catch(function () {
      return mg(nD);
    });
}
function tD(a) {
  this.G = M(a);
}
D(tD, R);
function uD(a) {
  return Hf(a, 1, 1);
}
function vD(a) {
  this.G = M(a, 19);
}
D(vD, R);
vD.prototype.Fb = function (a) {
  return Hf(this, 2, a);
};
function wD(a, c) {
  this.Pa = c = c === void 0 ? !1 : c;
  this.o = this.locale = null;
  this.A = 0;
  this.v = !1;
  this.j = new vD();
  Number.isInteger(a) && this.j.Fb(a);
  c || (this.locale = document.documentElement.getAttribute("lang"));
  xD(this, new tD());
}
wD.prototype.Fb = function (a) {
  this.j.Fb(a);
  return this;
};
function xD(a, c) {
  N(a.j, tD, 1, c);
  Bf(c, 1) || uD(c);
  a.Pa || ((c = yD(a)), Af(c, 5) || Gf(c, 5, a.locale));
  a.o && ((c = yD(a)), pf(c, lD, 9) || N(c, lD, 9, a.o));
}
function zD(a, c) {
  a.A = c;
}
function gy(a) {
  var c = c === void 0 ? qD : c;
  var e = a.Pa ? void 0 : window;
  e
    ? sD(e, c)
        .then(function (f) {
          a.o = oD(f != null ? f : "[]");
          f = yD(a);
          N(f, lD, 9, a.o);
          return !0;
        })
        .catch(x(!1))
    : Promise.resolve(!1);
}
function yD(a) {
  var c = pf(a.j, tD, 1);
  c || ((c = new tD()), xD(a, c));
  a = c;
  c = pf(a, pD, 11);
  c || ((c = new pD()), N(a, pD, 11, c));
  return c;
}
function AD(a, c, e, f, g, h, k) {
  e = e === void 0 ? 0 : e;
  f = f === void 0 ? 0 : f;
  g = g === void 0 ? null : g;
  h = h === void 0 ? 0 : h;
  k = k === void 0 ? 0 : k;
  if (!a.Pa) {
    var l = yD(a);
    var p = new jD();
    p = Hf(p, 1, a.A);
    p = Q(p, 2, a.v);
    f = Ef(p, 3, f > 0 ? f : void 0);
    f = Ef(f, 4, h > 0 ? h : void 0);
    f = Ef(f, 5, k > 0 ? k : void 0);
    f = pg(f);
    N(l, jD, 10, f);
  }
  a = a.j.clone();
  l = Date.now().toString();
  a = Ue(a, 4, l == null ? l : Sd(l));
  c = sf(a, Zx, 3, c.slice());
  g &&
    ((a = new Wx()),
    (g = Ef(a, 13, g)),
    (a = new Xx()),
    (g = N(a, Wx, 2, g)),
    (a = new Yx()),
    (g = N(a, Xx, 1, g)),
    (g = Hf(g, 2, 9)),
    N(c, Yx, 18, g));
  e && Ff(c, 14, e);
  return c;
}
function BD(a) {
  this.o = this.j = this.v = a;
}
BD.prototype.reset = function () {
  this.o = this.j = this.v;
};
function CD(a) {
  this.G = M(a, 8);
}
D(CD, R);
var DD = Og(CD);
function ED(a) {
  this.G = M(a);
}
D(ED, R);
var FD = new Ng(175237375, CD, ED);
function ey(a) {
  U.call(this);
  var c = this;
  this.o = [];
  this.T = "";
  this.R = this.J = -1;
  this.D = null;
  this.H = this.B = 0;
  this.F = null;
  this.S = this.U = 0;
  this.X = 1;
  this.sb = 0;
  this.ob = a.ob;
  this.Ab = a.Ab || u();
  this.A = new wD(a.ob, a.Pa);
  this.ua = a.ua || null;
  this.rb = a.rb || null;
  this.K = 1e3;
  this.C = a.ef || null;
  this.gb = a.gb || null;
  this.xb = a.xb || !1;
  this.withCredentials = !a.Md;
  this.Pa = a.Pa || !1;
  this.O =
    typeof URLSearchParams !== "undefined" &&
    !!new URL(GD()).searchParams &&
    !!new URL(GD()).searchParams.set;
  var e = uD(new tD());
  xD(this.A, e);
  this.v = new BD(1e4);
  a = HD(this, a.Hd);
  this.j = new hD(this.v.j, a);
  this.M = new hD(6e5, a);
  this.xb || this.M.start();
  if (!this.Pa) {
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        ID(c);
        var h;
        (h = c.F) == null || h.flush();
      }
    });
    var f, g;
    (f = window) == null ||
      (g = f.addEventListener) == null ||
      g.call(f, "pagehide", function () {
        ID(c);
        var h;
        (h = c.F) == null || h.flush();
      });
  }
}
D(ey, U);
function HD(a, c) {
  function e() {
    a.flush();
  }
  return a.O
    ? c
      ? function () {
          c().then(e);
        }
      : e
    : u();
}
ey.prototype.P = function () {
  ID(this);
  this.j.stop();
  this.M.stop();
  U.prototype.P.call(this);
};
function jy(a, c) {
  if (c instanceof Zx) a.log(c);
  else
    try {
      var e = $x(new Zx(), mg(c));
      a.log(e);
    } catch (f) {
      JD(a, 4, 1);
    }
}
function JD(a, c, e) {
  var f;
  (f = a.F) == null || f.Rf(c, e);
}
ey.prototype.log = function (a) {
  JD(this, 2, 1);
  if (this.O) {
    a = a.clone();
    var c = this.X++;
    c = a = Ff(a, 21, c);
    if (Zd(Se(c, 1)) == null) {
      var e = Date.now();
      e = Number.isFinite(e) ? e.toString() : "0";
      Ue(c, 1, e == null ? e : Sd(e));
    }
    vf(c, 15) != null || Ff(c, 15, new Date().getTimezoneOffset() * 60);
    JD(this, 1, 1);
    c = this.o.length - this.K + 1;
    c > 0 && (this.o.splice(0, c), (this.B += c), JD(this, 3, c));
    this.o.push(a);
    this.xb || this.j.enabled || this.j.start();
  }
};
ey.prototype.flush = function (a, c) {
  var e = this;
  if (this.o.length === 0) a && a();
  else {
    var f = Date.now();
    if (this.R > f && this.J < f) c && c("throttled");
    else {
      this.ua && (typeof this.ua.Qc === "function" ? zD(this.A, this.ua.Qc()) : (this.A.A = 0));
      var g = this.o.length,
        h = AD(this.A, this.o, this.B, this.H, this.rb, this.U, this.S),
        k = this.Ab();
      if (k && this.T === k) c && c("stale-auth-token");
      else {
        this.o = [];
        this.j.enabled && this.j.stop();
        this.B = 0;
        f = mg(h);
        var l;
        this.D && this.D.Db(f.length) && (l = KD(f));
        var p = LD(this, f, k),
          q = function (y) {
            e.v.reset();
            e.j.setInterval(e.v.j);
            if (y) {
              var z = null;
              try {
                var B = JSON.stringify(JSON.parse(y.replace(")]}'\n", "")));
                z = DD(B);
              } catch (F) {}
              z &&
                ((y = Number(zf(z, 1, nd("-1")))),
                y > 0 && ((e.J = Date.now()), (e.R = e.J + y)),
                (z = og(z, FD))) &&
                ((z = yf(z, 1, -1)),
                z !== -1 && ((e.v = new BD(z < 1 ? 1 : z)), e.j.setInterval(e.v.j)));
            }
            a && a();
            e.H = 0;
          },
          r = function (y, z) {
            var B = rf(h, Zx, 3);
            var F = Number(zf(h, 14)),
              J = e.v;
            J.o = Math.min(3e5, J.o * 2);
            J.j = Math.min(3e5, J.o + Math.round(0.1 * (Math.random() - 0.5) * 2 * J.o));
            e.j.setInterval(e.v.j);
            y === 401 && k && (e.T = k);
            F && (e.B += F);
            z === void 0 && (z = (500 <= y && y < 600) || y === 401 || y === 0);
            z && ((e.o = B.concat(e.o)), e.xb || e.j.enabled || e.j.start());
            JD(e, 7, 1);
            c && c("net-send-failed", y);
            ++e.H;
          },
          w = function () {
            e.ua && e.ua.send(p, q, r);
          };
        l
          ? l.then(
              function (y) {
                JD(e, 5, g);
                p.od["Content-Encoding"] = "gzip";
                p.od["Content-Type"] = "application/binary";
                p.body = y;
                p.he = 2;
                w();
              },
              function () {
                JD(e, 6, g);
                w();
              },
            )
          : w();
      }
    }
  }
};
function LD(a, c, e) {
  e = e === void 0 ? null : e;
  var f = f === void 0 ? a.withCredentials : f;
  var g = {};
  a.C || (a.C = GD());
  try {
    var h = new URL(a.C).toString();
  } catch (k) {
    h = new URL(a.C, window.location.origin).toString();
  }
  h = new URL(h);
  e && (g.Authorization = e);
  a.gb && ((g["X-Goog-AuthUser"] = a.gb), h.searchParams.set("authuser", a.gb));
  return { url: h.toString(), body: c, he: 1, od: g, Ue: "POST", withCredentials: f, sb: a.sb };
}
function ID(a) {
  a.A.v = !0;
  a.flush();
  a.A.v = !1;
}
function GD() {
  return "https://play.google.com/log?format=json&hasfast=true";
}
function fy() {}
function KD(a) {
  var c, e, f, g;
  return Ca(function (h) {
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
        return h.return(new g(h.D));
    }
  });
}
fy.prototype.Db = function (a) {
  return a < 1024 ? !1 : typeof CompressionStream !== "undefined";
};
function dy() {
  this.fe = typeof AbortController !== "undefined";
}
dy.prototype.send = function (a, c, e) {
  var f = this,
    g,
    h,
    k,
    l,
    p,
    q,
    r,
    w,
    y,
    z;
  return Ca(function (B) {
    switch (B.j) {
      case 1:
        return (
          (h =
            (g = f.fe ? new AbortController() : void 0) && a.sb > 0
              ? setTimeout(function () {
                  g.abort();
                }, a.sb)
              : void 0),
          B.M(2, 3),
          (k = Object.assign(
            {},
            { method: a.Ue, headers: Object.assign({}, a.od) },
            a.body && { body: a.body },
            a.withCredentials && { credentials: "include" },
            { signal: a.sb && g ? g.signal : null },
          )),
          B.B(fetch(a.url, k), 5)
        );
      case 5:
        l = B.D;
        if (l.status !== 200) {
          (p = e) == null || p(l.status);
          B.Ka(3);
          break;
        }
        if ((q = c) == null) {
          B.Ka(7);
          break;
        }
        return B.B(l.text(), 8);
      case 8:
        q(B.D);
      case 7:
      case 3:
        B.H();
        clearTimeout(h);
        B.K(0);
        break;
      case 2:
        r = B.N();
        switch ((w = r) == null ? void 0 : w.name) {
          case "AbortError":
            (y = e) == null || y(408);
            break;
          default:
            (z = e) == null || z(400);
        }
        B.Ka(3);
    }
  });
};
dy.prototype.Qc = x(4);
function cy(a, c) {
  c = c === void 0 ? "0" : c;
  U.call(this);
  this.ob = a;
  this.gb = c;
  this.o = this.j = !1;
  this.rb = this.ua = null;
}
D(cy, U);
cy.prototype.Md = function () {
  this.v = !0;
  return this;
};
function MD(a, c) {
  a = a === void 0 ? null : a;
  c = c === void 0 ? null : c;
  this.j = [];
  this.o = [];
  this.v = [];
  this.A = [];
  this.C = a;
  this.B = c;
}
function ND(a, c, e, f) {
  a.j.push(new OD(c, e, f));
}
function PD(a) {
  var c = ["/"];
  c.every(function (e) {
    return cb(e, "/");
  });
  Nb(a.v, c);
}
function QD(a) {
  var c = RD;
  c.every(function (e) {
    return cb(e, "/");
  });
  Nb(a.o, c);
}
function SD(a) {
  var c = ["/offline/blank"];
  c.every(function (e) {
    return cb(e, "/");
  });
  Nb(a.A, c);
}
function TD(a, c) {
  for (var e = 0; e < a.j.length; e++) if (Lb(a.j[e].v, c)) return a.j[e];
  return Lb(a.o, c) ? UD(a, 3) : null;
}
function VD(a, c, e) {
  if (e !== void 0) {
    e = TD(a, e);
    if (!e) throw Error("Xc");
    if (Ib(uo, c) >= Ib(uo, e.o)) return e.j;
  }
  a = UD(a, c);
  if (!a) throw Error("Yc");
  return a.j;
}
function WD(a, c) {
  return (
    a.j.some(function (e) {
      return e.j == c;
    }) || Lb(a.A, c)
  );
}
function UD(a, c) {
  c = Ib(uo, c);
  if (c == -1) throw Error("Zc");
  for (; c >= 0; c--) for (var e = 0; e < a.j.length; e++) if (a.j[e].o == uo[c]) return a.j[e];
  return null;
}
function OD(a, c, e) {
  this.v = a;
  this.j = c;
  this.o = e;
}
function XD(a, c, e, f, g, h, k) {
  this.o = a;
  this.j = c || null;
  this.v = e || "";
  this.C = !!f;
  this.D = !!g;
  this.B = !!h;
  this.A = this.j == null;
  this.I = !(!e && !f);
  this.F = k || null;
}
function YD(a, c) {
  this.o = a;
  this.j = [a];
  c && (this.j = this.j.concat(c));
}
function ZD(a, c) {
  return a.j.some(function (e) {
    return !!TD(e, c);
  });
}
function $D(a, c) {
  return a.j.some(function (e) {
    return Lb(e.o, c);
  });
}
function aE(a, c) {
  return a.j.some(function (e) {
    return Lb(e.v, c);
  });
}
function bE(a, c) {
  return a.j.some(function (e) {
    return WD(e, c);
  });
}
function cE(a) {
  this.j = a;
}
cE.prototype.zb = function (a) {
  var c = Array.from(this.j.values()).map(function (f) {
      return f.zb(a);
    }),
    e = new Ws(a);
  c.push(dE(e));
  c.push(eE(e));
  c.push(fE(e));
  c = c.filter(function (f) {
    return !!f;
  });
  return c.length == 0 ? null : c[0];
};
function dE(a) {
  var c = qs(ns(a.v)),
    e = a.j.get("usp");
  return (a = c === "/open" ? a.j.get("id") : null)
    ? new XD("/edit", "unknown", a, !1, !1, !1, e)
    : null;
}
function eE(a) {
  var c = qs(ns(a.v));
  a = a.j.get("usp");
  return (c = gE[c]) ? new XD("/", c, void 0, !1, !0, !1, a) : null;
}
function fE(a) {
  var c = a.j.get("usp");
  return a.v === "/create" ? new XD("/create", "kix", void 0, !0, !1, !1, c) : null;
}
var gE = { "": "kix", "/": "kix", "/docs": "kix", "/sheets": "ritz", "/slides": "punch" };
function hE(a, c, e, f) {
  var g;
  if ((g = c != null && c.ta != null && c.Na != "none" && c.Na != "network"))
    ((e = iE(e, a.ea)), (g = !(e && e.source != "network")));
  g && ((e = {}), jE(f, a, Error("ad"), ((e.serviceworker_responseFetchMethod = c.Na), e)));
}
function kE(a, c, e, f, g, h) {
  this.B = a;
  this.ib = c;
  this.j = e;
  this.v = f;
  this.o = h;
  this.A = g;
}
kE.prototype.getType = ba("B");
function lE(a, c, e, f, g) {
  return mE(a, c, e, a.j.o.B, f, g);
}
function nE(a, c, e, f, g, h, k, l) {
  a = lE(a, c, e, l ? f : null, g);
  c = {};
  c.ouri = h;
  c.et = 2;
  c.id = k;
  return ts(a, c);
}
function oE(a, c, e, f, g, h, k) {
  a = lE(a, c, e, k ? f : null, g);
  c = {};
  c.ouri = h;
  c.et = 3;
  return ts(a, c);
}
function pE(a, c, e, f, g) {
  var h = Al(a.ib),
    k = h[5];
  c && a.v && (k += "/d/" + c);
  var l = V(a.A, "docs-erkpp");
  f != null && l && (k += "/r/" + f);
  k += e ? e : "/edit";
  e = {};
  c && !a.v && (e.id = c);
  f == null || l || (e.resourcekey = f);
  g != null && (e.usp = g);
  a = Ps(e) ? null : Hl(e);
  return yl(h[1], h[2], h[3], h[4], k, a);
}
function qE(a, c) {
  if (!c) return null;
  c = qs(ns(Bl(Al(c)[5] || null) || ""));
  a = Bl(Al(a.ib)[5] || null) || "/";
  if (!cb(c, a)) return null;
  a = c.substring(a.length);
  return cb(a, "/") ? a : "/" + a;
}
kE.prototype.zb = function (a) {
  var c = qE(this, a);
  if (!c) return null;
  var e = this.getType(),
    f = Nl(a, "usp");
  if ($D(this.j, c)) return new XD(c, e, void 0, !0, !1, !1, f);
  if (aE(this.j, c)) return new XD(c, e, void 0, !1, !0, !1, f);
  if (this.j.o.C == c) return new XD(c, e, void 0, !1, !0, !0);
  if (this.j.o.B == c) return new XD(c, e, void 0, !1, !1, !0);
  if (bE(this.j, c))
    return ((a = (a = rs(a)) && a.id ? a.id : void 0), new XD(c, e, a, !1, !1, !0));
  f = new Ws(a);
  a = f.j.get("usp");
  if (cb(c, "/d/")) {
    f = c.indexOf("/", 3);
    f < 0 && ((c += "/"), (f = c.indexOf("/", 3)));
    var g = c.substring(3, f);
    c = c.substring(f);
    cb(c, "/r/") && ((f = c.indexOf("/", 3)), (c = f < 0 ? "/" : c.substring(f)));
    e = new XD(c, e, g, !1, !1, !1, a);
  } else e = (f = f.j.get("id")) ? new XD(c, e, f, !1, !1, !1, a) : null;
  return e && ZD(this.j, e.o) ? e : null;
};
function mE(a, c, e, f, g, h) {
  a = Ql(a.ib, f);
  f = [];
  h && f.push("ouid=" + encodeURIComponent(String(h)));
  g && (f.push("forcehl=1"), f.push("hl=" + encodeURIComponent(String(g))));
  c && f.push("jobset=" + c);
  qt() && f.push("Debug=true");
  e && f.push("ftrack=1");
  return (a += "?" + f.join("&"));
}
var RD = ["/create"],
  rE = "/comment /edit /htmlview /preview /view /".split(" ");
function sE(a) {
  var c = new MD("/offline/hs", "/offline/error");
  ND(c, rE, "/offline/edit", 2);
  ND(c, [], "/offline/view", 1);
  ND(c, [], "/offline/comment", 4);
  ND(c, [], "/offline/viewcomments", 5);
  PD(c);
  QD(c);
  return new kE("kix", "/document", new YD(c), V(a, "udurls"), a);
}
function tE(a) {
  var c = new MD(void 0, "/offline/error");
  ND(c, rE, "/offline/edit", 2);
  ND(c, [], "/offline/view", 1);
  ND(c, [], "/offline/comment", 4);
  ND(c, [], "/offline/viewcomments", 5);
  QD(c);
  return new kE("drawing", "/drawings", new YD(c), V(a, "udurls"), a);
}
function uE(a) {
  var c = new MD("/offline/hs", "/offline/error");
  ND(c, rE, "/offline/edit", 2);
  ND(c, [], "/offline/view", 1);
  ND(c, [], "/offline/comment", 4);
  ND(c, [], "/offline/viewcomments", 5);
  QD(c);
  PD(c);
  var e = new MD();
  ND(e, ["/localpresent"], "/offline/localpresent", 1);
  return new kE("punch", "/presentation", new YD(c, [e]), V(a, "udurls"), a);
}
function vE(a) {
  var c = new MD("/offline/hs", "/offline/error");
  ND(c, rE, "/offline/edit", 2);
  ND(c, [], "/offline/view", 1);
  ND(c, [], "/offline/comment", 4);
  ND(c, [], "/offline/viewcomments", 5);
  QD(c);
  PD(c);
  SD(c);
  return new kE("ritz", "/spreadsheets", new YD(c), V(a, "udurls"), a, function (e) {
    return { dl: e.docLocale };
  });
}
function wE(a) {
  var c = [];
  c.push(sE(a));
  c.push(tE(a));
  c.push(uE(a));
  c.push(vE(a));
  return new Map(
    c.map(function (e) {
      return [e.getType(), e];
    }),
  );
}
function xE(a, c, e, f) {
  this.j = a;
  this.v = e;
  this.A = c;
  this.o = f;
}
function yE(a, c, e, f, g, h, k, l) {
  var p = e.V(),
    q = Km(c, "acjf", p);
  if (q != null) var r = Nm(q);
  else ((p = Km(c, "acl", p)), p != null ? (r = Kh(p)) : (r = 0), (r = to(r)));
  r =
    !0 === Ld(Se(r, 6, L)) && !0 === Ld(Se(r, 4, L))
      ? 3
      : !0 === Ld(Se(r, 4, L))
        ? 2
        : !0 === Ld(Se(r, 3, L))
          ? 4
          : !0 === Ld(Se(r, 2, L))
            ? 5
            : !0 === Ld(Se(r, 1, L))
              ? 1
              : 0;
  a.A || (r = 1);
  p = Lo(c);
  switch (f) {
    case 0:
      l = I.location.href;
      break;
    case 1:
      if (h === void 0) throw Error("bd");
      l = pE(zE(a, p.getType()), c.V(), h, zm(c, "resourceKey"), l);
      break;
    case 3:
      l = rs(I.window.location.href).turl || "";
      break;
    case 4:
      l = k;
      break;
    default:
      l = pE(zE(a, p.getType()), c.V(), void 0, zm(c, "resourceKey"), l);
  }
  f = zE(a, p.getType());
  g = g ? a.j : null;
  k = r;
  a = l;
  e = e.V();
  a: {
    l = f.j;
    if (h !== void 0) {
      for (r = 0; r < l.j.length; r++)
        if (((p = l.j[r]), TD(p, h))) {
          h = VD(p, k, h);
          break a;
        }
      throw Error("$c");
    }
    h = VD(l.o, k);
  }
  k = Lo(c);
  h = mE(f, k.ia(), k.j, h, g, e);
  e = {};
  g = window;
  (Nl(g.location.href, "Debug") != "true" && Nl(g.location.href, "debug") != "true") ||
    (e.Debug = "true");
  e.id = c.V();
  (g = (g = Cm(c, "docosKeyData")) ? (g.length == 0 ? "c" : "d") : null) && (e.cm = g);
  e["new"] = String(!0 === Am(c, "inc"));
  e.ouri = a;
  (a = vm(c, "startupHints")) && f.o && Object.assign(e, f.o(a));
  c = zm(c, "resourceKey");
  c != null && (e.resourcekey = c);
  return ts(h, e);
}
function AE(a, c, e, f, g, h) {
  e = zE(a, e);
  f = pE(e, null, f, null);
  a = mE(e, h, br(c), e.j.o.C, g ? a.j : null, c.V());
  return ts(a, { ouri: f });
}
function zE(a, c) {
  a = a.o.get(c);
  if (!a) throw Error("cd`" + c);
  return a;
}
xE.prototype.zb = function (a) {
  return this.v.zb(a);
};
function BE(a) {
  a = lt(a);
  a.A || Xs(a, CE.A);
  a.o || ((a.o = CE.o), Ys(a, CE.C));
  return a.toString();
}
var CE = new Ws(I.location.href);
function DE(a, c, e) {
  this.Ga = a;
  this.j = c;
  if (c === null && e !== null) throw Error("dd");
  this.o = e;
}
DE.prototype.sa = function () {
  return this.j !== null;
};
function EE(a) {
  if (!a.j) throw Error("fd");
  return a.j;
}
DE.prototype.Ha = function () {
  return this.Ga.split("_")[0];
};
DE.prototype.ia = function () {
  var a = EE(this);
  a = ae(Se(a, 1, void 0, void 0));
  return (a = a == null ? void 0 : a.split("_")) ? a[a.length - 1] : "";
};
function FE(a) {
  this.G = M(a);
}
D(FE, R);
FE.prototype.ca = function () {
  return Af(this, 1);
};
function GE(a) {
  this.G = M(a);
}
D(GE, R);
var HE = Og(GE);
function PF(a) {
  this.j = a
    ? rf(a, FE, 1).reduce(function (c, e) {
        var f = Df(e, 1);
        c[f] = e;
        return c;
      }, {})
    : {};
}
function QF(a, c) {
  var e = !1;
  c = Ts(c);
  for (var f in a.j) c[f] || (delete a.j[f], (e = !0));
  return e;
}
function RF(a) {
  this.G = M(a);
}
D(RF, R);
RF.prototype.getType = function () {
  return Bf(this, 1);
};
RF.prototype.ca = function () {
  return Af(this, 2);
};
function SF(a) {
  this.G = M(a);
}
D(SF, R);
var TF = Og(SF);
function UF(a) {
  this.G = M(a);
}
D(UF, R);
var VF = Og(UF);
function WF(a) {
  this.G = M(a);
}
D(WF, R);
WF.prototype.ca = function () {
  return Af(this, 2);
};
function XF(a) {
  this.G = M(a);
}
D(XF, R);
var YF = Og(XF);
function ZF(a, c) {
  this.j = a;
  this.o = c;
}
function $F(a, c, e) {
  a = a.j + "_" + c;
  return e ? a + "_" + e : a;
}
function aG(a) {
  return a.j + "_static_resource_archive";
}
function bG(a) {
  var c = new Request("//resource_archive_metadata");
  return a.match(c).then(function (e) {
    return e
      ? e.text().then(function (f) {
          return f ? new PF(HE(f)) : null;
        })
      : null;
  });
}
function cG(a, c) {
  var e = a.put,
    f = new Request("//resource_archive_metadata"),
    g = Response,
    h = new GE();
  sf(h, FE, 1, Ms(c.j));
  return e.call(a, f, new g(mg(h)));
}
function dG(a) {
  a.set("docs-lfth", String(Date.now()));
}
function eG(a, c) {
  var e = {};
  var f = !a.headers || a.headers.entries().next().done;
  e.serviceworker_fetchUrl = a.url;
  e.serviceworker_isUrlMissing = String(!a.url);
  e.serviceworker_isBodyMissing = String(!a.body);
  e.serviceworker_headersMissing = String(f);
  f = !a.url || !a.body || f;
  a = c && fG(a, e) == null;
  if (f || a) throw pl(Error("gd"), e);
}
function fG(a, c) {
  c = c === void 0 ? {} : c;
  a = a.headers.get("cache-control");
  c.serviceworker_cacheControlHeader = a;
  c.serviceworker_isCacheControlHeaderMissing = String(!a);
  if (!a) return null;
  a = a.toLowerCase();
  if (a.indexOf("no-cache") != -1) return 0;
  a = gG.exec(a);
  c.serviceworker_isMaxAgeMissing = String(!a);
  return a ? parseInt(a[1], 10) * 1e3 : null;
}
function hG(a, c) {
  return Promise.resolve().then(function () {
    return c.keys().then(function (e) {
      return e.filter(function (f) {
        return f.startsWith(a.j);
      });
    });
  });
}
function iG(a, c) {
  var e = aG(a);
  return hG(a, c).then(function (f) {
    return f.filter(function (g) {
      return g != e;
    });
  });
}
function jG(a, c, e, f) {
  f = f === void 0 ? !1 : f;
  return kG(c).then(function (g) {
    return g === null
      ? new DE(e, null, null)
      : f
        ? lG(a, g, c).then(function (h) {
            return new DE(e, g, h);
          })
        : new DE(e, g, null);
  });
}
function mG(a, c, e) {
  e = e === void 0 ? !1 : e;
  return iG(a, c).then(function (f) {
    f = f.map(function (g) {
      return c.open(g).then(function (h) {
        return jG(a, h, g, e);
      });
    });
    return Promise.all(f);
  });
}
function lG(a, c, e) {
  c = rf(c, RF, 3)
    .filter(function (f) {
      return wf(f, 1, Re) == 1;
    })
    .map(function (f) {
      f = V(a.o, "docs-sw-eol") ? Af(f, 6) : f.ca();
      return nG(e, f);
    });
  return Promise.all(c).then(function (f) {
    return f.filter(function (g) {
      return !!g;
    });
  });
}
function oG(a, c) {
  return mG(a, c, !0).then(function (e) {
    e = e
      .filter(function (f) {
        return f.sa();
      })
      .flatMap(function (f) {
        if (!f.o) throw Error("ed");
        return f.o.flatMap(function (g) {
          return rf(g, WF, 1);
        });
      })
      .map(function (f) {
        return BE(f.ca());
      });
    return Ts(e);
  });
}
function pG(a) {
  return a.match(new Request("//cache_metadata")).then(function (c) {
    return c
      ? c.text().then(function (e) {
          return e ? VF(e) : null;
        })
      : null;
  });
}
function kG(a) {
  return a.match(new Request("//manifest_cache_is_complete")).then(function (c) {
    return c
      ? c.text().then(function (e) {
          return e ? TF(e) : null;
        })
      : null;
  });
}
function nG(a, c) {
  c = BE(c);
  return a.match(new Request(c)).then(function (e) {
    return e ? qG(e) : null;
  });
}
function rG(a) {
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
      throw Error("hd`" + a);
  }
}
function qG(a, c) {
  a = new Map(a.headers.entries());
  if (!a.has("x-cachemanifest")) return null;
  try {
    return YF(a.get("x-cachemanifest"));
  } catch (e) {
    return (c && sG(c, pl(Error("id`" + e))), null);
  }
}
function tG(a) {
  return Promise.resolve()
    .then(function () {
      return YB(a);
    })
    .then(function (c) {
      return new Promise(function (e, f) {
        nB(c.Cb(), e, f);
      });
    });
}
var gG = /max-age=([0-9]+)/;
function uG(a) {
  a = new Ws(a);
  return a.o === "fonts.googleapis.com" && a.v === "/css";
}
function vG(a) {
  a = new Ws(a).o;
  return a.endsWith(".ggpht.com") || a.endsWith(".googleusercontent.com");
}
function wG(a) {
  a = new Ws(a);
  var c = a.v.split("/").pop();
  return a.o.endsWith(".google.com") && a.v.includes("/ac/") && c.startsWith("logo.");
}
function xG(a) {
  var c = new Ws(a);
  return (
    (((c.o.startsWith("photos-image-dev.") && c.o.endsWith(".google.com")) ||
      c.o.endsWith(".googleusercontent.com") ||
      c.o.endsWith(".ggpht.com")) &&
      c.v.includes("/ogw/")) ||
    yG(a)
  );
}
function yG(a) {
  a = new Ws(a);
  return (
    !a.o.startsWith("photos-image-dev.") && a.o.endsWith(".google.com") && a.v.includes("/ogw/")
  );
}
function zG(a, c, e) {
  a = AG(a);
  return I.fetch(a, c).then(function (f) {
    var g,
      h = (g = f.headers.get("content-type")) == null ? void 0 : g.includes("text/plain");
    if (e < 2 && h)
      return f.text().then(function (k) {
        return zG(k, c, e + 1);
      });
    if (h) throw Error("jd");
    return f;
  });
}
function AG(a) {
  a = new URL(a);
  var c = a.searchParams;
  c.set("alr", "yes");
  a.search = c.toString();
  return a.toString();
}
var BG =
    /\/_\/[^/]+\/_\/js\/|\.gstatic\.|\/doclist\/|\/static\/|googleusercontent\.com\/|google\.com\/images\/errors\/|apis\.google\.com/,
  CG = ["/cleardot.gif", "/netcheck.gif", "//csi.gstatic.com/csi"];
function DG(a) {
  return xG(a) || wG(a) || uG(a)
    ? !0
    : BG.test(a) &&
        CG.every(function (c) {
          return !a.includes(c);
        });
}
function EG(a) {
  if (a.W) return a.W && a.W.o.includes("offline/iframeapi") ? !1 : !0;
  a = a.j.A;
  return !!a && FG.includes(a);
}
var FG = [2, 3];
var GG = {
  "undefined-cold-start-reason": 0,
  offline: 1,
  "server-error": 2,
  "flaky-connection-pre-response": 3,
  "direct-cold-start": 6,
  "server-document-not-found": 7,
  "server-document-deleted": 8,
  "server-suggested": 9,
  "missing-application-metadata": 10,
  "redirect-skipped": 11,
  "resource-not-cached": 12,
  "corrupted-resource": 13,
  "unexpected-error-from-fetcher": 14,
  "local-store-error": 15,
};
function HG(a) {
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
function IG(a, c) {
  a.v.push(c);
}
function jE(a, c, e, f) {
  f = f === void 0 ? {} : f;
  f.serviceworker_isNullResponse = "false";
  JG(a, c, f, e);
  KG(a, e, f);
}
function LG(a, c, e) {
  e = e === void 0 ? {} : e;
  cx(
    a.j,
    function () {
      var f = e;
      f = f === void 0 ? {} : f;
      f.serviceworker_codePath = "install";
      MG(a, c, f);
    },
    a,
  )();
}
function NG(a, c, e, f, g) {
  f = f === void 0 ? "info" : f;
  g = g === void 0 ? {} : g;
  g.serviceworker_cacheUpdateError = "true";
  g.serviceworker_codePath = e;
  f === "warning" ? MG(a, c, g) : f === "fatal" ? OG(a, c, g) : KG(a, c, g);
}
function sG(a, c, e, f) {
  e = e === void 0 ? {} : e;
  NG(a, c, "internalCacheUpdate", f === void 0 ? "info" : f, e);
}
function PG(a, c) {
  var e = e === void 0 ? {} : e;
  e.serviceworker_codePath = "activate";
  KG(a, c, e);
}
function QG(a, c, e, f) {
  f = f === void 0 ? {} : f;
  f.serviceworker_codePath = "messageHandler";
  e && (f.serviceworker_messageHandler_requestType = wf(e, 1, Re));
  KG(a, c, f);
}
function RG(a, c, e, f) {
  f = f === void 0 ? null : f;
  var g = g === void 0 ? {} : g;
  var h = e.hb,
    k = EG(c);
  g.serviceworker_isCritical = String(k);
  JG(a, c, g, h);
  var l = !e.ta;
  g.serviceworker_isNullResponse = String(l);
  g.serviceworker_fetchMethod = e.Na;
  g.fetch_handling_recovery = l ? (f && f.type != "error" ? "error_page" : "none") : "fallback";
  c = c.j.A;
  if (l && k) {
    k = V(a.A, "docs-sw-erdcbnc");
    if (!(k = h && h instanceof SC && k && c && SG.includes(c))) {
      if ((k = h && h instanceof SC))
        ((k = sm(a.A, "docs-sw-edubnc")),
          k != 0 && h.j == 0
            ? (h.o > k
                ? (g.nonfatalReason = "user has never succeeded a cache update")
                : ((g.nonfatalReason =
                    "no record of any successful cache update but opted-in before tracking"),
                  (g["apps_telemetry.classification"] = (6).toString()),
                  (g["apps_telemetry.classification_code"] = (8).toString())),
              (k = !0))
            : (k = !1));
      k = k || (h && h instanceof UB && h.A);
    }
    k = k ? !1 : !0;
  } else k = !1;
  k ? OG(a, h || Error(HG(e.ya)), g) : h && MG(a, h, g);
}
function TG(a) {
  xc(a, "__INTERNAL_errorShouldBeSampled", "true");
}
function UG(a) {
  return a instanceof TypeError && a.message == "Failed to fetch";
}
function JG(a, c, e, f) {
  f = f === void 0 ? null : f;
  e.serviceworker_navigatorIsOnline = String(I.navigator.onLine);
  f instanceof TypeError && (e.serviceworker_fetchErrorReason = "type_error");
  f = c.W
    ? c.W.B
      ? "coldStartUrl"
      : c.W.D
        ? "homescreenAction"
        : c.W.C
          ? "editorCreateAction"
          : c.W.A
            ? "offlineCommonAction"
            : "editorAction"
    : c.A
      ? "staticContent"
      : null;
  f != null && (e.serviceworker_requestType = f);
  c.W && c.W.j != null && (e.sw_docType = c.W.j);
  e.serviceworker_resourceCategory = String(c.j.A);
  f = c.ea;
  var g = Bl(Al(f.url)[5] || null);
  g = g.substring(g.lastIndexOf("/"));
  VG.indexOf(g) > -1 && (e.serviceworker_actionPath = g);
  e.serviceworker_fetchError_fullUrl = TC(f.url);
  e.serviceworker_codePath = "fetch";
  e.serviceworker_requestMode = f.mode;
  e.serviceworker_requestDestination = f.destination;
  e.serviceworker_requestRedirectMode = f.redirect;
  e.serviceworker_clientId = c.o || "";
  (g = Nl(f.url, "usp")) && (e.serviceworker_fetchUsp = g);
  f = lt(f.referrer);
  f = at(f, "");
  f = $s(f, "");
  e.serviceworker_referrer = f.toString();
  for (f = 0; f < a.v.length; f++) {
    g = (0, a.v[f])(c);
    for (var h in g) e[h] = g[h];
  }
}
function OG(a, c, e) {
  a.o != null ? nx(a.j, c, a.o, e, !1, 2) : Tw(a.j, c, e);
}
function MG(a, c, e) {
  a.o != null ? nx(a.j, c, a.o, e, !1, 1) : bx(a.j, c, e);
}
function KG(a, c, e) {
  a.o != null
    ? nx(a.j, c, a.o, e, !1, 0)
    : yc(c).__INTERNAL_errorShouldBeSampled === "true"
      ? nx(a.j, c, 2, e)
      : a.j.info(c, e);
}
var VG = "/comment /create /edit /hs /view /preview /viewcomments /open".split(" "),
  SG = [2, 3];
function WG(a, c, e, f) {
  a = new Request(a, c);
  return XG(a, e, 0, f === void 0 ? null : f, !0, !1).catch(function (g) {
    g = nl(g);
    UG(g) && TG(g);
    throw g;
  });
}
function XG(a, c, e, f, g, h) {
  var k = {};
  g && (k.redirect = "error");
  h && (k.cache = "no-store");
  YG(a.url) && (k.credentials = "include");
  return (xG(a.url) ? zG(a.url, k, 0) : I.fetch(a.clone(), k))
    .then(function (l) {
      if (l.status !== 200) {
        var p = { serviceworker_fetchErrorReason: "failure_response_status" };
        p.serviceworker_responseStatus = String(l.status);
        throw pl(new RC(l.status, "Invalid response status."), p);
      }
      return l;
    })
    .catch(function (l) {
      e += 1;
      if (e >= c) {
        var p = {};
        p.serviceworker_fetchUrl = a.url;
        l instanceof TypeError && (p.serviceworker_fetchErrorReason = "type_error");
        I.navigator &&
          I.navigator.onLine != null &&
          (p.serviceworker_navigatorIsOnline = String(I.navigator.onLine));
        throw pl(l, p);
      }
      f && e === 1 && f();
      return XG(a, c, e, f, g, !0);
    });
}
var ZG = [wG, xG];
function YG(a) {
  return ZG.some(function (c) {
    return c(a);
  });
}
function $G(a, c, e, f) {
  f = f === void 0 ? 3 : f;
  this.o = a;
  this.j = c;
  this.A = e;
  this.v = f;
}
function aH(a, c, e) {
  bH(a.j, c.length);
  c = c.map(function (f) {
    return function () {
      return cH(a, e, f);
    };
  });
  return Is(new Hs(c, 5)).then(function (f) {
    var g = f
      .filter(function (h) {
        return !h.Vc;
      })
      .map(function (h) {
        return function () {
          return cH(a, e, h.entry, !0);
        };
      });
    return Is(new Hs(g, 1)).then(function (h) {
      return dH(a, f.concat(h));
    });
  });
}
function dH(a, c) {
  var e = eH(c),
    f = e.Re;
  fH(a, e.Pe, c.length);
  a = f.flatMap(function (g) {
    return rf(g.Vc, WF, 1);
  });
  Ob(a, function (g) {
    return g.ca();
  });
  return a;
}
function cH(a, c, e, f) {
  f = f === void 0 ? !1 : f;
  var g = e.ca();
  return WG(
    g,
    { headers: { "x-include-cachemanifest": "true" }, credentials: "include" },
    a.v,
    function () {
      a.j.N++;
    },
  )
    .then(function (h) {
      var k = qG(h, a.o);
      try {
        eG(h, !0);
      } catch (p) {
        var l = {};
        sG(
          a.o,
          p,
          ((l.serviceworker_fetchUrl = g), (l.serviceworker_isResourceFromServer = "true"), l),
        );
      }
      k == null && gH(a, g, h, f || !1);
      l = V(a.A, "docs-sw-eol")
        ? new Request(ae(Se(e, 6, void 0, void 0)) != null ? Af(e, 6) : g)
        : new Request(g);
      dG(l.headers);
      return c.put(l, h).then(function () {
        hH(a.j, !1, !0, !1);
        return new iH(e, k);
      });
    })
    .catch(function (h) {
      hH(a.j, !1, !1, !1);
      throw h;
    });
}
function eH(a) {
  var c = [],
    e = [];
  a.forEach(function (f) {
    f.Vc ? c.push(f) : e.push(f);
  });
  return { Re: c, Pe: e };
}
function fH(a, c, e) {
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
    sG(a.o, Error(g), e, c ? "warning" : "info");
  }
}
function gH(a, c, e, f) {
  var g = "";
  var h = E(e.headers.entries()),
    k = h.next(),
    l;
  try {
    for (; !k.done; k = h.next()) {
      var p = k.value;
      g += p[0] + ": [" + vl(p[1]) + "]; ";
    }
  } finally {
    k && !k.done && (l = h.return) && l.call(h);
  }
  h = e.headers.has("x-cachemanifest") ? e.headers.get("x-cachemanifest") : "";
  k = e.headers.has("reporting-endpoints") ? e.headers.get("reporting-endpoints") : "";
  l = e.headers.has("x-l2-request-path") ? e.headers.get("x-l2-request-path") : "";
  p = {};
  sG(
    a.o,
    Error(
      f
        ? "Inline manifest is missing from response after retry."
        : "Inline manifest is missing from response.",
    ),
    ((p.serviceworker_fetchUrl = c),
    (p.serviceworker_responseHeadersSnapshot = g),
    (p.serviceworker_responseHeaderCacheManifestRelease = e.headers.get("x-cachemanifest-release")),
    (p.serviceworker_responseHeaderInlineCacheManifest = vl(h)),
    (p.serviceworker_responseHeaderReportingEndpoints = vl(k)),
    (p.serviceworker_responseHeaderL2RequestPath = vl(l)),
    p),
  );
}
function iH(a, c) {
  this.entry = a;
  this.Vc = c;
}
function jH(a, c) {
  c = c === void 0 ? !1 : c;
  this.Vd = a === void 0 ? !1 : a;
  this.Wc = c;
}
jH.prototype.sa = ba("Vd");
function kH(a, c) {
  this.o = a;
  this.j = c;
}
function lH(a, c) {
  return c.open(aG(a.o)).then(function (e) {
    return e.keys();
  });
}
function mH(a, c) {
  return a
    .map(function (e) {
      return BE(e);
    })
    .filter(function (e) {
      return !(e in c);
    });
}
function nH(a) {
  return a.match(new Request("//manifest_cache_is_complete")).then(function (c) {
    return !!c;
  });
}
function oH(a, c, e) {
  var f = V(a.j, "docs-sw-eol");
  a = c.map(function (g) {
    return f ? Df(g, 2) : Df(g, 6);
  });
  return mH(a, e).length == 0;
}
function pH(a, c, e, f, g) {
  var h = V(a.j, "docs-sw-eol"),
    k = rf(f, RF, 3).filter(function (l) {
      return wf(l, 1, Re) === 1;
    });
  return e.keys().then(function (l) {
    return lH(a, c).then(function (p) {
      if (l.length > 0 && p.length == 0 && g) {
        var q = {};
        sG(g, Error("kd"), ((q.serviceworker_invalidCacheType = "chrome_corruption_recovery"), q));
        return new jH();
      }
      q = Ts(
        l.map(function (w) {
          return w.url;
        }),
      );
      var r = k.map(function (w) {
        return h ? Df(w, 6) : Df(w, 2);
      });
      r = mH(r, q);
      if (r.length != 0 && g)
        return (
          (p = {}),
          (p =
            ((p.serviceworker_invalidCacheType = "missing_action_resource"),
            (p.serviceworker_fetchUrl = r.sort().toString()),
            p)),
          oH(a, k, q) &&
            ((p.serviceworker_invalidCacheType = "stale_locale_flag"), (p.locale_flag_enabled = h)),
          sG(g, Error("kd"), p),
          new jH()
        );
      q = qH(e, f, k, p, h, g);
      return Promise.allSettled(q).then(function (w) {
        var y = w.map(function (z) {
          return z.value;
        });
        w = y.every(function (z) {
          return z.sa();
        });
        y = y.every(function (z) {
          return z.Wc;
        });
        return new jH(w, y);
      });
    });
  });
}
function qH(a, c, e, f, g, h) {
  var k = Ts(
    f.map(function (l) {
      return l.url;
    }),
  );
  return e.map(function (l) {
    l = g ? Af(l, 6) : l.ca();
    var p = BE(l);
    return a.match(new Request(p)).then(function (q) {
      if (q == null)
        return (
          h &&
            ((q = {}),
            sG(
              h,
              Error("ld"),
              ((q.serviceworker_invalidCacheType = "unexpected_internal_error"), q),
            )),
          new jH()
        );
      q = qG(q, h);
      if (q == null)
        return (
          h &&
            ((q = {}),
            sG(
              h,
              Error("md"),
              ((q.serviceworker_invalidCacheType = "unexpected_internal_error"),
              (q.serviceworker_fetchUrl = p),
              q),
            )),
          new jH()
        );
      var r = rf(q, WF, 1).map(function (w) {
        return Df(w, 2);
      });
      r = mH(r, k);
      if (r.length != 0 && h)
        return (
          (q = {}),
          sG(
            h,
            Error("kd"),
            ((q.serviceworker_invalidCacheType = "missing_static_resource"),
            (q.serviceworker_fetchUrl = r.sort().toString()),
            q),
          ),
          new jH()
        );
      r = !0;
      Cf(q, 2) != Cf(c, 5) && (r = !1);
      return new jH(!0, r);
    });
  });
}
function rH(a, c, e) {
  this.request = a;
  this.j = c;
  this.metadata = e;
}
function sH(a) {
  this.o = a;
  this.j = this.v = 0;
}
A = sH.prototype;
A.match = function (a, c) {
  var e = this;
  this.v++;
  return this.o.match(a, c).finally(function () {
    e.v--;
  });
};
A.matchAll = function (a, c) {
  var e = this;
  this.v++;
  return this.o.matchAll(a, c).finally(function () {
    e.v--;
  });
};
A.add = function (a) {
  var c = this;
  this.j++;
  return this.o.add(a).finally(function () {
    c.j--;
  });
};
A.addAll = function (a) {
  var c = this;
  this.j++;
  return this.o.addAll(a).finally(function () {
    c.j--;
  });
};
A.put = function (a, c) {
  var e = this;
  this.j++;
  return this.o.put(a, c).finally(function () {
    e.j--;
  });
};
A.delete = function (a, c) {
  var e = this;
  this.j++;
  return this.o.delete(a, c).finally(function () {
    e.j--;
  });
};
A.keys = function (a, c) {
  var e = this;
  this.v++;
  return this.o.keys(a, c).finally(function () {
    e.v--;
  });
};
function tH(a, c, e) {
  this.j = a;
  this.B = c;
  this.v = e;
  this.A = Promise.resolve(null);
  this.o = null;
}
function uH(a) {
  return vH(a)
    .then(u())
    .catch(function (c) {
      var e = a.B;
      c = nl(c);
      MG(e, c);
    });
}
A = tH.prototype;
A.match = function (a, c) {
  return this.j.match(a, c);
};
A.has = function (a) {
  return this.j.has(a);
};
A.open = function (a) {
  var c = this;
  return a == this.v
    ? this.A.then(function (e) {
        return e != null ? e : vH(c);
      })
    : this.j.open(a);
};
function vH(a) {
  var c = a.j.open(a.v).then(function (e) {
    a.o = new sH(e);
    return a.o;
  });
  a.A = c.catch(x(null));
  return c;
}
A.delete = function (a) {
  a == this.v && ((this.A = Promise.resolve(null)), (this.o = null));
  return this.j.delete(a);
};
A.keys = function () {
  return this.j.keys();
};
function wH(a, c, e, f, g, h) {
  var k = k === void 0 ? 3 : k;
  this.C = h;
  this.B = c;
  this.F = new kH(c, h);
  this.o = a;
  this.v = e;
  this.j = f;
  this.D = Af(e, 1);
  this.A = g;
  this.I = k;
  this.N = new $G(f, g, h, k);
}
function xH(a) {
  return $F(a.B, a.D, Df(a.v, 2));
}
wH.prototype.update = function () {
  var a = this;
  return this.o.open(xH(this)).then(function (c) {
    return nH(c)
      .then(function (e) {
        if (e) return pH(a.F, a.o, c, a.v, a.j);
      })
      .then(function (e) {
        if (e && e.Vd && e.Wc) Df(a.v, 2);
        else
          return yH(a, c, e).then(function () {
            return zH(a);
          });
      });
  });
};
function zH(a) {
  return a.o
    .open(xH(a))
    .then(function (c) {
      return nH(c);
    })
    .then(function (c) {
      c || sG(a.j, Error("nd"));
    })
    .catch(function (c) {
      sG(a.j, Error("od`" + c.message));
    });
}
function yH(a, c, e) {
  var f = {},
    g =
      ((f.serviceworker_updatingExistingCache = !!e),
      (f.serviceworker_cacheFullyPopulatedBeforeUpdate = e && e.sa()),
      (f.serviceworker_cacheConsistentBeforeUpdate = e && e.Wc),
      f);
  return AH(a, c)
    .then(function () {
      var h = a.v;
      return c.put(new Request("//manifest_cache_is_complete"), new Response(mg(h)));
    })
    .catch(function (h) {
      return BH(a, h, g);
    });
}
function BH(a, c, e) {
  return V(a.C, "docs-sw-eddfpc") && e.serviceworker_cacheFullyPopulatedBeforeUpdate
    ? Promise.resolve()
    : a.o
        .delete(xH(a))
        .then(function () {
          return iG(a.B, a.o);
        })
        .then(function (f) {
          var g = V(a.C, "docs-sw-ernec");
          f.length === 0 &&
            g &&
            ((f = Error("pd`" + c.message)),
            (e.serviceworker_fetchUrl = yc(c).serviceworker_fetchUrl),
            sG(a.j, f, e));
          throw pl(c, { failedCacheName: a.D });
        });
}
function AH(a, c) {
  return a.o
    .open(aG(a.B))
    .then(function (e) {
      return bG(e).then(function (f) {
        var g = f || new PF();
        f = rf(a.v, RF, 3).filter(function (h) {
          return wf(h, 1, Re) === 1;
        });
        return aH(a.N, f, c).then(function (h) {
          return CH(a, e, h, g);
        });
      });
    })
    .catch(function (e) {
      e instanceof RC && e.B == 412 && TG(e);
      throw e;
    });
}
function CH(a, c, e, f) {
  DH(a.A, e.length);
  e = e.map(function (g) {
    return function () {
      return EH(a, c, g, f);
    };
  });
  return Is(new Hs(e, 5)).finally(function () {
    return cG(c, f).catch(u());
  });
}
function EH(a, c, e, f) {
  var g = e.ca(),
    h = Date.now(),
    k = !1,
    l = { headers: {} };
  return FH(a, c, e)
    .then(function (p) {
      if (p) k = !0;
      else
        return WG(g, l, a.I, function () {
          a.A.M++;
        }).then(function (q) {
          try {
            eG(q, !0);
          } catch (w) {
            var r = {};
            sG(
              a.j,
              nl(w),
              ((r.serviceworker_manifestUrl = g),
              (r.serviceworker_isResourceFromServer = "true"),
              r),
            );
          }
          r = new Request(g);
          dG(r.headers);
          return c.put(r, q);
        });
    })
    .then(function () {
      var p = BE(g),
        q = f.j[p];
      q || ((q = new FE()), Gf(q, 1, p), (f.j[p] = q));
      Ff(q, 2, h);
      hH(a.A, !0, !0, k);
    })
    .catch(function (p) {
      hH(a.A, !0, !1, k);
      if (V(a.C, "docs-edclcf") && (wG(g) || xG(g))) {
        var q = {};
        sG(a.j, p, ((q.serviceworker_isOptionalResource = "true"), q));
        return Promise.resolve();
      }
      throw p;
    });
}
function FH(a, c, e) {
  var f = e.ca();
  return GH(a, c, f).then(function (g) {
    if (!g) return null;
    var h = g.request;
    g = g.j;
    try {
      eG(g, !0);
    } catch (p) {
      return (
        TG(p),
        (h = {}),
        sG(
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
    var l = fG(g) || 0;
    return k === null || Date.now() > k + l ? null : new HH(h, g);
  });
}
function GH(a, c, e) {
  return c.keys(e).then(function (f) {
    return f.length == 0
      ? null
      : c.match(e).then(function (g) {
          var h = new Request(e).url,
            k = f.some(function (r) {
              return r.url != h;
            }),
            l = !!g && $s(lt(h), null).toString() != $s(lt(g.url), null).toString(),
            p = !!g && xG(h) && vG(g.url);
          if (f.length > 1 || !g || ((k || l) && !p)) {
            p = Error("qd");
            TG(p);
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
            sG(a.j, p, l);
          }
          return (k =
            f.length == 1
              ? f[0]
              : f.find(function (r) {
                  return r.url == h;
                })) && g
            ? new HH(k, g)
            : null;
        });
  });
}
function HH(a, c) {
  this.request = a;
  this.j = c;
}
function IH(a, c) {
  this.D = a;
  this.ha = c;
  this.C = null;
  this.B = !1;
  this.j = this.A = this.T = null;
  this.Z = this.S = !1;
  this.M = this.N = this.I = this.F = this.O = this.J = this.K = this.o = this.v = this.H = 0;
  this.X = this.U = this.R = null;
}
function JH(a, c) {
  var e = Date.now() - a.C,
    f = new pn();
  a: switch (a.ha) {
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
      throw Error("sd");
  }
  f = Hf(f, 1, g);
  c = Q(f, 2, c);
  c = Q(c, 3, a.Z);
  e = Ff(c, 4, e * 1e3);
  e = Ef(e, 5, a.H);
  e = Ef(e, 6, a.v);
  e = Ef(e, 7, a.o);
  e = Ef(e, 8, a.K);
  e = Ef(e, 9, a.J);
  e = Ef(e, 10, a.O);
  e = Ef(e, 11, a.F);
  e = Ef(e, 12, a.I);
  e = Q(e, 13, a.B);
  e = Q(e, 14, a.S);
  e = Ef(e, 16, a.N);
  e = Ef(e, 17, a.M);
  e = Ef(e, 18, a.R);
  e = Ef(e, 19, a.U);
  c = Ef(e, 20, a.X);
  e = new Bn();
  N(e, pn, 6, c);
  a.B &&
    ((c = new ln()), Ef(c, 1, a.T), a.j && Gf(c, 3, a.j), a.A && Gf(c, 2, a.A), N(e, ln, 8, c));
  c = a.D.jb(100007, 0);
  f = KH(c);
  N(f, Bn, 50, e);
  a.D.pa(c);
}
function bH(a, c) {
  a.H++;
  a.o += c;
}
function DH(a, c) {
  a.v += c;
}
function hH(a, c, e, f) {
  c ? (a.K++, e || a.J++, f && a.O++) : (a.F++, e || a.I++);
}
function LH(a, c, e, f, g) {
  c = qp(c, e);
  a.R = c.consecutiveFailureCount;
  c = c.lastSuccessTimestamp;
  e = Date.now();
  var h;
  g = g == null ? void 0 : (h = g.o) == null ? void 0 : xm(h, "optInTime");
  f = f && !c;
  c && (a.U = e - c);
  if (!g) throw Error("rd");
  f && (a.X = e - g);
}
function MH(a) {
  this.v = a;
  this.j = a.filter(function (c) {
    return c.sa();
  });
  this.o = NH(this);
}
function OH(a, c) {
  return (
    a.j.find(function (e) {
      return e.Ga === c;
    }) || null
  );
}
function NH(a) {
  var c = new Map();
  a = E(a.j);
  var e = a.next(),
    f;
  try {
    for (; !e.done; e = a.next()) {
      var g = e.value,
        h = g.ia(),
        k = c.get(h);
      (!k || PH(g) > PH(k)) && c.set(h, g);
    }
  } finally {
    e && !e.done && (f = a.return) && f.call(a);
  }
  return c;
}
function PH(a) {
  if (!a.sa()) return -1;
  a = EE(a);
  a = Cf(a, 6);
  return a == null ? -1 : a;
}
function QH(a, c) {
  var e = this;
  this.v = a;
  this.o = c;
  this.j = this.v.map(function (f) {
    var g = $F(e.o, Af(f, 1), Df(f, 2));
    return new DE(g, f, null);
  });
  this.j.map(function (f) {
    return f.ia();
  });
}
function RH(a, c, e, f) {
  this.o = a;
  this.j = c;
  this.v = e;
  this.A = f;
}
function SH(a, c, e) {
  e = e === void 0 ? null : e;
  if (e != null && e.length == 0) throw Error("td");
  return mG(a.j, a.o).then(function (f) {
    if (f.length != 0) {
      f = new MH(f);
      if (e) {
        var g = new QH(e, a.j);
        g = TH(f, g);
      } else g = Array.from(f.o.values());
      var h = UH(a, f, g, c, e).map(function (k) {
        return a.o.delete(k);
      });
      return Promise.allSettled(h).then(function () {
        return Promise.all(h);
      });
    }
  });
}
function TH(a, c) {
  var e = [];
  c = E(c.j);
  var f = c.next(),
    g;
  try {
    for (; !f.done; f = c.next()) {
      var h = f.value,
        k = OH(a, h.Ga);
      if (k) e.push(k);
      else {
        var l = h.ia(),
          p = a.o.get(l) || null;
        p && e.push(p);
      }
    }
  } finally {
    f && !f.done && (g = c.return) && g.call(c);
  }
  return e;
}
function UH(a, c, e, f, g) {
  var h = e.map(function (q) {
      return q.Ga;
    }),
    k = new Set(h),
    l = c.v;
  e = l
    .map(function (q) {
      return q.Ga;
    })
    .filter(function (q) {
      return !k.has(q);
    });
  var p = e.filter(function (q) {
    return k.has(q);
  });
  p.length != 0 && e.length == k.size && p.length == k.size && (sG(a.v, Error("ud")), (e = []));
  e.length != 0 &&
    e.length == l.length &&
    ((l = c.j),
    (p = V(a.A, "docs-sw-epcc")),
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
      return q.Ga;
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
          return $F(a.j, Af(q, 1), Df(q, 2));
        })
        .join(",")),
    sG(a.v, Error(c), f));
  return e;
}
function VH(a, c, e, f, g, h, k) {
  U.call(this);
  this.C = e;
  this.v = new ZF(e, k);
  this.B = k;
  this.j = new tH(a.caches, g, aG(this.v));
  this.M = c;
  this.D = f;
  this.o = g;
  this.H = a;
  this.F = h;
  this.K = new RH(this.j, this.v, this.o, k);
  this.A = null;
  this.J = !1;
}
D(VH, U);
VH.prototype.start = function () {
  uH(this.j);
};
function WH(a, c) {
  var e = new IH(a.F, c),
    f = XH(a, e)
      .then(function () {
        return YH(a, e);
      })
      .then(function (h) {
        if (h)
          return a.M.get(c).then(function (k) {
            return uH(a.j)
              .then(function () {
                return SH(a.K, c);
              })
              .catch(function (l) {
                var p = {};
                throw pl(
                  l,
                  ((p.serviceworker_cacheCleanupErrorReason = "pre_update_manifest_cleanup"), p),
                );
              })
              .then(function () {
                return ZH(a, c, k, e);
              })
              .catch(function (l) {
                if (l instanceof Error && $H(a, l))
                  return aI(a, l).then(function () {
                    return ZH(a, c, k, e);
                  });
                throw l;
              });
          });
      }),
    g = eu(27e4).then(function () {
      e.Z = !0;
      var h = Error("vd");
      TG(h);
      throw h;
    });
  return Promise.race([f, g])
    .then(function () {
      a.A = null;
    })
    .catch(function (h) {
      a.A = nl(h);
    })
    .then(function () {
      return bI(a, !a.A, e);
    })
    .then(function () {
      return Promise.resolve(a.F.kb())
        .catch(function (h) {
          sG(a.o, nl(h));
        })
        .then(function () {
          if (a.A) throw a.A;
        });
    });
}
function ZH(a, c, e, f) {
  f.S = !0;
  for (var g = [], h = 0; h < e.length; h++) {
    var k = new wH(a.j, a.v, e[h], a.o, f, a.B);
    g.push(k.update());
  }
  return Promise.allSettled(g)
    .then(function () {
      if (e.length) return SH(a.K, c, e);
    })
    .catch(function (l) {
      var p = {};
      sG(
        a.o,
        nl(l),
        ((p.serviceworker_cacheCleanupErrorReason = "post_update_manifest_cleanup"), p),
      );
    })
    .then(function () {
      return cI(a);
    })
    .catch(function (l) {
      var p = {};
      sG(a.o, nl(l), ((p.serviceworker_cacheCleanupErrorReason = "archive_cleanup"), p));
    })
    .then(function () {
      return Promise.all(g);
    });
}
function $H(a, c) {
  return V(a.B, "docs-sw-efcr")
    ? c.message.includes("Unexpected internal error.")
    : c.message == "Unexpected internal error.";
}
function YH(a, c) {
  return tG(a.D).then(function (e) {
    var f = tm(a.B, "docs-offline-lsuid");
    f = e.length == 1 && e[0].V() == f;
    if (!f) {
      var g = tm(a.B, "docs-offline-lsuid");
      c.B = !0;
      c.T = e.length;
      e.length > 0 && ((c.j = g), (c.A = e[0].V()));
    }
    return f;
  });
}
function aI(a, c) {
  return dI(a, c).then(function () {
    return eI(a);
  });
}
function dI(a, c) {
  var e = {},
    f =
      ((e.serviceworker_invalidCacheType = "unexpected_internal_error"),
      (e.serviceworker_runDeleteAll = !0),
      e);
  e = qx(a.B).then(function (h) {
    f.storageAvailable = h.j;
    f.storageUsage = px(h);
  });
  var g = fI(a).then(function (h) {
    f.serviceworker_numCompleteCaches = h.filter(function (k) {
      return k.sa();
    }).length;
    f.serviceworker_numIncompleteCaches = h.filter(function (k) {
      return !k.sa();
    }).length;
  });
  return Promise.allSettled([e, g]).then(function () {
    sG(a.o, c, f);
  });
}
function eI(a) {
  return hG(a.v, a.j).then(function (c) {
    c = c.map(function (e) {
      return a.j.delete(e);
    });
    return gI(c);
  });
}
function hI(a, c) {
  return a.j
    .open(aG(a.v))
    .then(function (e) {
      return e.match(c);
    })
    .then(function (e) {
      return e || null;
    });
}
function iI(a, c) {
  return hG(a.v, a.j).then(function (e) {
    e = e.map(function (f) {
      return a.j.open(f).then(function (g) {
        return jI(g, c);
      });
    });
    return kI(e);
  });
}
function lI(a, c) {
  return hG(a.v, a.j).then(function (e) {
    e = e.map(function (f) {
      return a.j.open(f).then(function (g) {
        return g.match(c);
      });
    });
    return kI(e);
  });
}
function cI(a) {
  return oG(a.v, a.j).then(function (c) {
    return a.j.open(aG(a.v)).then(function (e) {
      return bG(e).then(function (f) {
        var g = f || new PF();
        return e
          .keys()
          .then(function (h) {
            return mI(e, h, g).then(function () {
              return nI(a, e, h, g, c);
            });
          })
          .then(function () {
            return cG(e, g);
          });
      });
    });
  });
}
function mI(a, c, e) {
  c = c.map(function (f) {
    return f.url;
  });
  return QF(e, c) ? cG(a, e) : Promise.resolve();
}
function nI(a, c, e, f, g) {
  return a.H.clients.matchAll({ includeUncontrolled: !0 }).then(function (h) {
    h =
      h.filter(function (k) {
        return k.url.startsWith(a.H.registration.scope);
      }).length == 0;
    return oI(c, e, f, g, h);
  });
}
function oI(a, c, e, f, g) {
  return gI(
    c.map(function (h) {
      var k = e.j[h.url] || null;
      k = k && ti(Se(k, 2, void 0, void 0, $d));
      if ((k == null || k + 18144e5 < Date.now() || g) && !f[h.url])
        return (delete e.j[h.url], a.delete(h));
    }),
  ).then(u());
}
function kI(a) {
  return new Promise(function (c, e) {
    var f = !1;
    Promise.all(
      a.map(function (g) {
        return g.then(function (h) {
          h && !f && ((f = !0), c(h));
        });
      }),
    )
      .then(function () {
        f || c(null);
      })
      .catch(function (g) {
        g instanceof Error ? e(Error("xd`" + g.message, { cause: g })) : e(Error("yd"));
      });
  });
}
function gI(a) {
  return Promise.allSettled(a).then(function () {
    return Promise.all(a);
  });
}
function jI(a, c) {
  return Promise.all([nH(a), pG(a), a.match(c, void 0)]).then(function (e) {
    var f = e[1],
      g = e[2];
    return e[0] && g ? new rH(c instanceof Request ? c.url : c, g, f || new UF()) : null;
  });
}
function fI(a) {
  return mG(a.v, a.j, !1);
}
function XH(a, c) {
  c.C = Date.now();
  return V(a.B, "docs-sw-ecus")
    ? Promise.resolve(Oy(a.D))
        .then(function (e) {
          if (e) {
            var f = e.j;
            return pI(f).then(function (g) {
              var h = qp(g, a.C),
                k = h.lastAttemptStartTimestamp;
              h = h.lastAttemptEndTimestamp;
              k && (!h || k > h) && sG(a.o, Error("zd"));
              rp(g, a.C);
              return new Promise(function (l) {
                f.write([g], 79, l);
              });
            });
          }
          sG(a.o, Error("Ad"));
        })
        .catch(function (e) {
          nl(e);
          sG(a.o, Error("Bd", { cause: e }));
        })
    : Promise.resolve();
}
function bI(a, c, e) {
  a.J = !0;
  return V(a.B, "docs-sw-ecus")
    ? Promise.resolve(Oy(a.D))
        .then(function (f) {
          if (f) {
            var g = f.j;
            return Promise.all([pI(g), fI(a)]).then(function (h) {
              h = E(h);
              var k = h.next().value;
              var l = h.next().value;
              LH(e, k, a.C, c, f);
              h = l
                .filter(function (p) {
                  return p.sa();
                })
                .map(function (p) {
                  return p.Ga;
                })
                .sort();
              l = l
                .filter(function (p) {
                  return !p.sa();
                })
                .map(function (p) {
                  return p.Ga;
                })
                .sort();
              sp(k, a.C, c);
              op(k, a.C, h, l);
              return new Promise(function (p) {
                g.write([k], 79, p);
              });
            });
          }
          sG(a.o, Error("Ad"));
        })
        .catch(function (f) {
          nl(f);
          sG(a.o, Error("Cd", { cause: f }));
        })
        .then(function () {
          return JH(e, !a.A);
        })
    : (JH(e, !a.A), Promise.resolve());
}
function pI(a) {
  var c = a.j.dc();
  return new Promise(function (e) {
    Xy(c, function (f) {
      e(f != null ? f : new lp(!0, c.na));
    });
  });
}
function qI() {
  var a = rI,
    c = sI,
    e = tI,
    f = by,
    g = hy;
  var h = h === void 0 ? qt() : h;
  this.A = a;
  this.j = c;
  this.C = e;
  this.v = f;
  this.o = g;
  this.B = h;
}
function uI(a) {
  return Promise.resolve(Oy(a.A)).then(function (c) {
    return vI(a, c);
  });
}
function vI(a, c) {
  return c
    ? wI(a, c.j).then(function (e) {
        return e.map(function (f) {
          var g = new ct(),
            h = c.o,
            k = ar(h) || "en";
          g.add("ouid", h.V());
          V(a.v, "docs-sw-eol") || (g.add("hl", k), g.add("forcehl", 1));
          g.add("jobset", f);
          a.B && g.add("Debug", !0);
          f = Al(I.location.href);
          return $s(Zs(new Ws(yl(f[1], f[2], f[3], f[4])), a.C + "/offline/cachemanifest"), g);
        });
      })
    : Promise.resolve([]);
}
function wI(a, c) {
  var e = new Promise(function (g, h) {
      hs(c.j.Ua(), a.j, g, h);
    }).then(function (g) {
      return g.ia();
    }),
    f = new Promise(function (g, h) {
      mA(c.j.B, null, g, h);
    })
      .catch(function (g) {
        bx(a.o, g, { skippedDocumentJobsetsCaching: "true" });
        return [];
      })
      .then(function (g) {
        g = g
          .filter(function (h) {
            return h.getType() == a.j;
          })
          .map(function (h) {
            return h.ia();
          });
        return Ns(Ts(g));
      });
  return Promise.all([e, f]).then(function (g) {
    var h = g[0];
    g = g[1];
    return g.indexOf(h) >= 0 ? g : g.concat(h);
  });
}
function xI() {
  this.j = new qI();
}
xI.prototype.get = function (a) {
  return uI(this.j).then(function (c) {
    c = c.map(function (e) {
      e.j.set("reason", a);
      e = new Request(e.toString(), { credentials: "include" });
      return XG(e, 3, 0, null, !1, !1)
        .then(function (f) {
          return f.text();
        })
        .then(function (f) {
          if (!f) throw Error("Dd");
          if (!cb(f, ")]}'\n")) throw Error("Ed");
          return TF(f.substr(5));
        })
        .catch(function (f) {
          f = nl(f);
          UG(f) && TG(f);
          throw f;
        });
    });
    return Promise.all(c);
  });
};
function yI(a, c, e, f) {
  if (a == null && !e) throw Error("Fd");
  this.ta = a;
  this.Na = c;
  this.ya = e || null;
  this.j = f || null;
  this.hb = null;
}
function zI(a) {
  return a.ta.headers.get("Location");
}
function BI(a, c) {
  a.ta.headers.set("Location", c);
}
function CI(a, c) {
  a.hb = a.hb ? pl(c, { serviceworker_multipleFetchErrors: "true" }) : c;
}
function DI(a, c, e) {
  a = new yI(null, a, c);
  CI(a, e);
  return a;
}
function EI(a, c) {
  return new yI(a, "network", c);
}
function FI(a, c, e) {
  return new yI(GI(a), "cache-storage", e, c);
}
function GI(a) {
  var c = Al(a);
  a = yl(c[1], null, c[3], c[4]) ? a : I.location.origin + (a.startsWith("/") ? a : "/" + a);
  c = new Headers();
  c.set("Location", a);
  return new Response("", { status: 302, headers: c });
}
function HI(a, c) {
  c = GG[c];
  var e = zI(a),
    f = rs(e);
  f.csr = "" + c;
  c = ts(e, f);
  BI(a, c);
}
function II(a, c) {
  var e = zI(a),
    f = rs(e);
  f.fcfr = "" + c;
  c = ts(e, f);
  BI(a, c);
}
function JI(a, c, e) {
  this.j = a;
  this.v = c;
  this.o = e;
}
JI.prototype.fetch = function (a) {
  var c = this;
  return KI(a)
    .then(function (e) {
      return LI(c, a, e);
    })
    .then(function (e) {
      return e.ta == null && a.W && a.W.B
        ? ((a.j.v = null),
          MI(c, a).then(function (f) {
            return LI(c, a, f);
          }))
        : e;
    });
};
function KI(a) {
  var c = a.ea.url;
  if (a.W && a.W.B) {
    a = lt(a.ea.url);
    c = a.j;
    var e = c.get("uc");
    !pt(c, "hl") && e && (e = NI.exec(e)) && (c.add("hl", e[1]), c.add("forcehl", "1"));
    a = OI(a.toString(), PI);
  } else a = a.W && a.W.A ? OI(a.ea.url, QI) : Promise.resolve(c);
  return a;
}
function LI(a, c, e) {
  var f = a.j.j.o;
  c.j.T = f == null ? 0 : f.v;
  c.j.R = f == null ? 0 : f.j;
  c.j.v = Date.now();
  return RI(a, e, c).then(function (g) {
    var h = c.j;
    h.D || ((h.o = Date.now() - h.v), (h.D = !1));
    c.j.N = !!g;
    if (!g && EG(c)) return SI(a, e, c.W);
    if (!g) return new yI(null, "cache-storage", "resource-not-cached");
    try {
      eG(g, !1);
    } catch (k) {
      return (
        (g = new yI(g, "cache-storage", "corrupted-resource")),
        (h = {}),
        CI(g, pl(k, ((h.serviceworker_isResourceFromServer = "false"), h))),
        g
      );
    }
    return new yI(g, "cache-storage");
  });
}
function RI(a, c, e) {
  return e.A
    ? hI(a.j, c)
    : iI(a.j, c).then(function (f) {
        return f ? f.j : null;
      });
}
function MI(a, c) {
  var e = lt(c.ea.url);
  pt(lt(c.ea.url).j, "hl")
    ? ((a = e.j), a.remove("hl"), a.remove("forcehl"), (e = OI(e.toString(), PI)))
    : (e = TI(a, e));
  return e;
}
function TI(a, c) {
  var e = c.j;
  return Promise.resolve(aC(a.v))
    .then(function (f) {
      (f = f.o) && ar(f) ? e.add("hl", ar(f)) : e.add("hl", "en");
      e.add("forcehl", "1");
    })
    .then(function () {
      return OI(c.toString(), PI);
    });
}
function OI(a, c) {
  a = lt(a);
  for (var e = a.j, f = new ct(), g = 0; g < c.length; g++) {
    var h = c[g];
    pt(e, h) && f.add(h, e.get(h, ""));
  }
  $s(a, f);
  return Promise.resolve(a.toString());
}
function SI(a, c, e) {
  var f = lI(a.j, c),
    g = fI(a.j),
    h = Promise.resolve(Oy(a.v)),
    k = qx(a.o).catch(x(null)),
    l = V(a.o, "docs-sw-ecus"),
    p = sm(a.o, "docs-sw-edubnc");
  a = I.caches.keys();
  return Promise.all([f, g, h, k, a]).then(function (q) {
    var r = E(q);
    var w = r.next().value;
    var y = r.next().value;
    q = r.next().value;
    var z = r.next().value;
    var B = r.next().value;
    r = new SC(c);
    UC(r, q);
    VC(r, y);
    y = {};
    pl(
      r,
      ((y.trackingRolloutTimestamp = p),
      (y.serviceworker_hadAnyCacheMatch = !!w),
      (y.serviceworker_cacheKeys = B.join(",")),
      (y.serviceworker_cacheKeysLength = B.length),
      y),
    );
    z && YC(r, z);
    w = null;
    if (e == null ? 0 : e.j) w = rG(e.j);
    else if (e == null ? 0 : e.A) w = "offlinecommon";
    return l && w
      ? WC(r, w, q).then(function (F) {
          return DI("cache-storage", "resource-not-cached", F);
        })
      : DI("cache-storage", "resource-not-cached", r);
  });
}
var NI = RegExp("([a-zA-Z-_]+)(,i){0,1}"),
  PI = "ouid forcehl hl jobset Debug ftrack".split(" "),
  QI = ["ouid", "Debug"];
function UI(a) {
  this.j = a;
}
UI.prototype.V = ba("j");
function VI(a) {
  this.G = M(a);
}
D(VI, R);
function WI(a) {
  this.G = M(a);
}
D(WI, R);
function XI(a) {
  this.G = M(a);
}
D(XI, R);
function YI(a) {
  return wf(a, 3, Re);
}
function ZI() {
  this.o = this.j = null;
}
ZI.prototype.initialize = function (a, c) {
  this.j = a;
  this.o = c;
  return this;
};
function KH(a) {
  var c = pf(a.j, Dn, 5);
  c == null && ((c = new Dn()), N(a.j, Dn, 5, c));
  return c;
}
function $I(a) {
  vf(a.j, 10);
  vf(a.j, 6) != null || ti(Se(a.j, 10, void 0, void 0, $d));
  if (YI(pf(a.j, XI, 8)) == 2 && vf(a.j, 13) != null) {
    var c = pf(a.j, XI, 8);
    c = pf(c, VI, 2);
    vf(c, 2);
  }
  var e = pf(a.j, Dn, 5);
  e != null && ((c = a.j), (e = e.clone()), N(c, Dn, 5, e));
  return a.j;
}
function aJ() {
  this.j = {};
  this.v = {};
  this.o = null;
}
function bJ(a) {
  this.G = M(a);
}
D(bJ, R);
function cJ(a) {
  this.G = M(a);
}
D(cJ, R);
cJ.prototype.ia = function () {
  return Bf(this, 9);
};
function dJ(a) {
  this.G = M(a);
}
D(dJ, R);
function eJ(a) {
  this.G = M(a);
}
D(eJ, R);
eJ.prototype.Ca = function (a) {
  return Gf(this, 1, a);
};
function fJ(a) {
  this.G = M(a);
}
D(fJ, R);
function gJ(a) {
  this.G = M(a);
}
D(gJ, R);
function hJ(a) {
  this.G = M(a);
}
D(hJ, R);
function iJ(a) {
  this.G = M(a);
}
D(iJ, R);
function jJ(a) {
  return pf(a, gJ, 1);
}
iJ.prototype.ia = function () {
  return Bf(this, 4);
};
function kJ() {
  this.j = new eJ();
  this.A = null;
  this.B = new dJ();
  Hf(this.B, 1, 6);
  this.v = this.o = null;
}
kJ.prototype.Ca = function (a) {
  Se(this.j, 1, void 0, void 0);
  this.j.Ca(a);
  return this;
};
function lJ(a) {
  a.A == null && (a.A = new iJ());
  return a.A;
}
function mJ(a) {
  a.v == null && (a.v = new cJ());
  return a.v;
}
function nJ(a) {
  ae(Se(a.j, 1, void 0, void 0)) != null && wf(a.j, 6) != null && Bf(a.j, 6);
}
function Fy(a) {
  this.G = M(a);
}
D(Fy, R);
function oJ() {
  U.apply(this, arguments);
}
D(oJ, U);
A = oJ.prototype;
A.pa = u();
A.jb = function () {
  var a = new ZI(),
    c = new Fy();
  a.initialize(c, new aJ());
  return a;
};
A.ec = function () {
  return new kJ();
};
A.Gd = u();
A.kb = function () {
  return Aj();
};
A.Fd = x(!1);
function pJ() {}
pJ.prototype.j = u();
function qJ() {
  ZI.call(this);
}
D(qJ, ZI);
var rJ = new UI("high_frequency_builder");
function sJ(a, c, e) {
  a = new cu(a);
  Ul(e, a);
  var f = new ju(e);
  Ul(e, f);
  lu(f, a, "tick", c);
  a.start();
}
function tJ() {
  ZI.call(this);
}
D(tJ, ZI);
function uJ(a, c, e) {
  var f = Date.now() * 1e3;
  if (0 == c) {
    c = new XI();
    var g = new WI();
    g = Ff(g, 1, f);
    N(c, WI, 1, g);
    Hf(c, 3, 1);
    N(a.j, XI, 8, c);
    Ff(a.j, 12, e);
    Ff(a.j, 13, e);
    Ff(a.j, 4, f);
    Ff(a.j, 3, e);
  } else
    1 == c &&
      ((c = new XI()),
      (g = new VI()),
      (f = Ff(g, 1, f)),
      N(c, VI, 2, f),
      Hf(c, 3, 2),
      N(a.j, XI, 8, c),
      Ff(a.j, 12, e),
      Ff(a.j, 3, e));
  return a;
}
var vJ = new UI("system_builder");
function wJ(a, c) {
  if (c && a in c) return a;
  a = "webkit" + xl(a);
  return c === void 0 || a in c ? a : null;
}
function xJ() {
  wt.call(this, "visibilitychange");
}
D(xJ, wt);
var yJ = new WeakMap();
function zJ(a) {
  function c(g) {
    g = E(g);
    g.next();
    g = oa(g);
    return e(f, g);
  }
  var e = e === void 0 ? AJ : e;
  var f = Qa(a);
  return function () {
    var g = Da.apply(0, arguments),
      h = this || I,
      k = yJ.get(h);
    k || ((k = {}), yJ.set(h, k));
    h = k;
    k = [this].concat(pa(g));
    g = c ? c(k) : k;
    if (Object.prototype.hasOwnProperty.call(h, g)) h = h[g];
    else {
      var l = E(k);
      k = l.next().value;
      l = oa(l);
      k = a.apply(k, l);
      h = h[g] = k;
    }
    return h;
  };
}
function AJ(a, c) {
  a = [a];
  for (var e = c.length - 1; e >= 0; --e) a.push(typeof c[e], c[e]);
  return a.join("\v");
}
function BJ(a) {
  au.call(this);
  a || (a = ab || (ab = new Ru()));
  this.j = a;
  if ((this.o = this.ve())) this.v = Lt(this.j.j, this.o, Va(this.ye, this));
}
Za(BJ, au);
A = BJ.prototype;
A.ve = zJ(function () {
  var a = this.Db(),
    c = this.Mb() != "hidden";
  if (a) {
    var e;
    c ? (e = "webkitvisibilitychange") : (e = "visibilitychange");
    a = e;
  } else a = null;
  return a;
});
A.Mb = zJ(function () {
  return wJ("hidden", this.j.j);
});
A.we = zJ(function () {
  return wJ("visibilityState", this.j.j);
});
A.Db = function () {
  return !!this.Mb();
};
A.ye = function () {
  var a = this.Db() ? this.j.j[this.we()] : null;
  a = new xJ(!!this.j.j[this.Mb()], a);
  this.dispatchEvent(a);
};
A.P = function () {
  Ut(this.v);
  BJ.xa.P.call(this);
};
function CJ(a, c) {
  U.call(this);
  this.o = a;
  this.j = new BJ(c);
  Ul(this, this.j);
  this.v = new ju(this);
  Ul(this, this.v);
  this.j.Db() && lu(this.v, this.j, "visibilitychange", this.A);
}
D(CJ, U);
CJ.prototype.A = function () {
  if (this.o.Fd()) {
    var a = this.j;
    a = !!a.j.j[a.Mb()];
    a = this.o.jb(a ? 102001 : 102e3, 0);
    this.o.pa(a);
  }
};
function DJ(a, c, e) {
  e = e === void 0 ? !1 : e;
  U.call(this);
  this.j = a;
  this.o = c;
  Ul(this, this.o);
  this.v = e;
}
D(DJ, U);
A = DJ.prototype;
A.pa = function (a) {
  var c = this.j;
  Ff(a.j, 6, c.v);
  c.A = !0;
  a = $I(a);
  c.j.add(a);
  c = this.o;
  c.j.j.j.length >= 3 && c.o.o();
};
A.jb = function (a, c) {
  a = uJ(EJ(this.j, a), c, this.j.C++);
  c == 1 && ((c = this.j), YI(pf(a.j, XI, 8)), c.D.add(a));
  return a;
};
A.ec = function () {
  return this.j.o;
};
A.Gd = function () {
  var a = this.j,
    c = FJ(a, 716);
  GJ(a, c);
  c = $I(c);
  a.j.add(c);
  a.F = !0;
  a.I = !0;
  this.o.initialize();
  this.o.o.o();
  this.v && new CJ(this);
};
A.kb = function () {
  this.o.A();
  return Ej(Array.from(this.o.v)).then();
};
A.Fd = function () {
  var a = this.j;
  return a.F && a.I && !0;
};
function HJ(a, c, e) {
  U.call(this);
  this.C = e != null ? a.bind(e) : a;
  this.B = c;
  this.v = null;
  this.A = !1;
  this.j = null;
}
D(HJ, U);
HJ.prototype.o = function (a) {
  this.v = arguments;
  this.j ? (this.A = !0) : IJ(this);
};
HJ.prototype.stop = function () {
  this.j && (I.clearTimeout(this.j), (this.j = null), (this.A = !1), (this.v = null));
};
HJ.prototype.P = function () {
  U.prototype.P.call(this);
  this.stop();
};
function IJ(a) {
  a.j = du(function () {
    a.j = null;
    a.A && ((a.A = !1), IJ(a));
  }, a.B);
  var c = a.v;
  a.v = null;
  a.C.apply(null, c);
}
function JJ(a, c, e, f, g) {
  U.call(this);
  this.j = a;
  this.D = c;
  this.o = new HJ(this.A, 3e3, this);
  this.v = new Set();
  this.B = f;
  this.C = g || 6e4;
}
D(JJ, U);
JJ.prototype.initialize = function () {
  sJ(this.C, this.o.o, this.o);
  sJ(36e5, this.F, this);
};
JJ.prototype.A = function () {
  var a = this;
  if (this.j.j.j.length != 0 && (!this.B || this.j.A)) {
    var c = KJ(this.j),
      e = this.D.j(c);
    e &&
      (Ij(e, function () {
        return void a.v.delete(e);
      }),
      this.v.add(e));
  }
};
JJ.prototype.F = function () {
  var a = this.j,
    c = FJ(a, 1153);
  c = $I(c);
  a.j.add(c);
  this.o.o();
};
function LJ() {}
LJ.prototype.Rd = function () {
  return new qJ();
};
function MJ() {
  this.j = [];
}
MJ.prototype.add = function (a) {
  this.j.push(a);
};
function NJ() {
  this.j = {};
}
NJ.prototype.add = function (a) {
  YI(pf(a.j, XI, 8));
  var c = ui(zf(a.j, 12));
  this.j[c] = a;
};
NJ.prototype.remove = function (a) {
  delete this.j[a];
};
function OJ(a) {
  this.G = M(a, 500);
}
D(OJ, R);
function sy(a, c) {
  Gf(a, 6, c);
}
function PJ() {
  var a = QJ.j;
  this.o = QJ.o;
  this.N = a;
  this.C = 1;
  this.B = this.v = null;
  this.D = new NJ();
  this.j = new MJ();
  this.I = this.F = this.A = !1;
}
function EJ(a, c) {
  a = new ZI().initialize(new Fy(), a.N);
  var e = a.o.j[vJ.V()].Rd();
  e.initialize(a.j, a.o);
  Ff(e.j, 10, c);
  return e;
}
function KJ(a) {
  var c = a.j,
    e = c.j;
  c.j = [];
  c = new OJ();
  var f = a.o.j.clone();
  c = N(c, eJ, 2, f);
  f = a.o;
  nJ(f);
  (f = f.A ? f.A.clone() : null) && N(c, iJ, 5, f);
  var g;
  f = a.o;
  for (var h, k = e.length - 1; k >= 0; k--) {
    var l = pf(e[k], Dn, 5);
    if (l && pf(l, Ym, 1)) {
      l = pf(l, Ym, 1);
      Ld(Se(l, 12)) != null && g === void 0 && (g = xf(l, 12));
      l = pf(l, Wm, 20);
      if (l !== void 0 && h === void 0) {
        h = new bJ();
        var p = Ld(Se(l, 2, void 0, Re));
        p !== void 0 && Q(h, 2, p);
        l = Ld(Se(l, 1, void 0, Re));
        l !== void 0 && Q(h, 1, l);
      }
      if (g !== void 0 && h !== void 0) break;
    }
  }
  f = f.v ? f.v.clone() : null;
  if (g !== void 0 || h !== void 0)
    (f || (f = new cJ()), g !== void 0 && Q(f, 6, g), h !== void 0 && N(f, bJ, 13, h));
  (g = f) && N(c, cJ, 3, g);
  a = a.o.B.clone();
  N(c, dJ, 4, a);
  sf(c, Fy, 1, e);
  return c;
}
function FJ(a, c) {
  var e = uJ(EJ(a, c), 0, a.C++);
  var f = a.D;
  var g = Object.keys(f.j);
  if (g.length == 0) f = null;
  else {
    for (var h = [], k = 0; k < g.length; k++) {
      var l = Number(g[k]),
        p = f.j[l],
        q = new gn();
      l = Ff(q, 1, l);
      p = Se(p.j, 10, void 0, void 0, $d);
      p = Ff(l, 2, p);
      h.push(p);
    }
    f = h;
  }
  c != 716 &&
    ((c = a.B),
    Ff(e.j, 6, a.v),
    (g = new hn()),
    (c = Ff(g, 1, c)),
    f && uf(c, 2, gn, f),
    (f = KH(e)),
    N(f, hn, 3, c));
  GJ(a, e);
  return e;
}
function GJ(a, c) {
  a.v = ti(Se(c.j, 12, void 0, void 0, $d));
  c = pf(c.j, XI, 8);
  c = pf(c, WI, 1);
  c = Se(c, 1, void 0, void 0, $d);
  a.B = ti(c);
}
function RJ() {}
RJ.prototype.Rd = function () {
  return new tJ();
};
function SJ() {
  this.j = this.o = null;
}
function TJ() {
  this.v = this.A = null;
  this.j = new kJ();
  this.o = !1;
}
TJ.prototype.Ca = function (a) {
  this.j.Ca(a);
  return this;
};
function UJ(a, c, e, f, g, h) {
  c = VJ(a, 1e5, c);
  var k = Cn(En(KH(c)));
  e = xn(wn(k), e);
  f = Q(e, 8, f);
  yn(f, h);
  g != null && Gf(k, 11, g);
  a.pa(c);
}
function WJ(a, c, e, f, g) {
  var h = Promise.resolve(null),
    k = Promise.resolve(null);
  c &&
    ((a = Promise.resolve(YB(a))),
    (h = a.then(function (l) {
      return XJ(l, c);
    })),
    (k = a.then(function (l) {
      return YJ(l, c);
    })));
  return Promise.all([h, k]).then(function (l) {
    var p = E(l);
    l = p.next().value;
    var q = p.next().value;
    p = VJ(e, 100003, f);
    var r = new qn();
    if (g != null) {
      var w = new Iy(g);
      N(r, en, 1, w.o);
      w = Nl(g, "dods");
      (w = Fs(w)) && Hf(r, 2, w);
      w = Nl(g, "eops");
      w = !w || (w != "1" && w != "0") ? null : w == "1";
      w != null && Q(r, 6, w);
      w = Gs(g);
      w.length && tf(r, 4, w);
      l != null && Hf(r, 3, l);
      q != null && q.length && uf(r, 5, Xm, q);
    }
    l = En(KH(p));
    N(l, qn, 5, r);
    e.pa(p);
    return e.kb();
  });
}
function ZJ(a, c, e) {
  c = VJ(a, 100004, c);
  yn(Cn(En(KH(c))), e);
  a.pa(c);
}
function $J(a) {
  switch (a) {
    case "cache-storage":
      return 1;
    case "client-redirect":
      return 5;
    case "network":
      return 2;
    case "none":
      return 6;
    default:
      return null;
  }
}
function aK(a) {
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
}
function XJ(a, c) {
  return Promise.resolve(lk(Wq(a.j.Dd(), c))).then(function (e) {
    return e != null ? e.j : null;
  });
}
function YJ(a, c) {
  return Promise.resolve(lk(Nq(a.j.Cd(), c))).then(function (e) {
    return e.map(function (f) {
      var g = new Xm();
      g = Ef(g, 2, f.j);
      return Hf(g, 1, f.o);
    });
  });
}
var bK = [
    /\/document\/client\/css\/.*\bKixCss_(ltr|rtl)\.css$/,
    /\/spreadsheets2\/client\/css\/.*\bwaffle.*(ltr|rtl)\.css$/,
    /\/(presentation|drawings)\/client\/css\/.*\beditor_css.*(ltr|rtl)\.css$/,
  ],
  cK = [
    /\/document\/client\/js\/.*\bclient_js_.*_core(__.+)?\.js$/,
    /.*\/k=docs\.client_js.*\/m=kix_core$/,
    /\/spreadsheets2\/client\/js\/.*\bwaffle_.*core(__.+)?\.js$/,
    /.*\/k=spreadsheets\.waffle_js.*\/m=core$/,
    /\/(presentation|drawings)\/client\/js\/.*\beditor.*core(__.+)?\.js$/,
    /.*\/k=(presentations|drawings)\.editor_js.*\/m=core$/,
  ],
  dK = [
    /\/document\/client\/js\/.*\bclient_js_.*app(__.+)?\.js$/,
    /.*\/k=docs\.client_js.*\/m=kix_app$/,
    /\/spreadsheets2\/client\/js\/.*\bwaffle.*shell(__.+)?\.js$/,
    /.*\/k=spreadsheets\.waffle_js.*\/m=shell$/,
    /\/(presentation|drawings)\/client\/js\/.*\beditor.*app(__.+)?\.js$/,
    /.*\/k=(presentations|drawings)\.editor_js.*\/m=app$/,
  ],
  eK = [
    /\/document\/client\/js\/.*\bclient_js_.*tertiary(__.+)?\.js$/,
    /.*\/k=docs\.client_js.*\/m=kix_tertiary$/,
    /\/(presentation|drawings)\/client\/js\/.*\beditor.*tertiary(__.+)?\.js$/,
    /.*\/k=(presentations|drawings)\.editor_js.*\/m=tertiary$/,
  ];
function fK(a) {
  return bK.some(function (c) {
    return c.test(a);
  })
    ? 1
    : cK.some(function (c) {
          return c.test(a);
        })
      ? 2
      : dK.some(function (c) {
            return c.test(a);
          })
        ? 3
        : eK.some(function (c) {
              return c.test(a);
            })
          ? 15
          : wG(a)
            ? 14
            : xG(a)
              ? 13
              : null;
}
function VJ(a, c, e) {
  a = a.jb(c, 0);
  c = new Bn();
  var f = new vn();
  N(c, vn, 1, f);
  var g = KH(a);
  N(g, Bn, 50, c);
  Gf(f, 1, e);
  e = new on();
  N(c, on, 2, e);
  (c = I.navigator.connection) && c.effectiveType && Hf(e, 3, Qx(c.effectiveType));
  return a;
}
function gK(a, c) {
  var e = hK;
  this.v = a;
  this.o = e;
  this.j = c;
}
function iK(a, c, e, f) {
  if (f.ya == "document-not-available-locally") {
    var g = WJ(a.j, c.W ? c.W.v : null, a.v, c.o, c.ea.url);
    a = jK(a.o, c, g);
    Fb() >= 60 && c.B(a);
  }
  a: if (e.ta == null || (e.ya != null && f.ya == null)) {
    if (
      f.j &&
      ((g = ym(f.j, "pendingQueueState")),
      (a = e.ya == "server-document-deleted"),
      (g = g != null && kK.includes(g)),
      a && !g)
    ) {
      a = !1;
      break a;
    }
    a = !0;
  } else a = !1;
  if (a) {
    if ((a = e.ya) && f.j && (HI(f, a), a == "server-suggested")) {
      g = c.W.o;
      a = zI(f);
      var h = rs(a).ouri || null;
      h &&
        ((h = rt(h, "ofip")),
        (c = c.ea.url),
        st.includes(g) &&
          Nl(c, "rr") &&
          ((h = rt(h, "pru")),
          (c = h = rt(h, "rr")),
          (h = Bl(Al(c)[5] || null)) &&
            h.endsWith(g) &&
            ((g = h.substring(0, h.length - g.length) + "/edit"),
            cb(g, "/") || (g = "/" + g),
            (c = Al(c)),
            (c = yl(c[1], c[2], c[3], c[4], g, c[6], c[7]))),
          (h = c)),
        (c = h),
        (g = rs(a)),
        (g.ouri = c),
        (c = ts(a, g)),
        BI(f, c));
    }
    (e = e.hb) && CI(f, e);
    return f;
  }
  (f = f.hb) && CI(e, f);
  return e;
}
var kK = [0, 2];
function lK(a, c, e, f) {
  this.B = a;
  this.o = e;
  this.D = c;
  this.F = mK(this);
  this.v = !1;
  this.C = f;
}
lK.prototype.fetch = function () {
  var a = this;
  nK(this);
  return this.F.then(function () {
    return oK(a);
  });
};
lK.prototype.cancel = function () {
  this.v = !0;
};
function nK(a) {
  var c = a.o.W,
    e = V(a.C, "docs-edfc");
  (c.C && e) || (a.j = pK(a));
}
function oK(a) {
  if (a.v) return Promise.resolve(new yI(null, "none", "fallback-canceled"));
  a.j || (a.j = pK(a));
  return a.j;
}
function pK(a) {
  a.j = qK(a.D, a.o).then(function (c) {
    var e = c.hb;
    e && jE(a.B, a.o, e, { serviceworker_localResponseFlakyConnectionError: "true" });
    return (a.I = c);
  });
  return a.j;
}
function mK(a) {
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
      a.A = e;
    });
}
function rK() {
  if (!(Fb() >= 61)) return !1;
  var a = I.navigator.connection;
  a = sK.indexOf(a && a.effectiveType ? a.effectiveType : "4g");
  var c = sK.indexOf("2g");
  return a >= 0 && a <= c;
}
var sK = ["slow-2g", "2g", "3g", "4g"];
function tK(a, c, e, f, g, h, k) {
  this.D = a;
  this.v = c;
  this.A = e;
  this.o = f;
  this.j = g;
  this.C = h;
  this.B = k;
}
tK.prototype.fetch = function (a) {
  var c = this,
    e = I.performance.now(),
    f = qK(this.D, a),
    g = new lK(this.A, this.v, a, this.B),
    h = g.fetch();
  return Promise.race([f, h]).then(function (k) {
    var l,
      p = ((l = g.I) == null ? void 0 : l.ya != null) === !1;
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
function uK(a, c, e, f) {
  return e.ya == null
    ? (f.cancel(), Promise.resolve(e))
    : oK(f).then(function (g) {
        return iK(a.j, c, e, g);
      });
}
function vK(a, c, e, f, g) {
  var h = !!f.j || c.W.D;
  if (f.ya == null && h) {
    if ((e = wK(a.C, c.o))) e.S = !0;
    f.j && (HI(f, "flaky-connection-pre-response"), II(f, g));
    return Promise.resolve(f);
  }
  return e.then(function (k) {
    return iK(a.j, c, k, f);
  });
}
function xK() {
  this.R =
    this.T =
    this.A =
    this.K =
    this.D =
    this.N =
    this.o =
    this.v =
    this.J =
    this.U =
    this.H =
    this.O =
    this.F =
    this.X =
    this.Z =
    this.j =
    this.B =
    this.S =
    this.I =
    this.C =
      null;
  this.M = [];
}
xK.prototype.start = function () {
  this.C = Date.now();
};
function yK(a, c) {
  switch (c) {
    case "cache-storage":
      return a.N;
    case "network":
      return a.X;
    default:
      return null;
  }
}
function zK(a, c) {
  switch (c) {
    case "cache-storage":
      return AK(a.v, a.o, a.N, yK(a, c), a.D);
    case "network":
      return AK(a.B, a.j, a.Z, yK(a, c), a.F);
    default:
      throw Error("Kd`" + c);
  }
}
function AK(a, c, e, f, g) {
  if (!a) return null;
  var h = new zn();
  Ff(h, 1, a * 1e3);
  c != null && Ff(h, 2, c * 1e3);
  e != null && Q(h, 4, e);
  f != null && Q(h, 3, f);
  g != null && Q(h, 5, g);
  return h;
}
function BK(a, c, e, f, g, h, k) {
  this.ea = a;
  this.B = c;
  this.o = f;
  this.v = g;
  this.A = h;
  this.j = new xK();
  this.C = Promise.resolve(k);
  this.W = e;
}
function CK(a) {
  return a.v && !!a.W && a.W.I;
}
function DK(a) {
  return (a = a.ea.headers.get("Sec-Purpose")) ? a.split(";").includes("prefetch") : !1;
}
function EK(a, c) {
  var e = !0,
    f = !0;
  c = c === void 0 ? null : c;
  e = e === void 0 ? !1 : e;
  f = f === void 0 ? !1 : f;
  this.o = a;
  this.j = c;
  this.A = e;
  this.v = f;
}
function FK(a, c) {
  var e = c.request,
    f = e.mode == "navigate",
    g = a.j && (f || a.v) ? a.j.zb(e.url) : null,
    h = DG(e.url);
  h = new BK(
    e,
    function (p) {
      return c.waitUntil(p);
    },
    g,
    c.resultingClientId || c.clientId || null,
    f,
    h,
    a.A && Wb && mb() >= 0 ? c.preloadResponse : void 0,
  );
  var k = !!c.resultingClientId,
    l = Fb() >= 72 && !k;
  !g ||
    g.A ||
    DK(h) ||
    (f && !l) ||
    ((f = Error("Ld")),
    TG(f),
    jE(a.o, h, f, {
      serviceworker_hasResultingClientId: String(k),
      serviceworker_resultingClientId: String(c.resultingClientId),
      serviceworker_requestDestination: String(e.destination),
    }));
  return h;
}
function GK(a, c, e, f) {
  var g = HK;
  this.B = a;
  this.v = c;
  this.C = e;
  this.A = g;
  this.o = f;
  this.j = !V(f, "docs-sw-eol");
}
GK.prototype.fetch = function (a) {
  var c = this,
    e = a.W;
  return Promise.resolve(aC(this.B))
    .then(function (f) {
      var g = f.j;
      f = f.o;
      var h = c.A;
      var k = c.o;
      h = new Map([[h.getType(), h]]);
      k = KB(k);
      k = new xE(ar(f), k, new cE(h), h);
      return e.D
        ? IK(c, g, f, e, k)
        : e.C
          ? JK(c, a, g, f, e, k)
          : e.v
            ? KK(c, a, g, f, e, k)
            : Promise.reject(Error("Md"));
    })
    .catch(function (f) {
      if (f instanceof UB) return LK(f, "local-store-error");
      throw f;
    });
};
function LK(a, c) {
  return I.caches.keys().then(function (e) {
    e = pl(a, { cacheStorageKeyLength: e.length });
    return DI("cache-storage", c, e);
  });
}
function IK(a, c, e, f, g) {
  return MK(c, f).then(function (h) {
    if (!h) return new yI(null, "none", "missing-application-metadata");
    var k = AE(g, e, f.j, f.o, a.j, h.ia()),
      l = AE(g, e, f.j, f.o, !a.j, h.ia());
    return NK(a, k, l).then(function (p) {
      return p ? new yI(p.j, "cache-storage") : OK(a, k, l, f.j);
    });
  });
}
function PK(a, c, e, f, g) {
  return MK(c, f).then(function (h) {
    if (!h) return new yI(null, "none", "missing-application-metadata");
    h = h.ia() || tm(a.o, "jobset");
    var k = nE(a.A, h, br(e), ar(e), e.V(), g, f.v, a.j),
      l = nE(a.A, h, br(e), ar(e), e.V(), g, f.v, !a.j);
    return NK(a, k, l).then(function (p) {
      return p
        ? new yI(GI(k), "cache-storage", "document-not-available-locally")
        : OK(a, k, l, f.j);
    });
  });
}
function JK(a, c, e, f, g, h) {
  var k = new bs(f, e, new Tm(a.C), a.o);
  if (g.A) return Promise.reject(Error("Nd"));
  var l = js(k, g.j);
  return new Promise(function (p, q) {
    mk(l, p, q);
  }).then(
    function (p) {
      return QK(a, c, f, g, h, p, a.j);
    },
    function (p) {
      if (p instanceof To && p.type === 10) return RK(a, e, f, g, c.ea.url);
      throw p;
    },
  );
}
function KK(a, c, e, f, g, h) {
  c.j.O = Date.now();
  return new Promise(function (k) {
    oA(e.j.B, g.v, k);
  }).then(function (k) {
    var l = c.j;
    l.H = Date.now() - l.O;
    return k ? QK(a, c, f, g, h, k, a.j) : PK(a, e, f, g, c.ea.url);
  });
}
function QK(a, c, e, f, g, h, k) {
  var l = SK(c, e, f, g, h, k),
    p = SK(c, e, f, g, h, !k);
  c.j.U = Date.now();
  return NK(a, l, p).then(function (q) {
    var r = c.j;
    r.J = Date.now() - r.U;
    if (q)
      if (!0 === Am(h, "modelNeedsResync")) q = FI(q.request, h, "document-model-needs-resync");
      else {
        var w;
        xf(q.metadata, 1)
          ? (w = FI(q.request, h, "cache-needs-update"))
          : (w = new yI(GI(q.request), "cache-storage", void 0, h));
        q = w;
      }
    else q = OK(a, l, p, f.j);
    return q;
  });
}
function NK(a, c, e) {
  return iI(a.v, c).then(function (f) {
    return f ? f : iI(a.v, e);
  });
}
function TK(a, c, e) {
  return lI(a.v, c).then(function (f) {
    return f ? f : lI(a.v, e);
  });
}
function SK(a, c, e, f, g, h) {
  return e.C ? yE(f, g, c, 2, h, e.o, void 0, e.F || void 0) : yE(f, g, c, 4, h, e.o, a.ea.url);
}
function MK(a, c) {
  return c.A
    ? Promise.reject(Error("Nd"))
    : new Promise(function (e, f) {
        hs(a.j.Ua(), c.j, e, f);
      });
}
function RK(a, c, e, f, g) {
  return MK(c, f).then(function (h) {
    h = h.ia() || tm(a.o, "jobset");
    var k = oE(a.A, h, br(e), ar(e), e.V(), g, a.j),
      l = oE(a.A, h, br(e), ar(e), e.V(), g, !a.j);
    return NK(a, k, l).then(function (p) {
      return p ? new yI(GI(k), "cache-storage", "no-offline-document-ids") : OK(a, k, l, f.j);
    });
  });
}
function OK(a, c, e, f) {
  e = TK(a, c, e);
  var g = fI(a.v),
    h = Oy(a.B),
    k = qx(a.o).catch(x(null)),
    l = rG(f),
    p = V(a.o, "docs-sw-ecus"),
    q = sm(a.o, "docs-sw-edubnc");
  a = I.caches.keys();
  return Promise.all([e, g, h, k, a]).then(function (r) {
    var w = E(r);
    r = w.next().value;
    var y = w.next().value;
    var z = w.next().value;
    var B = w.next().value;
    w = w.next().value;
    var F = new SC(c);
    UC(F, z);
    VC(F, y);
    y = {};
    pl(
      F,
      ((y.trackingRolloutTimestamp = q),
      (y.serviceworker_hadAnyCacheMatch = !!r),
      (y.serviceworker_cacheKeys = w.join(",")),
      (y.serviceworker_cacheKeysLength = w.length),
      y),
    );
    B && YC(F, B);
    return p
      ? WC(F, l, z).then(function (J) {
          return LK(J, "resource-not-cached");
        })
      : LK(F, "resource-not-cached");
  });
}
function UK(a, c, e, f) {
  f = f === void 0 ? 0 : f;
  this.v = a;
  this.A = c;
  this.j = isNaN(f) ? 0 : f;
  this.o = e;
}
UK.prototype.fetch = function (a) {
  var c = this,
    e = this.j == 0,
    f = e
      ? Promise.resolve()
      : Promise.resolve(eu(Math.abs(this.j))).then(function () {
          e = !0;
        }),
    g = new VK(this.v),
    h = new VK(this.A),
    k = this.j >= 0 ? g : h,
    l = this.j >= 0 ? h : g,
    p = k.fetch(a),
    q = Promise.race([p, f]).then(function () {
      return k.j && k.j.ya == null ? null : l.fetch(a);
    });
  return Promise.race([p, q]).then(function (r) {
    var w = r == k.j ? q : p;
    return r.ya == null
      ? (e && a.j.M.push(w), r)
      : w.then(function () {
          return iK(c.o, a, h.j, g.j);
        });
  });
};
function VK(a) {
  this.o = a;
  this.j = null;
}
VK.prototype.fetch = function (a) {
  var c = this;
  return qK(this.o, a).then(function (e) {
    return (c.j = e);
  });
};
function WK(a, c, e, f) {
  this.v = a;
  this.A = c;
  this.j = e;
  this.o = f;
}
WK.prototype.fetch = function (a) {
  var c = this;
  return qK(this.v, a).then(function (e) {
    return e.ya != null
      ? qK(c.A, a).then(function (f) {
          return iK(c.o, a, c.j ? f : e, c.j ? e : f);
        })
      : e;
  });
};
function XK(a, c, e) {
  this.v = a;
  this.j = c;
  this.o = e;
}
XK.prototype.fetch = function (a) {
  var c = this,
    e = a.ea;
  a.j.B = Date.now();
  return a.C.then(function (f) {
    a.j.S = !!f;
    return f ? f : c.v.fetch(e);
  })
    .catch(function (f) {
      f = nl(f);
      if (
        a.W &&
        I.navigator.onLine &&
        !f.message.includes(
          "The service worker navigation preload request was cancelled before 'preloadResponse' settled.",
        )
      ) {
        var g = {};
        jE(c.j, a, f, ((g.serviceworker_nativeFetchOrPreloadError = "true"), g));
      }
      return null;
    })
    .then(function (f) {
      var g = a.j;
      g.F || ((g.j = Date.now() - g.B), (g.F = !1));
      a.j.Z = !!f;
      if ((g = !!f))
        ((g = I.performance.getEntriesByName(a.ea.url)),
          g.length == 0
            ? (g = null)
            : ((g = g[g.length - 1].transferSize), (g = g == null ? null : g == 0)));
      g != null && (a.j.X = g);
      var h;
      f ? (h = YK(c, a, f)) : (h = new yI(null, "network", "offline"));
      return h;
    });
};
function YK(a, c, e) {
  if (c.W && c.W.v) {
    var f = e.status,
      g = e.headers;
    c = Nl(c.ea.url, "fws");
    if (f == 404) return EI(e, "server-document-not-found");
    if (f == 410 && V(a.o, "docs-sw-eddf")) return EI(e, "server-document-deleted");
    if (c != "true") {
      if (ZK.includes(f)) return EI(e, "server-error");
      if (g.get("docs-offline-fallback-if-possible") == "true") return EI(e, "server-suggested");
    }
  }
  return new yI(e, "network");
}
var ZK = [500, 502, 503];
function $K() {
  this.o = [];
  this.j = !1;
}
function aL(a, c) {
  c = new URLPattern(c, "https://" + I.location.hostname);
  bL(a, {
    condition: { urlPattern: c, requestMethod: "GET", requestMode: "navigate" },
    source: "fetch-event",
  });
}
function cL(a, c) {
  bL(a, {
    condition: { urlPattern: new URLPattern(c), requestMethod: "GET" },
    source: "fetch-event",
  });
}
function bL(a, c) {
  if (a.j) throw Error("Pd");
  a.o.push(c);
}
function iE(a, c) {
  return (
    a.o.find(function (e) {
      e = e.condition;
      return (
        e.urlPattern != null &&
        e.urlPattern instanceof URLPattern &&
        e.urlPattern.test(c.url) &&
        (e.requestMethod == void 0 || e.requestMethod == c.method) &&
        (e.requestMode == void 0 || e.requestMode == c.mode) &&
        (e.requestDestination == void 0 || e.requestDestination == c.destination)
      );
    }) || null
  );
}
function dL(a, c, e) {
  var f = new $K();
  if (a) {
    a = E(["/*/offline/*", "/*/create", "*\\?*ofip=true*", "*\\?*fcs=true*"]);
    var g = a.next(),
      h;
    try {
      for (; !g.done; g = a.next()) aL(f, g.value);
    } finally {
      g && !g.done && (h = a.return) && h.call(a);
    }
    bL(f, {
      condition: {
        urlPattern: new URLPattern({
          protocol: "https",
          hostname: I.location.hostname,
          pathname: "*",
        }),
        requestMethod: "GET",
        requestMode: "navigate",
      },
      source: "race-network-and-fetch-handler",
    });
  } else aL(f, "*");
  h = E(["https://ssl.gstatic.com/docs/common/netcheck.gif"]);
  a = h.next();
  var k;
  try {
    for (; !a.done; a = h.next())
      bL(f, {
        condition: { urlPattern: new URLPattern(a.value), requestMethod: "GET" },
        source: "network",
      });
  } finally {
    a && !a.done && (k = h.return) && k.call(h);
  }
  if (c) {
    var l = E(eL());
    c = l.next();
    var p;
    try {
      for (; !c.done; c = l.next()) cL(f, c.value);
    } finally {
      c && !c.done && (p = l.return) && p.call(l);
    }
    p = E(fL());
    l = p.next();
    var q;
    try {
      for (; !l.done; l = p.next())
        ((c = e),
          bL(f, {
            condition: { urlPattern: new URLPattern(l.value), requestMethod: "GET" },
            source: { cacheName: c },
          }));
    } finally {
      l && !l.done && (q = p.return) && q.call(p);
    }
  } else {
    e = E(eL().concat(fL()));
    q = e.next();
    try {
      for (; !q.done; q = e.next()) cL(f, q.value);
    } finally {
      q && !q.done && (l = e.return) && l.call(e);
    }
  }
  bL(f, {
    condition: {
      urlPattern: new URLPattern("*", "https://" + I.location.hostname),
      requestMethod: "GET",
      requestMode: "no-cors",
      requestDestination: "",
    },
    source: "fetch-event",
  });
  if (f.j) throw Error("Od");
  e = new URLPattern({ protocol: "*", hostname: "*", pathname: "*" });
  bL(f, { condition: { urlPattern: e }, source: "network" });
  f.j = !0;
  return f;
}
function eL() {
  return [
    "https://*.google.com/*?/ogw/*",
    "https://fonts.googleapis.com/css*",
    "https://*.google.com/*?/ac/*?/logo.*",
  ];
}
function fL() {
  return [
    "https://*.gstatic.com/*",
    I.location.origin + "/*?/static/*",
    I.location.origin + "/_/*/_/js/*",
    "https://*.googleusercontent.com/*",
    "https://*.ggpht.com/*",
  ];
}
function gL(a) {
  this.j = a;
}
function hL(a) {
  if (!(Fb() >= 117)) return null;
  var c = a.addRoutes || a.registerRouter;
  if (!c) return null;
  var e = c.bind(a);
  return new gL(function (f) {
    return e(f);
  });
}
gL.prototype.register = function (a) {
  return this.j(a.o);
};
function iL(a, c, e) {
  var f = HK;
  this.o = a;
  this.j = c;
  this.A = f;
  this.v = e;
}
function jL(a) {
  return Promise.resolve(Oy(a.o)).then(function (c) {
    if (!c) return null;
    var e = tm(a.v, "jobset") || "prod";
    c = c.o;
    e = lE(a.A, e, br(c), ar(c), c.V());
    return iI(a.j, e).then(function (f) {
      return f ? f.j : null;
    });
  });
}
function kL(a, c) {
  var e = c.request;
  if (e.method == "GET") {
    var f = FK(a.T, c),
      g = e.url;
    e.destination !== "worker" ||
      g.includes(new Ws(Ql(a.B.ib, "/")).toString()) ||
      g.includes("/offline/synctaskworker.js") ||
      g.includes("/offline/eventbusworker.js") ||
      ((g = Error("Qd")), TG(g), jE(a.A, f, g, { target_url: e.url }));
    if (lL(a, f))
      c.respondWith(new Response(null, { status: 204, statusText: "Disabled By Service Worker" }));
    else {
      mL(a.o, f);
      f.j.start();
      if (f.A) e = nL(a, f);
      else if (f.W) e = oL(a, f, f.W);
      else if (f.v) e = qK(a.j, f);
      else return;
      c.respondWith(
        pL(
          a.C,
          f,
          e.then(function (h) {
            qL(a, f, h);
            rL(
              a,
              f,
              Promise.resolve(eu(0)).then(function () {
                return sL(a, f, h);
              }),
            );
            return h;
          }),
          a.J,
        ),
      );
    }
  }
}
function oL(a, c, e) {
  if (e.B) return a.I.fetch(c);
  var f = c.ea.url,
    g = Nl(f, "fws") == "true";
  f = !g && (a.M || Nl(f, "fcs") == "true");
  if (e.I && c.v) {
    var h = wK(a.o, c.o);
    UJ(a.v, c.o, e.o, g, e.v || null, !!h);
    h &&
      !h.C &&
      (h.start(),
      tL(h, e.o),
      rL(
        a,
        c,
        uL(h).then(function () {
          return a.v.kb();
        }),
      ));
  }
  var k = a.K && c.ea.destination === "iframe" ? a.j : f ? a.R : (e.D ? 0 : !e.I) || g ? a.U : a.O;
  return a.N.clients
    .matchAll()
    .then(function (l) {
      c.j.K = l.length;
    })
    .then(function () {
      return k.fetch(c);
    });
}
function nL(a, c) {
  var e = fK(c.ea.url);
  e && (c.j.A = e);
  e = wK(a.o, c.o);
  var f;
  if ((f = I.navigator.onLine)) ((f = c.ea.url), (f = wG(f) || uG(f) || yG(f)));
  return f ? a.S.fetch(c) : e && e.D ? a.I.fetch(c) : a.H.fetch(c);
}
function qL(a, c, e) {
  c.j.I = Date.now();
  if (CK(c)) {
    var f = a.v,
      g = VJ(f, 100012, c.o);
    f.pa(g);
  }
  if ((a = wK(a.o, c.o)) && c.v) {
    a.J.push(c);
    f = !!c.W && c.W.B;
    c.W && c.W.I && (V(a.Z, "docs-sw-eesp1sr") ? f && (a.D = !0) : (a.D = f || !!e.j));
    if ((e = !a.I))
      ((g = c.j),
        Ef(a.A, 7, g.K),
        vL(a.A, g.S),
        Ff(a.B, 3, g.C),
        Ff(a.B, 4, g.I),
        g.j != null && (vf(a.j, 1), Ff(a.j, 1, g.j)),
        g.H != null && (vf(a.j, 2), Ff(a.j, 2, g.H)),
        g.J != null && (vf(a.j, 3), Ff(a.j, 3, g.J)),
        (a.I = !0));
    !a.M &&
      f &&
      ((c = c.j),
      Ff(a.B, 5, c.C),
      Ff(a.B, 6, c.I),
      c.o != null && (vf(a.j, 4), Ff(a.j, 4, c.o)),
      (a.M = !0),
      Q(a.A, 5, !e));
  }
}
function sL(a, c, e) {
  CK(c) &&
    ((e.ta && e.ta.status == 200) || V(a.D, "docs-sw-eesp1sr")) &&
    rL(a, c, Promise.resolve(eu(1e4)));
  a.F != null && hE(c, e, a.F, a.A);
  return wL(a, c, e)
    .then(function () {
      return xL(a, c, e);
    })
    .then(function () {
      return a.v.kb();
    });
}
function wL(a, c, e) {
  return CK(c)
    ? Promise.resolve()
        .then(function () {
          var f = wK(a.o, c.o);
          return (f = f ? f.v : null) && f.j ? yL(f) : null;
        })
        .then(function (f) {
          var g = wK(a.o, c.o),
            h = e.ta ? e.ta.status : null;
          g && ((g.R = !0), (g.U = f), (g.X = h));
          var k = a.v,
            l = c.o,
            p = c.j.j,
            q = e.Na,
            r = e.ta ? e.ta.type : null,
            w = c.W.o;
          g = !!g;
          var y = DK(c);
          l = VJ(k, 100001, l);
          var z = En(KH(l)),
            B = Cn(z);
          p != null && Ff(B, 2, p * 1e3);
          q != null && (p = $J(q)) && Hf(B, 12, p);
          h != null && Ef(B, 5, h);
          r != null && Gf(B, 7, r);
          f != null && ((h = new tn()), (f = Q(h, 2, f)), N(B, tn, 10, f));
          f = new rn();
          y = Q(f, 1, y);
          N(z, rn, 9, y);
          yn(xn(wn(B), w), g);
          k.pa(l);
        })
    : Promise.resolve();
}
function xL(a, c, e) {
  var f = c.j.A;
  if (f) {
    var g = yK(c.j, e.Na),
      h = c.j.C,
      k = c.j.I;
    return Promise.race([Promise.all(c.j.M), eu(3e4)])
      .catch(function (l) {
        jE(a.A, c, nl(l));
      })
      .then(function () {
        var l = c.j,
          p = Date.now();
        l.B && l.j == null && ((l.j = p - l.B), (l.F = !0));
        l.v && l.o == null && ((l.o = p - l.v), (l.D = !0));
        l = a.v;
        var q = c.o,
          r = h * 1e3,
          w = k * 1e3,
          y = e.Na,
          z = zK(c.j, "cache-storage"),
          B = zK(c.j, "network"),
          F = c.j.T,
          J = c.j.R,
          W = !!wK(a.o, c.o),
          ha = DK(c);
        p = l.jb(100005, 0);
        var Pa = new Bn(),
          Ia = new An();
        g != null && Q(Ia, 1, g);
        Hf(Ia, 2, f);
        Ff(Ia, 3, r);
        Ff(Ia, 4, w);
        (r = $J(y)) && Hf(Ia, 6, r);
        z && N(Ia, zn, 7, z);
        B && N(Ia, zn, 8, B);
        F != null && Ef(Ia, 9, F);
        J != null && Ef(Ia, 10, J);
        z = new rn();
        ha = Q(z, 1, ha);
        Ia = N(Pa, An, 3, Ia);
        z = new vn();
        q = Gf(z, 1, q);
        W = yn(q, W);
        W = N(Ia, vn, 1, W);
        N(W, rn, 9, ha);
        W = KH(p);
        N(W, Bn, 50, Pa);
        l.pa(p);
      });
  }
  return Promise.resolve();
}
function rL(a, c, e) {
  a = jK(a.C, c, e);
  Fb() >= 60 && c.B(a);
}
function lL(a, c) {
  var e = c.ea;
  return !c.W && c.v && qE(a.B, e.url) == "/preload";
}
function zL() {
  var a = hy,
    c = AL,
    e = BL;
  this.v = CL;
  this.o = a;
  this.j = c;
  this.A = e;
}
function DL(a, c) {
  EL(a.A);
  var e = Promise.resolve()
    .then(function () {
      var f = a.v.registration.navigationPreload;
      if (f)
        return (Wb && mb() >= 0 ? f.enable() : f.disable()).catch(function (g) {
          return PG(a.j, nl(g));
        });
    })
    .then(function () {
      return a.v.clients.claim();
    })
    .catch(function (f) {
      return PG(a.j, nl(f));
    })
    .finally(function () {
      return su(a.o.C);
    });
  c.waitUntil(Promise.resolve(dx(a.o, e)));
}
function FL() {
  var a = hy,
    c = GL,
    e = AL,
    f = HL,
    g = IL,
    h = JL;
  this.v = CL;
  this.C = a;
  this.B = c;
  this.o = e;
  this.j = f;
  this.D = g;
  this.A = h;
}
function KL(a, c) {
  var e = a.v.registration.active ? "reinstall" : "new_install",
    f = {},
    g = ((f.serviceworker_cacheUpdateReason = e), f),
    h = !0,
    k = !1,
    l = !1;
  f = Promise.resolve()
    .then(function () {
      if (a.A != null) {
        var p = hL(c);
        if (p != null)
          return p.register(a.A).then(function () {
            l = !0;
          });
      }
    })
    .then(function () {
      if (a.D || e !== "reinstall")
        return (
          (g.serviceworker_cacheUpdateDuringSwInstall = "true"),
          WH(a.B, e).catch(function (p) {
            e === "new_install" && NG(a.o, nl(p), "install", "info", g);
          })
        );
      g.serviceworker_cacheUpdateDuringSwInstall = "false";
      k = !0;
    })
    .then(function () {
      return a.v.skipWaiting();
    })
    .catch(function (p) {
      LG(a.o, nl(p), g);
      h = !1;
    })
    .then(function () {
      var p = a.j.jb(100008, 0),
        q = KH(p),
        r = new Bn();
      var w = new sn();
      w = Q(w, 1, h);
      w = Q(w, 2, k);
      w = Q(w, 3, l);
      r = N(r, sn, 7, w);
      N(q, Bn, 50, r);
      a.j.pa(p);
      if (!h) return Promise.reject(Error("Rd"));
    });
  c.waitUntil(
    Promise.resolve(f).finally(function () {
      return Promise.all([su(a.C.C), a.j.kb()]);
    }),
  );
}
function LL(a) {
  this.j = a;
}
function NL(a) {
  this.G = M(a);
}
D(NL, R);
NL.prototype.clearValue = function () {
  return Ue(this, 2);
};
function OL(a) {
  this.G = M(a);
}
D(OL, R);
function PL(a, c) {
  return Gf(a, 1, c);
}
function QL(a, c) {
  return sf(a, NL, 2, c);
}
function RL(a) {
  this.G = M(a);
}
D(RL, R);
function SL(a) {
  this.G = M(a);
}
D(SL, R);
SL.prototype.getType = function () {
  return Bf(this, 1);
};
function TL(a) {
  this.G = M(a);
}
D(TL, R);
function UL(a) {
  return xf(a, 1);
}
function vL(a, c) {
  Q(a, 3, c);
}
function VL(a) {
  return Df(a, 8);
}
TL.prototype.Ca = function (a) {
  return Gf(this, 9, a);
};
TL.prototype.ia = function () {
  return Bf(this, 10);
};
function WL(a) {
  this.G = M(a);
}
D(WL, R);
function XL(a) {
  this.G = M(a);
}
D(XL, R);
function YL(a) {
  this.G = M(a);
}
D(YL, R);
function ZL(a, c) {
  N(a, TL, 1, c);
}
function $L(a, c) {
  N(a, XL, 2, c);
}
function aM(a, c) {
  N(a, WL, 3, c);
}
function bM(a) {
  this.G = M(a);
}
D(bM, R);
function cM(a, c) {
  return N(a, YL, 1, c);
}
function dM(a) {
  this.G = M(a);
}
D(dM, R);
function eM(a) {
  this.G = M(a);
}
D(eM, R);
function fM(a) {
  this.G = M(a);
}
D(fM, R);
function gM(a) {
  this.G = M(a);
}
D(gM, R);
function hM(a) {
  this.G = M(a);
}
D(hM, R);
function iM(a, c) {
  var e = c.j;
  if (a.o[e]) throw Error("Td`" + e);
  a.o[e] = c;
  return a;
}
function jM(a, c) {
  if (c && c.data && c.ports.length)
    if (Array.isArray(c.data)) {
      var e = new SL(c.data),
        f = c.ports[0],
        g = Promise.resolve(kM(a, e, c.source && c.source.id ? c.source.id : null)).then(
          function (h) {
            return f.postMessage(ze(h));
          },
        );
      a = lM(a.v, e, g);
      typeof c.waitUntil === "function" && c.waitUntil(a);
    } else QG(a.j, Error("Ud`" + JSON.stringify(c.data) + "`" + Ma(c.data)));
  else QG(a.j, Error("Vd"));
}
function kM(a, c, e) {
  mM(a.A, wf(c, 1, Re));
  return nM(a, c, e).catch(function (f) {
    f = nl(f);
    QG(a.j, f, c);
    return oM(f);
  });
}
function oM(a) {
  var c = c === void 0 ? {} : c;
  var e = new hM(),
    f = Object.keys(c).map(function (g) {
      var h = new NL();
      h = Gf(h, 1, g);
      return Gf(h, 2, c[g]);
    });
  f = QL(PL(new OL(), a.message), f);
  a.message === "cache update timed out" && Hf(f, 3, 1);
  N(e, OL, 3, f);
  return e;
}
function nM(a, c, e) {
  var f = wf(c, 1, Re);
  a = a.o[f];
  return a
    ? wf(c, 1, Re) !== a.j
      ? Promise.reject(Error("Sd`" + a.j))
      : a.o(c, e)
    : ((c = Error("Wd`" + f)), TG(c), Promise.reject(c));
}
function pM(a, c) {
  this.j = 7;
  this.A = a;
  this.v = c;
}
D(pM, LL);
pM.prototype.o = function () {
  var a = this.v;
  if ((a = a.J ? a.A : Error("wd"))) {
    var c = {};
    NG(this.A, a, "messageHandler", "info", ((c.serviceworker_messageHandler_requestType = 0), c));
    return Promise.resolve(oM(a));
  }
  return Promise.resolve(new hM());
};
function qM(a) {
  this.j = 1;
  this.v = a;
}
D(qM, LL);
qM.prototype.o = function () {
  return eI(this.v).then(function () {
    return new hM();
  });
};
function rM(a, c, e) {
  this.j = 3;
  this.A = a;
  this.v = c;
  this.B = e;
}
D(rM, LL);
rM.prototype.o = function (a, c) {
  var e = this;
  return sM(this.v, c).then(function (f) {
    var g = wK(e.v, c),
      h = g ? g.J.slice() : [],
      k = h.some(function (w) {
        return !w.W;
      }),
      l;
    UL(pf(f, TL, 1)) ? (l = Error("Xd")) : k && (l = Error("Yd"));
    if (l) {
      TG(l);
      var p = h.every(function (w) {
          return !w.W;
        }),
        q = {},
        r =
          ((q.serviceworker_numNavigations = String(h.length)),
          (q.serviceworker_someRequestsMissingActionInfo = String(k)),
          (q.serviceworker_allRequestsMissingActionInfo = String(p)),
          (q.serviceworker_clientId = c),
          q);
      h.forEach(function (w, y) {
        r["serviceworker_sourceUrl" + y] = w.ea.url;
      });
      QG(e.A, l, a, r);
    }
    ZJ(e.B, VL(pf(f, TL, 1)), !!g);
    g = new hM();
    f = cM(new bM(), f);
    N(g, bM, 4, f);
    return g;
  });
};
function tM() {
  this.j = 5;
}
D(tM, LL);
tM.prototype.o = function (a, c) {
  if (!c) return Promise.reject(Error("Zd"));
  a = new hM();
  var e = new dM();
  c = Gf(e, 1, c);
  N(a, dM, 6, c);
  return Promise.resolve(a);
};
function uM(a) {
  this.j = 4;
  this.v = a;
}
D(uM, LL);
uM.prototype.o = function (a) {
  var c = new hM();
  a = pf(a, RL, 3);
  a = Af(a, 1);
  return Promise.resolve(this.v.get(a)).then(function (e) {
    e = e ? 1 : 2;
    var f = new eM();
    e = Hf(f, 1, e);
    N(c, eM, 5, e);
    return c;
  });
};
function vM(a) {
  this.j = 8;
  this.v = a;
}
D(vM, LL);
vM.prototype.o = function () {
  var a = tm(this.v, "buildLabel"),
    c = new hM(),
    e = new fM();
  a = Gf(e, 1, a);
  e = new gM();
  a = N(e, fM, 1, a);
  N(c, gM, 7, a);
  return Promise.resolve(c);
};
function wM() {
  this.j = 2;
}
D(wM, LL);
wM.prototype.o = function () {
  return Promise.resolve(new hM());
};
function xM(a, c) {
  this.j = 6;
  this.A = a;
  this.v = c;
}
D(xM, LL);
xM.prototype.o = function (a, c) {
  if ((a = c ? wK(this.A, c) : null)) a.K = !0;
  var e = this.v;
  c = VJ(e, 100009, c);
  yn(wn(Cn(En(KH(c)))), !!a);
  e.pa(c);
  return Promise.resolve(new hM());
};
function yM(a, c) {
  this.j = 9;
  this.A = a;
  this.v = c;
}
D(yM, LL);
yM.prototype.o = function (a, c) {
  if ((a = c ? wK(this.A, c) : null)) ((a.O = !0), a.v.stop());
  var e = this.v;
  c = VJ(e, 100010, c);
  yn(wn(Cn(En(KH(c)))), !!a);
  e.pa(c);
  return Promise.resolve(new hM());
};
function zM(a, c) {
  this.j = 0;
  this.A = a;
  this.v = c;
}
D(zM, LL);
zM.prototype.o = function () {
  var a = this;
  return Promise.resolve()
    .then(function () {
      return WH(a.v, "cache_only_update");
    })
    .then(function () {
      return new hM();
    })
    .catch(function (c) {
      c = nl(c);
      var e = {};
      NG(a.A, c, "messageHandler", "info", ((e.serviceworker_messageHandler_requestType = 0), e));
      return oM(c);
    });
};
function AM(a, c) {
  this.B = a;
  this.A = c;
  this.I = this.j = this.C = !1;
}
AM.prototype.start = function () {
  var a = this;
  if (this.j) throw Error("$d");
  this.j = !0;
  this.v = Date.now();
  this.B.clients
    .get(this.A)
    .then(function () {
      a.C = !0;
    })
    .catch(u());
  this.F = BM(this);
};
function CM(a) {
  if (!a.j) throw Error("ae");
  return a.F;
}
function yL(a) {
  if (!a.j) throw Error("be");
  return Promise.resolve()
    .then(function () {
      return a.C
        ? a.B.clients.get(a.A).then(function (c) {
            return !c;
          })
        : !1;
    })
    .then(function (c) {
      c && !a.o ? (a.o = Date.now()) : c || (a.D = Date.now());
      return c;
    });
}
AM.prototype.stop = function () {
  this.I = !0;
};
function BM(a) {
  return Promise.resolve(eu(1e3)).then(function () {
    if (!(a.o || a.I || Date.now() - a.v > 3e4))
      return yL(a).then(function () {
        return a.o ? void 0 : BM(a);
      });
  });
}
function DM(a, c, e, f, g) {
  this.ha = a;
  this.D = null;
  this.M = this.I = !1;
  this.J = [];
  this.A = new TL();
  this.B = new XL();
  this.j = new WL();
  this.C = !1;
  this.N = e;
  this.F = f;
  this.Z = g;
  this.v = new AM(c, f);
  this.T = !1;
  this.H = null;
  this.R = !1;
  this.X = this.U = null;
  this.S = this.O = this.K = !1;
  Q(this.A, 1, !1);
  Q(this.A, 5, !1);
  this.o = [];
}
DM.prototype.start = function () {
  if (this.C) throw Error("ee");
  this.C = !0;
  this.v.start();
  this.o.push(EM(this, 3e3));
  this.o.push(EM(this, 6e3));
  this.o.push(EM(this, 8e3));
  this.o.push(EM(this, 1e4));
  this.o.push(EM(this, 2e4));
  this.o.push(FM(this));
};
function uL(a) {
  if (!a.C) throw Error("fe");
  return Promise.all(a.o.concat([CM(a.v)])).then(u());
}
function tL(a, c) {
  a.T = !0;
  a.H = c;
}
function EM(a, c) {
  return Promise.resolve(eu(c))
    .then(function () {
      return yL(a.v);
    })
    .then(function (e) {
      var f = a.N,
        g = VJ(f, 100006, a.F);
      var h = new tn();
      h = Ef(h, 1, c);
      e = Q(h, 2, e);
      h = Cn(En(KH(g)));
      N(h, tn, 10, e);
      f.pa(g);
    });
}
function FM(a) {
  return Promise.resolve(eu(26e3)).then(function () {
    var c = a.N,
      e = a.F;
    var f = a.v;
    if (!f.j) throw Error("ce");
    f = f.D !== void 0 ? f.D - f.v : null;
    var g = a.v;
    if (!g.j) throw Error("de");
    var h = g.o !== void 0 ? g.o - g.v : null;
    var k = a.T;
    g = a.H;
    var l = a.R,
      p = a.U,
      q = a.X,
      r = a.K,
      w = a.O,
      y = a.S,
      z = new un();
    k = Q(z, 1, k);
    l = Q(k, 2, l);
    r = Q(l, 5, r);
    w = Q(r, 6, w);
    y = Q(w, 7, y);
    p != null && Q(y, 3, p);
    q != null && Ef(y, 4, q);
    f != null && Ef(y, 8, f);
    h != null && Ef(y, 9, h);
    e = VJ(c, 100013, e);
    f = xn(Cn(En(KH(e))), g);
    N(f, un, 14, y);
    c.pa(e);
  });
}
function GM(a, c) {
  IG(c, function (e) {
    var f = {},
      g = wK(a, e.o);
    g &&
      ((f.serviceworker_isColdStart = String(g.D)),
      (g = g.ha.W),
      !e.v && g && (f.serviceworker_sourceActionPath = g.o));
    return f;
  });
}
function mM(a, c) {
  a.j || (a.j = c == 2 ? 3 : 4);
}
function EL(a) {
  a.j || (a.j = 5);
}
function mL(a, c) {
  if (c.v) {
    for (var e in a.o) Date.now() - a.o[e].creationTime >= 3e5 && delete a.o[e];
    c.o && !a.o[c.o] && (a.o[c.o] = new HM(new DM(c, a.v, a.H, c.o, a.N)));
  }
  a.j || ((a.j = 2), (a.B = c.o));
}
function wK(a, c) {
  return c ? ((a = a.o[c]) ? a.j : null) : null;
}
function sM(a, c) {
  var e = new YL(),
    f = a.j;
  c && a.B == c && a.j == 2 && (f = 1);
  var g = wK(a, c);
  g && g.I
    ? (ZL(e, g.A.clone()), $L(e, g.B.clone()), aM(e, g.j.clone()))
    : ((g = new TL()), Q(g, 1, !0), ZL(e, g), $L(e, new XL()), aM(e, new WL()));
  g = pf(e, TL, 1);
  var h = pf(e, XL, 2);
  Gf(g, 8, c);
  Gf(g, 6, a.D);
  Hf(g, 10, a.I);
  g.Ca(a.F);
  Hf(g, 4, f);
  vL(g, xf(g, 3) || !1);
  Ff(h, 1, a.C);
  Ff(h, 7, a.J);
  Ff(h, 2, a.A);
  return IM(a).then(function (k) {
    var l = pf(e, TL, 1);
    Q(l, 2, k);
    return e;
  });
}
function IM(a) {
  return (a = a.v.registration.navigationPreload)
    ? Promise.resolve(a.getState()).then(function (c) {
        return c.enabled;
      })
    : Promise.resolve(!1);
}
function HM(a) {
  var c = Date.now();
  this.j = a;
  this.creationTime = c;
}
function pL(a, c, e, f) {
  c = JM(a, c, e, f);
  return Promise.resolve(dx(a.o, c));
}
function JM(a, c, e, f) {
  return KM(e, c)
    .catch(function (g) {
      var h = {};
      h = ((h.error_at_top_level_fetch_handling = "true"), h);
      return DI("none", "redirect-skipped", pl(g, h));
    })
    .then(function (g) {
      var h = g.ta;
      if (h) {
        var k = g.hb;
        !k || (k instanceof SC && c.A) || RG(a.j, c, g);
        return h;
      }
      return LM(c, f).then(function (l) {
        RG(a.j, c, g, l);
        return l;
      });
    });
}
function LM(a, c) {
  return Promise.resolve()
    .then(function () {
      return a.v && c
        ? jL(c).then(function (e) {
            return e || Response.error();
          })
        : Promise.resolve(Response.error());
    })
    .catch(function () {
      return Response.error();
    });
}
function lM(a, c, e) {
  e = e.catch(function (f) {
    QG(a.j, nl(f), c);
  });
  return Promise.resolve(dx(a.o, e));
}
function jK(a, c, e) {
  e = e.catch(function (f) {
    jE(a.j, c, nl(f));
  });
  return Promise.resolve(dx(a.o, e));
}
function qK(a, c) {
  return a.fetch(c).catch(function (e) {
    return DI("none", "unexpected-error-from-fetcher", nl(e));
  });
}
function KM(a, c) {
  return a.then(function (e) {
    if (e.ta && e.ta.redirected && c.ea.redirect != "follow") throw Error("ge");
    return e;
  });
}
function MM() {
  var a = CL,
    c = NM,
    e = new FL(),
    f = new zL(),
    g = OM,
    h = AL,
    k = BL;
  this.j = hy;
  this.o = a;
  this.B = c;
  this.N = e;
  this.A = f;
  this.H = g;
  this.v = k;
  GM(this.v, h);
  this.o.addEventListener("install", cx(this.j, this.I, this), !1);
  this.o.addEventListener("fetch", cx(this.j, this.D, this), !1);
  this.o.addEventListener("activate", cx(this.j, this.C, this), !1);
  this.o.addEventListener("message", cx(this.j, this.F, this), !1);
}
MM.prototype.I = function (a) {
  KL(this.N, a);
};
MM.prototype.C = function (a) {
  DL(this.A, a);
};
MM.prototype.F = function (a) {
  jM(this.H, a);
};
MM.prototype.D = function (a) {
  a.preloadResponse && a.preloadResponse.catch(u());
  kL(this.B, a);
};
function PM(a) {
  this.B = a.gf || null;
  this.v = a.Xf || !1;
  this.A = a.Yf || !1;
  if (this.v && this.A) throw Error();
  this.j = void 0;
}
Za(PM, xw);
PM.prototype.o = function (a) {
  var c = new QM(this.B, this.v, this.A);
  this.j && (c.C = this.j);
  a && (c.o = a);
  return c;
};
function QM(a, c, e) {
  au.call(this);
  this.S = a;
  this.D = c;
  this.J = e || !1;
  this.C = void 0;
  this.status = this.readyState = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.K = new Headers();
  this.v = null;
  this.O = "GET";
  this.R = "";
  this.j = !1;
  this.M = this.B = this.F = null;
  this.H = new AbortController();
  this.o = void 0;
}
Za(QM, au);
A = QM.prototype;
A.open = function (a, c) {
  if (this.readyState != 0) throw (this.abort(), Error("he"));
  this.O = a;
  this.R = c;
  this.readyState = 1;
  RM(this);
};
A.send = function (a) {
  if (this.readyState != 1) throw (this.abort(), Error("ie"));
  var c,
    e = ((c = this.o) == null ? 0 : c.signal)
      ? AbortSignal.any([this.o.signal, this.H.signal])
      : this.H.signal;
  if (e.aborted) throw (this.abort(), Error("je"));
  this.j = !0;
  var f, g, h, k;
  c = Object.assign({}, this.o, {
    headers: this.K,
    method: this.O,
    credentials: (h = (f = this.o) == null ? void 0 : f.credentials) != null ? h : this.C,
    cache: (k = (g = this.o) == null ? void 0 : g.cache) != null ? k : void 0,
    signal: e,
  });
  a && (c.body = a);
  (this.S || I).fetch(new Request(this.R, c)).then(this.Fe.bind(this), this.Ob.bind(this));
};
A.abort = function () {
  this.response = this.D || this.J ? [] : "";
  this.responseText = "";
  this.K = new Headers();
  this.status = 0;
  this.H.abort("Request was aborted.");
  this.B && this.B.cancel("Request was aborted.").catch(x(null));
  this.readyState >= 1 && this.j && this.readyState != 4 && ((this.j = !1), SM(this));
  this.readyState = 0;
};
A.Fe = function (a) {
  if (
    this.j &&
    ((this.F = a),
    this.v ||
      ((this.status = this.F.status),
      (this.statusText = this.F.statusText),
      (this.v = a.headers),
      (this.readyState = 2),
      RM(this)),
    this.j && ((this.readyState = 3), RM(this), this.j))
  )
    if (this.responseType === "arraybuffer")
      a.arrayBuffer().then(this.De.bind(this), this.Ob.bind(this));
    else if (a.body && I.ReadableStream) {
      this.B = a.body.getReader();
      if (this.D || this.J) {
        if (this.responseType) throw Error("ke");
        this.response = [];
      } else this.response = this.responseText = "";
      this.D || (this.M = new TextDecoder());
      TM(this);
    } else a.text().then(this.Ee.bind(this), this.Ob.bind(this));
};
function TM(a) {
  a.B.read().then(a.ze.bind(a)).catch(a.Ob.bind(a));
}
A.ze = function (a) {
  if (this.j) {
    var c = a.value;
    if (this.D) a.value && this.response.push(c || new Uint8Array(0));
    else if ((c = c ? this.M.decode(c, { stream: !a.done }) : ""))
      this.J ? this.response.push(c) : (this.response = this.responseText += c);
    a.done ? SM(this) : RM(this);
    this.readyState == 3 && TM(this);
  }
};
A.Ee = function (a) {
  this.j && ((this.response = this.responseText = a), SM(this));
};
A.De = function (a) {
  this.j && ((this.response = a), SM(this));
};
A.Ob = function () {
  this.j && SM(this);
};
function SM(a) {
  a.readyState = 4;
  a.F = null;
  a.B = null;
  a.M = null;
  RM(a);
}
A.setRequestHeader = function (a, c) {
  this.K.append(a, c);
};
A.getResponseHeader = function (a) {
  return this.v ? this.v.get(a.toLowerCase()) || "" : "";
};
A.getAllResponseHeaders = function () {
  if (!this.v) return "";
  for (var a = [], c = this.v.entries(), e = c.next(); !e.done; )
    ((e = e.value), a.push(e[0] + ": " + e[1]), (e = c.next()));
  return a.join("\r\n");
};
function RM(a) {
  a.onreadystatechange && a.onreadystatechange.call(a);
}
Object.defineProperty(QM.prototype, "withCredentials", {
  get: function () {
    return this.C === "include";
  },
  set: function (a) {
    this.C = a ? "include" : "same-origin";
  },
});
var CL = self,
  UM = new PM({ gf: CL });
UM.j = "same-origin";
yw = UM;
var by = gm(),
  VM = tm(by, "docs-sw-cache-prefix");
if (!VM) throw Error("le");
var tI = "/" + VM,
  WM = Om(),
  XM = (function (a, c, e, f) {
    var g = !0;
    g = g === void 0 ? !1 : g;
    e = e === void 0 ? !1 : e;
    a = ix(hx(mx(lx(kx(new Ox(a, c)), g), e), c));
    f && (a.j = f);
    f = new Ow(a);
    c = tm(c, "buildLabel");
    db(c) || ((f.o.buildLabel = c), (f.o["build-label"] = c));
    f.o.locale = "en";
    Zw(f, "errorReportTimeMs", function () {
      return Date.now().toString();
    });
    return f;
  })(VM + "-sw", by, V(by, "docs-sw-ehnur"), WM);
XM.o.serviceworker_isServiceWorkerError = "true";
XM.o.serviceworker_type = "editorSW";
CL.registration &&
  ((XM.o.serviceworker_activeAtStart = CL.registration.active ? "true" : "false"),
  CL.registration.scope && (XM.o.serviceworker_scope = CL.registration.scope));
var hy = XM,
  YM = new Kn(),
  HK = (function (a) {
    a = wE(a);
    return (
      Array.from(a.values()).find(function (c) {
        var e = I.location.href,
          f = c.ib + "/";
        return !!(c.ib && e.indexOf(f) >= 0 && c.getType());
      }) || null
    );
  })(by),
  AL = new (function () {
    var a = hy,
      c = by;
    var e = e === void 0 ? null : e;
    this.j = a;
    this.v = [];
    this.A = c;
    this.o = e;
  })(),
  hK = new (function () {
    this.j = AL;
    this.o = this.j.j;
  })(),
  ZM = V(by, "docs-eilttw"),
  $M;
if (V(by, "docs-eiltdw")) $M = new Wn();
else {
  var aN = new Tm(hy);
  co();
  var bN;
  bN = (ao(), $n);
  bo.length == 0 && (bo = "editormain.js");
  if (ZM && eo && (bN || bo !== "editormain.js") && aN) {
    var cN = ph("Ba`editormain.js`" + T(bo));
    bx(aN.j, cN.L, null, !1);
  }
  eo = !0;
  $M = bN;
}
var rI = new WB(hy, null, by, YM, $M, void 0, void 0, !0),
  sI = HK.getType(),
  dN = new xI();
hy.o.sid = WM;
var eN,
  Ly = (function (a) {
    switch (a) {
      case "kix":
        return "kix";
      case "drawing":
        return "drawing";
      case "punch":
        return "punch";
      case "ritz":
        return "ritz";
      default:
        throw Error("Kb`" + a);
    }
  })(sI),
  fN = (function (a) {
    switch (a) {
      case "kix":
        return 102;
      case "punch":
        return 103;
      case "ritz":
        return 105;
      case "drawing":
        return 104;
      default:
        throw Error("Jd");
    }
  })(sI),
  ry = new vC(new (u())(), by, void 0, hy),
  gN = ry.C;
ji(tI, "https://") || ji(tI, "http://");
ji(tI, "/") || ji(tI, "//");
gN.o = tI;
var Ay = new qy();
V(by, "docs-esi") || V(by, "docs-dli") ? (Ay = new ay()) : V(by, "docs-ecci") && (Ay = new zy());
var My = hy,
  Ny = rI,
  Ey = Ay;
if (V(by, "docs-eil")) {
  My.o.impression_sid = WM;
  var hN;
  hN = new By();
  var iN = new TJ();
  iN.A = hN;
  iN.v = new pJ();
  iN.o = !0;
  var jN = iN.Ca(WM),
    kN = jN.j;
  wf(kN.j, 6);
  Hf(kN.j, 6, fN);
  var lN;
  nJ(jN.j);
  var mN,
    QJ,
    nN = new SJ();
  nN.o = jN.j;
  QJ = nN;
  QJ.j == null && (QJ.j = new aJ());
  QJ.j.j[vJ.V()] = new RJ();
  QJ.j.j[rJ.V()] = new LJ();
  var oN = QJ.j,
    pN,
    qN = QJ.o,
    rN = lJ(qN);
  if (!We(rN, gJ, 1)) {
    var sN = lJ(qN),
      tN = new gJ();
    N(sN, gJ, 1, tN);
  }
  pN = jJ(lJ(qN));
  oN.o = pN;
  for (var uN = Ms(oN.v), vN = 0; vN < uN.length; vN++) uN[vN].j(oN.o);
  mN = new PJ();
  lN = new DJ(mN, new JJ(mN, jN.A, jN.v, jN.o, null), !1);
  var wN = lN.ec(),
    xN = tm(by, "buildLabel");
  if (wN.o == null) {
    wN.o = new hJ();
    var yN = lJ(wN);
    N(yN, hJ, 2, wN.o);
  }
  Se(wN.o, 1, void 0, void 0);
  Gf(wN.o, 1, xN);
  var zN = aK(tm(by, "jobset")),
    AN = lJ(wN);
  wf(AN, 4);
  var BN = lJ(wN);
  Hf(BN, 4, zN);
  var CN = vb(),
    DN = mJ(wN);
  Se(DN, 2, void 0, void 0);
  var EN = mJ(wN);
  Gf(EN, 2, CN);
  var FN = mJ(wN);
  Se(FN, 1, void 0, void 0);
  var GN = mJ(wN);
  Gf(GN, 1, "en");
  var HN = Date.now() * 1e3;
  vf(wN.j, 2);
  Ff(wN.j, 2, HN);
  var IN,
    JN = new fJ(),
    KN = !!tm(by, "docs-offline-lsuid");
  IN = Q(JN, 1, KN);
  var LN = jJ(lJ(wN));
  We(LN, fJ, 20);
  var MN = jJ(lJ(wN));
  N(MN, fJ, 20, IN);
  var NN;
  var ON = gm(),
    PN = ON.get("ilcm");
  if (PN == null) NN = null;
  else {
    var oy = PN.je,
      QN = gm();
    QN.get("ilcm") != null && V(QN, "icso") && Om();
    var ny = PN.ei;
    ON.get("buildLabel");
    NN = new my();
  }
  var RN = NN;
  if (RN) {
    var SN,
      TN,
      UN = new nn(),
      VN = (SN = RN.o) != null ? SN : [];
    TN = tf(UN, 1, VN);
    var WN = lN.ec(),
      XN = mJ(WN);
    We(XN, nn, 10);
    var YN = mJ(WN);
    N(YN, nn, 10, TN);
  }
  lN.Gd();
  eN = lN;
} else eN = new oJ();
var HL = eN,
  GL = new VH(CL, dN, VM, rI, AL, HL, by);
GL.start();
var BL = new (function () {
    var a = HL,
      c = by;
    this.v = CL;
    this.D = tm(c, "buildLabel");
    this.I = aK(tm(c, "jobset"));
    this.F = WM;
    this.H = a;
    this.N = c;
    this.o = {};
    this.C = null;
    this.J = I._docs_swStartLoad || null;
    this.B = this.j = this.A = null;
  })(),
  OM = new (function () {
    var a = BL;
    this.j = AL;
    this.v = hK;
    this.A = a;
    this.o = {};
  })(),
  ZN = new zM(AL, GL);
iM(
  iM(
    iM(
      iM(
        iM(
          iM(iM(iM(iM(iM(OM, ZN), new qM(GL)), new pM(AL, GL, ZN)), new wM()), new xM(BL, HL)),
          new yM(BL, HL),
        ),
        new rM(AL, BL, HL),
      ),
      new uM(CL.clients),
    ),
    new tM(),
  ),
  new vM(by),
);
var NM = new (function () {
    var a = CL,
      c = hy,
      e = AL,
      f = GL,
      g = rI,
      h = BL,
      k = HL,
      l = by;
    this.B = HK;
    this.J = new iL(g, f, l);
    c = new GK(g, f, c, l);
    f = new JI(f, g, l);
    this.j = new XK(a, e, l);
    g = new gK(k, g);
    this.I = new WK(f, this.j, !0, g);
    this.H = new UK(f, this.j, g, sm(l, "docs-sw-nfhms"));
    this.S = new UK(f, this.j, g, -22e3);
    this.U = new WK(this.j, c, !1, g);
    this.R = new WK(c, this.j, !0, g);
    this.O = new tK(this.j, c, e, k, g, h, l);
    this.C = hK;
    this.A = e;
    this.o = h;
    this.N = a;
    this.v = k;
    this.D = l;
    this.T = new EK(e, this.B);
    this.M = V(l, "docs-efcs");
    this.K = V(l, "docs-doie");
    this.F = V(this.D, "docs-sw-eessrr") && Fb() >= 117 ? dL(!1, !1, null) : null;
  })(),
  $N = Nl(window.location.href, "zx"),
  aO = !(CL.registration.active && CL.registration.active.scriptURL == window.location.href),
  IL = !(!$N || !aO),
  JL = null;
if (Fb() >= 117) {
  var bO = V(by, "docs-sw-eesp0sr"),
    cO = V(by, "docs-sw-eesp1sr"),
    dO = V(by, "docs-sw-eesp2sr");
  if (bO || cO || dO) JL = dL(cO, dO, aG(new ZF(VM, by)));
}
new MM();
var eO = BL,
  fO = Date.now();
eO.C = fO - I.performance.now();
eO.A = fO;
function _ModuleManager_initialize() {}
// Google Inc.

//# sourceMappingURL=editor_sw_bin_editor_main.sourcemap
