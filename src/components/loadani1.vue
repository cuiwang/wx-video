<template>
  <div>
    <swiper v-if="showLoading" :animation="animationData" style="height: 85vh;margin-top: 20px;margin-bottom: 20px;"
            previous-margin="20px" next-margin="20px">

      <swiper-item>
        <div class="panel" style="margin-right: 20px;">
          <div style="background-color: #fff;height: 80vh;display: flex;flex-direction: column;align-items: center">

            <image style="width: 120px;height: 160px;margin-top: 20px;background-color: #eeeeee"></image>
            <text
              style="color: #333;text-align:center;font-size: 22px;font-family: SimSun;margin-top: 10px;padding-left: 20px;padding-right: 20px;"></text>
            <text
              style="color: #666;text-align:center;font-size: 14px;font-family: SimSun;margin-top: 10px;padding-left: 20px;padding-right: 20px;">
              ......
            </text>
            <div style="flex: 1;"></div>
            <div class="bottom" style="display: flex;flex-direction: column;justify-content: center;">
              <div style="display: flex;margin-bottom: 10px;justify-content: center">
                <image
                  style="background-color: #eeeeee;width: 30px;height: 30px;border-radius: 50%;overflow: hidden;"></image>
              </div>
              <p
                style="background-color: #eeeeee;text-align: center;color: #666;font-size: 14px;margin-bottom: 10px"></p>
              <div
                style="margin-bottom: 10px;display: flex;flex-direction: row;align-items: center;justify-content: center;">
                <image style="background-color: #eeeeee;width: 14px;height: 14px;margin-right: 5px"></image>
              </div>
            </div>
          </div>
        </div>
      </swiper-item>

      <swiper-item>
        <div class="panel" style="margin-right: 20px;">
          <div style="background-color: #fff;height: 80vh;display: flex;flex-direction: column;align-items: center">

            <image style="width: 120px;height: 160px;margin-top: 20px;background-color: #eeeeee"></image>
            <text
              style="color: #333;text-align:center;font-size: 22px;font-family: SimSun;margin-top: 10px;padding-left: 20px;padding-right: 20px;"></text>
            <text
              style="color: #666;text-align:center;font-size: 14px;font-family: SimSun;margin-top: 10px;padding-left: 20px;padding-right: 20px;">
              ......
            </text>
            <div style="flex: 1;"></div>
            <div class="bottom" style="display: flex;flex-direction: column;justify-content: center;">
              <div style="display: flex;margin-bottom: 10px;justify-content: center">
                <image
                  style="background-color: #eeeeee;width: 30px;height: 30px;border-radius: 50%;overflow: hidden;"></image>
              </div>
              <p
                style="background-color: #eeeeee;text-align: center;color: #666;font-size: 14px;margin-bottom: 10px"></p>
              <div
                style="margin-bottom: 10px;display: flex;flex-direction: row;align-items: center;justify-content: center;">
                <image style="background-color: #eeeeee;width: 14px;height: 14px;margin-right: 5px"></image>
              </div>
            </div>
          </div>
        </div>
      </swiper-item>


    </swiper>
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
    data() {
      return {
        //animation
        interval: 0,
        animation: null,
        animationData: {}
      };
    },
    methods: {
      showAnimation(data) {

        this.animation.opacity(data ? 0.6 : 1.0).step();
        this.animation.opacity(data ? 1.0 : 0.6).step();

        this.animationData = this.animation.export();
      }
    },
    mounted() {


      var animation = wx.createAnimation({
        duration: 800,
        timingFunction: "ease"
      });
      this.animation = animation;

      let data = true;

      this.interval = setInterval(() => {
        data = !data;
        this.showAnimation(data);
      }, 800);

    }
  };
</script>

<style lang="scss" scoped>

</style>
