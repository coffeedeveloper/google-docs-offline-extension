/**
 * 固定 Google 样本的语义阅读副本，不是 Google 原始源码。
 * 只重命名已确认的词法绑定并添加职责说明；保留属性 ABI、协议值和执行顺序。
 * 生成：pnpm research:generate；校验：pnpm research:check。
 * 未确认的运行库符号仍保留短名。不得作为自研实现或真实账号启动响应直接部署。
 */
try {
  var _F_toggles_initialize = function (a) {
    (typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
        ? self
        : this
    )._F_toggles = a || [];
  };
  _F_toggles_initialize([0x1804004, 0x0]);
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
  /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
  /*

 Copyright 2024 Google, Inc
 SPDX-License-Identifier: MIT
*/
  var n,
    p = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, p);
      else {
        let c = Error().stack;
        c && (this.stack = c);
      }
      a && (this.message = String(a));
      b !== void 0 && (this.cause = b);
      this.j = true;
    },
    aa = function (a) {
      r.setTimeout(function () {
        throw a;
      }, 0);
    },
    ba = function () {
      var a = r.navigator;
      return a && (a = a.userAgent) ? a : "";
    },
    ea = function (a) {
      if (!ca || !da) return false;
      for (let b = 0; b < da.brands.length; b++) {
        let c = da.brands[b].brand;
        if (c && c.indexOf(a) != -1) return true;
      }
      return false;
    },
    u = function (a) {
      return ba().indexOf(a) != -1;
    },
    fa = function () {
      return ca ? !!da && da.brands.length > 0 : false;
    },
    ha = function () {
      return fa() ? false : u("Opera");
    },
    ia = function () {
      return u("Firefox") || u("FxiOS");
    },
    ja = function () {
      return fa()
        ? ea("Chromium")
        : ((u("Chrome") || u("CriOS")) && !(fa() ? 0 : u("Edge"))) || u("Silk");
    },
    ka = function () {
      return ca ? !!da && !!da.platform : false;
    },
    la = function () {
      return u("iPhone") && !u("iPod") && !u("iPad");
    },
    ma = function (a, b) {
      b = Array.prototype.indexOf.call(a, b, void 0);
      var c;
      (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
      return c;
    },
    oa = function (a, b) {
      for (let c = 1; c < arguments.length; c++) {
        let d = arguments[c];
        if (na(d)) {
          let e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for (let g = 0; g < f; g++) a[e + g] = d[g];
        } else a.push(d);
      }
    },
    qa = function (a, b, c) {
      a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
      a.__closure__error__context__984382[b] = c;
    },
    ra = function (a) {
      return a.__closure__error__context__984382 || {};
    },
    sa = function (a) {
      a = Error(a);
      qa(a, "severity", "warning");
      return a;
    },
    ua = function (a, b) {
      if (a != null) {
        var c;
        var d = (c = ta) != null ? c : (ta = {});
        c = d[a] || 0;
        c >= b || ((d[a] = c + 1), (a = Error()), qa(a, "severity", "incident"), aa(a));
      }
    },
    va = function (a, b) {
      return (b === void 0 ? 0 : b) && Symbol.for && a
        ? Symbol.for(a)
        : a != null
          ? Symbol(a)
          : Symbol();
    },
    wa = function (a, b) {
      a[v] |= b;
    },
    xa = function (a) {
      wa(a, 34);
      return a;
    },
    ya = function (a) {
      wa(a, 8192);
      return a;
    },
    za = function (a) {
      wa(a, 32);
      return a;
    },
    Ca = function (a) {
      return a != null && a[Aa] === Ba;
    },
    w = function (a, b) {
      return b === void 0 ? a.j !== Da && !!(2 & (a.B[v] | 0)) : !!(2 & b) && a.j !== Da;
    },
    Ea = function (a) {
      a.jQ = true;
      return a;
    },
    Ha = function (a) {
      if (Fa(a)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
      } else if (Ga(a) && !Number.isSafeInteger(a)) throw Error(String(a));
      return BigInt(a);
    },
    Ka = function (a) {
      var b = a >>> 0;
      Ia = b;
      Ja = ((a - b) / 4294967296) >>> 0;
    },
    La = function (a) {
      if (a < 0) {
        Ka(-a);
        a = Ia;
        var b = Ja;
        b = ~b;
        a ? (a = ~a + 1) : (b += 1);
        b = x([a, b]);
        a = b.next().value;
        b = b.next().value;
        Ia = a >>> 0;
        Ja = b >>> 0;
      } else Ka(a);
    },
    Ma = function (a, b) {
      b >>>= 0;
      a >>>= 0;
      var c;
      b <= 2097151
        ? (c = "" + (4294967296 * b + a))
        : (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)));
      return c;
    },
    Na = function () {
      var a = Ia,
        b = Ja,
        c;
      b & 2147483648
        ? (c = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
        : (c = Ma(a, b));
      return c;
    },
    Pa = function (a) {
      return [].concat(Oa(a));
    },
    Qa = function (a) {
      if (a == null || typeof a === "number") return a;
      if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a);
    },
    Ra = function (a) {
      if (a == null || typeof a === "boolean") return a;
      if (typeof a === "number") return !!a;
    },
    Ua = function (a) {
      switch (typeof a) {
        case "bigint":
          return true;
        case "number":
          return Sa(a);
        case "string":
          return Ta.test(a);
        default:
          return false;
      }
    },
    Va = function (a) {
      if (typeof a !== "number") throw sa("int32");
      if (!Sa(a)) throw sa("int32");
      return a | 0;
    },
    Wa = function (a) {
      if (a == null) return a;
      if (typeof a === "string" && a) a = +a;
      else if (typeof a !== "number") return;
      return Sa(a) ? a | 0 : void 0;
    },
    cb = function (a) {
      var b = void 0;
      b != null || (b = 1024);
      if (!Ua(a)) throw sa("int64");
      var c = typeof a;
      switch (b) {
        case 512:
          switch (c) {
            case "string":
              return Xa(a);
            case "bigint":
              return String(Ya(64, a));
            default:
              return Za(a);
          }
        case 1024:
          switch (c) {
            case "string":
              return $a(a);
            case "bigint":
              return Ha(Ya(64, a));
            default:
              return ab(a);
          }
        case 0:
          switch (c) {
            case "string":
              return Xa(a);
            case "bigint":
              return Ha(Ya(64, a));
            default:
              return bb(a);
          }
        default:
          throw Error("Unknown format requested type for int64");
      }
    },
    bb = function (a) {
      a = db(a);
      if (!eb(a)) {
        La(a);
        var b = Ia,
          c = Ja;
        if ((a = c & 2147483648)) {
          b = (~b + 1) >>> 0;
          c = ~c >>> 0;
          b == 0 && (c = (c + 1) >>> 0);
        }
        let d = c * 4294967296 + (b >>> 0);
        b = Number.isSafeInteger(d) ? d : Ma(b, c);
        a = typeof b === "number" ? (a ? -b : b) : a ? "-" + b : b;
      }
      return a;
    },
    Za = function (a) {
      a = db(a);
      eb(a) ? (a = String(a)) : (La(a), (a = Na()));
      return a;
    },
    Xa = function (a) {
      var b = db(Number(a));
      if (eb(b)) return String(b);
      b = a.indexOf(".");
      b !== -1 && (a = a.substring(0, b));
      b = a.length;
      (a[0] === "-"
        ? b < 20 || (b === 20 && a <= "-9223372036854775808")
        : b < 19 || (b === 19 && a <= "9223372036854775807")) ||
        (a.length < 16
          ? La(Number(a))
          : ((a = BigInt(a)),
            (Ia = Number(a & BigInt(4294967295)) >>> 0),
            (Ja = Number((a >> BigInt(32)) & BigInt(4294967295)))),
        (a = Na()));
      return a;
    },
    $a = function (a) {
      var b = db(Number(a));
      if (eb(b)) return Ha(b);
      b = a.indexOf(".");
      b !== -1 && (a = a.substring(0, b));
      return Ha(Ya(64, BigInt(a)));
    },
    ab = function (a) {
      return eb(a) ? Ha(bb(a)) : Ha(Za(a));
    },
    fb = function (a) {
      var b = typeof a;
      if (a == null) return a;
      if (b === "bigint") return Ha(Ya(64, a));
      if (Ua(a)) return b === "string" ? $a(a) : ab(a);
    },
    gb = function (a) {
      return a == null || typeof a === "string" ? a : void 0;
    },
    jb = function (a, b, c, d) {
      if (Ca(a)) return a;
      if (!Array.isArray(a)) return c ? (d & 2 ? b[hb] || (b[hb] = ib(b)) : new b()) : void 0;
      c = a[v] | 0;
      d = c | (d & 32) | (d & 2);
      d !== c && (a[v] = d);
      return new b(a);
    },
    ib = function (a) {
      a = new a();
      xa(a.B);
      return a;
    },
    kb = function (a, b, c) {
      if (b) {
        if (typeof a !== "string") throw Error();
        return a;
      }
      var d;
      return (d = gb(a)) != null ? d : c ? "" : void 0;
    },
    lb = function (a) {
      return a;
    },
    mb = function (a) {
      return a;
    },
    ob = function (a, b, c, d, e, f) {
      a = jb(a, d, c, f);
      e && (a = nb(a));
      return a;
    },
    pb = function (a) {
      return [a, this.get(a)];
    },
    tb = function () {
      return qb || (qb = new rb(xa([]), void 0, void 0, void 0, sb));
    },
    vb = function (a, b) {
      b < 100 || ua(ub, 1);
    },
    Cb = function (a, b, c, d) {
      var e = d !== void 0;
      d = !!d;
      var f = wb(xb),
        g;
      !e && f && (g = a[f]) && yb(g, vb);
      f = [];
      var h = a.length;
      g = 4294967295;
      var k = false,
        l = !!(b & 64),
        m = l ? (b & 128 ? 0 : -1) : void 0;
      if (!(b & 1)) {
        var q = h && a[h - 1];
        q != null && typeof q === "object" && q.constructor === Object
          ? (h--, (g = h))
          : (q = void 0);
        if (l && !(b & 128) && !e) {
          k = true;
          var t;
          g = ((t = zb) != null ? t : lb)(g - m, m, a, q, void 0) + m;
        }
      }
      b = void 0;
      for (t = 0; t < h; t++) {
        let C = a[t];
        if (C != null && (C = c(C, d)) != null)
          if (l && t >= g) {
            let N = t - m;
            var B = void 0;
            ((B = b) != null ? B : (b = {}))[N] = C;
          } else f[t] = C;
      }
      if (q)
        for (let C in q) {
          B = q[C];
          if (B == null || (B = c(B, d)) == null) continue;
          h = +C;
          let N;
          if (l && !Number.isNaN(h) && (N = h + m) < g) f[N] = B;
          else {
            let pa;
            ((pa = b) != null ? pa : (b = {}))[C] = B;
          }
        }
      b && (k ? f.push(b) : (f[g] = b));
      e && wb(xb) && (a = (c = wb(xb)) ? a[c] : void 0) && a instanceof Ab && (f[xb] = Bb(a));
      return f;
    },
    Eb = function (a) {
      a[0] = Db(a[0]);
      a[1] = Db(a[1]);
      return a;
    },
    Db = function (a) {
      switch (typeof a) {
        case "number":
          return Number.isFinite(a) ? a : "" + a;
        case "bigint":
          return Fb(a) ? Number(a) : "" + a;
        case "boolean":
          return a ? 1 : 0;
        case "object":
          if (Array.isArray(a)) {
            var b = a[v] | 0;
            return a.length === 0 && b & 1 ? void 0 : Cb(a, b, Db);
          }
          if (Ca(a)) return Gb(a);
          if (a instanceof Hb) {
            b = a.j;
            if (b == null) a = "";
            else if (typeof b === "string") a = b;
            else {
              let c = "",
                d = 0,
                e = b.length - 10240;
              for (; d < e; ) c += String.fromCharCode.apply(null, b.subarray(d, (d += 10240)));
              c += String.fromCharCode.apply(null, d ? b.subarray(d) : b);
              b = btoa(c);
              a = a.j = b;
            }
            return a;
          }
          if (a instanceof rb) return ((a = a.size !== 0 ? Ib(a, Eb) : void 0), a);
          return;
      }
      return a;
    },
    Gb = function (a) {
      a = a.B;
      return Cb(a, a[v] | 0, Db);
    },
    y = function (a, b, c) {
      return Jb(a, b, c, 2048);
    },
    Jb = function (a, b, c, d) {
      d = d === void 0 ? 0 : d;
      if (a == null) {
        var e = 32;
        c ? ((a = [c]), (e |= 128)) : (a = []);
        b && (e = (e & -16760833) | ((b & 1023) << 14));
      } else {
        if (!Array.isArray(a)) throw Error("t");
        e = a[v] | 0;
        if (Kb && 1 & e) throw Error("u");
        2048 & e && !(2 & e) && Lb();
        if (e & 256) throw Error("v");
        if (e & 64) return ((e | d) !== e && (a[v] = e | d), a);
        if (c && ((e |= 128), c !== a[0])) throw Error("w");
        a: {
          c = a;
          e |= 64;
          var f = c.length;
          if (f) {
            var g = f - 1;
            let k = c[g];
            if (k != null && typeof k === "object" && k.constructor === Object) {
              b = e & 128 ? 0 : -1;
              g -= b;
              if (g >= 1024) throw Error("y");
              for (var h in k)
                if (((f = +h), f < g)) {
                  c[f + b] = k[h];
                  delete k[h];
                } else break;
              e = (e & -16760833) | ((g & 1023) << 14);
              break a;
            }
          }
          if (b) {
            h = Math.max(b, f - (e & 128 ? 0 : -1));
            if (h > 1024) throw Error("z");
            e = (e & -16760833) | ((h & 1023) << 14);
          }
        }
      }
      a[v] = e | 64 | d;
      return a;
    },
    Lb = function () {
      if (Kb) throw Error("x");
      ua(Mb, 5);
    },
    Pb = function (a, b) {
      if (typeof a !== "object") return a;
      if (Array.isArray(a)) {
        var c = a[v] | 0;
        return a.length === 0 && c & 1 ? void 0 : Nb(a, c, b);
      }
      if (Ca(a)) return Ob(a);
      if (a instanceof rb) {
        b = a.wa;
        if (b & 2) return a;
        if (!a.size) return;
        c = xa(Ib(a));
        if (a.sa)
          for (a = 0; a < c.length; a++) {
            let d = c[a],
              e = d[1];
            e == null || typeof e !== "object"
              ? (e = void 0)
              : Ca(e)
                ? (e = Ob(e))
                : Array.isArray(e)
                  ? (e = Nb(e, e[v] | 0, !!(b & 32)))
                  : (e = void 0);
            d[1] = e;
          }
        return c;
      }
      if (a instanceof Hb) return a;
    },
    Nb = function (a, b, c) {
      if (b & 2) return a;
      !c || 4096 & b || 16 & b
        ? (a = Qb(a, b, false, c && !(b & 16)))
        : (wa(a, 34), b & 4 && Object.freeze(a));
      return a;
    },
    Rb = function (a, b, c) {
      a = new a.constructor(b);
      c && (a.j = Da);
      a.l = Da;
      return a;
    },
    Ob = function (a) {
      var b = a.B,
        c = b[v] | 0;
      return w(a, c) ? a : Sb(a, b, c) ? Rb(a, b) : Qb(b, c);
    },
    Qb = function (a, b, c, d) {
      d != null || (d = !!(34 & b));
      a = Cb(a, b, Pb, d);
      d = 32;
      c && (d |= 2);
      b = (b & 16769217) | d;
      a[v] = b;
      return a;
    },
    nb = function (a) {
      var b = a.B,
        c = b[v] | 0;
      return w(a, c) ? (Sb(a, b, c) ? Rb(a, b, true) : new a.constructor(Qb(b, c, false))) : a;
    },
    Tb = function (a) {
      if (a.j !== Da) return false;
      var b = a.B;
      b = Qb(b, b[v] | 0);
      wa(b, 2048);
      a.B = b;
      a.j = void 0;
      a.l = void 0;
      return true;
    },
    Ub = function (a) {
      if (!Tb(a) && w(a, a.B[v] | 0)) throw Error();
    },
    Vb = function (a, b) {
      b === void 0 && (b = a[v] | 0);
      b & 32 && !(b & 4096) && (a[v] = b | 4096);
    },
    Sb = function (a, b, c) {
      return c & 2 ? true : c & 32 && !(c & 4096) ? ((b[v] = c | 2), (a.j = Da), true) : false;
    },
    z = function (a, b, c, d, e) {
      var f = c + (e ? 0 : -1),
        g = a.length - 1;
      if (g >= 1 + (e ? 0 : -1) && f >= g) {
        let h = a[g];
        if (h != null && typeof h === "object" && h.constructor === Object) return ((h[c] = d), b);
      }
      if (f <= g) return ((a[f] = d), b);
      if (d !== void 0) {
        let h;
        g = (((h = b) != null ? h : (b = a[v] | 0)) >> 14) & 1023 || 536870912;
        c >= g ? d != null && ((f = {}), (a[g + (e ? 0 : -1)] = ((f[c] = d), f))) : (a[f] = d);
      }
      return b;
    },
    ac = function (a, b, c, d, e) {
      var f = a.B,
        g = f[v] | 0;
      d = w(a, g) ? 1 : d;
      e = !!e || d === 3;
      d === 2 && Tb(a) && ((f = a.B), (g = f[v] | 0));
      a = Wb(f, b);
      var h = a === Xb ? 7 : a[v] | 0,
        k = Yb(h, g);
      var l = 4 & k ? false : true;
      if (l) {
        4 & k && ((a = Pa(a)), (h = 0), (k = Zb(k, g)), (g = z(f, g, b, a)));
        let m = 0,
          q = 0;
        for (; m < a.length; m++) {
          let t = c(a[m]);
          t != null && (a[q++] = t);
        }
        q < m && (a.length = q);
        c = (k | 4) & -513;
        k = c &= -1025;
        k &= -4097;
      }
      k !== h && ((a[v] = k), 2 & k && Object.freeze(a));
      return (a = $b(a, k, f, g, b, d, l, e));
    },
    $b = function (a, b, c, d, e, f, g, h) {
      var k = b;
      f === 1 || (f !== 4 ? 0 : 2 & b || (!(16 & b) && 32 & d))
        ? bc(b) ||
          ((b |= !a.length || (g && !(4096 & b)) || (32 & d && !(4096 & b || 16 & b)) ? 2 : 256),
          b !== k && (a[v] = b),
          Object.freeze(a))
        : (f === 2 && bc(b) && ((a = Pa(a)), (k = 0), (b = Zb(b, d)), (d = z(c, d, e, a, void 0))),
          bc(b) || (h || (b |= 16), b !== k && (a[v] = b)));
      2 & b || !(4096 & b || 16 & b) || Vb(c, d);
      return a;
    },
    Wb = function (a, b, c) {
      a = cc(a, b, c);
      return Array.isArray(a) ? a : Xb;
    },
    Yb = function (a, b) {
      2 & b && (a |= 2);
      return a | 1;
    },
    bc = function (a) {
      return (!!(2 & a) && !!(4 & a)) || !!(256 & a);
    },
    fc = function (a) {
      return a == null
        ? a
        : typeof a === "string"
          ? a
            ? new Hb(a, dc)
            : ec()
          : a.constructor === Hb
            ? a
            : a != null && a instanceof Uint8Array
              ? a.length
                ? new Hb(new Uint8Array(a), dc)
                : ec()
              : void 0;
    },
    hc = function (a, b, c, d) {
      !d && Tb(a) && ((b = a.B), (c = b[v] | 0));
      var e = cc(b, 3);
      a = false;
      if (e == null) {
        if (d) return tb();
        e = [];
      } else if (e.constructor === rb)
        if (e.wa & 2 && !d) e = Ib(e);
        else return e;
      else Array.isArray(e) ? (a = !!((e[v] | 0) & 2)) : (e = []);
      if (d) {
        if (!e.length) return tb();
        a || ((a = true), xa(e));
      } else if (a) {
        a = false;
        ya(e);
        d = e;
        d = Pa(d);
        for (e = 0; e < d.length; e++) {
          let f = (d[e] = Pa(d[e]));
          Array.isArray(f[1]) && (f[1] = xa(f[1]));
        }
        e = ya(d);
      }
      !a && c & 32 && za(e);
      d = new rb(e, void 0, kb, kb);
      c = z(b, c, 3, d);
      a || Vb(b, c);
      return d;
    },
    jc = function (a) {
      var b;
      return (b = a[ic]) != null ? b : (a[ic] = new Map());
    },
    nc = function (a, b, c, d) {
      var e = jc(a),
        f = mc(e, a, b, c);
      f !== d && (f && (b = z(a, b, f)), e.set(c, d));
      return b;
    },
    mc = function (a, b, c, d) {
      var e = a.get(d);
      if (e != null) return e;
      e = 0;
      for (let f = 0; f < d.length; f++) {
        let g = d[f];
        cc(b, g, void 0) != null && (e !== 0 && (c = z(b, c, e, void 0, void 0)), (e = g));
      }
      a.set(d, e);
      return e;
    },
    oc = function (a, b, c, d, e) {
      var f = false;
      d = cc(a, d, e, function (g) {
        var h = jb(g, c, false, b);
        f = h !== g && h != null;
        return h;
      });
      if (d != null) return (f && !w(d) && Vb(a, b), d);
    },
    pc = function (a, b, c, d, e, f, g, h) {
      var k = w(a, c);
      f = k ? 1 : f;
      g = !!g || f === 3;
      k = h && !k;
      (f === 2 || k) && Tb(a) && ((b = a.B), (c = b[v] | 0));
      a = Wb(b, e);
      var l = a === Xb ? 7 : a[v] | 0,
        m = Yb(l, c);
      if ((h = !(4 & m))) {
        var q = a,
          t = c;
        let B = !!(2 & m);
        B && (t |= 2);
        let C = !B,
          N = true,
          pa = 0,
          kc = 0;
        for (; pa < q.length; pa++) {
          let lc = jb(q[pa], d, false, t);
          if (lc instanceof d) {
            if (!B) {
              let jd = w(lc);
              C && (C = !jd);
              N && (N = jd);
            }
            q[kc++] = lc;
          }
        }
        kc < pa && (q.length = kc);
        m |= 4;
        m = N ? m & -4097 : m | 4096;
        m = C ? m | 8 : m & -9;
      }
      m !== l && ((a[v] = m), 2 & m && Object.freeze(a));
      if (
        k &&
        !(8 & m || (!a.length && (f === 1 || (f !== 4 ? 0 : 2 & m || (!(16 & m) && 32 & c)))))
      ) {
        bc(m) && ((a = Pa(a)), (m = Zb(m, c)), (c = z(b, c, e, a)));
        d = a;
        k = m;
        for (l = 0; l < d.length; l++) {
          q = d[l];
          m = nb(q);
          q !== m && (d[l] = m);
        }
        k |= 8;
        m = k = d.length ? k | 4096 : k & -4097;
        a[v] = m;
      }
      return (a = $b(a, m, b, c, e, f, h, g));
    },
    qc = function (a) {
      a == null && (a = void 0);
      return a;
    },
    Zb = function (a, b) {
      return (a = (2 & b ? a | 2 : a & -3) & -273);
    },
    rc = function (a, b) {
      if (b == null) {
        b = a.constructor;
        b = b[hb] || (b[hb] = ib(b));
      } else {
        a = a.constructor;
        if (!Array.isArray(b)) throw Error();
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error();
        b = new a(xa(b));
      }
      return b;
    },
    tc = function (a) {
      return function (b) {
        return sc(a, b);
      };
    },
    uc = function (a) {
      return Fb(a) ? Number(a) : String(a);
    },
    vc = function (a, b) {
      b = b === void 0 ? window : b;
      b = b === void 0 ? window : b;
      return (b = b.WIZ_global_data) && a in b ? b[a] : null;
    },
    yc = function () {
      return (wc = wc || new xc());
    },
    zc = function (a) {
      return a.toString().indexOf("`") === -1;
    },
    Ac = function (a, b) {
      if (a) {
        a = a.split("&");
        for (let c = 0; c < a.length; c++) {
          let d = a[c].indexOf("="),
            e,
            f = null;
          d >= 0 ? ((e = a[c].substring(0, d)), (f = a[c].substring(d + 1))) : (e = a[c]);
          b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
        }
      }
    },
    Bc = function (a, b) {
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
      a[1] = b ? (c ? c + "&" + b : b) : c;
      return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
    },
    Cc = function (a, b, c) {
      if (Array.isArray(b)) for (let d = 0; d < b.length; d++) Cc(a, String(b[d]), c);
      else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))));
    },
    Dc = function (a, b) {
      var c = [];
      for (b = b || 0; b < a.length; b += 2) Cc(a[b], a[b + 1], c);
      return c.join("&");
    },
    Ec = function (a) {
      var b = [];
      for (let c in a) Cc(c, a[c], b);
      return b.join("&");
    },
    Fc = function (a, b) {
      var c = arguments.length == 2 ? Dc(arguments[1], 0) : Dc(arguments, 1);
      return Bc(a, c);
    },
    Gc = function (a) {
      a && typeof a.dispose == "function" && a.dispose();
    },
    Hc = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        let d = arguments[b];
        na(d) ? Hc.apply(null, d) : Gc(d);
      }
    },
    A = function () {
      this.P = this.P;
      this.F = this.F;
    },
    Mc = function (a) {
      a = Ic(a);
      a = Jc(a);
      Kc || (Kc = Lc());
      Kc(a);
    },
    Rc = function () {
      for (var a; (a = Nc.remove()); ) {
        try {
          a.j.call(a.scope);
        } catch (b) {
          aa(b);
        }
        Oc(Pc, a);
      }
      Qc = false;
    },
    D = function (a, b) {
      this.C = [];
      this.V = a;
      this.aa = b || null;
      this.F = this.l = false;
      this.v = void 0;
      this.H = this.S = this.P = false;
      this.D = 0;
      this.o = null;
      this.G = 0;
    },
    Sc = function (a, b, c) {
      for (let d in a) b.call(c, a[d], d, a);
    },
    Tc = function (a) {
      var b = [],
        c = 0;
      for (let d in a) b[c++] = a[d];
      return b;
    },
    Uc = function (a) {
      var b = {};
      for (let c in a) b[c] = a[c];
      return b;
    },
    Wc = function (a, b) {
      for (let e = 1; e < arguments.length; e++) {
        var c = arguments[e];
        for (d in c) a[d] = c[d];
        for (let f = 0; f < Vc.length; f++) {
          var d = Vc[f];
          Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
        }
      }
    },
    Xc = function (a) {
      this.l = this.C = this.v = "";
      this.D = null;
      this.F = this.j = "";
      this.A = false;
      var b;
      a instanceof Xc
        ? ((this.A = a.A),
          Yc(this, a.v),
          (this.C = a.C),
          (this.l = a.l),
          Zc(this, a.D),
          $c(this, a.j),
          ad(this, a.o.clone()),
          (this.F = a.F))
        : a && (b = String(a).match(bd))
          ? ((this.A = false),
            Yc(this, b[1] || "", true),
            (this.C = cd(b[2] || "")),
            (this.l = cd(b[3] || "", true)),
            Zc(this, b[4]),
            $c(this, b[5] || "", true),
            ad(this, b[6] || "", true),
            (this.F = cd(b[7] || "")))
          : ((this.A = false), (this.o = new dd(null, this.A)));
    },
    ed = function () {
      var a = r.window;
      a.onbeforeunload = function () {};
      a.location.reload();
    },
    hd = function (a, b, c, d) {
      d =
        d === void 0
          ? function () {
              return E();
            }
          : d;
      return fd(
        gd(
          r.navigator.locks.request(a, { signal: c.signal }, function () {
            return b();
          }),
        ),
        function (e) {
          if (e.name === "AbortError") return d ? d() : E();
        },
      );
    },
    kd = function (a, b) {
      id.call(this, a ? a.type : "");
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
      a && this.init(a, b);
    },
    md = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.handler = e;
      this.key = ++ld;
      this.Ka = this.xa = false;
    },
    nd = function (a) {
      this.src = a;
      this.j = {};
      this.l = 0;
    },
    pd = function (a, b) {
      var c = a.match(bd)[5] || null;
      if (od.test(c)) {
        var d = a.match(bd),
          e = d[5];
        e = e.replace(b, "");
        b = d[1];
        a = d[2];
        c = d[3];
        var f = d[4],
          g = d[6];
        d = d[7];
        let h = "";
        b && (h += b + ":");
        c && ((h += "//"), a && (h += a + "@"), (h += c), f && (h += ":" + f));
        e && (h += e);
        g && (h += "?" + g);
        d && (h += "#" + d);
        b = h;
      } else b = a;
      return b;
    },
    F = function () {
      A.call(this);
      this.o = new nd(this);
      this.Ma = this;
      this.da = null;
    },
    qd = function (a, b) {
      F.call(this);
      this.l = a || 1;
      this.j = b || r;
      this.v = G(this.Rb, this);
      this.A = Date.now();
    },
    rd = function (a, b, c) {
      A.call(this);
      this.j = a;
      this.o = b || 0;
      this.l = c;
      this.v = G(this.Bb, this);
    },
    sd = function (a) {
      A.call(this);
      this.l = a;
      this.j = {};
    },
    td = function () {
      for (let a in Array.prototype) return false;
      return true;
    },
    ud = function (a, b) {
      this.width = a;
      this.height = b;
    },
    wd = function (a) {
      return a instanceof Error || (a && a.message !== void 0) ? a.message : vd(a);
    },
    xd = function (a) {
      return a instanceof Error || (a && a.stack !== void 0) ? a.stack || "" : "";
    },
    Bd = function (a, b) {
      var c = a && a.cause !== void 0;
      if (b >= 3 || !c) return null;
      c = new yd();
      a = a.cause;
      if (zd(a)) {
        if ((Ad(c, wd(a)), (c.j = xd(a)), (b = Bd(a, b + 1)))) c.cause = b;
      } else Ad(c, vd(a));
      return Cd(c);
    },
    zd = function (a) {
      return a instanceof Error || (!!a && a.message !== void 0 && a.stack !== void 0);
    },
    vd = function (a) {
      try {
        return zd(a)
          ? a.message + "\n" + a.stack
          : a && a instanceof Object
            ? JSON.stringify(a)
            : String(a);
      } catch (b) {
        return String(a);
      }
    },
    Dd = function (a, b, c) {
      c = c === void 0 ? new Map() : c;
      var d = Ad(new yd(), wd(a));
      d.j = xd(a);
      d.l = c;
      if ((a = Bd(a, 0))) d.cause = a;
      b && (d.o = b);
      return Cd(d);
    },
    Fd = function () {
      var a = [],
        b;
      a[8] = a[13] = a[18] = a[23] = "-";
      a[14] = "4";
      for (b = 0; b < 36; b++)
        if (!a[b]) {
          var c = 0 | (Math.random() * 16);
          a[b] = Ed[b == 19 ? (c & 3) | 8 : c];
        }
      return a.join("");
    },
    Ld = function () {
      var a = Gd(Hd(Id())),
        b = Jd(a, 1),
        c = Jd(a, 5);
      return [b, c].every(function (d) {
        return Kd.has(d);
      });
    },
    Nd = function (a) {
      try {
        return Md(yc(), a);
      } catch (b) {
        return false;
      }
    },
    Wd = function (a, b) {
      var c = (a = a === void 0 ? {} : a);
      a = c.pb;
      a = a === void 0 ? [] : a;
      var d = c.hb;
      d = d === void 0 ? [] : d;
      var e = c.Pb;
      e = e === void 0 ? [] : e;
      var f = c.Ob;
      f = f === void 0 ? [] : f;
      var g = c.kQ;
      g = g === void 0 ? [] : g;
      var h = c.lQ;
      h = h === void 0 ? [] : h;
      c = c.sessionId;
      c = c === void 0 ? void 0 : c;
      try {
        var k = Md(yc(), Od);
        var l = Pd(k, 1);
      } catch (B) {
        l = [];
      }
      k = Nd(Qd);
      var m = [],
        q = m.concat,
        t = [];
      e.length > 0 && t.push(Rd(e, [], 6));
      f.length > 0 && t.push(new Sd(f, [], 6, 0));
      g.length > 0 && t.push(new Td(g, [], 6, 5, 0));
      h.length > 0 && t.push(new Td(h, [], 6, 5, 1));
      return new Ud(b, {
        hb: q.call(m, Oa(t), Oa(d)),
        Nb: l,
        pb: [new Vd()].concat(Oa(a)),
        Sb: k,
        sessionId: c,
        Qb: Ld,
      });
    },
    Yd = function (a) {
      a = a === void 0 ? {} : a;
      return Wd(a, new Xd());
    },
    Zd = function (a) {
      return a
        ? a.split("\n").filter(function (b) {
            return b.trim() && !b.includes("signal is aborted without reason");
          }).length
        : 0;
    },
    $d = function (a, b) {
      var c = a.__wiz;
      c || (c = a.__wiz = {});
      return c[b.toString()];
    },
    de = function (a) {
      var b = document.body,
        c = (b.getAttribute("jsaction") || "").trim();
      var d = ["u0pjoe"];
      var e = x(d),
        f = e.next(),
        g;
      try {
        for (; !f.done; f = e.next()) {
          let l = f.value;
          a: {
            var h = c;
            if (!h) {
              var k = false;
              break a;
            }
            let q = ae[h];
            if (q) {
              k = !!q[l.toString()];
              break a;
            }
            let t = be[l.toString()];
            t ||
              ((t = new RegExp("(^\\s*" + l + "\\s*:|[\\s;]" + l + "\\s*:)")),
              (be[l.toString()] = t));
            k = t.test(h);
          }
          k || (c && !/;$/.test(c) && (c += ";"), (c += l + ":.CLIENT"), ce(b, c));
          let m = $d(b, l);
          m ? m.push(a) : (b.__wiz[l.toString()] = [a]);
        }
      } finally {
        f && !f.done && (g = e.return) && g.call(e);
      }
      return { et: d, Qa: a, el: b };
    },
    ce = function (a, b) {
      a.setAttribute("jsaction", b);
      "__jsaction" in a && delete a.__jsaction;
    },
    ee = function (a) {
      A.call(this);
      this.l = a;
    },
    fe = function () {},
    he = function (a, b) {
      a instanceof ge && (a = a.M);
      qa(a, "severity", b);
    },
    ie = function (a) {
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
    },
    je = function (a) {
      var b = a.target.error,
        c = b && b.name;
      b = (b && b.message) || a.target.webkitErrorMessage;
      a.target.docs_internalAbort && (b = "Internal abort: " + b);
      return c + " (" + b + ")";
    },
    le = function (a, b, c, d, e, f) {
      D.call(this, e, f);
      this.L = a;
      this.J = [];
      this.R = !!b;
      this.ba = !!c;
      this.X = !!d;
      this.U = 0;
      for (b = 0; b < a.length; b++)
        ke(a[b], G(this.da, this, b, true), G(this.da, this, b, false));
      a.length != 0 || this.R || this.j(this.J);
    },
    ue = function (a) {
      return me(a)
        .then(function (b) {
          if (b == null) return null;
          b = x(b);
          var c = b.next(),
            d;
          try {
            for (; !c.done; c = b.next()) {
              let l, m;
              if ((l = H(c.value, ne, 10, oe)) == null) var e = void 0;
              else {
                var f = pe,
                  g = void 0;
                let q = wb(xb);
                q && ((g = l.B[q]) == null ? void 0 : g[f.j]) != null && ua(qe, 3);
                a: {
                  g = void 0;
                  var h = l,
                    k = f.j;
                  g = g === void 0 ? false : g;
                  if (wb(re) && wb(xb) && void 0 === re) {
                    let t = h.B,
                      B = t[xb];
                    if (!B) break a;
                    let C = B.zb;
                    if (C)
                      try {
                        C(t, k, se);
                        break a;
                      } catch (N) {
                        aa(N);
                      }
                  }
                  if (g) {
                    let t = h.B,
                      B = wb(xb);
                    if (B && B in t) {
                      let C = t[B];
                      C && delete C[k];
                    }
                  }
                }
                e =
                  (m = f.ctor ? f.l(l, f.ctor, f.j, f.o) : f.l(l, f.j, f.defaultValue, f.o)) == null
                    ? void 0
                    : gb(I(m, 1, oe, te));
              }
              if ((f = e)) return f;
            }
          } finally {
            c && !c.done && (d = b.return) && d.call(b);
          }
          return null;
        })
        .catch(function () {
          return null;
        });
    },
    xe = function (a, b, c) {
      a = new qd(a);
      ve(c, a);
      var d = new sd(c);
      ve(c, d);
      we(d, a, "tick", b);
      a.start();
    },
    Be = function (a, b) {
      if (b && a in b) return a;
      var c = ye ? "Webkit" : ze ? "Moz" : null;
      return c ? ((c = c.toLowerCase()), (a = c + Ae(a)), b === void 0 || a in b ? a : null) : null;
    },
    He = function (a) {
      var b = b === void 0 ? Ce : b;
      var c = De(a),
        d = function (e) {
          e = x(e);
          e.next();
          e = Ee(e);
          return b(c, e);
        };
      return function () {
        var e = Fe.apply(0, arguments),
          f = this || r,
          g = Ge.get(f);
        g || ((g = {}), Ge.set(f, g));
        f = g;
        g = [this].concat(Oa(e));
        e = d ? d(g) : g;
        if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
        else {
          var h = x(g);
          g = h.next().value;
          h = Ee(h);
          g = a.apply(g, h);
          f = f[e] = g;
        }
        return f;
      };
    },
    Le = function (a) {
      F.call(this);
      a || (a = Ie || (Ie = new Je()));
      this.j = a;
      if ((this.l = this.Ib())) this.v = Ke(this.j.j, this.l, G(this.Kb, this));
    },
    Pe = function (a) {
      return a.every(function (b) {
        b instanceof Me
          ? (b = true)
          : b instanceof Ne
            ? (b = (b = b.l)
                ? (b instanceof Error &&
                    (b instanceof Oe ||
                      (b.name === "TypeError" && b.message === "Failed to fetch") ||
                      b.name === "NetworkError")) ||
                  (typeof b === "string" &&
                    (b.includes("Failed to fetch") ||
                      b.includes("NetworkError") ||
                      b.includes("Request not in cache")))
                  ? true
                  : false
                : false)
            : (b = false);
        return b;
      });
    },
    Ve = function (a) {
      a = a === void 0 ? {} : a;
      if (!Qe.wb()) {
        try {
          var b = Nd(Re);
        } catch (c) {
          b = false;
        }
        Qe = b && window.crashReport ? new Se() : new Te();
        Qe.initialize();
      }
      return Wd(a, new Ue());
    },
    We = Object.create,
    Xe = Object.defineProperty,
    Ye = globalThis,
    J = function (a, b) {
      if (b)
        a: {
          var c = Ye;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && b != null && Xe(c, a, { configurable: true, writable: true, value: b });
        }
    },
    Ze = (function () {
      function a() {
        function c() {}
        new c();
        Reflect.construct(c, [], function () {});
        return new c() instanceof c;
      }
      if (typeof Reflect != "undefined" && Reflect.construct) {
        if (a()) return Reflect.construct;
        var b = Reflect.construct;
        return function (c, d, e) {
          c = b(c, d);
          e && Reflect.setPrototypeOf(c, e.prototype);
          return c;
        };
      }
      return function (c, d, e) {
        e === void 0 && (e = c);
        e = We(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e;
      };
    })(),
    $e = Object.setPrototypeOf,
    K = function (a, b) {
      a.prototype = We(b.prototype);
      a.prototype.constructor = a;
      $e(a, b);
      a.Z = b.prototype;
    },
    af = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: false, value: a[b++] } : { done: true };
      };
    },
    x = function (a) {
      var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: af(a) };
      throw Error("a`" + String(a));
    },
    Ee = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    Oa = function (a) {
      return a instanceof Array ? a : Ee(x(a));
    },
    cf = function (a) {
      return bf(a, a);
    },
    bf = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    df = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ef = Object.assign;
  J("Object.assign", function (a) {
    return a || ef;
  });
  var Fe = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b;
  };
  J("globalThis", function (a) {
    return a || Ye;
  });
  J("Reflect", function (a) {
    return a ? a : {};
  });
  J("Reflect.construct", function () {
    return Ze;
  });
  J("Reflect.setPrototypeOf", function (a) {
    return a
      ? a
      : $e
        ? function (b, c) {
            try {
              return ($e(b, c), true);
            } catch (d) {
              return false;
            }
          }
        : null;
  });
  var ff = function (a, b, c) {
    if (a == null) throw new TypeError("b`" + c);
    if (b instanceof RegExp) throw new TypeError("c`" + c);
    return a + "";
  };
  J("String.prototype.startsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = ff(this, b, "startsWith"),
            e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return false;
          return g >= f;
        };
  });
  J("Object.setPrototypeOf", function (a) {
    return a || $e;
  });
  J("Promise", function (a) {
    function b() {
      this.j = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.l = function (g) {
      if (this.j == null) {
        this.j = [];
        var h = this;
        this.o(function () {
          h.A();
        });
      }
      this.j.push(g);
    };
    var d = Ye.setTimeout;
    b.prototype.o = function (g) {
      d(g, 0);
    };
    b.prototype.A = function () {
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
    b.prototype.v = function (g) {
      this.o(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.j = 0;
      this.o = void 0;
      this.l = [];
      this.C = false;
      var h = this.v();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.v = function () {
      function g(l) {
        return function (m) {
          k || ((k = true), l.call(h, m));
        };
      }
      var h = this,
        k = false;
      return { resolve: g(this.L), reject: g(this.A) };
    };
    e.prototype.L = function (g) {
      if (g === this) this.A(new TypeError("d"));
      else if (g instanceof e) this.O(g);
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
        h ? this.J(g) : this.F(g);
      }
    };
    e.prototype.J = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.A(k);
        return;
      }
      typeof h == "function" ? this.aa(h, g) : this.F(g);
    };
    e.prototype.A = function (g) {
      this.D(2, g);
    };
    e.prototype.F = function (g) {
      this.D(1, g);
    };
    e.prototype.D = function (g, h) {
      if (this.j != 0) throw Error("e`" + g + "`" + h + "`" + this.j);
      this.j = g;
      this.o = h;
      this.j === 2 && this.H();
      this.P();
    };
    e.prototype.H = function () {
      var g = this;
      d(function () {
        if (g.G()) {
          var h = Ye.console;
          typeof h !== "undefined" && h.error(g.o);
        }
      }, 1);
    };
    e.prototype.G = function () {
      if (this.C) return false;
      var g = Ye.CustomEvent,
        h = Ye.Event,
        k = Ye.dispatchEvent;
      if (typeof k === "undefined") return true;
      typeof g === "function"
        ? (g = new g("unhandledrejection", { cancelable: true }))
        : typeof h === "function"
          ? (g = new h("unhandledrejection", { cancelable: true }))
          : ((g = Ye.document.createEvent("CustomEvent")),
            g.initCustomEvent("unhandledrejection", false, true, g));
      g.promise = this;
      g.reason = this.o;
      return k(g);
    };
    e.prototype.P = function () {
      if (this.l != null) {
        for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
        this.l = null;
      }
    };
    var f = new b();
    e.prototype.O = function (g) {
      var h = this.v();
      g.Pa(h.resolve, h.reject);
    };
    e.prototype.aa = function (g, h) {
      var k = this.v();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    e.prototype.then = function (g, h) {
      function k(t, B) {
        return typeof t == "function"
          ? function (C) {
              try {
                l(t(C));
              } catch (N) {
                m(N);
              }
            }
          : B;
      }
      var l,
        m,
        q = new e(function (t, B) {
          l = t;
          m = B;
        });
      this.Pa(k(g, l), k(h, m));
      return q;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.Pa = function (g, h) {
      function k() {
        switch (l.j) {
          case 1:
            g(l.o);
            break;
          case 2:
            h(l.o);
            break;
          default:
            throw Error("f`" + l.j);
        }
      }
      var l = this;
      this.l == null ? f.l(k) : this.l.push(k);
      this.C = true;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var l = x(g), m = l.next(); !m.done; m = l.next()) c(m.value).Pa(h, k);
      });
    };
    e.all = function (g) {
      var h = x(g),
        k = h.next();
      return k.done
        ? c([])
        : new e(function (l, m) {
            function q(C) {
              return function (N) {
                t[C] = N;
                B--;
                B == 0 && l(t);
              };
            }
            var t = [],
              B = 0;
            do {
              t.push(void 0);
              B++;
              c(k.value).Pa(q(t.length - 1), m);
              k = h.next();
            } while (!k.done);
          });
    };
    return e;
  });
  J("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      Xe(this, "description", { configurable: true, writable: true, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e) throw new TypeError("g");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  J("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("h");
    Xe(Array.prototype, a, {
      configurable: true,
      writable: true,
      value: function () {
        return gf(af(this));
      },
    });
    return a;
  });
  var gf = function (a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  };
  J("Symbol.dispose", function (a) {
    return a ? a : Symbol("i");
  });
  J("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
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
  J("WeakMap", function (a) {
    function b() {}
    function c(k) {
      var l = typeof k;
      return (l === "object" && k !== null) || l === "function";
    }
    function d(k) {
      if (!df(k, f)) {
        var l = new b();
        Xe(k, f, { value: l });
      }
    }
    function e(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (m) {
          if (m instanceof b) return m;
          Object.isExtensible(m) && d(m);
          return l(m);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return false;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            m = new a([
              [k, 2],
              [l, 3],
            ]);
          if (m.get(k) != 2 || m.get(l) != 3) return false;
          m.delete(k);
          m.set(l, 4);
          return !m.has(k) && m.get(l) == 4;
        } catch (q) {
          return false;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      h = function (k) {
        this.j = (g += Math.random() + 1).toString();
        if (k) {
          k = x(k);
          for (var l; !(l = k.next()).done; ) {
            l = l.value;
            this.set(l[0], l[1]);
          }
        }
      };
    h.prototype.set = function (k, l) {
      if (!c(k)) throw Error("j");
      d(k);
      if (!df(k, f)) throw Error("k`" + k);
      k[f][this.j] = l;
      return this;
    };
    h.prototype.get = function (k) {
      return c(k) && df(k, f) ? k[f][this.j] : void 0;
    };
    h.prototype.has = function (k) {
      return c(k) && df(k, f) && df(k[f], this.j);
    };
    h.prototype.delete = function (k) {
      return c(k) && df(k, f) && df(k[f], this.j) ? delete k[f][this.j] : false;
    };
    return h;
  });
  J("Map", function (a) {
    if (
      (function () {
        if (
          !a ||
          typeof a != "function" ||
          !a.prototype.entries ||
          typeof Object.seal != "function"
        )
          return false;
        try {
          var h = Object.seal({ x: 4 }),
            k = new a(x([[h, "s"]]));
          if (
            k.get(h) != "s" ||
            k.size != 1 ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, "t") != k ||
            k.size != 2
          )
            return false;
          var l = k.entries(),
            m = l.next();
          if (m.done || m.value[0] != h || m.value[1] != "s") return false;
          m = l.next();
          return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? false : true;
        } catch (q) {
          return false;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (h) {
        this[0] = {};
        this[1] = f();
        this.size = 0;
        if (h) {
          h = x(h);
          for (var k; !(k = h.next()).done; ) {
            k = k.value;
            this.set(k[0], k[1]);
          }
        }
      };
    c.prototype.set = function (h, k) {
      h = h === 0 ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this[0][l.id] = []);
      l.entry
        ? (l.entry.value = k)
        : ((l.entry = { next: this[1], ia: this[1].ia, head: this[1], key: h, value: k }),
          l.list.push(l.entry),
          (this[1].ia.next = l.entry),
          (this[1].ia = l.entry),
          this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.entry && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.entry.ia.next = h.entry.next),
          (h.entry.next.ia = h.entry.ia),
          (h.entry.head = null),
          this.size--,
          true)
        : false;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].ia = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).entry;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).entry) && h.value;
    };
    c.prototype.entries = function () {
      return e(this, function (h) {
        return [h.key, h.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (h) {
        return h.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (h) {
        return h.value;
      });
    };
    c.prototype.forEach = function (h, k) {
      for (var l = this.entries(), m; !(m = l.next()).done; ) {
        m = m.value;
        h.call(k, m[1], m[0], this);
      }
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, k) {
        var l = k && typeof k;
        l == "object" || l == "function"
          ? b.has(k)
            ? (l = b.get(k))
            : ((l = "" + ++g), b.set(k, l))
          : (l = "p_" + k);
        var m = h[0][l];
        if (m && df(h[0], l))
          for (h = 0; h < m.length; h++) {
            var q = m[h];
            if ((k !== k && q.key !== q.key) || k === q.key)
              return { id: l, list: m, index: h, entry: q };
          }
        return { id: l, list: m, index: -1, entry: void 0 };
      },
      e = function (h, k) {
        var l = h[1];
        return gf(function () {
          if (l) {
            for (; l.head != h[1]; ) l = l.ia;
            for (; l.next != l.head; ) return ((l = l.next), { done: false, value: k(l) });
            l = null;
          }
          return { done: true, value: void 0 };
        });
      },
      f = function () {
        var h = {};
        return (h.ia = h.next = h.head = h);
      },
      g = 0;
    return c;
  });
  J("Set", function (a) {
    if (
      (function () {
        if (
          !a ||
          typeof a != "function" ||
          !a.prototype.entries ||
          typeof Object.seal != "function"
        )
          return false;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(x([c]));
          if (
            !d.has(c) ||
            d.size != 1 ||
            d.add(c) != d ||
            d.size != 1 ||
            d.add({ x: 4 }) != d ||
            d.size != 2
          )
            return false;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return false;
          f = e.next();
          return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0]
            ? false
            : e.next().done;
        } catch (g) {
          return false;
        }
      })()
    )
      return a;
    var b = function (c) {
      this.j = new Map();
      if (c) {
        c = x(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.j.size;
    };
    b.prototype.add = function (c) {
      c = c === 0 ? 0 : c;
      this.j.set(c, c);
      this.size = this.j.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.j.delete(c);
      this.size = this.j.size;
      return c;
    };
    b.prototype.clear = function () {
      this.j.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.j.has(c);
    };
    b.prototype.entries = function () {
      return this.j.entries();
    };
    b.prototype.values = function () {
      return this.j.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.j.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  J("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) df(b, d) && c.push(b[d]);
          return c;
        };
  });
  J("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  J("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
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
  J("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return ff(this, b, "includes").indexOf(b, c || 0) !== -1;
        };
  });
  J("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            c != null
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
          if (typeof f == "function") {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, g++));
          } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  J("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) df(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  J("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return typeof b !== "number" ? false : !isNaN(b) && b !== Infinity && b !== -Infinity;
        };
  });
  J("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  J("Number.MIN_SAFE_INTEGER", function () {
    return -9007199254740991;
  });
  J("Number.isInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : false;
        };
  });
  J("Number.isSafeInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
        };
  });
  J("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return this[Symbol.iterator]();
        };
  });
  J("Math.trunc", function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
          var c = Math.floor(Math.abs(b));
          return b < 0 ? -c : c;
        };
  });
  J("Number.isNaN", function (a) {
    return a
      ? a
      : function (b) {
          return typeof b === "number" && isNaN(b);
        };
  });
  J("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return this[Symbol.iterator]();
        };
  });
  J("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return this[Symbol.iterator]();
        };
  });
  J("Math.imul", function (a) {
    return a
      ? a
      : function (b, c) {
          b = Number(b);
          c = Number(c);
          var d = b & 65535,
            e = c & 65535;
          return (
            (d * e + (((((b >>> 16) & 65535) * e + d * ((c >>> 16) & 65535)) << 16) >>> 0)) | 0
          );
        };
  });
  J("String.prototype.matchAll", function (a) {
    return a
      ? a
      : function (b) {
          if (b instanceof RegExp && !b.global) throw new TypeError("m");
          var c = new RegExp(b, b instanceof RegExp ? void 0 : "g");
          b instanceof RegExp && (c.lastIndex = b.lastIndex);
          var d = this,
            e = false,
            f = {
              next: function () {
                if (e) return { value: void 0, done: true };
                var g = c.exec(d);
                if (!g) return ((e = true), { value: void 0, done: true });
                g[0] === "" && (c.lastIndex += 1);
                return { value: g, done: false };
              },
            };
          f[Symbol.iterator] = function () {
            return f;
          };
          return f;
        };
  });
  J("Promise.prototype.finally", function (a) {
    return a
      ? a
      : function (b) {
          return this.then(
            function (c) {
              return Promise.resolve(b()).then(function () {
                return c;
              });
            },
            function (c) {
              return Promise.resolve(b()).then(function () {
                throw c;
              });
            },
          );
        };
  });
  J("Promise.allSettled", function (a) {
    function b(d) {
      return { status: "fulfilled", value: d };
    }
    function c(d) {
      return { status: "rejected", reason: d };
    }
    return a
      ? a
      : function (d) {
          var e = this;
          d = Array.from(d, function (f) {
            return e.resolve(f).then(b, c);
          });
          return e.all(d);
        };
  });
  J("AggregateError", function (a) {
    if (a) return a;
    a = function (b, c) {
      c = Error(c);
      "stack" in c && (this.stack = c.stack);
      this.errors = b;
      this.message = c.message;
    };
    K(a, Error);
    a.prototype.name = "AggregateError";
    return a;
  });
  J("Promise.any", function (a) {
    return a
      ? a
      : function (b) {
          b = b instanceof Array ? b : Array.from(b);
          return Promise.all(
            b.map(function (c) {
              return Promise.resolve(c).then(
                function (d) {
                  throw d;
                },
                function (d) {
                  return d;
                },
              );
            }),
          ).then(
            function (c) {
              throw new AggregateError(c, "All promises were rejected");
            },
            function (c) {
              return c;
            },
          );
        };
  });
  var hf = hf || {},
    r = this || self,
    kf = function (a, b) {
      var c = jf("WIZ_global_data.oxN3nb");
      a = c && c[a];
      return a != null ? a : b;
    },
    lf = r._F_toggles || [],
    jf = function (a) {
      a = a.split(".");
      for (var b = r, c = 0; c < a.length; c++) if (((b = b[a[c]]), b == null)) return null;
      return b;
    },
    mf = function (a) {
      var b = typeof a;
      return b != "object" ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    },
    na = function (a) {
      var b = mf(a);
      return b == "array" || (b == "object" && typeof a.length == "number");
    },
    nf = function (a) {
      var b = typeof a;
      return (b == "object" && a != null) || b == "function";
    },
    De = function (a) {
      return (Object.prototype.hasOwnProperty.call(a, of) && a[of]) || (a[of] = ++pf);
    },
    of = "closure_uid_" + ((Math.random() * 1e9) >>> 0),
    pf = 0,
    qf = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    G = function (a, b, c) {
      G = qf;
      return G.apply(null, arguments);
    },
    rf = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    sf = function (a) {
      (0, eval)(a);
    },
    wb = function (a) {
      return a;
    },
    L = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Z = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.fQ = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    };
  L(p, Error);
  p.prototype.name = "CustomError";
  var Ie;
  var tf = !!((lf[0] >> 24) & 1),
    uf = !!((lf[0] >> 19) & 1),
    vf = !!((lf[0] >> 26) & 1),
    wf = !!(lf[0] & 4096);
  var ca = tf ? vf : kf(610401301, false),
    Kb = tf ? uf || !wf : kf(748402147, true);
  var da,
    xf = r.navigator;
  da = xf ? xf.userAgentData || null : null;
  var yf = function (a, b) {
    return Array.prototype.some.call(a, b, void 0);
  };
  var zf = function (a) {
    zf[" "](a);
    return a;
  };
  zf[" "] = function () {};
  ha();
  var Af = fa() ? false : u("Trident") || u("MSIE");
  u("Edge");
  var ze =
      u("Gecko") &&
      !(ba().toLowerCase().indexOf("webkit") != -1 && !u("Edge")) &&
      !(u("Trident") || u("MSIE")) &&
      !u("Edge"),
    ye = ba().toLowerCase().indexOf("webkit") != -1 && !u("Edge");
  ye && u("Mobile");
  ka() || u("Macintosh");
  ka() || u("Windows");
  (ka() ? da.platform === "Linux" : u("Linux")) || ka() || u("CrOS");
  ka() || u("Android");
  la();
  u("iPad");
  u("iPod");
  la() || u("iPad") || u("iPod");
  ba().toLowerCase().indexOf("kaios");
  var Bf = ia();
  la() || u("iPod");
  u("iPad");
  !u("Android") || ja() || ia() || ha() || u("Silk");
  var Cf = ja(),
    Df =
      u("Safari") &&
      !(
        ja() ||
        (fa() ? 0 : u("Coast")) ||
        ha() ||
        (fa() ? 0 : u("Edge")) ||
        (fa() ? ea("Microsoft Edge") : u("Edg/")) ||
        (fa() ? ea("Opera") : u("OPR")) ||
        ia() ||
        u("Silk") ||
        u("Android")
      ) &&
      !(la() || u("iPad") || u("iPod"));
  var dc = {},
    Ef = typeof structuredClone != "undefined";
  var Hb = function (a, b) {
      if (b !== dc) throw Error("q");
      this.j = a;
      if (a != null && a.length === 0) throw Error("p");
    },
    ec = function () {
      return Ff || (Ff = new Hb(null, dc));
    },
    Ff;
  var ta = void 0;
  var hb = va(),
    ic = va(),
    xb = va(),
    qe = va(),
    ub = va(),
    Mb = va(),
    Aa = va("m_m", true),
    re = va();
  var v = va("jas", true),
    Xb,
    Gf = [];
  Gf[v] = 7;
  Xb = Object.freeze(Gf);
  var Ba = {},
    Da = {},
    Hf = function (a, b, c) {
      this.j = a;
      this.l = b;
      this.o = c;
    };
  Hf.prototype.next = function () {
    var a = this.j.next();
    a.done || (a.value = this.l.call(this.o, a.value));
    return a;
  };
  Hf.prototype[Symbol.iterator] = function () {
    return this;
  };
  var If = Object.freeze({}),
    Jf = Object.freeze({}),
    oe = {};
  var Ga = Ea(function (a) {
      return typeof a === "number";
    }),
    Fa = Ea(function (a) {
      return typeof a === "string";
    });
  var Fb = Ea(function (a) {
      return a >= Kf && a <= Lf;
    }),
    Kf = BigInt(Number.MIN_SAFE_INTEGER),
    Lf = BigInt(Number.MAX_SAFE_INTEGER);
  var Ia = 0,
    Ja = 0;
  var Ya = typeof BigInt === "function" ? BigInt.asIntN : void 0,
    eb = Number.isSafeInteger,
    Sa = Number.isFinite,
    db = Math.trunc,
    Ta = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  var sb = {},
    M = (function () {
      var a = function () {
        return Ze(Map, [], this.constructor);
      };
      K(a, Map);
      return a;
    })(),
    rb = function (a, b, c, d) {
      c = c === void 0 ? mb : c;
      d = d === void 0 ? mb : d;
      var e = M.call(this) || this;
      e.wa = a[v] | 0;
      e.sa = b;
      e.Wa = c;
      e.Ab = e.sa ? ob : d;
      for (let f = 0; f < a.length; f++) {
        let g = a[f],
          h = c(g[0], false, true),
          k = g[1];
        b ? k === void 0 && (k = null) : (k = d(g[1], false, true, void 0, void 0, e.wa));
        M.prototype.set.call(e, h, k);
      }
      return e;
    };
  K(rb, M);
  var Mf = function (a) {
      if (a.wa & 2) throw Error("s");
    },
    Ib = function (a, b) {
      return ya(Array.from(M.prototype.entries.call(a), b));
    };
  n = rb.prototype;
  n.clear = function () {
    Mf(this);
    M.prototype.clear.call(this);
  };
  n.delete = function (a) {
    Mf(this);
    return M.prototype.delete.call(this, this.Wa(a, true, false));
  };
  n.entries = function () {
    if (this.sa) {
      var a = M.prototype.keys.call(this);
      a = new Hf(a, pb, this);
    } else a = M.prototype.entries.call(this);
    return a;
  };
  n.values = function () {
    if (this.sa) {
      var a = M.prototype.keys.call(this);
      a = new Hf(a, rb.prototype.get, this);
    } else a = M.prototype.values.call(this);
    return a;
  };
  n.forEach = function (a, b) {
    this.sa
      ? M.prototype.forEach.call(this, function (c, d, e) {
          a.call(b, e.get(d), d, e);
        })
      : M.prototype.forEach.call(this, a, b);
  };
  n.set = function (a, b) {
    Mf(this);
    a = this.Wa(a, true, false);
    return a == null
      ? this
      : b == null
        ? (M.prototype.delete.call(this, a), this)
        : M.prototype.set.call(this, a, this.Ab(b, true, true, this.sa, false, this.wa));
  };
  n.has = function (a) {
    return M.prototype.has.call(this, this.Wa(a, false, false));
  };
  n.get = function (a) {
    a = this.Wa(a, false, false);
    var b = M.prototype.get.call(this, a);
    if (b !== void 0) {
      var c = this.sa;
      return c
        ? ((c = this.Ab(b, false, true, c, this.gQ, this.wa)),
          c !== b && M.prototype.set.call(this, a, c),
          c)
        : b;
    }
  };
  rb.prototype[Symbol.iterator] = function () {
    return this.entries();
  };
  rb.prototype.toJSON = void 0;
  var qb;
  var Ab = function () {},
    yb = function (a, b) {
      for (let c in a) !isNaN(c) && b(a, +c, a[c]);
    },
    Bb = function (a) {
      var b = new Ab();
      yb(a, function (c, d, e) {
        b[d] = Pa(e);
      });
      b.zb = a.zb;
      return b;
    },
    se = { mQ: true };
  var Nf = Ef
      ? structuredClone
      : function (a) {
          return Cb(a, 0, Db);
        },
    zb;
  var Of = Ha(0),
    te = {},
    I = function (a, b, c, d, e) {
      b = cc(a.B, b, c, e);
      if (b !== null || (d && a.l !== Da)) return b;
    },
    cc = function (a, b, c, d) {
      if (b === -1) return null;
      var e = b + (c ? 0 : -1),
        f = a.length - 1;
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
          if (!Object.is(d, c)) return (h ? (g[b] = d) : (a[e] = d), d);
        }
        return c;
      }
    },
    Pf = function (a, b, c) {
      Ub(a);
      var d = a.B;
      z(d, d[v] | 0, b, c);
      return a;
    },
    Qf = function (a, b) {
      Ub(a);
      var c = a.B;
      nc(c, c[v] | 0, b, 0);
      return a;
    },
    Sf = function (a, b, c) {
      return Rf(a, b) === c ? c : -1;
    },
    Rf = function (a, b) {
      a = a.B;
      return mc(jc(a), a, void 0, b);
    },
    Tf = function (a, b, c) {
      Ub(a);
      a = a.B;
      var d = a[v] | 0,
        e = cc(a, c),
        f = void 0 === Jf;
      b = jb(e, b, !f, d);
      if (!f || b) return ((b = nb(b)), e !== b && ((d = z(a, d, c, b)), Vb(a, d)), b);
    },
    Uf = function (a, b, c) {
      a = a.B;
      return oc(a, a[v] | 0, b, c) || b[hb] || (b[hb] = ib(b));
    },
    H = function (a, b, c, d) {
      var e = a.B,
        f = e[v] | 0;
      b = oc(e, f, b, c, d);
      if (b == null) return b;
      f = e[v] | 0;
      if (!w(a, f)) {
        let g = nb(b);
        g !== b &&
          (Tb(a) && ((e = a.B), (f = e[v] | 0)), (b = g), (f = z(e, f, c, b, d)), Vb(e, f));
      }
      return b;
    },
    Vf = function (a, b, c) {
      var d = a.B;
      return pc(a, d, d[v] | 0, b, c, void 0 === If ? 2 : 4, false, true);
    },
    O = function (a, b, c) {
      c = qc(c);
      Pf(a, b, c);
      c && !w(c) && Vb(a.B);
      return a;
    },
    Xf = function (a, b, c) {
      var d = Wf;
      c = qc(c);
      a: {
        var e = c;
        Ub(a);
        let f = a.B,
          g = f[v] | 0;
        if (e == null) {
          let h = jc(f);
          if (mc(h, f, g, d) === b) h.set(d, 0);
          else break a;
        } else g = nc(f, g, d, b);
        z(f, g, b, e);
      }
      c && !w(c) && Vb(a.B);
      return a;
    },
    Yf = function (a, b) {
      return I(a, b, void 0, void 0, fb);
    },
    Zf = function (a, b, c) {
      a = I(a, b, void 0, c);
      return a == null ? a : Sa(a) ? a | 0 : void 0;
    },
    $f = function (a, b) {
      var c = c === void 0 ? false : c;
      var d;
      return (d = Ra(I(a, b))) != null ? d : c;
    },
    ag = function (a, b, c) {
      c = c === void 0 ? 0 : c;
      var d;
      return (d = Wa(I(a, b))) != null ? d : c;
    },
    bg = function (a, b) {
      var c = c === void 0 ? Of : c;
      var d;
      return (d = Yf(a, b)) != null ? d : c;
    },
    cg = function (a, b) {
      var c = c === void 0 ? "" : c;
      var d;
      return (d = gb(I(a, b))) != null ? d : c;
    },
    Jd = function (a, b) {
      var c = c === void 0 ? 0 : c;
      var d;
      return (d = Zf(a, b)) != null ? d : c;
    },
    Pd = function (a, b) {
      return ac(a, b, gb, void 0 === If ? 2 : 4);
    },
    dg = function (a, b, c) {
      if (c != null && typeof c !== "boolean") throw Error("r`" + mf(c) + "`" + c);
      Pf(a, b, c);
    },
    P = function (a, b, c) {
      return Pf(a, b, c == null ? c : cb(c));
    },
    eg = function (a, b, c) {
      if (c != null && typeof c !== "string") throw Error();
      return Pf(a, b, c);
    },
    fg = function (a, b, c) {
      if (c != null) {
        if (!Sa(c)) throw sa("enum");
        c |= 0;
      }
      return Pf(a, b, c);
    };
  var Q = function (a, b, c) {
    this.B = y(a, b, c);
  };
  Q.prototype.toJSON = function () {
    return Gb(this);
  };
  var sc = function (a, b) {
    if (b == null || b == "") return new a();
    b = JSON.parse(b);
    if (!Array.isArray(b)) throw Error("A");
    return new a(za(b));
  };
  Q.prototype.clone = function () {
    var a = this.B,
      b = a[v] | 0;
    return Sb(this, a, b) ? Rb(this, a, true) : new this.constructor(Qb(a, b, false));
  };
  var Id = function () {
    var a = r;
    a = a === void 0 ? window : a;
    var b = new gg("K1cgmc", vc("K1cgmc", a));
    a = hg;
    var c = new hg();
    b = ig(b);
    a = b === null ? c : sc(a, "[" + b.substring(4));
    c = a.B;
    b = c[v] | 0;
    return w(a, b) ? a : Sb(a, c, b) ? Rb(a, c) : new a.constructor(Qb(c, b, true));
  };
  Q.prototype[Aa] = Ba;
  Q.prototype.toString = function () {
    return this.B.toString();
  };
  var kg = function () {
    var a = ne,
      b = jg;
    this.j = 48448350;
    this.ctor = b;
    this.l = H;
    this.defaultValue = void 0;
    this.o = a.Ha != null ? oe : void 0;
  };
  kg.prototype.register = function () {
    zf(this);
  };
  var lg = function (a) {
    this.B = y(a);
  };
  K(lg, Q);
  var ng = function (a) {
    this.B = y(a);
  };
  K(ng, Q);
  var og = function (a) {
    this.B = y(a);
  };
  K(og, Q);
  var pg = function (a) {
    this.B = y(a);
  };
  K(pg, Q);
  var qg = function (a, b) {
    {
      Ub(a);
      let g = a.B,
        h = g[v] | 0;
      if (b == null) z(g, h, 1);
      else {
        var c = b === Xb ? 7 : b[v] | 0,
          d = c,
          e = bc(c),
          f = e || Object.isFrozen(b);
        e || (c = 0);
        f || ((b = Pa(b)), (d = 0), (c = Zb(c, h)), (f = false));
        c |= 5;
        e = 4 & c ? (512 & c ? 512 : 1024 & c ? 1024 : 0) : void 0;
        c |= e != null ? e : 1024;
        for (e = 0; e < b.length; e++) {
          let k = b[e],
            l = Va(k);
          Object.is(k, l) || (f && ((b = Pa(b)), (d = 0), (c = Zb(c, h)), (f = false)), (b[e] = l));
        }
        c !== d && (f && ((b = Pa(b)), (c = Zb(c, h))), (b[v] = c));
        z(g, h, 1, b);
      }
    }
    return a;
  };
  var rg = function (a) {
    this.B = y(a);
  };
  K(rg, Q);
  var sg = function (a) {
    this.B = y(a);
  };
  K(sg, Q);
  var tg = function (a, b) {
      return Xf(a, 4, b);
    },
    Wf = [3, 4];
  var ug = function (a) {
    this.B = y(a);
  };
  K(ug, Q);
  ug.prototype.ea = function (a) {
    return eg(this, 3, a);
  };
  var vg = function (a) {
    this.B = y(a);
  };
  K(vg, Q);
  var jg = function (a) {
    this.B = y(a, 0, jg.Ha);
  };
  K(jg, Q);
  jg.Ha = "xsrf";
  var ne = function (a) {
    this.B = y(a, 1);
  };
  K(ne, Q);
  var pe;
  pe = new kg();
  var wg = {
    qP: 91e3,
    Wb: 91296,
    Xb: 91295,
    Yb: 91294,
    Sf: 91503,
    Tf: 91509,
    Uf: 91519,
    Vf: 91510,
    Wf: 91520,
    Xf: 91511,
    Yf: 91521,
    Zf: 91536,
    ag: 91537,
    dg: 91788,
    fg: 91386,
    gg: 91583,
    hg: 91587,
    ig: 91529,
    jg: 91697,
    kg: 91530,
    lg: 91675,
    mg: 91531,
    ng: 91600,
    og: 91756,
    pg: 91058,
    qg: 91791,
    rg: 91803,
    sg: 91804,
    tg: 91792,
    ug: 91793,
    vg: 91464,
    wg: 91463,
    xg: 91323,
    yg: 91239,
    Ag: 91744,
    Bg: 91786,
    Cg: 91727,
    Dg: 91709,
    Eg: 91712,
    Fg: 91061,
    Hg: 91199,
    Jg: 91188,
    Lg: 91187,
    Mg: 91183,
    Og: 91105,
    Qg: 91093,
    Rg: 91094,
    Sg: 91095,
    Tg: 91184,
    Ug: 91164,
    Wg: 91096,
    Xg: 91100,
    Zg: 91402,
    ah: 91062,
    dh: 91106,
    eh: 91209,
    fh: 91210,
    gh: 91211,
    hh: 91052,
    jh: 91195,
    Wi: 91526,
    Ij: 91434,
    Kj: 91688,
    Lj: 91092,
    Mj: 91024,
    Nj: 91462,
    Oj: 91467,
    Pj: 91234,
    Qj: 91321,
    Rj: 91543,
    Sj: 91576,
    Tj: 91383,
    Uj: 91312,
    Vj: 91265,
    Yj: 91244,
    Zj: 91161,
    ak: 91150,
    ck: 91344,
    dk: 91247,
    ek: 91248,
    fk: 91611,
    gk: 91612,
    hk: 91191,
    ik: 91181,
    jk: 91182,
    kk: 91180,
    lk: 91544,
    mk: 91545,
    nk: 91263,
    pk: 91148,
    rk: 91020,
    sk: 91322,
    tk: 91266,
    uk: 91031,
    vk: 91622,
    wk: 91218,
    xk: 91214,
    yk: 91215,
    zk: 91216,
    Ak: 91217,
    lp: 91707,
    mp: 91708,
    np: 91851,
    op: 91850,
    qp: 91310,
    yp: 91532,
    zp: 91533,
    Ap: 91534,
    Bp: 91535,
    Cp: 91305,
    Dp: 91306,
    Ep: 91307,
    Fp: 91308,
    Gp: 91476,
    Hp: 91070,
    Ip: 91071,
    Jp: 91237,
    Kp: 91879,
    Lp: 91837,
    Mp: 91880,
    Np: 91285,
    Op: 91824,
    Pp: 91033,
    Qp: 91264,
    Rp: 91178,
    Sp: 91696,
    Tp: 91710,
    Up: 91392,
    Vp: 91647,
    Wp: 91648,
    Xp: 91644,
    Yp: 91645,
    Zp: 91646,
    aq: 91454,
    bq: 91567,
    cq: 91230,
    eq: 91229,
    fq: 91224,
    gq: 91223,
    hq: 91456,
    iq: 91457,
    jq: 91870,
    mq: 91475,
    nq: 91693,
    oq: 91692,
    pq: 91694,
    qq: 91695,
    rq: 91580,
    Mq: 91586,
    Nq: 91630,
    Oq: 91654,
    Pq: 91631,
    Qq: 91632,
    Rq: 91633,
    Sq: 91634,
    Tq: 91787,
    Uq: 91524,
    Vq: 91492,
    Xq: 91484,
    ar: 91450,
    br: 91451,
    dr: 91491,
    er: 91556,
    gr: 91601,
    hr: 91602,
    ir: 91749,
    jr: 91603,
    kr: 91750,
    lr: 91760,
    mr: 91667,
    nr: 91411,
    pr: 91301,
    qr: 91299,
    rr: 91300,
    sr: 91435,
    tr: 91298,
    ur: 91297,
    vr: 91412,
    wr: 91776,
    xr: 91779,
    yr: 91777,
    zr: 91525,
    Ar: 91303,
    Br: 91302,
    Cr: 91413,
    Dr: 91745,
    Gr: 91453,
    Hr: 91461,
    Ir: 91682,
    Jr: 91681,
    Kr: 91684,
    Lr: 91683,
    Mr: 91656,
    Nr: 91698,
    Or: 91699,
    Pr: 91703,
    Qr: 91701,
    Rr: 91702,
    Tr: 91857,
    Ur: 91840,
    Vr: 91841,
    Wr: 91830,
    Xr: 91831,
    Yr: 91847,
    Zr: 91815,
    bs: 91795,
    cs: 91796,
    ds: 91797,
    es: 91820,
    fs: 91798,
    gs: 91802,
    hs: 91800,
    js: 91801,
    ks: 91799,
    ls: 91809,
    ns: 91812,
    os: 91811,
    ps: 91810,
    qs: 91823,
    rs: 91813,
    ss: 91814,
    ts: 91821,
    us: 91829,
    vs: 91465,
    ws: 91466,
    xs: 91226,
    ys: 91111,
    zs: 91293,
    As: 91051,
    Bs: 91043,
    Cs: 91028,
    Ds: 91041,
    Es: 91042,
    Fs: 91262,
    Hs: 91010,
    Js: 91751,
    Ks: 91752,
    Ls: 91826,
    Ms: 91827,
    Os: 91747,
    Ps: 91825,
    Qs: 91754,
    Rs: 91755,
    Ss: 91731,
    Ts: 91542,
    Us: 91660,
    Vs: 91679,
    Ws: 91628,
    Xs: 91668,
    Ys: 91669,
    Zs: 91680,
    bt: 91629,
    ct: 91670,
    dt: 91671,
    ft: 91449,
    gt: 91615,
    ht: 91616,
    jt: 91613,
    kt: 91614,
    lt: 91884,
    mt: 91261,
    nt: 91260,
    ot: 91666,
    qt: 91653,
    rt: 91651,
    st: 91652,
    wG: 91236,
    BG: 91742,
    CG: 91107,
    DG: 91108,
    HG: 91116,
    IG: 91568,
    JG: 91605,
    KG: 91390,
    LG: 91590,
    MG: 91773,
    NG: 91774,
    OG: 91584,
    PG: 91577,
    QG: 91397,
    SG: 91396,
    TG: 91561,
    UG: 91724,
    VG: 91607,
    WG: 91591,
    XG: 91608,
    YG: 91398,
    ZG: 91563,
    aH: 91562,
    bH: 91704,
    cH: 91578,
    dH: 91579,
    eH: 91588,
    fH: 91592,
    gH: 91606,
    hH: 91569,
    iH: 91570,
    jH: 91593,
    kH: 91720,
    lH: 91719,
    mH: 91564,
    nH: 91594,
    oH: 91595,
    pH: 91726,
    qH: 91725,
    rH: 91596,
    sH: 91589,
    tH: 91597,
    uH: 91623,
    vH: 91598,
    wH: 91609,
    xH: 91772,
    yH: 91771,
    zH: 91395,
    AH: 91552,
    BH: 91437,
    CH: 91854,
    DH: 91432,
    EH: 91439,
    FH: 91649,
    GH: 91856,
    HH: 91440,
    IH: 91650,
    JH: 91441,
    KH: 91483,
    LH: 91444,
    MH: 91442,
    NH: 91443,
    OH: 91548,
    PH: 91547,
    QH: 91853,
    RH: 91438,
    SH: 91445,
    TH: 91846,
    UH: 91862,
    VH: 91861,
    WH: 91326,
    XH: 91245,
    YH: 91324,
    ZH: 91246,
    bI: 91420,
    fI: 91317,
    gI: 91325,
    hI: 91316,
    jI: 91142,
    kI: 91311,
    lI: 91011,
    nI: 91146,
    oI: 91388,
    qI: 91040,
    rI: 91391,
    sI: 91581,
    tI: 91166,
    uI: 91168,
    vI: 91169,
    wI: 91834,
    xI: 91743,
    yI: 91385,
    zI: 91050,
    AI: 91023,
    BI: 91196,
    CI: 91197,
    DI: 91539,
    FI: 91279,
    HI: 91655,
    II: 91084,
    JI: 91016,
    KI: 91085,
    LI: 91114,
    MI: 91115,
    NI: 91065,
    OI: 91068,
    QI: 91069,
    RI: 91757,
    SI: 91758,
    TI: 91759,
    UI: 91387,
    VI: 91147,
    WI: 91367,
    XI: 91194,
    YI: 91130,
    ZI: 91131,
    aJ: 91132,
    bJ: 91133,
    cJ: 91627,
    dJ: 91121,
    eJ: 91122,
    fJ: 91123,
    gJ: 91124,
    iJ: 91573,
    jJ: 91572,
    kJ: 91125,
    lJ: 91128,
    mJ: 91126,
    nJ: 91127,
    oJ: 91117,
    pJ: 91118,
    qJ: 91119,
    rJ: 91120,
    sJ: 91764,
    tJ: 91765,
    uJ: 91389,
    vJ: 91522,
    xJ: 91784,
    yJ: 91785,
    zJ: 91783,
    AJ: 91780,
    EJ: 91274,
    FJ: 91275,
    GJ: 91278,
    HJ: 91315,
    IJ: 91267,
    JJ: 91636,
    KJ: 91637,
    LJ: 91638,
    MJ: 91639,
    NJ: 91640,
    OJ: 91687,
    PJ: 91860,
    QJ: 91022,
    RJ: 91370,
    SJ: 91368,
    TJ: 91369,
    UJ: 91523,
    VJ: 91228,
    WJ: 91227,
    XJ: 91256,
    YJ: 91225,
    ZJ: 91112,
    aK: 91143,
    cK: 91277,
    dK: 91508,
    eK: 91706,
    fK: 91599,
    gK: 91565,
    hK: 91566,
    iK: 91276,
    jK: 91507,
    kK: 91505,
    lK: 91506,
    mK: 91705,
    nK: 91621,
    oK: 91620,
    pK: 91436,
    qK: 91733,
    rK: 91555,
    sK: 91732,
    tK: 91379,
    uK: 91269,
    xK: 91828,
    yK: 91329,
    zK: 91330,
    AK: 91328,
    BK: 91327,
    CK: 91414,
    DK: 91332,
    EK: 91338,
    FK: 91336,
    GK: 91331,
    HK: 91341,
    IK: 91340,
    JK: 91474,
    KK: 91393,
    LK: 91538,
    MK: 91009,
    NK: 91005,
    OK: 91004,
    PK: 91087,
    QK: 91192,
    RK: 91193,
    SK: 91008,
    TK: 91319,
    UK: 91318,
    VK: 91309,
    WK: 91160,
    XK: 91159,
    YK: 91173,
    aL: 91158,
    bL: 91283,
    cL: 91721,
    dL: 91722,
    eL: 91767,
    fL: 91768,
    gL: 91769,
    hL: 91575,
    iL: 91291,
    jL: 91292,
    kL: 91366,
    mL: 91403,
    nL: 91872,
    oL: 91871,
    pL: 91429,
    tL: 91348,
    uL: 91335,
    vL: 91380,
    wL: 91381,
    xL: 91334,
    yL: 91382,
    zL: 91333,
    AL: 91359,
    BL: 91044,
    CL: 91149,
    JL: 91885,
    LL: 91886,
    ML: 91883,
    NL: 91882,
    OL: 91001,
    PL: 91255,
    SL: 91852,
    TL: 91842,
    UL: 91863,
    VL: 91836,
    WL: 91864,
    XL: 91859,
    YL: 91838,
    ZL: 91865,
    aM: 91866,
    bM: 91867,
    cM: 91868,
    dM: 91839,
    eM: 91873,
    fM: 91844,
    gM: 91832,
    hM: 91833,
    iM: 91843,
    jM: 91805,
    kM: 91869,
    lM: 91874,
    mM: 91849,
    nM: 91848,
    oM: 91079,
    pM: 91080,
    rM: 91077,
    sM: 91078,
    tM: 91074,
    uM: 91075,
    vM: 91073,
    wM: 91076,
    xM: 91081,
    yM: 91101,
    zM: 91086,
    AM: 91082,
    BM: 91134,
    KM: 91072,
    LM: 91176,
    NM: 91177,
    OM: 91103,
    PM: 91102,
    RM: 91104,
    TM: 91083,
    aN: 91822,
    cN: 91170,
    dN: 91167,
    eN: 91172,
    fN: 91153,
    gN: 91171,
    hN: 91557,
    iN: 91558,
    jN: 91559,
    kN: 91560,
    lN: 91372,
    mN: 91373,
    nN: 91374,
    oN: 91375,
    pN: 91376,
    qN: 91371,
    rN: 91377,
    sN: 91284,
    tN: 91110,
    uN: 91029,
    vN: 91113,
    wN: 91458,
    xN: 91665,
    zN: 91730,
    BN: 91490,
    CN: 91486,
    DN: 91658,
    EN: 91659,
    FN: 91517,
    GN: 91518,
    KN: 91689,
    LN: 91691,
    MN: 91690,
    NN: 91343,
    ON: 91409,
    PN: 91109,
    QN: 91174,
    kO: 91259,
    lO: 91257,
    mO: 91155,
    nO: 91459,
    oO: 91468,
    pO: 91460,
    qO: 91469,
    rO: 91154,
    sO: 91845,
    tO: 91364,
    uO: 91365,
    vO: 91806,
    wO: 91807,
    xO: 91808,
    yO: 91546,
    QO: 91198,
    RO: 91186,
    SO: 91185,
    TO: 91201,
    UO: 91007,
    VO: 91006,
    WO: 91021,
    XO: 91032,
    YO: 91098,
    ZO: 91018,
    aP: 91017,
    bP: 91099,
    dP: 91135,
    eP: 91540,
    fP: 91471,
    gP: 91541,
    hP: 91025,
    iP: 91030,
    jP: 91384,
    lP: 91238,
    pP: 91136,
    rP: 91064,
    wP: 91363,
    xP: 91604,
    zP: 91252,
    AP: 91253,
    BP: 91254,
    CP: 91289,
    EP: 91175,
    JP: 91394,
    LP: 91790,
    MP: 91313,
    NP: 91314,
    OP: 91819,
    QP: 91677,
    RP: 91678,
    TP: 91035,
    UP: 91053,
    VP: 91055,
    WP: 91034,
    XP: 91063,
    YP: 91048,
    ZP: 91036,
    aQ: 91059,
    bQ: 91054,
    cQ: 91049,
    dQ: 91778,
    eQ: 91635,
  };
  var xg = function (a) {
    this.B = y(a);
  };
  K(xg, Q);
  xg.prototype.getTypeName = function () {
    return cg(this, 1).split("/").pop();
  };
  var yg = (function (a) {
    return Ea(function (b) {
      return b instanceof a && !w(b);
    });
  })(xg);
  var zg = function (a) {
    var b = 2;
    b = b === void 0 ? 2 : b;
    this.key = a;
    this.defaultValue = false;
    this.phase = b;
    this.flagNameForDebugging = void 0;
  };
  zg.prototype.ctor = function (a) {
    return typeof a === "boolean" ? a : this.defaultValue;
  };
  var Cg = function () {
    var a = Ag(
        '[["feature named `pageObserver` was not found","feature named `hover` was not found"]]',
      ),
      b = Bg,
      c = 2;
    c = c === void 0 ? 2 : c;
    this.key = "45696263";
    this.defaultValue = a;
    this.j = b;
    this.phase = c;
    this.flagNameForDebugging = void 0;
  };
  Cg.prototype.ctor = function (a) {
    if (typeof a === "string" && a) return sc(this.j, a);
    if (!yg(a)) return this.defaultValue.clone();
    var b;
    try {
      let l;
      var c = this.j,
        d = (l = a.getTypeName()) != null ? l : "";
      if (cg(a, 1).split("/").pop() != d) var e = null;
      else {
        var f = typeof c === "function" ? c : c.constructor,
          g = a.B,
          h = g[v] | 0,
          k = cc(g, 2);
        Tb(a) && ((g = a.B), (h = g[v] | 0));
        a = g;
        if (k != null && !Array.isArray(k) && !Ca(k)) throw Error("B`" + mf(k));
        let m = jb(k, f, true, h);
        if (!(m instanceof f)) throw Error("C`" + m.constructor.displayName + "`" + f.displayName);
        (f = !!(2 & h)) || (m = nb(m));
        k !== m && (z(a, h, 2, m), f || Vb(a));
        e = m;
      }
    } catch (l) {
      e = null;
    }
    return (b = e) != null ? b : this.defaultValue.clone();
  };
  var Dg = function (a) {
    this.B = y(a);
  };
  K(Dg, Q);
  Dg.prototype.clearValue = function () {
    return Qf(this, Eg);
  };
  var Eg = [1, 2];
  var Fg = function (a) {
    this.B = y(a);
  };
  K(Fg, Q);
  Fg.prototype.clearValue = function () {
    return Qf(this, Gg);
  };
  var Gg = [2, 3, 4, 5, 6, 8];
  var Hg = function (a) {
    this.B = y(a);
  };
  K(Hg, Q);
  Hg.prototype.ub = function () {
    var a = I(this, 3, void 0, void 0, fc);
    return a == null ? ec() : a;
  };
  var Ig = function (a) {
    this.B = y(a);
  };
  K(Ig, Q);
  var Jg = tc(Ig);
  var Bg = function (a) {
    this.B = y(a);
  };
  K(Bg, Q);
  var Ag = tc(Bg);
  var Kg = function (a, b) {
      this.N = a | 0;
      this.I = b | 0;
    },
    Lg = function (a) {
      return a.I * 4294967296 + (a.N >>> 0);
    };
  Kg.prototype.isSafeInteger = function () {
    var a = this.I >> 21;
    return a == 0 || (a == -1 && !(this.N == 0 && this.I == -2097152));
  };
  Kg.prototype.toString = function (a) {
    a = a || 10;
    if (a < 2 || 36 < a) throw Error("D`" + a);
    if (this.isSafeInteger()) {
      var b = Lg(this);
      return a == 10 ? "" + b : b.toString(a);
    }
    b = 14 - (a >> 2);
    var c = Math.pow(a, b),
      d = R(c, c / 4294967296);
    c = this.div(d);
    var e = Math,
      f = e.abs;
    d = c.multiply(d);
    d = this.add(Mg(d));
    e = f.call(e, Lg(d));
    f = a == 10 ? "" + e : e.toString(a);
    f.length < b && (f = "0000000000000".slice(f.length - b) + f);
    e = Lg(c);
    return (a == 10 ? e : e.toString(a)) + f;
  };
  var Ng = function (a) {
    return a.N == 0 && a.I == 0;
  };
  Kg.prototype.Ga = function () {
    return this.N ^ this.I;
  };
  Kg.prototype.equals = function (a) {
    return a == null ? false : this.N == a.N && this.I == a.I;
  };
  Kg.prototype.compare = function (a) {
    return this.I == a.I
      ? this.N == a.N
        ? 0
        : this.N >>> 0 > a.N >>> 0
          ? 1
          : -1
      : this.I > a.I
        ? 1
        : -1;
  };
  var Mg = function (a) {
    var b = (~a.N + 1) | 0;
    return R(b, (~a.I + !b) | 0);
  };
  n = Kg.prototype;
  n.add = function (a) {
    var b = this.I >>> 16,
      c = this.I & 65535,
      d = this.N >>> 16,
      e = a.I >>> 16,
      f = a.I & 65535,
      g = a.N >>> 16;
    a = (this.N & 65535) + (a.N & 65535);
    g = (a >>> 16) + (d + g);
    d = g >>> 16;
    d += c + f;
    return R(
      ((g & 65535) << 16) | (a & 65535),
      ((((d >>> 16) + (b + e)) & 65535) << 16) | (d & 65535),
    );
  };
  n.multiply = function (a) {
    if (Ng(this)) return this;
    if (Ng(a)) return a;
    var b = this.I >>> 16,
      c = this.I & 65535,
      d = this.N >>> 16,
      e = this.N & 65535,
      f = a.I >>> 16,
      g = a.I & 65535,
      h = a.N >>> 16;
    a = a.N & 65535;
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
    q = (q + (m >>> 16) + (b * a + c * h + d * g + e * f)) & 65535;
    return R(((l & 65535) << 16) | (k & 65535), (q << 16) | (m & 65535));
  };
  n.div = function (a) {
    if (Ng(a)) throw Error("E");
    if (this.I < 0) {
      if (this.equals(Og)) {
        if (a.equals(Pg) || a.equals(Qg)) return Og;
        if (a.equals(Og)) return Pg;
        var b = this.I;
        b = R((this.N >>> 1) | (b << 31), b >> 1);
        b = b.div(a).shiftLeft(1);
        if (b.equals(Rg)) return a.I < 0 ? Pg : Qg;
        var c = a.multiply(b);
        c = this.add(Mg(c));
        return b.add(c.div(a));
      }
      return a.I < 0 ? Mg(this).div(Mg(a)) : Mg(Mg(this).div(a));
    }
    if (Ng(this)) return Rg;
    if (a.I < 0) return a.equals(Og) ? Rg : Mg(this.div(Mg(a)));
    b = Rg;
    for (c = this; c.compare(a) >= 0; ) {
      let e = Math.max(1, Math.floor(Lg(c) / Lg(a)));
      var d = Math.ceil(Math.log(e) / Math.LN2);
      d = d <= 48 ? 1 : Math.pow(2, d - 48);
      let f = Sg(e),
        g = f.multiply(a);
      for (; g.I < 0 || g.compare(c) > 0; ) {
        e -= d;
        f = Sg(e);
        g = f.multiply(a);
      }
      Ng(f) && (f = Pg);
      b = b.add(f);
      c = c.add(Mg(g));
    }
    return b;
  };
  n.not = function () {
    return R(~this.N, ~this.I);
  };
  n.and = function (a) {
    return R(this.N & a.N, this.I & a.I);
  };
  n.or = function (a) {
    return R(this.N | a.N, this.I | a.I);
  };
  n.xor = function (a) {
    return R(this.N ^ a.N, this.I ^ a.I);
  };
  n.shiftLeft = function (a) {
    a &= 63;
    if (a == 0) return this;
    var b = this.N;
    return a < 32 ? R(b << a, (this.I << a) | (b >>> (32 - a))) : R(0, b << (a - 32));
  };
  var Sg = function (a) {
      return a > 0
        ? a >= 0x7fffffffffffffff
          ? Tg
          : new Kg(a, a / 4294967296)
        : a < 0
          ? a <= -0x7fffffffffffffff
            ? Og
            : Mg(new Kg(-a, -a / 4294967296))
          : Rg;
    },
    R = function (a, b) {
      return new Kg(a, b);
    },
    Rg = R(0, 0),
    Pg = R(1, 0),
    Qg = R(-1, -1),
    Tg = R(4294967295, 2147483647),
    Og = R(0, 2147483648);
  var wc,
    xc = function () {
      this.l = false;
      var a = null;
      this.l = true;
      var b = vc("TSDtV", window);
      if ((b = typeof b !== "string" ? null : b)) {
        a = Jg("[" + b.substring(4));
        a = Vf(a, Hg, 1)[0];
      }
      if (a) {
        b = x(Vf(a, Fg, 2));
        var c = b.next(),
          d;
        try {
          for (; !c.done; c = b.next()) {
            var e = c.value,
              f = e.B;
            if (oc(f, f[v] | 0, xg, Sf(e, Gg, 6)) !== void 0) throw Error();
          }
        } finally {
          c && !c.done && (d = b.return) && d.call(b);
        }
      }
      var g;
      if (a) {
        d = {};
        e = x(Vf(a, Fg, 2));
        f = e.next();
        try {
          for (; !f.done; f = e.next()) {
            let l = f.value,
              m = bg(l, 1).toString();
            switch (Rf(l, Gg)) {
              case 3:
                d[m] = $f(l, Sf(l, Gg, 3));
                break;
              case 2:
                d[m] = uc(bg(l, Sf(l, Gg, 2)));
                break;
              case 4:
                let q = void 0;
                b = l;
                var h = Sf(l, Gg, 4);
                c = void 0;
                c = c === void 0 ? 0 : c;
                var k = (q = I(b, h, void 0, void 0, Qa)) != null ? q : c;
                d[m] = k;
                break;
              case 5:
                d[m] = cg(l, Sf(l, Gg, 5));
                break;
              case 6:
                d[m] = H(l, xg, Sf(l, Gg, 6), void 0);
                break;
              case 8:
                let t = Uf(l, Dg, Sf(l, Gg, 8));
                switch (Rf(t, Eg)) {
                  case 1:
                    d[m] = cg(t, Sf(t, Eg, 1));
                    break;
                  default:
                    throw Error("F`" + Rf(t, Eg));
                }
                break;
              default:
                throw Error("F`" + Rf(l, Gg));
            }
          }
        } finally {
          f && !f.done && (g = e.return) && g.call(e);
        }
        g = d;
      } else g = {};
      this.j = g;
      this.o = a ? a.ub() : null;
    },
    Md = function (a, b) {
      return b.phase === 1 || (a.l && !(b.key in a.j)) ? b.defaultValue : b.ctor(a.j[b.key]);
    };
  xc.prototype.ub = function () {
    return this.o;
  };
  var Ug = function (a) {
    this.B = y(a);
  };
  K(Ug, Q);
  var Od = new Cg();
  var Re = new zg("45723104");
  var Qd = new zg("45765314");
  var Vg = function (a) {
    this.B = y(a);
  };
  K(Vg, Q);
  var Wg = (function (a) {
    return function () {
      return a[hb] || (a[hb] = ib(a));
    };
  })(Vg);
  Object.create(null);
  var Yg = function (a) {
      if (a.prototype.hasOwnProperty("$$generatedClassName"))
        return a.prototype.$$generatedClassName;
      var b = a.name,
        c,
        d = (c = Xg.get(b)) != null ? c : 0;
      Xg.set(b, d + 1);
      b = "Class$obf_" + b + "_" + d;
      return (a.prototype.$$generatedClassName = b);
    },
    Xg = new Map();
  var S = function () {};
  S.prototype.equals = function (a) {
    return Zg(this, a);
  };
  S.prototype.Ga = function () {
    return (
      this.L ||
      (Object.defineProperties(this, { L: { value: ($g = ($g + 1) | 0), enumerable: false } }),
      this.L)
    );
  };
  S.prototype.toString = function () {
    var a = T(ah(bh(this.constructor))) + "@",
      b = this.Ga();
    return a + T((b >>> 0).toString(16));
  };
  var ch = function () {};
  K(ch, S);
  var eh = function (a, b) {
      a.M = b;
      dh(b, a);
    },
    fh = function (a) {
      a.M instanceof Error &&
        (Error.captureStackTrace ? Error.captureStackTrace(a.M) : (a.M.stack = Error().stack));
    };
  ch.prototype.toString = function () {
    var a = ah(bh(this.constructor)),
      b = this.j;
    return b == null ? a : T(a) + ": " + T(b);
  };
  var ih = function (a) {
    if (a != null) {
      var b = a.Cb;
      if (b) return b;
    }
    a instanceof TypeError ? (b = gh()) : ((b = new hh()), fh(b), eh(b, Error(b)));
    b.j = a == null ? "null" : a.toString();
    eh(b, a);
    return b;
  };
  var jh = function () {};
  K(jh, ch);
  var kh = function () {};
  K(kh, jh);
  var lh = function () {};
  K(lh, kh);
  var mh,
    nh = function () {
      nh = function () {};
      var a = oh();
      for (let b = 0; b < 256; b = (b + 1) | 0) a[b] = ph((b - 128) | 0);
      mh = a;
    };
  var qh = function () {};
  K(qh, kh);
  var rh = function () {};
  K(rh, kh);
  var sh = function (a) {
      var b = new rh();
      b.j = a;
      fh(b);
      eh(b, Error(b));
      return b;
    },
    th = function (a, b) {
      var c = new rh();
      c.l = b;
      c.j = a;
      fh(c);
      eh(c, Error(c));
      return c;
    };
  var hh = function () {};
  K(hh, kh);
  var uh = function () {};
  K(uh, hh);
  var gh = function () {
    var a = new uh();
    fh(a);
    eh(a, new TypeError(a));
    return a;
  };
  var vh = function () {},
    wh;
  K(vh, S);
  var xh = function (a, b, c) {
    if (Object.prototype.hasOwnProperty.call(a.prototype, b)) return a.prototype[b];
    c = c();
    return (a.prototype[b] = c);
  };
  var Zg = function (a, b) {
    return Object.is(a, b) || (a == null && b == null);
  };
  var $g = 0;
  var yh = function () {
    this.j = 0;
  };
  K(yh, vh);
  var zh = function (a) {
      a > -129 && a < 128 ? (nh(), (a = mh[(a + 128) | 0])) : (a = ph(a));
      return a;
    },
    ph = function (a) {
      var b = new yh();
      b.j = a;
      return b;
    };
  yh.prototype.equals = function (a) {
    return Ah(a) && a.j == this.j;
  };
  yh.prototype.Ga = function () {
    return this.j;
  };
  yh.prototype.toString = function () {
    return "" + this.j;
  };
  yh.prototype.Lb = function () {
    return this.j;
  };
  var Ah = function (a) {
    return a instanceof yh;
  };
  var Bh = function () {};
  K(Bh, S);
  Bh.prototype.toString = function () {
    return this.j;
  };
  var Ch = function () {};
  K(Ch, Bh);
  var Dh = function () {
    this.j = 0;
  };
  K(Dh, S);
  Dh.prototype.name = function () {
    return this.l != null ? this.l : "" + this.j;
  };
  Dh.prototype.equals = function (a) {
    return Zg(this, a);
  };
  Dh.prototype.Ga = function () {
    return S.prototype.Ga.call(this);
  };
  Dh.prototype.toString = function () {
    return this.name();
  };
  var Eh = function () {};
  K(Eh, qh);
  var oh = function () {
      var a = [256];
      return Fh(a, { lb: yh, xb: Ah, rb: a.length });
    },
    Fh = function (a, b) {
      var c = a[0];
      if (c == null) return null;
      var d = new globalThis.Array(c);
      b && (d.Tb = b);
      if (a.length > 1) {
        a = a.slice(1);
        b = b && { lb: b.lb, xb: b.xb, rb: b.rb - 1 };
        for (let e = 0; e < c; e++) d[e] = Fh(a, b);
      } else if (b && ((a = b.lb.Vb), a !== void 0)) for (b = 0; b < c; b++) d[b] = a;
      return d;
    };
  var T = function (a) {
    return a == null ? "null" : a.toString();
  };
  var Gh = function (a, b) {
    this.j = 0;
    this.l = a;
    this.j = b;
  };
  K(Gh, S);
  var bh = function (a) {
      return xh(a, "$$class/0", function () {
        return new Gh(a, 0);
      });
    },
    ah = function (a) {
      return a.j != 0 ? T(Hh("[", a.j)) + String("L" + T(Yg(a.l)) + ";") : Yg(a.l);
    },
    Ih = function (a, b) {
      b = (a.lastIndexOf(b) + 1) | 0;
      return a.substr(b);
    };
  Gh.prototype.toString = function () {
    return "class " + T(ah(this));
  };
  var Hh = function (a, b) {
    var c = "";
    for (let d = 0; d < b; d = (d + 1) | 0) c = T(c) + T(a);
    return c;
  };
  var dh = function (a, b) {
    if (a instanceof Object)
      try {
        {
          a.Cb = b;
          Object.defineProperties(a, {
            cause: {
              get: function () {
                return b.l && b.l.M;
              },
            },
          });
        }
      } catch (c) {}
  };
  var Jh = function (a, b) {
    if (!a) throw sh(T(b)).M;
  };
  var Kh = function () {
      Kh = function () {};
      Lh = Error.stackTraceLimit;
    },
    Lh = 0;
  var ge = function (a, b) {
    this.l = b;
    this.j = a;
    fh(this);
    eh(this, Error(this));
  };
  K(ge, kh);
  Ye.Object.defineProperties(ge.prototype, {
    error: {
      configurable: true,
      enumerable: true,
      get: function () {
        var a = Error(),
          b = this.M;
        a.fileName = b.fileName;
        a.lineNumber = b.lineNumber;
        a.columnNumber = b.columnNumber;
        a.message = b.message;
        a.name = b.name;
        a.stack = b.stack;
        a.toSource = b.toSource;
        a.cause = b.cause;
        for (let c in b) c.indexOf("__java$") != 0 && (a[c] = b[c]);
        return a;
      },
    },
  });
  ge.prototype.getMessage = function () {
    return this.j;
  };
  var Mh = {
    dI: "build-label",
    zg: "buildLabel",
    Hj: "clientLog",
    kp: "docId",
    pI: "mobile-app-version",
    bN: "severity",
    sL: "reportSeverity",
    sP: "severity-unprefixed",
    xG: "isArrayPrototypeIntact",
    yG: "isEditorElementAttached",
    xp: "documentCharacterSet",
    zG: "isModuleLoadFailure",
    rL: "reportName",
    eI: "locale",
    Wj: "createdOnServer",
    GI: "numUnsavedCommands",
    qk: "cspViolationContext",
    lL: "relatedToBrowserExtension",
    PP: "workerError",
    tp: "docosPostLimitExceeded",
    up: "docosPostLimitType",
    vp: "docosReactionLimitExceeded",
    wp: "docosReactionLimitType",
    BJ: "origin",
    IL: "saveTakingTooLongOnClient",
    mP: "truncatedCommentNotificationsCount",
    nP: "truncatedCommentNotificationsFromPayload",
    EI: "nonfatalReason",
    DP: "usesModuleSetsServing",
    AG: "isNestedDrawingsEnabled",
    lq: "embeddedDrawingState",
  };
  var Oh = function (a) {
    Mc(function () {
      a.D && !a.G && Nh && Nh(new ge("XDeferred swallowed an error that was never read.", a.D));
    });
  };
  var Ph = function () {};
  K(Ph, S);
  var Qh = function () {
      this.l = false;
    },
    Rh = [];
  K(Qh, S);
  Qh.prototype.dispose = function () {
    if (this.l) var a = null;
    else {
      this.l = true;
      a = this.H ? this.H : Rh;
      this.H = null;
    }
    if (a) {
      this.F();
      if (a.length != 0) for (let b = a, c = 0; c < b.length; c++) b[c].dispose();
      a = bh(this.constructor);
      Ih(Ih(T(Yg(a.l)) + T(Hh("[]", a.j)), "."), "$");
    }
  };
  Qh.prototype.aa = function () {
    return this.l;
  };
  Qh.prototype.F = function () {};
  Qh.prototype.toString = function () {
    return S.prototype.toString.call(this) || "";
  };
  var Th = function () {
      Sh();
      this.l = false;
      this.j = 0;
      this.l = this.G = this.v = this.o = false;
      this.j = 1;
      this.v = this.o = false;
      this.P = [];
      this.C = [];
    },
    Nh;
  K(Th, Qh);
  var Vh = function (a, b) {
      Jh(a.j != 4, "Cannot fire a disposed XDeferred");
      Jh(a.j == 1, "Cannot fire a XDeferred more than once");
      a.D = b;
      a.j = 3;
      Oh(a);
      Uh(a, false);
    },
    Yh = function (a, b, c) {
      Jh(a.j != 4, "Cannot add callback to disposed XDeferred");
      if (a.j != 1 && a.j != 2 && a.j != 3)
        throw sh("XDeferred addCallbacks called with invalid status " + T(Wh(a))).M;
      if (a.j == 1) {
        b && a.P.push(b);
        c && a.C.push(c);
      } else {
        if (a.j != 2 && a.j != 3)
          throw sh("XDeferred maybeFire called with invalid state " + T(Wh(a))).M;
        if (a.o) {
          if (a.v)
            throw th(
              "Cannot add callback to XDeferred that is firing its callback/errback queue [" +
                T(Wh(a)) +
                "] (recursive)",
              a.A,
            ).M;
          throw th(
            "Cannot add callback to XDeferred that is firing its callback/errback queue [" +
              T(Wh(a)) +
              "]",
            a.A,
          ).M;
        }
        a.o = true;
        a.v = true;
        try {
          a.j == 2 && b ? b(a.J.j) : a.j == 3 && c && ((a.G = true), c(a.D));
        } catch (d) {
          let e = ih(d);
          Xh(e);
          a.A || (a.A = e);
          throw e.M;
        } finally {
          a.v = false;
        }
        a.o = false;
      }
    },
    Wh = function (a) {
      if (a.A) {
        var b = a.A;
        var c = new Ch();
        for (c.j = ""; b; b = b.l)
          b.M &&
            (c.j.length > 0 && (c.j = T(c.j) + "\nCaused by: "), (c.j = T(c.j) + T(b.M.stack)));
        b = c.toString();
      } else b = "<none>";
      return "[" + a.j + ", " + a.v + ", " + a.o + ", " + T(b) + "]";
    };
  Th.prototype.transform = function (a) {
    var b = new Th();
    Yh(
      this,
      function (c) {
        try {
          var d = a(c);
        } catch (e) {
          c = ih(e);
          Vh(b, c);
          return;
        }
        c = d;
        Kh();
        100 > Error.stackTraceLimit && (Error.stackTraceLimit = 100);
        Jh(b.j != 4, "Cannot fire a disposed XDeferred");
        Jh(b.j == 1, "Cannot fire a XDeferred more than once");
        Error.stackTraceLimit = Lh;
        d = new Ph();
        d.j = c;
        b.J = d;
        b.j = 2;
        Uh(b, true);
      },
      function (c) {
        Vh(b, c);
      },
    );
    return b;
  };
  Th.prototype.F = function () {
    this.D = this.J = null;
    this.j = 4;
    this.P.length = 0;
    this.C.length = 0;
    Qh.prototype.F.call(this);
  };
  var Uh = function (a, b) {
      a.o = true;
      a.v = true;
      try {
        if (b) for (let c = a.P, d = 0; d < c.length; d++) (0, c[d])(a.J.j);
        else {
          a.C.length != 0 && (a.G = true);
          for (let c = a.C, d = 0; d < c.length; d++) (0, c[d])(a.D);
        }
      } catch (c) {
        let d = ih(c);
        Xh(d);
        a.A || (a.A = d);
        throw d.M;
      } finally {
        a.v = false;
      }
      a.o = false;
      a.P.length = 0;
      a.C.length = 0;
    },
    Zh = function (a) {
      Sh();
      Nh = a;
    },
    Sh = function () {
      Sh = function () {};
      $h();
      Nh = function () {};
    };
  var ai = function (a) {
    if (a == null) return ((a = new ch()), fh(a), eh(a, Error(a)), a);
    if (a instanceof ch) return a;
    if (a instanceof Error) return ih(a);
    a = new qh();
    a.j = "Unsupported type cannot be used to create a Throwable.";
    fh(a);
    eh(a, Error(a));
    throw a.M;
  };
  var bi = cf([""]),
    ci = bf(["\x00"], ["\\0"]),
    di = bf(["\n"], ["\\n"]),
    ei = bf(["\x00"], ["\\u0000"]);
  zc(function (a) {
    return a(bi);
  }) ||
    zc(function (a) {
      return a(ci);
    }) ||
    zc(function (a) {
      return a(di);
    }) ||
    zc(function (a) {
      return a(ei);
    });
  var fi = function (a) {
      var b = r.onerror;
      r.onerror = function (c, d, e, f, g) {
        b && b(c, d, e, f, g);
        a({ message: c, fileName: d, line: e, lineNumber: e, hQ: f, error: g });
        return true;
      };
    },
    ii = function (a) {
      var b = jf("window.location.href");
      a == null && (a = 'Unknown Error of type "null/undefined"');
      if (typeof a === "string")
        return {
          message: a,
          name: "Unknown error",
          lineNumber: "Not available",
          fileName: b,
          stack: "Not available",
        };
      var c = false;
      try {
        var d = a.lineNumber || a.line || "Not available";
      } catch (f) {
        {
          d = "Not available";
          c = true;
        }
      }
      try {
        var e = a.fileName || a.filename || a.sourceURL || r.$googDebugFname || b;
      } catch (f) {
        {
          e = "Not available";
          c = true;
        }
      }
      b = gi(a);
      return !c && a.lineNumber && a.fileName && a.stack && a.message && a.name
        ? {
            message: a.message,
            name: a.name,
            lineNumber: a.lineNumber,
            fileName: a.fileName,
            stack: b,
          }
        : ((c = a.message),
          c == null &&
            ((c =
              a.constructor && a.constructor instanceof Function
                ? 'Unknown Error of type "' +
                  (a.constructor.name ? a.constructor.name : hi(a.constructor)) +
                  '"'
                : "Unknown Error of unknown type"),
            typeof a.toString === "function" &&
              Object.prototype.toString !== a.toString &&
              (c += ": " + a.toString())),
          {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available",
          });
    },
    gi = function (a, b) {
      b || (b = {});
      b[ji(a)] = true;
      var c = a.stack || "",
        d = a.cause;
      d &&
        !b[ji(d)] &&
        ((c += "\nCaused by: "),
        (d.stack && d.stack.indexOf(d.toString()) == 0) ||
          (c += typeof d === "string" ? d : d.message + "\n"),
        (c += gi(d, b)));
      a = a.errors;
      if (Array.isArray(a)) {
        d = 1;
        let e;
        for (e = 0; e < a.length && !(d > 4); e++)
          b[ji(a[e])] ||
            ((c += "\nInner error " + d++ + ": "),
            (a[e].stack && a[e].stack.indexOf(a[e].toString()) == 0) ||
              (c += typeof a[e] === "string" ? a[e] : a[e].message + "\n"),
            (c += gi(a[e], b)));
        e < a.length && (c += "\n... " + (a.length - e) + " more inner errors");
      }
      return c;
    },
    ji = function (a) {
      var b = "";
      typeof a.toString === "function" && (b = "" + a);
      return b + a.stack;
    },
    ki = function (a, b) {
      a instanceof Error ||
        ((a = Error(a)), Error.captureStackTrace && Error.captureStackTrace(a, ki));
      a.stack || (a.stack = li(ki));
      if (b) {
        let c = 0;
        for (; a["message" + c]; ) ++c;
        a["message" + c] = String(b);
      }
      return a;
    },
    U = function (a, b) {
      a = ki(a);
      if (b) for (let c in b) qa(a, c, b[c]);
      return a;
    },
    li = function (a) {
      var b = Error();
      if (Error.captureStackTrace) {
        Error.captureStackTrace(b, a || li);
        b = String(b.stack);
      } else {
        try {
          throw b;
        } catch (c) {
          b = c;
        }
        b = (b = b.stack) ? String(b) : null;
      }
      b || (b = mi(a || arguments.callee.caller, []));
      return b;
    },
    mi = function (a, b) {
      var c = [];
      if (Array.prototype.indexOf.call(b, a, void 0) >= 0) c.push("[...circular reference...]");
      else if (a && b.length < 50) {
        c.push(hi(a) + "(");
        let e = a.arguments;
        for (let f = 0; e && f < e.length; f++) {
          f > 0 && c.push(", ");
          var d = void 0;
          d = e[f];
          switch (typeof d) {
            case "object":
              d = d ? "object" : "null";
              break;
            case "string":
              break;
            case "number":
              d = String(d);
              break;
            case "boolean":
              d = d ? "true" : "false";
              break;
            case "function":
              d = (d = hi(d)) ? d : "[fn]";
              break;
            default:
              d = typeof d;
          }
          d.length > 40 && (d = d.slice(0, 40) + "...");
          c.push(d);
        }
        b.push(a);
        c.push(")\n");
        try {
          c.push(mi(a.caller, b));
        } catch (f) {
          c.push("[exception trying to get caller]\n");
        }
      } else a ? c.push("[...long stack...]") : c.push("[end]");
      return c.join("");
    },
    hi = function (a) {
      if (ni[a]) return ni[a];
      a = String(a);
      if (!ni[a]) {
        let b = /function\s+([^\(]+)/m.exec(a);
        ni[a] = b ? b[1] : "[Anonymous]";
      }
      return ni[a];
    },
    ni = {};
  var oi = function () {
      return (
        Math.floor(Math.random() * 2147483648).toString(36) +
        Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)
      );
    },
    Ae = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
  var bd = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
  );
  var pi;
  pi = function (a) {
    if (!a) return a;
    try {
      a = new URL(typeof a === "object" ? a.href : a);
    } catch (b) {
      return typeof a === "object" ? a.href : a;
    }
    if (a.protocol !== "http:" && a.protocol !== "https:") return a.protocol.slice(0, -1);
    a.username = "";
    a.password = "";
    a.hash = "";
    return a.href;
  };
  A.prototype.P = false;
  A.prototype.aa = function () {
    return this.P;
  };
  A.prototype.dispose = function () {
    this.P || ((this.P = true), this.K());
  };
  A.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  var ve = function (a, b) {
    b = rf(Gc, b);
    a.P ? b() : (a.F || (a.F = []), a.F.push(b));
  };
  A.prototype.K = function () {
    if (this.F) for (; this.F.length; ) this.F.shift()();
  };
  var Jc =
    typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function"
      ? function (a) {
          return a && AsyncContext.Snapshot.wrap(a);
        }
      : function (a) {
          return a;
        };
  var qi = function (a, b) {
    this.o = a;
    this.v = b;
    this.l = 0;
    this.j = null;
  };
  qi.prototype.get = function () {
    if (this.l > 0) {
      this.l--;
      var a = this.j;
      this.j = a.next;
      a.next = null;
    } else a = this.o();
    return a;
  };
  var Oc = function (a, b) {
    a.v(b);
    a.l < 100 && (a.l++, (b.next = a.j), (a.j = b));
  };
  var ri = [],
    si = [],
    ti = false,
    ui = function (a) {
      ri[ri.length] = a;
      if (ti) for (let b = 0; b < si.length; b++) a(G(si[b].j, si[b]));
    };
  var Kc,
    Lc = function () {
      if (typeof MessageChannel !== "undefined") {
        let a = new MessageChannel(),
          b = {},
          c = b;
        a.port1.onmessage = function () {
          if (b.next !== void 0) {
            b = b.next;
            let d = b.Qa;
            b.Qa = null;
            d();
          }
        };
        return function (d) {
          c.next = { Qa: d };
          c = c.next;
          a.port2.postMessage(0);
        };
      }
      return function (a) {
        r.setTimeout(a, 0);
      };
    },
    Ic = function (a) {
      return a;
    };
  ui(function (a) {
    Ic = a;
  });
  var vi = function () {
    this.l = this.j = null;
  };
  vi.prototype.add = function (a, b) {
    var c = Pc.get();
    c.set(a, b);
    this.l ? (this.l.next = c) : (this.j = c);
    this.l = c;
  };
  vi.prototype.remove = function () {
    var a = null;
    this.j && ((a = this.j), (this.j = this.j.next), this.j || (this.l = null), (a.next = null));
    return a;
  };
  var Pc = new qi(
      function () {
        return new wi();
      },
      function (a) {
        return a.reset();
      },
    ),
    wi = function () {
      this.next = this.scope = this.j = null;
    };
  wi.prototype.set = function (a, b) {
    this.j = a;
    this.scope = b;
    this.next = null;
  };
  wi.prototype.reset = function () {
    this.next = this.scope = this.j = null;
  };
  var xi,
    Qc = false,
    Nc = new vi(),
    zi = function (a, b) {
      xi || yi();
      Qc || (xi(), (Qc = true));
      Nc.add(a, b);
    },
    yi = function () {
      var a = Promise.resolve(void 0);
      xi = function () {
        a.then(Rc);
      };
    };
  var Ai = function () {},
    Bi = function (a) {
      var b = false,
        c;
      return function () {
        b || ((c = a()), (b = true));
        return c;
      };
    };
  var Ci = function (a) {
    if (!a) return false;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return false;
    }
  };
  var V = function (a) {
      this.j = 0;
      this.C = void 0;
      this.v = this.l = this.o = null;
      this.A = this.F = false;
      if (a != Ai)
        try {
          let b = this;
          a.call(
            void 0,
            function (c) {
              Di(b, 2, c);
            },
            function (c) {
              Di(b, 3, c);
            },
          );
        } catch (b) {
          Di(this, 3, b);
        }
    },
    Ei = function () {
      this.next = this.o = this.l = this.A = this.j = null;
      this.v = false;
    };
  Ei.prototype.reset = function () {
    this.o = this.l = this.A = this.j = null;
    this.v = false;
  };
  var Fi = new qi(
      function () {
        return new Ei();
      },
      function (a) {
        a.reset();
      },
    ),
    Gi = function (a, b, c) {
      var d = Fi.get();
      d.A = a;
      d.l = b;
      d.o = c;
      return d;
    },
    Hi = function (a) {
      if (a instanceof V) return a;
      var b = new V(Ai);
      Di(b, 2, a);
      return b;
    },
    Ji = function (a, b, c) {
      Ii(a, b, c, null) || zi(rf(b, a));
    },
    Ki = function (a) {
      return new V(function (b) {
        var c = a.length,
          d = [];
        if (c) {
          var e = function (g, h, k) {
            c--;
            d[g] = h ? { Gb: true, value: k } : { Gb: false, reason: k };
            c == 0 && b(d);
          };
          for (let g = 0; g < a.length; g++) {
            var f = a[g];
            Ji(f, rf(e, g, true), rf(e, g, false));
          }
        } else b(d);
      });
    };
  V.prototype.then = function (a, b, c) {
    return Li(
      this,
      Jc(typeof a === "function" ? a : null),
      Jc(typeof b === "function" ? b : null),
      c,
    );
  };
  V.prototype.$goog_Thenable = true;
  var Ni = function (a, b) {
    b = Jc(b);
    b = Gi(b, b);
    b.v = true;
    Mi(a, b);
  };
  V.prototype.D = function (a, b) {
    return Li(this, null, Jc(a), b);
  };
  V.prototype.catch = V.prototype.D;
  V.prototype.cancel = function (a) {
    if (this.j == 0) {
      let b = new Oi(a);
      zi(function () {
        Pi(this, b);
      }, this);
    }
  };
  var Pi = function (a, b) {
      if (a.j == 0)
        if (a.o) {
          var c = a.o;
          if (c.l) {
            var d = 0,
              e = null,
              f = null;
            for (let g = c.l; g && (g.v || (d++, g.j == a && (e = g), !(e && d > 1))); g = g.next)
              e || (f = g);
            e &&
              (c.j == 0 && d == 1
                ? Pi(c, b)
                : (f ? ((d = f), d.next == c.v && (c.v = d), (d.next = d.next.next)) : Qi(c),
                  Ri(c, e, 3, b)));
          }
          a.o = null;
        } else Di(a, 3, b);
    },
    Mi = function (a, b) {
      a.l || (a.j != 2 && a.j != 3) || Si(a);
      a.v ? (a.v.next = b) : (a.l = b);
      a.v = b;
    },
    Li = function (a, b, c, d) {
      var e = Gi(null, null, null);
      e.j = new V(function (f, g) {
        e.A = b
          ? function (h) {
              try {
                let k = b.call(d, h);
                f(k);
              } catch (k) {
                g(k);
              }
            }
          : f;
        e.l = c
          ? function (h) {
              try {
                let k = c.call(d, h);
                k === void 0 && h instanceof Oi ? g(h) : f(k);
              } catch (k) {
                g(k);
              }
            }
          : g;
      });
      e.j.o = a;
      Mi(a, e);
      return e.j;
    };
  V.prototype.G = function (a) {
    this.j = 0;
    Di(this, 2, a);
  };
  V.prototype.J = function (a) {
    this.j = 0;
    Di(this, 3, a);
  };
  var Di = function (a, b, c) {
      a.j == 0 &&
        (a === c && ((b = 3), (c = new TypeError("H"))),
        (a.j = 1),
        Ii(c, a.G, a.J, a) ||
          ((a.C = c), (a.j = b), (a.o = null), Si(a), b != 3 || c instanceof Oi || Ti(a, c)));
    },
    Ii = function (a, b, c, d) {
      if (a instanceof V) return (Mi(a, Gi(b || Ai, c || null, d)), true);
      if (Ci(a)) return (a.then(b, c, d), true);
      if (nf(a))
        try {
          let e = a.then;
          if (typeof e === "function") return (Ui(a, e, b, c, d), true);
        } catch (e) {
          return (c.call(d, e), true);
        }
      return false;
    },
    Ui = function (a, b, c, d, e) {
      var f = false,
        g = function (k) {
          f || ((f = true), c.call(e, k));
        },
        h = function (k) {
          f || ((f = true), d.call(e, k));
        };
      try {
        b.call(a, g, h);
      } catch (k) {
        h(k);
      }
    },
    Si = function (a) {
      a.F || ((a.F = true), zi(a.P, a));
    },
    Qi = function (a) {
      var b = null;
      a.l && ((b = a.l), (a.l = b.next), (b.next = null));
      a.l || (a.v = null);
      return b;
    };
  V.prototype.P = function () {
    for (var a; (a = Qi(this)); ) Ri(this, a, this.j, this.C);
    this.F = false;
  };
  var Ri = function (a, b, c, d) {
      if (c == 3 && b.l && !b.v) for (; a && a.A; a = a.o) a.A = false;
      if (b.j) {
        b.j.o = null;
        Vi(b, c, d);
      } else
        try {
          b.v ? b.A.call(b.o) : Vi(b, c, d);
        } catch (e) {
          Wi.call(null, e);
        }
      Oc(Fi, b);
    },
    Vi = function (a, b, c) {
      b == 2 ? a.A.call(a.o, c) : a.l && a.l.call(a.o, c);
    },
    Ti = function (a, b) {
      a.A = true;
      zi(function () {
        a.A && Wi.call(null, b);
      });
    },
    Wi = aa,
    Oi = function (a) {
      p.call(this, a);
      this.j = false;
    };
  L(Oi, p);
  Oi.prototype.name = "cancel";
  D.prototype.cancel = function (a) {
    if (this.l) this.v instanceof D && this.v.cancel();
    else {
      if (this.o) {
        let b = this.o;
        delete this.o;
        a ? b.cancel(a) : (b.G--, b.G <= 0 && b.cancel());
      }
      this.V ? this.V.call(this.aa, this) : (this.H = true);
      this.l || this.A(new Xi(this));
    }
  };
  D.prototype.O = function (a, b) {
    this.P = false;
    Yi(this, a, b);
  };
  var Yi = function (a, b, c) {
      a.l = true;
      a.v = c;
      a.F = !b;
      Zi(a);
    },
    aj = function (a) {
      if (a.l) {
        if (!a.H) throw new $i(a);
        a.H = false;
      }
    };
  D.prototype.j = function (a) {
    aj(this);
    Yi(this, true, a);
  };
  D.prototype.A = function (a) {
    aj(this);
    Yi(this, false, a);
  };
  var bj = function (a) {
      throw a;
    },
    W = function (a, b, c) {
      return ke(a, b, null, c);
    },
    fd = function (a, b) {
      return ke(a, null, b);
    },
    cj = function (a, b, c) {
      ke(
        a,
        b,
        function (d) {
          var e = b.call(this, d);
          if (e === void 0) throw d;
          return e;
        },
        c,
      );
    },
    ke = function (a, b, c, d) {
      var e = a.l;
      e || (b === c ? (b = c = Jc(b)) : ((b = Jc(b)), (c = Jc(c))));
      a.C.push([b, c, d]);
      e && Zi(a);
      return a;
    };
  D.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new V(function (g, h) {
        e = g;
        d = h;
      });
    ke(
      this,
      e,
      function (g) {
        g instanceof Xi ? f.cancel() : d(g);
        return dj;
      },
      this,
    );
    return f.then(a, b, c);
  };
  D.prototype.$goog_Thenable = true;
  var ej = function (a) {
      return yf(a.C, function (b) {
        return typeof b[1] === "function";
      });
    },
    dj = {},
    Zi = function (a) {
      if (a.D && a.l && ej(a)) {
        var b = a.D,
          c = fj[b];
        c && (r.clearTimeout(c.j), delete fj[b]);
        a.D = 0;
      }
      a.o && (a.o.G--, delete a.o);
      b = a.v;
      for (var d = (c = false); a.C.length && !a.P; ) {
        var e = a.C.shift(),
          f = e[0];
        let h = e[1];
        e = e[2];
        if ((f = a.F ? h : f))
          try {
            var g = f.call(e || a.aa, b);
            g === dj && (g = void 0);
            g !== void 0 && ((a.F = a.F && (g == b || g instanceof Error)), (a.v = b = g));
            if (Ci(b) || (typeof r.Promise === "function" && b instanceof r.Promise)) {
              d = true;
              a.P = true;
            }
          } catch (k) {
            {
              b = k;
              a.F = true;
              ej(a) || (c = true);
            }
          }
      }
      a.v = b;
      d &&
        ((g = G(a.O, a, true)),
        (d = G(a.O, a, false)),
        b instanceof D ? (ke(b, g, d), (b.S = true)) : b.then(g, d));
      c && ((b = new gj(b)), (fj[b.j] = b), (a.D = b.j));
    },
    E = function (a) {
      var b = new D();
      b.j(a);
      return b;
    },
    gd = function (a) {
      var b = new D();
      a.then(
        function (c) {
          b.j(c);
        },
        function (c) {
          b.A(c);
        },
      );
      return b;
    },
    $i = function () {
      p.call(this);
    };
  L($i, p);
  $i.prototype.message = "Deferred has already fired";
  $i.prototype.name = "AlreadyCalledError";
  var Xi = function () {
    p.call(this);
  };
  L(Xi, p);
  Xi.prototype.message = "Deferred was canceled";
  Xi.prototype.name = "CanceledError";
  var gj = function (a) {
    this.j = r.setTimeout(G(this.throwError, this), 0);
    this.l = a;
  };
  gj.prototype.throwError = function () {
    delete fj[this.j];
    bj(this.l);
  };
  var fj = {};
  var hj = function () {
    A.call(this);
    this.l = 0;
    this.j = null;
  };
  K(hj, A);
  hj.prototype.init = function () {
    this.j = [];
  };
  var ij = new hj(),
    jj = function (a) {
      this.e = a;
    };
  var kj = function () {
    this.j = 0;
  };
  K(kj, Dh);
  var lj = new kj();
  lj.l = "VERBOSE";
  lj.j = 0;
  var mj = function () {};
  K(mj, S);
  var nj = function (a) {
      var b = new mj();
      b.j = a;
      return b;
    },
    rj = function () {
      return nj(
        new oj(function () {
          if (!pj && !pj) {
            let a = new qj();
            a.j = lj;
            pj = a;
          }
          return pj;
        }),
      );
    };
  var pj;
  var qj = function () {};
  K(qj, S);
  var oj = function (a) {
    this.l = a;
  };
  K(oj, S);
  oj.prototype.j = function () {
    var a;
    return ((a = this.l), a());
  };
  var sj = function () {};
  K(sj, S);
  var $h = function () {
      var a = new sj(),
        b = rj();
      a.l = bh(Th);
      a.j = b;
    },
    Xh = function (a) {
      if (a) {
        var b = a.j;
        a = a.M;
        if (a instanceof Object && !Object.isFrozen(a)) {
          let c = pi(a.fileName || a.filename || a.sourceURL || r.$googDebugFname || location.href);
          try {
            a.fileName = c;
          } catch (d) {}
        }
        if (ij.l >= 3) throw Error("J`" + b);
        ij.l++;
        try {
          ij.aa() ||
            a instanceof Xi ||
            a instanceof Oi ||
            (a == null ? void 0 : a.name) === "CanceledError" ||
            (ij.j && ij.j.length < 10 && ij.j.push(new jj(a)));
        } finally {
          ij.l--;
        }
      }
    };
  var tj,
    vj = function () {
      if (!tj) {
        let b = new uj(null);
        tj = function () {
          return b;
        };
      }
      var a;
      return ((a = tj), a());
    };
  var wj = function () {};
  K(wj, S);
  wj.prototype.get = function () {
    if (this.l == null) {
      let a = r._docs_flag_initialData;
      this.l = a != null ? a : {};
    }
    return this.l;
  };
  wj.prototype.j = function () {
    return this.get();
  };
  var xj = function (a) {
    return typeof a == "string" ? a == "true" || a == "1" : !!a;
  };
  var uj = function (a) {
    this.j = new wj();
    this.l = null;
    if (a != null)
      for (let e in a) {
        var b = e,
          c = a[e];
        if (this.l) throw sh("Cannot use setClientFlag when comparison is enabled.").M;
        var d = this.j.j();
        d[b] = Ah(c) ? c.j : c != null ? c : null;
      }
  };
  K(uj, S);
  uj.prototype.clear = function () {
    this.j = new wj();
    this.l = null;
  };
  uj.prototype.get = function (a) {
    yj(this, a);
    return this.j.j()[a];
  };
  var zj = function (a, b) {
      a = a.j.j();
      return b in a;
    },
    Aj = function (a, b) {
      yj(a, b);
      if (!zj(a, b) || a.get(b) == null) return NaN;
      try {
        var c = T(a.get(b));
        wh ||
          (wh = RegExp(
            "^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$",
          ));
        if (!wh.test(c)) {
          let d = new Eh();
          a = d;
          a.j = 'For input string: "' + T(c) + '"';
          fh(a);
          eh(d, Error(d));
          throw d.M;
        }
        return parseFloat(c);
      } catch (d) {
        let e = ih(d);
        if (e instanceof Eh) return NaN;
        throw e.M;
      }
    },
    Bj = function (a, b) {
      yj(a, b);
      if (!zj(a, b)) return "";
      a = a.get(b);
      if (a == null) return "";
      var c;
      if ((b = "number" === typeof a && ((c = a), true))) b = Sg(c).equals(Sg(c));
      var d;
      b ? (d = "" + Sg(c)) : (d = T(a));
      return d;
    },
    yj = function (a, b) {
      if (a.l) {
        let e;
        try {
          e = a.j.j()[b];
        } catch (f) {
          let g = ih(f);
          if (g instanceof kh) e = "injection-failed";
          else throw g.M;
        }
        try {
          var c = a.l;
          if (c == null) throw gh().M;
          var d = c.j()[b];
        } catch (f) {
          let g = ih(f);
          if (g instanceof kh) d = "injection-failed";
          else throw g.M;
        }
        a = e;
        !(b = Zg(a, d)) && (b = a != null) && (b = a.equals ? a.equals(d) : Object.is(a, d));
        if (!b) throw sh("Logging is not supported.").M;
      }
    };
  uj.prototype.Ub = true;
  var Cj = function (a) {
    ge.call(this, a, null);
    eh(this, Error(this));
  };
  K(Cj, ge);
  var Ej = function (a, b, c, d) {
    this.l = false;
    this.j = 0;
    this.l = false;
    this.v = a;
    this.j = b;
    this.o = new Dj(Math.imul(c, 1e3), d);
  };
  K(Ej, Qh);
  var Ij = function (a) {
    if (!(((a.o.get(null) + 1) | 0) / (a.o.o / 1e3) <= a.j))
      throw new Cj("Query would cause " + T(a.v) + " to exceed " + a.j + " qps.").M;
    a = a.o;
    var b = Lg(Sg(Date.now()));
    Fj(a, b);
    var c = Gj(a.l);
    if (!c || b >= c.l) {
      let d = new Hj();
      c = d;
      c.l = a.j * Math.floor(b / a.j + 1);
      c.j = 0;
      c.v = 2147483647;
      c.o = -2147483648;
      c = d;
      a.l.add(c);
    }
    c.j = (c.j + 1) | 0;
    c.v = Math.min(1, c.v);
    c.o = Math.max(1, c.o);
  };
  var Hj = function () {
    this.o = this.v = this.j = 0;
  };
  K(Hj, S);
  var Dj = function (a) {
    this.j = this.o = 0;
    this.o = a;
    this.j = (a / 50) | 0;
    this.l = new Jj(zh(50));
  };
  K(Dj, S);
  Dj.prototype.get = function (a) {
    return Kj(this, a, function (b, c) {
      return zh((b.j + c.j) | 0);
    });
  };
  var Kj = function (a, b, c) {
      b = b != null ? b : Lg(Sg(Date.now()));
      Fj(a, b);
      var d = 0;
      b = a.j * Math.floor(b / a.j + 1) - a.o;
      for (let e = (a.l.j.length - 1) | 0; e >= 0; e = (e - 1) | 0) {
        let f = a.l.get(e);
        if (f.l <= b) break;
        d = c(zh(d), f).j;
      }
      return d;
    },
    Fj = function (a, b) {
      var c;
      (c = Gj(a.l)) && b < c.l - a.j && a.l.clear();
    };
  var Jj = function (a) {
    this.l = this.o = this.l = 0;
    var b;
    a != null
      ? (b =
          "number" === typeof a
            ? Math.max(Math.min(a, 2147483647), -2147483648) | 0
            : a instanceof Kg
              ? a.N
              : a.Lb())
      : (b = 100);
    this.o = b;
    this.j = [];
  };
  K(Jj, S);
  n = Jj.prototype;
  n.add = function (a) {
    var b = this.j[this.l];
    this.j[this.l] = a;
    this.l = ((this.l + 1) | 0) % this.o | 0;
    return b;
  };
  n.get = function (a) {
    a = Lj(this, a);
    return this.j[a];
  };
  n.set = function (a, b) {
    a = Lj(this, a);
    this.j[a] = b;
  };
  n.clear = function () {
    this.l = this.j.length = 0;
  };
  n.ma = function () {
    var a = this.j.length,
      b = (this.j.length - this.j.length) | 0,
      c = [];
    for (let e = b; e < a; e = (e + 1) | 0) {
      b = c;
      var d = this.get(e);
      b.push(d);
    }
    return c;
  };
  n.Va = function () {
    var a = [],
      b = this.j.length;
    for (let c = 0; c < b; c = (c + 1) | 0) a[c] = c;
    return a;
  };
  var Gj = function (a) {
      return a.j.length == 0 ? null : a.get((a.j.length - 1) | 0);
    },
    Lj = function (a, b) {
      if (b >= a.j.length) throw ((a = new lh()), fh(a), eh(a, Error(a)), a.M);
      return a.j.length < a.o ? b : ((a.l + b) | 0) % a.o | 0;
    };
  var Mj = function () {
      this.j = 0;
    },
    Nj;
  K(Mj, S);
  var X = function (a, b) {
    var c = new Mj();
    c.l = a;
    c.j = b;
    return c;
  };
  Mj.prototype.toString = function () {
    return this.l;
  };
  var Oj = function () {
    Oj = function () {};
    X("IDLE", 1);
    X("BUSY", 1);
    X("RECOVERING", 2);
    Nj = X("OFFLINE", 3);
    X("SERVER_DOWN", 3);
    X("FORBIDDEN", 4);
    X("AUTH_REQUIRED", 4);
    X("DELTA_STALE_CLIENT", 4);
    X("SESSION_LIMIT_EXCEEDED", 5);
    X("LOCKED", 5);
    X("INCOMPATIBLE_SERVER", 5);
    X("CLIENT_ERROR", 5);
    X("CLIENT_FATAL_ERROR", 5);
    X("CLIENT_FATAL_ERROR_PENDING_CHANGES", 5);
    X("BATCH_CLIENT_ERROR", 3);
    X("SAVE_ERROR", 5);
    X("DOCUMENT_TOO_LARGE", 5);
    X("CSE_BLOCKED_REQUEST", 5);
    X("BATCH_SAVE_ERROR", 3);
    X("DOCS_EVERYWHERE_IMPORT_ERROR", 5);
    X("POST_LIMIT_EXCEEDED_ERROR", 5);
    X("DOCS_QUOTA_EXCEEDED_ERROR", 5);
  };
  var Pj = function () {};
  K(Pj, S);
  var Qj = function () {
    this.l = this.l = false;
    this.j = [];
  };
  K(Qj, Qh);
  var Rj = function (a, b, c) {
    var d;
    a: {
      for (d = 0; d < a.j.length; d = (d + 1) | 0) {
        var e = a.j[d];
        if (Zg(e.l, c) && Zg(e.j, b)) {
          d = true;
          break a;
        }
      }
      d = false;
    }
    d || ((a = a.j), (c = b.j(c)), (d = e = new Pj()), (d.j = b), (d.l = c), a.push(e));
  };
  Qj.prototype.F = function () {
    for (var a = this.j.pop(); a; ) {
      a.j.l(a.l);
      a = this.j.pop();
    }
    Qh.prototype.F.call(this);
  };
  var Sj = function (a) {
    this.B = y(a, 0, Sj.Ha);
  };
  K(Sj, Q);
  Sj.prototype.getData = function () {
    return gb(I(this, 4, oe, te));
  };
  Sj.Ha = "er";
  var Vc =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  var Tj = function (a) {
      if (a.ma && typeof a.ma == "function") return a.ma();
      if (
        (typeof Map !== "undefined" && a instanceof Map) ||
        (typeof Set !== "undefined" && a instanceof Set)
      )
        return Array.from(a.values());
      if (typeof a === "string") return a.split("");
      if (na(a)) {
        let b = [],
          c = a.length;
        for (let d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return Tc(a);
    },
    Uj = function (a) {
      if (a.Va && typeof a.Va == "function") return a.Va();
      if (!a.ma || typeof a.ma != "function") {
        if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
        if (!(typeof Set !== "undefined" && a instanceof Set)) {
          if (na(a) || typeof a === "string") {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          b = [];
          c = 0;
          for (let d in a) b[c++] = d;
          return b;
        }
      }
    },
    Vj = function (a, b, c) {
      if (a.forEach && typeof a.forEach == "function") a.forEach(b, c);
      else if (na(a) || typeof a === "string") Array.prototype.forEach.call(a, b, c);
      else {
        let d = Uj(a),
          e = Tj(a),
          f = e.length;
        for (let g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
      }
    };
  Xc.prototype.toString = function () {
    var a = [],
      b = this.v;
    b && a.push(Wj(b, Xj, true), ":");
    var c = this.l;
    if (c || b == "file") {
      a.push("//");
      (b = this.C) && a.push(Wj(b, Xj, true), "@");
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
      c = this.D;
      c != null && a.push(":", String(c));
    }
    if ((c = this.j)) {
      this.l && c.charAt(0) != "/" && a.push("/");
      a.push(Wj(c, c.charAt(0) == "/" ? Yj : Zj, true));
    }
    (c = this.o.toString()) && a.push("?", c);
    (c = this.F) && a.push("#", Wj(c, ak));
    return a.join("");
  };
  Xc.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.v;
    c ? Yc(b, a.v) : (c = !!a.C);
    c ? (b.C = a.C) : (c = !!a.l);
    c ? (b.l = a.l) : (c = a.D != null);
    var d = a.j;
    if (c) Zc(b, a.D);
    else if ((c = !!a.j)) {
      if (d.charAt(0) != "/")
        if (this.l && !this.j) d = "/" + d;
        else {
          var e = b.j.lastIndexOf("/");
          e != -1 && (d = b.j.slice(0, e + 1) + d);
        }
      e = d;
      if (e == ".." || e == ".") d = "";
      else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
        d = e.lastIndexOf("/", 0) == 0;
        e = e.split("/");
        let f = [];
        for (let g = 0; g < e.length; ) {
          let h = e[g++];
          h == "."
            ? d && g == e.length && f.push("")
            : h == ".."
              ? ((f.length > 1 || (f.length == 1 && f[0] != "")) && f.pop(),
                d && g == e.length && f.push(""))
              : (f.push(h), (d = true));
        }
        d = f.join("/");
      } else d = e;
    }
    c ? $c(b, d) : (c = a.o.toString() !== "");
    c ? ad(b, a.o.clone()) : (c = !!a.F);
    c && (b.F = a.F);
    return b;
  };
  Xc.prototype.clone = function () {
    return new Xc(this);
  };
  var Yc = function (a, b, c) {
      a.v = c ? cd(b, true) : b;
      a.v && (a.v = a.v.replace(/:$/, ""));
    },
    Zc = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || b < 0) throw Error("K`" + b);
        a.D = b;
      } else a.D = null;
    },
    $c = function (a, b, c) {
      a.j = c ? cd(b, true) : b;
      return a;
    },
    ad = function (a, b, c) {
      b instanceof dd ? ((a.o = b), bk(a.o, a.A)) : (c || (b = Wj(b, ck)), (a.o = new dd(b, a.A)));
    },
    cd = function (a, b) {
      return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
    },
    Wj = function (a, b, c) {
      return typeof a === "string"
        ? ((a = encodeURI(a).replace(b, dk)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          a)
        : null;
    },
    dk = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    Xj = /[#\/\?@]/g,
    Zj = /[#\?:]/g,
    Yj = /[#\?]/g,
    ck = /[#\?@]/g,
    ak = /#/g,
    dd = function (a, b) {
      this.l = this.j = null;
      this.o = a || null;
      this.v = !!b;
    },
    ek = function (a) {
      a.j ||
        ((a.j = new Map()),
        (a.l = 0),
        a.o &&
          Ac(a.o, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    };
  dd.prototype.add = function (a, b) {
    ek(this);
    this.o = null;
    a = fk(this, a);
    var c = this.j.get(a);
    c || this.j.set(a, (c = []));
    c.push(b);
    this.l += 1;
    return this;
  };
  dd.prototype.remove = function (a) {
    ek(this);
    a = fk(this, a);
    return this.j.has(a)
      ? ((this.o = null), (this.l -= this.j.get(a).length), this.j.delete(a))
      : false;
  };
  dd.prototype.clear = function () {
    this.j = this.o = null;
    this.l = 0;
  };
  var gk = function (a, b) {
    ek(a);
    b = fk(a, b);
    return a.j.has(b);
  };
  n = dd.prototype;
  n.forEach = function (a, b) {
    ek(this);
    this.j.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  n.Va = function () {
    ek(this);
    var a = Array.from(this.j.values()),
      b = Array.from(this.j.keys()),
      c = [];
    for (let d = 0; d < b.length; d++) {
      let e = a[d];
      for (let f = 0; f < e.length; f++) c.push(b[d]);
    }
    return c;
  };
  n.ma = function (a) {
    ek(this);
    var b = [];
    if (typeof a === "string") gk(this, a) && (b = b.concat(this.j.get(fk(this, a))));
    else {
      a = Array.from(this.j.values());
      for (let c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  n.set = function (a, b) {
    ek(this);
    this.o = null;
    a = fk(this, a);
    gk(this, a) && (this.l -= this.j.get(a).length);
    this.j.set(a, [b]);
    this.l += 1;
    return this;
  };
  n.get = function (a, b) {
    if (!a) return b;
    a = this.ma(a);
    return a.length > 0 ? String(a[0]) : b;
  };
  n.toString = function () {
    if (this.o) return this.o;
    if (!this.j) return "";
    var a = [],
      b = Array.from(this.j.keys());
    for (let d = 0; d < b.length; d++) {
      var c = b[d];
      let e = encodeURIComponent(String(c));
      c = this.ma(c);
      for (let f = 0; f < c.length; f++) {
        let g = e;
        c[f] !== "" && (g += "=" + encodeURIComponent(String(c[f])));
        a.push(g);
      }
    }
    return (this.o = a.join("&"));
  };
  n.clone = function () {
    var a = new dd();
    a.o = this.o;
    this.j && ((a.j = new Map(this.j)), (a.l = this.l));
    return a;
  };
  var fk = function (a, b) {
      b = String(b);
      a.v && (b = b.toLowerCase());
      return b;
    },
    bk = function (a, b) {
      b &&
        !a.v &&
        (ek(a),
        (a.o = null),
        a.j.forEach(function (c, d) {
          var e = d.toLowerCase();
          if (d != e && (this.remove(d), this.remove(e), c.length > 0)) {
            this.o = null;
            d = this.j;
            var f = d.set;
            e = fk(this, e);
            var g = c.length;
            if (g > 0) {
              let h = Array(g);
              for (let k = 0; k < g; k++) h[k] = c[k];
              g = h;
            } else g = [];
            f.call(d, e, g);
            this.l += c.length;
          }
        }, a));
      a.v = b;
    };
  dd.prototype.extend = function (a) {
    for (let b = 0; b < arguments.length; b++)
      Vj(
        arguments[b],
        function (c, d) {
          this.add(d, c);
        },
        this,
      );
  };
  var hk = function () {
    this.j = function () {
      ed();
    };
  };
  hk.prototype.notify = function () {
    window.confirm(
      "This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.",
    ) && this.j();
  };
  var id = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.l = false;
  };
  id.prototype.stopPropagation = function () {
    this.l = true;
  };
  id.prototype.preventDefault = function () {
    this.defaultPrevented = true;
  };
  L(kd, id);
  kd.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    b = a.relatedTarget;
    b || (c == "mouseover" ? (b = a.fromElement) : c == "mouseout" && (b = a.toElement));
    this.relatedTarget = b;
    d
      ? ((this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX),
        (this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.offsetX = ye || a.offsetX !== void 0 ? a.offsetX : a.layerX),
        (this.offsetY = ye || a.offsetY !== void 0 ? a.offsetY : a.layerY),
        (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
        (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
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
    a.defaultPrevented && kd.Z.preventDefault.call(this);
  };
  kd.prototype.stopPropagation = function () {
    kd.Z.stopPropagation.call(this);
    this.j.stopPropagation ? this.j.stopPropagation() : (this.j.cancelBubble = true);
  };
  kd.prototype.preventDefault = function () {
    kd.Z.preventDefault.call(this);
    var a = this.j;
    a.preventDefault ? a.preventDefault() : (a.returnValue = false);
  };
  var ik = "closure_listenable_" + ((Math.random() * 1e6) | 0);
  var ld = 0;
  var jk = function (a) {
    a.Ka = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.handler = null;
  };
  nd.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.j[f];
    a || ((a = this.j[f] = []), this.l++);
    var g = kk(a, b, d, e);
    g > -1
      ? ((b = a[g]), c || (b.xa = false))
      : ((b = new md(b, this.src, f, !!d, e)), (b.xa = c), a.push(b));
    return b;
  };
  nd.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.j)) return false;
    var e = this.j[a];
    b = kk(e, b, c, d);
    return b > -1
      ? (jk(e[b]),
        Array.prototype.splice.call(e, b, 1),
        e.length == 0 && (delete this.j[a], this.l--),
        true)
      : false;
  };
  var lk = function (a, b) {
      var c = b.type;
      c in a.j && ma(a.j[c], b) && (jk(b), a.j[c].length == 0 && (delete a.j[c], a.l--));
    },
    kk = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        let f = a[e];
        if (!f.Ka && f.listener == b && f.capture == !!c && f.handler == d) return e;
      }
      return -1;
    };
  var mk = "closure_lm_" + ((Math.random() * 1e6) | 0),
    nk = {},
    ok = 0,
    Ke = function (a, b, c, d, e) {
      if (d && d.once) return pk(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) Ke(a, b[f], c, d, e);
        return null;
      }
      c = qk(c);
      return a && a[ik]
        ? a.o.add(String(b), c, false, nf(d) ? !!d.capture : !!d, e)
        : rk(a, b, c, false, d, e);
    },
    rk = function (a, b, c, d, e, f) {
      if (!b) throw Error("M");
      var g = nf(e) ? !!e.capture : !!e,
        h = sk(a);
      h || (a[mk] = h = new nd(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = tk();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) {
        e === void 0 && (e = false);
        a.addEventListener(b.toString(), d, e);
      } else if (a.attachEvent) a.attachEvent(uk(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("N");
      ok++;
      return c;
    },
    tk = function () {
      var a = vk,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    pk = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) pk(a, b[f], c, d, e);
        return null;
      }
      c = qk(c);
      return a && a[ik]
        ? a.o.add(String(b), c, true, nf(d) ? !!d.capture : !!d, e)
        : rk(a, b, c, true, d, e);
    },
    wk = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (let f = 0; f < b.length; f++) wk(a, b[f], c, d, e);
      else
        ((d = nf(d) ? !!d.capture : !!d), (c = qk(c)), a && a[ik])
          ? a.o.remove(String(b), c, d, e)
          : a &&
            (a = sk(a)) &&
            ((b = a.j[b.toString()]),
            (a = -1),
            b && (a = kk(b, c, d, e)),
            (c = a > -1 ? b[a] : null) && xk(c));
    },
    xk = function (a) {
      if (typeof a !== "number" && a && !a.Ka) {
        var b = a.src;
        if (b && b[ik]) lk(b.o, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
              ? b.detachEvent(uk(c), d)
              : b.addListener && b.removeListener && b.removeListener(d);
          ok--;
          (c = sk(b)) ? (lk(c, a), c.l == 0 && ((c.src = null), (b[mk] = null))) : jk(a);
        }
      }
    },
    uk = function (a) {
      return a in nk ? nk[a] : (nk[a] = "on" + a);
    },
    vk = function (a, b) {
      if (a.Ka) a = true;
      else {
        b = new kd(b, this);
        let c = a.listener,
          d = a.handler || a.src;
        a.xa && xk(a);
        a = c.call(d, b);
      }
      return a;
    },
    sk = function (a) {
      a = a[mk];
      return a instanceof nd ? a : null;
    },
    yk = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0),
    qk = function (a) {
      if (typeof a === "function") return a;
      a[yk] ||
        (a[yk] = function (b) {
          return a.handleEvent(b);
        });
      return a[yk];
    };
  ui(function (a) {
    vk = a(vk);
  });
  var zk = function (a, b) {
    id.call(this, a);
    this.error = b;
  };
  K(zk, id);
  var od = /\/d\/([^\/]+)/,
    Ak = /\/r\/([^\/]+)/;
  L(F, A);
  F.prototype[ik] = true;
  F.prototype.addEventListener = function (a, b, c, d) {
    Ke(this, a, b, c, d);
  };
  F.prototype.removeEventListener = function (a, b, c, d) {
    wk(this, a, b, c, d);
  };
  F.prototype.dispatchEvent = function (a) {
    var b,
      c = this.da;
    if (c) for (b = []; c; c = c.da) b.push(c);
    c = this.Ma;
    var d = a.type || a;
    if (typeof a === "string") a = new id(a, c);
    else if (a instanceof id) a.target = a.target || c;
    else {
      var e = a;
      a = new id(d, c);
      Wc(a, e);
    }
    e = true;
    var f;
    if (b)
      for (f = b.length - 1; !a.l && f >= 0; f--) {
        var g = (a.currentTarget = b[f]);
        e = Bk(g, d, true, a) && e;
      }
    a.l ||
      ((g = a.currentTarget = c),
      (e = Bk(g, d, true, a) && e),
      a.l || (e = Bk(g, d, false, a) && e));
    if (b)
      for (f = 0; !a.l && f < b.length; f++) {
        g = a.currentTarget = b[f];
        e = Bk(g, d, false, a) && e;
      }
    return e;
  };
  F.prototype.K = function () {
    F.Z.K.call(this);
    if (this.o) {
      var a = this.o;
      let b = 0;
      for (let c in a.j) {
        let d = a.j[c];
        for (let e = 0; e < d.length; e++) {
          ++b;
          jk(d[e]);
        }
        delete a.j[c];
        a.l--;
      }
    }
    this.da = null;
  };
  var Bk = function (a, b, c, d) {
    b = a.o.j[String(b)];
    if (!b) return true;
    b = b.concat();
    var e = true;
    for (let f = 0; f < b.length; ++f) {
      let g = b[f];
      if (g && !g.Ka && g.capture == c) {
        let h = g.listener,
          k = g.handler || g.src;
        g.xa && lk(a.o, g);
        e = h.call(k, d) !== false && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  L(qd, F);
  n = qd.prototype;
  n.Ca = false;
  n.ca = null;
  n.setInterval = function (a) {
    this.l = a;
    this.ca && this.Ca ? (this.stop(), this.start()) : this.ca && this.stop();
  };
  n.Rb = function () {
    if (this.Ca) {
      let a = Date.now() - this.A;
      a > 0 && a < this.l * 0.8
        ? (this.ca = this.j.setTimeout(this.v, this.l - a))
        : (this.ca && (this.j.clearTimeout(this.ca), (this.ca = null)),
          this.dispatchEvent("tick"),
          this.Ca && (this.stop(), this.start()));
    }
  };
  n.start = function () {
    this.Ca = true;
    this.ca || ((this.ca = this.j.setTimeout(this.v, this.l)), (this.A = Date.now()));
  };
  n.stop = function () {
    this.Ca = false;
    this.ca && (this.j.clearTimeout(this.ca), (this.ca = null));
  };
  n.K = function () {
    qd.Z.K.call(this);
    this.stop();
    delete this.j;
  };
  var Ck = function (a, b) {
    if (typeof a !== "function")
      if (a && typeof a.handleEvent == "function") a = G(a.handleEvent, a);
      else throw Error("O");
    return Number(b) > 2147483647 ? -1 : r.setTimeout(a, b || 0);
  };
  L(rd, A);
  n = rd.prototype;
  n.Da = 0;
  n.K = function () {
    rd.Z.K.call(this);
    this.stop();
    delete this.j;
    delete this.l;
  };
  n.start = function (a) {
    this.stop();
    this.Da = Ck(this.v, a !== void 0 ? a : this.o);
  };
  n.stop = function () {
    this.isActive() && r.clearTimeout(this.Da);
    this.Da = 0;
  };
  n.isActive = function () {
    return this.Da != 0;
  };
  n.Bb = function () {
    this.Da = 0;
    this.j && this.j.call(this.l);
  };
  var Dk = function (a, b, c, d) {
    A.call(this);
    this.o = d != null ? d : 0.15;
    this.A = a;
    this.v = b;
    this.D = c;
    this.j = new rd(this.G, void 0, this);
    this.C = Number.NEGATIVE_INFINITY;
    this.l = 0;
  };
  K(Dk, A);
  Dk.prototype.isActive = function () {
    return this.j.isActive();
  };
  Dk.prototype.start = function () {
    Ek(this, false, false);
  };
  var Ek = function (a, b, c) {
    b && (a.j.stop(), Fk(a, a.v));
    a.isActive() ||
      ((b = Math.max(0, a.C + a.l - Date.now())),
      b == 0 && (c ? (b = Fk(a, a.v)) : (a.l = 0)),
      a.j.start(b));
  };
  Dk.prototype.stop = function () {
    this.j.stop();
  };
  var Fk = function (a, b) {
    b > 0 && a.o != 0 && (b = Math.floor(b * (1 - a.o + Math.random() * a.o * 2)));
    return (a.l = b);
  };
  Dk.prototype.G = function () {
    this.C = Date.now();
    Fk(this, Math.min(Math.max(this.l * 2, this.v), this.D));
    this.A();
  };
  Dk.prototype.K = function () {
    this.j.dispose();
    delete this.j;
    delete this.A;
    A.prototype.K.call(this);
  };
  L(sd, A);
  var Gk = [],
    we = function (a, b, c, d) {
      Array.isArray(c) || (c && (Gk[0] = c.toString()), (c = Gk));
      for (let e = 0; e < c.length; e++) {
        let f = Ke(b, c[e], d || a.handleEvent, false, a.l || a);
        if (!f) break;
        a.j[f.key] = f;
      }
      return a;
    },
    Hk = function (a) {
      Sc(
        a.j,
        function (b, c) {
          this.j.hasOwnProperty(c) && xk(b);
        },
        a,
      );
      a.j = {};
    };
  sd.prototype.K = function () {
    sd.Z.K.call(this);
    Hk(this);
  };
  sd.prototype.handleEvent = function () {
    throw Error("P");
  };
  var Y = function (a, b, c, d, e, f, g) {
    g = g === void 0 ? true : g;
    A.call(this);
    var h = this;
    this.l = a;
    this.l.O = 1e4;
    this.ka = b;
    this.J = f;
    this.v = new Dk(
      function () {
        return h.G();
      },
      3e4,
      36e5,
    );
    this.L = 0;
    this.da = null;
    this.ua = new Ej("errorsender", 1, 8, d);
    ve(this, this.ua);
    this.ba = false;
    this.U = null;
    this.X = new Set();
    this.R = new sd(this);
    this.fb = c || 10;
    this.va = e || null;
    we(this.R, this.l, "complete", this.eb);
    we(this.R, this.l, "ready", this.G);
    this.ta = null;
    this.V = new Qj();
    ve(this, this.V);
    this.J &&
      Rj(this.V, this.J.o(), function () {
        h.J.j().j >= 3 && (h.ta = (Oj(), Nj));
        h.J.j().j >= 3 || h.ta !== (Oj(), Nj) || Ik(h);
      });
    this.Ma = g;
    this.Na = {};
  };
  K(Y, A);
  var Jk = function (a, b, c, d, e) {
    xj(a.ka.get("docs-dafjera")) && (b = pd(pd(b, Ak), od));
    var f = W(
      W(
        a.Ba(),
        function (g) {
          if (!(g >= this.fb))
            return (
              this.Ma && (b = Fc(b, "errorSender_enqueueTimeMs", Date.now().toString())),
              (g = {}),
              (g.u = b),
              (g.m = c),
              (g.c = d),
              (g.h = e),
              this.Ea(g)
            );
        },
        a,
      ),
      a.G,
      a,
    );
    cj(
      f,
      function () {
        this.X.delete(f);
      },
      a,
    );
    a.X.add(f);
  };
  Y.prototype.G = function () {
    var a = this.J && this.J.j().j >= 3,
      b = this.aa() || this.l.isActive() || this.v.isActive() || this.ba;
    return a || b ? E() : Kk(this);
  };
  var Kk = function (a) {
      return a.Oa(function () {
        return W(a.za(), function (b) {
          return Lk(a, b);
        });
      });
    },
    Lk = function (a, b) {
      if (a.v.isActive() || a.l.isActive() || a.ba) return E();
      if (!b) return (a.v.stop(), E());
      if (b.u.length > 4e3) return a.qa();
      try {
        Ij(a.ua);
        a.U = new D();
        let c = b.u;
        a.va != null && (c = Fc(c, "reportingSessionId", a.va));
        a.L > 0 && (c = Fc(c, "retryCount", a.L));
        a.da != null && (c = Fc(c, "previousErrorSendStatus", a.da));
        a.Ma &&
          ((c = Fc(c, "errorSender_sendTimeMs", Date.now().toString())),
          (c = Fc(c, "errorSenderType", a.Ua())),
          b.errorSender_frontIndex &&
            (c = Fc(c, "errorSender_frontIndex", b.errorSender_frontIndex)),
          b.errorSender_nextIndex && (c = Fc(c, "errorSender_nextIndex", b.errorSender_nextIndex)),
          b.errorSender_queueSize && (c = Fc(c, "errorSender_queueSize", b.errorSender_queueSize)));
        a.Na = b;
        let d = b.m,
          e = b.c,
          f = b.h;
        return W(
          W(a.qa(), function () {
            Mk(a.l, c, d, e, f);
          }),
          function () {
            return a.U;
          },
        );
      } catch (c) {
        if (ai(c) instanceof Cj) a.ba = true;
        else throw U(c, { "docs-origin-class": "docs.debug.ErrorSender" });
      }
      return E();
    };
  Y.prototype.eb = function () {
    var a = Nk(this.l),
      b = this.U,
      c = Ok(this.l) || (a >= 400 && a <= 500),
      d = this.L > 3;
    c || d
      ? ((this.L = 0),
        (this.da = null),
        this.v.stop(),
        W(E(), function () {
          b.j();
        }))
      : (this.L++, (this.da = a === -1 ? this.l.A : a), Ik(this), this.Ea(this.Na), b.j());
  };
  var Ik = function (a) {
    a.L != 1 || a.v.isActive() ? a.v.start() : Ek(a.v, true, true);
  };
  Y.prototype.K = function () {
    Hc(this.R, this.v, this.l, this.V);
    this.X.clear();
    A.prototype.K.call(this);
  };
  Y.prototype.Ua = function () {
    return "BaseErrorSender";
  };
  var Pk = function (a, b, c, d, e) {
    Y.call(this, a, b, c, void 0, d, e, void 0);
    this.j = [];
  };
  K(Pk, Y);
  n = Pk.prototype;
  n.Oa = function (a) {
    return a();
  };
  n.Ea = function (a) {
    this.j.push(a);
    return E();
  };
  n.qa = function () {
    this.j.shift();
    return E();
  };
  n.za = function () {
    return E(this.j[0] !== void 0 ? this.j[0] : null);
  };
  n.Ba = function () {
    return E(this.j.length);
  };
  n.Ua = function () {
    return "MemoryErrorSender";
  };
  n.K = function () {
    delete this.j;
    Y.prototype.K.call(this);
  };
  var Qk = function () {
    var a = a === void 0 ? false : a;
    if (a === void 0 ? 0 : a) throw Error("Q`a");
  };
  Qk.prototype.toString = function () {
    return "a";
  };
  new Qk();
  var Rk = function (a) {
    this.j = rc(Wg(), Nf(a));
    a = ag(this.j, 1);
    this.l = Math.floor(Math.random() * 100) < a;
  };
  Rk.prototype.toString = function () {
    var a = "{bool=" + !(this.l ? !$f(this.j, 5) : !$f(this.j, 2)) + ', string="',
      b = this.l ? gb(I(this.j, 6, void 0, te)) : cg(this.j, 3);
    a = a + (b != null ? String(b) : "") + '", int=';
    b = this.l ? Wa(I(this.j, 7, void 0, te)) : ag(this.j, 4, -1);
    return a + (b != null ? Number(b) : -1) + "}";
  };
  var Sk = function (a) {
    this.j = new Map();
    this.l = [];
    if ((a = a.get("docs-cei"))) {
      let b = a.i;
      b && oa(this.l, b);
      a = a.cf || {};
      for (let c in a) this.j.set(c, new Rk(a[c]));
    }
  };
  Sk.prototype.get = function (a) {
    return this.j.get(a) || null;
  };
  var Tk = [
      'window[("_callback_" + expid)] is not a function',
      "Cannot read properties of null (reading 'readyState')",
      "request failed on client side",
    ],
    Uk = [/(undefined|constructor).*YT|YT.*(undefined|constructor)/];
  var gg = function (a, b) {
      this.j = a;
      this.l = b;
    },
    Vk = function (a, b) {
      return new TypeError("S`" + b + "`" + a.j + "`" + a.l + "`" + typeof a.l);
    },
    ig = function (a) {
      var b = a.l;
      if (b == null) return null;
      if (typeof b === "string") return b;
      throw Vk(a, "string");
    };
  gg.prototype.toString = function () {
    var a = ig(this);
    if (a === null) throw Error("R`" + this.j);
    return a;
  };
  gg.prototype.object = function (a) {
    var b = this.l;
    if (b == null) {
      if (a === void 0) throw Error("R`" + this.j);
      return a;
    }
    if (typeof b === "object" && b.constructor === Object) {
      a = {};
      let c = this.j + ".";
      for (let d in b) a[d] = new gg(c + d, b[d]);
      return a;
    }
    throw Vk(this, "object");
  };
  var Wk = function (a) {
    this.B = y(a);
  };
  K(Wk, Q);
  Wk.prototype.ea = function (a) {
    return eg(this, 7, a);
  };
  var Xk = function (a) {
    this.B = y(a);
  };
  K(Xk, Q);
  var Gd = function (a) {
      return Uf(a, Wk, Sf(a, Yk, 4));
    },
    Yk = [4, 5];
  var Zk = function (a) {
    this.B = y(a);
  };
  K(Zk, Q);
  var $k = function (a) {
    this.B = y(a);
  };
  K($k, Q);
  var hg = function (a) {
    this.B = y(a);
  };
  K(hg, Q);
  var Hd = function (a) {
    return Uf(a, Xk, 1);
  };
  var Vd = function () {
    this.j = Id();
  };
  Vd.prototype.ya = function () {
    var a = new Map(),
      b,
      c = (b = this.j) == null ? void 0 : Gd(Hd(b));
    if (c == null ? 0 : Zf(c, 2) != null) {
      var d;
      (b = (d = Jd(c, 2)) == null ? void 0 : d.toString()) &&
        a.set("canaryanalysisservertestgroup", b);
      if (c == null) var e = void 0;
      else if ((c = H(c, Ug, 3)) == null) e = void 0;
      else {
        d = Number;
        e = e === void 0 ? "0" : e;
        {
          b = I(c, 1, void 0, void 0, fb);
          var f = f === void 0 ? false : f;
          let k = typeof b;
          f =
            b == null
              ? b
              : k === "bigint"
                ? String(Ya(64, b))
                : Ua(b)
                  ? k === "string"
                    ? Xa(b)
                    : f
                      ? Za(b)
                      : bb(b)
                  : void 0;
        }
        e = f != null ? f : e;
        e = d(e);
        f = ag(c, 2);
        e = new Date(e * 1e3 + f / 1e6).valueOf().toString();
      }
      e && a.set("serverstarttimemillis", e);
    }
    var g, h;
    (e = (g = this.j) == null ? void 0 : (h = H(g, Xk, 1)) == null ? void 0 : Jd(h, 6)) &&
      a.set("clientApp", String(e));
    return a;
  };
  n = ud.prototype;
  n.clone = function () {
    return new ud(this.width, this.height);
  };
  n.aspectRatio = function () {
    return this.width / this.height;
  };
  n.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  n.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  n.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Je = function () {
    this.j = r.document || document;
  };
  Je.prototype.contains = function (a, b) {
    return a && b ? a == b || a.contains(b) : false;
  };
  var al = function () {
    var a = function () {};
    this.j = a.call.bind(a.toString);
  };
  al.prototype.ya = function () {
    var a = new Map();
    bl() && a.set("apps_telemetry.screen_tampered", "true");
    a: {
      var b = x(Array.prototype),
        c = b.next(),
        d;
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
    cl() || a.set("apps_telemetry.canvas_creation_broken", "true");
    !dl() && r.navigator && r.navigator.webdriver && a.set("apps_telemetry.webdriver", "true");
    e = false;
    b = x(el);
    c = b.next();
    var f;
    try {
      for (; !c.done; c = b.next()) {
        var g = c.value,
          h = fl(g.key);
        h === 0
          ? (a.set("apps_telemetry.automation_property_present." + g.W, "true"), (e = true))
          : h === 2 && a.set("apps_telemetry.automation_property_check_failed." + g.W, "true");
      }
    } finally {
      c && !c.done && (f = b.return) && f.call(b);
    }
    e && a.set("apps_telemetry.automation_detected", "true");
    f = false;
    g = x(gl);
    h = g.next();
    var k;
    try {
      for (; !h.done; h = g.next()) {
        var l = h.value;
        let m = l.W,
          q = hl(this, l.name, l.tb);
        if (!q.ra) {
          let t = q.reason;
          a.set("apps_telemetry.native_function_tampering." + m + ".reason", t);
          t === "non_function_type" &&
            a.set("apps_telemetry.native_function_tampering." + m + ".type", q.type);
          f = true;
        }
      }
    } finally {
      h && !h.done && (k = g.return) && k.call(g);
    }
    f && a.set("apps_telemetry.native_function_tampering_detected", "true");
    return a;
  };
  var bl = function () {
      if (dl()) return false;
      var a = r.screen,
        b = !(a instanceof Screen);
      if (Df || Bf) return b;
      try {
        let c = function () {};
        a.addEventListener("change", c);
        a.removeEventListener("change", c);
      } catch (c) {
        b = true;
      }
      return b;
    },
    cl = function () {
      var a = function (b) {
        try {
          var c = new ud(1, 500);
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
      };
      return a(false) && (dl() || a(true));
    },
    dl = function () {
      return (
        "WorkerGlobalScope" in r &&
        typeof r.WorkerGlobalScope === "function" &&
        self instanceof r.WorkerGlobalScope
      );
    },
    fl = function (a) {
      if (dl() || !r) return 1;
      try {
        if (a in r || (r.document && a in r.document)) return 0;
      } catch (b) {
        return 2;
      }
      return 1;
    },
    hl = function (a, b, c) {
      try {
        var d = c();
      } catch (f) {
        return { ra: false, reason: "not_reachable" };
      }
      c = il(d);
      if (c !== "function") return { ra: false, reason: "non_function_type", type: c };
      try {
        var e = a.j(d);
      } catch (f) {
        return { ra: false, reason: "to_string_failed" };
      }
      a = jl.exec(e);
      return a
        ? (a = a[1])
          ? a !== b
            ? { ra: false, reason: "likely_wrong_native_function" }
            : { ra: true }
          : { ra: false, reason: "likely_bound_function" }
        : { ra: false, reason: "likely_non_native_source" };
    },
    il = function (a) {
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
    },
    el = [
      { key: "Cypress", W: "cypress" },
      { key: "$cdc_asdjflasutopfhvcZLmcfl_", W: "selenium" },
      { key: "$wdc_", W: "chrome_driver" },
      { key: "domAutomationController", W: "chromium_automation" },
      { key: "callPhantom", W: "phantomjs" },
      { key: "windmill", W: "windmill" },
      { key: "____LocationIntercept", W: "awesomium" },
      { key: "awesomium", W: "awesomium" },
      { key: "ubot", W: "ubot" },
      { key: "cefsharp_CreatePromise", W: "cefsharp" },
      { key: "__nightmare", W: "nightmare" },
    ],
    gl = [
      {
        name: "getOwnPropertyDescriptor",
        tb: function () {
          return Object.getOwnPropertyDescriptor;
        },
        W: "Object.getOwnPropertyDescriptor",
      },
      {
        name: "addEventListener",
        tb: function () {
          return r.addEventListener;
        },
        W: "global.addEventListener",
      },
    ],
    jl = /^function\s*(?:\s([a-zA-Z_$][\w$]+))?\(\) \{\s+\[native code\]\s+\}$/;
  var kl = [],
    ll = [],
    ml = [
      RegExp("^_0x[a-f0-9]{6} is not defined$"),
      RegExp("[Zz]otero"),
      RegExp('^Not found$|^Unknown Error of type "string": Not found$'),
    ],
    nl =
      "egfdjlfmgnehecnclamagfafdccgfndp mndnfokpggljbaajbnioimlmbfngpief mlkejohendkgipaomdopolhpbihbhfnf kgonammgkackdilhodbgbmodpepjocdp klbcgckkldhdhonijdbnhhaiedfkllef pmehocpgjmkenlokgjfkaichfjdhpeol cjlaeehoipngghikfjogbdkpbdgebppb ghbmnnjooekpmoecnnnilnnbdlolhkhi lmjegmlicamnimmfhcmpkclmigmmcbeh gmbmikajjgmnabiglmofipeabaddhgne lpcaedmchfhocbbapmcbpinfpgnhiddi gbkeegbaiigmenfmjfclcdgdpimamgkj adokjfanaflbkibffcbhihgihpgijcei iklnnbgdcppplombffihcijanngoeifm".split(
        " ",
      ),
    ol = [
      RegExp("chrome-extension://([^/]+)", "g"),
      RegExp("moz-extension://([^/]+)", "g"),
      RegExp("ms-browser-extension://([^/]+)", "g"),
      RegExp("webkit-masked-url://([^/]+)", "g"),
      RegExp("safari-web-extension://([^/]+)", "g"),
    ],
    pl = [
      RegExp("^Permission denied$"),
      RegExp("index out of range: \\d+ \\+ \\d+ > \\d+"),
      RegExp("getReadMode(Config|Render|Extract)"),
    ],
    ql = [
      RegExp("at file:///|@file:///|phantomjs|node:electron|py-scrap|eval code|Program Files"),
      RegExp("_0x[a-f0-9]+.*anonymous"),
    ],
    rl = [
      RegExp("Script https://meet\\.google\\.com/.*meetsw.*load failed"),
      RegExp("A bad HTTP response code \\(\\d+\\) was received when fetching the script"),
    ],
    sl = [
      RegExp("Error loading.*Consecutive load failures"),
      RegExp("Failed to load module.*Consecutive load failures"),
    ];
  var tl = function (a, b) {
      this.gb = a;
      this.Sa = b;
    },
    ul = function (a, b) {
      return (b = a.j(b)) ? { gb: a.gb, Sa: a.Sa, mb: b.toUpperCase() } : null;
    };
  var vl = function () {
    tl.call(this, 1, 1);
  };
  K(vl, tl);
  vl.prototype.j = function (a) {
    a: {
      a = wl(a);
      let k = false;
      var b = x(ol),
        c = b.next(),
        d;
      try {
        for (; !c.done; c = b.next()) {
          let l = a.matchAll(c.value);
          var e = x(l),
            f = e.next(),
            g;
          try {
            for (; !f.done; f = e.next()) {
              let m = f.value[1];
              if (m) {
                if (nl.includes(m)) {
                  var h = false;
                  break a;
                }
                k = true;
              }
            }
          } finally {
            f && !f.done && (g = e.return) && g.call(e);
          }
        }
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
      h = k;
    }
    return h ? "warning" : null;
  };
  var yl = function (a, b, c) {
    c = c === void 0 ? xl : c;
    tl.call(this, a, b);
    this.l = c;
  };
  K(yl, tl);
  yl.prototype.j = function (a) {
    var b =
        typeof a.l.get("apps_telemetry.cross_origin_scripts") === "string"
          ? a.l.get("apps_telemetry.cross_origin_scripts")
          : "",
      c = a.l.get("apps_telemetry.native_function_tampering_detected") === "true",
      d = wl(a),
      e = d.includes("blob:"),
      f = x(this.l),
      g = f.next(),
      h;
    try {
      for (; !g.done; g = f.next()) {
        var k = g.value;
        let pa = k.errorMessage;
        var l = k.nb,
          m = l === void 0 ? [] : l,
          q = k.na;
        let kc = q === void 0 ? [] : q;
        var t = k.Xa;
        let lc = t === void 0 ? false : t;
        var B = k.sb,
          C = k.Mb,
          N = C === void 0 ? false : C;
        if ((B === void 0 ? 0 : B) ? a.message !== pa : !d.includes(pa)) continue;
        let jd = m.some(function (mg) {
            return b.includes(mg);
          }),
          Ao = kc.some(function (mg) {
            return a.j.includes(mg);
          });
        m = lc && e;
        N = N && c;
        if (jd || Ao || m || N) return "warning";
      }
    } finally {
      g && !g.done && (h = f.return) && h.call(f);
    }
    return null;
  };
  var xl = [
    {
      errorMessage: "Cannot read properties of undefined (reading 'addListener')",
      Xa: true,
      nb: ["infird.com"],
    },
    {
      errorMessage: "browser_polyfill_default(...).runtime.getManifest is not a function",
      Xa: true,
      nb: ["infird.com"],
    },
    { errorMessage: 'fileName":', nb: ["walkme.com"] },
    { errorMessage: "] is not a function", Xa: true },
    { errorMessage: "(reading 'toLowerCase')", Xa: true, na: ["__aiNetCmd__"] },
    { errorMessage: "Cannot read properties of undefined", na: ["recaptcha"] },
    { errorMessage: "a is not defined", sb: true, na: ["<anonymous>"] },
    { errorMessage: "i is not defined", sb: true, na: ["<anonymous>"] },
    { errorMessage: "Failed to fetch", na: ["__DLD__", "frontend.min.js"] },
    { errorMessage: "Maximum call stack size exceeded", Mb: true },
    { errorMessage: "Unexpected end of JSON input", na: ["facebook.net"] },
  ];
  var zl = function (a, b, c, d, e) {
      e = e === void 0 ? new Map() : e;
      this.message = a;
      this.j = b;
      this.cause = c;
      this.o = d;
      this.l = e;
    },
    Al = function (a) {
      return (a = a.cause) ? a.message + "\n" + a.j + "\n" + Al(a) : "";
    },
    wl = function (a) {
      return a.message + "\n" + a.j + "\n" + Al(a);
    },
    yd = function () {
      this.o = this.j = this.message = "";
      this.l = new Map();
    },
    Ad = function (a, b) {
      a.message = b;
      return a;
    },
    Cd = function (a) {
      return new zl(a.message, a.j, a.cause, a.o, a.l);
    };
  var Sd = function (a, b, c, d) {
    tl.call(this, c, d);
    this.l = a;
    this.o = b;
  };
  K(Sd, tl);
  Sd.prototype.j = function (a) {
    var b = Al(a);
    return Bl(a.message, this.l) || Bl(a.j, this.o) || Bl(b, this.l) || Bl(b, this.o)
      ? "warning"
      : null;
  };
  var Bl = function (a, b) {
    b = x(b);
    var c = b.next(),
      d;
    try {
      for (; !c.done; c = b.next()) if (c.value.test(a)) return true;
    } finally {
      c && !c.done && (d = b.return) && d.call(b);
    }
    return false;
  };
  var Td = function (a, b, c, d, e) {
    tl.call(this, c, d);
    this.l = a;
    this.na = b;
    this.matchType = e;
  };
  K(Td, tl);
  Td.prototype.j = function (a) {
    switch (this.matchType) {
      case 0:
        a: {
          a = a.message;
          var b = x(this.l),
            c = b.next(),
            d;
          try {
            for (; !c.done; c = b.next())
              if (a === c.value) {
                var e = true;
                break a;
              }
          } finally {
            c && !c.done && (d = b.return) && d.call(b);
          }
          e = false;
        }
        return e ? "warning" : null;
      case 1:
        a: {
          a = a.message;
          e = x(this.l);
          d = e.next();
          try {
            for (; !d.done; d = e.next())
              if (a.startsWith(d.value)) {
                b = true;
                break a;
              }
          } finally {
            d && !d.done && (c = e.return) && c.call(e);
          }
          b = false;
        }
        return b ? "warning" : null;
      case 2:
        return ((e = wl(a)), Cl(e, this.l) || Cl(e, this.na) ? "warning" : null);
      default:
        return null;
    }
  };
  var Cl = function (a, b) {
      b = x(b);
      var c = b.next(),
        d;
      try {
        for (; !c.done; c = b.next()) if (a.includes(c.value)) return true;
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
      return false;
    },
    Rd = function (a, b, c) {
      return new Td(a, b, c, 0, 2);
    };
  var Dl = function (a, b, c) {
    tl.call(this, a, b);
    this.l = c();
  };
  K(Dl, tl);
  Dl.prototype.j = function () {
    return this.l ? null : "unsupported_severe";
  };
  var El = [
      new vl(),
      Rd(
        "Trusted Type;TrustedHTML;TrustedScript;cannot communicate with background;zaloJSV2;kaspersky-labs;@user-script;Object Not Found Matching Id;contextChanged;Not implemented on this platform;Extension context invalidated;neurosurgeonundergo;realTimeClData;Failed to execute 'querySelectorAll' on 'Document';Promise.all(...).then(...).catch(...).finally is not a function;Error executing Chrome API, chrome.tabs;Identifier 'originalPrompt' has already been declared;User rejected the request;Could not inject ethereum provider because it's not your default extension;Cannot redefine property: googletag;Can't find variable: HTMLDialogElement;Identifier 'listenerName' has already been declared;Cannot read properties of undefined (reading 'info');Permission denied to access property \"type\";Error: Promise timed out;Request timeout ToolbarStatus;Can't find variable: nc;imtgo;ton is not a function;__renderMessageNode is not defined;Cannot redefine property: ethereum;unknown action:;Receiving end does not exist;get-frame-manager-configuration;Key not found;'isAWS';Identifier 'contentScriptListenerRegistered' has already been declared;window.ethereum.selectedAddress;extDomain is not defined;No Listener: tabs:outgoing.message.ready;This script should only be loaded in a browser extension;Identifier 'initCoreHelpers' has already been declared;undefined is not an object (evaluating 't.tab.customFillData');No tab with id:;The browser is shutting down.;User mapping loading timeout;Internal JSON-RPC error;TOKEN_EXPIRED;A listener indicated an asynchronous response by returning true;You must authenticate your request with an API key;Could not inject tron provider".split(
          ";",
        ),
        "puppeteer;kaspersky-labs;@user-script;jsQuilting;linkbolic;neurosurgeonundergo;tlscdn;https://cdnjs.cloudflare.com/ajax/libs/mathjax/;secured-pixel.com;Can't find variable: nc;imtgo;_simulateEvent;goguardian".split(
          ";",
        ),
        1,
      ),
      new Sd(ml, ll, 1, 0),
      Rd(
        "status is 0, navigator.onLine =;Network sync is disabled. Aborting a network request of int type;The service is currently unavailable.;Internal error encountered.;data does not exist in AF cache;There was an error during the transport or processing of this request;Failed to load gapi;Rpc failed due to xhr error. error code: 6, error:  [0];An interceptor has requested that the request be retried;8,\"generic\";A network error occurred;NetworkError: Connection failure due to HTTP 401;NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope';Load failed".split(
          ";",
        ),
        kl,
        2,
      ),
      new Sd([], ll, 2, 0),
      new Sd(pl, ql, 3, 0),
      Rd(
        "Kg is not defined;uncaught error;The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.;Illegal invocation;Script error;zCommon;can't access dead object;Java exception was raised during method invocation;pauseVideo is not a function;ResizeObserver loop;wallet must has at least one account;xbrowser is not defined;jQuery is not defined;Cannot read properties of null (reading 'requestAnimationFrame');Class extends value undefined is not a constructor or null;GM3TooltipService: No tooltip with id;Mole was disposed;getInitialTopicListResponse is missing for stream rendering;getPeopleById call preempted;The operation is insecure;class heritage;The play() request was interrupted;args.site.enabledFeatures is undefined;frappe is not defined;Cannot set properties of undefined (setting 'hidden');Identifier 'checkOngoingMeeting' has already been declared;AutofillCallbackHandler;invalid wire type;zp_token;isReCreate;HTMLOUT is not defined;Shopify root is null;CanvasMaskingStrategy_Redact;_chromeNamespace;feature named `performanceMetrics`;feature named `webCompat`;Cannot redefine property: webdriver;reCAPTCHA Timeout;feature named `pageObserver` was not found;feature named `hover` was not found;Request timeout appSettingsDistributor.getValue;TimeoutError: operation timed out;Sink type mismatch violation blocked by CSP;__firefox__;: Java object is gone;Cannot read properties of undefined (reading 'domInteractive');: t is not defined;sendMessage(). Tab not found.;Can't find variable: __gCrWeb;WKWebView API client did not respond to this postMessage;The provider is disconnected from all chains;The user aborted a request.;Task was cancelled.;lettersVoicesDistributor".split(
          ";",
        ),
        ["postUserData", "inline.cdn.mcas.ms", "evaluating 'n.standardSelectors'"],
        3,
      ),
      new Sd(rl, ll, 5, 0),
      Rd(
        "Service worker registration is disabled by MDA;An unknown error occurred when fetching the script;Operation has been aborted;Timed out while trying to start the Service Worker;The Service Worker system has shutdown;The user denied permission to use Service Worker;The script resource is behind a redirect, which is disallowed;The document is in an invalid state;ServiceWorker script evaluation failed;ServiceWorker cannot be started;Failed to access storage;Worker disallowed;encountered an error during installation".split(
          ";",
        ),
        kl,
        5,
      ),
      new Sd(sl, sl, 4, 0),
      Rd(
        [
          "Timeout reached for loading script https://www.gstatic.com/_/apps-fileview/_/js/",
          "Error while loading script https://www.gstatic.com/_/apps-fileview/_/js/",
        ],
        kl,
        4,
      ),
    ],
    Fl = new Set(["SEVERE", "SEVERE_AFTER_INITIAL", "UNKNOWN", "FATAL", ""]),
    Gl = function (a) {
      this.l = a;
      this.j = false;
    },
    Il = function (a, b, c, d) {
      var e = [Error("T").message];
      c = c === void 0 ? false : c;
      d =
        d === void 0
          ? function () {
              return true;
            }
          : d;
      var f = [];
      b.length > 0 && f.push(Hl(b));
      f.push.apply(f, Oa(El));
      a = x(a);
      b = a.next();
      var g;
      try {
        for (; !b.done; b = a.next()) f.push(b.value);
      } finally {
        b && !b.done && (g = a.return) && g.call(a);
      }
      e.length > 0 && f.push(new Td(e, [], 3, 5, 0));
      f.push(new yl(3, 0));
      c && f.push(new Dl(8, 0, d));
      return new Gl(f);
    },
    Ll = function (a, b) {
      var c = "missing",
        d = new Map(),
        e = true;
      try {
        c = b.o;
        a.j && d.set("apps_telemetry.after_downgraded_severe", "true");
        var f = x(a.l),
          g = f.next(),
          h;
        try {
          for (; !g.done; g = f.next()) {
            let k = g.value;
            try {
              let l = ul(k, b);
              if (l) {
                let m = c,
                  q = Jl(a, c) ? l.mb : c;
                Kl(l, m, q).forEach(function (t, B) {
                  d.set(B, t);
                });
                c = q;
                break;
              }
            } catch (l) {
              e = false;
              let m = Dd(l, c);
              d.set(
                "apps_telemetry.handling_error",
                wl(m) + "\n\nclassifier: " + k.constructor.name,
              );
            }
          }
        } finally {
          g && !g.done && (h = f.return) && h.call(f);
        }
      } catch (k) {
        {
          e = false;
          a = Dd(k, c);
          d.set("apps_telemetry.handling_error", wl(a));
        }
      }
      d.set("apps_telemetry.processed", String(e));
      return { mb: c, jb: d };
    },
    Kl = function (a, b, c) {
      var d = new Map();
      d.set("apps_telemetry.classification", a.gb.toString());
      d.set("apps_telemetry.classification_code", a.Sa ? a.Sa.toString() : "");
      d.set("apps_telemetry.incoming_severity", b);
      d.set("apps_telemetry.outgoing_severity", c);
      return d;
    },
    Jl = function (a, b) {
      return Fl.has(b.toUpperCase()) ? (a.j = true) : false;
    },
    Hl = function (a) {
      var b = [];
      a = x(a);
      var c = a.next(),
        d;
      try {
        for (; !c.done; c = a.next()) b.push(new RegExp(c.value));
      } finally {
        c && !c.done && (d = a.return) && d.call(a);
      }
      return new Sd(b, b, 7, 0);
    };
  var Ml = function () {};
  Ml.prototype.ya = function () {
    if (
      "WorkerGlobalScope" in r &&
      typeof r.WorkerGlobalScope === "function" &&
      self instanceof r.WorkerGlobalScope
    )
      return new Map();
    try {
      var a = Array.from(document.querySelectorAll("script"))
        .filter(this.l)
        .slice(0, 30)
        .map(this.j)
        .join("\n");
    } catch (b) {
      a = "Error getting cross-origin scripts";
    }
    return new Map().set("apps_telemetry.cross_origin_scripts", a);
  };
  Ml.prototype.l = function (a) {
    var b = new RegExp(/^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)*google\.com(?:$|[\/#?])/);
    return (a = a.getAttribute("src")) ? !(a.startsWith("/") || b.test(a)) : false;
  };
  Ml.prototype.j = function (a) {
    return a.innerHTML ? a.outerHTML.slice(0, a.outerHTML.indexOf(a.innerHTML)) : a.outerHTML;
  };
  var Nl = function () {};
  Nl.prototype.ya = function () {
    try {
      var a = performance
        .getEntriesByType("resource")
        .slice(-5)
        .map(function (b) {
          return pi(b.name);
        })
        .join("\n");
    } catch (b) {
      a = "Error getting last 5 resources";
    }
    return new Map().set("apps_telemetry.resources", a);
  };
  var Ed = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var Ud = function (a, b) {
      var c = b === void 0 ? {} : b;
      b = c.hb;
      b = b === void 0 ? [] : b;
      var d = c.Nb;
      d = d === void 0 ? [] : d;
      var e = c.pb;
      e = e === void 0 ? [] : e;
      var f = c.Sb;
      var g = c.sessionId;
      g = g === void 0 ? Fd() : g;
      c = c.Qb;
      this.o = Il(
        b,
        d,
        f === void 0 ? false : f,
        c === void 0
          ? function () {
              return true;
            }
          : c,
      );
      this.j = [new al(), new Ml(), new Nl()];
      this.j.push.apply(this.j, Oa(e));
      this.sessionId = g;
      var h;
      this.v = (h = r.performance) == null ? void 0 : h.timeOrigin;
      this.l = a;
      this.l.ea(g);
    },
    Ql = function (a, b, c, d) {
      d["apps_telemetry.session_id"] = a.sessionId;
      d["apps_telemetry.session_start_time_ms"] = String(a.v);
      "apps_telemetry.processed" in d && (d["apps_telemetry.multi_processed"] = "true");
      var e = a.ya();
      (a = Ol(a, b, c, e)) && Pl(e, a.jb);
      e.forEach(function (g, h) {
        d[h] = g;
      });
      var f;
      return (f = a == null ? void 0 : a.mb) != null ? f : c;
    },
    Ol = function (a, b, c, d) {
      var e = null,
        f = null;
      try {
        {
          e = Dd(b, c, d);
          f = Ll(a.o, e);
        }
      } catch (g) {
        return (Rl(d, g, "apps_telemetry.processed"), null);
      }
      a.l.yb(e, f);
      return f;
    };
  Ud.prototype.ya = function () {
    var a = new Map();
    try {
      var b = x(this.j),
        c = b.next(),
        d;
      try {
        for (; !c.done; c = b.next())
          c.value.ya().forEach(function (e, f) {
            a.set(f, e);
          });
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
    } catch (e) {
      Rl(a, e, "apps_telemetry.annotated");
    }
    return a;
  };
  var Pl = function (a, b) {
      b.forEach(function (c, d) {
        a.set(d, c);
      });
    },
    Rl = function (a, b, c) {
      a.set(c, "false");
      a.set("apps_telemetry.handling_error", vd(b));
    };
  var Kd = new Set([1, 6, 7, 2, 0]);
  var Xd = function () {};
  Xd.prototype.yb = function () {};
  Xd.prototype.ea = function () {};
  var Sl = function () {
    tl.call(this, 3, 0);
  };
  K(Sl, tl);
  Sl.prototype.j = function (a) {
    a: {
      for (; a; ) {
        let b = a.message.includes("signal is aborted without reason"),
          c = Zd(a.j) === 2;
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
    let a,
      b,
      c = (b = (a = window) == null ? void 0 : a.top) != null ? b : r;
    c.U3bHHf != null || (c.U3bHHf = 0);
    c.U3bHHf++;
  } catch (a) {
    {
      r.U3bHHf != null || (r.U3bHHf = 0);
      r.U3bHHf++;
    }
  }
  var Tl;
  if (r == null ? 0 : (Tl = r.Symbol) == null ? 0 : Tl.for) {
    var Ul = Symbol.for("google.goem");
    r[Ul] || (r[Ul] = new WeakMap());
  }
  var ae = {};
  var be = {};
  L(ee, A);
  ee.prototype.j = function (a) {
    return Vl(this, a);
  };
  var Wl = function (a, b) {
      return (b ? "__wrapper_" : "__protected_") + De(a) + "__";
    },
    Vl = function (a, b) {
      var c = Wl(a, true);
      b[c] || ((b[c] = Xl(a, b))[Wl(a, false)] = b);
      return b[c];
    },
    Xl = function (a, b) {
      var c = function () {
        if (a.aa()) return b.apply(this, arguments);
        try {
          return b.apply(this, arguments);
        } catch (d) {
          Yl(a, d);
        }
      };
      c[Wl(a, false)] = b;
      return c;
    },
    Yl = function (a, b) {
      if (
        !(
          (b &&
            typeof b === "object" &&
            typeof b.message === "string" &&
            b.message.indexOf("Error in protected function: ") == 0) ||
          (typeof b === "string" && b.indexOf("Error in protected function: ") == 0)
        )
      )
        throw (a.l(b), new Zl(b));
    },
    $l = function (a) {
      var b = b || r.window || r.globalThis;
      "onunhandledrejection" in b &&
        (b.onunhandledrejection = function (c) {
          Yl(a, c && c.reason ? c.reason : Error("T"));
        });
    },
    am = function (a, b) {
      var c = r.window || r.globalThis,
        d = c[b];
      if (!d) throw Error("U`" + b);
      c[b] = function (e, f) {
        typeof e === "string" && (e = rf(sf, e));
        e && (arguments[0] = e = Vl(a, e));
        if (d.apply) return d.apply(this, arguments);
        var g = e;
        if (arguments.length > 2) {
          let h = Array.prototype.slice.call(arguments, 2);
          g = function () {
            e.apply(this, h);
          };
        }
        return d(g, f);
      };
      c[b][Wl(a, false)] = d;
    };
  ee.prototype.K = function () {
    var a = r.window || r.globalThis;
    var b = a.setTimeout;
    b = b[Wl(this, false)] || b;
    a.setTimeout = b;
    b = a.setInterval;
    b = b[Wl(this, false)] || b;
    a.setInterval = b;
    ee.Z.K.call(this);
  };
  var Zl = function (a) {
    p.call(
      this,
      "Error in protected function: " + (a && a.message ? String(a.message) : String(a)),
      a,
    );
    (a = a && a.stack) && typeof a === "string" && (this.stack = a);
  };
  L(Zl, p);
  var bm,
    cm = function (a) {
      bm = a;
    },
    dm = function () {};
  L(dm, fe);
  dm.prototype.j = function () {
    return new XMLHttpRequest();
  };
  bm = new dm();
  var Z = function (a) {
    F.call(this);
    this.headers = new Map();
    this.S = a || null;
    this.l = false;
    this.j = null;
    this.L = "";
    this.A = 0;
    this.v = this.J = this.C = this.G = false;
    this.O = 0;
    this.D = null;
    this.U = "";
    this.V = false;
  };
  L(Z, F);
  var em = /^https?$/i,
    fm = ["POST", "PUT"],
    gm = [];
  Z.prototype.X = function () {
    this.dispose();
    ma(gm, this);
  };
  var Mk = function (a, b, c, d, e) {
    if (a.j) throw Error("V`" + a.L + "`" + b);
    if (typeof c === "string") var f = c;
    else if (c) {
      var g = c;
      f = g.method;
      d != null || (d = g.body);
      e != null || (e = g.headers);
    }
    f = f ? f.toUpperCase() : "GET";
    a.L = b;
    a.A = 0;
    a.G = false;
    a.l = true;
    a.j = a.S ? a.S.j(g) : bm.j();
    a.j.onreadystatechange = Jc(G(a.R, a));
    try {
      {
        a.J = true;
        a.j.open(f, String(b), true);
        a.J = false;
      }
    } catch (q) {
      hm(a);
      return;
    }
    b = d || "";
    c = new Map(a.headers);
    if (e)
      if (Object.getPrototypeOf(e) === Object.prototype) for (var h in e) c.set(h, e[h]);
      else if (typeof e.keys === "function" && typeof e.get === "function") {
        h = x(e.keys());
        d = h.next();
        var k;
        try {
          for (; !d.done; d = h.next()) {
            let q = d.value;
            c.set(q, e.get(q));
          }
        } finally {
          d && !d.done && (k = h.return) && k.call(h);
        }
      } else throw Error("W`" + String(e));
    e = Array.from(c.keys()).find(function (q) {
      return "content-type" == q.toLowerCase();
    });
    k = r.FormData && b instanceof r.FormData;
    !(Array.prototype.indexOf.call(fm, f, void 0) >= 0) ||
      e ||
      k ||
      c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f = x(c);
    e = f.next();
    var l;
    try {
      for (; !e.done; e = f.next()) {
        var m = x(e.value);
        let q = m.next().value,
          t = m.next().value;
        a.j.setRequestHeader(q, t);
      }
    } finally {
      e && !e.done && (l = f.return) && l.call(f);
    }
    a.U && (a.j.responseType = a.U);
    "withCredentials" in a.j && a.j.withCredentials !== a.V && (a.j.withCredentials = a.V);
    try {
      {
        im(a);
        a.O > 0 && (a.D = setTimeout(a.ba.bind(a), a.O));
        a.C = true;
        a.j.send(b);
        a.C = false;
      }
    } catch (q) {
      hm(a);
    }
  };
  Z.prototype.ba = function () {
    typeof hf != "undefined" &&
      this.j &&
      ((this.A = 8), this.dispatchEvent("timeout"), this.abort(8));
  };
  var hm = function (a) {
      a.l = false;
      a.j && ((a.v = true), a.j.abort(), (a.v = false));
      a.A = 5;
      jm(a);
      km(a);
    },
    jm = function (a) {
      a.G || ((a.G = true), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  Z.prototype.abort = function (a) {
    this.j &&
      this.l &&
      ((this.l = false),
      (this.v = true),
      this.j.abort(),
      (this.v = false),
      (this.A = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      km(this));
  };
  Z.prototype.K = function () {
    this.j &&
      (this.l && ((this.l = false), (this.v = true), this.j.abort(), (this.v = false)),
      km(this, true));
    Z.Z.K.call(this);
  };
  Z.prototype.R = function () {
    this.aa() || (this.J || this.C || this.v ? lm(this) : this.H());
  };
  Z.prototype.H = function () {
    lm(this);
  };
  var lm = function (a) {
      if (a.l && typeof hf != "undefined")
        if (a.C && (a.j ? a.j.readyState : 0) == 4) setTimeout(a.R.bind(a), 0);
        else if ((a.dispatchEvent("readystatechange"), (a.j ? a.j.readyState : 0) == 4)) {
          a.l = false;
          try {
            Ok(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : ((a.A = 6), jm(a));
          } finally {
            km(a);
          }
        }
    },
    km = function (a, b) {
      if (a.j) {
        im(a);
        let c = a.j;
        a.j = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = null;
        } catch (d) {}
      }
    },
    im = function (a) {
      a.D && (clearTimeout(a.D), (a.D = null));
    };
  Z.prototype.isActive = function () {
    return !!this.j;
  };
  var Ok = function (a) {
      var b = Nk(a);
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
        if ((b = b === 0)) {
          a = String(a.L).match(bd)[1] || null;
          !a && r.self && r.self.location && (a = r.self.location.protocol.slice(0, -1));
          b = !em.test(a ? a.toLowerCase() : "");
        }
        c = b;
      }
      return c;
    },
    Nk = function (a) {
      try {
        return (a.j ? a.j.readyState : 0) > 2 ? a.j.status : -1;
      } catch (b) {
        return -1;
      }
    };
  ui(function (a) {
    Z.prototype.H = a(Z.prototype.H);
  });
  var nm = function (a, b, c) {
    F.call(this);
    this.A = b || null;
    this.v = {};
    this.C = mm;
    this.G = a;
    if (!c) {
      this.j = null;
      this.j = new ee(G(this.l, this));
      am(this.j, "setTimeout");
      am(this.j, "setInterval");
      a = this.j;
      b = r.window || r.globalThis;
      c = [
        "requestAnimationFrame",
        "mozRequestAnimationFrame",
        "webkitAnimationFrame",
        "msRequestAnimationFrame",
      ];
      for (let d = 0; d < c.length; d++) {
        let e = c[d];
        c[d] in b && am(a, e);
      }
      a = this.j;
      ti = true;
      b = G(a.j, a);
      for (c = 0; c < ri.length; c++) ri[c](b);
      si.push(a);
    }
  };
  L(nm, F);
  var om = function (a, b) {
    id.call(this, "c");
    this.error = a;
    this.oa = b;
  };
  L(om, id);
  var pm = function (a, b) {
      return new nm(a, b, void 0);
    },
    mm = function (a, b, c, d) {
      if (d instanceof Map) {
        var e = {};
        d = x(d);
        var f = d.next(),
          g;
        try {
          for (; !f.done; f = d.next()) {
            var h = x(f.value);
            let k = h.next().value,
              l = h.next().value;
            e[k] = l;
          }
        } finally {
          f && !f.done && (g = d.return) && g.call(d);
        }
      } else e = d;
      g = new Z();
      gm.push(g);
      g.o.add("ready", g.X, true, void 0, void 0);
      Mk(g, a, b, c, e);
    },
    qm = function (a, b) {
      a.C = b;
    };
  nm.prototype.l = function (a, b) {
    a = a.error || a;
    b = b ? Uc(b) : {};
    a instanceof Error && Wc(b, ra(a));
    var c = ii(a);
    if (this.A)
      try {
        this.A(c, b, a);
      } catch (k) {}
    var d = c.message.substring(0, 1900);
    if (!(a instanceof p) || a.j) {
      var e = c.fileName,
        f = c.lineNumber;
      a = c.stack;
      try {
        let k = Fc(this.G, "script", e, "error", d, "line", f);
        a: {
          for (let m in this.v) {
            var g = false;
            break a;
          }
          g = true;
        }
        if (!g) {
          g = k;
          var h = Ec(this.v);
          k = Bc(g, h);
        }
        h = {};
        h.trace = a;
        if (b) for (let m in b) h["context." + m] = b[m];
        let l = Ec(h);
        this.C(k, "POST", l, this.D);
      } catch (k) {}
    }
    try {
      this.dispatchEvent(new om(c, b));
    } catch (k) {}
  };
  nm.prototype.K = function () {
    Gc(this.j);
    nm.Z.K.call(this);
  };
  var xm = function (a) {
    a = a === void 0 ? new rm() : a;
    F.call(this);
    var b = this;
    this.G = {};
    this.j = null;
    this.l = {};
    this.O = new sd(this);
    this.Hb = a.aa;
    this.U = a.L;
    this.va = a.J;
    this.Fb = a.D;
    this.Na = a.H;
    var c = a.ka;
    this.ta = (a.F || Yd)({ Pb: Tk, Ob: Uk, hb: [new Sl()] });
    this.Eb = a.O;
    this.V = new hk();
    var d = a.v ? a.v.create(this, a.o, void 0, void 0) : null,
      e = new Z();
    sm(this, c);
    this.J = d || new Pk(e, c, a.o, void 0, void 0);
    ve(this, this.J);
    this.v = a.l ? a.l : Bj(c, "docs-sup") + Bj(c, "docs-jepp") + "/jserror";
    if ((d = Bj(c, "jobset"))) this.v = Fc(this.v, "jobset", d);
    if ((d = Bj(c, "docs-ci"))) this.v = Fc(this.v, "id", d);
    d = Bj(c, "docs-pid");
    xj(c.get("docs-eaotx")) && d && (this.v = Fc(this.v, "ouid", d));
    this.X = Aj(c, "docs-srmoe") || 0;
    this.eb = xj(c.get("docs-oesf"));
    this.ba = Aj(c, "docs-srmour") || 0;
    this.fb = xj(c.get("docs-oursf"));
    d = this.ba > 0 && Math.random() < this.ba;
    this.Fa = xj(c.get("docs-wesf"));
    tm(this);
    Wi = function (g) {
      return um(b, g, "promise rejection");
    };
    e = Aj(c, "docs-srmdue") || 0;
    if (e > 0 && Math.random() < e) {
      let g = xj(c.get("docs-duesf"));
      bj = function (h) {
        um(b, h, "deferred error", g, "isDeferredUnhandledErrback");
      };
    } else bj = function () {};
    e = Aj(c, "docs-srmxue") || 0;
    e = e > 0 && Math.random() < e;
    var f = xj(c.get("docs-xduesf"));
    e &&
      Zh(function (g) {
        if (g) {
          var h = {};
          h = ((h.isXDeferredUnhandledErrback = "true"), h);
          f ? vm(b, g, h) : b.info(g, h);
        }
      });
    d &&
      ((d = new ee(function (g) {
        g = wm(g, "native promise rejection");
        var h = {};
        h = ((h.isUnhandledRejection = "true"), h);
        b.fb ? vm(b, g, h) : b.info(g, h);
      })),
      $l(d),
      ve(this, d));
    this.H = null;
    typeof document !== "undefined" &&
      document.body &&
      (this.H = de(function (g) {
        var h = {};
        h = ((h.isWizError = "true"), h);
        g = x(g.data.errors);
        var k = g.next(),
          l;
        try {
          for (; !k.done; k = g.next()) {
            let m = k.value.error;
            b.Fa ? vm(b, m, h) : b.info(m, h);
          }
        } finally {
          k && !k.done && (l = g.return) && l.call(g);
        }
      }));
    this.R = a.A;
    this.C = false;
    this.L = true;
    this.A = false;
    this.Db = (this.D = a.j !== void 0 ? a.j : Bj(c, "docs-jern")) && a.C ? this.D + ":" : "";
    this.ua = a.G;
    this.ja = a.P.concat(Object.values(Mh));
  };
  K(xm, F);
  var tm = function (a) {
      var b = b === void 0 ? false : b;
      if (ym) {
        if (zm != null) throw Error("X`" + zm.stack);
        throw Error("Y");
      }
      ym = true;
      zm = Error();
      a.j = pm(a.v, function (d, e, f) {
        return Am(a, d, e, f);
      });
      var c = {};
      a.va && (c["X-No-Abort"] = "1");
      a.j.D = c;
      qm(a.j, function (d, e, f, g) {
        a.L && Jk(a.J, d, e, f, g);
      });
      if (a.X > 0 && Math.random() < a.X) {
        c = {};
        let d = ((c.isWindowOnError = "true"), c);
        a.eb
          ? fi(function (e) {
              vm(a, e.error instanceof Error ? e.error : Error(e.message), d);
            })
          : fi(function (e) {
              a.log(e.error instanceof Error ? e.error : Error(e.message), d);
            });
      }
      we(a.O, a.j, "c", function (d) {
        var e = b;
        e = e === void 0 ? false : e;
        d.oa.severity = d.oa["severity-unprefixed"] || d.oa.severity;
        var f = d.oa.severity;
        (f = f == "fatal" || f == "postmortem") &&
          !a.Fb &&
          (a.Hb && !e ? a.V.notify(d, d.oa) : a.V.notify(void 0, d.oa));
        a.dispatchEvent(new zk(f ? "a" : "b", d.error, d.oa));
      });
    },
    sm = function (a, b) {
      b = new Sk(b);
      var c = b.j;
      for (let d in c) {
        let e = c[d];
        e && (a.l["expflag-" + d] = e.toString());
      }
      a.l.experimentIds = b.l.join(",");
    },
    Bm = function (a, b, c) {
      a.G[b] = c;
    },
    vm = function (a, b, c) {
      a.A = false;
      he(b, "fatal");
      if (!a.j) {
        if (b instanceof ge) throw b.M;
        throw U(b);
      }
      a.j.l(b, Cm(a, b, c));
      if (a.Na) {
        c = Cm(a, b, c);
        c.is_forceFatal = 1;
        let d;
        d = b instanceof ge ? b.M : b;
        Am(a, d, c);
        b = U(d);
        a = ", context:" + JSON.stringify(Cm(a, d, c));
        b.message += a;
        throw b;
      }
    },
    Dm = function (a, b) {
      a.A = false;
      he(b, "warning");
      a.j && a.j.l(b, Cm(a, b));
    };
  xm.prototype.info = function (a, b, c) {
    this.A = c || false;
    he(a, "incident");
    this.j && this.j.l(a, Cm(this, a, b));
  };
  xm.prototype.log = function (a, b, c) {
    this.A = !!c;
    he(a, "incident");
    this.j && this.j.l(a, Cm(this, a, b));
  };
  var wm = function (a, b) {
      if (a && typeof a === "object" && a.type === "error") {
        let c = a.error;
        a = JSON.stringify({
          error: c && c.message ? c.message : "Missing error cause.",
          stack: c && c.stack ? c.stack : "Missing error cause.",
          message: a.message,
          filename: a.filename,
          lineno: a.lineno,
          colno: a.colno,
          type: a.type,
        });
        b = Error("Z`" + b + "`" + a);
      } else
        b =
          typeof a === "string"
            ? Error("$`" + b + "`" + a)
            : typeof a === "number"
              ? Error("aa`" + b + "`" + a)
              : a == null
                ? Error("ba`" + b)
                : a;
      return b;
    },
    um = function (a, b, c, d, e) {
      d = d === void 0 ? true : d;
      b = wm(b, c);
      c = {};
      e && (c[e] = "true");
      d ? aa(b) : a.info(b, c);
    },
    Em = function (a, b) {
      var c = {};
      return function () {
        var d = Fe.apply(0, arguments);
        if (a.j)
          try {
            var e = b.apply(c, d);
          } catch (f) {
            throw (vm(a, f), U(f));
          }
        else e = b.apply(c, d);
        return e;
      };
    },
    Fm = function (a, b) {
      a.j &&
        b.then(void 0, function (c) {
          vm(a, c instanceof Error ? c : Error(c));
        });
      return b;
    },
    Cm = function (a, b, c) {
      b instanceof ge && (b = b.M);
      c = c ? Uc(c) : {};
      c.severity = ra(b).severity;
      (b = b && b.reportSeverity) && (c.reportSeverity = b);
      a.U && (c.errorGroupId = a.U);
      return c;
    },
    Gm = function (a, b) {
      if (
        a &&
        typeof a === "object" &&
        !a.message &&
        a.constructor &&
        a.constructor instanceof Function &&
        (a.constructor.name ? a.constructor.name : hi(a.constructor)) === "Object"
      ) {
        b.unknownErrorToStringResult = Object.prototype.toString.call(a);
        var c = JSON,
          d = c.stringify;
        let e = {},
          f = Object.keys(a),
          g = 0;
        for (let h = 0; h < f.length && g < 10; h++) {
          let k = f[h];
          try {
            typeof a[k] !== "function" && ((e[k] = String(a[k]).substring(0, 100)), g++);
          } catch (l) {}
        }
        b.unknownErrorContent = d.call(c, e);
      }
    },
    Am = function (a, b, c, d) {
      var e = a.C;
      try {
        a.S(b, c, d);
      } catch (f) {
        throw (
          e && !a.R && (a.L = false),
          (a.C = true),
          (c.provideLogDataError = f.message),
          c.severity || (c.severity = "fatal"),
          U(f)
        );
      } finally {
        if (
          ((c["severity-unprefixed"] = c.severity || "fatal"),
          (c.severity = a.Db + c["severity-unprefixed"]),
          !a.ua)
        )
          for (let f in c)
            typeof c[f] === "number" ||
              c[f] instanceof Number ||
              typeof c[f] === "boolean" ||
              c[f] instanceof Boolean ||
              a.ja.includes(f) ||
              (f in c && delete c[f]);
      }
    };
  xm.prototype.S = function (a, b, c) {
    Gm(c || a, b);
    for (var d in this.G)
      try {
        b[d] = this.G[d](a);
      } catch (f) {}
    b.errorReportTimeMs || (b.errorReportTimeMs = Date.now().toString());
    Object.assign(b, this.l);
    c = b.severity || "fatal";
    (d = b.reportSeverity || (a && a.reportSeverity)) && (d = ie(d.toLowerCase())) && (c = d);
    this.Eb || (c = Ql(this.ta, a, c, b));
    this.D && (b.reportName = this.D + "_" + c);
    b.isArrayPrototypeIntact = td().toString();
    if (!("WorkerGlobalScope" in r && self instanceof r.WorkerGlobalScope)) {
      try {
        var e = !!document.getElementById("docs-editor");
      } catch (f) {
        e = false;
      }
      b.isEditorElementAttached = e.toString();
    }
    b.documentCharacterSet = document.characterSet;
    b.origin = String(r.origin);
    e = a.stack || "";
    if (e.trim().length == 0 || e == "Not available") {
      b["stacklessError-reportingStack"] = li(xm.prototype.S);
      [a.message].concat(Oa(Object.keys(b)), Oa(Object.values(b))).some(function (f) {
        return f && f.includes("<eye3");
      }) || (b.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>");
    }
    this.C && !this.R
      ? ((this.L = this.A),
        c == "fatal" ? (c = "postmortem") : c == "incident" && (c = "warningafterdeath"))
      : c == "fatal" && (this.C = true);
    this.A = false;
    b.severity = c;
  };
  xm.prototype.K = function () {
    ym = false;
    if (this.H) {
      var a = this.H,
        b = x(a.et),
        c = b.next(),
        d;
      try {
        for (; !c.done; c = b.next()) {
          let f = c.value,
            g = $d(a.el, f);
          if (g && (ma(g, a.Qa), !g.length)) {
            var e = a.el;
            let h = (e.getAttribute("jsaction") || "").trim(),
              k = f + ":.CLIENT";
            h = h.replace(k + ";", "");
            h = h.replace(k, "");
            ce(e, h);
          }
        }
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
    }
    Hc(this.O, this.j, this.J);
    F.prototype.K.call(this);
  };
  var ym = false,
    zm = null,
    rm = function () {
      this.L = this.ka = void 0;
      this.H = this.aa = false;
      this.o = void 0;
      this.D = false;
      this.j = this.l = this.v = void 0;
      this.J = this.A = false;
      this.G = true;
      this.P = [];
      this.O = this.C = false;
      this.F = void 0;
    },
    Hm = function (a) {
      var b = vj();
      a.ka = b;
      return a;
    },
    Im = function (a) {
      a.F = Ve;
      return a;
    },
    Jm = function (a) {
      a.o = 5;
      return a;
    },
    Km = function (a) {
      a.D = true;
      return a;
    },
    Mm = function (a) {
      var b = new Lm();
      a.v = b;
      return a;
    },
    Nm = function (a, b) {
      a.l = b;
      return a;
    },
    Om = function (a) {
      var b = new rm();
      b.j = a;
      return b;
    },
    Pm = function (a) {
      a.A = true;
      return a;
    },
    Qm = function (a) {
      a.C = true;
      return a;
    };
  L(le, D);
  le.prototype.da = function (a, b, c) {
    this.U++;
    this.J[a] = [b, c];
    this.l ||
      (this.R && b
        ? this.j([a, c])
        : this.ba && !b
          ? this.A(c)
          : this.U == this.L.length && this.j(this.J));
    this.X && !b && (c = null);
    return c;
  };
  le.prototype.A = function (a) {
    le.Z.A.call(this, a);
    for (a = 0; a < this.L.length; a++) this.L[a].cancel();
  };
  var Sm = function (a, b, c, d, e, f, g, h, k) {
    Y.call(this, d, e, g, void 0, h, k);
    this.H = b;
    this.A = b + "-f";
    this.o = b + "-n";
    this.D = c;
    this.O = a;
    this.j = null;
    this.Fa = f || r.indexedDB || r.webkitIndexedDB;
    this.C = null;
    Rm(this);
  };
  K(Sm, Y);
  var Rm = function (a) {
      var b = a.Fa.open("DocsErrors", 1);
      b.onsuccess = function (c) {
        return void Tm(a, c);
      };
      b.onupgradeneeded = function (c) {
        c.target.transaction.db.createObjectStore("Errors", { keyPath: "key" });
      };
      b.onerror = function (c) {
        Um(a);
        a.S(c);
      };
      b.onblocked = function (c) {
        Um(a);
        Dm(a.O, Error("ca`" + je(c)));
      };
    },
    Tm = function (a, b) {
      var c = b.target.result,
        d = Vm(c, "readwrite");
      W(
        new le([Wm(a.A, d), Wm(a.o, d)]),
        function (e) {
          e[0][1] == null || e[1][1] == null
            ? ((e = d.objectStore("Errors")),
              e.put({ key: this.A, value: "1" }),
              e.put({ key: this.o, value: "1" }),
              (d.oncomplete = G(this.qb, this, c)))
            : this.qb(c);
        },
        a,
      );
    };
  n = Sm.prototype;
  n.qb = function (a) {
    this.j = a;
    this.G();
  };
  n.Oa = function (a) {
    if (!this.j) return this.D.Oa(a);
    if (!r.navigator.locks) return a();
    this.C || (this.C = new AbortController());
    return hd("idb-es-send-lock-" + this.H, a, this.C);
  };
  n.Ea = function (a) {
    if (!this.j) return this.D.Ea(a);
    var b = Vm(this.j, "readwrite"),
      c = new D();
    W(
      Wm(this.o, b),
      function (d) {
        if (d) {
          var e = b.objectStore("Errors");
          e.put({ key: this.o, value: String(d + 1) });
          e.put({ key: this.H + "-e-" + d, value: JSON.stringify(a) });
          b.oncomplete = G(c.j, c);
        } else c.j();
      },
      this,
    );
    return c;
  };
  n.qa = function () {
    if (!this.j) return this.D.qa();
    var a = Vm(this.j, "readwrite"),
      b = new D();
    W(
      new le([Wm(this.A, a), Wm(this.o, a)]),
      function (c) {
        var d = c[0][1];
        c = c[1][1];
        if (!d || c <= d) b.j();
        else {
          var e = a.objectStore("Errors");
          e["delete"](this.H + "-e-" + d);
          d++;
          e.put({ key: this.A, value: String(d) });
          W(
            Xm(this, a),
            function (f) {
              f == 0 && (e.put({ key: this.A, value: "1" }), e.put({ key: this.o, value: "1" }));
              a.oncomplete = G(b.j, b);
            },
            this,
          );
        }
      },
      this,
    );
    return b;
  };
  n.za = function () {
    if (!this.j) return this.D.za();
    var a = Vm(this.j, "readonly");
    return W(
      new le([Wm(this.A, a), Wm(this.o, a)]),
      function (b) {
        var c = b[0][1],
          d = b[1][1];
        if (!c) return null;
        var e = d - c;
        return e < 1
          ? null
          : W(
              Ym(this.H + "-e-" + c, a),
              function (f) {
                return f && (f = JSON.parse(f))
                  ? ((f.errorSender_frontIndex = c),
                    (f.errorSender_nextIndex = d),
                    (f.errorSender_queueSize = e),
                    f)
                  : W(this.qa(), this.za, this);
              },
              this,
            );
      },
      this,
    );
  };
  n.Ba = function () {
    if (!this.j) return this.D.Ba();
    var a = Vm(this.j, "readonly");
    return Xm(this, a);
  };
  var Um = function (a) {
    a.j && (a.j.close(), (a.j = null));
  };
  Sm.prototype.S = function (a) {
    Dm(this.O, Error("da`" + je(a)));
  };
  var Xm = function (a, b) {
      return W(new le([Wm(a.A, b), Wm(a.o, b)]), function (c) {
        return c[1][1] - c[0][1];
      });
    },
    Wm = function (a, b) {
      return W(Ym(a, b), function (c) {
        c = parseInt(c, 10);
        return c < 0 || isNaN(c) ? null : c;
      });
    },
    Ym = function (a, b) {
      b = b.objectStore("Errors");
      var c = new D();
      b.get(a).onsuccess = function (d) {
        d.target.result ? c.j(d.target.result.value) : c.j(null);
      };
      return c;
    },
    Vm = function (a, b) {
      var c = ["Errors"];
      try {
        return a.transaction(c, b);
      } catch (d) {
        b = a.objectStoreNames;
        let e = [];
        for (let f = 0; f < b.length; f++) e.push(b.item(f));
        throw U(d, {
          databaseName: a.name,
          databaseObjectStores: e.toString(),
          databaseVersion: a.version.toString(),
          transactionObjectStores: c.toString(),
        });
      }
    };
  Sm.prototype.Ua = function () {
    return "IdbErrorSender";
  };
  Sm.prototype.K = function () {
    this.C && this.C.abort();
    Um(this);
    Y.prototype.K.call(this);
  };
  var Zm = function () {
    A.call(this);
    this.j = {};
  };
  K(Zm, A);
  Zm.prototype.xa = function (a, b, c) {
    var d = this;
    if (typeof a === "function") c && (a = G(a, c));
    else if (a && typeof a.handleEvent == "function") a = G(a.handleEvent, a);
    else throw Error("O");
    var e = new $m();
    b = Ck(function () {
      var f = a,
        g = e.j;
      g !== null && delete d.j[g];
      f();
    }, b);
    this.j[b] = true;
    return (e.j = b);
  };
  Zm.prototype.clear = function (a) {
    a !== null && delete this.j[a];
    r.clearTimeout(a);
  };
  Zm.prototype.K = function () {
    for (let a in this.j) this.clear(Number(a));
    A.prototype.K.call(this);
  };
  var $m = function () {
    this.j = null;
  };
  var cn = function (a, b, c, d, e, f, g, h) {
    Y.call(this, a, c, d, e, f, g, h === void 0 ? true : h);
    var k = this;
    this.O = b || "default";
    this.H = b + "-v";
    this.D = b + "-f";
    this.o = b + "-n";
    this.j = r.localStorage;
    a = an(this, this.H);
    if (!a || a < 1) {
      this.j.setItem(this.H, "1");
      this.j.setItem(this.D, "1");
      this.j.setItem(this.o, "1");
    }
    this.S = false;
    this.C = this.A = null;
    we(
      we(this.R, r.window, "beforeprint", function () {
        return bn(k);
      }),
      r.window,
      "afterprint",
      function () {
        k.S = false;
        k.A && (k.A.j(), (k.A = null));
      },
    );
    this.G();
    this.ja = new Zm();
    ve(this, this.ja);
    this.ja.xa(this.Fa, 3e4, this);
  };
  K(cn, Y);
  var bn = function (a) {
    a.S = true;
    a.C && (a.C.abort(), (a.C = null));
    a.A = new D();
    W(a.A, function () {
      return a.G();
    });
  };
  n = cn.prototype;
  n.Oa = function (a) {
    var b = this;
    if (!r.navigator.locks) return a();
    if (this.S) return this.A;
    this.C || (this.C = new AbortController());
    return hd("lses-send-lock-" + (this.O + "-e-"), a, this.C, function () {
      return b.A || E();
    });
  };
  n.Ea = function (a) {
    var b = an(this, this.o);
    if (!b || an(this, this.H) != 1) return E();
    try {
      {
        this.j.setItem(this.o, String(b + 1));
        this.j.setItem(this.O + "-e-" + b, JSON.stringify(a));
      }
    } catch (c) {}
    return E();
  };
  n.qa = function () {
    var a = an(this, this.D);
    if (!a || an(this, this.H) != 1) return E();
    this.j.removeItem(this.O + "-e-" + a);
    a++;
    this.j.setItem(this.D, String(a));
    return W(
      this.Ba(),
      function (b) {
        b == 0 && (this.j.setItem(this.D, "1"), this.j.setItem(this.o, "1"));
      },
      this,
    );
  };
  n.za = function () {
    var a = an(this, this.D);
    return a && an(this, this.H) == 1
      ? W(
          this.Ba(),
          function (b) {
            if (b < 1) return null;
            try {
              let c = this.j.getItem(this.O + "-e-" + a);
              if (c) {
                let d = JSON.parse(c);
                if (d)
                  return (
                    (d.errorSender_frontIndex = a),
                    (d.errorSender_nextIndex = an(this, this.o)),
                    (d.errorSender_queueSize = b),
                    d
                  );
              }
            } catch (c) {}
            return W(this.qa(), this.za, this);
          },
          this,
        )
      : E(null);
  };
  n.Ba = function () {
    return E(an(this, this.o) - an(this, this.D));
  };
  var an = function (a, b) {
      return (a = a.j.getItem(b)) ? dn(a) : null;
    },
    dn = function (a) {
      a = parseInt(a, 10);
      return a < 0 || isNaN(a) ? null : a;
    };
  cn.prototype.Fa = function () {
    if (an(this, this.o) && an(this, this.H) == 1) {
      var a = this.O + "-e-";
      for (let b = 0, c = this.j.length; b < c; ++b) {
        let d = this.j.key(b);
        if (d && d.lastIndexOf(a, 0) == 0) {
          let e = dn(d.substring(a.length)),
            f = an(this, this.o);
          f && e && e >= f && this.j.removeItem(d);
        }
      }
    }
  };
  cn.prototype.Ua = function () {
    return "LocalStorageErrorSender";
  };
  cn.prototype.K = function () {
    Y.prototype.K.call(this);
  };
  var en = function (a, b) {
    this.l = a;
    this.j = b;
  };
  en.prototype.create = function (a, b, c, d) {
    a: {
      try {
        let f = this.j.get("docs-lfuls"),
          g = r.localStorage;
        if (
          g &&
          (f || Cf || Df || Af) &&
          (g.setItem("test", "test"),
          g.getItem("test") == "test" && (g.removeItem("test"), g.getItem("test") == null))
        ) {
          var e = true;
          break a;
        }
      } catch (f) {}
      e = false;
    }
    return e ? new cn(new Z(), this.l, this.j, b, void 0, c, d) : null;
  };
  var fn = function (a, b, c) {
    this.message = a;
    this.ports = b;
    this.j = c || null;
  };
  fn.prototype.toString = function () {
    return "{message: " + this.message + ", ports: " + this.ports + "}";
  };
  var gn = function (a, b) {
    A.call(this);
    this.l = b;
    this.j = new sd(this);
    ve(this, this.j);
    we(this.j, a, "message", this.o);
  };
  K(gn, A);
  gn.prototype.o = function (a) {
    a = a.j;
    a.ports && a.ports.length && hn(this, a);
  };
  var hn = function (a, b) {
    var c = b.ports,
      d = c[0];
    jn(a.l, new fn(b.data, c.slice(1), b)).then(function (e) {
      d.postMessage(e.message, e.ports);
    });
  };
  var kn = function (a) {
      this.l = rg;
      this.j = a;
    },
    jn = function (a, b) {
      var c = new a.l(b.message);
      return Hi(a.j(c, b.ports, b.j)).then(function (d) {
        return d instanceof fn ? new fn(Gb(d.message), d.ports) : new fn(Gb(d), []);
      });
    };
  var ln = function (a, b) {
      b = b === void 0 ? {} : b;
      var c = a instanceof Request ? a.clone() : new Request(a, b);
      return r.fetch(c.clone()).then(function (d) {
        return d.status !== 200 && d.status !== 400
          ? d
          : ue(d)
              .then(function (e) {
                if (!e) return d;
                var f = new Xc(c.url);
                f.o.set("token", e);
                f.o.set("at", e);
                var g = {
                  cache: c.cache,
                  credentials: c.credentials,
                  headers: c.headers,
                  integrity: c.integrity,
                  method: c.method,
                  mode: c.mode,
                  redirect: c.redirect,
                  referrer: c.referrer,
                };
                return c.method === "GET" || c.method === "HEAD"
                  ? r.fetch(new Request(String(f), g))
                  : (String(c.headers.get("Content-Type")).includes("multipart/form-data")
                      ? c
                          .clone()
                          .formData()
                          .then(function (h) {
                            h.has("token") &&
                              e &&
                              (g.headers.delete("Content-Type"), h.set("token", e));
                            return h;
                          })
                      : c.clone().arrayBuffer()
                    ).then(function (h) {
                      return r.fetch(new Request(String(f), Object.assign(g, { body: h })));
                    });
              })
              .catch(function () {
                return d;
              });
      });
    },
    me = function (a) {
      var b = new Map(),
        c = x([Sj]),
        d = c.next(),
        e;
      try {
        for (; !d.done; d = c.next()) {
          let f = d.value,
            g = new f();
          b.set(g.constructor.Ha, f);
        }
      } finally {
        d && !d.done && (e = c.return) && e.call(c);
      }
      return a
        .clone()
        .text()
        .then(function (f) {
          if (!f || !f.startsWith(")]}'\n")) return null;
          f = JSON.parse(f.substring(5));
          return Array.isArray(f)
            ? f.reduce(function (g, h) {
                if (!Array.isArray(h)) return g;
                var k = b.get(h[0]);
                if (!k) return g;
                g.push(new k(h));
                return g;
              }, [])
            : null;
        });
    };
  var mn = function (a, b) {
    this.j = a;
    this.l = b;
  };
  mn.prototype.Y = function (a) {
    var b = this;
    a = a === void 0 ? [] : a;
    var c = new Set(a);
    return this.j.keys().then(function (d) {
      return Promise.all(
        d.map(function (e) {
          return nn(b, e, c);
        }),
      ).then();
    });
  };
  var nn = function (a, b, c) {
    return b.startsWith(a.l) && !c.has(b) ? a.j.delete(b).then(function () {}) : Promise.resolve();
  };
  var on = Object.values({
      oP: 0,
      Zb: 295,
      ac: 286,
      bc: 296,
      cc: 77,
      dc: 78,
      ec: 79,
      fc: 290,
      hc: 80,
      jc: 524,
      kc: 720,
      lc: 989,
      mc: 85,
      nc: 596,
      oc: 540,
      qc: 401,
      rc: 86,
      sc: 115,
      tc: 116,
      uc: 285,
      vc: 488,
      wc: 464,
      xc: 489,
      yc: 153,
      zc: 88,
      Ac: 89,
      Bc: 90,
      Cc: 483,
      Dc: 484,
      Ec: 872,
      Fc: 123,
      Gc: 947,
      Hc: 1039,
      Ic: 993,
      Jc: 1188,
      Kc: 1189,
      Lc: 1016,
      Mc: 1309,
      Nc: 1241,
      Oc: 1242,
      Pc: 1243,
      Qc: 1245,
      Rc: 1244,
      Sc: 1246,
      Tc: 1462,
      Uc: 1247,
      Vc: 1248,
      Wc: 1249,
      Xc: 1250,
      Yc: 1251,
      Zc: 1460,
      ad: 1252,
      bd: 1254,
      cd: 1253,
      dd: 1255,
      ed: 1240,
      fd: 1256,
      gd: 1258,
      hd: 1239,
      jd: 1257,
      kd: 1259,
      ld: 1260,
      md: 1261,
      nd: 1262,
      od: 1263,
      pd: 1264,
      qd: 1265,
      rd: 1268,
      sd: 1269,
      td: 1266,
      ud: 1267,
      vd: 1270,
      wd: 1271,
      xd: 1272,
      yd: 1273,
      zd: 1274,
      Ad: 1275,
      Bd: 1343,
      Cd: 1276,
      Dd: 1277,
      Ed: 1278,
      Fd: 1280,
      Gd: 1279,
      Hd: 1281,
      Id: 1344,
      Jd: 1282,
      Kd: 1283,
      Ld: 1284,
      Md: 1285,
      Nd: 1461,
      Od: 1331,
      Pd: 1465,
      Qd: 1286,
      Rd: 1287,
      Sd: 1288,
      Td: 1289,
      Ud: 1290,
      Vd: 1291,
      Wd: 1292,
      Xd: 1293,
      Yd: 1294,
      Zd: 1295,
      ae: 1298,
      be: 1296,
      ce: 1297,
      de: 1299,
      ee: 1300,
      fe: 1301,
      ge: 1302,
      he: 1303,
      ie: 1304,
      je: 1305,
      ke: 1306,
      le: 1307,
      me: 1308,
      ne: 959,
      oe: 571,
      pe: 297,
      qe: 84,
      re: 150,
      se: 149,
      te: 898,
      ue: 185,
      ve: 308,
      we: 351,
      xe: 589,
      ye: 702,
      ze: 466,
      Ae: 146,
      Be: 1220,
      Ce: 91,
      De: 92,
      Ee: 1061,
      Fe: 552,
      Ge: 544,
      He: 731,
      Ie: 703,
      Je: 93,
      Ke: 128,
      Le: 707,
      Me: 151,
      Ne: 138,
      Oe: 140,
      Pe: 139,
      Qe: 94,
      Re: 368,
      Se: 572,
      Te: 95,
      Ue: 962,
      Ve: 118,
      We: 96,
      Xe: 581,
      Ye: 1180,
      Ze: 97,
      af: 99,
      bf: 98,
      df: 100,
      ef: 960,
      ff: 206,
      gf: 882,
      hf: 102,
      jf: 141,
      kf: 49,
      lf: 112,
      mf: 105,
      nf: 113,
      pf: 106,
      qf: 152,
      rf: 248,
      sf: 121,
      tf: 107,
      uf: 108,
      vf: 122,
      wf: 114,
      xf: 109,
      yf: 119,
      zf: 293,
      Af: 184,
      Bf: 142,
      Cf: 143,
      Df: 587,
      Ef: 804,
      Ff: 827,
      Gf: 1219,
      Hf: 110,
      If: 111,
      Jf: 1190,
      Kf: 117,
      Lf: 299,
      Mf: 124,
      Nf: 126,
      Of: 398,
      Pf: 245,
      Qf: 1191,
      Rf: 131,
      cg: 766,
      fu: 1310,
      Lx: 1342,
      Mx: 1311,
      eg: 770,
      mh: 640,
      nh: 641,
      oh: 310,
      ph: 311,
      qh: 642,
      rh: 312,
      sh: 626,
      th: 627,
      uh: 628,
      wh: 629,
      xh: 643,
      yh: 644,
      zh: 622,
      Ah: 623,
      Bh: 624,
      Ch: 625,
      Dh: 621,
      Eh: 314,
      Fh: 645,
      Gh: 646,
      Hh: 647,
      Ih: 648,
      Jh: 649,
      Kh: 315,
      Lh: 650,
      Mh: 630,
      Nh: 631,
      Oh: 769,
      Ph: 632,
      Qh: 633,
      Rh: 634,
      Sh: 651,
      Th: 316,
      Uh: 317,
      Vh: 318,
      Wh: 652,
      Xh: 319,
      Yh: 653,
      Zh: 654,
      ai: 655,
      bi: 320,
      ci: 322,
      di: 323,
      ei: 324,
      fi: 656,
      gi: 657,
      hi: 658,
      ii: 659,
      ji: 660,
      ki: 661,
      li: 662,
      mi: 663,
      ni: 664,
      oi: 665,
      pi: 666,
      ri: 667,
      si: 668,
      ti: 669,
      ui: 670,
      wi: 672,
      xi: 673,
      yi: 674,
      zi: 675,
      Ai: 676,
      Bi: 677,
      Ci: 678,
      Di: 679,
      Ei: 680,
      Fi: 681,
      Gi: 682,
      Hi: 685,
      Ii: 686,
      Ji: 687,
      Ki: 688,
      Li: 689,
      Mi: 690,
      Ni: 691,
      Oi: 692,
      Pi: 693,
      Qi: 694,
      Ri: 695,
      Si: 696,
      Ti: 697,
      Ui: 698,
      Vi: 325,
      Xi: 326,
      Yi: 327,
      Zi: 328,
      aj: 329,
      bj: 330,
      cj: 331,
      dj: 332,
      ej: 334,
      fj: 335,
      gj: 447,
      hj: 448,
      ij: 449,
      jj: 450,
      kj: 451,
      lj: 452,
      mj: 459,
      nj: 453,
      oj: 454,
      pj: 455,
      qj: 456,
      rj: 457,
      sj: 458,
      tj: 446,
      uj: 338,
      vj: 339,
      wj: 341,
      xj: 342,
      yj: 815,
      zj: 343,
      Aj: 344,
      Bj: 1213,
      Cj: 345,
      Dj: 346,
      Ej: 347,
      Fj: 348,
      Gj: 349,
      Jj: 36,
      vG: 237,
      aI: 1124,
      CJ: 721,
      DJ: 722,
      QL: 223,
      RL: 224,
      bg: 764,
      bk: 1470,
      Bk: 7,
      Ck: 1231,
      Dk: 182,
      rp: 870,
      Er: 59,
      Fr: 35,
      Sr: 1339,
      Gs: 1451,
      EG: 292,
      FG: 14,
      GG: 32,
      iI: 782,
      qL: 159,
      DL: 949,
      EL: 935,
      FL: 950,
      GL: 881,
      HL: 951,
      KL: 3,
      kP: 1450,
      Gg: 161,
      Ig: 469,
      Kg: 463,
      Ng: 445,
      Pg: 262,
      Vg: 423,
      Yg: 252,
      bh: 162,
      ih: 133,
      kh: 467,
      Xj: 20,
      sp: 2,
      Wq: 732,
      Yq: 759,
      Zq: 733,
      cr: 758,
      Is: 1174,
      Ns: 1173,
      tt: 1224,
      ut: 984,
      vt: 201,
      cI: 877,
      mI: 165,
      hJ: 16,
      wJ: 772,
      bK: 878,
      vK: 208,
      wK: 287,
      UM: 68,
      VM: 73,
      WM: 595,
      XM: 71,
      YM: 70,
      ZM: 72,
      yN: 781,
      AN: 773,
      HN: 755,
      IN: 771,
      JN: 876,
      RN: 729,
      SN: 26,
      TN: 369,
      UN: 374,
      VN: 370,
      WN: 371,
      XN: 375,
      YN: 376,
      ZN: 372,
      aO: 377,
      bO: 373,
      cO: 21,
      dO: 31,
      eO: 30,
      fO: 219,
      gO: 58,
      hO: 221,
      iO: 749,
      jO: 750,
      cP: 918,
      tP: 709,
      vP: 8,
      yP: 44,
      FP: 438,
      GP: 1236,
      HP: 43,
      IP: 580,
      KP: 166,
      SP: 768,
      wt: 883,
      xt: 963,
      yt: 605,
      zt: 1333,
      At: 392,
      Bt: 1473,
      Ct: 1200,
      Dt: 1474,
      Et: 748,
      Ft: 1053,
      Gt: 767,
      Ht: 209,
      It: 796,
      Jt: 618,
      Kt: 801,
      Lt: 590,
      Mt: 591,
      Nt: 592,
      Ot: 1088,
      Pt: 1150,
      Qt: 1101,
      Rt: 1109,
      St: 1222,
      Tt: 1085,
      Ut: 63,
      Vt: 1317,
      Wt: 238,
      Xt: 158,
      Yt: 730,
      Zt: 777,
      au: 780,
      bu: 62,
      cu: 425,
      du: 426,
      eu: 427,
      gu: 439,
      hu: 440,
      iu: 409,
      ju: 1121,
      ku: 939,
      lu: 938,
      mu: 1083,
      nu: 954,
      ou: 884,
      pu: 403,
      qu: 1332,
      ru: 570,
      su: 546,
      tu: 547,
      uu: 789,
      vu: 1322,
      wu: 493,
      xu: 897,
      yu: 1323,
      zu: 289,
      Au: 1192,
      Bu: 408,
      Cu: 965,
      Du: 225,
      Eu: 226,
      Fu: 227,
      Gu: 228,
      Hu: 229,
      Iu: 543,
      Ju: 541,
      Ku: 608,
      Lu: 574,
      Mu: 575,
      Nu: 1112,
      Ou: 1234,
      Pu: 421,
      Qu: 202,
      Ru: 462,
      Su: 1071,
      Tu: 1057,
      Uu: 1075,
      Vu: 942,
      Wu: 943,
      Xu: 1076,
      Yu: 944,
      Zu: 186,
      av: 1233,
      bv: 491,
      cv: 890,
      dv: 61,
      ev: 404,
      fv: 406,
      gv: 407,
      hv: 434,
      jv: 435,
      kv: 441,
      lv: 538,
      mv: 195,
      nv: 196,
      ov: 1158,
      pv: 1159,
      qv: 1160,
      rv: 300,
      sv: 1172,
      tv: 1167,
      uv: 1168,
      vv: 1312,
      wv: 1161,
      xv: 1171,
      yv: 1162,
      zv: 1163,
      Av: 1164,
      Bv: 1170,
      Cv: 1175,
      Dv: 1165,
      Ev: 1237,
      Fv: 1169,
      Gv: 985,
      Hv: 986,
      Iv: 1325,
      Jv: 1324,
      Kv: 1326,
      Lv: 1327,
      Mv: 1328,
      Nv: 1166,
      Ov: 1329,
      Pv: 1330,
      Qv: 1467,
      Rv: 753,
      Sv: 723,
      Tv: 814,
      Uv: 817,
      Vv: 800,
      Wv: 909,
      Xv: 910,
      Yv: 948,
      Zv: 889,
      aw: 1059,
      bw: 754,
      cw: 738,
      dw: 891,
      ew: 892,
      fw: 200,
      gw: 821,
      hw: 820,
      iw: 1091,
      jw: 1092,
      kw: 1093,
      lw: 1094,
      mw: 1095,
      nw: 885,
      ow: 916,
      pw: 1084,
      qw: 500,
      rw: 1151,
      sw: 1152,
      tw: 1153,
      uw: 1154,
      ww: 1155,
      xw: 1156,
      yw: 1157,
      zw: 617,
      Aw: 243,
      Bw: 831,
      Cw: 981,
      Dw: 982,
      Ew: 1024,
      Fw: 1341,
      Gw: 486,
      Hw: 865,
      Iw: 856,
      Jw: 857,
      Kw: 1006,
      Lw: 1086,
      Mw: 1176,
      Nw: 1104,
      Ow: 1048,
      Pw: 1049,
      Qw: 1050,
      Rw: 1051,
      Sw: 1052,
      Tw: 893,
      Uw: 956,
      Vw: 1105,
      Ww: 735,
      Xw: 1079,
      Yw: 1195,
      Zw: 845,
      bx: 832,
      gx: 839,
      hx: 838,
      ix: 833,
      jx: 834,
      kx: 835,
      lx: 836,
      mx: 837,
      nx: 987,
      ox: 700,
      qx: 394,
      sx: 175,
      tx: 1227,
      ux: 1228,
      vx: 1229,
      wx: 1230,
      xx: 778,
      yx: 525,
      zx: 873,
      Ax: 874,
      Bx: 875,
      Cx: 728,
      Dx: 966,
      Ex: 994,
      Fx: 1216,
      Gx: 1466,
      Hx: 1468,
      Ix: 961,
      Jx: 302,
      Kx: 1054,
      Nx: 756,
      Ox: 894,
      Px: 895,
      Qx: 1055,
      Rx: 779,
      Sx: 1082,
      Tx: 1056,
      Ux: 1181,
      Vx: 983,
      Wx: 566,
      Xx: 869,
      Yx: 1063,
      Zx: 535,
      by: 470,
      ey: 846,
      gy: 847,
      hy: 848,
      iy: 1193,
      jy: 588,
      ky: 548,
      ly: 1313,
      my: 1314,
      ny: 1315,
      oy: 65,
      py: 762,
      qy: 1316,
      sy: 397,
      ty: 978,
      uy: 979,
      vy: 1318,
      wy: 980,
      xy: 840,
      yy: 172,
      zy: 171,
      Ay: 841,
      By: 726,
      Cy: 917,
      Dy: 135,
      Ey: 1007,
      Fy: 1008,
      Gy: 1009,
      Hy: 1010,
      Iy: 1011,
      Jy: 1012,
      Ky: 1013,
      Ly: 757,
      My: 1210,
      Ny: 1026,
      Oy: 1028,
      Py: 1029,
      Qy: 1211,
      Ry: 1031,
      Sy: 1034,
      Ty: 1212,
      Uy: 1035,
      Vy: 277,
      Wy: 1194,
      Xy: 1196,
      Yy: 1197,
      Zy: 1198,
      az: 1199,
      bz: 235,
      cz: 828,
      dz: 957,
      ez: 247,
      fz: 958,
      gz: 708,
      hz: 259,
      iz: 264,
      jz: 265,
      kz: 266,
      lz: 267,
      mz: 268,
      nz: 269,
      oz: 1073,
      pz: 968,
      qz: 1070,
      rz: 1058,
      sz: 926,
      uz: 924,
      vz: 923,
      wz: 964,
      xz: 1148,
      yz: 899,
      zz: 705,
      Az: 970,
      Bz: 971,
      Cz: 972,
      Dz: 900,
      Ez: 946,
      Fz: 901,
      Gz: 902,
      Iz: 973,
      Jz: 974,
      Kz: 903,
      Lz: 975,
      Mz: 976,
      Nz: 977,
      Oz: 765,
      Pz: 1202,
      Qz: 279,
      Rz: 830,
      Sz: 1040,
      Tz: 1e3,
      Uz: 1001,
      Vz: 1002,
      Wz: 1003,
      Xz: 1004,
      Yz: 1005,
      Zz: 1041,
      aA: 1042,
      bA: 1043,
      cA: 1044,
      dA: 1045,
      eA: 1046,
      fA: 1047,
      gA: 829,
      hA: 487,
      iA: 743,
      jA: 727,
      kA: 189,
      lA: 190,
      mA: 428,
      nA: 429,
      oA: 784,
      pA: 430,
      qA: 1062,
      rA: 239,
      sA: 1232,
      tA: 1235,
      uA: 746,
      vA: 747,
      wA: 597,
      xA: 431,
      yA: 619,
      zA: 790,
      AA: 797,
      BA: 791,
      CA: 798,
      DA: 432,
      EA: 551,
      FA: 1089,
      GA: 1078,
      HA: 912,
      IA: 701,
      JA: 988,
      KA: 1183,
      LA: 577,
      MA: 1338,
      NA: 736,
      OA: 1103,
      PA: 1334,
      QA: 1335,
      RA: 745,
      SA: 813,
      TA: 1336,
      UA: 1337,
      VA: 422,
      WA: 744,
      XA: 718,
      YA: 761,
      ZA: 952,
      aB: 799,
      bB: 280,
      cB: 387,
      dB: 609,
      eB: 214,
      fB: 212,
      gB: 211,
      hB: 168,
      iB: 905,
      jB: 906,
      kB: 907,
      lB: 908,
      mB: 904,
      nB: 911,
      oB: 304,
      pB: 154,
      qB: 137,
      rB: 230,
      sB: 395,
      tB: 402,
      uB: 390,
      vB: 389,
      wB: 442,
      xB: 1238,
      yB: 1217,
      zB: 1080,
      AB: 388,
      BB: 1081,
      CB: 1214,
      DB: 1074,
      EB: 783,
      FB: 990,
      GB: 991,
      HB: 967,
      IB: 995,
      JB: 996,
      KB: 997,
      LB: 998,
      MB: 969,
      NB: 530,
      OB: 531,
      PB: 532,
      QB: 521,
      RB: 803,
      SB: 203,
      TB: 953,
      UB: 410,
      VB: 496,
      WB: 482,
      XB: 298,
      YB: 562,
      ZB: 481,
      aC: 788,
      bC: 270,
      cC: 257,
      dC: 282,
      eC: 919,
      fC: 914,
      gC: 920,
      hC: 921,
      iC: 922,
      jC: 1472,
      kC: 1479,
      lC: 1478,
      mC: 842,
      nC: 843,
      oC: 945,
      pC: 844,
      qC: 715,
      rC: 716,
      sC: 717,
      tC: 193,
      uC: 792,
      vC: 1122,
      wC: 1123,
      xC: 852,
      yC: 490,
      zC: 64,
      AC: 812,
      BC: 719,
      CC: 941,
      DC: 414,
      EC: 934,
      FC: 582,
      GC: 583,
      HC: 867,
      IC: 927,
      JC: 928,
      KC: 929,
      LC: 930,
      MC: 931,
      NC: 1060,
      OC: 933,
      PC: 888,
      QC: 173,
      RC: 443,
      SC: 1127,
      TC: 1130,
      UC: 1131,
      VC: 1132,
      WC: 1135,
      XC: 1137,
      YC: 1138,
      ZC: 1143,
      aD: 1144,
      bD: 1145,
      cD: 1147,
      dD: 220,
      eD: 218,
      fD: 724,
      gD: 1226,
      hD: 536,
      iD: 274,
      jD: 564,
      kD: 864,
      lD: 1111,
      mD: 568,
      nD: 512,
      oD: 232,
      pD: 537,
      qD: 474,
      rD: 553,
      sD: 1469,
      tD: 565,
      uD: 567,
      vD: 271,
      wD: 1038,
      xD: 925,
      yD: 742,
      zD: 751,
      AD: 739,
      BD: 740,
      CD: 752,
      DD: 741,
      ED: 411,
      FD: 420,
      GD: 417,
      HD: 418,
      ID: 419,
      JD: 413,
      KD: 412,
      LD: 936,
      MD: 593,
      ND: 1218,
      OD: 937,
      PD: 915,
      QD: 868,
      RD: 517,
      SD: 424,
      TD: 508,
      UD: 509,
      VD: 246,
      WD: 793,
      XD: 795,
      YD: 855,
      ZD: 880,
      aE: 816,
      bE: 1185,
      cE: 1186,
      dE: 1187,
      eE: 1184,
      fE: 1177,
      gE: 1178,
      hE: 1179,
      iE: 1471,
      jE: 1182,
      kE: 358,
      lE: 896,
      mE: 579,
      nE: 501,
      pE: 585,
      qE: 584,
      rE: 586,
      sE: 174,
      tE: 822,
      uE: 823,
      vE: 824,
      wE: 825,
      xE: 826,
      yE: 818,
      zE: 1014,
      AE: 940,
      BE: 1015,
      CE: 301,
      DE: 992,
      EE: 294,
      FE: 236,
      GE: 863,
      HE: 244,
      IE: 263,
      JE: 594,
      KE: 1477,
      LE: 955,
      ME: 234,
      NE: 737,
      OE: 802,
      PE: 886,
      QE: 480,
      RE: 854,
      SE: 853,
      TE: 871,
      UE: 1215,
      VE: 1321,
      WE: 1064,
      XE: 1114,
      YE: 1115,
      ZE: 1319,
      aF: 1077,
      bF: 794,
      cF: 305,
      dF: 1066,
      eF: 391,
      fF: 1072,
      gF: 1116,
      hF: 1117,
      iF: 1149,
      jF: 352,
      kF: 306,
      lF: 461,
      mF: 850,
      nF: 1320,
      oF: 1065,
      pF: 1475,
      qF: 1476,
      rF: 1203,
      sF: 1204,
      tF: 1201,
      uF: 1205,
      vF: 1206,
      wF: 1207,
      xF: 1208,
      yF: 1209,
      zF: 1087,
      AF: 787,
      BF: 786,
      CF: 284,
      DF: 1221,
      EF: 699,
      FF: 611,
      GF: 612,
      HF: 613,
      IF: 614,
      JF: 615,
      KF: 616,
      LF: 523,
      MF: 393,
      NF: 216,
      OF: 495,
      PF: 505,
      QF: 217,
      RF: 511,
      SF: 520,
      TF: 516,
      UF: 503,
      VF: 506,
      WF: 1090,
      XF: 763,
      YF: 887,
      ZF: 1106,
      aG: 1096,
      bG: 1107,
      cG: 1108,
      dG: 1097,
      eG: 1098,
      fG: 1099,
      gG: 1113,
      hG: 1100,
      iG: 1017,
      jG: 1018,
      kG: 1019,
      lG: 1020,
      mG: 1021,
      nG: 1069,
      oG: 1022,
      pG: 1119,
      qG: 1102,
      rG: 1023,
      sG: 1067,
      tG: 1068,
      uG: 1120,
      ZK: 858,
      zO: 365,
      AO: 710,
      BO: 711,
      CO: 364,
      DO: 573,
      EO: 360,
      FO: 359,
      GO: 361,
      HO: 362,
      IO: 363,
      JO: 713,
      KO: 712,
      LO: 366,
      qM: 291,
      CM: 242,
      DM: 241,
      EM: 354,
      FM: 356,
      GM: 355,
      HM: 353,
      IM: 309,
      JM: 350,
      MM: 444,
      QM: 367,
      SM: 303,
      MO: 1225,
      NO: 859,
      OO: 860,
      PO: 861,
      uP: 1110,
      sq: 57,
      tq: 5,
      uq: 357,
      vq: 55,
      wq: 819,
      xq: 1,
      yq: 40,
      zq: 6,
      Aq: 472,
      Bq: 635,
      Cq: 636,
      Dq: 637,
      Eq: 638,
      Fq: 639,
      Gq: 879,
      Hq: 23,
      Iq: 24,
      Jq: 25,
      Kq: 27,
      Lq: 233,
      oE: 1223,
      Ek: 145,
      Fk: 148,
      Gk: 147,
      Hk: 130,
      Ik: 129,
      Jk: 81,
      Kk: 82,
      Lk: 610,
      Mk: 83,
      Nk: 87,
      Ok: 578,
      Pk: 144,
      Qk: 125,
      Rk: 120,
      Sk: 101,
      Tk: 103,
      Uk: 104,
      Vk: 261,
      Wk: 157,
      Xk: 156,
      Yk: 760,
      Zk: 260,
      al: 313,
      bl: 321,
      cl: 671,
      dl: 683,
      fl: 684,
      gl: 333,
      hl: 336,
      il: 337,
      jl: 340,
      kl: 550,
      ll: 507,
      ml: 19,
      nl: 69,
      ol: 215,
      pl: 127,
      ql: 160,
      rl: 460,
      sl: 11,
      tl: 288,
      ul: 46,
      vl: 45,
      wl: 47,
      xl: 13,
      yl: 704,
      zl: 167,
      Al: 273,
      Bl: 522,
      Cl: 542,
      Dl: 556,
      El: 258,
      Fl: 405,
      Gl: 492,
      Hl: 437,
      Il: 849,
      Jl: 539,
      Kl: 557,
      Ll: 620,
      Ml: 559,
      Nl: 194,
      Ol: 776,
      Pl: 210,
      Ql: 183,
      Rl: 177,
      Sl: 179,
      Tl: 178,
      Ul: 180,
      Vl: 181,
      Wl: 576,
      Xl: 170,
      Yl: 1340,
      Zl: 714,
      am: 706,
      bm: 378,
      dm: 379,
      fm: 380,
      gm: 381,
      hm: 383,
      im: 384,
      jm: 382,
      km: 386,
      lm: 385,
      nm: 494,
      om: 725,
      pm: 205,
      qm: 999,
      rm: 1025,
      sm: 1027,
      tm: 1030,
      um: 1032,
      vm: 1033,
      wm: 1036,
      xm: 1037,
      ym: 275,
      zm: 276,
      Am: 1118,
      Bm: 433,
      Cm: 199,
      Dm: 498,
      Em: 278,
      Fm: 399,
      Gm: 191,
      Hm: 785,
      Im: 192,
      Jm: 187,
      Km: 188,
      Lm: 250,
      Mm: 249,
      Nm: 251,
      Om: 913,
      Pm: 231,
      Qm: 213,
      Rm: 169,
      Sm: 734,
      Tm: 774,
      Um: 598,
      Vm: 561,
      Wm: 606,
      Xm: 599,
      Ym: 600,
      Zm: 569,
      an: 307,
      bn: 465,
      cn: 198,
      dn: 281,
      en: 549,
      fn: 207,
      gn: 176,
      hn: 396,
      jn: 400,
      kn: 475,
      ln: 805,
      mn: 504,
      nn: 810,
      on: 806,
      pn: 811,
      qn: 808,
      rn: 807,
      sn: 809,
      tn: 415,
      un: 866,
      vn: 932,
      wn: 1126,
      xn: 1128,
      yn: 1129,
      zn: 1133,
      An: 1134,
      Bn: 1136,
      Cn: 1139,
      Dn: 1140,
      En: 1141,
      Fn: 1142,
      Gn: 1146,
      Hn: 563,
      In: 510,
      Jn: 272,
      Kn: 416,
      Ln: 485,
      Mn: 519,
      Nn: 515,
      On: 851,
      Pn: 545,
      Qn: 255,
      Rn: 254,
      Sn: 253,
      Tn: 256,
      Un: 502,
      Vn: 775,
      Wn: 283,
      Xn: 197,
      Yn: 204,
      Zn: 60,
      ao: 477,
      bo: 471,
      co: 473,
      eo: 607,
      fo: 601,
      ho: 602,
      io: 603,
      jo: 604,
      ko: 518,
      lo: 514,
      mo: 526,
      no: 513,
      oo: 527,
      po: 528,
      qo: 499,
      ro: 476,
      so: 240,
      uo: 534,
      vo: 468,
      wo: 222,
      xo: 533,
      yo: 555,
      zo: 560,
      Ao: 554,
      Bo: 558,
      Co: 4,
      Do: 37,
      Eo: 38,
      Fo: 39,
      Go: 132,
      Ho: 51,
      Io: 15,
      Jo: 17,
      Ko: 18,
      Lo: 42,
      Mo: 34,
      No: 33,
      Oo: 66,
      Po: 67,
      Qo: 529,
      Ro: 1125,
      So: 134,
      To: 436,
      Uo: 10,
      Vo: 56,
      Wo: 29,
      Xo: 41,
      Yo: 22,
      Zo: 54,
      ap: 52,
      bp: 48,
      cp: 50,
      ep: 53,
      fp: 28,
      gp: 164,
      hp: 136,
      ip: 9,
      jp: 12,
    }).reduce(function (a, b) {
      a.set(String(b), b);
      return a;
    }, new Map()),
    pn = new Set(["eye3Hint"]),
    qn = function (a, b, c) {
      c = c === void 0 ? {} : c;
      p.call(this, b);
      Error.captureStackTrace && Error.captureStackTrace(this, this.constructor || qn);
      var d = {};
      U(this, ((d.driveWebErrorCode = String(a)), d));
      qa(this, "eye3Hint", "<eye3 title='Offline Error - " + (c.iQ || b) + "'/>");
      if (c.fa) {
        a = x(Array.isArray(c.fa) ? c.fa : [c.fa]);
        b = a.next();
        var e;
        try {
          for (; !b.done; b = a.next()) {
            c = void 0;
            var f = b.value;
            let g = ii(f),
              h = ra(this);
            d = 0;
            do c = "cause[" + d++ + "]";
            while (c in h);
            qa(this, c, String(f));
            qa(this, c + ".stack", g.stack);
            let k = ra(ki(f));
            for (let l in k) pn.has(l) || qa(this, c + ".context." + l, k[l]);
          }
        } finally {
          b && !b.done && (e = a.return) && e.call(a);
        }
      }
    };
  K(qn, p);
  var rn = function (a) {
    var b = new URL(a.url);
    b.hash = "";
    b.search = "";
    b.username = "";
    b.password = "";
    return a.method + " " + b;
  };
  var Ne = function (a, b, c) {
    qn.call(this, 242, "FetchService " + b + " failed to handle Request", { fa: a });
    this.l = a;
    qa(this, "failedRequest", rn(c));
  };
  K(Ne, qn);
  var Me = function (a, b, c) {
    qn.call(this, 241, "FetchService " + a + " ignored Request", {
      fa: c === void 0 ? "Unknown" : c,
    });
    this.j = false;
  };
  K(Me, qn);
  var Oe = function (a) {
    a = TypeError.call(this, a);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack);
    Object.setPrototypeOf(this, Oe.prototype);
  };
  K(Oe, TypeError);
  /** CacheFetchService（原 sn）。
   * 使用根 SW 配置管理和读取资源缓存。
   */
  var CacheFetchService = function (a) {
    this.j = a;
  };
  n = CacheFetchService.prototype;
  n.la = function () {
    return "CacheFetchService";
  };
  n.install = function (a) {
    a = tn(a, 91077, 500);
    var b = this.j;
    var c = un(b);
    b = vn(b, c, b.cacheName);
    wn(a, b);
    return b;
  };
  n.ha = function (a) {
    return this.Ra(a);
  };
  n.ga = function (a) {
    var b = this,
      c = tn(a, 91078, 0),
      d = this.j.ga();
    wn(c, d);
    return d.then(function () {
      return b.Ra(a);
    });
  };
  n.Y = function () {
    return this.j.Y();
  };
  n.pa = function (a) {
    var b = this.j;
    return a.method === "GET" && b.F().has(a.url);
  };
  n.fetch = function (a, b, c) {
    b = tn(c, 91081, 2e4);
    c = xn(this.j, a.clone()).catch(function (d) {
      throw new Ne(d, "CacheFetchService", a);
    });
    wn(b, c);
    return c;
  };
  n.Ra = function (a) {
    a = tn(a, 91079, 500);
    var b = this.j.Ra();
    wn(a, b);
    return b;
  };
  var yn = function (a, b) {
    qn.call(this, 291, "Unable to cache asset", { fa: a });
    U(this, {
      "cacheSpec.request": rn(b.request),
      "cacheSpec.failFast": String(b.failFast),
      "cacheSpec.alwaysFetch": String(b.cb),
      "cacheSpec.resolveImmediately": String(b.Ya),
    });
    !b.failFast || b.Ya
      ? ((a = {}), U(this, ((a.severity = "info"), a)))
      : ((a = {}), U(this, ((a.severity = "severe"), a)));
  };
  K(yn, qn);
  var zn = function () {
      this.j = [];
      this.l = 0;
    },
    Bn = function (a, b) {
      return new Promise(function (c, d) {
        a.j.push(function () {
          return Promise.resolve().then(b).then(c, d);
        });
        An(a);
      });
    },
    An = function (a) {
      if (a.l < 50 && a.j.length > 0) {
        let b = a.j.shift();
        a.l++;
        b().finally(function () {
          a.l--;
          An(a);
        });
        An(a);
      }
    };
  var Cn = self;
  var Dn = function (a) {
    var b = this;
    this.j = Cn.caches;
    var c = cg(a, 4);
    this.l = new mn(this.j, c);
    this.o = Pd(a, 3);
    this.cacheName = c + cg(a, 1);
    this.v = Pd(a, 2);
    this.A = new zn();
    this.F = Bi(function () {
      var d = new Set(),
        e = x(b.o.concat(b.v)),
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
  Dn.prototype.ga = function () {
    var a = this,
      b = un(this),
      c = this.cacheName;
    return this.j
      .open(c)
      .then(function (d) {
        return Promise.all(
          b.map(function (e) {
            return d.match(e.request).then(
              function (f) {
                if (!f) return En(a, e, d, c);
              },
              function () {
                return En(a, e, d, c);
              },
            );
          }),
        );
      })
      .then(function () {});
  };
  var un = function (a) {
    return []
      .concat(
        a.o.map(function (b) {
          return {
            request: new Request(b, { credentials: "same-origin" }),
            failFast: false,
            cb: false,
            Ya: true,
          };
        }),
      )
      .concat(
        a.v.map(function (b) {
          return {
            request: new Request(b, { credentials: "same-origin" }),
            failFast: true,
            cb: true,
            Ya: false,
          };
        }),
      );
  };
  Dn.prototype.Ra = function () {
    return this.l.Y([this.cacheName]);
  };
  Dn.prototype.Y = function () {
    return this.l.Y();
  };
  var xn = function (a, b) {
      b = b.clone();
      return Fn(b, a.j, a.cacheName).then(function (c) {
        if (c) return c;
        throw new Oe("Request not in cache [" + b.url + "]");
      });
    },
    Fn = function (a, b) {
      return b.match(a);
    },
    vn = function (a, b, c) {
      return a.j
        .open(c)
        .then(function (d) {
          return Promise.all(
            b.map(function (e) {
              return En(a, e, d, c);
            }),
          );
        })
        .then(function () {});
    },
    En = function (a, b, c, d) {
      var e = b.request,
        f = b.failFast,
        g = b.cb,
        h = b.Ya;
      return Bn(a.A, function () {
        return new Promise(function (k, l) {
          h && k();
          g
            ? c
                .add(e)
                .catch(function (m) {
                  throw new yn(m, b);
                })
                .then(function () {})
                .catch(function (m) {
                  return void Gn(e.url, d, f, ki(m));
                })
                .then(k, l)
            : c
                .match(e)
                .then(function (m) {
                  if (!m)
                    return c
                      .add(e)
                      .catch(function (q) {
                        throw new yn(q, b);
                      })
                      .then(function () {});
                })
                .catch(function (m) {
                  if (new URL(e.url).hostname === "drive-thirdparty.googleusercontent.com")
                    return (
                      (m = new Request(e.url, { mode: "no-cors" })),
                      fetch(m)
                        .catch(function (q) {
                          throw new yn(q, b);
                        })
                        .then(function (q) {
                          if (!q.ok)
                            throw new yn("Fetch error " + q.status + ": " + q.statusText, b);
                          return c.put(e, q).catch(function (t) {
                            throw new yn(t, b);
                          });
                        })
                        .catch(function (q) {
                          Gn(e.url, d, f, ki(q));
                        })
                    );
                  Gn(e.url, d, f, ki(m));
                })
                .then(k, l);
        });
      });
    },
    Gn = function (a, b, c, d) {
      if (c) throw U(d, { requestUrlToCache: a, cacheName: b });
    };
  var Hn = function (a, b, c, d, e, f) {
    Sm.call(this, a, b, c, d, e, void 0, f);
    this.ja = a;
  };
  K(Hn, Sm);
  Hn.prototype.S = function (a) {
    var b,
      c,
      d = (b = a.target) == null ? void 0 : (c = b.error) == null ? void 0 : c.message;
    d !== "Internal error opening backing store for indexedDB.open." &&
      d !== "Internal error." &&
      ((b = Error()), (b.message = "DriveIdbErrorSender error: " + je(a)), Dm(this.ja, b));
  };
  var Lm = function () {
    var a = vj();
    this.ob = "dfesw-errors-";
    this.ka = a;
  };
  Lm.prototype.create = function (a, b) {
    var c = new en(this.ob, this.ka).create(a, b) || new Pk(new Z(), this.ka, b);
    return Cf && (r.indexedDB || r.webkitIndexedDB)
      ? new Hn(a, this.ob, c, new Z(), this.ka, b)
      : c;
  };
  var In = function (a) {
    this.j = a;
  };
  var Jn = function (a) {
    this.j = a;
  };
  var Kn = function (a) {
    this.B = y(a);
  };
  K(Kn, Q);
  var Ln = function (a) {
    this.B = y(a);
  };
  K(Ln, Q);
  var Mn = function (a) {
    this.B = y(a);
  };
  K(Mn, Q);
  var Nn = function (a) {
    this.B = y(a);
  };
  K(Nn, Q);
  var On = function (a) {
    this.B = y(a);
  };
  K(On, Q);
  var Pn = function (a) {
    this.B = y(a);
  };
  K(Pn, Q);
  Pn.prototype.getMessage = function () {
    return cg(this, 3);
  };
  var Qn = function (a) {
    this.B = y(a);
  };
  K(Qn, Q);
  var Rn = function (a) {
    this.B = y(a);
  };
  K(Rn, Q);
  var Sn = function (a) {
    this.B = y(a);
  };
  K(Sn, Q);
  var Tn = function (a) {
    this.B = y(a);
  };
  K(Tn, Q);
  var Un = function (a) {
    this.B = y(a);
  };
  K(Un, Q);
  var Vn = function (a) {
    this.B = y(a);
  };
  K(Vn, Q);
  var Wn = function () {
      this.l = this.j = null;
    },
    Zn = function (a) {
      var b = Xn;
      a = a instanceof Wn ? a.j : a;
      b = Yn.has(a) ? Yn.get(a).get(b) : void 0;
      return b;
    };
  Wn.prototype.initialize = function (a, b) {
    this.j = a;
    this.l = b;
    return this;
  };
  var $n = function (a, b) {
      b = a.l.j[b.j].Ta();
      b.initialize(a.j, a.l);
      return b;
    },
    ao = function (a) {
      var b = H(a.j, Un, 5);
      b == null && ((b = new Un()), O(a.j, 5, b));
      return b;
    },
    bo = function (a) {
      var b = H(a.j, Mn, 8);
      Zf(b, 3, te);
      var c = H(a.j, Un, 5);
      c != null && ((b = a.j), (c = c.clone()), O(b, 5, c));
      return a.j;
    },
    Yn = new WeakMap();
  var co = function () {
    var a = this;
    this.promise = new Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  };
  var eo = function (a) {
      var b = new co();
      this.flush = function () {
        setTimeout(b.resolve, a);
      };
      this.j = b.promise;
    },
    Xn = new (function () {})("gLqgub"),
    fo = function () {
      Wn.call(this);
    };
  K(fo, Wn);
  var go = function (a, b) {
      b = new eo(b);
      var c = Xn,
        d = a instanceof Wn ? a.j : a,
        e = Yn.get(d) || new Map();
      e.set(c, b);
      Yn.set(d, e);
      return a;
    },
    ho = function (a) {
      return (a = Zn(a)) ? a.j : Promise.resolve();
    },
    io = new Jn("gnpeMb"),
    jo = function () {};
  jo.prototype.Ta = function () {
    return new fo();
  };
  var ko = new jo();
  var lo = function (a) {
    A.call(this);
    this.j = a;
    this.o = 0;
    this.l = Promise.resolve();
  };
  K(lo, A);
  lo.prototype.Ia = function (a) {
    var b = this.j.Ia(a);
    a = $n(a, io);
    (a = Zn(a)) && a.flush();
    return b;
  };
  lo.prototype.La = function (a, b) {
    return this.j.La(a, b);
  };
  var mo = function (a, b, c, d) {
    b = a.j.La(b, c);
    var e = ho(go($n(b, io), d));
    a.l = new Promise(function (f) {
      Promise.all([a.l, e]).finally(f);
    });
    return b;
  };
  lo.prototype.Za = function () {
    return this.j.Za();
  };
  lo.prototype.ib = function (a) {
    this.j.ib(a);
  };
  lo.prototype.bb = function () {
    this.j.bb();
  };
  lo.prototype.kb = function () {
    var a = this.j.kb();
    this.l = Promise.resolve();
    this.o++;
    return a;
  };
  var no = function (a) {
    var b = a.l,
      c = a.o;
    return a.l.finally(function () {
      if (a.l === b) return Promise.resolve(a.kb()).finally(function () {});
      if (a.o === c) return no(a);
    });
  };
  lo.prototype.ab = function () {
    return this.j.ab();
  };
  var oo = function () {
    var a = { kq: Object.assign({}, wg) };
    a = a === void 0 ? {} : a;
    this.j = new Map();
    var b = x(Object.keys(a)),
      c = b.next(),
      d;
    try {
      for (; !c.done; c = b.next()) {
        let h = c.value,
          k = a ? a[h] : {};
        var e = x(Object.keys(k)),
          f = e.next(),
          g;
        try {
          for (; !f.done; f = e.next()) {
            let l = f.value;
            this.j.set(k[l], h + "." + l);
          }
        } finally {
          f && !f.done && (g = e.return) && g.call(e);
        }
      }
    } finally {
      c && !c.done && (d = b.return) && d.call(b);
    }
  };
  oo.prototype.l = function () {
    return Hi();
  };
  var po = function () {
    Wn.call(this);
  };
  K(po, Wn);
  var qo = function (a, b) {
      if (b) {
        var c = ao(a);
        c = H(c, Qn, 6) || new Qn();
        a = ao(a);
        O(a, 6, c);
        a = c;
        c = new Pn();
        b = fg(c, 1, b);
        O(a, 14, b);
      }
    },
    ro = new Jn("OOpAKe"),
    so = function () {};
  so.prototype.Ta = function () {
    return new po();
  };
  var to = new so();
  var uo = function (a, b, c) {
    qn.call(this, a, "ImpressionTransportError: " + b, c);
  };
  K(uo, qn);
  var vo = function (a) {
    this.j = a;
  };
  vo.prototype.l = function (a) {
    var b = this,
      c = new URLSearchParams();
    c.append("impressionBatch", JSON.stringify(Gb(a)));
    return new V(function (d) {
      ln(b.j, {
        body: c,
        cache: "no-cache",
        credentials: "omit",
        headers: { "X-Same-Domain": "1" },
        method: "POST",
        mode: "cors",
      })
        .catch(function (e) {
          throw new uo(350, "Could not send impressions to " + b.j, { fa: e });
        })
        .finally(d);
    });
  };
  var wo = function () {},
    xo = new Set().add(91074).add(91073).add(91075).add(91076).add(91177).add(91176),
    yo = function (a, b, c, d) {
      this.j = a;
      this.l = b;
      this.o = c;
      this.v = d;
    },
    zo = function (a, b, c, d) {
      b = mo(a.j, c, b, d);
      if (a.l) {
        var e = a.l;
        d = H(b.j, Vn, 9);
        d == null && (d = new Vn());
        var f = d;
        var g = Yf(e.j, 10);
        f = P(f, 5, g);
        e = Yf(e.j, 12);
        P(f, 2, e);
        O(b.j, 9, d);
      }
      !xo.has(c) &&
        a.o &&
        ((c = a.o),
        (a = H(b.j, Vn, 9)),
        a == null && (a = new Vn()),
        (d = a),
        (e = Yf(c.j, 10)),
        (d = P(d, 6, e)),
        (c = Yf(c.j, 12)),
        P(d, 4, c),
        O(b.j, 9, a));
      return b;
    },
    Bo = function (a, b, c) {
      b
        ? ((a = $n(a, ro)),
          (b = ra(ki(b, String(b)))),
          (b = on.get(String(b.driveWebErrorCode))),
          qo(a, b || c))
        : qo($n(a, ro), c);
    },
    Co = function (a, b) {
      a.j.Ia(b);
      return no(a.j);
    },
    Do = function (a, b, c, d) {
      var e = e === void 0 ? wo : e;
      b = zo(a, 0, b, d);
      e(b);
      Bo(b, null, c);
      return Co(a, b);
    },
    tn = function (a, b, c) {
      var d = d === void 0 ? wo : d;
      var e = e === void 0 ? 847 : e;
      var f = zo(a, 1, b, c);
      a = new yo(a.j, f, xo.has(b) ? f : a.o, a.v);
      try {
        d(f);
      } catch (g) {
        Do(a, b, e, c);
      }
      return a;
    },
    Eo = function (a, b) {
      a.l && (a.j.ib(a.l), b && Bo(a.l, b, a.v || 846), a.j.Ia(a.l));
      return no(a.j);
    },
    wn = function (a, b) {
      return Promise.resolve(b).then(
        function () {
          return Eo(a);
        },
        function (c) {
          return Eo(a, ki(c));
        },
      );
    };
  var Fo = function () {
    Wn.call(this);
  };
  K(Fo, Wn);
  var Go = new Jn("high_frequency_builder");
  var Ho = function () {
    Wn.call(this);
  };
  K(Ho, Wn);
  var Io = function (a, b, c) {
      var d = Date.now() * 1e3;
      if (0 == b) {
        b = new Mn();
        var e = new Ln();
        e = P(e, 1, d);
        O(b, 1, e);
        fg(b, 3, 1);
        O(a.j, 8, b);
        P(a.j, 12, c);
        P(a.j, 13, c);
        P(a.j, 4, d);
        P(a.j, 3, c);
      } else
        1 == b &&
          ((b = new Mn()),
          (e = new Kn()),
          (d = P(e, 1, d)),
          O(b, 2, d),
          fg(b, 3, 2),
          O(a.j, 8, b),
          P(a.j, 12, c),
          P(a.j, 3, c));
      return a;
    },
    Jo = new Jn("system_builder");
  var Ko = function () {
    id.call(this, "visibilitychange");
  };
  K(Ko, id);
  var Ge = new WeakMap(),
    Ce = function (a, b) {
      a = [a];
      for (let c = b.length - 1; c >= 0; --c) a.push(typeof b[c], b[c]);
      return a.join("\v");
    };
  L(Le, F);
  n = Le.prototype;
  n.Ib = He(function () {
    var a = !!this.Aa(),
      b = this.Aa() != "hidden";
    if (a) {
      var c;
      b
        ? (c = (((ye ? "Webkit" : ze ? "Moz" : null) || "") + "visibilitychange").toLowerCase())
        : (c = "visibilitychange");
      a = c;
    } else a = null;
    return a;
  });
  n.Aa = He(function () {
    return Be("hidden", this.j.j);
  });
  n.Jb = He(function () {
    return Be("visibilityState", this.j.j);
  });
  n.Kb = function () {
    var a = this.Aa() ? this.j.j[this.Jb()] : null;
    a = new Ko(!!this.j.j[this.Aa()], a);
    this.dispatchEvent(a);
  };
  n.K = function () {
    xk(this.v);
    Le.Z.K.call(this);
  };
  var Lo = function (a, b) {
    A.call(this);
    this.l = a;
    this.j = new Le(b);
    ve(this, this.j);
    this.o = new sd(this);
    ve(this, this.o);
    this.j.Aa() && we(this.o, this.j, "visibilitychange", this.v);
  };
  K(Lo, A);
  Lo.prototype.v = function () {
    if (this.l.ab()) {
      var a = this.j;
      a = !!a.j.j[a.Aa()];
      a = this.l.La(a ? 102001 : 102e3, 0);
      this.l.Ia(a);
    }
  };
  var Mo = function (a, b, c) {
    c = c === void 0 ? false : c;
    A.call(this);
    this.j = a;
    this.l = b;
    ve(this, this.l);
    this.o = c;
  };
  K(Mo, A);
  n = Mo.prototype;
  n.Ia = function (a) {
    var b = this.j;
    P(a.j, 6, b.o);
    b.F = true;
    a = bo(a);
    b.j.add(a);
    b = this.l;
    b.j.j.j.length >= 3 && b.l.l();
    return new In(a);
  };
  n.La = function (a, b) {
    a = Io(No(this.j, a), b, this.j.v++);
    b == 1 && this.j.A.add(a);
    return a;
  };
  n.Za = function () {
    return this.j.l;
  };
  n.ib = function (a) {
    var b = this.j,
      c = $n(a, Jo),
      d = b.v++;
    var e = H(c.j, Mn, 8);
    e = H(e, Kn, 2);
    P(e, 2, Date.now() * 1e3);
    P(c.j, 13, d);
    b.A.remove(uc(bg(a.j, 12)));
  };
  n.bb = function () {
    var a = this.j,
      b = Oo(a, 716);
    Po(a, b);
    b = bo(b);
    a.j.add(b);
    a.P = true;
    a.D = true;
    this.l.initialize();
    this.l.l.l();
    this.o && new Lo(this);
  };
  n.kb = function () {
    this.l.v();
    return Ki(Array.from(this.l.o)).then();
  };
  n.ab = function () {
    var a = this.j;
    return a.P && a.D && true;
  };
  var Qo = function (a, b, c) {
    A.call(this);
    this.C = c != null ? a.bind(c) : a;
    this.A = b;
    this.o = null;
    this.v = false;
    this.j = null;
  };
  K(Qo, A);
  Qo.prototype.l = function (a) {
    this.o = arguments;
    this.j ? (this.v = true) : Ro(this);
  };
  Qo.prototype.stop = function () {
    this.j && (r.clearTimeout(this.j), (this.j = null), (this.v = false), (this.o = null));
  };
  Qo.prototype.K = function () {
    A.prototype.K.call(this);
    this.stop();
  };
  var Ro = function (a) {
    a.j = Ck(function () {
      a.j = null;
      a.v && ((a.v = false), Ro(a));
    }, a.A);
    var b = a.o;
    a.o = null;
    a.C.apply(null, b);
  };
  var So = function (a, b, c, d, e) {
    A.call(this);
    this.j = a;
    this.D = b;
    this.l = new Qo(this.v, 3e3, this);
    this.o = new Set();
    this.A = d;
    this.C = e || 6e4;
  };
  K(So, A);
  So.prototype.initialize = function () {
    xe(this.C, this.l.l, this.l);
    xe(36e5, this.G, this);
  };
  So.prototype.v = function () {
    var a = this;
    if (this.j.j.j.length != 0 && (!this.A || this.j.F)) {
      var b = To(this.j),
        c = this.D.l(b);
      c &&
        (Ni(c, function () {
          return void a.o.delete(c);
        }),
        this.o.add(c));
    }
  };
  So.prototype.G = function () {
    var a = this.j,
      b = Oo(a, 1153);
    b = bo(b);
    a.j.add(b);
    this.l.l();
  };
  var Uo = function (a) {
    this.B = y(a);
  };
  K(Uo, Q);
  var Vo = function (a) {
    this.B = y(a);
  };
  K(Vo, Q);
  var Wo = function (a) {
    this.B = y(a);
  };
  K(Wo, Q);
  Wo.prototype.ea = function (a) {
    return eg(this, 1, a);
  };
  var Xo = function (a) {
    this.B = y(a);
  };
  K(Xo, Q);
  var Yo = function (a) {
    this.B = y(a);
  };
  K(Yo, Q);
  var Zo = function (a) {
    this.B = y(a);
  };
  K(Zo, Q);
  var $o = function () {};
  $o.prototype.Ta = function () {
    return new Fo();
  };
  var ap = function () {
    this.j = {};
    this.o = {};
    this.l = null;
  };
  var bp = function () {
    this.j = [];
  };
  bp.prototype.add = function (a) {
    this.j.push(a);
  };
  var cp = function () {
    this.j = {};
  };
  cp.prototype.add = function (a) {
    var b = uc(bg(a.j, 12));
    this.j[b] = a;
  };
  cp.prototype.remove = function (a) {
    delete this.j[a];
  };
  var dp = function (a) {
    this.B = y(a);
  };
  K(dp, Q);
  var ep = function (a) {
    this.B = y(a);
  };
  K(ep, Q);
  var fp = function (a) {
    this.B = y(a, 500);
  };
  K(fp, Q);
  var gp = function (a, b) {
      this.l = a;
      this.G = b;
      this.v = 1;
      this.C = this.o = null;
      this.A = new cp();
      this.j = new bp();
      this.D = this.P = this.F = false;
    },
    No = function (a, b) {
      a = $n(new Wn().initialize(new dp(), a.G), Jo);
      P(a.j, 10, b);
      return a;
    },
    To = function (a) {
      var b = a.j,
        c = b.j;
      b.j = [];
      b = new fp();
      var d = a.l.v.clone();
      b = O(b, 2, d);
      d = a.l;
      (d = d.l ? d.l.clone() : null) && O(b, 5, d);
      var e;
      d = a.l;
      for (var f = c.length - 1; f >= 0; f--) {
        var g = H(c[f], Un, 5);
        if (g && H(g, On, 1)) {
          g = H(g, On, 1);
          Ra(I(g, 12)) != null && e === void 0 && (e = $f(g, 12));
          g = H(g, Nn, 20);
          if (g !== void 0 && h === void 0) {
            var h = new Uo();
            var k = Ra(I(g, 2, void 0, te));
            k !== void 0 && dg(h, 2, k);
            g = Ra(I(g, 1, void 0, te));
            g !== void 0 && dg(h, 1, g);
          }
          if (e !== void 0 && h !== void 0) break;
        }
      }
      d = d.j ? d.j.clone() : null;
      if (e !== void 0 || h !== void 0) {
        d || (d = new Vo());
        e !== void 0 && dg(d, 6, e);
        h !== void 0 && O(d, 13, h);
      }
      (e = d) && O(b, 3, e);
      a = a.l.A.clone();
      O(b, 4, a);
      Ub(b);
      a = b.B;
      e = a[v] | 0;
      if (c == null) z(a, e, 1);
      else {
        d = h = c === Xb ? 7 : c[v] | 0;
        g = (f = bc(h)) || Object.isFrozen(c);
        var l = (k = true);
        for (let q = 0; q < c.length; q++) {
          var m = c[q];
          f || ((m = w(m)), k && (k = !m), l && (l = m));
        }
        f || ((h = k ? 13 : 5), (h = l ? h & -4097 : h | 4096));
        (g && h === d) || ((c = Pa(c)), (d = 0), (h = Zb(h, e)));
        h !== d && (c[v] = h);
        e = z(a, e, 1, c);
        2 & h || !(4096 & h || 16 & h) || Vb(a, e);
      }
      return b;
    },
    Oo = function (a, b) {
      var c = Io(No(a, b), 0, a.v++);
      var d = a.A;
      var e = Object.keys(d.j);
      if (e.length == 0) d = null;
      else {
        var f = [];
        for (var g = 0; g < e.length; g++) {
          let t = Number(e[g]);
          var h = d.j[t],
            k = new Rn();
          k = P(k, 1, t);
          h = Yf(h.j, 10);
          h = P(k, 2, h);
          f.push(h);
        }
        d = f;
      }
      if (b != 716) {
        b = a.C;
        P(c.j, 6, a.o);
        f = new Sn();
        b = P(f, 1, b);
        if (d) {
          Ub(b);
          f = b.B;
          e = pc(b, f, f[v] | 0, Rn, 2, 2, true);
          h = g = 0;
          if (Array.isArray(d)) {
            var l = d.length;
            for (var m = 0; m < l; m++) {
              var q = d[m];
              e.push(q);
              (q = w(q)) && !g++ && (e[v] &= -9);
              q || h++ || wa(e, 4096);
            }
          } else {
            d = x(d);
            k = d.next();
            try {
              for (; !k.done; k = d.next()) {
                m = k.value;
                e.push(m);
                (q = w(m)) && !g++ && (e[v] &= -9);
                q || h++ || wa(e, 4096);
              }
            } finally {
              k && !k.done && (l = d.return) && l.call(d);
            }
          }
          h && Vb(f);
        }
        l = ao(c);
        O(l, 3, b);
      }
      Po(a, c);
      return c;
    },
    Po = function (a, b) {
      var c = Yf(b.j, 12);
      c = c == null ? null : uc(c);
      a.o = c;
      b = H(b.j, Mn, 8);
      b = H(b, Ln, 1);
      b = Yf(b, 1);
      a.C = b == null ? null : uc(b);
    };
  var hp = function () {};
  hp.prototype.Ta = function () {
    return new Ho();
  };
  var ip = function () {
    this.j = this.l = null;
  };
  var jp = function () {
    this.v = new Wo();
    this.l = null;
    this.A = new ep();
    fg(this.A, 1, 6);
    this.j = this.o = null;
  };
  jp.prototype.ea = function (a) {
    this.v.ea(a);
    return this;
  };
  var kp = function (a) {
      a.l == null && (a.l = new Zo());
      return a.l;
    },
    lp = function (a) {
      a.j == null && (a.j = new Vo());
      return a.j;
    };
  var mp = function () {
    this.v = this.A = null;
    this.l = new jp();
    this.j = null;
    this.o = false;
  };
  mp.prototype.ea = function (a) {
    this.l.ea(a);
    return this;
  };
  var np = function (a, b, c, d) {
    var e = new mp();
    fg(e.l.v, 6, b);
    b = e.ea;
    var f, g, h;
    var k =
      (h = (f = crypto) == null ? void 0 : (g = f.randomUUID) == null ? void 0 : g.call(f)) != null
        ? h
        : oi() + "-" + oi() + "-" + oi();
    e = b.call(e, k);
    e.A = a;
    e.v = a;
    a = new ap();
    a.j[io.j] = ko;
    a.j[ro.j] = to;
    e.j = a;
    e.o = true;
    a = new ip();
    a.l = e.l;
    e.j != null && (a.j = e.j);
    a.j == null && (a.j = new ap());
    a.j.j[Jo.j] = new hp();
    a.j.j[Go.j] = new $o();
    f = a.j;
    g = a.l;
    h = kp(g).B;
    oc(h, h[v] | 0, Yo, 1) === void 0 && ((h = kp(g)), (b = new Yo()), O(h, 1, b));
    g = kp(g);
    g = H(g, Yo, 1);
    f.l = g;
    g = Tc(f.o);
    for (h = 0; h < g.length; h++) g[h].j(f.l);
    a = new gp(a.l, a.j);
    e = new Mo(a, new So(a, e.A, e.v, e.o, null), false);
    yo.call(this, new lo(e), null, null, null);
    this.initialize(c, d || new lg());
  };
  K(np, yo);
  np.prototype.initialize = function (a, b) {
    var c = this.j.Za();
    P(c.v, 2, (r.__startTimeMs || Date.now()) * 1e3);
    var d = ba(),
      e = lp(c);
    eg(e, 2, d);
    d = Zf(a, 2, te);
    e = kp(c);
    fg(e, 4, d);
    d = new Tn();
    e = ac(a, 5, Wa, void 0 === If ? 2 : 4);
    Ub(d);
    a = ac(d, 1, Wa, 2, true);
    if (Array.isArray(e)) {
      var f = e.length;
      for (var g = 0; g < f; g++) a.push(Va(e[g]));
    } else {
      e = x(e);
      g = e.next();
      try {
        for (; !g.done; g = e.next()) a.push(Va(g.value));
      } finally {
        g && !g.done && (f = e.return) && f.call(e);
      }
    }
    f = lp(c);
    O(f, 10, d);
    b = cg(b, 1);
    c.o == null && ((c.o = new Xo()), (f = kp(c)), O(f, 2, c.o));
    eg(c.o, 1, b);
    this.j.bb();
  };
  var op = function (a, b, c) {
    this.l = a;
    this.j = b;
    a = this.j.map(function (d) {
      return d.la();
    });
    this.o = c + "[" + a.join(", ") + "]";
  };
  n = op.prototype;
  n.la = function () {
    return this.o;
  };
  n.install = function (a) {
    return this.Ja(
      this.j.map(function (b) {
        return b.install(a);
      }),
      353,
      "FetchService install failed",
    );
  };
  n.ha = function (a) {
    return this.Ja(
      this.j.map(function (b) {
        return b.ha(a);
      }),
      354,
      "FetchService activate failed",
    );
  };
  n.pa = function (a, b) {
    return this.j.some(function (c) {
      return c.pa(a, b);
    });
  };
  n.ga = function (a) {
    return this.Ja(
      this.j.map(function (b) {
        return b.ga(a);
      }),
      355,
      "FetchService updateCaches failed",
    );
  };
  n.Y = function (a) {
    return this.Ja(
      this.j.map(function (b) {
        return b.Y(a);
      }),
      356,
      "FetchService deleteCaches failed",
    );
  };
  n.Ja = async function (a, b, c) {
    var d = li(this.Ja),
      e = await Promise.allSettled(a);
    a = [];
    var f = [];
    e = x(e.entries());
    var g = e.next(),
      h;
    try {
      for (; !g.done; g = e.next()) {
        var k = x(g.value);
        let m = k.next().value,
          q = k.next().value;
        if (q.status === "fulfilled") f.push(q.value);
        else if (q.status === "rejected") {
          let t = this.j[m];
          var l = {};
          a.push(
            U(
              q.reason,
              ((l.sourceFetchService = t ? t.la() : "Unknown (From " + this.la() + ")"), l),
            ),
          );
        }
      }
    } finally {
      g && !g.done && (h = e.return) && h.call(e);
    }
    if (a.length > 0)
      throw (
        (h = {}),
        U(
          new qn(b, c, { fa: a }),
          ((h.catchingFetchServiceStackTrace = d), (h.catchingFetchService = this.la()), h),
        )
      );
    return f;
  };
  /** NavigationPreloadFetchService（原 pp）。
   * 根 SW 的 preload 处理器，与主 SW 属于不同编译快照。
   */
  var NavigationPreloadFetchService = function (a) {
    this.j = a;
    this.T = Cn;
  };
  n = NavigationPreloadFetchService.prototype;
  n.la = function () {
    return "NavigationPreloadFetchService";
  };
  n.install = function () {
    return Promise.resolve();
  };
  n.ha = function () {
    var a = this;
    return "navigationPreload" in this.T.registration && this.T.registration.navigationPreload
      ? this.T.registration.navigationPreload.enable().catch(function (b) {
          Dm(a.j, new qn(303, "Unable to enable Navigation Preload", { fa: b }));
        })
      : Promise.resolve();
  };
  n.ga = function () {
    return Promise.resolve();
  };
  n.Y = function () {
    return Promise.resolve();
  };
  n.pa = function (a, b) {
    return (
      "navigationPreload" in this.T.registration &&
      !!this.T.registration.navigationPreload &&
      !!b.preloadResponse &&
      a.method === "GET" &&
      (a.destination === "document" || a.mode === "navigate")
    );
  };
  n.fetch = function (a, b, c) {
    if (!this.pa(a, b))
      return Promise.reject(new Me("NavigationPreload(enabled)", a, "Not Applicable"));
    c = tn(c, 91086, 2e4);
    b = b.preloadResponse.then(
      function (d) {
        if (!d) throw new Me("NavigationPreload(enabled)", a, "No Response");
        return d;
      },
      function (d) {
        throw new Ne(d, "NavigationPreload(enabled)", a);
      },
    );
    wn(c, b);
    return b;
  };
  /** NetworkFetchService（原 qp）。
   * 网络兜底处理器。
   */
  var NetworkFetchService = function () {
    this.T = Cn;
  };
  n = NetworkFetchService.prototype;
  n.la = function () {
    return "PassthroughFetchService";
  };
  n.install = function () {
    return Promise.resolve();
  };
  n.ha = function () {
    return Promise.resolve();
  };
  n.ga = function () {
    return Promise.resolve();
  };
  n.Y = function () {
    return Promise.resolve();
  };
  n.pa = function () {
    return false;
  };
  n.fetch = function (a, b, c) {
    b = tn(c, 91082, 2e4);
    a = a.clone();
    c = this.T.fetch(a).then(
      function (d) {
        return d;
      },
      function (d) {
        throw new Ne(d, "PassthroughFetchService", a);
      },
    );
    wn(b, c);
    return c;
  };
  /** OrderedFetchServiceChain（原 rp）。
   * 保持各处理器顺序以及请求不适用的跳过规则。
   */
  var OrderedFetchServiceChain = function (a, b) {
    op.call(this, a, b, "SerialFetchService");
  };
  K(OrderedFetchServiceChain, op);
  OrderedFetchServiceChain.prototype.fetch = function (a, b, c) {
    return sp(this, 0, a, [], false, b, c);
  };
  var sp = function (a, b, c, d, e, f, g) {
    return a.j[b].fetch(c.clone(), f, g).catch(function (h) {
      h instanceof Me ||
        ((e = true),
        h instanceof Ne ||
          ((h = h instanceof qn ? h : new qn(309, "Unexpected error from FetchService", { fa: h })),
          Dm(a.l, h)));
      d.push(h);
      h = b + 1;
      if (h < a.j.length) return sp(a, h, c, d, e, f, g);
      if (e) throw ((h = new Ne(d, "SerialFetchService", c)), Pe(d) && (h.j = false), h);
      throw new Me("SerialFetchService", c, d);
    });
  };
  var tp = function (a, b, c, d) {
      d = d === void 0 ? [] : d;
      this.o = a;
      this.l = b;
      this.j = c;
      this.v = d;
      this.T = Cn;
    },
    vp = function (a) {
      a.T.addEventListener(
        "install",
        function (b) {
          try {
            let c = tn(a.l, 91073, 500),
              d = Promise.resolve(
                Fm(
                  a.o,
                  a.install(b, c).catch(function (e) {
                    throw U(e, { whileHandlingEvent: "install" });
                  }),
                ),
              );
            b.waitUntil(
              d.then(
                function () {
                  Eo(c);
                },
                function (e) {
                  return Eo(c, e);
                },
              ),
            );
          } catch (c) {
            vm(a.o, c);
          }
        },
        { capture: false },
      );
      a.T.addEventListener(
        "activate",
        function (b) {
          var c = tn(a.l, 91074, 0);
          b.waitUntil(
            wn(
              c,
              Fm(
                a.o,
                a.ha(b, c).catch(function (d) {
                  throw U(d, { whileHandlingEvent: "activate" });
                }),
              ),
            ),
          );
        },
        { capture: false },
      );
      a.T.addEventListener(
        "fetch",
        function (b) {
          if (a.j.pa(b.request, b)) {
            var c = tn(a.l, 91075, 2e4);
            a.fetch(b, c);
          }
        },
        { capture: false },
      );
      new gn(
        a.T,
        new kn(function (b, c, d) {
          c = Fm(
            a.o,
            up(
              a,
              b,
              a.T.ExtendableMessageEvent && d instanceof ExtendableMessageEvent ? d : null,
            ).catch(function (e) {
              throw U(e, { whileHandlingEvent: "message", messageData: String(b) });
            }),
          );
          return Promise.resolve(c).catch(function (e) {
            var f = ki(e);
            e = new og();
            if (f instanceof Error) {
              eg(e, 1, f.message);
              f.stack && eg(e, 2, f.stack);
              var g = ra(f);
              f = e.B;
              var h = f[v] | 0;
              f = hc(e, f, h, w(e, h));
              g = x(Object.entries(g));
              h = g.next();
              var k;
              try {
                for (; !h.done; h = g.next()) {
                  var l = x(h.value);
                  let m = l.next().value,
                    q = l.next().value;
                  f.set(m, q);
                }
              } finally {
                h && !h.done && (k = g.return) && k.call(g);
              }
            } else eg(e, 1, String(f));
            k = new sg();
            return Xf(k, 3, e);
          });
        }),
      );
    };
  n = tp.prototype;
  n.install = function (a, b) {
    var c = this;
    return this.j
      .install(b)
      .then(
        function () {
          return c.T.skipWaiting();
        },
        function (d) {
          throw ki(d);
        },
      )
      .then(function () {});
  };
  n.ha = function (a, b) {
    var c = this;
    return this.T.clients
      .claim()
      .then(function () {
        return c.j.ha(b);
      })
      .then(function () {});
  };
  n.fetch = function (a, b) {
    var c = Fm(
      this.o,
      this.j.fetch(a.request, a, b).catch(function (d) {
        throw U(d, { whileHandlingEvent: "fetch" });
      }),
    );
    a.waitUntil(wn(b, c));
    a.respondWith(c);
  };
  n.ga = function (a, b) {
    var c = this.j.ga(b);
    b = wn(b, c);
    a && a.waitUntil(b);
    return c.then(function () {
      return new sg();
    });
  };
  n.Y = function (a, b) {
    var c = tn(b, 91080, 0);
    b = this.j.Y(c);
    c = wn(c, b);
    a && a.waitUntil(c);
    return b.then(function () {
      return new sg();
    });
  };
  var up = function (a, b, c) {
    var d = Zf(b, 1, te);
    switch (d) {
      case 1:
        return Promise.resolve(new sg());
      case 2:
        return a.ga(c, tn(a.l, 91177, 0));
      case 3:
        return a.Y(c, tn(a.l, 91176, 0));
      case 4:
        return Promise.resolve(tg(new sg(), qg(new pg(), a.v)));
      default:
        return Do(a.l, 91076, 444, 0).then(function () {
          throw new TypeError("ea`" + d);
        });
    }
  };
  var Se = function () {
    this.o = window.crashReport;
    this.v = new co();
    this.j = 0;
    this.l = new Map();
  };
  Se.prototype.initialize = async function (a) {
    a = a === void 0 ? 10240 : a;
    if (this.j !== 0) return this.v.promise;
    this.j = 1;
    try {
      await this.o.initialize(a);
      this.v.resolve();
      this.j = 2;
      var b = x(this.l),
        c = b.next(),
        d;
      try {
        for (; !c.done; c = b.next()) {
          var e = x(c.value);
          let f = e.next().value,
            g = e.next().value;
          this.set(f, g != null ? g : "");
        }
      } finally {
        c && !c.done && (d = b.return) && d.call(b);
      }
    } catch (f) {
      this.j = 3;
      let g = Error("fa", { cause: f });
      g.reportSeverity = "warning";
      this.v.reject(g);
    } finally {
      this.l.clear();
    }
    return this.v.promise;
  };
  Se.prototype.wb = function () {
    return this.j !== 0;
  };
  Se.prototype.set = function (a, b) {
    if (this.j !== 3)
      if (this.j !== 2)
        this.l.size < 100 || this.l.has(a) ? this.l.set(a, b) : this.l.set("cache_full", "true");
      else
        try {
          this.o.set(a, b);
        } catch (c) {}
  };
  Se.prototype.delete = function (a) {
    if (this.j !== 3)
      if (this.j !== 2) this.l.delete(a);
      else
        try {
          typeof this.o.delete === "function" ? this.o.delete(a) : this.o.remove(a);
        } catch (b) {}
  };
  var Te = function () {
    this.j = false;
  };
  Te.prototype.initialize = function () {
    this.j = true;
    return Promise.resolve();
  };
  Te.prototype.wb = function () {
    return this.j;
  };
  Te.prototype.set = function () {};
  Te.prototype.delete = function () {};
  var Qe = new Te();
  var wp = ["SEVERE", "FATAL"],
    Ue = function () {
      this.l = this.o = 1;
      this.j = new hg();
    };
  Ue.prototype.yb = function (a, b) {
    var c = b == null ? void 0 : b.jb.get("apps_telemetry.outgoing_severity");
    a = c != null ? c : a.o;
    if ((a = this.o === 1 && !!a && wp.includes(a.toUpperCase()))) this.o = 2;
    b = b == null ? void 0 : b.jb.get("apps_telemetry.incoming_severity");
    if ((c = this.l === 1 && !!b && !!c && b.toUpperCase() !== c.toUpperCase())) this.l = 2;
    if (a || c) {
      c = Tf(this.j, $k, 3);
      b = new Zk();
      b = fg(b, 1, this.o);
      b = fg(b, 2, this.l);
      O(c, 5, b);
      xp(this);
    }
  };
  Ue.prototype.ea = function (a) {
    a: {
      var b = Tf(this.j, Xk, 1);
      var c = Yk;
      Ub(b);
      if (void 0 === Jf) {
        if (Sf(b, c, 4) !== 4) {
          b = void 0;
          break a;
        }
      } else nc(b.B, void 0, c, 4);
      b = Tf(b, Wk, 4);
    }
    b.ea(a);
    xp(this);
  };
  var xp = function (a) {
    Qe.set("appsTelemetryCrashReportData", JSON.stringify(Gb(a.j)));
  };
  var yp = function (a) {
    this.v = a.T || null;
    this.l = a.nQ || false;
    this.o = a.oQ || false;
    if (this.l && this.o) throw Error();
  };
  L(yp, fe);
  yp.prototype.j = function (a) {
    var b = new zp(this.v, this.l, this.o);
    a && (b.A = a);
    return b;
  };
  var zp = function (a, b, c) {
    F.call(this);
    this.ba = a;
    this.G = b;
    this.R = c || false;
    this.O = void 0;
    this.status = this.readyState = 0;
    this.responseType = this.v = this.l = this.statusText = "";
    this.onreadystatechange = null;
    this.U = new Headers();
    this.C = null;
    this.S = "GET";
    this.X = "";
    this.j = false;
    this.V = this.D = this.J = null;
    this.H = new AbortController();
    this.A = void 0;
  };
  L(zp, F);
  zp.prototype.open = function (a, b) {
    if (this.readyState != 0) throw (this.abort(), Error("ga"));
    this.S = a;
    this.X = b;
    this.readyState = 1;
    Ap(this);
  };
  zp.prototype.send = function (a) {
    if (this.readyState != 1) throw (this.abort(), Error("ha"));
    var b,
      c = ((b = this.A) == null ? 0 : b.signal)
        ? AbortSignal.any([this.A.signal, this.H.signal])
        : this.H.signal;
    if (c.aborted) throw (this.abort(), Error("ia"));
    this.j = true;
    var d, e, f, g;
    b = Object.assign({}, this.A, {
      headers: this.U,
      method: this.S,
      credentials: (f = (d = this.A) == null ? void 0 : d.credentials) != null ? f : this.O,
      cache: (g = (e = this.A) == null ? void 0 : e.cache) != null ? g : void 0,
      signal: c,
    });
    a && (b.body = a);
    (this.ba || r).fetch(new Request(this.X, b)).then(this.va.bind(this), this.L.bind(this));
  };
  zp.prototype.abort = function () {
    this.l = this.G || this.R ? [] : "";
    this.v = "";
    this.U = new Headers();
    this.status = 0;
    this.H.abort("Request was aborted.");
    this.D &&
      this.D.cancel("Request was aborted.").catch(function () {
        return null;
      });
    this.readyState >= 1 && this.j && this.readyState != 4 && ((this.j = false), Bp(this));
    this.readyState = 0;
  };
  zp.prototype.va = function (a) {
    if (
      this.j &&
      ((this.J = a),
      this.C ||
        ((this.status = this.J.status),
        (this.statusText = this.J.statusText),
        (this.C = a.headers),
        (this.readyState = 2),
        Ap(this)),
      this.j && ((this.readyState = 3), Ap(this), this.j))
    )
      if (this.responseType === "arraybuffer")
        a.arrayBuffer().then(this.ta.bind(this), this.L.bind(this));
      else if (a.body && r.ReadableStream) {
        this.D = a.body.getReader();
        if (this.G || this.R) {
          if (this.responseType) throw Error("ja");
          this.l = [];
        } else this.l = this.v = "";
        this.G || (this.V = new TextDecoder());
        Cp(this);
      } else a.text().then(this.ua.bind(this), this.L.bind(this));
  };
  var Cp = function (a) {
    a.D.read().then(a.ja.bind(a)).catch(a.L.bind(a));
  };
  zp.prototype.ja = function (a) {
    if (this.j) {
      var b = a.value;
      if (this.G) a.value && this.l.push(b || new Uint8Array(0));
      else if ((b = b ? this.V.decode(b, { stream: !a.done }) : ""))
        this.R ? this.l.push(b) : (this.l = this.v += b);
      a.done ? Bp(this) : Ap(this);
      this.readyState == 3 && Cp(this);
    }
  };
  zp.prototype.ua = function (a) {
    this.j && ((this.l = this.v = a), Bp(this));
  };
  zp.prototype.ta = function (a) {
    this.j && ((this.l = a), Bp(this));
  };
  zp.prototype.L = function () {
    this.j && Bp(this);
  };
  var Bp = function (a) {
    a.readyState = 4;
    a.J = null;
    a.D = null;
    a.V = null;
    Ap(a);
  };
  zp.prototype.setRequestHeader = function (a, b) {
    this.U.append(a, b);
  };
  zp.prototype.getResponseHeader = function (a) {
    return this.C ? this.C.get(a.toLowerCase()) || "" : "";
  };
  zp.prototype.getAllResponseHeaders = function () {
    if (!this.C) return "";
    for (var a = [], b = this.C.entries(), c = b.next(); !c.done; ) {
      c = c.value;
      a.push(c[0] + ": " + c[1]);
      c = b.next();
    }
    return a.join("\r\n");
  };
  var Ap = function (a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  };
  Object.defineProperty(zp.prototype, "withCredentials", {
    get: function () {
      return this.O === "include";
    },
    set: function (a) {
      this.O = a ? "include" : "same-origin";
    },
  });
  var Dp = function (a, b, c) {
    c && cm(new yp({ T: c }));
    a = Im(Mm(Pm(Nm(Km(Hm(Jm(Qm(Om(a))))), b))));
    xm.call(this, a);
    if (c) {
      if (((this.l.driveServiceWorker = "true"), c.registration && c.registration.scope)) {
        this.l.driveServiceWorkerScope = c.registration.scope;
        let d = c.registration.installing || c.registration.waiting || c.registration.active;
        Bm(this, "driveServiceWorkerState", function () {
          return c.registration
            ? d
              ? d.state
              : "unknown - no worker"
            : "unknown - no registration";
        });
      }
    } else this.l.driveWorkerClient = "true";
    this.l.location = String(r.location);
    Bm(this, "original-stack-trace", function (d) {
      return String(d.stack) || "NONE";
    });
    Bm(this, "context-stack-trace", function () {
      return li();
    });
  };
  K(Dp, xm);
  /** RootRedirectFetchService（原 Ep）。
   * 仅匹配 GET / 或 /drive，按配置生成重定向。
   */
  var RootRedirectFetchService = function (redirectPath) {
    this.j = redirectPath;
  };
  n = RootRedirectFetchService.prototype;
  n.la = function () {
    return "RootFetchService";
  };
  n.install = function () {
    return Promise.resolve();
  };
  n.ha = function () {
    return Promise.resolve();
  };
  n.ga = function () {
    return Promise.resolve();
  };
  n.Y = function () {
    return Promise.resolve();
  };
  n.pa = function (a) {
    if (a.method !== "GET") return false;
    a = new Xc(a.url).j;
    return a === "/" || a === "/drive";
  };
  n.fetch = function (a, b, c) {
    var d = d === void 0 ? wo : d;
    var e = e === void 0 ? 848 : e;
    b = zo(c, 0, 91083, 2e4);
    try {
      d(b);
    } catch (f) {
      Bo(b, f, e);
    }
    Co(c, b);
    c = new Xc(a.url);
    d = c.j;
    return d === "/" || d === "/drive"
      ? ((a = $c(c, this.j)), Promise.resolve(Response.redirect(a.toString())))
      : Promise.reject(new Me("RootFetchService", a, "Invalid request path"));
  };
  /** DriveRootWorker（原 Fp）。
   * 根入口装配：preload → network → cache → redirect。
   */
  var DriveRootWorker = function (a, b, c, d) {
    d = d === void 0 ? [] : d;
    var e = new Dn(H(c, ng, 2));
    c = cg(c, 1);
    e = new OrderedFetchServiceChain(a, [
      new NavigationPreloadFetchService(a),
      new NetworkFetchService(),
      new CacheFetchService(e),
      new RootRedirectFetchService(c),
    ]);
    tp.call(this, a, b, e, d);
  };
  K(DriveRootWorker, tp);
  (function (a) {
    var b = a.JSON.parse;
    a.JSON.parse = function (c, d) {
      try {
        return b.call(this, c, d);
      } catch (e) {
        throw (
          (c = String(c)),
          Error(
            "ka`" +
              (c.length > 100
                ? '"' + c.substring(0, 100) + '"\u2026 (' + c.length + " chars)"
                : '"' + c + '"'),
            { cause: e },
          )
        );
      }
    };
  })(globalThis);
  /** startDriveRootWorker（原 Gp）。
   * 读取根 SW 启动配置并注册控制器。
   */
  var startDriveRootWorker = function () {
      var a = new Dp("sw_root", r.__jsErrorUri, Cn);
      a.l.driveServiceWorkerType = "root";
      Em(a, function () {
        var b = new vg(r.__initData),
          c = H(b, lg, 4),
          d = cg(c, 1);
        a.l.buildLabel = d;
        c = "go/dd-jobset-proto: " + Zf(c, 2, te);
        a.l.driveJobset = c;
        c = H(b, ug, 3);
        Math.random() <= 0.003
          ? ((d = "drive/logImpressions"),
            "ServiceWorkerGlobalScope" in r &&
              Cn instanceof r.ServiceWorkerGlobalScope &&
              (d = String(new URL("drive/logImpressions", Cn.registration.scope))),
            (d = new vo(d)))
          : (d = new oo());
        d = new np(d, 110, c, H(b, lg, 4));
        var e = tn(d, 91072, 200);
        try {
          {
            vp(new DriveRootWorker(a, d, b, ac(c, 5, Wa, void 0 === If ? 2 : 4)));
            Eo(e);
          }
        } catch (f) {
          throw (Eo(e, f), f);
        }
      })();
    },
    Hp = ["drive", "sw", "main"],
    Ip = r,
    Jp;
  for (; Hp.length && (Jp = Hp.shift()); )
    Hp.length || startDriveRootWorker === void 0
      ? Ip[Jp] && Ip[Jp] !== Object.prototype[Jp]
        ? (Ip = Ip[Jp])
        : (Ip = Ip[Jp] = {})
      : (Ip[Jp] = startDriveRootWorker);
  var _ModuleManager_initialize = function () {};
} catch (e) {
  _DumpException(e);
}
// Google Inc.
