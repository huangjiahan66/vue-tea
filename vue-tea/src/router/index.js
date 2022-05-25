import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import My from "../views/My.vue";
import Cart from "../views/Cart.vue";
import List from "../views/List.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/list",
    name: "list",
    component: List,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
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
