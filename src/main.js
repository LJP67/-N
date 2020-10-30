import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";

import { Search } from "vant";
import { Toast } from "vant";
import { Swipe, SwipeItem } from "vant";
Vue.config.productionTip = false;
// 使用组件

Vue.use(Search);
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(ElementUI);
// 引入路由模块
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
