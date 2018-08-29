<template>
  <div class="">
    <div class="content">
      <div class="logo">
        <img src="~assets/home/logo.png" alt="">
      </div>
      <ul class="form">
        <li>
          <v-input-text placeholder="请输入手机号码" v-model="phone" clear maxlength="16" class="input"></v-input-text>
        </li>
        <li>
          <v-input-pwd placeholder="请输入账户密码" v-model="password" eye maxlength="16" class="input"></v-input-pwd>
        </li>
      </ul>
      <div class="btns">
        <button class="btn login" :class="{active: isActive}" @click="isActive && login()">登录</button>
        <router-link tag="button" class="btn wechat" :to="{name: 'verifyphone'}">使用微信账户登录</router-link>
      </div>
      <div class="links clearfix">
        <span v-if="0">忘记密码</span>
        <router-link tag="span" :to="{name: 'register'}" class="right">注册账户</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        phone: '',
        password: ''
      };
    },
    computed: {
      isActive() {
        return this.phone.length && this.password.length;
      }
    },
    methods: {
      ...mapActions(['ajax']),
      ...mapMutations(['setCommon']),
      login() {
        this.ajax({
          name: 'login',
          data: {
            phone: this.phone,
            password: this.password
          },
          error: true
        }).then(res => {
          this.setCommon({ token: res.token, userId: res.user_id });
          this.$router.push('home');
        }).catch(res => {
          this.toast('用户名或密码错误');
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .content {
    background-color: #fff;
  }

  .logo {
    padding: 100px 0 90px 0;
    img {
      width: 360px;
      height: 170px;
      display: block;
      margin: 0 auto;
    }
  }

  .form {
    padding: 0 30px;
    li {
      border-bottom: 1px solid #ccc; /*no*/
      height: 100px;
      padding: 0 10px;
      .input {
        height: 100%;
      }
    }
  }

  .btns {
    padding: 30px 40px;
    .btn {
      font-size: 36px;
      margin-top: 30px;
      &.login.active {
        background: ~"url('~assets/home/button_login.png') no-repeat center center/100%";
      }
      &.wechat {
        background: ~"url('~assets/home/button_login_w.png') no-repeat center center/100%";
      }
    }
  }

  .links {
    color: #cdb49b;
    font-size: 28px;
    padding: 0 40px;
  }
</style>
