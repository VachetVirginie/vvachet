/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <main class="container px-10 mx-auto">
    <section class="grid items-center grid-cols-1 gap-10 pt-24 pb-24 md:grid-cols-2 md:gap-12 lg:gap-20 xl:pt-24 2xl:pt-56">
      <div class="order-1 md:order-1 md:mt-0">
        <div class="relative">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            class="text-2xl font-bold text-primary lg:text-3xl xl:text-4xl title-min">
            {{ datas._home.say_hello }} <span class="inline-block pr-4 animate-wiggle">👋</span>
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            class="text-3xl lg:text-4xl xl:text-5xl">
            {{ datas._home.name }}
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            class="mt-5 leading-relaxed xl:w-3/4 2xl:text-xl">
            {{ datas._home.title_1 }}
            <span class="underline-effect">{{ datas._home.title_2 }}</span>
            {{ datas._home.title_3 }}
            <span class="underline-effect">{{ datas._home.title_4 }}</span>
            {{ datas._home.title_5 }}
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        class="relative order-2 p-4 border border-purple-300 rounded-full dark:border-purple-700 dark:border-opacity-50 lg:p-7 xl:p-9">
        <div class="relative p-4 border border-purple-300 rounded-full dark:border-purple-800 dark:border-opacity-50 lg:p-7 xl:p-9">
          <img
            class="w-full rounded-full"
            alt="Me"
            src="../../assets/heroCharacter.svg"
            home-skill>
        </div>
        <ul
          class="absolute top-0 left-0 w-full h-full rounded-full"
          home-skill>
          <li
            class="absolute flex items-center justify-center bg-white rounded-full shadow-2xl skill bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur"
            title="ApiPlatform"
            home-skill>
            <img
              src="../../assets/technologies/webby.svg"
              alt="api platform logo"
              home-skill>
          </li>
          <li
            class="absolute flex items-center justify-center bg-white rounded-full shadow-2xl skill bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur"
            title="NuxtJs"
            home-skill>
            <img
              src="../../assets/technologies/nuxt.svg"
              alt="nuxt logo"
              home-skill>
          </li>
          <li
            class="absolute flex items-center justify-center bg-white rounded-full shadow-2xl skill bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur"
            title="Symfony"
            home-skill="">
            <img
              src="../../assets/technologies/symfony.svg"
              alt="symfony logo"
              home-skill>
          </li>
          <li
            class="absolute flex items-center justify-center bg-white rounded-full shadow-2xl skill bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur"
            title="Vuejs"
            home-skill>
            <img
              src="../../assets/technologies/vue.svg"
              alt="vue logo"
              home-skill>
          </li>
          <li
            class="absolute flex items-center justify-center bg-white rounded-full shadow-2xl skill bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur"
            title="Docker"
            home-skill>
            <img
              src="../../assets/docker.svg"
              alt="docker logo"
              home-skill>
          </li>
          <li
            class="absolute flex items-center justify-center bg-white rounded-full shadow-2xl skill bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur"
            title="Tailwind"
            home-skill>
            <img
              src="../../assets/technologies/tailwind.svg"
              alt="tailwind logo"
              home-skill>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import text from "../../text/data.json";
export default {
    name: "Home",
    data () {
        return {
            classes: [],
            datas: text
        };
    },
    created () {
        this.aos = AOS;
        this.aos.init({
            miror:true,
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-rect {
  background-color: #6EE7B7;
  padding-top: 550px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

.top-rect::after {
  content: "";
  display: block;
  position: absolute;
  background-color: white;
  height: 600px;
  width: 8000px;
  z-index: 1;
  bottom: -50%;
  left: 50%;
  margin-left: -4000px;
  transform: rotate(-6deg);
}
</style>
