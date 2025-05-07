import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/app.scss";

// Création de l'application
const app = createApp(App);

// Enregistrement du service worker pour améliorer les performances
if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then(registration => {
                console.log("Service Worker enregistré avec succès:", registration.scope);
            })
            .catch(error => {
                console.log("Erreur lors de l'enregistrement du Service Worker:", error);
            });
    });
}

// Montage de l'application
app.mount("#app");
