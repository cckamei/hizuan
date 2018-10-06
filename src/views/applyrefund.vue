<template>
  <div class="applyrefundPage">
    <v-header>申请退款</v-header>
    <div class="pagecontent">
      <ul class=" refunditem refundGoods">
        <li>
          <span>订单内容：</span>
          <p>戒指戒指戒指戒指戒指 戒指戒指戒指戒指戒指 戒指戒指戒指戒指戒指 <span>共2件</span></p>
        </li>
        <li>
          <span>下单时间</span>
          <p>2018-08-08 16：08：08</p>
        </li>
        <li>
          <span>总金额：</span>
          <p>4563.00元</p>
        </li>
      </ul>
      <div class="refunditem applyreason">
        <div class="reasonchoice">
          <span>申请原因</span>
          <p>
            <input type="text" v-model="reqData.reason" placeholder="请选择申请原因" @click="visible = true" readonly />
            <img src="~assets/mypage/icon_arrow_r_s.png" alt="">
                              </p>

            <v-slide-up v-model="visible" title="选择申请原因" @confirm="confirm" :isConfirm="selectedIndex !== -1">
              <v-input-radio v-model="selectedIndex" :list="reasonlist"></v-input-radio>
            </v-slide-up>
        </div>
        <p>如需退货请注意保持商品的完好，建议您先与买家沟通</p>
        <h1>问题描述</h1>
        <textarea placeholder="请描述申请退款的详细信息，不超过500字（选填）"></textarea>
      </div>
      <div class="refunditem">
        <ul class="refundMessage">
          <li>
            <label>联系人</label>
            <input type="text" v-model="reqData.linkman" maxlength="6" placeholder="请填写退款联系人姓名"/>
                              </li>
          <li>
            <label>联系人电话</label>
            <input type="text" v-model="reqData.linkphone" maxlength="11" placeholder="请填写联系人手机号"/>
                              </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectedIndex: -1,
        visible: false,
        reasonlist: ['拍错货/产品规格选错/数量填错', '联系信息填错/地址填错', '发错货/发漏货', '产品发生损坏/有质量问题', '不喜欢/不想要'],
        reqData: {
          reason: '',
          linkman: '',
          linkphone: ''
        }
      };
    },
    methods: {
      confirm() {
        let selected = this.reasonlist[this.selectedIndex];
        this.reqData.reason = typeof selected === 'string' ? selected : selected[this.keyName];
        this.$emit('input', this.selectedIndex);
      }
    }
  };
</script>
<style lang="less" scoped>
  .applyrefundPage {
    .pagecontent {
      padding: 0 20px;
    }
    .refunditem {
      background: #ffffff;
      border-radius: 10px;
      margin-bottom: 16px;
    }
    .refundGoods {
      margin-top: 96px;
      padding: 40px 20px;
      li {
        padding: 0 20px;
        display: flex;
        flex-flow: row nowrap;
        font-size: 24px;
        color: #666666;
        margin-bottom: 20px;
        span {
          width: 120px;
        }
        p {
          width: 500px;
          span {
            display: inline;
            margin-left: 10px;
          }
        }
      }
      li:last-child {
        padding: 0 20px;
        display: flex;
        flex-flow: row nowrap;
        font-size: 30px;
        color: #333333;
        margin-bottom: 20px;
      }
    }
    .applyreason {
      padding: 0 20px 30px;
      .reasonchoice {
        font-size: 24px;
        color: #666666;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        p {
          text-align: right;
        }
        img {
          width: 18px;
          height: 18px;
          margin-left: 15px;
        }
        input {
          text-align: right;
          width: 300px;
          color: #999999;
        }
      }
      p {
        margin-top: 20px;
        color: #cdb49b;
        font-size: 20px;
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 30px;
      }
      h1 {
        font-size: 24px;
        color: #666666;
        margin: 30px 0;
        font-weight: normal;
      }
      textarea {
        background: #f5f5f5;
        border-radius: 10px;
        height: 240px;
        padding: 30px;
        font-size: 24px;
        color: #999999;
      }
    }
    .refundMessage {
      padding: 10px 20px;
      border-radius: 10px;
      li {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 84px;
        line-height: 84px;
        border-bottom: 2px solid #f0f0f0;
        label {
          color: #666666;
        }
        input {
          width: 300px;
          height: 100%;
          text-align: right;
          color: #999999;
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
</style>

