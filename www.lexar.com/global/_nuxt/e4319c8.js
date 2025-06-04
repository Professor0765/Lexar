(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        427: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = {
                    props: {
                        banner: {
                            type: Object,
                            default: {
                                imageUrl: "",
                                title: ""
                            }
                        },
                        showTitle: {
                            type: Boolean,
                            default: !0
                        },
                        isStart: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            winwowWidth: null
                        }
                    },
                    mounted: function() {
                        var e = this;
                        setTimeout((function() {
                            e.winwowWidth = window.innerWidth
                        }))
                    }
                },
                r = (n(668), n(7)),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "bannerWarp"
                    }, [e.winwowWidth ? t("img", {
                        staticClass: "img-bg",
                        staticStyle: {
                            "object-fit": "cover"
                        },
                        attrs: {
                            src: (e.winwowWidth > 768 ? e.banner.imageUrl : e.banner.mobileImageUrl || e.banner.imageUrl) + "?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%",
                            fetchpriority: "high"
                        }
                    }) : e._e(), e._v(" "), t("div", {
                        staticClass: "conbase"
                    }, [t("div", {
                        class: "content ".concat(e.isStart && "phonedesc")
                    }, [t("header", [e.showTitle ? t("h2", [e._v(e._s(e.banner.title))]) : e._e()]), e._v(" "), e._t("default")], 2)])])
                }), [], !1, null, "357d875e", null);
            t.default = component.exports;
            installComponents(component, {
                Header: n(78).default
            })
        },
        428: function(e, t, n) {
            e.exports = n.p + "img/allow-down.03b399d.png"
        },
        429: function(e, t, n) {
            e.exports = n.p + "img/allow-up.55849ef.png"
        },
        430: function(e, t, n) {
            "use strict";
            n.r(t);
            n(12), n(14);
            var o = n(11),
                r = n(32),
                d = n(432),
                c = n(433),
                l = n(51),
                h = {
                    props: {
                        item: {
                            type: Object,
                            default: {}
                        }
                    },
                    components: {
                        Prize: c.default,
                        ProductTag: d.default
                    },
                    data: function() {
                        return {
                            isOpenVideo: !0,
                            diamondCode: r.d,
                            isMea: r.f
                        }
                    },
                    methods: {
                        addsCompare: function(e) {
                            var t = o.a.get("compareList"),
                                n = {
                                    id: e.id || e.productId,
                                    name: e.name || e.productName,
                                    imageUrl: e.imageUrl || e.productImageUrl
                                };
                            if (null == t) t = [n], o.a.set("compareList", t);
                            else {
                                if (t.length >= 4) return void this.$message.error(this.$t("products.index.tips1"));
                                if (t.filter((function(t) {
                                        return t.id == e.id || t.id == e.productId
                                    })).length > 0) return void this.$message.error(this.$t("products.index.tips2"));
                                t.push(n), o.a.set("compareList", t)
                            }
                            this.$store.commit("setCompare", t);
                            var r = "pc" == this.$store.state.equipment ? "pc" : "app";
                            this.$gtag("event", "compare_".concat(l.b, "_").concat(this.item.productCode, "_").concat(r), {
                                event_label: this.$t("currency.compareTxt")
                            })
                        }
                    }
                },
                m = (n(666), n(7)),
                component = Object(m.a)(h, (function() {
                    var e = this,
                        t = e._self._c;
                    return e.item.id || e.item.productId ? t("div", {
                        staticClass: "prodItem"
                    }, [t("nuxt-link", {
                        attrs: {
                            to: (e.item.productCode, e.diamondCode, "/products/".concat(e.item.productCode, "/"))
                        }
                    }, [t("div", {
                        staticClass: "pic"
                    }, [t("el-image", {
                        staticClass: "img",
                        attrs: {
                            lazy: "",
                            src: (e.item.imageUrl || e.item.productImageUrl) + "?x-oss-process=image/format,webp",
                            fit: "contain"
                        }
                    })], 1)]), e._v(" "), t("div", {
                        class: "contenprod ".concat(e.isMea && "meacont")
                    }, [t("div", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: e._s(e.item.name || e.item.productName)
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "btnsbase a-c"
                    }, [t("div", {
                        staticClass: "fun"
                    }, [t("nuxt-link", {
                        attrs: {
                            to: e.item.productCode == e.diamondCode ? "/special/" : "/products/".concat(e.item.productCode, "/")
                        }
                    }, [t("div", {
                        staticClass: "learnmorebtn"
                    }, [e._v(e._s(e.$t("currency.LearnMore")))])])], 1), e._v(" "), t("div", {
                        staticClass: "addCompare",
                        on: {
                            click: function(t) {
                                return e.addsCompare(e.item)
                            }
                        }
                    }, [t("div", [e._v(e._s(e.$t("currency.compareTxt")))]), e._v(" "), t("i", {
                        staticClass: "el-icon-circle-plus addpic"
                    })])])]), e._v(" "), e.item.productTag && e.item.productTag.length ? t("ProductTag", {
                        attrs: {
                            tagStr: e.item.productTag
                        }
                    }) : e._e(), e._v(" "), e.item.productAwardsList && e.item.productAwardsList.length || e.item.productAwardsData && e.item.productAwardsData.length ? t("Prize", {
                        attrs: {
                            list: e.item.productAwardsList || e.item.productAwardsData
                        }
                    }) : e._e()], 1) : e._e()
                }), [], !1, null, "5701a4e6", null);
            t.default = component.exports;
            installComponents(component, {
                ProductTag: n(432).default,
                Prize: n(433).default
            })
        },
        431: function(e, t, n) {
            e.exports = n.p + "img/center-img-1.8c07a24.png"
        },
        432: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = {
                    props: {
                        tagStr: {
                            type: String,
                            default: ""
                        }
                    }
                },
                r = (n(661), n(7)),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "tagbase"
                    }, [t("div", {
                        staticClass: "lefttitle"
                    }, [t("div", [e._v(" " + e._s(e.tagStr))])]), e._v(" "), t("div", {
                        staticClass: "thv"
                    })])
                }), [], !1, null, "a0a3453e", null);
            t.default = component.exports
        },
        433: function(e, t, n) {
            "use strict";
            n.r(t);
            n(36), n(12);
            var o = {
                    props: {
                        large: {
                            type: Boolean,
                            default: !1
                        },
                        list: {
                            type: Array,
                            default: []
                        }
                    }
                },
                r = (n(664), n(7)),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "prizebase"
                    }, e._l(e.list.slice(0, 2), (function(n, o) {
                        return t("div", {
                            key: o,
                            class: "item-container ".concat(e.large && "largeitem")
                        }, [n.awardsLinkUrl || n.linkUrl ? t("a", {
                            attrs: {
                                href: n.awardsLinkUrl || n.linkUrl
                            }
                        }, [n.awardsIconUrl || n.iconUrl ? t("el-image", {
                            staticClass: "priceitem",
                            attrs: {
                                fit: "contain",
                                src: n.awardsIconUrl || n.iconUrl,
                                alt: n.awardsName || n.name
                            }
                        }) : e._e()], 1) : t("div", [n.awardsIconUrl || n.iconUrl ? t("el-image", {
                            staticClass: "priceitem",
                            attrs: {
                                src: n.awardsIconUrl || n.iconUrl,
                                alt: n.awardsName || n.name,
                                fit: "contain"
                            }
                        }) : e._e()], 1)])
                    })), 0)
                }), [], !1, null, "8aa9b0ce", null);
            t.default = component.exports
        },
        434: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAANCAYAAACUwi84AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgBzZDRCcAgDETTdoF2g47giK7hFI7hGP765woecohKxF8PHoTckZCIjLKk6ZaNTgoYxau9B/wggAQ+mi/wwPXpyKZnbbSRmWgrW2gwL5leu7piqQJ+kgtFn/XPhQAAAABJRU5ErkJggg=="
        },
        435: function(e, t, n) {
            "use strict";
            n.r(t);
            n(126), n(13), n(65), n(66);
            var o = {
                    props: {
                        scale: {
                            type: Number,
                            default: 2.5
                        },
                        url: {
                            type: String,
                            required: !0
                        },
                        bigUrl: {
                            type: String,
                            default: null
                        },
                        scroll: {
                            type: Boolean,
                            default: !1
                        },
                        showEidt: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            id: null,
                            cover: null,
                            imgbox: null,
                            imgwrap: null,
                            orginUrl: null,
                            bigImgUrl: null,
                            bigOrginUrl: null,
                            imgUrl: null,
                            img: null,
                            canvas: null,
                            ctx: null,
                            rectTimesX: 0,
                            rectTimesY: 0,
                            imgTimesX: 0,
                            imgTimesY: 0,
                            init: !1,
                            step: 0,
                            bigStep: 0,
                            vertical: !1,
                            showImg: !0
                        }
                    },
                    created: function() {
                        for (var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", t = "", i = 0; i < 10; i++) t += e.charAt(Math.floor(48 * Math.random()));
                        this.id = t, this.imgUrl = this.url, this.orginUrl = this.url, this.bigImgUrl = this.bigUrl, this.bigOrginUrl = this.bigUrl
                    },
                    watch: {
                        url: function(e) {
                            this.imgUrl = e, this.orginUrl = e, this.initTime()
                        },
                        bigUrl: function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }((function() {
                            this.bigImgUrl = bigUrl, this.bigOrginUrl = bigUrl, this.initTime()
                        }))
                    },
                    mounted: function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.initTime()
                        }))
                    },
                    beforeDestroy: function() {
                        this.removeCanvas()
                    },
                    methods: {
                        initTime: function() {
                            var e = this;
                            this.init = !1;
                            var t, n = this.$refs[this.id];
                            this.imgbox = n, this.cover = n.querySelector(".mouse-cover"), this.cover.style.width = this.imgbox.offsetWidth / this.scale + "px", this.cover.style.height = this.imgbox.offsetHeight / this.scale + "px", this.cover.style.left = "-100%", this.cover.style.top = "-100%", this.imgwrap = n.querySelector("img"), t = this.bigImgUrl ? this.bigImgUrl : this.imgUrl, this.img = new Image, this.img.src = t, this.img.onload = function() {
                                e.rectTimesX = e.imgbox.offsetWidth / e.scale / e.imgwrap.offsetWidth, e.rectTimesY = e.imgbox.offsetHeight / e.scale / e.imgwrap.offsetHeight, e.imgTimesX = e.img.width / e.imgwrap.offsetWidth, e.imgTimesY = e.img.height / e.imgwrap.offsetHeight, e.vertical = e.img.width < e.img.height, e.init = !0
                            }, this.canvas && (this.canvas.parentNode.removeChild(this.canvas), this.canvas = null), this.canvas = document.createElement("canvas"), this.canvas.className = "mouse-cover-canvas", this.canvas.style.position = "absolute", this.canvas.style.left = this.getLeftOffset(this.imgbox) + this.imgbox.offsetWidth + 10 + "px", this.canvas.style.top = this.imgbox.offsetTop + "px", this.canvas.style.border = "1px solid #eee", this.canvas.style.zIndex = "99999", this.canvas.height = this.imgbox.offsetHeight, this.canvas.width = this.imgbox.offsetWidth, this.canvas.style.display = "none", document.body.append(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                        },
                        removeCanvas: function() {
                            this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.img && (this.img.onload = null), this.imgbox = null, this.cover = null, this.imgwrap = null, this.img = null, this.canvas = null, this.ctx = null
                        },
                        getLeftOffset: function(element) {
                            for (var e = 0; element;) e += element.offsetLeft, element = element.offsetParent;
                            return e
                        },
                        initBox: function() {
                            var e = this;
                            this.showImg = !1, this.canvas.style.display = "none";
                            var t, n = this.$refs[this.id];
                            t = this.bigImgUrl ? this.bigImgUrl : this.imgUrl, this.img = new Image, this.img.src = t, this.img.onload = function() {
                                e.vertical = e.img.width < e.img.height, e.showImg = !0;
                                n.querySelector("img");
                                setTimeout((function() {
                                    e.rectTimesX = e.imgbox.offsetWidth / e.scale / n.querySelector("img").offsetWidth, e.rectTimesY = e.imgbox.offsetHeight / e.scale / n.querySelector("img").offsetHeight
                                }), 20)
                            }
                        },
                        mousemove: function(e) {
                            if (!this.init) return !1;
                            var t = this;
                            var n, o = e || event,
                                r = {
                                    x: (n = o).clientX - t.cover.offsetWidth / 2,
                                    y: n.clientY - t.cover.offsetHeight / 2
                                },
                                d = function(e) {
                                    var t = null,
                                        n = null,
                                        o = e.offsetParent;
                                    for (t += e.offsetLeft, n += e.offsetTop; o;) - 1 === navigator.userAgent.indexOf("MSIE 8.0") && (t += o.clientLeft, n += o.clientTop), t += o.offsetLeft, n += o.offsetTop, o = o.offsetParent;
                                    return {
                                        left: t,
                                        top: n
                                    }
                                }(this.imgwrap),
                                c = {
                                    minX: d.left,
                                    maxX: d.left + this.imgwrap.offsetWidth - this.cover.offsetWidth,
                                    minY: d.top - document.documentElement.scrollTop,
                                    maxY: d.top - document.documentElement.scrollTop + this.imgwrap.offsetHeight - this.cover.offsetHeight
                                };
                            r.x > c.maxX && (r.x = c.maxX), r.x < c.minX && (r.x = c.minX), r.y > c.maxY && (r.y = c.maxY), r.y < c.minY && (r.y = c.minY), this.cover.style.left = r.x + "px", this.cover.style.top = r.y + "px", this.ctx.clearRect(0, 0, this.imgwrap.offsetWidth, this.imgwrap.offsetHeight);
                            var l = r.x - (d.left - document.documentElement.scrollLeft),
                                h = r.y - (d.top - document.documentElement.scrollTop);
                            this.ctx.drawImage(this.img, l * this.imgTimesX, h * this.imgTimesY, this.img.width * this.rectTimesX, this.img.height * this.rectTimesY, 0, 0, this.imgbox.offsetWidth, this.imgbox.offsetHeight)
                        },
                        mouseover: function(e) {
                            if (!this.init) return !1;
                            e = e || event, this.scroll || (e.currentTarget.addEventListener("mousewheel", (function(e) {
                                e.preventDefault()
                            }), !1), e.currentTarget.addEventListener("DOMMouseScroll", (function(e) {
                                e.preventDefault()
                            }), !1)), this.cover.style.display = "block", this.canvas.style.display = "block"
                        },
                        mouseleave: function() {
                            if (!this.init) return !1;
                            this.cover.style.display = "none", this.canvas.style.display = "none"
                        },
                        rotate: function(e) {
                            var t = this,
                                n = new Image;
                            if (n.crossOrigin = "Anonymous", n.src = this.orginUrl, n.onload = function() {
                                    t.rotateImg(n, e, t.step)
                                }, this.bigOrginUrl) {
                                var o = new Image;
                                n.crossOrigin = "Anonymous", o.src = this.bigOrginUrl, o.onload = function() {
                                    t.rotateImg(o, e, t.bigStep, !0)
                                }
                            }
                        },
                        rotateImg: function(img, e, t) {
                            var n = this,
                                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            if (null != img) {
                                var r = img.height,
                                    d = img.width;
                                null == t && (t = 0), "right" == e ? ++t > 3 && (t = 0) : --t < 0 && (t = 3);
                                var canvas = document.createElement("canvas"),
                                    c = 90 * t * Math.PI / 180,
                                    l = canvas.getContext("2d");
                                switch (canvas.width = r, canvas.height = d, l.rotate(c), l.drawImage(img, 0, -r), t) {
                                    case 0:
                                        canvas.width = d, canvas.height = r, l.drawImage(img, 0, 0);
                                        break;
                                    case 1:
                                        canvas.width = r, canvas.height = d, l.rotate(c), l.drawImage(img, 0, -r);
                                        break;
                                    case 2:
                                        canvas.width = d, canvas.height = r, l.rotate(c), l.drawImage(img, -d, -r);
                                        break;
                                    case 3:
                                        canvas.width = r, canvas.height = d, l.rotate(c), l.drawImage(img, -d, 0)
                                }
                                var h = canvas.toDataURL();
                                o ? (this.bigImgUrl = h, this.bigStep = t, this.initBox()) : (this.imgUrl = h, this.step = t, this.$nextTick((function() {
                                    n.initBox()
                                })))
                            }
                        }
                    }
                },
                r = o,
                d = (n(702), n(7)),
                component = Object(d.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        ref: e.id,
                        staticClass: "magnifier-box",
                        class: e.vertical ? "vertical" : "",
                        on: {
                            mousemove: e.mousemove,
                            mouseover: e.mouseover,
                            mouseleave: e.mouseleave
                        }
                    }, [t("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showImg,
                            expression: "showImg"
                        }],
                        staticStyle: {
                            padding: "55px"
                        },
                        attrs: {
                            src: e.imgUrl,
                            alt: ""
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "mouse-cover"
                    }), e._v(" "), e.showEidt ? t("div", {
                        staticClass: "edit-wrap"
                    }, [t("span", {
                        staticClass: "rotate-left",
                        on: {
                            click: function(t) {
                                return e.rotate("left")
                            }
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "rotate-right",
                        on: {
                            click: function(t) {
                                return e.rotate("right")
                            }
                        }
                    })]) : e._e()])
                }), [], !1, null, "15697a7e", null);
            t.default = component.exports
        },
        436: function(e, t, n) {
            "use strict";
            n.r(t);
            n(126);
            var o = n(32),
                r = {
                    props: {
                        currentPage: {
                            type: Number,
                            default: 1
                        },
                        pageSize: {
                            type: Number,
                            default: 9
                        },
                        total: {
                            type: Number,
                            default: 0
                        },
                        baseStype: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            isMea: o.f
                        }
                    },
                    methods: {
                        subClick: function() {
                            1 != this.currentPage && this.$emit("currentChange", this.currentPage - 1)
                        },
                        addClick: function() {
                            this.currentPage != Math.ceil(this.total / this.pageSize) && this.$emit("currentChange", this.currentPage + 1)
                        }
                    }
                },
                d = (n(778), n(7)),
                component = Object(d.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "pagebase",
                        style: e.baseStype
                    }, [t("div", {
                        staticClass: "numbase",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.subClick.apply(null, arguments)
                            }
                        }
                    }, [1 == e.currentPage ? t("i", {
                        staticClass: "el-icon-arrow-left",
                        style: {
                            color: "#999",
                            transform: e.isMea ? "rotate(180deg)" : "rotate(0deg)"
                        }
                    }) : t("i", {
                        staticClass: "el-icon-caret-left",
                        style: {
                            transform: e.isMea ? "rotate(180deg)" : "rotate(0deg)"
                        }
                    })]), e._v(" "), t("div", {
                        staticClass: "pagenumber"
                    }, [e._v("\n        " + e._s("".concat(e.currentPage, " / ").concat(Math.ceil(e.total / e.pageSize))) + "\n    ")]), e._v(" "), t("div", {
                        staticClass: "numbase",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.addClick.apply(null, arguments)
                            }
                        }
                    }, [e.currentPage == Math.ceil(e.total / e.pageSize) ? t("i", {
                        staticClass: "el-icon-arrow-right",
                        style: {
                            color: "#999",
                            transform: e.isMea ? "rotate(180deg)" : "rotate(0deg)"
                        }
                    }) : t("i", {
                        staticClass: "el-icon-caret-right",
                        style: {
                            transform: e.isMea ? "rotate(180deg)" : "rotate(0deg)"
                        }
                    })])])
                }), [], !1, null, "bf58d128", null);
            t.default = component.exports
        },
        440: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVEiJY7ylKfOfgY6AiZ6WjVo4auGohaMWjlo4auGohaMWjlo4auGohcPWQgCWNAJY8OXOdgAAAABJRU5ErkJggg=="
        },
        441: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABWSURBVEiJ7daxDQAhDATBBVED7dAarX0R3wRVkFkW+Tm6jRx5JEduwKawXokBjDR/wBE5E1gveIBfBEblJzVo0KBBgwYNGhSUn6gpdGJ3BpcQjMpPegEWlgTo58HsNwAAAABJRU5ErkJggg=="
        },
        442: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAYAAAB4zEQNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKSURBVHgBdc/RDcIgFAVQ3gsDOIoj6AZuoHwQwhTWDfwhhPCBbuAGXcEROgITEG8b27S0vckLLzk3EIRAYownsREOIVxKKS0K9xUaYz7AN6apCzQu3vsXM18xjdb6scCtAs8RVz//5y2ldJjQOXeUUrZYO+BZKZWpgtyDtbYb3tyD4StIJqJvDX1+OoVKZoErHvwAAAAASUVORK5CYII="
        },
        443: function(e, t, n) {
            e.exports = n.p + "img/img-1.6f1a4ef.png"
        },
        444: function(e, t, n) {
            e.exports = n.p + "img/logo2.daa8239.png"
        },
        447: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABICAYAAADxhwuUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALwSURBVHic7ZerjutAEERrDIMWLhwa6D+7n7J/FpbQgQsXRWG+YOPI8foxPe5IU+UckpCW+qis1lQ4n8//QggfqJDb7fbVtu2PZUbNZ0gD4NtxH1cOh8NnwZiaz4MGQPJZxZ+u62LBWHJew41CnwdNCKHaL7HrOvOXqOYzpDkej8lpl1cQrQNqPkOa+2/avMaLuFwusWAsOa/hRqEPgHtYaqdDzaenDyu5beNPtA6o+fQ0AHC9Xqv9EgGYv0Q1n54GANq2/em6rrisvZIQwsfpdDKVXDWfnmbwv9qv8V2OfxmGlXxW8eddjn95hKX2glLzAQZhqZVJNR/g+QwCFZ+OdzkehaV2OtR8xmElt238idYBNZ+nsNTKpJrPU1hqZVLNZ/zAAPTKpIzPVFjJZxV/9l6O/4Sl9oJS8vkTllqZVPKZOoNAxadjz+V4Miyl0wHo+MyFldy28SdaB1R8JsNSK5MqPpNhqZVJFZ+5BwYgVCbv0PsshZV8VvFnr+V4NiyVF1SPgs9sWEplEtDwWTqDQMWnY4/leDEshdMxhN1nLazkto0/0TrA7rMYlkqZ7GH3WQxLpUz2sPusPTAAgTI5gtYnJ6zks4o/eyvHq2Gxv6DGMPushqVQJocw++ScQaDi07GncpwVFvPpmILVJzes5LaNP9E6wOqTFRZ7mRzD6pMVFnuZHMPqk/vAAIjL5Ax0Ppawks8q/uylHGeHxfqCmoPRJzss5jI5BaOP5QwCFZ+OPZRjU1iMp2MJNh9rWMltG3+idYDNxxQWa5mcg83HFBZrmZyDzcf6wAAIy+QKND4lYSWfVfxRL8fmsNheUGsw+ZjDYiyTSzD5lJxBoOLToVyOi8JiOh05sPiUhpXctvEnWgdYfIrCYiuTa7D4FIXFVibXYPEpfWAARGUyk+p9toSVfFbxR7UcF4fF8oLKhcGnOCymMpkDg8+WMwhUfDoUy/GmsBhOh4XafbaGlZx2eQXROlC7z6awWMpkLrX7/AfC5PCfAGegWwAAAABJRU5ErkJggg=="
        },
        448: function(e, t, n) {
            e.exports = n.p + "img/scorebgimg.57cb085.png"
        },
        449: function(e, t, n) {
            e.exports = n.p + "img/compatibility.f6cc93a.jpg"
        },
        451: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(32),
                r = n(51),
                d = {
                    props: {
                        faqData: {
                            type: Array,
                            default: []
                        }
                    },
                    data: function() {
                        return {
                            isOpenFaq: !1,
                            isMea: o.f
                        }
                    },
                    methods: {
                        openClick: function() {
                            this.isOpenFaq = !this.isOpenFaq;
                            var e = "pc" == this.$store.state.equipment ? "pc" : "app";
                            this.$gtag("event", "product_".concat(r.b, "_").concat(this.$route.params.productCode, "-").concat(this.$t("support.faq.t1"), "_").concat(e), {
                                event_label: this.$t("support.faq.t1")
                            })
                        }
                    },
                    mounted: function() {
                        this.isMea && setTimeout((function() {
                            var e = document.createElement("style");
                            e.textContent = ".el-collapse-item__arrow{\n                    margin: 0 auto 0 8px;\n                }", document.querySelector("head").appendChild(e)
                        }), 100)
                    }
                },
                c = (n(705), n(7)),
                component = Object(c.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [t("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [t("h2", {
                        staticClass: "title"
                    }, [e._v(e._s(e.$t("support.faq.t1")))]), e._v(" "), t("div", {
                        staticClass: "changeopen",
                        on: {
                            click: e.openClick
                        }
                    }, [e.isOpenFaq ? t("img", {
                        attrs: {
                            src: n(429),
                            alt: ""
                        }
                    }) : t("img", {
                        attrs: {
                            src: n(428),
                            alt: ""
                        }
                    })])]), e._v(" "), e.isOpenFaq ? t("div", e._l(e.faqData, (function(n, o) {
                        return t("el-collapse", {
                            key: o,
                            class: "collapse-box  ".concat(o % 2 == 0 ? "whitecolor" : "garycolor")
                        }, [t("el-collapse-item", {
                            attrs: {
                                title: n.question,
                                name: "1"
                            },
                            scopedSlots: e._u([{
                                key: "title",
                                fn: function() {
                                    return [t("span", {
                                        domProps: {
                                            innerHTML: e._s(n.question)
                                        }
                                    })]
                                },
                                proxy: !0
                            }], null, !0)
                        }, [e._v(" "), t("div", {
                            class: "toggle ".concat(e.isMea && "meatole"),
                            domProps: {
                                innerHTML: e._s(n.answer)
                            }
                        })])], 1)
                    })), 1) : e._e()])
                }), [], !1, null, "79b642b6", null);
            t.default = component.exports
        },
        452: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(5),
                r = (n(30), n(23), n(35), n(644)),
                d = n(32),
                c = {
                    props: {
                        videoData: {
                            type: Array,
                            default: []
                        }
                    },
                    components: {
                        PlayVideo: r.default
                    },
                    data: function() {
                        return {
                            isOpenVideo: !0,
                            newVides: [],
                            isMea: d.f
                        }
                    },
                    methods: {
                        videoPlay: function(e) {
                            this.$refs.playVideoRef.showVideo(e)
                        }
                    }
                },
                l = (n(709), n(711), n(7)),
                component = Object(l.a)(c, (function() {
                    var e = this,
                        t = e._self._c;
                    return e.videoData && e.videoData.length ? t("div", [t("section", {
                        staticClass: "video-new-section"
                    }, [t("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [t("h2", {
                        staticClass: "title"
                    }, [e._v(e._s(e.$t("currency.videos")))])]), e._v(" "), e.isOpenVideo && (e.videoData.length > 2 && "pc" == e.$store.state.equipment || e.videoData.length > 1 && "pc" != e.$store.state.equipment) ? t("Swiper", {
                        attrs: {
                            options: Object(o.a)(Object(o.a)(Object(o.a)({
                                loop: !1,
                                autoplay: !1,
                                slidesPerView: "pc" == e.$store.state.equipment ? 3 : 2,
                                spaceBetween: "pc" == e.$store.state.equipment ? 13 : 8
                            }, "slidesPerView", "auto"), "freeMode", !0), "navigation", {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            })
                        }
                    }, e._l(e.videoData, (function(o, r) {
                        return t("SwiperSlide", {
                            key: r,
                            style: {
                                width: "pc" == e.$store.state.equipment ? "calc((100% - 26px) / 3)" : "55vw"
                            }
                        }, [t("div", {
                            staticClass: "videoitembase",
                            on: {
                                click: function(t) {
                                    e.videoPlay(o.videoLinkUrl.includes("youtube") ? "https://www.youtube.com/embed/".concat(o.videoId.replace(/\s+/g, "")) : "https://player.bilibili.com/player.html?bvid=".concat(o.videoId.replace(/\s+/g, "")))
                                }
                            }
                        }, [t("div", {
                            staticClass: "imgbase"
                        }, [o.videoImgUrl ? t("img", {
                            attrs: {
                                referrerpolicy: "no-referrer",
                                src: o.videoImgUrl + "?x-oss-process=image/resize,w_500/format,webp",
                                alt: ""
                            }
                        }) : t("video", {
                            staticStyle: {
                                width: "100%",
                                height: "100%",
                                "object-fit": "cover"
                            },
                            attrs: {
                                src: o.videoLinkUrl
                            }
                        }), e._v(" "), t("img", {
                            staticClass: "playimg",
                            attrs: {
                                src: n(456),
                                alt: ""
                            }
                        })]), e._v(" "), t("div", {
                            staticClass: "authinfoPc"
                        }, [t("img", {
                            class: "userhead ".concat(e.isMea && "meahead"),
                            attrs: {
                                referrerpolicy: "no-referrer",
                                src: o.authorLinkUrl,
                                alt: ""
                            }
                        }), e._v(" "), t("div", {
                            staticStyle: {
                                overflow: "hidden"
                            }
                        }, [t("div", {
                            staticClass: "desc titles"
                        }, [e._v(e._s(o.videoTitle))]), e._v(" "), t("div", {
                            staticClass: "desc"
                        }, [e._v(" " + e._s(o.author))])])]), e._v(" "), t("div", {
                            staticClass: "authinfoPhone"
                        }, [t("div", {
                            staticClass: "desc titles"
                        }, [e._v(e._s(o.videoTitle))]), e._v(" "), t("div", {
                            staticClass: "a-c",
                            staticStyle: {
                                "margin-top": "7px"
                            }
                        }, [t("img", {
                            class: "userhead ".concat(e.isMea && "meahead"),
                            attrs: {
                                referrerpolicy: "no-referrer",
                                src: o.authorLinkUrl,
                                alt: ""
                            }
                        }), e._v(" "), t("div", {
                            staticClass: "desc"
                        }, [e._v(" " + e._s(o.author))])])])])])
                    })), 1) : e._e(), e._v(" "), e.isOpenVideo && 1 == e.videoData.length ? t("div", {
                        staticClass: "onrvideobase"
                    }, [t("div", {
                        staticClass: "oneitembase",
                        style: {
                            backgroundImage: "url(".concat(e.videoData[0].videoImgUrl + "?x-oss-process=image/resize,w_500/format,webp", ")")
                        },
                        on: {
                            click: function(t) {
                                e.videoPlay(e.videoData[0].videoLinkUrl.includes("youtube") ? "https://www.youtube.com/embed/".concat(e.videoData[0].videoId.replace(/\s+/g, "")) : "https://player.bilibili.com/player.html?bvid=".concat(e.videoData[0].videoId.replace(/\s+/g, "")))
                            }
                        }
                    }, [t("div", {
                        staticClass: "authOneinfoPc"
                    }, [t("img", {
                        class: "userheaOnePc ".concat(e.isMea && "meaonepc"),
                        attrs: {
                            referrerpolicy: "no-referrer",
                            src: e.videoData[0].authorLinkUrl,
                            alt: ""
                        }
                    }), e._v(" "), t("div", {
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [t("div", {
                        staticClass: "desc titles"
                    }, [e._v(e._s(e.videoData[0].videoTitle))]), e._v(" "), t("div", {
                        staticClass: "desc names"
                    }, [e._v(" " + e._s(e.videoData[0].author))])])]), e._v(" "), t("div", {
                        staticClass: "authinfoOnePhone"
                    }, [t("div", {
                        staticClass: "desc titles",
                        staticStyle: {
                            "margin-top": "11px",
                            "font-weight": "900"
                        }
                    }, [e._v(e._s(e.videoData[0].videoTitle) + "\n                    ")]), e._v(" "), t("div", {
                        staticClass: "a-c",
                        staticStyle: {
                            "margin-top": "3px"
                        }
                    }, [t("img", {
                        staticClass: "userOnehead",
                        attrs: {
                            referrerpolicy: "no-referrer",
                            src: e.videoData[0].authorLinkUrl,
                            alt: ""
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "desc",
                        style: {
                            marginLeft: e.isMea ? "0" : "3px",
                            marginRight: e.isMea ? "3px" : "0"
                        }
                    }, [e._v(" " + e._s(e.videoData[0].author))])])]), e._v(" "), t("img", {
                        staticClass: "playOneimg",
                        attrs: {
                            src: n(456),
                            alt: ""
                        }
                    })])]) : e._e(), e._v(" "), e.isOpenVideo && 2 == e.videoData.length && "pc" == e.$store.state.equipment ? t("div", {
                        staticClass: "onrvideobase twovideo"
                    }, e._l(e.videoData, (function(o, r) {
                        return t("div", {
                            key: r,
                            style: {
                                width: "calc(100% / 2 - 5px)"
                            }
                        }, [t("div", {
                            staticClass: "videoitembase",
                            on: {
                                click: function(t) {
                                    e.videoPlay(o.videoLinkUrl.includes("youtube") ? "https://www.youtube.com/embed/".concat(o.videoId.replace(/\s+/g, "")) : "https://player.bilibili.com/player.html?bvid=".concat(o.videoId.replace(/\s+/g, "")))
                                }
                            }
                        }, [t("div", {
                            staticClass: "imgsecbase"
                        }, [o.videoImgUrl ? t("img", {
                            attrs: {
                                referrerpolicy: "no-referrer",
                                src: o.videoImgUrl + "?x-oss-process=image/resize,w_500/format,webp",
                                alt: ""
                            }
                        }) : t("video", {
                            staticStyle: {
                                width: "100%",
                                height: "100%",
                                "object-fit": "cover"
                            },
                            attrs: {
                                src: o.videoLinkUrl
                            }
                        }), e._v(" "), t("img", {
                            staticClass: "playimg",
                            attrs: {
                                src: n(456),
                                alt: ""
                            }
                        })]), e._v(" "), t("div", {
                            staticClass: "authinfoPc"
                        }, [t("img", {
                            class: "userhead ".concat(e.isMea && "meahead"),
                            attrs: {
                                referrerpolicy: "no-referrer",
                                src: o.authorLinkUrl,
                                alt: ""
                            }
                        }), e._v(" "), t("div", {
                            staticStyle: {
                                overflow: "hidden"
                            }
                        }, [t("div", {
                            staticClass: "desc titles"
                        }, [e._v(e._s(o.videoTitle))]), e._v(" "), t("div", {
                            staticClass: "desc"
                        }, [e._v(" " + e._s(o.author))])])]), e._v(" "), t("div", {
                            staticClass: "authinfoPhone"
                        }, [t("div", {
                            staticClass: "desc titles"
                        }, [e._v(e._s(o.videoTitle))]), e._v(" "), t("div", {
                            staticClass: "a-c",
                            staticStyle: {
                                "margin-top": "7px"
                            }
                        }, [t("img", {
                            class: "userhead ".concat(e.isMea && "meahead"),
                            attrs: {
                                referrerpolicy: "no-referrer",
                                src: o.authorLinkUrl,
                                alt: ""
                            }
                        }), e._v(" "), t("div", {
                            staticClass: "desc"
                        }, [e._v(" " + e._s(o.author))])])])])])
                    })), 0) : e._e(), e._v(" "), e.isOpenVideo && e.videoData.length > 3 ? t("div", {
                        staticClass: "swiper-button-next"
                    }) : e._e(), e._v(" "), e.isOpenVideo && e.videoData.length > 3 ? t("div", {
                        staticClass: "swiper-button-prev"
                    }) : e._e()], 1), e._v(" "), t("PlayVideo", {
                        ref: "playVideoRef"
                    })], 1) : e._e()
                }), [], !1, null, "02781578", null);
            t.default = component.exports;
            installComponents(component, {
                PlayVideo: n(644).default
            })
        },
        453: function(e, t, n) {
            "use strict";
            n.r(t);
            n(280);
            var o = n(51),
                r = n(32),
                d = {
                    props: {
                        urlList: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        buyBtnTxt: {
                            type: String,
                            default: ""
                        },
                        productCode: {
                            type: String,
                            default: ""
                        },
                        productName: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            showMore: !1,
                            showPcs: !1,
                            isMea: r.f,
                            baseBtnWidth: 0
                        }
                    },
                    methods: {
                        dirLink: function(link) {
                            window.open(link, "_blank")
                        },
                        phoneOpen: function() {
                            "pc" != this.$store.state.equipment ? this.showMore = !this.showMore : this.showPcs ? (this.showPcs = !1, this.showMore = !1) : (this.showMore = !0, this.showPcs = !0)
                        },
                        pcOpen: function(e) {
                            !e && this.showPcs || "pc" == this.$store.state.equipment && (this.showMore = e)
                        },
                        pageBurial: function(title) {
                            var e = "pc" == this.$store.state.equipment ? "pc" : "app";
                            this.$gtag("event", "product_buy_".concat(o.b, "_").concat(this.productCode, "_").concat(title, "_").concat(e), {
                                event_label: title,
                                event_category: this.productName
                            })
                        },
                        handleGlobalClick: function(e) {
                            var t = this.$refs.buyBase.querySelector(".selllist"),
                                n = this.$refs.buyBase.querySelector(".basebuyBtnTxtBtn");
                            this.$refs.buyBase.contains(e.target) || !this.showMore || t && t.contains(e.target) || n && n.contains(e.target) || this.phoneOpen()
                        }
                    },
                    mounted: function() {
                        var e = this;
                        document.addEventListener("click", this.handleGlobalClick), this.$nextTick((function() {
                            var t = document.querySelector(".basebuyBtnTxtBtn");
                            t && (e.baseBtnWidth = t.offsetWidth)
                        }))
                    },
                    beforeDestroy: function() {
                        document.removeEventListener("click", this.handleGlobalClick)
                    }
                },
                c = (n(714), n(7)),
                component = Object(c.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [e.urlList && e.urlList.length > 1 ? t("div", {
                        ref: "buyBase",
                        class: "buybase ".concat(e.isMea && "meabase"),
                        on: {
                            mouseenter: function(t) {
                                return e.pcOpen(!0)
                            },
                            mouseleave: function(t) {
                                return e.pcOpen(!1)
                            }
                        }
                    }, [t("div", {
                        staticClass: "btnline"
                    }, [t("div", {
                        staticClass: "basebuyBtnTxtBtn",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.phoneOpen.apply(null, arguments)
                            },
                            mouseenter: function(t) {
                                return e.pcOpen(!0)
                            }
                        }
                    }, [e._v("\n                " + e._s(e.buyBtnTxt)), t("img", {
                        staticClass: "downimg",
                        attrs: {
                            src: n(713),
                            alt: ""
                        }
                    })]), e._v(" "), t("div", {
                        staticClass: "btnright",
                        on: {
                            mouseenter: function(t) {
                                return e.pcOpen(!1)
                            }
                        }
                    })]), e._v(" "), e.showMore ? t("div", {
                        staticClass: "selllist",
                        style: {
                            width: "".concat(e.baseBtnWidth, "px")
                        },
                        on: {
                            mouseenter: function(t) {
                                return e.pcOpen(!0)
                            },
                            mouseleave: function(t) {
                                return e.pcOpen(!1)
                            }
                        }
                    }, e._l(e.urlList, (function(n, o) {
                        return t("div", {
                            key: o,
                            staticClass: "iconitem"
                        }, [t("a", {
                            attrs: {
                                href: n.link,
                                target: "_blank"
                            },
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), e.pageBurial(n.commerceName)
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: n.logo,
                                alt: n.commerceName
                            }
                        })])])
                    })), 0) : e._e()]) : e.urlList && 1 == e.urlList.length ? t("div", {
                        staticClass: "btn-buy",
                        on: {
                            click: function(t) {
                                return e.dirLink(e.urlList[0].link)
                            }
                        }
                    }, [e._v("\n        " + e._s(e.buyBtnTxt) + "\n    ")]) : e._e()])
                }), [], !1, null, "35c237fc", null);
            t.default = component.exports
        },
        454: function(e, t, n) {
            "use strict";
            n.r(t);
            n(280);
            var o = n(51),
                r = n(32),
                d = {
                    props: {
                        urlList: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        buyBtnTxt: {
                            type: String,
                            default: ""
                        },
                        productCode: {
                            type: String,
                            default: ""
                        },
                        productName: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            showMore: !1,
                            isMea: r.f
                        }
                    },
                    methods: {
                        dirLink: function(link) {
                            window.open(link, "_blank")
                        },
                        pageBurial: function(title) {
                            var e = "pc" == this.$store.state.equipment ? "pc" : "app";
                            this.$gtag("event", "product_".concat(o.b, "_buyhead_").concat(this.productCode, "_").concat(title, "_").concat(e), {
                                event_label: title,
                                event_category: this.productName
                            })
                        },
                        handleVisibleChange: function(e) {
                            this.showMore = e
                        },
                        hideList: function() {
                            "pc" != this.$store.state.equipment && (this.showMore ? this.$refs.dropdownRef.hide() : this.$refs.dropdownRef.show())
                        },
                        handleScroll: function() {
                            this.showMore && this.$refs.dropdownRef.hide()
                        }
                    },
                    mounted: function() {
                        window.addEventListener("scroll", this.handleScroll)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("scroll", this.handleScroll)
                    }
                },
                c = (n(717), n(719), n(7)),
                component = Object(c.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [e.urlList && e.urlList.length > 1 ? t("el-dropdown", {
                        ref: "dropdownRef",
                        attrs: {
                            trigger: "click"
                        },
                        on: {
                            "visible-change": e.handleVisibleChange
                        }
                    }, [t("div", {
                        class: "buy ".concat(e.isMea && "meabuy"),
                        on: {
                            click: e.hideList
                        }
                    }, [e._v(e._s(e.buyBtnTxt) + " "), t("img", {
                        staticClass: "downimg",
                        attrs: {
                            src: n(716),
                            alt: ""
                        }
                    })]), e._v(" "), "pc" == e.$store.state.equipment ? t("el-dropdown-menu", {
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, e._l(e.urlList, (function(n, o) {
                        return t("el-dropdown-item", {
                            key: o
                        }, [t("a", {
                            staticClass: "pcitem",
                            attrs: {
                                href: n.link,
                                target: "_blank"
                            },
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), e.pageBurial(n.commerceName)
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: n.logo,
                                alt: n.commerceName
                            }
                        }), e._v(" "), o !== e.urlList.length - 1 ? t("div", {
                            staticStyle: {
                                position: "absolute",
                                bottom: "0",
                                "background-color": "#BCBCBC",
                                width: "100%",
                                height: "0.25px"
                            }
                        }) : e._e()])])
                    })), 1) : e._e(), e._v(" "), "pc" != e.$store.state.equipment ? t("el-dropdown-menu", {
                        staticClass: "mobilemenubase",
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, e._l(e.urlList, (function(n, o) {
                        return t("el-dropdown-item", {
                            key: o
                        }, [t("a", {
                            staticClass: "phoneItem",
                            attrs: {
                                href: n.link,
                                target: "_blank"
                            },
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), e.pageBurial(n.commerceName)
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: n.logo,
                                alt: n.commerceName
                            }
                        })])])
                    })), 1) : e._e()], 1) : e.urlList && 1 == e.urlList.length ? t("div", {
                        staticClass: "directly",
                        on: {
                            click: function(t) {
                                return e.dirLink(e.urlList[0].link)
                            }
                        }
                    }, [e._v(e._s(e.buyBtnTxt))]) : e._e()], 1)
                }), [], !1, null, "0c0de6c2", null);
            t.default = component.exports
        },
        455: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOSURBVHgBvY/RCQAgCEQlGqDRGqENolGa0BXaoAgUzAL96sGhyHGcADeZZIKkgwBO3MZIfZK48V7EbXCnaQh3YleJlWbXiZqPX2vay7gA0qUSqVT022wAAAAASUVORK5CYII="
        },
        456: function(e, t, n) {
            e.exports = n.p + "img/playvideoimg.f160a05.png"
        },
        458: function(e, t, n) {
            e.exports = n.p + "img/ambassador.b490307.jpg"
        },
        465: function(e, t, n) {
            e.exports = n.p + "img/homekefuclose.4865784.png"
        },
        469: function(e, t, n) {
            var content = n(662);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("1aeaf20a", content, !0, {
                sourceMap: !1
            })
        },
        470: function(e, t, n) {
            var content = n(665);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("04628986", content, !0, {
                sourceMap: !1
            })
        },
        471: function(e, t, n) {
            var content = n(667);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("372aee6a", content, !0, {
                sourceMap: !1
            })
        },
        472: function(e, t, n) {
            var content = n(669);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("be59235a", content, !0, {
                sourceMap: !1
            })
        },
        474: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAeCAYAAAB9hg0IAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJBSURBVFiF3djPi41RHMfx17h+bKiRCJEGC5KyUqRMfvwdNmiSlKSUpKSkpGwsZmxmo6Rkoyw0flNMFoqIDJmGTMOkaTQZMxbn3ky3uXPv8+M8F+/Vfc453+/z+Tzfc7/nubcFHdjr/+ZSCb2Yh01NFhOLblwslS+eYD42Nk9PFC7jApSmDD7GQmxohqIIXMW5ykWpavIhlmBdkYoicB1npg5UG4UHWIm1RSiKwE2cwuTUwemMTuIe1qAtvq5cuY0T+FU9MZ1RmMBdrBeq+y/wCMfwc7rJWkYJT+WOcOwsy11WvjzDEYzVWjCTURhHDzYLTepv5AUOYXSmRfWMErZCD7ZiUXZdufIGBzBSb2FLgqSt6MTqlKLy5h32Y7iRxUmMEiraiVUJ4/Lmg2ByqNGApEZhsWC2Wd34o2ByMElQI9/RakaFo6cdC1LEZ2FA+LX1JWlgmopWWC5UdmmGHEn4LFRyIE1wFqOwAl3Cdo7JIPahP22CWRkF9AtbqeGmkIKh8j1SmyR7RSu0CZVtzSlfhWGhkn1ZE2WtaIU+4al/zymfcq4OOZgkXdetxVfhb5ndmJsx1wgO4nVWURXyNEpoGs+xC3NS5viBw+U8uZG3UfiEV9iJ2Qljx3AUT/MWFcMooUP2YYfG+8A4juN+DEGxjMJ7wXC7+t19AidxK5aYmEbhrfC6tr3OutO4EVNIbKOEzvkN22rMn8W12CKKMAovhSNjS9X4eVwpSEOh7BHO2t7y58JI2v6z0u3P+dpd5I1/A5ljZL3U2qijAAAAAElFTkSuQmCC"
        },
        489: function(e, t, n) {
            var content = n(703);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("580d2c94", content, !0, {
                sourceMap: !1
            })
        },
        490: function(e, t, n) {
            var content = n(706);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("04d9e322", content, !0, {
                sourceMap: !1
            })
        },
        491: function(e, t, n) {
            e.exports = n.p + "img/icon-collapse-2.432f371.png"
        },
        492: function(e, t, n) {
            var content = n(708);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("9d42be0a", content, !0, {
                sourceMap: !1
            })
        },
        493: function(e, t, n) {
            var content = n(710);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("0df4f8f6", content, !0, {
                sourceMap: !1
            })
        },
        494: function(e, t, n) {
            var content = n(712);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("73766a8f", content, !0, {
                sourceMap: !1
            })
        },
        495: function(e, t, n) {
            var content = n(715);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("25ff48ab", content, !0, {
                sourceMap: !1
            })
        },
        496: function(e, t, n) {
            var content = n(718);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("6cdd3680", content, !0, {
                sourceMap: !1
            })
        },
        497: function(e, t, n) {
            var content = n(720);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("602446ac", content, !0, {
                sourceMap: !1
            })
        },
        500: function(e, t, n) {
            e.exports = n.p + "img/video-bg.c866732.png"
        },
        518: function(e, t, n) {
            e.exports = n.p + "img/bot-banner.c90e6bd.jpg"
        },
        523: function(e, t, n) {
            var content = n(769);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("3aa4705a", content, !0, {
                sourceMap: !1
            })
        },
        524: function(e, t, n) {
            var content = n(771);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("15e924dd", content, !0, {
                sourceMap: !1
            })
        },
        528: function(e, t, n) {
            var content = n(779);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("421b870f", content, !0, {
                sourceMap: !1
            })
        },
        536: function(e, t, n) {
            var content = n(802);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("a8d8e4fa", content, !0, {
                sourceMap: !1
            })
        },
        541: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAK7SURBVGiB3Zq9ShxRGIafc0QFkV0iaCM2WhiSwhhtJI2kywUkINh4BQrW8RaSJpcgAW/ALtiIBPxJioRYaCM2BjcqElx/8qY4s5N1/CG7c87ZXZ9uxvXb590ZZub7zhg8IGkIGAcmgWFgAOgDupOPnAIHwB6wDawA68aYHR/fXxeS+iXNSfos6VK1c5n875yk/pjig5I+SDqqQ/oujpKagyHFC5IWJJU8imcpSXorqeBbfkTSZkDxLJuSRnzJT0s6jChf4VDSdF75eUlnDZCvcCZpPo98PVcX31yq1hByp00jf/ksZ7rjdDK3yI8An4Ceug5dOErAS2PM1+qd1wLIXb5WgNF4XjWxBUwaY04qO2zmA7M0rzw4t7nqHekRkLsLrgOPIkvVyi9g3BizC9ePwDzNLw/OMb0qGXAPZsA3oJi3+s/SMYXuLjo72vOWuo9j4KkxZr9yBF7jSX5peZWl5VXK5xd5y91HEeecnkJTeSuenP5OxStBAoeYArByzchY3mqF7i6eP/n3NBwhxJikIYvrpNp8VJwYfczEs+F0O3CINmDc4tpAb0QOMWlxPaxXIoYYtrgG3DuRQgxY3PQgCBFC9BlJV9x8JvLK2tYP1r5sp9u9PUXevHrh42b3J6h4DCxu6BSMgL8+wKnFTcyCEFge4MDixn3eiSAPsGdxs0qvRJIH2La4FtIbEeUBViyuC7vyUS2y/BWwbpMR90beauXzCza/76bbgeUBNowxO5X7wMe81To72lPhCPKQOD+MltIYsw8s+qjc21MMLQ+wmDg/oLFKsuN9o6xq4F1FHh7aaDH5wwxukNpslICZanm4pQ9Ipr+zQDmS2P9QBmazk+l7USsvcGRCtOYSU1WI1l3kqwrRususVSEKcovQoRe6F+R7oTsTpDVfNbglSFO87HFjlbLOMA173eYvR3bKGqC+YLYAAAAASUVORK5CYII="
        },
        543: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA0CAYAAADBjcvWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7ZrxUcIwFMY/Of/XEbKBuEHcwA3MBrIB3UCcADbwmKBuoBuUDWQDzbsWrjxe24BNSLj87t5R2iR9X5u8NnkFrpQb+OXemrH2YE239m+tbaytrX0220lAgubWfqz9OtjSmkLEnCqIG9VViIxXnC+obRVqgRfHoHamz1kSTN2taOzDoU7VtB0cba3EsKAZ6i4qYRCRQA03QQW6BXEM3ARqeEBhfEGcAsMCS4wUYBTq8TE06Bc4XxA/38rhfEucKdA1dI92BRkKHgRSwS8MC9Lwj8KwwAoO4hT6+3koQZJfJf4hrkLgqHQiBv0+iuN83lFhhvggn6Tx/8YLKsiinhEvU8jipu1CRihQIH7ozkmPnj08ClZIhxLsRWHSOjhlhddIB+7rPoCQKH47NdLhyP/dHRvjVeiSbPmOCa6ULCw1rlbYLcKxW2Ok3xU8ryWGFEYvAKrZfrH2CCGajUWorqhwOKXg/0fnkmPM67MzR8XUyMJSIwtLjSwsNbKw1MjCUiOUsA0O51+0/Q2PhJyPPaFetb2z9g6Pc7E2Cmmt2XM61xW3HYVTodfXo/VvRP4ZUIPCcb7sIO8gZS3a6xQxQrNwKaW85IWkTCHtI9EacYhUqLveHHJuTEzZagxn6TvToZ6hc5YY9s90NTBzqFwgPAYj+EWhvuppYIHw9F1w6pLGtSHVNCZFHIXwSDGg8xOnP9e0fdkyrCRYAAAAAElFTkSuQmCC"
        },
        544: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgBzVrtWdswEH7Dw/9mA7RB6QSIDegEZAPSCeJOgDtB0gloJ0g6AXQCuxMAE7S6WC7O+WRL52DnfZ6D+KyPO92HTrZnSMfck2HXQ1Cy3yXeASTkwtHaUeHo70j06Oe8wUCQAitHz8BowoeoQLWYybAYd/VTFDKIxB0wucBdRB5yyYWeCUrkkPHiaOfol/9d4i0oXzxpMBeIBL1C5RkhWa4dPUk3DeR4IF6G4ZlJA+PnDrmZKNMDBvrkO4IsRLJw+TLe0OJ0lahBynCPoesDq6zRVsRgGiwcbVHtI3fsXoa2nMtmA67pFtNggW73odUPymqFzgtMg0fIyaaJXLg/P4fsQk8YDoPKr2sfLv24XWl6HsF7Eu4b+pGhvQpaWEf36C5raNVXkBcwE9qvWZtLoc2+HtsIE6ViDjlh9NFKGKvpOlu0FZ4jEAobDAv0UI6PpQKydbo24FZCOHN/LqAHKSGtWgpMYIyuWCo54zymUY8A0srtHP30/18a7a2jW7SFrsf6BH3Nth+gK7hCkNyJgjzmIJRBdrN7xKGQZNYoskC8r6eMQWQj+rYUOYMOK4H3GWln7Y2jLwI/xqIlZ2gUoQA3jLeBbhOlVLtjPIqh5CODRhEr8L5Cj+/suj5YdaGlqEaRK3ZNliihxw+BN4oifBB1umz0L3vm6IU22JsocXyMogi3QJ8bxGCwlTWK/GHXBsPQLPVrJGdAjSLSecBCj1uBV6IbLYtpFJGyzAo6GLQ3wBL9FjmKIvWDuiYsdMpQbWUYT70naWoti/iDkoTQQSy2Xjta0UjIISvz0COMRfggtkAceP/8HHosUe3yPP3eeCI/3zl69fwLzw/tEeRSG+iwjxn+qHSbMAAJJT3CSaUcaeAPN/ZH3VdBuFjQStCp7hv0oFJ+mdZF3kC5rxfQgdwmxTpkeYN0GARiayncSK51GqCYyb2gTRegBXrw8w0Z3yJwqrwJ3ThRSAt/STEi7aIWp4srdk3x8V8HMntTw2ecJgza1lg3G2RCg9RMMgZIaC7nQa0mvXcgusXpYAW5pGkhg5wmp7YMLfI9Ekqarl268J2GpM1UGFRWKBBRDcyEzlt0b1T1y5oSb6fFY7xn/4DD9+wG3TJc981pcJqfbzQrgmjPoIY5MLnQfEtQx6tBVVpP+YVQ1JcXM8TDevqIcT48+423M00v/gE6+r9r9mOnMgAAAABJRU5ErkJggg=="
        },
        549: function(e, t, n) {
            e.exports = n.p + "img/index-bg3.6fb0c25.jpg"
        },
        554: function(e, t, n) {
            var content = n(834);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("28d81f65", content, !0, {
                sourceMap: !1
            })
        },
        558: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhSURBVHgBtVUBVcMwEP3DAHFAJMzB6oBJqAQcEBQwB4uDgYINBcNBh4LOAVxKQq8hybXd9t/7r21yl3+536YLyKiIj8QlUXs6nImfnu/EA2ZiTdwTv0eyIda5xRaJMU3c+p1whOq//PODj43jLPGFeEIB2lcWqmyJhqiEnDrKa9C3WBTZCQKpfDtGjIsYzIdh6+zjyZpNbnE5LFvviU+E3RR7i1/jjWdViHMtb9H73FlQM/U6k7jEsLXch2Umx7A496l0rQoDOpGgWXUpthkxhciOIzLGefCPduMXUBBM9whru53/Bb+NqSqCZfOqMN/escE2EajZ/Udi/pCJjaGc0LkQcGL3q8T8KhMbcO+vncagjwlwj57Re/SK8R65a2dwqc/ujZLeOp3I04j8rSAfPXO+I77jKgw2QnUBFcadDBp9FwaWrCH3ewqOKJw2O1znYN1K67gXgfsw9X+kMCy2KeXrSOyIcWIKw3ZJf4FkkiQ2NX5WhfoSES62K4hpDNu8xwwRDpsQi0UsrgQbid1EJMDg/xG0wY1gIJ+LVxUzmIgfBHPoZ6bao9wAAAAASUVORK5CYII="
        },
        559: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgB7dbxjYIwFAbw78wN4AZ0k2OE2+DY5DqCG8gGxAlwA3UCdQLcQN8LH6YBCoKE8ocv+WpDsO+XlCpAWUaSSwrJPUAyGp6YUBA3ajBf1P0Sl0qumLeM5I/zvQ6VcItwldJQrJyLBs4+zlhGEnG+1qG+l1vMA9Pm/2g+v60P2Jk3G0xfPkgDlKI8+nVYgmnKB9GeGVpAll+MCZkSlrSsmbMX2NsL6lpkKCz2rBHX7rN4AdQHi9ENGbL9FgNAXTBtanogBdded6xtMQIENrctsAMzFPI2yIWl8P8n2RchDdA3xtUF5RZafv5IbpKTZMP5qBoLcmEWE9YKC6sPqK8WCapORIRw9eytp+yI8hc24bW5X2Ejp/dOB4MFveRXSp1kASF5hXkAJJsYJXib60AAAAAASUVORK5CYII="
        },
        562: function(e, t, n) {
            e.exports = n.p + "img/about-quality-1.ed835f8.jpg"
        },
        575: function(e, t, n) {
            e.exports = n.p + "img/logo.6421f8b.png"
        },
        576: function(e, t, n) {
            var content = n(889);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("289955e9", content, !0, {
                sourceMap: !1
            })
        },
        578: function(e, t, n) {
            e.exports = n.p + "img/login-bg.26e54d7.jpg"
        },
        579: function(e, t, n) {
            var content = n(894);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(21).default)("bcf1b866", content, !0, {
                sourceMap: !1
            })
        },
        644: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = {
                    data: function() {
                        return {
                            videoVisible: !1,
                            videoUrl: ""
                        }
                    },
                    methods: {
                        handleClose: function() {
                            this.videoVisible = !1, this.videoUrl = ""
                        },
                        showVideo: function(e) {
                            e && (this.videoUrl = e, this.videoVisible = !0)
                        }
                    }
                },
                r = (n(707), n(7)),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("el-dialog", {
                        attrs: {
                            "custom-class": "videodialog",
                            visible: e.videoVisible,
                            width: "pc" == e.$store.state.equipment ? "60vw" : "100vw",
                            height: "70vh",
                            top: "pc" == e.$store.state.equipment ? "12vh" : "35vh",
                            "show-close": !1,
                            "before-close": e.handleClose
                        },
                        on: {
                            "update:visible": function(t) {
                                e.videoVisible = t
                            }
                        }
                    }, [t("div", {
                        style: {
                            width: "100%",
                            height: "pc" == e.$store.state.equipment ? "70vh" : "35vh"
                        }
                    }, [t("iframe", {
                        staticStyle: {
                            "margin-bottom": "-10px"
                        },
                        attrs: {
                            src: e.videoUrl,
                            frameborder: "0",
                            referrerpolicy: "no-referrer",
                            allowfullscreen: !0,
                            width: "100%",
                            height: "100%"
                        }
                    })])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        645: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(4),
                r = (n(52), n(15), n(41), n(33), n(13), n(34), n(12), n(35), n(40), n(32)),
                d = {
                    props: {
                        systemOption: {
                            type: Array,
                            default: []
                        },
                        productOption: {
                            type: Array,
                            default: []
                        },
                        isHome: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            form1: {
                                value1: "",
                                value2: "",
                                value3: ""
                            },
                            rule1: {
                                value1: [{
                                    required: !0,
                                    message: " ",
                                    trigger: "change"
                                }],
                                value2: [{
                                    required: !0,
                                    message: " ",
                                    trigger: "change"
                                }],
                                value3: [{
                                    required: !0,
                                    message: " ",
                                    trigger: "change"
                                }]
                            },
                            form2: {
                                value1Product: "",
                                value2Product: "",
                                value3Product: ""
                            },
                            rule2: {
                                value1Product: [{
                                    required: !0,
                                    message: " ",
                                    trigger: "change"
                                }],
                                value2Product: [{
                                    required: !0,
                                    message: " ",
                                    trigger: "change"
                                }],
                                value3Product: [{
                                    required: !0,
                                    message: " ",
                                    trigger: "change"
                                }]
                            },
                            banner: {},
                            activeName: 0,
                            system: {
                                option1: [],
                                option2: [],
                                option3: []
                            },
                            product: {
                                option1: [],
                                option2: [],
                                option3: []
                            },
                            showProduct: !0,
                            productCategory: [],
                            isMea: r.f,
                            windowWidth: 0
                        }
                    },
                    watch: {
                        systemOption: function(e) {
                            this.system = {
                                option1: e,
                                option2: [],
                                option3: []
                            }
                        },
                        productOption: function(e) {
                            this.product = {
                                option1: e,
                                option2: [],
                                option3: []
                            }
                        }
                    },
                    methods: {
                        clearForm1: function() {
                            this.$refs.form1.clearValidate()
                        },
                        clearForm2: function() {
                            this.$refs.form2.clearValidate()
                        },
                        setSubBarData: function() {
                            var e = this;
                            this.productCategory = this.$store.state.subBarData, 0 == this.productCategory.length && setTimeout((function() {
                                e.setSubBarData()
                            }), 1e3)
                        },
                        systemChange1: function(e) {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var o, r;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t.clearForm1(), e) {
                                                n.next = 7;
                                                break
                                            }
                                            return t.system.option2 = [], t.form1.value2 = "", t.system.option3 = [], t.form1.value3 = "", n.abrupt("return");
                                        case 7:
                                            return o = {
                                                currPage: 0,
                                                pageSize: 9999,
                                                typeId: e
                                            }, n.next = 10, t.$request({
                                                url: "/rma/inner/product/getAllDataList",
                                                method: "post",
                                                data: o
                                            });
                                        case 10:
                                            (r = n.sent) && r.data && (t.system.option2 = r.data.brandName.sort((function(a, b) {
                                                return a.value.localeCompare(b.value)
                                            })), t.form1.value2 = "", t.system.option3 = [], t.form1.value3 = "");
                                        case 12:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        systemChange2: function(e) {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var o, r;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t.clearForm1(), e) {
                                                n.next = 5;
                                                break
                                            }
                                            return t.system.option3 = [], t.form1.value3 = "", n.abrupt("return");
                                        case 5:
                                            return o = {
                                                currPage: 0,
                                                pageSize: 9999,
                                                brandId: e,
                                                typeId: t.form1.value1
                                            }, n.next = 8, t.$request({
                                                url: "/rma/inner/product/getAllDataList",
                                                method: "post",
                                                data: o
                                            });
                                        case 8:
                                            (r = n.sent) && r.data && (t.system.option3 = r.data.model.sort((function(a, b) {
                                                return a.value.localeCompare(b.value)
                                            })), t.form1.value3 = "");
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        productChange1: function(e) {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var o, r, d, c, l, h, m, f, a;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t.clearForm2(), e) {
                                                n.next = 9;
                                                break
                                            }
                                            return t.product.option2 = [], t.form2.value2Product = "", t.product.option3 = [], t.form2.value3Product = "", t.showProduct = !0, t.clearForm2(), n.abrupt("return");
                                        case 9:
                                            return o = {
                                                currPage: 0,
                                                pageSize: 9999,
                                                productLineId: e
                                            }, n.next = 12, t.$request({
                                                url: "/rma/inner/product/getAllDataList",
                                                method: "post",
                                                data: o
                                            });
                                        case 12:
                                            if (!(r = n.sent) || !r.data) {
                                                n.next = 36;
                                                break
                                            }
                                            if (d = t.product.option1.find((function(t) {
                                                    return t.id === e
                                                })).value, t.productCategory.find((function(e) {
                                                    return e.categoryName === d
                                                }))) {
                                                n.next = 17;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 17:
                                            return c = Array.from(t.productCategory.find((function(e) {
                                                return e.categoryName === d
                                            })).child, (function(e) {
                                                return e.categoryId
                                            })), l = {
                                                pageIndex: 1,
                                                sortType: "",
                                                pageSize: 9999,
                                                sortStr: "desc",
                                                name: "",
                                                categoryIdList: c,
                                                productCategoryIdListList: []
                                            }, n.next = 21, t.$request({
                                                url: "/product/list",
                                                method: "post",
                                                data: l
                                            });
                                        case 21:
                                            h = n.sent, m = [], f = regeneratorRuntime.mark((function e(a) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            r.data.code.find((function(e) {
                                                                return e.value.toUpperCase() == h.data.data[a].productCode.toUpperCase()
                                                            })) && m.push({
                                                                value: h.data.data[a].name,
                                                                id: r.data.code.find((function(e) {
                                                                    return e.value.toUpperCase() == h.data.data[a].productCode.toUpperCase()
                                                                })).id
                                                            });
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })), n.t0 = regeneratorRuntime.keys(h.data.data);
                                        case 25:
                                            if ((n.t1 = n.t0()).done) {
                                                n.next = 30;
                                                break
                                            }
                                            return a = n.t1.value, n.delegateYield(f(a), "t2", 28);
                                        case 28:
                                            n.next = 25;
                                            break;
                                        case 30:
                                            t.product.option2 = m.sort((function(a, b) {
                                                return a.value.localeCompare(b.value)
                                            })), t.showProduct = !0, t.product.option3 = [], t.form2.value2Product = "", t.form2.value3Product = "", t.clearForm2();
                                        case 36:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        productChange2: function(e) {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var o, r;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t.clearForm2(), e) {
                                                n.next = 7;
                                                break
                                            }
                                            return t.product.option3 = [], t.form2.value3Product = "", t.showProduct = !0, t.clearForm2(), n.abrupt("return");
                                        case 7:
                                            return o = {
                                                currPage: 0,
                                                pageSize: 9999,
                                                codeId: e
                                            }, n.next = 10, t.$request({
                                                url: "/rma/inner/product/getAllDataList",
                                                method: "post",
                                                data: o
                                            });
                                        case 10:
                                            (r = n.sent) && r.data && (0 != r.data.status.length && 1 != r.data.status.length || (t.showProduct = !1), t.product.option3 = r.data.status, t.form2.value3Product = "", t.clearForm2());
                                        case 12:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        search1Submit: function() {
                            var e = this;
                            this.$refs.form1.validate((function(t) {
                                if (t) {
                                    var n = {
                                        id: e.form1.value3,
                                        model: e.system.option3.find((function(t) {
                                            return t.id === e.form1.value3
                                        })).value
                                    };
                                    e.$router.push({
                                        path: "/information",
                                        query: n
                                    })
                                }
                            }))
                        },
                        search2Submit: function() {
                            var e = this;
                            this.$refs.form2.validate((function(t) {
                                if (t) {
                                    var n = {
                                        value1: e.form2.value1Product,
                                        value2: e.form2.value2Product,
                                        value3: e.form2.value3Product || ""
                                    };
                                    e.$router.push({
                                        path: "/compatibility4",
                                        query: n
                                    })
                                }
                            }))
                        },
                        prodLabel: function(e) {
                            var t = "";
                            return e && (t = e.replace(/<sup>|<\/sup>/g, "")), t
                        },
                        tabInit: function() {
                            this.clearForm1(), this.clearForm2(), this.isMea && this.tabClick()
                        },
                        tabClick: function() {
                            if ("0" === this.activeName) {
                                var e = document.createElement("style");
                                e.textContent = "\n            .el-tabs__active-bar{\n                left: 47%;\n                right: auto;\n            }\n            ", document.querySelector("head").appendChild(e)
                            }
                            if ("1" === this.activeName) {
                                var t = document.createElement("style");
                                t.textContent = "\n            .el-tabs__active-bar{\n                left: auto;\n                right: 115%;\n            }\n           ", document.querySelector("head").appendChild(t)
                            }
                        },
                        tabsPos: function() {
                            this.isMea && (this.windowWidth = window.innerWidth, setTimeout((function() {
                                var e = document.createElement("style");
                                e.textContent = "\n                        .el-tabs--top .el-tabs__item.is-top:nth-child(2){\n                            padding: 0;\n                        }\n                        .el-tabs--top .el-tabs__item.is-top:last-child{\n                            padding: 0!important;\n                            margin-right: 30px;\n                        }\n                        .el-tabs__active-bar{\n                            left: 47%;\n                            right: auto;\n                            -webkit-transition: none!important;\n                            -moz-transition: none!important;\n                            -ms-transition: none!important;\n                            -o-transition: none!important;\n                            transition: none!important;\n                        }\n                    ", document.querySelector("head").appendChild(e)
                            }), 100))
                        }
                    },
                    mounted: function() {
                        this.setSubBarData(), this.system = {
                            option1: this.systemOption,
                            option2: [],
                            option3: []
                        }, this.product = {
                            option1: this.productOption,
                            option2: [],
                            option3: []
                        }, this.tabsPos()
                    }
                },
                c = (n(768), n(770), n(7)),
                component = Object(c.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("el-tabs", {
                        staticClass: "tab-warp",
                        on: {
                            "tab-click": function(t) {
                                return e.tabInit()
                            }
                        },
                        model: {
                            value: e.activeName,
                            callback: function(t) {
                                e.activeName = t
                            },
                            expression: "activeName"
                        }
                    }, [t("el-tab-pane", {
                        attrs: {
                            name: "0"
                        },
                        scopedSlots: e._u([{
                            key: "label",
                            fn: function() {
                                return [t("h2", {
                                    class: "el-tabs__item ".concat("0" === e.activeName && "is-active"),
                                    staticStyle: {
                                        padding: "0"
                                    }
                                }, [e._v(e._s(e.$t("support.compatibility.tab1")))])]
                            },
                            proxy: !0
                        }])
                    }, [e._v(" "), t("div", {
                        class: "system-box ".concat(e.isHome && "homebox")
                    }, [t("el-form", {
                        ref: "form1",
                        attrs: {
                            model: e.form1,
                            rules: e.rule1
                        }
                    }, [t("el-form-item", {
                        staticClass: "fitems",
                        attrs: {
                            prop: "value1"
                        }
                    }, [t("el-select", {
                        class: "sort-input ".concat(e.isMea && "measort"),
                        attrs: {
                            placeholder: e.$t("support.compatibility.tab1h1"),
                            "no-data-text": e.$t("currency.emptyTips"),
                            clearable: ""
                        },
                        on: {
                            change: e.systemChange1
                        },
                        model: {
                            value: e.form1.value1,
                            callback: function(t) {
                                e.$set(e.form1, "value1", t)
                            },
                            expression: "form1.value1"
                        }
                    }, e._l(e.system.option1, (function(n) {
                        return t("el-option", {
                            key: n.id,
                            class: "pc" == e.$store.state.equipment ? "mydropdown__item" : "phonedown",
                            attrs: {
                                label: n.value,
                                value: n.id
                            }
                        })
                    })), 1)], 1), e._v(" "), t("el-form-item", {
                        staticClass: "fitems",
                        attrs: {
                            prop: "value2"
                        }
                    }, [t("el-select", {
                        class: "sort-input ".concat(e.isMea && "measort"),
                        attrs: {
                            placeholder: e.$t("support.compatibility.tab1h2"),
                            "no-data-text": e.$t("currency.emptyTips"),
                            clearable: ""
                        },
                        on: {
                            change: e.systemChange2
                        },
                        model: {
                            value: e.form1.value2,
                            callback: function(t) {
                                e.$set(e.form1, "value2", t)
                            },
                            expression: "form1.value2"
                        }
                    }, e._l(e.system.option2, (function(n) {
                        return t("el-option", {
                            key: n.id,
                            class: "pc" == e.$store.state.equipment ? "mydropdown__item" : "phonedown",
                            attrs: {
                                label: n.value,
                                value: n.id
                            }
                        })
                    })), 1)], 1), e._v(" "), t("el-form-item", {
                        staticClass: "fitems",
                        attrs: {
                            prop: "value3"
                        }
                    }, [t("el-select", {
                        class: "sort-input ".concat(e.isMea && "measort"),
                        attrs: {
                            placeholder: e.$t("support.compatibility.tab1h3"),
                            "no-data-text": e.$t("currency.emptyTips"),
                            clearable: ""
                        },
                        on: {
                            change: e.clearForm1
                        },
                        model: {
                            value: e.form1.value3,
                            callback: function(t) {
                                e.$set(e.form1, "value3", t)
                            },
                            expression: "form1.value3"
                        }
                    }, e._l(e.system.option3, (function(n) {
                        return t("el-option", {
                            key: n.id,
                            class: "pc" == e.$store.state.equipment ? "mydropdown__item" : "phonedown",
                            attrs: {
                                label: n.value,
                                value: n.id
                            }
                        })
                    })), 1)], 1), e._v(" "), t("el-form-item", [t("div", {
                        staticClass: "sort-submit",
                        on: {
                            click: e.search1Submit
                        }
                    }, [e._v("\n                        " + e._s(e.$t("support.compatibility.search")) + "\n                    ")])])], 1)], 1)]), e._v(" "), t("el-tab-pane", {
                        attrs: {
                            name: "1"
                        },
                        scopedSlots: e._u([{
                            key: "label",
                            fn: function() {
                                return [t("h2", {
                                    class: "el-tabs__item ".concat("1" === e.activeName && "is-active"),
                                    staticStyle: {
                                        padding: "0"
                                    }
                                }, [e._v(e._s(e.$t("support.compatibility.tab2")))])]
                            },
                            proxy: !0
                        }])
                    }, [e._v(" "), t("div", {
                        class: "system-box ".concat(e.isHome && "homebox")
                    }, [t("el-form", {
                        ref: "form2",
                        attrs: {
                            model: e.form2,
                            rules: e.rule2
                        }
                    }, [t("el-form-item", {
                        staticClass: "fitems",
                        attrs: {
                            prop: "value1Product"
                        }
                    }, [t("el-select", {
                        class: "sort-input ".concat(!e.product.value1 && "select-active", " ").concat(e.isMea && "measort"),
                        attrs: {
                            placeholder: e.$t("support.compatibility.tab2h1"),
                            "no-data-text": e.$t("currency.emptyTips"),
                            clearable: ""
                        },
                        on: {
                            change: e.productChange1
                        },
                        model: {
                            value: e.form2.value1Product,
                            callback: function(t) {
                                e.$set(e.form2, "value1Product", t)
                            },
                            expression: "form2.value1Product"
                        }
                    }, e._l(e.product.option1, (function(n) {
                        return t("el-option", {
                            key: n.id,
                            class: "pc" == e.$store.state.equipment ? "mydropdown__item" : "phonedown",
                            attrs: {
                                label: n.value,
                                value: n.id
                            }
                        })
                    })), 1)], 1), e._v(" "), t("el-form-item", {
                        staticClass: "fitems",
                        attrs: {
                            prop: "value2Product"
                        }
                    }, [t("el-select", {
                        class: "sort-input sort-right ".concat(e.isMea && "measort"),
                        attrs: {
                            placeholder: e.$t("support.compatibility.tab2h2"),
                            "no-data-text": e.$t("currency.emptyTips"),
                            clearable: "",
                            "popper-class": "dropDown-select"
                        },
                        on: {
                            change: e.productChange2
                        },
                        model: {
                            value: e.form2.value2Product,
                            callback: function(t) {
                                e.$set(e.form2, "value2Product", t)
                            },
                            expression: "form2.value2Product"
                        }
                    }, e._l(e.product.option2, (function(n) {
                        return t("el-option", {
                            key: n.id,
                            class: "pc" == e.$store.state.equipment ? "mydropdown__item" : "phonedown",
                            attrs: {
                                label: e.prodLabel(n.value),
                                value: n.id
                            }
                        }, [t("span", {
                            staticClass: "selitem",
                            domProps: {
                                innerHTML: e._s(n.value)
                            }
                        })])
                    })), 1)], 1), e._v(" "), e.showProduct ? t("el-form-item", {
                        staticClass: "fitems",
                        attrs: {
                            prop: "value3Product"
                        }
                    }, [t("el-select", {
                        class: "sort-input ".concat(e.isMea && "measort"),
                        attrs: {
                            placeholder: e.$t("support.compatibility.tab2h3"),
                            "no-data-text": e.$t("currency.emptyTips"),
                            clearable: ""
                        },
                        on: {
                            change: e.clearForm2
                        },
                        model: {
                            value: e.form2.value3Product,
                            callback: function(t) {
                                e.$set(e.form2, "value3Product", t)
                            },
                            expression: "form2.value3Product"
                        }
                    }, e._l(e.product.option3, (function(n) {
                        return t("el-option", {
                            key: n.id,
                            class: "pc" == e.$store.state.equipment ? "mydropdown__item" : "phonedown",
                            attrs: {
                                label: n.value,
                                value: n.id
                            }
                        })
                    })), 1)], 1) : e._e(), e._v(" "), t("el-form-item", [t("div", {
                        staticClass: "sort-submit",
                        on: {
                            click: e.search2Submit
                        }
                    }, [e._v("\n                        " + e._s(e.$t("support.compatibility.search")) + "\n                    ")])])], 1)], 1)])], 1)
                }), [], !1, null, "0e3e11e2", null);
            t.default = component.exports
        },
        646: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(4),
                r = (n(40), n(12), n(14), n(30), n(23), {
                    components: {
                        QrcodeStream: function() {
                            return Promise.all([n.e(5), n.e(3), n.e(4), n.e(8), n.e(9), n.e(6), n.e(13), n.e(10), n.e(12), n.e(7), n.e(11)]).then(n.t.bind(null, 425, 7)).then((function(e) {
                                return e.QrcodeStream
                            }))
                        }
                    },
                    data: function() {
                        return {
                            hasCamera: !0,
                            camera: "auto",
                            isPaused: !1,
                            result: null,
                            constraints: {
                                video: {
                                    width: {
                                        ideal: 1280
                                    },
                                    height: {
                                        ideal: 720
                                    },
                                    facingMode: "environment",
                                    frameRate: {
                                        ideal: 30
                                    }
                                }
                            },
                            frameSize: .7,
                            frameOffset: .1,
                            tolerance: .15
                        }
                    },
                    methods: {
                        onDecode: function(e) {
                            this.result = e, this.isPaused = !0, this.camera = "off", this.$emit("codeScanned", e), this.$emit("changeScanVal")
                        },
                        onInit: function(e) {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var o;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, e;
                                        case 3:
                                            o = /iPad|iPhone|iPod/.test(navigator.userAgent), t.frameOffset = o ? .15 : .1, n.next = 12;
                                            break;
                                        case 7:
                                            n.prev = 7, n.t0 = n.catch(0), "NotAllowedError" === n.t0.name ? t.$message.error("请授予摄像头权限") : "NotFoundError" === n.t0.name ? t.$message.error("未检测到摄像头设备") : t.$message.error("未知错误: ".concat(n.t0.message)), t.hasCamera = !1, t.$emit("changeScanVal");
                                        case 12:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        toggleCamera: function() {
                            this.camera = "off", this.$emit("changeScanVal")
                        },
                        strictTracker: function(e, t) {
                            var n = this,
                                canvas = t.canvas,
                                o = canvas.width * this.frameSize,
                                r = (canvas.width - o) / 2,
                                d = (canvas.height - o) / 2 + canvas.height * this.frameOffset;
                            t.fillStyle = "rgba(0, 0, 0, 0.5)", t.fillRect(0, 0, canvas.width, canvas.height), t.clearRect(r, d, o, o);
                            var c = e.filter((function(code) {
                                var e = code.boundingBox,
                                    t = e.y < d + o / 2 ? n.tolerance : .05;
                                return e.x >= r - o * t && e.y >= d - o * t && e.x + e.width <= r + o + o * t && e.y + e.height <= d + o + o * t
                            }));
                            return e.forEach((function(code) {
                                var e = c.includes(code);
                                t.strokeStyle = e ? "#00ff00" : "#ff0000", t.lineWidth = e ? 3 : 1, t.strokeRect(code.boundingBox.x, code.boundingBox.y, code.boundingBox.width, code.boundingBox.height)
                            })), c
                        },
                        cleanup: function() {
                            var e;
                            this.camera = "off", this.isPaused = !0, null !== (e = this.$refs.scanner) && void 0 !== e && null !== (e = e.camera) && void 0 !== e && e._mediaStream && this.$refs.scanner.camera._mediaStream.getTracks().forEach((function(track) {
                                track.stop()
                            })), this.result = null
                        }
                    },
                    beforeDestroy: function() {
                        this.cleanup()
                    },
                    mounted: function() {
                        this.result = null, this.isPaused = !1, this.camera = "auto"
                    }
                }),
                d = (n(801), n(7)),
                component = Object(d.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        directives: [{
                            name: "prevent-scroll",
                            rawName: "v-prevent-scroll",
                            value: !0,
                            expression: "true"
                        }],
                        staticClass: "scanner-container"
                    }, [e.hasCamera && !e.isPaused ? t("QrcodeStream", {
                        attrs: {
                            camera: e.camera,
                            constraints: e.constraints,
                            track: e.strictTracker
                        },
                        on: {
                            decode: e.onDecode,
                            init: e.onInit
                        }
                    }, [t("div", {
                        staticClass: "scan-overlay"
                    }, [t("div", {
                        staticClass: "scan-frame"
                    }), e._v(" "), t("p", {
                        staticClass: "scan-hint"
                    }, [e._v("将二维码放入框内扫描")])])]) : e._e(), e._v(" "), t("img", {
                        staticClass: "close-btn",
                        attrs: {
                            src: n(465),
                            alt: ""
                        },
                        on: {
                            click: e.toggleCamera
                        }
                    })], 1)
                }), [], !1, null, "a392f140", null);
            t.default = component.exports
        },
        647: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = {
                    props: {
                        banner: {
                            type: Object,
                            default: {
                                imageUrl: "",
                                title: ""
                            }
                        },
                        showTitle: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            winwowWidth: null
                        }
                    },
                    mounted: function() {
                        var e = this;
                        setTimeout((function() {
                            e.winwowWidth = window.innerWidth
                        }))
                    }
                },
                r = (n(833), n(7)),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "bannerWarp"
                    }, [e.winwowWidth ? t("img", {
                        staticClass: "img-bg",
                        staticStyle: {
                            "object-fit": "cover"
                        },
                        attrs: {
                            src: (e.winwowWidth > 768 ? e.banner.imageUrl : e.banner.mobileImageUrl || e.banner.imageUrl) + "?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%",
                            fetchpriority: "high"
                        }
                    }) : e._e(), e._v(" "), t("div", {
                        staticClass: "conbase"
                    }, [t("div", {
                        staticClass: "content"
                    }, [t("header", [e.showTitle ? t("h2", [e._v(e._s(e.banner.title))]) : e._e()]), e._v(" "), e.banner.subTitle ? t("div", {
                        staticClass: "substitle"
                    }, [e._v("\n                " + e._s(e.banner.subTitle) + "\n            ")]) : e._e()])])])
                }), [], !1, null, "3577ef8e", null);
            t.default = component.exports;
            installComponents(component, {
                Header: n(78).default
            })
        },
        648: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = {
                    data: function() {
                        return {
                            beginClientX: 0,
                            mouseMoveState: !1,
                            maxWidth: "",
                            confirmWords: "Please slide to verify",
                            confirmSuccess: !1
                        }
                    },
                    methods: {
                        mouseDownFn: function(e) {
                            this.confirmSuccess || (e.preventDefault && e.preventDefault(), this.mouseMoveState = !0, this.beginClientX = e.clientX)
                        },
                        successFunction: function() {
                            this.confirmSuccess = !0, this.confirmWords = "Verification passed", window.addEventListener ? (document.getElementsByTagName("html")[0].removeEventListener("mousemove", this.mouseMoveFn), document.getElementsByTagName("html")[0].removeEventListener("mouseup", this.moseUpFn)) : document.getElementsByTagName("html")[0].removeEventListener("mouseup", (function() {})), document.getElementsByClassName("drag_text")[0].style.color = "#fff", document.getElementsByClassName("handler")[0].style.left = this.maxWidth + "px", document.getElementsByClassName("drag_bg")[0].style.width = this.maxWidth + "px"
                        },
                        mouseMoveFn: function(e) {
                            if (this.mouseMoveState) {
                                var t = e.clientX - this.beginClientX;
                                t > 0 && t <= this.maxWidth ? (document.getElementsByClassName("handler")[0].style.left = t + "px", document.getElementsByClassName("drag_bg")[0].style.width = t + "px") : t > this.maxWidth && this.successFunction()
                            }
                        },
                        moseUpFn: function(e) {
                            this.mouseMoveState = !1, e.clientX - this.beginClientX < this.maxWidth && (document.getElementsByClassName("handler")[0].style.left = "0px", document.getElementsByClassName("drag_bg")[0].style.width = "0px")
                        }
                    },
                    mounted: function() {
                        this.maxWidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth, document.getElementsByTagName("html")[0].addEventListener("mousemove", this.mouseMoveFn), document.getElementsByTagName("html")[0].addEventListener("mouseup", this.moseUpFn)
                    }
                },
                r = (n(888), n(7)),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        ref: "dragDiv",
                        staticClass: "drag"
                    }, [t("div", {
                        staticClass: "drag_bg"
                    }), e._v(" "), t("div", {
                        staticClass: "drag_text"
                    }, [e._v(e._s(e.confirmWords))]), e._v(" "), t("div", {
                        ref: "moveDiv",
                        staticClass: "handler handler_bg",
                        class: {
                            handler_ok_bg: e.confirmSuccess
                        },
                        staticStyle: {
                            position: "absolute",
                            top: "0",
                            left: "0"
                        },
                        on: {
                            mousedown: function(t) {
                                return e.mouseDownFn(t)
                            }
                        }
                    })])
                }), [], !1, null, "6f634985", null);
            t.default = component.exports
        },
        649: function(e, t, n) {
            "use strict";
            n.r(t);
            n(126), n(13), n(65), n(66), n(43), n(36), n(35);
            var o = {
                    data: function() {
                        return {
                            pasteResult: []
                        }
                    },
                    props: {
                        code: {
                            typeof: Array,
                            default: []
                        },
                        isNumber: {
                            typeof: Number,
                            default: 6
                        }
                    },
                    computed: {
                        input: function() {
                            return this.code && Array.isArray(this.code) && this.code.length === this.isNumber ? this.code : /^\d{`${this.isNumber}`}$/.test(this.code.toString()) ? this.code.toString().split("") : this.pasteResult.length === this.isNumber ? this.pasteResult : new Array(this.isNumber)
                        }
                    },
                    methods: {
                        inputEvent: function(e) {
                            var t = 1 * e.target.dataset.index,
                                n = e.target;
                            n.value = n.value.replace(/Digit|Numpad/i, "").slice(0, 1), this.$set(this.input, t, n.value)
                        },
                        keydown: function(e) {
                            var t = 1 * e.target.dataset.index,
                                n = e.target;
                            "Backspace" === e.key ? this.input[t].length > 0 ? this.$set(this.input, t, "") : n.previousElementSibling && (n.previousElementSibling.focus(), this.$set(this.input, t - 1, "")) : "Delete" === e.key ? (this.input[t].length > 0 ? this.$set(this.input, t, "") : n.nextElementSibling && this.$set(this.input, t = 1, ""), n.nextElementSibling && n.nextElementSibling.focus()) : "Home" === e.key ? n.parentElement.children[0] && n.parentElement.children[0].focus() : "End" === e.key ? n.parentElement.children[this.input.length - 1] && n.parentElement.children[this.input.length - 1].focus() : "ArrowLeft" === e.key ? n.previousElementSibling && n.previousElementSibling.focus() : "ArrowRight" === e.key ? n.nextElementSibling && n.nextElementSibling.focus() : "ArrowUp" === e.key ? 1 * this.input[t] < 9 && this.$set(this.input, t, (1 * this.input[t] + 1).toString()) : "ArrowDown" === e.key && 1 * this.input[t] > 0 && this.$set(this.input, t, (1 * this.input[t] - 1).toString())
                        },
                        keyup: function(e) {
                            var t = 1 * e.target.dataset.index,
                                n = e.target;
                            if (n.value = n.value.replace(/Digit|Numpad/i, "").slice(0, 1), /Digit|Numpad/i.test(e.code)) {
                                this.$set(this.input, t, e.code.replace(/Digit|Numpad/i, ""));
                                var o = this.input.join("").trim();
                                this.$emit("returnresult", o), n.nextElementSibling && n.nextElementSibling.focus(), t === this.isNumber - 1 && this.input.join("").length === this.isNumber && (document.activeElement.blur(), this.$emit("complete", this.input))
                            } else "" === this.input[t] && this.$set(this.input, t, "")
                        },
                        mousewheel: function(e) {
                            var t = e.target.dataset.index;
                            e.wheelDelta > 0 ? 1 * this.input[t] < 9 && this.$set(this.input, t, (1 * this.input[t] + 1).toString()) : e.wheelDelta < 0 ? 1 * this.input[t] > 0 && this.$set(this.input, t, (1 * this.input[t] - 1).toString()) : "Enter" === e.key && this.input.join("").length === this.isNumber && (document.activeElement.blur(), this.$emit("complete", this.input))
                        },
                        paste: function(e) {
                            var t = this;
                            e.clipboardData.items[0].getAsString((function(e) {
                                if (e.toString().length === t.isNumber) {
                                    t.pasteResult = e.split(""), document.activeElement.blur();
                                    var n = t.pasteResult.join("").trim();
                                    t.$emit("returnresult", n)
                                } else t.input[0] = new Array(t.isNumber)
                            }))
                        },
                        onClean: function() {
                            this.pasteResult = [], this.$emit("complete", this.input), this.$refs.firstinput.focus(), this.$emit("returnresult", "")
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.$refs.firstinput.focus()
                        }))
                    }
                },
                r = (n(893), n(7)),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "input-box"
                    }, [t("div", {
                        staticClass: "input-content",
                        on: {
                            keydown: function(t) {
                                return e.keydown(t)
                            },
                            keyup: function(t) {
                                return e.keyup(t)
                            },
                            progress: e.keyup,
                            paste: e.paste,
                            mousewheel: e.mousewheel,
                            input: e.inputEvent
                        }
                    }, [t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.input[0],
                            expression: "input[0]"
                        }],
                        ref: "firstinput",
                        attrs: {
                            max: "9",
                            min: "0",
                            maxlength: "1",
                            "data-index": "0",
                            type: "tel"
                        },
                        domProps: {
                            value: e.input[0]
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || e.$set(e.input, 0, t.target.value)
                            }
                        }
                    }), e._v(" "), e._l(e.isNumber, (function(n, o) {
                        return [o > 0 ? t("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.input[o],
                                expression: "input[index]"
                            }],
                            key: o,
                            attrs: {
                                max: "9",
                                min: "0",
                                maxlength: "1",
                                "data-index": o,
                                type: "tel"
                            },
                            domProps: {
                                value: e.input[o]
                            },
                            on: {
                                input: function(t) {
                                    t.target.composing || e.$set(e.input, o, t.target.value)
                                }
                            }
                        }) : e._e()]
                    }))], 2), e._v(" "), t("div", {
                        staticClass: "clean"
                    }, [t("span", {
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.onClean.apply(null, arguments)
                            }
                        }
                    }, [e._v("Resend Code")])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        661: function(e, t, n) {
            "use strict";
            n(469)
        },
        662: function(e, t, n) {
            var o = n(20),
                r = n(96),
                d = n(663),
                c = o((function(i) {
                    return i[1]
                })),
                l = r(d);
            c.push([e.i, '.tagbase[data-v-a0a3453e]{color:#fff;font-family:Avenir;font-size:14px;font-variation-settings:"opsz" auto;font-weight:900;height:24px;left:0;position:absolute;top:24px}.tagbase[data-v-a0a3453e],.tagbase .lefttitle[data-v-a0a3453e]{align-items:center;display:flex}.tagbase .lefttitle[data-v-a0a3453e]{background:#da291c;height:100%;padding:0 6px}.tagbase .thv[data-v-a0a3453e]{background-image:url(' + l + ");background-size:100% 100%;height:100%;margin-left:-1px;width:7px}@media screen and (max-width:750px){.tagbase[data-v-a0a3453e]{height:22px;top:16px}.tagbase .lefttitle[data-v-a0a3453e]{padding-left:6px;padding-right:6px}}@media only screen and (min-width:768px)and (max-width:1920px){.tagbase[data-v-a0a3453e]{height:24px;top:24px}.tagbase .lefttitle[data-v-a0a3453e]{padding-left:5px;padding-right:8px}}", ""]), c.locals = {}, e.exports = c
        },
        663: function(e, t, n) {
            e.exports = n.p + "img/fightthbgimg.9761b60.png"
        },
        664: function(e, t, n) {
            "use strict";
            n(470)
        },
        665: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".prizebase[data-v-8aa9b0ce]{align-items:flex-start;display:flex;justify-content:flex-end;position:absolute;right:5%;top:0;width:calc(100% - 20px)}.prizebase .item-container[data-v-8aa9b0ce]{height:48px;margin-left:5%;width:48px}.prizebase .item-container .priceitem[data-v-8aa9b0ce]{height:100%}.prizebase .largeitem[data-v-8aa9b0ce]{height:55px;width:55px}@media screen and (max-width:750px){.prizebase[data-v-8aa9b0ce]{right:3%}.prizebase .item-container[data-v-8aa9b0ce]{height:38px;margin-left:2%;width:38px}.prizebase .item-container .priceitem[data-v-8aa9b0ce]{height:100%}}@media only screen and (min-width:768px)and (max-width:1920px){.prizebase[data-v-8aa9b0ce]{right:5%}.prizebase .item-container[data-v-8aa9b0ce]{height:48px;margin-left:15px;width:48px}.prizebase .item-container .priceitem[data-v-8aa9b0ce]{height:100%}.prizebase .largeitem[data-v-8aa9b0ce]{height:55px;width:55px}}", ""]), o.locals = {}, e.exports = o
        },
        666: function(e, t, n) {
            "use strict";
            n(471)
        },
        667: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, '.a-c[data-v-5701a4e6]{align-items:center;display:flex}.prodItem[data-v-5701a4e6]{background:#f7f7f7;border-radius:15px;box-sizing:border-box;height:420px;margin:8px 0;padding:30px;position:relative}.prodItem .pic[data-v-5701a4e6]{align-items:center;display:flex;height:90%;justify-content:center;margin:0 auto;overflow:hidden;width:75%}.prodItem .pic .img[data-v-5701a4e6]{height:100%;width:100%}.prodItem .contenprod[data-v-5701a4e6]{bottom:0;display:flex;flex-direction:column;left:0;padding:0 20px;position:absolute;right:auto}.prodItem .contenprod .title[data-v-5701a4e6]{color:#000;display:-webkit-box;font-size:14px;font-weight:500;line-height:140%;overflow:hidden;text-align:left;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}.prodItem .contenprod .btnsbase[data-v-5701a4e6]{display:none;margin-top:20px}.prodItem .contenprod .btnsbase .fun[data-v-5701a4e6]{display:none;vertical-align:middle}.prodItem .contenprod .btnsbase .fun .learnmorebtn[data-v-5701a4e6]{align-items:center;border:1px solid #000;border-radius:15px;color:#000;cursor:pointer;display:flex;font-size:14px;height:30px;justify-content:center;padding:0 20px;white-space:nowrap}.prodItem .contenprod .btnsbase .fun a[data-v-5701a4e6]{align-items:center;color:#000;display:flex;font-size:14px;margin-right:6px}.prodItem .contenprod .btnsbase .fun a img[data-v-5701a4e6]{margin-left:9px;width:24px}.prodItem .contenprod .btnsbase .addCompare[data-v-5701a4e6]{align-items:center;background:#da291c;border-radius:15px;color:#fff;cursor:pointer;display:none;float:left;font-family:Avenir;font-size:14px;font-variation-settings:"opsz" auto;height:30px;padding:0 20px;text-transform:capitalize;width:-moz-fit-content;width:fit-content}.prodItem .contenprod .btnsbase .addCompare .addpic[data-v-5701a4e6]{margin-left:10px}.prodItem .meacont[data-v-5701a4e6]{left:auto;right:0}.prodItem .meacont .title[data-v-5701a4e6]{text-align:right}.prodItem .meacont .btnsbase .fun a[data-v-5701a4e6]{margin-left:6px;margin-right:auto}.prodItem .meacont .btnsbase .fun a img[data-v-5701a4e6]{margin-left:auto;margin-right:9px}.prodItem .meacont .btnsbase .addCompare .addpic[data-v-5701a4e6]{margin-left:auto;margin-right:10px}.prodItem:hover .contenprod .btnsbase .addCompare[data-v-5701a4e6],.prodItem:hover .contenprod .btnsbase .fun[data-v-5701a4e6]{display:flex}@media screen and (max-width:750px){.prodItem[data-v-5701a4e6]{background:#f7f7f7;border-radius:5px;box-sizing:border-box;height:342px;margin:8px 0;padding:20px;position:relative}.prodItem .pic[data-v-5701a4e6]{align-items:center;display:flex;height:85%;justify-content:center;margin:0 auto;overflow:hidden;width:60%}.prodItem .pic .img[data-v-5701a4e6]{height:100%;width:100%}.prodItem .contenprod[data-v-5701a4e6]{padding:0 10px 10px}.prodItem .contenprod .title[data-v-5701a4e6]{display:-webkit-box;line-height:140%;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}.prodItem .contenprod .btnsbase[data-v-5701a4e6]{display:flex;margin-top:10px}.prodItem .contenprod .btnsbase .addCompare[data-v-5701a4e6]{border-radius:18px;display:flex;height:36px;padding:0 20px}.prodItem .contenprod .btnsbase .fun[data-v-5701a4e6]{display:flex}.prodItem .contenprod .btnsbase .fun .learnmorebtn[data-v-5701a4e6]{border-radius:18px;cursor:pointer;height:36px;padding:0 20px}.prodItem .contenprod .btnsbase .fun a[data-v-5701a4e6]{align-items:center;display:flex;margin-right:20px}.prodItem .contenprod .btnsbase .fun a img[data-v-5701a4e6]{margin-left:9px;width:24px}.prodItem .meacont .btnsbase .fun a[data-v-5701a4e6]{margin-left:20px;margin-right:auto}}@media only screen and (min-width:768px){.prodItem[data-v-5701a4e6]{border-radius:.78vw;height:20.51vw;padding:1.041vw}.prodItem .pic[data-v-5701a4e6]{width:80%}.prodItem .contenprod[data-v-5701a4e6]{padding:0 1.1vw 1.1vw}.prodItem .contenprod .title[data-v-5701a4e6]{font-size:.729vw;line-height:140%}.prodItem .contenprod .btnsbase[data-v-5701a4e6]{display:none;margin-bottom:0;margin-top:.6vw}.prodItem .contenprod .btnsbase .fun[data-v-5701a4e6]{display:none}.prodItem .contenprod .btnsbase .fun .learnmorebtn[data-v-5701a4e6]{border-radius:.75vw;cursor:pointer;font-size:.729vw;height:1.5vw;padding:0 1vw}.prodItem .contenprod .btnsbase .fun a[data-v-5701a4e6]{font-size:.729vw;margin-right:.6vw}.prodItem .contenprod .btnsbase .fun a img[data-v-5701a4e6]{margin-left:9px;width:24px}.prodItem .contenprod .btnsbase .addCompare[data-v-5701a4e6]{background:#da291c;border-radius:.75vw;display:none;font-size:.729vw;height:1.5vw;padding:0 .5vw}.prodItem .contenprod .btnsbase .addCompare .addpic[data-v-5701a4e6]{margin-left:.3vw}.prodItem .meacont .btnsbase .fun a[data-v-5701a4e6]{margin-left:.6vw;margin-right:auto}.prodItem .meacont .btnsbase .addCompare .addpic[data-v-5701a4e6]{margin-left:auto;margin-right:.3vw}.prodItem:hover .contenprod .btnsbase[data-v-5701a4e6]{display:flex}}', ""]), o.locals = {}, e.exports = o
        },
        668: function(e, t, n) {
            "use strict";
            n(472)
        },
        669: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".bannerWarp[data-v-357d875e]{aspect-ratio:2545/592;color:#fff;font-size:36px;height:596px;overflow:hidden;position:relative;width:100%}.bannerWarp img[data-v-357d875e]{height:100%}.bannerWarp .conbase[data-v-357d875e]{height:100%;left:0;position:absolute;top:0;width:100%}.bannerWarp .conbase .content[data-v-357d875e]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.bannerWarp .conbase .content h1[data-v-357d875e]{font-size:36px}.bannerWarp .conbase .phonedesc[data-v-357d875e]{align-items:flex-start;padding:0;text-align:left}@media screen and (max-width:768px){.bannerWarp[data-v-357d875e]{font-size:30px;font-weight:600;height:200px;text-align:center}.bannerWarp .conbase .content[data-v-357d875e]{max-width:100%}.bannerWarp .conbase .content h2[data-v-357d875e]{font-size:30px}.bannerWarp .conbase .phonedesc[data-v-357d875e]{padding:0 22px}}@media only screen and (min-width:769px){.bannerWarp[data-v-357d875e]{font-size:1.875vw;height:23.43vw!important}.bannerWarp .conbase .content[data-v-357d875e]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;margin:0 auto;max-width:1440px}.bannerWarp .conbase .content h2[data-v-357d875e]{font-size:1.875vw}.bannerWarp .conbase .phonedesc[data-v-357d875e]{align-items:flex-start;padding:0}}@media only screen and (min-width:769px)and (max-width:1920px){.bannerWarp[data-v-357d875e]{font-size:1.875vw;height:23.43vw}.bannerWarp .conbase .content[data-v-357d875e]{height:100%;max-width:75vw}.bannerWarp .conbase .content h2[data-v-357d875e]{font-size:1.875vw}.bannerWarp .conbase .phonedesc[data-v-357d875e]{align-items:flex-start;padding:0}}", ""]), o.locals = {}, e.exports = o
        },
        672: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABJCAYAAABrT+tSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEGSURBVHic7dnRTcMwGEXhY5T3ZgMyCiMxAkwSmKDqBu0GrMAGbJA+I66cWFA5oueT+uTK/XukSFZcgAV989B7gD0ySmCUwCiBUQKjBAPw1nsISZIkSZIkSfegAFPvIfam4LXpD77ND4wSGCUwSmCUwCiB16aSJGmvSu8B/sgIHCvr7zScx4bfTrMTI/BUWb+0bOYxPzBKYJTAKIFRAqMERgmMEhglGKifBG/pC/iorE9sv9Jd+94jjf9z6fSZV+aae83m4xMYJTBKYJTAKIFRggF47fTbtTMKwAn43LjXAXiurJ9pfPv2H0zUzx4vLZv5+ARGCYwSGCUwSmCUwCiBUQKjBEYJrvKAUw/8M0baAAAAAElFTkSuQmCC"
        },
        673: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABCCAYAAAAxBAqwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGsSURBVHic7dndUcJQFEXhJWMBKYESLEErMXZgB54OKAE7USuwBNMBJeBDBtRwydz8biH7m8lLBpOwTsAMF2C/0O2RfqJxnOh5HFZ9/9CGc3whxxdyfCHHF7oFbtQXsVS+84UcX8jxhRxfyPGFHF/I8YUcX8jxhRxfyPGFHF/I8YVW6NdS/8va7Ox85ws5vpDjCzm+kOMLeQ1XyHe+kOMLOb6Q4ws5vpDjCzm+kOMLOb6Q40MJvAHFTOfaznCei1DyswjzSd4Agr+LN9HjXIsfQMnpKljOAILu8VPn2i75a+cdqBr77hj/K6gkfad/gH7Ntbndj/WuM6yBr8Q1tH0CovHaaDn+c+LYe+qBLP4fbgU8MM0nIIBNYv8T8AqOD9MMIICXxP5jeHD8g4rxBhBkhAfH/61i+ACCzPDg+E0V/QcQdAhv5xXUTzypp6ANp087kXjt8anGujs3gOaWelR1+BHkDsDhJ9J1AKXkKq9Y7gBK0fVdvbYB7KifiGxCqQE4/IwOA9jh8BIF9S+ic6x+mZmZ2VBTr8muZ3snF8a/5ws5vpDjCzm+kOMLfQMW6EnsqDmuPgAAAABJRU5ErkJggg=="
        },
        702: function(e, t, n) {
            "use strict";
            n(489)
        },
        703: function(e, t, n) {
            var o = n(20),
                r = n(96),
                d = n(704),
                c = o((function(i) {
                    return i[1]
                })),
                l = r(d);
            c.push([e.i, ".magnifier-box[data-v-15697a7e]{align-items:center;display:flex;height:100%;justify-content:center;overflow:hidden;position:relative;width:100%}.magnifier-box .edit-wrap[data-v-15697a7e]{background:rgba(0,0,0,.4);border-radius:15px;padding:5px 15px 0;position:absolute;right:0;top:5px;z-index:9999999}.magnifier-box .edit-wrap .rotate-left[data-v-15697a7e]{filter:FlipH;transform:scaleX(-1)}.magnifier-box .edit-wrap .rotate-left[data-v-15697a7e],.magnifier-box .edit-wrap .rotate-right[data-v-15697a7e]{background:url(" + l + ");background-size:100% 100%;cursor:pointer;display:inline-block;height:16px;width:16px}.magnifier-box .edit-wrap .rotate-right[data-v-15697a7e]{margin-left:10px}.magnifier-box img[data-v-15697a7e]{width:100%}.magnifier-box .mouse-cover[data-v-15697a7e]{background-color:rgba(0,0,0,.5);cursor:move;position:fixed;z-index:1}.magnifier-box .mouse-cover-canvas[data-v-15697a7e]{height:100%;left:100%;position:fixed;top:0;width:100%}.magnifier-box.vertical img[data-v-15697a7e]{height:100%;width:auto}@media screen and (max-width:750px){.magnifier-box[data-v-15697a7e]{display:none}}@media only screen and (min-width:768px)and (max-width:1920px){.magnifier-box[data-v-15697a7e]{display:flex}}", ""]), c.locals = {}, e.exports = c
        },
        704: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNUlEQVRYR8VXi01bQRCcqSChAkIFQAWBCoAKgApIKgAqACoAKgAqgFSQUAHQQVLBoJHuOcf57rzP0sMrWbL99nZnvzePWLFwxf4xCoCkfQDfAWwB+JY+juEJwF8A9wB+kXyNBhYCIOkMwAmAr0HDNwDOSyDJjgM4Hp51AUhypHdZpEH/M7Uzkuf+JcmgDtOTnyQv/b0JQNIRgOuxHiv6Lo9LYnuDODvOah1AwPlbMvonZcelcWqj0gaQ0v67YekWwCVJO/4gkgzCTerI1hcg6QJwukoD/wDs1Bw3gLjeex0QdQCSfgC4KA6GnQ/nioar4WgC8Cx/KU5sRyIf4dyq8wDSkvHI5XJLMu/ebmnTnJ8GOrEKwHPpZZPL2Og9cpFp8CJyn/wfQ0nl4TeSXrdhkWT9RRl7HZyXAMru907fCXtfUnG2CSWpsHFF0lMxqfQAPJD0YplUcgBlD3x6CXyXl9trjaR3w2SSZ6B2+83GZSoEOQCP0EvhyNFvTJmFD3xAUq0M9yQPxmYgXelebM7i3O052CsB1LJg3RuSx1EQkrw/HpO+s7jbAjHHiCTVVrJtOQpTKU9LVRIn8F1Q7g+D8FqfI6tVStYoxeDUQLzH87QOZMR7o0Zcm1d6C4CNONLNaNo7el0+sYgV50x2GSzmjvvhJqx5SDzBfbGI55XHTcfNH7uLLPRiYstprFzjHtd7Tv3h0Q29HYUB5OGlMfNffnGxI0fpez7kNLe1FIBlmqF1ZuUA3gG+J+MhoQiAnAAAAABJRU5ErkJggg=="
        },
        705: function(e, t, n) {
            "use strict";
            n(490)
        },
        706: function(e, t, n) {
            var o = n(20),
                r = n(96),
                d = n(281),
                c = n(491),
                l = o((function(i) {
                    return i[1]
                })),
                h = r(d),
                m = r(c);
            l.push([e.i, ".faqhead[data-v-79b642b6]{margin-bottom:20px}.a-c[data-v-79b642b6]{align-items:center;display:flex}.title[data-v-79b642b6]{font-size:30px;padding:0 0 35px}.j-sb[data-v-79b642b6]{justify-content:space-between}.changeopen[data-v-79b642b6]{cursor:pointer;height:36px;width:36px}.changeopen img[data-v-79b642b6]{height:100%;width:100%}.collapse-box[data-v-79b642b6] .el-collapse-item__header{font-weight:700;height:auto;line-height:140%;padding:15px 0}.collapse-box[data-v-79b642b6] .el-icon-arrow-right:before{background-size:contain!important;background:url(" + h + ') no-repeat;content:"";display:block;height:1.35vw;margin-right:40px;width:1.35vw}.collapse-box[data-v-79b642b6] .el-collapse-item__arrow.is-active{transform:rotate(0deg)}.collapse-box[data-v-79b642b6] .el-collapse-item__arrow.is-active:before{background-image:url(' + m + ");margin-right:40px}.collapse-box .toggle[data-v-79b642b6]{font-size:14px;font-weight:400;line-height:140%;padding-right:95px}.collapse-box .meatole[data-v-79b642b6]{padding-left:95px;padding-right:0}.garycolor[data-v-79b642b6] .el-collapse-item__header{background-color:#f7f7f7;font-weight:700;height:auto;line-height:140%;padding:15px 0}.whitecolor[data-v-79b642b6] .el-collapse-item__header{background-color:#fff;font-weight:700;height:auto;line-height:140%;padding:15px 0}@media screen and (max-width:768px){.collapse-box[data-v-79b642b6] .el-collapse-item__header{font-size:14px;line-height:140%;padding:15px 0}.collapse-box[data-v-79b642b6] .el-icon-arrow-right:before{background:url(" + h + ') no-repeat;background-size:100%;content:"";display:block;height:16px;margin-right:13px;width:16px}.collapse-box[data-v-79b642b6] .el-collapse-item__arrow.is-active{transform:rotate(0deg)}.collapse-box[data-v-79b642b6] .el-collapse-item__arrow.is-active:before{background:url(' + m + ") no-repeat;background-size:100%;margin-right:13px}.collapse-box .toggle[data-v-79b642b6]{font-size:14px;font-weight:400;line-height:140%;padding-right:0}.collapse-box .toggle[data-v-79b642b6] img{height:auto!important}.changeopen[data-v-79b642b6]{height:26px;width:26px}.support[data-v-79b642b6]{padding:70px 20px 0}.support .title[data-v-79b642b6]{font-size:18px;padding:0 0 15px}.support .tabs .item[data-v-79b642b6]{width:100%}.support .tabs .el-table[data-v-79b642b6]{color:#000;font-size:13px}.support .tabs[data-v-79b642b6] .el-table__cell{padding:10px 0}.support .tabs .down-item[data-v-79b642b6]{float:right}.garycolor[data-v-79b642b6] .el-collapse-item__header{background-color:#f7f7f7;font-size:14px;line-height:140%;padding:15px 0}.whitecolor[data-v-79b642b6] .el-collapse-item__header{background-color:#fff;font-size:14px;line-height:140%;padding:15px 0}}@media only screen and (min-width:769px)and (max-width:1920px){.collapse-box[data-v-79b642b6] .el-collapse-item__header{line-height:140%;padding:.78vw 0}.collapse-box[data-v-79b642b6] .el-icon-arrow-right:before{background-size:cover;height:1.35vw;width:1.35vw}.collapse-box .toggle[data-v-79b642b6]{font-size:.729vw;line-height:140%}.changeopen[data-v-79b642b6]{margin-bottom:30px}.support[data-v-79b642b6]{padding:4.68vw 0}.support .title[data-v-79b642b6]{font-size:1.56vw;padding:0 0 1.82vw}.support .tabs .el-table[data-v-79b642b6]{font-size:.729vw}.support .tips[data-v-79b642b6]{font-size:.6225vw;padding:1.249vw 0 0}}", ""]), l.locals = {}, e.exports = l
        },
        707: function(e, t, n) {
            "use strict";
            n(492)
        },
        708: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".videodialog .el-dialog__header{display:none}.el-dialog__body{background-color:transparent;padding:0}.el-dialog__footer{display:none}", ""]), o.locals = {}, e.exports = o
        },
        709: function(e, t, n) {
            "use strict";
            n(493)
        },
        710: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".a-c[data-v-02781578]{align-items:center;display:flex}.j-sb[data-v-02781578]{justify-content:space-between}.desc[data-v-02781578]{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;width:100%}.desc[data-v-02781578],.titles[data-v-02781578]{-webkit-line-clamp:1}.changeopen[data-v-02781578]{cursor:pointer;height:36px;width:36px}.changeopen img[data-v-02781578]{height:100%;width:100%}.video-new-section[data-v-02781578]{margin:50px auto 120px;max-width:1440px;overflow:hidden;position:relative}.video-new-section .title[data-v-02781578]{font-size:30px;margin:0 auto;padding:30px 0;width:100%}.video-new-section .videoitembase[data-v-02781578]{background-color:#f7f7f7;border-radius:15px;cursor:pointer;position:relative;width:100%}.video-new-section .videoitembase .imgbase[data-v-02781578]{align-items:center;background-color:#000;border-radius:15px;display:flex;height:12vw;overflow:hidden;position:relative}.video-new-section .videoitembase .imgbase img[data-v-02781578]{height:auto}.video-new-section .videoitembase .imgbase .playimg[data-v-02781578]{bottom:26px;height:42px;position:absolute;right:26px;width:42px}.video-new-section .videoitembase .imgsecbase[data-v-02781578]{align-items:center;background-color:#000;border-radius:15px;display:flex;height:12vw;overflow:hidden;position:relative}.video-new-section .videoitembase .imgsecbase img[data-v-02781578]{height:auto}.video-new-section .videoitembase .imgsecbase .playimg[data-v-02781578]{bottom:26px;height:42px;position:absolute;right:26px;width:42px}.video-new-section .videoitembase img[data-v-02781578]{border-radius:15px;height:100%;width:100%}.video-new-section .videoitembase .authinfoPc[data-v-02781578]{align-items:flex-start;display:flex;font-size:14px;margin-top:16px;padding:0 15px 15px}.video-new-section .videoitembase .authinfoPhone[data-v-02781578]{display:none}.video-new-section .videoitembase .userhead[data-v-02781578]{border:1px solid #fff;border-radius:50%;height:42px;margin-right:10px;width:42px}.video-new-section .videoitembase .meahead[data-v-02781578]{margin-left:10px;margin-right:0}.video-new-section .onrvideobase[data-v-02781578]{background-color:#000;border-radius:15px;margin:0 auto;overflow:hidden;width:50vw}.video-new-section .onrvideobase .oneitembase[data-v-02781578]{align-items:center;background-position:top;background-repeat:no-repeat;background-size:contain;border-radius:15px;display:flex;height:100%;justify-content:center;position:relative;width:100%}.video-new-section .onrvideobase .oneitembase .authOneinfoPc[data-v-02781578]{align-items:center;background:rgba(0,0,0,.5);border-radius:15px;bottom:0;color:#f7f7f7;display:flex;font-size:14px;font-weight:900;left:0;line-height:16.38px;overflow:hidden;position:absolute;width:100%}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .userheaOnePc[data-v-02781578]{border-radius:50%;height:42px;margin-right:12px;width:42px}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .meaonepc[data-v-02781578]{margin-left:12px;margin-right:0}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .names[data-v-02781578]{margin-top:5px}.video-new-section .onrvideobase .oneitembase .playOneimg[data-v-02781578]{cursor:pointer}.video-new-section .onrvideobase .authinfoOnePhone[data-v-02781578]{background:rgba(0,0,0,.5);border-radius:5px;bottom:0;color:#f7f7f7;display:flex;flex-direction:column;font-size:12px;height:54px;left:0;overflow:hidden;padding:0 8px;position:absolute;width:100%}.video-new-section .twovideo[data-v-02781578]{background:#fff;display:flex;height:-moz-max-content!important;height:max-content!important;justify-content:space-between;width:calc(66.66667% - 7.33333px)}@media screen and (max-width:768px){.video-new-section[data-v-02781578]{margin:20px 20px 37px}.video-new-section .changeopen[data-v-02781578]{display:none}.video-new-section .swiper-container[data-v-02781578]{margin-left:0!important;margin-right:0!important}.video-new-section .title[data-v-02781578]{font-size:14px;margin:0 auto;padding:22px 0}.video-new-section .onrvideobase[data-v-02781578]{border-radius:5px;height:60vw;width:90vw}.video-new-section .onrvideobase .oneitembase[data-v-02781578]{border-radius:5px}.video-new-section .onrvideobase .oneitembase .authOneinfoPc[data-v-02781578]{display:none}.video-new-section .onrvideobase .oneitembase .authinfoOnePhone[data-v-02781578]{display:flex}.video-new-section .onrvideobase .oneitembase .authinfoOnePhone .userOnehead[data-v-02781578]{border-radius:50%;height:18px;width:18px}.video-new-section .onrvideobase .oneitembase .playOneimg[data-v-02781578]{height:27px;width:27px}.video-new-section .swiper-container[data-v-02781578]{margin-left:60px;margin-right:60px;overflow:hidden}.video-new-section .swiper-button-next[data-v-02781578],.video-new-section .swiper-button-next[data-v-02781578]:after,.video-new-section .swiper-button-prev[data-v-02781578],.video-new-section .swiper-button-prev[data-v-02781578]:after{display:none}.video-new-section .videoitembase[data-v-02781578]{border-radius:5px;width:100%}.video-new-section .videoitembase .imgbase[data-v-02781578]{border-radius:5px;height:34vw}.video-new-section .videoitembase .imgbase .playimg[data-v-02781578]{bottom:11px;height:27px;right:11px;width:27px}.video-new-section .videoitembase .imgsecbase[data-v-02781578]{border-radius:5px;height:34vw}.video-new-section .videoitembase .imgsecbase .playimg[data-v-02781578]{bottom:11px;height:27px;right:11px;width:27px}.video-new-section .videoitembase img[data-v-02781578]{border-radius:5px;height:100%;width:100%}.video-new-section .videoitembase .authinfoPc[data-v-02781578]{display:none}.video-new-section .videoitembase .authinfoPhone[data-v-02781578]{align-items:flex-start;display:flex;flex-direction:column;font-size:12px;margin-top:10px;padding:0 10px 10px}.video-new-section .videoitembase .userhead[data-v-02781578]{height:16px;margin-right:5px;width:16px}.video-new-section .videoitembase .meahead[data-v-02781578]{margin-left:5px;margin-right:0}}@media only screen and (min-width:769px)and (max-width:1920px){.video-new-section[data-v-02781578]{padding:2.6vw 0;width:75vw}.video-new-section .faqhead[data-v-02781578]{margin-bottom:3.5vw}.video-new-section .faqhead .title[data-v-02781578]{font-size:1.56vw;padding:1.035vw 0}.video-new-section .videoitembase[data-v-02781578]{width:100%}.video-new-section .videoitembase .imgbase[data-v-02781578],.video-new-section .videoitembase .imgsecbase[data-v-02781578]{height:17vw}.video-new-section .onrvideobase[data-v-02781578]{border-radius:1vw;height:34vw;width:50vw}.video-new-section .onrvideobase .oneitembase[data-v-02781578]{border-radius:1vw}.video-new-section .onrvideobase .oneitembase .authinfoOnePhone[data-v-02781578]{display:none}.video-new-section .onrvideobase .oneitembase .authOneinfoPc[data-v-02781578]{border-radius:1vw;display:flex;font-size:14px;font-weight:900;height:77px;line-height:16.38px;padding:0 19px}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .userheaOnePc[data-v-02781578]{border-radius:50%;height:42px;margin-right:12px;width:42px}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .meaonepc[data-v-02781578]{margin-left:12px;margin-right:0}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .names[data-v-02781578]{margin-top:5px}.video-new-section .onrvideobase .oneitembase .playOneimg[data-v-02781578]{height:2.2vw;width:2.2vw}}@media only screen and (min-width:1921px){.video-new-section[data-v-02781578]{max-width:75vw;padding:2.6vw 0}.video-new-section .faqhead[data-v-02781578]{margin-bottom:3.5vw}.video-new-section .faqhead .title[data-v-02781578]{font-size:1.56vw;padding:1.035vw 0}.video-new-section .videoitembase[data-v-02781578]{width:100%}.video-new-section .videoitembase .imgbase[data-v-02781578]{height:13vw}.video-new-section .videoitembase .imgsecbase[data-v-02781578]{height:17vw}.video-new-section .onrvideobase[data-v-02781578]{border-radius:1vw;height:34vw;width:50vw}.video-new-section .onrvideobase .oneitembase[data-v-02781578]{border-radius:1vw}.video-new-section .onrvideobase .oneitembase .authinfoOnePhone[data-v-02781578]{display:none}.video-new-section .onrvideobase .oneitembase .authOneinfoPc[data-v-02781578]{border-radius:1vw;display:flex;font-size:14px;font-weight:900;height:77px;line-height:16.38px;padding:0 19px}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .userheaOnePc[data-v-02781578]{border-radius:50%;height:42px;margin-right:12px;width:42px}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .meaonepc[data-v-02781578]{margin-left:12px;margin-right:0}.video-new-section .onrvideobase .oneitembase .authOneinfoPc .names[data-v-02781578]{margin-top:5px}.video-new-section .onrvideobase .oneitembase .playOneimg[data-v-02781578]{height:2.2vw;width:2.2vw}}", ""]), o.locals = {}, e.exports = o
        },
        711: function(e, t, n) {
            "use strict";
            n(494)
        },
        712: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".video-new-section .swiper-container{margin-left:60px;margin-right:60px;overflow:hidden}.video-new-section .swiper-button-prev{left:0}.video-new-section .swiper-button-next,.video-new-section .swiper-button-prev{background-color:#f2f2f2;border-radius:50%;color:#000;height:42px;top:18vw;width:42px}.video-new-section .swiper-button-next{left:calc(100% - 42px);right:0}.video-new-section .swiper-button-next:after,.video-new-section .swiper-button-prev:after{font-size:15px;left:-60px!important}@media only screen and (min-width:1921px){.video-new-section .swiper-button-next,.video-new-section .swiper-button-prev{top:17vw}}", ""]), o.locals = {}, e.exports = o
        },
        713: function(e, t, n) {
            e.exports = n.p + "img/blackallow.d590b54.webp"
        },
        714: function(e, t, n) {
            "use strict";
            n(495)
        },
        715: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".btn-buy[data-v-35c237fc]{align-items:center;background:#000;border-radius:9px;color:#fff;cursor:pointer;display:flex;font-size:14px;height:54px;justify-content:center}.btn-buy[data-v-35c237fc],.buybase[data-v-35c237fc]{margin-top:33px;width:100%}.buybase .btnline[data-v-35c237fc]{display:flex;flex:1;width:100%}.buybase .btnline .basebuyBtnTxtBtn[data-v-35c237fc]{align-items:center;background:#000;border-radius:9px;color:#fff;cursor:pointer;display:flex;font-size:14px;height:54px;justify-content:center;line-height:54px;margin:0;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.buybase .btnline .basebuyBtnTxtBtn .downimg[data-v-35c237fc]{height:24px;margin-left:17px;margin-right:6px;width:24px}.buybase .btnline .btnright[data-v-35c237fc]{flex:1;height:36px;width:0}.meabase .btnline .basebuyBtnTxtBtn[data-v-35c237fc]{padding-left:0;padding-right:24px}.meabase .btnline .basebuyBtnTxtBtn .downimg[data-v-35c237fc]{margin-left:6px;margin-right:17px}.selllist[data-v-35c237fc]{background:#fff;border:1px solid #bcbcbc;border-radius:9px;display:flex;flex-wrap:wrap;margin-top:11px;min-height:66px;min-width:120px}.selllist .iconitem[data-v-35c237fc]{align-items:center;display:flex;height:66px;justify-content:center;padding:12px 15px;width:131px}.selllist .iconitem img[data-v-35c237fc]{cursor:pointer;max-height:30px}.selllist .iconitem:hover img[data-v-35c237fc]{transform:scale(1.2)}@media screen and (max-width:768px){.btn-buy[data-v-35c237fc]{background:#262626;border-radius:5px;height:48px}.buybase[data-v-35c237fc]{margin-top:30px}.buybase .btnline .basebuyBtnTxtBtn[data-v-35c237fc]{border-radius:5px;display:flex;font-size:14px;height:48px;justify-content:center;line-height:18px;min-width:calc(100vw - 40px);padding-left:0;position:relative;text-align:center;width:calc(100vw - 40px)}.buybase .btnline .basebuyBtnTxtBtn .downimg[data-v-35c237fc]{height:20px;margin-left:6px;margin-right:6px;width:20px}.buybase .btnline .btnright[data-v-35c237fc]{flex:0;height:0;width:0}.buybase .meabase .btnline .basebuyBtnTxtBtn[data-v-35c237fc]{padding-left:0;padding-right:0}.buybase .meabase .btnline .basebuyBtnTxtBtn .downimg[data-v-35c237fc]{margin-left:6px;margin-right:6px}.selllist[data-v-35c237fc]{background:#fff;border:1px solid #bcbcbc;border-radius:12px;margin-top:11px;max-width:calc(100vw - 40px);min-height:54px;min-width:calc(33.33333vw - 13.33333px)}.selllist .iconitem[data-v-35c237fc]{height:54px;padding:15px 18px;width:calc(33.33333vw - 14.33333px)}.selllist .iconitem img[data-v-35c237fc]{max-height:23px}.selllist .iconitem:hover img[data-v-35c237fc]{transform:scale(1)}}@media only screen and (min-width:769px){.btn-buy[data-v-35c237fc]{border-radius:.46875vw;font-size:.7291666667vw;height:2.8125vw}.btn-buy[data-v-35c237fc],.buybase[data-v-35c237fc]{margin-top:1.71875vw}.buybase .btnline .basebuyBtnTxtBtn[data-v-35c237fc]{border-radius:.46875vw;font-size:.8333333333vw;height:2.8125vw;line-height:2.8125vw}.buybase .btnline .basebuyBtnTxtBtn .downimg[data-v-35c237fc]{height:1.25vw;margin-left:.8854166667vw;margin-right:.3125vw;width:1.25vw}.buybase .btnline .btnright[data-v-35c237fc]{height:1.875vw}.meabase .btnline .basebuyBtnTxtBtn .downimg[data-v-35c237fc]{margin-left:.3125vw;margin-right:.8854166667vw}.selllist[data-v-35c237fc]{border-radius:.46875vw;margin-top:.5729166667vw;min-height:3.4375vw;min-width:6.25vw}.selllist .iconitem[data-v-35c237fc]{height:3.4375vw;padding:.625vw .78125vw;width:6.8229166667vw}.selllist .iconitem img[data-v-35c237fc]{max-height:1.5625vw}}", ""]), o.locals = {}, e.exports = o
        },
        716: function(e, t, n) {
            e.exports = n.p + "img/bugrighticon.3b934e9.webp"
        },
        717: function(e, t, n) {
            "use strict";
            n(496)
        },
        718: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".directly[data-v-0c0de6c2]{font-size:12px;height:36px;line-height:36px;margin:0 0 0 20px;padding:0 13px}.buy[data-v-0c0de6c2],.directly[data-v-0c0de6c2]{background:#da291c;border-radius:9px;color:#fff;cursor:pointer;min-width:120px;text-align:center}.buy[data-v-0c0de6c2]{align-items:center;display:flex;font-size:14px;height:32px;line-height:32px;margin:0 0 0 9px;padding-left:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.buy .downimg[data-v-0c0de6c2]{height:20px;margin-left:17px;margin-right:9px;width:20px}.meabuy[data-v-0c0de6c2]{margin-left:0;margin-right:20px;padding-left:0;padding-right:24px}.meabuy .downimg[data-v-0c0de6c2]{margin-left:6px;margin-right:17px}.pcitem[data-v-0c0de6c2]{align-items:center;display:flex;height:3.4375vw;justify-content:center;padding:.625vw .78125vw;position:relative;width:6.8229166667vw}.pcitem img[data-v-0c0de6c2]{max-height:1.5625vw;-o-object-fit:cover;object-fit:cover;transition:transform .3s ease}.pcitem:hover img[data-v-0c0de6c2]{transform:scale(1.2)}.phoneItem[data-v-0c0de6c2]{align-items:center;display:flex;height:54px;justify-content:center;padding:15px 18px;width:calc(33.33333vw - 14.33333px)}.phoneItem img[data-v-0c0de6c2]{max-height:23px;-o-object-fit:cover;object-fit:cover}@media screen and (max-width:768px){.directly[data-v-0c0de6c2]{border-radius:18px;height:36px;line-height:36px;padding:0 13px;text-align:center}.buy[data-v-0c0de6c2],.directly[data-v-0c0de6c2]{font-size:12px;min-width:100px}.buy[data-v-0c0de6c2]{border-radius:6px;height:32px;line-height:20px;margin-left:10px;padding-left:15px}.buy .downimg[data-v-0c0de6c2]{height:20px;margin-left:6px;margin-right:6px;width:20px}.mobilemenubase[data-v-0c0de6c2]{background-color:#fff;border:1px solid #bcbcbc;border-radius:12px;min-width:105px;padding-left:3px}[data-v-0c0de6c2] .popper__arrow{display:none}.el-dropdown-menu__item[data-v-0c0de6c2],.el-menu-item[data-v-0c0de6c2]{padding:0}.meabuy[data-v-0c0de6c2]{margin-left:0;margin-right:20px;padding-left:0;padding-right:24px}}@media only screen and (min-width:769px){.directly[data-v-0c0de6c2]{font-size:.625vw;height:1.875vw;line-height:1.875vw;padding:0 .6770833333vw}.buy[data-v-0c0de6c2],.directly[data-v-0c0de6c2]{border-radius:.46875vw;margin-left:1.0416666667vw;min-width:6.25vw}.buy[data-v-0c0de6c2]{font-size:.7291666667vw;height:1.6666666667vw;line-height:1.6666666667vw;padding-left:1.25vw}.buy .downimg[data-v-0c0de6c2]{height:1.0416666667vw;margin-left:.46875vw;margin-right:.46875vw;width:1.0416666667vw}.meabuy[data-v-0c0de6c2]{margin-left:0;margin-right:1.0416666667vw;padding-left:0;padding-right:1.25vw}}[data-v-0c0de6c2] .popper__arrow{display:none!important}", ""]), o.locals = {}, e.exports = o
        },
        719: function(e, t, n) {
            "use strict";
            n(497)
        },
        720: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".el-dropdown-menu{z-index:200!important}", ""]), o.locals = {}, e.exports = o
        },
        735: function(e, t, n) {
            e.exports = n.p + "videos/KV.a8066b7.mp4"
        },
        768: function(e, t, n) {
            "use strict";
            n(523)
        },
        769: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".tab-warp[data-v-0e3e11e2]{padding:40px 0}.tab-warp[data-v-0e3e11e2] .el-tabs__nav{display:table;float:none;margin:0 auto}.tab-warp[data-v-0e3e11e2] .el-form-item.is-error .el-select{border-color:#f56c6c!important}.tab-warp[data-v-0e3e11e2] .el-tabs__item{color:rgba(0,0,0,.5)}.tab-warp[data-v-0e3e11e2] .el-tabs__item.is-active{color:#da291c}.tab-warp[data-v-0e3e11e2] .el-tabs__active-bar{background-color:#da291c;height:2px}.system-box[data-v-0e3e11e2]{margin:0 auto;padding:42px 0;width:600px}.system-box .fitems[data-v-0e3e11e2]{margin-bottom:0!important}.system-box .sort-input[data-v-0e3e11e2]{background:#fff;border:1px solid rgba(0,0,0,.1);border-radius:9px;box-sizing:border-box;margin-bottom:12px;padding:5px 0;width:100%}.system-box .sort-input[data-v-0e3e11e2] .el-input__inner{border:0}.system-box .sort-input[data-v-0e3e11e2] .el-input__suffix{right:15px}.system-box .sort-input[data-v-0e3e11e2] .el-input__suffix .el-icon-arrow-up:before{align-items:center;background:#000;border-radius:100%;color:#fff;display:flex;font-size:10px;font-weight:700;height:24px;justify-content:center;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:24px}.system-box .measort[data-v-0e3e11e2] .el-input__inner{border:0;padding-right:15px}.system-box .measort[data-v-0e3e11e2] .el-input__suffix{left:15px;right:auto}.system-box .sort-submit[data-v-0e3e11e2]{align-items:center;background:#000;border:0;border-radius:9px;color:#fff;cursor:pointer;display:flex;height:54px;justify-content:center;width:100%}.homebox[data-v-0e3e11e2]{padding:42px 0}@media screen and (max-width:768px){.tab-warp :v-deep.el-tabs__item[data-v-0e3e11e2]{font-size:12px}.system-box[data-v-0e3e11e2]{padding:20px;width:100%}.system-box .sort-input[data-v-0e3e11e2]{background:#fff;border:1px solid rgba(0,0,0,.1);border-radius:5px;box-sizing:border-box;margin-bottom:12px;padding:5px 0;width:100%}.system-box .sort-input[data-v-0e3e11e2] .el-input__suffix{right:15px}.system-box .sort-input[data-v-0e3e11e2] .el-input__suffix .el-icon-arrow-up:before{height:16px;width:16px}.system-box .measort[data-v-0e3e11e2] .el-input__suffix{left:15px;right:auto}.system-box .sort-submit[data-v-0e3e11e2]{border-radius:5px;height:48px}.homebox[data-v-0e3e11e2]{padding:20px 0}}@media only screen and (min-width:768px)and (max-width:1920px){.tab-warp[data-v-0e3e11e2]{padding:2.08vw 0}.tab-warp[data-v-0e3e11e2] .el-tabs__item{font-size:.729vw}.system-box[data-v-0e3e11e2]{padding:2.187vw 0;width:31.24vw}.system-box .sort-input[data-v-0e3e11e2]{border-radius:.468vw;margin-bottom:.624vw;padding:.26vw 0}.system-box .sort-input[data-v-0e3e11e2] .el-input__inner{font-size:.729vw}.system-box .sort-input[data-v-0e3e11e2] .el-input__suffix{right:.78vw}.system-box .sort-input[data-v-0e3e11e2] .el-input__suffix .el-icon-arrow-up:before{font-size:.52vw;height:1.25vw;width:1.25vw}.system-box .measort[data-v-0e3e11e2] .el-input__suffix{left:.78vw;right:auto}.system-box .sort-submit[data-v-0e3e11e2]{border-radius:.468vw;font-size:.729vw;height:2.81vw}}", ""]), o.locals = {}, e.exports = o
        },
        770: function(e, t, n) {
            "use strict";
            n(524)
        },
        771: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, '.mydropdown__item{white-space:normal;word-wrap:break-word;max-width:95vw;overflow:hidden;text-overflow:ellipsis}.mydropdown__item .selitem{font-family:"system-ui"}.phonedown{display:-webkit-box;font-size:12px;max-width:95vw;overflow:hidden;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:5;-webkit-box-orient:vertical;height:auto;line-height:18px;min-height:34px;padding:6px 20px}.phonedown .selitem{font-family:"system-ui"}', ""]), o.locals = {}, e.exports = o
        },
        778: function(e, t, n) {
            "use strict";
            n(528)
        },
        779: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".pagebase[data-v-bf58d128]{align-items:center;display:flex;justify-content:space-between;margin-top:30px;padding:0 20%;width:100%}.pagebase .pagenumber[data-v-bf58d128]{color:#000;font-family:Avenir;font-size:14px}.pagebase .numbase[data-v-bf58d128]{align-items:center;display:flex;font-weight:700;height:30px;justify-content:center;width:30px}", ""]), o.locals = {}, e.exports = o
        },
        801: function(e, t, n) {
            "use strict";
            n(536)
        },
        802: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".scanner-container[data-v-a392f140]{background:#000;display:flex;height:100vh;justify-content:flex-end;left:0;overflow:hidden;position:fixed;top:0;width:100vw;z-index:99999}.close-btn[data-v-a392f140]{background:#000;border-radius:50%;height:11.7333333333vw;position:absolute;right:5.3333333333vw;top:8vw;width:11.7333333333vw;z-index:999999}.scan-overlay[data-v-a392f140]{align-items:center;bottom:0;display:flex;flex-direction:column;height:100%;justify-content:center;left:0;position:absolute;right:0;top:0;width:100%}.scan-frame[data-v-a392f140]{border:3px solid #fff;box-shadow:0 0 0 100vmax rgba(0,0,0,.7);box-sizing:content-box;height:70vmin;width:70vmin}.scan-hint[data-v-a392f140]{animation:pulse-a392f140 2s infinite;background:rgba(0,0,0,.5);border-radius:20px;color:#fff;margin-top:20px;padding:10px 20px;text-align:center}@keyframes pulse-a392f140{0%{transform:translateY(0)}50%{transform:translateY(10px)}to{transform:translateY(0)}}", ""]), o.locals = {}, e.exports = o
        },
        833: function(e, t, n) {
            "use strict";
            n(554)
        },
        834: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".bannerWarp[data-v-3577ef8e]{color:#fff;height:800px;overflow:hidden;position:relative;width:100%}.bannerWarp img[data-v-3577ef8e]{height:100%}.bannerWarp .conbase[data-v-3577ef8e]{height:100%;left:0;position:absolute;top:0;width:100%}.bannerWarp .conbase .content[data-v-3577ef8e]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;margin-left:160px;width:100%}.bannerWarp .conbase .content h2[data-v-3577ef8e]{font-size:40px}.bannerWarp .conbase .content .substitle[data-v-3577ef8e]{color:hsla(0,0%,100%,.5);font-family:Avenir;font-size:24px;font-weight:900;line-height:28px;margin-top:20px;width:670px;word-break:break-word}@media screen and (max-width:768px){.bannerWarp[data-v-3577ef8e]{font-weight:800;height:120vw;text-align:center}.bannerWarp .conbase .content[data-v-3577ef8e]{justify-content:flex-start;margin-left:0;max-width:100%;padding-top:81.6vw}.bannerWarp .conbase .content h2[data-v-3577ef8e]{font-size:5.8666666667vw}.bannerWarp .conbase .content .substitle[data-v-3577ef8e]{font-size:3.7333333333vw;line-height:4.2666666667vw;margin-top:7.2vw;width:85.8666666667vw}}@media only screen and (min-width:769px){.bannerWarp[data-v-3577ef8e]{height:41.6666666667vw}.bannerWarp .conbase .content[data-v-3577ef8e]{align-items:flex-start;display:flex;flex-direction:column;height:100%;justify-content:center;margin:0 auto 0 8.3333333333vw;max-width:75vw}.bannerWarp .conbase .content h2[data-v-3577ef8e]{font-size:2.0833333333vw}.bannerWarp .conbase .content .substitle[data-v-3577ef8e]{font-size:1.25vw;line-height:1.4583333333vw;margin-top:1.0416666667vw;width:34.8958333333vw}}", ""]), o.locals = {}, e.exports = o
        },
        888: function(e, t, n) {
            "use strict";
            n(576)
        },
        889: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, '.drag[data-v-6f634985]{background-color:#f7f7f7;border-radius:4px;height:40px;line-height:40px;position:relative;text-align:center;width:100%}.handler[data-v-6f634985]{border:1px solid #ccc;border-radius:4px;cursor:move;height:38px;width:40px}.handler_bg[data-v-6f634985]{align-items:center;background:#fafafa;display:flex;justify-content:center}.handler_bg[data-v-6f634985]:after{content:"\\e6dc";font-family:element-icons!important;font-size:1.1em}.handler_ok_bg[data-v-6f634985]{background:#fafafa;border-bottom-left-radius:0;border-top-left-radius:0}.handler_ok_bg[data-v-6f634985]:after{color:green;content:"\\e79c";font-family:element-icons!important;font-size:1.2em}.drag_bg[data-v-6f634985]{background-color:#7ac23c;border-radius:4px 0 0 4px;height:38px;width:0}.drag_text[data-v-6f634985]{color:rgba(0,0,0,.6);position:absolute;text-align:center;top:0;-moz-user-select:none;-webkit-user-select:none;user-select:none;-o-user-select:none;-ms-user-select:none;width:100%}', ""]), o.locals = {}, e.exports = o
        },
        893: function(e, t, n) {
            "use strict";
            n(579)
        },
        894: function(e, t, n) {
            var o = n(20)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".input-box{padding:10px 0;position:relative;width:100%}.input-box .input-content{align-items:center;display:flex;height:40px;justify-content:space-between;width:100%}.input-box .input-content input{background:#f7f7f7;border:0;border-radius:5px;box-shadow:inset 0 4px 9.7px 0 rgba(0,0,0,.03);color:inherit;font-family:inherit;font-size:18px;height:48px;outline:0;outline:none;overflow:hidden;text-align:center;width:58px}.input-box .clean{background:#f7f7f7;border:1px solid rgba(0,0,0,.09);border-radius:24px;color:#000;cursor:pointer;display:block;font-size:13px;height:42px;margin:20px auto 0;text-align:center;width:145px}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{appearance:none;-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield;-webkit-appearance:none;margin:0}", ""]), o.locals = {}, e.exports = o
        }
    }
]);