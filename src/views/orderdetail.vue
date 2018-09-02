<template>
      <div class="orderdetailpage">
            <v-header>订单详情</v-header>
            <!-- 订单地址、收货人、物流信息 -->
            <div class="logistics">
                  <!-- 待付款、待发货 、已取消-->
                  <!-- <div class="logisticsInfo">
                        <div>
                              <img src="~assets/mypage/icon_exp.png" alt=""> 
                              <span>暂无物流信息</span>
                        </div>
                        <p>订单等待付款中</p>
                  </div> -->
                  <!-- 待收货、已完成、退款中、已退款 -->
                  <div class="logisticsInfo">
                        <div class="logitem">
                              <div>
                                    <img src="~assets/mypage/icon_exp.png" alt=""> 
                                    <span class="logInfo">[西安市]陕西省西安市碑林区长安北路261陕西省西安市碑林区长安北路261</span>
                              </div>
                              <img @click="gotLogistics()" class="rightarrow" src="~assets/common/icon_right_arrow.png" alt="">
                        </div>
                        <p>2018-08-08 18:06:06</p>
                  </div>
                  <div class="receiverInfo">
                        <div>
                              <img src="~assets/mypage/icon_package.png" alt=""> 
                              <span>收货人：A先生</span>
                              <span class="phone">158****1562</span>
                        </div>
                        <p>收货地址：陕西省西安市碑林区长安北路261号</p>
                  </div>
            </div>
            <!-- 商品信息 -->
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
                        <ul>
                              <li class="priceType">
                                    <span>商品总额</span>
                                    <span>￥25554.00</span>
                              </li>
                              <li class="priceType">
                                    <span>运费</span>
                                    <span>+￥25554.00</span>
                              </li>
                              <li class="priceType">
                                    <span>运费险</span>
                                    <span>+￥25554.00</span>
                              </li>
                              <li class="priceType">
                                    <span>优惠券</span>
                                    <span>-￥25554.00</span>
                              </li>
                              <li class="priceType realPaymoney">
                                    <span>商品总额</span>
                                    <span class="paymoney">￥25554.00</span>
                              </li>
                        </ul>
                  </div>
                  <div class="itemfoot">
                        <!-- 待收货 -->
                        <div class="ordertypeDS">
                              <button class="btngrey btnleft flexleft" @click="goApplyRefund()">申请退款</button>
                              <button class="btngrey btnleft">联系客服</button>
                              <button class="btnpink">确认收货</button>
                        </div>
                        <!-- 已完成 -->
                        <!-- <div class="ordertypeWC">
                              <button class="btngrey btnleft">联系客服</button>
                              <button class="btngrey">以旧换新</button>
                        </div> -->
                        <!-- 待付款 -->
                        <!-- <div class="ordertypeDF">
                              <button class="btngrey btnleft flexleft">取消订单</button>
                              <button class="btngrey btnleft">查看物流</button>
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
                        <!-- 已退款 -->
                        <!-- <div class="ordertypeTK">
                              <button class="btngrey btnleft">联系客服</button>
                              <button class="btngrey">查看详情</button>
                        </div> -->
                        
                  </div>
            </div>
            <!-- 订单信息 -->
            <div class="orderInfo">
                  <ul class="orderInfoItem">
                        <li><span>订单编号：</span> 20180001112</li>
                        <li><span>下单时间：</span> 2018-08-05 18:06:06</li>
                        <li><span>取消时间：</span> 2018-08-05 18:06:06</li>
                  </ul>
                  <!-- 配送方式 -->
                  <div class="giveMethod">
                        配送方式：快递运输
                  </div>
                  <!-- 支付方式 -->
                  <ul class="paymethod">
                        <li><span>支付方式</span> 微信支付</li>
                        <li><span>支付时间</span> 2018-08-05 18:06:06</li>
                  </ul>
                  <!-- 完成时间 -->
                  <div class="finishtime">
                        完成时间：2018-08-05 18:06:06
                  </div>
            </div>
      </div>
</template>
<script>
export default {
  methods: {
    gotLogistics() {
      this.$router.push({ name: 'logistics' });
    },
    goApplyRefund() {
      this.$router.push({ name: 'applyrefund' });
    }
  }
};
</script>
<style lang="less" scoped>
.orderdetailpage {
  background: #f0f0f0;
  overflow-y: scroll;
  .logistics {
    width: 710px;
    margin: 116px auto 16px;
    padding: 0 30px;
    border-radius: 10px;
    background: #ffffff;
    font-size: 24px;
    .logitem {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      > div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
      }
      .rightarrow {
        width: 18px;
        height: 18px;
        margin-top: 30px;
      }
    }
    .logInfo {
      max-width: 500px;
    }
    img {
      display: inline;
      width: 36px;
      height: 36px;
      margin-right: 20px;
    }
    p {
      margin-left: 62px;
      margin-top: 10px;
    }
  }
  .logisticsInfo {
    margin-bottom: 60px;
    padding-top: 34px;
    span {
      color: #666666;
      padding-top: 6px;
    }
    p {
      color: #999999;
    }
  }
  .receiverInfo {
    padding-bottom: 40px;
    span {
      color: #666666;
      font-weight: bold;
      display: inline;
    }
    span.phone {
      margin-left: 100px;
    }
    p {
      color: #999999;
    }
  }
  .listitem {
    background: #ffffff;
    margin-bottom: 16px;
    position: relative;
    z-index: 2;
    .itemtitle {
      padding: 0 30px;
      height: 64px;
      line-height: 64px;
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
      padding: 20px 30px 0;
      background: #ffffff;
      border-bottom: 2px solid #cccccc;
      margin-bottom: 16px;
      li {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        font-size: 20px;
        color: #666666;
        margin-bottom: 20px;
      }
      li.realPaymoney {
        font-size: 24px;
        color: #333333;
        .paymoney {
          color: #faa0a0;
        }
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
        margin-top: 5px;
      }
      .btnleft {
        margin-right: 30px;
      }
      .flexleft {
        float: left;
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
  .orderInfo {
    background: #ffffff;
    font-size: 24px;
    color: #666666;
    margin-bottom: 20px;
    .orderInfoItem {
      border-bottom: 2px solid #cccccc;
      padding: 30px 30px 0;
      li {
        margin-bottom: 20px;
      }
      li:last-child {
        margin-bottom: 30px;
      }
    }
    .giveMethod {
      padding: 30px;
      border-bottom: 2px solid #cccccc;
    }
    .paymethod {
      border-bottom: 2px solid #cccccc;
      padding: 30px 30px 0;
      li {
        margin-bottom: 20px;
      }
    }
    .finishtime {
      padding: 30px;
      border-bottom: 2px solid #cccccc;
    }
  }
}
</style>

