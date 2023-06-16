import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home/Home.vue";
import Login from "@/pages/user/Login.vue";

Vue.use(VueRouter);

const myRouter = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/user/login",
      component: Login,
    },
  ],
});

myRouter.beforeEach((to, from, next) => {
  const loginUserInfo = JSON.parse(sessionStorage.getItem("loginUserInfo"));
  const userLoginStatus = loginUserInfo?.userLoginStatus;

  if (userLoginStatus && to.path === "/user/login") {
    next("/home");
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

export default myRouter;
