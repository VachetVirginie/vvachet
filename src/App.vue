<template>
  <div class="relative overflow-x-hidden dark:bg-dark dark:text-white">
    <!--    <div class="flex items-center justify-between p-4 rounded-lg shadow ligth:bg-primary dark:bg-dark dark:text-white">-->
    <!--      <div class="dark:text-white">-->
    <!--        <img-->
    <!--          src="https://raw.githubusercontent.com/VachetVirginie/portfolio/master/img/vvlogo.png"-->
    <!--          alt="logo"-->
    <!--          class="object-scale-down size">-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <button-->
    <!--          class="w-6 h-6 mr-2 bg-yellow-200 rounded-full focus:outline-none"-->
    <!--          @click.prevent="selectTheme('light')">-->
    <!--          ☀️-->
    <!--        </button>-->
    <!--        <button-->
    <!--          class="w-6 h-6 rounded-full focus:outline-none bg-tellow"-->
    <!--          @click.prevent="selectTheme('dark')">-->
    <!--          🌑-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->
    <Pointer />
    <Home />
    <SocialMediaBar />
    <About />
    <Portfolio />
    <MainFooter />
  </div>
</template>

<script>
import Pointer from "./components/Pointer.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";
import MainFooter from "./components/MainFooter.vue";
import SocialMediaBar from "./components/SocialMediaBar.vue";

export default {
    name: "App",
    components: {
        Pointer,
        SocialMediaBar,
        Home,
        About,
        Portfolio,
        MainFooter,
    },
    mounted() {
        this.$gtag.pageview({
            page_path: "/home",
        });
        localStorage.setItem("theme", "dark");
        const html = document.querySelector("html");
        document.querySelector("html").classList.add(localStorage.getItem("theme"));
        html.classList.remove("light");
    },
    // methods: {
    //     selectTheme(indexing){
    //         localStorage.setItem("theme", indexing);
    //         const html = document.querySelector("html");
    //         html.classList.add(localStorage.getItem("theme"));
    //         if(indexing == "dark"){
    //             html.classList.remove("light");
    //         }else{
    //             html.classList.remove("dark");
    //         }
    //     },
    // }
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
