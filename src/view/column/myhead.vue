<template>
  <div class="head">
    <div class="myhead">
      <div class="tophalf">
        <ul>
          <li @click="vuex">
            <img src="@/style/img/mao.png" alt="" />
          </li>
          <li>
            <p style="font-weight: 800; font-size: 1rem">美团美团美团</p>
            <span class="bhj" style="display: flex; margin-top: 6%">
              <span>
                信任分735
                <i class="el-icon-arrow-right"></i>
              </span>
              <span>
                成长值600
                <i class="el-icon-arrow-right"></i>
              </span>
            </span>
          </li>
          <li style="width: 20%">
            <i
              class="el-icon-s-tools"
              style="font-size: 1.3rem; margin-right: 29%"
            ></i>
            <i class="el-icon-user-solid" style="font-size: 1.3rem"></i>
          </li>
        </ul>
      </div>
      <div class="btnlin">
        <ul>
          <li>
            <i class="iconfont">&#xe614;</i>
            <span>收藏</span>
          </li>
          <li>
            <i class="iconfont">&#xe613;</i>
            <span>评价</span>
          </li>
          <li>
            <i class="iconfont">&#xe61a;</i>
            <span>足迹</span>
          </li>
          <li>
            <i class="iconfont">&#xe615;</i>
            <span style="margin-left: 10%">红包卡卷</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="afterbar">
      <ul>
        <li>
          <i class="iconfont">&#xe65a;</i>
          <span>我的订单</span>
        </li>
        <li>
          <i class="iconfont">&#xe637;</i>
          <span>待付款</span>
        </li>
        <li>
          <i class="iconfont">&#xe645;</i>
          <span>待使用</span>
        </li>
        <li>
          <i class="iconfont">&#xe690;</i>
          <span>待评价</span>
        </li>
        <li>
          <i class="iconfont">&#xe640;</i>
          <span style="-5%">退款/售后</span>
        </li>
      </ul>
    </div>
    <div class="mywallet">
      <div class="wallethead">
        <ul style="padding-top: 2%">
          <li style="padding-left: 4%">我的钱包</li>
          <li style="padding-right: 4%">
            <span>进入钱包</span>
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div class="mybill">
        <ul>
          <li>
            <p class="boldword">10000</p>
            <p>美团借钱</p>
            <p class="gray">大约可借</p>
          </li>
          <li>
            <p class="boldword">4.08万</p>
            <p>美团信用卡</p>
            <p class="gray">我的额度</p>
          </li>
          <li>
            <p class="boldword">1.00元</p>
            <p>账单</p>
            <p class="gray">最近支付</p>
          </li>
          <li>
            <p class="boldword">18张</p>
            <p>优惠卷</p>
            <p class="gray">免费领</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    vuex() {
      this.$router.push({ path: "/vuex" });
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  background-color: #f4f2f3;
  height: 100vh;
}
.myhead {
  width: 100%;
  height: 20vh;
  background-color: #ffd208;
}
.tophalf {
  padding: 4% 0%;
}
.tophalf ul {
  display: flex;
  justify-content: space-around;
}
.tophalf li:first-child {
  width: 13%;
  margin-left: 0;
}
.tophalf li:first-child img {
  width: 100%;
  height: 100%;
  margin: 0 2%;
  border-radius: 50%;
}
.tophalf li:nth-child(2) {
  margin-left: -5%;
  margin-top: 1%;
}
.tophalf li:nth-child(2) .bhj span {
  background-color: rgb(241, 192, 18);
  border-radius: 13%;
  margin-right: 8%;
  font-family: cursive;
  width: 23vw;
  height: 2.4vh;
  line-height: 2.4vh;
}

.btnlin {
  margin-top: 2%;
}
.btnlin ul {
  width: 100%;
  display: flex; /*设置为flex布局*/
}
.btnlin ul li {
  flex: 1;
  margin-bottom: 2%;
}
.btnlin i {
  margin-left: 25%;
  font-size: 1.4rem;
}
.btnlin span {
  display: block;
  margin-left: 24%;
  margin-top: 5%;
  font-size: 0.8rem;
  font-family: cursive;
}
.afterbar {
  background-color: #fff;
  width: 91%;
  height: 7vh;
  line-height: 3vh;
  margin: -8% auto;
  border-radius: 5%;
  font-weight: 800;
}

.afterbar ul {
  width: 100%;
  display: flex; /*设置为flex布局*/
}
.afterbar ul li {
  flex: 1;
  margin-bottom: 2%;
  margin-top: 2%;
}
.afterbar i {
  margin-left: 25%;
  font-size: 1rem;
}
.afterbar span {
  display: block;
  margin-left: 7%;
  margin-top: -2%;
  font-size: 0.8rem;
  font-family: cursive;
}
.mywallet {
  background-color: #fff;
  width: 91%;
  height: 14vh;
  line-height: 3vh;
  margin: -8% auto;
  border-radius: 5%;
  font-weight: 800;
  margin-top: 10%;
}
.wallethead ul {
  width: 100%;
  padding-top: 2%;
  display: flex;
  justify-content: space-between;
}
.mybill {
  text-align: center;
  margin-top: 1%;
}
.mybill ul {
  width: 100%;
  display: flex;
}
.mybill ul li {
  width: 19%;
  margin: auto;
}
.mybill .gray {
  color: #9e9e9e;
}
.mybill .boldword {
  font-weight: 900;
  font-size: 1rem;
}
</style>