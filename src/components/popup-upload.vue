<template>
  <div class="popup" :class="{'popup-show': show}">
    <div class="popup-body" ref="popupBody" :class="position">
      <div class="m-reg">
        <div v-for="(item,index) in datas" :key="item.name" v-if="item.selectd" class="flex">
          <div class="flex-w50">{{item.name}}</div>
          <div class="flex-1">
            <input type="text" @focus="inputFocus(index)" @input="inputing" placeholder="请输入" />
          </div>
        </div>
        <div class="btn-box">
          <div class="btn btn-blue btn-circle btn-block btn-large" @click="uploadConf">{{poptxt}}</div>
        </div>
      </div>
    </div>
    <div class="popup-mask" @click="maskClosePopup"></div>
  </div>
</template>

<script>
  import Toast from 'mp-weui/packages/toast'

  export default {
    name: 'popup',
    data () {
      return {
        selItem: '',
        index:0,
      };
    },
    components: {
      Toast
    },

    props: {
      datas:{
        default: [],
        type: Array
      },
      position: {
        default: 'top',
        type: String
      },
      poptxt: {
        default: '确认上传',
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
      inputFocus(index){
        this.index = index;
      },
      inputing(e){
        this.datas[this.index].value = e.mp.detail.value;
        console.log(e.mp.detail.value);

      },
      maskClosePopup () {
        if (this.maskClose) {
          this.show = false;
          this.$emit('update:show', false);
        }
      },
      uploadConf () {
        let vm = this
        for (var index in vm.datas)
        {
          if (vm.datas[index].selectd) {
            //必填
            if (!vm.datas[index].value) {
              Toast("请输入"+vm.datas[index].name+"后重新提交!")
              return;
            }

          }
        }
        vm.$emit("upload", vm.datas);
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
