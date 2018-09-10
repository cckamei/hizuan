<template>
  <div class="freebuy">
    <div class="appointment" @click="$router.push({'name':'bespeak'})">
      <img src="~assets/payment/card1.png" alt="" srcset="">
    </div>
    <div class="instalments">
      <img src="~assets/payment/card2.png" alt="" srcset="">
    </div>
    <div class="buttons flex">
      <div class="btn" @click="$router.push({name:'index'})"><img src="~assets/home/button_home_b.png" alt=""></div>
      <button class="btn-txt btn-txt1" @click="goGoodsList()">全部作品</button>
      <button class="btn-txt btn-txt2">无忧购</button>
      <div class="btn" @click="gomypage">
        <img src="~assets/home/button_my.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['token'])
    },
    methods: {
      ...mapMutations(["setCommon"]),
      goGoodsList(goodsType = "") {
        this.setCommon({ goodsType });
        this.$router.push({ name: "goodslist" });
      },
      gomypage() {
        if(!this.token) {
          return false;
        } else {
          this.$router.push({ name: 'mypage' });
        }
      }
    }
  };
</script>


<style lang="less" scoped>
  .freebuy {
      .appointment {
          margin: 20px;
      }
      .instalments {
          margin: 0 20px 20px 20px;
      }
      .instalments,
      .appointment {
          img {
              width: 100%;
              height: 100%;
          }
      }
      .buttons {
          position: absolute;
          width: 100%;
          bottom: 0;
          justify-content: center;
          padding: 24px 0;
          .btn {
              width: 60px;
              border-radius: 50%;
              background-color: #000;
          }
          .btn-txt {
              width: 160px;
              height: 60px;
              border-radius: 30px;
              background-color: rgba(255, 255, 255, 0.6);
              border: 0;
              &1 {
                  margin: 0 24px 0 91px;
              }
              &2 {
                  margin: 0 91px 0 24px;
                  background-color: #484848;
                  color: #fff;
              }
          }
      }
  }
</style>
