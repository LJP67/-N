<template>
  <div class="order">
    <div id="container"></div>
    <Bottom />
  </div>
</template>

<script>
import Bottom from "@/components/bottom.vue";
import AMap from "@/json/Amap.js";

export default {
  name: "AMap",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let that = this;
    AMap().then(
      (AMap) => {
        console.log("地图加载成功");
        that.map = new AMap.Map("container", {
          zoom: 11, //级别
          center: [116.397428, 39.90923], //中心点坐标
          viewMode: "3D", //使用3D视图
        });
      },
      (e) => {
        console.log("地图加载失败", e);
      }
    );
  },
  components: {
    Bottom,
    AMap,
  },
};
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>>