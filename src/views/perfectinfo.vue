<template>
  <div class="pt">
    <v-header back>填写资料</v-header>
    <div class="content">
      <ul>
        <li class="section">
          <ul class="form">
            <li>
              <v-form-input label="昵称*" v-model="reqData.nickname" maxlength="6" placeholder="请填写您的账户昵称"></v-form-input>
            </li>
            <li>
              <v-form-input label="姓名*" v-model="reqData.username" maxlength="4" placeholder="请填写您的真实昵称"></v-form-input>
            </li>
            <li>
              <v-form-select label="性别*" title="性别选择" v-model="reqData.sex" :list="['男', '女']" placeholder="请选择您的性别"></v-form-select>
            </li>
            <li>
              <v-form-datepicker label="生日*" title="生日日期" v-model="reqData.birthday" format="yyyy 年 MM 月 dd 日" yearFormat="{value} 年" monthFormat="{value} 月" dateFormat="{value} 日" placeholder="请选择生日"></v-form-datepicker>
            </li>
            <li>
              <v-form-input label="身份证号*" v-model="reqData.IDCard" maxlength="20" placeholder="请填写您的身份证号码"></v-form-input>
            </li>
            <li>
              <v-form-select label="职业*" title="职业选择" v-model="reqData.occupation" :list="occupation" placeholder="请选择您所从事的职业"></v-form-select>
            </li>
          </ul>
          <div class="more" v-if="!loadmore" @click="loadmore = true">点击展开填写详细资料获取更多优惠（选填）</div>
        </li>
        <li class="section" v-if="loadmore">
          <ul class="form">
            <li>
              <v-form-input label="中指指圈号" v-model="reqData.middleFinger" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="无名指指圈号" v-model="reqData.ringFingerSize" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="项链长度" v-model="reqData.necklaceLength" maxlength="20" placeholder="" unit="cm"></v-form-input>
            </li>
            <li>
              <v-form-input label="手镯尺寸" v-model="reqData.braceletSize" maxlength="20" placeholder="" unit="mm"></v-form-input>
            </li>
          </ul>
        </li>
        <li class="section" v-if="loadmore">
          <ul class="form">
            <li>
              <v-form-datepicker label="结婚纪念日" title="结婚纪念日" v-model="reqData.weddingDay" format="yyyy 年 MM 月 dd 日" yearFormat="{value} 年" monthFormat="{value} 月" dateFormat="{value} 日" placeholder="请选择"></v-form-datepicker>
            </li>
            <li>
              <v-form-datepicker label="配偶生日" title="配偶生日" v-model="reqData.spouseBirthday" format="yyyy 年 MM 月 dd 日" yearFormat="{value} 年" monthFormat="{value} 月" dateFormat="{value} 日" placeholder="请选择"></v-form-datepicker>
            </li>
            <li>
              <v-form-datepicker label="儿子生日" title="儿子生日" v-model="reqData.sonBirthday" format="yyyy 年 MM 月 dd 日" yearFormat="{value} 年" monthFormat="{value} 月" dateFormat="{value} 日" placeholder="请选择"></v-form-datepicker>
            </li>
            <li>
              <v-form-datepicker label="女儿生日" title="女儿生日" v-model="reqData.daughterBirthday" format="yyyy 年 MM 月 dd 日" yearFormat="{value} 年" monthFormat="{value} 月" dateFormat="{value} 日" placeholder="请选择"></v-form-datepicker>
            </li>
            <li>
              <v-form-input label="兴趣爱好" v-model="reqData.hobby" maxlength="20" placeholder=""></v-form-input>
            </li>
          </ul>
        </li>
        <li class="section">
          <div class="more">以下内容由线下门店填写（选填）</div>
          <ul class="form">
            <li>
              <v-form-input label="门店代码" v-model="reqData.shopCode" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="珠宝顾问姓名" v-model="reqData.consultantName" maxlength="20" placeholder=""></v-form-input>
            </li>
          </ul>
        </li>
      </ul>
      <div class="btns">
        <button class="btn" :class="{active: isActive}" @click="isActive && confirm()">确认提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        loadmore: false,
        occupation: ['教育工作', { label: '医务工作', value: 'ywgz' }, '财务工作', '媒体市场', '服务行业', '零售行业', '艺术工作', '技术工作', '公务员'],
        reqData: {
          nickname: '', //昵称
          username: '', //姓名
          sex: { label: '', value: '' }, //性别
          birthday: '', //生日
          IDCard: '', //身份证号
          occupation: { label: '', value: '' }, //职业
          middleFinger: '', //中指指圈号
          ringFingerSize: '', //无名指指圈号
          necklaceLength: '', //项链长度
          braceletSize: '', //手镯尺寸
          weddingDay: '', //结婚纪念日
          spouseBirthday: '', //配偶生日
          sonBirthday: '', //儿子生日
          daughterBirthday: '', //女儿生日
          hobby: '', //兴趣爱好
          shopCode: '', //门店代码
          consultantName: '' //珠宝顾问姓名
        }
      };
    },
    computed: {
      isActive() {
        return this.reqData.nickname.length && this.reqData.username.length && this.reqData.sex.value.length && this.reqData.birthday.length && this.reqData.IDCard.length && this.reqData.occupation.value.length;
      }
    },
    methods: {
      ...mapActions(['ajax']),
      confirm() {
        this.$router.push({ name: 'registersuccess' });
      }
    }
  };
</script>

<style lang="less" scoped>
  .section {
    margin-top: 16px;
    padding: 0 20px;
    background-color: #fff;
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
    }
  }

  .more {
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    color: #cdb498;
    text-align: center;
  }
</style>
