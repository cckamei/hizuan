<template>
  <div class="tabs">
    <div class="tab"><span :class="{active:active==1}" @click="searchAppointment(1)">进行中</span></div>
    <div class="tab"><span :class="{active:active==2}" @click="searchAppointment(2)">已完成</span></div>
  </div>
</template>

<script>
  export default {
    props: ['active'],
    methods: {
      searchAppointment(type) {
        this.$emit('search-appointment', type);
      }
    }
  };
</script>


<style lang="less" scoped>
  .tabs {
      position: absolute;
      height: 100px;
      top: 0;
      left: 30px;
      right: 30px;
      background: #fff;
      border-top: 1px solid #f0f0f0; /*no*/
      display: flex;
      align-items: center;
      text-align: center;
      .tab {
          flex: 1;
          font-size: 32px;
          span {
              display: inline-block;
              height: 100px;
              line-height: 100px;
              padding: 0 30px;
              &.active {
                  border-bottom: 2px solid #faa0a0; /*no*/
              }
          }
      }
  }
</style>
