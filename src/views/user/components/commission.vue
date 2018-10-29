<template>
  <div class="commission">
    <div class="panel-header" @click="$router.push({ name: 'commissions' })">
      <span>我的提成</span>
      <div class="more">
        <span>查看全部记录</span>
        <img src="~assets/mypage/icon_arrow_r_s.png" alt="">
      </div>
    </div>
    <div class="panel-content">

      <div class="detail mt-10" v-if="commission.buyer">
        <span>最近提成：￥ {{commission.money}}</span>
      </div>
      <div class="detail mt-10" v-else>
        <span>最近提成：暂无提成记录</span>
      </div>
      <div class="detail" v-if="commission.buyer">
        <span>购买人：{{commission.buyer}}</span>
      </div>
      <div class="detail" v-if="commission.buyer">
        <span>提成时间：{{formatDate(commission.created_at)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { formatDate } from '@/utils';
  export default {
    data() {
      return {
        commission: {
          money: 1000,
          user: 'VIP高级用户',
          time: '2018-09-30 16：30'
        }
      };
    },
    created() {
      this.ajax({
        name: 'lastTicheng'
      }).then(res => {
        this.commission = res;
      });
    },
    methods: {
      formatDate,
      ...mapActions(['ajax'])
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
