<template>
  <div>
    <section id="features">
      <div>
        <div class="container mx-auto">
          <div class="sm:flex justify-between items-center">
            <div class="w-full sm:w-1/2">
              <div class="px-4 flex items-center">
                <img
                  alt="Ngtv Project"
                  class="rounded-lg lazyloaded"
                  src="https://raw.githubusercontent.com/VachetVirginie/portfolio/master/portfolio/img/13.jpg">
              </div>
            </div> <div class="w-full sm:w-1/2">
              <div class="px-4 py-24 sm:flex-col justify-between">
                <h4 class="uppercase text-pink-800 font-medium sm:font-semibold py-4">
                  Key Features
                </h4> <h2 class="text-2xl sm:text-xl lg:text-5xl font-semibold text-gray-700 py-4">
                  Let our <strong>web designers</strong> create memorable digital experience
                </h2>
                <div class="flex items-center justify-around leading-none mt-10 mb-10 p-2 md:p-4">
                  <MainChips msg="Laravel" />
                  <MainChips msg="Pwa" />
                  <MainChips msg="Ovh" />
                  <MainChips msg="Github" />
                </div>
                <p class="text-lg lg:text-xl text-gray-700 py-4 mb-4">
                  Perfect idea deserves an amazing website design. We make magic happen with our award-winning custom designed websites using Vue Js as frontend framework and Laravel as backend framework with mobile-first responsive code for your existing website just for your business.
                </p> <p class="text-lg mb-12 lg:text-xl text-gray-700 py-4">
                  Our <a
                    href="/"
                    class="font-bold text-blue-950">Website Design Agency</a> offers customized integrated solutions that our creative and talented team can help you build a responsive website design. We develop creative web designs that are custom, highly functional, and meet the requirements of our customers most cost-effectively.
                </p>
                <a
                  href="/case-study"
                  class="sm:w-2/3 lg:w-1/2 px-4 py-3 bg-pink-800 rounded-lg text-white">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainChips from "./MainChips.vue";

export default {
    name: "Portfolio",
    components: {
        MainChips
    },
    props: {
        msg:{
            type: String,
            required: true
        }
    },
};
</script>