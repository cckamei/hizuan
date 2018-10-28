<template>
  <div class="order pt">
    <v-header @back="back">订单列表</v-header>
    <div class="content">
      <tabs :type="getOrderType" @search-orders="searchOrders"></tabs>
      <order-list :orders="orders" @reload-orders="reloadOrders"></order-list>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
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
    computed: {
      ...mapGetters(['getOrderType'])
    },
    created() {

      this.getOrders();
    },
    methods: {
      ...mapActions(['ajax']),
      searchOrders() {
        this.getOrders();
      },
      reloadOrders() {
        this.getOrders();
      },
      getOrders() {
        this.ajax({
          name: 'getOrders'
        }).then(res => {
          this.orders = res;
          if(this.getOrderType != -1) {
            this.orders = this.orders.filter(order => {
              return order.status == this.getOrderType;
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
      },
      back() {
        this.$router.push({ name: 'mypage' });
      }
    }
  };
</script>
