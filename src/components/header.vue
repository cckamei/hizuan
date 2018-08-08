<template>
  <div class="header">
    <div v-if="isDefined('back')" class="back" @click="backHandler"><img src="~assets/home/button_back.png" alt=""></div>
    <div class="title ellipsis">
      <slot></slot>
    </div>
    <div class="menus"></div>
  </div>
</template>

<script>
  export default {
    props: ['back'],
    methods: {
      isDefined(val) {
        return this[val] !== undefined;
      },
      isFunction(val) {
        return this[val] === 'function';
      },
      backHandler() {
        if(this.isDefined('back')) {
          if(this.isFunction('back')) {
            this.back();
          } else {
            this.$router.go(-1);
          }
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .header {
    position: absolute;
    height: 96px;
    line-height: 96px;
    top: 0;
    width: 100%;
    box-shadow: 0 10px 50px 10px rgba(170, 170, 170, 0.2);
    background-color: #fff;
    z-index: 1;
    .back {
      width: 96px;
      height: 96px;
      position: absolute;
      left: 0;
      top: 0;
      padding: 18px;
      img {
        height: 100%;
        display: block;
      }
    }
    .title {
      padding-left: 96px;
      font-size: 32px;
      color: #999;
      text-align: center;
      padding-right: 96px;
    }
  }
</style>
