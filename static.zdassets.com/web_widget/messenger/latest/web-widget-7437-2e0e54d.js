"use strict";
(globalThis.webpackChunk_zendesk_web_widget_messenger = globalThis.webpackChunk_zendesk_web_widget_messenger || []).push([
    [7437], {
        36913: (e, t, n) => {
            n.d(t, {
                K: () => g
            });
            var o = n(88910),
                i = n(24726),
                s = n.n(i),
                r = n(31869),
                a = n(34485),
                d = n(10948),
                l = n(6999),
                u = n(26385),
                c = n(58492),
                p = n(8863);
            const h = "buttons.icon_button",
                m = e => {
                    const t = (0, p.v)(e);
                    return (0, d.AH)(["border:", ";padding:0;width:", ";min-width:", ";", ";&:disabled{background-color:", ";}"], e.isBasic && "none", t, t, e.isBasic && !(e.isPrimary || e.isDanger || e.disabled) && (e => {
                        const t = (0, l.A)("neutralHue", 600, e.theme),
                            n = (0, l.A)("neutralHue", 700, e.theme),
                            o = (0, l.A)("neutralHue", 800, e.theme);
                        return (0, d.AH)(["color:", ";&:hover{color:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:", ";}"], t, n, o)
                    })(e), !e.isPrimary && "transparent")
                },
                f = (0, d.Ay)(p.O).attrs({
                    "data-garden-id": h,
                    "data-garden-version": "8.76.7"
                }).withConfig({
                    displayName: "StyledIconButton",
                    componentId: "sc-1t0ughp-0"
                })(["", ";& ", "{", "}", ";"], (e => m(e)), a.v, (e => (e => {
                    const t = e.theme.iconSizes.md;
                    return (0, d.AH)(["width:", ";height:", ";& > svg{transition:opacity 0.15s ease-in-out;}"], t, t)
                })(e)), (e => (0, u.A)(h, e)));
            f.defaultProps = {
                theme: c.A
            };
            var b = n(71277);
            const g = (0, o.forwardRef)(((e, t) => {
                let {
                    children: n,
                    isRotated: i,
                    ...s
                } = e;
                const r = (0, b.r)();
                return o.createElement(f, Object.assign({
                    ref: t
                }, s, {
                    focusInset: s.focusInset || r
                }), o.createElement(a.v, {
                    isRotated: i
                }, n))
            }));
            g.displayName = "IconButton", g.propTypes = {
                isDanger: s().bool,
                size: s().oneOf(r.S),
                isNeutral: s().bool,
                isPrimary: s().bool,
                isBasic: s().bool,
                isPill: s().bool,
                focusInset: s().bool,
                isRotated: s().bool
            }, g.defaultProps = {
                isPill: !0,
                isBasic: !0,
                size: "medium"
            }
        },
        8863: (e, t, n) => {
            n.d(t, {
                O: () => b,
                v: () => f
            });
            var o = n(10948),
                i = n(40577),
                s = n(6999),
                r = n(1846),
                a = n(24561),
                d = n(26385),
                l = n(58492);
            const u = "buttons.button_group_view",
                c = o.Ay.div.attrs({
                    "data-garden-id": u,
                    "data-garden-version": "8.76.7"
                }).withConfig({
                    displayName: "StyledButtonGroup",
                    componentId: "sc-1fbpzef-0"
                })(["display:inline-flex;position:relative;z-index:0;direction:", ";white-space:nowrap;", ";"], (e => e.theme.rtl && "rtl"), (e => (0, d.A)(u, e)));
            c.defaultProps = {
                theme: l.A
            };
            var p = n(34485);
            const h = "buttons.button",
                m = e => (0, s.A)("neutralHue", 200, e.theme),
                f = e => "small" === e.size ? 8 * e.theme.space.base + "px" : "large" === e.size ? 12 * e.theme.space.base + "px" : 10 * e.theme.space.base + "px",
                b = o.Ay.button.attrs((e => ({
                    "data-garden-id": h,
                    "data-garden-version": "8.76.7",
                    type: e.type || "button"
                }))).withConfig({
                    displayName: "StyledButton",
                    componentId: "sc-qe3ace-0"
                })(["display:", ";align-items:", ";justify-content:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:", ";border-radius:", ";cursor:pointer;width:", ";overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:", ";font-family:inherit;font-weight:", ";-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:", ";-webkit-touch-callout:none;", ";&::-moz-focus-inner{border:0;padding:0;}", "{text-decoration:none;}&:hover{text-decoration:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:", ";}", ";&:disabled{cursor:default;text-decoration:", ";}& ", "{", "}", " &&{", "}", ""], (e => e.isLink ? "inline" : "inline-flex"), (e => !e.isLink && "center"), (e => !e.isLink && "center"), (e => `${e.isLink?"0px solid":e.theme.borders.sm} transparent`), (e => (e => e.isPill ? "100px" : e.theme.borderRadii.md)(e)), (e => e.isStretched ? "100%" : ""), (e => !e.isLink && "nowrap"), (e => e.isLink ? "inherit" : e.theme.fontWeights.regular), (e => !e.isLink && "none"), (e => (e => {
                    let t;
                    if (e.isLink) t = (0, o.AH)(["padding:0;font-size:inherit;"]);
                    else {
                        const n = f(e),
                            s = (0, i.Dy)(`${n} - (${e.theme.borderWidths.sm} * 2)`);
                        let r, a;
                        "small" === e.size ? (a = e.theme.fontSizes.sm, r = 3 * e.theme.space.base + "px") : (a = e.theme.fontSizes.md, r = "large" === e.size ? 5 * e.theme.space.base + "px" : 4 * e.theme.space.base + "px"), t = (0, o.AH)(["padding:0 ", ";height:", ";line-height:", ";font-size:", ";"], (0, i.em)((0, i.Dy)(`${r} - ${e.theme.borderWidths.sm}`), a), n, s, a)
                    }
                    return t
                })(e)), r.o, (e => e.isLink ? "underline" : "none"), (e => e.isLink ? "underline" : "none"), (e => (e => {
                    let t, n;
                    n = e.disabled || e.isNeutral && (e.isPrimary || e.isSelected) && !e.isDanger ? "neutralHue" : e.isDanger ? "dangerHue" : "primaryHue";
                    const a = 600,
                        d = (0, s.A)(n, a, e.theme),
                        l = (0, s.A)(n, 700, e.theme),
                        u = (0, s.A)(n, 800, e.theme),
                        c = (0, s.A)("primaryHue", a, e.theme),
                        h = m(e),
                        f = (0, s.A)(n, 400, e.theme);
                    if (e.isLink) t = (0, o.AH)(["outline-color:transparent;background-color:transparent;color:", ";", " &:hover{color:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:", ";}&:disabled{color:", ";}"], d, (0, r.T)({
                        theme: e.theme,
                        condition: !1,
                        styles: {
                            color: d,
                            outlineColor: c
                        }
                    }), l, u, f);
                    else if (e.isPrimary || e.isSelected) t = (0, o.AH)(["outline-color:transparent;background-color:", ";color:", ";&:hover{background-color:", ";}", " &:active{background-color:", ";}&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:", ";}&:disabled{background-color:", ";color:", ";}"], e.isPrimary && e.isSelected ? u : d, e.theme.palette.white, l, (0, r.T)({
                        theme: e.theme,
                        inset: e.focusInset,
                        shadowWidth: e.focusInset ? "sm" : "md",
                        spacerWidth: e.focusInset ? "sm" : "xs",
                        styles: e.isDanger && e.focusInset ? {
                            borderColor: c
                        } : void 0
                    }), u, e.isPrimary && u, h, f);
                    else {
                        const n = e.isNeutral && !e.isDanger ? (0, s.A)("neutralHue", 300, e.theme) : d,
                            c = e.isNeutral ? (0, s.A)("foreground", 600, e.theme) : d,
                            m = e.isNeutral && !e.isDanger ? d : l,
                            b = e.isNeutral ? c : l;
                        t = (0, o.AH)(["outline-color:transparent;border-color:", ";background-color:transparent;color:", ";&:hover{border-color:", ";background-color:", ";color:", ";}", " &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:", ";background-color:", ";color:", ";}&:disabled{border-color:transparent;background-color:", ";color:", ";}& ", "{color:", ";}&:hover ", ",&:focus-visible ", ",&[data-garden-focus-visible] ", "{color:", ";}&:active ", "{color:", ";}&:disabled ", "{color:", ";}"], !e.isBasic && n, c, !e.isBasic && m, (0, i.B3)(d, .08), b, (0, r.T)({
                            theme: e.theme,
                            inset: e.focusInset,
                            styles: e.isNeutral ? {
                                borderColor: d
                            } : void 0
                        }), !e.isBasic && u, (0, i.B3)(d, .2), !e.isNeutral && u, h, f, p.v, e.isNeutral && (0, s.A)("neutralHue", a, e.theme), p.v, p.v, p.v, e.isNeutral && (0, s.A)("neutralHue", 700, e.theme), p.v, e.isNeutral && c, p.v, f)
                    }
                    return t
                })(e)), (e => e.isLink && "none"), p.v, (e => (e => {
                    const t = "small" === e.size ? e.theme.iconSizes.sm : e.theme.iconSizes.md;
                    return (0, o.AH)(["width:", ";min-width:", ";height:", ";vertical-align:", ";"], t, t, t, e.isLink && "middle")
                })(e)), c, (e => (e => {
                    const {
                        theme: t,
                        isPrimary: n,
                        isBasic: i,
                        isSelected: d,
                        isPill: l,
                        focusInset: u
                    } = e, {
                        rtl: c,
                        borderWidths: h,
                        borders: f
                    } = t, b = c ? "right" : "left", g = c ? "left" : "right", x = h.sm, v = `${n||i?"":"-"}${x}`, E = l && "-2px", y = !n && m(e), k = i ? "transparent" : "revert", w = (0, s.A)("primaryHue", 600, t), A = i && !d && !n && (0, a.Q)({
                        theme: t,
                        inset: u,
                        spacerHue: w,
                        hue: "transparent"
                    });
                    return (0, o.AH)(["position:relative;transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,margin-", " 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;border:", " ", ";", "{border-color:", ";box-shadow:", ";}&:hover,&:active,", "{z-index:1;}&:disabled{z-index:-1;background-color:", ";}&:not(:first-of-type){margin-", ":", ";}&:not(:first-of-type):disabled{margin-", ":", ";}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type){border-top-", "-radius:0;border-bottom-", "-radius:0;}&:last-of-type:not(:first-of-type){border-top-", "-radius:0;border-bottom-", "-radius:0;}&:first-of-type:not(:last-of-type) ", "{margin-", ":", ";}&:last-of-type:not(:first-of-type) ", "{margin-", ":", ";}"], b, f.sm, k, r.o, w, A, r.o, y, b, v, b, x, g, g, b, b, p.v, g, E, p.v, b, E)
                })(e)), (e => (0, d.A)(h, e)));
            b.defaultProps = {
                theme: l.A
            }
        },
        34485: (e, t, n) => {
            n.d(t, {
                v: () => d
            });
            var o = n(10948),
                i = n(88910),
                s = n(26385),
                r = n(58492);
            const a = "buttons.icon",
                d = (0, o.Ay)((e => {
                    let {
                        children: t,
                        isRotated: n,
                        theme: o,
                        ...s
                    } = e;
                    return i.cloneElement(i.Children.only(t), s)
                })).attrs({
                    "data-garden-id": a,
                    "data-garden-version": "8.76.7"
                }).withConfig({
                    displayName: "StyledIcon",
                    componentId: "sc-19meqgg-0"
                })(["transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", ";"], (e => e.isRotated && `rotate(${e.theme.rtl?"-":"+"}180deg)`), (e => (e => {
                    let t;
                    return "start" === e.position ? t = "margin-" + (e.theme.rtl ? "left" : "right") : "end" === e.position && (t = "margin-" + (e.theme.rtl ? "right" : "left")), t && (0, o.AH)(["", ":", "px;"], t, 2 * e.theme.space.base)
                })(e)), (e => (0, s.A)(a, e)));
            d.defaultProps = {
                theme: r.A
            }
        },
        31869: (e, t, n) => {
            n.d(t, {
                S: () => o
            });
            const o = ["small", "medium", "large"]
        },
        71277: (e, t, n) => {
            n.d(t, {
                r: () => s
            });
            var o = n(88910);
            const i = (0, o.createContext)(void 0),
                s = () => (0, o.useContext)(i)
        },
        1846: (e, t, n) => {
            n.d(t, {
                T: () => a,
                o: () => r
            });
            var o = n(10948),
                i = n(40577),
                s = n(24561);
            const r = '&:focus-visible, &[data-garden-focus-visible="true"]',
                a = e => {
                    let {
                        condition: t = !0,
                        selector: n = r,
                        shadowWidth: a = "md",
                        spacerWidth: d = "xs",
                        styles: {
                            boxShadow: l,
                            ...u
                        } = {},
                        theme: c,
                        ...p
                    } = e;
                    const h = t ? (0, s.Q)({
                        boxShadow: l,
                        shadowWidth: a,
                        spacerWidth: d,
                        theme: c,
                        ...p
                    }) : l;
                    let m, f;
                    return null === d ? m = c.shadowWidths[a] : (m = `${(0,i.Dy)(`${c.shadowWidths[a]} - ${c.shadowWidths[d]}`)} solid transparent`, f = c.shadowWidths[d]), (0, o.AH)(["&:focus{outline:none;}", "{outline:", ";outline-offset:", ";box-shadow:", ";", "}"], n, m, f, h, u)
                }
        },
        24561: (e, t, n) => {
            n.d(t, {
                Q: () => s
            });
            var o = n(58492),
                i = n(6999);
            const s = e => {
                let {
                    boxShadow: t,
                    inset: n = !1,
                    hue: s = "primaryHue",
                    shade: r = i.M,
                    shadowWidth: a = "md",
                    spacerHue: d = "background",
                    spacerShade: l = i.M,
                    spacerWidth: u = "xs",
                    theme: c = o.A
                } = e;
                const p = (0, i.A)(s, r, c),
                    h = c.shadows[a](p);
                if (null === u) return `${n?"inset":""} ${h}`;
                const m = (0, i.A)(d, l, c),
                    f = `\n    ${n?"inset":""} ${c.shadows[u](m)},\n    ${n?"inset":""} ${h}`;
                return t ? `${f}, ${t}` : f
            }
        },
        26385: (e, t, n) => {
            function o(e, t) {
                const n = t.theme && t.theme.components;
                if (!n) return;
                const o = n[e];
                return "function" == typeof o ? o(t) : o
            }
            n.d(t, {
                A: () => o
            })
        },
        43229: (e, t, n) => {
            n.d(t, {
                Ay: () => g
            });
            var o = n(85991),
                i = n(69911),
                s = n(88910),
                r = n(48559);
            const a = !1,
                d = s.createContext(null);
            var l = n(69825),
                u = "unmounted",
                c = "exited",
                p = "entering",
                h = "entered",
                m = "exiting",
                f = function(e) {
                    function t(t, n) {
                        var o;
                        o = e.call(this, t, n) || this;
                        var i, s = n && !n.isMounting ? t.enter : t.appear;
                        return o.appearStatus = null, t.in ? s ? (i = c, o.appearStatus = p) : i = h : i = t.unmountOnExit || t.mountOnEnter ? u : c, o.state = {
                            status: i
                        }, o.nextCallback = null, o
                    }(0, i.A)(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === u ? {
                            status: c
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== p && n !== h && (t = p) : n !== p && n !== h || (t = m)
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var e, t, n, o = this.props.timeout;
                        return e = t = n = o, null != o && "number" != typeof o && (e = o.exit, t = o.enter, n = void 0 !== o.appear ? o.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function(e, t) {
                        if (void 0 === e && (e = !1), null !== t)
                            if (this.cancelNextCallback(), t === p) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this);
                                    n && (0, l.F)(n)
                                }
                                this.performEnter(e)
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === c && this.setState({
                            status: u
                        })
                    }, n.performEnter = function(e) {
                        var t = this,
                            n = this.props.enter,
                            o = this.context ? this.context.isMounting : e,
                            i = this.props.nodeRef ? [o] : [r.findDOMNode(this), o],
                            s = i[0],
                            d = i[1],
                            l = this.getTimeouts(),
                            u = o ? l.appear : l.enter;
                        !e && !n || a ? this.safeSetState({
                            status: h
                        }, (function() {
                            t.props.onEntered(s)
                        })) : (this.props.onEnter(s, d), this.safeSetState({
                            status: p
                        }, (function() {
                            t.props.onEntering(s, d), t.onTransitionEnd(u, (function() {
                                t.safeSetState({
                                    status: h
                                }, (function() {
                                    t.props.onEntered(s, d)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            o = this.props.nodeRef ? void 0 : r.findDOMNode(this);
                        t && !a ? (this.props.onExit(o), this.safeSetState({
                            status: m
                        }, (function() {
                            e.props.onExiting(o), e.onTransitionEnd(n.exit, (function() {
                                e.safeSetState({
                                    status: c
                                }, (function() {
                                    e.props.onExited(o)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: c
                        }, (function() {
                            e.props.onExited(o)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(o) {
                            n && (n = !1, t.nextCallback = null, e(o))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this),
                            o = null == e && !this.props.addEndListener;
                        if (n && !o) {
                            if (this.props.addEndListener) {
                                var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    s = i[0],
                                    a = i[1];
                                this.props.addEndListener(s, a)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var e = this.state.status;
                        if (e === u) return null;
                        var t = this.props,
                            n = t.children,
                            i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, o.A)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return s.createElement(d.Provider, {
                            value: null
                        }, "function" == typeof n ? n(e, i) : s.cloneElement(s.Children.only(n), i))
                    }, t
                }(s.Component);

            function b() {}
            f.contextType = d, f.propTypes = {}, f.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: b,
                onEntering: b,
                onEntered: b,
                onExit: b,
                onExiting: b,
                onExited: b
            }, f.UNMOUNTED = u, f.EXITED = c, f.ENTERING = p, f.ENTERED = h, f.EXITING = m;
            const g = f
        },
        69825: (e, t, n) => {
            n.d(t, {
                F: () => o
            });
            var o = function(e) {
                return e.scrollTop
            }
        },
        85991: (e, t, n) => {
            function o(e, t) {
                if (null == e) return {};
                var n = {};
                for (var o in e)
                    if ({}.hasOwnProperty.call(e, o)) {
                        if (t.includes(o)) continue;
                        n[o] = e[o]
                    }
                return n
            }
            n.d(t, {
                A: () => o
            })
        }
    }
]);