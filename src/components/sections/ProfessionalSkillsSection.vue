<template>
  <section class="flex flex-wrap mt-0 sm:mt-12">
    <div
      v-for="item in items"
      :key="item.message"
      class="w-full p-4 xl:w-1/4 md:w-1/2">
      <div
        class="flex flex-col flex-1 rounded-lg sal-animate"
        data-aos="fade-up"
        data-aos-duration="2000">
        <div class="relative flex flex-col items-center justify-center h-full p-6 overflow-hidden text-center border-2 rounded-lg border-primary hover:scale-105">
          <div>
            <img
              :src="`img/technos/${item.img}`"
              alt="symfony"
              class="inline-block h-20 color-bg-gray-700 hover:skew-y-6">
          </div>
          <div class="w-12 h-1 mt-2 mb-4 rounded bg-primary" />
          <div>
            <h5 class="text-xl">{{ item.message }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "ProfessionalSkills",
    data: function() {
        return {
            items: [{
                message: "JavaScript", img: "javascript.svg"
            },
                    {
                        message: "TypeScript", img: "typescript.svg"
                    },
                    {
                        message: "Vue.js Options API", img: "vuejs.svg"
                    },
                    {
                        message: "Vue.js Composition API", img: "vuejs.svg"
                    },
                    {
                        message: "Nuxt", img: "nuxt.svg"
                    },
                    {
                        message: "TailwindCss", img: "tailwindcss.svg"
                    },
                    {
                        message: "Vuetify", img: "vuetify.svg"
                    },
                    {
                        message: "PrimeVUE", img: "primevue.svg"
                    },
                    {
                        message: "GrapgQl", img: "graphql.svg"
                    },
                    {
                        message: "Symfony" , img: "symfony.svg"
                    },
                    {
                        message: "Api Platform", img: "apiPlatform.svg"
                    },
                    {
                        message: "Php", img: "php.svg"
                    },
                    {
                        message: "Docker", img: "docker.svg"
                    },
                    {
                        message: "Postman", img: "postman.svg"
                    },
                    {
                        message: "Github", img: "github.svg"
                    }]
        };
    }
};
</script>

<style>
.bg-fond {
  background: center  no-repeat url("../../assets/backgrounds/background-dots.svg");
}
@media (max-width: 390px) {
  .bg-fond {
    background: center url("../../assets/backgrounds/background-dots.svg");
    background-repeat: space;
  }
}
</style>
