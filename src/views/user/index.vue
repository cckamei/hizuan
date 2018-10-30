<template>
  <div class="mypage">
    <user-header></user-header>
    <user-tabs></user-tabs>
    <order-menu></order-menu>
    <commission v-if="getUserInfo.is_distributor"></commission>
    <user-footer></user-footer>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex';
  import userHeader from './components/header';
  import userTabs from './components/usertabs';
  import userFooter from './components/footer';
  import orderMenu from './components/ordermenu';
  import commission from './components/commission';
  import mixin from './components/mixin';

  export default {
    components: {
      userHeader,
      userFooter,
      userTabs,
      orderMenu,
      commission
    },
    computed: {
      ...mapGetters(['getUserInfo'])
    },
    mixins: [mixin],
    created() {
      this.setOrderType(-1);
    },
    methods: {
      ...mapMutations(['setOrderType'])
    }
  };
</script>
<style lang="less" scoped>
  .mypage {
    background: #f0f0f0;
  }
</style>
