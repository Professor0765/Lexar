(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        1: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return O
            })), n.d(t, "l", (function() {
                return w
            })), n.d(t, "n", (function() {
                return _
            })), n.d(t, "m", (function() {
                return P
            })), n.d(t, "f", (function() {
                return j
            })), n.d(t, "b", (function() {
                return x
            })), n.d(t, "s", (function() {
                return S
            })), n.d(t, "h", (function() {
                return R
            })), n.d(t, "i", (function() {
                return k
            })), n.d(t, "e", (function() {
                return L
            })), n.d(t, "r", (function() {
                return E
            })), n.d(t, "k", (function() {
                return T
            })), n.d(t, "t", (function() {
                return N
            })), n.d(t, "o", (function() {
                return D
            })), n.d(t, "q", (function() {
                return A
            })), n.d(t, "g", (function() {
                return U
            })), n.d(t, "c", (function() {
                return $
            })), n.d(t, "j", (function() {
                return M
            })), n.d(t, "p", (function() {
                return F
            })), n.d(t, "a", (function() {
                return J
            })), n.d(t, "v", (function() {
                return H
            })), n.d(t, "u", (function() {
                return Y
            }));
            n(15), n(41), n(24), n(25);
            var r = n(18),
                o = n(4),
                c = n(5),
                l = n(8),
                f = (n(40), n(14), n(104), n(13), n(12), n(27), n(16), n(33), n(34), n(36), n(35), n(71), n(108), n(146), n(65), n(66), n(301), n(30), n(23), n(3)),
                h = n(9);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        Object(c.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function y(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, a) {
                            if (e) {
                                if ("string" == typeof e) return v(e, a);
                                var t = {}.toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? v(e, a) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, a = !0,
                    u = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, c = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                }
            }

            function v(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = Array(a); t < a; t++) n[t] = e[t];
                return n
            }

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t;
                    return void 0 === e[n] && (e[n] = 0), e[n]++
                }
            }

            function w(e) {
                f.default.config.errorHandler && f.default.config.errorHandler(e)
            }

            function _(e) {
                return e.then((function(e) {
                    return e.default || e
                }))
            }

            function P(e) {
                return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
            }

            function j(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = y(e.$children || []);
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        var o = t.value;
                        o.$fetch && n.push(o), o.$children && j(o, n)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return n
            }

            function x(e, t) {
                if (t || !e.options.__hasNuxtData) {
                    var n = e.options._originDataFn || e.options.data || function() {
                        return {}
                    };
                    e.options._originDataFn = n, e.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), m(m({}, data), t)
                    }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
                }
            }

            function S(e) {
                return e.options && e._Ctor === e || (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = f.default.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e
            }

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], e.matched.map((function(e, r) {
                    return Object.keys(e[n]).map((function(o) {
                        return t && t.push(r), e[n][o]
                    }))
                })))
            }

            function k(e) {
                return R(e, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
            }

            function L(e, t) {
                return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                    return Object.keys(e.components).reduce((function(r, o) {
                        return e.components[o] ? r.push(t(e.components[o], e.instances[o], e, o, n)) : delete e.components[o], r
                    }), [])
                })))
            }

            function E(e, t) {
                return Promise.all(L(e, function() {
                    var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r, o, c) {
                        var l, f;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, n();
                                case 4:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 7:
                                    if (e.prev = 7, e.t0 = e.catch(1), e.t0 && "ChunkLoadError" === e.t0.name && "undefined" != typeof window && window.sessionStorage) {
                                        l = Date.now();
                                        try {
                                            (!(f = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || f + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))
                                        } catch (e) {}
                                    }
                                    throw e.t0;
                                case 11:
                                    return o.components[c] = n = S(n), e.abrupt("return", "function" == typeof t ? t(n, r, o, c) : n);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t, n, r, o) {
                        return e.apply(this, arguments)
                    }
                }()))
            }

            function T(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, E(t);
                            case 4:
                                return e.abrupt("return", m(m({}, t), {}, {
                                    meta: R(t).map((function(e, n) {
                                        return m(m({}, e.options.meta), (t.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function N(e, t) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = Object(o.a)(regeneratorRuntime.mark((function e(t, n) {
                    var o, c, f, d;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.context || (t.context = {
                                    isStatic: !0,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: t,
                                    store: t.store,
                                    payload: n.payload,
                                    error: n.error,
                                    base: t.router.options.base,
                                    env: {
                                        baseUrl: "https://www.lexar.com/api/",
                                        Base_Lang: "/global/",
                                        Base_Title: "Lexar Global",
                                        LANGUAGE: "en_WW"
                                    }
                                }, n.ssrContext && (t.context.ssrContext = n.ssrContext), t.context.redirect = function(e, path, n) {
                                    if (e) {
                                        t.context._redirected = !0;
                                        var o = Object(r.a)(path);
                                        if ("number" == typeof e || "undefined" !== o && "object" !== o || (n = path || {}, path = e, o = Object(r.a)(path), e = 302), "object" === o && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(h.k)(path, n), window.location.assign(path), new Error("ERR_REDIRECT");
                                        t.context.next({
                                            path: path,
                                            query: n,
                                            status: e
                                        })
                                    }
                                }, t.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([T(n.route), T(n.from)]);
                            case 3:
                                o = e.sent, c = Object(l.a)(o, 2), f = c[0], d = c[1], n.route && (t.context.route = f), n.from && (t.context.from = d), n.error && (t.context.error = n.error), t.context.next = n.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function D(e, t, n) {
                return !e.length || t._redirected || t._errored || n && n.aborted ? Promise.resolve() : A(e[0], t).then((function() {
                    return D(e.slice(1), t, n)
                }))
            }

            function A(e, t) {
                var n;
                return (n = 2 === e.length ? new Promise((function(n) {
                    e(t, (function(e, data) {
                        e && t.error(e), n(data = data || {})
                    }))
                })) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function U(base, e) {
                if ("hash" === e) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var t = (path || "/") + window.location.search + window.location.hash;
                return Object(h.g)(t)
            }

            function $(e, t) {
                return function(e, t) {
                    for (var n = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(r.a)(e[i]) && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", X(t)));
                    return function(t, r) {
                        for (var path = "", data = t || {}, o = (r || {}).pretty ? z : encodeURIComponent, c = 0; c < e.length; c++) {
                            var l = e[c];
                            if ("string" != typeof l) {
                                var f = data[l.name || "pathMatch"],
                                    h = void 0;
                                if (null == f) {
                                    if (l.optional) {
                                        l.partial && (path += l.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + l.name + '" to be defined')
                                }
                                if (Array.isArray(f)) {
                                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                    if (0 === f.length) {
                                        if (l.optional) continue;
                                        throw new TypeError('Expected "' + l.name + '" to not be empty')
                                    }
                                    for (var d = 0; d < f.length; d++) {
                                        if (h = o(f[d]), !n[c].test(h)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(h) + "`");
                                        path += (0 === d ? l.prefix : l.delimiter) + h
                                    }
                                } else {
                                    if (h = l.asterisk ? W(f) : o(f), !n[c].test(h)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + h + '"');
                                    path += l.prefix + h
                                }
                            } else path += l
                        }
                        return path
                    }
                }(function(e, t) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        l = t && t.delimiter || "/";
                    for (; null != (n = B.exec(e));) {
                        var f = n[0],
                            h = n[1],
                            d = n.index;
                        if (path += e.slice(c, d), c = d + f.length, h) path += h[1];
                        else {
                            var m = e[c],
                                y = n[2],
                                v = n[3],
                                O = n[4],
                                w = n[5],
                                _ = n[6],
                                P = n[7];
                            path && (r.push(path), path = "");
                            var j = null != y && null != m && m !== y,
                                x = "+" === _ || "*" === _,
                                S = "?" === _ || "*" === _,
                                R = n[2] || l,
                                pattern = O || w;
                            r.push({
                                name: v || o++,
                                prefix: y || "",
                                delimiter: R,
                                optional: S,
                                repeat: x,
                                partial: j,
                                asterisk: Boolean(P),
                                pattern: pattern ? G(pattern) : P ? ".*" : "[^" + K(R) + "]+?"
                            })
                        }
                    }
                    c < e.length && (path += e.substr(c));
                    path && r.push(path);
                    return r
                }(e, t), t)
            }

            function M(e, t) {
                var n = {},
                    r = m(m({}, e), t);
                for (var o in r) String(e[o]) !== String(t[o]) && (n[o] = !0);
                return n
            }

            function F(e) {
                var t;
                if (e.message || "string" == typeof e) t = e.message || e;
                else try {
                    t = JSON.stringify(e, null, 2)
                } catch (n) {
                    t = "[".concat(e.constructor.name, "]")
                }
                return m(m({}, e), {}, {
                    message: t,
                    statusCode: e.statusCode || e.status || e.response && e.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(e) {
                window.onNuxtReadyCbs.push(e)
            };
            var B = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function z(e, t) {
                var n = t ? /[?#]/g : /[/?#]/g;
                return encodeURI(e).replace(n, (function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function W(e) {
                return z(e, !0)
            }

            function K(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function G(e) {
                return e.replace(/([=!:$/()])/g, "\\$1")
            }

            function X(e) {
                return e && e.sensitive ? "" : "i"
            }

            function J(e, t, n) {
                e.$options[t] || (e.$options[t] = []), e.$options[t].includes(n) || e.$options[t].push(n)
            }
            var H = h.f;
            h.m, h.e;

            function Y(e) {
                try {
                    window.history.scrollRestoration = e
                } catch (e) {}
            }
        },
        268: function(e, t, n) {
            "use strict";
            var r = n(4),
                o = (n(40), n(12), n(13), n(3)),
                c = n(1),
                l = window.__NUXT__;

            function f() {
                if (!this._hydrated) return this.$fetch()
            }

            function h() {
                if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                    var e;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = l.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var t in data) o.default.set(this.$data, t, data[t])
                } else d.call(this)
            }

            function d() {
                var e = !1 !== this.$options.fetchOnServer;
                if ("function" == typeof this.$options.fetchOnServer && (e = !1 !== this.$options.fetchOnServer.call(this)), e && !this.$nuxt.isPreview && this.$nuxt._pagePayload) {
                    this._hydrated = !0;
                    var t = this.$options._scopeId || this.$options.name || "",
                        n = Object(c.d)(this.$nuxt._fetchCounters, t);
                    if ("function" == typeof this.$options.fetchKey) this._fetchKey = this.$options.fetchKey.call(this, n);
                    else {
                        var r = "string" == typeof this.$options.fetchKey ? this.$options.fetchKey : t;
                        this._fetchKey = r ? r + ":" + n(r) : String(n(r))
                    }
                    var data = this.$nuxt._pagePayload.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else if (data)
                        for (var l in data) o.default.set(this.$data, l, data[l]);
                    else this.$fetch()
                }
            }

            function m() {
                var e = this;
                return this._fetchPromise || (this._fetchPromise = y.call(this).then((function() {
                    delete e._fetchPromise
                }))), this._fetchPromise
            }

            function y() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function e() {
                    var t, n, r, o = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, t = null, n = Date.now(), e.prev = 6, e.next = 9, this.$options.fetch.call(this);
                            case 9:
                                e.next = 15;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(6), t = Object(c.p)(e.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    e.next = 19;
                                    break
                                }
                                return e.next = 19, new Promise((function(e) {
                                    return setTimeout(e, r)
                                }));
                            case 19:
                                this.$fetchState.error = t, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            t.a = {
                beforeCreate: function() {
                    Object(c.m)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = m.bind(this), Object(c.a)(this, "created", h), Object(c.a)(this, "beforeMount", f))
                }
            }
        },
        269: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            n(13), n(12);
            var r = {},
                o = {},
                c = {};

            function l(e, t) {
                if (r[e]) return Promise.resolve(r[e]);
                if (c[e]) return Promise.reject(c[e]);
                if (o[e]) return o[e];
                var n, l, f = o[e] = new Promise((function(e, t) {
                    n = e, l = t
                }));
                delete r[e];
                var h, script = document.createElement("script");
                script.charset = "utf-8", script.timeout = 120, script.src = t;
                var d = new Error,
                    m = script.onerror = script.onload = function(t) {
                        if (clearTimeout(h), delete o[e], script.onerror = script.onload = null, r[e]) return n(r[e]);
                        var f = t && ("load" === t.type ? "missing" : t.type),
                            m = t && t.target && t.target.src;
                        d.message = "Loading chunk " + e + " failed.\n(" + f + ": " + m + ")", d.name = "ChunkLoadError", d.type = f, d.request = m, c[e] = d, l(d)
                    };
                return h = setTimeout((function() {
                    m({
                        type: "timeout",
                        target: script
                    })
                }), 12e4), document.head.appendChild(script), f
            }

            function f() {
                window.__NUXT_JSONP__ = function(e, t) {
                    r[e] = t
                }, window.__NUXT_JSONP_CACHE__ = r, window.__NUXT_IMPORT__ = l
            }
        },
        50: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return Rt
            })), n.d(t, "a", (function() {
                return L.a
            }));
            n(16), n(15), n(14), n(24), n(25);
            var r = n(4),
                o = n(5),
                c = (n(40), n(12), n(27), n(13), n(35), n(3)),
                l = n(94),
                f = n(93),
                h = n(154),
                d = n.n(h),
                m = n(76),
                y = n.n(m),
                v = n(155),
                O = n(9),
                w = n(1);
            n(126);
            "scrollRestoration" in window.history && (Object(w.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(w.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(w.u)("manual")
            })));

            function _(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = function() {
                    return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(84)]).then(n.bind(null, 1028)))
                },
                x = function() {};
            c.default.use(v.a);
            var S = {
                mode: "history",
                base: "/global/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(e, t, n) {
                    var r = !1,
                        o = e !== t;
                    n ? r = n : o && function(e) {
                        var t = Object(w.h)(e);
                        if (1 === t.length) {
                            var n = t[0].options;
                            return !1 !== (void 0 === n ? {} : n).scrollToTop
                        }
                        return t.some((function(e) {
                            var t = e.options;
                            return t && t.scrollToTop
                        }))
                    }(e) && (r = {
                        x: 0,
                        y: 0
                    });
                    var c = window.$nuxt;
                    return (!o || e.path === t.path && e.hash !== t.hash) && c.$nextTick((function() {
                        return c.$emit("triggerScroll")
                    })), new Promise((function(t) {
                        c.$once("triggerScroll", (function() {
                            if (e.hash) {
                                var n = e.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    var o = document.querySelector(n);
                                    if (o) {
                                        var c;
                                        r = {
                                            selector: n
                                        };
                                        var l = Number(null === (c = getComputedStyle(o)["scroll-margin-top"]) || void 0 === c ? void 0 : c.replace("px", ""));
                                        l && (r.offset = {
                                            y: l
                                        })
                                    }
                                } catch (e) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            t(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(43)]).then(n.bind(null, 1021)))
                    },
                    name: "index"
                }, {
                    path: "/product",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(51)]).then(n.bind(null, 1022)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "product list",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "product"
                }, {
                    path: "/products/memory-cards",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(55)]).then(n.bind(null, 1023)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "memory cards",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "memory-cards"
                }, {
                    path: "/products/portable-storage",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(56)]).then(n.bind(null, 1024)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "portable storage",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "portable-storage"
                }, {
                    path: "/products/ssd",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(57)]).then(n.bind(null, 1025)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "ssd",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "ssd"
                }, {
                    path: "/products/memory",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(54)]).then(n.bind(null, 1026)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "memory",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "memory"
                }, {
                    path: "/products/accessories",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(53)]).then(n.bind(null, 1027)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "accessories",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "accessories"
                }, {
                    path: "/products/:productCode",
                    component: j,
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "",
                            relId: "",
                            type: 2
                        }
                    },
                    name: "productsWithParam"
                }, {
                    path: "/products",
                    component: j,
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "",
                            relId: "",
                            type: 2
                        }
                    },
                    name: "products"
                }, {
                    path: "/product-preview/:productCode",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(83)]).then(n.bind(null, 1029)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "",
                            relId: "",
                            type: 2
                        }
                    },
                    name: "previewWithParam"
                }, {
                    path: "/special",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1)]).then(n.bind(null, 1014)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "",
                            relId: "",
                            type: 2
                        },
                        keepFoot: !0
                    },
                    name: "special"
                }, {
                    path: "/special2",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(44)]).then(n.bind(null, 1030)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "",
                            relId: "",
                            type: 2
                        },
                        keepFoot: !0
                    },
                    name: "special2"
                }, {
                    path: "/parameters",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(52)]).then(n.bind(null, 1031)))
                    },
                    meta: {
                        highlight: "PRODUCTS",
                        banner: {
                            code: "",
                            relId: "",
                            type: 2
                        }
                    },
                    name: "parameters"
                }, {
                    path: "/solution",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(86)]).then(n.bind(null, 1032)))
                    },
                    meta: {
                        highlight: "SOLUTIONS",
                        banner: {
                            code: "solutions list",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "solution"
                }, {
                    path: "/solution/:solutionName",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(45)]).then(n.bind(null, 1033)))
                    },
                    meta: {
                        highlight: "SOLUTIONS",
                        banner: {
                            type: 3
                        }
                    },
                    name: "solutionDetail"
                }, {
                    path: "/support",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(91)]).then(n.bind(null, 1034)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "support",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "support"
                }, {
                    path: "/faq",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(90)]).then(n.bind(null, 1035)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "support-FAQ",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "faq"
                }, {
                    path: "/warranty",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(60)]).then(n.bind(null, 1071)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "support-Warranty Inf",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "warranty"
                }, {
                    path: "/compatibility",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(87)]).then(n.bind(null, 1036)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "Compatibility",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "compatibility"
                }, {
                    path: "/compatibility2",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(88)]).then(n.bind(null, 1037)))
                    },
                    meta: {
                        highlight: "SUPPORT"
                    },
                    name: "compatibility2"
                }, {
                    path: "/compatibility3",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(89)]).then(n.bind(null, 1038)))
                    },
                    meta: {
                        highlight: "SUPPORT"
                    },
                    name: "compatibility3"
                }, {
                    path: "/compatibility4",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(58)]).then(n.bind(null, 1039)))
                    },
                    meta: {
                        highlight: "SUPPORT"
                    },
                    name: "compatibility4"
                }, {
                    path: "/information",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(92)]).then(n.bind(null, 1040)))
                    },
                    meta: {
                        highlight: "SUPPORT"
                    },
                    name: "information"
                }, {
                    path: "/technical",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(65)]).then(n.bind(null, 1041)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "Technical Support",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "technical"
                }, {
                    path: "/download",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(64)]).then(n.bind(null, 1042)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "download",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "download"
                }, {
                    path: "/service",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(47)]).then(n.bind(null, 1043)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "After-sales service",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "service"
                }, {
                    path: "/verifi",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(48)]).then(n.bind(null, 1044)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "Product verificatio",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "verifi"
                }, {
                    path: "/rma",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(46)]).then(n.bind(null, 1045)))
                    },
                    meta: {
                        highlight: "SUPPORT",
                        banner: {
                            code: "RMA",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "rma"
                }, {
                    path: "/community",
                    component: function() {
                        return Object(w.n)(n.e(59).then(n.bind(null, 1046)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "COMMUNITY",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "community"
                }, {
                    path: "/eliteteam",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(63)]).then(n.bind(null, 1047)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "Elite Photographers",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "eliteteam"
                }, {
                    path: "/photographer/:dynamicParam",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(77)]).then(n.bind(null, 1048)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "Elite Photographers",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "photographer"
                }, {
                    path: "/ambassador",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(74)]).then(n.bind(null, 1049)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "Ambassadors",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "ambassador"
                }, {
                    path: "/ambassador/:dynamicParam",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(73)]).then(n.bind(null, 1050)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "Ambassadors",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "ambassadorDetail"
                }, {
                    path: "/blog",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(76)]).then(n.bind(null, 1051)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "BLOG",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "blog"
                }, {
                    path: "/blog/:dynamicParam",
                    component: function() {
                        return Object(w.n)(n.e(75).then(n.bind(null, 1052)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "BLOG",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "blogDetail"
                }, {
                    path: "/event",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(79)]).then(n.bind(null, 1053)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "EVENT",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "event"
                }, {
                    path: "/event/:dynamicParam",
                    component: function() {
                        return Object(w.n)(n.e(78).then(n.bind(null, 1054)))
                    },
                    meta: {
                        highlight: "COMMUNITY",
                        banner: {
                            code: "EVENT",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "eventDetail"
                }, {
                    path: "/about",
                    component: function() {
                        return Object(w.n)(n.e(67).then(n.bind(null, 1055)))
                    },
                    meta: {
                        highlight: "ABOUT US",
                        banner: {
                            code: "About Us",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "about"
                }, {
                    path: "/quality",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(39)]).then(n.bind(null, 1056)))
                    },
                    meta: {
                        highlight: "ABOUT US",
                        banner: {
                            code: "Quality Labs",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "quality"
                }, {
                    path: "/contact",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(49)]).then(n.bind(null, 1057)))
                    },
                    meta: {
                        highlight: "ABOUT US",
                        banner: {
                            code: "contact",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "contact"
                }, {
                    path: "/terms-of-use",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(66)]).then(n.bind(null, 1058)))
                    },
                    meta: {
                        highlight: "ABOUT US"
                    },
                    name: "terms-of-use"
                }, {
                    path: "/news",
                    component: function() {
                        return Object(w.n)(n.e(82).then(n.bind(null, 1059)))
                    },
                    meta: {
                        highlight: "ABOUT US"
                    },
                    name: "news"
                }, {
                    path: "/news/:dynamicParam",
                    component: function() {
                        return Object(w.n)(n.e(50).then(n.bind(null, 1060)))
                    },
                    meta: {
                        highlight: "ABOUT US"
                    },
                    name: "newsDetail"
                }, {
                    path: "/store",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(41)]).then(n.bind(null, 1018)))
                    },
                    meta: {
                        highlight: "WHERE TO BUY",
                        banner: {
                            code: "WHERE TO BUY",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "store"
                }, {
                    path: "/centerInfo",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(69)]).then(n.bind(null, 1061)))
                    },
                    meta: {
                        keepHead: !0
                    },
                    name: "centerInfo"
                }, {
                    path: "/passwrord",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(72)]).then(n.bind(null, 1062)))
                    },
                    meta: {
                        keepHead: !0
                    },
                    name: "passwrord"
                }, {
                    path: "/logoff",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(71)]).then(n.bind(null, 1063)))
                    },
                    meta: {
                        keepHead: !0
                    },
                    name: "logoff"
                }, {
                    path: "/device",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(61)]).then(n.bind(null, 1064)))
                    },
                    meta: {
                        keepHead: !0
                    },
                    name: "device"
                }, {
                    path: "/device2",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(68)]).then(n.bind(null, 1065)))
                    },
                    meta: {
                        keepHead: !0
                    },
                    name: "device2"
                }, {
                    path: "/login",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(70)]).then(n.bind(null, 1066)))
                    },
                    meta: {
                        keepHead: !0,
                        keepFoot: !0
                    },
                    name: "login"
                }, {
                    path: "/forgot",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(62)]).then(n.bind(null, 1067)))
                    },
                    meta: {
                        keepHead: !0,
                        keepFoot: !0
                    },
                    name: "forgot"
                }, {
                    path: "/search",
                    component: function() {
                        return Object(w.n)(n.e(85).then(n.bind(null, 1068)))
                    },
                    name: "search"
                }, {
                    path: "/legal/cookies",
                    component: function() {
                        return Object(w.n)(n.e(80).then(n.bind(null, 1069)))
                    },
                    name: "legal-cookies"
                }, {
                    path: "/legal/policy",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(81)]).then(n.bind(null, 1070)))
                    },
                    name: "legal-policy"
                }, {
                    path: "/Lexar-black-friday-2024",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(5), n.e(3), n.e(4), n.e(8), n.e(9), n.e(6), n.e(13), n.e(10), n.e(12), n.e(7), n.e(11), n.e(37)]).then(n.bind(null, 1017)))
                    },
                    meta: {
                        blackTheme: !0
                    },
                    name: "black-five"
                }, {
                    path: "/partner-form",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(0), n.e(2), n.e(1), n.e(42)]).then(n.bind(null, 1019)))
                    },
                    meta: {
                        banner: {
                            code: "RESELLER APPLICATION",
                            relId: 1,
                            type: 1
                        }
                    },
                    name: "partner-form"
                }, {
                    path: "/Lexar-cup-2025-apply",
                    component: function() {
                        return Object(w.n)(Promise.all([n.e(38), n.e(40)]).then(n.bind(null, 1020)))
                    },
                    meta: {
                        blackTheme: !0
                    },
                    name: "cup-activity"
                }, {
                    path: "/404",
                    component: function() {
                        return Object(w.n)(Promise.resolve().then(n.bind(null, 270)))
                    },
                    meta: {},
                    name: "404"
                }],
                fallback: !1
            };

            function R(e, t) {
                var base = t._app && t._app.basePath || S.base,
                    n = new v.a(P(P({}, S), {}, {
                        base: base
                    })),
                    r = n.push;
                n.push = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, e, t, n)
                };
                var o = n.resolve.bind(n);
                return n.resolve = function(e, t, n) {
                    return "string" == typeof e && (e = Object(O.g)(e)), o(e, t, n)
                }, n
            }
            var k = n(75),
                L = n(59),
                E = n(156),
                T = n(272);
            n(43), n(23);
            c.default.use(l.a);
            var I = ["state", "getters", "actions", "mutations"],
                N = {};
            (N = function(e, t) {
                if ((e = e.default || e).commit) throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
                return "function" != typeof e && (e = Object.assign({}, e)), D(e, t)
            }(n(363), "store/index.js")).modules = N.modules || {},
                function(e, t) {
                    e = e.default || e;
                    var n = t.replace(/\.(js|mjs)$/, "").split("/"),
                        r = n[n.length - 1],
                        o = "store/".concat(t);
                    if (e = "state" === r ? function(e, t) {
                            if ("function" != typeof e) {
                                console.warn("".concat(t, " should export a method that returns an object"));
                                var n = Object.assign({}, e);
                                return function() {
                                    return n
                                }
                            }
                            return D(e, t)
                        }(e, o) : D(e, o), I.includes(r)) {
                        var c = r;
                        U(A(N, n, {
                            isProperty: !0
                        }), e, c)
                    } else {
                        "index" === r && (n.pop(), r = n[n.length - 1]);
                        for (var l = A(N, n), f = 0, h = I; f < h.length; f++) {
                            var d = h[f];
                            U(l, e[d], d)
                        }!1 === e.namespaced && delete l.namespaced
                    }
                }(n(279), "blackFive.js");
            var C = N instanceof Function ? N : function() {
                return new l.a.Store(Object.assign({
                    strict: !1
                }, N))
            };

            function D(e, t) {
                if (e.state && "function" != typeof e.state) {
                    console.warn("'state' should be a method that returns an object in ".concat(t));
                    var n = Object.assign({}, e.state);
                    e = Object.assign({}, e, {
                        state: function() {
                            return n
                        }
                    })
                }
                return e
            }

            function A(e, t) {
                var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).isProperty,
                    r = void 0 !== n && n;
                if (!t.length || r && 1 === t.length) return e;
                var o = t.shift();
                return e.modules[o] = e.modules[o] || {}, e.modules[o].namespaced = !0, e.modules[o].modules = e.modules[o].modules || {}, A(e.modules[o], t, {
                    isProperty: r
                })
            }

            function U(e, t, n) {
                t && ("state" === n ? e.state = t || e.state : e[n] = Object.assign({}, e[n], t))
            }
            var $ = n(169),
                M = n(426),
                F = n(124),
                B = n(125),
                z = n(276),
                W = {
                    screens: {
                        xs: 320,
                        sm: 640,
                        md: 768,
                        lg: 1024,
                        xl: 1280,
                        xxl: 1536,
                        "2xl": 1536
                    },
                    presets: {},
                    provider: "static",
                    domains: [],
                    alias: {}
                };
            W.providers = Object(o.a)({}, "static", {
                provider: z,
                defaults: {}
            }), c.default.component(F.a.name, F.a), c.default.component(B.a.name, B.a), c.default.component("NImg", F.a), c.default.component("NPicture", B.a);
            var K = function(e, t) {
                    t("img", Object(M.a)(W, e))
                },
                G = n(157),
                X = n(18),
                J = n(8),
                H = (n(52), n(104), n(30), n(250)),
                Y = n(251),
                V = n(252),
                Q = n(253),
                Z = n(254),
                ee = n(255),
                te = n(256),
                ne = n(257),
                re = n(258),
                oe = n(259),
                ae = n(260),
                ie = n(261),
                ce = n(262),
                se = n(263),
                le = {
                    COMPONENT_OPTIONS_KEY: "nuxtI18n",
                    STRATEGIES: {
                        PREFIX: "prefix",
                        PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
                        PREFIX_AND_DEFAULT: "prefix_and_default",
                        NO_PREFIX: "no_prefix"
                    }
                },
                ue = !0,
                fe = void 0,
                pe = {
                    vueI18n: {},
                    vueI18nLoader: !1,
                    locales: [{
                        code: "en_US",
                        iso: "en_US",
                        name: "English (US)",
                        file: "en_US.json"
                    }, {
                        code: "fr_FR",
                        iso: "fr_FR",
                        name: "Français",
                        file: "fr_FR.json"
                    }, {
                        code: "de_DE",
                        iso: "de_DE",
                        name: "Deutsch",
                        file: "de_DE.json"
                    }, {
                        code: "es_ES",
                        iso: "es_ES",
                        name: "Español",
                        file: "es_ES.json"
                    }, {
                        code: "it_IT",
                        iso: "it_IT",
                        name: "Italiano",
                        file: "it_IT.json"
                    }, {
                        code: "zh_CN",
                        iso: "zh_CN",
                        name: "简体中文",
                        file: "zh_CN.json"
                    }, {
                        code: "ja_JP",
                        iso: "ja_JP",
                        name: "日本語",
                        file: "ja_JP.json"
                    }, {
                        code: "zh_TW",
                        iso: "zh_TW",
                        name: "繁體中文",
                        file: "zh_TW.json"
                    }, {
                        code: "en_WW",
                        iso: "en_WW",
                        name: "English(Global)",
                        file: "en_WW.json"
                    }, {
                        code: "pl_PL",
                        iso: "pl_PL",
                        name: "Język polski",
                        file: "pl_PL.json"
                    }, {
                        code: "ar_AE",
                        iso: "ar_AE",
                        name: "بالعربية",
                        file: "ar_AE.json"
                    }, {
                        code: "vi_VN",
                        iso: "vi_VN",
                        name: "TiếngViệt",
                        file: "vi_VN.json"
                    }, {
                        code: "en_GB",
                        iso: "en_GB",
                        name: "British/English",
                        file: "en_GB.json"
                    }, {
                        code: "ko_KR",
                        iso: "ko_KR",
                        name: "한국어",
                        file: "ko_KR.json"
                    }],
                    defaultLocale: "en_WW",
                    defaultDirection: "ltr",
                    routesNameSeparator: "___",
                    defaultLocaleRouteNameSuffix: "default",
                    sortRoutes: !0,
                    strategy: "no_prefix",
                    lazy: !1,
                    langDir: "/var/lib/jenkins/workspace/prod-lexar-www/prod-h5-lexar-www-web-all/locales",
                    rootRedirect: null,
                    detectBrowserLanguage: {
                        alwaysRedirect: !1,
                        cookieCrossOrigin: !1,
                        cookieDomain: null,
                        cookieKey: "lang",
                        cookieSecure: !1,
                        fallbackLocale: "",
                        onlyOnNoPrefix: !1,
                        onlyOnRoot: !1,
                        useCookie: !0,
                        redirectOn: "root"
                    },
                    differentDomains: !1,
                    seo: !1,
                    baseUrl: "",
                    vuex: {
                        moduleName: "i18n",
                        syncLocale: !1,
                        syncMessages: !1,
                        syncRouteParams: !0
                    },
                    parsePages: !0,
                    pages: {},
                    skipSettingLocaleOnNavigate: !1,
                    beforeLanguageSwitch: function() {
                        return null
                    },
                    onBeforeLanguageSwitch: function() {},
                    onLanguageSwitched: function() {
                        return null
                    },
                    normalizedLocales: [{
                        code: "en_US",
                        iso: "en_US",
                        name: "English (US)",
                        file: "en_US.json"
                    }, {
                        code: "fr_FR",
                        iso: "fr_FR",
                        name: "Français",
                        file: "fr_FR.json"
                    }, {
                        code: "de_DE",
                        iso: "de_DE",
                        name: "Deutsch",
                        file: "de_DE.json"
                    }, {
                        code: "es_ES",
                        iso: "es_ES",
                        name: "Español",
                        file: "es_ES.json"
                    }, {
                        code: "it_IT",
                        iso: "it_IT",
                        name: "Italiano",
                        file: "it_IT.json"
                    }, {
                        code: "zh_CN",
                        iso: "zh_CN",
                        name: "简体中文",
                        file: "zh_CN.json"
                    }, {
                        code: "ja_JP",
                        iso: "ja_JP",
                        name: "日本語",
                        file: "ja_JP.json"
                    }, {
                        code: "zh_TW",
                        iso: "zh_TW",
                        name: "繁體中文",
                        file: "zh_TW.json"
                    }, {
                        code: "en_WW",
                        iso: "en_WW",
                        name: "English(Global)",
                        file: "en_WW.json"
                    }, {
                        code: "pl_PL",
                        iso: "pl_PL",
                        name: "Język polski",
                        file: "pl_PL.json"
                    }, {
                        code: "ar_AE",
                        iso: "ar_AE",
                        name: "بالعربية",
                        file: "ar_AE.json"
                    }, {
                        code: "vi_VN",
                        iso: "vi_VN",
                        name: "TiếngViệt",
                        file: "vi_VN.json"
                    }, {
                        code: "en_GB",
                        iso: "en_GB",
                        name: "British/English",
                        file: "en_GB.json"
                    }, {
                        code: "ko_KR",
                        iso: "ko_KR",
                        name: "한국어",
                        file: "ko_KR.json"
                    }],
                    localeCodes: ["en_US", "fr_FR", "de_DE", "es_ES", "it_IT", "zh_CN", "ja_JP", "zh_TW", "en_WW", "pl_PL", "ar_AE", "vi_VN", "en_GB", "ko_KR"]
                },
                he = {
                    "en_US.json": function() {
                        return Promise.resolve(H)
                    },
                    "fr_FR.json": function() {
                        return Promise.resolve(Y)
                    },
                    "de_DE.json": function() {
                        return Promise.resolve(V)
                    },
                    "es_ES.json": function() {
                        return Promise.resolve(Q)
                    },
                    "it_IT.json": function() {
                        return Promise.resolve(Z)
                    },
                    "zh_CN.json": function() {
                        return Promise.resolve(ee)
                    },
                    "ja_JP.json": function() {
                        return Promise.resolve(te)
                    },
                    "zh_TW.json": function() {
                        return Promise.resolve(ne)
                    },
                    "en_WW.json": function() {
                        return Promise.resolve(re)
                    },
                    "pl_PL.json": function() {
                        return Promise.resolve(oe)
                    },
                    "ar_AE.json": function() {
                        return Promise.resolve(ae)
                    },
                    "vi_VN.json": function() {
                        return Promise.resolve(ie)
                    },
                    "en_GB.json": function() {
                        return Promise.resolve(ce)
                    },
                    "ko_KR.json": function() {
                        return Promise.resolve(se)
                    }
                },
                de = (n(34), n(146), n(58), n(36), n(41), n(33), n(386), n(158)),
                me = n.n(de);

            function be(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, a) {
                            if (e) {
                                if ("string" == typeof e) return ge(e, a);
                                var t = {}.toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ge(e, a) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, a = !0,
                    u = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, c = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                }
            }

            function ge(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = Array(a); t < a; t++) n[t] = e[t];
                return n
            }

            function ye(text) {
                return "[nuxt-i18n] ".concat(text)
            }

            function ve(e, t) {
                var n, r = [],
                    o = [],
                    c = be(e);
                try {
                    for (c.s(); !(n = c.n()).done;) {
                        var l = n.value,
                            code = l.code,
                            f = l.iso || code;
                        o.push({
                            code: code,
                            iso: f
                        })
                    }
                } catch (e) {
                    c.e(e)
                } finally {
                    c.f()
                }
                var h, d = be(t.entries());
                try {
                    var m = function() {
                        var e = Object(J.a)(h.value, 2),
                            n = e[0],
                            c = e[1],
                            l = o.find((function(e) {
                                return e.iso.toLowerCase() === c.toLowerCase()
                            }));
                        if (l) return r.push({
                            code: l.code,
                            score: 1 - n / t.length
                        }), 1
                    };
                    for (d.s(); !(h = d.n()).done && !m(););
                } catch (e) {
                    d.e(e)
                } finally {
                    d.f()
                }
                var y, v = be(t.entries());
                try {
                    var O = function() {
                        var e = Object(J.a)(y.value, 2),
                            n = e[0],
                            c = e[1].split("-")[0].toLowerCase(),
                            l = o.find((function(e) {
                                return e.iso.split("-")[0].toLowerCase() === c
                            }));
                        if (l) return r.push({
                            code: l.code,
                            score: .999 - n / t.length
                        }), 1
                    };
                    for (v.s(); !(y = v.n()).done && !O(););
                } catch (e) {
                    v.e(e)
                } finally {
                    v.f()
                }
                return r.length > 1 && r.sort((function(e, t) {
                    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
                })), r.length ? r[0].code : void 0
            }

            function Oe(e, t) {
                var n;
                if (n = window.location.host) {
                    var r = e.find((function(e) {
                        return e.domain === n
                    }));
                    if (r) return r.code
                }
                return ""
            }

            function we(e) {
                return new RegExp("^/(".concat(e.join("|"), ")(?:/|$)"), "i")
            }

            function _e(e, t) {
                var n = t.routesNameSeparator,
                    r = t.defaultLocaleRouteNameSuffix,
                    o = "(".concat(e.join("|"), ")"),
                    c = "(?:".concat(n).concat(r, ")?"),
                    l = new RegExp("".concat(n).concat(o).concat(c, "$"), "i"),
                    f = we(e);
                return function(e) {
                    if (e.name) {
                        var t = e.name.match(l);
                        if (t && t.length > 1) return t[1]
                    } else if (e.path) {
                        var n = e.path.match(f);
                        if (n && n.length > 1) return n[1]
                    }
                    return ""
                }
            }

            function Pe(e, t) {
                var n, r = t.useCookie,
                    o = t.cookieKey,
                    c = t.localeCodes;
                if (r && ((n = me.a.get(o)) && c.includes(n))) return n
            }

            function je(e, t, n) {
                var r = n.useCookie,
                    o = n.cookieDomain,
                    c = n.cookieKey,
                    l = n.cookieSecure,
                    f = n.cookieCrossOrigin;
                if (r) {
                    var h = new Date,
                        d = {
                            expires: new Date(h.setDate(h.getDate() + 365)),
                            path: "/",
                            sameSite: f ? "none" : "lax",
                            secure: f || l
                        };
                    o && (d.domain = o), me.a.set(c, e, d)
                }
            }
            var xe = n(63);

            function Se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Se(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ke(e, t) {
                return Le.apply(this, arguments)
            }

            function Le() {
                return (Le = Object(r.a)(regeneratorRuntime.mark((function e(t, n) {
                    var r, o, c, l, f, h, d;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.app, (o = r.i18n).loadedLanguages || (o.loadedLanguages = []), o.loadedLanguages.includes(n)) {
                                    e.next = 34;
                                    break
                                }
                                if (!(c = pe.normalizedLocales.find((function(e) {
                                        return e.code === n
                                    })))) {
                                    e.next = 33;
                                    break
                                }
                                if (!(l = c.file)) {
                                    e.next = 30;
                                    break
                                }
                                if ((h = t.nuxtState) && h.__i18n && h.__i18n.langs[n] && (f = h.__i18n.langs[n], t.isDev && he[l]()), f) {
                                    e.next = 27;
                                    break
                                }
                                return e.prev = 10, e.next = 13, he[l]().then((function(e) {
                                    return e.default || e
                                }));
                            case 13:
                                if ("function" != typeof(d = e.sent)) {
                                    e.next = 20;
                                    break
                                }
                                return e.next = 17, Promise.resolve(d(t, n));
                            case 17:
                                e.t0 = e.sent, e.next = 21;
                                break;
                            case 20:
                                e.t0 = d;
                            case 21:
                                f = e.t0, e.next = 27;
                                break;
                            case 24:
                                e.prev = 24, e.t1 = e.catch(10), console.error(ye("Failed loading async locale export: ".concat(e.t1.message)));
                            case 27:
                                f && (o.setLocaleMessage(n, f), o.loadedLanguages.push(n)), e.next = 31;
                                break;
                            case 30:
                                console.warn(ye("Could not find lang file for locale ".concat(n)));
                            case 31:
                                e.next = 34;
                                break;
                            case 33:
                                console.warn(ye('Attempted to load messages for non-existant locale code "'.concat(n, '"')));
                            case 34:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [10, 24]
                    ])
                })))).apply(this, arguments)
            }

            function Ee(e, t, n, r) {
                var o = r.differentDomains,
                    c = r.normalizedLocales;
                if ("function" == typeof e) return e(t);
                if (o && n) {
                    var l = Te(n, t.req, {
                        normalizedLocales: c
                    });
                    if (l) return l
                }
                return e
            }

            function Te(e, t, n) {
                var r, o = n.normalizedLocales.find((function(t) {
                    return t.code === e
                }));
                if (o && o.domain) return Object(xe.hasProtocol)(o.domain) ? o.domain : (r = window.location.protocol.split(":")[0], "".concat(r, "://").concat(o.domain));
                console.warn(ye("Could not find domain name for locale ".concat(e)))
            }

            function Ie(e, t, n) {
                var r = {
                    namespaced: !0,
                    state: function() {
                        return Re(Re(Re({}, t.syncLocale ? {
                            locale: ""
                        } : {}), t.syncMessages ? {
                            messages: {}
                        } : {}), t.syncRouteParams ? {
                            routeParams: {}
                        } : {})
                    },
                    actions: Re(Re(Re({}, t.syncLocale ? {
                        setLocale: function(e, t) {
                            (0, e.commit)("setLocale", t)
                        }
                    } : {}), t.syncMessages ? {
                        setMessages: function(e, t) {
                            (0, e.commit)("setMessages", t)
                        }
                    } : {}), t.syncRouteParams ? {
                        setRouteParams: function(e, t) {
                            (0, e.commit)("setRouteParams", t)
                        }
                    } : {}),
                    mutations: Re(Re(Re({}, t.syncLocale ? {
                        setLocale: function(e, t) {
                            e.locale = t
                        }
                    } : {}), t.syncMessages ? {
                        setMessages: function(e, t) {
                            e.messages = t
                        }
                    } : {}), t.syncRouteParams ? {
                        setRouteParams: function(e, t) {
                            e.routeParams = t
                        }
                    } : {}),
                    getters: Re({}, t.syncRouteParams ? {
                        localeRouteParams: function(e) {
                            var t = e.routeParams;
                            return function(e) {
                                return t && t[e] || {}
                            }
                        }
                    } : {})
                };
                e.registerModule(t.moduleName, r, {
                    preserveState: !!e.state[t.moduleName]
                })
            }

            function Ne(e) {
                return Ce.apply(this, arguments)
            }

            function Ce() {
                return Ce = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                    var n, r, o, c = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = c.length > 1 && void 0 !== c[1] ? c[1] : null, r = c.length > 2 && void 0 !== c[2] ? c[2] : null, !(o = c.length > 3 ? c[3] : void 0) || !t) {
                                    e.next = 10;
                                    break
                                }
                                if (null === n || !o.syncLocale) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 7, t.dispatch(o.moduleName + "/setLocale", n);
                            case 7:
                                if (null === r || !o.syncMessages) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 10, t.dispatch(o.moduleName + "/setMessages", r);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), Ce.apply(this, arguments)
            }
            var De = n(277),
                Ae = n(91),
                Ue = function() {
                    var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                        var n, r, o, c, l, f, h;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.app, !t.isHMR) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, n.i18n.__onNavigate(t.route);
                                case 5:
                                    r = e.sent, o = Object(J.a)(r, 3), c = o[0], l = o[1], f = o[2], c && l && (h = f ? t.route.query : void 0, t.redirect(c, l, h));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            Ae.a.nuxti18n = Ue;
            var $e = ["params"];

            function Me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Me(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Be(e, t) {
                var n = Ke.call(this, e, t);
                return n ? n.route.fullPath : ""
            }

            function ze(e, t) {
                var n = Ke.call(this, e, t);
                return n ? n.route : void 0
            }

            function We(e, t) {
                var n = Ke.call(this, e, t);
                return n ? n.location : void 0
            }

            function Ke(e, t) {
                if (e) {
                    var n = this.i18n;
                    if (t = t || n.locale) {
                        "string" == typeof e && (e = "/" === e[0] ? {
                            path: e
                        } : {
                            name: e
                        });
                        var r = Object.assign({}, e);
                        if (r.path && !r.name) {
                            var o = this.router.resolve(r).route,
                                c = this.getRouteBaseName(o);
                            if (c) r = {
                                name: Xe(c, t),
                                params: o.params,
                                query: o.query,
                                hash: o.hash
                            };
                            else !(t === pe.defaultLocale && [le.STRATEGIES.PREFIX_EXCEPT_DEFAULT, le.STRATEGIES.PREFIX_AND_DEFAULT].includes(pe.strategy) || pe.strategy === le.STRATEGIES.NO_PREFIX || n.differentDomains) && (r.path = "/".concat(t).concat(r.path)), r.path = fe ? Object(xe.withTrailingSlash)(r.path, !0) : Object(xe.withoutTrailingSlash)(r.path, !0)
                        } else {
                            r.name || r.path || (r.name = this.getRouteBaseName()), r.name = Xe(r.name, t);
                            var l = r.params;
                            l && void 0 === l[0] && l.pathMatch && (l[0] = l.pathMatch)
                        }
                        var f = this.router.resolve(r);
                        return f.route.name ? f : this.router.resolve(e)
                    }
                }
            }

            function Ge(e) {
                var t = this.getRouteBaseName();
                if (!t) return "";
                var n = this.i18n,
                    r = this.route,
                    o = this.store,
                    c = r.params,
                    l = Object(De.a)(r, $e),
                    f = {};
                pe.vuex && pe.vuex.syncRouteParams && o && (f = o.getters["".concat(pe.vuex.moduleName, "/localeRouteParams")](e));
                var h = Object.assign({}, l, {
                        name: t,
                        params: Fe(Fe(Fe({}, c), f), {}, {
                            0: c.pathMatch
                        })
                    }),
                    path = this.localePath(h, e);
                if (n.differentDomains) {
                    var d = {
                            differentDomains: n.differentDomains,
                            normalizedLocales: pe.normalizedLocales
                        },
                        m = Te(e, this.req, d);
                    m && (path = m + path)
                }
                return path
            }

            function qe(e) {
                var t = void 0 !== e ? e : this.route;
                if (t && t.name) return t.name.split(pe.routesNameSeparator)[0]
            }

            function Xe(e, t) {
                var n = e + (pe.strategy === le.STRATEGIES.NO_PREFIX ? "" : pe.routesNameSeparator + t);
                return t === pe.defaultLocale && pe.strategy === le.STRATEGIES.PREFIX_AND_DEFAULT && (n += pe.routesNameSeparator + pe.defaultLocaleRouteNameSuffix), n
            }
            var Je = function(e) {
                    return function() {
                        var t = {
                            getRouteBaseName: this.getRouteBaseName,
                            i18n: this.$i18n,
                            localePath: this.localePath,
                            localeRoute: this.localeRoute,
                            localeLocation: this.localeLocation,
                            req: null,
                            route: this.$route,
                            router: this.$router,
                            store: this.$store
                        };
                        return e.call.apply(e, [t].concat(Array.prototype.slice.call(arguments)))
                    }
                },
                He = function(e, t) {
                    return function() {
                        var n = e.app,
                            r = (e.req, e.route),
                            o = e.store,
                            c = {
                                getRouteBaseName: n.getRouteBaseName,
                                i18n: n.i18n,
                                localePath: n.localePath,
                                localeLocation: n.localeLocation,
                                localeRoute: n.localeRoute,
                                req: null,
                                route: r,
                                router: n.router,
                                store: o
                            };
                        return t.call.apply(t, [c].concat(Array.prototype.slice.call(arguments)))
                    }
                },
                Ye = {
                    install: function(e) {
                        e.mixin({
                            methods: {
                                localePath: Je(Be),
                                localeRoute: Je(ze),
                                localeLocation: Je(We),
                                switchLocalePath: Je(Ge),
                                getRouteBaseName: Je(qe)
                            }
                        })
                    }
                },
                Ve = function(e) {
                    c.default.use(Ye);
                    var t = e.app,
                        n = e.store;
                    t.localePath = e.localePath = He(e, Be), t.localeRoute = e.localeRoute = He(e, ze), t.localeLocation = e.localeLocation = He(e, We), t.switchLocalePath = e.switchLocalePath = He(e, Ge), t.getRouteBaseName = e.getRouteBaseName = He(e, qe), n && (n.localePath = t.localePath, n.localeRoute = t.localeRoute, n.localeLocation = t.localeLocation, n.switchLocalePath = t.switchLocalePath, n.getRouteBaseName = t.getRouteBaseName)
                },
                Qe = (n(71), n(159)),
                Ze = n(49);
            n(237);

            function et(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? et(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function nt(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, a) {
                            if (e) {
                                if ("string" == typeof e) return ot(e, a);
                                var t = {}.toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ot(e, a) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, a = !0,
                    u = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, c = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                }
            }

            function ot(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = Array(a); t < a; t++) n[t] = e[t];
                return n
            }

            function at() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.addDirAttribute,
                    n = void 0 === t || t,
                    r = e.addSeoAttributes,
                    o = void 0 !== r && r;
                if (!this.$i18n) return {};
                var c = {
                        htmlAttrs: {},
                        link: [],
                        meta: []
                    },
                    l = this.$i18n.localeProperties,
                    h = l.iso,
                    d = l.dir || pe.defaultDirection;
                if (n && (c.htmlAttrs.dir = d), o && (f.a.hasMetaInfo ? f.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales && !1 !== this.$options[le.COMPONENT_OPTIONS_KEY] && (!this.$options[le.COMPONENT_OPTIONS_KEY] || !1 !== this.$options[le.COMPONENT_OPTIONS_KEY].seo)) {
                    h && (c.htmlAttrs.lang = h);
                    var m = this.$i18n.locales;
                    (function(e, t, link) {
                        if (pe.strategy === le.STRATEGIES.NO_PREFIX) return;
                        var n, r = new Map,
                            o = nt(e);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var c = n.value,
                                    l = c.iso;
                                if (l) {
                                    var f = l.split("-"),
                                        h = Object(J.a)(f, 2),
                                        d = h[0],
                                        m = h[1];
                                    d && m && (c.isCatchallLocale || !r.has(d)) && r.set(d, c), r.set(l, c)
                                } else console.warn(ye("Locale ISO code is required to generate alternate link"))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        var y, O = nt(r.entries());
                        try {
                            for (O.s(); !(y = O.n()).done;) {
                                var w = Object(J.a)(y.value, 2),
                                    _ = w[0],
                                    P = w[1],
                                    j = this.switchLocalePath(P.code);
                                j && link.push({
                                    hid: "i18n-alt-".concat(_),
                                    rel: "alternate",
                                    href: v(j, t),
                                    hreflang: _
                                })
                            }
                        } catch (e) {
                            O.e(e)
                        } finally {
                            O.f()
                        }
                        if (pe.defaultLocale) {
                            var x = this.switchLocalePath(pe.defaultLocale);
                            x && link.push({
                                hid: "i18n-xd",
                                rel: "alternate",
                                href: v(x, t),
                                hreflang: "x-default"
                            })
                        }
                    }).bind(this)(m, this.$i18n.__baseUrl, c.link),
                        function(e, link) {
                            var t = this.localeRoute(tt(tt({}, this.$route), {}, {
                                    name: this.getRouteBaseName()
                                })),
                                n = t ? t.path : null;
                            n && link.push({
                                hid: "i18n-can",
                                rel: "canonical",
                                href: v(n, e)
                            })
                        }.bind(this)(this.$i18n.__baseUrl, c.link),
                        function(e, t, meta) {
                            var n = e && t;
                            if (!n) return;
                            meta.push({
                                hid: "i18n-og",
                                property: "og:locale",
                                content: y(t)
                            })
                        }.bind(this)(l, h, c.meta),
                        function(e, t, meta) {
                            var n = e.filter((function(e) {
                                var n = e.iso;
                                return n && n !== t
                            }));
                            if (n.length) {
                                var r = n.map((function(e) {
                                    return {
                                        hid: "i18n-og-alt-".concat(e.iso),
                                        property: "og:locale:alternate",
                                        content: y(e.iso)
                                    }
                                }));
                                meta.push.apply(meta, Object(Ze.a)(r))
                            }
                        }.bind(this)(m, h, c.meta)
                }

                function y(e) {
                    return (e || "").replace(/-/g, "_")
                }

                function v(e, t) {
                    return e.match(/^https?:\/\//) ? e : t + e
                }
                return c
            }

            function it() {
                return at.call(this, {
                    addDirAttribute: !1,
                    addSeoAttributes: !0
                })
            }
            var ct = n(77);

            function st(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, a) {
                            if (e) {
                                if ("string" == typeof e) return lt(e, a);
                                var t = {}.toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? lt(e, a) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, a = !0,
                    u = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, c = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                }
            }

            function lt(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = Array(a); t < a; t++) n[t] = e[t];
                return n
            }
            c.default.use(Qe.a);
            var ut = function() {
                    var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                        var n, o, l, f, h, d, m, y, v, O, w, _, P, j, x, S, R, k, L, E, T, I, N, C, D, A, U, $, M, F, B, z, W, K, G, H, Y, V;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = t.app, o = t.route, l = t.store, f = t.req, t.res, h = t.redirect, pe.vuex && l && Ie(l, pe.vuex, pe.localeCodes), d = pe.lazy, d && (!0 === d || !0 !== d.skipNuxtState), e.next = 9;
                                    break;
                                case 7:
                                    m = e.sent.default, t.beforeNuxtRender((function(e) {
                                        var t = e.nuxtState,
                                            r = {},
                                            o = n.i18n,
                                            c = o.fallbackLocale,
                                            l = o.locale;
                                        if (l && l !== c) {
                                            var f = n.i18n._getMessages()[l];
                                            if (f) try {
                                                m(f), r[l] = f
                                            } catch (e) {}
                                        }
                                        t.__i18n = {
                                            langs: r
                                        }
                                    }));
                                case 9:
                                    if (y = pe.detectBrowserLanguage, v = y.alwaysRedirect, O = y.fallbackLocale, w = y.onlyOnNoPrefix, _ = y.onlyOnRoot, P = y.useCookie, j = y.cookieKey, x = y.cookieDomain, S = y.cookieSecure, R = y.cookieCrossOrigin, k = function() {
                                            var e = Object(r.a)(regeneratorRuntime.mark((function e(r) {
                                                var o, f, d, m, y, v, O, w, _, j, x, S, R, k, L, T, I, N = arguments;
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (o = (N.length > 1 && void 0 !== N[1] ? N[1] : {}).initialSetup, f = void 0 !== o && o, r) {
                                                                e.next = 3;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 3:
                                                            if (f || !n.i18n.differentDomains) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 5:
                                                            if (d = n.i18n.locale, r !== d) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 8:
                                                            if (!(m = n.i18n.onBeforeLanguageSwitch(d, r, f, t)) || !n.i18n.localeCodes.includes(m)) {
                                                                e.next = 13;
                                                                break
                                                            }
                                                            if (m !== d) {
                                                                e.next = 12;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 12:
                                                            r = m;
                                                        case 13:
                                                            if (f || n.i18n.beforeLanguageSwitch(d, r), P && n.i18n.setLocaleCookie(r), !pe.langDir) {
                                                                e.next = 29;
                                                                break
                                                            }
                                                            if (y = n.i18n.fallbackLocale, !pe.lazy) {
                                                                e.next = 27;
                                                                break
                                                            }
                                                            if (!y) {
                                                                e.next = 23;
                                                                break
                                                            }
                                                            return v = [], Array.isArray(y) ? v = y.map((function(e) {
                                                                return ke(t, e)
                                                            })) : "object" === Object(X.a)(y) ? (y[r] && (v = v.concat(y[r].map((function(e) {
                                                                return ke(t, e)
                                                            })))), y.default && (v = v.concat(y.default.map((function(e) {
                                                                return ke(t, e)
                                                            }))))) : r !== y && v.push(ke(t, y)), e.next = 23, Promise.all(v);
                                                        case 23:
                                                            return e.next = 25, ke(t, r);
                                                        case 25:
                                                            e.next = 29;
                                                            break;
                                                        case 27:
                                                            return e.next = 29, Promise.all(pe.localeCodes.map((function(e) {
                                                                return ke(t, e)
                                                            })));
                                                        case 29:
                                                            for (n.i18n.locale = r, O = pe.normalizedLocales.find((function(e) {
                                                                    return e.code === r
                                                                })) || {
                                                                    code: r
                                                                }, w = 0, _ = Object.keys(n.i18n.localeProperties); w < _.length; w++) j = _[w], n.i18n.localeProperties[j] = void 0;
                                                            for (x = 0, S = Object.entries(O); x < S.length; x++) R = Object(J.a)(S[x], 2), k = R[0], L = R[1], c.default.set(n.i18n.localeProperties, k, Object(ct.a)(L));
                                                            if (!pe.vuex) {
                                                                e.next = 36;
                                                                break
                                                            }
                                                            return e.next = 36, Ne(l, r, n.i18n.getLocaleMessage(r), pe.vuex);
                                                        case 36:
                                                            T = t.route, I = E(T, r), f ? n.i18n.__redirect = I : (n.i18n.onLanguageSwitched(d, r), I && h(I));
                                                        case 39:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), L = _e(pe.localeCodes, {
                                            routesNameSeparator: pe.routesNameSeparator,
                                            defaultLocaleRouteNameSuffix: pe.defaultLocaleRouteNameSuffix
                                        }), E = function(e, t) {
                                            if (!t || n.i18n.differentDomains || pe.strategy === le.STRATEGIES.NO_PREFIX) return "";
                                            if (L(e) === t && (!_ && !w || t !== pe.defaultLocale || pe.strategy !== le.STRATEGIES.PREFIX_AND_DEFAULT)) return "";
                                            var r = n.switchLocalePath(t);
                                            return r || (r = n.localePath(e.fullPath, t)), !r || r === e.fullPath || r.startsWith("//") ? "" : r
                                        }, T = function() {
                                            var e = Object(r.a)(regeneratorRuntime.mark((function e(r) {
                                                var o, path, c, l, f;
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if ("/" !== r.path || !pe.rootRedirect) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return o = 302, path = pe.rootRedirect, "string" != typeof pe.rootRedirect && (o = pe.rootRedirect.statusCode, path = pe.rootRedirect.path), e.abrupt("return", [o, "/".concat(path), !0]);
                                                        case 5:
                                                            if (!(c = n.i18n.__redirect)) {
                                                                e.next = 9;
                                                                break
                                                            }
                                                            return n.i18n.__redirect = null, e.abrupt("return", [302, c]);
                                                        case 9:
                                                            if (l = {
                                                                    differentDomains: pe.differentDomains,
                                                                    normalizedLocales: pe.normalizedLocales
                                                                }, n.i18n.__baseUrl = Ee(pe.baseUrl, t, n.i18n.locale, l), f = pe.detectBrowserLanguage && D(r) || L(r) || n.i18n.locale || n.i18n.defaultLocale || "", !pe.skipSettingLocaleOnNavigate) {
                                                                e.next = 17;
                                                                break
                                                            }
                                                            n.i18n.__pendingLocale = f, n.i18n.__pendingLocalePromise = new Promise((function(e) {
                                                                n.i18n.__resolvePendingLocalePromise = e
                                                            })), e.next = 19;
                                                            break;
                                                        case 17:
                                                            return e.next = 19, n.i18n.setLocale(f);
                                                        case 19:
                                                            return e.abrupt("return", [null, null]);
                                                        case 20:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), I = function() {
                                            var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (n.i18n.__pendingLocale) {
                                                                e.next = 2;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 2:
                                                            return e.next = 4, n.i18n.setLocale(n.i18n.__pendingLocale);
                                                        case 4:
                                                            n.i18n.__resolvePendingLocalePromise(""), n.i18n.__pendingLocale = null;
                                                        case 6:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function() {
                                                return e.apply(this, arguments)
                                            }
                                        }(), N = function() {
                                            var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!n.i18n.__pendingLocale) {
                                                                e.next = 3;
                                                                break
                                                            }
                                                            return e.next = 3, n.i18n.__pendingLocalePromise;
                                                        case 3:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function() {
                                                return e.apply(this, arguments)
                                            }
                                        }(), C = function() {
                                            return "undefined" != typeof navigator && navigator.languages ? ve(pe.normalizedLocales, navigator.languages) : f && void 0 !== f.headers["accept-language"] ? ve(pe.normalizedLocales, f.headers["accept-language"].split(",").map((function(e) {
                                                return e.split(";")[0]
                                            }))) : void 0
                                        }, D = function(e) {
                                            if (pe.strategy !== le.STRATEGIES.NO_PREFIX)
                                                if (_) {
                                                    if ("/" !== e.path) return ""
                                                } else if (w && !v && e.path.match(we(pe.localeCodes))) return "";
                                            var t;
                                            P && (t = n.i18n.getLocaleCookie()) || (t = C());
                                            var r = t || O;
                                            return !r || P && !v && n.i18n.getLocaleCookie() || r === n.i18n.locale ? "" : r
                                        }, A = function(e) {
                                            e.locales = Object(ct.a)(pe.locales), e.localeCodes = Object(ct.a)(pe.localeCodes), e.localeProperties = c.default.observable(Object(ct.a)(pe.normalizedLocales.find((function(t) {
                                                return t.code === e.locale
                                            })) || {
                                                code: e.locale
                                            })), e.defaultLocale = pe.defaultLocale, e.differentDomains = pe.differentDomains, e.beforeLanguageSwitch = pe.beforeLanguageSwitch, e.onBeforeLanguageSwitch = pe.onBeforeLanguageSwitch, e.onLanguageSwitched = pe.onLanguageSwitched, e.setLocaleCookie = function(e) {
                                                return je(e, 0, {
                                                    useCookie: P,
                                                    cookieDomain: x,
                                                    cookieKey: j,
                                                    cookieSecure: S,
                                                    cookieCrossOrigin: R
                                                })
                                            }, e.getLocaleCookie = function() {
                                                return Pe(0, {
                                                    useCookie: P,
                                                    cookieKey: j,
                                                    localeCodes: pe.localeCodes
                                                })
                                            }, e.setLocale = function(e) {
                                                return k(e)
                                            }, e.getBrowserLocale = function() {
                                                return C()
                                            }, e.finalizePendingLocaleChange = I, e.waitForPendingLocaleChange = N, e.__baseUrl = n.i18n.__baseUrl, e.__pendingLocale = n.i18n.__pendingLocale, e.__pendingLocalePromise = n.i18n.__pendingLocalePromise, e.__resolvePendingLocalePromise = n.i18n.__resolvePendingLocalePromise
                                        }, "function" != typeof pe.vueI18n) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.next = 22, pe.vueI18n(t);
                                case 22:
                                    e.t0 = e.sent, e.next = 26;
                                    break;
                                case 25:
                                    e.t0 = Object(ct.a)(pe.vueI18n);
                                case 26:
                                    if ((U = e.t0).componentInstanceCreatedListener = A, n.i18n = t.i18n = new Qe.a(U), n.i18n.locale = "", n.i18n.fallbackLocale = U.fallbackLocale || "", A(n.i18n), $ = {
                                            differentDomains: pe.differentDomains,
                                            normalizedLocales: pe.normalizedLocales
                                        }, n.i18n.__baseUrl = Ee(pe.baseUrl, t, "", $), n.i18n.__onNavigate = T, c.default.prototype.$nuxtI18nSeo = it, c.default.prototype.$nuxtI18nHead = at, !l) {
                                        e.next = 58;
                                        break
                                    }
                                    if (l.$i18n = n.i18n, !l.state.localeDomains) {
                                        e.next = 58;
                                        break
                                    }
                                    M = st(n.i18n.locales), e.prev = 41, M.s();
                                case 43:
                                    if ((F = M.n()).done) {
                                        e.next = 50;
                                        break
                                    }
                                    if ("string" != typeof(B = F.value)) {
                                        e.next = 47;
                                        break
                                    }
                                    return e.abrupt("continue", 48);
                                case 47:
                                    B.domain = l.state.localeDomains[B.code];
                                case 48:
                                    e.next = 43;
                                    break;
                                case 50:
                                    e.next = 55;
                                    break;
                                case 52:
                                    e.prev = 52, e.t1 = e.catch(41), M.e(e.t1);
                                case 55:
                                    return e.prev = 55, M.f(), e.finish(55);
                                case 58:
                                    return (z = pe.detectBrowserLanguage ? D(o) : "") || ((W = pe.vuex) && W.syncLocale && l && "" !== l.state[W.moduleName].locale ? z = l.state[W.moduleName].locale : n.i18n.differentDomains ? (K = Oe(pe.normalizedLocales), z = K) : pe.strategy !== le.STRATEGIES.NO_PREFIX && (G = L(o), z = G)), !z && P && (z = n.i18n.getLocaleCookie()), z || (z = n.i18n.defaultLocale || ""), e.next = 64, k(z, {
                                        initialSetup: !0
                                    });
                                case 64:
                                    if (!ue) {
                                        e.next = 72;
                                        break
                                    }
                                    return e.next = 67, T(t.route);
                                case 67:
                                    H = e.sent, Y = Object(J.a)(H, 2), Y[0], (V = Y[1]) && location.assign(Object(xe.joinURL)(t.base, V));
                                case 72:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [41, 52, 55, 58]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ft = n(37),
                pt = n(170),
                ht = n(160),
                mt = n(161),
                bt = n(162),
                gt = n(163),
                yt = n(164),
                vt = n(165),
                Ot = n(166),
                wt = n(167);

            function _t(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _t(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _t(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            c.default.component(d.a.name, d.a), c.default.component(y.a.name, Pt(Pt({}, y.a), {}, {
                render: function(e, t) {
                    return y.a._warned || (y.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), y.a.render(e, t)
                }
            })), c.default.component(k.a.name, k.a), c.default.component("NChild", k.a), c.default.component(E.a.name, E.a), Object.defineProperty(c.default.prototype, "$nuxt", {
                get: function() {
                    var e = this.$root ? this.$root.$options.$nuxt : null;
                    return e || "undefined" == typeof window ? e : window.$nuxt
                },
                configurable: !0
            }), c.default.use(f.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var jt = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to"
                },
                xt = l.a.Store.prototype.registerModule;

            function St(path, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Array.isArray(path) ? !!path.reduce((function(e, path) {
                        return e && e[path]
                    }), this.state) : path in this.state;
                return xt.call(this, path, e, Pt({
                    preserveState: n
                }, t))
            }

            function Rt(e) {
                return kt.apply(this, arguments)
            }

            function kt() {
                return kt = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                    var n, o, l, f, h, d, path, m, y = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return m = function(e, t) {
                                    if (!e) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === t) throw new Error("inject('".concat(e, "', value) has no value provided"));
                                    f[e = "$" + e] = t, f.context[e] || (f.context[e] = t), o[e] = f[e];
                                    var n = "__nuxt_" + e + "_installed__";
                                    c.default[n] || (c.default[n] = !0, c.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(c.default.prototype, e) || Object.defineProperty(c.default.prototype, e, {
                                            get: function() {
                                                return this.$root.$options[e]
                                            }
                                        })
                                    })))
                                }, n = y.length > 1 && void 0 !== y[1] ? y[1] : {}, o = C(t), e.next = 5, R(0, n);
                            case 5:
                                return l = e.sent, o.$router = l, o.registerModule = St, f = Pt({
                                    head: {
                                        title: "Lexar Global",
                                        htmlAttrs: {
                                            lang: "en_WW"
                                        },
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "viewport",
                                            content: "maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: "Lexar, a leading memory brand, was born from innovation to create industry-leading data storage and memory solutions worldwide. We deliver best-in-class products that outperform the competition and provide our customers with unwavering reliability and superior customer service."
                                        }, {
                                            name: "format-detection",
                                            content: "telephone=no"
                                        }, {
                                            name: "og:locale",
                                            content: "en_WW"
                                        }],
                                        script: [{
                                            src: "https://www.googletagmanager.com/gtag/js?id=G-442RHFL7RN",
                                            type: "text/javascript",
                                            charset: "utf-8",
                                            defer: !0
                                        }],
                                        link: [{
                                            rel: "icon",
                                            type: "image/png",
                                            href: "https://www-oss.lexar.com/Lexar.png"
                                        }, {
                                            rel: "canonical",
                                            hreflang: "en-WW",
                                            href: "https://www.lexar.com/global/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "zh-CN",
                                            href: "https://www.lexar.com/zh-hans/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "de-DE",
                                            href: "https://www.lexar.com/de/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "en-GB",
                                            href: "https://www.lexar.com/gb/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "es-ES",
                                            href: "https://www.lexar.com/es/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "fr-FR",
                                            href: "https://www.lexar.com/fr/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "it-IT",
                                            href: "https://www.lexar.com/it/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "ja-JP",
                                            href: "https://www.lexar.com/jp/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "ko-KR",
                                            href: "https://www.lexar.com/kr/"
                                        }, {
                                            rel: "alternate",
                                            hreflang: "zh-TW",
                                            href: "https://www.lexar.com/zh-hant/"
                                        }],
                                        style: []
                                    },
                                    store: o,
                                    router: l,
                                    nuxt: {
                                        defaultTransition: jt,
                                        transitions: [jt],
                                        setTransitions: function(e) {
                                            return Array.isArray(e) || (e = [e]), e = e.map((function(e) {
                                                return e = e ? "string" == typeof e ? Object.assign({}, jt, {
                                                    name: e
                                                }) : Object.assign({}, jt, e) : jt
                                            })), this.$options.nuxt.transitions = e, e
                                        },
                                        err: null,
                                        errPageReady: !1,
                                        dateErr: null,
                                        error: function(e) {
                                            e = e || null, f.context._errored = Boolean(e), e = e ? Object(w.p)(e) : null;
                                            var n = f.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = e, n.errPageReady = !1, t && (t.nuxt.error = e), e
                                        }
                                    }
                                }, T.a), o.app = f, h = t ? t.next : function(e) {
                                    return f.router.push(e)
                                }, t ? d = l.resolve(t.url).route : (path = Object(w.g)(l.options.base, l.options.mode), d = l.resolve(path).route), e.next = 14, Object(w.t)(f, {
                                    store: o,
                                    route: d,
                                    next: h,
                                    error: f.nuxt.error.bind(f),
                                    payload: t ? t.payload : void 0,
                                    req: t ? t.req : void 0,
                                    res: t ? t.res : void 0,
                                    beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                    beforeSerializeFns: t ? t.beforeSerializeFns : void 0,
                                    ssrContext: t
                                });
                            case 14:
                                if (m("config", n), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), f.context.enablePreview = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        f.previewData = Object.assign({}, e), m("preview", e)
                                    }, "function" != typeof $.default) {
                                    e.next = 20;
                                    break
                                }
                                return e.next = 20, Object($.default)(f.context, m);
                            case 20:
                                return e.next = 23, K(f.context, m);
                            case 23:
                                if ("function" != typeof G.a) {
                                    e.next = 26;
                                    break
                                }
                                return e.next = 26, Object(G.a)(f.context, m);
                            case 26:
                                e.next = 29;
                                break;
                            case 29:
                                return e.next = 32, Ve(f.context);
                            case 32:
                                if ("function" != typeof ut) {
                                    e.next = 35;
                                    break
                                }
                                return e.next = 35, ut(f.context, m);
                            case 35:
                                if ("function" != typeof ft.a) {
                                    e.next = 38;
                                    break
                                }
                                return e.next = 38, Object(ft.a)(f.context, m);
                            case 38:
                                if ("function" != typeof pt.default) {
                                    e.next = 41;
                                    break
                                }
                                return e.next = 41, Object(pt.default)(f.context, m);
                            case 41:
                                if ("function" != typeof ht.a) {
                                    e.next = 44;
                                    break
                                }
                                return e.next = 44, Object(ht.a)(f.context, m);
                            case 44:
                                if ("function" != typeof mt.default) {
                                    e.next = 47;
                                    break
                                }
                                return e.next = 47, Object(mt.default)(f.context, m);
                            case 47:
                                if ("function" != typeof bt.default) {
                                    e.next = 50;
                                    break
                                }
                                return e.next = 50, Object(bt.default)(f.context, m);
                            case 50:
                                if ("function" != typeof gt.default) {
                                    e.next = 53;
                                    break
                                }
                                return e.next = 53, Object(gt.default)(f.context, m);
                            case 53:
                                if ("function" != typeof yt.default) {
                                    e.next = 56;
                                    break
                                }
                                return e.next = 56, Object(yt.default)(f.context, m);
                            case 56:
                                if ("function" != typeof vt.a) {
                                    e.next = 59;
                                    break
                                }
                                return e.next = 59, Object(vt.a)(f.context, m);
                            case 59:
                                if ("function" != typeof Ot.a) {
                                    e.next = 62;
                                    break
                                }
                                return e.next = 62, Object(Ot.a)(f.context, m);
                            case 62:
                                if ("function" != typeof wt.default) {
                                    e.next = 65;
                                    break
                                }
                                return e.next = 65, Object(wt.default)(f.context, m);
                            case 65:
                                return f.context.enablePreview = function() {
                                    console.warn("You cannot call enablePreview() outside a plugin.")
                                }, e.next = 68, new Promise((function(e, t) {
                                    if (!l.resolve(f.context.route.fullPath).route.matched.length) return e();
                                    l.replace(f.context.route.fullPath, e, (function(n) {
                                        if (!n._isRouter) return t(n);
                                        if (2 !== n.type) return e();
                                        var o = l.afterEach(function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(n, r) {
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 3, Object(w.k)(n);
                                                        case 3:
                                                            f.context.route = t.sent, f.context.params = n.params || {}, f.context.query = n.query || {}, o(), e();
                                                        case 8:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 68:
                                return e.abrupt("return", {
                                    store: o,
                                    app: f,
                                    router: l
                                });
                            case 69:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), kt.apply(this, arguments)
            }
        },
        91: function(e, t, n) {
            "use strict";
            t.a = {}
        }
    }
]);