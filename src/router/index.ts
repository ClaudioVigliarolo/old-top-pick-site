import { Lang } from "@/interfaces/interfaces";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Questions from "../views/Questions.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:lang",
    name: "Home",
    component: Home,
  },

  {
    path: "/:lang/questions",
    name: "Questions",
    component: Questions,
  },

  {
    path: "/:lang/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  { path: "/", redirect: (to) => `/${Lang.EN}` },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
