<template>
      <div class="editaddress">
            <v-header>
                  编辑地址
                  <slot>
                        <span class="deleteAddresss">删除</span>
                  </slot>
            </v-header>
            <ul class="editList">
                  <li>
                        <span>收货人</span>
                        <v-form-input placeholder="请填写收货人姓名" v-model="reqData.username"></v-form-input>
                        
                  </li>
                  <li>
                        <span>收货人</span>
                        <mt-switch :value.sync="lock"></mt-switch>
                        
                  </li>
            </ul>
      </div>
      
</template>
<script>
export default {
      data() {
            return {
                  lock: true,
                  reqData: {
                        username: ""
                  }
            };
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
      .editList {
            background: #ffffff;
            padding: 0 40px;
            margin-top: 96px;
            li {
                  display: flex;
                  flex-flow: row nowrap;
                  justify-content: space-between;
                  border-bottom: 2px solid #f0f0f0;
                  height: 96px;
                  line-height: 96px;
                  
            }
            li:last-child {
                  border-bottom: none;
                  i {
                        width: 64px;
                        height: 40px;
                        margin-top: 28px;
                  }
            }
      }
}
</style>

