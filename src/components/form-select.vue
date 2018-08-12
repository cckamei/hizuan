<template>
  <div class="flex arrow">
    <div class="label">{{label}}</div>
    <input type="text" :value="result.label" :placeholder="placeholder" @click="open" readonly />
    <v-slide-up ref="slide-up" :title="title" @confirm="confirm" :isConfirm="Object.keys(selected).length">
      <v-input-radio v-model="selected" :list="list"></v-input-radio>
    </v-slide-up>
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'label', 'list', 'title'],
    data() {
      return {
        selected: {},
        result: {}
      };
    },
    methods: {
      open() {
        this.$refs['slide-up'].open();
      },
      confirm() {
        this.result = this.selected;
        this.$emit('input', this.result);
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


