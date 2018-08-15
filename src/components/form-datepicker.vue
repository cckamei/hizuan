<template>
  <div class="flex arrow">
    <div class="label">{{label}}</div>
    <input type="text" :value="text" :placeholder="placeholder" @click="visible = true" readonly />
    <v-slide-up v-model="visible" :title="title" @confirm="confirm">
      <datetime-picker v-model="date" :yearFormat="yearFormat" :monthFormat="monthFormat" :dateFormat="dateFormat" type="date" :startDate="new Date('1900/01/01')" :endDate="new Date()"></datetime-picker>
    </v-slide-up>
  </div>
</template>

<script>
  import { formatDate } from '../utils';
  import datetimePicker from './mint-ui/datetime-picker';

  export default {
    props: {
      placeholder: {
        type: String
      },
      label: {
        type: String,
        required: true
      },
      format: '',
      title: '',
      yearFormat: '',
      monthFormat: '',
      dateFormat: ''
    },
    data() {
      return {
        visible: false,
        text: '',
        date: new Date('1980/01/01')
      };
    },
    components: {
      datetimePicker
    },
    methods: {
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
      color: #666;
    }
  }
</style>


