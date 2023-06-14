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
import ProfessionalCareer from "./components/vues/ProfessionalCareer.vue";
import PortfolioVue from "./components/vues/PortfolioVue.vue";
import ProfessionalSkills from "./components/vues/ProfessionalSkills";
import MainFooter from "./components/sections/FooterSection.vue";
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
