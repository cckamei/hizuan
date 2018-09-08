<template>
  <div class="order">
    <v-header>订单列表</v-header>
    <tabs :type="type" @search-orders="searchOrders"></tabs>
    <order-list :data="orders"></order-list>
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
    },
    methods: {
      searchOrders(type) {
        this.type = type;
      }
    }
  };
</script>
