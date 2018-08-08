<template>
  <div class="pt">
    <v-header back>填写资料</v-header>
    <div class="content">
      <ul class="form">
        <li>
          <v-input-text placeholder="请输入手机号码" v-model="account" clear maxlength="16" class="input"></v-input-text>
        </li>
        <li>
          <v-input-code placeholder="请输入验证码" v-model="code" eye maxlength="16" class="input"></v-input-code>
        </li>
      </ul>
      <div class="agreement flex">
        <div class="checkbox" :class="{active: checked}" @click="checked = !checked"></div>
        <span class="label">我已阅读并同意</span><span class="protocol">《注册协议》</span>
      </div>
      <div class="btns">
        <button class="btn next" :class="{active: isActive}" @click="next">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        account: '',
        code: '',
        password: '',
        confirmPws: '',
        checked: false
      };
    },
    computed: {
      isActive() {
        return this.account.length && this.code.length && this.password.length && this.confirmPws.length && this.checked;
      }
    },
    methods: {
      ...mapActions(['ajax']),
      next() {
        console.log('next');
      }
    }
  };
</script>

<style lang="less" scoped>
  .form {
    padding: 0 20px;
    background-color: #fff;
    li {
      border-bottom: 1px solid #f0f0f0; /*no*/
      padding: 0 20px;
      height: 96px;
      .input {
        height: 100%;
      }
    }
  }

  .agreement {
    font-size: 24px;
    padding: 36px 40px;
    .checkbox {
      width: 35px;
      height: 35px;
      background: url('~assets/home/button_a_g.png') no-repeat;
      background-size: 100% 100%;
      margin-right: 20px;
      &.active {
        background: url('~assets/home/button_a.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .label {
      color: #666;
    }
    .protocol {
      color: #faa0a0;
      font-weight: bold;
    }
  }

  .btns {
    padding: 0 40px;
    .btn {
      width: 100%;
      height: 90px;
      border: none;
      font-size: 36px;
      color: #fff;
      &.next {
        background-color: #ccc;
        border-radius: 45px;
        &.active {
          background-color: #ffb494;
        }
      }
    }
  }
</style>
