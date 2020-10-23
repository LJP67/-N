// 实现路由封装
// 引入vue
import Vue from "vue";
// 引入vue-router
import VueRouter from "vue-router";
// 引入组件
import Index from "@/view/index/index.vue";
import login from "@/view/login/login.vue";
// use 路由管理
Vue.use(VueRouter);
// 创建路由对象 实现映射
export default new VueRouter({
  // 添加路由配置 实现路由配置
  routes: [
    // 启动路由
    {
      path: "/",
      redirect: { name: "login" }
    },
    {
      name: "Index",
      path: "/index",
      component: () => import("@/view/index/index.vue"),
      children: []
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/view/login/login.vue")
    },
    {
      name: "forgetpassword",
      path: "/forgetpassword",
      component: () => import("@/components/forgetpassword.vue")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("@/components/register.vue")
    },
    {
      name: "orderpage",
      path: "/orderpage",
      component: () => import("@/components/orderpage.vue")
    }
  ]
});
