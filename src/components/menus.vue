<template>
  <ul class="menus" v-show="value">
    <li class="flex" v-for="(item, index) in menus" @click="go(item)">
      <template v-if="item === 'home'">
        <img src="~assets/goods/icon_home.png" alt="">首页
      </template>
      <template v-else-if="item === 'search'">
        <img src="~assets/goods/icon_search.png" alt="">搜索
      </template>
      <template v-else-if="item === 'collect'">
        <img src="~assets/goods/icon_mylike.png" alt="">我的收藏
      </template>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        required: true
      },
      menus: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        visible: false
      };
    },
    watch: {
      value(val) {
        this.visible = val;
      }
    },
    methods: {
      go(item) {
        if(item === 'home') {
          this.$router.push({ name: 'index' });
        } else if(item === 'search') {
          this.$router.push({ name: 'goodssearch' });
        } else if(item === 'collect') {
          this.toast('敬请期待');
          // this.$router.push({ name: 'collect' });
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .menus {
    position: fixed;
    right: 20px;
    top: 90px;
    width: 240px;
    box-shadow: 0 0 5px 5px rgba(170, 170, 170, 0.5);
    border-radius: 10px;
    z-index: 3;
    background-color: #fff;
    li {
      height: 84px;
      padding: 12px 24px;
      color: #999;
      font-size: 24px;
      border-bottom: 1px solid #f0f0f0; /*no*/
      &:last-child {
        border: none;
      }
      img {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }
    }
  }
</style>


