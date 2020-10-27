<template>
  <div class="index">
    <Orderpage />
    <Bottom />
  </div>
</template>
<script>
import Orderpage from "@/components/orderpage.vue";
import Bottom from "@/components/bottom.vue";
import "@/style/reset.css";
import "@/style/icon.css";

export default {
  data() {
    return {};
  },

  methods: {},
  components: {
    Orderpage,
    Bottom,
  },
};
</script>

<style  lang="less">

</style>
