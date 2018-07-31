<template>
  <div class="popup" :class="{'popup-show': show}">
    <div class="popup-body" ref="popupBody" :class="position">
      <div class="m-reg">
        <div class="reg-def">
          <input v-model="selItem" maxlength="20" type="text" placeholder="请输入自定义选项名称" />
        </div>
        <div class="btn-box">
          <div class="btn btn-blue btn-circle btn-block btn-large" @click="defConf">确 认</div>
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
          this.selItem = '';
          this.$emit('update:show', false);
        }
      },
      defConf () {
        let vm = this
        vm.$emit("popFinish", vm.selItem);
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
      .weui-btn {
        width: 260px;
      }
    }
    .reg-def {
      padding: 20px 20px 0 20px;
      input {
        border: 1px solid #aac2d4;
        border-radius: 20px;
        padding: 3px 15px;
      }
    }
  }

  .m-reg /deep/ {
    .btn-box {
      padding: 20px 15%;
    }
  }
</style>
