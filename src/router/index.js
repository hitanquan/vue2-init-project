import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home/Home.vue";
import Login from "@/pages/user/Login.vue";
import NotFound from "@/pages/404/NotFound.vue";
import Register from "@/pages/user/Register.vue";
import SysMenuPage from "@/pages/sys/SysMenuPage.vue";
import SysDictPage from "@/pages/sys/SysDictPage.vue";
import SysRolePage from "@/pages/sys/SysRolePage.vue";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/user/login",
    component: Login,
    hidden: true,
  },
  {
    path: "/user/register",
    component: Register,
    hidden: true,
  },
  {
    path: "/home",
    component: Home,
    icon: "desktop",
    meta: {
      title: "首页",
    },
  },
  {
    path: "/404",
    component: NotFound,
    hidden: true,
  },
  {
    path: "/sys",
    component: Home,
    icon: "setting",
    meta: {
      title: "系统管理",
    },
    children: [
      {
        path: "/menu",
        component: SysMenuPage,
        meta: {
          title: "菜单管理",
        },
      },
      {
        path: "/dict",
        component: SysDictPage,
        meta: {
          title: "数据字典",
        },
      },
    ],
  },
  {
    path: "/user",
    component: Home,
    icon: "user",
    meta: {
      title: "用户管理",
    },
    children: [
      {
        path: "/role",
        component: SysRolePage,
        meta: {
          title: "角色管理",
        },
      },
    ],
  },
];

const myRouter = new VueRouter({
  mode: "history",
  routes: constantRoutes,
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
