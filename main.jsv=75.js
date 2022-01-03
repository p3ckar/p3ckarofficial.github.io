function turnOnLockSecure() {
    var e = document.getElementById("lockSecure");
    e.hidden = !0;
    var t = document.getElementById("lockSecure_upd");
    t.removeAttribute("hidden")
}
function turnOnCardType() {
    window.cardTypeON = !0;
    var e = document.getElementById("card-type_upd");
    e.removeAttribute("hidden");
    var t = document.querySelector("input[class='form-payment__card-number']");
    t && (window.innerWidth < 380 ? (t.style.cssText = "padding: 2px 0px 4px 0px;",
    t.placeholder = "●●●● ●●●● ●●●● ●●●●") : (t.style.cssText = "padding: 2px 15px 4px 15px;",
    t.placeholder = "●●●●   ●●●●   ●●●●   ●●●●"));
    var n = document.querySelector(".head-payment .head-payment__info");
    n || (n = document.querySelector(".head-payment .head-payment__auth")),
    n.style.cssText = "padding-bottom: 26px"
}
function turnOnRedLine() {
    window.redLineOn = !0
}
function turnOnCVVBlock() {
    window.cvvBlockOn = !0;
    var e = document.getElementById("cvv-hint");
    e.hidden = !0;
    var t = document.getElementById("cvv-hint_upd");
    t.hidden = !1;
    var n = document.querySelector(".form-payment .form-payment__cvv-cont");
    n && (n.style.cssText = "margin-left: 5%;");
    var r = document.querySelector(".form-payment-token .form-payment__info-cont");
    r && (r.style.cssText = "width: 41%;")
}
function runFormUpd() {
    turnOnLockSecure(),
    turnOnCardType(),
    turnOnRedLine(),
    turnOnCVVBlock()
}
function CardAliasApiRun() {
    function e() {
        window.cardTypeON || "block" !== $(Ve).css("display") || $(We).css("width", "320px")
    }
    function t() {
        var e = $(Ue);
        $(Oe).focus(function(t) {
            e.css("width", "100%"),
            e.css("left", "0")
        }),
        $(Oe).focusout(function(t) {
            e.css("width", "0"),
            e.css("left", "0")
        })
    }
    function n() {
        var e = $(Ge);
        $(Re).focus(function(t) {
            e.css("width", "100%"),
            e.css("left", "0")
        }),
        $(Re).focusout(function(t) {
            e.css("width", "0"),
            e.css("left", "0")
        })
    }
    function r() {
        window.forceCreateCaredTypeDom = !1,
        $(He).prop("checked", !0),
        w(qe, $e),
        C();
        var e = $(F.logoLine.classForCardType);
        e.removeClass(F.logoLine.classVisa),
        e.removeClass(F.logoLine.classMasterCard),
        R = "",
        $(Me).css("display", "none"),
        $(Pe).css("display", "block"),
        $(Pe).css("width", "260px"),
        $(Re).css("pointer-events", "auto"),
        $(Re).css("color", "#181c20"),
        $(Re).attr("value", ""),
        $(Ie).attr("value", ""),
        $(Fe).css("display", "none"),
        $(je).css("display", "flex"),
        window.aliasesModCard = !1,
        $(Re).val(""),
        $(Be).val(""),
        $(Be).attr("value", "");
        var t = $(Oe).val().replace(/\s/g, "");
        t ? f(t) : $(Oe).focus()
    }
    function i() {
        var e = $(qe).filter(":not(" + Xe + ")")[0];
        e ? ($(Be).focus(),
        $(ze).css("display", "block"),
        $(Me).attr("value", b(e)),
        R = $(Me).attr("value"),
        f(R),
        $(Re).attr("value", e.attributes[j].value),
        $(Ie).attr("value", e.attributes[H].value),
        $(Re).css("pointer-events", "none"),
        $(Re).css("color", "#575757"),
        $(Fe).css("display", "flex"),
        window.aliasesModCard = !0,
        $(He).prop("checked", !1)) : ($(Ke).css("display", "none"),
        r())
    }
    function o() {
        $(Le).on("click", function(e) {
            I = e.target.parentElement,
            $(De).css("display", "flex"),
            $(Ne).text(I.innerText)
        })
    }
    function a() {
        $(Ze).on("click", function(e) {
            $(et).css("display", "none"),
            I = ""
        }),
        $(Qe).on("click", function(e) {
            $(et).css("display", "none"),
            $(I).addClass(me),
            g(I.attributes.alias.value),
            i(),
            I = ""
        })
    }
    function s() {
        $(ke).on("click", function(e) {
            if (e.target.className !== U) {
                if (C(),
                $(e.target).is($e))
                    return r(),
                    void l();
                window.forceCreateCaredTypeDom = !0,
                window.aliasesModCard = !0;
                var t = e.currentTarget;
                w(ke, t),
                y(t),
                x(t.attributes[j].value, t.attributes[H].value),
                B(),
                T(),
                O(),
                M(),
                f(b(t)),
                l()
            }
        })
    }
    function c() {
        $("body").on("click", function(e) {
            $(e.target).is(".dropdown-btn") || $(e.target).is(".card-tokens-down") || P && ($(Ye).css("display", "none"),
            P = !1)
        })
    }
    function u() {
        $(Ye).css("display", "block"),
        P = !0
    }
    function l() {
        $(Ye).css("display", "none"),
        P = !1
    }
    function d() {
        $(Je).on("click", Me + ", " + Ke, function(e) {
            P ? l() : u()
        })
    }
    function f(e) {
        e = e.replace(/\s/g, "");
        var t = $(F.logoLine.classForCardType);
        window.cardTypeON && e.length >= 6 && m(e),
        p(e, t)
    }
    function p(e, t) {
        t.removeClass(F.logoLine.classVisa),
        t.removeClass(F.logoLine.classMasterCard),
        t.removeClass(F.logoLine.classProstir),
        t.removeClass(F.logoLine.classMaestro);
        var n = $.payment.cardType(e);
        "visa" === n ? t.addClass(F.logoLine.classVisa) : "mastercard" === n ? t.addClass(F.logoLine.classMasterCard) : "prostir" === n ? t.addClass(F.logoLine.classProstir) : "maestro" === n && t.addClass(F.logoLine.classMaestro)
    }
    function h(e, t) {
        var n = $.payment.cardType(e);
        "visa" === n ? t.classList.add(F.logoMenu.classVisa) : "mastercard" === n ? t.classList.add(F.logoMenu.classMasterCard) : "prostir" === n ? t.classList.add(F.logoMenu.classProstir) : "maestro" === n && t.classList.add(F.logoMenu.classMaestro)
    }
    function m(e) {
        if (window.cardTypeON) {
            var t = "/cards/bank_info";
            fetch(t, {
                method: "POST",
                body: JSON.stringify({
                    card_bin: e
                })
            }).then(function(e) {
                return e.json()
            }).then(function(e) {
                e ? _(e) : C()
            })["catch"](function() {
                C()
            })
        }
    }
    function g(e) {
        fetch(window.remove_card_cali_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                card_alias: e
            })
        })
    }
    function v() {
        var e = $(qe).toArray();
        e.map(function(e) {
            var t = e.getElementsByClassName("cali-ps-logo")[0]
              , n = e.getElementsByClassName(q)[0].textContent
              , r = n.replace(/\s/g, "").slice(0, 6);
            return h(r, t),
            e
        })
    }
    function y(e) {
        S(),
        A(),
        E(e),
        k()
    }
    function x(e, t) {
        L(e),
        D(t),
        N()
    }
    function w(e, t) {}
    function b(e) {
        return e.getElementsByClassName(q)[0].textContent
    }
    function T() {
        $(Be).focus()
    }
    function C() {
        $(Ae).css("content", "")
    }
    function _(e) {
        $(Ae).css("content", "url(" + e + ")")
    }
    function S() {
        $(Oe).attr("value", "")
    }
    function E(e) {
        $(Me).attr("value", b(e))
    }
    function k() {
        $(Me).css("display", "block")
    }
    function A() {
        $(Pe).css("display", "none")
    }
    function L(e) {
        $(Re).val(e),
        $(Re).attr("value", e)
    }
    function D(e) {
        $(Ie).attr("value", e)
    }
    function N() {
        $(Be).val(""),
        $(Be).attr("value", "")
    }
    function B() {
        $(Re).css("pointer-events", "none"),
        $(Re).css("color", "#575757")
    }
    function O() {
        $(Fe).css("display", "flex"),
        $(je).css("display", "none"),
        $(He).prop("checked", !1)
    }
    function M() {
        $(tt).addClass(ie).removeClass(oe),
        $(nt).addClass(ae).removeClass(se),
        $(rt).addClass(ce).removeClass(ue),
        $(it).addClass(le).removeClass(de)
    }
    window.cardTypeON ? window.cardTypeLine = "form-payment__card-type" : (window.cardTypeLine = "form-payment__card-number-line",
    $(".form-payment__form-cont").css("max-width", "323px"));
    var P = !1;
    window.aliasesModCard = !1,
    window.aliasesMod = !0;
    var R = ""
      , I = ""
      , F = {
        logoLine: {
            classForCardType: "." + window.cardTypeLine,
            classVisa: window.cardTypeLine + "-visa",
            classMasterCard: window.cardTypeLine + "-master",
            classProstir: window.cardTypeLine + "-prostir",
            classMaestro: window.cardTypeLine + "-maestro"
        },
        logoMenu: {
            classVisa: "cali-ps-logo-visa",
            classMasterCard: "cali-ps-logo-master",
            classProstir: "cali-ps-logo-prostir",
            classMaestro: "cali-ps-logo-maestro"
        }
    }
      , j = "expiredate"
      , H = "alias"
      , q = "cali-mask-content"
      , V = "card-token"
      , W = "form-payment__card-bank"
      , U = "remove_card_cali"
      , G = "remove_card_cali_number-model"
      , X = "remove_card_cali_number-card_mask"
      , z = "enter-card-number"
      , K = "form-payment__cvv"
      , Y = "form-payment__card-number"
      , J = "dropdown-btn"
      , Z = "card-token-number"
      , Q = "form-payment__date"
      , ee = "card-token-alias"
      , te = "card-token_save"
      , ne = "card-token-save_checkbox"
      , re = "card-token-checkbox_class"
      , ie = "form-payment__card-number-line"
      , oe = "form-payment__card-number-line_red"
      , ae = "form-payment__card-number-line_before"
      , se = "form-payment__card-number-line_before_red"
      , ce = "form-payment__date-line"
      , ue = "form-payment__date-line_red"
      , le = "form-payment__date-line_before"
      , de = "form-payment__date-line_before_red"
      , fe = "card-token-options"
      , pe = "info_status-cont"
      , he = "form-payment__form"
      , me = "removed_card"
      , ge = "cvv-card_upd"
      , ve = "card-tokens-down"
      , ye = "card-token-content"
      , xe = "card-tokens"
      , we = "remove_card_cali_number-btn_no"
      , be = "remove_card_cali_number-btn_yes"
      , Te = "remove_card_cali_number-model"
      , Ce = "card_number_line"
      , _e = "card_number_line_before"
      , Se = "card_date_line"
      , Ee = "card_date_line_before"
      , ke = ".".concat(V)
      , Ae = ".".concat(W)
      , Le = ".".concat(U)
      , De = ".".concat(G)
      , Ne = ".".concat(X)
      , $e = ".".concat(z)
      , Be = ".".concat(K)
      , Oe = ".".concat(Y)
      , Me = ".".concat(J)
      , Pe = ".".concat(Z)
      , Re = ".".concat(Q)
      , Ie = ".".concat(ee)
      , Fe = ".".concat(te)
      , je = ".".concat(ne)
      , He = ".".concat(re)
      , qe = ".".concat(fe)
      , Ve = ".".concat(pe)
      , We = ".".concat(he)
      , Ue = ".".concat(ae)
      , Ge = ".".concat(le)
      , Xe = ".".concat(me)
      , ze = ".".concat(ge)
      , Ke = ".".concat(ve)
      , Ye = ".".concat(ye)
      , Je = ".".concat(xe)
      , Ze = ".".concat(we)
      , Qe = ".".concat(be)
      , et = ".".concat(Te)
      , tt = "#".concat(Ce)
      , nt = "#".concat(_e)
      , rt = "#".concat(Se)
      , it = "#".concat(Ee);
    d(),
    i(),
    t(),
    n(),
    e(),
    s(),
    o(),
    v(),
    c(),
    a()
}
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t, n) {
        if (oe.isFunction(t))
            return oe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return oe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (me.test(t))
                return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return Q.call(t, e) > -1 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = {};
        return oe.each(e.match(be) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        K.removeEventListener("DOMContentLoaded", a),
        e.removeEventListener("load", a),
        oe.ready()
    }
    function s() {
        this.expando = oe.expando + s.uid++
    }
    function c(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Ae, "-$&").toLowerCase(),
            n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? oe.parseJSON(n) : n)
                } catch (i) {}
                Ee.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function u(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return oe.css(e, t, "")
        }
        , c = s(), u = n && n[3] || (oe.cssNumber[t] ? "" : "px"), l = (oe.cssNumber[t] || "px" !== u && +c) && De.exec(oe.css(e, t));
        if (l && l[3] !== u) {
            u = u || l[3],
            n = n || [],
            l = +c || 1;
            do
                o = o || ".5",
                l /= o,
                oe.style(e, t, l + u);
            while (o !== (o = s() / c) && 1 !== o && --a)
        }
        return n && (l = +l || +c || 0,
        i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = l,
        r.end = i)),
        i
    }
    function l(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }
    function d(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"))
    }
    function f(e, t, n, r, i) {
        for (var o, a, s, c, u, f, p = t.createDocumentFragment(), h = [], m = 0, g = e.length; g > m; m++)
            if (o = e[m],
            o || 0 === o)
                if ("object" === oe.type(o))
                    oe.merge(h, o.nodeType ? [o] : o);
                else if (Re.test(o)) {
                    for (a = a || p.appendChild(t.createElement("div")),
                    s = (Oe.exec(o) || ["", ""])[1].toLowerCase(),
                    c = Pe[s] || Pe._default,
                    a.innerHTML = c[1] + oe.htmlPrefilter(o) + c[2],
                    f = c[0]; f--; )
                        a = a.lastChild;
                    oe.merge(h, a.childNodes),
                    a = p.firstChild,
                    a.textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (p.textContent = "",
        m = 0; o = h[m++]; )
            if (r && oe.inArray(o, r) > -1)
                i && i.push(o);
            else if (u = oe.contains(o.ownerDocument, o),
            a = l(p.appendChild(o), "script"),
            u && d(a),
            n)
                for (f = 0; o = a[f++]; )
                    Me.test(o.type || "") && n.push(o);
        return p
    }
    function p() {
        return !0
    }
    function h() {
        return !1
    }
    function m() {
        try {
            return K.activeElement
        } catch (e) {}
    }
    function g(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                g(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        i === !1)
            i = h;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        i = function(e) {
            return oe().off(e),
            a.apply(this, arguments)
        }
        ,
        i.guid = a.guid || (a.guid = oe.guid++)),
        e.each(function() {
            oe.event.add(this, t, i, r, n)
        })
    }
    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function x(e) {
        var t = We.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        var n, r, i, o, a, s, c, u;
        if (1 === t.nodeType) {
            if (Se.hasData(e) && (o = Se.access(e),
            a = Se.set(t, o),
            u = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in u)
                    for (n = 0,
                    r = u[i].length; r > n; n++)
                        oe.event.add(t, i, u[i][n])
            }
            Ee.hasData(e) && (s = Ee.access(e),
            c = oe.extend({}, s),
            Ee.set(t, c))
        }
    }
    function b(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Be.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function T(e, t, n, r) {
        t = J.apply([], t);
        var i, o, a, s, c, u, d = 0, p = e.length, h = p - 1, m = t[0], g = oe.isFunction(m);
        if (g || p > 1 && "string" == typeof m && !re.checkClone && Ve.test(m))
            return e.each(function(i) {
                var o = e.eq(i);
                g && (t[0] = m.call(this, i, o.html())),
                T(o, t, n, r)
            });
        if (p && (i = f(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (a = oe.map(l(i, "script"), y),
            s = a.length; p > d; d++)
                c = i,
                d !== h && (c = oe.clone(c, !0, !0),
                s && oe.merge(a, l(c, "script"))),
                n.call(e[d], c, d);
            if (s)
                for (u = a[a.length - 1].ownerDocument,
                oe.map(a, x),
                d = 0; s > d; d++)
                    c = a[d],
                    Me.test(c.type || "") && !Se.access(c, "globalEval") && oe.contains(u, c) && (c.src ? oe._evalUrl && oe._evalUrl(c.src) : oe.globalEval(c.textContent.replace(Ue, "")))
        }
        return e
    }
    function C(e, t, n) {
        for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || oe.cleanData(l(r)),
            r.parentNode && (n && oe.contains(r.ownerDocument, r) && d(l(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function _(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body)
          , r = oe.css(n[0], "display");
        return n.detach(),
        r
    }
    function S(e) {
        var t = K
          , n = Xe[e];
        return n || (n = _(e, t),
        "none" !== n && n || (Ge = (Ge || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = Ge[0].contentDocument,
        t.write(),
        t.close(),
        n = _(e, t),
        Ge.detach()),
        Xe[e] = n),
        n
    }
    function E(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || Ye(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== a && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)),
        n && !re.pixelMarginRight() && Ke.test(a) && ze.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o),
        void 0 !== a ? a + "" : a
    }
    function k(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function A(e) {
        if (e in rt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; )
            if (e = nt[n] + t,
            e in rt)
                return e
    }
    function L(e, t, n) {
        var r = De.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function D(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += oe.css(e, n + Ne[o], !0, i)),
            r ? ("content" === n && (a -= oe.css(e, "padding" + Ne[o], !0, i)),
            "margin" !== n && (a -= oe.css(e, "border" + Ne[o] + "Width", !0, i))) : (a += oe.css(e, "padding" + Ne[o], !0, i),
            "padding" !== n && (a += oe.css(e, "border" + Ne[o] + "Width", !0, i)));
        return a
    }
    function N(t, n, r) {
        var i = !0
          , o = "width" === n ? t.offsetWidth : t.offsetHeight
          , a = Ye(t)
          , s = "border-box" === oe.css(t, "boxSizing", !1, a);
        if (K.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])),
        0 >= o || null == o) {
            if (o = E(t, n, a),
            (0 > o || null == o) && (o = t.style[n]),
            Ke.test(o))
                return o;
            i = s && (re.boxSizingReliable() || o === t.style[n]),
            o = parseFloat(o) || 0
        }
        return o + D(t, n, r || (s ? "border" : "content"), i, a) + "px"
    }
    function $(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            r = e[a],
            r.style && (o[a] = Se.get(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && $e(r) && (o[a] = Se.access(r, "olddisplay", S(r.nodeName)))) : (i = $e(r),
            "none" === n && i || Se.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function B(e, t, n, r, i) {
        return new B.prototype.init(e,t,n,r,i)
    }
    function O() {
        return e.setTimeout(function() {
            it = void 0
        }),
        it = oe.now()
    }
    function M(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Ne[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function P(e, t, n) {
        for (var r, i = (F.tweeners[t] || []).concat(F.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function R(e, t, n) {
        var r, i, o, a, s, c, u, l, d = this, f = {}, p = e.style, h = e.nodeType && $e(e), m = Se.get(e, "fxshow");
        n.queue || (s = oe._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        c = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || c()
        }
        ),
        s.unqueued++,
        d.always(function() {
            d.always(function() {
                s.unqueued--,
                oe.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        u = oe.css(e, "display"),
        l = "none" === u ? Se.get(e, "olddisplay") || S(e.nodeName) : u,
        "inline" === l && "none" === oe.css(e, "float") && (p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        d.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            at.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    h = !0
                }
                f[r] = m && m[r] || oe.style(e, r)
            } else
                u = void 0;
        if (oe.isEmptyObject(f))
            "inline" === ("none" === u ? S(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden"in m && (h = m.hidden) : m = Se.access(e, "fxshow", {}),
            o && (m.hidden = !h),
            h ? oe(e).show() : d.done(function() {
                oe(e).hide()
            }),
            d.done(function() {
                var t;
                Se.remove(e, "fxshow");
                for (t in f)
                    oe.style(e, t, f[t])
            });
            for (r in f)
                a = P(h ? m[r] : 0, r, d),
                r in m || (m[r] = a.start,
                h && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function I(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = oe.camelCase(n),
            i = t[r],
            o = e[n],
            oe.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = oe.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function F(e, t, n) {
        var r, i, o = 0, a = F.prefilters.length, s = oe.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (i)
                return !1;
            for (var t = it || O(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, c = u.tweens.length; c > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            1 > o && c ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: oe.extend({}, t),
            opts: oe.extend(!0, {
                specialEasing: {},
                easing: oe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: it || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), l = u.props;
        for (I(l, u.opts.specialEasing); a > o; o++)
            if (r = F.prefilters[o].call(u, e, l, u.opts))
                return oe.isFunction(r.stop) && (oe._queueHooks(u.elem, u.opts.queue).stop = oe.proxy(r.stop, r)),
                r;
        return oe.map(l, P, u),
        oe.isFunction(u.opts.start) && u.opts.start.call(e, u),
        oe.fx.timer(oe.extend(c, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function j(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function H(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(be) || [];
            if (oe.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function q(e, t, n, r) {
        function i(s) {
            var c;
            return o[s] = !0,
            oe.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(c = u) : void 0 : (t.dataTypes.unshift(u),
                i(u),
                !1)
            }),
            c
        }
        var o = {}
          , a = e === St;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function V(e, t) {
        var n, r, i = oe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r),
        e
    }
    function W(e, t, n) {
        for (var r, i, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; )
            c.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    c.unshift(i);
                    break
                }
        if (c[0]in n)
            o = c[0];
        else {
            for (i in n) {
                if (!c[0] || e.converters[i + " " + c[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== c[0] && c.unshift(o),
        n[o]) : void 0
    }
    function U(e, t, n, r) {
        var i, o, a, s, c, u = {}, l = e.dataTypes.slice();
        if (l[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            c = o,
            o = l.shift())
                if ("*" === o)
                    o = c;
                else if ("*" !== c && c !== o) {
                    if (a = u[c + " " + o] || u["* " + o],
                    !a)
                        for (i in u)
                            if (s = i.split(" "),
                            s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                l.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + c + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function G(e, t, n, r) {
        var i;
        if (oe.isArray(t))
            oe.each(t, function(t, i) {
                n || Lt.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== oe.type(t))
            r(e, t);
        else
            for (i in t)
                G(e + "[" + i + "]", t[i], n, r)
    }
    function X(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var z = []
      , K = e.document
      , Y = z.slice
      , J = z.concat
      , Z = z.push
      , Q = z.indexOf
      , ee = {}
      , te = ee.toString
      , ne = ee.hasOwnProperty
      , re = {}
      , ie = "2.2.1"
      , oe = function(e, t) {
        return new oe.fn.init(e,t)
    }
      , ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , se = /^-ms-/
      , ce = /-([\da-z])/gi
      , ue = function(e, t) {
        return t.toUpperCase()
    };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Z,
        sort: z.sort,
        splice: z.splice
    },
    oe.extend = oe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || oe.isFunction(a) || (a = {}),
        s === c && (a = this,
        s--); c > s; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    r = e[t],
                    a !== r && (u && r && (oe.isPlainObject(r) || (i = oe.isArray(r))) ? (i ? (i = !1,
                    o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {},
                    a[t] = oe.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === oe.type(e) && !e.nodeType && !oe.isWindow(e) && !(e.constructor && !ne.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = oe.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"),
            t.text = e,
            K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(ce, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++)
                    ;
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : Z.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Q.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                r = !t(e[o], o),
                r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o, a = 0, s = [];
            if (n(e))
                for (i = e.length; i > a; a++)
                    o = t(e[a], a, r),
                    null != o && s.push(o);
            else
                for (a in e)
                    o = t(e[a], a, r),
                    null != o && s.push(o);
            return J.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            oe.isFunction(e) ? (r = Y.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(Y.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || oe.guid++,
            i) : void 0
        },
        now: Date.now,
        support: re
    }),
    "function" == typeof Symbol && (oe.fn[Symbol.iterator] = z[Symbol.iterator]),
    oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var le = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, c, u, d, p, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!r && ((t ? t.ownerDocument || t : j) !== $ && N(t),
            t = t || $,
            O)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (i = u[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (h && (a = h.getElementById(i)) && I(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return Z.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName)
                            return Z.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (b.qsa && !U[e + " "] && (!M || !M.test(e))) {
                    if (1 !== m)
                        h = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = F),
                        d = S(e),
                        o = d.length,
                        c = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--; )
                            d[o] = c + " " + f(d[o]);
                        p = d.join(","),
                        h = ye.test(e) && l(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return Z.apply(n, h.querySelectorAll(p)),
                            n
                        } catch (g) {} finally {
                            s === F && t.removeAttribute("id")
                        }
                }
            }
            return k(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[F] = !0,
            e
        }
        function i(e) {
            var t = $.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function l(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = q++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, c, u, l = [H, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[F] || (t[F] = {}),
                            c = u[t.uniqueID] || (u[t.uniqueID] = {}),
                            (s = c[r]) && s[0] === H && s[1] === o)
                                return l[2] = s[2];
                            if (c[r] = l,
                            l[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, c = e.length, u = null != t; c > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                u && t.push(s));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[F] && (i = v(i)),
            o && !o[F] && (o = v(o, a)),
            r(function(r, a, s, c) {
                var u, l, d, f = [], p = [], h = a.length, v = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, f, e, s, c), x = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, x, s, c),
                i)
                    for (u = g(x, p),
                    i(u, [], s, c),
                    l = u.length; l--; )
                        (d = u[l]) && (x[p[l]] = !(y[p[l]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            l = x.length; l--; )
                                (d = x[l]) && u.push(y[l] = d);
                            o(null, x = [], u, c)
                        }
                        for (l = x.length; l--; )
                            (d = x[l]) && (u = o ? ee(r, d) : f[l]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else
                    x = g(x === a ? x.splice(h, x.length) : x),
                    o ? o(null, a, x, c) : Z.apply(a, x)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, c = p(function(e) {
                return e === t
            }, a, !0), u = p(function(e) {
                return ee(t, e) > -1
            }, a, !0), l = [function(e, n, r) {
                var i = !o && (r || n !== A) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
                return t = null,
                i
            }
            ]; i > s; s++)
                if (n = T.relative[e[s].type])
                    l = [p(h(l), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches),
                    n[F]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && h(l), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                    }
                    l.push(n)
                }
            return h(l)
        }
        function x(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , a = function(r, a, s, c, u) {
                var l, d, f, p = 0, h = "0", m = r && [], v = [], y = A, x = r || o && T.find.TAG("*", u), w = H += null == y ? 1 : Math.random() || .1, b = x.length;
                for (u && (A = a === $ || a || u); h !== b && null != (l = x[h]); h++) {
                    if (o && l) {
                        for (d = 0,
                        a || l.ownerDocument === $ || (N(l),
                        s = !O); f = e[d++]; )
                            if (f(l, a || $, s)) {
                                c.push(l);
                                break
                            }
                        u && (H = w)
                    }
                    i && ((l = !f && l) && p--,
                    r && m.push(l))
                }
                if (p += h,
                i && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = Y.call(c));
                        v = g(v)
                    }
                    Z.apply(c, v),
                    u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                }
                return u && (H = w,
                A = y),
                m
            };
            return i ? r(a) : a
        }
        var w, b, T, C, _, S, E, k, A, L, D, N, $, B, O, M, P, R, I, F = "sizzle" + 1 * new Date, j = e.document, H = 0, q = 0, V = n(), W = n(), U = n(), G = function(e, t) {
            return e === t && (D = !0),
            0
        }, X = 1 << 31, z = {}.hasOwnProperty, K = [], Y = K.pop, J = K.push, Z = K.push, Q = K.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), fe = new RegExp("^" + re + "$"), pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), be = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Te = function() {
            N()
        };
        try {
            Z.apply(K = Q.call(j.childNodes), j.childNodes),
            K[j.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: K.length ? function(e, t) {
                    J.apply(e, Q.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        b = t.support = {},
        _ = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        N = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : j;
            return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r,
            B = $.documentElement,
            O = !_($),
            (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
            b.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            b.getElementsByTagName = i(function(e) {
                return e.appendChild($.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            b.getElementsByClassName = ge.test($.getElementsByClassName),
            b.getById = i(function(e) {
                return B.appendChild(e).id = F,
                !$.getElementsByName || !$.getElementsByName(F).length
            }),
            b.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            T.filter.ID = function(e) {
                var t = e.replace(we, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete T.find.ID,
            T.filter.ID = function(e) {
                var t = e.replace(we, be);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            T.find.TAG = b.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            T.find.CLASS = b.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
            }
            ,
            P = [],
            M = [],
            (b.qsa = ge.test($.querySelectorAll)) && (i(function(e) {
                B.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + F + "-]").length || M.push("~="),
                e.querySelectorAll(":checked").length || M.push(":checked"),
                e.querySelectorAll("a#" + F + "+*").length || M.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = $.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                M.push(",.*:")
            })),
            (b.matchesSelector = ge.test(R = B.matches || B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = R.call(e, "div"),
                R.call(e, "[s!='']:x"),
                P.push("!=", oe)
            }),
            M = M.length && new RegExp(M.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = ge.test(B.compareDocumentPosition),
            I = t || ge.test(B.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            G = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === j && I(j, e) ? -1 : t === $ || t.ownerDocument === j && I(j, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], c = [t];
                if (!i || !o)
                    return e === $ ? -1 : t === $ ? 1 : i ? -1 : o ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                if (i === o)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    c.unshift(n);
                for (; s[r] === c[r]; )
                    r++;
                return r ? a(s[r], c[r]) : s[r] === j ? -1 : c[r] === j ? 1 : 0
            }
            ,
            $) : $
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== $ && N(e),
            n = n.replace(le, "='$1']"),
            b.matchesSelector && O && !U[n + " "] && (!P || !P.test(n)) && (!M || !M.test(n)))
                try {
                    var r = R.call(e, n);
                    if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return t(n, $, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && N(e),
            I(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && N(e);
            var n = T.attrHandle[t.toLowerCase()]
              , r = n && z.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : b.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (D = !b.detectDuplicates,
            L = !b.sortStable && e.slice(0),
            e.sort(G),
            D) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return L = null,
            e
        }
        ,
        C = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += C(t);
            return n
        }
        ,
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
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
                    return e[1] = e[1].replace(we, be),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(we, be),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = V[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && V(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, c) {
                        var u, l, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !c && !s, x = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (f = t; f = f[m]; )
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (f = g,
                                d = f[F] || (f[F] = {}),
                                l = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                u = l[e] || [],
                                p = u[0] === H && u[1],
                                x = p && u[2],
                                f = p && g.childNodes[p]; f = ++p && f && f[m] || (x = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++x && f === t) {
                                        l[e] = [H, p, x];
                                        break
                                    }
                            } else if (y && (f = t,
                            d = f[F] || (f[F] = {}),
                            l = d[f.uniqueID] || (d[f.uniqueID] = {}),
                            u = l[e] || [],
                            p = u[0] === H && u[1],
                            x = p),
                            x === !1)
                                for (; (f = ++p && f && f[m] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++x || (y && (d = f[F] || (f[F] = {}),
                                l = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                l[e] = [H, x]),
                                f !== t)); )
                                    ;
                            return x -= i,
                            x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            r = ee(e, i[a]),
                            e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = E(e.replace(se, "$1"));
                    return i[F] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, be),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, be).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === B
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            T.pseudos[w] = c(w);
        return d.prototype = T.filters = T.pseudos,
        T.setFilters = new d,
        S = t.tokenize = function(e, n) {
            var r, i, o, a, s, c, u, l = W[e + " "];
            if (l)
                return n ? 0 : l.slice(0);
            for (s = e,
            c = [],
            u = T.preFilter; s; ) {
                (!r || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s),
                c.push(o = [])),
                r = !1,
                (i = ue.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }),
                s = s.slice(r.length));
                for (a in T.filter)
                    !(i = pe[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : W(e, c).slice(0)
        }
        ,
        E = t.compile = function(e, t) {
            var n, r = [], i = [], o = U[e + " "];
            if (!o) {
                for (t || (t = S(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[F] ? r.push(o) : i.push(o);
                o = U(e, x(i, r)),
                o.selector = e
            }
            return o
        }
        ,
        k = t.select = function(e, t, n, r) {
            var i, o, a, s, c, u = "function" == typeof e && e, d = !r && S(e = u.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (o = d[0] = d[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(we, be), t) || [])[0],
                    !t)
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !T.relative[s = a.type]); )
                    if ((c = T.find[s]) && (r = c(a.matches[0].replace(we, be), ye.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && f(o),
                        !e)
                            return Z.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || E(e, d))(r, t, !O, n, !t || ye.test(e) && l(t.parentNode) || t),
            n
        }
        ,
        b.sortStable = F.split("").sort(G).join("") === F,
        b.detectDuplicates = !!D,
        N(),
        b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        b.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    oe.find = le,
    oe.expr = le.selectors,
    oe.expr[":"] = oe.expr.pseudos,
    oe.uniqueSort = oe.unique = le.uniqueSort,
    oe.text = le.getText,
    oe.isXMLDoc = le.isXML,
    oe.contains = le.contains;
    var de = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && oe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , fe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , pe = oe.expr.match.needsContext
      , he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , me = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    oe.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(oe(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (oe.contains(i[t], this))
                            return !0
                }));
            for (t = 0; n > t; t++)
                oe.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? oe.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e : e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = oe.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || ge,
        "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e),
            !r || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof oe ? t[0] : t,
                oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : K, !0)),
                he.test(r[1]) && oe.isPlainObject(t))
                    for (r in t)
                        oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = K.getElementById(r[2]),
            i && i.parentNode && (this.length = 1,
            this[0] = i),
            this.context = K,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        oe.makeArray(e, this))
    }
    ;
    ye.prototype = oe.fn,
    ge = oe(K);
    var xe = /^(?:parents|prev(?:Until|All))/
      , we = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (oe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Q.call(oe(e), this[0]) : Q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function(e) {
            return fe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return fe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, r) {
            var i = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = oe.filter(r, i)),
            this.length > 1 && (we[e] || oe.uniqueSort(i),
            xe.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var be = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, r, i, a = [], s = [], c = -1, u = function() {
            for (i = e.once,
            r = t = !0; s.length; c = -1)
                for (n = s.shift(); ++c < a.length; )
                    a[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = a.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (a = n ? [] : "")
        }, l = {
            add: function() {
                return a && (n && !t && (c = a.length - 1,
                s.push(n)),
                function r(t) {
                    oe.each(t, function(t, n) {
                        oe.isFunction(n) ? e.unique && l.has(n) || a.push(n) : n && n.length && "string" !== oe.type(n) && r(n)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return oe.each(arguments, function(e, t) {
                    for (var n; (n = oe.inArray(t, a, n)) > -1; )
                        a.splice(n, 1),
                        c >= n && c--
                }),
                this
            },
            has: function(e) {
                return e ? oe.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return i = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return i = s = [],
                n || (a = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                s.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ,
    oe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return oe.Deferred(function(n) {
                        oe.each(t, function(t, o) {
                            var a = oe.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? oe.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            oe.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = Y.call(arguments), a = o.length, s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0, c = 1 === s ? e : oe.Deferred(), u = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? Y.call(arguments) : i,
                    r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                r = new Array(a); a > i; i++)
                    o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(u(i, n, t)).done(u(i, r, o)).fail(c.reject) : --s;
            return s || c.resolveWith(r, o),
            c.promise()
        }
    });
    var Te;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e),
        this
    }
    ,
    oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0,
            e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(K, [oe]),
            oe.fn.triggerHandler && (oe(K).triggerHandler("ready"),
            oe(K).off("ready"))))
        }
    }),
    oe.ready.promise = function(t) {
        return Te || (Te = oe.Deferred(),
        "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll ? e.setTimeout(oe.ready) : (K.addEventListener("DOMContentLoaded", a),
        e.addEventListener("load", a))),
        Te.promise(t)
    }
    ,
    oe.ready.promise();
    var Ce = function(e, t, n, r, i, o, a) {
        var s = 0
          , c = e.length
          , u = null == n;
        if ("object" === oe.type(n)) {
            i = !0;
            for (s in n)
                Ce(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        oe.isFunction(r) || (a = !0),
        u && (a ? (t.call(e, r),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(oe(e), n)
        }
        )),
        t))
            for (; c > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : u ? t.call(e) : c ? t(e[0], n) : o
    }
      , _e = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    s.uid = 1,
    s.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!_e(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            _e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[t] = n;
            else
                for (r in t)
                    i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
            void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t)
                    this.register(e);
                else {
                    oe.isArray(t) ? r = t.concat(t.map(oe.camelCase)) : (i = oe.camelCase(t),
                    t in o ? r = [t, i] : (r = i,
                    r = r in o ? [r] : r.match(be) || [])),
                    n = r.length;
                    for (; n--; )
                        delete o[r[n]]
                }
                (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Se = new s
      , Ee = new s
      , ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ae = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Ee.hasData(e) || Se.hasData(e)
        },
        data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        removeData: function(e, t) {
            Ee.remove(e, t)
        },
        _data: function(e, t, n) {
            return Se.access(e, t, n)
        },
        _removeData: function(e, t) {
            Se.remove(e, t)
        }
    }),
    oe.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Ee.get(o),
                1 === o.nodeType && !Se.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (r = a[n].name,
                        0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)),
                        c(o, r, i[r])));
                    Se.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Ee.set(this, e)
            }) : Ce(this, function(t) {
                var n, r;
                if (o && void 0 === t) {
                    if (n = Ee.get(o, e) || Ee.get(o, e.replace(Ae, "-$&").toLowerCase()),
                    void 0 !== n)
                        return n;
                    if (r = oe.camelCase(e),
                    n = Ee.get(o, r),
                    void 0 !== n)
                        return n;
                    if (n = c(o, r, void 0),
                    void 0 !== n)
                        return n
                } else
                    r = oe.camelCase(e),
                    this.each(function() {
                        var n = Ee.get(this, r);
                        Ee.set(this, r, t),
                        e.indexOf("-") > -1 && void 0 !== n && Ee.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ee.remove(this, e)
            })
        }
    }),
    oe.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = Se.get(e, t),
            n && (!r || oe.isArray(n) ? r = Se.access(e, t, oe.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = oe._queueHooks(e, t)
              , a = function() {
                oe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Se.get(e, n) || Se.access(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    Se.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = oe.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                n = Se.get(o[a], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , De = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$","i")
      , Ne = ["Top", "Right", "Bottom", "Left"]
      , $e = function(e, t) {
        return e = t || e,
        "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    }
      , Be = /^(?:checkbox|radio)$/i
      , Oe = /<([\w:-]+)/
      , Me = /^$|\/(?:java|ecma)script/i
      , Pe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Pe.optgroup = Pe.option,
    Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead,
    Pe.th = Pe.td;
    var Re = /<|&#?\w+;/;
    !function() {
        var e = K.createDocumentFragment()
          , t = e.appendChild(K.createElement("div"))
          , n = K.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ie = /^key/
      , Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , je = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, c, u, l, d, f, p, h, m, g = Se.get(e);
            if (g)
                for (n.handler && (o = n,
                n = o.handler,
                i = o.selector),
                n.guid || (n.guid = oe.guid++),
                (c = g.events) || (c = g.events = {}),
                (a = g.handle) || (a = g.handle = function(t) {
                    return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(be) || [""],
                u = t.length; u--; )
                    s = je.exec(t[u]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (d = oe.event.special[p] || {},
                    p = (i ? d.delegateType : d.bindType) || p,
                    d = oe.event.special[p] || {},
                    l = oe.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && oe.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (f = c[p]) || (f = c[p] = [],
                    f.delegateCount = 0,
                    d.setup && d.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)),
                    d.add && (d.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, l) : f.push(l),
                    oe.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, c, u, l, d, f, p, h, m, g = Se.hasData(e) && Se.get(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""],
                u = t.length; u--; )
                    if (s = je.exec(t[u]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = oe.event.special[p] || {},
                        p = (r ? d.delegateType : d.bindType) || p,
                        f = c[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = f.length; o--; )
                            l = f[o],
                            !i && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(o, 1),
                            l.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, l));
                        a && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || oe.removeEvent(e, p, g.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            oe.event.remove(e, p + t[u], n, r, !0);
                oe.isEmptyObject(c) && Se.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, r, i, o, a = [], s = Y.call(arguments), c = (Se.get(this, "events") || {})[e.type] || [], u = oe.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = oe.event.handlers.call(this, e, c),
                t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o,
                        e.data = o.data,
                        r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, c = e.target;
            if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                        n = 0; s > n; n++)
                            o = t[n],
                            i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(c) > -1 : oe.find(i, this, null, [c]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K,
                r = n.documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[oe.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Fe.test(i) ? this.mouseHooks : Ie.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new oe.Event(o),
            t = r.length; t--; )
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = K),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== m() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === m() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e,
        t && oe.extend(this, t),
        this.timeStamp = e && e.timeStamp || oe.now(),
        void (this[oe.expando] = !0)) : new oe.Event(e,t)
    }
    ,
    oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p,
            e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p,
            e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p,
            e && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !oe.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    oe.fn.extend({
        on: function(e, t, n, r) {
            return g(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return g(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = h),
            this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , qe = /<script|<style|<link/i
      , Ve = /checked\s*(?:[^=]|=\s*.checked.)/i
      , We = /^true\/(.*)/
      , Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(He, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), c = oe.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (a = l(s),
                o = l(e),
                r = 0,
                i = o.length; i > r; r++)
                    b(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || l(e),
                    a = a || l(s),
                    r = 0,
                    i = o.length; i > r; r++)
                        w(o[r], a[r]);
                else
                    w(e, s);
            return a = l(s, "script"),
            a.length > 0 && d(a, !c && l(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (_e(n)) {
                    if (t = n[Se.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                        n[Se.expando] = void 0
                    }
                    n[Ee.expando] && (n[Ee.expando] = void 0)
                }
        }
    }),
    oe.fn.extend({
        domManip: T,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ce(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (oe.cleanData(l(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ce(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !Pe[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (oe.cleanData(l(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments, function(t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(l(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, r = [], i = oe(e), o = i.length - 1, a = 0; o >= a; a++)
                n = a === o ? this : this.clone(!0),
                oe(i[a])[t](n),
                Z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ge, Xe = {
        HTML: "block",
        BODY: "block"
    }, ze = /^margin/, Ke = new RegExp("^(" + Le + ")(?!px)[a-z%]+$","i"), Ye = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }, Je = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }, Ze = K.documentElement;
    !function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            s.innerHTML = "",
            Ze.appendChild(a);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top,
            o = "2px" === t.marginLeft,
            r = "4px" === t.width,
            s.style.marginRight = "50%",
            i = "4px" === t.marginRight,
            Ze.removeChild(a)
        }
        var n, r, i, o, a = K.createElement("div"), s = K.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        re.clearCloneStyle = "content-box" === s.style.backgroundClip,
        a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        a.appendChild(s),
        oe.extend(re, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            pixelMarginRight: function() {
                return null == r && t(),
                i
            },
            reliableMarginLeft: function() {
                return null == r && t(),
                o
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(K.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                s.style.width = "1px",
                Ze.appendChild(a),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Ze.removeChild(a),
                s.removeChild(n),
                t
            }
        }))
    }();
    var Qe = /^(none|table(?!-c[ea]).+)/
      , et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , tt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , nt = ["Webkit", "O", "Moz", "ms"]
      , rt = K.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = E(e, "opacity");
                        return "" === n ? "1" : n
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
                var i, o, a, s = oe.camelCase(t), c = e.style;
                return t = oe.cssProps[s] || (oe.cssProps[s] = A(s) || s),
                a = oe.cssHooks[t] || oe.cssHooks[s],
                void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t] : (o = typeof n,
                "string" === o && (i = De.exec(n)) && i[1] && (n = u(e, t, i),
                o = "number"),
                void (null != n && n === n && ("number" === o && (n += i && i[3] || (oe.cssNumber[s] ? "" : "px")),
                re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (c[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = A(s) || s),
            a = oe.cssHooks[t] || oe.cssHooks[s],
            a && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = E(e, t, r)),
            "normal" === i && t in tt && (i = tt[t]),
            "" === n || n ? (o = parseFloat(i),
            n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }),
    oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Qe.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Je(e, et, function() {
                    return N(e, t, r)
                }) : N(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i, o = r && Ye(e), a = r && D(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return a && (i = De.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = oe.css(e, t)),
                L(e, n, a)
            }
        }
    }),
    oe.cssHooks.marginLeft = k(re.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    oe.cssHooks.marginRight = k(re.reliableMarginRight, function(e, t) {
        return t ? Je(e, {
            display: "inline-block"
        }, E, [e, "marginRight"]) : void 0
    }),
    oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + Ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        ze.test(e) || (oe.cssHooks[e + t].set = L)
    }),
    oe.fn.extend({
        css: function(e, t) {
            return Ce(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (oe.isArray(t)) {
                    for (r = Ye(e),
                    i = t.length; i > a; a++)
                        o[t[a]] = oe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $e(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }),
    oe.Tween = B,
    B.prototype = {
        constructor: B,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || oe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : B.propHooks._default.set(this),
            this
        }
    },
    B.prototype.init.prototype = B.prototype,
    B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    oe.fx = B.prototype.init,
    oe.fx.step = {};
    var it, ot, at = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
    oe.Animation = oe.extend(F, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return u(n.elem, e, De.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            oe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(be);
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                F.tweeners[n] = F.tweeners[n] || [],
                F.tweeners[n].unshift(t)
        },
        prefilters: [R],
        prefilter: function(e, t) {
            t ? F.prefilters.unshift(e) : F.prefilters.push(e)
        }
    }),
    oe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            oe.isFunction(r.old) && r.old.call(this),
            r.queue && oe.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    oe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter($e).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = oe.isEmptyObject(e)
              , o = oe.speed(t, n, r)
              , a = function() {
                var t = F(this, oe.extend({}, e), o);
                (i || Se.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = oe.timers
                  , a = Se.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && st.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                (t || !n) && oe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = Se.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = oe.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                oe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    oe.each(["toggle", "show", "hide"], function(e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, r, i)
        }
    }),
    oe.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        oe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    oe.timers = [],
    oe.fx.tick = function() {
        var e, t = 0, n = oe.timers;
        for (it = oe.now(); t < n.length; t++)
            e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
        n.length || oe.fx.stop(),
        it = void 0
    }
    ,
    oe.fx.timer = function(e) {
        oe.timers.push(e),
        e() ? oe.fx.start() : oe.timers.pop()
    }
    ,
    oe.fx.interval = 13,
    oe.fx.start = function() {
        ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    }
    ,
    oe.fx.stop = function() {
        e.clearInterval(ot),
        ot = null
    }
    ,
    oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    oe.fn.delay = function(t, n) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = K.createElement("input")
          , t = K.createElement("select")
          , n = t.appendChild(K.createElement("option"));
        e.type = "checkbox",
        re.checkOn = "" !== e.value,
        re.optSelected = n.selected,
        t.disabled = !0,
        re.optDisabled = !n.disabled,
        e = K.createElement("input"),
        e.value = "t",
        e.type = "radio",
        re.radioValue = "t" === e.value
    }();
    var ct, ut = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Ce(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }),
    oe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(),
                i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t),
                null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = oe.propFix[n] || n,
                    oe.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ut[t] || oe.find.attr;
        ut[t] = function(e, t, r) {
            var i, o;
            return r || (o = ut[t],
            ut[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            ut[t] = o),
            i
        }
    });
    var lt = /^(?:input|select|textarea|button)$/i
      , dt = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Ce(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }),
    oe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t,
                i = oe.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    re.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var ft = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, j(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(be) || []; n = this[c++]; )
                    if (i = j(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(ft, " ")) {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = oe.trim(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, j(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(be) || []; n = this[c++]; )
                    if (i = j(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(ft, " ")) {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        s = oe.trim(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, j(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = oe(this),
                    o = e.match(be) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (void 0 === e || "boolean" === n) && (t = j(this),
                    t && Se.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Se.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + j(n) + " ").replace(ft, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var pt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = oe.isFunction(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e,
                null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
            "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)) : void 0
        }
    }),
    oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return oe.trim(e.value)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, c = 0 > i ? s : o ? i : 0; s > c; c++)
                        if (n = r[c],
                        (n.selected || c === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), a = i.length; a--; )
                        r = i[a],
                        (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
            }
        },
        re.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var ht = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, c, u, l, d, f = [r || K], p = ne.call(t, "type") ? t.type : t, h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || K,
            3 !== r.nodeType && 8 !== r.nodeType && !ht.test(p + oe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            u = p.indexOf(":") < 0 && "on" + p,
            t = t[oe.expando] ? t : new oe.Event(p,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : oe.makeArray(n, [t]),
            d = oe.event.special[p] || {},
            i || !d.trigger || d.trigger.apply(r, n) !== !1)) {
                if (!i && !d.noBubble && !oe.isWindow(r)) {
                    for (c = d.delegateType || p,
                    ht.test(c + p) || (a = a.parentNode); a; a = a.parentNode)
                        f.push(a),
                        s = a;
                    s === (r.ownerDocument || K) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = f[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? c : d.bindType || p,
                    l = (Se.get(a, "events") || {})[t.type] && Se.get(a, "handle"),
                    l && l.apply(a, n),
                    l = u && a[u],
                    l && l.apply && _e(a) && (t.result = l.apply(a, n),
                    t.result === !1 && t.preventDefault());
                return t.type = p,
                i || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !_e(r) || u && oe.isFunction(r[p]) && !oe.isWindow(r) && (s = r[u],
                s && (r[u] = null),
                oe.event.triggered = p,
                r[p](),
                oe.event.triggered = void 0,
                s && (r[u] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(r, null, t),
            r.isDefaultPrevented() && n.preventDefault()
        }
    }),
    oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    }),
    oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    re.focusin = "onfocusin"in e,
    re.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = Se.access(r, t);
                i || r.addEventListener(e, n, !0),
                Se.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = Se.access(r, t) - 1;
                i ? Se.access(r, t, i) : (r.removeEventListener(e, n, !0),
                Se.remove(r, t))
            }
        }
    });
    var mt = e.location
      , gt = oe.now()
      , vt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    oe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + t),
        n
    }
    ;
    var yt = /#.*$/
      , xt = /([?&])_=[^&]*/
      , wt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Tt = /^(?:GET|HEAD)$/
      , Ct = /^\/\//
      , _t = {}
      , St = {}
      , Et = "*/".concat("*")
      , kt = K.createElement("a");
    kt.href = mt.href,
    oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: bt.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Et,
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
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, oe.ajaxSettings), t) : V(oe.ajaxSettings, e)
        },
        ajaxPrefilter: H(_t),
        ajaxTransport: H(St),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var u, d, y, x, b, C = n;
                2 !== w && (w = 2,
                c && e.clearTimeout(c),
                i = void 0,
                a = s || "",
                T.readyState = t > 0 ? 4 : 0,
                u = t >= 200 && 300 > t || 304 === t,
                r && (x = W(f, T, r)),
                x = U(f, x, T, u),
                u ? (f.ifModified && (b = T.getResponseHeader("Last-Modified"),
                b && (oe.lastModified[o] = b),
                b = T.getResponseHeader("etag"),
                b && (oe.etag[o] = b)),
                204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state,
                d = x.data,
                y = x.error,
                u = !y)) : (y = C,
                (t || !C) && (C = "error",
                0 > t && (t = 0))),
                T.status = t,
                T.statusText = (n || C) + "",
                u ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]),
                T.statusCode(v),
                v = void 0,
                l && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? d : y]),
                g.fireWith(p, [T, C]),
                l && (h.trigger("ajaxComplete", [T, f]),
                --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, c, u, l, d, f = oe.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? oe(p) : oe.event, m = oe.Deferred(), g = oe.Callbacks("once memory"), v = f.statusCode || {}, y = {}, x = {}, w = 0, b = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!s)
                            for (s = {}; t = wt.exec(a); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = x[n] = x[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > w)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (m.promise(T).complete = g.add,
            T.success = T.done,
            T.error = T.fail,
            f.url = ((t || f.url || mt.href) + "").replace(yt, "").replace(Ct, mt.protocol + "//"),
            f.type = n.method || n.type || f.method || f.type,
            f.dataTypes = oe.trim(f.dataType || "*").toLowerCase().match(be) || [""],
            null == f.crossDomain) {
                u = K.createElement("a");
                try {
                    u.href = f.url,
                    u.href = u.href,
                    f.crossDomain = kt.protocol + "//" + kt.host != u.protocol + "//" + u.host
                } catch (C) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = oe.param(f.data, f.traditional)),
            q(_t, f, n, T),
            2 === w)
                return T;
            l = oe.event && f.global,
            l && 0 === oe.active++ && oe.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Tt.test(f.type),
            o = f.url,
            f.hasContent || (f.data && (o = f.url += (vt.test(o) ? "&" : "?") + f.data,
            delete f.data),
            f.cache === !1 && (f.url = xt.test(o) ? o.replace(xt, "$1_=" + gt++) : o + (vt.test(o) ? "&" : "?") + "_=" + gt++)),
            f.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]),
            oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])),
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType),
            T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers)
                T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === w))
                return T.abort();
            b = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[d](f[d]);
            if (i = q(St, f, n, T)) {
                if (T.readyState = 1,
                l && h.trigger("ajaxSend", [T, f]),
                2 === w)
                    return T;
                f.async && f.timeout > 0 && (c = e.setTimeout(function() {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    w = 1,
                    i.send(y, r)
                } catch (C) {
                    if (!(2 > w))
                        throw C;
                    r(-1, C)
                }
            } else
                r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }),
    oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, r, i) {
            return oe.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, oe.isPlainObject(e) && e))
        }
    }),
    oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }
    ,
    oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var At = /%20/g
      , Lt = /\[\]$/
      , Dt = /\r?\n/g
      , Nt = /^(?:submit|button|image|reset|file)$/i
      , $t = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
        oe.isArray(e) || e.jquery && !oe.isPlainObject(e))
            oe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                G(n, e[n], t, i);
        return r.join("&").replace(At, "+")
    }
    ,
    oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && $t.test(this.nodeName) && !Nt.test(e) && (this.checked || !Be.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    }),
    oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Bt = {
        0: 200,
        1223: 204
    }
      , Ot = oe.ajaxSettings.xhr();
    re.cors = !!Ot && "withCredentials"in Ot,
    re.ajax = Ot = !!Ot,
    oe.ajaxTransport(function(t) {
        var n, r;
        return re.cors || Ot && !t.crossDomain ? {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
                    for (a in t.xhrFields)
                        s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i)
                    s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                        "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }
                ,
                s.onload = n(),
                r = s.onerror = n("error"),
                void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }
                ,
                n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (c) {
                    if (n)
                        throw c
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }),
    oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e),
                e
            }
        }
    }),
    oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    K.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Mt = []
      , Pt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mt.pop() || oe.expando + "_" + gt++;
            return this[e] = !0,
            e
        }
    }),
    oe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(Pt, "$1" + i) : t.jsonp !== !1 && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return a || oe.error(i + " was not called"),
            a[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[i],
        e[i] = function() {
            a = arguments
        }
        ,
        r.always(function() {
            void 0 === o ? oe(e).removeProp(i) : e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            Mt.push(i)),
            a && oe.isFunction(o) && o(a[0]),
            a = o = void 0
        }),
        "script") : void 0
    }),
    re.createHTMLDocument = function() {
        var e = K.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || (re.createHTMLDocument ? K.implementation.createHTMLDocument("") : K);
        var r = he.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = f([e], t, i),
        i && i.length && oe(i).remove(),
        oe.merge([], r.childNodes))
    }
    ;
    var Rt = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Rt)
            return Rt.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = oe.trim(e.slice(s)),
        e = e.slice(0, s)),
        oe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && oe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(a, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    oe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, c, u, l = oe.css(e, "position"), d = oe(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = d.offset(),
            o = oe.css(e, "top"),
            c = oe.css(e, "left"),
            u = ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1,
            u ? (r = d.position(),
            a = r.top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(c) || 0),
            oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : d.css(f)
        }
    },
    oe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            return o ? (t = o.documentElement,
            oe.contains(t, r) ? (i = r.getBoundingClientRect(),
            n = X(o),
            {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                oe.nodeName(e[0], "html") || (r = e.offset()),
                r.top += oe.css(e[0], "borderTopWidth", !0),
                r.left += oe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - oe.css(n, "marginTop", !0),
                    left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ze
            })
        }
    }),
    oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function(r) {
            return Ce(this, function(e, r, i) {
                var o = X(e);
                return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }),
    oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = k(re.pixelPosition, function(e, n) {
            return n ? (n = E(e, t),
            Ke.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }),
    oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            oe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Ce(this, function(t, n, r) {
                    var i;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, a) : oe.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),
    oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    oe.fn.andSelf = oe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var It = e.jQuery
      , Ft = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = Ft),
        t && e.jQuery === oe && (e.jQuery = It),
        oe
    }
    ,
    t || (e.jQuery = e.$ = oe),
    oe
}),
function() {
    var e, t, n, r, i, o, a, s, c, u, l, d, f, p, h, m, g, v, y, x, w, b, T, C, _ = [].slice, S = [].indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    e = window.jQuery || window.Zepto || window.$,
    e.payment = {},
    e.payment.fn = {},
    e.fn.payment = function() {
        var t, n;
        return n = arguments[0],
        t = 2 <= arguments.length ? _.call(arguments, 1) : [],
        e.payment.fn[n].apply(this, t)
    }
    ,
    i = /(\d{1,4})/g,
    e.payment.cards = r = [{
        type: "maestro",
        patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
        format: i,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "prostir",
        patterns: [9, 626296],
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "visa",
        patterns: [4],
        format: i,
        length: [13, 16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "mastercard",
        patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "amex",
        patterns: [34, 37],
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: !0
    }, {
        type: "dinersclub",
        patterns: [30, 36, 38, 39],
        format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
        length: [14],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "discover",
        patterns: [60, 64, 65, 622],
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "unionpay",
        patterns: [62, 88],
        format: i,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: !1
    }],
    t = function(e) {
        var t, n, i, o, a, s, c, u;
        for (e = (e + "").replace(/\D/g, ""),
        o = 0,
        s = r.length; s > o; o++)
            for (t = r[o],
            u = t.patterns,
            a = 0,
            c = u.length; c > a; a++)
                if (i = u[a],
                n = i + "",
                e.substr(0, n.length) === n)
                    return t
    }
    ,
    n = function(e) {
        var t, n, i;
        for (n = 0,
        i = r.length; i > n; n++)
            if (t = r[n],
            t.type === e)
                return t
    }
    ,
    f = function(e) {
        var t, n, r, i, o, a;
        for (r = !0,
        i = 0,
        n = (e + "").split("").reverse(),
        o = 0,
        a = n.length; a > o; o++)
            t = n[o],
            t = parseInt(t, 10),
            (r = !r) && (t *= 2),
            t > 9 && (t -= 9),
            i += t;
        return i % 10 === 0
    }
    ,
    d = function(e) {
        var t;
        return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") || !(null == ("undefined" != typeof document && null !== document && null != (t = document.selection) ? t.createRange : void 0) || !document.selection.createRange().text);
    }
    ,
    T = function(e, t) {
        var n, r, i, o, a, s;
        try {
            r = t.prop("selectionStart")
        } catch (c) {
            o = c,
            r = null
        }
        return a = t.val(),
        t.val(e),
        null !== r && t.is(":focus") ? (r === a.length && (r = e.length),
        a !== e && (s = a.slice(r - 1, +r + 1 || 9e9),
        n = e.slice(r - 1, +r + 1 || 9e9),
        i = e[r],
        /\d/.test(i) && s === "" + i + " " && n === " " + i && (r += 1)),
        t.prop("selectionStart", r),
        t.prop("selectionEnd", r)) : void 0
    }
    ,
    v = function(e) {
        var t, n, r, i, o, a, s, c;
        for (null == e && (e = ""),
        r = "０１２３４５６７８９",
        i = "0123456789",
        a = "",
        t = e.split(""),
        s = 0,
        c = t.length; c > s; s++)
            n = t[s],
            o = r.indexOf(n),
            o > -1 && (n = i[o]),
            a += n;
        return a
    }
    ,
    g = function(t) {
        var n;
        return n = e(t.currentTarget),
        setTimeout(function() {
            var e;
            return e = n.val(),
            e = v(e),
            e = e.replace(/\D/g, ""),
            T(e, n)
        })
    }
    ,
    h = function(t) {
        var n;
        return n = e(t.currentTarget),
        setTimeout(function() {
            var t;
            return t = n.val(),
            t = v(t),
            t = e.payment.formatCardNumber(t),
            T(t, n)
        })
    }
    ,
    s = function(n) {
        var r, i, o, a, s, c, u;
        return o = String.fromCharCode(n.which),
        !/^\d+$/.test(o) || (r = e(n.currentTarget),
        u = r.val(),
        i = t(u + o),
        a = (u.replace(/\D/g, "") + o).length,
        c = 16,
        i && (c = i.length[i.length.length - 1]),
        a >= c || null != r.prop("selectionStart") && r.prop("selectionStart") !== u.length) ? void 0 : (s = i && "amex" === i.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/,
        s.test(u) ? (n.preventDefault(),
        setTimeout(function() {
            return r.val(u + " " + o)
        })) : s.test(u + o) ? (n.preventDefault(),
        setTimeout(function() {
            return r.val(u + o + " ")
        })) : void 0)
    }
    ,
    o = function(t) {
        var n, r;
        return n = e(t.currentTarget),
        r = n.val(),
        8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== r.length ? void 0 : /\d\s$/.test(r) ? (t.preventDefault(),
        setTimeout(function() {
            return n.val(r.replace(/\d\s$/, ""))
        })) : /\s\d?$/.test(r) ? (t.preventDefault(),
        setTimeout(function() {
            return n.val(r.replace(/\d$/, ""))
        })) : void 0
    }
    ,
    m = function(t) {
        var n;
        return n = e(t.currentTarget),
        setTimeout(function() {
            var t;
            return t = n.val(),
            t = v(t),
            t = e.payment.formatExpiry(t),
            T(t, n)
        })
    }
    ,
    c = function(t) {
        var n, r, i;
        return r = String.fromCharCode(t.which),
        /^\d+$/.test(r) ? (n = e(t.currentTarget),
        i = n.val() + r,
        /^\d$/.test(i) && "0" !== i && "1" !== i ? (t.preventDefault(),
        setTimeout(function() {
            return n.val("0" + i + " / ")
        })) : /^\d\d$/.test(i) ? (t.preventDefault(),
        setTimeout(function() {
            var e, t;
            return e = parseInt(i[0], 10),
            t = parseInt(i[1], 10),
            t > 2 && 0 !== e ? n.val("0" + e + " / " + t) : n.val("" + i + " / ")
        })) : void 0) : void 0
    }
    ,
    u = function(t) {
        var n, r, i;
        return r = String.fromCharCode(t.which),
        /^\d+$/.test(r) ? (n = e(t.currentTarget),
        i = n.val(),
        /^\d\d$/.test(i) ? n.val("" + i + " / ") : void 0) : void 0
    }
    ,
    l = function(t) {
        var n, r, i;
        return i = String.fromCharCode(t.which),
        "/" === i || " " === i ? (n = e(t.currentTarget),
        r = n.val(),
        /^\d$/.test(r) && "0" !== r ? n.val("0" + r + " / ") : void 0) : void 0
    }
    ,
    a = function(t) {
        var n, r;
        return n = e(t.currentTarget),
        r = n.val(),
        8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== r.length ? void 0 : /\d\s\/\s$/.test(r) ? (t.preventDefault(),
        setTimeout(function() {
            return n.val(r.replace(/\d\s\/\s$/, ""))
        })) : void 0
    }
    ,
    p = function(t) {
        var n;
        return n = e(t.currentTarget),
        setTimeout(function() {
            var e;
            return e = n.val(),
            e = v(e),
            e = e.replace(/\D/g, "").slice(0, 4),
            T(e, n)
        })
    }
    ,
    b = function(e) {
        var t;
        return !(!e.metaKey && !e.ctrlKey) || 32 !== e.which && (0 === e.which || (e.which < 33 || (t = String.fromCharCode(e.which),
        !!/[\d\s]/.test(t))))
    }
    ,
    x = function(n) {
        var r, i, o, a;
        return r = e(n.currentTarget),
        o = String.fromCharCode(n.which),
        /^\d+$/.test(o) && !d(r) ? (a = (r.val() + o).replace(/\D/g, ""),
        i = t(a),
        i ? a.length <= i.length[i.length.length - 1] : a.length <= 16) : void 0
    }
    ,
    w = function(t) {
        var n, r, i;
        return n = e(t.currentTarget),
        r = String.fromCharCode(t.which),
        /^\d+$/.test(r) && !d(n) ? (i = n.val() + r,
        i = i.replace(/\D/g, ""),
        !(i.length > 6) && void 0) : void 0
    }
    ,
    y = function(t) {
        var n, r, i;
        return n = e(t.currentTarget),
        r = String.fromCharCode(t.which),
        /^\d+$/.test(r) && !d(n) ? (i = n.val() + r,
        i.length <= 4) : void 0
    }
    ,
    C = function(t) {
        var n, i, o, a, s;
        return n = e(t.currentTarget),
        s = n.val(),
        a = e.payment.cardType(s) || "unknown",
        n.hasClass(a) ? void 0 : (i = function() {
            var e, t, n;
            for (n = [],
            e = 0,
            t = r.length; t > e; e++)
                o = r[e],
                n.push(o.type);
            return n
        }(),
        n.removeClass("unknown"),
        n.removeClass(i.join(" ")),
        n.addClass(a),
        n.toggleClass("identified", "unknown" !== a),
        n.trigger("payment.cardType", a))
    }
    ,
    e.payment.fn.formatCardCVC = function() {
        return this.on("keypress", b),
        this.on("keypress", y),
        this.on("paste", p),
        this.on("change", p),
        this.on("input", p),
        this
    }
    ,
    e.payment.fn.formatCardExpiry = function() {
        return this.on("keypress", b),
        this.on("keypress", w),
        this.on("keypress", c),
        this.on("keypress", l),
        this.on("keypress", u),
        this.on("keydown", a),
        this.on("change", m),
        this.on("input", m),
        this
    }
    ,
    e.payment.fn.formatCardNumber = function() {
        return this.on("keypress", b),
        this.on("keypress", x),
        this.on("keypress", s),
        this.on("keydown", o),
        this.on("keyup", C),
        this.on("paste", h),
        this.on("change", h),
        this.on("input", h),
        this.on("input", C),
        this
    }
    ,
    e.payment.fn.restrictNumeric = function() {
        return this.on("keypress", b),
        this.on("paste", g),
        this.on("change", g),
        this.on("input", g),
        this
    }
    ,
    e.payment.fn.cardExpiryVal = function() {
        return e.payment.cardExpiryVal(e(this).val())
    }
    ,
    e.payment.cardExpiryVal = function(e) {
        var t, n, r, i;
        return i = e.split(/[\s\/]+/, 2),
        t = i[0],
        r = i[1],
        2 === (null != r ? r.length : void 0) && /^\d+$/.test(r) && (n = (new Date).getFullYear(),
        n = n.toString().slice(0, 2),
        r = n + r),
        t = parseInt(t, 10),
        r = parseInt(r, 10),
        {
            month: t,
            year: r
        }
    }
    ,
    e.payment.validateCardNumber = function(e) {
        var n, r;
        return e = (e + "").replace(/\s+|-/g, ""),
        !!/^\d+$/.test(e) && (n = t(e),
        !!n && (r = e.length,
        S.call(n.length, r) >= 0 && (n.luhn === !1 || f(e))))
    }
    ,
    e.payment.validateCardExpiry = function(t, n) {
        var r, i, o;
        return "object" == typeof t && "month"in t && (o = t,
        t = o.month,
        n = o.year),
        !(!t || !n) && (t = e.trim(t),
        n = e.trim(n),
        !!(/^\d+$/.test(t) && /^\d+$/.test(n) && t >= 1 && 12 >= t) && (2 === n.length && (n = 70 > n ? "20" + n : "19" + n),
        4 === n.length && (i = new Date(n,t),
        r = new Date,
        i.setMonth(i.getMonth() - 1),
        i.setMonth(i.getMonth() + 1, 1),
        i > r)))
    }
    ,
    e.payment.validateCardCVC = function(t, r) {
        var i, o;
        return t = e.trim(t),
        !!/^\d+$/.test(t) && (i = n(r),
        null != i ? (o = t.length,
        S.call(i.cvcLength, o) >= 0) : t.length >= 3 && t.length <= 4)
    }
    ,
    e.payment.cardType = function(e) {
        var n;
        return e ? (null != (n = t(e)) ? n.type : void 0) || null : null
    }
    ,
    e.payment.formatCardNumber = function(n) {
        var r, i, o, a;
        return n = n.replace(/\D/g, ""),
        (r = t(n)) ? (o = r.length[r.length.length - 1],
        n = n.slice(0, o),
        r.format.global ? null != (a = n.match(r.format)) ? a.join(" ") : void 0 : (i = r.format.exec(n),
        null != i ? (i.shift(),
        i = e.grep(i, function(e) {
            return e
        }),
        i.join(" ")) : void 0)) : n
    }
    ,
    e.payment.formatExpiry = function(e) {
        var t, n, r, i;
        return (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "",
        r = n[2] || "",
        i = n[3] || "",
        i.length > 0 ? r = " / " : " /" === r ? (t = t.substring(0, 1),
        r = "") : 2 === t.length || r.length > 0 ? r = " / " : 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t,
        r = " / "),
        t + r + i) : ""
    }
}
.call(this);
var visualEffect = function() {
    function e(e, t, n) {
        var r = $(e)
          , i = $(t);
        window.innerWidth > 767 && (r.focus(function() {
            i.addClass(n)
        }),
        r.focusout(function() {
            i.removeClass(n)
        }))
    }
    function t(e, t, n, r) {
        var i = $(e)
          , o = $(t);
        window.innerWidth > 767 && i.hover(function() {
            o.attr("fill", r)
        }, function() {
            o.attr("fill", n)
        })
    }
    var n = function(t, n, r) {
        e(t, n, r)
    }
      , r = function(e, n, r, i) {
        t(e, n, r, i)
    };
    return {
        initFocus: n,
        initHoverSvg: r
    }
}();
$(document).ready(function() {
    visualEffect.initFocus(".form-payment__card-number", ".form-payment__card-number-title", "color-general"),
    visualEffect.initFocus(".form-payment__date", ".form-payment__date-title", "color-general"),
    visualEffect.initFocus(".form-payment__cvv", ".form-payment__cvv-title", "color-general"),
    visualEffect.initFocus(".form-payment__lookup", ".form-payment__lookup-title", "color-general"),
    visualEffect.initFocus(".form-payment__verify_code", ".form-payment__lookup-title", "color-general"),
    visualEffect.initFocus(".form-payment__otp", ".form-payment__otp-title", "color-general"),
    visualEffect.initFocus(".sending-email__input", ".sending-email__title", "color-general"),
    visualEffect.initHoverSvg(".form-payment__lock", ".form-payment__lock-inner", "#dadee4", "#7f8282")
});
var validateForm = function() {
    function e(e) {
        window.cvvBlockOn && ($(e).on("focus", function() {
            $(".cvv-card_upd").css("display", "block")
        }),
        $(e).on("focusout", function() {
            $(".cvv-card_upd").css("display", "none")
        }))
    }
    function t(e) {
        window.redLineOn && $(e).on("focusout", function() {
            var e = $(this).val().replace(/\s/g, "");
            e.length > 0 && 16 !== e.length && ($("#card_number_line").removeClass("form-payment__card-number-line").addClass("form-payment__card-number-line_red"),
            $("#card_number_line_before").removeClass("form-payment__card-number-line_before").addClass("form-payment__card-number-line_before_red"))
        })
    }
    function n(e) {
        window.redLineOn && $(e).on("focusout", function() {
            var e = $(this).val().replace(/\s/g, "");
            e.length > 0 && 5 !== e.length && ($("#card_date_line").removeClass("form-payment__date-line").addClass("form-payment__date-line_red"),
            $("#card_date_line_before").removeClass("form-payment__date-line_before").addClass("form-payment__date-line_before_red"))
        })
    }
    function r(e, t) {
        var n, r, i = $(e), o = new RegExp(/^\d{0,16}$/g), a = function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                0 !== n && n % 4 === 0 && (window.cardTypeON ? t.push(" ") : t.push(" ")),
                t.push(e[n]);
            return t.join("")
        }, s = function(e) {
            var t = e.replace(new RegExp(/[^\d]/,"g"), "");
            return t
        }, c = function(e, t) {
            return Math.floor(e / (t + 1))
        }, u = function(e) {
            var t = e.target;
            n = t.value,
            r = t.selectionEnd
        }, l = function(i) {
            var u, l = i.target, d = s(l.value);
            d.match(o) ? (d = a(d),
            u = r - c(r, 4) + c(r + (d.length - n.length), 4) + (s(d).length - s(n).length),
            "" !== d ? l.value = d : l.value = "") : (l.value = n,
            u = r),
            l.setSelectionRange(u, u),
            19 === $(this).val().length && m(t, e)
        };
        i.on("keydown", u),
        i.on("input", l)
    }
    function i(e, t, n) {
        var r = $(e);
        r.payment("formatCardExpiry"),
        r.on("input change blur keyup", function(e) {
            (e.keyCode < 37 || e.keyCode > 40) && 7 === $(this).prop("selectionStart") && m(t, n)
        })
    }
    function o(e) {
        var t = e || window.event
          , n = t.keyCode || t.which;
        n = String.fromCharCode(n);
        var r = /[0-9]/;
        r.test(n) || (t.returnValue = !1,
        t.preventDefault && t.preventDefault())
    }
    function a(e) {
        var t = $(e);
        t.on("keypress", function(e) {
            13 == e.keyCode && (y(".form-payment__form", ".form-payment__card-number", e) ? ($(".form-payment__form").find("input, textearea, select").each(function() {
                if ("card-alias" !== $(this).attr("name")) {
                    var e = $(this).val().trim().replace(/\s/g, "").replace(/[\-]/g, "");
                    $(this).val(e)
                }
            }),
            $(".form-payment__form-preloader").addClass("form-payment__form-preloader-active"),
            $form = $(".form-payment__form"),
            $("<input>").attr({
                value: document.referrer,
                type: "hidden",
                name: "referer"
            }).appendTo($form),
            $form.submit()) : event.preventDefault()),
            o(e)
        })
    }
    function s(e) {
        var t, n = $(e);
        n.on("input change blur keyup", function() {
            t = $(this).val().replace(/[^\d]/g, "").substring(0, 6),
            t = "" != t ? t.match(/.{1,2}/g).join("-") : "",
            $(this).val(t);
            var e = $(this).val();
            $(this).val(""),
            $(this).val(e)
        })
    }
    function c(e) {
        var t, n = $(e);
        n.on("input change blur keyup", function() {
            t = $(this).val().replace(/[^\d]/g, "").substring(0, 2),
            $(this).val(t);
            var e = $(this).val();
            $(this).val(""),
            $(this).val(e)
        })
    }
    function u(e) {
        var t, n = $(e);
        n.on("input change blur keyup", function() {
            t = $(this).val().replace(/[^\d]/g, "").substring(0, 20),
            t = "" != t ? t.match(/.{1,2}/g).join("-") : "",
            $(this).val(t);
            var e = $(this).val();
            $(this).val(""),
            $(this).val(e)
        })
    }
    function l(e) {
        return 7 === e.length && (!window.redLineOn || ($("#card_date_line").addClass("form-payment__date-line").removeClass("form-payment__date-line_red"),
        $("#card_date_line_before").addClass("form-payment__date-line_before").removeClass("form-payment__date-line_before_red"),
        !0))
    }
    function d(e, t) {
        var n = $(e)
          , r = $(t.classForCardType)
          , i = function() {
            var e = n.val().replace(/\s/g, "");
            window.cardTypeON && (e.length >= 6 && e.slice(0, 6) !== b && (b = e.slice(0, 6),
            f(e)),
            b && e.length < 6 && (b = "",
            $(".form-payment__card-bank").css("content", ""))),
            r.removeClass(t.classVisa),
            r.removeClass(t.classMasterCard),
            r.removeClass(t.classProstir),
            r.removeClass(t.classMaestro);
            var i = $.payment.cardType(e);
            "visa" === i ? r.addClass(t.classVisa) : "mastercard" === i ? r.addClass(t.classMasterCard) : "prostir" === i ? r.addClass(t.classProstir) : "maestro" === i && r.addClass(t.classMaestro)
        };
        window.forceCreateCaredTypeDom && i(),
        n.on("input change blur", i)
    }
    function f(e) {
        var t = "/cards/bank_info";
        fetch(t, {
            method: "POST",
            body: JSON.stringify({
                card_bin: e
            })
        }).then(function(e) {
            return e.json()
        }).then(function(e) {
            e && $(".form-payment__card-bank").css("content", "url(" + e + ")")
        })
    }
    function p(e) {
        var t, n = $(e), r = !1;
        return t = $.payment.cardType(n.val()),
        r = "visa" === t || "mastercard" === t || "prostir" === t || "maestro" === t
    }
    function h(e, t) {
        var n, r = e;
        n = t ? $(t) : r.next().next(),
        r.focus(),
        n.css("display", "block"),
        setTimeout(function() {
            n.css("display", "none")
        }, 3e3)
    }
    function m(e, t) {
        $(e).find("input, textearea, select").each(function(e, n) {
            "card_number" !== $(this).attr("name") || $(this).is(":disabled") || ($.payment.validateCardNumber($(this).val().trim()) && p(t) ? (window.redLineOn && ($("#card_number_line").addClass("form-payment__card-number-line").removeClass("form-payment__card-number-line_red"),
            $("#card_number_line_before").addClass("form-payment__card-number-line_before").removeClass("form-payment__card-number-line_before_red")),
            T.length - 1 !== e && $("input[name='" + T[e + 1].name + "']").focus()) : window.redLineOn && ($("#card_number_line").removeClass("form-payment__card-number-line").addClass("form-payment__card-number-line_red"),
            $("#card_number_line_before").removeClass("form-payment__card-number-line_before").addClass("form-payment__card-number-line_before_red"))),
            "expire_date" === $(this).attr("name") && (l($(this).val()) && $.payment.validateCardNumber($(".form-payment__card-number").val().trim()) && p(".form-payment__card-number") || l($(this).val()) && $(".form-payment__card-number").is(":disabled")) && T.length - 1 !== e && $("input[name='" + T[e + 1].name + "']").focus()
        })
    }
    function g(e) {
        var t = $(e)
          , n = !0;
        t.find("input, textearea, select").each(function(e, t) {
            window.aliasesMod || !n || $(t).attr("disabled") || ($(t).focus(),
            n = !1);
            var r = {
                number: e,
                name: $(t).attr("name")
            };
            $(t).attr("name") && T.push(r)
        })
    }
    function v(e) {
        return !isNaN(e - 0) && null !== e && "" !== e && e !== !1
    }
    function y(e, t, n) {
        var r = $(e)
          , i = !0;
        return r.find("input, textearea, select").each(function() {
            if (!(window.aliasesModCard || "card_number" !== $(this).attr("name") || $(this).is(":disabled") || $.payment.validateCardNumber($(this).val().trim()) && p(t)))
                return h($(this), ".form-payment__error-card-number"),
                i = !1,
                !1;
            if ("expire_date" === $(this).attr("name") && !l($(this).val()))
                return h($(this)),
                i = !1,
                !1;
            if ("cvv" === $(this).attr("name") && (3 !== $(this).val().length || !v($(this).val())))
                return h($(this)),
                i = !1,
                !1;
            if ("lookup_code" === $(this).attr("name") && 6 !== $(this).val().replace(/\s/g, "").replace(/[\-]/g, "").length)
                return h($(this)),
                i = !1,
                !1;
            if ("asi_code" === $(this).attr("name")) {
                var e = $(this).val().replace(/\s/g, "");
                if (2 !== e.length)
                    return h($(this)),
                    i = !1,
                    !1
            }
            return "otp_code" === $(this).attr("name") && ($(this).val().replace(/\s/g, "").replace(/[\-]/g, "").length < 2 || $(this).val().replace(/\s/g, "").replace(/[\-]/g, "").length > 20) ? (h($(this)),
            i = !1,
            !1) : window.aliasesMod || "" !== $(this).val().trim() ? void 0 : (h($(this)),
            i = !1,
            !1)
        }),
        i
    }
    function x(e, t) {
        var n = $(e + " input[type=submit]")
          , r = $(e);
        n.on("click", function(n) {
            y(e, t, n) ? (r.find("input, textearea, select").each(function() {
                if ("card-alias" !== $(this).attr("name")) {
                    var e = $(this).val().trim().replace(/\s/g, "").replace(/[\-]/g, "");
                    $(this).val(e)
                }
            }),
            $(".form-payment__form-preloader").addClass("form-payment__form-preloader-active"),
            $("<input>").attr({
                value: document.referrer,
                type: "hidden",
                name: "referer"
            }).appendTo(r)) : n.preventDefault()
        })
    }
    var w = function(o, l, f, h, m, v, y, w) {
        e(m),
        x(o, l),
        r(l, o),
        d(l, h),
        p(l),
        i(f, o, l),
        a(m),
        s(v),
        c(y),
        u(w),
        g(o),
        t(l),
        n(f)
    }
      , b = ""
      , T = [];
    return {
        init: w
    }
}();
$(document).ready(function() {
    window.cardTypeON ? window.cardTypeLine = "form-payment__card-type" : window.cardTypeLine = "form-payment__card-number-line";
    var e = {
        classForCardType: "." + window.cardTypeLine,
        classVisa: window.cardTypeLine + "-visa",
        classMasterCard: window.cardTypeLine + "-master",
        classProstir: window.cardTypeLine + "-prostir",
        classMaestro: window.cardTypeLine + "-maestro"
    };
    validateForm.init(".form-payment__form", ".form-payment__card-number", ".form-payment__date", e, ".form-payment__cvv", ".form-payment__lookup", ".form-payment__verify_code", ".form-payment__otp", ".form-payment__invisible")
});
var backLink = function() {
    function e(e, t, n) {
        var r = e.replace(/&amp;/g, "&");
        window.setTimeout(function() {
            "_self" === n ? window.location = r : window.top.location = r
        }, t)
    }
    return {
        init: e
    }
}()
  , sendEmail = function() {
    function e(e) {
        u = e
    }
    function t(e) {
        var t = /^(?:[a-z0-9!#$%&amp;'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return t.test(e)
    }
    function n(e, n) {
        $(e).on("input", function() {
            l = $(this).val();
            var e = t(l);
            e ? $(n).prop("disabled", !1) : $(n).prop("disabled", !0)
        })
    }
    function r(e, t) {
        $(e).on("click", function() {
            a(t, u.preloader, u.success, u.error, u.input)
        })
    }
    function i(e, n) {
        $(e).keyup(function(e) {
            var r = t(l);
            13 == e.keyCode && r && a(n, u.preloader, u.success, u.error, u.input)
        })
    }
    function o(e, t, n) {
        $(e).on("click", function() {
            $(t).removeClass("visible"),
            $(n).removeClass("visible")
        })
    }
    function a(e, t, n, r, i) {
        $(t).addClass("visible"),
        $.ajax({
            url: e,
            type: "POST",
            data: JSON.stringify({
                send_email: l
            }),
            contentType: "application/json",
            success: function(e, r) {
                $(n).addClass("visible"),
                $(t).removeClass("visible"),
                $(i).val("")
            },
            error: function(e, n) {
                $(r).addClass("visible"),
                $(t).removeClass("visible")
            }
        })
    }
    function s() {
        function t(e) {
            o(u.closeInfoBtn, u.success, u.error),
            n(u.input, u.btn),
            r(u.btn, e),
            i(u.input, e)
        }
        return {
            initConfig: t,
            setClasses: e
        }
    }
    var c, u = {
        btn: "",
        input: "",
        preloader: "",
        success: "",
        error: "",
        closeInfoBtn: ""
    }, l = "";
    return {
        getInstance: function() {
            return c || (c = s()),
            c
        }
    }
}();
$(document).ready(function() {
    var e = $(".form__sending-email-block").data("send-url")
      , t = sendEmail.getInstance();
    t.setClasses({
        btn: ".sending-email__btn",
        input: ".sending-email__input",
        preloader: ".sending-email__preloader",
        success: ".sending-email__request-status-success",
        error: ".sending-email__request-status-failed",
        closeInfoBtn: ".sending-email__request-close-btn"
    }),
    t.initConfig(e)
});
var sessionD = function() {
    function e(e) {
        var r = t();
        window.requestIdleCallback ? requestIdleCallback(function() {
            Fingerprint2.get(function(t) {
                var i = t.map(function(e) {
                    return e.value
                })
                  , o = Fingerprint2.x64hash128(i.join(""), 31);
                n(e, o, r)
            })
        }) : setTimeout(function() {
            Fingerprint2.get(function(t) {
                var i = t.map(function(e) {
                    return e.value
                })
                  , o = Fingerprint2.x64hash128(i.join(""), 31);
                n(e, o, r)
            })
        }, 500)
    }
    function t() {
        var e, t, n, r, i, o, a, s;
        try {
            e = window.screen.colorDepth
        } catch (c) {
            e = ""
        }
        try {
            t = window.navigator.language
        } catch (c) {
            t = ""
        }
        try {
            n = (new Date).getTimezoneOffset()
        } catch (c) {
            n = ""
        }
        try {
            r = window.navigator.javaEnabled()
        } catch (c) {
            r = ""
        }
        try {
            i = document.body.clientHeight
        } catch (c) {
            i = ""
        }
        try {
            o = document.body.clientWidth
        } catch (c) {
            o = ""
        }
        try {
            a = window.innerHeight
        } catch (c) {
            a = ""
        }
        try {
            s = window.innerWidth
        } catch (c) {
            s = ""
        }
        return {
            color_depth: e,
            language: t,
            time_zone: n,
            java_enabled: r,
            screen_height: i,
            screen_width: o,
            window_height: a,
            window_width: s
        }
    }
    function n(e, t, n) {
        n.session_data = t,
        fetch(e, {
            method: "POST",
            body: btoa(JSON.stringify(n))
        })
    }
    return {
        init: e
    }
}();
!function(e, t, n) {
    "use strict";
    "undefined" != typeof window && "function" == typeof define && define.amd ? define(n) : "undefined" != typeof module && module.exports ? module.exports = n() : t.exports ? t.exports = n() : t.Fingerprint2 = n()
}(0, this, function() {
    "use strict";
    var e = function(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3],
        n[2] += n[3] >>> 16,
        n[3] &= 65535,
        n[2] += e[2] + t[2],
        n[1] += n[2] >>> 16,
        n[2] &= 65535,
        n[1] += e[1] + t[1],
        n[0] += n[1] >>> 16,
        n[1] &= 65535,
        n[0] += e[0] + t[0],
        n[0] &= 65535,
        [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }
      , t = function(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3],
        n[2] += n[3] >>> 16,
        n[3] &= 65535,
        n[2] += e[2] * t[3],
        n[1] += n[2] >>> 16,
        n[2] &= 65535,
        n[2] += e[3] * t[2],
        n[1] += n[2] >>> 16,
        n[2] &= 65535,
        n[1] += e[1] * t[3],
        n[0] += n[1] >>> 16,
        n[1] &= 65535,
        n[1] += e[2] * t[2],
        n[0] += n[1] >>> 16,
        n[1] &= 65535,
        n[1] += e[3] * t[1],
        n[0] += n[1] >>> 16,
        n[1] &= 65535,
        n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
        n[0] &= 65535,
        [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }
      , n = function(e, t) {
        return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
        [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
    }
      , r = function(e, t) {
        return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
    }
      , i = function(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
    }
      , o = function(e) {
        return e = i(e, [0, e[0] >>> 1]),
        e = t(e, [4283543511, 3981806797]),
        e = i(e, [0, e[0] >>> 1]),
        e = t(e, [3301882366, 444984403]),
        e = i(e, [0, e[0] >>> 1])
    }
      , a = function(a, s) {
        s = s || 0;
        for (var c = (a = a || "").length % 16, u = a.length - c, l = [0, s], d = [0, s], f = [0, 0], p = [0, 0], h = [2277735313, 289559509], m = [1291169091, 658871167], g = 0; g < u; g += 16)
            f = [255 & a.charCodeAt(g + 4) | (255 & a.charCodeAt(g + 5)) << 8 | (255 & a.charCodeAt(g + 6)) << 16 | (255 & a.charCodeAt(g + 7)) << 24, 255 & a.charCodeAt(g) | (255 & a.charCodeAt(g + 1)) << 8 | (255 & a.charCodeAt(g + 2)) << 16 | (255 & a.charCodeAt(g + 3)) << 24],
            p = [255 & a.charCodeAt(g + 12) | (255 & a.charCodeAt(g + 13)) << 8 | (255 & a.charCodeAt(g + 14)) << 16 | (255 & a.charCodeAt(g + 15)) << 24, 255 & a.charCodeAt(g + 8) | (255 & a.charCodeAt(g + 9)) << 8 | (255 & a.charCodeAt(g + 10)) << 16 | (255 & a.charCodeAt(g + 11)) << 24],
            f = t(f, h),
            f = n(f, 31),
            f = t(f, m),
            l = i(l, f),
            l = n(l, 27),
            l = e(l, d),
            l = e(t(l, [0, 5]), [0, 1390208809]),
            p = t(p, m),
            p = n(p, 33),
            p = t(p, h),
            d = i(d, p),
            d = n(d, 31),
            d = e(d, l),
            d = e(t(d, [0, 5]), [0, 944331445]);
        switch (f = [0, 0],
        p = [0, 0],
        c) {
        case 15:
            p = i(p, r([0, a.charCodeAt(g + 14)], 48));
        case 14:
            p = i(p, r([0, a.charCodeAt(g + 13)], 40));
        case 13:
            p = i(p, r([0, a.charCodeAt(g + 12)], 32));
        case 12:
            p = i(p, r([0, a.charCodeAt(g + 11)], 24));
        case 11:
            p = i(p, r([0, a.charCodeAt(g + 10)], 16));
        case 10:
            p = i(p, r([0, a.charCodeAt(g + 9)], 8));
        case 9:
            p = i(p, [0, a.charCodeAt(g + 8)]),
            p = t(p, m),
            p = n(p, 33),
            p = t(p, h),
            d = i(d, p);
        case 8:
            f = i(f, r([0, a.charCodeAt(g + 7)], 56));
        case 7:
            f = i(f, r([0, a.charCodeAt(g + 6)], 48));
        case 6:
            f = i(f, r([0, a.charCodeAt(g + 5)], 40));
        case 5:
            f = i(f, r([0, a.charCodeAt(g + 4)], 32));
        case 4:
            f = i(f, r([0, a.charCodeAt(g + 3)], 24));
        case 3:
            f = i(f, r([0, a.charCodeAt(g + 2)], 16));
        case 2:
            f = i(f, r([0, a.charCodeAt(g + 1)], 8));
        case 1:
            f = i(f, [0, a.charCodeAt(g)]),
            f = t(f, h),
            f = n(f, 31),
            f = t(f, m),
            l = i(l, f)
        }
        return l = i(l, [0, a.length]),
        d = i(d, [0, a.length]),
        l = e(l, d),
        d = e(d, l),
        l = o(l),
        d = o(d),
        l = e(l, d),
        d = e(d, l),
        ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
    }
      , s = {
        preprocessor: null,
        audio: {
            timeout: 1e3,
            excludeIOS11: !0
        },
        fonts: {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            userDefinedFonts: [],
            extendedJsFonts: !1
        },
        screen: {
            detectScreenOrientation: !0
        },
        plugins: {
            sortPluginsFor: [/palemoon/i],
            excludeIE: !1
        },
        extraComponents: [],
        excludes: {
            enumerateDevices: !0,
            pixelRatio: !0,
            doNotTrack: !0,
            fontsFlash: !0
        },
        NOT_AVAILABLE: "not available",
        ERROR: "error",
        EXCLUDED: "excluded"
    }
      , c = function(e, t) {
        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach)
            e.forEach(t);
        else if (e.length === +e.length)
            for (var n = 0, r = e.length; n < r; n++)
                t(e[n], n, e);
        else
            for (var i in e)
                e.hasOwnProperty(i) && t(e[i], i, e)
    }
      , u = function(e, t) {
        var n = [];
        return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (c(e, function(e, r, i) {
            n.push(t(e, r, i))
        }),
        n)
    }
      , l = function() {
        return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
    }
      , d = function(e) {
        var t = [window.screen.width, window.screen.height];
        return e.screen.detectScreenOrientation && t.sort().reverse(),
        t
    }
      , f = function(e) {
        if (window.screen.availWidth && window.screen.availHeight) {
            var t = [window.screen.availHeight, window.screen.availWidth];
            return e.screen.detectScreenOrientation && t.sort().reverse(),
            t
        }
        return e.NOT_AVAILABLE
    }
      , p = function(e) {
        if (null == navigator.plugins)
            return e.NOT_AVAILABLE;
        for (var t = [], n = 0, r = navigator.plugins.length; n < r; n++)
            navigator.plugins[n] && t.push(navigator.plugins[n]);
        return m(e) && (t = t.sort(function(e, t) {
            return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
        })),
        u(t, function(e) {
            var t = u(e, function(e) {
                return [e.type, e.suffixes]
            });
            return [e.name, e.description, t]
        })
    }
      , h = function(e) {
        var t = [];
        return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window ? t = u(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function(t) {
            try {
                return new window.ActiveXObject(t),
                t
            } catch (t) {
                return e.ERROR
            }
        }) : t.push(e.NOT_AVAILABLE),
        navigator.plugins && (t = t.concat(p(e))),
        t
    }
      , m = function(e) {
        for (var t = !1, n = 0, r = e.plugins.sortPluginsFor.length; n < r; n++) {
            var i = e.plugins.sortPluginsFor[n];
            if (navigator.userAgent.match(i)) {
                t = !0;
                break
            }
        }
        return t
    }
      , g = function(e) {
        try {
            return !!window.sessionStorage
        } catch (t) {
            return e.ERROR
        }
    }
      , v = function(e) {
        try {
            return !!window.localStorage
        } catch (t) {
            return e.ERROR
        }
    }
      , y = function(e) {
        try {
            return !!window.indexedDB
        } catch (t) {
            return e.ERROR
        }
    }
      , x = function(e) {
        return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
    }
      , w = function(e) {
        return navigator.cpuClass || e.NOT_AVAILABLE
    }
      , b = function(e) {
        return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
    }
      , T = function(e) {
        return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
    }
      , C = function() {
        var e, t = 0;
        void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
        try {
            document.createEvent("TouchEvent"),
            e = !0
        } catch (t) {
            e = !1
        }
        return [t, e, "ontouchstart"in window]
    }
      , _ = function(e) {
        var t = []
          , n = document.createElement("canvas");
        n.width = 2e3,
        n.height = 200,
        n.style.display = "inline";
        var r = n.getContext("2d");
        return r.rect(0, 0, 10, 10),
        r.rect(2, 2, 6, 6),
        t.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
        r.textBaseline = "alphabetic",
        r.fillStyle = "#f60",
        r.fillRect(125, 1, 62, 20),
        r.fillStyle = "#069",
        e.dontUseFakeFontInCanvas ? r.font = "11pt Arial" : r.font = "11pt no-real-font-123",
        r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
        r.fillStyle = "rgba(102, 204, 0, 0.2)",
        r.font = "18pt Arial",
        r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
        r.globalCompositeOperation = "multiply",
        r.fillStyle = "rgb(255,0,255)",
        r.beginPath(),
        r.arc(50, 50, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        r.fill(),
        r.fillStyle = "rgb(0,255,255)",
        r.beginPath(),
        r.arc(100, 50, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        r.fill(),
        r.fillStyle = "rgb(255,255,0)",
        r.beginPath(),
        r.arc(75, 100, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        r.fill(),
        r.fillStyle = "rgb(255,0,255)",
        r.arc(75, 75, 75, 0, 2 * Math.PI, !0),
        r.arc(75, 75, 25, 0, 2 * Math.PI, !0),
        r.fill("evenodd"),
        n.toDataURL && t.push("canvas fp:" + n.toDataURL()),
        t
    }
      , S = function() {
        var e, t = function(t) {
            return e.clearColor(0, 0, 0, 1),
            e.enable(e.DEPTH_TEST),
            e.depthFunc(e.LEQUAL),
            e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
            "[" + t[0] + ", " + t[1] + "]"
        };
        if (!(e = I()))
            return null;
        var n = []
          , r = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, r);
        var i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
        e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW),
        r.itemSize = 3,
        r.numItems = 3;
        var o = e.createProgram()
          , a = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
        e.compileShader(a);
        var s = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
        e.compileShader(s),
        e.attachShader(o, a),
        e.attachShader(o, s),
        e.linkProgram(o),
        e.useProgram(o),
        o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"),
        o.offsetUniform = e.getUniformLocation(o, "uniformOffset"),
        e.enableVertexAttribArray(o.vertexPosArray),
        e.vertexAttribPointer(o.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0),
        e.uniform2f(o.offsetUniform, 1, 1),
        e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems);
        try {
            n.push(e.canvas.toDataURL())
        } catch (t) {}
        n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")),
        n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
        n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
        n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
        n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
        n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
        n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
        n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
        n.push("webgl max anisotropy:" + function(e) {
            var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
            if (t) {
                var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                return 0 === n && (n = 2),
                n
            }
            return null
        }(e)),
        n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
        n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
        n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
        n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
        n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
        n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
        n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
        n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
        n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
        n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
        n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
        n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
        n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
        n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
        n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
        n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
        n.push("webgl version:" + e.getParameter(e.VERSION));
        try {
            var u = e.getExtension("WEBGL_debug_renderer_info");
            u && (n.push("webgl unmasked vendor:" + e.getParameter(u.UNMASKED_VENDOR_WEBGL)),
            n.push("webgl unmasked renderer:" + e.getParameter(u.UNMASKED_RENDERER_WEBGL)))
        } catch (t) {}
        return e.getShaderPrecisionFormat && c(["FLOAT", "INT"], function(t) {
            c(["VERTEX", "FRAGMENT"], function(r) {
                c(["HIGH", "MEDIUM", "LOW"], function(i) {
                    c(["precision", "rangeMin", "rangeMax"], function(o) {
                        var a = e.getShaderPrecisionFormat(e[r + "_SHADER"], e[i + "_" + t])[o];
                        "precision" !== o && (o = "precision " + o);
                        var s = ["webgl ", r.toLowerCase(), " shader ", i.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", a].join("");
                        n.push(s)
                    })
                })
            })
        }),
        n
    }
      , E = function() {
        try {
            var e = I()
              , t = e.getExtension("WEBGL_debug_renderer_info");
            return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
        } catch (e) {
            return null
        }
    }
      , k = function() {
        var e = document.createElement("div");
        e.innerHTML = "&nbsp;";
        var t = !(e.className = "adsbox");
        try {
            document.body.appendChild(e),
            t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
            document.body.removeChild(e)
        } catch (e) {
            t = !1
        }
        return t
    }
      , A = function() {
        if (void 0 !== navigator.languages)
            try {
                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                    return !0
            } catch (e) {
                return !0
            }
        return !1
    }
      , L = function() {
        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    }
      , D = function() {
        var e, t = navigator.userAgent.toLowerCase(), n = navigator.oscpu, r = navigator.platform.toLowerCase();
        if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("win") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") || 0 <= t.indexOf("cros") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? "iOS" : 0 <= t.indexOf("mac") ? "Mac" : "Other",
        ("ontouchstart"in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
            return !0;
        if (void 0 !== n) {
            if (0 <= (n = n.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e)
                return !0;
            if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e)
                return !0;
            if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e)
                return !0;
            if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e))
                return !0;
        }
        return 0 <= r.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || (0 <= r.indexOf("linux") || 0 <= r.indexOf("android") || 0 <= r.indexOf("pike")) && "Linux" !== e && "Android" !== e || (0 <= r.indexOf("mac") || 0 <= r.indexOf("ipad") || 0 <= r.indexOf("ipod") || 0 <= r.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || (r.indexOf("win") < 0 && r.indexOf("linux") < 0 && r.indexOf("mac") < 0 && r.indexOf("iphone") < 0 && r.indexOf("ipad") < 0) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e
    }
      , N = function() {
        var e, t = navigator.userAgent.toLowerCase(), n = navigator.productSub;
        if (("Chrome" == (e = 0 <= t.indexOf("firefox") ? "Firefox" : 0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ? "Opera" : 0 <= t.indexOf("chrome") ? "Chrome" : 0 <= t.indexOf("safari") ? "Safari" : 0 <= t.indexOf("trident") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n)
            return !0;
        var r, i = eval.toString().length;
        if (37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e)
            return !0;
        if (39 === i && "Internet Explorer" !== e && "Other" !== e)
            return !0;
        if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e)
            return !0;
        try {
            throw "a"
        } catch (e) {
            try {
                e.toSource(),
                r = !0
            } catch (e) {
                r = !1
            }
        }
        return r && "Firefox" !== e && "Other" !== e
    }
      , $ = function() {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }
      , B = function() {
        if (!$())
            return !1;
        var e = I();
        return !!window.WebGLRenderingContext && !!e
    }
      , O = function() {
        return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
    }
      , M = function() {
        return void 0 !== window.swfobject
    }
      , P = function() {
        return window.swfobject.hasFlashPlayerVersion("9.0.0")
    }
      , R = function(e, t) {
        var n = "___fp_swf_loaded";
        window[n] = function(t) {
            e(t)
        }
        ;
        var r, i, o = t.fonts.swfContainerId;
        (i = document.createElement("div")).setAttribute("id", r.fonts.swfContainerId),
        document.body.appendChild(i);
        var a = {
            onReady: n
        };
        window.swfobject.embedSWF(t.fonts.swfPath, o, "1", "1", "9.0.0", !1, a, {
            allowScriptAccess: "always",
            menu: "false"
        }, {})
    }
      , I = function() {
        var e = document.createElement("canvas")
          , t = null;
        try {
            t = e.getContext("webgl") || e.getContext("experimental-webgl")
        } catch (e) {}
        return t || (t = null),
        t
    }
      , F = [{
        key: "userAgent",
        getData: function(e) {
            e(navigator.userAgent)
        }
    }, {
        key: "webdriver",
        getData: function(e, t) {
            e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
        }
    }, {
        key: "language",
        getData: function(e, t) {
            e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
        }
    }, {
        key: "colorDepth",
        getData: function(e, t) {
            e(window.screen.colorDepth || t.NOT_AVAILABLE)
        }
    }, {
        key: "deviceMemory",
        getData: function(e, t) {
            e(navigator.deviceMemory || t.NOT_AVAILABLE)
        }
    }, {
        key: "pixelRatio",
        getData: function(e, t) {
            e(window.devicePixelRatio || t.NOT_AVAILABLE)
        }
    }, {
        key: "hardwareConcurrency",
        getData: function(e, t) {
            e(x(t))
        }
    }, {
        key: "screenResolution",
        getData: function(e, t) {
            e(d(t))
        }
    }, {
        key: "availableScreenResolution",
        getData: function(e, t) {
            e(f(t))
        }
    }, {
        key: "timezoneOffset",
        getData: function(e) {
            e((new Date).getTimezoneOffset())
        }
    }, {
        key: "timezone",
        getData: function(e, t) {
            e(window.Intl && window.Intl.DateTimeFormat ? (new window.Intl.DateTimeFormat).resolvedOptions().timeZone : t.NOT_AVAILABLE)
        }
    }, {
        key: "sessionStorage",
        getData: function(e, t) {
            e(g(t))
        }
    }, {
        key: "localStorage",
        getData: function(e, t) {
            e(v(t))
        }
    }, {
        key: "indexedDb",
        getData: function(e, t) {
            e(y(t))
        }
    }, {
        key: "addBehavior",
        getData: function(e) {
            e(!(!document.body || !document.body.addBehavior))
        }
    }, {
        key: "openDatabase",
        getData: function(e) {
            e(!!window.openDatabase)
        }
    }, {
        key: "cpuClass",
        getData: function(e, t) {
            e(w(t))
        }
    }, {
        key: "platform",
        getData: function(e, t) {
            e(b(t))
        }
    }, {
        key: "doNotTrack",
        getData: function(e, t) {
            e(T(t))
        }
    }, {
        key: "plugins",
        getData: function(e, t) {
            e(O() ? t.plugins.excludeIE ? t.EXCLUDED : h(t) : p(t))
        }
    }, {
        key: "canvas",
        getData: function(e, t) {
            e($() ? _(t) : t.NOT_AVAILABLE)
        }
    }, {
        key: "webgl",
        getData: function(e, t) {
            e(B() ? S() : t.NOT_AVAILABLE)
        }
    }, {
        key: "webglVendorAndRenderer",
        getData: function(e) {
            B() ? e(E()) : e()
        }
    }, {
        key: "adBlock",
        getData: function(e) {
            e(k())
        }
    }, {
        key: "hasLiedLanguages",
        getData: function(e) {
            e(A())
        }
    }, {
        key: "hasLiedResolution",
        getData: function(e) {
            e(L())
        }
    }, {
        key: "hasLiedOs",
        getData: function(e) {
            e(D())
        }
    }, {
        key: "hasLiedBrowser",
        getData: function(e) {
            e(N())
        }
    }, {
        key: "touchSupport",
        getData: function(e) {
            e(C())
        }
    }, {
        key: "fonts",
        getData: function(e, t) {
            var n = ["monospace", "sans-serif", "serif"]
              , r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
            t.fonts.extendedJsFonts && (r = r.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])),
            r = (r = r.concat(t.fonts.userDefinedFonts)).filter(function(e, t) {
                return r.indexOf(e) === t
            });
            var i = document.getElementsByTagName("body")[0]
              , o = document.createElement("div")
              , a = document.createElement("div")
              , s = {}
              , c = {}
              , u = function() {
                var e = document.createElement("span");
                return e.style.position = "absolute",
                e.style.left = "-9999px",
                e.style.fontSize = "72px",
                e.style.fontStyle = "normal",
                e.style.fontWeight = "normal",
                e.style.letterSpacing = "normal",
                e.style.lineBreak = "auto",
                e.style.lineHeight = "normal",
                e.style.textTransform = "none",
                e.style.textAlign = "left",
                e.style.textDecoration = "none",
                e.style.textShadow = "none",
                e.style.whiteSpace = "normal",
                e.style.wordBreak = "normal",
                e.style.wordSpacing = "normal",
                e.innerHTML = "mmmmmmmmmmlli",
                e
            }
              , l = function(e) {
                for (var t = !1, r = 0; r < n.length; r++)
                    if (t = e[r].offsetWidth !== s[n[r]] || e[r].offsetHeight !== c[n[r]])
                        return t;
                return t
            }
              , d = function() {
                for (var e = [], t = 0, r = n.length; t < r; t++) {
                    var i = u();
                    i.style.fontFamily = n[t],
                    o.appendChild(i),
                    e.push(i)
                }
                return e
            }();
            i.appendChild(o);
            for (var f = 0, p = n.length; f < p; f++)
                s[n[f]] = d[f].offsetWidth,
                c[n[f]] = d[f].offsetHeight;
            var h = function() {
                for (var e, t, i, o = {}, s = 0, c = r.length; s < c; s++) {
                    for (var l = [], d = 0, f = n.length; d < f; d++) {
                        var p = (e = r[s],
                        t = n[d],
                        i = void 0,
                        (i = u()).style.fontFamily = "'" + e + "'," + t,
                        i);
                        a.appendChild(p),
                        l.push(p)
                    }
                    o[r[s]] = l
                }
                return o
            }();
            i.appendChild(a);
            for (var m = [], g = 0, v = r.length; g < v; g++)
                l(h[r[g]]) && m.push(r[g]);
            i.removeChild(a),
            i.removeChild(o),
            e(m)
        },
        pauseBefore: !0
    }, {
        key: "fontsFlash",
        getData: function(e, t) {
            return M() ? P() ? t.fonts.swfPath ? void R(function(t) {
                e(t)
            }, t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
        },
        pauseBefore: !0
    }, {
        key: "audio",
        getData: function(e, t) {
            var n = t.audio;
            if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))
                return e(t.EXCLUDED);
            var r = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (null == r)
                return e(t.NOT_AVAILABLE);
            var i = new r(1,44100,44100)
              , o = i.createOscillator();
            o.type = "triangle",
            o.frequency.setValueAtTime(1e4, i.currentTime);
            var a = i.createDynamicsCompressor();
            c([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], function(e) {
                void 0 !== a[e[0]] && "function" == typeof a[e[0]].setValueAtTime && a[e[0]].setValueAtTime(e[1], i.currentTime)
            }),
            o.connect(a),
            a.connect(i.destination),
            o.start(0),
            i.startRendering();
            var s = setTimeout(function() {
                return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'),
                i.oncomplete = function() {}
                ,
                i = null,
                e("audioTimeout")
            }, n.timeout);
            i.oncomplete = function(t) {
                var n;
                try {
                    clearTimeout(s),
                    n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(e, t) {
                        return e + Math.abs(t)
                    }, 0).toString(),
                    o.disconnect(),
                    a.disconnect()
                } catch (t) {
                    return void e(t)
                }
                e(n)
            }
        }
    }, {
        key: "enumerateDevices",
        getData: function(e, t) {
            return l() ? void navigator.mediaDevices.enumerateDevices().then(function(t) {
                e(t.map(function(e) {
                    return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                }))
            })["catch"](function(t) {
                e(t)
            }) : e(t.NOT_AVAILABLE)
        }
    }]
      , j = function(e) {
        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    };
    return j.get = function(e, t) {
        t ? e || (e = {}) : (t = e,
        e = {}),
        function(e, t) {
            if (null != t) {
                var n, r;
                for (r in t)
                    null == (n = t[r]) || Object.prototype.hasOwnProperty.call(e, r) || (e[r] = n)
            }
        }(e, s),
        e.components = e.extraComponents.concat(F);
        var n = {
            data: [],
            addPreprocessedComponent: function(t, r) {
                "function" == typeof e.preprocessor && (r = e.preprocessor(t, r)),
                n.data.push({
                    key: t,
                    value: r
                })
            }
        }
          , r = -1
          , i = function(o) {
            if ((r += 1) >= e.components.length)
                t(n.data);
            else {
                var a = e.components[r];
                if (e.excludes[a.key])
                    i(!1);
                else {
                    if (!o && a.pauseBefore)
                        return r -= 1,
                        void setTimeout(function() {
                            i(!0)
                        }, 1);
                    try {
                        a.getData(function(e) {
                            n.addPreprocessedComponent(a.key, e),
                            i(!1)
                        }, e)
                    } catch (o) {
                        n.addPreprocessedComponent(a.key, String(o)),
                        i(!1)
                    }
                }
            }
        };
        i(!1)
    }
    ,
    j.getPromise = function(e) {
        return new Promise(function(t, n) {
            j.get(e, t)
        }
        )
    }
    ,
    j.getV18 = function(e, t) {
        return null == t && (t = e,
        e = {}),
        j.get(e, function(n) {
            for (var r = [], i = 0; i < n.length; i++) {
                var o = n[i];
                if (o.value === (e.NOT_AVAILABLE || "not available"))
                    r.push({
                        key: o.key,
                        value: "unknown"
                    });
                else if ("plugins" === o.key)
                    r.push({
                        key: "plugins",
                        value: u(o.value, function(e) {
                            var t = u(e[2], function(e) {
                                return e.join ? e.join("~") : e
                            }).join(",");
                            return [e[0], e[1], t].join("::")
                        })
                    });
                else if (-1 !== ["canvas", "webgl"].indexOf(o.key))
                    r.push({
                        key: o.key,
                        value: o.value.join("~")
                    });
                else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(o.key)) {
                    if (!o.value)
                        continue;
                    r.push({
                        key: o.key,
                        value: 1
                    })
                } else
                    o.value ? r.push(o.value.join ? {
                        key: o.key,
                        value: o.value.join(";")
                    } : o) : r.push({
                        key: o.key,
                        value: o.value
                    })
            }
            var s = a(u(r, function(e) {
                return e.value
            }).join("~~~"), 31);
            t(s, r)
        })
    }
    ,
    j.x64hash128 = a,
    j.VERSION = "2.1.0",
    j
});
