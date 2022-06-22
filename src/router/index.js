import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TransferView from "@/views/TransferView.vue";
import SettingsView from "@/views/SettingsView.vue";
import BudgetsView from "@/views/BudgetsView.vue";
import Init from "@/components/Init.vue";
const routes = [
  {
    path: "/",
    name: "root",
    component: Init,
  },
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
    component: { HomeView },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
