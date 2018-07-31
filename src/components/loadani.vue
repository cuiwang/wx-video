<template>
  <div>
    <div v-if="showLoading">
      <div>
        <view style="padding:20px;opacity:0.2;height:60%" :animation="animationData">
          <view style="height: 300rpx;background-color: #9b9b9b;">
          </view>
          <view class="weui-flex" style="align-items: center">
            <view style="height: 100rpx;width: 100rpx;border-radius: 50%;background-color: #9b9b9b;margin: 20rpx;">
            </view>
            <view class="weui-flex__item" style="flex-direction: column">
              <view style="background-color: #9b9b9b;height: 30rpx;margin-top: 20rpx;"></view>
              <view style="background-color: #9b9b9b;height: 30rpx;margin-top: 20rpx;"></view>
              <view style="background-color: #9b9b9b;height: 30rpx;margin-top: 20rpx;"></view>
            </view>
          </view>
        </view>
      </div>

      <div>
        <view style="padding:20px;opacity:0.2;height:60%" :animation="animationData2">
          <view style="height: 300rpx;background-color: #9b9b9b;">
          </view>
          <view class="weui-flex" style="align-items: center">
            <view style="height: 100rpx;width: 100rpx;border-radius: 50%;background-color: #9b9b9b;margin: 20rpx;">
            </view>
            <view class="weui-flex__item" style="flex-direction: column">
              <view style="background-color: #9b9b9b;height: 30rpx;margin-top: 20rpx;"></view>
              <view style="background-color: #9b9b9b;height: 30rpx;margin-top: 20rpx;"></view>
              <view style="background-color: #9b9b9b;height: 30rpx;margin-top: 20rpx;"></view>
            </view>
          </view>
        </view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      //animation
      interval: 0,
      animation: null,
      animationData: {},
      animation2: null,
      animationData2: {},
    }
  },
  methods:{
    showAnimation(data) {

      this.animation.opacity(data ? 0.2 : 0.5).step()
      this.animation.opacity(data ? 0.5 : 0.2).step()

      this.animationData = this.animation.export();
    },
    showAnimation2(data) {

      this.animation2.opacity(data ? 0.2 : 0.5).step()
      this.animation2.opacity(data ? 0.5 : 0.2).step()

      this.animationData2 = this.animation2.export();
    },
  },
  mounted () {


    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: "ease"
    })
    var animation2 = wx.createAnimation({
      duration: 800,
      timingFunction: "ease"
    })
    this.animation = animation
    this.animation2 = animation2

    let data = true
    let data2 = true

    this.interval = setInterval(() => {
      data = !data
      this.showAnimation(data)
    }, 800)

    setTimeout(() => {
      this.interval = setInterval(() => {
        data2 = !data2
        this.showAnimation2(data2)
      }, 800)
    }, 200)
  }
}
</script>

<style lang="scss" scoped>

</style>
