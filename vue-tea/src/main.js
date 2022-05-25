import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入vant组件库
import Vant from "vant";
import "vant/lib/index.css";
// 公共css
import "./assets/css/common.css";
import "./assets/css/iconfont.css";
//淘宝适配文件
import "./assets/js/flexible";
Vue.config.productionTip = false;
Vue.use(Vant);

import LyTab from "ly-tab";
Vue.use(LyTab);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
