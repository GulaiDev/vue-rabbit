import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "@/views/LayoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutView,
      children: [
        {
          path: "",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "category/:id",
          component: () => import("@/views/CategoryView.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

export default router;
