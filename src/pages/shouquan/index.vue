<template>

  <div style="margin: 20px;">
    <view class='header'>
      <image src='/static/images/logo.png'></image>
      <p style="color: #333;text-align:center;font-size: 22px;font-family: SimSun;">书和影视</p>
    </view>

    <view class='content'>
      <view>申请获取以下权限</view>
      <text>・获得你的公开信息(昵称，头像等)</text>
    </view>

    <button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">
      授权登录
    </button>
  </div>


</template>

<script>
  import Toast from 'mp-weui/packages/toast'

  export default {
    data () {
      return {
        message: "需要授权才能为您提供完整小程序服务"
      }
    },
    component:{
      Toast
    },

    methods:{
      getUserLoginInfo: function () {
        var that = this;
        //调用登录接口
        wx.login({
          success: function (response) {
            var code = response.code;
            console.log(code);
            wx.getUserInfo({
              success: function (resp) {
                that.$Fly.get('getWxUserInfo', {
                  code: code,
                  iv: resp.iv,
                  encryptedData: resp.encryptedData
                }).then((res) => {
                  wx.setStorage({
                    key:"USERID",
                    data:res.data.userId,
                    success: function(res) {
                      console.log('成功了');

                      //返回
                      wx.navigateBack({
                        delta: 1, // 回退前 delta(默认为1) 页面
                      });
                    }
                  });
                }).catch((e) => {
                  wx.hideLoading();
                });

              },
              fail: function (res) {
                console.log(res);
                wx.hideLoading();
                if (res.errMsg == "getUserInfo:fail auth deny") {
                  that.goToShouquanPage();
                }
              }
            });
          },
          fail: function (res) {
            console.log(res);
            that.goToShouquanPage();
          }
        });
      },
      onGotUserInfo:function(e) {
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
      goBack: function() {
        var that = this;
        wx.showLoading({
          'title': "正在提交",
          'mask': true,
        });
        wx.getSetting({
          success: function(res) {
            if (res.authSetting["scope.userInfo"]) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              that.getUserLoginInfo();
            } else {
              //用户未授权
              Toast('用户未授权!');
              wx.hideLoading();
            }
          }
        });

      },
      showGuideAlert: function() {
        wx.showModal({
          title: '微信授权',
          content: '请允许微信授权才能给您提供服务!',
          showCancel:false
        })
      }

    },
    mounted () {
      wx.setNavigationBarTitle({
        title: '请授权'
      })
    },
    onShow () {
      // Toast('提示信息')
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .message {
    font-size: 17pt;
    margin-bottom: 50rpx;
  }
  .shouquanButton {
    font-size: 18pt;
    width: 300rpx;
  }
  .header {
    margin: 90rpx 50rpx 90rpx 50rpx;
    border-bottom: 1px solid #ccc;
    text-align: center;
    height: 300rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header image {
    width: 200rpx;
    height: 200rpx;
  }

  .content {
    margin-left: 50rpx;
    margin-bottom: 90rpx;
  }

  .content text {
    display: block;
    color: #9d9d9d;
    margin-top: 40rpx;
  }

  .bottom {
    margin: 90rpx 50rpx;
    font-size: 35rpx;
  }
</style>
