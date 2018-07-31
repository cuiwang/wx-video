<template>
  <div class="page">
    <div class="content">
      <!--header-->
      <myheader></myheader>
      <!--/header-->
      <!--body-->
      <!--loading view-->
      <Loadani1 :showLoading="showLoading"></Loadani1>
      <!--/loading view-->
      <!--style1-->
      <swiper @change="change" style="height: 85vh;margin-top: 20px;margin-bottom: 20px;" previous-margin="20px" next-margin="20px">


        <block v-for="(item,index) in items" :key="item.id">

        <swiper-item @tap="showDetails(item)">

          <!--暂不显示已读吧-->
          <!--<image v-if="item.readed" src="/static/images/readed.png" style="margin-right: 20px;position: absolute;width: 60px;height: 60px;z-index: 999;float: right;top: 0;right: 0;"></image>-->


          <div class="panel" style="margin-right: 20px;">

                <div style="background-color: #fff;height: 80vh;display: flex;flex-direction: column;align-items: center">

                  <image :src="item.doubanInfo.Image" class="card-2" style="width: 120px;height: 160px;margin-top: 20px;"></image>

                  <block v-if="item.readed">
                    <text style="color: #999;text-align:center;font-size: 22px;font-family: SimSun;margin-top: 10px;padding-left: 20px;padding-right: 20px;">《{{item.doubanInfo.Title}}》</text>
                  </block>
                  <block v-else>
                    <text style="color: #333;text-align:center;font-size: 22px;font-family: SimSun;margin-top: 10px;padding-left: 20px;padding-right: 20px;">《{{item.doubanInfo.Title}}》</text>
                  </block>

                  <text style="color: #666;text-align:center;font-size: 14px;font-family: SimSun;margin-top: 10px;padding-left: 20px;padding-right: 20px;">{{item.doubanInfo.Author}}</text>
                  <div style="flex: 1;"></div>
                  <div class="bottom" style="display: flex;flex-direction: column;justify-content: center;">
                  <div style="display: flex;margin-bottom: 10px;justify-content: center">
                    <image :src="item.videoMaker.HeaderURL" style="width: 30px;height: 30px;border-radius: 50%;overflow: hidden;"></image>
                  </div>
                    <p style="text-align: center;color: #666;font-size: 14px;margin-bottom: 10px;margin-left: 15px;margin-right: 15px;">{{item.videoPlayInfo.Title}}</p>
                    <div style="margin-bottom: 10px;display: flex;flex-direction: row;align-items: center;justify-content: center;">
                    <image src="/static/images/user3.png" style="width: 14px;height: 14px;margin-right: 5px"></image>
                      <text style="text-align: center;color: #666;font-size: 14px;">{{item.data.View}}</text>
                    </div>
                  </div>
                </div>
              </div>
        </swiper-item>

        </block>


      </swiper>


    </div>

    <!--/body-->

  </div>
</template>

<script>

  import Loadani1 from "../../components/loadani1";
  import Myheader from "../../components/myheader";

  export default {
    components: {Myheader, Loadani1},
    data() {
      return {
        items: [],
        userInfo: {},
        userId:0,
        showLoading: true,


      }
    },
    mounted() {
      wx.setNavigationBarTitle({
        title: '...'
      });
    },
    onShareAppMessage: function (res) {
      return {
        title: '',
        path: '/pages/book/main'
      }
    },
    onUnload() {

    },

    onReady() {

      var that = this;
      // 查看是否授权
      // Toast.loading();
      wx.getSetting({
        success: function (res) {
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
    methods: {
      getUserLoginInfo: function () {
        var that = this;
        that.showLoading = true;
        //调用登录接口
        wx.login({
          success: function (response) {
            var code = response.code;
            wx.getUserInfo({
              success: function (resp) {
                that.userInfo = resp.userInfo;

                that.$Fly.get('getWxUserInfo', {
                  code: code,
                  iv: resp.iv,
                  encryptedData: resp.encryptedData
                }).then((res) => {
                  that.userId = res.data.userId;
                  wx.setNavigationBarTitle({
                    title: '书籍'
                  });
                  wx.setStorage({
                    key:"USERID",
                    data:res.data.userId,
                    success:function() {
                      that.getBooks(res.data.userId);
                    },
                    complete:function() {
                      setTimeout(function() {
                        that.showLoading = false;
                      },1000)
                    }
                  });
                }).catch((e) => {
                  wx.setNavigationBarTitle({
                    title: '加载失败'
                  });
                });

              },
              fail: function (res) {
                if (res.errMsg == "getUserInfo:fail auth deny") {
                  that.goToShouquanPage();
                }
              }
            });
          },
          fail: function (res) {
            that.goToShouquanPage();
          }
        });
      },
      goToShouquanPage: function () {
        wx.navigateTo({url: "/pages/shouquan/main"});
      },
      change:function(e){
        console.log(e);
      },
      showDetails:function(item){
        wx.setStorageSync('ITEMDETAIL', JSON.stringify(item));
        wx.navigateTo({url: "/pages/video/main?vpid="+item.videoPlayInfo.id});
      },
      getBooks: function (user_id) {
        let that = this;
        that.$Fly.get('getBooks',{
          user_id:user_id
        }).then((res)=>{
          that.items = res.data.data.items;
        }).catch((e)=>console.log(e))
      },
      goToShouquanPage: function () {
        wx.navigateTo({url: "/pages/shouquan/main"});
      },

    }
  }
</script>

<style lang="scss" scoped>
  .description{
    display: -webkit-box;
    font-size:28rpx;
    color:#000000;
    line-height: 40rpx;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:4;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .description2 {
    display: block;
    font-size:28rpx;
    color:#000000;
    line-height: 40rpx;
    height: 120rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;

  }
  .right{
    margin-left: 10px;
    margin-top: 20px;
  }
  .scroll-view_H{
    width: 100%;
    white-space: nowrap;
  }
  .scroll-view-item_H{
    width: 85%;
    height: 80vh;
    margin: 20px 0px 20px 20px;
    display: inline-block;
  }
  .swiper-item{
    display: block;
    height: 80vh;
  }
  .card-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
</style>
