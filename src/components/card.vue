<template>
  <div class="card flex">
    <div class="col1 flex-auto">
      <div class="price"><span>￥</span>{{card.discount_money | currency}}</div>
      <div class="limit">购物满{{card.all_money}}元使用{{card.use}}</div>
      <div class="expired">有效期至 {{formatDate(card.starttime, 'yyyy-MM-dd')}} 至 {{formatDate(card.endtime, 'yyyy-MM-dd')}}</div>
    </div>
    <div v-if="card.use" class="col2">{{useText}}</div>
    <div v-else class="col2" @click="card.use = true">{{unuseText}}</div>
  </div>
</template>

<script>
  import { formatDate } from '../utils';

  export default {
    props: {
      card: {
        required: true,
        type: Object
      },
      useText: {
        default: '已领取',
        type: String
      },
      unuseText: {
        default: '立即领取',
        type: String
      }
    },
    methods: {
      formatDate
    }
  };
</script>

<style lang="less" scoped>
  .card {
    background-color: #fff8f5;
    padding: 30px;
    background: url('~assets/goods/coupon.png') no-repeat;
    background-size: 100% 100%;
    color: #cdb49b;
    margin-bottom: 30px;
    .col1 {
      .price {
        font-size: 60px;
        span {
          font-size: 36px;
        }
      }
      .limit,
      .expired {
        font-size: 20px;
      }
    }
    .col2 {
      width: 170px;
      flex-shrink: 0;
      text-align: center;
    }
  }
</style>


