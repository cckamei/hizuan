<template>
  <div class="pt">
    <div class="header">
      <div class="home" @click="$router.go(-1)"><img src="~assets/goods/icon_home.png" alt=""></div>
      <div class="title ellipsis">
        <input type="text" @click="$router.push({name: 'search'})" placeholder="请选择你要搜索的作品类型" readonly>
      </div>
    </div>
    <div class="condition">
      <ul class="flex">
        <li class="flex" @click="goodsFilter">
          <span>筛选</span>
          <div class="arrow-down" :class="{active: filterVisible}"></div>
        </li>
        <li class="flex" @click="goodsSort">
          <span>排序</span>
          <div class="arrow-down" :class="{active: sortVisible}"></div>
        </li>
      </ul>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        filterVisible: false,
        sortVisible: false
      };
    },
    methods: {
      ...mapActions(['ajax']),
      goodsFilter() {
        this.filterVisible = !this.filterVisible;
      },
      goodsSort() {
        this.sortVisible = !this.sortVisible;
      }
    }
  };
</script>

<style lang="less" scoped>
  .pt {
    padding-top: 198px;
  }

  .header {
    position: absolute;
    height: 96px;
    line-height: 96px;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    .home {
      width: 96px;
      height: 96px;
      position: absolute;
      left: 0;
      top: 0;
      padding: 18px;
      img {
        height: 100%;
        display: block;
      }
    }
    .title {
      padding-left: 96px;
      font-size: 30px;
      color: #999;
      input {
        border: none;
        border-left: 1px solid #f0f0f0; /*no*/
        padding-left: 30px;
        height: 60px;
        width: 100%;
        background: url('~assets/goods/icon_search.png') no-repeat right 18px center;
        background-size: 60px 100%;
      }
    }
  }

  .condition {
    position: absolute;
    height: 96px;
    top: 96px;
    width: 100%;
    background-color: #fff;
    z-index: 103;
    font-size: 30px;
    color: #999;
    padding: 0 24px;
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

  .condition-wrapper {
    position: absolute;
    width: 100%;
    top: 196px;
    background-color: #fff;
    transform: translate3d(-50%, 0, 0);
    transition: 1s ease-out;
  }

  .slide-enter,
  .slide-leave-active {
    transform: translate3d(-50%, -100%, 0);
  }
</style>
