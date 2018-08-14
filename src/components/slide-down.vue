<template>
  <mt-popup v-model="visible" position="top" class="slide" :modal="modal">
    <div class="slide-content">
      <slot></slot>
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
      modal: {
        type: Boolean,
        default: true
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
    width: 100%;
    top: 96px;
    &-content {
      padding: 20px;
      max-height: 600px;
      overflow-y: auto;
    }
  }
</style>

