global.webpackJsonp([8],{

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(82);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // "enablePullDownRefresh":true

  }
});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_41692247_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(85);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(83)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-41692247"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_41692247_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/search/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41692247", Component.options)
  } else {
    hotAPI.reload("data-v-41692247", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      inputShowed: true,
      inputVal: ""
    };
  },
  mounted: function mounted() {
    wx.setNavigationBarTitle({
      title: ''
    });
  },

  methods: {
    showInput: function showInput() {
      this.inputShowed = true;
    },
    hideInput: function hideInput() {
      wx.navigateBack();
    },
    clearInput: function clearInput() {
      this.inputVal = '';
    },
    inputTyping: function inputTyping(e) {
      console.log(e);
      this.inputVal = e.mp.detail.value;
    }
  }
});

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-search-bar",
    staticStyle: {
      "border-top": "none",
      "background-color": "#ff4f4d"
    }
  }, [_c('div', {
    staticClass: "weui-search-bar__form"
  }, [_c('div', {
    staticClass: "weui-search-bar__box"
  }, [_c('icon', {
    staticClass: "weui-icon-search_in-box",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputVal),
      expression: "inputVal"
    }],
    staticClass: "weui-search-bar__input",
    attrs: {
      "type": "text",
      "placeholder": "搜索",
      "focus": _vm.inputShowed,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.inputVal)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.inputVal = $event.target.value
      }, _vm.inputTyping]
    }
  }), _vm._v(" "), (_vm.inputVal.length > 0) ? _c('div', {
    staticClass: "weui-icon-clear",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.clearInput
    }
  }, [_c('icon', {
    attrs: {
      "type": "clear",
      "size": "14"
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('label', {
    staticClass: "weui-search-bar__label",
    attrs: {
      "hidden": _vm.inputShowed,
      "eventid": '2'
    },
    on: {
      "click": _vm.showInput
    }
  }, [_c('icon', {
    staticClass: "weui-icon-search",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-search-bar__text"
  }, [_vm._v("搜索")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-search-bar__cancel-btn",
    staticStyle: {
      "color": "#ffffff",
      "font-size": "14px"
    },
    attrs: {
      "hidden": !_vm.inputShowed,
      "eventid": '3'
    },
    on: {
      "click": _vm.hideInput
    }
  }, [_vm._v("取消")])]), _vm._v(" "), (_vm.inputVal.length > 10) ? _c('div', {
    staticClass: "weui-cells searchbar-result"
  }, [_c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本")])])])], 1) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41692247", esExports)
  }
}

/***/ })

},[81]);
//# sourceMappingURL=main.js.map