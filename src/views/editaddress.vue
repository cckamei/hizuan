<template>
      <div class="editaddress">
            <v-header>
                  {{ isEdit ? "编辑地址" : "添加地址" }}
                  <div slot="headright" v-if="isEdit">
                        <span class="deleteAddresss" @click="delteAddress()">删除</span>
                  </div>
            </v-header>
            <ul class="form">
                  <li>
                        <v-form-input label="姓名" v-model="reqData.name" maxlength="4" placeholder="请填写收货人姓名"></v-form-input>
                  </li>
                  <li>
                        <v-form-input label="手机号" v-model="reqData.phone" maxlength="11" placeholder="请填写收货人手机号"></v-form-input>
                  </li>
                  <li>
                        <!-- <v-form-select label="所在地区" title="选择地区" v-model="address" :list="addressList" placeholder="请选择收货人所在地区"></v-form-select> -->
                  </li>
                  <li>
                        <v-form-input label="详细地址" v-model="reqData.street" maxlength="6" placeholder="请填写街道、楼牌号等信息"></v-form-input>
                  </li>
                  <li>
                        <label>设为默认</label>
                        <span><mt-switch v-model="reqData.lock"></mt-switch></span>
                        
                  </li>
            </ul>
             <!-- <div class="btns">
                  <button class="btn" :class="{active: isActive}" @click="isActive && confirm()">确认提交</button>
            </div> -->
            <button @click="add()">添加地址</button>
      </div>
      
</template>
<script>
import { mapActions } from 'vuex';
export default {
      data() {
            return {
                  isEdit: false,
                  reqData: {
                        // address: '',
                        phone: '15829296362',//手机号
                        province:'山西省',//省
                        name: 'A先生',//姓名
                        city: '太原市',//市
                        street: '子午大道',//街道
                        code: '0',
                        district: '朝阳区'//区
                  },
                  addressList: []
            };
      },
      created() {
            let item = this.$route.params.item;
            if(item) {
                  this.reqData = item;
                  this.isEdit = true;
            }
      },
      computed: {
            isActive() {
                  return this.reqData.address.length && this.reqData.username.length &&  this.reqData.phoneNumber.length && this.reqData.section.length;
            }
      },
      methods: {
            ...mapActions(["ajax"]),
            delteAddress() {
                  console.log(this.reqData,99999);
                  this.ajax({
                        name: 'delAdress',
                        data: {
                              address_id: this.reqData.id
                        }
                  }).then(res => {
                        console.log(res,789);
                  })
            },
            add() {
                  this.ajax({
                        name: 'addAdress',
                        data: this.reqData
                  }).then(res => {
                        console.log(res,789);
                  })
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

