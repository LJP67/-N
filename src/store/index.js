import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    inadd(state, payload) {
      state.num++;
    },
    indel(state, payload) {
      state.num--;
    }
  },
  getters: {
    //跟计算属性一样具有缓存作用
    getadd(state) {
      //实时监控state的内容(最新状态)
      return state.num;
    }
  },

  actions: {},
  modules: {}
});
