import Vue from 'vue'
import App from './App'
// 引入公共样式
// import '@/assets/css/reset.css'
// import '@/assets/css/animate.css'
import '@/assets/css/common.scss'
import '@/assets/css/mpvue-weui.css'
// 在 App.vue 中全局引入 mp-weui.css 文件
//  import 'mp-weui/lib/style.css'

var Fly=require("flyio/dist/npm/wx")
var fly=new Fly
//定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
//设置超时
fly.config.timeout=30000;
//设置请求基地址
// fly.config.baseURL="http://192.168.100.100:8100/api/"
// fly.config.baseURL="http://book-movie.d:7888/api/"
// fly.config.baseURL="http://192.168.100.100:9898/api/"
// fly.config.baseURL="http://192.168.2.226:9898/api/"
fly.config.baseURL="https://book-movie.com/api/"
Vue.prototype.$Fly = fly

Vue.prototype.$serverPath = "https://book-movie.com/"


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/book/main',//书
      'pages/bookinfo/main',//书文件
      'pages/movie/main',//电影
      'pages/video/main',//视频
      'pages/video2/main',//视频2
      'pages/video3/main',//视频3
      'pages/knowladge/main',//知识
      'pages/me/main',//我
      'pages/shouquan/main',//授权
      'pages/webview/main',//webview
      '^pages/search/main'//webview
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
      list: [
        {
          pagePath: 'pages/book/main',
          iconPath: '/static/images/book3.png',
          selectedIconPath: '/static/images/book1.png',
          text: '书籍'
        },
        {
          pagePath: 'pages/movie/main',
          iconPath: '/static/images/movie3.png',
          selectedIconPath: '/static/images/movie1.png',
          text: '影视'
        },
        {
          pagePath: 'pages/knowladge/main',
          iconPath: '/static/images/knowladge3.png',
          selectedIconPath: '/static/images/knowladge1.png',
          text: '知识'
        }
        /*,
        {
          pagePath: 'pages/me/main',
          iconPath: '/static/images/me3.png',
          selectedIconPath: '/static/images/me1.png',
          text: '我'
        }*/
      ]
    }
  }
}
