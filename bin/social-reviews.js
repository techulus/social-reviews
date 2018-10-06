(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SocialReview = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  !function () {
    Function && Function.prototype && Function.prototype.bind && (/MSIE ([6789]|10)/.test(navigator.userAgent) || (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(), window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init || !function (t) {
      function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
      }

      var n = window.__twttrll;

      window.__twttrll = function (r, o) {
        for (var s, a, u = 0, c = []; u < r.length; u++) {
          a = r[u], i[a] && c.push.apply(c, i[a]), i[a] = 0;
        }

        for (s in o) {
          t[s] = o[s];
        }

        for (n && n(r, o); c.length;) {
          c.shift().call(null, null, e);
        }
      };

      var r = {},
          i = {
        0: 0
      };
      return e.e = function (t, e) {}, e.e = function (t, n) {
        if (0 === i[t]) return n.call(null, null, e);
        if (void 0 !== i[t]) i[t].push(n);else {
          i[t] = [n];
          var r = document.getElementsByTagName("head")[0],
              o = document.createElement("script");
          o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.onerror = function () {
            var e = i[t];

            for (o.onerror = null, delete i[t]; e.length;) {
              e.shift().call(null, new Error("failed to load chunk"));
            }
          }, o.src = e.p + "js/" + ({
            1: "dm_button",
            2: "button",
            3: "grid",
            4: "moment",
            5: "periscope_on_air",
            6: "timeline",
            7: "tweet"
          }[t] || t) + "." + {
            1: "5471e4348eb302e5ab7804f6c1480496",
            2: "3ebb4253c7cb2cc3c9eaac42044fc82c",
            3: "ae4d44985e9441507e99329a451a99dd",
            4: "d6c2f8baff89afef2d4706c5a2703b4b",
            5: "5176d933544066aabadd0cc57451a65b",
            6: "b56bf75db5a5bb7f756fa91bb789cb5e",
            7: "a5627824414a25c5ef023c861828cae0"
          }[t] + ".js", r.appendChild(o);
        }
      }, e.m = t, e.c = r, e.p = "https://platform.twitter.com/", e(0);
    }([function (t, e, n) {
      var r,
          i = n(1),
          o = n(9),
          s = n(14),
          a = n(16),
          u = n(18),
          c = n(19),
          d = n(31),
          l = n(33),
          f = n(244),
          h = n(254),
          p = n(255),
          m = n(237),
          v = "_e";
      n(256), m.emitter.trigger(m.START), u.set("widgets.init", !0), a.set("init", !0), p(), r = new i(), s.exposeReadyPromise(r.promise, a.base, v), a.set("widgets", f), a.set("widgets.load", l.load), a.set("events", d), h(function () {
        r.resolve(a.base), c.attachTo(o), l.loadPage();
      });
    }, function (t, e, n) {
      function r() {
        var t = this;
        this.promise = new i(function (e, n) {
          t.resolve = e, t.reject = n;
        });
      }

      var i = n(2);
      t.exports = r;
    }, function (t, e, n) {
      var r = n(3).Promise,
          i = n(7),
          o = n(8);
      t.exports = o.hasPromiseSupport() ? i.Promise : r;
    }, function (t, e, n) {
      var r;
      (function (t) {
        /*!
        * @overview es6-promise - a tiny implementation of Promises/A+.
        * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
        * @license   Licensed under MIT license
        *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
        * @version   2.3.0
        */
        (function () {

          function i(t) {
            return "function" == typeof t || "object" == _typeof(t) && null !== t;
          }

          function o(t) {
            return "function" == typeof t;
          }

          function s(t) {
            return "object" == _typeof(t) && null !== t;
          }

          function a(t) {
            V = t;
          }

          function u(t) {
            K = t;
          }

          function c() {
            var t = process.nextTick,
                e = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
            return Array.isArray(e) && "0" === e[1] && "10" === e[2] && (t = setImmediate), function () {
              t(p);
            };
          }

          function d() {
            return function () {
              W(p);
            };
          }

          function l() {
            var t = 0,
                e = new Z(p),
                n = document.createTextNode("");
            return e.observe(n, {
              characterData: !0
            }), function () {
              n.data = t = ++t % 2;
            };
          }

          function f() {
            var t = new MessageChannel();
            return t.port1.onmessage = p, function () {
              t.port2.postMessage(0);
            };
          }

          function h() {
            return function () {
              setTimeout(p, 1);
            };
          }

          function p() {
            for (var t = 0; t < Q; t += 2) {
              var e = et[t],
                  n = et[t + 1];
              e(n), et[t] = void 0, et[t + 1] = void 0;
            }

            Q = 0;
          }

          function m() {
            try {
              var t = n(5);
              return W = t.runOnLoop || t.runOnContext, d();
            } catch (t) {
              return h();
            }
          }

          function v() {}

          function g() {
            return new TypeError("You cannot resolve a promise with itself");
          }

          function w() {
            return new TypeError("A promises callback cannot return that same promise.");
          }

          function b(t) {
            try {
              return t.then;
            } catch (t) {
              return ot.error = t, ot;
            }
          }

          function y(t, e, n, r) {
            try {
              t.call(e, n, r);
            } catch (t) {
              return t;
            }
          }

          function _(t, e, n) {
            K(function (t) {
              var r = !1,
                  i = y(n, e, function (n) {
                r || (r = !0, e !== n ? A(t, n) : T(t, n));
              }, function (e) {
                r || (r = !0, S(t, e));
              }, "Settle: " + (t._label || " unknown promise"));
              !r && i && (r = !0, S(t, i));
            }, t);
          }

          function E(t, e) {
            e._state === rt ? T(t, e._result) : e._state === it ? S(t, e._result) : I(e, void 0, function (e) {
              A(t, e);
            }, function (e) {
              S(t, e);
            });
          }

          function x(t, e) {
            if (e.constructor === t.constructor) E(t, e);else {
              var n = b(e);
              n === ot ? S(t, ot.error) : void 0 === n ? T(t, e) : o(n) ? _(t, e, n) : T(t, e);
            }
          }

          function A(t, e) {
            t === e ? S(t, g()) : i(e) ? x(t, e) : T(t, e);
          }

          function C(t) {
            t._onerror && t._onerror(t._result), R(t);
          }

          function T(t, e) {
            t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && K(R, t));
          }

          function S(t, e) {
            t._state === nt && (t._state = it, t._result = e, K(C, t));
          }

          function I(t, e, n, r) {
            var i = t._subscribers,
                o = i.length;
            t._onerror = null, i[o] = e, i[o + rt] = n, i[o + it] = r, 0 === o && t._state && K(R, t);
          }

          function R(t) {
            var e = t._subscribers,
                n = t._state;

            if (0 !== e.length) {
              for (var r, i, o = t._result, s = 0; s < e.length; s += 3) {
                r = e[s], i = e[s + n], r ? N(n, r, i, o) : i(o);
              }

              t._subscribers.length = 0;
            }
          }

          function P() {
            this.error = null;
          }

          function j(t, e) {
            try {
              return t(e);
            } catch (t) {
              return st.error = t, st;
            }
          }

          function N(t, e, n, r) {
            var i,
                s,
                a,
                u,
                c = o(n);

            if (c) {
              if (i = j(n, r), i === st ? (u = !0, s = i.error, i = null) : a = !0, e === i) return void S(e, w());
            } else i = r, a = !0;

            e._state !== nt || (c && a ? A(e, i) : u ? S(e, s) : t === rt ? T(e, i) : t === it && S(e, i));
          }

          function k(t, e) {
            try {
              e(function (e) {
                A(t, e);
              }, function (e) {
                S(t, e);
              });
            } catch (e) {
              S(t, e);
            }
          }

          function L(t, e) {
            var n = this;
            n._instanceConstructor = t, n.promise = new t(v), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? T(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && T(n.promise, n._result))) : S(n.promise, n._validationError());
          }

          function O(t) {
            return new at(this, t).promise;
          }

          function D(t) {
            function e(t) {
              A(i, t);
            }

            function n(t) {
              S(i, t);
            }

            var r = this,
                i = new r(v);
            if (!$(t)) return S(i, new TypeError("You must pass an array to race.")), i;

            for (var o = t.length, s = 0; i._state === nt && s < o; s++) {
              I(r.resolve(t[s]), void 0, e, n);
            }

            return i;
          }

          function z(t) {
            var e = this;
            if (t && "object" == _typeof(t) && t.constructor === e) return t;
            var n = new e(v);
            return A(n, t), n;
          }

          function F(t) {
            var e = this,
                n = new e(v);
            return S(n, t), n;
          }

          function B() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }

          function M() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }

          function U(t) {
            this._id = ft++, this._state = void 0, this._result = void 0, this._subscribers = [], v !== t && (o(t) || B(), this instanceof U || M(), k(this, t));
          }

          function q() {
            var t;
            if ("undefined" != typeof global) t = global;else if ("undefined" != typeof self) t = self;else try {
              t = Function("return this")();
            } catch (t) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var e = t.Promise;
            e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = ht);
          }

          var H;
          H = Array.isArray ? Array.isArray : function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          };
          var W,
              V,
              G,
              $ = H,
              Q = 0,
              K = (function (t, e) {
            et[Q] = t, et[Q + 1] = e, Q += 2, 2 === Q && (V ? V(p) : G());
          }),
              J = "undefined" != typeof window ? window : void 0,
              Y = J || {},
              Z = Y.MutationObserver || Y.WebKitMutationObserver,
              X = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
              tt = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
              et = new Array(1e3);
          G = X ? c() : Z ? l() : tt ? f() : void 0 === J ? m() : h();
          var nt = void 0,
              rt = 1,
              it = 2,
              ot = new P(),
              st = new P();
          L.prototype._validateInput = function (t) {
            return $(t);
          }, L.prototype._validationError = function () {
            return new Error("Array Methods must be provided an Array");
          }, L.prototype._init = function () {
            this._result = new Array(this.length);
          };
          var at = L;
          L.prototype._enumerate = function () {
            for (var t = this, e = t.length, n = t.promise, r = t._input, i = 0; n._state === nt && i < e; i++) {
              t._eachEntry(r[i], i);
            }
          }, L.prototype._eachEntry = function (t, e) {
            var n = this,
                r = n._instanceConstructor;
            s(t) ? t.constructor === r && t._state !== nt ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(r.resolve(t), e) : (n._remaining--, n._result[e] = t);
          }, L.prototype._settledAt = function (t, e, n) {
            var r = this,
                i = r.promise;
            i._state === nt && (r._remaining--, t === it ? S(i, n) : r._result[e] = n), 0 === r._remaining && T(i, r._result);
          }, L.prototype._willSettleAt = function (t, e) {
            var n = this;
            I(t, void 0, function (t) {
              n._settledAt(rt, e, t);
            }, function (t) {
              n._settledAt(it, e, t);
            });
          };
          var ut = O,
              ct = D,
              dt = z,
              lt = F,
              ft = 0,
              ht = U;
          U.all = ut, U.race = ct, U.resolve = dt, U.reject = lt, U._setScheduler = a, U._setAsap = u, U._asap = K, U.prototype = {
            constructor: U,
            then: function then(t, e) {
              var n = this,
                  r = n._state;
              if (r === rt && !t || r === it && !e) return this;
              var i = new this.constructor(v),
                  o = n._result;

              if (r) {
                var s = arguments[r - 1];
                K(function () {
                  N(r, i, s, o);
                });
              } else I(n, i, t, e);

              return i;
            },
            catch: function _catch(t) {
              return this.then(null, t);
            }
          };
          var pt = q,
              mt = {
            Promise: ht,
            polyfill: pt
          };
          n(6).amd ? (r = function () {
            return mt;
          }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))) : "undefined" != typeof t && t.exports && (t.exports = mt);
        }).call(this);
      }).call(e, n(4)(t));
    }, function (t, e) {
      t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t;
      };
    }, function (t, e) {}, function (t, e) {
      t.exports = function () {
        throw new Error("define cannot be used indirect");
      };
    }, function (t, e) {
      t.exports = window;
    }, function (t, e, n) {
      function r(t) {
        return t = t || b, t.devicePixelRatio ? t.devicePixelRatio >= 1.5 : !!t.matchMedia && t.matchMedia("only screen and (min-resolution: 144dpi)").matches;
      }

      function i(t) {
        return t = t || _, /(Trident|MSIE|Edge[\/ ]?\d)/.test(t);
      }

      function o(t) {
        return t = t || _, /MSIE 9/.test(t);
      }

      function s(t) {
        return t = t || _, /MSIE 10/.test(t);
      }

      function a(t) {
        return t = t || _, /(iPad|iPhone|iPod)/.test(t);
      }

      function u(t) {
        return t = t || _, /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t);
      }

      function c(t, e) {
        return t = t || b, e = e || _, t.postMessage && !(i(e) && t.opener);
      }

      function d(t, e, n) {
        return t = t || b, e = e || w, n = n || _, "ontouchstart" in t || /Opera Mini/.test(n) || e.msMaxTouchPoints > 0;
      }

      function l() {
        var t = v.body.style;
        return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition;
      }

      function f() {
        return !!b.IntersectionObserver;
      }

      function h() {
        return !!(b.Promise && b.Promise.resolve && b.Promise.reject && b.Promise.all && b.Promise.race && function () {
          var t;
          return new b.Promise(function (e) {
            t = e;
          }), y.isType("function", t);
        }());
      }

      function p() {
        return b.performance && b.performance.getEntriesByType;
      }

      function m() {
        try {
          return b.localStorage.setItem("local_storage_support_test", "true"), "undefined" != typeof b.localStorage;
        } catch (t) {
          return g.devError("window.localStorage is not supported:", t), !1;
        }
      }

      var v = n(9),
          g = n(10),
          w = n(13),
          b = n(7),
          y = n(12),
          _ = w.userAgent;
      t.exports = {
        retina: r,
        anyIE: i,
        ie9: o,
        ie10: s,
        ios: a,
        android: u,
        canPostMessage: c,
        touch: d,
        cssTransitions: l,
        hasPromiseSupport: h,
        hasIntersectionObserverSupport: f,
        hasPerformanceInformation: p,
        hasLocalStorageSupport: m
      };
    }, function (t, e) {
      t.exports = document;
    }, function (t, e, n) {
      function r() {}

      function i() {}

      function o(t, e) {}

      function s() {
        l("error", p.toRealArray(arguments));
      }

      function a() {
        l("info", p.toRealArray(arguments));
      }

      function u(t) {
        v && (m[t] = d());
      }

      function c(t) {
        var e;
        v && (m[t] ? (e = d(), i("_twitter", t, e - m[t])) : r("timeEnd() called before time() for id: ", t));
      }

      function d() {
        return h.performance && +h.performance.now() || +new Date();
      }

      function l(t, e) {
        if (h.console && h.console[t]) switch (e.length) {
          case 1:
            h.console[t](e[0]);
            break;

          case 2:
            h.console[t](e[0], e[1]);
            break;

          case 3:
            h.console[t](e[0], e[1], e[2]);
            break;

          case 4:
            h.console[t](e[0], e[1], e[2], e[3]);
            break;

          case 5:
            h.console[t](e[0], e[1], e[2], e[3], e[4]);
            break;

          default:
            0 !== e.length && h.console.warn && h.console.warn("too many params passed to logger." + t);
        }
      }

      var f = n(11),
          h = n(7),
          p = n(12),
          m = {},
          v = p.contains(f.href, "tw_debug=true");
      t.exports = {
        devError: r,
        devInfo: i,
        devObject: o,
        publicError: s,
        publicLog: a,
        time: u,
        timeEnd: c
      };
    }, function (t, e) {
      t.exports = location;
    }, function (t, e, n) {
      function r(t) {
        return l(arguments).slice(1).forEach(function (e) {
          o(e, function (e, n) {
            t[e] = n;
          });
        }), t;
      }

      function i(t) {
        return o(t, function (e, n) {
          u(n) && (i(n), c(n) && delete t[e]), void 0 !== n && null !== n && "" !== n || delete t[e];
        }), t;
      }

      function o(t, e) {
        var n;

        for (n in t) {
          t.hasOwnProperty && !t.hasOwnProperty(n) || e(n, t[n]);
        }

        return t;
      }

      function s(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }

      function a(t, e) {
        return t == s(e);
      }

      function u(t) {
        return t === Object(t);
      }

      function c(t) {
        var e;
        if (!u(t)) return !1;
        if (Object.keys) return !Object.keys(t).length;

        for (e in t) {
          if (t.hasOwnProperty(e)) return !1;
        }

        return !0;
      }

      function d(t, e) {
        h.setTimeout(function () {
          t.call(e || null);
        }, 0);
      }

      function l(t) {
        return t ? Array.prototype.slice.call(t) : [];
      }

      function f(t, e) {
        return !(!t || !t.indexOf) && t.indexOf(e) > -1;
      }

      var h = n(7);
      t.exports = {
        aug: r,
        async: d,
        compact: i,
        contains: f,
        forIn: o,
        isObject: u,
        isEmptyObject: c,
        toType: s,
        isType: a,
        toRealArray: l
      };
    }, function (t, e) {
      t.exports = navigator;
    }, function (t, e, n) {
      function r(t, e, n) {
        e.ready = i(t.then, t), n && Array.isArray(e[n]) && (e[n].forEach(i(t.then, t)), delete e[n]);
      }

      var i = n(15);
      t.exports = {
        exposeReadyPromise: r
      };
    }, function (t, e, n) {
      var r = n(12);

      t.exports = function (t, e) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function () {
          var i = r.toRealArray(arguments);
          return t.apply(e, n.concat(i));
        };
      };
    }, function (t, e, n) {
      var r = n(17);
      t.exports = new r("twttr");
    }, function (t, e, n) {
      function r(t) {
        return a.isType("string", t) ? t.split(".") : a.isType("array", t) ? t : [];
      }

      function i(t, e) {
        var n = r(e),
            i = n.slice(0, -1);
        return i.reduce(function (t, e, n) {
          if (t[e] = t[e] || {}, !a.isObject(t[e])) throw new Error(i.slice(0, n + 1).join(".") + " is already defined with a value.");
          return t[e];
        }, t);
      }

      function o(t, e) {
        e = e || s, e[t] = e[t] || {}, Object.defineProperty(this, "base", {
          value: e[t]
        }), Object.defineProperty(this, "name", {
          value: t
        });
      }

      var s = n(7),
          a = n(12);
      a.aug(o.prototype, {
        get: function get(t) {
          var e = r(t);
          return e.reduce(function (t, e) {
            if (a.isObject(t)) return t[e];
          }, this.base);
        },
        set: function set(t, e, n) {
          var o = r(t),
              s = i(this.base, t),
              a = o.slice(-1);
          return n && a in s ? s[a] : s[a] = e;
        },
        init: function init(t, e) {
          return this.set(t, e, !0);
        },
        unset: function unset(t) {
          var e = r(t),
              n = this.get(e.slice(0, -1));
          n && delete n[e.slice(-1)];
        },
        aug: function aug(t) {
          var e = this.get(t),
              n = a.toRealArray(arguments).slice(1);
          if (e = "undefined" != typeof e ? e : {}, n.unshift(e), !n.every(a.isObject)) throw new Error("Cannot augment non-object.");
          return this.set(t, a.aug.apply(null, n));
        },
        call: function call(t) {
          var e = this.get(t),
              n = a.toRealArray(arguments).slice(1);
          if (!a.isType("function", e)) throw new Error("Function " + t + "does not exist.");
          return e.apply(null, n);
        },
        fullPath: function fullPath(t) {
          var e = r(t);
          return e.unshift(this.name), e.join(".");
        }
      }), t.exports = o;
    }, function (t, e, n) {
      var r = n(17);
      t.exports = new r("__twttr");
    }, function (t, e, n) {
      function r(t) {
        var e = s.href,
            n = "original_referer=" + e;
        return [t, n].join(t.indexOf("?") == -1 ? "?" : "&");
      }

      function i(t) {
        var e, n;
        t.altKey || t.metaKey || t.shiftKey || (e = u.closest(function (t) {
          return "A" === t.tagName || "AREA" === t.tagName;
        }, t.target), e && d.isIntentURL(e.href) && (n = r(e.href), n = n.replace(/^http[:]/, "https:"), n = n.replace(/^\/\//, "https://"), c.open(n, e), a.preventDefault(t)));
      }

      function o(t) {
        t.addEventListener("click", i, !1);
      }

      var s = n(11),
          a = n(20),
          u = n(22),
          c = n(24),
          d = n(25);
      t.exports = {
        attachTo: o
      };
    }, function (t, e, n) {
      function r(t) {
        var e = t.getAttribute("data-twitter-event-id");
        return e ? e : (t.setAttribute("data-twitter-event-id", ++g), g);
      }

      function i(t, e, n) {
        var r = 0,
            i = t && t.length || 0;

        for (r = 0; r < i; r++) {
          if (t[r].call(e, n, e), n.ceaseImmediately) return !1;
        }
      }

      function o(t, e, n) {
        for (var r = n || t.target || t.srcElement, s = m.list(r).map(function (t) {
          return "." + t;
        }), a = s.concat(r.tagName), u = 0, c = a.length; u < c; u++) {
          if (i(e[a[u]], r, t) === !1) return;
        }

        t.cease || r !== this && o.call(this, t, e, r.parentElement || r.parentNode);
      }

      function s(t, e, n, r) {
        function i(r) {
          o.call(t, r, n[e]);
        }

        a(t, i, e, r), t.addEventListener(e, i, !1);
      }

      function a(t, e, n, r) {
        t.id && (w[t.id] = w[t.id] || [], w[t.id].push({
          el: t,
          listener: e,
          type: n,
          rootId: r
        }));
      }

      function u(t) {
        var e = w[t];
        e && (e.forEach(function (t) {
          t.el.removeEventListener(t.type, t.listener, !1), delete v[t.rootId];
        }), delete w[t]);
      }

      function c(t, e, n, i) {
        var o = r(t);
        v[o] = v[o] || {}, v[o][e] || (v[o][e] = {}, s(t, e, v[o], o)), v[o][e][n] = v[o][e][n] || [], v[o][e][n].push(i);
      }

      function d(t, e, n) {
        var i = r(e),
            s = v[i] && v[i];
        o.call(e, {
          target: n
        }, s[t]);
      }

      function l(t) {
        return h(t), f(t), !1;
      }

      function f(t) {
        t && t.preventDefault ? t.preventDefault() : t.returnValue = !1;
      }

      function h(t) {
        t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
      }

      function p(t) {
        t && (t.ceaseImmediately = !0, h(t), t.stopImmediatePropagation());
      }

      var m = n(21),
          v = {},
          g = -1,
          w = {};
      t.exports = {
        stop: l,
        stopPropagation: h,
        stopImmediatePropagation: p,
        preventDefault: f,
        delegate: c,
        simulate: d,
        removeDelegatesForWidget: u
      };
    }, function (t, e, n) {
      function r(t) {
        return new RegExp("\\b" + t + "\\b", "g");
      }

      function i(t, e) {
        return t.classList ? void t.classList.add(e) : void (r(e).test(t.className) || (t.className += " " + e));
      }

      function o(t, e) {
        return t.classList ? void t.classList.remove(e) : void (t.className = t.className.replace(r(e), " "));
      }

      function s(t, e, n) {
        return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle(e, n) : (n ? i(t, e) : o(t, e), n);
      }

      function a(t, e, n) {
        return t.classList && u(t, e) ? (o(t, e), void i(t, n)) : void (t.className = t.className.replace(r(e), n));
      }

      function u(t, e) {
        return t.classList ? t.classList.contains(e) : d.contains(c(t), e);
      }

      function c(t) {
        return d.toRealArray(t.classList ? t.classList : t.className.match(l));
      }

      var d = n(12),
          l = /\b([\w-_]+)\b/g;
      t.exports = {
        add: i,
        remove: o,
        replace: a,
        toggle: s,
        present: u,
        list: c
      };
    }, function (t, e, n) {
      function r(t) {
        return function (e) {
          return !!e.tagName && s(e, t);
        };
      }

      function i(t, e, n) {
        var s;
        if (e) return n = n || e && e.ownerDocument, s = o.isType("function", t) ? t : r(t), e === n ? s(e) ? e : void 0 : s(e) ? e : i(s, e.parentNode, n);
      }

      var o = n(12),
          s = n(23);
      t.exports = {
        closest: i
      };
    }, function (t, e, n) {
      function r(t, e) {
        if (s) return s.call(t, e);
      }

      var i = n(7),
          o = i.HTMLElement,
          s = o.prototype.matches || o.prototype.matchesSelector || o.prototype.webkitMatchesSelector || o.prototype.mozMatchesSelector || o.prototype.msMatchesSelector || o.prototype.oMatchesSelector;
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        u.open(t, {}, e);
      }

      function i(t, e) {
        var n = d.decodeURL(e);

        switch (t) {
          case "favorite":
          case "like":
            return {
              tweet_id: n.tweet_id
            };

          case "follow":
            return {
              screen_name: n.screen_name,
              user_id: n.user_id
            };

          case "retweet":
            return {
              source_tweet_id: n.tweet_id
            };

          default:
            return {};
        }
      }

      function o(t, e, n) {
        var o = (a.intentType(t) || "").toLowerCase();
        a.isTwitterURL(t) && (r(t, n), e && c.trigger("click", {
          target: e,
          region: "intent",
          type: "click",
          data: {}
        }), e && l[o] && l[o].forEach(function (n) {
          c.trigger(n, {
            target: e,
            region: "intent",
            type: n,
            data: i(o, t)
          });
        }));
      }

      function s(t) {
        this.srcEl = [], this.element = t;
      }

      var a = n(25),
          u = n(28),
          c = n(31),
          d = n(26),
          l = {
        favorite: ["favorite", "like"],
        follow: ["follow"],
        like: ["favorite", "like"],
        retweet: ["retweet"],
        tweet: ["tweet"]
      };
      s.open = o, t.exports = s;
    }, function (t, e, n) {
      function r(t) {
        return "string" == typeof t && A.test(t) && RegExp.$1.length <= 20;
      }

      function i(t) {
        if (r(t)) return RegExp.$1;
      }

      function o(t, e) {
        var n = x.decodeURL(t);
        if (e = e || !1, n.screen_name = i(t), n.screen_name) return x.url("https://twitter.com/intent/" + (e ? "follow" : "user"), n);
      }

      function s(t) {
        return o(t, !0);
      }

      function a(t) {
        return "string" == typeof t && I.test(t);
      }

      function u(t, e) {
        if (e = void 0 === e || e, a(t)) return (e ? "#" : "") + RegExp.$1;
      }

      function c(t) {
        return "string" == typeof t && C.test(t);
      }

      function d(t) {
        return c(t) && RegExp.$1;
      }

      function l(t) {
        return T.test(t);
      }

      function f(t) {
        return S.test(t);
      }

      function h(t) {
        return R.test(t);
      }

      function p(t) {
        return O.test(t);
      }

      function m(t) {
        return D.test(t);
      }

      function v(t) {
        return j.test(t) && RegExp.$1;
      }

      function g(t) {
        return P.test(t) && RegExp.$1;
      }

      function w(t) {
        return R.test(t) && RegExp.$1;
      }

      function b(t) {
        return N.test(t) && RegExp.$1;
      }

      function y(t) {
        return !!k.test(t) && {
          ownerScreenName: RegExp.$1,
          slug: RegExp.$2
        };
      }

      function _(t) {
        return L.test(t) && RegExp.$1;
      }

      function E(t) {
        return z.test(t);
      }

      var x = n(26),
          A = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
          C = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
          T = /^http(s?):\/\/(\w+\.)*twitter\.com([:\/]|$)/i,
          S = /^http(s?):\/\/pbs\.twimg\.com\//,
          I = /^#?([^.,<>!\s\/#\-()'"]+)$/,
          R = /twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,
          P = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
          j = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,
          N = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,
          k = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-]+)/i,
          L = /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i,
          O = /^https?:\/\/syndication\.twitter\.com\/settings/i,
          D = /^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i,
          z = /^https?:\/\/(?:www\.)?twitter\.com\/search\?q=(\w+)/i;
      t.exports = {
        isHashTag: a,
        hashTag: u,
        isScreenName: r,
        screenName: i,
        isStatus: c,
        status: d,
        intentForProfileURL: o,
        intentForFollowURL: s,
        isTwitterURL: l,
        isTwimgURL: f,
        isIntentURL: h,
        isSettingsURL: p,
        isWidgetIframeURL: m,
        isSearchUrl: E,
        regexen: {
          profile: A
        },
        momentId: v,
        collectionId: g,
        intentType: w,
        likesScreenName: b,
        listScreenNameAndSlug: y,
        eventId: _
      };
    }, function (t, e, n) {
      function r(t) {
        return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27");
      }

      function i(t) {
        return decodeURIComponent(t);
      }

      function o(t) {
        var e = [];
        return d.forIn(t, function (t, n) {
          var i = r(t);
          d.isType("array", n) || (n = [n]), n.forEach(function (t) {
            c.hasValue(t) && e.push(i + "=" + r(t));
          });
        }), e.sort().join("&");
      }

      function s(t) {
        var e,
            n = {};
        return t ? (e = t.split("&"), e.forEach(function (t) {
          var e = t.split("="),
              r = i(e[0]),
              o = i(e[1]);
          if (2 == e.length) return d.isType("array", n[r]) ? void n[r].push(o) : r in n ? (n[r] = [n[r]], void n[r].push(o)) : void (n[r] = o);
        }), n) : {};
      }

      function a(t, e) {
        var n = o(e);
        return n.length > 0 ? d.contains(t, "?") ? t + "&" + o(e) : t + "?" + o(e) : t;
      }

      function u(t) {
        var e = t && t.split("?");
        return 2 == e.length ? s(e[1]) : {};
      }

      var c = n(27),
          d = n(12);
      t.exports = {
        url: a,
        decodeURL: u,
        decode: s,
        encode: o,
        encodePart: r,
        decodePart: i
      };
    }, function (t, e, n) {
      function r(t) {
        return void 0 !== t && null !== t && "" !== t;
      }

      function i(t) {
        return a(t) && t % 1 === 0;
      }

      function o(t) {
        return "string" === m.toType(t);
      }

      function s(t) {
        return a(t) && !i(t);
      }

      function a(t) {
        return r(t) && !isNaN(t);
      }

      function u(t) {
        return r(t) && "array" == m.toType(t);
      }

      function c(t) {
        return m.contains(g, t);
      }

      function d(t) {
        return m.contains(v, t);
      }

      function l(t) {
        return !!r(t) && (!!d(t) || !c(t) && !!t);
      }

      function f(t) {
        if (a(t)) return t;
      }

      function h(t) {
        if (s(t)) return t;
      }

      function p(t) {
        if (i(t)) return parseInt(t, 10);
      }

      var m = n(12),
          v = [!0, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"],
          g = [!1, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];
      t.exports = {
        hasValue: r,
        isInt: i,
        isFloat: s,
        isNumber: a,
        isString: o,
        isArray: u,
        isTruthValue: d,
        isFalseValue: c,
        asInt: p,
        asFloat: h,
        asNumber: f,
        asBoolean: l
      };
    }, function (t, e, n) {
      function r(t) {
        var e = [];
        return m.forIn(t, function (t, n) {
          e.push(t + "=" + n);
        }), e.join(",");
      }

      function i() {
        return v + p.generate();
      }

      function o(t, e) {
        function n(t) {
          return Math.round(t / 2);
        }

        return t > e ? {
          coordinate: 0,
          size: e
        } : {
          coordinate: n(e) - n(t),
          size: t
        };
      }

      function s(t, e, n) {
        var i, s;
        e = a.parse(e), n = n || {}, i = o(e.width, n.width || g), e.left = i.coordinate, e.width = i.size, s = o(e.height, n.height || w), e.top = s.coordinate, e.height = s.size, this.win = t, this.features = r(e);
      }

      var a,
          u = n(7),
          c = n(29),
          d = n(20),
          l = n(22),
          f = n(8),
          h = n(25),
          p = n(30),
          m = n(12),
          v = "intent_",
          g = u.screen.width,
          w = u.screen.height;
      a = new c().defaults({
        width: 550,
        height: 520,
        personalbar: "0",
        toolbar: "0",
        location: "1",
        scrollbars: "1",
        resizable: "1"
      }), s.prototype.open = function (t, e) {
        var n = e && "click" == e.type && l.closest("a", e.target),
            r = e && (e.altKey || e.metaKey || e.shiftKey),
            o = n && (f.ios() || f.android());
        if (h.isTwitterURL(t)) return r || o ? this : (this.name = i(), this.popup = this.win.open(t, this.name, this.features), e && d.preventDefault(e), this);
      }, s.open = function (t, e, n) {
        var r = new s(u, e);
        return r.open(t, n);
      }, t.exports = s;
    }, function (t, e, n) {
      function r(t) {
        return function (e) {
          return o.hasValue(e[t]);
        };
      }

      function i() {
        this.assertions = [], this._defaults = {};
      }

      var o = n(27),
          s = n(12);
      i.prototype.assert = function (t, e) {
        return this.assertions.push({
          fn: t,
          msg: e || "assertion failed"
        }), this;
      }, i.prototype.defaults = function (t) {
        return this._defaults = t || this._defaults, this;
      }, i.prototype.require = function (t) {
        var e = this;
        return t = Array.isArray(t) ? t : s.toRealArray(arguments), t.forEach(function (t) {
          e.assert(r(t), "required: " + t);
        }), this;
      }, i.prototype.parse = function (t) {
        var e, n;
        if (e = s.aug({}, this._defaults, t || {}), n = this.assertions.reduce(function (t, n) {
          return n.fn(e) || t.push(n.msg), t;
        }, []), n.length > 0) throw new Error(n.join("\n"));
        return e;
      }, t.exports = i;
    }, function (t, e) {
      function n() {
        return i + String(+new Date()) + Math.floor(1e5 * Math.random()) + o++;
      }

      function r() {
        return i + String(s++);
      }

      var i = "i",
          o = 0,
          s = 0;
      t.exports = {
        generate: n,
        deterministic: r
      };
    }, function (t, e, n) {
      function r() {
        return i.get("events") || {};
      }

      var i = n(16),
          o = n(32),
          s = n(12);
      t.exports = s.aug(r(), o.Emitter);
    }, function (t, e, n) {
      function r() {
        return i.aug(function () {}, s);
      }

      var i = n(12),
          o = n(15),
          s = {
        bind: function bind(t, e) {
          return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e);
        },
        unbind: function unbind(t, e) {
          var n;
          this._handlers && this._handlers[t] && (e ? (n = this._handlers[t].indexOf(e), n >= 0 && this._handlers[t].splice(n, 1)) : this._handlers[t] = []);
        },
        trigger: function trigger(t, e) {
          var n = this._handlers && this._handlers[t];
          e = e || {}, e.type = t, n && n.forEach(function (t) {
            i.async(o(t, this, e));
          });
        }
      };
      t.exports = {
        Emitter: s,
        makeEmitter: r
      };
    }, function (t, e, n) {
      function r(t) {
        return t.reduce(function (t, e) {
          return t.concat(w.reduce(function (t, n) {
            return t.concat(n(e));
          }, []));
        }, []);
      }

      function i() {
        var t = l.val("widgets:autoload") || !0;
        return !m.isFalseValue(t) && (m.isTruthValue(t) ? a.body : a.querySelectorAll(t));
      }

      function o(t) {
        var e;
        return t = t || a.body, t = t.length ? v.toRealArray(t) : [t], h.pause(), e = c.allResolved(r(t).map(function (t) {
          return d.addWidget(t);
        })).then(function (t) {
          p.trigger("loaded", {
            widgets: t
          }), b.emitter.trigger(b.ALL_WIDGETS_RENDERED, {
            widgets: t
          });
        }), c.always(e, function () {
          h.resume();
        }), e;
      }

      function s() {
        var t = i();
        return g.load(), t === !1 ? u.resolve() : (f.set("widgets.loaded", !0), o(t));
      }

      var a = n(9),
          u = n(2),
          c = n(34),
          d = n(35),
          l = n(42),
          f = n(18),
          h = n(43),
          p = n(31),
          m = n(27),
          v = n(12),
          g = n(75),
          w = n(83),
          b = n(237);
      t.exports = {
        load: o,
        loadPage: s,
        _getPageLoadTarget: i
      };
    }, function (t, e, n) {
      function r(t, e) {
        return t.then(e, e);
      }

      function i(t) {
        var e;
        return t = t || [], e = t.length, t = t.filter(a), e ? e !== t.length ? c.reject("non-Promise passed to .some") : new c(function (e, n) {
          function r() {
            i += 1, i === t.length && n();
          }

          var i = 0;
          t.forEach(function (t) {
            t.then(e, r);
          });
        }) : c.reject("no promises passed to .some");
      }

      function o(t) {
        var e;
        return void 0 === t ? c.reject(new Error("undefined is not an object")) : Array.isArray(t) ? (e = t.length, e ? new c(function (n, r) {
          function i() {
            s += 1, s === e && (0 === u.length ? r() : n(u));
          }

          function o(t) {
            u.push(t), i();
          }

          var s = 0,
              u = [];
          t.forEach(function (t) {
            a(t) ? t.then(o, i) : o(t);
          });
        }) : c.resolve([])) : c.reject(new Error("Type error"));
      }

      function s(t) {
        function e() {}

        return c.all((t || []).map(function (t) {
          return r(t, e);
        }));
      }

      function a(t) {
        return t instanceof c;
      }

      function u(t, e) {
        var n = new d();
        return setTimeout(function () {
          n.reject(new Error("Promise timed out"));
        }, e), t.then(function (t) {
          n.resolve(t);
        }, function (t) {
          n.reject(t);
        }), n.promise;
      }

      var c = n(2),
          d = n(1);
      t.exports = {
        always: r,
        allResolved: o,
        some: i,
        isPromise: a,
        allSettled: s,
        timeout: u
      };
    }, function (t, e, n) {
      function r(t) {
        return t.reduce(function (t, e) {
          return t[e.className] = t[e.className] || [], t[e.className].push(e), t;
        }, {});
      }

      function i(t) {
        var e = t.map(s.fromRawTask),
            n = r(e);
        l.forIn(n, function (t, e) {
          c.allSettled(e.map(function (t) {
            return t.initialize();
          })).then(function () {
            e.forEach(function (t) {
              u.all([t.hydrate(), t.insertIntoDom()]).then(d(t.render, t)).then(d(t.success, t), d(t.fail, t));
            });
          });
        });
      }

      function o(t) {
        return f.add(t);
      }

      var s = n(36),
          a = n(40),
          u = n(2),
          c = n(34),
          d = n(15),
          l = n(12),
          f = new a(i);
      t.exports = {
        addWidget: o
      };
    }, function (t, e, n) {
      function r(t) {
        var e = t.srcEl || t.targetEl;
        return e.ownerDocument.defaultView;
      }

      function i(t, e) {
        this._widget = null, this._sandbox = null, this._hydrated = !1, this._insertedIntoDom = !1, this._Sandbox = t.Sandbox, this._factory = t.factory, this._widgetParams = t.parameters, this._resolve = e, this._className = t.className, this._renderedClassName = t.className + "-rendered", this._errorClassName = t.className + "-error", this._srcEl = t.srcEl, this._targetGlobal = r(t), this._insertionStrategy = function (e) {
          var n = t.srcEl,
              r = t.targetEl;
          n ? r.insertBefore(e, n) : r.appendChild(e);
        };
      }

      var o = n(21),
          s = n(37),
          a = n(31),
          u = n(39),
          c = n(2),
          d = n(34);
      i.fromRawTask = function (t) {
        return new i(t.input, t.taskDoneDeferred.resolve);
      }, i.prototype.initialize = function () {
        var t = this,
            e = new this._Sandbox(this._targetGlobal);
        return this._factory(this._widgetParams, e).then(function (n) {
          return t._widget = n, t._sandbox = e, n;
        });
      }, i.prototype.insertIntoDom = function () {
        var t = this;
        return this._widget ? this._sandbox.insert(this._widget.id, {
          class: [this._className, this._renderedClassName].join(" ")
        }, null, this._insertionStrategy).then(function () {
          t._insertedIntoDom = !0;
        }) : c.reject(new Error("cannot insert widget into DOM before it is initialized"));
      }, i.prototype.hydrate = function () {
        var t = this;
        return this._widget ? this._widget.hydrate().then(function () {
          t._hydrated = !0;
        }) : c.reject(new Error("cannot hydrate widget before it is initialized"));
      }, i.prototype.render = function () {
        function t() {
          r._sandbox.onResize(function () {
            return r._widget.resize().then(function () {
              a.trigger("resize", {
                target: r._sandbox.sandboxEl
              });
            });
          });
        }

        function e() {
          return u(r._srcEl).then(function () {
            return r._sandbox.sandboxEl;
          });
        }

        function n(t) {
          return u(r._sandbox.sandboxEl).then(function () {
            return c.reject(t);
          });
        }

        var r = this;
        return this._hydrated ? this._insertedIntoDom ? r._widget.render(r._sandbox).then(function () {
          return t(), r._widget.show();
        }).then(e, n) : n(new Error("cannot render widget before DOM insertion")) : n(new Error("cannot render widget before hydration"));
      }, i.prototype.fail = function () {
        var t = this;
        return this._srcEl ? d.always(s.write(function () {
          o.add(t._srcEl, t._errorClassName);
        }), function () {
          a.trigger("rendered", {
            target: t._srcEl
          }), t._resolve(t._srcEl);
        }) : (t._resolve(), c.resolve());
      }, i.prototype.success = function () {
        a.trigger("rendered", {
          target: this._sandbox.sandboxEl
        }), this._resolve(this._sandbox.sandboxEl);
      }, t.exports = i;
    }, function (t, e, n) {
      function r(t, e) {
        return function () {
          try {
            e.resolve(t.call(this));
          } catch (t) {
            e.reject(t);
          }
        };
      }

      function i(t, e) {
        t.call(e);
      }

      function o(t, e) {
        var n = new c();
        return u.read(r(t, n), e), n.promise;
      }

      function s(t, e) {
        var n = new c();
        return u.write(r(t, n), e), n.promise;
      }

      function a(t, e, n) {
        var i = new c();
        return d.isType("function", t) && (n = e, e = t, t = 1), u.defer(t, r(e, i), n), i.promise;
      }

      var u = n(38),
          c = n(1),
          d = n(12);
      t.exports = {
        sync: i,
        read: o,
        write: s,
        defer: a
      };
    }, function (t, e, n) {
      var r;
      !function () {

        function i() {
          this.frames = [], this.lastId = 0, this.raf = o, this.batch = {
            hash: {},
            read: [],
            write: [],
            mode: null
          };
        }

        var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        };

        i.prototype.read = function (t, e) {
          var n = this.add("read", t, e),
              r = n.id;
          this.batch.read.push(n.id);
          var i = "reading" === this.batch.mode || this.batch.scheduled;
          return i ? r : (this.scheduleBatch(), r);
        }, i.prototype.write = function (t, e) {
          var n = this.add("write", t, e),
              r = this.batch.mode,
              i = n.id;
          this.batch.write.push(n.id);
          var o = "writing" === r || "reading" === r || this.batch.scheduled;
          return o ? i : (this.scheduleBatch(), i);
        }, i.prototype.defer = function (t, e, n) {
          "function" == typeof t && (n = e, e = t, t = 1);
          var r = this,
              i = t - 1;
          return this.schedule(i, function () {
            r.run({
              fn: e,
              ctx: n
            });
          });
        }, i.prototype.clear = function (t) {
          if ("function" == typeof t) return this.clearFrame(t);
          t = Number(t);
          var e = this.batch.hash[t];

          if (e) {
            var n = this.batch[e.type],
                r = n.indexOf(t);
            delete this.batch.hash[t], ~r && n.splice(r, 1);
          }
        }, i.prototype.clearFrame = function (t) {
          var e = this.frames.indexOf(t);
          ~e && this.frames.splice(e, 1);
        }, i.prototype.scheduleBatch = function () {
          var t = this;
          this.schedule(0, function () {
            t.batch.scheduled = !1, t.runBatch();
          }), this.batch.scheduled = !0;
        }, i.prototype.uniqueId = function () {
          return ++this.lastId;
        }, i.prototype.flush = function (t) {
          for (var e; e = t.shift();) {
            this.run(this.batch.hash[e]);
          }
        }, i.prototype.runBatch = function () {
          try {
            this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null;
          } catch (t) {
            throw this.runBatch(), t;
          }
        }, i.prototype.add = function (t, e, n) {
          var r = this.uniqueId();
          return this.batch.hash[r] = {
            id: r,
            fn: e,
            ctx: n,
            type: t
          };
        }, i.prototype.run = function (t) {
          var e = t.ctx || this,
              n = t.fn;
          if (delete this.batch.hash[t.id], !this.onError) return n.call(e);

          try {
            n.call(e);
          } catch (t) {
            this.onError(t);
          }
        }, i.prototype.loop = function () {
          function t() {
            var e = n.frames.shift();
            n.frames.length ? r(t) : n.looping = !1, e && e();
          }

          var e,
              n = this,
              r = this.raf,
              i = !1,
              o = 500;
          this.looping || (e = setTimeout(function () {
            i = !0, t();
          }, o), r(function () {
            i || (clearTimeout(e), t());
          }), this.looping = !0);
        }, i.prototype.schedule = function (t, e) {
          return this.frames[t] ? this.schedule(t + 1, e) : (this.loop(), this.frames[t] = e);
        };
        var s = new i();
        "undefined" != typeof t && t.exports ? t.exports = s : (r = function () {
          return s;
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)));
      }();
    }, function (t, e, n) {
      function r(t) {
        return i.write(function () {
          t && t.parentNode && t.parentNode.removeChild(t);
        });
      }

      var i = n(37);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        this._inputsQueue = [], this._task = t, this._hasFlushBeenScheduled = !1;
      }

      var i = n(1),
          o = n(41),
          s = n(15);
      r.prototype.add = function (t) {
        var e = new i();
        return this._inputsQueue.push({
          input: t,
          taskDoneDeferred: e
        }), this._hasFlushBeenScheduled || (this._hasFlushBeenScheduled = !0, o(s(this._flush, this))), e.promise;
      }, r.prototype._flush = function () {
        try {
          this._task.call(null, this._inputsQueue);
        } catch (t) {
          this._inputsQueue.forEach(function (e) {
            e.taskDoneDeferred.reject(t);
          });
        }

        this._inputsQueue = [], this._hasFlushBeenScheduled = !1;
      }, t.exports = r;
    }, function (t, e, n) {
      var r = n(3).Promise;
      t.exports = r._asap;
    }, function (t, e, n) {
      function r(t) {
        var e,
            n,
            r,
            i = 0;

        for (o = {}, t = t || s, e = t.getElementsByTagName("meta"); e[i]; i++) {
          if (n = e[i], /^twitter:/.test(n.getAttribute("name"))) r = n.getAttribute("name").replace(/^twitter:/, "");else {
            if (!/^twitter:/.test(n.getAttribute("property"))) continue;
            r = n.getAttribute("property").replace(/^twitter:/, "");
          }
          o[r] = n.getAttribute("content") || n.getAttribute("value");
        }
      }

      function i(t) {
        return o[t];
      }

      var o,
          s = n(9);
      r(), t.exports = {
        init: r,
        val: i
      };
    }, function (t, e, n) {
      function r(t) {
        return 1 === t.length && f.canFlushOneItem(t[0]);
      }

      function i(t) {
        t.forEach(function (t) {
          var e = t.input.namespace,
              n = t.input.data,
              r = t.input.offsite,
              i = t.input.version;
          f.clientEvent(e, n, r, i), t.taskDoneDeferred.resolve();
        });
      }

      function o(t) {
        function e() {
          t.forEach(function (t) {
            t.taskDoneDeferred.resolve();
          });
        }

        function n() {
          t.forEach(function (t) {
            t.taskDoneDeferred.reject();
          });
        }

        l.init(), t.forEach(function (t) {
          var e = t.input.namespace,
              n = t.input.data,
              r = t.input.offsite,
              i = t.input.version;
          l.clientEvent(e, n, r, i);
        }), l.flush().then(e, n);
      }

      function s(t) {
        var e, n, s;

        if (0 !== t.length) {
          if (r(t)) return i(t);
          e = d(t, function (t) {
            return h.noticeSeen(t.input.namespace);
          }), n = e.true, s = e.false, n && n.length > 0 && (n = n.slice(0, 1), f.canFlushOneItem(n[0]) || (n[0].input.data.message = ""), i(n)), s && (r(s) ? i : o)(s);
        }
      }

      function a(t, e, n, r) {
        return m.add({
          namespace: t,
          data: e,
          offsite: n,
          version: r
        });
      }

      function u() {
        m.pause();
      }

      function c() {
        m.resume();
      }

      var d = n(44),
          l = n(45),
          f = n(73),
          h = n(52),
          p = n(74),
          m = new p(s);
      t.exports = {
        scribe: a,
        pause: u,
        resume: c
      };
    }, function (t, e) {
      function n(t, e) {
        return t.reduce(function (t, n) {
          var r = e(n);
          return t[r] = t[r] || [], t[r].push(n), t;
        }, {});
      }

      t.exports = n;
    }, function (t, e, n) {
      function r() {
        function t(t) {
          p.body.appendChild(t);
        }

        return P ? j.promise : (h = new x(m), h.insert("rufous-sandbox", null, {
          display: "none"
        }, t).then(function () {
          h.setTitle("Twitter analytics iframe"), l = c(), f = d(), j.resolve([l, f]);
        }), P = !0, j.promise);
      }

      function i(t, e) {
        var n, r, i;
        E.isObject(t) && E.isObject(e) && (y.log(t, e), i = _.flattenClientEventPayload(t, e), n = l.firstChild, n.value = +(+n.value || i.dnt || 0), r = h.createElement("input"), r.type = "hidden", r.name = "l", r.value = _.stringify(i), l.appendChild(r));
      }

      function o(t, e) {
        var n = !E.isObject(t),
            r = !!e && !E.isObject(e),
            i = n || r;
        return i;
      }

      function s(t, e, n, r) {
        o(t, e) || (C && C(arguments), j.promise.then(function () {
          i(_.formatClientEventNamespace(t), _.formatClientEventData(e, n, r));
        }));
      }

      function a() {
        return j.promise.then(function () {
          var t;
          return l.children.length <= 2 ? b.reject() : (t = b.all([h.doc.body.appendChild(l), h.doc.body.appendChild(f)]).then(function (t) {
            var e = t[0],
                n = t[1];
            return n.addEventListener("load", function () {
              u(e, n)();
            }), e.submit(), t;
          }), l = c(), f = d(), t);
        });
      }

      function u(t, e) {
        return function () {
          var n = t.parentNode;
          n && (n.removeChild(t), n.removeChild(e));
        };
      }

      function c() {
        var t = h.createElement("form"),
            e = h.createElement("input"),
            n = h.createElement("input");
        return R++, t.action = _.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = S + R, t.id = I + R, e.type = "hidden", e.name = "dnt", e.value = g.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = _.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(n), t;
      }

      function d() {
        var t = S + R;
        return v({
          id: t,
          name: t,
          width: 0,
          height: 0,
          border: 0
        }, {
          display: "none"
        }, h.doc);
      }

      var l,
          f,
          h,
          p = n(9),
          m = n(7),
          v = n(46),
          g = n(47),
          w = n(1),
          b = n(2),
          y = n(51),
          _ = n(52),
          E = n(12),
          x = n(55),
          A = n(18),
          C = A.get("scribeCallback"),
          T = Math.floor(1e3 * Math.random()) + "_",
          S = "rufous-frame-" + T + "-",
          I = "rufous-form-" + T + "-",
          R = 0,
          P = !1,
          j = new w();

      t.exports = {
        clientEvent: s,
        flush: a,
        init: r
      };
    }, function (t, e, n) {
      var r = n(9),
          i = n(12);

      t.exports = function (t, e, n) {
        var o;

        if (n = n || r, t = t || {}, e = e || {}, t.name) {
          try {
            o = n.createElement('<iframe name="' + t.name + '"></iframe>');
          } catch (e) {
            o = n.createElement("iframe"), o.name = t.name;
          }

          delete t.name;
        } else o = n.createElement("iframe");

        return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute("frameBorder", 0), o.setAttribute("allowTransparency", !0), i.forIn(t, function (t, e) {
          o.setAttribute(t, e);
        }), i.forIn(e, function (t, e) {
          o.style[t] = e;
        }), o;
      };
    }, function (t, e, n) {
      function r() {
        l = !0;
      }

      function i(t, e) {
        return !!l || !!c.asBoolean(d.val("dnt")) || !!u.isUrlSensitive(e || s.host) || !(!a.isFramed() || !u.isUrlSensitive(a.rootDocumentLocation())) || (t = f.test(t || o.referrer) && RegExp.$1, !(!t || !u.isUrlSensitive(t)));
      }

      var o = n(9),
          s = n(11),
          a = n(48),
          u = n(50),
          c = n(27),
          d = n(42),
          l = !1,
          f = /https?:\/\/([^\/]+).*/i;
      t.exports = {
        setOn: r,
        enabled: i
      };
    }, function (t, e, n) {
      function r(t) {
        return t && u.isType("string", t) && (c = t), c;
      }

      function i() {
        return d;
      }

      function o() {
        return c !== d;
      }

      var s = n(11),
          a = n(49),
          u = n(12),
          c = a.getCanonicalURL() || s.href,
          d = c;
      t.exports = {
        isFramed: o,
        rootDocumentLocation: r,
        currentDocumentLocation: i
      };
    }, function (t, e, n) {
      function r(t, e) {
        var n, r;
        return e = e || a, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && (r = e.pathname.split("/"), r.pop(), r.push(t), t = "/" + r.join("/")), [e.protocol, "//", n, t].join(""));
      }

      function i() {
        for (var t, e = s.getElementsByTagName("link"), n = 0; e[n]; n++) {
          if (t = e[n], "canonical" == t.rel) return r(t.href);
        }
      }

      function o() {
        for (var t, e, n, r = s.getElementsByTagName("a"), i = s.getElementsByTagName("link"), o = [r, i], a = 0, c = 0, d = /\bme\b/; t = o[a]; a++) {
          for (c = 0; e = t[c]; c++) {
            if (d.test(e.rel) && (n = u.screenName(e.href))) return n;
          }
        }
      }

      var s = n(9),
          a = n(11),
          u = n(25);
      t.exports = {
        absolutize: r,
        getCanonicalURL: i,
        getScreenNameFromPage: o
      };
    }, function (t, e, n) {
      function r(t) {
        return t in a ? a[t] : a[t] = s.test(t);
      }

      function i() {
        return r(o.host);
      }

      var o = n(11),
          s = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,
          a = {};
      t.exports = {
        isUrlSensitive: r,
        isHostPageSensitive: i
      };
    }, function (t, e, n) {
      function r(t, e) {}

      n(10);
      t.exports = {
        log: r
      };
    }, function (t, e, n) {
      function r(t, e) {
        var n;
        return e = e || {}, t && t.nodeType === Node.ELEMENT_NODE ? (n = t.getAttribute("data-scribe"), n && n.split(" ").forEach(function (t) {
          var n = t.trim().split(":"),
              r = n[0],
              i = n[1];
          r && i && !e[r] && (e[r] = i);
        }), r(t.parentNode, e)) : e;
      }

      function i(t) {
        return v.aug({
          client: "tfw"
        }, t || {});
      }

      function o(t, e, n) {
        var r = t && t.widget_origin || h.referrer;
        return t = s("tfw_client_event", t, r), t.client_version = _, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = r), t;
      }

      function s(t, e, n) {
        return e = e || {}, v.aug({}, e, {
          _category_: t,
          triggered_on: e.triggered_on || +new Date(),
          dnt: m.enabled(n)
        });
      }

      function a(t, e) {
        var n = {};
        return e = e || {}, e.association_namespace = i(t), n[C] = e, n;
      }

      function u(t, e) {
        return v.aug({}, e, {
          event_namespace: t
        });
      }

      function c(t) {
        return "notice" === t.element && "seen" === t.action;
      }

      function d(t) {
        var e,
            n = Array.prototype.toJSON;
        return delete Array.prototype.toJSON, e = p.stringify(t), n && (Array.prototype.toJSON = n), e;
      }

      function l(t) {
        var e = y.closest("[data-expanded-url]", t),
            n = e && e.getAttribute("data-expanded-url");
        return n && b.isTwitterURL(n) ? "twitter_url" : "url";
      }

      function f(t) {
        var e, n, r, i, o, s;
        return t.item_ids && t.item_ids.length > 1 ? (e = Math.floor(t.item_ids.length / 2), n = t.item_ids.slice(0, e), r = {}, i = t.item_ids.slice(e), o = {}, n.forEach(function (e) {
          r[e] = t.item_details[e];
        }), i.forEach(function (e) {
          o[e] = t.item_details[e];
        }), s = [v.aug({}, t, {
          item_ids: n,
          item_details: r
        }), v.aug({}, t, {
          item_ids: i,
          item_details: o
        })]) : [t];
      }

      var h = n(9),
          p = n(53),
          m = n(47),
          v = n(12),
          g = n(54),
          w = n(18),
          b = n(25),
          y = n(22),
          _ = g.version,
          E = w.get("clientEventEndpoint") || "https://syndication.twitter.com/i/jot",
          x = "https://syndication.twitter.com/i/jot/syndication",
          A = "https://platform.twitter.com/jot.html",
          C = 1;
      t.exports = {
        extractTermsFromDOM: r,
        clickEventElement: l,
        flattenClientEventPayload: u,
        formatGenericEventData: s,
        formatClientEventData: o,
        formatClientEventNamespace: i,
        formatTweetAssociation: a,
        noticeSeen: c,
        splitLogEntry: f,
        stringify: d,
        AUDIENCE_ENDPOINT: x,
        CLIENT_EVENT_ENDPOINT: E,
        RUFOUS_REDIRECT: A
      };
    }, function (t, e, n) {
      var r = n(7),
          i = r.JSON;
      t.exports = {
        stringify: i.stringify || i.encode,
        parse: i.parse || i.decode
      };
    }, function (t, e) {
      t.exports = {
        version: "063819d:1538375275800"
      };
    }, function (t, e, n) {
      var r = n(56),
          i = n(65);
      t.exports = r.build([i]);
    }, function (t, e, n) {
      var r = n(57),
          i = n(60),
          o = n(15);
      r = Object.create(r), r.build = o(r.build, null, i), t.exports = r;
    }, function (t, e, n) {
      function r() {
        return a.toRealArray(arguments);
      }

      function i(t, e, n) {
        var r = new t();
        return e = s(o(e || [])), e.forEach(function (t) {
          t.call(null, r);
        }), r.build(n);
      }

      var o = n(58),
          s = n(59),
          a = n(12);
      t.exports = {
        couple: r,
        build: i
      };
    }, function (t, e, n) {
      function r(t) {
        var e = [];
        return t.forEach(function (t) {
          var n = i.isType("array", t) ? r(t) : [t];
          e = e.concat(n);
        }), e;
      }

      var i = n(12);
      t.exports = r;
    }, function (t, e) {
      function n(t) {
        return t.filter(function (e, n) {
          return t.indexOf(e) === n;
        });
      }

      t.exports = n;
    }, function (t, e, n) {
      function r() {
        i.apply(this, arguments);
      }

      var i = n(61),
          o = n(12),
          s = n(64);
      r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
        factory: s
      }), t.exports = r;
    }, function (t, e, n) {
      function r(t, e, n) {
        var r = this[e];
        if (!r) throw new Error(e + " does not exist");
        this[e] = t(r, n);
      }

      function i() {
        this.Component = this.factory(), this._adviceArgs = [], this._lastArgs = [];
      }

      var o = n(62),
          s = n(12),
          a = n(63);
      s.aug(i.prototype, {
        factory: a,
        build: function build(t) {
          var e = this;
          this.Component;
          return s.aug(this.Component.prototype.boundParams, t), this._adviceArgs.concat(this._lastArgs).forEach(function (t) {
            r.apply(e.Component.prototype, t);
          }), delete this._lastArgs, delete this._adviceArgs, this.Component;
        },
        params: function params(t) {
          var e = this.Component.prototype.paramConfigs;
          t = t || {}, this.Component.prototype.paramConfigs = s.aug({}, t, e);
        },
        define: function define(t, e) {
          if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
          this.override(t, e);
        },
        defineStatic: function defineStatic(t, e) {
          this.Component[t] = e;
        },
        override: function override(t, e) {
          this.Component.prototype[t] = e;
        },
        defineProperty: function defineProperty(t, e) {
          if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
          this.overrideProperty(t, e);
        },
        overrideProperty: function overrideProperty(t, e) {
          var n = s.aug({
            configurable: !0
          }, e);
          Object.defineProperty(this.Component.prototype, t, n);
        },
        before: function before(t, e) {
          this._adviceArgs.push([o.before, t, e]);
        },
        after: function after(t, e) {
          this._adviceArgs.push([o.after, t, e]);
        },
        around: function around(t, e) {
          this._adviceArgs.push([o.around, t, e]);
        },
        last: function last(t, e) {
          this._lastArgs.push([o.after, t, e]);
        }
      }), t.exports = i;
    }, function (t, e, n) {
      function r(t, e) {
        return function () {
          var n,
              r = this,
              i = arguments;
          return n = e.apply(this, arguments), s.isPromise(n) ? n.then(function () {
            return t.apply(r, i);
          }) : t.apply(this, arguments);
        };
      }

      function i(t, e) {
        return function () {
          function n(t, e) {
            return s.isPromise(e) ? e.then(function () {
              return t;
            }) : t;
          }

          var r,
              i = this,
              o = arguments;
          return r = t.apply(this, arguments), s.isPromise(r) ? r.then(function (t) {
            return n(t, e.apply(i, o));
          }) : n(r, e.apply(this, arguments));
        };
      }

      function o(t, e) {
        return function () {
          var n = a.toRealArray(arguments);
          return n.unshift(u(t, this)), e.apply(this, n);
        };
      }

      var s = n(34),
          a = n(12),
          u = n(15);
      t.exports = {
        before: r,
        after: i,
        around: o
      };
    }, function (t, e, n) {
      function r() {
        return !0;
      }

      function i(t) {
        return t;
      }

      function o(t, e, n) {
        var r = null;
        return t.some(function (t) {
          if (t = a.isType("function", t) ? t() : t, e(t)) return r = n(t), !0;
        }), r;
      }

      function s() {
        function t(t) {
          var e = this;
          t = t || {}, this.params = Object.keys(this.paramConfigs).reduce(function (n, s) {
            var a = [],
                u = e.boundParams,
                c = e.paramConfigs[s],
                d = c.validate || r,
                l = c.transform || i;
            if (s in u && a.push(u[s]), s in t && a.push(t[s]), a = "fallback" in c ? a.concat(c.fallback) : a, n[s] = o(a, d, l), c.required && null == n[s]) throw new Error(s + " is a required parameter");
            return n;
          }, {}), this.initialize();
        }

        return a.aug(t.prototype, {
          paramConfigs: {},
          boundParams: {},
          initialize: function initialize() {}
        }), t;
      }

      var a = n(12);
      t.exports = s;
    }, function (t, e, n) {
      function r() {
        function t(t) {
          e.apply(this, arguments), Object.defineProperty(this, "targetGlobal", {
            value: t
          });
        }

        var e = s();
        return t.prototype = Object.create(e.prototype), u.aug(t.prototype, {
          id: null,
          initialized: !1,
          width: 0,
          height: 0,
          sandboxEl: null,
          insert: function insert() {
            return a.reject();
          },
          onResize: function onResize() {},
          addClass: function addClass(t) {
            var e = this.sandboxEl;
            return t = Array.isArray(t) ? t : [t], o.write(function () {
              t.forEach(function (t) {
                i.add(e, t);
              });
            });
          },
          removeClass: function removeClass(t) {
            var e = this.sandboxEl;
            return t = Array.isArray(t) ? t : [t], o.write(function () {
              t.forEach(function (t) {
                i.remove(e, t);
              });
            });
          },
          styleSelf: function styleSelf(t) {
            var e = this;
            return o.write(function () {
              u.forIn(t, function (t, n) {
                e.sandboxEl.style[t] = n;
              });
            });
          }
        }), t;
      }

      var i = n(21),
          o = n(37),
          s = n(63),
          a = n(2),
          u = n(12);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e, n, r) {
        return e = y.aug({
          id: t
        }, A, e), n = y.aug({}, C, n), m(e, n, r);
      }

      function i(t) {
        try {
          t.contentWindow.document;
        } catch (t) {
          return b.reject(t);
        }

        return b.resolve(t);
      }

      function o(t, e, n, i, o) {
        var s = new w(),
            u = E.generate(),
            d = r(t, e, n, o);
        return _.set(["sandbox", u], function () {
          var t = d.contentWindow.document,
              e = "<!DOCTYPE html><html><head></head><body></body></html>";
          c.write(function () {
            t.write(e);
          }).then(function () {
            t.close(), s.resolve(d);
          });
        }), d.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", 'catch (e) { document.domain="' + a.domain + '"; }', "window.parent." + _.fullPath(["sandbox", u]) + "();"].join(""), d.addEventListener("error", s.reject, !1), c.write(function () {
          i.parentNode.replaceChild(d, i);
        }), s.promise;
      }

      function s(t) {
        t.overrideProperty("id", {
          get: function get() {
            return this.sandboxEl && this.sandboxEl.id;
          }
        }), t.overrideProperty("initialized", {
          get: function get() {
            return !!this.win;
          }
        }), t.overrideProperty("width", {
          get: function get() {
            return this._width;
          }
        }), t.overrideProperty("height", {
          get: function get() {
            return this._height;
          }
        }), t.overrideProperty("sandboxEl", {
          get: function get() {
            return this.iframeEl;
          }
        }), t.defineProperty("iframeEl", {
          get: function get() {
            return this._iframe;
          }
        }), t.defineProperty("rootEl", {
          get: function get() {
            return this.doc && this.doc.documentElement;
          }
        }), t.defineProperty("widgetEl", {
          get: function get() {
            return this.doc && this.doc.body.firstElementChild;
          }
        }), t.defineProperty("win", {
          get: function get() {
            return this.iframeEl && this.iframeEl.contentWindow;
          }
        }), t.defineProperty("doc", {
          get: function get() {
            return this.win && this.win.document;
          }
        }), t.define("_updateCachedDimensions", function () {
          var t = this;
          return c.read(function () {
            var e,
                n = g(t.sandboxEl);
            "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = g(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height;
          });
        }), t.define("_setTargetToBlank", function () {
          var t = this.createElement("base");
          t.target = "_blank", this.doc.head.appendChild(t);
        }), t.define("_didResize", function () {
          var t = this,
              e = this._resizeHandlers.slice(0);

          return this._updateCachedDimensions().then(function () {
            e.forEach(function (e) {
              e(t);
            });
          });
        }), t.define("setTitle", function (t) {
          this.iframeEl.title = t;
        }), t.override("createElement", function (t) {
          return this.doc.createElement(t);
        }), t.override("createFragment", function () {
          return this.doc.createDocumentFragment();
        }), t.override("htmlToElement", function (t) {
          var e;
          return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild;
        }), t.override("hasSelectedText", function () {
          return !!d.getSelectedText(this.win);
        }), t.override("addRootClass", function (t) {
          var e = this.rootEl;
          return t = Array.isArray(t) ? t : [t], this.initialized ? c.write(function () {
            t.forEach(function (t) {
              u.add(e, t);
            });
          }) : b.reject(new Error("sandbox not initialized"));
        }), t.override("removeRootClass", function (t) {
          var e = this.rootEl;
          return t = Array.isArray(t) ? t : [t], this.initialized ? c.write(function () {
            t.forEach(function (t) {
              u.remove(e, t);
            });
          }) : b.reject(new Error("sandbox not initialized"));
        }), t.override("hasRootClass", function (t) {
          return u.present(this.rootEl, t);
        }), t.define("addStyleSheet", function (t, e) {
          var n,
              r = new w();
          return this.initialized ? (n = this.createElement("link"), n.type = "text/css", n.rel = "stylesheet", n.href = t, n.addEventListener("load", r.resolve, !1), n.addEventListener("error", r.reject, !1), c.write(x(e, null, n)).then(function () {
            return f(t).then(r.resolve, r.reject), r.promise;
          })) : b.reject(new Error("sandbox not initialized"));
        }), t.override("prependStyleSheet", function (t) {
          var e = this.doc;
          return this.addStyleSheet(t, function (t) {
            var n = e.head.firstElementChild;
            return n ? e.head.insertBefore(t, n) : e.head.appendChild(t);
          });
        }), t.override("appendStyleSheet", function (t) {
          var e = this.doc;
          return this.addStyleSheet(t, function (t) {
            return e.head.appendChild(t);
          });
        }), t.define("addCss", function (t, e) {
          var n;
          return h.inlineStyle() ? (n = this.createElement("style"), n.type = "text/css", n.appendChild(this.doc.createTextNode(t)), c.write(x(e, null, n))) : (v.devError("CSP enabled; cannot embed inline styles"), b.resolve());
        }), t.override("prependCss", function (t) {
          var e = this.doc;
          return this.addCss(t, function (t) {
            var n = e.head.firstElementChild;
            return n ? e.head.insertBefore(t, n) : e.head.appendChild(t);
          });
        }), t.override("appendCss", function (t) {
          var e = this.doc;
          return this.addCss(t, function (t) {
            return e.head.appendChild(t);
          });
        }), t.override("makeVisible", function () {
          var t = this;
          return this.styleSelf(T).then(function () {
            t._updateCachedDimensions();
          });
        }), t.override("injectWidgetEl", function (t) {
          var e = this;
          return this.initialized ? this.widgetEl ? b.reject(new Error("widget already injected")) : c.write(function () {
            e.doc.body.appendChild(t);
          }) : b.reject(new Error("sandbox not initialized"));
        }), t.override("matchHeightToContent", function () {
          var t,
              e = this;
          return c.read(function () {
            t = e.widgetEl ? g(e.widgetEl).height : 0;
          }), c.write(function () {
            e.sandboxEl.style.height = t + "px";
          }).then(function () {
            return e._updateCachedDimensions();
          });
        }), t.override("matchWidthToContent", function () {
          var t,
              e = this;
          return c.read(function () {
            t = e.widgetEl ? g(e.widgetEl).width : 0;
          }), c.write(function () {
            e.sandboxEl.style.width = t + "px";
          }).then(function () {
            return e._updateCachedDimensions();
          });
        }), t.after("initialize", function () {
          this._iframe = null, this._width = this._height = 0, this._resizeHandlers = [];
        }), t.override("insert", function (t, e, n, s) {
          var a = this,
              u = new w(),
              d = this.targetGlobal.document,
              l = r(t, e, n, d);
          return c.write(x(s, null, l)), l.addEventListener("load", function () {
            i(l).then(null, x(o, null, t, e, n, l, d)).then(u.resolve, u.reject);
          }, !1), l.addEventListener("error", u.reject, !1), u.promise.then(function (t) {
            var e = p(a._didResize, R, a);
            return a._iframe = t, a.win.addEventListener("resize", e, !1), b.all([a._setTargetToBlank(), a.addRootClass(S), a.prependCss(I)]);
          });
        }), t.override("onResize", function (t) {
          this._resizeHandlers.push(t);
        }), t.after("styleSelf", function () {
          return this._updateCachedDimensions();
        });
      }

      var a = n(9),
          u = n(21),
          c = n(37),
          d = n(66),
          l = n(56),
          f = n(67),
          h = n(68),
          p = n(69),
          m = n(46),
          v = n(10),
          g = n(70),
          w = n(1),
          b = n(2),
          y = n(12),
          _ = n(18),
          E = n(30),
          x = n(15),
          A = {
        allowfullscreen: "true"
      },
          C = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
        width: "0px",
        height: "0px",
        padding: "0",
        border: "none"
      },
          T = {
        position: "static",
        visibility: "visible"
      },
          S = "SandboxRoot",
          I = ".SandboxRoot { display: none; }",
          R = 50;

      t.exports = l.couple(n(71), s);
    }, function (t, e, n) {
      function r(t) {
        return t = t || o, t.getSelection && t.getSelection();
      }

      function i(t) {
        var e = r(t);
        return e ? e.toString() : "";
      }

      var o = n(7);
      t.exports = {
        getSelection: r,
        getSelectedText: i
      };
    }, function (t, e, n) {
      function r(t) {
        var e = new s(),
            n = i.createElement("img");
        return n.onload = n.onerror = function () {
          o.setTimeout(e.resolve, 50);
        }, n.src = t, o.setTimeout(e.reject, a), e.promise;
      }

      var i = n(9),
          o = n(7),
          s = n(1),
          a = 2e4;
      t.exports = r;
    }, function (t, e, n) {
      function r() {
        return h + f.generate();
      }

      function i() {
        var t = r(),
            e = a.createElement("div"),
            n = a.createElement("style"),
            i = "." + t + " { visibility: hidden; }";
        return !!a.body && (l.asBoolean(c.val("widgets:csp")) && (o = !1), void 0 !== o ? o : (e.style.display = "none", s.add(e, t), n.type = "text/css", n.appendChild(a.createTextNode(i)), a.body.appendChild(n), a.body.appendChild(e), o = "hidden" === u.getComputedStyle(e).visibility, d(e), d(n), o));
      }

      var o,
          s = n(21),
          a = n(9),
          u = n(7),
          c = n(42),
          d = n(39),
          l = n(27),
          f = n(30),
          h = "csptest";
      t.exports = {
        inlineStyle: i
      };
    }, function (t, e, n) {
      function r(t, e, n) {
        function r() {
          var a = n || this,
              u = arguments,
              c = +new Date();
          return i.clearTimeout(o), c - s > e ? (s = c, void t.apply(a, u)) : void (o = i.setTimeout(function () {
            r.apply(a, u);
          }, e));
        }

        var o,
            s = 0;
        return n = n || null, r;
      }

      var i = n(7);
      t.exports = r;
    }, function (t, e) {
      function n(t) {
        var e = t.getBoundingClientRect();
        return {
          width: e.width,
          height: e.height
        };
      }

      t.exports = n;
    }, function (t, e, n) {
      function r(t) {
        t.define("createElement", i), t.define("createFragment", i), t.define("htmlToElement", i), t.define("hasSelectedText", i), t.define("addRootClass", i), t.define("removeRootClass", i), t.define("hasRootClass", i), t.define("prependStyleSheet", i), t.define("appendStyleSheet", i), t.define("prependCss", i), t.define("appendCss", i), t.define("makeVisible", i), t.define("injectWidgetEl", i), t.define("matchHeightToContent", i), t.define("matchWidthToContent", i);
      }

      var i = n(72);
      t.exports = r;
    }, function (t, e) {
      function n() {
        throw new Error("unimplemented method");
      }

      t.exports = n;
    }, function (t, e, n) {
      function r(t, e, n) {
        return i(t, e, n, 2);
      }

      function i(t, e, n, r) {
        var i = !w.isObject(t),
            o = !!e && !w.isObject(e);
        i || o || (y && y(arguments), s(g.formatClientEventNamespace(t), g.formatClientEventData(e, n, r), g.CLIENT_EVENT_ENDPOINT));
      }

      function o(t, e, n, r) {
        var o = g.extractTermsFromDOM(t.target || t.srcElement);
        o.action = r || "click", i(o, e, n);
      }

      function s(t, e, n) {
        var r, i;
        n && w.isObject(t) && w.isObject(e) && (m.log(t, e), r = g.flattenClientEventPayload(t, e), i = {
          l: g.stringify(r)
        }, g.noticeSeen(t) && (i.notice_seen = !0), r.dnt && (i.dnt = 1), f(v.url(n, i)));
      }

      function a(t, e, n, r) {
        var i,
            o = !w.isObject(t),
            s = !!e && !w.isObject(e);
        if (!o && !s) return i = g.flattenClientEventPayload(g.formatClientEventNamespace(t), g.formatClientEventData(e, n, r)), u(i);
      }

      function u(t) {
        return E.push(t), E;
      }

      function c() {
        var t, e;
        return E.length > 1 && a({
          page: "widgets_js",
          component: "scribe_pixel",
          action: "batch_log"
        }, {}), t = E, E = [], e = t.reduce(function (e, n, r) {
          var i = e.length,
              o = i && e[i - 1],
              s = r + 1 == t.length;
          return s && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = ["entries:" + r, "requests:" + i].join("/")), d(n).forEach(function (t) {
            var n = l(t);
            (!o || o.urlLength + n > _) && (o = {
              urlLength: A,
              items: []
            }, e.push(o)), o.urlLength += n, o.items.push(t);
          }), e;
        }, []), e.map(function (t) {
          var e = {
            l: t.items
          };
          return p.enabled() && (e.dnt = 1), f(v.url(g.CLIENT_EVENT_ENDPOINT, e));
        });
      }

      function d(t) {
        return Array.isArray(t) || (t = [t]), t.reduce(function (t, e) {
          var n,
              r = g.stringify(e),
              i = l(r);
          return A + i < _ ? t = t.concat(r) : (n = g.splitLogEntry(e), n.length > 1 && (t = t.concat(d(n)))), t;
        }, []);
      }

      function l(t) {
        return encodeURIComponent(t).length + 3;
      }

      function f(t) {
        var e = new Image();
        return e.src = t;
      }

      function h(t) {
        var e = g.stringify(t),
            n = l(e);
        return A + n < _;
      }

      var p = n(47),
          m = n(51),
          v = n(26),
          g = n(52),
          w = n(12),
          b = n(18),
          y = b.get("scribeCallback"),
          _ = 2083,
          E = [],
          x = v.url(g.CLIENT_EVENT_ENDPOINT, {
        dnt: 0,
        l: ""
      }),
          A = encodeURIComponent(x).length;
      t.exports = {
        canFlushOneItem: h,
        _enqueueRawObject: u,
        scribe: s,
        clientEvent: i,
        clientEvent2: r,
        enqueueClientEvent: a,
        flushClientEvents: c,
        interaction: o
      };
    }, function (t, e, n) {
      function r(t, e) {
        this._inputsQueue = [], this._task = t, this._isPaused = !1, this._flushDelay = e && e.flushDelay || s, this._pauseLength = e && e.pauseLength || a, this._flushTimeout = void 0;
      }

      var i = n(1),
          o = n(15),
          s = 100,
          a = 3e3;
      r.prototype.add = function (t) {
        var e = new i();
        return this._inputsQueue.push({
          input: t,
          taskDoneDeferred: e
        }), this._scheduleFlush(), e.promise;
      }, r.prototype._scheduleFlush = function () {
        this._isPaused || (clearTimeout(this._flushTimeout), this._flushTimeout = setTimeout(o(this._flush, this), this._flushDelay));
      }, r.prototype._flush = function () {
        try {
          this._task.call(null, this._inputsQueue);
        } catch (t) {
          this._inputsQueue.forEach(function (e) {
            e.taskDoneDeferred.reject(t);
          });
        }

        this._inputsQueue = [], this._flushTimeout = void 0;
      }, r.prototype.pause = function (t) {
        clearTimeout(this._flushTimeout), this._isPaused = !0, !t && this._pauseLength && setTimeout(o(this.resume, this), this._pauseLength);
      }, r.prototype.resume = function () {
        this._isPaused = !1, this._scheduleFlush();
      }, t.exports = r;
    }, function (t, e, n) {
      function r() {
        f.load();
      }

      function i() {
        return d().then(function (t) {
          return Object.keys(t);
        });
      }

      function o(t) {
        return d().then(function (e) {
          if (!e[t]) throw new Error("Experiment not found");
          return e[t];
        });
      }

      function s() {
        return d().then(function (t) {
          var e = Object.keys(t).reduce(function (e, n) {
            var r;
            return t[n].version && (r = n.split("_").slice(-1)[0], e.push(r + ";" + t[n].bucket)), e;
          }, []);
          return h(e.join(","));
        });
      }

      function a(t) {
        return f.settingsLoaded().then(function (e) {
          return e[t];
        });
      }

      function u() {
        return a("isBucketed");
      }

      function c() {
        return a("shouldObtainCookieConsent");
      }

      function d() {
        return a("experiments");
      }

      function l() {
        return a("isAllowedAds");
      }

      var f = n(76),
          h = n(82);
      t.exports = {
        isBucketed: u,
        shouldObtainCookieConsent: c,
        getExperiments: d,
        getExperiment: o,
        getActiveExperimentDataString: s,
        getExperimentKeys: i,
        load: r,
        isAllowedAds: l
      };
    }, function (t, e, n) {
      function r() {
        var t, e, n, r;
        return f.ie9() || f.ie10() || "http:" !== p.protocol && "https:" !== p.protocol ? (m.devError("Using default settings due to unsupported browser or protocol."), s = i(), void x().resolve()) : (t = {
          origin: p.origin,
          settingsEndpoint: l.settings()
        }, e = b.url(a.resourceBaseUrl + a.widgetIframeHtmlPath, t), n = function n(t) {
          var n;
          if (e.substr(0, t.origin.length) === t.origin) try {
            n = "string" == typeof t.data ? h.parse(t.data) : t.data, n.namespace === v.settings && (s = i(n.settings), x().resolve());
          } catch (t) {
            m.devError(t);
          }
        }, E.addEventListener("message", n), r = u({
          src: e,
          title: "Twitter settings iframe"
        }, {
          display: "none"
        }), void d.body.appendChild(r));
      }

      function i(t) {
        var e = {
          is_bucketed: !1,
          should_obtain_cookie_consent: !0,
          experiments: {},
          is_allowed_ads: !1
        },
            n = t || e;
        return new y(n.is_bucketed, n.should_obtain_cookie_consent, n.experiments, n.is_allowed_ads);
      }

      function o() {
        var t, e, n;
        return t = new c(), e = w.get("experimentOverride"), x().promise.then(function () {
          e && e.name && e.assignment && (n = {}, n[e.name] = {
            bucket: e.assignment
          }, s.experiments = _.aug(s.experiments, n)), t.resolve(s);
        }).catch(function (e) {
          t.reject(e);
        }), t.promise;
      }

      var s,
          a = n(77),
          u = n(46),
          c = n(1),
          d = n(9),
          l = n(78),
          f = n(8),
          h = n(53),
          p = n(11),
          m = n(10),
          v = n(79),
          g = n(80),
          w = n(18),
          b = n(26),
          y = n(81),
          _ = n(12),
          E = n(7),
          x = g(function () {
        return new c();
      });

      t.exports = {
        load: r,
        settingsLoaded: o
      };
    }, function (t, e) {
      t.exports = {
        tweetButtonHtmlPath: "/widgets/tweet_button.4ddf50b7ac5c5f06f6679f003b742641.{{lang}}.html",
        followButtonHtmlPath: "/widgets/follow_button.4ddf50b7ac5c5f06f6679f003b742641.{{lang}}.html",
        hubHtmlPath: "/widgets/hub.html",
        widgetIframeHtmlPath: "/widgets/widget_iframe.4ddf50b7ac5c5f06f6679f003b742641.html",
        resourceBaseUrl: "https://platform.twitter.com"
      };
    }, function (t, e, n) {
      function r() {
        g.init("backendHost", b);
      }

      function i() {
        g.unset("backendHost", b);
      }

      function o(t) {
        var e = t || [];
        return e.unshift("cookie/consent"), h(_(), e);
      }

      function s(t) {
        var e = t || [];
        return e.unshift("settings"), h(_(), e);
      }

      function a(t) {
        var e = t || [];
        return e.unshift("video/event"), h(y(), e);
      }

      function u(t) {
        var e = t || [];
        return e.unshift("grid/collection"), h(y(), e);
      }

      function c(t) {
        var e = t || [];
        return e.unshift("moments"), h(y(), e);
      }

      function d(t) {
        var e = t || [];
        return e.unshift("timeline"), h(y(), e);
      }

      function l(t) {
        var e = t || [];
        return e.unshift("tweets.json"), h(y(), e);
      }

      function f(t) {
        var e = t || [];
        return e.unshift("widgets/video"), h(y(), e);
      }

      function h(t, e) {
        var n = [t];
        return e.forEach(function (t) {
          n.push(p(t));
        }), n.join("/");
      }

      function p(t) {
        var e = (t || "").toString(),
            n = m(e) ? 1 : 0,
            r = v(e) ? -1 : void 0;
        return e.slice(n, r);
      }

      function m(t) {
        return "/" === t.slice(0, 1);
      }

      function v(t) {
        return "/" === t.slice(-1);
      }

      var g = n(18),
          w = "https://cdn.syndication.twimg.com",
          b = "https://syndication.twitter.com",
          y = function y() {
        return g.get("backendHost") || w;
      },
          _ = function _() {
        return g.get("settingsSvcHost") || b;
      };

      t.exports = {
        cookieConsent: o,
        disableCDN: r,
        enableCDN: i,
        eventVideo: a,
        grid: u,
        moment: c,
        settings: s,
        timeline: d,
        tweetBatch: l,
        video: f
      };
    }, function (t, e) {
      t.exports = {
        settings: "twttr.settings"
      };
    }, function (t, e) {
      function n(t) {
        var e,
            n = !1;
        return function () {
          return n ? e : (n = !0, e = t.apply(this, arguments));
        };
      }

      t.exports = n;
    }, function (t, e) {
      function n(t, e, n, r) {
        this.isBucketed = t, this.shouldObtainCookieConsent = e, this.experiments = n || {}, this.isAllowedAds = r === !0;
      }

      t.exports = n;
    }, function (t, e) {
      function n(t) {
        return t.split("").map(function (t) {
          return t.charCodeAt(0).toString(16);
        }).join("");
      }

      t.exports = n;
    }, function (t, e, n) {
      t.exports = [n(84), n(116), n(130), n(160), n(174), n(180), n(220), n(239)];
    }, function (t, e, n) {
      function r(t) {
        var e = t.getAttribute("data-show-screen-name"),
            n = u(t),
            r = t.getAttribute("href"),
            i = t.getAttribute("data-screen-name"),
            c = e ? s.asBoolean(e) : null,
            d = t.getAttribute("data-size"),
            l = o.decodeURL(r),
            f = l.recipient_id,
            h = t.getAttribute("data-text") || l.text,
            p = t.getAttribute("data-welcome-message-id") || l.welcomeMessageId;
        return a.aug(n, {
          screenName: i,
          showScreenName: c,
          size: d,
          text: h,
          userId: f,
          welcomeMessageId: p
        });
      }

      function i(t) {
        var e = c(t, l);
        return e.map(function (t) {
          return d(r(t), t.parentNode, t);
        });
      }

      var o = n(26),
          s = n(27),
          a = n(12),
          u = n(85),
          c = n(87)(),
          d = n(89),
          l = "a.twitter-dm-button";
      t.exports = i;
    }, function (t, e, n) {
      function r(t) {
        var e = t.href && t.href.split("?")[1],
            n = e ? s.decode(e) : {},
            r = {
          lang: u(t),
          width: t.getAttribute("data-width") || t.getAttribute("width"),
          height: t.getAttribute("data-height") || t.getAttribute("height"),
          related: t.getAttribute("data-related"),
          partner: t.getAttribute("data-partner")
        };
        return o.asBoolean(t.getAttribute("data-dnt")) && i.setOn(), a.forIn(r, function (t, e) {
          var r = n[t];
          n[t] = o.hasValue(r) ? r : e;
        }), a.compact(n);
      }

      var i = n(47),
          o = n(27),
          s = n(26),
          a = n(12),
          u = n(86);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        var e;
        if (t) return e = t.lang || t.getAttribute("data-lang"), i.isType("string", e) ? e : r(t.parentElement);
      }

      var i = n(12);
      t.exports = r;
    }, function (t, e, n) {
      var r = n(88),
          i = n(30);

      t.exports = function () {
        var t = "data-twitter-extracted-" + i.generate();
        return function (e, n) {
          function i(e) {
            return !e.hasAttribute(t);
          }

          function o(e) {
            return e.setAttribute(t, "true"), e;
          }

          return r(e, n).filter(i).map(o);
        };
      };
    }, function (t, e, n) {
      function r(t, e) {
        return o(t, e) ? [t] : i.toRealArray(t.querySelectorAll(e));
      }

      var i = n(12),
          o = n(23);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e, n) {
        return new i(o, s, "twitter-dm-button", t, e, n);
      }

      var i = n(90),
          o = n(91),
          s = n(112);
      t.exports = r;
    }, function (t, e) {
      function n(t, e, n, r, i, o) {
        this.factory = t, this.Sandbox = e, this.srcEl = o, this.targetEl = i, this.parameters = r, this.className = n;
      }

      n.prototype.destroy = function () {
        this.srcEl = this.targetEl = null;
      }, t.exports = n;
    }, function (t, e, n) {
      function r(t, e) {
        var r = new i();
        return n.e(1, function (i, o) {
          var s;
          if (i) return r.reject(i);

          try {
            s = n(92), r.resolve(new s(t, e));
          } catch (t) {
            r.reject(t);
          }
        }), r.promise;
      }

      var i = n(1);
      t.exports = r;
    },, function (t, e, n) {
      var r = n(57),
          i = n(94),
          o = n(15);
      r = Object.create(r), r.build = o(r.build, null, i), t.exports = r;
    }, function (t, e, n) {
      function r() {
        i.apply(this, arguments), this.Widget = this.Component;
      }

      var i = n(61),
          o = n(12),
          s = n(95);
      r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
        factory: s,
        build: function build() {
          var t = i.prototype.build.apply(this, arguments);
          return t;
        },
        selectors: function selectors(t) {
          var e = this.Widget.prototype.selectors;
          t = t || {}, this.Widget.prototype.selectors = o.aug({}, t, e);
        }
      }), t.exports = r;
    }, function (t, e, n) {
      function r() {
        function t(t, n) {
          e.apply(this, arguments), this.id = d + c(), this.sandbox = n;
        }

        var e = s();
        return t.prototype = Object.create(e.prototype), a.aug(t.prototype, {
          selectors: {},
          hydrate: function hydrate() {
            return i.resolve();
          },
          prepForInsertion: function prepForInsertion() {},
          render: function render() {
            return i.resolve();
          },
          show: function show() {
            return i.resolve();
          },
          resize: function resize() {
            return i.resolve();
          },
          select: function select(t, e) {
            return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, a.toRealArray(t.querySelectorAll(e))) : [];
          },
          selectOne: function selectOne() {
            return this.select.apply(this, arguments)[0];
          },
          selectLast: function selectLast() {
            return this.select.apply(this, arguments).pop();
          },
          on: function on(t, e, n) {
            function r(t) {
              a.addEventListener(t, n, !1);
            }

            function i(t) {
              o.delegate(a, t, s, n);
            }

            var s,
                a = this.el;
            this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? n = e : s = e, s = this.selectors[s] || s, n = u(n, this), t.forEach(s ? i : r));
          }
        }), t;
      }

      var i = n(2),
          o = n(20),
          s = n(63),
          a = n(12),
          u = n(15),
          c = n(96),
          d = "twitter-widget-";
      t.exports = r;
    }, function (t, e) {
      function n() {
        return String(r++);
      }

      var r = 0;
      t.exports = n;
    },, function (t, e, n) {
      function r(t) {
        return "dark" === t ? "dark" : "light";
      }

      function i(t, e, n, i) {
        var o, s;
        return n = r(n), o = a.isRtlLang(e) ? "rtl" : "ltr", s = [t, i ? u.holdback_css : u.css, n, o, "css"].join("."), d.resourceBaseUrl + (i ? "/holdback" : "") + "/css/" + s;
      }

      function o() {
        return d.resourceBaseUrl + "/css/" + ["periscope_on_air", u.css, "css"].join(".");
      }

      function s() {
        return d.resourceBaseUrl + "/css/" + ["dm_button", u.css, "css"].join(".");
      }

      var a = n(99),
          u = n(102),
          c = n(15),
          d = n(77);
      t.exports = {
        dmButton: s,
        tweet: c(i, null, "tweet"),
        timeline: c(i, null, "timeline"),
        video: c(i, null, "video"),
        moment: c(i, null, "moment"),
        grid: c(i, null, "grid"),
        periscopeOnAir: o
      };
    }, function (t, e, n) {
      function r(t) {
        return t = String(t).toLowerCase(), o.contains(a, t);
      }

      function i(t) {
        return t = (t || "").toLowerCase(), t = t.replace("_", "-"), s(t) ? t : (t = t.replace(/-.*/, ""), s(t) ? t : "en");
      }

      var o = n(12),
          s = n(100),
          a = ["ar", "fa", "he", "ur"];
      t.exports = {
        isRtlLang: r,
        matchLanguage: i
      };
    }, function (t, e, n) {
      function r(t) {
        return "en" === t || i.contains(o, t);
      }

      var i = n(12),
          o = n(101);
      t.exports = r;
    }, function (t, e) {
      t.exports = ["hi", "zh-cn", "fr", "zh-tw", "msa", "fil", "fi", "sv", "pl", "ja", "ko", "de", "it", "pt", "es", "ru", "id", "tr", "da", "no", "nl", "hu", "fa", "ar", "ur", "he", "th", "cs", "uk", "vi", "ro", "bn", "el", "en-gb", "gu", "kn", "mr", "ta", "bg", "ca", "hr", "sr", "sk"];
    }, function (t, e) {
      t.exports = {
        css: "911c6a5342990c250cbc5513282f0532",
        holdback_css: "d1d3833e3b1b21f1a6bc4e8af3baca6b"
      };
    }, function (t, e, n) {
      function r(t) {
        return i.isType("string", t);
      }

      var i = n(12);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        var e = {};
        t.define("injectRefUrlParams", function (t) {
          return s.isTwitterURL(t.href) ? t.getAttribute(u) ? a.resolve() : (e = {
            twcamp: this.params.productName,
            twterm: this.params.id,
            twcon: t.getAttribute("data-twcon")
          }, o.getActiveExperimentDataString().then(function (n) {
            t.setAttribute(u, !0), e.twgr = n, t.href = i(t.href, e);
          }.bind(this)).catch(function () {
            t.setAttribute(u, !0), t.href = i(t.href, e);
          }.bind(this))) : a.resolve();
        }), t.after("render", function () {
          this.on("click", "A", function (t, e) {
            this.injectRefUrlParams(e);
          });
        });
      }

      var i = n(105),
          o = n(75),
          s = n(25),
          a = n(2),
          u = "data-url-ref-attrs-injected";
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        return u.url(t, {
          ref_src: e,
          ref_url: c.rootDocumentLocation()
        });
      }

      function i(t, e) {
        return t + d + e;
      }

      function o(t) {
        return t.reduce(function (t, e) {
          return t + l + e;
        });
      }

      function s(t) {
        var e = [];
        return t.twcamp && e.push(i(p, t.twcamp)), t.twterm && e.push(i(h, t.twterm)), t.twgr && e.push(i(m, t.twgr)), t.twcon && e.push(i(v, t.twcon)), e;
      }

      function a(t, e) {
        var n = [i(f, "tfw")];
        return e && (n = n.concat(s(e))), r(t, o(n));
      }

      var u = n(26),
          c = n(48),
          d = "^",
          l = "|",
          f = "twsrc",
          h = "twterm",
          p = "twcamp",
          m = "twgr",
          v = "twcon";
      t.exports = a;
    }, function (t, e, n) {
      function r(t) {
        t.params({
          partner: {
            fallback: u(c.val, c, "partner")
          }
        }), t.define("scribeItems", function () {
          return {};
        }), t.define("scribeNamespace", function () {
          return {
            client: "tfw"
          };
        }), t.define("scribeData", function () {
          return {
            widget_origin: s.rootDocumentLocation(),
            widget_frame: s.isFramed() && s.currentDocumentLocation(),
            widget_partner: this.params.partner,
            widget_site_screen_name: l(c.val("site")),
            widget_site_user_id: d.asNumber(c.val("site:id")),
            widget_creator_screen_name: l(c.val("creator")),
            widget_creator_user_id: d.asNumber(c.val("creator:id"))
          };
        }), t.define("scribe", function (t, e, n) {
          t = a.aug(this.scribeNamespace(), t || {}), e = a.aug(this.scribeData(), e || {}), i.scribe(t, e, !1, n);
        }), t.define("scribeInteraction", function (t, e, n) {
          var r = o.extractTermsFromDOM(t.target);
          r.action = t.type, "url" === r.element && (r.element = o.clickEventElement(t.target)), this.scribe(r, e, n);
        });
      }

      var i = n(43),
          o = n(52),
          s = n(48),
          a = n(12),
          u = n(15),
          c = n(42),
          d = n(27),
          l = n(107);
      t.exports = r;
    }, function (t, e) {
      function n(t) {
        return t && "@" === t[0] ? t.substr(1) : t;
      }

      t.exports = n;
    },, function (t, e, n) {
      function r(t, e) {
        var n, r;
        if (t) return r = e ? [t, e] : [t], n = a(r), {
          item_ids: Object.keys(n),
          item_details: n
        };
      }

      function i(t) {
        t.selectors({
          tweetIdInfo: ".js-tweetIdInfo",
          quotedTweetInfo: '[data-tweet-item-type="23"]'
        }), t.define("scribeClickInteraction", function (t, e) {
          var n = o.closest(this.selectors.tweetIdInfo, e, this.el),
              i = n && n.querySelector(this.selectors.quotedTweetInfo);
          this.scribeInteraction(t, r(n, i));
        }), t.after("render", function () {
          this.on("click", "A", this.scribeClickInteraction), this.on("click", "BUTTON", this.scribeClickInteraction);
        });
      }

      var o = n(22),
          s = n(93),
          a = n(110);
      t.exports = s.couple(n(106), i);
    }, function (t, e, n) {
      function r(t) {
        return t ? (t = Array.isArray(t) ? t : [t], t.reduce(function (t, e) {
          var n = e.getAttribute("data-tweet-id"),
              r = e.getAttribute("data-rendered-tweet-id") || n,
              o = e.getAttribute("data-tweet-item-type") === i.QUOTE_TWEET.toString();
          return o ? t[n] = {
            item_type: i.QUOTE_TWEET
          } : n === r ? t[r] = {
            item_type: i.TWEET
          } : n && (t[r] = {
            item_type: i.RETWEET,
            target_type: i.TWEET,
            target_id: n
          }), t;
        }, {})) : {};
      }

      var i = n(111);
      t.exports = r;
    }, function (t, e) {
      t.exports = {
        TWEET: 0,
        RETWEET: 10,
        CUSTOM_TIMELINE: 17,
        LIVE_VIDEO_EVENT: 28,
        QUOTE_TWEET: 23
      };
    }, function (t, e, n) {
      var r = n(113),
          i = n(55);
      t.exports = r.isSupported() ? r : i;
    }, function (t, e, n) {
      var r = n(56),
          i = n(114);
      t.exports = r.build([i]);
    }, function (t, e, n) {
      function r(t) {
        t.defineStatic("isSupported", function () {
          return !!o.HTMLElement.prototype.createShadowRoot && f.inlineStyle() && !h.android();
        }), t.overrideProperty("id", {
          get: function get() {
            return this.sandboxEl && this.sandboxEl.id;
          }
        }), t.overrideProperty("initialized", {
          get: function get() {
            return !!this._shadowHost;
          }
        }), t.overrideProperty("width", {
          get: function get() {
            return this._width;
          }
        }), t.overrideProperty("height", {
          get: function get() {
            return this._height;
          }
        }), t.overrideProperty("sandboxEl", {
          get: function get() {
            return this._shadowHost;
          }
        }), t.define("_updateCachedDimensions", function () {
          var t = this;
          return u.read(function () {
            var e,
                n = p(t.sandboxEl);
            "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = p(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height;
          });
        }), t.define("_didResize", function () {
          var t = this,
              e = this._resizeHandlers.slice(0);

          return this._updateCachedDimensions().then(function () {
            e.forEach(function (e) {
              e(t);
            });
          });
        }), t.override("createElement", function (t) {
          return this.targetGlobal.document.createElement(t);
        }), t.override("createFragment", function () {
          return this.targetGlobal.document.createDocumentFragment();
        }), t.override("htmlToElement", function (t) {
          var e;
          return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild;
        }), t.override("hasSelectedText", function () {
          return !!c.getSelectedText(this.targetGlobal);
        }), t.override("addRootClass", function (t) {
          var e = this._shadowRootBody;
          return t = Array.isArray(t) ? t : [t], this.initialized ? u.write(function () {
            t.forEach(function (t) {
              s.add(e, t);
            });
          }) : g.reject(new Error("sandbox not initialized"));
        }), t.override("removeRootClass", function (t) {
          var e = this._shadowRootBody;
          return t = Array.isArray(t) ? t : [t], this.initialized ? u.write(function () {
            t.forEach(function (t) {
              s.remove(e, t);
            });
          }) : g.reject(new Error("sandbox not initialized"));
        }), t.override("hasRootClass", function (t) {
          return s.present(this._shadowRootBody, t);
        }), t.override("addStyleSheet", function (t, e) {
          return this.addCss('@import url("' + t + '");', e).then(function () {
            return l(t);
          });
        }), t.override("prependStyleSheet", function (t) {
          var e = this._shadowRoot;
          return this.addStyleSheet(t, function (t) {
            var n = e.firstElementChild;
            return n ? e.insertBefore(t, n) : e.appendChild(t);
          });
        }), t.override("appendStyleSheet", function (t) {
          var e = this._shadowRoot;
          return this.addStyleSheet(t, function (t) {
            return e.appendChild(t);
          });
        }), t.override("addCss", function (t, e) {
          var n;
          return this.initialized ? f.inlineStyle() ? (n = this.createElement("style"), n.type = "text/css", n.appendChild(this.targetGlobal.document.createTextNode(t)), u.write(m(e, null, n))) : g.resolve() : g.reject(new Error("sandbox not initialized"));
        }), t.override("prependCss", function (t) {
          var e = this._shadowRoot;
          return this.addCss(t, function (t) {
            var n = e.firstElementChild;
            return n ? e.insertBefore(t, n) : e.appendChild(t);
          });
        }), t.override("appendCss", function (t) {
          var e = this._shadowRoot;
          return this.addCss(t, function (t) {
            return e.appendChild(t);
          });
        }), t.override("makeVisible", function () {
          return this.styleSelf(_);
        }), t.override("injectWidgetEl", function (t) {
          function e() {
            var t = v(n._didResize, b, n);
            new i(n._shadowRootBody, t);
          }

          var n = this;
          return this.initialized ? this._shadowRootBody.firstElementChild ? g.reject(new Error("widget already injected")) : u.write(function () {
            n._shadowRootBody.appendChild(t);
          }).then(function () {
            return n._updateCachedDimensions();
          }).then(e) : g.reject(new Error("sandbox not initialized"));
        }), t.override("matchHeightToContent", function () {
          return g.resolve();
        }), t.override("matchWidthToContent", function () {
          return g.resolve();
        }), t.override("insert", function (t, e, n, r) {
          var i = this.targetGlobal.document,
              o = this._shadowHost = i.createElement(E),
              s = this._shadowRoot = o.createShadowRoot(),
              c = this._shadowRootBody = i.createElement("div");
          return w.forIn(e || {}, function (t, e) {
            o.setAttribute(t, e);
          }), o.id = t, s.appendChild(c), a.delegate(c, "click", "A", function (t, e) {
            e.hasAttribute("target") || e.setAttribute("target", "_blank");
          }), g.all([this.styleSelf(y), this.addRootClass(x), this.prependCss(A), u.write(r.bind(null, o))]);
        }), t.override("onResize", function (t) {
          this._resizeHandlers.push(t);
        }), t.after("initialize", function () {
          this._shadowHost = this._shadowRoot = this._shadowRootBody = null, this._width = this._height = 0, this._resizeHandlers = [];
        }), t.after("styleSelf", function () {
          return this._updateCachedDimensions();
        });
      }

      var i = n(115),
          o = n(7),
          s = n(21),
          a = n(20),
          u = n(37),
          c = n(66),
          d = n(56),
          l = n(67),
          f = n(68),
          h = n(8),
          p = n(70),
          m = n(15),
          v = n(69),
          g = n(2),
          w = n(12),
          b = 50,
          y = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
        transform: "rotate(0deg)"
      },
          _ = {
        position: "static",
        visibility: "visible"
      },
          E = "twitterwidget",
          x = "SandboxRoot",
          A = ".SandboxRoot { display: none; }";
      t.exports = d.couple(n(71), r);
    }, function (t, e) {
      !function () {
        var e = function e(t, n) {
          function r() {
            this.q = [], this.add = function (t) {
              this.q.push(t);
            };
            var t, e;

            this.call = function () {
              for (t = 0, e = this.q.length; t < e; t++) {
                this.q[t].call();
              }
            };
          }

          function i(t, e) {
            return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(e) : t.style[e];
          }

          function o(t, e) {
            if (t.resizedAttached) {
              if (t.resizedAttached) return void t.resizedAttached.add(e);
            } else t.resizedAttached = new r(), t.resizedAttached.add(e);

            t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
            var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                o = "position: absolute; left: 0; top: 0; transition: 0s;";
            t.resizeSensor.style.cssText = n, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', t.appendChild(t.resizeSensor), {
              fixed: 1,
              absolute: 1
            }[i(t, "position")] || (t.style.position = "relative");
            var s,
                a,
                u = t.resizeSensor.childNodes[0],
                c = u.childNodes[0],
                d = t.resizeSensor.childNodes[1],
                l = (d.childNodes[0], function () {
              c.style.width = u.offsetWidth + 10 + "px", c.style.height = u.offsetHeight + 10 + "px", u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, d.scrollLeft = d.scrollWidth, d.scrollTop = d.scrollHeight, s = t.offsetWidth, a = t.offsetHeight;
            });
            l();

            var f = function f() {
              t.resizedAttached && t.resizedAttached.call();
            },
                h = function h(t, e, n) {
              t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener(e, n);
            },
                p = function p() {
              t.offsetWidth == s && t.offsetHeight == a || f(), l();
            };

            h(u, "scroll", p), h(d, "scroll", p);
          }

          var s = Object.prototype.toString.call(t),
              a = "[object Array]" === s || "[object NodeList]" === s || "[object HTMLCollection]" === s || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
          if (a) for (var u = 0, c = t.length; u < c; u++) {
            o(t[u], n);
          } else o(t, n);

          this.detach = function () {
            if (a) for (var n = 0, r = t.length; n < r; n++) {
              e.detach(t[n]);
            } else e.detach(t);
          };
        };

        e.detach = function (t) {
          t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached);
        }, "undefined" != typeof t && "undefined" != typeof t.exports ? t.exports = e : window.ResizeSensor = e;
      }();
    }, function (t, e, n) {
      function r(t) {
        var e = a(t),
            n = {
          screenName: o.screenName(t.href),
          showScreenName: "false" !== t.getAttribute("data-show-screen-name"),
          showCount: "false" !== t.getAttribute("data-show-count"),
          size: t.getAttribute("data-size"),
          count: t.getAttribute("data-count"),
          preview: t.getAttribute("data-preview")
        };
        return s.forIn(n, function (t, n) {
          var r = e[t];
          e[t] = d.hasValue(r) ? r : n;
        }), e.screenName = e.screenName || e.screen_name, e;
      }

      function i(t) {
        var e = u(t, l);
        return e.map(function (t) {
          return c(r(t), t.parentNode, t);
        });
      }

      var o = n(25),
          s = n(12),
          a = n(85),
          u = n(87)(),
          c = n(117),
          d = n(27),
          l = "a.twitter-follow-button";
      t.exports = i;
    }, function (t, e, n) {
      function r(t, e, n) {
        return new i(o, s, "twitter-follow-button", t, e, n);
      }

      var i = n(90),
          o = n(118),
          s = n(123);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        var r = new i();
        return n.e(2, function (i, o) {
          var s;
          if (i) return r.reject(i);

          try {
            s = n(119), r.resolve(new s(t, e));
          } catch (t) {
            r.reject(t);
          }
        }), r.promise;
      }

      var i = n(1);
      t.exports = r;
    },,,, function (t, e, n) {
      function r(t) {
        t.define("widgetDataAttributes", function () {
          return {};
        }), t.define("setDataAttributes", function () {
          var t = this.sandbox.sandboxEl;
          o.forIn(this.widgetDataAttributes(), function (e, n) {
            i.hasValue(n) && t.setAttribute("data-" + e, n);
          });
        }), t.after("render", function () {
          this.setDataAttributes();
        });
      }

      var i = n(27),
          o = n(12);
      t.exports = r;
    }, function (t, e, n) {
      var r = n(56),
          i = n(124);
      t.exports = r.build([i]);
    }, function (t, e, n) {
      function r(t) {
        t.overrideProperty("id", {
          get: function get() {
            return this.sandboxEl && this.sandboxEl.id;
          }
        }), t.overrideProperty("initialized", {
          get: function get() {
            return !!this.iframeEl;
          }
        }), t.overrideProperty("width", {
          get: function get() {
            return this._width;
          }
        }), t.overrideProperty("height", {
          get: function get() {
            return this._height;
          }
        }), t.overrideProperty("sandboxEl", {
          get: function get() {
            return this.iframeEl;
          }
        }), t.defineProperty("iframeEl", {
          get: function get() {
            return this._iframe;
          }
        }), t.define("updateCachedDimensions", function () {
          var t = this;
          return this.initialized ? i.read(function () {
            t._width = t.sandboxEl.offsetWidth, t._height = t.sandboxEl.offsetHeight;
          }) : c.resolve();
        }), t.define("setTitle", function (t) {
          this.iframeEl.title = t;
        }), t.define("makeVisible", function () {
          return this.styleSelf(h);
        }), t.define("didResize", function () {
          var t = this,
              e = t._resizeHandlers.length > 0;
          return this.updateCachedDimensions().then(function () {
            e && t._resizeHandlers.forEach(function (e) {
              e(t);
            });
          });
        }), t.define("loadDocument", function (t) {
          var e = new u();
          return this.initialized ? this.iframeEl.src ? c.reject(new Error("widget already loaded")) : (this.iframeEl.addEventListener("load", e.resolve, !1), this.iframeEl.addEventListener("error", e.reject, !1), this.iframeEl.src = t, e.promise) : c.reject(new Error("sandbox not initialized"));
        }), t.after("initialize", function () {
          this._iframe = null, this._width = this._height = 0, this._resizeHandlers = [];
        }), t.override("insert", function (t, e, n, r) {
          var o = this;
          return e = l.aug({
            id: t
          }, e), n = l.aug({}, f, n), this._iframe = a(e, n), p[t] = this, this.onResize(s(function () {
            o.makeVisible();
          })), i.write(d(r, null, this._iframe));
        }), t.override("onResize", function (t) {
          this._resizeHandlers.push(t);
        }), t.after("styleSelf", function () {
          return this.updateCachedDimensions();
        });
      }

      var i = n(37),
          o = n(125),
          s = n(80),
          a = n(46),
          u = n(1),
          c = n(2),
          d = n(15),
          l = n(12),
          f = {
        position: "absolute",
        visibility: "hidden",
        width: "0px",
        height: "0px"
      },
          h = {
        position: "static",
        visibility: "visible"
      },
          p = {};
      o(function (t, e, n) {
        var r = p[t];
        if (r) return e = e || 1, n = n || 1, r.styleSelf({
          width: e + "px",
          height: n + "px"
        }).then(function () {
          r.didResize();
        });
      }), t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        new o().attachReceiver(new s.Receiver(i, "twttr.button")).bind("twttr.private.trigger", function (t, e) {
          var n = c(this);
          a.trigger(t, {
            target: n,
            region: e,
            type: t,
            data: {}
          });
        }).bind("twttr.private.resizeButton", function (e) {
          var n = c(this),
              r = n && n.id,
              i = u.asInt(e.width),
              o = u.asInt(e.height);
          r && void 0 !== i && void 0 !== o && t(r, i, o);
        });
      }

      var i = n(7),
          o = n(126),
          s = n(128),
          a = n(31),
          u = n(27),
          c = n(129);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        this.registry = t || {};
      }

      function i(t) {
        return h.isType("string", t) ? l.parse(t) : t;
      }

      function o(t) {
        var e, n, r;
        return !!h.isObject(t) && (e = t.jsonrpc === v, n = h.isType("string", t.method), r = !("id" in t) || s(t.id), e && n && r);
      }

      function s(t) {
        var e, n, r;
        return e = h.isType("string", t), n = h.isType("number", t), r = null === t, e || n || r;
      }

      function a(t) {
        return h.isObject(t) && !h.isType("function", t);
      }

      function u(t, e) {
        return {
          jsonrpc: v,
          id: t,
          result: e
        };
      }

      function c(t, e) {
        return {
          jsonrpc: v,
          id: s(t) ? t : null,
          error: e
        };
      }

      function d(t) {
        return p.all(t).then(function (t) {
          return t = t.filter(function (t) {
            return void 0 !== t;
          }), t.length ? t : void 0;
        });
      }

      var l = n(53),
          f = n(127),
          h = n(12),
          p = n(2),
          m = n(34),
          v = "2.0";
      r.prototype._invoke = function (t, e) {
        var n, r, i;
        n = this.registry[t.method], r = t.params || [], r = h.isType("array", r) ? r : [r];

        try {
          i = n.apply(e.source || null, r);
        } catch (t) {
          i = p.reject(t.message);
        }

        return m.isPromise(i) ? i : p.resolve(i);
      }, r.prototype._processRequest = function (t, e) {
        function n(e) {
          return u(t.id, e);
        }

        function r() {
          return c(t.id, f.INTERNAL_ERROR);
        }

        var i;
        return o(t) ? (i = "params" in t && !a(t.params) ? p.resolve(c(t.id, f.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, {
          source: e
        }).then(n, r) : p.resolve(c(t.id, f.METHOD_NOT_FOUND)), null != t.id ? i : p.resolve()) : p.resolve(c(t.id, f.INVALID_REQUEST));
      }, r.prototype.attachReceiver = function (t) {
        return t.attachTo(this), this;
      }, r.prototype.bind = function (t, e) {
        return this.registry[t] = e, this;
      }, r.prototype.receive = function (t, e) {
        var n,
            r,
            o,
            s = this;

        try {
          t = i(t);
        } catch (t) {
          return p.resolve(c(null, f.PARSE_ERROR));
        }

        return e = e || null, n = h.isType("array", t), r = n ? t : [t], o = r.map(function (t) {
          return s._processRequest(t, e);
        }), n ? d(o) : o[0];
      }, t.exports = r;
    }, function (t, e) {
      t.exports = {
        PARSE_ERROR: {
          code: -32700,
          message: "Parse error"
        },
        INVALID_REQUEST: {
          code: -32600,
          message: "Invalid Request"
        },
        INVALID_PARAMS: {
          code: -32602,
          message: "Invalid params"
        },
        METHOD_NOT_FOUND: {
          code: -32601,
          message: "Method not found"
        },
        INTERNAL_ERROR: {
          code: -32603,
          message: "Internal error"
        }
      };
    }, function (t, e, n) {
      function r(t, e, n) {
        var r;
        t && t.postMessage && (g ? r = (n || "") + l.stringify(e) : n ? (r = {}, r[n] = e) : r = e, t.postMessage(r, "*"));
      }

      function i(t) {
        return p.isType("string", t) ? t : "JSONRPC";
      }

      function o(t, e) {
        return e ? p.isType("string", t) && 0 === t.indexOf(e) ? t.substring(e.length) : t && t[e] ? t[e] : void 0 : t;
      }

      function s(t, e) {
        var n = t.document;
        this.filter = i(e), this.server = null, this.isTwitterFrame = m.isTwitterURL(n.location.href), t.addEventListener("message", v(this._onMessage, this), !1);
      }

      function a(t, e) {
        this.pending = {}, this.target = t, this.isTwitterHost = m.isTwitterURL(c.href), this.filter = i(e), d.addEventListener("message", v(this._onMessage, this), !1);
      }

      function u(t) {
        return arguments.length > 0 && (g = !!t), g;
      }

      var c = n(11),
          d = n(7),
          l = n(53),
          f = n(1),
          h = n(8),
          p = n(12),
          m = n(25),
          v = n(15),
          g = h.ie9();
      p.aug(s.prototype, {
        _onMessage: function _onMessage(t) {
          var e,
              n = this;
          this.server && (this.isTwitterFrame && !m.isTwitterURL(t.origin) || (e = o(t.data, this.filter), e && this.server.receive(e, t.source).then(function (e) {
            e && r(t.source, e, n.filter);
          })));
        },
        attachTo: function attachTo(t) {
          this.server = t;
        },
        detach: function detach() {
          this.server = null;
        }
      }), p.aug(a.prototype, {
        _processResponse: function _processResponse(t) {
          var e = this.pending[t.id];
          e && (e.resolve(t), delete this.pending[t.id]);
        },
        _onMessage: function _onMessage(t) {
          var e;

          if ((!this.isTwitterHost || m.isTwitterURL(t.origin)) && (e = o(t.data, this.filter))) {
            if (p.isType("string", e)) try {
              e = l.parse(e);
            } catch (t) {
              return;
            }
            e = p.isType("array", e) ? e : [e], e.forEach(v(this._processResponse, this));
          }
        },
        send: function send(t) {
          var e = new f();
          return t.id ? this.pending[t.id] = e : e.resolve(), r(this.target, t, this.filter), e.promise;
        }
      }), t.exports = {
        Receiver: s,
        Dispatcher: a,
        _stringifyPayload: u
      };
    }, function (t, e, n) {
      function r(t) {
        for (var e, n = i.getElementsByTagName("iframe"), r = 0; n[r]; r++) {
          if (e = n[r], e.contentWindow === t) return e;
        }
      }

      var i = n(9);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        var e = u(t),
            n = {
          collectionId: a.collectionId(t.href),
          chrome: t.getAttribute("data-chrome"),
          limit: t.getAttribute("data-limit")
        };
        return s.forIn(n, function (t, n) {
          var r = e[t];
          e[t] = o.hasValue(r) ? r : n;
        }), e;
      }

      function i(t) {
        var e = c(t, l);
        return e.map(function (t) {
          return d(r(t), t.parentNode, t);
        });
      }

      var o = n(27),
          s = n(12),
          a = n(25),
          u = n(85),
          c = n(87)(),
          d = n(131),
          l = "a.twitter-grid";
      t.exports = i;
    }, function (t, e, n) {
      function r(t, e, n) {
        return new i(o, s, "twitter-grid", t, e, n);
      }

      var i = n(90),
          o = n(132),
          s = n(55);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        var r = new i();
        return n.e(3, function (i, o) {
          var s;
          if (i) return r.reject(i);

          try {
            s = n(133), r.resolve(new s(t, e));
          } catch (t) {
            r.reject(t);
          }
        }), r.promise;
      }

      var i = n(1);
      t.exports = r;
    },,,, function (t, e, n) {
      function r(t) {
        if (t) return t.replace(/[^\w$]/g, "_");
      }

      function i() {
        return l + f++;
      }

      function o(t, e, n, o) {
        var l, f, h;
        return o = r(o || i()), l = a.fullPath(["callbacks", o]), f = s.createElement("script"), h = new u(), e = c.aug({}, e, {
          callback: l,
          suppress_response_codes: !0
        }), a.set(["callbacks", o], function (t) {
          var e, r;
          e = n(t || !1), t = e.resp, r = e.success, r ? h.resolve(t) : h.reject(t), f.onload = f.onreadystatechange = null, f.parentNode && f.parentNode.removeChild(f), a.unset(["callbacks", o]);
        }), f.onerror = function () {
          h.reject(new Error("failed to fetch " + f.src));
        }, f.src = d.url(t, e), f.async = "async", s.body.appendChild(f), h.promise;
      }

      var s = n(9),
          a = n(18),
          u = n(1),
          c = n(12),
          d = n(26),
          l = "cb",
          f = 0;
      t.exports = {
        fetch: o
      };
    }, function (t, e, n) {
      function r(t) {
        var e, n;
        return e = t.headers && t.headers.status, n = t && !t.error && 200 === e, !n && t.headers && t.headers.message && i.publicError(t.headers.message), {
          success: n,
          resp: t
        };
      }

      var i = n(10);
      t.exports = r;
    }, function (t, e) {
      function n() {
        var t = new Date().toString().match(/(GMT[+-]?\d+)/);
        return t && t[0] || "GMT";
      }

      t.exports = {
        getTimezoneOffset: n
      };
    }, function (t, e) {
      function n() {
        var t = 9e5;
        return Math.floor(+new Date() / t);
      }

      t.exports = n;
    }, function (t, e, n) {
      var r = n(9),
          i = n(27),
          o = r.createElement("div");

      t.exports = function (t) {
        return i.isNumber(t) && (t += "px"), o.style.width = "", o.style.width = t, o.style.width || null;
      };
    }, function (t, e, n) {
      function r(t) {
        t.after("prepForInsertion", function (t) {
          o.sizeIframes(t, this.sandbox.width, s, i.sync);
        }), t.after("resize", function () {
          o.sizeIframes(this.el, this.sandbox.width, s, i.write);
        });
      }

      var i = n(37),
          o = n(142),
          s = 375;
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        t.getAttribute("data-image") === A ? t.src = A + ".png" : t.getAttribute("data-image") ? s(t, e) : u(t, e);
      }

      function i(t) {
        var e = t.split(" ");
        this.url = decodeURIComponent(e[0].trim()), this.width = +e[1].replace(/w$/, "").trim();
      }

      function o(t, e, n) {
        var r, o, s, u, c;
        if (o = a(t), s = e.split(",").map(function (t) {
          return new i(t.trim());
        }), n) for (c = 0; c < s.length; c++) {
          s[c].url === n && (r = s[c]);
        }
        return u = s.reduce(function (t, e) {
          return e.width < t.width && e.width >= o ? e : t;
        }, s[0]), r && r.width > u.width ? r : u;
      }

      function s(t, e) {
        var n, r, i, o, s;
        n = b.decodeURL(t.src).name, r = n && y(P, function (t) {
          if (R[t] === n) return t;
        }), o = a(e) || 680, r >= o || (i = t.getAttribute("data-image"), s = y(P, function (t) {
          if (t >= o) return t;
        }) || 4096, t.src = b.url(i, {
          format: "jpg",
          name: R[s]
        }));
      }

      function a(t) {
        return v.devicePixelRatio ? t * v.devicePixelRatio : t;
      }

      function u(t, e) {
        var n,
            r = t.getAttribute("data-srcset"),
            i = t.src;
        r && (n = o(e, r, i), t.src = n.url);
      }

      function c(t, e) {
        e = void 0 !== e ? !!e : _.retina(), g.toRealArray(t.getElementsByTagName("IMG")).forEach(function (t) {
          var n = t.getAttribute("data-src-1x") || t.getAttribute("src"),
              r = t.getAttribute("data-src-2x");
          e && r ? t.src = r : n && (t.src = n);
        });
      }

      function d(t, e, n) {
        t && (g.toRealArray(t.querySelectorAll(".NaturalImage-image")).forEach(function (t) {
          n(function () {
            r(t, e);
          });
        }), g.toRealArray(t.querySelectorAll(".CroppedImage-image")).forEach(function (t) {
          n(function () {
            r(t, e / 2);
          });
        }), g.toRealArray(t.querySelectorAll("img.autosized-media")).forEach(function (t) {
          n(function () {
            r(t, e), t.removeAttribute("width"), t.removeAttribute("height");
          });
        }));
      }

      function l(t, e, n, r) {
        t && g.toRealArray(t.querySelectorAll("iframe.autosized-media, .wvp-player-container")).forEach(function (t) {
          var i = h(t.getAttribute("data-width"), t.getAttribute("data-height"), E.effectiveWidth(t.parentElement) || e, n);
          r(function () {
            t.setAttribute("width", i.width), t.setAttribute("height", i.height), x.present(t, "wvp-player-container") ? (t.style.width = i.width, t.style.height = i.height) : (t.width = i.width, t.height = i.height);
          });
        });
      }

      function f(t, e, n, r) {
        d(t, e, r), l(t, e, n, r);
      }

      function h(t, e, n, r, i, o) {
        return n = n || t, r = r || e, i = i || 0, o = o || 0, t > n && (e *= n / t, t = n), e > r && (t *= r / e, e = r), t < i && (e *= i / t, t = i), e < o && (t *= o / e, e = o), {
          width: Math.floor(t),
          height: Math.floor(e)
        };
      }

      function p(t, e, n, r) {
        g.toRealArray(t.querySelectorAll(e)).forEach(function (t) {
          var e = t.getAttribute("style") || t.getAttribute("data-style"),
              i = r.test(e) && RegExp.$1;
          i && (t.setAttribute("data-csp-fix", !0), t.style[n] = i);
        });
      }

      function m(t) {
        w.inlineStyle() || (p(t, ".MediaCard-widthConstraint", "maxWidth", C), p(t, ".MediaCard-mediaContainer", "paddingBottom", I), p(t, ".CroppedImage-image", "top", T), p(t, ".CroppedImage-image", "left", S));
      }

      var v = n(7),
          g = n(12),
          w = n(68),
          b = n(26),
          y = n(143),
          _ = n(8),
          E = n(144),
          x = n(21),
          A = "https://pbs.twimg.com/cards/player-placeholder",
          C = /max-width:\s*([\d.]+px)/,
          T = /top:\s*(-?[\d.]+%)/,
          S = /left:\s*(-?[\d.]+%)/,
          I = /padding-bottom:\s*([\d.]+%)/,
          R = {
        64: "tiny",
        120: "120x120",
        240: "240x240",
        360: "360x360",
        680: "small",
        900: "900x900",
        1200: "medium",
        2048: "large",
        4096: "4096x4096"
      },
          P = Object.keys(R).sort(function (t, e) {
        return t - e;
      });

      t.exports = {
        scaleDimensions: h,
        retinize: c,
        setSrcForImgs: d,
        sizeIframes: l,
        constrainMedia: f,
        fixMediaCardLayout: m,
        __setSrcFromSet: u,
        __setSrcFromImage: s,
        __setImageSrc: r
      };
    }, function (t, e) {
      t.exports = function (t, e, n) {
        for (var r, i = 0; i < t.length; i++) {
          if (r = e.call(n, t[i], i, t)) return r;
        }
      };
    }, function (t, e) {
      function n(t) {
        return t && 1 === t.nodeType ? t.offsetWidth || n(t.parentNode) : 0;
      }

      t.exports = {
        effectiveWidth: n
      };
    }, function (t, e, n) {
      function r(t) {
        return t.replace(/-(.)/g, function (t, e) {
          return e.toUpperCase();
        });
      }

      function i(t) {
        return (t || "").split(";").reduce(function (t, e) {
          var n, i;
          return c.test(e.trim()) && (n = RegExp.$1, i = RegExp.$2, t[r(n)] = i), t;
        }, {});
      }

      function o(t) {
        var e = i(t.getAttribute("data-style"));
        0 !== Object.keys(e).length && (t.setAttribute("data-csp-fix", "true"), u.forIn(e, function (e, n) {
          t.style[e] = n;
        }));
      }

      function s(t) {
        t.selectors({
          cspForcedStyle: ".js-cspForcedStyle"
        }), t.after("prepForInsertion", function (t) {
          a.inlineStyle() || this.select(t, "cspForcedStyle").forEach(o);
        });
      }

      var a = n(68),
          u = (n(10), n(12)),
          c = /^([a-zA-Z-]+):\s*(.+)$/;
      t.exports = s;
    }, function (t, e, n) {
      function r(t) {
        t.after("prepForInsertion", function (t) {
          i.retinize(t);
        });
      }

      var i = n(142);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        t.after("prepForInsertion", function (t) {
          o.setSrcForImgs(t, this.sandbox.width, i.sync);
        }), t.after("resize", function () {
          o.setSrcForImgs(this.el, this.sandbox.width, i.write);
        });
      }

      var i = n(37),
          o = n(142);
      t.exports = r;
    }, function (t, e) {
      function n(t) {
        t.after("render", function () {
          var t = this.el.getAttribute(r);
          t && this.sandbox.setTitle && this.sandbox.setTitle(t);
        });
      }

      var r = "data-iframe-title";
      t.exports = n;
    }, function (t, e, n) {
      function r(t) {
        return t.every(a.isInt);
      }

      function i(t) {
        var e = t.map(function (t) {
          return {
            size: +t,
            className: u + t
          };
        }).sort(function (t, e) {
          return t.size - e.size;
        });
        return e.unshift({
          size: 0,
          className: c
        }), e;
      }

      function o(t) {
        t.params({
          breakpoints: {
            required: !0,
            validate: r,
            transform: i
          }
        }), t.define("getClassForWidth", function (t) {
          var e, n, r;

          for (n = this.params.breakpoints.length - 1; n >= 0; n--) {
            if (r = this.params.breakpoints[n], t > r.size) {
              e = r.className;
              break;
            }
          }

          return e;
        }), t.after("initialize", function () {
          this.allBreakpoints = this.params.breakpoints.map(function (t) {
            return t.className;
          });
        }), t.define("recalculateBreakpoints", function () {
          var t = this.getClassForWidth(this.sandbox.width);
          return t && this.sandbox.hasRootClass(t) ? s.resolve() : s.all([this.sandbox.removeRootClass(this.allBreakpoints), this.sandbox.addRootClass(t)]);
        }), t.after("render", function () {
          return this.recalculateBreakpoints();
        }), t.after("resize", function () {
          return this.recalculateBreakpoints();
        });
      }

      var s = n(2),
          a = n(27),
          u = "env-bp-",
          c = u + "min";
      t.exports = o;
    }, function (t, e, n) {
      function r(t) {
        t.selectors({
          clickToOpen: ".js-clickToOpenTarget"
        }), t.define("shouldOpenTarget", function (t) {
          var e = i.closest("A", t.target, this.el),
              n = i.closest("BUTTON", t.target, this.el),
              r = this.sandbox.hasSelectedText();
          return !e && !n && !r;
        }), t.define("openTarget", function (t, e) {
          var n = e && e.getAttribute(l),
              r = {
            twcamp: this.params.productName,
            twterm: this.params.id,
            twcon: e.getAttribute("data-twcon")
          };
          return n ? a.getActiveExperimentDataString().then(function (e) {
            r.twgr = e, o(n, r), this.scribeOpenClick(t);
          }.bind(this)).catch(function () {
            o(n, r), this.scribeOpenClick(t);
          }.bind(this)) : d.resolve();
        }), t.define("attemptToOpenTarget", function (t, e) {
          return this.shouldOpenTarget(t) ? this.openTarget(t, e) : d.resolve();
        }), t.define("scribeOpenClick", function (t) {
          var e = u.extractTermsFromDOM(t.target),
              n = {
            associations: u.formatTweetAssociation(e)
          },
              r = {
            element: "chrome",
            action: "click"
          },
              i = c.aug({}, r, e);
          this.scribe(i, n);
        }), t.after("render", function () {
          this.on("click", "clickToOpen", this.attemptToOpenTarget);
        });
      }

      var i = n(22),
          o = n(151),
          s = n(93),
          a = n(75),
          u = n(52),
          c = n(12),
          d = n(2),
          l = "data-click-to-open-target";
      t.exports = s.couple(n(106), r);
    }, function (t, e, n) {
      function r(t, e) {
        s.isTwitterURL(t) && (t = o(t, e)), i.open(t);
      }

      var i = n(7),
          o = n(105),
          s = n(25);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        t.params({
          productName: {
            required: !0
          },
          dataSource: {
            required: !1
          },
          related: {
            required: !1
          },
          partner: {
            fallback: d(o.val, o, "partner")
          }
        }), t.selectors({
          timeline: ".timeline",
          tweetIdInfo: ".js-tweetIdInfo"
        }), t.define("injectWebIntentParams", function (t) {
          var e = i.closest(this.selectors.timeline, t, this.el),
              n = i.closest(this.selectors.tweetIdInfo, t, this.el);
          t.getAttribute(l) || (t.setAttribute(l, !0), t.href = u.url(t.href, {
            tw_w: this.params.dataSource && this.params.dataSource.id,
            tw_i: n && n.getAttribute("data-tweet-id"),
            tw_p: this.params.productName,
            related: this.params.related,
            partner: this.params.partner,
            query: e && e.getAttribute("data-search-query"),
            profile_id: e && e.getAttribute("data-profile-id"),
            original_referer: a.rootDocumentLocation()
          }));
        }), t.after("render", function () {
          this.on("click", "A", function (t, e) {
            c.isIntentURL(e.href) && (this.injectWebIntentParams(e), s.open(e.href, this.sandbox.sandboxEl, t));
          });
        });
      }

      var i = n(22),
          o = n(42),
          s = n(24),
          a = n(48),
          u = n(26),
          c = n(25),
          d = n(15),
          l = "data-url-params-injected";
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        t.before("render", function () {
          i.ios() && this.sandbox.addRootClass("env-ios"), i.ie9() && this.sandbox.addRootClass("ie9"), i.touch() && this.sandbox.addRootClass("is-touch");
        });
      }

      var i = n(8);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        t.params({
          pageForAudienceImpression: {
            required: !0
          }
        }), t.before("hydrate", function () {
          i.scribeAudienceImpression(this.params.pageForAudienceImpression);
        });
      }

      var i = n(155);
      t.exports = r;
    }, function (t, e, n) {
      function r() {
        return d.formatGenericEventData("syndicated_impression", {});
      }

      function i() {
        u("tweet");
      }

      function o() {
        u("timeline");
      }

      function s() {
        u("video");
      }

      function a() {
        u("partnertweet");
      }

      function u(t) {
        l.isHostPageSensitive() || f[t] || (f[t] = !0, c.scribe(d.formatClientEventNamespace({
          page: t,
          action: "impression"
        }), r(), d.AUDIENCE_ENDPOINT));
      }

      var c = n(73),
          d = n(52),
          l = n(50),
          f = {};
      t.exports = {
        scribeAudienceImpression: u,
        scribePartnerTweetAudienceImpression: a,
        scribeTweetAudienceImpression: i,
        scribeTimelineAudienceImpression: o,
        scribeVideoAudienceImpression: s
      };
    }, function (t, e, n) {
      function r(t) {
        var e = {
          action: "dimensions"
        },
            n = new o(s);
        t.after("show", function () {
          var t, r, i;
          n.nextBoolean() && (t = this.sandbox.width, r = this.sandbox.height, i = {
            widget_width: t,
            widget_height: r
          }, this.scribe(e, i));
        });
      }

      var i = n(93),
          o = n(157),
          s = 1;
      t.exports = i.couple(n(106), r);
    }, function (t, e) {
      function n(t) {
        this.percentage = t;
      }

      n.prototype.nextBoolean = function () {
        return 100 * Math.random() < this.percentage;
      }, t.exports = n;
    },, function (t, e, n) {
      function r(t) {
        var e = {
          transparent: !1,
          hideBorder: !1,
          hideHeader: !1,
          hideFooter: !1,
          hideScrollBar: !1
        };
        return t = t || "", i.contains(t, "transparent") && (e.transparent = !0), i.contains(t, "noborders") && (e.hideBorder = !0), i.contains(t, "noheader") && (e.hideHeader = !0), i.contains(t, "nofooter") && (e.hideFooter = !0), i.contains(t, "noscrollbar") && (e.hideScrollBar = !0), e;
      }

      var i = n(12);
      t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        var e = u(t),
            n = {
          momentId: a.momentId(t.href),
          chrome: t.getAttribute("data-chrome"),
          limit: t.getAttribute("data-limit")
        };
        return s.forIn(n, function (t, n) {
          var r = e[t];
          e[t] = o.hasValue(r) ? r : n;
        }), e;
      }

      function i(t) {
        var e = c(t, l);
        return e.map(function (t) {
          return d(r(t), t.parentNode, t);
        });
      }

      var o = n(27),
          s = n(12),
          a = n(25),
          u = n(85),
          c = n(87)(),
          d = n(161),
          l = "a.twitter-moment";
      t.exports = i;
    }, function (t, e, n) {
      function r(t, e, n) {
        return new i(o, s, "twitter-moment", t, e, n);
      }

      var i = n(90),
          o = n(162),
          s = n(55);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        var r = new i();
        return n.e(4, function (i, o) {
          var s;
          if (i) return r.reject(i);

          try {
            s = n(163), r.resolve(new s(t, e));
          } catch (t) {
            r.reject(t);
          }
        }), r.promise;
      }

      var i = n(1);
      t.exports = r;
    },,,,, function (t, e, n) {
      function r(t, e, n) {
        var r,
            i = new u(),
            o = a(t, n);
        if (o) return (r = d.createPlayerForTweet(o.element, e, o.options)) ? (i.resolve(r), i.promise) : i.reject(new Error("unable to create tweet video player"));
      }

      function i(t, e, n) {
        var r,
            i = new u(),
            o = a(t, n);
        return o ? (r = d.createPlayerForLiveVideo(o.element, e, o.options), r.on("ready", function () {
          r.playPreview(), i.resolve(r);
        }), i.promise) : i.reject(new Error("unable to initialize event video player"));
      }

      function o(t) {
        var e = t.querySelector(".wvp-player-container"),
            n = e && d.findPlayerForElement(e);
        if (n) return n.teardown();
      }

      function s(t) {
        return d.findPlayerForElement(t);
      }

      function a(t, e) {
        var n, r;
        if (e = e || {}, r = {
          scribeContext: e.scribeContext || {
            client: "tfw"
          },
          languageCode: e.languageCode,
          hideControls: e.hideControls || !1,
          addTwitterBranding: e.addBranding || !1,
          widgetOrigin: e.widgetOrigin,
          borderRadius: e.borderRadius,
          autoPlay: e.autoPlay
        }, n = c(t, ".wvp-player-container"), n.length > 0) return l && d.setBaseUrl(l), {
          element: n[0],
          options: r
        };
      }

      var u = n(1),
          c = n(88),
          d = n(168),
          l = null;
      t.exports = {
        insertForTweet: r,
        insertForEvent: i,
        remove: o,
        find: s
      };
    }, function (t, e, n) {
      var r;
      !function (i, o) {
        r = function () {
          return i.TwitterVideoPlayer = o();
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
      }(this, function () {
        function t(t) {
          if (t && t.data && t.data.params && t.data.params[0]) {
            var e = t.data.params[0],
                n = t.data.id;

            if (e && e.context && "TwitterVideoPlayer" === e.context) {
              var r = e.playerId;
              delete e.playerId, delete e.context;
              var i = a[r];
              i && i.processMessage(t.data.method, e, n);
            }
          }
        }

        function e(t, e, n) {
          var r = Object.keys(n).filter(function (t) {
            return null != n[t];
          }).map(function (t) {
            var e = n[t];
            return encodeURIComponent(t) + "=" + encodeURIComponent(e);
          }).join("&");
          return r && (r = "?" + r), t + e + r;
        }

        function n(n, i, o, u, c) {
          var d = n.ownerDocument,
              l = d.defaultView;
          l.addEventListener("message", t), this.playerId = s++;
          var f = {
            embed_source: "clientlib",
            player_id: this.playerId,
            rpc_init: 1,
            autoplay: u.autoPlay
          };

          if (this.scribeParams = {}, this.scribeParams.suppressScribing = u && u.suppressScribing, !this.scribeParams.suppressScribing) {
            if (!u.scribeContext) throw "video_player: Missing scribe context";
            if (!u.scribeContext.client) throw "video_player: Scribe context missing client property";
            this.scribeParams.client = u.scribeContext.client, this.scribeParams.page = u.scribeContext.page, this.scribeParams.section = u.scribeContext.section, this.scribeParams.component = u.scribeContext.component;
          }

          this.scribeParams.debugScribe = u && u.scribeContext && u.scribeContext.debugScribing, this.scribeParams.scribeUrl = u && u.scribeContext && u.scribeContext.scribeUrl, this.promotedLogParams = u.promotedContext, this.adRequestCallback = u.adRequestCallback, u.languageCode && (f.language_code = u.languageCode), "tfw" === this.scribeParams.client && (f.use_syndication_guest_id = !0), u.autoPlay && (f.autoplay = 1);
          var h = e(r, i, f);
          return this.videoIframe = document.createElement("iframe"), this.videoIframe.setAttribute("src", h), this.videoIframe.setAttribute("allowfullscreen", ""), this.videoIframe.setAttribute("allow", "autoplay; fullscreen"), this.videoIframe.setAttribute("id", o), this.videoIframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"), this.domElement = n, this.domElement.appendChild(this.videoIframe), a[this.playerId] = this, this.eventCallbacks = {}, this.emitEvent = function (t, e) {
            var n = this.eventCallbacks[t];
            "undefined" != typeof n && n.forEach(function (t) {
              t.apply(this.playerInterface, [e]);
            }.bind(this));
          }, this.jsonRpc = function (t) {
            var e = this.videoIframe.contentWindow;
            t.jsonrpc = "2.0", e && e.postMessage && e.postMessage(JSON.stringify(t), "*");
          }, this.jsonRpcCall = function (t, e) {
            this.jsonRpc({
              method: t,
              params: e
            });
          }, this.jsonRpcResult = function (t, e) {
            this.jsonRpc({
              result: t,
              id: e
            });
          }, this.processMessage = function (t, e, n) {
            switch (t) {
              case "requestPlayerConfig":
                this.jsonRpcResult({
                  scribeParams: this.scribeParams,
                  promotedLogParams: this.promotedLogParams,
                  squareCorners: u.squareCorners,
                  borderRadius: u.borderRadius,
                  hideControls: u.hideControls,
                  embedded: u.addTwitterBranding,
                  widgetOrigin: u.widgetOrigin,
                  ignoreFineGrainGeoblocking: u.ignoreFineGrainGeoblocking
                }, n);
                break;

              case "videoPlayerAdStart":
                this.emitEvent("adStart", e);
                break;

              case "videoPlayerAdEnd":
                this.emitEvent("adEnd", e);
                break;

              case "videoPlayerPlay":
                this.emitEvent("play", e);
                break;

              case "videoPlayerPause":
                this.emitEvent("pause", e);
                break;

              case "videoPlayerMute":
                this.emitEvent("mute", e);
                break;

              case "videoPlayerUnmute":
                this.emitEvent("unmute", e);
                break;

              case "videoPlayerPlaybackComplete":
                this.emitEvent("playbackComplete", e);
                break;

              case "videoPlayerReady":
                this.emitEvent("ready", e);
                break;

              case "videoView":
                this.emitEvent("view", e);
                break;

              case "debugLoggingEvent":
                this.emitEvent("logged", e);
                break;

              case "requestDynamicAd":
                "function" == typeof this.adRequestCallback ? this.jsonRpcResult(this.adRequestCallback(), n) : this.jsonRpcResult({}, n);
                break;

              case "videoPlayerError":
                e && "NO_COOKIES_ERROR" === e.error_category ? this.emitEvent("noCookiesError", e) : e && "GEOBLOCK_ERROR" === e.error_category && this.emitEvent("geoblockError", e);
            }
          }, this.playerInterface = {
            on: function (t, e) {
              return "undefined" == typeof this.eventCallbacks[t] && (this.eventCallbacks[t] = []), this.eventCallbacks[t].push(e), this.playerInterface;
            }.bind(this),
            off: function (t, e) {
              if ("undefined" == typeof e) delete this.eventCallbacks[t];else {
                var n = this.eventCallbacks[t];

                if ("undefined" != typeof n) {
                  var r = n.indexOf(e);
                  r > -1 && n.splice(r, 1);
                }
              }
              return this.playerInterface;
            }.bind(this),
            play: function () {
              return this.jsonRpcCall("play"), this.playerInterface;
            }.bind(this),
            pause: function () {
              return this.jsonRpcCall("pause"), this.playerInterface;
            }.bind(this),
            mute: function () {
              return this.jsonRpcCall("mute"), this.playerInterface;
            }.bind(this),
            unmute: function () {
              return this.jsonRpcCall("unmute"), this.playerInterface;
            }.bind(this),
            playPreview: function () {
              return this.jsonRpcCall("autoPlayPreview"), this.playerInterface;
            }.bind(this),
            pausePreview: function () {
              return this.jsonRpcCall("autoPlayPreviewStop"), this.playerInterface;
            }.bind(this),
            updatePosition: function (t) {
              return this.jsonRpcCall("updatePosition", [t]), this.playerInterface;
            }.bind(this),
            updateLayoutBreakpoint: function (t) {
              return this.jsonRpcCall("updateLayoutBreakpoint", [t]), this.playerInterface;
            }.bind(this),
            enterFullScreen: function () {
              return this.jsonRpcCall("enterFullScreen"), this.playerInterface;
            }.bind(this),
            exitFullScreen: function () {
              return this.jsonRpcCall("exitFullScreen"), this.playerInterface;
            }.bind(this),
            teardown: function () {
              this.eventCallbacks = {}, n.removeChild(this.videoIframe), this.videoIframe = void 0, delete a[this.playerId];
            }.bind(this)
          }, this.playerInterface;
        }

        var r = "https://twitter.com",
            i = /^https?:\/\/([a-zA-Z0-9]+\.)*twitter.com(:\d+)?$/,
            o = {
          suppressScribing: !1,
          squareCorners: !1,
          hideControls: !1,
          addTwitterBranding: !1
        },
            s = 0,
            a = {};
        return {
          setBaseUrl: function setBaseUrl(t) {
            i.test(t) ? r = t : window.console.error("newBaseUrl " + t + " not allowed");
          },
          createPlayerForTweet: function createPlayerForTweet(t, e, r) {
            var i = "/i/videos/tweet/" + e,
                s = "player_tweet_" + e;
            return new n(t, i, s, r || o);
          },
          createPlayerForDm: function createPlayerForDm(t, e, r) {
            var i = "/i/videos/dm/" + e,
                s = "player_dm_" + e;
            return new n(t, i, s, r || o);
          },
          createPlayerForLiveVideo: function createPlayerForLiveVideo(t, e, r) {
            var i = "/i/videos/live_video/" + e,
                s = "player_live_video_" + e;
            return new n(t, i, s, r || o);
          },
          findPlayerForElement: function findPlayerForElement(t) {
            for (var e in a) {
              if (a.hasOwnProperty(e)) {
                var n = a[e];
                if (n && n.domElement === t) return n.playerInterface;
              }
            }

            return null;
          }
        };
      });
    }, function (t, e, n) {
      function r(t) {
        t.selectors({
          inViewportMarker: ".js-inViewportScribingTarget"
        }), t.define("scribeInViewportSeen", function (t, e) {
          var n = i.extractTermsFromDOM(t);
          n.action = "seen", this.scribe(n, e, s.version);
        }), t.after("show", function () {
          var t = this.selectors.inViewportMarker,
              e = this.select(t);
          e.forEach(function (t) {
            t && a.inViewportOnce(t, this.sandbox.sandboxEl, function () {
              this.scribeInViewportSeen(t, this.scribeItems());
            }.bind(this));
          }, this);
        });
      }

      var i = n(52),
          o = n(93),
          s = n(54),
          a = n(170);
      t.exports = o.couple(n(106), r);
    }, function (t, e, n) {
      var r = n(171),
          i = n(69),
          o = n(172),
          s = n(7),
          a = n(8),
          u = 50,
          c = function c(t) {
        return (s.requestIdleCallback || s.requestAnimationFrame || function (t) {
          t();
        })(t);
      },
          d = function d() {
        this.observers = [];
      };

      d.prototype._register = function (t, e, n) {
        var i,
            u = this;
        return a.hasIntersectionObserverSupport() ? (i = new s.IntersectionObserver(function (t) {
          t.forEach(function (t) {
            t.intersectionRatio >= 1 && (c(n), u._unregister(i));
          });
        }, {
          threshold: 1
        }), i.observe(t), i) : (i = {
          update: function update(o, s) {
            r(t, {
              viewportWidth: o,
              viewportHeight: s,
              sandboxEl: e
            }) && (n(), u._unregister(i));
          }
        }, this.observers.push(i), 1 === this.observers.length && (this.unlisten = o.addScrollListener(this._onViewportChange.bind(this))), this._onViewportChange(), i);
      }, d.prototype._unregister = function (t) {
        var e;
        a.hasIntersectionObserverSupport() && t instanceof s.IntersectionObserver ? t.disconnect() : (e = this.observers.indexOf(t), e > -1 && (this.observers.splice(e, 1), 0 === this.observers.length && this.unlisten && this.unlisten()));
      }, d.prototype._onViewportChange = function () {
        i(c(function () {
          this._notify(o.getWidth(), o.getHeight());
        }.bind(this)), u, this);
      }, d.prototype._notify = function (t, e) {
        this.observers.forEach(function (n) {
          n.update(t, e);
        });
      }, d.prototype.inViewportOnce = function (t, e, n) {
        return this._register(t, e, n);
      }, t.exports = new d();
    }, function (t, e, n) {
      function r(t, e) {
        var n, r, s, a;
        return e = e || {}, r = e.viewportWidth || o.innerWidth, n = e.viewportHeight || o.innerHeight, s = t.getBoundingClientRect(), t.ownerDocument !== i && e.sandboxEl && (a = e.sandboxEl.getBoundingClientRect(), s = {
          top: s.top + a.top,
          bottom: s.bottom + a.top,
          left: s.left + a.left,
          right: s.right + a.left
        }), s.top >= 0 && s.left >= 0 && s.bottom <= n && s.right <= r;
      }

      var i = n(9),
          o = n(7);
      t.exports = r;
    }, function (t, e, n) {
      var r = n(7),
          i = {
        _addListener: function _addListener(t, e) {
          var n,
              i = function i() {
            e();
          };

          return r.addEventListener(t, i), n = function n() {
            r.removeEventListener(t, i);
          };
        },
        addScrollListener: function addScrollListener(t) {
          return this._addListener("scroll", t);
        },
        getHeight: function getHeight() {
          return r.innerHeight;
        },
        getWidth: function getWidth() {
          return r.innerWidth;
        }
      };
      t.exports = i;
    },, function (t, e, n) {
      function r(t) {
        var e = s(t),
            n = t.getAttribute("href"),
            r = t.getAttribute("data-size"),
            i = d.exec(n)[1];
        return o.aug(e, {
          username: i,
          size: r
        });
      }

      function i(t) {
        var e = a(t, c);
        return e.map(function (t) {
          return u(r(t), t.parentNode, t);
        });
      }

      var o = n(12),
          s = n(85),
          a = n(87)(),
          u = n(175),
          c = "a.periscope-on-air",
          d = /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
      t.exports = i;
    }, function (t, e, n) {
      function r(t, e, n) {
        return new i(o, s, "periscope-on-air", t, e, n);
      }

      var i = n(90),
          o = n(176),
          s = n(55);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        var r = new i();
        return n.e(5, function (i, o) {
          var s;
          if (i) return r.reject(i);

          try {
            s = n(177), r.resolve(new s(t, e));
          } catch (t) {
            r.reject(t);
          }
        }), r.promise;
      }

      var i = n(1);
      t.exports = r;
    },,,, function (t, e, n) {
      function r(t) {
        var e = u(t),
            n = t.getAttribute("data-show-replies"),
            r = {
          isPreconfigured: !!t.getAttribute("data-widget-id"),
          chrome: t.getAttribute("data-chrome"),
          tweetLimit: t.getAttribute("data-tweet-limit"),
          ariaLive: t.getAttribute("data-aria-polite"),
          theme: t.getAttribute("data-theme"),
          linkColor: t.getAttribute("data-link-color"),
          borderColor: t.getAttribute("data-border-color"),
          showReplies: n ? o.asBoolean(n) : null,
          profileScreenName: t.getAttribute("data-screen-name"),
          profileUserId: t.getAttribute("data-user-id"),
          favoritesScreenName: t.getAttribute("data-favorites-screen-name"),
          favoritesUserId: t.getAttribute("data-favorites-user-id"),
          likesScreenName: t.getAttribute("data-likes-screen-name"),
          likesUserId: t.getAttribute("data-likes-user-id"),
          listOwnerScreenName: t.getAttribute("data-list-owner-screen-name"),
          listOwnerUserId: t.getAttribute("data-list-owner-id"),
          listId: t.getAttribute("data-list-id"),
          listSlug: t.getAttribute("data-list-slug"),
          customTimelineId: t.getAttribute("data-custom-timeline-id"),
          staticContent: t.getAttribute("data-static-content"),
          url: t.href
        };
        return r.isPreconfigured && (l.isSearchUrl(r.url) ? f.publicError(p, t) : f.publicLog(m, t)), r = s.aug(r, e), r.dataSource = a(r), r.id = r.dataSource && r.dataSource.id, r;
      }

      function i(t) {
        var e = c(t, h);
        return e.map(function (t) {
          return d(r(t), t.parentNode, t);
        });
      }

      var o = n(27),
          s = n(12),
          a = n(181),
          u = n(85),
          c = n(87)(),
          d = n(194),
          l = n(25),
          f = n(10),
          h = "a.twitter-timeline,div.twitter-timeline",
          p = "Embedded Search timelines have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.",
          m = "You may have been effected by an update to settings in embedded timelines. See https://twittercommunity.com/t/deprecating-widget-settings/102295.";
      t.exports = i;
    }, function (t, e, n) {
      function r(t) {
        var e, n;
        return e = (t.sourceType + "").toLowerCase(), n = f[e], n ? new n(t) : null;
      }

      function i(t) {
        return s(h, function (e) {
          try {
            return new e(t);
          } catch (t) {}
        });
      }

      function o(t) {
        return t ? r(t) || i(t) : null;
      }

      var s = n(143),
          a = n(182),
          u = n(186),
          c = n(188),
          d = n(190),
          l = n(192),
          f = {
        collection: a,
        event: u,
        likes: c,
        list: d,
        profile: l,
        url: i
      },
          h = [l, c, a, d, u];
      t.exports = o;
    }, function (t, e, n) {
      var r = n(183);
      t.exports = r.build([n(184), n(185)]);
    }, function (t, e, n) {
      var r = n(57),
          i = n(61),
          o = n(15);
      r = Object.create(r), r.build = o(r.build, null, i), t.exports = r;
    }, function (t, e, n) {
      function r(t) {
        if (!t || !t.headers) throw new Error("unexpected response schema");
        return {
          html: t.body,
          config: t.config,
          pollInterval: 1e3 * parseInt(t.headers.xPolling, 10) || null,
          maxCursorPosition: t.headers.maxPosition,
          minCursorPosition: t.headers.minPosition
        };
      }

      function i(t) {
        if (t && t.headers) throw new Error(t.headers.status);
        throw t instanceof Error ? t : new Error(t);
      }

      function o(t) {
        t.params({
          instanceId: {
            required: !0,
            fallback: p.deterministic
          },
          lang: {
            required: !0,
            transform: d.matchLanguage,
            fallback: "en"
          },
          tweetLimit: {
            transform: h.asInt
          }
        }), t.defineProperty("endpoint", {
          get: function get() {
            throw new Error("endpoint not specified");
          }
        }), t.defineProperty("pollEndpoint", {
          get: function get() {
            return this.endpoint;
          }
        }), t.define("cbId", function (t) {
          var e = t ? "_new" : "_old";
          return "tl_" + this.params.instanceId + "_" + this.id + e;
        }), t.define("queryParams", function () {
          return {
            lang: this.params.lang,
            tz: l.getTimezoneOffset(),
            t: s(),
            domain: c.host,
            tweet_limit: this.params.tweetLimit,
            dnt: f.enabled()
          };
        }), t.define("fetch", function () {
          return a.fetch(this.endpoint, this.queryParams(), u, this.cbId()).then(r, i);
        }), t.define("poll", function (t, e) {
          var n, o;
          return t = t || {}, n = {
            since_id: t.sinceId,
            max_id: t.maxId,
            min_position: t.minPosition,
            max_position: t.maxPosition
          }, o = m.aug(this.queryParams(), n), a.fetch(this.pollEndpoint, o, u, this.cbId(e)).then(r, i);
        });
      }

      var s = n(139),
          a = n(136),
          u = n(137),
          c = n(11),
          d = n(99),
          l = n(138),
          f = n(47),
          h = n(27),
          p = n(30),
          m = n(12);
      t.exports = o;
    }, function (t, e, n) {
      function r(t, e) {
        return o.collectionId(t) || e;
      }

      function i(t) {
        t.params({
          id: {},
          url: {}
        }), t.overrideProperty("id", {
          get: function get() {
            var t = r(this.params.url, this.params.id);
            return u + t;
          }
        }), t.overrideProperty("endpoint", {
          get: function get() {
            return a.timeline(["collection"]);
          }
        }), t.around("queryParams", function (t) {
          return s.aug(t(), {
            collection_id: r(this.params.url, this.params.id)
          });
        }), t.before("initialize", function () {
          if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required");
        });
      }

      var o = n(25),
          s = n(12),
          a = n(78),
          u = "collection:";
      t.exports = i;
    }, function (t, e, n) {
      var r = n(183);
      t.exports = r.build([n(184), n(187)]);
    }, function (t, e, n) {
      function r(t, e) {
        return o.eventId(t) || e;
      }

      function i(t) {
        t.params({
          id: {},
          url: {}
        }), t.overrideProperty("id", {
          get: function get() {
            var t = r(this.params.url, this.params.id);
            return u + t;
          }
        }), t.overrideProperty("endpoint", {
          get: function get() {
            return a.timeline(["event"]);
          }
        }), t.around("queryParams", function (t) {
          return s.aug(t(), {
            event_id: r(this.params.url, this.params.id)
          });
        }), t.before("initialize", function () {
          if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required");
        });
      }

      var o = n(25),
          s = n(12),
          a = n(78),
          u = "event:";
      t.exports = i;
    }, function (t, e, n) {
      var r = n(183);
      t.exports = r.build([n(184), n(189)]);
    }, function (t, e, n) {
      function r(t) {
        return o.likesScreenName(t.url) || t.screenName;
      }

      function i(t) {
        t.params({
          screenName: {},
          userId: {},
          url: {}
        }), t.overrideProperty("id", {
          get: function get() {
            var t = r(this.params) || this.params.userId;
            return u + t;
          }
        }), t.overrideProperty("endpoint", {
          get: function get() {
            return a.timeline(["likes"]);
          }
        }), t.define("_getLikesQueryParam", function () {
          var t = r(this.params);
          return t ? {
            screen_name: t
          } : {
            user_id: this.params.userId
          };
        }), t.around("queryParams", function (t) {
          return s.aug(t(), this._getLikesQueryParam());
        }), t.before("initialize", function () {
          if (!r(this.params) && !this.params.userId) throw new Error("screen name or user id is required");
        });
      }

      var o = n(25),
          s = n(12),
          a = n(78),
          u = "likes:";
      t.exports = i;
    }, function (t, e, n) {
      var r = n(183);
      t.exports = r.build([n(184), n(191)]);
    }, function (t, e, n) {
      function r(t) {
        var e = o.listScreenNameAndSlug(t.url) || t;
        return s.compact({
          screen_name: e.ownerScreenName,
          user_id: e.ownerUserId,
          list_slug: e.slug
        });
      }

      function i(t) {
        t.params({
          id: {},
          ownerScreenName: {},
          ownerUserId: {},
          slug: {},
          url: {}
        }), t.overrideProperty("id", {
          get: function get() {
            var t, e, n;
            return this.params.id ? u + this.params.id : (t = r(this.params), e = t && t.list_slug.replace(/-/g, "_"), n = t && (t.screen_name || t.user_id), u + (n + ":" + e));
          }
        }), t.overrideProperty("endpoint", {
          get: function get() {
            return a.timeline(["list"]);
          }
        }), t.define("_getListQueryParam", function () {
          return this.params.id ? {
            list_id: this.params.id
          } : r(this.params);
        }), t.around("queryParams", function (t) {
          return s.aug(t(), this._getListQueryParam());
        }), t.before("initialize", function () {
          var t = r(this.params);
          if (s.isEmptyObject(t) && !this.params.id) throw new Error("qualified slug or list id required");
        });
      }

      var o = n(25),
          s = n(12),
          a = n(78),
          u = "list:";
      t.exports = i;
    }, function (t, e, n) {
      var r = n(183);
      t.exports = r.build([n(184), n(193)]);
    }, function (t, e, n) {
      function r(t, e) {
        return o.screenName(t) || e;
      }

      function i(t) {
        t.params({
          showReplies: {
            fallback: !1,
            transform: s.asBoolean
          },
          screenName: {},
          userId: {},
          url: {}
        }), t.overrideProperty("id", {
          get: function get() {
            var t = r(this.params.url, this.params.screenName);
            return c + (t || this.params.userId);
          }
        }), t.overrideProperty("endpoint", {
          get: function get() {
            return u.timeline(["profile"]);
          }
        }), t.define("_getProfileQueryParam", function () {
          var t = r(this.params.url, this.params.screenName),
              e = t ? {
            screen_name: t
          } : {
            user_id: this.params.userId
          };
          return a.aug(e, {
            with_replies: this.params.showReplies ? "true" : "false"
          });
        }), t.around("queryParams", function (t) {
          return a.aug(t(), this._getProfileQueryParam());
        }), t.before("initialize", function () {
          var t = r(this.params.url, this.params.screenName);
          if (!t && !this.params.userId) throw new Error("screen name or user id is required");
        });
      }

      var o = n(25),
          s = n(27),
          a = n(12),
          u = n(78),
          c = "profile:";
      t.exports = i;
    }, function (t, e, n) {
      function r(t, e, n) {
        return new i(o, s, "twitter-timeline", t, e, n);
      }

      var i = n(90),
          o = n(195),
          s = n(55);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        var r = new i();
        return n.e(6, function (i, o) {
          var s;
          if (i) return r.reject(i);

          try {
            s = n(196), r.resolve(new s(t, e));
          } catch (t) {
            r.reject(t);
          }
        }), r.promise;
      }

      var i = n(1);
      t.exports = r;
    },,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
      function r(t) {
        var e = u(t),
            n = t.getElementsByTagName("A"),
            r = n && n[n.length - 1],
            i = r && s.status(r.href),
            c = t.getAttribute("data-conversation"),
            d = "none" == c || "hidden" == c || o.present(t, "tw-hide-thread"),
            l = t.getAttribute("data-cards"),
            h = "none" == l || "hidden" == l || o.present(t, "tw-hide-media"),
            p = t.getAttribute("data-align") || t.getAttribute("align"),
            m = t.getAttribute("data-link-color"),
            v = t.getAttribute("data-theme");
        return !p && f.test(t.className) && (p = RegExp.$1), a.aug(e, {
          tweetId: i,
          hideThread: d,
          hideCard: h,
          align: p,
          linkColor: m,
          theme: v,
          id: i
        });
      }

      function i(t) {
        var e = c(t, l);
        return e.map(function (t) {
          return d(r(t), t.parentNode, t);
        });
      }

      var o = n(21),
          s = n(25),
          a = n(12),
          u = n(85),
          c = n(87)(),
          d = n(221),
          l = "blockquote.twitter-tweet, blockquote.twitter-video",
          f = /\btw-align-(left|right|center)\b/;
      t.exports = i;
    }, function (t, e, n) {
      function r(t, e, n) {
        return new i(o, s, "twitter-tweet", t, e, n);
      }

      var i = n(90),
          o = n(222),
          s = n(112);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        var r = new i();
        return n.e(7, function (i, o) {
          var s;
          if (i) return r.reject(i);

          try {
            s = n(223), r.resolve(new s(t, e));
          } catch (t) {
            r.reject(t);
          }
        }), r.promise;
      }

      var i = n(1);
      t.exports = r;
    },,,,,,,,,,,,,, function (t, e, n) {
      function r() {
        a++, i();
      }

      function i() {
        o && o.length === a && (s.emitter.trigger(s.ALL_WIDGETS_AND_IMAGES_LOADED, o), o = null);
      }

      var o,
          s = n(237),
          a = 0;
      s.emitter.bind(s.ALL_WIDGETS_RENDERED, function (t) {
        o = t.widgets, i();
      }), t.exports = {
        reportImagesLoadForAWidget: r
      };
    }, function (t, e, n) {
      var r = n(32),
          i = r.makeEmitter();
      t.exports = {
        emitter: i,
        START: "start",
        ALL_WIDGETS_RENDERED: "all_widgets_rendered",
        ALL_WIDGETS_AND_IMAGES_LOADED: "all_widgets_and_images_loaded"
      };
    },, function (t, e, n) {
      function r(t) {
        var e = a(t),
            n = {
          screenName: t.getAttribute("data-button-screen-name"),
          text: t.getAttribute("data-text"),
          type: t.getAttribute("data-type"),
          size: t.getAttribute("data-size"),
          url: t.getAttribute("data-url"),
          hashtags: t.getAttribute("data-hashtags"),
          via: t.getAttribute("data-via"),
          buttonHashtag: t.getAttribute("data-button-hashtag")
        };
        return s.forIn(n, function (t, n) {
          var r = e[t];
          e[t] = d.hasValue(r) ? r : n;
        }), e.screenName = e.screenName || e.screen_name, e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag, o.present(t, f) && (e.type = "hashtag"), o.present(t, h) && (e.type = "mention"), e;
      }

      function i(t) {
        var e = u(t, l);
        return e.map(function (t) {
          return c(r(t), t.parentNode, t);
        });
      }

      var o = n(21),
          s = n(12),
          a = n(85),
          u = n(87)(),
          c = n(240),
          d = n(27),
          l = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button",
          f = "twitter-hashtag-button",
          h = "twitter-mention-button";
      t.exports = i;
    }, function (t, e, n) {
      function r(t, e, n) {
        var r = t && t.type || "share",
            a = "hashtag" == r ? "twitter-hashtag-button" : "mention" == r ? "twitter-mention-button" : "twitter-share-button";
        return new i(o, s, a, t, e, n);
      }

      var i = n(90),
          o = n(241),
          s = n(123);
      t.exports = r;
    }, function (t, e, n) {
      function r(t, e) {
        var r = new i();
        return n.e(2, function (i, o) {
          var s;
          if (i) return r.reject(i);

          try {
            s = n(242), r.resolve(new s(t, e));
          } catch (t) {
            r.reject(t);
          }
        }), r.promise;
      }

      var i = n(1);
      t.exports = r;
    },,, function (t, e, n) {
      var r = n(12);
      t.exports = r.aug({}, n(245), n(247), n(248), n(249), n(250), n(251), n(252), n(253));
    }, function (t, e, n) {
      var r = n(89),
          i = n(246),
          o = i(["userId"], {}, r);
      t.exports = {
        createDMButton: o
      };
    }, function (t, e, n) {
      function r(t, e, n) {
        var r;
        return t = t || [], e = e || {}, r = "ƒ(" + t.join(", ") + ", target, [options]);", function () {
          var c,
              d,
              l,
              f,
              h = Array.prototype.slice.apply(arguments, [0, t.length]),
              p = Array.prototype.slice.apply(arguments, [t.length]);
          return p.forEach(function (t) {
            if (t) return t.nodeType === Node.ELEMENT_NODE ? void (l = t) : u.isType("function", t) ? void (c = t) : void (u.isType("object", t) && (d = t));
          }), h.length !== t.length || 0 === p.length ? (c && u.async(function () {
            c(!1);
          }), i.reject(new Error("Not enough parameters. Expected: " + r))) : l ? (d = u.aug({}, d || {}, e), t.forEach(function (t) {
            d[t] = h.shift();
          }), a.asBoolean(d.dnt) && s.setOn(), f = o.addWidget(n(d, l)), c && f.then(c, function () {
            c(!1);
          }), f) : (c && u.async(function () {
            c(!1);
          }), i.reject(new Error("No target element specified. Expected: " + r)));
        };
      }

      var i = n(2),
          o = n(35),
          s = n(47),
          a = n(27),
          u = n(12);
      t.exports = r;
    }, function (t, e, n) {
      var r = n(117),
          i = n(246),
          o = i(["screenName"], {}, r);
      t.exports = {
        createFollowButton: o
      };
    }, function (t, e, n) {
      var r = n(131),
          i = n(246),
          o = i(["collectionId"], {}, r);
      t.exports = {
        createGridFromCollection: o
      };
    }, function (t, e, n) {
      var r = n(161),
          i = n(246),
          o = i(["momentId"], {}, r);
      t.exports = {
        createMoment: o
      };
    }, function (t, e, n) {
      var r = n(175),
          i = n(246),
          o = i(["username"], {}, r);
      t.exports = {
        createPeriscopeOnAirButton: o
      };
    }, function (t, e, n) {
      function r(t) {
        var e,
            n = a.toRealArray(arguments).slice(1);
        return u.isString(t) || u.isNumber(t) ? h.reject("Embedded timelines with widget settings have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.") : a.isObject(t) ? (t = t || {}, n.forEach(function (t) {
          a.isType("object", t) && (e = t, i(e));
        }), e || (e = {}, n.push(e)), t.lang = e.lang, t.tweetLimit = e.tweetLimit, t.showReplies = e.showReplies, e.dataSource = c(t), f.apply(this, n)) : h.reject("data source must be an object.");
      }

      function i(t) {
        t.ariaLive = t.ariaPolite;
      }

      var o = n(11),
          s = n(25),
          a = n(12),
          u = n(27),
          c = n(181),
          d = n(194),
          l = n(246),
          f = l([], {}, d),
          h = n(2),
          p = {
        createTimeline: r
      };
      s.isTwitterURL(o.href) && (p.createTimelinePreview = function (t, e, n) {
        var r = {
          previewParams: t,
          useLegacyDefaults: !0,
          isPreviewTimeline: !0
        };
        return r.dataSource = c(r), f(e, r, n);
      }), t.exports = p;
    }, function (t, e, n) {
      function r(t) {
        return function () {
          return i.toRealArray(arguments).slice(1).forEach(function (t) {
            i.isType("object", t) && (t.hideCard = "none" == t.cards || "hidden" == t.cards, t.hideThread = "none" == t.conversation || "hidden" == t.conversation);
          }), t.apply(this, arguments);
        };
      }

      var i = n(12),
          o = n(221),
          s = n(246),
          a = r(s(["tweetId"], {}, o));
      t.exports = {
        createTweet: a,
        createTweetEmbed: a,
        createVideo: a
      };
    }, function (t, e, n) {
      function r(t) {
        return function () {
          return i.toRealArray(arguments).slice(1).forEach(function (t) {
            i.isType("object", t) && (t.screenName = t.screenName || t.screen_name, t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag);
          }), t.apply(this, arguments);
        };
      }

      var i = n(12),
          o = n(240),
          s = n(246),
          a = s(["url"], {
        type: "share"
      }, o),
          u = s(["buttonHashtag"], {
        type: "hashtag"
      }, o),
          c = s(["screenName"], {
        type: "mention"
      }, o);
      t.exports = {
        createShareButton: r(a),
        createHashtagButton: r(u),
        createMentionButton: r(c)
      };
    }, function (t, e, n) {
      function r() {
        var t, e;

        for (c = 1, t = 0, e = d.length; t < e; t++) {
          d[t]();
        }
      }

      var _i,
          _o,
          s,
          a = n(9),
          u = n(7),
          c = 0,
          d = [],
          l = !1,
          f = a.createElement("a");

      /^loade|c/.test(a.readyState) && (c = 1), a.addEventListener && a.addEventListener("DOMContentLoaded", _o = function o() {
        a.removeEventListener("DOMContentLoaded", _o, l), r();
      }, l), f.doScroll && a.attachEvent("onreadystatechange", _i = function i() {
        /^c/.test(a.readyState) && (a.detachEvent("onreadystatechange", _i), r());
      }), s = f.doScroll ? function (t) {
        u.self != u.top ? c ? t() : d.push(t) : !function () {
          try {
            f.doScroll("left");
          } catch (e) {
            return setTimeout(function () {
              s(t);
            }, 50);
          }

          t();
        }();
      } : function (t) {
        c ? t() : d.push(t);
      }, t.exports = s;
    }, function (t, e, n) {
      var r = n(54),
          i = n(18);

      t.exports = function () {
        i.set("buildVersion", r.version);
      };
    }, function (t, e, n) {
      n(257), n(236), n(261);
    }, function (t, e, n) {
      var r = n(258),
          i = n(237),
          o = n(260),
          s = new r();
      i.emitter.bind(i.START, function () {
        s.start();
      }), i.emitter.bind(i.ALL_WIDGETS_RENDERED, function () {
        s.end(), o(s.duration(), {
          action: "render"
        });
      });
    }, function (t, e, n) {
      function r() {}

      var i = n(259);
      r.prototype.start = function () {
        this._startTime = i();
      }, r.prototype.end = function () {
        this._duration = i() - this._startTime;
      }, r.prototype.duration = function () {
        return this._duration;
      }, t.exports = r;
    }, function (t, e, n) {
      var r = n(7);

      t.exports = function () {
        return r.performance && r.performance.now ? r.performance.now() : Date.now();
      };
    }, function (t, e, n) {
      var r = n(43),
          i = n(48),
          o = n(12);

      t.exports = function (t, e) {
        var n = {
          widget_origin: i.rootDocumentLocation(),
          widget_frame: i.isFramed() ? i.currentDocumentLocation() : null,
          duration_ms: t
        },
            s = o.aug(e, {
          page: "page",
          component: "performance"
        });
        r.scribe(s, n);
      };
    }, function (t, e, n) {
      function r(t, e, n) {
        var r = Object.keys(t).reduce(function (e, r) {
          return n(r) ? e + t[r] : e;
        }, 0);
        a(r, {
          element: e,
          action: "resource"
        });
      }

      function i(t) {
        return t.performance.getEntriesByType("resource").filter(function (t) {
          return c.isTwimgURL(t.name) || c.isTwitterURL(t.name);
        }).reduce(function (t, e) {
          return t[e.name] = e.duration, t;
        }, {});
      }

      function o(t) {
        return t.reduce(function (t, e) {
          return l.aug(t, i(e.contentDocument.defaultView));
        }, {});
      }

      var s = n(237),
          a = n(260),
          u = n(262),
          c = n(25),
          d = n(7),
          l = n(12),
          f = n(8),
          h = n(113);
      s.emitter.bind(s.ALL_WIDGETS_AND_IMAGES_LOADED, function (t) {
        var e,
            n,
            s = [];
        f.hasPerformanceInformation() && (e = i(d), h.isSupported() || (s = o(t)), n = l.aug({}, e, s), Object.keys(u).forEach(function (t) {
          r(n, t, u[t]);
        }));
      });
    }, function (t, e, n) {
      var r = n(25),
          i = {
        all: function all() {
          return !0;
        },
        image: function image(t) {
          return r.isTwimgURL(t);
        },
        settings: function settings(t) {
          return r.isSettingsURL(t);
        },
        widget_iframe: function widget_iframe(t) {
          return r.isWidgetIframeURL(t);
        }
      };
      t.exports = i;
    }])));
  }();

  /*!
   * Glide.js v3.2.3
   * (c) 2013-2018 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
   * Released under the MIT License.
   */

  var defaults = {
    /**
     * Type of the movement.
     *
     * Available types:
     * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
     * `carousel` - Changes slides without starting over when it reaches the first or last slide.
     *
     * @type {String}
     */
    type: 'slider',

    /**
     * Start at specific slide number defined with zero-based index.
     *
     * @type {Number}
     */
    startAt: 0,

    /**
     * A number of slides visible on the single viewport.
     *
     * @type {Number}
     */
    perView: 1,

    /**
     * Focus currently active slide at a specified position in the track.
     *
     * Available inputs:
     * `center` - Current slide will be always focused at the center of a track.
     * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
     *
     * @type {String|Number}
     */
    focusAt: 0,

    /**
     * A size of the gap added between slides.
     *
     * @type {Number}
     */
    gap: 10,

    /**
     * Change slides after a specified interval. Use `false` for turning off autoplay.
     *
     * @type {Number|Boolean}
     */
    autoplay: false,

    /**
     * Stop autoplay on mouseover event.
     *
     * @type {Boolean}
     */
    hoverpause: true,

    /**
     * Allow for changing slides with left and right keyboard arrows.
     *
     * @type {Boolean}
     */
    keyboard: true,

    /**
     * Stop running `perView` number of slides from the end. Use this
     * option if you don't want to have an empty space after
     * a slider. Works only with `slider` type and a
     * non-centered `focusAt` setting.
     *
     * @type {Boolean}
     */
    bound: false,

    /**
     * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
     *
     * @type {Number|Boolean}
     */
    swipeThreshold: 80,

    /**
     * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
     *
     * @type {Number|Boolean}
     */
    dragThreshold: 120,

    /**
     * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
     *
     * @type {Number|Boolean}
     */
    perTouch: false,

    /**
     * Moving distance ratio of the slides on a swiping and dragging.
     *
     * @type {Number}
     */
    touchRatio: 0.5,

    /**
     * Angle required to activate slides moving on swiping or dragging.
     *
     * @type {Number}
     */
    touchAngle: 45,

    /**
     * Duration of the animation in milliseconds.
     *
     * @type {Number}
     */
    animationDuration: 400,

    /**
     * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
     *
     * @type {Boolean}
     */
    rewind: true,

    /**
     * Duration of the rewinding animation of the `slider` type in milliseconds.
     *
     * @type {Number}
     */
    rewindDuration: 800,

    /**
     * Easing function for the animation.
     *
     * @type {String}
     */
    animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',

    /**
     * Throttle costly events at most once per every wait milliseconds.
     *
     * @type {Number}
     */
    throttle: 10,

    /**
     * Moving direction mode.
     *
     * Available inputs:
     * - 'ltr' - left to right movement,
     * - 'rtl' - right to left movement.
     *
     * @type {String}
     */
    direction: 'ltr',

    /**
     * The distance value of the next and previous viewports which
     * have to peek in the current view. Accepts number and
     * pixels as a string. Left and right peeking can be
     * set up separately with a directions object.
     *
     * For example:
     * `100` - Peek 100px on the both sides.
     * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
     *
     * @type {Number|String|Object}
     */
    peek: 0,

    /**
     * Collection of options applied at specified media breakpoints.
     * For example: display two slides per view under 800px.
     * `{
     *   '800px': {
     *     perView: 2
     *   }
     * }`
     */
    breakpoints: {},

    /**
     * Collection of internally used HTML classes.
     *
     * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
     * @type {Object}
     */
    classes: {
      direction: {
        ltr: 'glide--ltr',
        rtl: 'glide--rtl'
      },
      slider: 'glide--slider',
      carousel: 'glide--carousel',
      swipeable: 'glide--swipeable',
      dragging: 'glide--dragging',
      cloneSlide: 'glide__slide--clone',
      activeNav: 'glide__bullet--active',
      activeSlide: 'glide__slide--active',
      disabledArrow: 'glide__arrow--disabled'
    }
  };

  /**
   * Outputs warning message to the bowser console.
   *
   * @param  {String} msg
   * @return {Void}
   */
  function warn(msg) {
    console.error("[Glide warn]: " + msg);
  }

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /**
   * Converts value entered as number
   * or string to integer value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toInt(value) {
    return parseInt(value);
  }

  /**
   * Converts value entered as number
   * or string to flat value.
   *
   * @param {String} value
   * @returns {Number}
   */
  function toFloat(value) {
    return parseFloat(value);
  }

  /**
   * Indicates whether the specified value is a string.
   *
   * @param  {*}   value
   * @return {Boolean}
   */
  function isString(value) {
    return typeof value === 'string';
  }

  /**
   * Indicates whether the specified value is an object.
   *
   * @param  {*} value
   * @return {Boolean}
   *
   * @see https://github.com/jashkenas/underscore
   */
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof$1(value);

    return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
  }

  /**
   * Indicates whether the specified value is a number.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isNumber(value) {
    return typeof value === 'number';
  }

  /**
   * Indicates whether the specified value is a function.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isFunction(value) {
    return typeof value === 'function';
  }

  /**
   * Indicates whether the specified value is undefined.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Indicates whether the specified value is an array.
   *
   * @param  {*} value
   * @return {Boolean}
   */
  function isArray(value) {
    return value.constructor === Array;
  }

  /**
   * Creates and initializes specified collection of extensions.
   * Each extension receives access to instance of glide and rest of components.
   *
   * @param {Object} glide
   * @param {Object} extensions
   *
   * @returns {Object}
   */
  function mount(glide, extensions, events) {
    var components = {};

    for (var name in extensions) {
      if (isFunction(extensions[name])) {
        components[name] = extensions[name](glide, components, events);
      } else {
        warn('Extension must be a function');
      }
    }

    for (var _name in components) {
      if (isFunction(components[_name].mount)) {
        components[_name].mount();
      }
    }

    return components;
  }

  /**
   * Defines getter and setter property on the specified object.
   *
   * @param  {Object} obj         Object where property has to be defined.
   * @param  {String} prop        Name of the defined property.
   * @param  {Object} definition  Get and set definitions for the property.
   * @return {Void}
   */
  function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
  }

  /**
   * Sorts aphabetically object keys.
   *
   * @param  {Object} obj
   * @return {Object}
   */
  function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function (r, k) {
      r[k] = obj[k];

      return r[k], r;
    }, {});
  }

  /**
   * Merges passed settings object with default options.
   *
   * @param  {Object} defaults
   * @param  {Object} settings
   * @return {Object}
   */
  function mergeOptions(defaults, settings) {
    var options = _extends$1({}, defaults, settings);

    // `Object.assign` do not deeply merge objects, so we
    // have to do it manually for every nested object
    // in options. Although it does not look smart,
    // it's smaller and faster than some fancy
    // merging deep-merge algorithm script.
    if (settings.hasOwnProperty('classes')) {
      options.classes = _extends$1({}, defaults.classes, settings.classes);

      if (settings.classes.hasOwnProperty('direction')) {
        options.classes.direction = _extends$1({}, defaults.classes.direction, settings.classes.direction);
      }
    }

    if (settings.hasOwnProperty('breakpoints')) {
      options.breakpoints = _extends$1({}, defaults.breakpoints, settings.breakpoints);
    }

    return options;
  }

  var EventsBus = function () {
    /**
     * Construct a EventBus instance.
     *
     * @param {Object} events
     */
    function EventsBus() {
      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, EventsBus);

      this.events = events;
      this.hop = events.hasOwnProperty;
    }

    /**
     * Adds listener to the specifed event.
     *
     * @param {String|Array} event
     * @param {Function} handler
     */


    createClass(EventsBus, [{
      key: 'on',
      value: function on(event, handler) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.on(event[i], handler);
          }
        }

        // Create the event's object if not yet created
        if (!this.hop.call(this.events, event)) {
          this.events[event] = [];
        }

        // Add the handler to queue
        var index = this.events[event].push(handler) - 1;

        // Provide handle back for removal of event
        return {
          remove: function remove() {
            delete this.events[event][index];
          }
        };
      }

      /**
       * Runs registered handlers for specified event.
       *
       * @param {String|Array} event
       * @param {Object=} context
       */

    }, {
      key: 'emit',
      value: function emit(event, context) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.emit(event[i], context);
          }
        }

        // If the event doesn't exist, or there's no handlers in queue, just leave
        if (!this.hop.call(this.events, event)) {
          return;
        }

        // Cycle through events queue, fire!
        this.events[event].forEach(function (item) {
          item(context || {});
        });
      }
    }]);
    return EventsBus;
  }();

  var Glide = function () {
    /**
     * Construct glide.
     *
     * @param  {String} selector
     * @param  {Object} options
     */
    function Glide(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheck(this, Glide);

      this._c = {};
      this._t = [];
      this._e = new EventsBus();

      this.disabled = false;
      this.selector = selector;
      this.settings = mergeOptions(defaults, options);
      this.index = this.settings.startAt;
    }

    /**
     * Initializes glide.
     *
     * @param {Object} extensions Collection of extensions to initialize.
     * @return {Glide}
     */


    createClass(Glide, [{
      key: 'mount',
      value: function mount$$1() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this._e.emit('mount.before');

        if (isObject(extensions)) {
          this._c = mount(this, extensions, this._e);
        } else {
          warn('You need to provide a object on `mount()`');
        }

        this._e.emit('mount.after');

        return this;
      }

      /**
       * Collects an instance `translate` transformers.
       *
       * @param  {Array} transformers Collection of transformers.
       * @return {Void}
       */

    }, {
      key: 'mutate',
      value: function mutate() {
        var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (isArray(transformers)) {
          this._t = transformers;
        } else {
          warn('You need to provide a array on `mutate()`');
        }

        return this;
      }

      /**
       * Updates glide with specified settings.
       *
       * @param {Object} settings
       * @return {Glide}
       */

    }, {
      key: 'update',
      value: function update() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.settings = mergeOptions(this.settings, settings);

        if (settings.hasOwnProperty('startAt')) {
          this.index = settings.startAt;
        }

        this._e.emit('update');

        return this;
      }

      /**
       * Change slide with specified pattern. A pattern must be in the special format:
       * `>` - Move one forward
       * `<` - Move one backward
       * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
       * `>>` - Rewinds to end (last slide)
       * `<<` - Rewinds to start (first slide)
       *
       * @param {String} pattern
       * @return {Glide}
       */

    }, {
      key: 'go',
      value: function go(pattern) {
        this._c.Run.make(pattern);

        return this;
      }

      /**
       * Move track by specified distance.
       *
       * @param {String} distance
       * @return {Glide}
       */

    }, {
      key: 'move',
      value: function move(distance) {
        this._c.Transition.disable();
        this._c.Move.make(distance);

        return this;
      }

      /**
       * Destroy instance and revert all changes done by this._c.
       *
       * @return {Glide}
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        this._e.emit('destroy');

        return this;
      }

      /**
       * Start instance autoplaying.
       *
       * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Glide}
       */

    }, {
      key: 'play',
      value: function play() {
        var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (interval) {
          this.settings.autoplay = interval;
        }

        this._e.emit('play');

        return this;
      }

      /**
       * Stop instance autoplaying.
       *
       * @return {Glide}
       */

    }, {
      key: 'pause',
      value: function pause() {
        this._e.emit('pause');

        return this;
      }

      /**
       * Sets glide into a idle status.
       *
       * @return {Glide}
       */

    }, {
      key: 'disable',
      value: function disable() {
        this.disabled = true;

        return this;
      }

      /**
       * Sets glide into a active status.
       *
       * @return {Glide}
       */

    }, {
      key: 'enable',
      value: function enable() {
        this.disabled = false;

        return this;
      }

      /**
       * Adds cuutom event listener with handler.
       *
       * @param  {String|Array} event
       * @param  {Function} handler
       * @return {Glide}
       */

    }, {
      key: 'on',
      value: function on(event, handler) {
        this._e.on(event, handler);

        return this;
      }

      /**
       * Checks if glide is a precised type.
       *
       * @param  {String} name
       * @return {Boolean}
       */

    }, {
      key: 'isType',
      value: function isType(name) {
        return this.settings.type === name;
      }

      /**
       * Gets value of the core options.
       *
       * @return {Object}
       */

    }, {
      key: 'settings',
      get: function get$$1() {
        return this._o;
      }

      /**
       * Sets value of the core options.
       *
       * @param  {Object} o
       * @return {Void}
       */
      ,
      set: function set$$1(o) {
        if (isObject(o)) {
          this._o = o;
        } else {
          warn('Options must be an `object` instance.');
        }
      }

      /**
       * Gets current index of the slider.
       *
       * @return {Object}
       */

    }, {
      key: 'index',
      get: function get$$1() {
        return this._i;
      }

      /**
       * Sets current index a slider.
       *
       * @return {Object}
       */
      ,
      set: function set$$1(i) {
        this._i = toInt(i);
      }

      /**
       * Gets type name of the slider.
       *
       * @return {String}
       */

    }, {
      key: 'type',
      get: function get$$1() {
        return this.settings.type;
      }

      /**
       * Gets value of the idle status.
       *
       * @return {Boolean}
       */

    }, {
      key: 'disabled',
      get: function get$$1() {
        return this._d;
      }

      /**
       * Sets value of the idle status.
       *
       * @return {Boolean}
       */
      ,
      set: function set$$1(status) {
        this._d = !!status;
      }
    }]);
    return Glide;
  }();

  function Run (Glide, Components, Events) {
    var Run = {
      /**
       * Initializes autorunning of the glide.
       *
       * @return {Void}
       */
      mount: function mount() {
        this._o = false;
      },


      /**
       * Makes glides running based on the passed moving schema.
       *
       * @param {String} move
       */
      make: function make(move) {
        var _this = this;

        if (!Glide.disabled) {
          Glide.disable();

          this.move = move;

          Events.emit('run.before', this.move);

          this.calculate();

          Events.emit('run', this.move);

          Components.Transition.after(function () {
            if (_this.isOffset('<') || _this.isOffset('>')) {
              _this._o = false;

              Events.emit('run.offset', _this.move);
            }

            Events.emit('run.after', _this.move);

            Glide.enable();
          });
        }
      },


      /**
       * Calculates current index based on defined move.
       *
       * @return {Void}
       */
      calculate: function calculate() {
        var move = this.move,
            length = this.length;
        var steps = move.steps,
            direction = move.direction;


        var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

        switch (direction) {
          case '>':
            if (steps === '>') {
              Glide.index = length;
            } else if (this.isEnd()) {
              if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                this._o = true;

                Glide.index = 0;
              }

              Events.emit('run.end', move);
            } else if (countableSteps) {
              Glide.index += Math.min(length - Glide.index, -toInt(steps));
            } else {
              Glide.index++;
            }
            break;

          case '<':
            if (steps === '<') {
              Glide.index = 0;
            } else if (this.isStart()) {
              if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
                this._o = true;

                Glide.index = length;
              }

              Events.emit('run.start', move);
            } else if (countableSteps) {
              Glide.index -= Math.min(Glide.index, toInt(steps));
            } else {
              Glide.index--;
            }
            break;

          case '=':
            Glide.index = steps;
            break;
        }
      },


      /**
       * Checks if we are on the first slide.
       *
       * @return {Boolean}
       */
      isStart: function isStart() {
        return Glide.index === 0;
      },


      /**
       * Checks if we are on the last slide.
       *
       * @return {Boolean}
       */
      isEnd: function isEnd() {
        return Glide.index === this.length;
      },


      /**
       * Checks if we are making a offset run.
       *
       * @param {String} direction
       * @return {Boolean}
       */
      isOffset: function isOffset(direction) {
        return this._o && this.move.direction === direction;
      }
    };

    define(Run, 'move', {
      /**
       * Gets value of the move schema.
       *
       * @returns {Object}
       */
      get: function get() {
        return this._m;
      },


      /**
       * Sets value of the move schema.
       *
       * @returns {Object}
       */
      set: function set(value) {
        this._m = {
          direction: value.substr(0, 1),
          steps: value.substr(1) ? value.substr(1) : 0
        };
      }
    });

    define(Run, 'length', {
      /**
       * Gets value of the running distance based
       * on zero-indexing number of slides.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;
        var length = Components.Html.slides.length;

        // While number of slides inside instance is smaller
        // that `perView` settings we should't run at all.
        // Running distance has to be zero.

        if (settings.perView > length) {
          return 0;
        }

        // If the `bound` option is acitve, a maximum running distance should be
        // reduced by `perView` and `focusAt` settings. Running distance
        // should end before creating an empty space after instance.
        if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
          return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
        }

        return length - 1;
      }
    });

    define(Run, 'offset', {
      /**
       * Gets status of the offsetting flag.
       *
       * @return {Boolean}
       */
      get: function get() {
        return this._o;
      }
    });

    return Run;
  }

  /**
   * Returns a current time.
   *
   * @return {Number}
   */
  function now() {
    return new Date().getTime();
  }

  /**
   * Returns a function, that, when invoked, will only be triggered
   * at most once during a given window of time.
   *
   * @param {Function} func
   * @param {Number} wait
   * @param {Object=} options
   * @return {Function}
   *
   * @see https://github.com/jashkenas/underscore
   */
  function throttle(func, wait, options) {
    var timeout = void 0,
        context = void 0,
        args = void 0,
        result = void 0;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
      var at = now();
      if (!previous && options.leading === false) previous = at;
      var remaining = wait - (at - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = at;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function () {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  }

  var MARGIN_TYPE = {
    ltr: ['marginLeft', 'marginRight'],
    rtl: ['marginRight', 'marginLeft']
  };

  function Gaps (Glide, Components, Events) {
    var Gaps = {
      /**
       * Applies gaps between slides. First and last
       * slides do not receive it's edge margins.
       *
       * @param {HTMLCollection} slides
       * @return {Void}
       */
      apply: function apply(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          var direction = Components.Direction.value;

          if (i !== 0) {
            style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
          } else {
            style[MARGIN_TYPE[direction][0]] = '';
          }

          if (i !== slides.length - 1) {
            style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
          } else {
            style[MARGIN_TYPE[direction][1]] = '';
          }
        }
      },


      /**
       * Removes gaps from the slides.
       *
       * @param {HTMLCollection} slides
       * @returns {Void}
      */
      remove: function remove(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;

          style.marginLeft = '';
          style.marginRight = '';
        }
      }
    };

    define(Gaps, 'value', {
      /**
       * Gets value of the gap.
       *
       * @returns {Number}
       */
      get: function get() {
        return toInt(Glide.settings.gap);
      }
    });

    define(Gaps, 'grow', {
      /**
       * Gets additional dimentions value caused by gaps.
       * Used to increase width of the slides wrapper.
       *
       * @returns {Number}
       */
      get: function get() {
        return Gaps.value * (Components.Sizes.length - 1);
      }
    });

    define(Gaps, 'reductor', {
      /**
       * Gets reduction value caused by gaps.
       * Used to subtract width of the slides.
       *
       * @returns {Number}
       */
      get: function get() {
        var perView = Glide.settings.perView;

        return Gaps.value * (perView - 1) / perView;
      }
    });

    /**
     * Apply calculated gaps:
     * - after building, so slides (including clones) will receive proper margins
     * - on updating via API, to recalculate gaps with new options
     */
    Events.on(['build.after', 'update'], throttle(function () {
      Gaps.apply(Components.Html.wrapper.children);
    }, 30));

    /**
     * Remove gaps:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Gaps.remove(Components.Html.wrapper.children);
    });

    return Gaps;
  }

  /**
   * Finds siblings nodes of the passed node.
   *
   * @param  {Element} node
   * @return {Array}
   */
  function siblings(node) {
    if (node && node.parentNode) {
      var n = node.parentNode.firstChild;
      var matched = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== node) {
          matched.push(n);
        }
      }

      return matched;
    }

    return [];
  }

  /**
   * Checks if passed node exist and is a valid element.
   *
   * @param  {Element} node
   * @return {Boolean}
   */
  function exist(node) {
    if (node && node instanceof window.HTMLElement) {
      return true;
    }

    return false;
  }

  var TRACK_SELECTOR = '[data-glide-el="track"]';

  function Html (Glide, Components) {
    var Html = {
      /**
       * Setup slider HTML nodes.
       *
       * @param {Glide} glide
       */
      mount: function mount() {
        this.root = Glide.selector;
        this.track = this.root.querySelector(TRACK_SELECTOR);
        this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
          return !slide.classList.contains(Glide.settings.classes.cloneSlide);
        });
      }
    };

    define(Html, 'root', {
      /**
       * Gets node of the glide main element.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._r;
      },


      /**
       * Sets node of the glide main element.
       *
       * @return {Object}
       */
      set: function set(r) {
        if (isString(r)) {
          r = document.querySelector(r);
        }

        if (exist(r)) {
          Html._r = r;
        } else {
          warn('Root element must be a existing Html node');
        }
      }
    });

    define(Html, 'track', {
      /**
       * Gets node of the glide track with slides.
       *
       * @return {Object}
       */
      get: function get() {
        return Html._t;
      },


      /**
       * Sets node of the glide track with slides.
       *
       * @return {Object}
       */
      set: function set(t) {
        if (exist(t)) {
          Html._t = t;
        } else {
          warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
        }
      }
    });

    define(Html, 'wrapper', {
      /**
       * Gets node of the slides wrapper.
       *
       * @return {Object}
       */
      get: function get() {
        return Html.track.children[0];
      }
    });

    return Html;
  }

  function Peek (Glide, Components, Events) {
    var Peek = {
      /**
       * Setups how much to peek based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.peek;
      }
    };

    define(Peek, 'value', {
      /**
       * Gets value of the peek.
       *
       * @returns {Number|Object}
       */
      get: function get() {
        return Peek._v;
      },


      /**
       * Sets value of the peek.
       *
       * @param {Number|Object} value
       * @return {Void}
       */
      set: function set(value) {
        if (isObject(value)) {
          value.before = toInt(value.before);
          value.after = toInt(value.after);
        } else {
          value = toInt(value);
        }

        Peek._v = value;
      }
    });

    define(Peek, 'reductor', {
      /**
       * Gets reduction value caused by peek.
       *
       * @returns {Number}
       */
      get: function get() {
        var value = Peek.value;
        var perView = Glide.settings.perView;

        if (isObject(value)) {
          return value.before / perView + value.after / perView;
        }

        return value * 2 / perView;
      }
    });

    /**
     * Recalculate peeking sizes on:
     * - when resizing window to update to proper percents
     */
    Events.on(['resize', 'update'], function () {
      Peek.mount();
    });

    return Peek;
  }

  function Move (Glide, Components, Events) {
    var Move = {
      /**
       * Constructs move component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        this._o = 0;
      },


      /**
       * Calculates a movement value based on passed offset and currently active index.
       *
       * @param  {Number} offset
       * @return {Void}
       */
      make: function make() {
        var _this = this;

        var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        this.offset = offset;

        Events.emit('move', {
          movement: this.value
        });

        Components.Transition.after(function () {
          Events.emit('move.after', {
            movement: _this.value
          });
        });
      }
    };

    define(Move, 'offset', {
      /**
       * Gets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      get: function get() {
        return Move._o;
      },


      /**
       * Sets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      set: function set(value) {
        Move._o = !isUndefined(value) ? toInt(value) : 0;
      }
    });

    define(Move, 'translate', {
      /**
       * Gets a raw movement value.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Sizes.slideWidth * Glide.index;
      }
    });

    define(Move, 'value', {
      /**
       * Gets an actual movement value corrected by offset.
       *
       * @return {Number}
       */
      get: function get() {
        var offset = this.offset;
        var translate = this.translate;

        if (Components.Direction.is('rtl')) {
          return translate + offset;
        }

        return translate - offset;
      }
    });

    /**
     * Make movement to proper slide on:
     * - before build, so glide will start at `startAt` index
     * - on each standard run to move to newly calculated index
     */
    Events.on(['build.before', 'run'], function () {
      Move.make();
    });

    return Move;
  }

  function Sizes (Glide, Components, Events) {
    var Sizes = {
      /**
       * Setups dimentions of slides.
       *
       * @return {Void}
       */
      setupSlides: function setupSlides() {
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = this.slideWidth + 'px';
        }
      },


      /**
       * Setups dimentions of slides wrapper.
       *
       * @return {Void}
       */
      setupWrapper: function setupWrapper(dimention) {
        Components.Html.wrapper.style.width = this.wrapperSize + 'px';
      },


      /**
       * Removes applied styles from HTML elements.
       *
       * @returns {Void}
       */
      remove: function remove() {
        var slides = Components.Html.slides;

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = '';
        }

        Components.Html.wrapper.style.width = '';
      }
    };

    define(Sizes, 'length', {
      /**
       * Gets count number of the slides.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.slides.length;
      }
    });

    define(Sizes, 'width', {
      /**
       * Gets width value of the glide.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.root.offsetWidth;
      }
    });

    define(Sizes, 'wrapperSize', {
      /**
       * Gets size of the slides wrapper.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
      }
    });

    define(Sizes, 'slideWidth', {
      /**
       * Gets width value of the single slide.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
      }
    });

    /**
     * Apply calculated glide's dimensions:
     * - before building, so other dimentions (e.g. translate) will be calculated propertly
     * - when resizing window to recalculate sildes dimensions
     * - on updating via API, to calculate dimensions based on new options
     */
    Events.on(['build.before', 'resize', 'update'], function () {
      Sizes.setupSlides();
      Sizes.setupWrapper();
    });

    /**
     * Remove calculated glide's dimensions:
     * - on destoting to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Sizes.remove();
    });

    return Sizes;
  }

  function Build (Glide, Components, Events) {
    var Build = {
      /**
       * Init glide building. Adds classes, sets
       * dimensions and setups initial state.
       *
       * @return {Void}
       */
      mount: function mount() {
        Events.emit('build.before');

        this.typeClass();
        this.activeClass();

        Events.emit('build.after');
      },


      /**
       * Adds `type` class to the glide element.
       *
       * @return {Void}
       */
      typeClass: function typeClass() {
        Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
      },


      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      activeClass: function activeClass() {
        var classes = Glide.settings.classes;
        var slide = Components.Html.slides[Glide.index];

        if (slide) {
          slide.classList.add(classes.activeSlide);

          siblings(slide).forEach(function (sibling) {
            sibling.classList.remove(classes.activeSlide);
          });
        }
      },


      /**
       * Removes HTML classes applied at building.
       *
       * @return {Void}
       */
      removeClasses: function removeClasses() {
        var classes = Glide.settings.classes;

        Components.Html.root.classList.remove(classes[Glide.settings.type]);

        Components.Html.slides.forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    };

    /**
     * Clear building classes:
     * - on destroying to bring HTML to its initial state
     * - on updating to remove classes before remounting component
     */
    Events.on(['destroy', 'update'], function () {
      Build.removeClasses();
    });

    /**
     * Remount component:
     * - on resizing of the window to calculate new dimentions
     * - on updating settings via API
     */
    Events.on(['resize', 'update'], function () {
      Build.mount();
    });

    /**
     * Swap active class of current slide:
     * - after each move to the new index
     */
    Events.on('move.after', function () {
      Build.activeClass();
    });

    return Build;
  }

  function Clones (Glide, Components, Events) {
    var Clones = {
      /**
       * Create pattern map and collect slides to be cloned.
       */
      mount: function mount() {
        this.items = [];

        if (Glide.isType('carousel')) {
          this.items = this.collect();
        }
      },


      /**
       * Collect clones with pattern.
       *
       * @return {Void}
       */
      collect: function collect() {
        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var slides = Components.Html.slides;
        var _Glide$settings = Glide.settings,
            perView = _Glide$settings.perView,
            classes = _Glide$settings.classes;


        var start = slides.slice(0, perView);
        var end = slides.slice(-perView);

        for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
          for (var i = 0; i < start.length; i++) {
            var clone = start[i].cloneNode(true);

            clone.classList.add(classes.cloneSlide);

            items.push(clone);
          }

          for (var _i = 0; _i < end.length; _i++) {
            var _clone = end[_i].cloneNode(true);

            _clone.classList.add(classes.cloneSlide);

            items.unshift(_clone);
          }
        }

        return items;
      },


      /**
       * Append cloned slides with generated pattern.
       *
       * @return {Void}
       */
      append: function append() {
        var items = this.items;
        var _Components$Html = Components.Html,
            wrapper = _Components$Html.wrapper,
            slides = _Components$Html.slides;


        var half = Math.floor(items.length / 2);
        var prepend = items.slice(0, half).reverse();
        var append = items.slice(half, items.length);

        for (var i = 0; i < append.length; i++) {
          wrapper.appendChild(append[i]);
        }

        for (var _i2 = 0; _i2 < prepend.length; _i2++) {
          wrapper.insertBefore(prepend[_i2], slides[0]);
        }

        for (var _i3 = 0; _i3 < items.length; _i3++) {
          items[_i3].style.width = Components.Sizes.slideWidth + 'px';
        }
      },


      /**
       * Remove all cloned slides.
       *
       * @return {Void}
       */
      remove: function remove() {
        var items = this.items;


        for (var i = 0; i < items.length; i++) {
          Components.Html.wrapper.removeChild(items[i]);
        }
      }
    };

    define(Clones, 'grow', {
      /**
       * Gets additional dimentions value caused by clones.
       *
       * @return {Number}
       */
      get: function get() {
        return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
      }
    });

    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */
    Events.on('update', function () {
      Clones.remove();
      Clones.mount();
      Clones.append();
    });

    /**
     * Append additional slide's clones:
     * - while glide's type is `carousel`
     */
    Events.on('build.before', function () {
      if (Glide.isType('carousel')) {
        Clones.append();
      }
    });

    /**
     * Remove clones HTMLElements:
     * - on destroying, to bring HTML to its initial state
     */
    Events.on('destroy', function () {
      Clones.remove();
    });

    return Clones;
  }

  var EventsBinder = function () {
    /**
     * Construct a EventsBinder instance.
     */
    function EventsBinder() {
      var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, EventsBinder);

      this.listeners = listeners;
    }

    /**
     * Adds events listeners to arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Function} closure
     * @return {Void}
     */


    createClass(EventsBinder, [{
      key: 'on',
      value: function on(events, el, closure) {
        var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          this.listeners[events[i]] = closure;

          el.addEventListener(events[i], this.listeners[events[i]], capture);
        }
      }

      /**
       * Removes event listeners from arrows HTML elements.
       *
       * @param  {String|Array} events
       * @param  {Element|Window|Document} el
       * @return {Void}
       */

    }, {
      key: 'off',
      value: function off(events, el) {
        if (isString(events)) {
          events = [events];
        }

        for (var i = 0; i < events.length; i++) {
          el.removeEventListener(events[i], this.listeners[events[i]], false);
        }
      }

      /**
       * Destroy collected listeners.
       *
       * @returns {Void}
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        delete this.listeners;
      }
    }]);
    return EventsBinder;
  }();

  function Resize (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Resize = {
      /**
       * Initializes window bindings.
       */
      mount: function mount() {
        this.bind();
      },


      /**
       * Binds `rezsize` listener to the window.
       * It's a costly event, so we are debouncing it.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('resize', window, throttle(function () {
          Events.emit('resize');
        }, Glide.settings.throttle));
      },


      /**
       * Unbinds listeners from the window.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('resize', window);
      }
    };

    /**
     * Remove bindings from window:
     * - on destroying, to remove added EventListener
     */
    Events.on('destroy', function () {
      Resize.unbind();
      Binder.destroy();
    });

    return Resize;
  }

  var VALID_DIRECTIONS = ['ltr', 'rtl'];
  var FLIPED_MOVEMENTS = {
    '>': '<',
    '<': '>',
    '=': '='
  };

  function Direction (Glide, Components, Events) {
    var Direction = {
      /**
       * Setups gap value based on settings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.value = Glide.settings.direction;
      },


      /**
       * Resolves pattern based on direction value
       *
       * @param {String} pattern
       * @returns {String}
       */
      resolve: function resolve(pattern) {
        var token = pattern.slice(0, 1);

        if (this.is('rtl')) {
          return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
        }

        return pattern;
      },


      /**
       * Checks value of direction mode.
       *
       * @param {String} direction
       * @returns {Boolean}
       */
      is: function is(direction) {
        return this.value === direction;
      },


      /**
       * Applies direction class to the root HTML element.
       *
       * @return {Void}
       */
      addClass: function addClass() {
        Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
      },


      /**
       * Removes direction class from the root HTML element.
       *
       * @return {Void}
       */
      removeClass: function removeClass() {
        Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
      }
    };

    define(Direction, 'value', {
      /**
       * Gets value of the direction.
       *
       * @returns {Number}
       */
      get: function get() {
        return Direction._v;
      },


      /**
       * Sets value of the direction.
       *
       * @param {String} value
       * @return {Void}
       */
      set: function set(value) {
        if (VALID_DIRECTIONS.indexOf(value) > -1) {
          Direction._v = value;
        } else {
          warn('Direction value must be `ltr` or `rtl`');
        }
      }
    });

    /**
     * Clear direction class:
     * - on destroy to bring HTML to its initial state
     * - on update to remove class before reappling bellow
     */
    Events.on(['destroy', 'update'], function () {
      Direction.removeClass();
    });

    /**
     * Remount component:
     * - on update to reflect changes in direction value
     */
    Events.on('update', function () {
      Direction.mount();
    });

    /**
     * Apply direction class:
     * - before building to apply class for the first time
     * - on updating to reapply direction class that may changed
     */
    Events.on(['build.before', 'update'], function () {
      Direction.addClass();
    });

    return Direction;
  }

  /**
   * Reflects value of glide movement.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Rtl (Glide, Components) {
    return {
      /**
       * Negates the passed translate if glide is in RTL option.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Components.Direction.is('rtl')) {
          return -translate;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `gap` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Gap (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with number in the `gap` settings.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Gaps.value * Glide.index;
      }
    };
  }

  /**
   * Updates glide movement with width of additional clones width.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Grow (Glide, Components) {
    return {
      /**
       * Adds to the passed translate width of the half of clones.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Clones.grow / 2;
      }
    };
  }

  /**
   * Updates glide movement with a `peek` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Peeking (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with a `peek` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Glide.settings.focusAt >= 0) {
          var peek = Components.Peek.value;

          if (isObject(peek)) {
            return translate - peek.before;
          }

          return translate - peek;
        }

        return translate;
      }
    };
  }

  /**
   * Updates glide movement with a `focusAt` settings.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function Focusing (Glide, Components) {
    return {
      /**
       * Modifies passed translate value with index in the `focusAt` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        var gap = Components.Gaps.value;
        var width = Components.Sizes.width;
        var focusAt = Glide.settings.focusAt;
        var slideWidth = Components.Sizes.slideWidth;

        if (focusAt === 'center') {
          return translate - (width / 2 - slideWidth / 2);
        }

        return translate - slideWidth * focusAt - gap * focusAt;
      }
    };
  }

  /**
   * Applies diffrent transformers on translate value.
   *
   * @param  {Object} Glide
   * @param  {Object} Components
   * @return {Object}
   */
  function mutator (Glide, Components, Events) {
    /**
     * Merge instance transformers with collection of default transformers.
     * It's important that the Rtl component be last on the list,
     * so it reflects all previous transformations.
     *
     * @type {Array}
     */
    var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

    return {
      /**
       * Piplines translate value with registered transformers.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      mutate: function mutate(translate) {
        for (var i = 0; i < TRANSFORMERS.length; i++) {
          var transformer = TRANSFORMERS[i];

          if (isFunction(transformer) && isFunction(transformer().modify)) {
            translate = transformer(Glide, Components, Events).modify(translate);
          } else {
            warn('Transformer should be a function that returns an object with `modify()` method');
          }
        }

        return translate;
      }
    };
  }

  function Translate (Glide, Components, Events) {
    var Translate = {
      /**
       * Sets value of translate on HTML element.
       *
       * @param {Number} value
       * @return {Void}
       */
      set: function set(value) {
        var transform = mutator(Glide, Components).mutate(value);

        Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
      },


      /**
       * Removes value of translate from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transform = '';
      }
    };

    /**
     * Set new translate value:
     * - on move to reflect index change
     * - on updating via API to reflect possible changes in options
     */
    Events.on('move', function (context) {
      var gap = Components.Gaps.value;
      var length = Components.Sizes.length;
      var width = Components.Sizes.slideWidth;

      if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
        Components.Transition.after(function () {
          Events.emit('translate.jump');

          Translate.set(width * (length - 1));
        });

        return Translate.set(-width - gap * length);
      }

      if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
        Components.Transition.after(function () {
          Events.emit('translate.jump');

          Translate.set(0);
        });

        return Translate.set(width * length + gap * length);
      }

      return Translate.set(context.movement);
    });

    /**
     * Remove translate:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Translate.remove();
    });

    return Translate;
  }

  function Transition (Glide, Components, Events) {
    /**
     * Holds inactivity status of transition.
     * When true transition is not applied.
     *
     * @type {Boolean}
     */
    var disabled = false;

    var Transition = {
      /**
       * Composes string of the CSS transition.
       *
       * @param {String} property
       * @return {String}
       */
      compose: function compose(property) {
        var settings = Glide.settings;

        if (!disabled) {
          return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
        }

        return property + ' 0ms ' + settings.animationTimingFunc;
      },


      /**
       * Sets value of transition on HTML element.
       *
       * @param {String=} property
       * @return {Void}
       */
      set: function set() {
        var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

        Components.Html.wrapper.style.transition = this.compose(property);
      },


      /**
       * Removes value of transition from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transition = '';
      },


      /**
       * Runs callback after animation.
       *
       * @param  {Function} callback
       * @return {Void}
       */
      after: function after(callback) {
        setTimeout(function () {
          callback();
        }, this.duration);
      },


      /**
       * Enable transition.
       *
       * @return {Void}
       */
      enable: function enable() {
        disabled = false;

        this.set();
      },


      /**
       * Disable transition.
       *
       * @return {Void}
       */
      disable: function disable() {
        disabled = true;

        this.set();
      }
    };

    define(Transition, 'duration', {
      /**
       * Gets duration of the transition based
       * on currently running animation type.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide.settings;

        if (Glide.isType('slider') && Components.Run.offset) {
          return settings.rewindDuration;
        }

        return settings.animationDuration;
      }
    });

    /**
     * Set transition `style` value:
     * - on each moving, because it may be cleared by offset move
     */
    Events.on('move', function () {
      Transition.set();
    });

    /**
     * Disable transition:
     * - before initial build to avoid transitioning from `0` to `startAt` index
     * - while resizing window and recalculating dimentions
     * - on jumping from offset transition at start and end edges in `carousel` type
     */
    Events.on(['build.before', 'resize', 'translate.jump'], function () {
      Transition.disable();
    });

    /**
     * Enable transition:
     * - on each running, because it may be disabled by offset move
     */
    Events.on('run', function () {
      Transition.enable();
    });

    /**
     * Remove transition:
     * - on destroying to bring markup to its inital state
     */
    Events.on('destroy', function () {
      Transition.remove();
    });

    return Transition;
  }

  var START_EVENTS = ['touchstart', 'mousedown'];
  var MOVE_EVENTS = ['touchmove', 'mousemove'];
  var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
  var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

  function Swipe (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;

    var Swipe = {
      /**
       * Initializes swipe bindings.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bindSwipeStart();
      },


      /**
       * Handler for `swipestart` event. Calculates entry points of the user's tap.
       *
       * @param {Object} event
       * @return {Void}
       */
      start: function start(event) {
        if (!disabled && !Glide.disabled) {
          this.disable();

          var swipe = this.touches(event);

          swipeSin = null;
          swipeStartX = toInt(swipe.pageX);
          swipeStartY = toInt(swipe.pageY);

          this.bindSwipeMove();
          this.bindSwipeEnd();

          Events.emit('swipe.start');
        }
      },


      /**
       * Handler for `swipemove` event. Calculates user's tap angle and distance.
       *
       * @param {Object} event
       */
      move: function move(event) {
        if (!Glide.disabled) {
          var _Glide$settings = Glide.settings,
              touchAngle = _Glide$settings.touchAngle,
              touchRatio = _Glide$settings.touchRatio,
              classes = _Glide$settings.classes;


          var swipe = this.touches(event);

          var subExSx = toInt(swipe.pageX) - swipeStartX;
          var subEySy = toInt(swipe.pageY) - swipeStartY;
          var powEX = Math.abs(subExSx << 2);
          var powEY = Math.abs(subEySy << 2);
          var swipeHypotenuse = (powEX + powEY) * (powEX + powEY);
          var swipeCathetus = powEY * powEY;

          swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

          Components.Move.make(subExSx * toFloat(touchRatio));

          if (swipeSin * 180 / Math.PI < touchAngle) {
            event.stopPropagation();

            Components.Html.root.classList.add(classes.dragging);

            Events.emit('swipe.move');
          } else {
            return false;
          }
        }
      },


      /**
       * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
       *
       * @param {Object} event
       * @return {Void}
       */
      end: function end(event) {
        if (!Glide.disabled) {
          var settings = Glide.settings;

          var swipe = this.touches(event);
          var threshold = this.threshold(event);

          var swipeDistance = swipe.pageX - swipeStartX;
          var swipeDeg = swipeSin * 180 / Math.PI;
          var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

          this.enable();

          if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
            // While swipe is positive and greater than threshold move backward.
            if (settings.perTouch) {
              steps = Math.min(steps, toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('<' + steps));
          } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
            // While swipe is negative and lower than negative threshold move forward.
            if (settings.perTouch) {
              steps = Math.max(steps, -toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('>' + steps));
          } else {
            // While swipe don't reach distance apply previous transform.
            Components.Move.make();
          }

          Components.Html.root.classList.remove(settings.classes.dragging);

          this.unbindSwipeMove();
          this.unbindSwipeEnd();

          Events.emit('swipe.end');
        }
      },


      /**
       * Binds swipe's starting event.
       *
       * @return {Void}
       */
      bindSwipeStart: function bindSwipeStart() {
        var _this = this;

        var settings = Glide.settings;

        if (settings.swipeThreshold) {
          Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
            _this.start(event);
          });
        }

        if (settings.dragThreshold) {
          Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
            _this.start(event);
          });
        }
      },


      /**
       * Unbinds swipe's starting event.
       *
       * @return {Void}
       */
      unbindSwipeStart: function unbindSwipeStart() {
        Binder.off(START_EVENTS[0], Components.Html.wrapper);
        Binder.off(START_EVENTS[1], Components.Html.wrapper);
      },


      /**
       * Binds swipe's moving event.
       *
       * @return {Void}
       */
      bindSwipeMove: function bindSwipeMove() {
        var _this2 = this;

        Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
          _this2.move(event);
        }, Glide.settings.throttle));
      },


      /**
       * Unbinds swipe's moving event.
       *
       * @return {Void}
       */
      unbindSwipeMove: function unbindSwipeMove() {
        Binder.off(MOVE_EVENTS, Components.Html.wrapper);
      },


      /**
       * Binds swipe's ending event.
       *
       * @return {Void}
       */
      bindSwipeEnd: function bindSwipeEnd() {
        var _this3 = this;

        Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
          _this3.end(event);
        });
      },


      /**
       * Unbinds swipe's ending event.
       *
       * @return {Void}
       */
      unbindSwipeEnd: function unbindSwipeEnd() {
        Binder.off(END_EVENTS, Components.Html.wrapper);
      },


      /**
       * Normalizes event touches points accorting to different types.
       *
       * @param {Object} event
       */
      touches: function touches(event) {
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return event;
        }

        return event.touches[0] || event.changedTouches[0];
      },


      /**
       * Gets value of minimum swipe distance settings based on event type.
       *
       * @return {Number}
       */
      threshold: function threshold(event) {
        var settings = Glide.settings;

        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return settings.dragThreshold;
        }

        return settings.swipeThreshold;
      },


      /**
       * Enables swipe event.
       *
       * @return {self}
       */
      enable: function enable() {
        disabled = false;

        Components.Transition.enable();

        return this;
      },


      /**
       * Disables swipe event.
       *
       * @return {self}
       */
      disable: function disable() {
        disabled = true;

        Components.Transition.disable();

        return this;
      }
    };

    /**
     * Add component class:
     * - after initial building
     */
    Events.on('build.after', function () {
      Components.Html.root.classList.add(Glide.settings.classes.swipeable);
    });

    /**
     * Remove swiping bindings:
     * - on destroying, to remove added EventListeners
     */
    Events.on('destroy', function () {
      Swipe.unbindSwipeStart();
      Swipe.unbindSwipeMove();
      Swipe.unbindSwipeEnd();
      Binder.destroy();
    });

    return Swipe;
  }

  function Images (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Images = {
      /**
       * Binds listener to glide wrapper.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.bind();
      },


      /**
       * Binds `dragstart` event on wrapper to prevent dragging images.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
      },


      /**
       * Unbinds `dragstart` event on wrapper.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('dragstart', Components.Html.wrapper);
      },


      /**
       * Event handler. Prevents dragging.
       *
       * @return {Void}
       */
      dragstart: function dragstart(event) {
        event.preventDefault();
      }
    };

    /**
     * Remove bindings from images:
     * - on destroying, to remove added EventListeners
     */
    Events.on('destroy', function () {
      Images.unbind();
      Binder.destroy();
    });

    return Images;
  }

  function Anchors (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    /**
     * Holds detaching status of anchors.
     * Prevents detaching of already detached anchors.
     *
     * @private
     * @type {Boolean}
     */
    var detached = false;

    /**
     * Holds preventing status of anchors.
     * If `true` redirection after click will be disabled.
     *
     * @private
     * @type {Boolean}
     */
    var prevented = false;

    var Anchors = {
      /**
       * Setups a initial state of anchors component.
       *
       * @returns {Void}
       */
      mount: function mount() {
        /**
         * Holds collection of anchors elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._a = Components.Html.wrapper.querySelectorAll('a');

        this.bind();
      },


      /**
       * Binds events to anchors inside a track.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('click', Components.Html.wrapper, this.click);
      },


      /**
       * Unbinds events attached to anchors inside a track.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('click', Components.Html.wrapper);
      },


      /**
       * Handler for click event. Prevents clicks when glide is in `prevent` status.
       *
       * @param  {Object} event
       * @return {Void}
       */
      click: function click(event) {
        event.stopPropagation();

        if (prevented) {
          event.preventDefault();
        }
      },


      /**
       * Detaches anchors click event inside glide.
       *
       * @return {self}
       */
      detach: function detach() {
        prevented = true;

        if (!detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = false;

            this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

            this.items[i].removeAttribute('href');
          }

          detached = true;
        }

        return this;
      },


      /**
       * Attaches anchors click events inside glide.
       *
       * @return {self}
       */
      attach: function attach() {
        prevented = false;

        if (detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = true;

            this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
          }

          detached = false;
        }

        return this;
      }
    };

    define(Anchors, 'items', {
      /**
       * Gets collection of the arrows HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Anchors._a;
      }
    });

    /**
     * Detach anchors inside slides:
     * - on swiping, so they won't redirect to its `href` attributes
     */
    Events.on('swipe.move', function () {
      Anchors.detach();
    });

    /**
     * Attach anchors inside slides:
     * - after swiping and transitions ends, so they can redirect after click again
     */
    Events.on('swipe.end', function () {
      Components.Transition.after(function () {
        Anchors.attach();
      });
    });

    /**
     * Unbind anchors inside slides:
     * - on destroying, to bring anchors to its initial state
     */
    Events.on('destroy', function () {
      Anchors.attach();
      Anchors.unbind();
      Binder.destroy();
    });

    return Anchors;
  }

  var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
  var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

  function Controls (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Controls = {
      /**
       * Inits arrows. Binds events listeners
       * to the arrows HTML elements.
       *
       * @return {Void}
       */
      mount: function mount() {
        /**
         * Collection of navigation HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

        /**
         * Collection of controls HTML elements.
         *
         * @private
         * @type {HTMLCollection}
         */
        this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

        this.addBindings();
      },


      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      setActive: function setActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.addClass(this._n[i].children);
        }
      },


      /**
       * Removes active class to current slide.
       *
       * @return {Void}
       */
      removeActive: function removeActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.removeClass(this._n[i].children);
        }
      },


      /**
       * Toggles active class on items inside navigation.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      addClass: function addClass(controls) {
        var settings = Glide.settings;
        var item = controls[Glide.index];

        item.classList.add(settings.classes.activeNav);

        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.activeNav);
        });
      },


      /**
       * Removes active class from active control.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      removeClass: function removeClass(controls) {
        controls[Glide.index].classList.remove(Glide.settings.classes.activeNav);
      },


      /**
       * Adds handles to the each group of controls.
       *
       * @return {Void}
       */
      addBindings: function addBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.bind(this._c[i].children);
        }
      },


      /**
       * Removes handles from the each group of controls.
       *
       * @return {Void}
       */
      removeBindings: function removeBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.unbind(this._c[i].children);
        }
      },


      /**
       * Binds events to arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      bind: function bind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.on(['click', 'touchstart'], elements[i], this.click);
        }
      },


      /**
       * Unbinds events binded to the arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      unbind: function unbind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.off(['click', 'touchstart'], elements[i]);
        }
      },


      /**
       * Handles `click` event on the arrows HTML elements.
       * Moves slider in driection precised in
       * `data-glide-dir` attribute.
       *
       * @param {Object} event
       * @return {Void}
       */
      click: function click(event) {
        event.preventDefault();

        Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
      }
    };

    define(Controls, 'items', {
      /**
       * Gets collection of the controls HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Controls._c;
      }
    });

    /**
     * Swap active class of current navigation item:
     * - after mounting to set it to initial index
     * - after each move to the new index
     */
    Events.on(['mount.after', 'move.after'], function () {
      Controls.setActive();
    });

    /**
     * Remove bindings and HTML Classes:
     * - on destroying, to bring markup to its initial state
     */
    Events.on('destroy', function () {
      Controls.removeBindings();
      Controls.removeActive();
      Binder.destroy();
    });

    return Controls;
  }

  function Keyboard (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Keyboard = {
      /**
       * Binds keyboard events on component mount.
       *
       * @return {Void}
       */
      mount: function mount() {
        if (Glide.settings.keyboard) {
          this.bind();
        }
      },


      /**
       * Adds keyboard press events.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on('keyup', document, this.press);
      },


      /**
       * Removes keyboard press events.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off('keyup', document);
      },


      /**
       * Handles keyboard's arrows press and moving glide foward and backward.
       *
       * @param  {Object} event
       * @return {Void}
       */
      press: function press(event) {
        if (event.keyCode === 39) {
          Components.Run.make(Components.Direction.resolve('>'));
        }

        if (event.keyCode === 37) {
          Components.Run.make(Components.Direction.resolve('<'));
        }
      }
    };

    /**
     * Remove bindings from keyboard:
     * - on destroying to remove added events
     * - on updating to remove events before remounting
     */
    Events.on(['destroy', 'update'], function () {
      Keyboard.unbind();
    });

    /**
     * Remount component
     * - on updating to reflect potential changes in settings
     */
    Events.on('update', function () {
      Keyboard.mount();
    });

    /**
     * Destroy binder:
     * - on destroying to remove listeners
     */
    Events.on('destroy', function () {
      Binder.destroy();
    });

    return Keyboard;
  }

  function Autoplay (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    var Autoplay = {
      /**
       * Initializes autoplaying and events.
       *
       * @return {Void}
       */
      mount: function mount() {
        this.start();

        if (Glide.settings.hoverpause) {
          this.bind();
        }
      },


      /**
       * Starts autoplaying in configured interval.
       *
       * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Void}
       */
      start: function start() {
        var _this = this;

        if (Glide.settings.autoplay) {
          if (isUndefined(this._i)) {
            this._i = setInterval(function () {
              _this.stop();

              Components.Run.make('>');

              _this.start();
            }, this.time);
          }
        }
      },


      /**
       * Stops autorunning of the glide.
       *
       * @return {Void}
       */
      stop: function stop() {
        this._i = clearInterval(this._i);
      },


      /**
       * Stops autoplaying while mouse is over glide's area.
       *
       * @return {Void}
       */
      bind: function bind() {
        var _this2 = this;

        Binder.on('mouseover', Components.Html.root, function () {
          _this2.stop();
        });

        Binder.on('mouseout', Components.Html.root, function () {
          _this2.start();
        });
      },


      /**
       * Unbind mouseover events.
       *
       * @returns {Void}
       */
      unbind: function unbind() {
        Binder.off(['mouseover', 'mouseout'], Components.Html.root);
      }
    };

    define(Autoplay, 'time', {
      /**
       * Gets time period value for the autoplay interval. Prioritizes
       * times in `data-glide-autoplay` attrubutes over options.
       *
       * @return {Number}
       */
      get: function get() {
        var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

        if (autoplay) {
          return toInt(autoplay);
        }

        return toInt(Glide.settings.autoplay);
      }
    });

    /**
     * Stop autoplaying and unbind events:
     * - on destroying, to clear defined interval
     * - on updating via API to reset interval that may changed
     */
    Events.on(['destroy', 'update'], function () {
      Autoplay.unbind();
    });

    /**
     * Stop autoplaying:
     * - before each run, to restart autoplaying
     * - on pausing via API
     * - on destroying, to clear defined interval
     * - while starting a swipe
     * - on updating via API to reset interval that may changed
     */
    Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
      Autoplay.stop();
    });

    /**
     * Start autoplaying:
     * - after each run, to restart autoplaying
     * - on playing via API
     * - while ending a swipe
     */
    Events.on(['run.after', 'play', 'swipe.end'], function () {
      Autoplay.start();
    });

    /**
     * Remount autoplaying:
     * - on updating via API to reset interval that may changed
     */
    Events.on('update', function () {
      Autoplay.mount();
    });

    /**
     * Destroy a binder:
     * - on destroying glide instance to clearup listeners
     */
    Events.on('destroy', function () {
      Binder.destroy();
    });

    return Autoplay;
  }

  /**
   * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
   *
   * @param {Object} points
   * @returns {Object}
   */
  function sortBreakpoints(points) {
    if (isObject(points)) {
      return sortKeys(points);
    } else {
      warn('Breakpoints option must be an object');
    }

    return {};
  }

  function Breakpoints (Glide, Components, Events) {
    /**
     * Instance of the binder for DOM Events.
     *
     * @type {EventsBinder}
     */
    var Binder = new EventsBinder();

    /**
     * Holds reference to settings.
     *
     * @type {Object}
     */
    var settings = Glide.settings;

    /**
     * Holds reference to breakpoints object in settings. Sorts breakpoints
     * from smaller to larger. It is required in order to proper
     * matching currently active breakpoint settings.
     *
     * @type {Object}
     */
    var points = sortBreakpoints(settings.breakpoints);

    /**
     * Cache initial settings before overwritting.
     *
     * @type {Object}
     */
    var defaults = _extends$1({}, settings);

    var Breakpoints = {
      /**
       * Matches settings for currectly matching media breakpoint.
       *
       * @param {Object} points
       * @returns {Object}
       */
      match: function match(points) {
        if (typeof window.matchMedia !== 'undefined') {
          for (var point in points) {
            if (points.hasOwnProperty(point)) {
              if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
                return points[point];
              }
            }
          }
        }

        return defaults;
      }
    };

    /**
     * Overwrite instance settings with currently matching breakpoint settings.
     * This happens right after component initialization.
     */
    _extends$1(settings, Breakpoints.match(points));

    /**
     * Update glide with settings of matched brekpoint:
     * - window resize to update slider
     */
    Binder.on('resize', window, throttle(function () {
      Glide.settings = mergeOptions(settings, Breakpoints.match(points));
    }, Glide.settings.throttle));

    /**
     * Resort and update default settings:
     * - on reinit via API, so breakpoint matching will be performed with options
     */
    Events.on('update', function () {
      points = sortBreakpoints(points);

      defaults = _extends$1({}, settings);
    });

    /**
     * Unbind resize listener:
     * - on destroying, to bring markup to its initial state
     */
    Events.on('destroy', function () {
      Binder.off('resize', window);
    });

    return Breakpoints;
  }

  var COMPONENTS = {
    // Required
    Html: Html,
    Translate: Translate,
    Transition: Transition,
    Direction: Direction,
    Peek: Peek,
    Sizes: Sizes,
    Gaps: Gaps,
    Move: Move,
    Clones: Clones,
    Resize: Resize,
    Build: Build,
    Run: Run,

    // Optional
    Swipe: Swipe,
    Images: Images,
    Anchors: Anchors,
    Controls: Controls,
    Keyboard: Keyboard,
    Autoplay: Autoplay,
    Breakpoints: Breakpoints
  };

  var Glide$1 = function (_Core) {
    inherits(Glide$$1, _Core);

    function Glide$$1() {
      classCallCheck(this, Glide$$1);
      return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
    }

    createClass(Glide$$1, [{
      key: 'mount',
      value: function mount() {
        var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends$1({}, COMPONENTS, extensions));
      }
    }]);
    return Glide$$1;
  }(Glide);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows{-webkit-touch-callout:none;user-select:none}.glide__bullets{-webkit-touch-callout:none;user-select:none}.glide--rtl{direction:rtl}\n";
  styleInject(css);

  var css$1 = ".glide__slide {\n\ttext-align: center;\n}";
  styleInject(css$1);

  var defaultOptions = {
    conversation: "none",
    // or all
    cards: "hidden",
    // or visible
    linkColor: "rgb(33, 153, 256)",
    // default is blue
    theme: "light",
    // or dark
    height: 410
  };

  var errorLog = function errorLog(data) {
    console.error("[social-reviews]", data);
  };

  var validSocialNetworks = ['twitter', 'instagram'];

  var Reviews =
  /*#__PURE__*/
  function () {
    function Reviews(options) {
      _classCallCheck(this, Reviews);

      if (!options) {
        return errorLog("Required options are missing, please check documentation: https://github.com/techulus/social-reviews#quick-start");
      }

      if (!options.selector) {
        return errorLog("Option 'selector' is missing, please check documentation: https://github.com/techulus/social-reviews#quick-start");
      }

      if (!options.type || !validSocialNetworks.includes(options.type)) {
        return errorLog("Option 'type' is missing or invalid, please check documentation: https://github.com/techulus/social-reviews#quick-start");
      }

      if (!options.postIds || !options.postIds.length) {
        return errorLog("Option 'postIds' is missing, please check documentation: https://github.com/techulus/social-reviews#quick-start");
      }

      this.options = options;
      this.options.className = "".concat(options.selector.replace("#", ""), "-tweets");
      this.carouselOptions = {
        type: "carousel",
        perView: 3,
        gap: 20,
        autoplay: 5000,
        animationDuration: 750,
        hoverpause: true,
        breakpoints: {
          1200: {
            perView: 2
          },
          760: {
            perView: 1
          }
        }
      };
      var reviews = [];

      if (options.type === 'twitter') {
        reviews = this.generateTwitterReviews(options.postIds);
        this.updateContainer(options.selector, reviews);
        this.initializeCarousel(options.selector, Object.assign({}, this.carouselOptions, options.carouselOptions));
        this.initializeTwitter();
      } else if (options.type === 'instagram') {
        reviews = this.generateInstagramReviews(options.postIds);
        this.updateContainer(options.selector, reviews);
        this.initializeCarousel(options.selector, Object.assign({}, this.carouselOptions, options.carouselOptions));
      }
    }

    _createClass(Reviews, [{
      key: "updateContainer",
      value: function updateContainer(selector, reviews) {
        var container = document.querySelector(selector);
        container.className = "glide";
        var glideTrack = document.createElement("div");
        glideTrack.className = "glide__track";
        glideTrack.dataset.glideEl = "track";
        var glideUl = document.createElement("ul");
        glideUl.className = "glide__slides";
        reviews.forEach(function (review) {
          glideUl.innerHTML += review;
        });
        glideTrack.innerHTML = glideUl.outerHTML;
        container.innerHTML = glideTrack.outerHTML;
      }
    }, {
      key: "generateTwitterReviews",
      value: function generateTwitterReviews(ids) {
        var _this = this;

        var reviews = [];
        ids.forEach(function (id) {
          var review = document.createElement("li");
          review.className = _this.options.className + " glide__slide";
          review.id = id;
          reviews.push(review.outerHTML);
        });
        return reviews;
      }
    }, {
      key: "generateInstagramReviews",
      value: function generateInstagramReviews(ids) {
        var _this2 = this;

        var reviews = [];
        ids.forEach(function (id) {
          var review = document.createElement("li");
          review.className = _this2.options.className + " glide__slide";
          var iframe = document.createElement("iframe");
          iframe.src = "https://www.instagram.com/p/".concat(id, "/embed");
          iframe.frameBorder = "0";
          iframe.scrolling = "no";
          iframe.allowTransparency = "true";
          iframe.width = 350;
          iframe.height = defaultOptions.height || _this2.options.height;
          review.innerHTML = iframe.outerHTML;
          reviews.push(review.outerHTML);
        });
        return reviews;
      }
    }, {
      key: "initializeTwitter",
      value: function initializeTwitter() {
        var _this3 = this;

        var tweets = document.querySelectorAll("." + this.options.className);
        tweets.forEach(function (tweet) {
          twttr.widgets.createTweet(tweet.id, tweet, {
            conversation: _this3.options.conversation || defaultOptions.conversation,
            cards: _this3.options.cards || defaultOptions.cards,
            linkColor: _this3.options.linkColor || defaultOptions.linkColor,
            theme: _this3.options.theme || defaultOptions.theme
          });
        });
      }
    }, {
      key: "initializeCarousel",
      value: function initializeCarousel(selector, options) {
        new Glide$1(selector, options).mount();
      }
    }]);

    return Reviews;
  }();

  return Reviews;

})));
//# sourceMappingURL=social-reviews.js.map
