global.webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(102);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // "disableScroll":true
  }
});

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f792bb7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(105);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f792bb7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f792bb7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/video3/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f792bb7", Component.options)
  } else {
    hotAPI.reload("data-v-5f792bb7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_loadani__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_myheader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mp_weui_packages_toast__ = __webpack_require__(5);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Myheader: __WEBPACK_IMPORTED_MODULE_2__components_myheader__["a" /* default */], Loadani: __WEBPACK_IMPORTED_MODULE_1__components_loadani__["a" /* default */], Toast: __WEBPACK_IMPORTED_MODULE_3_mp_weui_packages_toast__["a" /* default */] },

  data: function data() {
    return {
      showLoading: true,
      sDetail: null,
      vpid: -1,
      playInfo: "",
      showMakerInfo: true,
      hasVoted: true,
      hasGood: false,
      hasBad: false,
      good: 0,
      bad: 0,
      user_id: -1,
      recommendVideos: [],
      data: {
        CoverURL: "",
        Duration: 0,
        Title: "",
        PlayInfoList: null
      }
    };
  },
  mounted: function mounted() {
    wx.setNavigationBarTitle({
      title: ""
    });
  },

  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: "",
      path: "/pages/video3/main?vpid=" + this.vpid
    };
  },
  onUnload: function onUnload() {},
  onShow: function onShow() {
    var that = this;
    that.showLoading = true;

    that.vpid = parseInt(this.$root.$mp.query.vpid);

    if (that.vpid <= 0) {
      Object(__WEBPACK_IMPORTED_MODULE_3_mp_weui_packages_toast__["a" /* default */])("数据异常,请退出重试");
      wx.navigateBack();
      return;
    }

    var user_id = wx.getStorageSync("USERID");
    that.user_id = user_id;
    if (!user_id || typeof user_id == "undefined" || user_id == 0) {
      //用户未授权
      Object(__WEBPACK_IMPORTED_MODULE_3_mp_weui_packages_toast__["a" /* default */])("用户id异常");
      that.goToShouquanPage();
      return;
    } else {
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting["scope.userInfo"]) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            that.getData();
          } else {
            //用户未授权
            that.goToShouquanPage();
          }
        }
      });
    }
  },

  methods: {
    recommendClick: function recommendClick(item) {
      var that = this;
      that.vpid = item.videoPlayInfo.id;
      that.sDetail = item;
      wx.setStorageSync("ITEMDETAIL3", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(item));
      that.getData();
    },
    addGood: function addGood() {
      var that = this;
      that.good = that.good + 1;
      that.hasVoted = true;
      that.hasGood = true;

      that.$Fly.get("addVideoVote", {
        tid: that.sDetail.data.id,
        attitude: "1",
        uid: that.user_id
      }).then(function (res) {}).catch(function (e) {
        return console.log(e);
      });
    },
    addBad: function addBad() {
      var that = this;
      that.bad = that.bad + 1;

      that.hasVoted = true;
      that.hasBad = true;

      that.$Fly.get("addVideoVote", {
        tid: that.sDetail.data.id,
        attitude: "0",
        uid: that.user_id
      }).then(function (res) {}).catch(function (e) {
        return console.log(e);
      });
    },

    showShare: function showShare() {
      wx.showShareMenu({
        withShareTicket: true
      });
    },

    getData: function getData() {
      var that = this;
      if (that.vpid !== 0) {
        that.getVideoInfo(this.vpid);
        that.getVideoVote(this.vpid);
        that.isVideoVote(this.vpid, that.user_id);
        that.viewVideo(this.vpid, that.user_id);
      }
      wx.getStorage({
        key: "ITEMDETAIL3",
        success: function success(res) {
          that.sDetail = JSON.parse(res.data);
          that.getRecommendVideos(that.sDetail.data.Type, that.user_id);
        }
      });
    },

    dingyueClick: function dingyueClick() {},
    getRecommendVideos: function getRecommendVideos(type, user_id) {
      var that = this;
      that.$Fly.get("getRecommendVideos", {
        type: type,
        user_id: user_id
      }).then(function (res) {
        that.showLoading = false;
        that.recommendVideos = res.data;
      }).catch(function (e) {
        that.showLoading = false;
      });
    },
    videoPlay: function videoPlay() {
      var that = this;
      that.$Fly.get("videoPlay", {
        vpid: that.vpid,
        user_id: that.user_id
      }).then(function (res) {}).catch(function (e) {
        return console.log(e);
      });
    },
    toggleMakerInfo: function toggleMakerInfo() {
      this.showMakerInfo = !this.showMakerInfo;
    },
    getVideoInfo: function getVideoInfo(vpid) {
      var _this = this;

      var that = this;
      that.$Fly.get("getVideoPlayInfo", {
        vpid: vpid
      }).then(function (res) {
        that.data = res.data;
        var playInfoList = JSON.parse(_this.data.PlayInfoList).PlayInfo;
        for (var i = 0; i < playInfoList.length; i++) {
          var info = playInfoList[i];
          if (info.Definition === "FD") {
            that.playInfo = info.PlayURL;
            break;
          }
        }
      }).catch(function (e) {
        return console.log(e);
      });
    },
    getVideoVote: function getVideoVote(vpid) {
      var that = this;
      that.$Fly.get("getVideoVote", {
        vpid: vpid
      }).then(function (res) {

        console.log(res.data);

        that.good = res.data.good;
        that.bad = res.data.bad;
      }).catch(function (e) {
        return console.log(e);
      });
    },
    viewVideo: function viewVideo(vpid, user_id) {
      var that = this;
      that.$Fly.get("viewVideo", {
        vpid: vpid,
        user_id: user_id
      }).then(function (res) {}).catch(function (e) {
        return console.log(e);
      });
    },

    isVideoVote: function isVideoVote(vpid, uid) {
      var that = this;
      that.$Fly.get("isVideoVote", {
        vpid: vpid,
        uid: uid
      }).then(function (res) {

        if (res.data) {
          if (res.data.attitude === "1") {
            that.hasVoted = true;
            that.hasGood = true;
            that.hasBad = false;
          } else {
            that.hasVoted = true;
            that.hasGood = false;
            that.hasBad = true;
          }
        } else {
          that.hasVoted = false;
          that.hasGood = false;
          that.hasBad = false;
        }
      }).catch(function (e) {
        return console.log(e);
      });
    },

    getVideoVotes: function getVideoVotes(vpid, uid) {
      var that = this;
      that.$Fly.get("getVideoVote", {
        vpid: vpid,
        uid: uid
      }).then(function (res) {

        console.log(res);
      }).catch(function (e) {
        return console.log(e);
      });
    },

    goToShouquanPage: function goToShouquanPage() {
      wx.navigateTo({ url: "/pages/shouquan/main" });
    }

  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "content",
    staticStyle: {
      "display": "flex",
      "flex-direction": "column"
    }
  }, [_c('div', {
    staticStyle: {
      "position": "fixed",
      "width": "100%",
      "top": "0",
      "z-index": "999",
      "height": "35vh"
    }
  }, [_c('video', {
    staticStyle: {
      "width": "100%",
      "height": "100%"
    },
    attrs: {
      "initial-time": "0",
      "poster": _vm.data.CoverURL,
      "src": _vm.playInfo,
      "eventid": '0'
    },
    on: {
      "play": _vm.videoPlay
    }
  })]), _vm._v(" "), _c('view', {
    staticStyle: {
      "flex": "1",
      "position": "fixed",
      "height": "65vh",
      "width": "100%",
      "bottom": "0"
    }
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": "true"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "background-color": "#fff",
      "padding": "10px"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex"
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "tap": _vm.toggleMakerInfo
    }
  }, [_c('text', {
    staticStyle: {
      "flex": "1",
      "font-size": "15px",
      "color": "#333",
      "margin": "10px 5px"
    }
  }, [_vm._v(_vm._s(_vm.data.Title))]), _vm._v(" "), (_vm.showMakerInfo) ? _c('block', [_c('image', {
    staticStyle: {
      "margin-top": "15px",
      "width": "15px",
      "height": "15px",
      "margin-right": "10px"
    },
    attrs: {
      "src": "/static/images/up3.png"
    }
  })]) : _c('block', [_c('image', {
    staticStyle: {
      "margin-top": "15px",
      "width": "15px",
      "height": "15px",
      "margin-right": "10px"
    },
    attrs: {
      "src": "/static/images/down3.png"
    }
  })])], 1), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#999",
      "margin-left": "5px"
    }
  }, [_vm._v(_vm._s(_vm.sDetail ? _vm.sDetail.data.View : "1") + "次观看\n          ")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border-bottom": "1px solid #eee",
      "display": "flex",
      "padding": "10px",
      "justify-content": "space-around",
      "align-items": "center",
      "background-color": "#fff"
    }
  }, [(_vm.hasVoted) ? _c('block', [_c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    }
  }, [(_vm.hasGood) ? _c('block', [_c('image', {
    staticStyle: {
      "width": "25px",
      "height": "25px"
    },
    attrs: {
      "src": "/static/images/liked.png"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#ff4f4d"
    }
  }, [_vm._v(_vm._s(_vm.good))])]) : _c('block', [_c('image', {
    staticStyle: {
      "width": "25px",
      "height": "25px"
    },
    attrs: {
      "src": "/static/images/like.png"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666"
    }
  }, [_vm._v(_vm._s(_vm.good))])])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    }
  }, [(_vm.hasBad) ? _c('block', [_c('image', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": "/static/images/unliked.png"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#ff4f4d"
    }
  }, [_vm._v(_vm._s(_vm.bad))])]) : _c('block', [_c('image', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": "/static/images/unlike.png"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666"
    }
  }, [_vm._v(_vm._s(_vm.bad))])])], 1)]) : _c('block', [_c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": _vm.addGood
    }
  }, [(_vm.hasGood) ? _c('block', [_c('image', {
    staticStyle: {
      "width": "25px",
      "height": "25px"
    },
    attrs: {
      "src": "/static/images/liked.png"
    }
  })]) : _c('block', [_c('image', {
    staticStyle: {
      "width": "25px",
      "height": "25px"
    },
    attrs: {
      "src": "/static/images/like.png"
    }
  })]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666"
    }
  }, [_vm._v(_vm._s(_vm.good))])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "tap": _vm.addBad
    }
  }, [(_vm.hasBad) ? _c('block', [_c('image', {
    staticStyle: {
      "width": "25px",
      "height": "25px"
    },
    attrs: {
      "src": "/static/images/unliked.png"
    }
  })]) : _c('block', [_c('image', {
    staticStyle: {
      "width": "25px",
      "height": "25px"
    },
    attrs: {
      "src": "/static/images/unlike.png"
    }
  })]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666"
    }
  }, [_vm._v(_vm._s(_vm.bad))])], 1)]), _vm._v(" "), _c('div', [_c('button', {
    staticStyle: {
      "border": "none",
      "padding": "0"
    },
    attrs: {
      "plain": "true",
      "open-type": "share"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "width": "25px",
      "height": "25px"
    },
    attrs: {
      "src": "/static/images/share.png"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666"
    }
  }, [_vm._v("分享")])])])], 1)], 1), _vm._v(" "), (_vm.showMakerInfo) ? _c('block', [_c('div', {
    staticStyle: {
      "display": "flex",
      "padding": "10px",
      "background-color": "#fff",
      "align-items": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "width": "30px",
      "height": "30px",
      "margin-right": "10px",
      "border-radius": "50%",
      "overflow": "hidden"
    },
    attrs: {
      "src": _vm.sDetail ? _vm.sDetail.videoMaker.HeaderURL : ''
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "align-items": "left"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "14px",
      "color": "#333"
    }
  }, [_vm._v(_vm._s(_vm.sDetail ? _vm.sDetail.videoMaker.Name : ""))]), _vm._v(" "), (false) ? _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#999"
    }
  }, [_vm._v("1.9万 位订阅者")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1",
      "align-items": "center"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    },
    attrs: {
      "eventid": '4'
    },
    on: {
      "tap": _vm.dingyueClick
    }
  }, [_c('image', {
    staticStyle: {
      "margin-left": "12px",
      "width": "12px",
      "height": "12px",
      "margin-right": "5px"
    },
    attrs: {
      "src": "/static/images/movie1.png"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#ff4f4d"
    }
  }, [_vm._v("订阅")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "1px",
      "background-color": "#eee"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "1px",
      "background-color": "#eee"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "padding": "10px",
      "background-color": "#fff"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "margin-bottom": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#999"
    }
  }, [_vm._v("猜你喜欢")])]), _vm._v(" "), _vm._l((_vm.recommendVideos), function(item, index) {
    return _c('div', {
      key: index,
      staticStyle: {
        "display": "flex",
        "margin-bottom": "15px"
      },
      attrs: {
        "eventid": '5-' + index
      },
      on: {
        "tap": function($event) {
          _vm.recommendClick(item)
        }
      }
    }, [_c('div', {
      staticStyle: {
        "width": "150px",
        "height": "90px",
        "margin-right": "10px"
      }
    }, [_c('div', {
      staticStyle: {
        "position": "relative",
        "width": "100%",
        "height": "100%"
      }
    }, [_c('image', {
      staticStyle: {
        "width": "100%",
        "height": "100%"
      },
      attrs: {
        "src": item.videoPlayInfo.CoverURL
      }
    }), _vm._v(" "), _c('text', {
      staticStyle: {
        "position": "absolute",
        "bottom": "5px",
        "right": "5px",
        "background-color": "#000",
        "color": "white",
        "padding": "1px 5px",
        "font-size": "10px",
        "border-radius": "4px"
      }
    }, [_vm._v("\n                  " + _vm._s(item.videoPlayInfo.time) + "\n                ")])])]), _vm._v(" "), _c('div', {
      staticStyle: {
        "flex": "1",
        "flex-direction": "column",
        "margin-right": "10px"
      }
    }, [_c('text', {
      staticClass: "description3"
    }, [_vm._v(_vm._s(item.videoPlayInfo.Title))]), _vm._v(" "), _c('text', {
      staticStyle: {
        "font-size": "12px",
        "color": "#999"
      }
    }, [_vm._v(_vm._s(item.videoMaker.Name) + " · 为你推荐")])]), _vm._v(" "), _c('div', [_c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/more3.png"
      }
    })])])
  })], 2), _vm._v(" "), _c('loadani', {
    attrs: {
      "showLoading": _vm.showLoading,
      "mpcomid": '0'
    }
  })], 1)], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f792bb7", esExports)
  }
}

/***/ })

},[101]);
//# sourceMappingURL=main.js.map