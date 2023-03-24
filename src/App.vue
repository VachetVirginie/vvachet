<template>
  <div class="relative overflow-x-hidden dark:bg-dark dark:text-white">
    <Pointer />
    <Hero />
    <SocialMediaBar />
    <Career />
    <ProfessionalSkills />
    <Portfolio />
    <MainFooter />
  </div>
</template>

<script>
import Pointer from "./components/commons/Pointer.vue";
import Hero from "./components/sections/HeroSection.vue";
import Career from "./components/sections/CareerSection.vue";
import Portfolio from "./components/sections/PortfolioSection.vue";
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
        Career,
        Portfolio,
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
