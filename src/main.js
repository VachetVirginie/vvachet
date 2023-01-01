import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag-next";

// We can import Tailwind directly here if we dont want
// to use our own styles in /src/assets/css/app.scss
// import 'tailwindcss/tailwind.css'
const app = createApp(App);
app.use(VueGtag, {
    property: { id: "G-WF34TRY6HP" },
    useDebugger: false,
    isEnabled: true,
    send_page_view: true,
});
// Import our own SCSS file which includes importing Tailwind
import "./assets/css/app.scss";

createApp(App).mount("#app");
