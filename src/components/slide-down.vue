<template>
  <div :class="name" class="popup-wrapper">
    <div class="mask" v-show="visible"></div>
    <transition :name="'popup-slide-' + name">
      <div class="popup" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>

</template>

<script>
  export default {
    props: ['value', 'name'],
    data() {
      return {
        visible: false
      };
    },
    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit('input', val);
      }
    }
  };
</script>

<style lang="less" scoped>
  .popup-slide-top-enter,
  .popup-slide-top-leave-active {
    transform: translateY(-100%);
  }

  .popup-slide-bottom-enter,
  .popup-slide-bottom-leave-active {
    transform: translateY(100%);
  }

  .popup-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .popup {
      width: 100%;
      position: absolute;
      transition: 0.2s;
      z-index: 101 !important;
      background-color: #fff;
    }
    &.top .popup {
      top: 194px;
    }
    &.bottom .popup {
      bottom: 0;
    }
  }

  .top .mask {
    top: 194px;
  }
</style>



    