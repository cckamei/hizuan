<template>
  <div class="pt pb">
    <v-header>购物车</v-header>
    <div class="content">
      <ul class="cart-list">
        <li class="flex" v-for="(item, index) in res.cart" v-touch.press="handlePress" :data-index="index">
          <div class="checkbox" :class="{active: item.checked, disabled: !item.limit}" @click="item.limit && (item.checked = !item.checked)"></div>
          <div class="img">
            <img :src="item.src" alt="">
          </div>
          <div class="detail flex-auto flex">
            <span class="name">{{item.name}}</span>
            <span class="desc">{{item.desc}}</span>
            <template v-if="item.limit">
              <div class="line3">
                <span class="price"><span>￥</span>{{item.price | currency}}</span>
                <div class="add-minus flex">
                  <div @click="item.count > 1 && item.count--" class="btn minus" :class="{active: item.count > 1}"></div>
                  <input v-model="item.count" type="text" readonly>
                  <div @click="item.count < item.limit && item.count++" class="btn plus" :class="{active: item.count < item.limit}"></div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="line3 flex">
                <span class="note">所选规格暂时无货</span>
                <button class="rechoose btn" @click="skuVisible = true,skuIndex = index">重选</button>
              </div>
            </template>
          </div>
          <div class="mask-delete flex" v-if="item.deleteVisible" @click="item.deleteVisible = false">
            <div class="delete" @click="remove">删除</div>
          </div>
        </li>
      </ul>
      <v-recommend title="为你推荐" :list="res.recommend"></v-recommend>
    </div>
    <div class="footer flex">
      <div class="checkbox" :class="{active: checkedAll}" @click="checkAll"></div>
      <span class="checkbox-label">全选</span>
      <span class="total-label">合计：</span>
      <div class="price">￥{{totalMoney | currency}}</div>
      <button class="btn settlement" @click="settlement">结算{{totalCount}}</button>
    </div>
    <v-slide-up v-model="skuVisible" @confirm="handleSKU">
      <template v-for="(item, index) in res.cart" v-if="skuIndex === index">
        <ul class="sku">
          <li class="sku-icon flex">
            <img class="icon" src="~assets/goods/pic_guguring.png" alt="">
            <div>
              <div class="price"><span>￥</span>{{8888.00 | currency}}</div>
              <span class="code">商品编号：DRGC00208</span>
            </div>
          </li>
          <li>
            <div class="title">主钻分数</div>
            <v-button-radio v-model="item.sku.scoreIndex" :list="item.skuScore"></v-button-radio>
          </li>
          <li>
            <div class="title">钻石净度</div>
            <v-button-radio v-model="item.sku.clarityIndex" :list="item.skuClarity"></v-button-radio>
          </li>
          <li>
            <div class="title">颜色</div>
            <v-button-radio v-model="item.sku.colorIndex" :list="item.skuColor"></v-button-radio>
          </li>
          <li>
            <div class="title">规格</div>
            <v-button-radio v-model="item.sku.specIndex" :list="item.skuSpec"></v-button-radio>
          </li>
          <li class="count flex">
            <span>数量</span>
            <div class="flex">
              <div @click="item.count > 1 && item.count--" class="btn minus" :class="{active: item.count > 1}"></div>
              <input v-model="item.count" type="text" readonly>
              <div @click="item.count < item.limit && item.count++" class="btn plus" :class="{active: item.count < item.limit}"></div>
            </div>
          </li>
        </ul>
      </template>
    </v-slide-up>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import ss from '../assets/goods/pic_guguring.png';

  export default {
    data() {
      return {
        checkedAll: false,
        totalCount: 0,
        totalMoney: 0,
        skuVisible: false,
        skuIndex: 0,

        res: {
          cart: [{
            checked: false,
            deleteVisible: false,
            src: ss,
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '6666',
            count: 1,
            limit: 10,
            sku: {
              scoreIndex: 0,
              clarityIndex: 0,
              colorIndex: 0,
              specIndex: 0
            },
            skuScore: ['18分', '25分', '30分', '40分'],
            skuClarity: ['SI/小瑕', 'VS/微瑕', 'VVS/极微瑕'],
            skuColor: ['H/白', 'F-G/优白', 'I-J/淡白', 'D-E/极白'],
            skuSpec: ['女戒-11号', '女戒-12号', '女戒-13号', '女戒-14号', '女戒-15号']
          }, {
            checked: false,
            deleteVisible: false,
            src: ss,
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓',
            price: '6666',
            count: 1,
            limit: 10,
            sku: {
              scoreIndex: 0,
              clarityIndex: 0,
              colorIndex: 0,
              specIndex: 0
            },
            skuScore: ['18分', '25分', '30分', '40分'],
            skuClarity: ['SI/小瑕', 'VS/微瑕', 'VVS/极微瑕'],
            skuColor: ['H/白', 'F-G/优白', 'I-J/淡白', 'D-E/极白'],
            skuSpec: ['女戒-11号', '女戒-12号', '女戒-13号', '女戒-14号', '女戒-15号']
          }, {
            checked: false,
            deleteVisible: false,
            src: ss,
            name: '醒狮MeiMei项链/坠',
            desc: '',
            price: '6666',
            count: 1,
            limit: 0,
            sku: {
              scoreIndex: 0,
              clarityIndex: 0,
              colorIndex: 0,
              specIndex: 0
            },
            skuScore: ['18分', '25分', '30分', '40分'],
            skuClarity: ['SI/小瑕', 'VS/微瑕', 'VVS/极微瑕'],
            skuColor: ['H/白', 'F-G/优白', 'I-J/淡白', 'D-E/极白'],
            skuSpec: ['女戒-11号', '女戒-12号', '女戒-13号', '女戒-14号', '女戒-15号']
          }],
          recommend: [{
            url: ss,
            name: '文承 戒指',
            price: '6666',
            like: false
          }, {
            url: ss,
            name: '文承 戒指',
            price: '6666',
            like: false
          }, {
            url: ss,
            name: '文承 戒指',
            price: '6666',
            like: false
          }, {
            url: ss,
            name: '文承 戒指',
            price: '6666',
            like: false
          }]
        }
      };
    },
    watch: {
      'res.cart': {
        handler(val) {
          this.checkedAll = !this.res.cart.filter(item => item.limit && !item.checked).length;
          this.totalCount = this.res.cart.filter(item => item.limit && item.checked).reduce((total, { count }) => total + count, 0);
          this.totalMoney = this.res.cart.filter(item => item.limit && item.checked).reduce((total, { price, count }) => total + price * count, 0);
        },
        deep: true
      }
    },
    methods: {
      ...mapActions(['ajax']),
      checkAll() {
        let isCheckedAll = this.checkedAll;
        this.res.cart.filter(item => item.limit).forEach(item => {
          item.checked = !isCheckedAll;
        });
      },
      handlePress(eventName, e, hammer) {
        if(eventName === 'press') {
          this.res.cart[hammer.index].deleteVisible = true;
        }
      },
      remove(index) {
        this.res.cart.splice(index, 1);
      },
      handleSKU() {
        // let score = this.res.skuScore[this.sku.scoreIndex];
        // let clarity = this.res.skuClarity[this.sku.clarityIndex];
        // let color = this.res.skuColor[this.sku.colorIndex];
        // let spec = this.res.skuSpec[this.sku.specIndex];
        // this.reqData.sku = `已选 ${score}；${clarity}；${color}；${spec}`;
      },
      settlement() {
        this.$router.push({ name: 'confirmorder' });
      }
    }
  };
</script>

<style lang="less" scoped>
  .cart-list {
    position: relative;
    margin: 20px;
    li {
      background-color: #fff;
      margin-bottom: 16px;
      border-radius: 10px;
      padding: 30px 40px 30px 20px;
      align-items: stretch;
      position: relative;
      .checkbox {
        width: 36px;
        height: 36px;
        background: url('~assets/payment/button_select_off.png') no-repeat;
        background-size: 100% 100%;
        flex-shrink: 0;
        align-self: center;
        &.active {
          background: url('~assets/payment/button_select_on.png') no-repeat;
          background-size: 100% 100%;
        }
        &.disabled {
          background: url('~assets/payment/button_select_una.png') no-repeat;
          background-size: 100% 100%;
          background-color: #fff !important;
        }
      }
      .img {
        width: 200px;
        height: 200px;
        margin-left: 20px;
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
          padding-top: 10px;
        }
        .desc {
          font-size: 20px;
          color: #999;
          padding-top: 24px;
        }
        .line3 {
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          align-items: center;
          justify-content: space-between;
          .price {
            font-size: 30px;
            color: #cdb49b;
            span {
              font-size: 20px;
            }
          }
          .note {
            font-size: 20px;
            color: #666;
          }
          .rechoose {
            height: 40px;
            width: 90px;
            border-radius: 20px;
            background-color: #fff;
            font-size: 20px;
            color: #faa0a0;
            border: 1px solid #faa0a0; /*no*/
          }
          .add-minus {
            color: #666;
            font-size: 24px;
            justify-content: space-between;
            position: absolute;
            right: 0;
            bottom: 0;
            .btn {
              width: 32px;
              height: 32px;
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
              min-width: 60px;
              color: #666;
              background-color: #f0f0f0;
              text-align: center;
              padding: 0 10px;
              margin: 0 8px;
            }
          }
        }
      }
      .mask-delete {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        top: 0;
        right: 0;
        height: 100%;
        justify-content: center;
        margin: 0 -20px;
        .delete {
          width: 120px;
          height: 120px;
          color: #fff;
          background-color: #faa0a0;
          text-align: center;
          line-height: 120px;
          font-size: 24px;
          border-radius: 50%;
        }
      }
    }
  }

  .footer {
    padding: 0 20px 0 30px;
    height: 96px;
    box-shadow: 0 -10px 50px 10px rgba(170, 170, 170, 0.5);
    background-color: #fff;
    .checkbox {
      width: 36px;
      height: 36px;
      margin-right: 20px;
      background: url('~assets/payment/button_select_off.png') no-repeat;
      background-size: 100% 100%;
      flex-shrink: 0;
      align-self: center;
      &.active {
        background: url('~assets/payment/button_select_on.png') no-repeat;
        background-size: 100% 100%;
      }
      &.disabled {
        background: url('~assets/payment/button_select_una.png') no-repeat;
        background-size: 100% 100%;
        background-color: #fff !important;
      }
    }
    .checkbox-label {
      font-size: 24px;
      color: #999;
      padding-right: 40px;
    }
    .total-label {
      font-size: 30px;
      color: #333;
    }
    .price {
      font-size: 30px;
      font-weight: bold;
      color: #cdb49b;
    }
    .settlement {
      margin-left: auto;
      width: 220px;
      height: 68px;
      color: #fff;
      background-color: #ffb4b4;
      border-radius: 34px;
    }
  }

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
</style>
