<template>
  <div class="findtabs">
    <div class="tab">
      <span
        v-for="(item, index) in ['猜你喜欢', '今日特价', '发现好店']"
        :key="index"
        :class="{ active: Current === index }"
        @click="handleclick(index)"
        >{{ item }}</span
      >
    </div>

    <div v-show="Current === 0">
      <Tabs0 />
    </div>
    <div v-show="Current === 1">
      <Tabs1 />
    </div>
    <div v-show="Current === 2">
      <Tabs2 />
    </div>
  </div>
</template>

<script>
import Tabs0 from "@/view/findtabs/tabs0.vue";
import Tabs1 from "@/view/findtabs/tabs1.vue";
import Tabs2 from "@/view/findtabs/tabs2.vue";

export default {
  data() {
    return {
      Current: 0, //当前状态
    };
  },
  components: {
    Tabs0,
    Tabs1,
    Tabs2,
  },
  methods: {
    handleclick(index) {
      console.log(index);
      this.Current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.findtabs {
  padding-top: 3%;
  background-color: #f1f1f1;
}
.tab .active {
  color: red;
  font-size: 1.2rem;
}
.tab {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  text-align: center;
}
.tab span {
  flex: 1;
  font-size: 1rem;
}
</style>