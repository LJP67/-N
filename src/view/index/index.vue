<template>
  <div class="index">
    <Orderpage />
    <Classify />
    <Bottom />
  </div>
</template>
<script>
import Orderpage from "@/components/orderpage.vue";
import Bottom from "@/components/bottom.vue";
import Classify from "@/components/classify.vue";

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
    Classify
  },
};
</script>

<style  lang="less">

</style>
