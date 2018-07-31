global.webpackJsonp([7],{

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(87);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b2dd56b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(90);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b2dd56b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b2dd56b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/shouquan/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b2dd56b", Component.options)
  } else {
    hotAPI.reload("data-v-6b2dd56b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mp_weui_packages_toast__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
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
      message: "需要授权才能为您提供完整小程序服务"
    };
  },

  component: {
    Toast: __WEBPACK_IMPORTED_MODULE_0_mp_weui_packages_toast__["a" /* default */]
  },

  methods: {
    getUserLoginInfo: function getUserLoginInfo() {
      var that = this;
      //调用登录接口
      wx.login({
        success: function success(response) {
          var code = response.code;
          console.log(code);
          wx.getUserInfo({
            success: function success(resp) {
              that.$Fly.get('getWxUserInfo', {
                code: code,
                iv: resp.iv,
                encryptedData: resp.encryptedData
              }).then(function (res) {
                wx.setStorage({
                  key: "USERID",
                  data: res.data.userId,
                  success: function success(res) {
                    console.log('成功了');

                    //返回
                    wx.navigateBack({
                      delta: 1 // 回退前 delta(默认为1) 页面
                    });
                  }
                });
              }).catch(function (e) {
                wx.hideLoading();
              });
            },
            fail: function fail(res) {
              console.log(res);
              wx.hideLoading();
              if (res.errMsg == "getUserInfo:fail auth deny") {
                that.goToShouquanPage();
              }
            }
          });
        },
        fail: function fail(res) {
          console.log(res);
          that.goToShouquanPage();
        }
      });
    },
    onGotUserInfo: function onGotUserInfo(e) {
      var that = this;
      console.log(e.mp.detail.errMsg);
      console.log(e.mp.detail.userInfo);
      console.log(e.mp.detail.rawData);
      if (!e.mp.detail.userInfo) {
        this.showGuideAlert();
      } else {
        this.goBack();
      }
    },
    goBack: function goBack() {
      var that = this;
      wx.showLoading({
        'title': "正在提交",
        'mask': true
      });
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting["scope.userInfo"]) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            that.getUserLoginInfo();
          } else {
            //用户未授权
            Object(__WEBPACK_IMPORTED_MODULE_0_mp_weui_packages_toast__["a" /* default */])('用户未授权!');
            wx.hideLoading();
          }
        }
      });
    },
    showGuideAlert: function showGuideAlert() {
      wx.showModal({
        title: '微信授权',
        content: '请允许微信授权才能给您提供服务!',
        showCancel: false
      });
    }

  },
  mounted: function mounted() {
    wx.setNavigationBarTitle({
      title: '请授权'
    });
  },
  onShow: function onShow() {
    // Toast('提示信息')
  }
});

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin": "20px"
    }
  }, [_c('view', {
    staticClass: "header"
  }, [_c('image', {
    attrs: {
      "src": "/static/images/logo.png"
    }
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "#333",
      "text-align": "center",
      "font-size": "22px",
      "font-family": "SimSun"
    }
  }, [_vm._v("书和影视")])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('button', {
    staticClass: "bottom",
    attrs: {
      "type": "primary",
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("\n    授权登录\n  ")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "content"
  }, [_c('view', [_vm._v("申请获取以下权限")]), _vm._v(" "), _c('text', [_vm._v("・获得你的公开信息(昵称，头像等)")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b2dd56b", esExports)
  }
}

/***/ })

},[86]);
//# sourceMappingURL=main.js.map