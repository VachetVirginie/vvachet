<template>
  <div>
    <Home />
    <About />
    <Test />
    <MainFooter />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Test from "./components/Test.vue";
import About from "./components/About.vue";
import MainFooter from "./components/MainFooter.vue";






export default {
    name: "App",
    components: {
        Home,
        Test,
        About,
        MainFooter,
    },
};
</script>

<style>
</style>
