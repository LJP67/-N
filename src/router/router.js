// 实现路由封装
// 引入vue
import Vue from "vue";
// 引入vue-router
import VueRouter from "vue-router";
// 引入组件
// use 路由管理
Vue.use(VueRouter);
// 创建路由对象 实现映射
const router = new VueRouter({
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
      name: "order",
      path: "/order",
      component: () => import("@/view/index/order.vue"),
      children: []
    },
    {
      name: "information",
      path: "/information",
      component: () => import("@/view/index/information.vue"),
      children: []
    },
    {
      name: "home",
      path: "/home",
      component: () => import("@/view/index/home.vue"),
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
    },
    {
      name: "classify",
      path: "/classify",
      component: () => import("@/components/classify.vue")
    },
    {
      name: "findtabs",
      path: "/findtabs",
      component: () => import("@/components/findtabs.vue")
    },
    {
      name: "bottom",
      path: "/bottom",
      component: () => import("@/components/bottom.vue")
    },
    {
      name: "location",
      path: "/location",
      component: () => import("@/view/location/location.vue")
    },
    {
      name: "tabs0",
      path: "/tabs0",
      component: () => import("@/view/findtabs/tabs0.vue")
    },
    {
      name: "tabs1",
      path: "/tabs1",
      component: () => import("@/view/findtabs/tabs1.vue")
    },
    {
      name: "tabs2",
      path: "/tabs2",
      component: () => import("@/view/findtabs/tabs2.vue")
    },
    {
      name: "vuex",
      path: "/vuex",
      component: () => import("@/components/vuex.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("loginUser")) {
    if (to.path !== "/login") {
      next("/login");
    }
  }
  next();
});
export default router;
