global.webpackJsonp([12],{

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(59);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // "enablePullDownRefresh":true

  }
});

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75d9db73_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75d9db73"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75d9db73_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/copy1/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75d9db73", Component.options)
  } else {
    hotAPI.reload("data-v-75d9db73", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showLoading: true,
      items: []
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
      path: '/pages/actDetail/main?type=1&share=1&id='
    };
  },
  onUnload: function onUnload() {},
  onReady: function onReady() {},

  methods: {
    getMovies: function getMovies() {
      var that = this;
      that.$Fly.get('getMovies', {}).then(function (res) {
        that.items = res.data;
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

/***/ 62:
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
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)], 1), _vm._v(" "), _c('loadani', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin": "10px"
    }
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "top",
    staticStyle: {
      "position": "relative"
    }
  }, [_c('image', {
    staticStyle: {
      "height": "350rpx",
      "width": "100%"
    },
    attrs: {
      "mode": "aspectFill",
      "src": "http://datas.book-movie.com/5a211cda36bb478abb6b71720506d59c/covers/c0e32e6e64b3428490a3bac88742eb94-00005.jpg"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "position": "absolute",
      "bottom": "10px",
      "right": "5px",
      "background-color": "#000",
      "color": "white",
      "padding": "1px 5px",
      "font-size": "12px",
      "border-radius": "4px"
    }
  }, [_vm._v("\n            1:31\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "bottom",
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "border-radius": "50%",
      "width": "40px",
      "height": "40px",
      "margin-right": "10px"
    },
    attrs: {
      "src": "/static/images/head.png"
    }
  }), _vm._v(" "), _c('div', {
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
  }, [_vm._v("#001【谷阿莫】6分鐘看完《陰兒房 Insidious》1+2集")]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#999"
    }
  }, [_vm._v("谷阿莫 · 5831次观看 · 1周前")])]), _vm._v(" "), _c('image', {
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
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
      "flex-direction": "column"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "18px",
      "color": "#000",
      "font-weight": "bold",
      "margin-bottom": "5px"
    }
  }, [_vm._v("潜伏2")]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666",
      "margin-bottom": "10px"
    }
  }, [_vm._v("温子仁 · 恐怖电影")]), _vm._v(" "), _c('text', {
    staticClass: "description",
    staticStyle: {
      "font-size": "14px",
      "color": "#333",
      "margin-bottom": "10px"
    }
  }, [_vm._v("经历了上一集令人难以置信的变故后，莱姆波特家的长子达尔顿（Ty Simpkins 饰）暂时摆脱恶灵的纠缠，而灵媒伊莉丝（林·沙烨 Lin Shaye 饰）则惨死室中，达尔顿的父亲乔什（帕特里克·威尔森 Patrick Wilson 饰）蒙受杀人嫌疑。由于警方需要继续调查他们的房子，乔什只得带着妻子兰妮（罗丝·拜恩 Rose Byrne 饰）和三个孩子暂时回到母亲劳瑞安（芭芭拉·赫希 Barbara Hershey 饰）家居中。本以为一切回归正常，但是兰妮和孩子们似乎仍在饱受恶灵的纠缠。\n              劳瑞安意识到事态的严重性，于是请来仅次于伊莉丝的灵媒师卡尔（Steve Coulter 饰），试图将一切恢复正常，然而事态却朝着不可预测的方向发展……©豆瓣")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    }
  }, [_c('image', {
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
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#ffd686",
      "margin-right": "10px"
    }
  }, [_vm._v("7.8分")]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666"
    }
  }, [_vm._v("102评论")])]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#999",
      "margin-top": "10px",
      "margin-bottom": "10px"
    }
  }, [_vm._v("视频解说 ▼")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('image', {
    staticStyle: {
      "width": "120px",
      "height": "160px"
    },
    attrs: {
      "src": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2044151740.jpg"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "bottom",
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "border-radius": "50%",
      "width": "40px",
      "height": "40px",
      "margin-right": "10px"
    },
    attrs: {
      "src": "/static/images/head.png"
    }
  }), _vm._v(" "), _c('div', {
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
  }, [_vm._v("#001【谷阿莫】6分鐘看完《陰兒房 Insidious》1+2集")]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#999"
    }
  }, [_vm._v("谷阿莫 · 5831次观看 · 1周前")])]), _vm._v(" "), _c('image', {
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
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
      "flex-direction": "column"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "18px",
      "color": "#000",
      "font-weight": "bold",
      "margin-bottom": "5px"
    }
  }, [_vm._v("潜伏2")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "margin-bottom": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666",
      "margin-right": "10px"
    }
  }, [_vm._v("温子仁")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    }
  }, [_c('image', {
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
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#ffd686",
      "margin-right": "10px"
    }
  }, [_vm._v("7.8分")]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666"
    }
  }, [_vm._v("102评论")])])]), _vm._v(" "), _c('text', {
    staticClass: "description",
    staticStyle: {
      "font-size": "14px",
      "color": "#333",
      "margin-bottom": "10px"
    }
  }, [_vm._v("经历了上一集令人难以置信的变故后，莱姆波特家的长子达尔顿（Ty Simpkins 饰）暂时摆脱恶灵的纠缠，而灵媒伊莉丝（林·沙烨 Lin Shaye 饰）则惨死室中，达尔顿的父亲乔什（帕特里克·威尔森 Patrick Wilson 饰）蒙受杀人嫌疑。由于警方需要继续调查他们的房子，乔什只得带着妻子兰妮（罗丝·拜恩 Rose Byrne 饰）和三个孩子暂时回到母亲劳瑞安（芭芭拉·赫希 Barbara Hershey 饰）家居中。本以为一切回归正常，但是兰妮和孩子们似乎仍在饱受恶灵的纠缠。\n              劳瑞安意识到事态的严重性，于是请来仅次于伊莉丝的灵媒师卡尔（Steve Coulter 饰），试图将一切恢复正常，然而事态却朝着不可预测的方向发展……©豆瓣")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1"
    }
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#999",
      "margin-bottom": "10px"
    }
  }, [_vm._v("视频解说 ▼")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('image', {
    staticStyle: {
      "width": "120px",
      "height": "160px"
    },
    attrs: {
      "src": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2044151740.jpg"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "bottom",
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "border-radius": "50%",
      "width": "40px",
      "height": "40px",
      "margin-right": "10px"
    },
    attrs: {
      "src": "/static/images/head.png"
    }
  }), _vm._v(" "), _c('div', {
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
  }, [_vm._v("#001【谷阿莫】6分鐘看完《陰兒房 Insidious》1+2集")])]), _vm._v(" "), _c('image', {
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
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
      "flex-direction": "column"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "18px",
      "color": "#000",
      "font-weight": "bold",
      "margin-bottom": "5px"
    }
  }, [_vm._v("潜伏2")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "margin-bottom": "10px"
    }
  }, [_c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666",
      "margin-right": "10px"
    }
  }, [_vm._v("温子仁")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    }
  }, [_c('image', {
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
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#ffd686",
      "margin-right": "10px"
    }
  }, [_vm._v("7.8分")]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#666"
    }
  }, [_vm._v("102评论")])])]), _vm._v(" "), _c('text', {
    staticClass: "description",
    staticStyle: {
      "font-size": "14px",
      "color": "#333",
      "margin-bottom": "10px"
    }
  }, [_vm._v("经历了上一集令人难以置信的变故后，莱姆波特家的长子达尔顿（Ty Simpkins 饰）暂时摆脱恶灵的纠缠，而灵媒伊莉丝（林·沙烨 Lin Shaye 饰）则惨死室中，达尔顿的父亲乔什（帕特里克·威尔森 Patrick Wilson 饰）蒙受杀人嫌疑。由于警方需要继续调查他们的房子，乔什只得带着妻子兰妮（罗丝·拜恩 Rose Byrne 饰）和三个孩子暂时回到母亲劳瑞安（芭芭拉·赫希 Barbara Hershey 饰）家居中。本以为一切回归正常，但是兰妮和孩子们似乎仍在饱受恶灵的纠缠。\n              劳瑞安意识到事态的严重性，于是请来仅次于伊莉丝的灵媒师卡尔（Steve Coulter 饰），试图将一切恢复正常，然而事态却朝着不可预测的方向发展……©豆瓣")]), _vm._v(" "), _c('text', {
    staticStyle: {
      "font-size": "12px",
      "color": "#999",
      "align-self": "end"
    }
  }, [_vm._v("视频解说 ▼")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('image', {
    staticStyle: {
      "width": "120px",
      "height": "160px"
    },
    attrs: {
      "src": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2044151740.jpg"
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
      "src": "/static/images/head.png"
    }
  }), _vm._v(" "), _c('div', {
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
  }, [_vm._v("#001【谷阿莫】6分鐘看完《陰兒房 Insidious》1+2集")])]), _vm._v(" "), _c('image', {
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
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75d9db73", esExports)
  }
}

/***/ })

},[58]);
//# sourceMappingURL=main.js.map