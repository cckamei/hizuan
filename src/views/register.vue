<template>
  <div class="pt">
    <v-header back>注册账户</v-header>
    <div class="content">
      <ul class="form">
        <li>
          <v-input-text placeholder="请输入手机号码" v-model="phone" clear maxlength="16" class="input"></v-input-text>
        </li>
        <li>
          <v-input-code placeholder="请输入验证码" v-model="code" :phone="phone" maxlength="16" class="input"></v-input-code>
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
        <button class="btn" :class="{active: isActive}" @click="isActive && next()">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        phone: '',
        code: '',
        password: '',
        confirmPws: '',
        checked: false
      };
    },
    computed: {
      isActive() {
        return this.phone.length && this.code.length && this.password.length && this.confirmPws.length && this.checked;
      }
    },
    methods: {
      ...mapActions(['ajax']),
      next() {
        if(!this.phone.length) {
          this.toast('手机号码不能为空');
          return false;
        }

        if(this.phone.length !== 11) {
          this.toast('手机号格式不正确');
          return false;
        }

        if(!this.phone.length) {
          this.toast('验证码不能为空');
          return false;
        }

        if(!this.password.length) {
          this.toast('密码不能为空');
          return false;
        }

        if(!this.confirmPws.length) {
          this.toast('确认密码不能为空');
          return false;
        }

        if(this.password !== this.confirmPws) {
          this.toast('两次密码不一致');
          return false;
        }

        this.ajax({
          name: 'register',
          data: {
            phone: this.phone,
            vcode: this.code,
            password: this.password
          }
        }).then(res => {
          this.$router.push({ name: 'perfectinfo' });
        });
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
    padding: 36px 40px;
  }
</style>
