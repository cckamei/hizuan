<template>
  <div class="tabs">
    <div class="ordertab">
      <div class="ordertab-nav" :class="{active: item.type == type}" v-for="(item, index) in orderTab" :key="index" @click="changeTab(item.type)">
        <i>{{item.title}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    props: ['type'],
    data() {
      return {
        orderTab: [
          {
            title: "全部",
            type: -1
          },
          {
            title: "待付款",
            type: 0
          },
          {
            title: "待发货",
            type: 1
          },
          {
            title: "待收货",
            type: 2
          },
          {
            title: "已完成",
            type: 3
          }
        ]
      };
    },
    methods: {
      ...mapMutations(['setOrderType']),
      changeTab(type) {
        this.setOrderType(type);
        this.$emit('search-orders');
      }
    }
  };
</script>

<style lang="less" scoped>
  .tabs {
    position: fixed;
    height: 96px;
    width: 100%;
    box-sizing: border-box;
  }
  .ordertab {
    position: fixed;
    height: 96px;
    line-height: 96px;
    width: 100%;
    background-color: #fff;
    padding: 0 45px;
    box-shadow: 0 20px 50px 10px rgba(170, 170, 170, 0.5);
    display: flex;
    &-nav {
      // width: 20%;
      height: 100%;
      // float: left;
      flex: 1;
      color: #666666;
      text-align: center;
      line-height: 96px;
      font-size: 20px;
      margin: 0 20px;
      &.active {
        color: #333333;
        font-weight: bold;
        font-size: 24px;
        border-bottom: 6px solid #faa0a0;
      }
    }
  }
</style>

