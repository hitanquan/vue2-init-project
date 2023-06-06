import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/home/Index.vue";
import Login from "../pages/user/Login.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});
