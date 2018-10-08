<template>
  <v-slide-up v-model="ivisible" title="选择区域" @confirm="confirm()">
    <ul class="addChoice">
      <li @click="active = 1;cityId='';city='';districtId='';district=''">{{province}}
        <i v-if="active==1"></i>
      </li>
      <li @click="active = 2;districtId='';district='';">{{city}}
        <i v-if="active==2"></i>
      </li>
      <li @click="active = 3">{{district}}
        <i v-if="active==3"></i>
      </li>
    </ul>
    <ul class="addList" v-if="active==1">
      <li v-for="(item,index) in provinces" :key="index" :class="{actived: provinceId==item.id}" @click="chooseProvice(item)">{{item.name}}</li>
    </ul>
    <ul class="addList" v-if="active==2">
      <li v-for="(item,index) in citys" :key="index" :class="{actived: cityId==item.id}" @click="chooseCity(item)">{{item.name}}</li>
    </ul>
    <ul class="addList" v-if="active==3">
      <li v-for="(item,index) in districts" :key="index" :class="{actived: districtId==item.id}" @click="districtId=item.id;district=item.name">{{item.name}}</li>
    </ul>
  </v-slide-up>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: ['value', 'sprovinceId', 'scityId', 'sdistrictId'],
    data() {
      return {
        ivisible: false,
        provinces: [],
        citys: [],
        districts: [],
        active: 1,
        provinceId: '',
        cityId: '',
        districtId: '',
        province: '',
        city: '',
        district: ''
      };
    },
    watch: {
      value(val) {
        this.ivisible = val;
      },
      ivisible(val) {
        this.$emit('input', val);
      }
    },
    created() {
      this.provinceId = this.sprovinceId;
      this.cityId = this.scityId;
      this.districtId = this.sdistrictId;
      this.ajax({
        name: 'getProvince'
      }).then(res => {
        this.provinces = res;
        this.province = this.getValue('id', this.provinces, this.provinceId).name;
      });
      if(this.provinceId.length > 0) {
        this.ajax({
          name: 'getCity',
          data: { pre: this.provinceId }
        }).then(res => {
          this.citys = res;
          this.city = this.getValue('id', this.citys, this.cityId).name;
        });
      }
      if(this.cityId.length > 0) {
        this.ajax({
          name: 'getDistrict',
          data: { pre: this.cityId }
        }).then(res => {
          this.districts = res;
          this.district = this.getValue('id', this.districts, this.districtId).name;
        });
      }
    },
    methods: {
      ...mapActions(["ajax"]),
      getProvince() {
        this.ajax({
          name: 'getProvince'
        }).then(res => {
          this.provinces = res;

        });
      },
      getCity() {
        this.ajax({
          name: 'getCity',
          data: { pre: this.provinceId }
        }).then(res => {
          this.citys = res;
        });
      },
      getDistrict() {
        this.ajax({
          name: 'getDistrict',
          data: { pre: this.cityId }
        }).then(res => {
          this.districts = res;
        });
      },
      chooseProvice(item) {
        this.province = item.name;
        this.provinceId = item.id;
        this.active = 2;
        this.getCity();
      },
      chooseCity(item) {
        this.city = item.name;
        this.cityId = item.id;
        this.active = 3;
        this.getDistrict();
      },
      confirm() {
        let address = this.province + (this.city.length ? ('-' + this.city) : '') + (this.district.length ? ('-' + this.district) : '');
        this.$emit('confirm', {
          address,
          provinceId: this.provinceId,
          cityId: this.cityId,
          districtId: this.districtId
        });
      },
      getValue(keyname, arrs, keyvalue) {
        let val = {};
        arrs.forEach(element => {
          if(element[keyname] == keyvalue) {
            val = element;
          }
        });
        return val;
      }
    }
  };
</script>

<style lang="less" scoped>
  .addChoice {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      border-bottom: 2px solid #f0f0f0;
      li {
          min-width: 92px;
          height: 84px;
          padding: 0 20px;
          color: #666;
          font-size: 24px;
          position: relative;
          i {
              position: absolute;
              left: 0;
              bottom: 0;
              height: 4px;
              background: #faa0a0;
              min-width: 92px;
              width: 100%;
          }
      }
  }
  .addList {
      margin-top: 10px;
      font-size: 24px;
      overflow-y: auto;
      height: 588px;
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
