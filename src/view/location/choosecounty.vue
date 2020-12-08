<template>
  <div class="choosecounty">
    <div class="catpion" style="overflow: hidden">
      <ul class="orientation">
        <li style="margin-left: 1%"><b>您正在看:</b></li>
        <li style="margin-left: 1%"><b>广州</b></li>
        <li @click="officon()">
          <span>选择县区</span>
          <i :class="[offcity ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
        </li>
      </ul>

      <div
        class="district"
        v-show="offcity"
        style="background-color: #fff; height: 30%"
      >
        <ul v-for="(item, index) in district" :key="index">
          <router-link to="#" tag="li">{{ item }}</router-link>
        </ul>
      </div>
    </div>
    <div class="recentvisitto">
      <div class="access">
        <p>定位/最近访问</p>
        <ul>
          <li><i class="el-icon-location" style="color: #fccc00"></i>广州</li>
          <li>漳州</li>
          <li>集美</li>
        </ul>
      </div>
      <div class="hotcity">
        <p>热门城市</p>
        <div class="city">
          <ul v-for="(item, index) in hot" :key="index">
            <router-link to="#" tag="li">{{ item }}</router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="rankcity">
      <van-index-bar
        :index-list="indexList"
        v-for="(item, index) in city"
        :key="index"
      >
        <van-index-anchor :index="item.code">{{ item.code }}</van-index-anchor>
        <van-cell v-for="(v, i) in item.cityList" :key="i">{{ v }}</van-cell>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import city from "@/json/city.json";
export default {
  data() {
    return {
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "H",
        "Y",
        "Z",
      ],
      city: city,
      citydata: {},
      offcity: false,
      district: [
        "全程",
        "越秀区",
        "天河区",
        "番禺区",
        "海珠区",
        "白云区",
        "荔湾区",
        "黄浦区",
        "增城区",
        "花都区",
        "从化市",
        "南沙区",
      ],
      hot: [
        "上海",
        "深圳",
        "厦门",
        "漳州",
        "北京",
        "广州",
        "杭州",
        "成都",
        "重庆",
      ],
    };
  },
  methods: {
    officon() {
      console.log(123);
      this.offcity = !this.offcity;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.catpion .orientation {
  display: flex;
  justify-content: flex-start;
  font-size: 1.2em;
  margin: 5% 2% 2% 2%;
}
.catpion .orientation li:nth-last-child(1) {
  color: #b7b7b7;
  margin-left: 45%;
}
.icontf {
  -webkit-transform: rotate(180deg);
  display: inline-block;
}
.district ul li {
  color: #a5a5a5;
  border: 1px solid #ccc;
  padding: 3%;
  width: 20%;
  float: left;
  margin: 3% 0 0 5%;
  text-align: center;
}
.recentvisitto {
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
  margin-top: 2%;
  overflow: hidden;
  padding-bottom: 3%;
}
.access {
  margin-left: 3%;
}
.access p {
  font-size: 1em;
  color: #aaaaaa;
  padding: 3% 0 3% 0;
}
.access ul {
  display: flex;
  justify-content: flex-start;
}
.access ul li {
  color: #a5a5a5;
  border: 1px solid #ccc;
  padding: 3%;
  width: 20%;
  float: left;
  margin: 3% 5% 0 0%;
  text-align: center;
  background-color: #fff;
}
.hotcity {
  margin-left: 3%;
}
.hotcity p {
  font-size: 1em;
  color: #aaaaaa;
  padding: 3% 0 3% 0;
}
.city ul li {
  color: #a5a5a5;
  border: 1px solid #ccc;
  padding: 3%;
  width: 20%;
  float: left;
  margin: 3% 5% 0 0%;
  text-align: center;
  background-color: #fff;
}
/deep/.van-index-bar__sidebar {
  right: 2%;
}
</style>