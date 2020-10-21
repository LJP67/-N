import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 引入路由模块
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
