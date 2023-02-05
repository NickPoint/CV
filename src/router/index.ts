import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainView from "@/views/MainView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: { name: "main" },
  },
  {
    path: "/CV/",
    name: "main",
    component: MainView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
