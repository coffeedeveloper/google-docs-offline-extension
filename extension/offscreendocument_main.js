(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // src/vendor/offscreen-runtime.js
  function aa() {
    return function(a) {
      return a;
    };
  }
  __name(aa, "aa");
  function n() {
    return function() {
    };
  }
  __name(n, "n");
  function p(a) {
    return function() {
      return this[a];
    };
  }
  __name(p, "p");
  function ba(a) {
    return function() {
      return a;
    };
  }
  __name(ba, "ba");
  var q, ca = typeof Object.create == "function" ? Object.create : function(a) {
    function b() {
    }
    __name(b, "b");
    b.prototype = a;
    return new b();
  }, da = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a;
  };
  function ea(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  __name(ea, "ea");
  var fa = ea(void 0);
  function v(a, b) {
    if (b) a: {
      var c = fa;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && b != null && da(c, a, {
        configurable: true,
        writable: true,
        value: b
      });
    }
  }
  __name(v, "v");
  var ha;
  if (typeof Object.setPrototypeOf == "function") ha = Object.setPrototypeOf;
  else {
    a: {
      ja = {
        a: true
      }, la = {};
      try {
        la.__proto__ = ja;
        ia = la.a;
        break a;
      } catch (a) {
      }
      ia = false;
    }
    ha = ia ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var ma = ha;
  function x(a, b) {
    a.prototype = ca(b.prototype);
    a.prototype.constructor = a;
    if (ma) ma(a, b);
    else
      for (var c in b)
        if (c != "prototype")
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.W = b.prototype;
  }
  __name(x, "x");
  function na(a) {
    var b = 0;
    return function() {
      return b < a.length ? {
        done: false,
        value: a[b++]
      } : {
        done: true
      };
    };
  }
  __name(na, "na");
  function y(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if (typeof a.length == "number") return {
      next: na(a)
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  __name(y, "y");
  function oa(a) {
    if (!(a instanceof Array)) {
      a = y(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  __name(oa, "oa");
  function pa(a) {
    if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object");
  }
  __name(pa, "pa");
  function z() {
    this.G = false;
    this.o = null;
    this.I = void 0;
    this.j = 1;
    this.v = this.A = 0;
    this.J = this.l = null;
  }
  __name(z, "z");
  function qa(a) {
    if (a.G) throw new TypeError("Generator is already running");
    a.G = true;
  }
  __name(qa, "qa");
  z.prototype.B = function(a) {
    this.I = a;
  };
  function ra(a, b) {
    a.l = {
      Ia: b,
      Na: true
    };
    a.j = a.A || a.v;
  }
  __name(ra, "ra");
  z.prototype.getNextAddressJsc = p("j");
  z.prototype.getYieldResultJsc = p("I");
  z.prototype.return = function(a) {
    this.l = {
      return: a
    };
    this.j = this.v;
  };
  z.prototype["return"] = z.prototype.return;
  z.prototype.S = function(a) {
    this.l = {
      ga: a
    };
    this.v < a ? (this.j = a, this.l = null) : this.j = this.v;
  };
  z.prototype.jumpThroughFinallyBlocks = z.prototype.S;
  z.prototype.F = function(a, b) {
    this.j = b;
    return {
      value: a
    };
  };
  z.prototype.yield = z.prototype.F;
  z.prototype.ea = function(a, b) {
    a = y(a);
    var c = a.next();
    pa(c);
    if (c.done) this.I = c.value, this.j = b;
    else return this.o = a, this.F(c.value, b);
  };
  z.prototype.yieldAll = z.prototype.ea;
  z.prototype.ga = function(a) {
    this.j = a;
  };
  z.prototype.jumpTo = z.prototype.ga;
  z.prototype.U = function() {
    this.j = 0;
  };
  z.prototype.jumpToEnd = z.prototype.U;
  z.prototype.O = function(a, b) {
    this.A = a;
    b != void 0 && (this.v = b);
  };
  z.prototype.setCatchFinallyBlocks = z.prototype.O;
  z.prototype.da = function(a) {
    this.A = 0;
    this.v = a || 0;
  };
  z.prototype.setFinallyBlock = z.prototype.da;
  z.prototype.V = function(a, b) {
    this.j = a;
    this.A = b || 0;
  };
  z.prototype.leaveTryBlock = z.prototype.V;
  z.prototype.L = function(a) {
    this.A = a || 0;
    a = this.l.Ia;
    this.l = null;
    return a;
  };
  z.prototype.enterCatchBlock = z.prototype.L;
  z.prototype.M = function(a, b, c) {
    c ? this.J[c] = this.l : this.J = [this.l];
    this.A = a || 0;
    this.v = b || 0;
    this.l = null;
  };
  z.prototype.enterFinallyBlock = z.prototype.M;
  z.prototype.R = function(a, b) {
    b = this.J.splice(b || 0)[0];
    (b = this.l = this.l || b) ? b.Na ? this.j = this.A || this.v : b.ga != void 0 && this.v < b.ga ? (this.j = b.ga, this.l = null) : this.j = this.v : this.j = a;
  };
  z.prototype.leaveFinallyBlock = z.prototype.R;
  z.prototype.P = function(a) {
    return new sa(a);
  };
  z.prototype.forIn = z.prototype.P;
  function sa(a) {
    this.o = a;
    this.j = [];
    for (var b in a) this.j.push(b);
    this.j.reverse();
  }
  __name(sa, "sa");
  sa.prototype.l = function() {
    for (; this.j.length > 0; ) {
      var a = this.j.pop();
      if (a in this.o) return a;
    }
    return null;
  };
  sa.prototype.getNext = sa.prototype.l;
  function ta(a) {
    this.j = new z();
    this.l = a;
  }
  __name(ta, "ta");
  function ua(a, b) {
    qa(a.j);
    var c = a.j.o;
    if (c) return va(a, "return" in c ? c["return"] : function(d) {
      return {
        value: d,
        done: true
      };
    }, b, a.j.return);
    a.j.return(b);
    return wa(a);
  }
  __name(ua, "ua");
  function va(a, b, c, d) {
    try {
      var e = b.call(a.j.o, c);
      pa(e);
      if (!e.done) return a.j.G = false, e;
      var f = e.value;
    } catch (g) {
      return a.j.o = null, ra(a.j, g), wa(a);
    }
    a.j.o = null;
    d.call(a.j, f);
    return wa(a);
  }
  __name(va, "va");
  function wa(a) {
    for (; a.j.j; ) try {
      var b = a.l(a.j);
      if (b) return a.j.G = false, {
        value: b.value,
        done: false
      };
    } catch (c) {
      a.j.I = void 0, ra(a.j, c);
    }
    a.j.G = false;
    if (a.j.l) {
      b = a.j.l;
      a.j.l = null;
      if (b.Na) throw b.Ia;
      return {
        value: b.return,
        done: true
      };
    }
    return {
      value: void 0,
      done: true
    };
  }
  __name(wa, "wa");
  function xa(a) {
    this.next = function(b) {
      qa(a.j);
      a.j.o ? b = va(a, a.j.o.next, b, a.j.B) : (a.j.B(b), b = wa(a));
      return b;
    };
    this.throw = function(b) {
      qa(a.j);
      if (a.j.o) {
        var c = a.j.o["throw"];
        if (c) var d = va(a, c, b, a.j.B);
        else {
          b = a.j.o;
          a.j.o = null;
          try {
            b["return"] && (d = b["return"](), pa(d)), ra(a.j, new TypeError(
              "The iterator does not provide a 'throw' method."
            ));
          } catch (e) {
            ra(a.j, e);
          }
          d = wa(a);
        }
      } else ra(a.j, b), d = wa(a);
      return d;
    };
    this.return = function(b) {
      return ua(a, b);
    };
    this[Symbol.iterator] = function() {
      return this;
    };
  }
  __name(xa, "xa");
  function ya(a) {
    function b(d) {
      return a.next(d);
    }
    __name(b, "b");
    function c(d) {
      return a.throw(d);
    }
    __name(c, "c");
    return new Promise(function(d, e) {
      function f(g) {
        g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
      }
      __name(f, "f");
      f(a.next());
    });
  }
  __name(ya, "ya");
  v("globalThis", function(a) {
    return a || fa;
  });
  v("Symbol", function(a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    __name(b, "b");
    function c(f, g) {
      this.j = f;
      da(this, "description", {
        configurable: true,
        writable: true,
        value: g
      });
    }
    __name(c, "c");
    if (a) return a;
    c.prototype.toString = p("j");
    var d = "jscomp_symbol_" + (Math.random() * 1e9 >>> 0) + "_", e = 0;
    return b;
  });
  v("Symbol.iterator", function(a) {
    if (a) return a;
    a = /* @__PURE__ */ Symbol("Symbol.iterator");
    da(Array.prototype, a, {
      configurable: true,
      writable: true,
      value: /* @__PURE__ */ __name(function() {
        return za(na(this));
      }, "value")
    });
    return a;
  });
  function za(a) {
    a = {
      next: a
    };
    a[Symbol.iterator] = function() {
      return this;
    };
    return a;
  }
  __name(za, "za");
  v("Promise", function(a) {
    function b(g) {
      this.j = 0;
      this.o = void 0;
      this.l = [];
      this.I = false;
      var h = this.v();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    }
    __name(b, "b");
    function c() {
      this.j = null;
    }
    __name(c, "c");
    function d(g) {
      return g instanceof b ? g : new b(function(h) {
        h(g);
      });
    }
    __name(d, "d");
    if (a) return a;
    c.prototype.l = function(g) {
      if (this.j == null) {
        this.j = [];
        var h = this;
        this.o(function() {
          h.A();
        });
      }
      this.j.push(g);
    };
    var e = fa.setTimeout;
    c.prototype.o = function(g) {
      e(g, 0);
    };
    c.prototype.A = function() {
      for (; this.j && this.j.length; ) {
        var g = this.j;
        this.j = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (l) {
            this.v(l);
          }
        }
      }
      this.j = null;
    };
    c.prototype.v = function(g) {
      this.o(function() {
        throw g;
      });
    };
    b.prototype.v = function() {
      function g(l) {
        return function(m) {
          k || (k = true, l.call(h, m));
        };
      }
      __name(g, "g");
      var h = this, k = false;
      return {
        resolve: g(this.M),
        reject: g(this.A)
      };
    };
    b.prototype.M = function(g) {
      if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof b) this.O(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = g != null;
            break a;
          case "function":
            h = true;
            break a;
          default:
            h = false;
        }
        h ? this.L(g) : this.G(g);
      }
    };
    b.prototype.L = function(g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.A(k);
        return;
      }
      typeof h == "function" ? this.P(h, g) : this.G(g);
    };
    b.prototype.A = function(g) {
      this.B(2, g);
    };
    b.prototype.G = function(g) {
      this.B(1, g);
    };
    b.prototype.B = function(g, h) {
      if (this.j != 0) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.j);
      this.j = g;
      this.o = h;
      this.j === 2 && this.R();
      this.F();
    };
    b.prototype.R = function() {
      var g = this;
      e(function() {
        if (g.J()) {
          var h = fa.console;
          typeof h !== "undefined" && h.error(g.o);
        }
      }, 1);
    };
    b.prototype.J = function() {
      if (this.I) return false;
      var g = fa.CustomEvent, h = fa.Event, k = fa.dispatchEvent;
      if (typeof k === "undefined") return true;
      typeof g === "function" ? g = new g("unhandledrejection", {
        cancelable: true
      }) : typeof h === "function" ? g = new h("unhandledrejection", {
        cancelable: true
      }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent(
        "unhandledrejection",
        false,
        true,
        g
      ));
      g.promise = this;
      g.reason = this.o;
      return k(g);
    };
    b.prototype.F = function() {
      if (this.l != null) {
        for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
        this.l = null;
      }
    };
    var f = new c();
    b.prototype.O = function(g) {
      var h = this.v();
      g.ja(h.resolve, h.reject);
    };
    b.prototype.P = function(g, h) {
      var k = this.v();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    b.prototype.then = function(g, h) {
      function k(t, w) {
        return typeof t == "function" ? function(u) {
          try {
            l(t(u));
          } catch (L) {
            m(L);
          }
        } : w;
      }
      __name(k, "k");
      var l, m, r = new b(function(t, w) {
        l = t;
        m = w;
      });
      this.ja(k(g, l), k(h, m));
      return r;
    };
    b.prototype.catch = function(g) {
      return this.then(void 0, g);
    };
    b.prototype.ja = function(g, h) {
      function k() {
        switch (l.j) {
          case 1:
            g(l.o);
            break;
          case 2:
            h(l.o);
            break;
          default:
            throw Error("Unexpected state: " + l.j);
        }
      }
      __name(k, "k");
      var l = this;
      this.l == null ? f.l(k) : this.l.push(k);
      this.I = true;
    };
    b.resolve = d;
    b.reject = function(g) {
      return new b(function(h, k) {
        k(g);
      });
    };
    b.race = function(g) {
      return new b(function(h, k) {
        for (var l = y(g), m = l.next(); !m.done; m = l.next()) d(m.value).ja(h, k);
      });
    };
    b.all = function(g) {
      var h = y(g), k = h.next();
      return k.done ? d([]) : new b(function(l, m) {
        function r(u) {
          return function(L) {
            t[u] = L;
            w--;
            w == 0 && l(t);
          };
        }
        __name(r, "r");
        var t = [], w = 0;
        do
          t.push(void 0), w++, d(k.value).ja(r(t.length - 1), m), k = h.next();
        while (!k.done);
      });
    };
    return b;
  });
  function Aa(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  __name(Aa, "Aa");
  var Ba = typeof Object.assign == "function" ? Object.assign : function(a, b) {
    if (a == null) throw new TypeError("No nullish arg");
    a = Object(a);
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (d)
        for (var e in d) Aa(d, e) && (a[e] = d[e]);
    }
    return a;
  };
  v("Object.assign", function(a) {
    return a || Ba;
  });
  v("Symbol.dispose", function(a) {
    return a ? a : /* @__PURE__ */ Symbol("Symbol.dispose");
  });
  v("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
      a: {
        var d = this;
        d instanceof String && (d = String(d));
        for (var e = d.length, f = 0; f < e; f++) {
          var g = d[f];
          if (b.call(c, g, f, d)) {
            b = g;
            break a;
          }
        }
        b = void 0;
      }
      return b;
    };
  });
  v("WeakMap", function(a) {
    function b(k) {
      this.j = (h += Math.random() + 1).toString();
      if (k) {
        k = y(k);
        for (var l; !(l = k.next()).done; ) l = l.value, this.set(l[0], l[1]);
      }
    }
    __name(b, "b");
    function c() {
    }
    __name(c, "c");
    function d(k) {
      var l = typeof k;
      return l === "object" && k !== null || l === "function";
    }
    __name(d, "d");
    function e(k) {
      if (!Aa(k, g)) {
        var l = new c();
        da(k, g, {
          value: l
        });
      }
    }
    __name(e, "e");
    function f(k) {
      var l = Object[k];
      l && (Object[k] = function(m) {
        if (m instanceof c) return m;
        Object.isExtensible(m) && e(m);
        return l(m);
      });
    }
    __name(f, "f");
    if ((function() {
      if (!a || !Object.seal) return false;
      try {
        var k = Object.seal({}), l = Object.seal({}), m = new a([
          [k, 2],
          [l, 3]
        ]);
        if (m.get(k) != 2 || m.get(l) != 3) return false;
        m.delete(k);
        m.set(l, 4);
        return !m.has(k) && m.get(l) == 4;
      } catch (r) {
        return false;
      }
    })()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function(k, l) {
      if (!d(k)) throw Error("Invalid WeakMap key");
      e(k);
      if (!Aa(k, g)) throw Error("WeakMap key fail: " + k);
      k[g][this.j] = l;
      return this;
    };
    b.prototype.get = function(k) {
      return d(k) && Aa(k, g) ? k[g][this.j] : void 0;
    };
    b.prototype.has = function(k) {
      return d(k) && Aa(
        k,
        g
      ) && Aa(k[g], this.j);
    };
    b.prototype.delete = function(k) {
      return d(k) && Aa(k, g) && Aa(k[g], this.j) ? delete k[g][this.j] : false;
    };
    return b;
  });
  v("Map", function(a) {
    function b() {
      var h = {};
      return h.previous = h.next = h.head = h;
    }
    __name(b, "b");
    function c(h, k) {
      var l = h[1];
      return za(function() {
        if (l) {
          for (; l.head != h[1]; ) l = l.previous;
          for (; l.next != l.head; ) return l = l.next, {
            done: false,
            value: k(l)
          };
          l = null;
        }
        return {
          done: true,
          value: void 0
        };
      });
    }
    __name(c, "c");
    function d(h, k) {
      var l = k && typeof k;
      l == "object" || l == "function" ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
      var m = h[0][l];
      if (m && Aa(h[0], l))
        for (h = 0; h < m.length; h++) {
          var r = m[h];
          if (k !== k && r.key !== r.key || k === r.key) return {
            id: l,
            list: m,
            index: h,
            entry: r
          };
        }
      return {
        id: l,
        list: m,
        index: -1,
        entry: void 0
      };
    }
    __name(d, "d");
    function e(h) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (h) {
        h = y(h);
        for (var k; !(k = h.next()).done; ) k = k.value, this.set(k[0], k[1]);
      }
    }
    __name(e, "e");
    if ((function() {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
        return false;
      try {
        var h = Object.seal({
          x: 4
        }), k = new a(y([
          [h, "s"]
        ]));
        if (k.get(h) != "s" || k.size != 1 || k.get({
          x: 4
        }) || k.set({
          x: 4
        }, "t") != k || k.size != 2) return false;
        var l = k.entries(), m = l.next();
        if (m.done || m.value[0] != h || m.value[1] != "s") return false;
        m = l.next();
        return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? false : true;
      } catch (r) {
        return false;
      }
    })()) return a;
    var f = /* @__PURE__ */ new WeakMap();
    e.prototype.set = function(h, k) {
      h = h === 0 ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this[0][l.id] = []);
      l.entry ? l.entry.value = k : (l.entry = {
        next: this[1],
        previous: this[1].previous,
        head: this[1],
        key: h,
        value: k
      }, l.list.push(l.entry), this[1].previous.next = l.entry, this[1].previous = l.entry, this.size++);
      return this;
    };
    e.prototype.delete = function(h) {
      h = d(this, h);
      return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, true) : false;
    };
    e.prototype.clear = function() {
      this[0] = {};
      this[1] = this[1].previous = b();
      this.size = 0;
    };
    e.prototype.has = function(h) {
      return !!d(this, h).entry;
    };
    e.prototype.get = function(h) {
      return (h = d(this, h).entry) && h.value;
    };
    e.prototype.entries = function() {
      return c(this, function(h) {
        return [h.key, h.value];
      });
    };
    e.prototype.keys = function() {
      return c(this, function(h) {
        return h.key;
      });
    };
    e.prototype.values = function() {
      return c(
        this,
        function(h) {
          return h.value;
        }
      );
    };
    e.prototype.forEach = function(h, k) {
      for (var l = this.entries(), m; !(m = l.next()).done; ) m = m.value, h.call(k, m[1], m[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e;
  });
  v("Set", function(a) {
    function b(c) {
      this.j = /* @__PURE__ */ new Map();
      if (c) {
        c = y(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.j.size;
    }
    __name(b, "b");
    if ((function() {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
        return false;
      try {
        var c = Object.seal({
          x: 4
        }), d = new a(y([c]));
        if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
          x: 4
        }) != d || d.size != 2) return false;
        var e = d.entries(), f = e.next();
        if (f.done || f.value[0] != c || f.value[1] != c) return false;
        f = e.next();
        return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? false : e.next().done;
      } catch (g) {
        return false;
      }
    })()) return a;
    b.prototype.add = function(c) {
      c = c === 0 ? 0 : c;
      this.j.set(c, c);
      this.size = this.j.size;
      return this;
    };
    b.prototype.delete = function(c) {
      c = this.j.delete(c);
      this.size = this.j.size;
      return c;
    };
    b.prototype.clear = function() {
      this.j.clear();
      this.size = 0;
    };
    b.prototype.has = function(c) {
      return this.j.has(c);
    };
    b.prototype.entries = function() {
      return this.j.entries();
    };
    b.prototype.values = function() {
      return this.j.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
      var e = this;
      this.j.forEach(function(f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  v("Object.values", function(a) {
    return a ? a : function(b) {
      var c = [], d;
      for (d in b) Aa(b, d) && c.push(b[d]);
      return c;
    };
  });
  v("Object.is", function(a) {
    return a ? a : function(b, c) {
      return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
    };
  });
  v("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
      var d = this;
      d instanceof String && (d = String(d));
      var e = d.length;
      c = c || 0;
      for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
        var f = d[c];
        if (f === b || Object.is(f, b)) return true;
      }
      return false;
    };
  });
  function Ca(a, b, c) {
    if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  }
  __name(Ca, "Ca");
  v("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
      return Ca(this, b, "includes").indexOf(b, c || 0) !== -1;
    };
  });
  v("Array.from", function(a) {
    return a ? a : function(b, c, d) {
      c = c != null ? c : aa();
      var e = [], f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
      if (typeof f == "function") {
        b = f.call(b);
        for (var g = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, g++));
      } else
        for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
      return e;
    };
  });
  v("Object.entries", function(a) {
    return a ? a : function(b) {
      var c = [], d;
      for (d in b) Aa(b, d) && c.push([d, b[d]]);
      return c;
    };
  });
  v("Number.isFinite", function(a) {
    return a ? a : function(b) {
      return typeof b !== "number" ? false : !isNaN(b) && b !== Infinity && b !== -Infinity;
    };
  });
  v("Number.MAX_SAFE_INTEGER", ba(9007199254740991));
  v("Number.MIN_SAFE_INTEGER", ba(-9007199254740991));
  v("Number.isInteger", function(a) {
    return a ? a : function(b) {
      return Number.isFinite(b) ? b === Math.floor(b) : false;
    };
  });
  v("Number.isSafeInteger", function(a) {
    return a ? a : function(b) {
      return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
    };
  });
  v("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
      var d = Ca(this, b, "startsWith");
      b += "";
      var e = d.length, f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var g = 0; g < f && c < e; )
        if (d[c++] != b[g++]) return false;
      return g >= f;
    };
  });
  function Da(a, b) {
    a instanceof String && (a += "");
    var c = 0, d = false, e = {
      next: /* @__PURE__ */ __name(function() {
        if (!d && c < a.length) {
          var f = c++;
          return {
            value: b(f, a[f]),
            done: false
          };
        }
        d = true;
        return {
          done: true,
          value: void 0
        };
      }, "next")
    };
    e[Symbol.iterator] = function() {
      return e;
    };
    return e;
  }
  __name(Da, "Da");
  v("Array.prototype.entries", function(a) {
    return a ? a : function() {
      return Da(this, function(b, c) {
        return [b, c];
      });
    };
  });
  v("Math.trunc", function(a) {
    return a ? a : function(b) {
      b = Number(b);
      if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
      var c = Math.floor(Math.abs(b));
      return b < 0 ? -c : c;
    };
  });
  v("Number.isNaN", function(a) {
    return a ? a : function(b) {
      return typeof b === "number" && isNaN(b);
    };
  });
  v("Array.prototype.keys", function(a) {
    return a ? a : function() {
      return Da(this, aa());
    };
  });
  v("Array.prototype.values", function(a) {
    return a ? a : function() {
      return Da(this, function(b, c) {
        return c;
      });
    };
  });
  v("Math.imul", function(a) {
    return a ? a : function(b, c) {
      b = Number(b);
      c = Number(c);
      var d = b & 65535, e = c & 65535;
      return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0;
    };
  });
  v("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
      var c = Ca(this, null, "repeat");
      if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
      b |= 0;
      for (var d = ""; b; )
        if (b & 1 && (d += c), b >>>= 1) c += c;
      return d;
    };
  });
  v("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
      if (b instanceof RegExp && !b.global) throw new TypeError(
        "RegExp passed into String.prototype.matchAll() must have global tag."
      );
      var c = new RegExp(b, b instanceof RegExp ? void 0 : "g");
      b instanceof RegExp && (c.lastIndex = b.lastIndex);
      var d = this, e = false, f = {
        next: /* @__PURE__ */ __name(function() {
          if (e) return {
            value: void 0,
            done: true
          };
          var g = c.exec(d);
          if (!g) return e = true, {
            value: void 0,
            done: true
          };
          g[0] === "" && (c.lastIndex += 1);
          return {
            value: g,
            done: false
          };
        }, "next")
      };
      f[Symbol.iterator] = function() {
        return f;
      };
      return f;
    };
  });
  v("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
      return this.then(function(c) {
        return Promise.resolve(b()).then(function() {
          return c;
        });
      }, function(c) {
        return Promise.resolve(b()).then(function() {
          throw c;
        });
      });
    };
  });
  var Ea = Ea || {}, A = self;
  function Fa(a, b) {
    var c = Ga("CLOSURE_FLAGS");
    a = c && c[a];
    return a != null ? a : b;
  }
  __name(Fa, "Fa");
  function Ga(a) {
    a = a.split(".");
    for (var b = A, c = 0; c < a.length; c++)
      if (b = b[a[c]], b == null) return null;
    return b;
  }
  __name(Ga, "Ga");
  function Ha(a) {
    var b = typeof a;
    return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
  }
  __name(Ha, "Ha");
  function Ia(a) {
    var b = Ha(a);
    return b == "array" || b == "object" && typeof a.length == "number";
  }
  __name(Ia, "Ia");
  function Ka(a) {
    var b = typeof a;
    return b == "object" && a != null || b == "function";
  }
  __name(Ka, "Ka");
  var La = "closure_uid_" + (Math.random() * 1e9 >>> 0), Ma = 0;
  function Na(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  __name(Na, "Na");
  function Oa(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  }
  __name(Oa, "Oa");
  function B(a, b, c) {
    B = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Na : Oa;
    return B.apply(null, arguments);
  }
  __name(B, "B");
  function Pa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  __name(Pa, "Pa");
  function Qa(a) {
    (0, eval)(a);
  }
  __name(Qa, "Qa");
  function Ra(a) {
    return a;
  }
  __name(Ra, "Ra");
  function C(a, b) {
    function c() {
    }
    __name(c, "c");
    c.prototype = b.prototype;
    a.W = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.zc = function(d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  __name(C, "C");
  ;
  function D(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, D);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b);
    this.j = true;
  }
  __name(D, "D");
  C(D, Error);
  D.prototype.name = "CustomError";
  function Sa(a) {
    A.setTimeout(function() {
      throw a;
    }, 0);
  }
  __name(Sa, "Sa");
  ;
  var Ta = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  var Ua = Fa(610401301, false), Va = Fa(748402147, true);
  var Wa, Xa = A.navigator;
  Wa = Xa ? Xa.userAgentData || null : null;
  function Ya(a) {
    if (!Ua || !Wa) return false;
    for (var b = 0; b < Wa.brands.length; b++) {
      var c = Wa.brands[b].brand;
      if (c && c.indexOf(a) != -1) return true;
    }
    return false;
  }
  __name(Ya, "Ya");
  function F(a) {
    var b;
    a: {
      if (b = A.navigator) {
        if (b = b.userAgent) break a;
      }
      b = "";
    }
    return b.indexOf(a) != -1;
  }
  __name(F, "F");
  ;
  function Za() {
    return Ua ? !!Wa && Wa.brands.length > 0 : false;
  }
  __name(Za, "Za");
  ;
  function $a(a, b) {
    return Array.prototype.some.call(a, b, void 0);
  }
  __name($a, "$a");
  function ab(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    var c;
    (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  __name(ab, "ab");
  function bb(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (Ia(d)) {
        var e = a.length || 0, f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  __name(bb, "bb");
  ;
  var cb = F("Firefox") || F("FxiOS"), db = F("Safari") && !((Za() ? Ya("Chromium") : (F("Chrome") || F("CriOS")) && (Za() || !F("Edge")) || F(
    "Silk"
  )) || (Za() ? 0 : F("Coast")) || (Za() ? 0 : F("Opera")) || (Za() ? 0 : F("Edge")) || (Za() ? Ya(
    "Microsoft Edge"
  ) : F("Edg/")) || (Za() ? Ya("Opera") : F("OPR")) || F("Firefox") || F("FxiOS") || F(
    "Silk"
  ) || F("Android")) && !(F("iPhone") && !F("iPod") && !F("iPad") || F("iPad") || F("iPod"));
  var eb = {}, fb = null;
  var gb = typeof Uint8Array !== "undefined", hb = typeof btoa === "function", ib = {}, jb = typeof structuredClone != "undefined";
  function kb(a, b) {
    if (b !== ib) throw Error("illegal external caller");
    this.j = a;
    if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
  }
  __name(kb, "kb");
  function lb() {
    return mb || (mb = new kb(null, ib));
  }
  __name(lb, "lb");
  var mb;
  function nb(a, b, c) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382[b] = c;
  }
  __name(nb, "nb");
  function ob(a) {
    return a.__closure__error__context__984382 || {};
  }
  __name(ob, "ob");
  ;
  var pb = void 0;
  function qb(a, b) {
    if (a != null) {
      var c;
      var d = (c = pb) != null ? c : pb = {};
      c = d[a] || 0;
      c >= b || (d[a] = c + 1, a = Error(), nb(a, "severity", "incident"), Sa(a));
    }
  }
  __name(qb, "qb");
  ;
  function rb() {
    return typeof BigInt === "function";
  }
  __name(rb, "rb");
  ;
  var sb = typeof Symbol === "function" && typeof /* @__PURE__ */ Symbol() === "symbol";
  function tb(a, b, c) {
    return typeof Symbol === "function" && typeof /* @__PURE__ */ Symbol() === "symbol" ? (c === void 0 ? 0 : c) && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : /* @__PURE__ */ Symbol() : b;
  }
  __name(tb, "tb");
  var ub = tb("jas", void 0, true), vb = tb(void 0, "0di"), wb = tb(void 0, "1oa"), xb = tb(void 0, /* @__PURE__ */ Symbol()), yb = tb(void 0, "0ubs"), zb = tb(void 0, "0actk"), Ab = tb("m_m", "Cc", true);
  Math.max.apply(Math, oa(Object.values({
    Zb: 1,
    Wb: 2,
    Tb: 4,
    kc: 8,
    vc: 16,
    ec: 32,
    Fb: 64,
    Rb: 128,
    Pb: 256,
    sc: 512,
    Qb: 1024,
    Sb: 2048,
    fc: 4096,
    ac: 8192
  })));
  var Bb = {
    qb: {
      value: 0,
      configurable: true,
      writable: true,
      enumerable: false
    }
  }, Cb = Object.defineProperties, G = sb ? ub : "qb", Db, Eb = [];
  H(Eb, 7);
  Db = Object.freeze(Eb);
  function Fb(a, b) {
    sb || G in a || Cb(a, Bb);
    a[G] |= b;
  }
  __name(Fb, "Fb");
  function H(a, b) {
    sb || G in a || Cb(a, Bb);
    a[G] = b;
  }
  __name(H, "H");
  function Gb(a) {
    Fb(a, 34);
    return a;
  }
  __name(Gb, "Gb");
  ;
  var Hb = {};
  function Ib(a, b) {
    return b === void 0 ? a.j !== Jb && !!(2 & (a.C[G] | 0)) : !!(2 & b) && a.j !== Jb;
  }
  __name(Ib, "Ib");
  var Jb = {}, Kb = Object.freeze({}), Lb = Object.freeze({});
  function Mb(a) {
    a.Bc = true;
    return a;
  }
  __name(Mb, "Mb");
  ;
  var Nb = Mb(function(a) {
    return typeof a === "number";
  }), Ob = Mb(function(a) {
    return typeof a === "string";
  }), Pb = Mb(function(a) {
    return typeof a === "boolean";
  }), Qb = Mb(function(a) {
    return typeof a === "bigint";
  });
  var Rb = typeof A.BigInt === "function" && typeof A.BigInt(0) === "bigint";
  function Sb(a) {
    var b = a;
    if (Ob(b)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
    } else if (Nb(b) && !Number.isSafeInteger(b)) throw Error(String(b));
    return Rb ? BigInt(a) : a = Pb(a) ? a ? "1" : "0" : Ob(a) ? a.trim() || "0" : String(a);
  }
  __name(Sb, "Sb");
  var Tb = Mb(function(a) {
    return Rb ? Qb(a) : Ob(a) && /^(?:-?[1-9]\d*|0)$/.test(a);
  }), Zb = Mb(function(a) {
    return Rb ? a >= Ub && a <= Vb : a[0] === "-" ? Wb(a, Xb) : Wb(a, Yb);
  }), Xb = Number.MIN_SAFE_INTEGER.toString(), Ub = Rb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0, Yb = Number.MAX_SAFE_INTEGER.toString(), Vb = Rb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
  function Wb(a, b) {
    if (a.length > b.length) return false;
    if (a.length < b.length || a === b) return true;
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = b[c];
      if (d > e) return false;
      if (d < e) return true;
    }
  }
  __name(Wb, "Wb");
  ;
  var I = 0, $b = 0;
  function ac(a) {
    var b = a >>> 0;
    I = b;
    $b = (a - b) / 4294967296 >>> 0;
  }
  __name(ac, "ac");
  function bc(a) {
    if (a < 0) {
      ac(0 - a);
      var b = y(cc(I, $b));
      a = b.next().value;
      b = b.next().value;
      I = a >>> 0;
      $b = b >>> 0;
    } else ac(a);
  }
  __name(bc, "bc");
  function dc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else rb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1e7 && (c += a / 1e7 >>> 0, a %= 1e7), c >= 1e7 && (b += c / 1e7 >>> 0, c %= 1e7), c = b + ec(c) + ec(a));
    return c;
  }
  __name(dc, "dc");
  function ec(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  __name(ec, "ec");
  function fc() {
    var a = I, b = $b;
    b & 2147483648 ? rb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = y(cc(a, b)), a = b.next().value, b = b.next().value, a = "-" + dc(a, b)) : a = dc(a, b);
    return a;
  }
  __name(fc, "fc");
  function cc(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b];
  }
  __name(cc, "cc");
  ;
  var hc = typeof BigInt === "function" ? BigInt.asIntN : void 0, ic = Number.isSafeInteger, jc = Number.isFinite, kc = Math.trunc;
  function lc(a) {
    if (a == null || typeof a === "number") return a;
    if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a);
  }
  __name(lc, "lc");
  function mc(a) {
    return a.displayName || a.name || "unknown type name";
  }
  __name(mc, "mc");
  var nc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function oc(a) {
    switch (typeof a) {
      case "bigint":
        return true;
      case "number":
        return jc(a);
      case "string":
        return nc.test(a);
      default:
        return false;
    }
  }
  __name(oc, "oc");
  function pc(a) {
    return a == null ? a : jc(a) ? a | 0 : void 0;
  }
  __name(pc, "pc");
  function qc(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;
    else if (typeof a !== "number") return;
    return jc(a) ? a | 0 : void 0;
  }
  __name(qc, "qc");
  function rc(a) {
    var b = a.length;
    if (a[0] === "-" ? b < 20 || b === 20 && a <= "-9223372036854775808" : b < 19 || b === 19 && a <= "9223372036854775807") return a;
    if (a.length < 16) bc(Number(a));
    else if (rb()) a = BigInt(a), I = Number(a & BigInt(4294967295)) >>> 0, $b = Number(a >> BigInt(32) & BigInt(4294967295));
    else {
      b = +(a[0] === "-");
      $b = I = 0;
      for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), $b *= 1e6, I = I * 1e6 + d, I >= 4294967296 && ($b += Math.trunc(I / 4294967296), $b >>>= 0, I >>>= 0);
      b && (b = y(cc(I, $b)), a = b.next().value, b = b.next().value, I = a, $b = b);
    }
    return fc();
  }
  __name(rc, "rc");
  function sc(a) {
    oc(a);
    a = kc(a);
    if (!ic(a)) {
      bc(a);
      var b = I, c = $b;
      if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
      var d = c * 4294967296 + (b >>> 0);
      b = Number.isSafeInteger(d) ? d : dc(b, c);
      a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b;
    }
    return a;
  }
  __name(sc, "sc");
  function tc(a) {
    oc(a);
    a = kc(a);
    ic(a) ? a = String(a) : (bc(a), a = fc());
    return a;
  }
  __name(tc, "tc");
  function uc(a) {
    var b = typeof a;
    if (a == null) return a;
    if (b === "bigint") return Sb(hc(64, a));
    if (oc(a)) return b === "string" ? (b = kc(Number(a)), ic(b) ? a = Sb(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = rb() ? Sb(hc(64, BigInt(a))) : Sb(rc(a)))) : a = ic(a) ? Sb(sc(a)) : Sb(
      tc(a)
    ), a;
  }
  __name(uc, "uc");
  function vc(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  __name(vc, "vc");
  function wc(a, b, c, d) {
    if (a != null && a[Ab] === Hb) return a;
    if (!Array.isArray(a)) return c ? d & 2 ? b[vb] || (b[vb] = xc(b)) : new b() : void 0;
    c = a[G] | 0;
    d = c | d & 32 | d & 2;
    d !== c && H(a, d);
    return new b(a);
  }
  __name(wc, "wc");
  function xc(a) {
    a = new a();
    Gb(a.C);
    return a;
  }
  __name(xc, "xc");
  ;
  function yc(a) {
    return a;
  }
  __name(yc, "yc");
  ;
  function zc() {
  }
  __name(zc, "zc");
  function Ac(a, b) {
    for (var c in a) !isNaN(c) && b(a, +c, a[c]);
  }
  __name(Ac, "Ac");
  function Bc(a) {
    var b = new zc();
    Ac(a, function(c, d, e) {
      b[d] = Array.prototype.slice.call(e);
    });
    b.j = a.j;
    return b;
  }
  __name(Bc, "Bc");
  function Cc(a, b) {
    b < 100 || qb(yb, 1);
  }
  __name(Cc, "Cc");
  ;
  function Dc(a, b, c, d) {
    var e = d !== void 0;
    d = !!d;
    var f = Ra(xb), g;
    !e && sb && f && (g = a[f]) && Ac(g, Cc);
    f = [];
    var h = a.length;
    g = 4294967295;
    var k = false, l = !!(b & 64), m = l ? b & 128 ? 0 : -1 : void 0;
    if (!(b & 1)) {
      var r = h && a[h - 1];
      r != null && typeof r === "object" && r.constructor === Object ? (h--, g = h) : r = void 0;
      if (l && !(b & 128) && !e) {
        k = true;
        var t;
        g = ((t = Ec) != null ? t : yc)(g - m, m, a, r, void 0) + m;
      }
    }
    b = void 0;
    for (t = 0; t < h; t++) {
      var w = a[t];
      if (w != null && (w = c(w, d)) != null)
        if (l && t >= g) {
          var u = t - m, L = void 0;
          ((L = b) != null ? L : b = {})[u] = w;
        } else f[t] = w;
    }
    if (r)
      for (var E in r) h = r[E], h != null && (h = c(h, d)) != null && (t = +E, w = void 0, l && !Number.isNaN(t) && (w = t + m) < g ? f[w] = h : (t = void 0, ((t = b) != null ? t : b = {})[E] = h));
    b && (k ? f.push(b) : f[g] = b);
    e && Ra(xb) && (a = (c = Ra(xb)) ? a[c] : void 0) && a instanceof zc && (f[xb] = Bc(a));
    return f;
  }
  __name(Dc, "Dc");
  function Fc(a) {
    switch (typeof a) {
      case "number":
        return Number.isFinite(a) ? a : "" + a;
      case "bigint":
        return Zb(a) ? Number(a) : "" + a;
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (Array.isArray(a)) {
          var b = a[G] | 0;
          return a.length === 0 && b & 1 ? void 0 : Dc(a, b, Fc);
        }
        if (a != null && a[Ab] === Hb) return Gc(a);
        if (a instanceof kb) {
          b = a.j;
          if (b == null) a = "";
          else if (typeof b === "string") a = b;
          else {
            if (hb) {
              for (var c = "", d = 0, e = b.length - 10240; d < e; ) c += String.fromCharCode.apply(null, b.subarray(d, d += 10240));
              c += String.fromCharCode.apply(null, d ? b.subarray(d) : b);
              b = btoa(c);
            } else {
              c === void 0 && (c = 0);
              if (!fb) {
                fb = {};
                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                e = ["+/=", "+/", "-_=", "-_.", "-_"];
                for (var f = 0; f < 5; f++) {
                  var g = d.concat(e[f].split(""));
                  eb[f] = g;
                  for (var h = 0; h < g.length; h++) {
                    var k = g[h];
                    fb[k] === void 0 && (fb[k] = h);
                  }
                }
              }
              c = eb[c];
              d = Array(Math.floor(b.length / 3));
              e = c[64] || "";
              for (f = g = 0; g < b.length - 2; g += 3) {
                var l = b[g], m = b[g + 1];
                k = b[g + 2];
                h = c[l >> 2];
                l = c[(l & 3) << 4 | m >> 4];
                m = c[(m & 15) << 2 | k >> 6];
                k = c[k & 63];
                d[f++] = "" + h + l + m + k;
              }
              h = 0;
              k = e;
              switch (b.length - g) {
                case 2:
                  h = b[g + 1], k = c[(h & 15) << 2] || e;
                case 1:
                  b = b[g], d[f] = "" + c[b >> 2] + c[(b & 3) << 4 | h >> 4] + k + e;
              }
              b = d.join("");
            }
            a = a.j = b;
          }
          return a;
        }
        return;
    }
    return a;
  }
  __name(Fc, "Fc");
  var Hc = jb ? structuredClone : function(a) {
    return Dc(a, 0, Fc);
  }, Ec;
  function Gc(a) {
    a = a.C;
    return Dc(a, a[G] | 0, Fc);
  }
  __name(Gc, "Gc");
  ;
  function J(a, b, c) {
    return Ic(a, b, c, 2048);
  }
  __name(J, "J");
  function Ic(a, b, c, d) {
    d = d === void 0 ? 0 : d;
    if (a == null) {
      var e = 32;
      c ? (a = [c], e |= 128) : a = [];
      b && (e = e & -16760833 | (b & 1023) << 14);
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      e = a[G] | 0;
      if (Va && 1 & e) throw Error("rfarr");
      2048 & e && !(2 & e) && Jc();
      if (e & 256) throw Error("farr");
      if (e & 64) return (e | d) !== e && H(a, e | d), a;
      if (c && (e |= 128, c !== a[0])) throw Error("mid");
      a: {
        c = a;
        e |= 64;
        var f = c.length;
        if (f) {
          var g = f - 1, h = c[g];
          if (h != null && typeof h === "object" && h.constructor === Object) {
            b = e & 128 ? 0 : -1;
            g -= b;
            if (g >= 1024) throw Error("pvtlmt");
            for (var k in h) f = +k, f < g && (c[f + b] = h[k], delete h[k]);
            e = e & -16760833 | (g & 1023) << 14;
            break a;
          }
        }
        if (b) {
          k = Math.max(b, f - (e & 128 ? 0 : -1));
          if (k > 1024) throw Error("spvt");
          e = e & -16760833 | (k & 1023) << 14;
        }
      }
    }
    H(a, e | 64 | d);
    return a;
  }
  __name(Ic, "Ic");
  function Jc() {
    if (Va) throw Error("carr");
    qb(zb, 5);
  }
  __name(Jc, "Jc");
  ;
  function Kc(a, b) {
    if (typeof a !== "object") return a;
    if (Array.isArray(a)) {
      var c = a[G] | 0;
      a.length === 0 && c & 1 ? a = void 0 : c & 2 || (!b || 4096 & c || 16 & c ? a = Lc(a, c, false, b && !(c & 16)) : (Fb(a, 34), c & 4 && Object.freeze(a)));
      return a;
    }
    if (a != null && a[Ab] === Hb) return b = a.C, c = b[G] | 0, Ib(a, c) ? a : Mc(a, b, c) ? Nc(a, b) : Lc(
      b,
      c
    );
    if (a instanceof kb) return a;
  }
  __name(Kc, "Kc");
  function Nc(a, b, c) {
    a = new a.constructor(b);
    c && (a.j = Jb);
    a.l = Jb;
    return a;
  }
  __name(Nc, "Nc");
  function Lc(a, b, c, d) {
    d != null || (d = !!(34 & b));
    a = Dc(a, b, Kc, d);
    d = 32;
    c && (d |= 2);
    b = b & 16769217 | d;
    H(a, b);
    return a;
  }
  __name(Lc, "Lc");
  function Oc(a) {
    var b = a.C, c = b[G] | 0;
    return Ib(a, c) ? Mc(a, b, c) ? Nc(a, b, true) : new a.constructor(Lc(b, c, false)) : a;
  }
  __name(Oc, "Oc");
  function Pc(a) {
    if (a.j !== Jb) return false;
    var b = a.C;
    b = Lc(b, b[G] | 0);
    Fb(b, 2048);
    a.C = b;
    a.j = void 0;
    a.l = void 0;
    return true;
  }
  __name(Pc, "Pc");
  function Qc(a) {
    if (!Pc(a) && Ib(a, a.C[G] | 0)) throw Error();
  }
  __name(Qc, "Qc");
  function Rc(a, b) {
    b === void 0 && (b = a[G] | 0);
    b & 32 && !(b & 4096) && H(a, b | 4096);
  }
  __name(Rc, "Rc");
  function Mc(a, b, c) {
    return c & 2 ? true : c & 32 && !(c & 4096) ? (H(b, c | 2), a.j = Jb, true) : false;
  }
  __name(Mc, "Mc");
  ;
  var Sc = Sb(0), Tc = {};
  function K(a, b, c, d, e) {
    Object.isExtensible(a);
    b = Uc(a.C, b, c, e);
    if (b !== null || d && a.l !== Jb) return b;
  }
  __name(K, "K");
  function Uc(a, b, c, d) {
    if (b === -1) return null;
    var e = b + (c ? 0 : -1), f = a.length - 1;
    if (!(f < 1 + (c ? 0 : -1))) {
      if (e >= f) {
        var g = a[f];
        if (g != null && typeof g === "object" && g.constructor === Object) {
          c = g[b];
          var h = true;
        } else if (e === f) c = g;
        else return;
      } else c = a[e];
      if (d && c != null) {
        d = d(c);
        if (d == null) return d;
        if (!Object.is(d, c)) return h ? g[b] = d : a[e] = d, d;
      }
      return c;
    }
  }
  __name(Uc, "Uc");
  function Vc(a, b, c) {
    Qc(a);
    var d = a.C;
    Wc(d, d[G] | 0, b, c);
    return a;
  }
  __name(Vc, "Vc");
  function Wc(a, b, c, d) {
    var e = c + -1, f = a.length - 1;
    if (f >= 0 && e >= f) {
      var g = a[f];
      if (g != null && typeof g === "object" && g.constructor === Object) return g[c] = d, b;
    }
    if (e <= f) return a[e] = d, b;
    if (d !== void 0) {
      var h;
      f = ((h = b) != null ? h : b = a[G] | 0) >> 14 & 1023 || 536870912;
      c >= f ? d != null && (e = {}, a[f + -1] = (e[c] = d, e)) : a[e] = d;
    }
    return b;
  }
  __name(Wc, "Wc");
  function Xc(a, b, c, d, e, f, g, h) {
    var k = b;
    f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? Yc(b) || (b |= !a.length || g && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256, b !== k && H(a, b), Object.freeze(a)) : (f === 2 && Yc(b) && (a = Array.prototype.slice.call(a), k = 0, b = Zc(b, d), d = Wc(c, d, e, a)), Yc(b) || (h || (b |= 16), b !== k && H(a, b)));
    2 & b || !(4096 & b || 16 & b) || Rc(c, d);
    return a;
  }
  __name(Xc, "Xc");
  function $c(a, b) {
    a = Uc(a, b);
    return Array.isArray(a) ? a : Db;
  }
  __name($c, "$c");
  function ad(a, b) {
    2 & b && (a |= 2);
    return a | 1;
  }
  __name(ad, "ad");
  function Yc(a) {
    return !!(2 & a) && !!(4 & a) || !!(256 & a);
  }
  __name(Yc, "Yc");
  function bd(a) {
    return a == null ? a : typeof a === "string" ? a ? new kb(a, ib) : lb() : a.constructor === kb ? a : gb && a != null && a instanceof Uint8Array ? a.length ? new kb(new Uint8Array(a), ib) : lb() : void 0;
  }
  __name(bd, "bd");
  function cd(a, b) {
    Qc(a);
    var c = a.C;
    dd(c, c[G] | 0, b, 0);
    return a;
  }
  __name(cd, "cd");
  function ed(a, b, c) {
    return fd(a, b) === c ? c : -1;
  }
  __name(ed, "ed");
  function fd(a, b) {
    a = a.C;
    return gd(hd(a), a, void 0, b);
  }
  __name(fd, "fd");
  function hd(a) {
    if (sb) {
      var b;
      return (b = a[wb]) != null ? b : a[wb] = /* @__PURE__ */ new Map();
    }
    if (wb in a) return a[wb];
    b = /* @__PURE__ */ new Map();
    Object.defineProperty(a, wb, {
      value: b
    });
    return b;
  }
  __name(hd, "hd");
  function dd(a, b, c, d) {
    d === 0 || c.includes(d);
    var e = hd(a), f = gd(e, a, b, c);
    f !== d && (f && Wc(a, b, f), e.set(c, d));
  }
  __name(dd, "dd");
  function gd(a, b, c, d) {
    var e = a.get(d);
    if (e != null) return e;
    for (var f = e = 0; f < d.length; f++) {
      var g = d[f];
      Uc(b, g) != null && (e !== 0 && (c = Wc(b, c, e)), e = g);
    }
    a.set(d, e);
    return e;
  }
  __name(gd, "gd");
  function id(a, b, c) {
    Qc(a);
    a = a.C;
    var d = a[G] | 0, e = Uc(a, c), f = void 0 === Lb;
    b = wc(e, b, !f, d);
    if (!f || b) return b = Oc(b), e !== b && (d = Wc(a, d, c, b), Rc(a, d)), b;
  }
  __name(id, "id");
  function jd(a, b, c, d) {
    var e = false;
    d = Uc(a, d, void 0, function(f) {
      var g = wc(f, c, false, b);
      e = g !== f && g != null;
      return g;
    });
    if (d != null) return e && !Ib(d) && Rc(a, b), d;
  }
  __name(jd, "jd");
  function kd(a, b, c) {
    a = a.C;
    return jd(a, a[G] | 0, b, c) || b[vb] || (b[vb] = xc(b));
  }
  __name(kd, "kd");
  function ld(a, b, c) {
    var d = a.C, e = d[G] | 0;
    b = jd(d, e, b, c);
    if (b == null) return b;
    e = d[G] | 0;
    if (!Ib(a, e)) {
      var f = Oc(b);
      f !== b && (Pc(a) && (d = a.C, e = d[G] | 0), b = f, e = Wc(d, e, c, b), Rc(d, e));
    }
    return b;
  }
  __name(ld, "ld");
  function md(a, b, c) {
    var d = void 0 === Kb ? 2 : 4, e = a.C, f = e;
    e = e[G] | 0;
    var g = Ib(a, e), h = g ? 1 : d;
    d = h === 3;
    var k = !g;
    (h === 2 || k) && Pc(a) && (f = a.C, e = f[G] | 0);
    a = $c(f, c);
    var l = a === Db ? 7 : a[G] | 0, m = ad(l, e);
    if (g = !(4 & m)) {
      var r = a, t = e, w = !!(2 & m);
      w && (t |= 2);
      for (var u = !w, L = true, E = 0, ka = 0; E < r.length; E++) {
        var R = wc(r[E], b, false, t);
        if (R instanceof b) {
          if (!w) {
            var Ja = Ib(R);
            u && (u = !Ja);
            L && (L = Ja);
          }
          r[ka++] = R;
        }
      }
      ka < E && (r.length = ka);
      m |= 4;
      m = L ? m & -4097 : m | 4096;
      m = u ? m | 8 : m & -9;
    }
    m !== l && (H(a, m), 2 & m && Object.freeze(a));
    if (k && !(8 & m || !a.length && (h === 1 || (h !== 4 ? 0 : 2 & m || !(16 & m) && 32 & e)))) {
      Yc(m) && (a = Array.prototype.slice.call(a), m = Zc(m, e), e = Wc(f, e, c, a));
      b = a;
      k = m;
      for (l = 0; l < b.length; l++) r = b[l], m = Oc(r), r !== m && (b[l] = m);
      k |= 8;
      m = k = b.length ? k | 4096 : k & -4097;
      H(a, m);
    }
    return a = Xc(a, m, f, e, c, h, g, d);
  }
  __name(md, "md");
  function nd(a, b, c, d) {
    if (d != null) {
      if (!(d instanceof b)) throw Error("Expected instanceof " + mc(b) + " but got " + (d && mc(d.constructor)));
    } else d = void 0;
    Vc(a, c, d);
    d && !Ib(d) && Rc(a.C);
    return a;
  }
  __name(nd, "nd");
  function Zc(a, b) {
    return a = (2 & b ? a | 2 : a & -3) & -273;
  }
  __name(Zc, "Zc");
  function od(a, b) {
    var c = c === void 0 ? false : c;
    a = K(a, b);
    a = a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0;
    return a != null ? a : c;
  }
  __name(od, "od");
  function pd(a, b, c) {
    c = c === void 0 ? 0 : c;
    var d;
    return (d = qc(K(a, b))) != null ? d : c;
  }
  __name(pd, "pd");
  function qd(a, b) {
    var c = c === void 0 ? Sc : c;
    a = K(a, b, void 0, void 0, uc);
    return a != null ? a : c;
  }
  __name(qd, "qd");
  function rd(a, b) {
    var c = c === void 0 ? "" : c;
    var d;
    return (d = vc(K(a, b))) != null ? d : c;
  }
  __name(rd, "rd");
  function sd(a, b) {
    var c = c === void 0 ? 0 : c;
    var d;
    return (d = pc(K(a, b))) != null ? d : c;
  }
  __name(sd, "sd");
  function td(a, b) {
    return vc(K(a, b, void 0, Tc));
  }
  __name(td, "td");
  function ud(a, b, c) {
    if (c != null && typeof c !== "string") throw Error();
    return Vc(a, b, c);
  }
  __name(ud, "ud");
  function vd(a, b, c) {
    if (c != null) {
      if (!jc(c)) throw a = Error("enum"), nb(a, "severity", "warning"), a;
      c |= 0;
    }
    return Vc(a, b, c);
  }
  __name(vd, "vd");
  ;
  function M(a, b, c) {
    this.C = J(a, b, c);
  }
  __name(M, "M");
  M.prototype.toJSON = function() {
    return Gc(this);
  };
  function wd(a, b) {
    if (b == null || b == "") return new a();
    b = JSON.parse(b);
    if (!Array.isArray(b)) throw Error("dnarr");
    Fb(b, 32);
    return new a(b);
  }
  __name(wd, "wd");
  M.prototype.clone = function() {
    var a = this.C, b = a[G] | 0;
    return Mc(this, a, b) ? Nc(this, a, true) : new this.constructor(Lc(a, b, false));
  };
  function xd() {
    var a = A;
    a = a === void 0 ? window : a;
    var b = new yd(zd("K1cgmc", a));
    a = Ad;
    var c = new Ad();
    b = Bd(b);
    a = b === null ? c : wd(a, "[" + b.substring(4));
    c = a.C;
    b = c[G] | 0;
    return Ib(a, b) ? a : Mc(a, c, b) ? Nc(a, c) : new a.constructor(Lc(c, b, true));
  }
  __name(xd, "xd");
  M.prototype[Ab] = Hb;
  M.prototype.toString = function() {
    return this.C.toString();
  };
  function Cd(a, b) {
    if (b == null) b = a.constructor, b = b[vb] || (b[vb] = xc(b));
    else {
      a = a.constructor;
      if (!Array.isArray(b)) throw Error();
      if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error();
      b = new a(Gb(b));
    }
    return b;
  }
  __name(Cd, "Cd");
  ;
  function Dd(a) {
    return function(b) {
      return wd(a, b);
    };
  }
  __name(Dd, "Dd");
  ;
  function Ed(a) {
    this.C = J(a);
  }
  __name(Ed, "Ed");
  x(Ed, M);
  Ed.prototype.getTypeName = function() {
    return rd(this, 1).split("/").pop();
  };
  var Fd = (function(a) {
    return Mb(function(b) {
      return b instanceof a && !Ib(b);
    });
  })(Ed);
  function Gd(a) {
    var b = 2;
    b = b === void 0 ? 2 : b;
    this.key = a;
    this.defaultValue = false;
    this.phase = b;
    this.flagNameForDebugging = void 0;
  }
  __name(Gd, "Gd");
  Gd.prototype.ctor = function(a) {
    return typeof a === "boolean" ? a : this.defaultValue;
  };
  function Hd() {
    var a = Id('[["feature named `pageObserver` was not found","feature named `hover` was not found"]]'), b = Jd, c = 2;
    c = c === void 0 ? 2 : c;
    this.key = "45696263";
    this.defaultValue = a;
    this.j = b;
    this.phase = c;
    this.flagNameForDebugging = void 0;
  }
  __name(Hd, "Hd");
  Hd.prototype.ctor = function(a) {
    if (typeof a === "string" && a) return wd(this.j, a);
    if (!Fd(a)) return this.defaultValue.clone();
    var b;
    try {
      var c, d = this.j, e = (c = a.getTypeName()) != null ? c : "";
      if (rd(a, 1).split("/").pop() != e) var f = null;
      else {
        var g = typeof d === "function" ? d : d.constructor, h = a.C, k = h[G] | 0, l = Uc(h, 2);
        Pc(a) && (h = a.C, k = h[G] | 0);
        a = h;
        if (l != null && !(Array.isArray(l) || l != null && l[Ab] === Hb)) throw Error(
          "saw an invalid value of type '" + Ha(l) + "' in the Any.value field"
        );
        var m = wc(l, g, true, k);
        if (!(m instanceof g)) throw Error("incorrect type in any value: got " + m.constructor.displayName + ", expected " + g.displayName);
        (g = !!(2 & k)) || (m = Oc(m));
        l !== m && (Wc(a, k, 2, m), g || Rc(a));
        f = m;
      }
    } catch (r) {
      f = null;
    }
    return (b = f) != null ? b : this.defaultValue.clone();
  };
  function Kd(a) {
    this.C = J(a);
  }
  __name(Kd, "Kd");
  x(Kd, M);
  Kd.prototype.clearValue = function() {
    return cd(this, Ld);
  };
  var Ld = [1, 2];
  function Md(a) {
    this.C = J(a);
  }
  __name(Md, "Md");
  x(Md, M);
  Md.prototype.clearValue = function() {
    return cd(this, Nd);
  };
  var Nd = [2, 3, 4, 5, 6, 8];
  function Od(a) {
    this.C = J(a);
  }
  __name(Od, "Od");
  x(Od, M);
  Od.prototype.La = function() {
    var a = K(this, 3, void 0, void 0, bd);
    return a == null ? lb() : a;
  };
  function Pd(a) {
    this.C = J(a);
  }
  __name(Pd, "Pd");
  x(Pd, M);
  var Qd = Dd(Pd);
  function Jd(a) {
    this.C = J(a);
  }
  __name(Jd, "Jd");
  x(Jd, M);
  var Id = Dd(Jd);
  function Rd(a, b) {
    this.K = a | 0;
    this.H = b | 0;
  }
  __name(Rd, "Rd");
  function Sd(a) {
    return a.H * 4294967296 + (a.K >>> 0);
  }
  __name(Sd, "Sd");
  q = Rd.prototype;
  q.isSafeInteger = function() {
    var a = this.H >> 21;
    return a == 0 || a == -1 && !(this.K == 0 && this.H == -2097152);
  };
  q.toString = function(a) {
    a = a || 10;
    if (a < 2 || 36 < a) throw Error("radix out of range: " + a);
    if (this.isSafeInteger()) {
      var b = Sd(this);
      return a == 10 ? "" + b : b.toString(a);
    }
    b = 14 - (a >> 2);
    var c = Math.pow(a, b), d = N(c, c / 4294967296);
    c = this.div(d);
    var e = Math, f = e.abs;
    d = c.multiply(d);
    d = this.add(Td(d));
    e = f.call(e, Sd(d));
    f = a == 10 ? "" + e : e.toString(a);
    f.length < b && (f = "0000000000000".slice(f.length - b) + f);
    e = Sd(c);
    return (a == 10 ? e : e.toString(a)) + f;
  };
  function Ud(a) {
    return a.K == 0 && a.H == 0;
  }
  __name(Ud, "Ud");
  q.ya = function() {
    return this.K ^ this.H;
  };
  q.equals = function(a) {
    return a == null ? false : this.K == a.K && this.H == a.H;
  };
  q.compare = function(a) {
    return this.H == a.H ? this.K == a.K ? 0 : this.K >>> 0 > a.K >>> 0 ? 1 : -1 : this.H > a.H ? 1 : -1;
  };
  function Td(a) {
    var b = ~a.K + 1 | 0;
    return N(b, ~a.H + !b | 0);
  }
  __name(Td, "Td");
  q.add = function(a) {
    var b = this.H >>> 16, c = this.H & 65535, d = this.K >>> 16, e = a.H >>> 16, f = a.H & 65535, g = a.K >>> 16;
    a = (this.K & 65535) + (a.K & 65535);
    g = (a >>> 16) + (d + g);
    d = g >>> 16;
    d += c + f;
    return N((g & 65535) << 16 | a & 65535, ((d >>> 16) + (b + e) & 65535) << 16 | d & 65535);
  };
  q.multiply = function(a) {
    if (Ud(this)) return this;
    if (Ud(a)) return a;
    var b = this.H >>> 16, c = this.H & 65535, d = this.K >>> 16, e = this.K & 65535, f = a.H >>> 16, g = a.H & 65535, h = a.K >>> 16;
    a = a.K & 65535;
    var k = e * a;
    var l = (k >>> 16) + d * a;
    var m = l >>> 16;
    l = (l & 65535) + e * h;
    m += l >>> 16;
    m += c * a;
    var r = m >>> 16;
    m = (m & 65535) + d * h;
    r += m >>> 16;
    m = (m & 65535) + e * g;
    r = r + (m >>> 16) + (b * a + c * h + d * g + e * f) & 65535;
    return N((l & 65535) << 16 | k & 65535, r << 16 | m & 65535);
  };
  q.div = function(a) {
    if (Ud(a)) throw Error("division by zero");
    if (this.H < 0) {
      if (this.equals(Vd)) {
        if (a.equals(Wd) || a.equals(Xd)) return Vd;
        if (a.equals(Vd)) return Wd;
        var b = this.H;
        b = N(this.K >>> 1 | b << 31, b >> 1);
        b = b.div(a).shiftLeft(1);
        if (b.equals(Yd)) return a.H < 0 ? Wd : Xd;
        var c = a.multiply(b);
        c = this.add(Td(c));
        return b.add(c.div(a));
      }
      return a.H < 0 ? Td(this).div(Td(a)) : Td(Td(this).div(a));
    }
    if (Ud(this)) return Yd;
    if (a.H < 0) return a.equals(Vd) ? Yd : Td(this.div(Td(a)));
    b = Yd;
    for (c = this; c.compare(a) >= 0; ) {
      var d = Math.max(1, Math.floor(Sd(c) / Sd(a))), e = Math.ceil(Math.log(d) / Math.LN2);
      e = e <= 48 ? 1 : Math.pow(2, e - 48);
      for (var f = Zd(d), g = f.multiply(a); g.H < 0 || g.compare(c) > 0; ) d -= e, f = Zd(d), g = f.multiply(
        a
      );
      Ud(f) && (f = Wd);
      b = b.add(f);
      c = c.add(Td(g));
    }
    return b;
  };
  q.and = function(a) {
    return N(this.K & a.K, this.H & a.H);
  };
  q.or = function(a) {
    return N(this.K | a.K, this.H | a.H);
  };
  q.xor = function(a) {
    return N(this.K ^ a.K, this.H ^ a.H);
  };
  q.shiftLeft = function(a) {
    a &= 63;
    if (a == 0) return this;
    var b = this.K;
    return a < 32 ? N(b << a, this.H << a | b >>> 32 - a) : N(0, b << a - 32);
  };
  function Zd(a) {
    return a > 0 ? a >= 9223372036854776e3 ? $d : new Rd(a, a / 4294967296) : a < 0 ? a <= -9223372036854776e3 ? Vd : Td(new Rd(-a, -a / 4294967296)) : Yd;
  }
  __name(Zd, "Zd");
  function N(a, b) {
    return new Rd(a, b);
  }
  __name(N, "N");
  var Yd = N(0, 0), Wd = N(1, 0), Xd = N(-1, -1), $d = N(4294967295, 2147483647), Vd = N(0, 2147483648);
  function zd(a, b) {
    b = b === void 0 ? window : b;
    b = b === void 0 ? window : b;
    return (b = b.WIZ_global_data) && a in b ? b[a] : null;
  }
  __name(zd, "zd");
  ;
  var ae;
  function be() {
    return ae = ae || new ce();
  }
  __name(be, "be");
  function ce() {
    var a = null;
    var b = zd("TSDtV", window);
    if (b = typeof b !== "string" ? null : b) a = Qd("[" + b.substring(4)), a = md(a, Od, 1)[0];
    if (a) {
      b = y(md(a, Md, 2));
      var c = b.next(), d;
      try {
        for (; !c.done; c = b.next()) {
          var e = c.value, f = e.C;
          if (jd(f, f[G] | 0, Ed, ed(e, Nd, 6)) !== void 0) throw Error();
        }
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
    }
    var g;
    if (a) {
      d = {};
      e = y(md(a, Md, 2));
      f = e.next();
      try {
        for (; !f.done; f = e.next()) {
          var h = f.value, k = qd(h, 1).toString();
          switch (fd(h, Nd)) {
            case 3:
              d[k] = od(h, ed(h, Nd, 3));
              break;
            case 2:
              var l = qd(h, ed(h, Nd, 2));
              Tb(l);
              Zb(l);
              var m = Zb(l) ? Number(l) : String(l);
              d[k] = m;
              break;
            case 4:
              b = void 0;
              c = h;
              var r = ed(h, Nd, 4), t = void 0;
              t = t === void 0 ? 0 : t;
              var w = (b = K(c, r, void 0, void 0, lc)) != null ? b : t;
              d[k] = w;
              break;
            case 5:
              d[k] = rd(h, ed(h, Nd, 5));
              break;
            case 6:
              d[k] = ld(h, Ed, ed(h, Nd, 6));
              break;
            case 8:
              var u = kd(h, Kd, ed(h, Nd, 8));
              switch (fd(u, Ld)) {
                case 1:
                  d[k] = rd(u, ed(u, Ld, 1));
                  break;
                default:
                  throw Error("case " + fd(u, Ld));
              }
              break;
            default:
              throw Error("case " + fd(h, Nd));
          }
        }
      } finally {
        f && !f.done && (g = e.return) && g.call(e);
      }
      g = d;
    } else g = {};
    this.j = g;
    this.l = a ? a.La() : null;
  }
  __name(ce, "ce");
  function de(a, b) {
    return b.phase !== 1 && b.key in a.j ? b.ctor(a.j[b.key]) : b.defaultValue;
  }
  __name(de, "de");
  ce.prototype.La = p("l");
  function ee(a) {
    this.C = J(a);
  }
  __name(ee, "ee");
  x(ee, M);
  var fe = new Hd();
  var ge = new Gd("45723104");
  var he = new Gd("45765314");
  function ie(a) {
    this.C = J(a);
  }
  __name(ie, "ie");
  x(ie, M);
  var je = /* @__PURE__ */ (function(a) {
    return function() {
      return a[vb] || (a[vb] = xc(a));
    };
  })(ie);
  /* @__PURE__ */ Object.create(null);
  function O() {
  }
  __name(O, "O");
  O.prototype.equals = function(a) {
    return ke(this, a);
  };
  O.prototype.ya = function() {
    return this.A || (Object.defineProperties(this, {
      A: {
        value: le = le + 1 | 0,
        enumerable: false
      }
    }), this.A);
  };
  O.prototype.toString = function() {
    return P(me(Q(ne(this)))) + "@" + P((this.ya() >>> 0).toString(16));
  };
  O.prototype.D = ["java.lang.Object", 0];
  function oe() {
  }
  __name(oe, "oe");
  x(oe, O);
  function S(a, b) {
    a.j = b;
    pe(b, a);
  }
  __name(S, "S");
  function T(a) {
    qe(a.j) && (Error.captureStackTrace ? Error.captureStackTrace(U(a.j, qe, re)) : U(a.j, qe, re).stack = Error().stack);
  }
  __name(T, "T");
  oe.prototype.toString = function() {
    var a = me(Q(ne(this))), b = this.l;
    return b == null ? a : P(a) + ": " + P(b);
  };
  function se(a) {
    if (a != null) {
      var b = a.Za;
      if (b != null) return b;
    }
    a instanceof TypeError ? b = te() : (b = new ue(), T(b), S(b, Error(b)));
    b.l = a == null ? "null" : a.toString();
    S(b, a);
    return b;
  }
  __name(se, "se");
  function ve(a) {
    return a instanceof oe;
  }
  __name(ve, "ve");
  oe.prototype.D = ["java.lang.Throwable", 0];
  function we() {
  }
  __name(we, "we");
  x(we, oe);
  we.prototype.D = ["java.lang.Exception", 0];
  function xe() {
  }
  __name(xe, "xe");
  x(xe, we);
  xe.prototype.D = ["java.lang.RuntimeException", 0];
  function ye() {
  }
  __name(ye, "ye");
  x(ye, xe);
  ye.prototype.D = ["java.lang.IndexOutOfBoundsException", 0];
  var ze;
  function Ae() {
    Ae = n();
    for (var a = Be(), b = 0; b < 256; b = b + 1 | 0) Ce(a, b, De(b - 128 | 0));
    ze = a;
  }
  __name(Ae, "Ae");
  ;
  function Ee() {
  }
  __name(Ee, "Ee");
  x(Ee, xe);
  Ee.prototype.D = ["java.lang.ArithmeticException", 0];
  function Fe() {
  }
  __name(Fe, "Fe");
  x(Fe, xe);
  Fe.prototype.D = ["java.lang.ArrayStoreException", 0];
  function Ge() {
  }
  __name(Ge, "Ge");
  x(Ge, xe);
  Ge.prototype.D = ["java.lang.ClassCastException", 0];
  function He() {
  }
  __name(He, "He");
  x(He, xe);
  He.prototype.D = ["java.lang.IllegalArgumentException", 0];
  function Ie() {
  }
  __name(Ie, "Ie");
  x(Ie, xe);
  function Je(a) {
    var b = new Ie();
    b.l = a;
    T(b);
    S(b, Error(b));
    return b;
  }
  __name(Je, "Je");
  Ie.prototype.D = ["java.lang.IllegalStateException", 0];
  function ue() {
  }
  __name(ue, "ue");
  x(ue, xe);
  ue.prototype.D = ["java.lang.JsException", 0];
  function Ke() {
  }
  __name(Ke, "Ke");
  x(Ke, ue);
  function te() {
    var a = new Ke();
    T(a);
    S(a, new TypeError(a));
    return a;
  }
  __name(te, "te");
  Ke.prototype.D = ["java.lang.NullPointerException", 0];
  function Le() {
  }
  __name(Le, "Le");
  x(Le, ye);
  Le.prototype.D = ["java.lang.StringIndexOutOfBoundsException", 0];
  function Me() {
  }
  __name(Me, "Me");
  var Ne;
  x(Me, O);
  Me.prototype.D = ["java.lang.Number", 0];
  function Oe() {
  }
  __name(Oe, "Oe");
  x(Oe, Me);
  Oe.prototype.D = ["java.lang.Double", 0];
  function Pe(a) {
    return Zd(a);
  }
  __name(Pe, "Pe");
  function Qe(a) {
    if (!isFinite(a)) throw a = new Ee(), T(a), S(a, Error(a)), a.j;
    return a | 0;
  }
  __name(Qe, "Qe");
  ;
  function Re() {
  }
  __name(Re, "Re");
  x(Re, O);
  Re.prototype.D = ["java.lang.Boolean", 0];
  function U(a, b, c) {
    if (a != null && !b(a)) throw a = P(me(Se(a))) + " cannot be cast to " + P(me(Q(c))), b = new Ge(), b.l = a, T(b), S(b, Error(b)), b.j;
    return a;
  }
  __name(U, "U");
  ;
  function ne(a) {
    return a.constructor;
  }
  __name(ne, "ne");
  function Te(a, b, c) {
    if (Object.prototype.hasOwnProperty.call(a.prototype, b)) return a.prototype[b];
    c = c();
    return a.prototype[b] = c;
  }
  __name(Te, "Te");
  ;
  function ke(a, b) {
    return Object.is(a, b) || a == null && b == null;
  }
  __name(ke, "ke");
  ;
  var le = 0;
  function Se(a) {
    switch (V(typeof a)) {
      case "number":
        return Q(Oe);
      case "boolean":
        return Q(Re);
      case "string":
        return Q(Ue);
      case "function":
        return Q(Ve);
    }
    if (a instanceof Rd) a = Q(We);
    else if (a instanceof O) a = Q(ne(a));
    else if (Array.isArray(a)) a = (a = a.ra) ? Q(a.ba, a.aa) : Q(O, 1);
    else if (a != null) a = Q(Xe);
    else throw new TypeError("null.getClass()");
    return a;
  }
  __name(Se, "Se");
  ;
  function Ve() {
  }
  __name(Ve, "Ve");
  Ve.prototype.D = ["<native function>", 1];
  function Xe() {
  }
  __name(Xe, "Xe");
  x(Xe, O);
  Xe.prototype.D = ["<native object>", 0];
  function Ye() {
    this.X = 0;
  }
  __name(Ye, "Ye");
  x(Ye, Me);
  function Ze(a) {
    a > -129 && a < 128 ? (Ae(), a = ze[a + 128 | 0]) : a = De(a);
    return a;
  }
  __name(Ze, "Ze");
  function De(a) {
    var b = new Ye();
    b.X = a;
    return b;
  }
  __name(De, "De");
  Ye.prototype.equals = function(a) {
    return $e(a) && U(a, $e, Ye).X == this.X;
  };
  Ye.prototype.ya = p("X");
  Ye.prototype.toString = function() {
    return "" + this.X;
  };
  function $e(a) {
    return a instanceof Ye;
  }
  __name($e, "$e");
  Ye.prototype.D = ["java.lang.Integer", 0];
  function We() {
  }
  __name(We, "We");
  x(We, Me);
  We.prototype.D = ["java.lang.Long", 0];
  function af() {
  }
  __name(af, "af");
  x(af, He);
  af.prototype.D = ["java.lang.NumberFormatException", 0];
  function V(a) {
    if (a == null) throw te().j;
    return a;
  }
  __name(V, "V");
  ;
  function Be() {
    var a = [256];
    return bf(a, {
      ba: Ye,
      oa: $e,
      aa: a.length
    });
  }
  __name(Be, "Be");
  function bf(a, b) {
    var c = a[0];
    if (c == null) return null;
    var d = new globalThis.Array(c);
    b && (d.ra = b);
    if (a.length > 1) {
      a = a.slice(1);
      b = b && {
        ba: b.ba,
        oa: b.oa,
        aa: b.aa - 1
      };
      for (var e = 0; e < c; e++) d[e] = bf(a, b);
    } else if (b && (a = b.ba.Cb, a !== void 0))
      for (b = 0; b < c; b++) d[b] = a;
    return d;
  }
  __name(bf, "bf");
  function Ce(a, b, c) {
    var d;
    if (!(d = c == null)) a: {
      var e = a.ra;
      if (e) {
        if (e.aa > 1) {
          d = e.ba;
          var f = e.oa;
          e = e.aa - 1;
          if (c != null && Array.isArray(c)) {
            var g = c.ra || {
              ba: O,
              aa: 1
            }, h = g.aa;
            h == e ? (e = g.ba, d = e === d ? true : d && d.prototype.Qa || e && e.prototype.Qa ? false : f(e.prototype)) : d = h > e ? O == d : false;
          } else d = false;
          if (!d) {
            d = false;
            break a;
          }
        } else if (c != null && !e.oa(c)) {
          d = false;
          break a;
        }
      }
      d = true;
    }
    if (!d) throw a = new Fe(), T(a), S(a, Error(a)), a.j;
    a[b] = c;
  }
  __name(Ce, "Ce");
  ;
  function Ue() {
  }
  __name(Ue, "Ue");
  x(Ue, O);
  function P(a) {
    return a == null ? "null" : a.toString();
  }
  __name(P, "P");
  function cf(a) {
    if (!(a >= 0)) throw a = new He(), T(a), S(a, Error(a)), a.j;
    return "0".repeat(a);
  }
  __name(cf, "cf");
  Ue.prototype.D = ["java.lang.String", 0];
  function df(a, b) {
    this.j = a;
    this.l = b;
  }
  __name(df, "df");
  x(df, O);
  function Q(a, b) {
    var c = b || 0;
    return Te(a, "$$class/" + c, function() {
      return new df(a, c);
    });
  }
  __name(Q, "Q");
  function me(a) {
    return a.l != 0 ? P(ef("[", a.l)) + P(a.j.prototype.D[1] == 3 ? a.j.prototype.D[2] : "L" + P(a.j.prototype.D[0]) + ";") : a.j.prototype.D[0];
  }
  __name(me, "me");
  function ff(a, b) {
    b = a.lastIndexOf(b) + 1 | 0;
    var c = a.length + 1 | 0;
    if (b < 0 || b >= c) throw a = new Le(), a.l = "Index: " + b + ", Size: " + c, T(a), S(a, Error(a)), a.j;
    return a.substr(b);
  }
  __name(ff, "ff");
  df.prototype.toString = function() {
    return String(this.l == 0 && this.j.prototype.D[1] == 1 ? "interface " : this.l == 0 && this.j.prototype.D[1] == 3 ? "" : "class ") + P(me(this));
  };
  function ef(a, b) {
    for (var c = "", d = 0; d < b; d = d + 1 | 0) c = P(c) + P(a);
    return c;
  }
  __name(ef, "ef");
  df.prototype.D = ["java.lang.Class", 0];
  function re() {
  }
  __name(re, "re");
  function qe(a) {
    return a instanceof Error;
  }
  __name(qe, "qe");
  re.prototype.D = ["Error", 0];
  function pe(a, b) {
    if (a instanceof Object) try {
      a.Za = b, Object.defineProperties(a, {
        cause: {
          get: /* @__PURE__ */ __name(function() {
            return b.o && b.o.j;
          }, "get")
        }
      });
    } catch (c) {
    }
  }
  __name(pe, "pe");
  ;
  function gf(a, b) {
    this.o = b;
    this.l = a;
    T(this);
    S(this, Error(this));
  }
  __name(gf, "gf");
  x(gf, xe);
  fa.Object.defineProperties(gf.prototype, {
    error: {
      configurable: true,
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        var a = Error(), b = this.j;
        a.fileName = b.fileName;
        a.lineNumber = b.lineNumber;
        a.columnNumber = b.columnNumber;
        a.message = b.message;
        a.name = b.name;
        a.stack = b.stack;
        a.toSource = b.toSource;
        a.cause = b.cause;
        for (var c in b) c.indexOf("__java$") != 0 && (a[c] = b[c]);
        return a;
      }, "get")
    }
  });
  gf.prototype.getMessage = p("l");
  gf.prototype.D = ["com.google.apps.docs.xplat.base.XplatException", 0];
  function hf() {
  }
  __name(hf, "hf");
  function jf(a) {
    return a instanceof Error;
  }
  __name(jf, "jf");
  hf.prototype.D = ["Error", 0];
  function kf() {
    var a = a == null ? function(c) {
      return Math.max(Math.min(Math.floor(Math.random() * c), 2147483647), -2147483648) | 0;
    } : a;
    var b = (a(2147483647) >>> 0).toString(16);
    b = P(cf(Math.max(0, 8 - b.length | 0))) + P(b);
    a = (a(2147483647) >>> 0).toString(16);
    return P(a) + P(b);
  }
  __name(kf, "kf");
  ;
  function lf() {
  }
  __name(lf, "lf");
  function mf(a) {
    return a instanceof Array;
  }
  __name(mf, "mf");
  lf.prototype.D = ["Array", 0];
  function nf() {
  }
  __name(nf, "nf");
  function of(a) {
    return a instanceof Object;
  }
  __name(of, "of");
  nf.prototype.D = ["Object", 0];
  function pf() {
  }
  __name(pf, "pf");
  function qf(a) {
    return a instanceof Object;
  }
  __name(qf, "qf");
  pf.prototype.D = ["Object", 0];
  var rf = {
    bc: "build-label",
    Db: "buildLabel",
    Eb: "clientLog",
    Ib: "docId",
    dc: "mobile-app-version",
    rc: "severity",
    oc: "reportSeverity",
    wc: "severity-unprefixed",
    Ub: "isArrayPrototypeIntact",
    Vb: "isEditorElementAttached",
    Nb: "documentCharacterSet",
    Xb: "isModuleLoadFailure",
    nc: "reportName",
    cc: "locale",
    Gb: "createdOnServer",
    jc: "numUnsavedCommands",
    Hb: "cspViolationContext",
    mc: "relatedToBrowserExtension",
    yc: "workerError",
    Jb: "docosPostLimitExceeded",
    Kb: "docosPostLimitType",
    Lb: "docosReactionLimitExceeded",
    Mb: "docosReactionLimitType",
    lc: "origin",
    qc: "saveTakingTooLongOnClient",
    tc: "truncatedCommentNotificationsCount",
    uc: "truncatedCommentNotificationsFromPayload",
    hc: "nonfatalReason",
    xc: "usesModuleSetsServing",
    Yb: "isNestedDrawingsEnabled",
    Ob: "embeddedDrawingState"
  };
  function sf() {
    this.j = false;
  }
  __name(sf, "sf");
  var tf;
  x(sf, O);
  q = sf.prototype;
  q.dispose = function() {
    if (this.j) var a = null;
    else this.j = true, a = this.v == null ? tf : this.v, this.v = null;
    if (a != null) {
      this.sa();
      if (a.length != 0)
        for (var b = 0; b < a.length; b++) a[b].dispose();
      a = Q(ne(this));
      ff(ff(P(a.j.prototype.D[0]) + P(ef("[]", a.l)), "."), "$");
    }
  };
  q.na = p("j");
  q.sa = n();
  q.toString = function() {
    return O.prototype.toString.call(this) || "";
  };
  function uf() {
    uf = n();
    tf = U([], mf, lf);
  }
  __name(uf, "uf");
  q.D = ["com.google.apps.xplat.disposable.Disposable", 0];
  function vf(a) {
    if (a == null) return a = new oe(), T(a), S(a, Error(a)), a;
    if (ve(a)) return U(a, ve, oe);
    if (jf(a)) return a = U(a, jf, hf), se(a);
    a = new He();
    a.l = "Unsupported type cannot be used to create a Throwable.";
    T(a);
    S(a, Error(a));
    throw a.j;
  }
  __name(vf, "vf");
  ;
  var wf = globalThis.trustedTypes, xf;
  function zf() {
    var a = null;
    if (!wf) return a;
    try {
      var b = aa();
      a = wf.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b
      });
    } catch (c) {
    }
    return a;
  }
  __name(zf, "zf");
  ;
  function Af(a) {
    this.j = a;
  }
  __name(Af, "Af");
  Af.prototype.toString = function() {
    return this.j + "";
  };
  function Bf(a, b) {
    if (b instanceof Af) b = b.j;
    else throw Error("");
    a.src = b.toString();
  }
  __name(Bf, "Bf");
  ;
  function Cf(a) {
    var b = A.onerror;
    A.onerror = function(c, d, e, f, g) {
      b && b(c, d, e, f, g);
      a({
        message: c,
        fileName: d,
        line: e,
        lineNumber: e,
        Ac: f,
        error: g
      });
      return true;
    };
  }
  __name(Cf, "Cf");
  function Df(a) {
    var b = Ga("window.location.href");
    a == null && (a = 'Unknown Error of type "null/undefined"');
    if (typeof a === "string") return {
      message: a,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: b,
      stack: "Not available"
    };
    var c = false;
    try {
      var d = a.lineNumber || a.line || "Not available";
    } catch (f) {
      d = "Not available", c = true;
    }
    try {
      var e = a.fileName || a.filename || a.sourceURL || A.$googDebugFname || b;
    } catch (f) {
      e = "Not available", c = true;
    }
    b = Ef(a);
    return !c && a.lineNumber && a.fileName && a.stack && a.message && a.name ? {
      message: a.message,
      name: a.name,
      lineNumber: a.lineNumber,
      fileName: a.fileName,
      stack: b
    } : (c = a.message, c == null && (c = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : Ff(a.constructor)) + '"' : "Unknown Error of unknown type", typeof a.toString === "function" && Object.prototype.toString !== a.toString && (c += ": " + a.toString())), {
      message: c,
      name: a.name || "UnknownError",
      lineNumber: d,
      fileName: e,
      stack: b || "Not available"
    });
  }
  __name(Df, "Df");
  function Ef(a, b) {
    b || (b = {});
    b[Gf(a)] = true;
    var c = a.stack || "", d = a.cause;
    d && !b[Gf(d)] && (c += "\nCaused by: ", d.stack && d.stack.indexOf(d.toString()) == 0 || (c += typeof d === "string" ? d : d.message + "\n"), c += Ef(d, b));
    a = a.errors;
    if (Array.isArray(a)) {
      d = 1;
      var e;
      for (e = 0; e < a.length && !(d > 4); e++) b[Gf(a[e])] || (c += "\nInner error " + d++ + ": ", a[e].stack && a[e].stack.indexOf(a[e].toString()) == 0 || (c += typeof a[e] === "string" ? a[e] : a[e].message + "\n"), c += Ef(a[e], b));
      e < a.length && (c += "\n... " + (a.length - e) + " more inner errors");
    }
    return c;
  }
  __name(Ef, "Ef");
  function Gf(a) {
    var b = "";
    typeof a.toString === "function" && (b = "" + a);
    return b + a.stack;
  }
  __name(Gf, "Gf");
  function Hf(a, b) {
    a instanceof Error || (a = Error(a), Error.captureStackTrace && Error.captureStackTrace(a, Hf));
    a.stack || (a.stack = If(Hf));
    if (b) {
      for (var c = 0; a["message" + c]; ) ++c;
      a["message" + c] = String(b);
    }
    return a;
  }
  __name(Hf, "Hf");
  function Jf(a, b) {
    a = Hf(a);
    if (b)
      for (var c in b) nb(a, c, b[c]);
    return a;
  }
  __name(Jf, "Jf");
  function If(a) {
    var b = Error();
    if (Error.captureStackTrace) Error.captureStackTrace(b, a || If), b = String(b.stack);
    else {
      try {
        throw b;
      } catch (c) {
        b = c;
      }
      b = (b = b.stack) ? String(b) : null;
    }
    b || (b = Kf(a || arguments.callee.caller, []));
    return b;
  }
  __name(If, "If");
  function Kf(a, b) {
    var c = [];
    if (Array.prototype.indexOf.call(b, a, void 0) >= 0) c.push("[...circular reference...]");
    else if (a && b.length < 50) {
      c.push(Ff(a) + "(");
      for (var d = a.arguments, e = 0; d && e < d.length; e++) {
        e > 0 && c.push(", ");
        var f = d[e];
        switch (typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Ff(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f;
        }
        f.length > 40 && (f = f.slice(0, 40) + "...");
        c.push(f);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Kf(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("");
  }
  __name(Kf, "Kf");
  function Ff(a) {
    if (Lf[a]) return Lf[a];
    a = String(a);
    if (!Lf[a]) {
      var b = /function\s+([^\(]+)/m.exec(a);
      Lf[a] = b ? b[1] : "[Anonymous]";
    }
    return Lf[a];
  }
  __name(Ff, "Ff");
  var Lf = {};
  function Mf(a, b) {
    this.name = a;
    this.value = b;
  }
  __name(Mf, "Mf");
  Mf.prototype.toString = p("name");
  var Nf = new Mf("SEVERE", 1e3), Of = new Mf("WARNING", 900), Pf = new Mf("CONFIG", 700);
  function Qf() {
    this.clear();
  }
  __name(Qf, "Qf");
  var Rf;
  function Sf(a) {
    var b = Tf(), c = b.j;
    if (c[0]) {
      var d = b.l;
      b = b.o ? d : -1;
      do
        b = (b + 1) % 0, a(c[b]);
      while (b !== d);
    }
  }
  __name(Sf, "Sf");
  Qf.prototype.clear = function() {
    this.j = [];
    this.l = -1;
    this.o = false;
  };
  function Tf() {
    Rf || (Rf = new Qf());
    return Rf;
  }
  __name(Tf, "Tf");
  ;
  function Uf(a, b, c, d, e, f, g) {
    var h = "";
    a && (h += a + ":");
    c && (h += "//", b && (h += b + "@"), h += c, d && (h += ":" + d));
    e && (h += e);
    f && (h += "?" + f);
    g && (h += "#" + g);
    return h;
  }
  __name(Uf, "Uf");
  var Vf = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function Wf(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (d >= 0) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  __name(Wf, "Wf");
  function Xf(a, b) {
    if (!b) return a;
    var c = a.indexOf("#");
    c < 0 && (c = a.length);
    var d = a.indexOf("?");
    if (d < 0 || d > c) {
      d = c;
      var e = "";
    } else e = a.substring(d + 1, c);
    a = [a.slice(0, d), e, a.slice(c)];
    c = a[1];
    a[1] = b ? c ? c + "&" + b : b : c;
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
  }
  __name(Xf, "Xf");
  function Yf(a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) Yf(a, String(b[d]), c);
    else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))));
  }
  __name(Yf, "Yf");
  function Zf(a, b) {
    var c = [];
    for (b = b || 0; b < a.length; b += 2) Yf(a[b], a[b + 1], c);
    return c.join("&");
  }
  __name(Zf, "Zf");
  function $f(a) {
    var b = [], c;
    for (c in a) Yf(c, a[c], b);
    return b.join("&");
  }
  __name($f, "$f");
  function W(a, b) {
    var c = arguments.length == 2 ? Zf(arguments[1], 0) : Zf(arguments, 1);
    return Xf(a, c);
  }
  __name(W, "W");
  ;
  var ag;
  ag = /* @__PURE__ */ __name(function(a) {
    if (!a) return a;
    a = (typeof a === "object" ? a.href : a).match(Vf);
    var b = a[1];
    return b !== "http" && b !== "https" ? b || "" : Uf(a[1], "", a[3], a[4], a[5], a[6], "");
  }, "ag");
  function bg(a) {
    a && typeof a.dispose == "function" && a.dispose();
  }
  __name(bg, "bg");
  ;
  function cg(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      Ia(d) ? cg.apply(null, d) : bg(d);
    }
  }
  __name(cg, "cg");
  ;
  function X() {
    this.I = this.I;
    this.G = this.G;
  }
  __name(X, "X");
  X.prototype.I = false;
  X.prototype.na = p("I");
  X.prototype.dispose = function() {
    this.I || (this.I = true, this.N());
  };
  X.prototype[Symbol.dispose] = function() {
    this.dispose();
  };
  function dg(a, b) {
    b = Pa(bg, b);
    a.I ? b() : (a.G || (a.G = []), a.G.push(b));
  }
  __name(dg, "dg");
  X.prototype.N = function() {
    if (this.G)
      for (; this.G.length; ) this.G.shift()();
  };
  var eg = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? function(a) {
    return a && AsyncContext.Snapshot.wrap(a);
  } : aa();
  function fg(a, b) {
    this.o = a;
    this.v = b;
    this.l = 0;
    this.j = null;
  }
  __name(fg, "fg");
  fg.prototype.get = function() {
    if (this.l > 0) {
      this.l--;
      var a = this.j;
      this.j = a.next;
      a.next = null;
    } else a = this.o();
    return a;
  };
  function gg(a, b) {
    a.v(b);
    a.l < 100 && (a.l++, b.next = a.j, a.j = b);
  }
  __name(gg, "gg");
  ;
  var hg = [], ig = [], jg = false;
  function kg(a) {
    hg[hg.length] = a;
    if (jg)
      for (var b = 0; b < ig.length; b++) a(B(ig[b].j, ig[b]));
  }
  __name(kg, "kg");
  ;
  kg(n());
  function lg() {
    this.l = this.j = null;
  }
  __name(lg, "lg");
  lg.prototype.add = function(a, b) {
    var c = mg.get();
    c.set(a, b);
    this.l ? this.l.next = c : this.j = c;
    this.l = c;
  };
  lg.prototype.remove = function() {
    var a = null;
    this.j && (a = this.j, this.j = this.j.next, this.j || (this.l = null), a.next = null);
    return a;
  };
  var mg = new fg(function() {
    return new ng();
  }, function(a) {
    return a.reset();
  });
  function ng() {
    this.next = this.scope = this.j = null;
  }
  __name(ng, "ng");
  ng.prototype.set = function(a, b) {
    this.j = a;
    this.scope = b;
    this.next = null;
  };
  ng.prototype.reset = function() {
    this.next = this.scope = this.j = null;
  };
  var og, pg = false, qg = new lg();
  function rg(a, b) {
    og || sg();
    pg || (og(), pg = true);
    qg.add(a, b);
  }
  __name(rg, "rg");
  function sg() {
    var a = Promise.resolve(void 0);
    og = /* @__PURE__ */ __name(function() {
      a.then(tg);
    }, "og");
  }
  __name(sg, "sg");
  function tg() {
    for (var a; a = qg.remove(); ) {
      try {
        a.j.call(a.scope);
      } catch (b) {
        Sa(b);
      }
      gg(mg, a);
    }
    pg = false;
  }
  __name(tg, "tg");
  ;
  function ug() {
  }
  __name(ug, "ug");
  ;
  function vg(a) {
    if (!a) return false;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return false;
    }
  }
  __name(vg, "vg");
  ;
  function wg(a) {
    this.j = 0;
    this.I = void 0;
    this.v = this.l = this.o = null;
    this.A = this.G = false;
    if (a != ug) try {
      var b = this;
      a.call(void 0, function(c) {
        xg(b, 2, c);
      }, function(c) {
        xg(b, 3, c);
      });
    } catch (c) {
      xg(this, 3, c);
    }
  }
  __name(wg, "wg");
  function yg() {
    this.next = this.o = this.l = this.v = this.j = null;
    this.A = false;
  }
  __name(yg, "yg");
  yg.prototype.reset = function() {
    this.o = this.l = this.v = this.j = null;
    this.A = false;
  };
  var zg = new fg(function() {
    return new yg();
  }, function(a) {
    a.reset();
  });
  function Ag(a, b, c) {
    var d = zg.get();
    d.v = a;
    d.l = b;
    d.o = c;
    return d;
  }
  __name(Ag, "Ag");
  function Bg() {
    var a = new wg(ug);
    xg(a, 2);
    return a;
  }
  __name(Bg, "Bg");
  function Cg(a, b, c) {
    Dg(a, b, c, null) || rg(Pa(b, a));
  }
  __name(Cg, "Cg");
  function Eg(a) {
    return new wg(function(b, c) {
      a.length || b(void 0);
      for (var d, e = 0; e < a.length; e++) d = a[e], Cg(d, b, c);
    });
  }
  __name(Eg, "Eg");
  function Fg(a) {
    return new wg(function(b) {
      var c = a.length, d = [];
      if (c)
        for (var e = function(h, k, l) {
          c--;
          d[h] = k ? {
            kb: true,
            value: l
          } : {
            kb: false,
            reason: l
          };
          c == 0 && b(d);
        }, f, g = 0; g < a.length; g++) f = a[g], Cg(f, Pa(e, g, true), Pa(e, g, false));
      else b(d);
    });
  }
  __name(Fg, "Fg");
  function Gg() {
    var a, b, c = new wg(function(d, e) {
      a = d;
      b = e;
    });
    return new Hg(c, a, b);
  }
  __name(Gg, "Gg");
  wg.prototype.then = function(a, b, c) {
    return Ig(this, eg(typeof a === "function" ? a : null), eg(typeof b === "function" ? b : null), c);
  };
  wg.prototype.$goog_Thenable = true;
  q = wg.prototype;
  q.ta = function(a, b) {
    return Ig(this, null, eg(a), b);
  };
  q.Ra = wg.prototype.ta;
  q.cancel = function(a) {
    if (this.j == 0) {
      var b = new Jg(a);
      rg(function() {
        Kg(this, b);
      }, this);
    }
  };
  function Kg(a, b) {
    if (a.j == 0)
      if (a.o) {
        var c = a.o;
        if (c.l) {
          for (var d = 0, e = null, f = null, g = c.l; g && (g.A || (d++, g.j == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
          e && (c.j == 0 && d == 1 ? Kg(c, b) : (f ? (d = f, d.next == c.v && (c.v = d), d.next = d.next.next) : Lg(c), Mg(c, e, 3, b)));
        }
        a.o = null;
      } else xg(a, 3, b);
  }
  __name(Kg, "Kg");
  function Ng(a, b) {
    a.l || a.j != 2 && a.j != 3 || Og(a);
    a.v ? a.v.next = b : a.l = b;
    a.v = b;
  }
  __name(Ng, "Ng");
  function Ig(a, b, c, d) {
    var e = Ag(null, null, null);
    e.j = new wg(function(f, g) {
      e.v = b ? function(h) {
        try {
          var k = b.call(d, h);
          f(k);
        } catch (l) {
          g(l);
        }
      } : f;
      e.l = c ? function(h) {
        try {
          var k = c.call(d, h);
          k === void 0 && h instanceof Jg ? g(h) : f(k);
        } catch (l) {
          g(l);
        }
      } : g;
    });
    e.j.o = a;
    Ng(a, e);
    return e.j;
  }
  __name(Ig, "Ig");
  q.zb = function(a) {
    this.j = 0;
    xg(this, 2, a);
  };
  q.Ab = function(a) {
    this.j = 0;
    xg(this, 3, a);
  };
  function xg(a, b, c) {
    a.j == 0 && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.j = 1, Dg(
      c,
      a.zb,
      a.Ab,
      a
    ) || (a.I = c, a.j = b, a.o = null, Og(a), b != 3 || c instanceof Jg || Pg(a, c)));
  }
  __name(xg, "xg");
  function Dg(a, b, c, d) {
    if (a instanceof wg) return Ng(a, Ag(b || ug, c || null, d)), true;
    if (vg(a)) return a.then(b, c, d), true;
    if (Ka(a)) try {
      var e = a.then;
      if (typeof e === "function") return Qg(a, e, b, c, d), true;
    } catch (f) {
      return c.call(d, f), true;
    }
    return false;
  }
  __name(Dg, "Dg");
  function Qg(a, b, c, d, e) {
    function f(k) {
      h || (h = true, d.call(e, k));
    }
    __name(f, "f");
    function g(k) {
      h || (h = true, c.call(e, k));
    }
    __name(g, "g");
    var h = false;
    try {
      b.call(a, g, f);
    } catch (k) {
      f(k);
    }
  }
  __name(Qg, "Qg");
  function Og(a) {
    a.G || (a.G = true, rg(a.jb, a));
  }
  __name(Og, "Og");
  function Lg(a) {
    var b = null;
    a.l && (b = a.l, a.l = b.next, b.next = null);
    a.l || (a.v = null);
    return b;
  }
  __name(Lg, "Lg");
  q.jb = function() {
    for (var a; a = Lg(this); ) Mg(this, a, this.j, this.I);
    this.G = false;
  };
  function Mg(a, b, c, d) {
    if (c == 3 && b.l && !b.A)
      for (; a && a.A; a = a.o) a.A = false;
    if (b.j) b.j.o = null, Rg(b, c, d);
    else try {
      b.A ? b.v.call(b.o) : Rg(b, c, d);
    } catch (e) {
      Sg.call(null, e);
    }
    gg(zg, b);
  }
  __name(Mg, "Mg");
  function Rg(a, b, c) {
    b == 2 ? a.v.call(a.o, c) : a.l && a.l.call(a.o, c);
  }
  __name(Rg, "Rg");
  function Pg(a, b) {
    a.A = true;
    rg(function() {
      a.A && Sg.call(null, b);
    });
  }
  __name(Pg, "Pg");
  var Sg = Sa;
  function Jg(a) {
    D.call(this, a);
    this.j = false;
  }
  __name(Jg, "Jg");
  C(Jg, D);
  Jg.prototype.name = "cancel";
  function Hg(a, b, c) {
    this.promise = a;
    this.resolve = b;
    this.reject = c;
  }
  __name(Hg, "Hg");
  ;
  function Tg() {
    this.A = [];
    this.v = this.o = false;
    this.l = void 0;
    this.F = this.L = this.I = false;
    this.G = 0;
    this.j = null;
    this.B = 0;
  }
  __name(Tg, "Tg");
  Tg.prototype.cancel = function(a) {
    if (this.o) this.l instanceof Tg && this.l.cancel();
    else {
      if (this.j) {
        var b = this.j;
        delete this.j;
        a ? b.cancel(a) : (b.B--, b.B <= 0 && b.cancel());
      }
      this.F = true;
      this.o || (a = new Ug(this), Vg(this), Wg(this, false, a));
    }
  };
  Tg.prototype.J = function(a, b) {
    this.I = false;
    Wg(this, a, b);
  };
  function Wg(a, b, c) {
    a.o = true;
    a.l = c;
    a.v = !b;
    Xg(a);
  }
  __name(Wg, "Wg");
  function Vg(a) {
    if (a.o) {
      if (!a.F) throw new Yg(a);
      a.F = false;
    }
  }
  __name(Vg, "Vg");
  function Zg(a) {
    throw a;
  }
  __name(Zg, "Zg");
  function $g(a, b, c) {
    return ah(a, b, null, c);
  }
  __name($g, "$g");
  function bh(a, b, c) {
    ah(a, b, function(d) {
      var e = b.call(this, d);
      if (e === void 0) throw d;
      return e;
    }, c);
  }
  __name(bh, "bh");
  function ah(a, b, c, d) {
    var e = a.o;
    e || (b === c ? b = c = eg(b) : (b = eg(b), c = eg(c)));
    a.A.push([b, c, d]);
    e && Xg(a);
    return a;
  }
  __name(ah, "ah");
  Tg.prototype.then = function(a, b, c) {
    var d, e, f = new wg(function(g, h) {
      e = g;
      d = h;
    });
    ah(this, e, function(g) {
      g instanceof Ug ? f.cancel() : d(g);
      return ch;
    }, this);
    return f.then(a, b, c);
  };
  Tg.prototype.$goog_Thenable = true;
  function dh(a) {
    return $a(a.A, function(b) {
      return typeof b[1] === "function";
    });
  }
  __name(dh, "dh");
  var ch = {};
  function Xg(a) {
    if (a.G && a.o && dh(a)) {
      var b = a.G, c = eh[b];
      c && (A.clearTimeout(c.j), delete eh[b]);
      a.G = 0;
    }
    a.j && (a.j.B--, delete a.j);
    b = a.l;
    for (var d = c = false; a.A.length && !a.I; ) {
      var e = a.A.shift(), f = e[0], g = e[1];
      e = e[2];
      if (f = a.v ? g : f) try {
        var h = f.call(e || null, b);
        h === ch && (h = void 0);
        h !== void 0 && (a.v = a.v && (h == b || h instanceof Error), a.l = b = h);
        if (vg(b) || typeof A.Promise === "function" && b instanceof A.Promise) d = true, a.I = true;
      } catch (k) {
        b = k, a.v = true, dh(a) || (c = true);
      }
    }
    a.l = b;
    d && (h = B(a.J, a, true), d = B(a.J, a, false), b instanceof Tg ? (ah(b, h, d), b.L = true) : b.then(h, d));
    c && (b = new fh(b), eh[b.j] = b, a.G = b.j);
  }
  __name(Xg, "Xg");
  function gh(a) {
    var b = new Tg();
    Vg(b);
    Wg(b, true, a);
    return b;
  }
  __name(gh, "gh");
  function Yg() {
    D.call(this);
  }
  __name(Yg, "Yg");
  C(Yg, D);
  Yg.prototype.message = "Deferred has already fired";
  Yg.prototype.name = "AlreadyCalledError";
  function Ug() {
    D.call(this);
  }
  __name(Ug, "Ug");
  C(Ug, D);
  Ug.prototype.message = "Deferred was canceled";
  Ug.prototype.name = "CanceledError";
  function fh(a) {
    this.j = A.setTimeout(B(this.o, this), 0);
    this.l = a;
  }
  __name(fh, "fh");
  fh.prototype.o = function() {
    delete eh[this.j];
    Zg(this.l);
  };
  var eh = {};
  function hh() {
  }
  __name(hh, "hh");
  function ih(a) {
    return a != null && !!a.Ea;
  }
  __name(ih, "ih");
  hh.prototype.Ea = true;
  hh.prototype.D = ["javax.inject.Provider", 1];
  function jh() {
  }
  __name(jh, "jh");
  function kh(a) {
    return a != null && !!a.Da;
  }
  __name(kh, "kh");
  jh.prototype.Da = true;
  jh.prototype.D = ["com.google.apps.docs.xplat.flag.FlagService", 1];
  var lh;
  function mh() {
    if (lh == null) {
      var a = new nh(null);
      lh = /* @__PURE__ */ __name(function() {
        return a;
      }, "lh");
    }
    var b;
    return U((b = lh, b()), kh, jh);
  }
  __name(mh, "mh");
  ;
  function oh() {
  }
  __name(oh, "oh");
  x(oh, O);
  oh.prototype.get = function() {
    if (this.l == null) {
      var a = U(A._docs_flag_initialData, of, nf);
      this.l = a != null ? a : U({}, of, nf);
    }
    return this.l;
  };
  oh.prototype.j = function() {
    return this.get();
  };
  oh.prototype.Ea = true;
  oh.prototype.D = ["com.google.apps.docs.xplat.flag.FlagServiceHelper", 0];
  function ph(a) {
    return typeof a == "string" ? a == "true" || a == "1" : !!a;
  }
  __name(ph, "ph");
  ;
  function nh(a) {
    this.j = new oh();
    this.l = null;
    if (a != null)
      for (var b in a) {
        var c = b, d = a[b];
        if (this.l != null) throw Je("Cannot use setClientFlag when comparison is enabled.").j;
        var e = U(this.j.j(), of, nf);
        $e(d) ? (d = U(d, $e, Ye).X, e[c] = d) : e[c] = d != null ? d : null;
      }
  }
  __name(nh, "nh");
  x(nh, O);
  nh.prototype.clear = function() {
    this.j = new oh();
    this.l = null;
  };
  nh.prototype.get = function(a) {
    qh(this, a);
    return U(this.j.j(), of, nf)[a];
  };
  function rh(a, b) {
    a = U(a.j.j(), of, nf);
    return b in a;
  }
  __name(rh, "rh");
  function sh(a, b) {
    qh(a, b);
    if (!rh(a, b) || a.get(b) == null) return NaN;
    try {
      var c = P(a.get(b));
      Ne == null && (Ne = RegExp(
        "^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$"
      ));
      if (!Ne.test(c)) {
        var d = new af();
        d.l = 'For input string: "' + P(c) + '"';
        T(d);
        S(d, Error(d));
        throw d.j;
      }
      return parseFloat(c);
    } catch (f) {
      var e = se(f);
      if (e instanceof af) return NaN;
      throw e.j;
    }
  }
  __name(sh, "sh");
  function th(a, b) {
    qh(a, b);
    if (!rh(a, b)) return "";
    a = a.get(b);
    if (a == null) return "";
    var c;
    if (b = "number" === typeof a && (c = a, true)) {
      b = Pe(V(c));
      var d = Pe(V(c));
      b = b.equals(d);
    }
    return b ? "" + Pe(V(c)) : P(a);
  }
  __name(th, "th");
  function qh(a, b) {
    if (a.l != null) {
      try {
        var c = U(a.j.j(), of, nf)[b];
      } catch (h) {
        var d = se(h);
        if (d instanceof xe) c = "injection-failed";
        else throw d.j;
      }
      try {
        var e = a.l;
        if (e == null) throw te().j;
        var f = U(U(e, ih, hh).j(), of, nf)[b];
      } catch (h) {
        var g = se(h);
        if (g instanceof xe) f = "injection-failed";
        else throw g.j;
      }
      a = c;
      !(b = ke(a, f)) && (b = a != null) && (b = a.equals ? a.equals(f) : Object.is(a, f));
      if (!b) throw Je("Logging is not supported.").j;
    }
  }
  __name(qh, "qh");
  nh.prototype.Da = true;
  nh.prototype.D = ["com.google.apps.docs.xplat.flag.FlagServiceImpl", 0];
  function uh(a) {
    gf.call(this, a, null);
    S(this, Error(this));
  }
  __name(uh, "uh");
  x(uh, gf);
  uh.prototype.D = ["com.google.apps.docs.xplat.net.LimitException", 0];
  function vh(a, b, c, d) {
    uf();
    this.j = false;
    this.G = a;
    this.o = b;
    this.l = new wh(Math.imul(c, 1e3), d);
  }
  __name(vh, "vh");
  x(vh, sf);
  function xh(a) {
    if (!((a.l.get(null) + 1 | 0) / V(a.l.o / 1e3) <= a.o)) throw new uh("Query would cause " + P(a.G) + " to exceed " + a.o + " qps.").j;
    a = a.l;
    var b = Sd(Zd(Date.now()));
    yh(a, b);
    var c = U(zh(a.j), Ah, Bh);
    if (c == null || V(b) >= V(c.l)) b = Ch(a, V(b)), c = new Bh(), c.l = b, c.j = 0, c.v = 2147483647, c.o = -2147483648, a.j.add(c);
    c.j = c.j + 1 | 0;
    c.v = Math.min(1, c.v);
    c.o = Math.max(1, c.o);
  }
  __name(xh, "xh");
  vh.prototype.D = ["com.google.apps.docs.xplat.net.QpsLimiter", 0];
  function Bh() {
    this.o = this.v = this.j = 0;
  }
  __name(Bh, "Bh");
  x(Bh, O);
  function Ah(a) {
    return a instanceof Bh;
  }
  __name(Ah, "Ah");
  Bh.prototype.D = ["com.google.apps.docs.xplat.util.BasicStat$Slot", 0];
  function wh(a) {
    this.l = 0;
    this.o = a;
    this.l = Qe(a / 50);
    this.j = new Dh(Ze(50));
  }
  __name(wh, "wh");
  x(wh, O);
  wh.prototype.get = function(a) {
    return Eh(this, a, function(b, c) {
      b = U(b, $e, Ye);
      c = U(c, Ah, Bh);
      return Ze(b.X + c.j | 0);
    });
  };
  function Eh(a, b, c) {
    b = b != null ? V(b) : Sd(Zd(Date.now()));
    yh(a, b);
    var d = 0;
    b = Ch(a, V(b));
    b = V(b) - a.o;
    for (var e = a.j.j.length - 1 | 0; e >= 0; e = e - 1 | 0) {
      var f = U(a.j.get(e), Ah, Bh);
      if (V(f.l) <= b) break;
      d = U(c(Ze(d), f), $e, Ye).X;
    }
    return d;
  }
  __name(Eh, "Eh");
  function Ch(a, b) {
    return a.l * Math.floor(b / a.l + 1);
  }
  __name(Ch, "Ch");
  function yh(a, b) {
    var c = U(zh(a.j), Ah, Bh);
    c != null && (c = V(c.l) - a.l, V(b) < V(c) && a.j.clear());
  }
  __name(yh, "yh");
  wh.prototype.D = ["com.google.apps.docs.xplat.util.BasicStat", 0];
  function Dh(a) {
    this.l = this.o = 0;
    a != null ? "number" === typeof a ? (a = V(a), a = Math.max(Math.min(a, 2147483647), -2147483648) | 0) : a = a instanceof Rd ? V(a).K : a.X : a = 100;
    this.o = a;
    this.j = U([], mf, lf);
  }
  __name(Dh, "Dh");
  x(Dh, O);
  q = Dh.prototype;
  q.add = function(a) {
    var b = this.j[this.l];
    this.j[this.l] = a;
    this.l = Qe((this.l + 1 | 0) % this.o);
    return b;
  };
  q.get = function(a) {
    a = Fh(this, a);
    return this.j[a];
  };
  q.set = function(a, b) {
    a = Fh(this, a);
    this.j[a] = b;
  };
  q.clear = function() {
    this.l = this.j.length = 0;
  };
  q.la = function() {
    for (var a = this.j.length, b = this.j.length - this.j.length | 0, c = U([], mf, lf); b < a; b = b + 1 | 0) {
      var d = c, e = this.get(b);
      d.push(e);
    }
    return c;
  };
  function zh(a) {
    return a.j.length == 0 ? null : a.get(a.j.length - 1 | 0);
  }
  __name(zh, "zh");
  function Fh(a, b) {
    if (b >= a.j.length) throw a = new ye(), T(a), S(a, Error(a)), a.j;
    return a.j.length < a.o ? b : Qe((a.l + b | 0) % a.o);
  }
  __name(Fh, "Fh");
  q.D = ["com.google.apps.docs.xplat.util.CircularBuffer", 0];
  function Gh() {
    this.j = 0;
  }
  __name(Gh, "Gh");
  var Hh, Ih;
  x(Gh, O);
  function Y(a, b) {
    var c = new Gh();
    c.l = a;
    c.j = b;
    Hh[a] = c !== void 0 ? c : null;
    return c;
  }
  __name(Y, "Y");
  Gh.prototype.toString = p("l");
  function Jh() {
    Jh = n();
    Hh = U({}, qf, pf);
    Y("IDLE", 1);
    Y("BUSY", 1);
    Y("RECOVERING", 2);
    Ih = Y("OFFLINE", 3);
    Y("SERVER_DOWN", 3);
    Y("FORBIDDEN", 4);
    Y("AUTH_REQUIRED", 4);
    Y("DELTA_STALE_CLIENT", 4);
    Y("SESSION_LIMIT_EXCEEDED", 5);
    Y("LOCKED", 5);
    Y("INCOMPATIBLE_SERVER", 5);
    Y("CLIENT_ERROR", 5);
    Y("CLIENT_FATAL_ERROR", 5);
    Y("CLIENT_FATAL_ERROR_PENDING_CHANGES", 5);
    Y("BATCH_CLIENT_ERROR", 3);
    Y("SAVE_ERROR", 5);
    Y("DOCUMENT_TOO_LARGE", 5);
    Y("CSE_BLOCKED_REQUEST", 5);
    Y("BATCH_SAVE_ERROR", 3);
    Y("DOCS_EVERYWHERE_IMPORT_ERROR", 5);
    Y(
      "POST_LIMIT_EXCEEDED_ERROR",
      5
    );
    Y("DOCS_QUOTA_EXCEEDED_ERROR", 5);
  }
  __name(Jh, "Jh");
  Gh.prototype.D = ["com.google.apps.docs.xplat.net.Status$State", 0];
  function Kh() {
  }
  __name(Kh, "Kh");
  x(Kh, O);
  function Lh(a) {
    return a instanceof Kh;
  }
  __name(Lh, "Lh");
  Kh.prototype.D = [
    "com.google.apps.docsshared.xplat.observable.EventObserverTracker$ObservableObserverPair",
    0
  ];
  function Mh() {
    uf();
    this.j = false;
    this.l = U([], mf, lf);
  }
  __name(Mh, "Mh");
  x(Mh, sf);
  function Nh(a, b, c) {
    var d;
    a: {
      for (d = 0; d < a.l.length; d = d + 1 | 0) {
        var e = U(a.l[d], Lh, Kh);
        if (ke(e.l, c) && ke(e.j, b)) {
          d = true;
          break a;
        }
      }
      d = false;
    }
    d || (a = a.l, c = b.j(c), d = new Kh(), d.j = b, d.l = c, a.push(d));
  }
  __name(Nh, "Nh");
  Mh.prototype.sa = function() {
    this.removeAll();
    sf.prototype.sa.call(this);
  };
  Mh.prototype.removeAll = function() {
    for (var a = U(this.l.pop(), Lh, Kh); a != null; ) a.j.l(a.l), a = U(this.l.pop(), Lh, Kh);
  };
  Mh.prototype.D = ["com.google.apps.docsshared.xplat.observable.EventObserverTracker", 0];
  function Oh(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  __name(Oh, "Oh");
  function Ph(a) {
    var b = {}, c;
    for (c in a) b[c] = a[c];
    return b;
  }
  __name(Ph, "Ph");
  var Qh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function Rh(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Qh.length; f++) c = Qh[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  __name(Rh, "Rh");
  ;
  function Sh(a) {
    this.j = this.I = this.v = "";
    this.B = null;
    this.G = this.l = "";
    this.A = false;
    var b;
    a instanceof Sh ? (this.A = a.A, Th(this, a.v), this.I = a.I, this.j = a.j, Uh(this, a.B), Vh(this, a.l), Wh(this, a.o.clone()), this.G = a.G) : a && (b = String(a).match(Vf)) ? (this.A = false, Th(this, b[1] || "", true), this.I = Xh(b[2] || ""), this.j = Xh(b[3] || "", true), Uh(this, b[4]), Vh(this, b[5] || "", true), Wh(this, b[6] || "", true), this.G = Xh(b[7] || "")) : (this.A = false, this.o = new Yh(null, this.A));
  }
  __name(Sh, "Sh");
  Sh.prototype.toString = function() {
    var a = [], b = this.v;
    b && a.push(Zh(b, $h, true), ":");
    var c = this.j;
    if (c || b == "file") a.push("//"), (b = this.I) && a.push(Zh(b, $h, true), "@"), a.push(encodeURIComponent(
      String(c)
    ).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.B, c != null && a.push(":", String(c));
    if (c = this.l) this.j && c.charAt(0) != "/" && a.push("/"), a.push(Zh(c, c.charAt(0) == "/" ? ai : bi, true));
    (c = this.o.toString()) && a.push("?", c);
    (c = this.G) && a.push("#", Zh(c, ci));
    return a.join("");
  };
  Sh.prototype.resolve = function(a) {
    var b = this.clone(), c = !!a.v;
    c ? Th(b, a.v) : c = !!a.I;
    c ? b.I = a.I : c = !!a.j;
    c ? b.j = a.j : c = a.B != null;
    var d = a.l;
    if (c) Uh(b, a.B);
    else if (c = !!a.l) {
      if (d.charAt(0) != "/")
        if (this.j && !this.l) d = "/" + d;
        else {
          var e = b.l.lastIndexOf("/");
          e != -1 && (d = b.l.slice(0, e + 1) + d);
        }
      e = d;
      if (e == ".." || e == ".") d = "";
      else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
        d = e.lastIndexOf("/", 0) == 0;
        e = e.split("/");
        for (var f = [], g = 0; g < e.length; ) {
          var h = e[g++];
          h == "." ? d && g == e.length && f.push("") : h == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = true);
        }
        d = f.join("/");
      } else d = e;
    }
    c ? Vh(b, d) : c = a.o.toString() !== "";
    c ? Wh(b, a.o.clone()) : c = !!a.G;
    c && (b.G = a.G);
    return b;
  };
  Sh.prototype.clone = function() {
    return new Sh(this);
  };
  function Th(a, b, c) {
    a.v = c ? Xh(b, true) : b;
    a.v && (a.v = a.v.replace(/:$/, ""));
  }
  __name(Th, "Th");
  function Uh(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
      a.B = b;
    } else a.B = null;
  }
  __name(Uh, "Uh");
  function Vh(a, b, c) {
    a.l = c ? Xh(b, true) : b;
    return a;
  }
  __name(Vh, "Vh");
  function Wh(a, b, c) {
    b instanceof Yh ? (a.o = b, di(a.o, a.A)) : (c || (b = Zh(b, ei)), a.o = new Yh(b, a.A));
  }
  __name(Wh, "Wh");
  function Xh(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  __name(Xh, "Xh");
  function Zh(a, b, c) {
    return typeof a === "string" ? (a = encodeURI(a).replace(b, fi), c && (a = a.replace(
      /%25([0-9a-fA-F]{2})/g,
      "%$1"
    )), a) : null;
  }
  __name(Zh, "Zh");
  function fi(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  __name(fi, "fi");
  var $h = /[#\/\?@]/g, bi = /[#\?:]/g, ai = /[#\?]/g, ei = /[#\?@]/g, ci = /#/g;
  function Yh(a, b) {
    this.l = this.j = null;
    this.o = a || null;
    this.v = !!b;
  }
  __name(Yh, "Yh");
  function gi(a) {
    a.j || (a.j = /* @__PURE__ */ new Map(), a.l = 0, a.o && Wf(a.o, function(b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  }
  __name(gi, "gi");
  q = Yh.prototype;
  q.add = function(a, b) {
    gi(this);
    this.o = null;
    a = hi(this, a);
    var c = this.j.get(a);
    c || this.j.set(a, c = []);
    c.push(b);
    this.l = this.l + 1;
    return this;
  };
  q.remove = function(a) {
    gi(this);
    a = hi(this, a);
    return this.j.has(a) ? (this.o = null, this.l = this.l - this.j.get(a).length, this.j.delete(a)) : false;
  };
  q.clear = function() {
    this.j = this.o = null;
    this.l = 0;
  };
  function ii(a, b) {
    gi(a);
    b = hi(a, b);
    return a.j.has(b);
  }
  __name(ii, "ii");
  q.forEach = function(a, b) {
    gi(this);
    this.j.forEach(function(c, d) {
      c.forEach(function(e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  q.la = function(a) {
    gi(this);
    var b = [];
    if (typeof a === "string") ii(this, a) && (b = b.concat(this.j.get(hi(this, a))));
    else {
      a = Array.from(this.j.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  q.set = function(a, b) {
    gi(this);
    this.o = null;
    a = hi(this, a);
    ii(this, a) && (this.l = this.l - this.j.get(a).length);
    this.j.set(a, [b]);
    this.l = this.l + 1;
    return this;
  };
  q.get = function(a, b) {
    if (!a) return b;
    a = this.la(a);
    return a.length > 0 ? String(a[0]) : b;
  };
  q.toString = function() {
    if (this.o) return this.o;
    if (!this.j) return "";
    for (var a = [], b = Array.from(this.j.keys()), c = 0; c < b.length; c++) {
      var d = b[c], e = encodeURIComponent(String(d));
      d = this.la(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return this.o = a.join("&");
  };
  q.clone = function() {
    var a = new Yh();
    a.o = this.o;
    this.j && (a.j = new Map(this.j), a.l = this.l);
    return a;
  };
  function hi(a, b) {
    b = String(b);
    a.v && (b = b.toLowerCase());
    return b;
  }
  __name(hi, "hi");
  function di(a, b) {
    b && !a.v && (gi(a), a.o = null, a.j.forEach(function(c, d) {
      var e = d.toLowerCase();
      if (d != e && (this.remove(d), this.remove(e), c.length > 0)) {
        this.o = null;
        d = this.j;
        var f = d.set;
        e = hi(this, e);
        var g = c.length;
        if (g > 0) {
          for (var h = Array(g), k = 0; k < g; k++) h[k] = c[k];
          g = h;
        } else g = [];
        f.call(d, e, g);
        this.l = this.l + c.length;
      }
    }, a));
    a.v = b;
  }
  __name(di, "di");
  ;
  function ji() {
    var a = A.window;
    a.onbeforeunload = n();
    a.location.reload();
  }
  __name(ji, "ji");
  ;
  function ki() {
    this.j = function() {
      ji();
    };
  }
  __name(ki, "ki");
  ki.prototype.notify = function() {
    window.confirm(
      "This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue."
    ) && this.j();
  };
  function li(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.l = false;
  }
  __name(li, "li");
  li.prototype.stopPropagation = function() {
    this.l = true;
  };
  li.prototype.preventDefault = function() {
    this.defaultPrevented = true;
  };
  var mi = (function() {
    if (!A.addEventListener || !Object.defineProperty) return false;
    var a = false, b = Object.defineProperty({}, "passive", {
      get: /* @__PURE__ */ __name(function() {
        a = true;
      }, "get")
    });
    try {
      var c = n();
      A.addEventListener("test", c, b);
      A.removeEventListener("test", c, b);
    } catch (d) {
    }
    return a;
  })();
  function ni(a, b) {
    li.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.timeStamp = 0;
    this.j = null;
    a && this.init(a, b);
  }
  __name(ni, "ni");
  C(ni, li);
  ni.prototype.init = function(a, b) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    b = a.relatedTarget;
    b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
    this.relatedTarget = b;
    d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = a.offsetX, this.offsetY = a.offsetY, this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = a.pointerType;
    this.state = a.state;
    this.timeStamp = a.timeStamp;
    this.j = a;
    a.defaultPrevented && ni.W.preventDefault.call(this);
  };
  ni.prototype.stopPropagation = function() {
    ni.W.stopPropagation.call(this);
    this.j.stopPropagation ? this.j.stopPropagation() : this.j.cancelBubble = true;
  };
  ni.prototype.preventDefault = function() {
    ni.W.preventDefault.call(this);
    var a = this.j;
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
  };
  var oi = "closure_listenable_" + (Math.random() * 1e6 | 0);
  var pi = 0;
  function qi(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.handler = e;
    this.key = ++pi;
    this.removed = this.ia = false;
  }
  __name(qi, "qi");
  function ri(a) {
    a.removed = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.handler = null;
  }
  __name(ri, "ri");
  ;
  function si(a) {
    this.src = a;
    this.j = {};
    this.l = 0;
  }
  __name(si, "si");
  si.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.j[f];
    a || (a = this.j[f] = [], this.l++);
    var g = ti(a, b, d, e);
    g > -1 ? (b = a[g], c || (b.ia = false)) : (b = new qi(b, this.src, f, !!d, e), b.ia = c, a.push(b));
    return b;
  };
  si.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.j)) return false;
    var e = this.j[a];
    b = ti(e, b, c, d);
    return b > -1 ? (ri(e[b]), Array.prototype.splice.call(e, b, 1), e.length == 0 && (delete this.j[a], this.l--), true) : false;
  };
  function ui(a, b) {
    var c = b.type;
    c in a.j && ab(a.j[c], b) && (ri(b), a.j[c].length == 0 && (delete a.j[c], a.l--));
  }
  __name(ui, "ui");
  si.prototype.removeAll = function(a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.j)
      if (!a || c == a) {
        for (var d = this.j[c], e = 0; e < d.length; e++) ++b, ri(d[e]);
        delete this.j[c];
        this.l--;
      }
    return b;
  };
  function ti(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.handler == d) return e;
    }
    return -1;
  }
  __name(ti, "ti");
  ;
  var vi = "closure_lm_" + (Math.random() * 1e6 | 0), wi = {}, xi = 0;
  function yi(a, b, c, d, e) {
    if (d && d.once) return zi(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) yi(a, b[f], c, d, e);
      return null;
    }
    c = Ai(c);
    return a && a[oi] ? a.listen(b, c, Ka(d) ? !!d.capture : !!d, e) : Bi(a, b, c, false, d, e);
  }
  __name(yi, "yi");
  function Bi(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = Ka(e) ? !!e.capture : !!e, h = Di(a);
    h || (a[vi] = h = new si(a));
    c = h.add(b, c, d, g, f);
    if (c.proxy) return c;
    d = Ei();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) mi || (e = g), e === void 0 && (e = false), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Fi(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    xi++;
    return c;
  }
  __name(Bi, "Bi");
  function Ei() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    __name(a, "a");
    var b = Gi;
    return a;
  }
  __name(Ei, "Ei");
  function zi(a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) zi(a, b[f], c, d, e);
      return null;
    }
    c = Ai(c);
    return a && a[oi] ? a.l.add(String(b), c, true, Ka(d) ? !!d.capture : !!d, e) : Bi(a, b, c, true, d, e);
  }
  __name(zi, "zi");
  function Hi(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) Hi(a, b[f], c, d, e);
    else (d = Ka(d) ? !!d.capture : !!d, c = Ai(c), a && a[oi]) ? a.l.remove(String(b), c, d, e) : a && (a = Di(
      a
    )) && (b = a.j[b.toString()], a = -1, b && (a = ti(b, c, d, e)), (c = a > -1 ? b[a] : null) && Ii(c));
  }
  __name(Hi, "Hi");
  function Ii(a) {
    if (typeof a !== "number" && a && !a.removed) {
      var b = a.src;
      if (b && b[oi]) ui(b.l, a);
      else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(
          Fi(c),
          d
        ) : b.addListener && b.removeListener && b.removeListener(d);
        xi--;
        (c = Di(b)) ? (ui(c, a), c.l == 0 && (c.src = null, b[vi] = null)) : ri(a);
      }
    }
  }
  __name(Ii, "Ii");
  function Fi(a) {
    return a in wi ? wi[a] : wi[a] = "on" + a;
  }
  __name(Fi, "Fi");
  function Gi(a, b) {
    if (a.removed) a = true;
    else {
      b = new ni(b, this);
      var c = a.listener, d = a.handler || a.src;
      a.ia && Ii(a);
      a = c.call(d, b);
    }
    return a;
  }
  __name(Gi, "Gi");
  function Di(a) {
    a = a[vi];
    return a instanceof si ? a : null;
  }
  __name(Di, "Di");
  var Ji = "__closure_events_fn_" + (Math.random() * 1e9 >>> 0);
  function Ai(a) {
    if (typeof a === "function") return a;
    a[Ji] || (a[Ji] = function(b) {
      return a.handleEvent(b);
    });
    return a[Ji];
  }
  __name(Ai, "Ai");
  kg(function(a) {
    Gi = a(Gi);
  });
  function Ki(a, b) {
    li.call(this, a);
    this.error = b;
  }
  __name(Ki, "Ki");
  x(Ki, li);
  var Li = /\/d\/([^\/]+)/, Mi = /\/r\/([^\/]+)/;
  function Ni(a) {
    a = a.match(Vf)[5] || null;
    return Li.test(a);
  }
  __name(Ni, "Ni");
  function Oi(a, b) {
    if (Ni(a)) {
      Ni(a);
      a = a.match(Vf);
      var c = a[5];
      c = c.replace(b, "");
      b = Uf(a[1], a[2], a[3], a[4], c, a[6], a[7]);
    } else b = a;
    return b;
  }
  __name(Oi, "Oi");
  ;
  function Z() {
    X.call(this);
    this.l = new si(this);
    this.Sa = this;
    this.R = null;
  }
  __name(Z, "Z");
  C(Z, X);
  Z.prototype[oi] = true;
  q = Z.prototype;
  q.addEventListener = function(a, b, c, d) {
    yi(this, a, b, c, d);
  };
  q.removeEventListener = function(a, b, c, d) {
    Hi(this, a, b, c, d);
  };
  q.dispatchEvent = function(a) {
    var b = this.R;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.R) c.push(b), ++d;
    }
    b = this.Sa;
    d = a.type || a;
    if (typeof a === "string") a = new li(a, b);
    else if (a instanceof li) a.target = a.target || b;
    else {
      var e = a;
      a = new li(d, b);
      Rh(a, e);
    }
    e = true;
    var f;
    if (c)
      for (f = c.length - 1; !a.l && f >= 0; f--) {
        var g = a.currentTarget = c[f];
        e = Pi(g, d, true, a) && e;
      }
    a.l || (g = a.currentTarget = b, e = Pi(g, d, true, a) && e, a.l || (e = Pi(g, d, false, a) && e));
    if (c)
      for (f = 0; !a.l && f < c.length; f++) g = a.currentTarget = c[f], e = Pi(g, d, false, a) && e;
    return e;
  };
  q.N = function() {
    Z.W.N.call(this);
    this.l && this.l.removeAll(void 0);
    this.R = null;
  };
  q.listen = function(a, b, c, d) {
    return this.l.add(String(a), b, false, c, d);
  };
  function Pi(a, b, c, d) {
    b = a.l.j[String(b)];
    if (!b) return true;
    b = b.concat();
    for (var e = true, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.capture == c) {
        var h = g.listener, k = g.handler || g.src;
        g.ia && ui(a.l, g);
        e = h.call(k, d) !== false && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  __name(Pi, "Pi");
  ;
  function Qi(a, b) {
    if (typeof a !== "function")
      if (a && typeof a.handleEvent == "function") a = B(a.handleEvent, a);
      else throw Error("Invalid listener argument");
    return Number(b) > 2147483647 ? -1 : A.setTimeout(a, b || 0);
  }
  __name(Qi, "Qi");
  function Ri() {
    var a = null;
    return new wg(function(b, c) {
      a = Qi(function() {
        b(void 0);
      }, 14e3);
      a == -1 && c(Error("Failed to schedule timer."));
    }).ta(function(b) {
      A.clearTimeout(a);
      throw b;
    });
  }
  __name(Ri, "Ri");
  ;
  function Si(a, b, c) {
    X.call(this);
    this.j = a;
    this.o = b || 0;
    this.l = c;
    this.v = B(this.hb, this);
  }
  __name(Si, "Si");
  C(Si, X);
  q = Si.prototype;
  q.ha = 0;
  q.N = function() {
    Si.W.N.call(this);
    this.stop();
    delete this.j;
    delete this.l;
  };
  q.start = function(a) {
    this.stop();
    this.ha = Qi(this.v, a !== void 0 ? a : this.o);
  };
  q.stop = function() {
    this.isActive() && A.clearTimeout(this.ha);
    this.ha = 0;
  };
  q.isActive = function() {
    return this.ha != 0;
  };
  q.hb = function() {
    this.ha = 0;
    this.j && this.j.call(this.l);
  };
  function Ti(a, b, c, d) {
    X.call(this);
    this.o = d != null ? d : 0.15;
    this.A = a;
    this.v = b;
    this.F = c;
    this.j = new Si(this.ub, void 0, this);
    this.B = Number.NEGATIVE_INFINITY;
    this.l = 0;
  }
  __name(Ti, "Ti");
  x(Ti, X);
  q = Ti.prototype;
  q.isActive = function() {
    return this.j.isActive();
  };
  q.start = function() {
    Ui(this, false, false);
  };
  function Ui(a, b, c) {
    b && (a.j.stop(), Vi(a, a.v));
    a.isActive() || (b = Math.max(0, a.B + a.l - Date.now()), b == 0 && (c ? b = Vi(a, a.v) : a.l = 0), a.j.start(b));
  }
  __name(Ui, "Ui");
  q.stop = function() {
    this.j.stop();
  };
  function Vi(a, b) {
    b > 0 && a.o != 0 && (b = Math.floor(b * (1 - a.o + Math.random() * a.o * 2)));
    return a.l = b;
  }
  __name(Vi, "Vi");
  q.ub = function() {
    this.B = Date.now();
    Vi(this, Math.min(Math.max(this.l * 2, this.v), this.F));
    this.A();
  };
  q.N = function() {
    this.j.dispose();
    delete this.j;
    delete this.A;
    X.prototype.N.call(this);
  };
  function Wi(a) {
    X.call(this);
    this.l = a;
    this.j = {};
  }
  __name(Wi, "Wi");
  C(Wi, X);
  var Xi = [];
  Wi.prototype.listen = function(a, b, c, d) {
    Array.isArray(b) || (b && (Xi[0] = b.toString()), b = Xi);
    for (var e = 0; e < b.length; e++) {
      var f = yi(a, b[e], c || this.handleEvent, d || false, this.l || this);
      if (!f) break;
      this.j[f.key] = f;
    }
    return this;
  };
  Wi.prototype.removeAll = function() {
    Oh(this.j, function(a, b) {
      this.j.hasOwnProperty(b) && Ii(a);
    }, this);
    this.j = {};
  };
  Wi.prototype.N = function() {
    Wi.W.N.call(this);
    this.removeAll();
  };
  Wi.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function Yi(a, b, c, d, e, f, g) {
    g = g === void 0 ? true : g;
    X.call(this);
    var h = this;
    this.j = a;
    this.j.O = 1e4;
    this.da = b;
    this.o = f;
    this.l = new Ti(function() {
      return h.za();
    }, 3e4, 36e5);
    this.A = 0;
    this.F = null;
    this.S = new vh("errorsender", 1, 8, d);
    dg(this, this.S);
    this.R = false;
    this.L = null;
    this.B = /* @__PURE__ */ new Set();
    this.J = new Wi(this);
    this.ea = c || 10;
    this.U = e || null;
    this.J.listen(this.j, "complete", this.pb);
    this.J.listen(this.j, "ready", this.za);
    this.P = null;
    this.M = new Mh();
    dg(this, this.M);
    this.o && Nh(this.M, this.o.l(), function() {
      h.o.getState().j >= 3 && (h.P = (Jh(), Ih));
      h.o.getState().j >= 3 || h.P !== (Jh(), Ih) || Zi(h);
    });
    this.O = g;
    this.V = {};
  }
  __name(Yi, "Yi");
  x(Yi, X);
  q = Yi.prototype;
  q.send = function(a, b, c, d) {
    ph(this.da.get("docs-dafjera")) && (a = Oi(Oi(a, Mi), Li));
    var e = $g($g(gh(this.v.length), function(f) {
      if (!(f >= this.ea)) return this.O && (a = W(a, "errorSender_enqueueTimeMs", Date.now().toString())), f = {}, f.u = a, f.m = b, f.c = c, f.h = d, this.enqueue(f);
    }, this), this.za, this);
    bh(e, function() {
      this.B.delete(e);
    }, this);
    this.B.add(e);
  };
  function $i(a) {
    return Fg(Array.from(a.B.values())).then(n());
  }
  __name($i, "$i");
  q.za = function() {
    var a = this.o && this.o.getState().j >= 3, b = this.na() || this.j.isActive() || this.l.isActive() || this.R;
    return a || b ? gh() : aj(this);
  };
  function aj(a) {
    return (function() {
      return $g(gh(a.v[0] !== void 0 ? a.v[0] : null), function(b) {
        return bj(a, b);
      });
    })();
  }
  __name(aj, "aj");
  function bj(a, b) {
    if (a.l.isActive() || a.j.isActive() || a.R) return gh();
    if (!b) return a.l.stop(), gh();
    if (b.u.length > 4e3) return cj(a);
    try {
      xh(a.S);
      a.L = new Tg();
      var c = b.u;
      a.U != null && (c = W(c, "reportingSessionId", a.U));
      a.A > 0 && (c = W(c, "retryCount", a.A));
      a.F != null && (c = W(c, "previousErrorSendStatus", a.F));
      a.O && (c = W(c, "errorSender_sendTimeMs", Date.now().toString()), c = W(c, "errorSenderType", a.Ka()), b.errorSender_frontIndex && (c = W(c, "errorSender_frontIndex", b.errorSender_frontIndex)), b.errorSender_nextIndex && (c = W(
        c,
        "errorSender_nextIndex",
        b.errorSender_nextIndex
      )), b.errorSender_queueSize && (c = W(c, "errorSender_queueSize", b.errorSender_queueSize)));
      a.V = b;
      var d = b.m, e = b.c, f = b.h;
      return $g($g(cj(a), function() {
        a.j.send(c, d, e, f);
      }), function() {
        return a.L;
      });
    } catch (g) {
      if (vf(g) instanceof uh) a.R = true;
      else throw Jf(g, {
        "docs-origin-class": "docs.debug.ErrorSender"
      });
    }
    return gh();
  }
  __name(bj, "bj");
  q.pb = function() {
    var a = dj(this.j), b = this.L, c = ej(this.j) || a >= 400 && a <= 500, d = this.A > 3;
    c || d ? (this.A = 0, this.F = null, this.l.stop(), $g(gh(), function() {
      Vg(b);
      Wg(b, true);
    })) : (this.A++, this.F = a === -1 ? this.j.B : a, Zi(this), this.enqueue(this.V), Vg(b), Wg(b, true));
  };
  function Zi(a) {
    a.A != 1 || a.l.isActive() ? a.l.start() : Ui(a.l, true, true);
  }
  __name(Zi, "Zi");
  q.N = function() {
    cg(this.J, this.l, this.j, this.M);
    this.B.clear();
    X.prototype.N.call(this);
  };
  q.Ka = ba("BaseErrorSender");
  function fj(a, b, c, d, e) {
    Yi.call(this, a, b, c, void 0, d, e, void 0);
    this.v = [];
  }
  __name(fj, "fj");
  x(fj, Yi);
  fj.prototype.enqueue = function(a) {
    this.v.push(a);
    return gh();
  };
  function cj(a) {
    a.v.shift();
    return gh();
  }
  __name(cj, "cj");
  fj.prototype.Ka = ba("MemoryErrorSender");
  fj.prototype.N = function() {
    delete this.v;
    Yi.prototype.N.call(this);
  };
  function gj() {
    var a = a === void 0 ? false : a;
    if (a === void 0 ? 0 : a) throw Error(
      "A module ID must be set on the Fava ServiceId a in order to modify extra edges."
    );
  }
  __name(gj, "gj");
  gj.prototype.toString = ba("a");
  new gj();
  function hj(a) {
    this.j = Cd(je(), Hc(a));
    a = pd(this.j, 1);
    this.l = Math.floor(Math.random() * 100) < a;
  }
  __name(hj, "hj");
  hj.prototype.toString = function() {
    var a = "{bool=" + !(this.l ? !od(this.j, 5) : !od(this.j, 2)) + ', string="', b = this.l ? td(this.j, 6) : rd(this.j, 3);
    a = a + (b != null ? String(b) : "") + '", int=';
    b = this.l ? qc(K(this.j, 7, void 0, Tc)) : pd(this.j, 4, -1);
    return a + (b != null ? Number(b) : -1) + "}";
  };
  function ij(a) {
    this.j = /* @__PURE__ */ new Map();
    this.l = [];
    if (a = a.get("docs-cei")) {
      var b = a.i;
      b && bb(this.l, b);
      a = a.cf || {};
      for (var c in a) this.j.set(c, new hj(a[c]));
    }
  }
  __name(ij, "ij");
  ij.prototype.get = function(a) {
    return this.j.get(a) || null;
  };
  function jj() {
    for (var a in Array.prototype) return false;
    return true;
  }
  __name(jj, "jj");
  ;
  var kj = [
    'window[("_callback_" + expid)] is not a function',
    "Cannot read properties of null (reading 'readyState')",
    "request failed on client side"
  ], lj = [/(undefined|constructor).*YT|YT.*(undefined|constructor)/];
  function yd(a) {
    this.j = a;
  }
  __name(yd, "yd");
  function Bd(a) {
    var b = a.j;
    if (b == null) return null;
    if (typeof b === "string") return b;
    throw new TypeError("Invalid string data <K1cgmc>: " + a.j + " (typeof " + typeof a.j + ")");
  }
  __name(Bd, "Bd");
  yd.prototype.toString = function() {
    var a = Bd(this);
    if (a === null) throw Error("Data K1cgmc not defined.");
    return a;
  };
  function mj(a) {
    this.C = J(a);
  }
  __name(mj, "mj");
  x(mj, M);
  mj.prototype.qa = function(a) {
    ud(this, 7, a);
  };
  function nj(a) {
    this.C = J(a);
  }
  __name(nj, "nj");
  x(nj, M);
  function oj(a) {
    return kd(a, mj, ed(a, pj, 4));
  }
  __name(oj, "oj");
  var pj = [4, 5];
  function qj(a) {
    this.C = J(a);
  }
  __name(qj, "qj");
  x(qj, M);
  function rj(a) {
    this.C = J(a);
  }
  __name(rj, "rj");
  x(rj, M);
  function Ad(a) {
    this.C = J(a);
  }
  __name(Ad, "Ad");
  x(Ad, M);
  function sj(a) {
    return kd(a, nj, 1);
  }
  __name(sj, "sj");
  ;
  function tj() {
    this.j = xd();
  }
  __name(tj, "tj");
  tj.prototype.fa = function() {
    var a = /* @__PURE__ */ new Map(), b, c = (b = this.j) == null ? void 0 : oj(sj(b));
    if (c == null ? 0 : pc(K(c, 2)) != null) {
      var d;
      (b = (d = sd(c, 2)) == null ? void 0 : d.toString()) && a.set("canaryanalysisservertestgroup", b);
      if (c == null) var e = void 0;
      else if ((c = ld(c, ee, 3)) == null) e = void 0;
      else {
        d = Number;
        e = e === void 0 ? "0" : e;
        b = K(c, 1, void 0, void 0, uc);
        var f = f === void 0 ? false : f;
        var g = typeof b;
        b == null ? f = b : g === "bigint" ? f = String(hc(64, b)) : oc(b) ? g === "string" ? (f = b, oc(f), b = kc(Number(f)), ic(b) ? f = String(b) : (b = f.indexOf("."), b !== -1 && (f = f.substring(
          0,
          b
        )), f = rc(f))) : f = f ? tc(b) : sc(b) : f = void 0;
        e = d(f != null ? f : e);
        c = pd(c, 2);
        e = new Date(e * 1e3 + c / 1e6).valueOf().toString();
      }
      e && a.set("serverstarttimemillis", e);
    }
    var h, k;
    (e = (h = this.j) == null ? void 0 : (k = ld(h, nj, 1)) == null ? void 0 : sd(k, 6)) && a.set(
      "clientApp",
      String(e)
    );
    return a;
  };
  function uj(a, b) {
    this.width = a;
    this.height = b;
  }
  __name(uj, "uj");
  q = uj.prototype;
  q.clone = function() {
    return new uj(this.width, this.height);
  };
  q.aspectRatio = function() {
    return this.width / this.height;
  };
  q.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  q.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  q.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function vj(a) {
    var b = document;
    a = String(a);
    b.contentType === "application/xhtml+xml" && (a = a.toLowerCase());
    return b.createElement(a);
  }
  __name(vj, "vj");
  ;
  function wj() {
    function a() {
    }
    __name(a, "a");
    this.j = a.call.bind(a.toString);
  }
  __name(wj, "wj");
  wj.prototype.fa = function() {
    var a = /* @__PURE__ */ new Map();
    xj() && a.set("apps_telemetry.screen_tampered", "true");
    a: {
      var b = y(Array.prototype), c = b.next(), d;
      try {
        for (; !c.done; c = b.next()) {
          var e = true;
          break a;
        }
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
      e = false;
    }
    e && a.set("apps_telemetry.array_prototype_tampered", "true");
    yj() || a.set("apps_telemetry.canvas_creation_broken", "true");
    !zj() && A.navigator && A.navigator.webdriver && a.set("apps_telemetry.webdriver", "true");
    e = false;
    b = y(Aj);
    c = b.next();
    var f;
    try {
      for (; !c.done; c = b.next()) {
        var g = c.value, h = Bj(g.key);
        h === 0 ? (a.set("apps_telemetry.automation_property_present." + g.T, "true"), e = true) : h === 2 && a.set("apps_telemetry.automation_property_check_failed." + g.T, "true");
      }
    } finally {
      c && !c.done && (f = b.return) && f.call(b);
    }
    e && a.set("apps_telemetry.automation_detected", "true");
    f = false;
    g = y(Cj);
    h = g.next();
    var k;
    try {
      for (; !h.done; h = g.next()) {
        var l = h.value, m = l.T, r = Dj(this, l.name, l.Ja);
        if (!r.ca) {
          var t = r.reason;
          a.set("apps_telemetry.native_function_tampering." + m + ".reason", t);
          t === "non_function_type" && a.set("apps_telemetry.native_function_tampering." + m + ".type", r.type);
          f = true;
        }
      }
    } finally {
      h && !h.done && (k = g.return) && k.call(g);
    }
    f && a.set("apps_telemetry.native_function_tampering_detected", "true");
    return a;
  };
  function xj() {
    if (zj()) return false;
    var a = A.screen, b = !(a instanceof Screen);
    if (db || cb) return b;
    try {
      var c = n();
      a.addEventListener("change", c);
      a.removeEventListener("change", c);
    } catch (d) {
      b = true;
    }
    return b;
  }
  __name(xj, "xj");
  function yj() {
    function a(b) {
      try {
        var c = new uj(1, 500);
        return (b ? vj("CANVAS") : new OffscreenCanvas(c.width, c.height)).getContext("2d") != null;
      } catch (d) {
        return false;
      }
    }
    __name(a, "a");
    return a(false) && (zj() || a(true));
  }
  __name(yj, "yj");
  function zj() {
    return "WorkerGlobalScope" in A && typeof A.WorkerGlobalScope === "function" && self instanceof A.WorkerGlobalScope;
  }
  __name(zj, "zj");
  function Bj(a) {
    if (zj() || !A) return 1;
    try {
      if (a in A || A.document && a in A.document) return 0;
    } catch (b) {
      return 2;
    }
    return 1;
  }
  __name(Bj, "Bj");
  function Dj(a, b, c) {
    try {
      var d = c();
    } catch (f) {
      return {
        ca: false,
        reason: "not_reachable"
      };
    }
    c = Ej(d);
    if (c !== "function") return {
      ca: false,
      reason: "non_function_type",
      type: c
    };
    try {
      var e = a.j(d);
    } catch (f) {
      return {
        ca: false,
        reason: "to_string_failed"
      };
    }
    a = Fj.exec(e);
    return a ? (a = a[1]) ? a !== b ? {
      ca: false,
      reason: "likely_wrong_native_function"
    } : {
      ca: true
    } : {
      ca: false,
      reason: "likely_bound_function"
    } : {
      ca: false,
      reason: "likely_non_native_source"
    };
  }
  __name(Dj, "Dj");
  function Ej(a) {
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
  __name(Ej, "Ej");
  var Aj = [{
    key: "Cypress",
    T: "cypress"
  }, {
    key: "$cdc_asdjflasutopfhvcZLmcfl_",
    T: "selenium"
  }, {
    key: "$wdc_",
    T: "chrome_driver"
  }, {
    key: "domAutomationController",
    T: "chromium_automation"
  }, {
    key: "callPhantom",
    T: "phantomjs"
  }, {
    key: "windmill",
    T: "windmill"
  }, {
    key: "____LocationIntercept",
    T: "awesomium"
  }, {
    key: "awesomium",
    T: "awesomium"
  }, {
    key: "ubot",
    T: "ubot"
  }, {
    key: "cefsharp_CreatePromise",
    T: "cefsharp"
  }, {
    key: "__nightmare",
    T: "nightmare"
  }], Cj = [{
    name: "getOwnPropertyDescriptor",
    Ja: /* @__PURE__ */ __name(function() {
      return Object.getOwnPropertyDescriptor;
    }, "Ja"),
    T: "Object.getOwnPropertyDescriptor"
  }, {
    name: "addEventListener",
    Ja: /* @__PURE__ */ __name(function() {
      return A.addEventListener;
    }, "Ja"),
    T: "global.addEventListener"
  }], Fj = /^function\s*(?:\s([a-zA-Z_$][\w$]+))?\(\) \{\s+\[native code\]\s+\}$/;
  var Gj = [], Hj = [], Ij = [RegExp("^_0x[a-f0-9]{6} is not defined$"), RegExp("[Zz]otero"), RegExp(
    '^Not found$|^Unknown Error of type "string": Not found$'
  )], Jj = "egfdjlfmgnehecnclamagfafdccgfndp mndnfokpggljbaajbnioimlmbfngpief mlkejohendkgipaomdopolhpbihbhfnf kgonammgkackdilhodbgbmodpepjocdp klbcgckkldhdhonijdbnhhaiedfkllef pmehocpgjmkenlokgjfkaichfjdhpeol cjlaeehoipngghikfjogbdkpbdgebppb ghbmnnjooekpmoecnnnilnnbdlolhkhi lmjegmlicamnimmfhcmpkclmigmmcbeh gmbmikajjgmnabiglmofipeabaddhgne lpcaedmchfhocbbapmcbpinfpgnhiddi gbkeegbaiigmenfmjfclcdgdpimamgkj adokjfanaflbkibffcbhihgihpgijcei iklnnbgdcppplombffihcijanngoeifm".split(" "), Kj = [RegExp("chrome-extension://([^/]+)", "g"), RegExp("moz-extension://([^/]+)", "g"), RegExp(
    "ms-browser-extension://([^/]+)",
    "g"
  ), RegExp("webkit-masked-url://([^/]+)", "g"), RegExp(
    "safari-web-extension://([^/]+)",
    "g"
  )], Lj = [RegExp("^Permission denied$"), RegExp("index out of range: \\d+ \\+ \\d+ > \\d+"), RegExp(
    "getReadMode(Config|Render|Extract)"
  )], Mj = [RegExp("at file:///|@file:///|phantomjs|node:electron|py-scrap|eval code|Program Files"), RegExp(
    "_0x[a-f0-9]+.*anonymous"
  )], Nj = [
    RegExp("Script https://meet\\.google\\.com/.*meetsw.*load failed"),
    RegExp("A bad HTTP response code \\(\\d+\\) was received when fetching the script")
  ], Oj = [RegExp("Error loading.*Consecutive load failures"), RegExp(
    "Failed to load module.*Consecutive load failures"
  )];
  function Pj(a, b) {
    this.ua = a;
    this.ka = b;
  }
  __name(Pj, "Pj");
  function Qj(a, b) {
    return (b = a.j(b)) ? {
      ua: a.ua,
      ka: a.ka,
      Ba: b.toUpperCase()
    } : null;
  }
  __name(Qj, "Qj");
  ;
  function Rj() {
    Pj.call(this, 1, 1);
  }
  __name(Rj, "Rj");
  x(Rj, Pj);
  Rj.prototype.j = function(a) {
    a: {
      a = Sj(a);
      var b = false, c = y(Kj), d = c.next(), e;
      try {
        for (; !d.done; d = c.next()) {
          var f = a.matchAll(d.value), g = y(f), h = g.next(), k;
          try {
            for (; !h.done; h = g.next()) {
              var l = h.value[1];
              if (l) {
                if (Jj.includes(l)) {
                  var m = false;
                  break a;
                }
                b = true;
              }
            }
          } finally {
            h && !h.done && (k = g.return) && k.call(g);
          }
        }
      } finally {
        d && !d.done && (e = c.return) && e.call(c);
      }
      m = b;
    }
    return m ? "warning" : null;
  };
  function Tj(a, b, c) {
    c = c === void 0 ? Uj : c;
    Pj.call(this, a, b);
    this.l = c;
  }
  __name(Tj, "Tj");
  x(Tj, Pj);
  Tj.prototype.j = function(a) {
    var b = typeof a.l.get("apps_telemetry.cross_origin_scripts") === "string" ? a.l.get(
      "apps_telemetry.cross_origin_scripts"
    ) : "", c = a.l.get("apps_telemetry.native_function_tampering_detected") === "true", d = Sj(a), e = d.includes("blob:"), f = y(this.l), g = f.next(), h;
    try {
      for (; !g.done; g = f.next()) {
        var k = g.value, l = k.errorMessage, m = k.Ca, r = m === void 0 ? [] : m, t = k.Y, w = t === void 0 ? [] : t, u = k.pa, L = u === void 0 ? false : u, E = k.Ha, ka = k.rb, R = ka === void 0 ? false : ka;
        if ((E === void 0 ? 0 : E) ? a.message === l : d.includes(l)) {
          var Ja = r.some(function(yf) {
            return b.includes(yf);
          }), Ci = w.some(function(yf) {
            return a.j.includes(yf);
          });
          r = L && e;
          R = R && c;
          if (Ja || Ci || r || R) return "warning";
        }
      }
    } finally {
      g && !g.done && (h = f.return) && h.call(f);
    }
    return null;
  };
  var Uj = [{
    errorMessage: "Cannot read properties of undefined (reading 'addListener')",
    pa: true,
    Ca: ["infird.com"]
  }, {
    errorMessage: "browser_polyfill_default(...).runtime.getManifest is not a function",
    pa: true,
    Ca: ["infird.com"]
  }, {
    errorMessage: 'fileName":',
    Ca: ["walkme.com"]
  }, {
    errorMessage: "] is not a function",
    pa: true
  }, {
    errorMessage: "(reading 'toLowerCase')",
    pa: true,
    Y: ["__aiNetCmd__"]
  }, {
    errorMessage: "Cannot read properties of undefined",
    Y: ["recaptcha"]
  }, {
    errorMessage: "a is not defined",
    Ha: true,
    Y: ["<anonymous>"]
  }, {
    errorMessage: "i is not defined",
    Ha: true,
    Y: ["<anonymous>"]
  }, {
    errorMessage: "Failed to fetch",
    Y: ["__DLD__", "frontend.min.js"]
  }, {
    errorMessage: "Maximum call stack size exceeded",
    rb: true
  }, {
    errorMessage: "Unexpected end of JSON input",
    Y: ["facebook.net"]
  }];
  function Vj(a, b, c, d, e) {
    e = e === void 0 ? /* @__PURE__ */ new Map() : e;
    this.message = a;
    this.j = b;
    this.cause = c;
    this.o = d;
    this.l = e;
  }
  __name(Vj, "Vj");
  function Wj(a) {
    return (a = a.cause) ? a.message + "\n" + a.j + "\n" + Wj(a) : "";
  }
  __name(Wj, "Wj");
  function Sj(a) {
    return a.message + "\n" + a.j + "\n" + Wj(a);
  }
  __name(Sj, "Sj");
  function Xj() {
    this.o = this.j = this.message = "";
    this.l = /* @__PURE__ */ new Map();
  }
  __name(Xj, "Xj");
  function Yj(a, b) {
    a.message = b;
    return a;
  }
  __name(Yj, "Yj");
  function Zj(a) {
    return new Vj(a.message, a.j, a.cause, a.o, a.l);
  }
  __name(Zj, "Zj");
  ;
  function ak(a) {
    return a instanceof Error || a && a.message !== void 0 ? a.message : bk(a);
  }
  __name(ak, "ak");
  function ck(a) {
    return a instanceof Error || a && a.stack !== void 0 ? a.stack || "" : "";
  }
  __name(ck, "ck");
  function dk(a, b) {
    var c = a && a.cause !== void 0;
    if (b >= 3 || !c) return null;
    c = new Xj();
    a = a.cause;
    if (ek(a)) {
      if (Yj(c, ak(a)), c.j = ck(a), b = dk(a, b + 1)) c.cause = b;
    } else Yj(c, bk(a));
    return Zj(c);
  }
  __name(dk, "dk");
  function ek(a) {
    return a instanceof Error || !!a && a.message !== void 0 && a.stack !== void 0;
  }
  __name(ek, "ek");
  function bk(a) {
    try {
      return ek(a) ? a.message + "\n" + a.stack : a && a instanceof Object ? JSON.stringify(a) : String(a);
    } catch (b) {
      return String(a);
    }
  }
  __name(bk, "bk");
  function fk(a, b, c) {
    c = c === void 0 ? /* @__PURE__ */ new Map() : c;
    var d = Yj(new Xj(), ak(a));
    d.j = ck(a);
    d.l = c;
    if (a = dk(a, 0)) d.cause = a;
    b && (d.o = b);
    return Zj(d);
  }
  __name(fk, "fk");
  ;
  function gk(a, b, c, d) {
    Pj.call(this, c, d);
    this.l = a;
    this.o = b;
  }
  __name(gk, "gk");
  x(gk, Pj);
  gk.prototype.j = function(a) {
    var b = Wj(a);
    return hk(a.message, this.l) || hk(a.j, this.o) || hk(b, this.l) || hk(b, this.o) ? "warning" : null;
  };
  function hk(a, b) {
    b = y(b);
    var c = b.next(), d;
    try {
      for (; !c.done; c = b.next())
        if (c.value.test(a)) return true;
    } finally {
      c && !c.done && (d = b.return) && d.call(b);
    }
    return false;
  }
  __name(hk, "hk");
  ;
  function ik(a, b, c, d, e) {
    Pj.call(this, c, d);
    this.l = a;
    this.Y = b;
    this.matchType = e;
  }
  __name(ik, "ik");
  x(ik, Pj);
  ik.prototype.j = function(a) {
    switch (this.matchType) {
      case 0:
        a: {
          var b = a.message, c = y(this.l);
          a = c.next();
          var d;
          try {
            for (; !a.done; a = c.next())
              if (b === a.value) {
                var e = true;
                break a;
              }
          } finally {
            a && !a.done && (d = c.return) && d.call(c);
          }
          e = false;
        }
        return e ? "warning" : null;
      case 1:
        a: {
          e = a.message;
          d = y(this.l);
          a = d.next();
          try {
            for (; !a.done; a = d.next())
              if (e.startsWith(a.value)) {
                b = true;
                break a;
              }
          } finally {
            a && !a.done && (c = d.return) && c.call(d);
          }
          b = false;
        }
        return b ? "warning" : null;
      case 2:
        return e = Sj(a), jk(e, this.l) || jk(e, this.Y) ? "warning" : null;
      default:
        return null;
    }
  };
  function jk(a, b) {
    b = y(b);
    var c = b.next(), d;
    try {
      for (; !c.done; c = b.next())
        if (a.includes(c.value)) return true;
    } finally {
      c && !c.done && (d = b.return) && d.call(b);
    }
    return false;
  }
  __name(jk, "jk");
  function kk(a, b, c) {
    return new ik(a, b, c, 0, 2);
  }
  __name(kk, "kk");
  ;
  function lk(a, b, c) {
    Pj.call(this, a, b);
    this.l = c();
  }
  __name(lk, "lk");
  x(lk, Pj);
  lk.prototype.j = function() {
    return this.l ? null : "unsupported_severe";
  };
  var mk = [
    new Rj(),
    kk(
      `Trusted Type;TrustedHTML;TrustedScript;cannot communicate with background;zaloJSV2;kaspersky-labs;@user-script;Object Not Found Matching Id;contextChanged;Not implemented on this platform;Extension context invalidated;neurosurgeonundergo;realTimeClData;Failed to execute 'querySelectorAll' on 'Document';Promise.all(...).then(...).catch(...).finally is not a function;Error executing Chrome API, chrome.tabs;Identifier 'originalPrompt' has already been declared;User rejected the request;Could not inject ethereum provider because it's not your default extension;Cannot redefine property: googletag;Can't find variable: HTMLDialogElement;Identifier 'listenerName' has already been declared;Cannot read properties of undefined (reading 'info');Permission denied to access property "type";Error: Promise timed out;Request timeout ToolbarStatus;Can't find variable: nc;imtgo;ton is not a function;__renderMessageNode is not defined;Cannot redefine property: ethereum;unknown action:;Receiving end does not exist;get-frame-manager-configuration;Key not found;'isAWS';Identifier 'contentScriptListenerRegistered' has already been declared;window.ethereum.selectedAddress;extDomain is not defined;No Listener: tabs:outgoing.message.ready;This script should only be loaded in a browser extension;Identifier 'initCoreHelpers' has already been declared;undefined is not an object (evaluating 't.tab.customFillData');No tab with id:;The browser is shutting down.;User mapping loading timeout;Internal JSON-RPC error;TOKEN_EXPIRED;A listener indicated an asynchronous response by returning true;You must authenticate your request with an API key`.split(";"),
      "puppeteer;kaspersky-labs;@user-script;jsQuilting;linkbolic;neurosurgeonundergo;tlscdn;https://cdnjs.cloudflare.com/ajax/libs/mathjax/;secured-pixel.com;Can't find variable: nc;imtgo;_simulateEvent;goguardian".split(";"),
      1
    ),
    new gk(Ij, Hj, 1, 0),
    kk(
      `status is 0, navigator.onLine =;Network sync is disabled. Aborting a network request of int type;The service is currently unavailable.;Internal error encountered.;data does not exist in AF cache;There was an error during the transport or processing of this request;Failed to load gapi;Rpc failed due to xhr error. error code: 6, error:  [0];An interceptor has requested that the request be retried;8,"generic";A network error occurred;NetworkError: Connection failure due to HTTP 401;NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope';NetworkError: Load failed`.split(";"),
      Gj,
      2
    ),
    new gk([], Hj, 2, 0),
    new gk(Lj, Mj, 3, 0),
    kk(
      "Kg is not defined;uncaught error;The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.;Illegal invocation;Script error;zCommon;can't access dead object;Java exception was raised during method invocation;pauseVideo is not a function;ResizeObserver loop;wallet must has at least one account;xbrowser is not defined;jQuery is not defined;Cannot read properties of null (reading 'requestAnimationFrame');Class extends value undefined is not a constructor or null;GM3TooltipService: No tooltip with id;Mole was disposed;getInitialTopicListResponse is missing for stream rendering;getPeopleById call preempted;The operation is insecure;class heritage;The play() request was interrupted;args.site.enabledFeatures is undefined;frappe is not defined;Cannot set properties of undefined (setting 'hidden');Identifier 'checkOngoingMeeting' has already been declared;AutofillCallbackHandler;invalid wire type;zp_token;isReCreate;HTMLOUT is not defined;Shopify root is null;CanvasMaskingStrategy_Redact;_chromeNamespace;feature named `performanceMetrics`;feature named `webCompat`;Cannot redefine property: webdriver;reCAPTCHA Timeout;feature named `pageObserver` was not found;feature named `hover` was not found;Request timeout appSettingsDistributor.getValue;TimeoutError: operation timed out;Sink type mismatch violation blocked by CSP;__firefox__;: Java object is gone;Cannot read properties of undefined (reading 'domInteractive');: t is not defined;sendMessage(). Tab not found.;Can't find variable: __gCrWeb;WKWebView API client did not respond to this postMessage;The provider is disconnected from all chains;The user aborted a request.;Task was cancelled.;lettersVoicesDistributor".split(";"),
      ["postUserData", "inline.cdn.mcas.ms", "evaluating 'n.standardSelectors'"],
      3
    ),
    new gk(Nj, Hj, 5, 0),
    kk(
      "Service worker registration is disabled by MDA;An unknown error occurred when fetching the script;Operation has been aborted;Timed out while trying to start the Service Worker;The Service Worker system has shutdown;The user denied permission to use Service Worker;The script resource is behind a redirect, which is disallowed;The document is in an invalid state;ServiceWorker script evaluation failed;ServiceWorker cannot be started;Failed to access storage;Worker disallowed;encountered an error during installation".split(";"),
      Gj,
      5
    ),
    new gk(Oj, Oj, 4, 0),
    kk([
      "Timeout reached for loading script https://www.gstatic.com/_/apps-fileview/_/js/",
      "Error while loading script https://www.gstatic.com/_/apps-fileview/_/js/"
    ], Gj, 4)
  ], nk = /* @__PURE__ */ new Set(["SEVERE", "SEVERE_AFTER_INITIAL", "UNKNOWN", "FATAL", ""]);
  function ok(a) {
    this.l = a;
    this.j = false;
  }
  __name(ok, "ok");
  function pk(a, b, c, d) {
    var e = [Error("uncaught error").message];
    c = c === void 0 ? false : c;
    d = d === void 0 ? ba(true) : d;
    var f = [];
    b.length > 0 && f.push(qk(b));
    f.push.apply(f, oa(mk));
    a = y(a);
    b = a.next();
    var g;
    try {
      for (; !b.done; b = a.next()) f.push(b.value);
    } finally {
      b && !b.done && (g = a.return) && g.call(a);
    }
    e.length > 0 && f.push(new ik(e, [], 3, 5, 0));
    f.push(new Tj(3, 0));
    c && f.push(new lk(8, 0, d));
    return new ok(f);
  }
  __name(pk, "pk");
  function rk(a, b) {
    var c = "missing", d = /* @__PURE__ */ new Map(), e = true;
    try {
      c = b.o;
      a.j && d.set("apps_telemetry.after_downgraded_severe", "true");
      var f = y(a.l), g = f.next(), h;
      try {
        for (; !g.done; g = f.next()) {
          var k = g.value;
          try {
            var l = Qj(k, b);
            if (l) {
              var m = c, r = sk(a, c) ? l.Ba : c;
              tk(l, m, r).forEach(function(w, u) {
                d.set(u, w);
              });
              c = r;
              break;
            }
          } catch (w) {
            e = false;
            var t = fk(w, c);
            d.set("apps_telemetry.handling_error", Sj(t) + "\n\nclassifier: " + k.constructor.name);
          }
        }
      } finally {
        g && !g.done && (h = f.return) && h.call(f);
      }
    } catch (w) {
      e = false, a = fk(w, c), d.set(
        "apps_telemetry.handling_error",
        Sj(a)
      );
    }
    d.set("apps_telemetry.processed", String(e));
    return {
      Ba: c,
      wa: d
    };
  }
  __name(rk, "rk");
  function tk(a, b, c) {
    var d = /* @__PURE__ */ new Map();
    d.set("apps_telemetry.classification", a.ua.toString());
    d.set("apps_telemetry.classification_code", a.ka ? a.ka.toString() : "");
    d.set("apps_telemetry.incoming_severity", b);
    d.set("apps_telemetry.outgoing_severity", c);
    return d;
  }
  __name(tk, "tk");
  function sk(a, b) {
    return nk.has(b.toUpperCase()) ? a.j = true : false;
  }
  __name(sk, "sk");
  function qk(a) {
    var b = [];
    a = y(a);
    var c = a.next(), d;
    try {
      for (; !c.done; c = a.next()) b.push(new RegExp(c.value));
    } finally {
      c && !c.done && (d = a.return) && d.call(a);
    }
    return new gk(b, b, 7, 0);
  }
  __name(qk, "qk");
  ;
  function uk() {
  }
  __name(uk, "uk");
  uk.prototype.fa = function() {
    if ("WorkerGlobalScope" in A && typeof A.WorkerGlobalScope === "function" && self instanceof A.WorkerGlobalScope) return /* @__PURE__ */ new Map();
    try {
      var a = Array.from(document.querySelectorAll("script")).filter(this.l).slice(0, 30).map(this.j).join(
        "\n"
      );
    } catch (b) {
      a = "Error getting cross-origin scripts";
    }
    return (/* @__PURE__ */ new Map()).set("apps_telemetry.cross_origin_scripts", a);
  };
  uk.prototype.l = function(a) {
    var b = new RegExp(/^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)*google\.com(?:$|[\/#?])/);
    return (a = a.getAttribute("src")) ? !(a.startsWith("/") || b.test(a)) : false;
  };
  uk.prototype.j = function(a) {
    return a.innerHTML ? a.outerHTML.slice(0, a.outerHTML.indexOf(a.innerHTML)) : a.outerHTML;
  };
  function vk() {
  }
  __name(vk, "vk");
  vk.prototype.fa = function() {
    try {
      var a = performance.getEntriesByType("resource").slice(-5).map(function(b) {
        return ag(b.name);
      }).join("\n");
    } catch (b) {
      a = "Error getting last 5 resources";
    }
    return (/* @__PURE__ */ new Map()).set("apps_telemetry.resources", a);
  };
  var wk = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  function xk() {
    var a = [], b;
    a[8] = a[13] = a[18] = a[23] = "-";
    a[14] = "4";
    for (b = 0; b < 36; b++)
      if (!a[b]) {
        var c = 0 | Math.random() * 16;
        a[b] = wk[b == 19 ? c & 3 | 8 : c];
      }
    return a.join("");
  }
  __name(xk, "xk");
  ;
  function yk(a, b) {
    var c = b === void 0 ? {} : b;
    b = c.va;
    b = b === void 0 ? [] : b;
    var d = c.sb;
    d = d === void 0 ? [] : d;
    var e = c.Ga;
    e = e === void 0 ? [] : e;
    var f = c.Bb;
    var g = c.sessionId;
    g = g === void 0 ? xk() : g;
    c = c.xb;
    this.o = pk(b, d, f === void 0 ? false : f, c === void 0 ? ba(true) : c);
    this.j = [new wj(), new uk(), new vk()];
    this.j.push.apply(this.j, oa(e));
    this.sessionId = g;
    var h;
    this.v = (h = A.performance) == null ? void 0 : h.timeOrigin;
    this.l = a;
    this.l.qa(g);
  }
  __name(yk, "yk");
  function zk(a, b, c, d) {
    d["apps_telemetry.session_id"] = a.sessionId;
    d["apps_telemetry.session_start_time_ms"] = String(a.v);
    "apps_telemetry.processed" in d && (d["apps_telemetry.multi_processed"] = "true");
    var e = a.fa();
    (a = Ak(a, b, c, e)) && Bk(e, a.wa);
    e.forEach(function(g, h) {
      d[h] = g;
    });
    var f;
    return (f = a == null ? void 0 : a.Ba) != null ? f : c;
  }
  __name(zk, "zk");
  function Ak(a, b, c, d) {
    var e = null, f = null;
    try {
      e = fk(b, c, d), f = rk(a.o, e);
    } catch (g) {
      return Ck(d, g, "apps_telemetry.processed"), null;
    }
    a.l.Oa(e, f);
    return f;
  }
  __name(Ak, "Ak");
  yk.prototype.fa = function() {
    var a = /* @__PURE__ */ new Map();
    try {
      var b = y(this.j), c = b.next(), d;
      try {
        for (; !c.done; c = b.next()) c.value.fa().forEach(function(e, f) {
          a.set(f, e);
        });
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
    } catch (e) {
      Ck(a, e, "apps_telemetry.annotated");
    }
    return a;
  };
  function Bk(a, b) {
    b.forEach(function(c, d) {
      a.set(d, c);
    });
  }
  __name(Bk, "Bk");
  function Ck(a, b, c) {
    a.set(c, "false");
    a.set("apps_telemetry.handling_error", bk(b));
  }
  __name(Ck, "Ck");
  ;
  var Dk = /* @__PURE__ */ new Set([1, 6, 7, 2, 0]);
  function Ek() {
    var a = oj(sj(xd())), b = sd(a, 1), c = sd(a, 5);
    return [b, c].every(function(d) {
      return Dk.has(d);
    });
  }
  __name(Ek, "Ek");
  ;
  function Fk(a) {
    try {
      return de(be(), a);
    } catch (b) {
      return false;
    }
  }
  __name(Fk, "Fk");
  ;
  function Gk(a, b) {
    var c = a = a === void 0 ? {} : a;
    a = c.Ga;
    a = a === void 0 ? [] : a;
    var d = c.va;
    d = d === void 0 ? [] : d;
    var e = c.wb;
    e = e === void 0 ? [] : e;
    var f = c.tb;
    f = f === void 0 ? [] : f;
    var g = c.Dc;
    g = g === void 0 ? [] : g;
    var h = c.Ec;
    h = h === void 0 ? [] : h;
    c = c.sessionId;
    c = c === void 0 ? void 0 : c;
    try {
      var k = de(be(), fe), l = void 0 === Kb ? 2 : 4, m = void 0, r = k.C, t = r[G] | 0, w = Ib(k, t) ? 1 : l;
      m = !!m || w === 3;
      w === 2 && Pc(k) && (r = k.C, t = r[G] | 0);
      var u = $c(r, 1), L = u === Db ? 7 : u[G] | 0, E = ad(L, t);
      if (k = 4 & E ? false : true) {
        4 & E && (u = Array.prototype.slice.call(u), L = 0, E = Zc(E, t), t = Wc(r, t, 1, u));
        for (var ka = l = 0; l < u.length; l++) {
          var R = vc(u[l]);
          R != null && (u[ka++] = R);
        }
        ka < l && (u.length = ka);
        R = E |= 4;
        R &= -513;
        E = R & -1025;
        E &= -4097;
      }
      E !== L && (H(u, E), 2 & E && Object.freeze(u));
      var Ja = u = Xc(u, E, r, t, 1, w, k, m);
    } catch (Ci) {
      Ja = [];
    }
    r = Fk(he);
    t = [];
    w = t.concat;
    u = [];
    e.length > 0 && u.push(kk(e, [], 6));
    f.length > 0 && u.push(new gk(f, [], 6, 0));
    g.length > 0 && u.push(new ik(g, [], 6, 5, 0));
    h.length > 0 && u.push(new ik(h, [], 6, 5, 1));
    return new yk(b, {
      va: w.call(t, oa(u), oa(d)),
      sb: Ja,
      Ga: [new tj()].concat(oa(a)),
      Bb: r,
      sessionId: c,
      xb: Ek
    });
  }
  __name(Gk, "Gk");
  ;
  function Hk() {
  }
  __name(Hk, "Hk");
  Hk.prototype.Oa = n();
  Hk.prototype.qa = n();
  function Ik(a) {
    a = a === void 0 ? {} : a;
    return Gk(a, new Hk());
  }
  __name(Ik, "Ik");
  ;
  function Jk(a) {
    return a ? a.split("\n").filter(function(b) {
      return b.trim() && !b.includes("signal is aborted without reason");
    }).length : 0;
  }
  __name(Jk, "Jk");
  function Kk() {
    Pj.call(this, 3, 0);
  }
  __name(Kk, "Kk");
  x(Kk, Pj);
  Kk.prototype.j = function(a) {
    a: {
      for (; a; ) {
        var b = a.message.includes("signal is aborted without reason"), c = Jk(a.j) === 2;
        if (!b || !c) {
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
    Nk = (Mk = (Lk = window) == null ? void 0 : Lk.top) != null ? Mk : A;
    Nk.U3bHHf != null || (Nk.U3bHHf = 0);
    Nk.U3bHHf++;
  } catch (a) {
    A.U3bHHf != null || (A.U3bHHf = 0), A.U3bHHf++;
  }
  ;
  var Ok;
  if (A == null ? 0 : (Ok = A.Symbol) == null ? 0 : Ok.for) {
    Pk = /* @__PURE__ */ Symbol.for("google.goem");
    A[Pk] || (A[Pk] = /* @__PURE__ */ new WeakMap());
  }
  ;
  "#".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  function Qk(a, b) {
    var c = a.__wiz;
    c || (c = a.__wiz = {});
    return c[b.toString()];
  }
  __name(Qk, "Qk");
  ;
  var Rk = {};
  var Sk = {};
  function Tk(a) {
    var b = document.body, c = Ta(b.getAttribute("jsaction") || "");
    var d = ["u0pjoe"];
    var e = y(d), f = e.next(), g;
    try {
      for (; !f.done; f = e.next()) {
        var h = f.value;
        var k = c;
        if (k) {
          var l = Rk[k];
          if (l) var m = !!l[h.toString()];
          else {
            var r = Sk[h.toString()];
            r || (r = new RegExp("(^\\s*" + h + "\\s*:|[\\s;]" + h + "\\s*:)"), Sk[h.toString()] = r);
            m = r.test(k);
          }
        } else m = false;
        m || (c && !/;$/.test(c) && (c += ";"), c += h + ":.CLIENT", Uk(b, c));
        var t = Qk(b, h);
        t ? t.push(a) : b.__wiz[h.toString()] = [a];
      }
    } finally {
      f && !f.done && (g = e.return) && g.call(e);
    }
    return {
      et: d,
      eb: a,
      el: b
    };
  }
  __name(Tk, "Tk");
  function Uk(a, b) {
    a.setAttribute("jsaction", b);
    "__jsaction" in a && delete a.__jsaction;
  }
  __name(Uk, "Uk");
  ;
  function Vk(a) {
    X.call(this);
    this.l = a;
  }
  __name(Vk, "Vk");
  C(Vk, X);
  Vk.prototype.j = function(a) {
    return Wk(this, a);
  };
  function Xk(a, b) {
    a = Object.prototype.hasOwnProperty.call(a, La) && a[La] || (a[La] = ++Ma);
    return (b ? "__wrapper_" : "__protected_") + a + "__";
  }
  __name(Xk, "Xk");
  function Wk(a, b) {
    var c = Xk(a, true);
    b[c] || ((b[c] = Yk(a, b))[Xk(a, false)] = b);
    return b[c];
  }
  __name(Wk, "Wk");
  function Yk(a, b) {
    function c() {
      if (a.na()) return b.apply(this, arguments);
      try {
        return b.apply(this, arguments);
      } catch (d) {
        Zk(a, d);
      }
    }
    __name(c, "c");
    c[Xk(a, false)] = b;
    return c;
  }
  __name(Yk, "Yk");
  function Zk(a, b) {
    if (!(b && typeof b === "object" && typeof b.message === "string" && b.message.indexOf(
      "Error in protected function: "
    ) == 0 || typeof b === "string" && b.indexOf(
      "Error in protected function: "
    ) == 0)) throw a.l(b), new $k(b);
  }
  __name(Zk, "Zk");
  function al(a) {
    var b = b || A.window || A.globalThis;
    "onunhandledrejection" in b && (b.onunhandledrejection = function(c) {
      Zk(a, c && c.reason ? c.reason : Error("uncaught error"));
    });
  }
  __name(al, "al");
  function bl(a, b) {
    var c = A.window || A.globalThis, d = c[b];
    if (!d) throw Error(b + " not on global?");
    c[b] = function(e, f) {
      typeof e === "string" && (e = Pa(Qa, e));
      e && (arguments[0] = e = Wk(a, e));
      if (d.apply) return d.apply(this, arguments);
      var g = e;
      if (arguments.length > 2) {
        var h = Array.prototype.slice.call(arguments, 2);
        g = /* @__PURE__ */ __name(function() {
          e.apply(this, h);
        }, "g");
      }
      return d(g, f);
    };
    c[b][Xk(a, false)] = d;
  }
  __name(bl, "bl");
  Vk.prototype.N = function() {
    var a = A.window || A.globalThis;
    var b = a.setTimeout;
    b = b[Xk(this, false)] || b;
    a.setTimeout = b;
    b = a.setInterval;
    b = b[Xk(this, false)] || b;
    a.setInterval = b;
    Vk.W.N.call(this);
  };
  function $k(a) {
    D.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)), a);
    (a = a && a.stack) && typeof a === "string" && (this.stack = a);
  }
  __name($k, "$k");
  C($k, D);
  function cl() {
    Z.call(this);
    this.headers = /* @__PURE__ */ new Map();
    this.o = false;
    this.j = null;
    this.M = "";
    this.B = 0;
    this.A = this.L = this.F = this.J = false;
    this.O = 0;
    this.v = null;
    this.P = "";
    this.S = false;
  }
  __name(cl, "cl");
  C(cl, Z);
  var dl = /^https?$/i, el = ["POST", "PUT"], fl = [];
  q = cl.prototype;
  q.fb = function() {
    this.dispose();
    ab(fl, this);
  };
  q.send = function(a, b, c, d) {
    if (this.j) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.M + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.M = a;
    this.B = 0;
    this.J = false;
    this.o = true;
    this.j = new XMLHttpRequest();
    this.j.onreadystatechange = eg(B(this.Pa, this));
    try {
      this.L = true, this.j.open(b, String(a), true), this.L = false;
    } catch (t) {
      gl(this);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype)
        for (var e in d) c.set(e, d[e]);
      else if (typeof d.keys === "function" && typeof d.get === "function") {
        e = y(d.keys());
        var f = e.next(), g;
        try {
          for (; !f.done; f = e.next()) {
            var h = f.value;
            c.set(h, d.get(h));
          }
        } finally {
          f && !f.done && (g = e.return) && g.call(e);
        }
      } else throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find(function(t) {
      return "content-type" == t.toLowerCase();
    });
    g = A.FormData && a instanceof A.FormData;
    !(Array.prototype.indexOf.call(el, b, void 0) >= 0) || d || g || c.set(
      "Content-Type",
      "application/x-www-form-urlencoded;charset=utf-8"
    );
    b = y(c);
    d = b.next();
    var k;
    try {
      for (; !d.done; d = b.next()) {
        var l = y(d.value), m = l.next().value, r = l.next().value;
        this.j.setRequestHeader(m, r);
      }
    } finally {
      d && !d.done && (k = b.return) && k.call(b);
    }
    this.P && (this.j.responseType = this.P);
    "withCredentials" in this.j && this.j.withCredentials !== this.S && (this.j.withCredentials = this.S);
    try {
      this.v && (clearTimeout(this.v), this.v = null), this.O > 0 && (this.v = setTimeout(
        this.yb.bind(this),
        this.O
      )), this.F = true, this.j.send(a), this.F = false;
    } catch (t) {
      gl(this);
    }
  };
  q.yb = function() {
    typeof Ea != "undefined" && this.j && (this.B = 8, this.dispatchEvent("timeout"), this.abort(8));
  };
  function gl(a) {
    a.o = false;
    a.j && (a.A = true, a.j.abort(), a.A = false);
    a.B = 5;
    hl(a);
    il(a);
  }
  __name(gl, "gl");
  function hl(a) {
    a.J || (a.J = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  }
  __name(hl, "hl");
  q.abort = function(a) {
    this.j && this.o && (this.o = false, this.A = true, this.j.abort(), this.A = false, this.B = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), il(this));
  };
  q.N = function() {
    this.j && (this.o && (this.o = false, this.A = true, this.j.abort(), this.A = false), il(this, true));
    cl.W.N.call(this);
  };
  q.Pa = function() {
    this.na() || (this.L || this.F || this.A ? jl(this) : this.Aa());
  };
  q.Aa = function() {
    jl(this);
  };
  function jl(a) {
    if (a.o && typeof Ea != "undefined") {
      if (a.F && (a.j ? a.j.readyState : 0) == 4) setTimeout(a.Pa.bind(a), 0);
      else if (a.dispatchEvent("readystatechange"), (a.j ? a.j.readyState : 0) == 4) {
        a.o = false;
        try {
          ej(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.B = 6, hl(a));
        } finally {
          il(a);
        }
      }
    }
  }
  __name(jl, "jl");
  function il(a, b) {
    if (a.j) {
      a.v && (clearTimeout(a.v), a.v = null);
      var c = a.j;
      a.j = null;
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = null;
      } catch (d) {
      }
    }
  }
  __name(il, "il");
  q.isActive = function() {
    return !!this.j;
  };
  function ej(a) {
    var b = dj(a);
    a: switch (b) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var c = true;
        break a;
      default:
        c = false;
    }
    if (!c) {
      if (b = b === 0) a = String(a.M).match(Vf)[1] || null, !a && A.self && A.self.location && (a = A.self.location.protocol.slice(0, -1)), b = !dl.test(a ? a.toLowerCase() : "");
      c = b;
    }
    return c;
  }
  __name(ej, "ej");
  function dj(a) {
    try {
      return (a.j ? a.j.readyState : 0) > 2 ? a.j.status : -1;
    } catch (b) {
      return -1;
    }
  }
  __name(dj, "dj");
  kg(function(a) {
    cl.prototype.Aa = a(cl.prototype.Aa);
  });
  function kl(a, b, c) {
    Z.call(this);
    this.A = b || null;
    this.v = {};
    this.B = ll;
    this.J = a;
    if (!c) {
      this.j = null;
      this.j = new Vk(B(this.o, this));
      bl(this.j, "setTimeout");
      bl(this.j, "setInterval");
      a = this.j;
      b = A.window || A.globalThis;
      c = [
        "requestAnimationFrame",
        "mozRequestAnimationFrame",
        "webkitAnimationFrame",
        "msRequestAnimationFrame"
      ];
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        c[d] in b && bl(a, e);
      }
      a = this.j;
      jg = true;
      b = B(a.j, a);
      for (c = 0; c < hg.length; c++) hg[c](b);
      ig.push(a);
    }
  }
  __name(kl, "kl");
  C(kl, Z);
  function ml(a, b) {
    li.call(this, "c");
    this.error = a;
    this.Z = b;
  }
  __name(ml, "ml");
  C(ml, li);
  function nl(a, b) {
    return new kl(a, b, void 0);
  }
  __name(nl, "nl");
  function ll(a, b, c, d) {
    if (d instanceof Map) {
      var e = {};
      d = y(d);
      var f = d.next(), g;
      try {
        for (; !f.done; f = d.next()) {
          var h = y(f.value), k = h.next().value, l = h.next().value;
          e[k] = l;
        }
      } finally {
        f && !f.done && (g = d.return) && g.call(d);
      }
    } else e = d;
    g = new cl();
    fl.push(g);
    g.l.add("ready", g.fb, true, void 0, void 0);
    g.send(a, b, c, e);
  }
  __name(ll, "ll");
  function ol(a, b) {
    a.B = b;
  }
  __name(ol, "ol");
  kl.prototype.o = function(a, b) {
    a = a.error || a;
    b = b ? Ph(b) : {};
    a instanceof Error && Rh(b, ob(a));
    var c = Df(a);
    if (this.A) try {
      this.A(c, b, a);
    } catch (t) {
    }
    var d = c.message.substring(0, 1900);
    if (!(a instanceof D) || a.j) {
      var e = c.fileName, f = c.lineNumber;
      a = c.stack;
      try {
        var g = W(this.J, "script", e, "error", d, "line", f);
        a: {
          for (var h in this.v) {
            var k = false;
            break a;
          }
          k = true;
        }
        if (!k) {
          k = g;
          var l = $f(this.v);
          g = Xf(k, l);
        }
        l = {};
        l.trace = a;
        if (b)
          for (var m in b) l["context." + m] = b[m];
        var r = $f(l);
        this.B(g, "POST", r, this.F);
      } catch (t) {
      }
    }
    try {
      this.dispatchEvent(new ml(
        c,
        b
      ));
    } catch (t) {
    }
  };
  kl.prototype.N = function() {
    bg(this.j);
    kl.W.N.call(this);
  };
  function pl() {
    this.j = Date.now();
  }
  __name(pl, "pl");
  var ql = null;
  pl.prototype.set = function(a) {
    this.j = a;
  };
  pl.prototype.reset = function() {
    this.set(Date.now());
  };
  pl.prototype.get = p("j");
  function rl(a) {
    this.v = a || "";
    ql || (ql = new pl());
    this.A = ql;
  }
  __name(rl, "rl");
  rl.prototype.j = true;
  rl.prototype.l = true;
  rl.prototype.o = false;
  function sl(a) {
    return a < 10 ? "0" + a : String(a);
  }
  __name(sl, "sl");
  function tl(a) {
    rl.call(this, a);
  }
  __name(tl, "tl");
  C(tl, rl);
  function ul(a, b) {
    var c = [];
    c.push(a.v, " ");
    if (a.l) {
      var d = c.push, e = new Date(b.o());
      d.call(c, "[", sl(e.getFullYear() - 2e3) + sl(e.getMonth() + 1) + sl(e.getDate()) + " " + sl(e.getHours()) + ":" + sl(e.getMinutes()) + ":" + sl(e.getSeconds()) + "." + sl(Math.floor(e.getMilliseconds() / 10)), "] ");
    }
    d = c.push;
    e = a.A.get();
    e = (b.o() - e) / 1e3;
    var f = e.toFixed(3), g = 0;
    if (e < 1) g = 2;
    else
      for (; e < 100; ) g++, e *= 10;
    for (; g-- > 0; ) f = " " + f;
    d.call(c, "[", f, "s] ");
    c.push("[", b.l(), "] ");
    c.push(b.getMessage());
    a.o && (b = b.j(), b !== void 0 && c.push("\n", b instanceof Error ? b.message : String(b)));
    a.j && c.push("\n");
    return c.join("");
  }
  __name(ul, "ul");
  ;
  function vl(a) {
    a = a === void 0 ? new wl() : a;
    Z.call(this);
    var b = this;
    this.P = {};
    this.j = null;
    this.o = {};
    this.M = new Wi(this);
    this.ib = a.I;
    this.S = a.L;
    this.Wa = a.J;
    this.gb = a.G;
    this.Xa = a.M;
    var c = a.l;
    this.Ua = (a.v || Ik)({
      wb: kj,
      tb: lj,
      va: [new Kk()]
    });
    this.cb = a.R;
    this.U = new ki();
    var d = new cl();
    xl(this, c);
    this.B = new fj(d, c, void 0, void 0, void 0);
    dg(this, this.B);
    this.v = a.j ? a.j : th(c, "docs-sup") + th(c, "docs-jepp") + "/jserror";
    if (d = th(c, "jobset")) this.v = W(this.v, "jobset", d);
    if (d = th(c, "docs-ci")) this.v = W(this.v, "id", d);
    d = th(c, "docs-pid");
    ph(c.get("docs-eaotx")) && d && (this.v = W(this.v, "ouid", d));
    this.ea = sh(c, "docs-srmoe") || 0;
    this.ab = ph(c.get("docs-oesf"));
    this.Fa = sh(c, "docs-srmour") || 0;
    this.bb = ph(c.get("docs-oursf"));
    d = a.A || this.Fa > 0 && Math.random() < this.Fa;
    this.Ya = ph(c.get("docs-wesf"));
    yl(this);
    Sg = /* @__PURE__ */ __name(function(g) {
      return zl(b, g, "promise rejection");
    }, "Sg");
    var e = sh(c, "docs-srmdue") || 0;
    if (e > 0 && Math.random() < e) {
      var f = ph(c.get("docs-duesf"));
      Zg = /* @__PURE__ */ __name(function(g) {
        zl(b, g, "deferred error", f, "isDeferredUnhandledErrback");
      }, "Zg");
    } else Zg = n();
    e = sh(c, "docs-srmxue") || 0;
    e = e > 0 && Math.random() < e;
    c.get("docs-xduesf");
    e && uf();
    d && (d = new Vk(function(g) {
      g = Al(g, "native promise rejection");
      var h = {};
      h = (h.isUnhandledRejection = "true", h);
      b.bb ? Bl(b, g, h) : b.info(g, h);
    }), al(d), dg(this, d));
    this.L = null;
    typeof document !== "undefined" && document.body && (this.L = Tk(function(g) {
      var h = {};
      h = (h.isWizError = "true", h);
      g = y(g.data.errors);
      var k = g.next(), l;
      try {
        for (; !k.done; k = g.next()) {
          var m = k.value.error;
          b.Ya ? Bl(b, m, h) : b.info(m, h);
        }
      } finally {
        k && !k.done && (l = g.return) && l.call(g);
      }
    }));
    this.O = a.o;
    this.F = false;
    this.J = true;
    this.A = false;
    this.da = th(c, "docs-jern");
    this.Va = a.F;
    this.Ta = a.B.concat(Object.values(rf));
  }
  __name(vl, "vl");
  x(vl, Z);
  function yl(a) {
    var b = b === void 0 ? false : b;
    if (Cl) {
      if (Dl != null) throw Error('ErrorReporter already installed. at "' + Dl.stack + '"');
      throw Error("ErrorReporter already installed.");
    }
    Cl = true;
    Dl = Error();
    a.j = nl(a.v, function(e, f, g) {
      return El(a, e, f, g);
    });
    var c = {};
    a.Wa && (c["X-No-Abort"] = "1");
    a.j.F = c;
    ol(a.j, function(e, f, g, h) {
      a.J && a.B.send(e, f, g, h);
    });
    if (a.ea > 0 && Math.random() < a.ea) {
      c = {};
      var d = (c.isWindowOnError = "true", c);
      a.ab ? Cf(function(e) {
        Bl(a, e.error instanceof Error ? e.error : Error(e.message), d);
      }) : Cf(function(e) {
        a.log(e.error instanceof Error ? e.error : Error(e.message), d);
      });
    }
    a.M.listen(a.j, "c", function(e) {
      var f = b;
      f = f === void 0 ? false : f;
      e.Z.severity = e.Z["severity-unprefixed"] || e.Z.severity;
      var g = e.Z.severity;
      (g = g == "fatal" || g == "postmortem") && !a.gb && (a.ib && !f ? a.U.notify(e, e.Z) : a.U.notify(
        void 0,
        e.Z
      ));
      a.dispatchEvent(new Ki(g ? "a" : "b", e.error, e.Z));
    });
  }
  __name(yl, "yl");
  function xl(a, b) {
    b = new ij(b);
    var c = b.j, d;
    for (d in c) {
      var e = c[d];
      e && (a.o["expflag-" + d] = e.toString());
    }
    a.o.experimentIds = b.l.join(",");
  }
  __name(xl, "xl");
  function Bl(a, b, c) {
    a.A = false;
    Fl(b, "fatal");
    if (!a.j) {
      if (b instanceof gf) throw b.j;
      throw Jf(b);
    }
    a.j.o(b, Gl(a, b, c));
    if (a.Xa) {
      c = Gl(a, b, c);
      c.is_forceFatal = 1;
      var d = b instanceof gf ? b.j : b;
      El(a, d, c);
      b = Jf(d);
      a = ", context:" + JSON.stringify(Gl(a, d, c));
      b.message += a;
      throw b;
    }
  }
  __name(Bl, "Bl");
  function Hl(a, b, c) {
    a.A = false;
    Fl(b, "warning");
    a.j && a.j.o(b, Gl(a, b, c));
  }
  __name(Hl, "Hl");
  vl.prototype.info = function(a, b, c) {
    this.A = c || false;
    Fl(a, "incident");
    this.j && this.j.o(a, Gl(this, a, b));
  };
  vl.prototype.log = function(a, b, c) {
    this.A = !!c;
    Fl(a, "incident");
    this.j && this.j.o(a, Gl(this, a, b));
  };
  function Al(a, b) {
    if (a && typeof a === "object" && a.type === "error") {
      var c = a.error;
      a = JSON.stringify({
        error: c && c.message ? c.message : "Missing error cause.",
        stack: c && c.stack ? c.stack : "Missing error cause.",
        message: a.message,
        filename: a.filename,
        lineno: a.lineno,
        colno: a.colno,
        type: a.type
      });
      b = Error("Unhandled " + b + " with ErrorEvent: " + a);
    } else b = typeof a === "string" ? Error("Unhandled " + b + " with: " + a) : typeof a === "number" ? Error(
      "Unhandled " + b + " with number: " + a
    ) : a == null ? Error("Unhandled " + b + ' with "null/undefined"') : a;
    return b;
  }
  __name(Al, "Al");
  function zl(a, b, c, d, e) {
    d = d === void 0 ? true : d;
    b = Al(b, c);
    c = {};
    e && (c[e] = "true");
    d ? Sa(b) : a.info(b, c);
  }
  __name(zl, "zl");
  function Gl(a, b, c) {
    b instanceof gf && (b = b.j);
    c = c ? Ph(c) : {};
    c.severity = ob(b).severity;
    (b = b && b.reportSeverity) && (c.reportSeverity = b);
    a.S && (c.errorGroupId = a.S);
    return c;
  }
  __name(Gl, "Gl");
  function Il(a, b) {
    if (a && typeof a === "object" && !a.message && a.constructor && a.constructor instanceof Function && (a.constructor.name ? a.constructor.name : Ff(a.constructor)) === "Object") {
      b.unknownErrorToStringResult = Object.prototype.toString.call(a);
      for (var c = JSON, d = c.stringify, e = {}, f = Object.keys(a), g = 0, h = 0; h < f.length && g < 10; h++) {
        var k = f[h];
        try {
          typeof a[k] !== "function" && (e[k] = String(a[k]).substring(0, 100), g++);
        } catch (l) {
        }
      }
      b.unknownErrorContent = d.call(c, e);
    }
  }
  __name(Il, "Il");
  function El(a, b, c, d) {
    var e = a.F;
    try {
      a.V(b, c, d);
    } catch (g) {
      throw e && !a.O && (a.J = false), a.F = true, c.provideLogDataError = g.message, c.severity || (c.severity = "fatal"), Jf(g);
    } finally {
      if (c["severity-unprefixed"] = c.severity || "fatal", c.severity = "" + c["severity-unprefixed"], !a.Va)
        for (var f in c) typeof c[f] === "number" || c[f] instanceof Number || typeof c[f] === "boolean" || c[f] instanceof Boolean || a.Ta.includes(f) || f in c && delete c[f];
    }
  }
  __name(El, "El");
  vl.prototype.V = function(a, b, c) {
    Il(c || a, b);
    for (var d in this.P) try {
      b[d] = this.P[d](a);
    } catch (h) {
    }
    b.errorReportTimeMs || (b.errorReportTimeMs = Date.now().toString());
    Object.assign(b, this.o);
    if ((Tf(), 0) > 0) {
      var e = new tl(), f = "";
      Sf(function(h) {
        f += ul(e, h);
      });
      b.clientLog = f;
    }
    c = b.severity || "fatal";
    (d = b.reportSeverity || a && a.reportSeverity) && (d = Jl(d.toLowerCase())) && (c = d);
    this.cb || (c = zk(this.Ua, a, c, b));
    this.da && (b.reportName = this.da + "_" + c);
    b.isArrayPrototypeIntact = jj().toString();
    if (!("WorkerGlobalScope" in A && self instanceof A.WorkerGlobalScope)) {
      try {
        var g = !!document.getElementById("docs-editor");
      } catch (h) {
        g = false;
      }
      b.isEditorElementAttached = g.toString();
    }
    b.documentCharacterSet = document.characterSet;
    b.origin = String(A.origin);
    g = a.stack || "";
    if (g.trim().length == 0 || g == "Not available") b["stacklessError-reportingStack"] = If(vl.prototype.V), [a.message].concat(oa(Object.keys(b)), oa(Object.values(b))).some(function(h) {
      return h && h.includes("<eye3");
    }) || (b.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>");
    this.F && !this.O ? (this.J = this.A, c == "fatal" ? c = "postmortem" : c == "incident" && (c = "warningafterdeath")) : c == "fatal" && (this.F = true);
    this.A = false;
    b.severity = c;
  };
  vl.prototype.N = function() {
    Cl = false;
    if (this.L) {
      var a = this.L, b = y(a.et), c = b.next(), d;
      try {
        for (; !c.done; c = b.next()) {
          var e = c.value, f = Qk(a.el, e);
          if (f && (ab(f, a.eb), !f.length)) {
            var g = a.el, h = Ta(g.getAttribute("jsaction") || ""), k = e + ":.CLIENT";
            h = h.replace(k + ";", "");
            h = h.replace(k, "");
            Uk(g, h);
          }
        }
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
    }
    cg(this.M, this.j, this.B);
    Z.prototype.N.call(this);
  };
  var Cl = false, Dl = null;
  function wl() {
    this.L = this.l = void 0;
    this.G = this.M = this.I = false;
    this.j = void 0;
    this.J = this.o = false;
    this.F = true;
    this.B = [];
    this.R = this.A = false;
    this.v = void 0;
  }
  __name(wl, "wl");
  function Fl(a, b) {
    a instanceof gf && (a = a.j);
    nb(a, "severity", b);
  }
  __name(Fl, "Fl");
  function Jl(a) {
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
  __name(Jl, "Jl");
  ;
  function Kl() {
    var a = this;
    this.promise = new Promise(function(b, c) {
      a.resolve = b;
      a.reject = c;
    });
  }
  __name(Kl, "Kl");
  ;
  function Ll() {
    this.o = window.crashReport;
    this.v = new Kl();
    this.j = 0;
    this.l = /* @__PURE__ */ new Map();
  }
  __name(Ll, "Ll");
  Ll.prototype.initialize = function(a) {
    a = a === void 0 ? 10240 : a;
    var b = this, c, d, e, f, g, h, k, l, m, r, t, w;
    return ya(new xa(new ta(function(u) {
      switch (u.j) {
        case 1:
          if (b.j !== 0) return u.return(b.v.promise);
          b.j = 1;
          u.O(2, 3);
          return u.F(b.o.initialize(a), 5);
        case 5:
          b.v.resolve();
          b.j = 2;
          c = y(b.l);
          d = c.next();
          try {
            for (; !d.done; d = c.next()) f = d.value, g = y(f), h = g.next().value, k = g.next().value, l = h, m = k, r = void 0, b.set(l, (r = m) != null ? r : "");
          } finally {
            d && !d.done && (e = c.return) && e.call(c);
          }
        case 3:
          u.M();
          b.l.clear();
          u.R(4);
          break;
        case 2:
          t = u.L();
          b.j = 3;
          w = Error("Failed to initialize crash storage", {
            cause: t
          });
          w.reportSeverity = "warning";
          b.v.reject(w);
          u.ga(3);
          break;
        case 4:
          return u.return(b.v.promise);
      }
    })));
  };
  Ll.prototype.Ma = function() {
    return this.j !== 0;
  };
  Ll.prototype.set = function(a, b) {
    if (this.j !== 3)
      if (this.j !== 2) this.l.size < 100 || this.l.has(a) ? this.l.set(a, b) : this.l.set(
        "cache_full",
        "true"
      );
      else try {
        this.o.set(a, b);
      } catch (c) {
      }
  };
  Ll.prototype.delete = function(a) {
    if (this.j !== 3)
      if (this.j !== 2) this.l.delete(a);
      else try {
        typeof this.o.delete === "function" ? this.o.delete(a) : this.o.remove(a);
      } catch (b) {
      }
  };
  function Ml() {
    this.j = false;
  }
  __name(Ml, "Ml");
  Ml.prototype.initialize = function() {
    this.j = true;
    return Promise.resolve();
  };
  Ml.prototype.Ma = p("j");
  Ml.prototype.set = n();
  Ml.prototype.delete = n();
  var Nl = new Ml();
  var Ol = ["SEVERE", "FATAL"];
  function Pl() {
    this.l = this.o = 1;
    this.j = new Ad();
  }
  __name(Pl, "Pl");
  Pl.prototype.Oa = function(a, b) {
    var c = b == null ? void 0 : b.wa.get("apps_telemetry.outgoing_severity");
    a = c != null ? c : a.o;
    if (a = this.o === 1 && !!a && Ol.includes(a.toUpperCase())) this.o = 2;
    b = b == null ? void 0 : b.wa.get("apps_telemetry.incoming_severity");
    if (c = this.l === 1 && !!b && !!c && b.toUpperCase() !== c.toUpperCase()) this.l = 2;
    if (a || c) c = id(this.j, rj, 3), b = new qj(), b = vd(b, 1, this.o), b = vd(b, 2, this.l), nd(
      c,
      qj,
      5,
      b
    ), Ql(this);
  };
  Pl.prototype.qa = function(a) {
    a: {
      var b = id(this.j, nj, 1);
      var c = pj;
      Qc(b);
      if (void 0 === Lb) {
        if (ed(b, c, 4) !== 4) {
          b = void 0;
          break a;
        }
      } else dd(b.C, void 0, c, 4);
      b = id(b, mj, 4);
    }
    b.qa(a);
    Ql(this);
  };
  function Ql(a) {
    var b = Nl, c = b.set;
    a = JSON.stringify(Gc(a.j));
    c.call(b, "appsTelemetryCrashReportData", a);
  }
  __name(Ql, "Ql");
  ;
  function Rl(a) {
    a = a === void 0 ? {} : a;
    if (!Nl.Ma()) {
      try {
        var b = Fk(ge);
      } catch (c) {
        b = false;
      }
      Nl = b && window.crashReport ? new Ll() : new Ml();
      Nl.initialize();
    }
    return Gk(a, new Pl());
  }
  __name(Rl, "Rl");
  ;
  function Sl(a, b) {
    Z.call(this);
    this.V = a;
    this.O = b;
    this.L = void 0;
    this.status = this.readyState = 0;
    this.responseType = this.v = this.o = this.statusText = "";
    this.onreadystatechange = null;
    this.M = new Headers();
    this.A = null;
    this.S = "GET";
    this.U = "";
    this.j = false;
    this.P = this.B = this.F = null;
    this.J = new AbortController();
  }
  __name(Sl, "Sl");
  C(Sl, Z);
  q = Sl.prototype;
  q.open = function(a, b) {
    if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
    this.S = a;
    this.U = b;
    this.readyState = 1;
    Tl(this);
  };
  q.send = function(a) {
    if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
    if (this.J.signal.aborted) throw this.abort(), Error("Request was aborted.");
    this.j = true;
    var b = {
      headers: this.M,
      method: this.S,
      credentials: this.L,
      cache: void 0,
      signal: this.J.signal
    };
    a && (b.body = a);
    (this.V || A).fetch(new Request(this.U, b)).then(this.ob.bind(this), this.ma.bind(this));
  };
  q.abort = function() {
    this.o = this.v = "";
    this.M = new Headers();
    this.status = 0;
    this.J.abort("Request was aborted.");
    this.B && this.B.cancel("Request was aborted.").catch(n());
    this.readyState >= 1 && this.j && this.readyState != 4 && (this.j = false, Ul(this));
    this.readyState = 0;
  };
  q.ob = function(a) {
    if (this.j && (this.F = a, this.A || (this.status = this.F.status, this.statusText = this.F.statusText, this.A = a.headers, this.readyState = 2, Tl(this)), this.j && (this.readyState = 3, Tl(this), this.j)))
      if (this.responseType === "arraybuffer") a.arrayBuffer().then(this.mb.bind(this), this.ma.bind(this));
      else if (a.body && A.ReadableStream) {
        this.B = a.body.getReader();
        if (this.O) {
          if (this.responseType) throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
          this.o = [];
        } else this.o = this.v = "", this.P = new TextDecoder();
        Vl(this);
      } else a.text().then(this.nb.bind(this), this.ma.bind(this));
  };
  function Vl(a) {
    a.B.read().then(a.lb.bind(a)).catch(a.ma.bind(a));
  }
  __name(Vl, "Vl");
  q.lb = function(a) {
    if (this.j) {
      if (this.O && a.value) this.o.push(a.value);
      else if (!this.O) {
        var b = a.value ? a.value : new Uint8Array(0);
        if (b = this.P.decode(b, {
          stream: !a.done
        })) this.o = this.v += b;
      }
      a.done ? Ul(this) : Tl(this);
      this.readyState == 3 && Vl(this);
    }
  };
  q.nb = function(a) {
    this.j && (this.o = this.v = a, Ul(this));
  };
  q.mb = function(a) {
    this.j && (this.o = a, Ul(this));
  };
  q.ma = function() {
    this.j && Ul(this);
  };
  function Ul(a) {
    a.readyState = 4;
    a.F = null;
    a.B = null;
    a.P = null;
    Tl(a);
  }
  __name(Ul, "Ul");
  q.setRequestHeader = function(a, b) {
    this.M.append(a, b);
  };
  q.getResponseHeader = function(a) {
    return this.A ? this.A.get(a.toLowerCase()) || "" : "";
  };
  q.getAllResponseHeaders = function() {
    if (!this.A) return "";
    for (var a = [], b = this.A.entries(), c = b.next(); !c.done; ) c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
    return a.join("\r\n");
  };
  function Tl(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  __name(Tl, "Tl");
  Object.defineProperty(Sl.prototype, "withCredentials", {
    get: /* @__PURE__ */ __name(function() {
      return this.L === "include";
    }, "get"),
    set: /* @__PURE__ */ __name(function(a) {
      this.L = a ? "include" : "same-origin";
    }, "set")
  });
  function Wl(a) {
    this.j = null;
    this.l = a < 1;
    this.o = a < 0.01;
  }
  __name(Wl, "Wl");
  function Xl(a, b) {
    var c = c === void 0 ? {} : c;
    a.o && (c.sampling_samplePercentage = 0.01.toString(), a.j.info(b, c));
  }
  __name(Xl, "Xl");
  function Yl(a, b, c) {
    c = c === void 0 ? {} : c;
    a.l && (c.sampling_samplePercentage = 1 .toString(), Hl(a.j, b, c));
  }
  __name(Yl, "Yl");
  ;
  function Zl(a) {
    this.C = J(a);
  }
  __name(Zl, "Zl");
  x(Zl, M);
  Zl.prototype.getMessage = function() {
    return rd(this, 1);
  };
  function $l(a) {
    this.C = J(a);
  }
  __name($l, "$l");
  x($l, M);
  function am() {
    var a = new $l();
    return ud(a, 2, Date.now().toString());
  }
  __name(am, "am");
  ;
  function bm(a) {
    this.C = J(a);
  }
  __name(bm, "bm");
  x(bm, M);
  function cm(a) {
    this.C = J(a);
  }
  __name(cm, "cm");
  x(cm, M);
  function dm(a) {
    this.C = J(a);
  }
  __name(dm, "dm");
  x(dm, M);
  var em = Dd(dm);
  function fm(a) {
    this.C = J(a);
  }
  __name(fm, "fm");
  x(fm, M);
  function gm(a) {
    this.C = J(a);
  }
  __name(gm, "gm");
  x(gm, M);
  function hm(a, b) {
    return vd(a, 1, b);
  }
  __name(hm, "hm");
  gm.prototype.xa = function() {
    return ld(this, Zl, 5);
  };
  function lm(a) {
    this.C = J(a);
  }
  __name(lm, "lm");
  x(lm, M);
  function mm(a, b) {
    return vd(a, 1, b);
  }
  __name(mm, "mm");
  lm.prototype.xa = function() {
    return ld(this, Zl, 3);
  };
  function pm(a) {
    a = a === null ? "null" : a === void 0 ? "undefined" : a;
    var b;
    xf === void 0 && (xf = zf());
    a = (b = xf) ? b.createScriptURL(a) : a;
    return new Af(a);
  }
  __name(pm, "pm");
  ;
  function wm(a) {
    this.C = J(a);
  }
  __name(wm, "wm");
  x(wm, M);
  function xm(a) {
    this.C = J(a);
  }
  __name(xm, "xm");
  x(xm, M);
  function ym(a) {
    var b = new xm();
    return vd(b, 1, a);
  }
  __name(ym, "ym");
  function zm(a) {
    var b = ym(3);
    return nd(b, $l, 4, a);
  }
  __name(zm, "zm");
  function Am(a, b) {
    return nd(a, cm, 6, b);
  }
  __name(Am, "Am");
  ;
  function Fm() {
    B(this.o, this);
    this.j = new tl();
    this.j.l = false;
    this.j.o = false;
    this.l = this.j.j = false;
    this.v = {};
  }
  __name(Fm, "Fm");
  function Gm(a) {
    1 != a.l && (a.l = true);
  }
  __name(Gm, "Gm");
  Fm.prototype.o = function(a) {
    function b(f) {
      if (f) {
        if (f.value >= Nf.value) return "error";
        if (f.value >= Of.value) return "warn";
        if (f.value >= Pf.value) return "log";
      }
      return "debug";
    }
    __name(b, "b");
    if (!this.v[a.l()]) {
      var c = ul(this.j, a), d = Hm;
      if (d) {
        var e = b(a.v());
        Im(d, e, c, a.j());
      }
    }
  };
  var Hm = A.console;
  function Im(a, b, c, d) {
    if (a[b]) a[b](c, d === void 0 ? "" : d);
    else a.log(c, d === void 0 ? "" : d);
  }
  __name(Im, "Im");
  ;
  var ia;
  var ja;
  var la;
  var Lk;
  var Mk;
  var Nk;
  var Pk;

  // src/offscreen/runtime-api.js
  var Disposable = X;
  var createDeferred = Gg;
  var asLegacyPromise = Bg;
  var legacyAll = Eg;
  var normalizeError = Hf;
  var attachErrorContext = nb;
  var ownDisposable = dg;
  var EventHandler = Wi;
  var createSessionId = kf;
  var schedule = Qi;
  var serialize = Gc;
  var readNested = ld;
  var readString = td;
  var readOptionalValue = /* @__PURE__ */ __name((message, field) => vc(K(message, field)), "readOptionalValue");
  var readType = /* @__PURE__ */ __name((message) => pc(K(message, 1, void 0, Tc)), "readType");
  var readEchoType = /* @__PURE__ */ __name((message) => pc(K(message, 1)), "readEchoType");
  var readNumber = sd;
  var setString = ud;
  var setNumber = vd;
  var setNested = nd;
  var parseFrameRequest = em;
  var getResponseError = /* @__PURE__ */ __name((response) => response.xa(), "getResponseError");
  var unwrapMessageEvent = /* @__PURE__ */ __name((event) => event.j, "unwrapMessageEvent");
  var Messages = Object.freeze({
    Error: Zl,
    FrameConnection: $l,
    FrameRequest: bm,
    UserChange: cm,
    WebsiteRequest: dm,
    FrameResponse: fm,
    WebsiteResponse: gm,
    OffscreenResponse: lm,
    FrameConfiguration: wm,
    OffscreenRequest: xm
  });
  var createUrl = /* @__PURE__ */ __name((value) => new Sh(value), "createUrl");
  var setPath = Vh;
  function queryParameter(url, name, parse, fallback) {
    const values = url.o.la(name);
    return values.length !== 0 ? parse(values[0]) : fallback;
  }
  __name(queryParameter, "queryParameter");
  function createGoogleIframe(url) {
    const iframe = vj("IFRAME");
    iframe.id = "extensionFrame";
    Bf(iframe, pm(url));
    return iframe;
  }
  __name(createGoogleIframe, "createGoogleIframe");
  var SampledLogger = class {
    static {
      __name(this, "SampledLogger");
    }
    constructor(samplePercentage) {
      this.raw = new Wl(samplePercentage);
    }
    bind(reporter) {
      this.raw.j = reporter;
    }
    info(error) {
      return Xl(this.raw, error);
    }
    error(error, context) {
      return Yl(this.raw, error, context);
    }
  };
  function initializeConsoleLogging() {
    const logger = new Fm();
    Gm(logger);
    return logger;
  }
  __name(initializeConsoleLogging, "initializeConsoleLogging");
  function createErrorReporter(errorUrl, reportNonFatalErrors, sessionId, version, status) {
    const options = new wl();
    options.I = false;
    options.G = true;
    options.j = errorUrl;
    options.o = false;
    options.l = mh();
    options.A = false;
    options.v = Rl;
    const reporter = new vl(options);
    reporter.o.sessionTypeName = "offline-off-screen-document";
    reporter.o.reportsNonFatalErrors = String(reportNonFatalErrors);
    reporter.o.sid = sessionId;
    reporter.o.extensionVersion = version;
    reporter.o.optInStatus = status;
    return reporter;
  }
  __name(createErrorReporter, "createErrorReporter");
  var reportError = Hl;
  function drainLogsAfterConnectionTimeout(reporter) {
    return Eg([Ri(), $i(reporter.B)]);
  }
  __name(drainLogsAfterConnectionTimeout, "drainLogsAfterConnectionTimeout");

  // src/offscreen/runtime-messaging.js
  function sendWorkerRequest(request) {
    const reply = createDeferred();
    chrome.runtime.sendMessage(serialize(request), void 0, (wireResponse) => {
      const runtime = chrome.runtime;
      if (wireResponse === void 0) {
        reply.reject(
          Error(
            "No response from Offscreen page:" + (runtime.lastError ? runtime.lastError.message : "without lastError")
          )
        );
        return;
      }
      const response = new Messages.OffscreenResponse(wireResponse);
      const error = getResponseError(response);
      if (error)
        reply.reject(Error("Error from Offscreen page:" + readString(error, 1)));
      else reply.resolve(response);
    });
    return reply.promise.Ra((error) => {
      error = normalizeError(error);
      attachErrorContext(
        error,
        "offscreenDocumentRequestType",
        readNumber(request, 1).toString()
      );
      throw error;
    });
  }
  __name(sendWorkerRequest, "sendWorkerRequest");

  // src/shared/message-types.js
  var WebsiteRequest = Object.freeze({
    FRAME_CONNECTED: 1,
    ENSURE_OFFLINE: 2,
    USER_CHANGED: 3,
    FORWARD_TO_FRAME: 4,
    QUERY_DOMAIN_POLICY: 5
  });
  var OffscreenRequest = Object.freeze({
    RECREATE_FRAME: 1,
    FRAME_CONNECTED: 3,
    FORWARD_TO_FRAME: 4,
    REMOVE_FRAME: 5,
    ENSURE_FRAME: 6,
    USER_CHANGED: 7
  });
  var FrameRequest = Object.freeze({ ALARM: 0 });
  var OptInStatus = Object.freeze({
    UNKNOWN: "unknown",
    ENABLED: "opted_in",
    DISABLED: "opted_out"
  });
  var Timing = Object.freeze({
    HEARTBEAT_MINUTES: 5,
    OFFSCREEN_STARTUP_MS: 2e3,
    FRAME_RETRY_MS: 2e3,
    FRAME_CONNECT_TIMEOUT_MS: 14e3,
    OFFSCREEN_IDLE_MS: 6e4,
    OFFSCREEN_MAX_AGE_MS: 36e5,
    WORKER_RECOVERY_MS: 252e5
  });

  // src/offscreen/iframe-manager.js
  var GoogleIframeManager = class extends Disposable {
    static {
      __name(this, "GoogleIframeManager");
    }
    constructor(samplePercentage) {
      super();
      this.iframe = null;
      this.reporter = null;
      this.connection = createDeferred();
      this.connected = false;
      this.connectionTimeout = 0;
      this.docsOrigin = null;
      this.logger = new SampledLogger(samplePercentage);
    }
    buildFrameUrl(userId) {
      return setPath(this.docsOrigin, "/offline/extension/frame").toString() + "?ouid=" + (userId ? encodeURIComponent(String(userId)) : "");
    }
    remove() {
      self.clearTimeout(this.connectionTimeout);
      if (this.iframe) {
        if (this.connected) {
          this.connection = createDeferred();
          this.connected = false;
        }
        if (this.iframe.parentNode)
          this.iframe.parentNode.removeChild(this.iframe);
        this.iframe = null;
      }
      return Promise.resolve();
    }
    ensure(userId) {
      return this.iframe ? Promise.resolve() : this.recreate(userId);
    }
    recreate(userId) {
      if (!userId)
        this.logger.info(Error("Creating extension frame without an OUID."));
      const url = this.buildFrameUrl(userId);
      return this.remove().then(() => {
        this.iframe = createGoogleIframe(url);
        document.body.appendChild(this.iframe);
        this.connectionTimeout = schedule(() => {
          this.logger.error(Error("Timed out waiting for frame connection."));
          return drainLogsAfterConnectionTimeout(this.reporter).then(() => {
            self.close();
          });
        }, Timing.FRAME_CONNECT_TIMEOUT_MS);
        return Promise.resolve();
      });
    }
    acceptConnection(port) {
      this.connection.resolve(port);
      this.connected = true;
      self.clearTimeout(this.connectionTimeout);
    }
    request(request) {
      return Promise.resolve(this.connection.promise).then((connectionPort) => {
        const channel = new MessageChannel();
        return new Promise((resolve) => {
          channel.port1.onmessage = (event) => resolve(new Messages.FrameResponse(event.data));
          connectionPort.postMessage(serialize(request), [channel.port2]);
        }).finally(() => {
          channel.port1.close();
        });
      });
    }
    N() {
      this.remove();
      super.N();
    }
  };

  // src/offscreen/lifetime.js
  var OffscreenLifetime = class extends Disposable {
    static {
      __name(this, "OffscreenLifetime");
    }
    constructor() {
      super();
      this.reporter = null;
      this.activeConnections = 0;
      this.idleTimeout = 0;
      chrome.runtime.onConnectExternal.addListener(
        (port) => this.trackConnection(port)
      );
      schedule(() => {
        if (this.reporter)
          reportError(
            this.reporter,
            normalizeError("Force closed the offscreen document after one hour.")
          );
        self.close();
      }, Timing.OFFSCREEN_MAX_AGE_MS);
    }
    trackConnection(port) {
      this.activeConnections++;
      this.cancelIdleClose();
      port.onDisconnect.addListener(() => {
        this.activeConnections--;
        if (this.activeConnections === 0) this.scheduleIdleClose();
      });
    }
    cancelIdleClose() {
      self.clearTimeout(this.idleTimeout);
    }
    scheduleIdleClose() {
      if (this.activeConnections !== 0) return;
      this.cancelIdleClose();
      this.idleTimeout = schedule(() => {
        if (this.activeConnections === 0) self.close();
      }, Timing.OFFSCREEN_IDLE_MS);
    }
  };

  // src/offscreen/frame-message-router.js
  var FrameMessageRouter = class {
    static {
      __name(this, "FrameMessageRouter");
    }
    constructor(logger, dispatch) {
      this.logger = logger;
      this.dispatch = dispatch;
    }
    onMessage(wrappedEvent) {
      const event = unwrapMessageEvent(wrappedEvent);
      if (!(event && event.data && event.ports && event.ports.length)) {
        this.logger.error(Error("Dropped invalid event."), {
          event: String(wrappedEvent)
        });
        return;
      }
      const request = event.data ? parseFrameRequest(JSON.stringify(event.data)) : new Messages.WebsiteRequest();
      this.dispatchSafely(
        request,
        event.ports.length > 1 ? event.ports[1] : void 0
      ).then((response) => {
        event.ports[0].postMessage(serialize(response));
      });
    }
    dispatchSafely(request, connectionPort) {
      return asLegacyPromise().then(() => this.dispatch(request, connectionPort)).ta((error) => {
        error = error instanceof Error ? error : Error(error);
        const response = new Messages.WebsiteResponse();
        const payload = new Messages.Error();
        setNested(response, Messages.Error, 5, payload);
        setString(payload, 1, error.message);
        return response;
      });
    }
  };

  // src/offscreen/offscreen-controller.js
  var OffscreenController = class extends Disposable {
    static {
      __name(this, "OffscreenController");
    }
    constructor() {
      super();
      const url = createUrl(self.location);
      this.sessionId = queryParameter(
        url,
        "sessionId",
        String,
        createSessionId()
      );
      this.iframeManager = null;
      this.reporter = null;
      this.docsOriginString = null;
      this.lifetime = new OffscreenLifetime();
      this.lifetime.scheduleIdleClose();
      this.consoleLogger = initializeConsoleLogging();
      this.events = new EventHandler(this);
      ownDisposable(this, this.events);
      this.events.listen(self, "message", this.onWindowMessage);
      this.samplePercentage = queryParameter(
        url,
        "randomPercentageForSampling",
        Number,
        Math.random() * 100
      );
      this.reportNonFatalErrors = this.samplePercentage < 1;
      this.logger = new SampledLogger(this.samplePercentage);
      this.optInStatus = OptInStatus.UNKNOWN;
      this.userId = null;
      this.extensionVersion = "unknown";
      this.frameRouter = new FrameMessageRouter(
        this.logger,
        (request, port) => this.onFrameRequest(request, port)
      );
      chrome.runtime.onMessage.addListener(this.onWorkerMessage.bind(this));
    }
    onWindowMessage(event) {
      this.frameRouter.onMessage(event);
    }
    onFrameRequest(request, connectionPort) {
      const response = setNumber(
        new Messages.WebsiteResponse(),
        1,
        readEchoType(request)
      );
      switch (readType(request)) {
        case WebsiteRequest.FRAME_CONNECTED: {
          const connection = readNested(request, Messages.FrameConnection, 7);
          const userId = connection ? readString(connection, 1) : null;
          const information = setString(
            new Messages.FrameConnection(),
            2,
            Date.now().toString()
          );
          if (userId) setString(information, 1, userId);
          else
            this.logger.info(
              Error("Scheduler frame connect request sent without an ouid.")
            );
          const notification = setNumber(
            new Messages.OffscreenRequest(),
            1,
            OffscreenRequest.FRAME_CONNECTED
          );
          setNested(notification, Messages.FrameConnection, 4, information);
          return sendWorkerRequest(notification).then(() => {
            this.iframeManager.acceptConnection(connectionPort);
          }).then(() => response);
        }
        case WebsiteRequest.USER_CHANGED: {
          const notification = setNumber(
            new Messages.OffscreenRequest(),
            1,
            OffscreenRequest.USER_CHANGED
          );
          setNested(
            notification,
            Messages.UserChange,
            6,
            readNested(request, Messages.UserChange, 3)
          );
          return sendWorkerRequest(notification).then(() => response);
        }
        default:
          throw Error("Dropped unknown message " + request);
      }
    }
    onWorkerMessage(wireRequest, sender, reply) {
      this.lifetime.cancelIdleClose();
      const request = new Messages.OffscreenRequest(wireRequest);
      this.dispatch(request).then((response) => {
        reply(serialize(response));
      }).catch((error) => {
        error = error instanceof Error ? error : Error(error);
        const payload = setString(new Messages.Error(), 1, error.message);
        const response = setNumber(
          new Messages.OffscreenResponse(),
          1,
          readEchoType(request)
        );
        setNested(response, Messages.Error, 3, payload);
        reply(serialize(response));
      }).finally(() => {
        this.lifetime.scheduleIdleClose();
      });
      return true;
    }
    dispatch(request) {
      const response = setNumber(
        new Messages.OffscreenResponse(),
        1,
        readEchoType(request)
      );
      try {
        switch (readType(request)) {
          case OffscreenRequest.RECREATE_FRAME:
            this.initialize(request);
            return this.iframeManager.recreate(this.userId).then(() => response);
          case OffscreenRequest.FORWARD_TO_FRAME:
            return this.iframeManager.request(readNested(request, Messages.FrameRequest, 5)).then((frameResponse) => {
              setNested(response, Messages.FrameResponse, 4, frameResponse);
              return response;
            });
          case OffscreenRequest.REMOVE_FRAME:
            return this.iframeManager.remove().then(() => response);
          case OffscreenRequest.ENSURE_FRAME:
            this.initialize(request);
            return this.iframeManager.ensure(this.userId).then(() => response);
          default:
            throw Error("Dropped unknown message");
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    initialize(request) {
      if (this.iframeManager) return;
      const configuration = readNested(request, Messages.FrameConfiguration, 2);
      this.userId = readString(configuration, 1);
      this.docsOriginString = readString(configuration, 2);
      this.optInStatus = readOptionalValue(configuration, 4) ?? this.optInStatus;
      this.extensionVersion = readOptionalValue(configuration, 3) ?? this.extensionVersion;
      const docsOrigin = createUrl(this.docsOriginString);
      const errorUrl = setPath(docsOrigin, "/offline/jserror").toString();
      this.reporter = createErrorReporter(
        errorUrl,
        this.reportNonFatalErrors,
        this.sessionId,
        this.extensionVersion,
        this.optInStatus
      );
      ownDisposable(this, this.reporter);
      this.logger.bind(this.reporter);
      this.lifetime.reporter = this.reporter;
      this.iframeManager = new GoogleIframeManager(this.samplePercentage);
      this.iframeManager.reporter = this.reporter;
      this.iframeManager.logger.bind(this.reporter);
      this.iframeManager.docsOrigin = docsOrigin;
      ownDisposable(this, this.iframeManager);
    }
  };

  // src/offscreen/index.js
  new OffscreenController();
})();
//# sourceMappingURL=offscreendocument_main.js.map
