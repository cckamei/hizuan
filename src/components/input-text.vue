<template>
  <div class="flex">
    <input :maxlength="maxlength" type="text" v-model="account" :placeholder="placeholder" @focus="focus = true" @blur="focus = false" />
    <div v-if="isDefined('clear')" v-show="focus && account.length" class="clear" @click="account = ''"></div>
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'maxlength', 'clear'],
    data() {
      return {
        focus: false,
        account: ''
      };
    },
    watch: {
      value() {
        this.account = value;
      },
      account(val) {
        this.$emit('input', val);
      }
    },
    methods: {
      isDefined(val) {
        return this[val] !== undefined;
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
    .clear {
      width: 40px;
      height: 40px;
      background: ~"url('~assets/home/button_clear.png') no-repeat center center/100%";
    }
  }
</style>


