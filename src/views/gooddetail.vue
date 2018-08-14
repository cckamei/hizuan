<template>
  <div class="goods-detail pt">
    <div class="content">
      <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="gap"></div>
      <ul>
        <li>
          <v-form-select label="商品规格*" title="性别选择" v-model="reqData.hirePurchase" :list="hirePurchase" placeholder="请选择您的性别"></v-form-select>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        bannerList: ['', '', ''],
        hirePurchase: ['12期', '6期'],
        reqData: {
          hirePurchase: -1
        }
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
  .goods-detail {
    background-color: #fff;
  }

  .gap {
    height: 16px;
    background-color: #f3f3f3;
  }

  .banner {
    height: 600px;
  }
</style>

