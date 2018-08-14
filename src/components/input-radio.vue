<template>
  <ul>
    <li class="flex" v-for="(item, index) in list" @click="selectIndex = index" :key="index">
      <span>{{typeof item === 'string' ? item : item[keyName]}}</span>
      <img v-show="index === selectIndex" src="~assets/goods/icon_selected.png" alt="">
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        required: true
      },
      list: {
        type: Array,
        required: true
      },
      keyName: {
        type: String,
        default: 'label'
      }
    },
    data() {
      return {
        selectIndex: -1
      };
    },
    watch: {
      value(val) {
        this.selectIndex = val;
      },
      selectIndex(val) {
        this.$emit('input', this.selectIndex);
      }
    }
  };
</script>

<style lang="less" scoped>
  ul {
    li {
      font-size: 24px;
      color: #666;
      height: 84px;
      padding: 0 16px;
      border-bottom: 1px solid #f0f0f0; /*no*/
      justify-content: space-between;
      &:last-child {
        border-bottom: 0;
      }
      img {
        width: 36px;
        height: 36px;
      }
    }
  }
</style>


