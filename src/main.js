import { createApp } from "vue";
import veProgress from "vue-ellipse-progress";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "nprogress/nprogress.css";

createApp(App).use(store).use(router).use(veProgress).mount("#app");
