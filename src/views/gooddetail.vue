<template>
  <div class="goods-detail">
    <v-header-goods back>
      <div slot="menus" class="menus">
        <div class="menu"><img src="~assets/goods/button_cart_r.png" alt=""></div>
        <div class="menu"><img src="~assets/goods/button_option.png" alt=""></div>
      </div>
    </v-header-goods>
    <div class="content">
      <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item v-for="(item, index) in res.bannerList" :key="index">
          <img :src="item" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="info">
        <div class="price">
          <i>￥</i>{{8888.00 || currency}}
          <img class="right" src="~assets/goods/button_share.png" alt="">
        </div>
        <div class="name">CC卡美婚嫁系列 - 戒指</div>
        <div class="desc">结而为约·有承诺的爱</div>
        <div class="courier">
          <span>快递:{{22 | currency}}元</span>
          <span class="right">广东深圳</span>
        </div>
      </div>
      <div class="gap"></div>
      <div class="row">
        <v-form-slide-up label="商品规格" v-model="reqData.sku" placeholder="请选择">
          <ul class="sku">
            <li class="sku-icon flex">
              <img class="icon" src="~assets/goods/pic_guguring.png" alt="">
              <div>
                <div class="price"><span>￥</span>{{8888.00 || currency}}</div>
                <span class="code">商品编号：DRGC00208</span>
              </div>
            </li>
            <li>
              <div class="title">主钻分数</div>
              <v-button-radio v-model="sku.scoreIndex" :list="res.skuScore"></v-button-radio>
            </li>
            <li>
              <div class="title">钻石净度</div>
              <v-button-radio v-model="sku.clarityIndex" :list="res.skuClarity"></v-button-radio>
            </li>
            <li>
              <div class="title">颜色</div>
              <v-button-radio v-model="sku.colorIndex" :list="res.skuColor"></v-button-radio>
            </li>
            <li>
              <div class="title">规格</div>
              <v-button-radio v-model="sku.specIndex" :list="res.skuSpec"></v-button-radio>
            </li>
            <li class="count flex">
              <span>数量</span>
              <div>
                <button class="add"><img src="~assets/goods/button_minus_d.png" alt=""></button>
                <input type="text">
                <button class="minus"><img src="~assets/goods/button_plus_d.png" alt=""></button>
              </div>
            </li>
          </ul>
        </v-form-slide-up>
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        res: {
          bannerList: ['', '', ''],
          skuScore: ['18分', '25分', '30分', '40分'],
          skuClarity: ['SI/小瑕', 'VS/微瑕', 'VVS/极微瑕'],
          skuColor: ['H/白', 'F-G/优白', 'I-J/淡白', 'D-E/极白'],
          skuSpec: ['女戒-11号', '女戒-12号', '女戒-13号', '女戒-14号', '女戒-15号']
        },
        sku: {
          scoreIndex: 0,
          clarityIndex: 0,
          colorIndex: 0,
          specIndex: 0
        },
        reqData: {
          sku: 'asdf'
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

  .info {
    padding: 30px;
    .price {
      color: #cdb49b;
      font-size: 42px;
      i {
        font-size: 30px;
      }
      img {
        width: 40px;
        height: 40px;
        padding: 20px;
      }
    }
    .name {
      padding-top: 30px;
      font-size: 32px;
    }
    .desc {
      padding-top: 18px;
      font-size: 24px;
      color: #999;
    }
    .courier {
      padding-top: 30px;
      font-size: 24px;
      color: #666;
    }
  }

  .row {
    height: 84px;
    padding: 0 30px;
    .sku {
      li {
        padding: 20px;
        border-bottom: 1px solid #f0f0f0; /*no*/
        &.sku-icon {
          align-items: flex-end;
          border: none;
          .icon {
            width: 200px;
            height: 200px;
            margin-right: 30px;
          }
          .price {
            color: #cdb49b;
            font-size: 42px;
          }
          .code {
            color: #999;
            font-size: 20px;
          }
        }
        &.count {
          .btn {
            &.add {
            }
            &.minus {
            }
          }
        }
        .title {
          color: #666;
          font-size: 24px;
        }
      }
    }
  }
</style>

