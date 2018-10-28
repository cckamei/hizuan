<template>
  <div class="myorder">
    <div class="panel-header" @click="$router.push({ name: 'orderlist', params: { type:-1 } })">
      <span>我的订单</span>
      <div class="more">
        <span>查看全部订单</span>
        <img src="~assets/mypage/icon_arrow_r_s.png" alt="">
      </div>
    </div>
    <div class="ordertype">
      <div class="orderitem" @click="goOrders(0)">
        <img src="~assets/mypage/icon_order_1.png" alt="">
        <span>待付款</span>
      </div>
      <div class="orderitem" @click="goOrders(1)">
        <img src="~assets/mypage/icon_order_2.png" alt="">
        <span>待发货</span>
      </div>
      <div class="orderitem" @click="goOrders(2)">
        <img src="~assets/mypage/icon_order_3.png" alt="">
        <span>待收货</span>
      </div>
      <div class="orderitem" @click="goOrders(3)">
        <img src="~assets/mypage/icon_order_4.png" alt="">
        <span>已完成</span>
      </div>
      <div class="orderitem" @click="$router.push({ name: 'cancelList' })">
        <img src="~assets/mypage/icon_order_5.png" alt="">
        <span>退款/取消</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from "vuex";

  export default {
    methods: {
      ...mapMutations(['setOrderType']),
      goOrders(type) {
        this.setOrderType(type);
        this.$router.push({ name: 'orderlist' });
      }
    }
  };
</script>

<style lang="less" scoped>
  .myorder {
    background: #ffffff;
    width: 710px;
    margin: 20px auto 0;
    border-radius: 10px;
    .ordertype {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      .orderitem {
        text-align: center;
        img {
          display: block;
          width: 88px;
          height: 88px;
          margin: 30px auto 20px;
        }
        span {
          display: block;
          width: 100%;
          margin-bottom: 30px;
          color: #999999;
          font-size: 20px;
        }
      }
    }
  }
</style>
