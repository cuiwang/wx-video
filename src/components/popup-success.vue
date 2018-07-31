<template>
  <div class="popup" :class="{'popup-show': show}">
    <div class="popup-body" ref="popupBody">
      <div class="popup-success">
        <div class="popup-success__body">
          <img src="/static/images/right.png"/>
          <p>{{cont}}</p>
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
      show: {
        default: false,
        type: Boolean
      },
      cont: {
        default: '投票已成功！',
        type: String
      },
      maskClose: {
        type: Boolean,
        default: true
      },
      duration: {
        type: Number,
        default: 1200
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
      }
    },
    watch: {
      show (val) {
        let vm = this
        setTimeout(function() {
          vm.maskClosePopup()
        }, vm.duration);
      }
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
        height: 100%;
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
  .popup-success {
    margin: auto;
    position: absolute;
    left: 10%;
    top: 0;
    right: 10%;
    bottom: 0;
    text-align: center;
    box-sizing: border-box;
    .popup-success__body {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      margin-top: -140px;
      box-sizing: border-box;
      background-color: #fff;
      padding: 40px 20px;
      border-radius: 4px;
      height: 140px;
      img {
        height: 32px;
        width: 32px;
      }
    }
  }
</style>
