<template>
  <div class="flex">
    <div class="label">{{label}}</div>
    <input :maxlength="maxlength" type="text" v-model="text" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'maxlength', 'label'],
    data() {
      return {
        text: ''
      };
    },
    watch: {
      password(val) {
        this.$emit('input', val);
      }
    }
  };
</script>

<style lang="less" scoped>
  .flex {
    width: 100%;
    height: 100%;
    font-size: 30px;
    .label {
      flex-shrink: 0;
      min-width: 30%;
      color: #999;
    }
    input {
      text-align: right;
      width: 100%;
      padding: 0 10px;
      font-size: 32px;
      color: #333;
      border: none;
      color: #666;
    }
  }
</style>


