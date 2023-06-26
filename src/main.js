import { createApp } from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";
import "./assets/css/app.scss";

createApp(App).mount("#app").use(VueMeta);
