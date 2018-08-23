<template>
  <div class="pt">
    <v-header>选择地址</v-header>
    <div class="content">
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    methods: {
      ...mapActions(['ajax'])
    }
  };
</script>

<style lang="less" scoped>
</style>
