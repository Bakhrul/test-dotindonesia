import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Axios from "axios";

import "@/assets/scss/app.scss";
import "font-awesome/css/font-awesome.min.css";

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
