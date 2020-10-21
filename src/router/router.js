// 实现路由封装
// 引入vue
import Vue from "vue";
// 引入vue-router
import VueRouter from "vue-router";
// 引入组件
import Index from "@/pages/index.vue";
import login from "@/pages/login.vue";
import son from "@/components/son.vue";
import forgetpassword from "@/components/forgetpassword.vue";
import register from "@/components/register.vue";

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
      component: () => import("@/pages/index"),
      children: [
        {
          name: "a",
          path: "a",
          component: () => import("@/components/a.vue")
        }
      ]
    },
    {
      name: "son",
      path: "/son",
      component: son
    },
    {
      name: "forgetpassword",
      path: "/forgetpassword",
      component: forgetpassword
    },
    {
      name: "register",
      path: "/register",
      component: register
    },
    {
      name: "login",
      path: "/login",
      component: login
    }
  ]
});
