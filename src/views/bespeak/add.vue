<template>
  <div class="add-appointment">
    <v-header>{{getAppointment.edit==0?'预约详情':(getAppointment.edit==1?'新增预约':'修改预约')}}</v-header>
    <div class="appointment-box">
      <ul>
        <li class="section">
          <ul class="form">
            <li>
              <v-form-input label="地区" :arrow="true" v-model="appointment.address" placeholder="请选择您要预约的地区" :readonly="getAppointment.edit" @input-click="selectAddress"></v-form-input>
            </li>
            <li>
              <v-form-select label="门店" title="门店选择" v-model="appointment.shop" :list="shops" placeholder="请选择您要预约的门店" :readonly="getAppointment.edit"></v-form-select>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="mt-15">
        <li class="section">
          <ul class="form">
            <li>
              <v-form-datepicker label="预约时间" title="预约时间" v-model="appointment.time" format="yyyy-MM-dd" yearFormat="{value} 年" monthFormat="{value} 月" dateFormat="{value} 日" placeholder="请选择" :readonly="getAppointment.edit"></v-form-datepicker>
            </li>
            <li class="middle">
              <div class="instructions">补充说明</div>
              <textarea class="textarea" name="" :readonly="!getAppointment.edit"></textarea>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="mt-15">
        <li class="section">
          <ul class="form">
            <li>
              <v-form-input label="姓名" v-model="appointment.name" placeholder="请填写您的真实姓名" :readonly="getAppointment.edit"></v-form-input>
            </li>
            <li>
              <v-form-input label="手机" v-model="appointment.name" placeholder="请填写您的真实手机号码" :readonly="getAppointment.edit"></v-form-input>
            </li>
            <li>
              <v-form-select label="性别" title="性别选择" v-model="appointment.gender" :list="['男', '女']" placeholder="请选择您的性别" :readonly="getAppointment.edit"></v-form-select>
            </li>
            <li>
              <v-form-datepicker label="生日" title="生日日期" v-model="appointment.birthday" format="yyyy-MM-dd" yearFormat="{value} 年" monthFormat="{value} 月" dateFormat="{value} 日" placeholder="请选择生日" :readonly="getAppointment.edit"></v-form-datepicker>
            </li>
            <li>
              <v-form-select label="职业" title="职业选择" v-model="appointment.occupation" :list="occupations" placeholder="请选择您所从事的职业" :readonly="getAppointment.edit"></v-form-select>
            </li>
          </ul>
        </li>
      </ul>

      <div class="btn-submit" :class="{active: isActive}" @click="isActive && submit()">确认提交</div>
    </div>
    <select-address :visible="visible" @confirm="confirm"></select-address>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { formatDate } from '@/utils';
  import selectAddress from './components/select-address';
  export default {
    components: {
      selectAddress
    },
    data() {
      return {
        empty: '',
        occupations: ['教育工作', '医务工作', '财务工作', '媒体市场', '服务行业', '零售行业', '艺术工作', '技术工作', '公务员'],
        areaList: [],
        appointment: {
          name: '',
          address: '',
          gender: 1,
          tel: '',
          birthday: '',
          occupation: -1,
          time: '',
          shop: 1112,
          addId: 1, //1:省份选择; 2:市区； 3：地区
          provinceId: '', //选择的省份id
          cityId: '' //选择的市id
        },
        isEdit: true,
        visible: false,
        shops: [{
          label: '世纪金花科技二路店',
          value: 1112
        }]
      };
    },
    computed: {
      ...mapGetters(['getAppointment']),
      isActive() {
        return this.appointment.address.length && this.appointment.name.length;
      }
    },
    created() {
      if(!this.getAppointment.edit) {
        this.appointment = {
          name: this.getAppointment.appointment.userName,
          address: this.getAppointment.appointment.shopAddress,
          gender: this.getAppointment.appointment.sex,
          birthday: formatDate(this.getAppointment.appointment.birthday),
          occupation: this.getAppointment.appointment.occupation,
          time: formatDate(this.getAppointment.appointment.createTime),
          shop: 0,
          addId: 1, //1:省份选择; 2:市区； 3：地区
          provinceId: '', //选择的省份id
          cityId: '' //选择的市id
        };
      }
      console.log(this.appointment);
    },
    methods: {
      selectAddress() {
        this.visible = true;
      },
      confirm(address) {
        this.visible = false;
        this.appointment.address = address;
      },
      submit() {

      }
    }
  };
</script>


<style lang="less" scoped>
  .mt-15 {
      margin-top: 15px;
  }
  .appointment-box {
      position: absolute;
      left: 0;
      right: 0;
      top: 96px;
      bottom: 0;
      padding: 30px 20px;
      .section {
          margin-top: 16px;
          padding: 0 20px;
          background-color: #fff;
          border-radius: 8px;
          &:first-child {
              margin-top: 0;
          }
      }

      .form {
          background-color: #fff;
          li {
              border-bottom: 1px solid #f0f0f0; /*no*/
              padding: 0 20px;
              height: 96px;
              &:last-child {
                  border-bottom: 0;
              }
              .input {
                  height: 100%;
              }
              &.middle {
                  height: auto;
                  .instructions {
                      color: #999;
                      font-size: 28px;
                      height: 96px;
                      line-height: 96px;
                  }
                  .textarea {
                      background-color: #f5f5f5;
                      border-radius: 5px;
                      margin: 10px 0;
                      height: 240px;
                      text-indent: 10px;
                      line-height: 60px;
                  }
              }
          }
      }

      .btn-submit {
          height: 70px;
          line-height: 70px;
          text-align: center;
          margin: 30px 20px;
          background-color: #999;
          font-size: 28px;
          color: #fff;
          border-radius: 30px;
          &.active {
              background-color: #ffb4b4;
          }
      }
  }
</style>

