import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/components/views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/components/views/ContactView.vue"),
    },
  ],
});

export default router;
