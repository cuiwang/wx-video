<template>
  <div>
    <web-view src="https://v.qq.com/x/search/?q=%E7%BA%A2%E6%A5%BC%E6%A2%A6"></web-view>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        url: '',
      }
    },
    mounted() {
      wx.setNavigationBarTitle({
        title: ''
      });
    },

    onUnload() {

    },
    onShow() {
      var that = this;
      wx.getStorage({
        key: "URL",
        success: function(res) {
          that.url = res.data;
        }
      });


    },
    methods: {


    }
  }
</script>

<style lang="scss" scoped>
</style>
