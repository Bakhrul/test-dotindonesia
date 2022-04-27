import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Calculator from "../views/Calculator.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (!localStorage.getItem("token")) {
      return next("/login");
    } else {
      return next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (!localStorage.getItem("token")) {
      return next();
    } else {
      return next("/");
    }
  } else {
    return next();
  }
});

export default router;
