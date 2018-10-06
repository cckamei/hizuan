<template>
  <div class="flex" :class="{arrow:arrow}">
    <div class="label">{{label}}</div>
    <input type="text" :value="text" :placeholder="placeholder" @click="!readonly&&(visible = true)" readonly />
    <v-slide-up v-model="visible" :title="title" @confirm="confirm" :isConfirm="selectedIndex !== -1">
      <v-input-radio v-model="selectedIndex" :list="list"></v-input-radio>
    </v-slide-up>
  </div>
</template>

<script>
  export default {
    props: {
      readonly: {
        type: [Boolean, Number],
        default: true
      },
      arrow: {
        type: [Boolean, Number],
        default: false
      },
      value: {
        type: Number,
        required: true
      },
      placeholder: {
        type: String
      },
      label: {
        type: String
      },
      keyName: {
        type: String,
        default: 'label'
      },
      list: {
        type: Array,
        require: true
      },
      title: ''
    },
    data() {
      return {
        visible: false,
        selectedIndex: -1,
        text: ''
      };
    },
    watch: {
      value() {
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', this.value);
        if(this.value !== -1) {
          let selected = this.list[this.value];

          this.text = typeof selected === 'string' ? selected : selected[this.keyName];
        }
      }
    },
    methods: {
      confirm() {
        let selected = this.list[this.selectedIndex];
        this.text = typeof selected === 'string' ? selected : selected[this.keyName];
        this.$emit('input', this.selectedIndex);
      }
    }
  };
</script>

<style lang="less" scoped>
  .flex {
      width: 100%;
      height: 100%;
      font-size: 30px;
      padding: 0 16px;
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


