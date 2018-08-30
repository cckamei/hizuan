<template>
      <div class="orderlistpage">
            <v-header>订单列表</v-header>
            <div class="tab">
                  <span :class="{active: item.type == type}" v-for="(item, index) in orderTab" :key="index" @click="changeTab(index)" :disabled="item.type == type">
                        <i>{{item.title}}</i>
                        <i v-if="item.isChoiced"></i>
                  </span>
            </div>
            <div class="orderlist">
                  <div class="listitem">
                        <div class="itemtitle" @click="goDetail()">
                              <div class="titleleft">
                                    <img src="~assets/mypage/icon_shop.png" alt="">
                                    <span>CC卡美珠宝</span>
                              </div>
                              <div class="listright">待收货</div>
                        </div>
                        <div class="itemcontent">
                              <div class="contentleft">
                                    <img src="~assets/mypage/icon_order_5.png" alt="">
                              </div>
                              <div class="contentright">
                                    <div class="contenttitle">
                                          <span>卡美婚嫁系列 - 戒指</span>
                                          <span>￥18888.00</span>
                                    </div>
                                    <div class="contentmessage">
                                          <p>25分；VS/微瑕；H/白；奴戒-11号；基础服务保障</p>
                                          <div class="messageright">
                                                <s>￥18888.00</s>
                                                <span>X1</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="itemcontent">
                              <div class="contentleft">
                                    <img src="~assets/mypage/icon_order_5.png" alt="">
                              </div>
                              <div class="contentright">
                                    <div class="contenttitle">
                                          <span>卡美婚嫁系列 - 戒指</span>
                                          <span>￥18888.00</span>
                                    </div>
                                    <div class="contentmessage">
                                          <p>25分；VS/微瑕；H/白；奴戒-11号；基础服务保障</p>
                                          <div class="messageright">
                                                <s>￥18888.00</s>
                                                <span>X1</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="itemprice">
                              共1件商品  实付款： <span>￥18888.00</span> （含运费￥10.00）
                        </div>
                        <div class="itemfoot">
                              <!-- 待收货 -->
                              <div class="ordertypeDS">
                                    <button class="btngrey btnleft">查看物流</button>
                                    <button class="btnpink">确认收货</button>
                              </div>
                              <!-- 已完成 -->
                              <!-- <div class="ordertypeWC">
                                    <button class="btngrey btnleft">联系客服</button>
                                    <button class="btngrey">以旧换新</button>
                              </div> -->
                              <!-- 待付款 -->
                              <!-- <div class="ordertypeDF">
                                    <button class="btngrey btnleft">联系客服</button>
                                    <button class="btnpink">立即付款</button>
                              </div> -->
                              <!-- 已取消 -->
                              <!-- <div class="ordertypeQX">
                                    <button class="btngrey btnleft">联系客服</button>
                                    <button class="btngrey">再次购买</button>
                              </div> -->
                              <!-- 退款中 -->
                              <!-- <div class="ordertypeTK">
                                    <button class="btngrey btnleft">联系客服</button>
                                    <button class="btngrey">查看详情</button>
                              </div> -->
                              
                        </div>
                  </div>
            </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
      orderTab: [
        {
          title: "全部",
          isChoiced: false,
          type: 1
        },
        {
          title: "待付款",
          isChoiced: false,
          type: 2
        },
        {
          title: "待收货",
          isChoiced: false,
          type: 3
        },
        {
          title: "已完成",
          isChoiced: false,
          type: 4
        },
        {
          title: "退款/取消",
          isChoiced: false,
          type: 5
        }
      ],
      type: 1
    };
  },
  methods: {
    //切换tab
    changeTab(index) {
      if (this.type != index + 1) {
        this.type = index + 1;
        //先置空列表数组和分页信息；然后请求数据
      }
    },
    //跳转订单详情
    goDetail() {
          this.$router.push({ name: 'orderdetail' });
    }
  }
};
</script>
<style lang="less" scoped>
.orderlistpage {
  background: #f0f0f0;
  .header {
    box-shadow: 0 0 0 0 rgba(170, 170, 170, 0.5);
    border-bottom: 2px solid #cccccc;
  }
  .tab {
    position: fixed;
    height: 96px;
    line-height: 96px;
    top: 96px;
    width: 100%;
    box-shadow: 0 5px 10px 5px rgba(170, 170, 170, 0.5);
    background-color: #fff;
    z-index: 2;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding: 0 45px;
    span {
      color: #666666;
      text-align: center;
      line-height: 96px;
      flex: 1;
      position: relative;
      font-size: 20px;
    }

    .active {
      color: #333333;
      font-weight: bold;
      font-size: 24px;
      &:after {
        content: "";
        position: absolute;
        width: 108px;
        height: 2px;
        bottom: -1px;
        background: #faa0a0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
  .orderlist {
    .listitem {
      background: #ffffff;
      margin-bottom: 16px;
      .itemtitle {
        padding: 0 30px;
        height: 64px;
        line-height: 64px;
        margin-top: 209px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        .titleleft {
          img {
            display: inline;
            width: 24px;
            height: 24px;
            margin-right: 12px;
          }
        }
        .listright {
          font-size: 24px;
          color: #cdb498;
        }
      }
      .itemcontent {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 30px;
        background: #f5f5f5;
        margin-bottom: 8px;
        .contentleft {
          width: 120px;
          height: 120px;
          margin: 20px 20px 20px 0;
          background: #ffffff;
          img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
        .contentright {
          flex: 1;
          .contenttitle {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            margin: 30px 0 10px;
            color: #666666;
            font-size: 24px;
            span:nth-child-of(2) {
              text-align: right;
            }
          }
          .contentmessage {
            flex: 1;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            font-size: 24px;
            margin-bottom: 30px;
            color: #999999;
            p {
              width: 360px;
            }
            .messageright {
              text-align: right;
            }
            s {
              color: #cccccc;
              display: block;
            }
          }
        }
      }
      .itemprice {
        height: 64px;
        line-height: 64px;
        text-align: right;
        padding: 0 30px;
        font-size: 20px;
        color: #666666;
        border-bottom: 2px solid #cccccc;
        span {
          font-size: 24px;
        }
      }
      .itemfoot {
        height: 80px;
        text-align: right;
        padding: 0 30px;
        button {
          width: 140px;
          height: 52px;
          border-radius: 25px;
          font-size: 20px;
          margin-top: 14px;
        }
        .btnleft {
          margin-right: 30px;
        }
        .btngrey {
          background: #ffffff;
          border: 2px solid #cccccc;
          color: #666666;
        }
        .btnpink {
          background: #ffb4b4;
          border: 2px solid #ffb4b4;
          color: #ffffff;
        }
      }
    }
  }
}
</style>

