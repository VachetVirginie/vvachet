<template>
  <div class="gradient text-red min-h-screen flex items-center Home">
    <div class="container mx-auto p-4 flex flex-wrap items-center">
      <div
        class="w-full md:w-6/12 text-center p-4"
        data-aos="fade-right">
        <img
          src="../assets/me.jpeg"
          alt="me">
      </div>
      <div
        class="w-full md:w-6/12 text-left md:text-left p-4"
        data-aos="fade-left">
        <div class="text-6xl font-medium bold">Virginie <span class="text-pink-800">Vachet</span>,</div>
        <div class="text-5xl font-medium bold">Developpeur Web</div>
        <div class="mt-12">
          <div class="flex">
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
    created () {
        this.aos = AOS;
        this.aos.init({
            miror:true,
            duration: 2000,
        });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
