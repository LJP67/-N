<template>
  <div class="index">
    <Orderpage />
    <Classify />
    <Findtabs />
    <Bottom />
  </div>
</template>
<script>
import Orderpage from "@/components/orderpage.vue";
import Bottom from "@/components/bottom.vue";
import Classify from "@/components/classify.vue";
import Findtabs from "@/components/findtabs.vue";

import "@/style/reset.css";
import "@/style/icon.css";

export default {
  data() {
    return {};
  },

  methods: {},
  components: {
    Orderpage,
    Classify,
    Findtabs,
    Bottom,
  },
};
</script>

<style  lang="less">
.index {
  background-color: #f6f6f6;
}
</style>
