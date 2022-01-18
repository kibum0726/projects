import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
     component: () =>
          import(/* webpackChunkName: "about" */ "@/views/main/MainPage"),
  },
  {
    path: "/details/:id",
    name : "details",
    component: () => import("@/views/detail/DetailPage.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActivateClass : 'active',
  routes,
});
export default router

