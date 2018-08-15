<template>
  <mt-popup v-model="visible" position="bottom" class="slide">
    <div v-show="title" class="slide-title">{{title}}</div>
    <div class="slide-content">
      <slot></slot>
    </div>
    <div class="btns">
      <button class="btn" :class="{active: isConfirm}" @click="isConfirm && confirm()">确定</button>
    </div>
  </mt-popup>
</template>

<script type="text/babel">
  export default {
    props: {
      value: {
        type: Boolean,
        required: true
      },
      isConfirm: {
        type: Boolean,
        default: true
      },
      title: {
        type: String
      }
    },
    data() {
      return {
        visible: false
      };
    },
    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit('input', val);
      }
    },
    methods: {
      confirm() {
        this.visible = false;
        this.$emit('confirm');
      }
    }
  };
</script>

<style lang="less" scoped>
  .slide {
    border-radius: 20px 20px 0 0;
    width: 100%;
    &-title {
      color: #666;
      font-size: 30px;
      height: 120px;
      line-height: 120px;
      text-align: center;
    }
    &-content {
      padding: 20px;
      max-height: 70%;
      overflow-y: auto;
    }
  }

  .btns {
    padding: 14px 20px;
    .btn {
      height: 68px;
      font-size: 30px;
    }
  }
</style>

