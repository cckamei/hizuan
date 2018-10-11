<template>
  <div class="order-list">
    <div class="item" v-for="(order,i) in orders">
      <div class="item-title" @click="goDetail(order.order_id)">
        <div class="titleleft">
          <img src="~assets/mypage/icon_shop.png" alt="">
          <span>CC卡美珠宝</span>
        </div>
        <div class="listright">{{typename(order.status)}}</div>
      </div>
      <div class="item-content" v-for="(good,j) in order.goods" @click="goDetail(order.order_id)">
        <div class="contentleft">
          <img :src="good.goods_img" alt="">
        </div>
        <div class="contentright">
          <div class="contenttitle">
            <span>{{good.goods_name}}</span>
            <span>￥{{good.goods_price}}</span>
          </div>
          <div class="contentmessage">
            <p>{{good.server}}</p>
            <div class="messageright">
              <s>￥{{good.subtotal}}</s>
              <span>X{{good.goods_count}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item-price">
        共{{order.goods.length}}件商品 实付款： <span>￥{{order.rest_money}}</span> （含运费￥{{order.logistics_money}}）
      </div>
      <div class="item-footer">
        <!-- 待收货 2-->
        <div class="ordertypeDF" v-if="order.status==2">
          <!-- <button class="btngrey btnleft">查看物流</button>
          <button class="btnpink" @click="$router.push({ name: 'pay' })">确认收货</button> -->
          <button class="btngrey btnleft">查看物流</button>
          <button class="btngrey" @click="goDetail(order.order_id)">确认收货</button>
        </div>
        <!-- 已完成 3-->
        <div class="ordertypeDF" v-if="order.status==3">
          <button class="btngrey btnleft" @click="goCustomService">联系客服</button>
          <button class="btngrey" @click="tradeIn">以旧换新</button>
        </div>
        <!-- 待付款 0-->
        <div class="ordertypeDF" v-if="order.status==0">
          <button class="btngrey btnleft" @click="goCustomService">联系客服</button>
          <button class="btnpink" @click="$router.push({ name: 'pay' })">立即付款</button>
        </div>
        <!-- 已取消 8-->
        <div class="ordertypeDF" v-if="order.status==8">
          <button class="btngrey btnleft" @click="goCustomService">联系客服</button>
          <button class="btngrey" @click="goGoodsDetail">再次购买</button>
        </div>
        <!-- 退款中 4-->
        <div class="ordertypeDS" v-if="order.status==4">
          <button class="btngrey btnleft" @click="goCustomService">联系客服</button>
          <button class="btngrey" @click="goDetail(order.order_id)">查看详情</button>
        </div>
        <!-- 待发货 1-->
        <div class="ordertypeWC" v-if="order.status==1">
          <button class="btngrey btnleft" @click="goCustomService">联系客服</button>
          <button class="btngrey" @click="goDetail(order.order_id)">查看详情</button>
        </div>
        <!-- 已退款 6-->
        <div class="ordertypeWC" v-if="order.status==6">
          <button class="btngrey btnleft" @click="goCustomService">联系客服</button>
          <button class="btngrey" @click="goDetail(order.order_id)">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    props: ['orders'],
    created() {
    },
    computed: {

    },
    methods: {
      ...mapMutations(['setCommon', 'setAppointment']),
      goDetail(orderId) {
        this.setCommon({ orderId: orderId });
        this.$router.push({ name: 'orderdetail' });
      },
      goRefunddetail() {
        this.$router.push({ name: 'refunddetail' });
      },
      tradeIn() {
        this.setAppointment({
          appointment: {
          },
          edit: 1,
          type: 1
        });
        this.$router.push({ name: 'addappointment' });
      },
      goGoodsDetail() {
        this.$router.push({ name: 'goodslist' });
      },
      typename(type) {
        let _typenames = ['待付款', '待发货', '待收货', '已完成', '退款中', '', '已退款', '', '已取消'];
        return _typenames[type];
      },
      goCustomService() {
        window.wx.closeWindow();
      }
    }
  };
</script>

<style lang="less" scoped>
  .order-list {
      margin-top: 112px;
      .item {
          background: #ffffff;
          margin-bottom: 16px;
          &-title {
              padding: 0 30px;
              height: 64px;
              line-height: 64px;
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              .titleleft {
                  img {
                      display: inline-block;
                      width: 24px;
                      height: 24px;
                      margin-right: 12px;
                  }
              }
              .listright {
                  font-size: 24px;
                  color: #cdb498;
              }
          }
          &-content {
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              padding: 0 30px;
              background: #f5f5f5;
              margin-bottom: 8px;
              .contentleft {
                  width: 120px;
                  height: 120px;
                  margin: 20px 20px 20px 0;
                  background: #ffffff;
                  img {
                      display: block;
                      width: 100%;
                      height: auto;
                  }
              }
              .contentright {
                  flex: 1;
                  .contenttitle {
                      display: flex;
                      flex-flow: row nowrap;
                      justify-content: space-between;
                      margin: 30px 0 20px;
                      color: #666666;
                      font-size: 24px;
                      span:nth-child-of(2) {
                          text-align: right;
                      }
                  }
                  .contentmessage {
                      flex: 1;
                      display: flex;
                      flex-flow: row nowrap;
                      justify-content: space-between;
                      font-size: 24px;
                      margin-bottom: 30px;
                      color: #999999;
                      p {
                          width: 360px;
                      }
                      .messageright {
                          text-align: right;
                      }
                      s {
                          color: #cccccc;
                          display: block;
                      }
                  }
              }
          }
          &-price {
              height: 64px;
              line-height: 64px;
              text-align: right;
              padding: 0 30px;
              font-size: 20px;
              color: #666666;
              border-bottom: 2px solid #cccccc;
              span {
                  font-size: 24px;
              }
          }
          &-footer {
              height: 80px;
              text-align: right;
              padding: 0 30px;
              button {
                  width: 140px;
                  height: 52px;
                  border-radius: 26px;
                  font-size: 20px;
                  margin-top: 14px;
              }
              .btnleft {
                  margin-right: 30px;
              }
              .btngrey {
                  background: #ffffff;
                  border: 2px solid #cccccc;
                  color: #666666;
              }
              .btnpink {
                  background: #ffb4b4;
                  border: 2px solid #ffb4b4;
                  color: #ffffff;
              }
          }
      }
  }
</style>
