<template>
  <div class="flex arrow">
    <div class="label">{{label}}</div>
    <input type="text" :value="text" :placeholder="placeholder" @click="display = true" readonly />
    <mt-actionsheet :actions="actions" v-model="display" cancelText=""></mt-actionsheet>
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'label', 'list'],
    data() {
      return {
        display: false,
        actions: [],
        text: ''
      };
    },
    created() {
      this.actions = this.list.map(item => {
        let name = '';
        let sheet = {};
        if(typeof item === 'string') {
          name = item;
        } else {
          sheet = item;
          name = item.name;
        }
        return {
          ...sheet,
          name,
          method: this.select
        };
      });
    },
    methods: {
      select(val) {
        this.text = val.name;
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


