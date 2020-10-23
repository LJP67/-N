<template>
  <div class="index">
    <Orderpage />
    <div class="navtab">
      <ul>
        <li
          v-for="(item, index) in navigation"
          :key="index"
          :class="{ active: cuttabs === index }"
          @click="feel(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Orderpage from "@/components/orderpage.vue";
export default {
  data() {
    return {
      // 当前状态
      cuttabs: 0,
      navigation: ["美团", "发现", "消息", "我的"], //底栏Tabs
    };
  },
  methods: {
    feel(index) {
      this.cuttabs = index;
    },
  },
  components: {
    Orderpage,
  },
};
</script>

<style  lang="less" scoped>
.navtab {
  position: absolute;
  width: 100%;
  bottom: 2%;
  font-family: sans-serif;
}
.navtab ul li {
  margin-right: 9%;
  float: left;
  list-style: none;
  border: 1px solid #fff;
  width: 50px;
  height: 20px;
  text-align: center;
}
.active {
  background-color: antiquewhite;
}
</style>
