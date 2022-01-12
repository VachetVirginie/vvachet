/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <main class="container mx-auto px-10">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center pt-24 xl:pt-44 2xl:pt-56 pb-24">
      <div class="order-1 md:order-1 md:mt-0">
        <div class="relative">
          <h1 data-aos="fade-right" class="text-primary font-semibold text-lg"> Hola 👋, </h1>
          <h1 data-aos="fade-right" class="text-3xl lg:text-4xl xl:text-5xl font-bold">Virginie Vachet</h1>
          <p data-aos="fade-right" class="xl:w-3/4 2xl:text-xl leading-relaxed mt-5">Developpeuse web <span class="text-primary">Front</span> et <span class="text-primary">Back</span>, vivant à Lyon</p>
        </div>
      </div>
      <div data-aos="fade-left" class="relative rounded-full border-gray-300 order-1 dark:border-gray-700 dark:border-opacity-50 border p-4 lg:p-7 xl:p-9" data-v-5e096964="">
        <div class="relative rounded-full border-gray-300 dark:border-gray-700 dark:border-opacity-50 border p-4 lg:p-7 xl:p-9" data-v-5e096964="">
          <img class="w-full rounded-full" alt="Robert Anderson photo" src="../assets/toto.svg" loading="lazy" data-v-5e096964="">
        </div>
        <ul class="absolute top-0 left-0 w-full h-full rounded-full" data-v-5e096964="">
          <li class="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl" title="vue" data-v-5e096964=""><img src="../assets/technologies/webby.png" alt="vue logo" loading="lazy" data-v-5e096964="">
          </li>
          <li class="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl" title="figma" data-v-5e096964=""><img src="../assets/technologies/nuxt.svg" alt="figma logo" loading="lazy" data-v-5e096964="">
          </li>
          <li class="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl" title="react" data-v-5e096964=""><img src="../assets/technologies/symfony.svg" alt="react logo" loading="lazy" data-v-5e096964="">
          </li>
          <li class="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl" title="sketch" data-v-5e096964=""><img src="../assets/technologies/vue.svg" alt="sketch logo" loading="lazy" data-v-5e096964="">
          </li>
          <li class="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl" title="sass" data-v-5e096964=""><img src="../assets/technologies/sass.svg" alt="sass logo" loading="lazy" data-v-5e096964="">
          </li>
          <li class="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl" title="tailwind" data-v-5e096964=""><img src="../assets/technologies/tailwind.svg" alt="tailwind logo" loading="lazy" data-v-5e096964="">
          </li>
        </ul>
      </div>
    </section>
  </main >
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
    name: "Home",
    data () {
        return {
            classes: []
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
