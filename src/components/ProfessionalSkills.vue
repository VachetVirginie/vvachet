<template>
  <section class="grid grid-cols-3 pb-12">
    <div
      v-for="item in items"
      :key="item.message">
      <div
        class="flex-1 flex flex-col sal-animate rounded-lg"
        data-aos="fade-up">
        <div class="flex-1 flex flex-col justify-between p-4">
          <div>
            <img
              :src="`img/technos/${item.img}`"
              alt="symfony"
              class="h-20 color-bg-gray-700 inline-block">
          </div>
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
                message: "Symfony" , img: "symfony.svg"
            },
                    {
                        message: "Vue", img: "vuejs.svg"
                    },
                    {
                        message: "Api Platform", img: "apiPlatform.svg"
                    },
                    {
                        message: "Php", img: "php.svg"
                    },
                    {
                        message: "Nuxt", img: "nuxt.svg"
                    },
                    {
                        message: "Docker", img: "docker.svg"
                    },
                    {
                        message: "Javascript", img: "javascript.svg"
                    },
                    {
                        message: "GrapgQl", img: "graphql.svg"
                    },
                    {
                        message: "Github", img: "github.svg"
                    },]
        };
    }
};
</script>