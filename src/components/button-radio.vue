<template>
  <ul class="flex">
    <li v-for="(item, index) in list" @click="selectIndex = index" :key="index">
      <button @click="selectIndex = index" :class="{active: selectIndex === index}">{{typeof item === 'string' ? item : item[keyName]}}</button>
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
        selectIndex: 0
      };
    },
    watch: {
      value: {
        handler(val) {
          this.selectIndex = val;
        },
        immediate: true
      },
      selectIndex(val) {
        this.$emit('input', this.selectIndex);
      }
    }
  };
</script>

<style lang="less" scoped>
  ul {
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    li {
      padding: 30px 15px 0 15px;
      button {
        border-radius: 40px;
        background-color: #eee;
        font-size: 24px;
        color: #666;
        border: 1px solid #eee; /*no*/
        padding: 0 30px;
        height: 50px;
        &.active {
          background-color: #fff0f0;
          color: #faa0a0;
          border: 1px solid #faa0a0; /*no*/
        }
      }
    }
  }
</style>


