<template>
  <div class="totop" v-show="visible" @click="toTop">
    <img src="@/assets/goods/button_top.png" alt="">
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    props: {
      value: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        visible: false,
        selector: null
      };
    },
    watch: {
      value(val) {
        this.visible = val;
      }
    },
    methods: {
      scroll(s = '.content') {
        let top = 0;
        if(!this.selector) {
          this.selector = $(s);
        }
        top = this.selector.scrollTop();
        this.visible = top > 10;
        this.$emit('top', top);
      },
      toTop() {
        this.selector.animate({
          scrollTop: 0
        }, 200);
      }
    }
  };
</script>

<style lang="less" scoped>
  .totop {
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 136px;
    right: 40px;
  }
</style>


