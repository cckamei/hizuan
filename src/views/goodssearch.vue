<template>
  <div class="goods-search pt">
    <v-header-menus back shadow>
      <input v-if="searchIndex === -1" type="text" placeholder="请选择您要搜索的作品类型" readonly>
      <div v-else class="search-type">
        <button class="btn" @click="searchIndex = -1">{{searches[searchIndex]}} X</button>
      </div>
      <div slot="menus" class="menus">
        <div class="menu" @click="search"><img src="~assets/goods/icon_search.png" alt=""></div>
      </div>
    </v-header-menus>
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
        this.$router.push({ name: 'gooddetail' });
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../style/tool.less';
  input {
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
      font-size: 30px;
      color: #fff;
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

