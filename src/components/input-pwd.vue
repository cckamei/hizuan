<template>
  <div class="flex">
    <input v-if="!showPassword" :maxlength="maxlength" type="password" v-model="password" :placeholder="placeholder" />
    <input v-else :maxlength="maxlength" type="text" v-model="password" :placeholder="placeholder" />
    <div v-if="isDefined('eye')" class="icon" :class="{active: showPassword}" @click="showPassword = !showPassword"></div>
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'maxlength', 'eye'],
    data() {
      return {
        password: '',
        showPassword: false
      };
    },
    watch: {
      value() {
        this.password = value;
      },
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
      border: none;
    }
    .icon {
      width: 40px;
      height: 40px;
      background: ~"url('~assets/home/button_invisible.png') no-repeat center center/100%";
      &.active {
        background: ~"url('~assets/home/button_visible.png') no-repeat center center/100%";
      }
    }
  }
</style>


