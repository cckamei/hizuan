<template>
  <div class="order pt">
    <v-header>订单列表</v-header>
    <div class="content">
      <tabs :type="type" @search-orders="searchOrders"></tabs>
      <order-list :orders="orders"></order-list>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import tabs from './components/tabs';
  import orderList from './components/orders';
  export default {
    components: {
      tabs,
      orderList
    },
    data() {
      return {
        type: -1,
        orders: []
      };
    },
    created() {
      this.type = this.$route.params.type || -1;
      this.getOrders();
    },
    methods: {
      ...mapActions(['ajax']),
      searchOrders(type) {
        this.type = type;
        this.getOrders();
      },
      getOrders() {
        this.ajax({
          name: 'getOrders'
        }).then(res => {
          this.orders = res;
          if(this.type != -1) {
            this.orders = this.orders.filter(order => {
              return order.status == this.type;
            });
          }
          this.orders.forEach(order => {
            order.goods.forEach(item => {
              if(item.is_diamond) {
                item.skuLabel = `${item.zhuzuanfenshu};${item.zuanshijingdu};${item.guige};${item.guige}`;
              } else {
                item.skuLabel = `${item.zhushimingcheng};${item.zhushipingji};${item.guige};${item.guige}`;
              }
            });
          });
        });
      }
    }
  };
</script>
