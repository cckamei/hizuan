<template>
  <div class="appointment-list">
    <div class="appointment" v-for="(appointment,i) in listData" :key="i">
      <div class="appointment-header">
        <div class="name">
          <img src="~/assets/common/shop.png">
          <span>{{appointment.shopName}}</span>
        </div>
        <div class="address">{{appointment.shopAddress}}</div>
      </div>
      <div class="appointment-conetnt">
        <div class="time">预约时间：{{formatDate(appointment.createTime,'yyyy-MM-dd hh:mm:ss')}}</div>
        <div class="user">联系人：{{appointment.linkUser}}</div>
        <div class="detail">补充说明：{{appointment.detail}}</div>
      </div>
      <div class="appointment-footer">
        <div class="btn" @click="viewDetail(appointment)">查看详情</div>
        <div class="btn" v-if="appointment.status" @click="updateAppointment(appointment)">修改预约</div>
        <div class="btn" v-else>联系客服</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { formatDate } from '@/utils';
  export default {
    props: ['list-data'],
    methods: {
      ...mapMutations(['setAppointment']),
      formatDate,
      viewDetail(appointment) {
        this.setAppointment({
          appointment,
          edit: 0
        });
        this.$router.push({ name: 'addappointment' });
      },
      updateAppointment(appointment) {
        this.setAppointment({
          appointment,
          edit: 2
        });
        this.$router.push({ name: 'addappointment' });
      }
    }
  };
</script>

<style lang="less" scoped>
  .appointment-list {
      box-shadow: 0px -10px 16px rgba(170, 170, 170, 0.5);
      position: absolute;
      left: 0px;
      top: 110px;
      bottom: 0;
      right: 0px;
      background-color: #f0f0f0;
      overflow: auto;
      .appointment {
          margin: 15px 20px;
          border-radius: 5px;
          background-color: #fff;
          &-header {
              display: flex;
              justify-content: space-around;
              align-items: center;
              vertical-align: middle;
              height: 60px;
              border-bottom: 1px solid #f0f0f0; /*no*/
              padding: 0 20px;

              .name {
                  width: 60%;
                  img {
                      width: 24px;
                      height: 24px;
                  }
              }
              .address {
                  width: 40%;
                  text-align: right;
              }
          }
          &-conetnt {
              padding: 25px 20px;
              border-bottom: 1px solid #f0f0f0; /*no*/
              .time,
              .user,
              .detail {
                  height: 40px;
                  line-height: 40px;
                  font-size: 24px;
                  color: #666666;
              }
              .detail {
                  color: #999999;
                  margin-top: 10px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
              }
          }
          &-footer {
              height: 80px;
              .btn {
                  float: right;
                  padding: 0px 25px;
                  line-height: 48px;
                  border-radius: 20px;
                  border: 1px solid #cccccc; /*no*/
                  margin-top: 15px;
                  margin-right: 20px;
              }
          }
      }
  }
</style>
