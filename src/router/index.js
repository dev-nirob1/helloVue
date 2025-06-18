import { createRouter, createWebHistory } from "vue-router";
import front_routes from '@/zems/Front/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...front_routes
  ],
});

export default router;
