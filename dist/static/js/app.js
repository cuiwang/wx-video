global.webpackJsonp([2],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_common_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_mpvue_weui_css__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_mpvue_weui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_css_mpvue_weui_css__);


// 引入公共样式
// import '@/assets/css/reset.css'
// import '@/assets/css/animate.css'


// 在 App.vue 中全局引入 mp-weui.css 文件
//  import 'mp-weui/lib/style.css'

var Fly = __webpack_require__(22);
var fly = new Fly();
//定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
//设置超时
fly.config.timeout = 30000;
//设置请求基地址
// fly.config.baseURL="http://192.168.100.100:8100/api/"
// fly.config.baseURL="http://book-movie.d:7888/api/"
// fly.config.baseURL="http://192.168.100.100:9898/api/"
// fly.config.baseURL="http://192.168.2.226:9898/api/"
fly.config.baseURL = "https://book-movie.com/api/";
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$Fly = fly;

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$serverPath = "https://book-movie.com/";

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/book/main', //书
    'pages/bookinfo/main', //书文件
    'pages/movie/main', //电影
    'pages/video/main', //视频
    'pages/video2/main', //视频2
    'pages/video3/main', //视频3
    'pages/knowladge/main', //知识
    'pages/me/main', //我
    'pages/shouquan/main', //授权
    'pages/webview/main', //webview
    '^pages/search/main' //webview
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ff4f4d',
      navigationBarTitleText: '书和影视',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      backgroundColor: '#ffffff',
      color: '#666666',
      selectedColor: '#ff4f4d',
      list: [{
        pagePath: 'pages/book/main',
        iconPath: '/static/images/book3.png',
        selectedIconPath: '/static/images/book1.png',
        text: '书籍'
      }, {
        pagePath: 'pages/movie/main',
        iconPath: '/static/images/movie3.png',
        selectedIconPath: '/static/images/movie1.png',
        text: '影视'
      }, {
        pagePath: 'pages/knowladge/main',
        iconPath: '/static/images/knowladge3.png',
        selectedIconPath: '/static/images/knowladge1.png',
        text: '知识'
        /*,
        {
          pagePath: 'pages/me/main',
          iconPath: '/static/images/me3.png',
          selectedIconPath: '/static/images/me1.png',
          text: '我'
        }*/
      }]
    }
  }
});

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(18);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9dd4ec0", Component.options)
  } else {
    hotAPI.reload("data-v-d9dd4ec0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mp_weui_lib_style_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mp_weui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mp_weui_lib_style_css__);



/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    /* // 调用API从本地缓存中获取数据
     const logs = wx.getStorageSync('logs') || []
     logs.unshift(Date.now())
     wx.setStorageSync('logs', logs)
      console.log('app created and cache logs by setStorageSync')*/
  }
});

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[14]);
//# sourceMappingURL=app.js.map