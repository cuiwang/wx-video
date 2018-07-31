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
      <!--style1-->
      <div @tap="showDetails(item)" v-for="(item,index) in items" :key="index" style="margin: 10px;">
        <div class="panel card-2">
          <div class="top" style="position: relative;">
            <image mode="aspectFill" :src="item.videoPlayInfo.CoverURL" style="height: 350rpx;width: 100%;"></image>
            <text
              style="position: absolute;bottom: 10px;right: 5px;background-color: #000;color: white;padding:1px 5px;font-size: 12px;border-radius: 4px;">
              {{item.videoPlayInfo.time}}
            </text>
          </div>
          <div class="bottom" style="display: flex;align-items: center;">
            <image :src="item.videoMaker.HeaderURL"
                   style="border-radius: 50%;width: 40px;height: 40px;margin-right: 10px;"></image>
            <div style="flex: 1;display: flex;flex-direction: column">

              <block v-if="item.readed">
                <text class="description2" style="font-size: 14px;color: #999;">{{item.videoPlayInfo.Title}}</text>
              </block>
              <block v-else>
                <text class="description2" style="font-size: 14px;color: #333;">{{item.videoPlayInfo.Title}}</text>
              </block>

              <text style="font-size: 12px;color: #999;">{{item.videoMaker.Name}} · {{item.data.View}}次观看</text>
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
        user_id: -1,
        items: [],
        isGetData:false,
        isNoData:false,
        showNew:false,
        dataIndex:1,
      };
    },
    mounted() {
      wx.setNavigationBarTitle({
        title: "知识"
      });
    },
    onShareAppMessage: function(res) {
      return {
        title: "",
        path: "/pages/knowladge/main"
      };
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
      that.getKnowladges(that.user_id);

    },
    onReachBottom: function() {
      let that = this;
      if (that.isGetData|| that.isNoData) {
        return;
      }
      that.dataIndex = that.dataIndex + 1;
      that.showLoading = true;
      that.getKnowladges(that.user_id);
    },
    onReady() {
      let that = this;
      let user_id = wx.getStorageSync("USERID");
      that.user_id = user_id;
      that.dataIndex = 1;
      that.getKnowladges(user_id);
    },
    methods: {
      showDetails:function(item){
        wx.setStorageSync('ITEMDETAIL3', JSON.stringify(item));
        wx.navigateTo({url: "/pages/video3/main?vpid="+item.videoPlayInfo.id});
      },
      getKnowladges: function(user_id) {
        let that = this;
        that.$Fly.get("getKnowladges", {
          user_id: user_id,
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
      }

    }
  };
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
</style>
