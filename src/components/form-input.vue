<template>
  <div class="flex">
    <div class="label"></div>
    <input :maxlength="maxlength" type="text" v-model="text" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'maxlength', 'eye'],
    data() {
      return {
        text: ''
      };
    },
    watch: {
      value() {
        this.text = value;
      },
      password(val) {
        this.$emit('input', val);
      }
    }
  };
</script>

<style lang="less" scoped>
  .flex {
    width: 100%;
    input {
      width: 100%;
      padding: 0 10px;
      font-size: 32px;
      color: #333;
      border: none;
    }
    .icon {
      width: 40px;
      height: 40px;
      background: ~"url('~assets/home/button_invisible.png') no-repeat center center/100%";
      &.active {
        background: ~"url('~assets/home/button_visible.png') no-repeat center center/100%";
      }
    }
  }
</style>


