(() => {
  "use strict";
  var e,
    r,
    n,
    t,
    o,
    i,
    a,
    s,
    c,
    u,
    p,
    d,
    l,
    f,
    v = {
      24: (e, r, n) => {
        n.d(r, { Z: () => s });
        var t = n(81),
          o = n.n(t),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          "img {\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  display: block;\r\n}\r\n\r\n.main {\r\n  margin-top: 5%;\r\n  margin-top: 5%;\r\n  max-height: 100%;\r\n  min-height: 10%;\r\n  height: 80vh;\r\n}\r\n\r\n.swiper-wrapper {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.swiper {\r\n  width: 90%;\r\n  height: 70%;\r\n  padding: 20px;\r\n  border: 1px solid #4137f4;\r\n  border-radius: 10px;\r\n}\r\n\r\n.swiper-slide {\r\n  text-align: center;\r\n  width: auto;\r\n}\r\n\r\n.swiper-button-prev:after,\r\n.swiper-button-next:after {\r\n  color: rgb(0, 0, 255);\r\n  font-size: 30px;\r\n}\r\n\r\n.btn {\r\n  display: block;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n  width: auto;\r\n  max-width: 50%;\r\n  min-width: 100px;\r\n}\r\n",
          "",
        ]);
        const s = a;
      },
      645: (e) => {
        e.exports = function (e) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var n = "",
                  t = void 0 !== r[5];
                return (
                  r[4] && (n += "@supports (".concat(r[4], ") {")),
                  r[2] && (n += "@media ".concat(r[2], " {")),
                  t &&
                    (n += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (n += e(r)),
                  t && (n += "}"),
                  r[2] && (n += "}"),
                  r[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (r.i = function (e, n, t, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (t)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var p = [].concat(e[u]);
                (t && a[p[0]]) ||
                  (void 0 !== i &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = i)),
                  n &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = n))
                      : (p[2] = n)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  r.push(p));
              }
            }),
            r
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var r = [];
        function n(e) {
          for (var n = -1, t = 0; t < r.length; t++)
            if (r[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function t(e, t) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var c = e[s],
              u = t.base ? c[0] + t.base : c[0],
              p = i[u] || 0,
              d = "".concat(u, " ").concat(p);
            i[u] = p + 1;
            var l = n(d),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== l) r[l].references++, r[l].updater(f);
            else {
              var v = o(f, t);
              (t.byIndex = s),
                r.splice(s, 0, { identifier: d, updater: v, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(e, r) {
          var n = r.domAPI(r);
          return (
            n.update(e),
            function (r) {
              if (r) {
                if (
                  r.css === e.css &&
                  r.media === e.media &&
                  r.sourceMap === e.sourceMap &&
                  r.supports === e.supports &&
                  r.layer === e.layer
                )
                  return;
                n.update((e = r));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = t((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              r[s].references--;
            }
            for (var c = t(e, o), u = 0; u < i.length; u++) {
              var p = n(i[u]);
              0 === r[p].references && (r[p].updater(), r.splice(p, 1));
            }
            i = c;
          };
        };
      },
      569: (e) => {
        var r = {};
        e.exports = function (e, n) {
          var t = (function (e) {
            if (void 0 === r[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              r[e] = n;
            }
            return r[e];
          })(e);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var r = document.createElement("style");
          return e.setAttributes(r, e.attributes), e.insert(r, e.options), r;
        };
      },
      565: (e, r, n) => {
        e.exports = function (e) {
          var r = n.nc;
          r && e.setAttribute("nonce", r);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var r = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, r, n) {
                var t = "";
                n.supports && (t += "@supports (".concat(n.supports, ") {")),
                  n.media && (t += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (t += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (t += n.css),
                  o && (t += "}"),
                  n.media && (t += "}"),
                  n.supports && (t += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  r.styleTagTransform(t, e, r.options);
              })(r, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(r);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, r) {
          if (r.styleSheet) r.styleSheet.cssText = e;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    h = {};
  function m(e) {
    var r = h[e];
    if (void 0 !== r) return r.exports;
    var n = (h[e] = { id: e, exports: {} });
    return v[e](n, n.exports, m), n.exports;
  }
  (m.n = (e) => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return m.d(r, { a: r }), r;
  }),
    (m.d = (e, r) => {
      for (var n in r)
        m.o(r, n) &&
          !m.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
    }),
    (m.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (m.nc = void 0),
    (e = m(379)),
    (r = m.n(e)),
    (n = m(795)),
    (t = m.n(n)),
    (o = m(569)),
    (i = m.n(o)),
    (a = m(565)),
    (s = m.n(a)),
    (c = m(216)),
    (u = m.n(c)),
    (p = m(589)),
    (d = m.n(p)),
    (l = m(24)),
    ((f = {}).styleTagTransform = d()),
    (f.setAttributes = s()),
    (f.insert = i().bind(null, "head")),
    (f.domAPI = t()),
    (f.insertStyleElement = u()),
    r()(l.Z, f),
    l.Z && l.Z.locals && l.Z.locals,
    new Swiper(".swiper", {
      direction: "horizontal",
      loop: !0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: { sensitivity: 0.5 },
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 30,
      freeMode: !0,
    });
})();
