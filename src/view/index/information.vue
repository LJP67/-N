<template>
  <div class="information">
    <div class="message">
      <p>
        <span style="font-size: 1rem">消息</span>
        <span class="eliminate" @click="clearmessage">清除未读</span>
      </p>
    </div>
    <Infor />
    <Bottom />
  </div>
</template>

<script>
import Bottom from "@/components/bottom.vue";
import Infor from "@/view/findtabs/infor.vue";

export default {
  data() {
    return {};
  },
  methods: {
    clearmessage() {
      console.log("已消除未读消息");
    },
  },
  components: {
    Bottom,
    Infor,
  },
};
</script>

<style lang="less" scoped>
.information {
  width: 100%;
  height: 100%;
}
.message {
  text-align: center;
  background-color: #ffcf01;
  width: 100%;
  height: 6vh;
  line-height: 6vh;
}
.message p {
  position: relative;
}
.eliminate {
  position: absolute;
  color: #5e5e5e;
  right: 4%;
}
</style>>
