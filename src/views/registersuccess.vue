<template>
  <div class="pt">
    <v-header>注册成功</v-header>
    <div class="content">
      <div class="info">
        <img src="~assets/home/button_a.png" alt="">
        <p>将在 {{time}} 秒后自动回到首页</p>
      </div>
      <div class="btns">
        <button class="btn" @click="go">回到首页</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        time: 3000
      };
    },
    mounted() {
      let t = setInterval(() => {
        this.time--;
        if(!this.time) {
          clearInterval(t);
          this.go();
        }
      }, 1000);
    },
    methods: {
      ...mapActions(['ajax']),
      go() {
        this.$router.push({ name: 'index' });
      }
    }
  };
</script>

<style lang="less" scoped>
  .info {
    text-align: center;
    padding: 60px 0 40px 0;
    img {
      width: 100px;
      height: 100px;
      margin: 20px 0;
    }
  }

  .btns {
    .btn {
      border: 1px solid #ffb4b4; /*no*/
      background-color: #fff;
      color: #ffb4b4;
    }
  }
</style>
