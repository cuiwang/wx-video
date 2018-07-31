<template>
  <div class="popup" :class="{'popup-show': show}">
    <div class="popup-body" ref="popupBody" :class="position">
      <div class="m-reg">
        <div class="flex">
          <div class="flex-w50">姓名</div>
          <div class="flex-1">
            <input type="text" placeholder="请输入真实姓名" />
          </div>
        </div>
        <div class="flex">
          <div class="flex-w50">手机</div>
          <div class="flex-1">
            <input type="text" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="btn-box">
          <div class="btn btn-blue btn-circle btn-block btn-large" @click="voteConf">投 票</div>
        </div>
      </div>
    </div>
    <div class="popup-mask" @click="maskClosePopup"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'popup',
    data () {
      return {
        selItem: ''
      };
    },
    props: {
      position: {
        default: 'top',
        type: String
      },
      show: {
        default: false,
        type: Boolean
      },
      maskClose: {
        type: Boolean,
        default: true
      }
    },
    mounted () {

    },
    methods: {
      maskClosePopup () {
        if (this.maskClose) {
          this.show = false;
          this.$emit('update:show', false);
        }
      },
      voteConf () {
        let vm = this
        vm.$emit("vote", true);
        vm.maskClosePopup();
      }
    },
    watch: {

    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    tap-highlight-color: rgba(0, 0, 0, 0);
    z-index: -1;
    -webkit-transition: opacity 400ms;
    transition: opacity 400ms;
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: none;
    overflow: auto;
    z-index: 1500;

    &.popup-show {
      display: block;
      .popup-mask {
        opacity: 1;
        z-index: 1501;
      }
      .popup-body {
        opacity: 1;
      }
    }

    .popup-body {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1502;
      opacity: 0;
      -webkit-transition: opacity 400ms;
      transition: opacity 400ms;

      &.bottom {
        top: auto;
        bottom: 0;
      }
    }
  }

  .m-reg {
    background-color: #fff;
    .btn-box {
      padding: 20px 15px 20px 0;
      margin-left: 15px;
      text-align: center;
      border-top: 1px solid #eee;
      .weui-btn {
        width: 260px;
      }
    }
  }

  .m-reg /deep/ {
    .flex {
      padding: 12px 15px 12px 0;
      margin-left: 15px;
      border-bottom: 1px solid #eee;
    }
    .btn-box {
      padding: 20px 15%;
    }
  }
  .flex .flex-w60 {
    width: 60px;
  }
  .flex .flex-w50 {
    width: 50px;
  }
</style>
