<template>
  <div class="home">
    <Myhead />
    <Bottom />
  </div>
</template>

<script>
import Bottom from "@/components/bottom.vue";
import Myhead from "@/view/column/myhead.vue";

export default {
  data() {
    return {};
  },
  components: {
    Bottom,
    Myhead,
  },
};
</script>

<style>
</style>