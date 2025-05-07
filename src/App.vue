<template>
  <main class="relative overflow-x-hidden dark:bg-dark dark:text-white">
    <Hero />
    <Pointer />
    <SocialMediaBar />
    <ProfessionalCareer v-if="showProfessionalCareer" />
    <ProfessionalSkills v-if="showProfessionalSkills" />
    <PortfolioVue v-if="showPortfolioVue" />
    <MainFooter v-if="showMainFooter" />
  </main>
</template>

<script>
import Hero from "./sections/hero/HeroView.vue";
import Pointer from "./components/commons/Pointer.vue";
import SocialMediaBar from "./components/commons/SocialMediaBar.vue";

// Utilisation de l'importation dynamique pour le lazy loading des composants non critiques
const ProfessionalCareer = () => import(/* webpackChunkName: "career" */ "./sections/career/ProfessionalCareerView.vue");
const PortfolioVue = () => import(/* webpackChunkName: "portfolio" */ "./sections/portfolio/PortfolioView.vue");
const ProfessionalSkills = () => import(/* webpackChunkName: "skills" */ "./sections/skills/ProfessionalSkillsView");
const MainFooter = () => import(/* webpackChunkName: "footer" */ "./components/commons/MainFooter.vue");

export default {
    name: "App",
    components: {
        Hero,
        Pointer,
        SocialMediaBar,
        ProfessionalCareer,
        ProfessionalSkills,
        PortfolioVue,
        MainFooter,
    },
    data() {
        return {
            showProfessionalCareer: false,
            showProfessionalSkills: false,
            showPortfolioVue: false,
            showMainFooter: false,
        };
    },
    metaInfo: {
        title: "Portfolio - Virginie Vachet",
        htmlAttrs: {
            lang: "fr"
        },
        meta: [{
            name: "description", content: "Virginie Vachet, développeuse web Front et Back end, spécialisée en Vue.js, Symfony et API Platform, basée à Lyon."
        },
               {
                   name: "viewport", content: "width=device-width, initial-scale=1"
               },
               {
                   property: "og:title", content: "Portfolio - Virginie Vachet"
               },
               {
                   property: "og:description", content: "Développeuse web Front et Back end, spécialisée en Vue.js, Symfony et API Platform"
               },
               {
                   property: "og:site_name", content: "Virginie Vachet"
               },
               {
                   property: "og:type", content: "website"
               },
               {
                   name: "robots", content: "index,follow"
               },
               {
                   name: "theme-color", content: "#151515"
               }]
    },
    beforeCreate() {
        localStorage.setItem("theme", "dark");
        const html = document.querySelector("html");
        document.querySelector("html").classList.add(localStorage.getItem("theme"));
        html.classList.remove("light");
    },
    mounted() {
        // Utilisation de l'Intersection Observer API pour charger les composants quand ils sont visibles
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                // Chargement progressif des composants pour améliorer les performances
                setTimeout(() => {
                    this.showProfessionalCareer = true;
                }, 100);
                setTimeout(() => {
                    this.showProfessionalSkills = true;
                }, 300);
                setTimeout(() => {
                    this.showPortfolioVue = true;
                }, 500);
                setTimeout(() => {
                    this.showMainFooter = true;
                }, 700);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        // Observer le composant Hero pour déclencher le chargement des autres composants
        const heroElement = document.querySelector("main");
        if (heroElement) observer.observe(heroElement);
    }
};
</script>

<style>
::-moz-selection { /* Code for Firefox */
  color: white;
  background: #fe3769;
}

::selection {
  color: white;
  background: #fe3769;
}

html {
  scroll-behavior: smooth;
  background-color: #151515;
}

</style>
