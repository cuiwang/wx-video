<template>
  <div class="popup" :class="{'popup-show': show}">
    <div class="popup-body" ref="popupBody" :class="position">
      <slot></slot>
    </div>
    <div class="popup-mask" @click="maskClosePopup"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'popup',
    data () {
      return {

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
</style>
