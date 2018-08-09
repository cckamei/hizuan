<template>
  <div class="flex">
    <div class="label">{{label}}</div>
    <input type="text" :value="text" :placeholder="placeholder" @click="open" readonly />
    <mt-datetime-picker ref="picker" v-model="date" type="date" @confirm="handleConfirm"></mt-datetime-picker>
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'label'],
    data() {
      return {
        text: '',
        date: ''
      };
    },
    created() {
      // this.actions = this.list.map(item => {
      //   let name = '';
      //   let sheet = {};
      //   if(typeof item === 'string') {
      //     name = item;
      //   } else {
      //     sheet = item;
      //     name = item.name;
      //   }
      //   return {
      //     ...sheet,
      //     name,
      //     method: this.select
      //   };
      // });
    },
    methods: {
      open() {
        this.$refs.picker.open();
      },
      handleConfirm() {
        this.$emit('input', this.date);
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


