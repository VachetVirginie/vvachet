<template>
  <div class="gradient text-red min-h-screen flex items-center">
    <div class="container mx-auto p-4 flex flex-wrap items-center">
      <div class="w-full md:w-6/12 text-center p-4">
        <img
          src="../assets/me.jpeg"
          alt="me">
      </div>
      <div class="w-full md:w-6/12 text-center md:text-left p-4">
        <div class="text-7xl font-medium bold">Virginie <span class="text-pink-800">Vachet</span>,</div>
        <div class="text-6xl font-medium bold">Developpeur Web</div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
    name: "HelloWorld",
    created () {
        this.aos = AOS;
        this.aos.init({
            duration: 2000,
        });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
