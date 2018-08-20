<template>
  <div class="pt">
    <v-header-menus home>
      <input type="text" @click="$router.push({name: 'goodssearch'})" placeholder="请选择您要搜索的作品类型" readonly>
      <div slot="menus" class="menus">
        <div class="menu" @click="$router.push({name: 'goodssearch'})"><img src="~assets/goods/icon_search.png" alt=""></div>
      </div>
    </v-header-menus>
    <div class="condition">
      <ul class="flex">
        <li class="flex" @click="filterVisible = true">
          <span>筛选</span>
          <div class="arrow-down" :class="{active: filterVisible}"></div>
        </li>
        <li class="flex" @click="sortVisible = true">
          <span>排序</span>
          <div class="arrow-down" :class="{active: sortVisible}"></div>
        </li>
      </ul>
    </div>
    <div class="content">
      <ul class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check="true">
        <li v-for="(item, index) in goodsList" :key="index" class="flex" @click="goDetail(item)">
          <div class="img"><img :src="item.src" alt=""></div>
          <div class="detail flex-auto flex">
            <span class="name">{{item.name}}</span>
            <span class="desc">{{item.desc}}</span>
            <span class="price">{{item.price}}</span>
            <div class="cart"></div>
          </div>
        </li>
      </ul>
      <p v-if="pageInfo.currentPage < pageInfo.totalPage" v-show="loading" class="loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        <span>加载中...</span>
      </p>
    </div>
    <v-popup-confirm title="筛选" v-model="filterVisible" @confirm="handleFilterConfirm" :isConfirm="filterIndex !== -1">
      <v-input-radio v-model="filterIndex" :list="filters"></v-input-radio>
    </v-popup-confirm>
    <v-popup-confirm title="排序" v-model="sortVisible" @confirm="handleSortConfirm" :isConfirm="sortIndex !== -1">
      <v-input-radio v-model="sortIndex" :list="sorts"></v-input-radio>
    </v-popup-confirm>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex';
  import icon from '../assets/home/pic_lion.png';

  export default {
    data() {
      return {
        filterVisible: false,
        sortVisible: false,
        filterIndex: -1,
        sortIndex: -1,
        filters: ['结', '醒狮MeiMei', '婚嫁', '情侣', 'CHIC潮', '文承', 'TANG玲珑', '点亮'],
        sorts: ['价格从高到低', '价格从低到高'],
        goodsList: [{
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }, {
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }, {
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }, {
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }, {
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }, {
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }, {
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }, {
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }, {
          src: icon,
          name: '醒狮MeiMei项链/坠',
          desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
          price: '￥6,666'
        }],
        pageInfo: {},
        loading: false
      };
    },
    methods: {
      ...mapMutations(['setCommon']),
      ...mapActions(['ajax']),
      handleFilterConfirm() {
        console.log(this.filterIndex);
      },
      handleSortConfirm() {
        console.log(this.sortIndex);
      },
      fetchGoods() {
        // this.ajax({
        //   name: 'goodsList',
        //   data: {
        //   currentPage: (this.pageInfo.currentPage || 0) + 1,
        // }
        // }).then(res => {
        setTimeout(() => {
          let res = {
            pageInfo: {
              totalPage: 10,
              currentPage: 2
            },
            goodsList: [{
              src: '',
              name: '醒狮MeiMei项链/坠',
              desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
              price: '￥6,666'
            }, {
              src: '',
              name: '醒狮MeiMei项链/坠',
              desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
              price: '￥6,666'
            }, {
              src: '',
              name: '醒狮MeiMei项链/坠',
              desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
              price: '￥6,666'
            }]
          };
          this.pageInfo = res.pageInfo;
          if(this.pageInfo.currentPage == 1) {
            this.goodsList = [];
          }
          this.goodsList = this.goodsList.concat(res.goodsList);

          if(this.pageInfo.currentPage < this.pageInfo.totalPage) {
            this.loading = false;
          } else if(this.pageInfo.currentPage != 1) {
            this.toast('没有更多数据了');
          }
        }, 1000);
        // });
      },
      //分页
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          this.fetchGoods();
        }, 500);
      },
      goDetail(val) {
        this.setCommon({ goodType: val.type });
        this.$router.push({ name: 'gooddetail' });
      }
    }
  };
</script>

<style lang="less" scoped>
  .pt {
    padding-top: 192px;
  }

  .title input {
    border-left: 1px solid #f0f0f0; /*no*/
    padding-left: 30px;
    padding-right: 30px;
    height: 60px;
    width: 100%;
  }

  .condition {
    height: 96px;
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 96px;
    background-color: #fff;
    font-size: 30px;
    color: #999;
    padding: 0 24px;
    box-shadow: 0 10px 50px 10px rgba(170, 170, 170, 0.5);
    ul {
      height: 100%;
      border-top: 1px solid #f0f0f0; /*no*/
      li {
        width: 50%;
        justify-content: center;
        .arrow-down {
          width: 24px;
          height: 24px;
          background: url('~assets/goods/icon_arrow_d.png') no-repeat;
          background-size: 100%;
          transition: all 0.2s;
          margin-left: 16px;
          &.active {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  .list {
    background-color: #fff;
    position: relative;
    li {
      padding: 30px 40px 30px 30px;
      .img {
        width: 200px;
        height: 200px;
        margin-right: 30px;
        flex-shrink: 0;
        background-color: #f5f5f5;
        img {
          height: 100%;
        }
      }
      .detail {
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        .name {
          font-size: 30px;
          color: #666;
        }
        .desc {
          font-size: 20px;
          color: #999;
          padding-top: 24px;
        }
        .price {
          font-size: 30px;
          color: #cdb49b;
          padding-top: 24px;
        }
        .cart {
          width: 40px;
          height: 40px;
          background: url('~assets/goods/icon_cart.png') no-repeat;
          background-size: 100%;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
</style>
