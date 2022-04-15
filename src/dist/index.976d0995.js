/*!
 * tota11y v0.1.6
 * http://khan.github.io/tota11y
 * 
 * Includes Accessibility Developer Tools
 * http://github.com/GoogleChrome/accessibility-developer-tools
 * 
 * Copyright (c) 2015 Khan Academy
 * Released under the MIT license
 * http://github.com/Khan/tota11y/blob/master/LICENSE.txt
 * 
 * Date: 2016-10-03
 * 
 */ !function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var a = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0);
}([
    function(e1, t1, n1) {
        (function(e2) {
            function t2(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            var r1 = function() {
                function e3(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e3(t.prototype, n), r && e3(t, r), t;
                };
            }();
            n1(43);
            var a = n1(1), o = n1(17), i = n1(35);
            n1(42);
            var s1 = function() {
                function n2() {
                    t2(this, n2), this.activePlugin = null;
                }
                return r1(n2, [
                    {
                        key: "handlePluginClick",
                        value: function(e) {
                            e === this.activePlugin ? (e.deactivate(), this.activePlugin = null) : (this.activePlugin && this.activePlugin.deactivate(), e.activate(), this.activePlugin = e);
                        }
                    },
                    {
                        key: "appendTo",
                        value: function(t3) {
                            var n = this, r = a(i()), s = void 0, l = o["default"].map(function(t) {
                                return e2(t, {
                                    onClick: n.handlePluginClick.bind(n)
                                });
                            }), u = null;
                            o.experimental.length && (u = e2("li", null, e2("div", {
                                className: "tota11y-plugins-separator"
                            }, "Experimental"), e2("ul", null, o.experimental.map(function(t) {
                                return e2(t, {
                                    onClick: n.handlePluginClick.bind(n)
                                });
                            }))));
                            var c = e2("ul", {
                                className: "tota11y-plugins"
                            }, l, u), p = function(e) {
                                e.preventDefault(), e.stopPropagation(), s.toggleClass("tota11y-expanded"), s.attr("aria-expanded", s.is(".tota11y-expanded"));
                            }, d = e2("button", {
                                "aria-controls": "tota11y-toolbar",
                                className: "tota11y-toolbar-toggle",
                                onClick: p,
                                "aria-label": "[tota11y] Toggle menu"
                            }, e2("div", {
                                "aria-hidden": "true",
                                className: "tota11y-toolbar-logo"
                            }, r));
                            s = e2("div", {
                                id: "tota11y-toolbar",
                                className: "tota11y tota11y-toolbar",
                                role: "region",
                                "aria-expanded": "false"
                            }, e2("div", {
                                className: "tota11y-toolbar-body"
                            }, c), d), t3.append(s);
                        }
                    }
                ]), n2;
            }();
            a(function() {
                var e = new s1;
                e.appendTo(a("body"));
            });
        }).call(t1, n1(4));
    },
    function(e4, t4, n3) {
        var r2, a1; /*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */ 
        !function(t, n) {
            "object" == typeof e4 && "object" == typeof e4.exports ? e4.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e);
            } : n(t);
        }("undefined" != typeof window ? window : this, function(n4, o1) {
            function i1(e) {
                var t = !!e && "length" in e && e.length, n = ue1.type(e);
                return "function" === n || ue1.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
            }
            function s2(e5, t, n) {
                if (ue1.isFunction(t)) return ue1.grep(e5, function(e, r) {
                    return !!t.call(e, r, e) !== n;
                });
                if (t.nodeType) return ue1.grep(e5, function(e) {
                    return e === t !== n;
                });
                if ("string" == typeof t) {
                    if (ye1.test(t)) return ue1.filter(t, e5, n);
                    t = ue1.filter(t, e5);
                }
                return ue1.grep(e5, function(e) {
                    return re1.call(t, e) > -1 !== n;
                });
            }
            function l1(e, t) {
                for(; (e = e[t]) && 1 !== e.nodeType;);
                return e;
            }
            function u1(e) {
                var t = {};
                return ue1.each(e.match(_e) || [], function(e, n) {
                    t[n] = !0;
                }), t;
            }
            function c1() {
                Q1.removeEventListener("DOMContentLoaded", c1), n4.removeEventListener("load", c1), ue1.ready();
            }
            function p1() {
                this.expando = ue1.expando + p1.uid++;
            }
            function d1(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType) {
                    if (r = "data-" + t.replace(Ie, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? ue1.parseJSON(n) : n;
                        } catch (a) {}
                        Ne.set(e, t, n);
                    } else n = void 0;
                }
                return n;
            }
            function f1(e, t, n, r) {
                var a, o = 1, i = 20, s = r ? function() {
                    return r.cur();
                } : function() {
                    return ue1.css(e, t, "");
                }, l = s(), u = n && n[3] || (ue1.cssNumber[t] ? "" : "px"), c = (ue1.cssNumber[t] || "px" !== u && +l) && Pe.exec(ue1.css(e, t));
                if (c && c[3] !== u) {
                    u = u || c[3], n = n || [], c = +l || 1;
                    do o = o || ".5", c /= o, ue1.style(e, t, c + u);
                    while (o !== (o = s() / l) && 1 !== o && --i)
                }
                return n && (c = +c || +l || 0, a = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = a)), a;
            }
            function h1(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && ue1.nodeName(e, t) ? ue1.merge([
                    e
                ], n) : n;
            }
            function g1(e, t) {
                for(var n = 0, r = e.length; r > n; n++)Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"));
            }
            function m1(e, t, n, r, a) {
                for(var o, i, s, l, u, c, p = t.createDocumentFragment(), d = [], f = 0, m = e.length; m > f; f++)if (o = e[f], o || 0 === o) {
                    if ("object" === ue1.type(o)) ue1.merge(d, o.nodeType ? [
                        o
                    ] : o);
                    else if (Be.test(o)) {
                        for(i = i || p.appendChild(t.createElement("div")), s = (He.exec(o) || [
                            "",
                            ""
                        ])[1].toLowerCase(), l = Fe[s] || Fe._default, i.innerHTML = l[1] + ue1.htmlPrefilter(o) + l[2], c = l[0]; c--;)i = i.lastChild;
                        ue1.merge(d, i.childNodes), i = p.firstChild, i.textContent = "";
                    } else d.push(t.createTextNode(o));
                }
                for(p.textContent = "", f = 0; o = d[f++];)if (r && ue1.inArray(o, r) > -1) a && a.push(o);
                else if (u = ue1.contains(o.ownerDocument, o), i = h1(p.appendChild(o), "script"), u && g1(i), n) for(c = 0; o = i[c++];)qe.test(o.type || "") && n.push(o);
                return p;
            }
            function b1() {
                return !0;
            }
            function v1() {
                return !1;
            }
            function y1() {
                try {
                    return Q1.activeElement;
                } catch (e) {}
            }
            function x1(e6, t, n, r, a, o) {
                var i, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for(s in t)x1(e6, s, n, r, t[s], o);
                    return e6;
                }
                if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), a === !1) a = v1;
                else if (!a) return e6;
                return 1 === o && (i = a, a = function(e) {
                    return ue1().off(e), i.apply(this, arguments);
                }, a.guid = i.guid || (i.guid = ue1.guid++)), e6.each(function() {
                    ue1.event.add(this, t, a, r, n);
                });
            }
            function w1(e, t) {
                return ue1.nodeName(e, "table") && ue1.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
            }
            function A1(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
            }
            function E1(e) {
                var t = ze.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e;
            }
            function C1(e, t) {
                var n, r, a, o, i, s, l, u;
                if (1 === t.nodeType) {
                    if (Se.hasData(e) && (o = Se.access(e), i = Se.set(t, o), u = o.events)) {
                        delete i.handle, i.events = {};
                        for(a in u)for(n = 0, r = u[a].length; r > n; n++)ue1.event.add(t, a, u[a][n]);
                    }
                    Ne.hasData(e) && (s = Ne.access(e), l = ue1.extend({}, s), Ne.set(t, l));
                }
            }
            function _1(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
            }
            function T1(e, t, n, r) {
                t = te1.apply([], t);
                var a2, o2, i, s, l, u, c = 0, p = e.length, d = p - 1, f = t[0], g = ue1.isFunction(f);
                if (g || p > 1 && "string" == typeof f && !se1.checkClone && $e.test(f)) return e.each(function(a) {
                    var o = e.eq(a);
                    g && (t[0] = f.call(this, a, o.html())), T1(o, t, n, r);
                });
                if (p && (a2 = m1(t, e[0].ownerDocument, !1, e, r), o2 = a2.firstChild, 1 === a2.childNodes.length && (a2 = o2), o2 || r)) {
                    for(i = ue1.map(h1(a2, "script"), A1), s = i.length; p > c; c++)l = a2, c !== d && (l = ue1.clone(l, !0, !0), s && ue1.merge(i, h1(l, "script"))), n.call(e[c], l, c);
                    if (s) for(u = i[i.length - 1].ownerDocument, ue1.map(i, E1), c = 0; s > c; c++)l = i[c], qe.test(l.type || "") && !Se.access(l, "globalEval") && ue1.contains(u, l) && (l.src ? ue1._evalUrl && ue1._evalUrl(l.src) : ue1.globalEval(l.textContent.replace(Xe, "")));
                }
                return e;
            }
            function R1(e, t, n) {
                for(var r, a = t ? ue1.filter(t, e) : e, o = 0; null != (r = a[o]); o++)n || 1 !== r.nodeType || ue1.cleanData(h1(r)), r.parentNode && (n && ue1.contains(r.ownerDocument, r) && g1(h1(r, "script")), r.parentNode.removeChild(r));
                return e;
            }
            function k1(e, t) {
                var n = ue1(t.createElement(e)).appendTo(t.body), r = ue1.css(n[0], "display");
                return n.detach(), r;
            }
            function S1(e) {
                var t = Q1, n = Je[e];
                return n || (n = k1(e, t), "none" !== n && n || (Ke = (Ke || ue1("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ke[0].contentDocument, t.write(), t.close(), n = k1(e, t), Ke.detach()), Je[e] = n), n;
            }
            function N1(e, t, n) {
                var r, a, o, i, s = e.style;
                return n = n || et(e), i = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== i && void 0 !== i || ue1.contains(e.ownerDocument, e) || (i = ue1.style(e, t)), n && !se1.pixelMarginRight() && Qe.test(i) && Ze.test(t) && (r = s.width, a = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = n.width, s.width = r, s.minWidth = a, s.maxWidth = o), void 0 !== i ? i + "" : i;
            }
            function O1(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
                    }
                };
            }
            function I1(e) {
                if (e in st) return e;
                for(var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--;)if (e = it[n] + t, e in st) return e;
            }
            function L1(e, t, n) {
                var r = Pe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function P1(e, t, n, r, a) {
                for(var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; 4 > o; o += 2)"margin" === n && (i += ue1.css(e, n + De[o], !0, a)), r ? ("content" === n && (i -= ue1.css(e, "padding" + De[o], !0, a)), "margin" !== n && (i -= ue1.css(e, "border" + De[o] + "Width", !0, a))) : (i += ue1.css(e, "padding" + De[o], !0, a), "padding" !== n && (i += ue1.css(e, "border" + De[o] + "Width", !0, a)));
                return i;
            }
            function D1(e, t, n) {
                var r = !0, a = "width" === t ? e.offsetWidth : e.offsetHeight, o = et(e), i = "border-box" === ue1.css(e, "boxSizing", !1, o);
                if (0 >= a || null == a) {
                    if (a = N1(e, t, o), (0 > a || null == a) && (a = e.style[t]), Qe.test(a)) return a;
                    r = i && (se1.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0;
                }
                return a + P1(e, t, n || (i ? "border" : "content"), r, o) + "px";
            }
            function M1(e, t) {
                for(var n, r, a, o = [], i = 0, s = e.length; s > i; i++)r = e[i], r.style && (o[i] = Se.get(r, "olddisplay"), n = r.style.display, t ? (o[i] || "none" !== n || (r.style.display = ""), "" === r.style.display && Me(r) && (o[i] = Se.access(r, "olddisplay", S1(r.nodeName)))) : (a = Me(r), "none" === n && a || Se.set(r, "olddisplay", a ? n : ue1.css(r, "display"))));
                for(i = 0; s > i; i++)r = e[i], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[i] || "" : "none"));
                return e;
            }
            function j1(e, t, n, r, a) {
                return new j1.prototype.init(e, t, n, r, a);
            }
            function H1() {
                return n4.setTimeout(function() {
                    lt = void 0;
                }), lt = ue1.now();
            }
            function q1(e, t) {
                var n, r = 0, a = {
                    height: e
                };
                for(t = t ? 1 : 0; 4 > r; r += 2 - t)n = De[r], a["margin" + n] = a["padding" + n] = e;
                return t && (a.opacity = a.width = e), a;
            }
            function F1(e, t, n) {
                for(var r, a = (W1.tweeners[t] || []).concat(W1.tweeners["*"]), o = 0, i = a.length; i > o; o++)if (r = a[o].call(n, t, e)) return r;
            }
            function B1(e, t5, n) {
                var r, a, o, i, s, l, u, c, p = this, d = {}, f = e.style, h = e.nodeType && Me(e), g = Se.get(e, "fxshow");
                n.queue || (s = ue1._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || l();
                }), s.unqueued++, p.always(function() {
                    p.always(function() {
                        s.unqueued--, ue1.queue(e, "fx").length || s.empty.fire();
                    });
                })), 1 === e.nodeType && ("height" in t5 || "width" in t5) && (n.overflow = [
                    f.overflow,
                    f.overflowX,
                    f.overflowY
                ], u = ue1.css(e, "display"), c = "none" === u ? Se.get(e, "olddisplay") || S1(e.nodeName) : u, "inline" === c && "none" === ue1.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
                }));
                for(r in t5)if (a = t5[r], ct.exec(a)) {
                    if (delete t5[r], o = o || "toggle" === a, a === (h ? "hide" : "show")) {
                        if ("show" !== a || !g || void 0 === g[r]) continue;
                        h = !0;
                    }
                    d[r] = g && g[r] || ue1.style(e, r);
                } else u = void 0;
                if (ue1.isEmptyObject(d)) "inline" === ("none" === u ? S1(e.nodeName) : u) && (f.display = u);
                else {
                    g ? "hidden" in g && (h = g.hidden) : g = Se.access(e, "fxshow", {}), o && (g.hidden = !h), h ? ue1(e).show() : p.done(function() {
                        ue1(e).hide();
                    }), p.done(function() {
                        var t;
                        Se.remove(e, "fxshow");
                        for(t in d)ue1.style(e, t, d[t]);
                    });
                    for(r in d)i = F1(h ? g[r] : 0, r, p), r in g || (g[r] = i.start, h && (i.end = i.start, i.start = "width" === r || "height" === r ? 1 : 0));
                }
            }
            function U1(e, t) {
                var n, r, a, o, i;
                for(n in e)if (r = ue1.camelCase(n), a = t[r], o = e[n], ue1.isArray(o) && (a = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), i = ue1.cssHooks[r], i && "expand" in i) {
                    o = i.expand(o), delete e[r];
                    for(n in o)n in e || (e[n] = o[n], t[n] = a);
                } else t[r] = a;
            }
            function W1(e, t6, n5) {
                var r3, a, o3 = 0, i2 = W1.prefilters.length, s = ue1.Deferred().always(function() {
                    delete l2.elem;
                }), l2 = function() {
                    if (a) return !1;
                    for(var t = lt || H1(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, i = 0, l = u.tweens.length; l > i; i++)u.tweens[i].run(o);
                    return s.notifyWith(e, [
                        u,
                        o,
                        n
                    ]), 1 > o && l ? n : (s.resolveWith(e, [
                        u
                    ]), !1);
                }, u = s.promise({
                    elem: e,
                    props: ue1.extend({}, t6),
                    opts: ue1.extend(!0, {
                        specialEasing: {},
                        easing: ue1.easing._default
                    }, n5),
                    originalProperties: t6,
                    originalOptions: n5,
                    startTime: lt || H1(),
                    duration: n5.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = ue1.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r;
                    },
                    stop: function(t) {
                        var n = 0, r = t ? u.tweens.length : 0;
                        if (a) return this;
                        for(a = !0; r > n; n++)u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [
                            u,
                            1,
                            0
                        ]), s.resolveWith(e, [
                            u,
                            t
                        ])) : s.rejectWith(e, [
                            u,
                            t
                        ]), this;
                    }
                }), c = u.props;
                for(U1(c, u.opts.specialEasing); i2 > o3; o3++)if (r3 = W1.prefilters[o3].call(u, e, c, u.opts)) return ue1.isFunction(r3.stop) && (ue1._queueHooks(u.elem, u.opts.queue).stop = ue1.proxy(r3.stop, r3)), r3;
                return ue1.map(c, F1, u), ue1.isFunction(u.opts.start) && u.opts.start.call(e, u), ue1.fx.timer(ue1.extend(l2, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
            }
            function V1(e) {
                return e.getAttribute && e.getAttribute("class") || "";
            }
            function G1(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, a = 0, o = t.toLowerCase().match(_e) || [];
                    if (ue1.isFunction(n)) for(; r = o[a++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                };
            }
            function Y1(e, t, n, r) {
                function a(s3) {
                    var l;
                    return o[s3] = !0, ue1.each(e[s3] || [], function(e, s) {
                        var u = s(t, n, r);
                        return "string" != typeof u || i || o[u] ? i ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1);
                    }), l;
                }
                var o = {}, i = e === Nt;
                return a(t.dataTypes[0]) || !o["*"] && a("*");
            }
            function $1(e, t) {
                var n, r, a = ue1.ajaxSettings.flatOptions || {};
                for(n in t)void 0 !== t[n] && ((a[n] ? e : r || (r = {}))[n] = t[n]);
                return r && ue1.extend(!0, e, r), e;
            }
            function z1(e, t, n) {
                for(var r, a, o, i, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r) {
                    for(a in s)if (s[a] && s[a].test(r)) {
                        l.unshift(a);
                        break;
                    }
                }
                if (l[0] in n) o = l[0];
                else {
                    for(a in n){
                        if (!l[0] || e.converters[a + " " + l[0]]) {
                            o = a;
                            break;
                        }
                        i || (i = a);
                    }
                    o = o || i;
                }
                return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
            }
            function X1(e, t, n, r) {
                var a, o, i, s, l, u = {}, c = e.dataTypes.slice();
                if (c[1]) for(i in e.converters)u[i.toLowerCase()] = e.converters[i];
                for(o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) {
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                        if (i = u[l + " " + o] || u["* " + o], !i) {
                            for(a in u)if (s = a.split(" "), s[1] === o && (i = u[l + " " + s[0]] || u["* " + s[0]])) {
                                i === !0 ? i = u[a] : u[a] !== !0 && (o = s[0], c.unshift(s[1]));
                                break;
                            }
                        }
                        if (i !== !0) {
                            if (i && e["throws"]) t = i(t);
                            else try {
                                t = i(t);
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: i ? p : "No conversion from " + l + " to " + o
                                };
                            }
                        }
                    }
                }
                return {
                    state: "success",
                    data: t
                };
            }
            function K1(e, t7, n, r) {
                var a3;
                if (ue1.isArray(t7)) ue1.each(t7, function(t, a) {
                    n || Pt.test(e) ? r(e, a) : K1(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, r);
                });
                else if (n || "object" !== ue1.type(t7)) r(e, t7);
                else for(a3 in t7)K1(e + "[" + a3 + "]", t7[a3], n, r);
            }
            function J1(e) {
                return ue1.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
            }
            var Z1 = [], Q1 = n4.document, ee1 = Z1.slice, te1 = Z1.concat, ne1 = Z1.push, re1 = Z1.indexOf, ae1 = {}, oe1 = ae1.toString, ie1 = ae1.hasOwnProperty, se1 = {}, le1 = "2.2.4", ue1 = function(e, t) {
                return new ue1.fn.init(e, t);
            }, ce1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pe1 = /^-ms-/, de1 = /-([\da-z])/gi, fe1 = function(e, t) {
                return t.toUpperCase();
            };
            ue1.fn = ue1.prototype = {
                jquery: le1,
                constructor: ue1,
                selector: "",
                length: 0,
                toArray: function() {
                    return ee1.call(this);
                },
                get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : ee1.call(this);
                },
                pushStack: function(e) {
                    var t = ue1.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t;
                },
                each: function(e) {
                    return ue1.each(this, e);
                },
                map: function(e) {
                    return this.pushStack(ue1.map(this, function(t, n) {
                        return e.call(t, n, t);
                    }));
                },
                slice: function() {
                    return this.pushStack(ee1.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                eq: function(e) {
                    var t = this.length, n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [
                        this[n]
                    ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: ne1,
                sort: Z1.sort,
                splice: Z1.splice
            }, ue1.extend = ue1.fn.extend = function() {
                var e, t, n, r, a, o, i = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
                for("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" == typeof i || ue1.isFunction(i) || (i = {}), s === l && (i = this, s--); l > s; s++)if (null != (e = arguments[s])) for(t in e)n = i[t], r = e[t], i !== r && (u && r && (ue1.isPlainObject(r) || (a = ue1.isArray(r))) ? (a ? (a = !1, o = n && ue1.isArray(n) ? n : []) : o = n && ue1.isPlainObject(n) ? n : {}, i[t] = ue1.extend(u, o, r)) : void 0 !== r && (i[t] = r));
                return i;
            }, ue1.extend({
                expando: "jQuery" + (le1 + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e);
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === ue1.type(e);
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window;
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !ue1.isArray(e) && t - parseFloat(t) + 1 >= 0;
                },
                isPlainObject: function(e) {
                    var t;
                    if ("object" !== ue1.type(e) || e.nodeType || ue1.isWindow(e)) return !1;
                    if (e.constructor && !ie1.call(e, "constructor") && !ie1.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                    for(t in e);
                    return void 0 === t || ie1.call(e, t);
                },
                isEmptyObject: function(e) {
                    var t;
                    for(t in e)return !1;
                    return !0;
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae1[oe1.call(e)] || "object" : typeof e;
                },
                globalEval: function(e) {
                    var t, n = eval;
                    e = ue1.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q1.createElement("script"), t.text = e, Q1.head.appendChild(t).parentNode.removeChild(t)) : n(e));
                },
                camelCase: function(e) {
                    return e.replace(pe1, "ms-").replace(de1, fe1);
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (i1(e)) for(n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
                    else for(r in e)if (t.call(e[r], r, e[r]) === !1) break;
                    return e;
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(ce1, "");
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (i1(Object(e)) ? ue1.merge(n, "string" == typeof e ? [
                        e
                    ] : e) : ne1.call(n, e)), n;
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : re1.call(t, e, n);
                },
                merge: function(e, t) {
                    for(var n = +t.length, r = 0, a = e.length; n > r; r++)e[a++] = t[r];
                    return e.length = a, e;
                },
                grep: function(e, t, n) {
                    for(var r, a = [], o = 0, i = e.length, s = !n; i > o; o++)r = !t(e[o], o), r !== s && a.push(e[o]);
                    return a;
                },
                map: function(e, t, n) {
                    var r, a, o = 0, s = [];
                    if (i1(e)) for(r = e.length; r > o; o++)a = t(e[o], o, n), null != a && s.push(a);
                    else for(o in e)a = t(e[o], o, n), null != a && s.push(a);
                    return te1.apply([], s);
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, a;
                    return "string" == typeof t && (n = e[t], t = e, e = n), ue1.isFunction(e) ? (r = ee1.call(arguments, 2), a = function() {
                        return e.apply(t || this, r.concat(ee1.call(arguments)));
                    }, a.guid = e.guid = e.guid || ue1.guid++, a) : void 0;
                },
                now: Date.now,
                support: se1
            }), "function" == typeof Symbol && (ue1.fn[Symbol.iterator] = Z1[Symbol.iterator]), ue1.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                ae1["[object " + t + "]"] = t.toLowerCase();
            });
            var he1 = /*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */ function(e7) {
                function t8(e, t, n, r) {
                    var a, o, i, s, l, u, p, f, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!r && ((t ? t.ownerDocument || t : F) !== I && O(t), t = t || I, P)) {
                        if (11 !== g && (u = be.exec(e))) {
                            if (a = u[1]) {
                                if (9 === g) {
                                    if (!(i = t.getElementById(a))) return n;
                                    if (i.id === a) return n.push(i), n;
                                } else if (h && (i = h.getElementById(a)) && H(t, i) && i.id === a) return n.push(i), n;
                            } else {
                                if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = u[3]) && w2.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n;
                            }
                        }
                        if (w2.qsa && !G[e + " "] && (!D || !D.test(e))) {
                            if (1 !== g) h = t, f = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = q), p = _(e), o = p.length, l = de.test(s) ? "#" + s : "[id='" + s + "']"; o--;)p[o] = l + " " + d2(p[o]);
                                f = p.join(","), h = ve.test(e) && c2(t.parentNode) || t;
                            }
                            if (f) try {
                                return Z.apply(n, h.querySelectorAll(f)), n;
                            } catch (m) {} finally{
                                s === q && t.removeAttribute("id");
                            }
                        }
                    }
                    return R(e.replace(se, "$1"), t, n, r);
                }
                function n6() {
                    function e(n, r) {
                        return t.push(n + " ") > A.cacheLength && delete e[t.shift()], e[n + " "] = r;
                    }
                    var t = [];
                    return e;
                }
                function r4(e) {
                    return e[q] = !0, e;
                }
                function a4(e) {
                    var t = I.createElement("div");
                    try {
                        return !!e(t);
                    } catch (n) {
                        return !1;
                    } finally{
                        t.parentNode && t.parentNode.removeChild(t), t = null;
                    }
                }
                function o4(e, t) {
                    for(var n = e.split("|"), r = n.length; r--;)A.attrHandle[n[r]] = t;
                }
                function i3(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || $) - (~e.sourceIndex || $);
                    if (r) return r;
                    if (n) {
                        for(; n = n.nextSibling;)if (n === t) return -1;
                    }
                    return e ? 1 : -1;
                }
                function s4(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e;
                    };
                }
                function l3(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function u2(e) {
                    return r4(function(t) {
                        return t = +t, r4(function(n, r) {
                            for(var a, o = e([], n.length, t), i = o.length; i--;)n[a = o[i]] && (n[a] = !(r[a] = n[a]));
                        });
                    });
                }
                function c2(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e;
                }
                function p2() {}
                function d2(e) {
                    for(var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
                    return r;
                }
                function f2(e, t9, n7) {
                    var r = t9.dir, a = n7 && "parentNode" === r, o5 = U++;
                    return t9.first ? function(t, n, o) {
                        for(; t = t[r];)if (1 === t.nodeType || a) return e(t, n, o);
                    } : function(t, n, i) {
                        var s, l, u, c = [
                            B,
                            o5
                        ];
                        if (i) {
                            for(; t = t[r];)if ((1 === t.nodeType || a) && e(t, n, i)) return !0;
                        } else for(; t = t[r];)if (1 === t.nodeType || a) {
                            if (u = t[q] || (t[q] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[r]) && s[0] === B && s[1] === o5) return c[2] = s[2];
                            if (l[r] = c, c[2] = e(t, n, i)) return !0;
                        }
                    };
                }
                function h2(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for(var a = e.length; a--;)if (!e[a](t, n, r)) return !1;
                        return !0;
                    } : e[0];
                }
                function g2(e, n, r) {
                    for(var a = 0, o = n.length; o > a; a++)t8(e, n[a], r);
                    return r;
                }
                function m2(e, t, n, r, a) {
                    for(var o, i = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (n && !n(o, r, a) || (i.push(o), u && t.push(s)));
                    return i;
                }
                function b2(e, t, n, a, o, i4) {
                    return a && !a[q] && (a = b2(a)), o && !o[q] && (o = b2(o, i4)), r4(function(r, i, s, l) {
                        var u, c, p, d = [], f = [], h = i.length, b = r || g2(t || "*", s.nodeType ? [
                            s
                        ] : s, []), v = !e || !r && t ? b : m2(b, d, e, s, l), y = n ? o || (r ? e : h || a) ? [] : i : v;
                        if (n && n(v, y, s, l), a) for(u = m2(y, f), a(u, [], s, l), c = u.length; c--;)(p = u[c]) && (y[f[c]] = !(v[f[c]] = p));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for(u = [], c = y.length; c--;)(p = y[c]) && u.push(v[c] = p);
                                    o(null, y = [], u, l);
                                }
                                for(c = y.length; c--;)(p = y[c]) && (u = o ? ee(r, p) : d[c]) > -1 && (r[u] = !(i[u] = p));
                            }
                        } else y = m2(y === i ? y.splice(h, y.length) : y), o ? o(null, i, y, l) : Z.apply(i, y);
                    });
                }
                function v2(e8) {
                    for(var t, n8, r5, a5 = e8.length, o = A.relative[e8[0].type], i = o || A.relative[" "], s = o ? 1 : 0, l = f2(function(e) {
                        return e === t;
                    }, i, !0), u = f2(function(e) {
                        return ee(t, e) > -1;
                    }, i, !0), c = [
                        function(e, n, r) {
                            var a = !o && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                            return t = null, a;
                        }
                    ]; a5 > s; s++)if (n8 = A.relative[e8[s].type]) c = [
                        f2(h2(c), n8)
                    ];
                    else {
                        if (n8 = A.filter[e8[s].type].apply(null, e8[s].matches), n8[q]) {
                            for(r5 = ++s; a5 > r5 && !A.relative[e8[r5].type]; r5++);
                            return b2(s > 1 && h2(c), s > 1 && d2(e8.slice(0, s - 1).concat({
                                value: " " === e8[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n8, r5 > s && v2(e8.slice(s, r5)), a5 > r5 && v2(e8 = e8.slice(r5)), a5 > r5 && d2(e8));
                        }
                        c.push(n8);
                    }
                    return h2(c);
                }
                function y2(e, n) {
                    var a = n.length > 0, o = e.length > 0, i5 = function(r, i, s, l, u) {
                        var c, p, d, f = 0, h = "0", g = r && [], b = [], v = k, y = r || o && A.find.TAG("*", u), x = B += null == v ? 1 : Math.random() || 0.1, w = y.length;
                        for(u && (k = i === I || i || u); h !== w && null != (c = y[h]); h++){
                            if (o && c) {
                                for(p = 0, i || c.ownerDocument === I || (O(c), s = !P); d = e[p++];)if (d(c, i || I, s)) {
                                    l.push(c);
                                    break;
                                }
                                u && (B = x);
                            }
                            a && ((c = !d && c) && f--, r && g.push(c));
                        }
                        if (f += h, a && h !== f) {
                            for(p = 0; d = n[p++];)d(g, b, i, s);
                            if (r) {
                                if (f > 0) for(; h--;)g[h] || b[h] || (b[h] = K.call(l));
                                b = m2(b);
                            }
                            Z.apply(l, b), u && !r && b.length > 0 && f + n.length > 1 && t8.uniqueSort(l);
                        }
                        return u && (B = x, k = v), g;
                    };
                    return a ? r4(i5) : i5;
                }
                var x2, w2, A, E, C, _, T, R, k, S, N, O, I, L, P, D, M, j, H, q = "sizzle" + 1 * new Date, F = e7.document, B = 0, U = 0, W = n6(), V = n6(), G = n6(), Y = function(e, t) {
                    return e === t && (N = !0), 0;
                }, $ = -2147483648, z = {}.hasOwnProperty, X = [], K = X.pop, J = X.push, Z = X.push, Q = X.slice, ee = function(e, t) {
                    for(var n = 0, r = e.length; r > n; n++)if (e[n] === t) return n;
                    return -1;
                }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ae = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", ie = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(oe), de = new RegExp("^" + re + "$"), fe = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re + "|[*])"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ye = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
                }, Ae = function() {
                    O();
                };
                try {
                    Z.apply(X = Q.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType;
                } catch (Ee) {
                    Z = {
                        apply: X.length ? function(e, t) {
                            J.apply(e, Q.call(t));
                        } : function(e, t) {
                            for(var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1;
                        }
                    };
                }
                w2 = t8.support = {}, C = t8.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1;
                }, O = t8.setDocument = function(e9) {
                    var t10, n9, r6 = e9 ? e9.ownerDocument || e9 : F;
                    return r6 !== I && 9 === r6.nodeType && r6.documentElement ? (I = r6, L = I.documentElement, P = !C(I), (n9 = I.defaultView) && n9.top !== n9 && (n9.addEventListener ? n9.addEventListener("unload", Ae, !1) : n9.attachEvent && n9.attachEvent("onunload", Ae)), w2.attributes = a4(function(e) {
                        return e.className = "i", !e.getAttribute("className");
                    }), w2.getElementsByTagName = a4(function(e) {
                        return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length;
                    }), w2.getElementsByClassName = me.test(I.getElementsByClassName), w2.getById = a4(function(e) {
                        return L.appendChild(e).id = q, !I.getElementsByName || !I.getElementsByName(q).length;
                    }), w2.getById ? (A.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && P) {
                            var n = t.getElementById(e);
                            return n ? [
                                n
                            ] : [];
                        }
                    }, A.filter.ID = function(e10) {
                        var t = e10.replace(xe, we);
                        return function(e) {
                            return e.getAttribute("id") === t;
                        };
                    }) : (delete A.find.ID, A.filter.ID = function(e11) {
                        var t = e11.replace(xe, we);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t;
                        };
                    }), A.find.TAG = w2.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w2.qsa ? t.querySelectorAll(e) : void 0;
                    } : function(e, t) {
                        var n, r = [], a = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for(; n = o[a++];)1 === n.nodeType && r.push(n);
                            return r;
                        }
                        return o;
                    }, A.find.CLASS = w2.getElementsByClassName && function(e, t) {
                        return "undefined" != typeof t.getElementsByClassName && P ? t.getElementsByClassName(e) : void 0;
                    }, M = [], D = [], (w2.qsa = me.test(I.querySelectorAll)) && (a4(function(e) {
                        L.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || D.push(".#.+[+~]");
                    }), a4(function(e) {
                        var t = I.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:");
                    })), (w2.matchesSelector = me.test(j = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && a4(function(e) {
                        w2.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), M.push("!=", oe);
                    }), D = D.length && new RegExp(D.join("|")), M = M.length && new RegExp(M.join("|")), t10 = me.test(L.compareDocumentPosition), H = t10 || me.test(L.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                    } : function(e, t) {
                        if (t) {
                            for(; t = t.parentNode;)if (t === e) return !0;
                        }
                        return !1;
                    }, Y = t10 ? function(e, t) {
                        if (e === t) return N = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w2.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === F && H(F, e) ? -1 : t === I || t.ownerDocument === F && H(F, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1);
                    } : function(e, t) {
                        if (e === t) return N = !0, 0;
                        var n, r = 0, a = e.parentNode, o = t.parentNode, s = [
                            e
                        ], l = [
                            t
                        ];
                        if (!a || !o) return e === I ? -1 : t === I ? 1 : a ? -1 : o ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                        if (a === o) return i3(e, t);
                        for(n = e; n = n.parentNode;)s.unshift(n);
                        for(n = t; n = n.parentNode;)l.unshift(n);
                        for(; s[r] === l[r];)r++;
                        return r ? i3(s[r], l[r]) : s[r] === F ? -1 : l[r] === F ? 1 : 0;
                    }, I) : I;
                }, t8.matches = function(e, n) {
                    return t8(e, null, null, n);
                }, t8.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== I && O(e), n = n.replace(ce, "='$1']"), w2.matchesSelector && P && !G[n + " "] && (!M || !M.test(n)) && (!D || !D.test(n))) try {
                        var r = j.call(e, n);
                        if (r || w2.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
                    } catch (a) {}
                    return t8(n, I, null, [
                        e
                    ]).length > 0;
                }, t8.contains = function(e, t) {
                    return (e.ownerDocument || e) !== I && O(e), H(e, t);
                }, t8.attr = function(e, t) {
                    (e.ownerDocument || e) !== I && O(e);
                    var n = A.attrHandle[t.toLowerCase()], r = n && z.call(A.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                    return void 0 !== r ? r : w2.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }, t8.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }, t8.uniqueSort = function(e) {
                    var t, n = [], r = 0, a = 0;
                    if (N = !w2.detectDuplicates, S = !w2.sortStable && e.slice(0), e.sort(Y), N) {
                        for(; t = e[a++];)t === e[a] && (r = n.push(a));
                        for(; r--;)e.splice(n[r], 1);
                    }
                    return S = null, e;
                }, E = t8.getText = function(e) {
                    var t, n = "", r = 0, a = e.nodeType;
                    if (a) {
                        if (1 === a || 9 === a || 11 === a) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for(e = e.firstChild; e; e = e.nextSibling)n += E(e);
                        } else if (3 === a || 4 === a) return e.nodeValue;
                    } else for(; t = e[r++];)n += E(t);
                    return n;
                }, A = t8.selectors = {
                    cacheLength: 50,
                    createPseudo: r4,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t8.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t8.error(e[0]), e;
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(e12) {
                            var t = e12.replace(xe, we).toLowerCase();
                            return "*" === e12 ? function() {
                                return !0;
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                        },
                        CLASS: function(e13) {
                            var t = W[e13 + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e13 + "(" + ne + "|$)"), W(e13, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(e, n, r) {
                            return function(a) {
                                var o = t8.attr(a, e);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0;
                            };
                        },
                        CHILD: function(e14, t11, n, r, a) {
                            var o = "nth" !== e14.slice(0, 3), i = "last" !== e14.slice(-4), s = "of-type" === t11;
                            return 1 === r && 0 === a ? function(e) {
                                return !!e.parentNode;
                            } : function(t, n, l) {
                                var u, c, p, d, f, h, g = o !== i ? "nextSibling" : "previousSibling", m = t.parentNode, b = s && t.nodeName.toLowerCase(), v = !l && !s, y = !1;
                                if (m) {
                                    if (o) {
                                        for(; g;){
                                            for(d = t; d = d[g];)if (s ? d.nodeName.toLowerCase() === b : 1 === d.nodeType) return !1;
                                            h = g = "only" === e14 && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (h = [
                                        i ? m.firstChild : m.lastChild
                                    ], i && v) {
                                        for(d = m, p = d[q] || (d[q] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e14] || [], f = u[0] === B && u[1], y = f && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (y = f = 0) || h.pop();)if (1 === d.nodeType && ++y && d === t) {
                                            c[e14] = [
                                                B,
                                                f,
                                                y
                                            ];
                                            break;
                                        }
                                    } else if (v && (d = t, p = d[q] || (d[q] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e14] || [], f = u[0] === B && u[1], y = f), y === !1) for(; (d = ++f && d && d[g] || (y = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== b : 1 !== d.nodeType) || !++y || (v && (p = d[q] || (d[q] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), c[e14] = [
                                        B,
                                        y
                                    ]), d !== t)););
                                    return y -= a, y === r || y % r === 0 && y / r >= 0;
                                }
                            };
                        },
                        PSEUDO: function(e15, n) {
                            var a6, o = A.pseudos[e15] || A.setFilters[e15.toLowerCase()] || t8.error("unsupported pseudo: " + e15);
                            return o[q] ? o(n) : o.length > 1 ? (a6 = [
                                e15,
                                e15,
                                "",
                                n
                            ], A.setFilters.hasOwnProperty(e15.toLowerCase()) ? r4(function(e, t) {
                                for(var r, a = o(e, n), i = a.length; i--;)r = ee(e, a[i]), e[r] = !(t[r] = a[i]);
                            }) : function(e) {
                                return o(e, 0, a6);
                            }) : o;
                        }
                    },
                    pseudos: {
                        not: r4(function(e16) {
                            var t12 = [], n = [], a = T(e16.replace(se, "$1"));
                            return a[q] ? r4(function(e, t, n, r) {
                                for(var o, i = a(e, null, r, []), s = e.length; s--;)(o = i[s]) && (e[s] = !(t[s] = o));
                            }) : function(e, r, o) {
                                return t12[0] = e, a(t12, null, o, n), t12[0] = null, !n.pop();
                            };
                        }),
                        has: r4(function(e) {
                            return function(n) {
                                return t8(e, n).length > 0;
                            };
                        }),
                        contains: r4(function(e) {
                            return e = e.replace(xe, we), function(t) {
                                return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
                            };
                        }),
                        lang: r4(function(e) {
                            return de.test(e || "") || t8.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), function(t) {
                                var n;
                                do if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType)
                                return !1;
                            };
                        }),
                        target: function(t) {
                            var n = e7.location && e7.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function(e) {
                            return e === L;
                        },
                        focus: function(e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: function(e) {
                            return e.disabled === !1;
                        },
                        disabled: function(e) {
                            return e.disabled === !0;
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected;
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                        },
                        empty: function(e) {
                            for(e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !A.pseudos.empty(e);
                        },
                        header: function(e) {
                            return ge.test(e.nodeName);
                        },
                        input: function(e) {
                            return he.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: u2(function() {
                            return [
                                0
                            ];
                        }),
                        last: u2(function(e, t) {
                            return [
                                t - 1
                            ];
                        }),
                        eq: u2(function(e, t, n) {
                            return [
                                0 > n ? n + t : n
                            ];
                        }),
                        even: u2(function(e, t) {
                            for(var n = 0; t > n; n += 2)e.push(n);
                            return e;
                        }),
                        odd: u2(function(e, t) {
                            for(var n = 1; t > n; n += 2)e.push(n);
                            return e;
                        }),
                        lt: u2(function(e, t, n) {
                            for(var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                            return e;
                        }),
                        gt: u2(function(e, t, n) {
                            for(var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                            return e;
                        })
                    }
                }, A.pseudos.nth = A.pseudos.eq;
                for(x2 in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })A.pseudos[x2] = s4(x2);
                for(x2 in {
                    submit: !0,
                    reset: !0
                })A.pseudos[x2] = l3(x2);
                return p2.prototype = A.filters = A.pseudos, A.setFilters = new p2, _ = t8.tokenize = function(e, n) {
                    var r, a, o, i, s, l, u, c = V[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for(s = e, l = [], u = A.preFilter; s;){
                        r && !(a = le.exec(s)) || (a && (s = s.slice(a[0].length) || s), l.push(o = [])), r = !1, (a = ue.exec(s)) && (r = a.shift(), o.push({
                            value: r,
                            type: a[0].replace(se, " ")
                        }), s = s.slice(r.length));
                        for(i in A.filter)!(a = fe[i].exec(s)) || u[i] && !(a = u[i](a)) || (r = a.shift(), o.push({
                            value: r,
                            type: i,
                            matches: a
                        }), s = s.slice(r.length));
                        if (!r) break;
                    }
                    return n ? s.length : s ? t8.error(e) : V(e, l).slice(0);
                }, T = t8.compile = function(e, t) {
                    var n, r = [], a = [], o = G[e + " "];
                    if (!o) {
                        for(t || (t = _(e)), n = t.length; n--;)o = v2(t[n]), o[q] ? r.push(o) : a.push(o);
                        o = G(e, y2(a, r)), o.selector = e;
                    }
                    return o;
                }, R = t8.select = function(e, t, n, r) {
                    var a, o, i, s, l, u = "function" == typeof e && e, p = !r && _(e = u.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (i = o[0]).type && w2.getById && 9 === t.nodeType && P && A.relative[o[1].type]) {
                            if (t = (A.find.ID(i.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                            u && (t = t.parentNode), e = e.slice(o.shift().value.length);
                        }
                        for(a = fe.needsContext.test(e) ? 0 : o.length; (a--) && (i = o[a], !A.relative[s = i.type]);)if ((l = A.find[s]) && (r = l(i.matches[0].replace(xe, we), ve.test(o[0].type) && c2(t.parentNode) || t))) {
                            if (o.splice(a, 1), e = r.length && d2(o), !e) return Z.apply(n, r), n;
                            break;
                        }
                    }
                    return (u || T(e, p))(r, t, !P, n, !t || ve.test(e) && c2(t.parentNode) || t), n;
                }, w2.sortStable = q.split("").sort(Y).join("") === q, w2.detectDuplicates = !!N, O(), w2.sortDetached = a4(function(e) {
                    return 1 & e.compareDocumentPosition(I.createElement("div"));
                }), a4(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
                }) || o4("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }), w2.attributes && a4(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                }) || o4("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
                }), a4(function(e) {
                    return null == e.getAttribute("disabled");
                }) || o4(te, function(e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }), t8;
            }(n4);
            ue1.find = he1, ue1.expr = he1.selectors, ue1.expr[":"] = ue1.expr.pseudos, ue1.uniqueSort = ue1.unique = he1.uniqueSort, ue1.text = he1.getText, ue1.isXMLDoc = he1.isXML, ue1.contains = he1.contains;
            var ge1 = function(e, t, n) {
                for(var r = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                    if (a && ue1(e).is(n)) break;
                    r.push(e);
                }
                return r;
            }, me1 = function(e, t) {
                for(var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n;
            }, be1 = ue1.expr.match.needsContext, ve1 = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ye1 = /^.[^:#\[\.,]*$/;
            ue1.filter = function(e17, t, n) {
                var r = t[0];
                return n && (e17 = ":not(" + e17 + ")"), 1 === t.length && 1 === r.nodeType ? ue1.find.matchesSelector(r, e17) ? [
                    r
                ] : [] : ue1.find.matches(e17, ue1.grep(t, function(e) {
                    return 1 === e.nodeType;
                }));
            }, ue1.fn.extend({
                find: function(e) {
                    var t, n = this.length, r = [], a = this;
                    if ("string" != typeof e) return this.pushStack(ue1(e).filter(function() {
                        for(t = 0; n > t; t++)if (ue1.contains(a[t], this)) return !0;
                    }));
                    for(t = 0; n > t; t++)ue1.find(e, a[t], r);
                    return r = this.pushStack(n > 1 ? ue1.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r;
                },
                filter: function(e) {
                    return this.pushStack(s2(this, e || [], !1));
                },
                not: function(e) {
                    return this.pushStack(s2(this, e || [], !0));
                },
                is: function(e) {
                    return !!s2(this, "string" == typeof e && be1.test(e) ? ue1(e) : e || [], !1).length;
                }
            });
            var xe1, we1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Ae1 = ue1.fn.init = function(e, t, n) {
                var r, a;
                if (!e) return this;
                if (n = n || xe1, "string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [
                        null,
                        e,
                        null
                    ] : we1.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof ue1 ? t[0] : t, ue1.merge(this, ue1.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Q1, !0)), ve1.test(r[1]) && ue1.isPlainObject(t)) for(r in t)ue1.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this;
                    }
                    return a = Q1.getElementById(r[2]), a && a.parentNode && (this.length = 1, this[0] = a), this.context = Q1, this.selector = e, this;
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue1.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ue1) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ue1.makeArray(e, this));
            };
            Ae1.prototype = ue1.fn, xe1 = ue1(Q1);
            var Ee = /^(?:parents|prev(?:Until|All))/, Ce = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            ue1.fn.extend({
                has: function(e18) {
                    var t = ue1(e18, this), n = t.length;
                    return this.filter(function() {
                        for(var e = 0; n > e; e++)if (ue1.contains(this, t[e])) return !0;
                    });
                },
                closest: function(e, t) {
                    for(var n, r = 0, a = this.length, o = [], i = be1.test(e) || "string" != typeof e ? ue1(e, t || this.context) : 0; a > r; r++)for(n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && ue1.find.matchesSelector(n, e))) {
                        o.push(n);
                        break;
                    }
                    return this.pushStack(o.length > 1 ? ue1.uniqueSort(o) : o);
                },
                index: function(e) {
                    return e ? "string" == typeof e ? re1.call(ue1(e), this[0]) : re1.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(e, t) {
                    return this.pushStack(ue1.uniqueSort(ue1.merge(this.get(), ue1(e, t))));
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                }
            }), ue1.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return ge1(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return ge1(e, "parentNode", n);
                },
                next: function(e) {
                    return l1(e, "nextSibling");
                },
                prev: function(e) {
                    return l1(e, "previousSibling");
                },
                nextAll: function(e) {
                    return ge1(e, "nextSibling");
                },
                prevAll: function(e) {
                    return ge1(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return ge1(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return ge1(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return me1((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return me1(e.firstChild);
                },
                contents: function(e) {
                    return e.contentDocument || ue1.merge([], e.childNodes);
                }
            }, function(e, t) {
                ue1.fn[e] = function(n, r) {
                    var a = ue1.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = ue1.filter(r, a)), this.length > 1 && (Ce[e] || ue1.uniqueSort(a), Ee.test(e) && a.reverse()), this.pushStack(a);
                };
            });
            var _e = /\S+/g;
            ue1.Callbacks = function(e19) {
                e19 = "string" == typeof e19 ? u1(e19) : ue1.extend({}, e19);
                var t13, n10, r7, a, o = [], i = [], s = -1, l = function() {
                    for(a = e19.once, r7 = t13 = !0; i.length; s = -1)for(n10 = i.shift(); ++s < o.length;)o[s].apply(n10[0], n10[1]) === !1 && e19.stopOnFalse && (s = o.length, n10 = !1);
                    e19.memory || (n10 = !1), t13 = !1, a && (o = n10 ? [] : "");
                }, c = {
                    add: function() {
                        return o && (n10 && !t13 && (s = o.length - 1, i.push(n10)), function r(t) {
                            ue1.each(t, function(t, n) {
                                ue1.isFunction(n) ? e19.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ue1.type(n) && r(n);
                            });
                        }(arguments), n10 && !t13 && l()), this;
                    },
                    remove: function() {
                        return ue1.each(arguments, function(e, t) {
                            for(var n; (n = ue1.inArray(t, o, n)) > -1;)o.splice(n, 1), s >= n && s--;
                        }), this;
                    },
                    has: function(e) {
                        return e ? ue1.inArray(e, o) > -1 : o.length > 0;
                    },
                    empty: function() {
                        return o && (o = []), this;
                    },
                    disable: function() {
                        return a = i = [], o = n10 = "", this;
                    },
                    disabled: function() {
                        return !o;
                    },
                    lock: function() {
                        return a = i = [], n10 || (o = n10 = ""), this;
                    },
                    locked: function() {
                        return !!a;
                    },
                    fireWith: function(e, n) {
                        return a || (n = n || [], n = [
                            e,
                            n.slice ? n.slice() : n
                        ], i.push(n), t13 || l()), this;
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!r7;
                    }
                };
                return c;
            }, ue1.extend({
                Deferred: function(e20) {
                    var t14 = [
                        [
                            "resolve",
                            "done",
                            ue1.Callbacks("once memory"),
                            "resolved"
                        ],
                        [
                            "reject",
                            "fail",
                            ue1.Callbacks("once memory"),
                            "rejected"
                        ],
                        [
                            "notify",
                            "progress",
                            ue1.Callbacks("memory")
                        ]
                    ], n11 = "pending", r = {
                        state: function() {
                            return n11;
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this;
                        },
                        then: function() {
                            var e21 = arguments;
                            return ue1.Deferred(function(n) {
                                ue1.each(t14, function(t, o) {
                                    var i = ue1.isFunction(e21[t]) && e21[t];
                                    a[o[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && ue1.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, i ? [
                                            e
                                        ] : arguments);
                                    });
                                }), e21 = null;
                            }).promise();
                        },
                        promise: function(e) {
                            return null != e ? ue1.extend(e, r) : r;
                        }
                    }, a = {};
                    return r.pipe = r.then, ue1.each(t14, function(e, o) {
                        var i = o[2], s = o[3];
                        r[o[1]] = i.add, s && i.add(function() {
                            n11 = s;
                        }, t14[1 ^ e][2].disable, t14[2][2].lock), a[o[0]] = function() {
                            return a[o[0] + "With"](this === a ? r : this, arguments), this;
                        }, a[o[0] + "With"] = i.fireWith;
                    }), r.promise(a), e20 && e20.call(a, a), a;
                },
                when: function(e22) {
                    var t, n12, r8, a7 = 0, o = ee1.call(arguments), i = o.length, s = 1 !== i || e22 && ue1.isFunction(e22.promise) ? i : 0, l = 1 === s ? e22 : ue1.Deferred(), u = function(e, n, r) {
                        return function(a) {
                            n[e] = this, r[e] = arguments.length > 1 ? ee1.call(arguments) : a, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
                        };
                    };
                    if (i > 1) for(t = new Array(i), n12 = new Array(i), r8 = new Array(i); i > a7; a7++)o[a7] && ue1.isFunction(o[a7].promise) ? o[a7].promise().progress(u(a7, n12, t)).done(u(a7, r8, o)).fail(l.reject) : --s;
                    return s || l.resolveWith(r8, o), l.promise();
                }
            });
            var Te;
            ue1.fn.ready = function(e) {
                return ue1.ready.promise().done(e), this;
            }, ue1.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ue1.readyWait++ : ue1.ready(!0);
                },
                ready: function(e) {
                    (e === !0 ? --ue1.readyWait : ue1.isReady) || (ue1.isReady = !0, e !== !0 && --ue1.readyWait > 0 || (Te.resolveWith(Q1, [
                        ue1
                    ]), ue1.fn.triggerHandler && (ue1(Q1).triggerHandler("ready"), ue1(Q1).off("ready"))));
                }
            }), ue1.ready.promise = function(e) {
                return Te || (Te = ue1.Deferred(), "complete" === Q1.readyState || "loading" !== Q1.readyState && !Q1.documentElement.doScroll ? n4.setTimeout(ue1.ready) : (Q1.addEventListener("DOMContentLoaded", c1), n4.addEventListener("load", c1))), Te.promise(e);
            }, ue1.ready.promise();
            var Re = function(e23, t, n13, r, a, o, i) {
                var s = 0, l = e23.length, u = null == n13;
                if ("object" === ue1.type(n13)) {
                    a = !0;
                    for(s in n13)Re(e23, t, s, n13[s], !0, o, i);
                } else if (void 0 !== r && (a = !0, ue1.isFunction(r) || (i = !0), u && (i ? (t.call(e23, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(ue1(e), n);
                })), t)) for(; l > s; s++)t(e23[s], n13, i ? r : r.call(e23[s], s, t(e23[s], n13)));
                return a ? e23 : u ? t.call(e23) : l ? t(e23[0], n13) : o;
            }, ke = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            p1.uid = 1, p1.prototype = {
                register: function(e, t) {
                    var n = t || {};
                    return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }), e[this.expando];
                },
                cache: function(e) {
                    if (!ke(e)) return {};
                    var t = e[this.expando];
                    return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t;
                },
                set: function(e, t, n) {
                    var r, a = this.cache(e);
                    if ("string" == typeof t) a[t] = n;
                    else for(r in t)a[r] = t[r];
                    return a;
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
                },
                access: function(e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ue1.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
                },
                remove: function(e, t) {
                    var n, r, a, o = e[this.expando];
                    if (void 0 !== o) {
                        if (void 0 === t) this.register(e);
                        else {
                            ue1.isArray(t) ? r = t.concat(t.map(ue1.camelCase)) : (a = ue1.camelCase(t), t in o ? r = [
                                t,
                                a
                            ] : (r = a, r = r in o ? [
                                r
                            ] : r.match(_e) || [])), n = r.length;
                            for(; n--;)delete o[r[n]];
                        }
                        (void 0 === t || ue1.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !ue1.isEmptyObject(t);
                }
            };
            var Se = new p1, Ne = new p1, Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ie = /[A-Z]/g;
            ue1.extend({
                hasData: function(e) {
                    return Ne.hasData(e) || Se.hasData(e);
                },
                data: function(e, t, n) {
                    return Ne.access(e, t, n);
                },
                removeData: function(e, t) {
                    Ne.remove(e, t);
                },
                _data: function(e, t, n) {
                    return Se.access(e, t, n);
                },
                _removeData: function(e, t) {
                    Se.remove(e, t);
                }
            }), ue1.fn.extend({
                data: function(e, t15) {
                    var n14, r9, a, o = this[0], i = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (a = Ne.get(o), 1 === o.nodeType && !Se.get(o, "hasDataAttrs"))) {
                            for(n14 = i.length; n14--;)i[n14] && (r9 = i[n14].name, 0 === r9.indexOf("data-") && (r9 = ue1.camelCase(r9.slice(5)), d1(o, r9, a[r9])));
                            Se.set(o, "hasDataAttrs", !0);
                        }
                        return a;
                    }
                    return "object" == typeof e ? this.each(function() {
                        Ne.set(this, e);
                    }) : Re(this, function(t) {
                        var n15, r;
                        if (o && void 0 === t) {
                            if (n15 = Ne.get(o, e) || Ne.get(o, e.replace(Ie, "-$&").toLowerCase()), void 0 !== n15) return n15;
                            if (r = ue1.camelCase(e), n15 = Ne.get(o, r), void 0 !== n15) return n15;
                            if (n15 = d1(o, r, void 0), void 0 !== n15) return n15;
                        } else r = ue1.camelCase(e), this.each(function() {
                            var n = Ne.get(this, r);
                            Ne.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Ne.set(this, e, t);
                        });
                    }, null, t15, arguments.length > 1, null, !0);
                },
                removeData: function(e) {
                    return this.each(function() {
                        Ne.remove(this, e);
                    });
                }
            }), ue1.extend({
                queue: function(e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = Se.get(e, t), n && (!r || ue1.isArray(n) ? r = Se.access(e, t, ue1.makeArray(n)) : r.push(n)), r || []) : void 0;
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = ue1.queue(e, t), r = n.length, a = n.shift(), o = ue1._queueHooks(e, t), i = function() {
                        ue1.dequeue(e, t);
                    };
                    "inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete o.stop, a.call(e, i, o)), !r && o && o.empty.fire();
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Se.get(e, n) || Se.access(e, n, {
                        empty: ue1.Callbacks("once memory").add(function() {
                            Se.remove(e, [
                                t + "queue",
                                n
                            ]);
                        })
                    });
                }
            }), ue1.fn.extend({
                queue: function(e, t) {
                    var n16 = 2;
                    return "string" != typeof e && (t = e, e = "fx", n16--), arguments.length < n16 ? ue1.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = ue1.queue(this, e, t);
                        ue1._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ue1.dequeue(this, e);
                    });
                },
                dequeue: function(e) {
                    return this.each(function() {
                        ue1.dequeue(this, e);
                    });
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", []);
                },
                promise: function(e, t) {
                    var n, r = 1, a = ue1.Deferred(), o = this, i = this.length, s = function() {
                        --r || a.resolveWith(o, [
                            o
                        ]);
                    };
                    for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;)n = Se.get(o[i], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), a.promise(t);
                }
            });
            var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"), De = [
                "Top",
                "Right",
                "Bottom",
                "Left"
            ], Me = function(e, t) {
                return e = t || e, "none" === ue1.css(e, "display") || !ue1.contains(e.ownerDocument, e);
            }, je = /^(?:checkbox|radio)$/i, He = /<([\w:-]+)/, qe = /^$|\/(?:java|ecma)script/i, Fe = {
                option: [
                    1,
                    "<select multiple='multiple'>",
                    "</select>"
                ],
                thead: [
                    1,
                    "<table>",
                    "</table>"
                ],
                col: [
                    2,
                    "<table><colgroup>",
                    "</colgroup></table>"
                ],
                tr: [
                    2,
                    "<table><tbody>",
                    "</tbody></table>"
                ],
                td: [
                    3,
                    "<table><tbody><tr>",
                    "</tr></tbody></table>"
                ],
                _default: [
                    0,
                    "",
                    ""
                ]
            };
            Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td;
            var Be = /<|&#?\w+;/;
            !function() {
                var e = Q1.createDocumentFragment(), t = e.appendChild(Q1.createElement("div")), n = Q1.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), se1.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", se1.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
            }();
            var Ue = /^key/, We = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ve = /^([^.]*)(?:\.(.+)|)/;
            ue1.event = {
                global: {},
                add: function(e, t16, n, r, a) {
                    var o, i, s, l, u, c, p, d, f, h, g, m = Se.get(e);
                    if (m) for(n.handler && (o = n, n = o.handler, a = o.selector), n.guid || (n.guid = ue1.guid++), (l = m.events) || (l = m.events = {}), (i = m.handle) || (i = m.handle = function(t) {
                        return "undefined" != typeof ue1 && ue1.event.triggered !== t.type ? ue1.event.dispatch.apply(e, arguments) : void 0;
                    }), t16 = (t16 || "").match(_e) || [
                        ""
                    ], u = t16.length; u--;)s = Ve.exec(t16[u]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f && (p = ue1.event.special[f] || {}, f = (a ? p.delegateType : p.bindType) || f, p = ue1.event.special[f] || {}, c = ue1.extend({
                        type: f,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && ue1.expr.match.needsContext.test(a),
                        namespace: h.join(".")
                    }, o), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, r, h, i) !== !1 || e.addEventListener && e.addEventListener(f, i)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), a ? d.splice(d.delegateCount++, 0, c) : d.push(c), ue1.event.global[f] = !0);
                },
                remove: function(e, t, n, r, a) {
                    var o, i, s, l, u, c, p, d, f, h, g, m = Se.hasData(e) && Se.get(e);
                    if (m && (l = m.events)) {
                        for(t = (t || "").match(_e) || [
                            ""
                        ], u = t.length; u--;)if (s = Ve.exec(t[u]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for(p = ue1.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = o = d.length; o--;)c = d[o], !a && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                            i && !d.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || ue1.removeEvent(e, f, m.handle), delete l[f]);
                        } else for(f in l)ue1.event.remove(e, f + t[u], n, r, !0);
                        ue1.isEmptyObject(l) && Se.remove(e, "handle events");
                    }
                },
                dispatch: function(e) {
                    e = ue1.event.fix(e);
                    var t, n, r, a, o, i = [], s = ee1.call(arguments), l = (Se.get(this, "events") || {})[e.type] || [], u = ue1.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for(i = ue1.event.handlers.call(this, e, l), t = 0; (a = i[t++]) && !e.isPropagationStopped();)for(e.currentTarget = a.elem, n = 0; (o = a.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((ue1.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result;
                    }
                },
                handlers: function(e, t) {
                    var n, r, a, o, i = [], s = t.delegateCount, l = e.target;
                    if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) {
                        for(; l !== this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for(r = [], n = 0; s > n; n++)o = t[n], a = o.selector + " ", void 0 === r[a] && (r[a] = o.needsContext ? ue1(a, this).index(l) > -1 : ue1.find(a, this, null, [
                                l
                            ]).length), r[a] && r.push(o);
                            r.length && i.push({
                                elem: l,
                                handlers: r
                            });
                        }
                    }
                    return s < t.length && i.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), i;
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, a, o = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q1, r = n.documentElement, a = n.body, e.pageX = t.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
                    }
                },
                fix: function(e) {
                    if (e[ue1.expando]) return e;
                    var t, n, r, a = e.type, o = e, i = this.fixHooks[a];
                    for(i || (this.fixHooks[a] = i = We.test(a) ? this.mouseHooks : Ue.test(a) ? this.keyHooks : {}), r = i.props ? this.props.concat(i.props) : this.props, e = new ue1.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
                    return e.target || (e.target = Q1), 3 === e.target.nodeType && (e.target = e.target.parentNode), i.filter ? i.filter(e, o) : e;
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== y1() && this.focus ? (this.focus(), !1) : void 0;
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === y1() && this.blur ? (this.blur(), !1) : void 0;
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && ue1.nodeName(this, "input") ? (this.click(), !1) : void 0;
                        },
                        _default: function(e) {
                            return ue1.nodeName(e.target, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        }
                    }
                }
            }, ue1.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }, ue1.Event = function(e, t) {
                return this instanceof ue1.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b1 : v1) : this.type = e, t && ue1.extend(this, t), this.timeStamp = e && e.timeStamp || ue1.now(), void (this[ue1.expando] = !0)) : new ue1.Event(e, t);
            }, ue1.Event.prototype = {
                constructor: ue1.Event,
                isDefaultPrevented: v1,
                isPropagationStopped: v1,
                isImmediatePropagationStopped: v1,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = b1, e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = b1, e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = b1, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                }
            }, ue1.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e24, t) {
                ue1.event.special[e24] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, a = e.relatedTarget, o = e.handleObj;
                        return a && (a === r || ue1.contains(r, a)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
                    }
                };
            }), ue1.fn.extend({
                on: function(e, t, n, r) {
                    return x1(this, e, t, n, r);
                },
                one: function(e, t, n, r) {
                    return x1(this, e, t, n, r, 1);
                },
                off: function(e, t, n) {
                    var r, a;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ue1(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for(a in e)this.off(a, t, e[a]);
                        return this;
                    }
                    return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = v1), this.each(function() {
                        ue1.event.remove(this, e, n, t);
                    });
                }
            });
            var Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ye = /<script|<style|<link/i, $e = /checked\s*(?:[^=]|=\s*.checked.)/i, ze = /^true\/(.*)/, Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ue1.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Ge, "<$1></$2>");
                },
                clone: function(e, t, n) {
                    var r, a, o, i, s = e.cloneNode(!0), l = ue1.contains(e.ownerDocument, e);
                    if (!(se1.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue1.isXMLDoc(e))) for(i = h1(s), o = h1(e), r = 0, a = o.length; a > r; r++)_1(o[r], i[r]);
                    if (t) {
                        if (n) for(o = o || h1(e), i = i || h1(s), r = 0, a = o.length; a > r; r++)C1(o[r], i[r]);
                        else C1(e, s);
                    }
                    return i = h1(s, "script"), i.length > 0 && g1(i, !l && h1(e, "script")), s;
                },
                cleanData: function(e) {
                    for(var t, n, r, a = ue1.event.special, o = 0; void 0 !== (n = e[o]); o++)if (ke(n)) {
                        if (t = n[Se.expando]) {
                            if (t.events) for(r in t.events)a[r] ? ue1.event.remove(n, r) : ue1.removeEvent(n, r, t.handle);
                            n[Se.expando] = void 0;
                        }
                        n[Ne.expando] && (n[Ne.expando] = void 0);
                    }
                }
            }), ue1.fn.extend({
                domManip: T1,
                detach: function(e) {
                    return R1(this, e, !0);
                },
                remove: function(e) {
                    return R1(this, e);
                },
                text: function(e25) {
                    return Re(this, function(e) {
                        return void 0 === e ? ue1.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                        });
                    }, null, e25, arguments.length);
                },
                append: function() {
                    return T1(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = w1(this, e);
                            t.appendChild(e);
                        }
                    });
                },
                prepend: function() {
                    return T1(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = w1(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    });
                },
                before: function() {
                    return T1(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                },
                after: function() {
                    return T1(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    });
                },
                empty: function() {
                    for(var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (ue1.cleanData(h1(e, !1)), e.textContent = "");
                    return this;
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return ue1.clone(this, e, t);
                    });
                },
                html: function(e26) {
                    return Re(this, function(e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ye.test(e) && !Fe[(He.exec(e) || [
                            "",
                            ""
                        ])[1].toLowerCase()]) {
                            e = ue1.htmlPrefilter(e);
                            try {
                                for(; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (ue1.cleanData(h1(t, !1)), t.innerHTML = e);
                                t = 0;
                            } catch (a) {}
                        }
                        t && this.empty().append(e);
                    }, null, e26, arguments.length);
                },
                replaceWith: function() {
                    var e = [];
                    return T1(this, arguments, function(t) {
                        var n = this.parentNode;
                        ue1.inArray(this, e) < 0 && (ue1.cleanData(h1(this)), n && n.replaceChild(t, this));
                    }, e);
                }
            }), ue1.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e27, t) {
                ue1.fn[e27] = function(e) {
                    for(var n, r = [], a = ue1(e), o = a.length - 1, i = 0; o >= i; i++)n = i === o ? this : this.clone(!0), ue1(a[i])[t](n), ne1.apply(r, n.get());
                    return this.pushStack(r);
                };
            });
            var Ke, Je = {
                HTML: "block",
                BODY: "block"
            }, Ze = /^margin/, Qe = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"), et = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n4), t.getComputedStyle(e);
            }, tt = function(e, t, n, r) {
                var a, o, i = {};
                for(o in t)i[o] = e.style[o], e.style[o] = t[o];
                a = n.apply(e, r || []);
                for(o in t)e.style[o] = i[o];
                return a;
            }, nt = Q1.documentElement;
            !function() {
                function e28() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", nt.appendChild(i);
                    var e = n4.getComputedStyle(s);
                    t17 = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, s.style.marginRight = "50%", a = "4px" === e.marginRight, nt.removeChild(i);
                }
                var t17, r, a, o, i = Q1.createElement("div"), s = Q1.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", se1.clearCloneStyle = "content-box" === s.style.backgroundClip, i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", i.appendChild(s), ue1.extend(se1, {
                    pixelPosition: function() {
                        return e28(), t17;
                    },
                    boxSizingReliable: function() {
                        return null == r && e28(), r;
                    },
                    pixelMarginRight: function() {
                        return null == r && e28(), a;
                    },
                    reliableMarginLeft: function() {
                        return null == r && e28(), o;
                    },
                    reliableMarginRight: function() {
                        var e, t = s.appendChild(Q1.createElement("div"));
                        return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", nt.appendChild(i), e = !parseFloat(n4.getComputedStyle(t).marginRight), nt.removeChild(i), s.removeChild(t), e;
                    }
                }));
            }();
            var rt = /^(none|table(?!-c[ea]).+)/, at = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, ot = {
                letterSpacing: "0",
                fontWeight: "400"
            }, it = [
                "Webkit",
                "O",
                "Moz",
                "ms"
            ], st = Q1.createElement("div").style;
            ue1.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = N1(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var a, o, i, s = ue1.camelCase(t), l = e.style;
                        return t = ue1.cssProps[s] || (ue1.cssProps[s] = I1(s) || s), i = ue1.cssHooks[t] || ue1.cssHooks[s], void 0 === n ? i && "get" in i && void 0 !== (a = i.get(e, !1, r)) ? a : l[t] : (o = typeof n, "string" === o && (a = Pe.exec(n)) && a[1] && (n = f1(e, t, a), o = "number"), null != n && n === n && ("number" === o && (n += a && a[3] || (ue1.cssNumber[s] ? "" : "px")), se1.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), i && "set" in i && void 0 === (n = i.set(e, n, r)) || (l[t] = n)), void 0);
                    }
                },
                css: function(e, t, n, r) {
                    var a, o, i, s = ue1.camelCase(t);
                    return t = ue1.cssProps[s] || (ue1.cssProps[s] = I1(s) || s), i = ue1.cssHooks[t] || ue1.cssHooks[s], i && "get" in i && (a = i.get(e, !0, n)), void 0 === a && (a = N1(e, t, r)), "normal" === a && t in ot && (a = ot[t]), "" === n || n ? (o = parseFloat(a), n === !0 || isFinite(o) ? o || 0 : a) : a;
                }
            }), ue1.each([
                "height",
                "width"
            ], function(e29, t) {
                ue1.cssHooks[t] = {
                    get: function(e, n, r) {
                        return n ? rt.test(ue1.css(e, "display")) && 0 === e.offsetWidth ? tt(e, at, function() {
                            return D1(e, t, r);
                        }) : D1(e, t, r) : void 0;
                    },
                    set: function(e, n, r) {
                        var a, o = r && et(e), i = r && P1(e, t, r, "border-box" === ue1.css(e, "boxSizing", !1, o), o);
                        return i && (a = Pe.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = ue1.css(e, t)), L1(e, n, i);
                    }
                };
            }), ue1.cssHooks.marginLeft = O1(se1.reliableMarginLeft, function(e, t) {
                return t ? (parseFloat(N1(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left;
                })) + "px" : void 0;
            }), ue1.cssHooks.marginRight = O1(se1.reliableMarginRight, function(e, t) {
                return t ? tt(e, {
                    display: "inline-block"
                }, N1, [
                    e,
                    "marginRight"
                ]) : void 0;
            }), ue1.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                ue1.cssHooks[e + t] = {
                    expand: function(n) {
                        for(var r = 0, a = {}, o = "string" == typeof n ? n.split(" ") : [
                            n
                        ]; 4 > r; r++)a[e + De[r] + t] = o[r] || o[r - 2] || o[0];
                        return a;
                    }
                }, Ze.test(e) || (ue1.cssHooks[e + t].set = L1);
            }), ue1.fn.extend({
                css: function(e30, t18) {
                    return Re(this, function(e, t, n) {
                        var r, a, o = {}, i = 0;
                        if (ue1.isArray(t)) {
                            for(r = et(e), a = t.length; a > i; i++)o[t[i]] = ue1.css(e, t[i], !1, r);
                            return o;
                        }
                        return void 0 !== n ? ue1.style(e, t, n) : ue1.css(e, t);
                    }, e30, t18, arguments.length > 1);
                },
                show: function() {
                    return M1(this, !0);
                },
                hide: function() {
                    return M1(this);
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Me(this) ? ue1(this).show() : ue1(this).hide();
                    });
                }
            }), ue1.Tween = j1, j1.prototype = {
                constructor: j1,
                init: function(e, t, n, r, a, o) {
                    this.elem = e, this.prop = n, this.easing = a || ue1.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ue1.cssNumber[n] ? "" : "px");
                },
                cur: function() {
                    var e = j1.propHooks[this.prop];
                    return e && e.get ? e.get(this) : j1.propHooks._default.get(this);
                },
                run: function(e) {
                    var t, n = j1.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = ue1.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j1.propHooks._default.set(this), this;
                }
            }, j1.prototype.init.prototype = j1.prototype, j1.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ue1.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
                    },
                    set: function(e) {
                        ue1.fx.step[e.prop] ? ue1.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ue1.cssProps[e.prop]] && !ue1.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ue1.style(e.elem, e.prop, e.now + e.unit);
                    }
                }
            }, j1.propHooks.scrollTop = j1.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
            }, ue1.easing = {
                linear: function(e) {
                    return e;
                },
                swing: function(e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing"
            }, ue1.fx = j1.prototype.init, ue1.fx.step = {};
            var lt, ut, ct = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
            ue1.Animation = ue1.extend(W1, {
                tweeners: {
                    "*": [
                        function(e, t) {
                            var n = this.createTween(e, t);
                            return f1(n.elem, e, Pe.exec(t), n), n;
                        }
                    ]
                },
                tweener: function(e, t) {
                    ue1.isFunction(e) ? (t = e, e = [
                        "*"
                    ]) : e = e.match(_e);
                    for(var n, r = 0, a = e.length; a > r; r++)n = e[r], W1.tweeners[n] = W1.tweeners[n] || [], W1.tweeners[n].unshift(t);
                },
                prefilters: [
                    B1
                ],
                prefilter: function(e, t) {
                    t ? W1.prefilters.unshift(e) : W1.prefilters.push(e);
                }
            }), ue1.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? ue1.extend({}, e) : {
                    complete: n || !n && t || ue1.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ue1.isFunction(t) && t
                };
                return r.duration = ue1.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue1.fx.speeds ? ue1.fx.speeds[r.duration] : ue1.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    ue1.isFunction(r.old) && r.old.call(this), r.queue && ue1.dequeue(this, r.queue);
                }, r;
            }, ue1.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(Me).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r);
                },
                animate: function(e, t19, n, r) {
                    var a = ue1.isEmptyObject(e), o = ue1.speed(t19, n, r), i = function() {
                        var t = W1(this, ue1.extend({}, e), o);
                        (a || Se.get(this, "finish")) && t.stop(!0);
                    };
                    return i.finish = i, a || o.queue === !1 ? this.each(i) : this.queue(o.queue, i);
                },
                stop: function(e31, t20, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n);
                    };
                    return "string" != typeof e31 && (n = t20, t20 = e31, e31 = void 0), t20 && e31 !== !1 && this.queue(e31 || "fx", []), this.each(function() {
                        var t = !0, a = null != e31 && e31 + "queueHooks", o = ue1.timers, i = Se.get(this);
                        if (a) i[a] && i[a].stop && r(i[a]);
                        else for(a in i)i[a] && i[a].stop && pt.test(a) && r(i[a]);
                        for(a = o.length; a--;)o[a].elem !== this || null != e31 && o[a].queue !== e31 || (o[a].anim.stop(n), t = !1, o.splice(a, 1));
                        !t && n || ue1.dequeue(this, e31);
                    });
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = Se.get(this), r = n[e + "queue"], a = n[e + "queueHooks"], o = ue1.timers, i = r ? r.length : 0;
                        for(n.finish = !0, ue1.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for(t = 0; i > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    });
                }
            }), ue1.each([
                "toggle",
                "show",
                "hide"
            ], function(e32, t) {
                var n = ue1.fn[t];
                ue1.fn[t] = function(e, r, a) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q1(t, !0), e, r, a);
                };
            }), ue1.each({
                slideDown: q1("show"),
                slideUp: q1("hide"),
                slideToggle: q1("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e33, t) {
                ue1.fn[e33] = function(e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }), ue1.timers = [], ue1.fx.tick = function() {
                var e, t = 0, n = ue1.timers;
                for(lt = ue1.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || ue1.fx.stop(), lt = void 0;
            }, ue1.fx.timer = function(e) {
                ue1.timers.push(e), e() ? ue1.fx.start() : ue1.timers.pop();
            }, ue1.fx.interval = 13, ue1.fx.start = function() {
                ut || (ut = n4.setInterval(ue1.fx.tick, ue1.fx.interval));
            }, ue1.fx.stop = function() {
                n4.clearInterval(ut), ut = null;
            }, ue1.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ue1.fn.delay = function(e, t21) {
                return e = ue1.fx ? ue1.fx.speeds[e] || e : e, t21 = t21 || "fx", this.queue(t21, function(t, r) {
                    var a = n4.setTimeout(t, e);
                    r.stop = function() {
                        n4.clearTimeout(a);
                    };
                });
            }, function() {
                var e = Q1.createElement("input"), t = Q1.createElement("select"), n = t.appendChild(Q1.createElement("option"));
                e.type = "checkbox", se1.checkOn = "" !== e.value, se1.optSelected = n.selected, t.disabled = !0, se1.optDisabled = !n.disabled, e = Q1.createElement("input"), e.value = "t", e.type = "radio", se1.radioValue = "t" === e.value;
            }();
            var dt, ft = ue1.expr.attrHandle;
            ue1.fn.extend({
                attr: function(e, t) {
                    return Re(this, ue1.attr, e, t, arguments.length > 1);
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        ue1.removeAttr(this, e);
                    });
                }
            }), ue1.extend({
                attr: function(e, t, n) {
                    var r, a, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ue1.prop(e, t, n) : (1 === o && ue1.isXMLDoc(e) || (t = t.toLowerCase(), a = ue1.attrHooks[t] || (ue1.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void ue1.removeAttr(e, t) : a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (r = a.get(e, t)) ? r : (r = ue1.find.attr(e, t), null == r ? void 0 : r));
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!se1.radioValue && "radio" === t && ue1.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r, a = 0, o = t && t.match(_e);
                    if (o && 1 === e.nodeType) for(; n = o[a++];)r = ue1.propFix[n] || n, ue1.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
                }
            }), dt = {
                set: function(e, t, n) {
                    return t === !1 ? ue1.removeAttr(e, n) : e.setAttribute(n, n), n;
                }
            }, ue1.each(ue1.expr.match.bool.source.match(/\w+/g), function(e34, t22) {
                var n = ft[t22] || ue1.find.attr;
                ft[t22] = function(e, t, r) {
                    var a, o;
                    return r || (o = ft[t], ft[t] = a, a = null != n(e, t, r) ? t.toLowerCase() : null, ft[t] = o), a;
                };
            });
            var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;
            ue1.fn.extend({
                prop: function(e, t) {
                    return Re(this, ue1.prop, e, t, arguments.length > 1);
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[ue1.propFix[e] || e];
                    });
                }
            }), ue1.extend({
                prop: function(e, t, n) {
                    var r, a, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ue1.isXMLDoc(e) || (t = ue1.propFix[t] || t, a = ue1.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t];
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = ue1.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), se1.optSelected || (ue1.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
            }), ue1.each([
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable"
            ], function() {
                ue1.propFix[this.toLowerCase()] = this;
            });
            var mt = /[\t\r\n\f]/g;
            ue1.fn.extend({
                addClass: function(e) {
                    var t23, n, r, a, o, i, s, l = 0;
                    if (ue1.isFunction(e)) return this.each(function(t) {
                        ue1(this).addClass(e.call(this, t, V1(this)));
                    });
                    if ("string" == typeof e && e) {
                        for(t23 = e.match(_e) || []; n = this[l++];)if (a = V1(n), r = 1 === n.nodeType && (" " + a + " ").replace(mt, " ")) {
                            for(i = 0; o = t23[i++];)r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            s = ue1.trim(r), a !== s && n.setAttribute("class", s);
                        }
                    }
                    return this;
                },
                removeClass: function(e) {
                    var t24, n, r, a, o, i, s, l = 0;
                    if (ue1.isFunction(e)) return this.each(function(t) {
                        ue1(this).removeClass(e.call(this, t, V1(this)));
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e) {
                        for(t24 = e.match(_e) || []; n = this[l++];)if (a = V1(n), r = 1 === n.nodeType && (" " + a + " ").replace(mt, " ")) {
                            for(i = 0; o = t24[i++];)for(; r.indexOf(" " + o + " ") > -1;)r = r.replace(" " + o + " ", " ");
                            s = ue1.trim(r), a !== s && n.setAttribute("class", s);
                        }
                    }
                    return this;
                },
                toggleClass: function(e, t25) {
                    var n17 = typeof e;
                    return "boolean" == typeof t25 && "string" === n17 ? t25 ? this.addClass(e) : this.removeClass(e) : ue1.isFunction(e) ? this.each(function(n) {
                        ue1(this).toggleClass(e.call(this, n, V1(this), t25), t25);
                    }) : this.each(function() {
                        var t, r, a, o;
                        if ("string" === n17) for(r = 0, a = ue1(this), o = e.match(_e) || []; t = o[r++];)a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                        else void 0 !== e && "boolean" !== n17 || (t = V1(this), t && Se.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Se.get(this, "__className__") || ""));
                    });
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for(t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + V1(n) + " ").replace(mt, " ").indexOf(t) > -1) return !0;
                    return !1;
                }
            });
            var bt = /\r/g, vt = /[\x20\t\r\n\f]+/g;
            ue1.fn.extend({
                val: function(e35) {
                    var t, n18, r, a8 = this[0];
                    if (arguments.length) return r = ue1.isFunction(e35), this.each(function(n) {
                        var a;
                        1 === this.nodeType && (a = r ? e35.call(this, n, ue1(this).val()) : e35, null == a ? a = "" : "number" == typeof a ? a += "" : ue1.isArray(a) && (a = ue1.map(a, function(e) {
                            return null == e ? "" : e + "";
                        })), t = ue1.valHooks[this.type] || ue1.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a));
                    });
                    if (a8) return t = ue1.valHooks[a8.type] || ue1.valHooks[a8.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n18 = t.get(a8, "value")) ? n18 : (n18 = a8.value, "string" == typeof n18 ? n18.replace(bt, "") : null == n18 ? "" : n18);
                }
            }), ue1.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = ue1.find.attr(e, "value");
                            return null != t ? t : ue1.trim(ue1.text(e)).replace(vt, " ");
                        }
                    },
                    select: {
                        get: function(e) {
                            for(var t, n, r = e.options, a = e.selectedIndex, o = "select-one" === e.type || 0 > a, i = o ? null : [], s = o ? a + 1 : r.length, l = 0 > a ? s : o ? a : 0; s > l; l++)if (n = r[l], (n.selected || l === a) && (se1.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ue1.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ue1(n).val(), o) return t;
                                i.push(t);
                            }
                            return i;
                        },
                        set: function(e, t) {
                            for(var n, r, a = e.options, o = ue1.makeArray(t), i = a.length; i--;)r = a[i], (r.selected = ue1.inArray(ue1.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        }
                    }
                }
            }), ue1.each([
                "radio",
                "checkbox"
            ], function() {
                ue1.valHooks[this] = {
                    set: function(e, t) {
                        return ue1.isArray(t) ? e.checked = ue1.inArray(ue1(e).val(), t) > -1 : void 0;
                    }
                }, se1.checkOn || (ue1.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
            });
            var yt = /^(?:focusinfocus|focusoutblur)$/;
            ue1.extend(ue1.event, {
                trigger: function(e, t, r, a) {
                    var o, i, s, l, u, c, p, d = [
                        r || Q1
                    ], f = ie1.call(e, "type") ? e.type : e, h = ie1.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (i = s = r = r || Q1, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(f + ue1.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[ue1.expando] ? e : new ue1.Event(f, "object" == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [
                        e
                    ] : ue1.makeArray(t, [
                        e
                    ]), p = ue1.event.special[f] || {}, a || !p.trigger || p.trigger.apply(r, t) !== !1)) {
                        if (!a && !p.noBubble && !ue1.isWindow(r)) {
                            for(l = p.delegateType || f, yt.test(l + f) || (i = i.parentNode); i; i = i.parentNode)d.push(i), s = i;
                            s === (r.ownerDocument || Q1) && d.push(s.defaultView || s.parentWindow || n4);
                        }
                        for(o = 0; (i = d[o++]) && !e.isPropagationStopped();)e.type = o > 1 ? l : p.bindType || f, c = (Se.get(i, "events") || {})[e.type] && Se.get(i, "handle"), c && c.apply(i, t), c = u && i[u], c && c.apply && ke(i) && (e.result = c.apply(i, t), e.result === !1 && e.preventDefault());
                        return e.type = f, a || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), t) !== !1 || !ke(r) || u && ue1.isFunction(r[f]) && !ue1.isWindow(r) && (s = r[u], s && (r[u] = null), ue1.event.triggered = f, r[f](), ue1.event.triggered = void 0, s && (r[u] = s)), e.result;
                    }
                },
                simulate: function(e, t, n) {
                    var r = ue1.extend(new ue1.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    ue1.event.trigger(r, null, t);
                }
            }), ue1.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        ue1.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? ue1.event.trigger(e, t, n, !0) : void 0;
                }
            }), ue1.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e36, t) {
                ue1.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
            }), ue1.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                }
            }), se1.focusin = "onfocusin" in n4, se1.focusin || ue1.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e37, t) {
                var n = function(e) {
                    ue1.event.simulate(t, e.target, ue1.event.fix(e));
                };
                ue1.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this, a = Se.access(r, t);
                        a || r.addEventListener(e37, n, !0), Se.access(r, t, (a || 0) + 1);
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this, a = Se.access(r, t) - 1;
                        a ? Se.access(r, t, a) : (r.removeEventListener(e37, n, !0), Se.remove(r, t));
                    }
                };
            });
            var xt = n4.location, wt = ue1.now(), At = /\?/;
            ue1.parseJSON = function(e) {
                return JSON.parse(e + "");
            }, ue1.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n4.DOMParser).parseFromString(e, "text/xml");
                } catch (r) {
                    t = void 0;
                }
                return t && !t.getElementsByTagName("parsererror").length || ue1.error("Invalid XML: " + e), t;
            };
            var Et = /#.*$/, Ct = /([?&])_=[^&]*/, _t = /^(.*?):[ \t]*([^\r\n]*)$/gm, Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rt = /^(?:GET|HEAD)$/, kt = /^\/\//, St = {}, Nt = {}, Ot = "*/".concat("*"), It = Q1.createElement("a");
            It.href = xt.href, ue1.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: xt.href,
                    type: "GET",
                    isLocal: Tt.test(xt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ot,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": ue1.parseJSON,
                        "text xml": ue1.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? $1($1(e, ue1.ajaxSettings), t) : $1(ue1.ajaxSettings, e);
                },
                ajaxPrefilter: G1(St),
                ajaxTransport: G1(Nt),
                ajax: function(e38, t26) {
                    function r10(e, t, r, s) {
                        var u, p, v, y, w, E = t;
                        2 !== x && (x = 2, l && n4.clearTimeout(l), a = void 0, i = s || "", A.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, r && (y = z1(d, A, r)), y = X1(d, y, A, u), u ? (d.ifModified && (w = A.getResponseHeader("Last-Modified"), w && (ue1.lastModified[o] = w), w = A.getResponseHeader("etag"), w && (ue1.etag[o] = w)), 204 === e || "HEAD" === d.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = y.state, p = y.data, v = y.error, u = !v)) : (v = E, !e && E || (E = "error", 0 > e && (e = 0))), A.status = e, A.statusText = (t || E) + "", u ? g.resolveWith(f, [
                            p,
                            E,
                            A
                        ]) : g.rejectWith(f, [
                            A,
                            E,
                            v
                        ]), A.statusCode(b), b = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [
                            A,
                            d,
                            u ? p : v
                        ]), m.fireWith(f, [
                            A,
                            E
                        ]), c && (h.trigger("ajaxComplete", [
                            A,
                            d
                        ]), --ue1.active || ue1.event.trigger("ajaxStop")));
                    }
                    "object" == typeof e38 && (t26 = e38, e38 = void 0), t26 = t26 || {};
                    var a, o, i, s5, l, u3, c, p3, d = ue1.ajaxSetup({}, t26), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? ue1(f) : ue1.event, g = ue1.Deferred(), m = ue1.Callbacks("once memory"), b = d.statusCode || {}, v3 = {}, y3 = {}, x = 0, w3 = "canceled", A = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!s5) for(s5 = {}; t = _t.exec(i);)s5[t[1].toLowerCase()] = t[2];
                                t = s5[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? i : null;
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = y3[n] = y3[n] || e, v3[e] = t), this;
                        },
                        overrideMimeType: function(e) {
                            return x || (d.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) {
                                if (2 > x) for(t in e)b[t] = [
                                    b[t],
                                    e[t]
                                ];
                                else A.always(e[A.status]);
                            }
                            return this;
                        },
                        abort: function(e) {
                            var t = e || w3;
                            return a && a.abort(t), r10(0, t), this;
                        }
                    };
                    if (g.promise(A).complete = m.add, A.success = A.done, A.error = A.fail, d.url = ((e38 || d.url || xt.href) + "").replace(Et, "").replace(kt, xt.protocol + "//"), d.type = t26.method || t26.type || d.method || d.type, d.dataTypes = ue1.trim(d.dataType || "*").toLowerCase().match(_e) || [
                        ""
                    ], null == d.crossDomain) {
                        u3 = Q1.createElement("a");
                        try {
                            u3.href = d.url, u3.href = u3.href, d.crossDomain = It.protocol + "//" + It.host != u3.protocol + "//" + u3.host;
                        } catch (E) {
                            d.crossDomain = !0;
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = ue1.param(d.data, d.traditional)), Y1(St, d, t26, A), 2 === x) return A;
                    c = ue1.event && d.global, c && 0 === ue1.active++ && ue1.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (At.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ct.test(o) ? o.replace(Ct, "$1_=" + wt++) : o + (At.test(o) ? "&" : "?") + "_=" + wt++)), d.ifModified && (ue1.lastModified[o] && A.setRequestHeader("If-Modified-Since", ue1.lastModified[o]), ue1.etag[o] && A.setRequestHeader("If-None-Match", ue1.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t26.contentType) && A.setRequestHeader("Content-Type", d.contentType), A.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : d.accepts["*"]);
                    for(p3 in d.headers)A.setRequestHeader(p3, d.headers[p3]);
                    if (d.beforeSend && (d.beforeSend.call(f, A, d) === !1 || 2 === x)) return A.abort();
                    w3 = "abort";
                    for(p3 in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })A[p3](d[p3]);
                    if (a = Y1(Nt, d, t26, A)) {
                        if (A.readyState = 1, c && h.trigger("ajaxSend", [
                            A,
                            d
                        ]), 2 === x) return A;
                        d.async && d.timeout > 0 && (l = n4.setTimeout(function() {
                            A.abort("timeout");
                        }, d.timeout));
                        try {
                            x = 1, a.send(v3, r10);
                        } catch (E) {
                            if (!(2 > x)) throw E;
                            r10(-1, E);
                        }
                    } else r10(-1, "No Transport");
                    return A;
                },
                getJSON: function(e, t, n) {
                    return ue1.get(e, t, n, "json");
                },
                getScript: function(e, t) {
                    return ue1.get(e, void 0, t, "script");
                }
            }), ue1.each([
                "get",
                "post"
            ], function(e39, t) {
                ue1[t] = function(e, n, r, a) {
                    return ue1.isFunction(n) && (a = a || r, r = n, n = void 0), ue1.ajax(ue1.extend({
                        url: e,
                        type: t,
                        dataType: a,
                        data: n,
                        success: r
                    }, ue1.isPlainObject(e) && e));
                };
            }), ue1._evalUrl = function(e) {
                return ue1.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                });
            }, ue1.fn.extend({
                wrapAll: function(e40) {
                    var t27;
                    return ue1.isFunction(e40) ? this.each(function(t) {
                        ue1(this).wrapAll(e40.call(this, t));
                    }) : (this[0] && (t27 = ue1(e40, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t27.insertBefore(this[0]), t27.map(function() {
                        for(var e = this; e.firstElementChild;)e = e.firstElementChild;
                        return e;
                    }).append(this)), this);
                },
                wrapInner: function(e) {
                    return ue1.isFunction(e) ? this.each(function(t) {
                        ue1(this).wrapInner(e.call(this, t));
                    }) : this.each(function() {
                        var t = ue1(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
                },
                wrap: function(e) {
                    var t = ue1.isFunction(e);
                    return this.each(function(n) {
                        ue1(this).wrapAll(t ? e.call(this, n) : e);
                    });
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ue1.nodeName(this, "body") || ue1(this).replaceWith(this.childNodes);
                    }).end();
                }
            }), ue1.expr.filters.hidden = function(e) {
                return !ue1.expr.filters.visible(e);
            }, ue1.expr.filters.visible = function(e) {
                return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
            };
            var Lt = /%20/g, Pt = /\[\]$/, Dt = /\r?\n/g, Mt = /^(?:submit|button|image|reset|file)$/i, jt = /^(?:input|select|textarea|keygen)/i;
            ue1.param = function(e41, t28) {
                var n, r = [], a = function(e, t) {
                    t = ue1.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
                };
                if (void 0 === t28 && (t28 = ue1.ajaxSettings && ue1.ajaxSettings.traditional), ue1.isArray(e41) || e41.jquery && !ue1.isPlainObject(e41)) ue1.each(e41, function() {
                    a(this.name, this.value);
                });
                else for(n in e41)K1(n, e41[n], t28, a);
                return r.join("&").replace(Lt, "+");
            }, ue1.fn.extend({
                serialize: function() {
                    return ue1.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = ue1.prop(this, "elements");
                        return e ? ue1.makeArray(e) : this;
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !ue1(this).is(":disabled") && jt.test(this.nodeName) && !Mt.test(e) && (this.checked || !je.test(e));
                    }).map(function(e42, t) {
                        var n = ue1(this).val();
                        return null == n ? null : ue1.isArray(n) ? ue1.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Dt, "\r\n")
                            };
                        }) : {
                            name: t.name,
                            value: n.replace(Dt, "\r\n")
                        };
                    }).get();
                }
            }), ue1.ajaxSettings.xhr = function() {
                try {
                    return new n4.XMLHttpRequest;
                } catch (e) {}
            };
            var Ht = {
                0: 200,
                1223: 204
            }, qt = ue1.ajaxSettings.xhr();
            se1.cors = !!qt && "withCredentials" in qt, se1.ajax = qt = !!qt, ue1.ajaxTransport(function(e43) {
                var t, r;
                return se1.cors || qt && !e43.crossDomain ? {
                    send: function(a, o) {
                        var i, s = e43.xhr();
                        if (s.open(e43.type, e43.url, e43.async, e43.username, e43.password), e43.xhrFields) for(i in e43.xhrFields)s[i] = e43.xhrFields[i];
                        e43.mimeType && s.overrideMimeType && s.overrideMimeType(e43.mimeType), e43.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                        for(i in a)s.setRequestHeader(i, a[i]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()));
                            };
                        }, s.onload = t(), r = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n4.setTimeout(function() {
                                t && r();
                            });
                        }, t = t("abort");
                        try {
                            s.send(e43.hasContent && e43.data || null);
                        } catch (l) {
                            if (t) throw l;
                        }
                    },
                    abort: function() {
                        t && t();
                    }
                } : void 0;
            }), ue1.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return ue1.globalEval(e), e;
                    }
                }
            }), ue1.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }), ue1.ajaxTransport("script", function(e44) {
                if (e44.crossDomain) {
                    var t, n;
                    return {
                        send: function(r, a) {
                            t = ue1("<script>").prop({
                                charset: e44.scriptCharset,
                                src: e44.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type);
                            }), Q1.head.appendChild(t[0]);
                        },
                        abort: function() {
                            n && n();
                        }
                    };
                }
            });
            var Ft = [], Bt = /(=)\?(?=&|$)|\?\?/;
            ue1.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ft.pop() || ue1.expando + "_" + wt++;
                    return this[e] = !0, e;
                }
            }), ue1.ajaxPrefilter("json jsonp", function(e, t, r) {
                var a, o, i, s = e.jsonp !== !1 && (Bt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(e.data) && "data");
                return s || "jsonp" === e.dataTypes[0] ? (a = e.jsonpCallback = ue1.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Bt, "$1" + a) : e.jsonp !== !1 && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function() {
                    return i || ue1.error(a + " was not called"), i[0];
                }, e.dataTypes[0] = "json", o = n4[a], n4[a] = function() {
                    i = arguments;
                }, r.always(function() {
                    void 0 === o ? ue1(n4).removeProp(a) : n4[a] = o, e[a] && (e.jsonpCallback = t.jsonpCallback, Ft.push(a)), i && ue1.isFunction(o) && o(i[0]), i = o = void 0;
                }), "script") : void 0;
            }), ue1.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || Q1;
                var r = ve1.exec(e), a = !n && [];
                return r ? [
                    t.createElement(r[1])
                ] : (r = m1([
                    e
                ], t, a), a && a.length && ue1(a).remove(), ue1.merge([], r.childNodes));
            };
            var Ut = ue1.fn.load;
            ue1.fn.load = function(e45, t29, n) {
                if ("string" != typeof e45 && Ut) return Ut.apply(this, arguments);
                var r, a, o, i = this, s = e45.indexOf(" ");
                return s > -1 && (r = ue1.trim(e45.slice(s)), e45 = e45.slice(0, s)), ue1.isFunction(t29) ? (n = t29, t29 = void 0) : t29 && "object" == typeof t29 && (a = "POST"), i.length > 0 && ue1.ajax({
                    url: e45,
                    type: a || "GET",
                    dataType: "html",
                    data: t29
                }).done(function(e) {
                    o = arguments, i.html(r ? ue1("<div>").append(ue1.parseHTML(e)).find(r) : e);
                }).always(n && function(e, t) {
                    i.each(function() {
                        n.apply(this, o || [
                            e.responseText,
                            t,
                            e
                        ]);
                    });
                }), this;
            }, ue1.each([
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend"
            ], function(e46, t) {
                ue1.fn[t] = function(e) {
                    return this.on(t, e);
                };
            }), ue1.expr.filters.animated = function(e) {
                return ue1.grep(ue1.timers, function(t) {
                    return e === t.elem;
                }).length;
            }, ue1.offset = {
                setOffset: function(e, t, n) {
                    var r, a, o, i, s, l, u, c = ue1.css(e, "position"), p = ue1(e), d = {};
                    "static" === c && (e.style.position = "relative"), s = p.offset(), o = ue1.css(e, "top"), l = ue1.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = p.position(), i = r.top, a = r.left) : (i = parseFloat(o) || 0, a = parseFloat(l) || 0), ue1.isFunction(t) && (t = t.call(e, n, ue1.extend({}, s))), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + a), "using" in t ? t.using.call(e, d) : p.css(d);
                }
            }, ue1.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        ue1.offset.setOffset(this, e, t);
                    });
                    var t30, n, r = this[0], a = {
                        top: 0,
                        left: 0
                    }, o = r && r.ownerDocument;
                    if (o) return t30 = o.documentElement, ue1.contains(t30, r) ? (a = r.getBoundingClientRect(), n = J1(o), {
                        top: a.top + n.pageYOffset - t30.clientTop,
                        left: a.left + n.pageXOffset - t30.clientLeft
                    }) : a;
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0], r = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === ue1.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue1.nodeName(e[0], "html") || (r = e.offset()), r.top += ue1.css(e[0], "borderTopWidth", !0), r.left += ue1.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - ue1.css(n, "marginTop", !0),
                            left: t.left - r.left - ue1.css(n, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for(var e = this.offsetParent; e && "static" === ue1.css(e, "position");)e = e.offsetParent;
                        return e || nt;
                    });
                }
            }), ue1.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e47, t) {
                var n = "pageYOffset" === t;
                ue1.fn[e47] = function(r11) {
                    return Re(this, function(e, r, a) {
                        var o = J1(e);
                        return void 0 === a ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : a, n ? a : o.pageYOffset) : e[r] = a);
                    }, e47, r11, arguments.length);
                };
            }), ue1.each([
                "top",
                "left"
            ], function(e48, t) {
                ue1.cssHooks[t] = O1(se1.pixelPosition, function(e, n) {
                    return n ? (n = N1(e, t), Qe.test(n) ? ue1(e).position()[t] + "px" : n) : void 0;
                });
            }), ue1.each({
                Height: "height",
                Width: "width"
            }, function(e, t31) {
                ue1.each({
                    padding: "inner" + e,
                    content: t31,
                    "": "outer" + e
                }, function(n19, r12) {
                    ue1.fn[r12] = function(r13, a9) {
                        var o = arguments.length && (n19 || "boolean" != typeof r13), i = n19 || (r13 === !0 || a9 === !0 ? "margin" : "border");
                        return Re(this, function(t, n, r) {
                            var a;
                            return ue1.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? ue1.css(t, n, i) : ue1.style(t, n, r, i);
                        }, t31, o ? r13 : void 0, o, null);
                    };
                });
            }), ue1.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function(e, t) {
                    return this.off(e, null, t);
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                size: function() {
                    return this.length;
                }
            }), ue1.fn.andSelf = ue1.fn.addBack, r2 = [], a1 = (function() {
                return ue1;
            }).apply(t4, r2), void 0 !== a1 && (e4.exports = a1);
            var Wt = n4.jQuery, Vt = n4.$;
            return ue1.noConflict = function(e) {
                return n4.$ === ue1 && (n4.$ = Vt), e && n4.jQuery === ue1 && (n4.jQuery = Wt), ue1;
            }, o1 || (n4.jQuery = n4.$ = ue1), ue1;
        });
    },
    function(e49, t32, n20) {
        (function(t33) {
            function r14(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            var a10 = function() {
                function e50(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e50(t.prototype, n), r && e50(t, r), t;
                };
            }(), o = n20(21);
            n20(49);
            var i = function() {
                function e51() {
                    r14(this, e51), this.panel = new o(this), this.$checkbox = null;
                }
                return a10(e51, [
                    {
                        key: "getTitle",
                        value: function() {
                            return "New plugin";
                        }
                    },
                    {
                        key: "getDescription",
                        value: function() {
                            return "";
                        }
                    },
                    {
                        key: "summary",
                        value: function(e) {
                            return this.panel.setSummary(e);
                        }
                    },
                    {
                        key: "about",
                        value: function(e) {
                            return this.panel.setAbout(e);
                        }
                    },
                    {
                        key: "error",
                        value: function(e, t, n) {
                            return this.panel.addError(e, t, n);
                        }
                    },
                    {
                        key: "render",
                        value: function(e) {
                            var n = this;
                            this.$checkbox = t33("input", {
                                className: "tota11y-plugin-checkbox tota11y-sr-only",
                                type: "checkbox",
                                onClick: function() {
                                    return e(n);
                                }
                            });
                            var r = t33("label", {
                                className: "tota11y-plugin-switch"
                            }, this.$checkbox, t33("div", {
                                "aria-hidden": "true",
                                className: "tota11y-plugin-indicator"
                            }, "✓"), t33("div", {
                                className: "tota11y-plugin-info"
                            }, t33("div", {
                                className: "tota11y-plugin-title"
                            }, this.getTitle()), t33("div", {
                                className: "tota11y-plugin-description"
                            }, this.getDescription()))), a = t33("li", {
                                role: "menu-item",
                                className: "tota11y-plugin"
                            }, r);
                            return a;
                        }
                    },
                    {
                        key: "activate",
                        value: function() {
                            this.run(), this.panel.render();
                        }
                    },
                    {
                        key: "deactivate",
                        value: function() {
                            this.cleanup(), this.panel.destroy(), this.$checkbox.prop("checked", !1);
                        }
                    }
                ]), e51;
            }();
            e49.exports = i;
        }).call(t32, n20(4));
    },
    function(e52, t34, n21) {
        "use strict";
        var r15 = n21(1), a11 = n21(33);
        n21(47);
        var o6 = 25;
        window.requestAnimationFrame = window.requestAnimationFrame || function(e) {
            window.setTimeout(e, 16);
        }, e52.exports = function(e53) {
            var t35 = "tota11y-annotation-" + e53, n22 = [], i6 = function(e, a) {
                var o = r15("<div>").addClass("tota11y").addClass(t35).addClass(a).css(e.position()).data({
                    $el: e
                });
                return n22.push({
                    $annotation: o,
                    $parent: e.offsetParent()
                }), o;
            }, s = 20;
            return function l() {
                for(var e = 0; n22.length > 0 && s > e; e++){
                    var t = n22.shift();
                    t.$parent.append(t.$annotation);
                }
                window.requestAnimationFrame(l);
            }(), r15(window).resize(function() {
                var e54 = r15("." + t35), n = e54.map(function(e, t) {
                    return r15(t).data("$el").position();
                });
                e54.each(function(e, t) {
                    r15(t).css({
                        top: n[e].top,
                        left: n[e].left
                    });
                });
            }), {
                label: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? e.prop("tagName").toLowerCase() : arguments[1];
                    return function() {
                        var n = i6(e, "tota11y-label");
                        return n.html(t);
                    }();
                },
                errorLabel: function(e55, t, n, o) {
                    var i = r15(a11({
                        text: t,
                        detail: n,
                        hasErrorEntry: !!o
                    }));
                    return o && (i.find(".tota11y-label-link").click(function(e) {
                        e.preventDefault(), e.stopPropagation(), o.show();
                    }), i.hover(function() {
                        o.$trigger.addClass("trigger-highlight");
                    }, function() {
                        o.$trigger.removeClass("trigger-highlight");
                    })), this.label(e55).addClass("tota11y-label-error").html(i);
                },
                highlight: function(e) {
                    var t = i6(e, "tota11y-highlight");
                    return t.css({
                        width: Math.max(o6, e.outerWidth(!0)),
                        height: Math.max(o6, e.outerHeight(!0))
                    });
                },
                toggleHighlight: function(e, t) {
                    var n = this, r = void 0;
                    t.on("mouseenter focus", function() {
                        r && r.remove(), r = n.highlight(e);
                    }), t.on("mouseleave blur", function() {
                        r && (r.remove(), r = null);
                    });
                },
                hide: function() {
                    r15(".tota11y.tota11y-label").hide();
                },
                show: function() {
                    r15(".tota11y.tota11y-label").show();
                },
                removeAll: function() {
                    r15("." + t35).remove();
                }
            };
        };
    },
    function(e56, t36, n23) {
        "use strict";
        function r(e57, t) {
            var a = arguments, o = n23(1);
            if (void 0 === t) return e57;
            if (e57.render) return e57.render(t && t.onClick);
            var i, s, l, u4 = function() {
                var n = o("<" + e57 + ">");
                if (null !== t) for(var u in t)if ("onClick" === u) {
                    var c = t[u];
                    n.click(c);
                } else if (/^aria-/.test(u) || "role" === u) {
                    var p = t[u];
                    n.attr(u, p);
                } else {
                    var p = t[u];
                    n.prop(u, p);
                }
                for(i = a.length, s = Array(i > 2 ? i - 2 : 0), l = 2; i > l; l++)s[l - 2] = a[l];
                return s.forEach(function(e) {
                    n.append(r(e));
                }), {
                    v: n
                };
            }();
            return "object" == typeof u4 ? u4.v : void 0;
        }
        e56.exports = r;
    },
    function(e58, t37) {
        e58.exports = function() {
            var e59 = [];
            return e59.toString = function() {
                for(var e = [], t = 0; t < this.length; t++){
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
                }
                return e.join("");
            }, e59.i = function(t, n) {
                "string" == typeof t && (t = [
                    [
                        null,
                        t,
                        ""
                    ]
                ]);
                for(var r = {}, a = 0; a < this.length; a++){
                    var o = this[a][0];
                    "number" == typeof o && (r[o] = !0);
                }
                for(var a = 0; a < t.length; a++){
                    var i = t[a];
                    "number" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e59.push(i));
                }
            }, e59;
        };
    },
    function(e, t, n) {
        e.exports = n(36)["default"];
    },
    function(e60, t38, n24) {
        function r16(e, t) {
            for(var n = 0; n < e.length; n++){
                var r = e[n], a = p[r.id];
                if (a) {
                    a.refs++;
                    for(var o = 0; o < a.parts.length; o++)a.parts[o](r.parts[o]);
                    for(; o < r.parts.length; o++)a.parts.push(s6(r.parts[o], t));
                } else {
                    for(var i = [], o = 0; o < r.parts.length; o++)i.push(s6(r.parts[o], t));
                    p[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: i
                    };
                }
            }
        }
        function a12(e) {
            for(var t = [], n = {}, r = 0; r < e.length; r++){
                var a = e[r], o = a[0], i = a[1], s = a[2], l = a[3], u = {
                    css: i,
                    media: s,
                    sourceMap: l
                };
                n[o] ? n[o].parts.push(u) : t.push(n[o] = {
                    id: o,
                    parts: [
                        u
                    ]
                });
            }
            return t;
        }
        function o7() {
            var e = document.createElement("style"), t = h();
            return e.type = "text/css", t.appendChild(e), e;
        }
        function i7() {
            var e = document.createElement("link"), t = h();
            return e.rel = "stylesheet", t.appendChild(e), e;
        }
        function s6(e, t39) {
            var n, r, a;
            if (t39.singleton) {
                var s = m++;
                n = g || (g = o7()), r = l4.bind(null, n, s, !1), a = l4.bind(null, n, s, !0);
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = i7(), r = c3.bind(null, n), a = function() {
                n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href);
            }) : (n = o7(), r = u5.bind(null, n), a = function() {
                n.parentNode.removeChild(n);
            });
            return r(e), function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t);
                } else a();
            };
        }
        function l4(e, t, n, r) {
            var a = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, a);
            else {
                var o = document.createTextNode(a), i = e.childNodes;
                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
            }
        }
        function u5(e, t) {
            var n = t.css, r = t.media;
            t.sourceMap;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for(; e.firstChild;)e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
            }
        }
        function c3(e, t) {
            var n = t.css, r = (t.media, t.sourceMap);
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(r)) + " */");
            var a = new Blob([
                n
            ], {
                type: "text/css"
            }), o = e.href;
            e.href = URL.createObjectURL(a), o && URL.revokeObjectURL(o);
        }
        var p = {}, d = function(e) {
            var t;
            return function() {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
            };
        }, f = d(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }), h = d(function() {
            return document.head || document.getElementsByTagName("head")[0];
        }), g = null, m = 0;
        e60.exports = function(e61, t) {
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = f());
            var n = a12(e61);
            return r16(n, t), function(e) {
                for(var o = [], i = 0; i < n.length; i++){
                    var s = n[i], l = p[s.id];
                    l.refs--, o.push(l);
                }
                if (e) {
                    var u = a12(e);
                    r16(u, t);
                }
                for(var i = 0; i < o.length; i++){
                    var l = o[i];
                    if (0 === l.refs) {
                        for(var c = 0; c < l.parts.length; c++)l.parts[c]();
                        delete p[l.id];
                    }
                }
            };
        };
        var b = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n");
            };
        }();
    },
    ,
    function(e62, t40) {
        "use strict";
        function n(e, t) {
            var a = t && t.loc, o = void 0, i = void 0;
            a && (o = a.start.line, i = a.start.column, e += " - " + o + ":" + i);
            for(var s = Error.prototype.constructor.call(this, e), l = 0; l < r.length; l++)this[r[l]] = s[r[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, n), a && (this.lineNumber = o, this.column = i);
        }
        t40.__esModule = !0;
        var r = [
            "description",
            "fileName",
            "lineNumber",
            "message",
            "name",
            "number",
            "stack"
        ];
        n.prototype = new Error, t40["default"] = n, e62.exports = t40["default"];
    },
    function(e63, t41) {
        "use strict";
        function n25(e) {
            return u[e];
        }
        function r17(e) {
            for(var t = 1; t < arguments.length; t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e;
        }
        function a(e, t) {
            for(var n = 0, r = e.length; r > n; n++)if (e[n] === t) return n;
            return -1;
        }
        function o(e) {
            if ("string" != typeof e) {
                if (e && e.toHTML) return e.toHTML();
                if (null == e) return "";
                if (!e) return e + "";
                e = "" + e;
            }
            return p.test(e) ? e.replace(c, n25) : e;
        }
        function i(e) {
            return e || 0 === e ? !(!h(e) || 0 !== e.length) : !0;
        }
        function s(e, t) {
            return e.path = t, e;
        }
        function l(e, t) {
            return (e ? e + "." : "") + t;
        }
        t41.__esModule = !0, t41.extend = r17, t41.indexOf = a, t41.escapeExpression = o, t41.isEmpty = i, t41.blockParams = s, t41.appendContextPath = l;
        var u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, c = /[&<>"'`]/g, p = /[&<>"'`]/, d = Object.prototype.toString;
        t41.toString = d;
        var f = function(e) {
            return "function" == typeof e;
        };
        f(/x/) && (t41.isFunction = f = function(e) {
            return "function" == typeof e && "[object Function]" === d.call(e);
        });
        var f;
        t41.isFunction = f;
        var h = Array.isArray || function(e) {
            return e && "object" == typeof e ? "[object Array]" === d.call(e) : !1;
        };
        t41.isArray = h;
    },
    function(e64, t42) {
        "use strict";
        function n26() {
            return axs.AuditRules.getRules().map(function(e) {
                return e.name;
            });
        }
        function r18(e) {
            var t = new axs.AuditConfiguration;
            return t.showUnsupportedRulesWarning = !1, t.ignoreSelectors(e, ".tota11y *"), n26().forEach(function(n) {
                n !== e && t.ignoreSelectors(n, "*");
            }), t;
        }
        function a13() {
            axs.AuditRule.collectMatchingElements = function(e, t, n, r) {
                if (e.nodeType === Node.ELEMENT_NODE) var a = e;
                if (a && t.call(null, a) && n.push(a), a) {
                    var o = a.shadowRoot || a.webkitShadowRoot;
                    if (o) return void axs.AuditRule.collectMatchingElements(o, t, n, o);
                }
                if (a && "content" == a.localName) for(var i = a, s = i.getDistributedNodes(), l = 0; l < s.length; l++)axs.AuditRule.collectMatchingElements(s[l], t, n, r);
                else {
                    if (a && "shadow" == a.localName) {
                        var u = a;
                        if (r) for(var s = u.getDistributedNodes(), l = 0; l < s.length; l++)axs.AuditRule.collectMatchingElements(s[l], t, n, r);
                        else console.warn("ShadowRoot not provided for", a);
                    }
                    for(var c = e.firstChild; null != c;)axs.AuditRule.collectMatchingElements(c, t, n, r), c = c.nextSibling;
                }
            };
        }
        function o8(e) {
            var t43 = r18(e);
            return a13(), axs.Audit.run(t43).filter(function(t) {
                return t.rule.name === e;
            })[0];
        }
        e64.exports = o8;
    },
    function(e65, t44, n27) {
        "use strict";
        function r19(e, t) {
            this.helpers = e || {}, this.partials = t || {}, a14(this);
        }
        function a14(e66) {
            e66.registerHelper("helperMissing", function() {
                if (1 !== arguments.length) throw new c["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
            }), e66.registerHelper("blockHelperMissing", function(t, n) {
                var r = n.inverse, a = n.fn;
                if (t === !0) return a(this);
                if (t === !1 || null == t) return r(this);
                if (h(t)) return t.length > 0 ? (n.ids && (n.ids = [
                    n.name
                ]), e66.helpers.each(t, n)) : r(this);
                if (n.data && n.ids) {
                    var i = o(n.data);
                    i.contextPath = l.appendContextPath(n.data.contextPath, n.name), n = {
                        data: i
                    };
                }
                return a(t, n);
            }), e66.registerHelper("each", function(e, t45) {
                function n28(t, n, a) {
                    u && (u.key = t, u.index = n, u.first = 0 === n, u.last = !!a, p && (u.contextPath = p + t)), s += r(e[t], {
                        data: u,
                        blockParams: l.blockParams([
                            e[t],
                            t
                        ], [
                            p + t,
                            null
                        ])
                    });
                }
                if (!t45) throw new c["default"]("Must pass iterator to #each");
                var r = t45.fn, a15 = t45.inverse, i = 0, s = "", u = void 0, p = void 0;
                if (t45.data && t45.ids && (p = l.appendContextPath(t45.data.contextPath, t45.ids[0]) + "."), g(e) && (e = e.call(this)), t45.data && (u = o(t45.data)), e && "object" == typeof e) {
                    if (h(e)) for(var d = e.length; d > i; i++)n28(i, i, i === e.length - 1);
                    else {
                        var f = void 0;
                        for(var m in e)e.hasOwnProperty(m) && (f && n28(f, i - 1), f = m, i++);
                        f && n28(f, i - 1, !0);
                    }
                }
                return 0 === i && (s = a15(this)), s;
            }), e66.registerHelper("if", function(e, t) {
                return g(e) && (e = e.call(this)), !t.hash.includeZero && !e || l.isEmpty(e) ? t.inverse(this) : t.fn(this);
            }), e66.registerHelper("unless", function(t, n) {
                return e66.helpers["if"].call(this, t, {
                    fn: n.inverse,
                    inverse: n.fn,
                    hash: n.hash
                });
            }), e66.registerHelper("with", function(e, t) {
                g(e) && (e = e.call(this));
                var n = t.fn;
                if (l.isEmpty(e)) return t.inverse(this);
                if (t.data && t.ids) {
                    var r = o(t.data);
                    r.contextPath = l.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                        data: r
                    };
                }
                return n(e, t);
            }), e66.registerHelper("log", function(t, n) {
                var r = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                e66.log(r, t);
            }), e66.registerHelper("lookup", function(e, t) {
                return e && e[t];
            });
        }
        function o(e) {
            var t = l.extend({}, e);
            return t._parent = e, t;
        }
        var i8 = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        };
        t44.__esModule = !0, t44.HandlebarsEnvironment = r19, t44.createFrame = o;
        var s7 = n27(10), l = i8(s7), u6 = n27(9), c = i8(u6), p4 = "3.0.1";
        t44.VERSION = p4;
        var d3 = 6;
        t44.COMPILER_REVISION = d3;
        var f3 = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1"
        };
        t44.REVISION_CHANGES = f3;
        var h = l.isArray, g = l.isFunction, m3 = l.toString, b = "[object Object]";
        r19.prototype = {
            constructor: r19,
            logger: v,
            log: y,
            registerHelper: function(e, t) {
                if (m3.call(e) === b) {
                    if (t) throw new c["default"]("Arg not supported with multiple helpers");
                    l.extend(this.helpers, e);
                } else this.helpers[e] = t;
            },
            unregisterHelper: function(e) {
                delete this.helpers[e];
            },
            registerPartial: function(e, t) {
                if (m3.call(e) === b) l.extend(this.partials, e);
                else {
                    if ("undefined" == typeof t) throw new c["default"]("Attempting to register a partial as undefined");
                    this.partials[e] = t;
                }
            },
            unregisterPartial: function(e) {
                delete this.partials[e];
            }
        };
        var v = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 1,
            log: function(e, t) {
                if ("undefined" != typeof console && v.level <= e) {
                    var n = v.methodMap[e];
                    (console[n] || console.log).call(console, t);
                }
            }
        };
        t44.logger = v;
        var y = v.log;
        t44.log = y;
    },
    function(e67, t46, n29) {
        (function(t47) {
            function r20(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function a16(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }
            var o9 = function() {
                function e68(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e68(t.prototype, n), r && e68(t, r), t;
                };
            }(), i9 = function(e, t, n) {
                for(var r = !0; r;){
                    var a = e, o = t, i = n;
                    r = !1, null === a && (a = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(a, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(i);
                    }
                    var u = Object.getPrototypeOf(a);
                    if (null === u) return;
                    e = u, t = o, n = i, r = !0, s = u = void 0;
                }
            }, s8 = n29(1), l5 = n29(2);
            n29(44);
            var u7 = function(e69) {
                function n30() {
                    r20(this, n30), i9(Object.getPrototypeOf(n30.prototype), "constructor", this).apply(this, arguments);
                }
                return a16(n30, e69), o9(n30, [
                    {
                        key: "getTitle",
                        value: function() {
                            return "Screen Reader Wand";
                        }
                    },
                    {
                        key: "getDescription",
                        value: function() {
                            return "Hover over elements to view them as a screen reader would";
                        }
                    },
                    {
                        key: "run",
                        value: function() {
                            this.summary(" "), this.panel.render(), s8(document).on("mousemove.wand", function(e) {
                                var n = document.elementFromPoint(e.clientX, e.clientY), r = axs.properties.findTextAlternatives(n, {});
                                s8(".tota11y-outlined").removeClass("tota11y-outlined"), s8(n).addClass("tota11y-outlined"), r ? s8(".tota11y-info-section.active").text(r) : s8(".tota11y-info-section.active").html(t47("i", {
                                    className: "tota11y-nothingness"
                                }, "No text visible to a screen reader"));
                            });
                        }
                    },
                    {
                        key: "cleanup",
                        value: function() {
                            s8(".tota11y-outlined").removeClass("tota11y-outlined"), s8(document).off("mousemove.wand");
                        }
                    }
                ]), n30;
            }(l5);
            e67.exports = u7;
        }).call(t46, n29(4));
    },
    function(e70, t48, n31) {
        (function(t49) {
            function r21(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function a17(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }
            var o10 = function() {
                function e71(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e71(t.prototype, n), r && e71(t, r), t;
                };
            }(), i10 = function(e, t, n) {
                for(var r = !0; r;){
                    var a = e, o = t, i = n;
                    r = !1, null === a && (a = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(a, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(i);
                    }
                    var u = Object.getPrototypeOf(a);
                    if (null === u) return;
                    e = u, t = o, n = i, r = !0, s = u = void 0;
                }
            }, s9 = n31(1), l6 = n31(2), u8 = n31(3)("alt-text"), c = n31(11), p = function(e72) {
                function n32() {
                    r21(this, n32), i10(Object.getPrototypeOf(n32.prototype), "constructor", this).apply(this, arguments);
                }
                return a17(n32, e72), o10(n32, [
                    {
                        key: "getTitle",
                        value: function() {
                            return "Image alt-text";
                        }
                    },
                    {
                        key: "getDescription",
                        value: function() {
                            return "Annotates images without alt text";
                        }
                    },
                    {
                        key: "reportError",
                        value: function(e) {
                            var n = s9(e), r = n.attr("src") || "..", a = "Image is missing alt text", o = t49("div", null, t49("p", null, 'This image does not have an associated "alt" attribute. Please specify the alt text for this image like so:'), t49("pre", null, t49("code", null, '&lt;img src="' + r + '" alt="Image description"&gt')), t49("p", null, 'If the image is decorative and does not convey any information to the surrounding content, however, you may leave this "alt" attribute empty, or specify a "role" attribute with a value of "presentation."'), t49("pre", null, t49("code", null, '&lt;img src="' + r + '" alt=""&gt;', t49("br", null), '&lt;img src="' + r + '" role="presentation"&gt;'))), i = this.error(a, o, n);
                            u8.errorLabel(n, "", a, i);
                        }
                    },
                    {
                        key: "run",
                        value: function() {
                            var e = c("imagesWithoutAltText"), t50 = e.result, n = e.elements;
                            "FAIL" === t50 && n.forEach(this.reportError.bind(this)), s9('img[role="presentation"], img[alt=""]').each(function(e, t) {
                                u8.errorLabel(s9(t), "", "This image is decorative").addClass("tota11y-label-warning");
                            });
                        }
                    },
                    {
                        key: "cleanup",
                        value: function() {
                            u8.removeAll();
                        }
                    }
                ]), n32;
            }(l6);
            e70.exports = p;
        }).call(t48, n31(4));
    },
    function(e73, t51, n33) {
        "use strict";
        function r22(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a18(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var o11 = function() {
            function e74(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e74(t.prototype, n), r && e74(t, r), t;
            };
        }(), i11 = function(e, t, n) {
            for(var r = !0; r;){
                var a = e, o = t, i = n;
                r = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(i);
                }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = o, n = i, r = !0, s = u = void 0;
            }
        }, s10 = n33(1), l7 = n33(2), u9 = n33(3)("contrast"), c4 = n33(30), p5 = n33(29);
        n33(45);
        var d4 = function(e75) {
            function t52() {
                r22(this, t52), i11(Object.getPrototypeOf(t52.prototype), "constructor", this).call(this), this.preservedColors = [];
            }
            return a18(t52, e75), o11(t52, [
                {
                    key: "getTitle",
                    value: function() {
                        return "Contrast";
                    }
                },
                {
                    key: "getDescription",
                    value: function() {
                        return "Labels elements with insufficient contrast";
                    }
                },
                {
                    key: "addError",
                    value: function(e76, t) {
                        var n = e76.style, r = e76.fgColor, a = e76.bgColor, o = e76.contrastRatio, i = e76.requiredRatio, l = axs.color.suggestColors(a, r, {
                            AA: i
                        }).AA, u = {
                            fgColorHex: axs.color.colorToString(r),
                            bgColorHex: axs.color.colorToString(a),
                            contrastRatio: o,
                            requiredRatio: i,
                            suggestedFgColorHex: l.fg,
                            suggestedBgColorHex: l.bg,
                            suggestedColorsRatio: l.contrast
                        }, d = s10(p5(u)), f = n.color, h = n.backgroundColor;
                        return d.find(".preview-contrast-fix").click(function(e) {
                            s10(e.target).prop("checked") ? (s10(t).css("color", l.fg), s10(t).css("background-color", l.bg)) : (s10(t).css("color", f), s10(t).css("background-color", h));
                        }), this.error(c4(u), d, s10(t));
                    }
                },
                {
                    key: "run",
                    value: function() {
                        var e = this, t = {};
                        s10("*").each(function(n, r) {
                            if (axs.properties.hasDirectTextDescendant(r) && !(s10(r).parents(".tota11y").length > 0 || axs.utils.elementIsTransparent(r) || axs.utils.elementHasZeroArea(r))) {
                                var a = getComputedStyle(r), o = axs.utils.getBgColor(a, r), i = axs.utils.getFgColor(a, r, o), l = axs.color.calculateContrastRatio(i, o).toFixed(2), c = axs.utils.isLargeFont(a) ? 3 : 4.5, p = axs.color.colorToString(i) + "/" + axs.color.colorToString(o) + "/" + c;
                                if (axs.utils.isLowContrast(l, a)) {
                                    if (!t[p]) {
                                        var d = e.addError({
                                            style: a,
                                            fgColor: i,
                                            bgColor: o,
                                            contrastRatio: l,
                                            requiredRatio: c
                                        }, r);
                                        e.preservedColors.push({
                                            $el: s10(r),
                                            fg: a.color,
                                            bg: a.backgroundColor
                                        }), t[p] = d;
                                    }
                                    u9.errorLabel(s10(r), l, "This contrast is insufficient at this size.", t[p]);
                                } else t[p] || (u9.label(s10(r), l).addClass("tota11y-label-success"), t[p] = !0);
                            }
                        });
                    }
                },
                {
                    key: "cleanup",
                    value: function() {
                        this.preservedColors.forEach(function(e) {
                            e.$el.css("color", e.fg), e.$el.css("background-color", e.bg);
                        }), u9.removeAll();
                    }
                }
            ]), t52;
        }(l7);
        e73.exports = d4;
    },
    function(e77, t53, n34) {
        (function(t54) {
            function r23(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function a19(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }
            var o12 = function() {
                function e78(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e78(t.prototype, n), r && e78(t, r), t;
                };
            }(), i12 = function(e, t, n) {
                for(var r = !0; r;){
                    var a = e, o = t, i = n;
                    r = !1, null === a && (a = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(a, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(i);
                    }
                    var u = Object.getPrototypeOf(a);
                    if (null === u) return;
                    e = u, t = o, n = i, r = !0, s = u = void 0;
                }
            }, s11 = n34(1), l8 = n34(2), u10 = n34(3)("headings"), c = n34(31);
            n34(46);
            var p = {
                FIRST_NOT_H1: function(e) {
                    return {
                        title: "First heading is not an &lt;h1&gt;",
                        description: "\n                <div>\n                    To give your document a proper structure for assistive\n                    technologies, it is important to lay out your headings\n                    beginning with an <code>&lt;h1&gt;</code>. We found an\n                    <code>&lt;h" + e + "&gt;</code> instead.\n                </div>\n            "
                    };
                },
                MULTIPLE_H1: {
                    title: "&lt;h1&gt; used when one is already present"
                },
                NONCONSECUTIVE_HEADER: function(e79, t) {
                    var n = function(e) {
                        return "<code>&lt;h" + e + "&gt;</code>";
                    }, r = "\n            <div>\n                This document contains an " + n(t) + " tag directly\n                following an " + n(e79) + ". In order to maintain a consistent\n                outline of the page for assistive technologies, reduce the gap in\n                the heading level by upgrading this tag to an\n                " + n(e79 + 1);
                    return 1 !== e79 && (r += " or " + n(e79)), r += ".</div>", {
                        title: "\n                Nonconsecutive heading level used (h" + e79 + " &rarr;\n                h" + t + ")\n            ",
                        description: r
                    };
                }
            }, d5 = function(e80) {
                function n35() {
                    r23(this, n35), i12(Object.getPrototypeOf(n35.prototype), "constructor", this).apply(this, arguments);
                }
                return a19(n35, e80), o12(n35, [
                    {
                        key: "getTitle",
                        value: function() {
                            return "Headings";
                        }
                    },
                    {
                        key: "getDescription",
                        value: function() {
                            return "\n            Highlights headings (&lt;h1&gt;, &lt;h2&gt;, etc) and\n            order violations\n        ";
                        }
                    },
                    {
                        key: "outline",
                        value: function(e81) {
                            var t = this, n = [], r = void 0;
                            return e81.each(function(e, a) {
                                var o = s11(a), i = +o.prop("tagName").slice(1), l = void 0;
                                0 === e && 1 !== i ? l = p.FIRST_NOT_H1(i) : r && i - r > 1 && (l = p.NONCONSECUTIVE_HEADER(r, i)), r = i;
                                var d = s11(c({
                                    level: i,
                                    text: o.text()
                                }));
                                if (n.push(d), u10.toggleHighlight(o, d), l) {
                                    var f = t.error(l.title, s11(l.description), o);
                                    u10.errorLabel(o, o.prop("tagName").toLowerCase(), l.title, f), d.find(".tota11y-heading-outline-level").addClass("tota11y-label-error");
                                } else u10.label(o).addClass("tota11y-label-success"), d.find(".tota11y-heading-outline-level").addClass("tota11y-label-success");
                            }), n;
                        }
                    },
                    {
                        key: "run",
                        value: function() {
                            var e = s11("h1, h2, h3, h4, h5, h6"), n = this.outline(e);
                            if (n.length) {
                                var r = t54("div", {
                                    className: "tota11y-heading-outline"
                                }, n);
                                this.summary(r);
                            }
                        }
                    },
                    {
                        key: "cleanup",
                        value: function() {
                            u10.removeAll();
                        }
                    }
                ]), n35;
            }(l8);
            e77.exports = d5;
        }).call(t53, n34(4));
    },
    function(e, t, n) {
        "use strict";
        var r = n(14), a = n(15), o = n(16), i = n(18), s = n(19), l = n(20), u = n(13);
        e.exports = {
            "default": [
                new o,
                new a,
                new l,
                new i,
                new r,
                new s
            ],
            experimental: [
                new u
            ]
        };
    },
    function(e82, t55, n36) {
        "use strict";
        function r24(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a20(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var o13 = function() {
            function e83(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e83(t.prototype, n), r && e83(t, r), t;
            };
        }(), i13 = function(e, t, n) {
            for(var r = !0; r;){
                var a = e, o = t, i = n;
                r = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(i);
                }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = o, n = i, r = !0, s = u = void 0;
            }
        }, s12 = n36(1), l9 = n36(2), u11 = n36(3)("labels"), c = n36(11), p = n36(32), d = function(e84) {
            function t56() {
                r24(this, t56), i13(Object.getPrototypeOf(t56.prototype), "constructor", this).apply(this, arguments);
            }
            return a20(t56, e84), o13(t56, [
                {
                    key: "getTitle",
                    value: function() {
                        return "Labels";
                    }
                },
                {
                    key: "getDescription",
                    value: function() {
                        return "Identifies inputs with missing labels";
                    }
                },
                {
                    key: "errorMessage",
                    value: function(e) {
                        return p({
                            placeholder: e.attr("placeholder"),
                            id: e.attr("id"),
                            tagName: e.prop("tagName").toLowerCase()
                        });
                    }
                },
                {
                    key: "run",
                    value: function() {
                        var e = this, t57 = c("controlsWithoutLabel"), n37 = t57.result, r25 = t57.elements;
                        "FAIL" === n37 && r25.forEach(function(t) {
                            var n = s12(t), r = "Input is missing a label", a = e.error(r, s12(e.errorMessage(n)), n);
                            u11.errorLabel(n, "", r, a);
                        });
                    }
                },
                {
                    key: "cleanup",
                    value: function() {
                        u11.removeAll();
                    }
                }
            ]), t56;
        }(l9);
        e82.exports = d;
    },
    function(e85, t58, n38) {
        "use strict";
        function r26(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a21(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var o14 = function() {
            function e86(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e86(t.prototype, n), r && e86(t, r), t;
            };
        }(), i14 = function(e, t, n) {
            for(var r = !0; r;){
                var a = e, o = t, i = n;
                r = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(i);
                }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = o, n = i, r = !0, s = u = void 0;
            }
        }, s13 = n38(1), l10 = n38(2), u12 = n38(3)("landmarks"), c = function(e) {
            function t() {
                r26(this, t), i14(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
            }
            return a21(t, e), o14(t, [
                {
                    key: "getTitle",
                    value: function() {
                        return "Landmarks";
                    }
                },
                {
                    key: "getDescription",
                    value: function() {
                        return "Labels all ARIA landmarks";
                    }
                },
                {
                    key: "run",
                    value: function() {
                        s13("[role]:not(.tota11y-toolbar,.tota11y-plugin)").each(function() {
                            u12.label(s13(this), s13(this).attr("role"));
                        });
                    }
                },
                {
                    key: "cleanup",
                    value: function() {
                        u12.removeAll();
                    }
                }
            ]), t;
        }(l10);
        e85.exports = c;
    },
    function(e87, t59, n39) {
        (function(t60) {
            function r27(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function a22(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }
            var o15 = function() {
                function e88(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e88(t.prototype, n), r && e88(t, r), t;
                };
            }(), i15 = function(e, t, n) {
                for(var r = !0; r;){
                    var a = e, o = t, i = n;
                    r = !1, null === a && (a = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(a, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(i);
                    }
                    var u = Object.getPrototypeOf(a);
                    if (null === u) return;
                    e = u, t = o, n = i, r = !0, s = u = void 0;
                }
            }, s14 = n39(1), l11 = n39(2), u13 = n39(3)("link-text"), c = function(e89) {
                function n40() {
                    r27(this, n40), i15(Object.getPrototypeOf(n40.prototype), "constructor", this).apply(this, arguments);
                }
                return a22(n40, e89), o15(n40, [
                    {
                        key: "getTitle",
                        value: function() {
                            return "Link text";
                        }
                    },
                    {
                        key: "getDescription",
                        value: function() {
                            return "\n            Identifies links that may be confusing when read by a screen\n            reader\n        ";
                        }
                    },
                    {
                        key: "isDescriptiveText",
                        value: function(e) {
                            if ("undefined" == typeof e || null === e) return !1;
                            var t = [
                                "click",
                                "tap",
                                "go",
                                "here",
                                "learn",
                                "more",
                                "this",
                                "page",
                                "link",
                                "about"
                            ], n = new RegExp("\\b(" + t.join("|") + ")\\b", "ig");
                            return e = e.replace(/[^a-zA-Z ]/g, "").replace(n, ""), "" !== e.trim();
                        }
                    },
                    {
                        key: "reportError",
                        value: function(e, t, n) {
                            var r = this.error("Link text is unclear", t, e);
                            u13.errorLabel(e, "", 'Link text "' + n + '" is unclear', r);
                        }
                    },
                    {
                        key: "run",
                        value: function() {
                            var e = this;
                            s14("a").each(function(n, r) {
                                var a = s14(r);
                                if (!a.parents(".tota11y").length && !axs.utils.isElementOrAncestorHidden(r)) {
                                    var o = {}, i = axs.properties.findTextAlternatives(r, o);
                                    if (!e.isDescriptiveText(i)) {
                                        var l = t60("div", null, "The text", " ", t60("i", null, '"', i, '"'), " ", "is unclear without context and may be confusing to screen readers. Consider rearranging the", " ", t60("code", null, "&lt;a&gt;&lt;/a&gt;"), " ", "tags or including special screen reader text.");
                                        e.reportError(a, l, i);
                                    }
                                }
                            });
                        }
                    },
                    {
                        key: "cleanup",
                        value: function() {
                            u13.removeAll();
                        }
                    }
                ]), n40;
            }(l11);
            e87.exports = c;
        }).call(t59, n39(4));
    },
    function(e90, t61, n41) {
        (function(t62) {
            function r28(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            var a23 = function() {
                function e91(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e91(t.prototype, n), r && e91(t, r), t;
                };
            }(), o16 = n41(1), i16 = n41(3)("info-panel"), s15 = n41(34);
            n41(48);
            var l12 = 10, u14 = "tota11y-collapsed", c = "tota11y-info-hidden", p6 = function() {
                function e92(t) {
                    r28(this, e92), this.plugin = t, this.about = null, this.summary = null, this.errors = [], this.$el = null;
                }
                return a23(e92, [
                    {
                        key: "setAbout",
                        value: function(e) {
                            this.about = e;
                        }
                    },
                    {
                        key: "setSummary",
                        value: function(e) {
                            this.summary = e;
                        }
                    },
                    {
                        key: "addError",
                        value: function(e, t, n) {
                            var r = {
                                title: e,
                                $description: t,
                                $el: n
                            };
                            return this.errors.push(r), r;
                        }
                    },
                    {
                        key: "_addTab",
                        value: function(e93, n) {
                            var r = this, a = t62("li", {
                                className: "tota11y-info-tab"
                            }, t62("a", {
                                className: "tota11y-info-tab-anchor",
                                href: "#"
                            }, t62("span", {
                                className: "tota11y-info-tab-anchor-text"
                            }, e93)));
                            this.$el.find(".tota11y-info-tabs").append(a);
                            var i = o16("<div>").addClass("tota11y-info-section").html(n);
                            return this.$el.find(".tota11y-info-sections").append(i), a.on("activate", function() {
                                r.$el.find(".tota11y-info-tab.active").removeClass("active"), r.$el.find(".tota11y-info-section.active").removeClass("active"), a.addClass("active"), i.addClass("active");
                            }), a.on("click", function(e) {
                                e.preventDefault(), e.stopPropagation(), a.trigger("activate");
                            }), a;
                        }
                    },
                    {
                        key: "initAndPosition",
                        value: function() {
                            var e94 = this, t63 = void 0, n = void 0;
                            this.$el.find(".tota11y-info-dismiss-trigger").click(function(t) {
                                t.preventDefault(), t.stopPropagation(), e94.$el.addClass(c), e94.plugin.$checkbox.focus();
                            }), o16("body").append(this.$el), t63 = window.innerWidth - this.$el.width() - l12, n = window.innerHeight - this.$el.height() - l12;
                            var r29 = this.$el.find(".tota11y-info-title"), a = !1, i = void 0, s = void 0, u = void 0, p = void 0;
                            r29.on("mousedown", function(e) {
                                e.preventDefault(), a = !0, i = e.pageX, s = e.pageY, u = t63, p = n;
                            }).on("mouseup", function(e) {
                                e.preventDefault(), a = !1;
                            }), o16(window).on("mousemove", function(r) {
                                if (a) {
                                    r.preventDefault();
                                    var o = r.pageX - i, l = r.pageY - s;
                                    t63 = u + o, n = p + l, e94.$el.css({
                                        left: t63,
                                        top: n
                                    });
                                }
                            }), this.$el.css({
                                left: t63,
                                top: n
                            });
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var e95 = this;
                            this.$el && this.$el.remove();
                            var n42 = !1;
                            this.$el = t62("div", {
                                className: "tota11y tota11y-info",
                                tabindex: "-1"
                            }, t62("header", {
                                className: "tota11y-info-title"
                            }, this.plugin.getTitle(), t62("span", {
                                className: "tota11y-info-controls"
                            }, t62("label", {
                                className: "tota11y-info-annotation-toggle"
                            }, "Annotate:", " ", t62("input", {
                                className: "toggle-annotation",
                                type: "checkbox",
                                checked: "checked"
                            })), t62("a", {
                                "aria-label": "Close info panel",
                                href: "#",
                                className: "tota11y-info-dismiss-trigger"
                            }, "×"))), t62("div", {
                                className: "tota11y-info-body"
                            }, t62("div", {
                                className: "tota11y-info-sections"
                            }), t62("ul", {
                                role: "tablist",
                                className: "tota11y-info-tabs"
                            })));
                            var r30 = void 0;
                            return this.about && (r30 = this._addTab("About", this.about)), this.summary && (r30 = this._addTab("Summary", this.summary)), this.$el.find(".toggle-annotation").click(function(e) {
                                o16(e.target).prop("checked") ? i16.show() : i16.hide();
                            }), this.errors.length > 0 && !function() {
                                var t64 = o16("<ul>").addClass("tota11y-info-errors"), n = void 0;
                                e95.errors.forEach(function(r, a) {
                                    var l = o16(s15(r));
                                    l.find(".tota11y-info-error-description").prepend(r.$description), t64.append(l);
                                    var p = l.find(".tota11y-info-error-trigger"), d = l.find(".tota11y-info-error-description");
                                    p.click(function(e) {
                                        e.preventDefault(), e.stopPropagation(), p.toggleClass(u14), d.toggleClass(u14);
                                    }), r.show = function() {
                                        e95.$el.removeClass(c), p.removeClass(u14), d.removeClass(u14), n.trigger("activate");
                                        var t = p.parents(".tota11y-info-section");
                                        t[0].scrollTop = p[0].offsetTop - 10;
                                    }, r.$trigger = p;
                                    var f = l.find(".tota11y-info-error-scroll");
                                    f.click(function(e) {
                                        e.preventDefault(), e.stopPropagation(), o16(document).scrollTop(r.$el.offset().top - 80);
                                    }), 0 === a && (d.toggleClass(u14), p.toggleClass(u14)), i16.toggleHighlight(r.$el, p), i16.toggleHighlight(r.$el, f);
                                    var h = r.$el[0].outerHTML;
                                    h.length > 300 && (h = h.substring(0, 300) + "...");
                                    var g = l.find(".tota11y-info-error-description-code-container code");
                                    g.text(h);
                                }), n = r30 = e95._addTab("Errors", t64);
                                var a24 = o16("<div>").addClass("tota11y-info-error-count").text(e95.errors.length);
                                r30.find(".tota11y-info-tab-anchor").append(a24);
                            }(), r30 && (r30.trigger("activate"), n42 = !0), n42 && this.initAndPosition(), this.$el.focus(), this.$el;
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            this.about = null, this.summary = null, this.errors = [], this.$el && (this.$el.remove(), this.$el = null), i16.removeAll();
                        }
                    }
                ]), e92;
            }();
            e90.exports = p6;
        }).call(t61, n41(4));
    },
    function(e, t, n) {
        t = e.exports = n(5)(), t.push([
            e.id,
            ".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y,.tota11y *{border:none!important;background-color:inherit!important;box-sizing:border-box!important;color:#f2f2f2!important;font-family:Arial!important;font-size:14px!important;font-style:normal!important;font-weight:400!important;line-height:1.35!important;margin:0!important;padding:0!important;text-align:left!important;text-shadow:none!important}.tota11y p,.tota11y pre{margin:0 0 10px!important}.tota11y *{height:auto!important;width:auto!important}.tota11y-toolbar-logo,.tota11y-toolbar-logo svg{height:25px!important}.tota11y strong{font-weight:700!important}.tota11y code,.tota11y pre{background-color:#ddd!important;border:none!important;border-radius:0!important;color:inherit!important;font-family:monospace!important;font-size:inherit!important;line-height:inherit!important}.tota11y pre{padding:5px 10px!important;overflow-x:scroll!important}.tota11y code{border-radius:2px!important;display:inline!important;padding:1px!important}.tota11y em,.tota11y i{font-style:italic!important}.tota11y a,.tota11y a:focus,.tota11y a:hover{background-color:inherit!important;color:inherit!important;text-decoration:none!important}.tota11y-toolbar{background-color:#333!important;color:#f2f2f2!important;position:fixed!important;top:auto!important;right:auto!important;bottom:0!important;left:10px!important;border-top-left-radius:5px!important;border-top-right-radius:5px!important;overflow:hidden!important;z-index:9998!important}.tota11y-toolbar-toggle{background-color:#333!important;display:block!important;padding:7px!important;width:100%!important}.tota11y-toolbar-logo{margin:0 auto!important;text-align:center!important;width:35px!important}.tota11y-toolbar-body{display:none!important}.tota11y-toolbar.tota11y-expanded .tota11y-toolbar-body{display:block!important}.tota11y-sr-only{border:0!important;clip:rect(0,0,0,0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important}",
            ""
        ]);
    },
    function(e, t, n) {
        t = e.exports = n(5)(), t.push([
            e.id,
            ".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-outlined{outline:#7882c8 solid 2px!important}.tota11y-nothingness{color:#888!important}",
            ""
        ]);
    },
    function(e, t, n) {
        t = e.exports = n(5)(), t.push([
            e.id,
            ".tota11y-swatches{margin-left:5px!important;margin-right:5px!important;position:relative!important;top:1px!important}.tota11y-swatch{border:1px solid #000!important;display:inline-block!important;height:12px!important;width:12px!important}.tota11y-contrast-suggestion{margin:0 0 15px 15px!important}.tota11y-color-hexes{font-family:monospace!important}",
            ""
        ]);
    },
    function(e, t, n) {
        t = e.exports = n(5)(), t.push([
            e.id,
            ".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-heading-outline{color:#333!important}.tota11y-heading-outline-entry{margin-bottom:8px!important}.tota11y-heading-outline-entry.heading-level-1{margin-left:0!important}.tota11y-heading-outline-entry.heading-level-2{margin-left:20px!important}.tota11y-heading-outline-entry.heading-level-3{margin-left:40px!important}.tota11y-heading-outline-entry.heading-level-4{margin-left:60px!important}.tota11y-heading-outline-entry.heading-level-5{margin-left:80px!important}.tota11y-heading-outline-entry.heading-level-6{margin-left:100px!important}.tota11y-heading-outline-level{position:relative!important;top:-2px!important;right:auto!important;bottom:auto!important;left:auto!important;margin-right:5px!important;padding:2px 3px!important;pointer-events:none!important}",
            ""
        ]);
    },
    function(e, t, n) {
        t = e.exports = n(5)(), t.push([
            e.id,
            ".tota11y-label-help,.tota11y-label-text{float:left!important}.tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-label{background-color:#ffe800!important;border:1px solid rgba(0,0,0,.1)!important;cursor:default!important;padding:3px!important;position:absolute!important;z-index:9997!important}.tota11y-label-error{background-color:#ffaeae!important}.tota11y-label-error-icon{display:block!important;float:left!important;margin-right:3px!important;width:12px!important}.tota11y-label-success{background-color:#b9eda9!important}.tota11y-label-warning{background-color:#ffe800!important}.tota11y-label,.tota11y-label-detail,.tota11y-label-help,.tota11y-label-link,.tota11y-label-text{color:#333!important;font-size:12px!important}.tota11y-label-detail{clear:both!important;display:none!important;max-width:300px!important}.tota11y-label:hover .tota11y-label-detail{display:block!important}.tota11y-label-help{margin-left:5px!important}.tota11y-label-link:focus,.tota11y-label-link:hover{opacity:.6!important;text-decoration:underline!important}.tota11y-highlight{background-color:rgba(120,130,200,.4)!important;pointer-events:none!important;position:absolute!important;z-index:9999!important}",
            ""
        ]);
    },
    function(e, t, n) {
        t = e.exports = n(5)(), t.push([
            e.id,
            ".tota11y-dark-color-scheme,.tota11y-info{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-info{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;border-radius:5px!important;position:fixed!important;z-index:9998!important}.tota11y-info-section,.tota11y-info-section *,.tota11y-info-tab.active .tota11y-info-tab-anchor-text{color:#333!important}.tota11y-info-controls{float:right!important}.tota11y-info-annotation-toggle{float:left!important;margin-right:10px!important}.tota11y-info-hidden{display:none!important}.tota11y-info-dismiss-trigger{font-size:25px!important;line-height:25px!important;position:relative!important;top:-2px!important}.tota11y-info-section,.tota11y-info-tab-anchor{top:0!important;right:0!important;bottom:0!important;left:0!important}.tota11y-info-body,.tota11y-info-title{padding:10px 10px 0!important}.tota11y-info-title:hover{cursor:move!important}.tota11y-info-tabs{display:-webkit-box!important;display:flex!important;margin:0!important;padding:0 0 10px!important}.tota11y-info-tab{height:30px!important;list-style:none!important;position:relative!important;text-align:center!important;width:100%!important;-webkit-box-flex:1!important;flex-grow:1!important}.tota11y-info-tab-anchor{position:absolute!important;text-align:center!important}.tota11y-info-tab-anchor-text{line-height:30px!important}.tota11y-info-tab:hover{background-color:#555!important}.tota11y-info-section,.tota11y-info-tab.active,.tota11y-info-tab.active:hover{background-color:#f2f2f2!important}.tota11y-info-sections{position:relative!important;height:270px!important;width:400px!important}.tota11y-info-section{position:absolute!important;display:none!important;overflow-y:scroll!important;padding:10px!important}.tota11y-info-error-trigger,.tota11y-info-section.active{display:block!important}.tota11y-info-errors{margin:0!important;padding:0!important}.tota11y-info-error{list-style:none!important;margin-bottom:10px!important}.tota11y-info-error-trigger.trigger-highlight{background-color:rgba(120,130,200,.4)!important}.tota11y-info-error-chevron{display:inline-block!important;font-size:20px!important;height:14px!important;line-height:14px!important;margin-right:3px!important;-webkit-transform:rotateZ(90deg)!important;transform:rotateZ(90deg)!important;-webkit-transform-origin:3px 8px!important;transform-origin:3px 8px!important;-webkit-transition:-webkit-transform ease-in-out 50ms!important;transition:transform ease-in-out 50ms!important}.tota11y-info-error-trigger.tota11y-collapsed .tota11y-info-error-chevron{-webkit-transform:rotateZ(0)!important;transform:rotateZ(0)!important}.tota11y-info-error-title{font-weight:700!important}.tota11y-info-error-scroll{float:right!important;margin-top:3px!important;padding-left:5px!important}.tota11y-info-error-scroll-glyph{border-color:#333!important}.tota11y-info-error-scroll:hover .tota11y-info-error-scroll-glyph{border-color:#999!important}.tota11y-info-error-scroll-lens{border:1px solid!important;border-radius:50%!important;height:8px!important;width:8px!important}.tota11y-info-error-scroll-handle{border-left:1px solid!important;height:7px!important;-webkit-transform:translateX(-2px) translateY(-2px) rotate(45deg)!important;transform:translateX(-2px) translateY(-2px) rotate(45deg)!important;width:1px!important}.tota11y-info-error-description{font-size:13px!important;padding:10px 0 0!important;-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important}.tota11y-info-error-description-code-container{margin-top:10px!important}.tota11y-info-error-description-code-container code{display:block!important;margin-top:10px!important;padding:5px 10px!important;word-wrap:break-word!important}.tota11y-info-error-description.tota11y-collapsed{display:none!important}.tota11y-info-error-count{background-color:red!important;border-radius:20px!important;color:#fff!important;display:inline!important;margin-left:5px!important;padding:1px 8px!important}",
            ""
        ]);
    },
    function(e, t, n) {
        t = e.exports = n(5)(), t.push([
            e.id,
            ".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-plugin{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;border-bottom:1px solid #555!important;list-style:none!important}.tota11y-plugin-switch{-webkit-box-align:center!important;align-items:center!important;cursor:pointer!important;display:-webkit-box!important;display:flex!important;padding:12px 12px 12px 0!important;margin:0!important}.tota11y-plugin-indicator{margin:0 15px!important;border-radius:16px!important;border:1px solid #999!important;color:transparent!important;font-size:13px!important;height:16px!important;line-height:16px!important;padding:0 0 0 1px!important;width:16px!important}.tota11y-plugin-checkbox:focus+.tota11y-plugin-indicator{border-color:#639b24!important;background-color:#49721a!important;color:#49721a!important}.tota11y-plugin-checkbox:checked+.tota11y-plugin-indicator{background-color:#639b24!important;border-color:#639b24!important;color:#fff!important}.tota11y-plugin-title{font-weight:700!important}.tota11y-plugin-description{font-size:11px!important;font-style:italic!important;width:200px!important;margin-right:3px!important}.tota11y-plugins-separator{font-size:12px!important;margin:7px 15px 0!important;text-transform:uppercase!important}",
            ""
        ]);
    },
    function(e96, t65, n) {
        var r31 = n(6);
        e96.exports = (r31["default"] || r31).template({
            compiler: [
                6,
                ">= 2.0.0-beta.1"
            ],
            main: function(e, t, n, r) {
                var a, o = t.helperMissing, i = "function", s = this.escapeExpression;
                return '<div>\n    <p>\n        The color combination\n        <span class="tota11y-color-hexes">' + s((a = null != (a = t.fgColorHex || (null != e ? e.fgColorHex : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "fgColorHex",
                    hash: {},
                    data: r
                }) : a)) + "/" + s((a = null != (a = t.bgColorHex || (null != e ? e.bgColorHex : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "bgColorHex",
                    hash: {},
                    data: r
                }) : a)) + "</span>\n        has a contrast ratio of <strong>" + s((a = null != (a = t.contrastRatio || (null != e ? e.contrastRatio : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "contrastRatio",
                    hash: {},
                    data: r
                }) : a)) + "</strong>, which is not\n        sufficient. At this size, you will need a ratio of at least\n        <strong>" + s((a = null != (a = t.requiredRatio || (null != e ? e.requiredRatio : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "requiredRatio",
                    hash: {},
                    data: r
                }) : a)) + '</strong>.\n    </p>\n\n    <p>\n        Consider using the following foreground/background combination:\n    </p>\n\n    <div class="tota11y-contrast-suggestion">\n        <span class="tota11y-color-hexes">\n            ' + s((a = null != (a = t.suggestedFgColorHex || (null != e ? e.suggestedFgColorHex : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "suggestedFgColorHex",
                    hash: {},
                    data: r
                }) : a)) + "/" + s((a = null != (a = t.suggestedBgColorHex || (null != e ? e.suggestedBgColorHex : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "suggestedBgColorHex",
                    hash: {},
                    data: r
                }) : a)) + '\n        </span>\n\n        <span class="tota11y-swatches">\n            <span\n                class="tota11y-swatch"\n                style="background-color: ' + s((a = null != (a = t.suggestedFgColorHex || (null != e ? e.suggestedFgColorHex : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "suggestedFgColorHex",
                    hash: {},
                    data: r
                }) : a)) + ' !important">\n            </span>\n            /\n            <span\n                class="tota11y-swatch"\n                style="background-color: ' + s((a = null != (a = t.suggestedBgColorHex || (null != e ? e.suggestedBgColorHex : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "suggestedBgColorHex",
                    hash: {},
                    data: r
                }) : a)) + ' !important">\n            </span>\n        </span>\n\n        has a ratio of <strong>' + s((a = null != (a = t.suggestedColorsRatio || (null != e ? e.suggestedColorsRatio : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "suggestedColorsRatio",
                    hash: {},
                    data: r
                }) : a)) + '</strong>\n        <br />\n\n        <label>\n            Preview:\n            <input class="preview-contrast-fix" type="checkbox">\n        </label>\n    </div>\n</div>\n';
            },
            useData: !0
        });
    },
    function(e97, t66, n) {
        var r32 = n(6);
        e97.exports = (r32["default"] || r32).template({
            compiler: [
                6,
                ">= 2.0.0-beta.1"
            ],
            main: function(e, t, n, r) {
                var a, o = t.helperMissing, i = "function", s = this.escapeExpression;
                return "Insufficient contrast ratio (" + s((a = null != (a = t.contrastRatio || (null != e ? e.contrastRatio : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "contrastRatio",
                    hash: {},
                    data: r
                }) : a)) + " &lt; " + s((a = null != (a = t.requiredRatio || (null != e ? e.requiredRatio : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "requiredRatio",
                    hash: {},
                    data: r
                }) : a)) + ')\n\n<span class="tota11y-swatches">\n    <span class="tota11y-swatch" style="background-color: ' + s((a = null != (a = t.fgColorHex || (null != e ? e.fgColorHex : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "fgColorHex",
                    hash: {},
                    data: r
                }) : a)) + ' !important"></span>\n    /\n    <span class="tota11y-swatch" style="background-color: ' + s((a = null != (a = t.bgColorHex || (null != e ? e.bgColorHex : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "bgColorHex",
                    hash: {},
                    data: r
                }) : a)) + ' !important"></span>\n</span>\n';
            },
            useData: !0
        });
    },
    function(e98, t67, n) {
        var r33 = n(6);
        e98.exports = (r33["default"] || r33).template({
            compiler: [
                6,
                ">= 2.0.0-beta.1"
            ],
            main: function(e, t, n, r) {
                var a, o = t.helperMissing, i = "function", s = this.escapeExpression;
                return '<div class="tota11y-heading-outline-entry heading-level-' + s((a = null != (a = t.level || (null != e ? e.level : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "level",
                    hash: {},
                    data: r
                }) : a)) + '">\n    <span class="tota11y-heading-outline-level tota11y-label">' + s((a = null != (a = t.level || (null != e ? e.level : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "level",
                    hash: {},
                    data: r
                }) : a)) + '</span>\n    <span class="tota11y-heading-outline-heading-text">' + s((a = null != (a = t.text || (null != e ? e.text : e)) ? a : o, typeof a === i ? a.call(e, {
                    name: "text",
                    hash: {},
                    data: r
                }) : a)) + "</span>\n</div>\n";
            },
            useData: !0
        });
    },
    function(e99, t68, n) {
        var r34 = n(6);
        e99.exports = (r34["default"] || r34).template({
            1: function(e, t, n, r) {
                return "    <p>\n        The <code>placeholder</code> attribute is not guaranteed to be read by\n        assistive technologies. It is better to include a proper label.\n    </p>\n";
            },
            3: function(e, t, n, r) {
                var a;
                return '    <p>\n        The simplest way to do so is by creating a <code>&lt;label&gt;</code>\n        tag with a <code>for</code> attribute like so:\n    </p>\n\n    <pre><code>&lt;label for="' + this.escapeExpression((a = null != (a = t.id || (null != e ? e.id : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "id",
                    hash: {},
                    data: r
                }) : a)) + '"&gt;\n    Label text here...\n&lt;/label&gt;</code></pre>\n';
            },
            5: function(e, t, n, r) {
                var a;
                return '    <p>\n        You can give this element an <code>id</code> attribute and build a\n        <code>&lt;label&gt;</code> with a corresponding <code>for</code>\n        attribute like so:\n\n        <pre><code>&lt;label for="my-input"&gt;\n    Label text here...\n&lt;/label&gt;\n&lt;' + this.escapeExpression((a = null != (a = t.tagName || (null != e ? e.tagName : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, {
                    name: "tagName",
                    hash: {},
                    data: r
                }) : a)) + ' id="my-input"&gt;</code></pre>\n    </p>\n';
            },
            compiler: [
                6,
                ">= 2.0.0-beta.1"
            ],
            main: function(e, t, n, r) {
                var a;
                return (null != (a = t["if"].call(e, null != e ? e.placeholder : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r, 0),
                    inverse: this.noop,
                    data: r
                })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != e ? e.id : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(3, r, 0),
                    inverse: this.program(5, r, 0),
                    data: r
                })) ? a : "");
            },
            useData: !0
        });
    },
    function(e100, t69, n) {
        var r35 = n(6);
        e100.exports = (r35["default"] || r35).template({
            1: function(e, t, n, r) {
                return '        <div class="tota11y-label-help">\n            (<a class="tota11y-label-link" href="#">?</a>)\n        </div>\n';
            },
            compiler: [
                6,
                ">= 2.0.0-beta.1"
            ],
            main: function(e, t, n, r) {
                var a, o, i = t.helperMissing, s = "function";
                return '<span class="tota11y-label-error-icon">\n    <!--\n        "Warning" icon by Lorena Salagre\n        https://thenounproject.com/lorens/\n\n        Licensed under Creative Commons by 3.0 US\n        http://creativecommons.org/licenses/by/3.0/us/legalcode\n    -->\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n        <path d="M80.515,90.781H19.485c-6.145,0-10.779-2.168-13.052-6.103c-2.273-3.938-1.832-9.036,1.24-14.356l30.515-52.851  c3.07-5.321,7.266-8.251,11.811-8.251s8.741,2.93,11.811,8.251l30.515,52.851c3.072,5.32,3.513,10.418,1.24,14.356  C91.293,88.613,86.659,90.781,80.515,90.781z M50,12.384c-3.367,0-6.59,2.369-9.071,6.669L10.415,71.904  c-2.483,4.3-2.924,8.275-1.24,11.191c1.683,2.916,5.345,4.521,10.311,4.521h61.029c4.966,0,8.628-1.605,10.311-4.521  c1.683-2.916,1.243-6.89-1.24-11.191L59.071,19.053C56.59,14.753,53.367,12.384,50,12.384z M56.227,72.18  c0-3.172-2.572-5.744-5.744-5.744s-5.744,2.572-5.744,5.744c0,3.172,2.572,5.744,5.744,5.744S56.227,75.352,56.227,72.18z   M56.382,37.613c0-3.257-2.641-5.898-5.898-5.898c-3.257,0-5.898,2.641-5.898,5.898l1.393,20.932h0.019  c0.202,2.312,2.121,4.132,4.486,4.132c2.187,0,4.012-1.551,4.434-3.613c0.034-0.167,0.037-0.345,0.052-0.518h0.04L56.382,37.613z"/>\n    </svg>\n</span>\n\n<span class="tota11y-label-content">\n    <div class="tota11y-label-text">' + (null != (o = null != (o = t.text || (null != e ? e.text : e)) ? o : i, a = typeof o === s ? o.call(e, {
                    name: "text",
                    hash: {},
                    data: r
                }) : o) ? a : "") + "</div>\n" + (null != (a = t["if"].call(e, null != e ? e.hasErrorEntry : e, {
                    name: "if",
                    hash: {},
                    fn: this.program(1, r, 0),
                    inverse: this.noop,
                    data: r
                })) ? a : "") + '    <div class="tota11y-label-detail">' + (null != (o = null != (o = t.detail || (null != e ? e.detail : e)) ? o : i, a = typeof o === s ? o.call(e, {
                    name: "detail",
                    hash: {},
                    data: r
                }) : o) ? a : "") + "</div>\n</span>\n";
            },
            useData: !0
        });
    },
    function(e101, t70, n) {
        var r36 = n(6);
        e101.exports = (r36["default"] || r36).template({
            compiler: [
                6,
                ">= 2.0.0-beta.1"
            ],
            main: function(e, t, n, r) {
                var a, o;
                return '<li class="tota11y-info-error">\n    <a aria-label="Scroll to error" href="#" class="tota11y-info-error-scroll">\n        <div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-lens"></div>\n        <div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-handle"></div>\n    </a>\n    <a href="#" class="tota11y-info-error-trigger tota11y-collapsed">\n        <div class="tota11y-info-error-title">\n            <span class="tota11y-info-error-chevron">\n                &#8250;\n            </span>\n            ' + (null != (o = null != (o = t.title || (null != e ? e.title : e)) ? o : t.helperMissing, a = "function" == typeof o ? o.call(e, {
                    name: "title",
                    hash: {},
                    data: r
                }) : o) ? a : "") + '\n        </div>\n    </a>\n    <div class="tota11y-info-error-description tota11y-collapsed">\n        <div class="tota11y-info-error-description-code-container">\n            <em>Relevant code:</em>\n            <code></code>\n        </div>\n    </div>\n</li>\n';
            },
            useData: !0
        });
    },
    function(e, t, n) {
        var r = n(6);
        e.exports = (r["default"] || r).template({
            compiler: [
                6,
                ">= 2.0.0-beta.1"
            ],
            main: function(e, t, n, r) {
                return '<!--\n    "Glasses" icon by Kyle Scott\n    https://thenounproject.com/Kyle/\n\n    Licensed under Creative Commons by 3.0 US\n    http://creativecommons.org/licenses/by/3.0/us/legalcode\n-->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n    <path fill="#ffffff" d="M74.466,35.24c-1.069-0.19-2.208-0.267-3.228-0.562c-0.639-0.184-1.348-0.622-1.965-1.075  c-1.246-0.919-2.479-1.557-3.928-2.152c-0.671-0.276-1.617-0.698-2.432-0.608c-0.582,0.064-1.196,0.664-1.73,1.029  c-1.196,0.818-2.186,1.442-3.32,2.198c-0.524,0.35-1.308,0.798-1.543,1.263c-0.142,0.279-0.13,0.736-0.281,1.029  c-0.35,0.679-1.069,1.434-1.777,1.403c-0.835-0.038-1.773-1.518-1.449-2.619c0.177-0.602,1.126-0.902,1.776-1.262  c2.041-1.134,3.803-2.3,5.52-3.602c1.106-0.841,2.579-1.471,4.536-1.542c1.889-0.071,4.45-0.083,6.22,0  c1.465,0.066,2.698,0.164,3.976,0.42c7.308,1.469,14.698,2.788,21.607,4.77c0.739,0.213,2.896,0.613,3.086,1.311  c0.121,0.439-0.236,1.435-0.375,2.151c-0.165,0.865-0.292,1.626-0.42,2.246c-0.12,0.574-0.65,1.174-0.936,1.776  c-0.842,1.778-1.379,3.821-2.104,5.753c-0.954,2.545-2.02,4.859-3.554,6.968c-1.46,2.005-3.442,3.33-5.987,4.536  c-1.128,0.534-2.43,1.083-3.835,1.403c-1.355,0.311-3.263,0.63-4.817,0.28c-2.233-0.501-3.081-2.543-3.882-4.536  c-0.848-2.115-1.351-4.049-1.636-6.827c-2.692,0.176-3.259,2.014-4.163,3.928c-0.384,0.812-0.792,1.623-1.168,2.385  c-1.542,3.115-3.197,6.47-5.473,8.746c-1.215,1.213-2.581,2.03-4.35,2.758c-3.331,1.373-6.847,2.569-10.757,3.462  c-3.598,0.821-8.923,1.642-12.252-0.093c-2.136-1.113-3.105-3.939-4.023-6.268c-0.458-1.159-0.835-2.459-1.262-3.882  c-0.378-1.259-0.708-2.778-1.543-3.602c-1.053-1.037-2.78-1.414-3.227-2.993c-0.815-0.307-1.563-0.821-2.292-1.308  c-4.349-2.915-8.693-5.774-13.141-8.606c-0.727-0.462-1.667-0.958-2.151-1.497c-0.712-0.792-1.108-2.117-1.684-3.133  c-0.265-0.469-0.588-0.92-0.888-1.357c-0.275-0.4-0.536-0.997-1.076-1.076C2.223,36.823,2.365,37.469,2.349,38  c-0.017,0.549-0.077,1.172-0.047,1.823c0.028,0.606,0.297,1.049,0.28,1.544c-0.018,0.515-0.291,1.036-0.841,1.029  c-0.727-0.009-0.8-0.98-0.983-1.686c-0.209-0.807-0.483-1.551-0.421-2.245c0.049-0.531,0.341-1.223,0.468-2.057  c0.246-1.599,0.126-3.078,1.451-3.415C3.004,32.804,4,33.38,4.781,33.649c0.789,0.272,1.597,0.428,2.339,0.702  c0.854,0.316,1.706,0.875,2.524,1.355c2.526,1.484,4.626,3.112,7.062,4.63c3.273,2.041,6.545,3.955,9.307,6.267  c7.434-2.179,16.722-3.566,25.863-4.302c4.176-0.337,8.326-0.174,12.253,0.374c5.624,0.787,10.073-1.58,13.844-3.18  c2.035-0.864,4.078-1.653,6.173-2.573C80.804,36.331,77.705,35.814,74.466,35.24z M93.968,39.729  c-1.838-0.388-3.732-0.737-5.471-1.075c-0.059-0.012-0.127-0.067-0.188-0.046c-1.143,0.392-2.279,0.613-3.367,1.029  c-2.033,0.773-4.015,1.775-5.752,3.039C78.33,43.3,77.372,44,76.897,44.733c-1.609,2.489-1.206,7.214-0.467,10.149  c0.27,1.071,0.411,1.79,0.889,2.666c3.022,1.287,6.88-0.183,8.885-1.684c1.526-1.142,2.676-2.75,3.602-4.35  C91.815,48.042,93.102,43.946,93.968,39.729z M64.878,46.089c-6.121-1.937-14.865-0.822-21.232,0.467  c-4.477,0.907-9.474,1.92-10.944,5.753c-0.801,2.086-1.009,5.098-0.701,7.903c0.284,2.599,1.076,4.892,2.011,6.594  c2.943,2.698,10.038,1.581,14.124,0.375c2.523-0.745,4.112-1.389,5.845-2.197c1.973-0.921,4.636-1.939,5.285-4.116  c0.179-0.597,0.115-1.244,0.188-1.824c0.492-3.909,1.942-7.447,4.303-9.634c0.477-0.441,1.146-0.679,1.357-1.262  C65.37,47.428,65.13,46.709,64.878,46.089z"/>\n</svg>\n';
            },
            useData: !0
        });
    },
    function(e102, t71, n) {
        "use strict";
        function r() {
            var e = new i.HandlebarsEnvironment;
            return d.extend(e, i), e.SafeString = l["default"], e.Exception = c["default"], e.Utils = d, e.escapeExpression = d.escapeExpression, e.VM = h, e.template = function(t) {
                return h.template(t, e);
            }, e;
        }
        var a = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        };
        t71.__esModule = !0;
        var o = n(12), i = a(o), s = n(39), l = a(s), u = n(9), c = a(u), p = n(10), d = a(p), f = n(38), h = a(f), g = n(37), m = a(g), b = r();
        b.create = r, m["default"](b), b["default"] = b, t71["default"] = b, e102.exports = t71["default"];
    },
    function(e103, t72) {
        (function(n) {
            t72.__esModule = !0, t72["default"] = function(e) {
                var t = "undefined" != typeof n ? n : window, r = t.Handlebars;
                e.noConflict = function() {
                    t.Handlebars === e && (t.Handlebars = r);
                };
            }, e103.exports = t72["default"];
        }).call(t72, function() {
            return this;
        }());
    },
    function(e104, t73, n43) {
        "use strict";
        function r37(e) {
            var t = e && e[0] || 1, n = g.COMPILER_REVISION;
            if (t !== n) {
                if (n > t) {
                    var r = g.REVISION_CHANGES[n], a = g.REVISION_CHANGES[t];
                    throw new h["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + a + ").");
                }
                throw new h["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").");
            }
        }
        function a25(e105, t74) {
            function n44(n, r, a) {
                a.hash && (r = d.extend({}, r, a.hash)), n = t74.VM.resolvePartial.call(this, n, r, a);
                var o = t74.VM.invokePartial.call(this, n, r, a);
                if (null == o && t74.compile && (a.partials[a.name] = t74.compile(n, e105.compilerOptions, t74), o = a.partials[a.name](r, a)), null != o) {
                    if (a.indent) {
                        for(var i = o.split("\n"), s = 0, l = i.length; l > s && (i[s] || s + 1 !== l); s++)i[s] = a.indent + i[s];
                        o = i.join("\n");
                    }
                    return o;
                }
                throw new h["default"]("The partial " + a.name + " could not be compiled when running in runtime-only mode");
            }
            function r38(t) {
                var n = void 0 === arguments[1] ? {} : arguments[1], o = n.data;
                r38._setup(n), !n.partial && e105.useData && (o = u(t, o));
                var i = void 0, s = e105.useBlockParams ? [] : void 0;
                return e105.useDepths && (i = n.depths ? [
                    t
                ].concat(n.depths) : [
                    t
                ]), e105.main.call(a26, t, a26.helpers, a26.partials, o, s, i);
            }
            if (!t74) throw new h["default"]("No environment passed to template");
            if (!e105 || !e105.main) throw new h["default"]("Unknown template object: " + typeof e105);
            t74.VM.checkRevision(e105.compiler);
            var a26 = {
                strict: function(e, t) {
                    if (!(t in e)) throw new h["default"]('"' + t + '" not defined in ' + e);
                    return e[t];
                },
                lookup: function(e, t) {
                    for(var n = e.length, r = 0; n > r; r++)if (e[r] && null != e[r][t]) return e[r][t];
                },
                lambda: function(e, t) {
                    return "function" == typeof e ? e.call(t) : e;
                },
                escapeExpression: d.escapeExpression,
                invokePartial: n44,
                fn: function(t) {
                    return e105[t];
                },
                programs: [],
                program: function(e, t, n, r, a) {
                    var i = this.programs[e], s = this.fn(e);
                    return t || a || r || n ? i = o17(this, e, s, t, n, r, a) : i || (i = this.programs[e] = o17(this, e, s)), i;
                },
                data: function(e, t) {
                    for(; e && t--;)e = e._parent;
                    return e;
                },
                merge: function(e, t) {
                    var n = e || t;
                    return e && t && e !== t && (n = d.extend({}, t, e)), n;
                },
                noop: t74.VM.noop,
                compilerInfo: e105.compiler
            };
            return r38.isTop = !0, r38._setup = function(n) {
                n.partial ? (a26.helpers = n.helpers, a26.partials = n.partials) : (a26.helpers = a26.merge(n.helpers, t74.helpers), e105.usePartial && (a26.partials = a26.merge(n.partials, t74.partials)));
            }, r38._child = function(t, n, r, i) {
                if (e105.useBlockParams && !r) throw new h["default"]("must pass block params");
                if (e105.useDepths && !i) throw new h["default"]("must pass parent depths");
                return o17(a26, t, e105[t], n, 0, r, i);
            }, r38;
        }
        function o17(e, t75, n, r, a27, o, i) {
            function s(t) {
                var a = void 0 === arguments[1] ? {} : arguments[1];
                return n.call(e, t, e.helpers, e.partials, a.data || r, o && [
                    a.blockParams
                ].concat(o), i && [
                    t
                ].concat(i));
            }
            return s.program = t75, s.depth = i ? i.length : 0, s.blockParams = a27 || 0, s;
        }
        function i17(e, t, n) {
            return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = n.partials[n.name], e;
        }
        function s16(e, t, n) {
            if (n.partial = !0, void 0 === e) throw new h["default"]("The partial " + n.name + " could not be found");
            return e instanceof Function ? e(t, n) : void 0;
        }
        function l13() {
            return "";
        }
        function u(e, t) {
            return t && "root" in t || (t = t ? g.createFrame(t) : {}, t.root = e), t;
        }
        var c = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        };
        t73.__esModule = !0, t73.checkRevision = r37, t73.template = a25, t73.wrapProgram = o17, t73.resolvePartial = i17, t73.invokePartial = s16, t73.noop = l13;
        var p = n43(10), d = c(p), f = n43(9), h = c(f), g = n43(12);
    },
    function(e106, t) {
        "use strict";
        function n(e) {
            this.string = e;
        }
        t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
            return "" + this.string;
        }, t["default"] = n, e106.exports = t["default"];
    },
    function(e, t) {
        e.exports = '/*\n * Copyright 2015 Google Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * Generated from http://github.com/GoogleChrome/accessibility-developer-tools/tree/952a710bc74ae546473b239e32b76cb3946c6fad\n *\n * See project README for build steps.\n */\n\n// AUTO-GENERATED CONTENT BELOW: DO NOT EDIT! See above for details.\n\nvar fn = (function() {\n  var COMPILED = !0, goog = goog || {};\ngoog.global = this;\ngoog.isDef = function(a) {\n  return void 0 !== a;\n};\ngoog.exportPath_ = function(a, b, c) {\n  a = a.split(".");\n  c = c || goog.global;\n  a[0] in c || !c.execScript || c.execScript("var " + a[0]);\n  for (var d;a.length && (d = a.shift());) {\n    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};\n  }\n};\ngoog.define = function(a, b) {\n  var c = b;\n  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));\n  goog.exportPath_(a, c);\n};\ngoog.DEBUG = !0;\ngoog.LOCALE = "en";\ngoog.TRUSTED_SITE = !0;\ngoog.STRICT_MODE_COMPATIBLE = !1;\ngoog.provide = function(a) {\n  if (!COMPILED) {\n    if (goog.isProvided_(a)) {\n      throw Error(\'Namespace "\' + a + \'" already declared.\');\n    }\n    delete goog.implicitNamespaces_[a];\n    for (var b = a;(b = b.substring(0, b.lastIndexOf("."))) && !goog.getObjectByName(b);) {\n      goog.implicitNamespaces_[b] = !0;\n    }\n  }\n  goog.exportPath_(a);\n};\ngoog.setTestOnly = function(a) {\n  if (COMPILED && !goog.DEBUG) {\n    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");\n  }\n};\ngoog.forwardDeclare = function(a) {\n};\nCOMPILED || (goog.isProvided_ = function(a) {\n  return !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));\n}, goog.implicitNamespaces_ = {});\ngoog.getObjectByName = function(a, b) {\n  for (var c = a.split("."), d = b || goog.global, e;e = c.shift();) {\n    if (goog.isDefAndNotNull(d[e])) {\n      d = d[e];\n    } else {\n      return null;\n    }\n  }\n  return d;\n};\ngoog.globalize = function(a, b) {\n  var c = b || goog.global, d;\n  for (d in a) {\n    c[d] = a[d];\n  }\n};\ngoog.addDependency = function(a, b, c) {\n  if (goog.DEPENDENCIES_ENABLED) {\n    var d;\n    a = a.replace(/\\\\/g, "/");\n    for (var e = goog.dependencies_, f = 0;d = b[f];f++) {\n      e.nameToPath[d] = a, a in e.pathToNames || (e.pathToNames[a] = {}), e.pathToNames[a][d] = !0;\n    }\n    for (d = 0;b = c[d];d++) {\n      a in e.requires || (e.requires[a] = {}), e.requires[a][b] = !0;\n    }\n  }\n};\ngoog.ENABLE_DEBUG_LOADER = !0;\ngoog.require = function(a) {\n  if (!COMPILED && !goog.isProvided_(a)) {\n    if (goog.ENABLE_DEBUG_LOADER) {\n      var b = goog.getPathFromDeps_(a);\n      if (b) {\n        goog.included_[b] = !0;\n        goog.writeScripts_();\n        return;\n      }\n    }\n    a = "goog.require could not find: " + a;\n    goog.global.console && goog.global.console.error(a);\n    throw Error(a);\n  }\n};\ngoog.basePath = "";\ngoog.nullFunction = function() {\n};\ngoog.identityFunction = function(a, b) {\n  return a;\n};\ngoog.abstractMethod = function() {\n  throw Error("unimplemented abstract method");\n};\ngoog.addSingletonGetter = function(a) {\n  a.getInstance = function() {\n    if (a.instance_) {\n      return a.instance_;\n    }\n    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);\n    return a.instance_ = new a;\n  };\n};\ngoog.instantiatedSingletons_ = [];\ngoog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;\ngoog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {\n  var a = goog.global.document;\n  return "undefined" != typeof a && "write" in a;\n}, goog.findBasePath_ = function() {\n  if (goog.global.CLOSURE_BASE_PATH) {\n    goog.basePath = goog.global.CLOSURE_BASE_PATH;\n  } else {\n    if (goog.inHtmlDocument_()) {\n      for (var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1;0 <= b;--b) {\n        var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;\n        if ("base.js" == c.substr(d - 7, 7)) {\n          goog.basePath = c.substr(0, d - 7);\n          break;\n        }\n      }\n    }\n  }\n}, goog.importScript_ = function(a) {\n  var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;\n  !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = !0);\n}, goog.writeScriptTag_ = function(a) {\n  if (goog.inHtmlDocument_()) {\n    var b = goog.global.document;\n    if ("complete" == b.readyState) {\n      if (/\\bdeps.js$/.test(a)) {\n        return !1;\n      }\n      throw Error(\'Cannot write "\' + a + \'" after document load\');\n    }\n    b.write(\'<script type="text/javascript" src="\' + a + \'">\\x3c/script>\');\n    return !0;\n  }\n  return !1;\n}, goog.writeScripts_ = function() {\n  function a(e) {\n    if (!(e in d.written)) {\n      if (!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {\n        for (var g in d.requires[e]) {\n          if (!goog.isProvided_(g)) {\n            if (g in d.nameToPath) {\n              a(d.nameToPath[g]);\n            } else {\n              throw Error("Undefined nameToPath for " + g);\n            }\n          }\n        }\n      }\n      e in c || (c[e] = !0, b.push(e));\n    }\n  }\n  var b = [], c = {}, d = goog.dependencies_, e;\n  for (e in goog.included_) {\n    d.written[e] || a(e);\n  }\n  for (e = 0;e < b.length;e++) {\n    if (b[e]) {\n      goog.importScript_(goog.basePath + b[e]);\n    } else {\n      throw Error("Undefined script input");\n    }\n  }\n}, goog.getPathFromDeps_ = function(a) {\n  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;\n}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));\ngoog.typeOf = function(a) {\n  var b = typeof a;\n  if ("object" == b) {\n    if (a) {\n      if (a instanceof Array) {\n        return "array";\n      }\n      if (a instanceof Object) {\n        return b;\n      }\n      var c = Object.prototype.toString.call(a);\n      if ("[object Window]" == c) {\n        return "object";\n      }\n      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {\n        return "array";\n      }\n      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {\n        return "function";\n      }\n    } else {\n      return "null";\n    }\n  } else {\n    if ("function" == b && "undefined" == typeof a.call) {\n      return "object";\n    }\n  }\n  return b;\n};\ngoog.isNull = function(a) {\n  return null === a;\n};\ngoog.isDefAndNotNull = function(a) {\n  return null != a;\n};\ngoog.isArray = function(a) {\n  return "array" == goog.typeOf(a);\n};\ngoog.isArrayLike = function(a) {\n  var b = goog.typeOf(a);\n  return "array" == b || "object" == b && "number" == typeof a.length;\n};\ngoog.isDateLike = function(a) {\n  return goog.isObject(a) && "function" == typeof a.getFullYear;\n};\ngoog.isString = function(a) {\n  return "string" == typeof a;\n};\ngoog.isBoolean = function(a) {\n  return "boolean" == typeof a;\n};\ngoog.isNumber = function(a) {\n  return "number" == typeof a;\n};\ngoog.isFunction = function(a) {\n  return "function" == goog.typeOf(a);\n};\ngoog.isObject = function(a) {\n  var b = typeof a;\n  return "object" == b && null != a || "function" == b;\n};\ngoog.getUid = function(a) {\n  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);\n};\ngoog.hasUid = function(a) {\n  return !!a[goog.UID_PROPERTY_];\n};\ngoog.removeUid = function(a) {\n  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);\n  try {\n    delete a[goog.UID_PROPERTY_];\n  } catch (b) {\n  }\n};\ngoog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);\ngoog.uidCounter_ = 0;\ngoog.getHashCode = goog.getUid;\ngoog.removeHashCode = goog.removeUid;\ngoog.cloneObject = function(a) {\n  var b = goog.typeOf(a);\n  if ("object" == b || "array" == b) {\n    if (a.clone) {\n      return a.clone();\n    }\n    var b = "array" == b ? [] : {}, c;\n    for (c in a) {\n      b[c] = goog.cloneObject(a[c]);\n    }\n    return b;\n  }\n  return a;\n};\ngoog.bindNative_ = function(a, b, c) {\n  return a.call.apply(a.bind, arguments);\n};\ngoog.bindJs_ = function(a, b, c) {\n  if (!a) {\n    throw Error();\n  }\n  if (2 < arguments.length) {\n    var d = Array.prototype.slice.call(arguments, 2);\n    return function() {\n      var c = Array.prototype.slice.call(arguments);\n      Array.prototype.unshift.apply(c, d);\n      return a.apply(b, c);\n    };\n  }\n  return function() {\n    return a.apply(b, arguments);\n  };\n};\ngoog.bind = function(a, b, c) {\n  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;\n  return goog.bind.apply(null, arguments);\n};\ngoog.partial = function(a, b) {\n  var c = Array.prototype.slice.call(arguments, 1);\n  return function() {\n    var b = c.slice();\n    b.push.apply(b, arguments);\n    return a.apply(this, b);\n  };\n};\ngoog.mixin = function(a, b) {\n  for (var c in b) {\n    a[c] = b[c];\n  }\n};\ngoog.now = goog.TRUSTED_SITE && Date.now || function() {\n  return +new Date;\n};\ngoog.globalEval = function(a) {\n  if (goog.global.execScript) {\n    goog.global.execScript(a, "JavaScript");\n  } else {\n    if (goog.global.eval) {\n      if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) {\n        goog.global.eval(a);\n      } else {\n        var b = goog.global.document, c = b.createElement("script");\n        c.type = "text/javascript";\n        c.defer = !1;\n        c.appendChild(b.createTextNode(a));\n        b.body.appendChild(c);\n        b.body.removeChild(c);\n      }\n    } else {\n      throw Error("goog.globalEval not available");\n    }\n  }\n};\ngoog.evalWorksForGlobals_ = null;\ngoog.getCssName = function(a, b) {\n  var c = function(a) {\n    return goog.cssNameMapping_[a] || a;\n  }, d = function(a) {\n    a = a.split("-");\n    for (var b = [], d = 0;d < a.length;d++) {\n      b.push(c(a[d]));\n    }\n    return b.join("-");\n  }, d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {\n    return a;\n  };\n  return b ? a + "-" + d(b) : d(a);\n};\ngoog.setCssNameMapping = function(a, b) {\n  goog.cssNameMapping_ = a;\n  goog.cssNameMappingStyle_ = b;\n};\n!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);\ngoog.getMsg = function(a, b) {\n  var c = b || {}, d;\n  for (d in c) {\n    var e = ("" + c[d]).replace(/\\$/g, "$$$$");\n    a = a.replace(new RegExp("\\\\{\\\\$" + d + "\\\\}", "gi"), e);\n  }\n  return a;\n};\ngoog.getMsgWithFallback = function(a, b) {\n  return a;\n};\ngoog.exportSymbol = function(a, b, c) {\n  goog.exportPath_(a, b, c);\n};\ngoog.exportProperty = function(a, b, c) {\n  a[b] = c;\n};\ngoog.inherits = function(a, b) {\n  function c() {\n  }\n  c.prototype = b.prototype;\n  a.superClass_ = b.prototype;\n  a.prototype = new c;\n  a.prototype.constructor = a;\n  a.base = function(a, c, f) {\n    var g = Array.prototype.slice.call(arguments, 2);\n    return b.prototype[c].apply(a, g);\n  };\n};\ngoog.base = function(a, b, c) {\n  var d = arguments.callee.caller;\n  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {\n    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");\n  }\n  if (d.superClass_) {\n    return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));\n  }\n  for (var e = Array.prototype.slice.call(arguments, 2), f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {\n    if (g.prototype[b] === d) {\n      f = !0;\n    } else {\n      if (f) {\n        return g.prototype[b].apply(a, e);\n      }\n    }\n  }\n  if (a[b] === d) {\n    return a.constructor.prototype[b].apply(a, e);\n  }\n  throw Error("goog.base called from a method of one name to a method of a different name");\n};\ngoog.scope = function(a) {\n  a.call(goog.global);\n};\nvar axs = {};\naxs.browserUtils = {};\naxs.browserUtils.matchSelector = function(a, b) {\n  return a.matches ? a.matches(b) : a.webkitMatchesSelector ? a.webkitMatchesSelector(b) : a.mozMatchesSelector ? a.mozMatchesSelector(b) : a.msMatchesSelector ? a.msMatchesSelector(b) : !1;\n};\naxs.constants = {};\naxs.constants.ARIA_ROLES = {alert:{namefrom:["author"], parent:["region"]}, alertdialog:{namefrom:["author"], namerequired:!0, parent:["alert", "dialog"]}, application:{namefrom:["author"], namerequired:!0, parent:["landmark"]}, article:{namefrom:["author"], parent:["document", "region"]}, banner:{namefrom:["author"], parent:["landmark"]}, button:{childpresentational:!0, namefrom:["contents", "author"], namerequired:!0, parent:["command"], properties:["aria-expanded", "aria-pressed"]}, checkbox:{namefrom:["contents", \n"author"], namerequired:!0, parent:["input"], requiredProperties:["aria-checked"], properties:["aria-checked"]}, columnheader:{namefrom:["contents", "author"], namerequired:!0, parent:["gridcell", "sectionhead", "widget"], properties:["aria-sort"], scope:["row"]}, combobox:{mustcontain:["listbox", "textbox"], namefrom:["author"], namerequired:!0, parent:["select"], requiredProperties:["aria-expanded"], properties:["aria-expanded", "aria-autocomplete", "aria-required"]}, command:{"abstract":!0, namefrom:["author"], \nparent:["widget"]}, complementary:{namefrom:["author"], parent:["landmark"]}, composite:{"abstract":!0, childpresentational:!1, namefrom:["author"], parent:["widget"], properties:["aria-activedescendant"]}, contentinfo:{namefrom:["author"], parent:["landmark"]}, definition:{namefrom:["author"], parent:["section"]}, dialog:{namefrom:["author"], namerequired:!0, parent:["window"]}, directory:{namefrom:["contents", "author"], parent:["list"]}, document:{namefrom:[" author"], namerequired:!0, parent:["structure"], \nproperties:["aria-expanded"]}, form:{namefrom:["author"], parent:["landmark"]}, grid:{mustcontain:["row", "rowgroup"], namefrom:["author"], namerequired:!0, parent:["composite", "region"], properties:["aria-level", "aria-multiselectable", "aria-readonly"]}, gridcell:{namefrom:["contents", "author"], namerequired:!0, parent:["section", "widget"], properties:["aria-readonly", "aria-required", "aria-selected"], scope:["row"]}, group:{namefrom:[" author"], parent:["section"], properties:["aria-activedescendant"]}, \nheading:{namerequired:!0, parent:["sectionhead"], properties:["aria-level"]}, img:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["section"]}, input:{"abstract":!0, namefrom:["author"], parent:["widget"]}, landmark:{"abstract":!0, namefrom:["contents", "author"], namerequired:!1, parent:["region"]}, link:{namefrom:["contents", "author"], namerequired:!0, parent:["command"], properties:["aria-expanded"]}, list:{mustcontain:["group", "listitem"], namefrom:["author"], parent:["region"]}, \nlistbox:{mustcontain:["option"], namefrom:["author"], namerequired:!0, parent:["list", "select"], properties:["aria-multiselectable", "aria-required"]}, listitem:{namefrom:["contents", "author"], namerequired:!0, parent:["section"], properties:["aria-level", "aria-posinset", "aria-setsize"], scope:["list"]}, log:{namefrom:[" author"], namerequired:!0, parent:["region"]}, main:{namefrom:["author"], parent:["landmark"]}, marquee:{namerequired:!0, parent:["section"]}, math:{childpresentational:!0, namefrom:["author"], \nparent:["section"]}, menu:{mustcontain:["group", "menuitemradio", "menuitem", "menuitemcheckbox"], namefrom:["author"], namerequired:!0, parent:["list", "select"]}, menubar:{namefrom:["author"], parent:["menu"]}, menuitem:{namefrom:["contents", "author"], namerequired:!0, parent:["command"], scope:["menu", "menubar"]}, menuitemcheckbox:{namefrom:["contents", "author"], namerequired:!0, parent:["checkbox", "menuitem"], scope:["menu", "menubar"]}, menuitemradio:{namefrom:["contents", "author"], namerequired:!0, \nparent:["menuitemcheckbox", "radio"], scope:["menu", "menubar"]}, navigation:{namefrom:["author"], parent:["landmark"]}, note:{namefrom:["author"], parent:["section"]}, option:{namefrom:["contents", "author"], namerequired:!0, parent:["input"], properties:["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"]}, presentation:{parent:["structure"]}, progressbar:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["range"]}, radio:{namefrom:["contents", "author"], namerequired:!0, \nparent:["checkbox", "option"]}, radiogroup:{mustcontain:["radio"], namefrom:["author"], namerequired:!0, parent:["select"], properties:["aria-required"]}, range:{"abstract":!0, namefrom:["author"], parent:["widget"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]}, region:{namefrom:[" author"], parent:["section"]}, roletype:{"abstract":!0, properties:"aria-atomic aria-busy aria-controls aria-describedby aria-disabled aria-dropeffect aria-flowto aria-grabbed aria-haspopup aria-hidden aria-invalid aria-label aria-labelledby aria-live aria-owns aria-relevant".split(" ")}, \nrow:{mustcontain:["columnheader", "gridcell", "rowheader"], namefrom:["contents", "author"], parent:["group", "widget"], properties:["aria-level", "aria-selected"], scope:["grid", "rowgroup", "treegrid"]}, rowgroup:{mustcontain:["row"], namefrom:["contents", "author"], parent:["group"], scope:["grid"]}, rowheader:{namefrom:["contents", "author"], namerequired:!0, parent:["gridcell", "sectionhead", "widget"], properties:["aria-sort"], scope:["row"]}, search:{namefrom:["author"], parent:["landmark"]}, \nsection:{"abstract":!0, namefrom:["contents", "author"], parent:["structure"], properties:["aria-expanded"]}, sectionhead:{"abstract":!0, namefrom:["contents", "author"], parent:["structure"], properties:["aria-expanded"]}, select:{"abstract":!0, namefrom:["author"], parent:["composite", "group", "input"]}, separator:{childpresentational:!0, namefrom:["author"], parent:["structure"], properties:["aria-expanded", "aria-orientation"]}, scrollbar:{childpresentational:!0, namefrom:["author"], namerequired:!1, \nparent:["input", "range"], requiredProperties:["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"]}, slider:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["input", "range"], requiredProperties:["aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-orientation"]}, spinbutton:{namefrom:["author"], \nnamerequired:!0, parent:["input", "range"], requiredProperties:["aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-required"]}, status:{parent:["region"]}, structure:{"abstract":!0, parent:["roletype"]}, tab:{namefrom:["contents", "author"], parent:["sectionhead", "widget"], properties:["aria-selected"], scope:["tablist"]}, tablist:{mustcontain:["tab"], namefrom:["author"], parent:["composite", "directory"], properties:["aria-level"]}, \ntabpanel:{namefrom:["author"], namerequired:!0, parent:["region"]}, textbox:{namefrom:["author"], namerequired:!0, parent:["input"], properties:["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required"]}, timer:{namefrom:["author"], namerequired:!0, parent:["status"]}, toolbar:{namefrom:["author"], parent:["group"]}, tooltip:{namerequired:!0, parent:["section"]}, tree:{mustcontain:["group", "treeitem"], namefrom:["author"], namerequired:!0, parent:["select"], \nproperties:["aria-multiselectable", "aria-required"]}, treegrid:{mustcontain:["row"], namefrom:["author"], namerequired:!0, parent:["grid", "tree"]}, treeitem:{namefrom:["contents", "author"], namerequired:!0, parent:["listitem", "option"], scope:["group", "tree"]}, widget:{"abstract":!0, parent:["roletype"]}, window:{"abstract":!0, namefrom:[" author"], parent:["roletype"], properties:["aria-expanded"]}};\naxs.constants.WIDGET_ROLES = {};\naxs.constants.addAllParentRolesToSet_ = function(a, b) {\n  if (a.parent) {\n    for (var c = a.parent, d = 0;d < c.length;d++) {\n      var e = c[d];\n      b[e] = !0;\n      axs.constants.addAllParentRolesToSet_(axs.constants.ARIA_ROLES[e], b);\n    }\n  }\n};\naxs.constants.addAllPropertiesToSet_ = function(a, b, c) {\n  var d = a[b];\n  if (d) {\n    for (var e = 0;e < d.length;e++) {\n      c[d[e]] = !0;\n    }\n  }\n  if (a.parent) {\n    for (a = a.parent, d = 0;d < a.length;d++) {\n      axs.constants.addAllPropertiesToSet_(axs.constants.ARIA_ROLES[a[d]], b, c);\n    }\n  }\n};\nfor (var roleName in axs.constants.ARIA_ROLES) {\n  var role = axs.constants.ARIA_ROLES[roleName], propertiesSet = {};\n  axs.constants.addAllPropertiesToSet_(role, "properties", propertiesSet);\n  role.propertiesSet = propertiesSet;\n  var requiredPropertiesSet = {};\n  axs.constants.addAllPropertiesToSet_(role, "requiredProperties", requiredPropertiesSet);\n  role.requiredPropertiesSet = requiredPropertiesSet;\n  var parentRolesSet = {};\n  axs.constants.addAllParentRolesToSet_(role, parentRolesSet);\n  role.allParentRolesSet = parentRolesSet;\n  "widget" in parentRolesSet && (axs.constants.WIDGET_ROLES[roleName] = role);\n}\naxs.constants.ARIA_PROPERTIES = {activedescendant:{type:"property", valueType:"idref"}, atomic:{defaultValue:"false", type:"property", valueType:"boolean"}, autocomplete:{defaultValue:"none", type:"property", valueType:"token", values:["inline", "list", "both", "none"]}, busy:{defaultValue:"false", type:"state", valueType:"boolean"}, checked:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "mixed", "undefined"]}, controls:{type:"property", valueType:"idref_list"}, \ndescribedby:{type:"property", valueType:"idref_list"}, disabled:{defaultValue:"false", type:"state", valueType:"boolean"}, dropeffect:{defaultValue:"none", type:"property", valueType:"token_list", values:"copy move link execute popup none".split(" ")}, expanded:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "undefined"]}, flowto:{type:"property", valueType:"idref_list"}, grabbed:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", \n"undefined"]}, haspopup:{defaultValue:"false", type:"property", valueType:"boolean"}, hidden:{defaultValue:"false", type:"state", valueType:"boolean"}, invalid:{defaultValue:"false", type:"state", valueType:"token", values:["grammar", "false", "spelling", "true"]}, label:{type:"property", valueType:"string"}, labelledby:{type:"property", valueType:"idref_list"}, level:{type:"property", valueType:"integer"}, live:{defaultValue:"off", type:"property", valueType:"token", values:["off", "polite", "assertive"]}, \nmultiline:{defaultValue:"false", type:"property", valueType:"boolean"}, multiselectable:{defaultValue:"false", type:"property", valueType:"boolean"}, orientation:{defaultValue:"vertical", type:"property", valueType:"token", values:["horizontal", "vertical"]}, owns:{type:"property", valueType:"idref_list"}, posinset:{type:"property", valueType:"integer"}, pressed:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "mixed", "undefined"]}, readonly:{defaultValue:"false", \ntype:"property", valueType:"boolean"}, relevant:{defaultValue:"additions text", type:"property", valueType:"token_list", values:["additions", "removals", "text", "all"]}, required:{defaultValue:"false", type:"property", valueType:"boolean"}, selected:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "undefined"]}, setsize:{type:"property", valueType:"integer"}, sort:{defaultValue:"none", type:"property", valueType:"token", values:["ascending", "descending", "none", \n"other"]}, valuemax:{type:"property", valueType:"decimal"}, valuemin:{type:"property", valueType:"decimal"}, valuenow:{type:"property", valueType:"decimal"}, valuetext:{type:"property", valueType:"string"}};\n(function() {\n  for (var a in axs.constants.ARIA_PROPERTIES) {\n    var b = axs.constants.ARIA_PROPERTIES[a];\n    if (b.values) {\n      for (var c = {}, d = 0;d < b.values.length;d++) {\n        c[b.values[d]] = !0;\n      }\n      b.valuesSet = c;\n    }\n  }\n})();\naxs.constants.GLOBAL_PROPERTIES = axs.constants.ARIA_ROLES.roletype.propertiesSet;\naxs.constants.NO_ROLE_NAME = " ";\naxs.constants.WIDGET_ROLE_TO_NAME = {alert:"aria_role_alert", alertdialog:"aria_role_alertdialog", button:"aria_role_button", checkbox:"aria_role_checkbox", columnheader:"aria_role_columnheader", combobox:"aria_role_combobox", dialog:"aria_role_dialog", grid:"aria_role_grid", gridcell:"aria_role_gridcell", link:"aria_role_link", listbox:"aria_role_listbox", log:"aria_role_log", marquee:"aria_role_marquee", menu:"aria_role_menu", menubar:"aria_role_menubar", menuitem:"aria_role_menuitem", menuitemcheckbox:"aria_role_menuitemcheckbox", \nmenuitemradio:"aria_role_menuitemradio", option:axs.constants.NO_ROLE_NAME, progressbar:"aria_role_progressbar", radio:"aria_role_radio", radiogroup:"aria_role_radiogroup", rowheader:"aria_role_rowheader", scrollbar:"aria_role_scrollbar", slider:"aria_role_slider", spinbutton:"aria_role_spinbutton", status:"aria_role_status", tab:"aria_role_tab", tabpanel:"aria_role_tabpanel", textbox:"aria_role_textbox", timer:"aria_role_timer", toolbar:"aria_role_toolbar", tooltip:"aria_role_tooltip", treeitem:"aria_role_treeitem"};\naxs.constants.STRUCTURE_ROLE_TO_NAME = {article:"aria_role_article", application:"aria_role_application", banner:"aria_role_banner", columnheader:"aria_role_columnheader", complementary:"aria_role_complementary", contentinfo:"aria_role_contentinfo", definition:"aria_role_definition", directory:"aria_role_directory", document:"aria_role_document", form:"aria_role_form", group:"aria_role_group", heading:"aria_role_heading", img:"aria_role_img", list:"aria_role_list", listitem:"aria_role_listitem", \nmain:"aria_role_main", math:"aria_role_math", navigation:"aria_role_navigation", note:"aria_role_note", region:"aria_role_region", rowheader:"aria_role_rowheader", search:"aria_role_search", separator:"aria_role_separator"};\naxs.constants.ATTRIBUTE_VALUE_TO_STATUS = [{name:"aria-autocomplete", values:{inline:"aria_autocomplete_inline", list:"aria_autocomplete_list", both:"aria_autocomplete_both"}}, {name:"aria-checked", values:{"true":"aria_checked_true", "false":"aria_checked_false", mixed:"aria_checked_mixed"}}, {name:"aria-disabled", values:{"true":"aria_disabled_true"}}, {name:"aria-expanded", values:{"true":"aria_expanded_true", "false":"aria_expanded_false"}}, {name:"aria-invalid", values:{"true":"aria_invalid_true", \ngrammar:"aria_invalid_grammar", spelling:"aria_invalid_spelling"}}, {name:"aria-multiline", values:{"true":"aria_multiline_true"}}, {name:"aria-multiselectable", values:{"true":"aria_multiselectable_true"}}, {name:"aria-pressed", values:{"true":"aria_pressed_true", "false":"aria_pressed_false", mixed:"aria_pressed_mixed"}}, {name:"aria-readonly", values:{"true":"aria_readonly_true"}}, {name:"aria-required", values:{"true":"aria_required_true"}}, {name:"aria-selected", values:{"true":"aria_selected_true", \n"false":"aria_selected_false"}}];\naxs.constants.INPUT_TYPE_TO_INFORMATION_TABLE_MSG = {button:"input_type_button", checkbox:"input_type_checkbox", color:"input_type_color", datetime:"input_type_datetime", "datetime-local":"input_type_datetime_local", date:"input_type_date", email:"input_type_email", file:"input_type_file", image:"input_type_image", month:"input_type_month", number:"input_type_number", password:"input_type_password", radio:"input_type_radio", range:"input_type_range", reset:"input_type_reset", search:"input_type_search", \nsubmit:"input_type_submit", tel:"input_type_tel", text:"input_type_text", url:"input_type_url", week:"input_type_week"};\naxs.constants.TAG_TO_INFORMATION_TABLE_VERBOSE_MSG = {A:"tag_link", BUTTON:"tag_button", H1:"tag_h1", H2:"tag_h2", H3:"tag_h3", H4:"tag_h4", H5:"tag_h5", H6:"tag_h6", LI:"tag_li", OL:"tag_ol", SELECT:"tag_select", TEXTAREA:"tag_textarea", UL:"tag_ul", SECTION:"tag_section", NAV:"tag_nav", ARTICLE:"tag_article", ASIDE:"tag_aside", HGROUP:"tag_hgroup", HEADER:"tag_header", FOOTER:"tag_footer", TIME:"tag_time", MARK:"tag_mark"};\naxs.constants.TAG_TO_INFORMATION_TABLE_BRIEF_MSG = {BUTTON:"tag_button", SELECT:"tag_select", TEXTAREA:"tag_textarea"};\naxs.constants.MIXED_VALUES = {"true":!0, "false":!0, mixed:!0};\naxs.constants.Severity = {INFO:"Info", WARNING:"Warning", SEVERE:"Severe"};\naxs.constants.AuditResult = {PASS:"PASS", FAIL:"FAIL", NA:"NA"};\naxs.constants.InlineElements = {TT:!0, I:!0, B:!0, BIG:!0, SMALL:!0, EM:!0, STRONG:!0, DFN:!0, CODE:!0, SAMP:!0, KBD:!0, VAR:!0, CITE:!0, ABBR:!0, ACRONYM:!0, A:!0, IMG:!0, OBJECT:!0, BR:!0, SCRIPT:!0, MAP:!0, Q:!0, SUB:!0, SUP:!0, SPAN:!0, BDO:!0, INPUT:!0, SELECT:!0, TEXTAREA:!0, LABEL:!0, BUTTON:!0};\naxs.constants.NATIVELY_DISABLEABLE = {BUTTON:!0, INPUT:!0, SELECT:!0, TEXTAREA:!0, FIELDSET:!0, OPTGROUP:!0, OPTION:!0};\naxs.constants.ARIA_TO_HTML_ATTRIBUTE = {"aria-checked":"checked", "aria-disabled":"disabled", "aria-hidden":"hidden", "aria-expanded":"open", "aria-valuemax":"max", "aria-valuemin":"min", "aria-readonly":"readonly", "aria-required":"required", "aria-selected":"selected", "aria-valuenow":"value"};\naxs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO = {A:[{role:"link", allowed:"button checkbox menuitem menuitemcheckbox menuitemradio tab treeitem".split(" "), selector:"a[href]"}], ADDRESS:[{role:"", allowed:["contentinfo", "presentation"]}], AREA:[{role:"link", selector:"area[href]"}], ARTICLE:[{role:"article", allowed:["presentation", "article", "document", "application", "main"]}], ASIDE:[{role:"complementary", allowed:["note", "complementary", "search", "presentation"]}], AUDIO:[{role:"", allowed:["application", \n"presentation"]}], BASE:[{role:"", reserved:!0}], BODY:[{role:"document", allowed:["presentation"]}], BUTTON:[{role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'button:not([aria-pressed]):not([type="menu"])\'}, {role:"button", allowed:["button"], selector:"button[aria-pressed]"}, {role:"button", attributes:{"aria-haspopup":!0}, allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'button[type="menu"]\'}], CAPTION:[{role:"", \nallowed:["presentation"]}], COL:[{role:"", reserved:!0}], COLGROUP:[{role:"", reserved:!0}], DATALIST:[{role:"listbox", attributes:{"aria-multiselectable":!1}, allowed:["presentation"]}], DEL:[{role:"", allowed:["*"]}], DD:[{role:"", allowed:["presentation"]}], DT:[{role:"", allowed:["presentation"]}], DETAILS:[{role:"group", allowed:["group", "presentation"]}], DIALOG:[{role:"dialog", allowed:"dialog alert alertdialog application log marquee status".split(" "), selector:"dialog[open]"}, {role:"dialog", \nattributes:{"aria-hidden":!0}, allowed:"dialog alert alertdialog application log marquee status".split(" "), selector:"dialog:not([open])"}], DIV:[{role:"", allowed:["*"]}], DL:[{role:"list", allowed:["presentation"]}], EMBED:[{role:"", allowed:["application", "document", "img", "presentation"]}], FIGURE:[{role:"", allowed:["*"]}], FOOTER:[{role:"", allowed:["contentinfo", "presentation"]}], FORM:[{role:"form", allowed:["presentation"]}], P:[{role:"", allowed:["*"]}], PRE:[{role:"", allowed:["*"]}], \nBLOCKQUOTE:[{role:"", allowed:["*"]}], H1:[{role:"heading"}], H2:[{role:"heading"}], H3:[{role:"heading"}], H4:[{role:"heading"}], H5:[{role:"heading"}], H6:[{role:"heading"}], HEAD:[{role:"", reserved:!0}], HEADER:[{role:"", allowed:["banner", "presentation"]}], HR:[{role:"separator", allowed:["presentation"]}], HTML:[{role:"", reserved:!0}], IFRAME:[{role:"", allowed:["application", "document", "img", "presentation"], selector:"iframe:not([seamless])"}, {role:"", allowed:["application", "document", \n"img", "presentation", "group"], selector:"iframe[seamless]"}], IMG:[{role:"presentation", reserved:!0, selector:\'img[alt=""]\'}, {role:"img", allowed:["*"], selector:\'img[alt]:not([alt=""])\'}], INPUT:[{role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'input[type="button"]:not([aria-pressed])\'}, {role:"button", allowed:["button"], selector:\'input[type="button"][aria-pressed]\'}, {role:"checkbox", allowed:["checkbox"], selector:\'input[type="checkbox"]\'}, \n{role:"", selector:\'input[type="color"]\'}, {role:"", selector:\'input[type="date"]\'}, {role:"", selector:\'input[type="datetime"]\'}, {role:"textbox", selector:\'input[type="email"]:not([list])\'}, {role:"", selector:\'input[type="file"]\'}, {role:"", reserved:!0, selector:\'input[type="hidden"]\'}, {role:"button", allowed:["button"], selector:\'input[type="image"][aria-pressed]\'}, {role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'input[type="image"]:not([aria-pressed])\'}, \n{role:"", selector:\'input[type="month"]\'}, {role:"", selector:\'input[type="number"]\'}, {role:"textbox", selector:\'input[type="password"]\'}, {role:"radio", allowed:["menuitemradio"], selector:\'input[type="radio"]\'}, {role:"slider", selector:\'input[type="range"]\'}, {role:"button", selector:\'input[type="reset"]\'}, {role:"combobox", selector:\'input[type="search"][list]\'}, {role:"textbox", selector:\'input[type="search"]:not([list])\'}, {role:"button", selector:\'input[type="submit"]\'}, {role:"combobox", \nselector:\'input[type="tel"][list]\'}, {role:"textbox", selector:\'input[type="tel"]:not([list])\'}, {role:"combobox", selector:\'input[type="text"][list]\'}, {role:"textbox", selector:\'input[type="text"]:not([list])\'}, {role:"textbox", selector:"input:not([type])"}, {role:"", selector:\'input[type="time"]\'}, {role:"combobox", selector:\'input[type="url"][list]\'}, {role:"textbox", selector:\'input[type="url"]:not([list])\'}, {role:"", selector:\'input[type="week"]\'}], INS:[{role:"", allowed:["*"]}], KEYGEN:[{role:""}], \nLABEL:[{role:"", allowed:["presentation"]}], LI:[{role:"listitem", allowed:"menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(" "), selector:\'ol:not([role="presentation"])>li, ul:not([role="presentation"])>li\'}, {role:"listitem", allowed:"listitem menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(" "), selector:\'ol[role="presentation"]>li, ul[role="presentation"]>li\'}], LINK:[{role:"link", reserved:!0, selector:"link[href]"}], MAIN:[{role:"", \nallowed:["main", "presentation"]}], MAP:[{role:"", reserved:!0}], MATH:[{role:"", allowed:["presentation"]}], MENU:[{role:"toolbar", selector:\'menu[type="toolbar"]\'}], MENUITEM:[{role:"menuitem", selector:\'menuitem[type="command"]\'}, {role:"menuitemcheckbox", selector:\'menuitem[type="checkbox"]\'}, {role:"menuitemradio", selector:\'menuitem[type="radio"]\'}], META:[{role:"", reserved:!0}], METER:[{role:"progressbar", allowed:["presentation"]}], NAV:[{role:"navigation", allowed:["navigation", "presentation"]}], \nNOSCRIPT:[{role:"", reserved:!0}], OBJECT:[{role:"", allowed:["application", "document", "img", "presentation"]}], OL:[{role:"list", allowed:"directory group listbox menu menubar tablist toolbar tree presentation".split(" ")}], OPTGROUP:[{role:"", allowed:["presentation"]}], OPTION:[{role:"option"}], OUTPUT:[{role:"status", allowed:["*"]}], PARAM:[{role:"", reserved:!0}], PICTURE:[{role:"", reserved:!0}], PROGRESS:[{role:"progressbar", allowed:["presentation"]}], SCRIPT:[{role:"", reserved:!0}], \nSECTION:[{role:"region", allowed:"alert alertdialog application contentinfo dialog document log marquee search status presentation".split(" ")}], SELECT:[{role:"listbox"}], SOURCE:[{role:"", reserved:!0}], SPAN:[{role:"", allowed:["*"]}], STYLE:[{role:"", reserved:!0}], SVG:[{role:"", allowed:["application", "document", "img", "presentation"]}], SUMMARY:[{role:"", allowed:["presentation"]}], TABLE:[{role:"", allowed:["*"]}], TEMPLATE:[{role:"", reserved:!0}], TEXTAREA:[{role:"textbox"}], TBODY:[{role:"rowgroup", \nallowed:["*"]}], THEAD:[{role:"rowgroup", allowed:["*"]}], TFOOT:[{role:"rowgroup", allowed:["*"]}], TITLE:[{role:"", reserved:!0}], TD:[{role:"", allowed:["*"]}], TH:[{role:"", allowed:["*"]}], TR:[{role:"", allowed:["*"]}], TRACK:[{role:"", reserved:!0}], UL:[{role:"list", allowed:"directory group listbox menu menubar tablist toolbar tree presentation".split(" ")}], VIDEO:[{role:"", allowed:["application", "presentation"]}]};\naxs.color = {};\naxs.color.Color = function(a, b, c, d) {\n  this.red = a;\n  this.green = b;\n  this.blue = c;\n  this.alpha = d;\n};\naxs.color.YCbCr = function(a) {\n  this.luma = this.z = a[0];\n  this.Cb = this.x = a[1];\n  this.Cr = this.y = a[2];\n};\naxs.color.YCbCr.prototype = {multiply:function(a) {\n  return new axs.color.YCbCr([this.luma * a, this.Cb * a, this.Cr * a]);\n}, add:function(a) {\n  return new axs.color.YCbCr([this.luma + a.luma, this.Cb + a.Cb, this.Cr + a.Cr]);\n}, subtract:function(a) {\n  return new axs.color.YCbCr([this.luma - a.luma, this.Cb - a.Cb, this.Cr - a.Cr]);\n}};\naxs.color.calculateContrastRatio = function(a, b) {\n  1 > a.alpha && (a = axs.color.flattenColors(a, b));\n  var c = axs.color.calculateLuminance(a), d = axs.color.calculateLuminance(b);\n  return (Math.max(c, d) + .05) / (Math.min(c, d) + .05);\n};\naxs.color.calculateLuminance = function(a) {\n  return axs.color.toYCbCr(a).luma;\n};\naxs.color.luminanceRatio = function(a, b) {\n  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);\n};\naxs.color.parseColor = function(a) {\n  if ("transparent" === a) {\n    return new axs.color.Color(0, 0, 0, 0);\n  }\n  var b = a.match(/^rgb\\((\\d+), (\\d+), (\\d+)\\)$/);\n  if (b) {\n    a = parseInt(b[1], 10);\n    var c = parseInt(b[2], 10), d = parseInt(b[3], 10);\n    return new axs.color.Color(a, c, d, 1);\n  }\n  return (b = a.match(/^rgba\\((\\d+), (\\d+), (\\d+), (\\d*(\\.\\d+)?)\\)/)) ? (a = parseInt(b[1], 10), c = parseInt(b[2], 10), d = parseInt(b[3], 10), b = parseFloat(b[4]), new axs.color.Color(a, c, d, b)) : null;\n};\naxs.color.colorChannelToString = function(a) {\n  a = Math.round(a);\n  return 15 >= a ? "0" + a.toString(16) : a.toString(16);\n};\naxs.color.colorToString = function(a) {\n  return 1 == a.alpha ? "#" + axs.color.colorChannelToString(a.red) + axs.color.colorChannelToString(a.green) + axs.color.colorChannelToString(a.blue) : "rgba(" + [a.red, a.green, a.blue, a.alpha].join() + ")";\n};\naxs.color.luminanceFromContrastRatio = function(a, b, c) {\n  return c ? (a + .05) * b - .05 : (a + .05) / b - .05;\n};\naxs.color.translateColor = function(a, b) {\n  for (var c = b > a.luma ? axs.color.WHITE_YCC : axs.color.BLACK_YCC, d = c == axs.color.WHITE_YCC ? axs.color.YCC_CUBE_FACES_WHITE : axs.color.YCC_CUBE_FACES_BLACK, e = new axs.color.YCbCr([0, a.Cb, a.Cr]), f = new axs.color.YCbCr([1, a.Cb, a.Cr]), f = {a:e, b:f}, e = null, g = 0;g < d.length && !(e = axs.color.findIntersection(f, d[g]), 0 <= e.z && 1 >= e.z);g++) {\n  }\n  if (!e) {\n    throw "Couldn\'t find intersection with YCbCr color cube for Cb=" + a.Cb + ", Cr=" + a.Cr + ".";\n  }\n  if (e.x != a.x || e.y != a.y) {\n    throw "Intersection has wrong Cb/Cr values.";\n  }\n  if (Math.abs(c.luma - e.luma) < Math.abs(c.luma - b)) {\n    return c = [b, a.Cb, a.Cr], axs.color.fromYCbCrArray(c);\n  }\n  c = (b - e.luma) / (c.luma - e.luma);\n  c = [b, e.Cb - e.Cb * c, e.Cr - e.Cr * c];\n  return axs.color.fromYCbCrArray(c);\n};\naxs.color.suggestColors = function(a, b, c) {\n  var d = {}, e = axs.color.calculateLuminance(a), f = axs.color.calculateLuminance(b), g = f > e, h = axs.color.toYCbCr(b), k = axs.color.toYCbCr(a), m;\n  for (m in c) {\n    var l = c[m], n = axs.color.luminanceFromContrastRatio(e, l + .02, g);\n    if (1 >= n && 0 <= n) {\n      var p = axs.color.translateColor(h, n), l = axs.color.calculateContrastRatio(p, a), n = {};\n      n.fg = axs.color.colorToString(p);\n      n.bg = axs.color.colorToString(a);\n      n.contrast = l.toFixed(2);\n      d[m] = n;\n    } else {\n      l = axs.color.luminanceFromContrastRatio(f, l + .02, !g), 1 >= l && 0 <= l && (p = axs.color.translateColor(k, l), l = axs.color.calculateContrastRatio(b, p), n = {}, n.bg = axs.color.colorToString(p), n.fg = axs.color.colorToString(b), n.contrast = l.toFixed(2), d[m] = n);\n    }\n  }\n  return d;\n};\naxs.color.flattenColors = function(a, b) {\n  var c = a.alpha;\n  return new axs.color.Color((1 - c) * b.red + c * a.red, (1 - c) * b.green + c * a.green, (1 - c) * b.blue + c * a.blue, a.alpha + b.alpha * (1 - a.alpha));\n};\naxs.color.multiplyMatrixVector = function(a, b) {\n  var c = b[0], d = b[1], e = b[2];\n  return [a[0][0] * c + a[0][1] * d + a[0][2] * e, a[1][0] * c + a[1][1] * d + a[1][2] * e, a[2][0] * c + a[2][1] * d + a[2][2] * e];\n};\naxs.color.toYCbCr = function(a) {\n  var b = a.red / 255, c = a.green / 255;\n  a = a.blue / 255;\n  b = .03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4);\n  c = .03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4);\n  a = .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4);\n  return new axs.color.YCbCr(axs.color.multiplyMatrixVector(axs.color.YCC_MATRIX, [b, c, a]));\n};\naxs.color.fromYCbCr = function(a) {\n  return axs.color.fromYCbCrArray([a.luma, a.Cb, a.Cr]);\n};\naxs.color.fromYCbCrArray = function(a) {\n  var b = axs.color.multiplyMatrixVector(axs.color.INVERTED_YCC_MATRIX, a), c = b[0];\n  a = b[1];\n  b = b[2];\n  c = .00303949 >= c ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055;\n  a = .00303949 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055;\n  b = .00303949 >= b ? 12.92 * b : 1.055 * Math.pow(b, 1 / 2.4) - .055;\n  c = Math.min(Math.max(Math.round(255 * c), 0), 255);\n  a = Math.min(Math.max(Math.round(255 * a), 0), 255);\n  b = Math.min(Math.max(Math.round(255 * b), 0), 255);\n  return new axs.color.Color(c, a, b, 1);\n};\naxs.color.RGBToYCbCrMatrix = function(a, b) {\n  return [[a, 1 - a - b, b], [-a / (2 - 2 * b), (a + b - 1) / (2 - 2 * b), (1 - b) / (2 - 2 * b)], [(1 - a) / (2 - 2 * a), (a + b - 1) / (2 - 2 * a), -b / (2 - 2 * a)]];\n};\naxs.color.invert3x3Matrix = function(a) {\n  var b = a[0][0], c = a[0][1], d = a[0][2], e = a[1][0], f = a[1][1], g = a[1][2], h = a[2][0], k = a[2][1];\n  a = a[2][2];\n  return axs.color.scalarMultiplyMatrix([[f * a - g * k, d * k - c * a, c * g - d * f], [g * h - e * a, b * a - d * h, d * e - b * g], [e * k - f * h, h * c - b * k, b * f - c * e]], 1 / (b * (f * a - g * k) - c * (a * e - g * h) + d * (e * k - f * h)));\n};\naxs.color.findIntersection = function(a, b) {\n  var c = [a.a.x - b.p0.x, a.a.y - b.p0.y, a.a.z - b.p0.z], d = axs.color.invert3x3Matrix([[a.a.x - a.b.x, b.p1.x - b.p0.x, b.p2.x - b.p0.x], [a.a.y - a.b.y, b.p1.y - b.p0.y, b.p2.y - b.p0.y], [a.a.z - a.b.z, b.p1.z - b.p0.z, b.p2.z - b.p0.z]]), c = axs.color.multiplyMatrixVector(d, c)[0];\n  return a.a.add(a.b.subtract(a.a).multiply(c));\n};\naxs.color.scalarMultiplyMatrix = function(a, b) {\n  for (var c = [], d = 0;3 > d;d++) {\n    c[d] = axs.color.scalarMultiplyVector(a[d], b);\n  }\n  return c;\n};\naxs.color.scalarMultiplyVector = function(a, b) {\n  for (var c = [], d = 0;d < a.length;d++) {\n    c[d] = a[d] * b;\n  }\n  return c;\n};\naxs.color.kR = .2126;\naxs.color.kB = .0722;\naxs.color.YCC_MATRIX = axs.color.RGBToYCbCrMatrix(axs.color.kR, axs.color.kB);\naxs.color.INVERTED_YCC_MATRIX = axs.color.invert3x3Matrix(axs.color.YCC_MATRIX);\naxs.color.BLACK = new axs.color.Color(0, 0, 0, 1);\naxs.color.BLACK_YCC = axs.color.toYCbCr(axs.color.BLACK);\naxs.color.WHITE = new axs.color.Color(255, 255, 255, 1);\naxs.color.WHITE_YCC = axs.color.toYCbCr(axs.color.WHITE);\naxs.color.RED = new axs.color.Color(255, 0, 0, 1);\naxs.color.RED_YCC = axs.color.toYCbCr(axs.color.RED);\naxs.color.GREEN = new axs.color.Color(0, 255, 0, 1);\naxs.color.GREEN_YCC = axs.color.toYCbCr(axs.color.GREEN);\naxs.color.BLUE = new axs.color.Color(0, 0, 255, 1);\naxs.color.BLUE_YCC = axs.color.toYCbCr(axs.color.BLUE);\naxs.color.CYAN = new axs.color.Color(0, 255, 255, 1);\naxs.color.CYAN_YCC = axs.color.toYCbCr(axs.color.CYAN);\naxs.color.MAGENTA = new axs.color.Color(255, 0, 255, 1);\naxs.color.MAGENTA_YCC = axs.color.toYCbCr(axs.color.MAGENTA);\naxs.color.YELLOW = new axs.color.Color(255, 255, 0, 1);\naxs.color.YELLOW_YCC = axs.color.toYCbCr(axs.color.YELLOW);\naxs.color.YCC_CUBE_FACES_BLACK = [{p0:axs.color.BLACK_YCC, p1:axs.color.RED_YCC, p2:axs.color.GREEN_YCC}, {p0:axs.color.BLACK_YCC, p1:axs.color.GREEN_YCC, p2:axs.color.BLUE_YCC}, {p0:axs.color.BLACK_YCC, p1:axs.color.BLUE_YCC, p2:axs.color.RED_YCC}];\naxs.color.YCC_CUBE_FACES_WHITE = [{p0:axs.color.WHITE_YCC, p1:axs.color.CYAN_YCC, p2:axs.color.MAGENTA_YCC}, {p0:axs.color.WHITE_YCC, p1:axs.color.MAGENTA_YCC, p2:axs.color.YELLOW_YCC}, {p0:axs.color.WHITE_YCC, p1:axs.color.YELLOW_YCC, p2:axs.color.CYAN_YCC}];\naxs.utils = {};\naxs.utils.FOCUSABLE_ELEMENTS_SELECTOR = "input:not([type=hidden]):not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),a[href],iframe,[tabindex]";\naxs.utils.LABELABLE_ELEMENTS_SELECTOR = "button,input:not([type=hidden]),keygen,meter,output,progress,select,textarea";\naxs.utils.parentElement = function(a) {\n  if (!a) {\n    return null;\n  }\n  if (a.nodeType == Node.DOCUMENT_FRAGMENT_NODE) {\n    return a.host;\n  }\n  var b = a.parentElement;\n  if (b) {\n    return b;\n  }\n  a = a.parentNode;\n  if (!a) {\n    return null;\n  }\n  switch(a.nodeType) {\n    case Node.ELEMENT_NODE:\n      return a;\n    case Node.DOCUMENT_FRAGMENT_NODE:\n      return a.host;\n    default:\n      return null;\n  }\n};\naxs.utils.asElement = function(a) {\n  switch(a.nodeType) {\n    case Node.COMMENT_NODE:\n      return null;\n    case Node.ELEMENT_NODE:\n      if ("script" == a.tagName.toLowerCase()) {\n        return null;\n      }\n      break;\n    case Node.TEXT_NODE:\n      a = axs.utils.parentElement(a);\n      break;\n    default:\n      return console.warn("Unhandled node type: ", a.nodeType), null;\n  }\n  return a;\n};\naxs.utils.elementIsTransparent = function(a) {\n  return "0" == a.style.opacity;\n};\naxs.utils.elementHasZeroArea = function(a) {\n  a = a.getBoundingClientRect();\n  var b = a.top - a.bottom;\n  return a.right - a.left && b ? !1 : !0;\n};\naxs.utils.elementIsOutsideScrollArea = function(a) {\n  for (var b = axs.utils.parentElement(a), c = a.ownerDocument.defaultView;b != c.document.body;) {\n    if (axs.utils.isClippedBy(a, b)) {\n      return !0;\n    }\n    if (axs.utils.canScrollTo(a, b) && !axs.utils.elementIsOutsideScrollArea(b)) {\n      return !1;\n    }\n    b = axs.utils.parentElement(b);\n  }\n  return !axs.utils.canScrollTo(a, c.document.body);\n};\naxs.utils.canScrollTo = function(a, b) {\n  var c = a.getBoundingClientRect(), d = b.getBoundingClientRect(), e = d.top, f = d.left, g = e - b.scrollTop, e = e - b.scrollTop + b.scrollHeight, h = f - b.scrollLeft + b.scrollWidth;\n  if (c.right < f - b.scrollLeft || c.bottom < g || c.left > h || c.top > e) {\n    return !1;\n  }\n  f = a.ownerDocument.defaultView;\n  g = f.getComputedStyle(b);\n  return c.left > d.right || c.top > d.bottom ? "scroll" == g.overflow || "auto" == g.overflow || b instanceof f.HTMLBodyElement : !0;\n};\naxs.utils.isClippedBy = function(a, b) {\n  var c = a.getBoundingClientRect(), d = b.getBoundingClientRect(), e = d.top - b.scrollTop, f = d.left - b.scrollLeft, g = a.ownerDocument.defaultView.getComputedStyle(b);\n  return (c.right < d.left || c.bottom < d.top || c.left > d.right || c.top > d.bottom) && "hidden" == g.overflow ? !0 : c.right < f || c.bottom < e ? "visible" != g.overflow : !1;\n};\naxs.utils.isAncestor = function(a, b) {\n  return null == b ? !1 : b === a ? !0 : axs.utils.isAncestor(a, b.parentNode);\n};\naxs.utils.overlappingElements = function(a) {\n  if (axs.utils.elementHasZeroArea(a)) {\n    return null;\n  }\n  for (var b = [], c = a.getClientRects(), d = 0;d < c.length;d++) {\n    var e = c[d], e = document.elementFromPoint((e.left + e.right) / 2, (e.top + e.bottom) / 2);\n    if (null != e && e != a && !axs.utils.isAncestor(e, a) && !axs.utils.isAncestor(a, e)) {\n      var f = window.getComputedStyle(e, null);\n      f && (f = axs.utils.getBgColor(f, e)) && 0 < f.alpha && 0 > b.indexOf(e) && b.push(e);\n    }\n  }\n  return b;\n};\naxs.utils.elementIsHtmlControl = function(a) {\n  var b = a.ownerDocument.defaultView;\n  return a instanceof b.HTMLButtonElement || a instanceof b.HTMLInputElement || a instanceof b.HTMLSelectElement || a instanceof b.HTMLTextAreaElement ? !0 : !1;\n};\naxs.utils.elementIsAriaWidget = function(a) {\n  return a.hasAttribute("role") && (a = a.getAttribute("role")) && (a = axs.constants.ARIA_ROLES[a]) && "widget" in a.allParentRolesSet ? !0 : !1;\n};\naxs.utils.elementIsVisible = function(a) {\n  return axs.utils.elementIsTransparent(a) || axs.utils.elementHasZeroArea(a) || axs.utils.elementIsOutsideScrollArea(a) || axs.utils.overlappingElements(a).length ? !1 : !0;\n};\naxs.utils.isLargeFont = function(a) {\n  var b = a.fontSize;\n  a = "bold" == a.fontWeight;\n  var c = b.match(/(\\d+)px/);\n  if (c) {\n    b = parseInt(c[1], 10);\n    if (c = window.getComputedStyle(document.body, null).fontSize.match(/(\\d+)px/)) {\n      var d = parseInt(c[1], 10), c = 1.2 * d, d = 1.5 * d\n    } else {\n      c = 19.2, d = 24;\n    }\n    return a && b >= c || b >= d;\n  }\n  if (c = b.match(/(\\d+)em/)) {\n    return b = parseInt(c[1], 10), a && 1.2 <= b || 1.5 <= b ? !0 : !1;\n  }\n  if (c = b.match(/(\\d+)%/)) {\n    return b = parseInt(c[1], 10), a && 120 <= b || 150 <= b ? !0 : !1;\n  }\n  if (c = b.match(/(\\d+)pt/)) {\n    if (b = parseInt(c[1], 10), a && 14 <= b || 18 <= b) {\n      return !0;\n    }\n  }\n  return !1;\n};\naxs.utils.getBgColor = function(a, b) {\n  var c = axs.color.parseColor(a.backgroundColor);\n  if (!c) {\n    return null;\n  }\n  1 > a.opacity && (c.alpha *= a.opacity);\n  if (1 > c.alpha) {\n    var d = axs.utils.getParentBgColor(b);\n    if (null == d) {\n      return null;\n    }\n    c = axs.color.flattenColors(c, d);\n  }\n  return c;\n};\naxs.utils.getParentBgColor = function(a) {\n  var b = a;\n  a = [];\n  for (var c = null;b = axs.utils.parentElement(b);) {\n    var d = window.getComputedStyle(b, null);\n    if (d) {\n      var e = axs.color.parseColor(d.backgroundColor);\n      if (e && (1 > d.opacity && (e.alpha *= d.opacity), 0 != e.alpha && (a.push(e), 1 == e.alpha))) {\n        c = !0;\n        break;\n      }\n    }\n  }\n  c || a.push(new axs.color.Color(255, 255, 255, 1));\n  for (b = a.pop();a.length;) {\n    c = a.pop(), b = axs.color.flattenColors(c, b);\n  }\n  return b;\n};\naxs.utils.getFgColor = function(a, b, c) {\n  var d = axs.color.parseColor(a.color);\n  if (!d) {\n    return null;\n  }\n  1 > d.alpha && (d = axs.color.flattenColors(d, c));\n  1 > a.opacity && (b = axs.utils.getParentBgColor(b), d.alpha *= a.opacity, d = axs.color.flattenColors(d, b));\n  return d;\n};\naxs.utils.getContrastRatioForElement = function(a) {\n  var b = window.getComputedStyle(a, null);\n  return axs.utils.getContrastRatioForElementWithComputedStyle(b, a);\n};\naxs.utils.getContrastRatioForElementWithComputedStyle = function(a, b) {\n  if (axs.utils.isElementHidden(b)) {\n    return null;\n  }\n  var c = axs.utils.getBgColor(a, b);\n  if (!c) {\n    return null;\n  }\n  var d = axs.utils.getFgColor(a, b, c);\n  return d ? axs.color.calculateContrastRatio(d, c) : null;\n};\naxs.utils.isNativeTextElement = function(a) {\n  var b = a.tagName.toLowerCase();\n  a = a.type ? a.type.toLowerCase() : "";\n  if ("textarea" == b) {\n    return !0;\n  }\n  if ("input" != b) {\n    return !1;\n  }\n  switch(a) {\n    case "email":\n    ;\n    case "number":\n    ;\n    case "password":\n    ;\n    case "search":\n    ;\n    case "text":\n    ;\n    case "tel":\n    ;\n    case "url":\n    ;\n    case "":\n      return !0;\n    default:\n      return !1;\n  }\n};\naxs.utils.isLowContrast = function(a, b, c) {\n  a = Math.round(10 * a) / 10;\n  return c ? 4.5 > a || !axs.utils.isLargeFont(b) && 7 > a : 3 > a || !axs.utils.isLargeFont(b) && 4.5 > a;\n};\naxs.utils.hasLabel = function(a) {\n  var b = a.tagName.toLowerCase(), c = a.type ? a.type.toLowerCase() : "";\n  if (a.hasAttribute("aria-label") || a.hasAttribute("title") || "img" == b && a.hasAttribute("alt") || "input" == b && "image" == c && a.hasAttribute("alt") || "input" == b && ("submit" == c || "reset" == c) || a.hasAttribute("aria-labelledby") || a.hasAttribute("id") && 0 < document.querySelectorAll(\'label[for="\' + a.id + \'"]\').length) {\n    return !0;\n  }\n  for (b = axs.utils.parentElement(a);b;) {\n    if ("label" == b.tagName.toLowerCase() && b.control == a) {\n      return !0;\n    }\n    b = axs.utils.parentElement(b);\n  }\n  return !1;\n};\naxs.utils.isNativelyDisableable = function(a) {\n  return a.tagName.toUpperCase() in axs.constants.NATIVELY_DISABLEABLE;\n};\naxs.utils.isElementDisabled = function(a) {\n  if (axs.browserUtils.matchSelector(a, "[aria-disabled=true], [aria-disabled=true] *")) {\n    return !0;\n  }\n  if (!axs.utils.isNativelyDisableable(a) || axs.browserUtils.matchSelector(a, "fieldset>legend:first-of-type *")) {\n    return !1;\n  }\n  for (;null !== a;a = axs.utils.parentElement(a)) {\n    if (axs.utils.isNativelyDisableable(a) && a.hasAttribute("disabled")) {\n      return !0;\n    }\n  }\n  return !1;\n};\naxs.utils.isElementHidden = function(a) {\n  if (!(a instanceof a.ownerDocument.defaultView.HTMLElement)) {\n    return !1;\n  }\n  if (a.hasAttribute("chromevoxignoreariahidden")) {\n    var b = !0\n  }\n  var c = window.getComputedStyle(a, null);\n  return "none" == c.display || "hidden" == c.visibility ? !0 : a.hasAttribute("aria-hidden") && "true" == a.getAttribute("aria-hidden").toLowerCase() ? !b : !1;\n};\naxs.utils.isElementOrAncestorHidden = function(a) {\n  return axs.utils.isElementHidden(a) ? !0 : axs.utils.parentElement(a) ? axs.utils.isElementOrAncestorHidden(axs.utils.parentElement(a)) : !1;\n};\naxs.utils.isInlineElement = function(a) {\n  a = a.tagName.toUpperCase();\n  return axs.constants.InlineElements[a];\n};\naxs.utils.getRoles = function(a, b) {\n  if (!a || a.nodeType !== Node.ELEMENT_NODE || !a.hasAttribute("role") && !b) {\n    return null;\n  }\n  var c = a.getAttribute("role");\n  !c && b && (c = axs.properties.getImplicitRole(a));\n  if (!c) {\n    return null;\n  }\n  for (var c = c.split(" "), d = {roles:[], valid:!1}, e = 0;e < c.length;e++) {\n    var f = c[e], g = axs.constants.ARIA_ROLES[f], f = {name:f};\n    g && !g.abstract ? (f.details = g, d.applied || (d.applied = f), f.valid = d.valid = !0) : f.valid = !1;\n    d.roles.push(f);\n  }\n  return d;\n};\naxs.utils.getAriaPropertyValue = function(a, b, c) {\n  var d = a.replace(/^aria-/, ""), e = axs.constants.ARIA_PROPERTIES[d], d = {name:a, rawValue:b};\n  if (!e) {\n    return d.valid = !1, d.reason = \'"\' + a + \'" is not a valid ARIA property\', d;\n  }\n  e = e.valueType;\n  if (!e) {\n    return d.valid = !1, d.reason = \'"\' + a + \'" is not a valid ARIA property\', d;\n  }\n  switch(e) {\n    case "idref":\n      a = axs.utils.isValidIDRefValue(b, c), d.valid = a.valid, d.reason = a.reason, d.idref = a.idref;\n    case "idref_list":\n      a = b.split(/\\s+/);\n      d.valid = !0;\n      for (b = 0;b < a.length;b++) {\n        e = axs.utils.isValidIDRefValue(a[b], c), e.valid || (d.valid = !1), d.values ? d.values.push(e) : d.values = [e];\n      }\n      return d;\n    case "integer":\n      c = axs.utils.isValidNumber(b);\n      if (!c.valid) {\n        return d.valid = !1, d.reason = c.reason, d;\n      }\n      Math.floor(c.value) !== c.value ? (d.valid = !1, d.reason = "" + b + " is not a whole integer") : (d.valid = !0, d.value = c.value);\n      return d;\n    case "decimal":\n    ;\n    case "number":\n      c = axs.utils.isValidNumber(b);\n      d.valid = c.valid;\n      if (!c.valid) {\n        return d.reason = c.reason, d;\n      }\n      d.value = c.value;\n      return d;\n    case "string":\n      return d.valid = !0, d.value = b, d;\n    case "token":\n      return c = axs.utils.isValidTokenValue(a, b.toLowerCase()), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n    case "token_list":\n      e = b.split(/\\s+/);\n      d.valid = !0;\n      for (b = 0;b < e.length;b++) {\n        c = axs.utils.isValidTokenValue(a, e[b].toLowerCase()), c.valid || (d.valid = !1, d.reason ? (d.reason = [d.reason], d.reason.push(c.reason)) : (d.reason = c.reason, d.possibleValues = c.possibleValues)), d.values ? d.values.push(c.value) : d.values = [c.value];\n      }\n      return d;\n    case "tristate":\n      return c = axs.utils.isPossibleValue(b.toLowerCase(), axs.constants.MIXED_VALUES, a), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n    case "boolean":\n      return c = axs.utils.isValidBoolean(b), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n  }\n  d.valid = !1;\n  d.reason = "Not a valid ARIA property";\n  return d;\n};\naxs.utils.isValidTokenValue = function(a, b) {\n  var c = a.replace(/^aria-/, "");\n  return axs.utils.isPossibleValue(b, axs.constants.ARIA_PROPERTIES[c].valuesSet, a);\n};\naxs.utils.isPossibleValue = function(a, b, c) {\n  return b[a] ? {valid:!0, value:a} : {valid:!1, value:a, reason:\'"\' + a + \'" is not a valid value for \' + c, possibleValues:Object.keys(b)};\n};\naxs.utils.isValidBoolean = function(a) {\n  try {\n    var b = JSON.parse(a);\n  } catch (c) {\n    b = "";\n  }\n  return "boolean" != typeof b ? {valid:!1, value:a, reason:\'"\' + a + \'" is not a true/false value\'} : {valid:!0, value:b};\n};\naxs.utils.isValidIDRefValue = function(a, b) {\n  return 0 == a.length ? {valid:!0, idref:a} : b.ownerDocument.getElementById(a) ? {valid:!0, idref:a} : {valid:!1, idref:a, reason:\'No element with ID "\' + a + \'"\'};\n};\naxs.utils.isValidNumber = function(a) {\n  var b = {valid:!1, value:a, reason:\'"\' + a + \'" is not a number\'};\n  if (!a) {\n    return b;\n  }\n  if (/^0x/i.test(a)) {\n    return b.reason = \'"\' + a + \'" is not a decimal number\', b;\n  }\n  a *= 1;\n  return isFinite(a) ? {valid:!0, value:a} : b;\n};\naxs.utils.isElementImplicitlyFocusable = function(a) {\n  var b = a.ownerDocument.defaultView;\n  return a instanceof b.HTMLAnchorElement || a instanceof b.HTMLAreaElement ? a.hasAttribute("href") : a instanceof b.HTMLInputElement || a instanceof b.HTMLSelectElement || a instanceof b.HTMLTextAreaElement || a instanceof b.HTMLButtonElement || a instanceof b.HTMLIFrameElement ? !a.disabled : !1;\n};\naxs.utils.values = function(a) {\n  var b = [], c;\n  for (c in a) {\n    a.hasOwnProperty(c) && "function" != typeof a[c] && b.push(a[c]);\n  }\n  return b;\n};\naxs.utils.namedValues = function(a) {\n  var b = {}, c;\n  for (c in a) {\n    a.hasOwnProperty(c) && "function" != typeof a[c] && (b[c] = a[c]);\n  }\n  return b;\n};\naxs.utils.getQuerySelectorText = function(a) {\n  if (null == a || "HTML" == a.tagName) {\n    return "html";\n  }\n  if ("BODY" == a.tagName) {\n    return "body";\n  }\n  if (a.hasAttribute) {\n    if (a.id) {\n      return "#" + a.id;\n    }\n    if (a.className) {\n      for (var b = "", c = 0;c < a.classList.length;c++) {\n        b += "." + a.classList[c];\n      }\n      var d = 0;\n      if (a.parentNode) {\n        for (c = 0;c < a.parentNode.children.length;c++) {\n          var e = a.parentNode.children[c];\n          axs.browserUtils.matchSelector(e, b) && d++;\n          if (e === a) {\n            break;\n          }\n        }\n      } else {\n        d = 1;\n      }\n      if (1 == d) {\n        return axs.utils.getQuerySelectorText(a.parentNode) + " > " + b;\n      }\n    }\n    if (a.parentNode) {\n      b = a.parentNode.children;\n      d = 1;\n      for (c = 0;b[c] !== a;) {\n        b[c].tagName == a.tagName && d++, c++;\n      }\n      c = "";\n      "BODY" != a.parentNode.tagName && (c = axs.utils.getQuerySelectorText(a.parentNode) + " > ");\n      return 1 == d ? c + a.tagName : c + a.tagName + ":nth-of-type(" + d + ")";\n    }\n  } else {\n    if (a.selectorText) {\n      return a.selectorText;\n    }\n  }\n  return "";\n};\naxs.utils.getIdReferrers = function(a, b) {\n  if (!b) {\n    return null;\n  }\n  var c = b.id, d = a.replace(/^aria-/, ""), d = axs.constants.ARIA_PROPERTIES[d];\n  if (!c || !d) {\n    return null;\n  }\n  d = d.valueType;\n  return "idref_list" === d || "idref" === d ? (c = c.replace(/\'/g, "\\\\\'"), b.ownerDocument.querySelectorAll("[" + a + "~=\'" + c + "\']")) : null;\n};\naxs.utils.getIdReferents = function(a, b) {\n  var c = [], d = a.replace(/^aria-/, ""), d = axs.constants.ARIA_PROPERTIES[d];\n  if (!d || !b.hasAttribute(a)) {\n    return c;\n  }\n  d = d.valueType;\n  if ("idref_list" === d || "idref" === d) {\n    for (var d = b.ownerDocument, e = b.getAttribute(a), e = e.split(/\\s+/), f = 0, g = e.length;f < g;f++) {\n      var h = d.getElementById(e[f]);\n      h && (c[c.length] = h);\n    }\n  }\n  return c;\n};\naxs.utils.getAriaPropertiesByValueType = function(a) {\n  var b = {}, c;\n  for (c in axs.constants.ARIA_PROPERTIES) {\n    var d = axs.constants.ARIA_PROPERTIES[c];\n    d && 0 <= a.indexOf(d.valueType) && (b[c] = d);\n  }\n  return b;\n};\naxs.utils.getSelectorForAriaProperties = function(a) {\n  a = Object.keys(a).map(function(a) {\n    return "[aria-" + a + "]";\n  });\n  a.sort();\n  return a.join(",");\n};\naxs.utils.findDescendantsWithRole = function(a, b) {\n  if (!a || !b) {\n    return [];\n  }\n  var c = axs.properties.getSelectorForRole(b);\n  if (c && (c = a.querySelectorAll(c))) {\n    c = Array.prototype.map.call(c, function(a) {\n      return a;\n    });\n  } else {\n    return [];\n  }\n  return c;\n};\naxs.properties = {};\naxs.properties.TEXT_CONTENT_XPATH = \'.//text()[normalize-space(.)!=""]/parent::*[name()!="script"]\';\naxs.properties.getFocusProperties = function(a) {\n  var b = {}, c = a.getAttribute("tabindex");\n  void 0 != c ? b.tabindex = {value:c, valid:!0} : axs.utils.isElementImplicitlyFocusable(a) && (b.implicitlyFocusable = {value:!0, valid:!0});\n  if (0 == Object.keys(b).length) {\n    return null;\n  }\n  var d = axs.utils.elementIsTransparent(a), e = axs.utils.elementHasZeroArea(a), f = axs.utils.elementIsOutsideScrollArea(a), g = axs.utils.overlappingElements(a);\n  if (d || e || f || 0 < g.length) {\n    var c = axs.utils.isElementOrAncestorHidden(a), h = {value:!1, valid:c};\n    d && (h.transparent = !0);\n    e && (h.zeroArea = !0);\n    f && (h.outsideScrollArea = !0);\n    g && 0 < g.length && (h.overlappingElements = g);\n    d = {value:c, valid:c};\n    c && (d.reason = axs.properties.getHiddenReason(a));\n    h.hidden = d;\n    b.visible = h;\n  } else {\n    b.visible = {value:!0, valid:!0};\n  }\n  return b;\n};\naxs.properties.getHiddenReason = function(a) {\n  if (!(a && a instanceof a.ownerDocument.defaultView.HTMLElement)) {\n    return null;\n  }\n  if (a.hasAttribute("chromevoxignoreariahidden")) {\n    var b = !0\n  }\n  var c = window.getComputedStyle(a, null);\n  return "none" == c.display ? {property:"display: none", on:a} : "hidden" == c.visibility ? {property:"visibility: hidden", on:a} : a.hasAttribute("aria-hidden") && "true" == a.getAttribute("aria-hidden").toLowerCase() && !b ? {property:"aria-hidden", on:a} : axs.properties.getHiddenReason(axs.utils.parentElement(a));\n};\naxs.properties.getColorProperties = function(a) {\n  var b = {};\n  (a = axs.properties.getContrastRatioProperties(a)) && (b.contrastRatio = a);\n  return 0 == Object.keys(b).length ? null : b;\n};\naxs.properties.hasDirectTextDescendant = function(a) {\n  function b() {\n    for (var b = c.evaluate(axs.properties.TEXT_CONTENT_XPATH, a, null, XPathResult.ANY_TYPE, null), e = b.iterateNext();null != e;e = b.iterateNext()) {\n      if (e === a) {\n        return !0;\n      }\n    }\n    return !1;\n  }\n  var c;\n  c = a.nodeType == Node.DOCUMENT_NODE ? a : a.ownerDocument;\n  return c.evaluate ? b() : function() {\n    for (var b = c.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);b.nextNode();) {\n      var e = b.currentNode, f = e.parentNode.tagName.toLowerCase();\n      if (e.nodeValue.trim() && "script" !== f && a !== e) {\n        return !0;\n      }\n    }\n    return !1;\n  }();\n};\naxs.properties.getContrastRatioProperties = function(a) {\n  if (!axs.properties.hasDirectTextDescendant(a)) {\n    return null;\n  }\n  var b = {}, c = window.getComputedStyle(a, null), d = axs.utils.getBgColor(c, a);\n  if (!d) {\n    return null;\n  }\n  b.backgroundColor = axs.color.colorToString(d);\n  var e = axs.utils.getFgColor(c, a, d);\n  b.foregroundColor = axs.color.colorToString(e);\n  a = axs.utils.getContrastRatioForElementWithComputedStyle(c, a);\n  if (!a) {\n    return null;\n  }\n  b.value = a.toFixed(2);\n  axs.utils.isLowContrast(a, c) && (b.alert = !0);\n  var f = axs.utils.isLargeFont(c) ? 3 : 4.5, c = axs.utils.isLargeFont(c) ? 4.5 : 7, g = {};\n  f > a && (g.AA = f);\n  c > a && (g.AAA = c);\n  if (!Object.keys(g).length) {\n    return b;\n  }\n  (d = axs.color.suggestColors(d, e, g)) && Object.keys(d).length && (b.suggestedColors = d);\n  return b;\n};\naxs.properties.findTextAlternatives = function(a, b, c, d) {\n  var e = c || !1;\n  c = axs.utils.asElement(a);\n  if (!c || !e && !d && axs.utils.isElementOrAncestorHidden(c)) {\n    return null;\n  }\n  if (a.nodeType == Node.TEXT_NODE) {\n    return c = {type:"text"}, c.text = a.textContent, c.lastWord = axs.properties.getLastWord(c.text), b.content = c, a.textContent;\n  }\n  a = null;\n  e || (a = axs.properties.getTextFromAriaLabelledby(c, b));\n  c.hasAttribute("aria-label") && (d = {type:"text"}, d.text = c.getAttribute("aria-label"), d.lastWord = axs.properties.getLastWord(d.text), a ? d.unused = !0 : e && axs.utils.elementIsHtmlControl(c) || (a = d.text), b.ariaLabel = d);\n  c.hasAttribute("role") && "presentation" == c.getAttribute("role") || (a = axs.properties.getTextFromHostLanguageAttributes(c, b, a, e));\n  if (e && axs.utils.elementIsHtmlControl(c)) {\n    d = c.ownerDocument.defaultView;\n    if (c instanceof d.HTMLInputElement) {\n      var f = c;\n      "text" == f.type && f.value && 0 < f.value.length && (b.controlValue = {text:f.value});\n      "range" == f.type && (b.controlValue = {text:f.value});\n    }\n    c instanceof d.HTMLSelectElement && (b.controlValue = {text:c.value});\n    b.controlValue && (d = b.controlValue, a ? d.unused = !0 : a = d.text);\n  }\n  if (e && axs.utils.elementIsAriaWidget(c)) {\n    e = c.getAttribute("role");\n    "textbox" == e && c.textContent && 0 < c.textContent.length && (b.controlValue = {text:c.textContent});\n    if ("slider" == e || "spinbutton" == e) {\n      c.hasAttribute("aria-valuetext") ? b.controlValue = {text:c.getAttribute("aria-valuetext")} : c.hasAttribute("aria-valuenow") && (b.controlValue = {value:c.getAttribute("aria-valuenow"), text:"" + c.getAttribute("aria-valuenow")});\n    }\n    if ("menu" == e) {\n      var g = c.querySelectorAll("[role=menuitemcheckbox], [role=menuitemradio]");\n      d = [];\n      for (f = 0;f < g.length;f++) {\n        "true" == g[f].getAttribute("aria-checked") && d.push(g[f]);\n      }\n      if (0 < d.length) {\n        g = "";\n        for (f = 0;f < d.length;f++) {\n          g += axs.properties.findTextAlternatives(d[f], {}, !0), f < d.length - 1 && (g += ", ");\n        }\n        b.controlValue = {text:g};\n      }\n    }\n    if ("combobox" == e || "select" == e) {\n      b.controlValue = {text:"TODO"};\n    }\n    b.controlValue && (d = b.controlValue, a ? d.unused = !0 : a = d.text);\n  }\n  d = !0;\n  c.hasAttribute("role") && (e = c.getAttribute("role"), (e = axs.constants.ARIA_ROLES[e]) && (!e.namefrom || 0 > e.namefrom.indexOf("contents")) && (d = !1));\n  (e = axs.properties.getTextFromDescendantContent(c)) && d && (d = {type:"text"}, d.text = e, d.lastWord = axs.properties.getLastWord(d.text), a ? d.unused = !0 : a = e, b.content = d);\n  c.hasAttribute("title") && (e = {type:"string", valid:!0}, e.text = c.getAttribute("title"), e.lastWord = axs.properties.getLastWord(e.lastWord), a ? e.unused = !0 : a = e.text, b.title = e);\n  return 0 == Object.keys(b).length && null == a ? null : a;\n};\naxs.properties.getTextFromDescendantContent = function(a) {\n  var b = a.childNodes;\n  a = [];\n  for (var c = 0;c < b.length;c++) {\n    var d = axs.properties.findTextAlternatives(b[c], {}, !0);\n    d && a.push(d.trim());\n  }\n  if (a.length) {\n    b = "";\n    for (c = 0;c < a.length;c++) {\n      b = [b, a[c]].join(" ").trim();\n    }\n    return b;\n  }\n  return null;\n};\naxs.properties.getTextFromAriaLabelledby = function(a, b) {\n  var c = null;\n  if (!a.hasAttribute("aria-labelledby")) {\n    return c;\n  }\n  for (var d = a.getAttribute("aria-labelledby").split(/\\s+/), e = {valid:!0}, f = [], g = [], h = 0;h < d.length;h++) {\n    var k = {type:"element"}, m = d[h];\n    k.value = m;\n    var l = document.getElementById(m);\n    l ? (k.valid = !0, k.text = axs.properties.findTextAlternatives(l, {}, !0), k.lastWord = axs.properties.getLastWord(k.text), f.push(l.textContent.trim()), k.element = l) : (k.valid = !1, e.valid = !1, k.errorMessage = {messageKey:"noElementWithId", args:[m]});\n    g.push(k);\n  }\n  0 < g.length && (g[g.length - 1].last = !0, e.values = g, e.text = f.join(" "), e.lastWord = axs.properties.getLastWord(e.text), c = e.text, b.ariaLabelledby = e);\n  return c;\n};\naxs.properties.getTextFromHostLanguageAttributes = function(a, b, c, d) {\n  if (axs.browserUtils.matchSelector(a, "img") && a.hasAttribute("alt")) {\n    var e = {type:"string", valid:!0};\n    e.text = a.getAttribute("alt");\n    c ? e.unused = !0 : c = e.text;\n    b.alt = e;\n  }\n  if (axs.browserUtils.matchSelector(a, \'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])\') && !d) {\n    if (a.hasAttribute("id")) {\n      d = document.querySelectorAll(\'label[for="\' + a.id + \'"]\');\n      for (var e = {}, f = [], g = [], h = 0;h < d.length;h++) {\n        var k = {type:"element"}, m = d[h], l = axs.properties.findTextAlternatives(m, {}, !0);\n        l && 0 < l.trim().length && (k.text = l.trim(), g.push(l.trim()));\n        k.element = m;\n        f.push(k);\n      }\n      0 < f.length && (f[f.length - 1].last = !0, e.values = f, e.text = g.join(" "), e.lastWord = axs.properties.getLastWord(e.text), c ? e.unused = !0 : c = e.text, b.labelFor = e);\n    }\n    d = axs.utils.parentElement(a);\n    for (e = {};d;) {\n      if ("label" == d.tagName.toLowerCase() && (f = d, f.control == a)) {\n        e.type = "element";\n        e.text = axs.properties.findTextAlternatives(f, {}, !0);\n        e.lastWord = axs.properties.getLastWord(e.text);\n        e.element = f;\n        break;\n      }\n      d = axs.utils.parentElement(d);\n    }\n    e.text && (c ? e.unused = !0 : c = e.text, b.labelWrapped = e);\n    Object.keys(b).length || (b.noLabel = !0);\n  }\n  return c;\n};\naxs.properties.getLastWord = function(a) {\n  if (!a) {\n    return null;\n  }\n  var b = a.lastIndexOf(" ") + 1, c = a.length - 10;\n  return a.substring(b > c ? b : c);\n};\naxs.properties.getTextProperties = function(a) {\n  var b = {}, c = axs.properties.findTextAlternatives(a, b, !1, !0);\n  if (0 == Object.keys(b).length && ((a = axs.utils.asElement(a)) && axs.browserUtils.matchSelector(a, "img") && (b.alt = {valid:!1, errorMessage:"No alt value provided"}, a = a.src, "string" == typeof a && (c = a.split("/").pop(), b.filename = {text:c})), !c)) {\n    return null;\n  }\n  b.hasProperties = Boolean(Object.keys(b).length);\n  b.computedText = c;\n  b.lastWord = axs.properties.getLastWord(c);\n  return b;\n};\naxs.properties.getAriaProperties = function(a) {\n  var b = {}, c = axs.properties.getGlobalAriaProperties(a), d;\n  for (d in axs.constants.ARIA_PROPERTIES) {\n    var e = "aria-" + d;\n    if (a.hasAttribute(e)) {\n      var f = a.getAttribute(e);\n      c[e] = axs.utils.getAriaPropertyValue(e, f, a);\n    }\n  }\n  0 < Object.keys(c).length && (b.properties = axs.utils.values(c));\n  f = axs.utils.getRoles(a);\n  if (!f) {\n    return Object.keys(b).length ? b : null;\n  }\n  b.roles = f;\n  if (!f.valid || !f.roles) {\n    return b;\n  }\n  for (var e = f.roles, g = 0;g < e.length;g++) {\n    var h = e[g];\n    if (h.details && h.details.propertiesSet) {\n      for (d in h.details.propertiesSet) {\n        d in c || (a.hasAttribute(d) ? (f = a.getAttribute(d), c[d] = axs.utils.getAriaPropertyValue(d, f, a), "values" in c[d] && (f = c[d].values, f[f.length - 1].isLast = !0)) : h.details.requiredPropertiesSet[d] && (c[d] = {name:d, valid:!1, reason:"Required property not set"}));\n      }\n    }\n  }\n  0 < Object.keys(c).length && (b.properties = axs.utils.values(c));\n  return 0 < Object.keys(b).length ? b : null;\n};\naxs.properties.getGlobalAriaProperties = function(a) {\n  var b = {}, c;\n  for (c in axs.constants.GLOBAL_PROPERTIES) {\n    if (a.hasAttribute(c)) {\n      var d = a.getAttribute(c);\n      b[c] = axs.utils.getAriaPropertyValue(c, d, a);\n    }\n  }\n  return b;\n};\naxs.properties.getVideoProperties = function(a) {\n  if (!axs.browserUtils.matchSelector(a, "video")) {\n    return null;\n  }\n  var b = {};\n  b.captionTracks = axs.properties.getTrackElements(a, "captions");\n  b.descriptionTracks = axs.properties.getTrackElements(a, "descriptions");\n  b.chapterTracks = axs.properties.getTrackElements(a, "chapters");\n  return b;\n};\naxs.properties.getTrackElements = function(a, b) {\n  var c = a.querySelectorAll("track[kind=" + b + "]"), d = {};\n  if (!c.length) {\n    return d.valid = !1, d.reason = {messageKey:"noTracksProvided", args:[[b]]}, d;\n  }\n  d.valid = !0;\n  for (var e = [], f = 0;f < c.length;f++) {\n    var g = {}, h = c[f].getAttribute("src"), k = c[f].getAttribute("srcLang"), m = c[f].getAttribute("label");\n    h ? (g.valid = !0, g.src = h) : (g.valid = !1, g.reason = {messageKey:"noSrcProvided"});\n    h = "";\n    m && (h += m, k && (h += " "));\n    k && (h += "(" + k + ")");\n    "" == h && (h = "[[object Object]]");\n    g.name = h;\n    e.push(g);\n  }\n  d.values = e;\n  return d;\n};\naxs.properties.getAllProperties = function(a) {\n  var b = axs.utils.asElement(a);\n  if (!b) {\n    return {};\n  }\n  var c = {};\n  c.ariaProperties = axs.properties.getAriaProperties(b);\n  c.colorProperties = axs.properties.getColorProperties(b);\n  c.focusProperties = axs.properties.getFocusProperties(b);\n  c.textProperties = axs.properties.getTextProperties(a);\n  c.videoProperties = axs.properties.getVideoProperties(b);\n  return c;\n};\n(function() {\n  function a(a) {\n    if (!a) {\n      return null;\n    }\n    var c = a.tagName;\n    if (!c) {\n      return null;\n    }\n    c = c.toUpperCase();\n    c = axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[c];\n    if (!c || !c.length) {\n      return null;\n    }\n    for (var d = null, e = 0, f = c.length;e < f;e++) {\n      var g = c[e];\n      if (g.selector) {\n        if (axs.browserUtils.matchSelector(a, g.selector)) {\n          return g;\n        }\n      } else {\n        d = g;\n      }\n    }\n    return d;\n  }\n  axs.properties.getImplicitRole = function(b) {\n    return (b = a(b)) ? b.role : "";\n  };\n  axs.properties.canTakeAriaAttributes = function(b) {\n    return (b = a(b)) ? !b.reserved : !0;\n  };\n})();\naxs.properties.getNativelySupportedAttributes = function(a) {\n  var b = [];\n  if (!a) {\n    return b;\n  }\n  a = a.cloneNode(!1);\n  for (var c = Object.keys(axs.constants.ARIA_TO_HTML_ATTRIBUTE), d = 0;d < c.length;d++) {\n    var e = c[d];\n    axs.constants.ARIA_TO_HTML_ATTRIBUTE[e] in a && (b[b.length] = e);\n  }\n  return b;\n};\n(function() {\n  var a = {};\n  axs.properties.getSelectorForRole = function(b) {\n    if (!b) {\n      return "";\n    }\n    if (a[b] && a.hasOwnProperty(b)) {\n      return a[b];\n    }\n    var c = [\'[role="\' + b + \'"]\'];\n    Object.keys(axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO).forEach(function(a) {\n      var e = axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[a];\n      if (e && e.length) {\n        for (var f = 0;f < e.length;f++) {\n          var g = e[f];\n          if (g.role === b) {\n            if (g.selector) {\n              c[c.length] = g.selector;\n            } else {\n              c[c.length] = a;\n              break;\n            }\n          }\n        }\n      }\n    });\n    return a[b] = c.join(",");\n  };\n})();\naxs.AuditRule = function(a) {\n  for (var b = !0, c = [], d = 0;d < axs.AuditRule.requiredFields.length;d++) {\n    var e = axs.AuditRule.requiredFields[d];\n    e in a || (b = !1, c.push(e));\n  }\n  if (!b) {\n    throw "Invalid spec; the following fields were not specified: " + c.join(", ") + "\\n" + JSON.stringify(a);\n  }\n  this.name = a.name;\n  this.severity = a.severity;\n  this.relevantElementMatcher_ = a.relevantElementMatcher;\n  this.test_ = a.test;\n  this.code = a.code;\n  this.heading = a.heading || "";\n  this.url = a.url || "";\n  this.requiresConsoleAPI = !!a.opt_requiresConsoleAPI;\n};\naxs.AuditRule.requiredFields = "name severity relevantElementMatcher test code heading".split(" ");\naxs.AuditRule.NOT_APPLICABLE = {result:axs.constants.AuditResult.NA};\naxs.AuditRule.prototype.addElement = function(a, b) {\n  a.push(b);\n};\naxs.AuditRule.collectMatchingElements = function(a, b, c, d) {\n  if (a.nodeType == Node.ELEMENT_NODE) {\n    var e = a\n  }\n  e && b.call(null, e) && c.push(e);\n  if (e) {\n    var f = e.shadowRoot || e.webkitShadowRoot;\n    if (f) {\n      axs.AuditRule.collectMatchingElements(f, b, c, f);\n      return;\n    }\n  }\n  if (e && "content" == e.localName) {\n    for (var f = e.getDistributedNodes(), g = 0;g < f.length;g++) {\n      axs.AuditRule.collectMatchingElements(f[g], b, c, d);\n    }\n  } else {\n    if (e && "shadow" == e.localName) {\n      if (f = e, d) {\n        for (f = f.getDistributedNodes(), g = 0;g < f.length;g++) {\n          axs.AuditRule.collectMatchingElements(f[g], b, c, d);\n        }\n      } else {\n        console.warn("ShadowRoot not provided for", e);\n      }\n    }\n    e && "iframe" == e.localName && e.contentDocument && axs.AuditRule.collectMatchingElements(e.contentDocument, b, c, d);\n    for (a = a.firstChild;null != a;) {\n      axs.AuditRule.collectMatchingElements(a, b, c, d), a = a.nextSibling;\n    }\n  }\n};\naxs.AuditRule.prototype.run = function(a) {\n  a = a || {};\n  var b = "ignoreSelectors" in a ? a.ignoreSelectors : [], c = "maxResults" in a ? a.maxResults : null, d = [];\n  axs.AuditRule.collectMatchingElements("scope" in a ? a.scope : document, this.relevantElementMatcher_, d);\n  var e = [];\n  if (!d.length) {\n    return {result:axs.constants.AuditResult.NA};\n  }\n  for (var f = 0;f < d.length && !(null != c && e.length >= c);f++) {\n    var g = d[f], h;\n    a: {\n      h = g;\n      for (var k = 0;k < b.length;k++) {\n        if (axs.browserUtils.matchSelector(h, b[k])) {\n          h = !0;\n          break a;\n        }\n      }\n      h = !1;\n    }\n    !h && this.test_(g, a.config) && this.addElement(e, g);\n  }\n  a = {result:e.length ? axs.constants.AuditResult.FAIL : axs.constants.AuditResult.PASS, elements:e};\n  f < d.length && (a.resultsTruncated = !0);\n  return a;\n};\naxs.AuditRules = {};\n(function() {\n  var a = {}, b = {};\n  axs.AuditRules.specs = {};\n  axs.AuditRules.addRule = function(c) {\n    var d = new axs.AuditRule(c);\n    if (d.code in b) {\n      throw Error(\'Can not add audit rule with same code: "\' + d.code + \'"\');\n    }\n    if (d.name in a) {\n      throw Error(\'Can not add audit rule with same name: "\' + d.name + \'"\');\n    }\n    a[d.name] = b[d.code] = d;\n    axs.AuditRules.specs[c.name] = c;\n  };\n  axs.AuditRules.getRule = function(c) {\n    return a[c] || b[c] || null;\n  };\n  axs.AuditRules.getRules = function(b) {\n    var d = Object.keys(a);\n    return b ? d : d.map(function(a) {\n      return this.getRule(a);\n    }, axs.AuditRules);\n  };\n})();\naxs.AuditResults = function() {\n  this.errors_ = [];\n  this.warnings_ = [];\n};\ngoog.exportSymbol("axs.AuditResults", axs.AuditResults);\naxs.AuditResults.prototype.addError = function(a) {\n  "" != a && this.errors_.push(a);\n};\ngoog.exportProperty(axs.AuditResults.prototype, "addError", axs.AuditResults.prototype.addError);\naxs.AuditResults.prototype.addWarning = function(a) {\n  "" != a && this.warnings_.push(a);\n};\ngoog.exportProperty(axs.AuditResults.prototype, "addWarning", axs.AuditResults.prototype.addWarning);\naxs.AuditResults.prototype.numErrors = function() {\n  return this.errors_.length;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "numErrors", axs.AuditResults.prototype.numErrors);\naxs.AuditResults.prototype.numWarnings = function() {\n  return this.warnings_.length;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "numWarnings", axs.AuditResults.prototype.numWarnings);\naxs.AuditResults.prototype.getErrors = function() {\n  return this.errors_;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "getErrors", axs.AuditResults.prototype.getErrors);\naxs.AuditResults.prototype.getWarnings = function() {\n  return this.warnings_;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "getWarnings", axs.AuditResults.prototype.getWarnings);\naxs.AuditResults.prototype.toString = function() {\n  for (var a = "", b = 0;b < this.errors_.length;b++) {\n    0 == b && (a += "\\nErrors:\\n");\n    var c = this.errors_[b], a = a + (c + "\\n\\n");\n  }\n  for (b = 0;b < this.warnings_.length;b++) {\n    0 == b && (a += "\\nWarnings:\\n"), c = this.warnings_[b], a += c + "\\n\\n";\n  }\n  return a;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "toString", axs.AuditResults.prototype.toString);\naxs.Audit = {};\naxs.AuditConfiguration = function(a) {\n  null == a && (a = {});\n  this.rules_ = {};\n  this.maxResults = this.auditRulesToIgnore = this.auditRulesToRun = this.scope = null;\n  this.withConsoleApi = !1;\n  this.showUnsupportedRulesWarning = !0;\n  for (var b in this) {\n    this.hasOwnProperty(b) && b in a && (this[b] = a[b]);\n  }\n  goog.exportProperty(this, "scope", this.scope);\n  goog.exportProperty(this, "auditRulesToRun", this.auditRulesToRun);\n  goog.exportProperty(this, "auditRulesToIgnore", this.auditRulesToIgnore);\n  goog.exportProperty(this, "withConsoleApi", this.withConsoleApi);\n  goog.exportProperty(this, "showUnsupportedRulesWarning", this.showUnsupportedRulesWarning);\n};\ngoog.exportSymbol("axs.AuditConfiguration", axs.AuditConfiguration);\naxs.AuditConfiguration.prototype = {ignoreSelectors:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  "ignore" in this.rules_[a] || (this.rules_[a].ignore = []);\n  Array.prototype.push.call(this.rules_[a].ignore, b);\n}, getIgnoreSelectors:function(a) {\n  return a in this.rules_ && "ignore" in this.rules_[a] ? this.rules_[a].ignore : [];\n}, setSeverity:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  this.rules_[a].severity = b;\n}, getSeverity:function(a) {\n  return a in this.rules_ && "severity" in this.rules_[a] ? this.rules_[a].severity : null;\n}, setRuleConfig:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  this.rules_[a].config = b;\n}, getRuleConfig:function(a) {\n  return a in this.rules_ && "config" in this.rules_[a] ? this.rules_[a].config : null;\n}};\ngoog.exportProperty(axs.AuditConfiguration.prototype, "ignoreSelectors", axs.AuditConfiguration.prototype.ignoreSelectors);\ngoog.exportProperty(axs.AuditConfiguration.prototype, "getIgnoreSelectors", axs.AuditConfiguration.prototype.getIgnoreSelectors);\naxs.Audit.unsupportedRulesWarningShown = !1;\naxs.Audit.getRulesCannotRun = function(a) {\n  return a.withConsoleApi ? [] : axs.AuditRules.getRules().filter(function(a) {\n    return a.requiresConsoleAPI;\n  }).map(function(a) {\n    return a.code;\n  });\n};\naxs.Audit.run = function(a) {\n  a = a || new axs.AuditConfiguration;\n  var b = a.withConsoleApi, c = [], d;\n  d = a.auditRulesToRun && 0 < a.auditRulesToRun.length ? a.auditRulesToRun : axs.AuditRules.getRules(!0);\n  if (a.auditRulesToIgnore) {\n    for (var e = 0;e < a.auditRulesToIgnore.length;e++) {\n      var f = a.auditRulesToIgnore[e];\n      0 > d.indexOf(f) || d.splice(d.indexOf(f), 1);\n    }\n  }\n  !axs.Audit.unsupportedRulesWarningShown && a.showUnsupportedRulesWarning && (e = axs.Audit.getRulesCannotRun(a), 0 < e.length && (console.warn("Some rules cannot be checked using the axs.Audit.run() method call. Use the Chrome plugin to check these rules: " + e.join(", ")), console.warn("To remove this message, pass an AuditConfiguration object to axs.Audit.run() and set configuration.showUnsupportedRulesWarning = false.")), axs.Audit.unsupportedRulesWarningShown = !0);\n  for (e = 0;e < d.length;e++) {\n    var f = d[e], g = axs.AuditRules.getRule(f);\n    if (g && !g.disabled && (b || !g.requiresConsoleAPI)) {\n      var h = {}, k = a.getIgnoreSelectors(g.name);\n      if (0 < k.length || a.scope) {\n        h.ignoreSelectors = k;\n      }\n      k = a.getRuleConfig(g.name);\n      null != k && (h.config = k);\n      a.scope && (h.scope = a.scope);\n      a.maxResults && (h.maxResults = a.maxResults);\n      h = g.run.call(g, h);\n      g = axs.utils.namedValues(g);\n      g.severity = a.getSeverity(f) || g.severity;\n      h.rule = g;\n      c.push(h);\n    }\n  }\n  return c;\n};\ngoog.exportSymbol("axs.Audit.run", axs.Audit.run);\naxs.Audit.auditResults = function(a) {\n  for (var b = new axs.AuditResults, c = 0;c < a.length;c++) {\n    var d = a[c];\n    d.result == axs.constants.AuditResult.FAIL && (d.rule.severity == axs.constants.Severity.SEVERE ? b.addError(axs.Audit.accessibilityErrorMessage(d)) : b.addWarning(axs.Audit.accessibilityErrorMessage(d)));\n  }\n  return b;\n};\ngoog.exportSymbol("axs.Audit.auditResults", axs.Audit.auditResults);\naxs.Audit.createReport = function(a, b) {\n  var c;\n  c = "*** Begin accessibility audit results ***\\nAn accessibility audit found " + axs.Audit.auditResults(a).toString();\n  b && (c += "\\nFor more information, please see ", c += b);\n  return c += "\\n*** End accessibility audit results ***";\n};\ngoog.exportSymbol("axs.Audit.createReport", axs.Audit.createReport);\naxs.Audit.accessibilityErrorMessage = function(a) {\n  for (var b = a.rule.severity == axs.constants.Severity.SEVERE ? "Error: " : "Warning: ", b = b + (a.rule.code + " (" + a.rule.heading + ") failed on the following " + (1 == a.elements.length ? "element" : "elements")), b = 1 == a.elements.length ? b + ":" : b + (" (1 - " + Math.min(5, a.elements.length) + " of " + a.elements.length + "):"), c = Math.min(a.elements.length, 5), d = 0;d < c;d++) {\n    var e = a.elements[d], b = b + "\\n";\n    try {\n      b += axs.utils.getQuerySelectorText(e);\n    } catch (f) {\n      b += " tagName:" + e.tagName, b += " id:" + e.id;\n    }\n  }\n  "" != a.rule.url && (b += "\\nSee " + a.rule.url + " for more information.");\n  return b;\n};\ngoog.exportSymbol("axs.Audit.accessibilityErrorMessage", axs.Audit.accessibilityErrorMessage);\naxs.AuditRules.addRule({name:"ariaOnReservedElement", heading:"This element does not support ARIA roles, states and properties", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_12", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return !axs.properties.canTakeAriaAttributes(a);\n}, test:function(a) {\n  return null !== axs.properties.getAriaProperties(a);\n}, code:"AX_ARIA_12"});\naxs.AuditRules.addRule({name:"ariaOwnsDescendant", heading:"aria-owns should not be used if ownership is implicit in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_06", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[aria-owns]");\n}, test:function(a) {\n  return axs.utils.getIdReferents("aria-owns", a).some(function(b) {\n    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_CONTAINED_BY;\n  });\n}, code:"AX_ARIA_06"});\naxs.AuditRules.addRule({name:"ariaRoleNotScoped", heading:"Elements with ARIA roles must be in the correct scope", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_09", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  var b = axs.utils.getRoles(a);\n  if (!b || !b.applied) {\n    return !1;\n  }\n  b = b.applied.details.scope;\n  if (!b || 0 === b.length) {\n    return !1;\n  }\n  for (var c = a;c = c.parentNode;) {\n    var d = axs.utils.getRoles(c, !0);\n    if (d && d.applied && 0 <= b.indexOf(d.applied.name)) {\n      return !1;\n    }\n  }\n  if (a = axs.utils.getIdReferrers("aria-owns", a)) {\n    for (c = 0;c < a.length;c++) {\n      if ((d = axs.utils.getRoles(a[c], !0)) && d.applied && 0 <= b.indexOf(d.applied.name)) {\n        return !1;\n      }\n    }\n  }\n  return !0;\n}, code:"AX_ARIA_09"});\naxs.AuditRules.addRule({name:"audioWithoutControls", heading:"Audio elements should have controls", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_audio_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "audio[autoplay]");\n}, test:function(a) {\n  return !a.querySelectorAll("[controls]").length && 3 < a.duration;\n}, code:"AX_AUDIO_01"});\n(function() {\n  var a = /^aria\\-/;\n  axs.AuditRules.addRule({name:"badAriaAttribute", heading:"This element has an invalid ARIA attribute", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_11", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(b) {\n    b = b.attributes;\n    for (var c = 0, d = b.length;c < d;c++) {\n      if (a.test(b[c].name)) {\n        return !0;\n      }\n    }\n    return !1;\n  }, test:function(b) {\n    b = b.attributes;\n    for (var c = 0, d = b.length;c < d;c++) {\n      var e = b[c].name;\n      if (a.test(e) && (e = e.replace(a, ""), !axs.constants.ARIA_PROPERTIES.hasOwnProperty(e))) {\n        return !0;\n      }\n    }\n    return !1;\n  }, code:"AX_ARIA_11"});\n})();\naxs.AuditRules.addRule({name:"badAriaAttributeValue", heading:"ARIA state and property values must be valid", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_04", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  var b = axs.utils.getSelectorForAriaProperties(axs.constants.ARIA_PROPERTIES);\n  return axs.browserUtils.matchSelector(a, b);\n}, test:function(a) {\n  for (var b in axs.constants.ARIA_PROPERTIES) {\n    var c = "aria-" + b;\n    if (a.hasAttribute(c)) {\n      var d = a.getAttribute(c);\n      if (!axs.utils.getAriaPropertyValue(c, d, a).valid) {\n        return !0;\n      }\n    }\n  }\n  return !1;\n}, code:"AX_ARIA_04"});\naxs.AuditRules.addRule({name:"badAriaRole", heading:"Elements with ARIA roles must use a valid, non-abstract ARIA role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  return !axs.utils.getRoles(a).valid;\n}, code:"AX_ARIA_01"});\naxs.AuditRules.addRule({name:"controlsWithoutLabel", heading:"Controls and media elements should have labels", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  if (!axs.browserUtils.matchSelector(a, \'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])\') || "presentation" == a.getAttribute("role")) {\n    return !1;\n  }\n  if (0 <= a.tabIndex) {\n    return !0;\n  }\n  for (a = axs.utils.parentElement(a);null != a;a = axs.utils.parentElement(a)) {\n    if (axs.utils.elementIsAriaWidget(a)) {\n      return !1;\n    }\n  }\n  return !0;\n}, test:function(a) {\n  if (axs.utils.isElementOrAncestorHidden(a) || "input" == a.tagName.toLowerCase() && "button" == a.type && a.value.length || "button" == a.tagName.toLowerCase() && a.textContent.replace(/^\\s+|\\s+$/g, "").length || axs.utils.hasLabel(a)) {\n    return !1;\n  }\n  a = axs.properties.findTextAlternatives(a, {});\n  return null === a || "" === a.trim() ? !0 : !1;\n}, code:"AX_TEXT_01", ruleName:"Controls and media elements should have labels"});\naxs.AuditRules.addRule({name:"duplicateId", heading:"An element\'s ID must be unique in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_02", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[id]");\n}, test:function(a) {\n  var b = a.id;\n  if (!b) {\n    return !1;\n  }\n  b = "[id=\'" + b.replace(/\'/g, "\\\\\'") + "\']";\n  return 1 < a.ownerDocument.querySelectorAll(b).length;\n}, code:"AX_HTML_02"});\naxs.AuditRules.addRule({name:"focusableElementNotVisibleAndNotAriaHidden", heading:"These elements are focusable but either invisible or obscured by another element", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  if (!axs.browserUtils.matchSelector(a, axs.utils.FOCUSABLE_ELEMENTS_SELECTOR)) {\n    return !1;\n  }\n  if (0 <= a.tabIndex) {\n    return !0;\n  }\n  for (var b = axs.utils.parentElement(a);null != b;b = axs.utils.parentElement(b)) {\n    if (axs.utils.elementIsAriaWidget(b)) {\n      return !1;\n    }\n  }\n  a = axs.properties.findTextAlternatives(a, {});\n  return null === a || "" === a.trim() ? !1 : !0;\n}, test:function(a) {\n  if (axs.utils.isElementOrAncestorHidden(a)) {\n    return !1;\n  }\n  a.focus();\n  return !axs.utils.elementIsVisible(a);\n}, code:"AX_FOCUS_01"});\naxs.AuditRules.addRule({name:"humanLangMissing", heading:"The web page should have the content\'s human language indicated in the markup", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return a instanceof a.ownerDocument.defaultView.HTMLHtmlElement;\n}, test:function(a) {\n  return a.lang ? !1 : !0;\n}, code:"AX_HTML_01"});\naxs.AuditRules.addRule({name:"imagesWithoutAltText", heading:"Images should have a text alternative or presentational role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_02", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "img") && !axs.utils.isElementOrAncestorHidden(a);\n}, test:function(a) {\n  if (a.hasAttribute("alt") && "" == a.alt || "presentation" == a.getAttribute("role")) {\n    return !1;\n  }\n  var b = {};\n  axs.properties.findTextAlternatives(a, b);\n  return 0 == Object.keys(b).length ? !0 : !1;\n}, code:"AX_TEXT_02"});\naxs.AuditRules.addRule({name:"linkWithUnclearPurpose", heading:"The purpose of each link should be clear from the link text", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_04", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "a") && !axs.utils.isElementOrAncestorHidden(a);\n}, test:function(a, b) {\n  for (var c = b || {}, d = c.blacklistPhrases || [], e = /\\s+/, f = 0;f < d.length;f++) {\n    var g = "^\\\\s*" + d[f].trim().replace(e, "\\\\s*") + "s*[^a-z]$";\n    if ((new RegExp(g, "i")).test(a.textContent)) {\n      return !0;\n    }\n  }\n  c = c.stopwords || "click tap go here learn more this page link about".split(" ");\n  d = axs.properties.findTextAlternatives(a, {});\n  if (null === d || "" === d.trim()) {\n    return !0;\n  }\n  d = d.replace(/[^a-zA-Z ]/g, "");\n  for (f = 0;f < c.length;f++) {\n    if (d = d.replace(new RegExp("\\\\b" + c[f] + "\\\\b", "ig"), ""), "" == d.trim()) {\n      return !0;\n    }\n  }\n  return !1;\n}, code:"AX_TEXT_04"});\naxs.AuditRules.addRule({name:"lowContrastElements", heading:"Text elements should have a reasonable contrast ratio", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_color_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.properties.hasDirectTextDescendant(a) && !axs.utils.isElementDisabled(a);\n}, test:function(a) {\n  var b = window.getComputedStyle(a, null);\n  return (a = axs.utils.getContrastRatioForElementWithComputedStyle(b, a)) && axs.utils.isLowContrast(a, b);\n}, code:"AX_COLOR_01"});\naxs.AuditRules.addRule({name:"mainRoleOnInappropriateElement", heading:"role=main should only appear on significant elements", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_05", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role~=main]");\n}, test:function(a) {\n  if (axs.utils.isInlineElement(a)) {\n    return !0;\n  }\n  a = axs.properties.getTextFromDescendantContent(a);\n  return !a || 50 > a.length ? !0 : !1;\n}, code:"AX_ARIA_05"});\naxs.AuditRules.addRule({name:"elementsWithMeaningfulBackgroundImage", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return !axs.utils.isElementOrAncestorHidden(a);\n}, heading:"Meaningful images should not be used in element backgrounds", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_image_01", test:function(a) {\n  if (a.textContent && 0 < a.textContent.length) {\n    return !1;\n  }\n  a = window.getComputedStyle(a, null);\n  var b = a.backgroundImage;\n  if (!b || "undefined" === b || "none" === b || 0 != b.indexOf("url")) {\n    return !1;\n  }\n  b = parseInt(a.width, 10);\n  a = parseInt(a.height, 10);\n  return 150 > b && 150 > a;\n}, code:"AX_IMAGE_01"});\naxs.AuditRules.addRule({name:"multipleAriaOwners", heading:"An element\'s ID must not be present in more that one aria-owns attribute at any time", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_07", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[aria-owns]");\n}, test:function(a) {\n  return axs.utils.getIdReferents("aria-owns", a).some(function(a) {\n    return 1 < axs.utils.getIdReferrers("aria-owns", a).length;\n  });\n}, code:"AX_ARIA_07"});\naxs.AuditRules.addRule({name:"multipleLabelableElementsPerLabel", heading:"A label element may not have labelable descendants other than its labeled control.", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#-ax_text_03--labels-should-only-contain-one-labelable-element", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "label");\n}, test:function(a) {\n  if (1 < a.querySelectorAll(axs.utils.LABELABLE_ELEMENTS_SELECTOR).length) {\n    return !0;\n  }\n}, code:"AX_TEXT_03"});\naxs.AuditRules.addRule({name:"nonExistentAriaRelatedElement", heading:"ARIA attributes which refer to other elements by ID should refer to elements which exist in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_02", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  var b = axs.utils.getAriaPropertiesByValueType(["idref", "idref_list"]), b = axs.utils.getSelectorForAriaProperties(b);\n  return axs.browserUtils.matchSelector(a, b);\n}, test:function(a) {\n  for (var b = axs.utils.getAriaPropertiesByValueType(["idref", "idref_list"]), b = axs.utils.getSelectorForAriaProperties(b).split(","), c = 0, d = b.length;c < d;c++) {\n    var e = b[c];\n    if (axs.browserUtils.matchSelector(a, e)) {\n      var e = e.match(/aria-[^\\]]+/)[0], f = a.getAttribute(e);\n      if (!axs.utils.getAriaPropertyValue(e, f, a).valid) {\n        return !0;\n      }\n    }\n  }\n  return !1;\n}, code:"AX_ARIA_02"});\naxs.AuditRules.addRule({name:"pageWithoutTitle", heading:"The web page should have a title that describes topic or purpose", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_title_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return "html" == a.tagName.toLowerCase();\n}, test:function(a) {\n  a = a.querySelector("head");\n  return a ? (a = a.querySelector("title")) ? !a.textContent : !0 : !0;\n}, code:"AX_TITLE_01"});\naxs.AuditRules.addRule({name:"requiredAriaAttributeMissing", heading:"Elements with ARIA roles must have all required attributes for that role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_03", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  var b = axs.utils.getRoles(a);\n  if (!b.valid) {\n    return !1;\n  }\n  for (var c = 0;c < b.roles.length;c++) {\n    var d = b.roles[c].details.requiredPropertiesSet, e;\n    for (e in d) {\n      if (d = e.replace(/^aria-/, ""), !("defaultValue" in axs.constants.ARIA_PROPERTIES[d] || a.hasAttribute(e)) && 0 > axs.properties.getNativelySupportedAttributes(a).indexOf(e)) {\n        return !0;\n      }\n    }\n  }\n}, code:"AX_ARIA_03"});\n(function() {\n  function a(a) {\n    a = axs.utils.getRoles(a);\n    if (!a || !a.applied) {\n      return [];\n    }\n    a = a.applied;\n    return a.valid ? a.details.mustcontain || [] : [];\n  }\n  axs.AuditRules.addRule({name:"requiredOwnedAriaRoleMissing", heading:"Elements with ARIA roles must ensure required owned elements are present", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_08", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(b) {\n    return axs.browserUtils.matchSelector(b, "[role]") ? 0 < a(b).length : !1;\n  }, test:function(b) {\n    if ("true" === b.getAttribute("aria-busy")) {\n      return !1;\n    }\n    for (var c = a(b), d = c.length - 1;0 <= d;d--) {\n      var e = axs.utils.findDescendantsWithRole(b, c[d]);\n      if (e && e.length) {\n        return !1;\n      }\n    }\n    b = axs.utils.getIdReferents("aria-owns", b);\n    for (d = b.length - 1;0 <= d;d--) {\n      if ((e = axs.utils.getRoles(b[d], !0)) && e.applied) {\n        for (var e = e.applied, f = c.length - 1;0 <= f;f--) {\n          if (e.name === c[f]) {\n            return !1;\n          }\n        }\n      }\n    }\n    return !0;\n  }, code:"AX_ARIA_08"});\n})();\naxs.AuditRules.addRule({name:"tabIndexGreaterThanZero", heading:"Avoid positive integer values for tabIndex", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[tabindex]");\n}, test:function(a) {\n  if (0 < a.tabIndex) {\n    return !0;\n  }\n}, code:"AX_FOCUS_03"});\naxs.AuditRules.addRule({name:"unfocusableElementsWithOnClick", heading:"Elements with onclick handlers must be focusable", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_02", severity:axs.constants.Severity.WARNING, opt_requiresConsoleAPI:!0, relevantElementMatcher:function(a) {\n  return a instanceof a.ownerDocument.defaultView.HTMLBodyElement || axs.utils.isElementOrAncestorHidden(a) ? !1 : "click" in getEventListeners(a) ? !0 : !1;\n}, test:function(a) {\n  return !a.hasAttribute("tabindex") && !axs.utils.isElementImplicitlyFocusable(a) && !a.disabled;\n}, code:"AX_FOCUS_02"});\n(function() {\n  var a = /^aria\\-/, b = axs.utils.getSelectorForAriaProperties(axs.constants.ARIA_PROPERTIES);\n  axs.AuditRules.addRule({name:"unsupportedAriaAttribute", heading:"This element has an unsupported ARIA attribute", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_10", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n    return axs.browserUtils.matchSelector(a, b);\n  }, test:function(b) {\n    var d = axs.utils.getRoles(b, !0), d = d && d.applied ? d.applied.details.propertiesSet : axs.constants.GLOBAL_PROPERTIES;\n    b = b.attributes;\n    for (var e = 0, f = b.length;e < f;e++) {\n      var g = b[e].name;\n      if (a.test(g)) {\n        var h = g.replace(a, "");\n        if (axs.constants.ARIA_PROPERTIES.hasOwnProperty(h) && !(g in d)) {\n          return !0;\n        }\n      }\n    }\n    return !1;\n  }, code:"AX_ARIA_10"});\n})();\naxs.AuditRules.addRule({name:"videoWithoutCaptions", heading:"Video elements should use <track> elements to provide captions", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_video_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "video");\n}, test:function(a) {\n  return !a.querySelectorAll("track[kind=captions]").length;\n}, code:"AX_VIDEO_01"});\n\n  return axs;\n});\n\n// Define AMD module if possible, export globals otherwise.\nif (typeof define !== \'undefined\' && define.amd) {\n  define([], fn);\n} else {\n  var axs = fn.call(this);\n}\n\n';
    },
    function(e107, t) {
        e107.exports = function(e) {
            "function" == typeof execScript ? execScript(e) : eval.call(null, e);
        };
    },
    function(e, t, n) {
        n(41)(n(40));
    },
    function(e, t, n) {
        var r = n(22);
        "string" == typeof r && (r = [
            [
                e.id,
                r,
                ""
            ]
        ]);
        n(7)(r, {});
    },
    function(e, t, n) {
        var r = n(23);
        "string" == typeof r && (r = [
            [
                e.id,
                r,
                ""
            ]
        ]);
        n(7)(r, {});
    },
    function(e, t, n) {
        var r = n(24);
        "string" == typeof r && (r = [
            [
                e.id,
                r,
                ""
            ]
        ]);
        n(7)(r, {});
    },
    function(e, t, n) {
        var r = n(25);
        "string" == typeof r && (r = [
            [
                e.id,
                r,
                ""
            ]
        ]);
        n(7)(r, {});
    },
    function(e, t, n) {
        var r = n(26);
        "string" == typeof r && (r = [
            [
                e.id,
                r,
                ""
            ]
        ]);
        n(7)(r, {});
    },
    function(e, t, n) {
        var r = n(27);
        "string" == typeof r && (r = [
            [
                e.id,
                r,
                ""
            ]
        ]);
        n(7)(r, {});
    },
    function(e, t, n) {
        var r = n(28);
        "string" == typeof r && (r = [
            [
                e.id,
                r,
                ""
            ]
        ]);
        n(7)(r, {});
    }
]);

//# sourceMappingURL=index.976d0995.js.map
