<template>
  <div class="order-list">
    <div class="item" v-for="(order,i) in orders">
      <div class="item-title" @click="goDetail()">
        <div class="titleleft">
          <img src="~assets/mypage/icon_shop.png" alt="">
          <span>{{order.shopName}}</span>
        </div>
        <div class="listright">{{typename(order.type)}}</div>
      </div>
      <div class="item-content" v-for="(good,j) in order.goods" @click="goDetail()">
        <div class="contentleft">
          <img src="~/assets/goods/pic_wring1.png" alt="">
        </div>
        <div class="contentright">
          <div class="contenttitle">
            <span>{{good.category}} - {{good.goodname}}</span>
            <span>￥{{good.price}}</span>
          </div>
          <div class="contentmessage">
            <p>{{good.server}}</p>
            <div class="messageright">
              <s>￥{{good.oprice}}</s>
              <span>X{{good.num}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item-price">
        共1件商品 实付款： <span>￥{{order.price}}</span> （含运费￥{{order.freight}}）
      </div>
      <div class="item-footer">
        <!-- 默认 -->
        <div class="ordertypeDF" v-if="order.type==0">
          <button class="btngrey btnleft">联系客服</button>
          <button class="btngrey" @click="goRefunddetail()">查看退款</button>
        </div>
        <!-- 默认 -->
        <div class="ordertypeDF" v-if="order.type==1">
          <button class="btngrey btnleft">联系客服</button>
          <button class="btngrey" @click="goRefunddetail()">查看退款</button>
        </div>
        <!-- 待付款 -->
        <div class="ordertypeDF" v-if="order.type==2">
          <button class="btngrey btnleft">联系客服</button>
          <button class="btnpink" @click="$router.push({ name: 'pay' })">立即付款</button>
        </div>
        <!-- 待收货 -->
        <div class="ordertypeDF" v-if="order.type==3">
          <button class="btngrey">联系客服</button>
        </div>
        <!-- 待收货 -->
        <div class="ordertypeDS" v-if="order.type==4">
          <button class="btngrey btnleft">查看物流</button>
          <button class="btnpink" @click="$router.push({ name: 'orderdetail' })">确认收货</button>
        </div>
        <!-- 已完成 -->
        <div class="ordertypeWC" v-if="order.type==5">
          <button class="btngrey btnleft">联系客服</button>
          <button class="btngrey" @click="$router.push({ name: 'orderdetail' })">以旧换新</button>
        </div>
        <!-- 已取消 -->
        <div class="ordertypeQX" v-if="order.type==6">
          <button class="btngrey btnleft">联系客服</button>
          <button class="btngrey" @click="$router.push({ name: 'orderdetail' })">再次购买</button>
        </div>
        <!-- 退款中 -->
        <div class="ordertypeTK" v-if="order.type==7">
          <button class="btngrey btnleft">联系客服</button>
          <button class="btngrey" @click="goRefunddetail()">查看退款</button>
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
      console.log(this.orders);
    },
    computed: {

    },
    methods: {
      ...mapMutations(['setCommon']),
      goDetail() {
        // this.setCommon({ goodsId: '5b851a4d1f30bfc39cddfc37' });
        this.$router.push({ name: 'orderdetail' });
      },
      goRefunddetail() {
        this.$router.push({ name: 'refunddetail' });
      },
      typename(type) {
        let _typenames = ['已退款', '退款中', '待付款', '待发货', '待收货', '已完成', '已取消'];
        return _typenames[type];
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
