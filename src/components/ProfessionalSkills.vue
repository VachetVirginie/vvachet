<template>
  <section class="flex flex-wrap">
    <div
      v-for="item in items"
      :key="item.message"
      class="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div
        class="flex-1 flex flex-col sal-animate rounded-lg"
        data-aos="fade-up">
        <div class="h-full p-6 rounded-lg border-2 border-primary flex flex-col relative overflow-hidden items-center text-center justify-center hover:scale-105">
          <div>
            <img
              :src="`img/technos/${item.img}`"
              alt="symfony"
              class="h-20 color-bg-gray-700 inline-block hover:skew-y-6">
          </div>
          <div class="w-12 h-1 bg-primary rounded mt-2 mb-4" />
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
                message: "Vue", img: "vuejs.svg"
            },
                    {
                        message: "Nuxt", img: "nuxt.svg"
                    },
                    {
                        message: "Javascript", img: "javascript.svg"
                    },
                    {
                        message: "TailwindCss", img: "tailwindcss.svg"
                    },
                    {
                        message: "Vuetify", img: "vuetify.svg"
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
                    },]
        };
    }
};
</script>

<style>
.bg-fond {
        background: center  no-repeat url("./../assets/backgrounds/background-dots.svg");
    }
@media (max-width: 390px) {
.bg-fond {
        background: center url("./../assets/backgrounds/background-dots.svg");
        background-repeat: space;
    }
}
</style>