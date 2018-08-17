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
        <ul class="mark flex">
          <li class="flex"><img src="~assets/goods/icon_hook_mini.png" alt=""><span>新款上架</span></li>
          <li class="flex"><img src="~assets/goods/icon_hook_mini.png" alt=""><span>专柜同款</span></li>
        </ul>
        <div class="courier">
          <span>快递:{{22 | currency}}元</span>
          <span class="right">广东深圳</span>
        </div>
      </div>
      <div class="gap"></div>
      <div class="row">
        <v-form-slide-up label="领取优惠" v-model="reqData.benefit" placeholder="" @confirm="handleSKU">
          <template slot="value">
            <button class="benifit-btn">满20000减1500</button>
            <button class="benifit-btn">满10000减600</button>
          </template>
          阿斯蒂芬
        </v-form-slide-up>
      </div>
      <div class="gap"></div>
      <div class="row">
        <v-form-slide-up label="商品规格" v-model="reqData.sku" placeholder="选择 主钻分数；钻石净度；颜色；规格；数量" @confirm="handleSKU">
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
              <div class="flex">
                <div @click="sku.count > 1 && sku.count--" class="btn minus" :class="{active: sku.count > 1}"></div>
                <input v-model="sku.count" type="text" readonly>
                <div @click="sku.count < res.limit && sku.count++" class="btn plus" :class="{active: sku.count < res.limit}"></div>
              </div>
            </li>
          </ul>
        </v-form-slide-up>
      </div>
      <div class="row">
        <v-form-slide-up label="商品参数" title="商品参数" placeholder="套系；款式；钻石切工；主钻形状；副钻形状‘副钻分数；镶嵌材质；镶嵌方式">
          <ul class="goods-param">
            <li class="flex">
              <span class="label">商品编号</span>
              <span class="value">DRGC00208</span>
            </li>
            <li class="flex">
              <span class="label">套系</span>
              <span class="value">婚嫁系列</span>
            </li>
            <li class="flex">
              <span class="label">款式</span>
              <span class="value">婚戒</span>
            </li>
            <li class="flex">
              <span class="label">钻石切工</span>
              <span class="value">完美</span>
            </li>
            <li class="flex">
              <span class="label">主钻形状</span>
              <span class="value">圆形</span>
            </li>
            <li class="flex">
              <span class="label">副钻形状</span>
              <span class="value">无副钻</span>
            </li>
            <li class="flex">
              <span class="label">副钻分数</span>
              <span class="value">无副钻</span>
            </li>
            <li class="flex">
              <span class="label">镶嵌材质</span>
              <span class="value">Pt950铂金</span>
            </li>
            <li class="flex">
              <span class="label">镶嵌方式</span>
              <span class="value">单钻</span>
            </li>
          </ul>
        </v-form-slide-up>
      </div>
      <div class="gap"></div>
      <div class="row">
        <v-form-slide-up label="基础服务" title="基础服务" placeholder="店铺保修；专柜联保">
          <ul class="service">
            <li>
              <div class="flex"><img src="~assets/goods/icon_hook_mini.png" alt=""><span>店铺保修</span></div>
              <span class="note">微信商城提供为期1年的保修服务（邮费需用户自理）</span>
            </li>
            <li>
              <div class="flex"><img src="~assets/goods/icon_hook_mini.png" alt=""><span>专柜联保</span></div>
              <span class="note">微信商城所出售的商品可在CC卡美品牌专柜享受保修服务</span>
            </li>
          </ul>
        </v-form-slide-up>
      </div>
      <div class="row">
        <v-form-slide-up label="刻字定制" title="刻字定制" placeholder="修改您的刻字信息" v-model="reqData.lettering" @confirm="handleLettering">
          <ul class="lettering">
            <li class="lettering-enable">
              <div class="title">是否刻字</div>
              <v-button-radio v-model="lettering.disable" :list="['是', '否']"></v-button-radio>
            </li>
            <li>
              <div class="title">刻字內容</div>
              <input v-model="lettering.text" class="lettering-text" type="text" maxlength="2" placeholder="请填写您的刻字内容（不超过2个字）">
            </li>
            <li>
              <div class="title">要求</div>
              <input v-model="lettering.remarks" class="lettering-text" type="text" maxlength="20" placeholder="请填写您的要求">
            </li>
          </ul>
        </v-form-slide-up>
      </div>
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
          skuSpec: ['女戒-11号', '女戒-12号', '女戒-13号', '女戒-14号', '女戒-15号'],
          limit: 10,
          benifit: [{
            id: 1,
            price: 1500,
            limit: 20000,
            expiredStart: '2018.08.01',
            expiredEnd: '2018.09.01'
          }, {
            id: 2,
            price: 600,
            limit: 1000,
            expiredStart: '2018.08.01',
            expiredEnd: '2018.09.01'
          }]
        },
        sku: {
          scoreIndex: 0,
          clarityIndex: 0,
          colorIndex: 0,
          specIndex: 0,
          count: 1
        },
        lettering: {
          disable: 1,
          text: '',
          remarks: ''
        },
        reqData: {
          sku: '',
          lettering: '',
          benefit: ''
        }
      };
    },
    methods: {
      ...mapActions(['ajax']),
      handleSKU() {
        let score = this.res.skuScore[this.sku.scoreIndex];
        let clarity = this.res.skuClarity[this.sku.clarityIndex];
        let color = this.res.skuColor[this.sku.colorIndex];
        let spec = this.res.skuSpec[this.sku.specIndex];
        this.reqData.sku = `已选 ${score}；${clarity}；${color}；${spec}`;
      },
      handleLettering() {
        let disable = this.lettering.disable ? '否' : '是';
        console.log(disable);
        this.reqData.lettering = this.lettering.disable ? '' : `刻字 ${this.lettering.text}；要求 ${this.lettering.remarks}`;
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
    .mark {
      padding-top: 30px;
      li {
        padding-right: 40px;
        font-size: 24px;
        color: #cdb498;
        img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
      }
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
          color: #666;
          font-size: 24px;
          justify-content: space-between;
          .btn {
            width: 40px;
            height: 40px;
            &.plus {
              background: url('~assets/goods/button_plus_l.png') no-repeat;
              background-size: 100%;
              &.active {
                background: url('~assets/goods/button_plus_d.png') no-repeat;
                background-size: 100%;
              }
            }
            &.minus {
              background: url('~assets/goods/button_minus_l.png') no-repeat;
              background-size: 100%;
              &.active {
                background: url('~assets/goods/button_minus_d.png') no-repeat;
                background-size: 100%;
              }
            }
          }
          input {
            width: 0;
            min-width: 120px;
            color: #666;
            text-align: center;
            padding: 0 10px;
          }
        }
        .title {
          color: #666;
          font-size: 24px;
        }
      }
    }
    .goods-param {
      font-size: 24px;
      li {
        height: 84px;
        border-bottom: 1px solid #f0f0f0; /*no*/
        justify-content: space-between;
        padding: 0 20px;
        &:last-child {
          border-bottom: 0;
        }
        .label {
          color: #999;
        }
        .value {
          color: #666;
        }
      }
    }
    .service {
      li {
        padding: 20px;
        font-size: 24px;
        color: #666;
        .note {
          padding-left: 36px;
          font-size: 20px;
          color: #999;
        }
        img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
      }
    }
    .lettering {
      li {
        padding: 20px;
        font-size: 24px;
        color: #666;
        .lettering-text {
          height: 84px;
          line-height: 84px;
          font-size: 24px;
          color: #999;
          border-bottom: 1px solid #f0f0f0; /*no*/
          width: 100%;
          margin-top: 20px;
        }
      }
    }
    .benifit-btn {
      border-radius: 18px;
      background-color: #fff;
      font-size: 24px;
      padding: 0 14px;
      height: 36px;
      color: #faa0a0;
      border: 1px solid #faa0a0; /*no*/
      margin-left: 24px;
    }
  }
</style>

<style lang="less">
  .lettering-enable {
    button {
      width: 272px;
    }
  }
</style>

