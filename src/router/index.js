import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/pages/home/Index.vue";
import Login from "@/pages/user/Login.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/user/login",
      component: Login,
    },
  ],
});
