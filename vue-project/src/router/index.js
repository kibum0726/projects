import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
     component: () =>
          import(/* webpackChunkName: "about" */ "@/views/main/MainPage"),
  },
  {
    path: "/info",
    name: "Info",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Info/Info.vue"),
  },
  {
    path: "/details/:id",
    name : "details",
    component: () => import("@/views/detail/detailPage.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActivateClass : 'active',
  routes,
});
export default router

