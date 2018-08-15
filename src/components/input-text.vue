<template>
  <div class="flex">
    <input :maxlength="maxlength" type="text" v-model="account" :placeholder="placeholder" @focus="focus = true" @blur="focus = false" />
    <div v-if="isDefined('clear')" v-show="focus && account.length" class="clear" @click="account = ''"></div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      clear: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        focus: false,
        account: ''
      };
    },
    watch: {
      value: {
        handler(val) {
          this.account = val;
        },
        immediate: true
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
    }
    .clear {
      width: 40px;
      height: 40px;
      background: ~"url('~assets/home/button_clear.png') no-repeat center center/100%";
    }
  }
</style>


