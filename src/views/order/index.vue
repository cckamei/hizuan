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
  import tabs from './components/tabs';
  import orderList from './components/orders';
  export default {
    components: {
      tabs,
      orderList
    },
    data() {
      return {
        type: 1,
        orders: []
      };
    },
    created() {
      this.type = this.$route.params.type || 1;
      this.getOrders();
    },
    methods: {
      searchOrders(type) {
        this.type = type;
        this.getOrders();
        console.log(this.orders.length);
      },
      getOrders() {
        this.orders = [];
        let _order = {
          category: '卡美婚嫁系列',
          goodname: '婚戒',
          price: 19999,
          oprice: 29999,
          num: 1,
          server: '25分；VS/微瑕；H/白；奴戒-11号；基础服务保障',
          freight: 10
        };

        for(let i = 0; i < 15; i++) {
          let orders = [];
          let shoporder = {
            shopName: 'CC卡美珠宝',
            freight: 10,
            price: 100000.00,
            type: (i % 6) + 1
          };
          orders.push(_order);
          if(i % 2) {
            orders.push(_order);
          }
          shoporder.goods = orders;
          this.orders.push(shoporder);
        }
        if(this.type != 1) {
          this.orders = this.orders.filter(order => {
            return order.type == this.type;
          });
        }

      }
    }
  };
</script>
