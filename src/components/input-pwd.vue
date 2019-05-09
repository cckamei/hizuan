<template>
  <div class="flex">
    <input v-if="!showPassword" :maxlength="maxlength" type="password" v-model="password" :placeholder="placeholder" />
    <input v-else :maxlength="maxlength" type="text" v-model="password" :placeholder="placeholder" />
    <div v-if="isDefined('eye')" class="icon" :class="{active: showPassword}" @click="showPassword = !showPassword"></div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      eye: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        password: '',
        showPassword: false
      };
    },
    watch: {
      password(val) {
        this.$emit('input', val);
      }
    },
    methods: {
      isDefined(val) {
        return this[val] !== undefined;
      }
    }
  };
</script>

<style lang="less" scoped>
  .flex {
    width: 100%;
    input {
      width: 100%;
      padding: 0 10px;
      font-size: 32px;
      color: #333;
    }
    .icon {
      width: 40px;
      height: 40px;
      background: ~"url('~@/assets/common/button_invisible.png') no-repeat center center/100%";
      &.active {
        background: ~"url('~@/assets/common/button_visible.png') no-repeat center center/100%";
      }
    }
  }
</style>


