import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import My from "../views/my.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/my",
    name: "my",
    component: My,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
