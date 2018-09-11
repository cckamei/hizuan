<template>
  <div class="pt">
    <v-header>订单列表</v-header>
    <div class="content">
      <div class="listitem">
        <div class="itemtitle" @click="goDetail()">
          <div class="titleleft">
            <img src="~assets/mypage/icon_shop.png" alt="">
            <span>CC卡美珠宝</span>
          </div>
          <div class="listright">已取消</div>
        </div>
        <div class="itemcontent">
          <div class="contentleft">
            <img src="~assets/goods/pic_wring1.png" alt="">
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
            <img src="~assets/goods/pic_wring1.png" alt="">
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
          共1件商品 实付款： <span>￥18888.00</span> （含运费￥10.00）
        </div>
        <div class="itemfoot">
          <!-- 已取消 -->
          <!-- <div class="ordertypeQX">
                                    <button class="btngrey btnleft">联系客服</button>
                                    <button class="btngrey">再次购买</button>
                              </div> -->
          <!-- 退款中 -->
          <div class="ordertypeTK">
            <button class="btngrey btnleft">联系客服</button>
            <button class="btngrey" @click="goRefunddetail()">查看退款</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      };
    },
    created() {

    },
    methods: {
      //跳转订单详情
      goDetail() {
        this.$router.push({ name: 'refunddetail' });
      }
    }
  };
</script>
<style lang="less" scoped>
  .listitem {
    background: #ffffff;
    margin-bottom: 16px;
    .itemtitle {
      padding: 0 30px;
      height: 64px;
      line-height: 64px;
      margin-top: 20px;
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
          margin: 30px 0 20px;
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
</style>

