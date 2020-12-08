<template>
  <div class="recommend">
    <div class="orientation">
      <p style="color: #c0c0c0">当前定位</p>
      <p style="margin-top: 4%">
        <span class="present">
          <i class="el-icon-location" style="color: #fccc00"></i>
          广州
        </span>
      </p>
      <p style="color: #c0c0c0; margin-top: 6%">最近访问</p>

      <p class="rty">
        <span class="recently"> 漳州 </span>
        <span class="recently"> 厦门 </span>
        <span class="recently"> 广州 </span>
      </p>
      <p style="color: #c0c0c0; margin-top: 6%">热门目的地</p>
      <p class="setting">
        <router-link
          to="/index"
          tag="span"
          class="hotcity"
          v-for="(item, index) in citydata"
          :key="index"
        >
          <img :src="disposeimg(item.images)" alt="" />
          <ul>
            <li>{{ item.city }}</li>
            <li>{{ item.introduce }}</li>
          </ul>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import citydata from "@/json/international.json";

export default {
  data() {
    return {
      citydata: citydata,
    };
  },
  methods: {
    //   用于处理json数据中的图片
    disposeimg(images) {
      return require("@/images/" + images);
    },
  },
};
</script>

<style lang="less" scoped>
.orientation {
  margin: 6%;
}
.orientation .present {
  border: 1px solid #eeeeee;
  width: 17vw;
  height: 4vh;
  display: block;
  line-height: 4vh;
  text-align: center;
}
.rty {
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.recently {
  border: 1px solid #eeeeee;
  width: 17vw;
  height: 4vh;
  margin-right: 6%;
  margin-top: 2%;
  display: block;
  line-height: 4vh;
  text-align: center;
}
.setting {
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.hotcity {
  width: 46%;
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
  font-family: monospace;
  position: relative;
  margin: 2%;
}
.hotcity ul {
  position: absolute;
  z-index: 9999;
  top: 23%;
  left: 0%;
  text-align: center;
  margin-left: auto;
  width: 100%;
}
.hotcity ul li {
  margin-top: 5%;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  font-family: none;
  opacity: 0.7;
}
.hotcity img {
  width: 100%;
  height: 100%;
  border-radius: 5%;
}
</style>>