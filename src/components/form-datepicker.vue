<template>
  <div class="flex arrow">
    <div class="label">{{label}}</div>
    <input type="text" :value="text" :placeholder="placeholder" @click="open" readonly />
    <mt-datetime-picker ref="picker" v-model="date" type="date" :startDate="new Date('1900/01/01')" :endDate="new Date()" @confirm="handleConfirm"></mt-datetime-picker>
  </div>
</template>

<script>
  import { formatDate } from '../utils';

  export default {
    props: ['placeholder', 'label', 'format'],
    data() {
      return {
        text: '',
        date: new Date('1980/01/01')
      };
    },
    methods: {
      open() {
        this.$refs.picker.open();
      },
      handleConfirm() {
        this.text = formatDate(this.date, this.format);
        this.$emit('input', this.text);
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


