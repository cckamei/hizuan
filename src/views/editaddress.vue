<template>
      <div class="editaddress">
            <v-header>
                  编辑地址
                  <div slot="headright">
                        <span class="deleteAddresss" @click="delteAddress()">删除</span>
                  </div>
            </v-header>
            <ul class="form">
                  <li>
                        <v-form-input label="姓名" v-model="reqData.username" maxlength="4" placeholder="请填写收货人姓名"></v-form-input>
                  </li>
                  <li>
                        <v-form-input label="手机号" v-model="reqData.phoneNumber" maxlength="20" placeholder="请填写收货人手机号"></v-form-input>
                  </li>
                  <li>
                        <v-form-datepicker label="所在地区" title="选择地区" v-model="reqData.section" format="yyyy 年 MM 月 dd 日" yearFormat="{value} 年" monthFormat="{value} 月" dateFormat="{value} 日" placeholder="请选择收货人所在地区"></v-form-datepicker>
                  </li>
                  <li>
                        <v-form-input label="详细地址" v-model="reqData.address" maxlength="6" placeholder="请填写街道、楼牌号等信息"></v-form-input>
                  </li>
                  <li>
                        <label>设为默认</label>
                        <span><mt-switch v-model="reqData.lock"></mt-switch></span>
                        
                  </li>
            </ul>
             <div class="btns">
                  <button class="btn" :class="{active: isActive}" @click="isActive && confirm()">确认提交</button>
            </div>
      </div>
      
</template>
<script>
export default {
      data() {
            return {
                  popupVisible: true,
                  reqData: {
                        address: '', //详细地址
                        username: '', //姓名
                        section: '', //所在地区
                        phoneNumber: '', //手机号
                        lock: false //职业
                  }
            };
      },
      computed: {
            isActive() {
                  return this.reqData.address.length && this.reqData.username.length &&  this.reqData.phoneNumber.length && this.reqData.section.length;
            }
      },
      methods: {
            delteAddress() {
                  console.log(99999);
            }
      }
};
</script>
<style lang="less" scoped>
.deleteAddresss {
  float: right;
  font-size: 28px;
  color: #999999;
}
.editaddress {
      .form {
            background-color: #fff;
            margin-top: 96px;
            li {
                  border-bottom: 1px solid #f0f0f0; /*no*/
                  padding: 0 20px;
                  height: 96px;
                  line-height: 96px;
                  font-size: 30px;
                  color: #999999;
                  &:last-child {
                        border-bottom: 0;
                  }
                  .input {
                        height: 100%;
                  }
                  
                  span {
                        float: right;
                        margin-top: 28px
                  }
            }
      }
}


</style>

