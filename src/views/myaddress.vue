<template>
  <div class="myaddress">
    <v-header>地址管理</v-header>
    <ul class="addresslist">
      <li v-for="(item, index) in addressList" :key="index">
        <div class="listleft">
          <div class="receiver">
            收货人：{{item.name}}<span>{{item.phone}}</span>
            <i v-if="item.code==1">默认</i>
          </div>
          <div class="address">
            <span>收货地址：</span>
            <p>{{item.province}}{{item.city}}{{item.district}}{{item.street}}</p>
          </div>
        </div>
        <div class="listright">
          <img src="~assets/mypage/button_edit_a.png" alt="" @click="editAddress(item)">
        </div>
      </li>
    </ul>
    <div class="btns fix">
      <button class="btn" :class="{active: isActive}" @click="isActive && confirm()">添加收货地址</button>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    data() {
      return {
        addressList: []
      };
    },
    created() {
      this.pageInit();
    },
    computed: {
      isActive() {
        return true;
      }
    },
    methods: {
      ...mapActions(['ajax']),
      pageInit() {
        this.ajax({
          name: 'getAddress'
        }).then(res => {
          let data = res;
          console.log(data, 9990);
          this.addressList = data;
        });
      },
      editAddress(item) {
        console.log(item, 456);
        this.$router.push({ name: 'editaddress', params: { item } });
      },
      confirm() {
        this.$router.push({ name: 'editaddress' });
      }
    }
  };
</script>
<style lang="less" scoped>
  .myaddress {
      overflow-y: auto;
      .addresslist {
          margin-top: 96px;
          background: #ffffff;
          li {
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              padding: 40px 30px;
              border-bottom: 2px solid #f0f0f0;
          }
          li:last-child {
              border-bottom: none;
          }
      }
      .listleft {
          width: 600px;
          .receiver {
              color: #666666;
              font-size: 30px;
              font-weight: bold;
              display: flex;
              flex-flow: row nowrap;
              justify-content: flex-start;
              span {
                  margin-left: 60px;
              }
              i {
                  width: 72px;
                  height: 30px;
                  line-height: 30px;
                  background: #e1c8af;
                  font-size: 20px;
                  color: #ffffff;
                  border-radius: 15px;
                  margin-left: 30px;
                  text-align: center;
              }
          }
          .address {
              display: flex;
              flex-flow: row nowrap;
              justify-content: flex-start;
              margin-top: 20px;
              font-size: 24px;
              color: #666666;
              span {
                  width: 120px;
              }
              p {
                  width: 460px;
              }
          }
      }
      .listright {
          width: 40px;
          padding-top: 40px;
          img {
              display: block;
              width: 40px;
              height: 40px;
          }
      }
  }
</style>

