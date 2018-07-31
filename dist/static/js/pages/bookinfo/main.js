global.webpackJsonp([13],{

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(51);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_366a2ff6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(57);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-366a2ff6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_366a2ff6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/bookinfo/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-366a2ff6", Component.options)
  } else {
    hotAPI.reload("data-v-366a2ff6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_loadani__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_myheader__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Myheader: __WEBPACK_IMPORTED_MODULE_1__components_myheader__["a" /* default */], Loadani: __WEBPACK_IMPORTED_MODULE_0__components_loadani__["a" /* default */] },
  data: function data() {
    return {
      sDetail: null,
      fileInfos: []
    };
  },
  mounted: function mounted() {
    wx.setNavigationBarTitle({
      title: "下载"
    });
  },
  onUnload: function onUnload() {},
  onShow: function onShow() {

    var that = this;

    wx.getStorage({
      key: "ITEMDETAIL",
      success: function success(res) {
        that.sDetail = JSON.parse(res.data);
        that.fileInfos = JSON.parse(that.sDetail.bookFile.JsonData);
      }
    });
  },

  methods: {
    copy: function copy(data) {
      wx.setClipboardData({
        data: data,
        success: function success(res) {
          // self.setData({copyTip:true}),
          setTimeout(function () {
            wx.showModal({
              showCancel: false,
              title: "提示",
              confirmColor: '#ff4f4d',
              confirmText: '知道了',
              content: "复制成功,请粘贴到浏览器查看",
              success: function success(res) {
                if (res.confirm) {
                  console.log("确定");
                } else if (res.cancel) {
                  console.log("取消");
                }
              }
            });
          }, 1200); //延迟时间 这里是1秒
        }
      });
    }

  }
});

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', [_c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "center",
      "align-items": "center",
      "height": "54px",
      "background-color": "white",
      "box-shadow": "0px 1px 10px #ccc"
    }
  }, [_c('div', {
    staticStyle: {
      "font-size": "16px",
      "color": "#333",
      "font-weight": "bold",
      "margin-top": "2px"
    }
  }, [_vm._v("\n          《" + _vm._s(_vm.sDetail ? _vm.sDetail.doubanInfo.Title : "") + "》\n        ")])])]), _vm._v(" "), _vm._l((_vm.fileInfos), function(item, index) {
    return _c('div', {
      key: index,
      staticStyle: {
        "margin": "10px"
      }
    }, [_c('div', {
      staticClass: "panel"
    }, [_c('div', {
      staticStyle: {
        "display": "flex"
      }
    }, [_c('div', {
      staticClass: "left",
      staticStyle: {
        "flex": "1",
        "display": "flex",
        "flex-direction": "row",
        "align-items": "center"
      }
    }, [_c('text', {
      staticStyle: {
        "font-size": "18px",
        "color": "#000",
        "font-weight": "bold",
        "margin-bottom": "5px"
      }
    }, [_vm._v(_vm._s(index) + " 格式")])])]), _vm._v(" "), _vm._l((item.data), function(data, index2) {
      return _c('div', {
        staticClass: "bottom",
        staticStyle: {
          "display": "flex",
          "align-items": "center",
          "border-top": "2px dotted #eee",
          "padding-top": "10px",
          "padding-bottom": "10px"
        },
        attrs: {
          "eventid": '0-' + index + '-' + index2
        },
        on: {
          "tap": function($event) {
            _vm.copy(data.link)
          }
        }
      }, [_c('div', {
        staticStyle: {
          "flex": "1",
          "display": "flex",
          "flex-direction": "column"
        }
      }, [_c('text', {
        staticStyle: {
          "font-size": "14px",
          "color": "#333"
        }
      }, [_vm._v(_vm._s(data.title))]), _vm._v(" "), _c('text', {
        staticStyle: {
          "font-size": "12px",
          "color": "#ff4f4d"
        }
      }, [_vm._v(_vm._s(data.link))])]), _vm._v(" "), _c('image', {
        staticStyle: {
          "width": "20px",
          "height": "20px"
        },
        attrs: {
          "src": "/static/images/more.png"
        }
      })])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "line",
      staticStyle: {
        "width": "100%",
        "height": "1rpx",
        "background-color": "#eee"
      }
    })])
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-366a2ff6", esExports)
  }
}

/***/ })

},[50]);
//# sourceMappingURL=main.js.map