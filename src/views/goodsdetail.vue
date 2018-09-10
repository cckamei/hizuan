<template>
  <div class="goods-detail pb" @click.stop="menusVisible = false">
    <v-header-goods back v-show="top <= 10">
      <div slot="menus" class="menus">
        <div @click="$router.push({name: 'cart'})" class="menu"><img src="~assets/goods/button_cart_r.png" alt=""></div>
        <div class="menu" @click.stop="menusVisible = !menusVisible"><img src="~assets/goods/button_option.png" alt=""></div>
      </div>
    </v-header-goods>
    <v-header-menus back shadow v-show="top > 10">
      <span class="sub-title" :class="{active: top < offsetTops[1]}" @click="setTop(0)">商品</span>
      <span class="sub-title" :class="{active: top >= offsetTops[1] && top < offsetTops[2]}" @click="setTop(1)">详情</span>
      <span class="sub-title" :class="{active: top >= offsetTops[2]}" @click="setTop(2)">推荐</span>
      <div slot="menus" class="menus">
        <div @click="goCart" class="menu"><img src="~assets/goods/button_cart_g.png" alt=""></div>
        <div class="menu" @click.stop="menusVisible = !menusVisible"><img src="~assets/goods/button_option_g.png" alt=""></div>
      </div>
    </v-header-menus>
    <div class="content" @scroll="scroll">
      <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item v-for="(item, index) in res.bannerList" :key="index">
          <img :src="item" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="info">
        <div class="price">
          <i>￥</i>{{res.price | currency}}
          <img @click="wxShare" class="right" src="~assets/goods/button_share.png" alt="">
        </div>
        <button class="tag">七夕蜜语 浪漫大促</button>
        <div class="name">{{res.goods_title}}</div>
        <div class="desc">{{res.sub_title}}</div>
        <ul class="mark flex">
          <li class="flex" v-if="res.is_new"><img src="~assets/goods/icon_hook_mini.png" alt=""><span>新款上架</span></li>
          <li class="flex" v-if="res.is_shop_same"><img src="~assets/goods/icon_hook_mini.png" alt=""><span>专柜同款</span></li>
        </ul>
        <div class="courier">
          <span>快递:{{22 | currency}}元</span>
          <span class="right">广东深圳</span>
        </div>
      </div>
      <div class="gap"></div>
      <div class="row">
        <v-form-slide-up label="领取优惠" title="领取优惠" @confirm="handleBenifit">
          <template slot="value">
            <button v-for="card in res.benifit" v-if="card.use" class="benifit-btn">满{{card.limit}}减{{card.price}}</button>
          </template>
          <ul>
            <li v-for="(card, index) in res.benifit">
              <v-card :card="card"></v-card>
            </li>
          </ul>
        </v-form-slide-up>
      </div>
      <div class="row" v-if="0">
        <v-form-slide-up label="促销活动" title="促销活动">
          <template slot="value">
            <button class="activity-btn">{{res.activity[0].title}}</button>{{res.activity[0].desc}}
          </template>
          <ul class="activity">
            <li class="flex" v-for="(item, index) in res.activity">
              <button class="activity-btn">{{item.title}}</button>{{item.desc}}
            </li>
          </ul>
        </v-form-slide-up>
      </div>
      <div class="row activity" v-if="res.activity.length > 1">
        <div class="flex" v-for="(item, index) in res.activity" v-if="index > 0">
          <button class="activity-btn">{{item.title}}</button>{{item.desc}}
        </div>
      </div>
      <div class="gap"></div>
      <div class="row">
        <v-form-slide-up label="商品规格" v-model="reqData.sku" :placeholder="`选择 ${isZuan ? '主钻分数；钻石净度；' : '主石名称；主石评级；'}颜色；规格；数量`" @confirm="handleSKU">
          <ul class="sku">
            <li class="sku-icon flex">
              <img class="icon" src="~assets/goods/orderlistonly.png" alt="">
              <div>
                <div class="price"><span>￥</span>{{res.price | currency}}</div>
                <span class="code">商品编号：{{sku.merchant_code}}</span>
              </div>
            </li>
            <li>
              <div class="title">{{isZuan ? '主钻分数' : '主石名称'}}</div>
              <v-button-radio v-model="sku.scoreIndex" :list="res.skuScore" :cancel="true"></v-button-radio>
            </li>
            <li>
              <div class="title">{{isZuan ? '钻石净度' : '主石评级'}}</div>
              <v-button-radio v-model="sku.clarityIndex" :list="res.skuClarity" :cancel="true"></v-button-radio>
            </li>
            <li>
              <div class="title">颜色</div>
              <v-button-radio v-model="sku.colorIndex" :list="res.skuColor" :cancel="true"></v-button-radio>
            </li>
            <li>
              <div class="title">规格</div>
              <v-button-radio v-model="sku.specIndex" :list="res.skuSpec" :cancel="true"></v-button-radio>
            </li>
            <li class="count flex">
              <span>数量</span>
              <div class="flex">
                <div @click="reqData.count > 1 && reqData.count--" class="btn minus" :class="{active: reqData.count > 1}"></div>
                <input v-model="reqData.count" type="text" readonly>
                <div @click="reqData.count < limit && reqData.count++" class="btn plus" :class="{active: reqData.count < limit}"></div>
              </div>
            </li>
          </ul>
        </v-form-slide-up>
      </div>
      <div class="row">
        <v-form-slide-up label="商品参数" title="商品参数" placeholder="套系；款式；钻石切工；主钻形状；副钻形状‘副钻分数；镶嵌材质；镶嵌方式">
          <ul class="goods-param">
            <li class="flex">
              <span class="label">商品货号</span>
              <span class="value">{{res.merchant_code}}</span>
            </li>
            <li class="flex">
              <span class="label">套系</span>
              <span class="value">{{res.taoxi}}</span>
            </li>
            <li class="flex">
              <span class="label">款式</span>
              <span class="value">{{res.kuanshi}}</span>
            </li>
            <template v-if="isZuan">
              <li class="flex">
                <span class="label">钻石切工</span>
                <span class="value">{{res.zuanshiqiegong}}</span>
              </li>
              <li class="flex">
                <span class="label">主钻形状</span>
                <span class="value">{{res.zhuzuanxingzhuang}}</span>
              </li>
              <li class="flex">
                <span class="label">副钻形状</span>
                <span class="value">{{res.fuzuanxingzhuang || '无副钻'}}</span>
              </li>
              <li class="flex">
                <span class="label">副钻分数</span>
                <span class="value">{{res.fuzuanfenshu || '无副钻'}}</span>
              </li>
            </template>
            <li class="flex">
              <span class="label">镶嵌材质</span>
              <span class="value">{{res.xiangqiancaizhi}}</span>
            </li>
            <li class="flex">
              <span class="label">镶嵌方式</span>
              <span class="value">{{res.xiangqianfangshi}}</span>
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
      <div class="gap"></div>
      <div ref="image-text" class="section image-text">
        <div class="title flex"><span>图文详情</span></div>
        <!-- <div class="image-text-content" v-html="res.detail"> -->
        <div class="image-text-content">
          <!-- <img src="~assets/goods/pic_dring.png" alt="">
          <p>CC卡美婚嫁钻饰系列经悉心设计，力求象征中国从未消失一直存在的隽永感情。</p>
          <p>灵感取材于美对爱侣分享的幸福时刻。CC卡美创作的婚戒系列钻饰，每款设计都尽显美钻的锋芒火彩，将你的爱意表露无遗。
          </p> -->
          <img src="~assets/goods/goods_detail.jpg" alt="">
        </div>
      </div>
      <div class="gap"></div>
      <v-recommend class="section" ref="recommend" title="为你推荐" :list="res.recommend"></v-recommend>
    </div>
    <div class="footer flex">
      <div class="fun-btns" @click="goCustomService">
        <img src="~assets/goods/button_service.png" alt="">
        <span>客服</span>
      </div>
      <div class="fun-btns" @click="collect">
        <img src="~assets/goods/button_like.png" alt="">
        <span>收藏</span>
      </div>
      <div class="btn-group flex">
        <button class="btn cart" @click="addCart">加入购物车</button>
        <button class="btn purchase" @click="buyNow">立即购买</button>
      </div>
    </div>
    <v-menus v-model="menusVisible" :menus="['home', 'search', 'collect']"></v-menus>
    <v-scroll-top ref="scroll-top" v-model="topVisible" @top="(t)=> top = t"></v-scroll-top>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import $ from 'jquery';
  import ss from '../assets/goods/pic_guguring.png';
  import banner from '../assets/goods/pic_wring.png';

  export default {
    data() {
      return {
        menusVisible: false,
        topVisible: false,
        top: 0,
        offsetTops: [],
        isZuan: true,
        limit: 1,
        res: {
          bannerList: [banner, banner, banner],
          skuScore: [],
          skuClarity: [],
          skuColor: [],
          skuSpec: [],
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
            use: true,
            expiredStart: '2018.08.01',
            expiredEnd: '2018.09.01'
          }],
          activity: [{
            id: 1,
            title: '七夕牵线',
            desc: '满额免费购换小礼品'
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
        },
        sku: {
          scoreIndex: -1,
          clarityIndex: -1,
          colorIndex: -1,
          specIndex: -1
        },
        lettering: {
          disable: 1,
          text: '',
          remarks: ''
        },
        reqData: {
          lettering: '',
          benifit: '',
          count: 1,
          skuId: ''
        }
      };
    },
    created() {
      this.fetchGoodsDetail();
    },
    mounted() {
      setTimeout(() => {
        let headerHeight = 96 / window.htp.designWidth * window.screen.width;
        this.offsetTops = [0, Math.trunc(this.$refs['image-text'].offsetTop - headerHeight), Math.trunc(this.$refs['recommend'].$el.offsetTop - headerHeight)];
      }, 1000);
    },
    computed: {
      ...mapGetters(['getCommon', 'token'])
    },
    watch: {
      sku: {
        handler({ scoreIndex, clarityIndex, colorIndex, specIndex }) {
          let selectIndexes = [scoreIndex, clarityIndex, colorIndex, specIndex];
          [this.res.skuScore, this.res.skuClarity, this.res.skuColor, this.res.skuSpec].forEach((type, typeIndex) => {
            type.forEach((item, index) => {
              let arr = Object.assign([], selectIndexes);
              arr[typeIndex] = index;
              let reg = new RegExp(arr.join('_').replace(/-1/g, '[\\d]'), 'g');
              let result = this.res.skus.filter(sku => {
                return reg.test(sku.skuIds);
              });
              item.disabled = !result.length;
            });
          });
          selectIndexes.includes(-1);
          if(!selectIndexes.includes(-1)) {
            let { count, price, sku_id } = this.res.skus.filter(sku => selectIndexes.join('_') === sku.skuIds)[0];
            this.limit = count;
            this.reqData.count = Math.min(this.reqData.count, count);
            this.res.price = price;
            this.reqData.skuId = sku_id;
          } else {
            this.limit = 1;
            this.reqData.skuId = '';
          }
        },
        deep: true
      }
    },
    methods: {
      ...mapActions(['ajax']),
      fetchGoodsDetail() {
        this.ajax({
          name: 'goodsDetail',
          id: this.getCommon.goodsId
        }).then(() => {
          let res = {
            merchant_code: 'DRGC00208',
            taoxi: '婚嫁系列',
            "zhuzuanxingzhuang": "圆形",
            "price": 2998,
            "fuzuanxingzhuang": "无副钻",
            "is_shop_same": true,
            "xiangqiancaizhi": "Pt950铂金",
            "slide_img": [],
            "fuzuanfenshu": "无副钻",
            "goods_id": "5b851a4d1f30bfc39cddfc37",
            "category": "项链/坠",
            "is_new": true,
            "sub_title": "结而为约 · 有承诺的爱",
            "is_active": true,
            "kuanshi": "戒指",
            "img": banner,
            "skus": [
              {
                merchant_code: 'DRGC00208',
                "zuanshijingdu": "SI/小瑕",
                "price": 9000,
                "color": "H/白",
                "sku_id": "5b851b341f30bfc39cddfc3d",
                "zhushipingji": "主石评级1",
                "count": 3,
                "weight_unit": "克拉",
                "guige": "女戒-11号",
                "zhushimingcheng": "主石名称11",
                "zhuzuanfenshu": "18分",
                "weight_value": 0.2,
                "default": true
              },
              {
                merchant_code: 'DRGC00208',
                "zuanshijingdu": "SI/小瑕",
                "price": 6666,
                "color": "F-G/优白",
                "sku_id": "5b8d40aa8263913b53665a16",
                "zhushipingji": "主石评级32",
                "count": 4,
                "weight_unit": "克拉",
                "guige": "女戒-12号",
                "zhushimingcheng": "主石名称21",
                "zhuzuanfenshu": "25分",
                "weight_value": 0.3,
                "default": true
              },
              {
                merchant_code: 'DRGC00208',
                "zuanshijingdu": "VS/微瑕",
                "price": 9999,
                "color": "I-J/淡白",
                "sku_id": "5b8d40dd8263913b518463f4",
                "zhushipingji": "主石评级13",
                "count": 5,
                "weight_unit": "克拉",
                "guige": "女戒-13号",
                "zhushimingcheng": "主石名称3",
                "zhuzuanfenshu": "30分",
                "weight_value": 0.4,
                "default": true
              },
              {
                merchant_code: 'DRGC00208',
                "zuanshijingdu": "VVS/极微瑕",
                "price": 8888,
                "color": "D-E/极白",
                "sku_id": "5b8d40f78263913b565434ec",
                "zhushipingji": "主石评级4",
                "count": 8,
                "weight_unit": "克拉",
                "guige": "女戒-14号",
                "zhushimingcheng": "主石名称2",
                "zhuzuanfenshu": "40分",
                "weight_value": 0.4,
                "default": true
              },
              {
                "zuanshijingdu": "VVS/极微瑕",
                "price": 4,
                "color": "D-E/极白",
                "sku_id": "5b8d40f78263913b565434ec",
                "zhushipingji": "主石评级4",
                "count": 8,
                "weight_unit": "克拉",
                "guige": "女戒-15号",
                "zhushimingcheng": "主石名称2",
                "zhuzuanfenshu": "40分",
                "weight_value": 0.4,
                "default": true
              }
            ],
            "zuanshiqiegong": "完美",
            "goods_title": "CC卡美婚嫁精品钻戒",
            "detail": "<p>醒狮MeiMei经典款项链/坠</p>\n\n<p>&nbsp;</p>\n\n<p>传承中国传统文化，以纯天然色贝母拼成，打造印象派艺术画风的时尚单品</p>\n",
            "xiangqianfangshi": "单钻"
          };

          Object.assign(this.res, res);
          // this.res.bannerList = res.slide_img;
          let skuScore = [];
          let skuClarity = [];
          let skuColor = [];
          let skuSpec = [];

          res.skus.forEach((item, index) => {
            this.isZuan = !!item.zuanshijingdu;
            if(this.isZuan) {
              if(item.zhuzuanfenshu) {
                skuScore.push(item.zhuzuanfenshu);
              }
              if(item.zuanshijingdu) {
                skuClarity.push(item.zuanshijingdu);
              }
            } else {
              if(item.zhushimingcheng) {
                skuScore.push(item.zhushimingcheng);
              }
              if(item.zhushipingji) {
                skuClarity.push(item.zhushipingji);
              }
            }
            if(item.color) {
              skuColor.push(item.color);
            }
            if(item.guige) {
              skuSpec.push(item.guige);
            }
          });

          skuScore = [...new Set(skuScore)];
          skuClarity = [...new Set(skuClarity)];
          skuColor = [...new Set(skuColor)];
          skuSpec = [...new Set(skuSpec)];

          res.skus.forEach(item => {
            if(this.isZuan) {
              item.skuIds = [
                skuScore.indexOf(item.zhuzuanfenshu),
                skuClarity.indexOf(item.zuanshijingdu),
                skuColor.indexOf(item.color),
                skuSpec.indexOf(item.guige)
              ].join('_');
            } else {
              item.skuIds = [
                skuScore.indexOf(item.zhushimingcheng),
                skuClarity.indexOf(item.zhushipingji),
                skuColor.indexOf(item.color),
                skuSpec.indexOf(item.guige)
              ].join('_');
            }
          });

          this.res.skuScore = skuScore.map(item => ({ label: item, disabled: false }));
          this.res.skuClarity = skuClarity.map(item => ({ label: item, disabled: false }));
          this.res.skuColor = skuColor.map(item => ({ label: item, disabled: false }));
          this.res.skuSpec = skuSpec.map(item => ({ label: item, disabled: false }));
          // this.reqData.skuId = this.res.goods_id;

          this.reqData.benifit = this.res.benifit.map(item => item.id);
        });
      },
      handleSKU() { },
      handleLettering() {
        let disable = this.lettering.disable ? '否' : '是';
        this.reqData.lettering = this.lettering.disable ? '' : `刻字 ${this.lettering.text}；要求 ${this.lettering.remarks}`;
      },
      handleBenifit() {
        this.reqData.benifit = this.res.benifit.map(item => item.id);
      },
      scroll() {
        this.$refs['scroll-top'].scroll();
      },
      setTop(index) {
        $('.content').animate({
          scrollTop: this.offsetTops[index]
        }, 200);
      },
      buyNow() {
        if(!this.token) {
          this.$router.push({ name: 'login' });
          return false;
        }

        if(!this.reqData.skuId) {
          this.toast('请选择商品规格');
          return false;
        }

        this.$router.push({ name: 'confirmorder' });
      },
      collect() {
        if(!this.token) {
          this.$router.push({ name: 'login' });
          return false;
        }

        if(!this.reqData.skuId) {
          this.toast('请选择商品规格');
          return false;
        }

        this.ajax({
          name: 'collect',
          data: {
            'collect_id': this.reqData.skuId
          }
        }).then(res => {
          this.toast('收藏成功！');
        });
      },
      goCart() {
        if(!this.token) {
          this.$router.push({ name: 'login' });
          return false;
        }

        this.$router.push({ name: 'cart' });
      },
      addCart() {
        if(!this.token) {
          this.$router.push({ name: 'login' });
          return false;
        }

        if(!this.reqData.skuId) {
          this.toast('请选择商品规格');
          return false;
        }

        this.ajax({
          name: 'addCart',
          data: {
            'cart_id': this.reqData.skuId,
            num: this.reqData.count
          }
        }).then(res => {
          this.toast('已加入购物车');
        });
      },
      wxShare() {
        this.toast('暂未开放');
      },
      goCustomService() {
        this.toast('暂未开放');
      }
    }
  };
</script>

<style lang="less" scoped>
  .goods-detail {
    background-color: #fff;
  }

  .content {
    padding-bottom: 120px;
    background-color: #f3f3f3;
  }

  .gap {
    height: 16px;
    background-color: #f3f3f3;
  }

  .sub-title {
    font-size: 30px;
    color: #999;
    padding: 0 20px;
    &.active {
      color: #666;
    }
  }

  .banner {
    height: 600px;
  }

  .info {
    padding: 30px;
    background-color: #fff;
    .price {
      color: #cdb49b;
      font-size: 42px;
      span {
        font-size: 30px;
      }
      img {
        width: 40px;
        height: 40px;
        padding: 20px;
        margin-top: -10px;
      }
    }
    .tag {
      color: #fff;
      background-color: #faa0a0;
      border-radius: 20px;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      padding: 0 12px;
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
    background-color: #fff;
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

    &.activity {
      padding-top: 10px;
      height: auto;
      font-size: 24px;
      .flex {
        justify-content: flex-end;
        padding-right: 40px;
        padding-bottom: 30px;
      }
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

  .section {
    &.image-text {
      background-color: #fff;
      padding: 0 10px;
      img {
        padding-bottom: 10px;
      }
      p {
        color: #666;
        text-indent: 50px;
        padding: 0 20px 30px 20px;
      }
    }
    .title {
      position: relative;
      height: 84px;
      font-size: 24px;
      color: #ccc;
      width: 100%;
      justify-content: center;
      &:after {
        content: '';
        left: 30px;
        right: 30px;
        height: 1px; /*no*/
        background-color: #f0f0f0;
        display: block;
        top: 50%;
        position: absolute;
      }
      span {
        padding: 0 30px;
        background-color: #fff;
        z-index: 1;
      }
    }
  }

  .footer {
    padding: 0 20px 0 15px;
    height: 96px;
    box-shadow: 0 -10px 50px 10px rgba(170, 170, 170, 0.5);
    .fun-btns {
      padding: 0 43px;
      font-size: 20px;
      color: #999;
      img {
        width: 40px;
        height: 40px;
        display: block;
      }
    }
    .btn-group {
      font-size: 30px;
      height: 68px;
      width: 440px;
      margin-left: auto;
      .btn {
        color: #fff;
        width: 50%;
        height: 100%;
        font-size: 30px;
        &.cart {
          background: url('~assets/goods/button_cart.png') no-repeat;
          background-size: 100% 100%;
        }
        &.purchase {
          background: url('~assets/goods/button_buynow.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
</style>

<style lang="less" scoped>
  /*popup内部的里面元素的样式直接放到该页面的根部 否则样式在手机上无效*/
  .activity-btn {
    border-radius: 12px;
    background-color: #fff;
    font-size: 16px;
    padding: 0 12px;
    color: #cdb49b;
    border: 1px solid #cdb49b; /*no*/
    margin-right: 8px;
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

  .activity {
    li {
      height: 84px;
      font-size: 24px;
      color: #666;
      padding: 0 20px;
      border-bottom: 1px solid #f0f0f0; /*no*/
      &:last-child {
        border: none;
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
</style>


<style lang="less">
  .goods-detail {
    .lettering-enable {
      button {
        width: 272px;
      }
    }

    .image-text {
      p {
        color: #666;
        text-indent: 50px;
        padding: 0 20px 30px 20px;
      }
    }
  }
</style>

