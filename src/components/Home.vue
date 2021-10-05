/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="gradient text-red min-h-screen flex items-center Home">
    <div class="top-rect" />
    <div class="container mx-auto p-4 flex flex-wrap items-center">
      <div
        class="w-full md:w-6/12 text-center p-4"
        data-aos="fade-right">
        <img
          src="../assets/me.png"
          alt="me"
          :class="classes">
      </div>
      <div
        class="w-full md:w-6/12 text-center md:text-left"
        data-aos="fade-left">
        <div class="text-6xl font-medium bold title">Virginie <span class="text-pink-800">Vachet</span>,</div>
        <div class="text-5xl font-medium bold title">Developpeur Web</div>
        <div class="mt-12">
          <div class="ml-24 flex content-around">
            <a
              href="https://twitter.com/VirginieVachet">
              <img
                src="./../assets/twitter.svg"
                alt="twitter icon"
                class="h-10 mr-6 color-bg-gray-700">
            </a>
            <a
              href="https://www.instagram.com/waspyi/">
              <img
                src="./../assets/instagram.svg"
                alt="instagram icon"
                class="h-10 mr-6 color-bg-gray-700">
            </a>
            <a
              href="https://www.linkedin.com/in/vachetvirginie/">
              <img
                src="./../assets/linkedin.svg"
                alt="linkedin icon"
                class="h-10 color-bg-gray-700">
            </a>
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
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-rect {
  background-color: #9D174D;
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
