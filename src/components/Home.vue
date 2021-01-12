/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="gradient text-red min-h-screen flex items-center Home">
    <div class="absolute top-0 right-0 p-24 translate-r-full ">
      <svg
        class="hidden md:block h-48 w-48 transform rotate-180 text-pink-800"
        viewBox="0 0 184 184"
        xmlns="http://www.w3.org/2000/svg"><path
          d="M182 184a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 80a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM22 144a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 144a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          fill="currentColor"
          fill-rule="evenodd" /></svg>
    </div>
    <div class="container mx-auto p-4 flex flex-wrap items-center">
      <div
        class="w-full md:w-6/12 text-center p-4"
        data-aos="fade-right">
        <img
          src="../assets/me.jpeg"
          alt="me"
          :class="classes"
          @mouseover="hoverOver"
          @mouseout="hoverOut">
      </div>
      <div
        class="w-full md:w-6/12 text-center md:text-left"
        data-aos="fade-left">
        <div class="text-6xl font-medium bold title">Virginie <span class="text-pink-800">Vachet</span>,</div>
        <div class="text-5xl font-medium bold title">Developpeur Web</div>
        <div class="mt-12">
          <div class="ml-24 flex content-around">
            <a
              href="https://github.com/VachetVirginie">
              <img
                src="./../assets/twitter.svg"
                alt="twitter icon"
                class="h-10 mr-6 color-bg-gray-700">
            </a>
            <img
              src="./../assets/instagram.svg"
              alt="instagram icon"
              class="h-10 mr-6 color-bg-gray-700">
            <img
              src="./../assets/linkedin.svg"
              alt="linkedin icon"
              class="h-10 color-bg-gray-700">
          </div>
        </div>
      </div>
    </div>
  </div>
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
            duration: 2000,
        });
    },
    methods: {
        hoverOver ()  {
            this.classes = ["animated", "bounceIn"];
        },
        hoverOut ()  {
            this.classes = [];
        },
        hoverOverTimeOUt ()  {
            setTimeout(() => {
                this.classes = [];
            }, 1000);

        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
