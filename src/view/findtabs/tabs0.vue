<template>
  <div class="tabs1">
    <ul class="listContent">
      <li class="item" v-for="(item, index) in tabsdata" :key="index">
        <img :src="bindIcon(item.imgsrc)" alt="" />
        <div class="demo1">
          <h4>
            {{ item.titele }}
          </h4>
          <h5 class="p1">{{ item.evaluate }}</h5>
          <p class="p2">已售{{ item.sale }} | {{ item.distance }}</p>
          <span class="price1"
            >¥{{ item.price1 }}
            <del class="price2">￥{{ item.price2 }}</del>
            <span class="price3"></span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "@/style/tabs0.css";
import falls from "@/json/falls.json";
export default {
  data() {
    return {
      tabsdata: falls,
    };
  },
  methods: {
    // 处理图片路径的函数
    bindIcon(imgsrc) {
      return require("@/style/img/" + imgsrc);
    },
  },
  mounted() {
    // console.log(falls);
    // falls.forEach((element) => {
    //   console.log(element.imgsrc);
    // });
  },
};
</script>

<style lang="less" scoped>
</style>