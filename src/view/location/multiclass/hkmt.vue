<template>
  <div class="hkmt">
    <div class="macao">
      <p style="color: #c0c0c0; margin-top: 6%">港澳台热门目的地</p>
      <p class="setting">
        <router-link
          to="/index"
          tag="span"
          class="hotcity"
          v-for="(item, index) in hkmt"
          :key="index"
        >
          <img :src="disposeimg(item.images)" alt="" />
          <ul>
            <li>{{ item.city }}</li>
            <li>{{ item.introduce }}</li>
          </ul>
        </router-link>
      </p>
      <p style="color: #c0c0c0; margin-top: 6%">中国香港</p>
      <p class="rty">
        <router-link to="/index" tag="span" class="recently"
          >中国香港</router-link
        >
      </p>
      <p style="color: #c0c0c0; margin-top: 6%">中国澳门</p>
      <p class="rty">
        <router-link to="/index" tag="span" class="recently"
          >中国澳门</router-link
        >
      </p>
      <p style="color: #c0c0c0; margin-top: 6%">中国台湾</p>
      <p class="rtytaiwan">
        <router-link
          to="/index"
          tag="span"
          class="taiwan"
          v-for="(item, index) in Taiwan"
          :key="index"
          >{{ item }}</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import hkmt from "@/json/hkmt.json";

export default {
  data() {
    return {
      hkmt: hkmt,
      Taiwan: [
        "中国台湾",
        "台北",
        "恒春",
        "南投",
        "高雄",
        "新北",
        "花莲",
        "台中",
        "桃园",
        "台南",
        "嘉义市",
        "宜兰",
        "基隆",
        "台东",
        "新竹市",
        "彰化",
        "苗粟",
        "澎湖",
        "垦丁",
      ],
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
.macao {
  margin: 6%;
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
.rty {
  margin-top: 1%;
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
.rtytaiwan {
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.taiwan {
  border: 1px solid #eeeeee;
  width: 20vw;
  height: 4vh;
  margin-right: 4%;
  margin-top: 2%;
  display: block;
  line-height: 4vh;
  text-align: center;
}
</style>>