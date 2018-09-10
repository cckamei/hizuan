<template>
  <div class="pt pb confirm-order">
    <v-header>确认订单</v-header>
    <div class="content">
      <ul class="sections">
        <li class="section address" @click="$router.push({name: 'myaddress'})">
          <div class="arrow" :class="{empty: !reqData.address}">
            <template v-if="reqData.address">
              <div class="line1">收货人：{{getAddress.name}} <span class="tel">{{getAddress.phone}}</span></div>
              <div class="line2">收货地址：{{getAddress.address}}</div>
            </template>
            <template v-else>
              <div class="line1">添加收货地址</div>
              <div class="line2">填写您的收货地址和联系方式</div>
            </template>
          </div>
        </li>
        <li class="section cart-list">
          <ul>
            <li class="flex" v-for="(item, index) in res.cart">
              <div class="img">
                <img :src="item.src" alt="">
              </div>
              <div class="detail flex-auto flex">
                <span class="name">{{item.name}}</span>
                <span class="desc">{{item.desc}}</span>
                <div class="line3 flex">
                  <span class="price"><span>￥</span>{{item.price | currency}}</span>
                  <div class="number">X{{item.count}}</div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li class="option section">
          <div class="row">
            <v-form-slide-up label="优惠券" title="选择优惠券" placeholder="无可用" @confirm="handleBenifit">
              <template slot="value">
                <div v-for="card in res.benifit" v-if="card.use" class="benifit-btn">已选 优惠{{card.price}}元&nbsp;</div>
              </template>
              <ul>
                <li v-for="(card, index) in res.benifit">
                  <v-card :card="card" useText="已使用" unuseText="立即使用"></v-card>
                </li>
              </ul>
            </v-form-slide-up>
          </div>
          <div class="row">
            <v-form-slide-up label="配送方式" title="配送方式" @confirm="handleDeliver" confirmText="完成">
              <template slot="value">
                <div v-for="(item, index) in res.delivery" v-if="index === deliveryIndex" class="">{{item.name}} 10元</div>
              </template>
              <ul class="delivery">
                <li class="flex" v-for="(item, index) in res.delivery" @click="deliveryIndex = index" :key="index">
                  <div class="flex-auto">
                    <p class="name">{{item.name}}</p>
                    <span class="desc">{{item.desc}}</span>
                  </div>
                  <img v-show="index === deliveryIndex" src="~assets/goods/icon_selected.png" alt="">
                </li>
              </ul>
            </v-form-slide-up>
          </div>
          <div class="row">
            <div class="insurance flex">
              <div class="label flex-auto">运险费</div>
              <span @click="reqData.insurance = !reqData.insurance">确认收货前退货可赔付11元 ¥1.80</span>
              <div class="select" :class="{active: reqData.insurance}" @click="reqData.insurance = !reqData.insurance"></div>
            </div>
          </div>
          <div class="row">
            <v-form-input class="remark" label="留言" v-model="reqData.remark" placeholder="（选填）建议留言前先与卖家沟通确认"></v-form-input>
          </div>
        </li>
        <li class="summary section">
          <div class="row">
            <v-form-input label="商品总额" v-model="res.shopMoney" :readonly="true"></v-form-input>
          </div>
          <div class="row">
            <v-form-input label="运费" v-model="res.shopMoney" :readonly="true"></v-form-input>
          </div>
          <div class="row">
            <v-form-input label="运费险" v-model="res.shopMoney" :readonly="true"></v-form-input>
          </div>
          <div class="row">
            <v-form-input label="优惠券" v-model="res.shopMoney" :readonly="true"></v-form-input>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer flex">
      <span class="total-label">合计：</span>
      <div class="price">￥{{totalMoney | currency}}</div>
      <button class="btn settlement" @click="addOrder">提交订单</button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import ss from '../assets/goods/pic_guguring.png';

  export default {
    data() {
      return {
        totalMoney: 0,
        deliveryIndex: 0,
        res: {
          cart: [{
            src: ss,
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '6666',
            count: 1
          }, {
            src: ss,
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓',
            price: '6666',
            count: 1
          }, {
            src: ss,
            name: '醒狮MeiMei项链/坠',
            desc: '',
            price: '6666',
            count: 1
          }],
          benifit: [{
            id: 1,
            price: 1500,
            limit: 20000,
            use: true,
            expiredStart: '2018.08.01',
            expiredEnd: '2018.09.01'
          }, {
            id: 2,
            price: 600,
            limit: 1000,
            use: false,
            expiredStart: '2018.08.01',
            expiredEnd: '2018.09.01'
          }],
          delivery: [{
            name: '快递运输',
            desc: '标准收费：首重0.5kg内10元，续重每0.5kg加收5元'
          }, {
            name: 'EMS',
            desc: '标准收费：首重0.5kg内10元，续重每0.5kg加收5元'
          }, {
            name: '顺丰速运',
            desc: '标准收费：首重0.5kg内22元，续重每0.5kg加收10元'
          }],
          shopMoney: 0
        },
        reqData: {
          address: '',
          benifit: [],
          delivery: '',
          insurance: false,
          remark: ''
        }
      };
    },
    created() {
      console.log(this.getAddress);
      this.reqData.address = this.getAddress.address;
    },
    computed: {
      ...mapGetters(['getAddress'])
    },
    methods: {
      ...mapActions(['ajax']),
      addOrder() {
        this.$router.push({ name: 'pay' });
      },
      handleBenifit() {
        this.reqData.benifit = this.res.benifit.map(item => item.id);
      },
      handleDeliver() {
      }
    }
  };
</script>

<style lang="less" scoped>
  .sections {
    position: relative;
    margin: 20px;
    .section {
      background-color: #fff;
      margin-bottom: 16px;
      border-radius: 10px;
      &.address {
        padding: 40px 20px;
        padding-right: 20px;
        .line1 {
          font-size: 30px;
          font-weight: bold;
          .tel {
            padding-left: 60px;
          }
        }
        .line2 {
          font-size: 24px;
          color: #666;
          padding-top: 16px;
        }
        .empty {
          .line1,
          .line2 {
            color: #999;
          }
        }
      }
      &.cart-list {
        position: relative;
        padding: 30px 40px 30px 20px;
        li {
          background-color: #fff;
          padding-bottom: 30px;
          align-items: stretch;
          position: relative;
          &.last-child {
            padding-bottom: 0;
          }
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
              font-size: 24px;
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
              .number {
                font-size: 24px;
                color: #666;
                font-weight: bold;
              }
            }
          }
        }
      }
      &.option {
        padding: 0 20px;
        .row {
          height: 84px;
        }
        .insurance {
          height: 84px;
          justify-content: space-between;
          color: #666;
          .label {
            color: #999;
          }
          .select {
            margin-left: 6px;
            background: url('~assets/payment/button_select_off.png') no-repeat;
            background-size: 100% 100%;
            width: 24px;
            height: 24px;
            &.active {
              background: url('~assets/payment/button_select_on.png') no-repeat;
              background-size: 100% 100%;
            }
          }
        }
        .remark {
          font-size: 24px;
        }
      }
      &.summary {
        padding: 0 20px;
        .row {
          height: 84px;
        }
      }
    }
  }

  .footer {
    padding: 0 20px 0 30px;
    height: 96px;
    box-shadow: 0 -10px 50px 10px rgba(170, 170, 170, 0.5);
    background-color: #fff;
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
</style>

<style lang="less">
  .confirm-order {
    .delivery {
      li {
        font-size: 24px;
        color: #666;
        padding: 30px 16px;
        border-bottom: 1px solid #f0f0f0; /*no*/
        justify-content: space-between;
        &:last-child {
          border-bottom: 0;
        }
        img {
          width: 36px;
          height: 36px;
        }
        .name {
          color: #666;
          padding-bottom: 10px;
        }
        .desc {
          color: #999;
          font-size: 20px;
        }
      }
    }
    .remark.flex {
      input {
        font-size: 24px;
      }
    }
    .summary {
      .label,
      .flex input {
        font-size: 24px;
      }
    }
  }
</style>

