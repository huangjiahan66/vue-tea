import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import My from "../views/My.vue";
import Cart from "../views/Cart.vue";
import List from "../views/List.vue";
import Search from "../views/Search.vue";
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
  {
    path: "/search",
    name: "search",
    component: Search,
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("../views/search/search-index.vue"),
      },
      {
        path: "list",
        name: "list",
        component: () => import("../views/search/Search-list.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
