<template>
  <div class="son">
    <h2>Son组件</h2>
    
    <input type="text" v-model="isnumber" />
  </div>
</template>

<script>
import eventBus from '@/utlis/eventBus.js'
export default {
  props: [],
  data() {
    return {
      isnumber: "",
     
    };
  },
  methods: {
   
  },
  watch: {
      isnumber(newVal,oldVal){
          console.log(newVal)
          console.log(oldVal)
      }
  },
};
</script>

<style  lang="less" scoped>
.son {
  border: 1px solid #b7f1c1;
  background-color: #b7f1c1;
}
</style>>
