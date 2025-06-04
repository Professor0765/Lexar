(window.webpackJsonp = window.webpackJsonp || []).push([
    [43], {
        1021: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = r(8),
                n = r(4),
                d = (r(40), r(30), r(23), r(33), r(13), r(34), r(32)),
                l = r(51),
                c = {
                    data: function() {
                        var t = this;
                        return {
                            adiuStatus: 0,
                            searchInput: "",
                            kvOption: {
                                pagination: {
                                    el: ".bannerWarp .swiper-pagination",
                                    clickable: !0
                                },
                                loop: !0,
                                initialSlide: 0,
                                observer: !1,
                                observeParents: !1,
                                navigation: {
                                    nextEl: ".bannerWarp .swiper-button-next",
                                    prevEl: ".bannerWarp .swiper-button-prev"
                                }
                            },
                            lifeOption: {
                                spaceBetween: 15,
                                initialSlide: 0,
                                slidesPerView: "auto",
                                navigation: {
                                    nextEl: ".kvWarp .swiper-button-next",
                                    prevEl: ".kvWarp .swiper-button-prev"
                                }
                            },
                            proOption: {
                                autoHeight: !0,
                                slidesPerView: "auto",
                                pagination: {
                                    el: ".swiper-paginations",
                                    clickable: !0,
                                    bulletClass: "my-bullet",
                                    bulletActiveClass: "my-bullet-active"
                                },
                                on: {
                                    slideChangeTransitionStart: function() {
                                        t.proCut = this.realIndex
                                    }
                                },
                                initialSlide: 0,
                                direction: "vertical"
                            },
                            proOption2: {
                                pagination: {
                                    el: ".swiper-paginations",
                                    clickable: !0,
                                    bulletClass: "my-bullet",
                                    bulletActiveClass: "my-bullet-active"
                                },
                                slidesPerView: "auto",
                                initialSlide: 0,
                                direction: "vertical"
                            },
                            proOption3: {
                                pagination: {
                                    el: ".pro-banner .swiper-pagination",
                                    clickable: !0
                                },
                                initialSlide: 0
                            },
                            proCut: 0,
                            dataBase: {
                                kvData: [],
                                popular: [],
                                category: [],
                                solution: []
                            },
                            videoPlay: !1,
                            searchType: 0,
                            homeVideoUrl: "",
                            windowWidth: 0,
                            showVideo: !1,
                            isMea: d.f,
                            openZenDesk: !1
                        }
                    },
                    head: function() {
                        return {
                            title: Object(d.e)().title,
                            meta: [{
                                property: "og:title",
                                content: Object(d.e)().title
                            }, {
                                property: "og:description",
                                content: Object(d.e)().desc
                            }, {
                                hid: "description",
                                name: "description",
                                content: Object(d.e)().desc
                            }, {
                                hid: "keywords",
                                name: "keywords",
                                content: Object(d.e)().keywords
                            }],
                            script: [{
                                type: "application/ld+json",
                                innerHTML: JSON.stringify(l.j)
                            }]
                        }
                    },
                    asyncData: function(t) {
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            var r, n, d, l, c, v, h, w, m, f, x, y, _, k, W;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.i18n, n = t.$axios, d = t.error, l = r.locale, c = "", c = l && l.includes("zh_CN") ? "https://prod-www-lexar-com.oss-cn-hongkong.aliyuncs.com/lexar/videos/TVC/OW-Lexar%20Brand%20TVC_CH_Final%20-%2001.mp4" : "https://prod-www-lexar-com.oss-cn-hongkong.aliyuncs.com/lexar/videos/TVC/OW-Lexar%20Brand%20TVC_EN_Final_%20-%2001.mp4", v = "", h = "", w = "", m = "", n.defaults.baseURL && n.defaults.baseURL.includes("api") ? (v = "/home/banner", h = "/home/category", w = "/home/popular", m = "/home/solution") : (v = "/api/home/banner", h = "/api/home/category", w = "/api/home/popular", m = "/api/home/solution"), e.prev = 9, e.next = 12, Promise.all([n.get(v), n.get(h), n.get(w), n.get(m)]);
                                    case 12:
                                        return f = e.sent, x = Object(o.a)(f, 4), y = x[0], _ = x[1], k = x[2], W = x[3], e.abrupt("return", {
                                            dataBase: {
                                                kvData: y.data,
                                                category: _.data,
                                                popular: k.data,
                                                solution: W.data
                                            },
                                            homeVideoUrl: c
                                        });
                                    case 21:
                                        e.prev = 21, e.t0 = e.catch(9), d({
                                            statusCode: 500,
                                            message: "获取数据时发生错误：" + e.t0.message
                                        });
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [9, 21]
                            ])
                        })))()
                    },
                    methods: {
                        handleBannerClick: function(t) {
                            window.location.href = t
                        },
                        proSlider: function(t) {
                            this.proCut = t, this.$refs.mySwiper.$swiper.slideTo(t, 600, !1)
                        },
                        searchTab: function(t) {
                            this.clearForm1(), this.clearForm2(), this.searchType = t, this.searchInput = ""
                        },
                        inputChange: function() {
                            if (0 != this.searchInput.length) {
                                var t = {
                                    keyword: this.searchInput
                                };
                                0 == this.searchType ? this.$router.push({
                                    path: "/compatibility2",
                                    query: t
                                }) : this.$router.push({
                                    path: "/compatibility3",
                                    query: t
                                })
                            }
                        },
                        playAudio: function(t, e) {
                            var r = document.getElementById(t);
                            r.muted = !1, this.adiuStatus = e, 1 == this.adiuStatus ? r.volume = 0 : (r.play(), r.volume = 1)
                        },
                        handleResize: function() {
                            this.windowWidth = window.innerWidth
                        },
                        pageBurial: function(t, e) {
                            var r = "pc" == this.$store.state.equipment ? "pc" : "app",
                                desc = "";
                            "empty" === e && (desc = "BN_".concat(l.b, "_pt_click_").concat(t, "_").concat(r)), "left" === e && (desc = "BN_".concat(l.b, "_tb_click_left_").concat(r)), "right" === e && (desc = "BN_".concat(l.b, "_tb_click_right_").concat(r)), "bt1" === e && (desc = "BN_".concat(l.b, "_").concat(t, "_bt1_click_").concat(r)), "bt2" === e && (desc = "BN_".concat(l.b, "_").concat(t, "_bt2_click_").concat(r)), e && t && ("left" === e || "right" === e ? this.$gtag("event", desc) : this.$gtag("event", desc, {
                                event_label: t
                            }))
                        },
                        openZendeskChat: function() {
                            "undefined" != typeof zE && (this.openZenDesk ? (this.openZenDesk = !1, zE("messenger", "close")) : (this.openZenDesk = !0, zE("messenger", "open")))
                        }
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("resize", this.handleResize)
                    },
                    mounted: function() {
                        var t = this;
                        "pc" == this.$store.state.equipment && (this.windowWidth = window.innerWidth), window.addEventListener("resize", this.handleResize), "zh_CN" == this.$i18n.locale && Object(d.c)(), "function" == typeof zE && "en_WW" == this.$i18n.locale && zE("messenger:get", "isOpen", (function(e) {
                            t.openZenDesk = e
                        }))
                    }
                },
                v = c,
                h = (r(654), r(657), r(659), r(7)),
                component = Object(h.a)(v, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("div", {
                        staticClass: "bannerWarp"
                    }, [t.dataBase.kvData.length ? e("Swiper", {
                        ref: "mySwiperkv",
                        attrs: {
                            options: t.kvOption
                        }
                    }, [t._l(t.dataBase.kvData, (function(r, o) {
                        return e("SwiperSlide", {
                            key: o,
                            staticClass: "views"
                        }, [1 == r.materialType ? e("div", {
                            staticClass: "item banner-interactive-layer",
                            on: {
                                click: function(e) {
                                    return t.handleBannerClick(r.buttonLinkUrl)
                                }
                            }
                        }, [e("picture", ["pc" != t.$store.state.equipment ? e("source", {
                            attrs: {
                                media: "(max-width: 768px)",
                                srcset: (r.mobileImageUrl || r.imageUrl) + "?x-oss-process=image/resize,w_768/format,webp"
                            }
                        }) : t._e(), t._v(" "), "pc" == t.$store.state.equipment ? e("source", {
                            attrs: {
                                media: "(max-width: 1920px)",
                                srcset: r.imageUrl + "?x-oss-process=image/resize,w_1920/format,webp"
                            }
                        }) : t._e(), t._v(" "), "pc" == t.$store.state.equipment ? e("source", {
                            attrs: {
                                media: "(max-width: 3840px)",
                                srcset: r.imageUrl + "?x-oss-process=image/resize,w_3840/format,webp"
                            }
                        }) : t._e(), t._v(" "), e("img", {
                            staticClass: "img-bg",
                            staticStyle: {
                                "object-fit": "cover"
                            },
                            attrs: {
                                src: ("pc" == t.$store.state.equipment ? r.imageUrl : r.mobileImageUrl || r.imageUrl) + "?x-oss-process=image/resize,w_3840/format,webp",
                                width: "100%",
                                fetchpriority: "high",
                                loading: "eager",
                                decoding: "async"
                            }
                        })]), t._v(" "), e("div", {
                            staticClass: "content"
                        }, [e("div", {
                            class: "flex-bottom ".concat(t.isMea && "meafb")
                        }, [e("h1", {
                            staticClass: "title",
                            domProps: {
                                innerHTML: t._s(r.title)
                            }
                        }), t._v(" "), e("h4", {
                            staticClass: "subtitle",
                            domProps: {
                                innerHTML: t._s(r.subTitle)
                            }
                        }), t._v(" "), e("div", {
                            class: "fun ".concat(t.isMea && "meaf")
                        }, [r.buttonEnable && r.buttonName ? e("a", {
                            attrs: {
                                href: r.buttonLinkUrl
                            }
                        }, [t._v(t._s(r.buttonName)), e("span", {
                            class: "icon-right-white bigspan ".concat(t.isMea && "mearightwhite")
                        })]) : t._e(), t._v(" "), r.button2Enable && r.button2Name ? e("a", {
                            attrs: {
                                href: r.button2LinkUrl
                            }
                        }, [t._v(t._s(r.button2Name)), e("span", {
                            class: "icon-right-white bigspan ".concat(t.isMea && "mearightwhite")
                        })]) : t._e()])])])]) : t._e(), t._v(" "), 2 == r.materialType ? e("a", {
                            staticClass: "item",
                            attrs: {
                                href: r.buttonLinkUrl
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.pageBurial(r.bannerName, "empty")
                                }
                            }
                        }, [e("video", {
                            staticStyle: {
                                width: "100%",
                                height: "100%",
                                "object-fit": "cover"
                            },
                            attrs: {
                                id: "myVideo" + o,
                                poster: r.mobileCoverUrl + "?x-oss-process=image/resize,quality,q_90",
                                preload: "auto",
                                autoplay: "",
                                muted: "",
                                loop: "",
                                playsinline: "true",
                                "webkit-playsinline": "true",
                                src: "pc" == t.$store.state.equipment ? r.videoUrl : r.mobileVideoUrl
                            },
                            domProps: {
                                muted: !0
                            }
                        }, ["pc" != t.$store.state.equipment ? e("source", {
                            attrs: {
                                media: "(max-width: 768px)",
                                srcset: (r.mobileCoverUrl || r.coverUrl) + "?x-oss-process=image/resize,w_768/quality,q_90"
                            }
                        }) : t._e(), t._v(" "), "pc" == t.$store.state.equipment ? e("source", {
                            attrs: {
                                media: "(max-width: 3840px)",
                                srcset: r.coverUrl + "?x-oss-process=image/resize,w_3840/quality,q_90"
                            }
                        }) : t._e()]), t._v(" "), e("div", {
                            staticClass: "content"
                        }, [e("div", {
                            class: "flex-bottom ".concat(t.isMea && "meafb")
                        }, [e("h1", {
                            staticClass: "title"
                        }, [t._v(t._s(r.title))]), t._v(" "), e("h4", {
                            staticClass: "subtitle"
                        }, [t._v(t._s(r.subTitle))]), t._v(" "), e("div", {
                            class: "fun ".concat(t.isMea && "meaf")
                        }, [r.buttonEnable && r.buttonName ? e("a", {
                            attrs: {
                                href: r.buttonLinkUrl
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.pageBurial(r.buttonName, "bt1")
                                }
                            }
                        }, [t._v(t._s(r.buttonName)), e("span", {
                            class: "icon-right-white bigspan ".concat(t.isMea && "mearightwhite")
                        })]) : t._e(), t._v(" "), r.button2Enable && r.button2Name ? e("a", {
                            attrs: {
                                href: r.button2LinkUrl
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.pageBurial(r.button2Name, "bt2")
                                }
                            }
                        }, [t._v(t._s(r.button2Name)), e("span", {
                            class: "icon-right-white ".concat(t.isMea && "mearightwhite")
                        })]) : t._e()])])])]) : t._e()])
                    })), t._v(" "), e("div", {
                        staticClass: "swiper-pagination",
                        attrs: {
                            slot: "pagination"
                        },
                        slot: "pagination"
                    }), t._v(" "), e("div", {
                        class: "swiper-button-prev ".concat(t.isMea && "measwiper-prev"),
                        attrs: {
                            slot: "button-prev"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.pageBurial("bannerName", "left")
                            }
                        },
                        slot: "button-prev"
                    }), t._v(" "), e("div", {
                        class: "swiper-button-next ".concat(t.isMea && "measwiper-next"),
                        attrs: {
                            slot: "button-next"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.pageBurial("bannerName", "right")
                            }
                        },
                        slot: "button-next"
                    })], 2) : t._e()], 1), t._v(" "), e("div", {
                        staticClass: "kvWarp",
                        staticStyle: {
                            position: "relative"
                        }
                    }, [e("div", {
                        staticClass: "swiperBox"
                    }, [t.dataBase.popular.length ? e("Swiper", {
                        attrs: {
                            options: t.lifeOption
                        }
                    }, [t._l(t.dataBase.popular, (function(r) {
                        return e("SwiperSlide", {
                            key: r.title
                        }, [r.buttonLinkUrl ? e("a", {
                            attrs: {
                                href: r.buttonLinkUrl
                            }
                        }, [e("div", {
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "pic"
                        }, [e("el-image", {
                            attrs: {
                                fit: "cover",
                                src: r.imageUrl + "?x-oss-process=image/format,webp/resize,l_470",
                                width: "100%",
                                fetchpriority: "high",
                                lazy: ""
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "bottom"
                        }, [e("h4", {
                            attrs: {
                                title: r.title
                            },
                            domProps: {
                                innerHTML: t._s(r.title)
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "more"
                        }, [t._v("\n                  " + t._s(r.buttonName)), e("span", {
                            class: "icon-right-black ".concat(t.isMea && "meaidon-right")
                        })])])])]) : e("div", {
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "pic"
                        }, [e("el-image", {
                            attrs: {
                                fit: "cover",
                                src: r.imageUrl + "?x-oss-process=image/format,webp/resize,l_470",
                                width: "100%",
                                lazy: ""
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "bottom"
                        }, [e("h4", {
                            attrs: {
                                title: r.title
                            },
                            domProps: {
                                innerHTML: t._s(r.title)
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "more"
                        }, [t._v("\n                " + t._s(r.buttonName)), e("span", {
                            class: "icon-right-black ".concat(t.isMea && "meaidon-right")
                        })])])])])
                    })), t._v(" "), t.dataBase.popular.length > 3 ? e("div", {
                        staticClass: "swiper-button-prev",
                        attrs: {
                            slot: "button-prev"
                        },
                        slot: "button-prev"
                    }) : t._e(), t._v(" "), t.dataBase.popular.length > 3 ? e("div", {
                        staticClass: "swiper-button-next",
                        attrs: {
                            slot: "button-next"
                        },
                        slot: "button-next"
                    }) : t._e()], 2) : t._e()], 1)]), t._v(" "), "pc" == t.$store.state.equipment && t.homeVideoUrl ? e("div", {
                        staticClass: "moviecon"
                    }, [t.showVideo ? e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "object-fit": "cover",
                            "border-radius": "15px"
                        },
                        attrs: {
                            controls: "",
                            preload: "auto",
                            autoplay: "",
                            src: t.homeVideoUrl,
                            poster: "https://prod-www-lexar-com.oss-cn-hongkong.aliyuncs.com/lexar/videos/TVC/20240930-182825%20%281%29.jpg"
                        }
                    }) : e("img", {
                        staticClass: "defimg",
                        attrs: {
                            src: "https://prod-www-lexar-com.oss-cn-hongkong.aliyuncs.com/lexar/videos/TVC/tvc.webp"
                        },
                        on: {
                            click: function(e) {
                                e.stopPropagation(), t.showVideo = !0
                            }
                        }
                    })]) : t._e(), t._v(" "), "mobile" == t.$store.state.equipment ? e("div", {
                        style: {
                            width: "".concat(t.windowWidth - 56, "px"),
                            height: "".concat(9 * (t.windowWidth - 56) / 16, "px"),
                            margin: "0 28px",
                            marginBottom: "80px"
                        }
                    }, [t.showVideo ? e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "object-fit": "cover",
                            "border-radius": "15px"
                        },
                        attrs: {
                            controls: "",
                            preload: "auto",
                            autoplay: "",
                            src: t.homeVideoUrl
                        }
                    }) : e("img", {
                        staticClass: "defimg",
                        staticStyle: {
                            "border-radius": "15px"
                        },
                        attrs: {
                            src: "https://prod-www-lexar-com.oss-cn-hongkong.aliyuncs.com/lexar/videos/TVC/tvc.webp"
                        },
                        on: {
                            click: function(e) {
                                e.stopPropagation(), t.showVideo = !0
                            }
                        }
                    })]) : t._e(), t._v(" "), "pc" == t.$store.state.equipment ? e("div", {
                        staticClass: "pro-banner pc"
                    }, [e("Swiper", {
                        ref: "mySwiper",
                        staticClass: "proOption",
                        attrs: {
                            options: t.proOption
                        }
                    }, t._l(t.dataBase.solution, (function(r, o) {
                        return e("SwiperSlide", {
                            key: r.title + "@pc",
                            class: "item ".concat(t.isMea && "meaitsem")
                        }, [e("img", {
                            staticClass: "img-bg",
                            attrs: {
                                src: r.imageUrl + "?x-oss-process=image/resize,w_1440/format,webp",
                                width: "100%",
                                loading: "lazy"
                            }
                        }), t._v(" "), e("div", {
                            class: "flex-bottom ".concat(t.isMea && "meafb", " ").concat(t.isMea && "meadesc")
                        }, [e("h2", {
                            staticClass: "title",
                            domProps: {
                                innerHTML: t._s(r.title)
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "cont"
                        }, [e("h4", {
                            staticClass: "subtitle",
                            domProps: {
                                innerHTML: t._s(r.subTitle)
                            }
                        }), t._v(" "), e("div", {
                            class: "fun ".concat(t.isMea && "meaf")
                        }, [e("a", {
                            attrs: {
                                href: r.buttonLinkUrl
                            }
                        }, [t._v(t._s(t.$t("currency.LearnMore"))), e("span", {
                            class: "icon-right-white ".concat(t.isMea && "mearightwhite")
                        })])])])])])
                    })), 1), t._v(" "), e("div", {
                        class: "swiper-custom ".concat(t.isMea && "meacus")
                    }, [e("Swiper", {
                        attrs: {
                            options: t.proOption2
                        }
                    }, t._l(t.dataBase.solution, (function(r, o) {
                        return e("SwiperSlide", {
                            key: o,
                            staticClass: "custom-item",
                            class: t.proCut == o ? "cur" : ""
                        }, [e("div", {
                            staticStyle: {
                                width: "100%",
                                height: "100%"
                            },
                            on: {
                                click: function(e) {
                                    return t.proSlider(o)
                                }
                            }
                        }, [e("el-image", {
                            staticStyle: {
                                width: "100%",
                                height: "100%"
                            },
                            attrs: {
                                src: r.imageUrl,
                                fit: "cover",
                                lazy: ""
                            }
                        })], 1)])
                    })), 1)], 1)], 1) : t._e(), t._v(" "), "mobile" == t.$store.state.equipment ? e("div", {
                        staticClass: "pro-banner mobile"
                    }, [e("Swiper", {
                        staticClass: "proOption",
                        attrs: {
                            options: t.proOption3
                        }
                    }, t._l(t.dataBase.solution, (function(r, o) {
                        return e("SwiperSlide", {
                            key: r.title,
                            staticClass: "item"
                        }, [e("picture", [e("source", {
                            attrs: {
                                media: "(max-width: 768px)",
                                srcset: r.mobileImageUrl + "?x-oss-process=image/resize,w_768/format,webp"
                            }
                        }), t._v(" "), e("img", {
                            staticClass: "img-bg",
                            staticStyle: {
                                "object-fit": "cover"
                            },
                            attrs: {
                                src: r.mobileImageUrl + "?x-oss-process=image/resize,w_768/format,webp",
                                width: "100%",
                                loading: "lazy"
                            }
                        })]), t._v(" "), e("div", {
                            class: "flex-bottom ".concat(t.isMea && "meafb")
                        }, [e("h1", {
                            staticClass: "title",
                            domProps: {
                                innerHTML: t._s(r.title)
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "cont"
                        }, [e("h4", {
                            staticClass: "subtitle",
                            domProps: {
                                innerHTML: t._s(r.subTitle)
                            }
                        }), t._v(" "), e("div", {
                            class: "fun ".concat(t.isMea && "meaf")
                        }, [e("nuxt-link", {
                            attrs: {
                                to: r.buttonLinkUrl
                            }
                        }, [t._v(t._s(t.$t("currency.LearnMore"))), e("span", {
                            class: "icon-right-white ".concat(t.isMea && "mearightwhite")
                        })])], 1)])])])
                    })), 1), t._v(" "), e("div", {
                        staticClass: "swiper-pagination",
                        attrs: {
                            slot: "pagination"
                        },
                        slot: "pagination"
                    })], 1) : t._e(), t._v(" "), e("div", {
                        staticClass: "pro-warp"
                    }, [e("el-row", {
                        staticClass: "pro-list",
                        attrs: {
                            gutter: 16
                        }
                    }, t._l(t.dataBase.category, (function(r, o) {
                        return e("el-col", {
                            key: o,
                            staticClass: "li",
                            attrs: {
                                sm: 0 == o ? 24 : 12,
                                xs: 24
                            }
                        }, [e("div", {
                            staticClass: "item"
                        }, [e("nuxt-link", {
                            attrs: {
                                to: r.buttonLinkUrl
                            }
                        }, [e("div", {
                            staticClass: "cont"
                        }, [e("h3", {
                            domProps: {
                                innerHTML: t._s(r.title)
                            }
                        }), t._v(" "), e("h5", {
                            domProps: {
                                innerHTML: t._s(r.subTitle)
                            }
                        }), t._v(" "), e("nuxt-link", {
                            staticClass: "more",
                            attrs: {
                                to: r.buttonLinkUrl
                            }
                        }, [t._v(t._s(t.$t("currency.LearnMore"))), e("span", {
                            class: "icon-right-black ".concat(t.isMea && "meaidon-right")
                        })])], 1), t._v(" "), e("div", {
                            class: "product ".concat(t.isMea && "meaprod")
                        }, [e("el-image", {
                            staticClass: "img",
                            staticStyle: {
                                height: "100%"
                            },
                            attrs: {
                                fit: "cover",
                                src: r.imageUrl + "?x-oss-process=image/resize,w_768/format,webp",
                                lazy: ""
                            }
                        })], 1)])], 1)])
                    })), 1)], 1), t._v(" "), e("div", {
                        staticStyle: {
                            width: "100%",
                            height: "10vw"
                        }
                    }), t._v(" "), e("client-only", ["en_WW" == t.$i18n.locale ? e("div", {
                        staticClass: "kefubase",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.openZendeskChat.apply(null, arguments)
                            }
                        }
                    }, [e("img", {
                        attrs: {
                            src: t.openZenDesk ? r(465) : "https://qiyukf.nosdn.127.net/sdk/res/kefu/custom/4.png",
                            alt: ""
                        }
                    })]) : t._e(), t._v(" "), "en_WW" == t.$i18n.locale ? e("script", {
                        attrs: {
                            id: "ze-snippet",
                            src: "https://static.zdassets.com/ekr/snippet.js?key=f23574fb-61e8-4e3c-b004-ef157d50cc39"
                        }
                    }) : t._e()])], 1)
                }), [], !1, null, "2d513990", null);
            e.default = component.exports
        },
        466: function(t, e, r) {
            var content = r(655);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(21).default)("00eb5c2f", content, !0, {
                sourceMap: !1
            })
        },
        467: function(t, e, r) {
            var content = r(658);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(21).default)("40cffa79", content, !0, {
                sourceMap: !1
            })
        },
        468: function(t, e, r) {
            var content = r(660);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(21).default)("6a244fba", content, !0, {
                sourceMap: !1
            })
        },
        654: function(t, e, r) {
            "use strict";
            r(466)
        },
        655: function(t, e, r) {
            var o = r(20),
                n = r(96),
                d = r(656),
                l = r(278),
                c = o((function(i) {
                    return i[1]
                })),
                v = n(d),
                h = n(l);
            c.push([t.i, ".system-box[data-v-2d513990] .el-form-item.is-error .el-select{border-color:#f56c6c!important}.banner-interactive-layer[data-v-2d513990]{cursor:pointer}img[data-v-2d513990]{max-width:100%}.moviecon[data-v-2d513990]{border-radius:15px;margin:0 auto 100px;max-width:1440px;padding:0 0 100px;width:76%}.moviecon .defimg[data-v-2d513990]{align-items:center;background-size:cover;border-radius:15px;cursor:pointer;display:flex;justify-content:center;position:relative;width:100%}.bannerWarp[data-v-2d513990]{padding-bottom:2px;position:relative;width:100%}.bannerWarp .content[data-v-2d513990],.bannerWarp .swiper-container[data-v-2d513990]{height:100%;width:100%}.bannerWarp .content[data-v-2d513990]{left:50%;max-width:1440px;position:absolute;top:0;transform:translate(-50%)}.bannerWarp .content .flex-bottom[data-v-2d513990]{bottom:0;left:0;padding:70px 0;position:absolute;text-align:left;width:100%}.bannerWarp .content .meafb[data-v-2d513990]{text-align:right}.bannerWarp .content .play[data-v-2d513990]{margin-bottom:20px;width:17px}.bannerWarp .content h1.title[data-v-2d513990],.bannerWarp .content h2.title[data-v-2d513990]{color:#fff;font-size:36px;font-weight:700;line-height:140%}.bannerWarp .content h4.subtitle[data-v-2d513990]{color:hsla(0,0%,100%,.5);font-size:20px;height:60px;line-height:140%;overflow:hidden}.bannerWarp .content .fun[data-v-2d513990]{display:flex;vertical-align:middle}.bannerWarp .content .fun a[data-v-2d513990]{align-items:center;color:#fff;display:flex;font-size:16px;margin-left:0;margin-right:44px}.bannerWarp .content .fun a img[data-v-2d513990]{margin-left:9px;margin-right:0;width:24px}.bannerWarp .content .meaf a[data-v-2d513990]{margin-left:44px;margin-right:0}.bannerWarp .content .meaf a img[data-v-2d513990]{margin-left:0;margin-right:9px}.bannerWarp .swiper-slide[data-v-2d513990]{align-items:center;background:#fff;display:flex;font-size:18px;justify-content:center;text-align:center}.bannerWarp .views[data-v-2d513990]{height:41.6666666667vw}.bannerWarp .item[data-v-2d513990],.bannerWarp .views[data-v-2d513990]{margin:0 auto;overflow:hidden;width:100%}.bannerWarp .item[data-v-2d513990]{height:100%}.bannerWarp .item .img-bg[data-v-2d513990]{height:100%;width:100%}.bannerWarp .item .kvCont[data-v-2d513990]{margin:0 auto;padding-top:270px;width:1200px}.bannerWarp .item .kvCont p[data-v-2d513990]{color:#fff;font-size:16px;font-weight:400}.bannerWarp .item .kvCont h4[data-v-2d513990]{color:#fff;font-size:30px;font-weight:700;line-height:60px}.bannerWarp .item .kvCont .views[data-v-2d513990]{border:1px solid hsla(0,0%,100%,.2);border-radius:5px;color:#fff;display:block;font-size:14px;font-weight:700;height:71px;line-height:71px;margin-top:70px;text-align:center;width:192px}.bannerWarp .item .kvCont .views .iconfont[data-v-2d513990]{font-size:12px;margin-left:5px}.bannerWarp .item .kvCont .views[data-v-2d513990]:hover{background:#fff;color:#000}.bannerWarp .swiper-pagination[data-v-2d513990]{bottom:42px}.bannerWarp .swiper-pagination[data-v-2d513990] .swiper-pagination-bullet{background:hsla(0,0%,100%,.5);border-radius:inherit;height:2px;width:31px}.bannerWarp .swiper-pagination[data-v-2d513990] .swiper-pagination-bullet.swiper-pagination-bullet-active{background:#fff}.bannerWarp .swiper-button-next[data-v-2d513990],.bannerWarp .swiper-button-prev[data-v-2d513990]{align-items:center;background:#4f525d;border-radius:100%;bottom:60px;color:#fff;display:flex;height:35px;justify-content:center;overflow:hidden;top:inherit;width:35px}.bannerWarp .swiper-button-next[data-v-2d513990]:after,.bannerWarp .swiper-button-prev[data-v-2d513990]:after{font-size:10px;font-weight:700}.bannerWarp .swiper-button-prev[data-v-2d513990]{left:inherit;right:210px}.bannerWarp .measwiper-prev[data-v-2d513990]{left:210px;right:inherit}.bannerWarp .swiper-button-next[data-v-2d513990]{left:auto;right:160px}.bannerWarp .measwiper-next[data-v-2d513990]{left:160px;right:auto}.kvWarp[data-v-2d513990]{padding:200px 0}.swiperBox[data-v-2d513990]{overflow:hidden;width:100%}.swiperBox .swiper-container[data-v-2d513990]{height:100%;margin:0 auto;overflow:visible;overflow:initial;width:1440px}.swiperBox .swiper-slide[data-v-2d513990]{width:470px}.swiperBox .swiper-slide.swiper-slide-active .bottom h4[data-v-2d513990]{color:#000}.swiperBox .item .pic[data-v-2d513990]{border-radius:15px;height:305px;line-height:0;overflow:hidden}.swiperBox .item .bottom[data-v-2d513990]{padding:30px 0;width:100%}.swiperBox .item .bottom h4[data-v-2d513990]{color:#000;display:-webkit-box;font-size:18px;font-weight:500;height:51px;margin-bottom:20px;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}.swiperBox .item .bottom .tag[data-v-2d513990]{bottom:53px;position:absolute;right:47px}.swiperBox .item .bottom .more[data-v-2d513990]{color:#000;font-size:16px;visibility:hidden}.swiperBox .item .bottom .more .iconfont[data-v-2d513990]{background:#da291c;border-radius:100%;color:#fff;font-size:12px;font-weight:700;height:24px;margin-left:10px;overflow:hidden;padding:5px;width:24px}.swiperBox .item:hover h4[data-v-2d513990]{color:#000}.swiperBox .item:hover .more[data-v-2d513990]{visibility:visible}.swiperBox .swiper-button-next[data-v-2d513990],.swiperBox .swiper-button-prev[data-v-2d513990]{align-items:center;background:#4f525d;border-radius:100%;color:#fff;display:flex;height:35px;justify-content:center;margin-top:-80px;overflow:hidden;width:35px}.swiperBox .swiper-button-next[data-v-2d513990]:after,.swiperBox .swiper-button-prev[data-v-2d513990]:after{font-size:10px;font-weight:700}.swiperBox .swiper-button-prev[data-v-2d513990]{left:28px}.swiperBox .swiper-button-prev.swiper-button-disabled[data-v-2d513990]{display:none}.swiperBox .swiper-button-next[data-v-2d513990]{left:auto;right:28px}.swiperBox .swiper-button-next.swiper-button-disabled[data-v-2d513990]{display:none}.swiperBox .measwiper-next[data-v-2d513990]{left:28px;right:auto}.brand-warp[data-v-2d513990]{align-items:center;background:url(" + v + ") no-repeat 50%;background-size:cover;color:#fff;display:flex;flex-direction:column;height:450px;justify-content:center;width:100%}.brand-warp h4[data-v-2d513990]{font-size:30px;font-weight:800;margin-bottom:8px}.brand-warp h5[data-v-2d513990]{font-size:18px;font-weight:800;margin-bottom:40px}.brand-warp a[data-v-2d513990]{align-items:center;color:#fff;display:flex;font-size:16px}.brand-warp a:hover .icon-right-white[data-v-2d513990]{background-image:url(" + h + ")}.pro-banner[data-v-2d513990]{border-radius:15px;margin:0 auto;max-width:1440px;padding:0 0 100px;position:relative}.pro-banner .proOption[data-v-2d513990]{border-radius:15px;max-height:550px;overflow:hidden;width:100%}.pro-banner .swiper-custom[data-v-2d513990]{left:auto;max-height:400px;overflow:hidden;position:absolute;right:90px;top:50%;transform:translateY(-50%);z-index:100}.pro-banner .swiper-custom .custom-item[data-v-2d513990]{border:2px solid #fff;border-radius:6px;cursor:pointer;height:56px;line-height:0;margin:5px 0;opacity:.5;overflow:hidden;width:105px}.pro-banner .swiper-custom .custom-item.cur[data-v-2d513990]{opacity:1}.pro-banner .meacus[data-v-2d513990]{left:90px;right:auto}.pro-banner .item[data-v-2d513990]{margin:0 auto;max-height:550px;overflow:hidden;position:relative;text-align:left;width:100%}.pro-banner .item .flex-bottom[data-v-2d513990]{align-items:flex-start;display:flex;flex-direction:column;height:100%;justify-content:center;left:0;padding:0 90px;position:absolute;right:auto;top:0}.pro-banner .item .meadesc[data-v-2d513990]{left:auto;right:0}.pro-banner .item h1.title[data-v-2d513990],.pro-banner .item h2.title[data-v-2d513990]{color:#fff;font-size:36px;font-weight:700;line-height:140%;margin-bottom:40px;width:100%}.pro-banner .item h4.subtitle[data-v-2d513990]{color:hsla(0,0%,100%,.5);font-size:16px;height:100px;line-height:140%;margin-bottom:40px;width:480px}.pro-banner .item .fun[data-v-2d513990]{display:flex;vertical-align:middle}.pro-banner .item .fun a[data-v-2d513990]{align-items:center;color:#fff;display:flex;font-size:16px;margin-left:0;margin-right:44px}.pro-banner .item .fun a:hover .icon-right-white[data-v-2d513990]{background-image:url(" + h + ")}.pro-banner .item .meaf a[data-v-2d513990]{margin-left:44px;margin-right:0}.pro-banner .meaitsem[data-v-2d513990]{text-align:right}.pro-warp[data-v-2d513990]{margin:0 auto;max-width:1200px}.pro-warp .pro-list .item[data-v-2d513990]{background:linear-gradient(180deg,#f8f8f8,#f1f1f2);border-radius:15px;box-sizing:border-box;height:320px;margin:7px 0;padding:0 60px;position:relative}.pro-warp .pro-list .li:hover .cont a[data-v-2d513990]{visibility:visible}.pro-warp .pro-list .li .cont[data-v-2d513990]{align-items:flex-start;display:flex;flex-direction:column;height:100%;justify-content:center}.pro-warp .pro-list .li .cont h3[data-v-2d513990],.pro-warp .pro-list .li .cont h4[data-v-2d513990]{color:#000;font-size:24px}.pro-warp .pro-list .li .cont h5[data-v-2d513990]{color:#a1a1a1;font-size:16px;margin-bottom:64px}.pro-warp .pro-list .li .cont a[data-v-2d513990]{align-items:center;color:#000;display:flex;font-size:16px;visibility:hidden}.pro-warp .pro-list .li .cont a img[data-v-2d513990]{border-radius:100%;color:#fff;margin-left:10px;width:24px}.pro-warp .pro-list .li .product[data-v-2d513990]{align-items:center;display:flex;height:100%;justify-content:center;left:auto;position:absolute;right:0;top:0;width:60%}.pro-warp .pro-list .li .meaprod[data-v-2d513990]{left:0;right:auto}.pro-warp .pro-list .li[data-v-2d513990]:first-child{width:100%}.pro-warp .pro-list .li:first-child .cont[data-v-2d513990]{margin:0 auto;width:60%}.pro-warp .pro-list .li:first-child .product[data-v-2d513990]{left:65%;top:50%;transform:translate(-50%,-50%)}.pro-warp .pro-list .li:first-child .meaprod[data-v-2d513990]{left:35%}.pro-warp .finder-warp[data-v-2d513990]{padding:120px 0}.pro-warp .finder-warp .title[data-v-2d513990]{color:#000;font-size:36px;text-align:center}.pro-warp .finder-warp .tips[data-v-2d513990]{color:rgba(0,0,0,.5);font-size:16px;font-weight:400;margin-top:-20px;text-align:center;width:100%}.swiperBox .item .pic img[data-v-2d513990]{transform:scale(1);transition:all .3s ease-in-out}.swiperBox a:hover .item .pic img[data-v-2d513990]{transform:scale(1.1)}.swiperBox a .more[data-v-2d513990]{opacity:0;transition:all .3s ease-in-out}.swiperBox a:hover .more[data-v-2d513990]{opacity:1}.pro-warp .pro-list .li .product .img[data-v-2d513990]{transform:scale(1) translateY(0);transition:all .3s ease-in-out}.pro-warp .pro-list .li:hover .product .img[data-v-2d513990]{transform:scale(.95) translateY(0)}.direct-replace-enter-active[data-v-2d513990],.direct-replace-leave-active[data-v-2d513990]{transition:opacity 0s,transform 0s}.direct-replace-enter[data-v-2d513990],.direct-replace-leave-to[data-v-2d513990]{opacity:1;transform:none}.fade-enter-active[data-v-2d513990],.fade-leave-active[data-v-2d513990]{transition:opacity .5s}.fade-enter[data-v-2d513990],.fade-leave-to[data-v-2d513990]{opacity:0}@media screen and (max-width:768px){img[data-v-2d513990]{max-width:100%}.bannerWarp[data-v-2d513990]{position:relative;width:100%}.bannerWarp .swiper-container[data-v-2d513990]{height:100%;width:100%}.bannerWarp .swiper-slide[data-v-2d513990]{background:#fff;font-size:18px;text-align:center}.bannerWarp .views[data-v-2d513990]{height:auto}.bannerWarp .item[data-v-2d513990],.bannerWarp .views[data-v-2d513990]{margin:0 auto;overflow:hidden;position:relative;width:100%}.bannerWarp .item[data-v-2d513990]{max-height:900px}.bannerWarp .item .content[data-v-2d513990]{height:100%;left:50%;max-width:100%;position:absolute;top:0;transform:translate(-50%);width:100%}.bannerWarp .item .content .flex-bottom[data-v-2d513990]{left:0;padding:70px 20px;position:absolute;text-align:center;top:0;width:100%}.bannerWarp .item .content .play[data-v-2d513990]{margin-bottom:20px;width:17px}.bannerWarp .item .content h1.title[data-v-2d513990],.bannerWarp .item .content h2.title[data-v-2d513990]{color:#fff;font-size:30px;font-weight:600;line-height:120%;margin-bottom:20px}.bannerWarp .item .content h4.subtitle[data-v-2d513990]{color:hsla(0,0%,100%,.5);font-size:16px;height:auto;line-height:140%;margin-bottom:50px;overflow:hidden}.bannerWarp .item .content .fun[data-v-2d513990]{display:flex;justify-content:center;vertical-align:middle}.bannerWarp .item .content .fun a[data-v-2d513990]{align-items:center;color:#fff;display:flex;font-size:16px;margin-right:10px}.bannerWarp .item .content .fun a .bigspan[data-v-2d513990]{height:13px;width:13px}.bannerWarp .item .img-bg[data-v-2d513990]{height:100%;-o-object-position:top;object-position:top;width:100%}.bannerWarp .item .kvCont[data-v-2d513990]{margin:0 auto;padding-top:270px;width:1200px}.bannerWarp .item .kvCont p[data-v-2d513990]{color:#fff;font-size:16px;font-weight:400}.bannerWarp .item .kvCont h4[data-v-2d513990]{color:#fff;font-size:30px;font-weight:700;line-height:60px}.bannerWarp .item .kvCont .views[data-v-2d513990]{border:1px solid hsla(0,0%,100%,.2);border-radius:5px;color:#fff;display:block;font-size:14px;font-weight:700;height:71px;line-height:71px;margin-top:70px;text-align:center;width:192px}.bannerWarp .item .kvCont .views .iconfont[data-v-2d513990]{font-size:12px;margin-left:5px}.bannerWarp .item .kvCont .views[data-v-2d513990]:hover{background:#fff;color:#000}.bannerWarp .swiper-pagination[data-v-2d513990]{bottom:42px}.bannerWarp .swiper-pagination .swiper-pagination-bullet[data-v-2d513990]{background:hsla(0,0%,100%,.5);border-radius:inherit;height:3px;width:20px}.bannerWarp .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active[data-v-2d513990]{background:#fff}.bannerWarp .swiper-button-next[data-v-2d513990],.bannerWarp .swiper-button-prev[data-v-2d513990]{align-items:center;background:#4f525d;border-radius:100%;bottom:60px;color:#fff;display:flex;height:35px;justify-content:center;overflow:hidden;top:inherit;width:35px}.bannerWarp .swiper-button-next[data-v-2d513990]:after,.bannerWarp .swiper-button-prev[data-v-2d513990]:after{font-size:10px;font-weight:700}.bannerWarp .swiper-button-prev[data-v-2d513990]{display:none;left:inherit;right:210px}.bannerWarp .swiper-button-next[data-v-2d513990]{display:none;right:160px}.kvWarp[data-v-2d513990]{padding:60px 0}.swiperBox[data-v-2d513990]{overflow:hidden;padding:0 20px;width:100%}.swiperBox .swiper-container[data-v-2d513990]{height:100%;margin:0 auto;overflow:visible;overflow:initial;width:100%}.swiperBox .swiper-slide[data-v-2d513990]{width:335px}.swiperBox .swiper-slide.swiper-slide-active .bottom h4[data-v-2d513990]{color:#000}.swiperBox .item .pic[data-v-2d513990]{border-radius:5px;height:215px;line-height:0;overflow:hidden}.swiperBox .item .bottom[data-v-2d513990]{padding:20px 0;width:100%}.swiperBox .item .bottom h4[data-v-2d513990]{color:#000;display:-webkit-box;font-size:15px;font-weight:600;height:42px;margin-bottom:20px;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis}.swiperBox .item .bottom .tag[data-v-2d513990]{bottom:53px;position:absolute;right:47px}.swiperBox .item .bottom .more[data-v-2d513990]{color:#000;font-size:13px;opacity:1;visibility:visible}.swiperBox .item .bottom .more .iconfont[data-v-2d513990]{background:#da291c;border-radius:100%;color:#fff;font-size:12px;font-weight:700;height:24px;margin-left:10px;overflow:hidden;padding:5px;width:24px}.swiperBox .item:hover h4[data-v-2d513990]{color:#000}.swiperBox .item:hover .more[data-v-2d513990]{visibility:visible}.swiperBox .swiper-button-next[data-v-2d513990],.swiperBox .swiper-button-prev[data-v-2d513990]{align-items:center;background:#4f525d;border-radius:100%;color:#fff;display:flex;height:35px;justify-content:center;margin-top:-80px;overflow:hidden;width:35px}.swiperBox .swiper-button-next[data-v-2d513990]:after,.swiperBox .swiper-button-prev[data-v-2d513990]:after{font-size:10px;font-weight:700}.swiperBox .swiper-button-prev[data-v-2d513990]{left:28px}.swiperBox .swiper-button-prev.swiper-button-disabled[data-v-2d513990]{display:none}.swiperBox .swiper-button-next[data-v-2d513990]{right:28px}.swiperBox .swiper-button-next.swiper-button-disabled[data-v-2d513990]{display:none}.brand-warp[data-v-2d513990]{align-items:center;background:url(" + v + ") no-repeat 50%;background-size:cover;color:#fff;display:flex;flex-direction:column;height:600px;justify-content:center;padding:0 23px;text-align:center;width:100%}.brand-warp h4[data-v-2d513990]{font-size:30px;font-weight:800;margin-bottom:8px}.brand-warp h5[data-v-2d513990]{font-size:14px;font-weight:600;margin-bottom:30px}.brand-warp a[data-v-2d513990]{align-items:center;color:#fff;display:flex;font-size:14px}.brand-warp a:hover .icon-right-white[data-v-2d513990]{background-image:url(" + h + ")}.pro-banner[data-v-2d513990]{border-radius:15px;line-height:0;margin:60px auto;padding:0;position:relative;width:100%}.pro-banner .swiper-pagination[data-v-2d513990]{bottom:20px;position:relative}.pro-banner .swiper-pagination[data-v-2d513990] .swiper-pagination-bullet{background:hsla(0,0%,100%,.5);border-radius:inherit;height:2px;margin:0 4px;width:31px}.pro-banner .swiper-pagination[data-v-2d513990] .swiper-pagination-bullet.swiper-pagination-bullet-active{background:#fff}.pro-banner .proOption[data-v-2d513990]{border-radius:15px;height:500px;overflow:hidden;width:335px}.pro-banner .swiper-custom[data-v-2d513990]{max-height:400px;overflow:hidden;position:static;right:0;top:0;transform:translate(0);z-index:100}.pro-banner .swiper-custom .custom-item[data-v-2d513990]{border:2px solid #fff;border-radius:5px;cursor:pointer;height:68px;line-height:0;margin:20px 0;opacity:.5;overflow:hidden;width:140px}.pro-banner .swiper-custom .custom-item.cur[data-v-2d513990]{opacity:1}.pro-banner .item[data-v-2d513990]{margin:0 auto;overflow:hidden;position:relative;text-align:left;width:100%}.pro-banner .item .img-bg[data-v-2d513990]{height:100%;width:100%}.pro-banner .item .flex-bottom[data-v-2d513990]{align-items:flex-start;display:flex;flex-direction:column;height:100%;justify-content:space-between;left:0;padding:30px 20px;position:absolute;top:0}.pro-banner .item h1.title[data-v-2d513990],.pro-banner .item h2.title[data-v-2d513990]{color:#fff;font-size:30px;font-weight:700;line-height:120%;margin-bottom:40px;width:100%}.pro-banner .item h4.subtitle[data-v-2d513990]{color:hsla(0,0%,100%,.7);font-size:14px;height:auto;line-height:140%;margin-bottom:25px;width:100%}.pro-banner .item .fun[data-v-2d513990]{display:flex;vertical-align:middle}.pro-banner .item .fun a[data-v-2d513990]{align-items:center;color:#fff;display:flex;font-size:14px;margin-right:44px}.pro-banner .item .fun a:hover .icon-right-white[data-v-2d513990]{background-image:url(" + h + ")}.pro-warp[data-v-2d513990]{margin:0 auto;padding:0 20px;width:100%}.pro-warp .pro-list[data-v-2d513990]{display:flex;flex-wrap:wrap;margin:-8px;overflow:hidden}.pro-warp .pro-list .item[data-v-2d513990]{background:linear-gradient(180deg,#f8f8f8,#f1f1f2);border-radius:15px;box-sizing:border-box;height:500px;margin:0 0 8px;padding:0 20px;position:relative;width:100%}.pro-warp .pro-list .item:hover .cont a[data-v-2d513990]{visibility:visible}.pro-warp .pro-list .item:hover .product .img[data-v-2d513990]{transform:scale(1)}.pro-warp .pro-list .item .cont[data-v-2d513990]{align-items:center;display:flex;flex-direction:column;height:auto;justify-content:center;padding-top:50px;width:100%}.pro-warp .pro-list .item .cont h3[data-v-2d513990],.pro-warp .pro-list .item .cont h4[data-v-2d513990]{color:#000;font-size:30px;margin-bottom:10px}.pro-warp .pro-list .item .cont h5[data-v-2d513990]{color:#a1a1a1;font-size:14px;margin-bottom:15px}.pro-warp .pro-list .item .cont a[data-v-2d513990]{align-items:center;color:#000;display:flex;font-size:14px;visibility:visible}.pro-warp .pro-list .item .cont a img[data-v-2d513990]{border-radius:100%;color:#fff;margin-left:10px;width:24px}.pro-warp .pro-list .item .product[data-v-2d513990]{bottom:0;height:auto;left:0;position:absolute;top:inherit;width:100%}.pro-warp .pro-list .item[data-v-2d513990]:first-child{width:100%}.pro-warp .pro-list .item:first-child .cont[data-v-2d513990]{margin:0 auto;width:100%}.pro-warp .pro-list .item:first-child .product[data-v-2d513990]{bottom:0;left:0;top:inherit;transform:translate(0);width:100%}.pro-warp .finder-warp[data-v-2d513990]{padding:100px 0}.pro-warp .finder-warp .title[data-v-2d513990]{color:#000;font-size:24px;text-align:center}.pro-warp .finder-warp .tips[data-v-2d513990]{color:rgba(0,0,0,.5);font-size:11px;font-weight:400}}@media only screen and (min-width:769px)and (max-width:1920px){.bannerWarp .swiper-slide[data-v-2d513990]{font-size:.9375vw}.bannerWarp .item[data-v-2d513990]{height:41.6vw}.bannerWarp .item .content .flex-bottom[data-v-2d513990]{padding:3.64vw 2.08vw}.bannerWarp .item .content .play[data-v-2d513990]{margin-bottom:1.04vw;width:.88vw}.bannerWarp .item .content h1.title[data-v-2d513990],.bannerWarp .item .content h2.title[data-v-2d513990]{font-size:1.875vw}.bannerWarp .item .content h4.subtitle[data-v-2d513990]{font-size:1.04vw;height:3.125vw}.bannerWarp .item .content .fun a[data-v-2d513990]{font-size:.83vw;margin-left:0;margin-right:2.29vw}.bannerWarp .item .content .fun a img[data-v-2d513990]{margin-left:.46vw;margin-right:0;width:1.25vw}.bannerWarp .item .content .meaf a[data-v-2d513990]{margin-left:2.29vw;margin-right:0}.bannerWarp .item .content .meaf a img[data-v-2d513990]{margin-left:0;margin-right:.46vw}.bannerWarp .item .img-bg[data-v-2d513990]{height:100%;width:100%}.bannerWarp .item .kvCont[data-v-2d513990]{padding-top:14.06vw;width:100%}.bannerWarp .item .kvCont p[data-v-2d513990]{font-size:.83vw;font-weight:400}.bannerWarp .item .kvCont h4[data-v-2d513990]{font-size:1.5625vw;line-height:3.125vw}.bannerWarp .item .kvCont .views[data-v-2d513990]{border:1px solid hsla(0,0%,100%,.2);border-radius:5px;color:#fff;display:block;font-size:.729vw;font-weight:700;height:71px;line-height:71px;margin-top:3.64vw;text-align:center;width:10vw}.bannerWarp .item .kvCont .views .iconfont[data-v-2d513990]{font-size:.729vw;margin-left:5px}.bannerWarp .item .kvCont .views[data-v-2d513990]:hover{background:#fff;color:#000}.bannerWarp .swiper-pagination[data-v-2d513990]{bottom:42px}.bannerWarp .swiper-pagination[data-v-2d513990] .swiper-pagination-bullet{background:hsla(0,0%,100%,.5);border-radius:inherit;height:2px;width:1.614vw}.bannerWarp .swiper-pagination[data-v-2d513990] .swiper-pagination-bullet.swiper-pagination-bullet-active{background:#fff}.bannerWarp .swiper-button-next[data-v-2d513990],.bannerWarp .swiper-button-prev[data-v-2d513990]{align-items:center;background:#4f525d;border-radius:100%;bottom:60px;color:#fff;display:flex;height:1.82vw;justify-content:center;overflow:hidden;top:inherit;width:1.82vw}.bannerWarp .swiper-button-next[data-v-2d513990]:after,.bannerWarp .swiper-button-prev[data-v-2d513990]:after{font-size:.52vw;font-weight:700}.bannerWarp .swiper-button-prev[data-v-2d513990]{left:auto;left:inherit;right:10.93vw}.bannerWarp .measwiper-prev[data-v-2d513990]{left:10.93vw;right:auto;right:inherit}.bannerWarp .swiper-button-next[data-v-2d513990]{left:auto;right:8.3vw}.bannerWarp .measwiper-next[data-v-2d513990]{left:8.3vw;right:auto}.kvWarp[data-v-2d513990]{padding:10.4vw 0}.swiperBox[data-v-2d513990]{width:100%}.swiperBox .swiper-container[data-v-2d513990]{max-width:1440px;width:76%}.swiperBox .swiper-slide[data-v-2d513990]{width:24.47vw}.swiperBox .item .pic[data-v-2d513990]{border-radius:.78vw;height:15.88vw}.swiperBox .item .bottom[data-v-2d513990]{padding:1.5625vw 0}.swiperBox .item .bottom h4[data-v-2d513990]{font-size:.9375vw;height:2.65vw;margin-bottom:1.04vw}.swiperBox .item .bottom .tag[data-v-2d513990]{bottom:2.76vw;right:2.44vw}.swiperBox .item .bottom .more[data-v-2d513990]{font-size:.83vw}.swiperBox .item .bottom .more .iconfont[data-v-2d513990]{font-size:.625vw;height:1.25vw;margin-left:.52vw;padding:.26vw;width:1.25vw}.swiperBox .swiper-button-next[data-v-2d513990],.swiperBox .swiper-button-prev[data-v-2d513990]{height:1.82vw;margin-top:-4.16vw;width:1.82vw}.swiperBox .swiper-button-next[data-v-2d513990]:after,.swiperBox .swiper-button-prev[data-v-2d513990]:after{font-size:.52vw}.swiperBox .swiper-button-prev[data-v-2d513990]{left:1.45vw;right:auto}.swiperBox .measwiper-prev[data-v-2d513990],.swiperBox .swiper-button-next[data-v-2d513990]{left:auto;right:1.45vw}.swiperBox .measwiper-next[data-v-2d513990]{left:1.45vw;right:auto}.brand-warp[data-v-2d513990]{height:23.4375vw}.brand-warp h4[data-v-2d513990]{font-size:1.5625vw;margin-bottom:.41vw}.brand-warp h5[data-v-2d513990]{font-size:.9375vw;margin-bottom:2.08vw}.brand-warp a[data-v-2d513990]{font-size:.83vw}.pro-banner[data-v-2d513990]{border-radius:.78125vw;padding:0 0 5.2vw;width:75vw}.pro-banner .proOption[data-v-2d513990]{border-radius:.78125vw;max-height:28.64vw}.pro-banner .swiper-custom[data-v-2d513990]{left:auto;max-height:40.83vw;right:4.6875vw}.pro-banner .swiper-custom .custom-item[data-v-2d513990]{border:2px solid #fff;border-radius:.3125vw;height:2.916vw;margin:.26vw 0;width:5.46875vw}.pro-banner .meacus[data-v-2d513990]{left:4.6875vw;right:auto}.pro-banner .item[data-v-2d513990]{max-height:28.64vw;width:100%}.pro-banner .item .flex-bottom[data-v-2d513990]{padding:0 4.6875vw}.pro-banner .item h1.title[data-v-2d513990],.pro-banner .item h2.title[data-v-2d513990]{font-size:1.875vw;margin-bottom:2.08vw}.pro-banner .item h4.subtitle[data-v-2d513990]{font-size:.83vw;height:5.2vw;margin-bottom:2.08vw;width:25vw}.pro-banner .item .fun a[data-v-2d513990]{font-size:.833vw;margin-left:0;margin-right:2.291vw}.pro-banner .item .meaf a[data-v-2d513990]{margin-left:2.291vw;margin-right:0}.pro-warp[data-v-2d513990]{max-width:75vw}.pro-warp .pro-list .item[data-v-2d513990]{border-radius:.78125vw;height:16.6vw;margin:.36vw 0;padding:0 3.125vw}.pro-warp .pro-list .li .cont h4[data-v-2d513990]{color:#000;font-size:1.25vw}.pro-warp .pro-list .li .cont h5[data-v-2d513990]{color:#a1a1a1;font-size:.83vw;margin-bottom:3.33vw}.pro-warp .pro-list .li .cont a[data-v-2d513990]{font-size:.83vw}.pro-warp .pro-list .li .cont a img[data-v-2d513990]{border-radius:100%;color:#fff;margin-left:.52vw;width:1.25vw}.pro-warp .finder-warp[data-v-2d513990]{padding:6.25vw 0}.pro-warp .finder-warp .title[data-v-2d513990]{font-size:1.875vw}.pro-warp .finder-warp .tips[data-v-2d513990]{font-size:.83vw}}.kefubase[data-v-2d513990]{background:#000;border-radius:50%;bottom:24px;box-shadow:0 6px 10px 0 rgba(0,0,0,.25);cursor:pointer;opacity:1;overflow:visible;position:fixed;right:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:9999999}.kefubase img[data-v-2d513990]{height:auto;width:60px}", ""]), c.locals = {}, t.exports = c
        },
        656: function(t, e, r) {
            t.exports = r.p + "img/brand-bg.0236e0c.jpg"
        },
        657: function(t, e, r) {
            "use strict";
            r(467)
        },
        658: function(t, e, r) {
            var o = r(20)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".msgTips{background:#fff!important;border:1px solid #ccc}.meaidon-right,.mearightwhite{margin-right:10px;transform:rotate(180deg)}", ""]), o.locals = {}, t.exports = o
        },
        659: function(t, e, r) {
            "use strict";
            r(468)
        },
        660: function(t, e, r) {
            var o = r(20)((function(i) {
                return i[1]
            }));
            o.push([t.i, "#launcher{bottom:22px!important;box-shadow:0 6px 10px 0 rgba(0,0,0,.25);display:none!important;position:fixed!important;right:28px!important;transform:scale(.92);transform-origin:center}", ""]), o.locals = {}, t.exports = o
        }
    }
]);