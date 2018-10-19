<template>
  <div class="myset">
    <v-header>设置</v-header>
    <ul>
      <li @click="goMyData()">个人资料</li>
      <li @click="goRevisePwd()" v-if="getUserInfo.phone_login == 1">修改密码</li>
      <li @click="goback()">退出</li>
    </ul>
  </div>
</template>
<script>
  import { mapMutations, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['getUserInfo'])
    },
    methods: {
      ...mapMutations(['logout']),
      goMyData() {
        this.$router.push({ name: 'editinfo' });
      },
      goRevisePwd() {
        this.$router.push({ name: 'revisepwd' });
      },
      goback() {
        this.logout();
        this.$router.push({ name: 'index' });
      }
    }
  };
</script>
<style lang="less" scoped>
  .myset {
    ul {
      margin-top: 96px;
      background: #ffffff;
      padding: 0 24px;
      li {
        width: '100%';
        height: 96px;
        line-height: 96px;
        color: #666666;
        font-size: 30px;
        border-bottom: 2px solid #f0f0f0;
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
</style>

