<template>
  <div class="goods-search pt">
    <v-header back>
      <input v-if="searchIndex === -1" type="text" placeholder="请选择您要搜索的作品类型" readonly>
      <div v-else class="search-type">
        <button class="btn" @click="searchIndex = -1">{{searches[searchIndex]}} X</button>
      </div>
      <div class="menus" slot="menus" @click="search">
        <img src="~assets/goods/icon_search.png" alt="">
      </div>
    </v-header>
    <div class="content">
      <v-input-radio v-model="searchIndex" :list="searches" class="list"></v-input-radio>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        searchIndex: -1,
        searches: ['戒指', '婚戒', '情侣戒', '项链/坠', '耳饰', '手链/镯', '配链', '脚链']
      };
    },
    methods: {
      ...mapActions(['ajax']),
      search() {
        if(this.searchIndex === -1) {
          this.toast('请选择您要搜索的作品类型');
          return false;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../style/tool.less';
  input {
    border: none;
    border-left: 1px solid #f0f0f0; /*no*/
    padding-left: 30px;
    padding-right: 30px;
    height: 60px;
    width: 100%;
  }

  .search-type {
    text-align: left;
    padding-left: 24px;
    button {
      background-color: @btn-color;
      height: 60px;
      padding: 0 24px;
      border-radius: 45px;
      border: none;
      font-size: 30px;
      color: #fff;
    }
  }

  .menus {
    padding: 18px;
    width: 96px;
    height: 96px;
    position: absolute;
    right: 0;
    top: 0;
    img {
      display: block;
    }
  }
</style>

<style lang="less">
  .goods-search {
    .list {
      background-color: #fff;
      padding: 0 24px;
      li {
        font-size: 30px;
        padding: 0 36px;
      }
    }
  }
</style>

