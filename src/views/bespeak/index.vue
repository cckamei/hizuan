<template>
  <div class="bespeak">
    <v-header>我的预约
      <div slot="headright">
        <span class="add-btn" @click="add">新增</span>
      </div>
    </v-header>
    <div class="bespeak-warp">
      <tabs :active="activeTab" @search-appointment="searchAppointment"></tabs>
      <list :list-data="appointments"></list>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import tabs from './components/tabs';
  import list from './components/list';
  export default {
    components: {
      tabs,
      list
    },
    data() {
      return {
        activeTab: 1,
        appointments: []
      };
    },
    created() {
      this.fetchData();
      this.appointments = this.appointments.filter(ele => {
        return ele.status == 1;
      });
    },
    methods: {
      ...mapMutations(['setAppointment']),
      fetchData() {
        for(let index = 0; index < 10; index++) {
          let _appointment = {
            shopName: index % 2 ? '世纪金花钟楼店' : '开元商城钟楼店',
            shopAddress: '陕西省-西安市-雁塔区',
            createTime: new Date(),
            linkUser: 'A女士（132****9811）',
            userName: 'A女士',
            tel: '13609247777',
            sex: 1,
            occupation: 1,
            birthday: new Date(),
            detail: '购买一套彩宝，需要珠宝顾问协助挑选，还有其他的购买需求',
            id: index,
            status: index % 2
          };
          this.appointments.push(_appointment);
        }
      },
      searchAppointment(tab) {
        this.activeTab = tab;
        let type = this.activeTab == 1 ? 1 : 0;
        this.fetchData();
        this.appointments = this.appointments.filter(ele => {
          return ele.status == type;
        });
      },
      add() {
        this.setAppointment({
          appointments: {},
          edit: 1
        });
        this.$router.push({ name: 'addappointment' });
      }
    }
  };
</script>


<style lang="less" >
  .bespeak {
      .header {
          box-shadow: 0 0 0 0 rgba(170, 170, 170, 0.5) !important;
      }
  }
  .add-btn {
      font-size: 28px;
      color: #faa0a0;
  }
  .bespeak-warp {
      position: absolute;
      left: 0;
      right: 0;
      top: 96px;
      bottom: 0;
      background: #fff;
  }
</style>
