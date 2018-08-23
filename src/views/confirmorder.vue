<template>
  <div class="pt">
    <v-header>确认订单</v-header>
    <div class="content">
      <ul class="sections">
        <li class="section address" @click="$router.push({name: 'address'})">
          <div class="arrow" :class="{empty: !address}">
            <template v-if="address">
              <div class="line1">收货人：A先生 <span class="tel">188****8888</span></div>
              <div class="line2">收货地址：陕西省西安市碑林区长安北路261号</div>
            </template>
            <template v-else>
              <div class="line1">添加收货地址</div>
              <div class="line2">填写您的收货地址和联系方式</div>
            </template>
          </div>
        </li>
        <li class="section cart-list">
          <ul>
            <li class="flex" v-for="(item, index) in cart">
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
        <li class="section">3</li>
        <li class="section">4</li>
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
  import { mapActions } from 'vuex';
  import ss from '../assets/goods/pic_guguring.png';

  export default {
    data() {
      return {
        totalMoney: 0,
        address: '',
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
        }]
      };
    },
    methods: {
      ...mapActions(['ajax']),
      addOrder() {
        this.$router.push({ name: 'payment' });
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
