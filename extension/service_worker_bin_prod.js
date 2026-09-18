(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // src/vendor/background-runtime.js
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
  function ba(a) {
    return function() {
      return this[a];
    };
  }
  __name(ba, "ba");
  function ca(a) {
    return function() {
      return a;
    };
  }
  __name(ca, "ca");
  var p, da = typeof Object.create == "function" ? Object.create : function(a) {
    function b() {
    }
    __name(b, "b");
    b.prototype = a;
    return new b();
  }, ea = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a;
  };
  function fa(a) {
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
  __name(fa, "fa");
  var ha = fa(void 0);
  function r(a, b) {
    if (b) a: {
      var c = ha;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && b != null && ea(c, a, {
        configurable: true,
        writable: true,
        value: b
      });
    }
  }
  __name(r, "r");
  var ia;
  if (typeof Object.setPrototypeOf == "function") ia = Object.setPrototypeOf;
  else {
    a: {
      ka = {
        a: true
      }, la = {};
      try {
        la.__proto__ = ka;
        ja = la.a;
        break a;
      } catch (a) {
      }
      ja = false;
    }
    ia = ja ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var na = ia;
  function v(a, b) {
    a.prototype = da(b.prototype);
    a.prototype.constructor = a;
    if (na) na(a, b);
    else
      for (var c in b)
        if (c != "prototype")
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.W = b.prototype;
  }
  __name(v, "v");
  function oa(a) {
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
  __name(oa, "oa");
  function w(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if (typeof a.length == "number") return {
      next: oa(a)
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  __name(w, "w");
  function pa(a) {
    if (!(a instanceof Array)) {
      a = w(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  __name(pa, "pa");
  function qa(a) {
    if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object");
  }
  __name(qa, "qa");
  function y() {
    this.A = false;
    this.o = null;
    this.J = void 0;
    this.j = 1;
    this.v = this.D = 0;
    this.H = this.l = null;
  }
  __name(y, "y");
  function ra(a) {
    if (a.A) throw new TypeError("Generator is already running");
    a.A = true;
  }
  __name(ra, "ra");
  y.prototype.C = function(a) {
    this.J = a;
  };
  function sa(a, b) {
    a.l = {
      Ia: b,
      Oa: true
    };
    a.j = a.D || a.v;
  }
  __name(sa, "sa");
  y.prototype.getNextAddressJsc = ba("j");
  y.prototype.getYieldResultJsc = ba("J");
  y.prototype.return = function(a) {
    this.l = {
      return: a
    };
    this.j = this.v;
  };
  y.prototype["return"] = y.prototype.return;
  y.prototype.U = function(a) {
    this.l = {
      ha: a
    };
    this.v < a ? (this.j = a, this.l = null) : this.j = this.v;
  };
  y.prototype.jumpThroughFinallyBlocks = y.prototype.U;
  y.prototype.G = function(a, b) {
    this.j = b;
    return {
      value: a
    };
  };
  y.prototype.yield = y.prototype.G;
  y.prototype.fa = function(a, b) {
    a = w(a);
    var c = a.next();
    qa(c);
    if (c.done) this.J = c.value, this.j = b;
    else return this.o = a, this.G(c.value, b);
  };
  y.prototype.yieldAll = y.prototype.fa;
  y.prototype.ha = function(a) {
    this.j = a;
  };
  y.prototype.jumpTo = y.prototype.ha;
  y.prototype.V = function() {
    this.j = 0;
  };
  y.prototype.jumpToEnd = y.prototype.V;
  y.prototype.O = function(a, b) {
    this.D = a;
    b != void 0 && (this.v = b);
  };
  y.prototype.setCatchFinallyBlocks = y.prototype.O;
  y.prototype.ea = function(a) {
    this.D = 0;
    this.v = a || 0;
  };
  y.prototype.setFinallyBlock = y.prototype.ea;
  y.prototype.X = function(a, b) {
    this.j = a;
    this.D = b || 0;
  };
  y.prototype.leaveTryBlock = y.prototype.X;
  y.prototype.L = function(a) {
    this.D = a || 0;
    a = this.l.Ia;
    this.l = null;
    return a;
  };
  y.prototype.enterCatchBlock = y.prototype.L;
  y.prototype.M = function(a, b, c) {
    c ? this.H[c] = this.l : this.H = [this.l];
    this.D = a || 0;
    this.v = b || 0;
    this.l = null;
  };
  y.prototype.enterFinallyBlock = y.prototype.M;
  y.prototype.P = function(a, b) {
    b = this.H.splice(b || 0)[0];
    (b = this.l = this.l || b) ? b.Oa ? this.j = this.D || this.v : b.ha != void 0 && this.v < b.ha ? (this.j = b.ha, this.l = null) : this.j = this.v : this.j = a;
  };
  y.prototype.leaveFinallyBlock = y.prototype.P;
  y.prototype.R = function(a) {
    return new ta(a);
  };
  y.prototype.forIn = y.prototype.R;
  function ta(a) {
    this.o = a;
    this.j = [];
    for (var b in a) this.j.push(b);
    this.j.reverse();
  }
  __name(ta, "ta");
  ta.prototype.l = function() {
    for (; this.j.length > 0; ) {
      var a = this.j.pop();
      if (a in this.o) return a;
    }
    return null;
  };
  ta.prototype.getNext = ta.prototype.l;
  function ua(a) {
    this.j = new y();
    this.l = a;
  }
  __name(ua, "ua");
  function va(a, b) {
    ra(a.j);
    var c = a.j.o;
    if (c) return wa(a, "return" in c ? c["return"] : function(d) {
      return {
        value: d,
        done: true
      };
    }, b, a.j.return);
    a.j.return(b);
    return xa(a);
  }
  __name(va, "va");
  function wa(a, b, c, d) {
    try {
      var e = b.call(a.j.o, c);
      qa(e);
      if (!e.done) return a.j.A = false, e;
      var f = e.value;
    } catch (g) {
      return a.j.o = null, sa(a.j, g), xa(a);
    }
    a.j.o = null;
    d.call(a.j, f);
    return xa(a);
  }
  __name(wa, "wa");
  function xa(a) {
    for (; a.j.j; ) try {
      var b = a.l(a.j);
      if (b) return a.j.A = false, {
        value: b.value,
        done: false
      };
    } catch (c) {
      a.j.J = void 0, sa(a.j, c);
    }
    a.j.A = false;
    if (a.j.l) {
      b = a.j.l;
      a.j.l = null;
      if (b.Oa) throw b.Ia;
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
  __name(xa, "xa");
  function ya(a) {
    this.next = function(b) {
      ra(a.j);
      a.j.o ? b = wa(a, a.j.o.next, b, a.j.C) : (a.j.C(b), b = xa(a));
      return b;
    };
    this.throw = function(b) {
      ra(a.j);
      if (a.j.o) {
        var c = a.j.o["throw"];
        if (c) var d = wa(a, c, b, a.j.C);
        else {
          b = a.j.o;
          a.j.o = null;
          try {
            b["return"] && (d = b["return"](), qa(d)), sa(a.j, new TypeError(
              "The iterator does not provide a 'throw' method."
            ));
          } catch (e) {
            sa(a.j, e);
          }
          d = xa(a);
        }
      } else sa(a.j, b), d = xa(a);
      return d;
    };
    this.return = function(b) {
      return va(a, b);
    };
    this[Symbol.iterator] = function() {
      return this;
    };
  }
  __name(ya, "ya");
  function za(a) {
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
  __name(za, "za");
  function Aa() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b;
  }
  __name(Aa, "Aa");
  r("globalThis", function(a) {
    return a || ha;
  });
  r("Symbol", function(a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    __name(b, "b");
    function c(f, g) {
      this.j = f;
      ea(this, "description", {
        configurable: true,
        writable: true,
        value: g
      });
    }
    __name(c, "c");
    if (a) return a;
    c.prototype.toString = ba("j");
    var d = "jscomp_symbol_" + (Math.random() * 1e9 >>> 0) + "_", e = 0;
    return b;
  });
  r("Symbol.iterator", function(a) {
    if (a) return a;
    a = /* @__PURE__ */ Symbol("Symbol.iterator");
    ea(Array.prototype, a, {
      configurable: true,
      writable: true,
      value: /* @__PURE__ */ __name(function() {
        return Ba(oa(this));
      }, "value")
    });
    return a;
  });
  function Ba(a) {
    a = {
      next: a
    };
    a[Symbol.iterator] = function() {
      return this;
    };
    return a;
  }
  __name(Ba, "Ba");
  r("Promise", function(a) {
    function b(g) {
      this.j = 0;
      this.o = void 0;
      this.l = [];
      this.J = false;
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
          h.D();
        });
      }
      this.j.push(g);
    };
    var e = ha.setTimeout;
    c.prototype.o = function(g) {
      e(g, 0);
    };
    c.prototype.D = function() {
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
        reject: g(this.D)
      };
    };
    b.prototype.M = function(g) {
      if (g === this) this.D(new TypeError("A Promise cannot resolve to itself"));
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
        h ? this.L(g) : this.A(g);
      }
    };
    b.prototype.L = function(g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.D(k);
        return;
      }
      typeof h == "function" ? this.R(h, g) : this.A(g);
    };
    b.prototype.D = function(g) {
      this.C(2, g);
    };
    b.prototype.A = function(g) {
      this.C(1, g);
    };
    b.prototype.C = function(g, h) {
      if (this.j != 0) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.j);
      this.j = g;
      this.o = h;
      this.j === 2 && this.P();
      this.G();
    };
    b.prototype.P = function() {
      var g = this;
      e(function() {
        if (g.H()) {
          var h = ha.console;
          typeof h !== "undefined" && h.error(g.o);
        }
      }, 1);
    };
    b.prototype.H = function() {
      if (this.J) return false;
      var g = ha.CustomEvent, h = ha.Event, k = ha.dispatchEvent;
      if (typeof k === "undefined") return true;
      typeof g === "function" ? g = new g("unhandledrejection", {
        cancelable: true
      }) : typeof h === "function" ? g = new h("unhandledrejection", {
        cancelable: true
      }) : (g = ha.document.createEvent("CustomEvent"), g.initCustomEvent(
        "unhandledrejection",
        false,
        true,
        g
      ));
      g.promise = this;
      g.reason = this.o;
      return k(g);
    };
    b.prototype.G = function() {
      if (this.l != null) {
        for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
        this.l = null;
      }
    };
    var f = new c();
    b.prototype.O = function(g) {
      var h = this.v();
      g.ka(h.resolve, h.reject);
    };
    b.prototype.R = function(g, h) {
      var k = this.v();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    b.prototype.then = function(g, h) {
      function k(t, x) {
        return typeof t == "function" ? function(u) {
          try {
            l(t(u));
          } catch (N) {
            m(N);
          }
        } : x;
      }
      __name(k, "k");
      var l, m, q = new b(function(t, x) {
        l = t;
        m = x;
      });
      this.ka(k(g, l), k(h, m));
      return q;
    };
    b.prototype.catch = function(g) {
      return this.then(void 0, g);
    };
    b.prototype.ka = function(g, h) {
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
      this.J = true;
    };
    b.resolve = d;
    b.reject = function(g) {
      return new b(function(h, k) {
        k(g);
      });
    };
    b.race = function(g) {
      return new b(function(h, k) {
        for (var l = w(g), m = l.next(); !m.done; m = l.next()) d(m.value).ka(h, k);
      });
    };
    b.all = function(g) {
      var h = w(g), k = h.next();
      return k.done ? d([]) : new b(function(l, m) {
        function q(u) {
          return function(N) {
            t[u] = N;
            x--;
            x == 0 && l(t);
          };
        }
        __name(q, "q");
        var t = [], x = 0;
        do
          t.push(void 0), x++, d(k.value).ka(q(t.length - 1), m), k = h.next();
        while (!k.done);
      });
    };
    return b;
  });
  function Ca(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  __name(Ca, "Ca");
  var Da = typeof Object.assign == "function" ? Object.assign : function(a, b) {
    if (a == null) throw new TypeError("No nullish arg");
    a = Object(a);
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (d)
        for (var e in d) Ca(d, e) && (a[e] = d[e]);
    }
    return a;
  };
  r("Object.assign", function(a) {
    return a || Da;
  });
  r("Symbol.dispose", function(a) {
    return a ? a : /* @__PURE__ */ Symbol("Symbol.dispose");
  });
  r("Array.prototype.find", function(a) {
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
  r("WeakMap", function(a) {
    function b(k) {
      this.j = (h += Math.random() + 1).toString();
      if (k) {
        k = w(k);
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
      if (!Ca(k, g)) {
        var l = new c();
        ea(k, g, {
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
      } catch (q) {
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
      if (!Ca(k, g)) throw Error("WeakMap key fail: " + k);
      k[g][this.j] = l;
      return this;
    };
    b.prototype.get = function(k) {
      return d(k) && Ca(k, g) ? k[g][this.j] : void 0;
    };
    b.prototype.has = function(k) {
      return d(k) && Ca(
        k,
        g
      ) && Ca(k[g], this.j);
    };
    b.prototype.delete = function(k) {
      return d(k) && Ca(k, g) && Ca(k[g], this.j) ? delete k[g][this.j] : false;
    };
    return b;
  });
  r("Map", function(a) {
    function b() {
      var h = {};
      return h.previous = h.next = h.head = h;
    }
    __name(b, "b");
    function c(h, k) {
      var l = h[1];
      return Ba(function() {
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
      if (m && Ca(h[0], l))
        for (h = 0; h < m.length; h++) {
          var q = m[h];
          if (k !== k && q.key !== q.key || k === q.key) return {
            id: l,
            list: m,
            index: h,
            entry: q
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
        h = w(h);
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
        }), k = new a(w([
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
      } catch (q) {
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
  r("Set", function(a) {
    function b(c) {
      this.j = /* @__PURE__ */ new Map();
      if (c) {
        c = w(c);
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
        }), d = new a(w([c]));
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
  r("Object.values", function(a) {
    return a ? a : function(b) {
      var c = [], d;
      for (d in b) Ca(b, d) && c.push(b[d]);
      return c;
    };
  });
  r("Object.is", function(a) {
    return a ? a : function(b, c) {
      return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
    };
  });
  r("Array.prototype.includes", function(a) {
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
  function Ea(a, b, c) {
    if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  }
  __name(Ea, "Ea");
  r("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
      return Ea(this, b, "includes").indexOf(b, c || 0) !== -1;
    };
  });
  r("Array.from", function(a) {
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
  r("Object.entries", function(a) {
    return a ? a : function(b) {
      var c = [], d;
      for (d in b) Ca(b, d) && c.push([d, b[d]]);
      return c;
    };
  });
  r("Number.isFinite", function(a) {
    return a ? a : function(b) {
      return typeof b !== "number" ? false : !isNaN(b) && b !== Infinity && b !== -Infinity;
    };
  });
  r("Number.MAX_SAFE_INTEGER", ca(9007199254740991));
  r("Number.MIN_SAFE_INTEGER", ca(-9007199254740991));
  r("Number.isInteger", function(a) {
    return a ? a : function(b) {
      return Number.isFinite(b) ? b === Math.floor(b) : false;
    };
  });
  r("Number.isSafeInteger", function(a) {
    return a ? a : function(b) {
      return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
    };
  });
  r("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
      var d = Ea(this, b, "startsWith");
      b += "";
      var e = d.length, f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var g = 0; g < f && c < e; )
        if (d[c++] != b[g++]) return false;
      return g >= f;
    };
  });
  function Fa(a, b) {
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
  __name(Fa, "Fa");
  r("Array.prototype.entries", function(a) {
    return a ? a : function() {
      return Fa(this, function(b, c) {
        return [b, c];
      });
    };
  });
  r("Math.trunc", function(a) {
    return a ? a : function(b) {
      b = Number(b);
      if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
      var c = Math.floor(Math.abs(b));
      return b < 0 ? -c : c;
    };
  });
  r("Number.isNaN", function(a) {
    return a ? a : function(b) {
      return typeof b === "number" && isNaN(b);
    };
  });
  r("Array.prototype.keys", function(a) {
    return a ? a : function() {
      return Fa(this, aa());
    };
  });
  r("Array.prototype.values", function(a) {
    return a ? a : function() {
      return Fa(this, function(b, c) {
        return c;
      });
    };
  });
  r("Math.imul", function(a) {
    return a ? a : function(b, c) {
      b = Number(b);
      c = Number(c);
      var d = b & 65535, e = c & 65535;
      return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0;
    };
  });
  r("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
      var c = Ea(this, null, "repeat");
      if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
      b |= 0;
      for (var d = ""; b; )
        if (b & 1 && (d += c), b >>>= 1) c += c;
      return d;
    };
  });
  r("String.prototype.matchAll", function(a) {
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
  var Ga = Ga || {}, z = self;
  function Ha(a, b) {
    var c = Ia("CLOSURE_FLAGS");
    a = c && c[a];
    return a != null ? a : b;
  }
  __name(Ha, "Ha");
  function Ia(a) {
    a = a.split(".");
    for (var b = z, c = 0; c < a.length; c++)
      if (b = b[a[c]], b == null) return null;
    return b;
  }
  __name(Ia, "Ia");
  function Ja(a) {
    var b = typeof a;
    return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
  }
  __name(Ja, "Ja");
  function Ka(a) {
    var b = Ja(a);
    return b == "array" || b == "object" && typeof a.length == "number";
  }
  __name(Ka, "Ka");
  function La(a) {
    var b = typeof a;
    return b == "object" && a != null || b == "function";
  }
  __name(La, "La");
  var Na = "closure_uid_" + (Math.random() * 1e9 >>> 0), Oa = 0;
  function Pa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  __name(Pa, "Pa");
  function Qa(a, b, c) {
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
  __name(Qa, "Qa");
  function A(a, b, c) {
    A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Pa : Qa;
    return A.apply(null, arguments);
  }
  __name(A, "A");
  function Ra(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  __name(Ra, "Ra");
  function Sa(a) {
    (0, eval)(a);
  }
  __name(Sa, "Sa");
  function Ta(a) {
    return a;
  }
  __name(Ta, "Ta");
  function B(a, b) {
    function c() {
    }
    __name(c, "c");
    c.prototype = b.prototype;
    a.W = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Fc = function(d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  __name(B, "B");
  ;
  function Ua(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b);
    this.j = true;
  }
  __name(Ua, "Ua");
  B(Ua, Error);
  Ua.prototype.name = "CustomError";
  function Va(a) {
    z.setTimeout(function() {
      throw a;
    }, 0);
  }
  __name(Va, "Va");
  ;
  var Wa = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  var Xa = Ha(610401301, false), Ya = Ha(748402147, true);
  var Za, $a = z.navigator;
  Za = $a ? $a.userAgentData || null : null;
  function ab(a) {
    if (!Xa || !Za) return false;
    for (var b = 0; b < Za.brands.length; b++) {
      var c = Za.brands[b].brand;
      if (c && c.indexOf(a) != -1) return true;
    }
    return false;
  }
  __name(ab, "ab");
  function C(a) {
    var b;
    a: {
      if (b = z.navigator) {
        if (b = b.userAgent) break a;
      }
      b = "";
    }
    return b.indexOf(a) != -1;
  }
  __name(C, "C");
  ;
  function bb() {
    return Xa ? !!Za && Za.brands.length > 0 : false;
  }
  __name(bb, "bb");
  ;
  function cb(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  }
  __name(cb, "cb");
  function db(a, b) {
    return Array.prototype.some.call(a, b, void 0);
  }
  __name(db, "db");
  function eb(a, b) {
    b = cb(a, b);
    var c;
    (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  __name(eb, "eb");
  function fb(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (Ka(d)) {
        var e = a.length || 0, f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  __name(fb, "fb");
  ;
  var gb = C("Firefox") || C("FxiOS"), hb = C("Safari") && !((bb() ? ab("Chromium") : (C("Chrome") || C("CriOS")) && (bb() || !C("Edge")) || C(
    "Silk"
  )) || (bb() ? 0 : C("Coast")) || (bb() ? 0 : C("Opera")) || (bb() ? 0 : C("Edge")) || (bb() ? ab(
    "Microsoft Edge"
  ) : C("Edg/")) || (bb() ? ab("Opera") : C("OPR")) || C("Firefox") || C("FxiOS") || C(
    "Silk"
  ) || C("Android")) && !(C("iPhone") && !C("iPod") && !C("iPad") || C("iPad") || C("iPod"));
  var ib = {}, jb = null;
  var kb = typeof Uint8Array !== "undefined", lb = typeof btoa === "function", mb = {}, nb = typeof structuredClone != "undefined";
  function ob(a, b) {
    if (b !== mb) throw Error("illegal external caller");
    this.j = a;
    if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
  }
  __name(ob, "ob");
  function pb() {
    return qb || (qb = new ob(null, mb));
  }
  __name(pb, "pb");
  var qb;
  function rb(a, b, c) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382[b] = c;
  }
  __name(rb, "rb");
  function sb(a) {
    return a.__closure__error__context__984382 || {};
  }
  __name(sb, "sb");
  ;
  var tb = void 0;
  function ub(a, b) {
    if (a != null) {
      var c;
      var d = (c = tb) != null ? c : tb = {};
      c = d[a] || 0;
      c >= b || (d[a] = c + 1, a = Error(), rb(a, "severity", "incident"), Va(a));
    }
  }
  __name(ub, "ub");
  ;
  function vb() {
    return typeof BigInt === "function";
  }
  __name(vb, "vb");
  ;
  var wb = typeof Symbol === "function" && typeof /* @__PURE__ */ Symbol() === "symbol";
  function xb(a, b, c) {
    return typeof Symbol === "function" && typeof /* @__PURE__ */ Symbol() === "symbol" ? (c === void 0 ? 0 : c) && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : /* @__PURE__ */ Symbol() : b;
  }
  __name(xb, "xb");
  var yb = xb("jas", void 0, true), zb = xb(void 0, "0di"), Ab = xb(void 0, "1oa"), Bb = xb(void 0, /* @__PURE__ */ Symbol()), Cb = xb(void 0, "0ubs"), Db = xb(void 0, "0actk"), Eb = xb("m_m", "Ic", true);
  Math.max.apply(Math, pa(Object.values({
    fc: 1,
    cc: 2,
    Zb: 4,
    rc: 8,
    Bc: 16,
    mc: 32,
    Lb: 64,
    Xb: 128,
    Vb: 256,
    yc: 512,
    Wb: 1024,
    Yb: 2048,
    nc: 4096,
    hc: 8192
  })));
  var Fb = {
    qb: {
      value: 0,
      configurable: true,
      writable: true,
      enumerable: false
    }
  }, Gb = Object.defineProperties, D = wb ? yb : "qb", Hb, Ib = [];
  Jb(Ib, 7);
  Hb = Object.freeze(Ib);
  function Kb(a, b) {
    wb || D in a || Gb(a, Fb);
    a[D] |= b;
  }
  __name(Kb, "Kb");
  function Jb(a, b) {
    wb || D in a || Gb(a, Fb);
    a[D] = b;
  }
  __name(Jb, "Jb");
  function Lb(a) {
    Kb(a, 34);
    return a;
  }
  __name(Lb, "Lb");
  ;
  var Mb = {};
  function Nb(a, b) {
    return b === void 0 ? a.j !== Ob && !!(2 & (a.B[D] | 0)) : !!(2 & b) && a.j !== Ob;
  }
  __name(Nb, "Nb");
  var Ob = {}, Pb = Object.freeze({}), Qb = Object.freeze({});
  function Rb(a) {
    a.Hc = true;
    return a;
  }
  __name(Rb, "Rb");
  ;
  var Sb = Rb(function(a) {
    return typeof a === "number";
  }), Tb = Rb(function(a) {
    return typeof a === "string";
  }), Ub = Rb(function(a) {
    return typeof a === "boolean";
  }), Vb = Rb(function(a) {
    return typeof a === "bigint";
  });
  var Wb = typeof z.BigInt === "function" && typeof z.BigInt(0) === "bigint";
  function Xb(a) {
    var b = a;
    if (Tb(b)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
    } else if (Sb(b) && !Number.isSafeInteger(b)) throw Error(String(b));
    return Wb ? BigInt(a) : a = Ub(a) ? a ? "1" : "0" : Tb(a) ? a.trim() || "0" : String(a);
  }
  __name(Xb, "Xb");
  var Yb = Rb(function(a) {
    return Wb ? Vb(a) : Tb(a) && /^(?:-?[1-9]\d*|0)$/.test(a);
  }), dc = Rb(function(a) {
    return Wb ? a >= Zb && a <= $b : a[0] === "-" ? ac(a, bc) : ac(a, cc);
  }), bc = Number.MIN_SAFE_INTEGER.toString(), Zb = Wb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0, cc = Number.MAX_SAFE_INTEGER.toString(), $b = Wb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
  function ac(a, b) {
    if (a.length > b.length) return false;
    if (a.length < b.length || a === b) return true;
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = b[c];
      if (d > e) return false;
      if (d < e) return true;
    }
  }
  __name(ac, "ac");
  ;
  var F = 0, ec = 0;
  function fc(a) {
    var b = a >>> 0;
    F = b;
    ec = (a - b) / 4294967296 >>> 0;
  }
  __name(fc, "fc");
  function hc(a) {
    if (a < 0) {
      fc(0 - a);
      var b = w(ic(F, ec));
      a = b.next().value;
      b = b.next().value;
      F = a >>> 0;
      ec = b >>> 0;
    } else fc(a);
  }
  __name(hc, "hc");
  function jc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else vb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1e7 && (c += a / 1e7 >>> 0, a %= 1e7), c >= 1e7 && (b += c / 1e7 >>> 0, c %= 1e7), c = b + kc(c) + kc(a));
    return c;
  }
  __name(jc, "jc");
  function kc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  __name(kc, "kc");
  function lc() {
    var a = F, b = ec;
    b & 2147483648 ? vb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = w(ic(a, b)), a = b.next().value, b = b.next().value, a = "-" + jc(a, b)) : a = jc(a, b);
    return a;
  }
  __name(lc, "lc");
  function ic(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b];
  }
  __name(ic, "ic");
  ;
  var mc = typeof BigInt === "function" ? BigInt.asIntN : void 0, nc = Number.isSafeInteger, oc = Number.isFinite, pc = Math.trunc;
  function qc(a) {
    if (a == null || typeof a === "number") return a;
    if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a);
  }
  __name(qc, "qc");
  function rc(a) {
    return a.displayName || a.name || "unknown type name";
  }
  __name(rc, "rc");
  function sc(a) {
    if (typeof a !== "boolean") throw Error("Expected boolean but got " + Ja(a) + ": " + a);
    return a;
  }
  __name(sc, "sc");
  var tc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function uc(a) {
    switch (typeof a) {
      case "bigint":
        return true;
      case "number":
        return oc(a);
      case "string":
        return tc.test(a);
      default:
        return false;
    }
  }
  __name(uc, "uc");
  function vc(a) {
    return a == null ? a : oc(a) ? a | 0 : void 0;
  }
  __name(vc, "vc");
  function wc(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;
    else if (typeof a !== "number") return;
    return oc(a) ? a | 0 : void 0;
  }
  __name(wc, "wc");
  function xc(a) {
    var b = a.length;
    if (a[0] === "-" ? b < 20 || b === 20 && a <= "-9223372036854775808" : b < 19 || b === 19 && a <= "9223372036854775807") return a;
    if (a.length < 16) hc(Number(a));
    else if (vb()) a = BigInt(a), F = Number(a & BigInt(4294967295)) >>> 0, ec = Number(a >> BigInt(32) & BigInt(4294967295));
    else {
      b = +(a[0] === "-");
      ec = F = 0;
      for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), ec *= 1e6, F = F * 1e6 + d, F >= 4294967296 && (ec += Math.trunc(F / 4294967296), ec >>>= 0, F >>>= 0);
      b && (b = w(ic(F, ec)), a = b.next().value, b = b.next().value, F = a, ec = b);
    }
    return lc();
  }
  __name(xc, "xc");
  function yc(a) {
    uc(a);
    a = pc(a);
    if (!nc(a)) {
      hc(a);
      var b = F, c = ec;
      if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
      var d = c * 4294967296 + (b >>> 0);
      b = Number.isSafeInteger(d) ? d : jc(b, c);
      a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b;
    }
    return a;
  }
  __name(yc, "yc");
  function zc(a) {
    uc(a);
    a = pc(a);
    nc(a) ? a = String(a) : (hc(a), a = lc());
    return a;
  }
  __name(zc, "zc");
  function Ac(a) {
    var b = typeof a;
    if (a == null) return a;
    if (b === "bigint") return Xb(mc(64, a));
    if (uc(a)) return b === "string" ? (b = pc(Number(a)), nc(b) ? a = Xb(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = vb() ? Xb(mc(64, BigInt(a))) : Xb(xc(a)))) : a = nc(a) ? Xb(yc(a)) : Xb(
      zc(a)
    ), a;
  }
  __name(Ac, "Ac");
  function Bc(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  __name(Bc, "Bc");
  function Cc(a, b, c, d) {
    if (a != null && a[Eb] === Mb) return a;
    if (!Array.isArray(a)) return c ? d & 2 ? b[zb] || (b[zb] = Dc(b)) : new b() : void 0;
    c = a[D] | 0;
    d = c | d & 32 | d & 2;
    d !== c && Jb(a, d);
    return new b(a);
  }
  __name(Cc, "Cc");
  function Dc(a) {
    a = new a();
    Lb(a.B);
    return a;
  }
  __name(Dc, "Dc");
  ;
  function Ec(a) {
    return a;
  }
  __name(Ec, "Ec");
  ;
  function Fc() {
  }
  __name(Fc, "Fc");
  function Gc(a, b) {
    for (var c in a) !isNaN(c) && b(a, +c, a[c]);
  }
  __name(Gc, "Gc");
  function Hc(a) {
    var b = new Fc();
    Gc(a, function(c, d, e) {
      b[d] = Array.prototype.slice.call(e);
    });
    b.j = a.j;
    return b;
  }
  __name(Hc, "Hc");
  function Ic(a, b) {
    b < 100 || ub(Cb, 1);
  }
  __name(Ic, "Ic");
  ;
  function Jc(a, b, c, d) {
    var e = d !== void 0;
    d = !!d;
    var f = Ta(Bb), g;
    !e && wb && f && (g = a[f]) && Gc(g, Ic);
    f = [];
    var h = a.length;
    g = 4294967295;
    var k = false, l = !!(b & 64), m = l ? b & 128 ? 0 : -1 : void 0;
    if (!(b & 1)) {
      var q = h && a[h - 1];
      q != null && typeof q === "object" && q.constructor === Object ? (h--, g = h) : q = void 0;
      if (l && !(b & 128) && !e) {
        k = true;
        var t;
        g = ((t = Kc) != null ? t : Ec)(g - m, m, a, q, void 0) + m;
      }
    }
    b = void 0;
    for (t = 0; t < h; t++) {
      var x = a[t];
      if (x != null && (x = c(x, d)) != null)
        if (l && t >= g) {
          var u = t - m, N = void 0;
          ((N = b) != null ? N : b = {})[u] = x;
        } else f[t] = x;
    }
    if (q)
      for (var E in q) h = q[E], h != null && (h = c(h, d)) != null && (t = +E, x = void 0, l && !Number.isNaN(t) && (x = t + m) < g ? f[x] = h : (t = void 0, ((t = b) != null ? t : b = {})[E] = h));
    b && (k ? f.push(b) : f[g] = b);
    e && Ta(Bb) && (a = (c = Ta(Bb)) ? a[c] : void 0) && a instanceof Fc && (f[Bb] = Hc(a));
    return f;
  }
  __name(Jc, "Jc");
  function Lc(a) {
    switch (typeof a) {
      case "number":
        return Number.isFinite(a) ? a : "" + a;
      case "bigint":
        return dc(a) ? Number(a) : "" + a;
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (Array.isArray(a)) {
          var b = a[D] | 0;
          return a.length === 0 && b & 1 ? void 0 : Jc(a, b, Lc);
        }
        if (a != null && a[Eb] === Mb) return Mc(a);
        if (a instanceof ob) {
          b = a.j;
          if (b == null) a = "";
          else if (typeof b === "string") a = b;
          else {
            if (lb) {
              for (var c = "", d = 0, e = b.length - 10240; d < e; ) c += String.fromCharCode.apply(null, b.subarray(d, d += 10240));
              c += String.fromCharCode.apply(null, d ? b.subarray(d) : b);
              b = btoa(c);
            } else {
              c === void 0 && (c = 0);
              if (!jb) {
                jb = {};
                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                e = ["+/=", "+/", "-_=", "-_.", "-_"];
                for (var f = 0; f < 5; f++) {
                  var g = d.concat(e[f].split(""));
                  ib[f] = g;
                  for (var h = 0; h < g.length; h++) {
                    var k = g[h];
                    jb[k] === void 0 && (jb[k] = h);
                  }
                }
              }
              c = ib[c];
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
  __name(Lc, "Lc");
  var Nc = nb ? structuredClone : function(a) {
    return Jc(a, 0, Lc);
  }, Kc;
  function Mc(a) {
    a = a.B;
    return Jc(a, a[D] | 0, Lc);
  }
  __name(Mc, "Mc");
  ;
  function G(a, b, c) {
    return Oc(a, b, c, 2048);
  }
  __name(G, "G");
  function Oc(a, b, c, d) {
    d = d === void 0 ? 0 : d;
    if (a == null) {
      var e = 32;
      c ? (a = [c], e |= 128) : a = [];
      b && (e = e & -16760833 | (b & 1023) << 14);
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      e = a[D] | 0;
      if (Ya && 1 & e) throw Error("rfarr");
      2048 & e && !(2 & e) && Pc();
      if (e & 256) throw Error("farr");
      if (e & 64) return (e | d) !== e && Jb(a, e | d), a;
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
    Jb(a, e | 64 | d);
    return a;
  }
  __name(Oc, "Oc");
  function Pc() {
    if (Ya) throw Error("carr");
    ub(Db, 5);
  }
  __name(Pc, "Pc");
  ;
  function Qc(a, b) {
    if (typeof a !== "object") return a;
    if (Array.isArray(a)) {
      var c = a[D] | 0;
      a.length === 0 && c & 1 ? a = void 0 : c & 2 || (!b || 4096 & c || 16 & c ? a = Rc(a, c, false, b && !(c & 16)) : (Kb(a, 34), c & 4 && Object.freeze(a)));
      return a;
    }
    if (a != null && a[Eb] === Mb) return b = a.B, c = b[D] | 0, Nb(a, c) ? a : Sc(a, b, c) ? Tc(a, b) : Rc(
      b,
      c
    );
    if (a instanceof ob) return a;
  }
  __name(Qc, "Qc");
  function Tc(a, b, c) {
    a = new a.constructor(b);
    c && (a.j = Ob);
    a.l = Ob;
    return a;
  }
  __name(Tc, "Tc");
  function Rc(a, b, c, d) {
    d != null || (d = !!(34 & b));
    a = Jc(a, b, Qc, d);
    d = 32;
    c && (d |= 2);
    b = b & 16769217 | d;
    Jb(a, b);
    return a;
  }
  __name(Rc, "Rc");
  function Uc(a) {
    var b = a.B, c = b[D] | 0;
    return Nb(a, c) ? Sc(a, b, c) ? Tc(a, b, true) : new a.constructor(Rc(b, c, false)) : a;
  }
  __name(Uc, "Uc");
  function Vc(a) {
    if (a.j !== Ob) return false;
    var b = a.B;
    b = Rc(b, b[D] | 0);
    Kb(b, 2048);
    a.B = b;
    a.j = void 0;
    a.l = void 0;
    return true;
  }
  __name(Vc, "Vc");
  function Wc(a) {
    if (!Vc(a) && Nb(a, a.B[D] | 0)) throw Error();
  }
  __name(Wc, "Wc");
  function Xc(a, b) {
    b === void 0 && (b = a[D] | 0);
    b & 32 && !(b & 4096) && Jb(a, b | 4096);
  }
  __name(Xc, "Xc");
  function Sc(a, b, c) {
    return c & 2 ? true : c & 32 && !(c & 4096) ? (Jb(b, c | 2), a.j = Ob, true) : false;
  }
  __name(Sc, "Sc");
  ;
  var Yc = Xb(0), Zc = {};
  function H(a, b, c, d, e) {
    Object.isExtensible(a);
    b = $c(a.B, b, c, e);
    if (b !== null || d && a.l !== Ob) return b;
  }
  __name(H, "H");
  function $c(a, b, c, d) {
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
  __name($c, "$c");
  function ad(a, b, c) {
    Wc(a);
    var d = a.B;
    bd(d, d[D] | 0, b, c);
    return a;
  }
  __name(ad, "ad");
  function bd(a, b, c, d) {
    var e = c + -1, f = a.length - 1;
    if (f >= 0 && e >= f) {
      var g = a[f];
      if (g != null && typeof g === "object" && g.constructor === Object) return g[c] = d, b;
    }
    if (e <= f) return a[e] = d, b;
    if (d !== void 0) {
      var h;
      f = ((h = b) != null ? h : b = a[D] | 0) >> 14 & 1023 || 536870912;
      c >= f ? d != null && (e = {}, a[f + -1] = (e[c] = d, e)) : a[e] = d;
    }
    return b;
  }
  __name(bd, "bd");
  function cd(a, b, c, d, e, f, g, h) {
    var k = b;
    f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? dd(b) || (b |= !a.length || g && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256, b !== k && Jb(a, b), Object.freeze(a)) : (f === 2 && dd(b) && (a = Array.prototype.slice.call(a), k = 0, b = ed(b, d), d = bd(c, d, e, a)), dd(b) || (h || (b |= 16), b !== k && Jb(a, b)));
    2 & b || !(4096 & b || 16 & b) || Xc(c, d);
    return a;
  }
  __name(cd, "cd");
  function fd(a, b) {
    a = $c(a, b);
    return Array.isArray(a) ? a : Hb;
  }
  __name(fd, "fd");
  function gd(a, b) {
    2 & b && (a |= 2);
    return a | 1;
  }
  __name(gd, "gd");
  function dd(a) {
    return !!(2 & a) && !!(4 & a) || !!(256 & a);
  }
  __name(dd, "dd");
  function hd(a) {
    return a == null ? a : typeof a === "string" ? a ? new ob(a, mb) : pb() : a.constructor === ob ? a : kb && a != null && a instanceof Uint8Array ? a.length ? new ob(new Uint8Array(a), mb) : pb() : void 0;
  }
  __name(hd, "hd");
  function id(a, b) {
    Wc(a);
    var c = a.B;
    jd(c, c[D] | 0, b, 0);
    return a;
  }
  __name(id, "id");
  function kd(a, b, c) {
    return ld(a, b) === c ? c : -1;
  }
  __name(kd, "kd");
  function ld(a, b) {
    a = a.B;
    return md(nd(a), a, void 0, b);
  }
  __name(ld, "ld");
  function nd(a) {
    if (wb) {
      var b;
      return (b = a[Ab]) != null ? b : a[Ab] = /* @__PURE__ */ new Map();
    }
    if (Ab in a) return a[Ab];
    b = /* @__PURE__ */ new Map();
    Object.defineProperty(a, Ab, {
      value: b
    });
    return b;
  }
  __name(nd, "nd");
  function jd(a, b, c, d) {
    d === 0 || c.includes(d);
    var e = nd(a), f = md(e, a, b, c);
    f !== d && (f && bd(a, b, f), e.set(c, d));
  }
  __name(jd, "jd");
  function md(a, b, c, d) {
    var e = a.get(d);
    if (e != null) return e;
    for (var f = e = 0; f < d.length; f++) {
      var g = d[f];
      $c(b, g) != null && (e !== 0 && (c = bd(b, c, e)), e = g);
    }
    a.set(d, e);
    return e;
  }
  __name(md, "md");
  function od(a, b, c) {
    Wc(a);
    a = a.B;
    var d = a[D] | 0, e = $c(a, c), f = void 0 === Qb;
    b = Cc(e, b, !f, d);
    if (!f || b) return b = Uc(b), e !== b && (d = bd(a, d, c, b), Xc(a, d)), b;
  }
  __name(od, "od");
  function pd(a, b, c, d) {
    var e = false;
    d = $c(a, d, void 0, function(f) {
      var g = Cc(f, c, false, b);
      e = g !== f && g != null;
      return g;
    });
    if (d != null) return e && !Nb(d) && Xc(a, b), d;
  }
  __name(pd, "pd");
  function qd(a, b, c) {
    a = a.B;
    return pd(a, a[D] | 0, b, c) || b[zb] || (b[zb] = Dc(b));
  }
  __name(qd, "qd");
  function I(a, b, c) {
    var d = a.B, e = d[D] | 0;
    b = pd(d, e, b, c);
    if (b == null) return b;
    e = d[D] | 0;
    if (!Nb(a, e)) {
      var f = Uc(b);
      f !== b && (Vc(a) && (d = a.B, e = d[D] | 0), b = f, e = bd(d, e, c, b), Xc(d, e));
    }
    return b;
  }
  __name(I, "I");
  function rd(a, b, c) {
    var d = void 0 === Pb ? 2 : 4, e = a.B, f = e;
    e = e[D] | 0;
    var g = Nb(a, e), h = g ? 1 : d;
    d = h === 3;
    var k = !g;
    (h === 2 || k) && Vc(a) && (f = a.B, e = f[D] | 0);
    a = fd(f, c);
    var l = a === Hb ? 7 : a[D] | 0, m = gd(l, e);
    if (g = !(4 & m)) {
      var q = a, t = e, x = !!(2 & m);
      x && (t |= 2);
      for (var u = !x, N = true, E = 0, ma = 0; E < q.length; E++) {
        var U = Cc(q[E], b, false, t);
        if (U instanceof b) {
          if (!x) {
            var Ma = Nb(U);
            u && (u = !Ma);
            N && (N = Ma);
          }
          q[ma++] = U;
        }
      }
      ma < E && (q.length = ma);
      m |= 4;
      m = N ? m & -4097 : m | 4096;
      m = u ? m | 8 : m & -9;
    }
    m !== l && (Jb(a, m), 2 & m && Object.freeze(a));
    if (k && !(8 & m || !a.length && (h === 1 || (h !== 4 ? 0 : 2 & m || !(16 & m) && 32 & e)))) {
      dd(m) && (a = Array.prototype.slice.call(a), m = ed(m, e), e = bd(f, e, c, a));
      b = a;
      k = m;
      for (l = 0; l < b.length; l++) q = b[l], m = Uc(q), q !== m && (b[l] = m);
      k |= 8;
      m = k = b.length ? k | 4096 : k & -4097;
      Jb(a, m);
    }
    return a = cd(a, m, f, e, c, h, g, d);
  }
  __name(rd, "rd");
  function sd(a, b, c, d) {
    if (d != null) {
      if (!(d instanceof b)) throw Error("Expected instanceof " + rc(b) + " but got " + (d && rc(d.constructor)));
    } else d = void 0;
    ad(a, c, d);
    d && !Nb(d) && Xc(a.B);
    return a;
  }
  __name(sd, "sd");
  function ed(a, b) {
    return a = (2 & b ? a | 2 : a & -3) & -273;
  }
  __name(ed, "ed");
  function td(a, b) {
    var c = c === void 0 ? false : c;
    a = H(a, b);
    a = a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0;
    return a != null ? a : c;
  }
  __name(td, "td");
  function ud(a, b, c) {
    c = c === void 0 ? 0 : c;
    var d;
    return (d = wc(H(a, b))) != null ? d : c;
  }
  __name(ud, "ud");
  function vd(a, b) {
    var c = c === void 0 ? Yc : c;
    a = H(a, b, void 0, void 0, Ac);
    return a != null ? a : c;
  }
  __name(vd, "vd");
  function wd(a, b) {
    var c = c === void 0 ? "" : c;
    var d;
    return (d = Bc(H(a, b))) != null ? d : c;
  }
  __name(wd, "wd");
  function xd(a, b) {
    var c = c === void 0 ? 0 : c;
    var d;
    return (d = vc(H(a, b))) != null ? d : c;
  }
  __name(xd, "xd");
  function yd(a, b) {
    return Bc(H(a, b, void 0, Zc));
  }
  __name(yd, "yd");
  function zd(a) {
    return vc(H(a, 1, void 0, Zc));
  }
  __name(zd, "zd");
  function Ad(a, b, c) {
    if (c != null && typeof c !== "string") throw Error();
    return ad(a, b, c);
  }
  __name(Ad, "Ad");
  function Bd(a, b, c) {
    if (c != null) {
      if (!oc(c)) throw a = Error("enum"), rb(a, "severity", "warning"), a;
      c |= 0;
    }
    return ad(a, b, c);
  }
  __name(Bd, "Bd");
  ;
  function J(a, b, c) {
    this.B = G(a, b, c);
  }
  __name(J, "J");
  J.prototype.toJSON = function() {
    return Mc(this);
  };
  function Cd(a, b) {
    if (b == null || b == "") return new a();
    b = JSON.parse(b);
    if (!Array.isArray(b)) throw Error("dnarr");
    Kb(b, 32);
    return new a(b);
  }
  __name(Cd, "Cd");
  J.prototype.clone = function() {
    var a = this.B, b = a[D] | 0;
    return Sc(this, a, b) ? Tc(this, a, true) : new this.constructor(Rc(a, b, false));
  };
  function Dd() {
    var a = z;
    a = a === void 0 ? window : a;
    var b = new Ed(Fd("K1cgmc", a));
    a = Gd;
    var c = new Gd();
    b = Hd(b);
    a = b === null ? c : Cd(a, "[" + b.substring(4));
    c = a.B;
    b = c[D] | 0;
    return Nb(a, b) ? a : Sc(a, c, b) ? Tc(a, c) : new a.constructor(Rc(c, b, true));
  }
  __name(Dd, "Dd");
  J.prototype[Eb] = Mb;
  J.prototype.toString = function() {
    return this.B.toString();
  };
  function Id(a, b) {
    if (b == null) b = a.constructor, b = b[zb] || (b[zb] = Dc(b));
    else {
      a = a.constructor;
      if (!Array.isArray(b)) throw Error();
      if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error();
      b = new a(Lb(b));
    }
    return b;
  }
  __name(Id, "Id");
  ;
  function Jd(a) {
    return function(b) {
      return Cd(a, b);
    };
  }
  __name(Jd, "Jd");
  ;
  function Kd(a) {
    this.B = G(a);
  }
  __name(Kd, "Kd");
  v(Kd, J);
  Kd.prototype.getTypeName = function() {
    return wd(this, 1).split("/").pop();
  };
  var Ld = (function(a) {
    return Rb(function(b) {
      return b instanceof a && !Nb(b);
    });
  })(Kd);
  function Md(a) {
    var b = 2;
    b = b === void 0 ? 2 : b;
    this.key = a;
    this.defaultValue = false;
    this.phase = b;
    this.flagNameForDebugging = void 0;
  }
  __name(Md, "Md");
  Md.prototype.ctor = function(a) {
    return typeof a === "boolean" ? a : this.defaultValue;
  };
  function Nd() {
    var a = Od('[["feature named `pageObserver` was not found","feature named `hover` was not found"]]'), b = Pd, c = 2;
    c = c === void 0 ? 2 : c;
    this.key = "45696263";
    this.defaultValue = a;
    this.j = b;
    this.phase = c;
    this.flagNameForDebugging = void 0;
  }
  __name(Nd, "Nd");
  Nd.prototype.ctor = function(a) {
    if (typeof a === "string" && a) return Cd(this.j, a);
    if (!Ld(a)) return this.defaultValue.clone();
    var b;
    try {
      var c, d = this.j, e = (c = a.getTypeName()) != null ? c : "";
      if (wd(a, 1).split("/").pop() != e) var f = null;
      else {
        var g = typeof d === "function" ? d : d.constructor, h = a.B, k = h[D] | 0, l = $c(h, 2);
        Vc(a) && (h = a.B, k = h[D] | 0);
        a = h;
        if (l != null && !(Array.isArray(l) || l != null && l[Eb] === Mb)) throw Error(
          "saw an invalid value of type '" + Ja(l) + "' in the Any.value field"
        );
        var m = Cc(l, g, true, k);
        if (!(m instanceof g)) throw Error("incorrect type in any value: got " + m.constructor.displayName + ", expected " + g.displayName);
        (g = !!(2 & k)) || (m = Uc(m));
        l !== m && (bd(a, k, 2, m), g || Xc(a));
        f = m;
      }
    } catch (q) {
      f = null;
    }
    return (b = f) != null ? b : this.defaultValue.clone();
  };
  function Qd(a) {
    this.B = G(a);
  }
  __name(Qd, "Qd");
  v(Qd, J);
  Qd.prototype.clearValue = function() {
    return id(this, Rd);
  };
  var Rd = [1, 2];
  function Sd(a) {
    this.B = G(a);
  }
  __name(Sd, "Sd");
  v(Sd, J);
  Sd.prototype.clearValue = function() {
    return id(this, Td);
  };
  var Td = [2, 3, 4, 5, 6, 8];
  function Ud(a) {
    this.B = G(a);
  }
  __name(Ud, "Ud");
  v(Ud, J);
  Ud.prototype.La = function() {
    var a = H(this, 3, void 0, void 0, hd);
    return a == null ? pb() : a;
  };
  function Vd(a) {
    this.B = G(a);
  }
  __name(Vd, "Vd");
  v(Vd, J);
  var Wd = Jd(Vd);
  function Pd(a) {
    this.B = G(a);
  }
  __name(Pd, "Pd");
  v(Pd, J);
  var Od = Jd(Pd);
  function Xd(a, b) {
    this.K = a | 0;
    this.I = b | 0;
  }
  __name(Xd, "Xd");
  function Yd(a) {
    return a.I * 4294967296 + (a.K >>> 0);
  }
  __name(Yd, "Yd");
  p = Xd.prototype;
  p.isSafeInteger = function() {
    var a = this.I >> 21;
    return a == 0 || a == -1 && !(this.K == 0 && this.I == -2097152);
  };
  p.toString = function(a) {
    a = a || 10;
    if (a < 2 || 36 < a) throw Error("radix out of range: " + a);
    if (this.isSafeInteger()) {
      var b = Yd(this);
      return a == 10 ? "" + b : b.toString(a);
    }
    b = 14 - (a >> 2);
    var c = Math.pow(a, b), d = K(c, c / 4294967296);
    c = this.div(d);
    var e = Math, f = e.abs;
    d = c.multiply(d);
    d = this.add(Zd(d));
    e = f.call(e, Yd(d));
    f = a == 10 ? "" + e : e.toString(a);
    f.length < b && (f = "0000000000000".slice(f.length - b) + f);
    e = Yd(c);
    return (a == 10 ? e : e.toString(a)) + f;
  };
  function $d(a) {
    return a.K == 0 && a.I == 0;
  }
  __name($d, "$d");
  p.ya = function() {
    return this.K ^ this.I;
  };
  p.equals = function(a) {
    return a == null ? false : this.K == a.K && this.I == a.I;
  };
  p.compare = function(a) {
    return this.I == a.I ? this.K == a.K ? 0 : this.K >>> 0 > a.K >>> 0 ? 1 : -1 : this.I > a.I ? 1 : -1;
  };
  function Zd(a) {
    var b = ~a.K + 1 | 0;
    return K(b, ~a.I + !b | 0);
  }
  __name(Zd, "Zd");
  p.add = function(a) {
    var b = this.I >>> 16, c = this.I & 65535, d = this.K >>> 16, e = a.I >>> 16, f = a.I & 65535, g = a.K >>> 16;
    a = (this.K & 65535) + (a.K & 65535);
    g = (a >>> 16) + (d + g);
    d = g >>> 16;
    d += c + f;
    return K((g & 65535) << 16 | a & 65535, ((d >>> 16) + (b + e) & 65535) << 16 | d & 65535);
  };
  p.multiply = function(a) {
    if ($d(this)) return this;
    if ($d(a)) return a;
    var b = this.I >>> 16, c = this.I & 65535, d = this.K >>> 16, e = this.K & 65535, f = a.I >>> 16, g = a.I & 65535, h = a.K >>> 16;
    a = a.K & 65535;
    var k = e * a;
    var l = (k >>> 16) + d * a;
    var m = l >>> 16;
    l = (l & 65535) + e * h;
    m += l >>> 16;
    m += c * a;
    var q = m >>> 16;
    m = (m & 65535) + d * h;
    q += m >>> 16;
    m = (m & 65535) + e * g;
    q = q + (m >>> 16) + (b * a + c * h + d * g + e * f) & 65535;
    return K((l & 65535) << 16 | k & 65535, q << 16 | m & 65535);
  };
  p.div = function(a) {
    if ($d(a)) throw Error("division by zero");
    if (this.I < 0) {
      if (this.equals(ae)) {
        if (a.equals(be) || a.equals(ce)) return ae;
        if (a.equals(ae)) return be;
        var b = this.I;
        b = K(this.K >>> 1 | b << 31, b >> 1);
        b = b.div(a).shiftLeft(1);
        if (b.equals(de)) return a.I < 0 ? be : ce;
        var c = a.multiply(b);
        c = this.add(Zd(c));
        return b.add(c.div(a));
      }
      return a.I < 0 ? Zd(this).div(Zd(a)) : Zd(Zd(this).div(a));
    }
    if ($d(this)) return de;
    if (a.I < 0) return a.equals(ae) ? de : Zd(this.div(Zd(a)));
    b = de;
    for (c = this; c.compare(a) >= 0; ) {
      var d = Math.max(1, Math.floor(Yd(c) / Yd(a))), e = Math.ceil(Math.log(d) / Math.LN2);
      e = e <= 48 ? 1 : Math.pow(2, e - 48);
      for (var f = ee(d), g = f.multiply(a); g.I < 0 || g.compare(c) > 0; ) d -= e, f = ee(d), g = f.multiply(
        a
      );
      $d(f) && (f = be);
      b = b.add(f);
      c = c.add(Zd(g));
    }
    return b;
  };
  p.and = function(a) {
    return K(this.K & a.K, this.I & a.I);
  };
  p.or = function(a) {
    return K(this.K | a.K, this.I | a.I);
  };
  p.xor = function(a) {
    return K(this.K ^ a.K, this.I ^ a.I);
  };
  p.shiftLeft = function(a) {
    a &= 63;
    if (a == 0) return this;
    var b = this.K;
    return a < 32 ? K(b << a, this.I << a | b >>> 32 - a) : K(0, b << a - 32);
  };
  function ee(a) {
    return a > 0 ? a >= 9223372036854776e3 ? fe : new Xd(a, a / 4294967296) : a < 0 ? a <= -9223372036854776e3 ? ae : Zd(new Xd(-a, -a / 4294967296)) : de;
  }
  __name(ee, "ee");
  function K(a, b) {
    return new Xd(a, b);
  }
  __name(K, "K");
  var de = K(0, 0), be = K(1, 0), ce = K(-1, -1), fe = K(4294967295, 2147483647), ae = K(0, 2147483648);
  function Fd(a, b) {
    b = b === void 0 ? window : b;
    b = b === void 0 ? window : b;
    return (b = b.WIZ_global_data) && a in b ? b[a] : null;
  }
  __name(Fd, "Fd");
  ;
  var ge;
  function he() {
    return ge = ge || new ie();
  }
  __name(he, "he");
  function ie() {
    var a = null;
    var b = Fd("TSDtV", window);
    if (b = typeof b !== "string" ? null : b) a = Wd("[" + b.substring(4)), a = rd(a, Ud, 1)[0];
    if (a) {
      b = w(rd(a, Sd, 2));
      var c = b.next(), d;
      try {
        for (; !c.done; c = b.next()) {
          var e = c.value, f = e.B;
          if (pd(f, f[D] | 0, Kd, kd(e, Td, 6)) !== void 0) throw Error();
        }
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
    }
    var g;
    if (a) {
      d = {};
      e = w(rd(a, Sd, 2));
      f = e.next();
      try {
        for (; !f.done; f = e.next()) {
          var h = f.value, k = vd(h, 1).toString();
          switch (ld(h, Td)) {
            case 3:
              d[k] = td(h, kd(h, Td, 3));
              break;
            case 2:
              var l = vd(h, kd(h, Td, 2));
              Yb(l);
              dc(l);
              var m = dc(l) ? Number(l) : String(l);
              d[k] = m;
              break;
            case 4:
              b = void 0;
              c = h;
              var q = kd(h, Td, 4), t = void 0;
              t = t === void 0 ? 0 : t;
              var x = (b = H(c, q, void 0, void 0, qc)) != null ? b : t;
              d[k] = x;
              break;
            case 5:
              d[k] = wd(h, kd(h, Td, 5));
              break;
            case 6:
              d[k] = I(h, Kd, kd(h, Td, 6));
              break;
            case 8:
              var u = qd(h, Qd, kd(h, Td, 8));
              switch (ld(u, Rd)) {
                case 1:
                  d[k] = wd(u, kd(u, Rd, 1));
                  break;
                default:
                  throw Error("case " + ld(u, Rd));
              }
              break;
            default:
              throw Error("case " + ld(h, Td));
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
  __name(ie, "ie");
  function je(a, b) {
    return b.phase !== 1 && b.key in a.j ? b.ctor(a.j[b.key]) : b.defaultValue;
  }
  __name(je, "je");
  ie.prototype.La = ba("l");
  function ke(a) {
    this.B = G(a);
  }
  __name(ke, "ke");
  v(ke, J);
  var le = new Nd();
  var me = new Md("45723104");
  var ne = new Md("45765314");
  function oe(a) {
    this.B = G(a);
  }
  __name(oe, "oe");
  v(oe, J);
  var pe = /* @__PURE__ */ (function(a) {
    return function() {
      return a[zb] || (a[zb] = Dc(a));
    };
  })(oe);
  /* @__PURE__ */ Object.create(null);
  function L() {
  }
  __name(L, "L");
  L.prototype.equals = function(a) {
    return qe(this, a);
  };
  L.prototype.ya = function() {
    return this.D || (Object.defineProperties(this, {
      D: {
        value: re = re + 1 | 0,
        enumerable: false
      }
    }), this.D);
  };
  L.prototype.toString = function() {
    return M(se(O(te(this)))) + "@" + M((this.ya() >>> 0).toString(16));
  };
  L.prototype.F = ["java.lang.Object", 0];
  function ue() {
  }
  __name(ue, "ue");
  v(ue, L);
  function P(a, b) {
    a.j = b;
    ve(b, a);
  }
  __name(P, "P");
  function Q(a) {
    we(a.j) && (Error.captureStackTrace ? Error.captureStackTrace(R(a.j, we, xe)) : R(a.j, we, xe).stack = Error().stack);
  }
  __name(Q, "Q");
  ue.prototype.toString = function() {
    var a = se(O(te(this))), b = this.l;
    return b == null ? a : M(a) + ": " + M(b);
  };
  function ye(a) {
    if (a != null) {
      var b = a.Za;
      if (b != null) return b;
    }
    a instanceof TypeError ? b = ze() : (b = new Ae(), Q(b), P(b, Error(b)));
    b.l = a == null ? "null" : a.toString();
    P(b, a);
    return b;
  }
  __name(ye, "ye");
  function Be(a) {
    return a instanceof ue;
  }
  __name(Be, "Be");
  ue.prototype.F = ["java.lang.Throwable", 0];
  function Ce() {
  }
  __name(Ce, "Ce");
  v(Ce, ue);
  Ce.prototype.F = ["java.lang.Exception", 0];
  function De() {
  }
  __name(De, "De");
  v(De, Ce);
  De.prototype.F = ["java.lang.RuntimeException", 0];
  function Ee() {
  }
  __name(Ee, "Ee");
  v(Ee, De);
  Ee.prototype.F = ["java.lang.IndexOutOfBoundsException", 0];
  var Fe;
  function Ge() {
    Ge = n();
    for (var a = He(), b = 0; b < 256; b = b + 1 | 0) Ie(a, b, Je(b - 128 | 0));
    Fe = a;
  }
  __name(Ge, "Ge");
  ;
  function Ke() {
  }
  __name(Ke, "Ke");
  v(Ke, De);
  Ke.prototype.F = ["java.lang.ArithmeticException", 0];
  function Le() {
  }
  __name(Le, "Le");
  v(Le, De);
  Le.prototype.F = ["java.lang.ArrayStoreException", 0];
  function Me() {
  }
  __name(Me, "Me");
  v(Me, De);
  Me.prototype.F = ["java.lang.ClassCastException", 0];
  function Ne() {
  }
  __name(Ne, "Ne");
  v(Ne, De);
  Ne.prototype.F = ["java.lang.IllegalArgumentException", 0];
  function Oe() {
  }
  __name(Oe, "Oe");
  v(Oe, De);
  function Pe(a) {
    var b = new Oe();
    b.l = a;
    Q(b);
    P(b, Error(b));
    return b;
  }
  __name(Pe, "Pe");
  Oe.prototype.F = ["java.lang.IllegalStateException", 0];
  function Ae() {
  }
  __name(Ae, "Ae");
  v(Ae, De);
  Ae.prototype.F = ["java.lang.JsException", 0];
  function Qe() {
  }
  __name(Qe, "Qe");
  v(Qe, Ae);
  function ze() {
    var a = new Qe();
    Q(a);
    P(a, new TypeError(a));
    return a;
  }
  __name(ze, "ze");
  Qe.prototype.F = ["java.lang.NullPointerException", 0];
  function Re() {
  }
  __name(Re, "Re");
  v(Re, Ee);
  Re.prototype.F = ["java.lang.StringIndexOutOfBoundsException", 0];
  function Se() {
  }
  __name(Se, "Se");
  var Te;
  v(Se, L);
  Se.prototype.F = ["java.lang.Number", 0];
  function Ue() {
  }
  __name(Ue, "Ue");
  v(Ue, Se);
  Ue.prototype.F = ["java.lang.Double", 0];
  function Ve(a) {
    return ee(a);
  }
  __name(Ve, "Ve");
  function We(a) {
    if (!isFinite(a)) throw a = new Ke(), Q(a), P(a, Error(a)), a.j;
    return a | 0;
  }
  __name(We, "We");
  ;
  function Xe() {
  }
  __name(Xe, "Xe");
  v(Xe, L);
  Xe.prototype.F = ["java.lang.Boolean", 0];
  function R(a, b, c) {
    if (a != null && !b(a)) throw a = M(se(Ye(a))) + " cannot be cast to " + M(se(O(c))), b = new Me(), b.l = a, Q(b), P(b, Error(b)), b.j;
    return a;
  }
  __name(R, "R");
  ;
  function te(a) {
    return a.constructor;
  }
  __name(te, "te");
  function Ze(a, b, c) {
    if (Object.prototype.hasOwnProperty.call(a.prototype, b)) return a.prototype[b];
    c = c();
    return a.prototype[b] = c;
  }
  __name(Ze, "Ze");
  ;
  function qe(a, b) {
    return Object.is(a, b) || a == null && b == null;
  }
  __name(qe, "qe");
  ;
  var re = 0;
  function Ye(a) {
    switch (S(typeof a)) {
      case "number":
        return O(Ue);
      case "boolean":
        return O(Xe);
      case "string":
        return O($e);
      case "function":
        return O(af);
    }
    if (a instanceof Xd) a = O(bf);
    else if (a instanceof L) a = O(te(a));
    else if (Array.isArray(a)) a = (a = a.ra) ? O(a.ca, a.ba) : O(L, 1);
    else if (a != null) a = O(cf);
    else throw new TypeError("null.getClass()");
    return a;
  }
  __name(Ye, "Ye");
  ;
  function af() {
  }
  __name(af, "af");
  af.prototype.F = ["<native function>", 1];
  function cf() {
  }
  __name(cf, "cf");
  v(cf, L);
  cf.prototype.F = ["<native object>", 0];
  function df() {
    this.Y = 0;
  }
  __name(df, "df");
  v(df, Se);
  function ef(a) {
    a > -129 && a < 128 ? (Ge(), a = Fe[a + 128 | 0]) : a = Je(a);
    return a;
  }
  __name(ef, "ef");
  function Je(a) {
    var b = new df();
    b.Y = a;
    return b;
  }
  __name(Je, "Je");
  df.prototype.equals = function(a) {
    return ff(a) && R(a, ff, df).Y == this.Y;
  };
  df.prototype.ya = ba("Y");
  df.prototype.toString = function() {
    return "" + this.Y;
  };
  function ff(a) {
    return a instanceof df;
  }
  __name(ff, "ff");
  df.prototype.F = ["java.lang.Integer", 0];
  function bf() {
  }
  __name(bf, "bf");
  v(bf, Se);
  bf.prototype.F = ["java.lang.Long", 0];
  function gf() {
  }
  __name(gf, "gf");
  v(gf, Ne);
  gf.prototype.F = ["java.lang.NumberFormatException", 0];
  function S(a) {
    if (a == null) throw ze().j;
    return a;
  }
  __name(S, "S");
  ;
  function He() {
    var a = [256];
    return hf(a, {
      ca: df,
      oa: ff,
      ba: a.length
    });
  }
  __name(He, "He");
  function hf(a, b) {
    var c = a[0];
    if (c == null) return null;
    var d = new globalThis.Array(c);
    b && (d.ra = b);
    if (a.length > 1) {
      a = a.slice(1);
      b = b && {
        ca: b.ca,
        oa: b.oa,
        ba: b.ba - 1
      };
      for (var e = 0; e < c; e++) d[e] = hf(a, b);
    } else if (b && (a = b.ca.Ib, a !== void 0))
      for (b = 0; b < c; b++) d[b] = a;
    return d;
  }
  __name(hf, "hf");
  function Ie(a, b, c) {
    var d;
    if (!(d = c == null)) a: {
      var e = a.ra;
      if (e) {
        if (e.ba > 1) {
          d = e.ca;
          var f = e.oa;
          e = e.ba - 1;
          if (c != null && Array.isArray(c)) {
            var g = c.ra || {
              ca: L,
              ba: 1
            }, h = g.ba;
            h == e ? (e = g.ca, d = e === d ? true : d && d.prototype.Ra || e && e.prototype.Ra ? false : f(e.prototype)) : d = h > e ? L == d : false;
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
    if (!d) throw a = new Le(), Q(a), P(a, Error(a)), a.j;
    a[b] = c;
  }
  __name(Ie, "Ie");
  ;
  function $e() {
  }
  __name($e, "$e");
  v($e, L);
  function M(a) {
    return a == null ? "null" : a.toString();
  }
  __name(M, "M");
  function jf(a) {
    if (!(a >= 0)) throw a = new Ne(), Q(a), P(a, Error(a)), a.j;
    return "0".repeat(a);
  }
  __name(jf, "jf");
  $e.prototype.F = ["java.lang.String", 0];
  function kf(a, b) {
    this.j = a;
    this.l = b;
  }
  __name(kf, "kf");
  v(kf, L);
  function O(a, b) {
    var c = b || 0;
    return Ze(a, "$$class/" + c, function() {
      return new kf(a, c);
    });
  }
  __name(O, "O");
  function se(a) {
    return a.l != 0 ? M(lf("[", a.l)) + M(a.j.prototype.F[1] == 3 ? a.j.prototype.F[2] : "L" + M(a.j.prototype.F[0]) + ";") : a.j.prototype.F[0];
  }
  __name(se, "se");
  function mf(a, b) {
    b = a.lastIndexOf(b) + 1 | 0;
    var c = a.length + 1 | 0;
    if (b < 0 || b >= c) throw a = new Re(), a.l = "Index: " + b + ", Size: " + c, Q(a), P(a, Error(a)), a.j;
    return a.substr(b);
  }
  __name(mf, "mf");
  kf.prototype.toString = function() {
    return String(this.l == 0 && this.j.prototype.F[1] == 1 ? "interface " : this.l == 0 && this.j.prototype.F[1] == 3 ? "" : "class ") + M(se(this));
  };
  function lf(a, b) {
    for (var c = "", d = 0; d < b; d = d + 1 | 0) c = M(c) + M(a);
    return c;
  }
  __name(lf, "lf");
  kf.prototype.F = ["java.lang.Class", 0];
  function xe() {
  }
  __name(xe, "xe");
  function we(a) {
    return a instanceof Error;
  }
  __name(we, "we");
  xe.prototype.F = ["Error", 0];
  function ve(a, b) {
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
  __name(ve, "ve");
  ;
  function nf(a, b) {
    this.o = b;
    this.l = a;
    Q(this);
    P(this, Error(this));
  }
  __name(nf, "nf");
  v(nf, De);
  ha.Object.defineProperties(nf.prototype, {
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
  nf.prototype.getMessage = ba("l");
  nf.prototype.F = ["com.google.apps.docs.xplat.base.XplatException", 0];
  function of() {
  }
  __name(of, "of");
  function pf(a) {
    return a instanceof Error;
  }
  __name(pf, "pf");
  of.prototype.F = ["Error", 0];
  function qf() {
    var a = a == null ? function(c) {
      return Math.max(Math.min(Math.floor(Math.random() * c), 2147483647), -2147483648) | 0;
    } : a;
    var b = (a(2147483647) >>> 0).toString(16);
    b = M(jf(Math.max(0, 8 - b.length | 0))) + M(b);
    a = (a(2147483647) >>> 0).toString(16);
    return M(a) + M(b);
  }
  __name(qf, "qf");
  ;
  function rf() {
  }
  __name(rf, "rf");
  function sf(a) {
    return a instanceof Array;
  }
  __name(sf, "sf");
  rf.prototype.F = ["Array", 0];
  function tf() {
  }
  __name(tf, "tf");
  function uf(a) {
    return a instanceof Object;
  }
  __name(uf, "uf");
  tf.prototype.F = ["Object", 0];
  function vf() {
  }
  __name(vf, "vf");
  function wf(a) {
    return a instanceof Object;
  }
  __name(wf, "wf");
  vf.prototype.F = ["Object", 0];
  var xf = {
    jc: "build-label",
    Jb: "buildLabel",
    Kb: "clientLog",
    Ob: "docId",
    lc: "mobile-app-version",
    xc: "severity",
    vc: "reportSeverity",
    Cc: "severity-unprefixed",
    ac: "isArrayPrototypeIntact",
    bc: "isEditorElementAttached",
    Tb: "documentCharacterSet",
    dc: "isModuleLoadFailure",
    uc: "reportName",
    kc: "locale",
    Mb: "createdOnServer",
    qc: "numUnsavedCommands",
    Nb: "cspViolationContext",
    tc: "relatedToBrowserExtension",
    Ec: "workerError",
    Pb: "docosPostLimitExceeded",
    Qb: "docosPostLimitType",
    Rb: "docosReactionLimitExceeded",
    Sb: "docosReactionLimitType",
    sc: "origin",
    wc: "saveTakingTooLongOnClient",
    zc: "truncatedCommentNotificationsCount",
    Ac: "truncatedCommentNotificationsFromPayload",
    oc: "nonfatalReason",
    Dc: "usesModuleSetsServing",
    ec: "isNestedDrawingsEnabled",
    Ub: "embeddedDrawingState"
  };
  function yf() {
    this.j = false;
  }
  __name(yf, "yf");
  var zf;
  v(yf, L);
  p = yf.prototype;
  p.dispose = function() {
    if (this.j) var a = null;
    else this.j = true, a = this.v == null ? zf : this.v, this.v = null;
    if (a != null) {
      this.sa();
      if (a.length != 0)
        for (var b = 0; b < a.length; b++) a[b].dispose();
      a = O(te(this));
      mf(mf(M(a.j.prototype.F[0]) + M(lf("[]", a.l)), "."), "$");
    }
  };
  p.na = ba("j");
  p.sa = n();
  p.toString = function() {
    return L.prototype.toString.call(this) || "";
  };
  function Af() {
    Af = n();
    zf = R([], sf, rf);
  }
  __name(Af, "Af");
  p.F = ["com.google.apps.xplat.disposable.Disposable", 0];
  function Bf(a) {
    if (a == null) return a = new ue(), Q(a), P(a, Error(a)), a;
    if (Be(a)) return R(a, Be, ue);
    if (pf(a)) return a = R(a, pf, of), ye(a);
    a = new Ne();
    a.l = "Unsupported type cannot be used to create a Throwable.";
    Q(a);
    P(a, Error(a));
    throw a.j;
  }
  __name(Bf, "Bf");
  ;
  function Cf(a) {
    var b = z.onerror;
    z.onerror = function(c, d, e, f, g) {
      b && b(c, d, e, f, g);
      a({
        message: c,
        fileName: d,
        line: e,
        lineNumber: e,
        Gc: f,
        error: g
      });
      return true;
    };
  }
  __name(Cf, "Cf");
  function Df(a) {
    var b = Ia("window.location.href");
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
      var e = a.fileName || a.filename || a.sourceURL || z.$googDebugFname || b;
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
  function T(a, b) {
    a instanceof Error || (a = Error(a), Error.captureStackTrace && Error.captureStackTrace(a, T));
    a.stack || (a.stack = Hf(T));
    if (b) {
      for (var c = 0; a["message" + c]; ) ++c;
      a["message" + c] = String(b);
    }
    return a;
  }
  __name(T, "T");
  function If(a, b) {
    a = T(a);
    if (b)
      for (var c in b) rb(a, c, b[c]);
    return a;
  }
  __name(If, "If");
  function Hf(a) {
    var b = Error();
    if (Error.captureStackTrace) Error.captureStackTrace(b, a || Hf), b = String(b.stack);
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
  __name(Hf, "Hf");
  function Kf(a, b) {
    var c = [];
    if (cb(b, a) >= 0) c.push("[...circular reference...]");
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
  Mf.prototype.toString = ba("name");
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
  function V(a, b) {
    var c = arguments.length == 2 ? Zf(arguments[1], 0) : Zf(arguments, 1);
    return Xf(a, c);
  }
  __name(V, "V");
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
      Ka(d) ? cg.apply(null, d) : bg(d);
    }
  }
  __name(cg, "cg");
  ;
  function W() {
    this.J = this.J;
    this.D = this.D;
  }
  __name(W, "W");
  W.prototype.J = false;
  W.prototype.na = ba("J");
  W.prototype.dispose = function() {
    this.J || (this.J = true, this.N());
  };
  W.prototype[Symbol.dispose] = function() {
    this.dispose();
  };
  function dg(a, b) {
    b = Ra(bg, b);
    a.J ? b() : (a.D || (a.D = []), a.D.push(b));
  }
  __name(dg, "dg");
  W.prototype.N = function() {
    if (this.D)
      for (; this.D.length; ) this.D.shift()();
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
      for (var b = 0; b < ig.length; b++) a(A(ig[b].j, ig[b]));
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
        Va(b);
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
  function X(a) {
    this.j = 0;
    this.J = void 0;
    this.v = this.l = this.o = null;
    this.D = this.A = false;
    if (a != ug) try {
      var b = this;
      a.call(void 0, function(c) {
        wg(b, 2, c);
      }, function(c) {
        wg(b, 3, c);
      });
    } catch (c) {
      wg(this, 3, c);
    }
  }
  __name(X, "X");
  function xg() {
    this.next = this.o = this.l = this.v = this.j = null;
    this.D = false;
  }
  __name(xg, "xg");
  xg.prototype.reset = function() {
    this.o = this.l = this.v = this.j = null;
    this.D = false;
  };
  var yg = new fg(function() {
    return new xg();
  }, function(a) {
    a.reset();
  });
  function zg(a, b, c) {
    var d = yg.get();
    d.v = a;
    d.l = b;
    d.o = c;
    return d;
  }
  __name(zg, "zg");
  function Ag(a) {
    if (a instanceof X) return a;
    var b = new X(ug);
    wg(b, 2, a);
    return b;
  }
  __name(Ag, "Ag");
  function Bg() {
    var a = Error("Requests cancelled because user has been opted out");
    return new X(function(b, c) {
      c(a);
    });
  }
  __name(Bg, "Bg");
  function Cg(a, b, c) {
    Dg(a, b, c, null) || rg(Ra(b, a));
  }
  __name(Cg, "Cg");
  function Hg() {
    var a, b, c = new X(function(d, e) {
      a = d;
      b = e;
    });
    return new Ig(c, a, b);
  }
  __name(Hg, "Hg");
  X.prototype.then = function(a, b, c) {
    return Jg(this, eg(typeof a === "function" ? a : null), eg(typeof b === "function" ? b : null), c);
  };
  X.prototype.$goog_Thenable = true;
  p = X.prototype;
  p.T = function(a, b) {
    return Jg(this, null, eg(a), b);
  };
  p.catch = X.prototype.T;
  p.cancel = function(a) {
    if (this.j == 0) {
      var b = new Kg(a);
      rg(function() {
        Lg(this, b);
      }, this);
    }
  };
  function Lg(a, b) {
    if (a.j == 0)
      if (a.o) {
        var c = a.o;
        if (c.l) {
          for (var d = 0, e = null, f = null, g = c.l; g && (g.D || (d++, g.j == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
          e && (c.j == 0 && d == 1 ? Lg(c, b) : (f ? (d = f, d.next == c.v && (c.v = d), d.next = d.next.next) : Mg(c), Ng(c, e, 3, b)));
        }
        a.o = null;
      } else wg(a, 3, b);
  }
  __name(Lg, "Lg");
  function Og(a, b) {
    a.l || a.j != 2 && a.j != 3 || Pg(a);
    a.v ? a.v.next = b : a.l = b;
    a.v = b;
  }
  __name(Og, "Og");
  function Jg(a, b, c, d) {
    var e = zg(null, null, null);
    e.j = new X(function(f, g) {
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
          k === void 0 && h instanceof Kg ? g(h) : f(k);
        } catch (l) {
          g(l);
        }
      } : g;
    });
    e.j.o = a;
    Og(a, e);
    return e.j;
  }
  __name(Jg, "Jg");
  p.Eb = function(a) {
    this.j = 0;
    wg(this, 2, a);
  };
  p.Fb = function(a) {
    this.j = 0;
    wg(this, 3, a);
  };
  function wg(a, b, c) {
    a.j == 0 && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.j = 1, Dg(
      c,
      a.Eb,
      a.Fb,
      a
    ) || (a.J = c, a.j = b, a.o = null, Pg(a), b != 3 || c instanceof Kg || Qg(a, c)));
  }
  __name(wg, "wg");
  function Dg(a, b, c, d) {
    if (a instanceof X) return Og(a, zg(b || ug, c || null, d)), true;
    if (vg(a)) return a.then(b, c, d), true;
    if (La(a)) try {
      var e = a.then;
      if (typeof e === "function") return Rg(a, e, b, c, d), true;
    } catch (f) {
      return c.call(d, f), true;
    }
    return false;
  }
  __name(Dg, "Dg");
  function Rg(a, b, c, d, e) {
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
  __name(Rg, "Rg");
  function Pg(a) {
    a.A || (a.A = true, rg(a.jb, a));
  }
  __name(Pg, "Pg");
  function Mg(a) {
    var b = null;
    a.l && (b = a.l, a.l = b.next, b.next = null);
    a.l || (a.v = null);
    return b;
  }
  __name(Mg, "Mg");
  p.jb = function() {
    for (var a; a = Mg(this); ) Ng(this, a, this.j, this.J);
    this.A = false;
  };
  function Ng(a, b, c, d) {
    if (c == 3 && b.l && !b.D)
      for (; a && a.D; a = a.o) a.D = false;
    if (b.j) b.j.o = null, Sg(b, c, d);
    else try {
      b.D ? b.v.call(b.o) : Sg(b, c, d);
    } catch (e) {
      Tg.call(null, e);
    }
    gg(yg, b);
  }
  __name(Ng, "Ng");
  function Sg(a, b, c) {
    b == 2 ? a.v.call(a.o, c) : a.l && a.l.call(a.o, c);
  }
  __name(Sg, "Sg");
  function Qg(a, b) {
    a.D = true;
    rg(function() {
      a.D && Tg.call(null, b);
    });
  }
  __name(Qg, "Qg");
  var Tg = Va;
  function Kg(a) {
    Ua.call(this, a);
    this.j = false;
  }
  __name(Kg, "Kg");
  B(Kg, Ua);
  Kg.prototype.name = "cancel";
  function Ig(a, b, c) {
    this.promise = a;
    this.resolve = b;
    this.reject = c;
  }
  __name(Ig, "Ig");
  ;
  function Ug() {
    this.D = [];
    this.v = this.o = false;
    this.l = void 0;
    this.G = this.L = this.J = false;
    this.A = 0;
    this.j = null;
    this.C = 0;
  }
  __name(Ug, "Ug");
  Ug.prototype.cancel = function(a) {
    if (this.o) this.l instanceof Ug && this.l.cancel();
    else {
      if (this.j) {
        var b = this.j;
        delete this.j;
        a ? b.cancel(a) : (b.C--, b.C <= 0 && b.cancel());
      }
      this.G = true;
      this.o || (a = new Vg(this), Wg(this), Xg(this, false, a));
    }
  };
  Ug.prototype.H = function(a, b) {
    this.J = false;
    Xg(this, a, b);
  };
  function Xg(a, b, c) {
    a.o = true;
    a.l = c;
    a.v = !b;
    Yg(a);
  }
  __name(Xg, "Xg");
  function Wg(a) {
    if (a.o) {
      if (!a.G) throw new Zg(a);
      a.G = false;
    }
  }
  __name(Wg, "Wg");
  function $g(a) {
    throw a;
  }
  __name($g, "$g");
  function ah(a, b, c) {
    return bh(a, b, null, c);
  }
  __name(ah, "ah");
  function ch(a, b, c) {
    bh(a, b, function(d) {
      var e = b.call(this, d);
      if (e === void 0) throw d;
      return e;
    }, c);
  }
  __name(ch, "ch");
  function bh(a, b, c, d) {
    var e = a.o;
    e || (b === c ? b = c = eg(b) : (b = eg(b), c = eg(c)));
    a.D.push([b, c, d]);
    e && Yg(a);
    return a;
  }
  __name(bh, "bh");
  Ug.prototype.then = function(a, b, c) {
    var d, e, f = new X(function(g, h) {
      e = g;
      d = h;
    });
    bh(this, e, function(g) {
      g instanceof Vg ? f.cancel() : d(g);
      return dh;
    }, this);
    return f.then(a, b, c);
  };
  Ug.prototype.$goog_Thenable = true;
  function eh(a) {
    return db(a.D, function(b) {
      return typeof b[1] === "function";
    });
  }
  __name(eh, "eh");
  var dh = {};
  function Yg(a) {
    if (a.A && a.o && eh(a)) {
      var b = a.A, c = fh[b];
      c && (z.clearTimeout(c.j), delete fh[b]);
      a.A = 0;
    }
    a.j && (a.j.C--, delete a.j);
    b = a.l;
    for (var d = c = false; a.D.length && !a.J; ) {
      var e = a.D.shift(), f = e[0], g = e[1];
      e = e[2];
      if (f = a.v ? g : f) try {
        var h = f.call(e || null, b);
        h === dh && (h = void 0);
        h !== void 0 && (a.v = a.v && (h == b || h instanceof Error), a.l = b = h);
        if (vg(b) || typeof z.Promise === "function" && b instanceof z.Promise) d = true, a.J = true;
      } catch (k) {
        b = k, a.v = true, eh(a) || (c = true);
      }
    }
    a.l = b;
    d && (h = A(a.H, a, true), d = A(a.H, a, false), b instanceof Ug ? (bh(b, h, d), b.L = true) : b.then(h, d));
    c && (b = new gh(b), fh[b.j] = b, a.A = b.j);
  }
  __name(Yg, "Yg");
  function hh(a) {
    var b = new Ug();
    Wg(b);
    Xg(b, true, a);
    return b;
  }
  __name(hh, "hh");
  function Zg() {
    Ua.call(this);
  }
  __name(Zg, "Zg");
  B(Zg, Ua);
  Zg.prototype.message = "Deferred has already fired";
  Zg.prototype.name = "AlreadyCalledError";
  function Vg() {
    Ua.call(this);
  }
  __name(Vg, "Vg");
  B(Vg, Ua);
  Vg.prototype.message = "Deferred was canceled";
  Vg.prototype.name = "CanceledError";
  function gh(a) {
    this.j = z.setTimeout(A(this.o, this), 0);
    this.l = a;
  }
  __name(gh, "gh");
  gh.prototype.o = function() {
    delete fh[this.j];
    $g(this.l);
  };
  var fh = {};
  function ih() {
  }
  __name(ih, "ih");
  function jh(a) {
    return a != null && !!a.Ea;
  }
  __name(jh, "jh");
  ih.prototype.Ea = true;
  ih.prototype.F = ["javax.inject.Provider", 1];
  function kh() {
  }
  __name(kh, "kh");
  function lh(a) {
    return a != null && !!a.Da;
  }
  __name(lh, "lh");
  kh.prototype.Da = true;
  kh.prototype.F = ["com.google.apps.docs.xplat.flag.FlagService", 1];
  var mh;
  function nh() {
    if (mh == null) {
      var a = new oh(null);
      mh = /* @__PURE__ */ __name(function() {
        return a;
      }, "mh");
    }
    var b;
    return R((b = mh, b()), lh, kh);
  }
  __name(nh, "nh");
  ;
  function ph() {
  }
  __name(ph, "ph");
  v(ph, L);
  ph.prototype.get = function() {
    if (this.l == null) {
      var a = R(z._docs_flag_initialData, uf, tf);
      this.l = a != null ? a : R({}, uf, tf);
    }
    return this.l;
  };
  ph.prototype.j = function() {
    return this.get();
  };
  ph.prototype.Ea = true;
  ph.prototype.F = ["com.google.apps.docs.xplat.flag.FlagServiceHelper", 0];
  function qh(a) {
    return typeof a == "string" ? a == "true" || a == "1" : !!a;
  }
  __name(qh, "qh");
  ;
  function oh(a) {
    this.j = new ph();
    this.l = null;
    if (a != null)
      for (var b in a) {
        var c = b, d = a[b];
        if (this.l != null) throw Pe("Cannot use setClientFlag when comparison is enabled.").j;
        var e = R(this.j.j(), uf, tf);
        ff(d) ? (d = R(d, ff, df).Y, e[c] = d) : e[c] = d != null ? d : null;
      }
  }
  __name(oh, "oh");
  v(oh, L);
  oh.prototype.clear = function() {
    this.j = new ph();
    this.l = null;
  };
  oh.prototype.get = function(a) {
    rh(this, a);
    return R(this.j.j(), uf, tf)[a];
  };
  function sh(a, b) {
    a = R(a.j.j(), uf, tf);
    return b in a;
  }
  __name(sh, "sh");
  function th(a, b) {
    rh(a, b);
    if (!sh(a, b) || a.get(b) == null) return NaN;
    try {
      var c = M(a.get(b));
      Te == null && (Te = RegExp(
        "^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$"
      ));
      if (!Te.test(c)) {
        var d = new gf();
        d.l = 'For input string: "' + M(c) + '"';
        Q(d);
        P(d, Error(d));
        throw d.j;
      }
      return parseFloat(c);
    } catch (f) {
      var e = ye(f);
      if (e instanceof gf) return NaN;
      throw e.j;
    }
  }
  __name(th, "th");
  function uh(a, b) {
    rh(a, b);
    if (!sh(a, b)) return "";
    a = a.get(b);
    if (a == null) return "";
    var c;
    if (b = "number" === typeof a && (c = a, true)) {
      b = Ve(S(c));
      var d = Ve(S(c));
      b = b.equals(d);
    }
    return b ? "" + Ve(S(c)) : M(a);
  }
  __name(uh, "uh");
  function rh(a, b) {
    if (a.l != null) {
      try {
        var c = R(a.j.j(), uf, tf)[b];
      } catch (h) {
        var d = ye(h);
        if (d instanceof De) c = "injection-failed";
        else throw d.j;
      }
      try {
        var e = a.l;
        if (e == null) throw ze().j;
        var f = R(R(e, jh, ih).j(), uf, tf)[b];
      } catch (h) {
        var g = ye(h);
        if (g instanceof De) f = "injection-failed";
        else throw g.j;
      }
      a = c;
      !(b = qe(a, f)) && (b = a != null) && (b = a.equals ? a.equals(f) : Object.is(a, f));
      if (!b) throw Pe("Logging is not supported.").j;
    }
  }
  __name(rh, "rh");
  oh.prototype.Da = true;
  oh.prototype.F = ["com.google.apps.docs.xplat.flag.FlagServiceImpl", 0];
  function vh(a) {
    nf.call(this, a, null);
    P(this, Error(this));
  }
  __name(vh, "vh");
  v(vh, nf);
  vh.prototype.F = ["com.google.apps.docs.xplat.net.LimitException", 0];
  function wh(a, b, c, d) {
    Af();
    this.j = false;
    this.A = a;
    this.o = b;
    this.l = new xh(Math.imul(c, 1e3), d);
  }
  __name(wh, "wh");
  v(wh, yf);
  function yh(a) {
    if (!((a.l.get(null) + 1 | 0) / S(a.l.o / 1e3) <= a.o)) throw new vh("Query would cause " + M(a.A) + " to exceed " + a.o + " qps.").j;
    a = a.l;
    var b = Yd(ee(Date.now()));
    zh(a, b);
    var c = R(Ah(a.j), Bh, Ch);
    if (c == null || S(b) >= S(c.l)) b = Dh(a, S(b)), c = new Ch(), c.l = b, c.j = 0, c.v = 2147483647, c.o = -2147483648, a.j.add(c);
    c.j = c.j + 1 | 0;
    c.v = Math.min(1, c.v);
    c.o = Math.max(1, c.o);
  }
  __name(yh, "yh");
  wh.prototype.F = ["com.google.apps.docs.xplat.net.QpsLimiter", 0];
  function Ch() {
    this.o = this.v = this.j = 0;
  }
  __name(Ch, "Ch");
  v(Ch, L);
  function Bh(a) {
    return a instanceof Ch;
  }
  __name(Bh, "Bh");
  Ch.prototype.F = ["com.google.apps.docs.xplat.util.BasicStat$Slot", 0];
  function xh(a) {
    this.l = 0;
    this.o = a;
    this.l = We(a / 50);
    this.j = new Eh(ef(50));
  }
  __name(xh, "xh");
  v(xh, L);
  xh.prototype.get = function(a) {
    return Fh(this, a, function(b, c) {
      b = R(b, ff, df);
      c = R(c, Bh, Ch);
      return ef(b.Y + c.j | 0);
    });
  };
  function Fh(a, b, c) {
    b = b != null ? S(b) : Yd(ee(Date.now()));
    zh(a, b);
    var d = 0;
    b = Dh(a, S(b));
    b = S(b) - a.o;
    for (var e = a.j.j.length - 1 | 0; e >= 0; e = e - 1 | 0) {
      var f = R(a.j.get(e), Bh, Ch);
      if (S(f.l) <= b) break;
      d = R(c(ef(d), f), ff, df).Y;
    }
    return d;
  }
  __name(Fh, "Fh");
  function Dh(a, b) {
    return a.l * Math.floor(b / a.l + 1);
  }
  __name(Dh, "Dh");
  function zh(a, b) {
    var c = R(Ah(a.j), Bh, Ch);
    c != null && (c = S(c.l) - a.l, S(b) < S(c) && a.j.clear());
  }
  __name(zh, "zh");
  xh.prototype.F = ["com.google.apps.docs.xplat.util.BasicStat", 0];
  function Eh(a) {
    this.l = this.o = 0;
    a != null ? "number" === typeof a ? (a = S(a), a = Math.max(Math.min(a, 2147483647), -2147483648) | 0) : a = a instanceof Xd ? S(a).K : a.Y : a = 100;
    this.o = a;
    this.j = R([], sf, rf);
  }
  __name(Eh, "Eh");
  v(Eh, L);
  p = Eh.prototype;
  p.add = function(a) {
    var b = this.j[this.l];
    this.j[this.l] = a;
    this.l = We((this.l + 1 | 0) % this.o);
    return b;
  };
  p.get = function(a) {
    a = Gh(this, a);
    return this.j[a];
  };
  p.set = function(a, b) {
    a = Gh(this, a);
    this.j[a] = b;
  };
  p.clear = function() {
    this.l = this.j.length = 0;
  };
  p.xa = function() {
    for (var a = this.j.length, b = this.j.length - this.j.length | 0, c = R([], sf, rf); b < a; b = b + 1 | 0) {
      var d = c, e = this.get(b);
      d.push(e);
    }
    return c;
  };
  function Ah(a) {
    return a.j.length == 0 ? null : a.get(a.j.length - 1 | 0);
  }
  __name(Ah, "Ah");
  function Gh(a, b) {
    if (b >= a.j.length) throw a = new Ee(), Q(a), P(a, Error(a)), a.j;
    return a.j.length < a.o ? b : We((a.l + b | 0) % a.o);
  }
  __name(Gh, "Gh");
  p.F = ["com.google.apps.docs.xplat.util.CircularBuffer", 0];
  function Hh() {
    this.j = 0;
  }
  __name(Hh, "Hh");
  var Ih, Jh;
  v(Hh, L);
  function Y(a, b) {
    var c = new Hh();
    c.l = a;
    c.j = b;
    Ih[a] = c !== void 0 ? c : null;
    return c;
  }
  __name(Y, "Y");
  Hh.prototype.toString = ba("l");
  function Kh() {
    Kh = n();
    Ih = R({}, wf, vf);
    Y("IDLE", 1);
    Y("BUSY", 1);
    Y("RECOVERING", 2);
    Jh = Y("OFFLINE", 3);
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
  __name(Kh, "Kh");
  Hh.prototype.F = ["com.google.apps.docs.xplat.net.Status$State", 0];
  function Lh() {
  }
  __name(Lh, "Lh");
  v(Lh, L);
  function Mh(a) {
    return a instanceof Lh;
  }
  __name(Mh, "Mh");
  Lh.prototype.F = [
    "com.google.apps.docsshared.xplat.observable.EventObserverTracker$ObservableObserverPair",
    0
  ];
  function Nh() {
    Af();
    this.j = false;
    this.l = R([], sf, rf);
  }
  __name(Nh, "Nh");
  v(Nh, yf);
  function Oh(a, b, c) {
    var d;
    a: {
      for (d = 0; d < a.l.length; d = d + 1 | 0) {
        var e = R(a.l[d], Mh, Lh);
        if (qe(e.l, c) && qe(e.j, b)) {
          d = true;
          break a;
        }
      }
      d = false;
    }
    d || (a = a.l, c = b.j(c), d = new Lh(), d.j = b, d.l = c, a.push(d));
  }
  __name(Oh, "Oh");
  Nh.prototype.sa = function() {
    this.removeAll();
    yf.prototype.sa.call(this);
  };
  Nh.prototype.removeAll = function() {
    for (var a = R(this.l.pop(), Mh, Lh); a != null; ) a.j.l(a.l), a = R(this.l.pop(), Mh, Lh);
  };
  Nh.prototype.F = ["com.google.apps.docsshared.xplat.observable.EventObserverTracker", 0];
  function Ph(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  __name(Ph, "Ph");
  function Qh(a) {
    var b = {}, c;
    for (c in a) b[c] = a[c];
    return b;
  }
  __name(Qh, "Qh");
  var Rh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function Sh(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Rh.length; f++) c = Rh[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  __name(Sh, "Sh");
  ;
  function Th(a) {
    this.j = this.J = this.v = "";
    this.C = null;
    this.A = this.l = "";
    this.D = false;
    var b;
    a instanceof Th ? (this.D = a.D, Uh(this, a.v), this.J = a.J, this.j = a.j, Vh(this, a.C), Wh(this, a.l), Xh(this, a.o.clone()), this.A = a.A) : a && (b = String(a).match(Vf)) ? (this.D = false, Uh(this, b[1] || "", true), this.J = Yh(b[2] || ""), this.j = Yh(b[3] || "", true), Vh(this, b[4]), Wh(this, b[5] || "", true), Xh(this, b[6] || "", true), this.A = Yh(b[7] || "")) : (this.D = false, this.o = new Zh(null, this.D));
  }
  __name(Th, "Th");
  Th.prototype.toString = function() {
    var a = [], b = this.v;
    b && a.push($h(b, ai, true), ":");
    var c = this.j;
    if (c || b == "file") a.push("//"), (b = this.J) && a.push($h(b, ai, true), "@"), a.push(encodeURIComponent(
      String(c)
    ).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.C, c != null && a.push(":", String(c));
    if (c = this.l) this.j && c.charAt(0) != "/" && a.push("/"), a.push($h(c, c.charAt(0) == "/" ? bi : ci, true));
    (c = this.o.toString()) && a.push("?", c);
    (c = this.A) && a.push("#", $h(c, di));
    return a.join("");
  };
  Th.prototype.resolve = function(a) {
    var b = this.clone(), c = !!a.v;
    c ? Uh(b, a.v) : c = !!a.J;
    c ? b.J = a.J : c = !!a.j;
    c ? b.j = a.j : c = a.C != null;
    var d = a.l;
    if (c) Vh(b, a.C);
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
    c ? Wh(b, d) : c = a.o.toString() !== "";
    c ? Xh(b, a.o.clone()) : c = !!a.A;
    c && (b.A = a.A);
    return b;
  };
  Th.prototype.clone = function() {
    return new Th(this);
  };
  function Uh(a, b, c) {
    a.v = c ? Yh(b, true) : b;
    a.v && (a.v = a.v.replace(/:$/, ""));
    return a;
  }
  __name(Uh, "Uh");
  function Vh(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
      a.C = b;
    } else a.C = null;
  }
  __name(Vh, "Vh");
  function Wh(a, b, c) {
    a.l = c ? Yh(b, true) : b;
    return a;
  }
  __name(Wh, "Wh");
  function Xh(a, b, c) {
    b instanceof Zh ? (a.o = b, ei(a.o, a.D)) : (c || (b = $h(b, fi)), a.o = new Zh(b, a.D));
  }
  __name(Xh, "Xh");
  function gi(a, b, c) {
    a.o.set(b, c);
    return a;
  }
  __name(gi, "gi");
  function Yh(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  __name(Yh, "Yh");
  function $h(a, b, c) {
    return typeof a === "string" ? (a = encodeURI(a).replace(b, hi), c && (a = a.replace(
      /%25([0-9a-fA-F]{2})/g,
      "%$1"
    )), a) : null;
  }
  __name($h, "$h");
  function hi(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  __name(hi, "hi");
  var ai = /[#\/\?@]/g, ci = /[#\?:]/g, bi = /[#\?]/g, fi = /[#\?@]/g, di = /#/g;
  function Zh(a, b) {
    this.l = this.j = null;
    this.o = a || null;
    this.v = !!b;
  }
  __name(Zh, "Zh");
  function ii(a) {
    a.j || (a.j = /* @__PURE__ */ new Map(), a.l = 0, a.o && Wf(a.o, function(b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  }
  __name(ii, "ii");
  p = Zh.prototype;
  p.add = function(a, b) {
    ii(this);
    this.o = null;
    a = ji(this, a);
    var c = this.j.get(a);
    c || this.j.set(a, c = []);
    c.push(b);
    this.l = this.l + 1;
    return this;
  };
  p.remove = function(a) {
    ii(this);
    a = ji(this, a);
    return this.j.has(a) ? (this.o = null, this.l = this.l - this.j.get(a).length, this.j.delete(a)) : false;
  };
  p.clear = function() {
    this.j = this.o = null;
    this.l = 0;
  };
  function ki(a, b) {
    ii(a);
    b = ji(a, b);
    return a.j.has(b);
  }
  __name(ki, "ki");
  p.forEach = function(a, b) {
    ii(this);
    this.j.forEach(function(c, d) {
      c.forEach(function(e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  p.xa = function(a) {
    ii(this);
    var b = [];
    if (typeof a === "string") ki(this, a) && (b = b.concat(this.j.get(ji(this, a))));
    else {
      a = Array.from(this.j.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  p.set = function(a, b) {
    ii(this);
    this.o = null;
    a = ji(this, a);
    ki(this, a) && (this.l = this.l - this.j.get(a).length);
    this.j.set(a, [b]);
    this.l = this.l + 1;
    return this;
  };
  p.get = function(a, b) {
    if (!a) return b;
    a = this.xa(a);
    return a.length > 0 ? String(a[0]) : b;
  };
  p.toString = function() {
    if (this.o) return this.o;
    if (!this.j) return "";
    for (var a = [], b = Array.from(this.j.keys()), c = 0; c < b.length; c++) {
      var d = b[c], e = encodeURIComponent(String(d));
      d = this.xa(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return this.o = a.join("&");
  };
  p.clone = function() {
    var a = new Zh();
    a.o = this.o;
    this.j && (a.j = new Map(this.j), a.l = this.l);
    return a;
  };
  function ji(a, b) {
    b = String(b);
    a.v && (b = b.toLowerCase());
    return b;
  }
  __name(ji, "ji");
  function ei(a, b) {
    b && !a.v && (ii(a), a.o = null, a.j.forEach(function(c, d) {
      var e = d.toLowerCase();
      if (d != e && (this.remove(d), this.remove(e), c.length > 0)) {
        this.o = null;
        d = this.j;
        var f = d.set;
        e = ji(this, e);
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
  __name(ei, "ei");
  ;
  function li() {
    var a = z.window;
    a.onbeforeunload = n();
    a.location.reload();
  }
  __name(li, "li");
  ;
  function mi() {
    this.j = function() {
      li();
    };
  }
  __name(mi, "mi");
  mi.prototype.notify = function() {
    window.confirm(
      "This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue."
    ) && this.j();
  };
  function ni(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.l = false;
  }
  __name(ni, "ni");
  ni.prototype.stopPropagation = function() {
    this.l = true;
  };
  ni.prototype.preventDefault = function() {
    this.defaultPrevented = true;
  };
  var oi = (function() {
    if (!z.addEventListener || !Object.defineProperty) return false;
    var a = false, b = Object.defineProperty({}, "passive", {
      get: /* @__PURE__ */ __name(function() {
        a = true;
      }, "get")
    });
    try {
      var c = n();
      z.addEventListener("test", c, b);
      z.removeEventListener("test", c, b);
    } catch (d) {
    }
    return a;
  })();
  function pi(a, b) {
    ni.call(this, a ? a.type : "");
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
  __name(pi, "pi");
  B(pi, ni);
  pi.prototype.init = function(a, b) {
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
    a.defaultPrevented && pi.W.preventDefault.call(this);
  };
  pi.prototype.stopPropagation = function() {
    pi.W.stopPropagation.call(this);
    this.j.stopPropagation ? this.j.stopPropagation() : this.j.cancelBubble = true;
  };
  pi.prototype.preventDefault = function() {
    pi.W.preventDefault.call(this);
    var a = this.j;
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
  };
  var qi = "closure_listenable_" + (Math.random() * 1e6 | 0);
  var ri = 0;
  function si(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.handler = e;
    this.key = ++ri;
    this.removed = this.ja = false;
  }
  __name(si, "si");
  function ti(a) {
    a.removed = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.handler = null;
  }
  __name(ti, "ti");
  ;
  function ui(a) {
    this.src = a;
    this.j = {};
    this.l = 0;
  }
  __name(ui, "ui");
  ui.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.j[f];
    a || (a = this.j[f] = [], this.l++);
    var g = vi(a, b, d, e);
    g > -1 ? (b = a[g], c || (b.ja = false)) : (b = new si(b, this.src, f, !!d, e), b.ja = c, a.push(b));
    return b;
  };
  ui.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.j)) return false;
    var e = this.j[a];
    b = vi(e, b, c, d);
    return b > -1 ? (ti(e[b]), Array.prototype.splice.call(e, b, 1), e.length == 0 && (delete this.j[a], this.l--), true) : false;
  };
  function wi(a, b) {
    var c = b.type;
    c in a.j && eb(a.j[c], b) && (ti(b), a.j[c].length == 0 && (delete a.j[c], a.l--));
  }
  __name(wi, "wi");
  ui.prototype.removeAll = function(a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.j)
      if (!a || c == a) {
        for (var d = this.j[c], e = 0; e < d.length; e++) ++b, ti(d[e]);
        delete this.j[c];
        this.l--;
      }
    return b;
  };
  function vi(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.handler == d) return e;
    }
    return -1;
  }
  __name(vi, "vi");
  ;
  var xi = "closure_lm_" + (Math.random() * 1e6 | 0), yi = {}, zi = 0;
  function Ai(a, b, c, d, e) {
    if (d && d.once) return Bi(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) Ai(a, b[f], c, d, e);
      return null;
    }
    c = Ci(c);
    return a && a[qi] ? a.listen(b, c, La(d) ? !!d.capture : !!d, e) : Di(a, b, c, false, d, e);
  }
  __name(Ai, "Ai");
  function Di(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = La(e) ? !!e.capture : !!e, h = Ei(a);
    h || (a[xi] = h = new ui(a));
    c = h.add(b, c, d, g, f);
    if (c.proxy) return c;
    d = Fi();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) oi || (e = g), e === void 0 && (e = false), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Gi(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    zi++;
    return c;
  }
  __name(Di, "Di");
  function Fi() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    __name(a, "a");
    var b = Hi;
    return a;
  }
  __name(Fi, "Fi");
  function Bi(a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) Bi(a, b[f], c, d, e);
      return null;
    }
    c = Ci(c);
    return a && a[qi] ? a.l.add(String(b), c, true, La(d) ? !!d.capture : !!d, e) : Di(a, b, c, true, d, e);
  }
  __name(Bi, "Bi");
  function Ii(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) Ii(a, b[f], c, d, e);
    else (d = La(d) ? !!d.capture : !!d, c = Ci(c), a && a[qi]) ? a.l.remove(String(b), c, d, e) : a && (a = Ei(
      a
    )) && (b = a.j[b.toString()], a = -1, b && (a = vi(b, c, d, e)), (c = a > -1 ? b[a] : null) && Ji(c));
  }
  __name(Ii, "Ii");
  function Ji(a) {
    if (typeof a !== "number" && a && !a.removed) {
      var b = a.src;
      if (b && b[qi]) wi(b.l, a);
      else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(
          Gi(c),
          d
        ) : b.addListener && b.removeListener && b.removeListener(d);
        zi--;
        (c = Ei(b)) ? (wi(c, a), c.l == 0 && (c.src = null, b[xi] = null)) : ti(a);
      }
    }
  }
  __name(Ji, "Ji");
  function Gi(a) {
    return a in yi ? yi[a] : yi[a] = "on" + a;
  }
  __name(Gi, "Gi");
  function Hi(a, b) {
    if (a.removed) a = true;
    else {
      b = new pi(b, this);
      var c = a.listener, d = a.handler || a.src;
      a.ja && Ji(a);
      a = c.call(d, b);
    }
    return a;
  }
  __name(Hi, "Hi");
  function Ei(a) {
    a = a[xi];
    return a instanceof ui ? a : null;
  }
  __name(Ei, "Ei");
  var Ki = "__closure_events_fn_" + (Math.random() * 1e9 >>> 0);
  function Ci(a) {
    if (typeof a === "function") return a;
    a[Ki] || (a[Ki] = function(b) {
      return a.handleEvent(b);
    });
    return a[Ki];
  }
  __name(Ci, "Ci");
  kg(function(a) {
    Hi = a(Hi);
  });
  function Li(a, b) {
    ni.call(this, a);
    this.error = b;
  }
  __name(Li, "Li");
  v(Li, ni);
  var Mi = /\/d\/([^\/]+)/, Ni = /\/r\/([^\/]+)/;
  function Oi(a) {
    a = a.match(Vf)[5] || null;
    return Mi.test(a);
  }
  __name(Oi, "Oi");
  function Pi(a, b) {
    if (Oi(a)) {
      Oi(a);
      a = a.match(Vf);
      var c = a[5];
      c = c.replace(b, "");
      b = Uf(a[1], a[2], a[3], a[4], c, a[6], a[7]);
    } else b = a;
    return b;
  }
  __name(Pi, "Pi");
  ;
  function Z() {
    W.call(this);
    this.l = new ui(this);
    this.Sa = this;
    this.P = null;
  }
  __name(Z, "Z");
  B(Z, W);
  Z.prototype[qi] = true;
  p = Z.prototype;
  p.addEventListener = function(a, b, c, d) {
    Ai(this, a, b, c, d);
  };
  p.removeEventListener = function(a, b, c, d) {
    Ii(this, a, b, c, d);
  };
  p.dispatchEvent = function(a) {
    var b = this.P;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.P) c.push(b), ++d;
    }
    b = this.Sa;
    d = a.type || a;
    if (typeof a === "string") a = new ni(a, b);
    else if (a instanceof ni) a.target = a.target || b;
    else {
      var e = a;
      a = new ni(d, b);
      Sh(a, e);
    }
    e = true;
    var f;
    if (c)
      for (f = c.length - 1; !a.l && f >= 0; f--) {
        var g = a.currentTarget = c[f];
        e = Qi(g, d, true, a) && e;
      }
    a.l || (g = a.currentTarget = b, e = Qi(g, d, true, a) && e, a.l || (e = Qi(g, d, false, a) && e));
    if (c)
      for (f = 0; !a.l && f < c.length; f++) g = a.currentTarget = c[f], e = Qi(g, d, false, a) && e;
    return e;
  };
  p.N = function() {
    Z.W.N.call(this);
    this.l && this.l.removeAll(void 0);
    this.P = null;
  };
  p.listen = function(a, b, c, d) {
    return this.l.add(String(a), b, false, c, d);
  };
  function Qi(a, b, c, d) {
    b = a.l.j[String(b)];
    if (!b) return true;
    b = b.concat();
    for (var e = true, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.capture == c) {
        var h = g.listener, k = g.handler || g.src;
        g.ja && wi(a.l, g);
        e = h.call(k, d) !== false && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  __name(Qi, "Qi");
  ;
  function Ri(a, b, c) {
    if (typeof a === "function") c && (a = A(a, c));
    else if (a && typeof a.handleEvent == "function") a = A(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return Number(b) > 2147483647 ? -1 : z.setTimeout(a, b || 0);
  }
  __name(Ri, "Ri");
  function Si() {
    var a = null;
    return new X(function(b, c) {
      a = Ri(function() {
        b(void 0);
      }, 2e3);
      a == -1 && c(Error("Failed to schedule timer."));
    }).T(function(b) {
      z.clearTimeout(a);
      throw b;
    });
  }
  __name(Si, "Si");
  ;
  function Ti(a, b, c) {
    W.call(this);
    this.j = a;
    this.o = b || 0;
    this.l = c;
    this.v = A(this.hb, this);
  }
  __name(Ti, "Ti");
  B(Ti, W);
  p = Ti.prototype;
  p.ia = 0;
  p.N = function() {
    Ti.W.N.call(this);
    this.stop();
    delete this.j;
    delete this.l;
  };
  p.start = function(a) {
    this.stop();
    this.ia = Ri(this.v, a !== void 0 ? a : this.o);
  };
  p.stop = function() {
    this.isActive() && z.clearTimeout(this.ia);
    this.ia = 0;
  };
  p.isActive = function() {
    return this.ia != 0;
  };
  p.hb = function() {
    this.ia = 0;
    this.j && this.j.call(this.l);
  };
  function Ui(a, b, c, d) {
    W.call(this);
    this.o = d != null ? d : 0.15;
    this.A = a;
    this.v = b;
    this.G = c;
    this.j = new Ti(this.zb, void 0, this);
    this.C = Number.NEGATIVE_INFINITY;
    this.l = 0;
  }
  __name(Ui, "Ui");
  v(Ui, W);
  p = Ui.prototype;
  p.isActive = function() {
    return this.j.isActive();
  };
  p.start = function() {
    Vi(this, false, false);
  };
  function Vi(a, b, c) {
    b && (a.j.stop(), Xi(a, a.v));
    a.isActive() || (b = Math.max(0, a.C + a.l - Date.now()), b == 0 && (c ? b = Xi(a, a.v) : a.l = 0), a.j.start(b));
  }
  __name(Vi, "Vi");
  p.stop = function() {
    this.j.stop();
  };
  function Xi(a, b) {
    b > 0 && a.o != 0 && (b = Math.floor(b * (1 - a.o + Math.random() * a.o * 2)));
    return a.l = b;
  }
  __name(Xi, "Xi");
  p.zb = function() {
    this.C = Date.now();
    Xi(this, Math.min(Math.max(this.l * 2, this.v), this.G));
    this.A();
  };
  p.N = function() {
    this.j.dispose();
    delete this.j;
    delete this.A;
    W.prototype.N.call(this);
  };
  function Yi(a) {
    W.call(this);
    this.l = a;
    this.j = {};
  }
  __name(Yi, "Yi");
  B(Yi, W);
  var Zi = [];
  Yi.prototype.listen = function(a, b, c, d) {
    Array.isArray(b) || (b && (Zi[0] = b.toString()), b = Zi);
    for (var e = 0; e < b.length; e++) {
      var f = Ai(a, b[e], c || this.handleEvent, d || false, this.l || this);
      if (!f) break;
      this.j[f.key] = f;
    }
    return this;
  };
  Yi.prototype.removeAll = function() {
    Ph(this.j, function(a, b) {
      this.j.hasOwnProperty(b) && Ji(a);
    }, this);
    this.j = {};
  };
  Yi.prototype.N = function() {
    Yi.W.N.call(this);
    this.removeAll();
  };
  Yi.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function $i(a, b, c, d, e, f, g) {
    g = g === void 0 ? true : g;
    W.call(this);
    var h = this;
    this.j = a;
    this.j.O = 1e4;
    this.ea = b;
    this.o = f;
    this.l = new Ui(function() {
      return h.za();
    }, 3e4, 36e5);
    this.A = 0;
    this.C = null;
    this.U = new wh("errorsender", 1, 8, d);
    dg(this, this.U);
    this.P = false;
    this.H = null;
    this.M = /* @__PURE__ */ new Set();
    this.G = new Yi(this);
    this.fa = c || 10;
    this.V = e || null;
    this.G.listen(this.j, "complete", this.ob);
    this.G.listen(this.j, "ready", this.za);
    this.R = null;
    this.L = new Nh();
    dg(this, this.L);
    this.o && Oh(this.L, this.o.l(), function() {
      h.o.getState().j >= 3 && (h.R = (Kh(), Jh));
      h.o.getState().j >= 3 || h.R !== (Kh(), Jh) || aj(h);
    });
    this.O = g;
    this.X = {};
  }
  __name($i, "$i");
  v($i, W);
  p = $i.prototype;
  p.send = function(a, b, c, d) {
    qh(this.ea.get("docs-dafjera")) && (a = Pi(Pi(a, Ni), Mi));
    var e = ah(ah(hh(this.v.length), function(f) {
      if (!(f >= this.fa)) return this.O && (a = V(a, "errorSender_enqueueTimeMs", Date.now().toString())), f = {}, f.u = a, f.m = b, f.c = c, f.h = d, this.enqueue(f);
    }, this), this.za, this);
    ch(e, function() {
      this.M.delete(e);
    }, this);
    this.M.add(e);
  };
  p.za = function() {
    var a = this.o && this.o.getState().j >= 3, b = this.na() || this.j.isActive() || this.l.isActive() || this.P;
    return a || b ? hh() : bj(this);
  };
  function bj(a) {
    return (function() {
      return ah(hh(a.v[0] !== void 0 ? a.v[0] : null), function(b) {
        return cj(a, b);
      });
    })();
  }
  __name(bj, "bj");
  function cj(a, b) {
    if (a.l.isActive() || a.j.isActive() || a.P) return hh();
    if (!b) return a.l.stop(), hh();
    if (b.u.length > 4e3) return dj(a);
    try {
      yh(a.U);
      a.H = new Ug();
      var c = b.u;
      a.V != null && (c = V(c, "reportingSessionId", a.V));
      a.A > 0 && (c = V(c, "retryCount", a.A));
      a.C != null && (c = V(c, "previousErrorSendStatus", a.C));
      a.O && (c = V(c, "errorSender_sendTimeMs", Date.now().toString()), c = V(c, "errorSenderType", a.Ka()), b.errorSender_frontIndex && (c = V(c, "errorSender_frontIndex", b.errorSender_frontIndex)), b.errorSender_nextIndex && (c = V(
        c,
        "errorSender_nextIndex",
        b.errorSender_nextIndex
      )), b.errorSender_queueSize && (c = V(c, "errorSender_queueSize", b.errorSender_queueSize)));
      a.X = b;
      var d = b.m, e = b.c, f = b.h;
      return ah(ah(dj(a), function() {
        a.j.send(c, d, e, f);
      }), function() {
        return a.H;
      });
    } catch (g) {
      if (Bf(g) instanceof vh) a.P = true;
      else throw If(g, {
        "docs-origin-class": "docs.debug.ErrorSender"
      });
    }
    return hh();
  }
  __name(cj, "cj");
  p.ob = function() {
    var a = ej(this.j), b = this.H, c = fj(this.j) || a >= 400 && a <= 500, d = this.A > 3;
    c || d ? (this.A = 0, this.C = null, this.l.stop(), ah(hh(), function() {
      Wg(b);
      Xg(b, true);
    })) : (this.A++, this.C = a === -1 ? this.j.C : a, aj(this), this.enqueue(this.X), Wg(b), Xg(b, true));
  };
  function aj(a) {
    a.A != 1 || a.l.isActive() ? a.l.start() : Vi(a.l, true, true);
  }
  __name(aj, "aj");
  p.N = function() {
    cg(this.G, this.l, this.j, this.L);
    this.M.clear();
    W.prototype.N.call(this);
  };
  p.Ka = ca("BaseErrorSender");
  function gj(a, b, c, d, e) {
    $i.call(this, a, b, c, void 0, d, e, void 0);
    this.v = [];
  }
  __name(gj, "gj");
  v(gj, $i);
  gj.prototype.enqueue = function(a) {
    this.v.push(a);
    return hh();
  };
  function dj(a) {
    a.v.shift();
    return hh();
  }
  __name(dj, "dj");
  gj.prototype.Ka = ca("MemoryErrorSender");
  gj.prototype.N = function() {
    delete this.v;
    $i.prototype.N.call(this);
  };
  function hj() {
    var a = a === void 0 ? false : a;
    if (a === void 0 ? 0 : a) throw Error(
      "A module ID must be set on the Fava ServiceId a in order to modify extra edges."
    );
  }
  __name(hj, "hj");
  hj.prototype.toString = ca("a");
  new hj();
  function ij(a) {
    this.j = Id(pe(), Nc(a));
    a = ud(this.j, 1);
    this.l = Math.floor(Math.random() * 100) < a;
  }
  __name(ij, "ij");
  ij.prototype.toString = function() {
    var a = "{bool=" + !(this.l ? !td(this.j, 5) : !td(this.j, 2)) + ', string="', b = this.l ? yd(this.j, 6) : wd(this.j, 3);
    a = a + (b != null ? String(b) : "") + '", int=';
    b = this.l ? wc(H(this.j, 7, void 0, Zc)) : ud(this.j, 4, -1);
    return a + (b != null ? Number(b) : -1) + "}";
  };
  function jj(a) {
    this.j = /* @__PURE__ */ new Map();
    this.l = [];
    if (a = a.get("docs-cei")) {
      var b = a.i;
      b && fb(this.l, b);
      a = a.cf || {};
      for (var c in a) this.j.set(c, new ij(a[c]));
    }
  }
  __name(jj, "jj");
  jj.prototype.get = function(a) {
    return this.j.get(a) || null;
  };
  function kj() {
    for (var a in Array.prototype) return false;
    return true;
  }
  __name(kj, "kj");
  ;
  var lj = [
    'window[("_callback_" + expid)] is not a function',
    "Cannot read properties of null (reading 'readyState')",
    "request failed on client side"
  ], mj = [/(undefined|constructor).*YT|YT.*(undefined|constructor)/];
  function Ed(a) {
    this.j = a;
  }
  __name(Ed, "Ed");
  function Hd(a) {
    var b = a.j;
    if (b == null) return null;
    if (typeof b === "string") return b;
    throw new TypeError("Invalid string data <K1cgmc>: " + a.j + " (typeof " + typeof a.j + ")");
  }
  __name(Hd, "Hd");
  Ed.prototype.toString = function() {
    var a = Hd(this);
    if (a === null) throw Error("Data K1cgmc not defined.");
    return a;
  };
  function nj(a) {
    this.B = G(a);
  }
  __name(nj, "nj");
  v(nj, J);
  nj.prototype.qa = function(a) {
    Ad(this, 7, a);
  };
  function oj(a) {
    this.B = G(a);
  }
  __name(oj, "oj");
  v(oj, J);
  function pj(a) {
    return qd(a, nj, kd(a, qj, 4));
  }
  __name(pj, "pj");
  var qj = [4, 5];
  function rj(a) {
    this.B = G(a);
  }
  __name(rj, "rj");
  v(rj, J);
  function sj(a) {
    this.B = G(a);
  }
  __name(sj, "sj");
  v(sj, J);
  function Gd(a) {
    this.B = G(a);
  }
  __name(Gd, "Gd");
  v(Gd, J);
  function tj(a) {
    return qd(a, oj, 1);
  }
  __name(tj, "tj");
  ;
  function uj() {
    this.j = Dd();
  }
  __name(uj, "uj");
  uj.prototype.ga = function() {
    var a = /* @__PURE__ */ new Map(), b, c = (b = this.j) == null ? void 0 : pj(tj(b));
    if (c == null ? 0 : vc(H(c, 2)) != null) {
      var d;
      (b = (d = xd(c, 2)) == null ? void 0 : d.toString()) && a.set("canaryanalysisservertestgroup", b);
      if (c == null) var e = void 0;
      else if ((c = I(c, ke, 3)) == null) e = void 0;
      else {
        d = Number;
        e = e === void 0 ? "0" : e;
        b = H(c, 1, void 0, void 0, Ac);
        var f = f === void 0 ? false : f;
        var g = typeof b;
        b == null ? f = b : g === "bigint" ? f = String(mc(64, b)) : uc(b) ? g === "string" ? (f = b, uc(f), b = pc(Number(f)), nc(b) ? f = String(b) : (b = f.indexOf("."), b !== -1 && (f = f.substring(
          0,
          b
        )), f = xc(f))) : f = f ? zc(b) : yc(b) : f = void 0;
        e = d(f != null ? f : e);
        c = ud(c, 2);
        e = new Date(e * 1e3 + c / 1e6).valueOf().toString();
      }
      e && a.set("serverstarttimemillis", e);
    }
    var h, k;
    (e = (h = this.j) == null ? void 0 : (k = I(h, oj, 1)) == null ? void 0 : xd(k, 6)) && a.set(
      "clientApp",
      String(e)
    );
    return a;
  };
  function vj(a, b) {
    this.width = a;
    this.height = b;
  }
  __name(vj, "vj");
  p = vj.prototype;
  p.clone = function() {
    return new vj(this.width, this.height);
  };
  p.aspectRatio = function() {
    return this.width / this.height;
  };
  p.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  p.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  p.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function wj() {
    function a() {
    }
    __name(a, "a");
    this.j = a.call.bind(a.toString);
  }
  __name(wj, "wj");
  wj.prototype.ga = function() {
    var a = /* @__PURE__ */ new Map();
    xj() && a.set("apps_telemetry.screen_tampered", "true");
    a: {
      var b = w(Array.prototype), c = b.next(), d;
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
    !zj() && z.navigator && z.navigator.webdriver && a.set("apps_telemetry.webdriver", "true");
    e = false;
    b = w(Aj);
    c = b.next();
    var f;
    try {
      for (; !c.done; c = b.next()) {
        var g = c.value, h = Bj(g.key);
        h === 0 ? (a.set("apps_telemetry.automation_property_present." + g.S, "true"), e = true) : h === 2 && a.set("apps_telemetry.automation_property_check_failed." + g.S, "true");
      }
    } finally {
      c && !c.done && (f = b.return) && f.call(b);
    }
    e && a.set("apps_telemetry.automation_detected", "true");
    f = false;
    g = w(Cj);
    h = g.next();
    var k;
    try {
      for (; !h.done; h = g.next()) {
        var l = h.value, m = l.S, q = Dj(this, l.name, l.Ja);
        if (!q.da) {
          var t = q.reason;
          a.set("apps_telemetry.native_function_tampering." + m + ".reason", t);
          t === "non_function_type" && a.set("apps_telemetry.native_function_tampering." + m + ".type", q.type);
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
    var a = z.screen, b = !(a instanceof Screen);
    if (hb || gb) return b;
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
        var c = new vj(1, 500);
        if (b) {
          b = "CANVAS";
          c = document;
          b = String(b);
          c.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
          var d = c.createElement(b);
        } else d = new OffscreenCanvas(c.width, c.height);
        return d.getContext("2d") != null;
      } catch (e) {
        return false;
      }
    }
    __name(a, "a");
    return a(false) && (zj() || a(true));
  }
  __name(yj, "yj");
  function zj() {
    return "WorkerGlobalScope" in z && typeof z.WorkerGlobalScope === "function" && self instanceof z.WorkerGlobalScope;
  }
  __name(zj, "zj");
  function Bj(a) {
    if (zj() || !z) return 1;
    try {
      if (a in z || z.document && a in z.document) return 0;
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
        da: false,
        reason: "not_reachable"
      };
    }
    c = Ej(d);
    if (c !== "function") return {
      da: false,
      reason: "non_function_type",
      type: c
    };
    try {
      var e = a.j(d);
    } catch (f) {
      return {
        da: false,
        reason: "to_string_failed"
      };
    }
    a = Fj.exec(e);
    return a ? (a = a[1]) ? a !== b ? {
      da: false,
      reason: "likely_wrong_native_function"
    } : {
      da: true
    } : {
      da: false,
      reason: "likely_bound_function"
    } : {
      da: false,
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
    S: "cypress"
  }, {
    key: "$cdc_asdjflasutopfhvcZLmcfl_",
    S: "selenium"
  }, {
    key: "$wdc_",
    S: "chrome_driver"
  }, {
    key: "domAutomationController",
    S: "chromium_automation"
  }, {
    key: "callPhantom",
    S: "phantomjs"
  }, {
    key: "windmill",
    S: "windmill"
  }, {
    key: "____LocationIntercept",
    S: "awesomium"
  }, {
    key: "awesomium",
    S: "awesomium"
  }, {
    key: "ubot",
    S: "ubot"
  }, {
    key: "cefsharp_CreatePromise",
    S: "cefsharp"
  }, {
    key: "__nightmare",
    S: "nightmare"
  }], Cj = [{
    name: "getOwnPropertyDescriptor",
    Ja: /* @__PURE__ */ __name(function() {
      return Object.getOwnPropertyDescriptor;
    }, "Ja"),
    S: "Object.getOwnPropertyDescriptor"
  }, {
    name: "addEventListener",
    Ja: /* @__PURE__ */ __name(function() {
      return z.addEventListener;
    }, "Ja"),
    S: "global.addEventListener"
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
    this.ta = a;
    this.la = b;
  }
  __name(Pj, "Pj");
  function Qj(a, b) {
    return (b = a.j(b)) ? {
      ta: a.ta,
      la: a.la,
      Ba: b.toUpperCase()
    } : null;
  }
  __name(Qj, "Qj");
  ;
  function Rj() {
    Pj.call(this, 1, 1);
  }
  __name(Rj, "Rj");
  v(Rj, Pj);
  Rj.prototype.j = function(a) {
    a: {
      a = Sj(a);
      var b = false, c = w(Kj), d = c.next(), e;
      try {
        for (; !d.done; d = c.next()) {
          var f = a.matchAll(d.value), g = w(f), h = g.next(), k;
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
  v(Tj, Pj);
  Tj.prototype.j = function(a) {
    var b = typeof a.l.get("apps_telemetry.cross_origin_scripts") === "string" ? a.l.get(
      "apps_telemetry.cross_origin_scripts"
    ) : "", c = a.l.get("apps_telemetry.native_function_tampering_detected") === "true", d = Sj(a), e = d.includes("blob:"), f = w(this.l), g = f.next(), h;
    try {
      for (; !g.done; g = f.next()) {
        var k = g.value, l = k.errorMessage, m = k.Ca, q = m === void 0 ? [] : m, t = k.Z, x = t === void 0 ? [] : t, u = k.pa, N = u === void 0 ? false : u, E = k.Ha, ma = k.rb, U = ma === void 0 ? false : ma;
        if ((E === void 0 ? 0 : E) ? a.message === l : d.includes(l)) {
          var Ma = q.some(function(Jf) {
            return b.includes(Jf);
          }), Wi = x.some(function(Jf) {
            return a.j.includes(Jf);
          });
          q = N && e;
          U = U && c;
          if (Ma || Wi || q || U) return "warning";
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
    Z: ["__aiNetCmd__"]
  }, {
    errorMessage: "Cannot read properties of undefined",
    Z: ["recaptcha"]
  }, {
    errorMessage: "a is not defined",
    Ha: true,
    Z: ["<anonymous>"]
  }, {
    errorMessage: "i is not defined",
    Ha: true,
    Z: ["<anonymous>"]
  }, {
    errorMessage: "Failed to fetch",
    Z: ["__DLD__", "frontend.min.js"]
  }, {
    errorMessage: "Maximum call stack size exceeded",
    rb: true
  }, {
    errorMessage: "Unexpected end of JSON input",
    Z: ["facebook.net"]
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
  v(gk, Pj);
  gk.prototype.j = function(a) {
    var b = Wj(a);
    return hk(a.message, this.l) || hk(a.j, this.o) || hk(b, this.l) || hk(b, this.o) ? "warning" : null;
  };
  function hk(a, b) {
    b = w(b);
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
    this.Z = b;
    this.matchType = e;
  }
  __name(ik, "ik");
  v(ik, Pj);
  ik.prototype.j = function(a) {
    switch (this.matchType) {
      case 0:
        a: {
          var b = a.message, c = w(this.l);
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
          d = w(this.l);
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
        return e = Sj(a), jk(e, this.l) || jk(e, this.Z) ? "warning" : null;
      default:
        return null;
    }
  };
  function jk(a, b) {
    b = w(b);
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
  v(lk, Pj);
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
    d = d === void 0 ? ca(true) : d;
    var f = [];
    b.length > 0 && f.push(qk(b));
    f.push.apply(f, pa(mk));
    a = w(a);
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
      var f = w(a.l), g = f.next(), h;
      try {
        for (; !g.done; g = f.next()) {
          var k = g.value;
          try {
            var l = Qj(k, b);
            if (l) {
              var m = c, q = sk(a, c) ? l.Ba : c;
              tk(l, m, q).forEach(function(x, u) {
                d.set(u, x);
              });
              c = q;
              break;
            }
          } catch (x) {
            e = false;
            var t = fk(x, c);
            d.set("apps_telemetry.handling_error", Sj(t) + "\n\nclassifier: " + k.constructor.name);
          }
        }
      } finally {
        g && !g.done && (h = f.return) && h.call(f);
      }
    } catch (x) {
      e = false, a = fk(x, c), d.set(
        "apps_telemetry.handling_error",
        Sj(a)
      );
    }
    d.set("apps_telemetry.processed", String(e));
    return {
      Ba: c,
      va: d
    };
  }
  __name(rk, "rk");
  function tk(a, b, c) {
    var d = /* @__PURE__ */ new Map();
    d.set("apps_telemetry.classification", a.ta.toString());
    d.set("apps_telemetry.classification_code", a.la ? a.la.toString() : "");
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
    a = w(a);
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
  uk.prototype.ga = function() {
    if ("WorkerGlobalScope" in z && typeof z.WorkerGlobalScope === "function" && self instanceof z.WorkerGlobalScope) return /* @__PURE__ */ new Map();
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
  vk.prototype.ga = function() {
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
    b = c.ua;
    b = b === void 0 ? [] : b;
    var d = c.xb;
    d = d === void 0 ? [] : d;
    var e = c.Ga;
    e = e === void 0 ? [] : e;
    var f = c.Gb;
    var g = c.sessionId;
    g = g === void 0 ? xk() : g;
    c = c.Cb;
    this.o = pk(b, d, f === void 0 ? false : f, c === void 0 ? ca(true) : c);
    this.j = [new wj(), new uk(), new vk()];
    this.j.push.apply(this.j, pa(e));
    this.sessionId = g;
    var h;
    this.v = (h = z.performance) == null ? void 0 : h.timeOrigin;
    this.l = a;
    this.l.qa(g);
  }
  __name(yk, "yk");
  function zk(a, b, c, d) {
    d["apps_telemetry.session_id"] = a.sessionId;
    d["apps_telemetry.session_start_time_ms"] = String(a.v);
    "apps_telemetry.processed" in d && (d["apps_telemetry.multi_processed"] = "true");
    var e = a.ga();
    (a = Ak(a, b, c, e)) && Bk(e, a.va);
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
    a.l.Pa(e, f);
    return f;
  }
  __name(Ak, "Ak");
  yk.prototype.ga = function() {
    var a = /* @__PURE__ */ new Map();
    try {
      var b = w(this.j), c = b.next(), d;
      try {
        for (; !c.done; c = b.next()) c.value.ga().forEach(function(e, f) {
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
    var a = pj(tj(Dd())), b = xd(a, 1), c = xd(a, 5);
    return [b, c].every(function(d) {
      return Dk.has(d);
    });
  }
  __name(Ek, "Ek");
  ;
  function Fk(a) {
    try {
      return je(he(), a);
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
    var d = c.ua;
    d = d === void 0 ? [] : d;
    var e = c.Bb;
    e = e === void 0 ? [] : e;
    var f = c.yb;
    f = f === void 0 ? [] : f;
    var g = c.Jc;
    g = g === void 0 ? [] : g;
    var h = c.Kc;
    h = h === void 0 ? [] : h;
    c = c.sessionId;
    c = c === void 0 ? void 0 : c;
    try {
      var k = je(he(), le), l = void 0 === Pb ? 2 : 4, m = void 0, q = k.B, t = q[D] | 0, x = Nb(k, t) ? 1 : l;
      m = !!m || x === 3;
      x === 2 && Vc(k) && (q = k.B, t = q[D] | 0);
      var u = fd(q, 1), N = u === Hb ? 7 : u[D] | 0, E = gd(N, t);
      if (k = 4 & E ? false : true) {
        4 & E && (u = Array.prototype.slice.call(u), N = 0, E = ed(E, t), t = bd(q, t, 1, u));
        for (var ma = l = 0; l < u.length; l++) {
          var U = Bc(u[l]);
          U != null && (u[ma++] = U);
        }
        ma < l && (u.length = ma);
        U = E |= 4;
        U &= -513;
        E = U & -1025;
        E &= -4097;
      }
      E !== N && (Jb(u, E), 2 & E && Object.freeze(u));
      var Ma = u = cd(u, E, q, t, 1, x, k, m);
    } catch (Wi) {
      Ma = [];
    }
    q = Fk(ne);
    t = [];
    x = t.concat;
    u = [];
    e.length > 0 && u.push(kk(e, [], 6));
    f.length > 0 && u.push(new gk(f, [], 6, 0));
    g.length > 0 && u.push(new ik(g, [], 6, 5, 0));
    h.length > 0 && u.push(new ik(h, [], 6, 5, 1));
    return new yk(b, {
      ua: x.call(t, pa(u), pa(d)),
      xb: Ma,
      Ga: [new uj()].concat(pa(a)),
      Gb: q,
      sessionId: c,
      Cb: Ek
    });
  }
  __name(Gk, "Gk");
  ;
  function Hk() {
  }
  __name(Hk, "Hk");
  Hk.prototype.Pa = n();
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
  v(Kk, Pj);
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
    Nk = (Mk = (Lk = window) == null ? void 0 : Lk.top) != null ? Mk : z;
    Nk.U3bHHf != null || (Nk.U3bHHf = 0);
    Nk.U3bHHf++;
  } catch (a) {
    z.U3bHHf != null || (z.U3bHHf = 0), z.U3bHHf++;
  }
  ;
  var Ok;
  if (z == null ? 0 : (Ok = z.Symbol) == null ? 0 : Ok.for) {
    Pk = /* @__PURE__ */ Symbol.for("google.goem");
    z[Pk] || (z[Pk] = /* @__PURE__ */ new WeakMap());
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
    var b = document.body, c = Wa(b.getAttribute("jsaction") || "");
    var d = ["u0pjoe"];
    var e = w(d), f = e.next(), g;
    try {
      for (; !f.done; f = e.next()) {
        var h = f.value;
        var k = c;
        if (k) {
          var l = Rk[k];
          if (l) var m = !!l[h.toString()];
          else {
            var q = Sk[h.toString()];
            q || (q = new RegExp("(^\\s*" + h + "\\s*:|[\\s;]" + h + "\\s*:)"), Sk[h.toString()] = q);
            m = q.test(k);
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
    W.call(this);
    this.l = a;
  }
  __name(Vk, "Vk");
  B(Vk, W);
  Vk.prototype.j = function(a) {
    return Wk(this, a);
  };
  function Xk(a, b) {
    a = Object.prototype.hasOwnProperty.call(a, Na) && a[Na] || (a[Na] = ++Oa);
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
    var b = b || z.window || z.globalThis;
    "onunhandledrejection" in b && (b.onunhandledrejection = function(c) {
      Zk(a, c && c.reason ? c.reason : Error("uncaught error"));
    });
  }
  __name(al, "al");
  function bl(a, b) {
    var c = z.window || z.globalThis, d = c[b];
    if (!d) throw Error(b + " not on global?");
    c[b] = function(e, f) {
      typeof e === "string" && (e = Ra(Sa, e));
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
    var a = z.window || z.globalThis;
    var b = a.setTimeout;
    b = b[Xk(this, false)] || b;
    a.setTimeout = b;
    b = a.setInterval;
    b = b[Xk(this, false)] || b;
    a.setInterval = b;
    Vk.W.N.call(this);
  };
  function $k(a) {
    Ua.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)), a);
    (a = a && a.stack) && typeof a === "string" && (this.stack = a);
  }
  __name($k, "$k");
  B($k, Ua);
  function cl() {
  }
  __name(cl, "cl");
  ;
  var dl;
  function el() {
  }
  __name(el, "el");
  B(el, cl);
  el.prototype.l = function() {
    return new XMLHttpRequest();
  };
  dl = new el();
  function fl(a) {
    Z.call(this);
    this.headers = /* @__PURE__ */ new Map();
    this.V = a || null;
    this.o = false;
    this.j = null;
    this.M = "";
    this.C = 0;
    this.v = this.L = this.G = this.H = false;
    this.O = 0;
    this.A = null;
    this.R = "";
    this.U = false;
  }
  __name(fl, "fl");
  B(fl, Z);
  var gl = /^https?$/i, hl = ["POST", "PUT"], il = [];
  p = fl.prototype;
  p.fb = function() {
    this.dispose();
    eb(il, this);
  };
  p.send = function(a, b, c, d) {
    if (this.j) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.M + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.M = a;
    this.C = 0;
    this.H = false;
    this.o = true;
    this.j = this.V ? this.V.l() : dl.l();
    this.j.onreadystatechange = eg(A(this.Qa, this));
    try {
      this.L = true, this.j.open(b, String(a), true), this.L = false;
    } catch (t) {
      jl(this);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype)
        for (var e in d) c.set(e, d[e]);
      else if (typeof d.keys === "function" && typeof d.get === "function") {
        e = w(d.keys());
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
    g = z.FormData && a instanceof z.FormData;
    !(cb(hl, b) >= 0) || d || g || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = w(c);
    d = b.next();
    var k;
    try {
      for (; !d.done; d = b.next()) {
        var l = w(d.value), m = l.next().value, q = l.next().value;
        this.j.setRequestHeader(m, q);
      }
    } finally {
      d && !d.done && (k = b.return) && k.call(b);
    }
    this.R && (this.j.responseType = this.R);
    "withCredentials" in this.j && this.j.withCredentials !== this.U && (this.j.withCredentials = this.U);
    try {
      this.A && (clearTimeout(this.A), this.A = null), this.O > 0 && (this.A = setTimeout(
        this.Db.bind(this),
        this.O
      )), this.G = true, this.j.send(a), this.G = false;
    } catch (t) {
      jl(this);
    }
  };
  p.Db = function() {
    typeof Ga != "undefined" && this.j && (this.C = 8, this.dispatchEvent("timeout"), this.abort(8));
  };
  function jl(a) {
    a.o = false;
    a.j && (a.v = true, a.j.abort(), a.v = false);
    a.C = 5;
    kl(a);
    ll(a);
  }
  __name(jl, "jl");
  function kl(a) {
    a.H || (a.H = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  }
  __name(kl, "kl");
  p.abort = function(a) {
    this.j && this.o && (this.o = false, this.v = true, this.j.abort(), this.v = false, this.C = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ll(this));
  };
  p.N = function() {
    this.j && (this.o && (this.o = false, this.v = true, this.j.abort(), this.v = false), ll(this, true));
    fl.W.N.call(this);
  };
  p.Qa = function() {
    this.na() || (this.L || this.G || this.v ? ml(this) : this.Aa());
  };
  p.Aa = function() {
    ml(this);
  };
  function ml(a) {
    if (a.o && typeof Ga != "undefined") {
      if (a.G && (a.j ? a.j.readyState : 0) == 4) setTimeout(a.Qa.bind(a), 0);
      else if (a.dispatchEvent("readystatechange"), (a.j ? a.j.readyState : 0) == 4) {
        a.o = false;
        try {
          fj(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.C = 6, kl(a));
        } finally {
          ll(a);
        }
      }
    }
  }
  __name(ml, "ml");
  function ll(a, b) {
    if (a.j) {
      a.A && (clearTimeout(a.A), a.A = null);
      var c = a.j;
      a.j = null;
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = null;
      } catch (d) {
      }
    }
  }
  __name(ll, "ll");
  p.isActive = function() {
    return !!this.j;
  };
  function fj(a) {
    var b = ej(a);
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
      if (b = b === 0) a = String(a.M).match(Vf)[1] || null, !a && z.self && z.self.location && (a = z.self.location.protocol.slice(0, -1)), b = !gl.test(a ? a.toLowerCase() : "");
      c = b;
    }
    return c;
  }
  __name(fj, "fj");
  function ej(a) {
    try {
      return (a.j ? a.j.readyState : 0) > 2 ? a.j.status : -1;
    } catch (b) {
      return -1;
    }
  }
  __name(ej, "ej");
  kg(function(a) {
    fl.prototype.Aa = a(fl.prototype.Aa);
  });
  function nl(a, b, c) {
    Z.call(this);
    this.A = b || null;
    this.v = {};
    this.C = ol;
    this.H = a;
    if (!c) {
      this.j = null;
      this.j = new Vk(A(this.o, this));
      bl(this.j, "setTimeout");
      bl(this.j, "setInterval");
      a = this.j;
      b = z.window || z.globalThis;
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
      b = A(a.j, a);
      for (c = 0; c < hg.length; c++) hg[c](b);
      ig.push(a);
    }
  }
  __name(nl, "nl");
  B(nl, Z);
  function pl(a, b) {
    ni.call(this, "c");
    this.error = a;
    this.aa = b;
  }
  __name(pl, "pl");
  B(pl, ni);
  function ql(a, b) {
    return new nl(a, b, void 0);
  }
  __name(ql, "ql");
  function ol(a, b, c, d) {
    if (d instanceof Map) {
      var e = {};
      d = w(d);
      var f = d.next(), g;
      try {
        for (; !f.done; f = d.next()) {
          var h = w(f.value), k = h.next().value, l = h.next().value;
          e[k] = l;
        }
      } finally {
        f && !f.done && (g = d.return) && g.call(d);
      }
    } else e = d;
    g = new fl();
    il.push(g);
    g.l.add("ready", g.fb, true, void 0, void 0);
    g.send(a, b, c, e);
  }
  __name(ol, "ol");
  function rl(a, b) {
    a.C = b;
  }
  __name(rl, "rl");
  nl.prototype.o = function(a, b) {
    a = a.error || a;
    b = b ? Qh(b) : {};
    a instanceof Error && Sh(b, sb(a));
    var c = Df(a);
    if (this.A) try {
      this.A(c, b, a);
    } catch (t) {
    }
    var d = c.message.substring(0, 1900);
    if (!(a instanceof Ua) || a.j) {
      var e = c.fileName, f = c.lineNumber;
      a = c.stack;
      try {
        var g = V(this.H, "script", e, "error", d, "line", f);
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
        var q = $f(l);
        this.C(g, "POST", q, this.G);
      } catch (t) {
      }
    }
    try {
      this.dispatchEvent(new pl(
        c,
        b
      ));
    } catch (t) {
    }
  };
  nl.prototype.N = function() {
    bg(this.j);
    nl.W.N.call(this);
  };
  function sl() {
    this.j = Date.now();
  }
  __name(sl, "sl");
  var tl = null;
  sl.prototype.set = function(a) {
    this.j = a;
  };
  sl.prototype.reset = function() {
    this.set(Date.now());
  };
  sl.prototype.get = ba("j");
  function ul(a) {
    this.v = a || "";
    tl || (tl = new sl());
    this.D = tl;
  }
  __name(ul, "ul");
  ul.prototype.j = true;
  ul.prototype.l = true;
  ul.prototype.o = false;
  function vl(a) {
    return a < 10 ? "0" + a : String(a);
  }
  __name(vl, "vl");
  function wl(a) {
    ul.call(this, a);
  }
  __name(wl, "wl");
  B(wl, ul);
  function xl(a, b) {
    var c = [];
    c.push(a.v, " ");
    if (a.l) {
      var d = c.push, e = new Date(b.o());
      d.call(c, "[", vl(e.getFullYear() - 2e3) + vl(e.getMonth() + 1) + vl(e.getDate()) + " " + vl(e.getHours()) + ":" + vl(e.getMinutes()) + ":" + vl(e.getSeconds()) + "." + vl(Math.floor(e.getMilliseconds() / 10)), "] ");
    }
    d = c.push;
    e = a.D.get();
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
  __name(xl, "xl");
  ;
  function yl(a) {
    a = a === void 0 ? new zl() : a;
    Z.call(this);
    var b = this;
    this.R = {};
    this.j = null;
    this.o = {};
    this.M = new Yi(this);
    this.ib = a.J;
    this.U = a.L;
    this.Wa = a.H;
    this.gb = a.A;
    this.Xa = a.M;
    var c = a.l;
    this.Ua = (a.v || Ik)({
      Bb: lj,
      yb: mj,
      ua: [new Kk()]
    });
    this.cb = a.P;
    this.V = new mi();
    var d = new fl();
    Al(this, c);
    this.G = new gj(d, c, void 0, void 0, void 0);
    dg(this, this.G);
    this.v = a.j ? a.j : uh(c, "docs-sup") + uh(c, "docs-jepp") + "/jserror";
    if (d = uh(c, "jobset")) this.v = V(this.v, "jobset", d);
    if (d = uh(c, "docs-ci")) this.v = V(this.v, "id", d);
    d = uh(c, "docs-pid");
    qh(c.get("docs-eaotx")) && d && (this.v = V(this.v, "ouid", d));
    this.fa = th(c, "docs-srmoe") || 0;
    this.ab = qh(c.get("docs-oesf"));
    this.Fa = th(c, "docs-srmour") || 0;
    this.bb = qh(c.get("docs-oursf"));
    d = a.D || this.Fa > 0 && Math.random() < this.Fa;
    this.Ya = qh(c.get("docs-wesf"));
    Bl(this);
    Tg = /* @__PURE__ */ __name(function(g) {
      return Cl(b, g, "promise rejection");
    }, "Tg");
    var e = th(c, "docs-srmdue") || 0;
    if (e > 0 && Math.random() < e) {
      var f = qh(c.get("docs-duesf"));
      $g = /* @__PURE__ */ __name(function(g) {
        Cl(b, g, "deferred error", f, "isDeferredUnhandledErrback");
      }, "$g");
    } else $g = n();
    e = th(c, "docs-srmxue") || 0;
    e = e > 0 && Math.random() < e;
    c.get("docs-xduesf");
    e && Af();
    d && (d = new Vk(function(g) {
      g = Dl(g, "native promise rejection");
      var h = {};
      h = (h.isUnhandledRejection = "true", h);
      b.bb ? El(b, g, h) : b.info(g, h);
    }), al(d), dg(this, d));
    this.L = null;
    typeof document !== "undefined" && document.body && (this.L = Tk(function(g) {
      var h = {};
      h = (h.isWizError = "true", h);
      g = w(g.data.errors);
      var k = g.next(), l;
      try {
        for (; !k.done; k = g.next()) {
          var m = k.value.error;
          b.Ya ? El(b, m, h) : b.info(m, h);
        }
      } finally {
        k && !k.done && (l = g.return) && l.call(g);
      }
    }));
    this.O = a.o;
    this.C = false;
    this.H = true;
    this.A = false;
    this.ea = uh(c, "docs-jern");
    this.Va = a.G;
    this.Ta = a.C.concat(Object.values(xf));
  }
  __name(yl, "yl");
  v(yl, Z);
  function Bl(a) {
    var b = b === void 0 ? false : b;
    if (Fl) {
      if (Gl != null) throw Error('ErrorReporter already installed. at "' + Gl.stack + '"');
      throw Error("ErrorReporter already installed.");
    }
    Fl = true;
    Gl = Error();
    a.j = ql(a.v, function(e, f, g) {
      return Hl(a, e, f, g);
    });
    var c = {};
    a.Wa && (c["X-No-Abort"] = "1");
    a.j.G = c;
    rl(a.j, function(e, f, g, h) {
      a.H && a.G.send(e, f, g, h);
    });
    if (a.fa > 0 && Math.random() < a.fa) {
      c = {};
      var d = (c.isWindowOnError = "true", c);
      a.ab ? Cf(function(e) {
        El(a, e.error instanceof Error ? e.error : Error(e.message), d);
      }) : Cf(function(e) {
        a.log(e.error instanceof Error ? e.error : Error(e.message), d);
      });
    }
    a.M.listen(a.j, "c", function(e) {
      var f = b;
      f = f === void 0 ? false : f;
      e.aa.severity = e.aa["severity-unprefixed"] || e.aa.severity;
      var g = e.aa.severity;
      (g = g == "fatal" || g == "postmortem") && !a.gb && (a.ib && !f ? a.V.notify(e, e.aa) : a.V.notify(
        void 0,
        e.aa
      ));
      a.dispatchEvent(new Li(g ? "a" : "b", e.error, e.aa));
    });
  }
  __name(Bl, "Bl");
  function Al(a, b) {
    b = new jj(b);
    var c = b.j, d;
    for (d in c) {
      var e = c[d];
      e && (a.o["expflag-" + d] = e.toString());
    }
    a.o.experimentIds = b.l.join(",");
  }
  __name(Al, "Al");
  function El(a, b, c) {
    a.A = false;
    Il(b, "fatal");
    if (!a.j) {
      if (b instanceof nf) throw b.j;
      throw If(b);
    }
    a.j.o(b, Jl(a, b, c));
    if (a.Xa) {
      c = Jl(a, b, c);
      c.is_forceFatal = 1;
      var d = b instanceof nf ? b.j : b;
      Hl(a, d, c);
      b = If(d);
      a = ", context:" + JSON.stringify(Jl(a, d, c));
      b.message += a;
      throw b;
    }
  }
  __name(El, "El");
  function Kl(a, b, c) {
    a.A = false;
    Il(b, "warning");
    a.j && a.j.o(b, Jl(a, b, c));
  }
  __name(Kl, "Kl");
  yl.prototype.info = function(a, b, c) {
    this.A = c || false;
    Il(a, "incident");
    this.j && this.j.o(a, Jl(this, a, b));
  };
  yl.prototype.log = function(a, b, c) {
    this.A = !!c;
    Il(a, "incident");
    this.j && this.j.o(a, Jl(this, a, b));
  };
  function Dl(a, b) {
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
  __name(Dl, "Dl");
  function Cl(a, b, c, d, e) {
    d = d === void 0 ? true : d;
    b = Dl(b, c);
    c = {};
    e && (c[e] = "true");
    d ? Va(b) : a.info(b, c);
  }
  __name(Cl, "Cl");
  function Ll(a, b, c) {
    return function() {
      a: {
        var d = Aa.apply(0, arguments);
        if (a.j) {
          try {
            var e = b.apply(c, d);
            break a;
          } catch (f) {
            El(a, f);
          }
          e = void 0;
        } else e = b.apply(c, d);
      }
      return e;
    };
  }
  __name(Ll, "Ll");
  function Ml(a, b) {
    a.j && b.then(void 0, function(c) {
      El(a, c instanceof Error ? c : Error(c));
    });
    return b;
  }
  __name(Ml, "Ml");
  function Jl(a, b, c) {
    b instanceof nf && (b = b.j);
    c = c ? Qh(c) : {};
    c.severity = sb(b).severity;
    (b = b && b.reportSeverity) && (c.reportSeverity = b);
    a.U && (c.errorGroupId = a.U);
    return c;
  }
  __name(Jl, "Jl");
  function Nl(a, b) {
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
  __name(Nl, "Nl");
  function Hl(a, b, c, d) {
    var e = a.C;
    try {
      a.X(b, c, d);
    } catch (g) {
      throw e && !a.O && (a.H = false), a.C = true, c.provideLogDataError = g.message, c.severity || (c.severity = "fatal"), If(g);
    } finally {
      if (c["severity-unprefixed"] = c.severity || "fatal", c.severity = "" + c["severity-unprefixed"], !a.Va)
        for (var f in c) typeof c[f] === "number" || c[f] instanceof Number || typeof c[f] === "boolean" || c[f] instanceof Boolean || a.Ta.includes(f) || f in c && delete c[f];
    }
  }
  __name(Hl, "Hl");
  yl.prototype.X = function(a, b, c) {
    Nl(c || a, b);
    for (var d in this.R) try {
      b[d] = this.R[d](a);
    } catch (h) {
    }
    b.errorReportTimeMs || (b.errorReportTimeMs = Date.now().toString());
    Object.assign(b, this.o);
    if ((Tf(), 0) > 0) {
      var e = new wl(), f = "";
      Sf(function(h) {
        f += xl(e, h);
      });
      b.clientLog = f;
    }
    c = b.severity || "fatal";
    (d = b.reportSeverity || a && a.reportSeverity) && (d = Ol(d.toLowerCase())) && (c = d);
    this.cb || (c = zk(this.Ua, a, c, b));
    this.ea && (b.reportName = this.ea + "_" + c);
    b.isArrayPrototypeIntact = kj().toString();
    if (!("WorkerGlobalScope" in z && self instanceof z.WorkerGlobalScope)) {
      try {
        var g = !!document.getElementById("docs-editor");
      } catch (h) {
        g = false;
      }
      b.isEditorElementAttached = g.toString();
    }
    b.documentCharacterSet = document.characterSet;
    b.origin = String(z.origin);
    g = a.stack || "";
    if (g.trim().length == 0 || g == "Not available") b["stacklessError-reportingStack"] = Hf(yl.prototype.X), [a.message].concat(pa(Object.keys(b)), pa(Object.values(b))).some(function(h) {
      return h && h.includes("<eye3");
    }) || (b.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>");
    this.C && !this.O ? (this.H = this.A, c == "fatal" ? c = "postmortem" : c == "incident" && (c = "warningafterdeath")) : c == "fatal" && (this.C = true);
    this.A = false;
    b.severity = c;
  };
  yl.prototype.N = function() {
    Fl = false;
    if (this.L) {
      var a = this.L, b = w(a.et), c = b.next(), d;
      try {
        for (; !c.done; c = b.next()) {
          var e = c.value, f = Qk(a.el, e);
          if (f && (eb(f, a.eb), !f.length)) {
            var g = a.el, h = Wa(g.getAttribute("jsaction") || ""), k = e + ":.CLIENT";
            h = h.replace(k + ";", "");
            h = h.replace(k, "");
            Uk(g, h);
          }
        }
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
    }
    cg(this.M, this.j, this.G);
    Z.prototype.N.call(this);
  };
  var Fl = false, Gl = null;
  function zl() {
    this.L = this.l = void 0;
    this.A = this.M = this.J = false;
    this.j = void 0;
    this.H = this.o = false;
    this.G = true;
    this.C = [];
    this.P = this.D = false;
    this.v = void 0;
  }
  __name(zl, "zl");
  function Il(a, b) {
    a instanceof nf && (a = a.j);
    rb(a, "severity", b);
  }
  __name(Il, "Il");
  function Ol(a) {
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
  __name(Ol, "Ol");
  ;
  function Pl() {
    var a = this;
    this.promise = new Promise(function(b, c) {
      a.resolve = b;
      a.reject = c;
    });
  }
  __name(Pl, "Pl");
  ;
  function Ql() {
    this.o = window.crashReport;
    this.v = new Pl();
    this.j = 0;
    this.l = /* @__PURE__ */ new Map();
  }
  __name(Ql, "Ql");
  Ql.prototype.initialize = function(a) {
    a = a === void 0 ? 10240 : a;
    var b = this, c, d, e, f, g, h, k, l, m, q, t, x;
    return za(new ya(new ua(function(u) {
      switch (u.j) {
        case 1:
          if (b.j !== 0) return u.return(b.v.promise);
          b.j = 1;
          u.O(2, 3);
          return u.G(b.o.initialize(a), 5);
        case 5:
          b.v.resolve();
          b.j = 2;
          c = w(b.l);
          d = c.next();
          try {
            for (; !d.done; d = c.next()) f = d.value, g = w(f), h = g.next().value, k = g.next().value, l = h, m = k, q = void 0, b.set(l, (q = m) != null ? q : "");
          } finally {
            d && !d.done && (e = c.return) && e.call(c);
          }
        case 3:
          u.M();
          b.l.clear();
          u.P(4);
          break;
        case 2:
          t = u.L();
          b.j = 3;
          x = Error("Failed to initialize crash storage", {
            cause: t
          });
          x.reportSeverity = "warning";
          b.v.reject(x);
          u.ha(3);
          break;
        case 4:
          return u.return(b.v.promise);
      }
    })));
  };
  Ql.prototype.Na = function() {
    return this.j !== 0;
  };
  Ql.prototype.set = function(a, b) {
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
  Ql.prototype.delete = function(a) {
    if (this.j !== 3)
      if (this.j !== 2) this.l.delete(a);
      else try {
        typeof this.o.delete === "function" ? this.o.delete(a) : this.o.remove(a);
      } catch (b) {
      }
  };
  function Rl() {
    this.j = false;
  }
  __name(Rl, "Rl");
  Rl.prototype.initialize = function() {
    this.j = true;
    return Promise.resolve();
  };
  Rl.prototype.Na = ba("j");
  Rl.prototype.set = n();
  Rl.prototype.delete = n();
  var Sl = new Rl();
  var Tl = ["SEVERE", "FATAL"];
  function Ul() {
    this.l = this.o = 1;
    this.j = new Gd();
  }
  __name(Ul, "Ul");
  Ul.prototype.Pa = function(a, b) {
    var c = b == null ? void 0 : b.va.get("apps_telemetry.outgoing_severity");
    a = c != null ? c : a.o;
    if (a = this.o === 1 && !!a && Tl.includes(a.toUpperCase())) this.o = 2;
    b = b == null ? void 0 : b.va.get("apps_telemetry.incoming_severity");
    if (c = this.l === 1 && !!b && !!c && b.toUpperCase() !== c.toUpperCase()) this.l = 2;
    if (a || c) c = od(this.j, sj, 3), b = new rj(), b = Bd(b, 1, this.o), b = Bd(b, 2, this.l), sd(
      c,
      rj,
      5,
      b
    ), Vl(this);
  };
  Ul.prototype.qa = function(a) {
    a: {
      var b = od(this.j, oj, 1);
      var c = qj;
      Wc(b);
      if (void 0 === Qb) {
        if (kd(b, c, 4) !== 4) {
          b = void 0;
          break a;
        }
      } else jd(b.B, void 0, c, 4);
      b = od(b, nj, 4);
    }
    b.qa(a);
    Vl(this);
  };
  function Vl(a) {
    var b = Sl, c = b.set;
    a = JSON.stringify(Mc(a.j));
    c.call(b, "appsTelemetryCrashReportData", a);
  }
  __name(Vl, "Vl");
  ;
  function Wl(a) {
    a = a === void 0 ? {} : a;
    if (!Sl.Na()) {
      try {
        var b = Fk(me);
      } catch (c) {
        b = false;
      }
      Sl = b && window.crashReport ? new Ql() : new Rl();
      Sl.initialize();
    }
    return Gk(a, new Ul());
  }
  __name(Wl, "Wl");
  ;
  function Xl(a) {
    this.v = a.Hb || null;
    this.o = a.Lc || false;
    this.j = void 0;
  }
  __name(Xl, "Xl");
  B(Xl, cl);
  Xl.prototype.l = function() {
    var a = new Yl(this.v, this.o);
    this.j && (a.G = this.j);
    return a;
  };
  function Yl(a, b) {
    Z.call(this);
    this.X = a;
    this.L = b;
    this.G = void 0;
    this.status = this.readyState = 0;
    this.responseType = this.v = this.o = this.statusText = "";
    this.onreadystatechange = null;
    this.O = new Headers();
    this.A = null;
    this.U = "GET";
    this.V = "";
    this.j = false;
    this.R = this.C = this.H = null;
    this.M = new AbortController();
  }
  __name(Yl, "Yl");
  B(Yl, Z);
  p = Yl.prototype;
  p.open = function(a, b) {
    if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
    this.U = a;
    this.V = b;
    this.readyState = 1;
    Zl(this);
  };
  p.send = function(a) {
    if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
    if (this.M.signal.aborted) throw this.abort(), Error("Request was aborted.");
    this.j = true;
    var b = {
      headers: this.O,
      method: this.U,
      credentials: this.G,
      cache: void 0,
      signal: this.M.signal
    };
    a && (b.body = a);
    (this.X || z).fetch(new Request(this.V, b)).then(this.nb.bind(this), this.ma.bind(this));
  };
  p.abort = function() {
    this.o = this.v = "";
    this.O = new Headers();
    this.status = 0;
    this.M.abort("Request was aborted.");
    this.C && this.C.cancel("Request was aborted.").catch(n());
    this.readyState >= 1 && this.j && this.readyState != 4 && (this.j = false, $l(this));
    this.readyState = 0;
  };
  p.nb = function(a) {
    if (this.j && (this.H = a, this.A || (this.status = this.H.status, this.statusText = this.H.statusText, this.A = a.headers, this.readyState = 2, Zl(this)), this.j && (this.readyState = 3, Zl(this), this.j)))
      if (this.responseType === "arraybuffer") a.arrayBuffer().then(this.lb.bind(this), this.ma.bind(this));
      else if (a.body && z.ReadableStream) {
        this.C = a.body.getReader();
        if (this.L) {
          if (this.responseType) throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
          this.o = [];
        } else this.o = this.v = "", this.R = new TextDecoder();
        am(this);
      } else a.text().then(this.mb.bind(this), this.ma.bind(this));
  };
  function am(a) {
    a.C.read().then(a.kb.bind(a)).catch(a.ma.bind(a));
  }
  __name(am, "am");
  p.kb = function(a) {
    if (this.j) {
      if (this.L && a.value) this.o.push(a.value);
      else if (!this.L) {
        var b = a.value ? a.value : new Uint8Array(0);
        if (b = this.R.decode(b, {
          stream: !a.done
        })) this.o = this.v += b;
      }
      a.done ? $l(this) : Zl(this);
      this.readyState == 3 && am(this);
    }
  };
  p.mb = function(a) {
    this.j && (this.o = this.v = a, $l(this));
  };
  p.lb = function(a) {
    this.j && (this.o = a, $l(this));
  };
  p.ma = function() {
    this.j && $l(this);
  };
  function $l(a) {
    a.readyState = 4;
    a.H = null;
    a.C = null;
    a.R = null;
    Zl(a);
  }
  __name($l, "$l");
  p.setRequestHeader = function(a, b) {
    this.O.append(a, b);
  };
  p.getResponseHeader = function(a) {
    return this.A ? this.A.get(a.toLowerCase()) || "" : "";
  };
  p.getAllResponseHeaders = function() {
    if (!this.A) return "";
    for (var a = [], b = this.A.entries(), c = b.next(); !c.done; ) c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
    return a.join("\r\n");
  };
  function Zl(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  __name(Zl, "Zl");
  Object.defineProperty(Yl.prototype, "withCredentials", {
    get: /* @__PURE__ */ __name(function() {
      return this.G === "include";
    }, "get"),
    set: /* @__PURE__ */ __name(function(a) {
      this.G = a ? "include" : "same-origin";
    }, "set")
  });
  function bm(a) {
    this.j = null;
    this.l = a < 1;
    this.o = a < 0.01;
  }
  __name(bm, "bm");
  function cm(a, b, c) {
    c = c === void 0 ? {} : c;
    a.o && (c.sampling_samplePercentage = 0.01.toString(), a.j.info(b, c));
  }
  __name(cm, "cm");
  function dm(a, b, c) {
    c = c === void 0 ? {} : c;
    a.l && (c.sampling_samplePercentage = 1 .toString(), Kl(a.j, b, c));
  }
  __name(dm, "dm");
  ;
  function em(a) {
    this.B = G(a);
  }
  __name(em, "em");
  v(em, J);
  em.prototype.getMessage = function() {
    return wd(this, 1);
  };
  function fm(a) {
    this.B = G(a);
  }
  __name(fm, "fm");
  v(fm, J);
  function gm(a) {
    this.B = G(a);
  }
  __name(gm, "gm");
  v(gm, J);
  function hm(a) {
    this.B = G(a);
  }
  __name(hm, "hm");
  v(hm, J);
  function im(a, b) {
    return Bd(a, 1, b);
  }
  __name(im, "im");
  hm.prototype.Ma = function() {
    return I(this, fm, 3);
  };
  hm.prototype.wa = function() {
    return I(this, em, 5);
  };
  function jm(a) {
    this.B = G(a);
  }
  __name(jm, "jm");
  v(jm, J);
  function km(a) {
    var b = new jm();
    return Bd(b, 1, a);
  }
  __name(km, "km");
  jm.prototype.wa = function() {
    return I(this, em, 3);
  };
  jm.prototype.Ma = function() {
    return I(this, fm, 4);
  };
  function vm(a) {
    this.B = G(a);
  }
  __name(vm, "vm");
  v(vm, J);
  function wm(a) {
    this.B = G(a);
  }
  __name(wm, "wm");
  v(wm, J);
  function xm(a) {
    this.B = G(a);
  }
  __name(xm, "xm");
  v(xm, J);
  function ym(a) {
    this.B = G(a);
  }
  __name(ym, "ym");
  v(ym, J);
  function zm(a) {
    this.B = G(a);
  }
  __name(zm, "zm");
  v(zm, J);
  function Am(a) {
    this.B = G(a);
  }
  __name(Am, "Am");
  v(Am, J);
  function Bm(a, b) {
    return Bd(a, 1, b);
  }
  __name(Bm, "Bm");
  function Cm(a, b) {
    return sd(a, ym, 5, b);
  }
  __name(Cm, "Cm");
  ;
  function Wm(a) {
    this.B = G(a);
  }
  __name(Wm, "Wm");
  v(Wm, J);
  function Xm(a) {
    this.B = G(a);
  }
  __name(Xm, "Xm");
  v(Xm, J);
  function Ym(a) {
    this.B = G(a);
  }
  __name(Ym, "Ym");
  v(Ym, J);
  function Zm() {
    A(this.o, this);
    this.j = new wl();
    this.j.l = false;
    this.j.o = false;
    this.l = this.j.j = false;
    this.v = {};
  }
  __name(Zm, "Zm");
  function $m(a) {
    1 != a.l && (a.l = true);
  }
  __name($m, "$m");
  Zm.prototype.o = function(a) {
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
      var c = xl(this.j, a), d = an;
      if (d) {
        var e = b(a.v());
        bn(d, e, c, a.j());
      }
    }
  };
  var an = z.console;
  function bn(a, b, c, d) {
    if (a[b]) a[b](c, d === void 0 ? "" : d);
    else a.log(c, d === void 0 ? "" : d);
  }
  __name(bn, "bn");
  ;
  var cn = new Xl({
    Hb: self
  });
  cn.j = "same-origin";
  dl = cn;
  var ja;
  var ka;
  var la;
  var Lk;
  var Mk;
  var Nk;
  var Pk;

  // src/background/runtime-api.js
  var LegacyPromise = X;
  var Disposable = W;
  var createDeferred = Hg;
  var asLegacyPromise = Ag;
  var rejectOptedOut = Bg;
  var normalizeError = T;
  var attachErrorContext = rb;
  var ownDisposable = dg;
  var EventHandler = Yi;
  var createSessionId = qf;
  var schedule = Ri;
  var waitForOffscreenStartup = Si;
  var serialize = Mc;
  var readType = zd;
  var readNumber = xd;
  var readString = yd;
  var readOptionalString = wd;
  var readBoolean = /* @__PURE__ */ __name((message) => !!td(message, 2), "readBoolean");
  var readNested = I;
  var setString = Ad;
  var setNumber = Bd;
  var setNested = sd;
  var setBoolean = /* @__PURE__ */ __name((message, field, value) => ad(message, field, sc(value)), "setBoolean");
  var readEchoType = /* @__PURE__ */ __name((message) => vc(H(message, 1)), "readEchoType");
  var hasStringField = /* @__PURE__ */ __name((message, field) => Bc(H(message, field)) != null, "hasStringField");
  var Messages = Object.freeze({
    Error: em,
    FrameResponse: fm,
    DomainPolicyResponse: gm,
    WebsiteResponse: hm,
    OffscreenResponse: jm,
    FrameConfiguration: vm,
    FrameConnection: wm,
    Alarm: xm,
    FrameRequest: ym,
    UserChange: zm,
    OffscreenRequest: Am,
    EnableOffline: Wm,
    DomainPolicyRequest: Xm,
    WebsiteRequest: Ym
  });
  var getOffscreenError = /* @__PURE__ */ __name((response) => response.wa(), "getOffscreenError");
  var getFrameResponse = /* @__PURE__ */ __name((response) => response.Ma(), "getFrameResponse");
  function createUrl(value) {
    return new Th(value);
  }
  __name(createUrl, "createUrl");
  var setPath = Wh;
  var setQuery = gi;
  var setScheme = Uh;
  var SampledLogger = class {
    static {
      __name(this, "SampledLogger");
    }
    constructor(samplePercentage) {
      this.raw = new bm(samplePercentage);
    }
    bind(reporter) {
      this.raw.j = reporter;
    }
    info(error, context) {
      return cm(this.raw, error, context);
    }
    error(error, context) {
      return dm(this.raw, error, context);
    }
  };
  function initializeConsoleLogging() {
    const logger = new Zm();
    $m(logger);
    return logger;
  }
  __name(initializeConsoleLogging, "initializeConsoleLogging");
  function createErrorReporter(errorUrl, reportNonFatalErrors, sessionId) {
    const options = new zl();
    options.J = false;
    options.A = true;
    options.j = errorUrl;
    options.o = true;
    options.l = nh();
    options.D = false;
    options.v = Wl;
    const reporter = new yl(options);
    reporter.o.sessionTypeName = "offline-event-page";
    reporter.o.reportsNonFatalErrors = String(reportNonFatalErrors);
    reporter.o.sid = String(sessionId);
    return reporter;
  }
  __name(createErrorReporter, "createErrorReporter");
  var reporterContext = /* @__PURE__ */ __name((reporter) => reporter.o, "reporterContext");
  var reportError = Kl;
  var protectCallback = Ll;
  var monitorPromise = Ml;
  var unwrapMessageEvent = /* @__PURE__ */ __name((event) => event.j, "unwrapMessageEvent");

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

  // src/background/offline-state.js
  function readStorage(storageArea, keys) {
    return new LegacyPromise((resolve, reject) => {
      storageArea.get(keys, (values) => {
        if (chrome.runtime.lastError) reject(Error(chrome.runtime.lastError));
        else resolve(values);
      });
    });
  }
  __name(readStorage, "readStorage");
  function writeLocalState(values) {
    return new LegacyPromise((resolve, reject) => {
      chrome.storage.local.set(values, () => {
        if (chrome.runtime.lastError) reject(Error(chrome.runtime.lastError));
        else resolve();
      });
    });
  }
  __name(writeLocalState, "writeLocalState");
  function getOptedInUserId() {
    return readStorage(chrome.storage.local, ["optedInUserOuid"]).then(
      (values) => values.optedInUserOuid || null
    );
  }
  __name(getOptedInUserId, "getOptedInUserId");
  function enableOffline(userId) {
    return writeLocalState({ offlineOptedIn: true }).then(() => {
      if (userId) return writeLocalState({ optedInUserOuid: userId });
    });
  }
  __name(enableOffline, "enableOffline");
  function disableOffline() {
    return writeLocalState({ offlineOptedIn: false }).then(
      () => new LegacyPromise((resolve, reject) => {
        chrome.storage.local.remove("optedInUserOuid", () => {
          if (chrome.runtime.lastError) reject(Error(chrome.runtime.lastError));
          else resolve();
        });
      })
    );
  }
  __name(disableOffline, "disableOffline");
  function getOptInStatus() {
    return readStorage(chrome.storage.local, ["offlineOptedIn"]).then(
      ({ offlineOptedIn }) => {
        switch (offlineOptedIn) {
          case void 0:
            return OptInStatus.UNKNOWN;
          case true:
            return OptInStatus.ENABLED;
          case false:
            return OptInStatus.DISABLED;
          default:
            throw Error("Cannot handle opt in value " + offlineOptedIn);
        }
      }
    );
  }
  __name(getOptInStatus, "getOptInStatus");
  function getLastFrameConnectionTime() {
    return readStorage(chrome.storage.local, [
      "lastSuccessfulFrameConnectTime"
    ]).then((values) => values.lastSuccessfulFrameConnectTime || null);
  }
  __name(getLastFrameConnectionTime, "getLastFrameConnectionTime");

  // src/background/domain-policy.js
  function getAllowedDomains() {
    return readStorage(chrome.storage.managed, [
      "allowedDocsOfflineDomains"
    ]).then(
      (values) => values && values.allowedDocsOfflineDomains ? values.allowedDocsOfflineDomains : []
    );
  }
  __name(getAllowedDomains, "getAllowedDomains");
  function getAutoEnabledDomains() {
    return readStorage(chrome.storage.managed, [
      "autoEnabledDocsOfflineDomains"
    ]).then(
      (values) => values && values.autoEnabledDocsOfflineDomains ? values.autoEnabledDocsOfflineDomains : []
    );
  }
  __name(getAutoEnabledDomains, "getAutoEnabledDomains");
  function queryDomainPolicy(request) {
    const domain = readString(request, 1);
    const reads = [getAllowedDomains(), getAutoEnabledDomains()];
    return new LegacyPromise((resolve, reject) => {
      const values = [];
      let outstanding = reads.length;
      reads.forEach(
        (read, index) => read.then((value) => {
          values[index] = value;
          if (--outstanding === 0) resolve(values);
        }, reject)
      );
    }).then(([allowedDomains, autoEnabledDomains]) => {
      const autoEnabled = autoEnabledDomains.indexOf(domain) >= 0;
      const allowed = allowedDomains.indexOf(domain) >= 0 || autoEnabled;
      const response = new Messages.DomainPolicyResponse();
      setBoolean(response, 1, allowed);
      setBoolean(response, 2, autoEnabled);
      return response;
    });
  }
  __name(queryDomainPolicy, "queryDomainPolicy");

  // src/background/runtime-messaging.js
  function sendOffscreenRequest(request) {
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
      const error = getOffscreenError(response);
      if (error)
        reply.reject(Error("Error from Offscreen page:" + readString(error, 1)));
      else reply.resolve(response);
    });
    return reply.promise.catch((error) => {
      error = normalizeError(error);
      attachErrorContext(
        error,
        "offscreenDocumentRequestType",
        readNumber(request, 1).toString()
      );
      throw error;
    });
  }
  __name(sendOffscreenRequest, "sendOffscreenRequest");

  // src/background/offscreen-manager.js
  function hasOffscreenDocument() {
    return self.clients.matchAll().then(
      (clients) => clients.some(
        (client) => client.url.includes(chrome.runtime.getURL("offscreendocument.html"))
      )
    );
  }
  __name(hasOffscreenDocument, "hasOffscreenDocument");
  function isDisconnectedChannel(message) {
    return message.includes(
      "Could not establish connection. Receiving end does not exist."
    ) || message.includes(
      "The message port closed before a response was received."
    ) || message.includes(
      "A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"
    );
  }
  __name(isDisconnectedChannel, "isDisconnectedChannel");
  function documentCheckContextKey(attempt) {
    if (attempt === 0) return "hasDocument_beforeCreatingOffscreenDoc_0";
    if (attempt === 1) return "hasDocument_beforeCreatingOffscreenDoc_1";
    throw Error("Cannot get error context key with retryAttempt " + attempt);
  }
  __name(documentCheckContextKey, "documentCheckContextKey");
  function rethrowWithContext(error, context) {
    error = normalizeError(error);
    for (const [key, value] of Object.entries(context))
      attachErrorContext(error, key, value);
    throw error;
  }
  __name(rethrowWithContext, "rethrowWithContext");
  var OffscreenManager = class extends Disposable {
    static {
      __name(this, "OffscreenManager");
    }
    constructor(extensionVersion, sessionId, samplePercentage) {
      super();
      this.docsOrigin = null;
      this.extensionVersion = extensionVersion;
      this.sessionId = sessionId;
      this.samplePercentage = samplePercentage;
      this.frameReady = createDeferred();
      this.frameConnected = false;
      const url = createUrl();
      setPath(url, "offscreendocument.html");
      setQuery(url, "randomPercentageForSampling", samplePercentage);
      setQuery(url, "sessionId", sessionId);
      this.documentOptions = {
        url: url.toString(),
        reasons: ["IFRAME_SCRIPTING"],
        justification: "Use iframe to access user data under docs.google.com domain"
      };
      this.logger = new SampledLogger(samplePercentage);
    }
    markFrameConnected() {
      this.frameConnected = true;
      this.frameReady.resolve();
    }
    resetConnection() {
      this.frameReady = createDeferred();
      this.frameConnected = false;
    }
    close() {
      return hasOffscreenDocument().then((exists) => {
        if (!exists) return Promise.resolve();
        const request = setNumber(
          new Messages.OffscreenRequest(),
          1,
          OffscreenRequest.REMOVE_FRAME
        );
        return sendOffscreenRequest(request).then(
          () => chrome.offscreen.closeDocument()
        );
      }).then(() => this.resetConnection());
    }
    ensureFrame(userId) {
      return Promise.resolve(
        this.initializeDocument(
          this.configurationRequest(OffscreenRequest.ENSURE_FRAME, userId)
        )
      );
    }
    recreateFrame(userId) {
      return Promise.resolve(
        this.initializeDocument(
          this.configurationRequest(OffscreenRequest.RECREATE_FRAME, userId)
        )
      );
    }
    configurationRequest(type, userId) {
      const request = setNumber(new Messages.OffscreenRequest(), 1, type);
      const configuration = new Messages.FrameConfiguration();
      setString(configuration, 1, userId);
      setString(configuration, 2, this.docsOrigin.toString());
      setString(configuration, 3, this.extensionVersion);
      setString(configuration, 4, OptInStatus.ENABLED);
      return setNested(request, Messages.FrameConfiguration, 2, configuration);
    }
    ensureDocument(context) {
      return hasOffscreenDocument().then((exists) => {
        context[documentCheckContextKey(0)] = exists.toString();
        return exists ? Promise.resolve() : this.createDocument();
      });
    }
    createDocument() {
      return chrome.offscreen.createDocument(this.documentOptions).catch((error) => {
        if (error instanceof Error && error.message.includes(
          "Only a single offscreen document may be created"
        )) {
          this.logger.info(error);
        } else return Promise.reject(error);
      });
    }
    forceRecreateDocument(context) {
      return chrome.offscreen.closeDocument().catch((error) => {
        const message = error instanceof Error ? error.message : error.toString();
        this.logger.info(Error(message), context);
        context.errorWhenForceCloseOffscreenDoc = message;
      }).then(() => this.createDocument());
    }
    initializeDocument(request) {
      if (readNumber(request, 1) !== OffscreenRequest.ENSURE_FRAME)
        readNumber(request, 1);
      const context = {
        sendingOffscreenDocumentRequestType: readNumber(request, 1).toString()
      };
      return asLegacyPromise(this.ensureDocument(context)).then(() => waitForOffscreenStartup()).then(() => sendOffscreenRequest(request)).catch((error) => {
        if (!(error instanceof Error && isDisconnectedChannel(error.message))) {
          return Promise.reject(error instanceof Error ? error : Error(error));
        }
        this.logger.info(error, context);
        return asLegacyPromise(hasOffscreenDocument()).then((exists) => {
          context[documentCheckContextKey(1)] = exists.toString();
        }).then(() => this.forceRecreateDocument(context)).then(() => waitForOffscreenStartup()).then(() => sendOffscreenRequest(request));
      }).catch((error) => rethrowWithContext(error, context));
    }
    requestFrame(frameRequest) {
      const context = { sendingFrameRequestType: readNumber(frameRequest, 1) };
      const request = setNumber(
        new Messages.OffscreenRequest(),
        1,
        OffscreenRequest.FORWARD_TO_FRAME
      );
      setNested(request, Messages.FrameRequest, 5, frameRequest);
      return Promise.resolve(
        this.sendToConnectedFrame(request, context, 0)
      ).catch((error) => {
        if (error instanceof Error) {
          context.offlineFrameConnected_afterFirstError = this.frameConnected;
          if (isDisconnectedChannel(error.message)) {
            this.logger.info(error, context);
            return new Promise(
              (resolve) => setTimeout(
                () => resolve(this.sendToConnectedFrame(request, context, 1)),
                Timing.FRAME_RETRY_MS
              )
            );
          }
          if (error.message === "Requests cancelled because user has been opted out") {
            return Promise.resolve(new Messages.FrameResponse());
          }
        }
        return Promise.reject(error instanceof Error ? error : Error(error));
      });
    }
    sendToConnectedFrame(request, context, attempt) {
      return this.frameReady.promise.then(() => hasOffscreenDocument()).then((exists) => {
        context[documentCheckContextKey(attempt)] = exists.toString();
        return exists ? asLegacyPromise() : this.restoreFrame();
      }).then(() => this.frameReady.promise).then(() => sendOffscreenRequest(request)).then((response) => getFrameResponse(response)).catch((error) => rethrowWithContext(error, context));
    }
    restoreFrame() {
      this.resetConnection();
      return getOptInStatus().then(
        (status) => status === OptInStatus.ENABLED ? getOptedInUserId().then((userId) => this.recreateFrame(userId)) : rejectOptedOut()
      );
    }
    // Closure Disposable invokes this hook. Keep its ABI name at this boundary.
    N() {
      this.close();
      super.N();
    }
  };

  // src/background/heartbeat.js
  var HeartbeatScheduler = class {
    static {
      __name(this, "HeartbeatScheduler");
    }
    constructor(forwardAlarm, logger) {
      this.forwardAlarm = forwardAlarm;
      this.logger = logger;
    }
    start(force = false) {
      return new LegacyPromise((resolve) => {
        chrome.alarms.get("heartbeat", (existingAlarm) => {
          if (!existingAlarm)
            chrome.alarms.create("heartbeat", {
              periodInMinutes: Timing.HEARTBEAT_MINUTES
            });
          if (!existingAlarm || force) {
            this.forwardAlarm("heartbeat").catch(
              (error) => this.logger.error(normalizeError(error), {
                context: "startHeartbeat_triggerAlarm"
              })
            );
          }
          resolve();
        });
      });
    }
    stop() {
      return new LegacyPromise(
        (resolve) => chrome.alarms.clear("heartbeat", () => resolve())
      );
    }
  };

  // src/background/extension-controller.js
  function getExtensionVersion() {
    return chrome.runtime.getManifest().version || "unknown";
  }
  __name(getExtensionVersion, "getExtensionVersion");
  var ExtensionController = class extends Disposable {
    static {
      __name(this, "ExtensionController");
    }
    constructor() {
      super();
      this.sessionId = createSessionId();
      this.reporter = null;
      this.docsDomain = null;
      this.accountRecoveryAttempted = false;
      this.consoleLogger = initializeConsoleLogging();
      this.initialized = createDeferred();
      chrome.alarms.onAlarm.addListener(
        (alarm) => this.initialized.promise.then(
          () => monitorPromise(
            this.reporter,
            protectCallback(this.reporter, this.onAlarm, this)(alarm)
          )
        ).catch(
          (error) => this.logger.error(normalizeError(error), {
            extension_codePath: "onAlarm_listener"
          })
        )
      );
      chrome.runtime.onMessageExternal.addListener(
        (request, sender, reply) => this.onWebsiteMessage(request, reply)
      );
      chrome.runtime.onMessage.addListener(this.onOffscreenMessage.bind(this));
      this.events = new EventHandler(this);
      ownDisposable(this, this.events);
      this.events.listen(self, "message", this.onWindowMessage);
      this.samplePercentage = Math.random() * 100;
      this.reportNonFatalErrors = this.samplePercentage < 1;
      this.logger = new SampledLogger(this.samplePercentage);
      this.offscreen = new OffscreenManager(
        getExtensionVersion(),
        this.sessionId,
        this.samplePercentage
      );
      this.heartbeat = new HeartbeatScheduler(
        (name) => this.forwardAlarm(name),
        this.logger
      );
      chrome.runtime.onConnectExternal.addListener(() => {
      });
      schedule(this.scheduleRecoveryAlarm, Timing.WORKER_RECOVERY_MS, this);
    }
    getDocsOrigin() {
      return setScheme(createUrl("//" + this.docsDomain), "https");
    }
    load() {
      this.docsDomain = "docs.google.com";
      return writeLocalState({ docsDomain: this.docsDomain }).then(() => {
        const errorUrl = setPath(
          this.getDocsOrigin(),
          "/offline/jserror"
        ).toString();
        this.reporter = createErrorReporter(
          errorUrl,
          this.reportNonFatalErrors,
          this.sessionId
        );
        this.initialized.resolve();
        ownDisposable(this, this.reporter);
        this.logger.bind(this.reporter);
        this.offscreen.logger.bind(this.reporter);
        this.offscreen.docsOrigin = this.getDocsOrigin();
        ownDisposable(this, this.offscreen);
        const restore = protectCallback(
          this.reporter,
          this.restoreSavedState,
          this
        );
        return asLegacyPromise(
          monitorPromise(
            this.reporter,
            asLegacyPromise().then(() => restore())
          )
        );
      }).catch((error) => {
        normalizeError(error);
      });
    }
    restoreSavedState() {
      return getLastFrameConnectionTime().then((timestamp) => {
        reporterContext(this.reporter).lastSuccessfulFrameConnectTime = timestamp?.toString() || "null";
      }).then(() => getOptInStatus()).then((status) => {
        const version = getExtensionVersion();
        reporterContext(this.reporter).extensionVersion = version;
        reporterContext(this.reporter).optInStatus = String(status);
        this.reportStartup(String(status), version);
        switch (status) {
          case OptInStatus.UNKNOWN:
            break;
          case OptInStatus.ENABLED:
            return getOptedInUserId().then(
              (userId) => this.offscreen.recreateFrame(userId)
            );
          case OptInStatus.DISABLED:
            break;
          default:
            throw Error("Could not handle opt in status " + status);
        }
      });
    }
    reportStartup(status, version) {
      if (!this.reportNonFatalErrors) return;
      const url = setPath(this.getDocsOrigin(), "/offline/extension/report");
      setQuery(url, "v", version);
      setQuery(url, "optin", status);
      self.fetch(new Request(url.toString(), { method: "post", mode: "cors" })).then(() => {
      }).catch((error) => {
        reportError(this.reporter, normalizeError(error));
      });
    }
    scheduleRecoveryAlarm() {
      chrome.alarms.create("open", { delayInMinutes: 1 });
      this.logger.info(Error("Called unsafeClose_"));
    }
    onWindowMessage(wrappedEvent) {
      const event = unwrapMessageEvent(wrappedEvent);
      if (!(event && event.data && event.ports && event.ports.length)) {
        this.logger.error(Error("Dropped invalid event."), {
          event: String(wrappedEvent)
        });
        return;
      }
      const request = new Messages.WebsiteRequest(event.data);
      this.dispatchSafely(
        request,
        event.ports.length > 1 ? event.ports[1] : void 0
      ).then((response) => {
        event.ports[0].postMessage(serialize(response));
      }).catch(
        (error) => this.logger.error(normalizeError(error), {
          context: "onMessageFromOfflineFrame_postMessage"
        })
      );
    }
    onWebsiteMessage(wireRequest, reply) {
      const request = new Messages.WebsiteRequest(wireRequest);
      this.dispatchSafely(request).then((response) => {
        reply(serialize(response));
      }).catch((error) => {
        if (error instanceof Error && error.message === "Attempting to use a disconnected port object") {
          error = Error(
            "Failed to reply to request because listen port was disconnected."
          );
        } else error = normalizeError(error);
        this.logger.error(error, { requestType: readType(request) });
      });
      return true;
    }
    onOffscreenMessage(wireRequest, sender, reply) {
      const request = new Messages.OffscreenRequest(wireRequest);
      switch (readType(request)) {
        case OffscreenRequest.FRAME_CONNECTED: {
          const connection = readNested(request, Messages.FrameConnection, 4);
          const userId = hasStringField(connection, 1) ? readOptionalString(connection, 1) : null;
          const timestamp = readString(connection, 2);
          enableOffline(userId).then(
            () => writeLocalState({
              lastSuccessfulFrameConnectTime: parseInt(timestamp, 10)
            })
          ).then(() => {
            this.offscreen.markFrameConnected();
          }).then(() => {
            reply(
              serialize(
                setNumber(
                  new Messages.OffscreenResponse(),
                  1,
                  OffscreenRequest.FRAME_CONNECTED
                )
              )
            );
          }).catch(
            (error) => this.logger.error(normalizeError(error), {
              context: "saveFrameConnectInfo"
            })
          );
          break;
        }
        case OffscreenRequest.USER_CHANGED: {
          const response = setNumber(
            new Messages.OffscreenResponse(),
            1,
            OffscreenRequest.USER_CHANGED
          );
          const change = readNested(request, Messages.UserChange, 6);
          const userId = change == null ? void 0 : readOptionalString(change, 1);
          (userId ? this.recoverAccount(userId) : this.optOut()).then(() => reply(serialize(response))).catch(
            (error) => this.logger.error(normalizeError(error), {
              context: "detectUserIsOptedOut"
            })
          );
          break;
        }
        default:
          throw Error("Unsupported OffscreenDocumentRequestType.");
      }
      return true;
    }
    dispatchSafely(request, connectionPort) {
      return asLegacyPromise().then(this.dispatch.bind(this, request, connectionPort)).catch((error) => {
        error = error instanceof Error ? error : Error(error);
        const response = new Messages.WebsiteResponse();
        const payload = new Messages.Error();
        setNested(response, Messages.Error, 5, payload);
        setString(payload, 1, error.message);
        return response;
      });
    }
    dispatch(request) {
      const response = setNumber(
        new Messages.WebsiteResponse(),
        1,
        readEchoType(request)
      );
      switch (readType(request)) {
        case WebsiteRequest.FRAME_CONNECTED: {
          const connection = readNested(request, Messages.FrameConnection, 7);
          const userId = connection ? readString(connection, 1) : null;
          if (!userId)
            this.logger.info(
              Error("Scheduler frame connect request sent without an ouid.")
            );
          return enableOffline(userId).then(
            () => writeLocalState({ lastSuccessfulFrameConnectTime: Date.now() })
          ).then(() => {
            this.offscreen.markFrameConnected();
          }).then(() => response);
        }
        case WebsiteRequest.ENSURE_OFFLINE: {
          const options = readNested(request, Messages.EnableOffline, 8);
          const userId = options ? readString(options, 1) : null;
          const forceHeartbeat = options ? readBoolean(options) : false;
          return enableOffline(userId).then(() => userId || getOptedInUserId()).then(
            (savedUserId) => this.offscreen.ensureFrame(savedUserId).then(() => this.heartbeat.start(forceHeartbeat))
          ).then(() => response);
        }
        case WebsiteRequest.USER_CHANGED: {
          const change = readNested(request, Messages.UserChange, 3);
          return (change && readOptionalString(change, 1) ? this.recoverAccount(readOptionalString(change, 1)) : this.optOut()).then(() => response);
        }
        case WebsiteRequest.QUERY_DOMAIN_POLICY:
          return queryDomainPolicy(
            readNested(request, Messages.DomainPolicyRequest, 5)
          ).then((policy) => {
            setNested(response, Messages.DomainPolicyResponse, 4, policy);
            return response;
          });
        case WebsiteRequest.FORWARD_TO_FRAME:
          return asLegacyPromise(
            this.offscreen.requestFrame(
              readNested(request, Messages.FrameRequest, 4)
            )
          ).then((frameResponse) => {
            setNested(response, Messages.FrameResponse, 3, frameResponse);
            return response;
          });
        default:
          throw Error("Dropped unknown message " + request);
      }
    }
    recoverAccount(userId) {
      if (this.accountRecoveryAttempted)
        return asLegacyPromise(this.offscreen.close());
      this.logger.info(Error("Extension frame connected with the wrong OUID."));
      this.accountRecoveryAttempted = true;
      return asLegacyPromise(this.offscreen.recreateFrame(userId));
    }
    optOut() {
      return disableOffline().then(() => this.heartbeat.stop()).then(() => this.offscreen.close());
    }
    onAlarm(alarm) {
      return this.forwardAlarm(alarm.name);
    }
    forwardAlarm(name) {
      const request = setNumber(
        new Messages.FrameRequest(),
        1,
        FrameRequest.ALARM
      );
      const alarm = setString(new Messages.Alarm(), 1, name);
      setNested(request, Messages.Alarm, 2, alarm);
      return asLegacyPromise(this.offscreen.requestFrame(request));
    }
  };

  // src/background/index.js
  self.window = self;
  new ExtensionController().load();
})();
//# sourceMappingURL=service_worker_bin_prod.js.map
