/*! For license information please see npm-gsap.js.LICENSE.txt */
"use strict";
(self.webpackChunknod = self.webpackChunknod || []).push([
  [7924],
  {
    124: (t, e, n) => {
      n.d(e, { c: () => C });
      var r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        i = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        s = Math.PI / 180,
        o = (Math.PI, Math.sin),
        a = Math.cos,
        u = Math.abs,
        l = Math.sqrt,
        h =
          (Math.atan2,
          function (t) {
            return "number" == typeof t;
          }),
        c = 1e5,
        f = function (t) {
          return Math.round(t * c) / c || 0;
        };
      function p(t, e, n, r, i, h, c, f, p) {
        if (t !== f || e !== p) {
          (n = u(n)), (r = u(r));
          var d = (i % 360) * s,
            D = a(d),
            g = o(d),
            _ = Math.PI,
            m = 2 * _,
            v = (t - f) / 2,
            y = (e - p) / 2,
            x = D * v + g * y,
            C = -g * v + D * y,
            F = x * x,
            E = C * C,
            w = F / (n * n) + E / (r * r);
          w > 1 && ((n = l(w) * n), (r = l(w) * r));
          var b = n * n,
            T = r * r,
            A = (b * T - b * E - T * F) / (b * E + T * F);
          A < 0 && (A = 0);
          var M = (h === c ? -1 : 1) * l(A),
            k = M * ((n * C) / r),
            B = M * ((-r * x) / n),
            S = (t + f) / 2 + (D * k - g * B),
            O = (e + p) / 2 + (g * k + D * B),
            P = (x - k) / n,
            N = (C - B) / r,
            L = (-x - k) / n,
            R = (-C - B) / r,
            Y = P * P + N * N,
            X = (N < 0 ? -1 : 1) * Math.acos(P / l(Y)),
            z =
              (P * R - N * L < 0 ? -1 : 1) *
              Math.acos((P * L + N * R) / l(Y * (L * L + R * R)));
          isNaN(z) && (z = _),
            !c && z > 0 ? (z -= m) : c && z < 0 && (z += m),
            (X %= m),
            (z %= m);
          var I,
            H = Math.ceil(u(z) / (m / 4)),
            W = [],
            V = z / H,
            U = ((4 / 3) * o(V / 2)) / (1 + a(V / 2)),
            q = D * n,
            j = g * n,
            G = g * -r,
            Q = D * r;
          for (I = 0; I < H; I++)
            (x = a((i = X + I * V))),
              (C = o(i)),
              (P = a((i += V))),
              (N = o(i)),
              W.push(x - U * C, C + U * x, P + U * N, N - U * P, P, N);
          for (I = 0; I < W.length; I += 2)
            (x = W[I]),
              (C = W[I + 1]),
              (W[I] = x * q + C * G + S),
              (W[I + 1] = x * j + C * Q + O);
          return (W[I - 2] = f), (W[I - 1] = p), W;
        }
      }
      var d,
        D,
        g = function () {
          return (
            d ||
            ("undefined" != typeof window &&
              (d = window.gsap) &&
              d.registerPlugin &&
              d)
          );
        },
        _ = function () {
          (d = g())
            ? (d.registerEase("_CE", C.create), (D = 1))
            : console.warn("Please gsap.registerPlugin(CustomEase)");
        },
        m = function (t) {
          return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
        },
        v = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
        y = /[cLlsSaAhHvVtTqQ]/g,
        x = function t(e, n, r, i, s, o, a, u, l, h, c) {
          var f,
            p = (e + r) / 2,
            d = (n + i) / 2,
            D = (r + s) / 2,
            g = (i + o) / 2,
            _ = (s + a) / 2,
            m = (o + u) / 2,
            v = (p + D) / 2,
            y = (d + g) / 2,
            x = (D + _) / 2,
            C = (g + m) / 2,
            F = (v + x) / 2,
            E = (y + C) / 2,
            w = a - e,
            b = u - n,
            T = Math.abs((r - a) * b - (i - u) * w),
            A = Math.abs((s - a) * b - (o - u) * w);
          return (
            h ||
              ((h = [
                { x: e, y: n },
                { x: a, y: u },
              ]),
              (c = 1)),
            h.splice(c || h.length - 1, 0, { x: F, y: E }),
            (T + A) * (T + A) > l * (w * w + b * b) &&
              ((f = h.length),
              t(e, n, p, d, v, y, F, E, l, h, c),
              t(F, E, x, C, _, m, a, u, l, h, c + 1 + (h.length - f))),
            h
          );
        },
        C = (function () {
          function t(t, e, n) {
            D || _(), (this.id = t), this.setData(e, n);
          }
          var e = t.prototype;
          return (
            (e.setData = function (t, e) {
              e = e || {};
              var n,
                s,
                o,
                a,
                l,
                h,
                c,
                f,
                D,
                g = (t = t || "0,0,1,1").match(v),
                _ = 1,
                m = [],
                C = [],
                F = e.precision || 1,
                E = F <= 1;
              if (
                ((this.data = t),
                (y.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
                  (g = (function (t) {
                    var e,
                      n,
                      s,
                      o,
                      a,
                      l,
                      h,
                      c,
                      f,
                      d,
                      D,
                      g,
                      _,
                      m,
                      v,
                      y =
                        (t + "")
                          .replace(i, function (t) {
                            var e = +t;
                            return e < 1e-4 && e > -1e-4 ? 0 : e;
                          })
                          .match(r) || [],
                      x = [],
                      C = 0,
                      F = 0,
                      E = 2 / 3,
                      w = y.length,
                      b = 0,
                      T = "ERROR: malformed path: " + t,
                      A = function (t, e, n, r) {
                        (d = (n - t) / 3),
                          (D = (r - e) / 3),
                          h.push(t + d, e + D, n - d, r - D, n, r);
                      };
                    if (!t || !isNaN(y[0]) || isNaN(y[1]))
                      return console.log(T), x;
                    for (e = 0; e < w; e++)
                      if (
                        ((_ = a),
                        isNaN(y[e])
                          ? (l = (a = y[e].toUpperCase()) !== y[e])
                          : e--,
                        (s = +y[e + 1]),
                        (o = +y[e + 2]),
                        l && ((s += C), (o += F)),
                        e || ((c = s), (f = o)),
                        "M" === a)
                      )
                        h && (h.length < 8 ? (x.length -= 1) : (b += h.length)),
                          (C = c = s),
                          (F = f = o),
                          (h = [s, o]),
                          x.push(h),
                          (e += 2),
                          (a = "L");
                      else if ("C" === a)
                        h || (h = [0, 0]),
                          l || (C = F = 0),
                          h.push(
                            s,
                            o,
                            C + 1 * y[e + 3],
                            F + 1 * y[e + 4],
                            (C += 1 * y[e + 5]),
                            (F += 1 * y[e + 6])
                          ),
                          (e += 6);
                      else if ("S" === a)
                        (d = C),
                          (D = F),
                          ("C" !== _ && "S" !== _) ||
                            ((d += C - h[h.length - 4]),
                            (D += F - h[h.length - 3])),
                          l || (C = F = 0),
                          h.push(
                            d,
                            D,
                            s,
                            o,
                            (C += 1 * y[e + 3]),
                            (F += 1 * y[e + 4])
                          ),
                          (e += 4);
                      else if ("Q" === a)
                        (d = C + (s - C) * E),
                          (D = F + (o - F) * E),
                          l || (C = F = 0),
                          (C += 1 * y[e + 3]),
                          (F += 1 * y[e + 4]),
                          h.push(d, D, C + (s - C) * E, F + (o - F) * E, C, F),
                          (e += 4);
                      else if ("T" === a)
                        (d = C - h[h.length - 4]),
                          (D = F - h[h.length - 3]),
                          h.push(
                            C + d,
                            F + D,
                            s + (C + 1.5 * d - s) * E,
                            o + (F + 1.5 * D - o) * E,
                            (C = s),
                            (F = o)
                          ),
                          (e += 2);
                      else if ("H" === a) A(C, F, (C = s), F), (e += 1);
                      else if ("V" === a)
                        A(C, F, C, (F = s + (l ? F - C : 0))), (e += 1);
                      else if ("L" === a || "Z" === a)
                        "Z" === a && ((s = c), (o = f), (h.closed = !0)),
                          ("L" === a || u(C - s) > 0.5 || u(F - o) > 0.5) &&
                            (A(C, F, s, o), "L" === a && (e += 2)),
                          (C = s),
                          (F = o);
                      else if ("A" === a) {
                        if (
                          ((m = y[e + 4]),
                          (v = y[e + 5]),
                          (d = y[e + 6]),
                          (D = y[e + 7]),
                          (n = 7),
                          m.length > 1 &&
                            (m.length < 3
                              ? ((D = d), (d = v), n--)
                              : ((D = v), (d = m.substr(2)), (n -= 2)),
                            (v = m.charAt(1)),
                            (m = m.charAt(0))),
                          (g = p(
                            C,
                            F,
                            +y[e + 1],
                            +y[e + 2],
                            +y[e + 3],
                            +m,
                            +v,
                            (l ? C : 0) + 1 * d,
                            (l ? F : 0) + 1 * D
                          )),
                          (e += n),
                          g)
                        )
                          for (n = 0; n < g.length; n++) h.push(g[n]);
                        (C = h[h.length - 2]), (F = h[h.length - 1]);
                      } else console.log(T);
                    return (
                      (e = h.length) < 6
                        ? (x.pop(), (e = 0))
                        : h[0] === h[e - 2] &&
                          h[1] === h[e - 1] &&
                          (h.closed = !0),
                      (x.totalPoints = b + e),
                      x
                    );
                  })(t)[0]),
                4 === (n = g.length))
              )
                g.unshift(0, 0), g.push(1, 1), (n = 8);
              else if ((n - 2) % 6) throw "Invalid CustomEase";
              for (
                (0 == +g[0] && 1 == +g[n - 2]) ||
                  (function (t, e, n) {
                    n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                    var r,
                      i = -1 * +t[0],
                      s = -n,
                      o = t.length,
                      a = 1 / (+t[o - 2] + i),
                      u =
                        -e ||
                        (Math.abs(+t[o - 1] - +t[1]) <
                        0.01 * (+t[o - 2] - +t[0])
                          ? (function (t) {
                              var e,
                                n = t.length,
                                r = 1e20;
                              for (e = 1; e < n; e += 6)
                                +t[e] < r && (r = +t[e]);
                              return r;
                            })(t) + s
                          : +t[o - 1] + s);
                    for (u = u ? 1 / u : -a, r = 0; r < o; r += 2)
                      (t[r] = (+t[r] + i) * a),
                        (t[r + 1] = (+t[r + 1] + s) * u);
                  })(g, e.height, e.originY),
                  this.segment = g,
                  a = 2;
                a < n;
                a += 6
              )
                (s = { x: +g[a - 2], y: +g[a - 1] }),
                  (o = { x: +g[a + 4], y: +g[a + 5] }),
                  m.push(s, o),
                  x(
                    s.x,
                    s.y,
                    +g[a],
                    +g[a + 1],
                    +g[a + 2],
                    +g[a + 3],
                    o.x,
                    o.y,
                    1 / (2e5 * F),
                    m,
                    m.length - 1
                  );
              for (n = m.length, a = 0; a < n; a++)
                (c = m[a]),
                  (f = m[a - 1] || c),
                  (c.x > f.x || (f.y !== c.y && f.x === c.x) || c === f) &&
                  c.x <= 1
                    ? ((f.cx = c.x - f.x),
                      (f.cy = c.y - f.y),
                      (f.n = c),
                      (f.nx = c.x),
                      E &&
                        a > 1 &&
                        Math.abs(f.cy / f.cx - m[a - 2].cy / m[a - 2].cx) > 2 &&
                        (E = 0),
                      f.cx < _ &&
                        (f.cx
                          ? (_ = f.cx)
                          : ((f.cx = 0.001),
                            a === n - 1 &&
                              ((f.x -= 0.001),
                              (_ = Math.min(_, 0.001)),
                              (E = 0)))))
                    : (m.splice(a--, 1), n--);
              if (((l = 1 / (n = (1 / _ + 1) | 0)), (h = 0), (c = m[0]), E)) {
                for (a = 0; a < n; a++)
                  (D = a * l),
                    c.nx < D && (c = m[++h]),
                    (s = c.y + ((D - c.x) / c.cx) * c.cy),
                    (C[a] = { x: D, cx: l, y: s, cy: 0, nx: 9 }),
                    a && (C[a - 1].cy = s - C[a - 1].y);
                C[n - 1].cy = m[m.length - 1].y - s;
              } else {
                for (a = 0; a < n; a++)
                  c.nx < a * l && (c = m[++h]), (C[a] = c);
                h < m.length - 1 && (C[a - 1] = m[m.length - 2]);
              }
              return (
                (this.ease = function (t) {
                  var e = C[(t * n) | 0] || C[n - 1];
                  return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                }),
                (this.ease.custom = this),
                this.id && d && d.registerEase(this.id, this.ease),
                this
              );
            }),
            (e.getSVGData = function (e) {
              return t.getSVGData(this, e);
            }),
            (t.create = function (e, n, r) {
              return new t(e, n, r).ease;
            }),
            (t.register = function (t) {
              (d = t), _();
            }),
            (t.get = function (t) {
              return d.parseEase(t);
            }),
            (t.getSVGData = function (e, n) {
              var r,
                i,
                s,
                o,
                a,
                u,
                l,
                c,
                p,
                D,
                g = (n = n || {}).width || 100,
                _ = n.height || 100,
                v = n.x || 0,
                y = (n.y || 0) + _,
                x = d.utils.toArray(n.path)[0];
              if (
                (n.invert && ((_ = -_), (y = 0)),
                "string" == typeof e && (e = d.parseEase(e)),
                e.custom && (e = e.custom),
                e instanceof t)
              )
                r = (function (t) {
                  h(t[0]) && (t = [t]);
                  var e,
                    n,
                    r,
                    i,
                    s = "",
                    o = t.length;
                  for (n = 0; n < o; n++) {
                    for (
                      i = t[n],
                        s += "M" + f(i[0]) + "," + f(i[1]) + " C",
                        e = i.length,
                        r = 2;
                      r < e;
                      r++
                    )
                      s +=
                        f(i[r++]) +
                        "," +
                        f(i[r++]) +
                        " " +
                        f(i[r++]) +
                        "," +
                        f(i[r++]) +
                        " " +
                        f(i[r++]) +
                        "," +
                        f(i[r]) +
                        " ";
                    i.closed && (s += "z");
                  }
                  return s;
                })(
                  (function (t, e, n, r, i, s, o) {
                    for (var a, u, l, h, c, f = t.length; --f > -1; )
                      for (u = (a = t[f]).length, l = 0; l < u; l += 2)
                        (h = a[l]),
                          (c = a[l + 1]),
                          (a[l] = h * e + 0 * c + s),
                          (a[l + 1] = 0 * h + c * i + o);
                    return (t._dirty = 1), t;
                  })([e.segment], g, 0, 0, -_, v, y)
                );
              else {
                for (
                  r = [v, y],
                    o = 1 / (l = Math.max(5, 200 * (n.precision || 1))),
                    c = 5 / (l += 2),
                    p = m(v + o * g),
                    i = ((D = m(y + e(o) * -_)) - y) / (p - v),
                    s = 2;
                  s < l;
                  s++
                )
                  (a = m(v + s * o * g)),
                    (u = m(y + e(s * o) * -_)),
                    (Math.abs((u - D) / (a - p) - i) > c || s === l - 1) &&
                      (r.push(p, D), (i = (u - D) / (a - p))),
                    (p = a),
                    (D = u);
                r = "M" + r.join(",");
              }
              return x && x.setAttribute("d", r), r;
            }),
            t
          );
        })();
      g() && d.registerPlugin(C), (C.version = "3.12.5");
    },
    3220: (t, e, n) => {
      n.d(e, { w: () => qt });
      var r,
        i,
        s,
        o,
        a,
        u,
        l,
        h,
        c,
        f = "transform",
        p = f + "Origin",
        d = function (t) {
          var e = t.ownerDocument || t;
          !(f in t.style) &&
            "msTransform" in t.style &&
            (p = (f = "msTransform") + "Origin");
          for (; e.parentNode && (e = e.parentNode); );
          if (((i = window), (l = new x()), e)) {
            (r = e),
              (s = e.documentElement),
              (o = e.body),
              ((h = r.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
              )).style.transform = "none");
            var n = e.createElement("div"),
              a = e.createElement("div"),
              u = e && (e.body || e.firstElementChild);
            u &&
              u.appendChild &&
              (u.appendChild(n),
              n.appendChild(a),
              n.setAttribute(
                "style",
                "position:static;transform:translate3d(0,0,1px)"
              ),
              (c = a.offsetParent !== n),
              u.removeChild(n));
          }
          return e;
        },
        D = [],
        g = [],
        _ = function (t) {
          return (
            t.ownerSVGElement ||
            ("svg" === (t.tagName + "").toLowerCase() ? t : null)
          );
        },
        m = function t(e) {
          return (
            "fixed" === i.getComputedStyle(e).position ||
            ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
          );
        },
        v = function t(e, n) {
          if (e.parentNode && (r || d(e))) {
            var i = _(e),
              s = i
                ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
                : "http://www.w3.org/1999/xhtml",
              o = i ? (n ? "rect" : "g") : "div",
              l = 2 !== n ? 0 : 100,
              h = 3 === n ? 100 : 0,
              c =
                "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
              f = r.createElementNS
                ? r.createElementNS(s.replace(/^https/, "http"), o)
                : r.createElement(o);
            return (
              n &&
                (i
                  ? (u || (u = t(e)),
                    f.setAttribute("width", 0.01),
                    f.setAttribute("height", 0.01),
                    f.setAttribute(
                      "transform",
                      "translate(" + l + "," + h + ")"
                    ),
                    u.appendChild(f))
                  : (a || ((a = t(e)).style.cssText = c),
                    (f.style.cssText =
                      c +
                      "width:0.1px;height:0.1px;top:" +
                      h +
                      "px;left:" +
                      l +
                      "px"),
                    a.appendChild(f))),
              f
            );
          }
          throw "Need document and parent.";
        },
        y = function (t, e, n, r, i, s, o) {
          return (
            (t.a = e), (t.b = n), (t.c = r), (t.d = i), (t.e = s), (t.f = o), t
          );
        },
        x = (function () {
          function t(t, e, n, r, i, s) {
            void 0 === t && (t = 1),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === r && (r = 1),
              void 0 === i && (i = 0),
              void 0 === s && (s = 0),
              y(this, t, e, n, r, i, s);
          }
          var e = t.prototype;
          return (
            (e.inverse = function () {
              var t = this.a,
                e = this.b,
                n = this.c,
                r = this.d,
                i = this.e,
                s = this.f,
                o = t * r - e * n || 1e-10;
              return y(
                this,
                r / o,
                -e / o,
                -n / o,
                t / o,
                (n * s - r * i) / o,
                -(t * s - e * i) / o
              );
            }),
            (e.multiply = function (t) {
              var e = this.a,
                n = this.b,
                r = this.c,
                i = this.d,
                s = this.e,
                o = this.f,
                a = t.a,
                u = t.c,
                l = t.b,
                h = t.d,
                c = t.e,
                f = t.f;
              return y(
                this,
                a * e + l * r,
                a * n + l * i,
                u * e + h * r,
                u * n + h * i,
                s + c * e + f * r,
                o + c * n + f * i
              );
            }),
            (e.clone = function () {
              return new t(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (e.equals = function (t) {
              var e = this.a,
                n = this.b,
                r = this.c,
                i = this.d,
                s = this.e,
                o = this.f;
              return (
                e === t.a &&
                n === t.b &&
                r === t.c &&
                i === t.d &&
                s === t.e &&
                o === t.f
              );
            }),
            (e.apply = function (t, e) {
              void 0 === e && (e = {});
              var n = t.x,
                r = t.y,
                i = this.a,
                s = this.b,
                o = this.c,
                a = this.d,
                u = this.e,
                l = this.f;
              return (
                (e.x = n * i + r * o + u || 0),
                (e.y = n * s + r * a + l || 0),
                e
              );
            }),
            t
          );
        })();
      function C(t, e, n, y) {
        if (!t || !t.parentNode || (r || d(t)).documentElement === t)
          return new x();
        var C = (function (t) {
            for (var e, n; t && t !== o; )
              (n = t._gsap) && n.uncache && n.get(t, "x"),
                n &&
                  !n.scaleX &&
                  !n.scaleY &&
                  n.renderTransform &&
                  ((n.scaleX = n.scaleY = 1e-4),
                  n.renderTransform(1, n),
                  e ? e.push(n) : (e = [n])),
                (t = t.parentNode);
            return e;
          })(t),
          F = _(t) ? D : g,
          E = (function (t, e) {
            var n,
              r,
              s,
              o,
              d,
              m,
              y = _(t),
              C = t === y,
              F = y ? D : g,
              E = t.parentNode;
            if (t === i) return t;
            if (
              (F.length || F.push(v(t, 1), v(t, 2), v(t, 3)),
              (n = y ? u : a),
              y)
            )
              C
                ? ((s = (function (t) {
                    var e,
                      n = t.getCTM();
                    return (
                      n ||
                        ((e = t.style[f]),
                        (t.style[f] = "none"),
                        t.appendChild(h),
                        (n = h.getCTM()),
                        t.removeChild(h),
                        e
                          ? (t.style[f] = e)
                          : t.style.removeProperty(
                              f.replace(/([A-Z])/g, "-$1").toLowerCase()
                            )),
                      n || l.clone()
                    );
                  })(t)),
                  (o = -s.e / s.a),
                  (d = -s.f / s.d),
                  (r = l))
                : t.getBBox
                ? ((s = t.getBBox()),
                  (o =
                    (r = (r = t.transform ? t.transform.baseVal : {})
                      .numberOfItems
                      ? r.numberOfItems > 1
                        ? (function (t) {
                            for (
                              var e = new x(), n = 0;
                              n < t.numberOfItems;
                              n++
                            )
                              e.multiply(t.getItem(n).matrix);
                            return e;
                          })(r)
                        : r.getItem(0).matrix
                      : l).a *
                      s.x +
                    r.c * s.y),
                  (d = r.b * s.x + r.d * s.y))
                : ((r = new x()), (o = d = 0)),
                e && "g" === t.tagName.toLowerCase() && (o = d = 0),
                (C ? y : E).appendChild(n),
                n.setAttribute(
                  "transform",
                  "matrix(" +
                    r.a +
                    "," +
                    r.b +
                    "," +
                    r.c +
                    "," +
                    r.d +
                    "," +
                    (r.e + o) +
                    "," +
                    (r.f + d) +
                    ")"
                );
            else {
              if (((o = d = 0), c))
                for (
                  r = t.offsetParent, s = t;
                  s && (s = s.parentNode) && s !== r && s.parentNode;

                )
                  (i.getComputedStyle(s)[f] + "").length > 4 &&
                    ((o = s.offsetLeft), (d = s.offsetTop), (s = 0));
              if (
                "absolute" !== (m = i.getComputedStyle(t)).position &&
                "fixed" !== m.position
              )
                for (r = t.offsetParent; E && E !== r; )
                  (o += E.scrollLeft || 0),
                    (d += E.scrollTop || 0),
                    (E = E.parentNode);
              ((s = n.style).top = t.offsetTop - d + "px"),
                (s.left = t.offsetLeft - o + "px"),
                (s[f] = m[f]),
                (s[p] = m[p]),
                (s.position = "fixed" === m.position ? "fixed" : "absolute"),
                t.parentNode.appendChild(n);
            }
            return n;
          })(t, n),
          w = F[0].getBoundingClientRect(),
          b = F[1].getBoundingClientRect(),
          T = F[2].getBoundingClientRect(),
          A = E.parentNode,
          M = !y && m(t),
          k = new x(
            (b.left - w.left) / 100,
            (b.top - w.top) / 100,
            (T.left - w.left) / 100,
            (T.top - w.top) / 100,
            w.left +
              (M
                ? 0
                : i.pageXOffset ||
                  r.scrollLeft ||
                  s.scrollLeft ||
                  o.scrollLeft ||
                  0),
            w.top +
              (M
                ? 0
                : i.pageYOffset ||
                  r.scrollTop ||
                  s.scrollTop ||
                  o.scrollTop ||
                  0)
          );
        if ((A.removeChild(E), C))
          for (w = C.length; w--; )
            ((b = C[w]).scaleX = b.scaleY = 0), b.renderTransform(1, b);
        return e ? k.inverse() : k;
      }
      function F(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var E,
        w,
        b,
        T,
        A,
        M,
        k,
        B,
        S,
        O,
        P,
        N,
        L,
        R,
        Y,
        X,
        z,
        I,
        H,
        W,
        V,
        U,
        q = 0,
        j = function () {
          return "undefined" != typeof window;
        },
        G = function () {
          return E || (j() && (E = window.gsap) && E.registerPlugin && E);
        },
        Q = function (t) {
          return "function" == typeof t;
        },
        Z = function (t) {
          return "object" == typeof t;
        },
        $ = function (t) {
          return void 0 === t;
        },
        K = function () {
          return !1;
        },
        J = "transform",
        tt = "transformOrigin",
        et = function (t) {
          return Math.round(1e4 * t) / 1e4;
        },
        nt = Array.isArray,
        rt = function (t, e) {
          var n = b.createElementNS
            ? b.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : b.createElement(t);
          return n.style ? n : b.createElement(t);
        },
        it = 180 / Math.PI,
        st = 1e20,
        ot = new x(),
        at =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        ut = [],
        lt = {},
        ht = 0,
        ct = /^(?:a|input|textarea|button|select)$/i,
        ft = 0,
        pt = {},
        dt = {},
        Dt = function (t, e) {
          var n,
            r = {};
          for (n in t) r[n] = e ? t[n] * e : t[n];
          return r;
        },
        gt = function t(e, n) {
          for (var r, i = e.length; i--; )
            n
              ? (e[i].style.touchAction = n)
              : e[i].style.removeProperty("touch-action"),
              (r = e[i].children) && r.length && t(r, n);
        },
        _t = function () {
          return ut.forEach(function (t) {
            return t();
          });
        },
        mt = function () {
          return !ut.length && E.ticker.remove(_t);
        },
        vt = function (t) {
          for (var e = ut.length; e--; ) ut[e] === t && ut.splice(e, 1);
          E.to(mt, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: mt,
            data: "_draggable",
          });
        },
        yt = function (t, e, n, r) {
          if (t.addEventListener) {
            var i = L[e];
            (r = r || (P ? { passive: !1 } : null)),
              t.addEventListener(i || e, n, r),
              i && e !== i && t.addEventListener(e, n, r);
          }
        },
        xt = function (t, e, n, r) {
          if (t.removeEventListener) {
            var i = L[e];
            t.removeEventListener(i || e, n, r),
              i && e !== i && t.removeEventListener(e, n, r);
          }
        },
        Ct = function (t) {
          t.preventDefault && t.preventDefault(),
            t.preventManipulation && t.preventManipulation();
        },
        Ft = function t(e) {
          (R = e.touches && q < e.touches.length), xt(e.target, "touchend", t);
        },
        Et = function (t) {
          (R = t.touches && q < t.touches.length), yt(t.target, "touchend", Ft);
        },
        wt = function (t) {
          return (
            w.pageYOffset ||
            t.scrollTop ||
            t.documentElement.scrollTop ||
            t.body.scrollTop ||
            0
          );
        },
        bt = function (t) {
          return (
            w.pageXOffset ||
            t.scrollLeft ||
            t.documentElement.scrollLeft ||
            t.body.scrollLeft ||
            0
          );
        },
        Tt = function t(e, n) {
          yt(e, "scroll", n), Mt(e.parentNode) || t(e.parentNode, n);
        },
        At = function t(e, n) {
          xt(e, "scroll", n), Mt(e.parentNode) || t(e.parentNode, n);
        },
        Mt = function (t) {
          return !(
            t &&
            t !== T &&
            9 !== t.nodeType &&
            t !== b.body &&
            t !== w &&
            t.nodeType &&
            t.parentNode
          );
        },
        kt = function (t, e) {
          var n = "x" === e ? "Width" : "Height",
            r = "scroll" + n,
            i = "client" + n;
          return Math.max(
            0,
            Mt(t)
              ? Math.max(T[r], A[r]) - (w["inner" + n] || T[i] || A[i])
              : t[r] - t[i]
          );
        },
        Bt = function t(e, n) {
          var r = kt(e, "x"),
            i = kt(e, "y");
          Mt(e) ? (e = dt) : t(e.parentNode, n),
            (e._gsMaxScrollX = r),
            (e._gsMaxScrollY = i),
            n ||
              ((e._gsScrollX = e.scrollLeft || 0),
              (e._gsScrollY = e.scrollTop || 0));
        },
        St = function (t, e, n) {
          var r = t.style;
          r &&
            ($(r[e]) && (e = S(e, t) || e),
            null == n
              ? r.removeProperty &&
                r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
              : (r[e] = n));
        },
        Ot = function (t) {
          return w.getComputedStyle(
            t instanceof Element ? t : t.host || (t.parentNode || {}).host || t
          );
        },
        Pt = {},
        Nt = function (t) {
          if (t === w)
            return (
              (Pt.left = Pt.top = 0),
              (Pt.width = Pt.right =
                T.clientWidth || t.innerWidth || A.clientWidth || 0),
              (Pt.height = Pt.bottom =
                (t.innerHeight || 0) - 20 < T.clientHeight
                  ? T.clientHeight
                  : t.innerHeight || A.clientHeight || 0),
              Pt
            );
          var e = t.ownerDocument || b,
            n = $(t.pageX)
              ? t.nodeType || $(t.left) || $(t.top)
                ? O(t)[0].getBoundingClientRect()
                : t
              : {
                  left: t.pageX - bt(e),
                  top: t.pageY - wt(e),
                  right: t.pageX - bt(e) + 1,
                  bottom: t.pageY - wt(e) + 1,
                };
          return (
            $(n.right) && !$(n.width)
              ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
              : $(n.width) &&
                (n = {
                  width: n.right - n.left,
                  height: n.bottom - n.top,
                  right: n.right,
                  left: n.left,
                  bottom: n.bottom,
                  top: n.top,
                }),
            n
          );
        },
        Lt = function (t, e, n) {
          var r,
            i = t.vars,
            s = i[n],
            o = t._listeners[e];
          return (
            Q(s) &&
              (r = s.apply(
                i.callbackScope || t,
                i[n + "Params"] || [t.pointerEvent]
              )),
            o && !1 === t.dispatchEvent(e) && (r = !1),
            r
          );
        },
        Rt = function (t, e) {
          var n,
            r,
            i,
            s = O(t)[0];
          return s.nodeType || s === w
            ? Xt(s, e)
            : $(t.left)
            ? {
                left: (r = t.min || t.minX || t.minRotation || 0),
                top: (n = t.min || t.minY || 0),
                width: (t.max || t.maxX || t.maxRotation || 0) - r,
                height: (t.max || t.maxY || 0) - n,
              }
            : ((i = { x: 0, y: 0 }),
              {
                left: t.left - i.x,
                top: t.top - i.y,
                width: t.width,
                height: t.height,
              });
        },
        Yt = {},
        Xt = function (t, e) {
          e = O(e)[0];
          var n,
            r,
            i,
            s,
            o,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            D = t.getBBox && t.ownerSVGElement,
            g = t.ownerDocument || b;
          if (t === w)
            (i = wt(g)),
              (r =
                (n = bt(g)) +
                (g.documentElement.clientWidth ||
                  t.innerWidth ||
                  g.body.clientWidth ||
                  0)),
              (s =
                i +
                ((t.innerHeight || 0) - 20 < g.documentElement.clientHeight
                  ? g.documentElement.clientHeight
                  : t.innerHeight || g.body.clientHeight || 0));
          else {
            if (e === w || $(e)) return t.getBoundingClientRect();
            (n = i = 0),
              D
                ? ((f = (c = t.getBBox()).width), (p = c.height))
                : (t.viewBox &&
                    (c = t.viewBox.baseVal) &&
                    ((n = c.x || 0),
                    (i = c.y || 0),
                    (f = c.width),
                    (p = c.height)),
                  f ||
                    ((c = "border-box" === (d = Ot(t)).boxSizing),
                    (f =
                      (parseFloat(d.width) || t.clientWidth || 0) +
                      (c
                        ? 0
                        : parseFloat(d.borderLeftWidth) +
                          parseFloat(d.borderRightWidth))),
                    (p =
                      (parseFloat(d.height) || t.clientHeight || 0) +
                      (c
                        ? 0
                        : parseFloat(d.borderTopWidth) +
                          parseFloat(d.borderBottomWidth))))),
              (r = f),
              (s = p);
          }
          return t === e
            ? { left: n, top: i, width: r - n, height: s - i }
            : ((a = (o = C(e, !0).multiply(C(t))).apply({ x: n, y: i })),
              (u = o.apply({ x: r, y: i })),
              (l = o.apply({ x: r, y: s })),
              (h = o.apply({ x: n, y: s })),
              {
                left: (n = Math.min(a.x, u.x, l.x, h.x)),
                top: (i = Math.min(a.y, u.y, l.y, h.y)),
                width: Math.max(a.x, u.x, l.x, h.x) - n,
                height: Math.max(a.y, u.y, l.y, h.y) - i,
              });
        },
        zt = function (t, e, n, r, i, s) {
          var o,
            a,
            u,
            l = {};
          if (e)
            if (1 !== i && e instanceof Array) {
              if (((l.end = o = []), (u = e.length), Z(e[0])))
                for (a = 0; a < u; a++) o[a] = Dt(e[a], i);
              else for (a = 0; a < u; a++) o[a] = e[a] * i;
              (n += 1.1), (r -= 1.1);
            } else
              Q(e)
                ? (l.end = function (n) {
                    var r,
                      s,
                      o = e.call(t, n);
                    if (1 !== i)
                      if (Z(o)) {
                        for (s in ((r = {}), o)) r[s] = o[s] * i;
                        o = r;
                      } else o *= i;
                    return o;
                  })
                : (l.end = e);
          return (
            (n || 0 === n) && (l.max = n),
            (r || 0 === r) && (l.min = r),
            s && (l.velocity = 0),
            l
          );
        },
        It = function t(e) {
          var n;
          return (
            !(!e || !e.getAttribute || e === A) &&
            (!(
              "true" !== (n = e.getAttribute("data-clickable")) &&
              ("false" === n ||
                (!ct.test(e.nodeName + "") &&
                  "true" !== e.getAttribute("contentEditable")))
            ) ||
              t(e.parentNode))
          );
        },
        Ht = function (t, e) {
          for (var n, r = t.length; r--; )
            ((n = t[r]).ondragstart = n.onselectstart = e ? null : K),
              E.set(n, { lazy: !0, userSelect: e ? "text" : "none" });
        },
        Wt = function t(e) {
          return (
            "fixed" === Ot(e).position ||
            ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
          );
        },
        Vt = function (t, e) {
          (t = E.utils.toArray(t)[0]), (e = e || {});
          var n,
            r,
            i,
            s,
            o,
            a,
            u = document.createElement("div"),
            l = u.style,
            h = t.firstChild,
            c = 0,
            f = 0,
            p = t.scrollTop,
            d = t.scrollLeft,
            D = t.scrollWidth,
            g = t.scrollHeight,
            _ = 0,
            m = 0,
            v = 0;
          V && !1 !== e.force3D
            ? ((o = "translate3d("), (a = "px,0px)"))
            : J && ((o = "translate("), (a = "px)")),
            (this.scrollTop = function (t, e) {
              if (!arguments.length) return -this.top();
              this.top(-t, e);
            }),
            (this.scrollLeft = function (t, e) {
              if (!arguments.length) return -this.left();
              this.left(-t, e);
            }),
            (this.left = function (n, r) {
              if (!arguments.length) return -(t.scrollLeft + f);
              var i = t.scrollLeft - d,
                s = f;
              if ((i > 2 || i < -2) && !r)
                return (
                  (d = t.scrollLeft),
                  E.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                  this.left(-d),
                  void (e.onKill && e.onKill())
                );
              (n = -n) < 0
                ? ((f = (n - 0.5) | 0), (n = 0))
                : n > m
                ? ((f = (n - m) | 0), (n = m))
                : (f = 0),
                (f || s) &&
                  (this._skip || (l[J] = o + -f + "px," + -c + a),
                  f + _ >= 0 && (l.paddingRight = f + _ + "px")),
                (t.scrollLeft = 0 | n),
                (d = t.scrollLeft);
            }),
            (this.top = function (n, r) {
              if (!arguments.length) return -(t.scrollTop + c);
              var i = t.scrollTop - p,
                s = c;
              if ((i > 2 || i < -2) && !r)
                return (
                  (p = t.scrollTop),
                  E.killTweensOf(this, { top: 1, scrollTop: 1 }),
                  this.top(-p),
                  void (e.onKill && e.onKill())
                );
              (n = -n) < 0
                ? ((c = (n - 0.5) | 0), (n = 0))
                : n > v
                ? ((c = (n - v) | 0), (n = v))
                : (c = 0),
                (c || s) && (this._skip || (l[J] = o + -f + "px," + -c + a)),
                (t.scrollTop = 0 | n),
                (p = t.scrollTop);
            }),
            (this.maxScrollTop = function () {
              return v;
            }),
            (this.maxScrollLeft = function () {
              return m;
            }),
            (this.disable = function () {
              for (h = u.firstChild; h; )
                (s = h.nextSibling), t.appendChild(h), (h = s);
              t === u.parentNode && t.removeChild(u);
            }),
            (this.enable = function () {
              if ((h = t.firstChild) !== u) {
                for (; h; ) (s = h.nextSibling), u.appendChild(h), (h = s);
                t.appendChild(u), this.calibrate();
              }
            }),
            (this.calibrate = function (e) {
              var s,
                o,
                a,
                h = t.clientWidth === n;
              (p = t.scrollTop),
                (d = t.scrollLeft),
                (h &&
                  t.clientHeight === r &&
                  u.offsetHeight === i &&
                  D === t.scrollWidth &&
                  g === t.scrollHeight &&
                  !e) ||
                  ((c || f) &&
                    ((o = this.left()),
                    (a = this.top()),
                    this.left(-t.scrollLeft),
                    this.top(-t.scrollTop)),
                  (s = Ot(t)),
                  (h && !e) ||
                    ((l.display = "block"),
                    (l.width = "auto"),
                    (l.paddingRight = "0px"),
                    (_ = Math.max(0, t.scrollWidth - t.clientWidth)) &&
                      (_ +=
                        parseFloat(s.paddingLeft) +
                        (U ? parseFloat(s.paddingRight) : 0))),
                  (l.display = "inline-block"),
                  (l.position = "relative"),
                  (l.overflow = "visible"),
                  (l.verticalAlign = "top"),
                  (l.boxSizing = "content-box"),
                  (l.width = "100%"),
                  (l.paddingRight = _ + "px"),
                  U && (l.paddingBottom = s.paddingBottom),
                  (n = t.clientWidth),
                  (r = t.clientHeight),
                  (D = t.scrollWidth),
                  (g = t.scrollHeight),
                  (m = t.scrollWidth - n),
                  (v = t.scrollHeight - r),
                  (i = u.offsetHeight),
                  (l.display = "block"),
                  (o || a) && (this.left(o), this.top(a)));
            }),
            (this.content = u),
            (this.element = t),
            (this._skip = !1),
            this.enable();
        },
        Ut = function (t) {
          if (j() && document.body) {
            var e = window && window.navigator;
            (w = window),
              (b = document),
              (T = b.documentElement),
              (A = b.body),
              (M = rt("div")),
              (I = !!window.PointerEvent),
              ((k = rt("div")).style.cssText =
                "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
              (z = "grab" === k.style.cursor ? "grab" : "move"),
              (Y = e && -1 !== e.userAgent.toLowerCase().indexOf("android")),
              (N =
                ("ontouchstart" in T && "orientation" in w) ||
                (e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
              (r = rt("div")),
              (s = (i = rt("div")).style),
              (o = A),
              (s.display = "inline-block"),
              (s.position = "relative"),
              (r.style.cssText =
                "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
              r.appendChild(i),
              o.appendChild(r),
              (n = i.offsetHeight + 18 > r.scrollHeight),
              o.removeChild(r),
              (U = n),
              (L = (function (t) {
                for (
                  var e = t.split(","),
                    n = (
                      ("onpointerdown" in M)
                        ? "pointerdown,pointermove,pointerup,pointercancel"
                        : ("onmspointerdown" in M)
                        ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                        : t
                    ).split(","),
                    r = {},
                    i = 4;
                  --i > -1;

                )
                  (r[e[i]] = n[i]), (r[n[i]] = e[i]);
                try {
                  T.addEventListener(
                    "test",
                    null,
                    Object.defineProperty({}, "passive", {
                      get: function () {
                        P = 1;
                      },
                    })
                  );
                } catch (t) {}
                return r;
              })("touchstart,touchmove,touchend,touchcancel")),
              yt(b, "touchcancel", K),
              yt(w, "touchmove", K),
              A && A.addEventListener("touchstart", K),
              yt(b, "contextmenu", function () {
                for (var t in lt) lt[t].isPressed && lt[t].endDrag();
              }),
              (E = B = G());
          }
          var n, r, i, s, o;
          E
            ? ((X = E.plugins.inertia),
              (H = E.core.context || function () {}),
              (S = E.utils.checkPrefix),
              (J = S(J)),
              (tt = S(tt)),
              (O = E.utils.toArray),
              (W = E.core.getStyleSaver),
              (V = !!S("perspective")))
            : t && console.warn("Please gsap.registerPlugin(Draggable)");
        },
        qt = (function (t) {
          var e, n;
          function r(e, n) {
            var i;
            (i = t.call(this) || this),
              B || Ut(1),
              (e = O(e)[0]),
              (i.styles = W && W(e, "transform,left,top")),
              X || (X = E.plugins.inertia),
              (i.vars = n = Dt(n || {})),
              (i.target = e),
              (i.x = i.y = i.rotation = 0),
              (i.dragResistance = parseFloat(n.dragResistance) || 0),
              (i.edgeResistance = isNaN(n.edgeResistance)
                ? 1
                : parseFloat(n.edgeResistance) || 0),
              (i.lockAxis = n.lockAxis),
              (i.autoScroll = n.autoScroll || 0),
              (i.lockedAxis = null),
              (i.allowEventDefault = !!n.allowEventDefault),
              E.getProperty(e, "x");
            var s,
              o,
              a,
              u,
              l,
              h,
              c,
              f,
              p,
              d,
              D,
              g,
              _,
              m,
              v,
              y,
              A,
              M,
              S,
              P,
              V,
              U,
              j,
              G,
              K,
              J,
              rt,
              ct,
              mt,
              Ft,
              kt,
              Pt,
              Xt,
              qt = (n.type || "x,y").toLowerCase(),
              jt = ~qt.indexOf("x") || ~qt.indexOf("y"),
              Gt = -1 !== qt.indexOf("rotation"),
              Qt = Gt ? "rotation" : jt ? "x" : "left",
              Zt = jt ? "y" : "top",
              $t = !(
                !~qt.indexOf("x") &&
                !~qt.indexOf("left") &&
                "scroll" !== qt
              ),
              Kt = !(
                !~qt.indexOf("y") &&
                !~qt.indexOf("top") &&
                "scroll" !== qt
              ),
              Jt = n.minimumMovement || 2,
              te = F(i),
              ee = O(n.trigger || n.handle || e),
              ne = {},
              re = 0,
              ie = !1,
              se = n.autoScrollMarginTop || 40,
              oe = n.autoScrollMarginRight || 40,
              ae = n.autoScrollMarginBottom || 40,
              ue = n.autoScrollMarginLeft || 40,
              le = n.clickableTest || It,
              he = 0,
              ce = e._gsap || E.core.getCache(e),
              fe = Wt(e),
              pe = function (t, n) {
                return parseFloat(ce.get(e, t, n));
              },
              de = e.ownerDocument || b,
              De = function (t) {
                return (
                  Ct(t),
                  t.stopImmediatePropagation && t.stopImmediatePropagation(),
                  !1
                );
              },
              ge = function t(n) {
                if (te.autoScroll && te.isDragging && (ie || A)) {
                  var r,
                    i,
                    s,
                    a,
                    u,
                    l,
                    h,
                    c,
                    p = e,
                    d = 15 * te.autoScroll;
                  for (
                    ie = !1,
                      dt.scrollTop =
                        null != w.pageYOffset
                          ? w.pageYOffset
                          : null != de.documentElement.scrollTop
                          ? de.documentElement.scrollTop
                          : de.body.scrollTop,
                      dt.scrollLeft =
                        null != w.pageXOffset
                          ? w.pageXOffset
                          : null != de.documentElement.scrollLeft
                          ? de.documentElement.scrollLeft
                          : de.body.scrollLeft,
                      a = te.pointerX - dt.scrollLeft,
                      u = te.pointerY - dt.scrollTop;
                    p && !i;

                  )
                    (r = (i = Mt(p.parentNode)) ? dt : p.parentNode),
                      (s = i
                        ? {
                            bottom: Math.max(
                              T.clientHeight,
                              w.innerHeight || 0
                            ),
                            right: Math.max(T.clientWidth, w.innerWidth || 0),
                            left: 0,
                            top: 0,
                          }
                        : r.getBoundingClientRect()),
                      (l = h = 0),
                      Kt &&
                        ((c = r._gsMaxScrollY - r.scrollTop) < 0
                          ? (h = c)
                          : u > s.bottom - ae && c
                          ? ((ie = !0),
                            (h = Math.min(
                              c,
                              (d * (1 - Math.max(0, s.bottom - u) / ae)) | 0
                            )))
                          : u < s.top + se &&
                            r.scrollTop &&
                            ((ie = !0),
                            (h = -Math.min(
                              r.scrollTop,
                              (d * (1 - Math.max(0, u - s.top) / se)) | 0
                            ))),
                        h && (r.scrollTop += h)),
                      $t &&
                        ((c = r._gsMaxScrollX - r.scrollLeft) < 0
                          ? (l = c)
                          : a > s.right - oe && c
                          ? ((ie = !0),
                            (l = Math.min(
                              c,
                              (d * (1 - Math.max(0, s.right - a) / oe)) | 0
                            )))
                          : a < s.left + ue &&
                            r.scrollLeft &&
                            ((ie = !0),
                            (l = -Math.min(
                              r.scrollLeft,
                              (d * (1 - Math.max(0, a - s.left) / ue)) | 0
                            ))),
                        l && (r.scrollLeft += l)),
                      i &&
                        (l || h) &&
                        (w.scrollTo(r.scrollLeft, r.scrollTop),
                        Me(te.pointerX + l, te.pointerY + h)),
                      (p = r);
                }
                if (A) {
                  var D = te.x,
                    g = te.y;
                  Gt
                    ? ((te.deltaX = D - parseFloat(ce.rotation)),
                      (te.rotation = D),
                      (ce.rotation = D + "deg"),
                      ce.renderTransform(1, ce))
                    : o
                    ? (Kt && ((te.deltaY = g - o.top()), o.top(g)),
                      $t && ((te.deltaX = D - o.left()), o.left(D)))
                    : jt
                    ? (Kt &&
                        ((te.deltaY = g - parseFloat(ce.y)), (ce.y = g + "px")),
                      $t &&
                        ((te.deltaX = D - parseFloat(ce.x)), (ce.x = D + "px")),
                      ce.renderTransform(1, ce))
                    : (Kt &&
                        ((te.deltaY = g - parseFloat(e.style.top || 0)),
                        (e.style.top = g + "px")),
                      $t &&
                        ((te.deltaX = D - parseFloat(e.style.left || 0)),
                        (e.style.left = D + "px"))),
                    !f ||
                      n ||
                      ct ||
                      ((ct = !0),
                      !1 === Lt(te, "drag", "onDrag") &&
                        ($t && (te.x -= te.deltaX),
                        Kt && (te.y -= te.deltaY),
                        t(!0)),
                      (ct = !1));
                }
                A = !1;
              },
              _e = function (t, n) {
                var r,
                  i,
                  s = te.x,
                  a = te.y;
                e._gsap || (ce = E.core.getCache(e)),
                  ce.uncache && E.getProperty(e, "x"),
                  jt
                    ? ((te.x = parseFloat(ce.x)), (te.y = parseFloat(ce.y)))
                    : Gt
                    ? (te.x = te.rotation = parseFloat(ce.rotation))
                    : o
                    ? ((te.y = o.top()), (te.x = o.left()))
                    : ((te.y =
                        parseFloat(e.style.top || ((i = Ot(e)) && i.top)) || 0),
                      (te.x = parseFloat(e.style.left || (i || {}).left) || 0)),
                  (S || P || V) &&
                    !n &&
                    (te.isDragging || te.isThrowing) &&
                    (V &&
                      ((pt.x = te.x),
                      (pt.y = te.y),
                      (r = V(pt)).x !== te.x && ((te.x = r.x), (A = !0)),
                      r.y !== te.y && ((te.y = r.y), (A = !0))),
                    S &&
                      (r = S(te.x)) !== te.x &&
                      ((te.x = r), Gt && (te.rotation = r), (A = !0)),
                    P && ((r = P(te.y)) !== te.y && (te.y = r), (A = !0))),
                  A && ge(!0),
                  t ||
                    ((te.deltaX = te.x - s),
                    (te.deltaY = te.y - a),
                    Lt(te, "throwupdate", "onThrowUpdate"));
              },
              me = function (t, e, n, r) {
                return (
                  null == e && (e = -st),
                  null == n && (n = st),
                  Q(t)
                    ? function (i) {
                        var s = te.isPressed ? 1 - te.edgeResistance : 1;
                        return (
                          t.call(
                            te,
                            (i > n
                              ? n + (i - n) * s
                              : i < e
                              ? e + (i - e) * s
                              : i) * r
                          ) * r
                        );
                      }
                    : nt(t)
                    ? function (r) {
                        for (var i, s, o = t.length, a = 0, u = st; --o > -1; )
                          (s = (i = t[o]) - r) < 0 && (s = -s),
                            s < u && i >= e && i <= n && ((a = o), (u = s));
                        return t[a];
                      }
                    : isNaN(t)
                    ? function (t) {
                        return t;
                      }
                    : function () {
                        return t * r;
                      }
                );
              },
              ve = function () {
                var t, r, i, s;
                (c = !1),
                  o
                    ? (o.calibrate(),
                      (te.minX = D = -o.maxScrollLeft()),
                      (te.minY = _ = -o.maxScrollTop()),
                      (te.maxX = d = te.maxY = g = 0),
                      (c = !0))
                    : n.bounds &&
                      ((t = Rt(n.bounds, e.parentNode)),
                      Gt
                        ? ((te.minX = D = t.left),
                          (te.maxX = d = t.left + t.width),
                          (te.minY = _ = te.maxY = g = 0))
                        : $(n.bounds.maxX) && $(n.bounds.maxY)
                        ? ((r = Rt(e, e.parentNode)),
                          (te.minX = D =
                            Math.round(pe(Qt, "px") + t.left - r.left)),
                          (te.minY = _ =
                            Math.round(pe(Zt, "px") + t.top - r.top)),
                          (te.maxX = d = Math.round(D + (t.width - r.width))),
                          (te.maxY = g = Math.round(_ + (t.height - r.height))))
                        : ((t = n.bounds),
                          (te.minX = D = t.minX),
                          (te.minY = _ = t.minY),
                          (te.maxX = d = t.maxX),
                          (te.maxY = g = t.maxY)),
                      D > d &&
                        ((te.minX = d), (te.maxX = d = D), (D = te.minX)),
                      _ > g &&
                        ((te.minY = g), (te.maxY = g = _), (_ = te.minY)),
                      Gt && ((te.minRotation = D), (te.maxRotation = d)),
                      (c = !0)),
                  n.liveSnap &&
                    ((i = !0 === n.liveSnap ? n.snap || {} : n.liveSnap),
                    (s = nt(i) || Q(i)),
                    Gt
                      ? ((S = me(s ? i : i.rotation, D, d, 1)), (P = null))
                      : i.points
                      ? (V = (function (t, e, n, r, i, s, o) {
                          return (
                            (s = s && s < st ? s * s : st),
                            Q(t)
                              ? function (a) {
                                  var u,
                                    l,
                                    h,
                                    c = te.isPressed
                                      ? 1 - te.edgeResistance
                                      : 1,
                                    f = a.x,
                                    p = a.y;
                                  return (
                                    (a.x = f =
                                      f > n
                                        ? n + (f - n) * c
                                        : f < e
                                        ? e + (f - e) * c
                                        : f),
                                    (a.y = p =
                                      p > i
                                        ? i + (p - i) * c
                                        : p < r
                                        ? r + (p - r) * c
                                        : p),
                                    (u = t.call(te, a)) !== a &&
                                      ((a.x = u.x), (a.y = u.y)),
                                    1 !== o && ((a.x *= o), (a.y *= o)),
                                    s < st &&
                                      (l = a.x - f) * l + (h = a.y - p) * h >
                                        s &&
                                      ((a.x = f), (a.y = p)),
                                    a
                                  );
                                }
                              : nt(t)
                              ? function (e) {
                                  for (
                                    var n, r, i, o, a = t.length, u = 0, l = st;
                                    --a > -1;

                                  )
                                    (o =
                                      (n = (i = t[a]).x - e.x) * n +
                                      (r = i.y - e.y) * r) < l &&
                                      ((u = a), (l = o));
                                  return l <= s ? t[u] : e;
                                }
                              : function (t) {
                                  return t;
                                }
                          );
                        })(s ? i : i.points, D, d, _, g, i.radius, o ? -1 : 1))
                      : ($t &&
                          (S = me(
                            s ? i : i.x || i.left || i.scrollLeft,
                            D,
                            d,
                            o ? -1 : 1
                          )),
                        Kt &&
                          (P = me(
                            s ? i : i.y || i.top || i.scrollTop,
                            _,
                            g,
                            o ? -1 : 1
                          ))));
              },
              ye = function () {
                (te.isThrowing = !1),
                  Lt(te, "throwcomplete", "onThrowComplete");
              },
              xe = function () {
                te.isThrowing = !1;
              },
              Ce = function (t, r) {
                var i, s, a, u;
                t && X
                  ? (!0 === t &&
                      ((i = n.snap || n.liveSnap || {}),
                      (s = nt(i) || Q(i)),
                      (t = {
                        resistance:
                          (n.throwResistance || n.resistance || 1e3) /
                          (Gt ? 10 : 1),
                      }),
                      Gt
                        ? (t.rotation = zt(te, s ? i : i.rotation, d, D, 1, r))
                        : ($t &&
                            (t[Qt] = zt(
                              te,
                              s ? i : i.points || i.x || i.left,
                              d,
                              D,
                              o ? -1 : 1,
                              r || "x" === te.lockedAxis
                            )),
                          Kt &&
                            (t[Zt] = zt(
                              te,
                              s ? i : i.points || i.y || i.top,
                              g,
                              _,
                              o ? -1 : 1,
                              r || "y" === te.lockedAxis
                            )),
                          (i.points || (nt(i) && Z(i[0]))) &&
                            ((t.linkedProps = Qt + "," + Zt),
                            (t.radius = i.radius)))),
                    (te.isThrowing = !0),
                    (u = isNaN(n.overshootTolerance)
                      ? 1 === n.edgeResistance
                        ? 0
                        : 1 - te.edgeResistance + 0.2
                      : n.overshootTolerance),
                    t.duration ||
                      (t.duration = {
                        max: Math.max(
                          n.minDuration || 0,
                          "maxDuration" in n ? n.maxDuration : 2
                        ),
                        min: isNaN(n.minDuration)
                          ? 0 === u || (Z(t) && t.resistance > 1e3)
                            ? 0
                            : 0.5
                          : n.minDuration,
                        overshoot: u,
                      }),
                    (te.tween = a =
                      E.to(o || e, {
                        inertia: t,
                        data: "_draggable",
                        inherit: !1,
                        onComplete: ye,
                        onInterrupt: xe,
                        onUpdate: n.fastMode ? Lt : _e,
                        onUpdateParams: n.fastMode
                          ? [te, "onthrowupdate", "onThrowUpdate"]
                          : i && i.radius
                          ? [!1, !0]
                          : [],
                      })),
                    n.fastMode ||
                      (o && (o._skip = !0),
                      a.render(1e9, !0, !0),
                      _e(!0, !0),
                      (te.endX = te.x),
                      (te.endY = te.y),
                      Gt && (te.endRotation = te.x),
                      a.play(0),
                      _e(!0, !0),
                      o && (o._skip = !1)))
                  : c && te.applyBounds();
              },
              Fe = function (t) {
                var n,
                  r = G;
                (G = C(e.parentNode, !0)),
                  t &&
                    te.isPressed &&
                    !G.equals(r || new x()) &&
                    ((n = r.inverse().apply({ x: a, y: u })),
                    G.apply(n, n),
                    (a = n.x),
                    (u = n.y)),
                  G.equals(ot) && (G = null);
              },
              Ee = function () {
                var t,
                  n,
                  r,
                  i = 1 - te.edgeResistance,
                  s = fe ? bt(de) : 0,
                  f = fe ? wt(de) : 0;
                jt &&
                  ((ce.x = pe(Qt, "px") + "px"),
                  (ce.y = pe(Zt, "px") + "px"),
                  ce.renderTransform()),
                  Fe(!1),
                  (Yt.x = te.pointerX - s),
                  (Yt.y = te.pointerY - f),
                  G && G.apply(Yt, Yt),
                  (a = Yt.x),
                  (u = Yt.y),
                  A && (Me(te.pointerX, te.pointerY), ge(!0)),
                  (Pt = C(e)),
                  o
                    ? (ve(), (h = o.top()), (l = o.left()))
                    : (we() ? (_e(!0, !0), ve()) : te.applyBounds(),
                      Gt
                        ? ((t = e.ownerSVGElement
                            ? [
                                ce.xOrigin - e.getBBox().x,
                                ce.yOrigin - e.getBBox().y,
                              ]
                            : (Ot(e)[tt] || "0 0").split(" ")),
                          (y = te.rotationOrigin =
                            C(e).apply({
                              x: parseFloat(t[0]) || 0,
                              y: parseFloat(t[1]) || 0,
                            })),
                          _e(!0, !0),
                          (n = te.pointerX - y.x - s),
                          (r = y.y - te.pointerY + f),
                          (l = te.x),
                          (h = te.y = Math.atan2(r, n) * it))
                        : ((h = pe(Zt, "px")), (l = pe(Qt, "px")))),
                  c &&
                    i &&
                    (l > d
                      ? (l = d + (l - d) / i)
                      : l < D && (l = D - (D - l) / i),
                    Gt ||
                      (h > g
                        ? (h = g + (h - g) / i)
                        : h < _ && (h = _ - (_ - h) / i))),
                  (te.startX = l = et(l)),
                  (te.startY = h = et(h));
              },
              we = function () {
                return te.tween && te.tween.isActive();
              },
              be = function () {
                !k.parentNode ||
                  we() ||
                  te.isDragging ||
                  k.parentNode.removeChild(k);
              },
              Te = function (t, i) {
                var l;
                if (
                  !s ||
                  te.isPressed ||
                  !t ||
                  (!(
                    ("mousedown" !== t.type && "pointerdown" !== t.type) ||
                    i
                  ) &&
                    at() - he < 30 &&
                    L[te.pointerEvent.type])
                )
                  kt && t && s && Ct(t);
                else {
                  if (
                    ((K = we()),
                    (Xt = !1),
                    (te.pointerEvent = t),
                    L[t.type]
                      ? ((j = ~t.type.indexOf("touch")
                          ? t.currentTarget || t.target
                          : de),
                        yt(j, "touchend", ke),
                        yt(j, "touchmove", Ae),
                        yt(j, "touchcancel", ke),
                        yt(de, "touchstart", Et))
                      : ((j = null), yt(de, "mousemove", Ae)),
                    (rt = null),
                    (I && j) ||
                      (yt(de, "mouseup", ke),
                      t && t.target && yt(t.target, "mouseup", ke)),
                    (U =
                      le.call(te, t.target) && !1 === n.dragClickables && !i))
                  )
                    return (
                      yt(t.target, "change", ke),
                      Lt(te, "pressInit", "onPressInit"),
                      Lt(te, "press", "onPress"),
                      Ht(ee, !0),
                      void (kt = !1)
                    );
                  var h;
                  if (
                    ((J =
                      !(
                        !j ||
                        $t === Kt ||
                        !1 === te.vars.allowNativeTouchScrolling ||
                        (te.vars.allowContextMenu &&
                          t &&
                          (t.ctrlKey || t.which > 2))
                      ) && ($t ? "y" : "x")),
                    (kt = !J && !te.allowEventDefault) &&
                      (Ct(t), yt(w, "touchforcechange", Ct)),
                    t.changedTouches
                      ? ((t = m = t.changedTouches[0]), (v = t.identifier))
                      : t.pointerId
                      ? (v = t.pointerId)
                      : (m = v = null),
                    q++,
                    (h = ge),
                    ut.push(h),
                    1 === ut.length && E.ticker.add(_t),
                    (u = te.pointerY = t.pageY),
                    (a = te.pointerX = t.pageX),
                    Lt(te, "pressInit", "onPressInit"),
                    (J || te.autoScroll) && Bt(e.parentNode),
                    !e.parentNode ||
                      !te.autoScroll ||
                      o ||
                      Gt ||
                      !e.parentNode._gsMaxScrollX ||
                      k.parentNode ||
                      e.getBBox ||
                      ((k.style.width = e.parentNode.scrollWidth + "px"),
                      e.parentNode.appendChild(k)),
                    Ee(),
                    te.tween && te.tween.kill(),
                    (te.isThrowing = !1),
                    E.killTweensOf(o || e, ne, !0),
                    o && E.killTweensOf(e, { scrollTo: 1 }, !0),
                    (te.tween = te.lockedAxis = null),
                    (n.zIndexBoost || (!Gt && !o && !1 !== n.zIndexBoost)) &&
                      (e.style.zIndex = r.zIndex++),
                    (te.isPressed = !0),
                    (f = !(!n.onDrag && !te._listeners.drag)),
                    (p = !(!n.onMove && !te._listeners.move)),
                    !1 !== n.cursor || n.activeCursor)
                  )
                    for (l = ee.length; --l > -1; )
                      E.set(ee[l], {
                        cursor:
                          n.activeCursor ||
                          n.cursor ||
                          ("grab" === z ? "grabbing" : z),
                      });
                  Lt(te, "press", "onPress");
                }
              },
              Ae = function (t) {
                var n,
                  r,
                  i,
                  o,
                  l,
                  h,
                  c = t;
                if (s && !R && te.isPressed && t) {
                  if (((te.pointerEvent = t), (n = t.changedTouches))) {
                    if ((t = n[0]) !== m && t.identifier !== v) {
                      for (
                        o = n.length;
                        --o > -1 &&
                        (t = n[o]).identifier !== v &&
                        t.target !== e;

                      );
                      if (o < 0) return;
                    }
                  } else if (t.pointerId && v && t.pointerId !== v) return;
                  j &&
                  J &&
                  !rt &&
                  ((Yt.x = t.pageX - (fe ? bt(de) : 0)),
                  (Yt.y = t.pageY - (fe ? wt(de) : 0)),
                  G && G.apply(Yt, Yt),
                  (r = Yt.x),
                  (i = Yt.y),
                  (((l = Math.abs(r - a)) !== (h = Math.abs(i - u)) &&
                    (l > Jt || h > Jt)) ||
                    (Y && J === rt)) &&
                    ((rt = l > h && $t ? "x" : "y"),
                    J && rt !== J && yt(w, "touchforcechange", Ct),
                    !1 !== te.vars.lockAxisOnTouchScroll &&
                      $t &&
                      Kt &&
                      ((te.lockedAxis = "x" === rt ? "y" : "x"),
                      Q(te.vars.onLockAxis) && te.vars.onLockAxis.call(te, c)),
                    Y && J === rt))
                    ? ke(c)
                    : (te.allowEventDefault ||
                      (J && (!rt || J === rt)) ||
                      !1 === c.cancelable
                        ? kt && (kt = !1)
                        : (Ct(c), (kt = !0)),
                      te.autoScroll && (ie = !0),
                      Me(t.pageX, t.pageY, p));
                } else kt && t && s && Ct(t);
              },
              Me = function (t, e, n) {
                var r,
                  i,
                  s,
                  o,
                  f,
                  p,
                  m = 1 - te.dragResistance,
                  v = 1 - te.edgeResistance,
                  x = te.pointerX,
                  C = te.pointerY,
                  F = h,
                  E = te.x,
                  w = te.y,
                  b = te.endX,
                  T = te.endY,
                  M = te.endRotation,
                  k = A;
                (te.pointerX = t),
                  (te.pointerY = e),
                  fe && ((t -= bt(de)), (e -= wt(de))),
                  Gt
                    ? ((o = Math.atan2(y.y - e, t - y.x) * it),
                      (f = te.y - o) > 180
                        ? ((h -= 360), (te.y = o))
                        : f < -180 && ((h += 360), (te.y = o)),
                      te.x !== l || Math.abs(h - o) > Jt
                        ? ((te.y = o), (s = l + (h - o) * m))
                        : (s = l))
                    : (G &&
                        ((p = t * G.a + e * G.c + G.e),
                        (e = t * G.b + e * G.d + G.f),
                        (t = p)),
                      (i = e - u) < Jt && i > -Jt && (i = 0),
                      (r = t - a) < Jt && r > -Jt && (r = 0),
                      (te.lockAxis || te.lockedAxis) &&
                        (r || i) &&
                        ((p = te.lockedAxis) ||
                          ((te.lockedAxis = p =
                            $t && Math.abs(r) > Math.abs(i)
                              ? "y"
                              : Kt
                              ? "x"
                              : null),
                          p &&
                            Q(te.vars.onLockAxis) &&
                            te.vars.onLockAxis.call(te, te.pointerEvent)),
                        "y" === p ? (i = 0) : "x" === p && (r = 0)),
                      (s = et(l + r * m)),
                      (o = et(h + i * m))),
                  (S || P || V) &&
                    (te.x !== s || (te.y !== o && !Gt)) &&
                    (V &&
                      ((pt.x = s),
                      (pt.y = o),
                      (p = V(pt)),
                      (s = et(p.x)),
                      (o = et(p.y))),
                    S && (s = et(S(s))),
                    P && (o = et(P(o)))),
                  c &&
                    (s > d
                      ? (s = d + Math.round((s - d) * v))
                      : s < D && (s = D + Math.round((s - D) * v)),
                    Gt ||
                      (o > g
                        ? (o = Math.round(g + (o - g) * v))
                        : o < _ && (o = Math.round(_ + (o - _) * v)))),
                  (te.x !== s || (te.y !== o && !Gt)) &&
                    (Gt
                      ? ((te.endRotation = te.x = te.endX = s), (A = !0))
                      : (Kt && ((te.y = te.endY = o), (A = !0)),
                        $t && ((te.x = te.endX = s), (A = !0))),
                    n && !1 === Lt(te, "move", "onMove")
                      ? ((te.pointerX = x),
                        (te.pointerY = C),
                        (h = F),
                        (te.x = E),
                        (te.y = w),
                        (te.endX = b),
                        (te.endY = T),
                        (te.endRotation = M),
                        (A = k))
                      : !te.isDragging &&
                        te.isPressed &&
                        ((te.isDragging = Xt = !0),
                        Lt(te, "dragstart", "onDragStart")));
              },
              ke = function t(r, i) {
                if (
                  s &&
                  te.isPressed &&
                  (!r ||
                    null == v ||
                    i ||
                    !(
                      (r.pointerId && r.pointerId !== v && r.target !== e) ||
                      (r.changedTouches &&
                        !(function (t, e) {
                          for (var n = t.length; n--; )
                            if (t[n].identifier === e) return !0;
                        })(r.changedTouches, v))
                    ))
                ) {
                  te.isPressed = !1;
                  var o,
                    a,
                    u,
                    l,
                    h,
                    c = r,
                    f = te.isDragging,
                    p =
                      te.vars.allowContextMenu &&
                      r &&
                      (r.ctrlKey || r.which > 2),
                    d = E.delayedCall(0.001, be);
                  if (
                    (j
                      ? (xt(j, "touchend", t),
                        xt(j, "touchmove", Ae),
                        xt(j, "touchcancel", t),
                        xt(de, "touchstart", Et))
                      : xt(de, "mousemove", Ae),
                    xt(w, "touchforcechange", Ct),
                    (I && j) ||
                      (xt(de, "mouseup", t),
                      r && r.target && xt(r.target, "mouseup", t)),
                    (A = !1),
                    f && ((re = ft = at()), (te.isDragging = !1)),
                    vt(ge),
                    U && !p)
                  )
                    return (
                      r && (xt(r.target, "change", t), (te.pointerEvent = c)),
                      Ht(ee, !1),
                      Lt(te, "release", "onRelease"),
                      Lt(te, "click", "onClick"),
                      void (U = !1)
                    );
                  for (a = ee.length; --a > -1; )
                    St(
                      ee[a],
                      "cursor",
                      n.cursor || (!1 !== n.cursor ? z : null)
                    );
                  if ((q--, r)) {
                    if (
                      (o = r.changedTouches) &&
                      (r = o[0]) !== m &&
                      r.identifier !== v
                    ) {
                      for (
                        a = o.length;
                        --a > -1 &&
                        (r = o[a]).identifier !== v &&
                        r.target !== e;

                      );
                      if (a < 0 && !i) return;
                    }
                    (te.pointerEvent = c),
                      (te.pointerX = r.pageX),
                      (te.pointerY = r.pageY);
                  }
                  return (
                    p && c
                      ? (Ct(c), (kt = !0), Lt(te, "release", "onRelease"))
                      : c && !f
                      ? ((kt = !1),
                        K &&
                          (n.snap || n.bounds) &&
                          Ce(n.inertia || n.throwProps),
                        Lt(te, "release", "onRelease"),
                        (Y && "touchmove" === c.type) ||
                          -1 !== c.type.indexOf("cancel") ||
                          (Lt(te, "click", "onClick"),
                          at() - he < 300 &&
                            Lt(te, "doubleclick", "onDoubleClick"),
                          (l = c.target || e),
                          (he = at()),
                          (h = function () {
                            he === mt ||
                              !te.enabled() ||
                              te.isPressed ||
                              c.defaultPrevented ||
                              (l.click
                                ? l.click()
                                : de.createEvent &&
                                  ((u =
                                    de.createEvent(
                                      "MouseEvents"
                                    )).initMouseEvent(
                                    "click",
                                    !0,
                                    !0,
                                    w,
                                    1,
                                    te.pointerEvent.screenX,
                                    te.pointerEvent.screenY,
                                    te.pointerX,
                                    te.pointerY,
                                    !1,
                                    !1,
                                    !1,
                                    !1,
                                    0,
                                    null
                                  ),
                                  l.dispatchEvent(u)));
                          }),
                          Y || c.defaultPrevented || E.delayedCall(0.05, h)))
                      : (Ce(n.inertia || n.throwProps),
                        te.allowEventDefault ||
                        !c ||
                        (!1 === n.dragClickables && le.call(te, c.target)) ||
                        !f ||
                        (J && (!rt || J !== rt)) ||
                        !1 === c.cancelable
                          ? (kt = !1)
                          : ((kt = !0), Ct(c)),
                        Lt(te, "release", "onRelease")),
                    we() && d.duration(te.tween.duration()),
                    f && Lt(te, "dragend", "onDragEnd"),
                    !0
                  );
                }
                kt && r && s && Ct(r);
              },
              Be = function (t) {
                if (t && te.isDragging && !o) {
                  var n = t.target || e.parentNode,
                    r = n.scrollLeft - n._gsScrollX,
                    i = n.scrollTop - n._gsScrollY;
                  (r || i) &&
                    (G
                      ? ((a -= r * G.a + i * G.c), (u -= i * G.d + r * G.b))
                      : ((a -= r), (u -= i)),
                    (n._gsScrollX += r),
                    (n._gsScrollY += i),
                    Me(te.pointerX, te.pointerY));
                }
              },
              Se = function (t) {
                var e = at(),
                  n = e - he < 100,
                  r = e - re < 50,
                  i = n && mt === he,
                  s = te.pointerEvent && te.pointerEvent.defaultPrevented,
                  o = n && Ft === he,
                  a = t.isTrusted || (null == t.isTrusted && n && i);
                if (
                  ((i || (r && !1 !== te.vars.suppressClickOnDrag)) &&
                    t.stopImmediatePropagation &&
                    t.stopImmediatePropagation(),
                  n &&
                    (!te.pointerEvent || !te.pointerEvent.defaultPrevented) &&
                    (!i || (a && !o)))
                )
                  return a && i && (Ft = he), void (mt = he);
                (te.isPressed || r || n) &&
                  ((a && t.detail && n && !s) || Ct(t)),
                  n ||
                    r ||
                    Xt ||
                    (t && t.target && (te.pointerEvent = t),
                    Lt(te, "click", "onClick"));
              },
              Oe = function (t) {
                return G
                  ? {
                      x: t.x * G.a + t.y * G.c + G.e,
                      y: t.x * G.b + t.y * G.d + G.f,
                    }
                  : { x: t.x, y: t.y };
              };
            return (
              (M = r.get(e)) && M.kill(),
              (i.startDrag = function (t, n) {
                var r, i, s, o;
                Te(t || te.pointerEvent, !0),
                  n &&
                    !te.hitTest(t || te.pointerEvent) &&
                    ((r = Nt(t || te.pointerEvent)),
                    (i = Nt(e)),
                    (s = Oe({
                      x: r.left + r.width / 2,
                      y: r.top + r.height / 2,
                    })),
                    (o = Oe({
                      x: i.left + i.width / 2,
                      y: i.top + i.height / 2,
                    })),
                    (a -= s.x - o.x),
                    (u -= s.y - o.y)),
                  te.isDragging ||
                    ((te.isDragging = Xt = !0),
                    Lt(te, "dragstart", "onDragStart"));
              }),
              (i.drag = Ae),
              (i.endDrag = function (t) {
                return ke(t || te.pointerEvent, !0);
              }),
              (i.timeSinceDrag = function () {
                return te.isDragging ? 0 : (at() - re) / 1e3;
              }),
              (i.timeSinceClick = function () {
                return (at() - he) / 1e3;
              }),
              (i.hitTest = function (t, e) {
                return r.hitTest(te.target, t, e);
              }),
              (i.getDirection = function (t, n) {
                var r,
                  i,
                  s,
                  o,
                  a,
                  u,
                  c =
                    "velocity" === t && X
                      ? t
                      : Z(t) && !Gt
                      ? "element"
                      : "start";
                return (
                  "element" === c && ((a = Nt(te.target)), (u = Nt(t))),
                  (r =
                    "start" === c
                      ? te.x - l
                      : "velocity" === c
                      ? X.getVelocity(e, Qt)
                      : a.left + a.width / 2 - (u.left + u.width / 2)),
                  Gt
                    ? r < 0
                      ? "counter-clockwise"
                      : "clockwise"
                    : ((n = n || 2),
                      (i =
                        "start" === c
                          ? te.y - h
                          : "velocity" === c
                          ? X.getVelocity(e, Zt)
                          : a.top + a.height / 2 - (u.top + u.height / 2)),
                      (o =
                        (s = Math.abs(r / i)) < 1 / n
                          ? ""
                          : r < 0
                          ? "left"
                          : "right"),
                      s < n &&
                        ("" !== o && (o += "-"), (o += i < 0 ? "up" : "down")),
                      o)
                );
              }),
              (i.applyBounds = function (t, r) {
                var i, s, o, a, u, l;
                if (t && n.bounds !== t)
                  return (n.bounds = t), te.update(!0, r);
                if ((_e(!0), ve(), c && !we())) {
                  if (
                    ((i = te.x),
                    (s = te.y),
                    i > d ? (i = d) : i < D && (i = D),
                    s > g ? (s = g) : s < _ && (s = _),
                    (te.x !== i || te.y !== s) &&
                      ((o = !0),
                      (te.x = te.endX = i),
                      Gt ? (te.endRotation = i) : (te.y = te.endY = s),
                      (A = !0),
                      ge(!0),
                      te.autoScroll && !te.isDragging))
                  )
                    for (
                      Bt(e.parentNode),
                        a = e,
                        dt.scrollTop =
                          null != w.pageYOffset
                            ? w.pageYOffset
                            : null != de.documentElement.scrollTop
                            ? de.documentElement.scrollTop
                            : de.body.scrollTop,
                        dt.scrollLeft =
                          null != w.pageXOffset
                            ? w.pageXOffset
                            : null != de.documentElement.scrollLeft
                            ? de.documentElement.scrollLeft
                            : de.body.scrollLeft;
                      a && !l;

                    )
                      (u = (l = Mt(a.parentNode)) ? dt : a.parentNode),
                        Kt &&
                          u.scrollTop > u._gsMaxScrollY &&
                          (u.scrollTop = u._gsMaxScrollY),
                        $t &&
                          u.scrollLeft > u._gsMaxScrollX &&
                          (u.scrollLeft = u._gsMaxScrollX),
                        (a = u);
                  te.isThrowing &&
                    (o ||
                      te.endX > d ||
                      te.endX < D ||
                      te.endY > g ||
                      te.endY < _) &&
                    Ce(n.inertia || n.throwProps, o);
                }
                return te;
              }),
              (i.update = function (t, n, r) {
                if (n && te.isPressed) {
                  var i = C(e),
                    s = Pt.apply({ x: te.x - l, y: te.y - h }),
                    o = C(e.parentNode, !0);
                  o.apply({ x: i.e - s.x, y: i.f - s.y }, s),
                    (te.x -= s.x - o.e),
                    (te.y -= s.y - o.f),
                    ge(!0),
                    Ee();
                }
                var a = te.x,
                  u = te.y;
                return (
                  Fe(!n),
                  t ? te.applyBounds() : (A && r && ge(!0), _e(!0)),
                  n && (Me(te.pointerX, te.pointerY), A && ge(!0)),
                  te.isPressed &&
                    !n &&
                    (($t && Math.abs(a - te.x) > 0.01) ||
                      (Kt && Math.abs(u - te.y) > 0.01 && !Gt)) &&
                    Ee(),
                  te.autoScroll &&
                    (Bt(e.parentNode, te.isDragging),
                    (ie = te.isDragging),
                    ge(!0),
                    At(e, Be),
                    Tt(e, Be)),
                  te
                );
              }),
              (i.enable = function (t) {
                var r,
                  i,
                  a,
                  u = { lazy: !0 };
                if (
                  (!1 !== n.cursor && (u.cursor = n.cursor || z),
                  E.utils.checkPrefix("touchCallout") &&
                    (u.touchCallout = "none"),
                  "soft" !== t)
                ) {
                  for (
                    gt(
                      ee,
                      $t === Kt
                        ? "none"
                        : (n.allowNativeTouchScrolling &&
                            (e.scrollHeight === e.clientHeight) ==
                              (e.scrollWidth === e.clientHeight)) ||
                          n.allowEventDefault
                        ? "manipulation"
                        : $t
                        ? "pan-y"
                        : "pan-x"
                    ),
                      i = ee.length;
                    --i > -1;

                  )
                    (a = ee[i]),
                      I || yt(a, "mousedown", Te),
                      yt(a, "touchstart", Te),
                      yt(a, "click", Se, !0),
                      E.set(a, u),
                      a.getBBox &&
                        a.ownerSVGElement &&
                        $t !== Kt &&
                        E.set(a.ownerSVGElement, {
                          touchAction:
                            n.allowNativeTouchScrolling || n.allowEventDefault
                              ? "manipulation"
                              : $t
                              ? "pan-y"
                              : "pan-x",
                        }),
                      n.allowContextMenu || yt(a, "contextmenu", De);
                  Ht(ee, !1);
                }
                return (
                  Tt(e, Be),
                  (s = !0),
                  X &&
                    "soft" !== t &&
                    X.track(o || e, jt ? "x,y" : Gt ? "rotation" : "top,left"),
                  (e._gsDragID = r = "d" + ht++),
                  (lt[r] = te),
                  o && (o.enable(), (o.element._gsDragID = r)),
                  (n.bounds || Gt) && Ee(),
                  n.bounds && te.applyBounds(),
                  te
                );
              }),
              (i.disable = function (t) {
                for (var n, r = te.isDragging, i = ee.length; --i > -1; )
                  St(ee[i], "cursor", null);
                if ("soft" !== t) {
                  for (gt(ee, null), i = ee.length; --i > -1; )
                    (n = ee[i]),
                      St(n, "touchCallout", null),
                      xt(n, "mousedown", Te),
                      xt(n, "touchstart", Te),
                      xt(n, "click", Se, !0),
                      xt(n, "contextmenu", De);
                  Ht(ee, !0),
                    j &&
                      (xt(j, "touchcancel", ke),
                      xt(j, "touchend", ke),
                      xt(j, "touchmove", Ae)),
                    xt(de, "mouseup", ke),
                    xt(de, "mousemove", Ae);
                }
                return (
                  At(e, Be),
                  (s = !1),
                  X &&
                    "soft" !== t &&
                    (X.untrack(
                      o || e,
                      jt ? "x,y" : Gt ? "rotation" : "top,left"
                    ),
                    te.tween && te.tween.kill()),
                  o && o.disable(),
                  vt(ge),
                  (te.isDragging = te.isPressed = U = !1),
                  r && Lt(te, "dragend", "onDragEnd"),
                  te
                );
              }),
              (i.enabled = function (t, e) {
                return arguments.length
                  ? t
                    ? te.enable(e)
                    : te.disable(e)
                  : s;
              }),
              (i.kill = function () {
                return (
                  (te.isThrowing = !1),
                  te.tween && te.tween.kill(),
                  te.disable(),
                  E.set(ee, { clearProps: "userSelect" }),
                  delete lt[e._gsDragID],
                  te
                );
              }),
              (i.revert = function () {
                this.kill(), this.styles && this.styles.revert();
              }),
              ~qt.indexOf("scroll") &&
                ((o = i.scrollProxy =
                  new Vt(
                    e,
                    (function (t, e) {
                      for (var n in e) n in t || (t[n] = e[n]);
                      return t;
                    })(
                      {
                        onKill: function () {
                          te.isPressed && ke(null);
                        },
                      },
                      n
                    )
                  )),
                (e.style.overflowY = Kt && !N ? "auto" : "hidden"),
                (e.style.overflowX = $t && !N ? "auto" : "hidden"),
                (e = o.content)),
              Gt ? (ne.rotation = 1) : ($t && (ne[Qt] = 1), Kt && (ne[Zt] = 1)),
              (ce.force3D = !("force3D" in n) || n.force3D),
              H(F(i)),
              i.enable(),
              i
            );
          }
          return (
            (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n),
            (r.register = function (t) {
              (E = t), Ut();
            }),
            (r.create = function (t, e) {
              return (
                B || Ut(!0),
                O(t).map(function (t) {
                  return new r(t, e);
                })
              );
            }),
            (r.get = function (t) {
              return lt[(O(t)[0] || {})._gsDragID];
            }),
            (r.timeSinceDrag = function () {
              return (at() - ft) / 1e3;
            }),
            (r.hitTest = function (t, e, n) {
              if (t === e) return !1;
              var r,
                i,
                s,
                o = Nt(t),
                a = Nt(e),
                u = o.top,
                l = o.left,
                h = o.right,
                c = o.bottom,
                f = o.width,
                p = o.height,
                d = a.left > h || a.right < l || a.top > c || a.bottom < u;
              return d || !n
                ? !d
                : ((s = -1 !== (n + "").indexOf("%")),
                  (n = parseFloat(n) || 0),
                  ((r = {
                    left: Math.max(l, a.left),
                    top: Math.max(u, a.top),
                  }).width = Math.min(h, a.right) - r.left),
                  (r.height = Math.min(c, a.bottom) - r.top),
                  !(r.width < 0 || r.height < 0) &&
                    (s
                      ? ((n *= 0.01),
                        (i = r.width * r.height) >= f * p * n ||
                          i >= a.width * a.height * n)
                      : r.width > n && r.height > n));
            }),
            r
          );
        })(
          (function () {
            function t(t) {
              (this._listeners = {}), (this.target = t || this);
            }
            var e = t.prototype;
            return (
              (e.addEventListener = function (t, e) {
                var n = this._listeners[t] || (this._listeners[t] = []);
                ~n.indexOf(e) || n.push(e);
              }),
              (e.removeEventListener = function (t, e) {
                var n = this._listeners[t],
                  r = n && n.indexOf(e);
                r >= 0 && n.splice(r, 1);
              }),
              (e.dispatchEvent = function (t) {
                var e,
                  n = this;
                return (
                  (this._listeners[t] || []).forEach(function (r) {
                    return (
                      !1 === r.call(n, { type: t, target: n.target }) &&
                      (e = !1)
                    );
                  }),
                  e
                );
              }),
              t
            );
          })()
        );
      !(function (t, e) {
        for (var n in e) n in t || (t[n] = e[n]);
      })(qt.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1,
      }),
        (qt.zIndex = 1e3),
        (qt.version = "3.12.5"),
        G() && E.registerPlugin(qt);
    },
    5684: (t, e, n) => {
      n.d(e, { o: () => b });
      var r,
        i,
        s,
        o,
        a,
        u,
        l,
        h,
        c = function () {
          return "undefined" != typeof window;
        },
        f = function () {
          return r || (c() && (r = window.gsap) && r.registerPlugin && r);
        },
        p = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        d = {
          rect: ["width", "height"],
          circle: ["r", "r"],
          ellipse: ["rx", "ry"],
          line: ["x2", "y2"],
        },
        D = function (t) {
          return Math.round(1e4 * t) / 1e4;
        },
        g = function (t) {
          return parseFloat(t) || 0;
        },
        _ = function (t, e) {
          var n = g(t);
          return ~t.indexOf("%") ? (n / 100) * e : n;
        },
        m = function (t, e) {
          return g(t.getAttribute(e));
        },
        v = Math.sqrt,
        y = function (t, e, n, r, i, s) {
          return v(
            Math.pow((g(n) - g(t)) * i, 2) + Math.pow((g(r) - g(e)) * s, 2)
          );
        },
        x = function (t) {
          return console.warn(t);
        },
        C = function (t) {
          return "non-scaling-stroke" === t.getAttribute("vector-effect");
        },
        F = function (t) {
          if (!(t = i(t)[0])) return 0;
          var e,
            n,
            r,
            s,
            o,
            a,
            l,
            h = t.tagName.toLowerCase(),
            c = t.style,
            f = 1,
            g = 1;
          C(t) &&
            ((g = t.getScreenCTM()),
            (f = v(g.a * g.a + g.b * g.b)),
            (g = v(g.d * g.d + g.c * g.c)));
          try {
            n = t.getBBox();
          } catch (t) {
            x(
              "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
            );
          }
          var _ = n || { x: 0, y: 0, width: 0, height: 0 },
            F = _.x,
            E = _.y,
            w = _.width,
            b = _.height;
          if (
            ((n && (w || b)) ||
              !d[h] ||
              ((w = m(t, d[h][0])),
              (b = m(t, d[h][1])),
              "rect" !== h && "line" !== h && ((w *= 2), (b *= 2)),
              "line" === h &&
                ((F = m(t, "x1")),
                (E = m(t, "y1")),
                (w = Math.abs(w - F)),
                (b = Math.abs(b - E)))),
            "path" === h)
          )
            (s = c.strokeDasharray),
              (c.strokeDasharray = "none"),
              (e = t.getTotalLength() || 0),
              D(f) !== D(g) &&
                !u &&
                (u = 1) &&
                x(
                  "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
                ),
              (e *= (f + g) / 2),
              (c.strokeDasharray = s);
          else if ("rect" === h) e = 2 * w * f + 2 * b * g;
          else if ("line" === h) e = y(F, E, F + w, E + b, f, g);
          else if ("polyline" === h || "polygon" === h)
            for (
              r = t.getAttribute("points").match(p) || [],
                "polygon" === h && r.push(r[0], r[1]),
                e = 0,
                o = 2;
              o < r.length;
              o += 2
            )
              e += y(r[o - 2], r[o - 1], r[o], r[o + 1], f, g) || 0;
          else
            ("circle" !== h && "ellipse" !== h) ||
              ((a = (w / 2) * f),
              (l = (b / 2) * g),
              (e = Math.PI * (3 * (a + l) - v((3 * a + l) * (a + 3 * l)))));
          return e || 0;
        },
        E = function (t, e) {
          if (!(t = i(t)[0])) return [0, 0];
          e || (e = F(t) + 1);
          var n = s.getComputedStyle(t),
            r = n.strokeDasharray || "",
            o = g(n.strokeDashoffset),
            a = r.indexOf(",");
          return (
            a < 0 && (a = r.indexOf(" ")),
            (r = a < 0 ? e : g(r.substr(0, a))) > e && (r = e),
            [-o || 0, r - o || 0]
          );
        },
        w = function () {
          c() &&
            (document,
            (s = window),
            (a = r = f()),
            (i = r.utils.toArray),
            (l = r.core.getStyleSaver),
            (h = r.core.reverting || function () {}),
            (o = -1 !== ((s.navigator || {}).userAgent || "").indexOf("Edge")));
        },
        b = {
          version: "3.12.5",
          name: "drawSVG",
          register: function (t) {
            (r = t), w();
          },
          init: function (t, e, n, r, i) {
            if (!t.getBBox) return !1;
            a || w();
            var u,
              h,
              c,
              f = F(t);
            return (
              (this.styles =
                l && l(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
              (this.tween = n),
              (this._style = t.style),
              (this._target = t),
              e + "" == "true"
                ? (e = "0 100%")
                : e
                ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
                : (e = "0 0"),
              (h = (function (t, e, n) {
                var r,
                  i,
                  s = t.indexOf(" ");
                return (
                  s < 0
                    ? ((r = void 0 !== n ? n + "" : t), (i = t))
                    : ((r = t.substr(0, s)), (i = t.substr(s + 1))),
                  (r = _(r, e)) > (i = _(i, e)) ? [i, r] : [r, i]
                );
              })(e, f, (u = E(t, f))[0])),
              (this._length = D(f)),
              (this._dash = D(u[1] - u[0])),
              (this._offset = D(-u[0])),
              (this._dashPT = this.add(
                this,
                "_dash",
                this._dash,
                D(h[1] - h[0]),
                0,
                0,
                0,
                0,
                0,
                1
              )),
              (this._offsetPT = this.add(
                this,
                "_offset",
                this._offset,
                D(-h[0]),
                0,
                0,
                0,
                0,
                0,
                1
              )),
              o &&
                (c = s.getComputedStyle(t)).strokeLinecap !==
                  c.strokeLinejoin &&
                ((h = g(c.strokeMiterlimit)),
                this.add(t.style, "strokeMiterlimit", h, h + 0.01)),
              (this._live = C(t) || ~(e + "").indexOf("live")),
              (this._nowrap = ~(e + "").indexOf("nowrap")),
              this._props.push("drawSVG"),
              1
            );
          },
          render: function (t, e) {
            if (e.tween._time || !h()) {
              var n,
                r,
                i,
                s,
                o = e._pt,
                a = e._style;
              if (o) {
                for (
                  e._live &&
                  (n = F(e._target)) !== e._length &&
                  ((r = n / e._length),
                  (e._length = n),
                  e._offsetPT && ((e._offsetPT.s *= r), (e._offsetPT.c *= r)),
                  e._dashPT
                    ? ((e._dashPT.s *= r), (e._dashPT.c *= r))
                    : (e._dash *= r));
                  o;

                )
                  o.r(t, o.d), (o = o._next);
                (i = e._dash || (t && 1 !== t && 1e-4) || 0),
                  (n = e._length - i + 0.1),
                  (s = e._offset),
                  i &&
                    s &&
                    i + Math.abs(s % e._length) > e._length - 0.2 &&
                    (s += s < 0 ? 0.1 : -0.1) &&
                    (n += 0.1),
                  (a.strokeDashoffset = i ? s : s + 0.001),
                  (a.strokeDasharray =
                    n < 0.2
                      ? "none"
                      : i
                      ? i + "px," + (e._nowrap ? 999999 : n) + "px"
                      : "0px, 999999px");
              }
            } else e.styles.revert();
          },
          getLength: F,
          getPosition: E,
        };
      f() && r.registerPlugin(b);
    },
    9052: (t, e, n) => {
      n.d(e, { gF: () => K });
      var r,
        i,
        s,
        o,
        a,
        u,
        l,
        h,
        c = function () {
          return r || ("undefined" != typeof window && (r = window.gsap));
        },
        f = {},
        p = function (t) {
          return h(t).id;
        },
        d = function (t) {
          return f[p("string" == typeof t ? s(t)[0] : t)];
        },
        D = function (t) {
          var e,
            n = a;
          if (t - l >= 0.05)
            for (l = t; n; )
              ((e = n.g(n.t, n.p)) !== n.v1 || t - n.t1 > 0.2) &&
                ((n.v2 = n.v1), (n.v1 = e), (n.t2 = n.t1), (n.t1 = t)),
                (n = n._next);
        },
        g = { deg: 360, rad: 2 * Math.PI },
        _ = function () {
          (r = c()) &&
            ((s = r.utils.toArray),
            (o = r.utils.getUnit),
            (h = r.core.getCache),
            (u = r.ticker),
            (i = 1));
        },
        m = function (t, e, n, r) {
          (this.t = t),
            (this.p = e),
            (this.g = t._gsap.get),
            (this.rCap = g[n || o(this.g(t, e))]),
            (this.v1 = this.v2 = 0),
            (this.t1 = this.t2 = u.time),
            r && ((this._next = r), (r._prev = this));
        },
        v = (function () {
          function t(t, e) {
            i || _(),
              (this.target = s(t)[0]),
              (f[p(this.target)] = this),
              (this._props = {}),
              e && this.add(e);
          }
          t.register = function (t) {
            (r = t), _();
          };
          var e = t.prototype;
          return (
            (e.get = function (t, e) {
              var n,
                r,
                i,
                s =
                  this._props[t] ||
                  console.warn("Not tracking " + t + " velocity.");
              return (
                (n = parseFloat(e ? s.v1 : s.g(s.t, s.p)) - parseFloat(s.v2)),
                (r = s.rCap) &&
                  (n %= r) != n % (r / 2) &&
                  (n = n < 0 ? n + r : n - r),
                (i = n / ((e ? s.t1 : u.time) - s.t2)),
                Math.round(1e4 * i) / 1e4
              );
            }),
            (e.getAll = function () {
              var t,
                e = {},
                n = this._props;
              for (t in n) e[t] = this.get(t);
              return e;
            }),
            (e.isTracking = function (t) {
              return t in this._props;
            }),
            (e.add = function (t, e) {
              t in this._props ||
                (a || (u.add(D), (l = u.time)),
                (a = this._props[t] = new m(this.target, t, e, a)));
            }),
            (e.remove = function (t) {
              var e,
                n,
                r = this._props[t];
              r &&
                ((e = r._prev),
                (n = r._next),
                e && (e._next = n),
                n ? (n._prev = e) : a === r && (u.remove(D), (a = 0)),
                delete this._props[t]);
            }),
            (e.kill = function (t) {
              for (var e in this._props) this.remove(e);
              t || delete f[p(this.target)];
            }),
            (t.track = function (e, n, r) {
              i || _();
              for (
                var o,
                  a,
                  u = [],
                  l = s(e),
                  h = n.split(","),
                  c = (r || "").split(","),
                  f = l.length;
                f--;

              ) {
                for (o = d(l[f]) || new t(l[f]), a = h.length; a--; )
                  o.add(h[a], c[a] || c[0]);
                u.push(o);
              }
              return u;
            }),
            (t.untrack = function (t, e) {
              var n = (e || "").split(",");
              s(t).forEach(function (t) {
                var e = d(t);
                e &&
                  (n.length
                    ? n.forEach(function (t) {
                        return e.remove(t);
                      })
                    : e.kill(1));
              });
            }),
            (t.isTracking = function (t, e) {
              var n = d(t);
              return n && n.isTracking(e);
            }),
            (t.getVelocity = function (t, e) {
              var n = d(t);
              return n && n.isTracking(e)
                ? n.get(e)
                : console.warn("Not tracking velocity of " + e);
            }),
            t
          );
        })();
      (v.getByTarget = d), c() && r.registerPlugin(v);
      var y,
        x,
        C,
        F,
        E,
        w,
        b,
        T,
        A,
        M,
        k,
        B,
        S,
        O,
        P = v.getByTarget,
        N = function () {
          return (
            y ||
            ("undefined" != typeof window &&
              (y = window.gsap) &&
              y.registerPlugin &&
              y)
          );
        },
        L = function (t) {
          return "number" == typeof t;
        },
        R = function (t) {
          return "object" == typeof t;
        },
        Y = function (t) {
          return "function" == typeof t;
        },
        X = Array.isArray,
        z = function (t) {
          return t;
        },
        I = 1e10,
        H = function (t, e, n) {
          for (var r in e) r in t || r === n || (t[r] = e[r]);
          return t;
        },
        W = function t(e) {
          var n,
            r,
            i = {};
          for (n in e) i[n] = R((r = e[n])) && !X(r) ? t(r) : r;
          return i;
        },
        V = function (t, e, n, r, i) {
          var s,
            o,
            a,
            u,
            l = e.length,
            h = 0,
            c = I;
          if (R(t)) {
            for (; l--; ) {
              for (a in ((s = e[l]), (o = 0), t)) o += (u = s[a] - t[a]) * u;
              o < c && ((h = l), (c = o));
            }
            if ((i || I) < I && i < Math.sqrt(c)) return t;
          } else
            for (; l--; )
              (o = (s = e[l]) - t) < 0 && (o = -o),
                o < c && s >= r && s <= n && ((h = l), (c = o));
          return e[h];
        },
        U = function (t, e, n, r, i, s, o) {
          if ("auto" === t.end) return t;
          var a,
            u,
            l = t.end;
          if (((n = isNaN(n) ? I : n), (r = isNaN(r) ? -I : r), R(e))) {
            if (
              ((a = e.calculated
                ? e
                : (Y(l) ? l(e, o) : V(e, l, n, r, s)) || e),
              !e.calculated)
            ) {
              for (u in a) e[u] = a[u];
              e.calculated = !0;
            }
            a = a[i];
          } else a = Y(l) ? l(e, o) : X(l) ? V(e, l, n, r, s) : parseFloat(l);
          return (
            a > n ? (a = n) : a < r && (a = r),
            { max: a, min: a, unitFactor: t.unitFactor }
          );
        },
        q = function (t, e, n) {
          return isNaN(t[e]) ? n : +t[e];
        },
        j = function (t, e) {
          return (0.05 * e * t) / M;
        },
        G = function (t, e, n) {
          return Math.abs(((e - t) * M) / n / 0.05);
        },
        Q = {
          resistance: 1,
          checkpoint: 1,
          preventOvershoot: 1,
          linkedProps: 1,
          radius: 1,
          duration: 1,
        },
        Z = function (t, e, n, r) {
          if (e.linkedProps) {
            var i,
              s,
              o,
              a,
              u,
              l,
              h = e.linkedProps.split(","),
              c = {};
            for (i = 0; i < h.length; i++)
              (o = e[(s = h[i])]) &&
                ((a = L(o.velocity)
                  ? o.velocity
                  : (u = u || P(t)) && u.isTracking(s)
                  ? u.get(s)
                  : 0),
                (l = Math.abs(a / q(o, "resistance", r))),
                (c[s] = parseFloat(n(t, s)) + j(a, l)));
            return c;
          }
        },
        $ = function () {
          (y = N()) &&
            ((C = y.parseEase),
            (F = y.utils.toArray),
            (b = y.utils.getUnit),
            (A = y.core.getCache),
            (k = y.utils.clamp),
            (S = y.core.getStyleSaver),
            (O = y.core.reverting || function () {}),
            (E = C("power3")),
            (M = E(0.05)),
            (T = y.core.PropTween),
            y.config({
              resistance: 100,
              unitFactors: {
                time: 1e3,
                totalTime: 1e3,
                progress: 1e3,
                totalProgress: 1e3,
              },
            }),
            (w = y.config()),
            y.registerPlugin(v),
            (x = 1));
        },
        K = {
          version: "3.12.5",
          name: "inertia",
          register: function (t) {
            (y = t), $();
          },
          init: function (t, e, n, r, i) {
            x || $();
            var s = P(t);
            if ("auto" === e) {
              if (!s)
                return void console.warn(
                  "No inertia tracking on " +
                    t +
                    ". InertiaPlugin.track(target) first."
                );
              e = s.getAll();
            }
            (this.styles = S && "object" == typeof t.style && S(t)),
              (this.target = t),
              (this.tween = n),
              (B = e);
            var o,
              a,
              u,
              l,
              h,
              c,
              f,
              p,
              d,
              D = t._gsap,
              g = D.get,
              _ = e.duration,
              m = R(_),
              v = e.preventOvershoot || (m && 0 === _.overshoot),
              y = q(e, "resistance", w.resistance),
              C = L(_)
                ? _
                : (function (t, e, n, r, i, s) {
                    if (
                      (void 0 === n && (n = 10),
                      void 0 === r && (r = 0.2),
                      void 0 === i && (i = 1),
                      void 0 === s && (s = 0),
                      "string" == typeof t && (t = F(t)[0]),
                      !t)
                    )
                      return 0;
                    var o,
                      a,
                      u,
                      l,
                      h,
                      c,
                      f,
                      p,
                      d,
                      D,
                      g = 0,
                      _ = I,
                      m = e.inertia || e,
                      v = A(t).get,
                      y = q(m, "resistance", w.resistance);
                    for (o in ((D = Z(t, m, v, y)), m))
                      Q[o] ||
                        ((a = m[o]),
                        R(a) ||
                          ((p = p || P(t)) && p.isTracking(o)
                            ? (a = L(a)
                                ? { velocity: a }
                                : { velocity: p.get(o) })
                            : ((l = +a || 0), (u = Math.abs(l / y)))),
                        R(a) &&
                          ((l = L(a.velocity)
                            ? a.velocity
                            : (p = p || P(t)) && p.isTracking(o)
                            ? p.get(o)
                            : 0),
                          (u = k(r, n, Math.abs(l / q(a, "resistance", y)))),
                          (c = (h = parseFloat(v(t, o)) || 0) + j(l, u)),
                          "end" in a &&
                            ((a = U(
                              a,
                              D && o in D ? D : c,
                              a.max,
                              a.min,
                              o,
                              m.radius,
                              l
                            )),
                            s &&
                              (B === e && (B = m = W(e)),
                              (m[o] = H(a, m[o], "end")))),
                          "max" in a && c > +a.max + 1e-10
                            ? ((d = a.unitFactor || w.unitFactors[o] || 1),
                              (f =
                                (h > a.max && a.min !== a.max) ||
                                (l * d > -15 && l * d < 45)
                                  ? r + 0.1 * (n - r)
                                  : G(h, a.max, l)) +
                                i <
                                _ && (_ = f + i))
                            : "min" in a &&
                              c < +a.min - 1e-10 &&
                              ((d = a.unitFactor || w.unitFactors[o] || 1),
                              (f =
                                (h < a.min && a.min !== a.max) ||
                                (l * d > -45 && l * d < 15)
                                  ? r + 0.1 * (n - r)
                                  : G(h, a.min, l)) +
                                i <
                                _ && (_ = f + i)),
                          f > g && (g = f)),
                        u > g && (g = u));
                    return g > _ && (g = _), g > n ? n : g < r ? r : g;
                  })(
                    t,
                    e,
                    (m && _.max) || 10,
                    (m && _.min) || 0.2,
                    m && "overshoot" in _ ? +_.overshoot : v ? 0 : 1,
                    !0
                  );
            for (o in ((e = B), (B = 0), (d = Z(t, e, g, y)), e))
              Q[o] ||
                ((a = e[o]),
                Y(a) && (a = a(r, t, i)),
                L(a)
                  ? (h = a)
                  : R(a) && !isNaN(a.velocity)
                  ? (h = +a.velocity)
                  : s && s.isTracking(o)
                  ? (h = s.get(o))
                  : console.warn(
                      "ERROR: No velocity was defined for " +
                        t +
                        " property: " +
                        o
                    ),
                (c = j(h, C)),
                (p = 0),
                (u = g(t, o)),
                (l = b(u)),
                (u = parseFloat(u)),
                R(a) &&
                  ((f = u + c),
                  "end" in a &&
                    (a = U(
                      a,
                      d && o in d ? d : f,
                      a.max,
                      a.min,
                      o,
                      e.radius,
                      h
                    )),
                  "max" in a && +a.max < f
                    ? v || a.preventOvershoot
                      ? (c = a.max - u)
                      : (p = a.max - u - c)
                    : "min" in a &&
                      +a.min > f &&
                      (v || a.preventOvershoot
                        ? (c = a.min - u)
                        : (p = a.min - u - c))),
                this._props.push(o),
                this.styles && this.styles.save(o),
                (this._pt = new T(
                  this._pt,
                  t,
                  o,
                  u,
                  0,
                  z,
                  0,
                  D.set(t, o, this)
                )),
                (this._pt.u = l || 0),
                (this._pt.c1 = c),
                (this._pt.c2 = p));
            return n.duration(C), 1;
          },
          render: function (t, e) {
            var n,
              r = e._pt;
            if ((t = E(e.tween._time / e.tween._dur)) || !O())
              for (; r; )
                r.set(
                  r.t,
                  r.p,
                  ((n = r.s + r.c1 * t + r.c2 * t * t),
                  Math.round(1e4 * n) / 1e4 + r.u),
                  r.d,
                  t
                ),
                  (r = r._next);
            else e.styles.revert();
          },
        };
      "track,untrack,isTracking,getVelocity,getByTarget"
        .split(",")
        .forEach(function (t) {
          return (K[t] = v[t]);
        }),
        N() && y.registerPlugin(K);
    },
    6560: (t, e, n) => {
      n.d(e, { A: () => T });
      var r =
        /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
      function i(t) {
        var e = t.nodeType,
          n = "";
        if (1 === e || 9 === e || 11 === e) {
          if ("string" == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) n += i(t);
        } else if (3 === e || 4 === e) return t.nodeValue;
        return n;
      }
      var s,
        o,
        a,
        u,
        l,
        h,
        c = /(?:\r|\n|\t\t)/g,
        f = /(?:\s\s+)/g,
        p = String.fromCharCode(160),
        d = function (t) {
          (s = document),
            (o = window),
            (u =
              u ||
              t ||
              o.gsap ||
              console.warn("Please gsap.registerPlugin(SplitText)")) &&
              ((h = u.utils.toArray),
              (l = u.core.context || function () {}),
              (a = 1));
        },
        D = function (t) {
          return o.getComputedStyle(t);
        },
        g = function (t) {
          return "absolute" === t.position || !0 === t.absolute;
        },
        _ = function (t, e) {
          for (var n, r = e.length; --r > -1; )
            if (((n = e[r]), t.substr(0, n.length) === n)) return n.length;
        },
        m = function (t, e) {
          void 0 === t && (t = "");
          var n = ~t.indexOf("++"),
            r = 1;
          return (
            n && (t = t.split("++").join("")),
            function () {
              return (
                "<" +
                e +
                " style='position:relative;display:inline-block;'" +
                (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
              );
            }
          );
        },
        v = function t(e, n, r) {
          var i = e.nodeType;
          if (1 === i || 9 === i || 11 === i)
            for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
          else
            (3 !== i && 4 !== i) ||
              (e.nodeValue = e.nodeValue.split(n).join(r));
        },
        y = function (t, e) {
          for (var n = e.length; --n > -1; ) t.push(e[n]);
        },
        x = function (t, e, n) {
          for (var r; t && t !== e; ) {
            if ((r = t._next || t.nextSibling))
              return r.textContent.charAt(0) === n;
            t = t.parentNode || t._parent;
          }
        },
        C = function t(e) {
          var n,
            r,
            i = h(e.childNodes),
            s = i.length;
          for (n = 0; n < s; n++)
            (r = i[n])._isSplit
              ? t(r)
              : n && r.previousSibling && 3 === r.previousSibling.nodeType
              ? ((r.previousSibling.nodeValue +=
                  3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue),
                e.removeChild(r))
              : 3 !== r.nodeType &&
                (e.insertBefore(r.firstChild, r), e.removeChild(r));
        },
        F = function (t, e) {
          return parseFloat(e[t]) || 0;
        },
        E = function (t, e, n, r, i, o, a) {
          var u,
            l,
            h,
            c,
            f,
            p,
            d,
            _,
            m,
            E,
            w,
            b,
            T = D(t),
            A = F("paddingLeft", T),
            M = -999,
            k = F("borderBottomWidth", T) + F("borderTopWidth", T),
            B = F("borderLeftWidth", T) + F("borderRightWidth", T),
            S = F("paddingTop", T) + F("paddingBottom", T),
            O = F("paddingLeft", T) + F("paddingRight", T),
            P = F("fontSize", T) * (e.lineThreshold || 0.2),
            N = T.textAlign,
            L = [],
            R = [],
            Y = [],
            X = e.wordDelimiter || " ",
            z = e.tag ? e.tag : e.span ? "span" : "div",
            I = e.type || e.split || "chars,words,lines",
            H = i && ~I.indexOf("lines") ? [] : null,
            W = ~I.indexOf("words"),
            V = ~I.indexOf("chars"),
            U = g(e),
            q = e.linesClass,
            j = ~(q || "").indexOf("++"),
            G = [],
            Q = "flex" === T.display,
            Z = t.style.display;
          for (
            j && (q = q.split("++").join("")),
              Q && (t.style.display = "block"),
              h = (l = t.getElementsByTagName("*")).length,
              f = [],
              u = 0;
            u < h;
            u++
          )
            f[u] = l[u];
          if (H || U)
            for (u = 0; u < h; u++)
              ((p = (c = f[u]).parentNode === t) || U || (V && !W)) &&
                ((b = c.offsetTop),
                H &&
                  p &&
                  Math.abs(b - M) > P &&
                  ("BR" !== c.nodeName || 0 === u) &&
                  ((d = []), H.push(d), (M = b)),
                U &&
                  ((c._x = c.offsetLeft),
                  (c._y = b),
                  (c._w = c.offsetWidth),
                  (c._h = c.offsetHeight)),
                H &&
                  (((c._isSplit && p) ||
                    (!V && p) ||
                    (W && p) ||
                    (!W &&
                      c.parentNode.parentNode === t &&
                      !c.parentNode._isSplit)) &&
                    (d.push(c), (c._x -= A), x(c, t, X) && (c._wordEnd = !0)),
                  "BR" === c.nodeName &&
                    ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                      0 === u) &&
                    H.push([])));
          for (u = 0; u < h; u++)
            if (((p = (c = f[u]).parentNode === t), "BR" !== c.nodeName))
              if (
                (U &&
                  ((m = c.style),
                  W ||
                    p ||
                    ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                  (m.left = c._x + "px"),
                  (m.top = c._y + "px"),
                  (m.position = "absolute"),
                  (m.display = "block"),
                  (m.width = c._w + 1 + "px"),
                  (m.height = c._h + "px")),
                !W && V)
              )
                if (c._isSplit)
                  for (
                    c._next = l = c.nextSibling, c.parentNode.appendChild(c);
                    l && 3 === l.nodeType && " " === l.textContent;

                  )
                    (c._next = l.nextSibling),
                      c.parentNode.appendChild(l),
                      (l = l.nextSibling);
                else
                  c.parentNode._isSplit
                    ? ((c._parent = c.parentNode),
                      !c.previousSibling &&
                        c.firstChild &&
                        (c.firstChild._isFirst = !0),
                      c.nextSibling &&
                        " " === c.nextSibling.textContent &&
                        !c.nextSibling.nextSibling &&
                        G.push(c.nextSibling),
                      (c._next =
                        c.nextSibling && c.nextSibling._isFirst
                          ? null
                          : c.nextSibling),
                      c.parentNode.removeChild(c),
                      f.splice(u--, 1),
                      h--)
                    : p ||
                      ((b = !c.nextSibling && x(c.parentNode, t, X)),
                      c.parentNode._parent &&
                        c.parentNode._parent.appendChild(c),
                      b && c.parentNode.appendChild(s.createTextNode(" ")),
                      "span" === z && (c.style.display = "inline"),
                      L.push(c));
              else
                c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                  ? R.push(c)
                  : V &&
                    !c._isSplit &&
                    ("span" === z && (c.style.display = "inline"), L.push(c));
            else
              H || U
                ? (c.parentNode && c.parentNode.removeChild(c),
                  f.splice(u--, 1),
                  h--)
                : W || t.appendChild(c);
          for (u = G.length; --u > -1; ) G[u].parentNode.removeChild(G[u]);
          if (H) {
            for (
              U &&
                ((E = s.createElement(z)),
                t.appendChild(E),
                (w = E.offsetWidth + "px"),
                (b = E.offsetParent === t ? 0 : t.offsetLeft),
                t.removeChild(E)),
                m = t.style.cssText,
                t.style.cssText = "display:none;";
              t.firstChild;

            )
              t.removeChild(t.firstChild);
            for (
              _ = " " === X && (!U || (!W && !V)), u = 0;
              u < H.length;
              u++
            ) {
              for (
                d = H[u],
                  (E = s.createElement(z)).style.cssText =
                    "display:block;text-align:" +
                    N +
                    ";position:" +
                    (U ? "absolute;" : "relative;"),
                  q && (E.className = q + (j ? u + 1 : "")),
                  Y.push(E),
                  h = d.length,
                  l = 0;
                l < h;
                l++
              )
                "BR" !== d[l].nodeName &&
                  ((c = d[l]),
                  E.appendChild(c),
                  _ && c._wordEnd && E.appendChild(s.createTextNode(" ")),
                  U &&
                    (0 === l &&
                      ((E.style.top = c._y + "px"),
                      (E.style.left = A + b + "px")),
                    (c.style.top = "0px"),
                    b && (c.style.left = c._x - b + "px")));
              0 === h
                ? (E.innerHTML = "&nbsp;")
                : W || V || (C(E), v(E, String.fromCharCode(160), " ")),
                U && ((E.style.width = w), (E.style.height = c._h + "px")),
                t.appendChild(E);
            }
            t.style.cssText = m;
          }
          U &&
            (a > t.clientHeight &&
              ((t.style.height = a - S + "px"),
              t.clientHeight < a && (t.style.height = a + k + "px")),
            o > t.clientWidth &&
              ((t.style.width = o - O + "px"),
              t.clientWidth < o && (t.style.width = o + B + "px"))),
            Q &&
              (Z ? (t.style.display = Z) : t.style.removeProperty("display")),
            y(n, L),
            W && y(r, R),
            y(i, Y);
        },
        w = function (t, e, n, o) {
          var a,
            u,
            l,
            h,
            d,
            D,
            m,
            y,
            x = e.tag ? e.tag : e.span ? "span" : "div",
            C = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
            F = g(e),
            E = e.wordDelimiter || " ",
            w = function (t) {
              return t === E || (t === p && " " === E);
            },
            b = " " !== E ? "" : F ? "&#173; " : " ",
            T = "</" + x + ">",
            A = 1,
            M = e.specialChars
              ? "function" == typeof e.specialChars
                ? e.specialChars
                : _
              : null,
            k = s.createElement("div"),
            B = t.parentNode;
          for (
            B.insertBefore(k, t),
              k.textContent = t.nodeValue,
              B.removeChild(t),
              m = -1 !== (a = i((t = k))).indexOf("<"),
              !1 !== e.reduceWhiteSpace &&
                (a = a.replace(f, " ").replace(c, "")),
              m && (a = a.split("<").join("{{LT}}")),
              d = a.length,
              u = (" " === a.charAt(0) ? b : "") + n(),
              l = 0;
            l < d;
            l++
          )
            if (((D = a.charAt(l)), M && (y = M(a.substr(l), e.specialChars))))
              (D = a.substr(l, y || 1)),
                (u += C && " " !== D ? o() + D + "</" + x + ">" : D),
                (l += y - 1);
            else if (w(D) && !w(a.charAt(l - 1)) && l) {
              for (u += A ? T : "", A = 0; w(a.charAt(l + 1)); ) (u += b), l++;
              l === d - 1
                ? (u += b)
                : ")" !== a.charAt(l + 1) && ((u += b + n()), (A = 1));
            } else
              "{" === D && "{{LT}}" === a.substr(l, 6)
                ? ((u += C ? o() + "{{LT}}</" + x + ">" : "{{LT}}"), (l += 5))
                : (D.charCodeAt(0) >= 55296 && D.charCodeAt(0) <= 56319) ||
                  (a.charCodeAt(l + 1) >= 65024 && a.charCodeAt(l + 1) <= 65039)
                ? ((h =
                    ((a.substr(l, 12).split(r) || [])[1] || "").length || 2),
                  (u +=
                    C && " " !== D
                      ? o() + a.substr(l, h) + "</" + x + ">"
                      : a.substr(l, h)),
                  (l += h - 1))
                : (u += C && " " !== D ? o() + D + "</" + x + ">" : D);
          (t.outerHTML = u + (A ? T : "")), m && v(B, "{{LT}}", "<");
        },
        b = function t(e, n, r, i) {
          var s,
            o,
            a = h(e.childNodes),
            u = a.length,
            l = g(n);
          if (3 !== e.nodeType || u > 1) {
            for (n.absolute = !1, s = 0; s < u; s++)
              ((o = a[s])._next = o._isFirst = o._parent = o._wordEnd = null),
                (3 !== o.nodeType || /\S+/.test(o.nodeValue)) &&
                  (l &&
                    3 !== o.nodeType &&
                    "inline" === D(o).display &&
                    ((o.style.display = "inline-block"),
                    (o.style.position = "relative")),
                  (o._isSplit = !0),
                  t(o, n, r, i));
            return (n.absolute = l), void (e._isSplit = !0);
          }
          w(e, n, r, i);
        },
        T = (function () {
          function t(t, e) {
            a || d(),
              (this.elements = h(t)),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this._originals = []),
              (this.vars = e || {}),
              l(this),
              this.split(e);
          }
          var e = t.prototype;
          return (
            (e.split = function (t) {
              this.isSplit && this.revert(),
                (this.vars = t = t || this.vars),
                (this._originals.length =
                  this.chars.length =
                  this.words.length =
                  this.lines.length =
                    0);
              for (
                var e,
                  n,
                  r,
                  i = this.elements.length,
                  s = t.tag ? t.tag : t.span ? "span" : "div",
                  o = m(t.wordsClass, s),
                  a = m(t.charsClass, s);
                --i > -1;

              )
                (r = this.elements[i]),
                  (this._originals[i] = {
                    html: r.innerHTML,
                    style: r.getAttribute("style"),
                  }),
                  (e = r.clientHeight),
                  (n = r.clientWidth),
                  b(r, t, o, a),
                  E(r, t, this.chars, this.words, this.lines, n, e);
              return (
                this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                (this.isSplit = !0),
                this
              );
            }),
            (e.revert = function () {
              var t = this._originals;
              if (!t) throw "revert() call wasn't scoped properly.";
              return (
                this.elements.forEach(function (e, n) {
                  (e.innerHTML = t[n].html),
                    e.setAttribute("style", t[n].style);
                }),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this.isSplit = !1),
                this
              );
            }),
            (t.create = function (e, n) {
              return new t(e, n);
            }),
            t
          );
        })();
      (T.version = "3.12.5"), (T.register = d);
    },
    8520: (t, e, n) => {
      function r(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      n.d(e, { w$: () => qr });
      var s,
        o,
        a,
        u,
        l,
        h,
        c,
        f,
        p,
        d,
        D,
        g,
        _,
        m,
        v,
        y = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        x = { duration: 0.5, overwrite: !1, delay: 0 },
        C = 1e8,
        F = 1e-8,
        E = 2 * Math.PI,
        w = E / 4,
        b = 0,
        T = Math.sqrt,
        A = Math.cos,
        M = Math.sin,
        k = function (t) {
          return "string" == typeof t;
        },
        B = function (t) {
          return "function" == typeof t;
        },
        S = function (t) {
          return "number" == typeof t;
        },
        O = function (t) {
          return void 0 === t;
        },
        P = function (t) {
          return "object" == typeof t;
        },
        N = function (t) {
          return !1 !== t;
        },
        L = function () {
          return "undefined" != typeof window;
        },
        R = function (t) {
          return B(t) || k(t);
        },
        Y =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        X = Array.isArray,
        z = /(?:-?\.?\d|\.)+/gi,
        I = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        H = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        W = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        V = /[+-]=-?[.\d]+/,
        U = /[^,'"\[\]\s]+/gi,
        q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        j = {},
        G = {},
        Q = function (t) {
          return (G = Et(t, j)) && wn;
        },
        Z = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        $ = function (t, e) {
          return !e && console.warn(t);
        },
        K = function (t, e) {
          return (t && (j[t] = e) && G && (G[t] = e)) || j;
        },
        J = function () {
          return 0;
        },
        tt = { suppressEvents: !0, isStart: !0, kill: !1 },
        et = { suppressEvents: !0, kill: !1 },
        nt = { suppressEvents: !0 },
        rt = {},
        it = [],
        st = {},
        ot = {},
        at = {},
        ut = 30,
        lt = [],
        ht = "",
        ct = function (t) {
          var e,
            n,
            r = t[0];
          if ((P(r) || B(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
            for (n = lt.length; n-- && !lt[n].targetTest(r); );
            e = lt[n];
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new Ye(t[n], e)))) ||
              t.splice(n, 1);
          return t;
        },
        ft = function (t) {
          return t._gsap || ct(ee(t))[0]._gsap;
        },
        pt = function (t, e, n) {
          return (n = t[e]) && B(n)
            ? t[e]()
            : (O(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        dt = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        Dt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        gt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        _t = function (t, e) {
          var n = e.charAt(0),
            r = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
          );
        },
        mt = function (t, e) {
          for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
          return r < n;
        },
        vt = function () {
          var t,
            e,
            n = it.length,
            r = it.slice(0);
          for (st = {}, it.length = 0, t = 0; t < n; t++)
            (e = r[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        yt = function (t, e, n, r) {
          it.length && !o && vt(),
            t.render(e, n, r || (o && e < 0 && (t._initted || t._startAt))),
            it.length && !o && vt();
        },
        xt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(U).length < 2
            ? e
            : k(t)
            ? t.trim()
            : t;
        },
        Ct = function (t) {
          return t;
        },
        Ft = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        Et = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        wt = function t(e, n) {
          for (var r in n)
            "__proto__" !== r &&
              "constructor" !== r &&
              "prototype" !== r &&
              (e[r] = P(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
          return e;
        },
        bt = function (t, e) {
          var n,
            r = {};
          for (n in t) n in e || (r[n] = t[n]);
          return r;
        },
        Tt = function (t) {
          var e,
            n = t.parent || u,
            r = t.keyframes
              ? ((e = X(t.keyframes)),
                function (t, n) {
                  for (var r in n)
                    r in t ||
                      ("duration" === r && e) ||
                      "ease" === r ||
                      (t[r] = n[r]);
                })
              : Ft;
          if (N(t.inherit))
            for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
          return t;
        },
        At = function (t, e, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var s,
            o = t[r];
          if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
          return (
            o
              ? ((e._next = o._next), (o._next = e))
              : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = o),
            (e.parent = e._dp = t),
            e
          );
        },
        Mt = function (t, e, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = e._prev,
            s = e._next;
          i ? (i._next = s) : t[n] === e && (t[n] = s),
            s ? (s._prev = i) : t[r] === e && (t[r] = i),
            (e._next = e._prev = e.parent = null);
        },
        kt = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        Bt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
          return t;
        },
        St = function (t, e, n, r) {
          return (
            t._startAt &&
            (o
              ? t._startAt.revert(et)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
          );
        },
        Ot = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        Pt = function (t) {
          return t._repeat
            ? Nt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        Nt = function (t, e) {
          var n = Math.floor((t /= e));
          return t && n === t ? n - 1 : n;
        },
        Lt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Rt = function (t) {
          return (t._end = gt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || F) || 0)
          ));
        },
        Yt = function (t, e) {
          var n = t._dp;
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = gt(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Rt(t),
              n._dirty || Bt(n, t)),
            t
          );
        },
        Xt = function (t, e) {
          var n;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((n = Lt(t.rawTime(), e)),
              (!e._dur || $t(0, e.totalDuration(), n) - e._tTime > F) &&
                e.render(n, !0)),
            Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            t._zTime = -1e-8;
          }
        },
        zt = function (t, e, n, r) {
          return (
            e.parent && kt(e),
            (e._start = gt(
              (S(n) ? n : n || t !== u ? Gt(t, n, e) : t._time) + e._delay
            )),
            (e._end = gt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            At(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Vt(e) || (t._recent = e),
            r || Xt(t, e),
            t._ts < 0 && Yt(t, t._tTime),
            t
          );
        },
        It = function (t, e) {
          return (
            (j.ScrollTrigger || Z("scrollTrigger", e)) &&
            j.ScrollTrigger.create(e, t)
          );
        },
        Ht = function (t, e, n, r, i) {
          return (
            qe(t, e, i),
            t._initted
              ? !n &&
                t._pt &&
                !o &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                p !== we.frame
                ? (it.push(t), (t._lazy = [i, r]), 1)
                : void 0
              : 1
          );
        },
        Wt = function t(e) {
          var n = e.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          );
        },
        Vt = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        Ut = function (t, e, n, r) {
          var i = t._repeat,
            s = gt(e) || 0,
            o = t._tTime / t._tDur;
          return (
            o && !r && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : gt(s * (i + 1) + t._rDelay * i)
              : s),
            o > 0 && !r && Yt(t, (t._tTime = t._tDur * o)),
            t.parent && Rt(t),
            n || Bt(t.parent, t),
            t
          );
        },
        qt = function (t) {
          return t instanceof ze ? Bt(t) : Ut(t, t._dur);
        },
        jt = { _start: 0, endTime: J, totalDuration: J },
        Gt = function t(e, n, r) {
          var i,
            s,
            o,
            a = e.labels,
            u = e._recent || jt,
            l = e.duration() >= C ? u.endTime(!1) : e._dur;
          return k(n) && (isNaN(n) || n in a)
            ? ((s = n.charAt(0)),
              (o = "%" === n.substr(-1)),
              (i = n.indexOf("=")),
              "<" === s || ">" === s
                ? (i >= 0 && (n = n.replace(/=/, "")),
                  ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (o ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                : i < 0
                ? (n in a || (a[n] = l), a[n])
                : ((s = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  o && r && (s = (s / 100) * (X(r) ? r[0] : r).totalDuration()),
                  i > 1 ? t(e, n.substr(0, i - 1), r) + s : l + s))
            : null == n
            ? l
            : +n;
        },
        Qt = function (t, e, n) {
          var r,
            i,
            s = S(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o];
          if ((s && (a.duration = e[1]), (a.parent = n), t)) {
            for (r = a, i = n; i && !("immediateRender" in r); )
              (r = i.vars.defaults || {}), (i = N(i.vars.inherit) && i.parent);
            (a.immediateRender = N(r.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
          }
          return new $e(e[0], a, e[o + 1]);
        },
        Zt = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        $t = function (t, e, n) {
          return n < t ? t : n > e ? e : n;
        },
        Kt = function (t, e) {
          return k(t) && (e = q.exec(t)) ? e[1] : "";
        },
        Jt = [].slice,
        te = function (t, e) {
          return (
            t &&
            P(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && P(t[0]))) &&
            !t.nodeType &&
            t !== l
          );
        },
        ee = function (t, e, n) {
          return a && !e && a.selector
            ? a.selector(t)
            : !k(t) || n || (!h && be())
            ? X(t)
              ? (function (t, e, n) {
                  return (
                    void 0 === n && (n = []),
                    t.forEach(function (t) {
                      var r;
                      return (k(t) && !e) || te(t, 1)
                        ? (r = n).push.apply(r, ee(t))
                        : n.push(t);
                    }) || n
                  );
                })(t, n)
              : te(t)
              ? Jt.call(t, 0)
              : t
              ? [t]
              : []
            : Jt.call((e || c).querySelectorAll(t), 0);
        },
        ne = function (t) {
          return (
            (t = ee(t)[0] || $("Invalid scope") || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return ee(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                  ? $("Invalid scope") || c.createElement("div")
                  : t
              );
            }
          );
        },
        re = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        ie = function (t) {
          if (B(t)) return t;
          var e = P(t) ? t : { each: t },
            n = Oe(e.ease),
            r = e.from || 0,
            i = parseFloat(e.base) || 0,
            s = {},
            o = r > 0 && r < 1,
            a = isNaN(r) || o,
            u = e.axis,
            l = r,
            h = r;
          return (
            k(r)
              ? (l = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !o && a && ((l = r[0]), (h = r[1])),
            function (t, o, c) {
              var f,
                p,
                d,
                D,
                g,
                _,
                m,
                v,
                y,
                x = (c || e).length,
                F = s[x];
              if (!F) {
                if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, C])[1])) {
                  for (
                    m = -C;
                    m < (m = c[y++].getBoundingClientRect().left) && y < x;

                  );
                  y < x && y--;
                }
                for (
                  F = s[x] = [],
                    f = a ? Math.min(y, x) * l - 0.5 : r % y,
                    p = y === C ? 0 : a ? (x * h) / y - 0.5 : (r / y) | 0,
                    m = 0,
                    v = C,
                    _ = 0;
                  _ < x;
                  _++
                )
                  (d = (_ % y) - f),
                    (D = p - ((_ / y) | 0)),
                    (F[_] = g =
                      u ? Math.abs("y" === u ? D : d) : T(d * d + D * D)),
                    g > m && (m = g),
                    g < v && (v = g);
                "random" === r && re(F),
                  (F.max = m - v),
                  (F.min = v),
                  (F.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (y > x
                          ? x - 1
                          : u
                          ? "y" === u
                            ? x / y
                            : y
                          : Math.max(y, x / y)) ||
                      0) * ("edges" === r ? -1 : 1)),
                  (F.b = x < 0 ? i - x : i),
                  (F.u = Kt(e.amount || e.each) || 0),
                  (n = n && x < 0 ? Be(n) : n);
              }
              return (
                (x = (F[t] - F.min) / F.max || 0),
                gt(F.b + (n ? n(x) : x) * F.v) + F.u
              );
            }
          );
        },
        se = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (n) {
            var r = gt(Math.round(parseFloat(n) / t) * t * e);
            return (r - (r % 1)) / e + (S(n) ? 0 : Kt(n));
          };
        },
        oe = function (t, e) {
          var n,
            r,
            i = X(t);
          return (
            !i &&
              P(t) &&
              ((n = i = t.radius || C),
              t.values
                ? ((t = ee(t.values)), (r = !S(t[0])) && (n *= n))
                : (t = se(t.increment))),
            Zt(
              e,
              i
                ? B(t)
                  ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          s,
                          o = parseFloat(r ? e.x : e),
                          a = parseFloat(r ? e.y : 0),
                          u = C,
                          l = 0,
                          h = t.length;
                        h--;

                      )
                        (i = r
                          ? (i = t[h].x - o) * i + (s = t[h].y - a) * s
                          : Math.abs(t[h] - o)) < u && ((u = i), (l = h));
                      return (
                        (l = !n || u <= n ? t[l] : e),
                        r || l === e || S(e) ? l : l + Kt(e)
                      );
                    }
                : se(t)
            )
          );
        },
        ae = function (t, e, n, r) {
          return Zt(X(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
            return X(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                    ) *
                      n *
                      r
                  ) / r;
          });
        },
        ue = function (t, e, n) {
          return Zt(n, function (n) {
            return t[~~e(n)];
          });
        },
        le = function (t) {
          for (var e, n, r, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            (r = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (n = t.substr(e + 7, r - e - 7).match(i ? U : z)),
              (o +=
                t.substr(s, e - s) +
                ae(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
              (s = r + 1);
          return o + t.substr(s, t.length - s);
        },
        he = function (t, e, n, r, i) {
          var s = e - t,
            o = r - n;
          return Zt(i, function (e) {
            return n + (((e - t) / s) * o || 0);
          });
        },
        ce = function (t, e, n) {
          var r,
            i,
            s,
            o = t.labels,
            a = C;
          for (r in o)
            (i = o[r] - e) < 0 == !!n &&
              i &&
              a > (i = Math.abs(i)) &&
              ((s = r), (a = i));
          return s;
        },
        fe = function (t, e, n) {
          var r,
            i,
            s,
            o = t.vars,
            u = o[e],
            l = a,
            h = t._ctx;
          if (u)
            return (
              (r = o[e + "Params"]),
              (i = o.callbackScope || t),
              n && it.length && vt(),
              h && (a = h),
              (s = r ? u.apply(i, r) : u.call(i)),
              (a = l),
              s
            );
        },
        pe = function (t) {
          return (
            kt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!o),
            t.progress() < 1 && fe(t, "onInterrupt"),
            t
          );
        },
        de = [],
        De = function (t) {
          if (t)
            if (((t = (!t.name && t.default) || t), L() || t.headless)) {
              var e = t.name,
                n = B(t),
                r =
                  e && !n && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                i = {
                  init: J,
                  render: an,
                  add: Ve,
                  kill: ln,
                  modifier: un,
                  rawVars: 0,
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: nn,
                  aliases: {},
                  register: 0,
                };
              if ((be(), t !== r)) {
                if (ot[e]) return;
                Ft(r, Ft(bt(t, i), s)),
                  Et(r.prototype, Et(i, bt(t, s))),
                  (ot[(r.prop = e)] = r),
                  t.targetTest && (lt.push(r), (rt[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              K(e, r), t.register && t.register(wn, r, fn);
            } else de.push(t);
        },
        ge = 255,
        _e = {
          aqua: [0, ge, ge],
          lime: [0, ge, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ge],
          navy: [0, 0, 128],
          white: [ge, ge, ge],
          olive: [128, 128, 0],
          yellow: [ge, ge, 0],
          orange: [ge, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ge, 0, 0],
          pink: [ge, 192, 203],
          cyan: [0, ge, ge],
          transparent: [ge, ge, ge, 0],
        },
        me = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
              ? n
              : 3 * t < 2
              ? e + (n - e) * (2 / 3 - t) * 6
              : e) *
              ge +
              0.5) |
            0
          );
        },
        ve = function (t, e, n) {
          var r,
            i,
            s,
            o,
            a,
            u,
            l,
            h,
            c,
            f,
            p = t ? (S(t) ? [t >> 16, (t >> 8) & ge, t & ge] : 0) : _e.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), _e[t])
            )
              p = _e[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((r = t.charAt(1)),
                  (i = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t =
                    "#" +
                    r +
                    r +
                    i +
                    i +
                    s +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & ge,
                  p & ge,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & ge,
                t & ge,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((p = f = t.match(z)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(I)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (o = (+p[0] % 360) / 360),
                  (a = +p[1] / 100),
                  (r =
                    2 * (u = +p[2] / 100) -
                    (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = me(o + 1 / 3, r, i)),
                  (p[1] = me(o, r, i)),
                  (p[2] = me(o - 1 / 3, r, i));
            else p = t.match(z) || _e.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !f &&
              ((r = p[0] / ge),
              (i = p[1] / ge),
              (s = p[2] / ge),
              (u = ((l = Math.max(r, i, s)) + (h = Math.min(r, i, s))) / 2),
              l === h
                ? (o = a = 0)
                : ((c = l - h),
                  (a = u > 0.5 ? c / (2 - l - h) : c / (l + h)),
                  (o =
                    l === r
                      ? (i - s) / c + (i < s ? 6 : 0)
                      : l === i
                      ? (s - r) / c + 2
                      : (r - i) / c + 4),
                  (o *= 60)),
              (p[0] = ~~(o + 0.5)),
              (p[1] = ~~(100 * a + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        ye = function (t) {
          var e = [],
            n = [],
            r = -1;
          return (
            t.split(Ce).forEach(function (t) {
              var i = t.match(H) || [];
              e.push.apply(e, i), n.push((r += i.length + 1));
            }),
            (e.c = n),
            e
          );
        },
        xe = function (t, e, n) {
          var r,
            i,
            s,
            o,
            a = "",
            u = (t + a).match(Ce),
            l = e ? "hsla(" : "rgba(",
            h = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = ve(t, e, 1)) &&
                l +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            n && ((s = ye(t)), (r = n.c).join(a) !== s.c.join(a)))
          )
            for (o = (i = t.replace(Ce, "1").split(H)).length - 1; h < o; h++)
              a +=
                i[h] +
                (~r.indexOf(h)
                  ? u.shift() || l + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : n).shift());
          if (!i)
            for (o = (i = t.split(Ce)).length - 1; h < o; h++) a += i[h] + u[h];
          return a + i[o];
        },
        Ce = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in _e) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        Fe = /hsl[a]?\(/,
        Ee = function (t) {
          var e,
            n = t.join(" ");
          if (((Ce.lastIndex = 0), Ce.test(n)))
            return (
              (e = Fe.test(n)),
              (t[1] = xe(t[1], e)),
              (t[0] = xe(t[0], e, ye(t[1]))),
              !0
            );
        },
        we = (function () {
          var t,
            e,
            n,
            r,
            i,
            s,
            o = Date.now,
            a = 500,
            u = 33,
            p = o(),
            d = p,
            g = 1e3 / 240,
            _ = g,
            m = [],
            v = function n(l) {
              var h,
                c,
                f,
                D,
                v = o() - d,
                y = !0 === l;
              if (
                ((v > a || v < 0) && (p += v - u),
                ((h = (f = (d += v) - p) - _) > 0 || y) &&
                  ((D = ++r.frame),
                  (i = f - 1e3 * r.time),
                  (r.time = f /= 1e3),
                  (_ += h + (h >= g ? 4 : g - h)),
                  (c = 1)),
                y || (t = e(n)),
                c)
              )
                for (s = 0; s < m.length; s++) m[s](f, i, D, l);
            };
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              v(!0);
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60));
            },
            wake: function () {
              f &&
                (!h &&
                  L() &&
                  ((l = h = window),
                  (c = l.document || {}),
                  (j.gsap = wn),
                  (l.gsapVersions || (l.gsapVersions = [])).push(wn.version),
                  Q(G || l.GreenSockGlobals || (!l.gsap && l) || {}),
                  de.forEach(De)),
                (n =
                  "undefined" != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                t && r.sleep(),
                (e =
                  n ||
                  function (t) {
                    return setTimeout(t, (_ - 1e3 * r.time + 1) | 0);
                  }),
                (D = 1),
                v(2));
            },
            sleep: function () {
              (n ? cancelAnimationFrame : clearTimeout)(t), (D = 0), (e = J);
            },
            lagSmoothing: function (t, e) {
              (a = t || 1 / 0), (u = Math.min(e || 33, a));
            },
            fps: function (t) {
              (g = 1e3 / (t || 240)), (_ = 1e3 * r.time + g);
            },
            add: function (t, e, n) {
              var i = e
                ? function (e, n, s, o) {
                    t(e, n, s, o), r.remove(i);
                  }
                : t;
              return r.remove(t), m[n ? "unshift" : "push"](i), be(), i;
            },
            remove: function (t, e) {
              ~(e = m.indexOf(t)) && m.splice(e, 1) && s >= e && s--;
            },
            _listeners: m,
          });
        })(),
        be = function () {
          return !D && we.wake();
        },
        Te = {},
        Ae = /^[\d.\-M][\d.\-,\s]/,
        Me = /["']/g,
        ke = function (t) {
          for (
            var e,
              n,
              r,
              i = {},
              s = t.substr(1, t.length - 3).split(":"),
              o = s[0],
              a = 1,
              u = s.length;
            a < u;
            a++
          )
            (n = s[a]),
              (e = a !== u - 1 ? n.lastIndexOf(",") : n.length),
              (r = n.substr(0, e)),
              (i[o] = isNaN(r) ? r.replace(Me, "").trim() : +r),
              (o = n.substr(e + 1).trim());
          return i;
        },
        Be = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Se = function t(e, n) {
          for (var r, i = e._first; i; )
            i instanceof ze
              ? t(i, n)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? t(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
              (i = i._next);
        },
        Oe = function (t, e) {
          return (
            (t &&
              (B(t)
                ? t
                : Te[t] ||
                  (function (t) {
                    var e,
                      n,
                      r,
                      i,
                      s = (t + "").split("("),
                      o = Te[s[0]];
                    return o && s.length > 1 && o.config
                      ? o.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [ke(s[1])]
                            : ((e = t),
                              (n = e.indexOf("(") + 1),
                              (r = e.indexOf(")")),
                              (i = e.indexOf("(", n)),
                              e.substring(
                                n,
                                ~i && i < r ? e.indexOf(")", r + 1) : r
                              ))
                                .split(",")
                                .map(xt)
                        )
                      : Te._CE && Ae.test(t)
                      ? Te._CE("", t)
                      : o;
                  })(t))) ||
            e
          );
        },
        Pe = function (t, e, n, r) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var i,
            s = { easeIn: e, easeOut: n, easeInOut: r };
          return (
            dt(t, function (t) {
              for (var e in ((Te[t] = j[t] = s),
              (Te[(i = t.toLowerCase())] = n),
              s))
                Te[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = Te[t + "." + e] = s[e];
            }),
            s
          );
        },
        Ne = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        Le = function t(e, n, r) {
          var i = n >= 1 ? n : 1,
            s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            o = (s / E) * (Math.asin(1 / i) || 0),
            a = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * M((t - o) * s) + 1;
            },
            u =
              "out" === e
                ? a
                : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : Ne(a);
          return (
            (s = E / s),
            (u.config = function (n, r) {
              return t(e, n, r);
            }),
            u
          );
        },
        Re = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var r = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
            i =
              "out" === e
                ? r
                : "in" === e
                ? function (t) {
                    return 1 - r(1 - t);
                  }
                : Ne(r);
          return (
            (i.config = function (n) {
              return t(e, n);
            }),
            i
          );
        };
      dt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e;
        Pe(
          t + ",Power" + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, n);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2;
          }
        );
      }),
        (Te.Linear.easeNone = Te.none = Te.Linear.easeIn),
        Pe("Elastic", Le("in"), Le("out"), Le()),
        (g = 7.5625),
        (m = 1 / (_ = 2.75)),
        Pe(
          "Bounce",
          function (t) {
            return 1 - v(1 - t);
          },
          (v = function (t) {
            return t < m
              ? g * t * t
              : t < 0.7272727272727273
              ? g * Math.pow(t - 1.5 / _, 2) + 0.75
              : t < 0.9090909090909092
              ? g * (t -= 2.25 / _) * t + 0.9375
              : g * Math.pow(t - 2.625 / _, 2) + 0.984375;
          })
        ),
        Pe("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        Pe("Circ", function (t) {
          return -(T(1 - t * t) - 1);
        }),
        Pe("Sine", function (t) {
          return 1 === t ? 1 : 1 - A(t * w);
        }),
        Pe("Back", Re("in"), Re("out"), Re()),
        (Te.SteppedEase =
          Te.steps =
          j.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  r = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((r * $t(0, 0.99999999, t)) | 0) + i) * n;
                };
              },
            }),
        (x.ease = Te["quad.out"]),
        dt(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (ht += t + "," + t + "Params,");
          }
        );
      var Ye = function (t, e) {
          (this.id = b++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : pt),
            (this.set = e ? e.getSetter : nn);
        },
        Xe = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Ut(this, +t.duration, 1, 1),
              (this.data = t.data),
              a && ((this._ctx = a), a.data.push(this)),
              D || we.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Ut(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((be(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  Yt(this, t), !n._dp || n.parent || Xt(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  zt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === F) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), yt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Pt(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() > 0
                ? 1
                : 0;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Pt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                ? 1
                : 0;
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                ? Nt(this._tTime, n) + 1
                : 1;
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var n =
                this.parent && this._ts
                  ? Lt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(
                  $t(-Math.abs(this._delay), this._tDur, n),
                  !1 !== e
                ),
                Rt(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent);
                  return t;
                })(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (be(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== F &&
                            (this._tTime -= F)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    zt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (N(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Lt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = nt);
              var e = o;
              return (
                (o = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (o = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (Math.abs(e._ts) || 1)), (e = e._dp);
              return !this.parent && this._sat ? this._sat.globalTime(t) : n;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), qt(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), qt(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Gt(this, t), N(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, N(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - F
                )
              );
            }),
            (e.eventCallback = function (t, e, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((r[t] = e),
                      n && (r[t + "Params"] = n),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete r[t],
                  this)
                : r[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (n) {
                var r = B(t) ? t : Ct,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      B(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                      n(r),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              pe(this);
            }),
            t
          );
        })();
      Ft(Xe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var ze = (function (t) {
        function e(e, n) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = t.call(this, e) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = N(e.sortChildren)),
            u && zt(e.parent || u, r(i), n),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && It(r(i), e.scrollTrigger),
            i
          );
        }
        i(e, t);
        var n = e.prototype;
        return (
          (n.to = function (t, e, n) {
            return Qt(0, arguments, this), this;
          }),
          (n.from = function (t, e, n) {
            return Qt(1, arguments, this), this;
          }),
          (n.fromTo = function (t, e, n, r) {
            return Qt(2, arguments, this), this;
          }),
          (n.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Tt(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new $e(t, e, Gt(this, n), 1),
              this
            );
          }),
          (n.call = function (t, e, n) {
            return zt(this, $e.delayedCall(0, t, e), n);
          }),
          (n.staggerTo = function (t, e, n, r, i, s, o) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || r),
              (n.onComplete = s),
              (n.onCompleteParams = o),
              (n.parent = this),
              new $e(t, n, Gt(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (t, e, n, r, i, s, o) {
            return (
              (n.runBackwards = 1),
              (Tt(n).immediateRender = N(n.immediateRender)),
              this.staggerTo(t, e, n, r, i, s, o)
            );
          }),
          (n.staggerFromTo = function (t, e, n, r, i, s, o, a) {
            return (
              (r.startAt = n),
              (Tt(r).immediateRender = N(r.immediateRender)),
              this.staggerTo(t, e, r, i, s, o, a)
            );
          }),
          (n.render = function (t, e, n) {
            var r,
              i,
              s,
              a,
              l,
              h,
              c,
              f,
              p,
              d,
              D,
              g,
              _ = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              y = t <= 0 ? 0 : gt(t),
              x = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (
              (this !== u && y > m && t >= 0 && (y = m),
              y !== this._tTime || n || x)
            ) {
              if (
                (_ !== this._time &&
                  v &&
                  ((y += this._time - _), (t += this._time - _)),
                (r = y),
                (p = this._start),
                (h = !(f = this._ts)),
                x && (v || (_ = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((D = this._yoyo),
                  (l = v + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * l + t, e, n);
                if (
                  ((r = gt(y % l)),
                  y === m
                    ? ((a = this._repeat), (r = v))
                    : ((a = ~~(y / l)) && a === y / l && ((r = v), a--),
                      r > v && (r = v)),
                  (d = Nt(this._tTime, l)),
                  !_ &&
                    this._tTime &&
                    d !== a &&
                    this._tTime - d * l - this._dur <= 0 &&
                    (d = a),
                  D && 1 & a && ((r = v - r), (g = 1)),
                  a !== d && !this._lock)
                ) {
                  var C = D && 1 & d,
                    E = C === (D && 1 & a);
                  if (
                    (a < d && (C = !C),
                    (_ = C ? 0 : y % v ? v : y),
                    (this._lock = 1),
                    (this.render(_ || (g ? 0 : gt(a * l)), e, !v)._lock = 0),
                    (this._tTime = y),
                    !e && this.parent && fe(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !g &&
                      (this.invalidate()._lock = 1),
                    (_ && _ !== this._time) ||
                      h !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((v = this._dur),
                    (m = this._tDur),
                    E &&
                      ((this._lock = 2),
                      (_ = C ? v : -1e-4),
                      this.render(_, !0),
                      this.vars.repeatRefresh && !g && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !h)
                  )
                    return this;
                  Se(this, g);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((c = (function (t, e, n) {
                    var r;
                    if (n > e)
                      for (r = t._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > e) return r;
                        r = r._next;
                      }
                    else
                      for (r = t._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < e) return r;
                        r = r._prev;
                      }
                  })(this, gt(_), gt(r))),
                  c && (y -= r - (r = c._start))),
                (this._tTime = y),
                (this._time = r),
                (this._act = !f),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (_ = 0)),
                !_ && r && !e && !a && (fe(this, "onStart"), this._tTime !== y))
              )
                return this;
              if (r >= _ && t >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((s = i._next),
                    (i._act || r >= i._start) && i._ts && c !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (r - i._start) * i._ts,
                        e,
                        n
                      ),
                      r !== this._time || (!this._ts && !h))
                    ) {
                      (c = 0), s && (y += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = s;
                }
              else {
                i = this._last;
                for (var w = t < 0 ? t : r; i; ) {
                  if (
                    ((s = i._prev), (i._act || w <= i._end) && i._ts && c !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (w - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (w - i._start) * i._ts,
                        e,
                        n || (o && (i._initted || i._startAt))
                      ),
                      r !== this._time || (!this._ts && !h))
                    ) {
                      (c = 0), s && (y += this._zTime = w ? -1e-8 : F);
                      break;
                    }
                  }
                  i = s;
                }
              }
              if (
                c &&
                !e &&
                (this.pause(),
                (c.render(r >= _ ? 0 : -1e-8)._zTime = r >= _ ? 1 : -1),
                this._ts)
              )
                return (this._start = p), Rt(this), this.render(t, e, n);
              this._onUpdate && !e && fe(this, "onUpdate", !0),
                ((y === m && this._tTime >= this.totalDuration()) ||
                  (!y && _)) &&
                  ((p !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !v) &&
                      ((y === m && this._ts > 0) || (!y && this._ts < 0)) &&
                      kt(this, 1),
                    e ||
                      (t < 0 && !_) ||
                      (!y && !_ && m) ||
                      (fe(
                        this,
                        y === m && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(y < m && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (t, e) {
            var n = this;
            if ((S(e) || (e = Gt(this, e, t)), !(t instanceof Xe))) {
              if (X(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e);
                  }),
                  this
                );
              if (k(t)) return this.addLabel(t, e);
              if (!B(t)) return this;
              t = $e.delayedCall(0, t);
            }
            return this !== t ? zt(this, t, e) : this;
          }),
          (n.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -C);
            for (var i = [], s = this._first; s; )
              s._start >= r &&
                (s instanceof $e
                  ? e && i.push(s)
                  : (n && i.push(s),
                    t && i.push.apply(i, s.getChildren(!0, e, n)))),
                (s = s._next);
            return i;
          }),
          (n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n];
          }),
          (n.remove = function (t) {
            return k(t)
              ? this.removeLabel(t)
              : B(t)
              ? this.killTweensOf(t)
              : (Mt(this, t),
                t === this._recent && (this._recent = this._last),
                Bt(this));
          }),
          (n.totalTime = function (e, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = gt(
                    we.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (t, e) {
            return (this.labels[t] = Gt(this, e)), this;
          }),
          (n.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (n.addPause = function (t, e, n) {
            var r = $e.delayedCall(0, e || J, n);
            return (
              (r.data = "isPause"),
              (this._hasPause = 1),
              zt(this, r, Gt(this, t))
            );
          }),
          (n.removePause = function (t) {
            var e = this._first;
            for (t = Gt(this, t); e; )
              e._start === t && "isPause" === e.data && kt(e), (e = e._next);
          }),
          (n.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--; )
              Ie !== r[i] && r[i].kill(t, e);
            return this;
          }),
          (n.getTweensOf = function (t, e) {
            for (var n, r = [], i = ee(t), s = this._first, o = S(e); s; )
              s instanceof $e
                ? mt(s._targets, i) &&
                  (o
                    ? (!Ie || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  r.push(s)
                : (n = s.getTweensOf(i, e)).length && r.push.apply(r, n),
                (s = s._next);
            return r;
          }),
          (n.tweenTo = function (t, e) {
            e = e || {};
            var n,
              r = this,
              i = Gt(r, t),
              s = e,
              o = s.startAt,
              a = s.onStart,
              u = s.onStartParams,
              l = s.immediateRender,
              h = $e.to(
                r,
                Ft(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : r._time)) /
                          r.timeScale()
                      ) ||
                      F,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (o && "time" in o ? o.time : r._time)) /
                              r.timeScale()
                          );
                        h._dur !== t && Ut(h, t, 0, 1).render(h._time, !0, !0),
                          (n = 1);
                      }
                      a && a.apply(h, u || []);
                    },
                  },
                  e
                )
              );
            return l ? h.render(0) : h;
          }),
          (n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, Ft({ startAt: { time: Gt(this, t) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ce(this, Gt(this, t));
          }),
          (n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ce(this, Gt(this, t), 1);
          }),
          (n.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + F);
          }),
          (n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, s = this.labels; i; )
              i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (r in s) s[r] >= n && (s[r] += t);
            return Bt(this);
          }),
          (n.invalidate = function (e) {
            var n = this._first;
            for (this._lock = 0; n; ) n.invalidate(e), (n = n._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Bt(this)
            );
          }),
          (n.totalDuration = function (t) {
            var e,
              n,
              r,
              i = 0,
              s = this,
              o = s._last,
              a = C;
            if (arguments.length)
              return s.timeScale(
                (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                  (s.reversed() ? -t : t)
              );
            if (s._dirty) {
              for (r = s.parent; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  (n = o._start) > a && s._sort && o._ts && !s._lock
                    ? ((s._lock = 1), (zt(s, o, n - o._delay, 1)._lock = 0))
                    : (a = n),
                  n < 0 &&
                    o._ts &&
                    ((i -= n),
                    ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                      ((s._start += n / s._ts),
                      (s._time -= n),
                      (s._tTime -= n)),
                    s.shiftChildren(-n, !1, -Infinity),
                    (a = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = e);
              Ut(s, s === u && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
            }
            return s._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((u._ts && (yt(u, Lt(t, u)), (p = we.frame)), we.frame >= ut)) {
              ut += y.autoSleep || 120;
              var e = u._first;
              if ((!e || !e._ts) && y.autoSleep && we._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || we.sleep();
              }
            }
          }),
          e
        );
      })(Xe);
      Ft(ze.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Ie,
        He,
        We = function (t, e, n, r, i, s, o) {
          var a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            D = new fn(this._pt, t, e, 0, 1, on, null, i),
            g = 0,
            _ = 0;
          for (
            D.b = n,
              D.e = r,
              n += "",
              (p = ~(r += "").indexOf("random(")) && (r = le(r)),
              s && (s((d = [n, r]), t, e), (n = d[0]), (r = d[1])),
              u = n.match(W) || [];
            (a = W.exec(r));

          )
            (h = a[0]),
              (c = r.substring(g, a.index)),
              l ? (l = (l + 1) % 5) : "rgba(" === c.substr(-5) && (l = 1),
              h !== u[_++] &&
                ((f = parseFloat(u[_ - 1]) || 0),
                (D._pt = {
                  _next: D._pt,
                  p: c || 1 === _ ? c : ",",
                  s: f,
                  c: "=" === h.charAt(1) ? _t(f, h) - f : parseFloat(h) - f,
                  m: l && l < 4 ? Math.round : 0,
                }),
                (g = W.lastIndex));
          return (
            (D.c = g < r.length ? r.substring(g, r.length) : ""),
            (D.fp = o),
            (V.test(r) || p) && (D.e = 0),
            (this._pt = D),
            D
          );
        },
        Ve = function (t, e, n, r, i, s, o, a, u, l) {
          B(r) && (r = r(i || 0, t, s));
          var h,
            c = t[e],
            f =
              "get" !== n
                ? n
                : B(c)
                ? u
                  ? t[
                      e.indexOf("set") || !B(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : c,
            p = B(c) ? (u ? tn : Je) : Ke;
          if (
            (k(r) &&
              (~r.indexOf("random(") && (r = le(r)),
              "=" === r.charAt(1) &&
                ((h = _t(f, r) + (Kt(f) || 0)) || 0 === h) &&
                (r = h)),
            !l || f !== r || He)
          )
            return isNaN(f * r) || "" === r
              ? (!c && !(e in t) && Z(e, r),
                We.call(this, t, e, f, r, p, a || y.stringFilter, u))
              : ((h = new fn(
                  this._pt,
                  t,
                  e,
                  +f || 0,
                  r - (f || 0),
                  "boolean" == typeof c ? sn : rn,
                  0,
                  p
                )),
                u && (h.fp = u),
                o && h.modifier(o, this, t),
                (this._pt = h));
        },
        Ue = function (t, e, n, r, i, s) {
          var o, a, u, l;
          if (
            ot[t] &&
            !1 !==
              (o = new ot[t]()).init(
                i,
                o.rawVars
                  ? e[t]
                  : (function (t, e, n, r, i) {
                      if (
                        (B(t) && (t = Ge(t, i, e, n, r)),
                        !P(t) || (t.style && t.nodeType) || X(t) || Y(t))
                      )
                        return k(t) ? Ge(t, i, e, n, r) : t;
                      var s,
                        o = {};
                      for (s in t) o[s] = Ge(t[s], i, e, n, r);
                      return o;
                    })(e[t], r, i, s, n),
                n,
                r,
                s
              ) &&
            ((n._pt = a =
              new fn(n._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
            n !== d)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(i)], l = o._props.length;
              l--;

            )
              u[o._props[l]] = a;
          return o;
        },
        qe = function t(e, n, r) {
          var i,
            a,
            l,
            h,
            c,
            f,
            p,
            d,
            D,
            g,
            _,
            m,
            v,
            y = e.vars,
            E = y.ease,
            w = y.startAt,
            b = y.immediateRender,
            T = y.lazy,
            A = y.onUpdate,
            M = y.runBackwards,
            k = y.yoyoEase,
            B = y.keyframes,
            S = y.autoRevert,
            O = e._dur,
            P = e._startAt,
            L = e._targets,
            R = e.parent,
            Y = R && "nested" === R.data ? R.vars.targets : L,
            X = "auto" === e._overwrite && !s,
            z = e.timeline;
          if (
            (z && (!B || !E) && (E = "none"),
            (e._ease = Oe(E, x.ease)),
            (e._yEase = k ? Be(Oe(!0 === k ? E : k, x.ease)) : 0),
            k &&
              e._yoyo &&
              !e._repeat &&
              ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
            (e._from = !z && !!y.runBackwards),
            !z || (B && !y.stagger))
          ) {
            if (
              ((m = (d = L[0] ? ft(L[0]).harness : 0) && y[d.prop]),
              (i = bt(y, rt)),
              P &&
                (P._zTime < 0 && P.progress(1),
                n < 0 && M && b && !S
                  ? P.render(-1, !0)
                  : P.revert(M && O ? et : tt),
                (P._lazy = 0)),
              w)
            ) {
              if (
                (kt(
                  (e._startAt = $e.set(
                    L,
                    Ft(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: R,
                        immediateRender: !0,
                        lazy: !P && N(T),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          A &&
                          function () {
                            return fe(e, "onUpdate");
                          },
                        stagger: 0,
                      },
                      w
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 && (o || (!b && !S)) && e._startAt.revert(et),
                b && O && n <= 0 && r <= 0)
              )
                return void (n && (e._zTime = n));
            } else if (M && O && !P)
              if (
                (n && (b = !1),
                (l = Ft(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && !P && N(T),
                    immediateRender: b,
                    stagger: 0,
                    parent: R,
                  },
                  i
                )),
                m && (l[d.prop] = m),
                kt((e._startAt = $e.set(L, l))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 &&
                  (o ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
                (e._zTime = n),
                b)
              ) {
                if (!n) return;
              } else t(e._startAt, F, F);
            for (
              e._pt = e._ptCache = 0, T = (O && N(T)) || (T && !O), a = 0;
              a < L.length;
              a++
            ) {
              if (
                ((p = (c = L[a])._gsap || ct(L)[a]._gsap),
                (e._ptLookup[a] = g = {}),
                st[p.id] && it.length && vt(),
                (_ = Y === L ? a : Y.indexOf(c)),
                d &&
                  !1 !== (D = new d()).init(c, m || i, e, _, Y) &&
                  ((e._pt = h =
                    new fn(e._pt, c, D.name, 0, 1, D.render, D, 0, D.priority)),
                  D._props.forEach(function (t) {
                    g[t] = h;
                  }),
                  D.priority && (f = 1)),
                !d || m)
              )
                for (l in i)
                  ot[l] && (D = Ue(l, i, e, _, c, Y))
                    ? D.priority && (f = 1)
                    : (g[l] = h =
                        Ve.call(e, c, l, "get", i[l], _, Y, 0, y.stringFilter));
              e._op && e._op[a] && e.kill(c, e._op[a]),
                X &&
                  e._pt &&
                  ((Ie = e),
                  u.killTweensOf(c, g, e.globalTime(n)),
                  (v = !e.parent),
                  (Ie = 0)),
                e._pt && T && (st[p.id] = 1);
            }
            f && cn(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = A),
            (e._initted = (!e._op || e._pt) && !v),
            B && n <= 0 && z.render(C, !0, !0);
        },
        je = function (t, e, n, r) {
          var i,
            s,
            o = e.ease || r || "power1.inOut";
          if (X(e))
            (s = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return s.push({ t: (n / (e.length - 1)) * 100, v: t, e: o });
              });
          else
            for (i in e)
              (s = n[i] || (n[i] = [])),
                "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: o });
        },
        Ge = function (t, e, n, r, i) {
          return B(t)
            ? t.call(e, n, r, i)
            : k(t) && ~t.indexOf("random(")
            ? le(t)
            : t;
        },
        Qe = ht + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ze = {};
      dt(Qe + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (Ze[t] = 1);
      });
      var $e = (function (t) {
        function e(e, n, i, o) {
          var a;
          "number" == typeof n && ((i.duration = n), (n = i), (i = null));
          var l,
            h,
            c,
            f,
            p,
            d,
            D,
            g,
            _ = (a = t.call(this, o ? n : Tt(n)) || this).vars,
            m = _.duration,
            v = _.delay,
            x = _.immediateRender,
            C = _.stagger,
            F = _.overwrite,
            E = _.keyframes,
            w = _.defaults,
            b = _.scrollTrigger,
            T = _.yoyoEase,
            A = n.parent || u,
            M = (X(e) || Y(e) ? S(e[0]) : "length" in n) ? [e] : ee(e);
          if (
            ((a._targets = M.length
              ? ct(M)
              : $(
                  "GSAP target " + e + " not found. https://gsap.com",
                  !y.nullTargetWarn
                ) || []),
            (a._ptLookup = []),
            (a._overwrite = F),
            E || C || R(m) || R(v))
          ) {
            if (
              ((n = a.vars),
              (l = a.timeline =
                new ze({
                  data: "nested",
                  defaults: w || {},
                  targets: A && "nested" === A.data ? A.vars.targets : M,
                })).kill(),
              (l.parent = l._dp = r(a)),
              (l._start = 0),
              C || R(m) || R(v))
            ) {
              if (((f = M.length), (D = C && ie(C)), P(C)))
                for (p in C) ~Qe.indexOf(p) && (g || (g = {}), (g[p] = C[p]));
              for (h = 0; h < f; h++)
                ((c = bt(n, Ze)).stagger = 0),
                  T && (c.yoyoEase = T),
                  g && Et(c, g),
                  (d = M[h]),
                  (c.duration = +Ge(m, r(a), h, d, M)),
                  (c.delay = (+Ge(v, r(a), h, d, M) || 0) - a._delay),
                  !C &&
                    1 === f &&
                    c.delay &&
                    ((a._delay = v = c.delay), (a._start += v), (c.delay = 0)),
                  l.to(d, c, D ? D(h, d, M) : 0),
                  (l._ease = Te.none);
              l.duration() ? (m = v = 0) : (a.timeline = 0);
            } else if (E) {
              Tt(Ft(l.vars.defaults, { ease: "none" })),
                (l._ease = Oe(E.ease || n.ease || "none"));
              var k,
                B,
                O,
                L = 0;
              if (X(E))
                E.forEach(function (t) {
                  return l.to(M, t, ">");
                }),
                  l.duration();
              else {
                for (p in ((c = {}), E))
                  "ease" === p ||
                    "easeEach" === p ||
                    je(p, E[p], c, E.easeEach);
                for (p in c)
                  for (
                    k = c[p].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      L = 0,
                      h = 0;
                    h < k.length;
                    h++
                  )
                    ((O = {
                      ease: (B = k[h]).e,
                      duration: ((B.t - (h ? k[h - 1].t : 0)) / 100) * m,
                    })[p] = B.v),
                      l.to(M, O, L),
                      (L += O.duration);
                l.duration() < m && l.to({}, { duration: m - l.duration() });
              }
            }
            m || a.duration((m = l.duration()));
          } else a.timeline = 0;
          return (
            !0 !== F || s || ((Ie = r(a)), u.killTweensOf(M), (Ie = 0)),
            zt(A, r(a), i),
            n.reversed && a.reverse(),
            n.paused && a.paused(!0),
            (x ||
              (!m &&
                !E &&
                a._start === gt(A._time) &&
                N(x) &&
                Ot(r(a)) &&
                "nested" !== A.data)) &&
              ((a._tTime = -1e-8), a.render(Math.max(0, -v) || 0)),
            b && It(r(a), b),
            a
          );
        }
        i(e, t);
        var n = e.prototype;
        return (
          (n.render = function (t, e, n) {
            var r,
              i,
              s,
              a,
              u,
              l,
              h,
              c,
              f,
              p = this._time,
              d = this._tDur,
              D = this._dur,
              g = t < 0,
              _ = t > d - F && !g ? d : t < F ? 0 : t;
            if (D) {
              if (
                _ !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== g)
              ) {
                if (((r = _), (c = this.timeline), this._repeat)) {
                  if (((a = D + this._rDelay), this._repeat < -1 && g))
                    return this.totalTime(100 * a + t, e, n);
                  if (
                    ((r = gt(_ % a)),
                    _ === d
                      ? ((s = this._repeat), (r = D))
                      : ((s = ~~(_ / a)) && s === gt(_ / a) && ((r = D), s--),
                        r > D && (r = D)),
                    (l = this._yoyo && 1 & s) &&
                      ((f = this._yEase), (r = D - r)),
                    (u = Nt(this._tTime, a)),
                    r === p && !n && this._initted && s === u)
                  )
                    return (this._tTime = _), this;
                  s !== u &&
                    (c && this._yEase && Se(c, l),
                    this.vars.repeatRefresh &&
                      !l &&
                      !this._lock &&
                      this._time !== a &&
                      this._initted &&
                      ((this._lock = n = 1),
                      (this.render(gt(a * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Ht(this, g ? t : r, n, e, _))
                    return (this._tTime = 0), this;
                  if (
                    !(
                      p === this._time ||
                      (n && this.vars.repeatRefresh && s !== u)
                    )
                  )
                    return this;
                  if (D !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = _),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = h = (f || this._ease)(r / D)),
                  this._from && (this.ratio = h = 1 - h),
                  r &&
                    !p &&
                    !e &&
                    !s &&
                    (fe(this, "onStart"), this._tTime !== _))
                )
                  return this;
                for (i = this._pt; i; ) i.r(h, i.d), (i = i._next);
                (c &&
                  c.render(
                    t < 0 ? t : c._dur * c._ease(r / this._dur),
                    e,
                    n
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (g && St(this, t, 0, n), fe(this, "onUpdate")),
                  this._repeat &&
                    s !== u &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    fe(this, "onRepeat"),
                  (_ !== this._tDur && _) ||
                    this._tTime !== _ ||
                    (g && !this._onUpdate && St(this, t, 0, !0),
                    (t || !D) &&
                      ((_ === this._tDur && this._ts > 0) ||
                        (!_ && this._ts < 0)) &&
                      kt(this, 1),
                    e ||
                      (g && !p) ||
                      !(_ || p || l) ||
                      (fe(
                        this,
                        _ === d ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(_ < d && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, r) {
                var i,
                  s,
                  a,
                  u = t.ratio,
                  l =
                    e < 0 ||
                    (!e &&
                      ((!t._start && Wt(t) && (t._initted || !Vt(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Vt(t))))
                      ? 0
                      : 1,
                  h = t._rDelay,
                  c = 0;
                if (
                  (h &&
                    t._repeat &&
                    ((c = $t(0, t._tDur, e)),
                    (s = Nt(c, h)),
                    t._yoyo && 1 & s && (l = 1 - l),
                    s !== Nt(t._tTime, h) &&
                      ((u = 1 - l),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  l !== u || o || r || t._zTime === F || (!e && t._zTime))
                ) {
                  if (!t._initted && Ht(t, e, r, n, c)) return;
                  for (
                    a = t._zTime,
                      t._zTime = e || (n ? F : 0),
                      n || (n = e && !a),
                      t.ratio = l,
                      t._from && (l = 1 - l),
                      t._time = 0,
                      t._tTime = c,
                      i = t._pt;
                    i;

                  )
                    i.r(l, i.d), (i = i._next);
                  e < 0 && St(t, e, 0, !0),
                    t._onUpdate && !n && fe(t, "onUpdate"),
                    c && t._repeat && !n && t.parent && fe(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === l &&
                      (l && kt(t, 1),
                      n ||
                        o ||
                        (fe(t, l ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (n.resetTo = function (t, e, n, r, i) {
            D || we.wake(), this._ts || this.play();
            var s = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || qe(this, s),
              (function (t, e, n, r, i, s, o, a) {
                var u,
                  l,
                  h,
                  c,
                  f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!f)
                  for (
                    f = t._ptCache[e] = [],
                      h = t._ptLookup,
                      c = t._targets.length;
                    c--;

                  ) {
                    if ((u = h[c][e]) && u.d && u.d._pt)
                      for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                        u = u._next;
                    if (!u)
                      return (
                        (He = 1),
                        (t.vars[e] = "+=0"),
                        qe(t, o),
                        (He = 0),
                        a ? $(e + " not eligible for reset") : 1
                      );
                    f.push(u);
                  }
                for (c = f.length; c--; )
                  ((u = (l = f[c])._pt || l).s =
                    (!r && 0 !== r) || i ? u.s + (r || 0) + s * u.c : r),
                    (u.c = n - u.s),
                    l.e && (l.e = Dt(n) + Kt(l.e)),
                    l.b && (l.b = u.s + Kt(l.b));
              })(this, t, e, n, r, this._ease(s / this._dur), s, i)
                ? this.resetTo(t, e, n, r, 1)
                : (Yt(this, 0),
                  this.parent ||
                    At(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (n.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? pe(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)
                  ._first || pe(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Ut(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              s,
              o,
              a,
              u,
              l,
              h = this._targets,
              c = t ? ee(t) : h,
              f = this._ptLookup,
              p = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var n = t.length, r = n === e.length;
                  r && n-- && t[n] === e[n];

                );
                return n < 0;
              })(h, c)
            )
              return "all" === e && (this._pt = 0), pe(this);
            for (
              r = this._op = this._op || [],
                "all" !== e &&
                  (k(e) &&
                    ((a = {}),
                    dt(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var n,
                      r,
                      i,
                      s,
                      o = t[0] ? ft(t[0]).harness : 0,
                      a = o && o.aliases;
                    if (!a) return e;
                    for (r in ((n = Et({}, e)), a))
                      if ((r in n))
                        for (i = (s = a[r].split(",")).length; i--; )
                          n[s[i]] = n[r];
                    return n;
                  })(h, e))),
                l = h.length;
              l--;

            )
              if (~c.indexOf(h[l]))
                for (a in ((i = f[l]),
                "all" === e
                  ? ((r[l] = e), (o = i), (s = {}))
                  : ((s = r[l] = r[l] || {}), (o = e)),
                o))
                  (u = i && i[a]) &&
                    (("kill" in u.d && !0 !== u.d.kill(a)) ||
                      Mt(this, u, "_pt"),
                    delete i[a]),
                    "all" !== s && (s[a] = 1);
            return this._initted && !this._pt && p && pe(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, e) {
            return Qt(1, arguments);
          }),
          (e.delayedCall = function (t, n, r, i) {
            return new e(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, e, n) {
            return Qt(2, arguments);
          }),
          (e.set = function (t, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
            );
          }),
          (e.killTweensOf = function (t, e, n) {
            return u.killTweensOf(t, e, n);
          }),
          e
        );
      })(Xe);
      Ft($e.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        dt("staggerTo,staggerFrom,staggerFromTo", function (t) {
          $e[t] = function () {
            var e = new ze(),
              n = Jt.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            );
          };
        });
      var Ke = function (t, e, n) {
          return (t[e] = n);
        },
        Je = function (t, e, n) {
          return t[e](n);
        },
        tn = function (t, e, n, r) {
          return t[e](r.fp, n);
        },
        en = function (t, e, n) {
          return t.setAttribute(e, n);
        },
        nn = function (t, e) {
          return B(t[e]) ? Je : O(t[e]) && t.setAttribute ? en : Ke;
        },
        rn = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        sn = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        on = function (t, e) {
          var n = e._pt,
            r = "";
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                r),
                (n = n._next);
            r += e.c;
          }
          e.set(e.t, e.p, r, e);
        },
        an = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        un = function (t, e, n, r) {
          for (var i, s = this._pt; s; )
            (i = s._next), s.p === r && s.modifier(t, e, n), (s = i);
        },
        ln = function (t) {
          for (var e, n, r = this._pt; r; )
            (n = r._next),
              (r.p === t && !r.op) || r.op === t
                ? Mt(this, r, "_pt")
                : r.dep || (e = 1),
              (r = n);
          return !e;
        },
        hn = function (t, e, n, r) {
          r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
        },
        cn = function (t) {
          for (var e, n, r, i, s = t._pt; s; ) {
            for (e = s._next, n = r; n && n.pr > s.pr; ) n = n._next;
            (s._prev = n ? n._prev : i) ? (s._prev._next = s) : (r = s),
              (s._next = n) ? (n._prev = s) : (i = s),
              (s = e);
          }
          t._pt = r;
        },
        fn = (function () {
          function t(t, e, n, r, i, s, o, a, u) {
            (this.t = e),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = s || rn),
              (this.d = o || this),
              (this.set = a || Ke),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = hn),
                (this.m = t),
                (this.mt = n),
                (this.tween = e);
            }),
            t
          );
        })();
      dt(
        ht +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (rt[t] = 1);
        }
      ),
        (j.TweenMax = j.TweenLite = $e),
        (j.TimelineLite = j.TimelineMax = ze),
        (u = new ze({
          sortChildren: !1,
          defaults: x,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (y.stringFilter = Ee);
      var pn = [],
        dn = {},
        Dn = [],
        gn = 0,
        _n = 0,
        mn = function (t) {
          return (dn[t] || Dn).map(function (t) {
            return t();
          });
        },
        vn = function () {
          var t = Date.now(),
            e = [];
          t - gn > 2 &&
            (mn("matchMediaInit"),
            pn.forEach(function (t) {
              var n,
                r,
                i,
                s,
                o = t.queries,
                a = t.conditions;
              for (r in o)
                (n = l.matchMedia(o[r]).matches) && (i = 1),
                  n !== a[r] && ((a[r] = n), (s = 1));
              s && (t.revert(), i && e.push(t));
            }),
            mn("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e);
              });
            }),
            (gn = t),
            mn("matchMedia"));
        },
        yn = (function () {
          function t(t, e) {
            (this.selector = e && ne(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = _n++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              B(t) && ((n = e), (e = t), (t = B));
              var r = this,
                i = function () {
                  var t,
                    i = a,
                    s = r.selector;
                  return (
                    i && i !== r && i.data.push(r),
                    n && (r.selector = ne(n)),
                    (a = r),
                    (t = e.apply(r, arguments)),
                    B(t) && r._r.push(t),
                    (a = i),
                    (r.selector = s),
                    (r.isReverted = !1),
                    t
                  );
                };
              return (
                (r.last = i),
                t === B
                  ? i(r, function (t) {
                      return r.add(null, t);
                    })
                  : t
                  ? (r[t] = i)
                  : i
              );
            }),
            (e.ignore = function (t) {
              var e = a;
              (a = null), t(this), (a = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (n) {
                  return n instanceof t
                    ? e.push.apply(e, n.getTweens())
                    : n instanceof $e &&
                        !(n.parent && "nested" === n.parent.data) &&
                        e.push(n);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var n = this;
              if (
                (t
                  ? (function () {
                      for (var e, r = n.getTweens(), i = n.data.length; i--; )
                        "isFlip" === (e = n.data[i]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return r.splice(r.indexOf(t), 1);
                          }));
                      for (
                        r
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t,
                            };
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0;
                          })
                          .forEach(function (e) {
                            return e.t.revert(t);
                          }),
                          i = n.data.length;
                        i--;

                      )
                        (e = n.data[i]) instanceof ze
                          ? "nested" !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : !(e instanceof $e) && e.revert && e.revert(t);
                      n._r.forEach(function (e) {
                        return e(t, n);
                      }),
                        (n.isReverted = !0);
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill();
                    }),
                this.clear(),
                e)
              )
                for (var r = pn.length; r--; )
                  pn[r].id === this.id && pn.splice(r, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        xn = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t), a && a.data.push(this);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              P(t) || (t = { matches: t });
              var r,
                i,
                s,
                o = new yn(0, n || this.scope),
                u = (o.conditions = {});
              for (i in (a && !o.selector && (o.selector = a.selector),
              this.contexts.push(o),
              (e = o.add("onMatch", e)),
              (o.queries = t),
              t))
                "all" === i
                  ? (s = 1)
                  : (r = l.matchMedia(t[i])) &&
                    (pn.indexOf(o) < 0 && pn.push(o),
                    (u[i] = r.matches) && (s = 1),
                    r.addListener
                      ? r.addListener(vn)
                      : r.addEventListener("change", vn));
              return (
                s &&
                  e(o, function (t) {
                    return o.add(null, t);
                  }),
                this
              );
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        Cn = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            e.forEach(function (t) {
              return De(t);
            });
          },
          timeline: function (t) {
            return new ze(t);
          },
          getTweensOf: function (t, e) {
            return u.getTweensOf(t, e);
          },
          getProperty: function (t, e, n, r) {
            k(t) && (t = ee(t)[0]);
            var i = ft(t || {}).get,
              s = n ? Ct : xt;
            return (
              "native" === n && (n = ""),
              t
                ? e
                  ? s(((ot[e] && ot[e].get) || i)(t, e, n, r))
                  : function (e, n, r) {
                      return s(((ot[e] && ot[e].get) || i)(t, e, n, r));
                    }
                : t
            );
          },
          quickSetter: function (t, e, n) {
            if ((t = ee(t)).length > 1) {
              var r = t.map(function (t) {
                  return wn.quickSetter(t, e, n);
                }),
                i = r.length;
              return function (t) {
                for (var e = i; e--; ) r[e](t);
              };
            }
            t = t[0] || {};
            var s = ot[e],
              o = ft(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var r = new s();
                    (d._pt = 0),
                      r.init(t, n ? e + n : e, d, 0, [t]),
                      r.render(1, r),
                      d._pt && an(1, d);
                  }
                : o.set(t, a);
            return s
              ? u
              : function (e) {
                  return u(t, a, n ? e + n : e, o, 1);
                };
          },
          quickTo: function (t, e, n) {
            var r,
              i = wn.to(
                t,
                Et((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {})
              ),
              s = function (t, n, r) {
                return i.resetTo(e, t, n, r);
              };
            return (s.tween = i), s;
          },
          isTweening: function (t) {
            return u.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Oe(t.ease, x.ease)), wt(x, t || {});
          },
          config: function (t) {
            return wt(y, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              n = t.effect,
              r = t.plugins,
              i = t.defaults,
              s = t.extendTimeline;
            (r || "").split(",").forEach(function (t) {
              return (
                t &&
                !ot[t] &&
                !j[t] &&
                $(e + " effect requires " + t + " plugin.")
              );
            }),
              (at[e] = function (t, e, r) {
                return n(ee(t), Ft(e || {}, i), r);
              }),
              s &&
                (ze.prototype[e] = function (t, n, r) {
                  return this.add(at[e](t, P(n) ? n : (r = n) && {}, this), r);
                });
          },
          registerEase: function (t, e) {
            Te[t] = Oe(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Oe(t, e) : Te;
          },
          getById: function (t) {
            return u.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n,
              r,
              i = new ze(t);
            for (
              i.smoothChildTiming = N(t.smoothChildTiming),
                u.remove(i),
                i._dp = 0,
                i._time = i._tTime = u._time,
                n = u._first;
              n;

            )
              (r = n._next),
                (!e &&
                  !n._dur &&
                  n instanceof $e &&
                  n.vars.onComplete === n._targets[0]) ||
                  zt(i, n, n._start - n._delay),
                (n = r);
            return zt(u, i, 0), i;
          },
          context: function (t, e) {
            return t ? new yn(t, e) : a;
          },
          matchMedia: function (t) {
            return new xn(t);
          },
          matchMediaRefresh: function () {
            return (
              pn.forEach(function (t) {
                var e,
                  n,
                  r = t.conditions;
                for (n in r) r[n] && ((r[n] = !1), (e = 1));
                e && t.revert();
              }) || vn()
            );
          },
          addEventListener: function (t, e) {
            var n = dn[t] || (dn[t] = []);
            ~n.indexOf(e) || n.push(e);
          },
          removeEventListener: function (t, e) {
            var n = dn[t],
              r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          },
          utils: {
            wrap: function t(e, n, r) {
              var i = n - e;
              return X(e)
                ? ue(e, t(0, e.length), n)
                : Zt(r, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, n, r) {
              var i = n - e,
                s = 2 * i;
              return X(e)
                ? ue(e, t(0, e.length - 1), n)
                : Zt(r, function (t) {
                    return (
                      e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t)
                    );
                  });
            },
            distribute: ie,
            random: ae,
            snap: oe,
            normalize: function (t, e, n) {
              return he(t, e, 0, 1, n);
            },
            getUnit: Kt,
            clamp: function (t, e, n) {
              return Zt(n, function (n) {
                return $t(t, e, n);
              });
            },
            splitColor: ve,
            toArray: ee,
            selector: ne,
            mapRange: he,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (n) {
                return t(parseFloat(n)) + (e || Kt(n));
              };
            },
            interpolate: function t(e, n, r, i) {
              var s = isNaN(e + n)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * n;
                  };
              if (!s) {
                var o,
                  a,
                  u,
                  l,
                  h,
                  c = k(e),
                  f = {};
                if ((!0 === r && (i = 1) && (r = null), c))
                  (e = { p: e }), (n = { p: n });
                else if (X(e) && !X(n)) {
                  for (u = [], l = e.length, h = l - 2, a = 1; a < l; a++)
                    u.push(t(e[a - 1], e[a]));
                  l--,
                    (s = function (t) {
                      t *= l;
                      var e = Math.min(h, ~~t);
                      return u[e](t - e);
                    }),
                    (r = n);
                } else i || (e = Et(X(e) ? [] : {}, e));
                if (!u) {
                  for (o in n) Ve.call(f, e, o, "get", n[o]);
                  s = function (t) {
                    return an(t, f) || (c ? e.p : e);
                  };
                }
              }
              return Zt(r, s);
            },
            shuffle: re,
          },
          install: Q,
          effects: at,
          ticker: we,
          updateRoot: ze.updateRoot,
          plugins: ot,
          globalTimeline: u,
          core: {
            PropTween: fn,
            globals: K,
            Tween: $e,
            Timeline: ze,
            Animation: Xe,
            getCache: ft,
            _removeLinkedListItem: Mt,
            reverting: function () {
              return o;
            },
            context: function (t) {
              return t && a && (a.data.push(t), (t._ctx = a)), a;
            },
            suppressOverwrites: function (t) {
              return (s = t);
            },
          },
        };
      dt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (Cn[t] = $e[t]);
      }),
        we.add(ze.updateRoot),
        (d = Cn.to({}, { duration: 0 }));
      var Fn = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
          return n;
        },
        En = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, r) {
              r._onInit = function (t) {
                var r, i;
                if (
                  (k(n) &&
                    ((r = {}),
                    dt(n, function (t) {
                      return (r[t] = 1);
                    }),
                    (n = r)),
                  e)
                ) {
                  for (i in ((r = {}), n)) r[i] = e(n[i]);
                  n = r;
                }
                !(function (t, e) {
                  var n,
                    r,
                    i,
                    s = t._targets;
                  for (n in e)
                    for (r = s.length; r--; )
                      (i = t._ptLookup[r][n]) &&
                        (i = i.d) &&
                        (i._pt && (i = Fn(i, n)),
                        i && i.modifier && i.modifier(e[n], t, s[r], n));
                })(t, n);
              };
            },
          };
        },
        wn =
          Cn.registerPlugin(
            {
              name: "attr",
              init: function (t, e, n, r, i) {
                var s, o, a;
                for (s in ((this.tween = n), e))
                  (a = t.getAttribute(s) || ""),
                    ((o = this.add(
                      t,
                      "setAttribute",
                      (a || 0) + "",
                      e[s],
                      r,
                      i,
                      0,
                      0,
                      s
                    )).op = s),
                    (o.b = a),
                    this._props.push(s);
              },
              render: function (t, e) {
                for (var n = e._pt; n; )
                  o ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var n = e.length; n--; )
                  this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
              },
            },
            En("roundProps", se),
            En("modifiers"),
            En("snap", oe)
          ) || Cn;
      ($e.version = ze.version = wn.version = "3.12.5"),
        (f = 1),
        L() && be(),
        Te.Power0,
        Te.Power1,
        Te.Power2,
        Te.Power3,
        Te.Power4,
        Te.Linear,
        Te.Quad,
        Te.Cubic,
        Te.Quart,
        Te.Quint,
        Te.Strong,
        Te.Elastic,
        Te.Back,
        Te.SteppedEase,
        Te.Bounce,
        Te.Sine,
        Te.Expo,
        Te.Circ;
      var bn,
        Tn,
        An,
        Mn,
        kn,
        Bn,
        Sn,
        On,
        Pn = {},
        Nn = 180 / Math.PI,
        Ln = Math.PI / 180,
        Rn = Math.atan2,
        Yn = /([A-Z])/g,
        Xn = /(left|right|width|margin|padding|x)/i,
        zn = /[\s,\(]\S/,
        In = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        Hn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Wn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Vn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        Un = function (t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        qn = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        jn = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Gn = function (t, e, n) {
          return (t.style[e] = n);
        },
        Qn = function (t, e, n) {
          return t.style.setProperty(e, n);
        },
        Zn = function (t, e, n) {
          return (t._gsap[e] = n);
        },
        $n = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        Kn = function (t, e, n, r, i) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = n), s.renderTransform(i, s);
        },
        Jn = function (t, e, n, r, i) {
          var s = t._gsap;
          (s[e] = n), s.renderTransform(i, s);
        },
        tr = "transform",
        er = tr + "Origin",
        nr = function t(e, n) {
          var r = this,
            i = this.target,
            s = i.style,
            o = i._gsap;
          if (e in Pn && s) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return In.transform.split(",").forEach(function (e) {
                return t.call(r, e, n);
              });
            if (
              (~(e = In[e] || e).indexOf(",")
                ? e.split(",").forEach(function (t) {
                    return (r.tfm[t] = yr(i, t));
                  })
                : (this.tfm[e] = o.x ? o[e] : yr(i, e)),
              e === er && (this.tfm.zOrigin = o.zOrigin),
              this.props.indexOf(tr) >= 0)
            )
              return;
            o.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(er, n, "")),
              (e = tr);
          }
          (s || n) && this.props.push(e, n, s[e]);
        },
        rr = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        ir = function () {
          var t,
            e,
            n = this.props,
            r = this.target,
            i = r.style,
            s = r._gsap;
          for (t = 0; t < n.length; t += 3)
            n[t + 1]
              ? (r[n[t]] = n[t + 2])
              : n[t + 2]
              ? (i[n[t]] = n[t + 2])
              : i.removeProperty(
                  "--" === n[t].substr(0, 2)
                    ? n[t]
                    : n[t].replace(Yn, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg &&
              (s.renderTransform(),
              r.setAttribute("data-svg-origin", this.svgo || "")),
              ((t = Sn()) && t.isStart) ||
                i[tr] ||
                (rr(i),
                s.zOrigin &&
                  i[er] &&
                  ((i[er] += " " + s.zOrigin + "px"),
                  (s.zOrigin = 0),
                  s.renderTransform()),
                (s.uncache = 1));
          }
        },
        sr = function (t, e) {
          var n = { target: t, props: [], revert: ir, save: nr };
          return (
            t._gsap || wn.core.getCache(t),
            e &&
              e.split(",").forEach(function (t) {
                return n.save(t);
              }),
            n
          );
        },
        or = function (t, e) {
          var n = Tn.createElementNS
            ? Tn.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : Tn.createElement(t);
          return n && n.style ? n : Tn.createElement(t);
        },
        ar = function t(e, n, r) {
          var i = getComputedStyle(e);
          return (
            i[n] ||
            i.getPropertyValue(n.replace(Yn, "-$1").toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && t(e, lr(n) || n, 1)) ||
            ""
          );
        },
        ur = "O,Moz,ms,Ms,Webkit".split(","),
        lr = function (t, e, n) {
          var r = (e || kn).style,
            i = 5;
          if (t in r && !n) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(ur[i] + t in r);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ur[i] : "") + t;
        },
        hr = function () {
          "undefined" != typeof window &&
            window.document &&
            ((bn = window),
            (Tn = bn.document),
            (An = Tn.documentElement),
            (kn = or("div") || { style: {} }),
            or("div"),
            (tr = lr(tr)),
            (er = tr + "Origin"),
            (kn.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (On = !!lr("perspective")),
            (Sn = wn.core.reverting),
            (Mn = 1));
        },
        cr = function t(e) {
          var n,
            r = or(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
          if (
            (An.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
            An.removeChild(r),
            (this.style.cssText = o),
            n
          );
        },
        fr = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        pr = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (n) {
            e = cr.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === cr ||
              (e = cr.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +fr(t, ["x", "cx", "x1"]) || 0,
                  y: +fr(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        dr = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !pr(t));
        },
        Dr = function (t, e) {
          if (e) {
            var n,
              r = t.style;
            e in Pn && e !== er && (e = tr),
              r.removeProperty
                ? (("ms" !== (n = e.substr(0, 2)) &&
                    "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(
                    "--" === n ? e : e.replace(Yn, "-$1").toLowerCase()
                  ))
                : r.removeAttribute(e);
          }
        },
        gr = function (t, e, n, r, i, s) {
          var o = new fn(t._pt, e, n, 0, 1, s ? jn : qn);
          return (t._pt = o), (o.b = r), (o.e = i), t._props.push(n), o;
        },
        _r = { deg: 1, rad: 1, turn: 1 },
        mr = { grid: 1, flex: 1 },
        vr = function t(e, n, r, i) {
          var s,
            o,
            a,
            u,
            l = parseFloat(r) || 0,
            h = (r + "").trim().substr((l + "").length) || "px",
            c = kn.style,
            f = Xn.test(n),
            p = "svg" === e.tagName.toLowerCase(),
            d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            D = 100,
            g = "px" === i,
            _ = "%" === i;
          if (i === h || !l || _r[i] || _r[h]) return l;
          if (
            ("px" !== h && !g && (l = t(e, n, r, "px")),
            (u = e.getCTM && dr(e)),
            (_ || "%" === h) && (Pn[n] || ~n.indexOf("adius")))
          )
            return (
              (s = u ? e.getBBox()[f ? "width" : "height"] : e[d]),
              Dt(_ ? (l / s) * D : (l / 100) * s)
            );
          if (
            ((c[f ? "width" : "height"] = D + (g ? h : i)),
            (o =
              ~n.indexOf("adius") || ("em" === i && e.appendChild && !p)
                ? e
                : e.parentNode),
            u && (o = (e.ownerSVGElement || {}).parentNode),
            (o && o !== Tn && o.appendChild) || (o = Tn.body),
            (a = o._gsap) &&
              _ &&
              a.width &&
              f &&
              a.time === we.time &&
              !a.uncache)
          )
            return Dt((l / a.width) * D);
          if (!_ || ("height" !== n && "width" !== n))
            (_ || "%" === h) &&
              !mr[ar(o, "display")] &&
              (c.position = ar(e, "position")),
              o === e && (c.position = "static"),
              o.appendChild(kn),
              (s = kn[d]),
              o.removeChild(kn),
              (c.position = "absolute");
          else {
            var m = e.style[n];
            (e.style[n] = D + i), (s = e[d]), m ? (e.style[n] = m) : Dr(e, n);
          }
          return (
            f && _ && (((a = ft(o)).time = we.time), (a.width = o[d])),
            Dt(g ? (s * l) / D : s && l ? (D / s) * l : 0)
          );
        },
        yr = function (t, e, n, r) {
          var i;
          return (
            Mn || hr(),
            e in In &&
              "transform" !== e &&
              ~(e = In[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            Pn[e] && "transform" !== e
              ? ((i = Br(t, r)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                    ? i.origin
                    : Sr(ar(t, er)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  r ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (Er[e] && Er[e](t, e, n)) ||
                  ar(t, e) ||
                  pt(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? vr(t, e, i, n) + n : i
          );
        },
        xr = function (t, e, n, r) {
          if (!n || "none" === n) {
            var i = lr(e, t, 1),
              s = i && ar(t, i, 1);
            s && s !== n
              ? ((e = i), (n = s))
              : "borderColor" === e && (n = ar(t, "borderTopColor"));
          }
          var o,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            D,
            g,
            _ = new fn(this._pt, t.style, e, 0, 1, on),
            m = 0,
            v = 0;
          if (
            ((_.b = n),
            (_.e = r),
            (n += ""),
            "auto" == (r += "") &&
              ((c = t.style[e]),
              (t.style[e] = r),
              (r = ar(t, e) || r),
              c ? (t.style[e] = c) : Dr(t, e)),
            Ee((o = [n, r])),
            (r = o[1]),
            (u = (n = o[0]).match(H) || []),
            (r.match(H) || []).length)
          ) {
            for (; (a = H.exec(r)); )
              (f = a[0]),
                (d = r.substring(m, a.index)),
                h
                  ? (h = (h + 1) % 5)
                  : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                    (h = 1),
                f !== (c = u[v++] || "") &&
                  ((l = parseFloat(c) || 0),
                  (g = c.substr((l + "").length)),
                  "=" === f.charAt(1) && (f = _t(l, f) + g),
                  (p = parseFloat(f)),
                  (D = f.substr((p + "").length)),
                  (m = H.lastIndex - D.length),
                  D ||
                    ((D = D || y.units[e] || g),
                    m === r.length && ((r += D), (_.e += D))),
                  g !== D && (l = vr(t, e, c, D) || 0),
                  (_._pt = {
                    _next: _._pt,
                    p: d || 1 === v ? d : ",",
                    s: l,
                    c: p - l,
                    m: (h && h < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            _.c = m < r.length ? r.substring(m, r.length) : "";
          } else _.r = "display" === e && "none" === r ? jn : qn;
          return V.test(r) && (_.e = 0), (this._pt = _), _;
        },
        Cr = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        Fr = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              r,
              i,
              s = e.t,
              o = s.style,
              a = e.u,
              u = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (r = 1);
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                (n = a[i]),
                  Pn[n] && ((r = 1), (n = "transformOrigin" === n ? er : tr)),
                  Dr(s, n);
            r &&
              (Dr(s, tr),
              u &&
                (u.svg && s.removeAttribute("transform"),
                Br(s, 1),
                (u.uncache = 1),
                rr(o)));
          }
        },
        Er = {
          clearProps: function (t, e, n, r, i) {
            if ("isFromStart" !== i.data) {
              var s = (t._pt = new fn(t._pt, e, n, 0, 0, Fr));
              return (
                (s.u = r), (s.pr = -10), (s.tween = i), t._props.push(n), 1
              );
            }
          },
        },
        wr = [1, 0, 0, 1, 0, 0],
        br = {},
        Tr = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        Ar = function (t) {
          var e = ar(t, tr);
          return Tr(e) ? wr : e.substr(7).match(I).map(Dt);
        },
        Mr = function (t, e) {
          var n,
            r,
            i,
            s,
            o = t._gsap || ft(t),
            a = t.style,
            u = Ar(t);
          return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? wr
              : u
            : (u !== wr ||
                t.offsetParent ||
                t === An ||
                o.svg ||
                ((i = a.display),
                (a.display = "block"),
                ((n = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (r = t.nextElementSibling), An.appendChild(t)),
                (u = Ar(t)),
                i ? (a.display = i) : Dr(t, "display"),
                s &&
                  (r
                    ? n.insertBefore(t, r)
                    : n
                    ? n.appendChild(t)
                    : An.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        kr = function (t, e, n, r, i, s) {
          var o,
            a,
            u,
            l = t._gsap,
            h = i || Mr(t, !0),
            c = l.xOrigin || 0,
            f = l.yOrigin || 0,
            p = l.xOffset || 0,
            d = l.yOffset || 0,
            D = h[0],
            g = h[1],
            _ = h[2],
            m = h[3],
            v = h[4],
            y = h[5],
            x = e.split(" "),
            C = parseFloat(x[0]) || 0,
            F = parseFloat(x[1]) || 0;
          n
            ? h !== wr &&
              (a = D * m - g * _) &&
              ((u = C * (-g / a) + F * (D / a) - (D * y - g * v) / a),
              (C = C * (m / a) + F * (-_ / a) + (_ * y - m * v) / a),
              (F = u))
            : ((C =
                (o = pr(t)).x + (~x[0].indexOf("%") ? (C / 100) * o.width : C)),
              (F =
                o.y +
                (~(x[1] || x[0]).indexOf("%") ? (F / 100) * o.height : F))),
            r || (!1 !== r && l.smooth)
              ? ((v = C - c),
                (y = F - f),
                (l.xOffset = p + (v * D + y * _) - v),
                (l.yOffset = d + (v * g + y * m) - y))
              : (l.xOffset = l.yOffset = 0),
            (l.xOrigin = C),
            (l.yOrigin = F),
            (l.smooth = !!r),
            (l.origin = e),
            (l.originIsAbsolute = !!n),
            (t.style[er] = "0px 0px"),
            s &&
              (gr(s, l, "xOrigin", c, C),
              gr(s, l, "yOrigin", f, F),
              gr(s, l, "xOffset", p, l.xOffset),
              gr(s, l, "yOffset", d, l.yOffset)),
            t.setAttribute("data-svg-origin", C + " " + F);
        },
        Br = function (t, e) {
          var n = t._gsap || new Ye(t);
          if ("x" in n && !e && !n.uncache) return n;
          var r,
            i,
            s,
            o,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            D,
            g,
            _,
            m,
            v,
            x,
            C,
            F,
            E,
            w,
            b,
            T,
            A,
            M,
            k,
            B,
            S,
            O,
            P,
            N,
            L = t.style,
            R = n.scaleX < 0,
            Y = "px",
            X = "deg",
            z = getComputedStyle(t),
            I = ar(t, er) || "0";
          return (
            (r = i = s = u = l = h = c = f = p = 0),
            (o = a = 1),
            (n.svg = !(!t.getCTM || !dr(t))),
            z.translate &&
              (("none" === z.translate &&
                "none" === z.scale &&
                "none" === z.rotate) ||
                (L[tr] =
                  ("none" !== z.translate
                    ? "translate3d(" +
                      (z.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== z.rotate ? "rotate(" + z.rotate + ") " : "") +
                  ("none" !== z.scale
                    ? "scale(" + z.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== z[tr] ? z[tr] : "")),
              (L.scale = L.rotate = L.translate = "none")),
            (g = Mr(t, n.svg)),
            n.svg &&
              (n.uncache
                ? ((A = t.getBBox()),
                  (I = n.xOrigin - A.x + "px " + (n.yOrigin - A.y) + "px"),
                  (T = ""))
                : (T = !e && t.getAttribute("data-svg-origin")),
              kr(t, T || I, !!T || n.originIsAbsolute, !1 !== n.smooth, g)),
            (d = n.xOrigin || 0),
            (D = n.yOrigin || 0),
            g !== wr &&
              ((x = g[0]),
              (C = g[1]),
              (F = g[2]),
              (E = g[3]),
              (r = w = g[4]),
              (i = b = g[5]),
              6 === g.length
                ? ((o = Math.sqrt(x * x + C * C)),
                  (a = Math.sqrt(E * E + F * F)),
                  (u = x || C ? Rn(C, x) * Nn : 0),
                  (c = F || E ? Rn(F, E) * Nn + u : 0) &&
                    (a *= Math.abs(Math.cos(c * Ln))),
                  n.svg &&
                    ((r -= d - (d * x + D * F)), (i -= D - (d * C + D * E))))
                : ((N = g[6]),
                  (O = g[7]),
                  (k = g[8]),
                  (B = g[9]),
                  (S = g[10]),
                  (P = g[11]),
                  (r = g[12]),
                  (i = g[13]),
                  (s = g[14]),
                  (l = (_ = Rn(N, S)) * Nn),
                  _ &&
                    ((T = w * (m = Math.cos(-_)) + k * (v = Math.sin(-_))),
                    (A = b * m + B * v),
                    (M = N * m + S * v),
                    (k = w * -v + k * m),
                    (B = b * -v + B * m),
                    (S = N * -v + S * m),
                    (P = O * -v + P * m),
                    (w = T),
                    (b = A),
                    (N = M)),
                  (h = (_ = Rn(-F, S)) * Nn),
                  _ &&
                    ((m = Math.cos(-_)),
                    (P = E * (v = Math.sin(-_)) + P * m),
                    (x = T = x * m - k * v),
                    (C = A = C * m - B * v),
                    (F = M = F * m - S * v)),
                  (u = (_ = Rn(C, x)) * Nn),
                  _ &&
                    ((T = x * (m = Math.cos(_)) + C * (v = Math.sin(_))),
                    (A = w * m + b * v),
                    (C = C * m - x * v),
                    (b = b * m - w * v),
                    (x = T),
                    (w = A)),
                  l &&
                    Math.abs(l) + Math.abs(u) > 359.9 &&
                    ((l = u = 0), (h = 180 - h)),
                  (o = Dt(Math.sqrt(x * x + C * C + F * F))),
                  (a = Dt(Math.sqrt(b * b + N * N))),
                  (_ = Rn(w, b)),
                  (c = Math.abs(_) > 2e-4 ? _ * Nn : 0),
                  (p = P ? 1 / (P < 0 ? -P : P) : 0)),
              n.svg &&
                ((T = t.getAttribute("transform")),
                (n.forceCSS =
                  t.setAttribute("transform", "") || !Tr(ar(t, tr))),
                T && t.setAttribute("transform", T))),
            Math.abs(c) > 90 &&
              Math.abs(c) < 270 &&
              (R
                ? ((o *= -1),
                  (c += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((a *= -1), (c += c <= 0 ? 180 : -180))),
            (e = e || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!e && n.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              Y),
            (n.y =
              i -
              ((n.yPercent =
                i &&
                ((!e && n.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              Y),
            (n.z = s + Y),
            (n.scaleX = Dt(o)),
            (n.scaleY = Dt(a)),
            (n.rotation = Dt(u) + X),
            (n.rotationX = Dt(l) + X),
            (n.rotationY = Dt(h) + X),
            (n.skewX = c + X),
            (n.skewY = f + X),
            (n.transformPerspective = p + Y),
            (n.zOrigin =
              parseFloat(I.split(" ")[2]) || (!e && n.zOrigin) || 0) &&
              (L[er] = Sr(I)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = y.force3D),
            (n.renderTransform = n.svg ? Xr : On ? Yr : Pr),
            (n.uncache = 0),
            n
          );
        },
        Sr = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        Or = function (t, e, n) {
          var r = Kt(e);
          return Dt(parseFloat(e) + parseFloat(vr(t, "x", n + "px", r))) + r;
        },
        Pr = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            Yr(t, e);
        },
        Nr = "0deg",
        Lr = "0px",
        Rr = ") ",
        Yr = function (t, e) {
          var n = e || this,
            r = n.xPercent,
            i = n.yPercent,
            s = n.x,
            o = n.y,
            a = n.z,
            u = n.rotation,
            l = n.rotationY,
            h = n.rotationX,
            c = n.skewX,
            f = n.skewY,
            p = n.scaleX,
            d = n.scaleY,
            D = n.transformPerspective,
            g = n.force3D,
            _ = n.target,
            m = n.zOrigin,
            v = "",
            y = ("auto" === g && t && 1 !== t) || !0 === g;
          if (m && (h !== Nr || l !== Nr)) {
            var x,
              C = parseFloat(l) * Ln,
              F = Math.sin(C),
              E = Math.cos(C);
            (C = parseFloat(h) * Ln),
              (x = Math.cos(C)),
              (s = Or(_, s, F * x * -m)),
              (o = Or(_, o, -Math.sin(C) * -m)),
              (a = Or(_, a, E * x * -m + m));
          }
          D !== Lr && (v += "perspective(" + D + Rr),
            (r || i) && (v += "translate(" + r + "%, " + i + "%) "),
            (y || s !== Lr || o !== Lr || a !== Lr) &&
              (v +=
                a !== Lr || y
                  ? "translate3d(" + s + ", " + o + ", " + a + ") "
                  : "translate(" + s + ", " + o + Rr),
            u !== Nr && (v += "rotate(" + u + Rr),
            l !== Nr && (v += "rotateY(" + l + Rr),
            h !== Nr && (v += "rotateX(" + h + Rr),
            (c === Nr && f === Nr) || (v += "skew(" + c + ", " + f + Rr),
            (1 === p && 1 === d) || (v += "scale(" + p + ", " + d + Rr),
            (_.style[tr] = v || "translate(0, 0)");
        },
        Xr = function (t, e) {
          var n,
            r,
            i,
            s,
            o,
            a = e || this,
            u = a.xPercent,
            l = a.yPercent,
            h = a.x,
            c = a.y,
            f = a.rotation,
            p = a.skewX,
            d = a.skewY,
            D = a.scaleX,
            g = a.scaleY,
            _ = a.target,
            m = a.xOrigin,
            v = a.yOrigin,
            y = a.xOffset,
            x = a.yOffset,
            C = a.forceCSS,
            F = parseFloat(h),
            E = parseFloat(c);
          (f = parseFloat(f)),
            (p = parseFloat(p)),
            (d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
            f || p
              ? ((f *= Ln),
                (p *= Ln),
                (n = Math.cos(f) * D),
                (r = Math.sin(f) * D),
                (i = Math.sin(f - p) * -g),
                (s = Math.cos(f - p) * g),
                p &&
                  ((d *= Ln),
                  (o = Math.tan(p - d)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (s *= o),
                  d &&
                    ((o = Math.tan(d)),
                    (n *= o = Math.sqrt(1 + o * o)),
                    (r *= o))),
                (n = Dt(n)),
                (r = Dt(r)),
                (i = Dt(i)),
                (s = Dt(s)))
              : ((n = D), (s = g), (r = i = 0)),
            ((F && !~(h + "").indexOf("px")) ||
              (E && !~(c + "").indexOf("px"))) &&
              ((F = vr(_, "x", h, "px")), (E = vr(_, "y", c, "px"))),
            (m || v || y || x) &&
              ((F = Dt(F + m - (m * n + v * i) + y)),
              (E = Dt(E + v - (m * r + v * s) + x))),
            (u || l) &&
              ((o = _.getBBox()),
              (F = Dt(F + (u / 100) * o.width)),
              (E = Dt(E + (l / 100) * o.height))),
            (o =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              i +
              "," +
              s +
              "," +
              F +
              "," +
              E +
              ")"),
            _.setAttribute("transform", o),
            C && (_.style[tr] = o);
        },
        zr = function (t, e, n, r, i) {
          var s,
            o,
            a = 360,
            u = k(i),
            l = parseFloat(i) * (u && ~i.indexOf("rad") ? Nn : 1) - r,
            h = r + l + "deg";
          return (
            u &&
              ("short" === (s = i.split("_")[1]) &&
                (l %= a) != l % 180 &&
                (l += l < 0 ? a : -360),
              "cw" === s && l < 0
                ? (l = ((l + 36e9) % a) - ~~(l / a) * a)
                : "ccw" === s &&
                  l > 0 &&
                  (l = ((l - 36e9) % a) - ~~(l / a) * a)),
            (t._pt = o = new fn(t._pt, e, n, r, l, Wn)),
            (o.e = h),
            (o.u = "deg"),
            t._props.push(n),
            o
          );
        },
        Ir = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        Hr = function (t, e, n) {
          var r,
            i,
            s,
            o,
            a,
            u,
            l,
            h = Ir({}, n._gsap),
            c = n.style;
          for (i in (h.svg
            ? ((s = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (c[tr] = e),
              (r = Br(n, 1)),
              Dr(n, tr),
              n.setAttribute("transform", s))
            : ((s = getComputedStyle(n)[tr]),
              (c[tr] = e),
              (r = Br(n, 1)),
              (c[tr] = s)),
          Pn))
            (s = h[i]) !== (o = r[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((a = Kt(s) !== (l = Kt(o)) ? vr(n, i, s, l) : parseFloat(s)),
              (u = parseFloat(o)),
              (t._pt = new fn(t._pt, r, i, a, u - a, Hn)),
              (t._pt.u = l || 0),
              t._props.push(i));
          Ir(r, h);
        };
      dt("padding,margin,Width,Radius", function (t, e) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          s = "Left",
          o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(
            function (n) {
              return e < 2 ? t + n : "border" + n + t;
            }
          );
        Er[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
          var s, a;
          if (arguments.length < 4)
            return (
              (s = o.map(function (e) {
                return yr(t, e, n);
              })),
              5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
            );
          (s = (r + "").split(" ")),
            (a = {}),
            o.forEach(function (t, e) {
              return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, i);
        };
      });
      var Wr,
        Vr,
        Ur = {
          name: "css",
          register: hr,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, r, i) {
            var s,
              o,
              a,
              u,
              l,
              h,
              c,
              f,
              p,
              d,
              D,
              g,
              _,
              m,
              v,
              x,
              C,
              F,
              E,
              w,
              b = this._props,
              T = t.style,
              A = n.vars.startAt;
            for (c in (Mn || hr(),
            (this.styles = this.styles || sr(t)),
            (x = this.styles.props),
            (this.tween = n),
            e))
              if (
                "autoRound" !== c &&
                ((o = e[c]), !ot[c] || !Ue(c, e, n, r, t, i))
              )
                if (
                  ((l = typeof o),
                  (h = Er[c]),
                  "function" === l && (l = typeof (o = o.call(n, r, t, i))),
                  "string" === l && ~o.indexOf("random(") && (o = le(o)),
                  h)
                )
                  h(this, t, c, o, n) && (v = 1);
                else if ("--" === c.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                    (o += ""),
                    (Ce.lastIndex = 0),
                    Ce.test(s) || ((f = Kt(s)), (p = Kt(o))),
                    p ? f !== p && (s = vr(t, c, s, p) + p) : f && (o += f),
                    this.add(T, "setProperty", s, o, r, i, 0, 0, c),
                    b.push(c),
                    x.push(c, 0, T[c]);
                else if ("undefined" !== l) {
                  if (
                    (A && c in A
                      ? ((s =
                          "function" == typeof A[c]
                            ? A[c].call(n, r, t, i)
                            : A[c]),
                        k(s) && ~s.indexOf("random(") && (s = le(s)),
                        Kt(s + "") ||
                          "auto" === s ||
                          (s += y.units[c] || Kt(yr(t, c)) || ""),
                        "=" === (s + "").charAt(1) && (s = yr(t, c)))
                      : (s = yr(t, c)),
                    (u = parseFloat(s)),
                    (d =
                      "string" === l &&
                      "=" === o.charAt(1) &&
                      o.substr(0, 2)) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    c in In &&
                      ("autoAlpha" === c &&
                        (1 === u &&
                          "hidden" === yr(t, "visibility") &&
                          a &&
                          (u = 0),
                        x.push("visibility", 0, T.visibility),
                        gr(
                          this,
                          T,
                          "visibility",
                          u ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== c &&
                        "transform" !== c &&
                        ~(c = In[c]).indexOf(",") &&
                        (c = c.split(",")[0])),
                    (D = c in Pn))
                  )
                    if (
                      (this.styles.save(c),
                      g ||
                        (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                          Br(t, e.parseTransform),
                        (m = !1 !== e.smoothOrigin && _.smooth),
                        ((g = this._pt =
                          new fn(
                            this._pt,
                            T,
                            tr,
                            0,
                            1,
                            _.renderTransform,
                            _,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === c)
                    )
                      (this._pt = new fn(
                        this._pt,
                        _,
                        "scaleY",
                        _.scaleY,
                        (d ? _t(_.scaleY, d + a) : a) - _.scaleY || 0,
                        Hn
                      )),
                        (this._pt.u = 0),
                        b.push("scaleY", c),
                        (c += "X");
                    else {
                      if ("transformOrigin" === c) {
                        x.push(er, 0, T[er]),
                          (F = void 0),
                          (E = void 0),
                          (w = void 0),
                          (E = (F = (C = o).split(" "))[0]),
                          (w = F[1] || "50%"),
                          ("top" !== E &&
                            "bottom" !== E &&
                            "left" !== w &&
                            "right" !== w) ||
                            ((C = E), (E = w), (w = C)),
                          (F[0] = Cr[E] || E),
                          (F[1] = Cr[w] || w),
                          (o = F.join(" ")),
                          _.svg
                            ? kr(t, o, 0, m, 0, this)
                            : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                                _.zOrigin &&
                                gr(this, _, "zOrigin", _.zOrigin, p),
                              gr(this, T, c, Sr(s), Sr(o)));
                        continue;
                      }
                      if ("svgOrigin" === c) {
                        kr(t, o, 1, m, 0, this);
                        continue;
                      }
                      if (c in br) {
                        zr(this, _, c, u, d ? _t(u, d + o) : o);
                        continue;
                      }
                      if ("smoothOrigin" === c) {
                        gr(this, _, "smooth", _.smooth, o);
                        continue;
                      }
                      if ("force3D" === c) {
                        _[c] = o;
                        continue;
                      }
                      if ("transform" === c) {
                        Hr(this, o, t);
                        continue;
                      }
                    }
                  else c in T || (c = lr(c) || c);
                  if (
                    D ||
                    ((a || 0 === a) && (u || 0 === u) && !zn.test(o) && c in T)
                  )
                    a || (a = 0),
                      (f = (s + "").substr((u + "").length)) !==
                        (p = Kt(o) || (c in y.units ? y.units[c] : f)) &&
                        (u = vr(t, c, s, p)),
                      (this._pt = new fn(
                        this._pt,
                        D ? _ : T,
                        c,
                        u,
                        (d ? _t(u, d + a) : a) - u,
                        D ||
                        ("px" !== p && "zIndex" !== c) ||
                        !1 === e.autoRound
                          ? Hn
                          : Un
                      )),
                      (this._pt.u = p || 0),
                      f !== p &&
                        "%" !== p &&
                        ((this._pt.b = s), (this._pt.r = Vn));
                  else if (c in T) xr.call(this, t, c, s, d ? d + o : o);
                  else if (c in t)
                    this.add(t, c, s || t[c], d ? d + o : o, r, i);
                  else if ("parseTransform" !== c) {
                    Z(c, o);
                    continue;
                  }
                  D || (c in T ? x.push(c, 0, T[c]) : x.push(c, 1, s || t[c])),
                    b.push(c);
                }
            v && cn(this);
          },
          render: function (t, e) {
            if (e.tween._time || !Sn())
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
            else e.styles.revert();
          },
          get: yr,
          aliases: In,
          getSetter: function (t, e, n) {
            var r = In[e];
            return (
              r && r.indexOf(",") < 0 && (e = r),
              e in Pn && e !== er && (t._gsap.x || yr(t, "x"))
                ? n && Bn === n
                  ? "scale" === e
                    ? $n
                    : Zn
                  : (Bn = n || {}) && ("scale" === e ? Kn : Jn)
                : t.style && !O(t.style[e])
                ? Gn
                : ~e.indexOf("-")
                ? Qn
                : nn(t, e)
            );
          },
          core: { _removeProperty: Dr, _getMatrix: Mr },
        };
      (wn.utils.checkPrefix = lr),
        (wn.core.getStyleSaver = sr),
        (Vr = dt(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
            "," +
            (Wr = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            Pn[t] = 1;
          }
        )),
        dt(Wr, function (t) {
          (y.units[t] = "deg"), (br[t] = 1);
        }),
        (In[Vr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Wr),
        dt(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            In[e[1]] = Vr[e[0]];
          }
        ),
        dt(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            y.units[t] = "px";
          }
        ),
        wn.registerPlugin(Ur);
      var qr = wn.registerPlugin(Ur) || wn;
      qr.core.Tween;
    },
  },
]);
