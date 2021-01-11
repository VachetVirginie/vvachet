<template>
  <div>
    <div class="text-6xl mt-24 mb-20 text-center font-medium bold"><span class="text-pink-800">Projets </span>sur lesquels j'ai travaillé:</div>
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
                  Ngtv Experience
                </h4> <h2 class="text-2xl sm:text-xl lg:text-5xl font-semibold text-gray-700 py-4">
                  La vidéo intelligente au service du sport
                </h2>
                <div class="flex items-center justify-around leading-none mt-10 mb-10 p-2 md:p-4">
                  <MainChips msg="Symfony" />
                  <MainChips msg="Docker" />
                  <MainChips msg="ApiPlatform" />
                  <MainChips msg="Vue" />
                  <MainChips msg="Nuxt" />
                  <MainChips msg="Vuetify" />
                  <MainChips msg="Github" />
                </div>
                <p class="text-lg lg:text-xl text-gray-700 py-4 mb-4">
                  Je travaille chez Ngtv experience depuis Octobre 2019 en tant que <span class="text-pink-800 font-bold">developpeur web front et back </span>.
                </p> <p class="text-lg mb-12 lg:text-xl text-gray-700 py-4">
                  NGTV est une société de services numériques. L'objectif ? Permettre au sportif amateur de profiter de technologies de pointe pour améliorer sa pratique ou simplement profiter de l'expérience communautaire la plus innovante en Europe!
                </p>
                <a
                  href="https://www.ngtvexperience.com/"
                  class="sm:w-2/3 lg:w-1/2 px-10 py-3 bg-pink-800 rounded-lg text-white">Site</a>
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