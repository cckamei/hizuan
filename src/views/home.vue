<template>
  <div>
    <div class="content">
      <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="activity"><img src="~assets/home/pic_ccx.png" alt=""></div>
      <ul>
        <li class="row1" v-for="(item, index) in imgList">
          <img @click="switchImg(item, index)" src="~assets/home/pic_cc1.png" alt="">
          <v-popup-list v-model="item.display" :goods="item.goodsList" @close="item.display = false"></v-popup-list>
        </li>
      </ul>
    </div>
    <div class="buttons flex">
      <div class="btn"><img src="~assets/home/button_home.png" alt=""></div>
      <button class="btn-txt btn-txt1">全部作品</button>
      <button class="btn-txt btn-txt2">无忧购</button>
      <div class="btn"><img src="~assets/home/button_my.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        activeIndex: -1,
        bannerList: ['', ''],
        imgList: [{
          src: '',
          display: false,
          goodsList: [{
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }, {
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }, {
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }]
        }, {
          src: '',
          display: false,
          goodsList: [{
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }, {
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }, {
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }]
        }, {
          src: '',
          display: false,
          goodsList: [{
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }, {
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }]
        }, {
          src: '',
          display: false,
          goodsList: [{
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }, {
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }, {
            src: '',
            name: '醒狮MeiMei项链/坠',
            desc: '玫瑰金，红玉髓，白珍珠贝母，钻石，黑玛瑙，紫玉',
            price: '￥6,666'
          }]
        }]
      };
    },
    methods: {
      ...mapActions(['ajax']),
      switchImg(item, index) {
        let temp = item.display;
        this.imgList.forEach(img => {
          img.display = false;
        });
        item.display = !temp;
        setTimeout(() => {
          let top = $('.content').scrollTop();
          let rect = $('.popup').get(index).getBoundingClientRect();
          let resultTop = top + rect.top - window.screen.height / 2 + rect.height / 2;
          $('.content').stop(true, true).animate({
            scrollTop: resultTop + 'px'
          }, 200);
        }, 300);
      }
    }
  };
</script>

<style lang="less" scoped>
  .banner {
    height: 450px;
  }

  .activity {
    height: 120px;
    border-bottom: 4px;
    img {
      height: 100%;
    }
  }

  li {
    margin-top: 4px;
    img {
      height: 220px;
    }
  }

  .buttons {
    position: absolute;
    width: 100%;
    bottom: 0;
    justify-content: center;
    padding: 24px 0;
    .btn {
      width: 60px;
      border-radius: 50%;
      background-color: #000;
    }
    .btn-txt {
      width: 160px;
      height: 60px;
      border-radius: 30px;
      background-color: rgba(255, 255, 255, 0.6);
      border: 0;
      &1 {
        margin: 0 24px 0 91px;
      }
      &2 {
        margin: 0 91px 0 24px;
      }
    }
  }
</style>
