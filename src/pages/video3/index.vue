<template>
  <div class="page">
    <div class="content" style="display: flex;flex-direction: column;">
      <!--header-->
      <!--/header-->
      <!--body-->
      <!--视频-->
      <div style="position: fixed;width: 100%;top: 0;z-index: 999;height: 35vh;">
        <video style="width: 100%;height: 100%"
               initial-time="0"
               :poster="data.CoverURL"
               :src="playInfo"
               @play="videoPlay"
        ></video>
      </div>
      <!--/视频-->

      <view style="flex: 1;position: fixed;height: 65vh;width: 100%;bottom: 0;">
        <scroll-view scroll-y="true" style="height: 100%;">
          <!--标题-->
          <div style="display: flex;flex-direction: column;background-color: #fff;padding: 10px">
            <div style="display: flex;" @tap="toggleMakerInfo">
              <text style="flex: 1;font-size: 15px;color: #333;margin: 10px 5px">{{data.Title}}</text>
              <block v-if="showMakerInfo">
                <image src="/static/images/up3.png"
                       style="margin-top: 15px;width: 15px;height: 15px;margin-right: 10px"></image>
              </block>
              <block v-else>
                <image src="/static/images/down3.png"
                       style="margin-top: 15px;width: 15px;height: 15px;margin-right: 10px"></image>
              </block>
            </div>
            <text style="font-size: 12px;color: #999;margin-left: 5px;">{{sDetail?sDetail.data.View:"1"}}次观看
            </text>
          </div>
          <!--/标题-->

          <!--赞-->
          <div
            style="border-bottom: 1px solid #eee;display: flex;padding: 10px;justify-content: space-around;align-items: center;background-color: #fff;">

            <!--是否已投票-->
            <block v-if="hasVoted">
              <div style="display: flex;flex-direction: column;align-items: center;">
                <block v-if="hasGood">
                  <image src="/static/images/liked.png" style="width: 25px;height: 25px"></image>
                  <text style="font-size: 12px;color: #ff4f4d;">{{good}}</text>
                </block>
                <block v-else>
                  <image src="/static/images/like.png" style="width: 25px;height: 25px"></image>
                  <text style="font-size: 12px;color: #666;">{{good}}</text>
                </block>
              </div>
              <div style="display: flex;flex-direction: column;align-items: center;">
                <block v-if="hasBad">
                  <image src="/static/images/unliked.png" style="width: 24px;height: 24px"></image>
                  <text style="font-size: 12px;color: #ff4f4d;">{{bad}}</text>
                </block>
                <block v-else>
                  <image src="/static/images/unlike.png" style="width: 24px;height: 24px"></image>
                  <text style="font-size: 12px;color: #666;">{{bad}}</text>
                </block>
              </div>
            </block>
            <block v-else>
              <div @tap="addGood" style="display: flex;flex-direction: column;align-items: center;">
                <block v-if="hasGood">
                  <image src="/static/images/liked.png" style="width: 25px;height: 25px"></image>
                </block>
                <block v-else>
                  <image src="/static/images/like.png" style="width: 25px;height: 25px"></image>
                </block>
                <text style="font-size: 12px;color: #666;">{{good}}</text>
              </div>
              <div @tap="addBad" style="display: flex;flex-direction: column;align-items: center;">
                <block v-if="hasBad">
                  <image src="/static/images/unliked.png" style="width: 25px;height: 25px"></image>
                </block>
                <block v-else>
                  <image src="/static/images/unlike.png" style="width: 25px;height: 25px"></image>
                </block>
                <text style="font-size: 12px;color: #666;">{{bad}}</text>
              </div>
            </block>
            <!--/是否已投票-->

            <div>
              <button plain="true" open-type="share" style="border: none;padding: 0;">
                <div style="display: flex;flex-direction: column;align-items: center;">
                  <image src="/static/images/share.png" style="width: 25px;height: 25px"></image>
                  <text style="font-size: 12px;color: #666;">分享</text>
                </div>
              </button>
            </div>


          </div>
          <!--/赞-->
          <!--关注作者-->

          <block v-if="showMakerInfo">
            <div style="display: flex;padding: 10px;background-color: #fff;align-items: center;">
              <image :src="sDetail?sDetail.videoMaker.HeaderURL:''"
                     style="width: 30px;height: 30px;margin-right: 10px;border-radius: 50%;overflow: hidden;"></image>
              <div style="display: flex;flex-direction: column;align-items: left;">
                <text style="font-size: 14px;color: #333;">{{sDetail?sDetail.videoMaker.Name:""}}</text>
                <!--暂时隐藏-->
                <text v-if="false" style="font-size: 12px;color: #999">1.9万 位订阅者</text>
              </div>
              <div style="flex: 1;align-items: center;">
              </div>

              <div style="display: flex;align-items: center;" @tap="dingyueClick">
                <image src="/static/images/movie1.png"
                       style="margin-left: 12px;width: 12px;height: 12px;margin-right: 5px;"></image>
                <text style="font-size: 12px;color: #ff4f4d;">订阅</text>
              </div>
            </div>
          </block>
          <!--/关注作者-->

          <div style="height: 1px;background-color: #eee;"></div>

          <!--资源信息-->

          <!--/资源信息-->

          <div style="height: 1px;background-color: #eee;"></div>


          <!--接下来播放-->
          <div style="display: flex;flex-direction: column;padding: 10px;background-color: #fff;">
            <div style="display: flex;align-items: center;margin-bottom: 10px;">
              <text style="font-size: 12px;color: #999;">猜你喜欢</text>
            </div>
            <!--items-->
            <div @tap="recommendClick(item)" v-for="(item,index) in recommendVideos" :key="index"
                 style="display: flex;margin-bottom: 15px">
              <div style="width: 150px;height: 90px;margin-right: 10px;">
                <div style="position: relative;width: 100%;height: 100%;">
                  <image :src="item.videoPlayInfo.CoverURL" style="width: 100%;height: 100%;"></image>
                  <text
                    style="position: absolute;bottom: 5px;right: 5px;background-color: #000;color: white;padding:1px 5px;font-size: 10px;border-radius: 4px;">
                    {{item.videoPlayInfo.time}}
                  </text>
                </div>
              </div>
              <div style="flex: 1;flex-direction: column;margin-right: 10px;">
                <text class="description3">{{item.videoPlayInfo.Title}}</text>
                <text style="font-size: 12px;color: #999">{{item.videoMaker.Name}} · 为你推荐</text>
              </div>
              <div>
                <image src="/static/images/more3.png" style="width: 10px;height: 10px;"></image>
              </div>
            </div>

            <!--/items-->
          </div>
          <!--/接下来播放-->

          <!--loading view-->
          <loadani :showLoading="showLoading"></loadani>
          <!--/loading view-->

        </scroll-view>

      </view>


      <!--/body-->
    </div>


  </div>
</template>

<script>

  import Loadani from "../../components/loadani";
  import Myheader from "../../components/myheader";
  import Toast from "mp-weui/packages/toast";


  export default {
    components: { Myheader, Loadani, Toast },

    data() {
      return {
        showLoading:true,
        sDetail: null,
        vpid: -1,
        playInfo: "",
        showMakerInfo: true,
        hasVoted: true,
        hasGood: false,
        hasBad: false,
        good: 0,
        bad: 0,
        user_id: -1,
        recommendVideos: [],
        data: {
          CoverURL: "",
          Duration: 0,
          Title: "",
          PlayInfoList: null
        }
      };
    },
    mounted() {
      wx.setNavigationBarTitle({
        title: ""
      });
    },
    onShareAppMessage: function(res) {
      return {
        title: "",
        path: "/pages/video3/main?vpid=" + this.vpid
      };
    },
    onUnload() {

    },
    onShow() {
      let that = this;
      that.showLoading = true;

      that.vpid = parseInt(this.$root.$mp.query.vpid);

      if (that.vpid <= 0) {
        Toast("数据异常,请退出重试");
        wx.navigateBack();
        return;
      }

      let user_id = wx.getStorageSync("USERID");
      that.user_id = user_id;
      if (!user_id || typeof(user_id) == "undefined" || user_id == 0) {
        //用户未授权
        Toast("用户id异常");
        that.goToShouquanPage();
        return;
      } else {
        wx.getSetting({
          success: function(res) {
            if (res.authSetting["scope.userInfo"]) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              that.getData();
            } else {
              //用户未授权
              that.goToShouquanPage();
            }
          }
        });
      }


    },
    methods: {
      recommendClick: function(item) {
        var that = this;
        that.vpid = item.videoPlayInfo.id;
        that.sDetail = item;
        wx.setStorageSync("ITEMDETAIL3", JSON.stringify(item));
        that.getData();
      },
      addGood: function() {
        var that = this;
        that.good = that.good + 1;
        that.hasVoted = true;
        that.hasGood = true;

        that.$Fly.get("addVideoVote", {
          tid: that.sDetail.data.id,
          attitude: "1",
          uid: that.user_id
        }).then((res) => {

        }).catch((e) => console.log(e));

      },
      addBad: function() {
        var that = this;
        that.bad = that.bad + 1;

        that.hasVoted = true;
        that.hasBad = true;

        that.$Fly.get("addVideoVote", {
          tid: that.sDetail.data.id,
          attitude: "0",
          uid: that.user_id
        }).then((res) => {

        }).catch((e) => console.log(e));
      },

      showShare: function() {
        wx.showShareMenu({
          withShareTicket: true
        });
      },

      getData: function() {
        var that = this;
        if (that.vpid !== 0) {
          that.getVideoInfo(this.vpid);
          that.getVideoVote(this.vpid);
          that.isVideoVote(this.vpid, that.user_id);
          that.viewVideo(this.vpid, that.user_id);
        }
        wx.getStorage({
          key: "ITEMDETAIL3",
          success: function(res) {
            that.sDetail = JSON.parse(res.data);
            that.getRecommendVideos(that.sDetail.data.Type, that.user_id);
          }
        });
      },

      dingyueClick: function() {

      },
      getRecommendVideos: function(type, user_id) {
        let that = this;
        that.$Fly.get("getRecommendVideos", {
          type: type,
          user_id: user_id
        }).then((res) => {
          that.showLoading = false;
          that.recommendVideos = res.data;

        }).catch((e) => {
          that.showLoading = false;

        });
      },
      videoPlay: function() {
        let that = this;
        that.$Fly.get("videoPlay", {
          vpid: that.vpid,
          user_id: that.user_id
        }).then((res) => {

        }).catch((e) => console.log(e));
      },
      toggleMakerInfo: function() {
        this.showMakerInfo = !this.showMakerInfo;
      },
      getVideoInfo: function(vpid) {
        let that = this;
        that.$Fly.get("getVideoPlayInfo", {
          vpid: vpid
        }).then((res) => {
          that.data = res.data;
          let playInfoList = JSON.parse(this.data.PlayInfoList).PlayInfo;
          for (let i = 0; i < playInfoList.length; i++) {
            let info = playInfoList[i];
            if (info.Definition === "FD") {
              that.playInfo = info.PlayURL;
              break;
            }
          }

        }).catch((e) => console.log(e));
      },
      getVideoVote: function(vpid) {
        let that = this;
        that.$Fly.get("getVideoVote", {
          vpid: vpid
        }).then((res) => {

          console.log(res.data);

          that.good = res.data.good;
          that.bad = res.data.bad;

        }).catch((e) => console.log(e));
      },
      viewVideo: function(vpid, user_id) {
        let that = this;
        that.$Fly.get("viewVideo", {
          vpid: vpid,
          user_id: user_id
        }).then((res) => {

        }).catch((e) => console.log(e));
      },

      isVideoVote: function(vpid, uid) {
        let that = this;
        that.$Fly.get("isVideoVote", {
          vpid: vpid,
          uid: uid
        }).then((res) => {

          if (res.data) {
            if (res.data.attitude === "1") {
              that.hasVoted = true;
              that.hasGood = true;
              that.hasBad = false;
            } else {
              that.hasVoted = true;
              that.hasGood = false;
              that.hasBad = true;
            }
          } else {
            that.hasVoted = false;
            that.hasGood = false;
            that.hasBad = false;
          }

        }).catch((e) => console.log(e));
      },

      getVideoVotes: function(vpid, uid) {
        let that = this;
        that.$Fly.get("getVideoVote", {
          vpid: vpid,
          uid: uid
        }).then((res) => {

          console.log(res);

        }).catch((e) => console.log(e));
      },

      goToShouquanPage: function() {
        wx.navigateTo({ url: "/pages/shouquan/main" });
      }

    }
  };
</script>

<style lang="scss" scoped>
  .description {
    display: -webkit-box;
    font-size: 14px;
    color: #333;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .description3 {
    display: -webkit-box;
    font-size: 14px;
    color: #333;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description2 {
    display: block;
    font-size: 28 rpx;
    color: #000000;
    line-height: 40 rpx;
    height: 120 rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .card-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }


</style>
