<template>
  <div class="commission">
    <div class="panel-header">
      <span>我的提成</span>
      <div class="more" @click="$router.push({ name: 'commissions' })">
        <span>查看全部记录</span>
        <img src="~assets/mypage/icon_arrow_r_s.png" alt="">
      </div>
    </div>
    <div class="panel-content">

      <div class="detail mt-10" v-if="commission.money">
        <span>最近提成：￥ {{commission.money}}</span>
      </div>
      <div class="detail mt-10" v-else>
        <span>最近提成：暂无提成记录</span>
      </div>
      <div class="detail" v-if="commission.money">
        <span>购买人：{{commission.user}}</span>
      </div>
      <div class="detail" v-if="commission.money">
        <span>提成时间：{{commission.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        commission: {
          money: 0,
          user: 'VIP高级用户',
          time: '2018-09-30 16：30'
        }
      };
    }
  };
</script>


<style lang="less" scoped>
  .commission {
      background: #fff;
      width: 710px;
      margin: 20px auto 0;
      border-radius: 10px;
      .panel-content {
          padding: 20px 20px;
      }
      .detail {
          padding: 8px 0px;
          font-size: 24px;
          color: #999;
          line-height: 30px;
          line-height: 30px;
      }
  }
  .mt-10 {
      margin-top: 10px;
  }
</style>
