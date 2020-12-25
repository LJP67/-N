<template>
  <div class="myhead">
    <div class="tophalf">
      <ul>
        <li>
          {{ $store.getters.getadd }}
        </li>
        <!-- 修改count的值 -->
        <li style="margin: 5% 5%">
          <el-button type="primary" @click="add()">点击+1</el-button>
        </li>
        <li>
          <el-button type="primary" @click="del()">点击-1</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("inadd", 1);
    },
    add() {
      this.$store.commit("indel", 1);
    },
  },
};
</script>

<style lang="less" scoped>
.myhead {
  width: 100%;
  height: 20vh;
  background-color: #ffd208;
}
</style>