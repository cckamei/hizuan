<template>
  <div class="flex arrow">
    <div class="label">{{label}}</div>
    <input type="text" :value="text" :placeholder="placeholder" @click="open" readonly />
    <v-slide-up ref="slide-up" :title="title" @confirm="confirm">
      <datetime-picker v-model="date" :yearFormat="yearFormat" :monthFormat="monthFormat" :dateFormat="dateFormat" type="date" :startDate="new Date('1900/01/01')" :endDate="new Date()"></datetime-picker>
    </v-slide-up>
  </div>
</template>

<script>
  import { formatDate } from '../utils';
  import datetimePicker from './mint-ui/datetime-picker';

  export default {
    props: ['placeholder', 'label', 'format', 'title', 'yearFormat', 'monthFormat', 'dateFormat'],
    data() {
      return {
        text: '',
        date: new Date('1980/01/01')
      };
    },
    components: {
      datetimePicker
    },
    methods: {
      open() {
        this.$refs['slide-up'].open();
      },
      confirm() {
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


