<template>
  <div class="pt">
    <v-header>订单支付成功</v-header>
    <div class="content">
      <div class="section">
        <div class="success-info flex">
          <img src="~assets/payment/icon_pay_suc.png" alt="">
          <div class="pay-info">
            <p>支付方式：<span>微信支付</span></p>
            <p>支付金额：<span>33565.80元</span></p>
          </div>
        </div>
        <div class="btns">
          <button class="btn">查看订单</button>
          <button class="btn" @click="$router.push({name: 'index'})">回到首页</button>
        </div>
      </div>
      <v-recommend title="继续购买" :list="recommend"></v-recommend>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import ss from '../assets/goods/pic_guguring.png';

  export default {
    data() {
      return {
        recommend: [{
          url: ss,
          name: '文承 戒指',
          price: '6666',
          like: false
        }, {
          url: ss,
          name: '文承 戒指',
          price: '6666',
          like: false
        }, {
          url: ss,
          name: '文承 戒指',
          price: '6666',
          like: false
        }, {
          url: ss,
          name: '文承 戒指',
          price: '6666',
          like: false
        }]
      };
    },
    methods: {
      ...mapActions(['ajax'])
    }
  };
</script>

<style lang="less" scoped>
  .section {
    background-color: #fff;
    margin-bottom: 20px;
  }

  .success-info {
    justify-content: center;
    padding: 90px 0 70px 0;
    img {
      width: 180px;
      height: 180px;
    }
    .pay-info {
      padding-top: 20px;
      p {
        padding-top: 20px;
        color: #666;
        font-size: 24px;
        span {
          color: #cdb49b;
        }
      }
    }
  }

  .btns {
    text-align: center;
    padding-bottom: 40px;
    .btn {
      font-size: 24px;
      height: 68px;
      width: 540px;
      border: 1px solid #faa0a0; /*no*/
      background-color: #fff;
      color: #faa0a0;
      margin-bottom: 20px;
    }
  }
</style>
