!function() {
    "use strict";
    var t = !1;
    "undefined" != typeof Promise && Array.prototype.includes && "IntersectionObserver" in window || (t = "https://sdk.ocmhood.com/sdk/pf.js");
    var e = t,
        n = function(t) {
            for (var e = (t + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = window.atob(e), o = new Uint8Array(n.length), i = 0; i < n.length; ++i)
                o[i] = n.charCodeAt(i);
            return o
        };
    var i = function(t) {
            var e = {},
                n = document.createElement("a");
            n.href = t || window.location.href;
            for (var o = (n.search.substring(1) + "&" + n.hash.substring(1)).split("&"), i = 0; i < o.length; i++) {
                var r = o[i].split("=");
                "" != r[0] && (e[r[0]] = decodeURIComponent(r[1]))
            }
            return e
        },
        r = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "mobile" : "desktop"
        },
        s = function() {
            var t = "undefined" != location.protocol && "https:" === location.protocol;
            return "undefined" != location.protocol && t
        },
        a = function(t) {
            try {
                t = (new Date).getTimezoneOffset() / 60 * -1
            } catch (e) {
                t = 0
            }
            return t
        },
        c = function() {
            var t = "_lspf";
            try {
                var e = localStorage || window.sessionStorage;
                return e.setItem(t, t), e.removeItem(t), !0
            } catch (t) {
                return !1
            }
        },
        u = {},
        l = {
            on: function(t, e, n, o) {
                document.addEventListener ? t.addEventListener(e, n, o || !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n,
                u[e] && "e" == u[e] && l.send(e),
                u[e] = "r"
            },
            off: function(t, e, n, o) {
                t.removeEventListener ? t.removeEventListener(e, n, o || !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null,
                u[e] && delete u[e]
            },
            send: function(t) {
                if (u[t]) {
                    var e = new Event(t);
                    window.dispatchEvent(e)
                } else
                    u[t] = "e"
            }
        },
        d = function() {
            for (var t = {}, e = function(e) {
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = e[n])
                }, n = 0; n < arguments.length; n++)
                e(arguments[n]);
            return t
        };
    var f = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0,
        async: !0,
        onload: !0
    };
    function p(t, e, n) {
        var o,
            i = (n = n || document).createElement("script");
        i.text = t;
        var r = n.head || document.getElementsByTagName("head")[0],
            s = null;
        if (e) {
            var a = e.onload;
            for (o in e.onload = function() {
                s && s.parentNode.removeChild(i),
                a && a()
            }, f)
                e[o] && (i[o] = e[o])
        }
        s = r.appendChild(i)
    }
    function h(t, e, n) {
        var o,
            i,
            r = 0,
            s = [];
        if (function(t) {
            var e = !!t && t.length,
                n = x(t);
            if ("function" == typeof t || function(t) {
                return null != t && t === t.window
            }(t))
                return !1;
            return "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }(t))
            for (o = t.length; r < o; r++)
                null != (i = e(t[r], r, n)) && s.push(i);
        else
            for (r in t)
                null != (i = e(t[r], r, n)) && s.push(i);
        return v(s)
    }
    var v = function(t) {
        return [].concat.apply([], t)
    };
    function g(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }
    function m(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }
    var y = {},
        w = y.toString;
    function x(t) {
        return null == t ? t + "" : "object" == typeof t ? y[w.call(t)] || "object" : typeof t
    }
    function b(t, e, n) {
        return null == e ? -1 : [].indexOf.call(e, t, n)
    }
    function k(t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t,
            o = e && e.parentNode;
        return t === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(o)))
    }
    var _ = function(t, e) {
            for (var n = +e.length, o = 0, i = t.length; o < n; o++)
                t[i++] = e[o];
            return t.length = i, t
        },
        C = function(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? _([t], n) : n
        },
        A = function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        };
    function S(t, e, n, o) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
        var r = t + "=" + e + ";" + ("expires=" + i.toUTCString()) + ";path=/";
        return o && (r = r + ";domain=." + o), document.cookie = r, e
    }
    function E(t) {
        for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
            for (var i = n[o]; " " == i.charAt(0);)
                i = i.substring(1);
            if (0 == i.indexOf(e))
                return i.substring(e.length, i.length)
        }
        return ""
    }
    function P(t, e) {
        return t.replace(/{{\s?([^}]*)\s?}}/g, (function(t, n) {
            if (n = n.trim(), Array.isArray(e)) {
                for (let t = 0; t < e.length; t++) {
                    var o = N(e[t], n) || "";
                    if (o && (o = P(o, e)), o)
                        return o
                }
                return ""
            }
            return N(e, n) || ""
        }))
    }
    function N(t, e) {
        if (!t || !e)
            return "";
        var n = e.split("."),
            o = t[n[0]] || "";
        return n[1] ? (n.splice(0, 1), N(o, n.join("."))) : o
    }
    var I = function() {
            try {
                var t = !("undefined" == typeof window || !("localStorage" in window) || !c()),
                    e = {
                        t: r(),
                        s: s(),
                        z: a(),
                        c: t
                    };
                e.de = "undefined" != typeof document && document.characterSet || null,
                e.dt = "undefined" != typeof document && document.title || null,
                e.sd = "undefined" != typeof screen ? screen.colorDepth || screen.pixelDepth : 0,
                e.sr = "undefined" != typeof screen ? screen.width + "x" + screen.height : null,
                e.vp = "undefined" != typeof screen ? screen.availWidth + "x" + screen.availHeight : null;
                var n,
                    o,
                    i = navigator.userAgent,
                    u = i.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                return -1 != (o = -1 != i.indexOf("Edge") ? i.indexOf("Edge") : -1 != i.indexOf("Edg") ? i.indexOf("Edg") : -1 != i.indexOf("EdgA") ? i.indexOf("EdgA") : -1) ? (n = i.substring(o, o + 7).split("/"), d({
                    n: "edge",
                    v: n[1] || ""
                }, e)) : /trident/i.test(u[1]) ? (n = /\brv[ :]+(\d+)/g.exec(i) || [], d({
                    n: "ie",
                    v: n[1] || ""
                }, e)) : -1 != (o = i.indexOf("UCBrowser")) ? (n = i.substring(o, o + 12).split("/"), d({
                    n: "uc",
                    v: n[1] || ""
                }, e)) : -1 != (o = i.indexOf("OPR")) ? (n = i.substring(o, o + 6).split("/"), d({
                    n: "opera",
                    v: n[1] || ""
                }, e)) : -1 != (o = i.indexOf("YaBrowser")) ? (n = i.substring(o, o + 12).split("/"), d({
                    n: "yandex",
                    v: n[1] || ""
                }, e)) : (u = u[2] ? [u[1], u[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (n = i.match(/version\/(\d+)/i)) && u.splice(1, 1, n[1]), d({
                    n: u[0].toLowerCase(),
                    v: u[1].toLowerCase()
                }, e))
            } catch (t) {}
        }(),
        B = {
            activityurl: "https://t.ocmhood.com/v2/activity",
            crashurl: "https://t.ocmhood.com/v2/crashlytics",
            usersurl: "https://t.ocmhood.com/v2/users",
            conf_url: "https://cdn.ocmtag.com/tag/",
            pushserviceworker: "/sw.js",
            analytics: !1,
            crashlytics: !1,
            push: "",
            consent: !1
        },
        O = /<|&#?\w+;/,
        T = /^$|^module$|\/(?:java|ecma)script/i,
        z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        L = {
            thead: ["table"],
            col: ["colgroup", "table"],
            tr: ["tbody", "table"],
            td: ["tr", "tbody", "table"]
        };
    function q(t, e, n, o) {
        for (var i, r, s, a, c, u = e.createDocumentFragment(), l = [], d = 0, f = t.length; d < f; d++)
            if ((i = t[d]) || 0 === i)
                if ("object" === x(i))
                    _(l, i.nodeType ? [i] : i);
                else if (O.test(i)) {
                    for (r = r || u.appendChild(e.createElement("div")), s = (D.exec(i) || ["", ""])[1].toLowerCase(), c = (a = L[s] || []).length; --c > -1;)
                        r = r.appendChild(e.createElement(a[c]));
                    r.innerHTML = i,
                    _(l, r.childNodes),
                    (r = u.firstChild).textContent = ""
                } else
                    l.push(e.createTextNode(i));
        for (u.textContent = "", d = 0; i = l[d++];)
            if (!(n && b(i, n) > -1) && (H(i), r = C(u.appendChild(i), "script"), o))
                for (c = 0; i = r[c++];)
                    T.test(i.type || "") && o.push(i);
        return u
    }
    function M(t, e, n) {
        var o = 0,
            i = t.length,
            r = q(e = v(e), document, t),
            s = r.firstChild;
        if (1 === r.childNodes.length && (r = s), s) {
            for (var a = h(C(r, "script"), g), c = a.length; o < i; o++) {
                var u = r;
                n.call(t[o], u)
            }
            if (c) {
                var l = document;
                for (h(a, m), o = 0; o < c; o++) {
                    u = a[o];
                    T.test(u.type || "") && k(l, u) && p(u.textContent || u.text, u, l)
                }
            }
        }
    }
    L.tbody = L.tfoot = L.colgroup = L.caption = L.thead,
    L.th = L.td;
    var j = {
            html: function() {
                return M(this, arguments, (function(t) {
                    return t || null
                }))
            },
            replaceContent: function() {
                return this.empty().append.apply(this, arguments)
            },
            empty: function() {
                for (var t, e = 0; null != (t = this.el[e]); e++)
                    if (1 === t.nodeType)
                        for (; t.firstChild;)
                            t.removeChild(t.firstChild);
                return this
            },
            append: function() {
                M(this.el, arguments, (function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(t)
                }))
            },
            prepend: function() {
                return M(this.el, arguments, (function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(t, this.firstChild)
                }))
            },
            before: function() {
                return M(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            },
            after: function() {
                return M(this, arguments, (function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            },
            remove: function() {
                for (var t, e = 0; null != (t = this.el[e]); e++)
                    1 === t.nodeType && t.parentNode && t.parentNode.removeChild(t);
                return this
            }
        },
        R = function(t) {
            return this instanceof R ? (t && (this.el = function(t) {
                try {
                    return !!t.constructor.__proto__.prototype.constructor.name
                } catch (t) {
                    return !1
                }
            }(t) ? [t] : document.querySelectorAll(t), this.selector = t), this) : new R(t)
        };
    for (var U in j)
        R.prototype[U] = function(t) {
            return function() {
                return j[t].apply(this, arguments)
            }
        }(U);
    var H = function(t) {
            return k(t.ownerDocument, t) || t.getRootNode(V) === t.ownerDocument
        },
        V = {
            composed: !0
        };
    function J(t, e, n) {
        return "string" == typeof t || "<" === (o = t + "")[0] && ">" === o[o.length - 1] && o.length >= 3 ? ("boolean" == typeof e && (n = e, e = !1), e || ((i = (e = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, e.head.appendChild(i)), s = !n && [], (r = z.exec(t)) ? [e.createElement(r[1])] : (r = q([t], e, null, s), _([], r.childNodes))) : [];
        var o,
            i,
            r,
            s
    }
    function Q(t) {
        for (var e = {
                root: t
            }, n = t.querySelectorAll("[id]"), o = 0; o < n.length; o++) {
            e[n[o].getAttribute("id")] = n[o],
            n[o].removeAttribute("id")
        }
        return t.refs = e, e
    }
    document.documentElement.getRootNode || (H = function(t) {
        return k(t.ownerDocument, t)
    });
    var W,
        F,
        Y,
        X,
        Z,
        G,
        K = "_opc",
        $ = function() {
            var t = {},
                e = c(),
                n = localStorage || window.sessionStorage || null;
            !function() {
                if (e) {
                    var o = n.getItem(K),
                        i = {};
                    try {
                        i = JSON.parse(o)
                    } catch (t) {}
                    t = d(t, i)
                }
            }();
            var o = function() {
                if (e)
                    try {
                        n.setItem(K, JSON.stringify(t))
                    } catch (t) {}
            };
            return {
                setItem: function(e, n) {
                    t[e] = String(n),
                    o()
                },
                getItem: function(e) {
                    return t[e] ? t[e] : void 0
                },
                removeItem: function(e) {
                    delete t[e],
                    o()
                },
                clear: function() {
                    t = {},
                    o()
                }
            }
        }(),
        tt = (W = {}, F = function(t, e) {
            for (var n in t = t.toLowerCase(), W[t])
                if (W[t][n](), e)
                    break
        }, {
            add: function(t, e, n) {
                t = t.toLowerCase(),
                W[t] || (W[t] = []),
                W[t].push(e)
            },
            onPushAllow: function() {
                F("onPushAllow")
            },
            onPushBlock: function() {
                F("onPushBlock")
            },
            onPushGranted: function() {
                F("onPushGranted")
            },
            onPushBlocked: function() {
                F("onPushBlocked")
            },
            onPushClosed: function() {
                F("onPushClosed")
            },
            onPushShow: function() {
                F("onPushShow", !0)
            },
            onPushClose: function() {
                F("onPushClose")
            }
        }),
        et = (Y = function(t) {
            if (t.bi && "POST" == t.method && "sendBeacon" in navigator && navigator.sendBeacon(t.url, t.body))
                return Promise.resolve();
            var e = d({
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                mode: "no-cors"
            }, t);
            if ("fetch" in window)
                return fetch(e.url, e);
            function n(n) {
                var o = new XMLHttpRequest;
                o.onreadystatechange = function() {
                    if (o.readyState === XMLHttpRequest.DONE) {
                        var t = o.status;
                        n({
                            status: t,
                            text: o.responseText
                        })
                    }
                },
                o.open(e.method, e.url, !0),
                o.send(t.body || null)
            }
            if ("undefined" != typeof Promise)
                return new Promise((function(t) {
                    n(t)
                }));
            n((function() {}))
        }, {
            get: function(t) {
                return Y({
                    url: t,
                    method: "GET"
                })
            },
            post: function(t, e) {
                return Y({
                    url: t,
                    body: e
                })
            },
            bi: function(t, e, n) {
                Y({
                    url: t,
                    body: e,
                    method: n || "POST",
                    bi: !0
                })
            }
        }),
        nt = "_ht_v",
        ot = "_ht_s",
        it = {
            utm_campaign: null,
            utm_source: null,
            utm_click: null,
            utm_medium: null,
            utm_term: null,
            utm_content: null,
            utm_ht: null,
            utm_at: null
        },
        rt = {},
        st = {},
        at = {},
        ct = null,
        ut = null,
        lt = (X = location.hostname, Z = X.split("."), G = -2, Z.length > 2 && 2 === Z[Z.length - 1].length && Z[Z.length - 2].length <= 3 && (G = -3), Z.slice(G).join("."));
    function dt() {
        return B.consent && I.c
    }
    function ft(t) {
        if (dt()) {
            var e = parseInt(Date.parse(new Date) / 1e3),
                n = E(ot),
                o = !1;
            n || (o = !0, at.ns = 1, n = ht(e + ".1"));
            var i,
                r,
                s = n.split(".");
            if (2 === s.length)
                return t && !o && (i = s[0], r = e, Math.floor(i / 60 / 60 / 24) === Math.floor(r / 60 / 60 / 24) ? (s[1] = Number(s[1]) + 1, ht(s[0] + "." + s[1])) : ht(e + ".1")), at.sid = s[0], at.scn = Number(s[1]), s[0]
        }
    }
    function pt() {
        if (!dt())
            return 0;
        var t,
            e,
            n = (t = 1e9, e = 9999999999, Math.floor(Math.random() * (e - t + 1)) + t),
            o = parseInt(Date.parse(new Date) / 1e3),
            i = E(nt) || S(nt, o + "." + n, 365, lt);
        return at.cid = i, i
    }
    function ht(t) {
        return dt() ? (S(ot, t, .022, lt), t) : 0
    }
    function vt(t) {
        for (var e in t)
            return t;
        return null
    }
    var gt = function(t) {
            ft(t.code && t.code < 400),
            pt(),
            I.pe && (I.p = Notification.permission);
            var e = {
                app: window.location.hostname,
                dl: window.location.href,
                dr: document.referrer !== window.location.href && document.referrer || null,
                tmz: (new Date).getTimezoneOffset() / 60,
                code: 500,
                ver: "2.1.12",
                vt: $.getItem("vt"),
                msg: "",
                rid: ct,
                u: vt(it),
                e: vt(rt),
                r: vt(st),
                cs: vt(at),
                ua: I
            };
            return e = d(e, t), B.crashlytics && e.code >= 500 && (e.st = (new Error).stack), JSON.stringify(e, (function(t, e) {
                if (null !== e)
                    return e
            }))
        },
        mt = function(t, e) {
            return et.bi(B.activityurl, gt({
                code: t,
                msg: e
            }))
        },
        yt = {
            activity: function() {
                var t,
                    e,
                    n = $.getItem("vt") ? 205 : 200;
                mt(n),
                200 === n && $.setItem("vt", Math.round((new Date).getTime() / 1e3)),
                window.history && (t = window.history, e = t.pushState, t.pushState = function(n) {
                    return setTimeout((function() {
                        mt(205)
                    }), 0), e.apply(t, arguments)
                })
            },
            init: function() {
                for (var t in it) {
                    var e = $.getItem(t) || null;
                    e && (it[t] = e)
                }
                var n = i();
                for (var o in n)
                    (null === it[o] || it[o]) && (it[o] = decodeURIComponent(n[o]), $.setItem(o, it[o]))
            },
            token: function(t) {
                t = encodeURIComponent(t);
                var e = it.utm_campaign || it.utm_hid || it.utm_ht || null;
                e && e.substring(0, 8) == t.substring(0, 8) && (t = e, it.utm_campaign == t && (it.utm_campaign = null)),
                it.utm_ht = t,
                $.setItem("utm_ht", it.utm_ht)
            },
            track: function(t, e, n) {
                "string" == typeof t && ("object" == typeof e && (e = JSON.stringify(e)), rt[t] = decodeURIComponent(e)),
                n && mt(215)
            },
            retarget: function(t, e) {
                if ("string" == typeof t)
                    return st[t] = decodeURIComponent(e), ut ? et.bi(B.usersurl, gt({
                        code: 210,
                        s: ut
                    })) : void 0
            },
            utm: function(t, e) {
                var n = t.startsWith("utm_") ? t : "utm_" + t;
                "string" == typeof t && "string" == typeof e && n in it && (it[n] = e)
            },
            user: function(t, e) {
                return ut = t, et.bi(B.usersurl, gt({
                    code: e || 201,
                    s: t
                }))
            },
            user_id: function(t) {
                ct = t
            },
            beacon: mt,
            setPushData: function(t) {
                ut = t
            }
        },
        wt = window,
        xt = {
            config: B,
            url: wt && wt.location.href,
            hostname: wt && wt.location.hostname,
            path: wt && wt.location.pathname,
            referrer: document.referrer || "",
            query: i(),
            document: document,
            window: wt
        };
    function bt(t) {
        try {
            if (t.filters && !1 === kt(t))
                return !1;
            if (function(t, e) {
                let n = "",
                    i = (e || "").toLowerCase(),
                    r = i.indexOf(":");
                switch (r > -1 && (n = i.substring(0, r), i = i.substring(r + 1)), t = t.toLowerCase(), n) {
                case "neq":
                    return t != i;
                case "gt":
                    return t > i;
                case "gte":
                    return t >= i;
                case "lt":
                    o = "<";
                    break;
                case "lte":
                    return t <= i;
                case "~":
                    return t.match(i);
                case "eq":
                default:
                    return t == i
                }
            }(N(xt, t.key), t.match))
                return !0
        } catch (t) {}
        return !1
    }
    function kt(t) {
        if (!t.filters)
            return !0;
        for (var e = 0; e < t.filters.length; e++) {
            if (!1 !== bt(t.filters[e]))
                return !0
        }
        return !1
    }
    var _t = {
            bell: '<div style="position:fixed;z-index:2147483647;{{position}}bottom:{{offset_bottom}}px;left:{{offset_left}}px;right:{{offset_right}}px;display:flex;flex-direction:column;"><div id="dialog" style="visibility: hidden;border:2px solid #{{color_dialogs}};border-radius:10px;padding:20px;background-color:white;position:relative;bottom:20px;{{dialog_position}}"><p style="font-size:26px;color:#{{color_messages}};margin:0;padding:0;font-family:avenir, sans-serif;text-align:center;">{{title_when_sub}}</p><hr style="background:#{{color_messages}};height:2px;border:none;outline:none;margin:15px 0;"><button id="pushHide" ads="asd" style="cursor: pointer;background-color:#{{color_messages}};color:white;outline:none;border:none;padding:10px 20px;border-radius:5px;font-size:24px;width:100%;">{{btn_unsubscribe}}</button></div><div style="display:flex;align-items:center;justify-content:flex-end;{{bell_direction}}"><div id="tooltip" style="border:2px solid #{{color_tooltip}};height:40px;padding:0 15px;visibility: hidden;display:flex;align-items:center;margin-right:15px;border-radius:10px;background-color:white;{{tooltip_margin}}"><p style="text-align:center;color:#{{color_text}};margin:0;padding:0;font-family:avenir, sans-serif;">{{state_text}}</p></div><div style="background-color:#{{state_color}};border-radius:100%;width:{{size}}px;height:{{size}}px;display:flex;align-items:center;justify-content:center;cursor:pointer;"><div id="pushShow" style="background-color:#{{state_color}};border-radius:100%;border:1px solid #{{state_accent}};height:80%;width:80%;display:flex;align-items:center;justify-content:center;"><svg style="width:60%;" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0006 0.52946C16.0006 0.73946 15.0006 2.10946 14.7706 4.14946C5.10059 6.31946 4.43058 15.2395 4.86058 28.3095C4.45192 29.2258 3.8647 30.0515 3.13326 30.7383C2.40181 31.4251 1.54083 31.9592 0.600586 32.3095V34.6395H35.4406V32.1795C33.7331 31.5158 32.316 30.2687 31.4406 28.6595C32.2006 17.6395 31.0006 7.17946 21.2506 4.04946C21.0406 1.57946 19.9006 0.47946 17.9806 0.52946" fill="#{{state_accent}}"/><path d="M11.8896 37.1299H24.1596C23.452 38.065 22.5613 38.8462 21.5417 39.4256C20.5221 40.005 19.3952 40.3705 18.2296 40.4999C18.0898 40.5097 17.9495 40.5097 17.8096 40.4999C16.6446 40.378 15.5173 40.0166 14.4986 39.4384C13.4799 38.8602 12.5916 38.0776 11.8896 37.1399" fill="#{{state_accent}}"/></svg></div></div></div></div>',
            slide: '<div style="font-family:avenir next,avenir,sans-serif;box-shadow:0 0 7px rgba(0,0,0,.25);background-color:#fff;position:fixed;z-index:2147483647;top:0;left:50%;transform:translate(-50%,0);padding:20px 29px 17px;width:600px;border-radius:15px;border:1px solid #328df7;display:flex;flex-direction:column;align-items:center"><div style=display:flex;align-items:center;margin-bottom:20px><div style="border-radius: 20px; border: 2px solid white; background-color: #2196F3; display: flex; align-items: center; justify-content: center; min-width: 94px; width: 94px; height: 94px;"><img src="{{icon}}" style="width:50px; height: 50px;"></div><span style="color:#328df7;font-size:30px;margin-left:10px">{{state_text}}</span></div><div style="display:flex;align-items:center;flex-wrap:wrap;width:100%"><div id="ppxoptions" style="margin-right:20px;display:flex;align-items:center"></div></div><div style="align-self:end;margin-top:20px"><button id="pushHide" style="background-color:transparent;border:none;cursor:pointer;color:#328df7;font-size:20px">{{state_negative_button}}</button> <button id="pushShow" style="background-color:#328df7;color:#fff;border:none;border-radius:5px;font-size:20px;cursor:pointer;padding:5px 10px">{{state_positive_button}}</button></div></div>',
            link: '<div style="display:flex;flex-direction:column;align-items:flex-start;position:relative;z-index:2147483647;"><span style="color:#{{text_color}};">{{description}}</span><button id="pushShow" style="background-color:#{{button_color}};border:none;padding:0 20px;border-radius:10px;height:{{size}}px;margin-top:10px;cursor:pointer;color:#{{button_text_color}};">{{state_text}}</button></div>'
        },
        Ct = {};
    function At(t) {
        t = t ? 1e3 * t : 1,
        setTimeout((function() {
            l.send("pns.show")
        }), t)
    }
    function St(t, e, n) {
        if ("prompt" === n || e.visibility) {
            !function(t, e) {
                var n = "state_" + e;
                t.state_color = t[n] || "green"
            }(e, n),
            function(t, e) {
                var n = "state_text_" + e;
                t.state_text = t[n] || "Subscribe to notifications"
            }(e, n),
            function(t, e) {
                var n = "state_button_positive_" + e,
                    o = "state_button_negative_" + e;
                t.state_positive_button = t[n] || "Subscribe",
                t.state_negative_button = t[o] || "Unsubscribe"
            }(e, n);
            var o,
                i,
                r,
                s = e.html ? "<div>" + e.html + "</div>" : "",
                a = P(_t[t] || s, [e, xt]),
                c = null,
                u = {},
                d = (o = At, function() {
                    return o && (r = o.apply(i || this, arguments), o = null), r
                }),
                f = document.body || document,
                p = screen.width;
            if (a) {
                if (c = J(a, null, !1)[0], u = Q(c), ["link", "html"].includes(t)) {
                    var h = document.querySelectorAll(".ocamba-link-container");
                    h.length && (f = h[0])
                }
                u.ppxoptions && e.category && function(t, e) {
                    for (let o = 0; o < e.length; o++) {
                        var n = J(P('<div style="margin-right:20px;display:flex;align-items:center;"><input style="width:20px;height:20px;" type="checkbox" name="{{name}}" id="{{name}}"><label style="margin-left:5px;" for="{{name}}">{{label}}</label></div>', e[o]), null, !0)[0];
                        t.appendChild(n)
                    }
                }(u.ppxoptions, e.category || []),
                u.pushShow && l.on(u.pushShow, "click", (function(t) {
                    if (t.preventDefault(), c) {
                        e.visibility || (c.style.display = "none");
                        var n = c.querySelectorAll('input[type="checkbox"]:checked');
                        for (var o of n)
                            yt.track(o.name, o.value)
                    }
                    d()
                })),
                p <= 700 && "slide" === t && u.root && (u.root.style.width = "100%");
                var v = !1;
                "granted" === n && u.dialog && l.on(u.pushShow, "click", (function(t) {
                    v ? (u.dialog.style.visibility = "hidden", v = !1) : (u.dialog.style.visibility = "visible", v = !0)
                })),
                u.pushShow && u.tooltip && l.on(u.pushShow, "mouseover", (function(t) {
                    t.preventDefault(),
                    u.tooltip.style.visibility = "visible"
                })),
                u.pushShow && u.tooltip && l.on(u.pushShow, "mouseout", (function(t) {
                    t.preventDefault(),
                    u.tooltip.style.visibility = "hidden"
                })),
                u.pushHide && l.on(u.pushHide, "click", (function(t) {
                    t.preventDefault(),
                    c && (c.style.display = "none")
                }))
            }
            if ("native" === t) {
                var g = !0;
                e.onclick && (l.on(document, "click", (function() {
                    d(e.delay)
                })), g = !1),
                e.onscroll && (l.on(document, "scroll", (function() {
                    d(e.delay)
                })), g = !1),
                g && d(e.delay)
            }
            if (c) {
                g = !0;
                if (e.onclick && (l.on(document, "click", (function() {
                    setTimeout((function() {
                        f.appendChild(c)
                    }), e.delay ? 1e3 * e.delay : 1)
                })), g = !1), e.onscroll && (l.on(document, "scroll", (function() {
                    setTimeout((function() {
                        f.appendChild(c)
                    }), e.delay ? 1e3 * e.delay : 1)
                })), g = !1), e.delay && g) {
                    var m = e.delay ? 1e3 * e.delay : 1;
                    setTimeout((function() {
                        f.appendChild(c)
                    }), m),
                    g = !1
                }
                g && f.appendChild(c)
            }
        }
    }
    Ct.display = function(t, e) {
        if (t && t.prompts) {
            var n = t.prompts.filter(kt);
            if (n.length) {
                var o = n[0];
                St(o.prompt, o.options, e)
            }
        }
    };
    var Et,
        Pt,
        Nt,
        It,
        Bt,
        Ot,
        Tt,
        zt,
        Dt,
        Lt,
        qt,
        Mt,
        jt,
        Rt,
        Ut,
        Ht,
        Vt = (Nt = null, It = null, Bt = null, Ot = [], (Pt = I).pe = !1, Tt = !!Pt.c && (Et = "chrome" == Pt.n && Pt.v >= 46 || "firefox" == Pt.n && Pt.v >= 46 || "yandex" == Pt.n && Pt.v >= 15 || "safari" == Pt.n && Pt.v >= 16 || "opera" == Pt.n && (Pt.v >= 37 && "mobile" == Pt.t || Pt.v >= 43 && "desktop" == Pt.t) || "edge" == Pt.n && Pt.v >= 17 || Pt.v >= 12 && "uc" == Pt.n && "mobile" == Pt.t, Pt.pe = Et, Et), zt = function() {
            return new Promise((function(t) {
                if ("serviceWorker" in navigator) {
                    var e = B.customsw || B.pushserviceworker || "/sw.js",
                        n = B.serviceWorkerScope || e.substr(0, e.lastIndexOf("/") + 1);
                    navigator.serviceWorker.register(e, {
                        updateViaCache: "all",
                        scope: n
                    }).then((function(e) {
                        var n = e.installing || e.waiting || e.active;
                        if (!n)
                            throw new "sw is empty";
                        "activated" == n.state && t(e),
                        n.addEventListener("statechange", (function(n) {
                            "activated" == n.target.state && t(e)
                        }))
                    })).catch((function(e) {
                        yt.beacon(500, e.message),
                        t(!1)
                    }))
                } else
                    yt.beacon(505, "private"),
                    t(!1)
            }))
        }, Dt = function(t, e) {
            var o = 201,
                i = {
                    userVisibleOnly: !0
                };
            if (Lt()) {
                var r = n(Nt);
                i.applicationServerKey = r
            }
            t.pushManager.subscribe(i).then((function(t) {
                try {
                    var n = JSON.parse(JSON.stringify(t));
                    e && (n.rsub = e, o = 210)
                } catch (t) {
                    return
                }
                var i = [yt.user(n, o)];
                return 201 === o && i.push(yt.beacon(o)), Promise.all(i)
            })).then((function(t) {
                $.setItem("push", 1),
                tt.onPushAllow()
            })).catch((function(t) {
                yt.beacon(500, t.message)
            }))
        }, Lt = function() {
            var t = I;
            return !("chrome" == t.n && t.v < 52 || "firefox" == t.n && t.v < 46)
        }, qt = function(t, e) {
            switch (It = t) {
            case "denied":
                B.activity && yt.beacon(501),
                tt.onPushBlock();
                break;
            case "granted":
                zt().then((function(t) {
                    t && t.pushManager.getSubscription().then((function(e) {
                        if (e) {
                            var o = e.options,
                                i = n(Nt),
                                r = e.toJSON();
                            !function(t, e) {
                                if (t.byteLength != e.byteLength)
                                    return !1;
                                for (var n = new Int8Array(t), o = new Int8Array(e), i = 0; i != t.byteLength; i++)
                                    if (n[i] != o[i])
                                        return !1;
                                return !0
                            }(i, o.applicationServerKey) ? e.unsubscribe().then((function(e) {
                                Dt(t, r.endpoint)
                            })).catch((function(t) {
                                yt.beacon(500, t.message)
                            })) : $.getItem("push") && 1 == $.getItem("push") ? yt.setPushData(r) : Dt(t, r.endpoint)
                        } else
                            Dt(t);
                        jt(t)
                    }))
                }));
                break;
            case "closed":
                tt.onPushClosed();
                break;
            default:
                Ht()
            }
        }, Mt = function(t) {
            for (var e = 0; e < Ot.length; e++) {
                var n = Ot[e];
                t.showNotification(n.title || "Welcome", n.options || {}).then((function(t) {
                    "function" == typeof n.cb && n.cb(!0)
                }))
            }
        }, jt = function(t) {
            if (Ot.length)
                return t ? Mt(t) : void zt().then((function(t) {
                    t && Mt(t)
                }))
        }, Rt = function() {
            if ("undefined" != typeof Promise) {
                if ("safari" in window)
                    return new Promise((function(t) {
                        var e = Notification.permission;
                        "default" == e && (e = "prompt"),
                        t(Ut(e))
                    }));
                if (navigator.permissions)
                    return navigator.permissions.query({
                        name: "notifications"
                    }).then((function(t) {
                        return Bt || (Bt = !0, t.onchange = function() {
                            Ut(this.state) != It && qt(Ut(this.state))
                        }), Promise.resolve(Ut(t.state))
                    }));
                if (Bt || (Bt = !0, "complete" == document.readyState))
                    return Promise.resolve(Notification.permission);
                l.on(document, "readystatechange", (function() {
                    Rt().then((function(t) {
                        It != t && qt(t)
                    }))
                }))
            }
        }, Ut = function(t) {
            switch (t) {
            case "denied":
            case "blocked":
                return "denied";
            case "allowed":
            case "granted":
                return "granted";
            case "default":
                return "closed";
            default:
                return "prompt"
            }
        }, Ht = function(t) {
            if (!Lt()) {
                var e = document.createElement("link");
                e.rel = "manifest",
                e.href = "/manifest.json",
                document.getElementsByTagName("head")[0].appendChild(e)
            }
            "denied" != It && (tt.onPushShow(), B.activity && yt.beacon(202), Notification.requestPermission().then((function(t) {
                (t = Ut(t)) != It && qt(t)
            })))
        }, {
            register: function() {
                if (!(B.push.length < 85))
                    if (Tt) {
                        Nt = B.push;
                        var t = B.push_config;
                        Rt().then((function(e) {
                            It = e,
                            l.on(window, "pns.show", (function() {
                                "prompt" == It && Ht()
                            })),
                            "denied" === e && ($.removeItem("push"), tt.onPushBlocked()),
                            "closed" === e && ($.removeItem("push"), tt.onPushClosed()),
                            "granted" === e && (qt(e), tt.onPushGranted()),
                            t && Ct.display(t, e)
                        }))
                    } else
                        yt.beacon(505)
            },
            getPermission: Rt,
            showNotification: function(t, e) {
                t.cb = e,
                Ot.push(t),
                It && "granted" == It && jt()
            }
        });
    function Jt(t) {
        for (var e in t)
            if ("object" == typeof t[e] && ("string" != typeof (r = e) || isNaN(r) || isNaN(parseFloat(r))))
                Jt(t[e]);
            else {
                var n = R(t[e].i),
                    o = t[e].a;
                if (n[o]) {
                    var i = [P(t[e].c, xt)];
                    n[o](i)
                }
            }
        var r
    }
    function Qt(t) {
        try {
            !function() {
                for (var t = arguments[0], e = function(e) {
                        for (var n in e)
                            e.hasOwnProperty(n) && (t[n] = e[n])
                    }, n = 1; n < arguments.length; n++)
                    e(arguments[n])
            }(xt, t.md || {});
            var e = t.tags.filter(kt);
            e.length && Jt(e)
        } catch (t) {}
    }
    var Wt,
        Ft = (Wt = function(t) {
            t.type
        }, {
            register: function() {
                l.on(window, "error", Wt, !0)
            }
        }),
        Yt = {
            check: function(t) {
                var e = i(document.location.href);
                if (e.hood_status_check) {
                    var n = J('<div style="z-index:999;display:flex;align-items:center;justify-content:space-between;background-color:#17486d;padding:10px;border-radius:10px;border:2px solid white;width:90%;max-width:110rem;position:fixed;top:20px;left:50%;right:50%;transform:translate(-50%,50%);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA6VJREFUaEPtmf1xEzEQxXcrACqAVEBSAaQCkgogFWAqIKmAUAFJBaQDQgWECqADTAXL/DySRyfr9GVdmMxE/9m+k97bz7eyygNf+sDxyyOB/+3BxTxgZm9FZOUIXqrq9RJkhxNwwM9F5EUE+LeInI8mMoxABnhs+KFE9iZgZlj6i4i8bgyRWxE5U1UIda+9CJjZOxH5JCJPOxGsReSDql51vt9fRh14LD9i4YkuEl0ecGHzYw/Lx6TxxFFPOPUSoMp8HGH6YI8LVWXfptVLAOsfNp1UfvhOVY/Kj02f6CVgrQfVPK+qzXiaXzAzLI8HllgHrXnQQ4B6/20J9CJyrKr0h+rVQwB9Q+1fYtETLls27iFAvUaoLbGuVZXmWL16CPwZWP9joGtVfVaNXqStE5tZrv7/FZEnLYfPPNsURtUeKHRftD6xSwLWkDhzcjvVDJu6cguBryJykrDaT5Soqq5dic2RwEsrr3vM7E5EXib2vFHV0xpvVhEwM4BDIF4AAjxANst56iYBLPUsKhY5nfLaqaqyT3YVCZgZh/yaSdzkIe4dqtUbd/rWSzGajNeqQqmGAE0rHlYmoTBnIjPbzMSl2p4hcauqxzkXZAk4AHHT2oSC2/SwV8cHIUfd9yGI1+KcyFalWQIzmseDRw8xzHRJ4NCiQWmmMhHzFIGYBLPCNs/C95MEXAwj2MKbhRg8+4wkwH6eRJzYfIYEeTFZOwQceOI+1vs+FkMh911VW4f5CQAzw+Kvgi85B6BxOcYDiL0JiRSBVNJeuEYVV6MlCADwwPWceObeSeoUAeQCifXcW4VBw8zotO93XNgxhEQ5kBqOPqvqysxC3UUpvoorWi6JIQEZiDDq+cSNOcwmWKkJZYYjujBxTx4CnO6dnBNKZZQmRmkjRonNFInuRJ7xKolMvNP5CdGsvC42MicPfGlLkWiWwEEPIN5DGQF4zsLygE9pr3wVSrndufrEX3skLrWavZCQ5tvLLfcbgi5Z+4t9oBS7ziuUTxqPt2B1LiRi/35v5oIQICd8vU7W6YR4I698k6Q54tmmQX6IB2ZIbMpfzoNB4u7I6xrPFztxzyaRmpy9GjEzfyUzBDxYq6pQDamABM1nR7cE+oqhfTIE1ew/98wwAi6xfU7wn9jkotaFDjV9GPihHkjkxBZo4J2h4Bch4DxBA+IPvY2idcM7n4szbms4DQ2hSKQRLl6Sc3Xe9Q9MidBiBEoHj/r9kcAoS/bu8+A98A+ywYxAsaAJcAAAAABJRU5ErkJggg=="/><div style="color:white;display:flex;align-items:center;font-size:20px;"><svg id="ok" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#179f69" width="20" height="20" viewBox="0 0 448 448"><g></g><path d="M417.75 141.5c0 6.25-2.5 12.5-7 17l-215 215c-4.5 4.5-10.75 7-17 7s-12.5-2.5-17-7l-124.5-124.5c-4.5-4.5-7-10.75-7-17s2.5-12.5 7-17l34-34c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l73.5 73.75 164-164.25c4.5-4.5 10.75-7 17-7s12.5 2.5 17 7l34 34c4.5 4.5 7 10.75 7 17z"></path></svg><svg id="nok" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ff392f" width="20" height="20" viewBox="0 0 448 448"><g></g><path d="M272 328v56c0 8.75-7.25 16-16 16h-64c-8.75 0-16-7.25-16-16v-56c0-8.75 7.25-16 16-16h64c8.75 0 16 7.25 16 16zM279.5 64l-7 192c-0.25 8.75-7.75 16-16.5 16h-64c-8.75 0-16.25-7.25-16.5-16l-7-192c-0.25-8.75 6.75-16 15.5-16h80c8.75 0 15.75 7.25 15.5 16z"></path></svg><span style="margin:0 15px;" id="tag"></span></div><svg id="c" style="cursor:pointer;" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="30" height="30" viewBox="0 0 1024 1024"><g></g><path d="M827.734 242.133l-42.667-42.667c-6.4-6.4-17.067-6.4-23.467 0l-238.933 234.667c-6.4 6.4-17.067 6.4-23.467 0l-234.667-236.8c-6.4-6.4-17.067-6.4-23.467 0l-42.667 42.667c-6.4 6.4-6.4 17.067 0 23.467l236.8 236.8c6.4 6.4 6.4 17.067 0 23.467l-238.933 236.8c-6.4 6.4-6.4 17.067 0 23.467l42.667 42.667c6.4 6.4 17.067 6.4 23.467 0l236.8-236.8c6.4-6.4 17.067-6.4 23.467 0l236.8 236.8c6.4 6.4 17.067 6.4 23.467 0l42.667-42.667c6.4-6.4 6.4-17.067 0-23.467l-234.667-236.8c-6.4-6.4-6.4-17.067 0-23.467l236.8-236.8c6.4-4.267 6.4-14.933 0-21.333z"></path></svg></div>', null, !0)[0],
                        o = Q(n);
                    o.tag.textContent = e.hood_status_check,
                    l.on(o.c, "click", (function() {
                        n.remove()
                    }));
                    var r = "Hood tag found";
                    t.tag_id == e.hood_status_check ? o.nok.remove() : (r = "Hood tag NOT found", o.ok.remove()),
                    o.tag.textContent = r,
                    document.body.appendChild(n)
                }
            }
        },
        Xt = !1;
    function Zt(t) {
        if (!t)
            return e = B.tag_id, window[e] = function(t) {
                if (!Xt)
                    try {
                        Zt(t)
                    } catch (t) {}
            }, B.conf_url += B.conf_url.endsWith("/") ? "" : "/", void p("", {
                src: B.conf_url + e + ".js",
                async: 1
            });
        var e;
        for (var n in t)
            Gt.config(n, t[n]);
        B.analytics && (B.activity = !0),
        B.taggy && Qt(B.taggy),
        B.push.length > 85 && Vt.register(),
        B.activity && yt.activity(),
        B.crashlytics && Ft.register(),
        Xt = !0
    }
    var Gt = {
            utm: yt.utm,
            setuserid: yt.user_id,
            track: yt.track,
            tracksync: function() {
                yt.track(null, null, !0)
            },
            consent: function(t) {
                B.consent = t,
                t && yt.activity()
            },
            setpartnerid: yt.retarget,
            config: function(t, e) {
                B[t.toLowerCase()] = e
            },
            init: function(t, e) {
                Xt || (B.tag_id = t, yt.token(t), Zt(e))
            },
            requestpushpermission: function(t) {
                this.pushrequestpermission(t)
            },
            pushrequestpermission: function(t) {
                l.send("pns.show"),
                t && tt.add("onPushShow", t)
            },
            showpushmessage: function(t, e) {
                this.pushmessage(t, e)
            },
            pushmessage: function(t, e) {
                Vt.showNotification(t, e)
            },
            getpushstatus: function(t) {
                this.pushstatus(t)
            },
            pushstatus: function(t) {
                Vt.getPermission().then((function(e) {
                    t(e)
                }))
            },
            event: function(t, e, n) {
                e && tt.add(t, e, n)
            },
            snapshot: function() {}
        },
        Kt = function() {
            try {
                var t = arguments[0],
                    e = t[0].toLowerCase();
                if ("" != e && !Gt[e])
                    return;
                var n = Array.prototype.slice.call(t, 1);
                tt[e] ? tt.add(e, n[0]) : Gt[e] && Gt[e].apply(Gt, n)
            } catch (t) {
                yt.beacon(500, t.message)
            }
        };
    function $t() {
        var t = function(t) {
            if (i = document.currentScript && document.currentScript.src)
                return i;
            for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
                var o = new RegExp(t),
                    i = e[n].getAttribute("src");
                if (o.test(i))
                    return i
            }
        }("/sdk/ht.js");
        if (!t)
            return Yt.check(B);
        var e = i(t);
        if (!e.tag)
            return Yt.check(B);
        B.tag_id || (B.tag_id = e.tag),
        yt.init();
        var n = e.hf || "Hood";
        if (window[n] && window[n].q)
            for (var o = 0; o < window[n].q.length; o++) {
                var r = window[n].q[o];
                if (r.length) {
                    var s = r[0].toLowerCase();
                    Gt[s] && Kt(r)
                }
            }
        window[n] = function() {
            Kt(arguments)
        },
        Yt.check(B),
        Xt || (B.tag_id = e.tag, yt.token(B.tag_id), Zt())
    }
    e ? p("", {
        src: e,
        onload: $t,
        async: 1
    }) : $t()
}();
