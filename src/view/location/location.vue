<template>
  <div class="location">
    <div class="lthead">
      <span style="font-size: 3em; display: inline-block" @click="getback"
        >＜</span
      >
      <el-input
        placeholder="城市/拼音"
        prefix-icon="el-icon-search"
        v-model="input2"
        size="mini"
        style="width: 76vw; margin-left: 4%"
      >
      </el-input>
    </div>
    <div class="lttabs">
      <span
        v-for="(item, index) in ['国内', '国际/港澳台']"
        :key="index"
        :class="{ active: Current === index }"
        @click="ltclick(index)"
        >{{ item }}
      </span>
    </div>
    <div v-show="Current === 0">
      <Choosecounty />
    </div>
    <div v-show="Current === 1">2</div>
  </div>
</template>

<script>
import Choosecounty from "@/view/location/choosecounty.vue";
export default {
  data() {
    return {
      input2: "",
      Current: 0, //当前状态
    };
  },
  components: {
    Choosecounty,
  },
  methods: {
    ltclick(index) {
      this.Current = index;
    },
    getback() {
      this.$router.go(-1);
      console.log("返回到上一层");
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.lthead {
  width: 100%;
  height: 100%;
  background-color: #fccc00;
}
/deep/.el-input--mini .el-input__inner {
  height: 28px;
  line-height: 28px;
  vertical-align: bottom;
}

.lttabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  margin-top: 3%;
}
.lttabs span {
  flex: 1;
  font-size: 1rem;
}
</style>