<template>
  <main class="relative overflow-x-hidden dark:bg-dark dark:text-white">
    <Pointer />
    <Hero />
    <SocialMediaBar />
    <ProfessionalCareer />
    <ProfessionalSkills />
    <PortfolioVue />
    <MainFooter />
  </main>
</template>

<script>
import Pointer from "./components/commons/Pointer.vue";
import Hero from "./sections/hero/HeroView.vue";
import ProfessionalCareer from "./sections/career/ProfessionalCareerView.vue";
import PortfolioVue from "./sections/portfolio/PortfolioView.vue";
import ProfessionalSkills from "./sections/skills/ProfessionalSkillsView";
import MainFooter from "./components/commons/MainFooter.vue";
import SocialMediaBar from "./components/commons/SocialMediaBar.vue";

export default {
    name: "App",
    components: {
        ProfessionalSkills,
        Pointer,
        SocialMediaBar,
        Hero,
        ProfessionalCareer,
        PortfolioVue,
        MainFooter,
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
    mounted() {
        localStorage.setItem("theme", "dark");
        const html = document.querySelector("html");
        document.querySelector("html").classList.add(localStorage.getItem("theme"));
        html.classList.remove("light");
    }
};
</script>

<style>
.size {
  height: 50px;
}
::-moz-selection { /* Code for Firefox */
  color: white;
  background: #5311DF;
}

::selection {
  color: white;
  background: #5311DF;
}
</style>
