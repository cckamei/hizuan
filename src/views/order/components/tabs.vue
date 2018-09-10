<template>
  <div class="tab">
    <span :class="{active: item.type == type}" v-for="(item, index) in orderTab" :key="index" @click="changeTab(item.type)" :disabled="item.type == type">
        <i>{{item.title}}</i>
        <i v-if="item.isChoiced"></i>
      </span>
  </div>
</template>

<script>
  export default {
    props: ['type'],
    data() {
      return {
        orderTab: [
          {
            title: "全部",
            isChoiced: false,
            type: 1
          },
          {
            title: "待付款",
            isChoiced: false,
            type: 2
          },
          {
            title: "待发货",
            isChoiced: false,
            type: 3
          },
          {
            title: "待收货",
            isChoiced: false,
            type: 4
          },
          {
            title: "已完成",
            isChoiced: false,
            type: 5
          }
        ]
      };
    },
    methods: {
      changeTab(type) {
        this.$emit('search-orders', type);
      }
    }
  };
</script>

<style lang="less" scoped>
  .tab {
      position: fixed;
      height: 96px;
      line-height: 96px;
      top: 96px;
      width: 100%;
      box-shadow: 0 5px 10px 5px rgba(170, 170, 170, 0.5);
      background-color: #fff;
      z-index: 2;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      padding: 0 45px;
      span {
          color: #666666;
          text-align: center;
          line-height: 96px;
          flex: 1;
          position: relative;
          font-size: 20px;
      }

      .active {
          color: #333333;
          font-weight: bold;
          font-size: 24px;
          &:after {
              content: '';
              position: absolute;
              width: 108px;
              height: 2px;
              bottom: -1px;
              background: #faa0a0;
              left: 0;
              right: 0;
              margin: auto;
          }
      }
  }
</style>

