<template>
  <div>
    <div style="display: flex;align-items: center;height: 54px;background-color: white;box-shadow:0px 1px 10px #ccc;">
      <div style="display: flex;flex: 1;align-items: center;">
        <image src="/static/images/logo.png" style="margin-left: 20px;width: 30px;height: 30px;margin-right: 2px;"></image>
        <div style="font-size: 16px;color: #333;font-weight: bold;margin-top: 2px;">书和影视</div>
      </div>
      <image @tap="goSearch"  src="/static/images/search3.png" style="width: 20px;height: 20px;margin-right: 20px;"></image>
      <!--<image src="/static/images/user3.png" style="width: 20px;height: 20px;margin-right: 20px;"></image>-->
      <open-data type="userAvatarUrl" style="width: 22px;height: 22px;margin-right: 20px;border-radius: 50%;overflow: hidden;"></open-data>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /*showLoading: {
      type: Boolean,
      default: true
    }*/
  },
  data(){
    return {
      //animation
    }
  },
  methods:{
    goSearch:function() {
      wx.navigateTo({
        url: '/pages/search/main'
      })
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>

</style>
