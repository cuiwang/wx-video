<template>
  <div class="page">
    <div class="content">
      <!--header-->
      <div>
        <div
          style="display: flex;justify-content: center;align-items: center;height: 54px;background-color: white;box-shadow:0px 1px 10px #ccc;">
          <div style="font-size: 16px;color: #333;font-weight: bold;margin-top: 2px;">
            《{{sDetail?sDetail.doubanInfo.Title:""}}》
          </div>
        </div>
      </div>
      <!--/header-->
      <!--body-->
      <!--style4-->
      <div v-for="(item,index) in fileInfos" :key="index" style="margin: 10px;">
        <div class="panel">
          <div style="display: flex;">
            <div class="left" style="flex: 1;display: flex;flex-direction: row;align-items: center">
              <text style="font-size: 18px;color: #000;font-weight: bold;margin-bottom: 5px;">{{index}} 格式</text>
            </div>
          </div>
          <div @tap="copy(data.link)" v-for="(data,index2) in item.data" class="bottom"
               style="display: flex;align-items: center;border-top: 2px dotted #eee;padding-top: 10px;padding-bottom: 10px;">

            <div style="flex: 1;display: flex;flex-direction: column">
              <text style="font-size: 14px;color: #333;">{{data.title}}</text>
              <text style="font-size: 12px;color: #ff4f4d;">{{data.link}}</text>
            </div>
            <image src="/static/images/more.png" style="width: 20px;height: 20px;"></image>
          </div>

        </div>

        <div class="line" style="width: 100%;height: 1rpx;background-color: #eee;"></div>
      </div>

    </div>

    <!--/body-->

    <!--loading view-->
    <!--/loading view-->
  </div>
</template>

<script>

  import Loadani from "../../components/loadani";
  import Myheader from "../../components/myheader";


  export default {
    components: { Myheader, Loadani },
    data() {
      return {
        sDetail: null,
        fileInfos: []
      };
    },
    mounted() {
      wx.setNavigationBarTitle({
        title: "下载"
      });
    },

    onUnload() {

    },
    onShow() {

      var that = this;

      wx.getStorage({
        key: "ITEMDETAIL",
        success: function(res) {
          that.sDetail = JSON.parse(res.data);
          that.fileInfos = JSON.parse(that.sDetail.bookFile.JsonData);
        }
      });

    },
    methods: {
      copy: function(data) {
        wx.setClipboardData({
          data: data,
          success: function(res) {
            // self.setData({copyTip:true}),
            setTimeout(function () {
              wx.showModal({
                showCancel:false,
                title: "提示",
                confirmColor:'#ff4f4d',
                confirmText:'知道了',
                content: "复制成功,请粘贴到浏览器查看",
                success: function(res) {
                  if (res.confirm) {
                    console.log("确定");
                  } else if (res.cancel) {
                    console.log("取消");
                  }
                }
              });
            }, 1200) //延迟时间 这里是1秒

          }
        });
      }

    }
  };
</script>

<style lang="scss" scoped>
  .description {
    display: -webkit-box;
    font-size: 28 rpx;
    color: #000000;
    line-height: 40 rpx;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
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

  .right {
    margin-left: 10px;
    margin-top: 20px;
  }
</style>
