(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        113: function(t, e, o) {
            "use strict";
            (function(t) {
                o(35), o(52), o(14);
                var n = o(11),
                    r = o(32),
                    l = o(51);
                e.a = {
                    data: function() {
                        return {
                            lang: [],
                            local: !1,
                            headerHover: !1,
                            menu: "",
                            proMenuList: "",
                            ProList: "",
                            proMenuCut: 0,
                            serviceList: "",
                            lodProds: [{
                                categoryCode: "Memory-Cards",
                                titleName: this.$t("navProducts.memoryCard.title"),
                                prodImgUrl: "typecard.webp",
                                types: [{
                                    title: this.$t("navProducts.memoryCard.child.CFexpress"),
                                    code: "CFexpress"
                                }, {
                                    title: this.$t("navProducts.memoryCard.child.SD"),
                                    code: "SD"
                                }, {
                                    title: this.$t("navProducts.memoryCard.child.microSD"),
                                    code: "MicroSD"
                                }],
                                allTitle: this.$t("navProducts.memoryCard.child.allMemCards")
                            }, {
                                categoryCode: "Portable-Storage",
                                titleName: this.$t("navProducts.mobileStorage.title"),
                                prodImgUrl: "movecard.webp",
                                types: [{
                                    title: this.$t("navProducts.mobileStorage.child.mobileDrive"),
                                    code: "Portable-SSDs"
                                }, {
                                    title: this.$t("navProducts.mobileStorage.child.usb"),
                                    code: "USB-Flash-Drives"
                                }],
                                allTitle: this.$t("navProducts.mobileStorage.child.allMobileStorage")
                            }, {
                                categoryCode: "SSD",
                                titleName: this.$t("navProducts.ssd.title"),
                                prodImgUrl: "zh_CN" == this.$i18n.locale ? "ssdcn.webp" : "ssdall.webp",
                                types: [{
                                    title: "NVMe",
                                    code: "NVMe"
                                }, {
                                    title: "SATA",
                                    code: "SATA"
                                }],
                                allTitle: this.$t("navProducts.ssd.child.allSsd")
                            }, {
                                categoryCode: "Memory",
                                titleName: this.$t("navProducts.ram.title"),
                                prodImgUrl: "zh_CN" == this.$i18n.locale ? "memorycn.webp" : "memoryall.webp",
                                types: [{
                                    title: "DDR5",
                                    code: "DDR5"
                                }, {
                                    title: "DDR4",
                                    code: "DDR4"
                                }],
                                allTitle: this.$t("navProducts.ram.child.allRam")
                            }, {
                                categoryCode: "Accessories",
                                titleName: this.$t("navProducts.attachment.title"),
                                prodImgUrl: "accessorieimg.webp",
                                types: [{
                                    title: this.$t("navProducts.attachment.child.dockStation"),
                                    code: "Workflow-Modules"
                                }, {
                                    title: this.$t("navProducts.attachment.child.cardReader"),
                                    code: "Memory-Card-Reader"
                                }, {
                                    title: this.$t("navProducts.attachment.child.other"),
                                    code: "Others"
                                }],
                                allTitle: this.$t("navProducts.attachment.child.allAttachment")
                            }],
                            solt: {
                                pageIndex: 1,
                                sortType: "",
                                pageSize: 9,
                                sortStr: "desc",
                                name: "",
                                categoryIdList: [],
                                productCategoryIdListList: []
                            },
                            subBarData: [],
                            langList: [{
                                name: "Global / English",
                                url: "/global/",
                                code: "en_WW"
                            }, {
                                name: "Deutsch",
                                url: "/de/",
                                code: "de_DE"
                            }, {
                                name: "Español",
                                url: "/es/",
                                code: "es_ES"
                            }, {
                                name: "Français",
                                url: "/fr/",
                                code: "fr_FR"
                            }, {
                                name: "简体中文",
                                url: "/zh-hans/",
                                code: "zh_CN"
                            }, {
                                name: "繁體中文",
                                url: "/zh-hant/",
                                code: "zh_TW"
                            }, {
                                name: "Italiano ",
                                url: "/it/",
                                code: "it_IT"
                            }, {
                                name: "日本语",
                                url: "/jp/",
                                code: "ja_JP"
                            }, {
                                name: "한국어",
                                url: "/kr/",
                                code: "ko_KR"
                            }, {
                                name: "Americas / English",
                                url: "https://americas.lexar.com/",
                                code: "en_US"
                            }],
                            diamondCode: r.d,
                            isMea: r.f
                        }
                    },
                    props: {
                        menuData: {
                            type: Array,
                            default: []
                        },
                        showAd: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    watch: {
                        menuData: {
                            immediate: !0,
                            handler: function(t, e) {
                                if (t) {
                                    var o = this;
                                    o.$nextTick((function() {
                                        o.init()
                                    }))
                                }
                            }
                        }
                    },
                    methods: {
                        getService: function() {
                            var t = this;
                            this.$request({
                                url: "/Smart/smartcate",
                                method: "get"
                            }).then((function(data) {
                                t.serviceList = data.data.lists
                            }))
                        },
                        pageBurial: function(t) {
                            this.$gtag("event", "NavPro_".concat(l.b, "_bt_click_").concat(t, "_app"), {
                                event_label: t
                            })
                        },
                        getImageSrc: function(t) {
                            try {
                                return o(328)("./".concat(t))
                            } catch (t) {}
                        },
                        linkProd: function(e, o, n) {
                            var r = [],
                                l = e;
                            for (var a in this.subBarData)
                                for (var b in this.subBarData[a].child) o && this.subBarData[a].child[b].categoryCode && this.subBarData[a].child[b].categoryCode === o && r.push(this.subBarData[a].child[b].categoryId), o || this.subBarData[a].categoryCode !== e || r.push(this.subBarData[a].child[b].categoryId);
                            l = l.toLowerCase(), this.solt.categoryIdList = r, t(".menuIcon").each(function() {
                                this.handleMenuIconClick.call(this)
                            }.bind(this)), this.$router.replace({
                                path: "/products/".concat(l, "/"),
                                query: {
                                    solt: encodeURI(JSON.stringify(this.solt))
                                }
                            }), this.pageBurial(n)
                        },
                        handleMenuIconClick: function() {
                            t(".animated2").removeClass("animated2"), t(".header").toggleClass("headerHodon"), t(this).toggleClass("animated2"), t(".menubox").slideToggle(500), 0 != t(this).parent().find(".animated2").length ? t("body").css({
                                overflow: "hidden"
                            }) : (this.local = !1, t("body").css({
                                overflow: ""
                            }))
                        },
                        typeProdHref: function(t, e) {
                            this.handleMenuIconClick();
                            var o = "";
                            o = 0 == t ? "/products/memory-cards/" : 1 == t ? "/products/portable-storage/" : 2 == t ? "/products/ssd/" : 3 == t ? "/products/memory/" : "/products/accessories/", this.$router.replace({
                                path: o
                            }), this.pageBurial(e)
                        },
                        setProdTypes: function() {
                            for (var a in this.lodProds) this.lodProds[a].types = this.lodProds[a].types.filter((function(t) {
                                return "--" !== t.title
                            }))
                        },
                        init: function() {
                            var e = this;
                            t(".menuIcon").on("click", (function() {
                                t(".header").toggleClass("headerHodon"), t(this).toggleClass("animated2"), t(".menubox").slideToggle(500), 0 != t(this).parent().find(".animated2").length ? t("body").css({
                                    overflow: "hidden"
                                }) : (e.local = !1, t("body").css({
                                    overflow: ""
                                }))
                            })), t(".boxPadding .item").on("click", (function() {
                                t(this).toggleClass("cut"), t(this).find(".alist").slideToggle(500)
                            })), t(".menubox .icon").on("click", (function() {
                                t(this).toggleClass("cut"), t(this).parent().next(".alist").slideToggle(500)
                            })), t(".proList .item").on("click", (function() {
                                t(this).toggleClass("cut"), t(this).next(".clist").slideToggle(500)
                            })), this.getProdCate()
                        },
                        getProdCate: function() {
                            var t = this;
                            "pc" != this.$store.state.equipment && this.$request({
                                url: "/product/category",
                                method: "get"
                            }).then((function(data) {
                                for (var e = data.data, i = 0; i < e.length; i++) 2 != e[i].type && null != e[i].type || delete e[i];
                                var o = e.filter((function(t) {
                                    return 1 == t.type
                                }));
                                for (i = 0; i < o.length; i++) o[i].level = 1, o[i].child ? o[i].child = o[i].child.filter((function(t) {
                                    return 1 == t.type
                                })) : o[i].child = [];
                                t.subBarData = o, t.$store.commit("setSubBarData", o)
                            }))
                        },
                        getLang: function() {
                            var t = this;
                            this.$request({
                                url: "/i18n/language/list",
                                method: "get"
                            }).then((function(data) {
                                t.lang = data.data
                            }))
                        },
                        setLang: function(t) {
                            n.a.set("lang", t), this.$i18n.locale = t, this.openlang(), location.reload()
                        },
                        openlang: function() {
                            this.local = !this.local, this.local && this.pageBurial(this.$t("head.Language"))
                        }
                    },
                    mounted: function() {
                        this.setProdTypes()
                    }
                }
            }).call(this, o(127))
        },
        114: function(t, e, o) {
            "use strict";
            (function(t) {
                o(52);
                var n = o(11);
                e.a = {
                    props: {
                        blackTheme: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            regionOpt: [],
                            region: "",
                            newRegion: ""
                        }
                    },
                    methods: {
                        getRegion: function() {
                            var t = this;
                            this.$request({
                                url: "/i18n/region/country/select",
                                method: "get"
                            }).then((function(data) {
                                t.regionOpt = data.data;
                                var e = t.regionOpt.find((function(e) {
                                    return e.regionCode == t.region
                                }));
                                if (e) t.newRegion = e.regionName;
                                else {
                                    t.newRegion = "全球";
                                    var o = n.a.set("location", "global");
                                    t.region = o
                                }
                            }))
                        },
                        setRegion: function(t) {
                            n.a.set("location", t), this.newRegion = this.regionOpt.find((function(e) {
                                return e.regionCode == t
                            })).regionName, window.location.reload()
                        }
                    },
                    mounted: function() {
                        t((function() {
                            t(".footerWapper .fast-menu li .h4").on("click", (function() {
                                t(this).toggleClass("cut"), t(this).next(".list").slideToggle(500)
                            }))
                        }))
                    }
                }
            }).call(this, o(127))
        },
        150: function(t, e, o) {
            "use strict";
            o.r(e);
            o(280);
            var n = {
                    props: {
                        eventsList: {
                            type: Array,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {
                            currentAdIndex: 0,
                            intervalId: null,
                            isload: !1,
                            showLogo: !1
                        }
                    },
                    methods: {
                        openLink: function() {
                            window.open("https://pexar.com/?utm_source=lexar&utm_medium=bar", "_blank")
                        },
                        adClick: function(link) {
                            window.open(link, "_blank")
                        },
                        closeAd: function() {
                            this.$emit("closeAd")
                        },
                        setLogo: function() {
                            "zh_CN" == this.$i18n.locale || "ja_JP" == this.$i18n.locale || "zh_TW" === this.$i18n.locale ? this.showLogo = !1 : this.showLogo = !0
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.setLogo(), setTimeout((function() {
                            t.eventsList && t.eventsList.length > 1 && (t.intervalId = setInterval((function() {
                                t.currentAdIndex = (t.currentAdIndex + 1) % t.eventsList.length, t.isload = !0
                            }), 3e4))
                        }), 200)
                    },
                    beforeDestroy: function() {
                        this.intervalId && clearInterval(this.intervalId)
                    }
                },
                r = (o(342), o(7)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "adbase"
                    }, [e("div", {
                        staticClass: "ad-container center"
                    }, t._l(t.eventsList, (function(o, n) {
                        return e("div", {
                            key: n,
                            class: {
                                "event-item": !0, active: n === t.currentAdIndex, prev: n === (t.currentAdIndex - 1 + t.eventsList.length) % t.eventsList.length && t.isload
                            }
                        }, [e("div", {
                            staticClass: "desc",
                            domProps: {
                                innerHTML: t._s(o.title)
                            },
                            on: {
                                click: function(e) {
                                    return t.adClick(o.link)
                                }
                            }
                        })])
                    })), 0), t._v(" "), t.showLogo ? e("div", {
                        staticClass: "adlogobase",
                        on: {
                            click: t.openLink
                        }
                    }, [e("img", {
                        attrs: {
                            src: o(341),
                            alt: ""
                        }
                    })]) : t._e(), t._v(" "), e("div", {
                        staticClass: "closebtn center",
                        on: {
                            click: t.closeAd
                        }
                    }, [e("span", [t._v("×")])])])
                }), [], !1, null, "30855e90", null);
            e.default = component.exports
        },
        151: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(32),
                r = {
                    components: {
                        contrastComp: o(271).default
                    },
                    props: {
                        tableData: {
                            type: Array,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {
                            isMea: n.f
                        }
                    },
                    methods: {
                        changeData: function(t) {
                            this.$refs.contrastCompRef.changeDiff(t)
                        },
                        compareClose: function() {
                            this.$store.commit("setCompareStatus", !1)
                        }
                    }
                },
                l = (o(349), o(7)),
                component = Object(l.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.$store.state.compareStatus ? e("div", {
                        class: "contrast-table ".concat(t.isMea && "meatable"),
                        style: {
                            top: "pc" == t.$store.state.equipment ? "0" : "50px"
                        }
                    }, [e("div", {
                        staticClass: "contrast-box",
                        style: {
                            width: "pc" == t.$store.state.equipment ? "1320px" : "100vw",
                            borderRadius: "pc" == t.$store.state.equipment ? "15px" : "0",
                            maxHeight: "pc" == t.$store.state.equipment ? "90vh" : "calc(100vh - 50px)",
                            height: "pc" == t.$store.state.equipment ? "auto" : "calc(100vh - 50px)",
                            padding: "pc" == t.$store.state.equipment ? "30px" : "0",
                            marginTop: "pc" == t.$store.state.equipment ? "calc(50 / 1920 * 100vw)" : "75px",
                            border: "solid 0 #f0f0f0",
                            borderTopWidth: "pc" == t.$store.state.equipment ? "0" : "1px"
                        }
                    }, [e("div", {
                        staticClass: "top-box",
                        style: {
                            padding: "pc" == t.$store.state.equipment ? "0" : "20px",
                            paddingBottom: "pc" == t.$store.state.equipment ? "0" : "14px",
                            fontWeight: "pc" == t.$store.state.equipment ? "" : 900
                        }
                    }, ["pc" == t.$store.state.equipment ? e("h2", [t._v(t._s(t.$t("head.compare")))]) : t._e(), t._v(" "), e("p", [t._v(t._s(t.$t("head.proCompare")))]), t._v(" "), "pc" != t.$store.state.equipment ? e("el-checkbox", {
                        staticStyle: {
                            "margin-top": "10px"
                        },
                        on: {
                            change: t.changeData
                        }
                    }, [t._v(t._s(t.$t("currency.diff")))]) : t._e(), t._v(" "), e("div", {
                        staticClass: "close",
                        style: {
                            top: "pc" == t.$store.state.equipment ? "0" : "20px",
                            right: "pc" == t.$store.state.equipment ? t.isMea ? "auto" : "0" : t.isMea ? "auto" : "10px",
                            left: (t.$store.state.equipment, t.isMea ? "10px" : "auto")
                        },
                        on: {
                            click: t.compareClose
                        }
                    }, [e("i", {
                        class: "pc" == t.$store.state.equipment ? "el-icon-close" : "el-icon-circle-close",
                        style: {
                            fontSize: "pc" == t.$store.state.equipment ? "" : "28px"
                        }
                    })])], 1), t._v(" "), e("contrastComp", {
                        ref: "contrastCompRef",
                        attrs: {
                            tableData: t.tableData
                        }
                    })], 1)]) : t._e()
                }), [], !1, null, "1dcfd060", null);
            e.default = component.exports
        },
        152: function(t, e, o) {
            "use strict";
            o.r(e);
            o(12);
            var n = o(11),
                r = o(32),
                l = {
                    data: function() {
                        return {
                            isMea: r.f
                        }
                    },
                    methods: {
                        removeCompare: function(t) {
                            var e = JSON.parse(JSON.stringify(this.$store.state.compareList));
                            e.splice(t, 1), this.$store.commit("setCompare", e), n.a.set("compareList", e), this.$message.success(this.$t("currency.tips3"))
                        },
                        clearCompare: function() {
                            this.$emit("clearCompare")
                        },
                        subCompare: function() {
                            this.$emit("subCompare")
                        }
                    }
                },
                c = (o(351), o(7)),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.$store.state.compareList && t.$store.state.compareList.length > 0 ? e("div", {
                        class: "contrast-warp ".concat(t.isMea && "meawarp")
                    }, [e("ul", {
                        staticClass: "contrast-list"
                    }, t._l(t.$store.state.compareList, (function(o, n) {
                        return e("li", {
                            key: n
                        }, [e("el-image", {
                            staticClass: "pic",
                            attrs: {
                                src: o.imageUrl,
                                fit: "contain"
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "desc"
                        }, [e("div", {
                            domProps: {
                                innerHTML: t._s(o.name)
                            }
                        }), t._v(" "), e("i", {
                            staticClass: "el-icon-error",
                            on: {
                                click: function(e) {
                                    return t.removeCompare(n)
                                }
                            }
                        })])], 1)
                    })), 0), t._v(" "), e("div", {
                        staticClass: "fun-box"
                    }, [e("div", {
                        staticClass: "compare",
                        on: {
                            click: t.subCompare
                        }
                    }, [t._v(t._s(t.$t("head.compare")))]), t._v(" "), e("div", {
                        staticClass: "clear",
                        on: {
                            click: t.clearCompare
                        }
                    }, [t._v(t._s(t.$t("head.clear")))])])]) : t._e()
                }), [], !1, null, "17af6077", null);
            e.default = component.exports
        },
        168: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = {
                    props: {
                        message: {
                            type: String,
                            required: !0
                        },
                        type: {
                            type: String
                        }
                    },
                    data: function() {
                        return {
                            visible: !0
                        }
                    }
                },
                r = (o(405), o(7)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.visible ? e("div", {
                        class: "center-message ".concat(t.type)
                    }, [t._v("\n        " + t._s(t.message) + "\n    ")]) : t._e()])
                }), [], !1, null, "41070306", null);
            e.default = component.exports
        },
        199: function(t, e, o) {
            var content = o(307);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("120498ac", content, !0, {
                sourceMap: !1
            })
        },
        202: function(t, e, o) {
            t.exports = o.p + "img/icon-side-2-h.fe71248.svg"
        },
        203: function(t, e, o) {
            t.exports = o.p + "img/icon-side-2.8c0d986.svg"
        },
        204: function(t, e, o) {
            var content = o(324);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("332a6334", content, !0, {
                sourceMap: !1
            })
        },
        205: function(t, e, o) {
            t.exports = o.p + "img/icon-social-5.4d5419b.svg"
        },
        206: function(t, e, o) {
            t.exports = o.p + "img/icon-social-1.af4a3c5.svg"
        },
        207: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjc1MTIgNkgyNC44MThMMTguMTE3OSAxNC4wNDgyTDI2IDI1SDE5LjgyODRMMTQuOTk0NiAxOC4zNTc4TDkuNDYzNTcgMjVINi4zOTQ5NEwxMy41NjEzIDE2LjM5MTVMNiA2SDEyLjMyODNMMTYuNjk3NiAxMi4wNzEyTDIxLjc1MTIgNlpNMjAuNjc0OCAyMy4wNzA4SDIyLjM3NDJMMTEuNDA0OSA3LjgyNzlIOS41ODEzTDIwLjY3NDggMjMuMDcwOFoiIGZpbGw9IiNBRUFFQUUiLz4KPC9zdmc+Cg=="
        },
        208: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkZyYW1lIDQiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMTQuOTk2MSA0LjY0ODQ0QzkuMjc5NzYgNC42NDg0NCA0LjY1MjM0IDkuMjc1ODUgNC42NTIzNCAxNC45OTIyQzQuNjUyMzQgMjAuNzA4NSA5LjI3OTc2IDI1LjMzNTkgMTQuOTk2MSAyNS4zMzU5QzIwLjcxMjQgMjUuMzM1OSAyNS4zMzk4IDIwLjcwOTUgMjUuMzM5OCAxNC45OTIyQzI1LjMzOTggOS4yNzQ4NCAyMC43MTM0IDQuNjQ4NDQgMTQuOTk2MSA0LjY0ODQ0Wk0xNy43NzE5IDE0LjkzNzhIMTUuOTc2MVYyMS40MTY2SDEzLjMwOTRWMTQuOTM3OEgxMS45NDczVjEyLjcwNjNIMTMuMzA4NlYxMS4zNDVDMTMuMzA4NiA5LjU0OTE5IDE0LjA3MDggOC40NjAwNyAxNi4xOTM1IDguNDYwMDdIMTcuOTg5M1YxMC42OTE5SDE2LjkwMDJDMTYuMDg0IDEwLjY5MTkgMTYuMDI5NyAxMS4wMTg3IDE2LjAyOTcgMTEuNTYyNFYxMi42NTE1SDE4LjA0MzVMMTcuNzcxMyAxNC45MzhMMTcuNzcxOSAxNC45Mzc4WiIgZmlsbD0iI0FFQUVBRSIvPgo8L2c+Cjwvc3ZnPgo="
        },
        209: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkZyYW1lIDUiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMjYuNTI2IDkuNDMwNjRDMjYuMzkyNiA4Ljk1MjM2IDI2LjEzNzkgOC41MTY1OSAyNS43ODY4IDguMTY1NDdDMjUuNDM1NyA3LjgxNDM1IDI0Ljk5OTkgNy41NTk3NCAyNC41MjE3IDcuNDI2MjZDMjIuNzI2NSA2Ljk0NTMzIDE1LjUwMiA2Ljk0NTMzIDE1LjUwMiA2Ljk0NTMzQzE1LjUwMiA2Ljk0NTMzIDguMjk1NTkgNi45MzU3MyA2LjQ4MjI0IDcuNDI2MjZDNi4wMDM5NiA3LjU1OTc0IDUuNTY4MiA3LjgxNDM1IDUuMjE3MDggOC4xNjU0N0M0Ljg2NTk1IDguNTE2NTkgNC42MTEzNSA4Ljk1MjM2IDQuNDc3ODYgOS40MzA2NEM0LjEzNzU4IDExLjI2ODUgMy45Njk4MiAxMy4xMzQxIDMuOTc2NzcgMTUuMDAzMkMzLjk3MTEzIDE2Ljg2NTIgNC4xMzg4OSAxOC43MjM3IDQuNDc3ODYgMjAuNTU0NkM0LjYxMTM1IDIxLjAzMjggNC44NjU5NSAyMS40Njg2IDUuMjE3MDggMjEuODE5N0M1LjU2ODIgMjIuMTcwOSA2LjAwMzk2IDIyLjQyNTUgNi40ODIyNCAyMi41NTg5QzguMjc1NDMgMjMuMDQwOCAxNS41MDIgMjMuMDQwOCAxNS41MDIgMjMuMDQwOEMxNS41MDIgMjMuMDQwOCAyMi43MDczIDIzLjA0MDggMjQuNTIxNyAyMi41NTg5QzI0Ljk5OTkgMjIuNDI1NSAyNS40MzU3IDIyLjE3MDkgMjUuNzg2OCAyMS44MTk3QzI2LjEzNzkgMjEuNDY4NiAyNi4zOTI2IDIxLjAzMjggMjYuNTI2IDIwLjU1NDZDMjYuODU3OSAxOC43MjMgMjcuMDE4NiAxNi44NjQ1IDI3LjAwNiAxNS4wMDMyQzI3LjAxOTkgMTMuMTM0OCAyNi44NTkyIDExLjI2OTEgMjYuNTI2IDkuNDMwNjRaTTEzLjE5NjEgMTguNDUwM1YxMS41NDU0TDE5LjIwOTMgMTUuMDAzMkwxMy4xOTYxIDE4LjQ1MDNaIiBmaWxsPSIjQUVBRUFFIi8+CjwvZz4KPC9zdmc+Cg=="
        },
        210: function(t, e, o) {
            var content = o(327);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("e8747dca", content, !0, {
                sourceMap: !1
            })
        },
        211: function(t, e, o) {
            var content = o(337);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("2db1e1e9", content, !0, {
                sourceMap: !1
            })
        },
        212: function(t, e, o) {
            var content = o(339);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("44a590e0", content, !0, {
                sourceMap: !1
            })
        },
        213: function(t, e, o) {
            var content = o(343);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("ddd89ad4", content, !0, {
                sourceMap: !1
            })
        },
        215: function(t, e, o) {
            var content = o(346);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("0b5e67aa", content, !0, {
                sourceMap: !1
            })
        },
        216: function(t, e, o) {
            var content = o(348);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("367b6cb5", content, !0, {
                sourceMap: !1
            })
        },
        217: function(t, e, o) {
            var content = o(350);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("597f5831", content, !0, {
                sourceMap: !1
            })
        },
        218: function(t, e, o) {
            var content = o(352);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("2b3d8e3a", content, !0, {
                sourceMap: !1
            })
        },
        241: function(t, e, o) {
            var content = o(406);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("6bf6ccf5", content, !0, {
                sourceMap: !1
            })
        },
        271: function(t, e, o) {
            "use strict";
            o.r(e);
            o(12);
            var n = o(49),
                r = (o(13), o(34), o(16), o(344), o(33), o(27), o(32)),
                l = {
                    name: "Contrast",
                    props: ["tableData"],
                    data: function() {
                        return {
                            contrast: "",
                            column: "",
                            different: !1,
                            checkList: "",
                            targetArr: [],
                            clumnArr: [],
                            diamondCode: r.d,
                            isMea: r.f
                        }
                    },
                    created: function() {
                        this.getChangeData()
                    },
                    methods: {
                        getChangeData: function() {
                            var t = this;
                            this.transData();
                            var e = Object(n.a)(new Array(this.contrast.length).keys()),
                                o = [],
                                r = [],
                                l = [];
                            this.contrast.forEach((function(e) {
                                var o = {};
                                t.column.forEach((function(t) {
                                    o[t.label] = e[t.prop]
                                })), Object.keys(o).forEach((function(t) {
                                    l.push(t)
                                })), r.push(o)
                            })), l = Object(n.a)(new Set(l));
                            for (var i = 0; i < l.length; i++) {
                                for (var c = {}, d = 0; d < r.length; d++) c[d] = r[d][l[i]];
                                o.push(c)
                            }
                            o.forEach((function(t, e) {
                                t["00"] = l[e]
                            })), this.targetArr = o, this.clumnArr = e
                        },
                        changeDiff: function(t) {
                            this.different = t, this.getChangeData()
                        },
                        transData: function() {
                            var t = this.tableData;
                            if (this.different) {
                                for (var e = [], i = 0; i < t.compareList.length; i++) t.compareList[i].different && e.push({
                                    label: t.compareList[i].name,
                                    prop: "prop" + i
                                });
                                this.column = [{
                                    label: "heads",
                                    prop: "heads"
                                }].concat(e);
                                var o = [];
                                for (i = 0; i < t.productList.length; i++) {
                                    var r = {};
                                    r.heads = t.productList[i];
                                    for (var l = 0; l < t.compareList.length; l++) t.compareList[l].different && (r["prop".concat(l)] = t.compareList[l].valueList[i]);
                                    o.push(r)
                                }
                                this.contrast = o
                            } else {
                                var c = t.compareList.map((function(t, e) {
                                    return {
                                        label: t.name,
                                        prop: "prop" + e
                                    }
                                }));
                                this.column = [{
                                    label: "heads",
                                    prop: "heads"
                                }].concat(Object(n.a)(c));
                                var d = [];
                                for (i = 0; i < t.productList.length; i++) {
                                    var f = {};
                                    f.heads = t.productList[i];
                                    for (l = 0; l < t.compareList.length; l++) f["prop".concat(l)] = t.compareList[l].valueList[i];
                                    d.push(f)
                                }
                                this.contrast = d
                            }
                        },
                        buytips: function() {
                            this.$message.error("Sorry, the product is not available online for now.")
                        }
                    }
                },
                c = (o(345), o(347), o(7)),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "content"
                    }, [e("el-table", {
                        class: "".concat(t.isMea && "meatable"),
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.targetArr,
                            "show-header": !1,
                            stripe: "",
                            border: "",
                            height: "".concat("pc" == t.$store.state.equipment ? "70vh" : "calc(100vh - 160px)")
                        }
                    }, ["pc" == t.$store.state.equipment ? e("el-table-column", {
                        attrs: {
                            prop: "00",
                            align: "center",
                            fixed: "",
                            width: "220"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(o) {
                                return ["heads" === o.row["00"] ? e("div", [e("el-checkbox", {
                                    on: {
                                        change: t.getChangeData
                                    },
                                    model: {
                                        value: t.different,
                                        callback: function(e) {
                                            t.different = e
                                        },
                                        expression: "different"
                                    }
                                }, [t._v(t._s(t.$t("currency.diff")))])], 1) : t._e(), t._v(" "), "heads" != o.row["00"] ? e("div", {
                                    staticStyle: {
                                        "font-weight": "bold"
                                    }
                                }, [t._v("\n          " + t._s(o.row[o.column.property]) + "\n        ")]) : t._e()]
                            }
                        }], null, !1, 444124176)
                    }) : t._e(), t._v(" "), t._l(t.clumnArr, (function(o) {
                        return e("el-table-column", {
                            key: o,
                            attrs: {
                                prop: String(o),
                                align: "center",
                                width: "pc" == t.$store.state.equipment ? 350 : 176
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(o) {
                                    return ["heads" === o.row["00"] ? e("div", {
                                        staticClass: "head-box"
                                    }, [e("el-image", {
                                        class: "".concat("pc" == t.$store.state.equipment ? "pic" : "phonepic"),
                                        attrs: {
                                            src: o.row[o.column.property].imageUrl,
                                            alt: "",
                                            fit: "cover"
                                        }
                                    }), t._v(" "), e("p", {
                                        staticStyle: {
                                            "font-weight": "bold",
                                            "word-break": "normal",
                                            "overflow-wrap": "break-word"
                                        },
                                        domProps: {
                                            innerHTML: t._s(o.row[o.column.property].name)
                                        }
                                    }), t._v(" "), "pc" == t.$store.state.equipment ? e("div", {
                                        staticClass: "fun"
                                    }, [e("a", {
                                        staticStyle: {
                                            color: "#DA291C"
                                        },
                                        attrs: {
                                            href: o.row[o.column.property].productCode == t.diamondCode ? "./special/" : "./products/".concat(o.row[o.column.property].productCode, "/")
                                        }
                                    }, [t._v(t._s(t.$t("currency.LearnMore"))), e("span", {
                                        staticClass: "el-icon-circle-plus",
                                        staticStyle: {
                                            "margin-left": "9px",
                                            "font-size": "16px"
                                        }
                                    })])]) : t._e(), t._v(" "), "pc" != t.$store.state.equipment ? e("div", {
                                        staticClass: "funphone"
                                    }, [e("a", {
                                        attrs: {
                                            href: o.row[o.column.property].productCode == t.diamondCode ? "./special/" : "./products/".concat(o.row[o.column.property].productCode, "/")
                                        }
                                    }, [e("div", {
                                        staticClass: "learnmorebtn"
                                    }, [t._v("\n                " + t._s(t.$t("currency.LearnMore")) + "\n              ")])])]) : t._e()], 1) : e("span", {
                                        staticStyle: {
                                            color: "#000"
                                        },
                                        domProps: {
                                            innerHTML: t._s(o.row[o.column.property])
                                        }
                                    })]
                                }
                            }], null, !0)
                        })
                    }))], 2)], 1)
                }), [], !1, null, "524d03ac", null);
            e.default = component.exports
        },
        274: function(t, e, o) {
            "use strict";
            o.r(e);
            o(12);
            var n = o(113).a,
                r = (o(336), o(7)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("header", [e("div", {
                        staticClass: "headerWpper head"
                    }, [e("div", {
                        staticClass: "menu"
                    }, [e("h1", {
                        staticClass: "logo",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.pageBurial("logo")
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://www-oss.lexar.com/logo.svg",
                            alt: "lexar"
                        }
                    }), t._v(" "), e("nuxt-link", {
                        staticClass: "logo",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v(t._s(t.$t("head.logo")))])], 1), t._v(" "), e("div", {
                        staticClass: "right-bar"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/search/"
                        }
                    }, [e("div", {
                        class: "el-icon-search ".concat(t.isMea && "measearch"),
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.pageBurial("search")
                            }
                        }
                    })]), t._v(" "), t._m(0)], 1)]), t._v(" "), e("div", {
                        staticClass: "menubox",
                        style: {
                            paddingTop: t.showAd ? "calc(calc(40 / 375 * 100vw) + 60px)" : "60px"
                        }
                    }, [e("div", {
                        staticClass: "flexbox"
                    }, [e("ul", {
                        staticClass: "mList"
                    }, t._l(t.menuData, (function(o, n) {
                        return e("li", {
                            key: n
                        }, [2 == o.navType ? e("div", [e("div", {
                            staticClass: "item",
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.pageBurial(o.navName)
                                }
                            }
                        }, [e("a", {
                            staticClass: "link",
                            attrs: {
                                href: o.navLinkUrl
                            }
                        }, [t._v(t._s(o.navName))]), "ko_KR" != t.$i18n.locale && "pl_PL" != t.$i18n.locale ? e("a", {
                            class: "icon ".concat(t.isMea && "meaicon"),
                            attrs: {
                                href: "javascript:void(0)"
                            }
                        }) : t._e()]), t._v(" "), "ko_KR" != t.$i18n.locale && "pl_PL" != t.$i18n.locale ? e("ul", {
                            staticClass: "alist proList"
                        }, t._l(t.lodProds, (function(o, n) {
                            return e("li", {
                                key: n
                            }, [e("a", {
                                staticClass: "item",
                                attrs: {
                                    href: "javascript:void(0)"
                                }
                            }, [e("img", {
                                staticClass: "pic",
                                attrs: {
                                    src: t.getImageSrc(o.prodImgUrl),
                                    alt: ""
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.typeProdHref(n, o.titleName)
                                    }
                                }
                            }), t._v(" "), e("div", {
                                staticClass: "text",
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.typeProdHref(n, o.titleName)
                                    }
                                }
                            }, [t._v(t._s(o.titleName))])]), t._v(" "), e("ul", {
                                staticClass: "clist"
                            }, [t._l(o.types, (function(n, r) {
                                return e("li", {
                                    key: r
                                }, [0 == r ? e("div", {
                                    staticStyle: {
                                        width: "100%",
                                        height: "10px",
                                        background: "#fff"
                                    }
                                }) : t._e(), t._v(" "), e("a", {
                                    staticStyle: {
                                        "font-weight": "normal"
                                    },
                                    attrs: {
                                        href: "javascript:void(0)"
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.linkProd(o.categoryCode, n.code, n.title)
                                        }
                                    }
                                }, [t._v(t._s(n.title))])])
                            })), t._v(" "), e("li", [e("a", {
                                staticStyle: {
                                    "font-weight": "bold"
                                },
                                attrs: {
                                    href: "javascript:void(0)"
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.typeProdHref(n, o.allTitle)
                                    }
                                }
                            }, [t._v(t._s(o.allTitle))])])], 2)])
                        })), 0) : t._e()]) : t._e(), t._v(" "), 2 != o.navType ? e("div", [e("div", {
                            staticClass: "item",
                            class: 0 == o.itemList.length ? "noChild" : "",
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.pageBurial(o.navName)
                                }
                            }
                        }, [e("a", {
                            staticClass: "link",
                            attrs: {
                                href: o.navLinkUrl
                            }
                        }, [t._v(t._s(o.navName))]), e("a", {
                            class: "icon ".concat(t.isMea && "meaicon"),
                            attrs: {
                                href: "javascript:void(0)"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "alist"
                        }, t._l(o.itemList, (function(o, n) {
                            return e("a", {
                                key: n,
                                attrs: {
                                    href: o.linkUrl
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.pageBurial(o.title)
                                    }
                                }
                            }, [t._v(t._s(o.title) + " ")])
                        })), 0)]) : t._e()])
                    })), 0), t._v(" "), e("div", {
                        staticClass: "bottoming"
                    }, [e("div", {
                        staticClass: "btns btn-language",
                        on: {
                            click: t.openlang
                        }
                    }, [t._v(t._s(t.$t("head.Language")))])])])]), t._v(" "), t.local ? e("div", {
                        staticClass: "langbox"
                    }, [e("ul", {
                        staticClass: "mList"
                    }, t._l(t.langList, (function(o, n) {
                        return e("li", {
                            key: n,
                            staticClass: "item",
                            class: o.language == t.$i18n.locale ? "cur" : ""
                        }, [e("a", {
                            staticClass: "location",
                            attrs: {
                                href: o.url
                            }
                        }, [t._v(t._s(o.name))])])
                    })), 0)]) : t._e()])])
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "menuIcon"
                    }, [e("div", {
                        staticClass: "btn-nav"
                    }, [e("span", {
                        staticClass: "icon-bar top"
                    }), t._v(" "), e("span", {
                        staticClass: "icon-bar middle"
                    }), t._v(" "), e("span", {
                        staticClass: "icon-bar bottom"
                    })])])
                }], !1, null, "21046ebd", null);
            e.default = component.exports;
            installComponents(component, {
                Header: o(78).default
            })
        },
        275: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = [function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://www.instagram.com/lexarmemory/"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(206),
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://twitter.com/lexarmemory"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(207),
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://www.facebook.com/lexarmemory"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(208),
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://www.youtube.com/c/LexarMemoryOfficial"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(209),
                            alt: ""
                        }
                    })])
                }],
                r = o(114).a,
                l = (o(338), o(7)),
                component = Object(l.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        class: "footerWapper ".concat(t.blackTheme && "blackwapper")
                    }, [e("div", {
                        staticClass: "fast-warp"
                    }, [e("ul", {
                        staticClass: "fast-menu"
                    }, [e("li", [e("h4", {
                        staticClass: "h4 cut",
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        }
                    }, [t._v(t._s(t.$t("foot.company")))]), t._v(" "), e("div", {
                        staticClass: "list"
                    }, [e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/about/"
                        }
                    }, [t._v(t._s(t.$t("foot.about")))]), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/quality/"
                        }
                    }, [t._v(t._s(t.$t("foot.lab")))]), t._v(" "), "en_WW" == t.$i18n.locale ? e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/news/"
                        }
                    }, [t._v(t._s(t.$t("foot.news")))]) : t._e(), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/contact/"
                        }
                    }, [t._v(t._s(t.$t("foot.contact")))]), t._v(" "), "zh_CN" == t.$i18n.locale ? e("a", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            href: "https://careers.lexar.com/index",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("foot.job1")))]) : t._e(), t._v(" "), "zh_CN" == t.$i18n.locale ? e("a", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            href: "https://xxx0an5xw1s.jobs.feishu.cn/560033",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("foot.job2")))]) : t._e()], 1)]), t._v(" "), e("li", [e("h4", {
                        staticClass: "h4 cut",
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        }
                    }, [t._v(t._s(t.$t("foot.legal")))]), t._v(" "), e("div", {
                        staticClass: "list"
                    }, [e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/terms-of-use/"
                        }
                    }, [t._v(t._s(t.$t("foot.terms")))]), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/legal/cookies/"
                        }
                    }, [t._v(t._s(t.$t("foot.cookie")))]), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/warranty/?tab=1"
                        }
                    }, [t._v(t._s(t.$t("foot.warranty")))]), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/legal/policy/"
                        }
                    }, [t._v(t._s(t.$t("foot.policy")))])], 1)])])]), t._v(" "), e("div", {
                        staticClass: "social-warp"
                    }, [e("div", {
                        staticClass: "social-box"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), "zh_CN" == t.$i18n.locale ? e("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://mp.weixin.qq.com/s/SFhHHfEsRWPQZbTsJkXFwA"
                        }
                    }, [e("img", {
                        attrs: {
                            src: o(205),
                            alt: ""
                        }
                    })]) : t._e()]), t._v(" "), e("div", {
                        staticClass: "copyright",
                        style: {
                            color: t.blackTheme ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
                        }
                    }, [t._v("\n      Copyright ©2025 Lexar.com. All Rights Reserved."), e("a", {
                        style: {
                            color: t.blackTheme ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            href: "https://beian.miit.gov.cn/",
                            target: "_blank"
                        }
                    }, [t._v("粤ICP备19008430号-1")])])])])
                }), n, !1, null, "70c5b03e", null);
            e.default = component.exports;
            installComponents(component, {
                Footer: o(90).default
            })
        },
        278: function(t, e, o) {
            t.exports = o.p + "img/icon-right-red.30f943d.png"
        },
        281: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJWSURBVGiB1Zoxa9tAFMd/uQi6FHfLEqLBHjJmSGaTfoiAA1k1aAt0jjfTT+DJHyCGTv0GwVsh8R5CwFK2gl0HMmQ4ow531zhGqu3LyfL94IFB9r3/k853997TDm5oACfAKXAIHAB7wGd9/QX4DTwB98ANcAs8OvJvxT5wCfwCJJCtaVL/9lKPtTHqQBeYWogusqkes16m8BrQBiYOhS/aBLjSvpxyBAxLFL5oQ+3TCRfAeIPijY217w/xDXitQLyxV63BWrzN6uLapE0QF1R75/OexMrT6Yhq5vwyG7PCH7vGZlebdW3IkiX2agtELrN2kfg65W5SrmxCwY7d3QJxq1p3Ufw+bs82WRRFWZIkWZIkWRRFrgOYas0IHcAZ8CXvsdgSBAFhGBKGIUEQuBwalNYzeAvg3LWHDXAOKoAGcFytFiuOgYZAZVK7FYuxYRc4Eag00FdOBSqH9ZVDgUrAfeUgQFUP1iaKov8uj81mM/dzHlJKer2ejYw9gBkWm8loNMpckSSJ7YY2M/uAtwSootPaVYBOp7N0CrVaLQD6/T6DwaDwu1LKdd0bXgAeKOHAFcfxvykSx3FZh7oHgSr3+cqTQNUqfeVeoAqtvnIjUFXiWdVKLJgBtwJV4r6rWIwNd8Cj2Qeuq1RiyTW8JTQ/gGeXo0spSdOUNE0/ss4X8YzS/A6vk3rwtKwyn4n9AT4BX/Oi2yK+Az+LLnpfWgTPi7sGr8vrBq8bHPNBeNtiMnjd5DN43WY11FANkLIb3W1KaHTP4+2rBotsxcseO9by31PZ6zZ/AYgmS2q9hgUgAAAAAElFTkSuQmCC"
        },
        282: function(t, e, o) {
            t.exports = o.p + "img/about-tag.e8a9ef5.png"
        },
        306: function(t, e, o) {
            "use strict";
            o(199)
        },
        307: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".notfoundbase[data-v-86919660]{align-items:center;color:#000;display:flex;flex-direction:column;font-family:Avenir;height:calc(100vh - 465px);justify-content:center}.notfoundbase .title[data-v-86919660]{font-size:64px;font-weight:800}.notfoundbase .desc[data-v-86919660]{color:#3d3d3d;font-size:20px;font-weight:900;margin-top:14px}.notfoundbase .homebtn[data-v-86919660]{align-items:center;background:#000;border-radius:20px;color:#fff;cursor:pointer;display:flex;font-size:18px;font-weight:900;height:40px;justify-content:center;margin-top:74px;padding:0 30px}@media only screen and (max-width:768px){.notfoundbase[data-v-86919660]{height:calc(100vh - 44vw)}.notfoundbase .title[data-v-86919660]{font-size:9.6vw}.notfoundbase .desc[data-v-86919660]{font-size:4.2666666667vw;margin-top:8.5333333333vw}.notfoundbase .homebtn[data-v-86919660]{border-radius:4vw;font-size:3.7333333333vw;height:8vw;margin-top:10.1333333333vw;padding:0 4.5333333333vw}}@media only screen and (min-width:769px){.notfoundbase[data-v-86919660]{height:calc(100vh - 24.21875vw)}.notfoundbase .title[data-v-86919660]{font-size:3.3333333333vw}.notfoundbase .desc[data-v-86919660]{font-size:1.0416666667vw;margin-top:.7291666667vw}.notfoundbase .homebtn[data-v-86919660]{border-radius:1.0416666667vw;font-size:.9375vw;height:2.0833333333vw;margin-top:3.8541666667vw;padding:0 1.5625vw}}", ""]), n.locals = {}, t.exports = n
        },
        315: function(t, e, o) {
            var content = o(316);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("eb477b24", content, !0, {
                sourceMap: !1
            })
        },
        316: function(t, e, o) {
            var n = o(20),
                r = o(96),
                l = o(317),
                c = o(318),
                d = o(319),
                f = o(320),
                h = o(321),
                m = n((function(i) {
                    return i[1]
                })),
                v = r(l),
                x = r(c),
                w = r(d),
                y = r(f),
                _ = r(h);
            m.push([t.i, '@font-face{font-family:"iconfont";src:url(' + v + ') format("woff2"),url(' + x + ') format("woff"),url(' + w + ') format("truetype")}.iconfont{font-family:"iconfont"!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-fangxiang:before{content:"\\e641"}.icon-bangzhuzhongxin:before{content:"\\e610"}.icon-iconfontzhizuobiaozhun023109:before{content:"\\e66f"}.icon-zhengcezhipei:before{content:"\\e736"}.icon-shoufeipeizhi:before{content:"\\e7ab"}.icon-gongcheng-2:before{content:"\\e754"}.icon-xinlangweibo:before{content:"\\e601"}.icon-apps:before{content:"\\e729"}.icon-fasong:before{content:"\\e7a1"}.icon-biji:before{content:"\\e60d"}.icon-bangzhu:before{content:"\\e63b"}.icon-shouye:before{content:"\\e643"}.icon-dianhua:before{content:"\\e624"}.icon-dizhi:before{content:"\\e62e"}.icon-zhibao:before{content:"\\e629"}.icon-yingyeting:before{content:"\\e725"}.icon-youjiantou:before{content:"\\e625"}.icon-zhinan:before{content:"\\e8d0"}.icon-anzhuangjieduan:before{content:"\\e64b"}.icon-mingxiaomingshi:before{content:"\\e640"}.icon-jinduchaxun:before{content:"\\e626"}.icon-xiajiantou:before{content:"\\eb6d"}.icon-dizhi1:before{content:"\\e78e"}.icon-contract-negoti:before{content:"\\e62a"}.icon-caidan:before{content:"\\eaf1"}.icon-cuowu:before{content:"\\e603"}.icon-kefu:before{content:"\\e62b"}.icon-wenjianshu:before{content:"\\e622"}.icon-xinxi:before{content:"\\e616"}.icon-quanbuguanli:before{content:"\\e621"}.icon-jiahao:before{content:"\\e602"}.icon-qian:before{content:"\\e719"}.icon-gouwuche:before{content:"\\e613"}.icon-gaolou:before{content:"\\e604"}.icon-yanjing:before{content:"\\e6cc"}.icon-jianhao:before{content:"\\e605"}.icon-_dailijiameng:before{content:"\\e609"}.icon-shaixuan:before{content:"\\e714"}.icon-wodetuandui:before{content:"\\e6a0"}.icon-xiazai:before{content:"\\e60e"}.icon-dianpu:before{content:"\\e7a4"}.icon-lianjie:before{content:"\\e682"}.icon-bofang:before{content:"\\e62c"}.icon-sousuo:before{content:"\\e62d"}.icon-wangshangpeixun:before{content:"\\e607"}.icon-zhengce:before{content:"\\e6d1"}.icon-anzhuang:before{content:"\\e642"}.icon-ditu:before{content:"\\e6fd"}.icon-dizhi2:before{content:"\\e814"}.icon-dianhua1:before{content:"\\e875"}.icon-dianzan:before{content:"\\e608"}.icon-shixijiuye:before{content:"\\e7a2"}.icon-yingyeshijian:before{content:"\\e9d3"}.icon-duigou:before{content:"\\e60b"}.icon-youjiantou1:before{content:"\\e623"}.icon-jingxiaoshangmendian:before{content:"\\e639"}.icon-zhuanhuan:before{content:"\\e6fe"}.icon-wenzhang:before{content:"\\ed21"}.icon-yulan-chakan-03:before{content:"\\e864"}.icon-jisusongda:before{content:"\\e60a"}.icon-a-15tianwuliyou:before{content:"\\e60c"}.icon-wangdianguanli:before{content:"\\e60f"}.icon-weixin:before{content:"\\e600"}.icon-gongcheng-:before{content:"\\e73c"}.icon-gongcheng-1:before{content:"\\e742"}@font-face{font-family:"Avenir";font-weight:400;src:url(' + y + ') format("truetype")}@font-face{font-family:"HarmonyOS Sans SC";font-style:normal;font-weight:400;src:url(' + _ + ') format("truetype")}', ""]), m.locals = {}, t.exports = m
        },
        317: function(t, e, o) {
            t.exports = o.p + "fonts/iconfont.e3a775f.woff2"
        },
        318: function(t, e, o) {
            t.exports = o.p + "fonts/iconfont.d0f5376.woff"
        },
        319: function(t, e, o) {
            t.exports = o.p + "fonts/iconfont.0d1919a.ttf"
        },
        320: function(t, e, o) {
            t.exports = o.p + "fonts/Avenir_A.4611875.ttf"
        },
        321: function(t, e, o) {
            t.exports = o.p + "fonts/HarmonyOS_Sans_SC_Regular.69aa5b1.ttf"
        },
        322: function(t, e, o) {
            t.exports = o.p + "img/icon-side-3.a7454fd.svg"
        },
        323: function(t, e, o) {
            "use strict";
            o(204)
        },
        324: function(t, e, o) {
            var n = o(20),
                r = o(96),
                l = o(203),
                c = o(202),
                d = n((function(i) {
                    return i[1]
                })),
                f = r(l),
                h = r(c);
            d.push([t.i, ".language-container[data-v-968633ae]{padding-top:22px;position:absolute;right:0;top:50px;width:200px}.language-container .page_content[data-v-968633ae]{background:#fff;border-radius:4px;padding:10px;position:relative;z-index:3000}.language-container .page_content .area-cont[data-v-968633ae]{margin:0 auto}.language-container .page_content .area-cont .item[data-v-968633ae]{color:rgba(0,0,0,.5);cursor:pointer;display:block;font-size:14px;font-weight:500;margin:0;padding:0;text-align:left;text-align:center;width:100%}.language-container .page_content .area-cont .item.cur[data-v-968633ae]{color:#da291c}.language-container .page_content .area-cont .country_list li[data-v-968633ae]{margin-bottom:20px}.language-container .page_content .area-cont .country_list li .item[data-v-968633ae]{background:url(" + f + ") no-repeat left 3px;background-size:18px auto;display:block;padding-left:25px}.language-container .page_content .area-cont .country_list li .item h4[data-v-968633ae]{color:#27251f;font-size:16px;font-weight:600}.language-container .page_content .area-cont .country_list li .item p[data-v-968633ae]{color:#666;font-size:16px}.language-container .page_content .area-cont .country_list li .item[data-v-968633ae]:hover{background-image:url(" + h + ")}.language-container .page_content .area-cont .country_list li .item:hover h4[data-v-968633ae],.language-container .page_content .area-cont .country_list li .item:hover p[data-v-968633ae]{color:#da291c}.mealanguage[data-v-968633ae]{left:0;right:auto}.contentMin[data-v-968633ae]{margin:0 auto;max-width:1600px}.headerWpper[data-v-968633ae]{background:#fff;left:0;position:sticky;top:0;width:100%;z-index:100}.headerWpper h1.logo[data-v-968633ae]{background-image:url(https://www-oss.lexar.com/logo.svg);background-position:50%;background-repeat:no-repeat;background-size:contain;float:left;height:54px;margin-left:20px;position:relative;width:120px;z-index:1000}.headerWpper h1.logo a[data-v-968633ae]{display:block;height:100%;overflow:hidden;text-indent:-100em;width:100%}.arae_logo[data-v-968633ae]{margin-left:0;margin-right:20px}@keyframes s_an-968633ae{0%{opacity:0;transform:translate(100px)}to{opacity:1;transform:translate(0)}}.head[data-v-968633ae]{height:70px}.head .menu[data-v-968633ae]{display:flex;padding:5px 0;position:relative;width:100%}.head .menu h1 img[data-v-968633ae]{display:none;width:100%}.head .menuList[data-v-968633ae]{display:flex;justify-content:center;left:0;position:absolute;width:100%}.head .menuList li[data-v-968633ae]{margin:0 10px;padding:0 10px;position:relative}.head .menuList li a[data-v-968633ae]{color:#000;display:block;font-size:14px;font-weight:600;line-height:32px;padding:14px 5px;transition:color .15s ease-in-out}.head .menuList li a[data-v-968633ae]:hover{color:#da291c}.head .menuList li.hover[data-v-968633ae]{display:block}.head .menuList li .active[data-v-968633ae]{color:#da291c}.head .menuList li .toggle-list[data-v-968633ae]{background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.2);list-style:none;padding:28px 0;position:absolute;top:100%;width:330px;z-index:99}.head .menuList li .toggle-list a[data-v-968633ae]{font-size:12px;letter-spacing:.2em;padding:10px 40px}.head .side[data-v-968633ae]{float:right;margin-left:10px;position:absolute;right:10px;z-index:100}.head .side li[data-v-968633ae]{align-items:center;box-sizing:content-box;display:flex;float:left;height:40px;margin:0 2.5px;padding:10px 0}.head .side li a[data-v-968633ae]{border:1px solid hsla(0,0%,100%,.1);border-radius:5px;color:hsla(0,0%,100%,.5);cursor:pointer;float:left;line-height:33px;padding:2px 15px;text-align:center}.head .side li a img[data-v-968633ae]{display:block}.head .measide[data-v-968633ae]{float:left;left:10px;margin-right:10px;right:auto}.head .measide li[data-v-968633ae],.head .measide li a[data-v-968633ae]{float:right}.pro-leave[data-v-968633ae]{background-color:#f0f0f0;display:flex;justify-content:center;left:0;padding:50px 0;position:absolute;top:100%}.pro-leave .prodbase[data-v-968633ae]{display:flex;font-family:HarmonyOS Sans SC;margin:0 auto}.pro-leave .prodbase .leftprod[data-v-968633ae]{background-color:#fff;border-radius:9px;height:410px;margin-left:0;margin-right:18px;width:376px}.pro-leave .prodbase .meaprod[data-v-968633ae]{margin-left:18px;margin-right:0}.pro-leave .prodbase .ptitle[data-v-968633ae]{color:#000;cursor:pointer;font-size:20px;font-weight:400;margin:29px auto 0 29px}.pro-leave .prodbase .meatitle[data-v-968633ae]{margin:29px 29px 0 auto}.pro-leave .prodbase .leftimg[data-v-968633ae]{height:156px;margin:36px auto 0 28px;width:calc(100% - 56px)}.pro-leave .prodbase .mealftimg[data-v-968633ae]{margin:36px 28px 0 auto}.pro-leave .prodbase .leftTypebase[data-v-968633ae]{margin:30px auto 0 28px}.pro-leave .prodbase .meatbase[data-v-968633ae]{margin:30px 28px 0 auto}.pro-leave .prodbase .typestyle[data-v-968633ae]{color:#000;font-size:14px;height:16px;margin-bottom:11px}.pro-leave .prodbase .alltype[data-v-968633ae]{color:#000;font-size:14px;font-weight:700;margin-left:29px;margin-right:0}.pro-leave .prodbase .meaaltype[data-v-968633ae]{margin-left:0;margin-right:29px}.pro-leave .prodbase .rightbase[data-v-968633ae]{align-content:space-between;display:flex;flex-wrap:wrap;justify-content:space-between}.pro-leave .prodbase .rightbase .rightprod[data-v-968633ae]{background-color:#fff;border-radius:9px;height:196px}.pro-leave .prodbase .rightbase .rightprod .prodright[data-v-968633ae]{align-items:center;display:flex;padding:0 28px}.pro-leave .prodbase .rightbase .rightprod .basetypes[data-v-968633ae]{margin-left:42px;margin-right:0}.pro-leave .prodbase .rightbase .rightprod .meabtype[data-v-968633ae]{margin-left:0;margin-right:42px}.pro-leave .prodbase .rightbase .rightprod .rightimg[data-v-968633ae]{height:121px;margin:5 auto 0 28px;width:140px}.pro-leave .prodbase .rightbase .rightprod .meaRimg[data-v-968633ae]{margin:5 28px 0 auto}.pro-leave .prodbase .c-p[data-v-968633ae]{cursor:pointer}@media only screen and (min-width:768px)and (max-width:1440px){.language-container .page_content .back-box[data-v-968633ae]{color:#da291c;cursor:pointer;display:inline-block;font-size:16px;font-weight:600;line-height:30px}.language-container .page_content .back-box i[data-v-968633ae]{font-size:20px;font-weight:700;margin-right:5px;vertical-align:text-top}.language-container .page_content .location-h2[data-v-968633ae]{font-size:18px;font-weight:600;margin:10px 0;padding-bottom:20px}.language-container .page_content .area-cont[data-v-968633ae]{margin:0 auto}.language-container .page_content .area-cont .title[data-v-968633ae]{font-size:18px;font-weight:600;margin-bottom:25px}.language-container .page_content .area-cont .country_list li[data-v-968633ae]{margin-bottom:20px}.language-container .page_content .area-cont .country_list li .item[data-v-968633ae]{background:url(" + f + ") no-repeat left 3px;background-size:18px auto;display:block;padding-left:25px}.language-container .page_content .area-cont .country_list li .item h4[data-v-968633ae]{color:#27251f;font-size:16px;font-weight:600}.language-container .page_content .area-cont .country_list li .item p[data-v-968633ae]{color:#666;font-size:16px}.language-container .page_content .area-cont .country_list li .item[data-v-968633ae]:hover{background-image:url(" + h + ")}.language-container .page_content .area-cont .country_list li .item:hover h4[data-v-968633ae],.language-container .page_content .area-cont .country_list li .item:hover p[data-v-968633ae]{color:#da291c}.contrast-table[data-v-968633ae]{height:100%;left:0;top:0;width:100%}.contrast-table .contrast-box[data-v-968633ae]{background:#fff;border-radius:15px;left:50%;max-height:90vh;padding:30px;position:fixed;top:50%;transform:translate(-50%,-50%);width:1320px}.contrast-table .contrast-box .top-box[data-v-968633ae]{position:relative}.contrast-table .contrast-box .top-box h2[data-v-968633ae]{color:#000;font-size:24px;font-weight:700}.contrast-table .contrast-box .top-box p[data-v-968633ae]{color:#000;font-size:14px}.contrast-table .contrast-box .top-box .close[data-v-968633ae]{position:absolute;right:0;top:0}.contrast-table .contrast-box[data-v-968633ae] .el-table--enable-row-transition .el-table__body td.el-table__cell{min-width:350px}.contrast-warp[data-v-968633ae]{background:#fff;bottom:0;left:0;padding:60px 0;position:fixed;width:100%}.contrast-warp .contrast-list[data-v-968633ae]{margin:0 auto;width:1440px}.contrast-warp .contrast-list li[data-v-968633ae]{align-items:center;border-bottom:1px solid #ebebeb;box-sizing:content-box;display:flex;float:left;justify-content:center;margin-right:30px;padding:15px;position:relative;width:293px}.contrast-warp .contrast-list li .pic[data-v-968633ae]{flex-basis:50px;height:60px;margin-right:20px;min-width:50px;width:50px}.contrast-warp .contrast-list li .desc[data-v-968633ae]{color:#000;font-size:14px;padding-right:40px}.contrast-warp .contrast-list li .desc .el-icon-error[data-v-968633ae]{color:red;font-size:30px;position:absolute;right:15px;top:50%;transform:translateY(-50%)}.contrast-warp .fun-box[data-v-968633ae]{float:left}.contrast-warp .fun-box .compare[data-v-968633ae]{background:#000}.contrast-warp .fun-box .clear[data-v-968633ae],.contrast-warp .fun-box .compare[data-v-968633ae]{align-items:center;border-radius:9px;color:#fff;cursor:pointer;display:flex;font-size:12px;height:36px;justify-content:center;margin:5px;width:120px}.contrast-warp .fun-box .clear[data-v-968633ae]{background:#da291c}.contentMin[data-v-968633ae]{margin:0 auto;max-width:1600px}.headerWpper[data-v-968633ae]{background:#fff;left:0;position:sticky;top:0;width:100%;z-index:100}.headerWpper h1.logo[data-v-968633ae]{position:relative;width:8.3vw}.head[data-v-968633ae]{height:70px}.head .menu[data-v-968633ae]{padding:5px 0;position:relative;width:100%}.head .menu h1 img[data-v-968633ae]{display:none;width:100%}.head .menuList li[data-v-968633ae]{float:left;padding:0 1.388vw;position:relative}.head .menuList li a[data-v-968633ae]{color:#000;display:block;font-size:.9722vw;font-weight:600;line-height:32px;padding:14px 5px;transition:color .15s ease-in-out}.head .menuList li a[data-v-968633ae]:hover{color:#da291c}.head .menuList li.hover[data-v-968633ae]{display:block}.head .menuList li .active[data-v-968633ae]{color:#da291c}.head .menuList li .toggle-list[data-v-968633ae]{background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.2);list-style:none;padding:1.94vw 0;position:absolute;top:100%;width:22.91vw;z-index:99}.head .menuList li .toggle-list a[data-v-968633ae]{font-size:.8333vw;letter-spacing:.2em;padding:.69vw 2.77vw}.head .side[data-v-968633ae]{float:right;margin-right:10px}.head .side li[data-v-968633ae]{align-items:center;display:flex;float:left;height:35px;margin:0 2.5px}.head .side li a[data-v-968633ae]{border:1px solid hsla(0,0%,100%,.1);border-radius:5px;color:hsla(0,0%,100%,.5);cursor:pointer;float:left;line-height:33px;min-width:42px;padding:2px 15px;text-align:center;width:3.125vw}.head .side li a img[data-v-968633ae]{display:block}}", ""]), d.locals = {}, t.exports = d
        },
        325: function(t, e, o) {
            t.exports = o.p + "img/icon-social-7.c2baeb6.svg"
        },
        326: function(t, e, o) {
            "use strict";
            o(210)
        },
        327: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".footerWapper[data-v-1ab3b588]{background:#f9f9f9;padding:60px 20px 20px;width:100%}.footerWapper .contentMin[data-v-1ab3b588]{margin:0 auto;max-width:1600px}.footerWapper .fast-warp[data-v-1ab3b588]{padding-bottom:50px}.footerWapper .fast-warp .logo[data-v-1ab3b588]{position:absolute;width:120px}.footerWapper .fast-warp .logo img[data-v-1ab3b588]{width:100%}.footerWapper .fast-warp .fast-menu[data-v-1ab3b588]{display:table;margin:0 auto}.footerWapper .fast-warp .fast-menu li[data-v-1ab3b588]{float:left;margin:0 80px}.footerWapper .fast-warp .fast-menu li .h4[data-v-1ab3b588]{color:#000;font-size:16px;padding:10px 0}.footerWapper .fast-warp .fast-menu li a[data-v-1ab3b588]{color:rgba(0,0,0,.5);display:block;font-size:14px;font-weight:400;line-height:30px;width:100%}.footerWapper .social-warp[data-v-1ab3b588]{align-items:center;display:flex;font-size:0;justify-content:space-between;overflow:hidden;position:relative}.footerWapper .social-warp .setLocal[data-v-1ab3b588]{align-items:center;color:#000;display:flex;float:left;font-size:16px;font-weight:500;justify-content:center;position:relative}.footerWapper .social-warp .setLocal .icon1[data-v-1ab3b588]{margin-right:10px;width:14px}.footerWapper .social-warp .setLocal .icon2[data-v-1ab3b588]{margin-left:8px;width:11px}.footerWapper .social-warp .setLocal .region[data-v-1ab3b588]{height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;width:100%}.footerWapper .social-warp .copyright[data-v-1ab3b588]{float:right;font-size:14px;font-weight:400;line-height:36px;margin-left:20px}.footerWapper .social-box[data-v-1ab3b588]{display:table;margin:0 auto}.footerWapper .social-box .item[data-v-1ab3b588]{display:inline-block;margin:0 15px}@media only screen and (min-width:768px)and (max-width:1440px){.footerWapper[data-v-1ab3b588]{padding:4.16vw 1.04vw 1.38vw}.footerWapper .fast-warp[data-v-1ab3b588]{padding-bottom:3.47vw}.footerWapper .fast-warp .logo[data-v-1ab3b588]{width:8.33vw}.footerWapper .fast-warp .fast-menu li[data-v-1ab3b588]{margin:0 5.55vw}.footerWapper .fast-warp .fast-menu li .h4[data-v-1ab3b588]{font-size:1.11vw;padding:.52vw 0}.footerWapper .fast-warp .fast-menu li a[data-v-1ab3b588]{font-size:.97222vw;line-height:2.08vw}.footerWapper .social-warp .social-box[data-v-1ab3b588]{left:0;position:relative;transform:none}.footerWapper .social-warp .social-box .item[data-v-1ab3b588]{margin:0 1.04vw}}.blackwapper[data-v-1ab3b588]{background:#000}", ""]), n.locals = {}, t.exports = n
        },
        328: function(t, e, o) {
            var map = {
                "./accessorieimg.webp": 329,
                "./memoryall.webp": 330,
                "./memorycn.webp": 331,
                "./movecard.webp": 332,
                "./ssdall.webp": 333,
                "./ssdcn.webp": 334,
                "./typecard.webp": 335
            };

            function n(t) {
                var e = r(t);
                return o(e)
            }

            function r(t) {
                if (!o.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            n.keys = function() {
                return Object.keys(map)
            }, n.resolve = r, t.exports = n, n.id = 328
        },
        329: function(t, e, o) {
            t.exports = o.p + "img/accessorieimg.171a605.webp"
        },
        330: function(t, e, o) {
            t.exports = o.p + "img/memoryall.54745fe.webp"
        },
        331: function(t, e, o) {
            t.exports = o.p + "img/memorycn.b746b4a.webp"
        },
        332: function(t, e, o) {
            t.exports = o.p + "img/movecard.dde6bb1.webp"
        },
        333: function(t, e, o) {
            t.exports = o.p + "img/ssdall.9879a45.webp"
        },
        334: function(t, e, o) {
            t.exports = o.p + "img/ssdcn.7196660.webp"
        },
        335: function(t, e, o) {
            t.exports = o.p + "img/typecard.2b084cf.webp"
        },
        336: function(t, e, o) {
            "use strict";
            o(211)
        },
        337: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, '@media screen and (max-width:768px){.headerWpper[data-v-21046ebd]{background:#fff;width:100%;z-index:100}.headerWpper h1.logo[data-v-21046ebd]{background-image:url(https://www-oss.lexar.com/logo.svg);background-position:50%;background-repeat:no-repeat;background-size:contain;float:left;height:25px;position:relative;width:87px;z-index:1000}.headerWpper h1.logo a[data-v-21046ebd]{display:block;height:100%;overflow:hidden;text-indent:-100em;width:100%}.headerWpper .right-bar[data-v-21046ebd]{align-items:center;display:flex}.headerWpper .right-bar .el-icon-search[data-v-21046ebd]{color:#000;font-size:16px;font-weight:700;margin-left:0;margin-right:20px}.headerWpper .right-bar .measearch[data-v-21046ebd]{margin-left:20px;margin-right:0}.headerWpper .menu[data-v-21046ebd]{align-items:center;background:#fff;border-bottom:1px solid rgba(0,0,0,.06);display:flex;justify-content:space-between;padding:15px;position:relative;width:100%;z-index:1000}.headerWpper .menu h1 img[data-v-21046ebd]{display:none;width:100%}.headerWpper .menuIcon[data-v-21046ebd]{cursor:pointer;display:block;float:right;position:relative;z-index:1000}.headerWpper .menuIcon .btn-nav[data-v-21046ebd]{background:0 0;border:none;cursor:pointer;transition:all .5s ease;z-index:99999}.headerWpper .menuIcon .btn-nav[data-v-21046ebd]:focus{outline:0}.headerWpper .menuIcon .btn-nav .icon-bar[data-v-21046ebd]{background-color:#000;display:block;height:2px;margin:0 0 4px;transition:all .5s ease;width:18px;z-index:999999}.headerWpper .menuIcon .btn-nav .icon-bar[data-v-21046ebd]:nth-child(3){margin:0}.headerWpper .menuIcon .btn-nav:hover .icon-bar[data-v-21046ebd]{transition:all .5s ease}.headerWpper .menuIcon.animated2[data-v-21046ebd]{display:block}.headerWpper .menuIcon.animated2 .top[data-v-21046ebd]{transform:translateY(6px) rotate(45deg)}.headerWpper .menuIcon.animated2 .bottom[data-v-21046ebd]{transform:translateY(-6px) rotate(-45deg)}.headerWpper .menuIcon.animated2 .middle[data-v-21046ebd]{width:0}.headerWpper .menuIcon.animated2 .icon-bar[data-v-21046ebd]{background-color:#000;z-index:999999}.headerWpper .menuIcon.animated2[data-v-21046ebd]:focus{cursor:pointer;z-index:9999}.menubox[data-v-21046ebd]{background:#fff;display:none;height:100%;left:0;margin:0;overflow-y:scroll;padding:60px 15px 30px;position:fixed;top:0;width:100%;z-index:999}.menubox .flexbox[data-v-21046ebd]{display:flex;flex-direction:column;justify-content:space-between;min-height:100%}.menubox .mList[data-v-21046ebd]{display:block;overflow:hidden}.menubox .mList li[data-v-21046ebd]{position:relative}.menubox .mList li a[data-v-21046ebd]{color:rgba(0,0,0,.8);display:block;font-size:14px;font-weight:600;line-height:56px;position:relative}.menubox .mList li .item[data-v-21046ebd]{display:flex;justify-content:space-between;width:100%}.menubox .mList li .item.search[data-v-21046ebd]:after{display:none}.menubox .mList li .item.search .iconfont[data-v-21046ebd]{margin-right:.18rem;vertical-align:bottom}.menubox .mList li .item .link[data-v-21046ebd]{width:80%}.menubox .mList li .item .icon[data-v-21046ebd]{min-width:50px}.menubox .mList li .item .icon[data-v-21046ebd]:after{content:"";font-family:element-icons!important;left:auto;position:absolute;right:0;top:0}.menubox .mList li .item .icon.cut[data-v-21046ebd]:after{content:""}.menubox .mList li .item .meaicon[data-v-21046ebd]:after{left:0;right:auto}.menubox .mList li .item.noChild .link[data-v-21046ebd]{width:100%}.menubox .alist[data-v-21046ebd],.menubox .mList li .item.noChild .icon[data-v-21046ebd]{display:none}.menubox .alist a[data-v-21046ebd]{text-indent:10px}.menubox .alist a[data-v-21046ebd]:after{display:none}.menubox .proList[data-v-21046ebd]{display:none;overflow:hidden}.menubox .proList li[data-v-21046ebd]{background:#fff;border:0;border-radius:.05rem;float:left;padding:10px 0;width:100%}.menubox .proList li .pic[data-v-21046ebd]{height:100%;margin-right:5px;width:40px}.menubox .proList li .text[data-v-21046ebd]{color:rgba(0,0,0,.8);font-size:14px;font-weight:600;line-height:14px}.menubox .proList li a.item[data-v-21046ebd]{align-items:center;border:0;display:flex;height:100%;justify-content:flex-start;padding:0 10px;position:relative;width:100%}.menubox .proList li a.item[data-v-21046ebd]:after{content:"";display:block;font-family:element-icons!important;line-height:40px;position:absolute;right:0;top:0}.menubox .proList li a.item.cut[data-v-21046ebd]:after{content:""}.menubox .proList li .clist[data-v-21046ebd]{background:#fafafa;display:none}.menubox .proList li .clist li[data-v-21046ebd]{padding-top:10px}.menubox .proList li .clist li a[data-v-21046ebd]{line-height:24px;margin-left:55px}.menubox .proList li .clist li a[data-v-21046ebd]:after{display:none}.menubox .proList li .clist li .swiper-list[data-v-21046ebd]{height:176px;margin:0 10px;overflow-x:scroll;white-space:nowrap}.menubox .proList li .clist li .swiper-list .item[data-v-21046ebd]{background:#ededed;border-radius:2px;box-sizing:border-box;display:inline-block;height:176px;margin-right:7px;padding:15px;vertical-align:top;width:150px}.menubox .proList li .clist li .swiper-list .item .itempic[data-v-21046ebd]{height:105px;width:100%}.menubox .proList li .clist li .swiper-list .item h2[data-v-21046ebd]{color:#000;display:-webkit-box;font-size:10px;font-weight:600;line-height:140%;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:normal;width:100%;-webkit-line-clamp:2;-webkit-box-orient:vertical}.langbox[data-v-21046ebd]{background:#fff;height:100%;left:0;margin:0;overflow-y:scroll;padding:60px 15px 30px;position:fixed;top:0;width:100%;z-index:999}.langbox .mList[data-v-21046ebd]{display:block;overflow:hidden}.langbox .mList li[data-v-21046ebd]{display:flex;justify-content:center;padding:10px 0;position:relative}.langbox .mList li.cur .location[data-v-21046ebd]{color:#da291c}.langbox .mList li .code[data-v-21046ebd],.langbox .mList li .location[data-v-21046ebd]{color:#000}.bottoming .btns[data-v-21046ebd]{align-items:center;border-radius:5px;display:flex;height:48px;justify-content:center;margin-bottom:15px;width:100%}.bottoming .btn-language[data-v-21046ebd]{background:#f7f7f7;color:#000;font-size:14px;font-weight:600}.bottoming .btn-login[data-v-21046ebd]{background:#262626;color:#fff;font-size:14px;font-weight:600}}', ""]), n.locals = {}, t.exports = n
        },
        338: function(t, e, o) {
            "use strict";
            o(212)
        },
        339: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, '.footerWapper[data-v-70c5b03e]{background:#f9f9f9;padding:50px 15px 0}.footerWapper .fast-warp[data-v-70c5b03e]{padding-bottom:80px}.footerWapper .fast-warp .fast-menu[data-v-70c5b03e]{width:100%}.footerWapper .fast-warp .fast-menu li[data-v-70c5b03e]{float:none;margin:0 0 .3rem}.footerWapper .fast-warp .fast-menu li h4[data-v-70c5b03e]{color:#000;font-size:14px;font-weight:600;line-height:140%;padding:.3rem 0;position:relative}.footerWapper .fast-warp .fast-menu li h4[data-v-70c5b03e]:after{content:"";font-family:element-icons!important;font-size:13px;line-height:31px;position:absolute;right:0;top:0}.footerWapper .fast-warp .fast-menu li h4.cut[data-v-70c5b03e]:after{content:""}.footerWapper .fast-warp .fast-menu li .list[data-v-70c5b03e]{display:block}.footerWapper .fast-warp .fast-menu li a[data-v-70c5b03e]{color:rgba(0,0,0,.5);display:block;font-size:13px;font-weight:400;line-height:38px;width:100%}.footerWapper .social-warp[data-v-70c5b03e]{display:flex;flex-direction:column;justify-content:center}.footerWapper .social-warp .setLocal[data-v-70c5b03e]{align-items:center;color:#000;display:flex;font-size:16px;font-weight:500;justify-content:center;margin:0 auto;position:relative}.footerWapper .social-warp .setLocal .icon1[data-v-70c5b03e]{margin-right:10px;width:14px}.footerWapper .social-warp .setLocal .icon2[data-v-70c5b03e]{margin-left:8px;width:11px}.footerWapper .social-warp .setLocal .region[data-v-70c5b03e]{height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;width:100%}.footerWapper .social-warp .copyright[data-v-70c5b03e]{color:rgba(0,0,0,.4);font-size:8px;padding:20px 0;position:relative;text-align:center;width:100%}.footerWapper .social-warp .social-box[data-v-70c5b03e]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;justify-content:space-between;padding:30px 15px;width:100%}.footerWapper .social-warp .social-box .item[data-v-70c5b03e]{display:inline-block;width:25px}.blackwapper[data-v-70c5b03e]{background:#000}', ""]), n.locals = {}, t.exports = n
        },
        341: function(t, e, o) {
            t.exports = o.p + "img/rightlogo.2894810.webp"
        },
        342: function(t, e, o) {
            "use strict";
            o(213)
        },
        343: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".center[data-v-30855e90]{align-items:center;display:flex;justify-content:center}.adbase[data-v-30855e90]{background:#000;height:40px;position:relative;width:100%;z-index:999}.adbase .ad-container[data-v-30855e90]{color:#fff;font-family:Avenir;font-size:14px;font-weight:900;height:100%;left:calc(50vw - 495px);line-height:16.38px;overflow:hidden;position:absolute;width:990px}.adbase .event-item[data-v-30855e90]{align-items:center;display:flex;height:100%;justify-content:center;left:0;opacity:0;position:absolute;top:100%;transition:top .5s ease-in-out,opacity .5s ease-in-out;width:100%}.adbase .event-item .desc[data-v-30855e90]{align-items:center;cursor:pointer;display:flex;height:100%;-webkit-line-clamp:2;overflow:hidden;text-align:center;text-overflow:ellipsis}.adbase .event-item.active[data-v-30855e90]{opacity:1;top:0;z-index:1}.adbase .event-item.prev[data-v-30855e90]{animation:rollUp-30855e90 .5s ease-in-out forwards;opacity:1;top:0;z-index:0}.adbase .adlogobase[data-v-30855e90]{cursor:pointer;display:block;height:32px;position:absolute;right:97px;top:4px;width:63px}.adbase .adlogobase img[data-v-30855e90]{opacity:.8;width:62.1px}.adbase .adlogobase:hover img[data-v-30855e90]{opacity:1}.adbase .closebtn[data-v-30855e90]{cursor:pointer;height:100%;position:absolute;right:0;width:40px}.adbase .closebtn span[data-v-30855e90]{color:#fff;font-family:Avenir;font-size:14px;font-weight:900;opacity:.8}.adbase .closebtn:hover span[data-v-30855e90]{opacity:1}@media screen and (max-width:768px){.adbase[data-v-30855e90]{height:10.6666666667vw}.adbase .ad-container[data-v-30855e90]{font-size:3.2vw;left:5.3333333333vw;line-height:3.7333333333vw;width:89.3333333333vw}.adbase .adlogobase[data-v-30855e90]{display:none}.adbase .closebtn[data-v-30855e90]{height:100%;width:5.3333333333vw}.adbase .closebtn span[data-v-30855e90]{opacity:1}}@media screen and (min-width:769px){.adbase[data-v-30855e90]{height:2.0833333333vw}.adbase .ad-container[data-v-30855e90]{font-size:.7291666667vw;left:24.21875vw;line-height:.853125vw;width:51.5625vw}.adbase .adlogobase[data-v-30855e90]{display:block;height:1.6666666667vw;right:5.0520833333vw;top:.2083333333vw;width:3.28125vw}.adbase .adlogobase img[data-v-30855e90]{width:3.234375vw}.adbase .closebtn[data-v-30855e90]{width:2.0833333333vw}.adbase .closebtn span[data-v-30855e90]{font-size:.7291666667vw}}@keyframes rollUp-30855e90{0%{opacity:1;top:0}to{opacity:0;top:-100%}}", ""]), n.locals = {}, t.exports = n
        },
        345: function(t, e, o) {
            "use strict";
            o(215)
        },
        346: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".content[data-v-524d03ac]{position:relative;width:100%}.head-box .pic[data-v-524d03ac]{height:200px;width:200px}.head-box .phonepic[data-v-524d03ac]{height:84px;width:64px}.head-box .funphone[data-v-524d03ac]{display:flex;justify-content:center;margin-top:10px}.head-box .funphone .learnmorebtn[data-v-524d03ac]{align-items:center;border:1px solid #000;border-radius:15px;color:#000;display:flex;font-size:14px;height:30px;justify-content:center;margin-left:0 auto;padding:0 20px}.head-box .funphone a[data-v-524d03ac]{font-size:13px}.head-box .fun[data-v-524d03ac]{visibility:hidden}.head-box .fun a[data-v-524d03ac]{color:#000}.head-box:hover .fun[data-v-524d03ac]{visibility:visible}", ""]), n.locals = {}, t.exports = n
        },
        347: function(t, e, o) {
            "use strict";
            o(216)
        },
        348: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".meatable table{border:solid #ebeef5;border-width:0 0 0 1px}.meatable .el-checkbox__label{padding-left:0;padding-right:10px}.meatable .el-table__fixed,.meatable .el-table__fixed .el-table__fixed-body-wrapper{left:auto;right:0}", ""]), n.locals = {}, t.exports = n
        },
        349: function(t, e, o) {
            "use strict";
            o(217)
        },
        350: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".contrast-table[data-v-1dcfd060]{background:rgba(0,0,0,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:100}.contrast-table .contrast-box[data-v-1dcfd060]{background:#fff;border-radius:15px;left:50%;max-height:90vh;padding:30px;position:fixed;top:50%;transform:translate(-50%,-50%);width:1320px}.contrast-table .contrast-box .top-box[data-v-1dcfd060]{position:relative}.contrast-table .contrast-box .top-box h2[data-v-1dcfd060]{color:#000;font-size:24px;font-weight:700}.contrast-table .contrast-box .top-box p[data-v-1dcfd060]{color:#000;font-size:14px}.contrast-table .contrast-box .top-box .close[data-v-1dcfd060]{cursor:pointer;position:absolute;right:0;top:0}.contrast-table .contrast-box[data-v-1dcfd060] .el-table--enable-row-transition .el-table__body td.el-table__cell{min-width:350px}.meatable .contrast-box .top-box .close[data-v-1dcfd060]{left:0;right:auto}", ""]), n.locals = {}, t.exports = n
        },
        351: function(t, e, o) {
            "use strict";
            o(218)
        },
        352: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".contrast-warp[data-v-17af6077]{background:#fff;bottom:0;left:0;padding:60px 0;position:fixed;width:100%;z-index:100}.contrast-warp .contrast-list[data-v-17af6077]{margin:0 auto;width:1440px}.contrast-warp .contrast-list li[data-v-17af6077]{align-items:center;border-bottom:1px solid #ebebeb;box-sizing:content-box;display:flex;float:left;justify-content:center;margin-right:30px;padding:15px;position:relative;width:293px}.contrast-warp .contrast-list li .pic[data-v-17af6077]{flex-basis:50px;height:60px;margin-right:20px;min-width:50px;width:50px}.contrast-warp .contrast-list li .desc[data-v-17af6077]{color:#000;font-size:14px;padding-right:40px}.contrast-warp .contrast-list li .desc .el-icon-error[data-v-17af6077]{color:red;cursor:pointer;font-size:30px;position:absolute;right:15px;top:50%;transform:translateY(-50%)}.contrast-warp .fun-box[data-v-17af6077]{float:left}.contrast-warp .fun-box .compare[data-v-17af6077]{background:#000}.contrast-warp .fun-box .clear[data-v-17af6077],.contrast-warp .fun-box .compare[data-v-17af6077]{align-items:center;border-radius:9px;color:#fff;cursor:pointer;display:flex;font-size:12px;height:36px;justify-content:center;margin:5px;width:120px}.contrast-warp .fun-box .clear[data-v-17af6077]{background:#da291c}.meawarp[data-v-17af6077]{left:auto;right:0}.meawarp .contrast-list li[data-v-17af6077]{float:right;margin-left:30px;margin-right:0}.meawarp .contrast-list li .pic[data-v-17af6077]{margin-left:20px;margin-right:0}.meawarp .contrast-list li .desc[data-v-17af6077]{padding-left:40px;padding-right:0}.meawarp .contrast-list li .desc .el-icon-error[data-v-17af6077]{left:15px;right:auto}.meawarp .fun-box[data-v-17af6077]{float:right}@media screen and (max-width:768px){.contrast-warp[data-v-17af6077]{padding:20px 0}.contrast-warp .contrast-list[data-v-17af6077]{display:flex;width:100%}.contrast-warp .contrast-list li[data-v-17af6077]{box-sizing:border-box;margin:0;width:25%}.contrast-warp .contrast-list li .pic[data-v-17af6077]{margin-right:0}.contrast-warp .contrast-list li .desc div[data-v-17af6077]{display:none}.contrast-warp .contrast-list li .desc .el-icon-error[data-v-17af6077]{font-size:20px;right:25px;top:32%}.contrast-warp .fun-box[data-v-17af6077]{display:flex;justify-content:center;margin:0 auto;width:100%}.meawarp .contrast-list li .desc .el-icon-error[data-v-17af6077]{left:25px;right:0}}.el-scrollbar>.el-scrollbar__bar[data-v-17af6077]{opacity:1!important}.a-c[data-v-17af6077]{align-items:center;display:flex}.j-c[data-v-17af6077]{justify-content:center}.j-sb[data-v-17af6077]{justify-content:space-between}", ""]), n.locals = {}, t.exports = n
        },
        357: function(t, e, o) {
            t.exports = o.p + "fonts/Avenir Medium.496ead4.ttf"
        },
        358: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDIyIj4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxIiBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IndoaXRlIi8+CjxnIGlkPSJHcm91cCA5Ij4KPGcgaWQ9Ikdyb3VwIDIiPgo8cGF0aCBpZD0iVmVjdG9yIDEiIGQ9Ik05Ljg4MjgxIDcuNzY1NjJMMTQuMTE4MSAxMi4wMDA5TDkuODgyODEgMTYuMjM2MiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9nPgo8L2c+CjwvZz4KPC9zdmc+Cg=="
        },
        359: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHQSURBVGiB3ZoxbsIwFIY/2qFLhTJ1QZUQDB1h6AHaU7BwiEidQWw9AeIcvQBiRapgrlCnbpXAIHVgCEqH2lIaEQHBdvL4pX+K8vz/jmM/+7mCHTSBR+AJeADugTvgVj//Ab6BL+ADmADvwKel9nOhBoTAFIiA+ERG+t1Qx/KGBjAE1jlEZ3GtYzZcCq8CfWBlUXiaK6Cn27KKFjBzKDzNmW7TCrrA0qN4w6Vu+yy8ANsCxBtutYbc4vPMLrYZ5THRpdie3/cljh5OLYoZ84e45Igfu4rf2eZUzjgwxfZKIPIQ+1niG7hdpGxxRcaKPSyBuGM5TIuvYSm3abfbcRAErg2sSSWAoS3xSql4Pp/7MBEmDUzPDViv12OlVGzgwcTUiG9iacUdDAZxEo5NRFo7HZuBPZvoAIxsB/ZoYgQwdtE7nkyMARaOPq8PEwuAjSsDHkxsAHYuDTg2sbviAiB+CIn/icVPo+IXMvGphPhkDiyk00EQFJZOwwVsaMRvKUH4ph6EHqtcJwwo4AZ43ueuRHgF3rIeij9aBOGHuwaij9cNRBc4kibElpgMRBf5DESXWQ2q/BVAXBe6+zgodCch9qpBGqW47FHJLf8/Crtu8wsD7H/NfSFawgAAAABJRU5ErkJggg=="
        },
        360: function(t, e, o) {
            t.exports = o.p + "img/icon-more-red.a7ac6bc.png"
        },
        405: function(t, e, o) {
            "use strict";
            o(241)
        },
        406: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".center-message[data-v-41070306]{background:rgba(0,0,0,.7);border-radius:4px;color:#fff;left:50%;padding:10px 20px;position:fixed;top:50%;transform:translate(-50%,-50%);z-index:9999}.success[data-v-41070306]{background:#f0f9eb;color:#67c23a}.error[data-v-41070306]{background:#fff0f0;color:#f56b6c}.info[data-v-41070306]{background:#f4f4f5;color:#919399}.warning[data-v-41070306]{background:#fdf6ec;color:#e6a23c}.fade-enter-active[data-v-41070306],.fade-leave-active[data-v-41070306]{transition:opacity .3s}.fade-enter-from[data-v-41070306],.fade-leave-to[data-v-41070306]{opacity:0}", ""]), n.locals = {}, t.exports = n
        },
        62: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = {
                    props: {},
                    data: function() {
                        return {}
                    },
                    methods: {
                        handleClick: function() {
                            this.$emit("backHome")
                        }
                    }
                },
                r = (o(306), o(7)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "notfoundbase"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("notFound.title")))]), t._v(" "), e("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.$t("notFound.desc")))]), t._v(" "), e("nuxt-link", {
                        staticClass: "homebtn",
                        attrs: {
                            to: "/"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.handleClick.apply(null, arguments)
                            }
                        }
                    }, [e("div", [t._v(t._s(t.$t("notFound.back")))])])], 1)
                }), [], !1, null, "86919660", null);
            e.default = component.exports
        },
        78: function(t, e, o) {
            "use strict";
            o.r(e);
            o(12), o(36), o(35), o(14), o(52);
            var n = o(11),
                r = o(32),
                l = o(51),
                c = {
                    props: ["menuData", "showAd"],
                    watch: {
                        menuData: {
                            immediate: !0,
                            handler: function(t, e) {
                                t && this.setProCate(0)
                            }
                        }
                    },
                    data: function() {
                        return {
                            lang: [],
                            local: !1,
                            column: [],
                            headerHover: !1,
                            menu: "",
                            hoveritem: null,
                            proMenuList: "",
                            ProList: "",
                            proMenuCut: 0,
                            serviceList: "",
                            seniorIndex: 0,
                            secondIndex: 0,
                            cateChild: {},
                            itemChild: {},
                            adList: {},
                            subBarData: [],
                            lodProds: [{
                                categoryCode: "Memory-Cards",
                                titleName: this.$t("navProducts.memoryCard.title"),
                                prodImgUrl: "https://www-oss.lexar.com/lexar/images/2024-12-06/Lexar_Category_1.webp",
                                types: [{
                                    title: this.$t("navProducts.memoryCard.child.CFexpress"),
                                    code: "CFexpress"
                                }, {
                                    title: this.$t("navProducts.memoryCard.child.SD"),
                                    code: "SD"
                                }, {
                                    title: this.$t("navProducts.memoryCard.child.microSD"),
                                    code: "MicroSD"
                                }],
                                allTitle: this.$t("navProducts.memoryCard.child.allMemCards")
                            }, {
                                categoryCode: "Portable-Storage",
                                titleName: this.$t("navProducts.mobileStorage.title"),
                                prodImgUrl: "https://www-oss.lexar.com/lexar/images/2024-12-06/Lexar_Category_2.webp",
                                types: [{
                                    title: this.$t("navProducts.mobileStorage.child.mobileDrive"),
                                    code: "Portable-SSDs"
                                }, {
                                    title: this.$t("navProducts.mobileStorage.child.usb"),
                                    code: "USB-Flash-Drives"
                                }],
                                allTitle: this.$t("navProducts.mobileStorage.child.allMobileStorage")
                            }, {
                                categoryCode: "SSD",
                                titleName: this.$t("navProducts.ssd.title"),
                                prodImgUrl: "zh_CN" == this.$i18n.locale ? "https://www-oss.lexar.com/lexar/images/2024-12-06/Lexar_Category_3_cn.webp" : "https://www-oss.lexar.com/lexar/images/2024-12-06/Lexar_Category_3.webp",
                                types: [{
                                    title: "NVMe",
                                    code: "NVMe"
                                }, {
                                    title: "SATA",
                                    code: "SATA"
                                }],
                                allTitle: this.$t("navProducts.ssd.child.allSsd")
                            }, {
                                categoryCode: "Memory",
                                titleName: this.$t("navProducts.ram.title"),
                                prodImgUrl: "zh_CN" == this.$i18n.locale ? "https://www-oss.lexar.com/lexar/images/2024-12-06/Lexar_Category_4_cn.webp" : "https://www-oss.lexar.com/lexar/images/2024-12-06/Lexar_Category_4.webp",
                                types: [{
                                    title: "DDR5",
                                    code: "DDR5"
                                }, {
                                    title: "DDR4",
                                    code: "DDR4"
                                }],
                                allTitle: this.$t("navProducts.ram.child.allRam")
                            }, {
                                categoryCode: "Accessories",
                                titleName: this.$t("navProducts.attachment.title"),
                                prodImgUrl: "https://www-oss.lexar.com/lexar/images/2024-12-06/Lexar_Category_5.webp",
                                types: [{
                                    title: this.$t("navProducts.attachment.child.dockStation"),
                                    code: "Workflow-Modules"
                                }, {
                                    title: this.$t("navProducts.attachment.child.cardReader"),
                                    code: "Memory-Card-Reader"
                                }, {
                                    title: this.$t("navProducts.attachment.child.other"),
                                    code: "Others"
                                }],
                                allTitle: this.$t("navProducts.attachment.child.allAttachment")
                            }],
                            prodList: [],
                            solt: {
                                pageIndex: 1,
                                sortType: "",
                                pageSize: 9,
                                sortStr: "desc",
                                name: "",
                                categoryIdList: [],
                                productCategoryIdListList: []
                            },
                            langList: [{
                                name: "Global / English",
                                url: "/global/",
                                code: "en_WW"
                            }, {
                                name: "Deutsch",
                                url: "/de/",
                                code: "de_DE"
                            }, {
                                name: "Español",
                                url: "/es/",
                                code: "es_ES"
                            }, {
                                name: "Français",
                                url: "/fr/",
                                code: "fr_FR"
                            }, {
                                name: "简体中文",
                                url: "/zh-hans/",
                                code: "zh_CN"
                            }, {
                                name: "繁體中文",
                                url: "/zh-hant/",
                                code: "zh_TW"
                            }, {
                                name: "Italiano ",
                                url: "/it/",
                                code: "it_IT"
                            }, {
                                name: "日本语",
                                url: "/jp/",
                                code: "ja_JP"
                            }, {
                                name: "한국어",
                                url: "/kr/",
                                code: "ko_KR"
                            }, {
                                name: "Americas / English",
                                url: "https://americas.lexar.com/",
                                code: "en_US"
                            }],
                            isMea: r.f,
                            leftOffset: 0,
                            isAnimating: !1
                        }
                    },
                    computed: {
                        isMaxWidth: function() {
                            return "de_DE" == this.$i18n.locale || "es_ES" == this.$i18n.locale || "fr_FR" == this.$i18n.locale
                        },
                        proWidth: function() {
                            return window.innerWidth - document.documentElement.clientWidth
                        }
                    },
                    methods: {
                        mouseClass: function(t) {
                            this.headerHover = t, t || (this.menu = "")
                        },
                        menuHover: function(t, e) {
                            var o = this;
                            this.menu = t, 2 == e.navType && (this.hoveritem = e), this.isAnimating = !1, setTimeout((function() {
                                o.isAnimating = !0
                            }), 20), this.pageBurial(this.menuData[this.menu - 1].navName)
                        },
                        hideMenu: function() {
                            this.menu = "", this.hoveritem = null, this.isAnimating = !1
                        },
                        getService: function() {
                            var t = this;
                            this.$request({
                                url: "/Smart/smartcate",
                                method: "get"
                            }).then((function(data) {
                                t.serviceList = data.data.lists
                            }))
                        },
                        getMenuList: function() {
                            var t = this;
                            this.$request({
                                url: "/Index/index",
                                method: "get"
                            }).then((function(data) {
                                t.proMenuList = data.data.product_cate, t.getProList(t.proMenuList[0])
                            }))
                        },
                        getProMenu: function() {
                            var t = this;
                            this.$request({
                                url: "/product/cate",
                                method: "get"
                            }).then((function(data) {
                                t.proMenuList = data.data.lists, t.getProList(t.proMenuList[0].id)
                            }))
                        },
                        getProList: function(t) {
                            this.ProList = t, this.proMenuCut = t.id
                        },
                        init: function() {
                            this.setProdTypes(), this.getProdCate();
                            var t = n.a.get("compareList");
                            this.$store.commit("setCompare", t)
                        },
                        typeProdHref: function(t, e) {
                            this.hideMenu();
                            var o = "";
                            o = 0 == t ? "/products/memory-cards/" : 1 == t ? "/products/portable-storage/" : 2 == t ? "/products/ssd/" : 3 == t ? "/products/memory/" : "/products/accessories/", this.$router.replace({
                                path: o
                            }), this.pageBurial(e)
                        },
                        getProdCate: function() {
                            var t = this;
                            "pc" == this.$store.state.equipment && this.$request({
                                url: "/product/category",
                                method: "get"
                            }).then((function(data) {
                                for (var e = data.data, i = 0; i < e.length; i++) 2 != e[i].type && null != e[i].type || delete e[i];
                                var o = e.filter((function(t) {
                                    return 1 == t.type
                                }));
                                for (i = 0; i < o.length; i++) o[i].level = 1, o[i].child ? o[i].child = o[i].child.filter((function(t) {
                                    return 1 == t.type
                                })) : o[i].child = [];
                                t.subBarData = o, t.$store.commit("setSubBarData", o)
                            }))
                        },
                        setProdTypes: function() {
                            var t = [];
                            for (var a in this.lodProds) this.lodProds[a].types = this.lodProds[a].types.filter((function(t) {
                                return "--" !== t.title
                            })), t.push(this.lodProds[a]);
                            this.prodList = t
                        },
                        linkProd: function(t, e, o) {
                            var n = [],
                                r = t;
                            for (var a in this.subBarData)
                                for (var b in this.subBarData[a].child) e && this.subBarData[a].child[b].categoryCode && this.subBarData[a].child[b].categoryCode === e && n.push(this.subBarData[a].child[b].categoryId), e || this.subBarData[a].categoryCode !== t || n.push(this.subBarData[a].child[b].categoryId);
                            r = r.toLowerCase(), this.solt.categoryIdList = n, this.hideMenu(), this.$router.replace({
                                path: "/products/".concat(r, "/"),
                                query: {
                                    solt: encodeURI(JSON.stringify(this.solt))
                                }
                            }), this.pageBurial(o)
                        },
                        setProCate: function(t) {
                            var e = this.menuData.find((function(t) {
                                return 2 == t.navType
                            }));
                            e && 0 != e.productCategory.length && (this.cateChild = e.productCategory[t].secondaryData, this.adList = e.productCategory[t].adData, this.seniorIndex = t, this.setProChild(0))
                        },
                        setProChild: function(t) {
                            this.itemChild = this.cateChild[t].productList, this.secondIndex = t
                        },
                        buytips: function() {
                            this.$message.error(this.$t("currency.tips4"))
                        },
                        localstate: function() {
                            this.local = !this.local, this.local && this.pageBurial("map")
                        },
                        getLang: function() {
                            var t = this;
                            this.$request({
                                url: "/i18n/language/list",
                                method: "get"
                            }).then((function(data) {
                                t.lang = data.data
                            }))
                        },
                        setLang: function(t) {
                            n.a.set("lang", t), this.$i18n.locale = t, location.reload()
                        },
                        addCompare: function(t) {
                            var e = n.a.get("compareList"),
                                o = {
                                    id: t.id,
                                    name: t.name,
                                    imageUrl: t.imageUrl
                                };
                            if (null == e) e = [o], n.a.set("compareList", e);
                            else {
                                if (e.length >= 4) return void this.$message.error(this.$t("currency.tips1"));
                                if (e.filter((function(e) {
                                        return e.id == t.id
                                    })).length > 0) return void this.$message.error(this.$t("currency.tips2"));
                                e.push(o), n.a.set("compareList", e)
                            }
                            this.$store.commit("setCompare", e)
                        },
                        getLiLeft: function() {
                            var t = document.querySelector("ul.menuList");
                            if (t) {
                                var e = t.firstElementChild;
                                if (e) {
                                    var rect = e.getBoundingClientRect();
                                    this.leftOffset = -rect.left
                                }
                            }
                        },
                        handleResize: function() {
                            var t = this;
                            setTimeout((function() {
                                t.getLiLeft()
                            }), 700)
                        },
                        throttle: function(t, e) {
                            var o = null;
                            return function() {
                                o || (t.apply(this, arguments), o = setTimeout((function() {
                                    o = null
                                }), e))
                            }
                        },
                        pageBurial: function(t) {
                            this.$gtag("event", "Nav_".concat(l.b, "_bt_click_").concat(t, "_pc"), {
                                event_label: t
                            })
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.init(), setTimeout((function() {
                            t.getLiLeft(), window.addEventListener("resize", t.throttle(t.handleResize, 200))
                        }), 500)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("resize", this.handleResize)
                    }
                },
                d = c,
                f = (o(323), o(7)),
                component = Object(f.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("header", [e("div", {
                        staticClass: "headerWpper"
                    }, [e("div", {
                        staticClass: "head contentMin",
                        on: {
                            mouseleave: function(e) {
                                return t.hideMenu()
                            }
                        }
                    }, [e("div", {
                        staticClass: "menu"
                    }, [e("h1", {
                        class: "logo ".concat(t.isMea && "arae_logo"),
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.pageBurial("logo")
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://www-oss.lexar.com/logo.svg",
                            alt: "lexar"
                        }
                    }), t._v(" "), e("a", {
                        staticClass: "logo",
                        attrs: {
                            href: "./"
                        }
                    }, [t._v(t._s(t.$t("head.logo")))])]), t._v(" "), e("ul", {
                        class: "side ".concat(t.isMea && "measide")
                    }, [e("li", {
                        staticClass: "local",
                        on: {
                            mouseenter: t.localstate,
                            mouseleave: t.localstate
                        }
                    }, [e("a", {
                        attrs: {
                            href: "javascript:void(0)"
                        }
                    }, [t.local ? e("img", {
                        attrs: {
                            src: o(202)
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(203)
                        }
                    })]), t._v(" "), t.local ? e("div", {
                        class: "language-container ".concat(t.isMea && "mealanguage")
                    }, [e("section", {
                        staticClass: "page_content"
                    }, [e("el-row", {
                        staticClass: "area-cont"
                    }, t._l(t.langList, (function(o, n) {
                        return e("el-col", {
                            key: n,
                            attrs: {
                                sm: 24,
                                xs: 24
                            }
                        }, [e("a", {
                            staticClass: "item",
                            class: o.code == t.$i18n.locale ? "cur" : "",
                            attrs: {
                                href: o.url
                            }
                        }, [t._v(t._s(o.name))])])
                    })), 1)], 1)]) : t._e()]), t._v(" "), e("li", [e("nuxt-link", {
                        attrs: {
                            to: "/search/"
                        }
                    }, [e("img", {
                        style: {
                            transform: t.isMea ? "rotate(90deg)" : "rotate(0deg)"
                        },
                        attrs: {
                            src: o(322),
                            alt: ""
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.pageBurial("search")
                            }
                        }
                    })])], 1)]), t._v(" "), t.menuData && t.menuData.length ? e("ul", {
                        staticClass: "menuList"
                    }, t._l(t.menuData, (function(o, n) {
                        return e("li", {
                            key: n,
                            class: t.menu == n ? "hover" : "",
                            on: {
                                mouseenter: function(e) {
                                    return t.menuHover(n + 1, o)
                                },
                                mouseleave: function(e) {
                                    return t.hideMenu()
                                }
                            }
                        }, [e("a", {
                            class: {
                                active: !(!t.$route.meta || !t.$route.meta.highlight || t.$route.meta.highlight !== o.navName)
                            },
                            attrs: {
                                href: o.navLinkUrl
                            }
                        }, [t._v(t._s(o.navName))]), t._v(" "), e("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.menu == n + 1 && 2 != o.navType && o.itemList.length > 0,
                                expression: "menu == index + 1 &&\n              item.navType != 2 &&\n              item.itemList.length > 0\n              "
                            }],
                            class: "toggle-list ".concat(t.isAnimating && "actlist")
                        }, t._l(o.itemList, (function(o, n) {
                            return e("a", {
                                key: n,
                                attrs: {
                                    href: o.linkUrl
                                }
                            }, [t._v(t._s(o.title) + "\n              ")])
                        })), 0), t._v(" "), t.menu == n + 1 && 2 == o.navType && t.leftOffset < 0 && "ko_KR" != t.$i18n.locale && "pl_PL" != t.$i18n.locale ? e("div", {
                            staticClass: "pro-leave",
                            style: {
                                left: "".concat(t.leftOffset, "px"),
                                width: "calc(100vw - ".concat(t.proWidth, "px)")
                            }
                        }, [e("div", {
                            staticClass: "prodbase"
                        }, [e("div", {
                            class: "leftprod ".concat(t.isMea && "meaprod"),
                            style: {
                                transform: t.isAnimating ? "translateX(0)" : "translateX(50px)",
                                transition: "all 0.5s ease",
                                opacity: t.isAnimating ? 1 : 0
                            }
                        }, [e("div", {
                            class: "ptitle ".concat(t.isMea && "meatitle"),
                            style: {
                                transform: t.isAnimating ? "translateX(0)" : "translateX(100px)",
                                transition: "all 0.5s ease",
                                opacity: t.isAnimating ? 1 : 0
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.typeProdHref(0, t.prodList[0].titleName)
                                }
                            }
                        }, [t._v("\n                    " + t._s(t.prodList[0].titleName))]), t._v(" "), e("img", {
                            class: "leftimg c-p ".concat(t.isMea && "mealftimg"),
                            style: {
                                transform: t.isAnimating ? "translateX(0)" : "translateX(50px)",
                                transition: "all 0.5s ease",
                                opacity: t.isAnimating ? 1 : 0
                            },
                            attrs: {
                                src: t.prodList[0].prodImgUrl,
                                alt: ""
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.typeProdHref(0, t.prodList[0].titleName)
                                }
                            }
                        }), t._v(" "), e("div", {
                            class: "leftTypebase ".concat(t.isMea && "meatbase")
                        }, t._l(t.prodList[0].types, (function(o, n) {
                            return e("div", {
                                key: n
                            }, [e("div", {
                                staticClass: "typestyle c-p",
                                style: {
                                    transform: t.isAnimating ? "translateX(0)" : "translateX(100px)",
                                    transition: "all 0.5s ease",
                                    opacity: t.isAnimating ? 1 : 0
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.linkProd(t.prodList[0].categoryCode, o.code, o.title)
                                    }
                                }
                            }, [t._v("\n                        " + t._s(o.title) + "\n                      ")])])
                        })), 0), t._v(" "), e("div", {
                            class: "alltype c-p ".concat(t.isMea && "meaaltype"),
                            style: {
                                transform: t.isAnimating ? "translateX(0)" : "translateX(100px)",
                                transition: "all 0.5s ease",
                                opacity: t.isAnimating ? 1 : 0
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.typeProdHref(0, t.prodList[0].allTitle)
                                }
                            }
                        }, [t._v("\n                    " + t._s(t.prodList[0].allTitle) + "\n                  ")])]), t._v(" "), e("div", {
                            staticClass: "rightbase",
                            style: {
                                width: t.isMaxWidth ? "870px" : "770px",
                                transform: t.isAnimating ? "translateX(0)" : "translateX(50px)",
                                transition: "all 0.5s ease",
                                opacity: t.isAnimating ? 1 : 0
                            }
                        }, t._l(t.prodList.slice(1), (function(o, n) {
                            return e("div", {
                                key: n,
                                staticClass: "rightprod",
                                style: {
                                    width: t.isMaxWidth ? "426px" : "376px"
                                }
                            }, [e("div", {
                                class: "ptitle ".concat(t.isMea && "meatitle"),
                                style: {
                                    transform: t.isAnimating ? "translateX(0)" : "translateX(50px)",
                                    transition: "all 0.5s ease",
                                    opacity: t.isAnimating ? 1 : 0
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.typeProdHref(n + 1, o.titleName)
                                    }
                                }
                            }, [t._v(t._s(o.titleName))]), t._v(" "), e("div", {
                                staticClass: "prodright",
                                staticStyle: {
                                    "padding-right": "10px"
                                }
                            }, [e("img", {
                                class: "rightimg c-p ".concat(t.isMea && "meaRimg"),
                                style: {
                                    transform: t.isAnimating ? "translateX(0)" : "translateX(50px)",
                                    transition: "all 0.5s ease",
                                    opacity: t.isAnimating ? 1 : 0
                                },
                                attrs: {
                                    src: o.prodImgUrl,
                                    alt: ""
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.typeProdHref(n + 1, o.titleName)
                                    }
                                }
                            }), t._v(" "), e("div", {
                                class: "basetypes ".concat(t.isMea && "meabtype"),
                                staticStyle: {
                                    "margin-top": "0"
                                }
                            }, [e("div", {
                                staticClass: "leftTypebase",
                                staticStyle: {
                                    margin: "0",
                                    height: "81px"
                                }
                            }, t._l(o.types, (function(n, r) {
                                return e("div", {
                                    key: r
                                }, ["--" !== n ? e("div", {
                                    staticClass: "typestyle c-p",
                                    style: {
                                        transform: t.isAnimating ? "translateX(0)" : "translateX(50px)",
                                        transition: "all 0.5s ease",
                                        opacity: t.isAnimating ? 1 : 0
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.linkProd(o.categoryCode, n.code, n.title)
                                        }
                                    }
                                }, [t._v("\n                              " + t._s(n.title) + "\n                            ")]) : t._e()])
                            })), 0), t._v(" "), e("div", {
                                staticClass: "alltype c-p",
                                style: {
                                    marginLeft: 0,
                                    transform: t.isAnimating ? "translateX(0)" : "translateX(50px)",
                                    transition: "all 0.5s ease",
                                    opacity: t.isAnimating ? 1 : 0
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.typeProdHref(n + 1, o.allTitle)
                                    }
                                }
                            }, [t._v("\n                          " + t._s(o.allTitle) + "\n                        ")])])])])
                        })), 0)])]) : t._e()])
                    })), 0) : t._e()])])]), t._v(" "), 1 == t.menu ? e("div", {
                        staticClass: "overlays"
                    }) : t._e()])
                }), [], !1, null, "968633ae", null);
            e.default = component.exports;
            installComponents(component, {
                Header: o(78).default
            })
        },
        90: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = [function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://www.instagram.com/lexarmemory/"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(206),
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://twitter.com/lexarmemory"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(207),
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://www.facebook.com/lexarmemory"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(208),
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://www.youtube.com/c/LexarMemoryOfficial"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(209),
                            alt: ""
                        }
                    })])
                }, function() {
                    var t = this._self._c;
                    return t("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://www.linkedin.com/company/lexarmemory"
                        }
                    }, [t("img", {
                        attrs: {
                            src: o(325),
                            alt: ""
                        }
                    })])
                }],
                r = {
                    props: {
                        blackTheme: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        isHidden: function() {
                            return "ko_KR" != this.$i18n.locale
                        }
                    },
                    data: function() {
                        return {
                            regionOpt: [],
                            region: "",
                            newRegion: ""
                        }
                    },
                    methods: {}
                },
                l = (o(326), o(7)),
                component = Object(l.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        class: "footerWapper ".concat(t.blackTheme && "blackwapper")
                    }, [e("div", {
                        staticClass: "contentMin"
                    }, [e("div", {
                        staticClass: "fast-warp"
                    }, [e("div", {
                        staticClass: "logo"
                    }, [t.blackTheme ? e("img", {
                        attrs: {
                            src: o(282),
                            alt: "lexar"
                        }
                    }) : e("img", {
                        attrs: {
                            src: "https://www-oss.lexar.com/logo.svg",
                            alt: "lexar"
                        }
                    })]), t._v(" "), e("ul", {
                        staticClass: "fast-menu"
                    }, [t.isHidden ? e("li", [e("h4", {
                        staticClass: "h4",
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        }
                    }, [t._v(t._s(t.$t("foot.company")))]), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/about/"
                        }
                    }, [t._v(t._s(t.$t("foot.about")))]), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/quality/"
                        }
                    }, [t._v(t._s(t.$t("foot.lab")))]), t._v(" "), "en_WW" == t.$i18n.locale ? e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/news/"
                        }
                    }, [t._v(t._s(t.$t("foot.news")))]) : t._e(), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/contact/"
                        }
                    }, [t._v(t._s(t.$t("foot.contact")))]), t._v(" "), "zh_CN" == t.$i18n.locale ? e("a", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            href: "https://careers.lexar.com/index",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("foot.job1")))]) : t._e(), t._v(" "), "zh_CN" == t.$i18n.locale ? e("a", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            href: "https://xxx0an5xw1s.jobs.feishu.cn/560033",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("foot.job2")))]) : t._e()], 1) : t._e(), t._v(" "), e("li", [e("h4", {
                        staticClass: "h4",
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        }
                    }, [t._v(t._s(t.$t("foot.legal")))]), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/terms-of-use/"
                        }
                    }, [t._v(t._s(t.$t("foot.terms")))]), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/legal/cookies/"
                        }
                    }, [t._v(t._s(t.$t("foot.cookie")))]), t._v(" "), t.isHidden ? e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/warranty/?tab=1"
                        }
                    }, [t._v(t._s(t.$t("foot.warranty")))]) : t._e(), t._v(" "), e("nuxt-link", {
                        style: {
                            color: t.blackTheme ? "#fff" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            to: "/legal/policy/"
                        }
                    }, [t._v(t._s(t.$t("foot.policy")))])], 1)])]), t._v(" "), e("div", {
                        staticClass: "social-box"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), "zh_CN" == t.$i18n.locale ? e("a", {
                        staticClass: "item",
                        attrs: {
                            href: "https://mp.weixin.qq.com/s/SFhHHfEsRWPQZbTsJkXFwA"
                        }
                    }, [e("img", {
                        attrs: {
                            src: o(205),
                            alt: ""
                        }
                    })]) : t._e(), t._v(" "), t._m(4)]), t._v(" "), e("div", {
                        staticClass: "social-warp"
                    }, [e("div", {
                        staticClass: "copyright",
                        style: {
                            color: t.blackTheme ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
                        }
                    }, [t._v("\n        Copyright ©2025 Lexar.com. All Rights Reserved."), e("a", {
                        style: {
                            color: t.blackTheme ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
                        },
                        attrs: {
                            href: "https://beian.miit.gov.cn/",
                            target: "_blank"
                        }
                    }, [t._v("粤ICP备19008430号-1")])])])])])
                }), n, !1, null, "1ab3b588", null);
            e.default = component.exports;
            installComponents(component, {
                Footer: o(90).default
            })
        }
    }
]);