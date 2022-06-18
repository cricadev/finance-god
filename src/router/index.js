import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TransferView from "@/views/TransferView.vue";
import SettingsView from "@/views/SettingsView.vue";
import BudgetsView from "@/views/BudgetsView.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: [HomeView, TransferView, SettingsView, BudgetsView],
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
