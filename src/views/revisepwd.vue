<template>

  <div class="revisepwd">
    <v-header>修改密码</v-header>
    <ul>
      <li>
        <input type="password" v-model="reqData.oldPwd" placeholder="请输入当前密码" />
      </li>
      <li>
        <input type="password" v-model="reqData.newPwd" placeholder="请输入新密码" />
      </li>
      <li>
        <input type="password" v-model="reqData.repeatPwd" placeholder="请再次输入新密码" />
      </li>
    </ul>
    <div class="btns">
      <button class="btn" :class="{active: isActive}" @click="isActive && confirm()">确认提交</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        reqData: {
          oldPwd: '',
          newPwd: '',
          repeatPwd: ''
        }
      };
    },
    methods: {
      ...mapActions(['ajax']),
      confirm() {
        if(this.newPwd != this.repeatPwd) {
          this.toast('两次输入密码不一致');
          return false;
        }

        this.ajax({
          name: 'resetPwd',
          data: {
            old_password: this.oldPwd,
            new_password: this.newPwd
          }
        }).then(() => {
          this.toast('修改成功！');
        });
      }
    },
    computed: {
      isActive() {
        return this.reqData.oldPwd.length && this.reqData.newPwd.length && this.reqData.repeatPwd.length;
      }
    }
  };
</script>
<style lang="less" scoped>
  .revisepwd {
    ul {
      background: #ffffff;
      margin-top: 96px;
      margin-bottom: 30px;
      padding: 0 24px;
    }
    li {
      border-bottom: 2px solid #f0f0f0;
      height: 96px;
      line-height: 96px;
      input {
        width: 100%;
        height: 100%;
        font-size: 30px;
        color: #666666;
      }
    }
    li:last-child {
      border-bottom: none;
    }
  }
</style>

