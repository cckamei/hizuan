<template>
  <div class="appointment-list">
    <div class="appointment" v-for="(appointment,i) in listData" :key="i">
      <div class="appointment-header">
        <div class="name">
          <img src="~/assets/common/shop.png">
          <span>{{appointment.store.name}}</span>
        </div>
        <div class="address">{{appointment.store.province+' '+appointment.store.city}}</div>
      </div>
      <div class="appointment-conetnt">
        <div class="time">预约时间：{{formatDate(appointment.appoint_time,'yyyy-MM-dd')}}</div>
        <div class="user">预约类型：{{appointment.type?'线下体验':'以旧换新'}}</div>
        <div class="user">联系人：{{appointment.name}}</div>
        <div class="detail">补充说明：{{appointment.ext}}</div>
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
      position: absolute;
      left: 0px;
      top: 96px;
      bottom: 0;
      right: 0px;
      background-color: #f0f0f0;
      overflow: auto;
      .appointment {
          margin: 20px 20px 16px;
          border-radius: 5px;
          background-color: #fff;
          &-header {
              display: flex;
              justify-content: space-around;
              align-items: center;
              vertical-align: middle;
              height: 64px;
              border-bottom: 1px solid #f0f0f0; /*no*/
              padding: 0 20px;

              .name {
                  width: 60%;
                  font-size: 24px;
                  img {
                      margin-right: 12px;
                      margin-top: -2px;
                      vertical-align: middle;
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
              padding: 0px 20px;
              border-bottom: 1px solid #f0f0f0; /*no*/
              .time {
                  margin-top: 30px;
              }
              .user {
                  margin-top: 18px;
              }
              .time,
              .user,
              .detail {
                  font-size: 24px;
                  color: #666666;
              }
              .detail {
                  color: #999999;
                  width: 660px;
                  margin: 30px 0;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
              }
          }
          &-footer {
              height: 80px;
              padding: 0 20px;
              .btn {
                  float: right;
                  width: 140px;
                  text-align: center;
                  line-height: 52px;
                  line-height: 52px;
                  border-radius: 26px;
                  border: 1px solid #dcdcdc; /*no*/
                  margin-top: 15px;
                  margin-left: 30px;
              }
          }
      }
  }
</style>
