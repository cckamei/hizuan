<template>
  <div class="buttons flex">
    <div class="btn" @click="$router.push({name:'index'})"><img src="@/assets/home/button_home_b.png" alt=""></div>
    <button class="btn-txt btn-txt1" @click="goGoodsList()">全部作品</button>
    <button v-if="0" class="btn-txt btn-txt2" @click="$router.push({name:'freebuy'})">无忧购</button>
    <div class="btn" @click="$router.push({name:'mypage'})">
      <img :src="getUserInfo.avatar" alt="">
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['getUserInfo'])
    },
    methods: {
      ...mapMutations(["setCommon"]),
      goGoodsList(goodsType = "") {
        this.setCommon({ goodsType });
        this.$router.push({ name: "goodslist" });
      }
    }
  };
</script>

<style lang="less" scoped>
  .mypage {
    .buttons {
      position: fixed;
      width: 100%;
      bottom: 0;
      justify-content: center;
      padding: 24px 0;
      .btn {
        width: 60px;
        border-radius: 50%;
        overflow: hidden;
      }
      .btn-txt {
        width: 280px;
        height: 60px;
        border-radius: 30px;
        background-color: rgba(255, 255, 255, 0.6);
        border: 0;
        &1 {
          margin: 0 91px 0 91px;
        }
        &2 {
          margin: 0 91px 0 24px;
        }
      }
    }
  }
</style>
