<template>
      <div class="myaddress">
            <v-header>地址管理</v-header>
            <ul class="addresslist">
                  <li>
                        <div class="listleft">
                              <div class="receiver">
                                    收货人：A先生<span>1231456987</span> <i>默认</i>
                              </div>
                              <div class="address">
                                    <span>收货地址：</span>
                                    <p>西安市西安市西安市西安市西安市西安市西安市西安市西安市</p>
                              </div>
                        </div>
                        <div class="listright">
                              <img src="~assets/mypage/button_edit_a.png" alt="" @click="editAddress()">
                        </div>
                        
                  </li>
                   <li>
                        <div class="listleft">
                              <div class="receiver">
                                    收货人：A先生<span>1231456987</span> <i>默认</i>
                              </div>
                              <div class="address">
                                    <span>收货地址：</span>
                                    <p>西安市西安市西安市西安市西安市西安市西安市西安市西安市</p>
                              </div>
                        </div>
                        <div class="listright">
                              <img src="~assets/mypage/button_edit_a.png" alt="">
                        </div>
                        
                  </li>
            </ul>
      </div>
</template>
<script>
export default {
      methods: {
            editAddress() {
                  this.$router.push({ name: 'editaddress' });
            }
      }
};
</script>
<style lang="less" scoped>
.myaddress {
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

