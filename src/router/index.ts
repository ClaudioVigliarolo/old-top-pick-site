import { Lang } from "@/interfaces/interfaces";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Questions from "../views/Questions.vue";
import GetApp from "../views/GetApp.vue";

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
    path: "/:lang/get-app",
    name: "GetApp",
    component: GetApp,
  },

  { path: "/", redirect: (to) => `/${Lang.EN}` },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
