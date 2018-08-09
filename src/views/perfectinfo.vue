<template>
  <div class="pt">
    <v-header back>填写资料</v-header>
    <div class="content">
      <ul>
        <li class="section">
          <ul class="form">
            <li>
              <v-form-input label="昵称*" maxlength="20" placeholder="请填写您的账户昵称"></v-form-input>
            </li>
            <li>
              <v-form-input label="姓名*" maxlength="20" placeholder="请填写您的真实昵称"></v-form-input>
            </li>
            <li>
              <v-form-select label="性别*" v-model="sex" :list="['男', '女']" placeholder="请选择您的性别"></v-form-select>
            </li>
            <li>
              <v-form-datepicker label="生日*" v-model="birthday" format="yyyy 年 MM 月 dd 日" placeholder="1900 年 00 月 00 日"></v-form-datepicker>
            </li>
            <li>
              <v-form-input label="身份证号*" maxlength="20" placeholder="请填写您的身份证号码"></v-form-input>
            </li>
            <li>
              <v-form-input label="职业*" maxlength="20" placeholder="请选择您所从事的职业"></v-form-input>
            </li>
          </ul>
          <div class="more" v-if="!loadmore" @click="loadmore = true">点击展开填写详细资料获取更多优惠（选填）</div>
        </li>
        <li class="section" v-if="loadmore">
          <ul class="form">
            <li>
              <v-form-input label="中指指圈号" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="无名指指圈号" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="项链长度" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="手镯尺寸" maxlength="20" placeholder=""></v-form-input>
            </li>
          </ul>
        </li>
        <li class="section" v-if="loadmore">
          <ul class="form">
            <li>
              <v-form-input label="结婚纪念日" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="配偶生日" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="儿子生日" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="女儿生日" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="兴趣爱好" maxlength="20" placeholder=""></v-form-input>
            </li>
          </ul>
        </li>
        <li class="section">
          <div class="more">以下内容由线下门店填写（选填）</div>
          <ul class="form">
            <li>
              <v-form-input label="门店代码" maxlength="20" placeholder=""></v-form-input>
            </li>
            <li>
              <v-form-input label="珠宝顾问姓名" maxlength="20" placeholder=""></v-form-input>
            </li>
          </ul>
        </li>
      </ul>
      <div class="btns">
        <button class="btn" :class="{active: isActive}" @click="confirm">确认提交</button>
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
        sex: '', //性别
        birthday: '' //生日
      };
    },
    computed: {
      isActive() {
        // return this.account.length && this.code.length && this.password.length && this.confirmPws.length && this.checked;
        return true;
      }
    },
    methods: {
      ...mapActions(['ajax']),
      confirm() {
        console.log('next');
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

  .btns {
    padding: 30px 40px;
    .btn {
      width: 100%;
      height: 90px;
      border: none;
      font-size: 36px;
      color: #fff;
      background-color: #ccc;
      border-radius: 45px;
      &.active {
        background-color: #ffb494;
      }
    }
  }
</style>
