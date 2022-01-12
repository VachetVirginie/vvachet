<template>
  <div class="relative overflow-x-hidden dark:bg-gray-800 dark:text-white">
    <div class="ligth:bg-primary dark:bg-gray-800 dark:text-white shadow p-4 rounded-lg mb-6 flex justify-between items-center">
      <div class="text-lg dark:text-white">Dark Mode Switch</div>
      <div>
        <button
          class="focus:outline-none w-6 h-6 bg-yellow-200 rounded-full mr-2"
          @click.prevent="selectTheme('light')">
          ☀️
        </button>
        <button
          class="focus:outline-none w-6 h-6 bg-tellow rounded-full"
          @click.prevent="selectTheme('dark')">
          🌑
        </button>
      </div>
    </div>
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
    mounted() {
        document.querySelector("html").classList.add(localStorage.getItem("theme"));
    },
    methods: {
        selectTheme(indexing){
            localStorage.setItem("theme", indexing);
            const html = document.querySelector("html");
            html.classList.add(localStorage.getItem("theme"));
            if(indexing == "dark"){
                html.classList.remove("light");
            }else{
                html.classList.remove("dark");
            }
        },
    }
};
</script>

<style>
</style>
