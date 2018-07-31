global.webpackJsonp([9],{

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(77);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    "enablePullDownRefresh": true

  }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_52d82247_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(80);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-52d82247"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_52d82247_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/movie/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52d82247", Component.options)
  } else {
    hotAPI.reload("data-v-52d82247", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_loadani__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_myheader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cube_loading__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mp_weui_packages_toast__ = __webpack_require__(5);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Toast: __WEBPACK_IMPORTED_MODULE_4_mp_weui_packages_toast__["a" /* default */], Cube_loading: __WEBPACK_IMPORTED_MODULE_3__components_cube_loading__["a" /* default */], Myheader: __WEBPACK_IMPORTED_MODULE_2__components_myheader__["a" /* default */], Loadani: __WEBPACK_IMPORTED_MODULE_1__components_loadani__["a" /* default */] },
  data: function data() {
    return {
      showLoading: true,
      items: [],
      isGetData: false,
      isNoData: false,
      showNew: false,
      dataIndex: 1,
      user_id: -1
    };
  },
  mounted: function mounted() {
    wx.setNavigationBarTitle({
      title: '影视'
    });
  },

  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: '',
      path: '/pages/movie/main'
    };
  },
  onUnload: function onUnload() {},

  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
    that.showNew = true;

    if (that.isGetData || that.isNoData) {
      return;
    }
    that.dataIndex = 1;
    that.getMovies(that.user_id);
  },
  onReachBottom: function onReachBottom() {
    var that = this;
    if (that.isGetData || that.isNoData) {
      return;
    }
    that.dataIndex = that.dataIndex + 1;
    that.showLoading = true;
    that.getMovies(that.user_id);
  },
  onReady: function onReady() {
    var that = this;
    var user_id = wx.getStorageSync("USERID");
    that.user_id = user_id;
    that.dataIndex = 1;
    that.getMovies(user_id);
  },

  methods: {
    showDetails: function showDetails(item) {
      wx.setStorageSync('ITEMDETAIL2', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(item));
      wx.navigateTo({ url: "/pages/video2/main?vpid=" + item.videoPlayInfo.id });
    },

    getMovies: function getMovies(user_id) {
      var that = this;

      that.isGetData = true;

      that.$Fly.get('getMovies', {
        user_id: user_id,
        index: that.dataIndex

      }).then(function (res) {

        if (that.dataIndex === 1) {
          //刷新
          wx.stopPullDownRefresh();
          that.items = res.data.data.items;
        } else {
          //更多
          for (var i in res.data.data.items) {
            console.log(res.data.data.items[i]);
            that.items.push(res.data.data.items[i]);
          }

          if (res.data.num < 10) {
            Object(__WEBPACK_IMPORTED_MODULE_4_mp_weui_packages_toast__["a" /* default */])('全部加载了');
            that.isNoData = true;
          } else {
            that.isNoData = false;
          }
        }

        that.showLoading = false;
        that.isGetData = false;
        that.showNew = false;
      }).catch(function (e) {
        that.showLoading = false;
        that.isGetData = false;
        that.showNew = false;
      });
    }

  }
});

/***/ }),

/***/ 80:
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
  }, [(_vm.showNew) ? _c('div', {
    staticStyle: {
      "background-color": "#fff",
      "width": "100%",
      "padding": "10px",
      "top": "-40px",
      "align-self": "center"
    }
  }, [_c('cube_loading', {
    attrs: {
      "type": 'sk-wave',
      "mpcomid": '0'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('myheader', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      key: index,
      staticStyle: {
        "margin": "10px"
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "tap": function($event) {
          _vm.showDetails(item)
        }
      }
    }, [_c('div', {
      staticClass: "panel card-2"
    }, [_c('div', {
      staticStyle: {
        "display": "flex"
      }
    }, [_c('div', {
      staticClass: "left",
      staticStyle: {
        "flex": "1",
        "display": "flex",
        "flex-direction": "column"
      }
    }, [(item.readed) ? _c('block', [_c('text', {
      staticStyle: {
        "font-size": "20px",
        "color": "#999",
        "font-weight": "bold",
        "margin-bottom": "5px"
      }
    }, [_vm._v(_vm._s(item.doubanInfo.Title))])]) : _c('block', [_c('text', {
      staticStyle: {
        "font-size": "20px",
        "color": "#000",
        "font-weight": "bold",
        "margin-bottom": "5px"
      }
    }, [_vm._v(_vm._s(item.doubanInfo.Title))])]), _vm._v(" "), _c('text', {
      staticStyle: {
        "font-size": "12px",
        "color": "#666",
        "margin-bottom": "10px"
      }
    }, [_vm._v(_vm._s(item.doubanInfo.Author) + " · " + _vm._s(item.doubanInfo.Tag))]), _vm._v(" "), _c('text', {
      staticClass: "description",
      staticStyle: {
        "font-size": "14px",
        "color": "#333",
        "margin-bottom": "10px"
      }
    }, [_vm._v(_vm._s(item.doubanInfo.Summary))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "display": "flex",
        "align-items": "center"
      }
    }, [(item.doubanInfo.RatingAverage > 9) ? _c('block', [_c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    })]) : (item.doubanInfo.RatingAverage > 8) ? _c('block', [_c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    })]) : (item.doubanInfo.RatingAverage > 6) ? _c('block', [_c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    })]) : (item.doubanInfo.RatingAverage > 4) ? _c('block', [_c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    })]) : (item.doubanInfo.RatingAverage > 2) ? _c('block', [_c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star_hover.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    })]) : _c('block', [_c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    }), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "10px",
        "height": "10px"
      },
      attrs: {
        "src": "/static/images/rc_cs_star.png"
      }
    })]), _vm._v(" "), _c('text', {
      staticStyle: {
        "font-size": "12px",
        "color": "#ffd686",
        "margin-right": "10px"
      }
    }, [_vm._v(_vm._s(item.doubanInfo.RatingAverage) + "分")])], 1), _vm._v(" "), _c('text', {
      staticStyle: {
        "font-size": "12px",
        "color": "#999",
        "margin-top": "10px",
        "margin-bottom": "10px"
      }
    }, [_vm._v("视频解说 ▼")])], 1), _vm._v(" "), _c('div', {
      staticClass: "right"
    }, [_c('image', {
      staticClass: "card-2",
      staticStyle: {
        "width": "120px",
        "height": "160px"
      },
      attrs: {
        "src": item.doubanInfo.Image
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "bottom",
      staticStyle: {
        "display": "flex",
        "align-items": "center",
        "border-top": "2px dotted #eee",
        "padding-top": "10px"
      }
    }, [_c('image', {
      staticStyle: {
        "border-radius": "50%",
        "width": "40px",
        "height": "40px",
        "margin-right": "10px"
      },
      attrs: {
        "src": item.videoMaker.HeaderURL
      }
    }), _vm._v(" "), _c('div', {
      staticStyle: {
        "flex": "1",
        "display": "flex",
        "flex-direction": "column"
      }
    }, [_c('text', {
      staticClass: "description2",
      staticStyle: {
        "font-size": "14px",
        "color": "#333"
      }
    }, [_vm._v(_vm._s(item.videoPlayInfo.Title))])]), _vm._v(" "), _c('image', {
      staticStyle: {
        "width": "20px",
        "height": "20px"
      },
      attrs: {
        "src": "/static/images/more.png"
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "line",
      staticStyle: {
        "width": "100%",
        "height": "1rpx",
        "background-color": "#eee"
      }
    })])
  }), _vm._v(" "), _c('Loadani', {
    attrs: {
      "showLoading": _vm.showLoading,
      "mpcomid": '2'
    }
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52d82247", esExports)
  }
}

/***/ })

},[76]);
//# sourceMappingURL=main.js.map