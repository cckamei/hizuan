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
                        <label>所在地区</label>
                        <input type="text" v-model="reqData.address"  placeholder="请选择收货人所在地区" readonly @click="visible = true">
                  </li>
                  <li>
                        <v-form-input label="详细地址" v-model="reqData.street" maxlength="6" placeholder="请填写街道、楼牌号等信息"></v-form-input>
                  </li>
                  <li>
                        <label>设为默认</label>
                        <span><mt-switch v-model="reqData.lock"></mt-switch></span>
                        
                  </li>
            </ul>
             <v-slide-up v-model="visible" title="选择区域" @confirm="confirm">
                   <ul class="addChoice">
                         <li>{{reqData.province}}</li>
                         <li>{{reqData.city}}</li>
                         <li>{{reqData.district}}</li>
                   </ul>
                   <ul class="addList">
                         <li v-for="(item,index) in adList" :key="index" :class="{actived: selectedIndex==index}" @click="choice(item,index)">{{item.name}}</li>
                   </ul>

            </v-slide-up>
             <!-- <div class="btns">
                  <button class="btn" :class="{active: isActive}" @click="isActive && confirm()">确认提交</button>
            </div> -->
            <!-- <button @click="add()">添加地址</button> -->
      </div>
      
</template>
<script>
import { mapActions } from 'vuex';
export default {
      data() {
            return {
                  addressId: '', //省市区id
                  addId: 0, //0:省份选择; 1:市区； 2：地区
                  isEdit: false,
                  selectedIndex: -1,
                  visible: false,
                  adList: [],
                  reqData: {
                        address: '',
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
            this.getProvince();
      },
      methods: {
            ...mapActions(["ajax"]),
            delteAddress() {
                  this.ajax({
                        name: 'delAdress',
                        data: {
                              address_id: this.reqData.id
                        }
                  }).then(res => {
                        console.log(res,789);
                  })
            },
            getProvince() {
                  this.ajax({
                        name: 'getProvince'
                  }).then(res => {
                        this.adList = res;
                  })
            },
            getCity() {
                  this.ajax({
                        name: 'getCity',
                        pre: this.addressId
                  }).then(res => {
                        this.adList = res;
                  })
            },
            getDistrict() {
                  this.ajax({
                        name: 'getDistrict',
                        pre: this.addressId
                  }).then(res => {
                        this.adList = res;
                  })
            },
            choice(item,index) {
                  this.selectedIndex = index;
                  this.addressId = item.id;
                  if(this.addId ==0) {
                        console.log(this.pre)
                        this.reqData.province = item.name;
                        this.addId =1;
                        this.getCity();
                  }else if(this.addId ==1) {
                        this.reqData.city = item.name
                        this.addId =2;
                        this.getDistrict();
                  }else {
                        this.reqData.district = item.name
                        this.addId =0;
                  }
            },
            confirm() {
                  let selected = this.list[this.selectedIndex];
                  this.reqData.address = typeof selected === 'string' ? selected : selected[this.keyName];
                  this.$emit('input', this.selectedIndex);
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
                  label {
                        float: left;
                  }
                  input {
                        float: right;
                        height: 100%;
                        text-align: right;
                        color: #666;
                        font-size: 32px;
                  }
            }
      }
}
.addList {
      margin-top: 10px;
      font-size: 24px;
      li {
            height: 64px;
            line-height: 64px;
            color: #666;
            
      }
      .actived {
            color: #faa0a0;
      }
}

</style>

