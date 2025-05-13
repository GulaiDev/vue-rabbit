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
        {
          path: "category/sub/:id",
          component: () => import("@/views/SubCategoryView.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],

  //路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
