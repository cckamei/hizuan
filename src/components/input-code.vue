<template>
  <div class="flex">
    <input :maxlength="maxlength" type="text" v-model="code" :placeholder="placeholder" />
    <button class="btn" :class="{active: !sending}" @click="!sending && sendAuthCode()">{{text}}</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

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
        code: '',
        text: '获取验证码',
        sending: false
      };
    },
    watch: {
      code(val) {
        this.$emit('input', val);
      }
    },
    methods: {
      ...mapActions(['ajax']),
      isDefined(val) {
        return this[val] !== undefined;
      },
      sendAuthCode() {
        // this.ajax({
        //   name: 'authCode',
        //   method: 'get',
        //   data: {
        //     action: 'register',
        //     phone: '18702913241'
        //   }
        // }).then(res => {
        this.sending = true;
        this.text = 59;
        let i = 0;
        let t = setInterval(() => {
          i++;
          this.text = 59 - i;
          if(i == 59) {
            this.text = '重新获取';
            this.sending = false;
            clearInterval(t);
          }
        }, 1000);
        // });
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
    .btn {
      flex-shrink: 0;
      color: #fff;
      font-size: 24px;
      border-radius: 27px;
      width: 180px;
      height: 54px;
      line-height: 54px;
      background-color: #ccc;
      border: 0;
      &.active {
        background-color: #e1c8af;
      }
    }
  }
</style>


