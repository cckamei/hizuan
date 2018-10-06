<template>
  <div class="mypage">
    <div class="mymessage">
      <!-- <img src="~assets/home/button_my.png" alt="" v-if="userInfo.avatar"> -->
      <img :src="userInfo.avatar" alt="">
      <div class="usermessage">
        <h2>{{userInfo.nick_name}}</h2>
        <span>积分：1200</span>
      </div>
      <img class="userset" src="~assets/mypage/set-icon.png" alt="" @click="goMySet()">
    </div>
    <div class="myitem">
      <div class="item" @click="goMystore()">
        <img src="~assets/mypage/mylike_icon.png" alt="">
        <span>我的收藏</span>
      </div>
      <div class="item">
        <img src="~assets/mypage/reserve_icon.png" alt="">
        <span>我的预约</span>
      </div>
      <div class="item" @click="setMyAddress()">
        <img src="~assets/mypage/address_icon.png" alt="">
        <span>地址管理</span>
      </div>
    </div>
    <div class="myorder">
      <div class="ordertitle">
        <span>我的订单</span>
        <div class="titleright" @click="goOrderList(1)">
          <span>查看全部订单</span>
          <img src="~assets/mypage/icon_arrow_r_s.png" alt="">
        </div>
      </div>
      <div class="ordertype">
        <div class="orderitem" @click="goOrderList(2)">
          <img src="~assets/mypage/icon_order_1.png" alt="">
          <span>待付款</span>
        </div>
        <div class="orderitem" @click="goOrderList(3)">
          <img src="~assets/mypage/icon_order_2.png" alt="">
          <span>待发货</span>
        </div>
        <div class="orderitem" @click="goOrderList(4)">
          <img src="~assets/mypage/icon_order_3.png" alt="">
          <span>待收货</span>
        </div>
        <div class="orderitem" @click="goOrderList(5)">
          <img src="~assets/mypage/icon_order_4.png" alt="">
          <span>已完成</span>
        </div>
        <div class="orderitem" @click="goCancelist()">
          <img src="~assets/mypage/icon_order_5.png" alt="">
          <span>退款/取消</span>
        </div>
      </div>
    </div>
    <div class="buttons flex">
      <div class="btn" @click="$router.push({name:'index'})"><img src="~assets/home/button_home.png" alt=""></div>
      <button class="btn-txt btn-txt1" @click="goGoodsList()">全部作品</button>
      <button class="btn-txt btn-txt2">无忧购</button>
      <div class="btn" @click="goMypage()"><img src="~assets/mypage/button_my_b.png" alt=""></div>
    </div>
  </div>
</template>
<script>
  import { mapMutations, mapActions } from 'vuex';
  export default {
    data() {
      return {
        userInfo: {}
      };
    },
    created() {
      this.pageInit();
    },
    methods: {
      ...mapActions(['ajax']),
      ...mapMutations(["setUserInfo", "setCommon"]),
      pageInit() {
        this.ajax({
          name: 'getUserInfo'
        }).then(res => {
          let userInfo = res;
          this.userInfo = res;
          this.setUserInfo(userInfo);
        });
      },
      goGoodsList(goodsType = "") {
        this.setCommon({ goodsType });
        this.$router.push({ name: "goodslist" });
      },
      goMypage() {
        this.$router.push({ name: "mypage" });
      },
      goOrderList(type) {
        this.$router.push({ name: 'orderlist', params: { type } });
      },
      goMystore() {
        this.$router.push({ name: 'mystore' });
      },
      setMyAddress() {
        this.$router.push({ name: 'myaddress' });
      },
      goMySet() {
        this.$router.push({ name: 'myset' });
      },
      goCancelist() {
        this.$router.push({ name: 'cancelList' });
      }
    }
  };
</script>
<style lang="less" scoped>
  .mypage {
      background: #f0f0f0;
      .mymessage {
          width: 100%;
          height: 280px;
          position: relative;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          background: url('~assets/mypage/bg-img.png') no-repeat;
          background-size: 100% 100%;
          img {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              margin: 80px 30px 80px 40px;
          }
          .usermessage {
              color: #ffffff;
              h2 {
                  font-size: 30px;
                  margin: 60px 0 10px 0;
              }
              span {
                  font-size: 20pxm;
              }
          }
          .userset {
              position: absolute;
              top: 40px;
              right: 50px;
              width: 70px;
              height: 70px;
          }
      }
      .myitem {
          position: relative;
          z-index: 2;
          width: 710px;
          padding: 40px 0 36px;
          margin: -50px auto 0;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          background: #ffffff;
          border-radius: 10px;
          .item {
              text-align: center;
              img {
                  width: 88px;
                  height: 88px;
                  display: block;
                  margin-bottom: 20px;
              }
              span {
                  color: #999999;
                  font-size: 24px;
              }
          }
      }
      .myorder {
          background: #ffffff;
          width: 710px;
          margin: 20px auto 0;
          border-radius: 10px;
          .ordertitle {
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              height: 84px;
              line-height: 84px;
              font-size: 24px;
              padding: 0 20px;
              border-bottom: 2px solid #f0f0f0;
              span {
                  color: #666666;
              }
              .titleright {
                  img {
                      display: inline;
                      width: 18px;
                      height: 18px;
                      margin-left: 16px;
                  }
                  span {
                      color: #999999;
                  }
              }
          }
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
              }
          }
      }
  }
</style>
