(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        498: function(t, e, o) {
            var content = o(722);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("1b4bd68b", content, !0, {
                sourceMap: !1
            })
        },
        499: function(t, e, o) {
            var content = o(724);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("a955b47e", content, !0, {
                sourceMap: !1
            })
        },
        501: function(t, e, o) {
            var content = o(726);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("185fa779", content, !0, {
                sourceMap: !1
            })
        },
        502: function(t, e, o) {
            var content = o(728);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("3ecd6ac7", content, !0, {
                sourceMap: !1
            })
        },
        503: function(t, e, o) {
            var content = o(730);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("28d19f53", content, !0, {
                sourceMap: !1
            })
        },
        504: function(t, e, o) {
            var content = o(732);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("59fe0bd9", content, !0, {
                sourceMap: !1
            })
        },
        505: function(t, e, o) {
            var content = o(734);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(21).default)("8cf5e63a", content, !0, {
                sourceMap: !1
            })
        },
        650: function(t, e, o) {
            "use strict";
            o(12);
            var n = [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "item-icon"
                    }, [t("img", {
                        attrs: {
                            loading: "“lazy”",
                            src: o(455),
                            width: "100%"
                        }
                    })])
                }],
                r = (o(35), o(27), o(14), o(435)),
                d = o(11),
                c = o(32),
                l = o(432),
                m = o(433),
                f = o(451),
                v = o(452),
                w = o(430),
                h = o(453),
                x = o(454),
                _ = o(51),
                y = {
                    props: {
                        pageBase: {
                            type: Object,
                            default: {}
                        }
                    },
                    watch: {
                        "$route.query": {
                            immediate: !0,
                            handler: function(t, e) {
                                e && location.reload()
                            }
                        }
                    },
                    components: {
                        PicZoom: r.default,
                        Faqs: f.default,
                        Videos: v.default,
                        ProdItem: w.default,
                        MallLinks: h.default,
                        HeadLinks: x.default,
                        ProductTag: l.default,
                        Prize: m.default
                    },
                    data: function() {
                        return {
                            skuColor: !0,
                            modelList: {},
                            skuIndex1: 0,
                            skuIndex2: 0,
                            thumbIndex: 0,
                            curModel: [],
                            curChild: {},
                            thumbnail: "",
                            tableData: [],
                            numbers: {
                                option1: [],
                                option2: []
                            },
                            support: {
                                option1: [],
                                option2: []
                            },
                            kvOption: {
                                pagination: {
                                    el: ".swiper-pagination"
                                },
                                loop: !1,
                                initialSlide: 0
                            },
                            tabIndex: 0,
                            dataBase: "",
                            menuBase: "",
                            recomBase: "",
                            solt: {
                                page: 1,
                                cate: ""
                            },
                            lifeClass: "",
                            lifeOption: {
                                spaceBetween: 15,
                                initialSlide: 0,
                                slidesPerView: "auto",
                                navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }
                            },
                            mCommandValue: "",
                            buyBtnTxt: "",
                            activeIndex: 1,
                            isOpenMedia: !0,
                            isOpenSpec: !0,
                            isOpenNum: !1,
                            isOpenSource: !0,
                            isMea: c.f
                        }
                    },
                    head: function() {
                        return {
                            title: Object(c.g)(this.pageBase.baseData.name.replace(/<sup>|<\/sup>/g, "").replace(/®/g, "® ")),
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
                                innerHTML: JSON.stringify(Object(_.c)(this.pageBase))
                            }]
                        }
                    },
                    filters: {
                        formatTime: function(t) {
                            var data = encodeURI(t);
                            return data.replace(/%C2%A0/g, "%20"), decodeURI(data).replace(/&nbsp;/g, " ")
                        }
                    },
                    methods: {
                        tiggerInit: function() {
                            this.tabSku(0)
                        },
                        switchtumb: function(t) {
                            this.thumbIndex = t, this.thumbnail = this.curChild.imageList[t]
                        },
                        tabSku: function(t) {
                            this.skuIndex1 = t, this.curModel.modelList = JSON.parse(JSON.stringify(this.pageBase.baseData.childModelList[this.skuIndex1].modelList)), 0 == this.curModel.modelList.filter((function(t) {
                                return t.color
                            })).length && (this.skuColor = !1), this.colorSku(0)
                        },
                        selabSku: function(t, e) {
                            this.pageBurial(e), this.tabSku(t)
                        },
                        colorSelSku: function(t, e) {
                            this.pageBurial(e), this.colorSku(t)
                        },
                        colorSku: function(t) {
                            this.skuIndex2 = t, this.curChild = JSON.parse(JSON.stringify(this.curModel.modelList[this.skuIndex2])), this.switchtumb(0)
                        },
                        jumpName: function(t, e) {
                            this.activeIndex = e, this.$nextTick((function() {
                                switch (t) {
                                    case "overview":
                                        this.mCommandValue = this.$t("products.detail.nav1");
                                        break;
                                    case "feature":
                                        this.mCommandValue = this.$t("products.detail.nav2");
                                        break;
                                    case "specification":
                                        this.mCommandValue = this.$t("products.detail.nav3");
                                        break;
                                    case "support":
                                        this.mCommandValue = this.$t("products.detail.nav4")
                                }
                                this.$refs.menuDrop.hide(), window.scrollTo(0, document.getElementById(t).offsetTop - 70), this.pageBurial(this.mCommandValue)
                            }))
                        },
                        buytips: function() {
                            this.$message.error(this.$t("products.detail.tips1"))
                        },
                        addCompare: function(t) {
                            var e = d.a.get("compareList"),
                                o = {
                                    id: t.id,
                                    name: t.name,
                                    imageUrl: t.imageUrl
                                };
                            if (null == e) e = [o], d.a.set("compareList", e);
                            else {
                                if (e.length >= 4) return void this.$message.error(this.$t("products.detail.tips2"));
                                if (e.filter((function(e) {
                                        return e.id == t.id
                                    })).length > 0) return void this.$message.error(this.$t("products.detail.tips3"));
                                e.push(o), d.a.set("compareList", e)
                            }
                            this.$store.commit("setCompare", e), this.pageBurial(this.$t("currency.compareTxt"))
                        },
                        pageBurial: function(t) {
                            var e = "pc" == this.$store.state.equipment ? "pc" : "app";
                            this.$gtag("event", "product_".concat(_.b, "_").concat(this.pageBase.baseData.productCode, "-").concat(t, "_").concat(e), {
                                event_label: t
                            })
                        },
                        sourceClick: function() {
                            this.isOpenSource = !this.isOpenSource, this.pageBurial(this.$t("products.detail.Resources"))
                        },
                        changeSpec: function() {
                            this.isOpenSpec = !this.isOpenSpec, this.pageBurial(this.$t("products.detail.Specifications"))
                        },
                        numClick: function() {
                            this.isOpenNum = !this.isOpenNum, this.pageBurial(this.$t("products.detail.pnumbers"))
                        },
                        downloadTap: function(t) {
                            this.pageBurial(t)
                        }
                    },
                    created: function() {
                        window.scrollTo(0, 0)
                    },
                    destroyed: function() {
                        window.scrollTo(0, 0)
                    },
                    mounted: function() {
                        window.scrollTo(0, 0), this.buyBtnTxt = Object(c.a)(this), this.tiggerInit();
                        var t = this;
                        setTimeout((function() {
                            t.mCommandValue = t.$t("products.detail.nav1")
                        }), 100)
                    }
                },
                k = (o(721), o(723), o(7)),
                component = Object(k.a)(y, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
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
                        class: "menu ".concat(t.isMea && "meame")
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
                    }, [t._v(t._s(t.$t("products.detail.nav5")))]) : t._e(), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("HeadLinks", {
                        attrs: {
                            buyBtnTxt: t.buyBtnTxt,
                            urlList: t.pageBase.saleLinkResponseList,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e()], 1)]), t._v(" "), e("div", {
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
                    }, [t._v(t._s(t.$t("products.detail.nav5")))]) : t._e()], 1)], 1), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("HeadLinks", {
                        attrs: {
                            buyBtnTxt: t.buyBtnTxt,
                            urlList: t.pageBase.saleLinkResponseList,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e()], 1)]), t._v(" "), e("a", {
                        attrs: {
                            name: "overview",
                            id: "overview"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "warp"
                    }, [e("section", {
                        staticClass: "info"
                    }, [e("div", {
                        class: "item-detail-left ".concat(t.isMea && "meaitemleft")
                    }, [e("div", {
                        staticClass: "item-detail-big-img"
                    }, [e("pic-zoom", {
                        attrs: {
                            url: t.thumbnail,
                            scale: 2
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "imgsize",
                        attrs: {
                            src: t.thumbnail,
                            alt: ""
                        }
                    }), t._v(" "), t.pageBase.baseData.productTag && t.pageBase.baseData.productTag.length ? e("ProductTag", {
                        attrs: {
                            tagStr: t.pageBase.baseData.productTag
                        }
                    }) : t._e(), t._v(" "), t.pageBase.awardsList && t.pageBase.awardsList.length ? e("Prize", {
                        attrs: {
                            list: t.pageBase.awardsList
                        }
                    }) : t._e()], 1), t._v(" "), e("div", {
                        staticClass: "item-detail-img-row"
                    }, [e("swiper", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            options: {
                                loop: !1,
                                autoplay: !1,
                                spaceBetween: 0,
                                slidesPerView: "auto",
                                freeMode: !0
                            }
                        }
                    }, t._l(t.curChild.imageList, (function(o, n) {
                        return e("swiper-slide", {
                            key: n,
                            class: "item-detail-img-small ".concat(t.isMea && "meaimgsmall")
                        }, [e("el-image", {
                            attrs: {
                                src: o,
                                "preview-src-list": t.curChild.imageList
                            },
                            on: {
                                click: function(e) {
                                    return t.switchtumb(n)
                                }
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "selbottom",
                            style: {
                                backgroundColor: t.thumbIndex === n ? "#DA291C" : ""
                            }
                        })], 1)
                    })), 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "pro-infos"
                    }, [t.pageBase.baseData.awardsName ? e("h4", {
                        staticClass: "sub-title"
                    }) : t._e(), t._v(" "), t.pageBase.baseData.name ? e("h1", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(t.pageBase.baseData.name)
                        }
                    }) : t._e(), t._v(" "), t.curChild.description ? e("p", {
                        staticClass: "desc",
                        domProps: {
                            innerHTML: t._s(t.curChild.description)
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "sku-unit"
                    }, t._l(t.pageBase.baseData.childModelList, (function(o, n) {
                        return "none" != o.name ? e("a", {
                            key: o.value,
                            class: t.skuIndex1 == n ? "cur" : "",
                            attrs: {
                                href: "javascript:void(0)",
                                label: o.label,
                                value: o.value
                            },
                            on: {
                                click: function(e) {
                                    return t.selabSku(n, o.name)
                                }
                            }
                        }, [t._v(t._s(o.name))]) : t._e()
                    })), 0), t._v(" "), t.skuColor ? e("div", {
                        staticClass: "sku-color"
                    }, t._l(t.curModel.modelList, (function(o, n) {
                        return o.color ? e("a", {
                            class: t.skuIndex2 == n ? "cur" : "",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(e) {
                                    return t.colorSelSku(n, o.colorName)
                                }
                            }
                        }, [e("i", {
                            staticClass: "icon"
                        }, [e("span", {
                            staticClass: "after",
                            style: "background:" + o.color
                        })]), t._v(" "), e("span", [t._v(t._s(o.colorName))])]) : t._e()
                    })), 0) : t._e(), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("MallLinks", {
                        attrs: {
                            urlList: t.pageBase.saleLinkResponseList,
                            buyBtnTxt: t.buyBtnTxt,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "addCompare",
                        on: {
                            click: function(e) {
                                return t.addCompare(t.pageBase)
                            }
                        }
                    }, ["pc" == t.$store.state.equipment ? e("i", {
                        staticClass: "el-icon-circle-plus",
                        style: {
                            marginRight: t.isMea ? "0" : "calc(4 / 1920 * 100vw)",
                            marginLeft: t.isMea ? "calc(4 / 1920 * 100vw)" : "0",
                            fontSize: "calc(16 / 1920 * 100vw)"
                        }
                    }) : e("i", {
                        staticClass: "el-icon-circle-plus",
                        style: {
                            marginRight: t.isMea ? "0" : "4px",
                            marginLeft: t.isMea ? "4px" : "0",
                            fontSize: "16px"
                        }
                    }), t._v(" "), e("div", [t._v(t._s(t.$t("currency.compareTxt")))])])], 1)]), t._v(" "), 0 != t.pageBase.saleData.length ? e("section", {
                        staticClass: "deal"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.deal")))]), t._v(" "), t._l(t.pageBase.saleData, (function(o, n) {
                        return n < 2 ? e("div", {
                            key: o.value,
                            staticClass: "better-list",
                            attrs: {
                                label: o.label,
                                value: o.value
                            }
                        }, [e("div", {
                            staticClass: "pro-list"
                        }, t._l(o.dataList, (function(n, r) {
                            return r < 4 ? e("div", {
                                key: o.value,
                                staticClass: "itembox",
                                attrs: {
                                    label: o.label,
                                    value: o.value
                                }
                            }, [e("div", {
                                staticClass: "item"
                            }, [e("div", {
                                staticClass: "pic"
                            }, [e("img", {
                                attrs: {
                                    loading: "“lazy”",
                                    src: n.imageUrl,
                                    width: "100%"
                                }
                            })]), t._v(" "), e("p", {
                                staticClass: "name",
                                domProps: {
                                    innerHTML: t._s(n.name)
                                }
                            })]), t._v(" "), t._m(0, !0)]) : t._e()
                        })), 0)]) : t._e()
                    }))], 2) : t._e(), t._v(" "), e("ul", {
                        staticClass: "featrue"
                    }, t._l(t.pageBase.sellingPoint, (function(o) {
                        return e("li", {
                            key: o.value,
                            attrs: {
                                label: o.label,
                                value: o.value
                            }
                        }, [e("img", {
                            attrs: {
                                loading: "“lazy”",
                                src: o.imageUrl
                            }
                        }), t._v(" "), e("p", {
                            domProps: {
                                innerHTML: t._s(o.title)
                            }
                        })])
                    })), 0), t._v(" "), e("section", {
                        staticClass: "feature-list"
                    }, [e("a", {
                        attrs: {
                            id: "feature",
                            name: "feature"
                        }
                    }), t._v(" "), t.pageBase.featureData.featureDataList.length ? e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.features")))]) : t._e(), t._v(" "), e("ul", {
                        staticClass: "list"
                    }, t._l(t.pageBase.featureData.featureDataList, (function(o) {
                        return e("li", {
                            key: o.value,
                            attrs: {
                                label: o.label,
                                value: o.value
                            }
                        }, [e("el-image", {
                            staticClass: "pic",
                            attrs: {
                                lazy: "",
                                src: o.imageUrl + "?x-oss-process=image/format,webp",
                                fit: "cover",
                                referrerpolicy: "no-referrer"
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "cont"
                        }, [e("h2", {
                            staticClass: "h2",
                            domProps: {
                                innerHTML: t._s(o.title)
                            }
                        }), t._v(" "), o.description ? e("p", {
                            staticClass: "p",
                            domProps: {
                                innerHTML: t._s(t.$options.filters.formatTime(o.description))
                            }
                        }) : t._e()])], 1)
                    })), 0)]), t._v(" "), t.pageBase.productVideoData && t.pageBase.productVideoData.length ? e("Videos", {
                        attrs: {
                            videoData: t.pageBase.productVideoData
                        }
                    }) : t._e(), t._v(" "), 1 == t.pageBase.publicizeUpData.videoUpShow ? e("section", {
                        staticClass: "video"
                    }, [e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "object-fit": "cover"
                        },
                        attrs: {
                            src: t.pageBase.publicizeUpData.videoUpUrl,
                            controls: "",
                            poster: t.pageBase.publicizeUpData.videoUpCoverUrl
                        }
                    })]) : t._e(), t._v(" "), t.pageBase.productCommentData && t.pageBase.productCommentData.length ? e("div", {
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [e("section", {
                        staticClass: "media-new-section"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.newComments")))])]), t._v(" "), t.isOpenMedia ? e("Swiper", {
                        staticClass: "swipermediabase",
                        attrs: {
                            options: {
                                loop: !0,
                                autoplay: t.pageBase.productCommentData.length > 1 && {
                                    delay: 5e3,
                                    disableOnInteraction: !1
                                },
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: !0
                                }
                            }
                        }
                    }, [t._l(t.pageBase.productCommentData, (function(o, n) {
                        return e("SwiperSlide", {
                            key: n
                        }, [e("div", {
                            class: "swipitem ".concat(t.isMea && "measwitem")
                        }, [e("div", {
                            staticClass: "bgconbg"
                        }, [e("div", {
                            class: "logimg ".concat(!o.score && "toplog")
                        })]), t._v(" "), o.score ? e("div", {
                            staticClass: "scorebase"
                        }, [e("div", {
                            staticClass: "scope"
                        }, [t._v("SCORE")]), t._v(" "), e("div", {
                            staticClass: "star"
                        }, [e("div", [t._v(t._s(o.score))]), t._v(" "), e("div", {
                            staticClass: "maxsco"
                        }, [t._v("/" + t._s(o.totalGrade || "10"))])]), t._v(" "), null !== o.grade ? e("el-rate", {
                            class: "pc" == t.$store.state.equipment ? "ratebasepc" : "ratebasephone",
                            attrs: {
                                disabled: "",
                                colors: ["#fff", "#fff", "#fff"],
                                "disabled-void-color": "#e1584e"
                            },
                            model: {
                                value: o.grade,
                                callback: function(e) {
                                    t.$set(o, "grade", e)
                                },
                                expression: "item.grade"
                            }
                        }) : t._e()], 1) : t._e(), t._v(" "), e("div", {
                            staticClass: "titles"
                        }, [t._v(t._s(o.title) + " :")]), t._v(" "), e("div", {
                            staticClass: "content"
                        }, [t._v(t._s(o.content))])])])
                    })), t._v(" "), t.pageBase.productCommentData.length > 1 ? e("div", {
                        staticClass: "swiper-pagination",
                        attrs: {
                            slot: "pagination"
                        },
                        slot: "pagination"
                    }) : t._e()], 2) : t._e()], 1)]) : t._e(), t._v(" "), t.pageBase.argsData.length > 0 ? e("section", {
                        staticClass: "specific"
                    }, [e("a", {
                        attrs: {
                            name: "specification",
                            id: "specification"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Specifications")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.changeSpec
                        }
                    }, [t.isOpenSpec ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenSpec ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, [e("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.pageBase.argsData,
                            stripe: "",
                            "show-header": !1,
                            "empty-text": t.$t("currency.emptyTips")
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name"
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "value"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(o) {
                                return [e("div", {
                                    domProps: {
                                        innerHTML: t._s(o.row.value)
                                    }
                                })]
                            }
                        }], null, !1, 317324831)
                    })], 1)], 1) : t._e(), t._v(" "), t.isOpenSpec ? e("div", {
                        staticClass: "tips",
                        domProps: {
                            innerHTML: t._s(t.pageBase.footnote)
                        }
                    }) : t._e()]) : t._e(), t._v(" "), t.pageBase.numberData.length > 0 ? e("section", {
                        staticClass: "numbers"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.pnumbers")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.numClick
                        }
                    }, [t.isOpenNum ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenNum ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, t._l(t.pageBase.numberData, (function(o, n) {
                        return e("div", [e("el-table", {
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                data: o.data,
                                stripe: "",
                                "show-header": !0,
                                "empty-text": t.$t("currency.emptyTips"),
                                "header-cell-style": function() {
                                    return {
                                        color: "#000"
                                    }
                                }
                            }
                        }, [e("el-table-column", {
                            attrs: {
                                prop: "",
                                label: o.region
                            }
                        }), t._v(" "), e("el-table-column", {
                            attrs: {
                                prop: "capacity",
                                label: t.$t("products.detail.numberP1")
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(o) {
                                    return [e("div", {
                                        domProps: {
                                            innerHTML: t._s(o.row.capacity)
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), e("el-table-column", {
                            attrs: {
                                prop: "part",
                                label: t.$t("products.detail.numberP2")
                            }
                        })], 1)], 1)
                    })), 0) : t._e()]) : t._e(), t._v(" "), e("a", {
                        attrs: {
                            id: "support",
                            name: "support"
                        }
                    }), t._v(" "), t.pageBase.faqData.length > 0 ? e("section", {
                        staticClass: "support"
                    }, [e("Faqs", {
                        attrs: {
                            faqData: t.pageBase.faqData
                        }
                    })], 1) : t._e(), t._v(" "), t.pageBase.resourceData.software.length > 0 || t.pageBase.resourceData.manual.length > 0 || t.pageBase.resourceData.software.length ? e("section", {
                        staticClass: "support"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Resources")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.sourceClick
                        }
                    }, [t.isOpenSource ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenSource ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, [t.pageBase.resourceData.software.length > 0 ? e("div", {
                        staticClass: "item"
                    }, [e("el-table", {
                        attrs: {
                            data: t.pageBase.resourceData.software,
                            stripe: "",
                            "empty-text": t.$t("currency.emptyTips"),
                            "header-cell-style": function() {
                                return {
                                    color: "#000"
                                }
                            }
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name",
                            label: t.$t("products.detail.ResourcesP1")
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "downName"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(n) {
                                return [e("a", {
                                    staticClass: "down-item",
                                    attrs: {
                                        href: n.row.url
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.downloadTap(n.row.name)
                                        }
                                    }
                                }, [t._v(t._s(t.$t("products.detail.ResDownload"))), e("img", {
                                    attrs: {
                                        loading: "“lazy”",
                                        src: o(434)
                                    }
                                })])]
                            }
                        }], null, !1, 3391120226)
                    })], 1)], 1) : t._e(), t._v(" "), t.pageBase.resourceData.manual.length > 0 ? e("div", {
                        staticClass: "item"
                    }, [e("el-table", {
                        attrs: {
                            data: t.pageBase.resourceData.manual,
                            stripe: "",
                            "empty-text": t.$t("currency.emptyTips"),
                            "header-cell-style": function() {
                                return {
                                    color: "#000"
                                }
                            }
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name",
                            label: t.$t("products.detail.ResourcesP2")
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "downName"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(n) {
                                return [e("a", {
                                    staticClass: "down-item",
                                    attrs: {
                                        href: n.row.url
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.downloadTap(n.row.name)
                                        }
                                    }
                                }, [t._v(t._s(t.$t("products.detail.ResDownload"))), e("img", {
                                    attrs: {
                                        loading: "“lazy”",
                                        src: o(434)
                                    }
                                })])]
                            }
                        }], null, !1, 3391120226)
                    })], 1)], 1) : t._e()]) : t._e()]) : t._e(), t._v(" "), 1 == t.pageBase.publicizeDownData.videoDownShow ? e("section", {
                        staticClass: "video"
                    }, [e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "object-fit": "cover"
                        },
                        attrs: {
                            src: t.pageBase.publicizeDownData.videoDownUrl,
                            controls: "",
                            poster: t.pageBase.publicizeDownData.videoDownCoverUrl
                        }
                    })]) : t._e()], 1), t._v(" "), t.pageBase.mediaComment.length > 0 ? e("div", {
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [e("section", {
                        staticClass: "media-section"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Comments")))]), t._v(" "), e("div", {
                        staticClass: "kvWarp",
                        staticStyle: {
                            position: "relative"
                        }
                    }, [e("div", {
                        staticClass: "swiperBox"
                    }, [e("Swiper", {
                        attrs: {
                            options: t.lifeOption
                        }
                    }, t._l(t.pageBase.mediaComment, (function(t) {
                        return e("SwiperSlide", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value
                            }
                        }, [t.linkUrl ? e("a", {
                            attrs: {
                                href: t.linkUrl
                            }
                        }, [e("div", {
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "pic"
                        }, [e("el-image", {
                            attrs: {
                                fit: "cover",
                                src: t.imageUrl + "?x-oss-process=image/format,webp",
                                width: "100%"
                            }
                        })], 1)])]) : e("div", {
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "pic"
                        }, [e("el-image", {
                            attrs: {
                                fit: "cover",
                                src: t.imageUrl + "?x-oss-process=image/format,webp",
                                width: "100%"
                            }
                        })], 1)])])
                    })), 1)], 1)])])]) : t._e(), t._v(" "), t.pageBase && t.pageBase.recommend && t.pageBase.recommend.length > 0 ? e("section", {
                        staticClass: "related-section"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Related")))]), t._v(" "), e("el-row", {
                        attrs: {
                            gutter: 16
                        }
                    }, t._l(t.pageBase.recommend, (function(t, o) {
                        return e("el-col", {
                            key: o,
                            attrs: {
                                sm: 6,
                                xs: 24
                            }
                        }, [e("ProdItem", {
                            attrs: {
                                item: t
                            }
                        })], 1)
                    })), 1)], 1) : t._e()])
                }), n, !1, null, "4f29c806", null);
            e.a = component.exports;
            installComponents(component, {
                PicZoom: o(435).default,
                ProductTag: o(432).default,
                Prize: o(433).default
            })
        },
        651: function(t, e, o) {
            "use strict";
            o(12);
            var n = [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "item-icon"
                    }, [t("img", {
                        attrs: {
                            loading: "“lazy”",
                            src: o(455),
                            width: "100%"
                        }
                    })])
                }],
                r = o(4),
                d = (o(40), o(35), o(27), o(14), o(435)),
                c = o(11),
                l = o(32),
                m = o(432),
                f = o(433),
                v = o(451),
                w = o(452),
                h = o(430),
                x = o(453),
                _ = o(454),
                y = o(51),
                k = {
                    props: {
                        pageBase: {
                            type: Object,
                            default: {}
                        }
                    },
                    watch: {
                        "$route.query": {
                            immediate: !0,
                            handler: function(t, e) {
                                e && location.reload()
                            }
                        }
                    },
                    components: {
                        PicZoom: d.default,
                        Faqs: v.default,
                        Videos: w.default,
                        ProdItem: h.default,
                        MallLinks: x.default,
                        HeadLinks: _.default,
                        ProductTag: m.default,
                        Prize: f.default
                    },
                    data: function() {
                        return {
                            banner: {},
                            activeIndex: 1,
                            bannerOption: {
                                loop: !0,
                                autoplay: {
                                    delay: 5e3
                                },
                                initialSlide: 0
                            },
                            skuColor: !0,
                            poster: o(500),
                            navToName: "overview",
                            modelList: {},
                            skuIndex1: 0,
                            skuIndex2: 0,
                            thumbIndex: 0,
                            curModel: [],
                            curChild: {},
                            thumbnail: "",
                            tableData: [],
                            numbers: {
                                option1: []
                            },
                            support: {
                                option1: [],
                                option2: []
                            },
                            kvOption: {
                                pagination: {
                                    el: ".swiper-pagination"
                                },
                                loop: !1,
                                initialSlide: 0
                            },
                            tabIndex: 0,
                            dataBase: "",
                            menuBase: "",
                            recomBase: "",
                            solt: {
                                page: 1,
                                cate: ""
                            },
                            lifeClass: "",
                            lifeOption: {
                                spaceBetween: 15,
                                initialSlide: 0,
                                slidesPerView: "auto",
                                navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }
                            },
                            mCommandValue: this.$t("products.detail.nav1"),
                            buyBtnTxt: "",
                            isOpenMedia: !0,
                            isOpenSpec: !0,
                            isOpenNum: !1,
                            isOpenSource: !0,
                            isMea: l.f
                        }
                    },
                    head: function() {
                        return {
                            title: Object(l.g)(this.pageBase.baseData.name.replace(/<sup>|<\/sup>/g, "").replace(/®/g, "® ")),
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
                                innerHTML: JSON.stringify(Object(y.c)(this.pageBase))
                            }]
                        }
                    },
                    asyncData: function(t) {
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$axios, t.query, t.route;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    methods: {
                        tiggerInit: function() {
                            this.tabSku(0)
                        },
                        switchtumb: function(t) {
                            this.thumbIndex = t, this.thumbnail = this.curChild.imageList[t]
                        },
                        tabSku: function(t) {
                            this.skuIndex1 = t, this.curModel.modelList = JSON.parse(JSON.stringify(this.pageBase.baseData.childModelList[this.skuIndex1].modelList)), 0 == this.curModel.modelList.filter((function(t) {
                                return t.color
                            })).length && (this.skuColor = !1), this.colorSku(0)
                        },
                        selabSku: function(t, e) {
                            this.pageBurial(e), this.tabSku(t)
                        },
                        colorSelSku: function(t, e) {
                            this.pageBurial(e), this.colorSku(t)
                        },
                        colorSku: function(t) {
                            this.skuIndex2 = t, this.curChild = JSON.parse(JSON.stringify(this.curModel.modelList[this.skuIndex2])), this.switchtumb(0)
                        },
                        jumpName: function(t, e) {
                            this.activeIndex = e, this.navToName = t, this.$nextTick((function() {
                                switch (t) {
                                    case "overview":
                                        this.mCommandValue = this.$t("products.detail.nav1");
                                        break;
                                    case "feature":
                                        this.mCommandValue = this.$t("products.detail.nav2");
                                        break;
                                    case "specification":
                                        this.mCommandValue = this.$t("products.detail.nav3");
                                        break;
                                    case "support":
                                        this.mCommandValue = this.$t("products.detail.nav4")
                                }
                                this.$refs.menuDrop.hide(), "specification" === t ? window.scrollTo(0, 0) : window.scrollTo(0, document.getElementById(t).offsetTop - 70), this.pageBurial(this.mCommandValue)
                            }))
                        },
                        pageBurial: function(t) {
                            var e = "pc" == this.$store.state.equipment ? "pc" : "app";
                            this.$gtag("event", "product_".concat(y.b, "_").concat(this.pageBase.baseData.productCode, "-").concat(t, "_").concat(e), {
                                event_label: t
                            })
                        },
                        sourceClick: function() {
                            this.isOpenSource = !this.isOpenSource, this.pageBurial(this.$t("products.detail.Resources"))
                        },
                        changeSpec: function() {
                            this.isOpenSpec = !this.isOpenSpec, this.pageBurial(this.$t("products.detail.Specifications"))
                        },
                        numClick: function() {
                            this.isOpenNum = !this.isOpenNum, this.pageBurial(this.$t("products.detail.pnumbers"))
                        },
                        downloadTap: function(t) {
                            this.pageBurial(t)
                        },
                        buytips: function() {
                            this.$message.error(this.$t("products.detail.tips1"))
                        },
                        addCompare: function(t) {
                            var e = c.a.get("compareList"),
                                o = {
                                    id: t.id,
                                    name: t.name,
                                    imageUrl: t.imageUrl
                                };
                            if (null == e) e = [o], c.a.set("compareList", e);
                            else {
                                if (e.length >= 4) return void this.$message.error(this.$t("products.detail.tips2"));
                                if (e.filter((function(e) {
                                        return e.id == t.id
                                    })).length > 0) return void this.$message.error(this.$t("products.detail.tips3"));
                                e.push(o), c.a.set("compareList", e)
                            }
                            this.$store.commit("setCompare", e), this.pageBurial(this.$t("currency.compareTxt"))
                        },
                        nScroll: function() {
                            if (isScroll.value) {
                                var t = document.querySelectorAll(".container .section"),
                                    e = [];
                                t.forEach((function(t) {
                                    e.push(t.offsetTop - 30)
                                }));
                                for (var o = document.getElementById("scrollBox").scrollTop, n = 1, r = 1; r <= e.length; r++) o >= e[r - 1] && (n = r);
                                activeIndex.value = n
                            }
                        },
                        getBanner: function() {
                            var t = this,
                                e = this.$route.meta.banner;
                            e.relId = this.solt.id, this.$request({
                                url: "/banner/info",
                                method: "post",
                                data: e
                            }).then((function(data) {
                                t.banner = data.data
                            }))
                        }
                    },
                    created: function() {
                        window.scrollTo(0, 0)
                    },
                    destroyed: function() {
                        window.scrollTo(0, 0)
                    },
                    mounted: function() {
                        window.scrollTo(0, 0), this.solt.id = this.pageBase.id, this.buyBtnTxt = Object(l.a)(this), this.tiggerInit(), this.getBanner();
                        var t = this;
                        setTimeout((function() {
                            t.mCommandValue = t.$t("products.detail.nav1")
                        }), 100)
                    }
                },
                C = (o(725), o(727), o(729), o(7)),
                component = Object(C.a)(k, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
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
                        class: "menu ".concat(t.isMea && "meame")
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
                    }, [t._v(t._s(t.$t("products.detail.nav5")))]) : t._e(), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("HeadLinks", {
                        attrs: {
                            buyBtnTxt: t.buyBtnTxt,
                            urlList: t.pageBase.saleLinkResponseList,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e()], 1)]), t._v(" "), e("div", {
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
                    }, [t._v(t._s(t.$t("products.detail.nav5")))]) : t._e()], 1)], 1), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("HeadLinks", {
                        attrs: {
                            buyBtnTxt: t.buyBtnTxt,
                            urlList: t.pageBase.saleLinkResponseList,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e()], 1)]), t._v(" "), "overview" == t.navToName ? e("div", {
                        staticClass: "full-warp"
                    }, [e("a", {
                        attrs: {
                            name: "overview",
                            id: "overview"
                        }
                    }), t._v(" "), e("section", {
                        staticClass: "item"
                    }, [t.solt.id == t.banner.relId ? e("img", {
                        staticClass: "img-bg",
                        staticStyle: {
                            "object-fit": "contain"
                        },
                        attrs: {
                            loading: "“lazy”",
                            src: t.banner.imageUrl,
                            width: "100%",
                            fit: "contain"
                        }
                    }) : t._e()]), t._v(" "), 1 == t.pageBase.publicizeUpData.videoUpShow ? e("section", {
                        staticClass: "item"
                    }, [e("video", {
                        staticClass: "pubVideo",
                        staticStyle: {
                            width: "100%",
                            "object-fit": "contain",
                            background: "#000"
                        },
                        attrs: {
                            src: t.pageBase.publicizeUpData.videoUpUrl,
                            controls: "",
                            poster: t.pageBase.publicizeUpData.videoUpCoverUrl
                        }
                    })]) : t._e(), t._v(" "), e("a", {
                        attrs: {
                            name: "feature",
                            id: "feature"
                        }
                    }), t._v(" "), t._l(t.pageBase.featureData.featureDataList, (function(o, n) {
                        return e("section", {
                            key: n,
                            staticClass: "item"
                        }, [1 == o.contentType ? e("el-image", {
                            staticClass: "img",
                            attrs: {
                                src: "pc" == t.$store.state.equipment ? o.imageUrl : o.mobileImageUrl || o.imageUrl
                            },
                            scopedSlots: t._u([{
                                key: "placeholder",
                                fn: function() {
                                    return [e("div", {
                                        staticStyle: {
                                            display: "flex",
                                            "align-items": "center",
                                            "justify-content": "center",
                                            height: "calc(100vh - 200px)"
                                        }
                                    }, [e("el-spinner", {
                                        staticClass: "cus-spinner"
                                    })], 1)]
                                },
                                proxy: !0
                            }], null, !0)
                        }, [e("div", {
                            staticClass: "image-slot",
                            attrs: {
                                slot: "placeholder"
                            },
                            slot: "placeholder"
                        })]) : t._e(), t._v(" "), 2 == o.contentType && ("pc" == t.$store.state.equipment ? o.videoUrl : o.videoUrl || o.mobileVideoUrl) ? e("video", {
                            staticStyle: {
                                width: "100%",
                                height: "100%",
                                "object-fit": "cover"
                            },
                            attrs: {
                                src: "pc" == t.$store.state.equipment ? o.videoUrl : o.mobileVideoUrl || o.videoUrl,
                                controls: "",
                                muted: "",
                                autoplay: !(!o.playState || "true" !== o.playState),
                                poster: "pc" == t.$store.state.equipment ? o.coverUrl : o.mobileCoverUrl
                            },
                            domProps: {
                                muted: !0
                            }
                        }) : t._e()], 1)
                    })), t._v(" "), t.pageBase.productVideoData && t.pageBase.productVideoData.length ? e("Videos", {
                        attrs: {
                            videoData: t.pageBase.productVideoData
                        }
                    }) : t._e(), t._v(" "), t.pageBase.productCommentData && t.pageBase.productCommentData.length ? e("div", {
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [e("section", {
                        staticClass: "media-new-section"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.newComments")))])]), t._v(" "), t.isOpenMedia ? e("Swiper", {
                        staticClass: "swipermediabase",
                        attrs: {
                            options: {
                                loop: !0,
                                autoplay: t.pageBase.productCommentData.length > 1 && {
                                    delay: 5e3,
                                    disableOnInteraction: !1
                                },
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: !0
                                }
                            }
                        }
                    }, [t._l(t.pageBase.productCommentData, (function(o, n) {
                        return e("SwiperSlide", {
                            key: n
                        }, [e("div", {
                            class: "swipitem ".concat(t.isMea && "measwitem")
                        }, [e("div", {
                            staticClass: "bgconbg"
                        }, [e("div", {
                            class: "logimg ".concat(!o.score && "toplog")
                        })]), t._v(" "), o.score ? e("div", {
                            staticClass: "scorebase"
                        }, [e("div", {
                            staticClass: "scope"
                        }, [t._v("SCORE")]), t._v(" "), e("div", {
                            staticClass: "star"
                        }, [e("div", [t._v(t._s(o.score))]), t._v(" "), e("div", {
                            staticClass: "maxsco"
                        }, [t._v("/" + t._s(o.totalGrade || "10"))])]), t._v(" "), null !== o.grade ? e("el-rate", {
                            class: "pc" == t.$store.state.equipment ? "ratebasepc" : "ratebasephone",
                            attrs: {
                                disabled: "",
                                colors: ["#fff", "#fff", "#fff"],
                                "disabled-void-color": "#e1584e"
                            },
                            model: {
                                value: o.grade,
                                callback: function(e) {
                                    t.$set(o, "grade", e)
                                },
                                expression: "item.grade"
                            }
                        }) : t._e()], 1) : t._e(), t._v(" "), e("div", {
                            staticClass: "titles"
                        }, [t._v(t._s(o.title) + " :")]), t._v(" "), e("div", {
                            staticClass: "content"
                        }, [t._v(t._s(o.content))])])])
                    })), t._v(" "), t.pageBase.productCommentData.length > 1 ? e("div", {
                        staticClass: "swiper-pagination",
                        attrs: {
                            slot: "pagination"
                        },
                        slot: "pagination"
                    }) : t._e()], 2) : t._e()], 1)]) : t._e()], 2) : e("div", {
                        staticClass: "warp"
                    }, [e("section", {
                        staticClass: "info"
                    }, [e("div", {
                        class: "item-detail-left ".concat(t.isMea && "meaitemleft")
                    }, [e("div", {
                        staticClass: "item-detail-big-img"
                    }, [e("pic-zoom", {
                        attrs: {
                            url: t.thumbnail,
                            scale: 2
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "imgsize",
                        attrs: {
                            src: t.thumbnail,
                            alt: ""
                        }
                    }), t._v(" "), t.pageBase.baseData.productTag && t.pageBase.baseData.productTag.length ? e("ProductTag", {
                        attrs: {
                            tagStr: t.pageBase.baseData.productTag
                        }
                    }) : t._e(), t._v(" "), t.pageBase.awardsList && t.pageBase.awardsList.length ? e("Prize", {
                        attrs: {
                            list: t.pageBase.awardsList
                        }
                    }) : t._e()], 1), t._v(" "), e("div", {
                        staticClass: "item-detail-img-row"
                    }, [e("swiper", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            options: {
                                loop: !1,
                                autoplay: !1,
                                spaceBetween: 0,
                                slidesPerView: "auto",
                                freeMode: !0
                            }
                        }
                    }, t._l(t.curChild.imageList, (function(o, n) {
                        return e("swiper-slide", {
                            key: n,
                            class: "item-detail-img-small ".concat(t.isMea && "meaimgsmall")
                        }, [e("el-image", {
                            attrs: {
                                src: o,
                                "preview-src-list": t.curChild.imageList
                            },
                            on: {
                                click: function(e) {
                                    return t.switchtumb(n)
                                }
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "selbottom",
                            style: {
                                backgroundColor: t.thumbIndex === n ? "#DA291C" : ""
                            }
                        })], 1)
                    })), 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "pro-infos"
                    }, [t.pageBase.baseData.awardsName ? e("h4", {
                        staticClass: "sub-title"
                    }) : t._e(), t._v(" "), t.pageBase.baseData.name ? e("h1", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(t.pageBase.baseData.name)
                        }
                    }) : t._e(), t._v(" "), t.curChild.description ? e("p", {
                        staticClass: "desc",
                        domProps: {
                            innerHTML: t._s(t.curChild.description)
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "sku-unit"
                    }, t._l(t.pageBase.baseData.childModelList, (function(o, n) {
                        return "none" != o.name ? e("a", {
                            key: o.value,
                            class: t.skuIndex1 == n ? "cur" : "",
                            attrs: {
                                href: "javascript:void(0)",
                                label: o.label,
                                value: o.value
                            },
                            on: {
                                click: function(e) {
                                    return t.selabSku(n, o.name)
                                }
                            }
                        }, [t._v(t._s(o.name))]) : t._e()
                    })), 0), t._v(" "), t.skuColor ? e("div", {
                        staticClass: "sku-color"
                    }, t._l(t.curModel.modelList, (function(o, n) {
                        return o.color ? e("a", {
                            class: t.skuIndex2 == n ? "cur" : "",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(e) {
                                    return t.colorSelSku(n, o.colorName)
                                }
                            }
                        }, [e("i", {
                            staticClass: "icon"
                        }, [e("span", {
                            staticClass: "after",
                            style: "background:" + o.color
                        })]), t._v(" "), e("span", [t._v(t._s(o.colorName))])]) : t._e()
                    })), 0) : t._e(), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("MallLinks", {
                        attrs: {
                            urlList: t.pageBase.saleLinkResponseList,
                            buyBtnTxt: t.buyBtnTxt,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "addCompare",
                        on: {
                            click: function(e) {
                                return t.addCompare(t.pageBase)
                            }
                        }
                    }, ["pc" == t.$store.state.equipment ? e("i", {
                        staticClass: "el-icon-circle-plus",
                        style: {
                            marginRight: t.isMea ? "0" : "calc(4 / 1920 * 100vw)",
                            marginLeft: t.isMea ? "calc(4 / 1920 * 100vw)" : "0",
                            fontSize: "calc(16 / 1920 * 100vw)"
                        }
                    }) : e("i", {
                        staticClass: "el-icon-circle-plus",
                        style: {
                            marginRight: t.isMea ? "0" : "4px",
                            marginLeft: t.isMea ? "4px" : "0",
                            fontSize: "16px"
                        }
                    }), t._v(" "), e("div", [t._v(t._s(t.$t("currency.compareTxt")))])])], 1)]), t._v(" "), 0 != t.pageBase.saleData.length ? e("section", {
                        staticClass: "deal"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.deal")))]), t._v(" "), t._l(t.pageBase.saleData, (function(o, n) {
                        return n < 2 ? e("div", {
                            key: o.value,
                            staticClass: "better-list",
                            attrs: {
                                label: o.label,
                                value: o.value
                            }
                        }, [e("div", {
                            staticClass: "pro-list"
                        }, t._l(o.dataList, (function(n, r) {
                            return r < 4 ? e("div", {
                                key: o.value,
                                staticClass: "itembox",
                                attrs: {
                                    label: o.label,
                                    value: o.value
                                }
                            }, [e("div", {
                                staticClass: "item"
                            }, [e("div", {
                                staticClass: "pic"
                            }, [e("img", {
                                attrs: {
                                    loading: "“lazy”",
                                    src: n.imageUrl,
                                    width: "100%"
                                }
                            })]), t._v(" "), e("p", {
                                staticClass: "name"
                            }, [t._v(t._s(n.name))])]), t._v(" "), t._m(0, !0)]) : t._e()
                        })), 0)]) : t._e()
                    }))], 2) : t._e(), t._v(" "), e("ul", {
                        staticClass: "featrue"
                    }, t._l(t.pageBase.sellingPoint, (function(o) {
                        return e("li", {
                            key: o.value,
                            attrs: {
                                label: o.label,
                                value: o.value
                            }
                        }, [e("img", {
                            attrs: {
                                loading: "“lazy”",
                                src: o.imageUrl
                            }
                        }), t._v(" "), e("p", {
                            domProps: {
                                innerHTML: t._s(o.title)
                            }
                        })])
                    })), 0), t._v(" "), t.pageBase.argsData.length > 0 ? e("section", {
                        staticClass: "specific"
                    }, [e("a", {
                        attrs: {
                            name: "specification",
                            id: "specification"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Specifications")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.changeSpec
                        }
                    }, [t.isOpenSpec ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenSpec ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, [e("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.pageBase.argsData,
                            stripe: "",
                            "empty-text": t.$t("currency.emptyTips"),
                            "show-header": !1
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name"
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "value"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(o) {
                                return [e("div", {
                                    domProps: {
                                        innerHTML: t._s(o.row.value)
                                    }
                                })]
                            }
                        }], null, !1, 317324831)
                    })], 1)], 1) : t._e(), t._v(" "), t.isOpenSpec ? e("div", {
                        staticClass: "tips",
                        domProps: {
                            innerHTML: t._s(t.pageBase.footnote)
                        }
                    }) : t._e()]) : t._e(), t._v(" "), t.pageBase.numberData.length > 0 ? e("section", {
                        staticClass: "numbers"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.pnumbers")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.numClick
                        }
                    }, [t.isOpenNum ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenNum ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, t._l(t.pageBase.numberData, (function(o, n) {
                        return e("div", {
                            key: n
                        }, [e("el-table", {
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                data: o.data,
                                stripe: "",
                                "empty-text": t.$t("currency.emptyTips"),
                                "show-header": !0,
                                "header-cell-style": function() {
                                    return {
                                        color: "#000"
                                    }
                                }
                            }
                        }, [e("el-table-column", {
                            attrs: {
                                prop: "",
                                label: o.region
                            }
                        }), t._v(" "), e("el-table-column", {
                            attrs: {
                                prop: "capacity",
                                label: t.$t("products.detail.numberP1")
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(o) {
                                    return [e("div", {
                                        domProps: {
                                            innerHTML: t._s(o.row.capacity)
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), e("el-table-column", {
                            attrs: {
                                prop: "part",
                                label: t.$t("products.detail.numberP2")
                            }
                        })], 1)], 1)
                    })), 0) : t._e()]) : t._e(), t._v(" "), e("a", {
                        attrs: {
                            id: "support",
                            name: "support"
                        }
                    }), t._v(" "), t.pageBase.faqData.length > 0 ? e("section", {
                        staticClass: "support"
                    }, [e("Faqs", {
                        attrs: {
                            faqData: t.pageBase.faqData
                        }
                    })], 1) : t._e(), t._v(" "), t.pageBase.resourceData.software.length > 0 || t.pageBase.resourceData.manual.length > 0 || t.pageBase.resourceData.software.length ? e("section", {
                        staticClass: "support"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Resources")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.sourceClick
                        }
                    }, [t.isOpenSource ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenSource ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, [t.pageBase.resourceData.software.length > 0 ? e("div", {
                        staticClass: "item"
                    }, [e("el-table", {
                        attrs: {
                            data: t.pageBase.resourceData.software,
                            stripe: "",
                            "empty-text": t.$t("currency.emptyTips"),
                            "header-cell-style": function() {
                                return {
                                    color: "#000",
                                    fontSize: "16px"
                                }
                            }
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name",
                            label: t.$t("products.detail.ResourcesP1")
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "downName"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(n) {
                                return [e("a", {
                                    staticClass: "down-item",
                                    attrs: {
                                        href: n.row.url
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.downloadTap(n.row.name)
                                        }
                                    }
                                }, [t._v(t._s(t.$t("products.detail.ResDownload"))), e("img", {
                                    attrs: {
                                        loading: "“lazy”",
                                        src: o(434)
                                    }
                                })])]
                            }
                        }], null, !1, 3391120226)
                    })], 1)], 1) : t._e(), t._v(" "), t.pageBase.resourceData.manual.length > 0 ? e("div", {
                        staticClass: "item"
                    }, [e("el-table", {
                        attrs: {
                            data: t.pageBase.resourceData.manual,
                            stripe: "",
                            "empty-text": t.$t("currency.emptyTips"),
                            "header-cell-style": function() {
                                return {
                                    color: "#000"
                                }
                            }
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name",
                            label: t.$t("products.detail.ResourcesP2")
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "downName"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(n) {
                                return [e("a", {
                                    staticClass: "down-item",
                                    attrs: {
                                        href: n.row.url
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.downloadTap(n.row.name)
                                        }
                                    }
                                }, [t._v("\n                  " + t._s(t.$t("products.detail.ResDownload"))), e("img", {
                                    attrs: {
                                        loading: "“lazy”",
                                        src: o(434)
                                    }
                                })])]
                            }
                        }], null, !1, 3394602587)
                    })], 1)], 1) : t._e()]) : t._e()]) : t._e(), t._v(" "), 1 == t.pageBase.publicizeDownData.videoDownShow ? e("section", {
                        staticClass: "video"
                    }, [e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "object-fit": "cover"
                        },
                        attrs: {
                            src: t.pageBase.publicizeDownData.videoDownUrl,
                            controls: "",
                            poster: t.pageBase.publicizeDownData.videoDownCoverUrl
                        }
                    })]) : t._e()]), t._v(" "), t.pageBase.mediaComment.length > 0 ? e("div", {
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [e("section", {
                        staticClass: "media-section"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Comments")))]), t._v(" "), e("div", {
                        staticClass: "kvWarp",
                        staticStyle: {
                            position: "relative"
                        }
                    }, [e("div", {
                        staticClass: "swiperBox"
                    }, [e("Swiper", {
                        attrs: {
                            options: t.lifeOption
                        }
                    }, t._l(t.pageBase.mediaComment, (function(t) {
                        return e("SwiperSlide", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value
                            }
                        }, [t.linkUrl ? e("nuxt-link", {
                            attrs: {
                                to: t.linkUrl
                            }
                        }, [e("div", {
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "pic"
                        }, [e("el-image", {
                            attrs: {
                                lazy: "",
                                fit: "cover",
                                src: t.imageUrl,
                                width: "100%"
                            }
                        })], 1)])]) : e("div", {
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "pic"
                        }, [e("el-image", {
                            attrs: {
                                lazy: "",
                                fit: "cover",
                                src: t.imageUrl,
                                width: "100%"
                            }
                        })], 1)])], 1)
                    })), 1)], 1)])])]) : t._e(), t._v(" "), t.pageBase.recommend.length > 0 ? e("section", {
                        staticClass: "related-section"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Related")))]), t._v(" "), e("el-row", {
                        attrs: {
                            gutter: 16
                        }
                    }, t._l(t.pageBase.recommend, (function(t, o) {
                        return e("el-col", {
                            key: t.value,
                            attrs: {
                                sm: 6,
                                xs: 24
                            }
                        }, [e("ProdItem", {
                            attrs: {
                                item: t
                            }
                        })], 1)
                    })), 1)], 1) : t._e()])
                }), n, !1, null, "68aa27a6", null);
            e.a = component.exports;
            installComponents(component, {
                PicZoom: o(435).default,
                ProductTag: o(432).default,
                Prize: o(433).default
            })
        },
        652: function(t, e, o) {
            "use strict";
            o(12);
            var n = [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "item-icon"
                    }, [t("img", {
                        attrs: {
                            loading: "“lazy”",
                            src: o(455),
                            width: "100%"
                        }
                    })])
                }],
                r = (o(35), o(27), o(14), o(435)),
                d = o(11),
                c = o(32),
                l = o(432),
                m = o(433),
                f = o(451),
                v = o(452),
                w = o(430),
                h = o(453),
                x = o(454),
                _ = o(51),
                y = {
                    props: {
                        pageBase: {
                            type: Object,
                            default: {}
                        }
                    },
                    watch: {
                        "$route.query": {
                            immediate: !0,
                            handler: function(t, e) {
                                e && location.reload()
                            }
                        }
                    },
                    components: {
                        PicZoom: r.default,
                        Faqs: f.default,
                        Videos: v.default,
                        ProdItem: w.default,
                        MallLinks: h.default,
                        HeadLinks: x.default,
                        ProductTag: l.default,
                        Prize: m.default
                    },
                    data: function() {
                        return {
                            skuColor: !0,
                            modelList: {},
                            skuIndex1: 0,
                            skuIndex2: 0,
                            thumbIndex: 0,
                            curModel: [],
                            curChild: {},
                            thumbnail: "",
                            tableData: [],
                            numbers: {
                                option1: [],
                                option2: []
                            },
                            support: {
                                option1: [],
                                option2: []
                            },
                            kvOption: {
                                pagination: {
                                    el: ".swiper-pagination"
                                },
                                loop: !1,
                                initialSlide: 0
                            },
                            tabIndex: 0,
                            dataBase: "",
                            menuBase: "",
                            recomBase: "",
                            solt: {
                                page: 1,
                                cate: ""
                            },
                            lifeClass: "",
                            lifeOption: {
                                spaceBetween: 15,
                                initialSlide: 0,
                                slidesPerView: "auto",
                                navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }
                            },
                            mCommandValue: "",
                            buyBtnTxt: "",
                            activeIndex: 1,
                            isOpenMedia: !0,
                            isOpenSpec: !0,
                            isOpenNum: !1,
                            isOpenSource: !0,
                            isMea: c.f
                        }
                    },
                    head: function() {
                        return {
                            title: Object(c.g)(this.pageBase.baseData.name.replace(/<sup>|<\/sup>/g, "").replace(/®/g, "® ")),
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
                                innerHTML: JSON.stringify(Object(_.c)(this.pageBase))
                            }]
                        }
                    },
                    filters: {
                        formatTime: function(t) {
                            var data = encodeURI(t);
                            return data.replace(/%C2%A0/g, "%20"), decodeURI(data).replace(/&nbsp;/g, " ")
                        }
                    },
                    methods: {
                        tiggerInit: function() {
                            this.tabSku(0)
                        },
                        switchtumb: function(t) {
                            this.thumbIndex = t, this.thumbnail = this.curChild.imageList[t]
                        },
                        tabSku: function(t) {
                            this.skuIndex1 = t, this.pageBase.baseData && this.pageBase.baseData.childModelList.length && this.pageBase.baseData.childModelList[this.skuIndex1].modelList && (this.curModel.modelList = JSON.parse(JSON.stringify(this.pageBase.baseData.childModelList[this.skuIndex1].modelList))), this.curModel && this.curModel.modelList && this.curModel.modelList.length && this.curModel.modelList.filter((function(t) {
                                return t.color
                            })), 0 == this.curModel.modelList.filter((function(t) {
                                return t.color
                            })).length && (this.skuColor = !1), this.colorSku(0)
                        },
                        selabSku: function(t, e) {
                            this.pageBurial(e), this.tabSku(t)
                        },
                        colorSelSku: function(t, e) {
                            this.pageBurial(e), this.colorSku(t)
                        },
                        colorSku: function(t) {
                            this.skuIndex2 = t, this.curChild = JSON.parse(JSON.stringify(this.curModel.modelList[this.skuIndex2])), this.switchtumb(0)
                        },
                        jumpName: function(t, e) {
                            this.activeIndex = e, this.$nextTick((function() {
                                switch (t) {
                                    case "overview":
                                        this.mCommandValue = this.$t("products.detail.nav1");
                                        break;
                                    case "feature":
                                        this.mCommandValue = this.$t("products.detail.nav2");
                                        break;
                                    case "specification":
                                        this.mCommandValue = this.$t("products.detail.nav3");
                                        break;
                                    case "support":
                                        this.mCommandValue = this.$t("products.detail.nav4")
                                }
                                this.$refs.menuDrop.hide(), window.scrollTo(0, document.getElementById(t).offsetTop - 70), this.pageBurial(this.mCommandValue)
                            }))
                        },
                        pageBurial: function(t) {
                            var e = "pc" == this.$store.state.equipment ? "pc" : "app";
                            this.$gtag("event", "product_".concat(_.b, "_").concat(this.pageBase.baseData.productCode, "-").concat(t, "_").concat(e), {
                                event_label: t
                            })
                        },
                        sourceClick: function() {
                            this.isOpenSource = !this.isOpenSource, this.pageBurial(this.$t("products.detail.Resources"))
                        },
                        changeSpec: function() {
                            this.isOpenSpec = !this.isOpenSpec, this.pageBurial(this.$t("products.detail.Specifications"))
                        },
                        numClick: function() {
                            this.isOpenNum = !this.isOpenNum, this.pageBurial(this.$t("products.detail.pnumbers"))
                        },
                        downloadTap: function(t) {
                            this.pageBurial(t)
                        },
                        buytips: function() {
                            this.$message.error(this.$t("products.detail.tips1"))
                        },
                        addCompare: function(t) {
                            var e = d.a.get("compareList"),
                                o = {
                                    id: t.id,
                                    name: t.name,
                                    imageUrl: t.imageUrl
                                };
                            if (null == e) e = [o], d.a.set("compareList", e);
                            else {
                                if (e.length >= 4) return void this.$message.error(this.$t("products.detail.tips2"));
                                if (e.filter((function(e) {
                                        return e.id == t.id
                                    })).length > 0) return void this.$message.error(this.$t("products.detail.tips3"));
                                e.push(o), d.a.set("compareList", e)
                            }
                            this.$store.commit("setCompare", e), this.pageBurial(this.$t("currency.compareTxt"))
                        }
                    },
                    created: function() {
                        window.scrollTo(0, 0)
                    },
                    destroyed: function() {
                        window.scrollTo(0, 0)
                    },
                    mounted: function() {
                        window.scrollTo(0, 0), this.buyBtnTxt = Object(c.a)(this), this.tiggerInit();
                        var t = this;
                        setTimeout((function() {
                            t.mCommandValue = t.$t("products.detail.nav1")
                        }), 100)
                    }
                },
                k = (o(731), o(733), o(7)),
                component = Object(k.a)(y, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
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
                        class: "menu ".concat(t.isMea && "meame")
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
                    }, [t._v(t._s(t.$t("products.detail.nav5")))]) : t._e(), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("HeadLinks", {
                        attrs: {
                            buyBtnTxt: t.buyBtnTxt,
                            urlList: t.pageBase.saleLinkResponseList,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e()], 1)]), t._v(" "), e("div", {
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
                    }, [t._v(t._s(t.$t("products.detail.nav5")))]) : t._e()], 1)], 1), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("HeadLinks", {
                        attrs: {
                            buyBtnTxt: t.buyBtnTxt,
                            urlList: t.pageBase.saleLinkResponseList,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e()], 1)]), t._v(" "), e("a", {
                        attrs: {
                            name: "overview",
                            id: "overview"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "warp"
                    }, [e("section", {
                        staticClass: "info"
                    }, [e("div", {
                        class: "item-detail-left ".concat(t.isMea && "meaitemleft")
                    }, [e("div", {
                        staticClass: "item-detail-big-img"
                    }, [e("pic-zoom", {
                        attrs: {
                            url: t.thumbnail,
                            scale: 2
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "imgsize",
                        attrs: {
                            src: t.thumbnail,
                            alt: ""
                        }
                    }), t._v(" "), t.pageBase.baseData.productTag && t.pageBase.baseData.productTag.length ? e("ProductTag", {
                        attrs: {
                            tagStr: t.pageBase.baseData.productTag
                        }
                    }) : t._e(), t._v(" "), t.pageBase.awardsList && t.pageBase.awardsList.length ? e("Prize", {
                        attrs: {
                            list: t.pageBase.awardsList
                        }
                    }) : t._e()], 1), t._v(" "), e("div", {
                        staticClass: "item-detail-img-row"
                    }, [e("swiper", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            options: {
                                loop: !1,
                                autoplay: !1,
                                spaceBetween: 0,
                                slidesPerView: "auto",
                                freeMode: !0
                            }
                        }
                    }, t._l(t.curChild.imageList, (function(o, n) {
                        return e("swiper-slide", {
                            key: n,
                            class: "item-detail-img-small ".concat(t.isMea && "meaimgsmall")
                        }, [e("el-image", {
                            attrs: {
                                src: o,
                                "preview-src-list": t.curChild.imageList
                            },
                            on: {
                                click: function(e) {
                                    return t.switchtumb(n)
                                }
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "selbottom",
                            style: {
                                backgroundColor: t.thumbIndex === n ? "#DA291C" : ""
                            }
                        })], 1)
                    })), 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "pro-infos"
                    }, [t.pageBase.baseData.awardsName ? e("h4", {
                        staticClass: "sub-title"
                    }) : t._e(), t._v(" "), t.pageBase.baseData.name ? e("h1", {
                        staticClass: "title",
                        domProps: {
                            innerHTML: t._s(t.pageBase.baseData.name)
                        }
                    }) : t._e(), t._v(" "), t.curChild.description ? e("p", {
                        staticClass: "desc",
                        domProps: {
                            innerHTML: t._s(t.curChild.description)
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "sku-unit"
                    }, t._l(t.pageBase.baseData.childModelList, (function(o, n) {
                        return "none" != o.name ? e("a", {
                            key: o.value,
                            class: t.skuIndex1 == n ? "cur" : "",
                            attrs: {
                                href: "javascript:void(0)",
                                label: o.label,
                                value: o.value
                            },
                            on: {
                                click: function(e) {
                                    return t.selabSku(n, o.name)
                                }
                            }
                        }, [t._v(t._s(o.name))]) : t._e()
                    })), 0), t._v(" "), t.skuColor ? e("div", {
                        staticClass: "sku-color"
                    }, t._l(t.curModel.modelList, (function(o, n) {
                        return o.color ? e("a", {
                            class: t.skuIndex2 == n ? "cur" : "",
                            attrs: {
                                href: "javascript:void(0)"
                            },
                            on: {
                                click: function(e) {
                                    return t.colorSelSku(n, o.colorName)
                                }
                            }
                        }, [e("i", {
                            staticClass: "icon"
                        }, [e("span", {
                            staticClass: "after",
                            style: "background:" + o.color
                        })]), t._v(" "), e("span", [t._v(t._s(o.colorName))])]) : t._e()
                    })), 0) : t._e(), t._v(" "), t.buyBtnTxt && t.pageBase.saleLinkResponseList && t.pageBase.saleLinkResponseList.length ? e("MallLinks", {
                        attrs: {
                            urlList: t.pageBase.saleLinkResponseList,
                            buyBtnTxt: t.buyBtnTxt,
                            productCode: t.pageBase.baseData.productCode,
                            productName: t.pageBase.baseData.name
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "addCompare",
                        on: {
                            click: function(e) {
                                return t.addCompare(t.pageBase)
                            }
                        }
                    }, ["pc" == t.$store.state.equipment ? e("i", {
                        staticClass: "el-icon-circle-plus",
                        style: {
                            marginRight: t.isMea ? "0" : "calc(4 / 1920 * 100vw)",
                            marginLeft: t.isMea ? "calc(4 / 1920 * 100vw)" : "0",
                            fontSize: "calc(16 / 1920 * 100vw)"
                        }
                    }) : e("i", {
                        staticClass: "el-icon-circle-plus",
                        style: {
                            marginRight: t.isMea ? "0" : "4px",
                            marginLeft: t.isMea ? "4px" : "0",
                            fontSize: "16px"
                        }
                    }), t._v(" "), e("div", [t._v(t._s(t.$t("currency.compareTxt")))])])], 1)]), t._v(" "), 0 != t.pageBase.saleData.length ? e("section", {
                        staticClass: "deal"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.deal")))]), t._v(" "), t._l(t.pageBase.saleData, (function(o, n) {
                        return n < 2 ? e("div", {
                            key: o.value,
                            staticClass: "better-list",
                            attrs: {
                                label: o.label,
                                value: o.value
                            }
                        }, [e("div", {
                            staticClass: "pro-list"
                        }, t._l(o.dataList, (function(n, r) {
                            return r < 4 ? e("div", {
                                key: o.value,
                                staticClass: "itembox",
                                attrs: {
                                    label: o.label,
                                    value: o.value
                                }
                            }, [e("div", {
                                staticClass: "item"
                            }, [e("div", {
                                staticClass: "pic"
                            }, [e("img", {
                                attrs: {
                                    loading: "“lazy”",
                                    src: n.imageUrl,
                                    width: "100%"
                                }
                            })]), t._v(" "), e("p", {
                                staticClass: "name",
                                domProps: {
                                    innerHTML: t._s(n.name)
                                }
                            })]), t._v(" "), t._m(0, !0)]) : t._e()
                        })), 0)]) : t._e()
                    }))], 2) : t._e(), t._v(" "), t.pageBase.sellingPoint && t.pageBase.sellingPoint.length ? e("ul", {
                        staticClass: "featrue"
                    }, t._l(t.pageBase.sellingPoint, (function(o) {
                        return e("li", {
                            key: o.value,
                            attrs: {
                                label: o.label,
                                value: o.value
                            }
                        }, [e("img", {
                            attrs: {
                                loading: "“lazy”",
                                src: o.imageUrl
                            }
                        }), t._v(" "), e("p", {
                            domProps: {
                                innerHTML: t._s(o.title)
                            }
                        })])
                    })), 0) : t._e(), t._v(" "), t.pageBase.sellingPoint && !t.pageBase.sellingPoint.length ? e("div", {
                        staticClass: "empytpart"
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "full-warp"
                    }, t._l(t.pageBase.featureData.featureDataList, (function(o, n) {
                        return e("section", {
                            key: n,
                            staticClass: "item"
                        }, [1 == o.contentType ? e("el-image", {
                            staticClass: "img",
                            attrs: {
                                lazy: "",
                                src: "pc" == t.$store.state.equipment ? o.imageUrl : o.mobileImageUrl || o.imageUrl
                            }
                        }) : t._e(), t._v(" "), 2 == o.contentType && ("pc" == t.$store.state.equipment ? o.videoUrl : o.videoUrl || o.mobileVideoUrl) ? e("video", {
                            staticClass: "videotop",
                            staticStyle: {
                                width: "100%",
                                height: "100%",
                                "object-fit": "cover"
                            },
                            attrs: {
                                src: "pc" == t.$store.state.equipment ? o.videoUrl : o.mobileVideoUrl || o.videoUrl,
                                controls: "",
                                muted: "",
                                autoplay: !(!o.playState || "true" !== o.playState),
                                poster: "pc" == t.$store.state.equipment ? o.coverUrl : o.mobileCoverUrl
                            },
                            domProps: {
                                muted: !0
                            }
                        }) : t._e()], 1)
                    })), 0), t._v(" "), t.pageBase.productVideoData && t.pageBase.productVideoData.length ? e("Videos", {
                        attrs: {
                            videoData: t.pageBase.productVideoData
                        }
                    }) : t._e(), t._v(" "), 1 == t.pageBase.publicizeUpData.videoUpShow ? e("section", {
                        staticClass: "video"
                    }, [e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "object-fit": "cover"
                        },
                        attrs: {
                            src: t.pageBase.publicizeUpData.videoUpUrl,
                            controls: "",
                            poster: t.pageBase.publicizeUpData.videoUpCoverUrl
                        }
                    })]) : t._e(), t._v(" "), t.pageBase.productCommentData && t.pageBase.productCommentData.length ? e("div", {
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [e("section", {
                        staticClass: "media-new-section"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.newComments")))])]), t._v(" "), t.isOpenMedia ? e("Swiper", {
                        staticClass: "swipermediabase",
                        attrs: {
                            options: {
                                loop: !0,
                                autoplay: t.pageBase.productCommentData.length > 1 && {
                                    delay: 5e3,
                                    disableOnInteraction: !1
                                },
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: !0
                                }
                            }
                        }
                    }, [t._l(t.pageBase.productCommentData, (function(o, n) {
                        return e("SwiperSlide", {
                            key: n
                        }, [e("div", {
                            class: "swipitem ".concat(t.isMea && "measwitem")
                        }, [e("div", {
                            staticClass: "bgconbg"
                        }, [e("div", {
                            class: "logimg ".concat(!o.score && "toplog")
                        })]), t._v(" "), o.score ? e("div", {
                            staticClass: "scorebase"
                        }, [e("div", {
                            staticClass: "scope"
                        }, [t._v("SCORE")]), t._v(" "), e("div", {
                            staticClass: "star"
                        }, [e("div", [t._v(t._s(o.score))]), t._v(" "), e("div", {
                            staticClass: "maxsco"
                        }, [t._v("/" + t._s(o.totalGrade || "10"))])]), t._v(" "), null !== o.grade ? e("el-rate", {
                            class: "pc" == t.$store.state.equipment ? "ratebasepc" : "ratebasephone",
                            attrs: {
                                disabled: "",
                                colors: ["#fff", "#fff", "#fff"],
                                "disabled-void-color": "#e1584e"
                            },
                            model: {
                                value: o.grade,
                                callback: function(e) {
                                    t.$set(o, "grade", e)
                                },
                                expression: "item.grade"
                            }
                        }) : t._e()], 1) : t._e(), t._v(" "), e("div", {
                            staticClass: "titles"
                        }, [t._v(t._s(o.title) + " :")]), t._v(" "), e("div", {
                            staticClass: "content"
                        }, [t._v(t._s(o.content))])])])
                    })), t._v(" "), t.pageBase.productCommentData.length > 1 ? e("div", {
                        staticClass: "swiper-pagination",
                        attrs: {
                            slot: "pagination"
                        },
                        slot: "pagination"
                    }) : t._e()], 2) : t._e()], 1)]) : t._e(), t._v(" "), t.pageBase.argsData.length > 0 ? e("section", {
                        staticClass: "specific"
                    }, [e("a", {
                        attrs: {
                            name: "specification",
                            id: "specification"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Specifications")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.changeSpec
                        }
                    }, [t.isOpenSpec ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenSpec ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, [e("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.pageBase.argsData,
                            stripe: "",
                            "show-header": !1,
                            "empty-text": t.$t("currency.emptyTips")
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name"
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "value"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(o) {
                                return [e("div", {
                                    domProps: {
                                        innerHTML: t._s(o.row.value)
                                    }
                                })]
                            }
                        }], null, !1, 317324831)
                    })], 1)], 1) : t._e(), t._v(" "), t.isOpenSpec ? e("div", {
                        staticClass: "tips",
                        domProps: {
                            innerHTML: t._s(t.pageBase.footnote)
                        }
                    }) : t._e()]) : t._e(), t._v(" "), t.pageBase.numberData.length > 0 ? e("section", {
                        staticClass: "numbers"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.pnumbers")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.numClick
                        }
                    }, [t.isOpenNum ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenNum ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, t._l(t.pageBase.numberData, (function(o, n) {
                        return e("div", [e("el-table", {
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                data: o.data,
                                stripe: "",
                                "show-header": !0,
                                "empty-text": t.$t("currency.emptyTips"),
                                "header-cell-style": function() {
                                    return {
                                        color: "#000"
                                    }
                                }
                            }
                        }, [e("el-table-column", {
                            attrs: {
                                prop: "",
                                label: o.region
                            }
                        }), t._v(" "), e("el-table-column", {
                            attrs: {
                                prop: "capacity",
                                label: t.$t("products.detail.numberP1")
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(o) {
                                    return [e("div", {
                                        domProps: {
                                            innerHTML: t._s(o.row.capacity)
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), e("el-table-column", {
                            attrs: {
                                prop: "part",
                                label: t.$t("products.detail.numberP2")
                            }
                        })], 1)], 1)
                    })), 0) : t._e()]) : t._e(), t._v(" "), e("a", {
                        attrs: {
                            id: "support",
                            name: "support"
                        }
                    }), t._v(" "), t.pageBase.faqData.length > 0 ? e("section", {
                        staticClass: "support"
                    }, [e("Faqs", {
                        attrs: {
                            faqData: t.pageBase.faqData
                        }
                    })], 1) : t._e(), t._v(" "), t.pageBase.resourceData.software.length > 0 || t.pageBase.resourceData.manual.length > 0 || t.pageBase.resourceData.software.length ? e("section", {
                        staticClass: "support"
                    }, [e("div", {
                        staticClass: "faqhead a-c j-sb"
                    }, [e("h2", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Resources")))]), t._v(" "), e("div", {
                        staticClass: "changeopen",
                        on: {
                            click: t.sourceClick
                        }
                    }, [t.isOpenSource ? e("img", {
                        attrs: {
                            src: o(429),
                            alt: ""
                        }
                    }) : e("img", {
                        attrs: {
                            src: o(428),
                            alt: ""
                        }
                    })])]), t._v(" "), t.isOpenSource ? e("div", {
                        class: "tabs ".concat(t.isMea && "meatabs")
                    }, [t.pageBase.resourceData.software.length > 0 ? e("div", {
                        staticClass: "item"
                    }, [e("el-table", {
                        attrs: {
                            data: t.pageBase.resourceData.software,
                            stripe: "",
                            "empty-text": t.$t("currency.emptyTips"),
                            "header-cell-style": function() {
                                return {
                                    color: "#000"
                                }
                            }
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name",
                            label: t.$t("products.detail.ResourcesP1")
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "downName"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(n) {
                                return [e("a", {
                                    staticClass: "down-item",
                                    attrs: {
                                        href: n.row.url
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.downloadTap(n.row.name)
                                        }
                                    }
                                }, [t._v(t._s(t.$t("products.detail.ResDownload"))), e("img", {
                                    attrs: {
                                        loading: "“lazy”",
                                        src: o(434)
                                    }
                                })])]
                            }
                        }], null, !1, 3391120226)
                    })], 1)], 1) : t._e(), t._v(" "), t.pageBase.resourceData.manual.length > 0 ? e("div", {
                        staticClass: "item"
                    }, [e("el-table", {
                        attrs: {
                            data: t.pageBase.resourceData.manual,
                            stripe: "",
                            "empty-text": t.$t("currency.emptyTips"),
                            "header-cell-style": function() {
                                return {
                                    color: "#000"
                                }
                            }
                        }
                    }, [e("el-table-column", {
                        attrs: {
                            prop: "name",
                            label: t.$t("products.detail.ResourcesP2")
                        }
                    }), t._v(" "), e("el-table-column", {
                        attrs: {
                            prop: "downName"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(n) {
                                return [e("a", {
                                    staticClass: "down-item",
                                    attrs: {
                                        href: n.row.url
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.downloadTap(n.row.name)
                                        }
                                    }
                                }, [t._v(t._s(t.$t("products.detail.ResDownload"))), e("img", {
                                    attrs: {
                                        loading: "“lazy”",
                                        src: o(434)
                                    }
                                })])]
                            }
                        }], null, !1, 3391120226)
                    })], 1)], 1) : t._e()]) : t._e()]) : t._e(), t._v(" "), 1 == t.pageBase.publicizeDownData.videoDownShow ? e("section", {
                        staticClass: "video"
                    }, [e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "object-fit": "cover"
                        },
                        attrs: {
                            src: t.pageBase.publicizeDownData.videoDownUrl,
                            controls: "",
                            poster: t.pageBase.publicizeDownData.videoDownCoverUrl
                        }
                    })]) : t._e()], 1), t._v(" "), t.pageBase.mediaComment.length > 0 ? e("div", {
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [e("section", {
                        staticClass: "media-section"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Comments")))]), t._v(" "), e("div", {
                        staticClass: "kvWarp",
                        staticStyle: {
                            position: "relative"
                        }
                    }, [e("div", {
                        staticClass: "swiperBox"
                    }, [e("Swiper", {
                        attrs: {
                            options: t.lifeOption
                        }
                    }, t._l(t.pageBase.mediaComment, (function(t) {
                        return e("SwiperSlide", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value
                            }
                        }, [t.linkUrl ? e("a", {
                            attrs: {
                                href: t.linkUrl
                            }
                        }, [e("div", {
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "pic"
                        }, [e("el-image", {
                            attrs: {
                                fit: "cover",
                                src: t.imageUrl,
                                width: "100%"
                            }
                        })], 1)])]) : e("div", {
                            staticClass: "item"
                        }, [e("div", {
                            staticClass: "pic"
                        }, [e("el-image", {
                            attrs: {
                                fit: "cover",
                                src: t.imageUrl,
                                width: "100%"
                            }
                        })], 1)])])
                    })), 1)], 1)])])]) : t._e(), t._v(" "), t.pageBase && t.pageBase.recommend && t.pageBase.recommend.length > 0 ? e("section", {
                        staticClass: "related-section"
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("products.detail.Related")))]), t._v(" "), e("el-row", {
                        attrs: {
                            gutter: 16
                        }
                    }, t._l(t.pageBase.recommend, (function(t, o) {
                        return e("el-col", {
                            key: o,
                            attrs: {
                                sm: 6,
                                xs: 24
                            }
                        }, [e("ProdItem", {
                            attrs: {
                                item: t
                            }
                        })], 1)
                    })), 1)], 1) : t._e()])
                }), n, !1, null, "c9ce5528", null);
            e.a = component.exports;
            installComponents(component, {
                PicZoom: o(435).default,
                ProductTag: o(432).default,
                Prize: o(433).default
            })
        },
        721: function(t, e, o) {
            "use strict";
            o(498)
        },
        722: function(t, e, o) {
            var n = o(20),
                r = o(96),
                d = o(447),
                c = o(448),
                l = n((function(i) {
                    return i[1]
                })),
                m = r(d),
                f = r(c);
            l.push([t.i, '.sticky-nav[data-v-4f29c806]{background:#262626;height:54px;position:sticky;top:70px;width:100%;z-index:99}.sticky-nav .min-box[data-v-4f29c806]{align-items:center;display:flex;height:100%;justify-content:space-between;margin:0 auto;max-width:1550px;padding:0 20px}.sticky-nav .menuBox[data-v-4f29c806]{display:none}.sticky-nav .title[data-v-4f29c806]{color:#fff;font-size:14px}.sticky-nav .menu[data-v-4f29c806]{align-items:center;display:flex;height:50px}.sticky-nav .menu a[data-v-4f29c806]{color:#999;display:inline-block;font-size:14px;margin-left:30px}.sticky-nav .menu a[data-v-4f29c806]:hover{color:#fff}.sticky-nav .menu a.buy[data-v-4f29c806]{background:#da291c;border-radius:9px;color:#fff;font-size:12px;height:36px;line-height:36px;margin:0 0 0 20px;min-width:120px;padding:0 20px;text-align:center}.sticky-nav .menu a.active_anchor[data-v-4f29c806]{color:#fff}.sticky-nav .meame a[data-v-4f29c806]{margin-left:0;margin-right:30px}.sticky-nav .meame a.buy[data-v-4f29c806]{margin-left:0;margin-right:20px}.warp[data-v-4f29c806]{margin:60px auto;max-width:1440px}.warp .info[data-v-4f29c806]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-direction:row;padding:0 0 110px}.warp .info .pro-infos[data-v-4f29c806]{min-width:530px;overflow:hidden}.warp .info .pro-infos .awardList h2[data-v-4f29c806]{font-size:20px}.warp .info .pro-infos .awardList li[data-v-4f29c806]{background:#f6f6f6;border-radius:10px;display:inline-block;height:75px;margin-right:10px;width:75px}.warp .info .pro-infos .sub-title[data-v-4f29c806]{color:#000;font-size:20px}.warp .info .pro-infos .title[data-v-4f29c806]{color:#000;font-size:30px}.warp .info .pro-infos .desc[data-v-4f29c806]{color:#666;font-size:16px;font-weight:900;padding-top:40px}.warp .info .pro-infos .sku-unit[data-v-4f29c806]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-wrap:wrap;margin:-5px;padding:40px 0}.warp .info .pro-infos .sku-unit a[data-v-4f29c806]{align-items:center;background:#f7f7f7;border-radius:9px;color:#999;display:flex;font-size:14px;height:45px;justify-content:center;margin:5px;min-width:115px}.warp .info .pro-infos .sku-unit a.cur[data-v-4f29c806]{background:#da291c;color:#fff}.warp .info .pro-infos .sku-color[data-v-4f29c806]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-wrap:wrap;margin:-10px;padding:20px 0}.warp .info .pro-infos .sku-color a[data-v-4f29c806]{color:#000;font-size:14px;margin:10px}.warp .info .pro-infos .sku-color a .icon[data-v-4f29c806]{border:2px solid transparent;border-radius:100%;display:block;height:31px;margin-bottom:10px;padding:2px;width:31px}.warp .info .pro-infos .sku-color a .icon .after[data-v-4f29c806]{border:1px solid rgba(0,0,0,.5);border-radius:100%;content:"";display:block;height:100%;width:100%}.warp .info .pro-infos .sku-color a.cur .icon[data-v-4f29c806]{border:2px solid #999}.warp .info .pro-infos .sku-color a.red .icon[data-v-4f29c806]:after{background:red}.warp .info .pro-infos .btn-buy[data-v-4f29c806]{align-items:center;background:#000;border-radius:9px;color:#fff;display:flex;font-size:14px;height:54px;justify-content:center;margin-top:33px;width:100%}.warp .info .pro-infos .channel[data-v-4f29c806]{color:#da291c;display:block;font-size:14px;margin-top:20px}.warp .item-detail-show[data-v-4f29c806]{display:flex;flex-direction:row;margin:0 auto;padding:30px;width:1200px}.warp .item-detail-left[data-v-4f29c806]{margin-right:50px;width:540px}.warp .item-detail-left .item-detail-big-img[data-v-4f29c806]{background:#f7f7f7;border-radius:15px;cursor:pointer;height:540px;overflow:hidden;position:relative;width:540px}.warp .item-detail-left .item-detail-big-img img[data-v-4f29c806]{width:100%}.warp .item-detail-left .item-detail-big-img .imgsize[data-v-4f29c806]{padding:55px}.warp .meaitemleft[data-v-4f29c806]{margin-left:50px;margin-right:0}.warp .addCompare[data-v-4f29c806]{align-items:center;color:#da291c;cursor:pointer;display:flex;font-family:Avenir;font-size:14px;font-variation-settings:"opsz" auto;margin-top:23px;text-transform:capitalize;width:-moz-fit-content;width:fit-content}.warp .item-detail-img-row[data-v-4f29c806]{display:flex;margin-bottom:0;margin-left:0;margin-top:15px}.warp .item-detail-img-small[data-v-4f29c806]{background:#f7f7f7;border-radius:6px;cursor:pointer;height:114px;margin-left:0;margin-right:14px;position:relative;width:114px}.warp .item-detail-img-small img[data-v-4f29c806]{height:100%;width:100%}.warp .item-detail-img-small .selbottom[data-v-4f29c806]{border-bottom-left-radius:5px;border-bottom-right-radius:5px;bottom:0;height:3px;left:0;position:absolute;width:100%}.warp .meaimgsmall[data-v-4f29c806]{margin-left:14px;margin-right:0}.warp .deal[data-v-4f29c806]{border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 100px}.warp .deal .title[data-v-4f29c806]{border-bottom:2px solid #da291c;color:#000;font-size:30px;padding:50px 0 42px;text-align:center}.warp .deal .better-list[data-v-4f29c806]{align-items:center;background:#f7f7f7;border-radius:6px;display:flex;height:225px;justify-content:space-between;margin-bottom:14px;padding:48px 40px;width:100%}.warp .deal .better-list .pro-list[data-v-4f29c806]{display:flex}.warp .deal .better-list .pro-list .item[data-v-4f29c806]{width:187px}.warp .deal .better-list .pro-list .item .pic[data-v-4f29c806]{display:flex;height:90px;justify-content:center;margin:0}.warp .deal .better-list .pro-list .item .pic img[data-v-4f29c806]{height:100%;width:auto}.warp .deal .better-list .pro-list .item .name[data-v-4f29c806]{color:#000;font-size:14px;text-align:center}.warp .deal .better-list .pro-list .itembox[data-v-4f29c806]{display:flex}.warp .deal .better-list .pro-list .itembox:last-child .item-icon[data-v-4f29c806]{display:none}.warp .deal .better-list .pro-list .item-icon[data-v-4f29c806]{align-items:center;display:flex;height:90px;justify-content:center;margin:0 15px;width:12px}.warp .deal .better-list .btn-buy[data-v-4f29c806]{align-items:center;background:#da291c;border-radius:9px;color:#fff;display:flex;font-size:14px;height:54px;justify-content:center;width:182px}.warp .deal .better-list .btn-buy[data-v-4f29c806]:hover{background:#000}.warp .featrue[data-v-4f29c806]{display:flex;justify-content:space-around;margin:70px 0 60px;width:100%}.warp .featrue li[data-v-4f29c806]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.warp .featrue li img[data-v-4f29c806]{width:112px}.warp .featrue li p[data-v-4f29c806]{color:#000;font-size:16px;width:100%}.warp .video[data-v-4f29c806]{border-radius:15px;height:810px;margin-bottom:120px;margin-top:60px;overflow:hidden;width:100%}.warp .video video[data-v-4f29c806]{height:100%;width:100%}.warp .feature-list[data-v-4f29c806]{overflow:hidden;padding-top:50px}.warp .feature-list .title[data-v-4f29c806]{font-size:30px;margin:45px 0;text-align:center}.warp .feature-list .list li[data-v-4f29c806]{align-items:center;display:flex;justify-content:space-between;margin-bottom:150px;overflow:hidden}.warp .feature-list .list li[data-v-4f29c806]:nth-child(odd){flex-direction:row-reverse}.warp .feature-list .list .pic[data-v-4f29c806]{border-radius:6px;height:689px;width:689px}.warp .feature-list .list .cont[data-v-4f29c806]{box-sizing:border-box;height:100%;width:657px}.warp .feature-list .list .cont .h2[data-v-4f29c806]{font-size:36px;line-height:140%;margin-bottom:30px}.warp .feature-list .list .cont .p[data-v-4f29c806]{color:#666;font-size:16px;word-wrap:break-word}.warp .numbers[data-v-4f29c806],.warp .specific[data-v-4f29c806],.warp .support[data-v-4f29c806]{margin:0 auto;max-width:1440px;padding:90px 0}.warp .numbers .title[data-v-4f29c806],.warp .specific .title[data-v-4f29c806],.warp .support .title[data-v-4f29c806]{font-size:30px;padding:0 0 35px}.warp .numbers .tips[data-v-4f29c806],.warp .specific .tips[data-v-4f29c806],.warp .support .tips[data-v-4f29c806]{font-size:12px;font-weight:400;line-height:140%;padding:24px 0 0}.warp .numbers .tabs[data-v-4f29c806] .el-table th.el-table__cell,.warp .specific .tabs[data-v-4f29c806] .el-table th.el-table__cell,.warp .support .tabs[data-v-4f29c806] .el-table th.el-table__cell{background:#f7f7f7;text-align:left}.warp .numbers .tabs[data-v-4f29c806] .el-table__cell,.warp .specific .tabs[data-v-4f29c806] .el-table__cell,.warp .support .tabs[data-v-4f29c806] .el-table__cell{padding:20px 40px;text-align:left}.warp .numbers .meatabs[data-v-4f29c806] .el-table th.el-table__cell,.warp .specific .meatabs[data-v-4f29c806] .el-table th.el-table__cell,.warp .support .meatabs[data-v-4f29c806] .el-table th.el-table__cell{background:#f7f7f7;text-align:right}.warp .numbers .meatabs[data-v-4f29c806] .el-table__cell,.warp .specific .meatabs[data-v-4f29c806] .el-table__cell,.warp .support .meatabs[data-v-4f29c806] .el-table__cell{text-align:right}.warp .support[data-v-4f29c806]{padding:90px 0}.warp .support .title[data-v-4f29c806]{font-size:30px;padding:0 0 35px}.warp .support .tabs[data-v-4f29c806]{display:flex;flex-wrap:wrap;justify-content:space-between}.warp .support .tabs .item[data-v-4f29c806]{width:48%}.warp .support .tabs[data-v-4f29c806] .el-table th.el-table__cell>.cell{font-size:16px}.warp .support .tabs[data-v-4f29c806] .el-table .cell{font-size:13px}.warp .support .tabs .down-item[data-v-4f29c806]{align-items:center;color:#606266;display:flex;float:right;text-decoration-line:underline}.warp .support .tabs .down-item img[data-v-4f29c806]{margin-left:5px}.warp .support .tips[data-v-4f29c806]{font-size:12px;font-weight:400;line-height:140%;padding:24px 0 0}.media-section[data-v-4f29c806]{margin:0 auto 120px;max-width:1440px;overflow:hidden;position:relative}.media-section .title[data-v-4f29c806]{font-size:30px;margin:0 auto;padding:30px 0;width:100%}.media-section .swiper-button-next[data-v-4f29c806],.media-section .swiper-button-prev[data-v-4f29c806]{align-items:center;background:#4f525d;border-radius:100%;color:#fff;display:flex;height:35px;justify-content:center;overflow:hidden;top:55px;width:35px}.media-section .swiper-button-next[data-v-4f29c806]:after,.media-section .swiper-button-prev[data-v-4f29c806]:after{font-size:10px}.media-section .swiper-button-prev[data-v-4f29c806]{left:auto;right:50px}.media-section .swiper-button-next[data-v-4f29c806]{right:0}.media-section .swiperBox[data-v-4f29c806]{width:100%}.media-section .swiperBox .swiper-container[data-v-4f29c806]{height:100%;margin:0 auto;overflow:visible;overflow:initial;width:100%}.media-section .swiperBox .swiper-slide[data-v-4f29c806]{width:470px}.media-section .swiperBox .swiper-slide.swiper-slide-active .bottom h4[data-v-4f29c806]{color:#000}.media-section .swiperBox .item .pic[data-v-4f29c806]{border-radius:15px;overflow:hidden;width:100%}.media-section .swiperBox .item .bottom[data-v-4f29c806]{padding:36px 0;width:100%}.media-section .swiperBox .item .bottom h4[data-v-4f29c806]{color:#a1a1a1;font-size:20px;font-weight:500;height:53px;margin-bottom:20px}.media-section .swiperBox .item .bottom .tag[data-v-4f29c806]{bottom:53px;position:absolute;right:47px}.media-section .swiperBox .item .bottom .more[data-v-4f29c806]{color:#000;font-size:16px;visibility:hidden}.media-section .swiperBox .item .bottom .more .iconfont[data-v-4f29c806]{background:#da291c;border-radius:100%;color:#fff;font-size:12px;font-weight:700;height:24px;margin-left:10px;overflow:hidden;padding:5px;width:24px}.media-section .swiperBox .item:hover h4[data-v-4f29c806]{color:#000}.media-section .swiperBox .item:hover .more[data-v-4f29c806]{visibility:visible}.related-section[data-v-4f29c806]{margin:50px auto;max-width:1440px}.related-section .title[data-v-4f29c806]{font-size:30px;padding:20px 0;width:100%}.a-c[data-v-4f29c806]{align-items:center;display:flex}.j-sb[data-v-4f29c806]{justify-content:space-between}.faqhead[data-v-4f29c806]{margin:20px 0}.changeopen[data-v-4f29c806]{cursor:pointer;height:36px;margin-bottom:15px;width:36px}.changeopen img[data-v-4f29c806]{height:100%;width:100%}.media-new-section[data-v-4f29c806]{margin:0 auto 120px;max-width:1440px;overflow:hidden;position:relative}.media-new-section .title[data-v-4f29c806]{font-size:30px;margin:0 auto;padding:30px 0;width:100%}.media-new-section .swipitem[data-v-4f29c806]{background:#f7f7f7;border-radius:12px;font-family:Avenir;height:240px;padding:33px 176px 46px 87px;position:relative;width:100%}.media-new-section .swipitem .bgconbg[data-v-4f29c806]{height:100%;left:0;position:absolute;top:0;width:100%}.media-new-section .swipitem .bgconbg .logimg[data-v-4f29c806]{background:url(' + m + ') no-repeat;background-size:contain;height:36px;margin-left:66px;margin-top:103px;width:53.5px}.media-new-section .swipitem .titles[data-v-4f29c806]{display:flex;font-size:30px;font-weight:900;margin-top:10px}.media-new-section .swipitem .content[data-v-4f29c806]{color:#000;display:-webkit-box;font-size:26px;font-variation-settings:"opsz" auto;line-height:35.1px;margin-top:33px;width:100%;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.media-new-section .swipitem .scorebase[data-v-4f29c806]{align-items:center;background:url(' + f + ') no-repeat;background-size:contain;display:flex;flex-direction:column;height:141.5px;position:absolute;right:57px;top:0;width:108px}.media-new-section .swipitem .scorebase .scope[data-v-4f29c806]{color:#fff;font-size:18px;font-variation-settings:"opsz" auto;font-weight:900;line-height:14px;margin-top:19px}.media-new-section .swipitem .scorebase .star[data-v-4f29c806]{align-items:flex-end;color:#fff;display:flex;font-family:Avenir;font-size:44px;font-variation-settings:"opsz" auto;font-weight:900;letter-spacing:0;line-height:40px;margin-top:13px}.media-new-section .swipitem .scorebase .star .maxsco[data-v-4f29c806]{font-size:14px;line-height:17px;margin-left:2px}.media-new-section .measwitem[data-v-4f29c806]{padding:33px 87px 46px 176px}.media-new-section .measwitem .bgconbg .logimg[data-v-4f29c806]{margin-left:auto;margin-right:66px}.media-new-section .measwitem .scorebase[data-v-4f29c806]{left:57px;right:auto}.media-new-section .measwitem .scorebase .star .maxsco[data-v-4f29c806]{margin-left:0;margin-right:2px}.media-new-section .swipermediabase[data-v-4f29c806]{padding-bottom:20px}.media-new-section .swiper-pagination[data-v-4f29c806]{bottom:0!important}@media screen and (max-width:768px){.sticky-nav[data-v-4f29c806]{background:#fff;height:auto;padding:5px 20px;top:55px}.sticky-nav .min-box[data-v-4f29c806]{display:none}.sticky-nav .menuBox[data-v-4f29c806]{align-items:center;display:flex;justify-content:space-between}.sticky-nav .menuBox .menuDrop[data-v-4f29c806]{color:#000;font-size:14px;font-weight:600;text-transform:capitalize}.sticky-nav .menuBox .menuDrop .typebase[data-v-4f29c806]{align-items:center;display:flex;font-size:14px;font-weight:900;height:47px}.sticky-nav .menuBox .buy[data-v-4f29c806]{background:#da291c;border-radius:18px;color:#fff;font-size:12px;height:36px;line-height:36px;min-width:100px;padding:0 13px;text-align:center}.warp[data-v-4f29c806]{margin:0;width:100%}.warp .item-detail-img-row[data-v-4f29c806]{box-sizing:border-box;display:flex;margin-bottom:20px;margin-left:6px;overflow:auto;overflow-y:hidden;white-space:nowrap}.warp .item-detail-img-row .item-detail-img-small[data-v-4f29c806]{height:calc(33.33333vw - 23.33333px);margin-left:14px;margin-right:0;position:relative;width:calc(33.33333vw - 23.33333px)}.warp .item-detail-img-row .item-detail-img-small img[data-v-4f29c806]{height:100%;width:100%}.warp .item-detail-img-row .item-detail-img-small .selbottom[data-v-4f29c806]{border-bottom-left-radius:5px;border-bottom-right-radius:5px;bottom:0;height:3px;left:0;position:absolute;width:100%}.warp .item-detail-img-row .meaimgsmall[data-v-4f29c806]{margin-left:0;margin-right:14px}.warp .info[data-v-4f29c806]{border:0;display:block;padding:0}.warp .info .item-detail-left[data-v-4f29c806]{margin:0;width:100vw}.warp .info .item-detail-left .item-detail-big-img[data-v-4f29c806]{border-radius:0;height:100vw;width:100%}.warp .info .item-detail-left .item-detail-big-img .imgsize[data-v-4f29c806]{padding:75px}.warp .info .pro-infos[data-v-4f29c806]{min-width:0;padding:0 20px}.warp .info .pro-infos .awardList[data-v-4f29c806]{padding-top:20px}.warp .info .pro-infos .awardList h2[data-v-4f29c806]{font-size:14px}.warp .info .pro-infos .awardList li[data-v-4f29c806]{height:50px;width:50px}.warp .info .pro-infos .title[data-v-4f29c806]{font-size:23px}.warp .info .pro-infos .desc[data-v-4f29c806]{font-size:11px;padding-top:10px}.warp .info .pro-infos .sku-unit[data-v-4f29c806]{padding:30px 0}.warp .info .pro-infos .sku-unit a[data-v-4f29c806]{border-radius:5px;height:40px;min-width:100px}.warp .info .pro-infos .btn-buy[data-v-4f29c806]{background:#262626;border-radius:5px;height:48px}.warp .featrue[data-v-4f29c806]{flex-wrap:wrap;justify-content:center;margin:40px 0;padding:0 20px}.warp .featrue li[data-v-4f29c806]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin:10px 0;width:50%}.warp .featrue li p[data-v-4f29c806]{color:#000;font-size:10.6px;font-weight:600}.warp .video[data-v-4f29c806]{border-radius:0;height:160px;margin:0;padding:0 20px;width:100%}.warp .video video[data-v-4f29c806]{border-radius:5px}.warp .video[data-v-4f29c806]:last-child{margin-top:70px}.warp .feature-list[data-v-4f29c806]{padding:30px 20px}.warp .feature-list .title[data-v-4f29c806]{color:#000;font-size:18px;font-weight:600;margin:15px 0;text-align:left}.warp .feature-list .list li[data-v-4f29c806]{display:block;margin:20px 0}.warp .feature-list .list li .pic[data-v-4f29c806]{border-radius:2px;height:calc(100vw - 40px);width:calc(100vw - 40px)}.warp .feature-list .list li .cont[data-v-4f29c806]{width:100%}.warp .feature-list .list li .cont .h2[data-v-4f29c806]{font-size:23px;line-height:120%;margin-bottom:15px;margin-top:15px}.warp .feature-list .list li .cont .p[data-v-4f29c806]{font-size:13px}.warp .specific[data-v-4f29c806]{padding:0 20px}.warp .specific .title[data-v-4f29c806]{font-size:18px;padding:0 0 15px}.warp .specific .tabs .el-table[data-v-4f29c806]{color:#000;font-size:13px}.warp .specific .tabs[data-v-4f29c806] .el-table__cell{padding:10px 0}.warp .specific .tips[data-v-4f29c806]{color:#666;padding:20px 0 0}.warp .numbers[data-v-4f29c806]{padding:70px 20px 0}.warp .numbers .title[data-v-4f29c806]{font-size:18px;font-weight:600;padding:0 0 15px}.warp .numbers .tabs .el-table[data-v-4f29c806]{color:#000;font-size:13px}.warp .numbers .tabs[data-v-4f29c806] .el-table__cell{padding:10px 0}.warp .support[data-v-4f29c806]{padding:70px 20px 0}.warp .support .title[data-v-4f29c806]{font-size:18px;padding:0 0 15px}.warp .support .tabs .item[data-v-4f29c806]{width:100%}.warp .support .tabs .el-table[data-v-4f29c806]{color:#000;font-size:13px}.warp .support .tabs[data-v-4f29c806] .el-table__cell{padding:10px 0}.warp .support .tabs .down-item[data-v-4f29c806]{float:right}.media-section[data-v-4f29c806]{margin:0;padding:70px 20px 20px}.media-section .title[data-v-4f29c806]{font-size:18px;font-weight:600;padding:0 0 10px}.media-section .kvWarp .swiperBox .swiper-slide[data-v-4f29c806]{height:187px;overflow:hidden;width:279px}.related-section[data-v-4f29c806]{margin:0;padding:70px 20px 20px}.related-section .title[data-v-4f29c806]{font-size:18px;font-weight:600;padding:0 0 10px}.changeopen[data-v-4f29c806]{height:26px;width:26px}.media-new-section[data-v-4f29c806]{margin:0 20px 37px;position:relative}.media-new-section .changeopen[data-v-4f29c806]{display:none}.media-new-section .title[data-v-4f29c806]{font-size:14px;margin:0 auto;padding:22px 0}.media-new-section .swipitem[data-v-4f29c806]{align-items:center;border-radius:4px;display:flex;flex-direction:column;height:235px;padding:20px 23px;width:100%}.media-new-section .swipitem .bgconbg[data-v-4f29c806]{height:100%;left:0;position:absolute;top:0;width:100%}.media-new-section .swipitem .bgconbg .logimg[data-v-4f29c806]{background:url(' + m + ") no-repeat;background-size:contain;height:12px;margin-left:16px;margin-top:148px;width:18px}.media-new-section .swipitem .bgconbg .toplog[data-v-4f29c806]{margin-top:60px}.media-new-section .swipitem .titles[data-v-4f29c806]{display:flex;font-size:14px;font-weight:900}.media-new-section .swipitem .content[data-v-4f29c806]{font-size:13px;line-height:18px;margin-top:15px}.media-new-section .swipitem .scorebase[data-v-4f29c806]{height:86px;position:relative;right:0;top:0;width:64px}.media-new-section .swipitem .scorebase .scope[data-v-4f29c806]{font-size:10px;font-weight:300;line-height:10px;margin-top:7px}.media-new-section .swipitem .scorebase .star[data-v-4f29c806]{font-size:22px;font-weight:300;line-height:18px;margin-top:4px}.media-new-section .swipitem .scorebase .star .maxsco[data-v-4f29c806]{font-size:8px;line-height:8px;margin-left:1px}}@media only screen and (min-width:769px){.sticky-nav[data-v-4f29c806]{height:2.8125vw}.sticky-nav .menu a[data-v-4f29c806],.sticky-nav .title[data-v-4f29c806]{font-size:.7291666667vw}.sticky-nav .menu a[data-v-4f29c806]{margin-left:1.56vw}.sticky-nav .menu a.buy[data-v-4f29c806]{border-radius:.468vw;font-size:.624vw;height:1.875vw;line-height:1.875vw;margin-left:20px;min-width:6.24vw}.sticky-nav .meame a[data-v-4f29c806]{margin-left:0;margin-right:1.56vw}.sticky-nav .meame a.buy[data-v-4f29c806]{margin-left:0;margin-right:20px}.warp[data-v-4f29c806]{max-width:75vw;width:100%}.warp .info[data-v-4f29c806]{padding:0 0 5.72vw}.warp .info .item-detail-left[data-v-4f29c806]{margin-right:2.6vw;width:28.125vw}.warp .info .item-detail-left .item-detail-big-img[data-v-4f29c806]{height:28.125vw;width:28.125vw}.warp .info .item-detail-left .item-detail-big-img .addCompare[data-v-4f29c806]{border-radius:1.0935vw;font-size:.624vw;height:1.875vw;width:6.5vw}.warp .info .meaitemleft[data-v-4f29c806]{margin-left:2.6vw;margin-right:0}.warp .info .addCompare[data-v-4f29c806]{font-size:.7291666667vw;margin-top:1.1979166667vw}.warp .info .item-detail-img-row[data-v-4f29c806]{margin-top:.78vw}.warp .info .item-detail-img-row .item-detail-img-small[data-v-4f29c806]{height:4.54vw;width:4.54vw}.warp .info .pro-infos[data-v-4f29c806]{min-width:27.6041666667vw}.warp .info .pro-infos .title[data-v-4f29c806]{font-size:1.56vw}.warp .info .pro-infos .desc[data-v-4f29c806]{font-size:.833vw;padding-top:2.08vw}.warp .info .pro-infos .sku-unit[data-v-4f29c806]{margin:-.26vw;padding-top:2.08vw}.warp .info .pro-infos .sku-unit a[data-v-4f29c806]{border-radius:.468vw;font-size:.729vw;height:2.34vw;margin:.26vw;min-width:5.99vw}.warp .featrue[data-v-4f29c806]{padding:3.645vw 0 3.12vw}.warp .featrue li img[data-v-4f29c806]{width:5.82vw}.warp .featrue li p[data-v-4f29c806]{font-size:.833vw}.warp .video[data-v-4f29c806]{border-radius:.78vw;height:42.18vw;margin:3.12vw 0 6.24vw}.warp .feature-list[data-v-4f29c806]{padding-top:2.6vw}.warp .feature-list .title[data-v-4f29c806]{font-size:1.56vw;margin:2.34vw 0}.warp .feature-list .list li[data-v-4f29c806]{margin-bottom:7.8vw}.warp .feature-list .list li .pic[data-v-4f29c806]{height:35.88vw;min-width:35.88vw;width:35.88vw}.warp .feature-list .list li .cont[data-v-4f29c806]{max-width:34.21vw}.warp .feature-list .list li .cont .h2[data-v-4f29c806]{font-size:1.875vw;margin-bottom:1.56vw}.warp .feature-list .list li .cont .p[data-v-4f29c806]{font-size:.8325vw}.warp .numbers[data-v-4f29c806],.warp .specific[data-v-4f29c806],.warp .support[data-v-4f29c806]{max-width:75vw;padding:4.68vw 0}.warp .numbers .title[data-v-4f29c806],.warp .specific .title[data-v-4f29c806],.warp .support .title[data-v-4f29c806]{font-size:1.56vw;padding:0 0 1.82vw}.warp .numbers .tabs .el-table[data-v-4f29c806],.warp .specific .tabs .el-table[data-v-4f29c806],.warp .support .tabs .el-table[data-v-4f29c806]{font-size:.729vw}.warp .numbers .tips[data-v-4f29c806],.warp .specific .tips[data-v-4f29c806],.warp .support .tips[data-v-4f29c806]{font-size:.6225vw;padding:1.249vw 0 0}.related-section[data-v-4f29c806]{max-width:75vw;padding:2.6vw 0}.related-section .title[data-v-4f29c806]{font-size:1.56vw;padding:1.035vw 0}.media-new-section[data-v-4f29c806]{max-width:75vw}.media-new-section .faqhead[data-v-4f29c806]{margin:3.5vw 0}.media-new-section .faqhead .title[data-v-4f29c806]{font-size:1.56vw;padding:1.035vw 0}}", ""]), l.locals = {}, t.exports = l
        },
        723: function(t, e, o) {
            "use strict";
            o(499)
        },
        724: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".magnifier-box img{height:100%;width:100%}.media-new-section .el-rate__icon{margin-right:0!important}.media-new-section .ratebasepc span,.media-new-section .ratebasephone span{margin-top:5px}.media-new-section .ratebasephone i{font-size:11px}.media-new-section .swiper-pagination-bullet{background-color:#ccc!important}.media-new-section .swiper-pagination-bullet-active{background-color:#000!important}", ""]), n.locals = {}, t.exports = n
        },
        725: function(t, e, o) {
            "use strict";
            o(501)
        },
        726: function(t, e, o) {
            var n = o(20),
                r = o(96),
                d = o(447),
                c = o(448),
                l = n((function(i) {
                    return i[1]
                })),
                m = r(d),
                f = r(c);
            l.push([t.i, '.sticky-nav[data-v-68aa27a6]{background:#262626;height:54px;position:sticky;top:70.013px;width:100%;z-index:99}.sticky-nav .min-box[data-v-68aa27a6]{align-items:center;display:flex;height:100%;justify-content:space-between;margin:0 auto;max-width:1550px;padding:0 20px}.sticky-nav .menuBox[data-v-68aa27a6]{display:none}.sticky-nav .title[data-v-68aa27a6]{color:#fff;font-size:14px}.sticky-nav .menu[data-v-68aa27a6]{align-items:center;display:flex;height:50px}.sticky-nav .menu a[data-v-68aa27a6]{color:#999;display:inline-block;font-size:14px;margin-left:30px}.sticky-nav .menu a.active_anchor[data-v-68aa27a6],.sticky-nav .menu a[data-v-68aa27a6]:hover{color:#fff}.sticky-nav .menu .buy[data-v-68aa27a6]{align-items:center;background:#da291c;border-radius:18px;color:#fff;cursor:pointer;display:flex;font-size:12px;height:36px;line-height:36px;margin:0 0 0 20px;min-width:120px;padding-left:24px;text-align:center}.sticky-nav .menu .buy .downimg[data-v-68aa27a6]{height:24px;margin-left:17px;margin-right:6px;width:24px}.sticky-nav .meame a[data-v-68aa27a6]{margin-left:0;margin-right:30px}.sticky-nav .meame .buy[data-v-68aa27a6]{margin-left:0;margin-right:20px;padding-left:0;padding-right:24px}.sticky-nav .meame .buy .downimg[data-v-68aa27a6]{margin-left:6px;margin-right:17px}.warp[data-v-68aa27a6]{margin:60px auto;width:1440px}.warp .info[data-v-68aa27a6]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-direction:row;padding:0 0 110px}.warp .info .pro-infos[data-v-68aa27a6]{min-width:530px;overflow:hidden}.warp .info .pro-infos .awardList h2[data-v-68aa27a6]{font-size:20px}.warp .info .pro-infos .awardList li[data-v-68aa27a6]{background:#f6f6f6;border-radius:10px;display:inline-block;height:75px;margin-right:10px;width:75px}.warp .info .pro-infos .sub-title[data-v-68aa27a6]{color:#000;font-size:20px}.warp .info .pro-infos .title[data-v-68aa27a6]{color:#000;font-size:30px}.warp .info .pro-infos .desc[data-v-68aa27a6]{color:#666;font-size:16px;font-weight:900;padding-top:40px}.warp .info .pro-infos .sku-unit[data-v-68aa27a6]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-wrap:wrap;margin:-5px;padding:40px 0}.warp .info .pro-infos .sku-unit a[data-v-68aa27a6]{align-items:center;background:#f7f7f7;border-radius:9px;color:#999;display:flex;font-size:14px;height:45px;justify-content:center;margin:5px;min-width:115px}.warp .info .pro-infos .sku-unit a.cur[data-v-68aa27a6]{background:#da291c;color:#fff}.warp .info .pro-infos .sku-color[data-v-68aa27a6]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-wrap:wrap;margin:-10px;padding:20px 0}.warp .info .pro-infos .sku-color a[data-v-68aa27a6]{color:#000;font-size:14px;margin:10px}.warp .info .pro-infos .sku-color a .icon[data-v-68aa27a6]{border:2px solid transparent;border-radius:100%;display:block;height:31px;margin-bottom:10px;padding:2px;width:31px}.warp .info .pro-infos .sku-color a .icon .after[data-v-68aa27a6]{border:1px solid rgba(0,0,0,.5);border-radius:100%;content:"";display:block;height:100%;width:100%}.warp .info .pro-infos .sku-color a.cur .icon[data-v-68aa27a6]{border:2px solid #999}.warp .info .pro-infos .sku-color a.red .icon[data-v-68aa27a6]:after{background:red}.warp .info .pro-infos .btn-buy[data-v-68aa27a6]{align-items:center;background:#000;border-radius:9px;color:#fff;display:flex;font-size:14px;height:54px;justify-content:center;margin-top:33px;width:100%}.warp .info .pro-infos .channel[data-v-68aa27a6]{color:#da291c;display:block;font-size:14px;margin-top:20px}.warp .item-detail-show[data-v-68aa27a6]{display:flex;flex-direction:row;margin:0 auto;padding:30px;width:1200px}.warp .item-detail-left[data-v-68aa27a6]{margin-right:50px;width:540px}.warp .item-detail-left .item-detail-big-img[data-v-68aa27a6]{background:#f7f7f7;border-radius:15px;cursor:pointer;height:540px;overflow:hidden;position:relative;width:540px}.warp .item-detail-left .item-detail-big-img img[data-v-68aa27a6]{width:100%}.warp .item-detail-left .item-detail-big-img .imgsize[data-v-68aa27a6]{padding:55px}.warp .meaitemleft[data-v-68aa27a6]{margin-left:50px;margin-right:0}.warp .addCompare[data-v-68aa27a6]{align-items:center;color:#da291c;cursor:pointer;display:flex;font-family:Avenir;font-size:14px;font-variation-settings:"opsz" auto;margin-top:23px;text-transform:capitalize;width:-moz-fit-content;width:fit-content}.warp .item-detail-img-row[data-v-68aa27a6]{display:flex;margin-top:15px}.warp .item-detail-img-small[data-v-68aa27a6]{background:#f7f7f7;border-radius:6px;cursor:pointer;height:68px;margin-left:0;margin-right:14px;position:relative;width:68px}.warp .item-detail-img-small img[data-v-68aa27a6]{height:100%;width:100%}.warp .meaimgsmall[data-v-68aa27a6]{margin-left:14px;margin-right:0}.warp .deal[data-v-68aa27a6]{border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 100px}.warp .deal .title[data-v-68aa27a6]{border-bottom:2px solid #da291c;color:#000;font-size:30px;padding:50px 0 42px;text-align:center}.warp .deal .better-list[data-v-68aa27a6]{align-items:center;background:#f7f7f7;border-radius:6px;display:flex;height:225px;justify-content:space-between;margin-bottom:14px;padding:48px 40px;width:100%}.warp .deal .better-list .pro-list[data-v-68aa27a6]{display:flex}.warp .deal .better-list .pro-list .item[data-v-68aa27a6]{width:187px}.warp .deal .better-list .pro-list .item .pic[data-v-68aa27a6]{display:flex;height:90px;justify-content:center;margin:0}.warp .deal .better-list .pro-list .item .pic img[data-v-68aa27a6]{height:100%;width:auto}.warp .deal .better-list .pro-list .item .name[data-v-68aa27a6]{color:#000;font-size:14px;text-align:center}.warp .deal .better-list .pro-list .itembox[data-v-68aa27a6]{display:flex}.warp .deal .better-list .pro-list .itembox:last-child .item-icon[data-v-68aa27a6]{display:none}.warp .deal .better-list .pro-list .item-icon[data-v-68aa27a6]{align-items:center;display:flex;height:90px;justify-content:center;margin:0 15px;width:12px}.warp .deal .better-list .btn-buy[data-v-68aa27a6]{align-items:center;background:#da291c;border-radius:9px;color:#fff;display:flex;font-size:14px;height:54px;justify-content:center;width:182px}.warp .deal .better-list .btn-buy[data-v-68aa27a6]:hover{background:#000}.warp .featrue[data-v-68aa27a6]{display:flex;justify-content:space-around;margin-top:70px 0 60px 0;width:100%}.warp .featrue li[data-v-68aa27a6]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.warp .featrue li img[data-v-68aa27a6]{width:112px}.warp .featrue li p[data-v-68aa27a6]{color:#000;font-size:16px;width:100%}.warp .video[data-v-68aa27a6]{border-radius:15px;height:810px;margin-bottom:120px;margin-top:60px;overflow:hidden;width:100%}.warp .video video[data-v-68aa27a6]{height:100%;width:100%}.warp .feature-list[data-v-68aa27a6]{overflow:hidden}.warp .feature-list .title[data-v-68aa27a6]{font-size:30px;margin-bottom:42px;text-align:center}.warp .feature-list .list li[data-v-68aa27a6]{align-items:center;display:flex;justify-content:space-between;margin-bottom:150px;overflow:hidden}.warp .feature-list .list li[data-v-68aa27a6]:nth-child(odd){flex-direction:row-reverse}.warp .feature-list .list .pic[data-v-68aa27a6]{border-radius:6px;height:447px;width:689px}.warp .feature-list .list .cont[data-v-68aa27a6]{box-sizing:border-box;height:100%;width:461px}.warp .feature-list .list .cont .h2[data-v-68aa27a6]{font-size:36px;line-height:140%;margin-bottom:30px}.warp .feature-list .list .cont .p[data-v-68aa27a6]{color:#666;font-size:16px;word-break:break-word}.warp .numbers[data-v-68aa27a6],.warp .specific[data-v-68aa27a6],.warp .support[data-v-68aa27a6]{margin:0 auto;max-width:1440px;padding:90px 0}.warp .numbers .title[data-v-68aa27a6],.warp .specific .title[data-v-68aa27a6],.warp .support .title[data-v-68aa27a6]{font-size:30px;padding:0 0 35px}.warp .numbers .tips[data-v-68aa27a6],.warp .specific .tips[data-v-68aa27a6],.warp .support .tips[data-v-68aa27a6]{font-size:12px;font-weight:400;line-height:140%;padding:24px 0 0}.warp .numbers .tabs[data-v-68aa27a6] .el-table th.el-table__cell,.warp .specific .tabs[data-v-68aa27a6] .el-table th.el-table__cell,.warp .support .tabs[data-v-68aa27a6] .el-table th.el-table__cell{background:#f7f7f7;text-align:left}.warp .numbers .tabs[data-v-68aa27a6] .el-table__cell,.warp .specific .tabs[data-v-68aa27a6] .el-table__cell,.warp .support .tabs[data-v-68aa27a6] .el-table__cell{padding:20px 40px;text-align:left}.warp .numbers .meatabs[data-v-68aa27a6] .el-table th.el-table__cell,.warp .specific .meatabs[data-v-68aa27a6] .el-table th.el-table__cell,.warp .support .meatabs[data-v-68aa27a6] .el-table th.el-table__cell{background:#f7f7f7;text-align:right}.warp .numbers .meatabs[data-v-68aa27a6] .el-table__cell,.warp .specific .meatabs[data-v-68aa27a6] .el-table__cell,.warp .support .meatabs[data-v-68aa27a6] .el-table__cell{text-align:right}.warp .support[data-v-68aa27a6]{padding:90px 0}.warp .support .title[data-v-68aa27a6]{font-size:30px;padding:0 0 35px}.warp .support .tabs[data-v-68aa27a6]{display:flex;flex-wrap:wrap;justify-content:space-between}.warp .support .tabs .item[data-v-68aa27a6]{width:48%}.warp .support .tabs[data-v-68aa27a6] .el-table th.el-table__cell>.cell{font-size:16px}.warp .support .tabs[data-v-68aa27a6] .el-table .cell{font-size:13px}.warp .support .tabs .down-item[data-v-68aa27a6]{align-items:center;color:#606266;display:flex;text-decoration-line:underline}.warp .support .tabs .down-item img[data-v-68aa27a6]{margin-left:5px}.warp .support .tips[data-v-68aa27a6]{font-size:12px;font-weight:400;line-height:140%;padding:24px 0 0}.media-section[data-v-68aa27a6]{margin:0 auto 120px;max-width:1440px;overflow:hidden;position:relative}.media-section .title[data-v-68aa27a6]{font-size:30px;margin:0 auto;padding:30px 0;width:100%}.media-section .swiper-button-next[data-v-68aa27a6],.media-section .swiper-button-prev[data-v-68aa27a6]{align-items:center;background:#4f525d;border-radius:100%;color:#fff;display:flex;height:35px;justify-content:center;overflow:hidden;top:55px;width:35px}.media-section .swiper-button-next[data-v-68aa27a6]:after,.media-section .swiper-button-prev[data-v-68aa27a6]:after{font-size:10px}.media-section .swiper-button-prev[data-v-68aa27a6]{left:auto;right:50px}.media-section .swiper-button-next[data-v-68aa27a6]{right:0}.media-section .swiperBox[data-v-68aa27a6]{width:100%}.media-section .swiperBox .swiper-container[data-v-68aa27a6]{height:100%;margin:0 auto;overflow:visible;overflow:initial;width:100%}.media-section .swiperBox .swiper-slide[data-v-68aa27a6]{width:470px}.media-section .swiperBox .swiper-slide.swiper-slide-active .bottom h4[data-v-68aa27a6]{color:#000}.media-section .swiperBox .item .pic[data-v-68aa27a6]{border-radius:15px;overflow:hidden;width:100%}.media-section .swiperBox .item .bottom[data-v-68aa27a6]{padding:36px 0;width:100%}.media-section .swiperBox .item .bottom h4[data-v-68aa27a6]{color:#a1a1a1;font-size:20px;font-weight:500;height:53px;margin-bottom:20px}.media-section .swiperBox .item .bottom .tag[data-v-68aa27a6]{bottom:53px;position:absolute;right:47px}.media-section .swiperBox .item .bottom .more[data-v-68aa27a6]{color:#000;font-size:16px;visibility:hidden}.media-section .swiperBox .item .bottom .more .iconfont[data-v-68aa27a6]{background:#da291c;border-radius:100%;color:#fff;font-size:12px;font-weight:700;height:24px;margin-left:10px;overflow:hidden;padding:5px;width:24px}.media-section .swiperBox .item:hover h4[data-v-68aa27a6]{color:#000}.media-section .swiperBox .item:hover .more[data-v-68aa27a6]{visibility:visible}.related-section[data-v-68aa27a6]{margin:50px auto;max-width:1440px}.related-section .title[data-v-68aa27a6]{font-size:30px;padding:20px 0;width:100%}.full-warp .item[data-v-68aa27a6]{display:flex}.full-warp .item .img[data-v-68aa27a6]{width:100%}.full-warp .item .image-slot[data-v-68aa27a6]{align-items:center;display:flex;height:calc(100vh - 200px);justify-content:center;width:100%}.full-warp .item .pubVideo[data-v-68aa27a6]{height:800px}.banner-container[data-v-68aa27a6]{line-height:0}.a-c[data-v-68aa27a6]{align-items:center;display:flex}.j-sb[data-v-68aa27a6]{justify-content:space-between}.faqhead[data-v-68aa27a6]{margin:20px 0}.changeopen[data-v-68aa27a6]{cursor:pointer;height:36px;margin-bottom:15px;width:36px}.changeopen img[data-v-68aa27a6]{height:100%;width:100%}.media-new-section[data-v-68aa27a6]{margin:0 auto 120px;max-width:1440px;overflow:hidden;position:relative}.media-new-section .title[data-v-68aa27a6]{font-size:30px;margin:0 auto;padding:30px 0;width:100%}.media-new-section .swipitem[data-v-68aa27a6]{background:#f7f7f7;border-radius:12px;font-family:Avenir;height:240px;padding:33px 176px 46px 87px;position:relative;width:100%}.media-new-section .swipitem .bgconbg[data-v-68aa27a6]{height:100%;left:0;position:absolute;top:0;width:100%}.media-new-section .swipitem .bgconbg .logimg[data-v-68aa27a6]{background:url(' + m + ') no-repeat;background-size:contain;height:36px;margin-left:66px;margin-top:103px;width:53.5px}.media-new-section .swipitem .titles[data-v-68aa27a6]{display:flex;font-size:30px;font-weight:900;margin-top:10px}.media-new-section .swipitem .content[data-v-68aa27a6]{color:#000;display:-webkit-box;font-size:26px;font-variation-settings:"opsz" auto;line-height:35.1px;margin-top:33px;width:100%;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.media-new-section .swipitem .scorebase[data-v-68aa27a6]{align-items:center;background:url(' + f + ') no-repeat;background-size:contain;display:flex;flex-direction:column;height:141.5px;position:absolute;right:57px;top:0;width:108px}.media-new-section .swipitem .scorebase .scope[data-v-68aa27a6]{color:#fff;font-size:18px;font-variation-settings:"opsz" auto;font-weight:900;line-height:14px;margin-top:19px}.media-new-section .swipitem .scorebase .star[data-v-68aa27a6]{align-items:flex-end;color:#fff;display:flex;font-family:Avenir;font-size:44px;font-variation-settings:"opsz" auto;font-weight:900;letter-spacing:0;line-height:40px;margin-top:13px}.media-new-section .swipitem .scorebase .star .maxsco[data-v-68aa27a6]{font-size:14px;line-height:17px;margin-left:2px}.media-new-section .measwitem[data-v-68aa27a6]{padding:33px 87px 46px 176px}.media-new-section .measwitem .bgconbg .logimg[data-v-68aa27a6]{margin-left:auto;margin-right:66px}.media-new-section .measwitem .scorebase[data-v-68aa27a6]{left:57px;right:auto}.media-new-section .measwitem .scorebase .star .maxsco[data-v-68aa27a6]{margin-left:0;margin-right:2px}.media-new-section .swipermediabase[data-v-68aa27a6]{padding-bottom:20px}.media-new-section .swiper-pagination[data-v-68aa27a6]{bottom:0!important}@media screen and (max-width:768px){.sticky-nav[data-v-68aa27a6]{background:#fff;height:auto;padding:5px 20px;top:55px}.sticky-nav .min-box[data-v-68aa27a6]{display:none}.sticky-nav .menuBox[data-v-68aa27a6]{align-items:center;display:flex;justify-content:space-between}.sticky-nav .menuBox .menuDrop[data-v-68aa27a6]{color:#000;font-size:14px;font-weight:600;text-transform:capitalize}.sticky-nav .menuBox .menuDrop .typebase[data-v-68aa27a6]{align-items:center;display:flex;font-size:14px;font-weight:900;height:47px}.sticky-nav .menuBox .buy[data-v-68aa27a6]{background:#da291c;border-radius:18px;color:#fff;font-size:12px;height:36px;line-height:36px;min-width:100px;text-align:center}.full-warp .item[data-v-68aa27a6]{display:flex}.full-warp .item .image-slot[data-v-68aa27a6]{height:calc(100vh - 200px);width:90%}.full-warp .item .pubVideo[data-v-68aa27a6]{height:41.6vw}.warp[data-v-68aa27a6]{margin:0;width:100%}.warp .item-detail-img-row[data-v-68aa27a6]{box-sizing:border-box;display:flex;margin-bottom:20px;margin-left:6px;overflow:auto;overflow-y:hidden;white-space:nowrap}.warp .item-detail-img-row .item-detail-img-small[data-v-68aa27a6]{height:calc(33.33333vw - 23.33333px);margin-left:14px;margin-right:0;position:relative;width:calc(33.33333vw - 23.33333px)}.warp .item-detail-img-row .item-detail-img-small img[data-v-68aa27a6]{height:100%;width:100%}.warp .item-detail-img-row .item-detail-img-small .selbottom[data-v-68aa27a6]{border-bottom-left-radius:5px;border-bottom-right-radius:5px;bottom:0;height:3px;left:0;position:absolute;width:100%}.warp .item-detail-img-row .meaimgsmall[data-v-68aa27a6]{margin-left:0;margin-right:14px}.warp .info[data-v-68aa27a6]{border:0;display:block;padding:0}.warp .info .item-detail-left[data-v-68aa27a6]{margin:0;width:100vw}.warp .info .item-detail-left .item-detail-big-img[data-v-68aa27a6]{border-radius:0;height:100vw;width:100%}.warp .info .item-detail-left .item-detail-big-img .imgsize[data-v-68aa27a6]{padding:75px}.warp .info .pro-infos[data-v-68aa27a6]{min-width:0;padding:0 20px}.warp .info .pro-infos .awardList[data-v-68aa27a6]{padding-top:20px}.warp .info .pro-infos .awardList h2[data-v-68aa27a6]{font-size:14px}.warp .info .pro-infos .awardList li[data-v-68aa27a6]{height:50px;width:50px}.warp .info .pro-infos .title[data-v-68aa27a6]{font-size:23px}.warp .info .pro-infos .desc[data-v-68aa27a6]{font-size:11px;padding-top:10px}.warp .info .pro-infos .sku-unit[data-v-68aa27a6]{padding:30px 0}.warp .info .pro-infos .sku-unit a[data-v-68aa27a6]{border-radius:5px;height:40px;min-width:100px}.warp .info .pro-infos .btn-buy[data-v-68aa27a6]{background:#262626;border-radius:5px;height:48px}.warp .featrue[data-v-68aa27a6]{flex-wrap:wrap;justify-content:center;margin:40px 0;padding:0 20px}.warp .featrue li[data-v-68aa27a6]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin:10px 0;width:50%}.warp .featrue li p[data-v-68aa27a6]{color:#000;font-size:10.6px;font-weight:600}.warp .video[data-v-68aa27a6]{border-radius:0;height:160px;margin:0;padding:0 20px;width:100%}.warp .video video[data-v-68aa27a6]{border-radius:5px}.warp .video[data-v-68aa27a6]:last-child{margin-top:70px}.warp .feature-list[data-v-68aa27a6]{padding:30px 20px}.warp .feature-list .title[data-v-68aa27a6]{color:#000;font-size:18px;font-weight:600;margin:15px 0;text-align:left}.warp .feature-list .list li[data-v-68aa27a6]{display:block;margin:20px 0}.warp .feature-list .list li .pic[data-v-68aa27a6]{border-radius:2px;height:217px;width:100%}.warp .feature-list .list li .cont[data-v-68aa27a6]{width:100%}.warp .feature-list .list li .cont .h2[data-v-68aa27a6]{font-size:23px;line-height:120%;margin-bottom:15px;margin-top:15px}.warp .feature-list .list li .cont .p[data-v-68aa27a6]{font-size:13px}.warp .specific[data-v-68aa27a6]{padding:0 20px}.warp .specific .title[data-v-68aa27a6]{font-size:18px;padding:0 0 15px}.warp .specific .tabs .el-table[data-v-68aa27a6]{color:#000;font-size:13px}.warp .specific .tabs[data-v-68aa27a6] .el-table__cell{padding:10px 0}.warp .specific .tips[data-v-68aa27a6]{color:#666;padding:20px 0 0}.warp .numbers[data-v-68aa27a6]{padding:70px 20px 0}.warp .numbers .title[data-v-68aa27a6]{font-size:18px;font-weight:600;padding:0 0 15px}.warp .numbers .tabs .el-table[data-v-68aa27a6]{color:#000;font-size:13px}.warp .numbers .tabs[data-v-68aa27a6] .el-table__cell{padding:10px 0}.warp .support[data-v-68aa27a6]{padding:70px 20px 0}.warp .support .title[data-v-68aa27a6]{font-size:18px;padding:0 0 15px}.warp .support .tabs .item[data-v-68aa27a6]{width:100%}.warp .support .tabs .el-table[data-v-68aa27a6]{color:#000;font-size:13px}.warp .support .tabs[data-v-68aa27a6] .el-table__cell{padding:10px 0}.warp .support .tabs .down-item[data-v-68aa27a6]{float:right}.media-section[data-v-68aa27a6]{margin:0;padding:70px 20px 20px}.media-section .title[data-v-68aa27a6]{font-size:18px;font-weight:600;padding:0 0 10px}.media-section .kvWarp .swiperBox .swiper-slide[data-v-68aa27a6]{height:187px;overflow:hidden;width:279px}.related-section[data-v-68aa27a6]{margin:0;padding:70px 20px 20px}.related-section .title[data-v-68aa27a6]{font-size:18px;font-weight:600;padding:0 0 10px}.changeopen[data-v-68aa27a6]{height:26px;width:26px}.media-new-section[data-v-68aa27a6]{margin:0 20px 37px;position:relative}.media-new-section .changeopen[data-v-68aa27a6]{display:none}.media-new-section .title[data-v-68aa27a6]{font-size:14px;margin:0 auto;padding:22px 0}.media-new-section .swipitem[data-v-68aa27a6]{align-items:center;border-radius:4px;display:flex;flex-direction:column;height:235px;padding:20px 23px;width:100%}.media-new-section .swipitem .bgconbg[data-v-68aa27a6]{height:100%;left:0;position:absolute;top:0;width:100%}.media-new-section .swipitem .bgconbg .logimg[data-v-68aa27a6]{background:url(' + m + ") no-repeat;background-size:contain;height:12px;margin-left:16px;margin-top:148px;width:18px}.media-new-section .swipitem .bgconbg .toplog[data-v-68aa27a6]{margin-top:60px}.media-new-section .swipitem .titles[data-v-68aa27a6]{display:flex;font-size:14px;font-weight:900}.media-new-section .swipitem .content[data-v-68aa27a6]{font-size:13px;line-height:18px;margin-top:15px}.media-new-section .swipitem .scorebase[data-v-68aa27a6]{height:86px;position:relative;right:0;top:0;width:64px}.media-new-section .swipitem .scorebase .scope[data-v-68aa27a6]{font-size:10px;font-weight:300;line-height:10px;margin-top:7px}.media-new-section .swipitem .scorebase .star[data-v-68aa27a6]{font-size:22px;font-weight:300;line-height:18px;margin-top:4px}.media-new-section .swipitem .scorebase .star .maxsco[data-v-68aa27a6]{font-size:8px;line-height:8px;margin-left:1px}}@media only screen and (min-width:769px){.sticky-nav[data-v-68aa27a6]{height:2.8125vw}.sticky-nav .menu a[data-v-68aa27a6],.sticky-nav .title[data-v-68aa27a6]{font-size:.7291666667vw}.sticky-nav .menu a[data-v-68aa27a6]{margin-left:1.56vw}.sticky-nav .menu .buy[data-v-68aa27a6]{border-radius:.9375vw;font-size:.625vw;height:1.875vw;line-height:1.875vw;margin-left:1.0416666667vw;min-width:6.25vw;padding-left:1.25vw}.sticky-nav .menu .buy .downimg[data-v-68aa27a6]{height:1.25vw;margin-left:.8854166667vw;margin-right:.3125vw;width:1.25vw}.sticky-nav .meame a[data-v-68aa27a6]{margin-left:0;margin-right:1.56vw}.sticky-nav .meame .buy[data-v-68aa27a6]{margin-left:0;margin-right:1.0416666667vw;padding-left:0;padding-right:1.25vw}.sticky-nav .meame .buy .downimg[data-v-68aa27a6]{margin-left:.3125vw;margin-right:.8854166667vw}.full-warp .item[data-v-68aa27a6]{display:flex}.full-warp .item .pubVideo[data-v-68aa27a6]{height:41.6vw}.warp[data-v-68aa27a6]{max-width:75vw;width:100%}.warp .info[data-v-68aa27a6]{padding:0 0 5.72vw}.warp .info .item-detail-left[data-v-68aa27a6]{margin-right:2.6vw;width:28.125vw}.warp .info .item-detail-left .item-detail-big-img[data-v-68aa27a6]{height:28.125vw;width:28.125vw}.warp .info .item-detail-left .item-detail-big-img .addCompare[data-v-68aa27a6]{border-radius:1.0935vw;font-size:.624vw;height:1.875vw;width:6.5vw}.warp .info .meaitemleft[data-v-68aa27a6]{margin-left:2.6vw;margin-right:0}.warp .info .addCompare[data-v-68aa27a6]{font-size:.7291666667vw;margin-top:1.1979166667vw}.warp .info .item-detail-img-row[data-v-68aa27a6]{margin-top:.78vw}.warp .info .item-detail-img-row .item-detail-img-small[data-v-68aa27a6]{height:4.54vw;width:4.54vw}.warp .info .pro-infos[data-v-68aa27a6]{min-width:27.6041666667vw}.warp .info .pro-infos .title[data-v-68aa27a6]{font-size:1.56vw}.warp .info .pro-infos .desc[data-v-68aa27a6]{font-size:.833vw;padding-top:2.08vw}.warp .info .pro-infos .sku-unit[data-v-68aa27a6]{margin:-.26vw;padding-top:2.08vw}.warp .info .pro-infos .sku-unit a[data-v-68aa27a6]{border-radius:.468vw;font-size:.729vw;height:2.34vw;margin:.26vw;min-width:5.99vw}.warp .featrue[data-v-68aa27a6]{padding:3.645vw0 3.12vw 0}.warp .featrue li img[data-v-68aa27a6]{width:5.82vw}.warp .featrue li p[data-v-68aa27a6]{font-size:.622vw}.warp .video[data-v-68aa27a6]{border-radius:.78vw;height:42.18vw;margin:3.12vw 0 .624vw}.warp .feature-list[data-v-68aa27a6]{padding-top:2.6vw}.warp .feature-list .title[data-v-68aa27a6]{font-size:1.56vw;margin:2.34vw 0}.warp .feature-list .list li[data-v-68aa27a6]{margin-bottom:7.8vw}.warp .feature-list .list li .pic[data-v-68aa27a6]{height:3.78vw;min-width:35.88vw;width:35.88vw}.warp .feature-list .list li .cont[data-v-68aa27a6]{max-width:34.21vw}.warp .feature-list .list li .cont .h2[data-v-68aa27a6]{font-size:1.875vw;margin-bottom:1.56vw}.warp .feature-list .list li .cont .p[data-v-68aa27a6]{font-size:.8325vw}.warp .numbers[data-v-68aa27a6],.warp .specific[data-v-68aa27a6],.warp .support[data-v-68aa27a6]{max-width:75vw;padding:4.68vw 0}.warp .numbers .title[data-v-68aa27a6],.warp .specific .title[data-v-68aa27a6],.warp .support .title[data-v-68aa27a6]{font-size:1.56vw;padding:0 0 1.82vw}.warp .numbers .tabs .el-table[data-v-68aa27a6],.warp .specific .tabs .el-table[data-v-68aa27a6],.warp .support .tabs .el-table[data-v-68aa27a6]{font-size:.729vw}.warp .numbers .tips[data-v-68aa27a6],.warp .specific .tips[data-v-68aa27a6],.warp .support .tips[data-v-68aa27a6]{font-size:.622vw;padding:1.24vw 0 0}.related-section[data-v-68aa27a6]{max-width:75vw;padding:2.6vw 0}.related-section .title[data-v-68aa27a6]{font-size:1.56vw;padding:1.035vw 0}.media-new-section[data-v-68aa27a6]{max-width:75vw;padding:2.6vw 0}.media-new-section .faqhead[data-v-68aa27a6]{margin:3.5vw 0}.media-new-section .faqhead .title[data-v-68aa27a6]{font-size:1.56vw;padding:1.035vw 0}}", ""]), l.locals = {}, t.exports = l
        },
        727: function(t, e, o) {
            "use strict";
            o(502)
        },
        728: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".magnifier-box img{height:100%;width:100%}.media-new-section .el-rate__icon{margin-right:0!important}.media-new-section .ratebasepc span,.media-new-section .ratebasephone span{margin-top:5px}.media-new-section .ratebasephone i{font-size:11px}.media-new-section .swiper-pagination-bullet{background-color:#ccc!important}.media-new-section .swiper-pagination-bullet-active{background-color:#000!important}", ""]), n.locals = {}, t.exports = n
        },
        729: function(t, e, o) {
            "use strict";
            o(503)
        },
        730: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".cus-spinner[data-v-68aa27a6] svg>circle{stroke:rgba(0,122,255,.522)!important}", ""]), n.locals = {}, t.exports = n
        },
        731: function(t, e, o) {
            "use strict";
            o(504)
        },
        732: function(t, e, o) {
            var n = o(20),
                r = o(96),
                d = o(447),
                c = o(448),
                l = n((function(i) {
                    return i[1]
                })),
                m = r(d),
                f = r(c);
            l.push([t.i, '.sticky-nav[data-v-c9ce5528]{background:#262626;height:54px;position:sticky;top:70px;width:100%;z-index:99}.sticky-nav .min-box[data-v-c9ce5528]{align-items:center;display:flex;height:100%;justify-content:space-between;margin:0 auto;max-width:1550px;padding:0 20px}.sticky-nav .menuBox[data-v-c9ce5528]{display:none}.sticky-nav .title[data-v-c9ce5528]{color:#fff;font-size:14px}.sticky-nav .menu[data-v-c9ce5528]{align-items:center;display:flex;height:50px}.sticky-nav .menu a[data-v-c9ce5528]{color:#999;display:inline-block;font-size:14px;margin-left:30px}.sticky-nav .menu a[data-v-c9ce5528]:hover{color:#fff}.sticky-nav .menu a.buy[data-v-c9ce5528]{background:#da291c;border-radius:9px;color:#fff;font-size:12px;height:36px;line-height:36px;margin:0 0 0 20px;min-width:120px;padding:0 20px;text-align:center}.sticky-nav .menu a.active_anchor[data-v-c9ce5528]{color:#fff}.sticky-nav .meame a[data-v-c9ce5528]{margin-left:0;margin-right:30px}.sticky-nav .meame a.buy[data-v-c9ce5528]{margin-left:0;margin-right:20px}.warp[data-v-c9ce5528]{margin:60px auto}.warp .info[data-v-c9ce5528]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-direction:row;margin:0 auto;max-width:1440px;padding:0 0 110px}.warp .info .pro-infos[data-v-c9ce5528]{min-width:530px;overflow:hidden}.warp .info .pro-infos .awardList h2[data-v-c9ce5528]{font-size:20px}.warp .info .pro-infos .awardList li[data-v-c9ce5528]{background:#f6f6f6;border-radius:10px;display:inline-block;height:75px;margin-right:10px;width:75px}.warp .info .pro-infos .sub-title[data-v-c9ce5528]{color:#000;font-size:20px}.warp .info .pro-infos .title[data-v-c9ce5528]{color:#000;font-size:30px}.warp .info .pro-infos .desc[data-v-c9ce5528]{color:#666;font-size:16px;font-weight:900;padding-top:40px}.warp .info .pro-infos .sku-unit[data-v-c9ce5528]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-wrap:wrap;margin:-5px;padding:40px 0}.warp .info .pro-infos .sku-unit a[data-v-c9ce5528]{align-items:center;background:#f7f7f7;border-radius:9px;color:#999;display:flex;font-size:14px;height:45px;justify-content:center;margin:5px;min-width:115px}.warp .info .pro-infos .sku-unit a.cur[data-v-c9ce5528]{background:#da291c;color:#fff}.warp .info .pro-infos .sku-color[data-v-c9ce5528]{border-bottom:1px solid rgba(0,0,0,.1);display:flex;flex-wrap:wrap;margin:-10px;padding:20px 0}.warp .info .pro-infos .sku-color a[data-v-c9ce5528]{color:#000;font-size:14px;margin:10px}.warp .info .pro-infos .sku-color a .icon[data-v-c9ce5528]{border:2px solid transparent;border-radius:100%;display:block;height:31px;margin-bottom:10px;padding:2px;width:31px}.warp .info .pro-infos .sku-color a .icon .after[data-v-c9ce5528]{border:1px solid rgba(0,0,0,.5);border-radius:100%;content:"";display:block;height:100%;width:100%}.warp .info .pro-infos .sku-color a.cur .icon[data-v-c9ce5528]{border:2px solid #999}.warp .info .pro-infos .sku-color a.red .icon[data-v-c9ce5528]:after{background:red}.warp .info .pro-infos .btn-buy[data-v-c9ce5528]{align-items:center;background:#000;border-radius:9px;color:#fff;display:flex;font-size:14px;height:54px;justify-content:center;margin-top:33px;width:100%}.warp .info .pro-infos .channel[data-v-c9ce5528]{color:#da291c;display:block;font-size:14px;margin-top:20px}.warp .item-detail-show[data-v-c9ce5528]{display:flex;flex-direction:row;margin:0 auto;padding:30px;width:1200px}.warp .item-detail-left[data-v-c9ce5528]{margin-right:50px;width:540px}.warp .item-detail-left .item-detail-big-img[data-v-c9ce5528]{background:#f7f7f7;border-radius:15px;cursor:pointer;height:540px;overflow:hidden;position:relative;width:540px}.warp .item-detail-left .item-detail-big-img img[data-v-c9ce5528]{width:100%}.warp .item-detail-left .item-detail-big-img .imgsize[data-v-c9ce5528]{padding:55px}.warp .meaitemleft[data-v-c9ce5528]{margin-left:50px;margin-right:0}.warp .addCompare[data-v-c9ce5528]{align-items:center;color:#da291c;cursor:pointer;display:flex;font-family:Avenir;font-size:14px;font-variation-settings:"opsz" auto;margin-top:23px;text-transform:capitalize;width:-moz-fit-content;width:fit-content}.warp .item-detail-img-row[data-v-c9ce5528]{display:flex;margin-bottom:0;margin-left:0;margin-top:15px}.warp .item-detail-img-small[data-v-c9ce5528]{background:#f7f7f7;border-radius:6px;cursor:pointer;height:114px;margin-left:0;margin-right:14px;position:relative;width:114px}.warp .item-detail-img-small img[data-v-c9ce5528]{height:100%;width:100%}.warp .item-detail-img-small .selbottom[data-v-c9ce5528]{border-bottom-left-radius:5px;border-bottom-right-radius:5px;bottom:0;height:3px;left:0;position:absolute;width:100%}.warp .meaimgsmall[data-v-c9ce5528]{margin-left:14px;margin-right:0}.warp .deal[data-v-c9ce5528]{border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 100px}.warp .deal .title[data-v-c9ce5528]{border-bottom:2px solid #da291c;color:#000;font-size:30px;padding:50px 0 42px;text-align:center}.warp .deal .better-list[data-v-c9ce5528]{align-items:center;background:#f7f7f7;border-radius:6px;display:flex;height:225px;justify-content:space-between;margin-bottom:14px;padding:48px 40px;width:100%}.warp .deal .better-list .pro-list[data-v-c9ce5528]{display:flex}.warp .deal .better-list .pro-list .item[data-v-c9ce5528]{width:187px}.warp .deal .better-list .pro-list .item .pic[data-v-c9ce5528]{display:flex;height:90px;justify-content:center;margin:0}.warp .deal .better-list .pro-list .item .pic img[data-v-c9ce5528]{height:100%;width:auto}.warp .deal .better-list .pro-list .item .name[data-v-c9ce5528]{color:#000;font-size:14px;text-align:center}.warp .deal .better-list .pro-list .itembox[data-v-c9ce5528]{display:flex}.warp .deal .better-list .pro-list .itembox:last-child .item-icon[data-v-c9ce5528]{display:none}.warp .deal .better-list .pro-list .item-icon[data-v-c9ce5528]{align-items:center;display:flex;height:90px;justify-content:center;margin:0 15px;width:12px}.warp .deal .better-list .btn-buy[data-v-c9ce5528]{align-items:center;background:#da291c;border-radius:9px;color:#fff;display:flex;font-size:14px;height:54px;justify-content:center;width:182px}.warp .deal .better-list .btn-buy[data-v-c9ce5528]:hover{background:#000}.warp .featrue[data-v-c9ce5528]{display:flex;justify-content:space-around;margin:70px 0 60px}.warp .featrue li[data-v-c9ce5528]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.warp .featrue li img[data-v-c9ce5528]{width:112px}.warp .featrue li p[data-v-c9ce5528]{color:#000;font-size:16px;width:100%}.warp .empytpart[data-v-c9ce5528]{height:162px;width:100%}.warp .video[data-v-c9ce5528]{border-radius:15px;height:810px;margin-bottom:120px;margin-top:60px;overflow:hidden;width:100%}.warp .video video[data-v-c9ce5528]{height:100%;width:100%}.warp .full-warp .item[data-v-c9ce5528]{display:flex;overflow:hidden}.warp .full-warp .item .videotop[data-v-c9ce5528]{margin-top:-.1px}.warp .full-warp .item .img[data-v-c9ce5528]{width:100%}.warp .full-warp .item .pubVideo[data-v-c9ce5528]{height:800px}.warp .numbers[data-v-c9ce5528],.warp .specific[data-v-c9ce5528],.warp .support[data-v-c9ce5528]{margin:0 auto;max-width:1440px;padding:90px 0}.warp .numbers .title[data-v-c9ce5528],.warp .specific .title[data-v-c9ce5528],.warp .support .title[data-v-c9ce5528]{font-size:30px;padding:0 0 35px}.warp .numbers .tips[data-v-c9ce5528],.warp .specific .tips[data-v-c9ce5528],.warp .support .tips[data-v-c9ce5528]{font-size:12px;font-weight:400;line-height:140%;padding:24px 0 0}.warp .numbers .tabs[data-v-c9ce5528] .el-table th.el-table__cell,.warp .specific .tabs[data-v-c9ce5528] .el-table th.el-table__cell,.warp .support .tabs[data-v-c9ce5528] .el-table th.el-table__cell{background:#f7f7f7;text-align:left}.warp .numbers .tabs[data-v-c9ce5528] .el-table__cell,.warp .specific .tabs[data-v-c9ce5528] .el-table__cell,.warp .support .tabs[data-v-c9ce5528] .el-table__cell{padding:20px 40px;text-align:left}.warp .numbers .meatabs[data-v-c9ce5528] .el-table th.el-table__cell,.warp .specific .meatabs[data-v-c9ce5528] .el-table th.el-table__cell,.warp .support .meatabs[data-v-c9ce5528] .el-table th.el-table__cell{background:#f7f7f7;text-align:right}.warp .numbers .meatabs[data-v-c9ce5528] .el-table__cell,.warp .specific .meatabs[data-v-c9ce5528] .el-table__cell,.warp .support .meatabs[data-v-c9ce5528] .el-table__cell{text-align:right}.warp .support[data-v-c9ce5528]{padding:90px 0}.warp .support .title[data-v-c9ce5528]{font-size:30px;padding:0 0 35px}.warp .support .tabs[data-v-c9ce5528]{display:flex;flex-wrap:wrap;justify-content:space-between}.warp .support .tabs .item[data-v-c9ce5528]{width:48%}.warp .support .tabs[data-v-c9ce5528] .el-table th.el-table__cell>.cell{font-size:16px}.warp .support .tabs[data-v-c9ce5528] .el-table .cell{font-size:13px}.warp .support .tabs .down-item[data-v-c9ce5528]{align-items:center;color:#606266;display:flex;float:right;text-decoration-line:underline}.warp .support .tabs .down-item img[data-v-c9ce5528]{margin-left:5px}.warp .support .tips[data-v-c9ce5528]{font-size:12px;font-weight:400;line-height:140%;padding:24px 0 0}.media-section[data-v-c9ce5528]{margin:0 auto 120px;max-width:1440px;overflow:hidden;position:relative}.media-section .title[data-v-c9ce5528]{font-size:30px;margin:0 auto;padding:30px 0;width:100%}.media-section .swiper-button-next[data-v-c9ce5528],.media-section .swiper-button-prev[data-v-c9ce5528]{align-items:center;background:#4f525d;border-radius:100%;color:#fff;display:flex;height:35px;justify-content:center;overflow:hidden;top:55px;width:35px}.media-section .swiper-button-next[data-v-c9ce5528]:after,.media-section .swiper-button-prev[data-v-c9ce5528]:after{font-size:10px}.media-section .swiper-button-prev[data-v-c9ce5528]{left:auto;right:50px}.media-section .swiper-button-next[data-v-c9ce5528]{right:0}.media-section .swiperBox[data-v-c9ce5528]{width:100%}.media-section .swiperBox .swiper-container[data-v-c9ce5528]{height:100%;margin:0 auto;overflow:visible;overflow:initial;width:100%}.media-section .swiperBox .swiper-slide[data-v-c9ce5528]{width:470px}.media-section .swiperBox .swiper-slide.swiper-slide-active .bottom h4[data-v-c9ce5528]{color:#000}.media-section .swiperBox .item .pic[data-v-c9ce5528]{border-radius:15px;overflow:hidden;width:100%}.media-section .swiperBox .item .bottom[data-v-c9ce5528]{padding:36px 0;width:100%}.media-section .swiperBox .item .bottom h4[data-v-c9ce5528]{color:#a1a1a1;font-size:20px;font-weight:500;height:53px;margin-bottom:20px}.media-section .swiperBox .item .bottom .tag[data-v-c9ce5528]{bottom:53px;position:absolute;right:47px}.media-section .swiperBox .item .bottom .more[data-v-c9ce5528]{color:#000;font-size:16px;visibility:hidden}.media-section .swiperBox .item .bottom .more .iconfont[data-v-c9ce5528]{background:#da291c;border-radius:100%;color:#fff;font-size:12px;font-weight:700;height:24px;margin-left:10px;overflow:hidden;padding:5px;width:24px}.media-section .swiperBox .item:hover h4[data-v-c9ce5528]{color:#000}.media-section .swiperBox .item:hover .more[data-v-c9ce5528]{visibility:visible}.related-section[data-v-c9ce5528]{margin:50px auto;max-width:1440px}.related-section .title[data-v-c9ce5528]{font-size:30px;padding:20px 0;width:100%}.a-c[data-v-c9ce5528]{align-items:center;display:flex}.j-sb[data-v-c9ce5528]{justify-content:space-between}.faqhead[data-v-c9ce5528]{margin:20px 0}.changeopen[data-v-c9ce5528]{cursor:pointer;height:36px;margin-bottom:15px;width:36px}.changeopen img[data-v-c9ce5528]{height:100%;width:100%}.media-new-section[data-v-c9ce5528]{margin:0 auto 120px;max-width:1440px;overflow:hidden;position:relative}.media-new-section .title[data-v-c9ce5528]{font-size:30px;margin:0 auto;padding:30px 0;width:100%}.media-new-section .swipitem[data-v-c9ce5528]{background:#f7f7f7;border-radius:12px;font-family:Avenir;height:240px;padding:33px 176px 46px 87px;position:relative;width:100%}.media-new-section .swipitem .bgconbg[data-v-c9ce5528]{height:100%;left:0;position:absolute;top:0;width:100%}.media-new-section .swipitem .bgconbg .logimg[data-v-c9ce5528]{background:url(' + m + ') no-repeat;background-size:contain;height:36px;margin-left:66px;margin-top:103px;width:53.5px}.media-new-section .swipitem .titles[data-v-c9ce5528]{display:flex;font-size:30px;font-weight:900;margin-top:10px}.media-new-section .swipitem .content[data-v-c9ce5528]{color:#000;display:-webkit-box;font-size:26px;font-variation-settings:"opsz" auto;line-height:35.1px;margin-top:33px;width:100%;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.media-new-section .swipitem .scorebase[data-v-c9ce5528]{align-items:center;background:url(' + f + ') no-repeat;background-size:contain;display:flex;flex-direction:column;height:141.5px;position:absolute;right:57px;top:0;width:108px}.media-new-section .swipitem .scorebase .scope[data-v-c9ce5528]{color:#fff;font-size:18px;font-variation-settings:"opsz" auto;font-weight:900;line-height:14px;margin-top:19px}.media-new-section .swipitem .scorebase .star[data-v-c9ce5528]{align-items:flex-end;color:#fff;display:flex;font-family:Avenir;font-size:44px;font-variation-settings:"opsz" auto;font-weight:900;letter-spacing:0;line-height:40px;margin-top:13px}.media-new-section .swipitem .scorebase .star .maxsco[data-v-c9ce5528]{font-size:14px;line-height:17px;margin-left:2px}.media-new-section .measwitem[data-v-c9ce5528]{padding:33px 87px 46px 176px}.media-new-section .measwitem .bgconbg .logimg[data-v-c9ce5528]{margin-left:auto;margin-right:66px}.media-new-section .measwitem .scorebase[data-v-c9ce5528]{left:57px;right:auto}.media-new-section .measwitem .scorebase .star .maxsco[data-v-c9ce5528]{margin-left:0;margin-right:2px}.media-new-section .swipermediabase[data-v-c9ce5528]{padding-bottom:20px}.media-new-section .swiper-pagination[data-v-c9ce5528]{bottom:0!important}@media screen and (max-width:768px){.sticky-nav[data-v-c9ce5528]{background:#fff;height:auto;padding:5px 20px;top:55px}.sticky-nav .min-box[data-v-c9ce5528]{display:none}.sticky-nav .menuBox[data-v-c9ce5528]{align-items:center;display:flex;justify-content:space-between}.sticky-nav .menuBox .menuDrop[data-v-c9ce5528]{color:#000;font-size:14px;font-weight:600;text-transform:capitalize}.sticky-nav .menuBox .menuDrop .typebase[data-v-c9ce5528]{align-items:center;display:flex;font-size:14px;font-weight:900;height:47px}.sticky-nav .menuBox .buy[data-v-c9ce5528]{background:#da291c;border-radius:18px;color:#fff;font-size:12px;height:36px;line-height:36px;min-width:100px;padding:0 13px;text-align:center}.warp[data-v-c9ce5528]{margin:0;width:100%}.warp .item-detail-img-row[data-v-c9ce5528]{box-sizing:border-box;display:flex;margin-bottom:20px;margin-left:6px;overflow:auto;overflow-y:hidden;white-space:nowrap}.warp .item-detail-img-row .item-detail-img-small[data-v-c9ce5528]{height:calc(33.33333vw - 23.33333px);margin-left:14px;margin-right:0;position:relative;width:calc(33.33333vw - 23.33333px)}.warp .item-detail-img-row .item-detail-img-small img[data-v-c9ce5528]{height:100%;width:100%}.warp .item-detail-img-row .item-detail-img-small .selbottom[data-v-c9ce5528]{border-bottom-left-radius:5px;border-bottom-right-radius:5px;bottom:0;height:3px;left:0;position:absolute;width:100%}.warp .item-detail-img-row .meaimgsmall[data-v-c9ce5528]{margin-left:0;margin-right:14px}.warp .info[data-v-c9ce5528]{border:0;display:block;padding:0}.warp .info .item-detail-left[data-v-c9ce5528]{margin:0;width:100vw}.warp .info .item-detail-left .item-detail-big-img[data-v-c9ce5528]{border-radius:0;height:100vw;width:100%}.warp .info .item-detail-left .item-detail-big-img .imgsize[data-v-c9ce5528]{padding:75px}.warp .info .pro-infos[data-v-c9ce5528]{min-width:0;padding:0 20px}.warp .info .pro-infos .awardList[data-v-c9ce5528]{padding-top:20px}.warp .info .pro-infos .awardList h2[data-v-c9ce5528]{font-size:14px}.warp .info .pro-infos .awardList li[data-v-c9ce5528]{height:50px;width:50px}.warp .info .pro-infos .title[data-v-c9ce5528]{font-size:23px}.warp .info .pro-infos .desc[data-v-c9ce5528]{font-size:11px;padding-top:10px}.warp .info .pro-infos .sku-unit[data-v-c9ce5528]{padding:30px 0}.warp .info .pro-infos .sku-unit a[data-v-c9ce5528]{border-radius:5px;height:40px;min-width:100px}.warp .info .pro-infos .btn-buy[data-v-c9ce5528]{background:#262626;border-radius:5px;height:48px}.warp .featrue[data-v-c9ce5528]{flex-wrap:wrap;justify-content:center;margin:40px 0;padding:0 20px}.warp .featrue li[data-v-c9ce5528]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin:10px 0;width:50%}.warp .featrue li p[data-v-c9ce5528]{color:#000;font-size:10.6px;font-weight:600}.warp .empytpart[data-v-c9ce5528]{height:50px;width:100%}.warp .video[data-v-c9ce5528]{border-radius:0;height:160px;margin:0;padding:0 20px;width:100%}.warp .video video[data-v-c9ce5528]{border-radius:5px}.warp .video[data-v-c9ce5528]:last-child{margin-top:70px}.warp .full-warp .item[data-v-c9ce5528]{margin-left:0;overflow:hidden;width:100vw}.warp .full-warp .item .videotop[data-v-c9ce5528]{margin-top:0}.warp .full-warp .item .pubVideo[data-v-c9ce5528]{height:41.6vw}.warp .specific[data-v-c9ce5528]{padding:0 20px}.warp .specific .title[data-v-c9ce5528]{font-size:18px;padding:0 0 15px}.warp .specific .tabs .el-table[data-v-c9ce5528]{color:#000;font-size:13px}.warp .specific .tabs[data-v-c9ce5528] .el-table__cell{padding:10px 0}.warp .specific .tips[data-v-c9ce5528]{color:#666;padding:20px 0 0}.warp .numbers[data-v-c9ce5528]{padding:70px 20px 0}.warp .numbers .title[data-v-c9ce5528]{font-size:18px;font-weight:600;padding:0 0 15px}.warp .numbers .tabs .el-table[data-v-c9ce5528]{color:#000;font-size:13px}.warp .numbers .tabs[data-v-c9ce5528] .el-table__cell{padding:10px 0}.warp .support[data-v-c9ce5528]{padding:70px 20px 0}.warp .support .title[data-v-c9ce5528]{font-size:18px;padding:0 0 15px}.warp .support .tabs .item[data-v-c9ce5528]{width:100%}.warp .support .tabs .el-table[data-v-c9ce5528]{color:#000;font-size:13px}.warp .support .tabs[data-v-c9ce5528] .el-table__cell{padding:10px 0}.warp .support .tabs .down-item[data-v-c9ce5528]{float:right}.media-section[data-v-c9ce5528]{margin:0;padding:70px 20px 20px}.media-section .title[data-v-c9ce5528]{font-size:18px;font-weight:600;padding:0 0 10px}.media-section .kvWarp .swiperBox .swiper-slide[data-v-c9ce5528]{height:187px;overflow:hidden;width:279px}.related-section[data-v-c9ce5528]{margin:0;padding:70px 20px 20px}.related-section .title[data-v-c9ce5528]{font-size:18px;font-weight:600;padding:0 0 10px}.changeopen[data-v-c9ce5528]{height:26px;width:26px}.media-new-section[data-v-c9ce5528]{margin:0 20px 37px;position:relative}.media-new-section .changeopen[data-v-c9ce5528]{display:none}.media-new-section .title[data-v-c9ce5528]{font-size:14px;margin:0 auto;padding:22px 0}.media-new-section .swipitem[data-v-c9ce5528]{align-items:center;border-radius:4px;display:flex;flex-direction:column;height:235px;padding:20px 23px;width:100%}.media-new-section .swipitem .bgconbg[data-v-c9ce5528]{height:100%;left:0;position:absolute;top:0;width:100%}.media-new-section .swipitem .bgconbg .logimg[data-v-c9ce5528]{background:url(' + m + ") no-repeat;background-size:contain;height:12px;margin-left:16px;margin-top:148px;width:18px}.media-new-section .swipitem .bgconbg .toplog[data-v-c9ce5528]{margin-top:60px}.media-new-section .swipitem .titles[data-v-c9ce5528]{display:flex;font-size:14px;font-weight:900}.media-new-section .swipitem .content[data-v-c9ce5528]{font-size:13px;line-height:18px;margin-top:15px}.media-new-section .swipitem .scorebase[data-v-c9ce5528]{height:86px;position:relative;right:0;top:0;width:64px}.media-new-section .swipitem .scorebase .scope[data-v-c9ce5528]{font-size:10px;font-weight:300;line-height:10px;margin-top:7px}.media-new-section .swipitem .scorebase .star[data-v-c9ce5528]{font-size:22px;font-weight:300;line-height:18px;margin-top:4px}.media-new-section .swipitem .scorebase .star .maxsco[data-v-c9ce5528]{font-size:8px;line-height:8px;margin-left:1px}}@media only screen and (min-width:769px){.sticky-nav[data-v-c9ce5528]{height:2.8125vw}.sticky-nav .menu a[data-v-c9ce5528],.sticky-nav .title[data-v-c9ce5528]{font-size:.7291666667vw}.sticky-nav .menu a[data-v-c9ce5528]{margin-left:1.56vw}.sticky-nav .menu a.buy[data-v-c9ce5528]{border-radius:.468vw;font-size:.624vw;height:1.875vw;line-height:1.875vw;margin-left:20px;min-width:6.24vw}.sticky-nav .meame a[data-v-c9ce5528]{margin-left:0;margin-right:1.56vw}.sticky-nav .meame a.buy[data-v-c9ce5528]{margin-left:0;margin-right:20px}.warp[data-v-c9ce5528]{width:100%}.warp .info[data-v-c9ce5528]{margin:0 12.5vw;padding:0 0 5.72vw}.warp .info .item-detail-left[data-v-c9ce5528]{margin-right:2.6vw;width:28.125vw}.warp .info .item-detail-left .item-detail-big-img[data-v-c9ce5528]{height:28.125vw;width:28.125vw}.warp .info .item-detail-left .item-detail-big-img .addCompare[data-v-c9ce5528]{border-radius:1.0935vw;font-size:.624vw;height:1.875vw;width:6.5vw}.warp .info .meaitemleft[data-v-c9ce5528]{margin-left:2.6vw;margin-right:0}.warp .info .addCompare[data-v-c9ce5528]{font-size:.7291666667vw;margin-top:1.1979166667vw}.warp .info .item-detail-img-row[data-v-c9ce5528]{margin-top:.78vw}.warp .info .item-detail-img-row .item-detail-img-small[data-v-c9ce5528]{height:4.54vw;width:4.54vw}.warp .info .pro-infos[data-v-c9ce5528]{min-width:27.6041666667vw}.warp .info .pro-infos .title[data-v-c9ce5528]{font-size:1.56vw}.warp .info .pro-infos .desc[data-v-c9ce5528]{font-size:.833vw;padding-top:2.08vw}.warp .info .pro-infos .sku-unit[data-v-c9ce5528]{margin:-.26vw;padding-top:2.08vw}.warp .info .pro-infos .sku-unit a[data-v-c9ce5528]{border-radius:.468vw;font-size:.729vw;height:2.34vw;margin:.26vw;min-width:5.99vw}.warp .featrue[data-v-c9ce5528]{padding:3.645vw 0 3.12vw}.warp .featrue li img[data-v-c9ce5528]{width:5.82vw}.warp .featrue li p[data-v-c9ce5528]{font-size:.833vw}.warp .empytpart[data-v-c9ce5528]{height:6vw;width:100%}.warp .video[data-v-c9ce5528]{border-radius:.78vw;height:42.18vw;margin:3.12vw 0 6.24vw}.warp .full-warp .item[data-v-c9ce5528]{display:flex;overflow:hidden}.warp .full-warp .item .pubVideo[data-v-c9ce5528]{height:41.6vw}.warp .numbers[data-v-c9ce5528],.warp .specific[data-v-c9ce5528],.warp .support[data-v-c9ce5528]{max-width:75vw;padding:4.68vw 0}.warp .numbers .title[data-v-c9ce5528],.warp .specific .title[data-v-c9ce5528],.warp .support .title[data-v-c9ce5528]{font-size:1.56vw;padding:0 0 1.82vw}.warp .numbers .tabs .el-table[data-v-c9ce5528],.warp .specific .tabs .el-table[data-v-c9ce5528],.warp .support .tabs .el-table[data-v-c9ce5528]{font-size:.729vw}.warp .numbers .tips[data-v-c9ce5528],.warp .specific .tips[data-v-c9ce5528],.warp .support .tips[data-v-c9ce5528]{font-size:.6225vw;padding:1.249vw 0 0}.related-section[data-v-c9ce5528]{max-width:75vw;padding:2.6vw 0}.related-section .title[data-v-c9ce5528]{font-size:1.56vw;padding:1.035vw 0}.media-new-section[data-v-c9ce5528]{margin:0 12.5vw;max-width:75vw}.media-new-section .faqhead[data-v-c9ce5528]{margin:3.5vw 0}.media-new-section .faqhead .title[data-v-c9ce5528]{font-size:1.56vw;padding:1.035vw 0}}", ""]), l.locals = {}, t.exports = l
        },
        733: function(t, e, o) {
            "use strict";
            o(505)
        },
        734: function(t, e, o) {
            var n = o(20)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".magnifier-box img{height:100%;width:100%}.media-new-section .el-rate__icon{margin-right:0!important}.media-new-section .ratebasepc span,.media-new-section .ratebasephone span{margin-top:5px}.media-new-section .ratebasephone i{font-size:11px}.media-new-section .swiper-pagination-bullet{background-color:#ccc!important}.media-new-section .swiper-pagination-bullet-active{background-color:#000!important}", ""]), n.locals = {}, t.exports = n
        }
    }
]);