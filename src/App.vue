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
import Hero from "./components/sections/HeroSection.vue";
import ProfessionalCareer from "./components/Vues/ProfessionalCareer.vue";
import PortfolioVue from "./components/Vues/PortfolioVue.vue";
import ProfessionalSkills from "./components/Vues/ProfessionalSkills";
import MainFooter from "./components/sections/MainFooter.vue";
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
