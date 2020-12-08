<template>
  <div class="orderpage">
    <!-- 头部 -->
    <div class="headtab">
      <div class="headA">
        <router-link to="/location" tag="li">
          <div class="orientation">
            <h2 style="width: 18vw">广州 <i class="iconfont">&#xe648;</i></h2>
            <p style="margin-top: 4%">多云 25℃</p>
          </div>
        </router-link>
      </div>

      <div class="headB">
        <van-search
          class="newfo"
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
        />
      </div>

      <div class="headerC">
        <span style="margin-left: -4em; margin-right: 1em">
          <i class="iconfont">&#xe6dd;</i>
        </span>
        <!-- 加号 -->
        <span class="plussign">
          <i class="iconfont" @mouseenter="enters" @mouseleave="leaver"
            >&#xe635;</i
          >
        </span>
      </div>
    </div>
    <!-- 栏目 -->
    <div class="column">
      <ul>
        <li>
          <i class="iconfont">&#xe661;</i>
          <span>扫一扫</span>
        </li>
        <li>
          <i class="iconfont">&#xe618;</i>
          <span>付款码</span>
        </li>
        <li>
          <i class="iconfont">&#xe61f;</i>
          <span style="margin-left: 37%">骑车</span>
        </li>
        <li>
          <i class="iconfont">&#xe64b;</i>
          <span style="margin-left: 17%">实时公交</span>
        </li>
      </ul>
    </div>
    <div class="statusreport" v-show="statusreport">
      <ul>
        <li>
          <i class="iconfont">&#xe600;</i>
          扫一扫
          <span style="border: 1px solid #717578; display: block"></span>
        </li>
        <li>
          <i class="iconfont">&#xe618;</i>
          付款码
          <span style="border: 1px solid #717578; display: block"></span>
        </li>
        <li>
          <i class="iconfont">&#xe663;</i>
          开发票
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      statusreport: false,
    };
  },
  methods: {
    enters() {
      this.statusreport = !this.statusreport;
    },
    leaver() {
      this.statusreport = !this.statusreport;
    },
  },
};
</script>

<style lang="less" scoped>
.orderpage {
  width: 100%;
  background-color: #ffd101;
  position: relative;
}
.headtab {
  display: flex; /*设置为flex布局*/
  justify-content: space-between;
  align-items: center; /*垂直居中*/
}
.headA {
  align-items: center; /*垂直居中*/
  margin: 1% 0 1% 2%;
}

.orientation {
  padding: 1% 2% 2% 2%;
}
.orientation h3 {
  padding-bottom: 1%;
}
.headB {
  margin-left: -13%;
}
.headerC {
  margin-right: 2%;
}
/deep/ .newfo {
  width: 59vw !important;
  height: 4vh !important;
  padding: 0 !important;
}

.statusreport {
  width: 30%;
  background-color: #5e6265;
  display: flex; /*设置为flex布局*/
  flex-direction: column;
  align-items: center; /*垂直居中*/
  height: 14vh;
  position: absolute;
  right: 4%;
  top: 20%;
  z-index: 9999999;
}
.statusreport ul li {
  align-content: center; /*垂直居中*/
  color: #fff;
  line-height: 2.23rem;
}
.column {
  margin-top: 2%;
}
.column ul {
  width: 100%;
  display: flex; /*设置为flex布局*/
}
.column ul li {
  flex: 1;
  margin-bottom: 2%;
}
.column i {
  margin-left: 32%;
  font-size: 2rem;
}
.column span {
  display: block;
  margin-left: 24%;
  margin-top: 5%;
  font-size: 1rem;
  font-family: cursive;
}
</style>