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
import ProfessionalCareer from "./sections/career/ProfessionalCareerView.vue";
import PortfolioVue from "./sections/portfolio/PortfolioView.vue";
import ProfessionalSkills from "./sections/skills/ProfessionalSkillsView";
import MainFooter from "./components/commons/MainFooter.vue";

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
        meta: [{
            name: "description", content: "Virginie Vachet, developpeuse web Front et Back end, vivant à Lyon."
        },
               {
                   property: "og:title", content: "Portfolio - Virginie Vachet"
               },
               {
                   property: "og:site_name", content: "Virginie Vachet"
               },
               {
                   property: "og:type", content: "website"
               },
               {
                   name: "robots", content: "index,portfolio"
               }]
    },
    beforeCreate() {
        localStorage.setItem("theme", "dark");
        const html = document.querySelector("html");
        document.querySelector("html").classList.add(localStorage.getItem("theme"));
        html.classList.remove("light");
    },
    mounted() {
        setTimeout(() => {
            this.showProfessionalCareer = true;
            this.showProfessionalSkills = true;
            this.showPortfolioVue = true;
            this.showMainFooter = true;
        }, 500);
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
