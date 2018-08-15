<template>
  <div class="flex arrow">
    <div class="label">{{label}}</div>
    <input type="text" v-model="value" :placeholder="placeholder" @click="visible = true" readonly />
    <v-slide-up v-model="visible">
      <slot></slot>
    </v-slide-up>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      value: {
        required: true
      },
      placeholder: {
        type: String
      },
      label: {
        type: String
      }
    },
    data() {
      return {
        visible: false
      };
    },
    methods: {
      confirm() {
        this.visible = false;
        this.$emit('confirm');
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
      color: #666;
    }
  }
</style>

