<template>
  <div class="relative overflow-x-hidden">
    <Home />
    <About />
    <Portfolio />
    <MainFooter />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";
import MainFooter from "./components/MainFooter.vue";






export default {
    name: "App",
    components: {
        Home,
        About,
        Portfolio,
        MainFooter,
    },
};
</script>

<style>
</style>
