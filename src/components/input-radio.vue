<template>
  <ul>
    <li class="flex" v-for="(item, index) in radios" @click="selectIndex = index" :key="index">
      <span>{{item.label}}</span>
      <img v-show="index === selectIndex" src="~assets/goods/icon_selected.png" alt="">
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['value', 'list'],
    data() {
      return {
        selectIndex: -1
      };
    },
    created() {
      this.radios = this.list.map(item => {
        let label = '';
        let props = {};
        if(typeof item === 'string') {
          label = item;
          props = { value: item };
        } else {
          props = item;
          label = item.label;
        }
        return {
          ...props,
          label
        };
      });
    },
    watch: {
      selectIndex(val) {
        this.$emit('input', this.radios[val]);
      }
    }
  };
</script>

<style lang="less" scoped>
  ul {
    li {
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


