<template>
  <div class="popup" :style="{height: visible ? cententHeight + 'px' : 0}">
    <div class="popup-header flex" @click="$emit('all', goods.type)">
      <img src="~assets/home/icon_all_arrow.png" alt=""><span>查看全部</span>
    </div>
    <div class="popup-content">
      <ul>
        <li v-for="(item, index) in goods.goodsList" :key="index" class="flex">
          <div class="img"><img :src="item.src" alt=""></div>
          <div class="detail flex-auto flex">
            <span class="name">{{item.name}}</span>
            <span class="desc">{{item.desc}}</span>
            <span class="price">{{item.price}}</span>
          </div>
        </li>
      </ul>
      <div class="popup-close" @click="close">
        <img src="~assets/home/icon_draw.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        required: true
      },
      goods: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        visible: false
      };
    },
    computed: {
      cententHeight() {
        return (70 + 20 * 2 + 200 * this.goods.goodsList.length + 30 * (this.goods.goodsList.length - 1)) / window.htp.designWidth * window.screen.width;
      }
    },
    watch: {
      value(val) {
        this.visible = val;
      }
    },
    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    }
  };
</script>

<style lang="less" scoped>
  .popup {
    overflow: hidden;
    transition: height 0.3s linear;
    &-header {
      height: 70px;
      justify-content: center;
      text-align: center;
      color: #cdb49b;
      background: linear-gradient(rgba(0, 0, 0, 0.1) 10%, #fff 40%);
      border-bottom: 1px solid #f0f0f0; /*no*/
      img {
        width: 18px;
        height: 18px;
        margin-right: 12px;
      }
    }
    &-content {
      padding: 20px 40px;
      background-color: #fff;
      position: relative;
      li {
        padding-bottom: 30px;
        .img {
          width: 240px;
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
          .name {
            font-size: 30px;
            color: #666;
          }
          .desc {
            font-size: 20px;
            color: #999;
            padding-top: 24px;
          }
          .price {
            font-size: 30px;
            color: #333;
            padding-top: 24px;
          }
        }
        &:last-child {
          padding-bottom: 0;
        }
      }
      .popup-close {
        height: 60px;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        img {
          margin-top: 10px;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
</style>

