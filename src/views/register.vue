<template>
  <div class="pt">
    <v-header back>注册账户</v-header>
    <div class="content">
      <ul class="form">
        <li>
          <v-input-text placeholder="请输入手机号码" v-model="account" clear maxlength="16" class="input"></v-input-text>
        </li>
        <li>
          <v-input-code placeholder="请输入验证码" v-model="code" eye maxlength="16" class="input"></v-input-code>
        </li>
        <li>
          <v-input-pwd placeholder="请输入账户密码" v-model="password" eye maxlength="16" class="input"></v-input-pwd>
        </li>
        <li>
          <v-input-pwd placeholder="请再次输入账户密码" v-model="confirmPws" eye maxlength="16" class="input"></v-input-pwd>
        </li>
      </ul>
      <v-agreement v-model="checked"></v-agreement>
      <div class="btns">
        <button class="btn next" :class="{active: isActive}" @click="isActive && next()">下一步</button>
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
        this.$router.push({ name: 'perfectinfo' });
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
