<template>
  <div>
    <HelloWorld />
    <About />
    <Test />
    <MainFooter />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
import About from "./components/About.vue";
import MainFooter from "./components/MainFooter.vue";




export default {
    name: "App",
    components: {
        HelloWorld,
        Test,
        About,
        MainFooter
    },
};
</script>

<style>
</style>
