import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TransferView from "@/views/TransferView.vue";
import SettingsView from "@/views/SettingsView.vue";
import BudgetsView from "@/views/BudgetsView.vue";
import DesktopView from "@/views/DesktopView.vue";

import Nprogress from "nprogress";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/transfer",
    name: "transfer",
    component: TransferView,
  },
  {
    path: "/budgets",
    name: "budget",
    component: BudgetsView,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/desktop",
    name: "desktop",
    component: DesktopView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  Nprogress.start();
});
router.afterEach(() => {
  Nprogress.done();
});

export default router;
