<template>
      <div class="logisticsTrack">
            <v-header>物流跟踪</v-header>
            <div class="logisticsTrackTop">
                  <ul>
                        <li><span>运单号：</span>123456789</li>
                        <li><span>承运公司：</span>圆通快递</li>
                        <li><span>承运公司电话：</span><i>123456789</i></li>
                  </ul>
            </div>
            <div class="logisticsLine">
                  <ul>
                        <li>
                              <i class="point colorpoint"></i>
                              <s></s>
                              <div class="logictisLines">
                                    <h1>[西安市]西安市西安市西安市西安市西安市西安市西安市西安市西安市</h1>
                                    <span>2018-08-08 18:08:08</span>
                              </div>
                        </li>
                        <li>
                              <i class="point"></i>
                              <s></s>
                              <div class="logictisLines">
                                    <h1>[西安市]西安市西安市西安市西安市西安市西安市西安市西安市西安市</h1>
                                    <span>2018-08-08 18:08:08</span>
                              </div>
                        </li>
                  </ul>
            </div>
            
      </div>
</template>
<script>
</script>
<style lang="less" scoped>
.logisticsTrack {
  background: #ffffff;
  .logisticsTrackTop {
    background: #f8f7f7;
    padding-bottom: 20px;
    ul {
      width: 710px;
      background: #ffffff;
      border-radius: 10px;
      margin: 116px auto 0;
      padding: 40px;
      li {
        margin-bottom: 20px;
        font-size: 24px;
        color: #666666;
        i {
          font-style: normal;
          color: #6196f6;
          text-decoration: underline;
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
  .logisticsLine {
    li {
      position: relative;
      height: 160px;
      i {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #dcdcdc;
        left: 20px;
        top: 25px;
        z-index: 1;
      }
      i.colorpoint {
            background: #ffb4b4;
      }
      s {
        position: absolute;
        width: 2px;
        height: 144px;
        border-radius: 50%;
        background: #dcdcdc;
        left: 30px;
        top: 40px;
      }
      .logictisLines {
            width: 690px;
            height: 100%;
            box-sizing: border-box;
            float: right;
            border-bottom: 2px solid #f0f0f0;
            h1 {
                  font-size: 24px;
                  color: #666666;
                  margin-bottom: 20px;
                  width: 640px;
                  font-weight: normal;
            }
            span {
                  color: #999999;
                  font-size: 24px;
            }
      }
    }
  }
}
</style>
