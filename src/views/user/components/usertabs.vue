<template>
  <div class="myitem">
    <div class="item" @click="$router.push({ name: 'mystore' })">
      <img src="~assets/mypage/mylike_icon.png" alt="">
      <span>我的收藏</span>
    </div>
    <div class="item" @click="$router.push({ name: 'bespeak' })">
      <img src="~assets/mypage/reserve_icon.png" alt="">
      <span>我的预约</span>
    </div>
    <div class="item" @click="$router.push({ name: 'myaddress' })">
      <img src="~assets/mypage/address_icon.png" alt="">
      <span>地址管理</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .myitem {
      position: relative;
      z-index: 2;
      width: 710px;
      padding: 40px 0 36px;
      margin: -50px auto 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      background: #ffffff;
      border-radius: 10px;
      .item {
          text-align: center;
          img {
              width: 88px;
              height: 88px;
              display: block;
              margin-bottom: 20px;
          }
          span {
              color: #999999;
              font-size: 24px;
          }
      }
  }
</style>

