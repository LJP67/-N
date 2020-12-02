<template>
  <div class="infor">
    <router-link
      to="/index"
      class="xiaoxi"
      v-for="(item, index) in newsdata"
      :key="index"
    > 
      <img :src="bindIcon(item.img)" alt="" />
      <ul style="width: 100%">
        <li>
          <b> {{ item.title }}</b>
          <span style="margin-right: 4%">{{ item.time }}</span>
        </li>
        <li>
          <span
            class="ina"
            style="
              width: 76vw;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 1em;
              font-family: monospace;
              color: #5e5e5e;
              display: block;
            "
            >{{ item.describe }}</span
          >
          <span
            class="inb"
            style="
              background: #f45f24;
              width: 5vw;
              color: rgb(255, 255, 255);
              border-radius: 100%;
              height: 2vh;
              text-align: center;
              display: block;
              margin-right: 7%;
            "
            >{{ item.nuber }}</span
          >
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
import infor from "@/json/infor.json";

export default {
  data() {
    return {
      newsdata: infor,
    };
  },
  methods: {
    // 处理图片路径的函数
    bindIcon(imgsrc) {
      return require("@/style/img/" + imgsrc);
    },
  },
};
</script>

<style lang="less" scoped>
.infor {
  background: ghostwhite;
}
.xiaoxi {
  background: ghostwhite;
  border-bottom: 1px solid #e5e5e5e5;
  display: flex;
  height: 6vh;
  padding: 2%;
}
.xiaoxi img {
  width: 11%;
  height: 100%;
  margin: 0 2%;
  border-radius: 50%;
}
.xiaoxi ul li {
  width: 100%;
  margin: 2% 0;
}
.xiaoxi ul li:nth-child(1) {
  font-size: 1rem;
  font-family: cursive;
  display: flex;
  justify-content: space-between;
}
.xiaoxi ul li:nth-child(1) span {
  font-size: 1rem;
  font-family: monospace;
  color: #5e5e5e;
}
.xiaoxi ul li:nth-child(2) {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>