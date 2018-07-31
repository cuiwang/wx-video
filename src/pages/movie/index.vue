<template>
  <div class="page">
    <div class="content" style="display: flex;flex-direction: column;">

      <div v-if="showNew" style="background-color: #fff;width: 100%;padding: 10px;top: -40px;align-self: center;">
        <cube_loading :type="'sk-wave'"></cube_loading>
      </div>
      <!--header-->
      <myheader></myheader>
      <!--/header-->


      <!--body-->
      <!--style2-->
      <div @tap="showDetails(item)" v-for="(item,index) in items" :key="index" style="margin: 10px;">
        <div class="panel card-2">
          <div style="display: flex;">
            <div class="left" style="flex: 1;display: flex;flex-direction: column;">

              <block v-if="item.readed">
                <text style="font-size: 20px;color: #999;font-weight: bold;margin-bottom: 5px;">{{item.doubanInfo.Title}}</text>
              </block>
              <block v-else>
                <text style="font-size: 20px;color: #000;font-weight: bold;margin-bottom: 5px;">{{item.doubanInfo.Title}}</text>
              </block>

              <text style="font-size: 12px;color: #666;margin-bottom: 10px;">{{item.doubanInfo.Author}} · {{item.doubanInfo.Tag}}</text>
              <text class="description" style="font-size: 14px;color: #333;margin-bottom: 10px;">{{item.doubanInfo.Summary}}</text>
              <div style="display: flex;align-items: center;">
                <block v-if="item.doubanInfo.RatingAverage>9">
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                </block>
                <block v-else-if="item.doubanInfo.RatingAverage>8">
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                </block>
                <block v-else-if="item.doubanInfo.RatingAverage>6">
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                </block>
                <block v-else-if="item.doubanInfo.RatingAverage>4">
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                </block>
                <block v-else-if="item.doubanInfo.RatingAverage>2">
                  <image src="/static/images/rc_cs_star_hover.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                </block>
                <block v-else>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                  <image src="/static/images/rc_cs_star.png" style="width: 10px;height: 10px;"></image>
                </block>
                <text style="font-size: 12px;color: #ffd686;margin-right: 10px;">{{item.doubanInfo.RatingAverage}}分</text>
              </div>
              <text style="font-size: 12px;color: #999;margin-top: 10px;margin-bottom: 10px;">视频解说 ▼</text>
            </div>
            <div class="right">

              <image class="card-2" :src="item.doubanInfo.Image" style="width: 120px;height: 160px"></image>

            </div>
          </div>
          <div class="bottom" style="display: flex;align-items: center;border-top: 2px dotted #eee;padding-top: 10px;">
            <image :src="item.videoMaker.HeaderURL"
                   style="border-radius: 50%;width: 40px;height: 40px;margin-right: 10px;"></image>
            <div style="flex: 1;display: flex;flex-direction: column">
              <text class="description2" style="font-size: 14px;color: #333;">{{item.videoPlayInfo.Title}}</text>
            </div>
            <image src="/static/images/more.png" style="width: 20px;height: 20px;"></image>
          </div>

        </div>
        <div class="line" style="width: 100%;height: 1rpx;background-color: #eee;"></div>
      </div>
      <Loadani :showLoading="showLoading"></Loadani>

    </div>

    <!--/body-->

    <!--loading view-->
    <!--/loading view-->
  </div>
</template>

<script>

  import Loadani from "../../components/loadani";
  import Myheader from "../../components/myheader";
  import Cube_loading from "../../components/cube_loading";
  import Toast from 'mp-weui/packages/toast'
  export default {
    components: { Toast,Cube_loading, Myheader, Loadani},
    data() {
      return {
        showLoading: true,
        items: [],
        isGetData:false,
        isNoData:false,
        showNew:false,
        dataIndex:1,
        user_id: -1,
      }
    },
    mounted() {
      wx.setNavigationBarTitle({
        title: '影视'
      });
    },
    onShareAppMessage: function (res) {
      return {
        title: '',
        path: '/pages/movie/main'
      }
    },
    onUnload() {

    },
    onPullDownRefresh: function() {
      let that = this;
      that.showNew = true;

      if (that.isGetData|| that.isNoData) {
        return;
      }
      that.dataIndex = 1;
      that.getMovies(that.user_id);

    },
    onReachBottom: function() {
      let that = this;
      if (that.isGetData|| that.isNoData) {
        return;
      }
      that.dataIndex = that.dataIndex + 1;
      that.showLoading = true;
      that.getMovies(that.user_id);
    },
    onReady() {
      let that = this;
      let user_id = wx.getStorageSync("USERID");
      that.user_id = user_id;
      that.dataIndex = 1;
      that.getMovies(user_id);
    },
    methods: {
      showDetails:function(item){
        wx.setStorageSync('ITEMDETAIL2', JSON.stringify(item));
        wx.navigateTo({url: "/pages/video2/main?vpid="+item.videoPlayInfo.id});
      },

      getMovies: function (user_id) {
        let that = this;

        that.isGetData = true;

        that.$Fly.get('getMovies', {
          user_id:user_id,
          index:that.dataIndex,

        }).then((res) => {

          if (that.dataIndex === 1) {
            //刷新
            wx.stopPullDownRefresh();
            that.items = res.data.data.items;
          }else {
            //更多
            for(let i in res.data.data.items){
              console.log(res.data.data.items[i]);
              that.items.push(res.data.data.items[i]);
            }

            if (res.data.num < 10) {
              Toast('全部加载了');
              that.isNoData = true;
            }else {
              that.isNoData = false;
            }

          }

          that.showLoading = false;
          that.isGetData = false;
          that.showNew = false;

        }).catch((e) => {
          that.showLoading = false;
          that.isGetData = false;
          that.showNew = false;
        });
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
  .description2{
    display: -webkit-box;
    font-size:28rpx;
    color:#000000;
    line-height: 40rpx;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .description1 {
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
  .card-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  .card-4 {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  /**/
  .sk-wandering-cubes {
    margin: 40px auto;
    width: 40px;
    height: 40px;
    position: relative;
  }

  .sk-wandering-cubes .sk-cube {
    background-color: #67cf22;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;
    animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;
  }

  .sk-wandering-cubes .sk-cube2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  @-webkit-keyframes sk-wanderingCube {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);
      transform: translateX(30px) rotate(-90deg) scale(0.5);
    }

    50% {
      /* Hack to make FF rotate in the right direction */
      -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);
      transform: translateX(30px) translateY(30px) rotate(-179deg);
    }

    50.1% {
      -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);
      transform: translateX(30px) translateY(30px) rotate(-180deg);
    }

    75% {
      -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
      transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
    }

    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @keyframes sk-wanderingCube {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);
      transform: translateX(30px) rotate(-90deg) scale(0.5);
    }

    50% {
      /* Hack to make FF rotate in the right direction */
      -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);
      transform: translateX(30px) translateY(30px) rotate(-179deg);
    }

    50.1% {
      -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);
      transform: translateX(30px) translateY(30px) rotate(-180deg);
    }

    75% {
      -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
      transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
    }

    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
</style>
