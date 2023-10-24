import { createRouter, createWebHashHistory } from "vue-router";
import UsersPage from "../pages/UsersPage.vue";
import UserPage from "../pages/UserPage.vue";

const routes = [
  {
    path: "/",
    component: UsersPage,
  },
  {
    path: "/user/:id",
    component: UserPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
