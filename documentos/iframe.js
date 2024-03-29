/*! @license Firebase v3.7.5
    Build: 3.7.5-rc.1
    Terms: https://firebase.google.com/terms/ */
var firebase = null;
(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
      , ba = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
      , ca = ba(this)
      , l = this || self
      , n = function() {}
      , da = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , ea = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , p = function(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? da : ea;
        return p.apply(null, arguments)
    }
      , q = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
      , r = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.fa = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ea = function(d, e, g) {
            for (var k = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
                k[f - 2] = arguments[f];
            return b.prototype[e].apply(d, k)
        }
    };
    function t(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, t);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    r(t, Error);
    t.prototype.name = "CustomError";
    var v = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        t.call(this, c + a[d])
    };
    r(v, t);
    v.prototype.name = "AssertionError";
    var w = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var g = d
        } else
            a && (e += ": " + a,
            g = b);
        throw new v("" + e,g || []);
    }
      , x = function(a, b, c) {
        a || w("", null, b, Array.prototype.slice.call(arguments, 2))
    }
      , y = function(a, b, c) {
        if ("function" !== typeof a) {
            var d = typeof a;
            w("Expected function but got %s: %s.", ["object" != d ? d : a ? Array.isArray(a) ? "array" : d : "null", a], b, Array.prototype.slice.call(arguments, 2))
        }
    };
    var z = function(a, b) {
        this.X = 100;
        this.S = a;
        this.Y = b;
        this.D = 0;
        this.C = null
    };
    z.prototype.get = function() {
        if (0 < this.D) {
            this.D--;
            var a = this.C;
            this.C = a.next;
            a.next = null
        } else
            a = this.S();
        return a
    }
    ;
    z.prototype.put = function(a) {
        this.Y(a);
        this.D < this.X && (this.D++,
        a.next = this.C,
        this.C = a)
    }
    ;
    var B;
    a: {
        var C = l.navigator;
        if (C) {
            var D = C.userAgent;
            if (D) {
                B = D;
                break a
            }
        }
        B = ""
    }
    ;var fa = function() {
        var a = document;
        var b = "IFRAME";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    var E, ha = function() {
        var a = l.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == B.indexOf("Presto") && (a = function() {
            var e = fa();
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var g = e.contentWindow;
            e = g.document;
            e.open();
            e.close();
            var k = "callImmediate" + Math.random()
              , f = "file:" == g.location.protocol ? "*" : g.location.protocol + "//" + g.location.host;
            e = p(function(h) {
                if (("*" == f || h.origin == f) && h.data == k)
                    this.port1.onmessage()
            }, this);
            g.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    g.postMessage(k, f)
                }
            }
        }
        );
        if ("undefined" !== typeof a && -1 == B.indexOf("Trident") && -1 == B.indexOf("MSIE")) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.L;
                    c.L = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    L: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            l.setTimeout(e, 0)
        }
    };
    function F(a) {
        l.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;var G = function() {
        this.F = this.o = null
    };
    G.prototype.add = function(a, b) {
        var c = H.get();
        c.set(a, b);
        this.F ? this.F.next = c : (x(!this.o),
        this.o = c);
        this.F = c
    }
    ;
    G.prototype.remove = function() {
        var a = null;
        this.o && (a = this.o,
        this.o = this.o.next,
        this.o || (this.F = null),
        a.next = null);
        return a
    }
    ;
    var H = new z(function() {
        return new I
    }
    ,function(a) {
        return a.reset()
    }
    )
      , I = function() {
        this.next = this.scope = this.H = null
    };
    I.prototype.set = function(a, b) {
        this.H = a;
        this.scope = b;
        this.next = null
    }
    ;
    I.prototype.reset = function() {
        this.next = this.scope = this.H = null
    }
    ;
    var L = function(a, b) {
        J || ia();
        K || (J(),
        K = !0);
        ja.add(a, b)
    }, J, ia = function() {
        if (l.Promise && l.Promise.resolve) {
            var a = l.Promise.resolve(void 0);
            J = function() {
                a.then(ka)
            }
        } else
            J = function() {
                var b = ka;
                "function" !== typeof l.setImmediate || l.Window && l.Window.prototype && -1 == B.indexOf("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (E || (E = ha()),
                E(b)) : l.setImmediate(b)
            }
    }, K = !1, ja = new G, ka = function() {
        for (var a; a = ja.remove(); ) {
            try {
                a.H.call(a.scope)
            } catch (b) {
                F(b)
            }
            H.put(a)
        }
        K = !1
    };
    var O = function(a, b) {
        this.g = 0;
        this.R = void 0;
        this.s = this.i = this.m = null;
        this.B = this.G = !1;
        if (a != n)
            try {
                var c = this;
                a.call(b, function(d) {
                    M(c, 2, d)
                }, function(d) {
                    if (!(d instanceof N))
                        try {
                            if (d instanceof Error)
                                throw d;
                            throw Error("Promise rejected.");
                        } catch (e) {}
                    M(c, 3, d)
                })
            } catch (d) {
                M(this, 3, d)
            }
    }
      , la = function() {
        this.next = this.context = this.u = this.l = this.child = null;
        this.v = !1
    };
    la.prototype.reset = function() {
        this.context = this.u = this.l = this.child = null;
        this.v = !1
    }
    ;
    var ma = new z(function() {
        return new la
    }
    ,function(a) {
        a.reset()
    }
    )
      , na = function(a, b, c) {
        var d = ma.get();
        d.l = a;
        d.u = b;
        d.context = c;
        return d
    }
      , pa = function(a, b, c) {
        oa(a, b, c, null) || L(q(b, a))
    };
    O.prototype.then = function(a, b, c) {
        null != a && y(a, "opt_onFulfilled should be a function.");
        null != b && y(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return qa(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    }
    ;
    O.prototype.$goog_Thenable = !0;
    O.prototype.aa = function(a, b) {
        return qa(this, null, a, b)
    }
    ;
    O.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new N(a);
            L(function() {
                ra(this, b)
            }, this)
        }
    }
    ;
    var ra = function(a, b) {
        if (0 == a.g)
            if (a.m) {
                var c = a.m;
                if (c.i) {
                    for (var d = 0, e = null, g = null, k = c.i; k && (k.v || (d++,
                    k.child == a && (e = k),
                    !(e && 1 < d))); k = k.next)
                        e || (g = k);
                    e && (0 == c.g && 1 == d ? ra(c, b) : (g ? (d = g,
                    x(c.i),
                    x(null != d),
                    d.next == c.s && (c.s = d),
                    d.next = d.next.next) : sa(c),
                    ta(c, e, 3, b)))
                }
                a.m = null
            } else
                M(a, 3, b)
    }
      , va = function(a, b) {
        a.i || 2 != a.g && 3 != a.g || ua(a);
        x(null != b.l);
        a.s ? a.s.next = b : a.i = b;
        a.s = b
    }
      , qa = function(a, b, c, d) {
        var e = na(null, null, null);
        e.child = new O(function(g, k) {
            e.l = b ? function(f) {
                try {
                    var h = b.call(d, f);
                    g(h)
                } catch (m) {
                    k(m)
                }
            }
            : g;
            e.u = c ? function(f) {
                try {
                    var h = c.call(d, f);
                    void 0 === h && f instanceof N ? k(f) : g(h)
                } catch (m) {
                    k(m)
                }
            }
            : k
        }
        );
        e.child.m = a;
        va(a, e);
        return e.child
    };
    O.prototype.ba = function(a) {
        x(1 == this.g);
        this.g = 0;
        M(this, 2, a)
    }
    ;
    O.prototype.ca = function(a) {
        x(1 == this.g);
        this.g = 0;
        M(this, 3, a)
    }
    ;
    var M = function(a, b, c) {
        0 == a.g && (a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.g = 1,
        oa(c, a.ba, a.ca, a) || (a.R = c,
        a.g = b,
        a.m = null,
        ua(a),
        3 != b || c instanceof N || wa(a, c)))
    }
      , oa = function(a, b, c, d) {
        if (a instanceof O)
            return null != b && y(b, "opt_onFulfilled should be a function."),
            null != c && y(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
            va(a, na(b || n, c || null, d)),
            !0;
        if (a)
            try {
                var e = !!a.$goog_Thenable
            } catch (k) {
                e = !1
            }
        else
            e = !1;
        if (e)
            return a.then(b, c, d),
            !0;
        e = typeof a;
        if ("object" == e && null != a || "function" == e)
            try {
                var g = a.then;
                if ("function" === typeof g)
                    return xa(a, g, b, c, d),
                    !0
            } catch (k) {
                return c.call(d, k),
                !0
            }
        return !1
    }
      , xa = function(a, b, c, d, e) {
        var g = !1
          , k = function(h) {
            g || (g = !0,
            c.call(e, h))
        }
          , f = function(h) {
            g || (g = !0,
            d.call(e, h))
        };
        try {
            b.call(a, k, f)
        } catch (h) {
            f(h)
        }
    }
      , ua = function(a) {
        a.G || (a.G = !0,
        L(a.U, a))
    }
      , sa = function(a) {
        var b = null;
        a.i && (b = a.i,
        a.i = b.next,
        b.next = null);
        a.i || (a.s = null);
        null != b && x(null != b.l);
        return b
    };
    O.prototype.U = function() {
        for (var a; a = sa(this); )
            ta(this, a, this.g, this.R);
        this.G = !1
    }
    ;
    var ta = function(a, b, c, d) {
        if (3 == c && b.u && !b.v)
            for (; a && a.B; a = a.m)
                a.B = !1;
        if (b.child)
            b.child.m = null,
            ya(b, c, d);
        else
            try {
                b.v ? b.l.call(b.context) : ya(b, c, d)
            } catch (e) {
                za.call(null, e)
            }
        ma.put(b)
    }
      , ya = function(a, b, c) {
        2 == b ? a.l.call(a.context, c) : a.u && a.u.call(a.context, c)
    }
      , wa = function(a, b) {
        a.B = !0;
        L(function() {
            a.B && za.call(null, b)
        })
    }
      , za = F
      , N = function(a) {
        t.call(this, a)
    };
    r(N, t);
    N.prototype.name = "cancel";
    O.all = function(a) {
        return new O(function(b, c) {
            var d = a.length
              , e = [];
            if (d)
                for (var g = function(m, u) {
                    d--;
                    e[m] = u;
                    0 == d && b(e)
                }, k = function(m) {
                    c(m)
                }, f = 0, h; f < a.length; f++)
                    h = a[f],
                    pa(h, q(g, f), k);
            else
                b(e)
        }
        )
    }
    ;
    O.resolve = function(a) {
        if (a instanceof O)
            return a;
        var b = new O(n);
        M(b, 2, a);
        return b
    }
    ;
    O.reject = function(a) {
        return new O(function(b, c) {
            c(a)
        }
        )
    }
    ;
    O.prototype["catch"] = O.prototype.aa;
    var P = O;
    "undefined" !== typeof Promise && (P = Promise);
    function Q(a, b) {
        if (!(b instanceof Object))
            return b;
        switch (b.constructor) {
        case Date:
            return new Date(b.getTime());
        case Object:
            void 0 === a && (a = {});
            break;
        case Array:
            a = [];
            break;
        default:
            return b
        }
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = Q(a[c], b[c]));
        return a
    }
    ;var Aa = Error.captureStackTrace
      , S = function(a, b) {
        this.code = a;
        this.message = b;
        if (Aa)
            Aa(this, R.prototype.create);
        else {
            var c = Error.apply(this, arguments);
            this.name = "FirebaseError";
            Object.defineProperty(this, "stack", {
                get: function() {
                    return c.stack
                }
            })
        }
    };
    S.prototype = Object.create(Error.prototype);
    S.prototype.constructor = S;
    S.prototype.name = "FirebaseError";
    var R = function(a, b, c) {
        this.Z = a;
        this.$ = b;
        this.T = c;
        this.pattern = /\{\$([^}]+)}/g
    };
    R.prototype.create = function(a, b) {
        void 0 === b && (b = {});
        var c = this.T[a];
        a = this.Z + "/" + a;
        c = void 0 === c ? "Error" : c.replace(this.pattern, function(e, g) {
            e = b[g];
            return void 0 !== e ? e.toString() : "<" + g + "?>"
        });
        c = this.$ + ": " + c + " (" + a + ").";
        c = new S(a,c);
        for (var d in b)
            b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);
        return c
    }
    ;
    var Ba = P;
    function Ca(a, b) {
        a = new T(a,b);
        return a.subscribe.bind(a)
    }
    var T = function(a, b) {
        var c = this;
        this.h = [];
        this.P = 0;
        this.task = Ba.resolve();
        this.A = !1;
        this.J = b;
        this.task.then(function() {
            a(c)
        }).catch(function(d) {
            c.error(d)
        })
    };
    T.prototype.next = function(a) {
        U(this, function(b) {
            b.next(a)
        })
    }
    ;
    T.prototype.error = function(a) {
        U(this, function(b) {
            b.error(a)
        });
        this.close(a)
    }
    ;
    T.prototype.complete = function() {
        U(this, function(a) {
            a.complete()
        });
        this.close()
    }
    ;
    T.prototype.subscribe = function(a, b, c) {
        var d = this;
        if (void 0 === a && void 0 === b && void 0 === c)
            throw Error("Missing Observer.");
        var e = Da(a) ? a : {
            next: a,
            error: b,
            complete: c
        };
        void 0 === e.next && (e.next = V);
        void 0 === e.error && (e.error = V);
        void 0 === e.complete && (e.complete = V);
        a = this.da.bind(this, this.h.length);
        this.A && this.task.then(function() {
            try {
                d.M ? e.error(d.M) : e.complete()
            } catch (g) {}
        });
        this.h.push(e);
        return a
    }
    ;
    T.prototype.da = function(a) {
        void 0 !== this.h && void 0 !== this.h[a] && (delete this.h[a],
        --this.P,
        0 === this.P && void 0 !== this.J && this.J(this))
    }
    ;
    var U = function(a, b) {
        if (!a.A)
            for (var c = 0; c < a.h.length; c++)
                Ea(a, c, b)
    }
      , Ea = function(a, b, c) {
        a.task.then(function() {
            if (void 0 !== a.h && void 0 !== a.h[b])
                try {
                    c(a.h[b])
                } catch (d) {
                    "undefined" !== typeof console && console.error && console.error(d)
                }
        })
    };
    T.prototype.close = function(a) {
        var b = this;
        this.A || (this.A = !0,
        void 0 !== a && (this.M = a),
        this.task.then(function() {
            b.h = void 0;
            b.J = void 0
        }))
    }
    ;
    function Da(a) {
        if ("object" !== typeof a || null === a)
            return !1;
        var b = ["next", "error", "complete"];
        var c = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        b = c ? c.call(b) : {
            next: aa(b)
        };
        for (c = b.next(); !c.done; c = b.next())
            if (c = c.value,
            c in a && "function" === typeof a[c])
                return !0;
        return !1
    }
    function V() {}
    ;var W = P
      , X = function(a, b, c) {
        var d = this;
        this.N = c;
        this.O = !1;
        this.j = {};
        this.I = b;
        this.K = Q(void 0, a);
        a = "serviceAccount"in this.K;
        ("credential"in this.K || a) && "undefined" !== typeof console && console.log("The '" + (a ? "serviceAccount" : "credential") + "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");
        Object.keys(c.INTERNAL.factories).forEach(function(e) {
            var g = c.INTERNAL.useAsService(d, e);
            null !== g && (d[e] = d.W.bind(d, g))
        })
    };
    X.prototype.delete = function() {
        var a = this;
        return (new W(function(b) {
            Y(a);
            b()
        }
        )).then(function() {
            a.N.INTERNAL.removeApp(a.I);
            var b = [];
            Object.keys(a.j).forEach(function(c) {
                Object.keys(a.j[c]).forEach(function(d) {
                    b.push(a.j[c][d])
                })
            });
            return W.all(b.filter(function(c) {
                return "INTERNAL"in c
            }).map(function(c) {
                return c.INTERNAL.delete()
            }))
        }).then(function() {
            a.O = !0;
            a.j = {}
        })
    }
    ;
    X.prototype.W = function(a, b) {
        Y(this);
        "undefined" === typeof this.j[a] && (this.j[a] = {});
        var c = b || "[DEFAULT]";
        return "undefined" === typeof this.j[a][c] ? (b = this.N.INTERNAL.factories[a](this, this.V.bind(this), b),
        this.j[a][c] = b) : this.j[a][c]
    }
    ;
    X.prototype.V = function(a) {
        Q(this, a)
    }
    ;
    var Y = function(a) {
        a.O && Z("app-deleted", {
            name: a.I
        })
    };
    ca.Object.defineProperties(X.prototype, {
        name: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                Y(this);
                return this.I
            }
        },
        options: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                Y(this);
                return this.K
            }
        }
    });
    X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");
    function Fa() {
        function a(f) {
            f = f || "[DEFAULT]";
            var h = d[f];
            void 0 === h && Z("no-app", {
                name: f
            });
            return h
        }
        function b(f, h) {
            Object.keys(e).forEach(function(m) {
                m = c(f, m);
                if (null !== m && g[m])
                    g[m](h, f)
            })
        }
        function c(f, h) {
            if ("serverAuth" === h)
                return null;
            var m = h;
            f = f.options;
            "auth" === h && (f.serviceAccount || f.credential) && (m = "serverAuth",
            "serverAuth"in e || Z("sa-not-supported"));
            return m
        }
        var d = {}
          , e = {}
          , g = {}
          , k = {
            __esModule: !0,
            initializeApp: function(f, h) {
                void 0 === h ? h = "[DEFAULT]" : ("string" !== typeof h || "" === h) && Z("bad-app-name", {
                    name: h + ""
                });
                void 0 !== d[h] && Z("duplicate-app", {
                    name: h
                });
                f = new X(f,h,k);
                d[h] = f;
                b(f, "create");
                void 0 != f.INTERNAL && void 0 != f.INTERNAL.getToken || Q(f, {
                    INTERNAL: {
                        getUid: function() {
                            return null
                        },
                        getToken: function() {
                            return W.resolve(null)
                        },
                        addAuthTokenListener: function() {},
                        removeAuthTokenListener: function() {}
                    }
                });
                return f
            },
            app: a,
            apps: null,
            Promise: W,
            SDK_VERSION: "0.0.0",
            INTERNAL: {
                registerService: function(f, h, m, u, Ga) {
                    e[f] && Z("duplicate-service", {
                        name: f
                    });
                    e[f] = Ga ? h : function(A, Ha) {
                        return h(A, Ha, "[DEFAULT]")
                    }
                    ;
                    u && (g[f] = u);
                    u = function(A) {
                        void 0 === A && (A = a());
                        "function" !== typeof A[f] && Z("invalid-app-argument", {
                            name: f
                        });
                        return A[f]()
                    }
                    ;
                    void 0 !== m && Q(u, m);
                    return k[f] = u
                },
                createFirebaseNamespace: Fa,
                extendNamespace: function(f) {
                    Q(k, f)
                },
                createSubscribe: Ca,
                ErrorFactory: R,
                removeApp: function(f) {
                    b(d[f], "delete");
                    delete d[f]
                },
                factories: e,
                useAsService: c,
                Promise: O,
                deepExtend: Q
            }
        };
        k["default"] = k;
        Object.defineProperty(k, "apps", {
            get: function() {
                return Object.keys(d).map(function(f) {
                    return d[f]
                })
            }
        });
        a.App = X;
        return k
    }
    function Z(a, b) {
        throw Ia.create(a, b);
    }
    var Ia = new R("app","Firebase",{
        "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$name}",
        "duplicate-app": "Firebase App named '{$name}' already exists",
        "app-deleted": "Firebase App named '{$name}' already deleted",
        "duplicate-service": "Firebase service named '{$name}' already registered",
        "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain",
        "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance."
    });
    "undefined" !== typeof firebase && (firebase = Fa());
}
).call(this);
firebase.SDK_VERSION = "3.7.5";
(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var h, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ba = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , da = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, ea = da(this), fa = function(a, b) {
        if (b)
            a: {
                var c = ea;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ca(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }, ha;
    if ("function" == typeof Object.setPrototypeOf)
        ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                a: !0
            }
              , ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var la = ha
      , l = function(a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (la)
            la(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.$c = b.prototype
    };
    fa("Symbol", function(a) {
        if (a)
            return a;
        var b = function(e, f) {
            this.Tj = e;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            })
        };
        b.prototype.toString = function() {
            return this.Tj
        }
        ;
        var c = 0
          , d = function(e) {
            if (this instanceof d)
                throw new TypeError("Symbol is not a constructor");
            return new b("jscomp_symbol_" + (e || "") + "_" + c++,e)
        };
        return d
    });
    fa("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ma(aa(this))
                }
            })
        }
        return a
    });
    var ma = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
      , na = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    };
    fa("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    });
    fa("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return na(this, function(b, c) {
                return [b, c]
            })
        }
    });
    var pa = pa || {}
      , n = this || self
      , qa = /^[\w+/_-]+[=]{0,2}$/
      , ra = null
      , sa = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && qa.test(a) ? a : ""
    }
      , ta = function() {}
      , ua = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
      , va = function(a) {
        var b = ua(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
      , q = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
      , wa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , xa = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , r = function(a, b, c) {
        r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa : xa;
        return r.apply(null, arguments)
    }
      , ya = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
      , t = function(a, b) {
        a = a.split(".");
        var c = n;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    }
      , u = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.$c = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Wd = function(d, e, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
                g[k - 2] = arguments[k];
            return b.prototype[e].apply(d, g)
        }
    }
      , za = function(a) {
        return a
    };
    var Aa, Ba, Ca;
    var Da = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = b.cfg || {};
        b = b.cfg;
        if (!a)
            return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c)
            b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    };
    function Ea(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Ea);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    u(Ea, Error);
    Ea.prototype.name = "CustomError";
    var Fa;
    var Ga = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        Ea.call(this, c + a[d])
    };
    u(Ga, Ea);
    Ga.prototype.name = "AssertionError";
    var Ha = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else
            a && (e += ": " + a,
            f = b);
        throw new Ga("" + e,f || []);
    }
      , v = function(a, b, c) {
        a || Ha("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , Ia = function(a, b) {
        throw new Ga("Failure" + (a ? ": " + a : ""),Array.prototype.slice.call(arguments, 1));
    }
      , Ja = function(a, b, c) {
        "number" !== typeof a && Ha("Expected number but got %s: %s.", [ua(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , Ka = function(a, b, c) {
        "string" !== typeof a && Ha("Expected string but got %s: %s.", [ua(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
      , La = function(a, b, c) {
        "function" !== typeof a && Ha("Expected function but got %s: %s.", [ua(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
    var Ma = Array.prototype.indexOf ? function(a, b) {
        v(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , x = Array.prototype.forEach ? function(a, b, c) {
        v(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    ;
    function Na(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
            d in c && b.call(void 0, c[d], d, a)
    }
    var Oa = Array.prototype.filter ? function(a, b) {
        v(null != a.length);
        return Array.prototype.filter.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            }
        return d
    }
      , Pa = Array.prototype.map ? function(a, b) {
        v(null != a.length);
        return Array.prototype.map.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , Qa = Array.prototype.some ? function(a, b) {
        v(null != a.length);
        return Array.prototype.some.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    ;
    function Ra(a) {
        a: {
            var b = Sa;
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Ta(a, b) {
        return 0 <= Ma(a, b)
    }
    function Ua(a, b) {
        b = Ma(a, b);
        var c;
        (c = 0 <= b) && Va(a, b);
        return c
    }
    function Va(a, b) {
        v(null != a.length);
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }
    function Wa(a, b) {
        var c = 0;
        Na(a, function(d, e) {
            b.call(void 0, d, e, a) && Va(a, e) && c++
        })
    }
    function Xa(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Ya(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;var Za = function(a, b) {
        a: {
            try {
                var c = a && a.ownerDocument
                  , d = c && (c.defaultView || c.parentWindow);
                d = d || n;
                if (d.Element && d.Location) {
                    var e = d;
                    break a
                }
            } catch (g) {}
            e = null
        }
        if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
            if (q(a))
                try {
                    var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
                } catch (g) {
                    f = "<object could not be stringified>"
                }
            else
                f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            Ia("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, f)
        }
        return a
    };
    var $a = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , ab = /&/g
      , bb = /</g
      , cb = />/g
      , db = /"/g
      , eb = /'/g
      , fb = /\x00/g
      , gb = /[\x00&<>"']/
      , y = function(a, b) {
        return -1 != a.indexOf(b)
    }
      , hb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ib;
    a: {
        var jb = n.navigator;
        if (jb) {
            var kb = jb.userAgent;
            if (kb) {
                ib = kb;
                break a
            }
        }
        ib = ""
    }
    var z = function(a) {
        return y(ib, a)
    };
    var lb = function(a, b) {
        for (var c in a)
            b.call(void 0, a[c], c, a)
    }
      , mb = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
      , nb = function(a) {
        for (var b in a)
            return !1;
        return !0
    }
      , ob = function(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
      , pb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
      , qb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < pb.length; f++)
                c = pb[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var rb = function(a) {
        return "function" === typeof a
    };
    var sb, tb = function() {
        if (void 0 === sb) {
            var a = null
              , b = n.trustedTypes;
            if (b && b.createPolicy)
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: za,
                        createScript: za,
                        createScriptURL: za
                    })
                } catch (c) {
                    n.console && n.console.error(c.message)
                }
            sb = a
        }
        return sb
    };
    var xb = function(a, b) {
        this.Nh = a === ub && b || "";
        this.Uj = vb
    };
    xb.prototype.xd = !0;
    xb.prototype.wd = function() {
        return this.Nh
    }
    ;
    xb.prototype.toString = function() {
        return "Const{" + this.Nh + "}"
    }
    ;
    var yb = function(a) {
        if (a instanceof xb && a.constructor === xb && a.Uj === vb)
            return a.Nh;
        Ia("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }
      , vb = {}
      , ub = {};
    var Ab = function(a, b) {
        this.nh = b === zb ? a : ""
    };
    Ab.prototype.xd = !0;
    Ab.prototype.wd = function() {
        return this.nh.toString()
    }
    ;
    Ab.prototype.toString = function() {
        return this.nh + ""
    }
    ;
    var Bb = function(a) {
        if (a instanceof Ab && a.constructor === Ab)
            return a.nh;
        Ia("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ua(a));
        return "type_error:TrustedResourceUrl"
    }
      , Fb = function(a, b) {
        var c = yb(a);
        if (!Cb.test(c))
            throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Db, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e))
                throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof xb ? yb(d) : encodeURIComponent(String(d))
        });
        return Eb(a)
    }
      , Db = /%{(\w+)}/g
      , Cb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
      , zb = {}
      , Eb = function(a) {
        var b = tb();
        a = b ? b.createScriptURL(a) : a;
        return new Ab(a,zb)
    };
    var Hb = function(a, b) {
        this.mh = b === Gb ? a : ""
    };
    Hb.prototype.xd = !0;
    Hb.prototype.wd = function() {
        return this.mh.toString()
    }
    ;
    Hb.prototype.toString = function() {
        return this.mh.toString()
    }
    ;
    var Ib = function(a) {
        if (a instanceof Hb && a.constructor === Hb)
            return a.mh;
        Ia("expected object of type SafeUrl, got '" + a + "' of type " + ua(a));
        return "type_error:SafeUrl"
    }
      , Jb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i
      , Kb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
      , Lb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
      , Mb = function(a) {
        if (a instanceof Hb)
            return a;
        a = "object" == typeof a && a.xd ? a.wd() : String(a);
        if (Lb.test(a))
            a = new Hb(a,Gb);
        else {
            a = String(a);
            a = a.replace(/(%0A|%0D)/g, "");
            var b = a.match(Kb);
            a = b && Jb.test(b[1]) ? new Hb(a,Gb) : null
        }
        return a
    }
      , Nb = function(a) {
        if (a instanceof Hb)
            return a;
        a = "object" == typeof a && a.xd ? a.wd() : String(a);
        v(Lb.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez");
        return new Hb(a,Gb)
    }
      , Gb = {}
      , Ob = new Hb("about:invalid#zClosurez",Gb);
    var Qb = function(a, b, c) {
        this.lh = c === Pb ? a : ""
    };
    Qb.prototype.xd = !0;
    Qb.prototype.wd = function() {
        return this.lh.toString()
    }
    ;
    Qb.prototype.toString = function() {
        return this.lh.toString()
    }
    ;
    var Rb = function(a) {
        if (a instanceof Qb && a.constructor === Qb)
            return a.lh;
        Ia("expected object of type SafeHtml, got '" + a + "' of type " + ua(a));
        return "type_error:SafeHtml"
    }
      , Pb = {}
      , Sb = new Qb(n.trustedTypes && n.trustedTypes.emptyHTML || "",0,Pb);
    var Tb = function(a, b) {
        Ka(yb(a), "must provide justification");
        v(!/^[\s\xa0]*$/.test(yb(a)), "must provide non-empty justification");
        b = (a = tb()) ? a.createHTML(b) : b;
        return new Qb(b,null,Pb)
    };
    var Ub = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    }
      , Vb = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }(function() {
        if ("undefined" === typeof document)
            return !1;
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild)
            return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = Rb(Sb);
        return !b.parentElement
    })
      , Wb = function(a, b) {
        Za(a, "HTMLAnchorElement");
        b = b instanceof Hb ? b : Nb(b);
        a.href = Ib(b)
    }
      , Xb = function(a, b) {
        Za(a, "HTMLScriptElement");
        a.src = Bb(b);
        (b = a.ownerDocument && a.ownerDocument.defaultView) && b != n ? b = sa(b.document) : (null === ra && (ra = sa(n.document)),
        b = ra);
        b && a.setAttribute("nonce", b)
    }
      , Yb = function(a, b, c, d) {
        a = a instanceof Hb ? a : Nb(a);
        b = b || n;
        c = c instanceof xb ? yb(c) : c || "";
        return void 0 !== d ? b.open(Ib(a), c, d, void 0) : b.open(Ib(a), c)
    };
    var Zb = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
            d += c.shift() + e.shift();
        return d + c.join("%s")
    }
      , $b = function(a) {
        gb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(ab, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(bb, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(cb, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(db, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(eb, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(fb, "&#0;")));
        return a
    };
    var ac = function() {
        return z("iPhone") && !z("iPod") && !z("iPad")
    };
    var bc = function(a) {
        bc[" "](a);
        return a
    };
    bc[" "] = ta;
    var dc = function(a) {
        var b = cc;
        return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9)
    };
    var ec = z("Opera"), fc = z("Trident") || z("MSIE"), gc = z("Edge"), hc = gc || fc, ic = z("Gecko") && !(y(ib.toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"), jc = y(ib.toLowerCase(), "webkit") && !z("Edge"), kc = jc && z("Mobile"), lc = function() {
        var a = n.document;
        return a ? a.documentMode : void 0
    }, mc;
    a: {
        var nc = ""
          , oc = function() {
            var a = ib;
            if (ic)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (gc)
                return /Edge\/([\d\.]+)/.exec(a);
            if (fc)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (jc)
                return /WebKit\/(\S+)/.exec(a);
            if (ec)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        oc && (nc = oc ? oc[1] : "");
        if (fc) {
            var pc = lc();
            if (null != pc && pc > parseFloat(nc)) {
                mc = String(pc);
                break a
            }
        }
        mc = nc
    }
    var qc = mc, cc = {}, rc = function() {
        return dc(function() {
            for (var a = 0, b = $a(String(qc)).split("."), c = $a("9").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                var f = b[e] || ""
                  , g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length)
                        break;
                    a = hb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || hb(0 == f[2].length, 0 == g[2].length) || hb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == a)
            }
            return 0 <= a
        })
    }, sc;
    if (n.document && fc) {
        var tc = lc();
        sc = tc ? tc : parseInt(qc, 10) || void 0
    } else
        sc = void 0;
    var uc = sc;
    try {
        (new self.OffscreenCanvas(0,0)).getContext("2d")
    } catch (a) {}
    var vc;
    (vc = !fc) || (vc = 9 <= Number(uc));
    var wc = vc;
    var xc = function(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }
      , zc = function(a, b) {
        lb(b, function(c, d) {
            c && "object" == typeof c && c.xd && (c = c.wd());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : yc.hasOwnProperty(d) ? a.setAttribute(yc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
      , yc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }
      , Bc = function(a, b, c) {
        return Ac(document, arguments)
    }
      , Ac = function(a, b) {
        var c = String(b[0])
          , d = b[1];
        if (!wc && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', $b(d.name), '"');
            if (d.type) {
                c.push(' type="', $b(d.type), '"');
                var e = {};
                qb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = Cc(a, c);
        d && ("string" === typeof d ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : zc(c, d));
        2 < b.length && Dc(a, c, b, 2);
        return c
    }
      , Dc = function(a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!va(f) || q(f) && 0 < f.nodeType)
                e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (q(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                x(g ? Ya(f) : f, e)
            }
        }
    }
      , Cc = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
      , Ec = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
      , Fc = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
      , Gc = function(a) {
        v(a, "Node cannot be null or undefined.");
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
      , Hc = function(a) {
        this.de = a || n.document || document
    };
    h = Hc.prototype;
    h.getElementsByTagName = function(a, b) {
        return (b || this.de).getElementsByTagName(String(a))
    }
    ;
    h.ik = function(a, b, c) {
        return Ac(this.de, arguments)
    }
    ;
    h.createElement = function(a) {
        return Cc(this.de, a)
    }
    ;
    h.createTextNode = function(a) {
        return this.de.createTextNode(String(a))
    }
    ;
    h.getWindow = function() {
        var a = this.de;
        return a.parentWindow || a.defaultView
    }
    ;
    h.appendChild = function(a, b) {
        v(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    }
    ;
    h.append = function(a, b) {
        Dc(Gc(a), a, arguments, 1)
    }
    ;
    h.canHaveChildren = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    h.removeNode = Fc;
    h.isElement = function(a) {
        return q(a) && 1 == a.nodeType
    }
    ;
    h.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var A = window
      , Ic = document
      , Jc = /\[native code\]/
      , Kc = function(a, b, c) {
        return a[b] = a[b] || c
    }
      , Lc = function(a) {
        return !!a && "object" === typeof a && Jc.test(a.push)
    }
      , Mc = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a)
                return b;
        return -1
    }
      , Oc = function(a, b, c) {
        if (a)
            if (Lc(a)) {
                if (a) {
                    B(Lc(a), "arrayForEach was called with a non array value");
                    for (var d = 0; d < a.length; d++)
                        b.call(c, a[d], d)
                }
            } else
                for (d in B("object" === typeof a, "objectForEach was called with a non object value"),
                c = c || a,
                a)
                    Nc(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
    }
      , Pc = /&/g
      , Qc = /</g
      , Rc = />/g
      , Sc = /"/g
      , Tc = /'/g
      , Uc = function(a) {
        return String(a).replace(Pc, "&amp;").replace(Qc, "&lt;").replace(Rc, "&gt;").replace(Sc, "&quot;").replace(Tc, "&#39;")
    }
      , Vc = function() {
        var a;
        if ((a = Object.create) && Jc.test(a))
            a = a(null);
        else {
            a = {};
            for (var b in a)
                a[b] = void 0
        }
        return a
    }
      , Nc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , Wc = function(a, b) {
        a = a || {};
        for (var c in a)
            Nc(a, c) && (b[c] = a[c])
    }
      , B = function(a, b) {
        if (!a)
            throw Error(b || "");
    }
      , Xc = Kc(A, "gapi", {});
    var Yc = function(a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)","g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)","g");
        if (a = a && (d.exec(a) || b.exec(a)))
            try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
        return c
    }
      , Zc = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source)
      , $c = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g
      , ad = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,"g")
      , bd = /%([a-f]|[0-9a-fA-F][a-f])/g
      , cd = /^(https?|ftp|file|chrome-extension):$/i
      , dd = function(a) {
        a = String(a);
        a = a.replace($c, function(e) {
            try {
                return encodeURIComponent(e)
            } catch (f) {
                return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
            }
        }).replace(ad, function(e) {
            return e.replace(/%/g, "%25")
        }).replace(bd, function(e) {
            return e.toUpperCase()
        });
        a = a.match(Zc) || [];
        var b = Vc()
          , c = function(e) {
            return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
        }
          , d = !!(a[1] || "").match(cd);
        b.Wd = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
        d = function(e) {
            return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
        }
        ;
        b.query = a[5] ? [d(a[5])] : [];
        b.Ub = a[7] ? [d(a[7])] : [];
        return b
    }
      , ed = function(a) {
        return a.Wd + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Ub.length ? "#" + a.Ub.join("&") : "")
    }
      , fd = function(a, b) {
        var c = [];
        if (a)
            for (var d in a)
                if (Nc(a, d) && null != a[d]) {
                    var e = b ? b(a[d]) : a[d];
                    c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                }
        return c
    }
      , gd = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$","i")
      , hd = function(a, b) {
        var c = dd(b);
        b = c.Wd;
        c.query.length && (b += "?" + c.query.join(""));
        c.Ub.length && (b += "#" + c.Ub.join(""));
        var d = "";
        2E3 < b.length && (c = b,
        b = b.substr(0, 2E3),
        b = b.replace(gd, ""),
        d = c.substr(b.length));
        var e = a.createElement("div");
        a = a.createElement("a");
        c = dd(b);
        b = c.Wd;
        c.query.length && (b += "?" + c.query.join(""));
        c.Ub.length && (b += "#" + c.Ub.join(""));
        Wb(a, new Hb(b,Gb));
        e.appendChild(a);
        b = Tb(new xb(ub,"Assignment to self."), e.innerHTML);
        if (e.tagName && Ub[e.tagName.toUpperCase()])
            throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + e.tagName + ".");
        if (Vb())
            for (; e.lastChild; )
                e.removeChild(e.lastChild);
        e.innerHTML = Rb(b);
        b = String(e.firstChild.href);
        e.parentNode && e.parentNode.removeChild(e);
        c = dd(b + d);
        b = c.Wd;
        c.query.length && (b += "?" + c.query.join(""));
        c.Ub.length && (b += "#" + c.Ub.join(""));
        return b
    }
      , id = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var jd;
    var ld = function(a, b, c) {
        kd(a, b, c, "add", "at")
    }
      , kd = function(a, b, c, d, e) {
        if (a[d + "EventListener"])
            a[d + "EventListener"](b, c, !1);
        else if (a[e + "tachEvent"])
            a[e + "tachEvent"]("on" + b, c)
    }
      , md = function(a) {
        for (; a.firstChild; )
            a.removeChild(a.firstChild)
    };
    var nd = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//
      , od = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//
      , pd = function(a) {
        var b = Da("googleapis.config/sessionIndex");
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (b = window.__X_GOOG_AUTHUSER);
        "string" === typeof b && 254 < b.length && (b = null);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (a = a || window.location.href,
        b = Yc(a, "authuser") || null,
        null == b && (b = (b = a.match(nd)) ? b[1] : null));
        if (null == b)
            return null;
        b = String(b);
        254 < b.length && (b = null);
        return b
    }
      , qd = function(a) {
        var b = Da("googleapis.config/sessionDelegate");
        "string" === typeof b && 21 < b.length && (b = null);
        null == b && (b = (a = (a || window.location.href).match(od)) ? a[1] : null);
        if (null == b)
            return null;
        b = String(b);
        21 < b.length && (b = null);
        return b
    };
    var rd;
    rd = Kc(A, "___jsl", Vc());
    Kc(rd, "I", 0);
    Kc(rd, "hel", 10);
    var sd, td, ud = void 0, vd = function(a) {
        try {
            return n.JSON.parse.call(n.JSON, a)
        } catch (b) {
            return !1
        }
    }, wd = function(a) {
        return Object.prototype.toString.call(a)
    }, xd = wd(0), yd = wd(new Date(0)), zd = wd(!0), Ad = wd(""), Bd = wd({}), Cd = wd([]), Dd = function(a, b) {
        if (b)
            for (var c = 0, d = b.length; c < d; ++c)
                if (a === b[c])
                    throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = wd(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== Cd || a.constructor !== Array && a.constructor !== Object) && (e !== Bd || a.constructor !== Array && a.constructor !== Object) && e !== Ad && e !== xd && e !== zd && e !== yd))
                return Dd(a.toJSON.call(a), c);
            if (null == a)
                b[b.length] = "null";
            else if (e === xd)
                a = Number(a),
                isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"),
                b[b.length] = String(a);
            else if (e === zd)
                b[b.length] = String(!!Number(a));
            else {
                if (e === yd)
                    return Dd(a.toISOString.call(a), c);
                if (e === Cd && wd(a.length) === xd) {
                    b[b.length] = "[";
                    var f = 0;
                    for (d = Number(a.length) >> 0; f < d; ++f)
                        f && (b[b.length] = ","),
                        b[b.length] = Dd(a[f], c) || "null";
                    b[b.length] = "]"
                } else if (e == Ad && wd(a.length) === xd) {
                    b[b.length] = '"';
                    f = 0;
                    for (c = Number(a.length) >> 0; f < c; ++f)
                        d = String.prototype.charAt.call(a, f),
                        e = String.prototype.charCodeAt.call(a, f),
                        b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                    b[b.length] = '"'
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (f in a)
                        Object.prototype.hasOwnProperty.call(a, f) && (e = Dd(a[f], c),
                        void 0 !== e && (d++ && (b[b.length] = ","),
                        b[b.length] = Dd(f),
                        b[b.length] = ":",
                        b[b.length] = e));
                    b[b.length] = "}"
                } else
                    return
            }
            return b.join("")
        }
    }, Ed = /[\0-\x07\x0b\x0e-\x1f]/, Fd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/, Gd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/, Hd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/, Id = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g, Jd = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g, Kd = /[ \t\n\r]+/g, Ld = /[^"]:/, Md = /""/g, Nd = /true|false|null/g, Od = /00/, Pd = /[\{]([^0\}]|0[^:])/, Qd = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/, Rd = /[^\[,:][\[\{]/, Sd = /^(\{|\}|\[|\]|,|:|0)+/, Td = /\u2028/g, Ud = /\u2029/g, Vd = function(a) {
        a = String(a);
        if (Ed.test(a) || Fd.test(a) || Gd.test(a) || Hd.test(a))
            return !1;
        var b = a.replace(Id, '""');
        b = b.replace(Jd, "0");
        b = b.replace(Kd, "");
        if (Ld.test(b))
            return !1;
        b = b.replace(Md, "0");
        b = b.replace(Nd, "0");
        if (Od.test(b) || Pd.test(b) || Qd.test(b) || Rd.test(b) || !b || (b = b.replace(Sd, "")))
            return !1;
        a = a.replace(Td, "\\u2028").replace(Ud, "\\u2029");
        b = void 0;
        try {
            b = ud ? [vd(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (c) {
            return !1
        }
        return b && 1 === b.length ? b[0] : !1
    }, Wd = function() {
        var a = ((n.document || {}).scripts || []).length;
        if ((void 0 === sd || void 0 === ud || td !== a) && -1 !== td) {
            sd = ud = !1;
            td = -1;
            try {
                try {
                    ud = !!n.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === n.JSON.stringify.call(n.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === vd("true") && 3 === vd('[{"a":3}]')[0].a
                } catch (b) {}
                sd = ud && !vd("[00]") && !vd('"\u0007"') && !vd('"\\0"') && !vd('"\\v"')
            } finally {
                td = a
            }
        }
    }, Xd = function(a) {
        if (-1 === td)
            return !1;
        Wd();
        return (sd ? vd : Vd)(a)
    }, Yd = function(a) {
        if (-1 !== td)
            return Wd(),
            ud ? n.JSON.stringify.call(n.JSON, a) : Dd(a)
    }, Zd = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(), $d = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
    };
    Date.prototype.toISOString = Zd ? $d : Date.prototype.toISOString;
    var ae = function() {
        this.Ta = -1
    };
    var be = function() {
        this.Ta = 64;
        this.Da = [];
        this.qg = [];
        this.Vj = [];
        this.Cf = [];
        this.Cf[0] = 128;
        for (var a = 1; a < this.Ta; ++a)
            this.Cf[a] = 0;
        this.nc = this.zd = 0;
        this.reset()
    };
    u(be, ae);
    be.prototype.reset = function() {
        this.Da[0] = 1732584193;
        this.Da[1] = 4023233417;
        this.Da[2] = 2562383102;
        this.Da[3] = 271733878;
        this.Da[4] = 3285377520;
        this.nc = this.zd = 0
    }
    ;
    var ce = function(a, b, c) {
        c || (c = 0);
        var d = a.Vj;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++)
                d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3),
                c += 4;
        else
            for (e = 0; 16 > e; e++)
                d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3],
                c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.Da[0];
        c = a.Da[1];
        var g = a.Da[2]
          , k = a.Da[3]
          , m = a.Da[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = k ^ c & (g ^ k);
                    var p = 1518500249
                } else
                    f = c ^ g ^ k,
                    p = 1859775393;
            else
                60 > e ? (f = c & g | k & (c | g),
                p = 2400959708) : (f = c ^ g ^ k,
                p = 3395469782);
            f = (b << 5 | b >>> 27) + f + m + p + d[e] & 4294967295;
            m = k;
            k = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.Da[0] = a.Da[0] + b & 4294967295;
        a.Da[1] = a.Da[1] + c & 4294967295;
        a.Da[2] = a.Da[2] + g & 4294967295;
        a.Da[3] = a.Da[3] + k & 4294967295;
        a.Da[4] = a.Da[4] + m & 4294967295
    };
    be.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.Ta, d = 0, e = this.qg, f = this.zd; d < b; ) {
                if (0 == f)
                    for (; d <= c; )
                        ce(this, a, d),
                        d += this.Ta;
                if ("string" === typeof a)
                    for (; d < b; ) {
                        if (e[f] = a.charCodeAt(d),
                        ++f,
                        ++d,
                        f == this.Ta) {
                            ce(this, e);
                            f = 0;
                            break
                        }
                    }
                else
                    for (; d < b; )
                        if (e[f] = a[d],
                        ++f,
                        ++d,
                        f == this.Ta) {
                            ce(this, e);
                            f = 0;
                            break
                        }
            }
            this.zd = f;
            this.nc += b
        }
    }
    ;
    be.prototype.digest = function() {
        var a = []
          , b = 8 * this.nc;
        56 > this.zd ? this.update(this.Cf, 56 - this.zd) : this.update(this.Cf, this.Ta - (this.zd - 56));
        for (var c = this.Ta - 1; 56 <= c; c--)
            this.qg[c] = b & 255,
            b /= 256;
        ce(this, this.qg);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8)
                a[b] = this.Da[c] >> d & 255,
                ++b;
        return a
    }
    ;
    var de = function() {
        this.Hh = new be
    };
    h = de.prototype;
    h.reset = function() {
        this.Hh.reset()
    }
    ;
    h.updateByteArray = function(a) {
        this.Hh.update(a)
    }
    ;
    h.digestByteArray = function() {
        return this.Hh.digest()
    }
    ;
    h.updateString = function(a) {
        a = unescape(encodeURIComponent(a));
        for (var b = [], c = 0, d = a.length; c < d; ++c)
            b.push(a.charCodeAt(c));
        this.updateByteArray(b)
    }
    ;
    h.digestString = function() {
        for (var a = this.digestByteArray(), b = "", c = 0; c < a.length; c++)
            b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
        return b
    }
    ;
    var ee = A.crypto
      , ge = !1
      , he = 0
      , ie = 0
      , je = 1
      , ke = 0
      , le = ""
      , me = function(a) {
        a = a || A.event;
        var b = a.screenX + a.clientX << 16;
        b += a.screenY + a.clientY;
        b *= (new Date).getTime() % 1E6;
        je = je * b % ke;
        0 < he && ++ie == he && kd(A, "mousemove", me, "remove", "de")
    }
      , ne = function(a) {
        var b = new de;
        b.updateString(a);
        return b.digestString()
    };
    ge = !!ee && "function" == typeof ee.getRandomValues;
    ge || (ke = 1E6 * (screen.width * screen.width + screen.height),
    le = ne(Ic.cookie + "|" + Ic.location + "|" + (new Date).getTime() + "|" + Math.random()),
    he = Da("random/maxObserveMousemove") || 0,
    0 != he && ld(A, "mousemove", me));
    var oe = function() {
        var a = rd.onl;
        if (!a) {
            a = Vc();
            rd.onl = a;
            var b = Vc();
            a.e = function(c) {
                var d = b[c];
                d && (delete b[c],
                d())
            }
            ;
            a.a = function(c, d) {
                b[c] = d
            }
            ;
            a.r = function(c) {
                delete b[c]
            }
        }
        return a
    }
      , pe = function(a, b) {
        b = b.onload;
        return "function" === typeof b ? (oe().a(a, b),
        b) : null
    }
      , qe = function(a) {
        B(/^\w+$/.test(a), "Unsupported id - " + a);
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    }
      , re = function(a) {
        oe().r(a)
    };
    var se = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    }
      , te = {
        allowtransparency: !0,
        onload: !0
    }
      , ue = 0
      , ve = function(a, b) {
        var c = 0;
        do
            var d = b.id || ["I", ue++, "_", (new Date).getTime()].join("");
        while (a.getElementById(d) && 5 > ++c);
        B(5 > c, "Error creating iframe id");
        return d
    }
      , we = function(a, b) {
        return a ? b + "/" + a : ""
    }
      , xe = function(a, b, c, d) {
        var e = {}
          , f = {};
        a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
        Wc(d.queryParams || {}, e);
        Wc(d.fragmentParams || {}, f);
        var g = d.pfname;
        var k = Vc();
        Da("iframes/dropLegacyIdParam") || (k.id = c);
        k._gfid = c;
        k.parent = a.location.protocol + "//" + a.location.host;
        c = Yc(a.location.href, "parent");
        g = g || "";
        !g && c && (g = Yc(a.location.href, "_gfid", "") || Yc(a.location.href, "id", ""),
        g = we(g, Yc(a.location.href, "pfname", "")));
        g || (c = Xd(Yc(a.location.href, "jcp", ""))) && "object" == typeof c && (g = we(c.id, c.pfname));
        k.pfname = g;
        d.connectWithJsonParam && (g = {},
        g.jcp = Yd(k),
        k = g);
        g = Yc(b, "rpctoken") || e.rpctoken || f.rpctoken;
        if (!g) {
            if (!(g = d.rpctoken)) {
                g = String;
                c = Math;
                var m = c.round;
                if (ge) {
                    var p = new A.Uint32Array(1);
                    ee.getRandomValues(p);
                    p = Number("0." + p[0])
                } else
                    p = je,
                    p += parseInt(le.substr(0, 20), 16),
                    le = ne(le),
                    p /= ke + Math.pow(16, 20);
                g = g(m.call(c, 1E8 * p))
            }
            k.rpctoken = g
        }
        d.rpctoken = g;
        Wc(k, d.connectWithQueryParams ? e : f);
        k = a.location.href;
        a = Vc();
        (g = Yc(k, "_bsh", rd.bsh)) && (a._bsh = g);
        (k = rd.dpo ? rd.h : Yc(k, "jsh", rd.h)) && (a.jsh = k);
        d.hintInFragment ? Wc(a, f) : Wc(a, e);
        d = d.paramsSerializer;
        b = dd(b);
        b.query.push.apply(b.query, fd(e, d));
        b.Ub.push.apply(b.Ub, fd(f, d));
        return ed(b)
    }
      , ye = function(a) {
        B(!a || id.test(a), "Illegal url for new iframe - " + a)
    }
      , ze = function(a, b, c, d, e) {
        ye(c.src);
        var f, g = pe(d, c), k = g ? qe(d) : "";
        try {
            document.all && (f = a.createElement('<iframe frameborder="' + Uc(String(c.frameborder)) + '" scrolling="' + Uc(String(c.scrolling)) + '" ' + k + ' name="' + Uc(String(c.name)) + '"/>'))
        } catch (p) {} finally {
            f || (f = (a ? new Hc(Gc(a)) : Fa || (Fa = new Hc)).ik("IFRAME"),
            g && (f.onload = function() {
                f.onload = null;
                g.call(this)
            }
            ,
            re(d)))
        }
        f.setAttribute("ng-non-bindable", "");
        for (var m in c)
            a = c[m],
            "style" === m && "object" === typeof a ? Wc(a, f.style) : te[m] || f.setAttribute(m, String(a));
        (m = e && e.beforeNode || null) || e && e.dontclear || md(b);
        b.insertBefore(f, m);
        f = m ? m.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    };
    var Ae = /^:[\w]+$/
      , Be = /:([a-zA-Z_]+):/g
      , Ce = function(a, b) {
        a = pd() || "0";
        var c = qd();
        var d = pd(void 0) || a;
        var e = qd(void 0)
          , f = "";
        d && (f += "u/" + encodeURIComponent(String(d)) + "/");
        e && (f += "b/" + encodeURIComponent(String(e)) + "/");
        d = f || null;
        (f = (e = !1 === Da("isLoggedIn")) ? "_/im/" : "") && (d = "");
        var g = Da("iframes/:socialhost:")
          , k = Da("iframes/:im_socialhost:");
        jd = {
            socialhost: g,
            ctx_socialhost: e ? k : g,
            session_index: a,
            session_delegate: c,
            session_prefix: d,
            im_prefix: f
        };
        return jd[b] || ""
    }
      , De = function(a) {
        var b = a;
        Ae.test(a) && (b = Da("iframes/" + b.substring(1) + "/url"),
        B(!!b, "Unknown iframe url config for - " + a));
        return hd(Ic, b.replace(Be, Ce))
    }
      , Ee = function(a, b, c) {
        c = c || {};
        var d = c.attributes || {};
        B(!(c.allowPost || c.forcePost) || !d.onload, "onload is not supported by post iframe (allowPost or forcePost)");
        a = De(a);
        d = b.ownerDocument || Ic;
        var e = ve(d, c);
        a = xe(d, a, e, c);
        var f = c
          , g = Vc();
        Wc(se, g);
        Wc(f.attributes, g);
        g.name = g.id = e;
        g.src = a;
        c.eurl = a;
        c = (f = c) || {};
        var k = !!c.allowPost;
        if (c.forcePost || k && 2E3 < a.length) {
            c = dd(a);
            g.src = "";
            f.dropDataPostorigin || (g["data-postorigin"] = a);
            a = ze(d, b, g, e);
            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                var m = a.contentWindow.document;
                m.open();
                g = m.createElement("div");
                k = {};
                var p = e + "_inner";
                k.name = p;
                k.src = "";
                k.style = "display:none";
                ze(d, g, k, p, f)
            }
            g = (f = c.query[0]) ? f.split("&") : [];
            f = [];
            for (k = 0; k < g.length; k++)
                p = g[k].split("=", 2),
                f.push([decodeURIComponent(p[0]), decodeURIComponent(p[1])]);
            c.query = [];
            g = ed(c);
            B(id.test(g), "Invalid URL: " + g);
            c = d.createElement("form");
            c.method = "POST";
            c.target = e;
            c.style.display = "none";
            e = g instanceof Hb ? g : Nb(g);
            Za(c, "HTMLFormElement").action = Ib(e);
            for (e = 0; e < f.length; e++)
                g = d.createElement("input"),
                g.type = "hidden",
                g.name = f[e][0],
                g.value = f[e][1],
                c.appendChild(g);
            b.appendChild(c);
            c.submit();
            c.parentNode.removeChild(c);
            m && m.close();
            b = a
        } else
            b = ze(d, b, g, e, f);
        return b
    };
    window.osapi = window.osapi || {};
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        csi: {
            rate: .01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            appfinder: {
                url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            useGapiForXd3: !0,
            xd3: "/static/proxy.html",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        },
        client: {
            perApiBatch: !0
        }
    });
    var Fe = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    }
      , Ge = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }
      , He = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    }
      , Ie = function(a, b, c) {
        if (b && "object" === typeof b)
            for (var d in b)
                !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !He(a[d]) && !He(b[d]) ? Ie(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = He(b[d]) ? [] : {},
                Ie(a[d], b[d])) : a[d] = b[d])
    }
      , Je = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1); )
                a = a.substring(0, a.length - 1);
            try {
                var b = window.JSON.parse(a)
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {}
            return "object" === typeof b ? b : {}
        }
    }
      , Ke = function(a, b) {
        var c = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
        Ie(c, b);
        a.push(c)
    }
      , Le = function(a) {
        Ge(!0);
        var b = window.___gcfg
          , c = Fe("cu")
          , d = window.___gu;
        b && b !== d && (Ke(c, b),
        window.___gu = b);
        b = Fe("cu");
        var e = document.scripts || document.getElementsByTagName("script") || [];
        d = [];
        var f = [];
        f.push.apply(f, Fe("us"));
        for (var g = 0; g < e.length; ++g)
            for (var k = e[g], m = 0; m < f.length; ++m)
                k.src && 0 == k.src.indexOf(f[m]) && d.push(k);
        0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e)
            d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0),
            (f = d[e]) ? (g = f.nodeType,
            f = 3 == g || 4 == g ? f.nodeValue : f.textContent || "") : f = void 0,
            (f = Je(f)) && b.push(f));
        a && Ke(c, a);
        d = Fe("cd");
        a = 0;
        for (b = d.length; a < b; ++a)
            Ie(Ge(), d[a], !0);
        d = Fe("ci");
        a = 0;
        for (b = d.length; a < b; ++a)
            Ie(Ge(), d[a], !0);
        a = 0;
        for (b = c.length; a < b; ++a)
            Ie(Ge(), c[a], !0)
    };
    var Me = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis),
        Kc(rd, "ci", []).push(a),
        window.__GOOGLEAPIS = void 0)
    };
    Me && Me();
    Le();
    t("gapi.config.get", function(a, b) {
        var c = Ge();
        if (!a)
            return c;
        a = a.split("/");
        for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d)
            c = c[a[d]];
        return d === a.length && void 0 !== c ? c : b
    });
    t("gapi.config.update", function(a, b) {
        var c;
        if ("string" === typeof a) {
            var d = c = {};
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e) {
                var g = {};
                d = d[a[e]] = g
            }
            d[a[e]] = b
        } else
            c = a;
        Le(c)
    });
    t("gapi.iframes.create", Ee);
    var Ne = function(a) {
        if (!a)
            return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3)
          , c = b.indexOf("/");
        -1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c)
            throw Error("URI is missing protocol: " + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c)
            throw Error("Invalid URI scheme in origin: " + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e)
                a = ":" + e
        }
        return c + "://" + b + a
    };
    var Oe = function(a) {
        this.i = a || {}
    };
    Oe.prototype.value = function() {
        return this.i
    }
    ;
    Oe.prototype.getIframe = function() {
        return this.i.iframe
    }
    ;
    var Pe = function(a, b) {
        a.i.role = b;
        return a
    }
      , Qe = function(a, b) {
        a.i.data = b;
        return a
    };
    Oe.prototype.mc = function(a) {
        this.i.setRpcReady = a;
        return this
    }
    ;
    var Re = function(a) {
        return a.i.setRpcReady
    };
    Oe.prototype.Zc = function(a) {
        this.i.rpctoken = a;
        return this
    }
    ;
    var Se = function(a) {
        return a.i.rpctoken
    }
      , Te = function(a) {
        a.i.selfConnect = !0;
        return a
    };
    var Ue = {
        height: !0,
        width: !0
    }
      , Ve = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i
      , We = function(a) {
        "number" === typeof a && (a = String(a) + "px");
        return a
    };
    var Xe = function(a) {
        this.i = a
    };
    Xe.prototype.value = function() {
        return this.i
    }
    ;
    Xe.prototype.Bj = function(a) {
        this.i.style = a
    }
    ;
    Xe.prototype.getStyle = function() {
        return this.i.style
    }
    ;
    var Ye = function(a, b) {
        a.i.onload = b
    };
    var Ze = function(a) {
        this.i = a || {}
    };
    h = Ze.prototype;
    h.value = function() {
        return this.i
    }
    ;
    h.setUrl = function(a) {
        this.i.url = a;
        return this
    }
    ;
    h.getUrl = function() {
        return this.i.url
    }
    ;
    h.Bj = function(a) {
        this.i.style = a
    }
    ;
    h.getStyle = function() {
        return this.i.style
    }
    ;
    h.getId = function() {
        return this.i.id
    }
    ;
    h.Zc = function(a) {
        this.i.rpctoken = a;
        return this
    }
    ;
    var $e = function(a, b) {
        a.i.messageHandlers = b;
        return a
    }
      , af = function(a, b) {
        a.i.messageHandlersFilter = b;
        return a
    };
    Ze.prototype.Fe = function(a) {
        this.i.apis = a;
        return this
    }
    ;
    var bf = function(a, b) {
        a.i.onClose = b
    };
    Ze.prototype.getContext = function() {
        return this.i.context
    }
    ;
    var cf = function(a) {
        a.i.attributes = a.i.attributes || {};
        return new Xe(a.i.attributes)
    }
      , df = function(a, b) {
        a.i.controllerData = b
    }
      , ef = function(a) {
        return (a = a.i.timeout) ? a : null
    };
    var C = function(a) {
        this.i = a || {}
    };
    l(C, Ze);
    var ff = function(a, b) {
        a.i.frameName = b;
        return a
    };
    C.prototype.getFrameName = function() {
        return this.i.frameName
    }
    ;
    var gf = function(a, b) {
        a.i.rpcAddr = b;
        return a
    };
    C.prototype.tb = function() {
        return this.i.rpcAddr
    }
    ;
    var hf = function(a, b) {
        a.i.retAddr = b;
        return a
    };
    C.prototype.Jb = function() {
        return this.i.retAddr
    }
    ;
    var jf = function(a, b) {
        a.i.origin = b;
        return a
    };
    C.prototype.getOrigin = function() {
        return this.i.origin
    }
    ;
    C.prototype.mc = function(a) {
        this.i.setRpcReady = a;
        return this
    }
    ;
    var kf = function(a, b) {
        a.i.context = b
    }
      , lf = function(a, b) {
        a.i._rpcReadyFn = b
    };
    C.prototype.getIframeEl = function() {
        return this.i.iframeEl
    }
    ;
    var mf = function(a, b) {
        this.Zk = 100;
        this.jk = a;
        this.Bl = b;
        this.Af = 0;
        this.hf = null
    };
    mf.prototype.get = function() {
        if (0 < this.Af) {
            this.Af--;
            var a = this.hf;
            this.hf = a.next;
            a.next = null
        } else
            a = this.jk();
        return a
    }
    ;
    mf.prototype.put = function(a) {
        this.Bl(a);
        this.Af < this.Zk && (this.Af++,
        a.next = this.hf,
        this.hf = a)
    }
    ;
    var nf, of = function() {
        var a = n.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = Cc(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random()
              , k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = r(function(m) {
                if (("*" == k || m.origin == k) && m.data == g)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, k)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.cb;
                    c.cb = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    cb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            n.setTimeout(e, 0)
        }
    };
    function pf(a) {
        n.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;var qf = function() {
        this.dg = this.kd = null
    };
    qf.prototype.add = function(a, b) {
        var c = rf.get();
        c.set(a, b);
        this.dg ? this.dg.next = c : (v(!this.kd),
        this.kd = c);
        this.dg = c
    }
    ;
    qf.prototype.remove = function() {
        var a = null;
        this.kd && (a = this.kd,
        this.kd = this.kd.next,
        this.kd || (this.dg = null),
        a.next = null);
        return a
    }
    ;
    var rf = new mf(function() {
        return new sf
    }
    ,function(a) {
        return a.reset()
    }
    )
      , sf = function() {
        this.next = this.scope = this.ee = null
    };
    sf.prototype.set = function(a, b) {
        this.ee = a;
        this.scope = b;
        this.next = null
    }
    ;
    sf.prototype.reset = function() {
        this.next = this.scope = this.ee = null
    }
    ;
    var xf = function(a, b) {
        tf || uf();
        vf || (tf(),
        vf = !0);
        wf.add(a, b)
    }, tf, uf = function() {
        if (n.Promise && n.Promise.resolve) {
            var a = n.Promise.resolve(void 0);
            tf = function() {
                a.then(yf)
            }
        } else
            tf = function() {
                var b = yf;
                "function" !== typeof n.setImmediate || n.Window && n.Window.prototype && !z("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (nf || (nf = of()),
                nf(b)) : n.setImmediate(b)
            }
    }, vf = !1, wf = new qf, yf = function() {
        for (var a; a = wf.remove(); ) {
            try {
                a.ee.call(a.scope)
            } catch (b) {
                pf(b)
            }
            rf.put(a)
        }
        vf = !1
    };
    var zf = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var E = function(a, b) {
        this.wb = 0;
        this.kc = void 0;
        this.md = this.$b = this.Na = null;
        this.df = this.Dg = !1;
        if (a != ta)
            try {
                var c = this;
                a.call(b, function(d) {
                    Af(c, 2, d)
                }, function(d) {
                    if (!(d instanceof Bf))
                        try {
                            if (d instanceof Error)
                                throw d;
                            throw Error("Promise rejected.");
                        } catch (e) {}
                    Af(c, 3, d)
                })
            } catch (d) {
                Af(this, 3, d)
            }
    }
      , Cf = function() {
        this.next = this.context = this.Cd = this.Vc = this.child = null;
        this.Vd = !1
    };
    Cf.prototype.reset = function() {
        this.context = this.Cd = this.Vc = this.child = null;
        this.Vd = !1
    }
    ;
    var Df = new mf(function() {
        return new Cf
    }
    ,function(a) {
        a.reset()
    }
    )
      , Ef = function(a, b, c) {
        var d = Df.get();
        d.Vc = a;
        d.Cd = b;
        d.context = c;
        return d
    }
      , F = function(a) {
        if (a instanceof E)
            return a;
        var b = new E(ta);
        Af(b, 2, a);
        return b
    }
      , H = function(a) {
        return new E(function(b, c) {
            c(a)
        }
        )
    }
      , Gf = function(a, b, c) {
        Ff(a, b, c, null) || xf(ya(b, a))
    }
      , Hf = function(a) {
        return new E(function(b, c) {
            var d = a.length
              , e = [];
            if (d)
                for (var f = function(p, w) {
                    d--;
                    e[p] = w;
                    0 == d && b(e)
                }, g = function(p) {
                    c(p)
                }, k = 0, m; k < a.length; k++)
                    m = a[k],
                    Gf(m, ya(f, k), g);
            else
                b(e)
        }
        )
    }
      , If = function(a) {
        return new E(function(b) {
            var c = a.length
              , d = [];
            if (c)
                for (var e = function(k, m, p) {
                    c--;
                    d[k] = m ? {
                        ui: !0,
                        value: p
                    } : {
                        ui: !1,
                        reason: p
                    };
                    0 == c && b(d)
                }, f = 0, g; f < a.length; f++)
                    g = a[f],
                    Gf(g, ya(e, f, !0), ya(e, f, !1));
            else
                b(d)
        }
        )
    };
    E.prototype.then = function(a, b, c) {
        null != a && La(a, "opt_onFulfilled should be a function.");
        null != b && La(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return Jf(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    }
    ;
    E.prototype.$goog_Thenable = !0;
    E.prototype.Fc = function(a, b) {
        a = Ef(a, a, b);
        a.Vd = !0;
        Kf(this, a);
        return this
    }
    ;
    E.prototype.u = function(a, b) {
        return Jf(this, null, a, b)
    }
    ;
    E.prototype.cancel = function(a) {
        if (0 == this.wb) {
            var b = new Bf(a);
            xf(function() {
                Lf(this, b)
            }, this)
        }
    }
    ;
    var Lf = function(a, b) {
        if (0 == a.wb)
            if (a.Na) {
                var c = a.Na;
                if (c.$b) {
                    for (var d = 0, e = null, f = null, g = c.$b; g && (g.Vd || (d++,
                    g.child == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.wb && 1 == d ? Lf(c, b) : (f ? (d = f,
                    v(c.$b),
                    v(null != d),
                    d.next == c.md && (c.md = d),
                    d.next = d.next.next) : Mf(c),
                    Nf(c, e, 3, b)))
                }
                a.Na = null
            } else
                Af(a, 3, b)
    }
      , Kf = function(a, b) {
        a.$b || 2 != a.wb && 3 != a.wb || Of(a);
        v(null != b.Vc);
        a.md ? a.md.next = b : a.$b = b;
        a.md = b
    }
      , Jf = function(a, b, c, d) {
        var e = Ef(null, null, null);
        e.child = new E(function(f, g) {
            e.Vc = b ? function(k) {
                try {
                    var m = b.call(d, k);
                    f(m)
                } catch (p) {
                    g(p)
                }
            }
            : f;
            e.Cd = c ? function(k) {
                try {
                    var m = c.call(d, k);
                    void 0 === m && k instanceof Bf ? g(k) : f(m)
                } catch (p) {
                    g(p)
                }
            }
            : g
        }
        );
        e.child.Na = a;
        Kf(a, e);
        return e.child
    };
    E.prototype.Sl = function(a) {
        v(1 == this.wb);
        this.wb = 0;
        Af(this, 2, a)
    }
    ;
    E.prototype.Tl = function(a) {
        v(1 == this.wb);
        this.wb = 0;
        Af(this, 3, a)
    }
    ;
    var Af = function(a, b, c) {
        0 == a.wb && (a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.wb = 1,
        Ff(c, a.Sl, a.Tl, a) || (a.kc = c,
        a.wb = b,
        a.Na = null,
        Of(a),
        3 != b || c instanceof Bf || Pf(a, c)))
    }
      , Ff = function(a, b, c, d) {
        if (a instanceof E)
            return null != b && La(b, "opt_onFulfilled should be a function."),
            null != c && La(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
            Kf(a, Ef(b || ta, c || null, d)),
            !0;
        if (zf(a))
            return a.then(b, c, d),
            !0;
        if (q(a))
            try {
                var e = a.then;
                if ("function" === typeof e)
                    return Qf(a, e, b, c, d),
                    !0
            } catch (f) {
                return c.call(d, f),
                !0
            }
        return !1
    }
      , Qf = function(a, b, c, d, e) {
        var f = !1
          , g = function(m) {
            f || (f = !0,
            c.call(e, m))
        }
          , k = function(m) {
            f || (f = !0,
            d.call(e, m))
        };
        try {
            b.call(a, g, k)
        } catch (m) {
            k(m)
        }
    }
      , Of = function(a) {
        a.Dg || (a.Dg = !0,
        xf(a.tk, a))
    }
      , Mf = function(a) {
        var b = null;
        a.$b && (b = a.$b,
        a.$b = b.next,
        b.next = null);
        a.$b || (a.md = null);
        null != b && v(null != b.Vc);
        return b
    };
    E.prototype.tk = function() {
        for (var a; a = Mf(this); )
            Nf(this, a, this.wb, this.kc);
        this.Dg = !1
    }
    ;
    var Nf = function(a, b, c, d) {
        if (3 == c && b.Cd && !b.Vd)
            for (; a && a.df; a = a.Na)
                a.df = !1;
        if (b.child)
            b.child.Na = null,
            Rf(b, c, d);
        else
            try {
                b.Vd ? b.Vc.call(b.context) : Rf(b, c, d)
            } catch (e) {
                Sf.call(null, e)
            }
        Df.put(b)
    }
      , Rf = function(a, b, c) {
        2 == b ? a.Vc.call(a.context, c) : a.Cd && a.Cd.call(a.context, c)
    }
      , Pf = function(a, b) {
        a.df = !0;
        xf(function() {
            a.df && Sf.call(null, b)
        })
    }
      , Sf = pf
      , Bf = function(a) {
        Ea.call(this, a)
    };
    u(Bf, Ea);
    Bf.prototype.name = "cancel";
    var Uf = function(a) {
        this.resolve = this.reject = null;
        this.promise = new E(r(function(b, c) {
            this.resolve = b;
            this.reject = c
        }, this));
        a && (this.promise = Tf(this.promise, a))
    }
      , Tf = function(a, b) {
        return a.then(function(c) {
            try {
                b(c)
            } catch (d) {}
            return c
        })
    };
    var Vf = window.console;
    var cg = function() {
        this.Le = {
            rj: Wf ? "../" + Wf : null,
            mk: Xf,
            Ai: Yf,
            om: Zf,
            getToken: $f,
            rm: ag
        };
        this.Ab = A;
        this.kh = this.lk;
        this.wk = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
        if (this.Le.rj) {
            this.Ab = this.Le.Ai(this.Ab, this.Le.rj);
            var a = this.Ab.document
              , b = a.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
            a.body.appendChild(b);
            this.kh = this.Ab.doPostMsg
        }
        this.Ih = {};
        this.Rh = {};
        a = r(this.Gk, this);
        ld(this.Ab, "message", a);
        Kc(rd, "RPMQ", []).push(a);
        if (this.Ab != this.Ab.parent) {
            a = this.Ab.parent;
            b = this.Ug(this.Ab.name);
            var c = bg(b) ? "" : "!_";
            this.kh(a, c + b, "*")
        }
    };
    cg.prototype.Ug = function(a) {
        return '{"h":"' + escape(a) + '"}'
    }
    ;
    var dg = function(a) {
        var b = null;
        0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (b = unescape(a.substring(6, a.length - 2)));
        return b
    }
      , bg = function(a) {
        if (!/^\s*{/.test(a))
            return !1;
        a = Xd(a);
        return null !== a && "object" === typeof a && !!a.g
    };
    cg.prototype.Gk = function(a) {
        var b = String(a.data)
          , c = 0 !== b.indexOf("!_");
        c || (b = b.substring(2));
        var d = bg(b);
        if (!c && !d) {
            if (!d && (c = dg(b))) {
                if (this.Ih[c])
                    this.Ih[c]();
                else
                    this.Rh[c] = 1;
                return
            }
            var e = a.origin
              , f = this.Le.mk;
            this.wk ? A.setTimeout(function() {
                f(b, e)
            }, 0) : f(b, e)
        }
    }
    ;
    cg.prototype.setup = function(a, b) {
        ".." === a || this.Rh[a] ? (b(),
        delete this.Rh[a]) : this.Ih[a] = b
    }
    ;
    cg.prototype.lk = function(a, b, c) {
        a.postMessage(b, c)
    }
    ;
    cg.prototype.send = function(a, b, c) {
        if ((a = this.Le.Ai(this.Ab, a)) && !a.closed) {
            var d = bg(b) ? "" : "!_";
            this.kh(a, d + b, c)
        }
    }
    ;
    var eg = 0
      , fg = []
      , gg = {}
      , hg = {}
      , ig = A.location.href
      , jg = Yc(ig, "rpctoken")
      , kg = Yc(ig, "parent") || Ic.referrer
      , Wf = Yc(ig, "rly")
      , Zf = Wf || (A !== A.top || A.opener) && A.name || ".."
      , lg = null
      , mg = {}
      , ng = function() {}
      , og = {
        send: ng,
        setup: ng,
        Ug: ng
    }
      , Yf = function(a, b) {
        "/" == b.charAt(0) && (b = b.substring(1),
        a = A.top);
        if (0 === b.length)
            return a;
        for (b = b.split("/"); b.length; ) {
            var c = b.shift();
            "{" == c.charAt(0) && "}" == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
            if (".." === c)
                a = a == a.parent ? a.opener : a.parent;
            else if (".." !== c && a.frames[c]) {
                if (a = a.frames[c],
                !("postMessage"in a))
                    throw "Not a window";
            } else
                return null
        }
        return a
    }
      , $f = function(a) {
        return (a = gg[a]) && a.token
    }
      , pg = function(a) {
        if (a.f in {})
            return !1;
        var b = a.t
          , c = gg[a.r];
        a = a.origin;
        return c && (c.token === b || !c.token && !b) && (a === c.origin || "*" === c.origin)
    }
      , qg = function(a) {
        var b = a.id.split("/")
          , c = b[b.length - 1]
          , d = a.origin;
        return function(e) {
            var f = e.origin;
            return e.f == c && (d == f || "*" == d)
        }
    }
      , tg = function(a, b, c) {
        a = rg(a);
        hg[a.name] = {
            ee: b,
            se: a.se,
            Ga: c || pg
        };
        sg()
    };
    t("gapix.rpc.register", tg);
    var ug = function(a) {
        delete hg[rg(a).name]
    };
    t("gapix.rpc.unregister", ug);
    var vg = {}
      , wg = function(a, b) {
        (a = vg["_" + a]) && a[1](this) && a[0].call(this, b)
    }
      , yg = function(a) {
        var b = a.c;
        if (!b)
            return ng;
        var c = a.r
          , d = a.g ? "legacy__" : "";
        return function() {
            var e = [].slice.call(arguments, 0);
            e.unshift(c, d + "__cb", null, b);
            xg.apply(null, e)
        }
    }
      , ag = function(a) {
        lg = a
    }
      , Ag = function(a) {
        mg[a] || (mg[a] = A.setTimeout(function() {
            mg[a] = !1;
            zg(a)
        }, 0))
    }
      , zg = function(a) {
        var b = gg[a];
        if (b && b.ready) {
            var c = b.sh;
            for (b.sh = []; c.length; )
                og.send(a, Yd(c.shift()), b.origin)
        }
    }
      , rg = function(a) {
        return 0 === a.indexOf("legacy__") ? {
            name: a.substring(8),
            se: !0
        } : {
            name: a,
            se: !1
        }
    }
      , sg = function() {
        for (var a = Da("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c = 0, d; d = fg[c]; ++c) {
            var e = d.rpc;
            if (!e || 0 < a && b - d.timestamp > a)
                fg.splice(c, 1),
                --c;
            else {
                var f = e.s
                  , g = hg[f] || hg["*"];
                if (g && (fg.splice(c, 1),
                --c,
                e.origin = d.origin,
                d = yg(e),
                e.callback = d,
                g.Ga(e))) {
                    if ("__cb" !== f && !!g.se != !!e.g)
                        break;
                    e = g.ee.apply(e, e.a);
                    void 0 !== e && d(e)
                }
            }
        }
    }
      , Bg = function(a, b, c) {
        fg.push({
            rpc: a,
            origin: b,
            timestamp: (new Date).getTime() / 1E3
        });
        c || sg()
    }
      , Xf = function(a, b) {
        a = Xd(a);
        Bg(a, b, !1)
    }
      , Cg = function(a) {
        for (; a.length; )
            Bg(a.shift(), this.origin, !0);
        sg()
    }
      , Dg = function(a) {
        var b = !1;
        a = a.split("|");
        var c = a[0];
        0 <= c.indexOf("/") && (b = !0);
        return {
            id: c,
            origin: a[1] || "*",
            Qg: b
        }
    }
      , Eg = function(a, b, c, d) {
        var e = Dg(a);
        d && (A.frames[e.id] = A.frames[e.id] || d);
        a = e.id;
        if (!gg.hasOwnProperty(a)) {
            c = c || null;
            d = e.origin;
            if (".." === a)
                d = Ne(kg),
                c = c || jg;
            else if (!e.Qg) {
                var f = Ic.getElementById(a);
                f && (f = f.src,
                d = Ne(f),
                c = c || Yc(f, "rpctoken"))
            }
            "*" === e.origin && d || (d = e.origin);
            gg[a] = {
                token: c,
                sh: [],
                origin: d,
                Hl: b,
                oj: function() {
                    var g = a;
                    gg[g].ready = 1;
                    zg(g)
                }
            };
            og.setup(a, gg[a].oj)
        }
        return gg[a].oj
    };
    t("gapix.rpc.setup", Eg);
    var xg = function(a, b, c, d) {
        a = a || "..";
        Eg(a);
        a = a.split("|", 1)[0];
        var e = b
          , f = [].slice.call(arguments, 3)
          , g = c
          , k = Zf
          , m = jg
          , p = gg[a]
          , w = k
          , D = Dg(a);
        if (p && ".." !== a) {
            if (D.Qg) {
                if (!(m = gg[a].Hl)) {
                    m = lg ? lg.substring(1).split("/") : [Zf];
                    w = m.length - 1;
                    for (var G = A.parent; G !== A.top; ) {
                        var oa = G.parent;
                        if (!w--) {
                            for (var wb = null, Jo = oa.frames.length, fe = 0; fe < Jo; ++fe)
                                oa.frames[fe] == G && (wb = fe);
                            m.unshift("{" + wb + "}")
                        }
                        G = oa
                    }
                    m = "/" + m.join("/")
                }
                w = m
            } else
                w = k = "..";
            m = p.token
        }
        g && D ? (p = pg,
        D.Qg && (p = qg(D)),
        vg["_" + ++eg] = [g, p],
        g = eg) : g = null;
        f = {
            s: e,
            f: k,
            r: w,
            t: m,
            c: g,
            a: f
        };
        e = rg(e);
        f.s = e.name;
        f.g = e.se;
        gg[a].sh.push(f);
        Ag(a)
    };
    t("gapix.rpc.call", xg);
    t("gapix.rpc.sendHandshake", function(a, b) {
        Eg(a)();
        og.send(a, og.Ug(b), "*")
    });
    if ("function" === typeof A.postMessage || "object" === typeof A.postMessage)
        og = new cg,
        tg("__cb", wg, function() {
            return !0
        }),
        tg("_processBatch", Cg, function() {
            return !0
        }),
        Eg("..");
    var Fg = z("Safari") && !((z("Chrome") || z("CriOS")) && !z("Edge") || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || z("Firefox") || z("FxiOS") || z("Silk") || z("Android")) && !(ac() || z("iPad") || z("iPod"));
    var Hg = function(a, b) {
        if (kc && Fg && a) {
            a.focus();
            var c = 0
              , d = null;
            d = a.setInterval(function() {
                b.closed || 5 == c ? (a.clearInterval(d),
                Gg(b)) : (b.close(),
                c++)
            }, 150)
        } else
            b.close(),
            Gg(b)
    }
      , Gg = function(a) {
        if (!a.closed && a.document && a.document.body)
            if (a = a.document.body,
            v(null != a, "goog.dom.setTextContent expects a non-null value for node"),
            "textContent"in a)
                a.textContent = "Please close this window.";
            else if (3 == a.nodeType)
                a.data = "Please close this window.";
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild; )
                    a.removeChild(v(a.lastChild));
                a.firstChild.data = "Please close this window."
            } else {
                Ec(a);
                var b = Gc(a);
                a.appendChild(b.createTextNode("Please close this window."))
            }
    };
    var I = function(a, b, c, d) {
        this.Gb = !1;
        this.Xe = a;
        this.yh = b;
        this.vd = c;
        this.Xa = d;
        this.sj = this.Xa.Jb();
        this.Eb = this.Xa.getOrigin();
        this.Rk = this.Xa.getIframeEl();
        this.Fj = this.Xa.i.where;
        this.Kd = [];
        this.applyIframesApi("_default");
        a = this.Xa.i.apis || [];
        for (b = 0; b < a.length; b++)
            this.applyIframesApi(a[b]);
        this.Xe.mb[c] = this
    };
    h = I.prototype;
    h.isDisposed = function() {
        return this.Gb
    }
    ;
    h.Lc = function() {
        if (!this.isDisposed()) {
            for (var a = 0; a < this.Kd.length; a++)
                this.unregister(this.Kd[a]);
            delete Aa.mb[this.getFrameName()];
            this.Gb = !0
        }
    }
    ;
    h.getContext = function() {
        return this.Xe
    }
    ;
    h.getOptions = function() {
        return this.Xa
    }
    ;
    h.tb = function() {
        return this.yh
    }
    ;
    h.Jb = function() {
        return this.sj
    }
    ;
    h.getFrameName = function() {
        return this.vd
    }
    ;
    h.getIframeEl = function() {
        return this.Rk
    }
    ;
    h.getSiteEl = function() {
        return this.Fj
    }
    ;
    h.setSiteEl = function(a) {
        this.Fj = a
    }
    ;
    h.mc = function() {
        (0,
        this.Xa.i._rpcReadyFn)()
    }
    ;
    h.setParam = function(a, b) {
        this.Xa.value()[a] = b
    }
    ;
    h.getParam = function(a) {
        return this.Xa.value()[a]
    }
    ;
    h.yi = function() {
        return this.Xa.value()
    }
    ;
    h.getId = function() {
        return this.Xa.getId()
    }
    ;
    h.getOrigin = function() {
        return this.Eb
    }
    ;
    var Ig = function(a, b) {
        var c = a.Xe.getFrameName();
        return a.vd + ":" + c + ":" + b
    };
    h = I.prototype;
    h.register = function(a, b, c) {
        B(!this.isDisposed(), "Cannot register handler on disposed iframe " + a);
        B((c || Jg)(this), "Rejecting untrusted message " + a);
        c = Ig(this, a);
        1 == Kc(Ba, c, []).push(b) && (this.Kd.push(a),
        tg(c, Kg(c, this, "_g_wasClosed" === a)))
    }
    ;
    h.unregister = function(a, b) {
        var c = Ig(this, a)
          , d = Ba[c];
        d && (b ? (b = Mc.call(d, b),
        0 <= b && d.splice(b, 1)) : d.splice(0, d.length),
        0 == d.length && (b = Mc.call(this.Kd, a),
        0 <= b && this.Kd.splice(b, 1),
        ug(c)))
    }
    ;
    h.Bk = function() {
        return this.Kd
    }
    ;
    h.applyIframesApi = function(a) {
        this.ig = this.ig || [];
        if (!(0 <= Mc.call(this.ig, a))) {
            this.ig.push(a);
            a = Ca[a] || {
                map: {}
            };
            for (var b in a.map)
                Nc(a.map, b) && this.register(b, a.map[b], a.filter)
        }
    }
    ;
    h.getWindow = function() {
        if (!Jg(this))
            return null;
        var a = this.Xa.i._popupWindow;
        if (a)
            return a;
        var b = this.yh.split("/");
        a = this.getContext().getWindow();
        for (var c = 0; c < b.length && a; c++) {
            var d = b[c];
            a = ".." === d ? a == a.parent ? a.opener : a.parent : a.frames[d]
        }
        return a
    }
    ;
    var Lg = function(a) {
        var b = {};
        if (a)
            for (var c in a)
                Nc(a, c) && Nc(Ue, c) && Ve.test(a[c]) && (b[c] = a[c]);
        return b
    };
    h = I.prototype;
    h.close = function(a, b) {
        return J(this, "_g_close", a, b)
    }
    ;
    h.restyle = function(a, b) {
        return J(this, "_g_restyle", a, b)
    }
    ;
    h.Dl = function(a, b) {
        return J(this, "_g_restyleDone", a, b)
    }
    ;
    h.ak = function(a) {
        return this.getContext().closeSelf(a, void 0, this)
    }
    ;
    h.Fl = function(a) {
        if (a && "object" === typeof a)
            return this.getContext().restyleSelf(a, void 0, this)
    }
    ;
    h.Gl = function(a) {
        var b = this.Xa.i.onRestyle;
        b && b.call(this, a, this);
        a = a && "object" === typeof a ? Lg(a) : {};
        (b = this.getIframeEl()) && a && "object" === typeof a && (Nc(a, "height") && (a.height = We(a.height)),
        Nc(a, "width") && (a.width = We(a.width)),
        Wc(a, b.style))
    }
    ;
    h.dk = function(a) {
        var b = this.Xa.i.onClose;
        b && b.call(this, a, this);
        if (b = this.getOptions().i._popupWindow) {
            var c = this.getContext().getWindow().document.getElementById(this.getId());
            c && c.parentNode && c.parentNode.removeChild(c);
            Hg(this.getContext().getWindow(), b)
        }
        b || (b = this.getIframeEl()) && b.parentNode && b.parentNode.removeChild(b);
        if (b = this.Xa.i.controller)
            c = {},
            c.frameName = this.getFrameName(),
            J(b, "_g_disposeControl", c);
        b = Ig(this, "_g_wasClosed");
        Mg(b, a, this)
    }
    ;
    h.registerWasRestyled = function(a, b) {
        this.register("_g_wasRestyled", a, b)
    }
    ;
    h.registerWasClosed = function(a, b) {
        this.register("_g_wasClosed", a, b)
    }
    ;
    h.Yl = function() {
        delete this.getContext().mb[this.getFrameName()];
        this.getContext().getWindow().setTimeout(r(function() {
            this.Lc()
        }, this), 0)
    }
    ;
    h.send = function(a, b, c, d) {
        B(!this.isDisposed(), "Cannot send message to disposed iframe - " + a);
        B((d || Jg)(this), "Wrong target for message " + a);
        c = new Uf(c);
        a = this.Xe.getFrameName() + ":" + this.vd + ":" + a;
        xg(this.yh, a, c.resolve, b);
        return c.promise
    }
    ;
    var J = function(a, b, c, d) {
        return a.send(b, c, d, Ng)
    };
    h = I.prototype;
    h.vl = function(a) {
        return a
    }
    ;
    h.ping = function(a, b) {
        return J(this, "_g_ping", b, a)
    }
    ;
    h.hk = function(a) {
        a = a && "object" === typeof a ? a : {};
        for (var b = a.rpcAddr, c = (this.tb() + "/" + b).split("/"), d = this.getContext().getWindow(), e; (e = c.shift()) && d; )
            d = ".." == e ? d.parent : d.frames[e];
        B(!!d, "Bad rpc address " + b);
        a._window = d;
        a._parentRpcAddr = this.tb();
        a._parentRetAddr = this.Jb();
        b = new K(a);
        this.jl && this.jl(b, a.controllerData);
        this.wg = this.wg || [];
        this.wg.push(b, a.controllerData)
    }
    ;
    h.nk = function(a) {
        a = (a || {}).frameName;
        for (var b = this.wg || [], c = 0; c < b.length; c++)
            if (b[c].getFrameName() === a) {
                a = b.splice(c, 1)[0];
                a.Lc();
                this.kl && this.kl(a);
                return
            }
        B(!1, "Unknown contolled iframe to dispose - " + a)
    }
    ;
    h.ek = function(a) {
        var b = new C(a);
        a = new Oe(b.value());
        if (a.i.selfConnect)
            var c = this;
        else
            (B(Og.test(b.getOrigin()), "Illegal origin for connected iframe - " + b.getOrigin()),
            c = this.getContext().mb[b.getFrameName()],
            c) ? Re(b) && (c.mc(),
            J(c, "_g_rpcReady")) : (b = ff(jf(hf(gf(new C, b.tb()), b.Jb()), b.getOrigin()), b.getFrameName()).mc(Re(b)).Zc(Se(b)),
            c = Pg(this.getContext(), b.value()));
        b = this.getContext();
        var d = a.i.role;
        a = a.i.data;
        Qg(b);
        d = d || "";
        Kc(b.vg, d, []).push({
            lf: c,
            data: a
        });
        Rg(c, a, b.Yg[d])
    }
    ;
    h.Aj = function(a, b) {
        (new C(b)).i._relayedDepth || (b = {},
        Te(Pe(new Oe(b), "_opener")),
        J(a, "_g_connect", b))
    }
    ;
    h.jj = function(a) {
        var b = this
          , c = a.i.messageHandlers
          , d = a.i.messageHandlersFilter
          , e = a.i.onClose;
        bf(af($e(a, null), null), null);
        return J(this, "_g_open", a.value()).then(function(f) {
            var g = new C(f[0])
              , k = g.getFrameName();
            f = new C;
            var m = b.Jb()
              , p = g.Jb();
            hf(gf(f, b.tb() + "/" + g.tb()), p + "/" + m);
            ff(f, k);
            jf(f, g.getOrigin());
            f.Fe(g.i.apis);
            f.Zc(Se(a));
            $e(f, c);
            af(f, d);
            bf(f, e);
            (g = b.getContext().mb[k]) || (g = Pg(b.getContext(), f.value()));
            return g
        })
    }
    ;
    h.zh = function(a) {
        var b = a.getUrl();
        B(!b || id.test(b), "Illegal url for new iframe - " + b);
        var c = cf(a).value();
        b = {};
        for (var d in c)
            Nc(c, d) && Nc(Sg, d) && (b[d] = c[d]);
        Nc(c, "style") && (d = c.style,
        "object" === typeof d && (b.style = Lg(d)));
        a.value().attributes = b
    }
    ;
    h.rl = function(a) {
        var b = this;
        a = new C(a);
        this.zh(a);
        var c = a.i._relayedDepth || 0;
        a.i._relayedDepth = c + 1;
        a.i.openerIframe = this;
        var d = Se(a);
        a.Zc(null);
        return this.getContext().open(a.value()).then(function(e) {
            var f = (new C(e.yi())).i.apis
              , g = new C;
            Tg(e, b, g);
            0 == c && Pe(new Oe(g.value()), "_opener");
            g.mc(!0);
            g.Zc(d);
            J(e, "_g_connect", g.value());
            g = new C;
            jf(ff(hf(gf(g, e.tb()), e.sj), e.getFrameName()), e.getOrigin()).Fe(f);
            return g.value()
        })
    }
    ;
    h.El = function(a) {
        this.getContext().addOnOpenerHandler(function(b) {
            b.send("_g_wasRestyled", a, void 0, Ng)
        }, null, Ng)
    }
    ;
    var Ug = function(a) {
        this.i = a || {}
    };
    Ug.prototype.value = function() {
        return this.i
    }
    ;
    var Vg = function(a) {
        var b = new Ug;
        b.i.role = a;
        return b
    }
      , Wg = function(a, b) {
        a.i.handler = b;
        return a
    }
      , Xg = function(a, b) {
        a.i.filter = b;
        return a
    };
    Ug.prototype.Fe = function(a) {
        this.i.apis = a;
        return this
    }
    ;
    var Yg = Vc()
      , Zg = Vc()
      , $g = function(a) {
        return Yg[a]
    }
      , ah = function(a, b) {
        Xc.load("gapi.iframes.style." + a, b)
    };
    var bh = function() {
        function a(k, m) {
            k = window.getComputedStyle(k, "").getPropertyValue(m).match(/^([0-9]+)/);
            return parseInt(k[0], 10)
        }
        for (var b = 0, c = [document.body]; 0 < c.length; ) {
            var d = c.shift()
              , e = d.childNodes;
            if ("undefined" !== typeof d.style) {
                var f = d.style.overflowY;
                f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.overflowY : null);
                if ("visible" != f && "inherit" != f && (f = d.style.height,
                f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.height : ""),
                0 < f.length && "auto" != f))
                    continue
            }
            for (d = 0; d < e.length; d++) {
                f = e[d];
                if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight) {
                    var g = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
                    b = Math.max(b, g)
                }
                c.push(f)
            }
        }
        return b + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body, "padding-bottom")
    }
      , ch = function() {
        var a = 0;
        self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
        var b = document.body
          , c = document.documentElement;
        if ("CSS1Compat" === document.compatMode && c.scrollHeight)
            return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
        if (0 <= navigator.userAgent.indexOf("AppleWebKit"))
            return bh();
        if (b && c) {
            var d = c.scrollHeight
              , e = c.offsetHeight;
            c.clientHeight !== e && (d = b.scrollHeight,
            e = b.offsetHeight);
            return d > a ? d > e ? d : e : d < e ? d : e
        }
    };
    var K = function(a) {
        a = a || {};
        this.Gb = !1;
        this.Ea = Vc();
        this.mb = Vc();
        this.Ab = a._window || A;
        this.lb = this.Ab.location.href;
        this.lj = (this.eh = dh(this.lb, "parent")) ? dh(this.lb, "pfname") : "";
        this.bc = this.eh ? dh(this.lb, "_gfid") || dh(this.lb, "id") : "";
        this.vd = we(this.bc, this.lj);
        this.Eb = Ne(this.lb);
        if (this.bc) {
            var b = new C;
            gf(b, a._parentRpcAddr || "..");
            hf(b, a._parentRetAddr || this.bc);
            jf(b, Ne(this.eh || this.lb));
            ff(b, this.lj);
            this.Na = Pg(this, b.value())
        } else
            this.Na = null
    };
    h = K.prototype;
    h.isDisposed = function() {
        return this.Gb
    }
    ;
    h.Lc = function() {
        if (!this.isDisposed()) {
            var a = Object.values(this.mb);
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            a = b ? b.call(a) : {
                next: aa(a)
            };
            for (b = a.next(); !b.done; b = a.next())
                b.value.Lc();
            this.Gb = !0
        }
    }
    ;
    h.getFrameName = function() {
        return this.vd
    }
    ;
    h.getOrigin = function() {
        return this.Eb
    }
    ;
    h.getWindow = function() {
        return this.Ab
    }
    ;
    h.setGlobalParam = function(a, b) {
        this.Ea[a] = b
    }
    ;
    h.getGlobalParam = function(a) {
        return this.Ea[a]
    }
    ;
    var Pg = function(a, b) {
        B(!a.isDisposed(), "Cannot attach iframe in disposed context");
        b = new C(b);
        b.tb() || gf(b, b.getId());
        b.Jb() || hf(b, "..");
        b.getOrigin() || jf(b, Ne(b.getUrl()));
        b.getFrameName() || ff(b, we(b.getId(), a.vd));
        var c = b.getFrameName();
        if (a.mb[c])
            return a.mb[c];
        var d = b.tb()
          , e = d;
        b.getOrigin() && (e = d + "|" + b.getOrigin());
        var f = b.Jb()
          , g = Se(b);
        g || (g = (g = b.getIframeEl()) && (g.getAttribute("data-postorigin") || g.src) || b.getUrl(),
        g = Yc(g, "rpctoken"));
        lf(b, Eg(e, f, g, b.i._popupWindow));
        e = ((window.gadgets || {}).rpc || {}).setAuthToken;
        g && e && e(d, g);
        var k = new I(a,d,c,b)
          , m = b.i.messageHandlersFilter;
        Oc(b.i.messageHandlers, function(p, w) {
            k.register(w, p, m)
        });
        Re(b) && k.mc();
        J(k, "_g_rpcReady");
        return k
    };
    K.prototype.zh = function(a) {
        ff(a, null);
        var b = a.getId();
        !b || eh.test(b) && !this.getWindow().document.getElementById(b) || (Vf && Vf.log && Vf.log("Ignoring requested iframe ID - " + b),
        a.i.id = null)
    }
    ;
    var dh = function(a, b) {
        var c = Yc(a, b);
        c || (c = Xd(Yc(a, "jcp", ""))[b]);
        return c || ""
    };
    K.prototype.openChild = function(a) {
        B(!this.isDisposed(), "Cannot open iframe in disposed context");
        var b = new C(a);
        fh(this, b);
        var c = b.getFrameName();
        if (c && this.mb[c])
            return this.mb[c];
        this.zh(b);
        c = b.getUrl();
        B(c, "No url for new iframe");
        var d = b.i.queryParams || {};
        d.usegapi = "1";
        b.i.queryParams = d;
        d = this.Ci && this.Ci(c, b);
        d || (d = b.i.where,
        B(!!d, "No location for new iframe"),
        c = Ee(c, d, a),
        b.i.iframeEl = c,
        d = c.getAttribute("id"));
        gf(b, d).i.id = d;
        jf(b, Ne(b.i.eurl || ""));
        this.Ti && this.Ti(b, b.getIframeEl());
        c = Pg(this, a);
        c.Aj && c.Aj(c, a);
        (a = b.i.onCreate) && a(c);
        b.i.disableRelayOpen || c.applyIframesApi("_open");
        return c
    }
    ;
    var gh = function(a, b, c) {
        var d = b.i.canvasUrl;
        if (!d)
            return c;
        B(!b.i.allowPost && !b.i.forcePost, "Post is not supported when using canvas url");
        var e = b.getUrl();
        B(e && Ne(e) === a.Eb && Ne(d) === a.Eb, "Wrong origin for canvas or hidden url " + d);
        b.setUrl(d);
        b.i.waitForOnload = !0;
        b.i.canvasUrl = null;
        return function(f) {
            var g = f.getWindow()
              , k = g.location.hash;
            k = De(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
            g.location.replace(k);
            c && c(f)
        }
    }
      , hh = function(a, b, c) {
        var d = b.i.relayOpen;
        if (d) {
            var e = a.getParentIframe();
            d instanceof I ? (e = d,
            b.i.relayOpen = 0) : 0 < Number(d) && (b.i.relayOpen = Number(d) - 1);
            if (e) {
                B(!!e.jj, "Relaying iframe open is disabled");
                if (d = b.getStyle())
                    if (d = Zg[d])
                        kf(b, a),
                        d(b.value()),
                        kf(b, null);
                b.i.openerIframe = null;
                c.resolve(e.jj(b));
                return !0
            }
        }
        return !1
    }
      , ih = function(a, b, c) {
        var d = b.getStyle();
        if (d)
            if (B(!!$g, "Defer style is disabled, when requesting style " + d),
            Yg[d])
                fh(a, b);
            else
                return ah(d, function() {
                    B(!!Yg[d], "Fail to load style - " + d);
                    c.resolve(a.open(b.value()))
                }),
                !0;
        return !1
    };
    K.prototype.open = function(a, b) {
        B(!this.isDisposed(), "Cannot open iframe in disposed context");
        var c = new C(a);
        b = gh(this, c, b);
        var d = new Uf(b);
        (b = c.getUrl()) && c.setUrl(De(b));
        if (hh(this, c, d) || ih(this, c, d) || hh(this, c, d))
            return d.promise;
        if (null != ef(c)) {
            var e = setTimeout(function() {
                g.getIframeEl().src = "about:blank";
                d.reject({
                    timeout: "Exceeded time limit of :" + ef(c) + "milliseconds"
                })
            }, ef(c))
              , f = d.resolve;
            d.resolve = function(k) {
                clearTimeout(e);
                f(k)
            }
        }
        c.i.waitForOnload && Ye(cf(c), function() {
            d.resolve(g)
        });
        var g = this.openChild(a);
        c.i.waitForOnload || d.resolve(g);
        return d.promise
    }
    ;
    K.prototype.getParentIframe = function() {
        return this.Na
    }
    ;
    var jh = function(a, b) {
        var c = a.getParentIframe()
          , d = !0;
        b.filter && (d = b.filter.call(b.lf, b.params));
        return F(d).then(function(e) {
            return e && c ? (b.kj && b.kj.call(a, b.params),
            e = b.sender ? b.sender(b.params) : J(c, b.message, b.params),
            b.Xl ? e.then(function() {
                return !0
            }) : !0) : !1
        })
    };
    h = K.prototype;
    h.closeSelf = function(a, b, c) {
        a = jh(this, {
            sender: function(d) {
                var e = Aa.getParentIframe();
                Oc(Aa.mb, function(f) {
                    f !== e && J(f, "_g_wasClosed", d)
                });
                return J(e, "_g_closeMe", d)
            },
            message: "_g_closeMe",
            params: a,
            lf: c,
            filter: this.getGlobalParam("onCloseSelfFilter")
        });
        b = new Uf(b);
        b.resolve(a);
        return b.promise
    }
    ;
    h.restyleSelf = function(a, b, c) {
        a = a || {};
        b = new Uf(b);
        b.resolve(jh(this, {
            message: "_g_restyleMe",
            params: a,
            lf: c,
            filter: this.getGlobalParam("onRestyleSelfFilter"),
            Xl: !0,
            kj: this.Lj
        }));
        return b.promise
    }
    ;
    h.Lj = function(a) {
        "auto" === a.height && (a.height = ch())
    }
    ;
    h.setCloseSelfFilter = function(a) {
        this.setGlobalParam("onCloseSelfFilter", a)
    }
    ;
    h.setRestyleSelfFilter = function(a) {
        this.setGlobalParam("onRestyleSelfFilter", a)
    }
    ;
    var fh = function(a, b) {
        var c = b.getStyle();
        if (c) {
            b.Bj(null);
            var d = Yg[c];
            B(d, "No such style: " + c);
            kf(b, a);
            d(b.value());
            kf(b, null)
        }
    };
    K.prototype.ready = function(a, b, c, d) {
        var e = b || {}
          , f = this.getParentIframe();
        this.addOnOpenerHandler(function(k) {
            Oc(e, function(m, p) {
                k.register(p, m, d)
            }, this);
            k !== f && k.send("_ready", g, void 0, d)
        }, void 0, d);
        var g = a || {};
        g.height = g.height || "auto";
        this.Lj(g);
        f && f.send("_ready", g, c, Ng)
    }
    ;
    K.prototype.connectIframes = function(a, b) {
        a = new Oe(a);
        var c = new Oe(b)
          , d = Re(a);
        b = a.getIframe();
        var e = c.getIframe();
        if (e) {
            var f = Se(a)
              , g = new C;
            Tg(b, e, g);
            Qe(Pe((new Oe(g.value())).Zc(f), a.i.role), a.i.data).mc(d);
            var k = new C;
            Tg(e, b, k);
            Qe(Pe((new Oe(k.value())).Zc(f), c.i.role), c.i.data).mc(!0);
            J(b, "_g_connect", g.value(), function() {
                d || J(e, "_g_connect", k.value())
            });
            d && J(e, "_g_connect", k.value())
        } else
            c = {},
            Qe(Pe(Te(new Oe(c)), a.i.role), a.i.data),
            J(b, "_g_connect", c)
    }
    ;
    var Qg = function(a) {
        a.vg || (a.vg = Vc(),
        a.Yg = Vc())
    };
    K.prototype.addOnConnectHandler = function(a, b, c, d) {
        Qg(this);
        "object" === typeof a ? (b = new Ug(a),
        c = b.i.role || "") : (b = Xg(Wg(Vg(a), b).Fe(c), d),
        c = a);
        d = this.vg[c] || [];
        a = !1;
        for (var e = 0; e < d.length && !a; e++)
            Rg(this.mb[d[e].lf.getFrameName()], d[e].data, [b]),
            a = b.i.runOnce;
        c = Kc(this.Yg, c, []);
        a || b.i.dontWait || c.push(b)
    }
    ;
    K.prototype.removeOnConnectHandler = function(a, b) {
        a = Kc(this.Yg, a, []);
        if (b)
            for (var c = 0, d = !1; !d && c < a.length; c++)
                a[c].i.handler === b && (d = !0,
                a.splice(c, 1));
        else
            a.splice(0, a.length)
    }
    ;
    var Rg = function(a, b, c) {
        c = c || [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e && a) {
                var f = e.i.filter || Jg;
                if (a && f(a)) {
                    f = e.i.apis || [];
                    for (var g = 0; g < f.length; g++)
                        a.applyIframesApi(f[g]);
                    e.i.handler && (0,
                    e.i.handler)(a, b);
                    e.i.runOnce && (c.splice(d, 1),
                    --d)
                }
            }
        }
    };
    K.prototype.addOnOpenerHandler = function(a, b, c) {
        var d = this.addOnConnectHandler;
        a = Xg(Wg(Vg("_opener"), a).Fe(b), c);
        a.i.runOnce = !0;
        d.call(this, a.value())
    }
    ;
    K.prototype.Ti = function(a, b) {
        var c = a.i.controller;
        if (c) {
            B(c.Eb === a.getOrigin(), "Wrong controller origin " + this.Eb + " !== " + a.getOrigin());
            var d = a.tb();
            gf(a, c.tb());
            hf(a, c.Jb());
            var e = new C;
            df(gf(e, d), a.i.controllerData);
            ld(b, "load", function() {
                c.send("_g_control", e.value())
            })
        }
    }
    ;
    var kh = function(a, b, c) {
        a = a.getWindow();
        var d = a.document
          , e = c.i.reuseWindow;
        if (e) {
            var f = c.getId();
            if (!f)
                throw Error("If you provide a reuseWindow, you must also provide an ID");
        } else
            f = ve(d, c);
        var g = f
          , k = c.i.rpcRelayUrl;
        if (k) {
            k = hd(Ic, k.replace(Be, Ce));
            g = c.i.fragmentParams || {};
            g.rly = f;
            c.i.fragmentParams = g;
            g = c.i.where || d.body;
            B(!!g, "Cannot open window in a page with no body");
            var m = {};
            m.src = k;
            m.style = "display:none;";
            m.id = f;
            m.name = f;
            ze(d, g, m, f);
            g = f + "_relay"
        }
        b = De(b);
        var p = xe(d, b, f, c.value());
        c.i.eurl = p;
        b = c.i.openAsWindow;
        "string" !== typeof b && (b = void 0);
        c = window.navigator.userAgent || "";
        /Trident|MSIE/i.test(c) && /#/.test(c) && (p = "javascript:window.location.replace(" + A.JSON.stringify(p).replace(/#/g, "\\x23") + ")");
        if (e) {
            var w = e;
            setTimeout(function() {
                w.location.replace(p)
            })
        } else
            w = Yb(p, a, g, b);
        return {
            id: f,
            Rj: w
        }
    };
    K.prototype.Ci = function(a, b) {
        if (b.i.openAsWindow) {
            a = kh(this, a, b);
            var c = a.id;
            B(!!a.Rj, "Open popup window failed");
            b.i._popupWindow = a.Rj
        }
        return c
    }
    ;
    var eh = /^[\w\.\-]*$/
      , Jg = function(a) {
        return a.Eb === a.getContext().getOrigin()
    }
      , Ng = function() {
        return !0
    }
      , Kg = function(a, b, c) {
        return function(d) {
            if (!b.isDisposed()) {
                var e = this.origin
                  , f = b.getOrigin();
                B(e === f, "Wrong origin " + e + " != " + f);
                e = this.callback;
                d = Mg(a, d, b);
                !c && 0 < d.length && Hf(d).then(e)
            }
        }
    }
      , Mg = function(a, b, c) {
        a = Ba[a];
        if (!a)
            return [];
        for (var d = [], e = 0; e < a.length; e++)
            d.push(F(a[e].call(c, b, c)));
        return d
    }
      , lh = function(a, b, c) {
        B("_default" != a, "Cannot update default api");
        Ca[a] = {
            map: b,
            filter: c
        }
    }
      , mh = function(a, b, c) {
        B("_default" != a, "Cannot update default api");
        Kc(Ca, a, {
            map: {},
            filter: Jg
        }).map[b] = c
    }
      , nh = function(a, b) {
        Kc(Ca, "_default", {
            map: {},
            filter: Ng
        }).map[a] = b;
        Oc(Aa.mb, function(c) {
            c.register(a, b, Ng)
        })
    };
    Ba = Vc();
    Ca = Vc();
    Aa = new K;
    nh("_g_rpcReady", I.prototype.mc);
    nh("_g_discover", I.prototype.Bk);
    nh("_g_ping", I.prototype.vl);
    nh("_g_close", I.prototype.ak);
    nh("_g_closeMe", I.prototype.dk);
    nh("_g_restyle", I.prototype.Fl);
    nh("_g_restyleMe", I.prototype.Gl);
    nh("_g_wasClosed", I.prototype.Yl);
    var Og = /^https?:\/\/[^\/%\\?#\s]+$/i
      , Sg = {
        longdesc: !0,
        name: !0,
        src: !0,
        frameborder: !0,
        marginwidth: !0,
        marginheight: !0,
        scrolling: !0,
        align: !0,
        height: !0,
        width: !0,
        id: !0,
        "class": !0,
        title: !0,
        tabindex: !0,
        hspace: !0,
        vspace: !0,
        allowtransparency: !0
    }
      , Tg = function(a, b, c) {
        var d = a.tb()
          , e = b.Jb();
        hf(gf(c, a.Jb() + "/" + b.tb()), e + "/" + d);
        jf(ff(c, b.getFrameName()), b.getOrigin())
    }
      , oh = Aa.getParentIframe();
    oh && oh.register("_g_restyleDone", I.prototype.El, Ng);
    nh("_g_connect", I.prototype.ek);
    var ph = {};
    ph._g_open = I.prototype.rl;
    lh("_open", ph, Ng);
    mh("control", "_g_control", I.prototype.hk);
    mh("control", "_g_disposeControl", I.prototype.nk);
    mh("gapi.load", "_g_gapi.load", function(a) {
        return new E(function(b) {
            Xc.load(a && "object" === typeof a && a.features || "", b)
        }
        )
    });
    t("gapi.iframes.registerStyle", function(a, b) {
        Yg[a] = b
    });
    t("gapi.iframes.registerBeforeOpenStyle", function(a, b) {
        Zg[a] = b
    });
    t("gapi.iframes.getStyle", $g);
    t("gapi.iframes.getBeforeOpenStyle", function(a) {
        return Zg[a]
    });
    t("gapi.iframes.registerIframesApi", lh);
    t("gapi.iframes.registerIframesApiHandler", mh);
    t("gapi.iframes.getContext", function() {
        return Aa
    });
    t("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", Jg);
    t("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", Ng);
    t("gapi.iframes.makeWhiteListIframesFilter", function(a) {
        for (var b = Vc(), c = 0; c < a.length; c++)
            b[a[c]] = !0;
        return function(d) {
            return !!b[d.Eb]
        }
    });
    t("gapi.iframes.Context", K);
    t("gapi.iframes.Context.prototype.isDisposed", K.prototype.isDisposed);
    t("gapi.iframes.Context.prototype.getWindow", K.prototype.getWindow);
    t("gapi.iframes.Context.prototype.getFrameName", K.prototype.getFrameName);
    t("gapi.iframes.Context.prototype.getGlobalParam", K.prototype.getGlobalParam);
    t("gapi.iframes.Context.prototype.setGlobalParam", K.prototype.setGlobalParam);
    t("gapi.iframes.Context.prototype.open", K.prototype.open);
    t("gapi.iframes.Context.prototype.openChild", K.prototype.openChild);
    t("gapi.iframes.Context.prototype.getParentIframe", K.prototype.getParentIframe);
    t("gapi.iframes.Context.prototype.closeSelf", K.prototype.closeSelf);
    t("gapi.iframes.Context.prototype.restyleSelf", K.prototype.restyleSelf);
    t("gapi.iframes.Context.prototype.setCloseSelfFilter", K.prototype.setCloseSelfFilter);
    t("gapi.iframes.Context.prototype.setRestyleSelfFilter", K.prototype.setRestyleSelfFilter);
    t("gapi.iframes.Context.prototype.addOnConnectHandler", K.prototype.addOnConnectHandler);
    t("gapi.iframes.Context.prototype.removeOnConnectHandler", K.prototype.removeOnConnectHandler);
    t("gapi.iframes.Context.prototype.addOnOpenerHandler", K.prototype.addOnOpenerHandler);
    t("gapi.iframes.Context.prototype.connectIframes", K.prototype.connectIframes);
    t("gapi.iframes.Iframe", I);
    t("gapi.iframes.Iframe.prototype.isDisposed", I.prototype.isDisposed);
    t("gapi.iframes.Iframe.prototype.getContext", I.prototype.getContext);
    t("gapi.iframes.Iframe.prototype.getFrameName", I.prototype.getFrameName);
    t("gapi.iframes.Iframe.prototype.getId", I.prototype.getId);
    t("gapi.iframes.Iframe.prototype.register", I.prototype.register);
    t("gapi.iframes.Iframe.prototype.unregister", I.prototype.unregister);
    t("gapi.iframes.Iframe.prototype.send", I.prototype.send);
    t("gapi.iframes.Iframe.prototype.applyIframesApi", I.prototype.applyIframesApi);
    t("gapi.iframes.Iframe.prototype.getIframeEl", I.prototype.getIframeEl);
    t("gapi.iframes.Iframe.prototype.getSiteEl", I.prototype.getSiteEl);
    t("gapi.iframes.Iframe.prototype.setSiteEl", I.prototype.setSiteEl);
    t("gapi.iframes.Iframe.prototype.getWindow", I.prototype.getWindow);
    t("gapi.iframes.Iframe.prototype.getOrigin", I.prototype.getOrigin);
    t("gapi.iframes.Iframe.prototype.close", I.prototype.close);
    t("gapi.iframes.Iframe.prototype.restyle", I.prototype.restyle);
    t("gapi.iframes.Iframe.prototype.restyleDone", I.prototype.Dl);
    t("gapi.iframes.Iframe.prototype.registerWasRestyled", I.prototype.registerWasRestyled);
    t("gapi.iframes.Iframe.prototype.registerWasClosed", I.prototype.registerWasClosed);
    t("gapi.iframes.Iframe.prototype.getParam", I.prototype.getParam);
    t("gapi.iframes.Iframe.prototype.setParam", I.prototype.setParam);
    t("gapi.iframes.Iframe.prototype.ping", I.prototype.ping);
    t("gapi.iframes.Iframe.prototype.getOpenParams", I.prototype.yi);
    var qh = function(a) {
        return Pa(a, function(b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b
        }).join("")
    };
    var rh = null
      , th = function(a) {
        var b = [];
        sh(a, function(c) {
            b.push(c)
        });
        return b
    }
      , sh = function(a, b) {
        function c(m) {
            for (; d < a.length; ) {
                var p = a.charAt(d++)
                  , w = rh[p];
                if (null != w)
                    return w;
                if (!/^[\s\xa0]*$/.test(p))
                    throw Error("Unknown base64 encoding at char: " + p);
            }
            return m
        }
        uh();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , k = c(64);
            if (64 === k && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2),
            64 != k && b(g << 6 & 192 | k))
        }
    }
      , uh = function() {
        if (!rh) {
            rh = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e]
                      , g = rh[f];
                    void 0 === g ? rh[f] = e : v(g === e)
                }
        }
    };
    var xh = function(a, b) {
        this.Ta = 64;
        this.We = n.Uint8Array ? new Uint8Array(this.Ta) : Array(this.Ta);
        this.nc = this.yd = 0;
        this.wa = [];
        this.dl = a;
        this.Li = b;
        this.Wl = n.Int32Array ? new Int32Array(64) : Array(64);
        void 0 === vh && (vh = n.Int32Array ? new Int32Array(wh) : wh);
        this.reset()
    }, vh;
    u(xh, ae);
    for (var yh = [], zh = 0; 63 > zh; zh++)
        yh[zh] = 0;
    var Ah = Xa(128, yh);
    xh.prototype.reset = function() {
        this.nc = this.yd = 0;
        this.wa = n.Int32Array ? new Int32Array(this.Li) : Ya(this.Li)
    }
    ;
    var Bh = function(a) {
        var b = a.We;
        v(b.length == a.Ta);
        for (var c = a.Wl, d = 0, e = 0; e < b.length; )
            c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3],
            e = 4 * d;
        for (b = 16; 64 > b; b++) {
            e = c[b - 15] | 0;
            d = c[b - 2] | 0;
            var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0
              , g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
            c[b] = f + g | 0
        }
        d = a.wa[0] | 0;
        e = a.wa[1] | 0;
        var k = a.wa[2] | 0
          , m = a.wa[3] | 0
          , p = a.wa[4] | 0
          , w = a.wa[5] | 0
          , D = a.wa[6] | 0;
        f = a.wa[7] | 0;
        for (b = 0; 64 > b; b++) {
            var G = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & k ^ e & k) | 0;
            g = p & w ^ ~p & D;
            f = f + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) | 0;
            g = g + (vh[b] | 0) | 0;
            g = f + (g + (c[b] | 0) | 0) | 0;
            f = D;
            D = w;
            w = p;
            p = m + g | 0;
            m = k;
            k = e;
            e = d;
            d = g + G | 0
        }
        a.wa[0] = a.wa[0] + d | 0;
        a.wa[1] = a.wa[1] + e | 0;
        a.wa[2] = a.wa[2] + k | 0;
        a.wa[3] = a.wa[3] + m | 0;
        a.wa[4] = a.wa[4] + p | 0;
        a.wa[5] = a.wa[5] + w | 0;
        a.wa[6] = a.wa[6] + D | 0;
        a.wa[7] = a.wa[7] + f | 0
    };
    xh.prototype.update = function(a, b) {
        void 0 === b && (b = a.length);
        var c = 0
          , d = this.yd;
        if ("string" === typeof a)
            for (; c < b; )
                this.We[d++] = a.charCodeAt(c++),
                d == this.Ta && (Bh(this),
                d = 0);
        else if (va(a))
            for (; c < b; ) {
                var e = a[c++];
                if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
                    throw Error("message must be a byte array");
                this.We[d++] = e;
                d == this.Ta && (Bh(this),
                d = 0)
            }
        else
            throw Error("message must be string or array");
        this.yd = d;
        this.nc += b
    }
    ;
    xh.prototype.digest = function() {
        var a = []
          , b = 8 * this.nc;
        56 > this.yd ? this.update(Ah, 56 - this.yd) : this.update(Ah, this.Ta - (this.yd - 56));
        for (var c = 63; 56 <= c; c--)
            this.We[c] = b & 255,
            b /= 256;
        Bh(this);
        for (c = b = 0; c < this.dl; c++)
            for (var d = 24; 0 <= d; d -= 8)
                a[b++] = this.wa[c] >> d & 255;
        return a
    }
    ;
    var wh = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    var Dh = function() {
        xh.call(this, 8, Ch)
    };
    u(Dh, xh);
    var Ch = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    var Eh = Object.freeze || function(a) {
        return a
    }
    ;
    var Fh = function() {
        this.Gb = this.Gb;
        this.Bf = this.Bf
    };
    Fh.prototype.Gb = !1;
    Fh.prototype.isDisposed = function() {
        return this.Gb
    }
    ;
    Fh.prototype.Lc = function() {
        this.Gb || (this.Gb = !0,
        this.ae())
    }
    ;
    Fh.prototype.ae = function() {
        if (this.Bf)
            for (; this.Bf.length; )
                this.Bf.shift()()
    }
    ;
    var Gh = function() {
        if (!n.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            n.addEventListener("test", ta, b),
            n.removeEventListener("test", ta, b)
        } catch (c) {}
        return a
    }();
    var Hh = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.ze = !1
    };
    Hh.prototype.stopPropagation = function() {
        this.ze = !0
    }
    ;
    Hh.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var Ih = function(a, b) {
        Hh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.hb = null;
        a && this.init(a, b)
    };
    u(Ih, Hh);
    var Jh = Eh({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    Ih.prototype.init = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (ic) {
                a: {
                    try {
                        bc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else
            "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.offsetX = jc || void 0 !== a.offsetX ? a.offsetX : a.layerX,
        this.offsetY = jc || void 0 !== a.offsetY ? a.offsetY : a.layerY,
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Jh[a.pointerType] || "";
        this.state = a.state;
        this.hb = a;
        a.defaultPrevented && Ih.$c.preventDefault.call(this)
    }
    ;
    Ih.prototype.stopPropagation = function() {
        Ih.$c.stopPropagation.call(this);
        this.hb.stopPropagation ? this.hb.stopPropagation() : this.hb.cancelBubble = !0
    }
    ;
    Ih.prototype.preventDefault = function() {
        Ih.$c.preventDefault.call(this);
        var a = this.hb;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    Ih.prototype.yk = function() {
        return this.hb
    }
    ;
    var Kh = "closure_listenable_" + (1E6 * Math.random() | 0);
    var Lh = 0;
    var Mh = function(a, b, c, d, e) {
        this.listener = a;
        this.Jf = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ff = e;
        this.key = ++Lh;
        this.De = this.Te = !1
    }
      , Nh = function(a) {
        a.De = !0;
        a.listener = null;
        a.Jf = null;
        a.src = null;
        a.ff = null
    };
    var Oh = function(a) {
        this.src = a;
        this.Ua = {};
        this.Me = 0
    };
    Oh.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.Ua[f];
        a || (a = this.Ua[f] = [],
        this.Me++);
        var g = Ph(a, b, d, e);
        -1 < g ? (b = a[g],
        c || (b.Te = !1)) : (b = new Mh(b,this.src,f,!!d,e),
        b.Te = c,
        a.push(b));
        return b
    }
    ;
    Oh.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.Ua))
            return !1;
        var e = this.Ua[a];
        b = Ph(e, b, c, d);
        return -1 < b ? (Nh(e[b]),
        Va(e, b),
        0 == e.length && (delete this.Ua[a],
        this.Me--),
        !0) : !1
    }
    ;
    var Qh = function(a, b) {
        var c = b.type;
        c in a.Ua && Ua(a.Ua[c], b) && (Nh(b),
        0 == a.Ua[c].length && (delete a.Ua[c],
        a.Me--))
    };
    Oh.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.Ua)
            if (!a || c == a) {
                for (var d = this.Ua[c], e = 0; e < d.length; e++)
                    ++b,
                    Nh(d[e]);
                delete this.Ua[c];
                this.Me--
            }
        return b
    }
    ;
    Oh.prototype.Gg = function(a, b, c, d) {
        a = this.Ua[a.toString()];
        var e = -1;
        a && (e = Ph(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    Oh.prototype.hasListener = function(a, b) {
        var c = void 0 !== a
          , d = c ? a.toString() : ""
          , e = void 0 !== b;
        return mb(this.Ua, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b))
                    return !0;
            return !1
        })
    }
    ;
    var Ph = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.De && f.listener == b && f.capture == !!c && f.ff == d)
                return e
        }
        return -1
    };
    var Rh = "closure_lm_" + (1E6 * Math.random() | 0)
      , Sh = {}
      , Th = 0
      , Vh = function(a, b, c, d, e) {
        if (d && d.once)
            Uh(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Vh(a, b[f], c, d, e);
        else
            c = Wh(c),
            a && a[Kh] ? a.listen(b, c, q(d) ? !!d.capture : !!d, e) : Xh(a, b, c, !1, d, e)
    }
      , Xh = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = q(e) ? !!e.capture : !!e
          , k = Yh(a);
        k || (a[Rh] = k = new Oh(a));
        c = k.add(b, c, d, g, f);
        if (!c.Jf) {
            d = Zh();
            c.Jf = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                Gh || (e = g),
                void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent)
                a.attachEvent($h(b.toString()), d);
            else if (a.addListener && a.removeListener)
                v("change" === b, "MediaQueryList only has a change event"),
                a.addListener(d);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            Th++
        }
    }
      , Zh = function() {
        var a = ai
          , b = function(c) {
            return a.call(b.src, b.listener, c)
        };
        return b
    }
      , Uh = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Uh(a, b[f], c, d, e);
        else
            c = Wh(c),
            a && a[Kh] ? bi(a, b, c, q(d) ? !!d.capture : !!d, e) : Xh(a, b, c, !0, d, e)
    }
      , ci = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                ci(a, b[f], c, d, e);
        else
            d = q(d) ? !!d.capture : !!d,
            c = Wh(c),
            a && a[Kh] ? a.Ib.remove(String(b), c, d, e) : a && (a = Yh(a)) && (b = a.Gg(b, c, d, e)) && di(b)
    }
      , di = function(a) {
        if ("number" !== typeof a && a && !a.De) {
            var b = a.src;
            if (b && b[Kh])
                Qh(b.Ib, a);
            else {
                var c = a.type
                  , d = a.Jf;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent($h(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Th--;
                (c = Yh(b)) ? (Qh(c, a),
                0 == c.Me && (c.src = null,
                b[Rh] = null)) : Nh(a)
            }
        }
    }
      , $h = function(a) {
        return a in Sh ? Sh[a] : Sh[a] = "on" + a
    }
      , ai = function(a, b) {
        if (a.De)
            a = !0;
        else {
            b = new Ih(b,this);
            var c = a.listener
              , d = a.ff || a.src;
            a.Te && di(a);
            a = c.call(d, b)
        }
        return a
    }
      , Yh = function(a) {
        a = a[Rh];
        return a instanceof Oh ? a : null
    }
      , ei = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
      , Wh = function(a) {
        v(a, "Listener can not be null.");
        if ("function" === typeof a)
            return a;
        v(a.handleEvent, "An object listener must have handleEvent method.");
        a[ei] || (a[ei] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[ei]
    };
    var fi = function() {
        Fh.call(this);
        this.Ib = new Oh(this);
        this.Xj = this;
        this.dh = null
    };
    u(fi, Fh);
    fi.prototype[Kh] = !0;
    h = fi.prototype;
    h.addEventListener = function(a, b, c, d) {
        Vh(this, a, b, c, d)
    }
    ;
    h.removeEventListener = function(a, b, c, d) {
        ci(this, a, b, c, d)
    }
    ;
    h.dispatchEvent = function(a) {
        gi(this);
        var b = this.dh;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.dh)
                c.push(b),
                v(1E3 > ++d, "infinite loop")
        }
        b = this.Xj;
        d = a.type || a;
        if ("string" === typeof a)
            a = new Hh(a,b);
        else if (a instanceof Hh)
            a.target = a.target || b;
        else {
            var e = a;
            a = new Hh(d,b);
            qb(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.ze && 0 <= f; f--) {
                var g = a.currentTarget = c[f];
                e = hi(g, d, !0, a) && e
            }
        a.ze || (g = a.currentTarget = b,
        e = hi(g, d, !0, a) && e,
        a.ze || (e = hi(g, d, !1, a) && e));
        if (c)
            for (f = 0; !a.ze && f < c.length; f++)
                g = a.currentTarget = c[f],
                e = hi(g, d, !1, a) && e;
        return e
    }
    ;
    h.ae = function() {
        fi.$c.ae.call(this);
        this.Ib && this.Ib.removeAll(void 0);
        this.dh = null
    }
    ;
    h.listen = function(a, b, c, d) {
        gi(this);
        return this.Ib.add(String(a), b, !1, c, d)
    }
    ;
    var bi = function(a, b, c, d, e) {
        a.Ib.add(String(b), c, !0, d, e)
    }
      , hi = function(a, b, c, d) {
        b = a.Ib.Ua[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.De && g.capture == c) {
                var k = g.listener
                  , m = g.ff || g.src;
                g.Te && Qh(a.Ib, g);
                e = !1 !== k.call(m, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    fi.prototype.Gg = function(a, b, c, d) {
        return this.Ib.Gg(String(a), b, c, d)
    }
    ;
    fi.prototype.hasListener = function(a, b) {
        return this.Ib.hasListener(void 0 !== a ? String(a) : void 0, b)
    }
    ;
    var gi = function(a) {
        v(a.Ib, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var ki = function(a) {
        var b = [];
        ii(new ji, a, b);
        return b.join("")
    }
      , ji = function() {
        this.Kf = void 0
    }
      , ii = function(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        ii(a, a.Kf ? a.Kf.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        "function" != typeof e && (c.push(f),
                        li(d, c),
                        c.push(":"),
                        ii(a, a.Kf ? a.Kf.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                li(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
      , mi = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , ni = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g
      , li = function(a, b) {
        b.push('"', a.replace(ni, function(c) {
            var d = mi[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1),
            mi[c] = d);
            return d
        }), '"')
    };
    var oi = function() {};
    oi.prototype.Wh = null;
    oi.prototype.getOptions = function() {
        return this.Wh || (this.Wh = this.rf())
    }
    ;
    var pi, qi = function() {};
    u(qi, oi);
    qi.prototype.Yd = function() {
        var a = ri(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    }
    ;
    qi.prototype.rf = function() {
        var a = {};
        ri(this) && (a[0] = !0,
        a[1] = !0);
        return a
    }
    ;
    var ri = function(a) {
        if (!a.Ii && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.Ii = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.Ii
    };
    pi = new qi;
    var si = function() {};
    u(si, oi);
    si.prototype.Yd = function() {
        var a = new XMLHttpRequest;
        if ("withCredentials"in a)
            return a;
        if ("undefined" != typeof XDomainRequest)
            return new ti;
        throw Error("Unsupported browser");
    }
    ;
    si.prototype.rf = function() {
        return {}
    }
    ;
    var ti = function() {
        this.Tb = new XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseType = this.responseText = this.response = "";
        this.status = -1;
        this.responseXML = null;
        this.statusText = "";
        this.Tb.onload = r(this.Fk, this);
        this.Tb.onerror = r(this.Bi, this);
        this.Tb.onprogress = r(this.Hk, this);
        this.Tb.ontimeout = r(this.Lk, this)
    };
    h = ti.prototype;
    h.open = function(a, b, c) {
        if (null != c && !c)
            throw Error("Only async requests are supported.");
        this.Tb.open(a, b)
    }
    ;
    h.send = function(a) {
        if (a)
            if ("string" == typeof a)
                this.Tb.send(a);
            else
                throw Error("Only string data is supported");
        else
            this.Tb.send()
    }
    ;
    h.abort = function() {
        this.Tb.abort()
    }
    ;
    h.setRequestHeader = function() {}
    ;
    h.getResponseHeader = function(a) {
        return "content-type" == a.toLowerCase() ? this.Tb.contentType : ""
    }
    ;
    h.Fk = function() {
        this.status = 200;
        this.response = this.responseText = this.Tb.responseText;
        ui(this, 4)
    }
    ;
    h.Bi = function() {
        this.status = 500;
        this.response = this.responseText = "";
        ui(this, 4)
    }
    ;
    h.Lk = function() {
        this.Bi()
    }
    ;
    h.Hk = function() {
        this.status = 200;
        ui(this, 1)
    }
    ;
    var ui = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange)
            a.onreadystatechange()
    };
    ti.prototype.getAllResponseHeaders = function() {
        return "content-type: " + this.Tb.contentType
    }
    ;
    var vi = function(a, b) {
        this.name = a;
        this.value = b
    };
    vi.prototype.toString = function() {
        return this.name
    }
    ;
    var wi = new vi("OFF",Infinity), xi = new vi("SEVERE",1E3), yi = new vi("WARNING",900), zi = new vi("CONFIG",700), Ai = new vi("FINE",500), Bi = function() {
        this.Ue = 0;
        this.clear()
    }, Ci;
    Bi.prototype.clear = function() {
        this.Vh = Array(this.Ue);
        this.fi = -1;
        this.Ni = !1
    }
    ;
    var Di = function(a, b, c) {
        this.reset(a || wi, b, c, void 0, void 0)
    };
    Di.prototype.reset = function() {}
    ;
    var Ei = function(a) {
        this.level = null;
        this.Pk = [];
        this.parent = (void 0 === a ? null : a) || null;
        this.children = []
    }, Fi = function(a) {
        if (a.level)
            return a.level;
        if (a.parent)
            return Fi(a.parent);
        Ia("Root logger has no level set.");
        return wi
    }, Gi = function(a, b) {
        for (; a; )
            a.Pk.forEach(function(c) {
                c(b)
            }),
            a = a.parent
    }, Hi = function() {
        this.entries = {};
        var a = new Ei;
        a.level = zi;
        this.entries[""] = a
    }, Ii, Ji = function(a, b) {
        var c = a.entries[b];
        if (c)
            return c;
        c = Ji(a, b.substr(0, b.lastIndexOf(".")));
        var d = new Ei(c);
        a.entries[b] = d;
        c.children.push(d);
        return d
    }, Ki = function() {
        Ii || (Ii = new Hi);
        return Ii
    }, Li = function(a, b, c) {
        var d;
        if (d = a)
            if (d = a && b) {
                d = b.value;
                var e = a ? Fi(Ji(Ki(), a.getName())) : wi;
                d = d >= e.value
            }
        if (d) {
            b = b || wi;
            d = Ji(Ki(), a.getName());
            "function" === typeof c && (c = c());
            Ci || (Ci = new Bi);
            e = Ci;
            a = a.getName();
            if (0 < e.Ue) {
                var f = (e.fi + 1) % e.Ue;
                e.fi = f;
                e.Ni ? (e = e.Vh[f],
                e.reset(b, c, a),
                a = e) : (e.Ni = f == e.Ue - 1,
                a = e.Vh[f] = new Di(b,c,a))
            } else
                a = new Di(b,c,a);
            Gi(d, a)
        }
    }, Mi = function(a, b) {
        a && Li(a, Ai, b)
    };
    var Ni = function(a) {
        this.Pe = a.Zl || null;
        this.He = a.sm || !1;
        this.ld = this.Kc = void 0
    };
    u(Ni, oi);
    Ni.prototype.Yd = function() {
        var a = new Oi(this.Pe,this.He);
        this.Kc && a.Ch(this.Kc);
        this.ld && a.zj(this.ld);
        return a
    }
    ;
    Ni.prototype.rf = function(a) {
        return function() {
            return a
        }
    }({});
    Ni.prototype.Ch = function(a) {
        this.Kc = a
    }
    ;
    Ni.prototype.zj = function(a) {
        this.ld = a
    }
    ;
    var Oi = function(a, b) {
        fi.call(this);
        this.Pe = a;
        this.He = b;
        this.ld = this.Kc = void 0;
        this.status = this.readyState = 0;
        this.responseType = this.responseText = this.response = this.statusText = "";
        this.onreadystatechange = this.responseXML = null;
        this.xh = new Headers;
        this.Md = null;
        this.Vi = "GET";
        this.lb = "";
        this.Wb = !1;
        this.Oh = this.Zd = this.Ze = null
    };
    u(Oi, fi);
    Oi.prototype.open = function(a, b, c) {
        v(!!c, "Only async requests are supported.");
        if (0 != this.readyState)
            throw this.abort(),
            Error("Error reopening a connection");
        this.Vi = a;
        this.lb = b;
        this.readyState = 1;
        Pi(this)
    }
    ;
    Oi.prototype.send = function(a) {
        if (1 != this.readyState)
            throw this.abort(),
            Error("need to call open() first. ");
        this.Wb = !0;
        var b = {
            headers: this.xh,
            method: this.Vi,
            credentials: this.Kc,
            cache: this.ld
        };
        a && (b.body = a);
        (this.Pe || n).fetch(new Request(this.lb,b)).then(this.Kk.bind(this), this.ef.bind(this))
    }
    ;
    Oi.prototype.abort = function() {
        this.response = this.responseText = "";
        this.xh = new Headers;
        this.status = 0;
        this.Zd && this.Zd.cancel("Request was aborted.");
        1 <= this.readyState && this.Wb && 4 != this.readyState && (this.Wb = !1,
        Qi(this));
        this.readyState = 0
    }
    ;
    Oi.prototype.Kk = function(a) {
        if (this.Wb && (this.Ze = a,
        this.Md || (this.status = this.Ze.status,
        this.statusText = this.Ze.statusText,
        this.Md = a.headers,
        this.readyState = 2,
        Pi(this)),
        this.Wb && (this.readyState = 3,
        Pi(this),
        this.Wb)))
            if ("arraybuffer" === this.responseType)
                a.arrayBuffer().then(this.Ik.bind(this), this.ef.bind(this));
            else if ("undefined" !== typeof n.ReadableStream && "body"in a) {
                this.Zd = a.body.getReader();
                if (this.He) {
                    if (this.responseType)
                        throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                    this.response = []
                } else
                    this.response = this.responseText = "",
                    this.Oh = new TextDecoder;
                Ri(this)
            } else
                a.text().then(this.Jk.bind(this), this.ef.bind(this))
    }
    ;
    var Ri = function(a) {
        a.Zd.read().then(a.Dk.bind(a)).catch(a.ef.bind(a))
    };
    Oi.prototype.Dk = function(a) {
        if (this.Wb) {
            if (this.He && a.value)
                this.response.push(a.value);
            else if (!this.He) {
                var b = a.value ? a.value : new Uint8Array(0);
                if (b = this.Oh.decode(b, {
                    stream: !a.done
                }))
                    this.response = this.responseText += b
            }
            a.done ? Qi(this) : Pi(this);
            3 == this.readyState && Ri(this)
        }
    }
    ;
    Oi.prototype.Jk = function(a) {
        this.Wb && (this.response = this.responseText = a,
        Qi(this))
    }
    ;
    Oi.prototype.Ik = function(a) {
        this.Wb && (this.response = a,
        Qi(this))
    }
    ;
    Oi.prototype.ef = function() {
        var a = this.Ma;
        a && Li(a, yi, "Failed to fetch url " + this.lb);
        this.Wb && Qi(this)
    }
    ;
    var Qi = function(a) {
        a.readyState = 4;
        a.Ze = null;
        a.Zd = null;
        a.Oh = null;
        Pi(a)
    };
    h = Oi.prototype;
    h.setRequestHeader = function(a, b) {
        this.xh.append(a, b)
    }
    ;
    h.getResponseHeader = function(a) {
        return this.Md ? this.Md.get(a.toLowerCase()) || "" : ((a = this.Ma) && Li(a, yi, "Attempting to get response header but no headers have been received for url: " + this.lb),
        "")
    }
    ;
    h.getAllResponseHeaders = function() {
        if (!this.Md) {
            var a = this.Ma;
            a && Li(a, yi, "Attempting to get all response headers but no headers have been received for url: " + this.lb);
            return ""
        }
        a = [];
        for (var b = this.Md.entries(), c = b.next(); !c.done; )
            c = c.value,
            a.push(c[0] + ": " + c[1]),
            c = b.next();
        return a.join("\r\n")
    }
    ;
    h.Ch = function(a) {
        this.Kc = a
    }
    ;
    h.zj = function(a) {
        this.ld = a
    }
    ;
    var Pi = function(a) {
        a.onreadystatechange && a.onreadystatechange.call(a)
    };
    Object.defineProperty(Oi.prototype, "withCredentials", {
        get: function() {
            return "include" === this.Kc
        },
        set: function(a) {
            this.Ch(a ? "include" : "same-origin")
        }
    });
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var Ti = function(a) {
        var b = Si;
        this.Tf = [];
        this.Yi = b;
        this.ki = a || null;
        this.ke = this.ud = !1;
        this.kc = void 0;
        this.Jh = this.Uh = this.ng = !1;
        this.Zf = 0;
        this.Na = null;
        this.og = 0
    };
    Ti.prototype.cancel = function(a) {
        if (this.ud)
            this.kc instanceof Ti && this.kc.cancel();
        else {
            if (this.Na) {
                var b = this.Na;
                delete this.Na;
                a ? b.cancel(a) : (b.og--,
                0 >= b.og && b.cancel())
            }
            this.Yi ? this.Yi.call(this.ki, this) : this.Jh = !0;
            this.ud || Ui(this, new Vi(this))
        }
    }
    ;
    Ti.prototype.di = function(a, b) {
        this.ng = !1;
        Wi(this, a, b)
    }
    ;
    var Wi = function(a, b, c) {
        a.ud = !0;
        a.kc = c;
        a.ke = !b;
        Xi(a)
    }
      , Zi = function(a) {
        if (a.ud) {
            if (!a.Jh)
                throw new Yi(a);
            a.Jh = !1
        }
    };
    Ti.prototype.callback = function(a) {
        Zi(this);
        $i(a);
        Wi(this, !0, a)
    }
    ;
    var Ui = function(a, b) {
        Zi(a);
        $i(b);
        Wi(a, !1, b)
    }
      , $i = function(a) {
        v(!(a instanceof Ti), "An execution sequence may not be initiated with a blocking Deferred.")
    }
      , bj = function(a, b) {
        aj(a, null, b, void 0)
    }
      , aj = function(a, b, c, d) {
        v(!a.Uh, "Blocking Deferreds can not be re-used");
        a.Tf.push([b, c, d]);
        a.ud && Xi(a)
    };
    Ti.prototype.then = function(a, b, c) {
        var d, e, f = new E(function(g, k) {
            d = g;
            e = k
        }
        );
        aj(this, d, function(g) {
            g instanceof Vi ? f.cancel() : e(g)
        });
        return f.then(a, b, c)
    }
    ;
    Ti.prototype.$goog_Thenable = !0;
    var cj = function(a) {
        return Qa(a.Tf, function(b) {
            return "function" === typeof b[1]
        })
    }
      , Xi = function(a) {
        if (a.Zf && a.ud && cj(a)) {
            var b = a.Zf
              , c = dj[b];
            c && (n.clearTimeout(c.bc),
            delete dj[b]);
            a.Zf = 0
        }
        a.Na && (a.Na.og--,
        delete a.Na);
        b = a.kc;
        for (var d = c = !1; a.Tf.length && !a.ng; ) {
            var e = a.Tf.shift()
              , f = e[0]
              , g = e[1];
            e = e[2];
            if (f = a.ke ? g : f)
                try {
                    var k = f.call(e || a.ki, b);
                    void 0 !== k && (a.ke = a.ke && (k == b || k instanceof Error),
                    a.kc = b = k);
                    if (zf(b) || "function" === typeof n.Promise && b instanceof n.Promise)
                        d = !0,
                        a.ng = !0
                } catch (m) {
                    b = m,
                    a.ke = !0,
                    cj(a) || (c = !0)
                }
        }
        a.kc = b;
        d && (k = r(a.di, a, !0),
        d = r(a.di, a, !1),
        b instanceof Ti ? (aj(b, k, d),
        b.Uh = !0) : b.then(k, d));
        c && (b = new ej(b),
        dj[b.bc] = b,
        a.Zf = b.bc)
    }
      , Yi = function() {
        Ea.call(this)
    };
    u(Yi, Ea);
    Yi.prototype.message = "Deferred has already fired";
    Yi.prototype.name = "AlreadyCalledError";
    var Vi = function() {
        Ea.call(this)
    };
    u(Vi, Ea);
    Vi.prototype.message = "Deferred was canceled";
    Vi.prototype.name = "CanceledError";
    var ej = function(a) {
        this.bc = n.setTimeout(r(this.Rl, this), 0);
        this.Cb = a
    };
    ej.prototype.Rl = function() {
        v(dj[this.bc], "Cannot throw an error that is not scheduled.");
        delete dj[this.bc];
        throw this.Cb;
    }
    ;
    var dj = {};
    var ij = function(a) {
        var b = {}
          , c = b.document || document
          , d = Bb(a).toString()
          , e = Cc(document, "SCRIPT")
          , f = {
            uj: e,
            Ke: void 0
        }
          , g = new Ti(f)
          , k = null
          , m = null != b.timeout ? b.timeout : 5E3;
        0 < m && (k = window.setTimeout(function() {
            fj(e, !0);
            Ui(g, new gj(1,"Timeout reached for loading script " + d))
        }, m),
        f.Ke = k);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (fj(e, b.nm || !1, k),
            g.callback(null))
        }
        ;
        e.onerror = function() {
            fj(e, !0, k);
            Ui(g, new gj(0,"Error while loading script " + d))
        }
        ;
        f = b.attributes || {};
        qb(f, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        zc(e, f);
        Xb(e, a);
        hj(c).appendChild(e);
        return g
    }
      , hj = function(a) {
        var b;
        return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
    }
      , Si = function() {
        if (this && this.uj) {
            var a = this.uj;
            a && "SCRIPT" == a.tagName && fj(a, !0, this.Ke)
        }
    }
      , fj = function(a, b, c) {
        null != c && n.clearTimeout(c);
        a.onload = ta;
        a.onerror = ta;
        a.onreadystatechange = ta;
        b && window.setTimeout(function() {
            Fc(a)
        }, 0)
    }
      , gj = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Ea.call(this, c);
        this.code = a
    };
    u(gj, Ea);
    var jj = "StopIteration"in n ? n.StopIteration : {
        message: "StopIteration",
        stack: ""
    }
      , kj = function() {};
    kj.prototype.next = function() {
        throw jj;
    }
    ;
    kj.prototype.Wj = function() {
        return this
    }
    ;
    var lj = function(a, b) {
        this.Wa = {};
        this.Ia = [];
        this.jd = this.va = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else
            a && this.addAll(a)
    };
    h = lj.prototype;
    h.xi = function() {
        return this.va
    }
    ;
    h.Vb = function() {
        mj(this);
        for (var a = [], b = 0; b < this.Ia.length; b++)
            a.push(this.Wa[this.Ia[b]]);
        return a
    }
    ;
    h.ac = function() {
        mj(this);
        return this.Ia.concat()
    }
    ;
    h.od = function(a) {
        return nj(this.Wa, a)
    }
    ;
    h.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.va != a.xi())
            return !1;
        b = b || oj;
        mj(this);
        for (var c, d = 0; c = this.Ia[d]; d++)
            if (!b(this.get(c), a.get(c)))
                return !1;
        return !0
    }
    ;
    var oj = function(a, b) {
        return a === b
    };
    lj.prototype.isEmpty = function() {
        return 0 == this.va
    }
    ;
    lj.prototype.clear = function() {
        this.Wa = {};
        this.jd = this.va = this.Ia.length = 0
    }
    ;
    lj.prototype.remove = function(a) {
        return nj(this.Wa, a) ? (delete this.Wa[a],
        this.va--,
        this.jd++,
        this.Ia.length > 2 * this.va && mj(this),
        !0) : !1
    }
    ;
    var mj = function(a) {
        if (a.va != a.Ia.length) {
            for (var b = 0, c = 0; b < a.Ia.length; ) {
                var d = a.Ia[b];
                nj(a.Wa, d) && (a.Ia[c++] = d);
                b++
            }
            a.Ia.length = c
        }
        if (a.va != a.Ia.length) {
            var e = {};
            for (c = b = 0; b < a.Ia.length; )
                d = a.Ia[b],
                nj(e, d) || (a.Ia[c++] = d,
                e[d] = 1),
                b++;
            a.Ia.length = c
        }
    };
    h = lj.prototype;
    h.get = function(a, b) {
        return nj(this.Wa, a) ? this.Wa[a] : b
    }
    ;
    h.set = function(a, b) {
        nj(this.Wa, a) || (this.va++,
        this.Ia.push(a),
        this.jd++);
        this.Wa[a] = b
    }
    ;
    h.addAll = function(a) {
        if (a instanceof lj)
            for (var b = a.ac(), c = 0; c < b.length; c++)
                this.set(b[c], a.get(b[c]));
        else
            for (b in a)
                this.set(b, a[b])
    }
    ;
    h.forEach = function(a, b) {
        for (var c = this.ac(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    h.clone = function() {
        return new lj(this)
    }
    ;
    h.Wj = function(a) {
        mj(this);
        var b = 0
          , c = this.jd
          , d = this
          , e = new kj;
        e.next = function() {
            if (c != d.jd)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.Ia.length)
                throw jj;
            var f = d.Ia[b++];
            return a ? f : d.Wa[f]
        }
        ;
        return e
    }
    ;
    var nj = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var pj = function(a) {
        if (a.Vb && "function" == typeof a.Vb)
            return a.Vb();
        if ("string" === typeof a)
            return a.split("");
        if (va(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a)
            b[c++] = a[d];
        return b
    }
      , qj = function(a) {
        if (a.ac && "function" == typeof a.ac)
            return a.ac();
        if (!a.Vb || "function" != typeof a.Vb) {
            if (va(a) || "string" === typeof a) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)
                    b.push(c);
                return b
            }
            b = [];
            c = 0;
            for (var d in a)
                b[c++] = d;
            return b
        }
    }
      , rj = function(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach)
            a.forEach(b, c);
        else if (va(a) || "string" === typeof a)
            x(a, b, c);
        else
            for (var d = qj(a), e = pj(a), f = e.length, g = 0; g < f; g++)
                b.call(c, e[g], d && d[g], a)
    };
    var sj = function(a, b, c) {
        if ("function" === typeof a)
            c && (a = r(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = r(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
    }
      , tj = function(a) {
        var b = null;
        return (new E(function(c, d) {
            b = sj(function() {
                c(void 0)
            }, a);
            -1 == b && d(Error("Failed to schedule timer."))
        }
        )).u(function(c) {
            n.clearTimeout(b);
            throw c;
        })
    };
    var uj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
      , vj = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    };
    var wj = function(a) {
        fi.call(this);
        this.headers = new lj;
        this.fg = a || null;
        this.tc = !1;
        this.eg = this.v = null;
        this.re = this.Ri = this.vf = "";
        this.Rc = this.Mg = this.qf = this.Bg = !1;
        this.Pd = 0;
        this.Xf = null;
        this.Of = "";
        this.$f = this.xl = this.Sj = !1;
        this.Ph = null
    };
    u(wj, fi);
    var xj = /^https?$/i
      , yj = ["POST", "PUT"];
    wj.prototype.setTrustToken = function(a) {
        this.Ph = a
    }
    ;
    wj.prototype.send = function(a, b, c, d) {
        if (this.v)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.vf + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.vf = a;
        this.re = "";
        this.Ri = b;
        this.Bg = !1;
        this.tc = !0;
        this.v = this.fg ? this.fg.Yd() : pi.Yd();
        this.eg = this.fg ? this.fg.getOptions() : pi.getOptions();
        this.v.onreadystatechange = r(this.ij, this);
        this.xl && "onprogress"in this.v && (this.v.onprogress = r(function(f) {
            this.hj(f, !0)
        }, this),
        this.v.upload && (this.v.upload.onprogress = r(this.hj, this)));
        try {
            Mi(this.Ma, zj(this, "Opening Xhr")),
            this.Mg = !0,
            this.v.open(b, String(a), !0),
            this.Mg = !1
        } catch (f) {
            Mi(this.Ma, zj(this, "Error opening Xhr: " + f.message));
            this.Cb(5, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && rj(d, function(f, g) {
            e.set(g, f)
        });
        d = Ra(e.ac());
        c = n.FormData && a instanceof n.FormData;
        !Ta(yj, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.v.setRequestHeader(g, f)
        }, this);
        this.Of && (this.v.responseType = this.Of);
        "withCredentials"in this.v && this.v.withCredentials !== this.Sj && (this.v.withCredentials = this.Sj);
        if ("setTrustToken"in this.v && this.Ph)
            try {
                this.v.setTrustToken(this.Ph)
            } catch (f) {
                Mi(this.Ma, zj(this, "Error SetTrustToken: " + f.message))
            }
        try {
            Aj(this),
            0 < this.Pd && (this.$f = Bj(this.v),
            Mi(this.Ma, zj(this, "Will abort after " + this.Pd + "ms if incomplete, xhr2 " + this.$f)),
            this.$f ? (this.v.timeout = this.Pd,
            this.v.ontimeout = r(this.Ke, this)) : this.Xf = sj(this.Ke, this.Pd, this)),
            Mi(this.Ma, zj(this, "Sending request")),
            this.qf = !0,
            this.v.send(a),
            this.qf = !1
        } catch (f) {
            Mi(this.Ma, zj(this, "Send error: " + f.message)),
            this.Cb(5, f)
        }
    }
    ;
    var Bj = function(a) {
        return fc && rc() && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
      , Sa = function(a) {
        return "content-type" == a.toLowerCase()
    };
    wj.prototype.Ke = function() {
        "undefined" != typeof pa && this.v && (this.re = "Timed out after " + this.Pd + "ms, aborting",
        Mi(this.Ma, zj(this, this.re)),
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    wj.prototype.Cb = function(a, b) {
        this.tc = !1;
        this.v && (this.Rc = !0,
        this.v.abort(),
        this.Rc = !1);
        this.re = b;
        Cj(this);
        Dj(this)
    }
    ;
    var Cj = function(a) {
        a.Bg || (a.Bg = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    };
    wj.prototype.abort = function() {
        this.v && this.tc && (Mi(this.Ma, zj(this, "Aborting")),
        this.tc = !1,
        this.Rc = !0,
        this.v.abort(),
        this.Rc = !1,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        Dj(this))
    }
    ;
    wj.prototype.ae = function() {
        this.v && (this.tc && (this.tc = !1,
        this.Rc = !0,
        this.v.abort(),
        this.Rc = !1),
        Dj(this, !0));
        wj.$c.ae.call(this)
    }
    ;
    wj.prototype.ij = function() {
        this.isDisposed() || (this.Mg || this.qf || this.Rc ? Ej(this) : this.ol())
    }
    ;
    wj.prototype.ol = function() {
        Ej(this)
    }
    ;
    var Ej = function(a) {
        if (a.tc && "undefined" != typeof pa)
            if (a.eg[1] && 4 == Fj(a) && 2 == a.getStatus())
                Mi(a.Ma, zj(a, "Local request error detected and ignored"));
            else if (a.qf && 4 == Fj(a))
                sj(a.ij, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            4 == Fj(a)) {
                Mi(a.Ma, zj(a, "Request complete"));
                a.tc = !1;
                try {
                    var b = a.getStatus();
                    a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.vf).match(uj)[1] || null;
                            if (!f && n.self && n.self.location) {
                                var g = n.self.location.protocol;
                                f = g.substr(0, g.length - 1)
                            }
                            e = !xj.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    if (d)
                        a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                    else {
                        try {
                            var k = 2 < Fj(a) ? a.v.statusText : ""
                        } catch (m) {
                            Mi(a.Ma, "Can not get status: " + m.message),
                            k = ""
                        }
                        a.re = k + " [" + a.getStatus() + "]";
                        Cj(a)
                    }
                } finally {
                    Dj(a)
                }
            }
    };
    wj.prototype.hj = function(a, b) {
        v("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
        this.dispatchEvent(Gj(a, "progress"));
        this.dispatchEvent(Gj(a, b ? "downloadprogress" : "uploadprogress"))
    }
    ;
    var Gj = function(a, b) {
        return {
            type: b,
            lengthComputable: a.lengthComputable,
            loaded: a.loaded,
            total: a.total
        }
    }
      , Dj = function(a, b) {
        if (a.v) {
            Aj(a);
            var c = a.v
              , d = a.eg[0] ? ta : null;
            a.v = null;
            a.eg = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                (a = a.Ma) && Li(a, xi, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    }
      , Aj = function(a) {
        a.v && a.$f && (a.v.ontimeout = null);
        a.Xf && (n.clearTimeout(a.Xf),
        a.Xf = null)
    }
      , Fj = function(a) {
        return a.v ? a.v.readyState : 0
    };
    wj.prototype.getStatus = function() {
        try {
            return 2 < Fj(this) ? this.v.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    wj.prototype.getResponse = function() {
        try {
            if (!this.v)
                return null;
            if ("response"in this.v)
                return this.v.response;
            switch (this.Of) {
            case "":
            case "text":
                return this.v.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer"in this.v)
                    return this.v.mozResponseArrayBuffer
            }
            var a = this.Ma;
            a && Li(a, xi, "Response type " + this.Of + " is not supported on this browser");
            return null
        } catch (b) {
            return Mi(this.Ma, "Can not get response: " + b.message),
            null
        }
    }
    ;
    wj.prototype.getResponseHeader = function(a) {
        if (this.v && 4 == Fj(this))
            return a = this.v.getResponseHeader(a),
            null === a ? void 0 : a
    }
    ;
    wj.prototype.getAllResponseHeaders = function() {
        return this.v && 4 == Fj(this) ? this.v.getAllResponseHeaders() || "" : ""
    }
    ;
    var zj = function(a, b) {
        return b + " [" + a.Ri + " " + a.vf + " " + a.getStatus() + "]"
    };
    var Hj = function(a, b) {
        this.La = this.ad = this.Za = "";
        this.Xb = null;
        this.Oc = this.Ef = "";
        this.Db = this.Xk = !1;
        if (a instanceof Hj) {
            this.Db = void 0 !== b ? b : a.Db;
            Ij(this, a.Za);
            var c = a.ad;
            Jj(this);
            this.ad = c;
            Kj(this, a.La);
            Lj(this, a.Xb);
            this.setPath(a.getPath());
            Mj(this, a.vb.clone());
            a = a.Oc;
            Jj(this);
            this.Oc = a
        } else
            a && (c = String(a).match(uj)) ? (this.Db = !!b,
            Ij(this, c[1] || "", !0),
            a = c[2] || "",
            Jj(this),
            this.ad = Nj(a),
            Kj(this, c[3] || "", !0),
            Lj(this, c[4]),
            this.setPath(c[5] || "", !0),
            Mj(this, c[6] || "", !0),
            a = c[7] || "",
            Jj(this),
            this.Oc = Nj(a)) : (this.Db = !!b,
            this.vb = new Oj(null,this.Db))
    };
    Hj.prototype.toString = function() {
        var a = []
          , b = this.Za;
        b && a.push(Pj(b, Qj, !0), ":");
        var c = this.La;
        if (c || "file" == b)
            a.push("//"),
            (b = this.ad) && a.push(Pj(b, Qj, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.Xb,
            null != c && a.push(":", String(c));
        if (c = this.getPath())
            this.La && "/" != c.charAt(0) && a.push("/"),
            a.push(Pj(c, "/" == c.charAt(0) ? Rj : Sj, !0));
        (c = this.vb.toString()) && a.push("?", c);
        (c = this.Oc) && a.push("#", Pj(c, Tj));
        return a.join("")
    }
    ;
    Hj.prototype.resolve = function(a) {
        var b = this.clone()
          , c = !!a.Za;
        c ? Ij(b, a.Za) : c = !!a.ad;
        if (c) {
            var d = a.ad;
            Jj(b);
            b.ad = d
        } else
            c = !!a.La;
        c ? Kj(b, a.La) : c = null != a.Xb;
        d = a.getPath();
        if (c)
            Lj(b, a.Xb);
        else if (c = !!a.Ef) {
            if ("/" != d.charAt(0))
                if (this.La && !this.Ef)
                    d = "/" + d;
                else {
                    var e = b.getPath().lastIndexOf("/");
                    -1 != e && (d = b.getPath().substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (y(e, "./") || y(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length; ) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(k),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.setPath(d) : c = "" !== a.vb.toString();
        c ? Mj(b, a.vb.clone()) : c = !!a.Oc;
        c && (a = a.Oc,
        Jj(b),
        b.Oc = a);
        return b
    }
    ;
    Hj.prototype.clone = function() {
        return new Hj(this)
    }
    ;
    var Ij = function(a, b, c) {
        Jj(a);
        a.Za = c ? Nj(b, !0) : b;
        a.Za && (a.Za = a.Za.replace(/:$/, ""))
    }
      , Kj = function(a, b, c) {
        Jj(a);
        a.La = c ? Nj(b, !0) : b
    }
      , Lj = function(a, b) {
        Jj(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.Xb = b
        } else
            a.Xb = null
    };
    Hj.prototype.getPath = function() {
        return this.Ef
    }
    ;
    Hj.prototype.setPath = function(a, b) {
        Jj(this);
        this.Ef = b ? Nj(a, !0) : a;
        return this
    }
    ;
    var Mj = function(a, b, c) {
        Jj(a);
        b instanceof Oj ? (a.vb = b,
        a.vb.Eh(a.Db)) : (c || (b = Pj(b, Uj)),
        a.vb = new Oj(b,a.Db))
    };
    Hj.prototype.getQuery = function() {
        return this.vb.toString()
    }
    ;
    var L = function(a, b, c) {
        Jj(a);
        a.vb.set(b, c)
    }
      , Vj = function(a, b) {
        return a.vb.get(b)
    };
    Hj.prototype.removeParameter = function(a) {
        Jj(this);
        this.vb.remove(a);
        return this
    }
    ;
    var Jj = function(a) {
        if (a.Xk)
            throw Error("Tried to modify a read-only Uri");
    };
    Hj.prototype.Eh = function(a) {
        this.Db = a;
        this.vb && this.vb.Eh(a)
    }
    ;
    var M = function(a) {
        return a instanceof Hj ? a.clone() : new Hj(a,void 0)
    }
      , Wj = function(a, b, c, d) {
        var e = new Hj(null,void 0);
        a && Ij(e, a);
        b && Kj(e, b);
        c && Lj(e, c);
        d && e.setPath(d);
        return e
    }
      , Nj = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , Pj = function(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Xj),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
      , Xj = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , Qj = /[#\/\?@]/g
      , Sj = /[#\?:]/g
      , Rj = /[#\?]/g
      , Uj = /[#\?@]/g
      , Tj = /#/g
      , Oj = function(a, b) {
        this.va = this.Aa = null;
        this.nb = a || null;
        this.Db = !!b
    }
      , Yj = function(a) {
        a.Aa || (a.Aa = new lj,
        a.va = 0,
        a.nb && vj(a.nb, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
      , Zj = function(a) {
        var b = qj(a);
        if ("undefined" == typeof b)
            throw Error("Keys are undefined");
        var c = new Oj(null,void 0);
        a = pj(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d]
              , f = a[d];
            Array.isArray(f) ? c.setValues(e, f) : c.add(e, f)
        }
        return c
    };
    h = Oj.prototype;
    h.xi = function() {
        Yj(this);
        return this.va
    }
    ;
    h.add = function(a, b) {
        Yj(this);
        this.nb = null;
        a = this.rb(a);
        var c = this.Aa.get(a);
        c || this.Aa.set(a, c = []);
        c.push(b);
        this.va = Ja(this.va) + 1;
        return this
    }
    ;
    h.remove = function(a) {
        Yj(this);
        a = this.rb(a);
        return this.Aa.od(a) ? (this.nb = null,
        this.va = Ja(this.va) - this.Aa.get(a).length,
        this.Aa.remove(a)) : !1
    }
    ;
    h.clear = function() {
        this.Aa = this.nb = null;
        this.va = 0
    }
    ;
    h.isEmpty = function() {
        Yj(this);
        return 0 == this.va
    }
    ;
    h.od = function(a) {
        Yj(this);
        a = this.rb(a);
        return this.Aa.od(a)
    }
    ;
    h.forEach = function(a, b) {
        Yj(this);
        this.Aa.forEach(function(c, d) {
            x(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    h.ac = function() {
        Yj(this);
        for (var a = this.Aa.Vb(), b = this.Aa.ac(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    h.Vb = function(a) {
        Yj(this);
        var b = [];
        if ("string" === typeof a)
            this.od(a) && (b = Xa(b, this.Aa.get(this.rb(a))));
        else {
            a = this.Aa.Vb();
            for (var c = 0; c < a.length; c++)
                b = Xa(b, a[c])
        }
        return b
    }
    ;
    h.set = function(a, b) {
        Yj(this);
        this.nb = null;
        a = this.rb(a);
        this.od(a) && (this.va = Ja(this.va) - this.Aa.get(a).length);
        this.Aa.set(a, [b]);
        this.va = Ja(this.va) + 1;
        return this
    }
    ;
    h.get = function(a, b) {
        if (!a)
            return b;
        a = this.Vb(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    h.setValues = function(a, b) {
        this.remove(a);
        0 < b.length && (this.nb = null,
        this.Aa.set(this.rb(a), Ya(b)),
        this.va = Ja(this.va) + b.length)
    }
    ;
    h.toString = function() {
        if (this.nb)
            return this.nb;
        if (!this.Aa)
            return "";
        for (var a = [], b = this.Aa.ac(), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.Vb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.nb = a.join("&")
    }
    ;
    h.clone = function() {
        var a = new Oj;
        a.nb = this.nb;
        this.Aa && (a.Aa = this.Aa.clone(),
        a.va = this.va);
        return a
    }
    ;
    h.rb = function(a) {
        a = String(a);
        this.Db && (a = a.toLowerCase());
        return a
    }
    ;
    h.Eh = function(a) {
        a && !this.Db && (Yj(this),
        this.nb = null,
        this.Aa.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c),
            this.setValues(d, b))
        }, this));
        this.Db = a
    }
    ;
    h.extend = function(a) {
        for (var b = 0; b < arguments.length; b++)
            rj(arguments[b], function(c, d) {
                this.add(d, c)
            }, this)
    }
    ;
    var ak = {
        bm: {
            $e: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
            Qf: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
            kf: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "b"
        },
        jm: {
            $e: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
            Qf: "https://securetoken.googleapis.com/v1/token",
            kf: "https://identitytoolkit.googleapis.com/v2/",
            id: "p"
        },
        km: {
            $e: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
            Qf: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
            kf: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "s"
        },
        lm: {
            $e: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
            Qf: "https://test-securetoken.sandbox.googleapis.com/v1/token",
            kf: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "t"
        }
    }, bk = function(a) {
        for (var b in ak)
            if (ak[b].id === a)
                return a = ak[b],
                {
                    firebaseEndpoint: a.$e,
                    secureTokenEndpoint: a.Qf,
                    identityPlatformEndpoint: a.kf
                };
        return null
    }, ck;
    ck = bk("__EID__") ? "__EID__" : void 0;
    var angular, dk = function() {
        var a = N();
        return fc && !!uc && 11 == uc || /Edge\/\d+/.test(a)
    }, ek = function() {
        return n.window && n.window.location.href || self && self.location && self.location.href || ""
    }, fk = function(a, b) {
        b = b || n.window;
        var c = "about:blank";
        a && (c = Ib(Mb(a) || Ob));
        b.location.href = c
    }, gk = function(a, b) {
        var c = [], d;
        for (d in a)
            d in b ? typeof a[d] != typeof b[d] ? c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < gk(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
        for (d in b)
            d in a || c.push(d);
        return c
    }, ik = function() {
        var a = N();
        a = "Chrome" != hk(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
        return a && 30 > a ? !1 : !fc || !uc || 9 < uc
    }, jk = function(a) {
        a = (a || N()).toLowerCase();
        return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1
    }, kk = function(a) {
        a = a || n.window;
        try {
            a.close()
        } catch (b) {}
    }, lk = function(a, b, c) {
        var d = Math.floor(1E9 * Math.random()).toString();
        b = b || 500;
        c = c || 600;
        var e = (window.screen.availHeight - c) / 2
          , f = (window.screen.availWidth - b) / 2;
        b = {
            width: b,
            height: c,
            top: 0 < e ? e : 0,
            left: 0 < f ? f : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1
        };
        c = N().toLowerCase();
        d && (b.target = d,
        y(c, "crios/") && (b.target = "_blank"));
        "Firefox" == hk(N()) && (a = a || "http://localhost",
        b.scrollbars = !0);
        c = a || "";
        (a = b) || (a = {});
        d = window;
        b = c instanceof Hb ? c : Mb("undefined" != typeof c.href ? c.href : String(c)) || Ob;
        c = a.target || c.target;
        e = [];
        for (g in a)
            switch (g) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(g + "=" + a[g]);
                break;
            case "target":
            case "noopener":
            case "noreferrer":
                break;
            default:
                e.push(g + "=" + (a[g] ? 1 : 0))
            }
        var g = e.join(",");
        (ac() || z("iPad") || z("iPod")) && d.navigator && d.navigator.standalone && c && "_self" != c ? (g = Cc(document, "A"),
        Wb(g, b),
        g.setAttribute("target", c),
        a.noreferrer && g.setAttribute("rel", "noreferrer"),
        a = document.createEvent("MouseEvent"),
        a.initMouseEvent("click", !0, !0, d, 1),
        g.dispatchEvent(a),
        g = {}) : a.noreferrer ? (g = Yb("", d, c, g),
        a = Ib(b),
        g && (hc && y(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"),
        g.opener = null,
        a = Tb(new xb(ub,"b/12014412, meta tag with sanitized URL"), '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + $b(a) + '">'),
        (d = g.document) && d.write && (d.write(Rb(a)),
        d.close()))) : (g = Yb(b, d, c, g)) && a.noopener && (g.opener = null);
        if (g)
            try {
                g.focus()
            } catch (k) {}
        return g
    }, mk = function(a) {
        return new E(function(b) {
            var c = function() {
                tj(2E3).then(function() {
                    if (!a || a.closed)
                        b();
                    else
                        return c()
                })
            };
            return c()
        }
        )
    }, ok = function(a, b) {
        var c = M(b);
        b = c.Za;
        c = c.La;
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            var f = c;
            var g = b;
            0 == e.indexOf("chrome-extension://") ? f = M(e).La == f && "chrome-extension" == g : "http" != g && "https" != g ? f = !1 : nk.test(e) ? f = f == e : (e = e.split(".").join("\\."),
            f = (new RegExp("^(.+\\." + e + "|" + e + ")$","i")).test(f));
            if (f)
                return !0
        }
        return !1
    }, nk = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, pk = /^[^@]+@[^@]+$/, qk = function() {
        var a = null;
        return (new E(function(b) {
            "complete" == n.document.readyState ? b() : (a = function() {
                b()
            }
            ,
            Uh(window, "load", a))
        }
        )).u(function(b) {
            ci(window, "load", a);
            throw b;
        })
    }, sk = function() {
        return rk(void 0) ? qk().then(function() {
            return new E(function(a, b) {
                var c = n.document
                  , d = setTimeout(function() {
                    b(Error("Cordova framework is not ready."))
                }, 1E3);
                c.addEventListener("deviceready", function() {
                    clearTimeout(d);
                    a()
                }, !1)
            }
            )
        }) : H(Error("Cordova must run in an Android or iOS file scheme."))
    }, rk = function(a) {
        a = a || N();
        return !("file:" !== tk() && "ionic:" !== tk() || !a.toLowerCase().match(/iphone|ipad|ipod|android/))
    }, uk = function() {
        var a = n.window;
        try {
            return !(!a || a == a.top)
        } catch (b) {
            return !1
        }
    }, vk = function() {
        return "undefined" !== typeof n.WorkerGlobalScope && "function" === typeof n.importScripts
    }, wk = function() {
        return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : vk() ? "Worker" : "Browser"
    }, xk = function() {
        var a = wk();
        return "ReactNative" === a || "Node" === a
    }, yk = function() {
        for (var a = 50, b = []; 0 < a; )
            b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
            a--;
        return b.join("")
    }, hk = function(a) {
        var b = a.toLowerCase();
        if (y(b, "opera/") || y(b, "opr/") || y(b, "opios/"))
            return "Opera";
        if (y(b, "iemobile"))
            return "IEMobile";
        if (y(b, "msie") || y(b, "trident/"))
            return "IE";
        if (y(b, "edge/"))
            return "Edge";
        if (y(b, "firefox/"))
            return "Firefox";
        if (y(b, "silk/"))
            return "Silk";
        if (y(b, "blackberry"))
            return "Blackberry";
        if (y(b, "webos"))
            return "Webos";
        if (!y(b, "safari/") || y(b, "chrome/") || y(b, "crios/") || y(b, "android"))
            if (!y(b, "chrome/") && !y(b, "crios/") || y(b, "edge/")) {
                if (y(b, "android"))
                    return "Android";
                if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length)
                    return a[1]
            } else
                return "Chrome";
        else
            return "Safari";
        return "Other"
    }, zk = {
        DEFAULT: "FirebaseCore-web",
        em: "FirebaseUI-web",
        im: "gcip-iap"
    }, Ak = function(a, b, c) {
        c = c || [];
        var d = [], e = {}, f;
        for (f in zk)
            e[zk[f]] = !0;
        for (f = 0; f < c.length; f++)
            "undefined" !== typeof e[c[f]] && (delete e[c[f]],
            d.push(c[f]));
        d.sort();
        c = d;
        c.length || (c = ["FirebaseCore-web"]);
        d = wk();
        "Browser" === d ? (e = N(),
        d = hk(e)) : "Worker" === d && (e = N(),
        d = hk(e) + "-" + d);
        return d + "/" + a + "/" + b + "/" + c.join(",")
    }, N = function() {
        return n.navigator && n.navigator.userAgent || ""
    }, O = function(a, b) {
        a = a.split(".");
        b = b || n;
        for (var c = 0; c < a.length && "object" == typeof b && null != b; c++)
            b = b[a[c]];
        c != a.length && (b = void 0);
        return b
    }, Ck = function() {
        try {
            var a = n.localStorage
              , b = Bk();
            if (a)
                return a.setItem(b, "1"),
                a.removeItem(b),
                dk() ? !!n.indexedDB : !0
        } catch (c) {
            return vk() && !!n.indexedDB
        }
        return !1
    }, Ek = function() {
        return (Dk() || "chrome-extension:" === tk() || rk()) && !xk() && Ck() && !vk()
    }, Dk = function() {
        return "http:" === tk() || "https:" === tk()
    }, tk = function() {
        return n.location && n.location.protocol || null
    }, Fk = function(a) {
        a = a || N();
        return jk(a) || "Firefox" == hk(a) ? !1 : !0
    }, Gk = function(a) {
        return "undefined" === typeof a ? null : ki(a)
    }, Hk = function(a) {
        var b = {}, c;
        for (c in a)
            a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
        return b
    }, Ik = function(a) {
        if (null !== a)
            return JSON.parse(a)
    }, Bk = function(a) {
        return a ? a : "" + Math.floor(1E9 * Math.random()).toString()
    }, Jk = function(a) {
        a = a || N();
        return "Safari" == hk(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0
    }, Kk = function() {
        var a = n.___jsl;
        if (a && a.H)
            for (var b in a.H)
                if (a.H[b].r = a.H[b].r || [],
                a.H[b].L = a.H[b].L || [],
                a.H[b].r = a.H[b].L.concat(),
                a.CP)
                    for (var c = 0; c < a.CP.length; c++)
                        a.CP[c] = null
    }, Lk = function(a, b) {
        if (a > b)
            throw Error("Short delay should be less than long delay!");
        this.Dj = a;
        this.bl = b;
        a = N();
        b = wk();
        this.Wk = jk(a) || "ReactNative" === b
    };
    Lk.prototype.get = function() {
        var a = n.navigator;
        return (a && "boolean" === typeof a.onLine && (Dk() || "chrome-extension:" === tk() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.Wk ? this.bl : this.Dj : Math.min(5E3, this.Dj)
    }
    ;
    var Mk = function() {
        var a = n.document;
        return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0
    }
      , Nk = function() {
        var a = n.document
          , b = null;
        return Mk() || !a ? F() : (new E(function(c) {
            b = function() {
                Mk() && (a.removeEventListener("visibilitychange", b, !1),
                c())
            }
            ;
            a.addEventListener("visibilitychange", b, !1)
        }
        )).u(function(c) {
            a.removeEventListener("visibilitychange", b, !1);
            throw c;
        })
    }
      , Ok = function(a) {
        "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a)
    }
      , Pk = function(a) {
        try {
            var b = new Date(parseInt(a, 10));
            if (!isNaN(b.getTime()) && !/[^0-9]/.test(a))
                return b.toUTCString()
        } catch (c) {}
        return null
    }
      , Qk = function() {
        return !(!O("fireauth.oauthhelper", n) && !O("fireauth.iframe", n))
    }
      , Rk = function() {
        var a = n.navigator;
        return a && a.serviceWorker && a.serviceWorker.controller || null
    }
      , Sk = function() {
        var a = n.navigator;
        return a && a.serviceWorker ? F().then(function() {
            return a.serviceWorker.ready
        }).then(function(b) {
            return b.active || null
        }).u(function() {
            return null
        }) : F(null)
    };
    var Tk = {}
      , Uk = function(a) {
        Tk[a] || (Tk[a] = !0,
        Ok(a))
    };
    var Vk;
    try {
        var Wk = {};
        Object.defineProperty(Wk, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 1
        });
        Object.defineProperty(Wk, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 2
        });
        Vk = 2 == Wk.abcd
    } catch (a) {
        Vk = !1
    }
    var P = function(a, b, c) {
        Vk ? Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            value: c
        }) : a[b] = c
    }
      , Xk = function(a, b) {
        if (b)
            for (var c in b)
                b.hasOwnProperty(c) && P(a, c, b[c])
    }
      , Yk = function(a) {
        var b = {};
        Xk(b, a);
        return b
    }
      , Zk = function(a, b) {
        if (!b || !b.length)
            return !0;
        if (!a)
            return !1;
        for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (void 0 === d || null === d || "" === d)
                return !1
        }
        return !0
    }
      , $k = function(a) {
        var b = a;
        if ("object" == typeof a && null != a) {
            b = "length"in a ? [] : {};
            for (var c in a)
                P(b, c, $k(a[c]))
        }
        return b
    };
    var al = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
      , bl = ["client_id", "response_type", "scope", "redirect_uri", "state"]
      , cl = {
        dm: {
            qe: "locale",
            Fd: 700,
            Ed: 600,
            providerId: "facebook.com",
            Lf: bl
        },
        fm: {
            qe: null,
            Fd: 500,
            Ed: 750,
            providerId: "github.com",
            Lf: bl
        },
        hm: {
            qe: "hl",
            Fd: 515,
            Ed: 680,
            providerId: "google.com",
            Lf: bl
        },
        mm: {
            qe: "lang",
            Fd: 485,
            Ed: 705,
            providerId: "twitter.com",
            Lf: al
        },
        am: {
            qe: "locale",
            Fd: 640,
            Ed: 600,
            providerId: "apple.com",
            Lf: []
        }
    }
      , dl = function(a) {
        for (var b in cl)
            if (cl[b].providerId == a)
                return cl[b];
        return null
    };
    var Q = function(a, b, c) {
        this.code = "auth/" + a;
        this.message = b || el[a] || "";
        this.wj = c || null
    };
    u(Q, Error);
    Q.prototype.V = function() {
        var a = {
            code: this.code,
            message: this.message
        };
        this.wj && (a.serverResponse = this.wj);
        return a
    }
    ;
    Q.prototype.toJSON = function() {
        return this.V()
    }
    ;
    var fl = function(a) {
        var b = a && a.code;
        return b ? new Q(b.substring(5),a.message,a.serverResponse) : null
    }
      , el = {
        "admin-restricted-operation": "This operation is restricted to administrators only.",
        "argument-error": "",
        "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
        "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
        "bad-request": "The requested action is invalid.",
        "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
        "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
        "cordova-not-ready": "Cordova framework is not ready.",
        "cors-unsupported": "This browser is not supported.",
        "credential-already-in-use": "This credential is already associated with a different user account.",
        "custom-token-mismatch": "The custom token corresponds to a different audience.",
        "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
        "email-change-needs-verification": "Multi-factor users must always have a verified email.",
        "email-already-in-use": "The email address is already in use by another account.",
        "expired-action-code": "The action code has expired. ",
        "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
        "internal-error": "An internal error has occurred.",
        "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
        "invalid-app-id": "The mobile app identifier is not registed for the current project.",
        "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
        "invalid-auth-event": "An internal error has occurred.",
        "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
        "invalid-continue-uri": "The continue URL provided in the request is invalid.",
        "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
        "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
        "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
        "invalid-email": "The email address is badly formatted.",
        "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
        "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
        "invalid-credential": "The supplied auth credential is malformed or has expired.",
        "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
        "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
        "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
        "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
        "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
        "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
        "wrong-password": "The password is invalid or the user does not have a password.",
        "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
        "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
        "invalid-provider-id": "The specified provider ID is invalid.",
        "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
        "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
        "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
        "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
        "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
        "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
        "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
        "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
        "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
        "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
        "missing-continue-uri": "A continue URL must be provided in the request.",
        "missing-iframe-start": "An internal error has occurred.",
        "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
        "missing-multi-factor-info": "No second factor identifier is provided.",
        "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
        "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
        "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
        "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
        "app-deleted": "This instance of FirebaseApp has been deleted.",
        "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
        "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
        "no-auth-event": "An internal error has occurred.",
        "no-such-provider": "User was not linked to an account with the given provider.",
        "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
        "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
        "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
        "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
        "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
        "provider-already-linked": "User can only be linked to one identity for the given provider.",
        "quota-exceeded": "The project's quota for this operation has been exceeded.",
        "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
        "redirect-operation-pending": "A redirect sign-in operation is already pending.",
        "rejected-credential": "The request contains malformed or mismatching credentials.",
        "second-factor-already-in-use": "The second factor is already enrolled on this account.",
        "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
        "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
        timeout: "The operation has timed out.",
        "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
        "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
        "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
        "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
        "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
        "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
        "unverified-email": "The operation requires a verified email.",
        "user-cancelled": "The user did not grant your application the permissions it requested.",
        "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
        "user-disabled": "The user account has been disabled by an administrator.",
        "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
        "user-signed-out": "",
        "weak-password": "The password must be 6 characters long or more.",
        "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
    };
    var gl = function(a, b, c, d, e, f, g) {
        this.Fb = a;
        this.Pa = b || null;
        this.Rd = c || null;
        this.Ee = d || null;
        this.jh = f || null;
        this.ua = g || null;
        this.Cb = e || null;
        if (this.Rd || this.Cb) {
            if (this.Rd && this.Cb)
                throw new Q("invalid-auth-event");
            if (this.Rd && !this.Ee)
                throw new Q("invalid-auth-event");
        } else
            throw new Q("invalid-auth-event");
    };
    gl.prototype.getUid = function() {
        var a = [];
        a.push(this.Fb);
        this.Pa && a.push(this.Pa);
        this.Ee && a.push(this.Ee);
        this.ua && a.push(this.ua);
        return a.join("-")
    }
    ;
    gl.prototype.ie = function() {
        return this.Ee
    }
    ;
    gl.prototype.getError = function() {
        return this.Cb
    }
    ;
    gl.prototype.V = function() {
        return {
            type: this.Fb,
            eventId: this.Pa,
            urlResponse: this.Rd,
            sessionId: this.Ee,
            postBody: this.jh,
            tenantId: this.ua,
            error: this.Cb && this.Cb.V()
        }
    }
    ;
    var hl = function(a) {
        a = a || {};
        return a.type ? new gl(a.type,a.eventId,a.urlResponse,a.sessionId,a.error && fl(a.error),a.postBody,a.tenantId) : null
    };
    var il = function(a) {
        var b = a && (a.phoneInfo ? "phone" : null);
        if (b && a && a.mfaEnrollmentId) {
            P(this, "uid", a.mfaEnrollmentId);
            P(this, "displayName", a.displayName || null);
            var c = null;
            a.enrolledAt && (c = (new Date(a.enrolledAt)).toUTCString());
            P(this, "enrollmentTime", c);
            P(this, "factorId", b)
        } else
            throw new Q("internal-error","Internal assert: invalid MultiFactorInfo object");
    };
    il.prototype.V = function() {
        return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime
        }
    }
    ;
    var kl = function(a) {
        try {
            var b = new jl(a)
        } catch (c) {
            b = null
        }
        return b
    }
      , jl = function(a) {
        il.call(this, a);
        P(this, "phoneNumber", a.phoneInfo)
    };
    u(jl, il);
    jl.prototype.V = function() {
        var a = jl.$c.V.call(this);
        a.phoneNumber = this.phoneNumber;
        return a
    }
    ;
    var ll = function(a) {
        var b = {}
          , c = a.email
          , d = a.newEmail
          , e = a.requestType;
        a = kl(a.mfaInfo);
        if (!e || "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e && !c || "VERIFY_AND_CHANGE_EMAIL" == e && !d || "REVERT_SECOND_FACTOR_ADDITION" == e && !a)
            throw Error("Invalid checkActionCode response!");
        "VERIFY_AND_CHANGE_EMAIL" == e ? (b.fromEmail = c || null,
        b.previousEmail = c || null,
        b.email = d) : (b.fromEmail = d || null,
        b.previousEmail = d || null,
        b.email = c || null);
        b.multiFactorInfo = a || null;
        P(this, "operation", e);
        P(this, "data", $k(b))
    };
    var nl = function(a) {
        a = M(a);
        var b = Vj(a, "apiKey") || null
          , c = Vj(a, "oobCode") || null
          , d = Vj(a, "mode") || null;
        d = d ? ml[d] || null : null;
        if (!b || !c || !d)
            throw new Q("argument-error","apiKey, oobCodeand mode are required in a valid action code URL.");
        Xk(this, {
            apiKey: b,
            operation: d,
            code: c,
            continueUrl: Vj(a, "continueUrl") || null,
            languageCode: Vj(a, "languageCode") || null,
            tenantId: Vj(a, "tenantId") || null
        })
    }
      , ol = function(a) {
        try {
            return new nl(a)
        } catch (b) {
            return null
        }
    }
      , ml = {
        recoverEmail: "RECOVER_EMAIL",
        resetPassword: "PASSWORD_RESET",
        revertSecondFactorAddition: "REVERT_SECOND_FACTOR_ADDITION",
        signIn: "EMAIL_SIGNIN",
        verifyAndChangeEmail: "VERIFY_AND_CHANGE_EMAIL",
        verifyEmail: "VERIFY_EMAIL"
    };
    var pl = function(a) {
        var b = M(a)
          , c = Vj(b, "link")
          , d = Vj(M(c), "link");
        b = Vj(b, "deep_link_id");
        return Vj(M(b), "link") || b || d || c || a
    };
    var ql = function(a) {
        var b = "unauthorized-domain"
          , c = void 0
          , d = M(a);
        a = d.La;
        d = d.Za;
        "chrome-extension" == d ? c = Zb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Zb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
        Q.call(this, b, c)
    };
    l(ql, Q);
    var sl = function(a) {
        var b = rl(a);
        if (!(b && b.sub && b.iss && b.aud && b.exp))
            throw Error("Invalid JWT");
        this.Yk = a;
        this.Eg = b.exp;
        this.$k = b.sub;
        a = Date.now() / 1E3;
        this.Qk = b.iat || (a > this.Eg ? this.Eg : a);
        this.Mc = b.email || null;
        this.rh = b.provider_id || b.firebase && b.firebase.sign_in_provider || null;
        this.ua = b.firebase && b.firebase.tenant || null;
        this.Zj = !!b.is_anonymous || "anonymous" == this.rh
    };
    sl.prototype.getEmail = function() {
        return this.Mc
    }
    ;
    sl.prototype.isAnonymous = function() {
        return this.Zj
    }
    ;
    sl.prototype.toString = function() {
        return this.Yk
    }
    ;
    var tl = function(a) {
        try {
            return new sl(a)
        } catch (b) {
            return null
        }
    }
      , rl = function(a) {
        if (!a)
            return null;
        a = a.split(".");
        if (3 != a.length)
            return null;
        a = a[1];
        for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++)
            a += ".";
        try {
            var d = th(a);
            a = [];
            for (c = b = 0; b < d.length; ) {
                var e = d[b++];
                if (128 > e)
                    a[c++] = String.fromCharCode(e);
                else if (191 < e && 224 > e) {
                    var f = d[b++];
                    a[c++] = String.fromCharCode((e & 31) << 6 | f & 63)
                } else if (239 < e && 365 > e) {
                    f = d[b++];
                    var g = d[b++]
                      , k = d[b++]
                      , m = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | k & 63) - 65536;
                    a[c++] = String.fromCharCode(55296 + (m >> 10));
                    a[c++] = String.fromCharCode(56320 + (m & 1023))
                } else
                    f = d[b++],
                    g = d[b++],
                    a[c++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
            }
            return JSON.parse(a.join(""))
        } catch (p) {}
        return null
    };
    var ul = function(a) {
        var b = rl(a);
        if (!(b && b.exp && b.auth_time && b.iat))
            throw new Q("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
        Xk(this, {
            token: a,
            expirationTime: Pk(1E3 * b.exp),
            authTime: Pk(1E3 * b.auth_time),
            issuedAtTime: Pk(1E3 * b.iat),
            signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null,
            signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null,
            claims: b
        })
    };
    var vl = function(a, b) {
        if (!a && !b)
            throw new Q("internal-error","Internal assert: no raw session string available");
        if (a && b)
            throw new Q("internal-error","Internal assert: unable to determine the session type");
        this.jf = a || null;
        this.Wi = b || null;
        this.type = this.jf ? "enroll" : "signin"
    };
    vl.prototype.he = function() {
        return this.jf ? F(this.jf) : F(this.Wi)
    }
    ;
    vl.prototype.V = function() {
        return "enroll" == this.type ? {
            multiFactorSession: {
                idToken: this.jf
            }
        } : {
            multiFactorSession: {
                pendingCredential: this.Wi
            }
        }
    }
    ;
    var wl = function() {};
    wl.prototype.Pc = function() {}
    ;
    wl.prototype.Bd = function() {}
    ;
    wl.prototype.te = function() {}
    ;
    wl.prototype.V = function() {}
    ;
    var xl = function(a, b) {
        return a.then(function(c) {
            if (c.idToken) {
                var d = tl(c.idToken);
                if (!d || b != d.$k)
                    throw new Q("user-mismatch");
                return c
            }
            throw new Q("user-mismatch");
        }).u(function(c) {
            throw c && c.code && "auth/user-not-found" == c.code ? new Q("user-mismatch") : c;
        })
    }
      , yl = function(a, b) {
        if (b)
            this.hc = b;
        else
            throw new Q("internal-error","failed to construct a credential");
        P(this, "providerId", a);
        P(this, "signInMethod", a)
    };
    h = yl.prototype;
    h.Pc = function(a) {
        return zl(a, this.Tc())
    }
    ;
    h.Bd = function(a, b) {
        var c = this.Tc();
        c.idToken = b;
        return Al(a, c)
    }
    ;
    h.te = function(a, b) {
        var c = this.Tc();
        return xl(Bl(a, c), b)
    }
    ;
    h.Tc = function() {
        return {
            pendingToken: this.hc,
            requestUri: "http://localhost"
        }
    }
    ;
    h.V = function() {
        return {
            providerId: this.providerId,
            signInMethod: this.signInMethod,
            pendingToken: this.hc
        }
    }
    ;
    var Cl = function(a) {
        if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken)
            try {
                return new yl(a.providerId,a.pendingToken)
            } catch (b) {}
        return null
    }
      , Dl = function(a, b, c) {
        this.hc = null;
        if (b.idToken || b.accessToken)
            b.idToken && P(this, "idToken", b.idToken),
            b.accessToken && P(this, "accessToken", b.accessToken),
            b.nonce && !b.pendingToken && P(this, "nonce", b.nonce),
            b.pendingToken && (this.hc = b.pendingToken);
        else if (b.oauthToken && b.oauthTokenSecret)
            P(this, "accessToken", b.oauthToken),
            P(this, "secret", b.oauthTokenSecret);
        else
            throw new Q("internal-error","failed to construct a credential");
        P(this, "providerId", a);
        P(this, "signInMethod", c)
    };
    h = Dl.prototype;
    h.Pc = function(a) {
        return zl(a, this.Tc())
    }
    ;
    h.Bd = function(a, b) {
        var c = this.Tc();
        c.idToken = b;
        return Al(a, c)
    }
    ;
    h.te = function(a, b) {
        var c = this.Tc();
        return xl(Bl(a, c), b)
    }
    ;
    h.Tc = function() {
        var a = {};
        this.idToken && (a.id_token = this.idToken);
        this.accessToken && (a.access_token = this.accessToken);
        this.secret && (a.oauth_token_secret = this.secret);
        a.providerId = this.providerId;
        this.nonce && !this.hc && (a.nonce = this.nonce);
        a = {
            postBody: Zj(a).toString(),
            requestUri: "http://localhost"
        };
        this.hc && (delete a.postBody,
        a.pendingToken = this.hc);
        return a
    }
    ;
    h.V = function() {
        var a = {
            providerId: this.providerId,
            signInMethod: this.signInMethod
        };
        this.idToken && (a.oauthIdToken = this.idToken);
        this.accessToken && (a.oauthAccessToken = this.accessToken);
        this.secret && (a.oauthTokenSecret = this.secret);
        this.nonce && (a.nonce = this.nonce);
        this.hc && (a.pendingToken = this.hc);
        return a
    }
    ;
    var El = function(a) {
        if (a && a.providerId && a.signInMethod) {
            var b = {
                idToken: a.oauthIdToken,
                accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
                oauthTokenSecret: a.oauthTokenSecret,
                oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
                nonce: a.nonce,
                pendingToken: a.pendingToken
            };
            try {
                return new Dl(a.providerId,b,a.signInMethod)
            } catch (c) {}
        }
        return null
    }
      , Fl = function(a, b) {
        this.Al = b || [];
        Xk(this, {
            providerId: a,
            isOAuthProvider: !0
        });
        this.ii = {};
        this.Sg = (dl(a) || {}).qe || null;
        this.yg = null
    };
    Fl.prototype.setCustomParameters = function(a) {
        this.ii = ob(a);
        return this
    }
    ;
    var Gl = function(a) {
        if ("string" !== typeof a || 0 != a.indexOf("saml."))
            throw new Q("argument-error",'SAML provider IDs must be prefixed with "saml."');
        Fl.call(this, a, [])
    };
    u(Gl, Fl);
    var Hl = function(a) {
        Fl.call(this, a, bl);
        this.Ah = []
    };
    u(Hl, Fl);
    Hl.prototype.addScope = function(a) {
        Ta(this.Ah, a) || this.Ah.push(a);
        return this
    }
    ;
    Hl.prototype.zi = function() {
        return Ya(this.Ah)
    }
    ;
    Hl.prototype.credential = function(a, b) {
        a = q(a) ? {
            idToken: a.idToken || null,
            accessToken: a.accessToken || null,
            nonce: a.rawNonce || null
        } : {
            idToken: a || null,
            accessToken: b || null
        };
        if (!a.idToken && !a.accessToken)
            throw new Q("argument-error","credential failed: must provide the ID token and/or the access token.");
        return new Dl(this.providerId,a,this.providerId)
    }
    ;
    var Il = function() {
        Hl.call(this, "facebook.com")
    };
    u(Il, Hl);
    P(Il, "PROVIDER_ID", "facebook.com");
    P(Il, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");
    var Jl = function(a) {
        if (!a)
            throw new Q("argument-error","credential failed: expected 1 argument (the OAuth access token).");
        var b = a;
        q(a) && (b = a.accessToken);
        return (new Il).credential({
            accessToken: b
        })
    }
      , Kl = function() {
        Hl.call(this, "github.com")
    };
    u(Kl, Hl);
    P(Kl, "PROVIDER_ID", "github.com");
    P(Kl, "GITHUB_SIGN_IN_METHOD", "github.com");
    var Ll = function(a) {
        if (!a)
            throw new Q("argument-error","credential failed: expected 1 argument (the OAuth access token).");
        var b = a;
        q(a) && (b = a.accessToken);
        return (new Kl).credential({
            accessToken: b
        })
    }
      , Ml = function() {
        Hl.call(this, "google.com");
        this.addScope("profile")
    };
    u(Ml, Hl);
    P(Ml, "PROVIDER_ID", "google.com");
    P(Ml, "GOOGLE_SIGN_IN_METHOD", "google.com");
    var Nl = function(a, b) {
        var c = a;
        q(a) && (c = a.idToken,
        b = a.accessToken);
        return (new Ml).credential({
            idToken: c,
            accessToken: b
        })
    }
      , Ol = function() {
        Fl.call(this, "twitter.com", al)
    };
    u(Ol, Fl);
    P(Ol, "PROVIDER_ID", "twitter.com");
    P(Ol, "TWITTER_SIGN_IN_METHOD", "twitter.com");
    var Pl = function(a, b) {
        var c = a;
        q(c) || (c = {
            oauthToken: a,
            oauthTokenSecret: b
        });
        if (!c.oauthToken || !c.oauthTokenSecret)
            throw new Q("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");
        return new Dl("twitter.com",c,"twitter.com")
    }
      , Rl = function(a, b, c) {
        this.Mc = a;
        this.ue = b;
        P(this, "providerId", "password");
        P(this, "signInMethod", c === Ql.EMAIL_LINK_SIGN_IN_METHOD ? Ql.EMAIL_LINK_SIGN_IN_METHOD : Ql.EMAIL_PASSWORD_SIGN_IN_METHOD)
    };
    Rl.prototype.Pc = function(a) {
        return this.signInMethod == Ql.EMAIL_LINK_SIGN_IN_METHOD ? R(a, Sl, {
            email: this.Mc,
            oobCode: this.ue
        }) : R(a, Tl, {
            email: this.Mc,
            password: this.ue
        })
    }
    ;
    Rl.prototype.Bd = function(a, b) {
        return this.signInMethod == Ql.EMAIL_LINK_SIGN_IN_METHOD ? R(a, Ul, {
            idToken: b,
            email: this.Mc,
            oobCode: this.ue
        }) : R(a, Vl, {
            idToken: b,
            email: this.Mc,
            password: this.ue
        })
    }
    ;
    Rl.prototype.te = function(a, b) {
        return xl(this.Pc(a), b)
    }
    ;
    Rl.prototype.V = function() {
        return {
            email: this.Mc,
            password: this.ue,
            signInMethod: this.signInMethod
        }
    }
    ;
    var Wl = function(a) {
        return a && a.email && a.password ? new Rl(a.email,a.password,a.signInMethod) : null
    }
      , Ql = function() {
        Xk(this, {
            providerId: "password",
            isOAuthProvider: !1
        })
    }
      , Yl = function(a, b) {
        b = Xl(b);
        if (!b)
            throw new Q("argument-error","Invalid email link!");
        return new Rl(a,b.code,Ql.EMAIL_LINK_SIGN_IN_METHOD)
    }
      , Xl = function(a) {
        a = pl(a);
        return (a = ol(a)) && "EMAIL_SIGNIN" === a.operation ? a : null
    };
    Xk(Ql, {
        PROVIDER_ID: "password"
    });
    Xk(Ql, {
        EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
    });
    Xk(Ql, {
        EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
    });
    var Zl = function(a) {
        if (!(a.verificationId && a.ag || a.Je && a.phoneNumber))
            throw new Q("internal-error");
        this.Ea = a;
        P(this, "providerId", "phone");
        this.providerId = "phone";
        P(this, "signInMethod", "phone")
    };
    Zl.prototype.Pc = function(a) {
        return a.verifyPhoneNumber($l(this))
    }
    ;
    Zl.prototype.Bd = function(a, b) {
        var c = $l(this);
        c.idToken = b;
        return R(a, am, c)
    }
    ;
    Zl.prototype.te = function(a, b) {
        var c = $l(this);
        c.operation = "REAUTH";
        a = R(a, bm, c);
        return xl(a, b)
    }
    ;
    Zl.prototype.V = function() {
        var a = {
            providerId: "phone"
        };
        this.Ea.verificationId && (a.verificationId = this.Ea.verificationId);
        this.Ea.ag && (a.verificationCode = this.Ea.ag);
        this.Ea.Je && (a.temporaryProof = this.Ea.Je);
        this.Ea.phoneNumber && (a.phoneNumber = this.Ea.phoneNumber);
        return a
    }
    ;
    var cm = function(a) {
        if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
            var b = {};
            x(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(c) {
                a[c] && (b[c] = a[c])
            });
            return new Zl(b)
        }
        return null
    }
      , $l = function(a) {
        return a.Ea.Je && a.Ea.phoneNumber ? {
            temporaryProof: a.Ea.Je,
            phoneNumber: a.Ea.phoneNumber
        } : {
            sessionInfo: a.Ea.verificationId,
            code: a.Ea.ag
        }
    }
      , dm = function(a) {
        try {
            this.Se = a || firebase.auth()
        } catch (b) {
            throw new Q("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
        }
        Xk(this, {
            providerId: "phone",
            isOAuthProvider: !1
        })
    };
    dm.prototype.verifyPhoneNumber = function(a, b) {
        var c = this.Se.o;
        return F(b.verify()).then(function(d) {
            if ("string" !== typeof d)
                throw new Q("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
            switch (b.type) {
            case "recaptcha":
                var e = q(a) ? a.session : null
                  , f = q(a) ? a.phoneNumber : a;
                return (e && "enroll" == e.type ? e.he().then(function(g) {
                    return em(c, {
                        idToken: g,
                        phoneEnrollmentInfo: {
                            phoneNumber: f,
                            recaptchaToken: d
                        }
                    })
                }) : e && "signin" == e.type ? e.he().then(function(g) {
                    return fm(c, {
                        mfaPendingCredential: g,
                        mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid,
                        phoneSignInInfo: {
                            recaptchaToken: d
                        }
                    })
                }) : gm(c, {
                    phoneNumber: f,
                    recaptchaToken: d
                })).then(function(g) {
                    "function" === typeof b.reset && b.reset();
                    return g
                }, function(g) {
                    "function" === typeof b.reset && b.reset();
                    throw g;
                });
            default:
                throw new Q("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
            }
        })
    }
    ;
    var hm = function(a, b) {
        if (!a)
            throw new Q("missing-verification-id");
        if (!b)
            throw new Q("missing-verification-code");
        return new Zl({
            verificationId: a,
            ag: b
        })
    };
    Xk(dm, {
        PROVIDER_ID: "phone"
    });
    Xk(dm, {
        PHONE_SIGN_IN_METHOD: "phone"
    });
    var im = function(a) {
        if (a.temporaryProof && a.phoneNumber)
            return new Zl({
                Je: a.temporaryProof,
                phoneNumber: a.phoneNumber
            });
        var b = a && a.providerId;
        if (!b || "password" === b)
            return null;
        var c = a && a.oauthAccessToken
          , d = a && a.oauthTokenSecret
          , e = a && a.nonce
          , f = a && a.oauthIdToken
          , g = a && a.pendingToken;
        try {
            switch (b) {
            case "google.com":
                return Nl(f, c);
            case "facebook.com":
                return Jl(c);
            case "github.com":
                return Ll(c);
            case "twitter.com":
                return Pl(c, d);
            default:
                return c || d || f || g ? g ? 0 == b.indexOf("saml.") ? new yl(b,g) : new Dl(b,{
                    pendingToken: g,
                    idToken: a.oauthIdToken,
                    accessToken: a.oauthAccessToken
                },b) : (new Hl(b)).credential({
                    idToken: f,
                    accessToken: c,
                    rawNonce: e
                }) : null
            }
        } catch (k) {
            return null
        }
    }
      , jm = function(a) {
        if (!a.isOAuthProvider)
            throw new Q("invalid-oauth-provider");
    };
    var km = function(a, b, c) {
        Q.call(this, a, c);
        a = b || {};
        a.email && P(this, "email", a.email);
        a.phoneNumber && P(this, "phoneNumber", a.phoneNumber);
        a.credential && P(this, "credential", a.credential);
        a.tenantId && P(this, "tenantId", a.tenantId)
    };
    l(km, Q);
    km.prototype.V = function() {
        var a = {
            code: this.code,
            message: this.message
        };
        this.email && (a.email = this.email);
        this.phoneNumber && (a.phoneNumber = this.phoneNumber);
        this.tenantId && (a.tenantId = this.tenantId);
        var b = this.credential && this.credential.V();
        b && qb(a, b);
        return a
    }
    ;
    km.prototype.toJSON = function() {
        return this.V()
    }
    ;
    var lm = function(a) {
        if (a.code) {
            var b = a.code || "";
            0 == b.indexOf("auth/") && (b = b.substring(5));
            var c = {
                credential: im(a),
                tenantId: a.tenantId
            };
            if (a.email)
                c.email = a.email;
            else if (a.phoneNumber)
                c.phoneNumber = a.phoneNumber;
            else if (!c.credential)
                return new Q(b,a.message || void 0);
            return new km(b,c,a.message)
        }
        return null
    };
    var mm = function(a) {
        this.$l = a
    };
    l(mm, oi);
    mm.prototype.Yd = function() {
        return new this.$l
    }
    ;
    mm.prototype.rf = function() {
        return {}
    }
    ;
    var rm = function(a, b, c) {
        this.ka = a;
        b = b || {};
        this.vj = b.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
        this.Ml = b.secureTokenTimeout || nm;
        this.Rf = ob(b.secureTokenHeaders || om);
        this.ri = b.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
        this.Hi = b.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
        this.vk = b.firebaseTimeout || pm;
        this.td = ob(b.firebaseHeaders || qm);
        c && (this.td["X-Client-Version"] = c,
        this.Rf["X-Client-Version"] = c);
        a = "Node" == wk();
        a = n.XMLHttpRequest || a && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
        if (!a && !vk())
            throw new Q("internal-error","The XMLHttpRequest compatibility library was not found.");
        this.Pf = void 0;
        vk() ? this.Pf = new Ni({
            Zl: self
        }) : xk() ? this.Pf = new mm(a) : this.Pf = new si;
        this.ua = null
    }, sm, tm = function(a, b) {
        b ? a.td["X-Firebase-Locale"] = b : delete a.td["X-Firebase-Locale"]
    }, vm = function(a, b) {
        b && (a.vj = um("https://securetoken.googleapis.com/v1/token", b),
        a.ri = um("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b),
        a.Hi = um("https://identitytoolkit.googleapis.com/v2/", b))
    }, um = function(a, b) {
        a = M(a);
        b = M(b.url);
        a.setPath(a.La + a.getPath());
        Ij(a, b.Za);
        Kj(a, b.La);
        Lj(a, b.Xb);
        return a.toString()
    }, wm = function(a, b) {
        b ? (a.td["X-Client-Version"] = b,
        a.Rf["X-Client-Version"] = b) : (delete a.td["X-Client-Version"],
        delete a.Rf["X-Client-Version"])
    }, ym = function(a, b, c, d, e, f, g) {
        ik() || vk() ? a = r(a.Ol, a) : (sm || (sm = new E(function(k, m) {
            xm(k, m)
        }
        )),
        a = r(a.Nl, a));
        a(b, c, d, e, f, g)
    };
    rm.prototype.Ol = function(a, b, c, d, e, f) {
        if (vk() && ("undefined" === typeof n.fetch || "undefined" === typeof n.Headers || "undefined" === typeof n.Request))
            throw new Q("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
        var g = new wj(this.Pf);
        if (f) {
            g.Pd = Math.max(0, f);
            var k = setTimeout(function() {
                g.dispatchEvent("timeout")
            }, f)
        }
        g.listen("complete", function() {
            k && clearTimeout(k);
            var m = null;
            try {
                var p = JSON
                  , w = p.parse;
                try {
                    var D = this.v ? this.v.responseText : ""
                } catch (G) {
                    Mi(this.Ma, "Can not get responseText: " + G.message),
                    D = ""
                }
                m = w.call(p, D) || null
            } catch (G) {
                m = null
            }
            b && b(m)
        });
        bi(g, "ready", function() {
            k && clearTimeout(k);
            this.Lc()
        });
        bi(g, "timeout", function() {
            k && clearTimeout(k);
            this.Lc();
            b && b(null)
        });
        g.send(a, c, d, e)
    }
    ;
    var xm = function(a, b) {
        if (((window.gapi || {}).client || {}).request)
            a();
        else {
            n[zm] = function() {
                ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))
            }
            ;
            var c = Fb(Am, {
                onload: zm
            });
            bj(ij(c), function() {
                b(Error("CORS_UNSUPPORTED"))
            })
        }
    };
    rm.prototype.Nl = function(a, b, c, d, e) {
        var f = this;
        sm.then(function() {
            window.gapi.client.setApiKey(f.ka);
            var g = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null);
            window.gapi.client.request({
                path: a,
                method: c,
                body: d,
                headers: e,
                authType: "none",
                callback: function(k) {
                    window.gapi.auth.setToken(g);
                    b && b(k)
                }
            })
        }).u(function(g) {
            b && b({
                error: {
                    message: g && g.message || "CORS_UNSUPPORTED"
                }
            })
        })
    }
    ;
    var Cm = function(a, b) {
        return new E(function(c, d) {
            "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? ym(a, a.vj + "?key=" + encodeURIComponent(a.ka), function(e) {
                e ? e.error ? d(Bm(e)) : e.access_token && e.refresh_token ? c(e) : d(new Q("internal-error")) : d(new Q("network-request-failed"))
            }, "POST", Zj(b).toString(), a.Rf, a.Ml.get()) : d(new Q("internal-error"))
        }
        )
    }
      , Dm = function(a, b, c, d, e, f, g) {
        var k = M(b + c);
        L(k, "key", a.ka);
        g && L(k, "cb", Date.now().toString());
        var m = "GET" == d;
        if (m)
            for (var p in e)
                e.hasOwnProperty(p) && L(k, p, e[p]);
        return new E(function(w, D) {
            ym(a, k.toString(), function(G) {
                G ? G.error ? D(Bm(G, f || {})) : w(G) : D(new Q("network-request-failed"))
            }, d, m ? void 0 : ki(Hk(e)), a.td, a.vk.get())
        }
        )
    }
      , Em = function(a) {
        a = a.email;
        if ("string" !== typeof a || !pk.test(a))
            throw new Q("invalid-email");
    }
      , Fm = function(a) {
        "email"in a && Em(a)
    }
      , Hm = function(a, b) {
        return R(a, Gm, {
            identifier: b,
            continueUri: Dk() ? ek() : "http://localhost"
        }).then(function(c) {
            return c.signinMethods || []
        })
    }
      , Jm = function(a) {
        return R(a, Im, {}).then(function(b) {
            return b.authorizedDomains || []
        })
    }
      , Km = function(a) {
        if (!a.idToken) {
            if (a.mfaPendingCredential)
                throw new Q("multi-factor-auth-required",null,ob(a));
            throw new Q("internal-error");
        }
    }
      , Lm = function(a) {
        if (a.phoneNumber || a.temporaryProof) {
            if (!a.phoneNumber || !a.temporaryProof)
                throw new Q("internal-error");
        } else {
            if (!a.sessionInfo)
                throw new Q("missing-verification-id");
            if (!a.code)
                throw new Q("missing-verification-code");
        }
    };
    h = rm.prototype;
    h.signInAnonymously = function() {
        return R(this, Mm, {})
    }
    ;
    h.updateEmail = function(a, b) {
        return R(this, Nm, {
            idToken: a,
            email: b
        })
    }
    ;
    h.updatePassword = function(a, b) {
        return R(this, Vl, {
            idToken: a,
            password: b
        })
    }
    ;
    h.updateProfile = function(a, b) {
        var c = {
            idToken: a
        }
          , d = [];
        lb(Om, function(e, f) {
            var g = b[f];
            null === g ? d.push(e) : f in b && (c[f] = g)
        });
        d.length && (c.deleteAttribute = d);
        return R(this, Nm, c)
    }
    ;
    h.sendPasswordResetEmail = function(a, b) {
        a = {
            requestType: "PASSWORD_RESET",
            email: a
        };
        qb(a, b);
        return R(this, Pm, a)
    }
    ;
    h.sendSignInLinkToEmail = function(a, b) {
        a = {
            requestType: "EMAIL_SIGNIN",
            email: a
        };
        qb(a, b);
        return R(this, Qm, a)
    }
    ;
    h.sendEmailVerification = function(a, b) {
        a = {
            requestType: "VERIFY_EMAIL",
            idToken: a
        };
        qb(a, b);
        return R(this, Rm, a)
    }
    ;
    h.verifyBeforeUpdateEmail = function(a, b, c) {
        a = {
            requestType: "VERIFY_AND_CHANGE_EMAIL",
            idToken: a,
            newEmail: b
        };
        qb(a, c);
        return R(this, Sm, a)
    }
    ;
    var gm = function(a, b) {
        return R(a, Tm, b)
    };
    rm.prototype.verifyPhoneNumber = function(a) {
        return R(this, Um, a)
    }
    ;
    var em = function(a, b) {
        return R(a, Vm, b).then(function(c) {
            return c.phoneSessionInfo.sessionInfo
        })
    }
      , Wm = function(a) {
        if (!a.phoneVerificationInfo)
            throw new Q("internal-error");
        if (!a.phoneVerificationInfo.sessionInfo)
            throw new Q("missing-verification-id");
        if (!a.phoneVerificationInfo.code)
            throw new Q("missing-verification-code");
    }
      , fm = function(a, b) {
        return R(a, Xm, b).then(function(c) {
            return c.phoneResponseInfo.sessionInfo
        })
    }
      , Zm = function(a, b, c) {
        return R(a, Ym, {
            idToken: b,
            deleteProvider: c
        })
    }
      , $m = function(a) {
        if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken)
            throw new Q("internal-error");
    }
      , an = function(a, b) {
        b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Oj(a.postBody),
        a.od("nonce") && (b.nonce = a.get("nonce"))));
        return b
    }
      , cn = function(a) {
        var b = null;
        a.needConfirmation ? (a.code = "account-exists-with-different-credential",
        b = lm(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use",
        b = lm(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use",
        b = lm(a)) : a.errorMessage && (b = bn(a.errorMessage));
        if (b)
            throw b;
        Km(a)
    }
      , zl = function(a, b) {
        b.returnIdpCredential = !0;
        return R(a, dn, b)
    }
      , Al = function(a, b) {
        b.returnIdpCredential = !0;
        return R(a, en, b)
    }
      , Bl = function(a, b) {
        b.returnIdpCredential = !0;
        b.autoCreate = !1;
        return R(a, fn, b)
    }
      , gn = function(a) {
        if (!a.oobCode)
            throw new Q("invalid-action-code");
    };
    rm.prototype.confirmPasswordReset = function(a, b) {
        return R(this, hn, {
            oobCode: a,
            newPassword: b
        })
    }
    ;
    rm.prototype.checkActionCode = function(a) {
        return R(this, jn, {
            oobCode: a
        })
    }
    ;
    rm.prototype.applyActionCode = function(a) {
        return R(this, kn, {
            oobCode: a
        })
    }
    ;
    var R = function(a, b, c) {
        if (!Zk(c, b.Sa))
            return H(new Q("internal-error"));
        var d = !!b.Ne, e = b.httpMethod || "POST", f;
        return F(c).then(b.ya).then(function() {
            b.Pb && (c.returnSecureToken = !0);
            b.Ba && a.ua && "undefined" === typeof c.tenantId && (c.tenantId = a.ua);
            return d ? Dm(a, a.Hi, b.endpoint, e, c, b.hi, b.rg || !1) : Dm(a, a.ri, b.endpoint, e, c, b.hi, b.rg || !1)
        }).then(function(g) {
            f = g;
            return b.Mf ? b.Mf(c, f) : f
        }).then(b.Fa).then(function() {
            if (!b.jc)
                return f;
            if (!(b.jc in f))
                throw new Q("internal-error");
            return f[b.jc]
        })
    }
      , bn = function(a) {
        return Bm({
            error: {
                errors: [{
                    message: a
                }],
                code: 400,
                message: a
            }
        })
    }
      , Bm = function(a, b) {
        var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
        var d = {
            keyInvalid: "invalid-api-key",
            ipRefererBlocked: "app-not-authorized"
        };
        if (c = d[c] ? new Q(d[c]) : null)
            return c;
        c = a.error && a.error.message || "";
        d = {
            INVALID_CUSTOM_TOKEN: "invalid-custom-token",
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_EMAIL: "invalid-email",
            INVALID_PASSWORD: "wrong-password",
            USER_DISABLED: "user-disabled",
            MISSING_PASSWORD: "internal-error",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
            INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
            INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
            INVALID_SENDER: "invalid-sender",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            INVALID_PROVIDER_ID: "invalid-provider-id",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            CORS_UNSUPPORTED: "cors-unsupported",
            DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
            INVALID_APP_ID: "invalid-app-id",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            WEAK_PASSWORD: "weak-password",
            OPERATION_NOT_ALLOWED: "operation-not-allowed",
            USER_CANCELLED: "user-cancelled",
            CAPTCHA_CHECK_FAILED: "captcha-check-failed",
            INVALID_APP_CREDENTIAL: "invalid-app-credential",
            INVALID_CODE: "invalid-verification-code",
            INVALID_PHONE_NUMBER: "invalid-phone-number",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            INVALID_TENANT_ID: "invalid-tenant-id",
            MISSING_APP_CREDENTIAL: "missing-app-credential",
            MISSING_CODE: "missing-verification-code",
            MISSING_PHONE_NUMBER: "missing-phone-number",
            MISSING_SESSION_INFO: "missing-verification-id",
            QUOTA_EXCEEDED: "quota-exceeded",
            SESSION_EXPIRED: "code-expired",
            REJECTED_CREDENTIAL: "rejected-credential",
            INVALID_CONTINUE_URI: "invalid-continue-uri",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            INVALID_CERT_HASH: "invalid-cert-hash",
            UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
            TENANT_ID_MISMATCH: "tenant-id-mismatch",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
            UNVERIFIED_EMAIL: "unverified-email"
        };
        b = b || {};
        qb(d, b);
        b = (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0;
        for (var e in d)
            if (0 === c.indexOf(e))
                return new Q(d[e],b);
        !b && a && (b = Gk(a));
        return new Q("internal-error",b)
    }
      , nm = new Lk(3E4,6E4)
      , om = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
      , pm = new Lk(3E4,6E4)
      , qm = {
        "Content-Type": "application/json"
    }
      , Am = new xb(ub,"https://apis.google.com/js/client.js?onload=%{onload}")
      , zm = "__fcb" + Math.floor(1E6 * Math.random()).toString()
      , Om = {
        displayName: "DISPLAY_NAME",
        photoUrl: "PHOTO_URL"
    }
      , kn = {
        endpoint: "setAccountInfo",
        ya: gn,
        jc: "email",
        Ba: !0
    }
      , jn = {
        endpoint: "resetPassword",
        ya: gn,
        Fa: function(a) {
            var b = a.requestType;
            if (!b || !a.email && "EMAIL_SIGNIN" != b && "VERIFY_AND_CHANGE_EMAIL" != b)
                throw new Q("internal-error");
        },
        Ba: !0
    }
      , ln = {
        endpoint: "signupNewUser",
        ya: function(a) {
            Em(a);
            if (!a.password)
                throw new Q("weak-password");
        },
        Fa: Km,
        Pb: !0,
        Ba: !0
    }
      , Gm = {
        endpoint: "createAuthUri",
        Ba: !0
    }
      , mn = {
        endpoint: "deleteAccount",
        Sa: ["idToken"]
    }
      , Ym = {
        endpoint: "setAccountInfo",
        Sa: ["idToken", "deleteProvider"],
        ya: function(a) {
            if (!Array.isArray(a.deleteProvider))
                throw new Q("internal-error");
        }
    }
      , Sl = {
        endpoint: "emailLinkSignin",
        Sa: ["email", "oobCode"],
        ya: Em,
        Fa: Km,
        Pb: !0,
        Ba: !0
    }
      , Ul = {
        endpoint: "emailLinkSignin",
        Sa: ["idToken", "email", "oobCode"],
        ya: Em,
        Fa: Km,
        Pb: !0
    }
      , nn = {
        endpoint: "accounts/mfaEnrollment:finalize",
        Sa: ["idToken", "phoneVerificationInfo"],
        ya: Wm,
        Fa: Km,
        Ba: !0,
        Ne: !0
    }
      , on = {
        endpoint: "accounts/mfaSignIn:finalize",
        Sa: ["mfaPendingCredential", "phoneVerificationInfo"],
        ya: Wm,
        Fa: Km,
        Ba: !0,
        Ne: !0
    }
      , pn = {
        endpoint: "getAccountInfo"
    }
      , Qm = {
        endpoint: "getOobConfirmationCode",
        Sa: ["requestType"],
        ya: function(a) {
            if ("EMAIL_SIGNIN" != a.requestType)
                throw new Q("internal-error");
            Em(a)
        },
        jc: "email",
        Ba: !0
    }
      , Rm = {
        endpoint: "getOobConfirmationCode",
        Sa: ["idToken", "requestType"],
        ya: function(a) {
            if ("VERIFY_EMAIL" != a.requestType)
                throw new Q("internal-error");
        },
        jc: "email",
        Ba: !0
    }
      , Sm = {
        endpoint: "getOobConfirmationCode",
        Sa: ["idToken", "newEmail", "requestType"],
        ya: function(a) {
            if ("VERIFY_AND_CHANGE_EMAIL" != a.requestType)
                throw new Q("internal-error");
        },
        jc: "email",
        Ba: !0
    }
      , Pm = {
        endpoint: "getOobConfirmationCode",
        Sa: ["requestType"],
        ya: function(a) {
            if ("PASSWORD_RESET" != a.requestType)
                throw new Q("internal-error");
            Em(a)
        },
        jc: "email",
        Ba: !0
    }
      , Im = {
        rg: !0,
        endpoint: "getProjectConfig",
        httpMethod: "GET"
    }
      , qn = {
        rg: !0,
        endpoint: "getRecaptchaParam",
        httpMethod: "GET",
        Fa: function(a) {
            if (!a.recaptchaSiteKey)
                throw new Q("internal-error");
        }
    }
      , hn = {
        endpoint: "resetPassword",
        ya: gn,
        jc: "email",
        Ba: !0
    }
      , Tm = {
        endpoint: "sendVerificationCode",
        Sa: ["phoneNumber", "recaptchaToken"],
        jc: "sessionInfo",
        Ba: !0
    }
      , Nm = {
        endpoint: "setAccountInfo",
        Sa: ["idToken"],
        ya: Fm,
        Pb: !0
    }
      , Vl = {
        endpoint: "setAccountInfo",
        Sa: ["idToken"],
        ya: function(a) {
            Fm(a);
            if (!a.password)
                throw new Q("weak-password");
        },
        Fa: Km,
        Pb: !0
    }
      , Mm = {
        endpoint: "signupNewUser",
        Fa: Km,
        Pb: !0,
        Ba: !0
    }
      , Vm = {
        endpoint: "accounts/mfaEnrollment:start",
        Sa: ["idToken", "phoneEnrollmentInfo"],
        ya: function(a) {
            if (!a.phoneEnrollmentInfo)
                throw new Q("internal-error");
            if (!a.phoneEnrollmentInfo.phoneNumber)
                throw new Q("missing-phone-number");
            if (!a.phoneEnrollmentInfo.recaptchaToken)
                throw new Q("missing-app-credential");
        },
        Fa: function(a) {
            if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
                throw new Q("internal-error");
        },
        Ba: !0,
        Ne: !0
    }
      , Xm = {
        endpoint: "accounts/mfaSignIn:start",
        Sa: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
        ya: function(a) {
            if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
                throw new Q("missing-app-credential");
        },
        Fa: function(a) {
            if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
                throw new Q("internal-error");
        },
        Ba: !0,
        Ne: !0
    }
      , dn = {
        endpoint: "verifyAssertion",
        ya: $m,
        Mf: an,
        Fa: cn,
        Pb: !0,
        Ba: !0
    }
      , fn = {
        endpoint: "verifyAssertion",
        ya: $m,
        Mf: an,
        Fa: function(a) {
            if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage)
                throw new Q("user-not-found");
            if (a.errorMessage)
                throw bn(a.errorMessage);
            Km(a)
        },
        Pb: !0,
        Ba: !0
    }
      , en = {
        endpoint: "verifyAssertion",
        ya: function(a) {
            $m(a);
            if (!a.idToken)
                throw new Q("internal-error");
        },
        Mf: an,
        Fa: cn,
        Pb: !0
    }
      , rn = {
        endpoint: "verifyCustomToken",
        ya: function(a) {
            if (!a.token)
                throw new Q("invalid-custom-token");
        },
        Fa: Km,
        Pb: !0,
        Ba: !0
    }
      , Tl = {
        endpoint: "verifyPassword",
        ya: function(a) {
            Em(a);
            if (!a.password)
                throw new Q("wrong-password");
        },
        Fa: Km,
        Pb: !0,
        Ba: !0
    }
      , Um = {
        endpoint: "verifyPhoneNumber",
        ya: Lm,
        Fa: Km,
        Ba: !0
    }
      , am = {
        endpoint: "verifyPhoneNumber",
        ya: function(a) {
            if (!a.idToken)
                throw new Q("internal-error");
            Lm(a)
        },
        Fa: function(a) {
            if (a.temporaryProof)
                throw a.code = "credential-already-in-use",
                lm(a);
            Km(a)
        }
    }
      , bm = {
        hi: {
            USER_NOT_FOUND: "user-not-found"
        },
        endpoint: "verifyPhoneNumber",
        ya: Lm,
        Fa: Km,
        Ba: !0
    }
      , sn = {
        endpoint: "accounts/mfaEnrollment:withdraw",
        Sa: ["idToken", "mfaEnrollmentId"],
        Fa: function(a) {
            if (!!a.idToken ^ !!a.refreshToken)
                throw new Q("internal-error");
        },
        Ba: !0,
        Ne: !0
    };
    var un = function(a) {
        this.lb = a;
        this.nf = null;
        this.Zg = tn(this)
    }
      , tn = function(a) {
        return vn().then(function() {
            return new E(function(b, c) {
                O("gapi.iframes.getContext")().open({
                    where: document.body,
                    url: a.lb,
                    messageHandlersFilter: O("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                    attributes: {
                        style: {
                            position: "absolute",
                            top: "-100px",
                            width: "1px",
                            height: "1px"
                        }
                    },
                    dontclear: !0
                }, function(d) {
                    a.nf = d;
                    a.nf.restyle({
                        setHideOnLeave: !1
                    });
                    var e = setTimeout(function() {
                        c(Error("Network Error"))
                    }, wn.get())
                      , f = function() {
                        clearTimeout(e);
                        b()
                    };
                    d.ping(f).then(f, function() {
                        c(Error("Network Error"))
                    })
                })
            }
            )
        })
    };
    un.prototype.sendMessage = function(a) {
        var b = this;
        return this.Zg.then(function() {
            return new E(function(c) {
                b.nf.send(a.type, a, c, O("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
            }
            )
        })
    }
    ;
    un.prototype.uh = function(a, b) {
        var c = this;
        this.Zg.then(function() {
            c.nf.register(a, b, O("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
        })
    }
    ;
    var vn = function() {
        return xn ? xn : xn = (new E(function(a, b) {
            var c = function() {
                Kk();
                O("gapi.load")("gapi.iframes", {
                    callback: a,
                    ontimeout: function() {
                        Kk();
                        b(Error("Network Error"))
                    },
                    timeout: yn.get()
                })
            };
            if (O("gapi.iframes.Iframe"))
                a();
            else if (O("gapi.load"))
                c();
            else {
                var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();
                n[d] = function() {
                    O("gapi.load") ? c() : b(Error("Network Error"))
                }
                ;
                d = Fb(zn, {
                    onload: d
                });
                F(ij(d)).u(function() {
                    b(Error("Network Error"))
                })
            }
        }
        )).u(function(a) {
            xn = null;
            throw a;
        })
    }
      , zn = new xb(ub,"https://apis.google.com/js/api.js?onload=%{onload}")
      , yn = new Lk(3E4,6E4)
      , wn = new Lk(5E3,15E3)
      , xn = null;
    var An = function(a, b, c, d) {
        this.Ha = a;
        this.ka = b;
        this.ta = c;
        this.ha = d;
        this.hd = null;
        this.ha ? (a = M(this.ha.url),
        a = Wj(a.Za, a.La, a.Xb, "/emulator/auth/iframe")) : a = Wj("https", this.Ha, null, "/__/auth/iframe");
        this.qc = a;
        L(this.qc, "apiKey", this.ka);
        L(this.qc, "appName", this.ta);
        this.Oa = null;
        this.Ja = []
    };
    An.prototype.Gh = function(a) {
        this.hd = a;
        return this
    }
    ;
    An.prototype.Dh = function(a) {
        this.Oa = a;
        return this
    }
    ;
    An.prototype.toString = function() {
        this.hd ? L(this.qc, "v", this.hd) : this.qc.removeParameter("v");
        this.Oa ? L(this.qc, "eid", this.Oa) : this.qc.removeParameter("eid");
        this.Ja.length ? L(this.qc, "fw", this.Ja.join(",")) : this.qc.removeParameter("fw");
        return this.qc.toString()
    }
    ;
    var Bn = function(a, b, c, d, e, f) {
        this.Ha = a;
        this.ka = b;
        this.ta = c;
        this.$j = d;
        this.ha = f;
        this.hd = this.Pa = this.th = null;
        this.Hd = e;
        this.ua = this.Oa = null
    };
    Bn.prototype.Fh = function(a) {
        this.ua = a;
        return this
    }
    ;
    Bn.prototype.Gh = function(a) {
        this.hd = a;
        return this
    }
    ;
    Bn.prototype.Dh = function(a) {
        this.Oa = a;
        return this
    }
    ;
    Bn.prototype.toString = function() {
        if (this.ha) {
            var a = M(this.ha.url);
            a = Wj(a.Za, a.La, a.Xb, "/emulator/auth/handler")
        } else
            a = Wj("https", this.Ha, null, "/__/auth/handler");
        L(a, "apiKey", this.ka);
        L(a, "appName", this.ta);
        L(a, "authType", this.$j);
        if (this.Hd.isOAuthProvider) {
            var b = this.Hd;
            try {
                var c = firebase.app(this.ta).auth().Kb
            } catch (k) {
                c = null
            }
            b.yg = c;
            L(a, "providerId", this.Hd.providerId);
            c = this.Hd;
            b = Hk(c.ii);
            for (var d in b)
                b[d] = b[d].toString();
            d = c.Al;
            b = ob(b);
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                f in b && delete b[f]
            }
            c.Sg && c.yg && !b[c.Sg] && (b[c.Sg] = c.yg);
            nb(b) || L(a, "customParameters", Gk(b))
        }
        "function" === typeof this.Hd.zi && (c = this.Hd.zi(),
        c.length && L(a, "scopes", c.join(",")));
        this.th ? L(a, "redirectUrl", this.th) : a.removeParameter("redirectUrl");
        this.Pa ? L(a, "eventId", this.Pa) : a.removeParameter("eventId");
        this.hd ? L(a, "v", this.hd) : a.removeParameter("v");
        if (this.Qe)
            for (var g in this.Qe)
                this.Qe.hasOwnProperty(g) && !Vj(a, g) && L(a, g, this.Qe[g]);
        this.ua ? L(a, "tid", this.ua) : a.removeParameter("tid");
        this.Oa ? L(a, "eid", this.Oa) : a.removeParameter("eid");
        g = Cn(this.ta);
        g.length && L(a, "fw", g.join(","));
        return a.toString()
    }
    ;
    var Cn = function(a) {
        try {
            return Ya(firebase.app(a).auth().Ja)
        } catch (b) {
            return []
        }
    }
      , Dn = function(a, b, c, d, e, f) {
        this.Ha = a;
        this.ka = b;
        this.ta = c;
        this.ha = f;
        this.Jc = d || null;
        this.Oa = e || null;
        this.o = this.Lg = this.vi = null;
        this.Zb = [];
        this.sf = this.Lb = null
    }
      , En = function(a) {
        var b = b || ek();
        return Jm(a).then(function(c) {
            if (!ok(c, b))
                throw new ql(ek());
        })
    };
    h = Dn.prototype;
    h.ne = function() {
        if (this.sf)
            return this.sf;
        var a = this;
        return this.sf = qk().then(function() {
            if (!a.Lg) {
                var b = a.Jc
                  , c = a.Oa
                  , d = Cn(a.ta);
                b = (new An(a.Ha,a.ka,a.ta,a.ha)).Gh(b).Dh(c);
                b.Ja = Ya(d || []);
                a.Lg = b.toString()
            }
            a.mf = new un(a.Lg);
            a.wh()
        })
    }
    ;
    h.Ge = function(a, b, c) {
        var d = new Q("popup-closed-by-user")
          , e = new Q("web-storage-unsupported")
          , f = this
          , g = !1;
        return this.Sc().then(function() {
            Fn(f).then(function(k) {
                k || (a && kk(a),
                b(e),
                g = !0)
            })
        }).u(function() {}).then(function() {
            if (!g)
                return mk(a)
        }).then(function() {
            if (!g)
                return tj(c).then(function() {
                    b(d)
                })
        })
    }
    ;
    h.Ej = function() {
        var a = N();
        return !Fk(a) && !Jk(a)
    }
    ;
    h.Di = function() {
        return !1
    }
    ;
    h.xe = function(a, b, c, d, e, f, g, k) {
        if (!a)
            return H(new Q("popup-blocked"));
        if (g && !Fk())
            return this.Sc().u(function(p) {
                kk(a);
                e(p)
            }),
            d(),
            F();
        this.Lb || (this.Lb = En(Gn(this)));
        var m = this;
        return this.Lb.then(function() {
            var p = m.Sc().u(function(w) {
                kk(a);
                e(w);
                throw w;
            });
            d();
            return p
        }).then(function() {
            jm(c);
            if (!g) {
                var p = Hn(m.Ha, m.ka, m.ta, b, c, null, f, m.Jc, void 0, m.Oa, k, m.ha);
                fk(p, a)
            }
        }).u(function(p) {
            "auth/network-request-failed" == p.code && (m.Lb = null);
            throw p;
        })
    }
    ;
    var Gn = function(a) {
        a.o || (a.vi = a.Jc ? Ak("JsCore", a.Jc, Cn(a.ta)) : null,
        a.o = new rm(a.ka,bk(a.Oa),a.vi),
        a.ha && vm(a.o, a.ha));
        return a.o
    };
    Dn.prototype.ye = function(a, b, c, d) {
        this.Lb || (this.Lb = En(Gn(this)));
        var e = this;
        return this.Lb.then(function() {
            jm(b);
            var f = Hn(e.Ha, e.ka, e.ta, a, b, ek(), c, e.Jc, void 0, e.Oa, d, e.ha);
            fk(f)
        }).u(function(f) {
            "auth/network-request-failed" == f.code && (e.Lb = null);
            throw f;
        })
    }
    ;
    Dn.prototype.Sc = function() {
        var a = this;
        return this.ne().then(function() {
            return a.mf.Zg
        }).u(function() {
            a.Lb = null;
            throw new Q("network-request-failed");
        })
    }
    ;
    Dn.prototype.Jj = function() {
        return !0
    }
    ;
    var Hn = function(a, b, c, d, e, f, g, k, m, p, w, D) {
        a = new Bn(a,b,c,d,e,D);
        a.th = f;
        a.Pa = g;
        f = a.Gh(k);
        f.Qe = ob(m || null);
        return f.Dh(p).Fh(w).toString()
    };
    Dn.prototype.wh = function() {
        if (!this.mf)
            throw Error("IfcHandler must be initialized!");
        var a = this;
        this.mf.uh("authEvent", function(b) {
            var c = {};
            if (b && b.authEvent) {
                var d = !1;
                b = hl(b.authEvent);
                for (c = 0; c < a.Zb.length; c++)
                    d = a.Zb[c](b) || d;
                c = {};
                c.status = d ? "ACK" : "ERROR";
                return F(c)
            }
            c.status = "ERROR";
            return F(c)
        })
    }
    ;
    var Fn = function(a) {
        var b = {
            type: "webStorageSupport"
        };
        return a.ne().then(function() {
            return a.mf.sendMessage(b)
        }).then(function(c) {
            if (c && c.length && "undefined" !== typeof c[0].webStorageSupport)
                return c[0].webStorageSupport;
            throw Error();
        })
    };
    Dn.prototype.Hc = function(a) {
        this.Zb.push(a)
    }
    ;
    Dn.prototype.Ld = function(a) {
        Wa(this.Zb, function(b) {
            return b == a
        })
    }
    ;
    function In() {}
    In.prototype.render = function() {}
    ;
    In.prototype.reset = function() {}
    ;
    In.prototype.getResponse = function() {}
    ;
    In.prototype.execute = function() {}
    ;
    var Jn = function() {
        this.qd = n.grecaptcha ? Infinity : 0;
        this.Fi = null;
        this.ug = "__rcb" + Math.floor(1E6 * Math.random()).toString()
    };
    Jn.prototype.Si = function(a) {
        var b = this;
        return new E(function(c, d) {
            var e = setTimeout(function() {
                d(new Q("network-request-failed"))
            }, Kn.get());
            if (!n.grecaptcha || a !== b.Fi && !b.qd) {
                n[b.ug] = function() {
                    if (n.grecaptcha) {
                        b.Fi = a;
                        var g = n.grecaptcha.render;
                        n.grecaptcha.render = function(k, m) {
                            k = g(k, m);
                            b.qd++;
                            return k
                        }
                        ;
                        clearTimeout(e);
                        c(n.grecaptcha)
                    } else
                        clearTimeout(e),
                        d(new Q("internal-error"));
                    delete n[b.ug]
                }
                ;
                var f = Fb(Ln, {
                    onload: b.ug,
                    hl: a || ""
                });
                F(ij(f)).u(function() {
                    clearTimeout(e);
                    d(new Q("internal-error","Unable to load external reCAPTCHA dependencies!"))
                })
            } else
                clearTimeout(e),
                c(n.grecaptcha)
        }
        )
    }
    ;
    Jn.prototype.Zh = function() {
        this.qd--
    }
    ;
    var Ln = new xb(ub,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}")
      , Kn = new Lk(3E4,6E4)
      , Mn = null;
    var Nn = function() {
        this.Wa = {};
        this.qd = 1E12
    };
    Nn.prototype.render = function(a, b) {
        this.Wa[this.qd.toString()] = new On(a,b);
        return this.qd++
    }
    ;
    Nn.prototype.reset = function(a) {
        var b = Pn(this, a);
        a = Qn(a);
        b && a && (b.delete(),
        delete this.Wa[a])
    }
    ;
    Nn.prototype.getResponse = function(a) {
        return (a = Pn(this, a)) ? a.getResponse() : null
    }
    ;
    Nn.prototype.execute = function(a) {
        (a = Pn(this, a)) && a.execute()
    }
    ;
    var Pn = function(a, b) {
        return (b = Qn(b)) ? a.Wa[b] || null : null
    }
      , Qn = function(a) {
        return (a = "undefined" === typeof a ? 1E12 : a) ? a.toString() : null
    }
      , Rn = null
      , On = function(a, b) {
        this.Bb = !1;
        this.Ea = b;
        this.Qd = this.Nf = null;
        this.Oi = "invisible" !== this.Ea.size;
        this.li = xc(a);
        var c = this;
        this.Zi = function() {
            c.execute()
        }
        ;
        this.Oi ? this.execute() : Vh(this.li, "click", this.Zi)
    };
    On.prototype.getResponse = function() {
        Sn(this);
        return this.Nf
    }
    ;
    On.prototype.execute = function() {
        Sn(this);
        var a = this;
        this.Qd || (this.Qd = setTimeout(function() {
            a.Nf = yk();
            var b = a.Ea.callback
              , c = a.Ea["expired-callback"];
            if (b)
                try {
                    b(a.Nf)
                } catch (d) {}
            a.Qd = setTimeout(function() {
                a.Qd = null;
                a.Nf = null;
                if (c)
                    try {
                        c()
                    } catch (d) {}
                a.Oi && a.execute()
            }, 6E4)
        }, 500))
    }
    ;
    On.prototype.delete = function() {
        Sn(this);
        this.Bb = !0;
        clearTimeout(this.Qd);
        this.Qd = null;
        ci(this.li, "click", this.Zi)
    }
    ;
    var Sn = function(a) {
        if (a.Bb)
            throw Error("reCAPTCHA mock was already deleted!");
    };
    var Tn = function() {};
    Tn.prototype.Si = function() {
        Rn || (Rn = new Nn);
        return F(Rn)
    }
    ;
    Tn.prototype.Zh = function() {}
    ;
    var Un = null;
    var Vn = function(a, b, c, d, e, f, g) {
        P(this, "type", "recaptcha");
        this.Ud = this.Xd = null;
        this.rd = !1;
        this.ai = b;
        this.je = null;
        g ? (Un || (Un = new Tn),
        g = Un) : (Mn || (Mn = new Jn),
        g = Mn);
        this.qj = g;
        this.yc = c || {
            theme: "light",
            type: "image"
        };
        this.Qa = [];
        if (this.yc.sitekey)
            throw new Q("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
        this.tf = "invisible" === this.yc.size;
        if (!n.document)
            throw new Q("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
        if (!xc(b) || !this.tf && xc(b).hasChildNodes())
            throw new Q("argument-error","reCAPTCHA container is either not found or already contains inner elements!");
        this.o = new rm(a,f || null,e || null);
        this.Ak = d || function() {
            return null
        }
        ;
        var k = this;
        this.Yf = [];
        var m = this.yc.callback;
        this.yc.callback = function(w) {
            k.$d(w);
            if ("function" === typeof m)
                m(w);
            else if ("string" === typeof m) {
                var D = O(m, n);
                "function" === typeof D && D(w)
            }
        }
        ;
        var p = this.yc["expired-callback"];
        this.yc["expired-callback"] = function() {
            k.$d(null);
            if ("function" === typeof p)
                p();
            else if ("string" === typeof p) {
                var w = O(p, n);
                "function" === typeof w && w()
            }
        }
    };
    Vn.prototype.$d = function(a) {
        for (var b = 0; b < this.Yf.length; b++)
            try {
                this.Yf[b](a)
            } catch (c) {}
    }
    ;
    var Wn = function(a, b) {
        Wa(a.Yf, function(c) {
            return c == b
        })
    };
    h = Vn.prototype;
    h.T = function(a) {
        var b = this;
        this.Qa.push(a);
        a.Fc(function() {
            Ua(b.Qa, a)
        });
        return a
    }
    ;
    h.oe = function() {
        var a = this;
        return this.Xd ? this.Xd : this.Xd = this.T(F().then(function() {
            if (Dk() && !vk())
                return qk();
            throw new Q("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
        }).then(function() {
            return a.qj.Si(a.Ak())
        }).then(function(b) {
            a.je = b;
            return R(a.o, qn, {})
        }).then(function(b) {
            a.yc.sitekey = b.recaptchaSiteKey
        }).u(function(b) {
            a.Xd = null;
            throw b;
        }))
    }
    ;
    h.render = function() {
        Xn(this);
        var a = this;
        return this.T(this.oe().then(function() {
            if (null === a.Ud) {
                var b = a.ai;
                if (!a.tf) {
                    var c = xc(b);
                    b = Bc("DIV");
                    c.appendChild(b)
                }
                a.Ud = a.je.render(b, a.yc)
            }
            return a.Ud
        }))
    }
    ;
    h.verify = function() {
        Xn(this);
        var a = this;
        return this.T(this.render().then(function(b) {
            return new E(function(c) {
                var d = a.je.getResponse(b);
                if (d)
                    c(d);
                else {
                    var e = function(f) {
                        f && (Wn(a, e),
                        c(f))
                    };
                    a.Yf.push(e);
                    a.tf && a.je.execute(a.Ud)
                }
            }
            )
        }))
    }
    ;
    h.reset = function() {
        Xn(this);
        null !== this.Ud && this.je.reset(this.Ud)
    }
    ;
    var Xn = function(a) {
        if (a.rd)
            throw new Q("internal-error","RecaptchaVerifier instance has been destroyed.");
    };
    Vn.prototype.clear = function() {
        Xn(this);
        this.rd = !0;
        this.qj.Zh();
        for (var a = 0; a < this.Qa.length; a++)
            this.Qa[a].cancel("RecaptchaVerifier instance has been destroyed.");
        this.tf || Ec(xc(this.ai))
    }
    ;
    var Yn = function(a, b, c) {
        var d = !1;
        try {
            this.W = c || firebase.app()
        } catch (g) {
            throw new Q("argument-error","No firebase.app.App instance is currently initialized.");
        }
        if (this.W.options && this.W.options.apiKey)
            c = this.W.options.apiKey;
        else
            throw new Q("invalid-api-key");
        var e = this
          , f = null;
        try {
            f = Ya(this.W.auth().Ja)
        } catch (g) {}
        try {
            d = this.W.auth().settings.appVerificationDisabledForTesting
        } catch (g) {}
        f = firebase.SDK_VERSION ? Ak("JsCore", firebase.SDK_VERSION, f) : null;
        Vn.call(this, c, a, b, function() {
            try {
                var g = e.W.auth().Kb
            } catch (k) {
                g = null
            }
            return g
        }, f, bk(ck), d)
    };
    u(Yn, Vn);
    var Zn = function(a) {
        this.Pe = a
    };
    Zn.prototype.postMessage = function(a, b) {
        this.Pe.postMessage(a, b)
    }
    ;
    var $n = function(a) {
        this.wl = a;
        this.$h = !1;
        this.xf = []
    };
    $n.prototype.send = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        var d = this, e;
        b = b || {};
        var f, g, k, m = null;
        if (this.$h)
            return H(Error("connection_unavailable"));
        var p = c ? 800 : 50
          , w = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
        return (new E(function(D, G) {
            w ? (e = "" + Math.floor(Math.random() * Math.pow(10, 20)).toString(),
            w.port1.start(),
            g = setTimeout(function() {
                G(Error("unsupported_event"))
            }, p),
            f = function(oa) {
                oa.data.eventId === e && ("ack" === oa.data.status ? (clearTimeout(g),
                k = setTimeout(function() {
                    G(Error("timeout"))
                }, 3E3)) : "done" === oa.data.status ? (clearTimeout(k),
                "undefined" !== typeof oa.data.response ? D(oa.data.response) : G(Error("unknown_error"))) : (clearTimeout(g),
                clearTimeout(k),
                G(Error("invalid_response"))))
            }
            ,
            m = {
                messageChannel: w,
                onMessage: f
            },
            d.xf.push(m),
            w.port1.addEventListener("message", f),
            d.wl.postMessage({
                eventType: a,
                eventId: e,
                data: b
            }, [w.port2])) : G(Error("connection_unavailable"))
        }
        )).then(function(D) {
            ao(d, m);
            return D
        }).u(function(D) {
            ao(d, m);
            throw D;
        })
    }
    ;
    var ao = function(a, b) {
        if (b) {
            var c = b.messageChannel
              , d = b.onMessage;
            c && (c.port1.removeEventListener("message", d),
            c.port1.close());
            Wa(a.xf, function(e) {
                return e == b
            })
        }
    };
    $n.prototype.close = function() {
        for (; 0 < this.xf.length; )
            ao(this, this.xf[0]);
        this.$h = !0
    }
    ;
    var bo = function(a) {
        this.Cg = a;
        this.Hb = {};
        this.Ui = r(this.Ek, this)
    }
      , eo = function(a) {
        x(co, function(c) {
            c.Cg == a && (b = c)
        });
        if (!b) {
            var b = new bo(a);
            co.push(b)
        }
        return b
    };
    bo.prototype.Ek = function(a) {
        var b = a.data.eventType
          , c = a.data.eventId
          , d = this.Hb[b];
        if (d && 0 < d.length) {
            a.ports[0].postMessage({
                status: "ack",
                eventId: c,
                eventType: b,
                response: null
            });
            var e = [];
            x(d, function(f) {
                e.push(F().then(function() {
                    return f(a.origin, a.data.data)
                }))
            });
            If(e).then(function(f) {
                var g = [];
                x(f, function(k) {
                    g.push({
                        fulfilled: k.ui,
                        value: k.value,
                        reason: k.reason ? k.reason.message : void 0
                    })
                });
                x(g, function(k) {
                    for (var m in k)
                        "undefined" === typeof k[m] && delete k[m]
                });
                a.ports[0].postMessage({
                    status: "done",
                    eventId: c,
                    eventType: b,
                    response: g
                })
            })
        }
    }
    ;
    bo.prototype.subscribe = function(a, b) {
        nb(this.Hb) && this.Cg.addEventListener("message", this.Ui);
        "undefined" === typeof this.Hb[a] && (this.Hb[a] = []);
        this.Hb[a].push(b)
    }
    ;
    bo.prototype.unsubscribe = function(a, b) {
        "undefined" !== typeof this.Hb[a] && b ? (Wa(this.Hb[a], function(c) {
            return c == b
        }),
        0 == this.Hb[a].length && delete this.Hb[a]) : b || delete this.Hb[a];
        nb(this.Hb) && this.Cg.removeEventListener("message", this.Ui)
    }
    ;
    var co = [];
    var fo = function(a) {
        this.yb = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
        if (!this.yb)
            throw new Q("internal-error","The React Native compatibility library was not found.");
        this.type = "asyncStorage"
    };
    h = fo.prototype;
    h.get = function(a) {
        return F(this.yb.getItem(a)).then(function(b) {
            return b && Ik(b)
        })
    }
    ;
    h.set = function(a, b) {
        return F(this.yb.setItem(a, Gk(b)))
    }
    ;
    h.remove = function(a) {
        return F(this.yb.removeItem(a))
    }
    ;
    h.uc = function() {}
    ;
    h.Ec = function() {}
    ;
    function go() {
        this.storage = {};
        this.type = "inMemory"
    }
    h = go.prototype;
    h.get = function(a) {
        return F(this.storage[a])
    }
    ;
    h.set = function(a, b) {
        this.storage[a] = b;
        return F()
    }
    ;
    h.remove = function(a) {
        delete this.storage[a];
        return F()
    }
    ;
    h.uc = function() {}
    ;
    h.Ec = function() {}
    ;
    var jo = function() {
        if (!ho()) {
            if ("Node" == wk())
                throw new Q("internal-error","The LocalStorage compatibility library was not found.");
            throw new Q("web-storage-unsupported");
        }
        this.yb = io() || firebase.INTERNAL.node.localStorage;
        this.type = "localStorage"
    }
      , io = function() {
        try {
            var a = n.localStorage
              , b = Bk();
            a && (a.setItem(b, "1"),
            a.removeItem(b));
            return a
        } catch (c) {
            return null
        }
    }
      , ho = function() {
        var a = "Node" == wk();
        a = io() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
        if (!a)
            return !1;
        try {
            return a.setItem("__sak", "1"),
            a.removeItem("__sak"),
            !0
        } catch (b) {
            return !1
        }
    };
    h = jo.prototype;
    h.get = function(a) {
        var b = this;
        return F().then(function() {
            var c = b.yb.getItem(a);
            return Ik(c)
        })
    }
    ;
    h.set = function(a, b) {
        var c = this;
        return F().then(function() {
            var d = Gk(b);
            null === d ? c.remove(a) : c.yb.setItem(a, d)
        })
    }
    ;
    h.remove = function(a) {
        var b = this;
        return F().then(function() {
            b.yb.removeItem(a)
        })
    }
    ;
    h.uc = function(a) {
        n.window && Vh(n.window, "storage", a)
    }
    ;
    h.Ec = function(a) {
        n.window && ci(n.window, "storage", a)
    }
    ;
    var ko = function() {
        this.yb = {};
        this.type = "nullStorage"
    };
    h = ko.prototype;
    h.get = function() {
        return F(null)
    }
    ;
    h.set = function() {
        return F()
    }
    ;
    h.remove = function() {
        return F()
    }
    ;
    h.uc = function() {}
    ;
    h.Ec = function() {}
    ;
    var no = function() {
        if (!lo()) {
            if ("Node" == wk())
                throw new Q("internal-error","The SessionStorage compatibility library was not found.");
            throw new Q("web-storage-unsupported");
        }
        this.yb = mo() || firebase.INTERNAL.node.sessionStorage;
        this.type = "sessionStorage"
    }
      , mo = function() {
        try {
            var a = n.sessionStorage
              , b = Bk();
            a && (a.setItem(b, "1"),
            a.removeItem(b));
            return a
        } catch (c) {
            return null
        }
    }
      , lo = function() {
        var a = "Node" == wk();
        a = mo() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
        if (!a)
            return !1;
        try {
            return a.setItem("__sak", "1"),
            a.removeItem("__sak"),
            !0
        } catch (b) {
            return !1
        }
    };
    h = no.prototype;
    h.get = function(a) {
        var b = this;
        return F().then(function() {
            var c = b.yb.getItem(a);
            return Ik(c)
        })
    }
    ;
    h.set = function(a, b) {
        var c = this;
        return F().then(function() {
            var d = Gk(b);
            null === d ? c.remove(a) : c.yb.setItem(a, d)
        })
    }
    ;
    h.remove = function(a) {
        var b = this;
        return F().then(function() {
            b.yb.removeItem(a)
        })
    }
    ;
    h.uc = function() {}
    ;
    h.Ec = function() {}
    ;
    var qo = function() {
        if (!oo())
            throw new Q("web-storage-unsupported");
        this.ji = "firebaseLocalStorageDb";
        this.zf = "firebaseLocalStorage";
        this.xg = "fbase_key";
        this.Pj = "value";
        this.jd = 1;
        this.Va = {};
        this.Yb = [];
        this.ve = 0;
        this.Ki = n.indexedDB;
        this.type = "indexedDB";
        this.Sf = this.zc = this.Gf = this.hh = null;
        this.xj = !1;
        this.hg = null;
        var a = this;
        vk() && self ? (this.zc = eo(vk() ? self : null),
        this.zc.subscribe("keyChanged", function(b, c) {
            return po(a).then(function(d) {
                0 < d.length && x(a.Yb, function(e) {
                    e(d)
                });
                return {
                    keyProcessed: Ta(d, c.key)
                }
            })
        }),
        this.zc.subscribe("ping", function() {
            return F(["keyChanged"])
        })) : Sk().then(function(b) {
            if (a.hg = b)
                a.Sf = new $n(new Zn(b)),
                a.Sf.send("ping", null, !0).then(function(c) {
                    c[0].fulfilled && Ta(c[0].value, "keyChanged") && (a.xj = !0)
                }).u(function() {})
        })
    }, ro, so = function(a) {
        return new E(function(b, c) {
            var d = a.Ki.deleteDatabase(a.ji);
            d.onsuccess = function() {
                b()
            }
            ;
            d.onerror = function(e) {
                c(Error(e.target.error))
            }
        }
        )
    }, to = function(a) {
        return new E(function(b, c) {
            var d = a.Ki.open(a.ji, a.jd);
            d.onerror = function(e) {
                try {
                    e.preventDefault()
                } catch (f) {}
                c(Error(e.target.error))
            }
            ;
            d.onupgradeneeded = function(e) {
                e = e.target.result;
                try {
                    e.createObjectStore(a.zf, {
                        keyPath: a.xg
                    })
                } catch (f) {
                    c(f)
                }
            }
            ;
            d.onsuccess = function(e) {
                e = e.target.result;
                e.objectStoreNames.contains(a.zf) ? b(e) : so(a).then(function() {
                    return to(a)
                }).then(function(f) {
                    b(f)
                }).u(function(f) {
                    c(f)
                })
            }
        }
        )
    }, uo = function(a) {
        a.Ng || (a.Ng = to(a));
        return a.Ng
    }, vo = function(a, b) {
        var c = 0
          , d = function(e, f) {
            uo(a).then(b).then(e).u(function(g) {
                if (3 < ++c)
                    f(g);
                else
                    return uo(a).then(function(k) {
                        k.close();
                        a.Ng = void 0;
                        return d(e, f)
                    }).u(function(k) {
                        f(k)
                    })
            })
        };
        return new E(d)
    }, oo = function() {
        try {
            return !!n.indexedDB
        } catch (a) {
            return !1
        }
    }, wo = function(a, b) {
        return b.objectStore(a.zf)
    }, xo = function(a, b, c) {
        return b.transaction([a.zf], c ? "readwrite" : "readonly")
    }, yo = function(a) {
        return new E(function(b, c) {
            a.onsuccess = function(d) {
                d && d.target ? b(d.target.result) : b()
            }
            ;
            a.onerror = function(d) {
                c(d.target.error)
            }
        }
        )
    };
    qo.prototype.set = function(a, b) {
        var c = this
          , d = !1;
        return vo(this, function(e) {
            e = wo(c, xo(c, e, !0));
            return yo(e.get(a))
        }).then(function(e) {
            return vo(c, function(f) {
                f = wo(c, xo(c, f, !0));
                if (e)
                    return e.value = b,
                    yo(f.put(e));
                c.ve++;
                d = !0;
                var g = {};
                g[c.xg] = a;
                g[c.Pj] = b;
                return yo(f.add(g))
            })
        }).then(function() {
            c.Va[a] = b;
            return zo(c, a)
        }).Fc(function() {
            d && c.ve--
        })
    }
    ;
    var zo = function(a, b) {
        return a.Sf && a.hg && Rk() === a.hg ? a.Sf.send("keyChanged", {
            key: b
        }, a.xj).then(function() {}).u(function() {}) : F()
    };
    qo.prototype.get = function(a) {
        var b = this;
        return vo(this, function(c) {
            return yo(wo(b, xo(b, c, !1)).get(a))
        }).then(function(c) {
            return c && c.value
        })
    }
    ;
    qo.prototype.remove = function(a) {
        var b = !1
          , c = this;
        return vo(this, function(d) {
            b = !0;
            c.ve++;
            return yo(wo(c, xo(c, d, !0))["delete"](a))
        }).then(function() {
            delete c.Va[a];
            return zo(c, a)
        }).Fc(function() {
            b && c.ve--
        })
    }
    ;
    var po = function(a) {
        return uo(a).then(function(b) {
            var c = wo(a, xo(a, b, !1));
            return c.getAll ? yo(c.getAll()) : new E(function(d, e) {
                var f = []
                  , g = c.openCursor();
                g.onsuccess = function(k) {
                    (k = k.target.result) ? (f.push(k.value),
                    k["continue"]()) : d(f)
                }
                ;
                g.onerror = function(k) {
                    e(k.target.error)
                }
            }
            )
        }).then(function(b) {
            var c = {}
              , d = [];
            if (0 == a.ve) {
                for (d = 0; d < b.length; d++)
                    c[b[d][a.xg]] = b[d][a.Pj];
                d = gk(a.Va, c);
                a.Va = c
            }
            return d
        })
    };
    qo.prototype.uc = function(a) {
        0 == this.Yb.length && this.Kh();
        this.Yb.push(a)
    }
    ;
    qo.prototype.Ec = function(a) {
        Wa(this.Yb, function(b) {
            return b == a
        });
        0 == this.Yb.length && this.Vf()
    }
    ;
    qo.prototype.Kh = function() {
        var a = this;
        this.Vf();
        var b = function() {
            a.Gf = setTimeout(function() {
                a.hh = po(a).then(function(c) {
                    0 < c.length && x(a.Yb, function(d) {
                        d(c)
                    })
                }).then(function() {
                    b()
                }).u(function(c) {
                    "STOP_EVENT" != c.message && b()
                })
            }, 800)
        };
        b()
    }
    ;
    qo.prototype.Vf = function() {
        this.hh && this.hh.cancel("STOP_EVENT");
        this.Gf && (clearTimeout(this.Gf),
        this.Gf = null)
    }
    ;
    function Ao(a) {
        var b = this
          , c = null;
        this.Yb = [];
        this.type = "indexedDB";
        this.mi = a;
        this.Qh = F().then(function() {
            if (oo()) {
                var d = Bk()
                  , e = "__sak" + d;
                ro || (ro = new qo);
                c = ro;
                return c.set(e, d).then(function() {
                    return c.get(e)
                }).then(function(f) {
                    if (f !== d)
                        throw Error("indexedDB not supported!");
                    return c.remove(e)
                }).then(function() {
                    return c
                }).u(function() {
                    return b.mi
                })
            }
            return b.mi
        }).then(function(d) {
            b.type = d.type;
            d.uc(function(e) {
                x(b.Yb, function(f) {
                    f(e)
                })
            });
            return d
        })
    }
    h = Ao.prototype;
    h.get = function(a) {
        return this.Qh.then(function(b) {
            return b.get(a)
        })
    }
    ;
    h.set = function(a, b) {
        return this.Qh.then(function(c) {
            return c.set(a, b)
        })
    }
    ;
    h.remove = function(a) {
        return this.Qh.then(function(b) {
            return b.remove(a)
        })
    }
    ;
    h.uc = function(a) {
        this.Yb.push(a)
    }
    ;
    h.Ec = function(a) {
        Wa(this.Yb, function(b) {
            return b == a
        })
    }
    ;
    var Fo = function() {
        this.Ag = {
            Browser: Bo,
            Node: Co,
            ReactNative: Do,
            Worker: Eo
        }[wk()]
    }, Go, Bo = {
        Ca: jo,
        Wf: no
    }, Co = {
        Ca: jo,
        Wf: no
    }, Do = {
        Ca: fo,
        Wf: ko
    }, Eo = {
        Ca: jo,
        Wf: ko
    };
    var Ho = function() {
        this.kg = !1;
        Object.defineProperty(this, "appVerificationDisabled", {
            get: function() {
                return this.kg
            },
            set: function(a) {
                this.kg = a
            },
            enumerable: !1
        })
    };
    var Io = function(a) {
        this.Pg(a)
    };
    Io.prototype.Pg = function(a) {
        var b = a.url;
        if ("undefined" === typeof b)
            throw new Q("missing-continue-uri");
        if ("string" !== typeof b || "string" === typeof b && !b.length)
            throw new Q("invalid-continue-uri");
        this.fk = b;
        this.Th = this.jg = null;
        this.Mi = !1;
        var c = a.android;
        if (c && "object" === typeof c) {
            b = c.packageName;
            var d = c.installApp;
            c = c.minimumVersion;
            if ("string" === typeof b && b.length) {
                this.jg = b;
                if ("undefined" !== typeof d && "boolean" !== typeof d)
                    throw new Q("argument-error","installApp property must be a boolean when specified.");
                this.Mi = !!d;
                if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length))
                    throw new Q("argument-error","minimumVersion property must be a non empty string when specified.");
                this.Th = c || null
            } else {
                if ("undefined" !== typeof b)
                    throw new Q("argument-error","packageName property must be a non empty string when specified.");
                if ("undefined" !== typeof d || "undefined" !== typeof c)
                    throw new Q("missing-android-pkg-name");
            }
        } else if ("undefined" !== typeof c)
            throw new Q("argument-error","android property must be a non null object when specified.");
        this.Gi = null;
        if ((b = a.iOS) && "object" === typeof b)
            if (b = b.bundleId,
            "string" === typeof b && b.length)
                this.Gi = b;
            else {
                if ("undefined" !== typeof b)
                    throw new Q("argument-error","bundleId property must be a non empty string when specified.");
            }
        else if ("undefined" !== typeof b)
            throw new Q("argument-error","iOS property must be a non null object when specified.");
        b = a.handleCodeInApp;
        if ("undefined" !== typeof b && "boolean" !== typeof b)
            throw new Q("argument-error","handleCodeInApp property must be a boolean when specified.");
        this.Yh = !!b;
        a = a.dynamicLinkDomain;
        if ("undefined" !== typeof a && ("string" !== typeof a || "string" === typeof a && !a.length))
            throw new Q("argument-error","dynamicLinkDomain property must be a non empty string when specified.");
        this.qk = a || null
    }
    ;
    var Ko = function(a) {
        var b = {};
        b.continueUrl = a.fk;
        b.canHandleCodeInApp = a.Yh;
        if (b.androidPackageName = a.jg)
            b.androidMinimumVersion = a.Th,
            b.androidInstallApp = a.Mi;
        b.iOSBundleId = a.Gi;
        b.dynamicLinkDomain = a.qk;
        for (var c in b)
            null === b[c] && delete b[c];
        return b
    };
    var Lo = function(a, b) {
        this.kk = b;
        P(this, "verificationId", a)
    };
    Lo.prototype.confirm = function(a) {
        a = hm(this.verificationId, a);
        return this.kk(a)
    }
    ;
    var Mo = function(a, b, c, d) {
        return (new dm(a)).verifyPhoneNumber(b, c).then(function(e) {
            return new Lo(e,d)
        })
    };
    var No = function(a, b, c) {
        this.tl = a;
        this.Il = b;
        this.Ck = c;
        this.wf = 3E4;
        this.Sh = 96E4;
        this.Jl = !1;
        this.Dd = null;
        this.Uc = this.wf;
        if (this.Sh < this.wf)
            throw Error("Proactive refresh lower bound greater than upper bound!");
    };
    No.prototype.start = function() {
        this.Uc = this.wf;
        Oo(this, !0)
    }
    ;
    var Po = function(a, b) {
        if (b)
            return a.Uc = a.wf,
            a.Ck();
        b = a.Uc;
        a.Uc *= 2;
        a.Uc > a.Sh && (a.Uc = a.Sh);
        return b
    }
      , Oo = function(a, b) {
        a.stop();
        a.Dd = tj(Po(a, b)).then(function() {
            return a.Jl ? F() : Nk()
        }).then(function() {
            return a.tl()
        }).then(function() {
            Oo(a, !0)
        }).u(function(c) {
            a.Il(c) && Oo(a, !1)
        })
    };
    No.prototype.stop = function() {
        this.Dd && (this.Dd.cancel(),
        this.Dd = null)
    }
    ;
    var Wo = function(a) {
        var b = {};
        b["facebook.com"] = Qo;
        b["google.com"] = Ro;
        b["github.com"] = So;
        b["twitter.com"] = To;
        var c = a && a.providerId;
        try {
            if (c)
                return b[c] ? new b[c](a) : new Uo(a);
            if ("undefined" !== typeof a.idToken)
                return new Vo(a)
        } catch (d) {}
        return null
    }
      , Vo = function(a) {
        var b = a.providerId;
        if (!b && a.idToken) {
            var c = tl(a.idToken);
            c && c.rh && (b = c.rh)
        }
        if (!b)
            throw Error("Invalid additional user info!");
        if ("anonymous" == b || "custom" == b)
            b = null;
        c = !1;
        "undefined" !== typeof a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = !0);
        P(this, "providerId", b);
        P(this, "isNewUser", c)
    }
      , Uo = function(a) {
        Vo.call(this, a);
        a = Ik(a.rawUserInfo || "{}");
        P(this, "profile", $k(a || {}))
    };
    l(Uo, Vo);
    var Qo = function(a) {
        Uo.call(this, a);
        if ("facebook.com" != this.providerId)
            throw Error("Invalid provider ID!");
    };
    l(Qo, Uo);
    var So = function(a) {
        Uo.call(this, a);
        if ("github.com" != this.providerId)
            throw Error("Invalid provider ID!");
        P(this, "username", this.profile && this.profile.login || null)
    };
    l(So, Uo);
    var Ro = function(a) {
        Uo.call(this, a);
        if ("google.com" != this.providerId)
            throw Error("Invalid provider ID!");
    };
    l(Ro, Uo);
    var To = function(a) {
        Uo.call(this, a);
        if ("twitter.com" != this.providerId)
            throw Error("Invalid provider ID!");
        P(this, "username", a.screenName || null)
    };
    l(To, Uo);
    var Xo = {
        LOCAL: "local",
        NONE: "none",
        SESSION: "session"
    }, Yo = function(a) {
        var b = new Q("invalid-persistence-type")
          , c = new Q("unsupported-persistence-type");
        a: {
            for (d in Xo)
                if (Xo[d] == a) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        if (!d || "string" !== typeof a)
            throw b;
        switch (wk()) {
        case "ReactNative":
            if ("session" === a)
                throw c;
            break;
        case "Node":
            if ("none" !== a)
                throw c;
            break;
        case "Worker":
            if ("session" === a || !oo() && "none" !== a)
                throw c;
            break;
        default:
            if (!Ck() && "none" !== a)
                throw c;
        }
    }, Zo = function() {
        var a = !Jk(N()) && uk() ? !0 : !1
          , b = Fk()
          , c = Ck();
        this.Xi = "firebase";
        this.Bh = ":";
        this.Kl = a;
        this.tj = b;
        this.Qj = c;
        this.kb = {};
        Go || (Go = new Fo);
        a = Go;
        try {
            this.mj = !dk() && Qk() || !n.indexedDB ? new a.Ag.Ca : new Ao(vk() ? new go : new a.Ag.Ca)
        } catch (d) {
            this.mj = new go,
            this.tj = !0
        }
        try {
            this.Ij = new a.Ag.Wf
        } catch (d) {
            this.Ij = new go
        }
        this.Sk = new go;
        this.Mh = r(this.Gj, this);
        this.Va = {}
    }, $o, ap = function() {
        $o || ($o = new Zo);
        return $o
    }, bp = function(a, b) {
        switch (b) {
        case "session":
            return a.Ij;
        case "none":
            return a.Sk;
        default:
            return a.mj
        }
    };
    Zo.prototype.rb = function(a, b) {
        return this.Xi + this.Bh + a.name + (b ? this.Bh + b : "")
    }
    ;
    var cp = function(a, b, c) {
        var d = a.rb(b, c)
          , e = bp(a, b.Ca);
        return a.get(b, c).then(function(f) {
            var g = null;
            try {
                g = Ik(n.localStorage.getItem(d))
            } catch (k) {}
            if (g && !f)
                return n.localStorage.removeItem(d),
                a.set(b, g, c);
            g && f && "localStorage" != e.type && n.localStorage.removeItem(d)
        })
    };
    h = Zo.prototype;
    h.get = function(a, b) {
        return bp(this, a.Ca).get(this.rb(a, b))
    }
    ;
    h.remove = function(a, b) {
        b = this.rb(a, b);
        "local" == a.Ca && (this.Va[b] = null);
        return bp(this, a.Ca).remove(b)
    }
    ;
    h.set = function(a, b, c) {
        var d = this.rb(a, c)
          , e = this
          , f = bp(this, a.Ca);
        return f.set(d, b).then(function() {
            return f.get(d)
        }).then(function(g) {
            "local" == a.Ca && (e.Va[d] = g)
        })
    }
    ;
    h.addListener = function(a, b, c) {
        a = this.rb(a, b);
        this.Qj && (this.Va[a] = n.localStorage.getItem(a));
        nb(this.kb) && this.Kh();
        this.kb[a] || (this.kb[a] = []);
        this.kb[a].push(c)
    }
    ;
    h.removeListener = function(a, b, c) {
        a = this.rb(a, b);
        this.kb[a] && (Wa(this.kb[a], function(d) {
            return d == c
        }),
        0 == this.kb[a].length && delete this.kb[a]);
        nb(this.kb) && this.Vf()
    }
    ;
    h.Kh = function() {
        bp(this, "local").uc(this.Mh);
        this.tj || (dk() || !Qk()) && n.indexedDB || !this.Qj || dp(this)
    }
    ;
    var dp = function(a) {
        ep(a);
        a.Vg = setInterval(function() {
            for (var b in a.kb) {
                var c = n.localStorage.getItem(b)
                  , d = a.Va[b];
                c != d && (a.Va[b] = c,
                c = new Ih({
                    type: "storage",
                    key: b,
                    target: window,
                    oldValue: d,
                    newValue: c,
                    fh: !0
                }),
                a.Gj(c))
            }
        }, 1E3)
    }
      , ep = function(a) {
        a.Vg && (clearInterval(a.Vg),
        a.Vg = null)
    };
    Zo.prototype.Vf = function() {
        bp(this, "local").Ec(this.Mh);
        ep(this)
    }
    ;
    Zo.prototype.Gj = function(a) {
        if (a && a.yk) {
            var b = a.hb.key;
            if (null == b)
                for (var c in this.kb) {
                    var d = this.Va[c];
                    "undefined" === typeof d && (d = null);
                    var e = n.localStorage.getItem(c);
                    e !== d && (this.Va[c] = e,
                    this.sg(c))
                }
            else if (0 == b.indexOf(this.Xi + this.Bh) && this.kb[b]) {
                "undefined" !== typeof a.hb.fh ? bp(this, "local").Ec(this.Mh) : ep(this);
                if (this.Kl)
                    if (c = n.localStorage.getItem(b),
                    d = a.hb.newValue,
                    d !== c)
                        null !== d ? n.localStorage.setItem(b, d) : n.localStorage.removeItem(b);
                    else if (this.Va[b] === d && "undefined" === typeof a.hb.fh)
                        return;
                var f = this;
                c = function() {
                    if ("undefined" !== typeof a.hb.fh || f.Va[b] !== n.localStorage.getItem(b))
                        f.Va[b] = n.localStorage.getItem(b),
                        f.sg(b)
                }
                ;
                fc && uc && 10 == uc && n.localStorage.getItem(b) !== a.hb.newValue && a.hb.newValue !== a.hb.oldValue ? setTimeout(c, 10) : c()
            }
        } else
            x(a, r(this.sg, this))
    }
    ;
    Zo.prototype.sg = function(a) {
        this.kb[a] && x(this.kb[a], function(b) {
            b()
        })
    }
    ;
    var fp = function(a) {
        this.$ = a;
        this.U = ap()
    }
      , hp = function(a) {
        return a.U.get(gp, a.$).then(function(b) {
            return hl(b)
        })
    }
      , ip = function(a) {
        return a.U.remove(gp, a.$)
    };
    fp.prototype.Hc = function(a) {
        this.U.addListener(gp, this.$, a)
    }
    ;
    fp.prototype.Ld = function(a) {
        this.U.removeListener(gp, this.$, a)
    }
    ;
    var kp = function(a) {
        return a.U.get(jp, a.$).then(function(b) {
            return hl(b)
        })
    }
      , gp = {
        name: "authEvent",
        Ca: "local"
    }
      , jp = {
        name: "redirectEvent",
        Ca: "session"
    };
    var lp = function() {
        this.U = ap()
    };
    lp.prototype.ie = function() {
        return this.U.get(mp, void 0)
    }
    ;
    var mp = {
        name: "sessionId",
        Ca: "session"
    };
    var np = function() {
        this.Wg = null;
        this.Ve = []
    };
    np.prototype.subscribe = function(a) {
        var b = this;
        this.Ve.push(a);
        this.Wg || (this.Wg = function(c) {
            for (var d = 0; d < b.Ve.length; d++)
                b.Ve[d](c)
        }
        ,
        a = O("universalLinks.subscribe", n),
        "function" === typeof a && a(null, this.Wg))
    }
    ;
    np.prototype.unsubscribe = function(a) {
        Wa(this.Ve, function(b) {
            return b == a
        })
    }
    ;
    var op = null;
    var pp = function(a, b, c, d, e, f) {
        this.Ha = a;
        this.ka = b;
        this.ta = c;
        this.ha = f;
        this.Jc = d || null;
        this.Oa = e || null;
        this.Hj = b + ":" + c;
        this.Ll = new lp;
        this.wi = new fp(this.Hj);
        this.Og = null;
        this.Zb = [];
        this.Vk = 500;
        this.yl = 2E3;
        this.le = this.Ff = null
    }
      , qp = function(a) {
        return new Q("invalid-cordova-configuration",a)
    };
    pp.prototype.Sc = function() {
        return this.oe ? this.oe : this.oe = sk().then(function() {
            if ("function" !== typeof O("universalLinks.subscribe", n))
                throw qp("cordova-universal-links-plugin-fix is not installed");
            if ("undefined" === typeof O("BuildInfo.packageName", n))
                throw qp("cordova-plugin-buildinfo is not installed");
            if ("function" !== typeof O("cordova.plugins.browsertab.openUrl", n))
                throw qp("cordova-plugin-browsertab is not installed");
            if ("function" !== typeof O("cordova.InAppBrowser.open", n))
                throw qp("cordova-plugin-inappbrowser is not installed");
        }, function() {
            throw new Q("cordova-not-ready");
        })
    }
    ;
    var rp = function() {
        for (var a = 20, b = []; 0 < a; )
            b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
            a--;
        return b.join("")
    }
      , sp = function(a) {
        var b = new Dh;
        b.update(a);
        return qh(b.digest())
    };
    h = pp.prototype;
    h.Ge = function(a, b) {
        b(new Q("operation-not-supported-in-this-environment"));
        return F()
    }
    ;
    h.xe = function() {
        return H(new Q("operation-not-supported-in-this-environment"))
    }
    ;
    h.Jj = function() {
        return !1
    }
    ;
    h.Ej = function() {
        return !0
    }
    ;
    h.Di = function() {
        return !0
    }
    ;
    h.ye = function(a, b, c, d) {
        if (this.Ff)
            return H(new Q("redirect-operation-pending"));
        var e = this
          , f = n.document
          , g = null
          , k = null
          , m = null
          , p = null;
        return this.Ff = F().then(function() {
            jm(b);
            return tp(e)
        }).then(function() {
            return up(e, a, b, c, d)
        }).then(function() {
            return (new E(function(w, D) {
                k = function() {
                    var G = O("cordova.plugins.browsertab.close", n);
                    w();
                    "function" === typeof G && G();
                    e.le && "function" === typeof e.le.close && (e.le.close(),
                    e.le = null);
                    return !1
                }
                ;
                e.Hc(k);
                m = function() {
                    g || (g = tj(e.yl).then(function() {
                        D(new Q("redirect-cancelled-by-user"))
                    }))
                }
                ;
                p = function() {
                    Mk() && m()
                }
                ;
                f.addEventListener("resume", m, !1);
                N().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", p, !1)
            }
            )).u(function(w) {
                return vp(e).then(function() {
                    throw w;
                })
            })
        }).Fc(function() {
            m && f.removeEventListener("resume", m, !1);
            p && f.removeEventListener("visibilitychange", p, !1);
            g && g.cancel();
            k && e.Ld(k);
            e.Ff = null
        })
    }
    ;
    var up = function(a, b, c, d, e) {
        var f = rp()
          , g = new gl(b,d,null,f,new Q("no-auth-event"),null,e)
          , k = O("BuildInfo.packageName", n);
        if ("string" !== typeof k)
            throw new Q("invalid-cordova-configuration");
        var m = O("BuildInfo.displayName", n)
          , p = {};
        if (N().toLowerCase().match(/iphone|ipad|ipod/))
            p.ibi = k;
        else if (N().toLowerCase().match(/android/))
            p.apn = k;
        else
            return H(new Q("operation-not-supported-in-this-environment"));
        m && (p.appDisplayName = m);
        f = sp(f);
        p.sessionId = f;
        var w = Hn(a.Ha, a.ka, a.ta, b, c, null, d, a.Jc, p, a.Oa, e, a.ha);
        return a.Sc().then(function() {
            var D = a.Hj;
            return a.Ll.U.set(gp, g.V(), D)
        }).then(function() {
            var D = O("cordova.plugins.browsertab.isAvailable", n);
            if ("function" !== typeof D)
                throw new Q("invalid-cordova-configuration");
            var G = null;
            D(function(oa) {
                if (oa) {
                    G = O("cordova.plugins.browsertab.openUrl", n);
                    if ("function" !== typeof G)
                        throw new Q("invalid-cordova-configuration");
                    G(w)
                } else {
                    G = O("cordova.InAppBrowser.open", n);
                    if ("function" !== typeof G)
                        throw new Q("invalid-cordova-configuration");
                    oa = G;
                    var wb = N();
                    wb = !(!wb.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !wb.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
                    a.le = oa(w, wb ? "_blank" : "_system", "location=yes")
                }
            })
        })
    };
    pp.prototype.$d = function(a) {
        for (var b = 0; b < this.Zb.length; b++)
            try {
                this.Zb[b](a)
            } catch (c) {}
    }
    ;
    var tp = function(a) {
        a.Og || (a.Og = a.Sc().then(function() {
            return new E(function(b) {
                var c = function(d) {
                    b(d);
                    a.Ld(c);
                    return !1
                };
                a.Hc(c);
                wp(a)
            }
            )
        }));
        return a.Og
    }
      , vp = function(a) {
        var b = null;
        return hp(a.wi).then(function(c) {
            b = c;
            return ip(a.wi)
        }).then(function() {
            return b
        })
    }
      , wp = function(a) {
        var b = new gl("unknown",null,null,null,new Q("no-auth-event"))
          , c = !1
          , d = tj(a.Vk).then(function() {
            return vp(a).then(function() {
                c || a.$d(b)
            })
        })
          , e = function(g) {
            c = !0;
            d && d.cancel();
            vp(a).then(function(k) {
                var m = b;
                if (k && g && g.url) {
                    var p = null;
                    m = pl(g.url);
                    -1 != m.indexOf("/__/auth/callback") && (p = M(m),
                    p = Ik(Vj(p, "firebaseError") || null),
                    p = (p = "object" === typeof p ? fl(p) : null) ? new gl(k.Fb,k.Pa,null,null,p,null,k.ua) : new gl(k.Fb,k.Pa,m,k.ie(),null,null,k.ua));
                    m = p || b
                }
                a.$d(m)
            })
        }
          , f = n.handleOpenURL;
        n.handleOpenURL = function(g) {
            0 == g.toLowerCase().indexOf(O("BuildInfo.packageName", n).toLowerCase() + "://") && e({
                url: g
            });
            if ("function" === typeof f)
                try {
                    f(g)
                } catch (k) {
                    console.error(k)
                }
        }
        ;
        op || (op = new np);
        op.subscribe(e)
    };
    pp.prototype.Hc = function(a) {
        this.Zb.push(a);
        tp(this).u(function(b) {
            "auth/invalid-cordova-configuration" === b.code && (b = new gl("unknown",null,null,null,new Q("no-auth-event")),
            a(b))
        })
    }
    ;
    pp.prototype.Ld = function(a) {
        Wa(this.Zb, function(b) {
            return b == a
        })
    }
    ;
    var xp = function(a) {
        this.$ = a;
        this.U = ap()
    }
      , zp = function(a) {
        return a.U.set(yp, "pending", a.$)
    }
      , Ap = function(a) {
        return a.U.remove(yp, a.$)
    }
      , Bp = function(a) {
        return a.U.get(yp, a.$).then(function(b) {
            return "pending" == b
        })
    }
      , yp = {
        name: "pendingRedirect",
        Ca: "session"
    };
    var Gp = function(a, b, c, d) {
        this.If = {};
        this.Tg = 0;
        this.Ha = a;
        this.ka = b;
        this.ta = c;
        this.ha = d;
        this.Ie = [];
        this.Ad = !1;
        this.mg = r(this.Ig, this);
        this.Ac = new Cp(this);
        this.ih = new Dp(this);
        this.we = new xp(Ep(this.ka, this.ta));
        this.Gc = {};
        this.Gc.unknown = this.Ac;
        this.Gc.signInViaRedirect = this.Ac;
        this.Gc.linkViaRedirect = this.Ac;
        this.Gc.reauthViaRedirect = this.Ac;
        this.Gc.signInViaPopup = this.ih;
        this.Gc.linkViaPopup = this.ih;
        this.Gc.reauthViaPopup = this.ih;
        this.ub = Fp(this.Ha, this.ka, this.ta, ck, this.ha)
    }
      , Fp = function(a, b, c, d, e) {
        var f = firebase.SDK_VERSION || null;
        return rk() ? new pp(a,b,c,f,d,e) : new Dn(a,b,c,f,d,e)
    };
    Gp.prototype.reset = function() {
        this.Ad = !1;
        this.ub.Ld(this.mg);
        this.ub = Fp(this.Ha, this.ka, this.ta, null, this.ha);
        this.If = {}
    }
    ;
    Gp.prototype.nd = function() {
        this.Ac.nd()
    }
    ;
    Gp.prototype.ne = function() {
        var a = this;
        this.Ad || (this.Ad = !0,
        this.ub.Hc(this.mg));
        var b = this.ub;
        return this.ub.Sc().u(function(c) {
            a.ub == b && a.reset();
            throw c;
        })
    }
    ;
    var Jp = function(a) {
        a.ub.Ej() && a.ne().u(function(b) {
            var c = new gl("unknown",null,null,null,new Q("operation-not-supported-in-this-environment"));
            Hp(b) && a.Ig(c)
        });
        a.ub.Di() || Ip(a.Ac)
    };
    h = Gp.prototype;
    h.subscribe = function(a) {
        Ta(this.Ie, a) || this.Ie.push(a);
        if (!this.Ad) {
            var b = this;
            Bp(this.we).then(function(c) {
                c ? Ap(b.we).then(function() {
                    b.ne().u(function(d) {
                        var e = new gl("unknown",null,null,null,new Q("operation-not-supported-in-this-environment"));
                        Hp(d) && b.Ig(e)
                    })
                }) : Jp(b)
            }).u(function() {
                Jp(b)
            })
        }
    }
    ;
    h.unsubscribe = function(a) {
        Wa(this.Ie, function(b) {
            return b == a
        })
    }
    ;
    h.Ig = function(a) {
        if (!a)
            throw new Q("invalid-auth-event");
        6E5 <= Date.now() - this.Tg && (this.If = {},
        this.Tg = 0);
        if (a && a.getUid() && this.If.hasOwnProperty(a.getUid()))
            return !1;
        for (var b = !1, c = 0; c < this.Ie.length; c++) {
            var d = this.Ie[c];
            if (d.Xh(a.Fb, a.Pa)) {
                if (b = this.Gc[a.Fb])
                    b.nj(a, d),
                    a && (a.ie() || a.Pa) && (this.If[a.getUid()] = !0,
                    this.Tg = Date.now());
                b = !0;
                break
            }
        }
        Ip(this.Ac);
        return b
    }
    ;
    h.getRedirectResult = function() {
        return this.Ac.getRedirectResult()
    }
    ;
    h.xe = function(a, b, c, d, e, f) {
        var g = this;
        return this.ub.xe(a, b, c, function() {
            g.Ad || (g.Ad = !0,
            g.ub.Hc(g.mg))
        }, function() {
            g.reset()
        }, d, e, f)
    }
    ;
    var Hp = function(a) {
        return a && "auth/cordova-not-ready" == a.code ? !0 : !1
    };
    Gp.prototype.ye = function(a, b, c, d) {
        var e = this, f;
        return zp(this.we).then(function() {
            return e.ub.ye(a, b, c, d).u(function(g) {
                if (Hp(g))
                    throw new Q("operation-not-supported-in-this-environment");
                f = g;
                return Ap(e.we).then(function() {
                    throw f;
                })
            }).then(function() {
                return e.ub.Jj() ? new E(function() {}
                ) : Ap(e.we).then(function() {
                    return e.getRedirectResult()
                }).then(function() {}).u(function() {})
            })
        })
    }
    ;
    Gp.prototype.Ge = function(a, b, c, d) {
        return this.ub.Ge(c, function(e) {
            a.Yc(b, null, e, d)
        }, Kp.get())
    }
    ;
    var Ep = function(a, b, c) {
        a = a + ":" + b;
        c && (a = a + ":" + c.url);
        return a
    }
      , Mp = function(a, b, c, d) {
        var e = Ep(b, c, d);
        Lp[e] || (Lp[e] = new Gp(a,b,c,d));
        return Lp[e]
    }
      , Kp = new Lk(2E3,1E4)
      , Np = new Lk(3E4,6E4)
      , Lp = {}
      , Cp = function(a) {
        this.U = a;
        this.Jd = null;
        this.Be = [];
        this.Ae = [];
        this.Id = null;
        this.Kj = this.Ce = !1
    };
    Cp.prototype.reset = function() {
        this.Jd = null;
        this.Id && (this.Id.cancel(),
        this.Id = null)
    }
    ;
    Cp.prototype.nj = function(a, b) {
        if (a) {
            this.reset();
            this.Ce = !0;
            var c = a.Fb
              , d = a.Pa
              , e = a.getError() && "auth/web-storage-unsupported" == a.getError().code
              , f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;
            this.Kj = !(!e && !f);
            "unknown" != c || e || f ? a.Cb ? this.oh(a, b) : b.fe(c, d) ? this.qh(a, b) : H(new Q("invalid-auth-event")) : (Op(this, !1, null, null),
            F())
        } else
            H(new Q("invalid-auth-event"))
    }
    ;
    var Ip = function(a) {
        a.Ce || (a.Ce = !0,
        Op(a, !1, null, null))
    };
    Cp.prototype.nd = function() {
        this.Ce && !this.Kj && Op(this, !1, null, null)
    }
    ;
    Cp.prototype.oh = function(a) {
        Op(this, !0, null, a.getError());
        F()
    }
    ;
    Cp.prototype.qh = function(a, b) {
        var c = this;
        b = b.fe(a.Fb, a.Pa);
        var d = a.Rd
          , e = a.ie()
          , f = a.jh
          , g = a.ua
          , k = !!a.Fb.match(/Redirect$/);
        b(d, e, g, f).then(function(m) {
            Op(c, k, m, null)
        }).u(function(m) {
            Op(c, k, null, m)
        })
    }
    ;
    var Pp = function(a, b) {
        a.Jd = function() {
            return H(b)
        }
        ;
        if (a.Ae.length)
            for (var c = 0; c < a.Ae.length; c++)
                a.Ae[c](b)
    }
      , Qp = function(a, b) {
        a.Jd = function() {
            return F(b)
        }
        ;
        if (a.Be.length)
            for (var c = 0; c < a.Be.length; c++)
                a.Be[c](b)
    }
      , Op = function(a, b, c, d) {
        b ? d ? Pp(a, d) : Qp(a, c) : Qp(a, {
            user: null
        });
        a.Be = [];
        a.Ae = []
    };
    Cp.prototype.getRedirectResult = function() {
        var a = this;
        return new E(function(b, c) {
            a.Jd ? a.Jd().then(b, c) : (a.Be.push(b),
            a.Ae.push(c),
            Rp(a))
        }
        )
    }
    ;
    var Rp = function(a) {
        var b = new Q("timeout");
        a.Id && a.Id.cancel();
        a.Id = tj(Np.get()).then(function() {
            a.Jd || (a.Ce = !0,
            Op(a, !0, null, b))
        })
    }
      , Dp = function(a) {
        this.U = a
    };
    Dp.prototype.nj = function(a, b) {
        if (a) {
            var c = a.Fb
              , d = a.Pa;
            a.Cb ? this.oh(a, b) : b.fe(c, d) ? this.qh(a, b) : H(new Q("invalid-auth-event"))
        } else
            H(new Q("invalid-auth-event"))
    }
    ;
    Dp.prototype.oh = function(a, b) {
        b.Yc(a.Fb, null, a.getError(), a.Pa);
        F()
    }
    ;
    Dp.prototype.qh = function(a, b) {
        var c = a.Pa
          , d = a.Fb
          , e = b.fe(d, c)
          , f = a.Rd
          , g = a.ie();
        e(f, g, a.ua, a.jh).then(function(k) {
            b.Yc(d, k, null, c)
        }).u(function(k) {
            b.Yc(d, null, k, c)
        })
    }
    ;
    var Sp = function(a, b, c) {
        var d = b && b.mfaPendingCredential;
        if (!d)
            throw new Q("argument-error","Internal assert: Invalid MultiFactorResolver");
        this.Se = a;
        this.rk = ob(b);
        this.nl = c;
        this.yj = new vl(null,d);
        this.Ei = [];
        var e = this;
        x(b.mfaInfo || [], function(f) {
            (f = kl(f)) && e.Ei.push(f)
        });
        P(this, "auth", this.Se);
        P(this, "session", this.yj);
        P(this, "hints", this.Ei)
    };
    Sp.prototype.resolveSignIn = function(a) {
        var b = this;
        return a.process(this.Se.o, this.yj).then(function(c) {
            var d = ob(b.rk);
            delete d.mfaInfo;
            delete d.mfaPendingCredential;
            qb(d, c);
            return b.nl(d)
        })
    }
    ;
    var Tp = function(a, b, c, d) {
        Q.call(this, "multi-factor-auth-required", d, b);
        this.Cl = new Sp(a,b,c);
        P(this, "resolver", this.Cl)
    };
    l(Tp, Q);
    var Up = function(a, b, c) {
        if (a && q(a.serverResponse) && "auth/multi-factor-auth-required" === a.code)
            try {
                return new Tp(b,a.serverResponse,c,a.message)
            } catch (d) {}
        return null
    };
    var Vp = function() {};
    Vp.prototype.process = function(a, b, c) {
        return "enroll" == b.type ? Wp(this, a, b, c) : Xp(this, a, b)
    }
    ;
    var Wp = function(a, b, c, d) {
        return c.he().then(function(e) {
            e = {
                idToken: e
            };
            "undefined" !== typeof d && (e.displayName = d);
            qb(e, {
                phoneVerificationInfo: $l(a.Xg)
            });
            return R(b, nn, e)
        })
    }
      , Xp = function(a, b, c) {
        return c.he().then(function(d) {
            d = {
                mfaPendingCredential: d
            };
            qb(d, {
                phoneVerificationInfo: $l(a.Xg)
            });
            return R(b, on, d)
        })
    }
      , Yp = function(a) {
        P(this, "factorId", a.providerId);
        this.Xg = a
    };
    u(Yp, Vp);
    var Zp = function(a) {
        Yp.call(this, a);
        if (this.Xg.providerId != dm.PROVIDER_ID)
            throw new Q("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
    };
    u(Zp, Yp);
    var $p = function(a, b) {
        Hh.call(this, a);
        for (var c in b)
            this[c] = b[c]
    };
    l($p, Hh);
    var bq = function(a, b) {
        this.sc = a;
        this.Ye = [];
        this.Ul = r(this.Ok, this);
        Vh(this.sc, "userReloaded", this.Ul);
        var c = [];
        b && b.multiFactor && b.multiFactor.enrolledFactors && x(b.multiFactor.enrolledFactors, function(d) {
            var e = null
              , f = {};
            if (d) {
                d.uid && (f.mfaEnrollmentId = d.uid);
                d.displayName && (f.displayName = d.displayName);
                d.enrollmentTime && (f.enrolledAt = (new Date(d.enrollmentTime)).toISOString());
                d.phoneNumber && (f.phoneInfo = d.phoneNumber);
                try {
                    e = new jl(f)
                } catch (g) {}
                d = e
            } else
                d = null;
            d && c.push(d)
        });
        aq(this, c)
    }
      , cq = function(a) {
        var b = [];
        x(a.mfaInfo || [], function(c) {
            (c = kl(c)) && b.push(c)
        });
        return b
    };
    bq.prototype.Ok = function(a) {
        aq(this, cq(a.Vl))
    }
    ;
    var aq = function(a, b) {
        a.Ye = b;
        P(a, "enrolledFactors", b)
    };
    h = bq.prototype;
    h.copy = function(a) {
        aq(this, a.Ye)
    }
    ;
    h.getSession = function() {
        return this.sc.getIdToken().then(function(a) {
            return new vl(a,null)
        })
    }
    ;
    h.enroll = function(a, b) {
        var c = this
          , d = this.sc.o;
        return this.getSession().then(function(e) {
            return a.process(d, e, b)
        }).then(function(e) {
            dq(c.sc, e);
            return c.sc.reload()
        })
    }
    ;
    h.unenroll = function(a) {
        var b = this
          , c = "string" === typeof a ? a : a.uid
          , d = this.sc.o;
        return this.sc.getIdToken().then(function(e) {
            return R(d, sn, {
                idToken: e,
                mfaEnrollmentId: c
            })
        }).then(function(e) {
            var f = Oa(b.Ye, function(g) {
                return g.uid != c
            });
            aq(b, f);
            dq(b.sc, e);
            return b.sc.reload().u(function(g) {
                if ("auth/user-token-expired" != g.code)
                    throw g;
            })
        })
    }
    ;
    h.V = function() {
        return {
            multiFactor: {
                enrolledFactors: Pa(this.Ye, function(a) {
                    return a.V()
                })
            }
        }
    }
    ;
    var eq = function(a) {
        this.o = a;
        this.$a = this.Ya = null;
        this.sd = Date.now()
    };
    eq.prototype.V = function() {
        return {
            apiKey: this.o.ka,
            refreshToken: this.Ya,
            accessToken: this.$a && this.$a.toString(),
            expirationTime: this.sd
        }
    }
    ;
    var fq = function(a, b) {
        "undefined" === typeof b && (a.$a ? (b = a.$a,
        b = b.Eg - b.Qk) : b = 0);
        a.sd = Date.now() + 1E3 * b
    }
      , gq = function(a, b) {
        a.$a = tl(b.idToken || "");
        a.Ya = b.refreshToken;
        b = b.expiresIn;
        fq(a, "undefined" !== typeof b ? Number(b) : void 0)
    };
    eq.prototype.copy = function(a) {
        this.$a = a.$a;
        this.Ya = a.Ya;
        this.sd = a.sd
    }
    ;
    var hq = function(a, b) {
        return Cm(a.o, b).then(function(c) {
            a.$a = tl(c.access_token);
            a.Ya = c.refresh_token;
            fq(a, c.expires_in);
            return {
                accessToken: a.$a.toString(),
                refreshToken: a.Ya
            }
        }).u(function(c) {
            "auth/user-token-expired" == c.code && (a.Ya = null);
            throw c;
        })
    };
    eq.prototype.getToken = function(a) {
        a = !!a;
        return this.$a && !this.Ya ? H(new Q("user-token-expired")) : a || !this.$a || Date.now() > this.sd - 3E4 ? this.Ya ? hq(this, {
            grant_type: "refresh_token",
            refresh_token: this.Ya
        }) : F(null) : F({
            accessToken: this.$a.toString(),
            refreshToken: this.Ya
        })
    }
    ;
    var iq = function(a, b) {
        this.ei = a || null;
        this.Qi = b || null;
        Xk(this, {
            lastSignInTime: Pk(b || null),
            creationTime: Pk(a || null)
        })
    };
    iq.prototype.clone = function() {
        return new iq(this.ei,this.Qi)
    }
    ;
    iq.prototype.V = function() {
        return {
            lastLoginAt: this.Qi,
            createdAt: this.ei
        }
    }
    ;
    var jq = function(a, b, c, d, e, f) {
        Xk(this, {
            uid: a,
            displayName: d || null,
            photoURL: e || null,
            email: c || null,
            phoneNumber: f || null,
            providerId: b
        })
    }
      , S = function(a, b, c) {
        fi.call(this);
        this.Qa = [];
        this.ka = a.apiKey;
        this.ta = a.appName;
        this.Ha = a.authDomain || null;
        var d = firebase.SDK_VERSION ? Ak("JsCore", firebase.SDK_VERSION) : null;
        this.o = new rm(this.ka,bk(ck),d);
        a.emulatorConfig && vm(this.o, a.emulatorConfig);
        this.Qb = new eq(this.o);
        kq(this, b.idToken);
        gq(this.Qb, b);
        P(this, "refreshToken", this.Qb.Ya);
        lq(this, c || {});
        this.Hf = !1;
        this.Ha && Ek() && (this.ma = Mp(this.Ha, this.ka, this.ta));
        this.Uf = [];
        this.Rb = null;
        this.Gd = mq(this);
        this.Td = r(this.Kg, this);
        var e = this;
        this.Kb = null;
        this.dj = function(f) {
            e.Nd(f.languageCode)
        }
        ;
        this.Rg = null;
        this.$i = function(f) {
            vm(e.o, f.emulatorConfig)
        }
        ;
        this.zg = null;
        this.Ja = [];
        this.aj = function(f) {
            nq(e, f.xk)
        }
        ;
        this.Fg = null;
        this.yf = new bq(this,c);
        P(this, "multiFactor", this.yf)
    };
    l(S, fi);
    S.prototype.Nd = function(a) {
        this.Kb = a;
        tm(this.o, a)
    }
    ;
    var oq = function(a, b) {
        a.Rg && ci(a.Rg, "languageCodeChanged", a.dj);
        (a.Rg = b) && Vh(b, "languageCodeChanged", a.dj)
    }
      , pq = function(a, b) {
        a.zg && ci(a.zg, "emulatorConfigChanged", a.$i);
        (a.zg = b) && Vh(b, "emulatorConfigChanged", a.$i)
    }
      , nq = function(a, b) {
        a.Ja = b;
        wm(a.o, firebase.SDK_VERSION ? Ak("JsCore", firebase.SDK_VERSION, a.Ja) : null)
    }
      , qq = function(a, b) {
        a.Fg && ci(a.Fg, "frameworkChanged", a.aj);
        (a.Fg = b) && Vh(b, "frameworkChanged", a.aj)
    };
    S.prototype.Kg = function() {
        this.Gd.Dd && (this.Gd.stop(),
        this.Gd.start())
    }
    ;
    var rq = function(a) {
        try {
            return firebase.app(a.ta).auth()
        } catch (b) {
            throw new Q("internal-error","No firebase.auth.Auth instance is available for the Firebase App '" + a.ta + "'!");
        }
    }
      , mq = function(a) {
        return new No(function() {
            return a.getIdToken(!0)
        }
        ,function(b) {
            return b && "auth/network-request-failed" == b.code ? !0 : !1
        }
        ,function() {
            var b = a.Qb.sd - Date.now() - 3E5;
            return 0 < b ? b : 0
        }
        )
    }
      , sq = function(a) {
        a.rd || a.Gd.Dd || (a.Gd.start(),
        ci(a, "tokenChanged", a.Td),
        Vh(a, "tokenChanged", a.Td))
    }
      , tq = function(a) {
        ci(a, "tokenChanged", a.Td);
        a.Gd.stop()
    }
      , kq = function(a, b) {
        a.Pi = b;
        P(a, "_lat", b)
    }
      , uq = function(a, b) {
        Wa(a.Uf, function(c) {
            return c == b
        })
    }
      , vq = function(a) {
        for (var b = [], c = 0; c < a.Uf.length; c++)
            b.push(a.Uf[c](a));
        return If(b).then(function() {
            return a
        })
    }
      , wq = function(a) {
        a.ma && !a.Hf && (a.Hf = !0,
        a.ma.subscribe(a))
    }
      , lq = function(a, b) {
        Xk(a, {
            uid: b.uid,
            displayName: b.displayName || null,
            photoURL: b.photoURL || null,
            email: b.email || null,
            emailVerified: b.emailVerified || !1,
            phoneNumber: b.phoneNumber || null,
            isAnonymous: b.isAnonymous || !1,
            tenantId: b.tenantId || null,
            metadata: new iq(b.createdAt,b.lastLoginAt),
            providerData: []
        });
        a.o.ua = a.tenantId
    }
      , xq = function() {}
      , yq = function(a) {
        return F().then(function() {
            if (a.rd)
                throw new Q("app-deleted");
        })
    }
      , zq = function(a) {
        return Pa(a.providerData, function(b) {
            return b.providerId
        })
    }
      , Bq = function(a, b) {
        b && (Aq(a, b.providerId),
        a.providerData.push(b))
    }
      , Aq = function(a, b) {
        Wa(a.providerData, function(c) {
            return c.providerId == b
        })
    }
      , Cq = function(a, b, c) {
        ("uid" != b || c) && a.hasOwnProperty(b) && P(a, b, c)
    };
    S.prototype.copy = function(a) {
        var b = this;
        b != a && (Xk(this, {
            uid: a.uid,
            displayName: a.displayName,
            photoURL: a.photoURL,
            email: a.email,
            emailVerified: a.emailVerified,
            phoneNumber: a.phoneNumber,
            isAnonymous: a.isAnonymous,
            tenantId: a.tenantId,
            providerData: []
        }),
        a.metadata ? P(this, "metadata", a.metadata.clone()) : P(this, "metadata", new iq),
        x(a.providerData, function(c) {
            Bq(b, c)
        }),
        this.Qb.copy(a.Qb),
        P(this, "refreshToken", this.Qb.Ya),
        this.yf.copy(a.yf))
    }
    ;
    S.prototype.reload = function() {
        var a = this;
        return this.T(yq(this).then(function() {
            return Dq(a).then(function() {
                return vq(a)
            }).then(xq)
        }))
    }
    ;
    var Dq = function(a) {
        return a.getIdToken().then(function(b) {
            var c = a.isAnonymous;
            return R(a.o, pn, {
                idToken: b
            }).then(r(a.ul, a)).then(function() {
                c || Cq(a, "isAnonymous", !1);
                return b
            })
        })
    };
    S.prototype.getIdTokenResult = function(a) {
        return this.getIdToken(a).then(function(b) {
            return new ul(b)
        })
    }
    ;
    S.prototype.getIdToken = function(a) {
        var b = this;
        return this.T(yq(this).then(function() {
            return b.Qb.getToken(a)
        }).then(function(c) {
            if (!c)
                throw new Q("internal-error");
            c.accessToken != b.Pi && (kq(b, c.accessToken),
            b.xc());
            Cq(b, "refreshToken", c.refreshToken);
            return c.accessToken
        }))
    }
    ;
    var dq = function(a, b) {
        b.idToken && a.Pi != b.idToken && (gq(a.Qb, b),
        a.xc(),
        kq(a, b.idToken),
        Cq(a, "refreshToken", a.Qb.Ya))
    };
    S.prototype.xc = function() {
        this.dispatchEvent(new $p("tokenChanged"))
    }
    ;
    S.prototype.ul = function(a) {
        a = a.users;
        if (!a || !a.length)
            throw new Q("internal-error");
        a = a[0];
        lq(this, {
            uid: a.localId,
            displayName: a.displayName,
            photoURL: a.photoUrl,
            email: a.email,
            emailVerified: !!a.emailVerified,
            phoneNumber: a.phoneNumber,
            lastLoginAt: a.lastLoginAt,
            createdAt: a.createdAt,
            tenantId: a.tenantId
        });
        for (var b = Eq(a), c = 0; c < b.length; c++)
            Bq(this, b[c]);
        Cq(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
        this.dispatchEvent(new $p("userReloaded",{
            Vl: a
        }))
    }
    ;
    var Eq = function(a) {
        return (a = a.providerUserInfo) && a.length ? Pa(a, function(b) {
            return new jq(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)
        }) : []
    };
    S.prototype.reauthenticateAndRetrieveDataWithCredential = function(a) {
        Uk("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
        return this.reauthenticateWithCredential(a)
    }
    ;
    S.prototype.reauthenticateWithCredential = function(a) {
        var b = this
          , c = null;
        return this.T(a.te(this.o, this.uid).then(function(d) {
            dq(b, d);
            c = Fq(b, d, "reauthenticate");
            b.Rb = null;
            return b.reload()
        }).then(function() {
            return c
        }), !0)
    }
    ;
    var Gq = function(a, b) {
        return Dq(a).then(function() {
            if (Ta(zq(a), b))
                return vq(a).then(function() {
                    throw new Q("provider-already-linked");
                })
        })
    };
    S.prototype.linkAndRetrieveDataWithCredential = function(a) {
        Uk("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
        return this.linkWithCredential(a)
    }
    ;
    S.prototype.linkWithCredential = function(a) {
        var b = this
          , c = null;
        return this.T(Gq(this, a.providerId).then(function() {
            return b.getIdToken()
        }).then(function(d) {
            return a.Bd(b.o, d)
        }).then(function(d) {
            c = Fq(b, d, "link");
            return Hq(b, d)
        }).then(function() {
            return c
        }))
    }
    ;
    S.prototype.linkWithPhoneNumber = function(a, b) {
        var c = this;
        return this.T(Gq(this, "phone").then(function() {
            return Mo(rq(c), a, b, r(c.linkWithCredential, c))
        }))
    }
    ;
    S.prototype.reauthenticateWithPhoneNumber = function(a, b) {
        var c = this;
        return this.T(F().then(function() {
            return Mo(rq(c), a, b, r(c.reauthenticateWithCredential, c))
        }), !0)
    }
    ;
    var Fq = function(a, b, c) {
        var d = im(b);
        b = Wo(b);
        return Yk({
            user: a,
            credential: d,
            additionalUserInfo: b,
            operationType: c
        })
    }
      , Hq = function(a, b) {
        dq(a, b);
        return a.reload().then(function() {
            return a
        })
    };
    h = S.prototype;
    h.updateEmail = function(a) {
        var b = this;
        return this.T(this.getIdToken().then(function(c) {
            return b.o.updateEmail(c, a)
        }).then(function(c) {
            dq(b, c);
            return b.reload()
        }))
    }
    ;
    h.updatePhoneNumber = function(a) {
        var b = this;
        return this.T(this.getIdToken().then(function(c) {
            return a.Bd(b.o, c)
        }).then(function(c) {
            dq(b, c);
            return b.reload()
        }))
    }
    ;
    h.updatePassword = function(a) {
        var b = this;
        return this.T(this.getIdToken().then(function(c) {
            return b.o.updatePassword(c, a)
        }).then(function(c) {
            dq(b, c);
            return b.reload()
        }))
    }
    ;
    h.updateProfile = function(a) {
        if (void 0 === a.displayName && void 0 === a.photoURL)
            return yq(this);
        var b = this;
        return this.T(this.getIdToken().then(function(c) {
            return b.o.updateProfile(c, {
                displayName: a.displayName,
                photoUrl: a.photoURL
            })
        }).then(function(c) {
            dq(b, c);
            Cq(b, "displayName", c.displayName || null);
            Cq(b, "photoURL", c.photoUrl || null);
            x(b.providerData, function(d) {
                "password" === d.providerId && (P(d, "displayName", b.displayName),
                P(d, "photoURL", b.photoURL))
            });
            return vq(b)
        }).then(xq))
    }
    ;
    h.unlink = function(a) {
        var b = this;
        return this.T(Dq(this).then(function(c) {
            return Ta(zq(b), a) ? Zm(b.o, c, [a]).then(function(d) {
                var e = {};
                x(d.providerUserInfo || [], function(f) {
                    e[f.providerId] = !0
                });
                x(zq(b), function(f) {
                    e[f] || Aq(b, f)
                });
                e[dm.PROVIDER_ID] || P(b, "phoneNumber", null);
                return vq(b)
            }) : vq(b).then(function() {
                throw new Q("no-such-provider");
            })
        }))
    }
    ;
    h.delete = function() {
        var a = this;
        return this.T(this.getIdToken().then(function(b) {
            return R(a.o, mn, {
                idToken: b
            })
        }).then(function() {
            a.dispatchEvent(new $p("userDeleted"))
        })).then(function() {
            a.destroy()
        })
    }
    ;
    h.Xh = function(a, b) {
        return "linkViaPopup" == a && (this.Nb || null) == b && this.Mb || "reauthViaPopup" == a && (this.Nb || null) == b && this.Mb || "linkViaRedirect" == a && (this.Bc || null) == b || "reauthViaRedirect" == a && (this.Bc || null) == b ? !0 : !1
    }
    ;
    h.Yc = function(a, b, c, d) {
        "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.Nb || null) || (c && this.Wc ? this.Wc(c) : b && !c && this.Mb && this.Mb(b),
        this.Ra && (this.Ra.cancel(),
        this.Ra = null),
        delete this.Mb,
        delete this.Wc)
    }
    ;
    h.fe = function(a, b) {
        return "linkViaPopup" == a && b == (this.Nb || null) ? r(this.ni, this) : "reauthViaPopup" == a && b == (this.Nb || null) ? r(this.oi, this) : "linkViaRedirect" == a && (this.Bc || null) == b ? r(this.ni, this) : "reauthViaRedirect" == a && (this.Bc || null) == b ? r(this.oi, this) : null
    }
    ;
    h.af = function() {
        return Bk(this.uid + ":::")
    }
    ;
    h.linkWithPopup = function(a) {
        var b = this;
        return Iq(this, "linkViaPopup", a, function() {
            return Gq(b, a.providerId).then(function() {
                return vq(b)
            })
        }, !1)
    }
    ;
    h.reauthenticateWithPopup = function(a) {
        return Iq(this, "reauthViaPopup", a, function() {
            return F()
        }, !0)
    }
    ;
    var Iq = function(a, b, c, d, e) {
        if (!Ek())
            return H(new Q("operation-not-supported-in-this-environment"));
        if (a.Rb && !e)
            return H(a.Rb);
        var f = dl(c.providerId)
          , g = a.af()
          , k = null;
        (!Fk() || uk()) && a.Ha && c.isOAuthProvider && (k = Hn(a.Ha, a.ka, a.ta, b, c, null, g, firebase.SDK_VERSION || null, null, null, a.tenantId));
        var m = lk(k, f && f.Fd, f && f.Ed);
        d = d().then(function() {
            Jq(a);
            if (!e)
                return a.getIdToken().then(function() {})
        }).then(function() {
            return a.ma.xe(m, b, c, g, !!k, a.tenantId)
        }).then(function() {
            return new E(function(p, w) {
                a.Yc(b, null, new Q("cancelled-popup-request"), a.Nb || null);
                a.Mb = p;
                a.Wc = w;
                a.Nb = g;
                a.Ra = a.ma.Ge(a, b, m, g)
            }
            )
        }).then(function(p) {
            m && kk(m);
            return p ? Yk(p) : null
        }).u(function(p) {
            m && kk(m);
            throw p;
        });
        return a.T(d, e)
    };
    S.prototype.linkWithRedirect = function(a) {
        var b = this;
        return Kq(this, "linkViaRedirect", a, function() {
            return Gq(b, a.providerId)
        }, !1)
    }
    ;
    S.prototype.reauthenticateWithRedirect = function(a) {
        return Kq(this, "reauthViaRedirect", a, function() {
            return F()
        }, !0)
    }
    ;
    var Kq = function(a, b, c, d, e) {
        if (!Ek())
            return H(new Q("operation-not-supported-in-this-environment"));
        if (a.Rb && !e)
            return H(a.Rb);
        var f = null
          , g = a.af();
        d = d().then(function() {
            Jq(a);
            if (!e)
                return a.getIdToken().then(function() {})
        }).then(function() {
            a.Bc = g;
            return vq(a)
        }).then(function(k) {
            a.Cc && (k = a.Cc,
            k = k.U.set(Lq, a.V(), k.$));
            return k
        }).then(function() {
            return a.ma.ye(b, c, g, a.tenantId)
        }).u(function(k) {
            f = k;
            if (a.Cc)
                return Mq(a.Cc);
            throw f;
        }).then(function() {
            if (f)
                throw f;
        });
        return a.T(d, e)
    }
      , Jq = function(a) {
        if (!a.ma || !a.Hf) {
            if (a.ma && !a.Hf)
                throw new Q("internal-error");
            throw new Q("auth-domain-config-required");
        }
    };
    h = S.prototype;
    h.ni = function(a, b, c, d) {
        var e = this;
        this.Ra && (this.Ra.cancel(),
        this.Ra = null);
        var f = null;
        c = this.getIdToken().then(function(g) {
            return Al(e.o, {
                requestUri: a,
                postBody: d,
                sessionId: b,
                idToken: g
            })
        }).then(function(g) {
            f = Fq(e, g, "link");
            return Hq(e, g)
        }).then(function() {
            return f
        });
        return this.T(c)
    }
    ;
    h.oi = function(a, b, c, d) {
        var e = this;
        this.Ra && (this.Ra.cancel(),
        this.Ra = null);
        var f = null
          , g = F().then(function() {
            return xl(Bl(e.o, {
                requestUri: a,
                sessionId: b,
                postBody: d,
                tenantId: c
            }), e.uid)
        }).then(function(k) {
            f = Fq(e, k, "reauthenticate");
            dq(e, k);
            e.Rb = null;
            return e.reload()
        }).then(function() {
            return f
        });
        return this.T(g, !0)
    }
    ;
    h.sendEmailVerification = function(a) {
        var b = this
          , c = null;
        return this.T(this.getIdToken().then(function(d) {
            c = d;
            return "undefined" === typeof a || nb(a) ? {} : Ko(new Io(a))
        }).then(function(d) {
            return b.o.sendEmailVerification(c, d)
        }).then(function(d) {
            if (b.email != d)
                return b.reload()
        }).then(function() {}))
    }
    ;
    h.verifyBeforeUpdateEmail = function(a, b) {
        var c = this
          , d = null;
        return this.T(this.getIdToken().then(function(e) {
            d = e;
            return "undefined" === typeof b || nb(b) ? {} : Ko(new Io(b))
        }).then(function(e) {
            return c.o.verifyBeforeUpdateEmail(d, a, e)
        }).then(function(e) {
            if (c.email != e)
                return c.reload()
        }).then(function() {}))
    }
    ;
    h.destroy = function() {
        for (var a = 0; a < this.Qa.length; a++)
            this.Qa[a].cancel("app-deleted");
        oq(this, null);
        pq(this, null);
        qq(this, null);
        this.Qa = [];
        this.rd = !0;
        tq(this);
        P(this, "refreshToken", null);
        this.ma && this.ma.unsubscribe(this)
    }
    ;
    h.T = function(a, b) {
        var c = this
          , d = Nq(this, a, b);
        this.Qa.push(d);
        d.Fc(function() {
            Ua(c.Qa, d)
        });
        return d.u(function(e) {
            var f = null;
            e && "auth/multi-factor-auth-required" === e.code && (f = Up(e.V(), rq(c), r(c.Jg, c)));
            throw f || e;
        })
    }
    ;
    h.Jg = function(a) {
        var b = null
          , c = this;
        a = xl(F(a), c.uid).then(function(d) {
            b = Fq(c, d, "reauthenticate");
            dq(c, d);
            c.Rb = null;
            return c.reload()
        }).then(function() {
            return b
        });
        return this.T(a, !0)
    }
    ;
    var Nq = function(a, b, c) {
        return a.Rb && !c ? (b.cancel(),
        H(a.Rb)) : b.u(function(d) {
            !d || "auth/user-disabled" != d.code && "auth/user-token-expired" != d.code || (a.Rb || a.dispatchEvent(new $p("userInvalidated")),
            a.Rb = d);
            throw d;
        })
    };
    S.prototype.toJSON = function() {
        return this.V()
    }
    ;
    S.prototype.V = function() {
        var a = {
            uid: this.uid,
            displayName: this.displayName,
            photoURL: this.photoURL,
            email: this.email,
            emailVerified: this.emailVerified,
            phoneNumber: this.phoneNumber,
            isAnonymous: this.isAnonymous,
            tenantId: this.tenantId,
            providerData: [],
            apiKey: this.ka,
            appName: this.ta,
            authDomain: this.Ha,
            stsTokenManager: this.Qb.V(),
            redirectEventId: this.Bc || null
        };
        this.metadata && qb(a, this.metadata.V());
        x(this.providerData, function(b) {
            var c = a.providerData, d = c.push, e = {}, f;
            for (f in b)
                b.hasOwnProperty(f) && (e[f] = b[f]);
            d.call(c, e)
        });
        qb(a, this.yf.V());
        return a
    }
    ;
    var Oq = function(a) {
        if (!a.apiKey)
            return null;
        var b = {
            apiKey: a.apiKey,
            authDomain: a.authDomain,
            appName: a.appName,
            emulatorConfig: a.emulatorConfig
        }
          , c = {};
        if (a.stsTokenManager && a.stsTokenManager.accessToken) {
            c.idToken = a.stsTokenManager.accessToken;
            c.refreshToken = a.stsTokenManager.refreshToken || null;
            var d = a.stsTokenManager.expirationTime;
            d && (c.expiresIn = (d - Date.now()) / 1E3)
        } else
            return null;
        var e = new S(b,c,a);
        a.providerData && x(a.providerData, function(f) {
            f && Bq(e, Yk(f))
        });
        a.redirectEventId && (e.Bc = a.redirectEventId);
        return e
    }
      , Pq = function(a, b, c, d) {
        var e = new S(a,b);
        c && (e.Cc = c);
        d && nq(e, d);
        return e.reload().then(function() {
            return e
        })
    }
      , Qq = function(a, b, c, d) {
        b = b || {
            apiKey: a.ka,
            authDomain: a.Ha,
            appName: a.ta
        };
        var e = a.Qb
          , f = {};
        f.idToken = e.$a && e.$a.toString();
        f.refreshToken = e.Ya;
        b = new S(b,f);
        c && (b.Cc = c);
        d && nq(b, d);
        b.copy(a);
        return b
    };
    P(S.prototype, "providerId", "firebase");
    var Rq = function(a) {
        this.$ = a;
        this.U = ap()
    }
      , Mq = function(a) {
        return a.U.remove(Lq, a.$)
    }
      , Sq = function(a, b) {
        return a.U.get(Lq, a.$).then(function(c) {
            c && b && (c.authDomain = b);
            return Oq(c || {})
        })
    }
      , Lq = {
        name: "redirectUser",
        Ca: "session"
    };
    var Uq = function(a) {
        this.$ = a;
        this.U = ap();
        this.ab = null;
        this.$g = this.Pg();
        this.U.addListener(Tq("local"), this.$, r(this.Pl, this))
    };
    Uq.prototype.Pl = function() {
        var a = this
          , b = Tq("local");
        Vq(this, function() {
            return F().then(function() {
                return a.ab && "local" != a.ab.Ca ? a.U.get(b, a.$) : null
            }).then(function(c) {
                if (c)
                    return Wq(a, "local").then(function() {
                        a.ab = b
                    })
            })
        })
    }
    ;
    var Wq = function(a, b) {
        var c = [], d;
        for (d in Xo)
            Xo[d] !== b && c.push(a.U.remove(Tq(Xo[d]), a.$));
        c.push(a.U.remove(Xq, a.$));
        return Hf(c)
    };
    Uq.prototype.Pg = function() {
        var a = this
          , b = Tq("local")
          , c = Tq("session")
          , d = Tq("none");
        return cp(this.U, b, this.$).then(function() {
            return a.U.get(c, a.$)
        }).then(function(e) {
            return e ? c : a.U.get(d, a.$).then(function(f) {
                return f ? d : a.U.get(b, a.$).then(function(g) {
                    return g ? b : a.U.get(Xq, a.$).then(function(k) {
                        return k ? Tq(k) : b
                    })
                })
            })
        }).then(function(e) {
            a.ab = e;
            return Wq(a, e.Ca)
        }).u(function() {
            a.ab || (a.ab = b)
        })
    }
    ;
    var Tq = function(a) {
        return {
            name: "authUser",
            Ca: a
        }
    };
    Uq.prototype.setPersistence = function(a) {
        var b = null
          , c = this;
        Yo(a);
        return Vq(this, function() {
            return a != c.ab.Ca ? c.U.get(c.ab, c.$).then(function(d) {
                b = d;
                return Wq(c, a)
            }).then(function() {
                c.ab = Tq(a);
                if (b)
                    return c.U.set(c.ab, b, c.$)
            }) : F()
        })
    }
    ;
    var Yq = function(a) {
        return Vq(a, function() {
            return a.U.set(Xq, a.ab.Ca, a.$)
        })
    }
      , Zq = function(a, b) {
        return Vq(a, function() {
            return a.U.set(a.ab, b.V(), a.$)
        })
    }
      , $q = function(a) {
        return Vq(a, function() {
            return a.U.remove(a.ab, a.$)
        })
    }
      , ar = function(a, b, c) {
        return Vq(a, function() {
            return a.U.get(a.ab, a.$).then(function(d) {
                d && b && (d.authDomain = b);
                d && c && (d.emulatorConfig = c);
                return Oq(d || {})
            })
        })
    }
      , Vq = function(a, b) {
        a.$g = a.$g.then(b, b);
        return a.$g
    }
      , Xq = {
        name: "persistence",
        Ca: "session"
    };
    var T = function(a) {
        fi.call(this);
        this.Bb = !1;
        this.Cj = new Ho;
        P(this, "settings", this.Cj);
        P(this, "app", a);
        if (this.W().options && this.W().options.apiKey)
            a = firebase.SDK_VERSION ? Ak("JsCore", firebase.SDK_VERSION) : null,
            this.o = new rm(this.W().options && this.W().options.apiKey,bk(ck),a);
        else
            throw new Q("invalid-api-key");
        this.Qa = [];
        this.Ic = [];
        this.Sd = [];
        this.ll = firebase.INTERNAL.createSubscribe(r(this.Tk, this));
        this.Oe = void 0;
        this.ql = firebase.INTERNAL.createSubscribe(r(this.Uk, this));
        br(this, null);
        a = this.W().options.apiKey;
        var b = this.W().name;
        this.Sb = new Uq(a + ":" + b);
        a = this.W().options.apiKey;
        b = this.W().name;
        this.Xc = new Rq(a + ":" + b);
        this.Re = this.T(cr(this));
        this.Ob = this.T(dr(this));
        this.uf = !1;
        this.Hg = r(this.Ql, this);
        this.Oj = r(this.vc, this);
        this.Td = r(this.Kg, this);
        this.Mj = r(this.Mk, this);
        this.Nj = r(this.Nk, this);
        this.ma = null;
        er(this);
        this.INTERNAL = {};
        this.INTERNAL["delete"] = r(this.delete, this);
        this.INTERNAL.logFramework = r(this.al, this);
        this.Nc = 0;
        fr(this);
        this.Ja = [];
        this.ha = null
    };
    l(T, fi);
    T.prototype.setPersistence = function(a) {
        a = this.Sb.setPersistence(a);
        return this.T(a)
    }
    ;
    T.prototype.Nd = function(a) {
        this.Kb === a || this.Bb || (this.Kb = a,
        tm(this.o, this.Kb),
        this.dispatchEvent(new gr(this.Kb)))
    }
    ;
    T.prototype.useDeviceLanguage = function() {
        var a = n.navigator;
        this.Nd(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null)
    }
    ;
    T.prototype.useEmulator = function(a, b) {
        if (!this.ha) {
            if (this.ma)
                throw new Q("argument-error","useEmulator() must be called immediately following firebase.auth() initialization.");
            b = b ? !!b.disableWarnings : !1;
            hr(b);
            this.ha = {
                url: a,
                disableWarnings: b
            };
            this.Cj.kg = !0;
            vm(this.o, this.ha);
            this.dispatchEvent(new ir(this.ha))
        }
    }
    ;
    var hr = function(a) {
        "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
        n.document && !a && qk().then(function() {
            var b = n.document.createElement("p");
            b.innerText = "Running in emulator mode. Do not use with production credentials.";
            b.style.position = "fixed";
            b.style.width = "100%";
            b.style.backgroundColor = "#ffffff";
            b.style.border = ".1em solid #000000";
            b.style.color = "#ff0000";
            b.style.bottom = "0px";
            b.style.left = "0px";
            b.style.margin = "0px";
            b.style.zIndex = 1E4;
            b.style.textAlign = "center";
            b.classList.add("firebase-emulator-warning");
            n.document.body.appendChild(b)
        })
    };
    T.prototype.al = function(a) {
        this.Ja.push(a);
        wm(this.o, firebase.SDK_VERSION ? Ak("JsCore", firebase.SDK_VERSION, this.Ja) : null);
        this.dispatchEvent(new jr(this.Ja))
    }
    ;
    T.prototype.Fh = function(a) {
        this.ua === a || this.Bb || (this.ua = a,
        this.o.ua = this.ua)
    }
    ;
    var fr = function(a) {
        Object.defineProperty(a, "lc", {
            get: function() {
                return this.Kb
            },
            set: function(b) {
                this.Nd(b)
            },
            enumerable: !1
        });
        a.Kb = null;
        Object.defineProperty(a, "ti", {
            get: function() {
                return this.ua
            },
            set: function(b) {
                this.Fh(b)
            },
            enumerable: !1
        });
        a.ua = null;
        Object.defineProperty(a, "emulatorConfig", {
            get: function() {
                if (this.ha) {
                    var b = M(this.ha.url);
                    b = Yk({
                        protocol: b.Za,
                        host: b.La,
                        port: b.Xb,
                        options: Yk({
                            disableWarnings: this.ha.disableWarnings
                        })
                    })
                } else
                    b = null;
                return b
            },
            enumerable: !1
        })
    };
    T.prototype.toJSON = function() {
        return {
            apiKey: this.W().options.apiKey,
            authDomain: this.W().options.authDomain,
            appName: this.W().name,
            currentUser: U(this) && U(this).V()
        }
    }
    ;
    var kr = function(a) {
        return a.sk || H(new Q("auth-domain-config-required"))
    }
      , er = function(a) {
        var b = a.W().options.authDomain
          , c = a.W().options.apiKey;
        b && Ek() && (a.sk = a.Re.then(function() {
            if (!a.Bb) {
                a.ma = Mp(b, c, a.W().name, a.ha);
                a.ma.subscribe(a);
                U(a) && wq(U(a));
                if (a.Dc) {
                    wq(a.Dc);
                    var d = a.Dc;
                    d.Nd(a.Kb);
                    oq(d, a);
                    d = a.Dc;
                    nq(d, a.Ja);
                    qq(d, a);
                    d = a.Dc;
                    vm(d.o, a.ha);
                    pq(d, a);
                    a.Dc = null
                }
                return a.ma
            }
        }))
    };
    h = T.prototype;
    h.Xh = function(a, b) {
        switch (a) {
        case "unknown":
        case "signInViaRedirect":
            return !0;
        case "signInViaPopup":
            return this.Nb == b && !!this.Mb;
        default:
            return !1
        }
    }
    ;
    h.Yc = function(a, b, c, d) {
        "signInViaPopup" == a && this.Nb == d && (c && this.Wc ? this.Wc(c) : b && !c && this.Mb && this.Mb(b),
        this.Ra && (this.Ra.cancel(),
        this.Ra = null),
        delete this.Mb,
        delete this.Wc)
    }
    ;
    h.fe = function(a, b) {
        return "signInViaRedirect" == a || "signInViaPopup" == a && this.Nb == b && this.Mb ? r(this.uk, this) : null
    }
    ;
    h.uk = function(a, b, c, d) {
        var e = this
          , f = {
            requestUri: a,
            postBody: d,
            sessionId: b,
            tenantId: c
        };
        this.Ra && (this.Ra.cancel(),
        this.Ra = null);
        return e.Re.then(function() {
            return lr(e, zl(e.o, f))
        })
    }
    ;
    h.af = function() {
        return Bk()
    }
    ;
    h.signInWithPopup = function(a) {
        if (!Ek())
            return H(new Q("operation-not-supported-in-this-environment"));
        var b = this
          , c = dl(a.providerId)
          , d = this.af()
          , e = null;
        (!Fk() || uk()) && this.W().options.authDomain && a.isOAuthProvider && (e = Hn(this.W().options.authDomain, this.W().options.apiKey, this.W().name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null, null, null, this.ua, this.ha));
        var f = lk(e, c && c.Fd, c && c.Ed);
        c = kr(this).then(function(g) {
            return g.xe(f, "signInViaPopup", a, d, !!e, b.ua)
        }).then(function() {
            return new E(function(g, k) {
                b.Yc("signInViaPopup", null, new Q("cancelled-popup-request"), b.Nb);
                b.Mb = g;
                b.Wc = k;
                b.Nb = d;
                b.Ra = b.ma.Ge(b, "signInViaPopup", f, d)
            }
            )
        }).then(function(g) {
            f && kk(f);
            return g ? Yk(g) : null
        }).u(function(g) {
            f && kk(f);
            throw g;
        });
        return this.T(c)
    }
    ;
    h.signInWithRedirect = function(a) {
        if (!Ek())
            return H(new Q("operation-not-supported-in-this-environment"));
        var b = this
          , c = kr(this).then(function() {
            return Yq(b.Sb)
        }).then(function() {
            return b.ma.ye("signInViaRedirect", a, void 0, b.ua)
        });
        return this.T(c)
    }
    ;
    var mr = function(a) {
        if (!Ek())
            return H(new Q("operation-not-supported-in-this-environment"));
        var b = kr(a).then(function() {
            return a.ma.getRedirectResult()
        }).then(function(c) {
            return c ? Yk(c) : null
        });
        return a.T(b)
    };
    T.prototype.getRedirectResult = function() {
        var a = this;
        return mr(this).then(function(b) {
            a.ma && a.ma.nd();
            return b
        }).u(function(b) {
            a.ma && a.ma.nd();
            throw b;
        })
    }
    ;
    T.prototype.updateCurrentUser = function(a) {
        if (!a)
            return H(new Q("null-user"));
        if (this.ua != a.tenantId)
            return H(new Q("tenant-id-mismatch"));
        var b = this
          , c = {};
        c.apiKey = this.W().options.apiKey;
        c.authDomain = this.W().options.authDomain;
        c.appName = this.W().name;
        var d = Qq(a, c, b.Xc, Ya(b.Ja));
        return this.T(this.Ob.then(function() {
            if (b.W().options.apiKey != a.ka)
                return d.reload()
        }).then(function() {
            if (U(b) && a.uid == U(b).uid)
                return U(b).copy(a),
                b.vc(a);
            br(b, d);
            wq(d);
            return b.vc(d)
        }).then(function() {
            b.xc()
        }))
    }
    ;
    var nr = function(a, b) {
        var c = {};
        c.apiKey = a.W().options.apiKey;
        c.authDomain = a.W().options.authDomain;
        c.appName = a.W().name;
        a.ha && (c.emulatorConfig = a.ha);
        return a.Re.then(function() {
            return Pq(c, b, a.Xc, Ya(a.Ja))
        }).then(function(d) {
            if (U(a) && d.uid == U(a).uid)
                return U(a).copy(d),
                a.vc(d);
            br(a, d);
            wq(d);
            return a.vc(d)
        }).then(function() {
            a.xc()
        })
    }
      , br = function(a, b) {
        U(a) && (uq(U(a), a.Oj),
        ci(U(a), "tokenChanged", a.Td),
        ci(U(a), "userDeleted", a.Mj),
        ci(U(a), "userInvalidated", a.Nj),
        tq(U(a)));
        b && (b.Uf.push(a.Oj),
        Vh(b, "tokenChanged", a.Td),
        Vh(b, "userDeleted", a.Mj),
        Vh(b, "userInvalidated", a.Nj),
        0 < a.Nc && sq(b));
        P(a, "currentUser", b);
        b && (b.Nd(a.Kb),
        oq(b, a),
        nq(b, a.Ja),
        qq(b, a),
        vm(b.o, a.ha),
        pq(b, a))
    };
    T.prototype.signOut = function() {
        var a = this
          , b = this.Ob.then(function() {
            a.ma && a.ma.nd();
            if (!U(a))
                return F();
            br(a, null);
            return $q(a.Sb).then(function() {
                a.xc()
            })
        });
        return this.T(b)
    }
    ;
    var or = function(a) {
        var b = a.W().options.authDomain;
        b = Sq(a.Xc, b).then(function(c) {
            if (a.Dc = c)
                c.Cc = a.Xc;
            return Mq(a.Xc)
        });
        return a.T(b)
    }
      , cr = function(a) {
        var b = a.W().options.authDomain
          , c = or(a).then(function() {
            return ar(a.Sb, b, a.ha)
        }).then(function(d) {
            return d ? (d.Cc = a.Xc,
            a.Dc && (a.Dc.Bc || null) == (d.Bc || null) ? d : d.reload().then(function() {
                return Zq(a.Sb, d).then(function() {
                    return d
                })
            }).u(function(e) {
                return "auth/network-request-failed" == e.code ? d : $q(a.Sb)
            })) : null
        }).then(function(d) {
            br(a, d || null)
        });
        return a.T(c)
    }
      , dr = function(a) {
        return a.Re.then(function() {
            return mr(a)
        }).u(function() {}).then(function() {
            if (!a.Bb)
                return a.Hg()
        }).u(function() {}).then(function() {
            if (!a.Bb) {
                a.uf = !0;
                var b = a.Sb;
                b.U.addListener(Tq("local"), b.$, a.Hg)
            }
        })
    };
    h = T.prototype;
    h.Ql = function() {
        var a = this
          , b = this.W().options.authDomain;
        return ar(this.Sb, b).then(function(c) {
            if (!a.Bb) {
                var d;
                if (d = U(a) && c) {
                    d = U(a).uid;
                    var e = c.uid;
                    d = void 0 === d || null === d || "" === d || void 0 === e || null === e || "" === e ? !1 : d == e
                }
                if (d)
                    return U(a).copy(c),
                    U(a).getIdToken();
                if (U(a) || c)
                    br(a, c),
                    c && (wq(c),
                    c.Cc = a.Xc),
                    a.ma && a.ma.subscribe(a),
                    a.xc()
            }
        })
    }
    ;
    h.vc = function(a) {
        return Zq(this.Sb, a)
    }
    ;
    h.Kg = function() {
        this.xc();
        this.vc(U(this))
    }
    ;
    h.Mk = function() {
        this.signOut()
    }
    ;
    h.Nk = function() {
        this.signOut()
    }
    ;
    var lr = function(a, b) {
        var c = null
          , d = null;
        return a.T(b.then(function(e) {
            c = im(e);
            d = Wo(e);
            return nr(a, e)
        }, function(e) {
            var f = null;
            e && "auth/multi-factor-auth-required" === e.code && (f = Up(e.V(), a, r(a.Jg, a)));
            throw f || e;
        }).then(function() {
            return Yk({
                user: U(a),
                credential: c,
                additionalUserInfo: d,
                operationType: "signIn"
            })
        }))
    };
    h = T.prototype;
    h.Jg = function(a) {
        var b = this;
        return this.Ob.then(function() {
            return lr(b, F(a))
        })
    }
    ;
    h.Tk = function(a) {
        var b = this;
        this.addAuthTokenListener(function() {
            a.next(U(b))
        })
    }
    ;
    h.Uk = function(a) {
        var b = this;
        pr(this, function() {
            a.next(U(b))
        })
    }
    ;
    h.onIdTokenChanged = function(a, b, c) {
        var d = this;
        this.uf && firebase.Promise.resolve().then(function() {
            "function" === typeof a ? a(U(d)) : "function" === typeof a.next && a.next(U(d))
        });
        return this.ll(a, b, c)
    }
    ;
    h.onAuthStateChanged = function(a, b, c) {
        var d = this;
        this.uf && firebase.Promise.resolve().then(function() {
            d.Oe = d.getUid();
            "function" === typeof a ? a(U(d)) : "function" === typeof a.next && a.next(U(d))
        });
        return this.ql(a, b, c)
    }
    ;
    h.zk = function(a) {
        var b = this
          , c = this.Ob.then(function() {
            return U(b) ? U(b).getIdToken(a).then(function(d) {
                return {
                    accessToken: d
                }
            }) : null
        });
        return this.T(c)
    }
    ;
    h.signInWithCustomToken = function(a) {
        var b = this;
        return this.Ob.then(function() {
            return lr(b, R(b.o, rn, {
                token: a
            }))
        }).then(function(c) {
            var d = c.user;
            Cq(d, "isAnonymous", !1);
            b.vc(d);
            return c
        })
    }
    ;
    h.signInWithEmailAndPassword = function(a, b) {
        var c = this;
        return this.Ob.then(function() {
            return lr(c, R(c.o, Tl, {
                email: a,
                password: b
            }))
        })
    }
    ;
    h.createUserWithEmailAndPassword = function(a, b) {
        var c = this;
        return this.Ob.then(function() {
            return lr(c, R(c.o, ln, {
                email: a,
                password: b
            }))
        })
    }
    ;
    h.signInWithCredential = function(a) {
        var b = this;
        return this.Ob.then(function() {
            return lr(b, a.Pc(b.o))
        })
    }
    ;
    h.signInAndRetrieveDataWithCredential = function(a) {
        Uk("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
        return this.signInWithCredential(a)
    }
    ;
    h.signInAnonymously = function() {
        var a = this;
        return this.Ob.then(function() {
            var b = U(a);
            if (b && b.isAnonymous) {
                var c = Yk({
                    providerId: null,
                    isNewUser: !1
                });
                return Yk({
                    user: b,
                    credential: null,
                    additionalUserInfo: c,
                    operationType: "signIn"
                })
            }
            return lr(a, a.o.signInAnonymously()).then(function(d) {
                var e = d.user;
                Cq(e, "isAnonymous", !0);
                a.vc(e);
                return d
            })
        })
    }
    ;
    h.W = function() {
        return this.app
    }
    ;
    var U = function(a) {
        return a.currentUser
    };
    T.prototype.getUid = function() {
        return U(this) && U(this).uid || null
    }
    ;
    var qr = function(a) {
        return U(a) && U(a)._lat || null
    };
    h = T.prototype;
    h.xc = function() {
        if (this.uf) {
            for (var a = 0; a < this.Ic.length; a++)
                if (this.Ic[a])
                    this.Ic[a](qr(this));
            if (this.Oe !== this.getUid() && this.Sd.length)
                for (this.Oe = this.getUid(),
                a = 0; a < this.Sd.length; a++)
                    if (this.Sd[a])
                        this.Sd[a](qr(this))
        }
    }
    ;
    h.Yj = function(a) {
        this.addAuthTokenListener(a);
        this.Nc++;
        0 < this.Nc && U(this) && sq(U(this))
    }
    ;
    h.zl = function(a) {
        var b = this;
        x(this.Ic, function(c) {
            c == a && b.Nc--
        });
        0 > this.Nc && (this.Nc = 0);
        0 == this.Nc && U(this) && tq(U(this));
        this.removeAuthTokenListener(a)
    }
    ;
    h.addAuthTokenListener = function(a) {
        var b = this;
        this.Ic.push(a);
        this.T(this.Ob.then(function() {
            b.Bb || Ta(b.Ic, a) && a(qr(b))
        }))
    }
    ;
    h.removeAuthTokenListener = function(a) {
        Wa(this.Ic, function(b) {
            return b == a
        })
    }
    ;
    var pr = function(a, b) {
        a.Sd.push(b);
        a.T(a.Ob.then(function() {
            !a.Bb && Ta(a.Sd, b) && a.Oe !== a.getUid() && (a.Oe = a.getUid(),
            b(qr(a)))
        }))
    };
    h = T.prototype;
    h.delete = function() {
        this.Bb = !0;
        for (var a = 0; a < this.Qa.length; a++)
            this.Qa[a].cancel("app-deleted");
        this.Qa = [];
        this.Sb && (a = this.Sb,
        a.U.removeListener(Tq("local"), a.$, this.Hg));
        this.ma && (this.ma.unsubscribe(this),
        this.ma.nd());
        return firebase.Promise.resolve()
    }
    ;
    h.T = function(a) {
        var b = this;
        this.Qa.push(a);
        a.Fc(function() {
            Ua(b.Qa, a)
        });
        return a
    }
    ;
    h.fetchSignInMethodsForEmail = function(a) {
        return this.T(Hm(this.o, a))
    }
    ;
    h.isSignInWithEmailLink = function(a) {
        return !!Xl(a)
    }
    ;
    h.sendSignInLinkToEmail = function(a, b) {
        var c = this;
        return this.T(F().then(function() {
            var d = new Io(b);
            if (!d.Yh)
                throw new Q("argument-error","handleCodeInApp must be true when sending sign in link to email");
            return Ko(d)
        }).then(function(d) {
            return c.o.sendSignInLinkToEmail(a, d)
        }).then(function() {}))
    }
    ;
    h.verifyPasswordResetCode = function(a) {
        return this.checkActionCode(a).then(function(b) {
            return b.data.email
        })
    }
    ;
    h.confirmPasswordReset = function(a, b) {
        return this.T(this.o.confirmPasswordReset(a, b).then(function() {}))
    }
    ;
    h.checkActionCode = function(a) {
        return this.T(this.o.checkActionCode(a).then(function(b) {
            return new ll(b)
        }))
    }
    ;
    h.applyActionCode = function(a) {
        return this.T(this.o.applyActionCode(a).then(function() {}))
    }
    ;
    h.sendPasswordResetEmail = function(a, b) {
        var c = this;
        return this.T(F().then(function() {
            return "undefined" === typeof b || nb(b) ? {} : Ko(new Io(b))
        }).then(function(d) {
            return c.o.sendPasswordResetEmail(a, d)
        }).then(function() {}))
    }
    ;
    h.signInWithPhoneNumber = function(a, b) {
        return this.T(Mo(this, a, b, r(this.signInWithCredential, this)))
    }
    ;
    h.signInWithEmailLink = function(a, b) {
        var c = this;
        return this.T(F().then(function() {
            b = b || ek();
            var d = Yl(a, b)
              , e = Xl(b);
            if (!e)
                throw new Q("argument-error","Invalid email link!");
            if (e.tenantId !== c.ua)
                throw new Q("tenant-id-mismatch");
            return c.signInWithCredential(d)
        }))
    }
    ;
    var gr = function(a) {
        Hh.call(this, "languageCodeChanged");
        this.languageCode = a
    };
    l(gr, Hh);
    var ir = function(a) {
        Hh.call(this, "emulatorConfigChanged");
        this.emulatorConfig = a
    };
    l(ir, Hh);
    var jr = function(a) {
        Hh.call(this, "frameworkChanged");
        this.xk = a
    };
    l(jr, Hh);
    var sr = function(a, b, c, d) {
        a: {
            c = Array.prototype.slice.call(c);
            var e = 0;
            for (var f = !1, g = 0; g < b.length; g++)
                if (b[g].optional)
                    f = !0;
                else {
                    if (f)
                        throw new Q("internal-error","Argument validator encountered a required argument after an optional argument.");
                    e++
                }
            f = b.length;
            if (c.length < e || f < c.length)
                d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";
            else {
                for (e = 0; e < c.length; e++)
                    if (f = b[e].optional && void 0 === c[e],
                    !b[e].Ga(c[e]) && !f) {
                        b = b[e];
                        if (0 > e || e >= rr.length)
                            throw new Q("internal-error","Argument validator received an unsupported number of arguments.");
                        c = rr[e];
                        d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.Ka + ".";
                        break a
                    }
                d = null
            }
        }
        if (d)
            throw new Q("argument-error",a + " failed: " + d);
    }
      , rr = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
      , V = function(a, b) {
        return {
            name: a || "",
            Ka: "a valid string",
            optional: !!b,
            Ga: function(c) {
                return "string" === typeof c
            }
        }
    }
      , tr = function(a, b) {
        return {
            name: a || "",
            Ka: "a boolean",
            optional: !!b,
            Ga: function(c) {
                return "boolean" === typeof c
            }
        }
    }
      , W = function(a, b) {
        return {
            name: a || "",
            Ka: "a valid object",
            optional: !!b,
            Ga: q
        }
    }
      , ur = function(a, b) {
        return {
            name: a || "",
            Ka: "a function",
            optional: !!b,
            Ga: rb
        }
    }
      , vr = function(a, b) {
        return {
            name: a || "",
            Ka: "null",
            optional: !!b,
            Ga: function(c) {
                return null === c
            }
        }
    }
      , wr = function() {
        return {
            name: "",
            Ka: "an HTML element",
            optional: !1,
            Ga: function(a) {
                return !!(a && a instanceof Element)
            }
        }
    }
      , xr = function() {
        return {
            name: "auth",
            Ka: "an instance of Firebase Auth",
            optional: !0,
            Ga: function(a) {
                return !!(a && a instanceof T)
            }
        }
    }
      , yr = function() {
        return {
            name: "app",
            Ka: "an instance of Firebase App",
            optional: !0,
            Ga: function(a) {
                return !!(a && a instanceof firebase.app.App)
            }
        }
    }
      , zr = function(a) {
        return {
            name: a ? a + "Credential" : "credential",
            Ka: a ? "a valid " + a + " credential" : "a valid credential",
            optional: !1,
            Ga: function(b) {
                if (!b)
                    return !1;
                var c = !a || b.providerId === a;
                return !(!b.Pc || !c)
            }
        }
    }
      , Ar = function() {
        return {
            name: "multiFactorAssertion",
            Ka: "a valid multiFactorAssertion",
            optional: !1,
            Ga: function(a) {
                return a ? !!a.process : !1
            }
        }
    }
      , Br = function() {
        return {
            name: "authProvider",
            Ka: "a valid Auth provider",
            optional: !1,
            Ga: function(a) {
                return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
            }
        }
    }
      , Cr = function(a, b) {
        return q(a) && "string" === typeof a.type && a.type === b && "function" === typeof a.he
    }
      , Dr = function(a) {
        return q(a) && "string" === typeof a.uid
    }
      , Er = function() {
        return {
            name: "applicationVerifier",
            Ka: "an implementation of firebase.auth.ApplicationVerifier",
            optional: !1,
            Ga: function(a) {
                return !(!a || "string" !== typeof a.type || "function" !== typeof a.verify)
            }
        }
    }
      , X = function(a, b, c, d) {
        return {
            name: c || "",
            Ka: a.Ka + " or " + b.Ka,
            optional: !!d,
            Ga: function(e) {
                return a.Ga(e) || b.Ga(e)
            }
        }
    };
    var Y = function(a, b) {
        for (var c in b) {
            var d = b[c].name;
            a[d] = Fr(d, a[c], b[c].j)
        }
    }
      , Gr = function(a, b) {
        for (var c in b) {
            var d = b[c].name;
            d !== c && Object.defineProperty(a, d, {
                get: ya(function(e) {
                    return this[e]
                }, c),
                set: ya(function(e, f, g, k) {
                    sr(e, [g], [k], !0);
                    this[f] = k
                }, d, c, b[c].lg),
                enumerable: !0
            })
        }
    }
      , Z = function(a, b, c, d) {
        a[b] = Fr(b, c, d)
    }
      , Fr = function(a, b, c) {
        if (!c)
            return b;
        var d = Hr(a);
        a = function() {
            var f = Array.prototype.slice.call(arguments);
            sr(d, c, f);
            return b.apply(this, f)
        }
        ;
        for (var e in b)
            a[e] = b[e];
        for (e in b.prototype)
            a.prototype[e] = b.prototype[e];
        return a
    }
      , Hr = function(a) {
        a = a.split(".");
        return a[a.length - 1]
    };
    function Ir() {}
    P(Ir, "FACTOR_ID", "phone");
    Y(T.prototype, {
        applyActionCode: {
            name: "applyActionCode",
            j: [V("code")]
        },
        checkActionCode: {
            name: "checkActionCode",
            j: [V("code")]
        },
        confirmPasswordReset: {
            name: "confirmPasswordReset",
            j: [V("code"), V("newPassword")]
        },
        createUserWithEmailAndPassword: {
            name: "createUserWithEmailAndPassword",
            j: [V("email"), V("password")]
        },
        fetchSignInMethodsForEmail: {
            name: "fetchSignInMethodsForEmail",
            j: [V("email")]
        },
        getRedirectResult: {
            name: "getRedirectResult",
            j: []
        },
        isSignInWithEmailLink: {
            name: "isSignInWithEmailLink",
            j: [V("emailLink")]
        },
        onAuthStateChanged: {
            name: "onAuthStateChanged",
            j: [X(W(), ur(), "nextOrObserver"), ur("opt_error", !0), ur("opt_completed", !0)]
        },
        onIdTokenChanged: {
            name: "onIdTokenChanged",
            j: [X(W(), ur(), "nextOrObserver"), ur("opt_error", !0), ur("opt_completed", !0)]
        },
        sendPasswordResetEmail: {
            name: "sendPasswordResetEmail",
            j: [V("email"), X(W("opt_actionCodeSettings", !0), vr(null, !0), "opt_actionCodeSettings", !0)]
        },
        sendSignInLinkToEmail: {
            name: "sendSignInLinkToEmail",
            j: [V("email"), W("actionCodeSettings")]
        },
        setPersistence: {
            name: "setPersistence",
            j: [V("persistence")]
        },
        signInAndRetrieveDataWithCredential: {
            name: "signInAndRetrieveDataWithCredential",
            j: [zr()]
        },
        signInAnonymously: {
            name: "signInAnonymously",
            j: []
        },
        signInWithCredential: {
            name: "signInWithCredential",
            j: [zr()]
        },
        signInWithCustomToken: {
            name: "signInWithCustomToken",
            j: [V("token")]
        },
        signInWithEmailAndPassword: {
            name: "signInWithEmailAndPassword",
            j: [V("email"), V("password")]
        },
        signInWithEmailLink: {
            name: "signInWithEmailLink",
            j: [V("email"), V("emailLink", !0)]
        },
        signInWithPhoneNumber: {
            name: "signInWithPhoneNumber",
            j: [V("phoneNumber"), Er()]
        },
        signInWithPopup: {
            name: "signInWithPopup",
            j: [Br()]
        },
        signInWithRedirect: {
            name: "signInWithRedirect",
            j: [Br()]
        },
        updateCurrentUser: {
            name: "updateCurrentUser",
            j: [X(function(a) {
                return {
                    name: "user",
                    Ka: "an instance of Firebase User",
                    optional: !!a,
                    Ga: function(b) {
                        return !!(b && b instanceof S)
                    }
                }
            }(), vr(), "user")]
        },
        signOut: {
            name: "signOut",
            j: []
        },
        toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
        },
        useDeviceLanguage: {
            name: "useDeviceLanguage",
            j: []
        },
        useEmulator: {
            name: "useEmulator",
            j: [V("url"), W("options", !0)]
        },
        verifyPasswordResetCode: {
            name: "verifyPasswordResetCode",
            j: [V("code")]
        }
    });
    Gr(T.prototype, {
        lc: {
            name: "languageCode",
            lg: X(V(), vr(), "languageCode")
        },
        ti: {
            name: "tenantId",
            lg: X(V(), vr(), "tenantId")
        }
    });
    T.Persistence = Xo;
    T.Persistence.LOCAL = "local";
    T.Persistence.SESSION = "session";
    T.Persistence.NONE = "none";
    Y(S.prototype, {
        "delete": {
            name: "delete",
            j: []
        },
        getIdTokenResult: {
            name: "getIdTokenResult",
            j: [tr("opt_forceRefresh", !0)]
        },
        getIdToken: {
            name: "getIdToken",
            j: [tr("opt_forceRefresh", !0)]
        },
        linkAndRetrieveDataWithCredential: {
            name: "linkAndRetrieveDataWithCredential",
            j: [zr()]
        },
        linkWithCredential: {
            name: "linkWithCredential",
            j: [zr()]
        },
        linkWithPhoneNumber: {
            name: "linkWithPhoneNumber",
            j: [V("phoneNumber"), Er()]
        },
        linkWithPopup: {
            name: "linkWithPopup",
            j: [Br()]
        },
        linkWithRedirect: {
            name: "linkWithRedirect",
            j: [Br()]
        },
        reauthenticateAndRetrieveDataWithCredential: {
            name: "reauthenticateAndRetrieveDataWithCredential",
            j: [zr()]
        },
        reauthenticateWithCredential: {
            name: "reauthenticateWithCredential",
            j: [zr()]
        },
        reauthenticateWithPhoneNumber: {
            name: "reauthenticateWithPhoneNumber",
            j: [V("phoneNumber"), Er()]
        },
        reauthenticateWithPopup: {
            name: "reauthenticateWithPopup",
            j: [Br()]
        },
        reauthenticateWithRedirect: {
            name: "reauthenticateWithRedirect",
            j: [Br()]
        },
        reload: {
            name: "reload",
            j: []
        },
        sendEmailVerification: {
            name: "sendEmailVerification",
            j: [X(W("opt_actionCodeSettings", !0), vr(null, !0), "opt_actionCodeSettings", !0)]
        },
        toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
        },
        unlink: {
            name: "unlink",
            j: [V("provider")]
        },
        updateEmail: {
            name: "updateEmail",
            j: [V("email")]
        },
        updatePassword: {
            name: "updatePassword",
            j: [V("password")]
        },
        updatePhoneNumber: {
            name: "updatePhoneNumber",
            j: [zr("phone")]
        },
        updateProfile: {
            name: "updateProfile",
            j: [W("profile")]
        },
        verifyBeforeUpdateEmail: {
            name: "verifyBeforeUpdateEmail",
            j: [V("email"), X(W("opt_actionCodeSettings", !0), vr(null, !0), "opt_actionCodeSettings", !0)]
        }
    });
    Y(Nn.prototype, {
        execute: {
            name: "execute"
        },
        render: {
            name: "render"
        },
        reset: {
            name: "reset"
        },
        getResponse: {
            name: "getResponse"
        }
    });
    Y(In.prototype, {
        execute: {
            name: "execute"
        },
        render: {
            name: "render"
        },
        reset: {
            name: "reset"
        },
        getResponse: {
            name: "getResponse"
        }
    });
    Y(E.prototype, {
        Fc: {
            name: "finally"
        },
        u: {
            name: "catch"
        },
        then: {
            name: "then"
        }
    });
    Gr(Ho.prototype, {
        appVerificationDisabled: {
            name: "appVerificationDisabledForTesting",
            lg: tr("appVerificationDisabledForTesting")
        }
    });
    Y(Lo.prototype, {
        confirm: {
            name: "confirm",
            j: [V("verificationCode")]
        }
    });
    Z(wl, "fromJSON", function(a) {
        a = "string" === typeof a ? JSON.parse(a) : a;
        for (var b, c = [El, Wl, cm, Cl], d = 0; d < c.length; d++)
            if (b = c[d](a))
                return b;
        return null
    }, [X(V(), W(), "json")]);
    Z(Ql, "credential", function(a, b) {
        return new Rl(a,b)
    }, [V("email"), V("password")]);
    Y(Rl.prototype, {
        V: {
            name: "toJSON",
            j: [V(null, !0)]
        }
    });
    Y(Il.prototype, {
        addScope: {
            name: "addScope",
            j: [V("scope")]
        },
        setCustomParameters: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
        }
    });
    Z(Il, "credential", Jl, [X(V(), W(), "token")]);
    Z(Ql, "credentialWithLink", Yl, [V("email"), V("emailLink")]);
    Y(Kl.prototype, {
        addScope: {
            name: "addScope",
            j: [V("scope")]
        },
        setCustomParameters: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
        }
    });
    Z(Kl, "credential", Ll, [X(V(), W(), "token")]);
    Y(Ml.prototype, {
        addScope: {
            name: "addScope",
            j: [V("scope")]
        },
        setCustomParameters: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
        }
    });
    Z(Ml, "credential", Nl, [X(V(), X(W(), vr()), "idToken"), X(V(), vr(), "accessToken", !0)]);
    Y(Ol.prototype, {
        setCustomParameters: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
        }
    });
    Z(Ol, "credential", Pl, [X(V(), W(), "token"), V("secret", !0)]);
    Y(Hl.prototype, {
        addScope: {
            name: "addScope",
            j: [V("scope")]
        },
        credential: {
            name: "credential",
            j: [X(V(), X(W(), vr()), "optionsOrIdToken"), X(V(), vr(), "accessToken", !0)]
        },
        setCustomParameters: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
        }
    });
    Y(Dl.prototype, {
        V: {
            name: "toJSON",
            j: [V(null, !0)]
        }
    });
    Y(yl.prototype, {
        V: {
            name: "toJSON",
            j: [V(null, !0)]
        }
    });
    Z(dm, "credential", hm, [V("verificationId"), V("verificationCode")]);
    Y(dm.prototype, {
        verifyPhoneNumber: {
            name: "verifyPhoneNumber",
            j: [X(V(), function(a, b) {
                return {
                    name: a || "phoneInfoOptions",
                    Ka: "valid phone info options",
                    optional: !!b,
                    Ga: function(c) {
                        return c ? c.session && c.phoneNumber ? Cr(c.session, "enroll") && "string" === typeof c.phoneNumber : c.session && c.multiFactorHint ? Cr(c.session, "signin") && Dr(c.multiFactorHint) : c.session && c.multiFactorUid ? Cr(c.session, "signin") && "string" === typeof c.multiFactorUid : c.phoneNumber ? "string" === typeof c.phoneNumber : !1 : !1
                    }
                }
            }(), "phoneInfoOptions"), Er()]
        }
    });
    Y(Zl.prototype, {
        V: {
            name: "toJSON",
            j: [V(null, !0)]
        }
    });
    Y(Q.prototype, {
        toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
        }
    });
    Y(km.prototype, {
        toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
        }
    });
    Y(ql.prototype, {
        toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
        }
    });
    Y(Tp.prototype, {
        toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
        }
    });
    Y(Sp.prototype, {
        resolveSignIn: {
            name: "resolveSignIn",
            j: [Ar()]
        }
    });
    Y(bq.prototype, {
        getSession: {
            name: "getSession",
            j: []
        },
        enroll: {
            name: "enroll",
            j: [Ar(), V("displayName", !0)]
        },
        unenroll: {
            name: "unenroll",
            j: [X({
                name: "multiFactorInfo",
                Ka: "a valid multiFactorInfo",
                optional: !1,
                Ga: Dr
            }, V(), "multiFactorInfoIdentifier")]
        }
    });
    Y(Yn.prototype, {
        clear: {
            name: "clear",
            j: []
        },
        render: {
            name: "render",
            j: []
        },
        verify: {
            name: "verify",
            j: []
        }
    });
    Z(nl, "parseLink", ol, [V("link")]);
    Z(Ir, "assertion", function(a) {
        return new Zp(a)
    }, [zr("phone")]);
    (function() {
        if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
            var a = {
                ActionCodeInfo: {
                    Operation: {
                        EMAIL_SIGNIN: "EMAIL_SIGNIN",
                        PASSWORD_RESET: "PASSWORD_RESET",
                        RECOVER_EMAIL: "RECOVER_EMAIL",
                        REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
                        VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
                        VERIFY_EMAIL: "VERIFY_EMAIL"
                    }
                },
                Auth: T,
                AuthCredential: wl,
                Error: Q
            };
            Z(a, "EmailAuthProvider", Ql, []);
            Z(a, "FacebookAuthProvider", Il, []);
            Z(a, "GithubAuthProvider", Kl, []);
            Z(a, "GoogleAuthProvider", Ml, []);
            Z(a, "TwitterAuthProvider", Ol, []);
            Z(a, "OAuthProvider", Hl, [V("providerId")]);
            Z(a, "SAMLAuthProvider", Gl, [V("providerId")]);
            Z(a, "PhoneAuthProvider", dm, [xr()]);
            Z(a, "RecaptchaVerifier", Yn, [X(V(), wr(), "recaptchaContainer"), W("recaptchaParameters", !0), yr()]);
            Z(a, "ActionCodeURL", nl, []);
            Z(a, "PhoneMultiFactorGenerator", Ir, []);
            firebase.INTERNAL.registerService("auth", function(b, c) {
                b = new T(b);
                c({
                    INTERNAL: {
                        getUid: r(b.getUid, b),
                        getToken: r(b.zk, b),
                        addAuthTokenListener: r(b.Yj, b),
                        removeAuthTokenListener: r(b.zl, b)
                    }
                });
                return b
            }, a, function(b, c) {
                if ("create" === b)
                    try {
                        c.auth()
                    } catch (d) {}
            });
            firebase.INTERNAL.extendNamespace({
                User: S
            })
        } else
            throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    }
    )();
    var Jr = function(a) {
        this.ah = Aa.getParentIframe();
        this.Eb = this.ah.getOrigin();
        this.Lb = a;
        this.Lh = !1
    };
    Jr.prototype.Qc = function() {
        return this.Eb
    }
    ;
    Jr.prototype.start = function() {
        var a = this;
        return this.Lb(this.Eb).then(function() {
            a.Lh = !0
        }).u(function() {
            throw new ql(a.Qc());
        })
    }
    ;
    Jr.prototype.sendMessage = function(a) {
        var b = this;
        if (this.Lh)
            return new E(function(c) {
                b.ah.send(a.type, a, c, Ng)
            }
            );
        throw new Q("missing-iframe-start");
    }
    ;
    Jr.prototype.uh = function(a, b) {
        if (this.Lh)
            this.ah.register(a, b, Ng);
        else
            throw new Q("missing-iframe-start");
    }
    ;
    var Kr = function(a) {
        this.Df = new Jr(a)
    };
    Kr.prototype.Qc = function() {
        return this.Df.Qc()
    }
    ;
    Kr.prototype.start = function() {
        var a = this;
        return this.Df.start().then(function() {
            a.wh()
        })
    }
    ;
    var Lr = function(a, b) {
        return a.Df.sendMessage({
            type: "authEvent",
            authEvent: b && b.V()
        }).then(function(c) {
            if (!c || !c.length || "ACK" != c[c.length - 1].status)
                throw new Q("internal-error");
        })
    };
    Kr.prototype.wh = function() {
        this.Df.uh("webStorageSupport", function() {
            return F({
                status: "ACK",
                webStorageSupport: !0
            })
        })
    }
    ;
    var Mr = function(a, b, c) {
        var d = (Vj(M(ek()), "fw") || "").split(",")
          , e = this;
        this.ka = a;
        this.ta = b;
        this.Oa = c || null;
        this.Ja = d || [];
        this.Od = new fp(this.ka + ":" + this.ta);
        this.fl = new lp;
        this.o = new rm(a,bk(this.Oa),Ak("Iframe", "2.19.0", this.Ja));
        this.wc = new Kr(function(f) {
            return Jm(e.o).then(function(g) {
                if (!ok(g, f))
                    throw e.destroy(),
                    new ql(f);
            })
        }
        );
        this.zc = eo(n);
        this.Ji = !1;
        this.zc.subscribe("getParentOrigin", function(f) {
            if (f === n.window.location.origin)
                return F(e.wc.Qc());
            throw Error("Invalid origin");
        });
        this.zc.subscribe("sendAuthEvent", function(f, g) {
            var k = g.storageKey
              , m = null;
            try {
                m = hl(g.authEvent)
            } catch (p) {}
            if (f === n.window.location.origin && k === e.ka + ":" + e.ta && m)
                return e.Ji ? Lr(e.wc, m).then(function() {
                    return !0
                }).u(function() {
                    return !1
                }) : e.fl.U.set(gp, m.V(), k).then(function() {
                    return !0
                }).u(function() {
                    return !1
                });
            throw Error("Invalid origin or request");
        })
    };
    Mr.prototype.Qc = function() {
        return this.wc.Qc()
    }
    ;
    Mr.prototype.start = function() {
        var a = this;
        return this.wc.start().then(function() {
            a.Ji = !0;
            a.fj = a.ej.bind(a);
            return Nr(a).Fc(function() {
                a.Od.Hc(a.fj);
                a.ej(!1)
            })
        })
    }
    ;
    Mr.prototype.ej = function(a) {
        var b = this
          , c = null;
        return hp(this.Od).then(function(d) {
            if (c = d)
                return Lr(b.wc, d);
            if (a)
                return Lr(b.wc, new gl("unknown",null,null,null,new Q("no-auth-event")))
        }).then(function() {
            if (c)
                return ip(b.Od)
        }).u(function() {})
    }
    ;
    var Nr = function(a) {
        var b = null;
        return kp(a.Od).then(function(c) {
            if (b = c)
                return Lr(a.wc, c);
            c = Ck() ? "no-auth-event" : "web-storage-unsupported";
            return Lr(a.wc, new gl("unknown",null,null,null,new Q(c)))
        }).then(function() {
            if (b) {
                var c = a.Od;
                return c.U.remove(jp, c.$)
            }
        }).u(function() {})
    };
    Mr.prototype.destroy = function() {
        this.rd = !0;
        this.Od.Ld(this.fj);
        this.zc.unsubscribe("getParentOrigin");
        this.zc.unsubscribe("sendAuthEvent")
    }
    ;
    var Or = null
      , Pr = function() {
        var a = Vj(M(ek()), "apiKey")
          , b = Vj(M(ek()), "appName") || "";
        if (!a)
            throw new Q("invalid-api-key");
        var c = Vj(M(ek()), "eid") || null;
        Or = new Mr(a,b,c);
        Or.start().u(function(d) {
            if (d && "auth/unauthorized-domain" == d.code)
                d = M(Or.Qc()),
                d = "chrome-extension" == d.Za ? Zb("Info: The current chrome extension ID is not authorized for OAuth operations. This will prevent signInWithPopup and linkWithPopup from working. Add your chrome extension (chrome-extension://%s) to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", d.La) : Zb("Info: The current domain is not authorized for OAuth operations. This will prevent signInWithPopup, signInWithRedirect, linkWithPopup and linkWithRedirect from working. Add your domain (%s) to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", d.La),
                Ok(d);
            else
                throw d;
        })
    };
    t("fireauth.iframe.AuthRelay.initialize", function() {
        "complete" == n.document.readyState ? Pr() : Uh(window, "load", function() {
            Pr()
        })
    });
}
).call(this);
