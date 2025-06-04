(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        1014: function(t, e, o) {
            "use strict";
            o.r(e);
            o(12);
            var r = o(4),
                n = (o(40), o(35), o(27), o(33), o(13), o(34), o(32)),
                c = o(51);

            function l(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise((function(o, r) {
                    var script = document.createElement("script");
                    script.src = t, script.async = e.async || !1, script.defer = e.defer || !1, script.onload = function() {
                        return o()
                    }, script.onerror = function() {
                        return r(new Error("Script load failed: ".concat(t)))
                    }, e.body ? document.body.appendChild(script) : document.head.appendChild(script)
                }))
            }
            var d = {
                    data: function() {
                        return {
                            banner: {},
                            activeIndex: 1,
                            IMAGE_HOST: "https://313design.oss-cn-shanghai.aliyuncs.com/lexar/zt",
                            pageBase: {
                                baseData: {
                                    name: "",
                                    sellLink: ""
                                },
                                awardsList: [],
                                numberData: [],
                                saleData: {},
                                publicizeUpData: {},
                                publicizeDownData: {},
                                argsData: [],
                                footnote: "",
                                resourceData: {
                                    software: [],
                                    manual: []
                                },
                                featureData: {},
                                mediaComment: [],
                                faqData: []
                            },
                            mCommandValue: this.$t("products.detail.nav1"),
                            buyBtnTxt: "",
                            showBannerDesc: !1
                        }
                    },
                    head: function() {
                        return {
                            title: Object(n.g)(this.pageBase.baseData.name.replace(/<sup>|<\/sup>/g, "").replace(/®/g, "® ")),
                            meta: [{
                                property: "og:title",
                                content: this.pageBase.baseData.name.replace(/<sup>|<\/sup>/g, "").replace(/®/g, "® ")
                            }, {
                                property: "og:description",
                                content: this.pageBase.argsData.map((function(t, e) {
                                    return "".concat(t.name, ": ").concat(t.value, ";")
                                })).join(" ")
                            }, {
                                name: "description",
                                content: this.pageBase.argsData.map((function(t, e) {
                                    return "".concat(t.name, ": ").concat(t.value, ";")
                                })).join(" ")
                            }],
                            script: [{
                                type: "application/ld+json",
                                innerHTML: JSON.stringify(Object(c.c)(this.pageBase))
                            }]
                        }
                    },
                    methods: {
                        onVideoEnded: function() {
                            this.showBannerDesc = !0
                        },
                        init: function() {
                            var t = this,
                                video = this.$refs.videoPlayer;
                            video && video.addEventListener("ended", this.onVideoEnded), this.$request({
                                url: "/product/details",
                                method: "post",
                                data: {
                                    productCode: n.d
                                }
                            }).then((function(data) {
                                t.pageBase = data.data, localStorage.setItem("loadpcspecial", "loadpcspecial")
                            }))
                        },
                        buytips: function() {
                            this.$message.error(this.$t("products.special.buytips"))
                        },
                        jumpName: function(t, e) {
                            "specification" === t && (localStorage.setItem("selitemspecial", 1), this.$router.push({
                                path: "/parameters/"
                            })), "support" === t && (localStorage.setItem("selitemspecial", 2), this.$router.push({
                                path: "/parameters/"
                            }))
                        }
                    },
                    destroyed: function() {
                        window.scrollTo(0, 0)
                    },
                    beforeUnmount: function() {
                        var video = this.$refs.videoPlayer;
                        video && video.removeEventListener("ended", this.onVideoEnded)
                    },
                    mounted: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return window.scrollTo(0, 0), e.prev = 2, e.next = 5, l("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js", {
                                            defer: !0,
                                            body: !0
                                        });
                                    case 5:
                                        return e.next = 7, Promise.all([l("./zt/script/gsap.min.js"), l("./zt/script/ScrollTrigger.min.js")]);
                                    case 7:
                                        return e.next = 9, l("./zt/script/lozad.min.js");
                                    case 9:
                                        return e.next = 11, l("./zt/script/index.js");
                                    case 11:
                                        window.page && (window.page.IMAGE_HOST = t.IMAGE_HOST), e.next = 17;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(2), console.error("脚本加载失败:", e.t0);
                                    case 17:
                                        window.innerWidth <= 768 ? window.location.href = "./special2/" : (t.init(), t.buyBtnTxt = Object(n.a)(t));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 14]
                            ])
                        })))()
                    }
                },
                f = (o(736), o(738), o(7)),
                component = Object(f.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "speacial-body",
                        staticStyle: {
                            position: "relative"
                        }
                    }, [e("div", {
                        staticClass: "sticky-nav"
                    }, [e("div", {
                        staticClass: "min-box"
                    }, [e("div", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(t.pageBase.baseData.name)
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "menu"
                    }, [e("a", {
                        class: {
                            active_anchor: 1 === t.activeIndex
                        },
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.jumpName("overview", 1)
                            }
                        }
                    }, [t._v(t._s(t.$t("products.detail.nav1")))]), t._v(" "), e("a", {
                        class: {
                            active_anchor: 3 === t.activeIndex
                        },
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.jumpName("specification", 3)
                            }
                        }
                    }, [t._v(t._s(t.$t("products.detail.nav3")))]), t._v(" "), t.pageBase.faqData && t.pageBase.faqData.length > 0 || t.pageBase.resourceData.manual.length || t.pageBase.resourceData.software.length ? e("a", {
                        class: {
                            active_anchor: 4 === t.activeIndex
                        },
                        attrs: {
                            href: "javascript:void(0)"
                        },
                        on: {
                            click: function(e) {
                                return t.jumpName("support", 4)
                            }
                        }
                    }, [t._v(t._s(t.$t("products.detail.nav5")))]) : t._e(), t._v(" "), t.buyBtnTxt && t.pageBase.baseData.sellLink ? e("a", {
                        staticClass: "buy",
                        attrs: {
                            href: t.pageBase.baseData.sellLink,
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.buyBtnTxt))]) : t._e()])]), t._v(" "), e("div", {
                        staticClass: "menuBox"
                    }, [e("el-dropdown", {
                        ref: "menuDrop",
                        staticClass: "menuDrop"
                    }, [e("div", {
                        staticClass: "typebase"
                    }, [e("div", [t._v(t._s(t.mCommandValue))]), t._v(" "), e("i", {
                        staticClass: "el-icon-caret-bottom",
                        staticStyle: {
                            "margin-left": "2px",
                            "font-size": "18px"
                        }
                    })]), t._v(" "), e("el-dropdown-menu", {
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, [e("el-dropdown-item", {
                        nativeOn: {
                            click: function(e) {
                                return t.jumpName("overview", 1)
                            }
                        }
                    }, [t._v(t._s(t.$t("products.detail.nav1")))]), t._v(" "), e("el-dropdown-item", {
                        nativeOn: {
                            click: function(e) {
                                return t.jumpName("specification", 3)
                            }
                        }
                    }, [t._v(t._s(t.$t("products.detail.nav3")))]), t._v(" "), t.pageBase.faqData && t.pageBase.faqData.length > 0 || t.pageBase.resourceData.manual.length > 0 || t.pageBase.resourceData.software.length ? e("el-dropdown-item", {
                        nativeOn: {
                            click: function(e) {
                                return t.jumpName("support", 4)
                            }
                        }
                    }, [t._v(t._s(t.$t("products.detail.nav5")))]) : t._e()], 1)], 1), t._v(" "), t.buyBtnTxt && t.pageBase.baseData.sellLink ? e("a", {
                        staticClass: "buy",
                        attrs: {
                            href: t.pageBase.baseData.sellLink,
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.buyBtnTxt))]) : t._e()], 1)]), t._v(" "), e("div", {
                        staticClass: "load-banner"
                    }, [e("section", {
                        staticClass: "section-kv"
                    }, [e("div", {
                        staticClass: "figure-1",
                        attrs: {
                            "data-track": "{'type':'viewstate','params':{'pagecode':'001','product':'kv'}}"
                        }
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("video", {
                        ref: "videoPlayer",
                        staticClass: "v-index",
                        attrs: {
                            id: "banner",
                            autoplay: "autoplay",
                            muted: "true",
                            playsinline: "true",
                            "webkit-playsinline": "true",
                            fetchpriority: "high"
                        },
                        domProps: {
                            muted: !0
                        }
                    }, [e("source", {
                        attrs: {
                            src: o(735)
                        }
                    })])]), t._v(" "), e("div", {
                        class: "figur-box ".concat(t.showBannerDesc && "figur-boxshow")
                    }, [t.$t("products.special.kv1") ? e("div", {
                        staticClass: "figure-tag"
                    }, [t._v(t._s(t.$t("products.special.kv1")))]) : t._e(), t._v(" "), e("div", {
                        staticClass: "figure-slogan"
                    }, [t._v(t._s(t.$t("products.special.kv2")))]), t._v(" "), e("div", {
                        staticClass: "figure-h2",
                        domProps: {
                            innerHTML: t._s(t.$t("products.special.kv3"))
                        }
                    })])])])]), t._v(" "), e("div", {
                        staticClass: "load-full"
                    }, [e("section", {
                        staticClass: "section-fast"
                    }, [e("div", {
                        staticClass: "section-box"
                    }, [e("div", {
                        staticClass: "item item1"
                    }, [e("div", {
                        staticClass: "item-title"
                    }, [e("h2", [t._v(t._s(t.$t("products.special.fast1")))]), t._v(" "), e("p", {
                        staticClass: "p1"
                    }, [t._v(t._s(t.$t("products.special.fast2")))])]), t._v(" "), e("ul", {
                        staticClass: "item-cont"
                    }, [e("li", [e("p", [t._v(t._s(t.$t("products.special.fast3")))]), t._v(" "), e("h2", [t._v(t._s(t.$t("products.special.fast4")))])]), t._v(" "), e("li", [e("p", [t._v(t._s(t.$t("products.special.fast5")))]), t._v(" "), e("h2", [t._v(t._s(t.$t("products.special.fast6")))])])])]), t._v(" "), e("div", {
                        staticClass: "item item2"
                    }, [e("div", {
                        staticClass: "item-title",
                        staticStyle: {
                            "text-align": "left"
                        }
                    }, [e("h2", {
                        staticClass: "k8"
                    }, [t._v(t._s(t.$t("products.special.fast7")))]), t._v(" "), e("p", {
                        staticClass: "p2"
                    }, [t._v(t._s(t.$t("products.special.fast8")))])])]), t._v(" "), e("div", {
                        staticClass: "item item3"
                    }, [e("div", {
                        staticClass: "item-title",
                        staticStyle: {
                            "text-align": "left"
                        }
                    }, [e("h2", {
                        staticClass: "v4"
                    }, [t._v(t._s(t.$t("products.special.fast9")))]), t._v(" "), e("p", [t._v(t._s(t.$t("products.special.fast10"))), e("br"), t._v(t._s(t.$t("products.special.fast11")))])])]), t._v(" "), e("div", {
                        staticClass: "item item4"
                    }, [e("div", {
                        staticClass: "item-title"
                    }, [e("p", [t._v(t._s(t.$t("products.special.fast12")))])])])])]), t._v(" "), e("section", {
                        staticClass: "section-moments"
                    }, [e("div", {
                        staticClass: "figure-1",
                        attrs: {
                            "data-track": "{'type':'viewstate','params':{'pagecode':'001','product':'kv'}}"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "overlay"
                    }, [e("div", {
                        staticClass: "figur-box"
                    }, [e("div", {
                        staticClass: "figure-title"
                    }, [t._v(t._s(t.$t("products.special.moments1")))])])]), t._v(" "), e("div", {
                        staticClass: "shadow-box"
                    }, [e("div", {
                        staticClass: "figur-box"
                    }, [e("div", {
                        staticClass: "figure-cont"
                    }, [t._v(t._s(t.$t("products.special.moments2")))])])])]), t._v(" "), e("section", {
                        staticClass: "section-quality section-quality1"
                    }, [e("div", {
                        staticClass: "section-box"
                    }, [e("h2", {
                        staticClass: "box-title"
                    }, [t._v("\n          " + t._s(t.$t("products.special.quality1")) + "\n          "), e("br"), t._v("\n          " + t._s(t.$t("products.special.quality2")) + "\n        ")])])]), t._v(" "), e("section", {
                        staticClass: "section-quality section-quality2"
                    }, [e("div", {
                        staticClass: "section-box"
                    }, [e("ul", {
                        staticClass: "item-list"
                    }, [e("li", {
                        staticClass: "item1"
                    }, [e("div", {
                        staticClass: "cont"
                    }, [e("h4", {
                        staticClass: "item-t"
                    }, [t._v(t._s(t.$t("products.special.quality3")))]), t._v(" "), e("div", {
                        staticClass: "item-c"
                    }, [t._v(t._s(t.$t("products.special.quality4")))])]), t._v(" "), e("div", {
                        staticClass: "pic"
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("video", {
                        staticClass: "v-index",
                        attrs: {
                            muted: "true",
                            playsinline: "true",
                            "webkit-playsinline": "true",
                            id: "quality-v1"
                        },
                        domProps: {
                            muted: !0
                        }
                    }, [e("source", {
                        attrs: {
                            src: t.IMAGE_HOST + "/video/section-4-1.webm",
                            type: "video/webm"
                        }
                    })])])])])])])]), t._v(" "), e("section", {
                        staticClass: "section-quality section-quality3"
                    }, [e("div", {
                        staticClass: "section-box"
                    }, [e("ul", {
                        staticClass: "item-list"
                    }, [e("li", {
                        staticClass: "item2 reverse"
                    }, [e("div", {
                        staticClass: "cont"
                    }, [e("h4", {
                        staticClass: "item-t"
                    }, [t._v(t._s(t.$t("products.special.quality5")))]), t._v(" "), e("div", {
                        staticClass: "item-c"
                    }, [t._v(t._s(t.$t("products.special.quality6")))])]), t._v(" "), e("div", {
                        staticClass: "pic"
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("video", {
                        staticClass: "v-index",
                        attrs: {
                            muted: "true",
                            playsinline: "true",
                            "webkit-playsinline": "true",
                            id: "quality-v2"
                        },
                        domProps: {
                            muted: !0
                        }
                    }, [e("source", {
                        attrs: {
                            src: t.IMAGE_HOST + "/video/section-4-3.webm",
                            type: "video/webm"
                        }
                    })])])])])])])]), t._v(" "), e("section", {
                        staticClass: "section-quality section-quality4"
                    }, [e("div", {
                        staticClass: "section-box"
                    }, [e("ul", {
                        staticClass: "item-list"
                    }, [e("li", {
                        staticClass: "item3"
                    }, [e("div", {
                        staticClass: "cont"
                    }, [e("h4", {
                        staticClass: "item-t"
                    }, [t._v(t._s(t.$t("products.special.quality7")))]), t._v(" "), e("div", {
                        staticClass: "item-c"
                    }, [t._v(t._s(t.$t("products.special.quality8")))])]), t._v(" "), e("div", {
                        staticClass: "pic"
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("video", {
                        staticClass: "v-index",
                        attrs: {
                            muted: "true",
                            playsinline: "true",
                            "webkit-playsinline": "true",
                            id: "quality-v3"
                        },
                        domProps: {
                            muted: !0
                        }
                    }, [e("source", {
                        attrs: {
                            src: t.IMAGE_HOST + "/video/section-4-2.webm",
                            type: "video/webm"
                        }
                    })])])])])])])]), t._v(" "), e("section", {
                        staticClass: "section-quality section-quality5"
                    }, [e("div", {
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            id: "loading-img"
                        }
                    }, [e("img", {
                        staticClass: "video",
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/ani_0/pro_1.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "video",
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/ani_0/pro_88.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "video",
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/ani_0/pro_204.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "video",
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/ani_0/pro_269.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "section-box"
                    }, [e("ul", {
                        staticClass: "item-list"
                    }, [e("li", {
                        staticClass: "item2 reverse"
                    }, [e("div", {
                        staticClass: "cont"
                    }, [e("h4", {
                        staticClass: "item-t"
                    }, [t._v(t._s(t.$t("products.special.quality9")))]), t._v(" "), e("div", {
                        staticClass: "item-c"
                    }, [t._v(t._s(t.$t("products.special.quality10")))])]), t._v(" "), e("div", {
                        staticClass: "pic"
                    }, [e("picture", [e("source", {
                        attrs: {
                            media: "(max-width: 4000px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section4-img-4.jpg?x-oss-process=image/resize,w_708/format,webp"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "video lazy-imageom",
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/section4-img-4.jpg?x-oss-process=image/resize,w_708/format,webp",
                            width: "100%",
                            loading: "“lazy”"
                        }
                    })])])])])])]), t._v(" "), e("section", {
                        staticClass: "section-quality section-quality6"
                    }, [e("div", {
                        staticClass: "section-box"
                    }, [e("ul", {
                        staticClass: "item-list"
                    }, [e("li", {
                        staticClass: "item3"
                    }, [e("div", {
                        staticClass: "cont"
                    }, [e("h4", {
                        staticClass: "item-t"
                    }, [t._v(t._s(t.$t("products.special.quality11")))]), t._v(" "), e("div", {
                        staticClass: "item-c"
                    }, [t._v(t._s(t.$t("products.special.quality12")))])]), t._v(" "), e("div", {
                        staticClass: "pic"
                    }, [e("picture", [e("source", {
                        attrs: {
                            media: "(max-width: 4000px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section4-img-5.jpg?x-oss-process=image/resize,w_708/format,webp"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "video lazy-imageom",
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/section4-img-5.jpg?x-oss-process=image/resize,w_708/format,webp",
                            width: "100%",
                            loading: "“lazy”"
                        }
                    })])])])])])]), t._v(" "), e("section", {
                        staticClass: "section-born"
                    }, [e("div", {
                        staticClass: "figure-1"
                    }, [e("picture", [e("source", {
                        attrs: {
                            media: "(max-width: 1200px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section5-img.jpg?x-oss-process=image/resize,w_1200/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1600px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section5-img.jpg?x-oss-process=image/resize,w_1600/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1920px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section5-img.jpg?x-oss-process=image/resize,w_1920/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 4000px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section5-img.jpg?x-oss-process=image/resize,w_4000/format,webp"
                        }
                    }), t._v(" "), e("img", {
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/section5-img.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%",
                            loading: "“lazy”"
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "figur-box"
                    }, [e("div", {
                        staticClass: "figure-title"
                    }, [t._v(t._s(t.$t("products.special.born1")))]), t._v(" "), e("div", {
                        staticClass: "figure-cont"
                    }, [t._v(t._s(t.$t("products.special.born2")))])])]), t._v(" "), e("section", {
                        staticClass: "section-superior-title"
                    }, [e("div", {
                        staticClass: "figure-box"
                    }, [e("div", {
                        staticClass: "figure-h2"
                    }, [t._v(t._s(t.$t("products.special.superior1"))), e("br"), t._v(t._s(t.$t("products.special.superior2")) + "\n        ")]), t._v(" "), e("div", {
                        staticClass: "figure-p"
                    }, [t._v(t._s(t.$t("products.special.superior3")))])])]), t._v(" "), e("section", {
                        staticClass: "section-superior"
                    }, [e("div", {
                        staticClass: "postion-box"
                    }, [e("div", {
                        staticClass: "figure-box"
                    }, [e("div", {
                        staticClass: "figure-h2"
                    }, [t._v(t._s(t.$t("products.special.superior4"))), e("br"), t._v(t._s(t.$t("products.special.superior5")) + "\n          ")]), t._v(" "), e("div", {
                        staticClass: "figure-p"
                    }, [t._v(t._s(t.$t("products.special.superior6")))])])]), t._v(" "), e("div", {
                        staticClass: "figure-1"
                    }, [e("div", {
                        staticClass: "frame-box"
                    }, [e("canvas", {
                        staticClass: "superior",
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            width: "100%"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "figure-feature"
                    }, [e("div", {
                        staticClass: "figure-feature-item figure-feature-item1"
                    }, [e("h2", [t._v(t._s(t.$t("products.special.superior7")))]), t._v(" "), e("p", [t._v(t._s(t.$t("products.special.superior8")))])]), t._v(" "), e("div", {
                        staticClass: "figure-feature-item figure-feature-item2"
                    }, [e("h2", [t._v(t._s(t.$t("products.special.superior9")))]), t._v(" "), e("p", [t._v(t._s(t.$t("products.special.superior10")))])])])]), t._v(" "), e("div", {
                        staticClass: "video-box"
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("source", {
                        attrs: {
                            media: "(max-width: 1200px)",
                            srcset: t.IMAGE_HOST + "/images/zt/new/new_img.jpg?x-oss-process=image/resize,w_1200/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1600px)",
                            srcset: t.IMAGE_HOST + "/images/zt/new/new_img.jpg?x-oss-process=image/resize,w_1600/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1920px)",
                            srcset: t.IMAGE_HOST + "/images/zt/new/new_img.jpg?x-oss-process=image/resize,w_1920/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 4000px)",
                            srcset: t.IMAGE_HOST + "/images/zt/new/new_img.jpg?x-oss-process=image/resize,w_4000/format,webp"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "v-index",
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/new/new_img.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%",
                            loading: "“lazy”",
                            id: "superior-v1"
                        }
                    })])])])]), t._v(" "), e("section", {
                        staticClass: "section-cfa"
                    }, [e("div", {
                        staticClass: "figure-box"
                    }, [e("div", {
                        staticClass: "figure-h2"
                    }, [t._v(t._s(t.$t("products.special.cfa1"))), e("br"), t._v(t._s(t.$t("products.special.cfa2")))]), t._v(" "), e("div", {
                        staticClass: "figure-1",
                        attrs: {
                            "data-track": "{'type':'viewstate','params':{'pagecode':'001','product':'kv'}}"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "figure-p"
                    }, [t._v(t._s(t.$t("products.special.cfa3"))), e("br"), t._v(t._s(t.$t("products.special.cfa4")))])])]), t._v(" "), e("section", {
                        staticClass: "section-workflow"
                    }, [e("div", {
                        staticClass: "figure-box"
                    }, [e("div", {
                        staticClass: "figure-h2"
                    }, [t._v(t._s(t.$t("products.special.workflow1"))), e("br"), t._v(t._s(t.$t("products.special.workflow2")) + "\n        ")]), t._v(" "), e("div", {
                        staticClass: "figure-p"
                    }, [t._v(t._s(t.$t("products.special.workflow3"))), e("br"), t._v(t._s(t.$t("products.special.workflow4")))])]), t._v(" "), e("div", {
                        staticClass: "figure-1"
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("source", {
                        attrs: {
                            media: "(max-width: 1200px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-1.jpg?x-oss-process=image/resize,w_1200/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1600px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-1.jpg?x-oss-process=image/resize,w_1600/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1920px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-1.jpg?x-oss-process=image/resize,w_1920/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 4000px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-1.jpg?x-oss-process=image/resize,w_4000/format,webp"
                        }
                    }), t._v(" "), e("img", {
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/section8-img-1.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%",
                            height: "100%",
                            loading: "“lazy”"
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "figure-2"
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("source", {
                        attrs: {
                            media: "(max-width: 1200px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-2.jpg?x-oss-process=image/resize,w_1200/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1600px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-2.jpg?x-oss-process=image/resize,w_1600/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1920px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-2.jpg?x-oss-process=image/resize,w_1920/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 4000px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-2.jpg?x-oss-process=image/resize,w_4000/format,webp"
                        }
                    }), t._v(" "), e("img", {
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/section8-img-2.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%",
                            height: "100%",
                            loading: "“lazy”"
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "figure-3"
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("source", {
                        attrs: {
                            media: "(max-width: 1200px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-3.jpg?x-oss-process=image/resize,w_1200/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1600px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-3.jpg?x-oss-process=image/resize,w_1600/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 1920px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-3.jpg?x-oss-process=image/resize,w_1920/format,webp"
                        }
                    }), t._v(" "), e("source", {
                        attrs: {
                            media: "(max-width: 4000px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section8-img-3.jpg?x-oss-process=image/resize,w_4000/format,webp"
                        }
                    }), t._v(" "), e("img", {
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/section8-img-3.jpg?x-oss-process=image/resize,w_1920/format,webp",
                            width: "100%",
                            height: "100%",
                            loading: "“lazy”"
                        }
                    })])])]), t._v(" "), e("section", {
                        staticClass: "section-frame"
                    }, [e("div", {
                        staticClass: "figure-box"
                    }, [e("div", {
                        staticClass: "figure-h2"
                    }, [t._v(t._s(t.$t("products.special.frame1")))]), t._v(" "), e("div", {
                        staticClass: "figure-p"
                    }, [t._v(t._s(t.$t("products.special.frame2")))])])]), t._v(" "), e("section", {
                        staticClass: "section-frame2"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "shock"
                    }, [e("p", [t._v(t._s(t.$t("products.special.frame3")))]), t._v(" "), e("p", [t._v(t._s(t.$t("products.special.frame4")))]), t._v(" "), e("p", [t._v(t._s(t.$t("products.special.frame5")))]), t._v(" "), e("p", [t._v(t._s(t.$t("products.special.frame6")))])])]), t._v(" "), e("section", {
                        staticClass: "section-labs"
                    }, [e("div", {
                        staticClass: "figure-box"
                    }, [e("div", {
                        staticClass: "figure-h2"
                    }, [t._v(t._s(t.$t("products.special.labs1")))]), t._v(" "), e("div", {
                        staticClass: "figure-1",
                        attrs: {
                            "data-track": "{'type':'viewstate','params':{'pagecode':'001','product':'kv'}}"
                        }
                    }, [e("picture", {
                        staticClass: "video lazy-imageom"
                    }, [e("source", {
                        attrs: {
                            media: "(max-width: 4000px)",
                            srcset: t.IMAGE_HOST + "/images/zt/section10-img.jpg?x-oss-process=image/resize,w_1200/format,webp"
                        }
                    }), t._v(" "), e("img", {
                        attrs: {
                            src: t.IMAGE_HOST + "/images/zt/section10-img.jpg?x-oss-process=image/resize,w_1200/format,webp",
                            width: "100%",
                            height: "100%",
                            loading: "“lazy”"
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "figure-p"
                    }, [t._v(t._s(t.$t("products.special.labs2")))])])]), t._v(" "), e("section", {
                        staticClass: "section-media"
                    }, [e("div", {
                        staticClass: "media-min"
                    }, [e("div", {
                        staticClass: "figure-title"
                    }, [t._v(t._s(t.$t("products.special.media1")))]), t._v(" "), e("ul", {
                        staticClass: "figure-list"
                    }, [e("li", [e("div", {
                        staticClass: "cont"
                    }, [t._v("\n              " + t._s(t.$t("products.special.media2"))), e("br"), e("br"), t._v(t._s(t.$t("products.special.media3")) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "motto"
                    }, [t._v(t._s(t.$t("products.special.media4")))])]), t._v(" "), e("li", [e("div", {
                        staticClass: "cont"
                    }, [t._v("\n              " + t._s(t.$t("products.special.media5")) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "motto"
                    }, [t._v(t._s(t.$t("products.special.media6")))])]), t._v(" "), e("li", [e("div", {
                        staticClass: "cont"
                    }, [t._v(t._s(t.$t("products.special.media7")) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "motto"
                    }, [t._v(t._s(t.$t("products.special.media8")))])]), t._v(" "), e("li", [e("div", {
                        staticClass: "cont"
                    }, [t._v("\n              " + t._s(t.$t("products.special.media9")) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "motto"
                    }, [t._v(t._s(t.$t("products.special.media10")))])]), t._v(" "), e("li", [e("div", {
                        staticClass: "cont"
                    }, [t._v("\n              " + t._s(t.$t("products.special.media11")) + " "), e("br"), t._v(t._s(t.$t("products.special.media12")) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "motto"
                    }, [t._v(t._s(t.$t("products.special.media13")))])]), t._v(" "), e("li", [e("div", {
                        staticClass: "cont"
                    }, [t._v("\n              " + t._s(t.$t("products.special.media14")) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "motto"
                    }, [t._v(t._s(t.$t("products.special.media15")))])]), t._v(" "), e("li", [e("div", {
                        staticClass: "cont"
                    }, [t._v("\n              " + t._s(t.$t("products.special.media16")) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "motto"
                    }, [t._v(t._s(t.$t("products.special.media17")))])]), t._v(" "), e("li", [e("div", {
                        staticClass: "cont"
                    }, [t._v("\n              " + t._s(t.$t("products.special.media18"))), e("br"), t._v(t._s(t.$t("products.special.media19")) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "motto"
                    }, [t._v(t._s(t.$t("products.special.media20")))])])])])]), t._v(" "), e("section", {
                        staticClass: "note-section"
                    }, [e("div", {
                        staticClass: "note-min"
                    }, [t._v("\n        " + t._s(t.$t("products.special.note1")) + "\n        "), e("br"), e("br"), e("br"), t._v("\n        " + t._s(t.$t("products.special.note2")) + "\n        "), e("br"), t._v("\n        " + t._s(t.$t("products.special.note3")) + "\n        "), e("br"), t._v("\n        " + t._s(t.$t("products.special.note4"))), e("br"), t._v("\n        " + t._s(t.$t("products.special.note5"))), e("br"), t._v("\n        " + t._s(t.$t("products.special.note6"))), e("br"), t._v("\n        " + t._s(t.$t("products.special.note7"))), e("br"), t._v("\n        " + t._s(t.$t("products.special.note8"))), e("br"), t._v("\n        " + t._s(t.$t("products.special.note9"))), e("br"), t._v("\n        " + t._s(t.$t("products.special.note10")) + "\n      ")])])])])
                }), [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "figure-1"
                    }, [t("canvas", {
                        staticClass: "seq",
                        attrs: {
                            height: "100%"
                        }
                    })])
                }], !1, null, "247b6695", null);
            e.default = component.exports
        },
        437: function(t, e, o) {
            "use strict";
            o(12);
            var r = o(32),
                n = o(51),
                c = {
                    props: {
                        prodFilter: {
                            type: Boolean,
                            default: !1
                        },
                        subBarData: {
                            type: Array,
                            default: []
                        },
                        capacityDatas: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        return {
                            openCap: !1,
                            isMea: r.f
                        }
                    },
                    methods: {
                        handleClose: function() {
                            this.$emit("closeFilter")
                        },
                        selType: function(t) {
                            t.isSel = !t.isSel, this.$emit("changeType"), t.isSel && this.pageBurial(t.categoryName)
                        },
                        pageBurial: function(t) {
                            var e = "";
                            e = "product" === this.$route.name ? "allproduct_".concat(n.b, "_").concat(t, "_app") : "".concat(this.$route.name, "_").concat(n.b, "_").concat(t, "_app"), this.$gtag("event", e, {
                                event_label: t
                            })
                        },
                        selCap: function(t) {
                            t.isSel = !t.isSel, this.$emit("selCap")
                        },
                        resetClick: function() {
                            this.$emit("resetClick")
                        }
                    }
                },
                l = (o(670), o(7)),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("el-drawer", {
                        attrs: {
                            visible: t.prodFilter,
                            direction: "btt",
                            "before-close": t.handleClose
                        },
                        on: {
                            "update:visible": function(e) {
                                t.prodFilter = e
                            }
                        },
                        scopedSlots: t._u([{
                            key: "title",
                            fn: function() {
                                return [e("div", {
                                    staticClass: "reset",
                                    on: {
                                        click: t.resetClick
                                    }
                                }, [t._v(t._s(t.$t("products.index.reset")))])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), e("div", {
                        class: "filterbase ".concat(t.isMea && "meafilter")
                    }, [t._l(t.subBarData, (function(r, n) {
                        return e("div", {
                            key: n,
                            staticClass: "itembase"
                        }, [e("div", {
                            staticClass: "cagename",
                            on: {
                                click: function(t) {
                                    r.isOpen = !r.isOpen
                                }
                            }
                        }, [e("h2", [t._v(t._s(r.categoryName))]), t._v(" "), r.isOpen ? e("i", {
                            staticClass: "el-icon-minus"
                        }) : t._e(), t._v(" "), r.isOpen ? t._e() : e("i", {
                            staticClass: "el-icon-plus"
                        })]), t._v(" "), t._l(r.child, (function(n, c) {
                            return r.isOpen && r.child && r.child.length ? e("div", {
                                key: c,
                                class: "typeitem ".concat(c + 1 == r.child.length && "lastpd"),
                                on: {
                                    click: function(e) {
                                        return t.selType(n)
                                    }
                                }
                            }, [n.isSel ? e("img", {
                                attrs: {
                                    src: o(440),
                                    alt: ""
                                }
                            }) : e("img", {
                                attrs: {
                                    src: o(441),
                                    alt: ""
                                }
                            }), t._v(" "), e("h3", [t._v(t._s(n.categoryName))])]) : t._e()
                        }))], 2)
                    })), t._v(" "), t.capacityDatas && t.capacityDatas.length ? e("div", {
                        staticClass: "itembase"
                    }, [e("div", {
                        staticClass: "cagename",
                        on: {
                            click: function(e) {
                                t.openCap = !t.openCap
                            }
                        }
                    }, [e("span", [t._v(t._s(t.$t("products.index.tipcapacity")))]), t._v(" "), t.openCap ? e("i", {
                        staticClass: "el-icon-minus"
                    }) : t._e(), t._v(" "), t.openCap ? t._e() : e("i", {
                        staticClass: "el-icon-plus"
                    })]), t._v(" "), t._l(t.capacityDatas, (function(r, n) {
                        return t.openCap ? e("div", {
                            key: n,
                            class: "typeitem ".concat(n + 1 == t.capacityDatas.length && "lastpd"),
                            on: {
                                click: function(e) {
                                    return t.selCap(r)
                                }
                            }
                        }, [r.isSel ? e("img", {
                            attrs: {
                                src: o(440),
                                alt: ""
                            }
                        }) : e("img", {
                            attrs: {
                                src: o(441),
                                alt: ""
                            }
                        }), t._v(" "), e("span", [t._v(t._s(r.lable))])]) : t._e()
                    }))], 2) : t._e()], 2)])
                }), [], !1, null, "d085a2dc", null);
            e.a = component.exports
        },
        438: function(t, e, o) {
            "use strict";
            o(52), o(12);
            var r = o(32),
                n = o(51),
                c = {
                    props: {
                        pageBase: {
                            type: Object,
                            default: {
                                total: -1
                            }
                        },
                        sortBy: {
                            type: Array,
                            default: []
                        },
                        currSort: ""
                    },
                    data: function() {
                        return {
                            isMea: r.f
                        }
                    },
                    methods: {
                        mTreeOpen: function() {
                            this.$emit("mTreeOpen")
                        },
                        phoneSort: function(t) {
                            this.$refs.sortRef.doClose(), this.$emit("phoneSort", t);
                            var e = "";
                            e = "product" === this.$route.name ? "allproduct_".concat(n.b, "_").concat(t.label, "_app") : "".concat(this.$route.name, "_").concat(n.b, "_").concat(t.label, "_app"), this.$gtag("event", e, {
                                event_label: t.label
                            })
                        }
                    }
                },
                l = (o(674), o(7)),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        class: "m-tabs ".concat(t.isMea && "meatabs")
                    }, [e("div", {
                        staticClass: "select-box"
                    }, [e("div", {
                        staticClass: "e-label",
                        staticStyle: {
                            "font-size": "14px"
                        },
                        on: {
                            click: t.mTreeOpen
                        }
                    }, [e("img", {
                        staticClass: "locimg",
                        attrs: {
                            src: o(672),
                            alt: ""
                        }
                    }), t._v("\n            " + t._s(t.$t("products.index.s1")) + "\n            "), e("img", {
                        staticClass: "allowimg",
                        attrs: {
                            src: o(474),
                            alt: ""
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "totalnum",
                        staticStyle: {
                            "font-size": "14px"
                        }
                    }, [t._v("\n            " + t._s(+t.pageBase.total < 0 ? 0 : t.pageBase.total) + " " + t._s(t.$t("products.index.results")) + " ")]), t._v(" "), e("el-popover", {
                        ref: "sortRef",
                        attrs: {
                            placement: "bottom",
                            trigger: "click"
                        }
                    }, [t._l(t.sortBy, (function(o, r) {
                        return e("div", {
                            key: r,
                            class: "sorttypephone ".concat(+t.currSort == +o.value && "selitem"),
                            staticStyle: {
                                "font-size": "14px"
                            },
                            on: {
                                click: function(e) {
                                    return t.phoneSort(o)
                                }
                            }
                        }, [t._v("\n                        " + t._s(o.label) + "\n                    ")])
                    })), t._v(" "), e("div", {
                        staticClass: "rightsortbase",
                        attrs: {
                            slot: "reference"
                        },
                        slot: "reference"
                    }, [e("img", {
                        staticClass: "sortimg",
                        attrs: {
                            src: o(673),
                            alt: ""
                        }
                    }), t._v(" "), e("div", {
                        staticStyle: {
                            "font-size": "14px"
                        }
                    }, [t._v(t._s(t.sortBy.length && t.sortBy.find((function(e) {
                        return e.value == t.currSort
                    })) ? t.sortBy.find((function(e) {
                        return e.value == t.currSort
                    })).label : t.$t("products.index.sort")))]), t._v(" "), e("img", {
                        staticClass: "allowimg",
                        attrs: {
                            src: o(474),
                            alt: ""
                        }
                    })])], 2)], 1)])
                }), [], !1, null, "a7025742", null);
            e.a = component.exports
        },
        439: function(t, e, o) {
            "use strict";
            o(12), o(52);
            var r = o(32),
                n = o(430),
                c = o(51),
                l = {
                    components: {
                        ProdItem: n.default
                    },
                    props: {
                        solt: {
                            type: Object,
                            default: {
                                pageIndex: 1,
                                sortType: "",
                                pageSize: 9,
                                sortStr: "desc",
                                name: "",
                                categoryIdList: [],
                                productCategoryIdListList: []
                            }
                        },
                        pageBase: {
                            type: Object,
                            default: {
                                total: -1
                            }
                        },
                        sortBy: {
                            type: Array,
                            default: []
                        },
                        subBarData: {
                            type: Array,
                            default: []
                        },
                        capacityDatas: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        isMain: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            defaultProps: {
                                children: "child",
                                label: "categoryName",
                                value: "categoryId"
                            },
                            isMea: r.f,
                            openCap: !1,
                            isOpen: !0
                        }
                    },
                    methods: {
                        handleSearch: function() {
                            this.$emit("handleSearch")
                        },
                        sortChange: function() {
                            var t = this;
                            this.$emit("sortChange"), this.pageBurial(this.sortBy.find((function(e) {
                                return e.value === t.solt.sortType
                            })).label)
                        },
                        handleCurrentChange: function(t) {
                            this.$emit("handleCurrentChange", t)
                        },
                        selType: function(t) {
                            t.isSel = !t.isSel, this.$emit("changeType"), t.isSel && this.pageBurial(t.categoryName)
                        },
                        pageBurial: function(t) {
                            var e = "";
                            e = "product" === this.$route.name ? "allproduct_".concat(c.b, "_").concat(t, "_app") : "".concat(this.$route.name, "_").concat(c.b, "_").concat(t, "_app"), this.$gtag("event", e, {
                                event_label: t
                            })
                        },
                        selCap: function(t) {
                            t.isSel = !t.isSel, this.$emit("selCap", t)
                        },
                        topItemClick: function(t) {
                            this.isMain ? t.isOpen = !t.isOpen : this.isOpen = !this.isOpen
                        },
                        meaRightPage: function() {
                            var t = this.$refs.paginationRef.$el,
                                e = t.querySelector(".el-icon-arrow-right"),
                                o = t.querySelector(".el-icon-arrow-left");
                            e && (e.style.transform = "rotate(180deg)"), o && (o.style.transform = "rotate(180deg)")
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.isMea && "pc" != this.$store.state.equipment && setTimeout((function() {
                            t.meaRightPage()
                        }), 500)
                    }
                },
                d = (o(676), o(7)),
                component = Object(d.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("el-container", {
                        staticClass: "main"
                    }, [e("el-aside", {
                        staticClass: "side-warp",
                        attrs: {
                            width: "360"
                        }
                    }, [e("div", {
                        staticClass: "sider"
                    }, [e("div", {
                        staticClass: "filter-wrap-container pinned",
                        attrs: {
                            id: "filter-wrap-container"
                        }
                    }, [e("div", {
                        staticClass: "filter-wrap-header"
                    }, [e("el-input", {
                        attrs: {
                            placeholder: t.$t("products.index.serachT1"),
                            "prefix-icon": "".concat(t.isMea ? "" : "el-icon-search"),
                            "suffix-icon": "".concat(t.isMea ? "el-icon-search" : "")
                        },
                        on: {
                            change: t.handleSearch
                        },
                        model: {
                            value: t.solt.name,
                            callback: function(e) {
                                t.$set(t.solt, "name", e)
                            },
                            expression: "solt.name"
                        }
                    })], 1), t._v(" "), e("div", {
                        class: "leftsearchbase ".concat(t.isMea && "mealeftsearch")
                    }, t._l(t.subBarData, (function(r, n) {
                        return e("div", {
                            key: n,
                            staticClass: "itembase"
                        }, [e("div", {
                            staticClass: "cagename",
                            on: {
                                click: function(e) {
                                    return t.topItemClick(r)
                                }
                            }
                        }, [e("h2", [t._v(t._s(r.categoryName))]), t._v(" "), t.isMain ? e("div", [r.isOpen ? e("i", {
                            staticClass: "el-icon-minus"
                        }) : t._e(), t._v(" "), r.isOpen ? t._e() : e("i", {
                            staticClass: "el-icon-plus"
                        })]) : e("div", [t.isOpen ? e("i", {
                            staticClass: "el-icon-minus"
                        }) : t._e(), t._v(" "), t.isOpen ? t._e() : e("i", {
                            staticClass: "el-icon-plus"
                        })])]), t._v(" "), t._l(r.child, (function(n, c) {
                            return r.isOpen && r.child && r.child.length && t.isMain ? e("div", {
                                key: c,
                                class: "typeitem ".concat(c + 1 === r.child.length && "mgb20", " ").concat(t.isMea && "meaitemtype"),
                                on: {
                                    click: function(e) {
                                        return t.selType(n)
                                    }
                                }
                            }, [n.isSel ? e("img", {
                                attrs: {
                                    src: o(440),
                                    alt: ""
                                }
                            }) : e("img", {
                                attrs: {
                                    src: o(441),
                                    alt: ""
                                }
                            }), t._v(" "), e("h3", [t._v(t._s(n.categoryName))])]) : t._e()
                        })), t._v(" "), t._l(r.child, (function(n, c) {
                            return t.isOpen && !t.isMain && r.child && r.child.length ? e("div", {
                                key: c,
                                class: "typeitem ".concat(c + 1 === r.child.length && "mgb20", " ").concat(t.isMea && "meaitemtype"),
                                on: {
                                    click: function(e) {
                                        return t.selType(n)
                                    }
                                }
                            }, [n.isSel ? e("img", {
                                attrs: {
                                    src: o(440),
                                    alt: ""
                                }
                            }) : e("img", {
                                attrs: {
                                    src: o(441),
                                    alt: ""
                                }
                            }), t._v(" "), e("span", [t._v(t._s(n.categoryName))])]) : t._e()
                        }))], 2)
                    })), 0), t._v(" "), t.capacityDatas && t.capacityDatas.length ? e("div", {
                        class: "capbase ".concat(t.isMea && "meacap")
                    }, [e("div", {
                        staticClass: "capitem"
                    }, [e("div", {
                        staticClass: "capname",
                        on: {
                            click: function(e) {
                                t.openCap = !t.openCap
                            }
                        }
                    }, [e("span", [t._v(t._s(t.$t("products.index.tipcapacity")))]), t._v(" "), t.openCap ? e("i", {
                        staticClass: "el-icon-minus"
                    }) : t._e(), t._v(" "), t.openCap ? t._e() : e("i", {
                        staticClass: "el-icon-plus"
                    })]), t._v(" "), t._l(t.capacityDatas, (function(r, n) {
                        return t.openCap ? e("div", {
                            key: n,
                            class: "captype ".concat(n + 1 === t.capacityDatas.length && "mgb20"),
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.selCap(r)
                                }
                            }
                        }, [r.isSel ? e("img", {
                            attrs: {
                                src: o(440),
                                alt: ""
                            }
                        }) : e("img", {
                            attrs: {
                                src: o(441),
                                alt: ""
                            }
                        }), t._v(" "), e("span", [t._v(t._s(r.lable))])]) : t._e()
                    }))], 2)]) : t._e()])])]), t._v(" "), e("el-main", {
                        staticClass: "content-warp"
                    }, [e("div", {
                        staticClass: "topSort"
                    }, [e("div", {
                        staticClass: "total"
                    }, [t._v("\n                " + t._s(+t.pageBase.total < 0 ? 0 : t.pageBase.total) + " " + t._s(t.$t("products.index.results")) + " ")]), t._v(" "), e("div", {
                        staticClass: "sort-box"
                    }, [e("span", {
                        class: "labels ".concat(t.isMea && "mealabs")
                    }, [t._v(t._s(t.$t("products.index.sortby")))]), t._v(" "), e("el-select", {
                        class: "sort-input ".concat(t.isMea && "measortinput"),
                        attrs: {
                            placeholder: t.$t("products.index.select"),
                            "no-data-text": t.$t("currency.emptyTips")
                        },
                        on: {
                            change: t.sortChange
                        },
                        model: {
                            value: t.solt.sortType,
                            callback: function(e) {
                                t.$set(t.solt, "sortType", e)
                            },
                            expression: "solt.sortType"
                        }
                    }, t._l(t.sortBy, (function(t) {
                        return e("el-option", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value
                            }
                        })
                    })), 1)], 1)]), t._v(" "), t.pageBase.total > 0 ? e("el-row", {
                        attrs: {
                            gutter: 16
                        }
                    }, t._l(t.pageBase.data, (function(t, o) {
                        return e("el-col", {
                            key: o,
                            attrs: {
                                sm: 8,
                                xs: 24
                            }
                        }, [e("ProdItem", {
                            attrs: {
                                item: t
                            }
                        })], 1)
                    })), 1) : 0 == t.pageBase.total ? e("el-empty", {
                        attrs: {
                            description: t.$t("products.index.empty")
                        }
                    }) : e("div"), t._v(" "), t.pageBase.total > 0 && "pc" == t.$store.state.equipment ? e("el-pagination", {
                        staticClass: "common-page",
                        attrs: {
                            layout: "prev, pager, next",
                            "prev-text": "< ".concat(t.$t("currency.previous")),
                            "next-text": "".concat(t.$t("currency.next"), " >"),
                            "current-page": t.solt.pageIndex,
                            "page-size": t.solt.pageSize,
                            total: t.pageBase.total
                        },
                        on: {
                            "current-change": t.handleCurrentChange
                        }
                    }) : t._e(), t._v(" "), t.pageBase.total > 0 && "pc" != t.$store.state.equipment ? e("el-pagination", {
                        ref: "paginationRef",
                        staticClass: "phone-page",
                        attrs: {
                            "pager-count": 5,
                            layout: "prev, pager, next",
                            total: t.pageBase.total
                        },
                        on: {
                            "current-change": t.handleCurrentChange
                        }
                    }) : t._e()], 1)], 1)
                }), [], !1, null, "f1296028", null);
            e.a = component.exports
        },
        473: function(t, e, o) {
            var content = o(671);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("716b2cf1", content, !0, {
                sourceMap: !1
            })
        },
        475: function(t, e, o) {
            var content = o(675);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("b8f9df8c", content, !0, {
                sourceMap: !1
            })
        },
        476: function(t, e, o) {
            var content = o(677);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("67126000", content, !0, {
                sourceMap: !1
            })
        },
        506: function(t, e, o) {
            var content = o(737);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("8ba67e08", content, !0, {
                sourceMap: !1
            })
        },
        507: function(t, e, o) {
            t.exports = o.p + "fonts/Avenir_Medium.496ead4.ttf"
        },
        508: function(t, e, o) {
            t.exports = o.p + "fonts/DIN-MEDIUM.1bbe346.OTF"
        },
        509: function(t, e, o) {
            t.exports = o.p + "fonts/HarmonyOS_Sans_SC_Regular.69aa5b1.ttf"
        },
        510: function(t, e, o) {
            var content = o(739);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("0a22ee58", content, !0, {
                sourceMap: !1
            })
        },
        670: function(t, e, o) {
            "use strict";
            o(473)
        },
        671: function(t, e, o) {
            var r = o(20)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".reset[data-v-d085a2dc]{color:#da291c;font-size:14px;font-weight:500;padding:0 20px}.filterbase[data-v-d085a2dc]{border:solid #d8d8d8;border-width:1px 0 0;font-size:14px;padding-bottom:100px;width:100%}.filterbase .itembase[data-v-d085a2dc]{border:solid #d8d8d8;border-width:0 0 1px}.filterbase .itembase .cagename[data-v-d085a2dc]{align-items:center;display:flex;font-weight:700;height:44px;justify-content:space-between;padding:0 20px}.filterbase .itembase .cagename i[data-v-d085a2dc]{color:rgba(0,0,0,.8)}.filterbase .itembase .cagename h2[data-v-d085a2dc]{font-size:14px}.filterbase .itembase .typeitem[data-v-d085a2dc]{align-items:center;color:rgba(0,0,0,.8);display:flex;height:44px;padding:0 20px;width:100%}.filterbase .itembase .typeitem img[data-v-d085a2dc]{height:13px;margin-right:12px;width:13px}.filterbase .itembase .typeitem h3[data-v-d085a2dc]{font-size:14px;font-weight:400}.filterbase .itembase .lastpd[data-v-d085a2dc]{margin-bottom:10px}.meafilter .itembase .typeitem img[data-v-d085a2dc]{margin-left:12px;margin-right:0}[data-v-d085a2dc] .el-drawer{height:80%!important}[data-v-d085a2dc] .el-drawer__header{margin-bottom:10px;padding:15px 10px 5px}", ""]), r.locals = {}, t.exports = r
        },
        674: function(t, e, o) {
            "use strict";
            o(475)
        },
        675: function(t, e, o) {
            var r = o(20)((function(i) {
                return i[1]
            }));
            r.push([t.i, '@media screen and (max-width:3000px){.bannerWarp[data-v-a7025742]{align-items:center;background-size:cover;display:flex;height:450px;justify-content:center;overflow:hidden;width:100%}.bannerWarp h2[data-v-a7025742]{color:#fff;font-size:36px;text-transform:uppercase}.warp[data-v-a7025742]{margin:0 auto;max-width:1440px}.main[data-v-a7025742]{padding:40px 0}.main .sider[data-v-a7025742]{background-color:#fff;padding-right:20px}.main .sider .filter-wrap-header[data-v-a7025742]{margin-bottom:15px}.main .sider .filter-wrap-header[data-v-a7025742] .el-input__inner{background-color:#f7f7f7;font-size:12px;height:35px}.main .sider .filter-wrap-header[data-v-a7025742] .el-input__icon{line-height:35px}.main .content-warp[data-v-a7025742]{padding:0 20px}.main .content-warp .topSort[data-v-a7025742]{align-items:center;display:flex;justify-content:space-between}.main .content-warp .topSort .total[data-v-a7025742]{color:#666;font-size:14px}.main .content-warp .topSort .sort-box[data-v-a7025742]{line-height:0}.main .content-warp .topSort .sort-box .labels[data-v-a7025742]{color:#000;font-size:14px;margin-left:auto;margin-right:14px}.main .content-warp .topSort .sort-box .mealabs[data-v-a7025742]{margin-left:14px;margin-right:auto}.main .content-warp .topSort .sort-box .sort-input[data-v-a7025742] .el-input__inner{border:0}.main .content-warp .topSort .sort-box .sort-input[data-v-a7025742] .el-input__suffix .el-icon-arrow-up:before{align-items:center;background:#000;border-radius:100%;color:#fff;display:flex;font-size:10px;font-weight:700;height:24px;justify-content:center;left:50%;position:absolute;right:auto;top:50%;transform:translate(-50%,-50%);width:24px}.main .content-warp .topSort .sort-box .measortinput[data-v-a7025742] .el-input__suffix{left:5px;right:auto}.main .content-warp .topSort .sort-box .measortinput[data-v-a7025742] .el-input__suffix:after{left:0;right:auto}.treeRadio[data-v-a7025742] .el-tree-node__content .el-checkbox{margin-left:0;margin-right:8px}.mearadio[data-v-a7025742] .el-tree-node__content .el-checkbox{margin-left:8px;margin-right:0}.contrast-warp[data-v-a7025742]{background:rgba(0,0,0,.8);height:100%;left:0;position:fixed;top:0;width:100%}.contrast-warp .contrast-box[data-v-a7025742]{background:#fff;border-radius:15px;height:90vh;left:50%;padding:30px;position:fixed;top:50%;transform:translate(-50%,-50%);width:1200px}.contrast-warp .contrast-box .top-box[data-v-a7025742]{position:relative}.contrast-warp .contrast-box .top-box h2[data-v-a7025742]{color:#000;font-size:24px;font-weight:700}.contrast-warp .contrast-box .top-box p[data-v-a7025742]{color:#000;font-size:14px}.contrast-warp .contrast-box .top-box .close[data-v-a7025742]{position:absolute;right:0;top:0}.stickyBox .m-tabs[data-v-a7025742],.stickyBox .total[data-v-a7025742]{display:none}}@media screen and (max-width:768px){.bannerWarp[data-v-a7025742]{align-items:center;background-size:cover;display:flex;height:200px;justify-content:center;overflow:hidden;width:100%}.bannerWarp h2[data-v-a7025742]{color:#fff;font-size:36px;text-transform:uppercase}.warp[data-v-a7025742]{margin:0 auto;max-width:1200px}.main[data-v-a7025742]{padding:0}.main .side-warp[data-v-a7025742]{align-self:flex-start;display:none;position:sticky;top:70px}.main .sider[data-v-a7025742]{background-color:#fff;padding-right:20px}.main .sider .filter-wrap-header[data-v-a7025742]{margin-bottom:15px}.main .content-warp[data-v-a7025742]{padding:0 20px}.main .content-warp .topSort[data-v-a7025742]{align-items:center;display:flex;display:none;justify-content:space-between}.main .content-warp .topSort .total[data-v-a7025742]{color:#666;font-size:14px}.main .content-warp .topSort .sort-box[data-v-a7025742]{line-height:0}.main .content-warp .topSort .sort-box .labels[data-v-a7025742]{color:#000;font-size:14px;margin-right:14px}.main .content-warp .topSort .sort-box .sort-input[data-v-a7025742] .el-input__inner{border:0}.main .content-warp .topSort .sort-box .sort-input[data-v-a7025742] .el-input__suffix .el-icon-arrow-up:before{align-items:center;background:#000;border-radius:100%;color:#fff;display:flex;font-size:10px;font-weight:700;height:24px;justify-content:center;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:24px}.contrast-warp[data-v-a7025742]{background:rgba(0,0,0,.8);height:100%;left:0;position:fixed;top:0;width:100%}.contrast-warp .contrast-box[data-v-a7025742]{background:#fff;border-radius:15px;height:90vh;left:50%;padding:30px;position:fixed;top:50%;transform:translate(-50%,-50%);width:1200px}.contrast-warp .contrast-box .top-box[data-v-a7025742]{position:relative}.contrast-warp .contrast-box .top-box h2[data-v-a7025742]{color:#000;font-size:24px;font-weight:700}.contrast-warp .contrast-box .top-box p[data-v-a7025742]{color:#000;font-size:14px}.contrast-warp .contrast-box .top-box .close[data-v-a7025742]{position:absolute;right:0;top:0}.stickyBox[data-v-a7025742]{background:#fff;left:0;position:sticky;top:56px;z-index:10}.stickyBox .total[data-v-a7025742]{color:#666;display:block;font-size:14px;padding:20px}.stickyBox .m-tabs[data-v-a7025742]{border-bottom:1px solid #f0f0f0;display:block;padding:14px 27px;position:relative}.stickyBox .m-tabs .select-box[data-v-a7025742]{align-items:center;color:rgba(0,0,0,.5);display:flex;justify-content:space-between}.stickyBox .m-tabs .totalnum[data-v-a7025742]{font-family:Avenir;font-size:12px;font-variation-settings:"opsz" auto;letter-spacing:-.01em}.stickyBox .m-tabs .e-label[data-v-a7025742]{align-items:center;display:flex;font-size:12px}.stickyBox .m-tabs .e-label .locimg[data-v-a7025742]{height:12px;margin-right:7px;width:11px}.stickyBox .m-tabs .e-label .allowimg[data-v-a7025742]{height:7px;margin-left:11px;width:11px}.stickyBox .m-tabs .rightsortbase[data-v-a7025742]{align-items:center;display:flex;font-size:12px}.stickyBox .m-tabs .rightsortbase .sortimg[data-v-a7025742]{height:11px;margin-right:4px;width:16px}.stickyBox .m-tabs .rightsortbase .allowimg[data-v-a7025742]{height:7px;margin-left:11px;width:11px}.stickyBox .m-tabs .sort-input[data-v-a7025742]{width:150px}.stickyBox .m-tabs .sort-input .el-input__inner[data-v-a7025742]{border:0;color:#000}.stickyBox .m-tabs .sort-input .el-input__inner[data-v-a7025742]::-webkit-input-placeholder{color:#000!important}.stickyBox .m-tabs .sort-input .el-select__caret[data-v-a7025742]{color:#000}.stickyBox .m-tabs .measinput[data-v-a7025742] .el-input__suffix{left:5px;right:auto}.stickyBox .m-tabs .measinput[data-v-a7025742] .el-input__suffix:after{left:5px;right:auto}.stickyBox .m-tabs .measinput[data-v-a7025742] .popper__arrow{left:auto;right:35px}.stickyBox .m-tabs .btnReset[data-v-a7025742]{color:#da291c;float:right}.stickyBox .m-tabs .meabtnres[data-v-a7025742]{float:left}.stickyBox .m-tabs .product-box[data-v-a7025742]{background:#fff;left:0;position:absolute;top:100%;width:100%;z-index:100}.stickyBox .m-tabs .product-box .treeBox[data-v-a7025742]{border-bottom:1px solid rgba(0,0,0,.06);padding:20px}.stickyBox .m-tabs .product-box .viewBox[data-v-a7025742]{padding:20px}.stickyBox .m-tabs .product-box .viewBox .btnView[data-v-a7025742]{background:#262626;border-radius:5px;color:#fff;width:100%}.stickyBox .meatabs .e-label .locimg[data-v-a7025742]{margin-left:7px;margin-right:auto}.stickyBox .meatabs .e-label .allowimg[data-v-a7025742]{margin-left:0;margin-right:11px}.stickyBox .meatabs .rightsortbase .sortimg[data-v-a7025742]{margin-left:4px;margin-right:0}.stickyBox .meatabs .rightsortbase .allowimg[data-v-a7025742]{margin-left:0;margin-right:11px}.stickyBox .meatabs .measinput[data-v-a7025742] .el-input__suffix{left:auto;right:5px}.stickyBox .meatabs .measinput[data-v-a7025742] .el-input__suffix:after{left:auto;right:5px}.stickyBox .meatabs .measinput[data-v-a7025742] .popper__arrow{left:35px;right:auto}.stickyBox .meatabs .meabtnres[data-v-a7025742]{float:right}.stickyBox .meatabs .product-box[data-v-a7025742]{left:auto;right:0}}@media only screen and (min-width:768px)and (max-width:1920px){.bannerWarp[data-v-a7025742]{height:23.43vw}.warp[data-v-a7025742]{max-width:75vw}.main .content-warp .topSort .sort-box .labels[data-v-a7025742],.main .content-warp .topSort .total[data-v-a7025742]{font-size:.729vw}.main .content-warp .topSort .sort-box .sort-input[data-v-a7025742].el-input{font-size:.729vw}.main .content-warp .topSort .sort-box .sort-input[data-v-a7025742].el-input .el-icon-arrow-up:before{font-size:.52vw;height:1.245vw;width:1.245vw}}.sorttypephone[data-v-a7025742]{color:rgba(0,0,0,.5);font-family:Avenir;letter-spacing:-.01em;padding:10px 8px}.selitem[data-v-a7025742]{color:#000}', ""]), r.locals = {}, t.exports = r
        },
        676: function(t, e, o) {
            "use strict";
            o(476)
        },
        677: function(t, e, o) {
            var r = o(20)((function(i) {
                return i[1]
            }));
            r.push([t.i, '@media screen and (max-width:3000px){.bannerWarp[data-v-f1296028]{align-items:center;background-size:cover;display:flex;height:450px;justify-content:center;overflow:hidden;width:100%}.bannerWarp h2[data-v-f1296028]{color:#fff;font-size:36px;text-transform:uppercase}.warp[data-v-f1296028]{margin:0 auto;max-width:1440px}.main[data-v-f1296028]{padding:40px 0}.main .sider[data-v-f1296028]{background-color:#fff;padding-right:20px}.main .sider .filter-wrap-header[data-v-f1296028]{margin-bottom:15px}.main .sider .filter-wrap-header[data-v-f1296028] .el-input__inner{background-color:#f7f7f7;font-size:12px;height:35px}.main .sider .filter-wrap-header[data-v-f1296028] .el-input__icon{line-height:35px}.main .content-warp[data-v-f1296028]{padding:0 20px}.main .content-warp .topSort[data-v-f1296028]{align-items:center;display:flex;justify-content:space-between}.main .content-warp .topSort .total[data-v-f1296028]{color:#666;font-size:14px}.main .content-warp .topSort .sort-box[data-v-f1296028]{line-height:0}.main .content-warp .topSort .sort-box .labels[data-v-f1296028]{color:#000;font-size:14px;margin-left:auto;margin-right:14px}.main .content-warp .topSort .sort-box .mealabs[data-v-f1296028]{margin-left:14px;margin-right:auto}.main .content-warp .topSort .sort-box .sort-input[data-v-f1296028] .el-input__inner{border:0}.main .content-warp .topSort .sort-box .sort-input[data-v-f1296028] .el-input__suffix .el-icon-arrow-up:before{align-items:center;background:#000;border-radius:100%;color:#fff;display:flex;font-size:10px;font-weight:700;height:24px;justify-content:center;left:50%;position:absolute;right:auto;top:50%;transform:translate(-50%,-50%);width:24px}.main .content-warp .topSort .sort-box .measortinput[data-v-f1296028] .el-input__suffix{left:5px;right:auto}.main .content-warp .topSort .sort-box .measortinput[data-v-f1296028] .el-input__suffix:after{left:0;right:auto}.treeRadio[data-v-f1296028] .el-tree-node__content .el-checkbox{margin-left:0;margin-right:8px}.mearadio[data-v-f1296028] .el-tree-node__content .el-checkbox{margin-left:8px;margin-right:0}.contrast-warp[data-v-f1296028]{background:rgba(0,0,0,.8);height:100%;left:0;position:fixed;top:0;width:100%}.contrast-warp .contrast-box[data-v-f1296028]{background:#fff;border-radius:15px;height:90vh;left:50%;padding:30px;position:fixed;top:50%;transform:translate(-50%,-50%);width:1200px}.contrast-warp .contrast-box .top-box[data-v-f1296028]{position:relative}.contrast-warp .contrast-box .top-box h2[data-v-f1296028]{color:#000;font-size:24px;font-weight:700}.contrast-warp .contrast-box .top-box p[data-v-f1296028]{color:#000;font-size:14px}.contrast-warp .contrast-box .top-box .close[data-v-f1296028]{position:absolute;right:0;top:0}.stickyBox .m-tabs[data-v-f1296028],.stickyBox .total[data-v-f1296028]{display:none}}@media screen and (max-width:768px){.bannerWarp[data-v-f1296028]{align-items:center;background-size:cover;display:flex;height:200px;justify-content:center;overflow:hidden;width:100%}.bannerWarp h2[data-v-f1296028]{color:#fff;font-size:36px;text-transform:uppercase}.warp[data-v-f1296028]{margin:0 auto;max-width:1200px}.main[data-v-f1296028]{padding:0}.main .side-warp[data-v-f1296028]{align-self:flex-start;display:none;position:sticky;top:70px}.main .sider[data-v-f1296028]{background-color:#fff;padding-right:20px}.main .sider .filter-wrap-header[data-v-f1296028]{margin-bottom:15px}.main .content-warp[data-v-f1296028]{padding:0 20px}.main .content-warp .topSort[data-v-f1296028]{align-items:center;display:flex;display:none;justify-content:space-between}.main .content-warp .topSort .total[data-v-f1296028]{color:#666;font-size:14px}.main .content-warp .topSort .sort-box[data-v-f1296028]{line-height:0}.main .content-warp .topSort .sort-box .labels[data-v-f1296028]{color:#000;font-size:14px;margin-right:14px}.main .content-warp .topSort .sort-box .sort-input[data-v-f1296028] .el-input__inner{border:0}.main .content-warp .topSort .sort-box .sort-input[data-v-f1296028] .el-input__suffix .el-icon-arrow-up:before{align-items:center;background:#000;border-radius:100%;color:#fff;display:flex;font-size:10px;font-weight:700;height:24px;justify-content:center;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:24px}.contrast-warp[data-v-f1296028]{background:rgba(0,0,0,.8);height:100%;left:0;position:fixed;top:0;width:100%}.contrast-warp .contrast-box[data-v-f1296028]{background:#fff;border-radius:15px;height:90vh;left:50%;padding:30px;position:fixed;top:50%;transform:translate(-50%,-50%);width:1200px}.contrast-warp .contrast-box .top-box[data-v-f1296028]{position:relative}.contrast-warp .contrast-box .top-box h2[data-v-f1296028]{color:#000;font-size:24px;font-weight:700}.contrast-warp .contrast-box .top-box p[data-v-f1296028]{color:#000;font-size:14px}.contrast-warp .contrast-box .top-box .close[data-v-f1296028]{position:absolute;right:0;top:0}.stickyBox[data-v-f1296028]{background:#fff;left:0;position:sticky;top:56px;z-index:10}.stickyBox .total[data-v-f1296028]{color:#666;display:block;font-size:14px;padding:20px}.stickyBox .m-tabs[data-v-f1296028]{border-bottom:1px solid #f0f0f0;display:block;padding:14px 27px;position:relative}.stickyBox .m-tabs .select-box[data-v-f1296028]{align-items:center;color:rgba(0,0,0,.5);display:flex;justify-content:space-between}.stickyBox .m-tabs .totalnum[data-v-f1296028]{font-family:Avenir;font-size:12px;font-variation-settings:"opsz" auto;letter-spacing:-.01em}.stickyBox .m-tabs .e-label[data-v-f1296028]{align-items:center;display:flex;font-size:12px}.stickyBox .m-tabs .e-label .locimg[data-v-f1296028]{height:12px;margin-right:7px;width:11px}.stickyBox .m-tabs .e-label .allowimg[data-v-f1296028]{height:7px;margin-left:11px;width:11px}.stickyBox .m-tabs .rightsortbase[data-v-f1296028]{align-items:center;display:flex;font-size:12px}.stickyBox .m-tabs .rightsortbase .sortimg[data-v-f1296028]{height:11px;margin-right:4px;width:16px}.stickyBox .m-tabs .rightsortbase .allowimg[data-v-f1296028]{height:7px;margin-left:11px;width:11px}.stickyBox .m-tabs .sort-input[data-v-f1296028]{width:150px}.stickyBox .m-tabs .sort-input .el-input__inner[data-v-f1296028]{border:0;color:#000}.stickyBox .m-tabs .sort-input .el-input__inner[data-v-f1296028]::-webkit-input-placeholder{color:#000!important}.stickyBox .m-tabs .sort-input .el-select__caret[data-v-f1296028]{color:#000}.stickyBox .m-tabs .measinput[data-v-f1296028] .el-input__suffix{left:5px;right:auto}.stickyBox .m-tabs .measinput[data-v-f1296028] .el-input__suffix:after{left:5px;right:auto}.stickyBox .m-tabs .measinput[data-v-f1296028] .popper__arrow{left:auto;right:35px}.stickyBox .m-tabs .btnReset[data-v-f1296028]{color:#da291c;float:right}.stickyBox .m-tabs .meabtnres[data-v-f1296028]{float:left}.stickyBox .m-tabs .product-box[data-v-f1296028]{background:#fff;left:0;position:absolute;top:100%;width:100%;z-index:100}.stickyBox .m-tabs .product-box .treeBox[data-v-f1296028]{border-bottom:1px solid rgba(0,0,0,.06);padding:20px}.stickyBox .m-tabs .product-box .viewBox[data-v-f1296028]{padding:20px}.stickyBox .m-tabs .product-box .viewBox .btnView[data-v-f1296028]{background:#262626;border-radius:5px;color:#fff;width:100%}.stickyBox .meatabs .e-label .locimg[data-v-f1296028]{margin-left:7px;margin-right:auto}.stickyBox .meatabs .e-label .allowimg[data-v-f1296028]{margin-left:0;margin-right:11px}.stickyBox .meatabs .rightsortbase .sortimg[data-v-f1296028]{margin-left:4px;margin-right:0}.stickyBox .meatabs .rightsortbase .allowimg[data-v-f1296028]{margin-left:0;margin-right:11px}.stickyBox .meatabs .measinput[data-v-f1296028] .el-input__suffix{left:auto;right:5px}.stickyBox .meatabs .measinput[data-v-f1296028] .el-input__suffix:after{left:auto;right:5px}.stickyBox .meatabs .measinput[data-v-f1296028] .popper__arrow{left:35px;right:auto}.stickyBox .meatabs .meabtnres[data-v-f1296028]{float:right}.stickyBox .meatabs .product-box[data-v-f1296028]{left:auto;right:0}}@media only screen and (min-width:768px)and (max-width:1920px){.bannerWarp[data-v-f1296028]{height:23.43vw}.warp[data-v-f1296028]{max-width:75vw}.main .content-warp .topSort .sort-box .labels[data-v-f1296028],.main .content-warp .topSort .total[data-v-f1296028]{font-size:.729vw}.main .content-warp .topSort .sort-box .sort-input[data-v-f1296028].el-input{font-size:.729vw}.main .content-warp .topSort .sort-box .sort-input[data-v-f1296028].el-input .el-icon-arrow-up:before{font-size:.52vw;height:1.245vw;width:1.245vw}}.leftsearchbase[data-v-f1296028]{border:solid #d8d8d8;border-width:1px 0 0;margin-right:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.leftsearchbase .itembase[data-v-f1296028]{border:solid #d8d8d8;border-width:0 0 1px;font-size:14px}.leftsearchbase .itembase .cagename[data-v-f1296028]{align-items:center;cursor:pointer;display:flex;font-weight:900;height:34px;justify-content:space-between}.leftsearchbase .itembase .cagename i[data-v-f1296028]{color:#000}.leftsearchbase .itembase .cagename h2[data-v-f1296028]{font-size:14px}.leftsearchbase .itembase .typeitem[data-v-f1296028]{align-items:center;color:rgba(0,0,0,.8);cursor:pointer;display:flex;height:30px;padding:0 20px 0 0;width:100%}.leftsearchbase .itembase .typeitem img[data-v-f1296028]{height:13px;margin-right:12px;width:13px}.leftsearchbase .itembase .typeitem h3[data-v-f1296028]{font-size:14px;font-weight:400}.leftsearchbase .itembase .meaitemtype[data-v-f1296028]{color:rgba(0,0,0,.8);padding:0 0 0 20px}.leftsearchbase .itembase .meaitemtype img[data-v-f1296028]{margin-left:12px;margin-right:0}.leftsearchbase .itembase .mgb20[data-v-f1296028]{margin-bottom:10px}.mealeftsearch[data-v-f1296028]{margin-left:30px;margin-right:auto}.capbase[data-v-f1296028]{margin-right:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.capbase .capitem[data-v-f1296028]{border:solid #d8d8d8;border-width:0 0 1px;font-size:14px}.capbase .capitem .capname[data-v-f1296028]{align-items:center;cursor:pointer;display:flex;font-weight:900;height:34px;justify-content:space-between}.capbase .capitem .capname i[data-v-f1296028]{color:#000}.capbase .capitem .captype[data-v-f1296028]{align-items:center;color:rgba(0,0,0,.8);cursor:pointer;display:flex;height:30px;padding:0 20px 0 0;width:100%}.capbase .capitem .captype img[data-v-f1296028]{height:13px;margin-right:12px;width:13px}.capbase .capitem .mgb20[data-v-f1296028]{margin-bottom:10px}.meacap[data-v-f1296028]{margin-left:30px;margin-right:auto}.meacap .capitem .captype[data-v-f1296028]{padding-right:0}.meacap .capitem .captype img[data-v-f1296028]{margin-left:12px;margin-right:0}', ""]), r.locals = {}, t.exports = r
        },
        736: function(t, e, o) {
            "use strict";
            o(506)
        },
        737: function(t, e, o) {
            var r = o(20),
                n = o(96),
                c = o(507),
                l = o(508),
                d = o(509),
                f = r((function(i) {
                    return i[1]
                })),
                m = n(c),
                v = n(l),
                x = n(d);
            f.push([t.i, '@font-face{font-family:"Avenir";font-weight:400;src:url(' + m + ') format("truetype")}@font-face{font-family:"DIN";font-weight:400;src:url(' + v + ') format("truetype")}@font-face{font-family:"HarmonyOS";font-weight:400;src:url(' + x + ') format("truetype")}body[data-v-247b6695]{background:#000;font-family:Avenir;margin:0;padding:0}[data-v-247b6695]:root{--pc-size:1920;--mb-size:1100}li[data-v-247b6695],ul[data-v-247b6695]{list-style:none;margin:0;padding:0}.el-col-sm-6[data-v-247b6695]{float:left;padding:0 8px;width:25%}.section-kv[data-v-247b6695]{height:46.875vw;overflow:hidden;position:relative}.section-kv .figure-1[data-v-247b6695]{height:auto;position:relative;width:100vw;z-index:1}.section-kv .figur-box[data-v-247b6695],.section-kv .figure-1[data-v-247b6695]{left:50%;top:50%;transform:translate(-50%,-50%)}.section-kv .figur-box[data-v-247b6695]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:0 auto;max-width:1200px;padding:0 32px;position:absolute;width:100%;z-index:10}.section-kv .figur-box .figure-tag[data-v-247b6695]{align-items:center;border:1px solid #c9af62;border-radius:119px;box-sizing:border-box;color:#000;color:#c9af62;display:flex;font-size:18.5px;font-weight:900;height:29px;justify-content:center;opacity:1;width:134px}.section-kv .figur-box .figure-slogan[data-v-247b6695]{color:#fff;font-size:46px;font-weight:800;line-height:110%;margin:10px 0 0}.section-kv .figur-box .figure-h2[data-v-247b6695]{color:#fff;font-size:22px;line-height:130%}.section-kv .figur-box .figure-h2 sup[data-v-247b6695]{font-family:"HarmonyOS";font-size:22px}.section-kv .figur-box .v-title[data-v-247b6695]{font-size:3.38542vw;margin-top:1.35417vw}.section-fast[data-v-247b6695]{background:#000;overflow:hidden;padding:120px 0;position:relative}.section-fast .section-box[data-v-247b6695]{display:grid;grid:"left top top top top""left section section section2 section2";margin:0 auto;max-width:1200px;grid-gap:15px}.section-fast .section-box .item[data-v-247b6695]{align-items:self-start;background:#0d0d0d;border-radius:28px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;padding:40px;position:relative;text-align:left}.section-fast .section-box .item .item-title[data-v-247b6695]{text-align:center;width:100%}.section-fast .section-box .item .item-title h2[data-v-247b6695]{color:#fff;display:inline-block;font-size:42px;font-weight:900;letter-spacing:0;line-height:120%}.section-fast .section-box .item .item-title h2[data-v-247b6695],.section-fast .section-box .item .item-title h2.k8[data-v-247b6695],.section-fast .section-box .item .item-title h2.v4[data-v-247b6695]{background:linear-gradient(90deg,#fff 3%,#adfffa 30%,#fff9ba 60%,#fcd8ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.section-fast .section-box .item .item-title p[data-v-247b6695]{color:#fff;font-size:24px;font-weight:900;line-height:120%;margin-top:0}.section-fast .section-box .item .item-title p.p1[data-v-247b6695]{margin-top:5px}.section-fast .section-box .item .item-title p.p2[data-v-247b6695]{margin-top:0}.section-fast .section-box .item .item-cont[data-v-247b6695]{color:#fff;font-size:42px;font-weight:800;letter-spacing:0;line-height:47px;text-align:left;width:100%}.section-fast .section-box .item .item-cont li[data-v-247b6695]{margin-top:15px}.section-fast .section-box .item .item-cont h2[data-v-247b6695]{background:linear-gradient(90deg,#fff 3%,#adfffa 30%,#fff9ba 60%,#fcd8ff);-webkit-background-clip:text;font-family:DIN;font-size:38px;font-weight:700;line-height:100%;text-indent:-3px;-webkit-text-fill-color:transparent;background-clip:text;display:inline-block}.section-fast .section-box .item .item-cont p[data-v-247b6695]{font-size:20px;font-weight:400;line-height:100%;margin-bottom:8px}.section-fast .section-box .item1[data-v-247b6695]{background:url(https://www-oss.lexar.com/lexar/zt/images/zt/section2-img-1.png?x-oss-process=image/resize,w_1920/format,webp) no-repeat;background-size:cover;grid-area:left;height:769px;padding:78px 45px;width:415px}.section-fast .section-box .item2[data-v-247b6695]{background:url(https://www-oss.lexar.com/lexar/zt/images/zt/section2-img-2.png?x-oss-process=image/resize,w_1920/format,webp) no-repeat;background-size:cover;grid-area:top;height:341px;justify-content:center;width:780px}.section-fast .section-box .item3[data-v-247b6695]{background:url(https://www-oss.lexar.com/lexar/zt/images/zt/section2-img-3.png?x-oss-process=image/resize,w_1920/format,webp) no-repeat bottom;background-color:#070707;background-size:cover;grid-area:section;height:413px;padding:45px 50px;width:382px}.section-fast .section-box .item2 .item-title[data-v-247b6695],.section-fast .section-box .item3 .item-title[data-v-247b6695],.section-fast .section-box .item4 .item-title[data-v-247b6695]{font-size:30px;line-height:32px}.section-fast .section-box .item4[data-v-247b6695]{background:url(https://www-oss.lexar.com/lexar/zt/images/zt/section2-img-4.png?x-oss-process=image/resize,w_1920/format,webp) no-repeat bottom;background-size:cover;grid-area:section2;height:413px;width:382px}.section-fast .section-box .item4 .item-title[data-v-247b6695]{text-align:center;width:100%}.section-moments[data-v-247b6695]{height:56.25vw;line-height:0;position:relative}.section-moments .overlay[data-v-247b6695]{background:#000;height:100%;left:0;mix-blend-mode:darken;position:absolute;top:0;width:100%}.section-moments .shadow-box[data-v-247b6695]{background:rgba(0,0,0,.5);height:100%;left:0;position:absolute;top:0;width:100%}.section-moments .figur-box[data-v-247b6695]{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:10}.section-moments .figur-box .figure-title[data-v-247b6695]{color:#fff;font-size:110px;font-weight:700;line-height:100%;text-align:center;width:990px}.section-moments .figur-box .figure-cont[data-v-247b6695]{color:#fff;font-size:24px;font-weight:500;line-height:140%;text-align:center;width:896px}.section-quality[data-v-247b6695]{background:#000;overflow:hidden;padding-top:123px;position:relative}.section-quality1[data-v-247b6695]{overflow:visible;overflow:initial;padding:294px 0 0;position:relative;z-index:1}.section-quality6[data-v-247b6695]{padding:90px 0 294px}.section-quality .section-box[data-v-247b6695]{margin:0 auto;max-width:1200px}.section-quality .box-title[data-v-247b6695]{color:#fff;font-size:85px;font-weight:700;line-height:100%;text-align:center}.section-quality .item-list[data-v-247b6695]{margin-top:0}.section-quality .item-list li[data-v-247b6695]{display:flex;justify-content:space-between}.section-quality .item-list li .pic[data-v-247b6695]{border-radius:20px;line-height:0;overflow:hidden;transform-origin:bottom left}.section-quality .item-list li.reverse[data-v-247b6695]{flex-direction:row-reverse}.section-quality .item-list .cont[data-v-247b6695]{display:flex;flex-direction:column;justify-content:center;width:430px}.section-quality .item-list .cont .item-t[data-v-247b6695]{color:#fff;font-size:45px;font-weight:700;margin-bottom:30px}.section-quality .item-list .cont .item-subt[data-v-247b6695]{color:#fff;font-size:28px;font-weight:700;margin-bottom:22px}.section-quality .item-list .cont .item-c[data-v-247b6695]{color:#bdbdbd;font-size:22px;font-weight:500}.section-quality .item-list .pic[data-v-247b6695]{width:708px}.section-quality .item-list .pic video[data-v-247b6695]{width:100%}.section-born[data-v-247b6695]{height:56.25vw;overflow:hidden;position:relative}.section-born .figur-box[data-v-247b6695]{align-items:center;background:rgba(0,0,0,.5);box-sizing:border-box;display:flex;flex-direction:column;height:100%;justify-content:center;left:0;margin:0 auto;position:absolute;top:0;width:100%;z-index:10}.section-born .figur-box .figure-title[data-v-247b6695]{color:#fff;font-size:85px;font-weight:700;line-height:100%;margin:0 auto 25px;text-align:center;width:1070px}.section-born .figur-box .figure-cont[data-v-247b6695]{box-sizing:border-box;color:#fff;font-size:24px;font-weight:500;line-height:120%;margin:0 auto;text-align:center;width:740px}.section-superior-title[data-v-247b6695]{background:#000;position:relative}.section-superior-title .figure-box[data-v-247b6695]{margin:0 auto;padding:294px 0 123px;width:900px}.section-superior-title .figure-box .figure-h2[data-v-247b6695]{color:#fff;font-size:85px;font-weight:700;line-height:110%;margin-bottom:30px;text-align:center;width:100%}.section-superior-title .figure-box .figure-p[data-v-247b6695]{color:#fff;font-size:24px;font-weight:500;text-align:center;width:100%}.section-superior[data-v-247b6695]{background:#000;position:relative}.section-superior .postion-box[data-v-247b6695]{background:rgba(0,0,0,.5);height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}.section-superior .figure-box[data-v-247b6695]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;margin:0 auto;text-align:center;width:1200px}.section-superior .figure-box .figure-h2[data-v-247b6695]{color:#fff;font-size:85px;font-weight:700;line-height:110%;margin:0 auto 29px;width:750px}.section-superior .figure-box .figure-p[data-v-247b6695]{color:#fff;font-size:24px;font-weight:500;margin:0 auto;width:690px}.section-superior .frame-box[data-v-247b6695]{line-height:0;position:relative;z-index:2}.section-superior .figure-1[data-v-247b6695]{position:relative;width:100%}.section-superior .figure-1 canvas[data-v-247b6695]{width:100%}.section-superior .figure-feature[data-v-247b6695]{height:100%;left:50%;max-width:1200px;position:absolute;top:0;transform:translate(-50%);width:100%}.section-superior .figure-feature .figure-feature-item1[data-v-247b6695]{left:5%;margin-top:-30px;position:absolute;top:50%}.section-superior .figure-feature .figure-feature-item2[data-v-247b6695]{margin-top:-30px;position:absolute;right:5%;top:50%}.section-superior .figure-feature .figure-feature-item[data-v-247b6695]{align-items:center;display:flex;flex-direction:column;text-align:center}.section-superior .figure-feature .figure-feature-item h2[data-v-247b6695]{background:linear-gradient(90deg,#fff 3%,#adfffa 30%,#fff9ba 60%,#fcd8ff);-webkit-background-clip:text;color:#fff;font-family:DIN;font-size:66px;font-weight:500;line-height:100%;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:5px}.section-superior .figure-feature .figure-feature-item p[data-v-247b6695]{color:#fff;font-size:28px;line-height:100%}.section-superior .video-box[data-v-247b6695]{border-radius:.5vw;height:25.7785%;left:50%;margin-left:.4%;overflow:hidden;position:absolute;top:50%;transform:translate(-50%,-50%);width:19.2992%;z-index:1}.section-superior .video-box .v-index[data-v-247b6695]{left:50%;max-width:none;-o-object-fit:cover;object-fit:cover;position:absolute;top:50%;transform:translate(-50%,-50%);width:100vw}.section-cfa[data-v-247b6695]{background:#000;position:relative}.section-cfa .figure-box[data-v-247b6695]{margin:0 auto;padding:294px 0;width:1200px}.section-cfa .figure-box .figure-h2[data-v-247b6695]{color:#fff;font-size:85px;font-weight:700;line-height:110%;margin-bottom:123px;text-align:center}.section-cfa .figure-box .figure-p[data-v-247b6695]{border-radius:10px;color:#fff;font-size:24px;font-weight:500;overflow:hidden;padding-top:50px;text-align:center}.section-cfa .figure-1[data-v-247b6695]{border-radius:10px;height:572px;margin:0 auto;max-width:1200px;overflow:hidden;width:1200px}.section-cfa .figure-1 video[data-v-247b6695]{width:100%}.section-workflow[data-v-247b6695]{background:#000;box-sizing:border-box;height:38vw;position:relative}.section-workflow .figure-box[data-v-247b6695]{margin:0 auto;padding:0 0 90px;width:1200px}.section-workflow .figure-box .figure-h2[data-v-247b6695]{color:#fff;font-size:85px;font-weight:700;line-height:110%;margin-bottom:30px;text-align:center}.section-workflow .figure-box .figure-p[data-v-247b6695]{color:#fff;font-size:24px;font-weight:500;text-align:center}.section-workflow .figure-1[data-v-247b6695]{left:50%;margin:0 auto;position:absolute;transform:translateX(-50%);width:1200px}.section-workflow .figure-2[data-v-247b6695],.section-workflow .figure-3[data-v-247b6695],.section-workflow .figure-4[data-v-247b6695],.section-workflow .figure-5[data-v-247b6695]{left:0;position:fixed;top:0;width:100%}.section-frame[data-v-247b6695]{background:#000;padding:290px 0 0;position:relative}.section-frame .figure-box[data-v-247b6695]{margin:0 auto 126px;width:1200px}.section-frame .figure-box .figure-h2[data-v-247b6695]{color:#fff;font-size:85px;font-weight:700;line-height:120%;margin-bottom:30px;text-align:center}.section-frame .figure-box .figure-p[data-v-247b6695]{color:#fff;font-size:24px;font-weight:500;text-align:center}.section-frame .figure-1[data-v-247b6695]{margin:0 auto;width:100%}.note-section[data-v-247b6695]{color:#565656;font-size:18px;line-height:28px;margin:0 auto;padding:193px 0;width:1200px}.section-labs[data-v-247b6695]{background:#000;font-size:20px;padding:294px 0 173px;position:relative}.section-labs .figure-box[data-v-247b6695]{margin:0 auto;width:1188px}.section-labs .figure-box .figure-h2[data-v-247b6695]{color:#fff;font-size:85px;font-weight:700;margin-bottom:123px;text-align:center}.section-labs .figure-box .figure-p[data-v-247b6695]{color:#bdbdbd;font-size:24px;font-weight:700;margin:0 auto;padding-top:50px;text-align:center;width:830px}.section-labs .figure-1[data-v-247b6695]{background:#313131;border-radius:10px;color:#fff;line-height:0;margin:0 auto;overflow:hidden;width:1200px}.section-media[data-v-247b6695]{background:url(https://www-oss.lexar.com/lexar/zt/images/zt/section-bg.jpg?x-oss-process=image/resize,w_1920/format,webp) no-repeat 50%;background-size:cover;padding:164px 0 150px}.section-media .media-min[data-v-247b6695]{margin:0 auto;width:1200px}.section-media .figure-title[data-v-247b6695]{background:linear-gradient(90deg,#fff 3%,#adfffa 30%,#fff9ba 60%,#fcd8ff);-webkit-background-clip:text;color:#fff;font-size:110px;font-weight:800;line-height:100%;margin-bottom:80px;text-align:center;-webkit-text-fill-color:transparent}.section-media .figure-list[data-v-247b6695]{display:flex;flex-wrap:wrap;margin:-10px}.section-media .figure-list li[data-v-247b6695]{border:5px solid #fff;border-radius:10px;box-sizing:border-box;display:flex;flex-direction:column;height:393px;justify-content:space-between;margin:10px;opacity:.4;padding:30px 22px;position:relative;width:284px}.section-media .figure-list li[data-v-247b6695]:hover{opacity:1}.section-media .figure-list li[data-v-247b6695]:hover:after{border:5px solid transparent;-o-border-image:linear-gradient(90deg,#fff 3%,#adfffa 30%,#fff9ba 60%,#fcd8ff) 5;border-image:linear-gradient(90deg,#fff 3%,#adfffa 30%,#fff9ba 60%,#fcd8ff) 5;border-radius:10px;bottom:0;box-sizing:content-box;clip-path:inset(0 round 10px);content:"";display:block;height:100%;left:-5px;position:absolute;right:0;top:-5px;width:100%}.section-media .figure-list li .cont[data-v-247b6695]{color:#fff;font-size:18px;font-weight:900;line-height:140%;text-align:center}.section-media .figure-list li .motto[data-v-247b6695]{color:#fff;font-size:18px;font-weight:900;text-align:right}video[data-v-247b6695]{width:100%}.section-frame2[data-v-247b6695]{height:100vh;overflow:hidden;position:relative;width:100%}.section-frame2 .shock[data-v-247b6695]{bottom:60px;color:#fff;font-size:36px;font-weight:900;left:169px;position:absolute}.section-frame2 .shock p[data-v-247b6695]{display:none}.section-frame2 .figure-1[data-v-247b6695]{height:100vh;width:100vw}.section-frame2 .figure-1[data-v-247b6695],.section-frame2 .figure-1 .seq[data-v-247b6695]{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.section-frame2 .figure-1 .seq[data-v-247b6695]{height:100%}.overlays[data-v-247b6695]{background:rgba(0,0,0,.5);height:100vh;left:0;top:0;width:100%;z-index:99}.overlays[data-v-247b6695],.sticky-nav[data-v-247b6695]{position:fixed}.sticky-nav .title[data-v-247b6695]{color:#999}.load-banner[data-v-247b6695]{visibility:visible}.load-banner .figur-box[data-v-247b6695]{opacity:0;transition:opacity 1s ease-in-out}.load-banner .figur-boxshow[data-v-247b6695]{opacity:1}.load-full[data-v-247b6695]{visibility:hidden}.speacial-body[data-v-247b6695]{background:#000;font-family:Avenir;margin:0;padding:0}.sticky-nav[data-v-247b6695]{background:#262626;height:50px;position:sticky;top:70px;width:100%;z-index:99}.sticky-nav .min-box[data-v-247b6695]{align-items:center;display:flex;justify-content:space-between;margin:0 auto;max-width:1440px}.sticky-nav .menuBox[data-v-247b6695]{display:none}.sticky-nav .title[data-v-247b6695]{color:#fff;font-size:14px;margin-left:0}.sticky-nav .menu[data-v-247b6695]{align-items:center;display:flex;height:50px}.sticky-nav .menu a[data-v-247b6695]{color:#999;display:inline-block;font-size:14px;margin:0 30px 0 0}.sticky-nav .menu a[data-v-247b6695]:hover{color:#fff}.sticky-nav .menu a.buy[data-v-247b6695]{background:#da291c;border-radius:9px;color:#fff;font-size:12px;height:36px;line-height:36px;margin:0;text-align:center;width:120px}.sticky-nav .menu a.active_anchor[data-v-247b6695]{color:#fff}@media screen and (max-width:768px){.sticky-nav[data-v-247b6695]{background:#fff;height:auto;padding:5px 20px;top:55px}.sticky-nav .min-box[data-v-247b6695]{display:none}.sticky-nav .menuBox[data-v-247b6695]{align-items:center;display:flex;justify-content:space-between}.sticky-nav .menuBox .menuDrop[data-v-247b6695]{color:#000;font-size:14px;font-weight:600;text-transform:capitalize}.sticky-nav .menuBox .buy[data-v-247b6695]{background:#da291c;border-radius:18px;color:#fff;font-size:12px;height:36px;line-height:36px;text-align:center;width:100px}}@media only screen and (min-width:769px)and (max-width:1440px){.sticky-nav .title[data-v-247b6695]{margin-left:20px}.sticky-nav .menu a[data-v-247b6695]{margin-right:1.56vw}.sticky-nav .menu a.buy[data-v-247b6695]{border-radius:.468vw;font-size:.624vw;height:1.875vw;line-height:1.875vw;width:6.24vw}}', ""]), f.locals = {}, t.exports = f
        },
        738: function(t, e, o) {
            "use strict";
            o(510)
        },
        739: function(t, e, o) {
            var r = o(20)((function(i) {
                return i[1]
            }));
            r.push([t.i, "video{width:100%}", ""]), r.locals = {}, t.exports = r
        }
    }
]);