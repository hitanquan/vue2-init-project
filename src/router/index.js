import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/pages/home/Index.vue";
import Login from "@/pages/user/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/index",
      component: Index,
      // redirect: "/user/login",
    },
    {
      path: "/user/login",
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let userLoginStatus = sessionStorage.getItem("userLoginStatus");

  if (userLoginStatus && to.path === "/user/login") {
    next("/index");
    return;
  }

  if (to.path !== "/user/login") {
    if (userLoginStatus) {
      next();
    } else {
      next("/user/login");
    }
  } else {
    next();
  }
});

export default router;
