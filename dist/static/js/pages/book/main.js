global.webpackJsonp([1],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7207a970_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7207a970"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7207a970_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/book/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7207a970", Component.options)
  } else {
    hotAPI.reload("data-v-7207a970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loadani1__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_myheader__ = __webpack_require__(2);


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
  components: { Myheader: __WEBPACK_IMPORTED_MODULE_3__components_myheader__["a" /* default */], Loadani1: __WEBPACK_IMPORTED_MODULE_2__components_loadani1__["a" /* default */] },
  data: function data() {
    return {
      items: [],
      userInfo: {},
      userId: 0,
      showLoading: true

    };
  },
  mounted: function mounted() {
    wx.setNavigationBarTitle({
      title: '...'
    });
  },

  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: '',
      path: '/pages/book/main'
    };
  },
  onUnload: function onUnload() {},
  onReady: function onReady() {

    var that = this;
    // 查看是否授权
    // Toast.loading();
    wx.getSetting({
      success: function success(res) {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          that.getUserLoginInfo();
        } else {
          //用户未授权
          that.goToShouquanPage();
        }
      }
    });
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
    getUserLoginInfo: function getUserLoginInfo() {
      var that = this;
      that.showLoading = true;
      //调用登录接口
      wx.login({
        success: function success(response) {
          var code = response.code;
          wx.getUserInfo({
            success: function success(resp) {
              that.userInfo = resp.userInfo;

              that.$Fly.get('getWxUserInfo', {
                code: code,
                iv: resp.iv,
                encryptedData: resp.encryptedData
              }).then(function (res) {
                that.userId = res.data.userId;
                wx.setNavigationBarTitle({
                  title: '书籍'
                });
                wx.setStorage({
                  key: "USERID",
                  data: res.data.userId,
                  success: function success() {
                    that.getBooks(res.data.userId);
                  },
                  complete: function complete() {
                    setTimeout(function () {
                      that.showLoading = false;
                    }, 1000);
                  }
                });
              }).catch(function (e) {
                wx.setNavigationBarTitle({
                  title: '加载失败'
                });
              });
            },
            fail: function fail(res) {
              if (res.errMsg == "getUserInfo:fail auth deny") {
                that.goToShouquanPage();
              }
            }
          });
        },
        fail: function fail(res) {
          that.goToShouquanPage();
        }
      });
    },
    goToShouquanPage: function goToShouquanPage() {
      wx.navigateTo({ url: "/pages/shouquan/main" });
    },
    change: function change(e) {
      console.log(e);
    },
    showDetails: function showDetails(item) {
      wx.setStorageSync('ITEMDETAIL', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(item));
      wx.navigateTo({ url: "/pages/video/main?vpid=" + item.videoPlayInfo.id });
    },
    getBooks: function getBooks(user_id) {
      var that = this;
      that.$Fly.get('getBooks', {
        user_id: user_id
      }).then(function (res) {
        that.items = res.data.data.items;
      }).catch(function (e) {
        return console.log(e);
      });
    }
  }, "goToShouquanPage", function goToShouquanPage() {
    wx.navigateTo({ url: "/pages/shouquan/main" });
  })
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_loadani1_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_008e81b3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_loadani1_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-008e81b3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_loadani1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_008e81b3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_loadani1_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/loadani1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loadani1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-008e81b3", Component.options)
  } else {
    hotAPI.reload("data-v-008e81b3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: {
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      //animation
      interval: 0,
      animation: null,
      animationData: {}
    };
  },

  methods: {
    showAnimation: function showAnimation(data) {

      this.animation.opacity(data ? 0.6 : 1.0).step();
      this.animation.opacity(data ? 1.0 : 0.6).step();

      this.animationData = this.animation.export();
    }
  },
  mounted: function mounted() {
    var _this = this;

    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: "ease"
    });
    this.animation = animation;

    var data = true;

    this.interval = setInterval(function () {
      data = !data;
      _this.showAnimation(data);
    }, 800);
  }
});

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showLoading) ? _c('swiper', {
    staticStyle: {
      "height": "85vh",
      "margin-top": "20px",
      "margin-bottom": "20px"
    },
    attrs: {
      "animation": _vm.animationData,
      "previous-margin": "20px",
      "next-margin": "20px"
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "panel",
    staticStyle: {
      "margin-right": "20px"
    }
  }, [_c('div', {
    staticStyle: {
      "background-color": "#fff",
      "height": "80vh",
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "width": "120px",
      "height": "160px",
      "margin-top": "20px",
      "background-color": "#eeeeee"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "color": "#333",
      "text-align": "center",
      "font-size": "22px",
      "font-family": "SimSun",
      "margin-top": "10px",
      "padding-left": "20px",
      "padding-right": "20px"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "color": "#666",
      "text-align": "center",
      "font-size": "14px",
      "font-family": "SimSun",
      "margin-top": "10px",
      "padding-left": "20px",
      "padding-right": "20px"
    }
  }, [_vm._v("\n            ......\n          ")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bottom",
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "margin-bottom": "10px",
      "justify-content": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "background-color": "#eeeeee",
      "width": "30px",
      "height": "30px",
      "border-radius": "50%",
      "overflow": "hidden"
    }
  })]), _vm._v(" "), _c('p', {
    staticStyle: {
      "background-color": "#eeeeee",
      "text-align": "center",
      "color": "#666",
      "font-size": "14px",
      "margin-bottom": "10px"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-bottom": "10px",
      "display": "flex",
      "flex-direction": "row",
      "align-items": "center",
      "justify-content": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "background-color": "#eeeeee",
      "width": "14px",
      "height": "14px",
      "margin-right": "5px"
    }
  })])], 1)])])]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "panel",
    staticStyle: {
      "margin-right": "20px"
    }
  }, [_c('div', {
    staticStyle: {
      "background-color": "#fff",
      "height": "80vh",
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "width": "120px",
      "height": "160px",
      "margin-top": "20px",
      "background-color": "#eeeeee"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "color": "#333",
      "text-align": "center",
      "font-size": "22px",
      "font-family": "SimSun",
      "margin-top": "10px",
      "padding-left": "20px",
      "padding-right": "20px"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "color": "#666",
      "text-align": "center",
      "font-size": "14px",
      "font-family": "SimSun",
      "margin-top": "10px",
      "padding-left": "20px",
      "padding-right": "20px"
    }
  }, [_vm._v("\n            ......\n          ")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bottom",
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "margin-bottom": "10px",
      "justify-content": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "background-color": "#eeeeee",
      "width": "30px",
      "height": "30px",
      "border-radius": "50%",
      "overflow": "hidden"
    }
  })]), _vm._v(" "), _c('p', {
    staticStyle: {
      "background-color": "#eeeeee",
      "text-align": "center",
      "color": "#666",
      "font-size": "14px",
      "margin-bottom": "10px"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-bottom": "10px",
      "display": "flex",
      "flex-direction": "row",
      "align-items": "center",
      "justify-content": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "background-color": "#eeeeee",
      "width": "14px",
      "height": "14px",
      "margin-right": "5px"
    }
  })])], 1)])])])], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-008e81b3", esExports)
  }
}

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('myheader', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('Loadani1', {
    attrs: {
      "showLoading": _vm.showLoading,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('swiper', {
    staticStyle: {
      "height": "85vh",
      "margin-top": "20px",
      "margin-bottom": "20px"
    },
    attrs: {
      "previous-margin": "20px",
      "next-margin": "20px",
      "eventid": '1'
    },
    on: {
      "change": _vm.change
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('block', {
      key: item.id
    }, [_c('swiper-item', {
      attrs: {
        "eventid": '0-' + index,
        "mpcomid": '2-' + index
      },
      on: {
        "tap": function($event) {
          _vm.showDetails(item)
        }
      }
    }, [_c('div', {
      staticClass: "panel",
      staticStyle: {
        "margin-right": "20px"
      }
    }, [_c('div', {
      staticStyle: {
        "background-color": "#fff",
        "height": "80vh",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center"
      }
    }, [_c('image', {
      staticClass: "card-2",
      staticStyle: {
        "width": "120px",
        "height": "160px",
        "margin-top": "20px"
      },
      attrs: {
        "src": item.doubanInfo.Image
      }
    }), _vm._v(" "), (item.readed) ? _c('block', [_c('text', {
      staticStyle: {
        "color": "#999",
        "text-align": "center",
        "font-size": "22px",
        "font-family": "SimSun",
        "margin-top": "10px",
        "padding-left": "20px",
        "padding-right": "20px"
      }
    }, [_vm._v("《" + _vm._s(item.doubanInfo.Title) + "》")])]) : _c('block', [_c('text', {
      staticStyle: {
        "color": "#333",
        "text-align": "center",
        "font-size": "22px",
        "font-family": "SimSun",
        "margin-top": "10px",
        "padding-left": "20px",
        "padding-right": "20px"
      }
    }, [_vm._v("《" + _vm._s(item.doubanInfo.Title) + "》")])]), _vm._v(" "), _c('text', {
      staticStyle: {
        "color": "#666",
        "text-align": "center",
        "font-size": "14px",
        "font-family": "SimSun",
        "margin-top": "10px",
        "padding-left": "20px",
        "padding-right": "20px"
      }
    }, [_vm._v(_vm._s(item.doubanInfo.Author))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "flex": "1"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "bottom",
      staticStyle: {
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center"
      }
    }, [_c('div', {
      staticStyle: {
        "display": "flex",
        "margin-bottom": "10px",
        "justify-content": "center"
      }
    }, [_c('image', {
      staticStyle: {
        "width": "30px",
        "height": "30px",
        "border-radius": "50%",
        "overflow": "hidden"
      },
      attrs: {
        "src": item.videoMaker.HeaderURL
      }
    })]), _vm._v(" "), _c('p', {
      staticStyle: {
        "text-align": "center",
        "color": "#666",
        "font-size": "14px",
        "margin-bottom": "10px",
        "margin-left": "15px",
        "margin-right": "15px"
      }
    }, [_vm._v(_vm._s(item.videoPlayInfo.Title))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "margin-bottom": "10px",
        "display": "flex",
        "flex-direction": "row",
        "align-items": "center",
        "justify-content": "center"
      }
    }, [_c('image', {
      staticStyle: {
        "width": "14px",
        "height": "14px",
        "margin-right": "5px"
      },
      attrs: {
        "src": "/static/images/user3.png"
      }
    }), _vm._v(" "), _c('text', {
      staticStyle: {
        "text-align": "center",
        "color": "#666",
        "font-size": "14px"
      }
    }, [_vm._v(_vm._s(item.data.View))])])], 1)], 1)])])], 1)
  }))], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7207a970", esExports)
  }
}

/***/ })

},[23]);
//# sourceMappingURL=main.js.map