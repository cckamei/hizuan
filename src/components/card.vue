<template>
  <div class="card flex" @click="nextCardDetail">
    <div class="col1">
      <template v-if="cardInfo.cardType == 'Q1'">
        <span class="fs-24">{{cardInfo.rate}}</span><span class="fs-12">折</span><br /><span class="fs-11">{{cardTypeName}}</span>
      </template>
      <template v-if="cardInfo.cardType == 'Q2'">
        <span class="fs-12">¥</span><span class="fs-24">{{cardInfo.orginalPrice}}</span><br /><span class="fs-11">{{cardTypeName}}</span>
      </template>
      <template v-if="cardInfo.cardType == 'Q3'">{{cardTypeName}}</template>
    </div>
    <div class="col2 flex-auto">
      <div class="card-limit">{{cardInfo._cardLimit}}</div>
      <span class="card-time">{{cardInfo._cardTime}}</span>
    </div>
    <div class="col3">
      <button class="btn" @click.stop="receiveCard" :class="{disabled: !cardInfo.btnStatus}">{{btnTxt}}</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        cardInfo: {},
        //cardType  Q1折扣，Q2优惠，Q3礼品
        cardDict: {
          'Q1': '折扣券',
          'Q2': '优惠券',
          'Q3': '礼品券'
        }
      };
    },
    props: ['card', 'shop'],
    created() {
      this.cardInfo = this.card;
      this.$set(this.cardInfo, 'btnStatus', 2); //2:可领取， 1再领一张  0已领光
      this.handleCard();
    },
    computed: {
      ...mapGetters(['session']),
      //卡券类型名称
      cardTypeName() {
        return this.cardDict[this.cardInfo.cardType];
      },
      //按钮名称
      btnTxt() {
        return ['已领取', '再领一张', '免费领取'][this.cardInfo.btnStatus];
      }
    },
    methods: {
      ...mapActions(['_cardInfo', '_shopInfo', '_ajax']),
      //处理数据
      handleCard() {
        let cardInfo = this.cardInfo;
        let cardLimitStr = ''; //限制条件
        let cardTimeStr = ''; //有效时间
        let unUseDayStr = ''; //不可用日
        let useTimeStr = ''; //可用时间段
        let useDayArr = cardInfo.useDate.split('#');

        if(cardInfo.cost) {
          cardLimitStr = '满' + cardInfo.cost + '元可用';
        } else {
          cardLimitStr = '无最低消费限制';
        }

        if(cardInfo.useType == 1) {
          cardTimeStr = cardInfo.useDate.split('#').slice(0, 2).join('至');
        } else {
          cardTimeStr = '领取后' + (useDayArr[0] == 0 ? '当天' : useDayArr[0] + '天后') + '生效，' + useDayArr[1] + '天内有效';
        }

        if(useDayArr[2] != 0) {
          let reg = new RegExp('[' + useDayArr[2].split(',').join('') + ']', 'g');

          unUseDayStr = '1234567'.replace(reg, '').replace(/[1234567]/g, res => {
            return '周' + '一二三四五六日'.split('')[res - 1] + '、';
          }).replace(/、$/, '') + '不可用';
        }

        if(cardInfo.time.length) {
          useTimeStr = cardInfo.time.join('、').replace(/#/g, '至');
        }

        this.card._cardLimit = cardLimitStr;
        this.card._cardTime = cardTimeStr;
        this.card._unUseDay = unUseDayStr;
        this.card._useTime = useTimeStr;
      },
      //进入卡券详情
      nextCardDetail() {
        this._cardInfo(this.cardInfo);
        this.shop && this._shopInfo(this.shop);
        this.$router.push('carddetail');
      },
      //领取卡券
      receiveCard() {
        if(!this.session) {
          this.$router.push('login');
          return false;
        }

        if(!this.cardInfo.btnStatus) {
          return false;
        }

        this.loading.open();
        this._ajax({
          name: 'receiveCard',
          options: {
            cardId: this.cardInfo.cardId
          }
        }).then(res => {
          this.msg(res.info);
          this.loading.close();
          if(res.over >= 1) {
            this.cardInfo.btnStatus = 1;
          } else {
            this.cardInfo.btnStatus = 0;
          }
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .card {
    background-color: #fff8f5;
    border: 1px solid #f1d8ce;
    border-radius: 0.1rem;
    padding: 0.12rem 0;
    .col1 {
      width: 1.3rem;
      text-align: center;
      color: #fd5615;
      .fs-24 {
        font-size: 0.48rem;
      }
    }
    .col2 {
      padding: 0.1rem;
      border-right: 1px dashed #f1d8ce;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        right: -0.12rem;
        top: -0.12rem;
        width: 0.24rem;
        height: 0.12rem;
        border-radius: 0 0 0.5rem 0.5rem;
        background-color: #fff;
        display: block;
        border: 1px solid #f1d8ce;
        border-top: 1px solid #fff;
        transform: translate(1px, -1px);
      }
      &:after {
        content: '';
        position: absolute;
        right: -0.12rem;
        bottom: -0.12rem;
        width: 0.24rem;
        height: 0.12rem;
        border-radius: 0.5rem 0.5rem 0 0;
        background-color: #fff;
        display: block;
        border: 1px solid #f1d8ce;
        border-bottom: 1px solid #fff;
        transform: translate(1px, 1px);
      }
      .card-limit {
        font-size: 0.3rem;
        color: #fd5615;
        padding-bottom: 0.18rem;
      }
      .card-time {
        font-size: 0.22rem;
        color: #999;
      }
    }
    .col3 {
      width: 1.75rem;
      text-align: center;
      .btn {
        width: 1.3rem;
        height: 0.5rem;
        color: #fff;
        background-color: #fd5615;
        font-size: 0.24rem;
        border-radius: 0.25rem;
      }
    }
  }
</style>


