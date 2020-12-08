<template>
  <div class="International">
    <div class="column">
      <ul>
        <li
          v-for="(item, index) in local"
          :key="index"
          :class="{ active: activeKey === index }"
          @click="ackclick(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="classifystate" v-show="activeKey === 0">
      <Recommend />
    </div>
    <div class="classifystate" v-show="activeKey === 1"><Hkmt /></div>
    <div class="classifystate" v-show="activeKey === 2">22222222</div>
    <div class="classifystate" v-show="activeKey === 3">33333333</div>
  </div>
</template>

<script>
import Recommend from "@/view/location/multiclass/recommend.vue";
import Hkmt from "@/view/location/multiclass/hkmt.vue";

export default {
  data() {
    return {
      activeKey: 0, //当前状态
      local: [
        "推荐",
        "港澳台",
        "新马泰",
        "日韩",
        "亚洲其他",
        "美洲",
        "大洋洲",
        "欧洲",
        "中东非洲",
      ],
    };
  },
  components: {
    Recommend,
    Hkmt,
  },
  methods: {
    ackclick(index) {
      this.activeKey = index;
      console.log(123);
    },
  },
};
</script>

<style lang="less" scoped>
.International {
  display: flex;
  justify-content: flex-start;
}
.column {
  height: 100vh;
  background: #f7f8fa;
  width: 20%;
}
.column ul li {
  border: 1px solid #f7f8fa;
  text-align: center;
  height: 6vh;
  line-height: 6vh;
}
.active {
  background: #fff;
  color: red;
}
.classifystate {
  width: 80%;
}
</style>>
